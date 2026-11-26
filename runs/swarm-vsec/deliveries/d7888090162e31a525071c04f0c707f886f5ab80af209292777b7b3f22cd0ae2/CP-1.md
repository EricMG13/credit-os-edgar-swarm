---
issuer_id: vsec
module_id: CP-1
analysis_date: 2026-11-05
---

## Request

VSE CORP (issuer vsec), as of 2026-11-05, credit snapshot pathway. This module builds the financial foundation from the seven supplied filings and releases: statements for FY2024 to Q3 2026, net debt, leverage, interest cover, liquidity and the debt structure. The reporting entity is VSE Corporation and its subsidiaries, consolidated.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_vsec-20251231.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2025-12-31 (audited) | 2026-02-27 | 83b072172f28f55aebaf3a6972f9c86687a4b113bdf988f323774cea0cf36aed | FY2024 and FY2025 statements, cash paid for interest, debt note, segment note, subsequent events |
| 10-Q_2026-03-31_vsec-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 (unaudited) | 2026-05-08 (signature date) | f6b924ea5eba470e1f49667b84c48b593c43a380b95f687d6114875e8f37f39d | Q1 2026 and Q1 2025 statements, 2026-03-31 balance sheet, debt note, term loan B repayment schedule |
| 10-Q_2026-06-30_vsec-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 (unaudited) | 2026-08-06 (signature date) | fa3609d44d226dc8671529fb2fbfc175fcb641b5ffc98070769608107bc75600 | H1 2026 and H1 2025 statements, 2026-06-30 balance sheet, debt note, liquidity |
| 10-Q_2026-09-30_vsec-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 (unaudited) | 2026-11-05 (signature date) | 68af0ce7093699c714a705843bb9cea05a028d2dd1bb6a0a12fdd362022c36f1 | 9M 2026 and 9M 2025 statements, 2026-09-30 balance sheet, debt and maturity note, acquisitions, liquidity |
| EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl | Earnings press release for the first quarter of 2026 (exhibit 99.1) | 2026-05-05 | 1a0b0741e0cb41d8d01fb77bba0765b0d91e0ee2d640c0871a3ef4c38f0e2f04 | EBITDA and Adjusted EBITDA for Q1 2026 and Q1 2025, net debt at 2026-03-31 |
| EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl | Earnings press release for the second quarter of 2026 (exhibit 99.1) | 2026-08-05 | 047a25aea3f55f6b12255c44556aba2d1cd8074d64427d9b3bf8fc3f0328e7e4 | EBITDA and Adjusted EBITDA for Q2 and H1, net debt and leverage at 2026-06-30 |
| EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl | Earnings press release for the third quarter of 2026 (exhibit 99.1) | 2026-11-04 | 433c5d4af4ceef97f7133d6bf32c06676acee7a23adece5c52f374d8108500f0 | EBITDA and Adjusted EBITDA for Q3 and 9M, TTM and acquisition-adjusted EBITDA, net debt and leverage at 2026-09-30 |

Supplied module output used:

| Module | Document | sha256 | Use |
|---|---|---|---|
| Source readiness (CP-0) | Source readiness handoff for VSE CORP as of 2026-11-05 | e8747ba23c9379b015b26cb84fddf7ec7fb975f4a8e2ff5cc5d87b7825587d8f | Source inventory, gaps and the definition differences it logged |

## Findings

### Bottom line

Net debt rose to USD 894.2 million at 2026-09-30 from USD 223.4 million at year-end 2025, so net leverage on reported EBITDA is now 3.38x rather than 1.74x and creditors carry a more levered, acquisition-driven credit than the FY2025 accounts show.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C4; calculation C11

The ratio depends on the denominator: 2.98x on management's adjusted EBITDA and 2.3x on its acquisition-adjusted measure, which adds pre-acquisition earnings that no filing itemizes. Reported EBITDA holds only about five months of PAG, so 3.38x overstates run-rate leverage. Cash generation has not yet funded deleveraging: nine-month operating cash flow was USD 21.3 million after an inventory build of USD 148.4 million. Liquidity is USD 545.0 million of cash and undrawn revolver. The Test Logic purchase on 2026-10-05 is not in these figures and its pro forma effect is not established.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C11; calculation C19

### Leverage trajectory and drivers

Net debt rose USD 670.7 million between 2025-12-31 and 2026-09-30. The PAG purchase took about USD 1.75 billion of cash on 2026-05-05; equity and tangible equity unit proceeds of about USD 1.3 billion raised in February 2026 and a new USD 900.0 million term loan B paid for it, which is why debt carrying value rose USD 667.1 million while cash barely moved. Net debt over last-twelve-months reported EBITDA of USD 264.2 million went from 1.74x at FY2025 to 3.38x, and over the issuer's adjusted EBITDA of USD 300.4 million it is 2.98x.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 9–10; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 29; calculation C4; calculation C11; calculation C12; calculation C25

The ratios mean different things. Reported last-twelve-months EBITDA holds PAG only from 2026-05-05 while debt carries its whole financing, so 3.38x overstates run-rate leverage. The issuer's acquisition-adjusted EBITDA of USD 389.2 million adds USD 88.8 million of pre-acquisition earnings that no filing itemizes or audits, which is how management reaches 2.3x. The evidence supports a range, not one number, and the covenant ratio that governs the facility is defined differently again and its level is not supplied.
Basis: EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C6; calculation C27

### Coverage and interest burden

Cash paid for interest was USD 26.8 million in FY2025 against reported EBITDA of USD 128.8 million, which is cover of 4.80x, up from 2.27x in FY2024 after the revolver was repaid from the Fleet sale proceeds and the October 2025 equity offering. No quarterly report states cash interest, and nine-month 2026 net interest expense of USD 17.9 million is flattered by interest income earned on cash held before the PAG closing. At the 2026-09-30 rates and balances, contractual interest on the term loan B, revolver and amortizing notes is about USD 57.7 million a year before swaps and fees, so reported EBITDA of USD 264.2 million would cover it about 4.58x. That is an estimate built from stated rates and balances, not a reported ratio.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 44; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 33; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 31; calculation C11; calculation C20; calculation C21

### Cash-flow quality

Operating cash flow was USD 21.3 million for nine months 2026 after an inventory build of USD 148.4 million, and capital expenditure of USD 24.7 million left free cash flow at USD -3.4 million. The path improved within the year: operating cash flow was USD -34.7 million in the first half and USD 56.0 million in Q3 alone. Inventory is USD 893.0 million, 19.9% of total assets, and the FY2025 audit named the write-down of slow-moving inventory as a critical audit matter, so cash tied up in stock carries valuation risk that a creditor cannot see in the leverage ratios.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 39–40; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C22; calculation C23

### Liquidity and maturities

Liquidity at 2026-09-30 is USD 545.0 million, made up of USD 65.8 million of cash and USD 479.2 million of undrawn revolver commitments. The maturity profile is back-ended: the term loan B repays USD 9.0 million a year and the amortizing notes USD 23.7 million in 2027, but USD 841.5 million, 86.0% of principal, falls due at the 2033 term loan maturity. A current earn-out obligation of USD 27.4 million, most of it payable in cash or equity at the company's sole discretion, is a further possible claim on liquidity.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 24; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 13; calculation C16; calculation C19; calculation C24

### Definitions and data quality

Nine-month Adjusted EBITDA exceeds reported EBITDA by USD 27.1 million because management adds back acquisition and integration costs, stock-based compensation and a refinancing loss and deducts a non-cash earn-out gain; the add-backs are management's and are not independently verified. The acquisition consideration appears as a headline of about USD 2.025 billion, as purchase consideration that includes the earn-out at fair value, and as cash paid net of cash acquired; each is kept for its own use. Cash flow statements include discontinued operations for 2025 periods, so 2025 free cash flow does not match the continuing perimeter. Purchase price allocations for PAG, NorthStar and Atech are preliminary.
Basis: EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 9–10; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 7; calculation C26

### Contrary evidence and what would change the view

