## Request

Financial foundation for Accendra Health Inc/Va/ (ach-75252) as of 2026-11-18 under the credit_snapshot pathway. Scope is the continuing business of Accendra Health, Inc.: FY2024 and FY2025 annual statements, nine-month 2025 and 2026 interim statements, carrying-value debt, liquidity and the last-twelve-months position at 2026-09-30. EBITDA is calculated because the issuer states only an adjusted figure.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_ach_omi-20241231x10k.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024, filed under the registrant's former name, Owens & Minor, Inc. | 2025-02-28 (signing date; filing date not stated) | 7abcc3ad1ad6942a1740e9f4e3ecc8abff34404d5d8dd814485320cf7a89d091 | Pre-sale perimeter only: segment and debt tables that show why FY2024 differs from the restated figures. No figure of it enters the statement tables. |
| 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025, filed by Accendra Health, Inc. | 2026-02-20 (signing date; filing date not stated) | 395c79aff733a615875543944a69ec5fc1354aa6536ac7ba28ecde58affc9f48 | FY2024 and FY2025 income statement, cash flow statement and balance sheet on the continuing perimeter; revenue by product category; Adjusted EBITDA and free cash flow reconciliations; debt note; revolver availability; contractual obligations. |
| 10-Q_2026-03-31_ach_ach-20260331x10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-11 (signing date; filing date not stated) | d45f23eb1e2f53bb46ccb939ee573610bac6886d5da7931b7b22e289cc553940 | Pre-refinancing debt table and the statement that the Term Loan A and the revolver were due within twelve months; read for events, no figure of it enters the tables. |
| 10-Q_2026-06-30_ach_ach-20260630x10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-10 (signing date; filing date not stated) | 9cd2a6facc4284cd345f81a06c75d1f09c9c57bbd5a2bd902e6dc05daa7cd850 | Read for the June 2026 refinancing and the exhibit list of executed documents; no figure of it enters the tables. |
| 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-05 (signing date; filing date not stated) | 5e003d46bff3eb4380b63c4325b17fba227e3633d379bcc3b0545642449ef87a | Nine-month 2026 and 2025 statements, balance sheet at 2026-09-30, debt note and maturity ladder, liquidity, subsequent events, Adjusted EBITDA and free cash flow reconciliations, revenue by product category. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | ec961d7a311f6091900ef7071bcc4a93c4e051d4d4cb47ddee17a664128e8f1b | Source inventory, perimeter rule (the 2025 annual report and later filings control the continuing business), conflicts and gaps; no financial figure is imported from it. |

No external source was used.

## Findings

### Bottom line

Accendra's leverage is high and its earnings base is shrinking: net debt is 8.05x last-twelve-months EBITDA before add-backs and that EBITDA covers cash interest only 1.67x, so creditors depend on the June 2026 refinancing and the revolver, not on cash generation, to carry the turnaround.
Basis: 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–33; calculation C03; calculation C08; calculation C23; calculation C24

On the issuer's adjusted measure net leverage is 6.74x, up from 4.72x at the end of 2025, because adjusted EBITDA fell 41.64% in nine months 2026 after a commercial payor terminated contracts while net debt fell only 2.24%. Undrawn revolver of USD 238 million is the main liquidity; a USD 110 million principal recapture liability and USD 65 million owed to the buyer of the sold business sit outside the debt figure.
Basis: 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 11; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 12–13; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 18; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 26; calculation C15; calculation C19; calculation C23; calculation C26

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl | Annual Form 10-K | FY2025 with FY2024 and FY2023 restated to continuing operations | USD | thousands, except per share data | Accendra Health, Inc. and subsidiaries; continuing operations, single segment | US GAAP | Tier 1 audited statements; Adjusted EBITDA and free cash flow are non-GAAP | FY2024 and FY2025 statements, debt, revolver availability, reconciliations | Cash flow statement is consolidated and shows discontinued operations on their own lines; no unadjusted EBITDA is stated. |
| 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl | Quarterly Form 10-Q | Quarter and nine months ended 2026-09-30 with 2025 comparatives; balance sheet at 2026-09-30 and 2025-12-31 | USD | thousands, except per share data | Accendra Health, Inc. and subsidiaries; continuing operations, single segment | US GAAP | Tier 2b unaudited interim | Nine-month statements, latest balance sheet, debt note, liquidity, subsequent events | Cash flow statement is year to date only; no discrete third-quarter cash flow. |
| 10-K_2024-12-31_ach_omi-20241231x10k.htm.jsonl | Annual Form 10-K (former name Owens & Minor, Inc.) | FY2024 with 2023 and 2022 comparatives, before the sale of Products & Healthcare Services | USD | thousands, except per share data | Consolidated including the sold business; two segments | US GAAP | Tier 1 audited statements | Perimeter comparison only | Not a comparison base for the continuing business; differs from the restated FY2024 (see definition conflicts). |
| 10-Q_2026-03-31_ach_ach-20260331x10q.htm.jsonl | Quarterly Form 10-Q | Quarter ended 2026-03-31 | USD | thousands, except per share data | Continuing operations | US GAAP | Tier 2b unaudited interim | Events: refinancing commitments announced 2026-05-11 | Capital structure before the June 2026 refinancing; no figure of it enters the tables. |
| 10-Q_2026-06-30_ach_ach-20260630x10q.htm.jsonl | Quarterly Form 10-Q | Quarter and six months ended 2026-06-30 | USD | thousands, except per share data | Continuing operations | US GAAP | Tier 2b unaudited interim | Events: June 2026 refinancing; exhibit list | No figure of it enters the tables; the executed indentures and amendments it lists are not supplied. |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Accendra Health, Inc. (formerly Owens & Minor, Inc.) | Registrant and reporting parent; issuer of the 2032 and 2033 secured notes; Parent Borrower under the credit agreement amendments | December 31 | USD | thousands | Consolidated subsidiaries, continuing operations since the sale of Products & Healthcare Services on 2025-12-31 | US GAAP | FY2024; FY2025; nine months 2025 and 2026; balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30 |
| Wholly owned domestic subsidiaries | Guarantors of the secured notes (not named in the filings) | December 31 | USD | thousands | No separate financial statements printed | US GAAP | Not supplied: no guarantor financial information in the sources |
| Accendra Funding LLC and Byram Healthcare Centers, Inc. | Seller and originator under the receivables sale programme | December 31 | USD | thousands | Receivables sold are removed from the consolidated balance sheet | US GAAP | Programme data at 2026-09-30 and 2025-12-31 |

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

