---
module_id: CP-1
issuer_id: ati-1018963
analysis_date: 2026-11-18
---

# Ati Inc financial foundation

## Request

Financial foundation for Ati Inc (ati-1018963), as of 2026-11-18, on the credit snapshot pathway. Scope: statements, net debt, leverage, cash interest cover, liquidity and the debt stack in USD millions for FY2024, FY2025 and the periods to 2026-09-27.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-29_ati_ati-20241229.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2024-12-29, audited | 2025-02-21 | 5129255a626b98f7addfdf609eb74e55b220dc6812a97d8d2e664b25268101e0 | FY2024 as first reported; FY2024 interest paid, liquidity and leverage reconciliation |
| 10-K_2025-12-28_ati_ati-20251228.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2025-12-28, audited | 2026-02-20 | 5d347abcfa7f23bf17cce990198026c6f76789751d8e82391f3d73b8889e6812 | FY2025 and FY2024 statements, debt note, EBITDA reconciliation, maturity schedule, funding float and subsequent event |
| 10-Q_2026-03-29_ati_ati-20260329.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-29, unaudited | 2026-04-30 | 5ffcd8d14437d458cf908cae774a27a1093a6470f770f7e1c7402d0a0d5fe7dc | Read for the interim liquidity statement; no figure is tabulated from it |
| 10-Q_2026-06-28_ati_ati-20260628.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-28, unaudited | 2026-08-06 | 10832f623acc010f2bdcdc370490b828728a0a944d5d811800fe5849797a3b1e | Read for the 2033 notes issue and the 2027 notes redemption notice; no figure is tabulated from it |
| 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-27, unaudited | 2026-10-29 | da8c601d00131a3f1ce69a17e0738bd7d88a2eb1e7b2c683f8a6d1f946a3cf87 | Latest balance sheet, income statement, cash flow statement, debt note, trailing EBITDA reconciliation, segments and funding float |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | d7d81635bb5ea1345070fe027d55bf7c57d17bd59c631890fdbacbca5f9246d0 | Source inventory, authority tiers, gaps and the content map for this module |

## Findings

### Bottom line

Ati Inc has deleveraged to 1.92x total debt and 1.46x net debt on reported EBITDA at 2026-09-27 and holds USD 1,012.3 million of liquidity, so creditors face low refinancing risk, with shareholder returns and inventory growth the main drains on that headroom.
Basis: calculation C29; calculation C30; calculation C35; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2

Reported EBITDA rose from USD 745.8 million in FY2024 to USD 789.0 million in FY2025 and USD 968.5 million over the last twelve months. The 2033 notes of USD 450.0 million refinanced the 2027 notes, so the next maturity is USD 325.0 million in FY2029. Interest cover was 6.70x in FY2025 and cannot be calculated for the last twelve months, because cash interest is printed only in annual reports.
Basis: calculation C5; calculation C27; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 15; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 47

### Key findings

Total debt to reported EBITDA fell from 2.54x at FY2024 to 2.22x at FY2025 and 1.92x on the last twelve months to 2026-09-27, but net debt to reported EBITDA moved from 1.57x to 1.69x and then to 1.46x. In FY2025 the fall in gross debt was paid for with cash: the company repaid USD 150.0 million of debentures and repurchased USD 470.0 million of stock, so cash fell by USD 304.5 million and net debt rose from USD 1,174.1 million to USD 1,332.7 million. Since then the improvement is earnings-led, because net debt rose again to USD 1,415.2 million while reported EBITDA grew to USD 968.5 million.
Basis: calculation C17; calculation C23; calculation C29; calculation C18; calculation C24; calculation C30; calculation C1; calculation C2; calculation C3; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101

Reported EBITDA covered cash interest paid 5.68x in FY2024 and 6.70x in FY2025, on interest and commitment fees paid of USD 131.4 million and USD 117.8 million. The quarterly reports do not print cash interest, so cover for the last twelve months is not established. Net interest expense was USD 70.2 million in 9M 2026 against USD 74.5 million a year earlier, which suggests cover has not weakened, but that is an analyst inference from expense and not a measured cash figure.
Basis: calculation C21; calculation C27; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3

Cash from operating activities was USD 414.6 million in 9M 2026 against USD 298.5 million in 9M 2025, but USD 255.1 million went into inventories, against USD 57.5 million a year earlier, as the company built stock seasonally and for higher operating levels. After capital expenditures of USD 216.6 million, free cash flow was USD 198.0 million in 9M 2026 and USD 421.1 million over the last twelve months, which is 43.48% of reported EBITDA. Shareholder returns of USD 277.2 million in 9M 2026, made up of USD 195.0 million of buybacks and USD 82.2 million of shares withheld for tax, exceeded free cash flow by USD 79.2 million, which explains most of the rise in net debt.
Basis: calculation C13; calculation C14; calculation C57; calculation C15; calculation C16; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 45

Liquidity at 2026-09-27 was USD 1,012.3 million: USD 442.3 million of cash, of which USD 106.1 million is held by the 60%-owned Chinese joint venture, and about USD 570 million undrawn under the asset-based revolving facility after USD 29.3 million of letters of credit. Liquidity was USD 985.7 million at FY2025 and USD 1,246.2 million at FY2024. The facility carries a fixed charge coverage covenant of at least 1.00x, tested only if availability falls below the greater of 10% of the facility and USD 60.0 million, and requires minimum liquidity in the 90 days before the 2029, 2030 and 2031 notes mature; the issuer reports compliance with the coverage ratio, but headroom is not calculable because the covenant definitions and the liquidity level are not supplied.
Basis: calculation C35; calculation C34; calculation C33; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 10; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 15–16; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 47

Debt at 2026-09-27 is USD 1,857.5 million at carrying value and USD 1,872.7 million at principal: four series of senior notes totalling USD 1,550.0 million, a USD 200.0 million secured term loan under the asset-based facility, USD 107.1 million of finance leases and other, and USD 15.6 million drawn on foreign credit facilities. The USD 450.0 million 2033 notes issued on 2026-06-03 funded the USD 350.0 million redemption of the 2027 notes on 2026-07-08, so the next maturity is the USD 325.0 million 2029 senior notes in the fourth quarter of FY2029, and the term loan falls due in June 2030. The only maturity ladder printed is at FY2025, where FY2030 is the largest year at USD 633.4 million.
Basis: calculation C40; calculation C42; calculation C41; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 14–16; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 47; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 102

Funding that sits outside reported debt is growing. Supplier financing in accounts payable rose from USD 52.8 million at 2025-12-28 to USD 83.0 million at 2026-09-27; customers' receivable-sale programmes took USD 377.5 million of invoices in 9M 2026 against USD 271.1 million a year earlier; USD 120 million of the USD 125.0 million receivables facility is used; and contract liabilities, which are amounts customers have been billed ahead of delivery, total USD 273.2 million against USD 237.7 million at the start of the year. If banks or customers withdrew these programmes, working capital would absorb cash and net leverage would be higher than reported.
Basis: calculation C62; calculation C63; calculation C64; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 8; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 11–13

The issuer's own leverage ratios, 1.74x total debt and 1.33x net debt at 2026-09-27, are lower than the 1.92x and 1.46x above because the issuer divides by trailing Adjusted EBITDA of USD 1,075.9 million, an effect that outweighs its use of higher principal debt. Adjusted EBITDA exceeds reported EBITDA by USD 107.4 million over the last twelve months, of which restructuring and other charges are USD 87.3 million, against USD 22.1 million in FY2024 and USD 48.8 million in FY2025. Because these charges recur and are growing, reported EBITDA is the safer denominator.
Basis: calculation C60; calculation C72; calculation C73; calculation C61; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 48–50; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 57; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63

No financing, acquisition, disposal or dividend after the 2026-09-27 balance sheet is stated. The one subsequent event in the annual report is the board's authorisation on 2026-02-18 of up to USD 500.0 million of further share repurchases; USD 425 million of authorisation remained at 2026-09-27, so capacity for shareholder returns that compete with creditors for cash remains.
Basis: 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 142; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 47–48

### Contrary evidence and what would change the view

The strongest case against the benign reading is that it rests on a sharp earnings step-up: the issuer's Adjusted EBITDA margin was 23.0% in Q3 2026 against 20.0% in Q3 2025, and the AA&S segment's EBITDA of USD 181.3 million in Q3 2026 was about double the USD 90.4 million of a year earlier, so the trailing denominator contains an unusually strong quarter. Working capital absorbed USD 255.1 million into inventories in 9M 2026, and shareholder returns exceeded free cash flow in that period. The view would weaken if net debt keeps rising while reported EBITDA stalls, if inventory build is not matched by shipments, or if the USD 425 million repurchase authorisation is funded from the revolving facility. It would strengthen if cash interest for the nine months is disclosed and confirms cover near the annual level, or if shareholder returns fall back within free cash flow.
Basis: 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 39; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 48–50; calculation C16

### Limitations

- Cash interest paid is not printed in the quarterly reports, so interest cover for the last twelve months is not established.
Basis: 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4

- The maturity ladder is drawn at 2025-12-28 and is stale for 2026-09-27: it still includes the 2027 notes and omits the 2033 notes.
Basis: 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 102; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 15

- No executed credit agreement or indenture is supplied, so the rank and security of the 2029 and 2031 senior notes, guarantor scope and the covenant definitions are not established, and the debt stack lists only facilities whose rank the filings state.
Basis: 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 14–16

