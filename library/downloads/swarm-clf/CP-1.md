## Request

Financial foundation for CLEVELAND-CLIFFS INC. (clf), as of 2026-11-05, for the credit snapshot pathway. The scope is the consolidated statements, debt, liquidity and credit metrics in the supplied annual report, three quarterly reports and three earnings releases, in US dollars millions.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_clf-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-09 | 4c221bc0965bff2fddf7c4bff630fa79a69227de30709426ec9a8c89ce97e2df | Annual statements for 2025, 2024 and 2023, the debt note, borrowing capacity, adjusted EBITDA reconciliation, segment note and cash interest paid. |
| 10-Q_2026-03-31_clf-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-21 | cdb78421e299c29e406bbc729a020af9f5e9e2600a8725769f4fc9cce3f48238 | First-quarter statements, debt note and maturities, borrowing capacity and cash interest paid. |
| 10-Q_2026-06-30_clf-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-23 | e0ba1bee447b92cbe2b9ad67268169c4ba2e392089bcf206be2b86a11c01f94b | Second-quarter and six-month statements, debt note and maturities, borrowing capacity and cash interest paid. |
| 10-Q_2026-09-30_clf-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-20 | c3188e1da0b49175580c8c9484ba8f4a1c413725f4f518851b880884f79957d1 | Latest statements, debt note and maturities, borrowing capacity, adjusted EBITDA reconciliation, segment note and cash interest paid. |
| EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-04-20 | b9c8fc8d9b4361337a220b73ac602738ac2f0a283bbd73c7b1429c171ac6000c | Fourth-quarter 2025 comparatives, first-quarter cash flow, adjusted EBITDA reconciliation and segment operating data. |
| EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-23 | 6e73622f8701012d98293b6d350054a601691c0c525be23eff4b4255d0c4ab32 | Second-quarter cash flow, six-month adjusted EBITDA reconciliation, segment operating data and leverage-target wording. |
| EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-19 | e6cabc90a6962f04fc1da1253ad4fc1e70365df28408b401d69ed58092c0c0e1 | Third-quarter three-month statements and cash flow, adjusted EBITDA reconciliation, segment operating data, outlook and leverage-target wording. |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness handoff | Source readiness (CP-0) | ff47452c7d9fccc283256b65baae6cfda2d09b011444f86df0868e07db7d3a9b | Identity, perimeter, period coverage and the located pages of each statement and note were taken from it; its gaps on the missing debt agreements, ratings and fourth-quarter 2025 release carry into this module's limitations. |

## Findings

### Bottom line

Net debt of USD 7,568 million was 7.87x last-twelve-months reported EBITDA at September 30, 2026, and cash interest was covered only 1.82x, so creditors still depend on the second-half earnings recovery continuing.
Basis: calculation C5; calculation C14; calculation C16; 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 3–5

Leverage has fallen from 18.90x at the end of 2024, but the end-2025 multiple does not exist because reported EBITDA was negative, and net debt is USD 372 million above its end-2025 level, so the improvement comes from earnings, not from repayment. Liquidity of USD 3,246 million rests on an asset-based facility capped by its borrowing base, and no debt matures before that facility's June 2028 date.
Basis: calculation C6; calculation C29; 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 15–16

### Leverage and coverage

At September 30, 2026, net debt of USD 7,568 million was 7.87x last-twelve-months reported EBITDA of USD 962 million and 7.79x the issuer's adjusted EBITDA of USD 972 million, so the add-backs the issuer makes are small over the last twelve months. The multiple was 18.90x at the end of 2024; at the end of 2025 it cannot be calculated because reported EBITDA for the year was negative, and the adjusted measure for 2025 was only USD 37 million, so the 2025 add-backs of USD 217 million are what separate negative reported EBITDA from a small positive adjusted figure.
Basis: calculation C5; calculation C14; calculation C15; calculation C36; 10-K_2025-12-31_clf-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 47

Cash interest paid over the last twelve months was USD 529 million, covered 1.82x by reported EBITDA, against 0.25x at March 31, 2026 and 0.94x at June 30, 2026, so cover moved with the quarterly earnings rather than with any change in interest cost. At the end of 2024 cover was 1.45x on cash interest of USD 255 million, and cash interest rose to USD 459 million in 2025, a rise the annual report attributes to higher average borrowing after the Stelco acquisition, with interest expense, net up USD 224 million. Net debt rose by USD 372 million between the end of 2025 and September 30, 2026, which means the lower multiple is the result of a rebound in EBITDA from a trough, and a renewed fall in steel prices would reverse it before any debt has been repaid.
Basis: calculation C16; calculation C6; calculation C38; 10-K_2025-12-31_clf-20251231.htm.jsonl, page 87; 10-K_2025-12-31_clf-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 9

### Cash-flow quality

Operating cash flow was an outflow of USD 325 million in the first quarter of 2026 and an inflow of USD 230 million and USD 224 million in the second and third quarters, so nine-month operating cash flow of USD 129 million did not cover capital spending of USD 461 million, and free cash flow was USD 332 million negative for the nine months and USD 485 million negative over the last twelve months. Working capital explains the swing: receivables absorbed USD 723 million in the nine months as quarterly revenue rose from USD 4,922 million to USD 5,612 million, while payables and accruals released USD 412 million. The ABL Facility funded the shortfall with net borrowings of USD 383 million, so earnings recovery has so far been converted into more secured borrowing rather than debt reduction.
Basis: calculation C21; calculation C20; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8

### Liquidity and maturities

Liquidity was USD 3,246 million at September 30, 2026, made up of USD 77 million of cash and USD 3,169 million of ABL Facility borrowing capacity, against USD 3,270 million at the end of 2025. The capacity depends on the borrowing base of USD 4,060 million, not on the USD 4,750 million commitment, so it moves with receivables and inventory; the commitment less drawings and letters of credit would be USD 3,859 million, which is not available to the company. The ABL Facility is drawn for USD 834 million and is due in June 2028, the first maturity, followed by USD 1,268 million of senior notes in 2029 and USD 750 million in 2030, so the maturity wall is back-ended: the ABL Facility's own date is the first refinancing event, and the borrowing base is the nearer constraint on liquidity.
Basis: calculation C29; calculation C31; calculation C30; calculation C33; 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 15–16; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 46

### Data quality and definitions

Reported EBITDA here is the issuer's Total EBITDA before any adjustment, and it includes the share of noncontrolling interests; the issuer's adjusted measure removes that share and a list of named items, and the two differ by USD 217 million for 2025 but by only USD 10 million over the last twelve months, so the choice of measure matters for 2025 and not for the latest period. Debt is the balance-sheet carrying value of USD 7,645 million, which is USD 67 million below principal because of unamortized discounts and issuance costs, and finance lease liabilities of USD 402 million at the end of 2025 sit in other liabilities and are not counted as debt, so lease-adjusted leverage would be higher but cannot be stated for later dates.
Basis: calculation C7; calculation C36; calculation C37; 10-K_2025-12-31_clf-20251231.htm.jsonl, page 93; 10-K_2025-12-31_clf-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15

