---
issuer_id: smg-825542
module_id: CP-1
analysis_date: 2026-11-18
module_status: Complete
---

## Request

Financial foundation for Scotts Miracle-Gro Co (issuer smg-825542), as of 2026-11-18, on the credit snapshot pathway. Scope: statements, debt, liquidity and credit metrics from the five supplied filings, up to the quarter ended 2026-06-27. No credit recommendation is made.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-09-30_smg.htm.jsonl | Annual report on Form 10-K for the year ended 30 September 2024 | 2024-11-26 | 2468e93d0f1474c02e1478c780490aff860bbc4682adc9a8a378146055be8eac | FY2024 statements cross-check, supplier finance balance and covenant ratios at 2024-09-30 |
| 10-K_2025-09-30_smg.htm.jsonl | Annual report on Form 10-K for the year ended 30 September 2025 | 2025-11-25 | cabb870874034ee7db3114468e051989188b2ef3fa12522d4a68f29a655e3981 | FY2024 and FY2025 statements, debt note and maturity schedule, covenants, segments, interest paid |
| 10-Q_2025-12-27_smg.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 27 December 2025 | 2026-02-04 | e45bfbab2957af3af1c6839ca44e2979f2195ba8f0d893290e4a44c6dcb7f454 | Borrowing availability and covenant ratios at 2025-12-27 |
| 10-Q_2026-03-28_smg.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 28 March 2026 | 2026-05-06 | 715e408f9a75e3fe5ac91ca251c2c0c05f3ecf4d54a2b3652e95cf3cecfb00c6 | Debt table, borrowing availability and covenant ratios at 2026-03-28; Hawthorne divestiture description |
| 10-Q_2026-06-27_smg.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 27 June 2026 | 2026-08-05 | 7eb6e57e86540fc16918dc4e92e3773c193b03aa5c7661c90d6dbf7ef171bbcb | Nine-month and quarterly statements, debt, liquidity, covenants, segments, discontinued operations |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 54d1e3c45d8950cf5269e9c6062521c61f1868e60bf1c2d1e9b1493fb8f56176 | Source inventory, perimeter and freshness limits, gap ledger |

## Findings

### Bottom line

Scotts Miracle-Gro's unadjusted leverage is 6.12x at June 27, 2026, inflated by a USD 101.8 million sale loss, while covenant leverage of 3.78x sits inside its 5.00x limit, so the nearer creditor questions are refinancing and liquidity.

On the same unadjusted basis, debt to EBITDA improved from 10.32x in FY2024 to 4.95x in FY2025, and interest cover was 2.94x over the last twelve months. Liquidity of USD 1,409.5 million is almost all undrawn revolver, against USD 277.0 million of debt due within a year, including USD 250.0 million of notes maturing December 15, 2026. Annual and quarterly figures sit on different Hawthorne perimeters, and the covenant earnings definition is not reconciled in the filings.
Basis: 10-Q_2026-06-27_smg.htm.jsonl, pages 4, 12, 19, 20, 22, 54; 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; calculation L1; calculation V7; calculation V4; calculation V1; calculation V9; calculation LQ3

### Key findings

Unadjusted total debt to EBITDA improved from 10.32x in FY2024 to 4.95x in FY2025 because EBITDA roughly doubled, from USD 215.8 million to USD 425.5 million, while carrying debt fell from USD 2,226.8 million to USD 2,106.4 million. The gain came from a better gross margin rate, up from 23.94% to 30.59% on lower sales, and from smaller impairment, restructuring and other charges, down from USD 146.3 million to USD 83.8 million, not from growth. At June 27, 2026 the ratio is 6.12x on last-twelve-months EBITDA of USD 345.3 million, which absorbs the USD 101.8 million loss on selling the Hawthorne business; income from operations on the continuing perimeter rose to USD 549.7 million over nine months from USD 525.7 million.
Basis: 10-K_2025-09-30_smg.htm.jsonl, pages 102–103, 123; 10-Q_2026-06-27_smg.htm.jsonl, pages 2, 3, 12, 19; calculation R1; calculation R2; calculation L1; calculation D1; calculation D2; calculation I1; calculation I2; calculation V1; calculation V4; calculation V7

Unadjusted EBITDA covered cash interest 1.37x in FY2024, 3.24x in FY2025 and 2.94x over the last twelve months, as cash interest paid fell from USD 157.7 million to USD 131.4 million and then to USD 117.4 million on a last-twelve-months basis. The issuer's own coverage ratio is 5.67x against a 3.00x minimum for fiscal 2026, but it uses an adjusted earnings measure that the filings do not reconcile, so the two ratios cannot be compared directly.
Basis: 10-K_2025-09-30_smg.htm.jsonl, pages 102–103, 118; 10-Q_2026-06-27_smg.htm.jsonl, pages 9, 20; calculation L2; calculation V3; calculation V6; calculation V9

Operating cash flow was USD 195.2 million for the nine months to June 27, 2026 against USD 197.2 million a year earlier, after a USD 552.1 million seasonal build in receivables. Capital spending of USD 63.1 million left free cash flow of USD 132.1 million, and dividends of USD 116.3 million took most of it, leaving USD 15.8 million. Lower sales of receivables under an uncommitted purchase programme reduced operating cash flow, so the cushion above dividends depends on that programme and on working-capital timing.
Basis: 10-Q_2026-06-27_smg.htm.jsonl, pages 3, 51, 52; calculation F4; calculation F5

Liquidity at June 27, 2026 was USD 1,409.5 million, made up of USD 27.7 million of cash and USD 1,381.8 million of revolver availability after USD 93.2 million of letters of credit and USD 25.0 million drawn. Debt due within twelve months was USD 277.0 million, of which USD 250.0 million is the senior notes maturing December 15, 2026. The filing says the company intends to repay those notes in fiscal 2026 from operating cash flow and revolver capacity, although the maturity falls in fiscal 2027, and the sources do not show the repayment. Net receivables of USD 312.1 million were sold and derecognised at June 27, 2026 under a programme that was due to expire on September 1, 2026, and supplier-financed payables were USD 23.7 million.
Basis: 10-Q_2026-06-27_smg.htm.jsonl, pages 4, 9, 19, 20, 22, 52, 54; calculation LQ3; calculation A1

The annual figures include Hawthorne in continuing operations while the nine-month and quarterly figures exclude it, so no continuing-operations last-twelve-months series can be built from the filings. This agrees with the source readiness assessment that a continuing-operations series cannot be built; this module therefore uses a consolidated EBITDA that includes discontinued operations, which can be built and is labelled as a different measure. Interim statements are unaudited and seasonal, with more than three quarters of annual sales in the second and third fiscal quarters, so a June balance sheet is not comparable with a September one.
Basis: 10-Q_2026-06-27_smg.htm.jsonl, pages 5, 11, 13; 10-K_2025-09-30_smg.htm.jsonl, page 5; Source readiness (CP-0)

### Contrary evidence and what would change the view

The strongest evidence against reading the unadjusted 6.12x as overstated is that interest cover on the same basis is only 2.94x and that free cash flow after dividends was USD 15.8 million for nine months, so internal funding for a USD 250.0 million maturity is thin even without the sale loss. The view would change if fiscal 2026 annual results showed earnings below the level implied by the covenant ratios, or if the receivables purchase programme were not renewed; it would improve if the notes were repaid from revolver capacity with liquidity staying well above the USD 277.0 million of debt due within a year.
Basis: 10-Q_2026-06-27_smg.htm.jsonl, pages 3, 20, 52, 54; calculation F5; calculation V9; calculation LQ3

### Limitations

