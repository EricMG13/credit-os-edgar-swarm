## Request

Financial foundation for Teleflex Inc (issuer tfx-96943), as of 2026-11-18, under the credit snapshot pathway. Scope is the continuing-operations income statement, cash flow statement and balance sheet for FY2023 to FY2025 and nine months 2026, carrying-value debt, net debt, liquidity inputs and separately identified events after the balance-sheet date.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_tfx.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2025 | 2026-02-27 | ca18a190930817b06ede82c7f4193e62cafac28c9522702a42328fcbb19a2665 | Audited continuing-operations statements for 2025, 2024 and 2023, year-end debt note, cash interest paid, segments, quarterly data and subsequent events. |
| 10-Q_2026-09-30_tfx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-05 | 8f03d669e224d64bde8b5fb234b79af2024228b472eb63baca0684a5b3721f61 | Nine-month statements, the 2026-09-30 balance sheet, borrowings, divestiture status, segment results and events after the quarter. |
| 10-Q_2026-06-30_tfx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-06 | 435d79bd4ff37d7d4aca6c157f1e33bc6d3c083541e50d0f4b1d85d59cf20f07 | Only to state that its OEM sale proceeds differ from the September 2026 report; no statement figure is taken from it. |
| 10-Q_2026-03-31_tfx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | be5abfb11eaf8a5a52404eb0ce2061041e70f888a60268e9d565fe9a872e9d01 | Only to state that its obligor comparatives were recast later and that it prints no borrowings note; no statement figure is taken from it. |
| 10-K_2024-12-31_tfx.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2024 | 2025-02-28 | c7ca355ac9a894aec94427874e1c591385211de097514ece22017a538ff864f4 | Only the year-end 2024 revolver and letter of credit amounts and the 2024 free cash flow reconciliation; its whole-company statements are not used. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 4b2cff7ffb62a314699dd33132796b2d821db75dc4d5cebaf9a79fc2ea5eed5d | Source inventory, perimeter and version relationships, content locations and the limits on letters of credit, covenants and maturities; no financial balance is imported. |

## Findings

### Bottom line

Net leverage on continuing operations fell to 2.82x at 2026-09-30 from 7.64x at year-end 2025, mostly because OEM sale proceeds repaid debt, and pending tax payments and the Acute Care sale will move net debt in both directions before the position settles.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 3–5; 10-Q_2026-09-30_tfx.htm.jsonl, page 19; 10-Q_2026-09-30_tfx.htm.jsonl, page 54; calculation C02; calculation C05; calculation C09

Teleflex states no EBITDA, so the figure is derived from reported statement lines; the last-twelve-months result includes one-off gains from a patent settlement and tariff refunds, without which net leverage would be 3.21x, and the year-end 2025 ratio divides consolidated debt by the earnings of continuing operations only. Interest cover on cash interest was 2.48x for FY2025 and cannot be updated for 2026 because nine-month cash interest is not stated. Letters of credit under the revolver at 2026-09-30 and a debt maturity table after the May 2026 refinancing are not established.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-Q_2026-09-30_tfx.htm.jsonl, page 34; 10-Q_2026-09-30_tfx.htm.jsonl, page 36; 10-K_2025-12-31_tfx.htm.jsonl, page 141; calculation C03; calculation C04; calculation C11

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_tfx.htm.jsonl | Annual Form 10-K | FY2025 with FY2024 and FY2023 recast | USD | thousands | Teleflex Incorporated consolidated; continuing operations with discontinued operations on separate lines | US GAAP | Tier 1 audited statements | Annual statements, year-end debt and cash interest | Pre-dates the May 2026 refinancing; no EBITDA or adjusted measure is stated |
| 10-Q_2026-09-30_tfx.htm.jsonl | Quarterly Form 10-Q | Three and nine months ended 2026-09-30 against 2025-09-28; balance sheet at 2026-09-30 | USD | thousands | Same perimeter as the 2025 annual report | US GAAP | Tier 2b unaudited interim | Nine-month statements, latest balance sheet, borrowings and events after the quarter | No cash interest paid, letters of credit or maturity table; segments recast to a product basis |
| 10-Q_2026-06-30_tfx.htm.jsonl | Quarterly Form 10-Q | Three and six months ended 2026-06-30 | USD | thousands | Same perimeter | US GAAP | Tier 2b unaudited interim | Conflict check only | After-tax OEM proceeds stated differently from the September 2026 report, which controls |
| 10-Q_2026-03-31_tfx.htm.jsonl | Quarterly Form 10-Q | Three months ended 2026-03-31 | USD | thousands | Same perimeter | US GAAP | Tier 2b unaudited interim | Conflict check only | No borrowings note; obligor comparatives later recast |
| 10-K_2024-12-31_tfx.htm.jsonl | Annual Form 10-K | FY2024 with FY2023 and FY2022, whole company | USD | thousands | Whole company before the Strategic Divestitures | US GAAP | Tier 1 audited statements | Year-end 2024 revolver and letter of credit amounts only | Perimeter differs from every later source; statements are not used |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Teleflex Incorporated | Reporting parent, party to the Credit Agreement and issuer of the senior notes | December 31 | USD | thousands | Consolidated continuing operations; the Acute Care and Interventional Urology and OEM businesses are discontinued operations held for sale | US GAAP | FY2023, FY2024 and FY2025 (recast); nine months 2025 and 2026; balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30 |
| Guarantor Subsidiaries | Guarantors of the Credit Agreement and the senior notes: substantially all material domestic subsidiaries | December 31 | USD | millions | Summarized obligor group information only; the guarantor list is an exhibit that was not supplied | US GAAP | Obligor group figures at 2026-09-30 and 2025-12-31 (recast) and for nine months 2026 |

| Period | Start | End |
|---|---|---|
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-28 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2023 | 2023-01-01 | 2023-12-31 |

Balance-sheet columns are instants at the end date of the period shown. The fiscal calendar was a modified 5-4-4 calendar to 2025-12-31 and is calendar-month based from 2026-01-01, so the nine months of 2025 end on 2025-09-28 and the nine months of 2026 on 2026-09-30; the issuer states the effect is not significant. The 2025 comparative start date follows the fiscal year end of December 31.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 7

Events after the 2026-09-30 balance sheet date are kept out of period figures: the accelerated share repurchase settled on 2026-10-07 with shares only, open-market repurchases continued through the report date, the Acute Care and Interventional Urology sale had not closed, and cash taxes on the OEM gain were expected in the fourth quarter of 2026.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 52; 10-Q_2026-09-30_tfx.htm.jsonl, page 54; 10-Q_2026-09-30_tfx.htm.jsonl, page 12

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Statements kept on the continuing-operations basis of the 2025 annual report | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112 | Perimeter selection | FY2024 net revenues 3047324 in the 2024 annual report | FY2024 net revenues 1699546 in the 2025 annual report | The 2024 annual report states the whole company; the 2025 annual report recasts 2024 and 2023 to continuing operations, so only it is used for FY2024 and FY2023 | FY2024; FY2023 |
| EBITDA derived because no filing states it | 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 | Calculated; no add-backs | EBIT, depreciation and intangible amortization as printed | EBITDA (Reported) = EBIT + depreciation + intangible amortization | Reported and unadjusted: it keeps impairment, restructuring, litigation gain, tariff refund and foreign exchange hedge items inside EBIT; no house adjustment is made | All periods |
| Last-twelve-months construction | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 | Calculated | FY2025, nine months 2026 and nine months 2025 stubs | LTM = FY2025 + nine months 2026 - nine months 2025 | The stubs end 2026-09-30 and 2025-09-28; the issuer states the calendar change is not significant | 2026-09-30 |
| Thousands shown in US$m in the money tables | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 | Presentation only | USD thousands as printed | US$m, same figures divided by 1000 | Statement tables keep thousands; net debt, liquidity and ratio tables use US$m | All periods |
| One-off items identified, not removed | 10-Q_2026-09-30_tfx.htm.jsonl, page 34; 10-Q_2026-09-30_tfx.htm.jsonl, page 36; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 | Analyst Judgement, not applied | 9M 2026 includes a patent settlement gain of 25000 and a tariff refund benefit of 25300 (thousands); FY2025 and 9M 2025 include an asset impairment of 108117 and a gain on currency forwards of 82636 | No adjustment applied | Reported EBITDA is the primary measure; the items are listed so a reader can judge the last-twelve-months figure | 9M 2026; 9M 2025; FY2025; LTM |

### T4.4 Income statement