The third-quarter release states steelmaking revenue USD 5,447 million, which is USD 45 million below the USD 5,492 million in the segment note, and the documents do not explain the difference, so segment margins from the release and the note are not interchangeable. The second- and third-quarter releases also print stray tokens in the asset impairment row of the statement of operations, so the quarterly reports, which print clean figures, were used for every income statement column they cover, and a one-million difference between the fourth-quarter 2025 selling and administrative expense and the year less nine months is left as reported.
Basis: calculation C32; calculation C35; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 2; 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–12; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, page 7; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 7

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2023 | 2023-01-01 | 2023-12-31 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q2 2026 | 2026-04-01 | 2026-06-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| Q4 2025 | 2025-10-01 | 2025-12-31 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_clf-20251231.htm.jsonl | Annual report on Form 10-K | FY2025, FY2024, FY2023; balance sheets at 2025-12-31 and 2024-12-31 | USD | Millions | Consolidated Cleveland-Cliffs Inc. and subsidiaries | U.S. GAAP | 1 — audited statements | Annual statements, debt note, borrowing capacity, adjusted EBITDA, segments, cash interest paid | Borrowing capacity is stated for 2025-12-31 only; no fourth-quarter 2025 cash flow statement |
| 10-Q_2026-03-31_clf-20260331.htm.jsonl | Quarterly report on Form 10-Q | Three months and balance sheet at 2026-03-31 | USD | Millions | Consolidated | U.S. GAAP | 2b — unaudited, no auditor review stated | First-quarter statements, debt, borrowing capacity, cash interest paid | Unaudited |
| 10-Q_2026-06-30_clf-20260630.htm.jsonl | Quarterly report on Form 10-Q | Three and six months and balance sheet at 2026-06-30 | USD | Millions | Consolidated | U.S. GAAP | 2b — unaudited, no auditor review stated | Second-quarter statements, debt, borrowing capacity, cash interest paid | Unaudited |
| 10-Q_2026-09-30_clf-20260930.htm.jsonl | Quarterly report on Form 10-Q | Three and nine months and balance sheet at 2026-09-30 | USD | Millions | Consolidated | U.S. GAAP | 2b — unaudited, no auditor review stated | Latest statements, debt, maturities, borrowing capacity, segments, cash interest paid | Unaudited; no standalone statements of the issuer or guarantors |
| EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl | Earnings release, Exhibit 99.1 | Three months to 2026-03-31 with comparatives for 2025-12-31 and 2025-03-31 | USD | Millions | Consolidated | U.S. GAAP with non-GAAP reconciliations | 2b — issuer release, unaudited | Fourth-quarter 2025 comparatives, first-quarter cash flow, EBITDA reconciliations | Release tables only; no notes |
| EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl | Earnings release, Exhibit 99.1 | Three and six months to 2026-06-30 | USD | Millions | Consolidated | U.S. GAAP with non-GAAP reconciliations | 2b — issuer release, unaudited | Second-quarter cash flow, six-month EBITDA reconciliation | A stray token in the asset impairment row; the quarterly report was used instead |
| EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl | Earnings release, Exhibit 99.1 | Three and nine months to 2026-09-30 | USD | Millions | Consolidated | U.S. GAAP with non-GAAP reconciliations | 2b — issuer release, unaudited | Third-quarter cash flow, EBITDA reconciliation, segment operating data | A stray token in the asset impairment row; the quarterly report was used instead |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cleveland-Cliffs Inc. | Issuer of the senior notes, borrower under the ABL Facility, parent and reporting entity | December 31 | USD | Millions | Consolidated with subsidiaries and variable interest entities where it is the primary beneficiary | U.S. GAAP | FY2023 to FY2025; Q1 to Q3 2026; nine months 2026 and 2025; Q4 2025 as a release comparative |
| Guarantor subsidiaries | Guarantee eight of the nine note series; guarantee the ABL Facility | December 31 | USD | Millions | Obligated-group summary only, not standalone statements | U.S. GAAP | Nine months 2026 and 2026-09-30 summary only |
| Stelco subsidiaries | Acquired subsidiary, Canadian dollar functional currency, intercompany note remeasured | December 31 | USD for the group; Canadian dollar functional | Millions | Consolidated from the acquisition on 2024-11-01 | U.S. GAAP | Within the consolidated periods |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) taken from the issuer's Total EBITDA reconciliation because the income statement prints no EBITDA | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-09-30_clf-20260930.htm.jsonl; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl | Definition | Not on the face of the income statement | FY2025 -180; 9M 2026 979 | Net income plus interest expense, net plus income tax expense plus depreciation, depletion and amortization, matched to the printed Total EBITDA in every column | All income statement columns |
| Net Cash Change includes the exchange effect | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-09-30_clf-20260930.htm.jsonl | Presentation | Net increase in cash and cash equivalents 15 (9M 2026) | Net Cash Change 14 | The method defines the change as operating plus investing plus financing plus the exchange effect of -1, so opening plus change equals closing cash including restricted cash | Cash flow columns |
| Quarterly cash interest paid derived from cumulative figures | 10-Q_2026-03-31_clf-20260331.htm.jsonl; 10-Q_2026-06-30_clf-20260630.htm.jsonl; 10-Q_2026-09-30_clf-20260930.htm.jsonl | Construction | 6M 256; 9M 411 | Q2 2026 118; Q3 2026 155 | The quarterly reports print cumulative interest paid only | Q2 2026, Q3 2026, Q3 2025 |
| Debt measured at carrying value, not principal | 10-Q_2026-09-30_clf-20260930.htm.jsonl | Basis | Principal 7,712 | Carrying value 7,645 | The method uses balance-sheet carrying value; the 67 difference is unamortized discounts and issuance costs | All balance sheet dates |

### T4.4 Income statement

| Line item | FY2025 | FY2024 | FY2023 | 9M 2026 | 9M 2025 | Q3 2026 | Q3 2025 | Q2 2026 | Q1 2026 | Q4 2025 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenues | 18,610 | 19,185 | 21,996 | 15,760 | 14,297 | 5,612 | 4,734 | 5,226 | 4,922 | 4,313 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Cost of goods sold | -19,470 | -19,122 | -20,623 | -15,245 | -14,951 | -5,147 | -4,780 | -5,094 | -5,004 | -4,519 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Gross profit (calculated: Revenues less Cost of goods sold) | -860 | 63 | 1,373 | 515 | -654 | 465 | -46 | 132 | -82 | -206 | USD millions | Calculated; the issuer prints no gross profit and its cost of goods sold includes depreciation | Calculated from the lines above |
| Selling, general and administrative expenses | -543 | -486 | -577 | -432 | -400 | -153 | -130 | -154 | -125 | -144 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Restructuring and other charges | -86 | -129 | Not supplied: dash in filing | -4 | -92 | -1 | -3 | -3 | Not supplied: dash in filing | 6 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Acquisition-related costs | -1 | -44 | -12 | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Asset impairment | -39 | -79 | Not supplied: line not printed | Not supplied: dash in filing | -39 | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: line not printed | Not supplied: line not printed | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Goodwill impairment | Not supplied: dash in filing | Not supplied: dash in filing | -125 | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Miscellaneous, net | -50 | -88 | Not supplied: dash in filing | -30 | -63 | Not supplied: dash in filing | -25 | -24 | -6 | 13 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Total operating costs | -20,189 | -19,948 | -21,337 | -15,711 | -15,545 | -5,301 | -4,938 | -5,275 | -5,135 | -4,644 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Operating income (loss) | -1,579 | -763 | 659 | 49 | -1,248 | 311 | -204 | -49 | -213 | -331 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Interest expense, net | -594 | -370 | -289 | -452 | -442 | -148 | -153 | -156 | -148 | -152 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Loss on extinguishment of debt | -10 | -27 | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | -10 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Net periodic benefit credits other than service cost component | 223 | 247 | 204 | 192 | 157 | 64 | 57 | 64 | 64 | 66 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Changes in fair value of derivatives, net | -45 | -41 | Not supplied: line not printed | -37 | -34 | -15 | -10 | -12 | -10 | -11 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Other non-operating income (expense) | 1 | 4 | 5 | 2 | 2 | 1 | 1 | 1 | Not supplied: line not printed | -1 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Total other expense | -425 | -187 | -80 | -295 | -317 | -98 | -105 | -103 | -94 | -108 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Income (loss) from continuing operations before income taxes | -2,004 | -950 | 579 | -246 | -1,565 | 213 | -309 | -152 | -307 | -439 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Income tax benefit (expense) | 581 | 236 | -144 | 55 | 375 | -46 | 78 | 20 | 81 | 206 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Income (loss) from continuing operations | -1,423 | -714 | 435 | -191 | -1,190 | 167 | -231 | -132 | -226 | -233 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Income (loss) from discontinued operations, net of tax | -5 | Not supplied: dash in filing | 1 | -7 | -3 | -2 | -3 | -2 | -3 | -2 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Net income (loss) | -1,428 | -714 | 436 | -198 | -1,193 | 165 | -234 | -134 | -229 | -235 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Net income attributable to noncontrolling interests | -50 | -46 | -51 | -32 | -42 | -13 | -17 | -11 | -8 | -8 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Net income (loss) attributable to Cliffs shareholders | -1,478 | -760 | 385 | -230 | -1,235 | 152 | -251 | -145 | -237 | -243 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 4; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 4; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 6–7 |
| Stock-based compensation expense (note disclosure, shown positive) | 57 | 50 | 41 | Not supplied: not stated in the quarterly filings | Not supplied: not stated in the quarterly filings | Not supplied: not stated in the quarterly filings | Not supplied: not stated in the quarterly filings | Not supplied: not stated in the quarterly filings | Not supplied: not stated in the quarterly filings | Not supplied: not stated in the quarterly filings | USD millions | Reported: total compensation expense recognized for stock-based awards in the stock compensation note; the income statement prints no separate line | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 147–148 |
| Depreciation, depletion and amortization (from the cash flow statement and the EBITDA reconciliation) | 1,235 | 951 | 973 | 780 | 963 | 259 | 288 | 262 | 259 | 272 | USD millions | Reported; the income statement prints no separate depreciation line | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, page 8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–9 |
| EBITDA (Reported) | -180 | 371 | 1,842 | 979 | -163 | 618 | 129 | 264 | 97 | -17 | USD millions | Reported: the issuer's Total EBITDA, net income plus interest expense, net plus income tax expense plus depreciation, depletion and amortization, before any adjustment; includes the share of noncontrolling interests | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 47; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 10; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, page 9; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, page 9 |
| EBITDA (Adjusted) | 37 | 773 | 1,893 | 993 | 58 | 612 | 143 | 286 | 95 | -21 | USD millions | Reported: the issuer's Total Adjusted EBITDA, which removes EBITDA from noncontrolling interests and the idled facilities, currency exchange, derivative fair value, disposal, severance, extinguishment, acquisition-related, impairment, arbitration and other items it names | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 47; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 10; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, page 9; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, page 9 |

### T4.5 Cash flow statement