The credit-agreement Adjusted EBITDA and average total indebtedness are not reconciled, so covenant ratios are quoted as reported and no headroom is calculated. No results after June 27, 2026 are in the sources, the interim figures are unaudited, and no recast full-year FY2025 exists. The maturity schedule is the one printed at September 30, 2025, before the Seventh Amended and Restated Credit Agreement of November 21, 2025 replaced the earlier agreement.
Basis: 10-Q_2026-06-27_smg.htm.jsonl, pages 20, 54, 64; 10-K_2025-09-30_smg.htm.jsonl, pages 136–137

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2023-10-01 | 2024-09-30 |
| FY2025 | 2024-10-01 | 2025-09-30 |
| 9M 2025 | 2024-10-01 | 2025-06-28 |
| 9M 2026 | 2025-10-01 | 2026-06-27 |
| Q3 2025 | 2025-03-30 | 2025-06-28 |
| Q3 2026 | 2026-03-29 | 2026-06-27 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-09-30_smg.htm.jsonl | Annual report, Form 10-K | FY2024 and comparatives FY2023, FY2022 | USD | millions | Consolidated, Hawthorne in continuing operations | US GAAP | Tier 1 (audited) | FY2024 cross-check; supplier finance and covenant history | Covenant terms superseded by the 2025-11-21 credit agreement; outdated for capital structure |
| 10-K_2025-09-30_smg.htm.jsonl | Annual report, Form 10-K | FY2025 and comparatives FY2024, FY2023 | USD | millions | Consolidated, Hawthorne in continuing operations | US GAAP | Tier 1 (audited) | FY2024 and FY2025 statements, debt maturity schedule | Predates the Hawthorne discontinued-operation presentation; no recast full year |
| 10-Q_2025-12-27_smg.htm.jsonl | Quarterly report, Form 10-Q | Q1 FY2026 | USD | millions | Consolidated, Hawthorne discontinued and held for sale | US GAAP | Tier 2b (unaudited, no auditor review report in the document) | Availability and covenant ratios at 2025-12-27 | Interim; superseded by later quarters |
| 10-Q_2026-03-28_smg.htm.jsonl | Quarterly report, Form 10-Q | Q2 FY2026, six months | USD | millions | Consolidated, Hawthorne discontinued and held for sale | US GAAP | Tier 2b (unaudited, no auditor review report in the document) | Debt table, availability and covenant ratios at 2026-03-28 | Interim; superseded by the Q3 report |
| 10-Q_2026-06-27_smg.htm.jsonl | Quarterly report, Form 10-Q | Q3 FY2026, nine months | USD | millions | Consolidated, Hawthorne sold 2026-04-08, discontinued operation | US GAAP | Tier 2b (unaudited, no auditor review report in the document) | Latest statements, debt, liquidity, covenants | Interim and seasonal; 2026-06-27 is the latest balance sheet |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| The Scotts Miracle-Gro Company | Issuer, registrant and borrower with certain subsidiaries under the Seventh A&R Credit Agreement | September 30 | USD | millions | Consolidated including variable interest entities; Hawthorne discontinued from Q1 FY2026 | US GAAP | FY2024, FY2025, Q1, Q2 and Q3 of fiscal 2026 (three, six and nine months) with prior-year comparatives recast |
| Guarantor group | Substantially all directly and indirectly owned domestic subsidiaries guarantee the senior notes and the credit facilities | September 30 | USD | millions | Summarised combined financial information for the issuer and guarantors is printed; foreign and certain domestic subsidiaries are non-guarantors | US GAAP | 2026-06-27 and 2025-09-30 balance sheet data; nine months to 2026-06-27 and FY2025 results |

### Subsequent events