- The last twelve months figures combine audited annual figures with unaudited interim figures, and undrawn revolving capacity is the issuer's approximate figure, not a borrowing base calculation.
Basis: 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 47; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-29 |
| FY2025 | 2024-12-30 | 2025-12-28 |
| Q3 2025 | 2025-06-30 | 2025-09-28 |
| Q3 2026 | 2026-06-29 | 2026-09-27 |
| 9M 2025 | 2024-12-30 | 2025-09-28 |
| 9M 2026 | 2025-12-29 | 2026-09-27 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-29_ati_ati-20241229.htm.jsonl | Annual report on Form 10-K, audited | FY2024 with FY2023 and FY2022 comparatives | USD | millions | ATI Inc. and subsidiaries, consolidated | US GAAP | Tier 1 | FY2024 statements as first reported; FY2024 interest paid and liquidity | Superseded in presentation by the FY2025 report comparatives; key lines agree |
| 10-K_2025-12-28_ati_ati-20251228.htm.jsonl | Annual report on Form 10-K, audited | FY2025 with FY2024 and FY2023 comparatives | USD | millions | ATI Inc. and subsidiaries, consolidated | US GAAP | Tier 1 | FY2025 and FY2024 statements, debt note, EBITDA reconciliation, maturity schedule, cash interest | Other current liabilities printed as one line |
| 10-Q_2026-03-29_ati_ati-20260329.htm.jsonl | Quarterly report on Form 10-Q, unaudited | Quarter ended 2026-03-29 | USD | millions | ATI Inc. and subsidiaries, consolidated | US GAAP | Tier 2b | Read for the interim liquidity statement and trailing leverage only | Not tabulated; no auditor review report in the file |
| 10-Q_2026-06-28_ati_ati-20260628.htm.jsonl | Quarterly report on Form 10-Q, unaudited | Quarter and half year ended 2026-06-28 | USD | millions | ATI Inc. and subsidiaries, consolidated | US GAAP | Tier 2b | Read for the 2033 notes issue and the 2027 notes redemption notice | Not tabulated; no auditor review report in the file |
| 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl | Quarterly report on Form 10-Q, unaudited | Quarter and nine months ended 2026-09-27 with 2025 comparatives | USD | millions | ATI Inc. and subsidiaries, consolidated | US GAAP | Tier 2b | Latest balance sheet, income statement, cash flow, debt note, leverage reconciliation, segments | Unaudited; cash interest paid not stated; reclassifies part of other current liabilities |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| ATI Inc. | Registrant and parent; issuer of the senior notes; the ABL borrowers are not named in the sources read | Sunday closest to 31 December: 2023-12-31, 2024-12-29, 2025-12-28 | USD | millions | ATI Inc. and subsidiaries, including the 60%-owned STAL joint venture | US GAAP | FY2022 to FY2025; Q3 2025 and Q3 2026; 9M 2025 and 9M 2026; balance sheets at 2024-12-29, 2025-12-28 and 2026-09-27 |
| Shanghai STAL Precision Stainless Steel Company Limited (STAL) | 60%-owned consolidated joint venture in the AA&S segment; 40% held by China Baowu Steel Group | As ATI, reported on a one-month lag | USD | millions | Consolidated into ATI Inc. | US GAAP | Cash held 97.6 at 2025-12-28 and 106.1 at 2026-09-27 |
| ATI Specialty Materials, LLC and ATI Securitization LLC | Seller and consolidated special purpose entity under the receivables facility of up to 125.0; ATI guarantees performance | As ATI | USD | millions | Consolidated; the receivables sold are derecognised | US GAAP | From the facility date of 2025-09-19 |
| Allegheny Ludlum, LLC | Issuer of the 6.95% debentures, fully and unconditionally guaranteed by ATI; repaid on 2025-12-15 | As ATI | USD | millions | Consolidated | US GAAP | Debentures of 150.0 in the 2024-12-29 debt table |

Subsequent events and financing events inside the periods are listed with their dates in the subsequent events table; none is blended into a period figure.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Accrued liabilities and other current liabilities combined | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 | Presentation | 273.0 and 16.3 on two lines | 289.3 | The annual report prints one line for other current liabilities; the quarterly report reclassifies part of it into accrued liabilities, so the two lines are summed to compare with the annual line | 9M 2026 |
| Currency and unit | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 74 | None | USD millions | USD millions | Every statement is already printed in US dollars and millions; no conversion and no foreign exchange rate is used | All periods |
| Debt basis | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14 | Basis choice | Issuer total debt 1,872.7 (principal including issuance costs) | Total Debt 1,857.5 (carrying value) | Debt is the balance-sheet carrying value; the issuer's principal-based figure is kept in the debt reconciliation and the definition conflict register | 2026-09-27; the same choice at FY2024 and FY2025 |
| Last twelve months construction | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50 | Derived period | FY2025, 9M 2026 and 9M 2025 separately | Last twelve months to 2026-09-27 | Full year plus current stub less prior-year stub, each component issuer-stated; see the constructed period register | 2026-09-27 |
| Signs | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–76 | Presentation | Brackets for expenses and outflows | Minus signs | Credits and gains in expense lines and outflows in cash flow lines are written negative, as printed; interest paid is a positive amount | All periods |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Sales | 4,362.1 | 4,587.4 | 1,125.5 | 1,423.7 | 3,410.3 | 3,836.3 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Cost of sales | 3,463.9 | 3,580.4 | 870.2 | 1,043.5 | 2,676.7 | 2,883.4 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Gross profit | 898.2 | 1,007.0 | 255.3 | 380.2 | 733.6 | 952.9 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Selling and administrative expenses | 342.3 | 365.1 | 94.6 | 107.7 | 262.4 | 295.5 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Restructuring charges (credits) | 4.1 | -1.9 | -0.4 | 0.9 | -1.7 | 11.8 | USD millions | Reported; a credit is negative | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| (Gain) loss on asset sales and sales of businesses, net | -57.1 | 2.9 | -1.3 | -0.3 | 2.6 | -10.1 | USD millions | Reported; a gain is negative | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Operating income | 608.9 | 640.9 | 162.4 | 271.9 | 470.3 | 655.7 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Nonoperating retirement benefit expense | -29.0 | -34.6 | -3.9 | -4.2 | -11.9 | -12.8 | USD millions | Reported; expense printed in brackets, so negative | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Interest expense, net | -108.2 | -98.6 | -26.1 | -22.6 | -74.5 | -70.2 | USD millions | Reported; expense printed in brackets, so negative | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Debt extinguishment charge | Not supplied: line not printed in this period | Not supplied: line not printed in this period | Not supplied: the statement prints a dash | -1.2 | Not supplied: the statement prints a dash | -1.2 | USD millions | Reported where printed; a dash is not read as zero | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Other income, net | 14.4 | 14.6 | 12.2 | 0.9 | 15.5 | 2.8 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Income before income taxes | 486.1 | 522.3 | 144.6 | 244.8 | 399.4 | 574.3 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Income tax provision | 103.4 | 103.7 | 31.0 | 51.5 | 81.3 | 106.2 | USD millions | Reported; expense positive | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Net income | 382.7 | 418.6 | 113.6 | 193.3 | 318.1 | 468.1 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Net income attributable to noncontrolling interests | 14.9 | 14.3 | 3.6 | 3.5 | 10.4 | 9.1 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Net income attributable to ATI | 367.8 | 404.3 | 110.0 | 189.8 | 307.7 | 459.0 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–75; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–3 |
| Depreciation and amortization | 151.5 | 168.1 | 42.6 | 44.9 | 125.0 | 133.9 | USD millions | Reported in the EBITDA reconciliation and cash flow statement | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50 |
| Interest expense (gross, before interest income and capitalised interest) | 124.2 | 110.7 | Not supplied: the quarterly report states net interest only | Not supplied: the quarterly report states net interest only | Not supplied: the quarterly report states net interest only | Not supplied: the quarterly report states net interest only | USD millions | Reported in the debt note; annual only | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 |
| Interest income | 16.0 | 12.1 | Not supplied: the quarterly report states net interest only | Not supplied: the quarterly report states net interest only | Not supplied: the quarterly report states net interest only | Not supplied: the quarterly report states net interest only | USD millions | Reported in the debt note; annual only | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 |
| EBITDA (Reported) | 745.8 | 789.0 | 213.3 | 312.3 | 598.9 | 778.4 | USD millions | Issuer-stated EBITDA: net income plus depreciation and amortization, interest expense and income tax provision; before special items | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50 |
| EBITDA (Adjusted) | 729.1 | 859.3 | 225.1 | 327.9 | 627.4 | 844.0 | USD millions | Issuer-defined Adjusted EBITDA: EBITDA plus restructuring and other charges, pension settlement or remeasurement loss, loss (gain) on sales of businesses and, in 2026, a debt extinguishment charge; see the bridge table | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50 |

### Segment schedule