| Line item | FY2025 | FY2024 | FY2023 | 9M 2026 | 9M 2025 | Q3 2026 | Q3 2025 | Q2 2026 | Q1 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | -1,428 | -714 | 436 | -198 | -1,193 | 165 | -234 | -134 | -229 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Depreciation, depletion and amortization | 1,235 | 951 | 973 | 780 | 963 | 259 | 288 | 262 | 259 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Pension and OPEB credits | -187 | -211 | -163 | -166 | -130 | -55 | -48 | -56 | -55 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Deferred income taxes | -506 | -196 | 110 | -57 | -381 | 45 | -78 | -17 | -85 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Restructuring and other charges | 86 | 129 | Not supplied: dash in filing | 4 | 92 | 1 | 3 | 3 | Not supplied: dash in filing | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Asset impairment | 39 | 79 | Not supplied: dash in filing | Not supplied: dash in filing | 39 | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: line not printed | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Goodwill impairment | Not supplied: dash in filing | Not supplied: dash in filing | 125 | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Other | 87 | 277 | 76 | 166 | 126 | 36 | 63 | 73 | 57 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Accounts receivable, net | 134 | 364 | 120 | -723 | -215 | -116 | -16 | -166 | -441 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Inventories | 315 | -5 | 670 | 59 | 399 | -170 | 3 | 55 | 174 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Income taxes | 13 | -17 | 122 | Not supplied: dash in filing | 15 | -2 | 5 | -2 | 4 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Pension and OPEB payments and contributions | -154 | -195 | -94 | -116 | -121 | -43 | -48 | -22 | -51 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Payables, accrued employment and accrued expenses | -78 | -401 | 22 | 412 | -31 | 135 | -36 | 236 | 41 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Other, net | -18 | 44 | -130 | -32 | -12 | -31 | -45 | -2 | 1 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Net Cash from Operating Activities | -462 | 105 | 2,267 | 129 | -449 | 224 | -143 | 230 | -325 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Purchase of property, plant and equipment | -561 | -695 | -646 | -461 | -421 | -152 | -157 | -157 | -152 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Acquisition of Stelco, net of cash acquired | Not supplied: dash in filing | -2,512 | Not supplied: dash in filing | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Proceeds from sale of business | 53 | Not supplied: dash in filing | 35 | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Other investing activities | 29 | -5 | 20 | 74 | 27 | 31 | 19 | 31 | 12 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Net Cash from Investing Activities | -479 | -3,212 | -591 | -387 | -394 | -121 | -138 | -126 | -140 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Repurchase of common shares | Not supplied: dash in filing | -733 | -152 | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Proceeds from issuance of common shares | 951 | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Proceeds from issuance of debt (senior notes in the interim statements) | 1,983 | 3,221 | 750 | Not supplied: dash in filing | 1,700 | Not supplied: dash in filing | 850 | Not supplied: dash in filing | Not supplied: dash in filing | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Repayments of senior notes | -685 | -845 | Not supplied: dash in filing | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | Not supplied: line not printed | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Borrowings (repayments) under credit facilities (ABL Facility, net in the interim statements) | -1,109 | 1,560 | -1,864 | 383 | -713 | -61 | -530 | -63 | 507 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Debt issuance costs | -30 | -109 | -34 | Not supplied: dash in filing | -26 | Not supplied: dash in filing | -12 | Not supplied: dash in filing | Not supplied: dash in filing | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Other financing activities | -168 | -124 | -204 | -110 | -108 | -41 | -22 | -16 | -53 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Net Cash from Financing Activities | 942 | 2,970 | -1,504 | 273 | 853 | -102 | 286 | -79 | 454 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Net Cash Change | 3 | -138 | 172 | 14 | 13 | 1 | 5 | 24 | -11 | USD millions | Calculated: operating plus investing plus financing plus the effect of exchange rates; the issuer prints the net increase before the exchange effect | Calculated from the lines above |
| Opening Cash | 60 | 198 | 26 | 63 | 60 | 76 | 68 | 52 | 63 | USD millions | Reported: cash, cash equivalents and restricted cash at the beginning of the period | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| FX Effect on Cash | 2 | -1 | Not supplied: dash in filing | -1 | 3 | Not supplied: dash in filing | Not supplied: dash in filing | -1 | Not supplied: dash in filing | USD millions | Reported: effect of exchange rate changes on cash | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Closing Cash | 63 | 60 | 198 | 77 | 73 | 77 | 73 | 76 | 52 | USD millions | Reported: cash, cash equivalents and restricted cash at the end of the period; the balance sheet cash excludes restricted cash | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 110–111; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 8; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, pages 7–8; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, pages 7–8 |
| Cash Interest Paid | 459 | 255 | 256 | 411 | 341 | 155 | 131 | 118 | 138 | USD millions | Reported for FY2025, FY2024, FY2023, nine months and Q1 2026; calculated as the difference between cumulative figures for Q2 2026, Q3 2026 and Q3 2025 (calculation C25); interest paid on debt obligations net of capitalized interest | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 9; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 9; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 8 |
| Income taxes paid | 7 | 17 | 94 | 5 | 5 | Not supplied: only cumulative figures are printed | Not supplied: only cumulative figures are printed | Not supplied: only cumulative figures are printed | 1 | USD millions | Reported; cumulative periods and Q1 2026 only | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 9; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 9; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 8 |
| Income tax refunds (receipts) | -23 | -47 | -205 | -6 | -18 | Not supplied: only cumulative figures are printed | Not supplied: only cumulative figures are printed | Not supplied: only cumulative figures are printed | -4 | USD millions | Reported; cumulative periods and Q1 2026 only | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 9; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 9; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 8 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2024 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 57 | 54 | 45 | 70 | 77 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Accounts receivable, net | 1,442 | 1,576 | 1,882 | 2,044 | 2,159 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Inventories | 4,772 | 5,094 | 4,591 | 4,525 | 4,694 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Other current assets | 164 | 183 | 192 | 175 | 174 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Total current assets | 6,435 | 6,907 | 6,710 | 6,814 | 7,104 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Property, plant and equipment, net | 9,481 | 9,942 | 9,345 | 9,239 | 9,186 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Goodwill | 1,814 | 1,768 | 1,800 | 1,784 | 1,782 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Intangible assets, net | 1,135 | 1,170 | 1,102 | 1,063 | 1,041 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Pension and OPEB assets | 469 | 427 | 515 | 547 | 589 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Other non-current assets | 678 | 733 | 643 | 668 | 640 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Total Assets | 20,012 | 20,947 | 20,115 | 20,115 | 20,342 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Accounts payable | 1,893 | 2,008 | 2,011 | 2,159 | 2,327 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Accrued employment costs | 517 | 486 | 457 | 509 | 527 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Accrued expenses | 396 | 375 | 346 | 378 | 310 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Other current liabilities | 496 | 492 | 509 | 560 | 628 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Total current liabilities | 3,302 | 3,361 | 3,323 | 3,606 | 3,792 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Long-term debt | 7,253 | 7,065 | 7,763 | 7,703 | 7,645 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Pension and OPEB liabilities | 655 | 751 | 631 | 617 | 593 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Deferred income taxes | 375 | 849 | 305 | 300 | 300 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Asset retirement and environmental obligations | 682 | 601 | 693 | 695 | 698 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Other non-current liabilities | 1,422 | 1,453 | 1,381 | 1,376 | 1,348 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Total Liabilities | 13,689 | 14,080 | 14,096 | 14,297 | 14,376 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Total Cliffs shareholders' equity | 6,116 | 6,634 | 5,822 | 5,604 | 5,687 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Noncontrolling interests | 207 | 233 | 197 | 214 | 279 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Total Equity | 6,323 | 6,867 | 6,019 | 5,818 | 5,966 | USD millions | Reported | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |
| Total Debt | 7,253 | 7,065 | 7,763 | 7,703 | 7,645 | USD millions | Reported: the Long-term debt line at carrying value, net of unamortized discounts and issuance costs; the balance sheet has no current portion of debt; finance lease liabilities sit in other liabilities and are not added | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 131–132; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 12; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 15; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15 |
| Cash & Equivalents | 57 | 54 | 45 | 70 | 77 | USD millions | Reported: cash and cash equivalents, excluding restricted cash | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 109; 10-Q_2026-03-31_clf-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_clf-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 3 |

### Segment schedule