| Event | Date | Relation to period figures | Source |
|---|---|---|---|
| Divestiture of the Hawthorne professional horticulture business based in the Netherlands for 8.5, financed by a seller loan at 6.0% maturing 2029-12-31 | 2025-09-30 | On the last day of FY2025; the seller loan is in other assets and in investments in loans receivable of 8.5 | 10-K_2025-09-30_smg.htm.jsonl, pages 67, 124; 10-Q_2026-06-27_smg.htm.jsonl, page 5 |
| Seventh A&R Credit Agreement entered: revolver 1,500.0 and term loan 500.0, terminates 2030-11-21 | 2025-11-21 | After FY2025 year end; replaces the Sixth A&R Credit Agreement; the FY2025 maturity schedule predates it | 10-Q_2026-06-27_smg.htm.jsonl, page 20 |
| Share repurchase authorisation of up to 500.0; no repurchases to 2026-06-27 | 2025-12-19 | Inside the 9M 2026 period; no effect on net debt to date | 10-Q_2026-06-27_smg.htm.jsonl, page 51 |
| Hawthorne business in North America sold to Vireo for equity securities; cash of 35.0 transferred with it | 2026-04-08 | Inside the 9M 2026 period; included in net cash disposed of on sale of business and the loss on sale | 10-Q_2026-06-27_smg.htm.jsonl, pages 12, 39 |
| Amendment No. 1 to the Seventh A&R Guarantee and Collateral Agreement | 2026-04-17 | Inside the 9M 2026 period; terms not supplied | 10-Q_2026-06-27_smg.htm.jsonl, page 64 |
| New chief executive named, effective 2026-06-26 and announced | 2026-06-29 | After the balance sheet date of 2026-06-27; no figure effect stated | 10-Q_2026-06-27_smg.htm.jsonl, page 39 |
| Receivables purchase agreement scheduled expiry | 2026-09-01 | After the balance sheet date; not in period figures; status not shown | 10-Q_2026-06-27_smg.htm.jsonl, page 52 |
| 5.250% Senior Notes maturity, 250.0 | 2026-12-15 | After the balance sheet date; scheduled; in current debt at 2026-06-27 | 10-Q_2026-06-27_smg.htm.jsonl, pages 19, 22 |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Opening and closing cash of the nine-month cash flow columns stated including cash classified within held-for-sale assets | 10-Q_2026-06-27_smg.htm.jsonl | Presentation | 9M 2025 opening 62.4, closing 39.6; 9M 2026 opening 32.8, closing 27.7 | 9M 2025 opening 71.6, closing 51.1; 9M 2026 opening 36.6, closing 27.7 | The statement prints the net change including held-for-sale cash before a continuing-operations line; only the including basis rolls forward from opening to closing | 9M 2025, 9M 2026 |
| EBITDA (Reported) built on one consolidated perimeter | 10-K_2025-09-30_smg.htm.jsonl; 10-Q_2026-06-27_smg.htm.jsonl | Perimeter | Not stated by the issuer | FY2024 215.8; FY2025 425.5; 9M 2025 570.7; 9M 2026 490.5 | The annual columns include Hawthorne in continuing operations; the nine-month columns add discontinued operations back so that every EBITDA is consolidated; Analyst Judgement | FY2024, FY2025, 9M 2025, 9M 2026 |
| Equity-method result signed as a loss positive | 10-K_2025-09-30_smg.htm.jsonl; 10-Q_2026-06-27_smg.htm.jsonl | Sign | Annual reports print a loss; quarterly reports print income | Loss positive and income negative in every column | One sign convention across columns | All income statement columns |
| FY2024 cash flow comparatives taken from the FY2025 annual report | 10-K_2025-09-30_smg.htm.jsonl | Presentation | FY2024 annual report prints proceeds from sale of long-lived assets 2.4 and other investing 2.6 | Other investing, net 5.0 | The later filing combines the two lines; the investing total of -100.4 is unchanged | FY2024 |
| Total Debt stated at carrying value | 10-K_2025-09-30_smg.htm.jsonl; 10-Q_2026-06-27_smg.htm.jsonl | Basis | Principal incl. finance leases 2,242.8; 2,119.7; 2,202.6; 2,125.6 | 2,226.8; 2,106.4; 2,188.3; 2,113.3 | Carrying value is current plus long-term debt net of issuance costs; the principal difference is in the definition register | FY2024, FY2025, 9M 2025, 9M 2026 |
| Not normalised: annual and interim perimeters | 10-K_2025-09-30_smg.htm.jsonl; 10-Q_2026-06-27_smg.htm.jsonl | None possible | Annual lines include Hawthorne; interim lines exclude it | Left as reported, flagged in every Basis cell | No recast FY2025 is supplied, so lines above EBITDA cannot be put on one perimeter | FY2024, FY2025 against 9M and Q3 columns |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 3,552.7 | 3,413.1 | 2,915.7 | 2,986.1 | 1,159.3 | 1,172.1 | USD millions | Reported | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Cost of sales | 2,618.7 | 2,348.6 | 1,903.8 | 1,918.5 | 784.6 | 805.0 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Cost of sales—impairment, restructuring and other | 83.5 | 20.3 | 8.6 | 2.5 | 2.0 | 1.2 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Gross margin | 850.5 | 1,044.2 | 1,003.3 | 1,065.1 | 372.7 | 365.9 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Selling, general and administrative | 559.0 | 603.4 | 436.2 | 450.7 | 144.8 | 145.6 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Impairment, restructuring and other | 62.8 | 63.4 | 25.9 | 51.0 | -1.0 | 47.0 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Other (income) expense, net | 19.9 | 18.8 | 15.5 | 13.7 | 7.1 | 3.7 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Income from operations | 208.8 | 358.6 | 525.7 | 549.7 | 221.8 | 169.6 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Equity in loss (income) of unconsolidated affiliates | 68.1 | 2.8 | -9.5 | -11.6 | -25.3 | -29.2 | USD millions | Reported; a loss is positive and income negative in every column (the annual report prints a loss, the quarterly reports print income) | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Interest expense | 158.8 | 128.8 | 102.2 | 86.5 | 31.8 | 28.0 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Other non-operating (income) expense, net | 5.5 | 5.3 | 3.9 | 17.9 | 1.3 | 15.6 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Income (loss) before income taxes | -23.6 | 221.7 | 429.1 | 456.9 | 214.0 | 155.2 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Income tax expense (benefit) | 11.3 | 76.5 | 119.7 | 137.8 | 59.3 | 51.6 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Net income (loss) from continuing operations | -34.9 | 145.2 | 309.4 | 319.1 | 154.7 | 103.6 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Income (loss) from discontinued operations, net of tax | Not supplied: the annual report presents no discontinued operation | Not supplied: the annual report presents no discontinued operation | -12.3 | -93.3 | -5.6 | 8.6 | USD millions | Reported; includes the loss on sale of the Hawthorne business in North America | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2; 10-Q_2026-06-27_smg.htm.jsonl, page 13 |
| Net income (loss) | -34.9 | 145.2 | 297.1 | 225.8 | 149.1 | 112.2 | USD millions | Reported; continuing operations in the 9M and Q3 columns | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Income tax expense (benefit) from discontinued operations | Not supplied: the annual report presents no discontinued operation | Not supplied: the annual report presents no discontinued operation | -4.8 | -10.8 | -1.6 | 24.8 | USD millions | Reported in the discontinued-operations note; a benefit is negative | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 13 |
| Depreciation | 64.9 | 62.7 | 47.1 | 47.0 | Not supplied: three-month depreciation is not stated | Not supplied: three-month depreciation is not stated | USD millions | Reported in the cash flow statement; consolidated, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Amortization | 15.7 | 12.3 | 9.4 | 4.2 | Not supplied: three-month amortization is not stated | Not supplied: three-month amortization is not stated | USD millions | Reported in the cash flow statement; consolidated, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| EBITDA (Reported) | 215.8 | 425.5 | 570.7 | 490.5 | Not calculable: three-month depreciation and amortization are not stated | Not calculable: three-month depreciation and amortization are not stated | USD millions | Calculated: net income plus total income tax expense (continuing plus discontinued) plus interest expense plus depreciation plus amortization; unadjusted; consolidated including discontinued operations; includes impairment, restructuring and other charges and, in 9M 2026, the loss on sale of the Hawthorne business; the issuer states no EBITDA | calculation R1; calculation R2; calculation R3; calculation R4 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | -34.9 | 145.2 | 297.1 | 225.8 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Impairment, restructuring and other | 84.3 | 21.7 | 16.0 | 15.7 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Share-based compensation expense | 80.4 | 69.0 | 55.6 | 38.3 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Depreciation | 64.9 | 62.7 | 47.1 | 47.0 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Amortization | 15.7 | 12.3 | 9.4 | 4.2 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Deferred taxes | 9.3 | 70.8 | 76.5 | 115.3 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Loss on sale of business | Not supplied: the statement prints a dash for this line | 17.7 | Not supplied: the statement prints a dash for this line | 101.8 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Unrealized loss on investments | Not supplied: the statement prints a dash for this line | Not supplied: the statement prints a dash for this line | Not supplied: the statement prints a dash for this line | 15.7 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Equity in loss (income) of unconsolidated affiliates | 68.1 | 2.8 | -9.5 | -11.6 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Accounts receivable | 128.2 | -16.6 | -395.2 | -552.1 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Inventories | 293.8 | -17.9 | 42.5 | 61.1 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Prepaid and other current assets | 10.2 | -2.3 | 12.6 | -2.6 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Accounts payable | -1.6 | -0.3 | 14.7 | 83.7 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Other current liabilities | -45.4 | 16.0 | 38.7 | 39.6 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Other non-current items | -6.2 | -9.2 | -6.1 | 20.0 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Other, net | 0.7 | -0.6 | -2.2 | -6.7 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Net Cash from Operating Activities | 667.5 | 371.3 | 197.2 | 195.2 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Investments in property, plant and equipment | -84.0 | -97.4 | -54.5 | -63.1 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Investments in loans receivable | Not supplied: the statement prints a dash for this line | -8.5 | Not supplied: the statement prints a dash for this line | Not supplied: the statement prints a dash for this line | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Investments in unconsolidated affiliates | -21.4 | Not supplied: the statement prints a dash for this line | Not supplied: the statement prints a dash for this line | Not supplied: the statement prints a dash for this line | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Net cash disposed of on sale of business | Not supplied: the statement prints a dash for this line | -2.5 | Not supplied: the statement prints a dash for this line | -35.0 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Other investing, net | 5.0 | -3.7 | -5.5 | -4.0 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Net Cash from Investing Activities | -100.4 | -112.1 | -60.0 | -102.1 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Borrowings under revolving and bank lines of credit and term loans | 648.5 | 702.7 | 695.6 | 1,243.5 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Repayments under revolving and bank lines of credit and term loans | -1,039.5 | -824.8 | -734.9 | -1,237.8 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Financing and issuance fees | Not supplied: the statement prints a dash for this line | Not supplied: the statement prints a dash for this line | Not supplied: the statement prints a dash for this line | -8.9 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Dividends paid | -151.3 | -154.3 | -116.2 | -116.3 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Purchase of Common Shares | -5.1 | -18.4 | -18.4 | -12.1 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Cash received from exercise of stock options | 3.8 | 11.9 | 11.2 | 3.9 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Other financing, net | 15.7 | -11.1 | 4.5 | 25.9 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Net Cash from Financing Activities | -527.9 | -294.0 | -158.2 | -101.8 | USD millions | Reported; consolidated cash flows, not split between continuing and discontinued operations | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| FX Effect on Cash | 0.5 | -0.2 | 0.5 | -0.2 | USD millions | Reported | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Net Cash Change | 39.7 | -35.0 | -20.5 | -8.9 | USD millions | Reported; the nine-month statements print the total including held-for-sale cash before the continuing-operations line | 10-K_2025-09-30_smg.htm.jsonl, pages 102–103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Opening Cash | 31.9 | 71.6 | 71.6 | 36.6 | USD millions | Reported cash including cash classified within current assets held for sale: 9M 2025 is the 2024-09-30 balance of 71.6 (the statement itself starts from 62.4 continuing-operations cash); 9M 2026 is 36.6 (32.8 plus 3.8 held for sale) | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, pages 3, 10, 53 |
| Closing Cash | 71.6 | 36.6 | 51.1 | 27.7 | USD millions | Cash including cash classified within current assets held for sale: 9M 2025 is 51.1 as the filing states it (39.6 continuing plus 11.6 held for sale is 51.2 before rounding); 9M 2026 is 27.7 with none held for sale | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, pages 3, 10, 53 |
| Cash Interest Paid | 157.7 | 131.4 | 110.3 | 96.3 | USD millions | Reported supplemental cash flow information; the positive amount paid | 10-K_2025-09-30_smg.htm.jsonl, page 118; 10-Q_2026-06-27_smg.htm.jsonl, page 9 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 71.6 | 36.6 | 39.6 | 27.7 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Accounts receivable, net | 176.8 | 186.9 | 545.7 | 713.0 | USD millions | Reported; the FY2025 column is the annual report presentation before Hawthorne was reclassified to held for sale (the Q3 report recasts 2025-09-30: receivables 160.8, inventories 542.7) | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Inventories | 587.5 | 592.8 | 485.4 | 481.4 | USD millions | Reported; the FY2025 column is the annual report presentation before Hawthorne was reclassified to held for sale (the Q3 report recasts 2025-09-30: receivables 160.8, inventories 542.7) | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Current assets held for sale | Not supplied: the line is not presented in this filing | Not supplied: the line is not presented in this filing | 108.6 | Not supplied: the statement prints a dash for this line | USD millions | Reported; held-for-sale classification of Hawthorne in the Q3 report, not used in the annual report | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Prepaid and other current assets | 144.5 | 124.0 | 104.0 | 127.0 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Total current assets | 980.4 | 940.3 | 1,283.3 | 1,349.1 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Investment in unconsolidated affiliates | 45.2 | 53.6 | 65.9 | 65.2 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Property, plant and equipment, net | 609.5 | 631.6 | 580.9 | 635.1 | USD millions | Reported; the FY2025 column is the annual report presentation before Hawthorne was reclassified to held for sale (the Q3 report recasts 2025-09-30: receivables 160.8, inventories 542.7) | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Goodwill | 243.9 | 243.9 | 243.9 | 243.9 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Intangible assets, net | 418.8 | 401.8 | 352.6 | 350.1 | USD millions | Reported; the FY2025 column is the annual report presentation before Hawthorne was reclassified to held for sale (the Q3 report recasts 2025-09-30: receivables 160.8, inventories 542.7) | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Noncurrent assets held for sale | Not supplied: the line is not presented in this filing | Not supplied: the line is not presented in this filing | 105.7 | Not supplied: the statement prints a dash for this line | USD millions | Reported; held-for-sale classification of Hawthorne in the Q3 report, not used in the annual report | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Other assets | 574.1 | 470.8 | 458.3 | 524.0 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Total Assets | 2,871.9 | 2,742.0 | 3,090.6 | 3,167.4 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Current portion of debt | 52.6 | 57.2 | 52.1 | 277.0 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Accounts payable | 254.7 | 229.2 | 246.3 | 310.3 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Current liabilities held for sale | Not supplied: the line is not presented in this filing | Not supplied: the line is not presented in this filing | 36.2 | Not supplied: the statement prints a dash for this line | USD millions | Reported; held-for-sale classification of Hawthorne in the Q3 report, not used in the annual report | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Other current liabilities | 443.0 | 453.3 | 464.0 | 523.5 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Total current liabilities | 750.3 | 739.7 | 798.6 | 1,110.8 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Long-term debt | 2,174.2 | 2,049.2 | 2,136.2 | 1,836.3 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Noncurrent liabilities held for sale | Not supplied: the line is not presented in this filing | Not supplied: the line is not presented in this filing | 11.6 | Not supplied: the statement prints a dash for this line | USD millions | Reported; held-for-sale classification of Hawthorne in the Q3 report, not used in the annual report | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Other liabilities | 338.0 | 310.6 | 315.1 | 429.0 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Total Liabilities | 3,262.5 | 3,099.5 | 3,261.5 | 3,376.1 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Common shares and capital in excess of stated value | 362.0 | 351.6 | 347.3 | 350.1 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Retained earnings | 303.8 | 294.7 | 485.2 | 404.3 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Treasury shares, at cost | -949.1 | -894.1 | -895.9 | -857.1 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Accumulated other comprehensive loss | -107.3 | -109.7 | -107.5 | -106.0 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Total Equity | -390.6 | -357.5 | -170.9 | -208.7 | USD millions | Reported; 9M 2025 and 9M 2026 columns are the 2025-06-28 and 2026-06-27 balance sheets of the Q3 report, the FY columns the audited year-end balance sheets | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Total Debt | 2,226.8 | 2,106.4 | 2,188.3 | 2,113.3 | USD millions | Calculated: current portion of debt plus long-term debt, balance-sheet carrying value net of unamortized issuance costs (calculation D1 to D4 in Calculations); includes finance lease obligations the issuer carries in debt; excludes operating lease liabilities, which the issuer carries in other lines | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4; calculation D1; calculation D2; calculation D3; calculation D4 |
| Cash & Equivalents | 71.6 | 36.6 | 39.6 | 27.7 | USD millions | Reported cash and cash equivalents; excludes cash classified within held-for-sale assets (3.8 at 2025-09-30 recast, 11.6 at 2025-06-28) | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |

