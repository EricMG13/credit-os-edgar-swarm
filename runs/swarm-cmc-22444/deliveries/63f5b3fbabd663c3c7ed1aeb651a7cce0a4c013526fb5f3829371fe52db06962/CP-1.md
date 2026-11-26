---
issuer_id: cmc-22444
module_id: CP-1
analysis_date: 2026-11-18
run_id: cmc-22444-2026-11-18-credit_snapshot-host
pathway: credit_snapshot
module_status: Complete
---

# COMMERCIAL METALS Co (cmc-22444) - financial foundation as of 2026-11-18

## Request

Financial foundation for COMMERCIAL METALS Co (cmc-22444), as of 2026-11-18, on the credit snapshot pathway. The scope is statements, debt, leverage, cover and liquidity for fiscal 2024, fiscal 2025 and the last twelve months to 2026-05-31, from the supplied annual and quarterly filings and results releases.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-08-31_cmc.htm.jsonl | Annual report on Form 10-K for the year ended August 31, 2024 | 2024-10-17 | 8d4b918ae5dfb9f103a90b6a498f9b473fc2884200199e013c27b12f54967ca8 | FY2024 liquidity availability and the original adjusted EBITDA definition |
| 10-K_2025-08-31_cmc.htm.jsonl | Annual report on Form 10-K for the year ended August 31, 2025 | 2025-10-16 | d925fb94e85a880b14ff8f2100f934eaf32d58443b3db315561ab0696f9679de | FY2024 and FY2025 statements, debt note, covenants, segments, subsequent events |
| 10-Q_2026-05-31_cmc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended May 31, 2026 | 2026-06-29 | d7c399e276f561642e056ef2918f65a8d1e9eeb24c4dca36c1c27a66a1ac0487 | Nine-month and third-quarter statements, balance sheet at 2026-05-31, debt, liquidity, acquisitions, segments |
| EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl | Press release reporting third-quarter fiscal 2026 results | 2026-06-25 | a6775657b6b5f16b89ccbb7c0378913ca2b1d83e5b23a07d20fa501ffdcebdc8 | Quarterly adjusted and core EBITDA reconciliation, issuer net leverage and liquidity statements |
| EX99.1_2026-05-31_cmc_cmc-5312026xdividendxex991-htm.htm.jsonl | Press release announcing the quarterly dividend declared June 24, 2026 | 2026-06-24 | 1b482b62b86f55c180a7c920b0ef50fa5e4855879cd2a843b51828ca2f2905da | Dividend declared after the latest balance sheet date |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 98da036e15b11ccea6bcff25b3afd7c64033ec941575bd53275564119f125663 | Source inventory, readiness verdicts and gap list; the pinned files were taken as read |

## Findings

### Bottom line

Net leverage reached 2.47x last-twelve-months reported EBITDA at 2026-05-31 after debt-funded acquisitions, a much heavier claim on cash flow than before, though liquidity stays ample. Total debt is 2.96x EBITDA, and the acquisitions, USD 2,516,122 thousand net of cash acquired, contribute earnings only since December 2025, so a full-year view would show less leverage; the issuer's own adjusted figure is 2.1x.
Basis: calculation C7; calculation C8; 10-Q_2026-05-31_cmc.htm.jsonl, page 4; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 4

Interest cover of 13.46x on cash interest paid flatters the position because the new notes paid only part of a year of coupons; against interest payable over the next twelve months, cover is 6.72x. A litigation accrual of USD 373,476 thousand sits outside debt and would lift net leverage to 2.80x if treated as debt-like.
Basis: calculation C11; calculation C12; 10-Q_2026-05-31_cmc.htm.jsonl, page 3; 10-Q_2026-05-31_cmc.htm.jsonl, page 50

### Analysis by dimension

Net leverage on reported EBITDA moved from 0.34x at the 2024 year end to 0.71x at the 2025 year end and 2.47x at 2026-05-31, and the rise comes from debt rather than weaker earnings. The 2025 year-end net debt of USD 311,043 thousand is not like-for-like: pro forma net debt is USD 986,043 thousand (2.25x) after the Concrete Pipe and Precast acquisition on 2025-12-01 and USD 2,151,043 thousand (4.90x) after the Foley acquisition on 2025-12-15, each on year-end EBITDA that holds none of the acquired earnings. Creditors therefore hold a far larger claim at 2026-05-31, with net debt of USD 2,840,726 thousand, supported by earnings that have absorbed the precast businesses for less than six months.
Basis: calculation C7; calculation C13; 10-Q_2026-05-31_cmc.htm.jsonl, page 10; 10-K_2025-08-31_cmc.htm.jsonl, page 92

Coverage is strong on its face but overstated. Cash interest paid over the last twelve months was USD 85,268 thousand, giving cover of 13.46x, yet the 2033 and 2035 senior unsecured notes, USD 2,000,000 thousand in total, were issued in November 2025 and paid only part of a year of coupons. Interest payable over the next twelve months is USD 170.9 million, which puts run-rate cover at 6.72x on reported EBITDA that itself includes the acquisitions only from December 2025.
Basis: calculation C8; calculation C11; 10-Q_2026-05-31_cmc.htm.jsonl, page 50

Cash-flow quality is adequate but not yet strong. Operating cash flow of USD 918,228 thousand over the last twelve months less capital expenditures of USD 513,190 thousand leaves free cash flow of USD 405,038 thousand, or 0.35x EBITDA, and nine months of working capital absorbed USD 195,098 thousand, which the issuer attributes to higher materials costs in inventories and higher selling prices in receivables. Capital spending of about USD 550 million is planned for fiscal 2026, driven by the fourth micro mill in West Virginia, so free cash flow stays well below operating cash flow while that build continues.
Basis: calculation C8; calculation C14; 10-Q_2026-05-31_cmc.htm.jsonl, pages 48–49

Liquidity covers the visible near-term claims. Cash of USD 559,759 thousand and the undrawn revolver, available after USD 1.0 million of letters of credit, give committed liquidity of USD 1,558,789 thousand, and USD 1,768,475 thousand on the issuer's wider basis, against current maturities of USD 88,792 thousand, a litigation accrual of USD 373,476 thousand whose payment timing is uncertain, and purchase obligations of about USD 780 million due within twelve months. The revolver of USD 1,000 million matures on 2030-12-17.
Basis: calculation C15; 10-Q_2026-05-31_cmc.htm.jsonl, pages 47–48; 10-Q_2026-05-31_cmc.htm.jsonl, pages 50–52

Strongest contrary evidence is the issuer's own message that leverage is falling toward less than 2x ahead of its mid-2027 goal, supported by core EBITDA margin of 14.2% in the latest quarter and expected annualized precast EBITDA of USD 245 million that its 2.1x measure includes. That view would win if the fiscal 2026 results show a full year of precast earnings, free cash flow near the current run-rate and cash used to repay debt; it would lose if the litigation accrual is paid in cash or capital spending stays high, because net debt would then rise rather than fall.
Basis: EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, pages 1 and 4; calculation C12

Data and definition risks are contained but real. Reported EBITDA is derived because the issuer prints none, the issuer changed its adjusted EBITDA definition in the fourth quarter of fiscal 2025 and recast prior periods, and fiscal 2025 EBITDA carries the litigation charge of USD 362,272 thousand, which inflates fiscal 2025 total debt to EBITDA to 3.09x. The issuer's 2.1x measure cannot be reproduced because actual precast results since acquisition are not stated, so leverage here is computed from reported figures only.
Basis: calculation C1; calculation C2; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 4; 10-K_2025-08-31_cmc.htm.jsonl, page 60

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2023-09-01 | 2024-08-31 |
| FY2025 | 2024-09-01 | 2025-08-31 |
| 9M 2025 | 2024-09-01 | 2025-05-31 |
| 9M 2026 | 2025-09-01 | 2026-05-31 |
| Q3 2025 | 2025-03-01 | 2025-05-31 |
| Q3 2026 | 2026-03-01 | 2026-05-31 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-08-31_cmc.htm.jsonl | Annual report (Form 10-K) | Year ended 2024-08-31 (FY2022 to FY2024) | USD | Thousands | Commercial Metals Company and subsidiaries, consolidated | US GAAP | Tier 1 audited statements | Inventoried; used for FY2024 liquidity availability | Original-definition adjusted EBITDA (before the Q4 FY2025 change); superseded by the recast comparatives in the 2025 annual report |
| 10-K_2025-08-31_cmc.htm.jsonl | Annual report (Form 10-K) | Year ended 2025-08-31 (FY2023 to FY2025) | USD | Thousands | Commercial Metals Company and subsidiaries, consolidated | US GAAP | Tier 1 audited statements | FY2024 and FY2025 statements, debt, covenants, segments | Predates the acquisitions, the 2033 and 2035 notes and the December 2025 credit agreement amendment |
| 10-Q_2025-11-30_cmc.htm.jsonl | Quarterly report (Form 10-Q) | Quarter ended 2025-11-30 | USD | Thousands | Commercial Metals Company and subsidiaries, consolidated | US GAAP | Tier 2b unaudited without stated auditor review | Inventoried; not tabulated | First-quarter columns are not tabulated; the issuer's quarterly reconciliation covers the quarter |
| 10-Q_2026-02-28_cmc.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and six months ended 2026-02-28 | USD | Thousands | Commercial Metals Company and subsidiaries, consolidated | US GAAP | Tier 2b unaudited without stated auditor review | Inventoried; not tabulated | Second-quarter columns are not tabulated; the issuer's quarterly reconciliation covers the quarter |
| 10-Q_2026-05-31_cmc.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and nine months ended 2026-05-31 | USD | Thousands | Commercial Metals Company and subsidiaries, consolidated | US GAAP | Tier 2b unaudited without stated auditor review | Latest statements, debt, liquidity, acquisitions, segments | Purchase price allocations are preliminary; no scheduled maturities table |
| EX99.1_2025-11-30_cmc_cmc-11302025xdividendxex991-htm.htm.jsonl | Press release (dividend) | Declared 2026-01-05 | USD | Per share | Commercial Metals Company | Not applicable | Tier 2b issuer release | Inventoried; not used | Context only; no net debt effect stated |
| EX99.1_2025-11-30_cmc_cmc-11302025xearningsrelea-htm.htm.jsonl | Press release (results) | Quarter ended 2025-11-30 | USD | Thousands | Commercial Metals Company, consolidated | US GAAP with non-GAAP measures | Tier 2b issuer release | Inventoried; not tabulated | Non-GAAP measures defined by the issuer |
| EX99.1_2026-02-28_cmc_cmc-2282026xdividendxex991-htm.htm.jsonl | Press release (dividend) | Declared 2026-03-25 | USD | Per share | Commercial Metals Company | Not applicable | Tier 2b issuer release | Inventoried; not used | Context only; no net debt effect stated |
| EX99.1_2026-02-28_cmc_cmc-2282026xearningsreleas-htm.htm.jsonl | Press release (results) | Quarter ended 2026-02-28 | USD | Thousands | Commercial Metals Company, consolidated | US GAAP with non-GAAP measures | Tier 2b issuer release | Inventoried; not tabulated | Non-GAAP measures defined by the issuer |
| EX99.1_2026-02-28_cmc_d117730dex991-htm.htm.jsonl | Press release (board appointment) | Announced 2026-04-13 | Not applicable | Not applicable | Commercial Metals Company | Not applicable | Tier 2b issuer release | Inventoried; not used | No financial content |
| EX99.1_2026-05-31_cmc_cmc-5312026xdividendxex991-htm.htm.jsonl | Press release (dividend) | Declared 2026-06-24 | USD | Per share | Commercial Metals Company | Not applicable | Tier 2b issuer release | Inventoried; dividend declared after the balance sheet date | Aggregate dividend amount is not stated |
| EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl | Press release (results) | Quarter ended 2026-05-31 with four earlier quarters | USD | Thousands | Commercial Metals Company, consolidated | US GAAP with non-GAAP measures | Tier 2b issuer release | Adjusted EBITDA by quarter, issuer leverage and liquidity statements, outlook | Leverage and liquidity figures use issuer definitions |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Commercial Metals Company | Issuer, registrant and borrower under the Credit Agreement | 31 August | USD | Thousands | Company and subsidiaries; Foley Products Company, LLC from 2025-12-15 and Concrete Pipe and Precast, LLC from 2025-12-01 | US GAAP | FY2024, FY2025, quarters ended 2025-11-30, 2026-02-28 and 2026-05-31, nine months ended 2026-05-31 |
| CMC Poland Sp. z.o.o. | Subsidiary; holds the Poland credit facilities and receivables facility | 31 August | PLN facilities, consolidated in USD | Thousands | Consolidated subsidiary | US GAAP | Facility amounts at 2024-08-31, 2025-08-31 and 2026-05-31 |
| Guarantor subsidiaries of the Credit Agreement | Guarantors named as exhibit parties | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: the guarantor list is not in the sources | Not supplied: not stated | Not supplied: not stated |