The strongest case for lower leverage is operating momentum: Q3 Adjusted EBITDA of USD 107.2 million is the highest quarter on record and management guides FY2026 revenue growth of 65% to 66.5%. If the strong fourth-quarter cash generation that management expects is delivered and the pre-acquisition EBITDA is itemized, the 2.3x measure would be credible. If inventory keeps building without cash conversion, or the covenant levels leave little room, the reported 3.38x is the better guide.
Basis: EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 2; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C29; calculation C30

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_vsec-20251231.htm.jsonl | Annual report on Form 10-K | FY2025 with FY2024 and FY2023 comparatives (balance sheet FY2025 and FY2024) | USD | thousands | VSE Corporation consolidated; continuing operations with discontinued operations shown separately | US GAAP | Tier 1 (audited) | Annual statements, debt note, segment and customer note, subsequent events | Cash flow statements include discontinued operations; Part III incorporated by reference |
| 10-Q_2026-03-31_vsec-20260331.htm.jsonl | Quarterly report on Form 10-Q | Three months to 2026-03-31 with Q1 2025; balance sheet at 2026-03-31 and 2025-12-31 | USD | thousands | VSE Corporation consolidated | US GAAP | Tier 2b (unaudited) | Q1 statements and debt note | Balance sheet before PAG and the term loan B |
| 10-Q_2026-06-30_vsec-20260630.htm.jsonl | Quarterly report on Form 10-Q | Three and six months to 2026-06-30 with 2025 comparatives; balance sheet at 2026-06-30 | USD | thousands | VSE Corporation consolidated | US GAAP | Tier 2b (unaudited) | H1 statements, debt note, exhibit list | PAG consolidated from 2026-05-05 only |
| 10-Q_2026-09-30_vsec-20260930.htm.jsonl | Quarterly report on Form 10-Q | Three and nine months to 2026-09-30 with 2025 comparatives; balance sheet at 2026-09-30 | USD | thousands | VSE Corporation consolidated | US GAAP | Tier 2b (unaudited) | 9M statements, debt maturity table, acquisitions, liquidity | Purchase price allocations preliminary |
| EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl | Earnings press release | Q1 2026 with Q1 2025 | USD | thousands (narrative in millions) | Continuing operations | Non-GAAP reconciliations | Tier 2b (unaudited) | EBITDA, Adjusted EBITDA, net debt | Adjusted net income definition later changed |
| EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl | Earnings press release | Q2 and H1 2026 with 2025 comparatives | USD | thousands (narrative in millions) | Continuing operations | Non-GAAP reconciliations | Tier 2b (unaudited) | EBITDA, Adjusted EBITDA, net debt and leverage | Definition change of adjusted net income |
| EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl | Earnings press release | Q3 and 9M 2026 with 2025 comparatives | USD | thousands (narrative in millions) | Continuing operations | Non-GAAP reconciliations | Tier 2b (unaudited) | EBITDA, Adjusted EBITDA, TTM and acquisition-adjusted EBITDA, net debt, leverage | Leverage ratios differ from the credit agreement ratio |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| VSE Corporation | Issuer, borrower under the senior secured credit agreement and SEC registrant (Delaware) | December 31 | USD | thousands | Consolidated with subsidiaries; continuing operations, with the Fleet and Federal and Defense businesses as discontinued operations | US GAAP | FY2024, FY2025, Q1 2026, Q2 and H1 2026, Q3 and 9M 2026 with 2025 comparatives |
| Subsidiary guarantors under the credit agreement | Guarantors (named only generically in the exhibit list) | December 31 | USD | thousands | Not supplied: the subsidiaries that guarantee are not listed in the sources read | US GAAP | Not supplied: no guarantor financial information |
| Precision Aviation Group, Inc. | Acquired business consolidated from 2026-05-05 | December 31 | USD | thousands | Included in consolidated results from 2026-05-05 only; PAG contributed revenue of USD 173.666m in Q3 2026 and USD 278.179m in nine months 2026 | US GAAP | 2026-05-05 to 2026-09-30; no pre-acquisition statements supplied |