Balance-sheet figures are instants at the period end: the FY2024 and FY2025 columns are 2024-12-31 and 2025-12-31 and the 9M 2026 balance-sheet column is 2026-09-30. The interim statements carry no discrete third-quarter cash flow, so quarters are used only for revenue and Adjusted EBITDA in the KPI dashboard. Events after 2026-09-30 are the receivables programme amendment of 2026-10-29, the chief executive succession of 2026-10-05 and two NYSE notices; none is blended into period figures.
Basis: 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 1; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 23; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 26; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 42

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Reporting basis retained | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4 | Presentation only | USD thousands; US GAAP; consolidated | USD thousands in statement tables; US$m in the money tables | No FX conversion and no perimeter adjustment; the money tables divide the printed thousands by 1,000 exactly, keeping three decimals | FY2024; FY2025; 9M 2025; 9M 2026 |
| FY2024 taken from the 2025 annual report | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–82; 10-K_2024-12-31_ach_omi-20241231x10k.htm.jsonl, pages 98–99 | Perimeter selection | FY2024 as first reported: net revenue 10,700,883; total assets 4,656,156 (consolidated, USD thousands) | FY2024 restated: net revenue 2,680,112; total assets 4,656,156 with held-for-sale lines (continuing operations) | The sale of Products & Healthcare Services completed on 2025-12-31, so the restated figures are the comparable continuing series | FY2024 |
| Total debt at balance-sheet carrying value | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 16 | Calculated aggregation | Current portion of long-term debt and long-term debt as two lines | Total Debt: 1,841,259 (2024-12-31); 2,049,876 (2025-12-31); 1,754,966 (2026-09-30) | Debt is the carrying value net of unamortized costs; principal is kept separately (reconciliation table) | FY2024; FY2025; 9M 2026 |
| EBITDA (Reported) calculated | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4 | Calculated; Analyst Judgement on definition | Issuer states no unadjusted EBITDA | Loss from continuing operations before income taxes plus interest expense, net plus depreciation and amortization from the cash flow statement: -41,038; 219,754; 135,258; 130,177 (USD thousands) | Method step 4: derive from components when not stated. Debt-extinguishment, financing-fee and other non-operating items stay inside, as an unadjusted measure should | FY2024; FY2025; 9M 2025; 9M 2026 |
| Last twelve months to 2026-09-30 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–33 | Calculated derived period | FY2025, 9M 2026 and 9M 2025 as separate columns | LTM = FY2025 + 9M 2026 - 9M 2025 (constructed register) | All three components are reported on the continuing perimeter, so they are comparable | LTM to 2026-09-30 |
| Dash read as missing | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4 | Presentation only | A dash printed in a statement | Not supplied: the source prints a dash | A dash is a missing value, not zero, in every statement table | All statement columns |
| Dash read as no scheduled principal in the maturity ladder | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 18 | Analyst Judgement | Dash printed for 2027, 2028 and 2031 | 0 in the maturity ladder | The schedule lists every year to 2033 and its total reconciles to the instrument principals, so a dash there states that nothing falls due | FY2027; FY2028; FY2031 |
| Cash flow statement perimeter | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 | Presentation only | Consolidated statement with discontinued operations on their own lines | Kept as printed; totals include those lines | Closing cash of 49,382 at FY2024 includes cash inside held-for-sale assets; the balance sheet shows 27,572 for the continuing business | FY2024; FY2025; 9M 2025 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net revenue | 2,680,112 | 2,762,032 | 2,053,065 | 1,842,789 | USD thousands | Reported; FY Tier 1, 9M Tier 2b | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Cost of net revenue | 1,399,732 | 1,472,733 | 1,087,024 | 1,040,049 | USD thousands | Reported; includes patient service equipment depreciation | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Gross profit (calculated) | 1,280,380 | 1,289,299 | 966,041 | 802,740 | USD thousands | Calculated: net revenue less cost of net revenue; the issuer prints no gross profit line | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2; calculation C16 |
| Selling, general and administrative expenses | 1,082,344 | 1,067,560 | 796,061 | 748,248 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Goodwill impairment charge | 307,112 | Not supplied: the source prints a dash | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported; FY2024 charge in the former Apria reporting unit | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Transaction breakage fee | Not supplied: the source prints a dash | 80,000 | 80,000 | Not supplied: the source prints a dash | USD thousands | Reported; cash paid to Rotech on 2025-06-05 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Acquisition-related charges and intangible amortization | 61,848 | 95,832 | 66,603 | 63,433 | USD thousands | Reported; includes USD 22 million of Rotech acquisition costs in FY2024 and FY2025 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Exit and realignment charges, net | 46,806 | 18,447 | 16,826 | 7,750 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Total operating costs and expenses | 2,897,842 | 2,734,572 | 2,046,514 | 1,859,480 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Operating income (loss) | -217,730 | 27,460 | 6,551 | -16,691 | USD thousands | Reported; operating income before interest | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Interest expense, net | 107,566 | 107,183 | 79,252 | 104,509 | USD thousands | Reported accrued expense net of interest income; not cash paid; 9M 2025 carried an allocation of interest to discontinued operations | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Transaction financing fees, net | Not supplied: the source prints a dash | 18,288 | 18,288 | Not supplied: the source prints a dash | USD thousands | Reported; Rotech financing costs | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Loss on modification and extinguishment of debt | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the source prints a dash | 17,296 | USD thousands | Reported; June 2026 refinancing fees | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Other expense, net | 4,589 | 3,942 | 2,993 | 2,197 | USD thousands | Reported; mainly interest cost and actuarial losses on the retirement plan | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Loss from continuing operations before income taxes | -329,885 | -101,953 | -93,982 | -140,693 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Income tax provision (benefit) | 20,850 | 729 | -743 | -27,194 | USD thousands | Reported accrued tax; cash taxes paid are in the cash flow statement | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Loss from continuing operations, net of tax | -350,735 | -102,682 | -93,239 | -113,499 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Loss from discontinued operations, net of tax | -11,951 | -997,960 | -951,077 | -1,738 | USD thousands | Reported; the sold Products & Healthcare Services business | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Net loss | -362,686 | -1,100,642 | -1,044,316 | -115,237 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Depreciation and amortization | 181,281 | 214,524 | 149,988 | 166,361 | USD thousands | Reported in the cash flow statement; the issuer's reconciliation splits it into other depreciation and amortization and intangible amortization | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Share-based compensation expense | 16,638 | 12,873 | 9,125 | 9,207 | USD thousands | Reported in the cash flow statement | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Interest income | Not supplied: interest is reported net of interest income | Not supplied: interest is reported net of interest income | Not supplied: interest is reported net of interest income | Not supplied: interest is reported net of interest income | USD thousands | Not separately stated | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| EBITDA (Reported) | -41,038 | 219,754 | 135,258 | 130,177 | USD thousands | Calculated: loss from continuing operations before income taxes + interest expense, net + depreciation and amortization; the issuer states no unadjusted EBITDA | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4; calculation C04; calculation C05; calculation C06; calculation C07 |
| EBITDA (Adjusted) | 370,515 | 374,847 | 284,827 | 166,232 | USD thousands | Issuer-reported Adjusted EBITDA (non-GAAP); add-backs in the EBITDA bridge; includes stranded costs of the sold business; no house adjustment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 |

### Segment schedule

| Product category (single reportable segment) | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Diabetes | 777,483 | 783,370 | 579,788 | 580,222 | USD thousands | Reported disaggregation of net revenue within one reportable segment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 63; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 27 |
| Sleep therapy | 702,950 | 740,052 | 549,280 | 460,433 | USD thousands | Reported disaggregation of net revenue within one reportable segment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 63; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 27 |
| Home respiratory therapy | 435,954 | 433,050 | 325,388 | 277,297 | USD thousands | Reported disaggregation of net revenue within one reportable segment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 63; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 27 |
| Ostomy | 195,923 | 212,838 | 154,666 | 162,239 | USD thousands | Reported disaggregation of net revenue within one reportable segment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 63; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 27 |
| Wound care | 192,407 | 188,508 | 141,469 | 121,239 | USD thousands | Reported disaggregation of net revenue within one reportable segment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 63; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 27 |
| Urology | 107,121 | 116,022 | 85,815 | 89,796 | USD thousands | Reported disaggregation of net revenue within one reportable segment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 63; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 27 |
| Other | 268,274 | 288,192 | 216,659 | 151,563 | USD thousands | Reported disaggregation of net revenue within one reportable segment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 63; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 27 |
| Net revenue | 2,680,112 | 2,762,032 | 2,053,065 | 1,842,789 | USD thousands | Reported total; equals the income statement line | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |

