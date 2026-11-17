---
module_id: CP-1
issuer_id: oln
analysis_date: 2026-11-05
module_status: Complete
run_id: oln-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
---

# CP-1 Financial foundation: OLIN Corp (oln)

## Request

OLIN Corp (issuer id oln), as of 2026-11-05, pathway credit_snapshot. Scope: the historical financial foundation on the Olin Corporation consolidated perimeter for FY2025 and the nine months to 2026-09-30, with debt, liquidity and leverage built from the supplied filings and releases.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_oln-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 2025-12-31 | 2026-02-20 (signature date) | 4c4aa24234dd70c75f25e45010299b0359519fd53db6b33485bc189c79880655 | FY2025 statements, debt note, maturity ladder, segment note, cash interest paid |
| 10-Q_2026-03-31_oln-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 | 2026-05-08 (signature date) | b7b2893c43ac8c80dd177251279128741771bfa43d75cbf90bad3645179170d6 | Period coverage and subsequent-event scan |
| 10-Q_2026-06-30_oln-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 | 2026-07-31 (signature date) | 31cc1696caa1e392e8267ebed3744e51e1777dcbf99f80668497471e88c3bcb0 | Period coverage and subsequent-event scan |
| 10-Q_2026-09-30_oln-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 | 2026-10-30 (signature date) | fcb130292ef752affbb45743362d92ca38d4b7b812532fc678ec7413956a3cd3 | Nine-month and third quarter statements, balance sheet, debt note, liquidity, merger and ratings disclosure |
| EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl | Earnings press release for the first quarter of 2026, Exhibit 99.1 | 2026-05-07 | 9f1321ffd9728e7b42deb60dc916ea8598957e5a719c0c9054fc2f70430134aa | Period coverage |
| EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl | Earnings press release for the second quarter of 2026, Exhibit 99.1 | 2026-07-30 | 08a70fcc145c266c21d73e09e50eda1490a6994f07dbbc111206ffd51445010c | Period coverage and merger completion timing as first stated |
| EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Earnings press release for the third quarter of 2026, Exhibit 99.1 | 2026-10-29 | 27ebe9b3524b1cfc010f76a20b291e6a4f5bd41b4c9d2abf5a2ffd63c041424f | EBITDA reconciliation, adjusted EBITDA, net debt table, segment results |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 2efc90315daf063c5230f804960ffb95fe863f2a0fd201da2904aee2ef83b5fd | Source map, perimeter, gaps and the merger timing change |

## Findings

### Bottom line

Olin's net debt of USD 2,798.3 million is 7.76x trailing reported EBITDA but 5.21x on the issuer's adjusted measure, so creditors depend on covenant relief and liquidity until earnings recover.
Basis: calculation C4; calculation C8; calculation C5

The gap between the two measures is USD 175.8 million of add-backs over the last twelve months. Trailing interest cover is 2.12x on reported EBITDA. Liquidity of USD 1,244.4 million covers the next maturity, a USD 465.0 million receivables facility due in 2027, but covenant levels are not printed, so headroom is not established.
Basis: calculation C17; calculation C6; calculation C10; calculation C11; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–15

### Key findings

Reported EBITDA, the primary denominator, was USD 544.4 million in FY2025 and USD 360.8 million over the twelve months to 2026-09-30, because nine-month 2026 EBITDA of USD 387.2 million is far below the USD 570.8 million of the same months of 2025. Over the same span net debt rose from USD 2,659.7 million to USD 2,798.3 million, so net leverage on reported EBITDA moved from 4.89x to 7.76x and on adjusted EBITDA from 4.08x to 5.21x. The earnings fall is concentrated in Chlor Alkali Products and Vinyls, where nine-month segment earnings were USD 80.2 million against USD 270.8 million, helped down by the vinyl chloride monomer outage at Freeport and a smaller hydrogen tax credit. Debt rose because operating cash flow did not cover capital spending, dividends and a distribution to a minority partner, so the revolver and the receivables facility funded the gap.
Basis: calculation C4; calculation C7; calculation C8; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 2–3 and 8–11; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4

The issuer's adjusted EBITDA adds back USD 21.3 million of restructuring, USD 36.1 million of legacy litigation and USD 24.3 million of merger costs for the nine months of 2026. Restructuring charges appear in every period printed, so they behave as a recurring cost, while merger costs should stop at closing. A creditor who accepts the add-backs sees 5.21x; one who treats restructuring as recurring sees a higher figure, and the annual add-backs for FY2025 are not itemised in the supplied documents.
Basis: calculation C18; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 10

Cash interest paid was USD 129.4 million for the nine months of 2026 against USD 137.1 million a year earlier, and trailing cash interest is USD 170.2 million. Cover on reported EBITDA therefore fell from 3.06x in FY2025 to 2.12x, and on adjusted EBITDA from 3.66x to 3.15x. Falling interest cost does not offset the earnings decline, so cover weakens even as debt costs ease.
Basis: calculation C6; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 5

Operating cash flow was USD 69.7 million for the nine months of 2026 against USD 153.0 million, after a USD 133.4 million receivables build and a USD 81.0 million inventory build. Capital expenditure fell to USD 106.6 million from USD 163.5 million, so free cash flow was negative at USD 36.9 million, and the company still paid USD 68.3 million of dividends with no share repurchases. Net borrowing of USD 185.3 million funded the shortfall, so the dividend is financed with debt while leverage rises.
Basis: calculation C20; calculation C27; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 4–5