| Line item | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| High Performance Materials & Components: sales to external customers | 2,278.5 | 2,441.7 | 602.9 | 721.4 | 1,795.8 | 1,972.8 | USD millions | Reported; corporate expenses and closed operations are not an operating segment; segment EBITDA less corporate expenses and closed operations equals Adjusted EBITDA in every period | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 133; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 22–23 |
| Advanced Alloys & Solutions: sales to external customers | 2,083.6 | 2,145.7 | 522.6 | 702.3 | 1,614.5 | 1,863.5 | USD millions | Reported; corporate expenses and closed operations are not an operating segment; segment EBITDA less corporate expenses and closed operations equals Adjusted EBITDA in every period | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 133; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 22–23 |
| Total consolidated sales | 4,362.1 | 4,587.4 | 1,125.5 | 1,423.7 | 3,410.3 | 3,836.3 | USD millions | Reported; corporate expenses and closed operations are not an operating segment; segment EBITDA less corporate expenses and closed operations equals Adjusted EBITDA in every period | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 133; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 22–23 |
| High Performance Materials & Components: segment EBITDA | 461.4 | 575.8 | 145.8 | 167.3 | 420.8 | 473.7 | USD millions | Reported; corporate expenses and closed operations are not an operating segment; segment EBITDA less corporate expenses and closed operations equals Adjusted EBITDA in every period | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 133; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 22–23 |
| Advanced Alloys & Solutions: segment EBITDA | 320.9 | 349.0 | 90.4 | 181.3 | 250.5 | 425.9 | USD millions | Reported; corporate expenses and closed operations are not an operating segment; segment EBITDA less corporate expenses and closed operations equals Adjusted EBITDA in every period | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 133; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 22–23 |
| Corporate expenses | -64.0 | -67.8 | -15.6 | -18.8 | -48.4 | -50.7 | USD millions | Reported; corporate expenses and closed operations are not an operating segment; segment EBITDA less corporate expenses and closed operations equals Adjusted EBITDA in every period | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 133; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 22–23 |
| Closed operations and other income (expense) | 10.8 | 2.3 | 4.5 | -1.9 | 4.5 | -4.9 | USD millions | Reported; corporate expenses and closed operations are not an operating segment; segment EBITDA less corporate expenses and closed operations equals Adjusted EBITDA in every period | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 133; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 22–23 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 382.7 | 418.6 | 318.1 | 468.1 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Depreciation and amortization | 151.5 | 168.1 | 125.0 | 133.9 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Share-based compensation | 34.1 | 29.0 | 22.3 | 23.3 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Deferred taxes | 86.4 | 59.1 | 36.5 | 35.4 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Change in accounts receivable | -85.0 | 27.1 | 1.7 | -46.6 | USD millions | Reported; working capital outflow negative | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Change in inventories | -118.5 | -52.8 | -57.5 | -255.1 | USD millions | Reported; working capital outflow negative | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Change in accounts payable | 87.6 | -43.4 | -94.4 | 59.9 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | 407.2 | 614.3 | 298.5 | 414.6 | USD millions | Reported; interest paid is classified in operating activities under US GAAP; receivable sales proceeds are inside operating cash flow | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Purchases of property, plant and equipment | -239.1 | -280.6 | -187.9 | -216.6 | USD millions | Reported; total capital expenditures, maintenance and growth split not supplied | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Proceeds from disposal of property, plant and equipment | 27.6 | 11.1 | 10.9 | 16.7 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Proceeds from sales of businesses, net of transaction costs | 48.0 | 26.8 | 21.2 | 1.6 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Other investing activities | 3.9 | 8.2 | 6.8 | 2.5 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | -159.6 | -234.5 | -149.0 | -195.8 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Borrowings on long-term debt (2026: proceeds from issuance of senior notes) | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 450.0 | USD millions | Reported where printed; a dash is not read as zero | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Payments on long-term debt and finance leases | -29.6 | -182.6 | -24.2 | -375.7 | USD millions | Reported; 9M 2026 includes redemption of the 350.0 senior notes due 2027 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Net borrowings (payments) under credit facilities | -4.9 | Not supplied: the statement prints a dash | 11.3 | 15.3 | USD millions | Reported where printed; a dash is not read as zero | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Debt issuance costs | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -6.9 | USD millions | Reported where printed; a dash is not read as zero | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Receipt of convertible note capped call | 76.1 | Not supplied: the statement prints a dash | Not supplied: line not printed in this period | Not supplied: line not printed in this period | USD millions | Reported where printed; a dash is not read as zero | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Purchase of treasury stock | -260.0 | -470.0 | -470.0 | -195.0 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Dividends paid to noncontrolling interests | -16.0 | -13.2 | Not supplied: line not printed in this period | Not supplied: line not printed in this period | USD millions | Reported where printed | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Shares repurchased for income tax withholding on share-based compensation | -26.0 | -34.1 | -29.7 | -82.2 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | -260.4 | -699.9 | -512.6 | -194.5 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| FX Effect on Cash | -7.6 | 15.6 | 14.1 | 1.3 | USD millions | Reported effect of exchange rate changes on cash | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Less: cash held for sale | -2.3 | Not supplied: the statement prints a dash | Not supplied: line not printed in this period | Not supplied: line not printed in this period | USD millions | Reported where printed | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Net Cash Change | Not supplied: the filing's change of -22.7 includes cash held for sale of -2.3 outside the three activity totals and the exchange effect, which add to -20.4 | -304.5 | -349.0 | 25.6 | USD millions | Reported increase (decrease) in cash and cash equivalents; FY2024 withheld because the printed total does not equal the activity totals plus the exchange effect | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Opening Cash | 743.9 | 721.2 | 721.2 | 416.7 | USD millions | Reported cash and cash equivalents at beginning of period | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Closing Cash | 721.2 | 416.7 | 372.2 | 442.3 | USD millions | Reported cash and cash equivalents at end of period | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 |
| Cash Interest Paid | 131.4 | 117.8 | Not supplied: cash interest paid is printed in the annual report only | Not supplied: cash interest paid is printed in the annual report only | USD millions | Reported interest and commitment fees paid, a positive amount; the quarterly reports do not state it | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 |
| Income taxes paid, net of refunds | 15.0 | 76.7 | Not supplied: cash taxes paid are printed in the annual report only | Not supplied: cash taxes paid are printed in the annual report only | USD millions | Reported in the income tax note; annual only | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 131 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 721.2 | 416.7 | 442.3 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Accounts receivable, net | 709.2 | 686.1 | 733.4 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Short-term contract assets | 75.6 | 72.8 | 112.8 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Inventories, net | 1,353.0 | 1,403.2 | 1,657.2 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Prepaid expenses and other current assets | 86.0 | 101.2 | 101.5 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Total current assets | 2,945.0 | 2,680.0 | 3,047.2 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Property, plant and equipment, net | 1,776.9 | 1,940.6 | 2,045.0 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Goodwill | 227.2 | 225.2 | 225.2 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Other assets | 281.5 | 253.8 | 249.4 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Total Assets | 5,230.6 | 5,099.6 | 5,566.8 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Accounts payable | 609.1 | 568.2 | 632.1 | USD millions | Reported; includes supplier financing balances | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Short-term contract liabilities | 169.4 | 146.4 | 127.4 | USD millions | Reported; customer advances and deferred revenue | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Short-term debt and current portion of long-term debt | 180.4 | 31.1 | 49.7 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Accrued liabilities and other current liabilities | 249.6 | 260.6 | 289.3 | USD millions | FY2024 and FY2025 as printed in the annual report; 9M 2026 is accrued liabilities 273.0 plus other current liabilities 16.3, which the quarterly report prints on two lines after a reclassification | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Total current liabilities | 1,208.5 | 1,006.3 | 1,098.5 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Long-term debt | 1,714.9 | 1,718.3 | 1,807.8 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Accrued postretirement benefits | 164.3 | 158.5 | 147.8 | USD millions | Reported; outside the debt figure | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Pension liabilities | 37.2 | 41.4 | 40.1 | USD millions | Reported; outside the debt figure | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Other long-term liabilities | 150.5 | 258.4 | 340.7 | USD millions | Reported; includes long-term contract liabilities of 145.8 at 2026-09-27 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Total Liabilities | 3,275.4 | 3,182.9 | 3,434.9 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Total ATI stockholders' equity | 1,850.4 | 1,804.5 | 2,005.2 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Noncontrolling interests | 104.8 | 112.2 | 126.7 | USD millions | Reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Total Equity | 1,955.2 | 1,916.7 | 2,131.9 | USD millions | Reported; includes noncontrolling interests; no temporary equity is reported | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Total Debt | 1,895.3 | 1,749.4 | 1,857.5 | USD millions | Carrying value, current plus long-term, net of issuance costs; includes finance leases and other and foreign credit facilities; excludes operating lease liabilities | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14 |
| Cash & Equivalents | 721.2 | 416.7 | 442.3 | USD millions | Reported cash and cash equivalents | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ATI Inc. 7.25% Senior Notes due 2030 | Senior notes | Not supplied: carrying value by instrument is not disclosed; one aggregate issuance cost adjustment is | 425.0 | Not applicable | Not applicable | Unsecured | Unsubordinated, equal with senior unsecured debt | USD | 425.0 | Not applicable | 7.25% | Fixed | Not applicable | Not applicable | Not applicable | 2030-08-15 | 0 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 102 |
| ATI Inc. 5.875% Senior Notes due 2033 | Senior notes | Not supplied: carrying value by instrument is not disclosed; one aggregate issuance cost adjustment is | 450.0 | Not applicable | Not applicable | Unsecured | Unsubordinated, equal with senior unsecured debt | USD | 450.0 | Not applicable | 5.875% | Fixed | Not applicable | Not applicable | Not applicable | 2033-06-15 | 0 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 14–15 |
| ATI Inc. 5.125% Senior Notes due 2031 | Senior notes | Not supplied: carrying value by instrument is not disclosed; one aggregate issuance cost adjustment is | 350.0 | Not applicable | Not applicable | Not supplied: security is not stated in the sources read | Not supplied: ranking is not stated in the sources read | USD | 350.0 | Not applicable | 5.125% | Not stated | Not applicable | Not applicable | Not applicable | Not supplied: the sources state the year 2031 only | 0 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14 |
| ATI Inc. 4.875% Senior Notes due 2029 | Senior notes | Not supplied: carrying value by instrument is not disclosed; one aggregate issuance cost adjustment is | 325.0 | Not applicable | Not applicable | Not supplied: security is not stated in the sources read | Not supplied: ranking is not stated in the sources read | USD | 325.0 | Not applicable | 4.875% | Not stated | Not applicable | Not applicable | Not applicable | Fourth quarter of fiscal year 2029 | 0 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 47 |
| ABL Term Loan | Term loan | Not supplied: carrying value by instrument is not disclosed; one aggregate issuance cost adjustment is | 200.0 | 200.0 | Not applicable | Secured: the ABL facility is collateralized by accounts receivable and inventory | Senior secured on the ABL collateral (analyst judgement from the stated security; rank itself not stated) | USD | 200.0 | Not applicable | 2.0% above adjusted SOFR | Floating | SOFR | 200 | Not applicable | June 2030 | 0 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 14–16 |
| ABL revolving credit facility | Revolving credit facility | Not supplied: carrying value by instrument is not disclosed; one aggregate issuance cost adjustment is | 0.0 | 0.0 | 600.0 | Secured: the ABL facility is collateralized by accounts receivable and inventory | Senior secured on the ABL collateral (analyst judgement from the stated security; rank itself not stated) | USD | 0.0 | Not applicable | 1.25% to 1.75% above SOFR, by availability; letters of credit of 29.3 utilised; fixed charge coverage of not less than 1.00:1.00 tested only if availability is below the greater of 10% of the facility and 60.0, and minimum liquidity required in the 90 days before the 2029, 2030 and 2031 notes mature | Floating | SOFR | 125 to 175 | Not applicable | June 2030 | Not applicable | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 15–16 |
| Foreign credit facilities, primarily in China | Bank facilities | Not supplied: carrying value by instrument is not disclosed; one aggregate issuance cost adjustment is | 15.6 | 15.6 | 76.4 | Not supplied: security is not stated in the sources read | Not supplied: ranking is not stated in the sources read | Not supplied: the filing states dollar equivalents at 2026-09-27 rates and not the denomination currency | 15.6 | Not supplied: the filing states no rate | Not supplied: not stated | Not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 16 |
| Finance leases and other | Finance leases and other | Not supplied: carrying value by instrument is not disclosed; one aggregate issuance cost adjustment is | 107.1 | Not applicable | Not applicable | Not supplied: security is not stated in the sources read | Not supplied: ranking is not stated in the sources read | USD | 107.1 | Not applicable | Not supplied: the weighted average discount rate of finance leases was 6.3% at 2025-12-28 | Not stated | Not applicable | Not applicable | Not applicable | Not supplied: the lease schedule is printed at 2025-12-28 only | Not supplied: finance lease principal by year is printed at 2025-12-28 only | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 106–107 |
| Financing cost adjustment | Aggregate debt issuance costs | -15.2 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -15.2 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-29 | 1,895.3 | 721.2 | 1,174.1 | US$m | Reported carrying value: short-term debt 180.4 plus long-term debt 1,714.9, including finance leases and other of 109.5 and the Allegheny Ludlum 6.95% debentures of 150.0 due 2025-12-15; principal 1,909.5 including issuance costs of 14.2; audited |
| FY2025 / 2025-12-28 | 1,749.4 | 416.7 | 1,332.7 | US$m | Reported carrying value: short-term debt 31.1 plus long-term debt 1,718.3, including finance leases and other of 111.0; principal 1,761.0 including issuance costs of 11.6; the 150.0 debentures were repaid on 2025-12-15; audited |
| 2026-09-27 | 1,857.5 | 442.3 | 1,415.2 | US$m | Reported carrying value: short-term debt 49.7 plus long-term debt 1,807.8, including finance leases and other of 107.1 and foreign credit facilities of 15.6; principal 1,872.7 including issuance costs of 15.2; cash includes 106.1 held by the 60%-owned STAL joint venture; unaudited |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-28 | 1,761.0 | -11.6 | 1,749.4 | US$m | Ladder drawn at 2025-12-28, the latest balance sheet for which the filings print a maturity schedule; reconciling item is debt issuance costs of 11.6; no debt is left out of the ladder; at 2026-09-27 principal is 1,872.7 and carrying value 1,857.5, with issuance costs of 15.2 |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 31.6 | US$m | Scheduled principal payment stated for the year at 2025-12-28; no senior note falls due in the year |
| FY2027 | 378.6 | US$m | Scheduled principal payment stated for the year at 2025-12-28; includes the 350.0 senior notes due 2027 redeemed on 2026-07-08, so this row is stale for 2026-09-27 |
| FY2028 | 23.6 | US$m | Scheduled principal payment stated for the year at 2025-12-28 |
| FY2029 | 343.7 | US$m | Scheduled principal payment stated for the year at 2025-12-28; includes the 325.0 senior notes due in the fourth quarter of FY2029 |
| FY2030 | 633.4 | US$m | Scheduled principal payment stated for the year at 2025-12-28; consistent with the 425.0 senior notes due 2030 and the 200.0 ABL term loan due June 2030 plus other scheduled payments (analyst reading of the total) |
| FY2031 and later | 350.1 | US$m | Contractual principal of 1,761.0 less the five stated years; the 350.0 senior notes due 2031 and a residual of 0.1 (analyst reading); the 450.0 senior notes due 2033 issued on 2026-06-03 are not in this ladder |