| Line item | 9M 2026 | 9M 2025 | FY2025 | FY2024 | FY2023 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net revenues | 1686377 | 1423729 | 1992713 | 1699546 | 1712441 | USD thousands | Reported; continuing operations | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Cost of goods sold | 678456 | 610422 | 871959 | 662159 | 672329 | USD thousands | Reported expense magnitude | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Gross profit | 1007921 | 813307 | 1120754 | 1037387 | 1040112 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Selling, general and administrative expenses | 660251 | 497800 | 720169 | 674520 | 622740 | USD thousands | Reported expense magnitude | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Research and development expenses | 132491 | 96044 | 144781 | 109021 | 113627 | USD thousands | Reported expense magnitude | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Pension settlement charge | Not supplied: line not printed in the quarterly report | Not supplied: line not printed in the quarterly report | Not supplied: source dash | 132732 | 45244 | USD thousands | Reported expense magnitude; non-cash | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Restructuring charges, separation costs and impairment charges | 16745 | 114963 | 137431 | 17463 | 4224 | USD thousands | Reported expense magnitude; includes asset impairment of 108117 in 9M 2025 and FY2025 | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Gain on sale of assets and business | Not supplied: line not printed in the quarterly report | Not supplied: line not printed in the quarterly report | Not supplied: source dash | Not supplied: source dash | -4448 | USD thousands | Reported gain printed as a deduction | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Income from continuing operations before interest and taxes (EBIT) | 198434 | 104500 | 118373 | 103651 | 258725 | USD thousands | Reported; the quarterly report states it before loss on extinguishment of debt | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Interest expense | 74877 | 72073 | 100223 | 83513 | 85014 | USD thousands | Reported accrued expense, after the interest benefit on swaps; not cash paid | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Interest income | -5406 | -4549 | -6403 | -6152 | -11679 | USD thousands | Reported income printed as a deduction | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Loss on extinguishment of debt | 4531 | Not supplied: source dash | Not supplied: line not printed in the annual report | Not supplied: line not printed in the annual report | Not supplied: line not printed in the annual report | USD thousands | Reported expense magnitude; nine months 2026 includes the Term A-2 and 2027 notes redemptions | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Income from continuing operations before taxes | 124432 | 36976 | 24553 | 26290 | 185390 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Taxes (benefit) on income from continuing operations | 33221 | -25107 | -33977 | -30901 | 41873 | USD thousands | Reported; negative is a benefit | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Income from continuing operations | 91211 | 62083 | 58530 | 57191 | 143517 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Income (loss) from discontinued operations before taxes | 1148083 | -231519 | -1097174 | 48555 | 247014 | USD thousands | Reported; Acute Care, Interventional Urology and OEM businesses | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Taxes on income (loss) from discontinued operations | 220328 | 21874 | -133004 | 36071 | 34203 | USD thousands | Reported; negative is a benefit | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Income (loss) from discontinued operations | 927755 | -253393 | -964170 | 12484 | 212811 | USD thousands | Reported; nine months 2026 includes the pre-tax gain on the OEM sale of 1049859 | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Net income (loss) | 1018966 | -191310 | -905640 | 69675 | 356328 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 |
| Depreciation expense | 53330 | 39177 | 56082 | 52754 | 45488 | USD thousands | Reported non-cash adjustment, continuing operations | 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Intangible asset amortization expense | 101815 | 84986 | 121656 | 108780 | 102617 | USD thousands | Reported non-cash adjustment, continuing operations | 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| EBITDA (Reported) | 353579 | 228663 | 296111 | 265185 | 406830 | USD thousands | Calculated: EBIT plus depreciation plus intangible amortization; no EBITDA is stated by the issuer; unadjusted | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112 |

### Segment schedule

| Business unit | Period | Net revenues | Segment operating profit | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Vascular | 9M 2026 | 726600 | 277011 | USD thousands | Reported; product-based segment | 10-Q_2026-09-30_tfx.htm.jsonl, page 37 |
| Interventional | 9M 2026 | 626827 | 65031 | USD thousands | Reported; product-based segment | 10-Q_2026-09-30_tfx.htm.jsonl, page 37 |
| Surgical | 9M 2026 | 332950 | 150170 | USD thousands | Reported; product-based segment | 10-Q_2026-09-30_tfx.htm.jsonl, page 37 |
| Corporate, unallocated and restructuring | 9M 2026 | Not supplied: no separate revenue line | -293778 | USD thousands | Calculated: other unallocated items 277033 plus restructuring, separation and impairment charges 16745, reconciling segment profit 492212 to EBIT 198434 | 10-Q_2026-09-30_tfx.htm.jsonl, page 38 |
| Vascular | 9M 2025 | 677559 | 237879 | USD thousands | Reported; recast to the product basis | 10-Q_2026-09-30_tfx.htm.jsonl, page 37 |
| Interventional | 9M 2025 | 429990 | 60626 | USD thousands | Reported; recast to the product basis | 10-Q_2026-09-30_tfx.htm.jsonl, page 37 |
| Surgical | 9M 2025 | 307145 | 111815 | USD thousands | Reported; recast to the product basis | 10-Q_2026-09-30_tfx.htm.jsonl, page 37 |
| Corporate, unallocated and restructuring | 9M 2025 | 9035 | -305820 | USD thousands | Calculated profit: other unallocated items 190857 plus restructuring, separation and impairment charges 114963; the revenue is the Italian payback reserve adjustment shown as Other | 10-Q_2026-09-30_tfx.htm.jsonl, page 10; 10-Q_2026-09-30_tfx.htm.jsonl, page 38 |
| Americas | FY2025 | 1279197 | 469229 | USD thousands | Reported; geographic segment | 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |
| EMEA | FY2025 | 472411 | 14554 | USD thousands | Reported; geographic segment | 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |
| Asia | FY2025 | 241105 | 15966 | USD thousands | Reported; geographic segment | 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |
| Corporate, unallocated and restructuring | FY2025 | Not supplied: no separate revenue line | -381376 | USD thousands | Calculated: other unallocated expenses 243945 plus restructuring, separation and impairment charges 137431, reconciling segment operating profit 499749 to EBIT 118373 | 10-K_2025-12-31_tfx.htm.jsonl, page 109; 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |
| Americas | FY2024 | 1156946 | 426453 | USD thousands | Reported; geographic segment | 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |
| EMEA | FY2024 | 340255 | 50939 | USD thousands | Reported; geographic segment | 10-K_2025-12-31_tfx.htm.jsonl, page 160 |
| Asia | FY2024 | 202345 | 45804 | USD thousands | Reported; geographic segment | 10-K_2025-12-31_tfx.htm.jsonl, page 160 |
| Corporate, unallocated and restructuring | FY2024 | Not supplied: no separate revenue line | -419545 | USD thousands | Calculated: other unallocated expenses 269350 plus restructuring 17463 plus pension settlement charge 132732, reconciling segment operating profit 523196 to EBIT 103651 | 10-K_2025-12-31_tfx.htm.jsonl, page 109; 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |
| Americas | FY2023 | 1180709 | 461074 | USD thousands | Reported; geographic segment | 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |
| EMEA | FY2023 | 316972 | 33786 | USD thousands | Reported; geographic segment | 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |
| Asia | FY2023 | 214760 | 64470 | USD thousands | Reported; geographic segment | 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |
| Corporate, unallocated and restructuring | FY2023 | Not supplied: no separate revenue line | -300605 | USD thousands | Calculated: other unallocated expenses 255585 plus restructuring 4224 plus pension settlement charge 45244 less gain on sale 4448, reconciling segment operating profit 559330 to EBIT 258725 | 10-K_2025-12-31_tfx.htm.jsonl, page 109; 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |

The product-based and geographic segment series use different definitions of segment operating profit and are not joined into one series; nine-month 2025 is shown on the recast product basis only.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 36–38; 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161

### T4.5 Cash flow statement