Subsequent events are kept out of period figures: the stock purchase agreement for PAG on 2026-01-29 and the equity and tangible equity unit offerings closing 2026-02-04 and 2026-02-05 come after the FY2025 balance-sheet date and are in the 2026 columns; the acquisition of Test Logic on 2026-10-05 comes after the latest balance-sheet date and is in no figure.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Statements in thousands restated to millions in the money tables | All statements | Unit conversion | USD 959,939 thousand | US$m 959.939 | Exact division by 1,000, no rounding; money tables use US$m | All periods |
| FY2025 and FY2024 EBITDA (Reported) calculated | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 70 | Derivation from components | Not stated in the annual report | USD 128,755 thousand (FY2025); USD 84,256 thousand (FY2024) | Net income from continuing operations plus net interest, taxes, amortization of intangible assets and depreciation and other amortization; follows the issuer's own EBITDA definition used in the releases | FY2024, FY2025 |
| Depreciation and other amortization for FY2025 and FY2024 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 70; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42 | Derivation from components | Segment depreciation and amortization USD 39,160 thousand (FY2025) and USD 25,500 thousand (FY2024) | USD 13,165 thousand (FY2025) and USD 7,875 thousand (FY2024) | Segment depreciation and amortization (continuing operations) less amortization of intangible assets USD 25,995 thousand and USD 17,625 thousand | FY2024, FY2025 |
| Last-twelve-months EBITDA for interim balance-sheet dates | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Constructed period | Not stated for EBITDA (Reported) | USD 140.572m, USD 176.884m, USD 264.187m | Latest fiscal year plus current stub less prior-year stub; Adjusted EBITDA results tie to the issuer's stated trailing figures | 2026-03-31, 2026-06-30, 2026-09-30 |
| Q4 2025 revenue and Adjusted EBITDA | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 30; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Derived quarter | No Q4 2025 report in the sources | USD 301.182m revenue; USD 51.768m Adjusted EBITDA | Fiscal year less nine months; labelled calculated | Q4 2025 |
| Debt at carrying value | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 | Basis choice | Principal USD 978.793m | Carrying value USD 959.939m | Debt is balance-sheet carrying value net of USD 18.854m issuance costs; principal is shown beside it | All balance-sheet dates |
| Cash flow statements include discontinued operations | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 44; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 7 | Perimeter note, not adjusted | Statements as printed | Statements as printed | Discontinued cash flows are not segregated in the filings, so 2025 cash flow figures cannot be put on a continuing basis | FY2024, FY2025, 2025 interim columns |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q1 2025 | H1 2025 | 9M 2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Revenues: products | 482800 | 703925 | 160551 | 334154 | 510189 | 202350 | 405757 | 628739 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Revenues: services | 303456 | 408350 | 95494 | 194030 | 300904 | 122230 | 367960 | 685984 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Total revenues | 786256 | 1112275 | 256045 | 528184 | 811093 | 324580 | 773717 | 1314723 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Costs and operating expenses: products | 404873 | 589963 | 136867 | 281695 | 429377 | 164292 | 331385 | 509306 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Costs and operating expenses: services | 279168 | 364182 | 86229 | 176024 | 270510 | 112289 | 317894 | 584032 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Selling, general and administrative expenses | 13629 | 13340 | 2311 | 4927 | 5594 | 6201 | 15232 | 20513 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Earn-out fair value adjustments | Not supplied: dash in the filing | 29200 | Not supplied: line not printed | 5900 | 29200 | Not supplied: line not printed | Not supplied: dash in the filing | -8880 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Lease abandonment and termination costs | 12205 | Not supplied: dash in the filing | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Amortization of intangible assets | 17625 | 25995 | 6134 | 12621 | 19308 | 9050 | 27500 | 50595 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Total costs and operating expenses | 727500 | 1022680 | 231541 | 481167 | 753989 | 291832 | 692011 | 1155566 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Operating income | 58756 | 89595 | 24504 | 47017 | 57104 | 32748 | 81706 | 159157 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Interest expense (income), net | 34947 | 20556 | 7939 | 14384 | 18723 | -1402 | 3828 | 17925 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Loss on debt extinguishment | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | 4473 | 4473 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Income from continuing operations before income taxes | 23809 | 69039 | 16565 | 32633 | 38381 | 34150 | 73405 | 136759 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Provision for income taxes | 4407 | 15546 | 2597 | 5027 | 7184 | 5095 | 15827 | 31917 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Net income from continuing operations | 19402 | 53493 | 13968 | 27606 | 31197 | 29055 | 57578 | 104842 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Income (loss) from discontinued operations, net of tax | -4078 | -41790 | -22941 | -33382 | -33061 | Not supplied: dash in the filing | Not supplied: dash in the filing | Not supplied: dash in the filing | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Net income (loss) | 15324 | 11703 | -8973 | -5776 | -1864 | 29055 | 57578 | 104842 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Gross profit (calculated: total revenues less costs of products and services) | 102215 | 158130 | 32949 | 70465 | 111206 | 47999 | 124438 | 221385 | USD thousands | Calculated | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| Depreciation and other amortization (continuing operations) | 7875 | 13165 | 3040 | 6187 | 9691 | 3697 | 9221 | 16256 | USD thousands | FY2024 and FY2025 calculated as segment depreciation and amortization less amortization of intangible assets; interim columns as stated in the releases | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 70; EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| EBITDA (Reported) | 84256 | 128755 | 33678 | 65825 | 86103 | 45495 | 113954 | 221535 | USD thousands | Interim columns: issuer-stated EBITDA from continuing operations; FY2024 and FY2025 calculated as net income from continuing operations plus net interest, taxes, amortization of intangible assets and depreciation and other amortization | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 70 |
| EBITDA (Adjusted) | Not supplied: no adjusted EBITDA is stated for FY2024 | 182924 | 40353 | 83805 | 131156 | 55430 | 141454 | 248619 | USD thousands | Issuer-adjusted: adds back acquisition, integration and restructuring costs, divestiture-related restructuring, earn-out fair value adjustments, loss on debt extinguishment and stock-based compensation; FY2025 is the trailing twelve months to 2025-12-31 stated in the 2026 releases | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 6; EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | Q1 2025 | H1 2025 | 9M 2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Net income (loss) | 15324 | 11703 | -8973 | -5776 | -1864 | 29055 | 57578 | 104842 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Depreciation and amortization | 28762 | 39924 | 9905 | 19540 | 29730 | 12747 | 36721 | 66851 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Amortization of debt issuance costs | 1330 | 1464 | 332 | 1067 | 1266 | 440 | 1270 | 2203 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Deferred taxes | -9996 | -58 | -5764 | -3474 | -19117 | 5415 | 9447 | 12944 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Stock-based compensation | 8315 | 12835 | 3522 | 6663 | 9908 | 4581 | 8664 | 12992 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Impairment and loss on sale of business segments | 19403 | 47046 | 33952 | 47203 | 47046 | Not supplied: dash in the filing | Not supplied: dash in the filing | Not supplied: dash in the filing | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Loss on sale of property and equipment | 479 | 45 | 10 | 10 | 10 | 3 | 223 | 219 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Gain on settlement of corporate-owned life insurance | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | -357 | -357 | -357 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Lease abandonment and termination costs | 12205 | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Earn-out fair value adjustments | Not supplied: dash in the filing | 29200 | Not supplied: line not printed | 5900 | 29200 | Not supplied: line not printed | Not supplied: dash in the filing | -8880 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Loss on debt extinguishment | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | 4473 | 4473 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Interest income on note receivable | Not supplied: dash in the filing | -2041 | Not supplied: dash in the filing | Not supplied: dash in the filing | -1342 | -694 | -1382 | -2084 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Receivables | -40239 | -26531 | -19393 | -30051 | -23243 | -25772 | -9532 | -18915 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Contract assets | 7781 | -8570 | -920 | -2969 | -2954 | -4755 | -3831 | -11620 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Inventories | -31668 | -56870 | -6359 | -25478 | -26522 | -71544 | -115617 | -148409 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Prepaid expenses and other current assets and other assets | -6685 | -4532 | -29910 | -26144 | -8991 | 515 | -5410 | -1620 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Operating lease assets and liabilities, net | -10247 | 2376 | 372 | -1573 | 837 | 396 | 1889 | 2697 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Accounts payable and deferred compensation | -31756 | -10932 | -10892 | -13724 | -42067 | -10847 | -21804 | 1428 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Accrued expenses and other liabilities | 5955 | -8069 | -12514 | -5935 | -2549 | -1447 | 2961 | 4520 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Net Cash from Operating Activities | -31037 | 26990 | -46632 | -34741 | -10652 | -62264 | -34707 | 21284 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Purchases of property and equipment | -20704 | -21281 | -2875 | -8464 | -14513 | -6457 | -15327 | -24699 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Proceeds from the sale of business segments, net of cash divested | 40157 | 138973 | 2746 | 138816 | 138816 | Not supplied: dash in the filing | Not supplied: dash in the filing | Not supplied: dash in the filing | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Cash paid for acquisitions, net of cash acquired | -283122 | -394144 | Not supplied: dash in the filing | -47739 | -47745 | -5391 | -1766844 | -1830791 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Purchases of intangible assets | Not supplied: line not printed | Not supplied: line not printed | Not supplied: dash in the filing | Not supplied: dash in the filing | Not supplied: dash in the filing | -16000 | -14707 | -15082 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Proceeds from corporate-owned life insurance settlements | Not supplied: line not printed | Not supplied: line not printed | Not supplied: dash in the filing | Not supplied: dash in the filing | Not supplied: dash in the filing | 760 | 760 | 760 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Net Cash from Investing Activities | -263669 | -276452 | -129 | 82613 | 76558 | -27088 | -1796118 | -1869812 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Borrowings on bank credit facilities | 739236 | 667335 | 74489 | 624881 | 648066 | 47273 | 934357 | 979357 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Repayments on bank credit facilities | -739736 | -803585 | -39989 | -674381 | -720825 | -49148 | -343523 | -370773 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Repayments on amortizing notes | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | -5299 | -10924 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Proceeds from issuance of common stock, net | 325999 | 442167 | Not supplied: dash in the filing | 463 | 463 | 829457 | 829676 | 829676 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Proceeds from issuance of tangible equity units, net | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | 445386 | 444908 | 444908 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Payment of debt financing costs | Not supplied: dash in the filing | -2584 | Not supplied: dash in the filing | -2584 | -2584 | -1313 | -7909 | -7909 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Payment of taxes for equity transactions | -2633 | -5138 | -4201 | -4248 | -5077 | -8930 | -9119 | -10332 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Dividends paid | -7060 | -8263 | -2060 | -4127 | -6195 | -2340 | -5146 | -7952 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Other financing | Not supplied: line not printed | -142 | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | -984 | -984 | -984 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Net Cash from Financing Activities | 315806 | 289790 | 28239 | -59996 | -86152 | 1259401 | 1836961 | 1845067 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| FX Effect on Cash | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | -134 | -111 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Net Cash Change | 21100 | 40328 | -18522 | -12124 | -20246 | 1170049 | 6002 | -3572 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Opening Cash | 7930 | 29030 | 29030 | 29030 | 29030 | 69358 | 69358 | 69358 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Closing Cash | 29030 | 69358 | 10508 | 16906 | 8784 | 1239407 | 75360 | 65786 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |
| Cash Interest Paid | 37076 | 26849 | Not supplied: the quarterly reports print no cash paid for interest | Not supplied: the quarterly reports print no cash paid for interest | Not supplied: the quarterly reports print no cash paid for interest | Not supplied: the quarterly reports print no cash paid for interest | Not supplied: the quarterly reports print no cash paid for interest | Not supplied: the quarterly reports print no cash paid for interest | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Cash & Equivalents | 29505 | 69358 | 1239407 | 75360 | 65786 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Receivables, net | 158104 | 190732 | 216504 | 274628 | 285227 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Contract assets | 29960 | 41468 | 45723 | 59488 | 66257 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Inventories | 434059 | 553834 | 625737 | 867124 | 893006 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Prepaid expenses and other current assets | 30899 | 37937 | 33569 | 48872 | 45458 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Current assets held-for-sale | 282820 | Not supplied: dash in the filing | Not supplied: dash in the filing | Not supplied: dash in the filing | Not supplied: dash in the filing | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Total current assets | 965347 | 893329 | 2160940 | 1325472 | 1355734 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Property and equipment, net | 71041 | 91098 | 93821 | 166548 | 176402 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Intangible assets, net | 197157 | 295962 | 318809 | 952090 | 950496 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Goodwill | 428263 | 641242 | 638889 | 1810424 | 1853509 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Operating lease right-of-use assets | 43225 | 50151 | 48272 | 92321 | 89367 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Note receivable | Not supplied: dash in the filing | 27041 | 27735 | 28423 | 29126 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Other assets | 37597 | 29755 | 22197 | 22128 | 25324 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Total Assets | 1742630 | 2028578 | 3310663 | 4397406 | 4479958 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Current portion of long-term debt | 30000 | 7500 | 29924 | 32004 | 32344 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Accounts payable | 145492 | 154506 | 147910 | 187068 | 211024 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Accrued expenses and other current liabilities | 52749 | 73161 | 65550 | 96077 | 99485 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Dividends payable | 2059 | 2339 | 2806 | 2806 | 2807 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Current liabilities held-for-sale | 68200 | Not supplied: dash in the filing | Not supplied: dash in the filing | Not supplied: dash in the filing | Not supplied: dash in the filing | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Earn-out obligations | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | 33850 | 27367 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Total current liabilities | 298500 | 237506 | 246190 | 351805 | 373027 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Long-term debt, net of current portion | 400173 | 285304 | 331051 | 914953 | 927595 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Deferred compensation | 7262 | 5918 | 4613 | 5114 | 4624 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Long-term operating lease obligations | 39498 | 43693 | 41557 | 78643 | 75817 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Deferred tax liabilities | Not supplied: dash in the filing | 12394 | 16782 | 104583 | 107340 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Other long-term liabilities | 9011 | 4955 | 4254 | 8872 | 8864 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Total Liabilities | 754444 | 589770 | 644447 | 1463970 | 1497267 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Common stock | 1030 | 1170 | 1403 | 1403 | 1404 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Additional paid-in capital | 591600 | 1041483 | 2241751 | 2484138 | 2487011 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Retained earnings | 392484 | 395643 | 421891 | 447608 | 492065 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Accumulated other comprehensive income | 3072 | 512 | 1171 | 287 | 2211 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Total Equity | 988186 | 1438808 | 2666216 | 2933436 | 2982691 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| Total Debt | 430173 | 292804 | 360975 | 946957 | 959939 | USD thousands | Reported | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q1 2025 | 2025-01-01 | 2025-03-31 |
| H1 2025 | 2025-01-01 | 2025-06-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| H1 2026 | 2026-01-01 | 2026-06-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM to 2026-03-31 | USD 128.755m | USD 45.495m | USD 33.678m | USD 140.572m | Calculated | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Last-twelve-months construction per the method; PAG is in the current stub only from 2026-05-05 |
| EBITDA (Reported) | LTM to 2026-06-30 | USD 128.755m | USD 113.954m | USD 65.825m | USD 176.884m | Calculated | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Last-twelve-months construction per the method; PAG is in the current stub only from 2026-05-05 |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 128.755m | USD 221.535m | USD 86.103m | USD 264.187m | Calculated | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Last-twelve-months construction per the method; PAG is in the current stub only from 2026-05-05 |
| EBITDA (Adjusted) | LTM to 2026-03-31 | USD 182.924m | USD 55.430m | USD 40.353m | USD 198.001m | Calculated | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Last-twelve-months construction per the method; PAG is in the current stub only from 2026-05-05 |
| EBITDA (Adjusted) | LTM to 2026-06-30 | USD 182.924m | USD 141.454m | USD 83.805m | USD 240.573m | Calculated | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Last-twelve-months construction per the method; PAG is in the current stub only from 2026-05-05 |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 182.924m | USD 248.619m | USD 131.156m | USD 300.387m | Calculated | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Last-twelve-months construction per the method; PAG is in the current stub only from 2026-05-05 |
| Total revenues | LTM to 2026-03-31 | USD 1112.275m | USD 324.580m | USD 256.045m | USD 1180.810m | Calculated | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 | Last-twelve-months construction per the method; PAG is in the current stub only from 2026-05-05 |
| Total revenues | LTM to 2026-06-30 | USD 1112.275m | USD 773.717m | USD 528.184m | USD 1357.808m | Calculated | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 | Last-twelve-months construction per the method; PAG is in the current stub only from 2026-05-05 |
| Total revenues | LTM to 2026-09-30 | USD 1112.275m | USD 1314.723m | USD 811.093m | USD 1615.905m | Calculated | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 | Last-twelve-months construction per the method; PAG is in the current stub only from 2026-05-05 |
| Total revenues | Q4 2025 (fiscal year less nine months) | USD 1112.275m | Not applicable: a fourth quarter has no current stub | USD 811.093m | USD 301.182m | Calculated | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 30; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 | No fourth-quarter 2025 report is in the sources; calculated and labelled |
| EBITDA (Adjusted) | Q4 2025 (trailing twelve months to 2025-12-31 less nine months 2025) | USD 182.924m | Not applicable: a fourth quarter has no current stub | USD 131.156m | USD 51.768m | Calculated | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Calculated; issuer-adjusted measure |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 430.173 | Net debt data table of this handoff | 84.256 | EBITDA (Reported) row of the income statement table, FY2024 column | FY2024 / 2024-12-31 | USD | US$m | 5.11 | Calculated | Tier 1 (audited) | FY2024 carrying debt included the revolver drawn USD 155.000m; cash per balance sheet |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 400.668 | Net debt data table of this handoff | 84.256 | EBITDA (Reported) row of the income statement table, FY2024 column | FY2024 / 2024-12-31 | USD | US$m | 4.76 | Calculated | Tier 1 (audited) | FY2024 carrying debt included the revolver drawn USD 155.000m; cash per balance sheet |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 84.256 | EBITDA (Reported) row of the income statement table, FY2024 column | 37.076 | Cash Interest Paid row of the cash flow statement table, FY2024 column | FY2024 / 2024-12-31 | USD | US$m | 2.27 | Calculated | Tier 1 (audited) | Cash interest paid includes interest on discontinued operations where the filing does not separate it |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 430.173 | Net debt data table of this handoff | Not supplied: no adjusted EBITDA is stated for FY2024 | Not stated | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no adjusted EBITDA is stated for FY2024 | Not Available | Tier 1 (audited) | Adjusted EBITDA is not stated for FY2024 |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 400.668 | Net debt data table of this handoff | Not supplied: no adjusted EBITDA is stated for FY2024 | Not stated | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no adjusted EBITDA is stated for FY2024 | Not Available | Tier 1 (audited) | Adjusted EBITDA is not stated for FY2024 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: no adjusted EBITDA is stated for FY2024 | Not stated | 37.076 | Cash Interest Paid row of the cash flow statement table, FY2024 column | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no adjusted EBITDA is stated for FY2024 | Not Available | Tier 1 (audited) | Adjusted EBITDA is not stated for FY2024 |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 292.804 | Net debt data table of this handoff | 128.755 | EBITDA (Reported) row of the income statement table, FY2025 column | FY2025 / 2025-12-31 | USD | US$m | 2.27 | Calculated | Tier 1 (audited) | Year-end before the 2026 acquisitions and offerings |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 223.446 | Net debt data table of this handoff | 128.755 | EBITDA (Reported) row of the income statement table, FY2025 column | FY2025 / 2025-12-31 | USD | US$m | 1.74 | Calculated | Tier 1 (audited) | Year-end before the 2026 acquisitions and offerings |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 128.755 | EBITDA (Reported) row of the income statement table, FY2025 column | 26.849 | Cash Interest Paid row of the cash flow statement table, FY2025 column | FY2025 / 2025-12-31 | USD | US$m | 4.80 | Calculated | Tier 1 (audited) | Cash interest paid includes interest on discontinued operations where the filing does not separate it |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 292.804 | Net debt data table of this handoff | 182.924 | EBITDA (Adjusted) row of the income statement table, FY2025 column | FY2025 / 2025-12-31 | USD | US$m | 1.60 | Calculated | Tier 1 (audited) | Year-end before the 2026 acquisitions and offerings; adjusted EBITDA is the issuer's definition |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 223.446 | Net debt data table of this handoff | 182.924 | EBITDA (Adjusted) row of the income statement table, FY2025 column | FY2025 / 2025-12-31 | USD | US$m | 1.22 | Calculated | Tier 1 (audited) | Year-end before the 2026 acquisitions and offerings; adjusted EBITDA is the issuer's definition |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 182.924 | EBITDA (Adjusted) row of the income statement table, FY2025 column | 26.849 | Cash Interest Paid row of the cash flow statement table, FY2025 column | FY2025 / 2025-12-31 | USD | US$m | 6.81 | Calculated | Tier 1 (audited) | Issuer-adjusted EBITDA; cash interest paid as printed in the 10-K |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 360.975 | Net debt data table of this handoff | 140.572 | Constructed period register: LTM to 2026-03-31 | 2026-03-31 | USD | US$m | 2.57 | Calculated | Tier 2b (unaudited) | Net cash position after the February 2026 offerings, before the PAG purchase; the issuer reports this ratio as not meaningful |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | -878.432 | Net debt data table of this handoff | 140.572 | Constructed period register: LTM to 2026-03-31 | 2026-03-31 | USD | US$m | -6.25 | Calculated | Tier 2b (unaudited) | Net cash position after the February 2026 offerings, before the PAG purchase; the issuer reports this ratio as not meaningful |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 140.572 | Constructed period register: LTM to 2026-03-31 | Not supplied: the quarterly reports print no cash paid for interest | Quarterly reports: no cash interest line | 2026-03-31 | USD | US$m | Not calculable: the quarterly reports print no cash paid for interest | Not Available | Tier 2b (unaudited) | Cash interest is not stated for interim periods; interest expense net is not a substitute |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 360.975 | Net debt data table of this handoff | 198.001 | Constructed period register: LTM to 2026-03-31 | 2026-03-31 | USD | US$m | 1.82 | Calculated | Tier 2b (unaudited) | Net cash position after the February 2026 offerings, before the PAG purchase; the issuer reports this ratio as not meaningful; adjusted EBITDA is the issuer's definition |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | -878.432 | Net debt data table of this handoff | 198.001 | Constructed period register: LTM to 2026-03-31 | 2026-03-31 | USD | US$m | -4.44 | Calculated | Tier 2b (unaudited) | Net cash position after the February 2026 offerings, before the PAG purchase; the issuer reports this ratio as not meaningful; adjusted EBITDA is the issuer's definition |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 198.001 | Constructed period register: LTM to 2026-03-31 | Not supplied: the quarterly reports print no cash paid for interest | Quarterly reports: no cash interest line | 2026-03-31 | USD | US$m | Not calculable: the quarterly reports print no cash paid for interest | Not Available | Tier 2b (unaudited) | Cash interest is not stated for interim periods |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 946.957 | Net debt data table of this handoff | 176.884 | Constructed period register: LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 5.35 | Calculated | Tier 2b (unaudited) | LTM EBITDA holds only two months of PAG (from 2026-05-05) while debt holds the full PAG financing, so the ratio overstates run-rate leverage |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 871.597 | Net debt data table of this handoff | 176.884 | Constructed period register: LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 4.93 | Calculated | Tier 2b (unaudited) | LTM EBITDA holds only two months of PAG (from 2026-05-05) while debt holds the full PAG financing, so the ratio overstates run-rate leverage |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 176.884 | Constructed period register: LTM to 2026-06-30 | Not supplied: the quarterly reports print no cash paid for interest | Quarterly reports: no cash interest line | 2026-06-30 | USD | US$m | Not calculable: the quarterly reports print no cash paid for interest | Not Available | Tier 2b (unaudited) | Cash interest is not stated for interim periods; interest expense net is not a substitute |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 946.957 | Net debt data table of this handoff | 240.573 | Constructed period register: LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 3.94 | Calculated | Tier 2b (unaudited) | LTM EBITDA holds only two months of PAG (from 2026-05-05) while debt holds the full PAG financing, so the ratio overstates run-rate leverage; adjusted EBITDA is the issuer's definition |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 871.597 | Net debt data table of this handoff | 240.573 | Constructed period register: LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 3.62 | Calculated | Tier 2b (unaudited) | LTM EBITDA holds only two months of PAG (from 2026-05-05) while debt holds the full PAG financing, so the ratio overstates run-rate leverage; adjusted EBITDA is the issuer's definition |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 240.573 | Constructed period register: LTM to 2026-06-30 | Not supplied: the quarterly reports print no cash paid for interest | Quarterly reports: no cash interest line | 2026-06-30 | USD | US$m | Not calculable: the quarterly reports print no cash paid for interest | Not Available | Tier 2b (unaudited) | Cash interest is not stated for interim periods |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 959.939 | Net debt data table of this handoff | 264.187 | Constructed period register: LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 3.63 | Calculated | Tier 2b (unaudited) | LTM EBITDA holds about five months of PAG; debt holds the full PAG financing; issuer's acquisition-adjusted ratio is 2.3x |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 894.153 | Net debt data table of this handoff | 264.187 | Constructed period register: LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 3.38 | Calculated | Tier 2b (unaudited) | LTM EBITDA holds about five months of PAG; debt holds the full PAG financing; issuer's acquisition-adjusted ratio is 2.3x |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 264.187 | Constructed period register: LTM to 2026-09-30 | Not supplied: the quarterly reports print no cash paid for interest | Quarterly reports: no cash interest line | 2026-09-30 | USD | US$m | Not calculable: the quarterly reports print no cash paid for interest | Not Available | Tier 2b (unaudited) | Cash interest is not stated for interim periods; interest expense net is not a substitute |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 959.939 | Net debt data table of this handoff | 300.387 | Constructed period register: LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 3.20 | Calculated | Tier 2b (unaudited) | LTM EBITDA holds about five months of PAG; debt holds the full PAG financing; issuer's acquisition-adjusted ratio is 2.3x; adjusted EBITDA is the issuer's definition |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 894.153 | Net debt data table of this handoff | 300.387 | Constructed period register: LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 2.98 | Calculated | Tier 2b (unaudited) | LTM EBITDA holds about five months of PAG; debt holds the full PAG financing; issuer's acquisition-adjusted ratio is 2.3x; adjusted EBITDA is the issuer's definition |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 300.387 | Constructed period register: LTM to 2026-09-30 | Not supplied: the quarterly reports print no cash paid for interest | Quarterly reports: no cash interest line | 2026-09-30 | USD | US$m | Not calculable: the quarterly reports print no cash paid for interest | Not Available | Tier 2b (unaudited) | Cash interest is not stated for interim periods |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Total revenues x 100 | 248.619 | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | 1314.723 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 | 9M 2026 | USD | US$m | 18.91 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA; the issuer states 18.9% |
| Reported EBITDA margin (LTM) | EBITDA (Reported) LTM / Total revenues LTM x 100 | 264.187 | Constructed period register: LTM to 2026-09-30 | 1615.905 | Constructed period register: LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 16.35 | Calculated | Tier 2b (unaudited) | LTM revenue and EBITDA hold PAG from 2026-05-05 only |
| Revenue growth, 9M 2026 over 9M 2025 | 9M 2026 revenue / 9M 2025 revenue - 1, as a percentage | 1314.723 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 | 811.093 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 | 9M 2026 | USD | US$m | 62.09 | Calculated | Tier 2b (unaudited) | Includes acquired revenue; the issuer states organic growth of about 17% for Q3 2026 only |
| Capital expenditure / revenue | Purchases of property and equipment / Total revenues x 100 | 24.699 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 | 1314.723 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 | 9M 2026 | USD | US$m | 1.88 | Calculated | Tier 2b (unaudited) | Total capital expenditure; maintenance and growth capital are not split in the filings |
| Operating cash flow / Adjusted EBITDA | Net Cash from Operating Activities / EBITDA (Adjusted) x 100 | 21.284 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 6; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 | 248.619 | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | 9M 2026 | USD | US$m | 8.56 | Calculated | Tier 2b (unaudited) | Operating cash flow after a USD 148.409m inventory build; 2025 comparison includes discontinued operations |
| Liquidity / total debt | (Cash + undrawn revolver) / Total debt | 544.986 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32 | 959.939 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 | 2026-09-30 | USD | US$m | 0.57 | Calculated | Tier 2b (unaudited) | Undrawn revolver of USD 479.2m after USD 20.000m drawn and USD 0.8m of letters of credit |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Growth | Revenue (US$m) | 786.256 | 1112.275 | 811.093 | 1314.723 | Rising | Acquisitions drive most of the 2026 step; organic growth is stated by the issuer for Q3 2026 only |
| Growth | Revenue growth (%) | 44.53 | 41.46 | Not supplied: 9M 2024 is not in the sources | 62.09 | Rising | FY2025 over FY2024 and 9M 2026 over 9M 2025 |
| Margin | EBITDA (Reported) margin (%) | 10.72 | 11.58 | 10.62 | 16.85 | Rising | Includes the earn-out fair value gain in 2026 and the earn-out write-down in 2025 |
| Margin | EBITDA (Adjusted) margin (%) | Not supplied: no adjusted EBITDA is stated for FY2024 | 16.45 | 16.17 | 18.91 | Rising | Issuer-adjusted; the issuer guides FY2026 to a margin of 18.9% to 19.1% |
| Cash flow | Net cash from operating activities (US$m) | -31.037 | 26.990 | -10.652 | 21.284 | Rising | 2024 and 2025 columns include discontinued operations |
| Cash flow | Capital expenditure (US$m) | 20.704 | 21.281 | 14.513 | 24.699 | Rising | Total capital expenditure; no maintenance and growth split |
| Cash flow | Free cash flow, operating cash flow less capital expenditure (US$m) | -51.741 | 5.709 | -25.165 | -3.415 | Mixed | Positive in FY2025, negative for nine months 2026 after a USD 148.409m inventory build; 2024 and 2025 include discontinued operations |
| Working capital | Inventories at period end (US$m) | 434.059 | 553.834 | Not supplied: no 2025 interim balance sheet in the sources | 893.006 | Rising | PAG added inventories of USD 200.179m at acquisition |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | EBITDA (Reported): net income from continuing operations plus net interest, taxes, amortization and depreciation | EBITDA from continuing operations as in the releases, then Adjusted EBITDA adds back acquisition, integration and restructuring costs, divestiture-related restructuring, earn-out fair value adjustments, loss on debt extinguishment and stock-based compensation | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Nine months 2026: Adjusted EBITDA exceeds reported by USD 27.084m | Material: moves net leverage at 2026-09-30 from 3.38x to 2.98x | Fundamental credit; Liquidity | Reported EBITDA used as the primary denominator; adjusted shown beside it in separate rows |
| Net debt | Carrying value of debt less cash | Net debt equals principal less issuance costs less cash, which is the same amount | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | 2026-09-30 | Not material: both give USD 894.153m | Fundamental credit | No conflict; the issuer's definition agrees with the method |
| Leverage | Net debt / EBITDA (Reported), LTM | Net leverage 3.0x on TTM Adjusted EBITDA and adjusted net leverage 2.3x on TTM Acquisition Adjusted EBITDA, both stated to differ from the credit agreement's Total Net Leverage Ratio | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | 2026-06-30, 2026-09-30 | Material: 3.38x reported against 2.3x acquisition-adjusted | Fundamental credit; Legal & covenants | Three ratios kept side by side with their definitions; none chosen |
| Interest | Cash interest paid for coverage | Interest expense, net, reduced in 2026 by interest income on cash held ahead of the PAG purchase | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 31 | Q1 2026 to 9M 2026 | Material: 9M 2026 net interest expense USD 17.925m understates the run-rate | Fundamental credit | Cover uses cash interest paid for fiscal years only; an estimated run-rate is shown separately as an estimate |
| Free cash flow | Operating cash flow less purchases of property and equipment | Issuer free cash flow is the same measure and includes discontinued operations for 2025 periods | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | FY2024, FY2025, 2025 interim | Moderate: discontinued operations mix perimeters in 2025 | Fundamental credit | 2025 comparisons flagged; 2026 is continuing operations only |
| Acquisition consideration (multi-figure event) | All figures shown with roles | Headline approximately USD 2.025bn in cash and equity (annual report, Q1 and Q2 releases); purchase consideration USD 2,020.007m including earn-out at fair value (Q3 report); cash paid USD 1,770.370m before cash acquired and USD 1,748.155m net; cash flow line for all nine months acquisitions USD 1,830.791m | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 9–10; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 2; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6 | 2026-05-05 | Moderate: different definitions of one event | Fundamental credit; Business & governance | Headline for deal size, purchase consideration for the balance sheet, net cash paid for the cash flow; none is replaced by another |
| Total debt | Balance-sheet carrying value | Principal USD 978.793m; carrying value USD 959.939m; difference is USD 18.854m of issuance costs | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 | 2026-09-30 | Minor: 1.9% of principal | Fundamental credit | Carrying value used; principal shown in the reconciliation |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Net debt and leverage on reported EBITDA | Ready with Limitations | LTM EBITDA holds PAG only from 2026-05-05; interim ratios overstate run-rate leverage | Read alongside the issuer's adjusted ratios |
| Leverage on issuer-adjusted measures | Ready with Limitations | Pre-acquisition EBITDA behind the acquisition-adjusted ratio is not itemized or audited | Obtain acquired-business EBITDA by period |
| Interest cover | Ready with Limitations | Cash paid for interest is stated for fiscal years only; 2026 net interest is flattered by interest income | Obtain cash interest paid for 2026 periods |
| Liquidity | Ready | Cash and undrawn commitments are stated at each 2026 balance-sheet date; FY2024 commitment is not stated | None needed for 2026 dates |
| Covenant headroom | Not Ready | Covenant levels and definitions are not in the sources | Obtain the executed credit agreement and amendment |
| Pro forma net debt for the Test Logic acquisition | Not Ready | Purchase price not stated | Obtain the price from a later filing |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Term loan B | Senior secured term loan | Not supplied: carrying value by instrument is not disclosed | 897.750 | 897.750 | Not applicable | Senior secured; collateral requirement stated for the credit agreement | Not supplied: lien ranking is not stated | USD | 897.750 | Not applicable | Term SOFR or ABR plus a margin set by the Total Net Leverage Ratio; 5.90% at 2026-09-30 | Floating | Term SOFR | Not supplied: the post-amendment margin grid is not stated; the May 2025 agreement ranged from 125 to 225 over Term SOFR | Not supplied: floor is not stated | 2033-05-05 | 9.000 per year in equal quarterly instalments; 2.250 remains for 2026 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19 |
| Revolving credit facility | Senior secured revolver | Not supplied: carrying value by instrument is not disclosed | 20.000 | 20.000 | 500.000 | Senior secured; collateral requirement stated for the credit agreement | Not supplied: lien ranking is not stated | USD | 20.000 | Not applicable | Term SOFR or ABR plus a margin; weighted average rate 5.65% on drawings at 2026-09-30 | Floating | Term SOFR | Not supplied: the post-amendment margin grid is not stated; the May 2025 agreement ranged from 125 to 225 over Term SOFR | Not supplied: floor is not stated | 2030-05-02 | 0 (revolving; no scheduled amortization) | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18 |
| Amortizing notes | Senior unsecured amortizing notes (part of the 5.750% tangible equity units) | Not supplied: carrying value by instrument is not disclosed | 61.043 | 61.043 | Not applicable | Senior unsecured | Not supplied: ranking against other debt is not stated beyond senior unsecured | USD | 61.043 | Not applicable | 5.93% per year | Fixed | Not applicable | Not applicable | Not applicable | 2029-02-01 | 23.691 in 2027, 25.128 in 2028, 6.516 in 2029, 5.708 for the rest of 2026 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 27 |
| Financing cost adjustment | Unamortized debt issuance costs | -18.854 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -18.854 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 5.11 | 4.76 | x | Carrying-value debt over fiscal-year EBITDA (Reported), calculated from the statements; FY2024 carrying debt included the revolver drawn USD 155.000m; cash per balance sheet |
| FY2025 / 2025-12-31 | 2.27 | 1.74 | x | Carrying-value debt over fiscal-year EBITDA (Reported), calculated from the statements; Year-end before the 2026 acquisitions and offerings |
| 2026-03-31 | 2.57 | -6.25 | x | Carrying-value debt over last-twelve-months EBITDA (Reported) constructed from the statements and releases; Net cash position after the February 2026 offerings, before the PAG purchase; the issuer reports this ratio as not meaningful |
| 2026-06-30 | 5.35 | 4.93 | x | Carrying-value debt over last-twelve-months EBITDA (Reported) constructed from the statements and releases; LTM EBITDA holds only two months of PAG (from 2026-05-05) while debt holds the full PAG financing, so the ratio overstates run-rate leverage |
| 2026-09-30 | 3.63 | 3.38 | x | Carrying-value debt over last-twelve-months EBITDA (Reported) constructed from the statements and releases; LTM EBITDA holds about five months of PAG; debt holds the full PAG financing; issuer's acquisition-adjusted ratio is 2.3x |