#### Subsequent events after the 2025 year end

| Date | Subsequent event after 2025-08-31 | Amount | Treatment | Source |
|---|---|---|---|---|
| 2025-09-17 | Equity purchase agreement to acquire Concrete Pipe and Precast, LLC | USD 675.0 million consideration | Excluded from period figures; shown in the post-balance-sheet table | 10-K_2025-08-31_cmc.htm.jsonl, page 137 |
| 2025-10-15 | Agreement to acquire Foley Products Company, LLC with a bridge and backstop commitment letter | Approximately USD 1.84 billion; bridge up to USD 1.85 billion | Excluded from period figures; commitment letter not drawn on the sources read | 10-K_2025-08-31_cmc.htm.jsonl, page 137; 10-K_2025-08-31_cmc.htm.jsonl, page 116 |
| 2025-11 | Issue of 2033 and 2035 senior unsecured notes (day not stated) | USD 2.0 billion gross; USD 1.985 billion net of fees | Included in the 2026-05-31 balance sheet; excluded from year-end figures | 10-Q_2026-05-31_cmc.htm.jsonl, page 22 |
| 2025-12-01 | Concrete Pipe and Precast, LLC acquisition closed | Approximately USD 675 million, cash on hand | Included in 2026 columns; excluded from year-end figures | 10-Q_2026-05-31_cmc.htm.jsonl, page 10 |
| 2025-12-15 | Foley acquisition closed | Approximately USD 1.84 billion, cash | Included in 2026 columns; excluded from year-end figures | 10-Q_2026-05-31_cmc.htm.jsonl, page 10 |
| 2025-12-17 | Third Amendment to the Credit Agreement | Revolver raised from USD 600.0 million to USD 1.0 billion; maturity extended to 2030-12-17 | Included in 2026 availability; excluded from year-end figures | 10-Q_2026-05-31_cmc.htm.jsonl, page 22 |
| 2026-06-24 | Quarterly dividend of 0.20 USD per share declared, payable 2026-07-15 | Aggregate not stated | After the latest balance sheet date; not in any period figure | EX99.1_2026-05-31_cmc_cmc-5312026xdividendxex991-htm.htm.jsonl, page 1 |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Statement figures converted from thousands to millions for the money tables | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | Unit conversion | Total debt USD 3,400,485 thousand | Gross debt US$m 3400.485 | One money unit across the net debt, chart and register tables; conversion is exact | FY2024, FY2025, 2026-05-31 |
| EBITDA (Reported) derived because the issuer prints no unadjusted EBITDA | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | Derivation | Not printed | FY2025 USD 438,920 thousand | Net earnings plus interest, tax and depreciation and amortization | All statement columns |
| Adjusted EBITDA for FY2024 and FY2025 built from annual components | 10-K_2025-08-31_cmc.htm.jsonl | Derivation under the recast definition | Not printed at consolidated level | FY2024 USD 968,677 thousand; FY2025 USD 440,723 thousand | The annual report recasts adjusted EBITDA to exclude unrealized commodity hedge results and prints it only by segment | FY2024, FY2025 |
| Definition change of adjusted EBITDA in the fourth quarter of FY2025 | 10-K_2024-08-31_cmc.htm.jsonl; 10-K_2025-08-31_cmc.htm.jsonl | Definition change | FY2024 segment adjusted EBITDA USD 1,098,397 thousand (original) | USD 1,096,435 thousand (recast) | Later annual report recasts all periods; the recast basis is used | FY2024 |
| Restricted cash and assets held for sale presented differently for 2025-08-31 | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | Presentation difference | Annual report: prepaid and other current assets USD 314,372 thousand and assets held for sale USD 1,204 thousand | Quarterly comparative: prepaid and other USD 312,924 thousand and restricted cash USD 2,652 thousand | Totals agree; the annual report column is kept for FY2025 and restricted cash is shown as not separately printed | FY2025 |
| Corporate and Other net sales derived as consolidated net sales less the three segments | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | Derivation | Not printed as a segment total | FY2025 USD 48,825 thousand | Agrees to the issuer's Corporate and Other sales excluding eliminations | All columns |
| Emerging Businesses Group renamed Construction Solutions Group | 10-Q_2026-05-31_cmc.htm.jsonl | Label change | Emerging Businesses Group | Construction Solutions Group | Name change only; reporting structure and figures unchanged by the issuer | Columns from FY2026 |
| Last twelve months to 2026-05-31 constructed for the register | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | Derived period | Not printed | EBITDA (Reported) USD 1,148,064 thousand | Latest fiscal year plus current nine months less prior nine months | 2026-05-31 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Net sales | 7925972 | 7798480 | 5683962 | 6735570 | 2019984 | 2483245 | USD thousands | Reported; audited for fiscal years, unaudited for interim periods | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–92; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| Cost of goods sold | 6567287 | 6578324 | 4856614 | 5485391 | 1720063 | 2028109 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–92; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| Gross profit | 1358685 | 1220156 | 827348 | 1250179 | 299921 | 455136 | USD thousands | Calculated: net sales less cost of goods sold; the issuer prints no gross profit line | Calculation C4 |
| Selling, general and administrative expenses | 668413 | 700234 | 521187 | 651104 | 175769 | 222314 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–92; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| Interest expense | 47893 | 45498 | 33353 | 105981 | 10864 | 40205 | USD thousands | Reported; total interest expense, net of capitalised interest | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–92; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| Litigation expense | Not supplied: the source prints a dash | 362272 | 358496 | 11580 | 3776 | 3778 | USD thousands | Reported; FY2024 prints a dash | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–92; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| Asset impairments | 6708 | 4607 | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | USD thousands | Reported as a separate line in the annual report only; not a separate line in the quarterly statements | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–92; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| Net costs and operating expenses | 7290301 | 7690935 | 5769650 | 6254056 | 1910472 | 2294406 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–92; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| Earnings (loss) before income taxes | 635671 | 107545 | -85688 | 481514 | 109512 | 188839 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–92; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| Income tax expense (benefit) | 150180 | 22883 | -18569 | 38185 | 26386 | 15824 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–92; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| Net earnings (loss) | 485491 | 84662 | -67119 | 443329 | 83126 | 173015 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–92; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| Depreciation and amortization | 280367 | 285877 | 213397 | 282711 | 72376 | 107422 | USD thousands | Reported in the cash flow statement; third-quarter columns from the issuer's EBITDA reconciliation | 10-K_2025-08-31_cmc.htm.jsonl, page 93; 10-Q_2026-05-31_cmc.htm.jsonl, page 4; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 13 |
| EBITDA (Reported) | 963931 | 438920 | 161062 | 870206 | 192752 | 336466 | USD thousands | Calculated: net earnings plus interest expense plus income tax plus depreciation and amortization; the issuer prints no unadjusted EBITDA | Calculation C1 |
| EBITDA (Adjusted) | 968677 | 440723 | 162295 | 875733 | 187489 | 335909 | USD thousands | Issuer-adjusted: adds back asset impairments and unrealized gains and losses on undesignated commodity hedges (issuer definition from Q4 FY2025). Quarter and nine-month columns as stated by the issuer; FY2025 and FY2024 calculated from annual report components with the same definition | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 13; Calculation C2 |
| Net sales to external customers: North America Steel Group | 6309730 | 6083849 | 4467771 | 5058760 | 1562286 | 1789381 | USD thousands | Reported in the segment note; Corporate and Other is consolidated net sales less the three segments | 10-K_2025-08-31_cmc.htm.jsonl, pages 135–136; 10-Q_2026-05-31_cmc.htm.jsonl, pages 31–33 |
| Net sales to external customers: Emerging Businesses Group (renamed Construction Solutions Group) | 717397 | 747486 | 525733 | 907276 | 197454 | 394574 | USD thousands | Reported in the segment note; Corporate and Other is consolidated net sales less the three segments | 10-K_2025-08-31_cmc.htm.jsonl, pages 135–136; 10-Q_2026-05-31_cmc.htm.jsonl, pages 31–33 |
| Net sales to external customers: Europe Steel Group | 848566 | 918320 | 655026 | 738899 | 247590 | 291235 | USD thousands | Reported in the segment note; Corporate and Other is consolidated net sales less the three segments | 10-K_2025-08-31_cmc.htm.jsonl, pages 135–136; 10-Q_2026-05-31_cmc.htm.jsonl, pages 31–33 |
| Net sales to external customers: Corporate and Other | 50279 | 48825 | 35432 | 30635 | 12654 | 8055 | USD thousands | Reported in the segment note; Corporate and Other is consolidated net sales less the three segments | 10-K_2025-08-31_cmc.htm.jsonl, pages 135–136; 10-Q_2026-05-31_cmc.htm.jsonl, pages 31–33 |
| Adjusted EBITDA: North America Steel Group | 944388 | 742485 | 503069 | 817067 | 179936 | 253487 | USD thousands | Reported segment adjusted EBITDA (issuer-adjusted) | 10-K_2025-08-31_cmc.htm.jsonl, pages 135–136; 10-Q_2026-05-31_cmc.htm.jsonl, pages 31–33 |
| Adjusted EBITDA: Emerging Businesses Group (renamed Construction Solutions Group) | 129530 | 137721 | 87091 | 190412 | 40912 | 97411 | USD thousands | Reported segment adjusted EBITDA (issuer-adjusted) | 10-K_2025-08-31_cmc.htm.jsonl, pages 135–136; 10-Q_2026-05-31_cmc.htm.jsonl, pages 31–33 |
| Adjusted EBITDA: Europe Steel Group | 22517 | 69282 | 30184 | 44166 | 3593 | 34665 | USD thousands | Reported segment adjusted EBITDA (issuer-adjusted) | 10-K_2025-08-31_cmc.htm.jsonl, pages 135–136; 10-Q_2026-05-31_cmc.htm.jsonl, pages 31–33 |
| Adjusted EBITDA: Corporate and Other (calculated) | -127758 | -508765 | -458049 | -175912 | -36952 | -49654 | USD thousands | Calculated: consolidated adjusted EBITDA less the three segments; agrees to the issuer's Corporate and Other expenses in the reconciliation | Calculation C3 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net earnings (loss) | 485491 | 84662 | -67119 | 443329 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Depreciation and amortization | 280367 | 285877 | 213397 | 282711 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Stock-based compensation | 45066 | 37053 | 27816 | 37426 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Deferred income taxes and other long-term taxes | -15319 | -98304 | -94217 | -616 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Litigation expense | Not supplied: the source prints a dash | 362272 | 358496 | 11580 | USD thousands | Reported non-cash add-back; FY2024 prints a dash | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Changes in operating assets and liabilities | 94133 | 38549 | -59446 | -195098 | USD thousands | Interim columns as printed; annual columns calculated as the sum of the four printed working-capital lines (Calculation C5) | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Other operating adjustments | 9970 | 4961 | 20938 | 23691 | USD thousands | Calculated remainder of the issuer's other printed lines (inventory write-downs, hedge and impairment items, asset sale losses, tax credit settlements, financing fee write-offs and other) | Calculation C5 |
| Net Cash from Operating Activities | 899708 | 715070 | 399865 | 603023 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Capital expenditures | -324271 | -402821 | -293904 | -404273 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Acquisitions, net of cash acquired | Not supplied: the source prints a dash | Not supplied: the source prints a dash | Not supplied: the source prints a dash | -2516122 | USD thousands | Reported; the 2026 amount is the Foley and CP&P purchases net of cash acquired; earlier columns print a dash | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Proceeds from government assistance related to property, plant and equipment | Not supplied: the source prints a dash | 50000 | 25000 | Not supplied: the source prints a dash | USD thousands | Reported; a dash is printed where no amount is shown | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Proceeds from the sale of property, plant and equipment | 756 | 5758 | 5439 | 5045 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Proceeds from insurance | Not supplied: the source prints a dash | 2237 | 2237 | 9602 | USD thousands | Reported; FY2024 prints a dash | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Other investing | 513 | -1946 | -1393 | -1328 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Net Cash from Investing Activities | -323002 | -346772 | -262621 | -2907076 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Proceeds from issuance of long-term debt | Not supplied: the source prints a dash | 147724 | 147724 | 1985000 | USD thousands | Reported; net of related fees for the 2026 notes; FY2024 prints a dash | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Repayments of long-term debt | -36346 | -41480 | -30403 | -34211 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Debt issuance costs | Not supplied: the source prints a dash | -622 | -606 | -8489 | USD thousands | Reported; the annual report line is debt issuance and extinguishment; FY2024 prints a dash | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Committed financing fees | Not supplied: the annual report prints no such line | Not supplied: the annual report prints no such line | Not supplied: the source prints a dash | -11563 | USD thousands | Reported in the 2026 quarterly statement; the nine months to 2025-05-31 prints a dash and the annual report prints no such line | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Proceeds from accounts receivable facilities | 175322 | 35979 | 29758 | 109013 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Repayments under accounts receivable facilities | -183347 | -35979 | -29758 | -76465 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Treasury stock acquired | -182932 | -198822 | -148854 | -76106 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Tax withholdings related to share settlements, net of purchase plans | -7595 | -8823 | -9551 | -4333 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Dividends | -78868 | -81433 | -61300 | -62128 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Contribution from non-controlling interest | 7 | 12 | 12 | 14 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Net Cash from Financing Activities | -313759 | -183444 | -102978 | 1820732 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| FX Effect on Cash | 891 | 1495 | 1307 | 634 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Net Cash Change | 263838 | 186349 | 35573 | -482687 | USD thousands | Reported: operating plus investing plus financing plus the exchange rate effect | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Opening Cash | 595717 | 859555 | 859555 | 1045904 | USD thousands | Reported: cash, restricted cash and cash equivalents at the start of the period | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Closing Cash | 859555 | 1045904 | 895128 | 563217 | USD thousands | Reported: cash, restricted cash and cash equivalents at the end of the period | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Cash Interest Paid | 49463 | 51078 | 37190 | 71380 | USD thousands | Reported cash paid for interest, from the supplemental disclosure; classified in operating activities under US GAAP | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| Cash paid for income taxes | 158455 | 116161 | 95976 | 33452 | USD thousands | Reported cash paid for income taxes, from the supplemental disclosure | 10-K_2025-08-31_cmc.htm.jsonl, pages 93–94; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 857922 | 1043252 | 559759 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Restricted cash | Not supplied: not a separate line in the annual report balance sheet | Not supplied: not a separate line in the annual report balance sheet | 3458 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Accounts receivable | 1158946 | 1201680 | 1391195 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Inventories | 971755 | 934310 | 1172564 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Prepaid and other current assets | 285489 | 314372 | 334739 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Assets held for sale | 18656 | 1204 | Not supplied: not a separate line in the quarterly balance sheet | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Total current assets | 3292768 | 3494818 | 3461715 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Property, plant and equipment, net | 2577136 | 2742773 | 3330149 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Intangible assets, net | 234869 | 210815 | 463872 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Goodwill | 385630 | 386846 | 2136509 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Other noncurrent assets | 327436 | 336582 | 404110 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Total Assets | 6817839 | 7171834 | 9796355 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Accounts payable | 350550 | 358373 | 458482 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Accrued contingent litigation-related loss | Not supplied: the source prints a dash | 362272 | 373476 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Other accrued expenses and payables | 445514 | 493879 | 567654 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Current maturities of long-term debt | 38786 | 44289 | 88792 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Total current liabilities | 834850 | 1258813 | 1488404 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Deferred income taxes | 276908 | 184645 | 190672 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Other noncurrent liabilities | 255222 | 225044 | 273445 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Long-term debt | 1150835 | 1310006 | 3311693 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Total Liabilities | 2517815 | 2978508 | 5264214 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Stockholders' equity | 4299776 | 4193066 | 4531867 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Stockholders' equity attributable to non-controlling interests | 248 | 260 | 274 | USD thousands | Reported | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Total Equity | 4300024 | 4193326 | 4532141 | USD thousands | Reported: includes non-controlling interests; no temporary equity is shown | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| Total Debt | 1189621 | 1354295 | 3400485 | USD thousands | Calculated: current maturities of long-term debt plus long-term debt, at balance sheet carrying value net of issuance costs, including finance leases carried in those lines (Calculation C6) | Calculation C6; 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-K_2025-08-31_cmc.htm.jsonl, page 113 |
| Cash & Equivalents | 857922 | 1043252 | 559759 | USD thousands | Reported cash and cash equivalents, excluding restricted cash | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2030 Notes | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 300000 | 300000 | Not applicable | Unsecured | Senior unsecured | USD | 300000 | Not applicable | 4.125% | Fixed | Not applicable | Not applicable | Not applicable | January 2030 | 0 | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-K_2025-08-31_cmc.htm.jsonl, page 114 |
| 2031 Notes | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 300000 | 300000 | Not applicable | Unsecured | Senior unsecured | USD | 300000 | Not applicable | 3.875% | Fixed | Not applicable | Not applicable | Not applicable | February 2031 | 0 | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-K_2025-08-31_cmc.htm.jsonl, page 114 |
| 2032 Notes | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 300000 | 300000 | Not applicable | Unsecured | Senior unsecured | USD | 300000 | Not applicable | 4.375% | Fixed | Not applicable | Not applicable | Not applicable | March 2032 | 0 | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-K_2025-08-31_cmc.htm.jsonl, page 114 |
| 2033 Notes | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 1000000 | 1000000 | Not applicable | Unsecured | Senior unsecured | USD | 1000000 | Not applicable | 5.750% | Fixed | Not applicable | Not applicable | Not applicable | November 2033 | 0 | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-Q_2026-05-31_cmc.htm.jsonl, page 22 |
| 2035 Notes | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 1000000 | 1000000 | Not applicable | Unsecured | Senior unsecured | USD | 1000000 | Not applicable | 6.000% | Fixed | Not applicable | Not applicable | Not applicable | December 2035 | 0 | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-Q_2026-05-31_cmc.htm.jsonl, page 22 |
| Series 2022 Bonds | Tax-exempt bonds | Not supplied: carrying value by instrument is not disclosed | 145060 | 145060 | Not applicable | Not supplied: security not stated | Not supplied: ranking not stated | USD | 145060 | Not applicable | 4.000% | Fixed | Not applicable | Not applicable | Not applicable | October 2047 | Not supplied: schedule not stated | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-K_2025-08-31_cmc.htm.jsonl, page 114 |
| Series 2025 Bonds | Tax-exempt bonds | Not supplied: carrying value by instrument is not disclosed | 150000 | 150000 | Not applicable | Not supplied: security not stated | Not supplied: ranking not stated | USD | 150000 | Not applicable | 4.625% | Fixed | Not applicable | Not applicable | Not applicable | 2055; mandatory tender 2032-05-15 | Not supplied: schedule not stated | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-Q_2026-05-31_cmc.htm.jsonl, page 22 |
| Short-term borrowings | Poland receivables facility advances | Not supplied: carrying value by instrument is not disclosed | 33012 | 33012 | Not applicable | Not supplied: security not stated | Not supplied: ranking not stated | USD | 33012 | Not applicable | 4.630% weighted average | Floating | WIBOR | Not supplied: margin not stated | Not applicable | Not supplied: maturity not stated | Not supplied: not stated | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-Q_2026-05-31_cmc.htm.jsonl, page 22; 10-K_2025-08-31_cmc.htm.jsonl, page 116 |
| Other borrowings | Other | Not supplied: carrying value by instrument is not disclosed | 8819 | 8819 | Not applicable | Not supplied: security not stated | Not supplied: ranking not stated | USD | 8819 | Not applicable | 4.811% weighted average | Floating | Not supplied: reference not stated | Not supplied: margin not stated | Not applicable | Not supplied: maturity not stated | Not supplied: schedule not stated | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-Q_2026-05-31_cmc.htm.jsonl, page 26 |
| Finance leases | Finance lease liabilities | Not supplied: carrying value by instrument is not disclosed | 192029 | 192029 | Not applicable | Not supplied: security not stated | Not supplied: ranking not stated | USD | 192029 | Not applicable | 5.132% weighted average | Not supplied: rate type not stated | Not applicable | Not applicable | Not applicable | Not supplied: see the lease payment schedule | Not supplied: principal schedule not stated | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-Q_2026-05-31_cmc.htm.jsonl, page 20 |
| Revolver (Credit Agreement) | Secured revolving credit facility | Not supplied: carrying value by instrument is not disclosed | 0 | 0 | 1000000 | Secured by U.S.-domiciled inventory (2025-08-31 annual report) | Not supplied: ranking not stated | USD | 0 | Not applicable | Not supplied: margin not stated | Floating | SOFR or base rate | Not supplied: margin not stated | Not applicable | 2030-12-17 | Not applicable | 10-Q_2026-05-31_cmc.htm.jsonl, page 22; 10-K_2025-08-31_cmc.htm.jsonl, page 115 |
| Poland credit facilities | Working capital and trade finance facilities | Not supplied: carrying value by instrument is not disclosed | 0 | 0 | 600000 (PLN thousands; USD 165,312 thousand equivalent stated by the issuer) | Not supplied: security not stated | Not supplied: ranking not stated | PLN | 0 | Not applicable | Not supplied: margin not stated | Not supplied: rate type not stated | Not supplied: reference not stated | Not supplied: margin not stated | Not applicable | April 2028 (2025-08-31 annual report) | Not applicable | 10-Q_2026-05-31_cmc.htm.jsonl, page 22; 10-K_2025-08-31_cmc.htm.jsonl, page 115 |
| Financing cost adjustment | Unamortized issuance costs less unamortized bond premium | -28435 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -28435 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-05-31_cmc.htm.jsonl, page 21 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component (USD thousands) | Current Stub (USD thousands) | Prior-Year Stub (USD thousands) | Derived Value (USD thousands) | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Net sales | LTM | 7798480 | 6735570 | 5683962 | 8850088 | Calculated | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | Includes the precast acquisitions only from December 2025 |
| EBITDA (Reported) | LTM | 438920 | 870206 | 161062 | 1148064 | Calculated | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | Components derived by this method; litigation expense is inside the amount |
| EBITDA (Adjusted) | LTM | 440723 | 875733 | 162295 | 1154161 | Calculated | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl | Issuer definition; FY2025 component built from annual components |
| Cash interest paid | LTM | 51078 | 71380 | 37190 | 85268 | Calculated | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | Cash paid, not interest expense |
| Net cash from operating activities | LTM | 715070 | 603023 | 399865 | 918228 | Calculated | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | Interim working capital is seasonal |
| Capital expenditures | LTM | -402821 | -404273 | -293904 | -513190 | Calculated | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | Total only; maintenance and growth split not disclosed |
| Net earnings (loss) | LTM | 84662 | 443329 | -67119 | 595110 | Calculated | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl | FY2025 and nine months 2025 include litigation expense of USD 362,272 thousand and USD 358,496 thousand |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1189.621 | Net debt data | 963.931 | Calculation C1 | FY2024 / 2024-08-31 | USD | US$m | 1.23 | Calculated | Tier 1 audited statements | Debt at carrying value; EBITDA derived by this method, not issuer-stated |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 331.699 | Net debt data | 963.931 | Calculation C1 | FY2024 / 2024-08-31 | USD | US$m | 0.34 | Calculated | Tier 1 audited statements | Cash excludes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 963.931 | Calculation C1 | 49.463 | Cash flow statement supplemental disclosure | FY2024 / 2024-08-31 | USD | US$m | 19.49 | Calculated | Tier 1 audited statements | Cash paid for interest, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1189.621 | Net debt data | 968.677 | Calculation C2 | FY2024 / 2024-08-31 | USD | US$m | 1.23 | Calculated | Tier 1 audited statements | Issuer-adjusted EBITDA definition from Q4 FY2025; FY2024 and FY2025 annual figures calculated from components |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 331.699 | Net debt data | 968.677 | Calculation C2 | FY2024 / 2024-08-31 | USD | US$m | 0.34 | Calculated | Tier 1 audited statements | Issuer-adjusted EBITDA definition from Q4 FY2025 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 968.677 | Calculation C2 | 49.463 | Cash flow statement supplemental disclosure | FY2024 / 2024-08-31 | USD | US$m | 19.58 | Calculated | Tier 1 audited statements | Cash paid for interest, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1354.295 | Net debt data | 438.920 | Calculation C1 | FY2025 / 2025-08-31 | USD | US$m | 3.09 | Calculated | Tier 1 audited statements | Debt at carrying value; EBITDA derived by this method, not issuer-stated |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 311.043 | Net debt data | 438.920 | Calculation C1 | FY2025 / 2025-08-31 | USD | US$m | 0.71 | Calculated | Tier 1 audited statements | Cash excludes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 438.920 | Calculation C1 | 51.078 | Cash flow statement supplemental disclosure | FY2025 / 2025-08-31 | USD | US$m | 8.59 | Calculated | Tier 1 audited statements | Cash paid for interest, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1354.295 | Net debt data | 440.723 | Calculation C2 | FY2025 / 2025-08-31 | USD | US$m | 3.07 | Calculated | Tier 1 audited statements | Issuer-adjusted EBITDA definition from Q4 FY2025; FY2024 and FY2025 annual figures calculated from components |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 311.043 | Net debt data | 440.723 | Calculation C2 | FY2025 / 2025-08-31 | USD | US$m | 0.71 | Calculated | Tier 1 audited statements | Issuer-adjusted EBITDA definition from Q4 FY2025 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 440.723 | Calculation C2 | 51.078 | Cash flow statement supplemental disclosure | FY2025 / 2025-08-31 | USD | US$m | 8.63 | Calculated | Tier 1 audited statements | Cash paid for interest, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 3400.485 | Net debt data | 1148.064 | Calculation C1 | 2026-05-31 | USD | US$m | 2.96 | Calculated | Tier 2b unaudited; last twelve months built from audited and unaudited periods | Last twelve months to 2026-05-31; includes the precast acquisitions only from December 2025 while debt includes their full funding. Debt at carrying value; EBITDA derived by this method, not issuer-stated |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2840.726 | Net debt data | 1148.064 | Calculation C1 | 2026-05-31 | USD | US$m | 2.47 | Calculated | Tier 2b unaudited; last twelve months built from audited and unaudited periods | Last twelve months to 2026-05-31; includes the precast acquisitions only from December 2025 while debt includes their full funding. Cash excludes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 1148.064 | Calculation C1 | 85.268 | Cash flow statement supplemental disclosure | 2026-05-31 | USD | US$m | 13.46 | Calculated | Tier 2b unaudited; last twelve months built from audited and unaudited periods | Last twelve months to 2026-05-31; includes the precast acquisitions only from December 2025 while debt includes their full funding. Cash paid for interest, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 3400.485 | Net debt data | 1154.161 | Calculation C2 | 2026-05-31 | USD | US$m | 2.95 | Calculated | Tier 2b unaudited; last twelve months built from audited and unaudited periods | Last twelve months to 2026-05-31; includes the precast acquisitions only from December 2025 while debt includes their full funding. Issuer-adjusted EBITDA definition from Q4 FY2025; FY2024 and FY2025 annual figures calculated from components |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2840.726 | Net debt data | 1154.161 | Calculation C2 | 2026-05-31 | USD | US$m | 2.46 | Calculated | Tier 2b unaudited; last twelve months built from audited and unaudited periods | Last twelve months to 2026-05-31; includes the precast acquisitions only from December 2025 while debt includes their full funding. Issuer-adjusted EBITDA definition from Q4 FY2025 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1154.161 | Calculation C2 | 85.268 | Cash flow statement supplemental disclosure | 2026-05-31 | USD | US$m | 13.54 | Calculated | Tier 2b unaudited; last twelve months built from audited and unaudited periods | Last twelve months to 2026-05-31; includes the precast acquisitions only from December 2025 while debt includes their full funding. Cash paid for interest, not interest expense |
| EBITDA margin (reported) | EBITDA (Reported) / Net sales x 100 | 963.931 | Calculation C1 | 7925.972 | Income statement | FY2024 / 2024-08-31 | USD | US$m | 12.16 | Calculated | Tier 1 audited statements | Percent; FY2025 includes litigation expense of USD 362,272 thousand |
| EBITDA (Adjusted) margin | EBITDA (Adjusted) / Net sales x 100 | 968.677 | Calculation C2 | 7925.972 | Income statement | FY2024 / 2024-08-31 | USD | US$m | 12.22 | Calculated | Tier 1 audited statements | Percent; issuer definition |
| Free cash flow / EBITDA | Free cash flow / EBITDA (Reported); free cash flow = net cash from operating activities less capital expenditures | 575.437 | Calculation C14 | 963.931 | Calculation C1 | FY2024 / 2024-08-31 | USD | US$m | 0.60 | Calculated | Tier 1 audited statements | Working capital included in operating cash flow; levered, after cash interest |
| Capital expenditures / net sales | Capital expenditures / Net sales x 100 | 324.271 | Cash flow statement | 7925.972 | Income statement | FY2024 / 2024-08-31 | USD | US$m | 4.09 | Calculated | Tier 1 audited statements | Total capital expenditures; maintenance and growth split not disclosed |
| (EBITDA - capital expenditures) / cash interest | (EBITDA (Reported) - capital expenditures) / cash interest paid | 639.660 | Calculation C1 | 49.463 | Cash flow statement | FY2024 / 2024-08-31 | USD | US$m | 12.93 | Calculated | Tier 1 audited statements | Capital expenditures at the 2026 level include the West Virginia micro mill build |
| Net cash from operating activities / total debt | Net cash from operating activities / Gross debt x 100 | 899.708 | Cash flow statement | 1189.621 | Net debt data | FY2024 / 2024-08-31 | USD | US$m | 75.63 | Calculated | Tier 1 audited statements | Percent; debt at carrying value |
| EBITDA margin (reported) | EBITDA (Reported) / Net sales x 100 | 438.920 | Calculation C1 | 7798.480 | Income statement | FY2025 / 2025-08-31 | USD | US$m | 5.63 | Calculated | Tier 1 audited statements | Percent; FY2025 includes litigation expense of USD 362,272 thousand |
| EBITDA (Adjusted) margin | EBITDA (Adjusted) / Net sales x 100 | 440.723 | Calculation C2 | 7798.480 | Income statement | FY2025 / 2025-08-31 | USD | US$m | 5.65 | Calculated | Tier 1 audited statements | Percent; issuer definition |
| Free cash flow / EBITDA | Free cash flow / EBITDA (Reported); free cash flow = net cash from operating activities less capital expenditures | 312.249 | Calculation C14 | 438.920 | Calculation C1 | FY2025 / 2025-08-31 | USD | US$m | 0.71 | Calculated | Tier 1 audited statements | Working capital included in operating cash flow; levered, after cash interest |
| Capital expenditures / net sales | Capital expenditures / Net sales x 100 | 402.821 | Cash flow statement | 7798.480 | Income statement | FY2025 / 2025-08-31 | USD | US$m | 5.17 | Calculated | Tier 1 audited statements | Total capital expenditures; maintenance and growth split not disclosed |
| (EBITDA - capital expenditures) / cash interest | (EBITDA (Reported) - capital expenditures) / cash interest paid | 36.099 | Calculation C1 | 51.078 | Cash flow statement | FY2025 / 2025-08-31 | USD | US$m | 0.71 | Calculated | Tier 1 audited statements | Capital expenditures at the 2026 level include the West Virginia micro mill build |
| Net cash from operating activities / total debt | Net cash from operating activities / Gross debt x 100 | 715.070 | Cash flow statement | 1354.295 | Net debt data | FY2025 / 2025-08-31 | USD | US$m | 52.80 | Calculated | Tier 1 audited statements | Percent; debt at carrying value |
| EBITDA margin (reported) | EBITDA (Reported) / Net sales x 100 | 1148.064 | Calculation C1 | 8850.088 | Income statement | 2026-05-31 | USD | US$m | 12.97 | Calculated | Tier 2b unaudited; last twelve months | Percent; FY2025 includes litigation expense of USD 362,272 thousand |
| EBITDA (Adjusted) margin | EBITDA (Adjusted) / Net sales x 100 | 1154.161 | Calculation C2 | 8850.088 | Income statement | 2026-05-31 | USD | US$m | 13.04 | Calculated | Tier 2b unaudited; last twelve months | Percent; issuer definition |
| Free cash flow / EBITDA | Free cash flow / EBITDA (Reported); free cash flow = net cash from operating activities less capital expenditures | 405.038 | Calculation C14 | 1148.064 | Calculation C1 | 2026-05-31 | USD | US$m | 0.35 | Calculated | Tier 2b unaudited; last twelve months | Working capital included in operating cash flow; levered, after cash interest |
| Capital expenditures / net sales | Capital expenditures / Net sales x 100 | 513.190 | Cash flow statement | 8850.088 | Income statement | 2026-05-31 | USD | US$m | 5.80 | Calculated | Tier 2b unaudited; last twelve months | Total capital expenditures; maintenance and growth split not disclosed |
| (EBITDA - capital expenditures) / cash interest | (EBITDA (Reported) - capital expenditures) / cash interest paid | 634.874 | Calculation C1 | 85.268 | Cash flow statement | 2026-05-31 | USD | US$m | 7.45 | Calculated | Tier 2b unaudited; last twelve months | Capital expenditures at the 2026 level include the West Virginia micro mill build |
| Net cash from operating activities / total debt | Net cash from operating activities / Gross debt x 100 | 918.228 | Cash flow statement | 3400.485 | Net debt data | 2026-05-31 | USD | US$m | 27.00 | Calculated | Tier 2b unaudited; last twelve months | Percent; debt at carrying value |
| Net sales growth | Net sales FY2025 / Net sales FY2024 - 1 | 7798.480 | Income statement | 7925.972 | Income statement | FY2025 / 2025-08-31 | USD | US$m | -0.0161 | Calculated | Tier 1 audited statements | Fraction; fiscal year on fiscal year |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | LTM 2026-05-31 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|
| Leverage | Net debt / EBITDA (x) | 0.34 | 0.71 | 2.47 | Up | Rise reflects the acquisitions and notes of late 2025 rather than weaker earnings |
| Coverage | EBITDA / cash interest (x) | 19.49 | 8.59 | 13.46 | Down then up | FY2025 EBITDA carries the litigation charge; LTM cash interest holds only part of a year of new coupons |
| Margin | EBITDA margin, reported (%) | 12.16 | 5.63 | 12.97 | Down then up | FY2025 margin depressed by litigation expense |
| Margin | EBITDA margin, adjusted (%) | 12.22 | 5.65 | 13.04 | Down then up | Issuer definition |
| Margin | Core EBITDA margin, issuer-reported (%) | Not supplied: the issuer prints core EBITDA from the third quarter of FY2025 only | 10.74 | 14.23 | Up | Calculated from the issuer's quarterly core EBITDA (Calculation C8); the issuer states 14.4% for the nine months to 2026-05-31 |
| Cash flow | Free cash flow (US$m) | 575.437 | 312.249 | 405.038 | Down then up | Levered; the LTM figure includes working capital build of inventories and receivables |
| Cash flow | Capital expenditures (US$m) | 324.271 | 402.821 | 513.190 | Up | West Virginia micro mill; the issuer estimates about USD 550 million for fiscal 2026 |
| Operating | Segment adjusted EBITDA margin, North America Steel Group (%) | 14.97 | 12.20 | Not supplied: twelve-month segment figures are not constructed | Down then up | Segment adjusted EBITDA over external net sales; nine months to 2026-05-31 is 16.15% |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Net earnings plus interest, tax and depreciation and amortization (reported) | Adjusted EBITDA adds asset impairments and unrealized commodity hedge gains and losses; core EBITDA also adds stock-based compensation, litigation expense, acquisition and integration costs, purchase accounting on inventory and tax credit settlements | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 13; 10-K_2025-08-31_cmc.htm.jsonl, page 60 | LTM 2026-05-31 | Last twelve months: reported USD 1,148,064 thousand, adjusted USD 1,154,161 thousand, core USD 1,259,428 thousand | Financial foundation; Fundamental credit | Use reported EBITDA for ratios and show adjusted beside it; core EBITDA is context only |
| EBITDA (adjusted) definition change | Recast definition applied to every period | Original definition before Q4 FY2025 included unrealized hedge results in segment EBITDA | 10-K_2024-08-31_cmc.htm.jsonl, page 134; 10-K_2025-08-31_cmc.htm.jsonl, page 135 | FY2024 | USD 1,962 thousand on FY2024 segment adjusted EBITDA of USD 1,098,397 thousand | Financial foundation | Recast basis used; original figure logged |
| Net leverage | Net debt at carrying value over reported LTM EBITDA | Net leverage adjusted for acquisitions: net debt (total debt less cash, cash equivalents and restricted cash) over LTM adjusted EBITDA, replacing actual precast results with USD 245 million of expected annualized EBITDA and removing about USD 36.5 million of acquisition costs: 2.1x | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 4 | 2026-05-31 | 2.1x issuer against 2.47x here; the issuer's EBITDA uses an estimate that the sources do not support | Financial foundation; Fundamental credit | Not reproduced: the precast results since acquisition are not stated; issuer figure shown as context |
| Net debt | Carrying value of debt (USD 3,400,485 thousand) less cash and cash equivalents (USD 559,759 thousand) | Total debt at principal (USD 3,428,920 thousand) less cash, cash equivalents and restricted cash (USD 563,217 thousand) | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 4; 10-Q_2026-05-31_cmc.htm.jsonl, page 21 | 2026-05-31 | Net debt USD 2,840,726 thousand here against USD 2,865,703 thousand on the issuer basis, a difference of USD 24,977 thousand | Financial foundation | Carrying value used; both logged |
| Debt: carrying against principal | Carrying value | Principal (total debt before issuance costs and premium) | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-K_2025-08-31_cmc.htm.jsonl, page 113 | FY2024, FY2025, 2026-05-31 | Principal less carrying value: USD 8,620 thousand, USD 9,790 thousand and USD 28,435 thousand | Financial foundation | Carrying value is Total Debt; principal kept in the reconciliation |
| Debt: leases | Lease liabilities on their own lines are not added to debt | Finance leases are carried inside current maturities and long-term debt; operating leases are on separate lines | 10-Q_2026-05-31_cmc.htm.jsonl, pages 20–21 | 2026-05-31 | Finance leases USD 192,029 thousand inside debt; operating lease liabilities USD 224,381 thousand outside | Financial foundation | Total Debt includes finance leases as the issuer carries them; operating leases excluded |
| Debt-like litigation accrual | Not debt | Accrued contingent litigation-related loss held in current liabilities | 10-Q_2026-05-31_cmc.htm.jsonl, pages 3 and 52 | 2026-05-31 | USD 373,476 thousand, outside debt and net debt; payment timing uncertain | Financial foundation; Fundamental credit | Excluded from net debt; sensitivity in the calculations |
| Cash interest against interest expense | Cash paid for interest is the cover denominator | Interest expense is net of capitalised interest and includes non-cash amortization | 10-Q_2026-05-31_cmc.htm.jsonl, pages 4 and 21 | Nine months to 2026-05-31 | Cash paid USD 71,380 thousand against expense USD 105,981 thousand and capitalised interest of USD 14.9 million | Financial foundation | Cash paid used; the gap is mostly timing of coupons on the new notes |
| Multi-figure event: acquisition cost | Cash paid net of cash acquired from the cash flow statement | Purchase prices from the acquisitions note: about USD 1.84 billion and about USD 675 million, each subject to adjustment | 10-Q_2026-05-31_cmc.htm.jsonl, pages 4 and 10 | Nine months to 2026-05-31 | Cash flow USD 2,516,122 thousand against prices summing to about USD 2,515 million, so the figures agree within adjustments | Financial foundation | Cash flow figure used for period flows; prices used for the post-balance-sheet table |
| Balance sheet presentation | Annual report presentation for FY2025 | Quarterly comparative shows restricted cash separately and no assets held for sale line | 10-K_2025-08-31_cmc.htm.jsonl, page 92; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 | FY2025 | USD 2,652 thousand of restricted cash; totals agree at USD 3,494,818 thousand of current assets | Financial foundation | Annual report column kept; difference logged |
| Non-debt funding float and pensions | Not debt unless interest-bearing | Contract liabilities sit in other accrued expenses and payables; pension plan funded status is a small liability | 10-Q_2026-05-31_cmc.htm.jsonl, page 18; 10-K_2025-08-31_cmc.htm.jsonl, page 128 | 2025-08-31, 2026-05-31 | Contract liabilities USD 21,281 thousand at 2026-05-31 and USD 21,631 thousand at 2025-08-31; funded status liability USD 462 thousand at 2025-08-31; neither is material to leverage | Financial foundation | No adjustment; no material non-debt funding float found |
| Segment label | Construction Solutions Group | Emerging Businesses Group until the first quarter of FY2026 | 10-Q_2026-05-31_cmc.htm.jsonl, page 7 | FY2024, FY2025 | Label only | Business & governance | Both labels shown in the segment rows |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-08-31 | 1.23 | 0.34 | x | Reported EBITDA derived from statement lines; audited year |
| FY2025 / 2025-08-31 | 3.09 | 0.71 | x | Reported EBITDA derived from statement lines; audited year |
| 2026-05-31 | 2.96 | 2.47 | x | Reported EBITDA for the last twelve months to 2026-05-31; unaudited; debt includes the full funding of acquisitions that contribute earnings only since December 2025, so leverage is overstated against a full-year pro forma |