| Line item | 9M 2026 | 9M 2025 | FY2025 | FY2024 | FY2023 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net income (loss) | 1018966 | -191310 | -905640 | 69675 | 356328 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| (Income) loss from discontinued operations | -927755 | 253393 | 964170 | -12484 | -212811 | USD thousands | Reported add-back of the discontinued result | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Depreciation expense | 53330 | 39177 | 56082 | 52754 | 45488 | USD thousands | Reported non-cash adjustment | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Intangible asset amortization expense | 101815 | 84986 | 121656 | 108780 | 102617 | USD thousands | Reported non-cash adjustment | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Deferred financing costs and debt discount amortization expense | 4224 | 3181 | 4675 | 3415 | 3400 | USD thousands | Reported non-cash adjustment | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Loss on extinguishment of debt | 4531 | Not supplied: source dash | Not supplied: line not printed in the annual report | Not supplied: line not printed in the annual report | Not supplied: line not printed in the annual report | USD thousands | Reported non-cash adjustment | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Pension settlement charge | Not supplied: line not printed in the quarterly report | Not supplied: line not printed in the quarterly report | Not supplied: source dash | 132732 | 45244 | USD thousands | Reported non-cash adjustment | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Changes in contingent consideration | -2731 | 16075 | 16446 | 10027 | -27243 | USD thousands | Reported non-cash adjustment | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Asset impairment charge | Not supplied: source dash | 108117 | 108117 | 7834 | Not supplied: source dash | USD thousands | Reported non-cash adjustment | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Stock-based compensation | 18448 | 19002 | 25695 | 25960 | 27301 | USD thousands | Reported non-cash adjustment | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Gain on non-designated foreign currency forward contracts | Not supplied: source dash | -82636 | -82636 | Not supplied: source dash | Not supplied: source dash | USD thousands | Reported; hedge of the cash consideration for the VI Business acquisition | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Gain on sale of assets and business | Not supplied: line not printed in the quarterly report | Not supplied: line not printed in the quarterly report | Not supplied: source dash | Not supplied: source dash | -4448 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Deferred income taxes, net | 1163 | -37536 | -100967 | -113207 | -7921 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Payments for contingent consideration within operating activities | Not supplied: line not printed in the quarterly report | Not supplied: line not printed in the quarterly report | Not supplied: source dash | Not supplied: source dash | -289 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Interest benefit on swaps designated as net investment hedges | -23159 | -13254 | -22220 | -17410 | -18814 | USD thousands | Reported non-cash deduction | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Other | -425 | -4961 | -7608 | 13525 | 704 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Change in accounts receivable | -40717 | -94934 | -85533 | -3603 | -4377 | USD thousands | Reported change | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Change in inventories | 10158 | 52831 | 84041 | 6746 | -56439 | USD thousands | Reported change | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Change in prepaid expenses and other assets | -4178 | -24245 | -35585 | 41906 | -5022 | USD thousands | Reported change | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Change in accounts payable, accrued expenses and other liabilities | 35422 | -24329 | -8284 | 2346 | -18927 | USD thousands | Reported change | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Change in income taxes receivable and payable, net | -14258 | -93287 | -35727 | -27114 | -18653 | USD thousands | Reported change | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net Cash from Operating Activities | 234834 | 10270 | 96682 | 301882 | 206138 | USD thousands | Reported; continuing operations only, before the cash flows of discontinued operations | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Expenditures for property, plant and equipment | -54438 | -71418 | -95236 | -90437 | -46421 | USD thousands | Reported total capital expenditure; no maintenance and growth split stated | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Payments for businesses and intangibles acquired, net of cash acquired | Not supplied: source dash | -831857 | -831857 | -120 | -450 | USD thousands | Reported; 2025 is the VI Business acquisition | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Proceeds on non-designated balance sheet hedges | Not supplied: source dash | 82203 | 82203 | Not supplied: source dash | Not supplied: source dash | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Proceeds from sales of business and assets | Not supplied: source dash | 6712 | 6712 | Not supplied: source dash | 15000 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Insurance settlement proceeds | Not supplied: source dash | 9447 | 9447 | Not supplied: source dash | Not supplied: the annual report prints two figures for three years | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net interest proceeds on swaps designated as net investment hedges | Not supplied: the quarterly report labels this line net payments | Not supplied: the quarterly report labels this line net payments | 21078 | 27196 | 63134 | USD thousands | Reported; annual label | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net payments on swaps designated as net investment hedges | -38308 | 7612 | Not supplied: the annual report labels this line net interest proceeds | Not supplied: the annual report labels this line net interest proceeds | Not supplied: the annual report labels this line net interest proceeds | USD thousands | Reported; quarterly label; 2026 includes the March 2026 settlement of the 2025 euro swaps | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Proceeds from sales of investments | 17 | Not supplied: source dash | Not supplied: source dash | 7300 | 7300 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Purchase of investments | -9000 | -5000 | -5000 | -7300 | -11300 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net Cash from Investing Activities | -101729 | -802301 | -812653 | -63361 | 27263 | USD thousands | Reported; continuing operations only | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Proceeds from new borrowings | 2350000 | 1140000 | 1140000 | 130000 | 646000 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Reduction in borrowings | -3368125 | -121750 | -153000 | -291500 | -544750 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Debt extinguishment, issuance and amendment fees | -16098 | -4961 | -4961 | Not supplied: source dash | Not supplied: source dash | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Repurchase of common stock | -554951 | -300000 | -300000 | -200000 | Not supplied: source dash | USD thousands | Reported cash paid | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net proceeds (payments) from share-based compensation plans and related tax impacts | -5383 | 7161 | 7167 | 3352 | 5190 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Payments for contingent consideration within financing activities | -156 | -166 | -15505 | -236 | -4004 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Dividends paid | -43748 | -45242 | -60268 | -63541 | -63896 | USD thousands | Reported cash paid | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Excise tax paid on repurchase of common stock | -2802 | -1894 | -1894 | Not supplied: source dash | Not supplied: source dash | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net Cash from Financing Activities | -1641263 | 673148 | 611539 | -421925 | 38540 | USD thousands | Reported; continuing operations only | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net cash provided by operating activities of discontinued operations | 56279 | 178200 | 243995 | 333856 | 304500 | USD thousands | Reported; outside the fixed operating row | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net cash provided by (used in) investing activities of discontinued operations | 1482576 | -24481 | -36538 | -35997 | -648491 | USD thousands | Reported; nine months 2026 includes the OEM sale proceeds | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net cash provided by (used in) discontinued operations | 1538855 | 153719 | 207457 | 297859 | -343991 | USD thousands | Reported total of the two lines above | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| FX Effect on Cash | -7036 | 18824 | 23174 | -9654 | 2864 | USD thousands | Reported effect of exchange rate changes on cash, cash equivalents and restricted cash equivalents | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net increase (decrease) in cash, cash equivalents and restricted cash equivalents as printed | 23661 | 53660 | 126199 | 104801 | -69186 | USD thousands | Reported; includes the cash flows of discontinued operations | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Net Cash Change | Not supplied: the printed net increase includes discontinued operations cash flows that the three fixed activity rows exclude | Not supplied: the printed net increase includes discontinued operations cash flows that the three fixed activity rows exclude | Not supplied: the printed net increase includes discontinued operations cash flows that the three fixed activity rows exclude | Not supplied: the printed net increase includes discontinued operations cash flows that the three fixed activity rows exclude | Not supplied: the printed net increase includes discontinued operations cash flows that the three fixed activity rows exclude | USD thousands | Not stated on the continuing basis; see the printed net increase above | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Opening Cash | 453848 | 327650 | 327649 | 222848 | 292034 | USD thousands | Reported beginning cash, cash equivalents and restricted cash equivalents; includes cash of discontinued operations | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Less: cash, cash equivalents and restricted cash of discontinued operations | -33181 | -44801 | -51168 | -42335 | -30116 | USD thousands | Reported deduction at period end | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Closing Cash | 444328 | 336509 | 402680 | 285314 | 192732 | USD thousands | Reported end-of-period cash, cash equivalents and restricted cash equivalents of continuing operations | 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Cash Interest Paid | Not supplied: nine-month figure not stated in the quarterly report | Not supplied: nine-month figure not stated in the quarterly report | 119337 | 98376 | 100218 | USD thousands | Reported supplemental amount, not split between continuing and discontinued operations | 10-K_2025-12-31_tfx.htm.jsonl, page 141 |
| Income taxes paid, net of refunds, continuing operations | Not supplied: nine-month figure not stated in the quarterly report | Not supplied: nine-month figure not stated in the quarterly report | 117658 | 110284 | 78328 | USD thousands | Reported supplemental amount | 10-K_2025-12-31_tfx.htm.jsonl, page 155 |

### T4.6 Balance sheet

| Line item | 9M 2026 | FY2025 | FY2024 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash & Equivalents | 430465 | 378564 | 247852 | USD thousands | Reported cash and cash equivalents; excludes restricted cash equivalents | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Restricted cash equivalents in prepaid expenses and other current assets | 8672 | 14700 | 14700 | USD thousands | Reported in the supplemental cash note | 10-Q_2026-09-30_tfx.htm.jsonl, page 8; 10-K_2025-12-31_tfx.htm.jsonl, page 162 |
| Restricted cash equivalents in other assets | 5191 | 9416 | 22762 | USD thousands | Reported in the supplemental cash note | 10-Q_2026-09-30_tfx.htm.jsonl, page 8; 10-K_2025-12-31_tfx.htm.jsonl, page 162 |
| Accounts receivable, net | 379643 | 345583 | 226733 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Inventories | 384415 | 404395 | 306766 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Prepaid expenses and other current assets | 163478 | 150678 | 101788 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Prepaid taxes | 7078 | 19566 | 3457 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Current assets of discontinued operations | 479595 | 639552 | 584528 | USD thousands | Reported; held for sale | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Total current assets | 1844674 | 1938338 | 1471124 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Property, plant and equipment, net | 470377 | 498281 | 308461 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Operating lease assets | 73666 | 91817 | 95714 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Goodwill | 2288319 | 2305050 | 1992178 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Intangible assets, net | 1404749 | 1524150 | 1348420 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Deferred tax assets | 12772 | 12593 | 9285 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Other assets | 124662 | 112984 | 100745 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Non-current assets of discontinued operations | 128642 | 464026 | 1771987 | USD thousands | Reported; held for sale | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Total Assets | 6347861 | 6947239 | 7097914 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Current borrowings | 87500 | 100000 | 100000 | USD thousands | Reported carrying value; short-term debt and current portion of long-term debt | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Accounts payable | 142869 | 130201 | 97858 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Accrued expenses | 142007 | 117350 | 107979 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Payroll and benefit-related liabilities | 133730 | 124769 | 101691 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Accrued interest | 16564 | 5404 | 5338 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Income taxes payable | 194638 | 18787 | 41163 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Other current liabilities | 91524 | 137195 | 59049 | USD thousands | Reported; includes the current portion of operating lease liabilities | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Current liabilities of discontinued operations | 108270 | 128320 | 136282 | USD thousands | Reported; held for sale | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Total current liabilities | 917102 | 762026 | 649360 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Long-term borrowings | 1531456 | 2541449 | 1555871 | USD thousands | Reported carrying value, net of unamortized debt issuance costs | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Deferred tax liabilities | 168570 | 183749 | 295455 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Noncurrent liability for uncertain tax positions | 3682 | 3536 | 1831 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Noncurrent operating lease liabilities | 60785 | 84210 | 87958 | USD thousands | Reported; separate from financial debt and not added to Total Debt | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Other liabilities | 161163 | 194532 | 118436 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Non-current liabilities of discontinued operations | 11387 | 52969 | 110863 | USD thousands | Reported; held for sale | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Total Liabilities | 2854145 | 3822471 | 2819774 | USD thousands | Reported | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Total Equity | 3493716 | 3124768 | 4278140 | USD thousands | Reported total shareholders' equity; no minority interest or temporary equity printed | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111 |
| Total Debt | 1618956 | 2641449 | 1655871 | USD thousands | Calculated: current borrowings plus long-term borrowings, carrying value net of issuance costs; includes the securitization program; agrees to the borrowings notes | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-Q_2026-09-30_tfx.htm.jsonl, page 19; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111; 10-K_2025-12-31_tfx.htm.jsonl, page 136 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolving credit facility | Revolving credit | Not supplied: instrument carrying values are not disclosed | 60000 | 60000 | 1000000 | Secured by a lien on substantially all assets of the company and each guarantor, subject to exceptions; guaranteed by substantially all material domestic subsidiaries | Not supplied: no source states the ranking | USD | 60000 | Not applicable | Term SOFR plus 1.125% to 2.00% by leverage ratio or corporate family rating; rate of 5.28% on the credit facility at 2026-09-30 | floating | Term SOFR | Not supplied: the applicable margin at 2026-09-30 is not stated; the grid is 112.5 to 200 | Not applicable | 2031-05-26 | Not supplied: no repayment schedule is stated | 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–21 |
| Term A-1 loan facility | Term loan | Not supplied: instrument carrying values are not disclosed | 496875 | 496875 | Not supplied: original amount 500000 stated; the commitment at 2026-09-30 is not stated | Same security and guarantees as the revolving credit facility | Not supplied: no source states the ranking | USD | 496875 | Not applicable | Term SOFR plus 1.125% to 2.00% by leverage ratio or corporate family rating | floating | Term SOFR | Not supplied: the applicable margin at 2026-09-30 is not stated; the grid is 112.5 to 200 | Not applicable | 2031-05-26 | Not supplied: the schedule is not stated | 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–21 |
| 4.250% Senior Notes due 2028 | Senior notes | Not supplied: instrument carrying values are not disclosed | 500000 | 500000 | Not applicable | Not supplied: the filings do not state whether the notes are secured; guaranteed by substantially all material domestic subsidiaries | Not supplied: no source states the ranking | USD | 500000 | Not applicable | 4.250% | fixed | Not applicable | Not applicable | Not applicable | 2028-06-01 | 0 | 10-Q_2026-09-30_tfx.htm.jsonl, page 19; 10-Q_2026-09-30_tfx.htm.jsonl, page 54; 10-K_2025-12-31_tfx.htm.jsonl, page 140 |
| 5.875% Senior Notes due 2032 | Senior notes | Not supplied: instrument carrying values are not disclosed | 500000 | 500000 | Not applicable | Not supplied: the filings do not state whether the notes are secured; guaranteed by the domestic subsidiaries that guarantee the Credit Agreement and certain others | Not supplied: no source states the ranking | USD | 500000 | Not applicable | 5.875% | fixed | Not applicable | Not applicable | Not applicable | 2032-01-15 | 0 | 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–23 |
| Securitization program | Receivables securitization | Not supplied: instrument carrying values are not disclosed | 75000 | 75000 | 75000 | Receivables sold to a bankruptcy-remote special purpose entity whose assets are not available to satisfy obligations of Teleflex | Not supplied: no source states the ranking | USD | 75000 | Not applicable | 4.76% at 2026-09-30 | floating | SOFR | Not supplied: the spread is not stated | Not applicable | Not supplied: the maturity of the facility is not stated | Not supplied: not stated | 10-Q_2026-09-30_tfx.htm.jsonl, page 19; 10-K_2025-12-31_tfx.htm.jsonl, page 91; 10-K_2025-12-31_tfx.htm.jsonl, page 141 |
| Financing cost adjustment | Unamortized debt issuance costs | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -12919 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_tfx.htm.jsonl, page 19 |

