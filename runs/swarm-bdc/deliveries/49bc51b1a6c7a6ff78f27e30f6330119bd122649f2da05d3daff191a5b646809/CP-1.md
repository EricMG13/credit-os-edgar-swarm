# CP-1 financial foundation for BELDEN INC. (bdc)

## Request
Financial foundation for BELDEN INC. (bdc), as of 2026-11-05, on the credit snapshot pathway (credit_snapshot). Scope: audited FY2025 and FY2024 statements and the unaudited 2026 interim statements to 2026-09-27 in USD, carrying-value debt, leverage, cash interest cover, liquidity, maturities and dated events after the year-end.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_bdc-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-17 | 80ef274084e1c7703f38055c49f44de69b5a31dd5b2e660bad032bc466600517 | Audited FY2025 and FY2024 statements, Adjusted EBITDA reconciliation, debt note, interest paid, segments, subsequent events. |
| 10-Q_2026-03-29_bdc-20260329.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 29, 2026 | 2026-04-30 | 92ae5feb886f18c8068e6e144870a7ce7fe24ecefea2657b8f22ad10746ee6ac | Dated 2033 notes issue and 2027 notes redemption; the Ruckus agreement as a dated subsequent event. |
| 10-Q_2026-06-28_bdc-20260628.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 28, 2026 | 2026-07-30 | 60c04fb4ddf3b8e563e4be095f10f190f61691e26efdac7b09cb5561f0a211ee | Ruckus closing and Term Loan B as subsequent events; the Revolver draw of 2026-06-29. |
| 10-Q_2026-09-27_bdc-20260927.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 27, 2026 | 2026-10-29 | 7239af9a6f61de7f4eea5ba8a5ab17342b8c139514426ea01b365d68fd81dcfe | Interim statements to 2026-09-27, Adjusted EBITDA reconciliation, acquisition note, debt note, liquidity, market-risk table, deferred revenue. |
| EX-99.1_2026-04-30_companynewsreleasedatedmar.htm.jsonl | Exhibit 99.1 earnings release for the first quarter of 2026 | 2026-04-30 | 800b10b5a6acbba2ef9d00a1b953296d6d2a04b007b53040c5086b01b69c7caa | Q1 2026 margin and organic growth for the KPI dashboard; the announced Ruckus price. |
| EX-99.1_2026-07-30_companynewsreleasedatedjul.htm.jsonl | Exhibit 99.1 earnings release for the second quarter of 2026 | 2026-07-30 | 97518bcedf20ecd151c6170017340147f2d2133733fbcb29ebcfd34f2604e982 | Q2 2026 orders, book-to-bill, margin and organic growth for the KPI dashboard. |
| EX-99.1_2026-10-29_companynewsreleasedatedoct.htm.jsonl | Exhibit 99.1 earnings release for the third quarter of 2026 | 2026-10-29 | bd6ff1210615fc5d7c13577de667703f5a66b803e28876ed410b2fa777310433 | Q3 2026 orders, book-to-bill, margin, organic growth and the issuer free cash flow reconciliation. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | aea75c9c31fd715d31aed594e729ef96b997b04bba10951711274bcd033daeee | Source inventory, reporting scope, document dates and source limitations; no financial balance or ratio imported. |

No external sources were used. Document dates are the signature or release dates the documents state.

## Findings

### Bottom line

Belden's net leverage was 2.02x at year-end 2025 but reached 5.83x on last-twelve-months reported EBITDA at September 2026, because the July 2026 Ruckus Networks acquisition added a debt-funded term loan, so creditors should treat the year-end figures as superseded.
Basis: 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 11–13; calculation C03; calculation C05; calculation C12

The 5.83x overstates the run-rate position because only one quarter of Ruckus earnings is in the denominator while the full USD 1,850 million term loan is in the debt; on the issuer's adjusted EBITDA the same measure is 4.79x, and the company states no pro forma EBITDA or leverage. Interest cover was 10.26x on cash interest paid in FY2025, but no interim cash interest figure is stated.
Basis: 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 17–20; 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107; Source readiness (CP-0); calculation C05; calculation C12

### Financial interpretation

Leverage trajectory. Net debt was USD 759.799 million at year-end 2024 and USD 895.779 million at year-end 2025, which is 1.99x and 2.02x reported EBITDA, then USD 2669.704 million at 2026-09-27. The rise of USD 1773.925 million after year-end reflects the July 2026 Ruckus purchase: cash paid for acquisitions was USD 1869.631 million in the nine months, funded by a USD 1,850 million Term Loan B at term SOFR plus 2.25% maturing in 2033, and the rise is smaller than that cost because free cash flow exceeded shareholder payments and the dollar value of the euro notes fell. The January 2026 swap of the 2027 euro notes for new 2033 euro notes was size-neutral and pushed the nearest bond maturity out to 2028, so the maturity wall now sits in 2033 where the term loan and the 2033 notes both fall due. The mechanism for creditors is that the term loan is floating-rate and amortises, so interest cost and mandatory cash outflow both step up while only one quarter of Ruckus earnings is in the trailing figures.
Basis: 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 2–3; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 11–13; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 20; 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 93; calculation C03; calculation C14