### Segment schedule

| Segment | Period | Net sales | Segment Profit (Loss) | Unit | Source |
|---|---|---|---|---|---|
| U.S. Consumer | FY2024 | 3,013.7 | 498.0 | USD millions | 10-K_2025-09-30_smg.htm.jsonl, pages 158–159 |
| Hawthorne | FY2024 | 294.7 | -14.2 | USD millions | 10-K_2025-09-30_smg.htm.jsonl, pages 158–159 |
| Other non-reportable operating segment | FY2024 | 244.3 | 4.7 | USD millions | 10-K_2025-09-30_smg.htm.jsonl, pages 158–159 |
| Corporate | FY2024 | Not supplied: corporate has no net sales | -117.7 | USD millions | 10-K_2025-09-30_smg.htm.jsonl, page 159 |
| U.S. Consumer | FY2025 | 2,993.7 | 572.6 | USD millions | 10-K_2025-09-30_smg.htm.jsonl, pages 158–159 |
| Hawthorne | FY2025 | 165.8 | 2.8 | USD millions | 10-K_2025-09-30_smg.htm.jsonl, pages 158–159 |
| Other non-reportable operating segment | FY2025 | 253.6 | 12.7 | USD millions | 10-K_2025-09-30_smg.htm.jsonl, pages 158–159 |
| Corporate | FY2025 | Not supplied: corporate has no net sales | -133.4 | USD millions | 10-K_2025-09-30_smg.htm.jsonl, page 159 |
| U.S. Consumer | 9M 2025 | 2,682.6 | 637.2 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| Other non-reportable operating segment | 9M 2025 | 233.1 | 22.8 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| Corporate | 9M 2025 | Not supplied: corporate has no net sales | -97.7 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| U.S. Consumer | 9M 2026 | 2,738.4 | 676.1 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| Other non-reportable operating segment | 9M 2026 | 247.7 | 29.0 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| Corporate | 9M 2026 | Not supplied: corporate has no net sales | -99.9 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| U.S. Consumer | Q3 2025 | 1,030.2 | 235.2 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| Other non-reportable operating segment | Q3 2025 | 129.1 | 16.9 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| Corporate | Q3 2025 | Not supplied: corporate has no net sales | -28.7 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| U.S. Consumer | Q3 2026 | 1,032.9 | 229.8 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| Other non-reportable operating segment | Q3 2026 | 139.2 | 18.6 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |
| Corporate | Q3 2026 | Not supplied: corporate has no net sales | -29.9 | USD millions | 10-Q_2026-06-27_smg.htm.jsonl, page 36 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Seventh A&R revolving credit facility | Revolving credit facility | Not supplied: carrying value by instrument is not disclosed; issuance costs are given in aggregate | 25.0 | 25.0 | 1,500.0 | Senior secured; guaranteed by substantially all domestic subsidiaries | Senior secured, ahead of the unsecured notes | USD | 25.0 | Not applicable | Base rate plus a spread that depends on the quarterly leverage ratio | floating | U.S. Prime Rate, Federal Reserve Bank of New York Rate, SOFR, EURIBOR, Canadian Prime Rate or CORRA at the borrower's election | Not supplied: the spread grid is not printed | Not supplied: no floor is stated | 2030-11-21 | 0 | 10-Q_2026-06-27_smg.htm.jsonl, pages 19, 20, 53 |
| Seventh A&R term loan | Term loan | Not supplied: carrying value by instrument is not disclosed; issuance costs are given in aggregate | 487.5 | 487.5 | 500.0 original principal | Senior secured; guaranteed by substantially all domestic subsidiaries | Senior secured, ahead of the unsecured notes | USD | 487.5 | Not applicable | Base rate plus a spread that depends on the quarterly leverage ratio | floating | U.S. Prime Rate, Federal Reserve Bank of New York Rate, SOFR, EURIBOR, Canadian Prime Rate or CORRA at the borrower's election | Not supplied: the spread grid is not printed | Not supplied: no floor is stated | 2030-11-21 | Not supplied: the schedule is not stated; the balance went from 500.0 at 2025-12-27 to 487.5 at 2026-06-27 | 10-Q_2026-06-27_smg.htm.jsonl, pages 19, 20; 10-Q_2025-12-27_smg.htm.jsonl, page 14 |
| 5.250% Senior Notes due 2026 | Senior notes | Not supplied: carrying value by instrument is not disclosed | 250.0 | Not applicable | Not applicable | Unsecured; guaranteed by substantially all domestic subsidiaries | General unsecured senior obligation, equal in right of payment with other unsecured senior debt | USD | 250.0 | Not applicable | 5.250% | fixed | Not applicable | Not applicable | Not applicable | 2026-12-15 | 0 | 10-Q_2026-06-27_smg.htm.jsonl, pages 19, 22 |
| 4.500% Senior Notes due 2029 | Senior notes | Not supplied: carrying value by instrument is not disclosed | 450.0 | Not applicable | Not applicable | Unsecured; guaranteed by substantially all domestic subsidiaries | General unsecured senior obligation, equal in right of payment with other unsecured senior debt | USD | 450.0 | Not applicable | 4.500% | fixed | Not applicable | Not applicable | Not applicable | 2029; the day is not stated in the Q3 report | 0 | 10-Q_2026-06-27_smg.htm.jsonl, pages 19, 22 |
| 4.000% Senior Notes due 2031 | Senior notes | Not supplied: carrying value by instrument is not disclosed | 500.0 | Not applicable | Not applicable | Unsecured; guaranteed by substantially all domestic subsidiaries | General unsecured senior obligation, equal in right of payment with other unsecured senior debt | USD | 500.0 | Not applicable | 4.000% | fixed | Not applicable | Not applicable | Not applicable | 2031; the day is not stated in the Q3 report | 0 | 10-Q_2026-06-27_smg.htm.jsonl, pages 19, 22 |
| 4.375% Senior Notes due 2032 | Senior notes | Not supplied: carrying value by instrument is not disclosed | 400.0 | Not applicable | Not applicable | Unsecured; guaranteed by substantially all domestic subsidiaries | General unsecured senior obligation, equal in right of payment with other unsecured senior debt | USD | 400.0 | Not applicable | 4.375% | fixed | Not applicable | Not applicable | Not applicable | 2032; the day is not stated in the Q3 report | 0 | 10-Q_2026-06-27_smg.htm.jsonl, pages 19, 22 |
| Finance lease obligations | Finance leases | Not supplied: carrying value by instrument is not disclosed | 13.1 | Not applicable | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 13.1 | Not applicable | 4.6% weighted-average discount rate | Not supplied: rate type is not stated | Not applicable | Not applicable | Not applicable | Weighted-average remaining term of 7.4 years | Not supplied: the annual amount is not stated; 2.5 is the 2027 lease payment | 10-Q_2026-06-27_smg.htm.jsonl, pages 19, 35 |
| Financing cost adjustment | Unamortized debt issuance costs | -12.3 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -12.3 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-06-27_smg.htm.jsonl, page 19 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component (USD m) | Current Stub (USD m) | Prior-Year Stub (USD m) | Derived Value (USD m) | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM | 425.5 | 490.5 | 570.7 | 345.3 | Calculated | 10-K_2025-09-30_smg.htm.jsonl; 10-Q_2026-06-27_smg.htm.jsonl | Consolidated including discontinued operations in the stubs; includes the loss on sale of Hawthorne in the current stub; not a continuing-operations measure |
| Cash Interest Paid | LTM | 131.4 | 96.3 | 110.3 | 117.4 | Calculated | 10-K_2025-09-30_smg.htm.jsonl; 10-Q_2026-06-27_smg.htm.jsonl | Consolidated cash paid; not split by perimeter |
| Net Cash from Operating Activities | LTM | 371.3 | 195.2 | 197.2 | 369.3 | Calculated | 10-K_2025-09-30_smg.htm.jsonl; 10-Q_2026-06-27_smg.htm.jsonl | Consolidated cash flows, not split between continuing and discontinued operations |
| Investments in property, plant and equipment | LTM | 97.4 | 63.1 | 54.5 | 106.0 | Calculated | 10-K_2025-09-30_smg.htm.jsonl; 10-Q_2026-06-27_smg.htm.jsonl | Consolidated; shown as the positive amount spent |
| Free cash flow (operating cash flow less capital spending) | LTM | 273.9 | 132.1 | 142.7 | 263.3 | Calculated | 10-K_2025-09-30_smg.htm.jsonl; 10-Q_2026-06-27_smg.htm.jsonl | Before dividends; includes cash from receivables sales |
| Net sales | LTM | 3,413.1 | 2,986.1 | 2,915.7 | Not calculable: the full-year component includes Hawthorne while both stubs exclude it | Not Comparable | 10-K_2025-09-30_smg.htm.jsonl; 10-Q_2026-06-27_smg.htm.jsonl | No recast FY2025 net sales is supplied |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,226.8 | Net debt data FY2024; T4.6 Total Debt | 215.8 | T4.4 EBITDA (Reported) FY2024 | FY2024 / 2024-09-30 | USD | US$m | 10.32 | Calculated | Tier 1 | Carrying-value debt; consolidated unadjusted EBITDA includes FY2024 impairment and equity-method losses |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,155.2 | Net debt data FY2024 | 215.8 | T4.4 EBITDA (Reported) FY2024 | FY2024 / 2024-09-30 | USD | US$m | 9.99 | Calculated | Tier 1 | As above |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 215.8 | T4.4 EBITDA (Reported) FY2024 | 157.7 | T4.5 Cash Interest Paid FY2024 | FY2024 / 2024-09-30 | USD | US$m | 1.37 | Calculated | Tier 1 | Cash interest paid, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,106.4 | Net debt data FY2025; T4.6 Total Debt | 425.5 | T4.4 EBITDA (Reported) FY2025 | FY2025 / 2025-09-30 | USD | US$m | 4.95 | Calculated | Tier 1 | Includes Hawthorne in both numerator and denominator |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,069.8 | Net debt data FY2025 | 425.5 | T4.4 EBITDA (Reported) FY2025 | FY2025 / 2025-09-30 | USD | US$m | 4.86 | Calculated | Tier 1 | Cash of 36.6 includes cash of Hawthorne |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 425.5 | T4.4 EBITDA (Reported) FY2025 | 131.4 | T4.5 Cash Interest Paid FY2025 | FY2025 / 2025-09-30 | USD | US$m | 3.24 | Calculated | Tier 1 | Cash interest paid, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,113.3 | Net debt data 2026-06-27; T4.6 Total Debt | 345.3 | T4.8 EBITDA (Reported) LTM | 2026-06-27 | USD | US$m | 6.12 | Calculated | Tier 2b | Last-twelve-months EBITDA includes the loss on sale of Hawthorne; seasonal peak balance sheet |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,085.6 | Net debt data 2026-06-27 | 345.3 | T4.8 EBITDA (Reported) LTM | 2026-06-27 | USD | US$m | 6.04 | Calculated | Tier 2b | As above |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 345.3 | T4.8 EBITDA (Reported) LTM | 117.4 | T4.8 Cash Interest Paid LTM | 2026-06-27 | USD | US$m | 2.94 | Calculated | Tier 2b | Last-twelve-months cash interest paid |
| Gross margin % | Gross margin / Net sales x 100 | 850.5 | T4.4 Gross margin FY2024 | 3,552.7 | T4.4 Net sales FY2024 | FY2024 | USD | US$m | 23.94% | Calculated | Tier 1 | Gross margin is after cost of sales and its impairment, restructuring and other line |
| Gross margin % | Gross margin / Net sales x 100 | 1,044.2 | T4.4 Gross margin FY2025 | 3,413.1 | T4.4 Net sales FY2025 | FY2025 | USD | US$m | 30.59% | Calculated | Tier 1 | As above |
| Gross margin % | Gross margin / Net sales x 100 | 1,003.3 | T4.4 Gross margin 9M 2025 | 2,915.7 | T4.4 Net sales 9M 2025 | 9M 2025 | USD | US$m | 34.41% | Calculated | Tier 2b | Continuing operations; seasonally high |
| Gross margin % | Gross margin / Net sales x 100 | 1,065.1 | T4.4 Gross margin 9M 2026 | 2,986.1 | T4.4 Net sales 9M 2026 | 9M 2026 | USD | US$m | 35.67% | Calculated | Tier 2b | Continuing operations; seasonally high |
| Net sales growth FY2025 | Net sales FY2025 / Net sales FY2024 - 1 | 3,413.1 | T4.4 Net sales FY2025 | 3,552.7 | T4.4 Net sales FY2024 | FY2025 | USD | US$m | -3.93% | Calculated | Tier 1 | Both years include Hawthorne |
| Net sales growth 9M 2026 | Net sales 9M 2026 / Net sales 9M 2025 - 1 | 2,986.1 | T4.4 Net sales 9M 2026 | 2,915.7 | T4.4 Net sales 9M 2025 | 9M 2026 | USD | US$m | 2.41% | Calculated | Tier 2b | Continuing operations in both periods |
| FCF conversion | Free cash flow / EBITDA (Reported) x 100 | 273.9 | T4.5 operating cash flow less capital spending FY2025 | 425.5 | T4.4 EBITDA (Reported) FY2025 | FY2025 | USD | US$m | 64.37% | Calculated | Tier 1 | Free cash flow is before dividends |
| Liquidity / total debt | Cash plus revolver availability / Total Debt x 100 | 1,409.5 | Calculation LQ3 | 2,113.3 | T4.6 Total Debt 9M 2026 | 2026-06-27 | USD | US$m | 66.70% | Calculated | Tier 2b | Availability is net of letters of credit; seasonal |
| Operating cash flow / total debt | Net cash from operating activities / Total Debt x 100 | 371.3 | T4.5 Net Cash from Operating Activities FY2025 | 2,106.4 | T4.6 Total Debt FY2025 | FY2025 | USD | US$m | 17.63% | Calculated | Tier 1 | Includes cash from receivables sales |
| Capital spending / net sales | Investments in property, plant and equipment / Net sales x 100 | 97.4 | T4.5 capital spending FY2025 | 3,413.1 | T4.4 Net sales FY2025 | FY2025 | USD | US$m | 2.85% | Calculated | Tier 1 | Shown as the positive amount spent |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note | Source |
|---|---|---|---|---|---|---|---|---|
| Growth | Net sales growth, % year on year | Not supplied: FY2023 is not a column of this module | -3.93 | Not supplied: nine months of fiscal 2024 are not in the sources | 2.41 | Down in FY2025, up in nine months of 2026 | Annual figures include Hawthorne, nine-month figures do not | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Margin | Gross margin, % of net sales | 23.94 | 30.59 | 34.41 | 35.67 | Up | The rate rose from FY2024 to FY2025 and from 9M 2025 to 9M 2026; nine-month rates are seasonally higher than annual rates | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Margin | Income from operations, % of net sales | 5.88 | 10.51 | 18.03 | 18.41 | Up | Rose from FY2024 to FY2025 and from 9M 2025 to 9M 2026; includes impairment, restructuring and other charges | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Cash flow | Free cash flow, USD millions | 583.5 | 273.9 | 142.7 | 132.1 | Down | Operating cash flow less capital spending; FY2024 benefited from a USD 293.8 million inventory release | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Cash flow | Dividends paid, USD millions | 151.3 | 154.3 | 116.2 | 116.3 | Flat | Nine-month payments of USD 116.2 million and USD 116.3 million | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Non-debt funding float | Net receivables derecognised under the receivables purchase programme, USD millions | 186.6 | 163.3 | 418.8 | 312.1 | Down against the prior-year nine-month date | Off-balance-sheet funding from an uncommitted programme due to expire 2026-09-01 | 10-K_2025-09-30_smg.htm.jsonl, page 110; 10-Q_2026-06-27_smg.htm.jsonl, page 52 |
| Non-debt funding float | Supplier finance obligations in accounts payable, USD millions | 12.5 | 13.9 | 18.8 | 23.7 | Up | Small against accounts payable of 310.3 at 2026-06-27 | 10-K_2024-09-30_smg.htm.jsonl, page 75; 10-Q_2026-06-27_smg.htm.jsonl, page 9 |
| Seasonality | Accounts receivable, net, USD millions at period end | 176.8 | 186.9 | 545.7 | 713.0 | Up against the prior-year nine-month date | The second and third fiscal quarters carry more than three quarters of annual net sales | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA: net income plus total income tax, interest expense, depreciation and amortization, unadjusted, consolidated | Adjusted EBITDA as defined in the credit agreement; no amount is printed | 10-Q_2026-06-27_smg.htm.jsonl, pages 20, 54; 10-K_2025-09-30_smg.htm.jsonl, pages 78–79, 137 | FY2024, FY2025, 2026-06-27 | High: covenant leverage was 4.86 at 2024-09-30, 4.10 at 2025-09-30 and 3.78 at 2026-06-27 against unadjusted 10.32, 4.95 and 6.12 | Financial foundation; Fundamental credit; Legal & covenants | Show both; use reported EBITDA as the denominator; the add-backs cannot be itemised from the filings |
| Leverage | Total debt at carrying value at period end over reported EBITDA | Average total indebtedness over Adjusted EBITDA, tested quarterly; maximum 6.00 at 2024-09-30, 4.75 at 2025-09-30 and 5.00 from the first quarter of fiscal 2026 | 10-K_2024-09-30_smg.htm.jsonl, page 37; 10-K_2025-09-30_smg.htm.jsonl, page 137; 10-Q_2026-06-27_smg.htm.jsonl, page 20 | FY2024, FY2025, 2026-06-27 | High: reported covenant ratios 4.03 at 2025-12-27, 3.71 at 2026-03-28 and 3.78 at 2026-06-27 | Fundamental credit; Legal & covenants | No headroom is calculated; ratios are quoted as reported |
| Interest coverage | Reported EBITDA over cash interest paid | Adjusted EBITDA over interest expense (credit agreement, minimum 3.00 in fiscal 2026); notes covenant excludes refinancing costs (minimum 2.00; 3.57 for FY2024 and 4.78 for FY2025) | 10-Q_2026-06-27_smg.htm.jsonl, pages 20, 54; 10-K_2025-09-30_smg.htm.jsonl, page 139; 10-K_2024-09-30_smg.htm.jsonl, page 142 | FY2024, FY2025, 2026-06-27 | High: reported covenant ratios 5.05 at 2025-12-27, 5.62 at 2026-03-28 and 5.67 at 2026-06-27 against 2.94 unadjusted | Fundamental credit; Legal & covenants | Not comparable; two different covenants share the name |
| Fixed charge coverage | Not a method metric | Sixth A&R covenant: Adjusted EBITDA less capital spending and cash taxes over interest expense plus restricted payments; minimum 1.00; 1.27 for FY2024 and 1.42 for FY2025 | 10-K_2025-09-30_smg.htm.jsonl, page 137; 10-K_2024-09-30_smg.htm.jsonl, page 78 | FY2024, FY2025 | Medium: covenant replaced on 2025-11-21 | Legal & covenants | Historical only |
| Total debt | Carrying value, current plus long-term, net of issuance costs | Total debt in the note is principal including finance leases: 2,125.6 against carrying 2,113.3 at 2026-06-27 | 10-Q_2026-06-27_smg.htm.jsonl, page 19 | All balance sheet dates | Low: difference of 12.3 of unamortized issuance costs (13.3 at 2025-09-30) | Financial foundation; Liquidity | Carrying value used for ratios; principal stated beside it |
| Operating leases | Lease liabilities the issuer presents on their own lines are not added to Total Debt | Operating lease liabilities of 376.8 and finance lease liabilities of 13.1 at 2026-06-27; only the finance leases are in debt | 10-Q_2026-06-27_smg.htm.jsonl, pages 19, 35 | 2026-06-27 | Medium: operating leases exceed 17% of carrying debt | Fundamental credit | Leases outside debt are noted, not added |
| Perimeter | One perimeter across all periods | FY2024 and FY2025 include Hawthorne in continuing operations; Q1 to Q3 of fiscal 2026 present it as a discontinued operation with prior periods recast | 10-K_2025-09-30_smg.htm.jsonl, page 5; 10-Q_2026-06-27_smg.htm.jsonl, pages 11, 13, 39 | FY2025 against 9M 2025, 9M 2026 and Q3 | High: Hawthorne net sales were 165.8 in FY2025 | All | Annual and interim lines are labelled; EBITDA is built on the consolidated perimeter for every column |
| Cash | Cash and cash equivalents on the balance sheet | Cash flow statement closing cash excludes cash held for sale: 9M 2026 opening 32.8 against 36.6 including held for sale | 10-Q_2026-06-27_smg.htm.jsonl, pages 3, 10, 53 | 9M 2025, 9M 2026 | Low: held-for-sale cash was 3.8 at 2025-09-30 and 11.6 at 2025-06-28 | Financial foundation | Cash flow table uses the including basis; the balance sheet cash line is unchanged |
| Receivables funding | Trade receivables on the balance sheet | Receivables sold under the receivables purchase agreement are derecognised and not in debt: 312.1 at 2026-06-27 | 10-Q_2026-06-27_smg.htm.jsonl, page 52 | 2025-06-28, 2026-06-27 | Medium: 312.1 is large against cash of 27.7 | Liquidity; Fundamental credit | Shown as a non-debt funding float; not added to debt |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Reported statements FY2024 to nine months 2026 | Ready with Limitations | Annual and interim perimeters differ; no recast FY2025; interim unaudited | Obtain a recast FY2025 or the fiscal 2026 annual report |
| Leverage and coverage at 2026-06-27 | Ready with Limitations | Unadjusted consolidated basis only; covenant EBITDA not reconcilable; includes the Hawthorne sale loss | Obtain the credit agreement definitions or a compliance certificate |
| Covenant headroom | Not Ready | Adjusted EBITDA and average total indebtedness are not in the sources | Obtain the credit agreement and compliance certificate |
| Liquidity and refinancing at the latest date | Ready with Limitations | Position after 2026-06-27 unknown; notes due 2026-12-15 and the receivables programme expiry on 2026-09-01 not resolved | Obtain filings after 2026-08-05 |
| Debt maturity ladder | Ready with Limitations | Printed ladder is at 2025-09-30 and predates the 2025-11-21 credit agreement | Obtain a ladder at the latest date |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-09-30 | 10.32 | 9.99 | x | Carrying-value debt over unadjusted consolidated EBITDA of the year; includes impairment, restructuring and equity-method losses |
| FY2025 / 2025-09-30 | 4.95 | 4.86 | x | Carrying-value debt over unadjusted EBITDA of the year; includes Hawthorne |
| 2026-06-27 | 6.12 | 6.04 | x | Carrying-value debt over last-twelve-months unadjusted consolidated EBITDA; includes the loss on sale of Hawthorne; issuer-reported covenant leverage is 3.78 on a different definition |