The Term A-2 loan facility, repaid in August 2026, and the 4.625% Senior Notes due 2027, redeemed in the second quarter of 2026, were repaid before the balance-sheet date and are not shown. Reporting Currency Amount holds each disclosed principal, and the financing cost adjustment reconciles the total to Total Debt of 1618956 thousand.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–23

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM | USD 296.111m | USD 353.579m | USD 228.663m | USD 421.027m | Calculated | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112 | Stubs end 2026-09-30 and 2025-09-28; includes one-off items that are not removed |
| Net revenues | LTM | USD 1992.713m | USD 1686.377m | USD 1423.729m | USD 2255.361m | Calculated | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 | Same stub dates |
| Interest expense | LTM | USD 100.223m | USD 74.877m | USD 72.073m | USD 103.027m | Calculated | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 | Accrued expense after the interest benefit on swaps; not cash paid |
| Net Cash from Operating Activities | LTM | USD 96.682m | USD 234.834m | USD 10.27m | USD 321.246m | Calculated | 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 | Continuing operations only |
| Capital expenditure | LTM | USD 95.236m | USD 54.438m | USD 71.418m | USD 78.256m | Calculated | 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 | Total capital expenditure; no maintenance and growth split |
| Repurchase of common stock | LTM | USD 300m | USD 554.951m | USD 300m | USD 554.951m | Calculated | 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 | Cash paid, excluding excise tax |
| Dividends paid | LTM | USD 60.268m | USD 43.748m | USD 45.242m | USD 58.774m | Calculated | 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 | Cash paid |
| Cash Interest Paid | LTM | USD 119.337m | Not supplied: nine-month cash interest paid is not stated | Not supplied: nine-month cash interest paid is not stated | Not calculable: the stub components are not stated | Not Calculable | 10-K_2025-12-31_tfx.htm.jsonl, page 141; 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5 | The quarterly reports print no supplemental cash interest |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Carrying debt / reported EBITDA | 1655.871 | 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111; 10-K_2025-12-31_tfx.htm.jsonl, page 136; calculation C01 | 265.185 | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C03 | FY2024 / 2024-12-31 | USD | US$m | 6.24 | Calculated | Tier 1 audited; derived EBITDA | Consolidated debt over continuing-operations EBITDA; the debt also funded the discontinued businesses whose earnings are excluded. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 1408.019 | 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111; calculation C02 | 265.185 | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C03 | FY2024 / 2024-12-31 | USD | US$m | 5.31 | Calculated | Tier 1 audited; derived EBITDA | Consolidated debt over continuing-operations EBITDA; the debt also funded the discontinued businesses whose earnings are excluded. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 265.185 | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C03 | 98.376 | 10-K_2025-12-31_tfx.htm.jsonl, page 141 | FY2024 / 2024-12-31 | USD | US$m | 2.70 | Calculated | Tier 1 audited; derived EBITDA | Cash interest paid is gross of swap interest received in investing activities and is not split between continuing and discontinued operations. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 2641.449 | 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111; 10-K_2025-12-31_tfx.htm.jsonl, page 136; calculation C01 | 296.111 | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C03 | FY2025 / 2025-12-31 | USD | US$m | 8.92 | Calculated | Tier 1 audited; derived EBITDA | Consolidated debt over continuing-operations EBITDA; the debt also funded the discontinued businesses whose earnings are excluded. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 2262.885 | 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111; calculation C02 | 296.111 | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C03 | FY2025 / 2025-12-31 | USD | US$m | 7.64 | Calculated | Tier 1 audited; derived EBITDA | Consolidated debt over continuing-operations EBITDA; the debt also funded the discontinued businesses whose earnings are excluded. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 296.111 | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C03 | 119.337 | 10-K_2025-12-31_tfx.htm.jsonl, page 141 | FY2025 / 2025-12-31 | USD | US$m | 2.48 | Calculated | Tier 1 audited; derived EBITDA | Cash interest paid is gross of swap interest received in investing activities and is not split between continuing and discontinued operations. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 1618.956 | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-Q_2026-09-30_tfx.htm.jsonl, page 19; calculation C01 | 421.027 | 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C04 | 2026-09-30 | USD | US$m | 3.85 | Calculated | Tier 2b interim; derived LTM EBITDA | Last-twelve-months EBITDA to 2026-09-30; before cash taxes on the OEM gain and the Acute Care sale proceeds. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 1188.491 | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; calculation C02 | 421.027 | 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C04 | 2026-09-30 | USD | US$m | 2.82 | Calculated | Tier 2b interim; derived LTM EBITDA | Last-twelve-months EBITDA to 2026-09-30; before cash taxes on the OEM gain and the Acute Care sale proceeds. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 421.027 | 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C04 | Not calculable: nine-month cash interest paid is not stated in the quarterly reports | 10-K_2025-12-31_tfx.htm.jsonl, page 141; 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5 | 2026-09-30 | USD | US$m | Not calculable: the denominator is not stated | Not Calculable | Tier 2b interim; derived LTM EBITDA | No last-twelve-months cash interest can be built from the filings. |
| EBITDA / interest expense | Reported EBITDA / accrued interest expense | 265.185 | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C03 | 83.513 | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 | FY2024 / 2024-12-31 | USD | US$m | 3.18 | Calculated | Tier 1 audited; derived | Accrued expense after the interest benefit on swaps, so it is higher than a cash-paid measure. |
| EBITDA / interest expense | Reported EBITDA / accrued interest expense | 296.111 | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C03 | 100.223 | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110 | FY2025 / 2025-12-31 | USD | US$m | 2.95 | Calculated | Tier 1 audited; derived | Accrued expense after the interest benefit on swaps, so it is higher than a cash-paid measure. |
| EBITDA / interest expense | Reported EBITDA / accrued interest expense | 421.027 | 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4; calculation C04 | 103.027 | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110; calculation C04 | 2026-09-30 | USD | US$m | 4.09 | Calculated | Tier 2b interim; derived | Accrued expense after the interest benefit on swaps, so it is higher than a cash-paid measure. |
| Net debt / EBITDA excluding one-off gains (Analyst Judgement) | Carrying net debt / (LTM reported EBITDA less patent settlement gain and tariff refund benefit) | 1188.491 | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; calculation C02 | 370.727 | 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4; 10-Q_2026-09-30_tfx.htm.jsonl, page 34; 10-Q_2026-09-30_tfx.htm.jsonl, page 36; calculation C11 | 2026-09-30 | USD | US$m | 3.21 | Estimated | Tier 2b interim; Analyst Judgement | Illustration only: removes two stated 2026 gains from last-twelve-months EBITDA and nothing else; not a covenant calculation. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | 9M 2026 | 9M 2025 | FY2025 | FY2024 | FY2023 | Trend Direction | Analyst Note | Source |
|---|---|---|---|---|---|---|---|---|---|
| Issuer reported | Gross profit as a percentage of revenues | 59.8 | 57.1 | 56.2 | 61.0 | 60.7 | Higher in 2026, lower in FY2025 | Percent as printed in management's discussion; the issuer attributes the 2025 decline to VI Business inventory step-up amortization and tariffs. | 10-Q_2026-09-30_tfx.htm.jsonl, page 44; 10-K_2025-12-31_tfx.htm.jsonl, pages 66–67 |
| Issuer reported | Selling, general and administrative expenses as a percentage of revenues | 39.2 | 35.0 | 36.1 | 39.7 | 36.4 | Higher in 2026 | Percent as printed in management's discussion. | 10-Q_2026-09-30_tfx.htm.jsonl, pages 44–45; 10-K_2025-12-31_tfx.htm.jsonl, page 67 |
| Issuer reported | Vascular net revenue growth, nine months 2026 against nine months 2025 | 7.2 | Not supplied: comparison column only | Not supplied: not on the product basis | Not supplied: not on the product basis | Not supplied: not on the product basis | Higher | Percent as printed; product-based segments. | 10-Q_2026-09-30_tfx.htm.jsonl, page 49 |
| Issuer reported | Interventional net revenue growth, nine months 2026 against nine months 2025 | 45.8 | Not supplied: comparison column only | Not supplied: not on the product basis | Not supplied: not on the product basis | Not supplied: not on the product basis | Higher | Percent as printed; the issuer attributes most of the rise to net revenues of the acquired VI Business. | 10-Q_2026-09-30_tfx.htm.jsonl, page 49 |
| Issuer reported | Surgical net revenue growth, nine months 2026 against nine months 2025 | 8.4 | Not supplied: comparison column only | Not supplied: not on the product basis | Not supplied: not on the product basis | Not supplied: not on the product basis | Higher | Percent as printed; product-based segments. | 10-Q_2026-09-30_tfx.htm.jsonl, pages 49–50 |
| Operating | Backlog, units, utilization and retention | Not supplied: no quantified series in the filings | Not supplied: no quantified series in the filings | Not supplied: no quantified series in the filings | Not supplied: no quantified series in the filings | Not supplied: no quantified series in the filings | Not established | No operating series is invented. | 10-Q_2026-09-30_tfx.htm.jsonl, page 49 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation | Source |
|---|---|---|---|---|---|---|---|---|
| Debt principal versus carrying value | Every balance-sheet debt line at carrying value, net of issuance costs | Principal by instrument before unamortized issuance costs | Principal 1631875 against carrying value 1618956 at 2026-09-30; principal 2650000 against 2641449 at 2025-12-31; principal 1663000 against 1655871 at 2024-12-31 (USD thousands) | 2026-09-30; FY2025; FY2024 | Difference 12919, 8551 and 7129 thousand | Financial foundation; Fundamental credit; Refinancing & LME | Leverage uses carrying value; principal is kept for the maturity ladder and the reconciliation table. | 10-Q_2026-09-30_tfx.htm.jsonl, page 19; 10-K_2025-12-31_tfx.htm.jsonl, page 136 |
| EBITDA | Issuer-stated unadjusted EBITDA | None stated; no non-GAAP measure appears in the 2025 annual report or the 2026 quarterly reports | EBITDA is derived as EBIT plus depreciation plus intangible amortization and keeps impairment of 108117 and a currency hedge gain of 82636 (FY2025), and a patent settlement gain of 25000 and tariff refund benefit of 25300 (9M 2026), in thousands | All periods | Last-twelve-months one-off gains 50300 thousand against EBITDA of 421027 thousand | Financial foundation; Fundamental credit; Earnings quality | Reported EBITDA stays primary; a labelled normalised net leverage of 3.21x is given in the register as Analyst Judgement. | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-Q_2026-09-30_tfx.htm.jsonl, page 34; 10-Q_2026-09-30_tfx.htm.jsonl, page 36; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 |
| Reporting perimeter | One perimeter for every period | 2024 annual report: whole company; 2025 annual report: continuing operations with 2024 and 2023 recast | FY2024 net revenues 3047324 in the 2024 annual report against 1699546 recast; the difference of 1347778 equals the discontinued businesses' FY2024 net revenues | FY2024; FY2023 | Difference of 1347778 thousand for FY2024, the discontinued businesses' net revenues | Financial foundation; Fundamental credit | Use only the 2025 annual report for FY2024 and FY2023; the 2024 annual report is not used for statements. | 10-K_2024-12-31_tfx.htm.jsonl, page 102; 10-K_2025-12-31_tfx.htm.jsonl, page 109; 10-K_2025-12-31_tfx.htm.jsonl, page 127 |
| Net cash change and opening cash | Operating plus investing plus financing plus foreign exchange equals the net change | The printed net increase includes the cash flows of discontinued operations; opening cash includes their cash and closing cash excludes it | FY2025: printed net increase 126199 against continuing activities and foreign exchange of -81258; discontinued operations flows 207457; opening cash 327649 against 285314 closing 2024 on the continuing basis | All cash flow periods | Discontinued operations flows 207457 thousand in FY2025 and 1538855 thousand in 9M 2026 | Financial foundation; Liquidity | The three activity rows are continuing operations only; Net Cash Change is not supplied and the printed net increase is kept on its own line. | 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112; 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5 |
| Interest | Coverage uses cash interest paid | Interest expense is accrued and after the interest benefit on net investment hedge swaps; swap interest received is in investing activities | FY2025 interest expense 100223, cash interest paid 119337, swap interest received in investing 21078 and interest benefit in operating adjustments 22220 (thousands) | FY2023 to FY2025 | Cash paid exceeds expense by 19114 thousand in FY2025 | Fundamental credit; Rates, FX & hedging | Fixed cover rows use cash paid; accrued-expense cover is a separate, labelled row. | 10-K_2025-12-31_tfx.htm.jsonl, page 109; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112; 10-K_2025-12-31_tfx.htm.jsonl, page 141 |
| Sale of the OEM business, multiple roles | Separate net cash proceeds, tax, gain and statement presentation | Net cash proceeds USD 1.5 billion, after tax USD 1.3 billion in the September 2026 report and approximately USD 1.2 billion in the June 2026 report; pre-tax gain 1049859; discontinued operations investing inflow 1482576; taxes on discontinued operations 220328 (thousands) | Different roles in the cash flow statement, the income statement and the notes; the after-tax figure changed between reports | 9M 2026 | After-tax proceeds differ by about USD 0.1 billion between reports | Financial foundation; Fundamental credit | The September 2026 report controls; the cash flow statement figure is the investing inflow used; no figure is averaged. | 10-Q_2026-09-30_tfx.htm.jsonl, page 11; 10-Q_2026-09-30_tfx.htm.jsonl, page 12; 10-Q_2026-06-30_tfx.htm.jsonl, page 34; 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5 |
| Segment definition | One segment basis across periods | From Q3 2026 product-based segments with a revised profit measure that excludes certain shared logistics and distribution costs; earlier periods geographic | Segment operating profit for 9M 2025 is shown on the product basis in the September 2026 report, and FY2025 on the geographic basis in the 2025 annual report | 9M 2025; FY2025; FY2024; FY2023 | Consolidated figures are unchanged | Financial foundation; Business & governance | The two series are not joined. | 10-Q_2026-09-30_tfx.htm.jsonl, pages 36–38; 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |
| Opening cash 2025 and Q3 2025 comparatives | Same figure in every report | Opening cash 2025 is 327649 in the 2025 annual report and 327650 in the September 2026 report; Q3 2025 EBIT is -62439 in the annual quarterly data and -62437 in the September 2026 comparatives | Rounding or recast differences of 1 and 2 thousand | 9M 2025; Q3 2025 | Immaterial | Financial foundation | The September 2026 report is used for the nine-month 2025 column; no Q3 2025 column is used. | 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112; 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, page 162; 10-Q_2026-09-30_tfx.htm.jsonl, page 2 |
| Lease and pension obligations | Separate from financial debt where possible | Operating lease liabilities are printed outside borrowings; the main US pension plan was terminated and annuitized in 2023 and 2024 | Noncurrent operating lease liabilities 60785 at 2026-09-30; total lease liabilities 104836 at 2025-12-31 including a current portion inside other current liabilities | 2026-09-30; FY2025 | Not added to Total Debt | Fundamental credit; Liquidity | Total Debt excludes lease liabilities; the current lease portion at 2026-09-30 is not stated. | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, page 136; 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 6.24 | 5.31 | x | Consolidated carrying debt over continuing-operations reported EBITDA of the fiscal year; the debt also funded the discontinued businesses, so the ratio is not a whole-company leverage; before events after the year end. |
| FY2025 / 2025-12-31 | 8.92 | 7.64 | x | Consolidated carrying debt over continuing-operations reported EBITDA of the fiscal year; the debt also funded the discontinued businesses, so the ratio is not a whole-company leverage; before events after the year end. |
| 2026-09-30 | 3.85 | 2.82 | x | Carrying debt over last-twelve-months reported EBITDA to 2026-09-30, derived and including 50300 thousand of one-off gains; before cash taxes on the OEM gain and the Acute Care sale; pro forma for post-quarter repurchases 2.92x. |

