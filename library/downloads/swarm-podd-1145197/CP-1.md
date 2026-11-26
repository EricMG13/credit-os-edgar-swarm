---
module_id: CP-1
issuer_id: podd-1145197
issuer_name: Insulet Corp
analysis_date: 2026-11-18
pathway: credit_snapshot
---

# Financial foundation: Insulet Corp (podd-1145197), as of 2026-11-18

## Request

Financial foundation for Insulet Corp (issuer podd-1145197) as of 2026-11-18 on the credit snapshot pathway (credit_snapshot). The scope is the issuer's consolidated statements, debt, cash, leverage, interest cover and liquidity figures from the five supplied filings.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_podd-20241231.htm.jsonl | Annual report on Form 10-K of Insulet Corporation for the year ended 2024-12-31 | 2025-02-20 | 3ca21f0666b600732db05bddf666ad42bc06b5874422b7fd248a4fcdf642da5b | Balance sheet at 2023-12-31, the 2023 adjusted EBITDA reconciliation, 2024 debt note, lease note and letters of credit |
| 10-K_2025-12-31_podd-20251231.htm.jsonl | Annual report on Form 10-K of Insulet Corporation for the year ended 2025-12-31 | 2026-02-18 | defd65468dd3fb9d515378a3d4acc7b0fdbed9f6dacd99e95f5e6f3e371c07e6 | Income statement and cash flow for fiscal years 2023 to 2025, balance sheets at 2024-12-31 and 2025-12-31, debt, lease and derivative notes, contractual obligations, supplemental cash flow information |
| 10-Q_2026-03-31_podd-20260331.htm.jsonl | Quarterly report on Form 10-Q of Insulet Corporation for the quarter ended 2026-03-31 | 2026-05-06 | 759f5516864d1425d45378bbf20a62d6996a0c267acea0694a674988d355480c | Read for the first-quarter Adjusted EBITDA and the debt table at 2026-03-31; no figure in the statement tables comes from it |
| 10-Q_2026-06-30_podd-20260630.htm.jsonl | Quarterly report on Form 10-Q of Insulet Corporation for the quarter ended 2026-06-30 | 2026-08-05 | 8d1ffeb777a43a02857e676da62d545a546c1d220bc08a2d7cd8e7e1ca5717c0 | Read for the six-month cash flow statement and the revolver size before the September 2026 amendment; no figure in the statement tables comes from it |
| 10-Q_2026-09-30_podd-20260930.htm.jsonl | Quarterly report on Form 10-Q of Insulet Corporation for the quarter ended 2026-09-30 | 2026-11-04 | 49b21d6b40c12cfad0f5ab4652758a0060a1146d0e099962e233e2e4677340c8 | Interim statements for the quarter and nine months to 2026-09-30, debt note, liquidity and capital resources, Adjusted EBITDA reconciliation |
| Source readiness (CP-0) | Source readiness handoff of this run | not stated | 633c061d1ac2367bcf6796e6db5eaab8a413292b3e288173f66b5eb40d7be7e0 | Source map, gaps and the exhibit index review |

## Findings

### Bottom line

Insulet's leverage is low and has fallen sharply, so creditors are well covered by earnings today, but net leverage has stopped improving as cash goes to shareholders.

Total debt was 1.38x last-twelve-months reported EBITDA at 2026-09-30, down from 4.80x at the end of FY2023 as the convertible notes were retired in 2025, while net debt was 0.54x against 0.51x at FY2025 after a USD 300 million share repurchase. Cash interest cover was 8.95x in FY2025 and is not calculable for the last twelve months because interim cash interest is not stated. Liquidity is cash of USD 584.4 million plus an undrawn USD 750 million revolver, before any letters of credit, and the large maturities are the 2031 term loan and the 2033 notes.
Basis: 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 32; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 105; calculation C10; calculation C11; calculation C16

### Leverage trajectory and drivers

Leverage fell because debt was repaid and earnings grew together: total debt went from USD 1,415.8 million at FY2023 to USD 949.2 million at FY2025 as the 2026 convertible notes were repurchased and redeemed in 2025 with the proceeds of USD 450 million of 6.5% senior unsecured notes due 2033 and cash, while reported EBITDA rose from USD 295.0 million to USD 454.6 million. The effect for creditors is that total debt sat at 2.09x reported EBITDA at FY2025 and 1.38x at 2026-09-30, and the unsecured notes sit behind a secured term loan of similar size and an undrawn secured revolver. Since FY2025 debt has risen slightly to USD 962.2 million, and net debt has risen from USD 233.1 million to USD 377.8 million because the USD 300 million accelerated share repurchase and USD 113.9 million of capital expenditure used cash faster than operations replaced it.
Basis: 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 70, 72, 91; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 5, 10, 17; calculation C3; calculation C10; calculation C11

### Coverage

Cash interest cover improved from 5.91x in FY2023 to 8.95x in FY2025 on reported EBITDA, so interest is not a near-term constraint. The cover figure for the last twelve months to 2026-09-30 cannot be built because the quarterly reports do not state cash paid for interest, and an estimate from interest expense would be a guess; the third-quarter report does say it expects net interest expense of about USD 40 million for 2026, a net figure after interest income that is not comparable with cash interest paid.
Basis: 10-K_2025-12-31_podd-20251231.htm.jsonl, page 105; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 26; calculation C1; calculation C3

### Cash-flow quality

Cash conversion weakened in 2026 even as earnings grew: operating cash flow was USD 325.7 million for the nine months to 2026-09-30 against USD 386.0 million a year earlier, because receivables rose by USD 179.6 million and inventories by USD 103.0 million, and capital expenditure doubled to USD 113.9 million. Free cash flow on the issuer's definition (operating cash flow less capital expenditure) fell to USD 211.7 million from USD 329.5 million. Management attributes the receivables to the timing of distributor orders and the inventory to a planned build, so the mechanism is working capital and plant spend rather than lost earnings, but the USD 300 million repurchase exceeded free cash flow, so cash on hand fell.
Basis: 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 5, 30, 31; calculation C23; calculation C26

### Liquidity adequacy

Liquidity is ample against debt due within a year: cash of USD 584.4 million and a USD 750 million revolver with nothing drawn, against USD 19.1 million of current debt maturities. The revolver was USD 500 million until the September 2026 amendment, so USD 250 million of the undrawn capacity is new. Two points limit the reading: letters of credit outstanding are not stated after 2024, so the availability is shown before any letters of credit, and the report says the company expects to allocate about USD 400 million to repurchases in 2026 from existing cash without saying how much of the USD 300 million completed earlier is inside that figure.
Basis: 10-Q_2026-06-30_podd-20260630.htm.jsonl, page 29; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 11, 17, 32, 33; calculation C27

### Definition and data-quality risks

The issuer reports only an Adjusted EBITDA, which adds back stock-based compensation and one-off items; reported EBITDA is therefore calculated here, and for FY2025 the adjusted figure is USD 645.5 million against USD 454.6 million reported, a gap of USD 190.9 million that is mostly the USD 123.9 million loss on extinguishing the convertible notes and USD 62.7 million of stock-based compensation. The cost of the product corrections is stated four ways in the third-quarter report and is not reconciled, prior-year figures differ by USD 0.1 million between the two annual reports in several lines, and the 2025 annual report's cash flow totals do not add by USD 0.1 million to the printed net change in cash.
Basis: 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10, 20, 27; calculation C3; calculation C25

### Most material gaps

The largest restrictions are that no debt maturity schedule is printed at 2026-09-30, that letters of credit outstanding are not stated after 2024, that cash interest paid is not stated for any interim period, and that no executed credit agreement or indenture was supplied, so covenant levels and guarantor lists cannot be taken from this module.
Basis: 10-K_2025-12-31_podd-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10