The unadjusted EBITDA behind every point includes impairment, restructuring and sale losses, so these ratios are higher than the issuer's covenant leverage.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-09-30 | 1.37 | x | Unadjusted EBITDA of the year over cash interest paid in the year |
| FY2025 / 2025-09-30 | 3.24 | x | Unadjusted EBITDA of the year over cash interest paid in the year |
| 2026-06-27 | 2.94 | x | Last-twelve-months unadjusted consolidated EBITDA over last-twelve-months cash interest paid; the issuer's covenant coverage of 5.67 uses adjusted earnings and interest expense |

Cash interest paid, not interest expense, is the denominator, and the 2026-06-27 point is a last-twelve-months figure.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-09-30 | 71.6 | 1,167.0 | US$m | Cash as reported; availability under the Sixth A&R Credit Agreement as stated, after letters of credit of 83.0 |
| FY2025 / 2025-09-30 | 36.6 | 1,166.9 | US$m | Cash as reported including Hawthorne cash; availability under the Sixth A&R Credit Agreement as stated, after letters of credit of 83.1 |
| 2026-06-27 | 27.7 | 1,381.8 | US$m | Cash as reported; availability under the Seventh A&R Credit Agreement as stated, being revolver commitments of 1,500.0 less 25.0 drawn and 93.2 of letters of credit |