| Segment | Period | Revenues | Adjusted EBITDA | Unit | Source |
| --- | --- | --- | --- | --- | --- |
| Steelmaking | FY2025 | 18,063 | -16 | USD millions | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 128–130 |
| Other Businesses | FY2025 | 657 | 53 | USD millions | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 128–130 |
| Corporate and eliminations | FY2025 | -110 | Not supplied: dash in filing | USD millions | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 128–130 |
| Steelmaking | FY2024 | 18,620 | 715 | USD millions | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 128–130 |
| Other Businesses | FY2024 | 656 | 53 | USD millions | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 128–130 |
| Corporate and eliminations | FY2024 | -91 | 5 | USD millions | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 128–130 |
| Steelmaking | FY2023 | 21,413 | 1,855 | USD millions | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 128–130 |
| Other Businesses | FY2023 | 665 | 43 | USD millions | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 128–130 |
| Corporate and eliminations | FY2023 | -82 | -5 | USD millions | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 128–130 |
| Steelmaking | 9M 2026 | 15,385 | 949 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Other Businesses | 9M 2026 | 513 | 46 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Corporate and eliminations | 9M 2026 | -138 | -2 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Steelmaking | 9M 2025 | 13,888 | 20 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Other Businesses | 9M 2025 | 498 | 38 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Corporate and eliminations | 9M 2025 | -89 | Not supplied: dash in filing | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Steelmaking | Q3 2026 | 5,492 | 601 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Other Businesses | Q3 2026 | 169 | 13 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Corporate and eliminations | Q3 2026 | -49 | -2 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Steelmaking | Q3 2025 | 4,585 | 129 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Other Businesses | Q3 2025 | 173 | 12 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |
| Corporate and eliminations | Q3 2025 | -24 | 2 | USD millions | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–13 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABL Facility | Asset-based revolving credit facility | Not supplied: carrying value by instrument is not disclosed | 834 | 834 | 4,750 | Secured: first-priority lien on ABL collateral, second-priority lien on substantially all other assets | Senior secured; guaranteed by certain wholly owned US subsidiaries | USD | 834 | Not applicable | Not supplied: margin over SOFR is not stated; effective rate 5.211% at 2026-09-30 | Floating: the annual report states a variable rate based on SOFR | SOFR | Not supplied: margin over SOFR not stated | Not supplied: floor not stated | Earlier of 2028-06-09 or 91 days before certain other material debt matures | Not applicable: revolving facility | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 139–140; 10-K_2025-12-31_clf-20251231.htm.jsonl, page 43 |
| 4.625% 2029 Senior Notes | Senior unsecured note | Not supplied: carrying value by instrument is not disclosed | 368 | Not applicable | Not applicable | Unsecured | Senior unsecured; guaranteed on a senior unsecured basis by material direct and indirect wholly owned domestic subsidiaries | USD | 368 | Not applicable | 4.625% | Fixed | Not applicable | Not applicable | Not applicable | 2029-03-01 | 0 | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 133–137 |
| 6.875% 2029 Senior Notes | Senior unsecured note | Not supplied: carrying value by instrument is not disclosed | 900 | Not applicable | Not applicable | Unsecured | Senior unsecured; guaranteed on a senior unsecured basis by material direct and indirect wholly owned domestic subsidiaries | USD | 900 | Not applicable | 6.875% | Fixed | Not applicable | Not applicable | Not applicable | 2029-11-01 | 0 | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 133–137 |
| 6.750% 2030 Senior Notes | Senior unsecured note | Not supplied: carrying value by instrument is not disclosed | 750 | Not applicable | Not applicable | Unsecured | Senior unsecured; guaranteed on a senior unsecured basis by material direct and indirect wholly owned domestic subsidiaries | USD | 750 | Not applicable | 6.750% | Fixed | Not applicable | Not applicable | Not applicable | 2030-04-15 | 0 | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 133–137 |
| 4.875% 2031 Senior Notes | Senior unsecured note | Not supplied: carrying value by instrument is not disclosed | 325 | Not applicable | Not applicable | Unsecured | Senior unsecured; guaranteed on a senior unsecured basis by material direct and indirect wholly owned domestic subsidiaries | USD | 325 | Not applicable | 4.875% | Fixed | Not applicable | Not applicable | Not applicable | 2031-03-01 | 0 | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 133–137 |
| 7.500% 2031 Senior Notes | Senior unsecured note | Not supplied: carrying value by instrument is not disclosed | 850 | Not applicable | Not applicable | Unsecured | Senior unsecured; guaranteed on a senior unsecured basis by material direct and indirect wholly owned domestic subsidiaries | USD | 850 | Not applicable | 7.500% | Fixed | Not applicable | Not applicable | Not applicable | 2031-09-15 | 0 | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 133–137 |
| 7.000% 2032 Senior Notes | Senior unsecured note | Not supplied: carrying value by instrument is not disclosed | 1,425 | Not applicable | Not applicable | Unsecured | Senior unsecured; guaranteed on a senior unsecured basis by material direct and indirect wholly owned domestic subsidiaries | USD | 1,425 | Not applicable | 7.000% | Fixed | Not applicable | Not applicable | Not applicable | 2032-03-15 | 0 | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 133–137 |
| 7.375% 2033 Senior Notes | Senior unsecured note | Not supplied: carrying value by instrument is not disclosed | 900 | Not applicable | Not applicable | Unsecured | Senior unsecured; guaranteed on a senior unsecured basis by material direct and indirect wholly owned domestic subsidiaries | USD | 900 | Not applicable | 7.375% | Fixed | Not applicable | Not applicable | Not applicable | 2033-05-01 | 0 | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 133–137 |
| 7.625% 2034 Senior Notes | Senior unsecured note | Not supplied: carrying value by instrument is not disclosed | 1,125 | Not applicable | Not applicable | Unsecured | Senior unsecured; guaranteed on a senior unsecured basis by material direct and indirect wholly owned domestic subsidiaries | USD | 1,125 | Not applicable | 7.625% | Fixed | Not applicable | Not applicable | Not applicable | 2034-01-15 | 0 | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 133–137 |
| 6.250% 2040 Senior Notes | Senior unsecured note | Not supplied: carrying value by instrument is not disclosed | 235 | Not applicable | Not applicable | Unsecured | Senior unsecured; no subsidiary guarantees | USD | 235 | Not applicable | 6.250% | Fixed | Not applicable | Not applicable | Not applicable | 2040-10-01 | 0 | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 133–137 |
| Financing cost adjustment | Aggregate unamortized discounts and issuance costs | -67 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -67 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) LTM 2026-03-31 | LTM | USD -180m | USD 97m | USD -213m | USD 130m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl | Stubs are Q1 2026 and Q1 2025 reported by the issuer; interim figures unaudited |
| EBITDA (Reported) LTM 2026-06-30 | LTM | USD -180m | USD 361m | USD -292m | USD 473m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl | Stubs are H1 2026 and H1 2025 reported by the issuer; interim figures unaudited |
| EBITDA (Reported) LTM 2026-09-30 | LTM | USD -180m | USD 979m | USD -163m | USD 962m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl | Stubs are 9M 2026 and 9M 2025 reported by the issuer; interim figures unaudited |
| EBITDA (Adjusted) LTM 2026-03-31 | LTM | USD 37m | USD 95m | USD -179m | USD 311m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl | Issuer-adjusted; stubs are Q1 2026 and Q1 2025 |
| EBITDA (Adjusted) LTM 2026-06-30 | LTM | USD 37m | USD 381m | USD -85m | USD 503m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl | Issuer-adjusted; stubs are H1 2026 and H1 2025 |
| EBITDA (Adjusted) LTM 2026-09-30 | LTM | USD 37m | USD 993m | USD 58m | USD 972m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl | Issuer-adjusted; stubs are 9M 2026 and 9M 2025 |
| Cash interest paid LTM 2026-03-31 | LTM | USD 459m | USD 138m | USD 77m | USD 520m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-03-31_clf-20260331.htm.jsonl | Interest paid on debt obligations net of capitalized interest; stubs are Q1 2026 and Q1 2025 |
| Cash interest paid LTM 2026-06-30 | LTM | USD 459m | USD 256m | USD 210m | USD 505m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-06-30_clf-20260630.htm.jsonl | Interest paid on debt obligations net of capitalized interest; stubs are H1 2026 and H1 2025 |
| Cash interest paid LTM 2026-09-30 | LTM | USD 459m | USD 411m | USD 341m | USD 529m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-09-30_clf-20260930.htm.jsonl | Interest paid on debt obligations net of capitalized interest; stubs are 9M 2026 and 9M 2025 |
| Revenues LTM 2026-09-30 | LTM | USD 18,610m | USD 15,760m | USD 14,297m | USD 20,073m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-09-30_clf-20260930.htm.jsonl | Nine-month stubs from the third-quarter report |
| Net cash from operating activities LTM 2026-09-30 | LTM | USD -462m | USD 129m | USD -449m | USD 116m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-09-30_clf-20260930.htm.jsonl | Nine-month stubs |
| Purchase of property, plant and equipment LTM 2026-09-30 | LTM | USD -561m | USD -461m | USD -421m | USD -601m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-09-30_clf-20260930.htm.jsonl | Nine-month stubs; outflow shown negative |
| Net cash from operating activities Q4 2025 | Q4 | USD -462m | USD -449m | Not applicable: no prior-year stub is used | USD -13m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-09-30_clf-20260930.htm.jsonl | No fourth-quarter cash flow statement was supplied, so the quarter is the year less nine months 2025 (the Current Stub column holds the nine months subtracted) |
| Purchase of property, plant and equipment Q4 2025 | Q4 | USD -561m | USD -421m | Not applicable: no prior-year stub is used | USD -140m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-09-30_clf-20260930.htm.jsonl | Year less nine months 2025; outflow shown negative |
| Cash interest paid Q4 2025 | Q4 | USD 459m | USD 341m | Not applicable: no prior-year stub is used | USD 118m | Calculated | 10-K_2025-12-31_clf-20251231.htm.jsonl; 10-Q_2026-09-30_clf-20260930.htm.jsonl | Year less nine months 2025 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total debt / EBITDA | 7,065 | Total debt, Net debt data FY2024 / 2024-12-31 | 371 | EBITDA (Reported), T4.4 FY2024 | FY2024 / 2024-12-31 | USD | US$m | 19.04 | Calculated | 1 | Carrying-value debt; fiscal-year statement figures |
| Net debt / EBITDA | Net debt / EBITDA | 7,011 | Net debt, Net debt data FY2024 / 2024-12-31 | 371 | EBITDA (Reported), T4.4 FY2024 | FY2024 / 2024-12-31 | USD | US$m | 18.90 | Calculated | 1 | Carrying-value debt; fiscal-year statement figures |
| EBITDA / cash interest | EBITDA / Cash interest paid | 371 | EBITDA (Reported), T4.4 FY2024 | 255 | Cash Interest Paid, T4.5 FY2024 | FY2024 / 2024-12-31 | USD | US$m | 1.45 | Calculated | 1 | Carrying-value debt; fiscal-year statement figures |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 7,065 | Total debt, Net debt data FY2024 / 2024-12-31 | 773 | EBITDA (Adjusted), T4.4 FY2024 | FY2024 / 2024-12-31 | USD | US$m | 9.14 | Calculated | 1 | Carrying-value debt; fiscal-year statement figures |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 7,011 | Net debt, Net debt data FY2024 / 2024-12-31 | 773 | EBITDA (Adjusted), T4.4 FY2024 | FY2024 / 2024-12-31 | USD | US$m | 9.07 | Calculated | 1 | Carrying-value debt; fiscal-year statement figures |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / Cash interest paid | 773 | EBITDA (Adjusted), T4.4 FY2024 | 255 | Cash Interest Paid, T4.5 FY2024 | FY2024 / 2024-12-31 | USD | US$m | 3.03 | Calculated | 1 | Carrying-value debt; fiscal-year statement figures |
| Total debt / EBITDA | Total debt / EBITDA | 7,253 | Total debt, Net debt data FY2025 / 2025-12-31 | -180 | EBITDA (Reported), T4.4 FY2025 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: denominator -180 is not above zero | Not Calculable | 1 | Denominator is zero or negative, so no multiple exists |
| Net debt / EBITDA | Net debt / EBITDA | 7,196 | Net debt, Net debt data FY2025 / 2025-12-31 | -180 | EBITDA (Reported), T4.4 FY2025 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: denominator -180 is not above zero | Not Calculable | 1 | Denominator is zero or negative, so no multiple exists |
| EBITDA / cash interest | EBITDA / Cash interest paid | -180 | EBITDA (Reported), T4.4 FY2025 | 459 | Cash Interest Paid, T4.5 FY2025 | FY2025 / 2025-12-31 | USD | US$m | -0.39 | Calculated | 1 | Carrying-value debt; fiscal-year statement figures |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 7,253 | Total debt, Net debt data FY2025 / 2025-12-31 | 37 | EBITDA (Adjusted), T4.4 FY2025 | FY2025 / 2025-12-31 | USD | US$m | 196.03 | Calculated | 1 | Carrying-value debt; fiscal-year statement figures |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 7,196 | Net debt, Net debt data FY2025 / 2025-12-31 | 37 | EBITDA (Adjusted), T4.4 FY2025 | FY2025 / 2025-12-31 | USD | US$m | 194.49 | Calculated | 1 | Carrying-value debt; fiscal-year statement figures |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / Cash interest paid | 37 | EBITDA (Adjusted), T4.4 FY2025 | 459 | Cash Interest Paid, T4.5 FY2025 | FY2025 / 2025-12-31 | USD | US$m | 0.08 | Calculated | 1 | Carrying-value debt; fiscal-year statement figures |
| Total debt / EBITDA | Total debt / EBITDA | 7,763 | Total debt, Net debt data 2026-03-31 | 130 | EBITDA (Reported), T4.8 last twelve months | 2026-03-31 | USD | US$m | 59.72 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Net debt / EBITDA | Net debt / EBITDA | 7,718 | Net debt, Net debt data 2026-03-31 | 130 | EBITDA (Reported), T4.8 last twelve months | 2026-03-31 | USD | US$m | 59.37 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| EBITDA / cash interest | EBITDA / Cash interest paid | 130 | EBITDA (Reported), T4.8 last twelve months | 520 | Cash Interest Paid, T4.8 last twelve months | 2026-03-31 | USD | US$m | 0.25 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 7,763 | Total debt, Net debt data 2026-03-31 | 311 | EBITDA (Adjusted), T4.8 last twelve months | 2026-03-31 | USD | US$m | 24.96 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 7,718 | Net debt, Net debt data 2026-03-31 | 311 | EBITDA (Adjusted), T4.8 last twelve months | 2026-03-31 | USD | US$m | 24.82 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / Cash interest paid | 311 | EBITDA (Adjusted), T4.8 last twelve months | 520 | Cash Interest Paid, T4.8 last twelve months | 2026-03-31 | USD | US$m | 0.60 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Total debt / EBITDA | Total debt / EBITDA | 7,703 | Total debt, Net debt data 2026-06-30 | 473 | EBITDA (Reported), T4.8 last twelve months | 2026-06-30 | USD | US$m | 16.29 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Net debt / EBITDA | Net debt / EBITDA | 7,633 | Net debt, Net debt data 2026-06-30 | 473 | EBITDA (Reported), T4.8 last twelve months | 2026-06-30 | USD | US$m | 16.14 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| EBITDA / cash interest | EBITDA / Cash interest paid | 473 | EBITDA (Reported), T4.8 last twelve months | 505 | Cash Interest Paid, T4.8 last twelve months | 2026-06-30 | USD | US$m | 0.94 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 7,703 | Total debt, Net debt data 2026-06-30 | 503 | EBITDA (Adjusted), T4.8 last twelve months | 2026-06-30 | USD | US$m | 15.31 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 7,633 | Net debt, Net debt data 2026-06-30 | 503 | EBITDA (Adjusted), T4.8 last twelve months | 2026-06-30 | USD | US$m | 15.17 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / Cash interest paid | 503 | EBITDA (Adjusted), T4.8 last twelve months | 505 | Cash Interest Paid, T4.8 last twelve months | 2026-06-30 | USD | US$m | 1.00 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Total debt / EBITDA | Total debt / EBITDA | 7,645 | Total debt, Net debt data 2026-09-30 | 962 | EBITDA (Reported), T4.8 last twelve months | 2026-09-30 | USD | US$m | 7.95 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Net debt / EBITDA | Net debt / EBITDA | 7,568 | Net debt, Net debt data 2026-09-30 | 962 | EBITDA (Reported), T4.8 last twelve months | 2026-09-30 | USD | US$m | 7.87 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| EBITDA / cash interest | EBITDA / Cash interest paid | 962 | EBITDA (Reported), T4.8 last twelve months | 529 | Cash Interest Paid, T4.8 last twelve months | 2026-09-30 | USD | US$m | 1.82 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 7,645 | Total debt, Net debt data 2026-09-30 | 972 | EBITDA (Adjusted), T4.8 last twelve months | 2026-09-30 | USD | US$m | 7.87 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 7,568 | Net debt, Net debt data 2026-09-30 | 972 | EBITDA (Adjusted), T4.8 last twelve months | 2026-09-30 | USD | US$m | 7.79 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / Cash interest paid | 972 | EBITDA (Adjusted), T4.8 last twelve months | 529 | Cash Interest Paid, T4.8 last twelve months | 2026-09-30 | USD | US$m | 1.84 | Calculated | 2b | Carrying-value debt; last-twelve-months EBITDA and cash interest, unaudited interim inputs |
| EBITDA margin (reported), % | Reported EBITDA / Revenues x 100 | 371 | Statement tables and constructed period register | 19,185 | Statement tables and constructed period register | FY2024 | USD | US$m | 1.93 | Calculated | 1 | Percentage of revenue |
| EBITDA margin (reported), % | Reported EBITDA / Revenues x 100 | -180 | Statement tables and constructed period register | 18,610 | Statement tables and constructed period register | FY2025 | USD | US$m | -0.97 | Calculated | 1 | Percentage of revenue; negative EBITDA |
| EBITDA margin (reported), % | Reported EBITDA / Revenues x 100 | 962 | Statement tables and constructed period register | 20,073 | Statement tables and constructed period register | 2026-09-30 | USD | US$m | 4.79 | Calculated | 2b | Percentage of last-twelve-months revenue |
| Adjusted EBITDA margin, % | Adjusted EBITDA / Revenues x 100 | 773 | Statement tables and constructed period register | 19,185 | Statement tables and constructed period register | FY2024 | USD | US$m | 4.03 | Calculated | 1 | Issuer-adjusted EBITDA |
| Adjusted EBITDA margin, % | Adjusted EBITDA / Revenues x 100 | 37 | Statement tables and constructed period register | 18,610 | Statement tables and constructed period register | FY2025 | USD | US$m | 0.20 | Calculated | 1 | Issuer-adjusted EBITDA |
| Adjusted EBITDA margin, % | Adjusted EBITDA / Revenues x 100 | 972 | Statement tables and constructed period register | 20,073 | Statement tables and constructed period register | 2026-09-30 | USD | US$m | 4.84 | Calculated | 2b | Issuer-adjusted EBITDA, last twelve months |
| Revenue growth, % | (Revenues FY2025 / Revenues FY2024 - 1) x 100 | 18,610 | Statement tables and constructed period register | 19,185 | Statement tables and constructed period register | FY2025 | USD | US$m | -3.00 | Calculated | 1 | Change on the prior fiscal year |
| Revenue growth, % | (Revenues FY2024 / Revenues FY2023 - 1) x 100 | 19,185 | Statement tables and constructed period register | 21,996 | Statement tables and constructed period register | FY2024 | USD | US$m | -12.78 | Calculated | 1 | Change on the prior fiscal year |
| Free cash flow conversion, % | Free cash flow / Reported EBITDA x 100 | -485 | Statement tables and constructed period register | 962 | Statement tables and constructed period register | 2026-09-30 | USD | US$m | -50.42 | Calculated | 2b | Free cash flow is operating cash flow less capital expenditure, last twelve months |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Operating volume | Steel product shipments, thousand net tons (period flow) | 3,770 | 4,108 | 4,025 | 4,150 | Higher than Q4 2025; dipped in Q2 2026 | Reported in the releases; sources: EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, page 2; EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, page 2; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 2 |
| Pricing | Average net selling price per net ton, USD (rate) | 993 | 1,048 | 1,124 | 1,177 | Rising | Reported for steel products; a rate, not averaged across quarters |
| Steelmaking profit | Steelmaking cash margin, USD millions (period flow) | 25 | 136 | 349 | 685 | Rising | Revenues less cash cost of goods sold on the release basis |
| Steelmaking profit | Steelmaking gross margin, USD millions (period flow) | -220 | -95 | 113 | 454 | Rising | After depreciation, depletion and amortization; release basis |
| Steelmaking profit | Steelmaking revenues on the release basis, USD millions (period flow) | 4,154 | 4,757 | 5,052 | 5,447 | Rising | Differs from the segment note for Q3 2026 by 45; see the definition conflict register |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported, unadjusted EBITDA is the denominator | Total EBITDA includes the noncontrolling interests' share; Total Adjusted EBITDA removes it and named items | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 93; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 10 | FY2025, LTM 2026-09-30 | FY2025: -180 against 37 (217); LTM: 962 against 972 (10) | Financial foundation; Fundamental credit | Both are shown; ratios use reported EBITDA and adjusted twins sit beside them |
| Total debt | Balance-sheet carrying value | Principal is shown in the note; carrying value is net of discounts and issuance costs | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15 | 2026-09-30 | Carrying 7,645 against principal 7,712, difference -67 | Financial foundation; Liquidity | Carrying value is used; principal is shown in the reconciliation |
| Finance leases | Lease liabilities on their own balance-sheet lines are not debt | Finance lease liabilities of 67 current and 335 non-current are in other liabilities | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 152 | 2025-12-31 (later dates not stated) | 402 at 2025-12-31 | Fundamental credit | Excluded from debt; lease-adjusted leverage not stated |
| Steelmaking revenue | One figure per period and perimeter | Release segment table 5,447; segment note 5,492 for Q3 2026 | EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 2; 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–12 | Q3 2026 (and Q3 2025: 4,561 against 4,585) | 45 for Q3 2026; 24 for Q3 2025 | Business & governance; Fundamental credit | Both are shown with sources; the note is used in the segment schedule because it reconciles to consolidated revenue; the cause is not stated |
| Leverage target | Net debt over EBITDA | Second-quarter release: under 2.5x debt to EBITDA by this time next year; third-quarter release: under 2.5x net debt to EBITDA by the middle of next year | EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, page 2; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 1 | Targets stated in July and October 2026 | Not quantifiable: gross against net definition and a different date | Fundamental credit | Quote both; compute no target headroom |
| Interest | Cash interest paid for coverage | Interest expense, net is an accrual: 594 for FY2025 against cash interest paid 459 | 10-K_2025-12-31_clf-20251231.htm.jsonl, pages 109–110; 10-K_2025-12-31_clf-20251231.htm.jsonl, page 123 | All periods | FY2025: 135 lower in cash than in expense; interest paid is stated net of capitalized interest of 15 and the sources do not reconcile the rest | Financial foundation; Fundamental credit | Coverage uses cash interest paid |
| Liquidity | Cash plus undrawn committed facilities | Issuer liquidity is cash plus ABL Facility borrowing capacity available, capped by the borrowing base | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 46 | 2025-12-31 to 2026-09-30 | Commitment less drawings 3,859 against capacity 3,169 at 2026-09-30 | Liquidity; Fundamental credit | The issuer's capacity figure is used |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Reported leverage and coverage metrics | Ready with Limitations | Interim ratios use last-twelve-months figures from unaudited inputs; end-2025 reported EBITDA is negative so no multiple exists | Read interim ratios with the constructed period register |
| Liquidity and maturity profile | Ready with Limitations | Borrowing capacity at 2024-12-31 not stated; finance leases after 2025-12-31 not stated | Supply the 2024 annual report and later lease disclosures |
| Adjusted EBITDA bridge | Ready with Limitations | Third-quarter 2026 only; no run-rate or synergy add-backs are stated | None |
| Segment analysis | Ready with Limitations | One reportable segment; the release and the segment note differ on steelmaking revenue | Ask the issuer to reconcile the two |
| Guarantor-level and structural analysis | Not Ready | Only summarized obligated-group data; the guarantor schedule and indentures were not supplied | Supply the guarantor schedule and the note indentures |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 7,065 | 54 | 7,011 | US$m | Carrying value of Long-term debt; principal 7,148; finance lease liabilities of 382 (63 current, 319 non-current) are in other liabilities and are not included |
| FY2025 / 2025-12-31 | 7,253 | 57 | 7,196 | US$m | Carrying value of Long-term debt, the only debt line; includes ABL Facility borrowings of 452; principal 7,330; finance lease liabilities of 402 (67 current, 335 non-current) are in other liabilities and are not included |
| 2026-03-31 | 7,763 | 45 | 7,718 | US$m | Carrying value of Long-term debt; includes ABL Facility borrowings of 959; principal 7,837; finance lease liabilities not stated for this date and not included |
| 2026-06-30 | 7,703 | 70 | 7,633 | US$m | Carrying value of Long-term debt; includes ABL Facility borrowings of 895; principal 7,773; finance lease liabilities not stated for this date and not included |
| 2026-09-30 | 7,645 | 77 | 7,568 | US$m | Carrying value of Long-term debt; includes ABL Facility borrowings of 834; principal 7,712; finance lease liabilities not stated for this date and not included; no pro forma adjustment |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 7,712 | -67 | 7,645 | US$m | Principal is the sum of the maturity ladder; reconciling items are the unamortized discounts and issuance costs of 67 the note prints; carrying value is the Long-term debt line and equals Gross debt in Net debt data; no debt is left out of the ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | Read the third-quarter quarterly report (subsequent events note, financial statements, liquidity discussion) and the three earnings releases; the October release expects a major debt reduction in the fourth quarter from free cash flow and property sale proceeds but states no amount, date or completed transaction, so nothing is reflected |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 19.04 | 18.90 | x | Carrying-value debt over reported EBITDA of the fiscal year |
| FY2025 / 2025-12-31 | Not supplied: reported EBITDA is not above zero, so no multiple exists | Not supplied: reported EBITDA is not above zero, so no multiple exists | x | Carrying-value debt over reported EBITDA of the fiscal year |
| 2026-03-31 | 59.72 | 59.37 | x | Carrying-value debt over last-twelve-months reported EBITDA (unaudited interim inputs) |
| 2026-06-30 | 16.29 | 16.14 | x | Carrying-value debt over last-twelve-months reported EBITDA (unaudited interim inputs) |
| 2026-09-30 | 7.95 | 7.87 | x | Carrying-value debt over last-twelve-months reported EBITDA (unaudited interim inputs) |