Coverage. Cash interest paid was USD 43.157 million in FY2025 and USD 42.402 million in FY2024, giving reported EBITDA cover of 10.26x and 9.01x. The 2026 quarterly reports do not state interest paid, so interim cash cover is not established. On the accrual measure, Q3 2026 net interest expense was USD 41.802 million against USD 11.562 million a year earlier, and Q3 2026 reported EBITDA covered it 2.25x (4.09x on the issuer's adjusted EBITDA); the Q3 reported figure carries USD 56.3 million of non-cash inventory fair-value step-up that the issuer adds back.
Basis: 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 13; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32; calculation C04; calculation C13

Cash-flow quality. Operating cash flow was USD 240.200 million in the nine months of 2026 against USD 194.476 million a year earlier, and issuer-defined free cash flow was USD 107.444 million against USD 97.610 million; FY2025 free cash flow of USD 218.883 million was 0.49 of reported EBITDA. Receivables absorbed USD 79.039 million in the nine months while payables and accrued liabilities supplied USD 45.592 million, so working capital was a net use of cash despite a favourable payables swing, and the 2026 operating cash flow carries only one quarter of Ruckus.
Basis: 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 33; EX-99.1_2026-10-29_companynewsreleasedatedoct.htm.jsonl, page 6; 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; calculation C06

Liquidity. Cash was USD 380.706 million at 2026-09-27, of which USD 232.0 million was held outside the United States, and the Revolver had USD 373.5 million of stated availability against a USD 400.0 million commitment; the Revolver was drawn USD 50.0 million on 2026-06-29 and repaid on 2026-09-25, so quarter-end availability understates intra-quarter use. Term Loan B current maturities are USD 18.500 million. Availability is not bridged to the commitment or to the USD 17.6 million of standby letters of credit, and the filing does not say which limit binds.
Basis: 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 7; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 18; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 34; calculation C11

Non-debt funding float. Deferred revenue rose from USD 49.728 million at January 1, 2026 to USD 250.607 million at 2026-09-27, of which USD 201.675 million came with the Ruckus acquisition and USD 114.9 million is long-term. It is working-capital float that funds operations through customer prepayment, is not debt and is excluded from net debt, and it unwinds as support and software services are delivered rather than as cash is repaid; the acquired balance sits inside purchase accounting that is still preliminary and may change.
Basis: 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 10; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 12

Subsequent events. After year-end 2025 three dated events changed the debt structure: the 2033 notes were issued on 2026-01-28, the 2027 notes were repurchased on 2026-02-11 and Ruckus was acquired with Term Loan B on 2026-07-01. They are reflected in the 2026-09-27 balance sheet and are kept out of the year-end 2025 figures, which is why a year-end net debt must be read with the pro forma row. Standing alone, the Ruckus purchase would lift year-end 2025 net debt to USD 2765.410 million, or 6.25x reported FY2025 EBITDA, a figure that excludes any Ruckus earnings and so overstates leverage. No event after 2026-09-27 that changes net debt was found up to the 2026-11-05 cutoff.
Basis: 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 93–107; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 11; calculation C10; Source readiness (CP-0)

Contrary evidence and what would change the view. Orders reached a record USD 1,017 million in Q3 2026 with 11% organic revenue growth, the Revolver was undrawn at quarter-end and adjusted EBITDA margin was 17.7%, which argues for faster deleveraging than the trailing ratio implies. A company-stated pro forma EBITDA that includes a full year of Ruckus, or interim cash interest, would replace the overstated trailing measures with a figure that can be relied on; until then the 4.79x and 5.83x trailing ratios and the 6.25x year-end figure all overstate leverage on a full-year basis, and the answer lies below them.
Basis: EX-99.1_2026-10-29_companynewsreleasedatedoct.htm.jsonl, page 1; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 27–32; calculation C10; calculation C12

Data quality and definitions. The issuer states only an adjusted EBITDA, so reported EBITDA is built from net income, tax, net interest and the three depreciation and amortization lines of the issuer's own reconciliation; the nine-month 2026 cash-flow depreciation and amortization differs from those lines by USD 0.470 million. Debt is the balance-sheet carrying value of USD 3,050.410 million, which is USD 53.370 million below the USD 3,103.780 million principal even though one filing paragraph calls the principal a carrying value. Two multi-figure events are logged rather than reconciled: the USD cost of repurchasing the 2027 notes (537.3 in the annual report, 535.9 in the 2026 quarterly reports) and the Ruckus price (four statements between USD 1.846 billion and USD 1,869.6 million net of cash acquired).
Basis: 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 17–20; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3; 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 93; calculation C04; calculation C08

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_bdc-20251231.htm.jsonl | Annual Form 10-K | FY2025 with FY2024 and FY2023 comparatives (FY2025 and FY2024 extracted) | USD | thousands | Belden Inc. consolidated | US GAAP | Tier 1 audited statements; non-GAAP schedules Tier 2b | Annual statements, reconciliation, debt note, interest paid | Pre-dates the 2026 acquisition and term loan; two segments. |
| 10-Q_2026-03-29_bdc-20260329.htm.jsonl | Quarterly Form 10-Q | Q1 2026 (quarter ended 2026-03-29) | USD | thousands | Belden Inc. consolidated | US GAAP | Tier 2b unaudited interim | Dated subsequent events only | Q1 statements not extracted as columns; 9M and Q3 columns taken from the Q3 report. |
| 10-Q_2026-06-28_bdc-20260628.htm.jsonl | Quarterly Form 10-Q | Q2 2026 and six months 2026 | USD | thousands | Belden Inc. consolidated | US GAAP | Tier 2b unaudited interim | Dated subsequent events only | Six-month columns not extracted. |
| 10-Q_2026-09-27_bdc-20260927.htm.jsonl | Quarterly Form 10-Q | Q3 2026 and nine months 2026 with 2025 comparatives | USD | thousands | Belden Inc. consolidated including Ruckus from 2026-07-01 | US GAAP | Tier 2b unaudited interim | Interim statements, Adjusted EBITDA reconciliation, debt and liquidity | Ruckus purchase accounting preliminary; no interest paid; management control assessment excludes Ruckus. |
| EX-99.1_2026-04-30_companynewsreleasedatedmar.htm.jsonl | Earnings release, Exhibit 99.1 | Q1 2026 | USD | thousands and millions | Belden Inc. consolidated | US GAAP and non-GAAP | Tier 2b issuer release | KPI dashboard; announced Ruckus price | Non-GAAP measures; does not override filed statements. |
| EX-99.1_2026-07-30_companynewsreleasedatedjul.htm.jsonl | Earnings release, Exhibit 99.1 | Q2 2026 | USD | thousands and millions | Belden Inc. consolidated | US GAAP and non-GAAP | Tier 2b issuer release | KPI dashboard | Non-GAAP measures; does not override filed statements. |
| EX-99.1_2026-10-29_companynewsreleasedatedoct.htm.jsonl | Earnings release, Exhibit 99.1 | Q3 2026 and nine months 2026 | USD | thousands and millions | Belden Inc. consolidated including Ruckus from 2026-07-01 | US GAAP and non-GAAP | Tier 2b issuer release | KPI dashboard; free cash flow reconciliation | Non-GAAP measures; does not override filed statements. |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Belden Inc. | Issuer of all senior subordinated notes (euro notes issued by Belden Inc., a USD functional currency entity); the filings describe the Revolver and Term Loan B as entered into by Belden | December 31 | USD | thousands | Consolidated Belden Inc. and subsidiaries | US GAAP | FY2025, FY2024 audited; Q1 to Q3 2026 and 9M 2025 unaudited |
| Current and future domestic subsidiaries | Guarantors of the senior subordinated notes on a senior subordinated basis; guarantor scope for the Revolver and Term Loan B is not stated | Not supplied: no standalone fiscal periods stated | USD | thousands | Guarantee scope differs by instrument | Filing descriptions only | Not supplied: no guarantor financial statements |
| Ruckus Networks entities | Acquired business, consolidated from 2026-07-01 | Not supplied: acquired-entity fiscal year end not stated | USD | thousands | Included in Belden consolidated results from 2026-07-01 | US GAAP purchase accounting, preliminary | Q3 2026 and 9M 2026 contribution only |

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| 9M 2026 | 2026-01-01 | 2026-09-27 |
| 9M 2025 | 2025-01-01 | 2025-09-28 |
| Q3 2026 | 2026-06-29 | 2026-09-27 |
| Q3 2025 | 2025-06-30 | 2025-09-28 |

Subsequent events after the 2025-12-31 balance sheet, each kept out of the year-end figures: the 2033 notes were issued on 2026-01-28 (EUR 450.0 million) and the 2027 notes were repurchased on 2026-02-11; the definitive agreement to acquire Ruckus was signed on 2026-04-29 and announced on 2026-04-30; Ruckus closed on 2026-07-01 with the USD 1,850.0 million Term Loan B entered into that day; the Revolver was drawn USD 50.0 million on 2026-06-29 and repaid on 2026-09-25.
Basis: 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107; 10-Q_2026-03-29_bdc-20260329.htm.jsonl, page 16; EX-99.1_2026-04-30_companynewsreleasedatedmar.htm.jsonl, page 1; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 11–13; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 18–20

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Statements kept in USD thousands; money tables restated in millions | 10-K_2025-12-31_bdc-20251231.htm.jsonl; 10-Q_2026-09-27_bdc-20260927.htm.jsonl | Unit conversion | USD 2,715,194 thousand revenue | 2715.194 US$m | Exact division by 1,000 with three decimals; no rounding | All periods |
| EBITDA (Reported) built from components because the issuer states only Adjusted EBITDA | 10-K_2025-12-31_bdc-20251231.htm.jsonl; 10-Q_2026-09-27_bdc-20260927.htm.jsonl | Derivation | Not stated by the issuer | FY2025 442654 USD thousands | Net income plus income tax plus net interest plus depreciation, amortization of intangibles and software amortization, all lines of the issuer reconciliation; calculation C04 | All periods |
| Total Liabilities computed because the balance sheet prints none | 10-K_2025-12-31_bdc-20251231.htm.jsonl; 10-Q_2026-09-27_bdc-20260927.htm.jsonl | Derivation | Not printed | FY2025 2279197 USD thousands | Sum of printed liability lines; equals total assets less total equity; calculation C02 | FY2025, FY2024, Q3 2026 |
| Total Debt at 2026-09-27 computed from two balance-sheet lines | 10-Q_2026-09-27_bdc-20260927.htm.jsonl | Derivation | Current maturities 18500 and long-term debt 3031910 | 3050410 USD thousands | Equals the Note 9 total debt; calculation C01 | Q3 2026 |
| Cash interest paid written as a positive amount | 10-K_2025-12-31_bdc-20251231.htm.jsonl | Sign convention | Interest paid (43,157) | 43157 | The method states cash interest as the positive amount paid | FY2025, FY2024 |
| Last-twelve-months figures constructed at 2026-09-27 | 10-K_2025-12-31_bdc-20251231.htm.jsonl; 10-Q_2026-09-27_bdc-20260927.htm.jsonl | Constructed period | Not stated by the issuer | EBITDA (Reported) 458.140 US$m | Latest full year plus current stub minus prior-year stub; calculation C05 | 2026-09-27 |
| Loss line labels aligned | 10-K_2025-12-31_bdc-20251231.htm.jsonl; 10-Q_2026-09-27_bdc-20260927.htm.jsonl | Label alignment | Loss related to revolver refinancing (annual) and Loss on debt extinguishment (quarterly) | One row | Same line of the statement of operations under two labels; amounts unchanged | All periods |

### T4.4 Income statement

| Line item | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Q3 2026 | Q3 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Revenues | 2715194 | 2460979 | 2412486 | 1995074 | 965954 | 698221 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Cost of sales | -1684022 | -1538757 | -1522024 | -1227468 | -627204 | -435023 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Gross profit | 1031172 | 922222 | 890462 | 767606 | 338750 | 263198 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Selling, general and administrative expenses | -533366 | -494603 | -498438 | -402859 | -211959 | -139415 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Research and development expenses | -128758 | -112365 | -117023 | -96216 | -55220 | -33859 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Amortization of intangibles | -53356 | -48794 | -81018 | -40381 | -54807 | -13636 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Operating income | 315692 | 266460 | 193983 | 228150 | 16764 | 76288 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Interest expense, net | -46355 | -38303 | -68860 | -33866 | -41802 | -11562 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Loss related to revolver refinancing or debt extinguishment | -76 | Not supplied: the filing prints a dash | -1273 | -76 | Not supplied: the filing prints a dash | -76 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed; a dash is a missing value, not zero | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Non-operating pension cost | -2395 | -215 | -1408 | -1203 | -496 | -398 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Income (loss) before taxes | 266866 | 227942 | 122442 | 193005 | -25534 | 64252 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Income tax benefit (expense) | -29344 | -29528 | -14230 | -23372 | 14183 | -7562 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Net income (loss) | 237522 | 198414 | 108212 | 169633 | -11351 | 56690 | USD thousands | Reported; FY columns Tier 1 audited, interim columns Tier 2b unaudited; expense and loss shown negative as printed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Depreciation expense | 63784 | 56383 | 54641 | 46406 | 19174 | 16856 | USD thousands | Reported in the issuer Adjusted EBITDA reconciliation; positive add-back or expense magnitude; Tier 1 for FY, Tier 2b for interim | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32 |
| Amortization of software development intangible assets | 12293 | 10564 | 10811 | 8628 | 3938 | 3072 | USD thousands | Reported in the issuer Adjusted EBITDA reconciliation; positive add-back or expense magnitude; Tier 1 for FY, Tier 2b for interim | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32 |
| Severance, restructuring, and acquisition integration costs | 14967 | 22814 | 36696 | 13715 | 20450 | 9178 | USD thousands | Reported in the issuer Adjusted EBITDA reconciliation; positive add-back or expense magnitude; Tier 1 for FY, Tier 2b for interim | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32 |
| Adjustments related to acquisitions and divestitures | 1037 | 4764 | 59363 | 595 | 56500 | 11 | USD thousands | Reported in the issuer Adjusted EBITDA reconciliation; positive add-back or expense magnitude; Tier 1 for FY, Tier 2b for interim; Q3 2026 and 9M 2026 include inventory fair-value step-up of 56.3 million USD | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32 |
| EBITDA (Reported) | 442654 | 381986 | 337772 | 322286 | 94187 | 109378 | USD thousands | Calculated: net income + income tax + net interest + depreciation + amortization of intangibles + software amortization; issuer states no unadjusted EBITDA; calculation C04 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32; calculation C04 |
| EBITDA (Adjusted) | 458734 | 410772 | 435104 | 336672 | 171137 | 118643 | USD thousands | Issuer Adjusted EBITDA, non-GAAP; add-backs: severance, restructuring and integration; acquisition and divestiture adjustments; revolver refinancing or debt extinguishment loss; FY2024 also 1208 non-operating pension settlement loss; no house adjustment | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32 |

### Segment schedule

| Segment | Measure | FY2025 | FY2024 | Unit | Source |
|---|---|---|---|---|---|
| Smart Infrastructure Solutions | Segment revenues (non-affiliate) | 1219422 | 1143790 | USD thousands | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 82 |
| Smart Infrastructure Solutions | Segment EBITDA | 147942 | 140092 | USD thousands | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 82 |
| Automation Solutions | Segment revenues (non-affiliate) | 1495772 | 1317189 | USD thousands | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 82 |
| Automation Solutions | Segment EBITDA | 313386 | 269766 | USD thousands | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 82 |
| Corporate and eliminations | Segment revenues | Not supplied: segment revenues are non-affiliate and sum to consolidated revenue; no corporate revenue line is printed | Not supplied: segment revenues are non-affiliate and sum to consolidated revenue; no corporate revenue line is printed | USD thousands | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 83 |
| Corporate and eliminations | Eliminations in the EBITDA reconciliation | -199 | -79 | USD thousands | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 83 |

No segment disclosure exists for 2026 because the company reports one segment from 2026-01-01. Total segment EBITDA of 461328 thousand USD in FY2025 differs from consolidated Adjusted EBITDA of 458734 by 2594, which equals eliminations of 199 plus non-operating pension cost of 2395.
Basis: 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 6

### T4.5 Cash flow statement

| Line item | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income (loss) | 237522 | 198414 | 108212 | 169633 | USD thousands | Reported; FY Tier 1, interim Tier 2b | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Depreciation and amortization | 129433 | 115741 | 146940 | 95414 | USD thousands | Reported cash-flow add-back; 9M 2026 differs from the reconciliation components by 470, see conflict register | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Share-based compensation | 30015 | 27532 | 29281 | 22613 | USD thousands | Reported non-cash add-back | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Net Cash from Operating Activities | 354864 | 352076 | 240200 | 194476 | USD thousands | Reported; after working capital changes; the filings do not state where interest paid is classified | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Capital expenditures | -136172 | -129100 | -132863 | -97034 | USD thousands | Reported total capex, outflow negative; maintenance and growth split not disclosed | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Cash from (used for) business acquisitions | 7744 | -296452 | -1869631 | 7744 | USD thousands | Reported; 9M 2026 is the Ruckus purchase net of cash acquired; 7744 in FY2025 and 9M 2025 is a net inflow | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Proceeds from disposal of tangible assets | 191 | 113 | 107 | 168 | USD thousands | Reported inflow | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Net Cash from Investing Activities | -128237 | -426755 | -2002387 | -89122 | USD thousands | Reported; outflow negative | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Borrowings under credit arrangements | 50000 | Not supplied: the filing prints a dash | 2432630 | 50000 | USD thousands | Reported; FY2025 and 9M 2025 are Revolver borrowings; 9M 2026 includes the Term Loan B; a dash is a missing value | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Payments under borrowing arrangements | -50000 | Not supplied: the filing prints a dash | -585860 | -50000 | USD thousands | Reported outflow; 9M 2026 includes the 2027 notes repurchase and the Revolver repayment; a dash is a missing value | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Payments under share repurchase program, including excise tax | -195586 | -134308 | -31806 | -150967 | USD thousands | Reported outflow | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Cash dividends paid | -7966 | -8195 | -5870 | -6000 | USD thousands | Reported outflow | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Debt issuance costs paid | -3197 | Not supplied: the filing prints a dash | -47545 | -3178 | USD thousands | Reported outflow; a dash is a missing value | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Net Cash from Financing Activities | -217772 | -143718 | 1754868 | -170372 | USD thousands | Reported; outflow negative | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| FX Effect on Cash | 10730 | -8345 | -1862 | 8973 | USD thousands | Reported effect of exchange rates on cash | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Net Cash Change | 19585 | -226742 | -9181 | -56045 | USD thousands | Reported; operating plus investing plus financing plus FX effect | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Opening Cash | 370302 | 597044 | 389887 | 370302 | USD thousands | Reported beginning cash and equivalents | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Closing Cash | 389887 | 370302 | 380706 | 314257 | USD thousands | Reported ending cash and equivalents; equals the balance sheet | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Cash Interest Paid | 43157 | 42402 | Not supplied: the 10-Q states no interest paid | Not supplied: the 10-Q states no interest paid | USD thousands | Reported in the supplemental note, shown as the positive amount paid; annual only | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Free cash flow (issuer definition) | 218883 | 223089 | 107444 | 97610 | USD thousands | Calculated: operating cash flow less capital expenditures plus disposal proceeds; 9M figures equal the issuer free cash flow reconciliation; calculation C06 | EX-99.1_2026-10-29_companynewsreleasedatedoct.htm.jsonl, page 6; 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; calculation C06 |
| Income taxes paid, net of refunds | 33281 | 45348 | Not supplied: the 10-Q states no income taxes paid | Not supplied: the 10-Q states no income taxes paid | USD thousands | FY2025 reported net of refunds; FY2024 calculated as 71133 paid less 25785 refunds | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2024 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 389887 | 370302 | 380706 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Receivables, net | 462845 | 409711 | 684350 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Inventories, net | 402345 | 343099 | 555071 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Other current assets | 94303 | 73117 | 113375 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Total current assets | 1349380 | 1196229 | 1733502 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Property, plant and equipment, net | 566020 | 495625 | 609076 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Operating lease right-of-use assets | 113033 | 118551 | 132012 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Goodwill | 1036821 | 1018677 | 2030937 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Intangible assets, net | 399799 | 419074 | 1378494 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Deferred income taxes (asset) | 14512 | 16353 | 16651 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Other long-lived assets | 64056 | 63429 | 66543 | USD thousands | Reported; FY columns Tier 1 audited, Q3 2026 Tier 2b unaudited | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Total Assets | 3543621 | 3327938 | 5967215 | USD thousands | Reported | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Accounts payable | 361432 | 315724 | 398844 | USD thousands | Reported; Q3 2026 includes Ruckus liabilities; finance lease liabilities sit inside accrued and other long-term liabilities | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Accrued liabilities | 336067 | 306980 | 533972 | USD thousands | Reported; Q3 2026 includes Ruckus liabilities; finance lease liabilities sit inside accrued and other long-term liabilities | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Current maturities of long-term debt | Not supplied: the 10-Q prints a dash for 2025-12-31 | Not supplied: the 10-K balance sheet has no such line | 18500 | USD thousands | Reported; Term Loan B amortization due within twelve months | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Total current liabilities | 697499 | 622704 | 951316 | USD thousands | Reported | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Long-term debt | 1285666 | 1130101 | 3031910 | USD thousands | Reported carrying value net of unamortized issuance costs and discount; senior subordinated notes and Term Loan B | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Postretirement benefits | 63598 | 63260 | 57779 | USD thousands | Reported; pension and retiree medical, outside debt | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Deferred income taxes (liability) | 98060 | 77333 | 274261 | USD thousands | Reported | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Long-term operating lease liabilities | 94372 | 100049 | 113690 | USD thousands | Reported; not added to debt because the issuer presents lease liabilities on their own lines | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Other long-term liabilities | 40002 | 39755 | 146267 | USD thousands | Reported | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Total Liabilities | 2279197 | 2033202 | 4575223 | USD thousands | Calculated: sum of the printed liability lines; equals total assets less total equity; calculation C02 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; calculation C02 |
| Total Equity | 1264424 | 1294736 | 1391992 | USD thousands | Reported total stockholders equity; no temporary equity or noncontrolling interest at these dates | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Total Debt | 1285666 | 1130101 | 3050410 | USD thousands | Balance-sheet carrying value, current plus long-term, net of issuance costs and discounts; Q3 2026 calculated from two lines; calculation C01 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 2–17; calculation C01 |
| Cash & Equivalents | 389887 | 370302 | 380706 | USD thousands | Reported cash and cash equivalents; foreign cash of 232.0 million USD at 2026-09-27 is not described as restricted | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolving credit agreement due 2030 | Revolving credit facility with a borrowing base | 0.000 | 0.000 | 0.000 | 400.000 | Not supplied: the filings state the borrowing base but not whether the Revolver is secured | Senior debt (stated: the senior subordinated notes are subordinated to senior debt including the Revolver) | USD | 0.000 | Not applicable | Margin 1.25% to 1.75% over SOFR by leverage; base-rate margin 0.25% to 0.75%; commitment fee 0.25% | floating | SOFR | 125 to 175 | Not supplied: no floor stated | 2030-07-18 | 0.000 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 18 |
| 3.875% senior subordinated notes due 2028 | Senior subordinated notes, EUR | 398.930 | 350.000 EUR million | 398.930 | Not applicable | Not supplied: no source states a security interest | Subordinated to all senior debt; equal with the 2031 and 2033 notes; guaranteed by domestic subsidiaries on a senior subordinated basis | EUR | 398.930 | Not applicable | 3.875% fixed | fixed | Not applicable | Not applicable | Not applicable | 2028 (day not stated) | 0.000 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 17–18; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 35 |
| 3.375% senior subordinated notes due 2031 | Senior subordinated notes, EUR | 341.940 | 300.000 EUR million | 341.940 | Not applicable | Not supplied: no source states a security interest | Subordinated to all senior debt; equal with the 2028 and 2033 notes; guaranteed by domestic subsidiaries on a senior subordinated basis | EUR | 341.940 | Not applicable | 3.375% fixed | fixed | Not applicable | Not applicable | Not applicable | 2031 (day not stated) | 0.000 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 18–19; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 35 |
| 4.250% senior subordinated notes due 2033 | Senior subordinated notes, EUR | 512.910 | 450.000 EUR million | 512.910 | Not applicable | Not supplied: no source states a security interest | Subordinated to all senior debt; equal with the 2028 and 2031 notes; guaranteed by domestic subsidiaries on a senior subordinated basis | EUR | 512.910 | Not applicable | 4.250% fixed | fixed | Not applicable | Not applicable | Not applicable | 2033 (day not stated) | 0.000 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 20; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 35 |
| Term Loan B due 2033 | Term loan | 1850.000 | 1850.000 | 1850.000 | 1850.000 | Not supplied: no source states the security of Term Loan B | Not supplied: no source states the legal rank of Term Loan B | USD | 1850.000 | Not applicable | Term SOFR plus 2.25% or base rate plus 1.25%; issued at a 4.6 million USD discount | floating | Term SOFR | 225 | Not supplied: no floor stated | 2033-07-01 | 18.500 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 20; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 35 |
| Financing cost adjustment | Unamortized debt issuance costs and debt discount | -53.370 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -53.370 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 17 |

The Reporting Currency Amount cells plus the financing cost adjustment reconcile to Total Debt of 3050.410 US$m at 2026-09-27: 0.000 + 398.930 + 341.940 + 512.910 + 1850.000 - 53.370.
Basis: 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 17–20; calculation C08

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM to 2026-09-27 | USD 442.654m | USD 337.772m | USD 322.286m | USD 458.140m | Calculated | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32 | FY2025 plus 9M 2026 less 9M 2025; includes one quarter of Ruckus; not pro forma; calculation C05. |
| EBITDA (Adjusted) | LTM to 2026-09-27 | USD 458.734m | USD 435.104m | USD 336.672m | USD 557.166m | Calculated | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32 | Issuer add-backs; includes one quarter of Ruckus; not pro forma; calculation C05. |
| Revenues | LTM to 2026-09-27 | USD 2715.194m | USD 2412.486m | USD 1995.074m | USD 3132.606m | Calculated | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 | Includes USD 167.8 million of Ruckus revenue from 2026-07-01; calculation C05. |
| Cash Interest Paid | LTM to 2026-09-27 | USD 43.157m | Not supplied: the 10-Q states no interest paid | Not supplied: the 10-Q states no interest paid | Not calculable: the interim stubs are missing, not zero | Not Calculable | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107 | An LTM needs every component; none of the interim cash interest is stated. |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Carrying debt / reported EBITDA | 1130.101 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; calculation C03 | 381.986 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | FY2024 / 2024-12-31 | USD | US$m | 2.96 | Calculated | Tier 1 audited | Before the 2026 events. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 759.799 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; calculation C03 | 381.986 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | FY2024 / 2024-12-31 | USD | US$m | 1.99 | Calculated | Tier 1 audited | Before the 2026 events. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 381.986 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | 42.402 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107 | FY2024 / 2024-12-31 | USD | US$m | 9.01 | Calculated | Tier 1 audited | Cash paid, not accrued expense. |
| Total debt / adjusted EBITDA | Carrying debt / issuer Adjusted EBITDA | 1130.101 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; calculation C03 | 410.772 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | FY2024 / 2024-12-31 | USD | US$m | 2.75 | Calculated | Tier 1 audited; issuer add-backs | Before the 2026 events. |
| Net debt / adjusted EBITDA | Net carrying debt / issuer Adjusted EBITDA | 759.799 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; calculation C03 | 410.772 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | FY2024 / 2024-12-31 | USD | US$m | 1.85 | Calculated | Tier 1 audited; issuer add-backs | Before the 2026 events. |
| Adjusted EBITDA / cash interest | Issuer Adjusted EBITDA / cash interest paid | 410.772 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | 42.402 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107 | FY2024 / 2024-12-31 | USD | US$m | 9.69 | Calculated | Tier 1 audited; issuer add-backs | Cash paid, not accrued expense. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 1285.666 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; calculation C03 | 442.654 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | FY2025 / 2025-12-31 | USD | US$m | 2.90 | Calculated | Tier 1 audited | Before the 2026 events; pro forma for Ruckus is in the post-balance-sheet table. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 895.779 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; calculation C03 | 442.654 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | FY2025 / 2025-12-31 | USD | US$m | 2.02 | Calculated | Tier 1 audited | Before the 2026 events; pro forma for Ruckus is in the post-balance-sheet table. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 442.654 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | 43.157 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107 | FY2025 / 2025-12-31 | USD | US$m | 10.26 | Calculated | Tier 1 audited | Cash paid, not accrued expense. |
| Total debt / adjusted EBITDA | Carrying debt / issuer Adjusted EBITDA | 1285.666 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; calculation C03 | 458.734 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | FY2025 / 2025-12-31 | USD | US$m | 2.80 | Calculated | Tier 1 audited; issuer add-backs | Before the 2026 events; pro forma for Ruckus is in the post-balance-sheet table. |
| Net debt / adjusted EBITDA | Net carrying debt / issuer Adjusted EBITDA | 895.779 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; calculation C03 | 458.734 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | FY2025 / 2025-12-31 | USD | US$m | 1.95 | Calculated | Tier 1 audited; issuer add-backs | Before the 2026 events; pro forma for Ruckus is in the post-balance-sheet table. |
| Adjusted EBITDA / cash interest | Issuer Adjusted EBITDA / cash interest paid | 458.734 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C04 | 43.157 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107 | FY2025 / 2025-12-31 | USD | US$m | 10.63 | Calculated | Tier 1 audited; issuer add-backs | Cash paid, not accrued expense. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 3050.410 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; calculation C01; calculation C03 | 458.140 | LTM, T4.8 and calculation C05 | 2026-09-27 | USD | US$m | 6.66 | Calculated | Tier 2b unaudited LTM | Trailing EBITDA holds one quarter of Ruckus against the full term loan; not pro forma. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 2669.704 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; calculation C01; calculation C03 | 458.140 | LTM, T4.8 and calculation C05 | 2026-09-27 | USD | US$m | 5.83 | Calculated | Tier 2b unaudited LTM | Trailing EBITDA holds one quarter of Ruckus against the full term loan; not pro forma. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 458.140 | LTM, T4.8 and calculation C05 | Not supplied: the 10-Q states no interest paid | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 | 2026-09-27 | USD | US$m | Not calculable: interim cash interest paid is not stated | Not Calculable | Tier 2b unaudited LTM | No LTM cash interest can be built from the 2026 reports. |
| Total debt / adjusted EBITDA | Carrying debt / issuer Adjusted EBITDA | 3050.410 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; calculation C01; calculation C03 | 557.166 | LTM, T4.8 and calculation C05 | 2026-09-27 | USD | US$m | 5.47 | Calculated | Tier 2b unaudited LTM; issuer add-backs | Trailing EBITDA holds one quarter of Ruckus against the full term loan; not pro forma. |
| Net debt / adjusted EBITDA | Net carrying debt / issuer Adjusted EBITDA | 2669.704 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; calculation C01; calculation C03 | 557.166 | LTM, T4.8 and calculation C05 | 2026-09-27 | USD | US$m | 4.79 | Calculated | Tier 2b unaudited LTM; issuer add-backs | Trailing EBITDA holds one quarter of Ruckus against the full term loan; not pro forma. |
| Adjusted EBITDA / cash interest | Issuer Adjusted EBITDA / cash interest paid | 557.166 | LTM, T4.8 and calculation C05 | Not supplied: the 10-Q states no interest paid | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 | 2026-09-27 | USD | US$m | Not calculable: interim cash interest paid is not stated | Not Calculable | Tier 2b unaudited LTM; issuer add-backs | No LTM cash interest can be built from the 2026 reports. |
| FCF conversion | Free cash flow / reported EBITDA | 218.883 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; calculation C06 | 442.654 | T4.4 EBITDA (Reported); calculation C04 | FY2025 | USD | US$m | 0.49 | Calculated | Tier 1 audited | Issuer free cash flow definition. |
| FCF conversion | Free cash flow / reported EBITDA | 223.089 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 60–61; calculation C06 | 381.986 | T4.4 EBITDA (Reported); calculation C04 | FY2024 | USD | US$m | 0.58 | Calculated | Tier 1 audited | Issuer free cash flow definition. |
| Capex / revenue | Capital expenditures / revenues | 136.172 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60 | 2715.194 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59 | FY2025 | USD | US$m | 0.05 | Calculated | Tier 1 audited | Total capex; maintenance and growth split not disclosed. |
| Capex / revenue | Capital expenditures / revenues | 129.100 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60 | 2460.979 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59 | FY2024 | USD | US$m | 0.05 | Calculated | Tier 1 audited | Total capex; maintenance and growth split not disclosed. |
| Operating cash flow / total debt | Net cash from operating activities / carrying debt | 354.864 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60 | 1285.666 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59 | FY2025 | USD | US$m | 0.28 | Calculated | Tier 1 audited | Before the 2026 debt. |
| Operating cash flow / total debt | Net cash from operating activities / carrying debt | 352.076 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60 | 1130.101 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59 | FY2024 | USD | US$m | 0.31 | Calculated | Tier 1 audited | Before the 2026 debt. |
| (EBITDA - capex) / cash interest | (Reported EBITDA less capex) / cash interest paid | 306.482 | calculation C04 and T4.5 | 43.157 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107 | FY2025 | USD | US$m | 7.10 | Calculated | Tier 1 audited | Cash paid, not accrued expense. |
| (EBITDA - capex) / cash interest | (Reported EBITDA less capex) / cash interest paid | 252.886 | calculation C04 and T4.5 | 42.402 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107 | FY2024 | USD | US$m | 5.96 | Calculated | Tier 1 audited | Cash paid, not accrued expense. |
| Liquidity / total debt | (Cash + available Revolver capacity) / carrying debt | 754.206 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 18; calculation C11 | 3050.410 | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 | 2026-09-27 | USD | US$m | 0.25 | Calculated | Tier 2b unaudited | Availability as stated, not bridged to the commitment. |
| Revenue growth | (FY2025 revenues / FY2024 revenues - 1) x 100 | 2715.194 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59 | 2460.979 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59 | FY2025 | USD | US$m | 10.33 | Calculated | Tier 1 audited | Percent; includes acquisition revenue. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|
| Growth | Organic revenue growth, issuer-reported, year on year (rate) | 7% | 8% | 11% | Rising | Issuer organic measure excludes currency, copper pass-through, acquisitions and divestitures; Q3 total growth of 38% includes Ruckus. EX-99.1_2026-04-30_companynewsreleasedatedmar.htm.jsonl, page 1; EX-99.1_2026-07-30_companynewsreleasedatedjul.htm.jsonl, page 1; EX-99.1_2026-10-29_companynewsreleasedatedoct.htm.jsonl, page 1 |
| Demand | Orders, issuer-reported (period flow, USD millions) | Not supplied: the Q1 release states no orders | 836 | 1017 | Rising | Two observations only; Q3 orders include Ruckus. EX-99.1_2026-07-30_companynewsreleasedatedjul.htm.jsonl, page 1; EX-99.1_2026-10-29_companynewsreleasedatedoct.htm.jsonl, page 1 |
| Demand | Book-to-bill, issuer-reported (rate) | Not supplied: the Q1 release states no book-to-bill | 1.11 | 1.05 | Falling | Above 1 in both quarters; two observations. EX-99.1_2026-07-30_companynewsreleasedatedjul.htm.jsonl, page 1; EX-99.1_2026-10-29_companynewsreleasedatedoct.htm.jsonl, page 1 |
| Profitability | Adjusted EBITDA margin, issuer-reported (rate) | 17.0% | 19.5% | 17.7% | Mixed | Issuer non-GAAP; Q2 results include a net tariff recovery benefit of about 0.25 USD per share, as the release states. EX-99.1_2026-04-30_companynewsreleasedatedmar.htm.jsonl, page 1; EX-99.1_2026-07-30_companynewsreleasedatedjul.htm.jsonl, page 1; EX-99.1_2026-10-29_companynewsreleasedatedoct.htm.jsonl, page 1 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported unadjusted EBITDA as the leverage and cover denominator | The issuer states only Adjusted EBITDA, adding back severance, restructuring and integration, acquisition and divestiture adjustments, revolver refinancing or extinguishment loss and, in FY2024, a pension settlement loss | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32 | All | High: FY2025 458734 against 442654 thousand USD, a difference of 16080; 9M 2026 435104 against 337772, a difference of 97332 (mainly inventory fair-value step-up and integration) | Fundamental credit; Liquidity; Downside | Reported EBITDA is built from components and used as the primary denominator; adjusted ratios are shown beside it and labelled. |
| Depreciation and amortization | One D&A figure | Cash-flow D&A against the three D&A lines of the Adjusted EBITDA reconciliation | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32 | 9M 2026 and 9M 2025 | Low: 146940 against 146470 thousand USD in 9M 2026 (470); 95414 against 95415 in 9M 2025 (1) | Financial foundation | The reconciliation components are used for EBITDA in every period; the cash-flow line is shown as reported. |
| Total debt | Balance-sheet carrying value net of issuance costs, with principal logged separately | One paragraph calls 3103.8 million USD the carrying value of long-term debt although it is principal | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 20; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 17 | 2026-09-27 | Medium: carrying 3050.410 against principal 3103.780, a difference of 53.370 US$m | Fundamental credit; Refinancing & LME | Carrying value 3050.410 is used; the principal is kept in the reconciliation. FY2025 carrying 1285.666 and principal 1291.950; FY2024 carrying 1130.101 and principal 1138.610. |
| 2027 notes repurchase cash | One figure per event | Cash consideration of EUR 450.0 million stated as 537.3 million USD in the annual report and 535.9 million USD in the 2026 quarterly reports; the 2033 notes issue is stated as 537.3 million USD at issuance | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 93; 10-Q_2026-03-29_bdc-20260329.htm.jsonl, page 19; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 18; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 20 | 2026-02-11 event | Low: 1.4 million USD difference | Financial foundation; Refinancing & LME | Both figures are shown and neither is chosen; the net debt effect of the refinancing is not supplied. |
| Ruckus purchase price | One figure per event | About 1.846 billion USD at signing, about 1.85 billion USD in the announcement, about 1.9 billion USD in later summaries, 1869.6 million USD net of cash acquired in the acquisition note and 1869.631 million USD in the cash flow statement; Term Loan B principal 1850.0 million USD | 10-Q_2026-03-29_bdc-20260329.htm.jsonl, page 16; EX-99.1_2026-04-30_companynewsreleasedatedmar.htm.jsonl, page 1; 10-Q_2026-06-28_bdc-20260628.htm.jsonl, page 18; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 11; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 | 2026-07-01 event | Medium: up to about 24 million USD between the signing figure and the cash paid | Financial foundation; Fundamental credit | The cash flow figure 1869.631 is used for the net debt effect; the others are shown with their roles. |
| Interest | Cash interest paid as the cover denominator | Income statement shows net interest expense; cash interest paid is in a supplemental note and annual only | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107 | FY2025 and FY2024; interim periods | Medium: FY2025 net interest expense 46355 against interest paid 43157 thousand USD | Fundamental credit | Cover uses cash paid for fiscal years and is not calculable for interim periods; accrual coverage is calculated separately in the interpretation. |
| Undrawn committed facilities | Commitment less drawn amounts and letters of credit | Available borrowing capacity of the borrowing-base Revolver | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 46; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 7; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 18 | 2025-12-31 and 2026-09-27 | Medium: 373.5 million USD stated availability against a 400.0 million USD commitment and 17.6 million USD of standby letters of credit, not bridged | Liquidity | Stated availability is used as undrawn facilities; the commitment is shown beside it. |
| Net debt | Carrying debt less cash and equivalents | Cash includes foreign cash outside the United States | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 46; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 34 | 2025-12-31 and 2026-09-27 | Low: 232.0 million USD of 380.706 held abroad at 2026-09-27; 234.0 million USD at year-end 2025; not described as restricted | Liquidity; Fundamental credit | All cash is netted; repatriation tax is noted but not quantified. |
| Lease and pension obligations | Lease liabilities presented on their own lines are not added to debt | Operating lease liabilities of 133.727 million USD, finance lease liabilities of 8.525 million USD and postretirement benefits of 57.779 million USD at 2026-09-27 sit outside the debt lines | 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 16 | 2026-09-27 | Medium: outside Total Debt by method | Fundamental credit; Liquidity | Excluded from Total Debt and leverage; named here so a reader can add them. |
| Segments | One segment definition across periods | Two reportable segments through FY2025; one reportable segment from 2026-01-01 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 82; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 6 | FY2025 to 2026 | Medium: segment trends cannot continue into 2026 | Earnings changes; Business & governance | No 2026 segment figure is stated; the FY2025 segment schedule stands alone. |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 2.96 | 1.99 | x | Carrying debt and reported EBITDA of FY2024 from the annual report; before the 2026 events. |
| FY2025 / 2025-12-31 | 2.90 | 2.02 | x | Carrying debt and reported EBITDA of FY2025; before the 2026 events; pro forma for Ruckus in the post-balance-sheet table. |
| 2026-09-27 | 6.66 | 5.83 | x | Carrying debt at 2026-09-27 over last-twelve-months reported EBITDA; one quarter of Ruckus in the denominator, full Term Loan B in the debt; not pro forma; adjusted equivalents 5.47x and 4.79x. |

The 2026-09-27 ratios use trailing EBITDA with one quarter of Ruckus against the full term loan, so they overstate leverage on a full-year basis, and the year-end ratios pre-date the acquisition.
Basis: 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; calculation C12

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 9.01 | x | Reported EBITDA over cash interest paid, FY2024; cash paid is not accrued expense. |
| FY2025 / 2025-12-31 | 10.26 | x | Reported EBITDA over cash interest paid, FY2025; cash paid is not accrued expense. |
| 2026-09-27 | Not supplied: the 2026 quarterly reports state no interest paid | x | No last-twelve-months cash interest can be built; accrual coverage of Q3 2026 net interest expense is in the interpretation. |

Cover is shown for fiscal years only because the 2026 reports state no cash interest paid, and the 2026 interest cost is far higher than FY2025.
Basis: 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 107; calculation C12

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 370.302 | Not supplied: the FY2025 annual report states availability at 2025-12-31 only | US$m | Reported cash; Revolver availability at 2024-12-31 is not stated in the sources supplied. |
| FY2025 / 2025-12-31 | 389.887 | 383.9 | US$m | Reported cash; stated Revolver availability against a 400.0 commitment, no borrowings outstanding, from the annual report. |
| 2026-09-27 | 380.706 | 373.5 | US$m | Reported cash; stated Revolver availability against a 400.0 commitment; 232.0 of cash held outside the United States; the Revolver was drawn and repaid within the quarter. |

Undrawn facilities are the issuer-stated available borrowing capacity of a borrowing-base Revolver, not the commitment.
Basis: 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 46; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 18; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 34

### Financials and credit metrics

| Metric | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Revenue | 2460.979 | 2715.194 | 1995.074 | 2412.486 | USD millions | Reported; annual and nine-month durations are in separate columns; 9M 2026 includes 167.8 of Ruckus revenue | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Adjusted EBITDA (issuer) | 410.772 | 458.734 | 336.672 | 435.104 | USD millions | Issuer non-GAAP | 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32 |
| EBITDA (Reported) | 381.986 | 442.654 | 322.286 | 337.772 | USD millions | Calculated from components; calculation C04 | calculation C04 |
| Net income (loss) | 198.414 | 237.522 | 169.633 | 108.212 | USD millions | Reported | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Net cash from operating activities | 352.076 | 354.864 | 194.476 | 240.200 | USD millions | Reported | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Capital expenditures | 129.100 | 136.172 | 97.034 | 132.863 | USD millions | Reported total capex, positive magnitude | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 60; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 3 |
| Free cash flow (issuer definition) | 223.089 | 218.883 | 97.610 | 107.444 | USD millions | Calculated; calculation C06 | calculation C06 |
| Total debt (carrying) | 1130.101 | 1285.666 | Not supplied: no balance sheet at 2025-09-28 in the sources | 3050.410 | USD millions | Period-end carrying value; 9M 2026 column is 2026-09-27 | 10-K_2025-12-31_bdc-20251231.htm.jsonl, page 59; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2 |
| Net debt | 759.799 | 895.779 | Not supplied: no balance sheet at 2025-09-28 in the sources | 2669.704 | USD millions | Calculated; calculation C03 | calculation C03 |
| Cash plus available Revolver capacity | Not supplied: 2024 availability not stated | 773.787 | Not supplied: no balance sheet at 2025-09-28 in the sources | 754.206 | USD millions | Calculated; calculation C11 | calculation C11 |
| Net debt / EBITDA (Reported) | 1.99 | 2.02 | Not supplied: no balance sheet at 2025-09-28 in the sources | 5.83 | x | Calculated; 9M 2026 column is the LTM ratio at 2026-09-27, not pro forma; calculation C12 | calculation C12 |
| Net debt / EBITDA (Adjusted) | 1.85 | 1.95 | Not supplied: no balance sheet at 2025-09-28 in the sources | 4.79 | x | Calculated; 9M 2026 column is the LTM ratio at 2026-09-27, not pro forma; calculation C12 | calculation C12 |
| EBITDA (Reported) / cash interest | 9.01 | 10.26 | Not supplied: the 10-Q states no interest paid | Not supplied: the 10-Q states no interest paid | x | Calculated for fiscal years only; calculation C12 | calculation C12 |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 4.625 | US$m | Stated: the market-risk table shows 4.625 of Term Loan B due in 2026; no note matures in 2026. |
| FY2027 | 18.500 | US$m | Calculated: Term Loan B amortises 0.25% per quarter of 1850.000, four installments; matches the 18.500 of current maturities stated at 2026-09-27. |
| FY2028 | 417.430 | US$m | 398.930 3.875% euro senior subordinated notes (EUR 350.0 million) due 2028 plus 18.500 Term Loan B amortisation. |
| FY2029 | 18.500 | US$m | Calculated Term Loan B amortisation only. |
| FY2030 | 18.500 | US$m | Calculated Term Loan B amortisation only; the Revolver (commitment 400.0, undrawn) matures 2030-07-18 and is not in the ladder. |
| FY2031 | 360.440 | US$m | 341.940 3.375% euro senior subordinated notes (EUR 300.0 million) due 2031 plus 18.500 Term Loan B amortisation. |
| FY2032 | 18.500 | US$m | Calculated Term Loan B amortisation only. |
| FY2033 | 2247.285 | US$m | 512.910 4.250% euro senior subordinated notes (EUR 450.0 million) due 2033 plus the Term Loan B balance of 1734.375 due by its 2033-07-01 maturity. |

The ladder is drawn at 2026-09-27 on contractual principal; Term Loan B amortisation by year is calculated from 0.25% per quarter because the filings state only the 2026 amount and the 12-month current maturities.
Basis: 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 2; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 20; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 35; calculation C07

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1130.101 | 370.302 | 759.799 | US$m | Reported carrying value of long-term debt, all senior subordinated euro notes net of 8.509 issuance costs, no lease or securitization lines inside debt; principal total 1138.610. Before the 2026 events. |
| FY2025 / 2025-12-31 | 1285.666 | 389.887 | 895.779 | US$m | Reported carrying value of long-term debt, all senior subordinated euro notes net of 6.284 issuance costs, no lease or securitization lines inside debt; principal total 1291.950. Before the 2026 events; Ruckus pro forma is in the post-balance-sheet table. |
| 2026-09-27 | 3050.410 | 380.706 | 2669.704 | US$m | Reported carrying value: current maturities 18.500 plus long-term debt 3031.910, senior subordinated notes and Term Loan B net of 53.370 issuance costs and discount; no lease or securitization lines inside debt; principal total 3103.780. Reported, not pro forma. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-27 | 3103.780 | -53.370 | 3050.410 | US$m | Ladder principal is the three euro note amounts 398.930, 341.940 and 512.910 plus Term Loan B 1850.000. Reconciling items are the unamortized debt issuance costs and debt discount of -53.370 stated in the debt note; no debt is left out of the ladder, and the Revolver is undrawn. Calculation C08. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Issue of EUR 450.0 million 4.250% senior subordinated notes due 2033 | 2026-01-28 | Not supplied: the filings state the issue amount, not its net effect on net debt | Not supplied: the effect is not stated | Not supplied: the effect is not stated | US$m | Annual report subsequent events and the Q3 debt note: EUR 450.0 million, 537.3 million USD at issuance, fees of about 8.6 million USD; whether it was issued at par is not stated, so no net debt effect is worked. Already reflected in the 2026-09-27 balance sheet; not cumulative with other rows. |
| Repurchase of the EUR 450.0 million 3.375% notes due 2027 | 2026-02-11 | Not supplied: two cash amounts are stated and the effect on net debt is not | Not supplied: the effect is not stated | Not supplied: the effect is not stated | US$m | Cash consideration stated as 537.3 million USD in the annual report and 535.9 million USD in the 2026 quarterly reports, against a year-end carrying value of 528.525 million USD that moves with the euro; loss on extinguishment of 1.3 million USD is non-cash. Conflict logged; not cumulative with other rows. |
| Acquisition of Ruckus Networks funded by the USD 1,850.0 million Term Loan B | 2026-07-01 | 1869.631 | 2765.410 | 6.25 | US$m | Amount is cash paid for the acquisition net of cash acquired, 1869.631, on a carrying-value basis where debt fees reduce debt and cash equally. Pro forma net debt is year-end 2025 net debt 895.779 plus the amount; leverage divides by FY2025 reported EBITDA of 442.654, which excludes Ruckus earnings and so overstates leverage. Standalone, not cumulative with other rows; already reflected in the 2026-09-27 balance sheet; share repurchases and dividends of the nine months are in the cash flow statement. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 2512.084 | 438.100 | US$m | Annual duration; issuer-adjusted EBITDA, non-GAAP, not house-adjusted; from the annual report. |
| FY2024 / 2024-12-31 | 2460.979 | 410.772 | US$m | Annual duration; issuer-adjusted EBITDA, not house-adjusted. |
| FY2025 / 2025-12-31 | 2715.194 | 458.734 | US$m | Annual duration; issuer-adjusted EBITDA, not house-adjusted; add-backs total 16.080 over reported EBITDA. |
| 2026-09-27 | 3132.606 | 557.166 | US$m | Twelve-month duration to 2026-09-27, constructed; issuer-adjusted EBITDA; includes one quarter of Ruckus; calculation C05. |

Adjusted EBITDA here is the issuer measure, while the leverage and cover charts use reported EBITDA.
Basis: 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; 10-Q_2026-09-27_bdc-20260927.htm.jsonl, page 32; calculation C05

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no facility has both a stated legal rank and a stated security | Not supplied: Term Loan B rank is not stated | Not supplied: security is not stated for any facility | Not supplied: no stack is drawn | Not supplied: no stack is drawn | US$m | The notes state a subordinated rank and guarantees but no security; the Revolver states a borrowing base but neither security nor rank beyond senior debt; Term Loan B states neither. Guarantor scope: domestic subsidiaries guarantee the notes; Revolver and Term Loan B obligors are not stated. |

The module states no debt stack for this run because no facility has both a stated rank and a stated security, and the facilities left out are named under Gaps.
Basis: 10-Q_2026-09-27_bdc-20260927.htm.jsonl, pages 17–20

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported) FY2025 | 442.654 | US$m | Opening amount: reported unadjusted EBITDA built from the reconciliation components; calculation C04. |
| Severance, restructuring, and acquisition integration costs | 14.967 | US$m | Issuer add-back; classification restructuring and transaction costs; realisation status not stated; includes manufacturing footprint actions; annual report reconciliation. |
| Adjustments related to acquisitions and divestitures | 1.037 | US$m | Issuer add-back; classification transaction costs and fair-value adjustments; realisation status not stated; annual report reconciliation. |
| Loss related to revolver refinancing | 0.076 | US$m | Issuer add-back; classification other stated; realisation status not stated; annual report reconciliation. |
| EBITDA (Adjusted) FY2025 | 458.734 | US$m | Closing issuer Adjusted EBITDA, non-GAAP; no house acceptance of add-backs; calculation C09. |