Net debt leverage is overstated against a full-year pro forma because acquired earnings are in only from December 2025.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-08-31 | 19.49 | x | Cash interest paid in the year |
| FY2025 / 2025-08-31 | 8.59 | x | Cash interest paid in the year |
| 2026-05-31 | 13.46 | x | Last twelve months; cash interest includes only part of a year of coupons on the notes issued in November 2025, so cover is overstated against run-rate interest |

Last-twelve-months cover is flattered because cash interest includes only part of a year of coupons on the new notes.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-08-31 | 857.922 | 599.053 | US$m | Revolver availability after standby letters of credit; Poland facilities of USD 152,439 thousand and the Poland receivables facility of USD 74,301 thousand are not stated as committed and are excluded |
| FY2025 / 2025-08-31 | 1043.252 | 599.030 | US$m | Revolver availability after standby letters of credit; Poland facilities of USD 161,808 thousand and the Poland receivables facility of USD 78,947 thousand are not stated as committed and are excluded |
| 2026-05-31 | 559.759 | 999.030 | US$m | Revolver of USD 1,000,000 thousand less standby letters of credit; Poland facilities of USD 163,348 thousand and the Poland receivables facility of USD 46,338 thousand are not stated as committed and are excluded |

Only the revolver is stated as committed, so Poland facilities that the issuer counts in available liquidity are excluded here.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2030 | 300.000 | US$m | Principal in USD thousands: 2030 senior notes due January 2030; fiscal years end 31 August; excludes finance leases of USD 192,029 thousand, whose payments by year are not stated at present value |
| FY2031 | 300.000 | US$m | Principal in USD thousands: 2031 senior notes due February 2031; fiscal years end 31 August; excludes finance leases of USD 192,029 thousand, whose payments by year are not stated at present value |
| FY2032 | 300.000 | US$m | Principal in USD thousands: 2032 senior notes due March 2032; fiscal years end 31 August; excludes finance leases of USD 192,029 thousand, whose payments by year are not stated at present value |
| FY2034 | 1000.000 | US$m | Principal in USD thousands: 2033 senior notes due November 2033; fiscal years end 31 August; excludes finance leases of USD 192,029 thousand, whose payments by year are not stated at present value |
| FY2036 | 1000.000 | US$m | Principal in USD thousands: 2035 senior notes due December 2035; fiscal years end 31 August; excludes finance leases of USD 192,029 thousand, whose payments by year are not stated at present value |
| FY2048 and later | 295.060 | US$m | Principal in USD thousands: Series 2022 Bonds due October 2047 (145,060) and Series 2025 Bonds maturing 2055 (150,000), whose mandatory tender is on 2032-05-15; fiscal years end 31 August; excludes finance leases of USD 192,029 thousand, whose payments by year are not stated at present value |
| Maturity year not stated | 41.831 | US$m | Principal in USD thousands: Short-term borrowings of 33,012 (Poland receivables advances) and other borrowings of 8,819, whose maturities the quarterly report does not give; fiscal years end 31 August; excludes finance leases of USD 192,029 thousand, whose payments by year are not stated at present value |