Liquidity at 2026-09-30 was cash of USD 214.8 million plus USD 1,029.6 million undrawn on the revolver, down from USD 1,367.2 million at the end of FY2025. The receivables facility had USD 465.0 million drawn and only USD 34.0 million of extra capacity limited by its borrowing base, so it cannot be counted as a reserve. No principal matures in the remainder of 2026 or in 2028; the first call on liquidity is the receivables facility in November 2027, followed by USD 669.3 million of notes in 2029 and USD 1,213.4 million in 2030, when the 2030 notes, the term loan and the revolver all fall due.
Basis: calculation C9; calculation C10; calculation C11; calculation C12; calculation C13; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12–15

The credit agreement carries a net leverage ceiling and an interest coverage floor, relaxed by the February 2026 amendment until the earlier of 2027-09-30 or the issuer's election, and the issuer states compliance at 2026-09-30 with no limit on borrowing. At FY2025 the leverage test limited additional borrowing to USD 825.3 million, and the ratio levels are not printed, so creditors cannot tell how close the 2026-09-30 position is to the test. The risk is the end of relief, which also releases the guarantees and liens that now secure the credit facility, while leverage on either measure remains above the FY2025 level.
Basis: calculation C28; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–14; 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 105–106

The Huntsman merger is not in these figures. A second credit facility amendment signed on 2026-10-27 provides a USD 2,500.0 million facility only on the closing date, so no net debt effect is recorded at 2026-09-30, and Huntsman's own debt and earnings are not in the supplied documents.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 8–9

### Contrary evidence and what would change the view

The strongest case for lower risk is that the issuer's own leverage was 4.1x at FY2025 and that fourth quarter adjusted EBITDA is guided to USD 80 million to USD 100 million, against USD 67.7 million implied for the fourth quarter of 2025, which would lift trailing adjusted EBITDA. Normal operations at the vinyl chloride monomer plant were restored in the third quarter, Epoxy turned to a small segment profit and Winchester earnings rose. If trailing adjusted EBITDA recovers toward the FY2025 level, leverage returns near 4x and the view eases; a further decline, or a covenant ceiling close to the current ratio, would harden it.
Basis: calculation C19; calculation C29; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 1–3 and 11

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 5.19 | 4.89 | x | Reported EBITDA of FY2025, derived from net income, net interest, tax and depreciation and amortization; debt at balance-sheet carrying value |
| 2026-09-30 | 8.35 | 7.76 | x | Reported EBITDA over the twelve months to 2026-09-30 (FY2025 plus nine months 2026 less nine months 2025); the issuer's own adjusted ratio is 5.2x |

No qualification.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2025 / 2025-12-31 | 3.06 | x | Reported EBITDA over cash interest paid of the year |
| 2026-09-30 | 2.12 | x | Reported EBITDA and cash interest paid, both over the twelve months to 2026-09-30 |

The interim row uses trailing figures built from the annual and nine-month statements, not a reported twelve-month figure.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 167.6 | 1,199.6 | US$m | Undrawn is the revolver of USD 1,200.0 million less USD 0.4 million of letters of credit, with no borrowing at year end |
| 2026-09-30 | 214.8 | 1,029.6 | US$m | Undrawn is the revolver of USD 1,200.0 million less USD 170.0 million drawn and USD 0.4 million of letters of credit; the receivables facility is excluded because its capacity is limited by a borrowing base |

The receivables facility had USD 34.0 million of additional capacity at 2026-09-30 and USD 105.5 million at the end of FY2025, which is not counted here.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 0 | US$m | The quarterly report prints no amount due within one year at 2026-09-30 |
| FY2027 | 465.0 | US$m | Receivables financing agreement maturing 2027-11-19 |
| FY2028 | 0 | US$m | No instrument has a stated maturity in 2028 |
| FY2029 | 669.3 | US$m | The 2029 senior notes |
| FY2030 | 1,213.4 | US$m | The 2030 senior notes of 515.3, the term loan of 528.1 and revolver borrowings of 170.0, the facility maturing 2030-03-14 |
| FY2031 | 683.0 | US$m | Plotted as the bucket for everything after 2030: the 2033 notes of 600.0 maturing 2033-04-01 and recovery zone bonds of 83.0 whose maturity year is not stated |

The ladder is built from the debt table and stated maturities because the quarterly report prints no maturity table, and the last row is the thereafter bucket, not a single year.

### Financials and credit metrics