The ratios use last-twelve-months reported EBITDA at interim dates, which holds PAG only from 2026-05-05, so the 2026-06-30 and 2026-09-30 ratios overstate run-rate leverage.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 2.27 | x | EBITDA (Reported) over cash paid for interest as printed in the 10-K, which does not separate discontinued operations |
| FY2025 / 2025-12-31 | 4.80 | x | EBITDA (Reported) over cash paid for interest as printed in the 10-K, which does not separate discontinued operations |
| 2026-03-31 | Not supplied: the quarterly reports print no cash paid for interest | x | Cash interest paid is stated only in the annual report; interest expense net is not a substitute |
| 2026-06-30 | Not supplied: the quarterly reports print no cash paid for interest | x | Cash interest paid is stated only in the annual report; interest expense net is not a substitute |
| 2026-09-30 | Not supplied: the quarterly reports print no cash paid for interest | x | Cash interest paid is stated only in the annual report; interest expense net is not a substitute |

Cover can be stated for the two fiscal years only because cash paid for interest is not printed in the quarterly reports.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 29.505 | Not supplied: the commitment at 2024-12-31 is not stated in the 2025 annual report | US$m | Cash and cash equivalents per balance sheet |
| FY2025 / 2025-12-31 | 69.358 | 399.400 | US$m | Cash and cash equivalents per balance sheet; undrawn revolver commitment less letters of credit as stated by the issuer (10-K page 33) |
| 2026-03-31 | 1239.407 | 399.300 | US$m | Cash and cash equivalents per balance sheet; undrawn revolver commitment less letters of credit as stated by the issuer (Q1 2026 report page 23) |
| 2026-06-30 | 75.360 | 499.300 | US$m | Cash and cash equivalents per balance sheet; undrawn revolver commitment less letters of credit as stated by the issuer (Q2 2026 report page 29) |
| 2026-09-30 | 65.786 | 479.200 | US$m | Cash and cash equivalents per balance sheet; undrawn revolver commitment less letters of credit as stated by the issuer (Q3 2026 report page 32) |