The ladder is at 2026-05-31, excludes finance leases and shows no repayments for fiscal 2026 to 2029 because none is stated by year.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-05-31 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Net sales | 7925.972 | 7798.480 | 8850.088 | US$m | Reported; last twelve months calculated | Calculation C8 |
| EBITDA (Reported) | 963.931 | 438.920 | 1148.064 | US$m | Derived from statement lines | Calculation C1 |
| EBITDA (Adjusted) | 968.677 | 440.723 | 1154.161 | US$m | Issuer definition; annual figures calculated | Calculation C2 |
| Total debt (carrying value) | 1189.621 | 1354.295 | 3400.485 | US$m | Balance sheet, including finance leases | Calculation C6 |
| Net debt | 331.699 | 311.043 | 2840.726 | US$m | Total debt less cash and cash equivalents | Calculation C7 |
| Total debt / EBITDA (x) | 1.23 | 3.09 | 2.96 | x | Reported EBITDA | T4.9 register |
| Net debt / EBITDA (x) | 0.34 | 0.71 | 2.47 | x | Reported EBITDA | T4.9 register |
| Net debt / adjusted EBITDA (x) | 0.34 | 0.71 | 2.46 | x | Adjusted EBITDA | T4.9 register |
| EBITDA / cash interest (x) | 19.49 | 8.59 | 13.46 | x | Cash interest paid | T4.9 register |
| Free cash flow | 575.437 | 312.249 | 405.038 | US$m | Operating cash flow less capital expenditures | Calculation C14 |
| Committed liquidity (cash plus revolver availability) | 1456.975 | 1642.282 | 1558.789 | US$m | Cash plus undrawn revolver after letters of credit | Calculation C15 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-08-31 | 1189.621 | 857.922 | 331.699 | US$m | Carrying value of current maturities and long-term debt at 2024-08-31, net of issuance costs and including finance leases carried in those lines; principal USD 1,198,241 thousand. Cash excludes restricted cash |
| FY2025 / 2025-08-31 | 1354.295 | 1043.252 | 311.043 | US$m | Carrying value of current maturities and long-term debt at 2025-08-31, net of issuance costs and including finance leases carried in those lines; principal USD 1,364,085 thousand. Reported before the 2025 and 2026 acquisitions and notes |
| 2026-05-31 | 3400.485 | 559.759 | 2840.726 | US$m | Carrying value at 2026-05-31 including finance leases of USD 192,029 thousand carried in the debt lines; principal USD 3,428,920 thousand. Reported after the acquisitions; cash excludes restricted cash of USD 3,458 thousand |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-05-31 | 3236.891 | 163.594 | 3400.485 | US$m | Reconciling items net: finance leases left out of the ladder 192,029 less unamortized issuance costs 32,551 plus unamortized bond premium 4,116 (thousands); principal including finance leases is 3,428,920 (thousands) |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Concrete Pipe and Precast, LLC acquisition closed, paid from cash on hand | 2025-12-01 | 675.000 | 986.043 | 2.25 | US$m | Relative to the 2025-08-31 year end: net debt USD 311,043 thousand plus the stated price of about USD 675 million (subject to adjustment) over year-end reported EBITDA of USD 438,920 thousand, which holds none of the acquired earnings (Calculation C13). Source: 10-Q_2026-05-31_cmc.htm.jsonl, page 10 |
| Foley acquisition closed, funded by the 2033 and 2035 notes | 2025-12-15 | 1840.000 | 2151.043 | 4.90 | US$m | Relative to the 2025-08-31 year end: net debt plus the stated price of about USD 1.84 billion (subject to adjustment) over year-end reported EBITDA, with none of the acquired earnings; the notes themselves add debt and cash equally (Calculation C13). Source: 10-Q_2026-05-31_cmc.htm.jsonl, page 10 |
| 2033 and 2035 senior unsecured notes issued | Not supplied: the source states November 2025 only | Not supplied: net effect depends on issuance costs, which are split between amounts netted from proceeds and amounts paid separately | Not supplied: amount not stated | Not supplied: amount not stated | US$m | Gross proceeds USD 2.0 billion, net proceeds USD 1.985 billion after USD 15.0 million of fees, aggregate issuance costs USD 21.3 million; the issue is already in the 2026-05-31 balance sheet. Source: 10-Q_2026-05-31_cmc.htm.jsonl, page 22 |
| Quarterly dividend of 0.20 USD per share declared, payable 2026-07-15 | 2026-06-24 | Not supplied: the aggregate amount is not stated | Not supplied: amount not stated | Not supplied: amount not stated | US$m | After the 2026-05-31 balance sheet; the press release gives the per-share amount, record date 2026-07-06 and payment date only. Source: EX99.1_2026-05-31_cmc_cmc-5312026xdividendxex991-htm.htm.jsonl, page 1 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 | 7925.972 | 968.677 | US$m | Twelve months; issuer-adjusted EBITDA (issuer definition from Q4 FY2025) calculated from annual report components; audited statements |
| FY2025 | 7798.480 | 440.723 | US$m | Twelve months; issuer-adjusted EBITDA calculated from stated quarterly figures and annual components; litigation expense of USD 362,272 thousand is not added back in this measure |
| LTM 2026-05-31 | 8850.088 | 1154.161 | US$m | Twelve months to 2026-05-31; unaudited; precast acquisitions included only from December 2025; issuer-adjusted EBITDA |