| Metric | FY2025 | 9M 2026 | 9M 2025 | Q3 2026 | Q3 2025 |
|---|---|---|---|---|---|
| Sales (US$m) | 6,780.8 | 5,072.6 | 5,115.7 | 1,747.7 | 1,713.2 |
| EBITDA (Reported) (US$m) | 544.4 | 387.2 | 570.8 | 176.0 | 220.5 |
| EBITDA (Adjusted) (US$m) | 651.8 | 468.9 | 584.1 | 191.4 | 222.4 |
| Net income (loss) (US$m) | -101.1 | -81.9 | 42.1 | 14.4 | 43.7 |
| Net Cash from Operating Activities (US$m) | 474.2 | 69.7 | 153.0 | Not supplied: year-to-date cash flow only | Not supplied: year-to-date cash flow only |
| Net debt (US$m) | 2,659.7 | 2,798.3 | Not supplied: 2025-09-30 balance sheet not tabulated | 2,798.3 | Not supplied: 2025-09-30 balance sheet not tabulated |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 2,827.3 | 167.6 | 2,659.7 | US$m | Reported at carrying value; includes the receivables financing of 340.0 collateralized by trade receivables, net of 18.1 of deferred issuance costs; excludes operating lease liabilities presented on their own lines; principal total 2,845.4 |
| 2026-09-30 | 3,013.1 | 214.8 | 2,798.3 | US$m | Reported at carrying value; includes the receivables financing of 465.0 collateralized by trade receivables, net of 17.6 of deferred issuance costs; excludes operating lease liabilities of 72.7 current and 315.1 non-current presented on their own lines; principal total 3,030.7 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 3,030.7 | -17.6 | 3,013.1 | US$m | Principal is the sum of the debt table instruments before deferred debt issuance costs; the reconciling item is those costs of 17.6; no discount or premium is stated and no debt is left out of the ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Second amendment to the Senior Secured Credit Facility, creating a USD 2,500.0 million facility effective on the merger closing date | 2026-10-27 | Not supplied: the amendment takes effect only at closing and no net debt change is stated | Not supplied: no net debt change is stated | Not supplied: no net debt change is stated | US$m | Quarterly report for the third quarter of 2026; the new term loan of 750.0 and revolver of 1,750.0 replace existing facilities at closing, and Huntsman's own debt is not in the supplied documents, so the combined position is not reflected |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 6,780.8 | 651.8 | US$m | Revenue of FY2025; Adjusted EBITDA is issuer-adjusted, taken from the issuer's trailing twelve months figure at 2025-12-31 because no FY2025 reconciliation is supplied |
| 2026-09-30 | 6,737.7 | 536.6 | US$m | Twelve months to 2026-09-30; revenue is FY2025 plus nine months 2026 less nine months 2025; Adjusted EBITDA is issuer-adjusted and equals the issuer's stated trailing figure |

The two rows are both twelve-month periods; the first adjusted figure is the issuer's trailing figure at the year end, not an itemised annual reconciliation.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank | Not supplied: ranking is not stated | Not supplied: ranking is not stated | Not supplied: ranking is not stated | US$m | The credit facility is stated as secured by liens on substantially all personal property of Olin and its guarantor subsidiaries, and the receivables facility by trade receivables, but no source ranks the notes, loans or bonds against each other, and rank is not inferred from names |

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), nine months 2026 | 387.2 | US$m | Issuer-printed reconciliation: net income plus interest, tax, and depreciation and amortization |
| Restructuring charges | 21.3 | US$m | Issuer add-back, nine months 2026 |
| Legacy litigation matters | 36.1 | US$m | Issuer add-back, nine months 2026; realisation status not stated |
| Acquisition-related costs | 24.3 | US$m | Issuer add-back for merger advisory, legal and accounting fees, nine months 2026 |
| EBITDA (Adjusted), nine months 2026 | 468.9 | US$m | Issuer-adjusted EBITDA; environmental recoveries are printed as a dash for this period and are not a step |

The bridge covers nine months 2026 only, because the supplied documents give no itemised bridge for FY2025.

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_oln-20251231.htm.jsonl | Annual report | FY2025, FY2024, FY2023 | USD | millions | Olin Corporation consolidated | US GAAP | Tier 1 audited statements | FY2025 statements, debt note, ladder, segments | Prints no EBITDA or adjusted EBITDA |
| 10-Q_2026-03-31_oln-20260331.htm.jsonl | Quarterly report | Q1 2026 | USD | millions | Olin Corporation consolidated | US GAAP | Tier 2b unaudited without auditor review | Subsequent-event scan | Superseded by later quarters for balances |
| 10-Q_2026-06-30_oln-20260630.htm.jsonl | Quarterly report | Q2 2026, six months 2026 | USD | millions | Olin Corporation consolidated | US GAAP | Tier 2b unaudited without auditor review | Subsequent-event scan | Superseded by the third quarter for balances |
| 10-Q_2026-09-30_oln-20260930.htm.jsonl | Quarterly report | Q3 2026, nine months 2026 | USD | millions | Olin Corporation consolidated | US GAAP | Tier 2b unaudited without auditor review | Nine-month statements, balance sheet, debt, liquidity | Cash flow statement is nine months only |
| EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl | Earnings release | Q1 2026 | USD | millions | Olin Corporation consolidated | US GAAP with non-GAAP measures | Tier 2b unaudited without auditor review | Period coverage | Issuer-adjusted measures |
| EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl | Earnings release | Q2 2026 | USD | millions | Olin Corporation consolidated | US GAAP with non-GAAP measures | Tier 2b unaudited without auditor review | Period coverage, merger timing | Issuer-adjusted measures |
| EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Earnings release | Q3 2026, nine months 2026 | USD | millions | Olin Corporation consolidated | US GAAP with non-GAAP measures | Tier 2b unaudited without auditor review | EBITDA reconciliation, net debt, segments | Issuer-adjusted measures; no cash flow by quarter |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Olin Corporation | Issuer and registrant; borrower under the credit facility | 12-31 | USD | millions | Consolidated subsidiaries; certain domestic subsidiaries guarantee the Senior Secured Credit Facility | US GAAP | FY2023, FY2024, FY2025, Q1 2026, Q2 2026, Q3 2026, 9M 2026 and the 2025 comparatives |