The ladder is drawn at 2025-12-28 and still shows the 2027 notes that were redeemed on 2026-07-08, with the 2033 notes absent.

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-29 | 2.54 | 1.57 | x | Carrying-value debt over issuer-stated EBITDA (Reported) of 745.8 for FY2024; audited; Adjusted EBITDA ratios are in the calculation register |
| FY2025 / 2025-12-28 | 2.22 | 1.69 | x | Carrying-value debt over issuer-stated EBITDA (Reported) of 789.0 for FY2025; audited; net leverage rose because cash fell by 304.5 after buybacks of 470.0 and the 150.0 debenture repayment |
| 2026-09-27 | 1.92 | 1.46 | x | Carrying-value debt over last-twelve-months EBITDA (Reported) of 968.5, constructed as FY2025 plus 9M 2026 less 9M 2025; unaudited interim inputs |

The 2026-09-27 ratios use a last-twelve-months EBITDA built from unaudited interim inputs, and the issuer's own ratios on principal and Adjusted EBITDA are lower.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-29 | 5.68 | x | EBITDA (Reported) 745.8 over interest and commitment fees paid of 131.4 for FY2024; audited; includes commitment fees and is not net interest expense |
| FY2025 / 2025-12-28 | 6.70 | x | EBITDA (Reported) 789.0 over interest and commitment fees paid of 117.8 for FY2025; audited |
| 2026-09-27 | Not supplied: cash interest paid is printed in the annual report only, so the last-twelve-months ratio cannot be calculated | x | EBITDA (Reported) over the last twelve months is 968.5; the quarterly report prints net interest expense of 70.2 for 9M 2026 but not cash paid |

Cash interest includes commitment fees and is printed only in the annual reports, so the 2026-09-27 ratio is not stated.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-29 | 721.2 | 525 | US$m | Cash as reported; undrawn capacity under the asset-based revolving facility is the issuer's approximate figure of 525 |
| FY2025 / 2025-12-28 | 416.7 | 569 | US$m | Cash as reported; undrawn capacity under the revolving facility is the issuer's figure of 569 after letters of credit of 29.3; a delayed-draw term loan of up to 100 (expired 2026-06-13) is not counted |
| 2026-09-27 | 442.3 | 570 | US$m | Cash as reported, of which 106.1 is held by the 60%-owned STAL joint venture; undrawn revolving capacity is the issuer's approximate figure of 570 after letters of credit of 29.3; foreign credit facilities of 76.4 with 15.6 drawn are not counted because their commitment status is not stated |

Undrawn capacity is the issuer's approximate figure for the revolving facility and excludes foreign facilities and the expired delayed-draw term loan.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-29 | 4,362.1 | 729.1 | US$m | Annual revenue and issuer-defined Adjusted EBITDA for FY2024; audited |
| FY2025 / 2025-12-28 | 4,587.4 | 859.3 | US$m | Annual revenue and issuer-defined Adjusted EBITDA for FY2025; audited |
| 2026-09-27 | 5,013.4 | 1,075.9 | US$m | Last twelve months to 2026-09-27 constructed as FY2025 plus 9M 2026 less 9M 2025; the Adjusted EBITDA of 1,075.9 equals the issuer's own trailing figure; issuer-adjusted identity in every row |