The last-twelve-months row includes the acquired precast businesses only from December 2025 and the fiscal 2025 row carries the litigation charge.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolver (Credit Agreement) | 1 | Yes | 0.000 | 0.00 | US$m | Drawn amount nil at 2026-05-31; commitment USD 1,000,000 thousand; secured by U.S.-domiciled inventory per the annual report; guarantor subsidiaries are named only as exhibit parties and the guarantor list is not supplied; cumulative leverage counts only the facilities listed over last twelve months reported EBITDA, and omits bonds, finance leases and other debt of unstated rank totalling USD 528,920 thousand |
| 2030 senior unsecured notes | 2 | No | 300.000 | 0.26 | US$m | Senior unsecured notes; guarantor scope not stated; cumulative leverage counts only the facilities listed over last twelve months reported EBITDA, and omits bonds, finance leases and other debt of unstated rank totalling USD 528,920 thousand |
| 2031 senior unsecured notes | 2 | No | 300.000 | 0.52 | US$m | Senior unsecured notes; guarantor scope not stated; cumulative leverage counts only the facilities listed over last twelve months reported EBITDA, and omits bonds, finance leases and other debt of unstated rank totalling USD 528,920 thousand |
| 2032 senior unsecured notes | 2 | No | 300.000 | 0.78 | US$m | Senior unsecured notes; guarantor scope not stated; cumulative leverage counts only the facilities listed over last twelve months reported EBITDA, and omits bonds, finance leases and other debt of unstated rank totalling USD 528,920 thousand |
| 2033 senior unsecured notes | 2 | No | 1000.000 | 1.65 | US$m | Senior unsecured notes issued November 2025; guarantor scope not stated; cumulative leverage counts only the facilities listed over last twelve months reported EBITDA, and omits bonds, finance leases and other debt of unstated rank totalling USD 528,920 thousand |
| 2035 senior unsecured notes | 2 | No | 1000.000 | 2.53 | US$m | Senior unsecured notes issued November 2025; guarantor scope not stated; cumulative leverage counts only the facilities listed over last twelve months reported EBITDA, and omits bonds, finance leases and other debt of unstated rank totalling USD 528,920 thousand |