Subsequent events: the second amendment to the credit facility was executed on 2026-10-27, after the balance-sheet date, and is kept out of the period figures.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Net interest expense for FY2025 | 10-K_2025-12-31_oln-20251231.htm.jsonl | Presentation | Interest expense -188.3 and interest income 4.4 | -183.9 | The interim statements print interest expense net, so the annual figure is netted to match | FY2025 |
| EBITDA (Reported) for FY2025 | 10-K_2025-12-31_oln-20251231.htm.jsonl | Derivation | Net loss -101.1, net interest 183.9, tax -60.0, depreciation and amortization 521.6 | 544.4 | The annual report prints no EBITDA; the issuer's own definition for the interim periods is applied | FY2025 |
| Corporate and other pre-tax result for interim periods | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Aggregation | Seven printed corporate lines | One row per period | Printed corporate lines are summed so that segments plus corporate equal income before taxes | 9M 2026, 9M 2025, Q3 2026, Q3 2025 |
| Trailing twelve months at 2026-09-30 | 10-Q_2026-09-30_oln-20260930.htm.jsonl | Derivation | FY2025, nine months 2026 and nine months 2025 | One twelve-month figure per metric | Latest full year plus current stub less prior-year stub | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2025 | 9M 2026 | 9M 2025 | Q3 2026 | Q3 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Sales | 6,780.8 | 5,072.6 | 5,115.7 | 1,747.7 | 1,713.2 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Cost of goods sold | 6,279.3 | 4,653.9 | 4,645.5 | 1,575.0 | 1,529.8 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Selling and administrative | 463.3 | 346.1 | 294.3 | 98.4 | 98.1 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Restructuring charges | 33.4 | 21.3 | 14.3 | 1.7 | 2.9 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Acquisition-related costs | Not supplied: no such line in the annual statement | 24.3 | Not supplied: printed as a dash | 13.7 | Not supplied: printed as a dash | USD millions | Reported | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Other operating income | 0.5 | 0.4 | 0.2 | 0.3 | 0.4 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Operating income | 5.3 | 27.4 | 161.8 | 59.2 | 82.8 | USD millions | Reported; EBIT | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Losses of non-consolidated affiliates | -3.1 | -3.3 | -2.4 | -0.9 | -1.0 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Interest expense | -188.3 | Not supplied: interim statements print interest net only | Not supplied: interim statements print interest net only | Not supplied: interim statements print interest net only | Not supplied: interim statements print interest net only | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81 |
| Interest income | 4.4 | Not supplied: interim statements print interest net only | Not supplied: interim statements print interest net only | Not supplied: interim statements print interest net only | Not supplied: interim statements print interest net only | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81 |
| Interest expense, net | -183.9 | -130.9 | -138.1 | -44.5 | -45.2 | USD millions | FY2025 calculated (calculation C1); interim reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Non-operating pension income | 20.6 | 9.4 | 15.5 | 3.3 | 4.9 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Income (loss) before taxes | -161.1 | -97.4 | 36.8 | 17.1 | 41.5 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Income tax provision (benefit) | -60.0 | -15.5 | -5.3 | 2.7 | -2.2 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Net income (loss) | -101.1 | -81.9 | 42.1 | 14.4 | 43.7 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Net income (loss) attributable to Olin Corporation | -100.5 | -81.9 | 42.9 | 14.4 | 42.8 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3 |
| Depreciation and amortization | 521.6 | 353.7 | 395.9 | 114.4 | 133.8 | USD millions | Reported; third quarter from the earnings reconciliation | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 10 |
| Stock-based compensation | 20.7 | 16.8 | 15.6 | Not supplied: cash flow statement is year-to-date only | Not supplied: cash flow statement is year-to-date only | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| EBITDA (Reported) | 544.4 | 387.2 | 570.8 | 176.0 | 220.5 | USD millions | Net income plus net interest, tax, and depreciation and amortization; FY2025 calculated (calculation C2), other periods printed by the issuer | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 10 |
| EBITDA (Adjusted) | 651.8 | 468.9 | 584.1 | 191.4 | 222.4 | USD millions | Issuer-adjusted: adds back restructuring, legacy litigation, acquisition-related costs and other items it calls non-recurring; FY2025 is the issuer's trailing figure at 2025-12-31 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 10–11 |
| Sales: Chlor Alkali Products and Vinyls | 3,684.4 | 2,427.2 | 2,828.0 | 850.8 | 924.0 | USD millions | Segment, reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 129; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| Sales: Epoxy | 1,371.8 | 1,189.9 | 1,012.5 | 412.2 | 349.6 | USD millions | Segment, reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 129; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| Sales: Winchester | 1,724.6 | 1,455.5 | 1,275.2 | 484.7 | 439.6 | USD millions | Segment, reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 129; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| Income (loss) before taxes: Chlor Alkali Products and Vinyls | 181.1 | 80.2 | 270.8 | 71.3 | 127.6 | USD millions | Segment earnings, reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 129; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| Income (loss) before taxes: Epoxy | -103.5 | 13.7 | -84.3 | 0.6 | -32.2 | USD millions | Segment earnings, reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 129; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| Income (loss) before taxes: Winchester | 67.7 | 77.1 | 67.1 | 33.8 | 19.3 | USD millions | Segment earnings, reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 129; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| Income (loss) before taxes: Corporate/Other | -306.4 | -268.4 | -216.8 | -88.6 | -73.2 | USD millions | FY2025 reported; interim periods calculated as the sum of the printed corporate lines (calculations C23 to C26) | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 129; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |

### T4.5 Cash flow statement