Adjusted EBITDA is the issuer's own measure in every row, and the 2026-09-27 row is a last-twelve-months figure built partly from unaudited interim data.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| ABL Term Loan | 1 | Yes | 200.0 | 0.21 | US$m | Secured by accounts receivable and inventory of the borrowers under the amended ABL facility, running to June 2030; interest at 2.0% above adjusted SOFR; the borrower and guarantor scope is not stated beyond the facility being collateralised by the Company's receivables and inventory; rank is the analyst's reading of the stated security, not a stated rank; cumulative leverage is cumulative principal of 200.0 over last-twelve-months EBITDA (Reported) of 968.5 and covers only the facilities listed, not the 2029 and 2031 notes, finance leases and other, or foreign facilities, whose rank no source states |
| ABL revolving credit facility, USD 600 million commitment | 1 | Yes | 0.0 | 0.21 | US$m | Undrawn at 2026-09-27 with letters of credit of 29.3 utilised; same collateral and agreement as the term loan; zero is the stated drawn balance; cumulative leverage is cumulative principal of 200.0 over last-twelve-months EBITDA (Reported) of 968.5 and covers only the facilities listed, not the 2029 and 2031 notes, finance leases and other, or foreign facilities, whose rank no source states |
| 7.25% Senior Notes due 2030 | 2 | No | 425.0 | 0.65 | US$m | Obligation of ATI Inc.; the note states it is unsecured, unsubordinated and equally ranked with existing and future senior unsecured debt; guarantors not stated; cumulative leverage is cumulative principal of 625.0 over last-twelve-months EBITDA (Reported) of 968.5 and covers only the facilities listed, not the 2029 and 2031 notes, finance leases and other, or foreign facilities, whose rank no source states |
| 5.875% Senior Notes due 2033 | 2 | No | 450.0 | 1.11 | US$m | Obligation of ATI Inc.; the note states it is unsecured, unsubordinated and equally ranked with existing and future senior unsecured debt; guarantors not stated; cumulative leverage is cumulative principal of 1,075.0 over last-twelve-months EBITDA (Reported) of 968.5 and covers only the facilities listed, not the 2029 and 2031 notes, finance leases and other, or foreign facilities, whose rank no source states |

The stack lists only facilities whose security or rank the filings state and so is not the complete debt; the 2029 and 2031 senior notes, finance leases and other, and foreign facilities are left out and named under the gaps.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), last twelve months | 968.5 | US$m | Opening measure: reported EBITDA, constructed as FY2025 plus 9M 2026 less 9M 2025 from issuer-stated EBITDA of 789.0, 778.4 and 598.9 |
| Restructuring and other charges | 87.3 | US$m | Issuer special item; classification restructuring and other; realisation status not stated; 48.8 plus 64.4 less 25.9 |
| Pension settlement or remeasurement loss | 18.6 | US$m | Issuer special item; classification other stated; realisation status not stated; arose in FY2025 and is in the trailing figure |
| Loss on sales of businesses, net | 0.3 | US$m | Issuer special item; classification other stated; realisation status not stated; 2.9 plus nil less 2.6 |
| Debt extinguishment charge | 1.2 | US$m | Issuer special item; classification other stated; non-cash write-off of unamortised issuance costs on the 2027 notes |
| Adjusted EBITDA, last twelve months | 1,075.9 | US$m | Closing measure: issuer-defined Adjusted EBITDA; equals the issuer's own trailing figure; no plug or balancing line |

The bridge runs from reported to issuer-defined Adjusted EBITDA for the last twelve months to 2026-09-27 and reconciles exactly with no plug.

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | Read from the 2026-09-27 balance sheet: the quarterly report states no financing, acquisition, disposal or dividend after that date, and the shares outstanding date of 2026-10-26 is its latest dated fact; events between 2025-12-28 and 2026-09-27 (the 2033 notes issued on 2026-06-03 and the 2027 notes redeemed on 2026-07-08) are inside the 2026-09-27 figures; the annual report's one subsequent event, the 2026-02-18 repurchase authorisation, changes no net debt until used |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM | USD 4,587.4m | USD 3,836.3m | USD 3,410.3m | USD 5,013.4m | Calculated | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–4 | Stubs are the comparable nine-month periods to 2026-09-27 and 2025-09-28; the stub is unaudited |
| EBITDA (Reported) | LTM | USD 789.0m | USD 778.4m | USD 598.9m | USD 968.5m | Calculated | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50 | Stubs are the comparable nine-month periods to 2026-09-27 and 2025-09-28; the stub is unaudited |
| EBITDA (Adjusted) | LTM | USD 859.3m | USD 844.0m | USD 627.4m | USD 1,075.9m | Calculated | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50 | Stubs are the comparable nine-month periods to 2026-09-27 and 2025-09-28; the stub is unaudited |
| Net income | LTM | USD 418.6m | USD 468.1m | USD 318.1m | USD 568.6m | Calculated | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–4 | Stubs are the comparable nine-month periods to 2026-09-27 and 2025-09-28; the stub is unaudited |
| Cash from operating activities | LTM | USD 614.3m | USD 414.6m | USD 298.5m | USD 730.4m | Calculated | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–4 | Stubs are the comparable nine-month periods to 2026-09-27 and 2025-09-28; the stub is unaudited |
| Capital expenditures | LTM | USD 280.6m | USD 216.6m | USD 187.9m | USD 309.3m | Calculated | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–4 | Stubs are the comparable nine-month periods to 2026-09-27 and 2025-09-28; the stub is unaudited |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1,895.3 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 | 745.8 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | FY2024 / 2024-12-29 | USD | US$m | 2.54 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,174.1 | calculation C1 | 745.8 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | FY2024 / 2024-12-29 | USD | US$m | 1.57 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 745.8 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | 131.4 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 | FY2024 / 2024-12-29 | USD | US$m | 5.68 | Calculated | Tier 1 | Cash interest is interest and commitment fees paid, a different measure from net interest expense. |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 1,895.3 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 | 729.1 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | FY2024 / 2024-12-29 | USD | US$m | 2.60 | Calculated | Tier 1 | Issuer-defined Adjusted EBITDA with special items added back; debt at carrying value, so differs from the issuer's own ratio on principal. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,174.1 | calculation C1 | 729.1 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | FY2024 / 2024-12-29 | USD | US$m | 1.61 | Calculated | Tier 1 | Issuer-defined Adjusted EBITDA with special items added back; debt at carrying value, so differs from the issuer's own ratio on principal. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 729.1 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | 131.4 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 | FY2024 / 2024-12-29 | USD | US$m | 5.55 | Calculated | Tier 1 | Issuer-defined Adjusted EBITDA; cash interest includes commitment fees. |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1,749.4 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 | 789.0 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | FY2025 / 2025-12-28 | USD | US$m | 2.22 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,332.7 | calculation C2 | 789.0 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | FY2025 / 2025-12-28 | USD | US$m | 1.69 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 789.0 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | 117.8 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 | FY2025 / 2025-12-28 | USD | US$m | 6.70 | Calculated | Tier 1 | Cash interest is interest and commitment fees paid, a different measure from net interest expense. |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 1,749.4 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 75–76; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 | 859.3 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | FY2025 / 2025-12-28 | USD | US$m | 2.04 | Calculated | Tier 1 | Issuer-defined Adjusted EBITDA with special items added back; debt at carrying value, so differs from the issuer's own ratio on principal. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,332.7 | calculation C2 | 859.3 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | FY2025 / 2025-12-28 | USD | US$m | 1.55 | Calculated | Tier 1 | Issuer-defined Adjusted EBITDA with special items added back; debt at carrying value, so differs from the issuer's own ratio on principal. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 859.3 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | 117.8 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 | FY2025 / 2025-12-28 | USD | US$m | 7.29 | Calculated | Tier 1 | Issuer-defined Adjusted EBITDA; cash interest includes commitment fees. |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1,857.5 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14 | 968.5 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50; calculation C5 | 2026-09-27 | USD | US$m | 1.92 | Calculated | Tier 1 and Tier 2b | Debt at balance-sheet carrying value, not principal. Last twelve months from the constructed period register. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,415.2 | calculation C3 | 968.5 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50; calculation C5 | 2026-09-27 | USD | US$m | 1.46 | Calculated | Tier 1 and Tier 2b | Debt at balance-sheet carrying value, not principal. Last twelve months from the constructed period register. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 968.5 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50; calculation C5 | Not supplied: cash interest paid is printed in the annual report only | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 | 2026-09-27 | USD | US$m | Not calculable: no cash interest figure for the last twelve months | Not Calculable | Tier 1 and Tier 2b | Last twelve months from the constructed period register; net interest expense is not a substitute. |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 1,857.5 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14 | 1,075.9 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50; calculation C6 | 2026-09-27 | USD | US$m | 1.73 | Calculated | Tier 1 and Tier 2b | Issuer-defined Adjusted EBITDA with special items added back; debt at carrying value, so differs from the issuer's own ratio on principal. Last twelve months from the constructed period register. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,415.2 | calculation C3 | 1,075.9 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50; calculation C6 | 2026-09-27 | USD | US$m | 1.32 | Calculated | Tier 1 and Tier 2b | Issuer-defined Adjusted EBITDA with special items added back; debt at carrying value, so differs from the issuer's own ratio on principal. Last twelve months from the constructed period register. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1,075.9 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50; calculation C6 | Not supplied: cash interest paid is printed in the annual report only | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4 | 2026-09-27 | USD | US$m | Not calculable: no cash interest figure for the last twelve months | Not Calculable | Tier 1 and Tier 2b | Last twelve months from the constructed period register. |
| EBITDA margin (Reported) | EBITDA (Reported) / revenue x 100 | 745.8 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | 4,362.1 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 74 | FY2024 / 2024-12-29 | USD | US$m | 17.10 | Calculated | Tier 1 | Percent. |
| EBITDA margin (Reported) | EBITDA (Reported) / revenue x 100 | 789.0 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | 4,587.4 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 74 | FY2025 / 2025-12-28 | USD | US$m | 17.20 | Calculated | Tier 1 | Percent. |
| EBITDA margin (Reported) | EBITDA (Reported) / revenue x 100 | 968.5 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50; calculation C5 | 5,013.4 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 74; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2; calculation C4 | 2026-09-27 | USD | US$m | 19.32 | Calculated | Tier 1 and Tier 2b | Percent; last twelve months from the constructed period register. |
| Capital expenditure / revenue | Capital expenditures / revenue x 100 | 239.1 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76 | 4,362.1 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 74 | FY2024 / 2024-12-29 | USD | US$m | 5.48 | Calculated | Tier 1 | Percent. |
| Capital expenditure / revenue | Capital expenditures / revenue x 100 | 280.6 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76 | 4,587.4 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 74 | FY2025 / 2025-12-28 | USD | US$m | 6.12 | Calculated | Tier 1 | Percent. |
| Capital expenditure / revenue | Capital expenditures / revenue x 100 | 309.3 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 3–4; calculation C9 | 5,013.4 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 74; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2; calculation C4 | 2026-09-27 | USD | US$m | 6.17 | Calculated | Tier 1 and Tier 2b | Percent; last twelve months from the constructed period register. |
| Free cash flow / EBITDA (Reported) | Free cash flow / EBITDA (Reported) x 100 | 168.1 | calculation C10 | 745.8 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | FY2024 / 2024-12-29 | USD | US$m | 22.54 | Calculated | Tier 1 | Percent. |
| Free cash flow / EBITDA (Reported) | Free cash flow / EBITDA (Reported) x 100 | 333.7 | calculation C11 | 789.0 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | FY2025 / 2025-12-28 | USD | US$m | 42.29 | Calculated | Tier 1 | Percent. |
| Free cash flow / EBITDA (Reported) | Free cash flow / EBITDA (Reported) x 100 | 421.1 | calculation C14 | 968.5 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50; calculation C5 | 2026-09-27 | USD | US$m | 43.48 | Calculated | Tier 1 and Tier 2b | Percent; last twelve months from the constructed period register. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Profitability | Adjusted EBITDA as % of sales, issuer-reported (%) | 16.7 | 18.7 | 18.4 | 22.0 | Improving | Issuer-defined measure; the quarterly margin was 23.0% in Q3 2026 against 20.0% in Q3 2025; the 9M 2026 margin is higher mainly on volume, pricing and mix in the AA&S segment |
| Working capital | Managed working capital as % of annualized sales, issuer-reported (%) | 30.9 | 32.5 | Not supplied: the 9M 2025 balance is not in the sources | 32.9 | Rising | Inventory build; the 9M 2026 figure is at 2026-09-27 and the other figures are at fiscal year ends |
| Working capital | Managed working capital, issuer-reported (USD millions) | 1,451.3 | 1,532.1 | Not supplied: the 9M 2025 balance is not in the sources | 1,874.2 | Rising | Gross receivables, contract assets and inventories less payables and contract liabilities, before reserves |
| Operating | Cash from operations less capital expenditures (USD millions) | 168.1 | 333.7 | 110.6 | 198.0 | Improving | Calculated; before shareholder returns |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Unadjusted EBITDA: net income plus interest, tax and depreciation and amortization | The issuer prints the same EBITDA subtotal and then Adjusted EBITDA after special items | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 50 | FY2024, FY2025, last twelve months | Adjusted less reported EBITDA is -16.7 in FY2024, 70.3 in FY2025 and 107.4 over the last twelve months | Fundamental credit and later leverage work | Reported EBITDA is the denominator; Adjusted EBITDA is shown beside it and labelled |
| Adjusted EBITDA add-backs | Add-backs only when realised and not recurring | Special items include restructuring and other charges of 22.1 in FY2024, 48.8 in FY2025 and 87.3 over the last twelve months, plus pension remeasurement or settlement losses of 14.1 in FY2024 and 18.6 in FY2025; losses on sales of receivables sit inside restructuring and other charges | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 24–25 | FY2024, FY2025, last twelve months | Restructuring and other charges recur every year, so the add-back may overstate sustainable earnings | Earnings quality | Treat restructuring and other charges as recurring until the issuer shows a year without them |
| Total debt | Balance-sheet carrying value, current plus long-term, net of issuance costs | Total principal balance including deferred financing costs | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 48 | 2026-09-27 and prior balance sheets | 1,872.7 principal against 1,857.5 carrying value at 2026-09-27, a difference of 15.2; 1,761.0 against 1,749.4 at 2025-12-28; 1,909.5 against 1,895.3 at 2024-12-29 | Liquidity, leverage | Carrying value used; principal shown in the reconciliation table |
| Net debt and leverage | Carrying-value debt less cash over reported EBITDA | Principal less cash over trailing Adjusted EBITDA: 1.74 total and 1.33 net at 2026-09-27; 2.05 and 1.56 at 2025-12-28; 2.62 and 1.63 at 2024-12-29 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 48–49; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 57 | 2024-12-29, 2025-12-28, 2026-09-27 | Issuer net debt of 1,430.4 against 1,415.2 here, a difference of 15.2; the EBITDA basis explains most of the ratio gap | All leverage work | State both bases wherever a leverage ratio is quoted |
| Lease and other claims in debt | Lease liabilities the issuer presents on their own lines are not added to Total Debt; leases carried inside debt lines stay in | Finance leases and other of 107.1 sit inside debt; operating lease liabilities of 89.0 at 2025-12-28 sit in other liabilities | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 106–107 | 2025-12-28, 2026-09-27 | Operating lease liabilities of 89.0 sit outside debt, against finance lease liabilities of 110.4 inside it | Liquidity, structural priority | Keep operating leases outside Total Debt and name them |
| Receivable sales and supplier finance | Non-debt funding float flagged separately, not payables | Receivables sold under customer programmes and a receivables facility are derecognised; supplier financing sits in accounts payable | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 11–13; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 97–100 | FY2024, FY2025, 9M 2026 | Receivable sales of 375 in FY2025 and 377.5 in 9M 2026; supplier financing of 83.0 at 2026-09-27 | Liquidity, downside work | Excluded from debt; shown in the funding float table |
| Cash | Cash and equivalents; restricted cash and cash held by non-wholly-owned subsidiaries flagged | Cash includes 106.1 held by the 60%-owned STAL joint venture; foreign subsidiaries hold 173.2 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 10; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 49 | 2026-09-27 | The joint venture's cash is not wholly available to ATI creditors | Liquidity | Cash used as reported; the joint venture share named in the liquidity table |
| Cash interest | Cash interest paid | Interest and commitment fees paid; net interest expense is 98.6 in FY2025 against interest expense of 110.7 and interest income of 12.1, with 10.6 capitalised | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 75 | FY2024, FY2025 | Interest paid of 117.8 against net expense of 98.6 in FY2025 | Coverage | Cover uses interest and commitment fees paid |