Availability is the issuer's stated borrowing availability, not a calculation of covenant capacity, and the latest point is at a seasonal receivables peak.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 55.2 | US$m | Scheduled maturities at 2025-09-30 excluding finance leases; as printed by the issuer |
| FY2027 | 700.0 | US$m | As printed; includes the 250.0 senior notes due 2026-12-15 and 450.0 of Sixth A&R term loan that the 2025-11-21 credit agreement later replaced |
| FY2028 | 0 | US$m | The issuer prints a dash for this year; its printed total of 2,105.2 equals the other rows, so the dash is a nil maturity |
| FY2029 | 0 | US$m | The issuer prints a dash for this year; its printed total of 2,105.2 equals the other rows, so the dash is a nil maturity |
| FY2030 | 450.0 | US$m | As printed; the 4.500% notes due 2029 |
| Thereafter | 900.0 | US$m | As printed; the 2031 and 2032 senior notes of 500.0 and 400.0 |

The schedule is the one printed at 2025-09-30 and predates the 2025-11-21 credit agreement, so the 2027 bucket overstates what falls due in that year.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net sales | 3,552.7 | 3,413.1 | 2,915.7 | 2,986.1 | USD millions | Reported; annual includes Hawthorne, nine months exclude it | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Gross margin | 850.5 | 1,044.2 | 1,003.3 | 1,065.1 | USD millions | Reported | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Gross margin rate | 23.94 | 30.59 | 34.41 | 35.67 | % | Calculated, T4.9 | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| Income from operations | 208.8 | 358.6 | 525.7 | 549.7 | USD millions | Reported | 10-K_2025-09-30_smg.htm.jsonl, page 102; 10-Q_2026-06-27_smg.htm.jsonl, page 2 |
| EBITDA (Reported), period | 215.8 | 425.5 | 570.7 | 490.5 | USD millions | Calculated; unadjusted; consolidated; nine-month columns are nine months | Calculations R1 to R4 |
| EBITDA (Reported), last twelve months | 215.8 | 425.5 | Not calculable: the nine months of fiscal 2024 are not in the sources | 345.3 | USD millions | Calculated; annual columns are twelve months | Calculation L1 |
| Cash interest paid, period | 157.7 | 131.4 | 110.3 | 96.3 | USD millions | Reported; nine-month columns are nine months | 10-K_2025-09-30_smg.htm.jsonl, page 118; 10-Q_2026-06-27_smg.htm.jsonl, page 9 |
| Net cash from operating activities | 667.5 | 371.3 | 197.2 | 195.2 | USD millions | Reported | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 3 |
| Free cash flow | 583.5 | 273.9 | 142.7 | 132.1 | USD millions | Calculated: operating cash flow less capital spending | Calculations F1 to F4 |
| Total debt, carrying value | 2,226.8 | 2,106.4 | 2,188.3 | 2,113.3 | USD millions | Calculated: current plus long-term debt | Calculations D1 to D4 |
| Cash and cash equivalents | 71.6 | 36.6 | 39.6 | 27.7 | USD millions | Reported | 10-K_2025-09-30_smg.htm.jsonl, page 103; 10-Q_2026-06-27_smg.htm.jsonl, page 4 |
| Net debt | 2,155.2 | 2,069.8 | 2,148.7 | 2,085.6 | USD millions | Calculated: total debt less cash | Calculations N1 to N4 |
| Total debt / EBITDA | 10.32 | 4.95 | Not calculable: last-twelve-months EBITDA at 2025-06-28 is not in the sources | 6.12 | x | Calculated, T4.9 | Calculations V1, V4, V7 |
| Net debt / EBITDA | 9.99 | 4.86 | Not calculable: last-twelve-months EBITDA at 2025-06-28 is not in the sources | 6.04 | x | Calculated, T4.9 | Calculations V2, V5, V8 |
| EBITDA / cash interest | 1.37 | 3.24 | Not calculable: last-twelve-months EBITDA at 2025-06-28 is not in the sources | 2.94 | x | Calculated, T4.9 | Calculations V3, V6, V9 |
| Liquidity: cash plus undrawn committed facilities | 1,238.6 | 1,203.5 | Not supplied: availability at 2025-06-28 is not stated in the sources | 1,409.5 | USD millions | Calculated from stated availability | Calculations LQ1 to LQ3 |
| Issuer-reported covenant leverage ratio | 4.86 | 4.10 | Not supplied: the quarterly report for 2025-06-28 is not in the sources | 3.78 | x | Reported; credit agreement definition, not comparable with the rows above | 10-K_2024-09-30_smg.htm.jsonl, page 37; 10-K_2025-09-30_smg.htm.jsonl, page 137; 10-Q_2026-06-27_smg.htm.jsonl, page 20 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-09-30 | 2,226.8 | 71.6 | 2,155.2 | US$m | Gross debt is carrying value, current 52.6 plus long-term 2,174.2, including finance leases of 17.8; principal is 2,242.8 |
| FY2025 / 2025-09-30 | 2,106.4 | 36.6 | 2,069.8 | US$m | Gross debt is carrying value, current 57.2 plus long-term 2,049.2, including finance leases of 14.5 and other debt of 5.2; principal is 2,119.7; cash includes Hawthorne cash |
| 2026-06-27 | 2,113.3 | 27.7 | 2,085.6 | US$m | Gross debt is carrying value, current 277.0 plus long-term 1,836.3, including finance leases of 13.1; principal is 2,125.6; no pro forma adjustment is made |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-09-30 | 2,105.2 | 1.2 | 2,106.4 | US$m | Principal is the scheduled maturities excluding finance leases printed at 2025-09-30; reconciling items are finance lease obligations of 14.5 less unamortized debt issuance costs of 13.3 (calculation P1); the maturity ladder is drawn at this date because no later schedule is printed |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | The five filings were read to the Q3 report signed 2026-08-05; no issue, repayment, acquisition, disposal or dividend after 2026-06-27 is stated; the notes due 2026-12-15 are a scheduled maturity whose repayment is not shown |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 | 3,552.7 | 215.8 | US$m | EBITDA is the reported, unadjusted consolidated measure because the issuer states no adjusted EBITDA; twelve months; includes Hawthorne |
| FY2025 | 3,413.1 | 425.5 | US$m | EBITDA is the reported, unadjusted consolidated measure because the issuer states no adjusted EBITDA; twelve months; includes Hawthorne |