Cumulative leverage counts only the facilities whose security is stated and so omits USD 528,920 thousand of other debt.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), last twelve months to 2026-05-31 | 1148.064 | US$m | Derived: net earnings plus interest, tax and depreciation and amortization (Calculation C1 and C8); unaudited; the opening measure |
| Asset impairments added back | 3.436 | US$m | Annual report USD 4,607 thousand less nine months to 2025-05-31 USD 1,171 thousand; nine months to 2026-05-31 nil; classified as non-cash, realisation not stated (Calculation C16) |
| Unrealized loss on undesignated commodity hedges added back | 2.661 | US$m | Annual gain of USD 2,804 thousand deducted, nine months to 2026-05-31 loss of USD 5,527 thousand, less nine months to 2025-05-31 loss of USD 62 thousand; classified as non-cash mark-to-market, realisation not stated (Calculation C16) |
| EBITDA (Adjusted), last twelve months to 2026-05-31 | 1154.161 | US$m | Issuer-adjusted measure; the issuer's separate core EBITDA adds further items that are not in this bridge (Calculation C8) |

The bridge covers only the issuer's adjusted EBITDA items, not its wider core EBITDA.

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and coverage at 2026-05-31 | Ready with Limitations | LTM EBITDA includes the acquisitions only from December 2025 and cash interest only part of a year of new coupons; no year ended 2026-08-31 statements | Quote leverage with its basis and read it beside the issuer's adjusted figure and the run-rate interest cover |
| Liquidity and near-term obligations | Ready | Poland facilities and receivables facility not stated as committed; litigation payment timing uncertain | None required |
| Maturity wall | Ready with Limitations | Maturities of USD 41,831 thousand are not allocated by year; finance leases are outside the ladder; Series 2025 Bonds tender in 2032 | Use the ladder with its stated exclusions |
| Covenant headroom | Not Ready | Covenant ratios at 2026-05-31 and amended terms are not stated; levels are known only at 2025-08-31 | Obtain the compliance figures and the amended credit agreement |
| Debt by seniority and guarantors | Not Ready | Indentures not supplied; guarantor scope and security of the bonds, leases and other borrowings not stated | Obtain the indentures and guarantor lists |
| Fiscal year 2026 results | Not Ready | No document dated after 2026-06-29 | Add the fiscal 2026 annual report or results release if published |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 34 |
| Calculated | 22 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 5 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 4 |