### Non-debt funding float

| Item | Period | Amount | Unit | Source |
|---|---|---|---|---|
| Supplier financing reported in accounts payable | 2025-12-28 | 52.8 | USD millions | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 97 |
| Supplier financing reported in accounts payable | 2026-09-27 | 83.0 | USD millions | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 11 |
| Customer receivable sales programmes, receivables sold | FY2025 | 375 | USD millions | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 100 |
| Customer receivable sales programmes, receivables sold | 9M 2025 | 271.1 | USD millions | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 13 |
| Customer receivable sales programmes, receivables sold | 9M 2026 | 377.5 | USD millions | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 13 |
| Receivables facility, maximum funding | 2026-09-27 | 125.0 | USD millions | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 12 |
| Receivables facility, funding utilised | 2026-09-27 | 120 | USD millions | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 13 |
| Contract liabilities, short-term | 2025-12-28 | 146.4 | USD millions | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 8 |
| Contract liabilities, short-term | 2026-09-27 | 127.4 | USD millions | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 8 |
| Contract liabilities, long-term, in other long-term liabilities | 2025-12-28 | 91.3 | USD millions | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 8 |
| Contract liabilities, long-term, in other long-term liabilities | 2026-09-27 | 145.8 | USD millions | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 8 |

### Subsequent events