The year-end ratios divide consolidated debt by the earnings of continuing operations only, so they overstate leverage relative to a whole-company measure and are not comparable with the 2026-09-30 figure, which follows repayment of debt from the OEM sale proceeds.
Basis: 10-K_2025-12-31_tfx.htm.jsonl, pages 110–112; 10-Q_2026-09-30_tfx.htm.jsonl, page 3; calculation C05

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 2.70 | x | Reported EBITDA over cash interest paid; cash interest is not split between continuing and discontinued operations and is gross of swap interest received in investing activities. |
| FY2025 / 2025-12-31 | 2.48 | x | Same identity and annual duration. |
| 2026-09-30 | Not supplied: nine-month cash interest paid is not stated in the quarterly reports | x | A last-twelve-months cash cover cannot be built; accrued-expense cover is in the calculation register as a separate row. |

Cover is historical, uses cash paid rather than accrued interest, and has no 2026 value.
Basis: 10-K_2025-12-31_tfx.htm.jsonl, page 141; calculation C06

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 247.852 | 886.1 | US$m | Cash and cash equivalents excluding restricted cash; undrawn is the 1000.0 revolver less 113.0 drawn and 0.9 of standby letters of credit at 2024-12-31. The securitization program is fully drawn at its stated maximum of 75.0. |
| FY2025 / 2025-12-31 | 378.564 | 569.9 | US$m | Same basis; undrawn is 1000.0 less 425.0 drawn and 5.1 of standby letters of credit at 2025-12-31. |
| 2026-09-30 | 430.465 | 940 | US$m | Undrawn is 1000.0 less 60.0 drawn and is before letters of credit, which are not stated at 2026-09-30 (5.1 at 2025-12-31); the true figure is lower by that amount. The securitization program has 75.0 drawn, the maximum stated at 2025-12-31; before cash taxes on the OEM gain. |