Interim multiples use last-twelve-months reported EBITDA from unaudited quarters and carrying-value debt, the end-2025 multiple does not exist because reported EBITDA was negative, and the March and June 2026 multiples reflect a trough denominator.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1.45 | x | Reported EBITDA over cash interest paid in the fiscal year |
| FY2025 / 2025-12-31 | -0.39 | x | Reported EBITDA over cash interest paid in the fiscal year |
| 2026-03-31 | 0.25 | x | Last-twelve-months reported EBITDA over last-twelve-months cash interest paid |
| 2026-06-30 | 0.94 | x | Last-twelve-months reported EBITDA over last-twelve-months cash interest paid |
| 2026-09-30 | 1.82 | x | Last-twelve-months reported EBITDA over last-twelve-months cash interest paid |

Cover uses cash interest paid, not interest expense, and interim rows use last-twelve-months figures, so the end-2025 figure is negative and not comparable with the others as a level.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 54 | Not supplied: the 2025 annual report states ABL Facility availability at 2025-12-31 only | US$m | Cash is the balance sheet figure; the borrowing capacity at 2024-12-31 is not in the supplied documents |
| FY2025 / 2025-12-31 | 57 | 3,213 | US$m | Borrowing capacity available under the ABL Facility: borrowing base 3,730 less borrowings 452 less letters of credit 65; limited by the borrowing base, below the 4,750 commitment; liquidity 3,270 |
| 2026-03-31 | 45 | 3,096 | US$m | Borrowing capacity available under the ABL Facility: borrowing base 4,103 less borrowings 959 less letters of credit 48; limited by the borrowing base, below the 4,750 commitment; liquidity 3,141 |
| 2026-06-30 | 70 | 3,014 | US$m | Borrowing capacity available under the ABL Facility: borrowing base 3,969 less borrowings 895 less letters of credit 60; limited by the borrowing base, below the 4,750 commitment; liquidity 3,084 |
| 2026-09-30 | 77 | 3,169 | US$m | Borrowing capacity available under the ABL Facility: borrowing base 4,060 less borrowings 834 less letters of credit 57; limited by the borrowing base, below the 4,750 commitment; liquidity 3,246 |