The issuer reports one operating and reporting segment, so product categories are a revenue disaggregation, not segments, and no segment profit or corporate and eliminations row exists.
Basis: 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 22–23; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 118

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net loss | -362,686 | -1,100,642 | -1,044,316 | -115,237 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Loss from discontinued operations, net of tax | 11,951 | 997,960 | 951,077 | 1,738 | USD thousands | Reported add-back; discontinued operations' cash flows appear on their own lines | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Depreciation and amortization | 181,281 | 214,524 | 149,988 | 166,361 | USD thousands | Reported noncash adjustment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Goodwill impairment charge | 307,112 | Not supplied: the source prints a dash | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported noncash adjustment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Share-based compensation expense | 16,638 | 12,873 | 9,125 | 9,207 | USD thousands | Reported noncash adjustment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Loss on extinguishment of debt | 1,101 | Not supplied: the source prints a dash | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported noncash adjustment; 9M 2026 refinancing fees are in financing costs paid | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Deferred income tax benefit | -8,042 | -17,887 | -17,042 | -50,789 | USD thousands | Reported noncash adjustment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Changes in operating lease right-of-use assets and lease liabilities | 1,472 | 735 | 4,535 | -344 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Gain from sale of non-core asset | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the source prints a dash | -32,544 | USD thousands | Reported operating reconciliation; proceeds are in investing | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Gain from sale and dispositions of patient service equipment | -35,355 | -27,274 | -16,385 | -64,667 | USD thousands | Reported operating reconciliation; proceeds are in investing | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Accounts receivable, net | -3,677 | 122,363 | 15,539 | -11,416 | USD thousands | Reported change in working capital | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Inventories | -4,591 | -6,854 | 3,734 | -9,994 | USD thousands | Reported change in working capital | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Accounts payable | 66,894 | 6,478 | -20,284 | 28,773 | USD thousands | Reported change in working capital; includes separation costs owed to the buyer of the sold business | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Accrued interest expense | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | 4,697 | 19,204 | USD thousands | Reported change; printed separately in the interim statements only | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Accrued payroll and related liabilities | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | -28,447 | -11,143 | USD thousands | Reported change; printed separately in the interim statements only | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Net change in other assets and liabilities | -36,026 | -56,779 | 1,345 | -25,669 | USD thousands | Reported change | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Other, net (operating) | 7,614 | 8,999 | 6,159 | 3,025 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Cash used for operating activities from discontinued operations | 17,809 | -256,286 | -189,701 | Not supplied: the statement prints no such line for this period | USD thousands | Reported; the sold business | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | 161,495 | -101,790 | -169,976 | -93,495 | USD thousands | Reported after interest, taxes and working capital; includes discontinued operations in FY2024, FY2025 and 9M 2025 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Proceeds from P&HS sale | Not supplied: the statement prints no such line for this period | 342,351 | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Cash sold with P&HS sale | Not supplied: the statement prints no such line for this period | -18,091 | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Additions to patient service equipment and other fixed assets | -170,286 | -190,956 | -145,542 | -128,395 | USD thousands | Reported total capital expenditure on equipment and fixed assets; no maintenance and growth split | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Proceeds from sale of patient service equipment | 69,926 | 77,968 | 53,369 | 125,042 | USD thousands | Reported; 9M 2026 includes equipment sold after a commercial payor terminated contracts | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Additions to computer software | -12,379 | -10,369 | -7,308 | -2,822 | USD thousands | Reported capital expenditure | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Proceeds from sale of non-core asset | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the source prints a dash | 32,521 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Other, net (investing) | 14,703 | -1,910 | -1,910 | 2,100 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Cash used for investing activities from discontinued operations | -18,497 | -54,570 | -39,190 | Not supplied: the statement prints no such line for this period | USD thousands | Reported; the sold business | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | -116,533 | 144,423 | -140,581 | 28,446 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Borrowings under amended Receivables Financing Agreement | 1,465,800 | Not supplied: the source prints a dash | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Repayments under amended Receivables Financing Agreement | -1,465,800 | Not supplied: the source prints a dash | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Borrowings under Revolving Credit Agreement | 635,800 | 2,914,784 | 2,442,484 | 697,600 | USD thousands | Reported; gross draws | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Repayments under Revolving Credit Agreement | -635,800 | -2,711,284 | -2,171,784 | -866,100 | USD thousands | Reported; gross repayments | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Proceeds from debt issuance | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the source prints a dash | 1,237,315 | USD thousands | Reported; the 2032 notes | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Repayments of debt | -244,197 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | -1,237,315 | USD thousands | Reported; Term Loan A extinguished with the 2032 note proceeds | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Financing costs paid | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the source prints a dash | -21,182 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Repurchase of common stock | Not supplied: the source prints a dash | -10,179 | -6,656 | Not supplied: the source prints a dash | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Other, net (financing) | -5,826 | -3,116 | -3,375 | -610 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Cash provided by (used for) financing activities from discontinued operations | -17,580 | -2,127 | 44,905 | Not supplied: the statement prints no such line for this period | USD thousands | Reported; the sold business | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | -267,603 | 188,078 | 305,574 | -190,292 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| FX Effect on Cash | -901 | 1,896 | 1,767 | -40 | USD thousands | Reported effect of exchange rate changes on cash | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Net Cash Change | -223,542 | 232,607 | -3,216 | -255,381 | USD thousands | Reported net increase (decrease) in cash, cash equivalents and restricted cash; operating plus investing plus financing plus FX effect | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Opening Cash | 272,924 | 49,382 | 49,382 | 281,989 | USD thousands | Reported cash, cash equivalents and restricted cash at the start of the period | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Closing Cash | 49,382 | 281,989 | 46,166 | 26,608 | USD thousands | Reported; consolidated, so FY2024 includes 21,810 of cash inside held-for-sale assets (balance sheet cash 27,572) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 101 |
| Cash Interest Paid | 141,547 | 134,710 | 96,138 | 90,185 | USD thousands | Reported interest paid, the positive amount; consolidated perimeter, including interest on debt that was allocated to the sold business while owned | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Income taxes paid, net | 5,553 | 12,471 | 8,784 | 21,605 | USD thousands | Reported supplemental disclosure; cash tax | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |
| Unpaid purchases of patient service equipment and other fixed assets at end of period | 84,562 | 74,119 | 71,823 | 61,862 | USD thousands | Reported noncash investing activity | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 82–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash & Equivalents | 27,572 | 281,989 | 26,608 | USD thousands | Reported cash and cash equivalents; FY2024 is the continuing business | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Accounts receivable, net | 218,270 | 95,907 | 107,323 | USD thousands | Reported; receivables sold under the programme are removed from the balance sheet | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Inventories, net | 67,581 | 74,435 | 82,103 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Other current assets | 82,240 | 95,540 | 57,886 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Current assets held for sale - discontinued operations | 1,625,354 | Not supplied: the source prints a dash | Not supplied: the statement prints no such line for this period | USD thousands | Reported; the sold business at 2024-12-31 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Total current assets | 2,021,017 | 547,871 | 273,920 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Patient service equipment and other fixed assets, net | 249,283 | 256,161 | 218,237 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Operating lease assets | 126,928 | 109,099 | 92,376 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Goodwill | 1,228,140 | 1,228,140 | 1,228,140 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Intangible assets, net | 210,056 | 136,465 | 73,032 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Other assets, net | 89,539 | 174,025 | 193,209 | USD thousands | Reported; includes the retained 5% equity interest in the sold business at 2025-12-31 and 2026-09-30 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Noncurrent assets held for sale - discontinued operations | 731,193 | Not supplied: the source prints a dash | Not supplied: the statement prints no such line for this period | USD thousands | Reported; the sold business at 2024-12-31 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Total Assets | 4,656,156 | 2,451,761 | 2,078,914 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Accounts payable | 359,927 | 363,565 | 381,885 | USD thousands | Reported; at 2026-09-30 includes USD 65 million of separation costs owed to the buyer of the sold business | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Accrued payroll and related liabilities | 73,678 | 69,426 | 32,706 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Current portion of long-term debt | 42,866 | 250,000 | 35,000 | USD thousands | Reported; at 2026-09-30 the revolver borrowings classed as an anticipated repayment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Other current liabilities | 294,685 | 264,084 | 221,905 | USD thousands | Reported; includes the current portion of operating lease liabilities | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Current liabilities held for sale - discontinued operations | 1,080,896 | Not supplied: the source prints a dash | Not supplied: the statement prints no such line for this period | USD thousands | Reported; the sold business at 2024-12-31 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Total current liabilities | 1,852,052 | 947,075 | 671,496 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Long-term debt, excluding current portion | 1,798,393 | 1,799,876 | 1,719,966 | USD thousands | Reported carrying value net of unamortized deferred financing costs | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Operating lease liabilities, excluding current portion | 89,466 | 70,317 | 60,531 | USD thousands | Reported; outside the debt figure | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Deferred income taxes, net | 19,436 | Not supplied: the source prints a dash | Not supplied: the statement prints no such line for this period | USD thousands | Reported liability at 2024-12-31 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Other liabilities | 72,551 | 95,471 | 195,151 | USD thousands | Reported; at 2026-09-30 includes USD 110 million of net principal recapture from the refinancing, a noncash liability outside the debt figure | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Noncurrent liabilities held for sale - discontinued operations | 237,894 | Not supplied: the source prints a dash | Not supplied: the statement prints no such line for this period | USD thousands | Reported; the sold business at 2024-12-31 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Total Liabilities | 4,069,792 | 2,912,739 | 2,647,144 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Common stock | 154,398 | 152,777 | 153,849 | USD thousands | Reported; par value USD 2 per share | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Paid-in capital | 454,151 | 466,882 | 474,210 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| (Accumulated deficit) retained earnings | 27,159 | -1,079,752 | -1,194,989 | USD thousands | Reported; FY2024 revised for an accounts-payable over-accrual correction (USD 21 million in total equity) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Accumulated other comprehensive loss | -49,344 | -885 | -1,300 | USD thousands | Reported | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Total Equity | 586,364 | -460,978 | -568,230 | USD thousands | Reported total (deficit) equity; no temporary equity or noncontrolling interest printed | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Total Debt | 1,841,259 | 2,049,876 | 1,754,966 | USD thousands | Calculated: current portion of long-term debt plus long-term debt, carrying value net of unamortized deferred financing costs; contains no leases (operating lease liabilities are separate lines); principal is USD 1,787.823 million at 2026-09-30 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 16; calculation C17 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolving Credit Agreement | Revolving credit facility | 35,000 | 35,000 | 35,000 | 300,000 | Secured: described as secured indebtedness under the credit agreements; relative lien priority not stated | Not supplied: relative rank to the other secured instruments is not stated | USD | 35,000 | Not applicable | Spread over a benchmark rate; level not stated | Floating | Benchmark rate per the agreement (not named in the note) | Not supplied: the filings state no spread | Not supplied: the filings state no floor | January 2030 (earlier springing maturity, no earlier than December 2028) | 0 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 16–18; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 37–38 |
| Term Loan B | Term loan | 504,453 | 511,000 | 511,000 | Not applicable | Secured: described as secured indebtedness under the credit agreements; relative lien priority not stated | Not supplied: relative rank to the other secured instruments is not stated | USD | 504,453 | Not applicable | Term SOFR or Base Rate plus an Applicable Rate; level not stated | Floating | Term SOFR or Base Rate | Not supplied: the filings state no spread | Not supplied: the filings state no floor | March 2029 | 0 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 16–18; principal printed as USD 511 million, rounded |
| 4.500% Senior Notes, due March 2029 | Senior unsecured notes | 338 | 338 | Not applicable | Not applicable | Unsecured; effectively subordinated to secured indebtedness | Below the secured instruments | USD | 338 | Not applicable | 4.500% | Fixed | Not applicable | Not applicable | Not applicable | March 2029 | 0 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 16–18; principal printed as USD 0.3 million; USD 338 thousand is the ladder amount net of the term loan |
| 6.625% Senior Notes, due April 2030 | Senior unsecured notes | 4,170 | 4,170 | Not applicable | Not applicable | Unsecured; effectively subordinated to secured indebtedness | Below the secured instruments | USD | 4,170 | Not applicable | 6.625% | Fixed | Not applicable | Not applicable | Not applicable | April 2030 | 0 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 16–18 |
| 9.000% Senior Secured First Lien Notes, due June 2032 | Senior secured first-lien notes | 520,503 | 539,250 | Not applicable | Not applicable | Secured; guaranteed on a senior secured basis by existing and future wholly owned domestic subsidiaries | First lien; priority against the credit agreement debt not stated | USD | 520,503 | Not applicable | 9.000%, paid semi-annually from 2026-12-15 | Fixed | Not applicable | Not applicable | Not applicable | June 2032 | 0 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 16–18 |
| 9.750% Senior Secured Second Lien Notes, due June 2033 | Senior secured second-lien notes | 690,502 | 698,065 | Not applicable | Not applicable | Secured; guaranteed on a senior secured basis by existing and future wholly owned domestic subsidiaries | Second lien | USD | 690,502 | Not applicable | 9.750%, paid semi-annually from 2026-12-15 | Fixed | Not applicable | Not applicable | Not applicable | June 2033 | 0 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 16–18 |