The revolver commitment was USD 400.0 million until 2026-05-05 and USD 500.0 million after the amendment, so the undrawn figure steps up at 2026-06-30.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 7.958 | US$m | Three months to 2026-12-31 only: term loan USD 2.250m and amortizing notes USD 5.708m |
| FY2027 | 32.691 | US$m | Scheduled principal per the debt maturity table at 2026-09-30 |
| FY2028 | 34.128 | US$m | Scheduled principal per the debt maturity table at 2026-09-30 |
| FY2029 | 15.516 | US$m | Scheduled principal per the debt maturity table at 2026-09-30 |
| FY2030 | 29.000 | US$m | Term loan USD 9.000m plus the revolver drawn USD 20.000m due 2030-05-02 |
| FY2031 | 9.000 | US$m | Scheduled principal per the debt maturity table at 2026-09-30 |
| FY2032 | 9.000 | US$m | Term loan amortization of USD 9.000m; the filing's Thereafter bucket of USD 850.500m is split using the quarterly repayment schedule in the Q1 2026 report |
| FY2033 | 841.500 | US$m | Term loan B final maturity 2033-05-05 per the Q1 2026 repayment schedule |

The ladder is contractual principal at 2026-09-30 and excludes issuance costs, so it sums to principal, not carrying value.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | 9M 2025 | 9M 2026 | LTM 2026-09-30 | Unit | Basis |
|---|---|---|---|---|---|---|---|
| Revenue | 786.256 | 1112.275 | 811.093 | 1314.723 | 1615.905 | US$m | Reported; LTM calculated |
| EBITDA (Reported) | 84.256 | 128.755 | 86.103 | 221.535 | 264.187 | US$m | Issuer-stated for interim periods; calculated for fiscal years; LTM calculated |
| EBITDA (Adjusted) | Not supplied: no adjusted EBITDA is stated for FY2024 | 182.924 | 131.156 | 248.619 | 300.387 | US$m | Issuer-adjusted; LTM equals the issuer's stated trailing figure |
| TTM Acquisition Adjusted EBITDA (issuer) | Not supplied: not stated for FY2024 | 209.128 | Not supplied: not stated for 2025 interim periods | Not supplied: not stated for nine months | 389.234 | US$m | Issuer measure adding unaudited pre-acquisition EBITDA; not itemized |
| Adjusted EBITDA margin | Not supplied: no adjusted EBITDA is stated for FY2024 | 16.45 | 16.17 | 18.91 | 18.59 | % | Calculated |
| Net income from continuing operations | 19.402 | 53.493 | 31.197 | 104.842 | 127.138 | US$m | Reported; LTM calculated |
| Net cash from operating activities | -31.037 | 26.990 | -10.652 | 21.284 | 58.926 | US$m | Reported; 2024 and 2025 include discontinued operations |
| Purchases of property and equipment | 20.704 | 21.281 | 14.513 | 24.699 | 31.467 | US$m | Reported as outflows; shown positive here |
| Free cash flow | -51.741 | 5.709 | -25.165 | -3.415 | 27.459 | US$m | Operating cash flow less capital expenditure; matches the issuer's measure |
| Total debt (carrying value) | 430.173 | 292.804 | Not supplied: no 2025 interim balance sheet in the sources | 959.939 | 959.939 | US$m | Balance-sheet date; the LTM column is the 2026-09-30 balance |
| Cash and cash equivalents | 29.505 | 69.358 | Not supplied: no 2025 interim balance sheet in the sources | 65.786 | 65.786 | US$m | Balance-sheet date |
| Net debt | 400.668 | 223.446 | Not supplied: no 2025 interim balance sheet in the sources | 894.153 | 894.153 | US$m | Carrying value of debt less cash |
| Net debt / EBITDA (Reported) | 4.76 | 1.74 | Not supplied: no 2025 interim balance sheet in the sources | Not supplied: nine-month EBITDA is not a last-twelve-months denominator | 3.38 | x | Calculated; LTM holds PAG from 2026-05-05 only |
| Net debt / EBITDA (Adjusted) | Not supplied: no adjusted EBITDA is stated for FY2024 | 1.22 | Not supplied: no 2025 interim balance sheet in the sources | Not supplied: nine-month EBITDA is not a last-twelve-months denominator | 2.98 | x | Calculated on issuer-adjusted EBITDA |
| Net leverage ratio (issuer-stated) | Not supplied: not stated for FY2024 | 1.2 | Not supplied: not stated for 2025 interim periods | Not supplied: not stated for nine months | 3.0 | x | Issuer's net debt over TTM Adjusted EBITDA; differs from the credit agreement ratio |
| Adjusted net leverage ratio (issuer-stated) | Not supplied: not stated for FY2024 | 1.1 | Not supplied: not stated for 2025 interim periods | Not supplied: not stated for nine months | 2.3 | x | Issuer's net debt over TTM Acquisition Adjusted EBITDA; differs from the credit agreement ratio |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 430.173 | 29.505 | 400.668 | US$m | Carrying value of current plus long-term debt (revolver USD 155.000m drawn and term loan; principal USD 432.500m less USD 2.327m issuance costs) |
| FY2025 / 2025-12-31 | 292.804 | 69.358 | 223.446 | US$m | Carrying value of the term loan; principal USD 296.250m less USD 3.446m issuance costs |
| 2026-03-31 | 360.975 | 1239.407 | -878.432 | US$m | Carrying value of the term loan and amortizing notes; principal USD 366.342m less USD 5.367m issuance costs; net debt is negative because cash held ahead of the PAG purchase exceeded debt |
| 2026-06-30 | 946.957 | 75.360 | 871.597 | US$m | Carrying value of the term loan B and amortizing notes; principal USD 966.668m less USD 19.711m issuance costs; amortizing notes are inside debt, operating leases are not |
| 2026-09-30 | 959.939 | 65.786 | 894.153 | US$m | Carrying value of the term loan B, revolver and amortizing notes; principal USD 978.793m less USD 18.854m issuance costs; matches the issuer's net debt of USD 894.153m |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 978.793 | -18.854 | 959.939 | US$m | Reconciling item is the unamortized debt issuance costs of USD 18.854m netted against debt; no debt is left out of the ladder (the revolver drawn USD 20.000m is in it); operating lease obligations and the earn-out obligation are outside debt |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Test Logic acquisition funded with cash on hand | 2026-10-05 | Not supplied: the purchase price is not stated | Not supplied: the purchase price is not stated | Not supplied: the purchase price is not stated | US$m | Net debt rises by the cash paid; balance-sheet date for this table is 2026-09-30 (net debt USD 894.153m); the filing calls the acquisition not material and gives no price, so the pro forma figures are not established |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 2025-03-31 | 256.045 | 40.353 | US$m | Three months ended 2025-03-31 (Q1 2025); as reported; Adjusted EBITDA is the issuer-adjusted measure from continuing operations |
| 2025-06-30 | 272.139 | 43.452 | US$m | Three months ended 2025-06-30 (Q2 2025); as reported; Adjusted EBITDA is the issuer-adjusted measure from continuing operations |
| 2025-09-30 | 282.909 | 47.351 | US$m | Three months ended 2025-09-30 (Q3 2025); as reported; Adjusted EBITDA is the issuer-adjusted measure from continuing operations |
| 2025-12-31 | 301.182 | 51.768 | US$m | Three months ended 2025-12-31 (Q4 2025); calculated: FY2025 less nine months 2025 (revenue) and trailing twelve months at 2025-12-31 less nine months 2025 (Adjusted EBITDA); Adjusted EBITDA is the issuer-adjusted measure from continuing operations |
| 2026-03-31 | 324.580 | 55.430 | US$m | Three months ended 2026-03-31 (Q1 2026); as reported; Adjusted EBITDA is the issuer-adjusted measure from continuing operations |
| 2026-06-30 | 449.137 | 86.024 | US$m | Three months ended 2026-06-30 (Q2 2026); as reported; Adjusted EBITDA is the issuer-adjusted measure from continuing operations |
| 2026-09-30 | 541.006 | 107.165 | US$m | Three months ended 2026-09-30 (Q3 2026); as reported; Adjusted EBITDA is the issuer-adjusted measure from continuing operations |