Undrawn committed facilities are the ABL Facility borrowing capacity available, which the borrowing base limits below the commitment, and the figure for 2024-12-31 is not in the supplied documents.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 | 0 | US$m | The filing prints a dash for 2026; read as no maturity because the printed total of 7,712 equals the other years |
| 2027 | 0 | US$m | The filing prints a dash for 2027; read as no maturity for the same reason; the 2027 notes were redeemed in October 2025 |
| 2028 | 834 | US$m | ABL Facility borrowings, due on the earlier of June 9, 2028 or 91 days before certain other material debt matures |
| 2029 | 1,268 | US$m | 4.625% 2029 Senior Notes 368 plus 6.875% 2029 Senior Notes 900 |
| 2030 | 750 | US$m | 6.750% 2030 Senior Notes |
| Thereafter | 4,860 | US$m | 2031 notes 325 and 850, 2032 notes 1,425, 2033 notes 900, 2034 notes 1,125, 2040 notes 235 |

Amounts are principal outstanding at 2026-09-30, before 67 of unamortized discounts and issuance costs, and the ABL Facility is shown at its 2028 date.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 | 21,996 | 1,893 | US$m | Twelve months; issuer-adjusted EBITDA (Total Adjusted EBITDA) |
| FY2024 | 19,185 | 773 | US$m | Twelve months; issuer-adjusted EBITDA (Total Adjusted EBITDA) |
| FY2025 | 18,610 | 37 | US$m | Twelve months; issuer-adjusted EBITDA (Total Adjusted EBITDA) |
| LTM 2026-09-30 | 20,073 | 972 | US$m | Twelve months, derived: FY2025 plus nine months 2026 less nine months 2025; issuer-adjusted EBITDA; unaudited interim inputs |