Amounts are USD thousands at 2026-09-30. The Term Loan A was extinguished on 2026-06-15 and carries no balance. The six carrying values reconcile to Total Debt of 1,754,966.
Basis: 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 16–18; calculation C17

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Net revenue | LTM to 2026-09-30 | USD 2,762.032m | USD 1,842.789m | USD 2,053.065m | USD 2,551.756m | Calculated | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 | Continuing operations in all three components; comparable stubs |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 219.754m | USD 130.177m | USD 135.258m | USD 214.673m | Calculated | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4 | Calculated from components in every stub; the issuer states no unadjusted EBITDA |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 374.847m | USD 166.232m | USD 284.827m | USD 256.252m | Calculated | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 | Issuer-adjusted; add-backs as the issuer defines them; includes stranded costs |
| Cash Interest Paid | LTM to 2026-09-30 | USD 134.710m | USD 90.185m | USD 96.138m | USD 128.757m | Calculated | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 4 | Consolidated cash interest; the FY2025 and 9M 2025 stubs include interest on debt that was allocated to the sold business while owned |
| Free cash flow (issuer definition, non-GAAP) | LTM to 2026-09-30 | USD 98.265m | USD -21.268m | USD 79.969m | USD -2.972m | Calculated | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 32 | Issuer-defined: Adjusted EBITDA plus non-cash convert-to-sale write-off less patient service equipment capital expenditure less interest paid; not operating cash flow less capital expenditure |

Each derived value is the FY2025 figure plus nine months 2026 less nine months 2025, in USD millions with three decimals; the underlying statements print thousands.
Basis: calculation C08; calculation C09; calculation C10; calculation C11; calculation C12

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Numerator Value / Denominator Value | 1,841.259 | Net debt data, Gross debt FY2024 / 2024-12-31 | -41.038 | EBITDA (Reported): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: the denominator, reported EBITDA, is not above zero | Not Calculable | Calculated from Tier 1 and Tier 2b figures | Carrying-value debt; reported EBITDA is calculated, not issuer-stated; FY2024 EBITDA is negative after the goodwill impairment charge |
| Net debt / EBITDA | Numerator Value / Denominator Value | 1,813.687 | Net debt data, Net debt FY2024 / 2024-12-31 | -41.038 | EBITDA (Reported): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: the denominator, reported EBITDA, is not above zero | Not Calculable | Calculated from Tier 1 and Tier 2b figures | Carrying-value debt; reported EBITDA is calculated, not issuer-stated; FY2024 EBITDA is negative after the goodwill impairment charge |
| EBITDA / cash interest | Numerator Value / Denominator Value | -41.038 | EBITDA (Reported): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83 | 141.547 | Cash Interest Paid: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83 | FY2024 / 2024-12-31 | USD | US$m | -0.29 | Calculated | Calculated from Tier 1 and Tier 2b figures | Cash interest paid, not accrued expense; consolidated perimeter; negative because EBITDA is negative |
| Total debt / adjusted EBITDA | Numerator Value / Denominator Value | 1,841.259 | Net debt data, Gross debt FY2024 / 2024-12-31 | 370.515 | EBITDA (Adjusted): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 68 | FY2024 / 2024-12-31 | USD | US$m | 4.97 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted EBITDA; add-backs not accepted as house adjustments |
| Net debt / adjusted EBITDA | Numerator Value / Denominator Value | 1,813.687 | Net debt data, Net debt FY2024 / 2024-12-31 | 370.515 | EBITDA (Adjusted): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 68 | FY2024 / 2024-12-31 | USD | US$m | 4.90 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted EBITDA; add-backs not accepted as house adjustments |
| Adjusted EBITDA / cash interest | Numerator Value / Denominator Value | 370.515 | EBITDA (Adjusted): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68 | 141.547 | Cash Interest Paid: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83 | FY2024 / 2024-12-31 | USD | US$m | 2.62 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted EBITDA over cash interest paid |
| Total debt / EBITDA | Numerator Value / Denominator Value | 2,049.876 | Net debt data, Gross debt FY2025 / 2025-12-31 | 219.754 | EBITDA (Reported): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83 | FY2025 / 2025-12-31 | USD | US$m | 9.33 | Calculated | Calculated from Tier 1 and Tier 2b figures | Carrying-value debt; reported EBITDA is calculated, not issuer-stated |
| Net debt / EBITDA | Numerator Value / Denominator Value | 1,767.887 | Net debt data, Net debt FY2025 / 2025-12-31 | 219.754 | EBITDA (Reported): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83 | FY2025 / 2025-12-31 | USD | US$m | 8.04 | Calculated | Calculated from Tier 1 and Tier 2b figures | Carrying-value debt; reported EBITDA is calculated, not issuer-stated |
| EBITDA / cash interest | Numerator Value / Denominator Value | 219.754 | EBITDA (Reported): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83 | 134.710 | Cash Interest Paid: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83 | FY2025 / 2025-12-31 | USD | US$m | 1.63 | Calculated | Calculated from Tier 1 and Tier 2b figures | Cash interest paid, not accrued expense; consolidated perimeter |
| Total debt / adjusted EBITDA | Numerator Value / Denominator Value | 2,049.876 | Net debt data, Gross debt FY2025 / 2025-12-31 | 374.847 | EBITDA (Adjusted): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 68 | FY2025 / 2025-12-31 | USD | US$m | 5.47 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted EBITDA; add-backs not accepted as house adjustments |
| Net debt / adjusted EBITDA | Numerator Value / Denominator Value | 1,767.887 | Net debt data, Net debt FY2025 / 2025-12-31 | 374.847 | EBITDA (Adjusted): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 68 | FY2025 / 2025-12-31 | USD | US$m | 4.72 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted EBITDA; add-backs not accepted as house adjustments |
| Adjusted EBITDA / cash interest | Numerator Value / Denominator Value | 374.847 | EBITDA (Adjusted): 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68 | 134.710 | Cash Interest Paid: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83 | FY2025 / 2025-12-31 | USD | US$m | 2.78 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted EBITDA over cash interest paid |
| Total debt / EBITDA | Numerator Value / Denominator Value | 1,754.966 | Net debt data, Gross debt 2026-09-30 | 214.673 | EBITDA (Reported): LTM constructed from 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4 | 2026-09-30 | USD | US$m | 8.18 | Calculated | Calculated from Tier 1 and Tier 2b figures | Carrying-value debt; reported EBITDA is calculated, not issuer-stated |
| Net debt / EBITDA | Numerator Value / Denominator Value | 1,728.358 | Net debt data, Net debt 2026-09-30 | 214.673 | EBITDA (Reported): LTM constructed from 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4 | 2026-09-30 | USD | US$m | 8.05 | Calculated | Calculated from Tier 1 and Tier 2b figures | Carrying-value debt; reported EBITDA is calculated, not issuer-stated |
| EBITDA / cash interest | Numerator Value / Denominator Value | 214.673 | EBITDA (Reported): LTM constructed from 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4 | 128.757 | Cash Interest Paid: LTM constructed from 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 4 | 2026-09-30 | USD | US$m | 1.67 | Calculated | Calculated from Tier 1 and Tier 2b figures | Cash interest paid, not accrued expense; consolidated perimeter |
| Total debt / adjusted EBITDA | Numerator Value / Denominator Value | 1,754.966 | Net debt data, Gross debt 2026-09-30 | 256.252 | EBITDA (Adjusted) LTM constructed from 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 | 2026-09-30 | USD | US$m | 6.85 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted EBITDA; add-backs not accepted as house adjustments |
| Net debt / adjusted EBITDA | Numerator Value / Denominator Value | 1,728.358 | Net debt data, Net debt 2026-09-30 | 256.252 | EBITDA (Adjusted) LTM constructed from 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 | 2026-09-30 | USD | US$m | 6.74 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted EBITDA; add-backs not accepted as house adjustments |
| Adjusted EBITDA / cash interest | Numerator Value / Denominator Value | 256.252 | EBITDA (Adjusted): LTM constructed from 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 | 128.757 | Cash Interest Paid: LTM constructed from 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 4 | 2026-09-30 | USD | US$m | 1.99 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted EBITDA over cash interest paid |
| Net revenue growth, FY2024 on FY2023 (%) | (Numerator Value / Denominator Value - 1) x 100 | 2,680.112 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81 | 2,552.572 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81 | FY2024 | USD | US$m | 5.00 | Calculated | Calculated from Tier 1 and Tier 2b figures | Continuing operations; FY2023 net revenue 2,552,572 USD thousands as restated in the 2025 annual report |
| Net revenue growth, FY2025 on FY2024 (%) | (Numerator Value / Denominator Value - 1) x 100 | 2,762.032 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81 | 2,680.112 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81 | FY2025 | USD | US$m | 3.06 | Calculated | Calculated from Tier 1 and Tier 2b figures | Continuing operations |
| Net revenue growth, 9M 2026 on 9M 2025 (%) | (Numerator Value / Denominator Value - 1) x 100 | 1,842.789 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 | 2,053.065 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 | 9M 2026 | USD | US$m | -10.24 | Calculated | Calculated from Tier 1 and Tier 2b figures | Continuing operations; USD 205 million of the decline is from terminated commercial payor contracts |
| Adjusted EBITDA growth, 9M 2026 on 9M 2025 (%) | (Numerator Value / Denominator Value - 1) x 100 | 166.232 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 | 284.827 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 | 9M 2026 | USD | US$m | -41.64 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted measure |
| Gross margin, FY2025 (%) | Numerator Value / Denominator Value x 100 | 1,289.299 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81 | 2,762.032 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81 | FY2025 | USD | US$m | 46.68 | Calculated | Calculated from Tier 1 and Tier 2b figures | Gross profit after patient service equipment depreciation |
| Gross margin, 9M 2026 (%) | Numerator Value / Denominator Value x 100 | 802.740 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 | 1,842.789 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 | 9M 2026 | USD | US$m | 43.56 | Calculated | Calculated from Tier 1 and Tier 2b figures | Gross profit after patient service equipment depreciation; lower collection rates cited by the issuer |
| Adjusted EBITDA margin, 9M 2026 (%) | Numerator Value / Denominator Value x 100 | 166.232 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 | 1,842.789 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 | 9M 2026 | USD | US$m | 9.02 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted measure |
| Adjusted EBITDA margin, 9M 2025 (%) | Numerator Value / Denominator Value x 100 | 284.827 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 | 2,053.065 | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 | 9M 2025 | USD | US$m | 13.87 | Calculated | Calculated from Tier 1 and Tier 2b figures | Issuer-adjusted measure |
| EBITDA (Reported) margin, LTM (%) | Numerator Value / Denominator Value x 100 | 214.673 | LTM constructed | 2,551.756 | LTM constructed | 2026-09-30 | USD | US$m | 8.41 | Calculated | Calculated from Tier 1 and Tier 2b figures | Calculated EBITDA |
| Cash plus undrawn revolver to total debt, 2026-09-30 (%) | Numerator Value / Denominator Value x 100 | 264.608 | Cash 26.608 plus undrawn revolver 238 | 1,754.966 | Total Debt 2026-09-30 | 2026-09-30 | USD | US$m | 15.08 | Calculated | Calculated from Tier 1 and Tier 2b figures | Excludes the receivables sale programme; revolver availability is as the issuer states it |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Growth | Net revenue growth (%) | 5.00 | 3.06 | Not supplied: no prior-year 9M 2024 column | -10.24 | Down | Revenue turned down in 2026 after a commercial payor terminated contracts; third quarter alone -13.69% |
| Profitability | Gross margin (%) | 47.77 | 46.68 | 47.05 | 43.56 | Down | Issuer cites lower collection rates; patient service equipment depreciation is inside cost of net revenue |
| Profitability | Adjusted EBITDA margin (%) | 13.82 | 13.57 | 13.87 | 9.02 | Down | Issuer-adjusted measure; third-quarter 2026 margin 7.94% against 13.22% a year earlier |
| Profitability | Selling, general and administrative expenses to net revenue (%) | 40.38 | 38.65 | 38.77 | 40.60 | Up | Cost base fell more slowly than revenue in 2026 |
| Cash flow | Free cash flow, issuer definition (USD thousands) | 96,414 | 98,265 | 79,969 | -21,268 | Down | Turned negative in nine months 2026; issuer definition deducts interest paid and patient service equipment capital expenditure |
| Cash flow | Patient service equipment capital expenditure to net revenue (%) | 6.22 | 6.84 | 7.00 | 6.71 | Flat to down | Issuer-defined capital expenditure on equipment; no maintenance and growth split is disclosed |
| Operating | Net revenue from terminated commercial payor contracts (USD million, period flow) | Not supplied: not stated for FY2024 | 322 | Not supplied: not stated for 9M 2025 | 37 | Down | FY2025 amount is USD 322 million (12% of net revenue); 9M 2026 amount is USD 37 million (2%); no related revenue in the third quarter of 2026 |
| Operating | Sleep therapy net revenue (USD thousands, period flow) | 702,950 | 740,052 | 549,280 | 460,433 | Down | Largest category decline in 2026, mostly the terminated payor contracts |