Each row is one quarter, and Q4 2025 is calculated because no fourth-quarter report is in the sources.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Term loan B | 1 | Yes | 897.750 | 3.40 | US$m | Principal drawn under the senior secured credit agreement; obligor VSE Corporation as borrower with subsidiary guarantors that the filings do not name; cumulative leverage is cumulative principal over LTM EBITDA (Reported) of USD 264.187m; lien ranking against the revolver is not stated |
| Revolving credit facility (drawn) | 1 | Yes | 20.000 | 3.47 | US$m | USD 20.000m drawn of a USD 500.000m commitment under the same credit agreement; obligor and guarantor scope as for the term loan; lien ranking against the term loan is not stated |
| Amortizing notes (part of the tangible equity units) | 2 | No | 61.043 | 3.70 | US$m | Senior unsecured notes issued by VSE Corporation; guarantors are not stated; cumulative leverage is on principal USD 978.793m, against 3.63x on carrying value in the register |

Ranking follows the filings' description of each instrument as senior secured or senior unsecured; the lien terms between the term loan and the revolver are not supplied.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA from continuing operations (Reported), nine months 2026 | 221.535 | US$m | Reported; issuer-stated EBITDA; add-backs are management's and are not independently verified |
| Acquisition, integration and restructuring costs | 18.431 | US$m | Transaction costs and restructuring; realisation status not stated |
| Divestiture-related restructuring costs | 0.068 | US$m | Restructuring; realisation status not stated |
| Earn-out fair value adjustments | -8.880 | US$m | Other (non-cash gain on the earn-out liability); realisation status not stated |
| Loss on debt extinguishment | 4.473 | US$m | Other (refinancing); realisation status not stated |
| Stock-based compensation | 12.992 | US$m | Share-based compensation; non-cash |
| Adjusted EBITDA from continuing operations, nine months 2026 | 248.619 | US$m | Issuer-adjusted measure as reported |