The bridge reconciles arithmetically but does not establish that any add-back is non-recurring; the 2026 add-backs are far larger because of purchase accounting.
Basis: 10-K_2025-12-31_bdc-20251231.htm.jsonl, pages 40–41; calculation C09

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Historical credit snapshot of the audited FY2025 and FY2024 position | Ready | Reported EBITDA is derived from components; pre-dates the 2026 acquisition. | None needed for the audited years. |
| Leverage and cover at year-end 2025 | Ready with Limitations | Superseded by the 2026 debt; shown for trend only. | Read with the post-balance-sheet row. |
| Leverage at 2026-09-27 on trailing earnings | Ready with Limitations | One quarter of Ruckus in EBITDA against the full term loan; not pro forma. | Obtain a company-stated pro forma EBITDA or Ruckus carve-out results. |
| Pro forma leverage including a full year of Ruckus | Not Ready | No Ruckus EBITDA and no company pro forma net leverage in the sources. | Supply the acquisition announcement or management pro forma. |
| Interim interest cover on cash interest | Not Ready | The 2026 quarterly reports state no interest paid. | Supply interim cash interest paid. |
| Covenant headroom | Not Ready | Only a fixed charge coverage trigger on the Revolver is described; no Term Loan B covenants; never inferred. | Supply the executed credit agreements. |
| Debt stack and recovery ranking | Not Ready | Security and legal rank are not stated for Term Loan B, and security is not stated for the Revolver or the notes. | Supply the credit agreements and indentures. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 26 |
| Calculated | 14 |
| Assumption-Based | 1 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 4 |
| Fields present | 27 |
| Fields total | 27 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 10 |