Trend direction is the move from the first to the last period shown; the revenue and margin declines in 2026 follow the termination of commercial payor contracts, while the cost base fell more slowly.
Basis: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 63; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 98; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 26–28; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32; calculation C19

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation | Source |
|---|---|---|---|---|---|---|---|---|
| Debt principal against carrying value | Total Debt at balance-sheet carrying value | Contractual principal per the maturity ladder | Unamortized issuance costs and discounts | 2026-09-30 | Principal 1,787.823 against carrying 1,754.966 US$m: difference 32.857 | Leverage and the principal-to-carrying reconciliation | Use carrying value for ratios; a ratio on principal is 8.33x LTM reported EBITDA against 8.18x on carrying value | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 16; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 18; calculation C13; calculation C14 |
| EBITDA | Primary denominator is the issuer's unadjusted EBITDA | The issuer states only Adjusted EBITDA (non-GAAP) and no unadjusted figure | Add-backs: Rotech acquisition costs, breakage fee, financing fees, exit and realignment, stock compensation, loss on extinguishment, litigation, other | FY2024; FY2025; 9M 2025; 9M 2026 | LTM calculated EBITDA 214.673 against Adjusted 256.252 US$m: difference 41.579 | All leverage and cover ratios | Calculated reported EBITDA is primary; adjusted is shown beside it, labelled; no house adjustment | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32; calculation C08; calculation C10 |
| Interest | Cash interest paid | Interest expense, net (accrued, net of interest income) | Cash against accrual; 9M 2025 expense net of an allocation to discontinued operations; FY2025 and FY2024 cash paid is consolidated | FY2024; FY2025; 9M 2025; 9M 2026 | FY2025 expense 107.183 against cash paid 134.710 US$m | Interest cover | Cover uses cash interest paid as the method requires; the perimeter difference is not split | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83; calculation C11 |
| Perimeter of FY2024 | Continuing operations restated in the 2025 annual report | Consolidated including Products & Healthcare Services in the 2024 annual report | Sale completed on 2025-12-31; discontinued-operations presentation | FY2024 | Net revenue 10,700,883 against 2,680,112; total debt 1,853,596 against 1,841,259; cash 49,382 against 27,572 (USD thousands) | FY2024 comparatives | The restated series is used; the 2024 report is history | 10-K_2024-12-31_ach_omi-20241231x10k.htm.jsonl, pages 98–99; 10-K_2024-12-31_ach_omi-20241231x10k.htm.jsonl, page 122; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–82; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 101; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 106 |
| Free cash flow | Operating cash flow less total capital expenditure | Issuer FCF: Adjusted EBITDA plus non-cash convert-to-sale write-off less equipment capital expenditure less interest paid | Definition: the issuer's version starts from Adjusted EBITDA and excludes taxes, working capital and software spend | FY2025; 9M 2025; 9M 2026 | 9M 2026: issuer FCF -21,268 against operating cash flow -93,495 less equipment, fixed asset and software additions -131,217 (USD thousands) | Cash conversion | Issuer FCF is reported as an issuer measure; no standard FCF is computed because 9M 2025 operating cash flow includes discontinued operations | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 32 |
| Debt-like liabilities outside the debt figure | Total Debt includes every balance-sheet debt line | Principal recapture of USD 110 million sits in other liabilities; USD 65 million of separation costs owed to the buyer sits in accounts payable; receivables sold and uncollected USD 136 million are off balance sheet | Classification: noncash recapture and obligations to the buyer are not borrowings | 2026-09-30 | USD 110 million, USD 65 million and USD 136 million | Net debt and liquidity | Kept outside Total Debt; carried to the analysis as claims outside debt | 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 11; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 12–13; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 37 |
| Cash at 2024-12-31 | Balance-sheet cash and cash equivalents | Cash flow statement closing cash, restricted cash included, consolidated | Cash flow statement includes cash in held-for-sale assets | FY2024 | 49,382 against 27,572 (USD thousands); difference 21,810 is the cash inside held-for-sale assets | Opening cash of the FY2025 cash flow | Each statement keeps its own figure; the net debt table uses the balance-sheet figure | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 101; calculation C18 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | Not supplied: reported EBITDA is negative | Not supplied: reported EBITDA is negative | x | Carrying-value debt over calculated reported EBITDA; FY EBITDA; Adjusted-EBITDA ratios are in the calculation register |
| FY2025 / 2025-12-31 | 9.33 | 8.04 | x | Carrying-value debt over calculated reported EBITDA; FY EBITDA; Adjusted-EBITDA ratios are in the calculation register |
| 2026-09-30 | 8.18 | 8.05 | x | Carrying-value debt over calculated reported EBITDA; LTM to 2026-09-30 EBITDA constructed from FY2025 + 9M 2026 - 9M 2025; Adjusted-EBITDA ratios are in the calculation register |