The bridge covers nine months 2026 because the issuer states its reconciliation for that period only.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 40 |
| Calculated | 20 |
| Assumption-Based | 1 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 6 |
| Fields present | 26 |
| Fields total | 26 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 12 |

## Calculations

Every calculation uses the figures as printed, converted from USD thousands to US$m by exact division; ratios are printed to two decimals.

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Net debt at 2024-12-31 | 430.173 − 29.505 | 400.668 US$m | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| C2 | Net debt at 2025-12-31 | 292.804 − 69.358 | 223.446 US$m | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| C3 | Net debt at 2026-03-31 | 360.975 − 1239.407 | -878.432 US$m | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| C4 | Net debt at 2026-06-30 | 946.957 − 75.360 | 871.597 US$m | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 41; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–4 |
| C5 | Net debt at 2026-09-30 | 959.939 − 65.786 | 894.153 US$m | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 |
| C6 | Total Debt as current portion plus long-term debt, in thousands | 430173 = 30000 + 400173; 292804 = 7500 + 285304; 360975 = 29924 + 331051; 946957 = 32004 + 914953; 959939 = 32344 + 927595 | All five balance-sheet dates tie to the issuer's total debt after issuance costs | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 62; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 12; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, page 16; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 |
| C7 | EBITDA (Reported), FY2025 and FY2024 | 53493 + 20556 + 15546 + 25995 + 13165 = 128755; 19402 + 34947 + 4407 + 17625 + 7875 = 84256 | USD 128.755m; USD 84.256m | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 70 |
| C8 | Depreciation and other amortization, FY2025 and FY2024 | 39160 − 25995 = 13165; 25500 − 17625 = 7875 | USD 13.165m; USD 7.875m | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 70; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42 |
| C9 | LTM EBITDA (Reported) at 2026-03-31 | 128.755 + 45.495 − 33.678 | 140.572 US$m | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C10 | LTM EBITDA (Reported) at 2026-06-30 | 128.755 + 113.954 − 65.825 | 176.884 US$m | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C11 | LTM EBITDA (Reported) at 2026-09-30 | 128.755 + 221.535 − 86.103 | 264.187 US$m | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C12 | LTM EBITDA (Adjusted) at 2026-03-31, 2026-06-30 and 2026-09-30 | 182.924 + 55.430 − 40.353; 182.924 + 141.454 − 83.805; 182.924 + 248.619 − 131.156 | 198.001; 240.573; 300.387 US$m, equal to the issuer's stated trailing figures | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C13 | LTM revenue at 2026-09-30 | 1112.275 + 1314.723 − 811.093 | 1615.905 US$m | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 41–42; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 4–5 |
| C14 | Q4 2025 revenue and Adjusted EBITDA (derived) | 1112.275 − 811.093; 182.924 − 131.156 | 301.182; 51.768 US$m | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 30; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C15 | Principal to carrying value at 2026-09-30 | 897.750 + 20.000 + 61.043 = 978.793; 978.793 − 18.854 | Principal 978.793; carrying value 959.939 US$m | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19 |
| C16 | Maturity ladder total | 7.958 + 32.691 + 34.128 + 15.516 + 29.000 + 9.000 + 9.000 + 841.500 | 978.793 US$m, equal to principal | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 13 |
| C17 | Cumulative leverage in the debt stack on principal | 897.750 / 264.187; 917.750 / 264.187; 978.793 / 264.187 | 3.40; 3.47; 3.70 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 |
| C18 | EBITDA bridge, nine months 2026 | 221.535 + 18.431 + 0.068 − 8.880 + 4.473 + 12.992 | 248.619 US$m, equal to Adjusted EBITDA | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C19 | Liquidity at 2026-09-30 | 65.786 + 479.2 | 544.986 US$m | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32 |
| C20 | Estimated contractual interest at 2026-09-30 rates (an estimate) | 897.750 × 5.90% + 20.000 × 5.65% + 61.043 × 5.93% | 57.717 US$m a year before swaps, commitment fees and issuance cost amortization | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19 |
| C21 | Reported EBITDA over estimated interest | 264.187 / 57.717 | 4.58x | Calculations C11 and C20 |
| C22 | Free cash flow, nine months 2026 | 21.284 − 24.699 | −3.415 US$m | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C23 | Inventory share of total assets at 2026-09-30 | 893.006 / 4479.958 | 19.93% | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 |
| C24 | Share of principal due in 2033 | 841.500 / 978.793 | 85.97% | 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 13 |
| C25 | Change in debt and net debt since FY2025 | 959.939 − 292.804; 894.153 − 223.446 | 667.135; 670.707 US$m | Calculations C1 to C5 |
| C26 | Adjusted over reported EBITDA, nine months 2026 | 248.619 − 221.535 | 27.084 US$m | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C27 | Gap between TTM Acquisition Adjusted and TTM Adjusted EBITDA | 389.234 − 300.387 | 88.847 US$m | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C28 | Quarterly revenue and Adjusted EBITDA tie to nine months 2026 | 324.580 + 449.137 + 541.006 = 1314.723; 55.430 + 86.024 + 107.165 = 248.619 | Both tie | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 4; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C29 | Adjusted EBITDA margin, Q3 2026 | 107.165 / 541.006 | 19.81% | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C31 | Revenue growth, FY2024 over FY2023 | 786.256 / 544.020 − 1 | 44.53% | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42 |
| C30 | FY2026 guidance quoted in the findings (issuer-stated, not calculated) | Revenue growth 65% to 66.5%; Adjusted EBITDA margin 18.9% to 19.1% | 65% to 66.5%; 18.9% to 19.1% | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3 |