## Calculations

Amounts are in millions of USD unless a row says thousands; each statement input is the thousands figure printed in the sources.

| ID | Calculation | Inputs | Formula | Result |
|---|---|---|---|---|
| C01 | Total Debt at 2026-09-27 | Current maturities 18500 + long-term debt 3031910 (USD thousands) | Sum | 3050410 thousand = 3050.410 US$m |
| C02 | Total Liabilities | FY2025: 697499 + 1285666 + 63598 + 98060 + 94372 + 40002; FY2024: 622704 + 1130101 + 63260 + 77333 + 100049 + 39755; Q3 2026: 951316 + 3031910 + 57779 + 274261 + 113690 + 146267 (USD thousands) | Sum of printed liability lines | 2279197; 2033202; 4575223 thousand; each equals total assets less total equity |
| C03 | Net debt | FY2024 1130.101 - 370.302; FY2025 1285.666 - 389.887; 2026-09-27 3050.410 - 380.706 | Gross debt less cash | 759.799; 895.779; 2669.704 US$m |
| C04 | EBITDA (Reported) by period | Net income + income tax + net interest + depreciation + amortization of intangibles + software amortization (USD thousands): FY2025 237522 + 29344 + 46355 + 63784 + 53356 + 12293; FY2024 198414 + 29528 + 38303 + 56383 + 48794 + 10564; 9M 2026 108212 + 14230 + 68860 + 54641 + 81018 + 10811; 9M 2025 169633 + 23372 + 33866 + 46406 + 40381 + 8628; Q3 2026 -11351 - 14183 + 41802 + 19174 + 54807 + 3938; Q3 2025 56690 + 7562 + 11562 + 16856 + 13636 + 3072 | Sum | 442654; 381986; 337772; 322286; 94187; 109378 thousand |
| C05 | Last-twelve-months to 2026-09-27 | EBITDA (Reported) 442.654 + 337.772 - 322.286; Adjusted EBITDA 458.734 + 435.104 - 336.672; revenue 2715.194 + 2412.486 - 1995.074 | Full year + current stub - prior-year stub | 458.140; 557.166; 3132.606 US$m |
| C06 | Free cash flow (issuer definition) | Operating cash flow + capex + disposal proceeds (USD thousands): FY2025 354864 - 136172 + 191; FY2024 352076 - 129100 + 113; 9M 2026 240200 - 132863 + 107; 9M 2025 194476 - 97034 + 168 | Sum | 218883; 223089; 107444; 97610 thousand; the 9M figures equal the issuer reconciliation |
| C07 | Term Loan B amortisation ladder | 0.25% x 1850.000 = 4.625 per quarter; four installments = 18.500 a year for 2027 to 2032; FY2033 balance 1850.000 - 4.625 - 6 x 18.500 = 1734.375 | Calculated from stated terms; installment dates not stated | 4.625; 18.500 a year; 1734.375 US$m |
| C08 | Principal to carrying value at 2026-09-27 | 398.930 + 341.940 + 512.910 + 1850.000 = 3103.780; 3103.780 - 53.370 = 3050.410; 0.000 + 398.930 + 341.940 + 512.910 + 1850.000 - 53.370 = 3050.410 | Sum and difference | 3103.780; 3050.410 US$m |
| C09 | Adjusted EBITDA bridge FY2025 | 442.654 + 14.967 + 1.037 + 0.076 | Sum | 458.734 US$m |
| C10 | Pro forma net debt and leverage for the Ruckus purchase | Net debt 895.779 + cash paid 1869.631 = 2765.410; 2765.410 / 442.654 | Standalone adjustment to year-end 2025 | 2765.410 US$m; 6.25x |
| C11 | Liquidity | FY2025 389.887 + 383.9 = 773.787; 2026-09-27 380.706 + 373.5 = 754.206 | Cash plus stated Revolver availability | 773.787; 754.206 US$m |
| C12 | Leverage and cover ratios | Each ratio is the numerator over the denominator stated in the calculation register, to two decimals, for FY2024, FY2025 and 2026-09-27 | Quotient | See the calculation register |
| C13 | Q3 2026 accrual coverage | Q3 reported EBITDA 94.187 / net interest expense 41.802; adjusted 171.137 / 41.802 | Quotient | 2.25x; 4.09x |
| C14 | Net debt change after year-end 2025 | Net debt 2669.704 - 895.779 | Difference | 1773.925 US$m |