FY2024 has no leverage figure because reported EBITDA is negative after the goodwill impairment charge, and the issuer states no covenant leverage to compare.
Basis: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4; calculation C04; calculation C05; calculation C08; calculation C23

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | -0.29 | x | Calculated EBITDA over cash interest paid; negative because FY2024 EBITDA is negative; adjusted cover is in the calculation register |
| FY2025 / 2025-12-31 | 1.63 | x | Calculated EBITDA over cash interest paid; annual; adjusted cover is in the calculation register |
| 2026-09-30 | 1.67 | x | Calculated EBITDA over cash interest paid; LTM constructed; adjusted cover is in the calculation register |

Cash interest paid is consolidated and includes interest on debt that was allocated to the sold business while it was owned, so cover is understated for the continuing business in FY2024 and FY2025.
Basis: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 4; calculation C11; calculation C24

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 27.572 | 419 | US$m | Balance-sheet cash of the continuing business; revolver undrawn with a USD 450 million commitment and USD 31 million of letters of credit, availability USD 419 million as printed |
| FY2025 / 2025-12-31 | 281.989 | 217 | US$m | Balance-sheet cash; revolver USD 450 million commitment, USD 204 million drawn and USD 30 million of letters of credit, availability USD 217 million as printed (the drawn amount is rounded) |
| 2026-09-30 | 26.608 | 238 | US$m | Balance-sheet cash; revolver USD 300 million commitment, USD 35 million drawn and USD 27 million of letters of credit, availability USD 238 million (C15); excludes the receivables sale programme |

Undrawn committed facilities are the revolver only; the receivables sale programme (limit USD 150 million, USD 136 million sold and uncollected at 2026-09-30) is not a committed facility and is excluded.
Basis: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 74; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 18; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 37–38; calculation C15

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Net revenue | 2,680.112 | 2,762.032 | 2,551.756 | US$m | Reported; LTM constructed (C09) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2 |
| Net revenue growth (%) | 5.00 | 3.06 | Not calculable: LTM to 2025-09-30 not constructed | % | Calculated; FY2024 on FY2023 and FY2025 on FY2024 (C19) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81 |
| Gross margin (%) | 47.77 | 46.68 | Not calculable: LTM cost of net revenue not constructed | % | Calculated gross profit over net revenue (C16) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81 |
| EBITDA (Reported) | -41.038 | 219.754 | 214.673 | US$m | Calculated; the issuer states none (C04, C05, C08) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4 |
| EBITDA (Adjusted) | 370.515 | 374.847 | 256.252 | US$m | Issuer-reported non-GAAP; LTM constructed (C10) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 |
| Adjusted EBITDA margin (%) | 13.82 | 13.57 | 10.04 | % | Calculated (C09, C10) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 |
| Interest expense, net | 107.566 | 107.183 | Not calculable: LTM to 2025-09-30 not constructed | US$m | Reported accrued expense; 2025 carried an allocation to discontinued operations | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81 |
| Cash interest paid | 141.547 | 134.710 | 128.757 | US$m | Reported, consolidated; LTM constructed (C11) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 4 |
| Free cash flow, issuer definition | 96.414 | 98.265 | -2.972 | US$m | Issuer non-GAAP; LTM constructed (C12) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 32 |
| Total Debt (carrying value) | 1,841.259 | 2,049.876 | 1,754.966 | US$m | Balance-sheet carrying value at 2024-12-31, 2025-12-31 and 2026-09-30 | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Net debt | 1,813.687 | 1,767.887 | 1,728.358 | US$m | Calculated total debt less cash (C01, C02, C03) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3 |
| Total debt / EBITDA (x) | Not calculable: reported EBITDA is negative | 9.33 | 8.18 | x | Calculated (register) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4 |
| Net debt / EBITDA (x) | Not calculable: reported EBITDA is negative | 8.04 | 8.05 | x | Calculated (register) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4 |
| Net debt / adjusted EBITDA (x) | 4.90 | 4.72 | 6.74 | x | Calculated (register) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32 |
| EBITDA / cash interest (x) | -0.29 | 1.63 | 1.67 | x | Calculated (register) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 4 |
| Adjusted EBITDA / cash interest (x) | 2.62 | 2.78 | 1.99 | x | Calculated (register) | 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 4 |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 35.000 | US$m | Remainder of 2026: revolver borrowings of USD 35 million, classed as current; contractual principal at 2026-09-30, excluding unamortized costs |
| FY2027 | 0.000 | US$m | The schedule prints a dash; read as no scheduled principal; contractual principal at 2026-09-30, excluding unamortized costs |
| FY2028 | 0.000 | US$m | The schedule prints a dash; read as no scheduled principal; contractual principal at 2026-09-30, excluding unamortized costs |
| FY2029 | 511.338 | US$m | Term Loan B and the 2029 unsecured notes together; contractual principal at 2026-09-30, excluding unamortized costs |
| FY2030 | 4.170 | US$m | The 2030 unsecured notes remaining after the exchange; contractual principal at 2026-09-30, excluding unamortized costs |
| FY2031 | 0.000 | US$m | The schedule prints a dash; read as no scheduled principal; contractual principal at 2026-09-30, excluding unamortized costs |
| FY2032 | 539.250 | US$m | 9.000% first-lien notes; contractual principal at 2026-09-30, excluding unamortized costs |
| FY2033 | 698.065 | US$m | 9.750% second-lien notes; contractual principal at 2026-09-30, excluding unamortized costs |

The ladder is contractual principal, not carrying value, and ignores the springing maturity that could pull the revolver forward to December 2028.
Basis: 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 18; calculation C13

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1,841.259 | 27.572 | 1,813.687 | US$m | Carrying debt: current portion 42.866 plus long-term 1,798.393 as restated; no leases inside debt; principal total not printed for this date. Calculated net debt (C01). |
| FY2025 / 2025-12-31 | 2,049.876 | 281.989 | 1,767.887 | US$m | Carrying debt: current portion 250.000 plus long-term 1,799.876; includes no leases; principal about 2,100 per the annual report narrative (USD 2.1 billion). Calculated net debt (C02). |
| 2026-09-30 | 1,754.966 | 26.608 | 1,728.358 | US$m | Carrying debt: current portion 35.000 plus long-term 1,719.966; includes no leases; principal total 1,787.823 (C13). Calculated net debt (C03); excludes USD 110 million principal recapture and USD 136 million receivables sold. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 1,787.823 | -32.857 | 1,754.966 | US$m | Ladder principal: revolver 35.000, Term Loan B and 2029 notes 511.338, 2030 notes 4.170, 2032 notes 539.250, 2033 notes 698.065. Reconciling items are net unamortized deferred financing costs and discounts: Term Loan B 504.453 against about 511.000, 2032 notes 520.503 against 539.250, 2033 notes 690.502 against 698.065 (Term Loan B principal is printed rounded to USD 511 million). Summed in C14. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | Read: the Q3 report's subsequent-events note and discussion. The 2026-10-29 receivables programme amendment extends a termination date and changes control and reporting terms without a stated change in debt; the chief executive succession and the NYSE notices change no debt. Events after 2025-12-31 such as the June 2026 refinancing are inside the 2026-09-30 balance sheet. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 | 2,680.112 | 370.515 | US$m | Annual; issuer-adjusted EBITDA (non-GAAP), not house-adjusted; revenue on the restated continuing perimeter |
| FY2025 | 2,762.032 | 374.847 | US$m | Annual; same issuer-adjusted identity and perimeter |
| LTM 2026-09-30 | 2,551.756 | 256.252 | US$m | Twelve months constructed as FY2025 + 9M 2026 - 9M 2025 (C09, C10); same identity and duration |

The EBITDA in this chart is the issuer-adjusted measure, while the leverage and interest-cover charts use calculated reported EBITDA.
Basis: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 81; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 2; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32; calculation C09; calculation C10

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolving Credit Agreement | 1 | Yes | 35.000 | 0.16 | US$m | Revolver drawn amount; credit agreement borrowers and guarantors as the agreement defines (not named in the filings); first-priority liens on the borrowers' assets are described in the 2025 annual report. Cumulative leverage is carrying-value debt through this row over LTM calculated reported EBITDA; the order inside one rank is presentational, and no source states relative priority between the first-lien notes and the credit agreement debt. |
| Term Loan B | 1 | Yes | 504.453 | 2.51 | US$m | Credit agreement debt; same tier as the revolver as described; floating rate. Cumulative leverage is carrying-value debt through this row over LTM calculated reported EBITDA; the order inside one rank is presentational, and no source states relative priority between the first-lien notes and the credit agreement debt. |
| 9.000% first-lien notes due 2032 | 1 | Yes | 520.503 | 4.94 | US$m | Issued by Accendra Health, Inc. and guaranteed by existing and future wholly owned domestic subsidiaries; described as first lien. Cumulative leverage is carrying-value debt through this row over LTM calculated reported EBITDA; the order inside one rank is presentational, and no source states relative priority between the first-lien notes and the credit agreement debt. |
| 9.750% second-lien notes due 2033 | 2 | Yes | 690.502 | 8.15 | US$m | Same issuer and guarantors; described as second lien. Cumulative leverage is carrying-value debt through this row over LTM calculated reported EBITDA; the order inside one rank is presentational, and no source states relative priority between the first-lien notes and the credit agreement debt. |
| 4.500% senior notes due 2029 | 3 | No | 0.338 | 8.16 | US$m | Unsecured; effectively subordinated to secured indebtedness; USD 0.3 million remains after the exchange. Cumulative leverage is carrying-value debt through this row over LTM calculated reported EBITDA; the order inside one rank is presentational, and no source states relative priority between the first-lien notes and the credit agreement debt. |
| 6.625% senior notes due 2030 | 3 | No | 4.170 | 8.18 | US$m | Unsecured; effectively subordinated to secured indebtedness; USD 4.2 million remains after the exchange. Cumulative leverage is carrying-value debt through this row over LTM calculated reported EBITDA; the order inside one rank is presentational, and no source states relative priority between the first-lien notes and the credit agreement debt. |