| Event | Date | Amount | Effect on period figures | Source |
|---|---|---|---|---|
| Board authorised further share repurchases of up to 500.0 in addition to the existing authorisation of about 120.0 | 2026-02-18 | 500.0 | Flagged and kept out of FY2025 figures; no net debt effect until shares are bought; 195.0 was bought in 9M 2026 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 142 |
| Share repurchase authorisation remaining under the active programme | 2026-09-27 | 425 | Authorisation, not a commitment; repurchases may be modified, suspended or terminated at any time | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 47–48 |
| Senior notes due 2033 issued, net proceeds 443.1 after fees of 6.9 | 2026-06-03 | 450.0 | Inside the 2026-09-27 balance sheet, not a subsequent event of it | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 15 |
| Senior notes due 2027 redeemed in full | 2026-07-08 | 350.0 | Inside the 2026-09-27 balance sheet; debt extinguishment charge of 1.2 recorded | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 15 |

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-27 | Basis |
|---|---|---|---|---|
| Revenue (US$m) | 4,362.1 | 4,587.4 | 5,013.4 | Reported; last twelve months constructed |
| EBITDA (Reported) (US$m) | 745.8 | 789.0 | 968.5 | Issuer-stated EBITDA before special items; last twelve months constructed |
| EBITDA (Adjusted), issuer-defined (US$m) | 729.1 | 859.3 | 1,075.9 | Issuer-defined Adjusted EBITDA; the trailing figure equals the issuer's own |
| Net income (US$m) | 382.7 | 418.6 | 568.6 | Reported; last twelve months constructed |
| Cash from operating activities (US$m) | 407.2 | 614.3 | 730.4 | Reported; last twelve months constructed |
| Capital expenditures (US$m) | 239.1 | 280.6 | 309.3 | Purchases of property, plant and equipment; last twelve months constructed |
| Free cash flow (US$m) | 168.1 | 333.7 | 421.1 | Cash from operating activities less capital expenditures, before shareholder returns |
| Total debt, carrying value (US$m) | 1,895.3 | 1,749.4 | 1,857.5 | Balance sheet date figures at 2024-12-29, 2025-12-28 and 2026-09-27 |
| Cash (US$m) | 721.2 | 416.7 | 442.3 | Balance sheet date figures |
| Net debt (US$m) | 1,174.1 | 1,332.7 | 1,415.2 | Total debt less cash |
| Total debt / EBITDA (Reported) (x) | 2.54 | 2.22 | 1.92 | Carrying-value debt over reported EBITDA |
| Net debt / EBITDA (Reported) (x) | 1.57 | 1.69 | 1.46 | Net debt over reported EBITDA |
| EBITDA (Reported) / cash interest (x) | 5.68 | 6.70 | Not calculable: cash interest paid is printed in annual reports only | Cash interest is interest and commitment fees paid |
| Issuer-reported total debt / Adjusted EBITDA (x) | 2.62 | 2.05 | 1.74 | Issuer definition: principal including issuance costs over trailing Adjusted EBITDA |
| Issuer-reported net debt / Adjusted EBITDA (x) | 1.63 | 1.56 | 1.33 | Issuer definition: principal less cash over trailing Adjusted EBITDA |
| Liquidity: cash plus undrawn revolving capacity (US$m) | 1,246.2 | 985.7 | 1,012.3 | Cash plus the issuer's undrawn capacity under the asset-based facility |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and net debt, FY2024 to 2026-09-27 | Ready | None for the balance-sheet date figures; the last twelve months EBITDA is built from unaudited interim inputs | Quote both reported-EBITDA and issuer-Adjusted-EBITDA ratios |
| Cash interest cover | Ready with Limitations | Cash interest paid is stated for FY2024 and FY2025 only; the last twelve months cannot be calculated | Obtain cash interest for the nine months to 2026-09-27 from the issuer |
| Liquidity | Ready with Limitations | Undrawn capacity is the issuer's approximate figure; the credit agreement is not supplied, so borrowing base and covenant tests cannot be tested | Obtain the executed credit agreement |
| Maturity wall | Ready with Limitations | The ladder is drawn at 2025-12-28; the 2026 refinancing is described in text but no ladder is printed at 2026-09-27 | Obtain a schedule at the latest balance sheet |
| Debt stack and priority | Not Ready | Rank and security of the 2029 and 2031 notes, finance leases and foreign facilities are not stated; no guarantor list is supplied | Obtain the indentures and guarantee schedules |
| Covenant headroom | Not Ready | The fixed charge coverage covenant is springing; its definitions and the issuer's ratio are not supplied | Obtain the credit agreement definitions |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 40 |
| Calculated | 30 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 6 |
| Fields present | 25 |
| Fields total | 27 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 11 |

## Calculations

Every derived figure above is worked here from the printed inputs; sums and differences are exact and ratios are rounded half up to two decimals.

| ID | Calculation | Formula | Inputs | Result | Unit |
|---|---|---|---|---|---|
| C1 | Net debt, FY2024 / 2024-12-29 | Gross debt - cash | 1,895.3 - 721.2 | 1,174.1 | US$m |
| C2 | Net debt, FY2025 / 2025-12-28 | Gross debt - cash | 1,749.4 - 416.7 | 1,332.7 | US$m |
| C3 | Net debt, 2026-09-27 | Gross debt - cash | 1,857.5 - 442.3 | 1,415.2 | US$m |
| C4 | LTM to 2026-09-27: Revenue | FY2025 + 9M 2026 - 9M 2025 | 4,587.4 + 3,836.3 - 3,410.3 | 5,013.4 | US$m |
| C5 | LTM to 2026-09-27: EBITDA (Reported) | FY2025 + 9M 2026 - 9M 2025 | 789.0 + 778.4 - 598.9 | 968.5 | US$m |
| C6 | LTM to 2026-09-27: EBITDA (Adjusted) | FY2025 + 9M 2026 - 9M 2025 | 859.3 + 844.0 - 627.4 | 1,075.9 | US$m |
| C7 | LTM to 2026-09-27: Net income | FY2025 + 9M 2026 - 9M 2025 | 418.6 + 468.1 - 318.1 | 568.6 | US$m |
| C8 | LTM to 2026-09-27: Cash from operating activities | FY2025 + 9M 2026 - 9M 2025 | 614.3 + 414.6 - 298.5 | 730.4 | US$m |
| C9 | LTM to 2026-09-27: Capital expenditures | FY2025 + 9M 2026 - 9M 2025 | 280.6 + 216.6 - 187.9 | 309.3 | US$m |
| C10 | Free cash flow, FY2024 | Cash from operating activities - capital expenditures | 407.2 - 239.1 | 168.1 | US$m |
| C11 | Free cash flow, FY2025 | Cash from operating activities - capital expenditures | 614.3 - 280.6 | 333.7 | US$m |
| C12 | Free cash flow, 9M 2025 | Cash from operating activities - capital expenditures | 298.5 - 187.9 | 110.6 | US$m |
| C13 | Free cash flow, 9M 2026 | Cash from operating activities - capital expenditures | 414.6 - 216.6 | 198.0 | US$m |
| C14 | Free cash flow, LTM to 2026-09-27 | Cash from operating activities - capital expenditures | 730.4 - 309.3 | 421.1 | US$m |
| C15 | Shareholder returns, 9M 2026 | Treasury stock purchased + shares repurchased for tax withholding | 195.0 + 82.2 | 277.2 | US$m |
| C16 | Free cash flow after shareholder returns, 9M 2026 | Free cash flow 9M 2026 - shareholder returns | 198.0 - 277.2 | -79.2 | US$m |
| C17 | Total debt / EBITDA, FY2024 / 2024-12-29 | Total debt / EBITDA | 1,895.3 / 745.8 | 2.54x | x |
| C18 | Net debt / EBITDA, FY2024 / 2024-12-29 | Net debt / EBITDA | 1,174.1 / 745.8 | 1.57x | x |
| C19 | Total debt / adjusted EBITDA, FY2024 / 2024-12-29 | Total debt / adjusted EBITDA | 1,895.3 / 729.1 | 2.60x | x |
| C20 | Net debt / adjusted EBITDA, FY2024 / 2024-12-29 | Net debt / adjusted EBITDA | 1,174.1 / 729.1 | 1.61x | x |
| C21 | EBITDA / cash interest, FY2024 / 2024-12-29 | EBITDA (Reported) / cash interest paid | 745.8 / 131.4 | 5.68x | x |
| C22 | Adjusted EBITDA / cash interest, FY2024 / 2024-12-29 | EBITDA (Adjusted) / cash interest paid | 729.1 / 131.4 | 5.55x | x |
| C23 | Total debt / EBITDA, FY2025 / 2025-12-28 | Total debt / EBITDA | 1,749.4 / 789.0 | 2.22x | x |
| C24 | Net debt / EBITDA, FY2025 / 2025-12-28 | Net debt / EBITDA | 1,332.7 / 789.0 | 1.69x | x |
| C25 | Total debt / adjusted EBITDA, FY2025 / 2025-12-28 | Total debt / adjusted EBITDA | 1,749.4 / 859.3 | 2.04x | x |
| C26 | Net debt / adjusted EBITDA, FY2025 / 2025-12-28 | Net debt / adjusted EBITDA | 1,332.7 / 859.3 | 1.55x | x |
| C27 | EBITDA / cash interest, FY2025 / 2025-12-28 | EBITDA (Reported) / cash interest paid | 789.0 / 117.8 | 6.70x | x |
| C28 | Adjusted EBITDA / cash interest, FY2025 / 2025-12-28 | EBITDA (Adjusted) / cash interest paid | 859.3 / 117.8 | 7.29x | x |
| C29 | Total debt / EBITDA, 2026-09-27 | Total debt / EBITDA | 1,857.5 / 968.5 | 1.92x | x |
| C30 | Net debt / EBITDA, 2026-09-27 | Net debt / EBITDA | 1,415.2 / 968.5 | 1.46x | x |
| C31 | Total debt / adjusted EBITDA, 2026-09-27 | Total debt / adjusted EBITDA | 1,857.5 / 1,075.9 | 1.73x | x |
| C32 | Net debt / adjusted EBITDA, 2026-09-27 | Net debt / adjusted EBITDA | 1,415.2 / 1,075.9 | 1.32x | x |
| C33 | Liquidity, FY2024 / 2024-12-29 | Cash + undrawn ABL capacity | 721.2 + 525 | 1,246.2 | US$m |
| C34 | Liquidity, FY2025 / 2025-12-28 | Cash + undrawn ABL capacity | 416.7 + 569 | 985.7 | US$m |
| C35 | Liquidity, 2026-09-27 | Cash + undrawn ABL capacity | 442.3 + 570 | 1,012.3 | US$m |
| C36 | Scheduled principal FY2026 to FY2030 | Sum of the five stated years | 31.6 + 378.6 + 23.6 + 343.7 + 633.4 | 1,410.9 | US$m |
| C37 | Contractual principal at 2025-12-28 | Debt at carrying value + debt issuance costs | 1,749.4 + 11.6 | 1,761.0 | US$m |
| C38 | Principal due after FY2030 | Contractual principal - scheduled principal FY2026 to FY2030 | 1,761.0 - 1,410.9 | 350.1 | US$m |
| C39 | Reconciling items at 2025-12-28 | Carrying value - contractual principal | 1,749.4 - 1,761.0 | -11.6 | US$m |
| C40 | Contractual principal at 2026-09-27 | Debt at carrying value + debt issuance costs | 1,857.5 + 15.2 | 1,872.7 | US$m |
| C41 | Instrument principal at 2026-09-27 | Four senior notes + ABL term loan + foreign facilities + finance leases and other | 425.0 + 450.0 + 350.0 + 325.0 + 200.0 + 15.6 + 107.1 | 1,872.7 | US$m |
| C42 | Senior notes principal at 2026-09-27 | Sum of the four series | 425.0 + 450.0 + 350.0 + 325.0 | 1,550.0 | US$m |
| C43 | Instrument principal less issuance costs | Instrument principal - debt issuance costs | 1,872.7 - 15.2 | 1,857.5 | US$m |
| C44 | Accrued and other current liabilities at 2026-09-27 | Accrued liabilities + other current liabilities | 273.0 + 16.3 | 289.3 | US$m |
| C45 | Cumulative leverage through ABL Term Loan | Cumulative principal / LTM EBITDA (Reported) | 200.0 / 968.5 | 0.21x | x |
| C46 | Cumulative leverage through ABL revolving facility | Cumulative principal / LTM EBITDA (Reported) | 200.0 / 968.5 | 0.21x | x |
| C47 | Cumulative leverage through 7.25% Senior Notes due 2030 | Cumulative principal / LTM EBITDA (Reported) | 625.0 / 968.5 | 0.65x | x |
| C48 | Cumulative leverage through 5.875% Senior Notes due 2033 | Cumulative principal / LTM EBITDA (Reported) | 1,075.0 / 968.5 | 1.11x | x |
| C49 | EBITDA (Reported) margin, FY2024 / 2024-12-29 | EBITDA (Reported) / revenue x 100 | 745.8 / 4,362.1 x 100 | 17.10% | % |
| C50 | EBITDA (Reported) margin, FY2025 / 2025-12-28 | EBITDA (Reported) / revenue x 100 | 789.0 / 4,587.4 x 100 | 17.20% | % |
| C51 | EBITDA (Reported) margin, 2026-09-27 | EBITDA (Reported) / revenue x 100 | 968.5 / 5,013.4 x 100 | 19.32% | % |
| C52 | Capital expenditure / revenue, FY2024 / 2024-12-29 | Capital expenditures / revenue x 100 | 239.1 / 4,362.1 x 100 | 5.48% | % |
| C53 | Capital expenditure / revenue, FY2025 / 2025-12-28 | Capital expenditures / revenue x 100 | 280.6 / 4,587.4 x 100 | 6.12% | % |
| C54 | Capital expenditure / revenue, 2026-09-27 | Capital expenditures / revenue x 100 | 309.3 / 5,013.4 x 100 | 6.17% | % |
| C55 | Free cash flow / EBITDA (Reported), FY2024 / 2024-12-29 | Free cash flow / EBITDA (Reported) x 100 | 168.1 / 745.8 x 100 | 22.54% | % |
| C56 | Free cash flow / EBITDA (Reported), FY2025 / 2025-12-28 | Free cash flow / EBITDA (Reported) x 100 | 333.7 / 789.0 x 100 | 42.29% | % |
| C57 | Free cash flow / EBITDA (Reported), 2026-09-27 | Free cash flow / EBITDA (Reported) x 100 | 421.1 / 968.5 x 100 | 43.48% | % |
| C58 | Adjusted EBITDA less EBITDA (Reported), FY2024 / 2024-12-29 | EBITDA (Adjusted) - EBITDA (Reported) | 729.1 - 745.8 | -16.7 | US$m |
| C59 | Adjusted EBITDA less EBITDA (Reported), FY2025 / 2025-12-28 | EBITDA (Adjusted) - EBITDA (Reported) | 859.3 - 789.0 | 70.3 | US$m |
| C60 | Adjusted EBITDA less EBITDA (Reported), 2026-09-27 | EBITDA (Adjusted) - EBITDA (Reported) | 1,075.9 - 968.5 | 107.4 | US$m |
| C61 | Issuer net debt less net debt here, 2026-09-27 | Issuer net debt - net debt at carrying value | 1,430.4 - 1,415.2 | 15.2 | US$m |
| C62 | Contract liabilities (short-term plus long-term), 2026-09-27 | Short-term + long-term | 127.4 + 145.8 | 273.2 | US$m |
| C63 | Contract liabilities (short-term plus long-term), 2025-12-28 | Short-term + long-term | 146.4 + 91.3 | 237.7 | US$m |
| C64 | Increase in supplier financing in accounts payable | 2026-09-27 - 2025-12-28 | 83.0 - 52.8 | 30.2 | US$m |
| C65 | Segment EBITDA less corporate and closed operations, FY2024 | HPMC + AA&S segment EBITDA + corporate expenses + closed operations and other | 461.4 + 320.9 -64.0 + 10.8 | 729.1 | US$m |
| C66 | Segment EBITDA less corporate and closed operations, FY2025 | HPMC + AA&S segment EBITDA + corporate expenses + closed operations and other | 575.8 + 349.0 -67.8 + 2.3 | 859.3 | US$m |
| C67 | Segment EBITDA less corporate and closed operations, Q3 2025 | HPMC + AA&S segment EBITDA + corporate expenses + closed operations and other | 145.8 + 90.4 -15.6 + 4.5 | 225.1 | US$m |
| C68 | Segment EBITDA less corporate and closed operations, Q3 2026 | HPMC + AA&S segment EBITDA + corporate expenses + closed operations and other | 167.3 + 181.3 -18.8 - 1.9 | 327.9 | US$m |
| C69 | Segment EBITDA less corporate and closed operations, 9M 2025 | HPMC + AA&S segment EBITDA + corporate expenses + closed operations and other | 420.8 + 250.5 -48.4 + 4.5 | 627.4 | US$m |
| C70 | Segment EBITDA less corporate and closed operations, 9M 2026 | HPMC + AA&S segment EBITDA + corporate expenses + closed operations and other | 473.7 + 425.9 -50.7 - 4.9 | 844.0 | US$m |
| C71 | FY2024 cash change before cash held for sale | Operating + investing + financing + exchange effect | 407.2 - 159.6 - 260.4 - 7.6 | -20.4 | US$m |
| C72 | EBITDA bridge to Adjusted EBITDA, LTM to 2026-09-27 | EBITDA (Reported) + special items | 968.5 + 87.3 + 18.6 + 0.3 + 1.2 | 1,075.9 | US$m |
| C73 | Restructuring and other charges, LTM | FY2025 + 9M 2026 - 9M 2025 | 48.8 + 64.4 - 25.9 | 87.3 | US$m |
| C74 | Loss on sales of businesses, LTM | FY2025 + 9M 2026 - 9M 2025 | 2.9 + 0.0 - 2.6 | 0.3 | US$m |