### Period table

| Period | Start | End |
|---|---|---|
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|
| Revenue | 1,223.4 | 1,483.8 | 2,196.5 | 521.7 | 842.0 | 1,412.7 | 2,405.4 | USD millions | Reported; excludes the related-party distributor in 2023 to 2025 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Revenue from related party | 473.7 | 587.8 | 511.6 | 184.5 | Not supplied: the statement prints a dash | 511.6 | Not supplied: the statement prints a dash | USD millions | Reported; the distributor stopped being a related party on 2025-10-01 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 3, 6 |
| Total revenue | 1,697.1 | 2,071.6 | 2,708.1 | 706.3 | 842.0 | 1,924.3 | 2,405.4 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Cost of revenue | 537.2 | 625.9 | 768.2 | 196.2 | 209.9 | 553.0 | 681.7 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Gross profit | 1,159.9 | 1,445.7 | 1,939.9 | 510.1 | 632.1 | 1,371.3 | 1,723.8 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Research and development expenses | 205.0 | 219.6 | 301.1 | 77.2 | 91.6 | 210.2 | 269.4 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Selling, general and administrative expenses | 734.8 | 917.2 | 1,165.0 | 315.2 | 350.7 | 833.6 | 1,012.8 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Operating income | 220.1 | 308.9 | 473.8 | 117.7 | 189.8 | 327.5 | 441.5 | USD millions | Reported; the issuer's EBIT | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Interest expense | -36.2 | -42.7 | -59.4 | -15.6 | -16.2 | -44.5 | -44.4 | USD millions | Reported, shown negative; annual figures are net of the portion capitalized | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Interest income | 28.6 | 39.5 | 34.7 | 8.6 | 4.1 | 29.0 | 12.6 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Loss on extinguishment of debt | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -123.9 | Not supplied: the statement prints a dash | -0.3 | -123.9 | -0.3 | USD millions | Reported, shown negative; an exceptional item | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Other income (expense), net | 2.2 | -5.5 | 14.3 | 12.1 | -0.2 | 11.2 | -0.7 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Income before income taxes | 214.7 | 300.2 | 339.5 | 122.8 | 177.2 | 199.3 | 408.9 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Income tax (expense) benefit | -8.3 | 118.1 | -92.4 | -35.2 | -36.1 | -53.9 | -81.7 | USD millions | Reported, expense negative; FY2024 includes a valuation allowance release | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 63, 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Net income | 206.3 | 418.3 | 247.1 | 87.6 | 141.1 | 145.5 | 327.1 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Depreciation and amortization | 72.8 | 80.8 | 90.4 | 22.0 | 28.2 | 66.0 | 81.1 | USD millions | Reported in the cash flow statement and the Adjusted EBITDA reconciliation | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 |
| Stock-based compensation expense | 48.4 | 69.3 | 62.7 | 16.7 | 20.5 | 42.4 | 61.5 | USD millions | Reported; the 2024 annual report prints 48.3 for FY2023 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 5, 16 |
| Interest expense, net (Adjusted EBITDA reconciliation) | 7.6 | 3.2 | 24.7 | 7.0 | 12.1 | 15.5 | 31.7 | USD millions | Reported in the issuer's reconciliation; the face of the nine-month 2026 statement gives 31.8 (44.4 less 12.6) | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 59; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 |
| EBITDA (Reported) | 295.0 | 384.2 | 454.6 | 151.8 | 217.5 | 280.9 | 521.6 | USD millions | Calculated: net income + interest expense, net + income tax expense + depreciation and amortization; the issuer states no unadjusted EBITDA (calculations C1 to C7) | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 70, 71; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 59; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 3, 27 |
| EBITDA (Adjusted) | 329.2 | 457.2 | 645.5 | 160.0 | 233.7 | 451.5 | 615.1 | USD millions | Reported by the issuer as Adjusted EBITDA: adds back stock-based compensation, transition costs, extinguishment losses, derivative gains, investment losses and product-correction costs; FY2024 is 457.2 in the 2025 report and 457.3 in the 2024 report | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 60; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net income | 206.3 | 418.3 | 247.1 | 145.5 | 327.1 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Depreciation and amortization | 72.8 | 80.8 | 90.4 | 66.0 | 81.1 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Stock-based compensation expense | 48.4 | 69.3 | 62.7 | 42.4 | 61.5 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Deferred income taxes | 0.5 | -136.9 | 62.2 | 42.7 | 28.5 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Non-cash interest expense | 6.7 | 7.3 | 6.2 | 5.4 | 2.1 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Loss on extinguishment of debt | Not supplied: not stated for this period | Not supplied: not stated for this period | 123.9 | 123.9 | 0.3 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Gain on derivative asset | Not supplied: not stated for this period | Not supplied: not stated for this period | -12.5 | -12.5 | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Provisions for credit losses | 2.3 | -0.2 | 5.4 | 5.2 | 1.8 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Loss (gain) on investments | -2.6 | 3.9 | Not supplied: not stated for this period | Not supplied: not stated for this period | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71 |
| Other (operating) | 2.0 | 4.9 | 7.0 | 5.0 | 0.6 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Accounts receivable | -99.4 | -16.9 | -253.2 | -43.4 | -179.6 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Accounts receivable - related party | -54.8 | 6.5 | 113.0 | -42.7 | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Inventories | -53.6 | -32.4 | -10.6 | -4.7 | -103.0 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Prepaid expenses and other assets | -42.1 | -21.9 | -81.7 | -55.5 | -6.8 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Accounts payable | -11.0 | 2.2 | 49.2 | 25.6 | 72.0 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Accrued expenses and other liabilities | 73.8 | 53.4 | 161.2 | 83.1 | 40.1 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Accrued expenses and other liabilities - related party | -3.5 | -7.9 | -1.0 | Not supplied: not stated for this period | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71 |
| Net Cash from Operating Activities | 145.7 | 430.2 | 569.3 | 386.0 | 325.7 | USD millions | Reported; interest paid sits in operating activities under US GAAP | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Capital expenditures | -75.6 | -124.9 | -191.6 | -56.5 | -113.9 | USD millions | Reported outflow, shown negative; the issuer's free cash flow deducts this line only | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Investments in developed software | -8.5 | -9.1 | -19.2 | -13.5 | -13.1 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Acquisition of other intangible assets | -25.1 | Not supplied: not stated for this period | -8.6 | Not supplied: not stated for this period | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71 |
| Cash paid for investments | -7.2 | -12.2 | Not supplied: not stated for this period | Not supplied: not stated for this period | -5.0 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Other (investing) | -3.0 | Not supplied: not stated for this period | -3.2 | Not supplied: not stated for this period | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71 |
| Net Cash from Investing Activities | -119.4 | -146.2 | -222.7 | -69.9 | -132.0 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Proceeds from issuance of senior unsecured notes, net of issuance costs | Not supplied: not stated for this period | Not supplied: not stated for this period | 440.7 | 440.7 | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Proceeds from issuance of Term Loan B, net of issuance costs | Not supplied: not stated for this period | 130.0 | 15.5 | 15.5 | 30.0 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Repayment of Term Loan B | -5.0 | -137.2 | -20.5 | Not supplied: not stated for this period | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72 |
| Repayment of equipment financings | -19.8 | -19.0 | -18.2 | Not supplied: not stated for this period | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72 |
| Repayment of Convertible Senior Notes | Not supplied: not stated for this period | Not supplied: not stated for this period | -1,052.2 | -1,052.2 | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Financing lease repayments | Not supplied: not stated for this period | -22.7 | Not supplied: not stated for this period | Not supplied: not stated for this period | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72 |
| Repayment of mortgage | -2.2 | -2.4 | -60.9 | Not supplied: not stated for this period | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72 |
| Repayment of other debt (nine-month presentation) | Not supplied: not stated for this period | Not supplied: not stated for this period | Not supplied: not stated for this period | -33.4 | -43.7 | USD millions | Reported in the nine-month reports as one line in place of the annual report's separate repayments | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Proceeds from secured borrowing | Not supplied: not stated for this period | 45.5 | 49.9 | 49.4 | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Repayment of secured borrowing | Not supplied: not stated for this period | -34.8 | -62.4 | -46.8 | -0.8 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Settlement of capped call options | Not supplied: not stated for this period | Not supplied: not stated for this period | 164.6 | 164.6 | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Repurchase of common stock | Not supplied: not stated for this period | Not supplied: not stated for this period | -59.6 | -59.6 | -300.0 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Proceeds from exercise of stock options | 16.3 | 8.2 | 19.0 | 17.2 | 0.7 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Proceeds from issuance of common stock under employee stock purchase plan | 10.6 | 11.9 | 14.9 | 7.1 | 8.9 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Payment of withholding taxes in connection with vesting of restricted stock units | -13.2 | -7.6 | -25.9 | -25.1 | -16.9 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Other (financing) | -0.3 | Not supplied: not stated for this period | Not supplied: not stated for this period | Not supplied: not stated for this period | Not supplied: not stated for this period | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72 |
| Net Cash from Financing Activities | -13.6 | -28.0 | -595.3 | -522.8 | -321.9 | USD millions | Reported; FY2024 is 28.0 in the 2025 report and 28.1 in the 2024 report | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| FX Effect on Cash | 1.8 | -6.8 | 11.5 | 10.8 | -3.5 | USD millions | Reported, signed | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Net Cash Change | Not supplied: the annual report prints 14.4 but its totals add to 14.5 | 249.2 | Not supplied: the annual report prints -237.3 but its totals add to -237.2 | Not supplied: the nine-month 2025 statement prints -195.9 but opening cash plus it is 757.5 against the printed closing 757.4 | -131.7 | USD millions | Reported total where it agrees with the three activity totals plus the exchange effect; a gap where the filing's own rounding breaks the sum | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Opening Cash | 689.8 | 704.2 | 953.4 | 953.4 | 716.1 | USD millions | Reported; cash, cash equivalents and restricted cash as the annual report words it | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Closing Cash | 704.2 | 953.4 | 716.1 | 757.4 | 584.4 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Cash Interest Paid | 49.9 | 47.1 | 50.8 | Not supplied: the interim statement states none | Not supplied: the interim statement states none | USD millions | Reported as cash paid for interest, net of amount capitalized; positive amount; the 2026 quarterly reports print none | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 105 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Cash and cash equivalents | 704.2 | 953.4 | 716.1 | 584.4 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Accounts receivable, net | 240.2 | 252.5 | 516.9 | 689.0 | USD millions | Reported; annual reports print trade receivables, the 2026 report includes unbilled receivables of 9.3 | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 8 |
| Accounts receivable trade, net - related party | 119.5 | 113.0 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Inventories | 402.6 | 430.4 | 452.6 | 552.1 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Prepaid expenses and other current assets | 116.4 | 142.0 | 228.3 | Not supplied: the 2026 report shows two lines | USD millions | Reported as one line in the annual reports | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69 |
| Prepaid expenses | Not supplied: not shown separately | Not supplied: not shown separately | 82.3 | 56.4 | USD millions | Reported in the 2026 report, with the 2025-12-31 comparative | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Other current assets | Not supplied: not shown separately | Not supplied: not shown separately | 146.0 | 159.7 | USD millions | Reported in the 2026 report, with the 2025-12-31 comparative | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Total current assets | 1,582.9 | 1,891.3 | 1,914.0 | 2,041.5 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Property, plant and equipment, net | 664.9 | 723.1 | 819.5 | 918.6 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Other intangible assets, net | 98.7 | 98.5 | 117.1 | 114.8 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Goodwill | 51.7 | 51.5 | 51.6 | 51.6 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Deferred tax assets | 1.8 | 141.8 | 82.4 | Not supplied: the 2026 report includes them in other assets | USD millions | Reported as a separate line in the annual reports | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69 |
| Other assets | 188.2 | 181.5 | 205.8 | Not supplied: the 2026 report's other assets include deferred tax assets | USD millions | Reported; annual reports exclude deferred tax assets | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69 |
| Other assets including deferred tax assets | Not supplied: not presented in this form | Not supplied: not presented in this form | 288.2 | 288.6 | USD millions | Reported in the 2026 report, with the 2025-12-31 comparative | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Total Assets | 2,588.2 | 3,087.7 | 3,190.4 | 3,415.1 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Accounts payable | 19.2 | 19.8 | 75.0 | 162.2 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Accrued expenses and other current liabilities | 373.7 | 423.9 | 586.7 | 633.1 | USD millions | Reported; FY2024 is 423.8 in the 2024 report | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Accrued expenses and other current liabilities - related party | 8.9 | 1.0 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Current portion of long-term debt | 49.4 | 83.8 | 18.4 | 19.1 | USD millions | Reported; FY2023 includes a finance lease obligation of 22.9 | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 73, 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Total current liabilities | 451.2 | 528.4 | 680.1 | 814.4 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Long-term debt, net | 1,366.4 | 1,296.1 | 930.8 | 943.0 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Other liabilities | 37.9 | 51.7 | 64.4 | 78.6 | USD millions | Reported; FY2024 is 51.6 in the 2024 report | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Total Liabilities | 1,855.5 | 1,876.1 | 1,675.2 | 1,836.0 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Common stock | 0.1 | 0.1 | 0.1 | 0.1 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 74; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Additional paid-in capital | 1,102.6 | 1,184.4 | 1,274.9 | 1,329.0 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 74; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Accumulated earnings (deficit) | -378.0 | 40.3 | 287.4 | 614.5 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 74; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Accumulated other comprehensive income (loss) | 8.0 | -13.2 | 12.5 | -2.3 | USD millions | Reported | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 74; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Treasury stock, at cost | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -60.4 | -363.3 | USD millions | Reported, shown negative | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Deferred compensation | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 0.8 | 1.1 | USD millions | Reported | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Total Equity | 732.7 | 1,211.6 | 1,515.2 | 1,579.1 | USD millions | Reported; no temporary equity | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 74; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Total Debt | 1,415.8 | 1,379.9 | 949.2 | 962.2 | USD millions | Reported: current portion plus long-term debt, net of discount and issuance costs; FY2024 is the sum of the two balance sheet lines (the 2025 report's debt note prints 1,379.8); 2026-09-30 is the issuer's total debt, net (the two balance sheet lines sum to 962.1) | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10 |
| Cash & Equivalents | 704.2 | 953.4 | 716.1 | 584.4 | USD millions | Reported; same as cash and cash equivalents | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Operating lease liabilities (not in Total Debt) | 33.0 | 42.1 | 51.9 | Not supplied: the 2026 report has no lease note | USD millions | Reported; kept outside financial debt | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 95; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 90 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_podd-20241231.htm.jsonl | Annual report, Form 10-K | FY2022 to FY2024; balance sheets at 2023-12-31 and 2024-12-31 | USD | millions | Insulet Corporation, consolidated | US GAAP | Tier 1, audited | Balance sheet at 2023-12-31, 2023 adjusted EBITDA reconciliation, 2024 notes | Prior-year figures differ from the 2025 annual report by USD 0.1 million in several lines |
| 10-K_2025-12-31_podd-20251231.htm.jsonl | Annual report, Form 10-K | FY2023 to FY2025; balance sheets at 2024-12-31 and 2025-12-31 | USD | millions | Insulet Corporation, consolidated | US GAAP | Tier 1, audited | Annual statements, debt note, maturity table, supplemental cash flow information | Cash flow totals for FY2023 and FY2025 do not add to the printed net change by USD 0.1 million, nor do the nine-month 2025 opening and closing cash |
| 10-Q_2026-03-31_podd-20260331.htm.jsonl | Quarterly report, Form 10-Q | Quarter ended 2026-03-31 | USD | millions | Insulet Corporation, consolidated | US GAAP | Tier 2b, unaudited with no auditor review stated | First-quarter Adjusted EBITDA and debt table, read only | Three-month cash flow statement only |
| 10-Q_2026-06-30_podd-20260630.htm.jsonl | Quarterly report, Form 10-Q | Quarter and six months ended 2026-06-30 | USD | millions | Insulet Corporation, consolidated | US GAAP | Tier 2b, unaudited with no auditor review stated | Six-month cash flow and revolver size, read only | Six-month cash flow statement only |
| 10-Q_2026-09-30_podd-20260930.htm.jsonl | Quarterly report, Form 10-Q | Quarter and nine months ended 2026-09-30 | USD | millions | Insulet Corporation, consolidated | US GAAP | Tier 2b, unaudited with no auditor review stated | Latest interim statements, debt, liquidity, Adjusted EBITDA | Nine-month cash flow statement only; no cash interest paid; no debt maturity schedule |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Insulet Corporation | Issuer and registrant; party to the credit agreement; the run settings name no separate borrower or parent | December 31 | USD | millions | Consolidated, with subsidiaries | US GAAP | FY2023 to FY2025 income statement and cash flow; balance sheets at 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30; 2026 quarter and nine-month statements |
| Insulet MA Securities Corporation | Named as a party to the credit agreement amendments; its role and statements are not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no separate statements |

The report's period-end and later events are flagged here with their dates: the credit agreement was amended on 2026-09-21 and is inside the 2026-09-30 figures; the board authorised a USD 1 billion repurchase programme in October 2026 and the Federal Circuit denied a rehearing petition on 2026-10-19, both after the balance sheet date and outside every period figure.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Unadjusted EBITDA derived from components | 10-K_2025-12-31_podd-20251231.htm.jsonl; 10-K_2024-12-31_podd-20241231.htm.jsonl; 10-Q_2026-09-30_podd-20260930.htm.jsonl | Derived measure | Not supplied: the issuer states no unadjusted EBITDA | EBITDA (Reported) as in the income statement table | Net income plus interest expense, net plus income tax plus depreciation and amortization, so the issuer's own add-backs bridge it to Adjusted EBITDA | FY2023 to FY2025; Q3 2025; Q3 2026; 9M 2025; 9M 2026 |
| FY2024 total debt taken from the balance sheet lines | 10-K_2025-12-31_podd-20251231.htm.jsonl | Source choice | 1,379.8 (debt note) | 1,379.9 (83.8 plus 1,296.1) | The balance sheet lines are the carrying value; the 0.1 difference is rounding in the note | FY2024 |
| 2026-09-30 total debt taken as the issuer's total | 10-Q_2026-09-30_podd-20260930.htm.jsonl | Source choice | 962.1 (19.1 plus 943.0) | 962.2 (total debt, net) | The issuer states 962.2 in its debt note and capitalization table; the two balance sheet lines sum to 0.1 less | 2026-09-30 |
| FY2024 comparatives taken from the 2025 annual report | 10-K_2025-12-31_podd-20251231.htm.jsonl; 10-K_2024-12-31_podd-20241231.htm.jsonl | Source choice | Operating cash flow 430.3; net financing -28.1; Adjusted EBITDA 457.3 (2024 report) | 430.2; -28.0; 457.2 (2025 report) | A later official filing controls its comparative; both figures stay visible in the definition conflict register | FY2024 |
| FY2023 balance sheet taken from the 2024 annual report | 10-K_2024-12-31_podd-20241231.htm.jsonl | Source choice | Not supplied: the 2025 annual report prints no 2023 balance sheet | As printed in the 2024 report | The only source for the 2023 year-end | FY2023 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Total revenue | LTM to 2026-09-30 | USD 2,708.1m | USD 2,405.4m | USD 1,924.3m | USD 3,189.2m | Calculated | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 | Last twelve months is FY2025 plus 9M 2026 less 9M 2025; the nine-month periods are the comparable stubs |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 454.6m | USD 521.6m | USD 280.9m | USD 695.3m | Calculated | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 | Last twelve months is FY2025 plus 9M 2026 less 9M 2025; the nine-month periods are the comparable stubs |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 645.5m | USD 615.1m | USD 451.5m | USD 809.1m | Calculated | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 | Last twelve months is FY2025 plus 9M 2026 less 9M 2025; the nine-month periods are the comparable stubs |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 569.3m | USD 325.7m | USD 386.0m | USD 509.0m | Calculated | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 | Last twelve months is FY2025 plus 9M 2026 less 9M 2025; the nine-month periods are the comparable stubs |
| Capital expenditures | LTM to 2026-09-30 | USD 191.6m | USD 113.9m | USD 56.5m | USD 249.0m | Calculated | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 | Last twelve months is FY2025 plus 9M 2026 less 9M 2025; the nine-month periods are the comparable stubs |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1,415.8 | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 73, 96 | 295.0 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2023 / 2023-12-31 | USD | US$m | 4.80 | Calculated | Tier 1 | Carrying value of debt; reported EBITDA is calculated from the issuer's components |
| Net debt / EBITDA | (Total debt - cash) / EBITDA (Reported) | 711.6 | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 73, 96 | 295.0 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2023 / 2023-12-31 | USD | US$m | 2.41 | Calculated | Tier 1 | Carrying value of debt; reported EBITDA is calculated from the issuer's components |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 295.0 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | 49.9 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 105 | FY2023 / 2023-12-31 | USD | US$m | 5.91 | Calculated | Tier 1 | reported EBITDA is calculated from the issuer's components |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 1,415.8 | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 73, 96 | 329.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2023 / 2023-12-31 | USD | US$m | 4.30 | Calculated | Tier 1 | Carrying value of debt; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | (Total debt - cash) / EBITDA (Adjusted) | 711.6 | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 73, 96 | 329.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2023 / 2023-12-31 | USD | US$m | 2.16 | Calculated | Tier 1 | Carrying value of debt; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 329.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | 49.9 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 105 | FY2023 / 2023-12-31 | USD | US$m | 6.60 | Calculated | Tier 1 | issuer-adjusted EBITDA |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1,379.9 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91 | 384.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2024 / 2024-12-31 | USD | US$m | 3.59 | Calculated | Tier 1 | Carrying value of debt; reported EBITDA is calculated from the issuer's components |
| Net debt / EBITDA | (Total debt - cash) / EBITDA (Reported) | 426.5 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91 | 384.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2024 / 2024-12-31 | USD | US$m | 1.11 | Calculated | Tier 1 | Carrying value of debt; reported EBITDA is calculated from the issuer's components |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 384.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | 47.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 105 | FY2024 / 2024-12-31 | USD | US$m | 8.16 | Calculated | Tier 1 | reported EBITDA is calculated from the issuer's components |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 1,379.9 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91 | 457.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2024 / 2024-12-31 | USD | US$m | 3.02 | Calculated | Tier 1 | Carrying value of debt; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | (Total debt - cash) / EBITDA (Adjusted) | 426.5 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91 | 457.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2024 / 2024-12-31 | USD | US$m | 0.93 | Calculated | Tier 1 | Carrying value of debt; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 457.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | 47.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 105 | FY2024 / 2024-12-31 | USD | US$m | 9.71 | Calculated | Tier 1 | issuer-adjusted EBITDA |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 949.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91 | 454.6 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2025 / 2025-12-31 | USD | US$m | 2.09 | Calculated | Tier 1 | Carrying value of debt; reported EBITDA is calculated from the issuer's components |
| Net debt / EBITDA | (Total debt - cash) / EBITDA (Reported) | 233.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91 | 454.6 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2025 / 2025-12-31 | USD | US$m | 0.51 | Calculated | Tier 1 | Carrying value of debt; reported EBITDA is calculated from the issuer's components |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 454.6 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | 50.8 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 105 | FY2025 / 2025-12-31 | USD | US$m | 8.95 | Calculated | Tier 1 | reported EBITDA is calculated from the issuer's components |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 949.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91 | 645.5 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2025 / 2025-12-31 | USD | US$m | 1.47 | Calculated | Tier 1 | Carrying value of debt; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | (Total debt - cash) / EBITDA (Adjusted) | 233.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91 | 645.5 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | FY2025 / 2025-12-31 | USD | US$m | 0.36 | Calculated | Tier 1 | Carrying value of debt; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 645.5 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 71 | 50.8 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 105 | FY2025 / 2025-12-31 | USD | US$m | 12.71 | Calculated | Tier 1 | issuer-adjusted EBITDA |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 962.2 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10 | 695.3 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 (T4.8) | 2026-09-30 | USD | US$m | 1.38 | Calculated | Tier 2b | Carrying value of debt; reported EBITDA is calculated from the issuer's components; last twelve months built in the constructed period register |
| Net debt / EBITDA | (Total debt - cash) / EBITDA (Reported) | 377.8 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10 | 695.3 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 (T4.8) | 2026-09-30 | USD | US$m | 0.54 | Calculated | Tier 2b | Carrying value of debt; reported EBITDA is calculated from the issuer's components; last twelve months built in the constructed period register |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 695.3 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 (T4.8) | Not supplied: cash interest paid for the last twelve months is not stated | Not supplied: the interim statements state none | 2026-09-30 | USD | US$m | Not calculable: the denominator is not stated | Not Calculable | Tier 2b | Interim cash interest is not printed, so a last-twelve-months cover cannot be built |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 962.2 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10 | 809.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 (T4.8) | 2026-09-30 | USD | US$m | 1.19 | Calculated | Tier 2b | Carrying value of debt; issuer-adjusted EBITDA; last twelve months built in the constructed period register |
| Net debt / adjusted EBITDA | (Total debt - cash) / EBITDA (Adjusted) | 377.8 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10 | 809.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 (T4.8) | 2026-09-30 | USD | US$m | 0.47 | Calculated | Tier 2b | Carrying value of debt; issuer-adjusted EBITDA; last twelve months built in the constructed period register |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 809.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 (T4.8) | Not supplied: cash interest paid for the last twelve months is not stated | Not supplied: the interim statements state none | 2026-09-30 | USD | US$m | Not calculable: the denominator is not stated | Not Calculable | Tier 2b | Interim cash interest is not printed, so a last-twelve-months cover cannot be built |
| Gross margin | Gross profit / Total revenue x 100 | 1,939.9 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 | 2,708.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 | FY2025 | USD | US$m | 71.63 | Calculated | Tier 1 | Percent |
| Revenue growth | Total revenue FY2025 / Total revenue FY2024 - 1 | 2,708.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 | 2,071.6 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 | FY2025 | USD | US$m | 30.73 | Calculated | Tier 1 | Percent change |
| Revenue growth | Total revenue FY2024 / Total revenue FY2023 - 1 | 2,071.6 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 | 1,697.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 | FY2024 | USD | US$m | 22.07 | Calculated | Tier 1 | Percent change |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Total revenue x 100 | 645.5 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56 | 2,708.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 | FY2025 | USD | US$m | 23.84 | Calculated | Tier 1 | Percent |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Total revenue x 100 | 809.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 | 3,189.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 | 2026-09-30 | USD | US$m | 25.37 | Calculated | Tier 2b | Percent |
| Free cash flow conversion | Free cash flow / EBITDA (Adjusted) x 100 | 377.7 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 60 | 645.5 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56 | FY2025 | USD | US$m | 58.51 | Calculated | Tier 1 | Percent |
| Capital expenditure intensity | Capital expenditures / Total revenue x 100 | 191.6 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71 | 2,708.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 | FY2025 | USD | US$m | 7.08 | Calculated | Tier 1 | Percent |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2026 (%) | Q3 2025 (%) | 9M 2026 (%) | 9M 2025 (%) | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Growth | Total revenue growth, reported | 19.2 | Not supplied: not stated as a percentage for this period | 25.0 | Not supplied: not stated as a percentage for this period | Up on the prior-year period | Issuer-reported percent change in total revenue; source 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 20 and page 21 |
| Growth | Total revenue growth, constant currency | 19.6 | Not supplied: not stated for this period | 23.8 | Not supplied: not stated for this period | Up on the prior-year period | Issuer-reported non-GAAP measure; source 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 20, 21 |
| Growth | U.S. Omnipod revenue growth | 14.7 | Not supplied: not stated for this period | 20.6 | Not supplied: not stated for this period | Up on the prior-year period | Issuer-reported; excludes drug delivery; source 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 20, 21 |
| Growth | International Omnipod revenue growth | 31.7 | Not supplied: not stated for this period | 40.8 | Not supplied: not stated for this period | Up on the prior-year period | Issuer-reported, reported-currency basis; source 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 20, 21 |
| Margin | Gross margin, issuer-reported | 75.1 | 72.2 | 71.7 | 71.3 | Up on the prior-year period | Issuer-reported; the third-quarter figure includes a 90 basis point benefit from a lower warranty accrual; source 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 24 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA is unadjusted; adjusted EBITDA is shown beside it, labelled | The issuer states only Adjusted EBITDA: net income plus interest expense, net, income tax, depreciation and amortization, stock-based compensation and other significant items | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 | All periods | FY2025 reported 454.6 against adjusted 645.5, a difference of 190.9 or 42.0% of reported; 9M 2026 reported 521.6 against adjusted 615.1 | Financial foundation; Fundamental credit; Earnings quality | Charts and ratios use calculated reported EBITDA; adjusted ratios are separate labelled rows |
| Total debt, carrying against principal | Carrying value, with the principal difference logged | The debt note prints principal by instrument and a total, net of discount and issuance costs | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10 | 2025-12-31 and 2026-09-30 | Carrying 949.2 against principal 962.4 at 2025-12-31 (13.2); carrying 962.2 against principal 973.8 at 2026-09-30 (11.6) | Financial foundation; Refinancing & LME | Leverage uses carrying value; principal is in the reconciliation table |
| Product-correction cost (multi-figure event) | All figures with their roles in one row; none chosen silently | Net charge 38.5 in the discussion; accrued liability 37.0 less a reduction of 10.7 in the notes; Adjusted EBITDA add-back 32.2; total expected about 50 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10, 20, 27 | 9M 2026 | Figures range from 26.3 net of reductions to 38.5; the report does not reconcile them | Earnings quality; Fundamental credit | The Adjusted EBITDA add-back of 32.2 is the figure inside Adjusted EBITDA; the other figures are shown for context and no one is called the cost |
| Free cash flow | Levered free cash flow, stating whether capitalised software is included | Operating cash flow less capital expenditures; excludes investments in developed software | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 5, 31 | FY2023 to 9M 2026 | 9M 2026 issuer figure 211.7; after USD 13.1m of developed software 198.6 | Fundamental credit; Liquidity | The issuer's figure is shown and labelled; the software outflow is shown beside it |
| Prior-year comparatives | A later official filing controls a comparative; the earlier figure stays visible | FY2024 figures differ by 0.1 between the 2024 and 2025 annual reports in several lines | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 75, 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 71, 91 | FY2023 and FY2024 | Total debt 1,379.9 against 1,379.8; operating cash flow 430.3 against 430.2; net financing -28.1 against -28.0; Adjusted EBITDA 457.3 against 457.2 | Financial foundation | The 2025 report is used for FY2023 to FY2025 flows; both figures are recorded |
| Related-party revenue | Total revenue as one measure | Revenue and revenue to a related party were shown separately until the distributor stopped being a related party on 2025-10-01 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 3, 6 | FY2023 to 9M 2025 | Related-party revenue 511.6 of 2,708.1 in FY2025; totals are unaffected | Financial foundation; Business & governance | Total revenue is used for ratios and growth |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and annual interest cover to FY2025 | Ready with Limitations | Reported EBITDA is calculated because the issuer states none; rounding differences of 0.1 in prior-year figures | Use the labelled ratios; read adjusted ratios beside them |
| Leverage at 2026-09-30 | Ready with Limitations | EBITDA is a constructed last twelve months; the debt total differs by 0.1 between the balance sheet lines and the debt note | Use the constructed figure and keep the limitation |
| Cash interest cover for the last twelve months | Not Ready | Cash interest paid is not stated for any interim period | Obtain cash paid for interest for the nine months of 2026 and 2025 |
| Liquidity | Ready with Limitations | Letters of credit outstanding not stated after 2024-12-31; repurchase allocation ambiguous | Obtain the letters of credit balance and the repurchase plan detail |
| Maturity wall | Ready with Limitations | Ladder drawn at 2025-12-31; no schedule at 2026-09-30; 2031 amount is a subtraction | Obtain the 2026-09-30 maturity table |
| Covenant or priority analysis | Not Ready | No executed credit agreement or indenture supplied | Obtain the executed documents |
| Discrete quarterly cash flows | Ready with Limitations | Cash flow statements are year to date only; discrete quarters would be derived by subtraction | Derive by subtraction and label as calculated |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolving Credit Facility | Senior secured revolver | Not supplied: carrying value is not disclosed by instrument | 0.0 | 0.0 | 750.0 | Secured by substantially all assets of the issuer and the subsidiary guarantors | Senior to all unsecured debt | USD | 0.0 | Not applicable | SOFR plus 1.25% to 1.75% by total leverage ratio | floating | SOFR | 125 to 175 | Not supplied: not stated | 2030 | Not applicable | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 11, 32; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 92 |
| Term Loan B | Senior secured term loan | Not supplied: carrying value is not disclosed by instrument | 473.8 | 473.8 | Not applicable | Secured by substantially all assets of the issuer and the subsidiary guarantors | Senior to all unsecured debt | USD | 473.8 | Not applicable | SOFR plus 1.75% | floating | SOFR | 175 | Not supplied: not stated after the 2026 refinancing | 2031 | Not supplied: the term loan's own schedule is not stated | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10, 11; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 92 |
| Senior unsecured notes | Senior unsecured notes | Not supplied: carrying value is not disclosed by instrument | 450.0 | 450.0 | Not applicable | Unsecured | Junior to credit agreement borrowings | USD | 450.0 | Not applicable | 6.5% | fixed | Not applicable | Not applicable | Not applicable | 2033 (April) | 0.0 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10, 11 |
| Equipment financings | Secured equipment loans | Not supplied: carrying value is not disclosed by instrument | 24.9 | 24.9 | Not applicable | Secured by manufacturing lines at the Acton facility | Not supplied: ranking is not stated | USD | 24.9 | Not applicable | Effective rates 4.27% to 10.44% (2025-12-31) | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 2028 | Not supplied: not stated | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 91, 92 |
| Costa Rica plant financing | Build-to-suit obligation and land finance lease | Not supplied: carrying value is not disclosed by instrument | 25.1 | 25.1 | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 25.1 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 2028 | Not supplied: not stated | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10, 11 |
| Financing cost adjustment | Unamortized debt discount (3.0) and debt issuance costs (8.6) | -11.6 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -11.6 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10 |

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM to 2026-09-30 | Unit | Source |
|---|---|---|---|---|---|---|
| Total revenue | 1,697.1 | 2,071.6 | 2,708.1 | 3,189.2 | US$m | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| Gross profit | 1,159.9 | 1,445.7 | 1,939.9 | Not supplied: last twelve months not built | US$m | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 |
| Operating income | 220.1 | 308.9 | 473.8 | Not supplied: last twelve months not built | US$m | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 |
| EBITDA (Reported) | 295.0 | 384.2 | 454.6 | 695.3 | US$m | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 70, 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 |
| EBITDA (Adjusted) | 329.2 | 457.2 | 645.5 | 809.1 | US$m | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 60; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 |
| Net income | 206.3 | 418.3 | 247.1 | Not supplied: last twelve months not built | US$m | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70 |
| Net Cash from Operating Activities | 145.7 | 430.2 | 569.3 | 509.0 | US$m | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Capital expenditures | 75.6 | 124.9 | 191.6 | 249.0 | US$m | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Free cash flow (operating cash flow less capital expenditures) | 70.1 | 305.3 | 377.7 | 260.0 | US$m | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 60, 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Total Debt | 1,415.8 | 1,379.9 | 949.2 | 962.2 | US$m | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10 |
| Cash & Equivalents | 704.2 | 953.4 | 716.1 | 584.4 | US$m | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 |
| Net debt | 711.6 | 426.5 | 233.1 | 377.8 | US$m | Calculations C8 to C11 |
| Total debt / EBITDA (Reported) | 4.80 | 3.59 | 2.09 | 1.38 | x | T4.9 Calculation register |
| Net debt / EBITDA (Reported) | 2.41 | 1.11 | 0.51 | 0.54 | x | T4.9 Calculation register |
| EBITDA (Reported) / cash interest | 5.91 | 8.16 | 8.95 | Not supplied: not calculable | x | T4.9 Calculation register |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 4.80 | 2.41 | x | Reported EBITDA calculated from the issuer's components; carrying value of debt |
| FY2024 / 2024-12-31 | 3.59 | 1.11 | x | Reported EBITDA calculated from the issuer's components; carrying value of debt |
| FY2025 / 2025-12-31 | 2.09 | 0.51 | x | Reported EBITDA calculated from the issuer's components; carrying value of debt |
| 2026-09-30 | 1.38 | 0.54 | x | Reported EBITDA calculated from the issuer's components; carrying value of debt; EBITDA is the last twelve months to 2026-09-30 |

Reported EBITDA is calculated because the issuer states only an adjusted figure, so these ratios are higher than the same ratios on Adjusted EBITDA, which sit in the calculation register.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2023 / 2023-12-31 | 5.91 | x | Reported EBITDA over cash paid for interest, net of amount capitalized |
| FY2024 / 2024-12-31 | 8.16 | x | Reported EBITDA over cash paid for interest, net of amount capitalized |
| FY2025 / 2025-12-31 | 8.95 | x | Reported EBITDA over cash paid for interest, net of amount capitalized |
| 2026-09-30 | Not supplied: cash interest paid for the last twelve months is not stated | x | The quarterly reports state no cash interest paid, so no last-twelve-months cover is built |

Cover uses cash paid for interest net of amounts capitalized, not interest expense.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 704.2 | 300.0 | US$m | Cash as reported; revolver commitment of 300.0 with nothing drawn, before letters of credit of 20.9 whose link to the revolver is not stated |
| FY2024 / 2024-12-31 | 953.4 | 300.0 | US$m | Cash as reported; revolver commitment of 300.0 with nothing drawn, before letters of credit of 0.8 whose link to the revolver is not stated |
| FY2025 / 2025-12-31 | 716.1 | 500.0 | US$m | Cash as reported; revolver commitment of 500.0 with nothing drawn; letters of credit are not stated |
| 2026-09-30 | 584.4 | 750.0 | US$m | Cash as reported; revolver commitment of 750.0 with nothing drawn after the September 2026 amendment; letters of credit are not stated |

Undrawn facilities are shown before any letters of credit, which later reports do not state.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 18.4 | US$m | Principal due, from the maturity of debt table at 2025-12-31 |
| FY2027 | 19.4 | US$m | Principal due, from the maturity of debt table at 2025-12-31 |
| FY2028 | 12.1 | US$m | Principal due, from the maturity of debt table at 2025-12-31 |
| FY2029 | 5.0 | US$m | Principal due, from the maturity of debt table at 2025-12-31 |
| FY2030 | 5.0 | US$m | Principal due, from the maturity of debt table at 2025-12-31 |
| FY2031 | 452.5 | US$m | Calculated: principal of 962.4 less the five years above and the 450.0 notes, which leaves the term loan due in 2031 |
| FY2033 | 450.0 | US$m | Principal, with the notes due April 2033 |

The ladder is drawn at 2025-12-31 because the quarterly reports print no maturity table, so it predates the September 2026 refinancing and the Costa Rica financing.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 1,697.1 | 329.2 | US$m | Total revenue and issuer-adjusted EBITDA, twelve months |
| FY2024 / 2024-12-31 | 2,071.6 | 457.2 | US$m | Total revenue and issuer-adjusted EBITDA, twelve months |
| FY2025 / 2025-12-31 | 2,708.1 | 645.5 | US$m | Total revenue and issuer-adjusted EBITDA, twelve months |
| 2026-09-30 | 3,189.2 | 809.1 | US$m | Total revenue and issuer-adjusted EBITDA, twelve months; last twelve months to 2026-09-30 constructed as FY2025 plus 9M 2026 less 9M 2025 |

Adjusted EBITDA is the issuer's own measure in every row and adds back stock-based compensation and one-off items.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolving Credit Facility | 1 | Yes | 0.0 | 0.00 | US$m | Drawn amount; nothing outstanding at 2026-09-30 against a USD 750 million commitment; borrowings under the credit agreement are guaranteed by certain wholly owned domestic subsidiaries and secured by substantially all assets |
| Term Loan B | 1 | Yes | 473.8 | 0.68 | US$m | Principal; same credit agreement, guarantors and security as the revolver; cumulative debt 473.8 over last-twelve-months reported EBITDA; excludes USD 50.0 million of equipment and plant financings whose ranking is not stated |
| Senior unsecured notes due 2033 | 2 | No | 450.0 | 1.33 | US$m | Principal; unsecured and junior to the credit agreement borrowings; the obligors and any guarantors are not stated in the filings; cumulative debt 923.8 over last-twelve-months reported EBITDA |

The stack excludes equipment financings and the Costa Rica plant financing, whose ranking no source states, so cumulative leverage is below total debt over EBITDA.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2025 | 454.6 | US$m | Opening: calculated reported EBITDA (calculation C3) |
| Stock-based compensation expense | 62.7 | US$m | Issuer add-back; share-based compensation; realisation not stated |
| CEO and CFO transition | 9.3 | US$m | Issuer add-back; severance benefits for the former chief executive and chief financial officers; realisation not stated |
| Loss on extinguishment of debt | 123.9 | US$m | Issuer add-back; repurchase of the convertible notes; non-cash premium and costs; realisation not stated |
| Gain on derivative asset | -12.5 | US$m | Issuer deduction; change in fair value of the derivative asset on the convertible notes redemption |
| Loss on investments | 7.5 | US$m | Issuer add-back; losses on debt and equity investments; realisation not stated |
| EBITDA (Adjusted), FY2025 | 645.5 | US$m | Closing: issuer-reported Adjusted EBITDA |

The opening figure is calculated reported EBITDA and the add-backs are the issuer's own, so the bridge reconciles exactly for FY2025 only.

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2023 / 2023-12-31 | 1,415.8 | 704.2 | 711.6 | US$m | Carrying value, including a finance lease obligation of 22.9; contractual principal is 1,433.3 (calculation C28) |
| FY2024 / 2024-12-31 | 1,379.9 | 953.4 | 426.5 | US$m | Carrying value from the balance sheet lines; the 2025 report's debt note prints 1,379.8; no finance lease; contractual principal is 1,393.0 in the 2024 report and 1,392.9 in the 2025 report (calculation C29) |
| FY2025 / 2025-12-31 | 949.2 | 716.1 | 233.1 | US$m | Carrying value; contractual principal is 962.4 (calculations C12 to C14); no finance lease or securitization |
| 2026-09-30 | 962.2 | 584.4 | 377.8 | US$m | Carrying value as the issuer states total debt, net; principal is 973.8 including the Costa Rica plant financing and equipment financings; reported at the balance sheet date, not pro forma |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 962.4 | -13.2 | 949.2 | US$m | Ladder drawn at 2025-12-31; reconciling items are unamortized debt discount -3.5 and debt issuance costs -9.7, with no debt left out of the ladder (calculations C12 to C14) |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Board authorised a USD 1 billion repurchase programme through 2028 and expects to allocate about USD 400 million to 2026 repurchases from existing cash | Not supplied: the source states October 2026 only | Not supplied: the report does not say how much of the allocation is spent after 2026-09-30 | Not supplied: the amount spent after 2026-09-30 is not stated | Not supplied: the amount spent after 2026-09-30 is not stated | US$m | Source 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 17 and 33; an authorisation and an expected allocation, not an executed repurchase; the report does not say whether the allocation includes the USD 300 million accelerated repurchase completed by 2026-03-31, so the effect on net debt is not established; events between 2025-12-31 and 2026-09-30 are already inside the 2026-09-30 balance sheet |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 60 |
| Calculated | 27 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 5 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 12 |

## Calculations

Each figure below is worked from the printed inputs; amounts are USD million unless a unit is shown, and the ratios themselves are in the calculation register.

| Calculation ID | What is worked | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | EBITDA (Reported) FY2023 | 206.3 + 7.6 + 8.3 + 72.8 | 295.0 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 70, 71; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 59; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 3, 27 |
| C2 | EBITDA (Reported) FY2024 | 418.3 + 3.2 + -118.1 + 80.8 | 384.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 70, 71; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 59; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 3, 27 |
| C3 | EBITDA (Reported) FY2025 | 247.1 + 24.7 + 92.4 + 90.4 | 454.6 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 70, 71; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 59; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 3, 27 |
| C4 | EBITDA (Reported) Q3 2025 | 87.6 + 7.0 + 35.2 + 22.0 | 151.8 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 70, 71; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 59; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 3, 27 |
| C5 | EBITDA (Reported) Q3 2026 | 141.1 + 12.1 + 36.1 + 28.2 | 217.5 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 70, 71; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 59; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 3, 27 |
| C6 | EBITDA (Reported) 9M 2025 | 145.5 + 15.5 + 53.9 + 66.0 | 280.9 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 70, 71; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 59; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 3, 27 |
| C7 | EBITDA (Reported) 9M 2026 | 327.1 + 31.7 + 81.7 + 81.1 | 521.6 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 56, 70, 71; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 59; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 3, 27 |
| C8 | Net debt at FY2023 / 2023-12-31 | 1,415.8 less 704.2 | 711.6 | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 73, 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10 |
| C9 | Net debt at FY2024 / 2024-12-31 | 1,379.9 less 953.4 | 426.5 | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 73, 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10 |
| C10 | Net debt at FY2025 / 2025-12-31 | 949.2 less 716.1 | 233.1 | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 73, 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10 |
| C11 | Net debt at 2026-09-30 | 962.2 less 584.4 | 377.8 | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 73, 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69, 91; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10 |
| C12 | Contractual principal at 2025-12-31 from the debt table | 477.5 + 450.0 + 34.9 | 962.4 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 60, 91 |
| C13 | Debt maturing in 2031: the term loan, as the principal less the five years stated and the notes | 962.4 less 59.9 (18.4 + 19.4 + 12.1 + 5.0 + 5.0) less 450.0 | 452.5 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 60, 93 |
| C14 | Reconciling items and carrying value at 2025-12-31 | -3.5 + -9.7; then 962.4 + -13.2 | -13.2; 949.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 91, 93 |
| C15 | Last twelve months revenue | 2,708.1 + 2,405.4 less 1,924.3 | 3,189.2 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 3 |
| C16 | Last twelve months EBITDA (Reported) | 454.6 + 521.6 less 280.9 | 695.3 | Calculations C3, C6, C7 |
| C17 | Last twelve months EBITDA (Adjusted) | 645.5 + 615.1 less 451.5 | 809.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 |
| C18 | Last twelve months operating cash flow and capital expenditures | 569.3 + 325.7 less 386.0; 191.6 + 113.9 less 56.5 | 509.0; 249.0 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| C19 | EBITDA bridge FY2025 closes | 454.6 + 62.7 + 9.3 + 123.9 + -12.5 + 7.5 | 645.5; issuer-reported 645.5 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56 |
| C20 | Total principal and carrying value at 2026-09-30 | 24.9 + 25.1 + 473.8 + 450.0; less 3.0 and 8.6 | 973.8; 962.2; the revolver shows a dash and the report states nothing outstanding | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10, 32 |
| C21 | Financing cost adjustment at 2026-09-30 | -3.0 + -8.6 | -11.6 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10 |
| C22 | Cumulative leverage in the debt stack | 0.0 / 695.3; 473.8 / 695.3; (473.8 + 450.0) / 695.3 | 0.00; 0.68; 1.33 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10 |
| C23 | Free cash flow, operating cash flow less capital expenditures | FY2023 145.7 less 75.6; FY2024 430.2 less 124.9; FY2025 569.3 less 191.6; 9M 2026 325.7 less 113.9; last twelve months 509.0 less 249.0 | 70.1; 305.3; 377.7; 211.7; 260.0 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| C24 | Free cash flow after investments in developed software, 9M 2026 | 211.7 less 13.1 | 198.6 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 5, 31 |
| C25 | Gap between adjusted and reported EBITDA, FY2025 | 645.5 less 454.6; and as a share of reported 190.9 / 454.6 | 190.9; 42.0% | Calculations C3 and C19 |
| C26 | Change in operating cash flow, 9M 2026 against 9M 2025 | 325.7 less 386.0 | -60.3 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| C27 | Change in revolver size between the second- and third-quarter reports | 750 less 500 | 250 | 10-Q_2026-06-30_podd-20260630.htm.jsonl, page 29; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 32 |
| C28 | Contractual principal at 2023-12-31 from the 2024 report debt table | 2.7 + 15.2 + 63.3 + 800.0 + 12.7 + 29.0 + 487.5 + 22.9; less 6.4 and 11.1 | 1,433.3; carrying 1,415.8 | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 96 |
| C29 | Contractual principal at 2024-12-31 | 2024 report: 8.6 + 61.0 + 800.0 + 17.5 + 23.4 + 482.5; 2025 report: 8.7 + 60.9 + 800.0 + 40.8 + 482.5; less 5.4 and 7.7 | 1,393.0 and 1,392.9; carrying 1,379.9 and 1,379.8 | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 91 |

## Gaps

Each line states what is missing or unreconciled, what it restricts, its severity and the action that would close it.

- Debt maturities at 2026-09-30 are not printed in any quarterly report, which restricts the maturity wall to the table at 2025-12-31 and leaves the 2031 amount as a subtraction; severity High; the action is to obtain the 2026-09-30 maturity table.
- Letters of credit outstanding are not stated after 2024-12-31, and the filings do not say whether any reduce revolver availability, which restricts net availability under the revolver; severity High; the action is to obtain the letters of credit balance at 2026-09-30.
- Cash interest paid is not stated for any interim period, which makes the last twelve months interest cover not calculable; severity Medium; the action is to obtain cash paid for interest for the nine months of 2026 and 2025.
- The product-correction cost is stated as a net charge, an accrued liability before reductions, an adjusted EBITDA add-back and a total estimate that the report does not reconcile, which restricts the one-off cost used in earnings quality; severity Medium; the action is to state every figure with its role and ask the issuer to reconcile them.
- The report does not say whether the planned 2026 repurchases include the accelerated repurchase already completed, which restricts the post-balance-sheet effect on net debt, so no pro forma net debt or leverage is stated; severity Medium; the action is to read the fourth-quarter report.
- The annual report prints a net change in cash for FY2023 and FY2025 that differs by 0.1 from the sum of its operating, investing, financing and exchange totals, and the nine-month 2025 statement's opening cash plus its net change is 0.1 above its printed closing cash, so the net change is not stated for those three columns; severity Low; the action is none beyond noting the source rounding.
- Prior-year figures differ by 0.1 between the 2024 and 2025 annual reports for total debt, operating cash flow, net financing cash flow, operating income for 2023 and adjusted EBITDA, which restricts exactness at the first decimal; severity Low; the action is to cite the report used.
- The 2026 reports re-present prepaid expenses, other current assets, deferred tax assets and other assets, so those lines are not comparable across all columns of the balance sheet; severity Low; the action is to map by arithmetic as shown in the definition conflict register.
- The statements print a dash for several lines in several periods (related-party revenue, loss on extinguishment of debt, treasury stock, related-party receivables and others); the dash is treated as a missing value, not zero, which restricts only those cells; severity Low; the action is to confirm nil with the issuer if the line is needed.
- The cash flow statements of the 2026 quarterly reports are year to date, so discrete quarterly cash flows are not stated and would have to be derived by subtraction; severity Low; the action is to derive and label them as calculated.
- The issuer reports one segment and gives revenue by geography and between Omnipod and drug delivery; no segment revenue schedule with eliminations is stated, so none is built; severity Low; the action is none.
- The ranking of the equipment financings and the Costa Rica plant financing against the credit agreement is not stated, so they are left out of the debt stack; severity Medium; the action is to obtain the executed documents.
- No unadjusted EBITDA is stated by the issuer, so reported EBITDA is calculated from the issuer's components and its own add-backs; severity Medium; the action is to read reported ratios as calculated.
- No maintenance or growth split of capital expenditure is stated, so only total capital expenditure is carried; severity Low; the action is none.

## Next module

The orchestrator selects the next module.