Rank 1 groups three instruments described as first-lien or first-priority secured debt without a source stating how they rank against one another, so the chart shows lien tiers and not a recovery waterfall.
Basis: 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 16–18; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 106; calculation C17; calculation C23

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| Loss from continuing operations, net of tax, as reported (GAAP) | -122.942 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Opening GAAP measure; Reported GAAP loss; the issuer states no unadjusted EBITDA, so its own reconciliation opens here. |
| Income tax provision (benefit) | -25.722 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Tax; Realised; reconciling item, not an add-back of an expense. |
| Interest expense, net | 132.440 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Interest; Realised; reconciling item. |
| Acquisition-related charges and intangible amortization | 92.662 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Transaction costs and amortization; Realisation not stated; one issuer line mixing Rotech costs and intangible amortization. |
| Transaction breakage fee | 0.000 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Transaction costs; Realised in cash: USD 80 million paid to Rotech on 2025-06-05. |
| Exit and realignment charges, net | 9.371 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Restructuring; Realisation not stated; includes P&HS separation costs and a gain on equipment sold after the payor termination. |
| Transaction financing fees, net | 0.000 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Transaction costs; Realised; Rotech financing costs. |
| Litigation and related charges | 0.326 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Other stated; Realisation not stated. |
| Other depreciation and amortization | 138.234 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Depreciation and amortization; Noncash; patient service equipment and fixed assets. |
| Stock compensation | 12.938 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Share-based compensation; Noncash expense recognised. |
| Loss on modification and extinguishment of debt | 17.296 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Other stated; Realised; June 2026 refinancing third-party fees and deferred cost write-off. |
| Other | 1.649 | US$m | Issuer reconciliation line, LTM = FY2025 + 9M 2026 - 9M 2025; classification Other stated; Realisation not stated. |
| Adjusted EBITDA (non-GAAP) | 256.252 | US$m | Closing issuer Adjusted EBITDA for the twelve months to 2026-09-30; no house acceptance of add-backs; LTM constructed (C10). |

The bridge reconciles arithmetically from the GAAP loss but does not show that the add-backs are non-recurring or eligible under any covenant definition, and its combined acquisition and intangible amortization line cannot be split from the filings.
Basis: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 68–69; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–33; calculation C10

### Financial interpretation

Leverage trajectory. At 2026-09-30 carrying-value debt is USD 1,754.966 million and net debt USD 1,728.358 million, which is 8.05x calculated reported EBITDA for the last twelve months and 6.74x on the issuer's adjusted measure. Year-end 2025 net debt was 8.04x reported and 4.72x adjusted, so the adjusted ratio worsened by about two turns while net debt fell only 2.24% (from USD 1,767.887 million), because last-twelve-months adjusted EBITDA is USD 256.252 million against USD 374.847 million for FY2025. The reported ratio looks flat because FY2025 reported EBITDA carried USD 80 million of breakage fee and other one-offs that the last twelve months no longer bear. The risk mechanism is operating, not financial: payor termination removed revenue and collection quality, and debt did not fall with it.
Basis: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 68; 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 82; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 31–32; calculation C01; calculation C02; calculation C03; calculation C08; calculation C10; calculation C20

Coverage. Calculated reported EBITDA covers cash interest paid 1.67x for the last twelve months (1.63x in FY2025) and adjusted EBITDA 1.99x, with the 9.000% and 9.750% secured notes paying their first coupons on 2026-12-15, so cash interest is likely to rise as the higher coupons on the refinanced notes start to be paid in cash (an inference; the filings give no forecast). The recapture credit that lowers reported interest expense is noncash and amortizes through the life of the secured notes, so accrued interest understates the cash burden. Cash interest paid is consolidated and includes interest on debt once allocated to the sold business, which understates continuing-business cover in FY2025.
Basis: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, page 83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 4; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 11; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 17–18; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 30; calculation C11; calculation C24

Cash-flow quality. Nine-month 2026 operating cash flow is negative, free cash flow on the issuer's definition is negative, and the management discussion states recurring losses and cash outflows from operations in 2026. Reported cash movement was cushioned by proceeds from equipment sales and a non-core asset sale; equipment sold after the payor termination produced gains inside exit and realignment charges, so some of the reported improvement in investing cash flow is liquidation of the asset base that supported the lost revenue. Strongest contrary evidence is the lower interest paid and the reduction of cash costs in selling, general and administrative expenses, which fell 6.0% in nine months; it would win only if gross margin stabilises as collections recover.
Basis: 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 3–4; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 26; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 28; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 36–37; calculation C12; calculation C19

Liquidity adequacy. Cash is USD 26.608 million and the undrawn revolver USD 238 million, together 15.08% of total debt; the revolver is the main source because cash fell by USD 255.381 million in nine months while the revolver was repaid. Claims that compete for that liquidity sit outside the debt figure: USD 65 million of reimbursable separation costs to the buyer of the sold business, with payment not required above USD 15 million before 2026-10-01 or above USD 55 million before 2027-01-01, possible credit support of up to USD 115 million under the transition services agreement, an IRS matter with USD 16 million still owed, and operating lease liabilities. No debt matures before 2029 apart from the USD 35 million of revolver borrowings, but a springing maturity could pull the revolver forward to December 2028, and the receivables programme, which funds working capital with USD 136 million sold and uncollected, has a limit of USD 150 million.
Basis: 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 3; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 12–13; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 18; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 20; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 37–38; calculation C15; calculation C21

Non-debt funding float. The receivables sale programme and the payable owed to the buyer of the sold business are working-capital funding that behaves like borrowing: both are repaid in cash and neither is in total debt. If the programme were not renewed or its eligible receivables fell with revenue, liquidity would have to come from the revolver, which is limited to USD 238 million. The October 2026 amendment moved the termination date from October 2027 to October 2029, which removes the nearest renewal date.
Basis: 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 12; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 23; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, page 37

Data-quality and definition risks. The issuer states no unadjusted EBITDA, so reported EBITDA is calculated from the pre-tax loss, net interest and depreciation and amortization; the FY2024 figure is negative after the goodwill impairment charge, so no FY2024 leverage is stated. Dashes in the statements are carried as missing, the maturity ladder dashes are read as nil, and the Term Loan B principal is printed rounded, so the principal-to-carrying reconciliation relies on that rounded figure for one line.
Basis: 10-K_2025-12-31_ach_omi-20251231x10k.htm.jsonl, pages 81–83; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 2–4; 10-Q_2026-09-30_ach_ach-20260930x10q.htm.jsonl, pages 16–18; calculation C13; calculation C14

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Reported financial and debt-service comparison on the continuing perimeter | Ready with Limitations | FY2024 and FY2025 restated figures and 2026 interim figures are complete and the statement identities hold; EBITDA is calculated, cash interest is consolidated, and 9M 2025 operating cash flow includes discontinued operations | Use the calculated reported EBITDA beside the adjusted measure; do not mix the 2024 annual report into any ratio. |
| Leverage and coverage as a covenant test | Not Ready | Covenant levels, definitions and the credit-agreement EBITDA are not in the sources; lien priority among secured instruments is not stated | Obtain the executed credit agreements and indentures before inferring any headroom. |
| Liquidity and refinancing view at 2026-09-30 | Ready with Limitations | Revolver availability and the maturity ladder are stated; receivables programme capacity depends on eligible receivables; claims outside debt are located but their timing beyond the stated caps is not | Treat the programme and the buyer payable as funding and obligations alongside debt. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 10 |
| Calculated | 9 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 0 |
| Fields present | 26 |
| Fields total | 26 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 5 |

## Calculations