The 2026-09-30 undrawn figure is before letters of credit, so it is an upper bound.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–21; 10-K_2025-12-31_tfx.htm.jsonl, page 83; 10-K_2024-12-31_tfx.htm.jsonl, page 79; calculation C07

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net revenues | 1712.441 | 1699.546 | 1992.713 | 2255.361 | USD millions | Reported, continuing operations; LTM calculated (C04) | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–110; 10-Q_2026-09-30_tfx.htm.jsonl, page 2 |
| EBITDA (Reported) | 406.83 | 265.185 | 296.111 | 421.027 | USD millions | Calculated: EBIT plus depreciation plus intangible amortization (C03, C04); unadjusted | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4 |
| EBITDA margin | 23.76 | 15.60 | 14.86 | 18.67 | percent | Calculated (C12): EBITDA over net revenues | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4 |
| Net Cash from Operating Activities | 206.138 | 301.882 | 96.682 | 321.246 | USD millions | Reported, continuing operations; LTM calculated (C04) | 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112; 10-Q_2026-09-30_tfx.htm.jsonl, page 4 |
| Capital expenditure | 46.421 | 90.437 | 95.236 | 78.256 | USD millions | Reported total; LTM calculated (C04) | 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112; 10-Q_2026-09-30_tfx.htm.jsonl, page 4 |
| Free cash flow (operating cash flow less capital expenditure) | 159.717 | 211.445 | 1.446 | 242.99 | USD millions | Calculated (C10); levered, after working capital; excludes acquisitions and the cash flows of discontinued operations | 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112; 10-Q_2026-09-30_tfx.htm.jsonl, page 4 |
| Repurchase of common stock (cash paid) | Not supplied: source dash | 200 | 300 | 554.951 | USD millions | Reported; LTM calculated (C04) | 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112; 10-Q_2026-09-30_tfx.htm.jsonl, page 4 |
| Dividends paid | 63.896 | 63.541 | 60.268 | 58.774 | USD millions | Reported; LTM calculated (C04) | 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112; 10-Q_2026-09-30_tfx.htm.jsonl, page 4 |
| Total debt (carrying value) | Not supplied: the balance sheet at 2023-12-31 is not printed on the continuing basis | 1655.871 | 2641.449 | 1618.956 | USD millions | Calculated (C01); balance sheet date is year end or 2026-09-30 | 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111; 10-Q_2026-09-30_tfx.htm.jsonl, page 3 |
| Cash & Equivalents | Not supplied: the balance sheet at 2023-12-31 is not printed on the continuing basis | 247.852 | 378.564 | 430.465 | USD millions | Reported | 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111; 10-Q_2026-09-30_tfx.htm.jsonl, page 3 |
| Net debt | Not supplied: the balance sheet at 2023-12-31 is not printed on the continuing basis | 1408.019 | 2262.885 | 1188.491 | USD millions | Calculated (C02) | 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111; 10-Q_2026-09-30_tfx.htm.jsonl, page 3 |
| Net debt / EBITDA | Not supplied: the balance sheet at 2023-12-31 is not printed on the continuing basis | 5.31 | 7.64 | 2.82 | x | Calculated (C05); year-end ratios mix consolidated debt with continuing earnings | 10-K_2025-12-31_tfx.htm.jsonl, pages 110–112; 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4 |
| EBITDA / cash interest | 4.06 | 2.70 | 2.48 | Not calculable: nine-month cash interest paid is not stated | x | Calculated (C06); cash interest paid from the annual report | 10-K_2025-12-31_tfx.htm.jsonl, page 141 |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| Within 12 months | 87.5 | US$m | Current borrowings at 2026-09-30 per the balance sheet; the filing does not say which of the revolver, Term A-1 and securitization balances it covers, and the notes are not current. |
| 2028 | 500 | US$m | 4.250% notes principal, maturing 2028-06-01. |
| 2032 | 500 | US$m | 5.875% notes principal, maturing 2032-01-15. |
| Not allocated by year | 544.375 | US$m | Residual: principal less the three rows above, being the revolver, Term A-1 and securitization balances outside the current portion. The revolver and Term A-1 mature 2031-05-26; Term A-1 amortization years and the securitization maturity are not stated. |

The ladder is partly a residual because no maturity table after the May 2026 refinancing is printed, so only the notes are dated by year.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–23; 10-K_2025-12-31_tfx.htm.jsonl, page 140; calculation C08

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1655.871 | 247.852 | 1408.019 | US$m | Carrying value, current plus long-term borrowings net of unamortized issuance costs, including the securitization program of 75.0; no finance leases. Principal total 1663.0. Before events after the year end. |
| FY2025 / 2025-12-31 | 2641.449 | 378.564 | 2262.885 | US$m | Same basis; includes the revolver, term loan, delayed draw term loan, 2027 and 2028 notes and the securitization program of 75.0. Principal total 2650.0. Before the 2026 refinancing, the OEM sale and the repayments that followed. |
| 2026-09-30 | 1618.956 | 430.465 | 1188.491 | US$m | Same basis; includes the revolver, Term A-1, 2028 and 2032 notes and the securitization program of 75.0. Principal total 1631.875. Reported, before cash taxes on the OEM gain, post-quarter repurchases and the Acute Care sale. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 1631.875 | -12.919 | 1618.956 | US$m | Ladder of Chart data: debt maturities adds to the Note 9 principal total of 1631.875; reconciling item is unamortized debt issuance costs of 12.919, deducted; no debt is left out of the ladder and no finance lease is carried in debt (C08). |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Open-market share repurchases after the quarter end | Not supplied: the source states after 2026-09-30 and through the date of the report only | 41.4 | 1229.891 | 2.92 | US$m | Third quarter report: 0.3 million shares for USD 41.4 million after the quarter end. Standalone adjustment to net debt at 2026-09-30 over last-twelve-months reported EBITDA of 421.027; excludes the accelerated repurchase settlement of 2026-10-07, which delivered shares only, and all other flows (C09). |
| Cash taxes on the gain from the OEM sale | Not supplied: the source states the fourth quarter of 2026 only | Not supplied: the filing states no amount for these cash taxes | Not supplied: no amount for these cash taxes | Not supplied: no amount for these cash taxes | US$m | Third quarter report: expected to be funded from the revolver and cash. Income taxes payable are 194.638 at 2026-09-30 against 18.787 at 2025-12-31, but the filing does not identify the OEM tax; not reflected in net debt. |
| Expected sale of the Acute Care and Interventional Urology businesses | Not supplied: the source states by the end of 2026, possibly 2027, only | -530 | 658.491 | 1.56 | US$m | Expected gross cash proceeds of approximately USD 530 million, subject to working capital adjustments, transaction costs and closing conditions; not completed and not cumulative with the other rows. Earnings of these businesses are already outside continuing EBITDA (C09). |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 | 1712.441 | 406.83 | US$m | Annual duration; revenue is continuing operations as reported; the EBITDA column is reported (unadjusted) EBITDA, calculated as EBIT plus depreciation plus intangible amortization, because the issuer states no adjusted EBITDA; not house-adjusted. |
| FY2024 | 1699.546 | 265.185 | US$m | Annual duration; revenue is continuing operations as reported; the EBITDA column is reported (unadjusted) EBITDA, calculated as EBIT plus depreciation plus intangible amortization, because the issuer states no adjusted EBITDA; not house-adjusted. |
| FY2025 | 1992.713 | 296.111 | US$m | Annual duration; revenue is continuing operations as reported; the EBITDA column is reported (unadjusted) EBITDA, calculated as EBIT plus depreciation plus intangible amortization, because the issuer states no adjusted EBITDA; not house-adjusted. FY2025 EBITDA includes a non-cash asset impairment charge and a currency hedge gain. |

The EBITDA column is the reported measure, not an adjusted one, because no adjusted EBITDA is stated.
Basis: 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; calculation C03

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | US$m | The filings state security for the Credit Agreement facilities only and no relative rank for any instrument, so none is ranked; the facilities, notes and securitization program are listed with their terms in the debt instruments register. |