| Line item | FY2025 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Net (loss) income | -101.1 | -81.9 | 42.1 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Depreciation and amortization | 521.6 | 353.7 | 395.9 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Stock-based compensation | 20.7 | 16.8 | 15.6 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Deferred income taxes | -113.3 | -5.6 | -54.1 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Receivables | 123.7 | -133.4 | -33.1 | USD millions | Reported change in assets and liabilities | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Income taxes receivable/payable | -179.8 | 3.6 | -196.0 | USD millions | Reported change in assets and liabilities | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Inventories | 80.0 | -81.0 | -100.1 | USD millions | Reported change in assets and liabilities | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Accounts payable and accrued liabilities | 128.0 | 5.6 | 71.7 | USD millions | Reported change in assets and liabilities | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Net Cash from Operating Activities | 474.2 | 69.7 | 153.0 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Capital expenditures | -226.3 | -106.6 | -163.5 | USD millions | Reported; total capex, maintenance and growth split not supplied | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Business acquired in purchase transaction, net of cash acquired | -55.8 | Not supplied: printed as a dash | -55.8 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Net Cash from Investing Activities | -319.6 | -109.7 | -225.6 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Long-term debt borrowings | 2,755.0 | 689.6 | 2,485.0 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Long-term debt repayments | -2,766.2 | -504.3 | -2,329.2 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Common stock repurchased and retired | -50.5 | Not supplied: printed as a dash | -40.4 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Dividends paid | -91.6 | -68.3 | -68.8 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Distributions to noncontrolling interests | Not supplied: no such line in the annual statement | -31.3 | Not supplied: printed as a dash | USD millions | Reported | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Debt issuance costs | -12.0 | -2.1 | -12.0 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Net Cash from Financing Activities | -163.0 | 86.6 | 36.7 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| FX Effect on Cash | 0.4 | 0.6 | 0.6 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| Net Cash Change | -8.0 | 47.2 | -35.3 | USD millions | Reported; operating plus investing plus financing plus the FX effect | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 5 |
| Opening Cash | 175.6 | 167.6 | 175.6 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 5 |
| Closing Cash | 167.6 | 214.8 | 140.3 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 5 |
| Cash Interest Paid | 177.9 | 129.4 | 137.1 | USD millions | Reported as interest, net, in operating activities | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 5 |
| Income taxes paid, net of refunds | 167.1 | 4.6 | 168.3 | USD millions | Reported cash taxes | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 5 |

### T4.6 Balance sheet