## Gaps

- High: no company-stated pro forma net leverage and no Ruckus EBITDA are supplied, so leverage including a full year of Ruckus is not established and the 2026-09-27 trailing ratios overstate it; the action that closes it is the acquisition announcement or a management pro forma.
- High: interim cash interest paid is not stated in the 2026 quarterly reports, so interest cover on cash paid is not calculable for 2026-09-27; the action is the interim cash flow supplement or a quarterly interest paid disclosure.
- High: covenant terms of the Revolver beyond a fixed charge coverage trigger and all Term Loan B covenants are not supplied, so no headroom is stated and none is inferred; the action is the executed credit agreements.
- High: no facility has both a stated legal rank and a stated security, so the debt stack is not drawn; Term Loan B rank and security, the Revolver security and the security of the three euro note issues are left out and the action is the credit agreements and indentures.
- Medium: the Ruckus price is stated four ways and the purchase price allocation is preliminary with in-process research and development unvalued, so goodwill of 1000.819 million USD and intangibles of 1040.000 million USD may change; the action is the final allocation.
- Medium: the USD cost of repurchasing the 2027 notes is 537.3 million in the annual report and 535.9 million in the 2026 quarterly reports, and the net debt effect of the January and February 2026 refinancing is not stated, so those pro forma rows are not supplied; the action is the refinancing detail.
- Medium: Revolver availability of 373.5 million USD is not bridged to the 400.0 million USD commitment and 17.6 million USD of standby letters of credit, and 2024 availability is not stated; the action is the Revolver availability schedule.
- Medium: the balance sheets at 2026-03-29 and 2026-06-28 are in the supplied quarterly reports but were not extracted, and no 2025 interim balance sheet is in the sources, so the build-up of net debt before 2026-09-27 and interim comparatives are not shown; the action is to extract the two supplied balance sheets.
- Medium: segment disclosure stops after FY2025 because one reportable segment is reported from 2026-01-01, so segment trends cannot continue; the action is a segment bridge from the company.
- Low: the filing prints dashes for the loss on debt extinguishment in Q3 2026, the revolver refinancing loss in FY2024, the 2024 borrowing, repayment and debt issuance cost lines and the 2025 current maturities line; each is treated as missing, not zero.
- Low: nine-month 2026 cash-flow depreciation and amortization of 146.940 million USD differs from the reconciliation components of 146.470 million USD by 0.470 million USD, and the 2025 figures differ by 0.001 million USD; reported EBITDA uses the components.
- Low: capital expenditure is not split between maintenance and growth, noncontrolling interest and per-share data were not extracted, and Q1 and six-month 2026 columns were not extracted although the sources hold them.
- Low: lease liabilities, pensions and retiree medical sit outside Total Debt by method and are not added to leverage; operating lease liabilities of 133.727 million USD and finance lease liabilities of 8.525 million USD at 2026-09-27 are named for a reader who wants them.
- Low: management assessment of internal control excludes Ruckus for the third quarter, so the acquired balances rest on preliminary purchase accounting and unaudited interim reporting; no action closes this before the annual report.

## Next module

The orchestrator selects the next module.