No debt stack is drawn because no source states legal rank.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–23

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported) | Not supplied: the issuer states no adjusted EBITDA, so no bridge exists | US$m | Opening measure would be reported EBITDA derived from statement lines; no issuer add-backs are stated. |
| EBITDA (Adjusted) | Not supplied: the issuer states no adjusted EBITDA, so no bridge exists | US$m | Closing measure would be the issuer's adjusted EBITDA, which no filing states; no house adjustment is made. |

No bridge is stated because the issuer publishes no adjusted EBITDA.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112

### Financial interpretation

Net leverage fell to 2.82x on last-twelve-months reported EBITDA at 2026-09-30 from 7.64x at year-end 2025, but the two ratios are not on one footing. At year-end 2025 consolidated debt, which also financed the businesses now held for sale, is set against the earnings of continuing operations alone. By 2026-09-30 the OEM sale proceeds had repaid the Term A-2 loan of USD 700.0 million and USD 490.0 million of the revolver. Holding EBITDA at the FY2025 level, net leverage at 2026-09-30 would still be 4.01x, so debt repayment explains most of the improvement and higher earnings the rest. The improvement for creditors rests mainly on sale proceeds applied to debt, not on a change in the earnings base.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 22; 10-Q_2026-09-30_tfx.htm.jsonl, page 3; calculation C05; calculation C12

The earnings improvement is real but includes items that do not recur. Last-twelve-months EBITDA includes a patent settlement gain of USD 25.0 million and a tariff refund benefit of USD 25.3 million, about 11.95% of that EBITDA; without them net leverage would be 3.21x, an Analyst Judgement shown in the register and not used in any fixed row. FY2025 earnings, by contrast, carry a non-cash asset impairment and a currency hedge gain, but both sit in FY2025 and in the nine months of 2025, so they cancel out of the last-twelve-months figure. The strongest contrary evidence is the rise in reported gross margin to 59.8% in nine months 2026 from 57.1%, which the issuer attributes mainly to lower VI Business inventory step-up charges and to the tariff refunds; the step-up fade is durable but the refunds are not, and a fourth quarter without one-off gains would settle how much of the improvement lasts.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 34; 10-Q_2026-09-30_tfx.htm.jsonl, page 36; 10-Q_2026-09-30_tfx.htm.jsonl, page 44; calculation C11

Interest cover on cash interest is modest and cannot be updated. EBITDA covered cash interest paid 2.48x in FY2025 against 2.70x in FY2024, and accrued interest expense, which is lower because swap interest benefits reduce it, was covered 2.95x and 3.18x. On the same accrued basis last-twelve-months cover is 4.09x, which reflects both higher earnings and lower debt after the sale proceeds. Nine-month cash interest paid is not stated, so a 2026 cash cover cannot be built.
Basis: 10-K_2025-12-31_tfx.htm.jsonl, page 141; 10-K_2025-12-31_tfx.htm.jsonl, page 109; calculation C06

Cash generation improved but shareholder returns absorbed more than it. Last-twelve-months free cash flow after capital expenditure is positive and far above FY2025, which was close to zero after a build-up of receivables and higher tax payments, but it includes the patent settlement and tariff refunds in operating cash flow. In nine months 2026 cash paid for share repurchases was 3.08 times free cash flow, so the OEM sale proceeds also went to shareholders as well as to debt, and a further USD 41.4 million was repurchased after the quarter end. The remaining repurchase authorization means further payouts could slow deleveraging.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-Q_2026-09-30_tfx.htm.jsonl, page 52; calculation C10

Liquidity is adequate against near-term debt but is not fully measured. Cash plus the undrawn revolver before letters of credit is large against the USD 87.5 million of borrowings due within 12 months, and the securitization program has USD 75.0 million drawn, the maximum stated at year-end 2025. Income taxes payable rose by USD 175.851 million over the nine months, and the issuer expects to fund cash taxes on the OEM gain from the revolver and cash in the fourth quarter, which will reduce liquidity and raise net debt by an amount the filing does not state. The nearest dated bullet maturity is the 2028 notes of USD 500.0 million, and the May 2026 refinancing moved the revolver and Term A-1 to 2031; the Acute Care and Interventional Urology sale, expected to bring about USD 530 million gross, would lower net debt if it closes, and closing may slip into 2027.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–22; 10-Q_2026-09-30_tfx.htm.jsonl, page 54; 10-Q_2026-09-30_tfx.htm.jsonl, page 12; calculation C07; calculation C08; calculation C09; calculation C12

No non-debt funding float of size was identified: the filings disclose no supplier finance, factoring, deferred revenue or customer deposits, and the receivables securitization is inside debt. The OEM sale is a multi-figure event whose roles are kept apart: net cash proceeds of USD 1.5 billion, after-tax proceeds of USD 1.3 billion in the latest report, a pre-tax gain recognised in discontinued operations, and an investing inflow in the cash flow statement; the June 2026 report gave a lower after-tax figure and the later report controls.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 11; 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-Q_2026-06-30_tfx.htm.jsonl, page 34

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Reported earnings, cash flow and leverage on the continuing-operations perimeter | Ready with Limitations | EBITDA is derived because none is stated, includes one-off gains in 2026, and the year-end ratios divide consolidated debt by continuing earnings | Use the last-twelve-months ratio with the one-off sensitivity; treat year-end ratios as history on a different footing. |
| Liquidity by facility at 2026-09-30 | Ready with Limitations | Letters of credit are not stated, so undrawn capacity is an upper bound; the securitization program has 75.0 drawn, the maximum stated at year-end 2025 | Obtain the letters of credit amount from the company or a later filing. |
| Debt maturity profile by year | Ready with Limitations | No maturity table after the May 2026 refinancing; Term A-1 amortization and the securitization maturity are not stated | Obtain the amortization schedule and facility terms. |
| Interest cover on cash interest for 2026 | Not Ready | Nine-month cash interest paid is not stated | Use the accrued-expense cover as a labelled alternative until annual cash interest is reported. |
| Net debt after pending items | Ready with Limitations | Cash taxes on the OEM gain are not quantified; the Acute Care sale has not closed; the pro forma rows are standalone, not cumulative | State pro forma net debt only as shown; do not add the rows. |
| Covenant headroom or legal capacity | Not Ready | No reported covenant ratio, covenant definitions or credit agreement text is supplied | Do not infer capacity from these tables. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 30 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 6 |
| Fields present | 24 |
| Fields total | 26 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 0 |

## Calculations

All amounts keep the issuer's USD precision; ratios are shown to two decimals. Where a figure is in thousands the row says so.