Both periods are fiscal years that include Hawthorne, so they are not comparable with the nine-month figures in the statements.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Seventh A&R revolving credit facility, drawn | 1 | Yes | 25.0 | 0.07 | US$m | Principal at 2026-06-27; obligors are the company and certain subsidiaries, guaranteed by substantially all domestic subsidiaries; cumulative leverage over last-twelve-months unadjusted EBITDA of 345.3 (calculation S1) |
| Seventh A&R term loan | 1 | Yes | 487.5 | 1.48 | US$m | Principal at 2026-06-27; same obligor and guarantor scope; cumulative with the revolver (calculation S2) |
| 5.250% Senior Notes due 2026 | 2 | No | 250.0 | 2.21 | US$m | General unsecured senior obligation of the company, guaranteed by substantially all domestic subsidiaries; equal-ranking notes are cumulated in the order the note lists them, by maturity (calculation S3) |
| 4.500% Senior Notes due 2029 | 2 | No | 450.0 | 3.51 | US$m | As above (calculation S4) |
| 4.000% Senior Notes due 2031 | 2 | No | 500.0 | 4.96 | US$m | As above (calculation S5) |
| 4.375% Senior Notes due 2032 | 2 | No | 400.0 | 6.12 | US$m | As above; the cumulative figure is the total of principal above, excluding finance leases of 13.1 whose ranking no source states (calculation S6) |