## Calculations

| ID | Calculation | Inputs | Result | Unit | Source |
|---|---|---|---|---|---|
| C1 | EBITDA (Reported) = net earnings + interest expense + income tax + depreciation and amortization | FY2024: 485,491 + 47,893 + 150,180 + 280,367. FY2025: 84,662 + 45,498 + 22,883 + 285,877. 9M 2025: -67,119 + 33,353 + -18,569 + 213,397. 9M 2026: 443,329 + 105,981 + 38,185 + 282,711. Q3 2025: 83,126 + 10,864 + 26,386 + 72,376. Q3 2026: 173,015 + 40,205 + 15,824 + 107,422 | FY2024 963,931; FY2025 438,920; 9M 2025 161,062; 9M 2026 870,206; Q3 2025 192,752; Q3 2026 336,466 | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl, pages 91–93; 10-Q_2026-05-31_cmc.htm.jsonl, pages 2 and 4 |
| C2 | EBITDA (Adjusted) = EBITDA (Reported) + asset impairments + unrealized (gain) loss on undesignated commodity hedges | FY2024: 963,931 + 6,708 + -1,962. FY2025: 438,920 + 4,607 + -2,804, which agrees to 9M 2025 162,295 + Q4 FY2025 278,428. Quarter and nine-month columns as stated by the issuer: Q3 2026 335,909; Q3 2025 187,489; 9M 2026 875,733; 9M 2025 162,295. Cross-check from segment note: FY2024 1,096,435 - 127,758; FY2025 949,488 - 508,765 | FY2024 968,677; FY2025 440,723 | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl, pages 93 and 135; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 13 |
| C3 | Adjusted EBITDA: Corporate and Other = consolidated adjusted EBITDA - three segments | FY2024: 968,677 - 1,096,435. FY2025: 440,723 - 949,488. 9M 2025: 162,295 - 620,344. 9M 2026: 875,733 - 1,051,645. Q3 2025: 187,489 - 224,441. Q3 2026: 335,909 - 385,563 | FY2024 -127,758; FY2025 -508,765; 9M 2025 -458,049; 9M 2026 -175,912; Q3 2025 -36,952; Q3 2026 -49,654, each equal to the issuer's Corporate and Other expenses | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl, page 135; 10-Q_2026-05-31_cmc.htm.jsonl, pages 31–33 |
| C4 | Gross profit = net sales - cost of goods sold | FY2024: 7,925,972 - 6,567,287. FY2025: 7,798,480 - 6,578,324. 9M 2025: 5,683,962 - 4,856,614. 9M 2026: 6,735,570 - 5,485,391. Q3 2025: 2,019,984 - 1,720,063. Q3 2026: 2,483,245 - 2,028,109 | FY2024 1,358,685; FY2025 1,220,156; 9M 2025 827,348; 9M 2026 1,250,179; Q3 2025 299,921; Q3 2026 455,136 | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl, page 91; 10-Q_2026-05-31_cmc.htm.jsonl, page 2 |
| C5 | Working capital and other operating adjustments | FY2024 working capital: 75,703 + 61,777 + -22,326 + -21,021 = 94,133. FY2025: -28,621 + 42,590 + 49,836 + -25,256 = 38,549. Other operating adjustments = net cash from operating activities less the six listed lines: FY2024 899,708 - 889,738; FY2025 715,070 - 710,109; 9M 2025 399,865 - 378,927; 9M 2026 603,023 - 579,332 | Other operating adjustments: FY2024 9,970; FY2025 4,961; 9M 2025 20,938; 9M 2026 23,691 | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl, page 93; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| C6 | Total Debt = current maturities of long-term debt + long-term debt; principal less issuance costs plus premium | FY2024: 38,786 + 1,150,835 = 1,189,621; principal 1,198,241 - 13,073 + 4,453. FY2025: 44,289 + 1,310,006 = 1,354,295; principal 1,364,085 - 14,051 + 4,261. 2026-05-31: 88,792 + 3,311,693 = 3,400,485; principal 3,428,920 - 32,551 + 4,116. Issuer net debt basis at 2026-05-31: 3,428,920 - 563,217 = 2,865,703, which is 24,977 above 3,400,485 - 559,759 | Total Debt FY2024 1,189,621; FY2025 1,354,295; 2026-05-31 3,400,485. Principal less carrying value: FY2024 8,620; FY2025 9,790; 2026-05-31 28,435 | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl, pages 92 and 113; 10-Q_2026-05-31_cmc.htm.jsonl, pages 3 and 21; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 4 |
| C7 | Net debt = gross debt - cash and cash equivalents | FY2024: 1,189,621 - 857,922. FY2025: 1,354,295 - 1,043,252. 2026-05-31: 3,400,485 - 559,759 | FY2024 331,699 (US$m 331.699); FY2025 311,043 (US$m 311.043); 2026-05-31 2,840,726 (US$m 2,840.726) | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl, page 92; 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| C8 | Last twelve months = latest fiscal year + current nine months - prior nine months; core EBITDA from the issuer's quarterly table | Net sales 7,798,480 + 6,735,570 - 5,683,962. EBITDA (Reported) 438,920 + 870,206 - 161,062. EBITDA (Adjusted) 440,723 + 875,733 - 162,295. Cash interest 51,078 + 71,380 - 37,190. Operating cash flow 715,070 + 603,023 - 399,865. Capital expenditures -402,821 + -404,273 - -293,904. Core EBITDA: FY2025 545,821 + 291,441 = 837,262; LTM 837,262 + 967,987 - 545,821 = 1,259,428, which equals 353,596 + 297,473 + 316,918 + 291,441 | Net sales 8,850,088; EBITDA (Reported) 1,148,064; EBITDA (Adjusted) 1,154,161; cash interest 85,268; operating cash flow 918,228; capital expenditures -513,190; core EBITDA 1,259,428 | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl; 10-Q_2026-05-31_cmc.htm.jsonl; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, pages 13–14 |
| C9 | Debt ladder and reconciliation at 2026-05-31 | Ladder: 300,000 + 300,000 + 300,000 + 1,000,000 + 1,000,000 + 295,060 + 41,831 = 3,236,891. Reconciling items: 192,029 finance leases left out - 32,551 issuance costs + 4,116 bond premium = 163,594. Principal 3,236,891 + 163,594 = 3,400,485 | Contractual principal 3,236,891; reconciling items 163,594; carrying value 3,400,485 | USD thousands | 10-Q_2026-05-31_cmc.htm.jsonl, pages 21–22 |
| C10 | Segment external net sales plus Corporate and Other equal consolidated net sales | FY2025: 6,083,849 + 747,486 + 918,320 + 48,825. FY2024: 6,309,730 + 717,397 + 848,566 + 50,279. 9M 2026: 5,058,760 + 907,276 + 738,899 + 30,635 | FY2025 7,798,480; FY2024 7,925,972; 9M 2026 6,735,570, each equal to reported net sales | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl, pages 135–136; 10-Q_2026-05-31_cmc.htm.jsonl, page 32 |
| C11 | Run-rate EBITDA / cash interest: last twelve months reported EBITDA over interest payable on long-term debt in the next twelve months | 1,148,064 thousand / USD 170.9 million (170,900 thousand). Compare 1,148,064 / 85,268 = 13.46x on cash interest paid | 6.72x | times | 10-Q_2026-05-31_cmc.htm.jsonl, page 50 |
| C12 | Net debt including the litigation accrual / EBITDA (Reported) | (2,840,726 + 373,476) / 1,148,064 | 3,214,202 / 1,148,064 = 2.80x | times | 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| C13 | Pro forma net debt and leverage for events after the 2025-08-31 year end | CP&P: 311,043 + 675,000 = 986,043; 986,043 / 438,920 = 2.25x. Foley: 311,043 + 1,840,000 = 2,151,043; 2,151,043 / 438,920 = 4.90x. Each event taken alone against year-end net debt and year-end reported EBITDA | CP&P 986,043 thousand and 2.25x; Foley 2,151,043 thousand and 4.90x | USD thousands and times | 10-Q_2026-05-31_cmc.htm.jsonl, page 10 |
| C14 | Free cash flow = net cash from operating activities - capital expenditures | FY2024: 899,708 - 324,271. FY2025: 715,070 - 402,821. LTM: 918,228 - 513,190. Conversion LTM: 405,038 / 1,148,064 | FY2024 575,437; FY2025 312,249; LTM 405,038; conversion 0.35x | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl, page 93; 10-Q_2026-05-31_cmc.htm.jsonl, page 4 |
| C15 | Liquidity at 2026-05-31: cash and committed revolver availability; with Poland facilities as the issuer counts them | Cash 559,759 + revolver availability 999,030 (commitment USD 1,000 million less letters of credit). With Poland credit facilities 163,348 and Poland receivables facility 46,338 | Committed liquidity 1,558,789; issuer basis 1,768,475 | USD thousands | 10-Q_2026-05-31_cmc.htm.jsonl, pages 47–48 |
| C16 | Last twelve months adjusted EBITDA bridge items | Asset impairments: 4,607 + 0 - 1,171 = 3,436. Unrealized loss on undesignated commodity hedges: -2,804 + 5,527 - 62 = 2,661. 1,148,064 + 3,436 + 2,661 | 1,154,161 | USD thousands | 10-K_2025-08-31_cmc.htm.jsonl, page 93; 10-Q_2026-05-31_cmc.htm.jsonl, page 4; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 13 |

