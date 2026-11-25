## Request
Financial foundation for Element Solutions Inc (issuer id esi) as of 2026-11-05 under the credit snapshot pathway: normalised statements, debt, leverage, cover and liquidity from the seven supplied filings and releases, consolidated group, USD millions. Source readiness (CP-0) was supplied and is relied on for the source inventory and conflicts.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_esi-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 (audited, with auditor's report) | 2026-02-18 | e419be4a34b86cf3946781c81c9cf5167d1ce55ea947acb2e97a22e3ec33fbdc | Audited FY2025 and FY2024 statements, debt, lease and pension notes, segment note, Adjusted EBITDA reconciliation and subsequent events. |
| 10-Q_2026-03-31_esi-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 (unaudited) | 2026-04-29 | 71ffb0652af7e069b88fd66093decc7d627d9409b00bd185ac2a68db72c238da | Revolver borrowings at 2026-03-31 and acquisition amounts; no figure of the 2026 statement columns is taken from it. |
| 10-Q_2026-06-30_esi-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 (unaudited) | 2026-07-28 | 9e356702c38010063835ed61e96bcc033abb0f0a3a4b5a9a1845d764f0bcd2b7 | Pending Solstice merger terms, superseded by the third-quarter report. |
| 10-Q_2026-09-30_esi-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 (unaudited) | 2026-10-22 | 1efce58ae7d1707b81e096f97ecf01dbf0104d1e81a25b95db794dfd861b04fe | Q3 and nine-month 2026 statements, debt note, covenant description, liquidity, segment note, Adjusted EBITDA reconciliation, subsequent events. |
| EX-99.1_2026-04-28_aearningsreleaseex99120263.htm.jsonl | Earnings release, Exhibit 99.1, first quarter 2026 | 2026-04-28 | cb75b2ab3988a8e0ad3f68546b2df2a55172fd4900de7f7f14ec3436aa37dbbf | Cross-check of first-quarter acquisition price and interest paid. |
| EX-99.1_2026-07-27_aearningsreleaseex99120266.htm.jsonl | Earnings release, Exhibit 99.1, second quarter 2026 | 2026-07-27 | c0a4eea4343eb189f65a5cb896e49cd67b1e5c372bfce79bfb18a89241f92f7e | Cross-check of six-month interest paid; merger context. |
| EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl | Earnings release, Exhibit 99.1, third quarter 2026 | 2026-10-21 | b36d51c2a20c56990c8361f520b238bac0611bf5a7dab66ba03c7922169d0001 | Issuer capital structure table (principal, maturity dates), interest and taxes paid, quarterly cash flows, segment margins and non-GAAP reconciliations. |

| Supplied handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 726e999a66f18b2ca5b18872e841ef560671f56788a1cba673297f6aff9398f2 | Source inventory, authority tiers, acquisition price conflict and the list of unsupplied documents. |

Document dates for the annual report and the quarterly reports are the signature dates printed in each report; the annual report's filing date is also stated in the third quarterly report. No supplied document is dated after 2026-11-05.

## Findings

### Bottom line
Element Solutions' debt-funded 2026 acquisitions lifted net debt to USD 1,857.2 million at 2026-09-30, 3.29x last-twelve-months reported EBITDA against 2.13x at the 2025 year-end, but interest cover of 6.59x and USD 478.0 million of undrawn revolver keep creditor protection adequate.
Basis: calculation C03; calculation C05; calculation C11; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15–18

The year-end net leverage of 2.13x becomes 3.96x pro forma for the two acquisitions closed in January and February 2026, and the 2026-09-30 ratio still overstates the burden because acquired earnings enter only from closing; on issuer-adjusted EBITDA net leverage is 2.76x. The first large maturity is the USD 800.0 million senior notes due 2028-09-01, and covenant headroom cannot be measured because the covenant EBITDA definition is not supplied.
Basis: calculation C06; calculation C12; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 16–18

### Leverage and coverage
Net debt at carrying value rose by USD 857.8 million between the 2025 year-end and 2026-09-30 because USD 865.8 million of payments for the EFC and Micromax acquisitions, closed in January and February 2026, were funded by USD 449.4 million of add-on term loan proceeds, USD 15.0 million of net revolver borrowings and a USD 401.6 million fall in cash. Net leverage on reported EBITDA moved from 2.13x (3.96x pro forma for the two acquisitions) to 3.29x and total leverage from 3.46x to 3.69x, after a fall from 2.92x in 2024.
Basis: calculation C02; calculation C03; calculation C11; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 46

The increase is overstated as a measure of risk because last-twelve-months reported EBITDA of USD 564.8 million holds the acquired earnings only from 2026-01-02 and 2026-02-02, while the debt is counted in full; on issuer-adjusted EBITDA of USD 673.1 million the same net debt is 2.76x and total debt is 3.09x. The adjusted figure is the contrary evidence, but it adds back USD 52.6 million of acquisition and integration costs in nine months 2026 and added back USD 37.1 million of executive share grants in FY2025, so it cannot be treated as free of one-offs.
Basis: calculation C05; calculation C06; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124

Interest cover is the offsetting strength: reported EBITDA covers cash interest 6.59x on a last-twelve-months basis (7.85x on adjusted EBITDA), against 6.85x in FY2025, because about 94% of debt is fixed through swaps and the senior notes due 2028 carry a fixed coupon. Cash interest rose USD 17.1 million in nine months 2026 to USD 76.2 million, so run-rate interest sits above the last-twelve-months figure until a full year of interest on the add-on term loans is paid.
Basis: calculation C07; calculation C11; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9

### Cash flow quality
Operating cash flow was USD 192.2 million in nine months 2026 against USD 198.7 million a year earlier even though reported EBITDA rose from USD 389.1 million to USD 483.7 million, because receivables absorbed USD 137.3 million and inventories USD 80.7 million as pass-through metal prices rose. After capital expenditure of USD 83.4 million, operating cash flow less capital expenditure was USD 108.8 million, which only just covered dividends of USD 59.3 million and buybacks of USD 37.7 million, together USD 97.0 million and leaving USD 11.8 million, so the acquisitions were funded from debt and the cash balance.
Basis: calculation C09; calculation C17; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 44–46

The working-capital drag is partly timing: third-quarter operating cash flow was USD 159.2 million after a first-quarter outflow of USD 66.6 million, and last-twelve-months operating cash flow of USD 283.3 million less capital expenditure of USD 100.4 million leaves USD 182.9 million. All of the buybacks came in the third quarter, with USD 35.0 million of revolver borrowings repaid in the same quarter, and a further rise in metal prices or a reversal of Electronics demand would extend the working-capital drag.
Basis: calculation C08; calculation C09; calculation C17; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 8

### Liquidity and maturities
Cash fell to USD 224.9 million at 2026-09-30, of which USD 176 million sits in foreign subsidiaries, so liquidity rests on the USD 500.0 million revolving facility maturing in 2031, which had USD 15.0 million drawn and USD 7.0 million of letters of credit and so USD 478.0 million undrawn. No bullet maturity falls due before the USD 800.0 million senior notes on 2028-09-01, followed by USD 1,279.7 million of term loans on 2030-12-18, and no committed facility expires within twelve months; the filings print no by-year schedule at the latest date, and quarterly term loan repayments of USD 3.2 million occurred in the second and third quarters.
Basis: calculation C10; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 16–18; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 45; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, pages 8–9

The risk is a 2028 refinancing of the senior notes at a coupon above their current fixed rate while the revolver remains the only committed source, but the springing first lien net leverage covenant of 5.0 to 1.0 applies only when revolver borrowings exceed 30% of the commitment, so it does not constrain today's USD 15.0 million draw. The reported covenant ratio and its EBITDA definition are not printed, so headroom is not established.
Basis: 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 16–18

### Definitions and data quality
Three definition differences change a reader's figures: debt at carrying value is USD 12.6 million below contractual principal, which is the gap between the issuer's own net debt of USD 1,869.8 million and the carrying-value net debt used here; the issuer's Adjusted EBITDA margin switched in 2026 to a denominator that excludes pass-through metals, so the FY2025 margin of 21.5% and the nine-month 2026 margin of 27.9% are not comparable; and purchase prices for both acquisitions differ between the annual report and the quarterly reports, where the later figures of USD 494 million and USD 367 million are used.
Basis: calculation C04; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 34

Standalone fourth-quarter 2025 results and 2025 quarterly filings were not supplied, so last-twelve-months figures are built from the annual and nine-month figures and carry the prior-year reclassification risk the filings state. Segment results are available only as the two reportable segments, and no corporate or elimination line is printed.
Basis: 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27

### Events after the balance sheet
The FY2025 balance sheet pre-dates the EFC acquisition of 2026-01-02 and the Micromax acquisition of 2026-02-02, so year-end net debt of USD 999.4 million understates the position the creditor now faces; adding the acquisition cash paid gives pro forma net debt of USD 1,860.4 million and 3.96x FY2025 reported EBITDA before any acquired earnings. A further USD 9.7 million Kuprion milestone payment falls in the fourth quarter of 2026, after the latest balance sheet, and the Solstice merger agreement of 2026-07-06 was terminated on 2026-08-27 with no payment stated.
Basis: calculation C12; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 33

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_esi-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025 with FY2024 and FY2023 | USD | millions | Element Solutions Inc consolidated | US GAAP | Tier 1 audited | Annual statements, debt, leases, segments, EBITDA reconciliation | Excludes the 2026 acquisitions except as subsequent events; auditor's report by PricewaterhouseCoopers LLP dated 2026-02-18 |
| 10-Q_2026-03-31_esi-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Q1 2026 | USD | millions | Element Solutions Inc consolidated | US GAAP | Tier 2b unaudited | Revolver balance and acquisition amounts at 2026-03-31 | Unaudited; first filing to consolidate EFC and Micromax |
| 10-Q_2026-06-30_esi-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Q2 and six months 2026 | USD | millions | Element Solutions Inc consolidated | US GAAP | Tier 2b unaudited | Pending merger description only | Unaudited; merger description superseded |
| 10-Q_2026-09-30_esi-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Q3 and nine months 2026 | USD | millions | Element Solutions Inc consolidated | US GAAP | Tier 2b unaudited | Latest statements, debt, liquidity, segments, subsequent events | Unaudited; certain prior-year amounts reclassified and not quantified |
| EX-99.1_2026-04-28_aearningsreleaseex99120263.htm.jsonl | Earnings release (Exhibit 99.1) | Q1 2026 | USD | millions | Element Solutions Inc consolidated | US GAAP and non-GAAP | Tier 2b unaudited | Cross-check of quarterly interest paid | Management measures; never overrides the quarterly report |
| EX-99.1_2026-07-27_aearningsreleaseex99120266.htm.jsonl | Earnings release (Exhibit 99.1) | Q2 and six months 2026 | USD | millions | Element Solutions Inc consolidated | US GAAP and non-GAAP | Tier 2b unaudited | Cross-check of six-month interest paid | Management measures; merger described as pending |
| EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl | Earnings release (Exhibit 99.1) | Q3 and nine months 2026 | USD | millions | Element Solutions Inc consolidated | US GAAP and non-GAAP | Tier 2b unaudited | Principal debt table, interest and taxes paid, quarterly cash flows | Management measures; principal basis for debt differs from carrying value |

Sufficiency: the income statement, cash flow statement and balance sheet are supported by the annual report and the third-quarter report; the quarterly statements are condensed and print no cash interest supplement, so nine-month cash interest comes from the third-quarter release. No finance company, services or financing subsidiary is described, so no industrial and finance split is needed.

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Element Solutions Inc | Issuer, borrower and parent; statements are of the consolidated group | December 31 | USD | millions | Consolidated group; EFC consolidated from 2026-01-02 and Micromax from 2026-02-02 | US GAAP | FY2025 and FY2024 audited; Q3 and nine months 2026 with Q3 and nine months 2025 comparatives; Q1 and Q2 2026 interim reports |
| MacDermid, Incorporated | Co-borrower under the Credit Agreement | Not supplied: not stated separately | Not supplied: no separate statements | Not supplied: no separate statements | Subsidiary within the consolidated group | US GAAP | No stand-alone statements in the sources |
| Certain domestic subsidiaries | Joint and several guarantors of the Credit Agreement; guarantors of the 3.875% notes on a senior unsecured basis | Not supplied: entities not named | Not supplied: no separate statements | Not supplied: no separate statements | Not supplied: guarantor group not separated from the consolidated figures | US GAAP | No stand-alone statements in the sources |
| Restricted group for covenant purposes | Perimeter of the springing first lien net leverage test | Not supplied: Credit Agreement definitions not supplied | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated |

### Subsequent events

| Event | Date | Treatment | Source |
|---|---|---|---|
| EFC Gases & Advanced Materials acquisition completed, about USD 367 million cash with an earn-out of up to USD 30.0 million | 2026-01-02 | Outside the FY2025 balance sheet; consolidated from this date; carried in the Post-balance-sheet adjustments table | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12 |
| Micromax acquisition completed, about USD 494 million, with USD 450 million of add-on term loans and a USD 500 million revolver replacing the USD 375 million revolver | 2026-02-02 | Outside the FY2025 balance sheet; the add-on term loans and revolver are in 2026-09-30 debt | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 16 |
| Merger agreement with Solstice signed | 2026-07-06 | No effect on figures; superseded by the termination | 10-Q_2026-06-30_esi-20260630.htm.jsonl, page 12; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12 |
| Merger agreement with Solstice terminated by mutual agreement with release | 2026-08-27 | No payment stated; later report controls | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 33 |
| Executive change: President, Electronics became special advisor; new Chief Operating Officer and President and Chief Financial Officer appointed | 2026-10-19 | No figure effect | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 49 |
| Kuprion milestone payment of USD 9.7 million paid, after the milestone was achieved in the third quarter of 2026 | Not supplied: the source states the fourth quarter of 2026 only | After the latest balance sheet; carried in the Post-balance-sheet adjustments table | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 15 |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Net cash from operating activities includes operating cash flow of discontinued operations | 10-K_2025-12-31_esi-20251231.htm.jsonl | Perimeter alignment | 362.0 | 363.6 | Continuing operating cash flow 362.0 plus discontinued operating cash flow 1.6 so that operating plus investing plus financing plus the FX effect equals the net change in cash of 70.1 | FY2024 |
| Total Debt set as current installments plus long-term Debt | 10-K_2025-12-31_esi-20251231.htm.jsonl | Aggregation | 10.4 and 1,813.6 | 1,824.0 | Balance-sheet carrying value net of discounts and issuance costs; matches the debt note total | FY2024 |
| Total Debt at 2026-09-30 set as the debt note total | 10-Q_2026-09-30_esi-20260930.htm.jsonl | Aggregation | 27.9 and 2,054.2 | 2,082.1 | Current installments of long-term debt and revolving credit facilities plus Debt; includes revolver borrowings of 15.0 | 9M 2026 |
| Last-twelve-months construction of EBITDA, net sales and cash interest | 10-K_2025-12-31_esi-20251231.htm.jsonl; 10-Q_2026-09-30_esi-20260930.htm.jsonl | Derived period | Components in the Constructed period register | LTM values in the Constructed period register | Full year 2025 plus nine months 2026 less nine months 2025; every component stated | 2026-09-30 |
| Nine-month cash interest paid taken from the release | EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl | Source substitution | Not supplied: the 10-Q prints no cash interest | 76.2 and 59.1 | The release's selected financial data states interest paid for the nine months; the annual report prints cash paid for interest | 9M 2026; 9M 2025 |
| Prior-year amounts reclassified to the 2026 presentation | 10-Q_2026-09-30_esi-20260930.htm.jsonl | Reclassification | Not supplied: not quantified | Not supplied: not quantified | The report states only that certain prior-year amounts were reclassified; no figure is restated here | 9M 2025; Q3 2025 |
| No currency conversion | 10-K_2025-12-31_esi-20251231.htm.jsonl; 10-Q_2026-09-30_esi-20260930.htm.jsonl | None | USD | USD | All statements and notes are printed in USD millions; no FX rate is needed | All |

### T4.4 Income statement

| Line item | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Q3 2026 | Q3 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Net sales | 2,551.2 | 2,456.9 | 2,813.2 | 1,875.0 | 995.3 | 656.1 | USD millions | Reported; includes pass-through metals in Electronics; Tier 1 for FY, Tier 2b for interim | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Cost of sales | 1,480.7 | 1,421.2 | 1,814.1 | 1,081.1 | 652.9 | 379.1 | USD millions | Reported expense magnitude | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Gross profit | 1,070.5 | 1,035.7 | 999.1 | 793.9 | 342.4 | 277.0 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Selling, technical, general and administrative | 660.7 | 628.8 | 597.5 | 471.2 | 205.6 | 158.1 | USD millions | Reported expense magnitude | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Research and development | 67.6 | 63.0 | 62.6 | 50.2 | 22.9 | 18.1 | USD millions | Reported expense magnitude | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Total operating expenses | 728.3 | 691.8 | 660.1 | 521.4 | 228.5 | 176.2 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Operating profit | 342.2 | 343.9 | 339.0 | 272.5 | 113.9 | 100.8 | USD millions | Reported EBIT | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Interest expense, net | -53.4 | -56.3 | -68.3 | -40.5 | -22.8 | -13.3 | USD millions | Reported accrued net interest in other (expense) income; not cash paid | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Foreign exchange (losses) gains | -35.3 | 25.1 | 11.8 | -34.4 | 6.0 | -11.0 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Other (expense) income, net | -46.9 | -25.0 | 0.6 | -22.6 | -3.8 | -14.0 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Gain (loss) on divestitures | 59.0 | Not supplied: dash printed in filing | Not supplied: dash printed in filing | 59.6 | Not supplied: dash printed in filing | -7.0 | USD millions | Reported; FY2025 and nine months 2025 gains arise from the sale of the flexographic printing plate business | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Total other expense | -76.6 | -56.2 | -55.9 | -37.9 | -20.6 | -45.3 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Income before income taxes and non-controlling interests | 265.6 | 287.7 | 283.1 | 234.6 | 93.3 | 55.5 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Income tax expense | -74.6 | -44.8 | -84.1 | -49.8 | -27.6 | -16.2 | USD millions | Reported accrued tax; not cash paid | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Net income from continuing operations | 191.0 | 242.9 | Not supplied: no such line in that filing | Not supplied: no such line in that filing | Not supplied: no such line in that filing | Not supplied: no such line in that filing | USD millions | Annual statement only | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Income from discontinued operations, net of tax | Not supplied: dash printed in filing | 1.6 | Not supplied: no such line in that filing | Not supplied: no such line in that filing | Not supplied: no such line in that filing | Not supplied: no such line in that filing | USD millions | Annual statement only; FY2025 prints a dash | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Net income | 191.0 | 244.5 | 199.0 | 184.8 | 65.7 | 39.3 | USD millions | Reported, including non-controlling interests | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Net income attributable to the non-controlling interests | -0.2 | -0.3 | -0.1 | -0.1 | Not supplied: dash printed in filing | Not supplied: dash printed in filing | USD millions | Reported deduction | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Net income attributable to common stockholders | 190.8 | 244.2 | 198.9 | 184.7 | 65.7 | 39.3 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–83; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–6 |
| Depreciation expense | 41.1 | 40.0 | 44.5 | 29.7 | 14.8 | 10.0 | USD millions | Issuer EBITDA reconciliation component | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Amortization expense | 110.1 | 117.6 | 87.8 | 84.3 | 30.3 | 28.6 | USD millions | Issuer EBITDA reconciliation component | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| EBITDA (Reported) | 470.2 | 501.6 | 483.7 | 389.1 | 161.2 | 107.4 | USD millions | Issuer-stated unadjusted EBITDA: net income less discontinued operations, plus tax, net interest, depreciation and amortization; includes divestiture gains and foreign exchange items | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Restructuring expense | 5.6 | 7.8 | 7.4 | 4.7 | 3.3 | 1.5 | USD millions | Issuer add-back; classification restructuring; realization not stated | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Inventory step-up | Not supplied: dash printed in filing | Not supplied: dash printed in filing | 5.8 | Not supplied: dash printed in filing | 0.4 | Not supplied: dash printed in filing | USD millions | Issuer add-back; classification purchase accounting; realization not stated | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Acquisition, integration and transaction expenses | 34.9 | 21.7 | 52.6 | 22.6 | 21.9 | 11.0 | USD millions | Issuer add-back; classification transaction costs; realization not stated | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Foreign exchange losses (gains) on intercompany loans | 28.2 | -23.9 | -13.1 | 28.2 | -6.1 | 11.6 | USD millions | Issuer add-back; classification other stated; non-cash remeasurement | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Loss (gain) on divestitures (add-back) | -59.0 | Not supplied: dash printed in filing | Not supplied: dash printed in filing | -59.6 | Not supplied: dash printed in filing | 7.0 | USD millions | Issuer add-back; reverses the divestiture result inside EBITDA | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Unrealized losses (gains) on metals derivative contracts | 16.7 | -4.4 | -17.9 | 13.3 | 11.8 | 6.4 | USD millions | Issuer add-back; classification other stated; unrealized | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Debt financing costs | 1.8 | 0.8 | Not supplied: dash printed in filing | 1.8 | Not supplied: dash printed in filing | Not supplied: dash printed in filing | USD millions | Issuer add-back; classification other stated | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Kuprion Acquisition research and development charge | Not supplied: dash printed in filing | 3.9 | Not supplied: no such line in that filing | Not supplied: no such line in that filing | Not supplied: no such line in that filing | Not supplied: no such line in that filing | USD millions | Annual reconciliation line only; classification other stated | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| 2025 executive share grants | 37.1 | Not supplied: dash printed in filing | Not supplied: no such line in that filing | Not supplied: no such line in that filing | Not supplied: no such line in that filing | Not supplied: no such line in that filing | USD millions | Issuer add-back; classification share-based compensation; non-cash; realization not stated | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Change in fair value of EFC contingent consideration | Not supplied: no such line in that filing | Not supplied: no such line in that filing | 3.4 | Not supplied: dash printed in filing | -5.9 | Not supplied: dash printed in filing | USD millions | Issuer add-back; quarterly reconciliation line only; non-cash remeasurement | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| Other, net (add-back) | 12.1 | 27.2 | 14.9 | 11.2 | 4.4 | 2.0 | USD millions | Issuer add-back; classification other stated; components not stated | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |
| EBITDA (Adjusted) | 547.6 | 534.7 | 536.8 | 411.3 | 191.0 | 146.9 | USD millions | Issuer Adjusted EBITDA; add-backs as listed above; no house adjustment | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 |

Net sales include pass-through metals in Electronics: USD 891.6 million of nine-month 2026 net sales, against USD 339.7 million a year earlier. Interest expense, net is accrued net interest; gross interest expense for nine months 2026 is USD 72.8 million and cash interest paid is USD 76.2 million.
Basis: EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, pages 8–9

### T4.16 Segment schedule

| Segment | Period | Net sales | Adjusted EBITDA | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Electronics | FY2025 | 1,786.2 | 382.2 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 124–125 |
| Electronics | FY2024 | 1,561.4 | 361.5 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 124–125 |
| Electronics | 9M 2026 | 2,180.1 | 408.9 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27 |
| Electronics | 9M 2025 | 1,298.9 | 286.9 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27 |
| Electronics | Q3 2026 | 779.6 | 148.3 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27 |
| Electronics | Q3 2025 | 465.2 | 101.5 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27 |
| Specialties | FY2025 | 765.0 | 165.4 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 124–125 |
| Specialties | FY2024 | 895.5 | 173.2 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 124–125 |
| Specialties | 9M 2026 | 633.1 | 127.9 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27 |
| Specialties | 9M 2025 | 576.1 | 124.4 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27 |
| Specialties | Q3 2026 | 215.7 | 42.7 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27 |
| Specialties | Q3 2025 | 190.9 | 45.4 | USD millions | Reported segment net sales and segment Adjusted EBITDA, which includes an allocation of corporate costs | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27 |
| Micromax (within Electronics) | Q3 2026 | 137.8 | Not supplied: segment Adjusted EBITDA is not stated by product line | USD millions | Reported product-category net sales, already inside the segment above; not additive | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 26 |
| Micromax (within Electronics) | 9M 2026 | 331.2 | Not supplied: segment Adjusted EBITDA is not stated by product line | USD millions | Reported product-category net sales, already inside the segment above; not additive | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 26 |
| EFC (within Specialties) | Q3 2026 | 23.4 | Not supplied: segment Adjusted EBITDA is not stated by product line | USD millions | Reported product-category net sales, already inside the segment above; not additive | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 26 |
| EFC (within Specialties) | 9M 2026 | 58.1 | Not supplied: segment Adjusted EBITDA is not stated by product line | USD millions | Reported product-category net sales, already inside the segment above; not additive | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 26 |

Electronics net sales of USD 779.6 million and Specialties net sales of USD 215.7 million sum to the consolidated USD 995.3 million for Q3 2026, and the segment Adjusted EBITDA of USD 148.3 million and USD 42.7 million sum to USD 191.0 million, so no corporate or elimination row exists to separate.
Basis: calculation C13; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27

### T4.5 Cash flow statement

| Line item | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 191.0 | 244.5 | 199.0 | 184.8 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Income from discontinued operations, net of tax | Not supplied: dash printed in filing | 1.6 | Not supplied: no such line in that filing | Not supplied: no such line in that filing | USD millions | Annual statement only | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Net income from continuing operations | 191.0 | 242.9 | Not supplied: no such line in that filing | Not supplied: no such line in that filing | USD millions | Annual statement only | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Depreciation and amortization | 151.2 | 157.6 | 132.3 | 114.0 | USD millions | Reported non-cash adjustment | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Deferred income taxes | -12.6 | -39.2 | -1.4 | -16.2 | USD millions | Reported non-cash adjustment | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Foreign exchange losses (gains) | 29.4 | -24.4 | -17.7 | 28.6 | USD millions | Reported non-cash adjustment | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Incentive stock compensation | 59.1 | 14.8 | 38.9 | 15.8 | USD millions | Reported non-cash adjustment; FY2025 includes executive share grants | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Net gain on divestitures | -59.0 | Not supplied: dash printed in filing | Not supplied: dash printed in filing | -59.6 | USD millions | Reported operating reconciliation, not disposal proceeds | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| EFC contingent consideration | Not supplied: no such line in that filing | Not supplied: no such line in that filing | 3.4 | Not supplied: dash printed in filing | USD millions | Quarterly statement line only | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Other, net (operating) | 9.2 | 22.9 | 11.8 | 9.7 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Accounts receivable | -57.6 | -29.9 | -137.3 | -49.6 | USD millions | Reported change in assets and liabilities, net of acquisitions | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Inventories | -39.1 | 7.8 | -80.7 | -35.0 | USD millions | Reported change | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Accounts payable | 27.4 | -1.0 | 29.7 | 15.8 | USD millions | Reported change | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Accrued expenses | -0.3 | 33.0 | 49.1 | -16.5 | USD millions | Reported change | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Prepaid expenses and other current assets | -21.6 | -4.2 | -34.6 | -14.4 | USD millions | Reported change | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Other assets and liabilities | 12.7 | -18.3 | -0.3 | 21.3 | USD millions | Reported change | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Net cash flows provided by operating activities | 289.8 | 362.0 | 192.2 | 198.7 | USD millions | Reported, continuing operations | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Net cash flows provided by operating activities of discontinued operations | Not supplied: dash printed in filing | 1.6 | Not supplied: no such line in that filing | Not supplied: no such line in that filing | USD millions | Annual statement only | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Net Cash from Operating Activities | 289.8 | 363.6 | 192.2 | 198.7 | USD millions | Fixed row: continuing operating cash flow plus operating cash flow of discontinued operations (FY2024: 362.0 plus 1.6), so that the cash roll-forward ties; equals the continuing line in every other period | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Capital expenditures | -62.2 | -68.4 | -83.4 | -45.2 | USD millions | Reported outflow; total capex only, no maintenance or growth split | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Proceeds from disposal of property, plant and equipment | 1.5 | Not supplied: dash printed in filing | Not supplied: dash printed in filing | 0.8 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Proceeds from divestitures | 321.2 | Not supplied: dash printed in filing | Not supplied: dash printed in filing | 323.8 | USD millions | Reported, net of cash divested | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Acquisitions, net of cash acquired | Not supplied: dash printed in filing | -3.9 | -865.8 | Not supplied: dash printed in filing | USD millions | Reported outflow; 9M 2026 covers EFC and Micromax | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Other, net (investing) | 25.6 | -1.5 | 0.2 | 25.5 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Net Cash from Investing Activities | 286.1 | -73.8 | -949.0 | 304.9 | USD millions | Reported net cash flows from investing activities | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Debt proceeds, net of discount | Not supplied: dash printed in filing | 1,040.1 | 449.4 | Not supplied: dash printed in filing | USD millions | Reported; 9M 2026 is the add-on term loans | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Repayments of borrowings | -202.6 | -1,152.6 | -6.4 | -202.6 | USD millions | Reported outflow | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Changes in lines of credit, net | Not supplied: no such line in that filing | Not supplied: no such line in that filing | 15.0 | Not supplied: dash printed in filing | USD millions | Quarterly statement line only | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Repurchases of common stock | -25.0 | Not supplied: dash printed in filing | -37.7 | -19.4 | USD millions | Reported outflow | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Dividends | -77.8 | -78.2 | -59.3 | -58.4 | USD millions | Reported outflow | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Payment of financing fees | Not supplied: dash printed in filing | -3.2 | -6.1 | Not supplied: dash printed in filing | USD millions | Reported outflow | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Other, net (financing) | -15.0 | -12.7 | 0.2 | -0.7 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Net Cash from Financing Activities | -320.4 | -206.6 | 355.1 | -281.1 | USD millions | Reported net cash flows from financing activities | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| FX Effect on Cash | 11.6 | -13.1 | 0.1 | 12.4 | USD millions | Reported effect of exchange rate changes on cash and cash equivalents | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Net Cash Change | 267.1 | 70.1 | -401.6 | 234.9 | USD millions | Reported net change in cash and cash equivalents: operating plus investing plus financing plus the FX effect | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Opening Cash | 359.4 | 289.3 | 626.5 | 359.4 | USD millions | Reported cash and cash equivalents at beginning of period | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Closing Cash | 626.5 | 359.4 | 224.9 | 594.3 | USD millions | Reported cash and cash equivalents at end of period | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |
| Cash Interest Paid | 68.6 | 64.8 | 76.2 | 59.1 | USD millions | Positive amount paid on continuing operations; FY columns from the annual statement supplement, 9M columns from the third-quarter release selected financial data because the quarterly statements print no supplement | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 85; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9 |
| Cash Taxes Paid | 98.8 | 87.2 | 66.8 | 71.5 | USD millions | Cash paid for income taxes; sources as for cash interest | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 85; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2024 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash & Equivalents | 626.5 | 359.4 | 224.9 | USD millions | Fixed row: reported cash and cash equivalents | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Accounts receivable, net | 517.7 | 439.6 | 736.1 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Inventories | 294.7 | 246.2 | 409.4 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Prepaid expenses | 28.3 | 22.7 | 45.7 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Other current assets | 115.3 | 136.9 | 160.4 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Current assets held for sale | Not supplied: dash printed in filing | 65.2 | Not supplied: no such line in that filing | USD millions | Annual balance sheet line; FY2024 held-for-sale graphics business | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Total current assets | 1,582.5 | 1,270.0 | 1,576.5 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Property, plant and equipment, net | 319.6 | 276.8 | 425.8 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Goodwill | 2,241.9 | 2,132.0 | 2,548.7 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Intangible assets, net | 657.2 | 732.0 | 987.3 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Deferred income tax assets | 175.5 | 133.3 | 162.9 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Other assets | 124.7 | 140.9 | 160.0 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Non-current assets held for sale | Not supplied: dash printed in filing | 188.9 | Not supplied: no such line in that filing | USD millions | Annual balance sheet line | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Total Assets | 5,101.4 | 4,873.9 | 5,861.2 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Accounts payable | 165.5 | 121.3 | 199.2 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Current installments of long-term debt (and revolving credit facilities) | Not supplied: dash printed in filing | 10.4 | 27.9 | USD millions | Reported; at 2026-09-30 includes revolver borrowings classified as current | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Accrued expenses and other current liabilities | 264.4 | 229.3 | 339.5 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Current liabilities held for sale | Not supplied: dash printed in filing | 18.7 | Not supplied: no such line in that filing | USD millions | Annual balance sheet line | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Total current liabilities | 429.9 | 379.7 | 566.6 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Debt | 1,625.9 | 1,813.6 | 2,054.2 | USD millions | Reported long-term debt, net of unamortized discounts and issuance costs | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Total Debt | 1,625.9 | 1,824.0 | 2,082.1 | USD millions | Fixed row: balance-sheet carrying value, current installments plus Debt, net of unamortized discounts and issuance costs; term loans, senior notes and revolver borrowings, with no finance lease or securitization carried in debt lines | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Senior secured debt (term loans and revolver, carrying value) | 830.3 | 1,030.0 | 1,285.2 | USD millions | Calculated from the debt note: term loans 1,270.2 plus revolver borrowings 15.0 at 2026-09-30; first-priority security over substantially all assets of the borrowers and guarantors | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 112; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15–16 |
| Senior unsecured debt (3.875% notes due 2028, carrying value) | 795.6 | 794.0 | 796.9 | USD millions | Reported in the debt note; senior unsecured guarantees from generally the same domestic subsidiaries | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 112; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15, 18 |
| Operating lease liabilities (inside accrued expenses and other liabilities, not in Total Debt) | 86.0 | 81.6 | Not supplied: the third-quarter report prints no lease liability balance | USD millions | Reported in the lease note at year-ends; present value of 103.2 future minimum payments at 2025-12-31 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 121; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Pension and post-retirement benefits | 22.3 | 22.2 | 22.2 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Deferred income tax liabilities | 93.1 | 93.9 | 104.5 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Other liabilities | 240.8 | 152.6 | 226.6 | USD millions | Reported; includes non-current operating lease liabilities | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Non-current liabilities held for sale | Not supplied: dash printed in filing | 13.5 | Not supplied: no such line in that filing | USD millions | Annual balance sheet line | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Total Liabilities | 2,412.0 | 2,475.5 | 2,974.1 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Common stock | 2.7 | 2.7 | 2.7 | USD millions | Reported par value, not share count | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Additional paid-in capital | 4,279.2 | 4,214.1 | 4,319.6 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Treasury stock | -393.9 | -349.5 | -431.8 | USD millions | Reported monetary balance | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Accumulated deficit | -904.6 | -1,017.1 | -765.6 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Accumulated other comprehensive loss | -308.9 | -467.2 | -252.3 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Total stockholders' equity | 2,674.5 | 2,383.0 | 2,872.6 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Non-controlling interests | 14.9 | 15.4 | 14.5 | USD millions | Reported | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |
| Total Equity | 2,689.4 | 2,398.4 | 2,887.1 | USD millions | Reported, including non-controlling interests | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Term loans B-3 including the add-on term loans (borrowers Element Solutions Inc and MacDermid, Incorporated; guaranteed by certain domestic subsidiaries) | Senior secured term loan | 1,270.2 | 1,279.7 | 1,279.7 | Not applicable | First-priority security interest in substantially all assets of the borrowers and guarantors | Senior secured, first lien | USD | 1,270.2 | Not applicable | SOFR plus 1.75% | floating | Adjusted one-month SOFR | 175 | Not supplied: no floor stated for the term loans | 2030-12-18 | Not supplied: no scheduled annual amount stated | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15–16; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9 |
| 3.875% senior notes due 2028 (issuer Element Solutions Inc; guaranteed by generally the domestic subsidiaries that guarantee the Credit Agreement) | Senior unsecured notes | 796.9 | 800.0 | 800.0 | Not applicable | Unsecured; guaranteed on a senior unsecured basis by generally the domestic subsidiaries that guarantee the Credit Agreement | Senior unsecured | USD | 796.9 | Not applicable | 3.875% | fixed | Not applicable | Not applicable | Not applicable | 2028-09-01 | 0 | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15, 18; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9 |
| Revolving credit facility (borrowers Element Solutions Inc and MacDermid, Incorporated; guaranteed by certain domestic subsidiaries) | Senior secured revolving facility | 15.0 | 15.0 | 15.0 | 500.0 | First-priority security interest in substantially all assets of the borrowers and guarantors | Senior secured, first lien | USD | 15.0 | Not applicable | SOFR plus 1.50% | floating | Term SOFR | 150 | 0 | 2031-02-02 | 0 | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15–16, 18; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9 |

The three carrying values sum to USD 2,082.1 million, equal to Total Debt at 2026-09-30, so no separate financing cost adjustment row is needed. The USD 7.0 million of letters of credit reduces revolver availability and is not debt. The revolver borrowings are presented within current installments of long-term debt and revolving credit facilities of USD 27.9 million even though the facility matures in 2031; the remaining USD 12.9 million of current installments is not itemised by instrument in the sources.
Basis: calculation C14; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15–16

### Claims outside debt

| Claim | Amount | Date | In Total Debt | Treatment | Source |
|---|---|---|---|---|---|
| Operating lease liabilities | 86.0 | 2025-12-31 | Outside | Current 16.5 in accrued expenses and other current liabilities and non-current 69.5 in other liabilities; 81.6 at 2024-12-31; operating lease expense 26.9 in FY2025; the 2026-09-30 balance is not printed | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 121 |
| Finance leases | Not supplied: the annual report describes operating leases only | 2025-12-31 | Not applicable | No finance lease is carried in the debt lines | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 120–121 |
| Pension and post-retirement benefits | 22.2 | 2026-09-30 | Outside | Balance-sheet liability of 22.3 at 2025-12-31; domestic plans overfunded by 5.0 and foreign plans underfunded by 13.4 at 2025-12-31; retiree medical is not separately stated | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 69 |
| EFC earn-out | 30.0 | 2026-09-30 | Outside | Maximum cash payable on EFC's 2026 performance, or 1.16 million shares; estimated fair value 16.1 at acquisition | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12 |
| Kuprion milestone payment | 9.7 | Fourth quarter of 2026 | Outside | Capitalised in the third quarter of 2026 and paid after the balance-sheet date | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 15 |
| Environmental liabilities | 13.4 | 2026-09-30 | Outside | Accrued within accrued expenses and other liabilities, 9.6 at 2025-12-31; no consent-decree funding is stated; no range of further loss is estimable | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 24; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 122 |
| Letters of credit | 7.0 | 2026-09-30 | Outside | Reduce revolver and line availability; not drawn | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 18 |
| Capital expenditure for 2026 | 110 | 2026 | Outside | Management expectation of about 110 for the full year, not a contract; nine-month capital expenditure was 83.4 | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 44 |
| Factoring, supply chain finance, securitization and restricted cash | Not supplied: none disclosed in any of the seven sources | 2026-09-30 | Not applicable | A search of all sources found no such arrangement; absence is not evidence of zero | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Net sales | LTM | USD 2,551.2m | USD 2,813.2m | USD 1,875.0m | USD 3,489.4m | Calculated | 10-K_2025-12-31_esi-20251231.htm.jsonl; 10-Q_2026-09-30_esi-20260930.htm.jsonl | Includes EFC from 2026-01-02 and Micromax from 2026-02-02 only; prior-year amounts reclassified in part |
| EBITDA (Reported) | LTM | USD 470.2m | USD 483.7m | USD 389.1m | USD 564.8m | Calculated | 10-K_2025-12-31_esi-20251231.htm.jsonl; 10-Q_2026-09-30_esi-20260930.htm.jsonl | Contains the FY2025 gain on divestitures of USD 59.0m and the nine-month 2025 gain of USD 59.6m; acquired EBITDA only from closing |
| EBITDA (Adjusted) | LTM | USD 547.6m | USD 536.8m | USD 411.3m | USD 673.1m | Calculated | 10-K_2025-12-31_esi-20251231.htm.jsonl; 10-Q_2026-09-30_esi-20260930.htm.jsonl | Issuer Adjusted EBITDA; add-backs per the EBITDA bridge; acquired EBITDA only from closing |
| Cash interest paid | LTM | USD 68.6m | USD 76.2m | USD 59.1m | USD 85.7m | Calculated | 10-K_2025-12-31_esi-20251231.htm.jsonl; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl | Nine-month components from the release; interest on the add-on term loans only from 2026-02-02 |
| Net cash from operating activities | LTM | USD 289.8m | USD 192.2m | USD 198.7m | USD 283.3m | Calculated | 10-K_2025-12-31_esi-20251231.htm.jsonl; 10-Q_2026-09-30_esi-20260930.htm.jsonl | Continuing operations; first-quarter 2026 operating cash flow was negative |
| Capital expenditures | LTM | USD 62.2m | USD 83.4m | USD 45.2m | USD 100.4m | Calculated | 10-K_2025-12-31_esi-20251231.htm.jsonl; 10-Q_2026-09-30_esi-20260930.htm.jsonl | Shown as a positive outflow; total capital expenditure only, no maintenance and growth split |

Balance-sheet figures use the latest period end and are not constructed. Quarters are not derived because Q3 2026 and Q3 2025 are reported directly in the third-quarter report.
Basis: calculation C05; calculation C07; calculation C08

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 1,824.0 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 112; 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84 | 501.6 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | FY2024 / 2024-12-31 | USD | US$m | 3.64 | Calculated | Tier 1 audited | Carrying-value debt, not principal. |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 1,464.6 | calculation C01 | 501.6 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | FY2024 / 2024-12-31 | USD | US$m | 2.92 | Calculated | Tier 1 audited | Carrying-value debt, not principal. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 501.6 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | 64.8 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 85 | FY2024 / 2024-12-31 | USD | US$m | 7.74 | Calculated | Tier 1 audited | Cash interest paid, not accrued interest. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 1,824.0 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 112; 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84 | 534.7 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | FY2024 / 2024-12-31 | USD | US$m | 3.41 | Calculated | Tier 1 audited | Carrying-value debt, not principal. |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 1,464.6 | calculation C01 | 534.7 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | FY2024 / 2024-12-31 | USD | US$m | 2.74 | Calculated | Tier 1 audited | Carrying-value debt, not principal. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 534.7 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | 64.8 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 85 | FY2024 / 2024-12-31 | USD | US$m | 8.25 | Calculated | Tier 1 audited | Cash interest paid, not accrued interest. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 1,625.9 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 84; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 112 | 470.2 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | FY2025 / 2025-12-31 | USD | US$m | 3.46 | Calculated | Tier 1 audited | Carrying-value debt, not principal. |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 999.4 | calculation C02 | 470.2 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | FY2025 / 2025-12-31 | USD | US$m | 2.13 | Calculated | Tier 1 audited | Carrying-value debt, not principal. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 470.2 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | 68.6 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 85 | FY2025 / 2025-12-31 | USD | US$m | 6.85 | Calculated | Tier 1 audited | Cash interest paid, not accrued interest. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 1,625.9 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 84; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 112 | 547.6 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | FY2025 / 2025-12-31 | USD | US$m | 2.97 | Calculated | Tier 1 audited | Carrying-value debt, not principal. |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 999.4 | calculation C02 | 547.6 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | FY2025 / 2025-12-31 | USD | US$m | 1.83 | Calculated | Tier 1 audited | Carrying-value debt, not principal. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 547.6 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | 68.6 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 85 | FY2025 / 2025-12-31 | USD | US$m | 7.98 | Calculated | Tier 1 audited | Cash interest paid, not accrued interest. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 2,082.1 | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 15 | 564.8 | calculation C05 | 2026-09-30 | USD | US$m | 3.69 | Calculated | Tier 2b unaudited; LTM constructed | Carrying-value debt, not principal. LTM EBITDA holds acquired earnings only from closing. |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 1,857.2 | calculation C03 | 564.8 | calculation C05 | 2026-09-30 | USD | US$m | 3.29 | Calculated | Tier 2b unaudited; LTM constructed | Carrying-value debt, not principal. LTM EBITDA holds acquired earnings only from closing. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 564.8 | calculation C05 | 85.7 | calculation C07 | 2026-09-30 | USD | US$m | 6.59 | Calculated | Tier 2b unaudited; LTM constructed | Cash interest paid, not accrued interest. LTM EBITDA holds acquired earnings only from closing. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 2,082.1 | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 15 | 673.1 | calculation C05 | 2026-09-30 | USD | US$m | 3.09 | Calculated | Tier 2b unaudited; LTM constructed | Carrying-value debt, not principal. LTM EBITDA holds acquired earnings only from closing. |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 1,857.2 | calculation C03 | 673.1 | calculation C05 | 2026-09-30 | USD | US$m | 2.76 | Calculated | Tier 2b unaudited; LTM constructed | Carrying-value debt, not principal. LTM EBITDA holds acquired earnings only from closing. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 673.1 | calculation C05 | 85.7 | calculation C07 | 2026-09-30 | USD | US$m | 7.85 | Calculated | Tier 2b unaudited; LTM constructed | Cash interest paid, not accrued interest. LTM EBITDA holds acquired earnings only from closing. |
| Net sales growth | (FY2025 net sales / FY2024 net sales - 1) x 100 | 2,551.2 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 82 | 2,456.9 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 82 | FY2025 | USD | US$m | 3.84 | Calculated | Tier 1 audited | Reported basis, not organic; includes divestiture effects in Specialties |
| Gross margin | Gross profit / net sales x 100 | 1,070.5 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 82 | 2,551.2 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 82 | FY2025 | USD | US$m | 41.96 | Calculated | Tier 1 audited | Issuer states 42.0%; net sales include pass-through metals |
| Adjusted EBITDA / net sales | Adjusted EBITDA / net sales x 100 | 547.6 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | 2,551.2 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 82 | FY2025 | USD | US$m | 21.46 | Calculated | Tier 1 audited | Issuer states 21.5% on total net sales in the annual report; later reports exclude pass-through metals from the denominator |
| Adjusted EBITDA margin excluding pass-through metals | Adjusted EBITDA / net sales excluding pass-through metals x 100 | 536.8 | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 | 1,921.6 | EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 8 | 9M 2026 | USD | US$m | 27.94 | Calculated | Tier 2b unaudited | Issuer definition from 2026; issuer states 27.9% |
| Capital expenditures / net sales | Capital expenditures / net sales x 100 | 62.2 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 84 | 2,551.2 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 82 | FY2025 | USD | US$m | 2.44 | Calculated | Tier 1 audited | Total capital expenditure only |
| Free cash flow / EBITDA (Adjusted) | (Operating cash flow - capital expenditures) / Adjusted EBITDA x 100 | 227.6 | calculation C09 | 547.6 | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | FY2025 | USD | US$m | 41.56 | Calculated | Tier 1 audited | Free cash flow before dividends and acquisitions; working capital included |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Margin (issuer-reported) | Gross margin, % of net sales | 42.2 | 42.0 | Not supplied: not stated in the 10-Q | Not supplied: not stated in the 10-Q | Down 0.2 percentage points in FY2025 | Annual report MD&A; 10-Q prints no margin table |
| Margin (issuer-reported) | Adjusted EBITDA margin, % (FY: of total net sales; 9M: of net sales excluding pass-through metals) | 21.8 | 21.5 | 26.8 | 27.9 | Not comparable across the definition change | The 2026 definition excludes pass-through metals; see the definition conflict register |
| Segment (issuer-reported) | Electronics Adjusted EBITDA margin, % | 23.1 | 21.4 | 29.9 | 31.7 | Not comparable across the definition change | Nine-month margins from the release; annual margins from the annual report |
| Segment (issuer-reported) | Specialties Adjusted EBITDA margin, % | 19.3 | 21.6 | 21.6 | 20.2 | Not comparable across the definition change | Nine-month margins from the release; annual margins from the annual report |
| Growth (issuer-reported) | Organic net sales growth, % | Not supplied: the annual report states organic growth for 2025 only | 6 | Not supplied: not stated for 9M 2025 | 13 | Up | Organic growth excludes currency, pass-through metals pricing, acquisitions and divestitures; the first-quarter 2026 report shows reported growth of 41% and organic growth of 10% |
| Segment (issuer-reported) | Electronics organic net sales growth, % | Not supplied: the annual report states organic growth for 2025 only | 10 | Not supplied: not stated for 9M 2025 | 18 | Up | Annual report MD&A and the third-quarter release summary table |
| Segment (issuer-reported) | Specialties organic net sales growth, % | Not supplied: the annual report states organic growth for 2025 only | 1 | Not supplied: not stated for 9M 2025 | 2 | Up | Annual report MD&A and the third-quarter release summary table |
| Mix | Pass-through metals net sales, USD millions | Not supplied: not stated for FY2024 | Not supplied: FY2025 amount not stated | 339.7 | 891.6 | Up | Pass-through metals are about a third of third-quarter 2026 net sales and move with metal prices, not demand |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| Debt carrying value against principal | Total Debt is balance-sheet carrying value | The issuer's capital structure table states principal: total debt 2,094.7 and net debt 1,869.8 | EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15–16 | 2026-09-30; also FY2025 (1,625.9 against 1,636.2) and FY2024 (1,824.0 against 1,838.8) | 12.6 at 2026-09-30, equal to discounts and issuance costs of 9.5 and 3.1; 0.02 of one turn on last-twelve-months reported EBITDA | Liquidity; Refinancing & LME; Fundamental credit | Carrying value 2,082.1 used for leverage; principal 2,094.7 used for the maturity ladder; both shown |
| Net debt | Gross debt at carrying value less cash and equivalents | Principal debt less cash: 2,094.7 less 224.9 equals 1,869.8 | EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9 | 2026-09-30 | 12.6 (1,869.8 against 1,857.2) | Fundamental credit | Carrying-value net debt of 1,857.2 used; issuer figure disclosed |
| EBITDA | EBITDA (Reported) as the issuer's unadjusted figure is the leverage denominator | Adjusted EBITDA adds back acquisition, integration and transaction expenses, FX on intercompany loans, unrealized metals derivative results, executive share grants and other items | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 27 | FY2025: net add-backs of 77.4 including a deduction of 59.0 for the divestiture gain; 9M 2026: 53.1 | Reported 470.2 against adjusted 547.6 for FY2025: 0.30 of one turn of net leverage between the two measures | All leverage and cover modules | Both shown; reported is primary, adjusted a labelled twin; no house adjustment |
| Adjusted EBITDA margin | Adjusted EBITDA divided by total net sales | From 2026 the issuer divides by net sales excluding pass-through metals in Electronics | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 60; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 34; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 17 | FY2025 and FY2024 against 2026 periods | FY2025 margin 21.5% on total net sales against 19.1% had the 2026 nine-month adjusted EBITDA been divided by total net sales of 2,813.2 (536.8 / 2,813.2) | Earnings modules; Peer benchmark | Margins before and after 2026 are not compared |
| Interest | Cash interest paid is the cover denominator | Interest expense, net is accrued; gross interest expense for 9M 2026 is 72.8 | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 5; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9 | 9M 2026: net expense 68.3, gross expense 72.8, paid 76.2 | Nine-month 2026 reported EBITDA over accrued net interest is 7.08x against 6.35x over interest paid | Fundamental credit | Cash interest paid used |
| Acquisition purchase prices | One price per acquisition | Micromax about 500 in the annual report, 493 in the first-quarter report, 494 in the second- and third-quarter reports; EFC about 369 in the annual report, 367 in the quarterly reports | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 126; 10-Q_2026-03-31_esi-20260331.htm.jsonl, page 10; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12; EX-99.1_2026-04-28_aearningsreleaseex99120263.htm.jsonl, page 4 | 2026 | 6.0 for Micromax and 2.0 for EFC; cash paid per the cash flow statement is 865.8 including 4.9 of Kuprion milestone | Business & governance | Latest quarterly figures used; none averaged |
| Operating cash flow | Net cash from operating activities includes all operations | Continuing operations 362.0 and discontinued operations 1.6 are shown separately for FY2024 | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 84–85 | FY2024 | 1.6 | Cash flow modules | 363.6 used in the fixed row; 362.0 kept as the continuing line |
| Covenant leverage | Covenant net leverage as the Credit Agreement defines it | First lien net leverage ratio not to exceed 5.0 to 1.0 when revolver borrowings exceed 30% of commitment; ratio and EBITDA definition not printed | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 16–17; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 113 | 2026-09-30 | Cannot be quantified; consolidated total debt over EBITDA is a different metric | Legal & covenants; Covenant capacity | Not computed; flagged as a gap |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Normalised statements, FY2024 to nine months 2026 | Ready with Limitations | Dashes printed in filings are treated as not supplied; prior-year reclassifications unquantified; no Q4 2025 stand-alone period | Obtain the fourth-quarter 2025 release and 2025 quarterly filings |
| Leverage and interest cover | Ready with Limitations | Last-twelve-months EBITDA carries acquired earnings only from closing; no pro forma EBITDA stated for Micromax and EFC full year | Use the issuer's full-year guidance cautiously; request pro forma acquired EBITDA |
| Liquidity and maturities | Ready with Limitations | No by-year principal schedule at 2026-09-30; USD 12.9 million of current installments not itemised; FY2024 undrawn revolver not stated | Obtain the Credit Agreement amortisation schedule |
| Covenant analysis | Not Ready | Covenant EBITDA definition and reported first lien net leverage ratio not supplied | Obtain the executed Credit Agreement and compliance certificate |
| Peer or market comparison | Not Ready | No peer set, ratings or market quotes supplied; the issuer's market capitalisation is the only market datum | Supply peers and quotes if comparison is required |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 3.64 | 2.92 | x | Fiscal year; carrying-value debt over reported EBITDA of USD 501.6 million |
| FY2025 / 2025-12-31 | 3.46 | 2.13 | x | Fiscal year; carrying-value debt over reported EBITDA of USD 470.2 million |
| 2026-09-30 | 3.69 | 3.29 | x | Last twelve months to 2026-09-30: reported EBITDA of USD 564.8 million built from FY2025 plus nine months 2026 less nine months 2025; acquired earnings only from closing |

The interim row is a last-twelve-months ratio whose EBITDA includes the acquired businesses only from their closing dates.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 7.74 | x | Fiscal year; reported EBITDA over cash interest paid of USD 64.8 million |
| FY2025 / 2025-12-31 | 6.85 | x | Fiscal year; reported EBITDA over cash interest paid of USD 68.6 million |
| 2026-09-30 | 6.59 | x | Last twelve months; reported EBITDA of USD 564.8 million over cash interest paid of USD 85.7 million, built from the annual and nine-month figures |

The interim row divides last-twelve-months EBITDA by cash interest that includes the add-on term loans only from 2026-02-02.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 359.4 | Not supplied: the annual report states the revolver's unused capacity at 2025-12-31 only | US$m | Cash and cash equivalents at 2024-12-31 from the annual balance sheet; combined availability of about 390 across facilities is stated but is not a committed-facility figure |
| FY2025 / 2025-12-31 | 626.5 | 368.0 | US$m | Revolver of 375.0 less letters of credit of 7.0, stated as unused borrowing capacity net of letters of credit; no material amounts outstanding under the facilities |
| 2026-09-30 | 224.9 | 478.0 | US$m | Revolver commitment of 500.0 less borrowings of 15.0 and letters of credit of 7.0, stated as 478 net of letters of credit; USD 176 million of cash is held by foreign subsidiaries; the remaining availability of about 28 under other lines and overdraft facilities is excluded because the sources do not state it is committed |

The revolver maturity extends to 2031 but the first-lien springing covenant would apply if borrowings exceeded 30% of the commitment.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| 2028-09-01 | 800.0 | US$m | 3.875% senior notes principal, per the issuer's capital structure table; carrying value 796.9 |
| 2030-12-18 | 1,279.7 | US$m | Term loans principal at final maturity, per the issuer's capital structure table; carrying value 1,270.2; quarterly repayments of 3.2 in the second and third quarters of 2026 and USD 12.9 million of current installments not itemised, so the by-year profile before 2030 is not stated |
| 2031-02-02 | 15.0 | US$m | Revolver borrowings at contractual maturity; classified as current on the balance sheet; commitment of 500.0 undrawn except for 15.0 |

The ladder places each instrument's whole principal at its final maturity because no by-year schedule is printed at 2026-09-30.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis |
|---|---|---|---|---|---|
| Net sales | 2,456.9 | 2,551.2 | 3,489.4 | USD millions | Reported; LTM constructed |
| EBITDA (Reported) | 501.6 | 470.2 | 564.8 | USD millions | Issuer unadjusted EBITDA; LTM constructed |
| EBITDA (Adjusted) | 534.7 | 547.6 | 673.1 | USD millions | Issuer Adjusted EBITDA; LTM constructed |
| Cash interest paid | 64.8 | 68.6 | 85.7 | USD millions | Reported; LTM constructed |
| Total debt | 1,824.0 | 1,625.9 | 2,082.1 | USD millions | Carrying value at period end |
| Cash and equivalents | 359.4 | 626.5 | 224.9 | USD millions | Period end |
| Net debt | 1,464.6 | 999.4 | 1,857.2 | USD millions | Carrying-value debt less cash |
| Total debt / EBITDA (Reported) | 3.64 | 3.46 | 3.69 | x | Calculated |
| Net debt / EBITDA (Reported) | 2.92 | 2.13 | 3.29 | x | Calculated |
| Total debt / EBITDA (Adjusted) | 3.41 | 2.97 | 3.09 | x | Calculated |
| Net debt / EBITDA (Adjusted) | 2.74 | 1.83 | 2.76 | x | Calculated |
| EBITDA (Reported) / cash interest | 7.74 | 6.85 | 6.59 | x | Calculated |
| EBITDA (Adjusted) / cash interest | 8.25 | 7.98 | 7.85 | x | Calculated |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1,824.0 | 359.4 | 1,464.6 | US$m | Reported at 2024-12-31: current installments 10.4 plus Debt 1,813.6, net of discounts and issuance costs of 14.8; term loans and senior notes, no finance lease or securitization carried in debt; contractual principal 1,838.8 |
| FY2025 / 2025-12-31 | 1,625.9 | 626.5 | 999.4 | US$m | Reported at 2025-12-31: Debt 1,625.9 with no current installments, net of discounts and issuance costs of 10.3; term loans and senior notes, no finance lease or securitization carried in debt; contractual principal 1,636.2 |
| 2026-09-30 | 2,082.1 | 224.9 | 1,857.2 | US$m | Reported at 2026-09-30: current installments 27.9 plus Debt 2,054.2, net of discounts and issuance costs of 12.6; term loans, senior notes and revolver borrowings of 15.0, no finance lease or securitization carried in debt; contractual principal 2,094.7 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 2,094.7 | -12.6 | 2,082.1 | US$m | Principal is the sum of the maturity rows: notes 800.0, term loans 1,279.7 and revolver 15.0; reconciling items are unamortized term loan discounts and issuance costs of 9.5 and senior note issuance costs of 3.1, summed in calculation C04; no debt is left out of the ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| EFC Gases & Advanced Materials acquisition paid in cash | 2026-01-02 | 367.0 | 1,366.4 | 2.91 | US$m | Added to FY2025 year-end net debt of 999.4 over FY2025 reported EBITDA of 470.2; quarterly reports state about 367 (annual report about 369) funded with cash on hand; earn-out of up to 30.0 not yet reflected; acquired EBITDA not included in the denominator |
| Micromax acquisition, funded by 450 of add-on term loans and revolver borrowings | 2026-02-02 | 494.0 | 1,860.4 | 3.96 | US$m | Cumulative after the EFC row; the purchase price is the net debt effect whatever the funding mix, because the add-on term loans raise debt and cash equally; quarterly reports state about 494 (annual report about 500); acquired EBITDA not included |
| Kuprion milestone payment | Not supplied: the source states the fourth quarter of 2026 only | 9.7 | 1,870.1 | 3.98 | US$m | Cumulative after the Micromax row; paid after 2026-09-30 and not in the 2026-09-30 balance sheet; transaction effects only, so nine months of operating cash flow, dividends and buybacks are not reflected |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 2,456.9 | 534.7 | US$m | Fiscal year; Adjusted EBITDA is issuer-adjusted EBITDA, not a house adjustment |
| FY2025 / 2025-12-31 | 2,551.2 | 547.6 | US$m | Fiscal year; issuer-adjusted EBITDA; includes 59.0 of divestiture gain removed and 37.1 of executive share grants added back |
| 2026-09-30 | 3,489.4 | 673.1 | US$m | Last twelve months, a twelve-month period like the fiscal years; issuer-adjusted EBITDA; acquired businesses from closing only |

The last-twelve-months row mixes pre-acquisition and post-acquisition months, so its growth over FY2025 is not organic.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolving credit facility (drawn) | 1 | Yes | 15.0 | 0.03 | US$m | Drawn principal only; commitment 500.0; first-priority security; obligors are the Company and MacDermid, Incorporated, guaranteed jointly and severally by certain domestic subsidiaries; cumulative over last-twelve-months reported EBITDA of 564.8 |
| Term loans B-3 including the add-on term loans | 1 | Yes | 1,279.7 | 2.29 | US$m | Principal; pari passu with the revolver as the same first-priority security package, the sources stating the security but no intercreditor ranking between them; same obligors and guarantors; cumulative 1,294.7 over 564.8 |
| 3.875% senior notes due 2028 | 2 | No | 800.0 | 3.71 | US$m | Principal; senior unsecured; guaranteed by generally the domestic subsidiaries that guarantee the Credit Agreement; cumulative 2,094.7 principal over 564.8 differs from carrying-value total leverage of 3.69 by the 12.6 of discounts and costs |

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2025 | 470.2 | US$m | Opening: issuer unadjusted EBITDA for FY2025 (net income plus tax, net interest, depreciation and amortization) |
| Restructuring expense | 5.6 | US$m | Issuer add-back, restructuring; realization not stated |
| Acquisition, integration and transaction expenses | 34.9 | US$m | Issuer add-back, transaction costs; realization not stated |
| Foreign exchange losses on intercompany loans | 28.2 | US$m | Issuer add-back, other stated; non-cash remeasurement |
| Gain on divestitures | -59.0 | US$m | Issuer deduction removing the gain on sale of the flexographic printing plate business |
| Unrealized losses on metals derivative contracts | 16.7 | US$m | Issuer add-back, other stated; unrealized |
| Debt financing costs | 1.8 | US$m | Issuer add-back, other stated |
| 2025 executive share grants | 37.1 | US$m | Issuer add-back, share-based compensation; non-cash |
| Other, net | 12.1 | US$m | Issuer add-back, other stated; components not stated |
| EBITDA (Adjusted), FY2025 | 547.6 | US$m | Closing: issuer Adjusted EBITDA; sum of the opening 470.2 and the eight adjustments of 77.4, no plug |

The bridge is the FY2025 reconciliation as the issuer states it; none of the adjustments is realized savings or run-rate, and realization is not stated for any.

### Period table

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 46 |
| Calculated | 28 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 4 |
| Insufficient Information | 7 |
| Fields present | 22 |
| Fields total | 24 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 5 |

## Calculations

Each row works one figure from the cited pages; the calculation register holds every ratio row.

| ID | Purpose and period | Operation and complete operands | Result | Unit | Source | Limitation |
|---|---|---|---|---|---|---|
| C01 | Net debt, 2024-12-31 | 1,824.0 - 359.4 = 1,464.6 | 1,464.6 | USD millions | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 112 | Carrying-value debt; issuer reports no net debt at this date |
| C02 | Net debt, 2025-12-31 | 1,625.9 - 626.5 = 999.4 | 999.4 | USD millions | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–84; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 112 | Carrying-value debt; before the 2026 acquisitions |
| C03 | Net debt, 2026-09-30 | 2,082.1 - 224.9 = 1,857.2. Increase over 2025-12-31: 1,857.2 - 999.4 = 857.8 | 1,857.2; increase 857.8 | USD millions | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 15 | Carrying-value basis; the issuer's principal-basis figure is 1,869.8; the cash flow statement shows acquisition payments of 865.8 as an outflow |
| C04 | Principal to carrying value, 2026-09-30 | Principal 800.0 + 1,279.7 + 15.0 = 2,094.7. Carrying 796.9 + 1,270.2 + 15.0 = 2,082.1. Reconciling items 9.5 + 3.1 = 12.6, so 2,094.7 - 12.6 = 2,082.1. Issuer net debt 2,094.7 - 224.9 = 1,869.8; carrying net debt 2,082.1 - 224.9 = 1,857.2; difference 1,869.8 - 1,857.2 = 12.6 | Principal 2,094.7; reconciling items -12.6; carrying 2,082.1 | USD millions | EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15–16 | Discounts and costs per the debt note footnotes |
| C05 | Last-twelve-months EBITDA, to 2026-09-30 | Reported: 470.2 + 483.7 - 389.1 = 564.8. Adjusted: 547.6 + 536.8 - 411.3 = 673.1. Net sales: 2,551.2 + 2,813.2 - 1,875.0 = 3,489.4 | Reported 564.8; adjusted 673.1; net sales 3,489.4 | USD millions | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82, 124; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5, 27 | Components are not seasonally adjusted; acquired earnings only from closing |
| C06 | Leverage on adjusted EBITDA, 2026-09-30 and FY2025 | Net: 1,857.2 / 673.1 = 2.76. Total: 2,082.1 / 673.1 = 3.09. FY2025 total: 1,625.9 / 547.6 = 2.97 | 2.76x net and 3.09x total at 2026-09-30 | x | Calculation register | Issuer-adjusted EBITDA; labelled twin of the reported ratios |
| C07 | Last-twelve-months cash interest paid | 68.6 + 76.2 - 59.1 = 85.7. Change in nine-month interest paid: 76.2 - 59.1 = 17.1 | 85.7; change 17.1 | USD millions | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 85; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9 | Nine-month amounts from the release |
| C08 | Last-twelve-months operating cash flow and capital expenditure | Operating cash flow 289.8 + 192.2 - 198.7 = 283.3. Capital expenditure 62.2 + 83.4 - 45.2 = 100.4. Difference 283.3 - 100.4 = 182.9 | 283.3; 100.4; 182.9 | USD millions | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 | Continuing operations; before dividends and acquisitions |
| C09 | Free cash flow | FY2025: 289.8 - 62.2 = 227.6. Nine months 2026: 192.2 - 83.4 = 108.8 | 227.6; 108.8 | USD millions | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 84; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7 | Before dividends, buybacks and acquisitions |
| C17 | Shareholder returns and quarterly cash flow, 2026 | Dividends 59.3 + buybacks 37.7 = 97.0; free cash flow 108.8 - 97.0 = 11.8. Operating cash flow by quarter: -66.6 + 99.6 + 159.2 = 192.2. Third-quarter revolver repayment 35.0 and buybacks 37.7 | 97.0; 11.8; 192.2; 35.0; 37.7 | USD millions | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 8 | First-quarter outflow of 66.6 reflects working capital; all buybacks fall in the third quarter |
| C10 | Liquidity, 2026-09-30 | Undrawn revolver: 500.0 - 15.0 - 7.0 = 478.0. Cash 224.9 plus undrawn revolver 478.0 = 702.9. Current installments 27.9 - revolver borrowings 15.0 = 12.9. Net cash decrease 626.5 - 224.9 = 401.6. Cash held by foreign subsidiaries 176 of 224.9 | 478.0; 702.9; 12.9; 401.6; foreign cash 176 | USD millions | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15–18 | Assumes letters of credit sit under the revolver as the report states; excludes uncommitted lines |
| C11 | Leverage and cover on reported EBITDA | 2026-09-30: net 1,857.2 / 564.8 = 3.29; total 2,082.1 / 564.8 = 3.69; cover 564.8 / 85.7 = 6.59. FY2025: net 999.4 / 470.2 = 2.13; total 1,625.9 / 470.2 = 3.46; cover 470.2 / 68.6 = 6.85. FY2024: net 1,464.6 / 501.6 = 2.92 | 3.29x; 3.69x; 6.59x; 2.13x; 3.46x; 6.85x; 2.92x | x | Calculation register | Carrying-value debt over reported EBITDA |
| C12 | Pro forma net debt on the FY2025 year-end | 999.4 + 367.0 = 1,366.4; 1,366.4 + 494.0 = 1,860.4; 1,860.4 + 9.7 = 1,870.1. Leverage over 470.2: 1,366.4 / 470.2 = 2.91; 1,860.4 / 470.2 = 3.96; 1,870.1 / 470.2 = 3.98 | 1,366.4; 1,860.4; 1,870.1 | USD millions | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 15 | Transaction effects only; acquired EBITDA not in the denominator |
| C13 | Segment ties, Q3 2026 | Net sales 779.6 + 215.7 = 995.3; Adjusted EBITDA 148.3 + 42.7 = 191.0 | 995.3; 191.0 | USD millions | 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27 | Segment total equals consolidated, so no corporate row |
| C14 | Debt instrument carrying values, 2026-09-30 | 1,270.2 + 796.9 + 15.0 = 2,082.1 | 2,082.1 | USD millions | 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 15 | Equals Total Debt on the balance sheet |
| C15 | Statement identities | Balance sheet: liabilities 2,412.0 + equity 2,689.4 = 5,101.4 (2025); 2,475.5 + 2,398.4 = 4,873.9 (2024); 2,974.1 + 2,887.1 = 5,861.2 (2026-09-30). Cash roll-forward: 359.4 + 267.1 = 626.5; 289.3 + 70.1 = 359.4; 626.5 - 401.6 = 224.9; 359.4 + 234.9 = 594.3. Cash flows: 289.8 + 286.1 - 320.4 + 11.6 = 267.1; 363.6 - 73.8 - 206.6 - 13.1 = 70.1; 192.2 - 949.0 + 355.1 + 0.1 = -401.6; 198.7 + 304.9 - 281.1 + 12.4 = 234.9 | All identities hold | USD millions | 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 83–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7 | Compared at printed precision |
| C16 | EBITDA bridge, FY2025 | 5.6 + 34.9 + 28.2 - 59.0 + 16.7 + 1.8 + 37.1 + 12.1 = 77.4; 470.2 + 77.4 = 547.6 | 77.4; 547.6 | USD millions | 10-K_2025-12-31_esi-20251231.htm.jsonl, page 124 | No plug |

## Gaps

- High: The covenant EBITDA definition and the reported first lien net leverage ratio are not printed; only a compliance statement is given. Covenant headroom is therefore not established, and no covenant conclusion should rest on the consolidated leverage ratios computed here. The executed Credit Agreement and the compliance certificate would close this.
Basis: 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 16–18; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 113
- Medium: Last-twelve-months EBITDA to 2026-09-30 includes EFC from 2026-01-02 and Micromax from 2026-02-02 only, while debt is counted in full, so leverage at 2026-09-30 is overstated against run-rate. Pro forma acquired EBITDA for the full period is not stated; the issuer states only a nine-month figure assuming the Micromax acquisition closed on 2026-01-01 and a 2026 guidance figure.
Basis: EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, pages 17–18; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 4
- Medium: The term loan principal is not scheduled by year at 2026-09-30, and USD 12.9 million of current installments beyond the USD 15.0 million revolver borrowings is not itemised. The maturity ladder places the term loans at 2030-12-18, so earlier amortisation is not shown. The Credit Agreement amortisation schedule would close this.
Basis: 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15–16; EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 8
- Medium: The filings print a dash for several lines in some periods, and each dash is treated as not supplied rather than zero: current installments of long-term debt at 2025-12-31, income from discontinued operations in FY2025, acquisition spend in FY2025 and nine months 2025, debt proceeds in FY2025 and nine months 2025, share repurchases in FY2024, financing fees in FY2025 and nine months 2025, disposal and divestiture proceeds in FY2024 and nine months 2026, non-controlling interest in the third quarters, and the add-backs for the inventory step-up, the divestiture result, debt financing costs and contingent consideration in the periods where they did not arise. The lines affected are visible in the statement tables and none is needed for a ratio; confirmation from the issuer would close them.
Basis: 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–7
- Low: Some statement lines exist in only one type of filing: net income from continuing operations, discontinued operations and held-for-sale lines appear in the annual statements only, and the contingent consideration line, lines of credit and the financing fee line appear in the quarterly statements only. The interim columns show those lines as not supplied.
Basis: 10-K_2025-12-31_esi-20251231.htm.jsonl, pages 82–85; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 5–7
- Low: The undrawn revolver at 2024-12-31 is not stated; the annual report gives unused capacity of USD 368 million at 2025-12-31 and combined availability of about USD 390 million across all facilities at both year-ends. The liquidity table shows the 2024 figure as not supplied.
Basis: 10-K_2025-12-31_esi-20251231.htm.jsonl, page 114
- Low: Quarterly lease liabilities are not printed in the third-quarter report, so the lease obligation at 2026-09-30 is not supplied; the annual report gives USD 86.0 million at 2025-12-31 against USD 81.6 million a year earlier. Lease liabilities sit in accrued and other liabilities and are not in Total Debt.
Basis: 10-K_2025-12-31_esi-20251231.htm.jsonl, page 121; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 6–7
- Low: The 10-Q prints no cash interest or tax supplement, so nine-month cash interest paid comes from the third-quarter release; a Q4 2025 stand-alone period and the 2025 quarterly filings are not supplied, so any quarterly trend before 2026 is not available.
Basis: EX-99.1_2026-10-21_aearningsreleaseex99120269.htm.jsonl, page 9; 10-K_2025-12-31_esi-20251231.htm.jsonl, page 85
- Low: The segment note gives no corporate or elimination line and no segment Adjusted EBITDA by product line, so Micromax and EFC earnings are not stated separately; maintenance and growth capital expenditure are not split; and the revolver borrowings of USD 15.0 million are presented within current installments although the facility matures in 2031.
Basis: 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 15–16; 10-Q_2026-09-30_esi-20260930.htm.jsonl, pages 26–27; 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 7
- Low: The 10-Q states that certain prior-year amounts were reclassified but does not quantify them, so the 2025 comparative columns may differ slightly from the 2025 annual report presentation.
Basis: 10-Q_2026-09-30_esi-20260930.htm.jsonl, page 12

## Next module

The orchestrator selects the next module.