The stack uses principal, not carrying value, and a last-twelve-months EBITDA that includes a sale loss, so each cumulative figure is higher than one on adjusted earnings.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), last twelve months to 2026-06-27 | Not supplied: the issuer states no adjusted EBITDA, so no reported-to-adjusted bridge exists | US$m | Opening step is the reported measure of 345.3; the closing step is the issuer's adjusted EBITDA, which the filings do not print |
| EBITDA (Adjusted) | Not supplied: the issuer states no adjusted EBITDA, so no reported-to-adjusted bridge exists | US$m | The credit agreement Adjusted EBITDA is used for the covenant ratios but its add-backs are not itemised |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 22 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 1 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 3 |
| Fields present | 24 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 5 |
| MINOR | 7 |

## Calculations

| ID | Calculation | Inputs | Result |
|---|---|---|---|
| R1 | EBITDA (Reported) FY2024 = net income + income tax + interest expense + depreciation + amortization | -34.9 + 11.3 + 158.8 + 64.9 + 15.7 | USD 215.8 million |
| R2 | EBITDA (Reported) FY2025 | 145.2 + 76.5 + 128.8 + 62.7 + 12.3 | USD 425.5 million |
| R3 | EBITDA (Reported) 9M 2025, income tax of 119.7 continuing plus -4.8 discontinued | 297.1 + (119.7 - 4.8) + 102.2 + 47.1 + 9.4 | USD 570.7 million |
| R4 | EBITDA (Reported) 9M 2026, income tax of 137.8 continuing plus -10.8 discontinued | 225.8 + (137.8 - 10.8) + 86.5 + 47.0 + 4.2 | USD 490.5 million |
| L1 | EBITDA (Reported) last twelve months to 2026-06-27 = FY2025 + 9M 2026 - 9M 2025 | 425.5 + 490.5 - 570.7 | USD 345.3 million |
| L2 | Cash interest paid, last twelve months | 131.4 + 96.3 - 110.3 | USD 117.4 million |
| L3 | Operating cash flow, last twelve months | 371.3 + 195.2 - 197.2 | USD 369.3 million |
| L4 | Capital spending, last twelve months | 97.4 + 63.1 - 54.5 | USD 106.0 million |
| L5 | Free cash flow, last twelve months | 369.3 - 106.0 | USD 263.3 million |
| D1 | Total debt FY2024 = current portion + long-term debt | 52.6 + 2,174.2 | USD 2,226.8 million |
| D2 | Total debt FY2025 | 57.2 + 2,049.2 | USD 2,106.4 million |
| D3 | Total debt 9M 2025 | 52.1 + 2,136.2 | USD 2,188.3 million |
| D4 | Total debt 9M 2026 | 277.0 + 1,836.3 | USD 2,113.3 million |
| N1 | Net debt FY2024 | 2,226.8 - 71.6 | USD 2,155.2 million |
| N2 | Net debt FY2025 | 2,106.4 - 36.6 | USD 2,069.8 million |
| N3 | Net debt 2026-06-27 | 2,113.3 - 27.7 | USD 2,085.6 million |
| N4 | Net debt 2025-06-28 | 2,188.3 - 39.6 | USD 2,148.7 million |
| V1 | Total debt / EBITDA FY2024 | 2,226.8 / 215.8 | 10.32x |
| V2 | Net debt / EBITDA FY2024 | 2,155.2 / 215.8 | 9.99x |
| V3 | EBITDA / cash interest FY2024 | 215.8 / 157.7 | 1.37x |
| V4 | Total debt / EBITDA FY2025 | 2,106.4 / 425.5 | 4.95x |
| V5 | Net debt / EBITDA FY2025 | 2,069.8 / 425.5 | 4.86x |
| V6 | EBITDA / cash interest FY2025 | 425.5 / 131.4 | 3.24x |
| V7 | Total debt / EBITDA 2026-06-27 | 2,113.3 / 345.3 | 6.12x |
| V8 | Net debt / EBITDA 2026-06-27 | 2,085.6 / 345.3 | 6.04x |
| V9 | EBITDA / cash interest 2026-06-27 | 345.3 / 117.4 | 2.94x |
| F1 | Free cash flow FY2024 = operating cash flow - capital spending | 667.5 - 84.0 | USD 583.5 million |
| F2 | Free cash flow FY2025 | 371.3 - 97.4 | USD 273.9 million |
| F3 | Free cash flow 9M 2025 | 197.2 - 54.5 | USD 142.7 million |
| F4 | Free cash flow 9M 2026 | 195.2 - 63.1 | USD 132.1 million |
| F5 | Free cash flow 9M 2026 less dividends paid | 132.1 - 116.3 | USD 15.8 million |
| LQ1 | Liquidity 2024-09-30 = cash + stated availability | 71.6 + 1,167.0 | USD 1,238.6 million |
| LQ2 | Liquidity 2025-09-30 | 36.6 + 1,166.9 | USD 1,203.5 million |
| LQ3 | Liquidity 2026-06-27 | 27.7 + 1,381.8 | USD 1,409.5 million |
| A1 | Check of stated availability: revolver commitments less drawn less letters of credit | 1,500.0 - 25.0 - 93.2 | USD 1,381.8 million |
| I1 | Impairment, restructuring and other FY2024 = cost of sales line + operating expense line | 83.5 + 62.8 | USD 146.3 million |
| I2 | Impairment, restructuring and other FY2025: the impairment note states a total of 83.8; the two statement lines add to 83.7, a rounding difference of 0.1 in the filing | 20.3 + 63.4 = 83.7 against the stated 83.8 | USD 83.8 million (stated) |
| P1 | Reconciling items FY2025 = finance leases - unamortized issuance costs | 14.5 - 13.3 | USD 1.2 million |
| P2 | Maturity ladder total at 2025-09-30 | 55.2 + 700.0 + 0 + 0 + 450.0 + 900.0 | USD 2,105.2 million |
| P3 | Principal at 2026-06-27 less issuance costs equals carrying value | 25.0 + 487.5 + 250.0 + 450.0 + 500.0 + 400.0 + 13.1 - 12.3 | USD 2,113.3 million |
| S1 | Cumulative principal through the revolver over last-twelve-months EBITDA | 25.0 / 345.3 | 0.07x |
| S2 | Through the term loan | 512.5 / 345.3 | 1.48x |
| S3 | Through the 2026 notes | 762.5 / 345.3 | 2.21x |
| S4 | Through the 2029 notes | 1,212.5 / 345.3 | 3.51x |
| S5 | Through the 2031 notes | 1,712.5 / 345.3 | 4.96x |
| S6 | Through the 2032 notes | 2,112.5 / 345.3 | 6.12x |

## Gaps

- Adjusted EBITDA as defined in the credit agreement, and average total indebtedness, are not printed in any filing; this restricts covenant leverage and coverage to the ratios the issuer reports, so no headroom can be calculated. Severity High. Obtain the credit agreement or a compliance certificate.
- No recast FY2025 annual statement on the continuing-operations perimeter is supplied, so net sales, gross margin and other lines above EBITDA cannot be put on one perimeter across FY2025 and fiscal 2026. Severity High. Obtain the recast FY2025 or the fiscal 2026 annual report.
- Nothing after the quarter ended June 27, 2026 is in the sources, so net debt, liquidity and the fate of the notes maturing December 15, 2026 are known only to that date. Severity High. Obtain filings after August 5, 2026.
- The filing says the notes due December 15, 2026 will be repaid in fiscal 2026, but that maturity falls in fiscal 2027 under the September 30 fiscal year; which statement is right is not established. Severity Medium. Obtain later filings.
- The only printed maturity ladder is at September 30, 2025 and predates the credit agreement of November 21, 2025, so the ladder and the principal reconciliation are not at the latest balance sheet date. Severity Medium. Obtain a current schedule.
- Quarterly depreciation and amortization is not stated, so EBITDA for the three-month columns is not calculable. Severity Low. Obtain a quarterly cash flow statement.
- Carrying value by instrument, the term loan amortisation schedule and the credit facility spread grid are not disclosed. Severity Low. Obtain the credit agreement.
- The ranking and security of the finance lease obligations of USD 13.1 million are not stated, so they are left out of the debt stack and the secured and senior subtotals. Severity Low. Obtain lease terms if they matter.
- Cash flows of discontinued operations are not presented separately, so cash-flow figures are consolidated while income statement lines are continuing operations. Severity Low. Operating cash flow of discontinued operations is stated as not material.
- Cells marked as a dash in the statements, such as the loss on sale of business in FY2024, are read as not stated rather than zero. Severity Low. No action.
- Supplier finance obligations at September 30, 2025 are stated only in the Q3 report, not in the FY2025 annual report. Severity Low. No action.
- No quarter ended September 30, 2025 is available as a discrete period, so Q4 FY2025 is not constructed. Severity Low. Obtain the Q4 FY2025 release if needed.

## Next module

The orchestrator selects the next module.