## Gaps

- Medium: Covenant ratios at 2026-05-31 and the terms of the amended credit agreement beyond its higher commitment and later maturity are not stated; levels of 2.50x minimum interest cover and 0.60x maximum debt to capitalization and reported ratios are available only at 2025-08-31, so covenant headroom at the latest date cannot be calculated. Closing this needs the compliance figures and the credit agreement.
- Medium: Indentures and guarantor lists are not in the sources, so guarantor scope for the notes is not stated and the security and ranking of the tax-exempt bonds, finance leases, Poland receivables advances and other borrowings, USD 528,920 thousand in total, are not stated; they are left out of the debt stack and its cumulative leverage.
- Medium: No statements after 2026-05-31 are in the sources, so the year ended 2026-08-31 and its leverage are not available; the latest balance sheet is 171 days before the as-of date. Closing this needs the fiscal 2026 annual report or results release if published.
- Medium: The issuer's net leverage adjusted for acquisitions of 2.1x cannot be reproduced because the precast results since acquisition are not stated, and the USD 245 million of expected annualized EBITDA it substitutes is a management estimate. Leverage here uses reported figures only.
- Low: The quarterly report gives no maturity year for short-term borrowings of USD 33,012 thousand and other borrowings of USD 8,819 thousand, and no repayment schedule after the November 2025 notes; finance leases of USD 192,029 thousand are outside the ladder, and the Series 2025 Bonds have a mandatory tender on 2032-05-15 although they mature in 2055. The ladder is therefore partial and flagged as such.
- Low: The first and second quarters of fiscal 2026 are not tabulated in the statement tables; their adjusted EBITDA appears in the issuer's quarterly reconciliation, and the last twelve months are built from the annual and nine-month columns.
- Low: Lines the source prints as a dash are shown as not supplied rather than zero: litigation expense and accrued contingent litigation-related loss in FY2024, acquisitions in FY2024, FY2025 and the first nine months of 2025, government assistance in FY2024 and the first nine months of 2026, and the proceeds from issuance of long-term debt in FY2024; debt issuance costs and committed financing fees are likewise blank where the source prints no line.
- Low: Asset impairments are not a separate line in the quarterly statements, so interim columns show them as not supplied; the first nine months of 2025 amount of USD 1,171 thousand appears only in the issuer's reconciliation.
- Low: Restricted cash is not a separate line in the annual report balance sheet for FY2024 and FY2025 and assets held for sale are not a separate line in the latest quarterly balance sheet; the quarterly comparative shows USD 2,652 thousand of restricted cash at 2025-08-31 with totals unchanged.
- Low: Other noncurrent liabilities of USD 273,445 thousand include operating lease liabilities of USD 180,846 thousand and other items that the balance sheet does not split, so pension and other non-debt obligations are not separately stated there; the pension funded status is a small liability.
- Low: Capital expenditures are shown in total because the sources give no maintenance and growth split, and no single-period segment margin for the last twelve months is constructed.
- Low: The 2033 and 2035 notes were issued in November 2025 with no day stated, and the aggregate dividend declared on 2026-06-24 is not stated, so neither has a pro forma net debt figure.

## Next module

The orchestrator selects the next module.