## Gaps

- Cash interest paid for the nine months to 2026-09-27 and 2025-09-28 is not printed in the quarterly reports, so cash interest cover for the last twelve months is not calculable; severity Medium; the issuer's interim cash paid for interest would close it.
- Income taxes paid, interest expense before interest income, and interest income are printed in the annual reports only, so the interim columns of those lines are not supplied; severity Low; the interim cash flow supplement would close it.
- The statements print a dash for several lines in some periods (borrowings on long-term debt, debt issuance costs, net credit facility movements, the capped call, cash held for sale and the debt extinguishment charge); a dash is not read as zero, so those cells are not supplied, and the totals still add; severity Low; the issuer's confirmation that a dash means no amount would close it.
- The FY2024 net cash change printed by the issuer includes cash held for sale of USD 2.3 million outside the three activity totals and the exchange effect, so the total is withheld from the table; severity Low; the issuer's cash held for sale note would close it.
- The maturity ladder is printed at 2025-12-28 only, so the ladder for 2026-09-27 is not supplied and the ladder shown includes the redeemed 2027 notes and omits the 2033 notes; severity Medium; a schedule at the latest balance sheet would close it.
- The rank and security of the 2029 and 2031 senior notes, the finance leases and other, and the foreign credit facilities are not stated in the sources, so they are left out of the debt stack and out of secured and senior subtotals; severity Medium; the indentures and lease and facility agreements would close it.
- The senior notes' guarantors and the asset-based facility's borrowers are not named in the sources read, so obligor scope is not established; severity Low; the executed agreements and guarantee schedules would close it.
- The fixed charge coverage covenant of the asset-based facility is springing and its definitions are not supplied, so headroom is not calculable; severity Low for this module; the credit agreement would close it.
- Carrying value by instrument is not disclosed, only principal by instrument and one aggregate issuance cost adjustment of USD 15.2 million at 2026-09-27; severity Low; none is needed beyond the aggregate.
- The denomination currency and exchange rate of the foreign credit facilities are not stated, only dollar equivalents at 2026-09-27 rates; severity Low; the facility terms would close it.
- Undrawn revolving capacity is the issuer's approximate figure, USD 525 million at FY2024, USD 569 million at FY2025 and about USD 570 million at 2026-09-27, and the borrowing base is not shown; severity Low; the borrowing base certificate would close it.
- Maintenance and growth capital expenditure are not split in the sources, so only total capital expenditure is carried; severity Low; management's split would close it.
- A balance sheet at 2025-09-28 is not supplied, and a discrete fourth quarter of FY2025 is not stated; it could be derived as the full year less nine months but is not carried here, so no quarterly trend through FY2025 is shown; severity Low; the quarterly report for 2025-09-28 would close it.
- Receivables sold under the customer programmes and the receivables facility are derecognised and sit outside debt, and the amount of customer receivables outstanding under those programmes at the balance sheet date is not stated; severity Low; the issuer's balance of receivables sold and unsettled would close it.

## Next module

The orchestrator selects the next module.