| Line item | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|
| Cash & Equivalents | 167.6 | 214.8 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Receivables, net | 844.5 | 973.4 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Income taxes receivable | 66.6 | 50.5 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Inventories, net | 784.5 | 862.2 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Other current assets | 107.9 | 97.9 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Total current assets | 1,971.1 | 2,198.8 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Property, plant and equipment, net | 2,196.9 | 2,053.2 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Operating lease assets, net | 298.6 | 375.5 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Deferred income taxes (asset) | 47.2 | 45.7 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Other assets | 1,210.0 | 1,158.5 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Intangible assets, net | 174.4 | 146.4 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Goodwill | 1,427.6 | 1,427.6 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Total Assets | 7,325.8 | 7,405.7 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Current installments of long-term debt | 109.7 | Not supplied: printed as a dash | USD millions | Reported; the debt note also prints no amount due within one year at 2026-09-30 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Accounts payable | 806.1 | 889.8 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Income taxes payable | 23.9 | 11.9 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Current operating lease liabilities | 59.7 | 72.7 | USD millions | Reported; not added to Total Debt | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Accrued liabilities | 630.1 | 537.4 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Total current liabilities | 1,629.5 | 1,511.8 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Long-term debt | 2,717.6 | 3,013.1 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Operating lease liabilities | 252.5 | 315.1 | USD millions | Reported; not added to Total Debt | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Accrued pension liability | 200.9 | 196.5 | USD millions | Reported; kept apart from financial debt | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Deferred income taxes (liability) | 317.6 | 313.6 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Other liabilities | 337.1 | 336.5 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Total Liabilities | 5,455.2 | 5,686.6 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Common stock | 113.6 | 114.0 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Accumulated other comprehensive loss | -414.5 | -402.5 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Retained earnings | 2,139.8 | 1,989.6 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Olin Corporation's shareholders' equity | 1,838.9 | 1,718.7 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Noncontrolling interests | 31.7 | 0.4 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Total Equity | 1,870.6 | 1,719.1 | USD millions | Reported | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Total Debt | 2,827.3 | 3,013.1 | USD millions | Carrying value, current plus long-term, net of deferred issuance costs; includes the receivables financing | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM to 2026-09-30 | USD 6,780.8m | USD 5,072.6m | USD 5,115.7m | USD 6,737.7m | Calculated | 10-K_2025-12-31_oln-20251231.htm.jsonl; 10-Q_2026-09-30_oln-20260930.htm.jsonl | Comparable stubs of nine months each |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 544.4m | USD 387.2m | USD 570.8m | USD 360.8m | Calculated | 10-K_2025-12-31_oln-20251231.htm.jsonl; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | The full-year component is itself calculated from the annual statement |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 651.8m | USD 468.9m | USD 584.1m | USD 536.6m | Calculated | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Equals the issuer's stated trailing figure; the full-year component is the issuer's trailing figure at 2025-12-31 |
| Cash Interest Paid | LTM to 2026-09-30 | USD 177.9m | USD 129.4m | USD 137.1m | USD 170.2m | Calculated | 10-K_2025-12-31_oln-20251231.htm.jsonl; 10-Q_2026-09-30_oln-20260930.htm.jsonl | Interest, net, paid in operating activities |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 2,827.3 | Net debt data | 544.4 | T4.4 Income statement | FY2025 / 2025-12-31 | USD | US$m | 5.19 | Calculated | Tier 1 for debt, derived EBITDA | EBITDA derived from the annual statement; debt is carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,659.7 | Net debt data | 544.4 | T4.4 Income statement | FY2025 / 2025-12-31 | USD | US$m | 4.89 | Calculated | Tier 1 for debt, derived EBITDA | EBITDA derived from the annual statement |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 544.4 | T4.4 Income statement | 177.9 | T4.5 Cash flow statement | FY2025 / 2025-12-31 | USD | US$m | 3.06 | Calculated | Tier 1 for cash interest, derived EBITDA | Cash interest is interest, net, paid |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 2,827.3 | Net debt data | 651.8 | T4.4 Income statement | FY2025 / 2025-12-31 | USD | US$m | 4.34 | Calculated | Tier 2b for the adjusted measure | Adjusted EBITDA is the issuer's trailing figure at the year end |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,659.7 | Net debt data | 651.8 | T4.4 Income statement | FY2025 / 2025-12-31 | USD | US$m | 4.08 | Calculated | Tier 2b for the adjusted measure | The issuer prints 4.1x on the same basis |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 651.8 | T4.4 Income statement | 177.9 | T4.5 Cash flow statement | FY2025 / 2025-12-31 | USD | US$m | 3.66 | Calculated | Tier 2b for the adjusted measure | Adjusted EBITDA is the issuer's trailing figure at the year end |
| Total debt / EBITDA | Total Debt / EBITDA (Reported), trailing | 3,013.1 | Net debt data | 360.8 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 8.35 | Calculated | Derived from Tier 1 and Tier 2b | Trailing EBITDA built from annual and nine-month figures |
| Net debt / EBITDA | Net debt / EBITDA (Reported), trailing | 2,798.3 | Net debt data | 360.8 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 7.76 | Calculated | Derived from Tier 1 and Tier 2b | Trailing EBITDA built from annual and nine-month figures |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid, trailing | 360.8 | T4.8 Constructed period register | 170.2 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 2.12 | Calculated | Derived from Tier 1 and Tier 2b | Both operands are trailing twelve months |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted), trailing | 3,013.1 | Net debt data | 536.6 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 5.62 | Calculated | Tier 2b for the adjusted measure | Equals the issuer's stated trailing adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted), trailing | 2,798.3 | Net debt data | 536.6 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 5.21 | Calculated | Tier 2b for the adjusted measure | The issuer prints 5.2x on the same basis |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid, trailing | 536.6 | T4.8 Constructed period register | 170.2 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 3.15 | Calculated | Tier 2b for the adjusted measure | Both operands are trailing twelve months |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2025 | 9M 2026 | 9M 2025 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|
| Margin | EBITDA (Reported) margin, % | 8.03 | 7.63 | 11.16 | Down | Reported EBITDA over sales; the nine-month 2026 margin is below FY2025 and well below the same months of 2025 |
| Margin | EBITDA (Adjusted) margin, % | 9.61 | 9.24 | 11.42 | Down | Issuer-adjusted EBITDA over sales |
| Growth | Sales growth against the prior comparable period, % | 3.68 | -0.84 | Not supplied: the 2024 nine-month figure is not in the supplied documents | Down | FY2025 against FY2024 of 6,540.1; nine months 2026 against nine months 2025 |
| Cash flow | Free cash flow (operating cash flow less capital expenditures), US$m | 247.9 | -36.9 | -10.5 | Down | Before dividends; working capital is included |
| Cash flow | Capital expenditures over sales, % | 3.34 | 2.10 | 3.20 | Down | Total capex only; maintenance and growth split not supplied |
| Leverage | Net debt / adjusted EBITDA as the issuer prints it, x | 4.1 | 5.2 | 3.7 | Up | Columns are the balance-sheet dates 2025-12-31, 2026-09-30 and 2025-09-30; the issuer's trailing adjusted EBITDA was 651.8, 536.6 and 777.5 |
| Capital structure | Total debt to total capitalization as the issuer prints it, % | 60.2 | 63.7 | Not supplied: the 2025-09-30 figure is not stated | Up | Issuer-reported in the liquidity discussion |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Net income plus net interest, tax, and depreciation and amortization, unadjusted | Adjusted EBITDA adds restructuring, legacy litigation, acquisition-related costs and other non-recurring items | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 10–11 | LTM 2026-09-30; FY2025 | Net leverage 7.76x reported against 5.21x adjusted; add-backs of 175.8 over twelve months | CP-1, CP-2, CP-2D | Both shown; reported is the primary denominator and adjusted is labelled beside it |
| Total debt | Balance-sheet carrying value, current plus long-term | Issuer net debt uses the same carrying value; principal is 3,030.7 against carrying value 3,013.1 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12–13 | 2026-09-30 | Difference of 17.6 of deferred issuance costs | CP-1, CP-2D | Carrying value used; principal logged beside it |
| Net leverage covenant | Not applicable: covenant level and definition not supplied | Covenant debt is net of unrestricted cash and excludes receivables financing up to 425.0; EBITDA is adjusted by the credit agreement | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 14 | 2026-09-30 | The covenant ratio cannot be computed from the supplied documents | CP-4 | No covenant capacity is inferred |
| Net interest | Net of interest income | Annual statement prints interest expense and interest income separately; interim statements print net | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81 | FY2025 | 4.4 of interest income | CP-1 | FY2025 netted to 183.9 to match the interim basis |
| FY2025 adjusted EBITDA | Itemised annual reconciliation | The issuer prints only a trailing twelve months figure of 651.8 at 2025-12-31 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 | FY2025 | Add-backs of 107.4 over reported EBITDA cannot be itemised | CP-1, CP-1D | Used as the FY2025 adjusted figure and labelled |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Historical statements, debt, cash and leverage | Ready with Limitations | FY2025 adjusted add-backs, covenant levels, instrument ranking and quarterly cash flow are not supplied | Supply the issuer's fourth quarter 2025 release and the executed credit agreement |
| Business and governance facts | Ready with Limitations | Reads the same statements; merger agreement and Huntsman financials are not supplied | Supply the merger agreement if combined-company work is wanted |
| Fundamental credit assessment | Ready with Limitations | Leverage is shown on reported and adjusted EBITDA and the two differ widely; covenant headroom is not established | Carry both measures and the covenant gap into the assessment |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 5.625% senior notes due 2029 | Senior notes | Not supplied: instrument carrying values are not disclosed | 669.3 | Not applicable | Not applicable | Not supplied: no source states security | Not supplied: no source states rank | USD | 669.3 | Not applicable | 5.625% | Fixed | Not applicable | Not applicable | Not applicable | 2029 | 0 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 108 |
| 5.00% senior notes due 2030 | Senior notes | Not supplied: instrument carrying values are not disclosed | 515.3 | Not applicable | Not applicable | Not supplied: no source states security | Not supplied: no source states rank | USD | 515.3 | Not applicable | 5.00% | Fixed | Not applicable | Not applicable | Not applicable | 2030 | 0 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 108 |
| 6.625% senior notes due 2033 | Senior notes | Not supplied: instrument carrying values are not disclosed | 600.0 | Not applicable | Not applicable | Not supplied: no source states security | Not supplied: no source states rank | USD | 600.0 | Not applicable | 6.625% | Fixed | Not applicable | Not applicable | Not applicable | 2033-04-01 | 0 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12 and 14 |
| Term Loan Facilities (Secured Term Loan Facility) | Term loan | Not supplied: instrument carrying values are not disclosed | 528.1 | 528.1 | Not applicable | Secured by liens on substantially all personal property of Olin and subsidiary guarantors until the covenant relief period ends | Not supplied: no source states rank | USD | 528.1 | Not applicable | Floating rate; pricing grid on net leverage | Floating | Not supplied: reference rate not stated | Not supplied: margin grid not stated | Not supplied: floor not stated | 2030-03-14 | 0 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12–14 |
| Revolving Credit Facilities (Senior Secured Revolving Credit Facility) | Revolving credit facility | Not supplied: instrument carrying values are not disclosed | 170.0 | 170.0 | 1,200.0 | Secured by liens on substantially all personal property of Olin and subsidiary guarantors until the covenant relief period ends | Not supplied: no source states rank | USD | 170.0 | Not applicable | Floating rate; pricing grid on net leverage | Floating | Not supplied: reference rate not stated | Not supplied: margin grid not stated | Not supplied: floor not stated | 2030-03-14 | 0 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12–14 |
| 2024 Receivables Financing Agreement | Receivables financing | Not supplied: instrument carrying values are not disclosed | 465.0 | 465.0 | 500.0 | Collateralized by trade receivables; 662.2 pledged | Not supplied: no source states rank | USD | 465.0 | Not applicable | Not supplied: rate not stated | Not supplied: rate type not stated | Not supplied: reference rate not stated | Not supplied: spread not stated | Not supplied: floor not stated | 2027-11-19 | Not supplied: scheduled amortisation not stated | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12 and 14–15 |
| Recovery zone bonds | Tax-exempt bonds | Not supplied: instrument carrying values are not disclosed | 83.0 | Not applicable | Not applicable | Not supplied: no source states security | Not supplied: no source states rank | USD | 83.0 | Not applicable | Variable rate; 4.938% at 2025-12-31 | Floating | Not supplied: reference rate not stated | Not supplied: spread not stated | Not supplied: floor not stated | Not supplied: maturity year not stated | Not supplied: scheduled amortisation not stated | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 104 |
| Financing cost adjustment | Deferred debt issuance costs | -17.6 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -17.6 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 24 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 6 |
| Fields present | 20 |
| Fields total | 22 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 9 |