| ID | Purpose and period | Operation and complete operands | Result | Unit | Source | Limitation |
|---|---|---|---|---|---|---|
| C01 | Carrying debt, current plus long-term borrowings | FY2024: 100000 + 1555871. FY2025: 100000 + 2541449. 2026-09-30: 87500 + 1531456 | 1655871; 2641449; 1618956 thousand = 1655.871; 2641.449; 1618.956 US$m | USD thousands; US$m | 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111; 10-Q_2026-09-30_tfx.htm.jsonl, page 3 | Carrying value net of issuance costs; includes the securitization program; no lease liabilities. |
| C02 | Net debt, gross debt less cash | FY2024: 1655.871 - 247.852. FY2025: 2641.449 - 378.564. 2026-09-30: 1618.956 - 430.465 | 1408.019; 2262.885; 1188.491 | US$m | 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111; 10-Q_2026-09-30_tfx.htm.jsonl, page 3 | Cash excludes restricted cash equivalents; before events after the balance-sheet date. |
| C03 | EBITDA (Reported) = EBIT + depreciation + intangible amortization | FY2023: 258725 + 45488 + 102617. FY2024: 103651 + 52754 + 108780. FY2025: 118373 + 56082 + 121656. 9M 2025: 104500 + 39177 + 84986. 9M 2026: 198434 + 53330 + 101815 | FY2023 406830; FY2024 265185; FY2025 296111; 9M 2025 228663; 9M 2026 353579 thousand | USD thousands | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112 | Depreciation and amortization total agrees to the consolidated depreciation and amortization of 177738, 161534 and 148105 thousand in the segment note for FY2025, FY2024 and FY2023. |
| C04 | Last twelve months to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | EBITDA: 296111 + 353579 - 228663. Revenue: 1992713 + 1686377 - 1423729. Interest expense: 100223 + 74877 - 72073. Operating cash flow: 96682 + 234834 - 10270. Capital expenditure: 95236 + 54438 - 71418. Repurchases: 300000 + 554951 - 300000. Dividends: 60268 + 43748 - 45242 | EBITDA 421027; revenue 2255361; interest expense 103027; operating cash flow 321246; capital expenditure 78256; repurchases 554951; dividends 58774 thousand | USD thousands | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112 | Stubs end 2026-09-30 and 2025-09-28; continuing operations. |
| C05 | Leverage = debt / EBITDA, to two decimals | FY2024: 1655.871 / 265.185 and 1408.019 / 265.185. FY2025: 2641.449 / 296.111 and 2262.885 / 296.111. 2026-09-30: 1618.956 / 421.027 and 1188.491 / 421.027 | Total debt / EBITDA 6.24; 8.92; 3.85. Net debt / EBITDA 5.31; 7.64; 2.82 | x | 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4 | Year-end rows divide consolidated debt by continuing-operations EBITDA. |
| C06 | Cover = EBITDA / cash interest paid, to two decimals | FY2023: 406.83 / 100.218. FY2024: 265.185 / 98.376. FY2025: 296.111 / 119.337. Accrued cover: FY2024 265.185 / 83.513; FY2025 296.111 / 100.223; LTM 421.027 / 103.027 | Cash cover 4.06; 2.70; 2.48. Accrued cover 3.18; 2.95; 4.09 | x | 10-K_2025-12-31_tfx.htm.jsonl, page 141; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; 10-Q_2026-09-30_tfx.htm.jsonl, page 2 | No last-twelve-months cash interest is available. |
| C07 | Undrawn revolver = commitment less drawn less standby letters of credit | FY2024: 1000.0 - 113.0 - 0.9. FY2025: 1000.0 - 425.0 - 5.1. 2026-09-30: 1000.0 - 60.0 (letters of credit not stated) | 886.1; 569.9; 940.0 | US$m | 10-K_2024-12-31_tfx.htm.jsonl, page 79; 10-K_2025-12-31_tfx.htm.jsonl, page 83; 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–21 | The 2026-09-30 result is before letters of credit. |
| C08 | Debt ladder and principal to carrying value | Principal: 60.0 + 496.875 + 500.0 + 500.0 + 75.0. Residual row: 1631.875 - 87.5 - 500.0 - 500.0. Ladder: 87.5 + 500.0 + 500.0 + 544.375. Reconciliation: 1631.875 - 12.919 | Principal 1631.875; residual 544.375; ladder 1631.875; carrying value 1618.956 | US$m | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-Q_2026-09-30_tfx.htm.jsonl, page 19 | The residual row is arithmetic, not a stated maturity. |
| C09 | Pro forma net debt and leverage for stated events | Repurchases: 1188.491 + 41.4 = 1229.891; 1229.891 / 421.027. Acute Care sale: 1188.491 - 530 = 658.491; 658.491 / 421.027 | Net debt 1229.891; 658.491. Leverage 2.92; 1.56 | US$m; x | 10-Q_2026-09-30_tfx.htm.jsonl, page 12; 10-Q_2026-09-30_tfx.htm.jsonl, page 52; 10-Q_2026-09-30_tfx.htm.jsonl, page 54 | Each event is a standalone adjustment to 2026-09-30, not cumulative. |
| C10 | Free cash flow = operating cash flow less capital expenditure; repurchases over free cash flow | FY2023: 206138 - 46421. FY2024: 301882 - 90437. FY2025: 96682 - 95236. LTM: 321246 - 78256. 9M 2026: 234834 - 54438; repurchases 554.951 / 180.396 | 159717; 211445; 1446; LTM 242990; 9M 2026 180396 thousand. Repurchases over free cash flow 3.08 times | USD thousands; times | 10-Q_2026-09-30_tfx.htm.jsonl, page 4; 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112 | Levered, continuing operations, before acquisitions. |
| C11 | Normalised last-twelve-months EBITDA and net leverage (Analyst Judgement) | 421.027 - 25.0 - 25.3 = 370.727; 1188.491 / 370.727. One-off share: 50.3 / 421.027 x 100 | Normalised EBITDA 370.727; net leverage 3.21; one-off share 11.95 percent | US$m; x; percent | 10-Q_2026-09-30_tfx.htm.jsonl, page 34; 10-Q_2026-09-30_tfx.htm.jsonl, page 36; 10-Q_2026-09-30_tfx.htm.jsonl, page 2 | Removes only the two stated 2026 gains; not applied to any fixed row. |
| C12 | Margins, repayments and decomposition | EBITDA margin: FY2023 406.83 / 1712.441; FY2024 265.185 / 1699.546; FY2025 296.111 / 1992.713; LTM 421.027 / 2255.361, each x 100. Debt repaid after the OEM sale: 700.0 + 490.0. Net debt at 2026-09-30 over FY2025 EBITDA: 1188.491 / 296.111. Change in income taxes payable: 194.638 - 18.787. Cash interest paid less swap interest received: 119.337 - 21.078. Cash interest paid less interest expense: 119.337 - 100.223 | Margins 23.76; 15.60; 14.86; 18.67 percent. Repaid 1190.0. Leverage 4.01. Rise in income taxes payable 175.851. Net cash interest 98.259. Cash interest above expense 19.114 | percent; US$m; x | 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-Q_2026-09-30_tfx.htm.jsonl, page 22; 10-K_2025-12-31_tfx.htm.jsonl, page 141; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112 | Illustrative decomposition: debt repayment explains the larger part of the fall in net leverage. |
| C13 | Statement identities | Balance sheet: 2854145 + 3493716 = 6347861; 3822471 + 3124768 = 6947239; 2819774 + 4278140 = 7097914. Operating, investing, financing, discontinued operations and foreign exchange for FY2025: 96682 - 812653 + 611539 + 207457 + 23174 = 126199; 327649 + 126199 - 51168 = 402680. Segment net revenues FY2025: 1279197 + 472411 + 241105 = 1992713 | All reconcile exactly; the fixed rows without discontinued operations total -81258 for FY2025 (96682 - 812653 + 611539 + 23174) | USD thousands | 10-Q_2026-09-30_tfx.htm.jsonl, page 3; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–112; 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161 | The difference between -81258 and the printed net increase is the discontinued operations flows of 207457. |

## Gaps

- Medium: Letters of credit under the revolver at 2026-09-30 are not stated in any 2026 report, so undrawn committed capacity at that date is an upper bound and liquidity by facility cannot be completed; the only figures are USD 5.1 million at year-end 2025 and USD 0.9 million at year-end 2024. The company or a later filing would close it.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–21; 10-K_2025-12-31_tfx.htm.jsonl, page 83; 10-K_2024-12-31_tfx.htm.jsonl, page 79
- Medium: No debt maturity table is printed after the May 2026 refinancing, and neither the Term A-1 amortization schedule nor the securitization maturity is stated, so the ladder has a residual row not allocated by year. Obtaining the amortization schedule and the securitization terms would close it.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–23; 10-Q_2026-09-30_tfx.htm.jsonl, page 57
- Medium: Cash interest paid is not stated for nine months 2026 or nine months 2025, so last-twelve-months EBITDA over cash interest is not calculable and the 2026 cover row is a gap; accrued-expense cover is shown as a labelled alternative. The next annual report would close it.
Basis: 10-K_2025-12-31_tfx.htm.jsonl, page 141; 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5
- Medium: The issuer states no EBITDA or adjusted EBITDA in the 2025 annual report or the 2026 quarterly reports, so EBITDA is derived from statement lines, includes one-off items, and no bridge or adjusted ratios can be given; only the 2024 annual report prints a free cash flow reconciliation on the whole-company perimeter. An issuer reconciliation would close it.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–4; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112; 10-K_2024-12-31_tfx.htm.jsonl, page 78
- Medium: Cash taxes on the OEM gain are expected in the fourth quarter of 2026 but no amount is stated, and the Acute Care and Interventional Urology sale had not closed, so net debt after both is not established; the pro forma rows are standalone adjustments, not cumulative. A later filing would close it.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 12; 10-Q_2026-09-30_tfx.htm.jsonl, page 54; calculation C09
- Medium: The earnings and debt allocated to the discontinued businesses are not stated, so year-end 2024 and 2025 leverage divides consolidated debt by continuing earnings only and is not a whole-company ratio. Disclosure of the discontinued businesses' EBITDA and debt would close it.
Basis: 10-K_2025-12-31_tfx.htm.jsonl, page 127; 10-K_2025-12-31_tfx.htm.jsonl, pages 110–111
- Low: No source states the legal rank of any facility or whether the senior notes are secured, so the debt stack is not drawn and ranking and note security are marked not supplied. The executed credit agreement and indentures would close it.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 19–23; 10-K_2025-12-31_tfx.htm.jsonl, pages 139–141
- Low: Source dashes and lines not printed in the quarterly reports are carried as not supplied, not zero: pension settlement, gain on sale of assets, loss on extinguishment of debt, insurance settlement, asset impairment, currency hedge gains, acquisition payments, share repurchases, debt fees and excise tax in the periods where the filing shows a dash or no line, and the two labels for swap cash flows. Reported totals remain usable and each total ties to its components.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 2–5; 10-K_2025-12-31_tfx.htm.jsonl, pages 109–112
- Low: Segment results are on a product basis only for Q3 2026, nine months 2026 and their 2025 comparatives, and on a geographic basis for FY2023 to FY2025, so no segment series spans both. A recast of FY2025 on the product basis would close it.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, pages 36–38; 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161
- Low: A separate pension obligation is not printed on the continuing balance sheet; the main US defined benefit plan was terminated and annuitized in 2023 and 2024, and a pension liability acquired with the VI Business sits within other liabilities at an amount not stated. The current portion of operating lease liabilities at 2026-09-30 is also not stated.
Basis: 10-K_2025-12-31_tfx.htm.jsonl, pages 160–161; 10-K_2025-12-31_tfx.htm.jsonl, page 125; 10-Q_2026-09-30_tfx.htm.jsonl, page 3
- Low: Immaterial differences remain between reports: opening cash for 2025 differs by USD 1 thousand, Q3 2025 EBIT by USD 2 thousand, and after-tax OEM sale proceeds are stated differently in the June and September 2026 reports; the later report is used. The fiscal calendar change also leaves the nine-month stubs two days apart.
Basis: 10-K_2025-12-31_tfx.htm.jsonl, pages 111–112; 10-Q_2026-09-30_tfx.htm.jsonl, pages 4–5; 10-K_2025-12-31_tfx.htm.jsonl, page 162; 10-Q_2026-09-30_tfx.htm.jsonl, page 2; 10-Q_2026-09-30_tfx.htm.jsonl, page 7
- Low: No information cutoff adjustment is possible for events between the report signing date of 2026-11-05 and the as-of date of 2026-11-18, because no later document was supplied. The Source readiness limits on covenants and ratings also apply.
Basis: 10-Q_2026-09-30_tfx.htm.jsonl, page 62; Source readiness (CP-0)

## Next module

The orchestrator selects the next module.