Rounded figures quoted in the findings:

| ID | Figure | Value in the tables | Rounded value | Basis |
|---|---|---|---|---|
| R1 | Net debt at 2026-09-30 (rounded for the findings) | 894.153 | 894.2 | Rounded from the unrounded value in the tables and calculations above |
| R2 | Net debt at 2025-12-31 (rounded for the findings) | 223.446 | 223.4 | Rounded from the unrounded value in the tables and calculations above |
| R3 | Increase in net debt (rounded for the findings) | 670.707 | 670.7 | Rounded from the unrounded value in the tables and calculations above |
| R4 | Increase in debt carrying value (rounded for the findings) | 667.135 | 667.1 | Rounded from the unrounded value in the tables and calculations above |
| R5 | Last-twelve-months EBITDA (Reported) (rounded for the findings) | 264.187 | 264.2 | Rounded from the unrounded value in the tables and calculations above |
| R6 | TTM Acquisition Adjusted EBITDA (rounded for the findings) | 389.234 | 389.2 | Rounded from the unrounded value in the tables and calculations above |
| R7 | TTM Adjusted EBITDA (rounded for the findings) | 300.387 | 300.4 | Rounded from the unrounded value in the tables and calculations above |
| R8 | Gap between the two issuer EBITDA bases (rounded for the findings) | 88.847 | 88.8 | Rounded from the unrounded value in the tables and calculations above |
| R9 | Operating cash flow, nine months 2026 (rounded for the findings) | 21.284 | 21.3 | Rounded from the unrounded value in the tables and calculations above |
| R10 | Inventory build, nine months 2026 (rounded for the findings) | 148.409 | 148.4 | Rounded from the unrounded value in the tables and calculations above |
| R11 | Capital expenditure, nine months 2026 (rounded for the findings) | 24.699 | 24.7 | Rounded from the unrounded value in the tables and calculations above |
| R12 | Free cash flow, nine months 2026 (rounded for the findings) | -3.415 | -3.4 | Rounded from the unrounded value in the tables and calculations above |
| R13 | Liquidity (cash plus undrawn revolver) (rounded for the findings) | 544.986 | 545.0 | Rounded from the unrounded value in the tables and calculations above |
| R14 | Cash (rounded for the findings) | 65.786 | 65.8 | Rounded from the unrounded value in the tables and calculations above |
| R15 | Estimated annual contractual interest (rounded for the findings) | 57.720 | 57.7 | Rounded from the unrounded value in the tables and calculations above |
| R16 | FY2025 EBITDA (Reported) (rounded for the findings) | 128.755 | 128.8 | Rounded from the unrounded value in the tables and calculations above |
| R17 | FY2025 cash interest paid (rounded for the findings) | 26.849 | 26.8 | Rounded from the unrounded value in the tables and calculations above |
| R18 | Nine months 2026 interest expense, net (rounded for the findings) | 17.925 | 17.9 | Rounded from the unrounded value in the tables and calculations above |
| R19 | Inventory at 2026-09-30 (rounded for the findings) | 893.006 | 893.0 | Rounded from the unrounded value in the tables and calculations above |
| R20 | Principal due in 2033 (rounded for the findings) | 841.500 | 841.5 | Rounded from the unrounded value in the tables and calculations above |
| R21 | Operating cash flow, Q3 2026 (rounded for the findings) | 55.991 | 56.0 | Rounded from the unrounded value in the tables and calculations above |
| R22 | Operating cash flow, H1 2026 (rounded for the findings) | -34.707 | -34.7 | Rounded from the unrounded value in the tables and calculations above |
| R23 | Earn-out obligation at 2026-09-30 (rounded for the findings) | 27.367 | 27.4 | Rounded from the unrounded value in the tables and calculations above |
| R24 | Amortizing notes due in 2027 (rounded for the findings) | 23.691 | 23.7 | Rounded from the unrounded value in the tables and calculations above |
| R25 | Total debt principal (rounded for the findings) | 978.793 | 978.8 | Rounded from the unrounded value in the tables and calculations above |
| R26 | PAG cash paid net of cash acquired (rounded for the findings) | 1748.155 | 1.75 billion | Rounded from the unrounded value in the tables and calculations above |
| R27 | Term loan scheduled amortization per year (rounded for the findings) | 9.000 | 9.0 | Rounded from the unrounded value in the tables and calculations above |
| R28 | Adjusted EBITDA, Q3 2026 (rounded for the findings) | 107.165 | 107.2 | Rounded from the unrounded value in the tables and calculations above |
| R29 | Net proceeds of the February 2026 offerings (rounded for the findings) | approximately 1.3 billion | 1.3 billion | Rounded from the unrounded value in the tables and calculations above |
| R30 | Adjusted over reported EBITDA, nine months 2026 (rounded for the findings) | 27.084 | 27.1 | Rounded from the unrounded value in the tables and calculations above |
| R31 | Inventory share of total assets (rounded for the findings) | 19.93% | 19.9% | Rounded from the unrounded value in the tables and calculations above |
| R32 | Share of principal due in 2033 (rounded for the findings) | 85.98% | 86.0% | Rounded from the unrounded value in the tables and calculations above |

## Gaps

- High: the covenant levels, step-downs and definitions of the maximum Total Net Leverage Ratio and the minimum Interest Coverage Ratio are not in the sources, so covenant headroom cannot be calculated and the issuer's leverage ratios cannot be tied to the covenant ratio; the executed credit agreement and its amendment would close it.
- High: pre-acquisition EBITDA behind the issuer's acquisition-adjusted EBITDA is not itemized by acquired business or period, so the 2.3x ratio cannot be rebuilt and the USD 88.8 million uplift is unverified; the acquired businesses' trailing twelve-month EBITDA would close it.
- Medium: cash paid for interest is printed only in the annual report, so interest cover is stated for FY2024 and FY2025 and not for any 2026 period; the quarterly cash interest would close it.
- Medium: no adjusted EBITDA is stated for FY2024, so adjusted leverage and cover for that year are not calculable; the FY2024 annual report or release would close it.
- Medium: the sources hold no 2025 interim balance sheets, so net debt and leverage for 2025-03-31, 2025-06-30 and 2025-09-30 are not stated, and the 2025 interim columns of the balance sheet are omitted; the 2025 quarterly reports would close it.
- Medium: the 2024 and 2025 cash flow statements include discontinued operations that the filings do not segregate, so operating cash flow, free cash flow and cash interest for those periods are on a wider perimeter than continuing operations; the filings print no split.
- Medium: the instrument-level carrying values, the post-amendment margin grid, any interest rate floor and the lien ranking between the term loan B and the revolver are not stated, so the spread, floor and ranking cells of the debt instrument table are not supplied.
- Medium: the purchase price of Test Logic, acquired on 2026-10-05, is not stated, so the pro forma net debt and net leverage for it are not established; a later filing would close it.
- Low: the balance sheet at 2024-12-31 shows cash of USD 29.505m while the cash flow statement ends FY2024 at USD 29.030m, a difference of USD 0.475m that the annual report does not explain; the debt tables use the balance-sheet figure.
- Low: several statement lines are printed as a dash or are absent from some periods and are shown as not supplied rather than zero: earn-out fair value adjustments, lease abandonment costs, the loss on debt extinguishment, impairment, sale proceeds, purchases of intangible assets, life insurance proceeds, amortizing note repayments, tangible equity unit proceeds, other financing, held-for-sale balances, the note receivable, deferred tax liabilities and the earn-out obligation in the periods where they do not appear.
- Low: no fourth-quarter 2025 report is in the sources, so Q4 2025 revenue and Adjusted EBITDA are calculated as the fiscal year less nine months; the Q4 2025 release would close it.
- Low: capital expenditure is not split between maintenance and growth, and no segment revenue exists because the issuer reports one segment, so the segment schedule is empty and no segment sum is stated.
- Low: the FY2023 balance sheet is outside the annual report's two-year balance sheet, so FY2023 leverage is not stated, and the FY2025 and FY2024 statements are the only fiscal years in the statement tables.
- Low: EBITDA for FY2024 and FY2025 is calculated because the annual report states none, and the issuer's own EBITDA from continuing operations appears only in the 2026 releases.

## Next module

The orchestrator selects the next module.