## Calculations

| Calculation ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | FY2025 net interest expense, USD millions | 188.3 − 4.4 | 183.9 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81 |
| C2 | FY2025 EBITDA (Reported), USD millions | −101.1 + 183.9 + (−60.0) + 521.6 | 544.4 | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 81–82 |
| C3 | Trailing twelve months revenue to 2026-09-30, USD millions | 6,780.8 + 5,072.6 − 5,115.7 | 6,737.7 | T4.8 Constructed period register |
| C4 | Trailing twelve months EBITDA (Reported) to 2026-09-30, USD millions | 544.4 + 387.2 − 570.8 | 360.8 | T4.8 Constructed period register |
| C5 | Trailing twelve months EBITDA (Adjusted) to 2026-09-30, USD millions | 651.8 + 468.9 − 584.1 | 536.6, equal to the issuer's stated 536.6 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 |
| C6 | Trailing twelve months cash interest paid to 2026-09-30, USD millions | 177.9 + 129.4 − 137.1 | 170.2 | T4.8 Constructed period register |
| C7 | Net debt at 2025-12-31, USD millions | 2,827.3 − 167.6 | 2,659.7, equal to the issuer's 2,659.7 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 |
| C8 | Net debt at 2026-09-30, USD millions | 3,013.1 − 214.8 | 2,798.3, equal to the issuer's 2,798.3 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 |
| C9 | Undrawn revolver at 2025-12-31, USD millions; revolver borrowing at year end is 170.0 + 790.0 − 960.0 = 0.0 | 1,200.0 − 0.0 − 0.4 | 1,199.6 | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 104 and 108 |
| C10 | Undrawn revolver at 2026-09-30, USD millions | 1,200.0 − 170.0 − 0.4 | 1,029.6, equal to the issuer's 1,029.6 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 |
| C11 | Cash plus undrawn revolver at 2026-09-30, USD millions | 214.8 + 1,029.6 | 1,244.4 | Chart data: liquidity |
| C12 | Cash plus undrawn revolver at 2025-12-31, USD millions | 167.6 + 1,199.6 | 1,367.2 | Chart data: liquidity |
| C13 | Maturity bucket for FY2030, USD millions | 515.3 + 528.1 + 170.0 | 1,213.4 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 |
| C14 | Maturity bucket after 2030, USD millions | 600.0 + 83.0 | 683.0, equal to the annual report's thereafter bucket of 683.0 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 108 |
| C15 | Contractual principal at 2026-09-30, USD millions | 0 + 465.0 + 0 + 669.3 + 1,213.4 + 683.0 | 3,030.7 | Chart data: debt maturities |
| C16 | Reconciling items and carrying value at 2026-09-30, USD millions | 3,030.7 + (−17.6) | 3,013.1, equal to the printed total debt of 3,013.1 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 |
| C17 | Trailing add-backs between adjusted and reported EBITDA, USD millions | 536.6 − 360.8 | 175.8 | Calculations C4 and C5 |
| C18 | Nine-month 2026 EBITDA bridge, USD millions | 387.2 + 21.3 + 36.1 + 24.3 | 468.9, equal to the issuer's 468.9 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 10 |
| C19 | Implied fourth quarter 2025 adjusted EBITDA, USD millions | 651.8 − 584.1 | 67.7 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 |
| C20 | Free cash flow, USD millions: FY2025, nine months 2026, nine months 2025 | 474.2 − 226.3; 69.7 − 106.6; 153.0 − 163.5 | 247.9; −36.9; −10.5 | T4.5 Cash flow statement |
| C21 | Segment sales against total sales, USD millions: FY2025, nine months 2026, nine months 2025 | 3,684.4 + 1,371.8 + 1,724.6; 2,427.2 + 1,189.9 + 1,455.5; 2,828.0 + 1,012.5 + 1,275.2 | 6,780.8; 5,072.6; 5,115.7, each equal to reported sales | T4.4 Income statement |
| C22 | Segment sales against total sales, USD millions: third quarter 2026 and third quarter 2025 | 850.8 + 412.2 + 484.7; 924.0 + 349.6 + 439.6 | 1,747.7; 1,713.2, each equal to reported sales | T4.4 Income statement |
| C23 | Corporate/Other pre-tax result, nine months 2026, USD millions | −16.5 − 85.2 − 21.3 − 24.3 + 0.4 − 130.9 + 9.4 | −268.4, equal to −97.4 less segment earnings of 171.0 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C24 | Corporate/Other pre-tax result, nine months 2025, USD millions | −14.3 − 65.8 − 14.3 + 0.2 − 138.1 + 15.5 | −216.8, equal to 36.8 less segment earnings of 253.6 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C25 | Corporate/Other pre-tax result, third quarter 2026, USD millions | −5.6 − 26.7 − 1.7 − 13.7 + 0.3 − 44.5 + 3.3 | −88.6, equal to 17.1 less segment earnings of 105.7 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C26 | Corporate/Other pre-tax result, third quarter 2025, USD millions | −4.5 − 25.9 − 2.9 + 0.4 − 45.2 + 4.9 | −73.2, equal to 41.5 less segment earnings of 114.7 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C27 | Net long-term debt borrowing, nine months 2026, USD millions | 689.6 − 504.3 | 185.3, equal to the issuer's 185.3 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 15 |
| C28 | Maximum additional borrowing under the leverage covenant at 2025-12-31, USD millions | Stated by the issuer, not calculated | 825.3 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 105 |
| C29 | Fourth quarter 2026 adjusted EBITDA guidance, USD millions | Stated by the issuer, not calculated | USD 80 million to USD 100 million | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 2 |