Adjusted EBITDA is the issuer's own measure, and the last row is a derived twelve-month figure from unaudited interim inputs.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| ABL Facility | 1 | Yes | 834 | 0.87 | US$m | First-priority lien on receivables, inventory and certain other ABL collateral, second-priority lien on substantially all other assets; borrower Cleveland-Cliffs Inc.; guaranteed by certain wholly owned US subsidiaries; Amount is drawings, excluding letters of credit of 57; commitments of 4,750 are split 4,250 for US borrowers and 500 for Canadian borrowers; principal at 2026-09-30; cumulative principal 834 over last-twelve-months reported EBITDA of 962; notes of equal rank are cumulated in maturity order |
| 4.625% 2029 Senior Notes | 2 | No | 368 | 1.25 | US$m | Unsecured; issuer Cleveland-Cliffs Inc.; guaranteed by material direct and indirect wholly owned domestic subsidiaries; principal at 2026-09-30; cumulative principal 1,202 over last-twelve-months reported EBITDA of 962; notes of equal rank are cumulated in maturity order |
| 6.875% 2029 Senior Notes | 2 | No | 900 | 2.19 | US$m | Unsecured; guaranteed by material direct and indirect wholly owned domestic subsidiaries; principal at 2026-09-30; cumulative principal 2,102 over last-twelve-months reported EBITDA of 962; notes of equal rank are cumulated in maturity order |
| 6.750% 2030 Senior Notes | 2 | No | 750 | 2.96 | US$m | Unsecured; guaranteed by material direct and indirect wholly owned domestic subsidiaries; principal at 2026-09-30; cumulative principal 2,852 over last-twelve-months reported EBITDA of 962; notes of equal rank are cumulated in maturity order |
| 4.875% 2031 Senior Notes | 2 | No | 325 | 3.30 | US$m | Unsecured; guaranteed by material direct and indirect wholly owned domestic subsidiaries; principal at 2026-09-30; cumulative principal 3,177 over last-twelve-months reported EBITDA of 962; notes of equal rank are cumulated in maturity order |
| 7.500% 2031 Senior Notes | 2 | No | 850 | 4.19 | US$m | Unsecured; guaranteed by material direct and indirect wholly owned domestic subsidiaries; principal at 2026-09-30; cumulative principal 4,027 over last-twelve-months reported EBITDA of 962; notes of equal rank are cumulated in maturity order |
| 7.000% 2032 Senior Notes | 2 | No | 1,425 | 5.67 | US$m | Unsecured; guaranteed by material direct and indirect wholly owned domestic subsidiaries; principal at 2026-09-30; cumulative principal 5,452 over last-twelve-months reported EBITDA of 962; notes of equal rank are cumulated in maturity order |
| 7.375% 2033 Senior Notes | 2 | No | 900 | 6.60 | US$m | Unsecured; guaranteed by material direct and indirect wholly owned domestic subsidiaries; principal at 2026-09-30; cumulative principal 6,352 over last-twelve-months reported EBITDA of 962; notes of equal rank are cumulated in maturity order |
| 7.625% 2034 Senior Notes | 2 | No | 1,125 | 7.77 | US$m | Unsecured; guaranteed by material direct and indirect wholly owned domestic subsidiaries; principal at 2026-09-30; cumulative principal 7,477 over last-twelve-months reported EBITDA of 962; notes of equal rank are cumulated in maturity order |
| 6.250% 2040 Senior Notes | 2 | No | 235 | 8.02 | US$m | Unsecured; no subsidiary guarantees, so structurally junior to the guarantors' obligations under the other series; principal at 2026-09-30; cumulative principal 7,712 over last-twelve-months reported EBITDA of 962; notes of equal rank are cumulated in maturity order |

Only the ABL Facility is secured, notes of equal rank are cumulated in maturity order, and amounts are principal at 2026-09-30.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Total EBITDA (reported), Q3 2026 | 618 | US$m | Opening amount: the issuer's Total EBITDA for the three months ended 2026-09-30 |
| Less: EBITDA from noncontrolling interests | -19 | US$m | Net income attributable to noncontrolling interests 13 plus their depreciation 6, removed by the issuer |
| Idled facilities charges | 4 | US$m | Charge of 4 added back by the issuer; classification other stated; realisation status not stated |
| Currency exchange | 4 | US$m | Loss of 4 added back by the issuer; classification other stated; realisation status not stated |
| Changes in fair value of derivatives, net | 15 | US$m | Loss of 15 added back by the issuer; classification other stated; realisation status not stated |
| Gain on disposal of assets, net | -14 | US$m | Gain of 14 removed by the issuer; classification other stated; realisation status not stated |
| Severance | 2 | US$m | Cost of 2 added back by the issuer; classification restructuring; realisation status not stated |
| Other, net | 2 | US$m | Cost of 2 added back by the issuer; classification other stated; realisation status not stated |
| Total Adjusted EBITDA (issuer-adjusted), Q3 2026 | 612 | US$m | Closing amount: the issuer's Total Adjusted EBITDA; opening plus steps equals closing; the issuer states no run-rate, cost-saving or synergy add-back for the quarter |

The bridge covers the third quarter of 2026 only, and each step is as the issuer prints it.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit |
| --- | --- | --- | --- | --- |
| Revenues | 19,185 | 18,610 | 20,073 | US$m |
| EBITDA (Reported) | 371 | -180 | 962 | US$m |
| EBITDA (Adjusted) | 773 | 37 | 972 | US$m |
| Cash interest paid | 255 | 459 | 529 | US$m |
| Total debt (carrying value) | 7,065 | 7,253 | 7,645 | US$m |
| Cash and cash equivalents | 54 | 57 | 77 | US$m |
| Net debt | 7,011 | 7,196 | 7,568 | US$m |
| Net debt / EBITDA (Reported) | 18.90 | Not calculable: reported EBITDA is negative | 7.87 | x |
| Net debt / EBITDA (Adjusted) | 9.07 | 194.49 | 7.79 | x |
| EBITDA (Reported) / cash interest | 1.45 | -0.39 | 1.82 | x |
| EBITDA (Adjusted) / cash interest | 3.03 | 0.08 | 1.84 | x |
| Free cash flow (operating cash flow less capital expenditure) | -590 | -1,023 | -485 | US$m |
| Liquidity (cash plus ABL Facility borrowing capacity) | Not supplied: borrowing capacity at 2024-12-31 is not in the documents | 3,270 | 3,246 | US$m |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 28 |
| Calculated | 16 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 3 |
| Fields present | 22 |
| Fields total | 24 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 12 |

## Calculations