| ID | Calculation | Inputs | Result | Unit | Check |
|---|---|---|---|---|---|
| C01 | Net debt at 2024-12-31 | Total debt 1,841.259 less cash 27.572 | 1,813.687 | US$m | Net debt data row |
| C02 | Net debt at 2025-12-31 | Total debt 2,049.876 less cash 281.989 | 1,767.887 | US$m | Net debt data row |
| C03 | Net debt at 2026-09-30 | Total debt 1,754.966 less cash 26.608 | 1,728.358 | US$m | Net debt data row |
| C04 | EBITDA (Reported) FY2024 | Pre-tax loss -329.885 + interest expense, net 107.566 + depreciation and amortization 181.281 | -41.038 | US$m | Statement row EBITDA (Reported) |
| C05 | EBITDA (Reported) FY2025 | Pre-tax loss -101.953 + interest expense, net 107.183 + depreciation and amortization 214.524 | 219.754 | US$m | Statement row EBITDA (Reported) |
| C06 | EBITDA (Reported) 9M 2025 | Pre-tax loss -93.982 + interest expense, net 79.252 + depreciation and amortization 149.988 | 135.258 | US$m | Statement row EBITDA (Reported) |
| C07 | EBITDA (Reported) 9M 2026 | Pre-tax loss -140.693 + interest expense, net 104.509 + depreciation and amortization 166.361 | 130.177 | US$m | Statement row EBITDA (Reported) |
| C08 | EBITDA (Reported), last twelve months to 2026-09-30 | FY2025 219.754 + 9M 2026 130.177 - 9M 2025 135.258 | 214.673 | US$m | Constructed period register |
| C09 | Net revenue, last twelve months | FY2025 2,762.032 + 9M 2026 1,842.789 - 9M 2025 2,053.065 | 2,551.756 | US$m | Constructed period register |
| C10 | Adjusted EBITDA, last twelve months | FY2025 374.847 + 9M 2026 166.232 - 9M 2025 284.827 | 256.252 | US$m | Equals the sum of the bridge rows |
| C11 | Cash interest paid, last twelve months | FY2025 134.710 + 9M 2026 90.185 - 9M 2025 96.138 | 128.757 | US$m | Constructed period register |
| C12 | Free cash flow (issuer definition), last twelve months | FY2025 98.265 + 9M 2026 -21.268 - 9M 2025 79.969 | -2.972 | US$m | Constructed period register |
| C13 | Contractual principal at 2026-09-30 | 35.000 + 0.000 + 0.000 + 511.338 + 4.170 + 0.000 + 539.250 + 698.065 | 1,787.823 | US$m | Debt principal to carrying value |
| C14 | Reconciling items | Carrying value 1,754.966 less contractual principal 1,787.823 | -32.857 | US$m | Equals the sum of net unamortized costs by instrument |
| C15 | Undrawn revolver at 2026-09-30 | Commitment 300 less drawn 35 less letters of credit 27 | 238 | US$m | Stated availability USD 238 million; difference 0 |
| C16 | Gross profit | Net revenue less cost of net revenue: FY2024 1,280,380; FY2025 1,289,299; 9M 2025 966,041; 9M 2026 802,740 | 1,280,380; 1,289,299; 966,041; 802,740 | USD thousands | Statement row |
| C17 | Total debt at carrying value | Current portion plus long-term debt: FY2024 42,866 + 1,798,393; FY2025 250,000 + 1,799,876; 9M 2026 35,000 + 1,719,966 | 1,841,259; 2,049,876; 1,754,966 | USD thousands | Equals the sum of the instrument carrying values 1,754,966 at 2026-09-30 |
| C18 | Cash difference at 2024-12-31 | Cash flow statement closing cash 49,382 less balance-sheet cash 27,572 | 21,810 | USD thousands | Equals cash inside held-for-sale assets 21,810 |
| C19 | Growth and shares | Net revenue FY2024 on FY2023 5.00% (2,680,112 / 2,552,572 - 1); FY2025 on FY2024 3.06%; 9M 2026 on 9M 2025 -10.24%; Q3 2026 on Q3 2025 -13.69% (601,775 / 697,264 - 1); Adjusted EBITDA 9M 2026 on 9M 2025 -41.64%; Q3 -48.17% | -10.24% revenue and -41.64% Adjusted EBITDA in 9M 2026 | % | Calculation register rows |
| C20 | Change in net debt, 2025-12-31 to 2026-09-30 | 1,728.358 less 1,767.887; as a share -2.24% | -39.529 | US$m | Net debt fell by that amount |
| C21 | Cash plus undrawn revolver to total debt | (26.608 + 238) / 1,754.966 x 100 | 15.08 | % | Calculation register row |
| C22 | Cash movement in 9M 2026 | Closing cash 26.608 less opening cash 281.989 | -255.381 | US$m | Equals Net Cash Change in the statement |
| C23 | Leverage ratios, 2026-09-30 (carrying value over LTM EBITDA) | Total 1,754.966 / 214.673 = 8.18; net 1,728.358 / 214.673 = 8.05; adjusted net 1,728.358 / 256.252 = 6.74; FY2025 adjusted net 1,767.887 / 374.847 = 4.72; FY2025 reported net 1,767.887 / 219.754 = 8.04 | 8.05x net reported; 6.74x net adjusted | x | Calculation register rows |
| C24 | Interest cover, last twelve months | Reported EBITDA 214.673 / cash interest 128.757 = 1.67; adjusted 256.252 / 128.757 = 1.99 | 1.67x reported; 1.99x adjusted | x | Calculation register rows |
| C25 | Debt stack cumulative leverage | Cumulative carrying value 35.000; 539.453; 1,059.956; 1,750.458; 1,750.796; 1,754.966 over 214.673 | 0.16; 2.51; 4.94; 8.15; 8.16; 8.18 | x | Last row equals Total debt / EBITDA 8.18 |
| C26 | Share of net debt change | Net debt change -39.529 over 1,767.887 | -2.24 | % | Used for the statement that net debt fell only that share |
| C27 | Principal-based leverage | Contractual principal 1,787.823 / LTM EBITDA 214.673 | 8.33 | x | Labelled alternative on principal; not the primary ratio |

## Gaps

No unadjusted EBITDA is stated by the issuer, so EBITDA (Reported) in every period is calculated from the pre-tax loss, net interest and depreciation and amortization; this restricts comparison with any covenant EBITDA and is Medium severity; closing it needs the credit agreement's EBITDA definition.

FY2024 calculated EBITDA is negative after the goodwill impairment charge, so total and net debt to EBITDA for FY2024 are not calculable; this restricts the leverage trend before 2025 and is Low severity; closing it needs no further source because adjusted figures are shown beside it.

Covenant levels, step-downs and definitions for the leverage and interest-coverage ratios the revolver and credit agreement require are not printed in any source, so covenant headroom is not calculable; this restricts any covenant conclusion and is High severity; closing it needs the executed credit agreement and amendments.

No source states how the revolver, Term Loan B, first-lien 2032 notes and second-lien 2033 notes rank against one another, so the debt stack groups the first three as one tier and carries the ordering inside it as presentation only; this restricts any priority or recovery use and is High severity; closing it needs the indentures and the intercreditor and security documents.

The Term Loan B principal and the 2029 unsecured notes principal are printed rounded (USD 511 million and USD 0.3 million), so the principal split between them is implied from the ladder; this restricts the per-instrument principal reconciliation by about USD 0.5 million and is Low severity; closing it needs the loan statements.

Margins and floors on the revolver and Term Loan B are stated only as an Applicable Rate defined in the credit agreement, and the interest rate swap was terminated in May 2026, so floating-rate cost cannot be projected from the filings; this restricts interest forecasting and is Medium severity; closing it needs the credit agreements and the current rate.

The statements print dashes for several lines, which are carried as missing rather than zero, the maturity ladder dashes are read as no scheduled principal, and interest income is not stated separately because interest is reported net; this restricts nothing numerically but affects the readers of those cells and is Low severity; closing it needs no source.

Revenue from terminated commercial payor contracts is stated for FY2025 and nine months 2026 only, and last-twelve-months growth, gross margin and interest expense are not constructed, so those cells are not supplied; this restricts trend comparison and is Low severity; closing it needs the quarterly payor disclosure.

Cash interest paid is consolidated and includes interest on debt that was allocated to the sold business while it was owned, with no split in the sources, so interest cover for FY2024, FY2025 and nine months 2025 is understated for the continuing business; this is Medium severity; closing it needs the interest paid attributable to discontinued operations.

The cash flow statements for FY2024, FY2025 and nine months 2025 are consolidated with discontinued operations on their own lines, so operating cash flow and closing cash are not continuing-business figures; no standard free cash flow is calculated and the issuer's own free cash flow is used; this is Medium severity; closing it needs a continuing-operations cash flow statement.

Maintenance and growth capital expenditure are not separated for patient service equipment and other fixed assets, so a maintenance-capital measure is not calculable; this restricts free cash flow quality and is Low severity; closing it needs management disclosure.

Receivables sold under the programme (USD 136 million uncollected at 2026-09-30), the USD 110 million principal recapture liability, the USD 65 million separation cost payable to the buyer and possible credit support of up to USD 115 million sit outside total debt; they are carried to the analysis as claims outside debt and this is Medium severity; closing it needs the programme and transition agreements.

Only the balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30 and the nine-month and annual statements are tabulated; the first and second quarters of 2026 and the discrete third-quarter cash flow are not, so quarterly cash flow trends are not shown; this is Low severity; closing it needs the 2026 quarterly statements tabulated or an earnings release.

The issuer reports one segment, so no segment profit exists and revenue is shown by product category only; this restricts segment margin analysis and is Low severity; closing it needs management segment data.

No pro forma adjustments exist after 2026-09-30 because the subsequent events state no change in debt; the nearest events, the receivables programme amendment, the chief executive succession and the NYSE notices, are dated and kept out of period figures; this is Low severity.

## Next module

The orchestrator selects the next module.