## Gaps

- High: Covenant levels are not printed in any of the four filings, so headroom under the net leverage and interest coverage tests cannot be calculated for 2026-09-30; closing it needs the executed credit agreement and the February 2026 amendment.
- Medium: The legal rank of every notes, loan and bond instrument is not stated in the supplied documents, so the debt stack carries no ranked rows and instrument security and ranking are marked as not established; the executed indentures and credit agreement would close it.
- Medium: The annual add-backs behind FY2025 adjusted EBITDA are not itemised; only the trailing twelve months figure of USD 651.8 million at 2025-12-31 is printed, so the FY2025 gap of USD 107.4 million between adjusted and reported EBITDA cannot be explained; the fourth quarter 2025 earnings release would close it.
- Medium: The statements print the nine-month cash flow only, so third quarter cash flow, stock-based compensation and cash interest are not established by quarter.
- Low: Interest expense and interest income are not printed separately in the interim statements, so only the net figure is shown for those periods.
- Low: Printed dashes for acquisitions in nine months 2026, share repurchases in nine months 2026, noncontrolling distributions in FY2025 and nine months 2025, and current debt installments at 2026-09-30 are treated as not supplied rather than as zero; the debt note confirms no amount is due within one year.
- Low: Gross profit is not printed and is not derived; capital expenditure is shown in total with no maintenance and growth split.
- Low: The maturity year of the recovery zone bonds, the reference rate and margins of the variable-rate debt, and the amortisation of the receivables facility are not stated.
- Low: No debt maturity table is printed at 2026-09-30, so the ladder is built from the debt table and stated facility maturities.
- Low: The issuer's quoted liquidity of approximately USD 1.3 billion is not itemised, so how much of it is the receivables facility is not established.
- Low: Huntsman's debt, earnings and the combined capital structure are not in the supplied documents, so no pro forma net debt for the merger is established.

## Next module

The orchestrator selects the next module.