| Calculation ID | Calculation | Inputs | Result |
| --- | --- | --- | --- |
| C1 | Net debt at 2024-12-31 | Gross debt 7,065 less cash 54 | USD 7,011 million |
| C2 | Net debt at 2025-12-31 | Gross debt 7,253 less cash 57 | USD 7,196 million |
| C3 | Net debt at 2026-03-31 | Gross debt 7,763 less cash 45 | USD 7,718 million |
| C4 | Net debt at 2026-06-30 | Gross debt 7,703 less cash 70 | USD 7,633 million |
| C5 | Net debt at 2026-09-30 | Gross debt 7,645 less cash 77 | USD 7,568 million |
| C6 | Change in net debt, 2025-12-31 to 2026-09-30 | 7,568 less 7,196 | USD 372 million |
| C7 | Reconciling items, principal to carrying value at 2026-09-30 | Carrying value 7,645 less principal 7,712; equals unamortized discounts and issuance costs of -67 | USD -67 million |
| C8 | Last-twelve-months reported EBITDA at 2026-03-31 | FY2025 -180 plus current stub 97 less prior-year stub -213 (Q1 2026 less Q1 2025) | USD 130 million |
| C9 | Last-twelve-months adjusted EBITDA at 2026-03-31 | FY2025 37 plus current stub 95 less prior-year stub -179 | USD 311 million |
| C10 | Last-twelve-months cash interest paid at 2026-03-31 | FY2025 459 plus current stub 138 less prior-year stub 77 | USD 520 million |
| C11 | Last-twelve-months reported EBITDA at 2026-06-30 | FY2025 -180 plus current stub 361 less prior-year stub -292 (H1 2026 less H1 2025) | USD 473 million |
| C12 | Last-twelve-months adjusted EBITDA at 2026-06-30 | FY2025 37 plus current stub 381 less prior-year stub -85 | USD 503 million |
| C13 | Last-twelve-months cash interest paid at 2026-06-30 | FY2025 459 plus current stub 256 less prior-year stub 210 | USD 505 million |
| C14 | Last-twelve-months reported EBITDA at 2026-09-30 | FY2025 -180 plus current stub 979 less prior-year stub -163 (9M 2026 less 9M 2025) | USD 962 million |
| C15 | Last-twelve-months adjusted EBITDA at 2026-09-30 | FY2025 37 plus current stub 993 less prior-year stub 58 | USD 972 million |
| C16 | Last-twelve-months cash interest paid at 2026-09-30 | FY2025 459 plus current stub 411 less prior-year stub 341 | USD 529 million |
| C17 | Last-twelve-months revenue at 2026-09-30 | FY2025 18,610 plus 9M 2026 15,760 less 9M 2025 14,297 | USD 20,073 million |
| C18 | Last-twelve-months operating cash flow at 2026-09-30 | FY2025 -462 plus 9M 2026 129 less 9M 2025 -449 | USD 116 million |
| C19 | Last-twelve-months capital expenditure at 2026-09-30 | FY2025 -561 plus 9M 2026 -461 less 9M 2025 -421 | USD -601 million |
| C20 | Last-twelve-months free cash flow at 2026-09-30 | Operating cash flow 116 plus capital expenditure -601 | USD -485 million |
| C21 | Free cash flow, nine months 2026 | Operating cash flow 129 plus capital expenditure -461 | USD -332 million |
| C22 | Free cash flow, FY2025 | Operating cash flow -462 plus capital expenditure -561 | USD -1,023 million |
| C23 | Free cash flow, FY2024 | Operating cash flow 105 plus capital expenditure -695 | USD -590 million |
| C24 | Fourth-quarter 2025 operating cash flow, capital expenditure and cash interest paid | FY2025 less 9M 2025: -462 less -449; -561 less -421; 459 less 341 | USD -13 million; USD -140 million; USD 118 million |
| C25 | Quarterly cash interest paid, 2026 and Q3 2025 | Q2 2026: 6M 256 less Q1 138; Q3 2026: 9M 411 less 6M 256; Q3 2025: 9M 341 less 6M 210 | USD 118 million; USD 155 million; USD 131 million |
| C26 | Liquidity at 2025-12-31 | Cash 57 plus ABL Facility borrowing capacity available 3,213 | USD 3,270 million |
| C27 | Liquidity at 2026-03-31 | Cash 45 plus ABL Facility borrowing capacity available 3,096 | USD 3,141 million |
| C28 | Liquidity at 2026-06-30 | Cash 70 plus ABL Facility borrowing capacity available 3,014 | USD 3,084 million |
| C29 | Liquidity at 2026-09-30 | Cash 77 plus ABL Facility borrowing capacity available 3,169 | USD 3,246 million |
| C30 | Commitment less drawings and letters of credit at 2026-09-30, before the borrowing-base limit | Commitments 4,750 less borrowings 834 less letters of credit 57 | USD 3,859 million |
| C31 | ABL Facility borrowing capacity available at 2026-09-30 | Available borrowing base 4,060 less borrowings 834 less letters of credit 57 | USD 3,169 million |
| C32 | Steelmaking revenue, segment note less earnings release, Q3 2026 | 5,492 less 5,447 | USD 45 million |
| C33 | Principal outstanding in 2029 and 2030 maturities | 2029: 368 plus 900; 2030: 750 | USD 1,268 million; USD 750 million |
| C34 | Principal of maturities after 2030 at 2026-09-30 | 325 plus 850 plus 1,425 plus 900 plus 1,125 plus 235 | USD 4,860 million |
| C35 | Fourth-quarter 2025 SG&A, annual less nine months, against the reported quarter | FY2025 -543 less 9M 2025 -400 = -143; reported quarter -144 | USD 1 million difference |
| C36 | Issuer-adjusted EBITDA less reported EBITDA, FY2025 | 37 less -180 | USD 217 million |
| C37 | Issuer-adjusted EBITDA less reported EBITDA, last twelve months to 2026-09-30 | 972 less 962 | USD 10 million |
| C38 | Increase in interest expense, net, FY2025 against FY2024 | 594 less 370 | USD 224 million |
| C39 | Net ABL Facility borrowing in nine months 2026 | Borrowings (repayments) under ABL Facility, net, nine months 2026 | USD 383 million |

## Gaps

| Gap | Severity | What is missing or unreconciled | What it restricts | Action that would close it | Source |
| --- | --- | --- | --- | --- | --- |
| G1 | Medium | ABL Facility borrowing capacity and therefore liquidity at 2024-12-31 are not stated; the 2025 annual report gives the table for 2025-12-31 only | FY2024 liquidity and the liquidity trend | Supply the 2024 annual report or its liquidity table | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 140 |
| G2 | Medium | No fourth-quarter 2025 cash flow statement or interest-paid figure is printed; the quarter exists only as the year less nine months | Quarter-level cash flow in Q4 2025 | Supply the fourth-quarter 2025 release; until then the constructed figures are labelled calculated | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 5 |
| G3 | Low | Lines the filings print as a dash are written as not supplied, never as zero, including restructuring, impairment, extinguishment and financing lines in several columns | No total is affected; every printed total ties | None needed; the dash cells are listed in the statements | 10-Q_2026-09-30_clf-20260930.htm.jsonl, page 4 |
| G4 | Medium | Interest income is not separately stated (interest expense is printed net), EBIT is not printed, interim stock-based compensation expense is not stated, and the split of actual capital spending between maintenance and growth is not given (the annual report says only that the 2026 plan is primarily sustaining) | Cash-flow quality analysis beyond total capital expenditure | Ask the issuer for the capital spending split and the interim stock compensation expense | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 91 |
| G5 | Medium | Steelmaking revenue in the third-quarter release (5,447) differs from the segment note (5,492) by 45 and the cause is not stated; Q3 2025 differs by 24 | Segment margins quoted from releases | Ask the issuer which perimeter each figure covers | EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 2; 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 11–12 |
| G6 | Medium | The leverage target is stated as debt to EBITDA in July and as net debt to EBITDA in October, with different dates | Any headroom to the target | Use the latest wording and ask for the definition | EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, page 2; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 1 |
| G7 | Low | Fourth-quarter 2025 selling and administrative expense is -144 as reported against -143 for the year less nine months; the filings do not say why, and the year's acquisition-related cost line of 1 is not printed in the interim statements | None beyond a 1 rounding-size difference | None; the reported quarter is shown | EX-99.1_2026-04-20_clf-202603318xkex991.htm.jsonl, page 7 |
| G8 | Medium | The second- and third-quarter releases print stray tokens in the asset impairment row of the statement of operations | Use of release statements for impairment | Use the quarterly reports, which print clean figures | EX-99.1_2026-07-23_clf-202606308xkex991.htm.jsonl, page 7; EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 7 |
| G9 | Medium | Finance lease liabilities are stated at 2025-12-31 and 2024-12-31 only; later dates are not stated | Lease-adjusted leverage after 2025 | Supply the lease disclosures of later quarters | 10-K_2025-12-31_clf-20251231.htm.jsonl, page 152 |
| G10 | Medium | Only summarized obligated-group data are given; the guarantor schedule, indentures and ABL credit agreement were not supplied, and the ABL margin and floor are not stated (the reference rate is SOFR) | Guarantor-level analysis and the interest sensitivity of the ABL Facility | Supply the guarantor schedule, indentures and credit agreement | 10-Q_2026-09-30_clf-20260930.htm.jsonl, pages 48–49 |
| G11 | Medium | The October release expects a major fourth-quarter debt reduction from free cash flow and property sale proceeds but states no amount, date or completed transaction | Pro forma net debt after 2026-09-30 | Supply the transaction details when announced | EX-99.1_2026-10-19_clf-202609308xkex991.htm.jsonl, page 1 |
| G12 | Low | Interim multiples at March and June 2026 use trough last-twelve-months EBITDA and are not meaningful as levels | Reading the March and June 2026 multiples | Read them as trajectory only | Calculations C8 and C11 |

## Next module

The orchestrator selects the next module.
