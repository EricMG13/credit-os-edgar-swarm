# CP-1 Financial foundation for Amentum Holdings, Inc. (amtm)

## Request

Amentum Holdings, Inc. (issuer id amtm), as of 2026-11-05, credit snapshot pathway. Scope: statements, debt, liquidity, coverage and reported-basis credit metrics from the seven supplied filings and releases, in USD millions, to the third fiscal quarter ended 2026-07-03.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-10-03_amtm-20251003.htm.jsonl | Annual report on Form 10-K of Amentum Holdings, Inc. for the fiscal year ended October 3, 2025 (53 weeks), with the auditor's report | 2025-11-25 | 8273d25a00529c2b44154e4079fb17aed384ffabfb0b6e916ff874e87d184e2c | Audited FY2023 to FY2025 statements, debt note, segment Adjusted EBITDA, receivable sales, leases and pensions |
| 10-Q_2026-01-02_amtm-20260102.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended January 2, 2026 (unaudited) | 2026-02-10 | 53306aefcf67aafc6e963ada6d826aebfcc9ef2ae12c58e6020ff2739d2c4784 | Balance sheet at 2026-01-02, interest paid and debt table before the April 2026 amendment |
| 10-Q_2026-04-03_amtm-20260403.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended April 3, 2026 (unaudited) | 2026-05-12 | 39d2941eedc33b6b8a6975be5d0ab047229748e579ab149e336916a6515e4e3c | Balance sheet at 2026-04-03, interest paid, debt table and the subsequent-event note |
| 10-Q_2026-07-03_amtm-20260703.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended July 3, 2026 (unaudited) | 2026-08-11 | e0cfefb75002bb2378240c82d12b55245568de0ae66e976bd3399e669ec7e5df | Nine-month statements, balance sheet at 2026-07-03, debt note, facility availability, receivable sales, backlog |
| EX-99.1_2026-02-09_exhibit991-february92026.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of fiscal 2026, quarter ended January 2, 2026 | 2026-02-09 | f4a0837903a2e7b5b24df97e0fe38362855d47b722b3db774277ece94a59d816 | Quarter EBITDA reconciliation, last twelve months Adjusted EBITDA and net leverage at 2026-01-02 |
| EX-99.1_2026-05-11_exhibit991-may112026.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of fiscal 2026, quarter ended April 3, 2026 | 2026-05-11 | 70874f67722755b78375d913af6706b9925581a1e0d597e3dc867f0ae2da1e41 | Quarter and six-month EBITDA reconciliation, last twelve months Adjusted EBITDA and net leverage at 2026-04-03 |
| EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of fiscal 2026, quarter ended July 3, 2026 | 2026-08-10 | cf451c4e10bf61fb7f1fdcb128f9d46a9635fb48c3681eadc79c1a3f2194b093 | Quarter and nine-month EBITDA reconciliation, last twelve months Adjusted EBITDA and net leverage at 2026-07-03 |
| Source readiness (CP-0) | Earlier module output supplied by CP-OS: source readiness for this run | not stated | 95a8497735ccb0e6eef9c6a563094da6ff5999ab9dc4e50ba0232d99b76e210d | Source dates, perimeter limits and gaps carried forward |

## Findings

### Bottom line

Leverage is falling, but cash generation is weaker than earnings suggest: net debt was 3.32x LTM reported EBITDA at 3 July 2026 against 3.53x at fiscal 2025 year-end, and nine-month operating cash flow of USD 235 million includes USD 120 million of receivable sales.
Basis: calculation C47; calculation C29; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4, 9

Interest is covered 3.53x by reported EBITDA and no named facility or note matures before 2031, so the near-term risk is cash conversion rather than refinancing. Comparisons with fiscal 2024 are not like for like because that year excludes the acquired business, so trends start at fiscal 2025.
Basis: calculation C48; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 11–12; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 118

### Key findings

Net debt fell from USD 3,506 million at fiscal 2025 year-end to USD 3,366 million at 3 July 2026 while LTM reported EBITDA rose from USD 994 million to USD 1,013 million, so net leverage eased from 3.53x to 3.32x and total debt leverage from 3.97x to 3.78x. The USD 125 million voluntary payment on Term Loan B on 30 June 2026 cut debt and cash together, so it left net debt unchanged.
Basis: calculation C19; calculation C25; calculation C8; calculation C46; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 12

Cash interest paid fell from USD 306 million in fiscal 2025 to USD 287 million on an LTM basis at 3 July 2026, lifting reported EBITDA cover from 3.25x to 3.53x. The April 2026 amendment lowered the Term Loan B margin from 2.25% to 1.75% over Term SOFR, but the filings do not quantify the saving.
Basis: calculation C14; calculation C48; calculation C85; 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 116, 147; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 12

Operating cash flow for the nine months to 3 July 2026 was USD 235 million against USD 273 million a year earlier, and a higher balance of receivables sold under the receivable purchase agreement supplied USD 120 million of it against USD 42 million a year earlier, so operating cash flow before receivable sales was USD 115 million against USD 231 million. Working capital absorbed USD 303 million, chiefly accrued compensation (USD 160 million) and payables (USD 198 million); the first-quarter operating outflow of USD 136 million reversed in the second and third quarters, which fits timing rather than erosion but cannot be proved from the filings.
Basis: calculation C59; calculation C60; calculation C61; calculation C97; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4, 9

Capital expenditure is light at USD 27 million in fiscal 2025, 0.19% of revenue, so operating cash flow less capital expenditure of USD 516 million tracks operating cash flow; the issuer's own free cash flow excludes contributions to equity method investments, which were USD 56 million in fiscal 2025 and USD 53 million in the nine months to 3 July 2026.
Basis: calculation C63; calculation C62; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 5

Cash of USD 459 million and revolver availability of USD 917 million give liquidity of USD 1,376 million at 3 July 2026, although USD 123 million of the cash sits in consolidated joint ventures that the filings do not say is freely available. After the April 2026 amendment the revolver and Term Loan A mature on 24 April 2031, Term Loan B on 27 September 2031 and the senior notes on 1 August 2032, so scheduled amortisation is the only near-term repayment among the named instruments, apart from USD 9 million of other debt whose maturity is not stated.
Basis: calculation C52; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2, 10–13

Reported EBITDA is calculated from the issuer's own reconciliation lines because the annual report states only Adjusted EBITDA. The issuer's adjusted measure adds USD 110 million in fiscal 2025 and USD 76 million in the nine months to 3 July 2026, mainly acquisition costs and share-based compensation, and on the same carrying-value debt it would put net leverage at 2.98x.
Basis: calculation C64; calculation C65; calculation C50; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 16

### Contrary evidence and what would change the view

The strongest contrary reading is that the cash weakness is seasonal and that reported EBITDA understates improvement: adjusted net leverage is 2.98x and the first-quarter outflow had reversed by the third quarter. The view would turn more positive if operating cash flow before receivable sales recovers towards the prior-year level in the fourth quarter, and more negative if the balance of sold receivables stops growing, if federal funding delays push working capital out again, or if the unquantified interest saving from the amendment does not appear in cash interest.
Basis: calculation C50; calculation C59; calculation C60; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4, 9, 21

### Period table

| Period | Start | End |
|---|---|---|
| FY2023 | 2022-10-01 | 2023-09-29 |
| FY2024 | 2023-09-30 | 2024-09-27 |
| FY2025 | 2024-09-28 | 2025-10-03 |
| 9M 2025 | 2024-09-28 | 2025-06-27 |
| 9M 2026 | 2025-10-04 | 2026-07-03 |
| Q1 2026 | 2025-10-04 | 2026-01-02 |
| H1 2026 | 2025-10-04 | 2026-04-03 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-10-03_amtm-20251003.htm.jsonl | Annual report on Form 10-K, audited | FY2023 to FY2025; balance sheets at 2024-09-27 and 2025-10-03 | USD | millions | Consolidated Amentum Holdings, Inc. and subsidiaries; the acquired CMS business is in the balance sheets from 2024-09-27 and in operations from FY2025 | US GAAP | Tier 1 (audited statements) | Annual statements, debt note, segment Adjusted EBITDA, receivable sales, leases, pensions, interest and tax paid | FY2025 has 53 weeks; FY2024 and FY2023 operations exclude CMS; maturity table predates the 2026-04-24 amendment |
| 10-Q_2026-01-02_amtm-20260102.htm.jsonl | Quarterly report on Form 10-Q, unaudited | Three months to 2026-01-02 and 2024-12-27; balance sheet 2026-01-02 | USD | millions | Consolidated | US GAAP | Tier 2b (unaudited; auditor review not stated in the text) | Q1 balance sheet, interest paid, debt table, revolver availability | Debt terms predate the amendment |
| 10-Q_2026-04-03_amtm-20260403.htm.jsonl | Quarterly report on Form 10-Q, unaudited | Three and six months to 2026-04-03; balance sheet 2026-04-03 | USD | millions | Consolidated | US GAAP | Tier 2b (unaudited; auditor review not stated in the text) | H1 balance sheet, interest paid, debt table, amendment as subsequent event | Debt terms predate the amendment |
| 10-Q_2026-07-03_amtm-20260703.htm.jsonl | Quarterly report on Form 10-Q, unaudited | Three and nine months to 2026-07-03; balance sheet 2026-07-03 | USD | millions | Consolidated | US GAAP | Tier 2b (unaudited; auditor review not stated in the text) | Nine-month statements, latest balance sheet, post-amendment debt, receivable sales, backlog | No maturity ladder after the amendment |
| EX-99.1_2026-02-09_exhibit991-february92026.htm.jsonl | Earnings release, unaudited | Three months to 2026-01-02 | USD | millions | Consolidated | US GAAP | Tier 2b (issuer release, unaudited) | EBITDA (non-GAAP) reconciliation, last twelve months Adjusted EBITDA, net leverage | Non-GAAP measures are management definitions |
| EX-99.1_2026-05-11_exhibit991-may112026.htm.jsonl | Earnings release, unaudited | Three and six months to 2026-04-03 | USD | millions | Consolidated | US GAAP | Tier 2b (issuer release, unaudited) | EBITDA (non-GAAP) reconciliation, last twelve months Adjusted EBITDA, net leverage | Non-GAAP measures are management definitions |
| EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl | Earnings release, unaudited | Three and nine months to 2026-07-03 | USD | millions | Consolidated | US GAAP | Tier 2b (issuer release, unaudited) | EBITDA (non-GAAP) reconciliation, last twelve months Adjusted EBITDA, net leverage, guidance | Non-GAAP measures are management definitions |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Amentum Holdings, Inc. | Issuer, registrant and borrower under the credit facility; guarantor of the senior notes | Friday nearest the end of September (FY2025 ended 2025-10-03, FY2024 2024-09-27, FY2023 2023-09-29) | USD | millions | Consolidated with subsidiaries and consolidated joint ventures that are variable interest entities | US GAAP | FY2023, FY2024, FY2025; three quarters of fiscal 2026 to 2026-07-03 |
| Guarantor subsidiaries | Guarantors of the credit facility and the senior notes: substantially all wholly owned material domestic restricted subsidiaries | Not applicable | USD | millions | Not reported separately | US GAAP | Not supplied: no guarantor-level statements in the sources |
| Amentum Parent Holdings LLC | Predecessor and accounting acquirer; its history before 2024-09-27 is the issuer's history | As the issuer | USD | millions | Legacy Amentum without CMS before 2024-09-27 | US GAAP | FY2023 and FY2024 operations and cash flows |
| Critical Mission Solutions business of Jacobs Solutions Inc. (CMS) | Acquired business, merged in on 2024-09-27 | As the issuer | USD | millions | In the balance sheets from 2024-09-27 and in operations and cash flows from FY2025 | US GAAP | FY2025 onward |

The credit facility was amended on 24 April 2026, after the second-quarter balance sheet date of 3 April 2026; the third-quarter balance sheet reflects it and no earlier period figure is restated for it. The USD 125 million voluntary payment on Term Loan B on 30 June 2026 falls inside the third quarter. No event after 3 July 2026 is stated in the sources.
Basis: 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 17; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 11–12

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) calculated for fiscal years | 10-K_2025-10-03_amtm-20251003.htm.jsonl; EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl | Derivation | Not stated in the annual report; the releases state EBITDA (non-GAAP) before add-backs for interim periods | 389 (FY2023), 567 (FY2024), 994 (FY2025) | The issuer states only Adjusted EBITDA for fiscal years; the release definition (net income attributable + depreciation + amortization + interest expense and other, net + provision for income taxes) is applied to the audited statements | FY2023, FY2024, FY2025 |
| Cash interest paid shown as a positive amount | 10-K_2025-10-03_amtm-20251003.htm.jsonl; 10-Q_2026-01-02_amtm-20260102.htm.jsonl; 10-Q_2026-04-03_amtm-20260403.htm.jsonl; 10-Q_2026-07-03_amtm-20260703.htm.jsonl | Sign convention | Printed in brackets as interest paid, for example (306) for FY2025 | 306 (FY2025) | Cash paid is stated as a positive amount, as the method requires | All periods |
| Total Debt at carrying value | 10-K_2025-10-03_amtm-20251003.htm.jsonl; 10-Q_2026-07-03_amtm-20260703.htm.jsonl | Aggregation | Current portion of long-term debt and long-term debt, net of current portion, printed separately | 3,943 (FY2025), 3,825 (2026-07-03) | Balance-sheet carrying value net of discount and issuance costs; principal is shown beside it in the net debt table | FY2024, FY2025, 2026-01-02, 2026-04-03, 2026-07-03 |
| Last twelve months construction | 10-K_2025-10-03_amtm-20251003.htm.jsonl; EX-99.1_2026-02-09_exhibit991-february92026.htm.jsonl; EX-99.1_2026-05-11_exhibit991-may112026.htm.jsonl; EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl | Period construction | Full year, current stub and prior-year stub printed separately | LTM to 2026-01-02, 2026-04-03 and 2026-07-03 | Latest full year plus current stub less prior-year stub; reported EBITDA, Adjusted EBITDA and cash interest only | Interim dates |
| No currency, unit or perimeter conversion | 10-K_2025-10-03_amtm-20251003.htm.jsonl; 10-Q_2026-07-03_amtm-20260703.htm.jsonl | None | USD millions throughout | USD millions throughout | All statements are printed in USD millions, so no foreign exchange rate is used | All periods |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Revenues | 7,865 | 8,388 | 14,393 | 10,468 | 10,205 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Cost of revenues | -7,083 | -7,590 | -12,880 | -9,372 | -9,174 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Selling, general, and administrative expenses | -297 | -353 | -616 | -440 | -361 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Amortization of intangibles | -298 | -228 | -479 | -358 | -282 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Equity earnings of non-consolidated subsidiaries | 56 | 74 | 62 | 47 | 73 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Goodwill impairment charges | -186 | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported; FY2023 only, other columns print a dash or no line | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Operating income | 57 | 291 | 480 | 345 | 461 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Interest expense and other, net | -397 | -438 | -353 | -261 | -209 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Loss on extinguishment of debt | Not supplied: printed as a dash | -45 | -12 | -3 | -16 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Gain on acquisition of controlling interest | Not supplied: printed as a dash | 69 | Not supplied: printed as a dash | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported; FY2024 only, the other annual columns print a dash and the quarterly statements carry no line | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Income (loss) before income taxes | -340 | -123 | 115 | 81 | 236 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| (Provision) benefit for income taxes | 19 | 40 | -56 | -59 | -72 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Net income (loss) including non-controlling interests | -321 | -83 | 59 | 22 | 164 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Less: net income attributable to non-controlling interests | 7 | 1 | 7 | 4 | Not supplied: printed as a dash | USD millions | Reported as printed; the line is signed as it adds to net income including non-controlling interests | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Net income (loss) attributable to common shareholders | -314 | -82 | 66 | 26 | 164 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Diluted earnings (loss) per share | -3.49 | -0.90 | 0.27 | 0.11 | 0.67 | USD per share | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Depreciation | 27 | 23 | 40 | 29 | 25 | USD millions | Reported in the cash flow statement; sits within cost of revenues | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| EBITDA (Reported) | 389 | 567 | 994 | 733 | 752 | USD millions | Calculated: net income attributable to common shareholders + depreciation + amortization of intangibles + interest expense and other, net + provision for income taxes; the issuer's own non-GAAP EBITDA before add-backs, stated by the issuer for interim periods and calculated here for fiscal years | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3; 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| EBITDA (Adjusted) | 596 | 618 | 1,104 | 804 | 828 | USD millions | Reported by the issuer as Adjusted EBITDA attributable to Amentum Holdings, Inc.; adds back acquisition, transaction and integration costs, loss on extinguishment of debt, share-based compensation and non-cash items, less utilization of fair market value adjustments | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 16 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net income (loss) including non-controlling interests | -321 | -83 | 59 | 22 | 164 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Depreciation | 27 | 23 | 40 | 29 | 25 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Amortization of intangibles | 298 | 228 | 479 | 358 | 282 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Amortization of deferred loan costs and original issue discount | 21 | 22 | 11 | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Goodwill impairment charges | 186 | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Loss on extinguishment of debt | Not supplied: line not in this report | Not supplied: line not in this report | Not supplied: line not in this report | 3 | 16 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Derivative instruments | 21 | 37 | 10 | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Equity earnings of non-consolidated subsidiaries | -56 | -74 | -62 | -47 | -73 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Distributions from equity method investments | 49 | 61 | 76 | 57 | 87 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Deferred income taxes | -62 | -115 | -47 | -44 | 11 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Stock-based compensation | 3 | 18 | 21 | 15 | 23 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Gain on acquisition of controlling interest | Not supplied: printed as a dash | -69 | Not supplied: printed as a dash | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Other operating items | 2 | 14 | 17 | 16 | 3 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Accounts receivable, net | -68 | 81 | -171 | -154 | -11 | USD millions | Reported; change in operating assets and liabilities | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Prepaid expenses and other assets | 56 | 78 | 81 | 75 | 11 | USD millions | Reported; change in operating assets and liabilities | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Accounts payable, contract liabilities, and other current liabilities | -24 | -211 | 54 | -28 | -198 | USD millions | Reported; change in operating assets and liabilities | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Accrued compensation and benefits | -82 | 43 | 28 | -9 | -160 | USD millions | Reported; change in operating assets and liabilities | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Other long-term liabilities | 17 | -6 | -53 | -20 | 55 | USD millions | Reported; change in operating assets and liabilities | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Net Cash from Operating Activities | 67 | 47 | 543 | 273 | 235 | USD millions | Reported; includes net inflow from sold receivables (USD 177 million FY2024, USD 3 million FY2025, USD 42 million 9M 2025, USD 120 million 9M 2026) | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Acquisitions, net of cash acquired | Not supplied: printed as a dash | 488 | -70 | -70 | Not supplied: printed as a dash | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Divestitures, net of cash conveyed | Not supplied: printed as a dash | Not supplied: printed as a dash | 365 | 358 | 2 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Purchase of property and equipment | -12 | -11 | -27 | -18 | -22 | USD millions | Reported; total capital expenditure, no maintenance and growth split stated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Contributions to equity method investments | -17 | -1 | -56 | -36 | -53 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Return of capital from equity method investments | 14 | Not supplied: printed as a dash | 19 | 2 | 23 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Other investing items | -2 | -1 | -3 | Not supplied: printed as a dash | 2 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Net Cash from Investing Activities | -17 | 475 | 228 | 236 | -48 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Borrowings on revolving credit facilities | 1,201 | 562 | 1,146 | 858 | 2,403 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Payments on revolving credit facilities | -1,201 | -562 | -1,146 | -858 | -2,403 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Proceeds from borrowing under the term loans | Not supplied: printed as a dash | 2,620 | Not supplied: printed as a dash | Not supplied: printed as a dash | 2,991 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Repayments of borrowings under the credit agreement | -34 | -4,177 | -750 | -200 | -3,125 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Proceeds from issuance of Senior Notes | Not supplied: printed as a dash | 1,000 | Not supplied: printed as a dash | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Payments of debt issuance fees | Not supplied: printed as a dash | -38 | Not supplied: printed as a dash | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Repayments of borrowings under other agreements | -67 | -13 | -9 | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Capital contribution | Not supplied: printed as a dash | 235 | Not supplied: printed as a dash | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Capital contribution from non-controlling interests | 13 | Not supplied: printed as a dash | 3 | Not supplied: line not in this report | Not supplied: line not in this report | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Distributions to non-controlling interests | -24 | -6 | -35 | -21 | -23 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Other financing items | Not supplied: printed as a dash | -3 | 1 | -10 | -8 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Net Cash from Financing Activities | -112 | -382 | -790 | -231 | -165 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| FX Effect on Cash | 1 | 7 | 4 | 8 | Not supplied: printed as a dash | USD millions | Reported; the 9M 2026 column prints a dash and the other lines add to the net change without it | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Net Cash Change | -61 | 147 | -15 | 286 | 22 | USD millions | Reported; operating + investing + financing + FX effect | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Opening Cash | 366 | 305 | 452 | 452 | 437 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Closing Cash | 305 | 452 | 437 | 738 | 459 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4–5 |
| Cash Interest Paid | 362 | 373 | 306 | 194 | 175 | USD millions | Reported as interest paid in the supplemental disclosure, printed in brackets and stated here as the positive amount paid; under US GAAP it sits in operating activities | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 5 |
| Income taxes paid, net of receipts | 26 | 95 | 107 | 67 | 26 | USD millions | Reported in the supplemental disclosure, printed in brackets and stated here as the positive amount paid | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 5 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Cash and cash equivalents | 452 | 437 | 247 | 428 | 459 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Accounts receivable, net | 2,401 | 2,479 | 2,526 | 2,496 | 2,553 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Prepaid expenses and other current assets | 231 | 197 | 187 | 173 | 177 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Total current assets | 3,084 | 3,113 | 2,960 | 3,097 | 3,189 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Property and equipment, net | 144 | 114 | 108 | 105 | 108 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Equity method investments | 123 | 196 | 218 | 216 | 204 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Goodwill | 5,556 | 5,703 | 5,703 | 5,698 | 5,703 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Intangible assets, net | 2,623 | 1,955 | 1,861 | 1,769 | 1,675 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Other long-term assets | 444 | 379 | 348 | 285 | 320 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Total Assets | 11,974 | 11,460 | 11,198 | 11,170 | 11,199 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Current portion of long-term debt | 36 | 42 | 41 | 40 | 54 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Accounts payable | 764 | 892 | 871 | 832 | 825 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Accrued compensation and benefits | 696 | 705 | 526 | 618 | 546 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Contract liabilities | 113 | 227 | 203 | 180 | 171 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Other current liabilities | 356 | 488 | 447 | 421 | 498 | USD millions | Reported; includes cash collected for the purchaser of sold receivables and operating lease current portion | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Total current liabilities | 1,965 | 2,354 | 2,088 | 2,091 | 2,094 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Long-term debt, net of current portion | 4,643 | 3,901 | 3,894 | 3,887 | 3,771 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Deferred tax liabilities | 370 | 260 | 257 | 259 | 273 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Other long-term liabilities | 444 | 325 | 297 | 230 | 272 | USD millions | Reported; includes the long-term portion of operating lease liabilities | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Total Liabilities | 7,422 | 6,840 | 6,536 | 6,467 | 6,410 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Common stock | 2 | 2 | 2 | 2 | 2 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Additional paid-in capital | 4,962 | 4,924 | 4,931 | 4,935 | 4,946 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Retained deficit | -527 | -461 | -417 | -363 | -297 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Accumulated other comprehensive income | 23 | 40 | 40 | 35 | 44 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Total Amentum shareholders' equity | 4,460 | 4,505 | 4,556 | 4,609 | 4,695 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Non-controlling interests | 92 | 115 | 106 | 94 | 94 | USD millions | Reported | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Total Equity | 4,552 | 4,620 | 4,662 | 4,703 | 4,789 | USD millions | Reported as total shareholders' equity, including non-controlling interests | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Total Debt | 4,679 | 3,943 | 3,935 | 3,927 | 3,825 | USD millions | Calculated: current portion of long-term debt + long-term debt, net of current portion; balance-sheet carrying value net of discount and issuance costs, not principal | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Cash & Equivalents | 452 | 437 | 247 | 428 | 459 | USD millions | Reported; includes cash held in consolidated joint ventures | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolver | Revolving credit facility | Not supplied: not stated | Not applicable | 0 | 1,000 | Secured by substantially all assets, first-priority liens; guaranteed by substantially all wholly owned material domestic restricted subsidiaries | 1 (senior secured, first-priority liens) | USD | 0 | Not applicable | Term SOFR plus 1.25% to 2.00% by first lien leverage | Floating | Term SOFR | 125 to 200 | Not applicable | 2031-04-24 | Not applicable | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 11–12; 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 145, 148–149 |
| Term Loan A | Senior secured term loan | Not supplied: not stated | 1,400 | 1,400 | 1,400 | Secured by substantially all assets, first-priority liens; guaranteed by substantially all wholly owned material domestic restricted subsidiaries | 1 (senior secured, first-priority liens) | USD | 1,400 | Not applicable | Term SOFR plus 1.25% to 2.00% by first lien leverage | Floating | Term SOFR | 125 to 200 | Not applicable | 2031-04-24 | 35 | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 11–12; 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 148–149 |
| Term Loan B | Senior secured term loan | Not supplied: not stated | 1,466 | 1,466 | 1,466 | Secured by substantially all assets, first-priority liens; guaranteed by substantially all wholly owned material domestic restricted subsidiaries | 1 (senior secured, first-priority liens) | USD | 1,466 | Not applicable | Term SOFR plus 1.75% (2.25% before the amendment) | Floating | Term SOFR | 175 | Not applicable | 2031-09-27 | 15.91 | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 10–12; 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 147–149 |
| Senior notes | 7.250% senior notes | Not supplied: not stated | 1,000 | 1,000 | 1,000 | Guarantees stated senior unsecured; the same text names the trustee also as collateral agent; indenture not supplied | 2 (senior unsecured guarantees as stated) | USD | 1,000 | Not applicable | 7.250% fixed, interest on 1 February and 1 August | Fixed | Not applicable | Not applicable | Not applicable | 2032-08-01 | 0 | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 10, 12; 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 149–150 |
| Other debt | Other borrowings, not described | Not supplied: not stated | 9 | 9 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | USD | 9 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 10 |
| Financing cost adjustment | Unamortized original issue discount and deferred financing costs | -50 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -50 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 10 |

Total debt carrying value at 3 July 2026 is USD 3,825 million: principal of USD 3,875 million less USD 50 million of unamortized discount and costs; instrument-level carrying values are not disclosed.
Basis: calculation C74; calculation C82; calculation C83; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 10

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) LTM to 2026-01-02 | LTM to 2026-01-02 | USD 994m | USD 244m | USD 252m | USD 986m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; EX-99.1_2026-02-09_exhibit991-february92026.htm.jsonl, pages 11–12 | Stub figures are the issuer's EBITDA (non-GAAP) before add-backs; fiscal 2025 is calculated from the audited statements |
| EBITDA (Reported) LTM to 2026-04-03 | LTM to 2026-04-03 | USD 994m | USD 495m | USD 493m | USD 996m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; EX-99.1_2026-05-11_exhibit991-may112026.htm.jsonl, pages 11–13 | Stub figures are the issuer's EBITDA (non-GAAP) before add-backs; fiscal 2025 is calculated from the audited statements |
| EBITDA (Reported) LTM to 2026-07-03 | LTM to 2026-07-03 | USD 994m | USD 752m | USD 733m | USD 1,013m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, pages 10–12 | Stub figures are the issuer's EBITDA (non-GAAP) before add-backs; fiscal 2025 is calculated from the audited statements |
| EBITDA (Adjusted) LTM to 2026-01-02 | LTM to 2026-01-02 | USD 1,104m | USD 263m | USD 262m | USD 1,105m | Verified | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; EX-99.1_2026-02-09_exhibit991-february92026.htm.jsonl, pages 11–12 | Equals the last twelve months Adjusted EBITDA the issuer states in the release |
| EBITDA (Adjusted) LTM to 2026-04-03 | LTM to 2026-04-03 | USD 1,104m | USD 538m | USD 530m | USD 1,112m | Verified | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; EX-99.1_2026-05-11_exhibit991-may112026.htm.jsonl, pages 11–13 | Equals the last twelve months Adjusted EBITDA the issuer states in the release |
| EBITDA (Adjusted) LTM to 2026-07-03 | LTM to 2026-07-03 | USD 1,104m | USD 828m | USD 804m | USD 1,128m | Verified | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, pages 10–12 | Equals the last twelve months Adjusted EBITDA the issuer states in the release |
| Cash interest paid LTM to 2026-01-02 | LTM to 2026-01-02 | USD 306m | USD 47m | USD 39m | USD 314m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 4 | Interest paid from the supplemental cash flow disclosure |
| Cash interest paid LTM to 2026-04-03 | LTM to 2026-04-03 | USD 306m | USD 130m | USD 133m | USD 303m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 5 | Interest paid from the supplemental cash flow disclosure |
| Cash interest paid LTM to 2026-07-03 | LTM to 2026-07-03 | USD 306m | USD 175m | USD 194m | USD 287m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 5 | Interest paid from the supplemental cash flow disclosure |
| Revenues LTM to 2026-07-03 | LTM to 2026-07-03 | USD 14,393m | USD 10,205m | USD 10,468m | USD 14,130m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 | Fiscal 2025 has 53 weeks and includes the acquired business for the full year |
| Operating income LTM to 2026-07-03 | LTM to 2026-07-03 | USD 480m | USD 461m | USD 345m | USD 596m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 | As reported |
| Net income attributable to common shareholders LTM to 2026-07-03 | LTM to 2026-07-03 | USD 66m | USD 164m | USD 26m | USD 204m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 | As reported |
| Operating cash flow LTM to 2026-07-03 | LTM to 2026-07-03 | USD 543m | USD 235m | USD 273m | USD 505m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 | Includes net inflow from sold receivables, which differs by period |
| Capital expenditure LTM to 2026-07-03 | LTM to 2026-07-03 | USD 27m | USD 22m | USD 18m | USD 31m | Calculated | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 | Purchase of property and equipment, stated as the positive amount paid |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 4,679 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; calculation C16 | 567 | calculation C2; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 | FY2024 / 2024-09-27 | USD | US$m | Not calculable: year-end debt includes the acquired business but FY2024 EBITDA excludes it | Not Calculable | Tier 1 | Perimeters differ: the 2024-09-27 balance sheet includes CMS financing, FY2024 EBITDA does not include CMS |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 4,227 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; calculation C17 | 567 | calculation C2; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 | FY2024 / 2024-09-27 | USD | US$m | Not calculable: year-end debt includes the acquired business but FY2024 EBITDA excludes it | Not Calculable | Tier 1 | Perimeters differ: the 2024-09-27 balance sheet includes CMS financing, FY2024 EBITDA does not include CMS |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 567 | calculation C2; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 | 373 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116 | FY2024 / 2024-09-27 | USD | US$m | 1.52 | Calculated | Tier 1 | Cash interest paid, not interest expense; to two decimals. FY2024 covers the legacy business without CMS. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 4,679 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; calculation C16 | 618 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 | FY2024 / 2024-09-27 | USD | US$m | Not calculable: year-end debt includes the acquired business but FY2024 EBITDA excludes it | Not Calculable | Tier 1 | Perimeters differ: the 2024-09-27 balance sheet includes CMS financing, FY2024 EBITDA does not include CMS |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 4,227 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; calculation C17 | 618 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 | FY2024 / 2024-09-27 | USD | US$m | Not calculable: year-end debt includes the acquired business but FY2024 EBITDA excludes it | Not Calculable | Tier 1 | Perimeters differ: the 2024-09-27 balance sheet includes CMS financing, FY2024 EBITDA does not include CMS |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 618 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 | 373 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116 | FY2024 / 2024-09-27 | USD | US$m | 1.66 | Calculated | Tier 1 | Cash interest paid, not interest expense; to two decimals. FY2024 covers the legacy business without CMS. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3,943 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; calculation C18 | 994 | calculation C3; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 | FY2025 / 2025-10-03 | USD | US$m | 3.97 | Calculated | Tier 1 | Carrying-value debt, reported EBITDA, to two decimals. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,506 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; calculation C19 | 994 | calculation C3; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 | FY2025 / 2025-10-03 | USD | US$m | 3.53 | Calculated | Tier 1 | Carrying-value debt, reported EBITDA, to two decimals. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 994 | calculation C3; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 | 306 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116 | FY2025 / 2025-10-03 | USD | US$m | 3.25 | Calculated | Tier 1 | Cash interest paid, not interest expense; to two decimals. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 3,943 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; calculation C18 | 1,104 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 | FY2025 / 2025-10-03 | USD | US$m | 3.57 | Calculated | Tier 1 | Carrying-value debt, issuer-adjusted EBITDA, to two decimals. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 3,506 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; calculation C19 | 1,104 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 | FY2025 / 2025-10-03 | USD | US$m | 3.18 | Calculated | Tier 1 | Carrying-value debt, issuer-adjusted EBITDA, to two decimals. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,104 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 | 306 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116 | FY2025 / 2025-10-03 | USD | US$m | 3.61 | Calculated | Tier 1 | Cash interest paid, not interest expense; to two decimals. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3,935 | 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; calculation C20 | 986 | calculation C6 | 2026-01-02 | USD | US$m | 3.99 | Calculated | Tier 2b | Carrying-value debt, reported EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,688 | 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; calculation C21 | 986 | calculation C6 | 2026-01-02 | USD | US$m | 3.74 | Calculated | Tier 2b | Carrying-value debt, reported EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 986 | calculation C6 | 314 | calculation C12 | 2026-01-02 | USD | US$m | 3.14 | Calculated | Tier 2b | Cash interest paid, not interest expense; to two decimals. Last twelve months at the balance-sheet date. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 3,935 | 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; calculation C20 | 1,105 | calculation C9 | 2026-01-02 | USD | US$m | 3.56 | Calculated | Tier 2b | Carrying-value debt, issuer-adjusted EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 3,688 | 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; calculation C21 | 1,105 | calculation C9 | 2026-01-02 | USD | US$m | 3.34 | Calculated | Tier 2b | Carrying-value debt, issuer-adjusted EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,105 | calculation C9 | 314 | calculation C12 | 2026-01-02 | USD | US$m | 3.52 | Calculated | Tier 2b | Cash interest paid, not interest expense; to two decimals. Last twelve months at the balance-sheet date. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3,927 | 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; calculation C22 | 996 | calculation C7 | 2026-04-03 | USD | US$m | 3.94 | Calculated | Tier 2b | Carrying-value debt, reported EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,499 | 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; calculation C23 | 996 | calculation C7 | 2026-04-03 | USD | US$m | 3.51 | Calculated | Tier 2b | Carrying-value debt, reported EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 996 | calculation C7 | 303 | calculation C13 | 2026-04-03 | USD | US$m | 3.29 | Calculated | Tier 2b | Cash interest paid, not interest expense; to two decimals. Last twelve months at the balance-sheet date. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 3,927 | 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; calculation C22 | 1,112 | calculation C10 | 2026-04-03 | USD | US$m | 3.53 | Calculated | Tier 2b | Carrying-value debt, issuer-adjusted EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 3,499 | 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; calculation C23 | 1,112 | calculation C10 | 2026-04-03 | USD | US$m | 3.15 | Calculated | Tier 2b | Carrying-value debt, issuer-adjusted EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,112 | calculation C10 | 303 | calculation C13 | 2026-04-03 | USD | US$m | 3.67 | Calculated | Tier 2b | Cash interest paid, not interest expense; to two decimals. Last twelve months at the balance-sheet date. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3,825 | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2; calculation C24 | 1,013 | calculation C8 | 2026-07-03 | USD | US$m | 3.78 | Calculated | Tier 2b | Carrying-value debt, reported EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,366 | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2; calculation C25 | 1,013 | calculation C8 | 2026-07-03 | USD | US$m | 3.32 | Calculated | Tier 2b | Carrying-value debt, reported EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,013 | calculation C8 | 287 | calculation C14 | 2026-07-03 | USD | US$m | 3.53 | Calculated | Tier 2b | Cash interest paid, not interest expense; to two decimals. Last twelve months at the balance-sheet date. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 3,825 | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2; calculation C24 | 1,128 | calculation C11 | 2026-07-03 | USD | US$m | 3.39 | Calculated | Tier 2b | Carrying-value debt, issuer-adjusted EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 3,366 | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2; calculation C25 | 1,128 | calculation C11 | 2026-07-03 | USD | US$m | 2.98 | Calculated | Tier 2b | Carrying-value debt, issuer-adjusted EBITDA, to two decimals. Last twelve months at the balance-sheet date. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,128 | calculation C11 | 287 | calculation C14 | 2026-07-03 | USD | US$m | 3.93 | Calculated | Tier 2b | Cash interest paid, not interest expense; to two decimals. Last twelve months at the balance-sheet date. |
| EBITDA (Reported) margin | EBITDA (Reported) / Revenues x 100 | 994 | calculation C3 | 14,393 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 | FY2025 | USD | US$m | 6.91 | Calculated | Tier 1 | Percent of revenues; calculated EBITDA; 53-week year |
| EBITDA (Adjusted) margin | EBITDA (Adjusted) / Revenues x 100 | 1,104 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 | 14,393 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 | FY2025 | USD | US$m | 7.67 | Calculated | Tier 1 | Percent of revenues; issuer-adjusted EBITDA; 53-week year |
| Operating cash flow / EBITDA (Reported) | Net cash from operating activities / EBITDA (Reported) x 100 | 235 | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 | 752 | calculation C5 | 9M 2026 | USD | US$m | 31.25 | Calculated | Tier 2b | Percent; nine months, seasonal; includes USD 120 million net inflow from sold receivables |
| Capital expenditure / Revenues | Purchase of property and equipment / Revenues x 100 | 27 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116 | 14,393 | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 | FY2025 | USD | US$m | 0.19 | Calculated | Tier 1 | Percent of revenues; total capital expenditure only |
| Operating cash flow less capex / Total debt | (Net cash from operating activities - purchase of property and equipment) / Total Debt x 100 | 516 | calculation C62 | 3,943 | calculation C18 | FY2025 | USD | US$m | 13.09 | Calculated | Tier 1 | Percent; carrying-value debt at 2025-10-03 |
| Liquidity / Total debt | (Cash + revolver availability) / Total Debt x 100 | 1,376 | calculation C52 | 3,825 | calculation C24 | 9M 2026 | USD | US$m | 35.97 | Calculated | Tier 2b | Percent; excludes receivable sales; cash includes joint venture cash |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Order book (period-end) | Total backlog, USD million | 44,970 | 47,144 | 44,642 | 48,237 | Up | Backlog at 2026-07-03 is 8% above 2025-06-27 on the issuer's account; unfunded backlog includes unexercised options |
| Order book (period-end) | Funded backlog, USD million | 7,564 | 5,585 | 5,649 | 6,240 | Up | Funded backlog rose against the prior-year nine-month date but is below 2024-09-27 |
| Contract mix (rate) | Cost-plus-fee share of revenues, % | 62 | 63 | 64 | 56 | Down | Shift to fixed-price and time-and-materials contracts in 9M 2026 raises exposure to cost overruns |
| Contract mix (rate) | Fixed-price share of revenues, % | 27 | 24 | 24 | 29 | Up | Fixed-price share up five points on the prior-year nine months |
| Receivables sold (period-end) | Outstanding balance sold to the purchaser, USD million | 177 | 180 | 219 | 300 | Up | Maximum USD 400 million; the term of the agreement is not printed |
| Receivables sold (period-end) | Remaining sold receivables after cash collected but not yet remitted, USD million | 138 | 131 | 179 | 158 | Down | The balance net of cash collected for the purchaser that is held in other current liabilities |
| Receivables sold (period flow) | Net operating cash inflow from sold receivables, USD million | 177 | 3 | 42 | 120 | Up | A non-debt funding source that supports operating cash flow; it reverses if the balance falls |

Backlog, contract mix and receivable sales for FY2024 and FY2025 come from the annual report, and those for 9M 2025 and 9M 2026 from the nine-month report.
Basis: 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 103, 135; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 9, 27–28

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | EBITDA before add-backs, calculated from net income attributable to common shareholders plus depreciation, amortization, interest expense and other, net, and income taxes | Adjusted EBITDA attributable to Amentum Holdings, Inc., adding back acquisition, transaction and integration costs, loss on extinguishment of debt, share-based compensation and non-cash items, less utilization of fair market value adjustments | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 102, 157; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 16 | FY2023 to FY2025; 9M 2025 and 9M 2026 | USD 110 million in FY2025 (11% of reported EBITDA) and USD 76 million in 9M 2026 | Fundamental credit; Earnings quality; Covenant capacity | Reported EBITDA is the denominator of every chart ratio; adjusted ratios are in the register beside them |
| Total debt | Balance-sheet carrying value, current plus long-term, net of discount and issuance costs | Release net leverage uses total debt excluding unamortized discount and costs, which is principal | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 10; EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, pages 9–10 | All balance-sheet dates | USD 65 million at FY2025 and USD 50 million at 2026-07-03 | Fundamental credit; Refinancing & LME | Carrying value is used; principal is shown beside it in the net debt table and the reconciliation |
| Net leverage | Net debt over LTM reported EBITDA, carrying-value debt | Principal less cash over LTM Adjusted EBITDA | EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, pages 9–10 | 2026-01-02, 2026-04-03, 2026-07-03 | 3.0x issuer against 3.32x here at 2026-07-03 | Fundamental credit; Covenant capacity | Both are shown; the covenant definition after the amendment is not stated |
| Perimeter of FY2024 | Debt and EBITDA on one perimeter | FY2024 operations and cash flows exclude CMS while the 2024-09-27 balance sheet includes it | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 117–118 | FY2024 | FY2024 leverage is not calculable; unaudited pro forma revenue and net income only | Fundamental credit; Business & governance | FY2024 leverage stated as not calculable; trends start at FY2025 |
| Fiscal year length | Comparable 52-week years | FY2025 has 53 weeks, the extra week in the fourth quarter | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 117–118 | FY2025 against FY2024 and FY2023 | About one week of operations; not quantified by the issuer | Fundamental credit | Stated; no adjustment made |
| Interest | Cash interest paid for coverage | Interest expense and other, net on the income statement | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 114, 116 | FY2023 to FY2025 | FY2025: USD 306 million paid against USD 353 million expense and other, net | Fundamental credit | Cash interest paid is the cover denominator; the two are kept apart |
| Non-controlling interests line | Net income attributable to non-controlling interests, signed by its effect | Printed as a positive amount that adds to net income including non-controlling interests in some columns and in brackets that subtract in the quarterly releases | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3; EX-99.1_2026-05-11_exhibit991-may112026.htm.jsonl, page 8 | All periods | Presentation only; net income attributable to common shareholders is printed | Fundamental credit | Lines kept as printed; the attributable figure is used |
| Free cash flow | Operating cash flow less capital expenditure and other investing cash flows | Operating cash flow less purchase of property and equipment, so contributions to equity method investments are excluded | EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, page 9 | All periods | USD 56 million in FY2025 and USD 53 million in 9M 2026 of contributions | Fundamental credit | Operating cash flow less capex is shown; contributions are shown as their own line |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and coverage trend on reported EBITDA | Ready with Limitations | Fiscal 2024 leverage not calculable; fiscal 2025 reported EBITDA calculated; interim ratios are last twelve months | Obtain pro forma combined EBITDA for fiscal 2024 if a trend before fiscal 2025 is needed |
| Liquidity and maturity profile | Ready with Limitations | No post-amendment maturity ladder; USD 123 million cash in consolidated joint ventures; receivable purchase agreement term not printed | Obtain the executed amendment or a lender schedule and the receivable purchase agreement terms |
| Cash-flow quality | Ready with Limitations | Quarterly operating cash flow is seasonal; receivable sales support nine-month cash flow; no maintenance and growth capital split | Obtain fiscal fourth quarter results to test whether the first-quarter outflow reverses |
| Covenant headroom | Not Ready | Covenant level and definition after the 24 April 2026 amendment are not stated; the executed agreement is not supplied | Obtain the executed credit agreement and amendment |
| Debt ranking and structure | Ready with Limitations | Security of the senior notes and the rank of the other debt line are not established | Obtain the indenture and the debt note detail |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-09-27 | Not supplied: perimeters differ | Not supplied: perimeters differ | x | Year-end debt includes the acquired business but FY2024 EBITDA excludes it, so no ratio is stated; see the calculation register |
| FY2025 / 2025-10-03 | 3.97 | 3.53 | x | Carrying-value debt over reported EBITDA; principal debt 4,008 USD million |
| 2026-01-02 | 3.99 | 3.74 | x | Carrying-value debt over reported EBITDA for the last twelve months; principal debt 3,998 USD million |
| 2026-04-03 | 3.94 | 3.51 | x | Carrying-value debt over reported EBITDA for the last twelve months; principal debt 3,988 USD million |
| 2026-07-03 | 3.78 | 3.32 | x | Carrying-value debt over reported EBITDA for the last twelve months; principal debt 3,875 USD million |

Both ratios use calculated reported EBITDA and carrying-value debt, the interim rows use the last twelve months, and the fiscal 2024 ratios are not stated because the debt and the EBITDA are on different perimeters.
Basis: calculation C46; 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 117–118

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-09-27 | 1.52 | x | Reported EBITDA over cash interest paid; legacy business without CMS |
| FY2025 / 2025-10-03 | 3.25 | x | Reported EBITDA over cash interest paid |
| 2026-01-02 | 3.14 | x | Reported EBITDA over cash interest paid, both for the last twelve months |
| 2026-04-03 | 3.29 | x | Reported EBITDA over cash interest paid, both for the last twelve months |
| 2026-07-03 | 3.53 | x | Reported EBITDA over cash interest paid, both for the last twelve months |

Cover divides reported EBITDA by cash interest paid, the interim rows use the last twelve months, and the fiscal 2024 row covers the legacy business only.
Basis: calculation C48; 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 114, 116

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-09-27 | 452 | 808 | US$m | Cash and cash equivalents; undrawn committed facilities are the revolver commitment less issued letters of credit, nothing drawn; receivable sales excluded |
| FY2025 / 2025-10-03 | 437 | 766 | US$m | Cash and cash equivalents; undrawn committed facilities are the revolver commitment less issued letters of credit, nothing drawn; receivable sales excluded |
| 2026-01-02 | 247 | 768 | US$m | Cash and cash equivalents; undrawn committed facilities are the revolver commitment less issued letters of credit, nothing drawn; receivable sales excluded |
| 2026-04-03 | 428 | 769 | US$m | Cash and cash equivalents; undrawn committed facilities are the revolver commitment less issued letters of credit, nothing drawn; receivable sales excluded |
| 2026-07-03 | 459 | 917 | US$m | Cash and cash equivalents; undrawn committed facilities are the revolver commitment less issued letters of credit, nothing drawn; receivable sales excluded |

Undrawn committed facilities are the revolver commitment less issued letters of credit, and cash includes amounts held in consolidated joint ventures that the filings do not say are freely available.
Basis: calculation C54; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 12–13

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 43 | US$m | Principal maturing in the year ending 30 September as printed in the annual report at 3 October 2025; predates the 24 April 2026 amendment |
| FY2027 | 39 | US$m | Principal maturing in the year ending 30 September as printed in the annual report at 3 October 2025; predates the 24 April 2026 amendment |
| FY2028 | 38 | US$m | Principal maturing in the year ending 30 September as printed in the annual report at 3 October 2025; predates the 24 April 2026 amendment |
| FY2029 | 38 | US$m | Principal maturing in the year ending 30 September as printed in the annual report at 3 October 2025; predates the 24 April 2026 amendment |
| FY2030 | 38 | US$m | Principal maturing in the year ending 30 September as printed in the annual report at 3 October 2025; predates the 24 April 2026 amendment |
| Thereafter | 3,812 | US$m | Principal maturing in the year ending 30 September as printed in the annual report at 3 October 2025; predates the 24 April 2026 amendment |

The ladder is the schedule printed in the annual report at 3 October 2025 and predates the April 2026 amendment, which moved the revolver and Term Loan A to April 2031, Term Loan B to September 2031 and left the senior notes at August 2032.
Basis: calculation C72; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 150; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 11–12

### Financials and credit metrics

| Metric | FY2024 | FY2025 | 9M 2025 | 9M 2026 | LTM to 2026-07-03 | Unit | Source |
|---|---|---|---|---|---|---|---|
| Revenues | 8,388 | 14,393 | 10,468 | 10,205 | 14,130 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| EBITDA (Reported) | 567 | 994 | 733 | 752 | 1,013 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| EBITDA (Adjusted, issuer) | 618 | 1,104 | 804 | 828 | 1,128 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 16 |
| Operating income | 291 | 480 | 345 | 461 | 596 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Net income attributable to common shareholders | -82 | 66 | 26 | 164 | 204 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| Net cash from operating activities | 47 | 543 | 273 | 235 | 505 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 |
| Capital expenditure | 11 | 27 | 18 | 22 | 31 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 |
| Operating cash flow less capital expenditure | 36 | 516 | 255 | 213 | 474 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 |
| Cash interest paid | 373 | 306 | 194 | 175 | 287 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 5 |
| Total debt at carrying value, period end | 4,679 | 3,943 | Not supplied: no balance sheet at 2025-06-27 | 3,825 | 3,825 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Cash and cash equivalents, period end | 452 | 437 | Not supplied: no balance sheet at 2025-06-27 | 459 | 459 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 113; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Net debt, period end | 4,227 | 3,506 | Not supplied: no balance sheet at 2025-06-27 | 3,366 | 3,366 | USD millions | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| Total debt / EBITDA (reported) | Not calculable: perimeters differ | 3.97 | Not supplied: no balance sheet at 2025-06-27 | Not supplied: last twelve months basis only | 3.78 | x | calculation C28; calculation C46 |
| Net debt / EBITDA (reported) | Not calculable: perimeters differ | 3.53 | Not supplied: no balance sheet at 2025-06-27 | Not supplied: last twelve months basis only | 3.32 | x | calculation C29; calculation C47 |
| EBITDA (reported) / cash interest | 1.52 | 3.25 | Not supplied: last twelve months basis only | Not supplied: last twelve months basis only | 3.53 | x | calculation C26; calculation C30; calculation C48 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-09-27 | 4,679 | 452 | 4,227 | US$m | Gross debt is carrying value, current portion 36 plus long-term debt 4,643, net of discount and issuance costs; principal 4,767 USD million; includes the other debt line, which is not described; finance leases within debt lines are not stated |
| FY2025 / 2025-10-03 | 3,943 | 437 | 3,506 | US$m | Gross debt is carrying value, current portion 42 plus long-term debt 3,901, net of discount and issuance costs; principal 4,008 USD million; includes the other debt line, which is not described; finance leases within debt lines are not stated |
| 2026-01-02 | 3,935 | 247 | 3,688 | US$m | Gross debt is carrying value, current portion 41 plus long-term debt 3,894, net of discount and issuance costs; principal 3,998 USD million; includes the other debt line, which is not described; finance leases within debt lines are not stated |
| 2026-04-03 | 3,927 | 428 | 3,499 | US$m | Gross debt is carrying value, current portion 40 plus long-term debt 3,887, net of discount and issuance costs; principal 3,988 USD million; includes the other debt line, which is not described; finance leases within debt lines are not stated |
| 2026-07-03 | 3,825 | 459 | 3,366 | US$m | Gross debt is carrying value, current portion 54 plus long-term debt 3,771, net of discount and issuance costs; principal 3,875 USD million; includes the other debt line, which is not described; finance leases within debt lines are not stated |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-10-03 | 4,008 | -65 | 3,943 | US$m | Principal is the printed maturity schedule total; the reconciling item is unamortized original issue discount and deferred financing costs of 65; no debt is left out of the ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | All seven filings and releases were read; none states an event after 2026-07-03 that changes net debt, and the latest document is dated 2026-08-11 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 | 7,865 | 596 | US$m | Issuer-adjusted EBITDA; excludes CMS; 52 weeks |
| FY2024 | 8,388 | 618 | US$m | Issuer-adjusted EBITDA; excludes CMS; 52 weeks |
| FY2025 | 14,393 | 1,104 | US$m | Issuer-adjusted EBITDA; includes CMS for the full year; 53 weeks |

Adjusted EBITDA is the issuer's measure; fiscal 2023 and 2024 exclude the acquired business and fiscal 2025 has 53 weeks, so growth between the years is not like for like.
Basis: 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 114, 117–118, 157

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolver | 1 | Yes | 0 | 0.00 | US$m | Nothing drawn at 2026-07-03; commitment 1,000, letters of credit 83; secured by first-priority liens on substantially all assets; obligors are Amentum Holdings, Inc. and borrowing subsidiaries, guaranteed by substantially all wholly owned material domestic restricted subsidiaries |
| Term Loan A | 1 | Yes | 1,400 | 1.38 | US$m | Principal at 2026-07-03; same security and guarantee scope as the revolver; cumulative principal over LTM reported EBITDA of 1,013 |
| Term Loan B | 1 | Yes | 1,466 | 2.83 | US$m | Principal at 2026-07-03 after the USD 125 million voluntary payment; same security and guarantee scope; cumulative 2,866 |
| Senior notes due 2032 | 2 | No | 1,000 | 3.82 | US$m | Principal; guarantees stated senior unsecured by the Company and the guarantor subsidiaries, though the trustee is also named collateral agent; cumulative 3,866; other debt of 9 is left out because no source states its rank |

Amounts are principal at 3 July 2026, cumulative leverage divides cumulative principal by LTM reported EBITDA, and the other debt line is left out because no source states its rank.
Basis: calculation C81; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 10–12; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 149

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2025 | 994 | US$m | Opening: calculated reported EBITDA before add-backs |
| Acquisition, transaction and integration costs | 85 | US$m | Issuer label; classification transaction costs; realisation not stated |
| Loss on extinguishment of debt | 12 | US$m | Issuer label; classification other stated; realisation not stated |
| Utilization of certain fair market value adjustments | -8 | US$m | Issuer label; classification other stated; realisation not stated |
| Stock-based compensation | 21 | US$m | Issuer label; classification share-based compensation; non-cash |
| Adjusted EBITDA (issuer), FY2025 | 1,104 | US$m | Closing: issuer-stated Adjusted EBITDA attributable to Amentum Holdings, Inc.; no non-cash gain or loss add-back in FY2025 |

The bridge covers fiscal 2025 only and uses the issuer's own reconciling items, which the audited note states without a realisation status.
Basis: calculation C70; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 26 |
| Calculated | 22 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 6 |
| Fields present | 24 |
| Fields total | 24 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 0 |

## Calculations

Each row works one figure from the sources or from an earlier row, with its inputs; none is a credit conclusion.

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | EBITDA (Reported), FY2023 | Net income attributable to common shareholders -314 + depreciation 27 + amortization of intangibles 298 + interest expense and other, net 397 + provision for income taxes -19 (USD million) | USD 389 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 114, 115 |
| C2 | EBITDA (Reported), FY2024 | Net income attributable to common shareholders -82 + depreciation 23 + amortization of intangibles 228 + interest expense and other, net 438 + provision for income taxes -40 (USD million) | USD 567 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 114, 115 |
| C3 | EBITDA (Reported), FY2025 | Net income attributable to common shareholders 66 + depreciation 40 + amortization of intangibles 479 + interest expense and other, net 353 + provision for income taxes 56 (USD million) | USD 994 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 114, 115 |
| C4 | EBITDA (Reported), 9M 2025 | Net income attributable to common shareholders 26 + depreciation 29 + amortization of intangibles 358 + interest expense and other, net 261 + provision for income taxes 59 (USD million) | USD 733 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3, 4 |
| C5 | EBITDA (Reported), 9M 2026 | Net income attributable to common shareholders 164 + depreciation 25 + amortization of intangibles 282 + interest expense and other, net 209 + provision for income taxes 72 (USD million) | USD 752 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3, 4 |
| C6 | LTM EBITDA (Reported) to 2026-01-02 | FY2025 994 + Q1 2026 244 less Q1 2025 252 (USD million) | USD 986 million | EX-99.1_2026-02-09_exhibit991-february92026.htm.jsonl, pages 11–12; calculation C3 |
| C7 | LTM EBITDA (Reported) to 2026-04-03 | FY2025 994 + H1 2026 495 less H1 2025 493 (USD million) | USD 996 million | EX-99.1_2026-05-11_exhibit991-may112026.htm.jsonl, pages 11–13; calculation C3 |
| C8 | LTM EBITDA (Reported) to 2026-07-03 | FY2025 994 + 9M 2026 752 less 9M 2025 733 (USD million) | USD 1,013 million | EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, pages 10–12; calculation C3 |
| C9 | LTM EBITDA (Adjusted) to 2026-01-02 | FY2025 1,104 + Q1 2026 263 less Q1 2025 262 (USD million) | USD 1,105 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; EX-99.1_2026-02-09_exhibit991-february92026.htm.jsonl, pages 11–12 |
| C10 | LTM EBITDA (Adjusted) to 2026-04-03 | FY2025 1,104 + H1 2026 538 less H1 2025 530 (USD million) | USD 1,112 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; EX-99.1_2026-05-11_exhibit991-may112026.htm.jsonl, pages 11–13 |
| C11 | LTM EBITDA (Adjusted) to 2026-07-03 | FY2025 1,104 + 9M 2026 828 less 9M 2025 804 (USD million) | USD 1,128 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, pages 10–12 |
| C12 | LTM cash interest paid to 2026-01-02 | FY2025 306 + Q1 2026 47 less Q1 2025 39 (USD million) | USD 314 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 4 |
| C13 | LTM cash interest paid to 2026-04-03 | FY2025 306 + H1 2026 130 less H1 2025 133 (USD million) | USD 303 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 5 |
| C14 | LTM cash interest paid to 2026-07-03 | FY2025 306 + 9M 2026 175 less 9M 2025 194 (USD million) | USD 287 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 5 |
| C15 | LTM revenue to 2026-07-03 | FY2025 14,393 + 9M 2026 10,205 less 9M 2025 10,468 (USD million) | USD 14,130 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| C16 | Total debt at carrying value, FY2024 / 2024-09-27 | Current portion of long-term debt 36 + long-term debt, net of current portion 4,643 (USD million) | USD 4,679 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114 |
| C17 | Net debt, FY2024 / 2024-09-27 | Total debt 4,679 less cash and cash equivalents 452 (USD million) | USD 4,227 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; calculation C16 |
| C18 | Total debt at carrying value, FY2025 / 2025-10-03 | Current portion of long-term debt 42 + long-term debt, net of current portion 3,901 (USD million) | USD 3,943 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114 |
| C19 | Net debt, FY2025 / 2025-10-03 | Total debt 3,943 less cash and cash equivalents 437 (USD million) | USD 3,506 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113–114; calculation C18 |
| C20 | Total debt at carrying value, 2026-01-02 | Current portion of long-term debt 41 + long-term debt, net of current portion 3,894 (USD million) | USD 3,935 million | 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2 |
| C21 | Net debt, 2026-01-02 | Total debt 3,935 less cash and cash equivalents 247 (USD million) | USD 3,688 million | 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 2; calculation C20 |
| C22 | Total debt at carrying value, 2026-04-03 | Current portion of long-term debt 40 + long-term debt, net of current portion 3,887 (USD million) | USD 3,927 million | 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2 |
| C23 | Net debt, 2026-04-03 | Total debt 3,927 less cash and cash equivalents 428 (USD million) | USD 3,499 million | 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 2; calculation C22 |
| C24 | Total debt at carrying value, 2026-07-03 | Current portion of long-term debt 54 + long-term debt, net of current portion 3,771 (USD million) | USD 3,825 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2 |
| C25 | Net debt, 2026-07-03 | Total debt 3,825 less cash and cash equivalents 459 (USD million) | USD 3,366 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 2; calculation C24 |
| C26 | EBITDA / cash interest, FY2024 / 2024-09-27 | 567 divided by 373 (USD million) | 1.52x | calculation C2; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116 |
| C27 | Adjusted EBITDA / cash interest, FY2024 / 2024-09-27 | 618 divided by 373 (USD million) | 1.66x | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116 |
| C28 | Total debt / EBITDA, FY2025 / 2025-10-03 | 3,943 divided by 994 (USD million) | 3.97x | calculation C18; calculation C3 |
| C29 | Net debt / EBITDA, FY2025 / 2025-10-03 | 3,506 divided by 994 (USD million) | 3.53x | calculation C19; calculation C3 |
| C30 | EBITDA / cash interest, FY2025 / 2025-10-03 | 994 divided by 306 (USD million) | 3.25x | calculation C3; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116 |
| C31 | Total debt / adjusted EBITDA, FY2025 / 2025-10-03 | 3,943 divided by 1,104 (USD million) | 3.57x | calculation C18; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 |
| C32 | Net debt / adjusted EBITDA, FY2025 / 2025-10-03 | 3,506 divided by 1,104 (USD million) | 3.18x | calculation C19; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 |
| C33 | Adjusted EBITDA / cash interest, FY2025 / 2025-10-03 | 1,104 divided by 306 (USD million) | 3.61x | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116 |
| C34 | Total debt / EBITDA, 2026-01-02 | 3,935 divided by 986 (USD million) | 3.99x | calculation C20; calculation C6 |
| C35 | Net debt / EBITDA, 2026-01-02 | 3,688 divided by 986 (USD million) | 3.74x | calculation C21; calculation C6 |
| C36 | EBITDA / cash interest, 2026-01-02 | 986 divided by 314 (USD million) | 3.14x | calculation C6; calculation C12 |
| C37 | Total debt / adjusted EBITDA, 2026-01-02 | 3,935 divided by 1,105 (USD million) | 3.56x | calculation C20; calculation C9 |
| C38 | Net debt / adjusted EBITDA, 2026-01-02 | 3,688 divided by 1,105 (USD million) | 3.34x | calculation C21; calculation C9 |
| C39 | Adjusted EBITDA / cash interest, 2026-01-02 | 1,105 divided by 314 (USD million) | 3.52x | calculation C9; calculation C12 |
| C40 | Total debt / EBITDA, 2026-04-03 | 3,927 divided by 996 (USD million) | 3.94x | calculation C22; calculation C7 |
| C41 | Net debt / EBITDA, 2026-04-03 | 3,499 divided by 996 (USD million) | 3.51x | calculation C23; calculation C7 |
| C42 | EBITDA / cash interest, 2026-04-03 | 996 divided by 303 (USD million) | 3.29x | calculation C7; calculation C13 |
| C43 | Total debt / adjusted EBITDA, 2026-04-03 | 3,927 divided by 1,112 (USD million) | 3.53x | calculation C22; calculation C10 |
| C44 | Net debt / adjusted EBITDA, 2026-04-03 | 3,499 divided by 1,112 (USD million) | 3.15x | calculation C23; calculation C10 |
| C45 | Adjusted EBITDA / cash interest, 2026-04-03 | 1,112 divided by 303 (USD million) | 3.67x | calculation C10; calculation C13 |
| C46 | Total debt / EBITDA, 2026-07-03 | 3,825 divided by 1,013 (USD million) | 3.78x | calculation C24; calculation C8 |
| C47 | Net debt / EBITDA, 2026-07-03 | 3,366 divided by 1,013 (USD million) | 3.32x | calculation C25; calculation C8 |
| C48 | EBITDA / cash interest, 2026-07-03 | 1,013 divided by 287 (USD million) | 3.53x | calculation C8; calculation C14 |
| C49 | Total debt / adjusted EBITDA, 2026-07-03 | 3,825 divided by 1,128 (USD million) | 3.39x | calculation C24; calculation C11 |
| C50 | Net debt / adjusted EBITDA, 2026-07-03 | 3,366 divided by 1,128 (USD million) | 2.98x | calculation C25; calculation C11 |
| C51 | Adjusted EBITDA / cash interest, 2026-07-03 | 1,128 divided by 287 (USD million) | 3.93x | calculation C11; calculation C14 |
| C52 | Cash plus revolver availability, 2026-07-03 | Cash 459 + revolver availability 917 (USD million) | USD 1,376 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2, 12 |
| C53 | Cash plus revolver availability, FY2025 / 2025-10-03 | Cash 437 + revolver availability 766 (USD million) | USD 1,203 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 113, 147 |
| C54 | Revolver availability, 2026-07-03 | Commitment 1,000 less letters of credit 83; nothing drawn (USD million) | USD 917 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 11–12 |
| C55 | Revolver availability, FY2025 / 2025-10-03 | Commitment 850 less letters of credit 84; nothing drawn (USD million) | USD 766 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 145, 147 |
| C56 | Revolver availability, FY2024 / 2024-09-27 | Commitment 850 less letters of credit 42; nothing drawn (USD million) | USD 808 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 145, 147 |
| C57 | Revolver availability, 2026-01-02 | Commitment 850 less letters of credit 82; nothing drawn (USD million) | USD 768 million | 10-Q_2026-01-02_amtm-20260102.htm.jsonl, page 9 |
| C58 | Revolver availability, 2026-04-03 | Commitment 850 less letters of credit 81; nothing drawn (USD million) | USD 769 million | 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 11 |
| C59 | Operating cash flow before receivable sales, 9M 2026 | Operating cash flow 235 less net inflow from sold receivables 120 (USD million) | USD 115 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4, 9 |
| C60 | Operating cash flow before receivable sales, 9M 2025 | Operating cash flow 273 less net inflow from sold receivables 42 (USD million) | USD 231 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 4, 9 |
| C61 | Working capital movement, 9M 2026 | Accounts receivable -11 + prepaid and other assets 11 + payables and other current liabilities -198 + accrued compensation -160 + other long-term liabilities 55 (USD million) | USD -303 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 |
| C62 | Operating cash flow less capital expenditure, FY2025 | 543 less 27 (USD million) | USD 516 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116 |
| C63 | Capital expenditure over revenue, FY2025 | 27 divided by 14,393 (USD million) | 0.19% | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 114, 116 |
| C64 | Adjusted EBITDA less reported EBITDA, FY2025 | 1,104 less 994 (USD million) | USD 110 million | calculation C3; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 |
| C65 | Adjusted EBITDA less reported EBITDA, 9M 2026 | 828 less 752 (USD million) | USD 76 million | calculation C5; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 16 |
| C66 | Net debt change from FY2025 / 2025-10-03 to 2026-07-03 | 3,366 less 3,506 (USD million) | USD -140 million | calculation C25; calculation C19 |
| C67 | LTM reported EBITDA change from FY2025 to 2026-07-03 | 1,013 less 994 (USD million) | USD 19 million | calculation C8; calculation C3 |
| C68 | LTM cash interest change from FY2025 to 2026-07-03 | 287 less 306 (USD million) | USD -19 million | calculation C14 |
| C69 | Issuer net leverage at 2026-07-03 | (3,875 principal less 459 cash) divided by LTM adjusted EBITDA 1,128 (USD million) | 3.03x (stated 3.0x) | EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, pages 9–10 |
| C70 | FY2025 EBITDA bridge | Reported EBITDA 994 + acquisition, transaction and integration costs 85 + loss on extinguishment of debt 12 less utilization of fair market value adjustments 8 + stock-based compensation 21 (USD million) | USD 1,104 million | calculation C3; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157 |
| C71 | Principal to carrying value, FY2025 / 2025-10-03 | Contractual principal 4,008 less unamortized original issue discount and deferred financing costs 65 (USD million) | USD 3,943 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 144 |
| C72 | Printed maturity ladder, FY2025 | 43 + 39 + 38 + 38 + 38 + 3,812 (USD million) | USD 4,008 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 150 |
| C73 | Principal at 2026-07-03 as printed | Term Loan A 1,400 + Term Loan B 1,466 + senior notes 1,000 + other 9 (USD million) | USD 3,875 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 10 |
| C74 | Principal to carrying value, 2026-07-03 | Principal 3,875 less unamortized original issue discount and deferred financing costs 50 (USD million) | USD 3,825 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 10 |
| C75 | Cumulative principal through Term Loan A, 2026-07-03 | Revolver drawn 0 + Term Loan A 1,400 (USD million) | USD 1,400 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 10–11 |
| C76 | Cumulative principal through Term Loan B, 2026-07-03 | 1,400 + 1,466 (USD million) | USD 2,866 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 10 |
| C77 | Cumulative principal through the senior notes, 2026-07-03 | 2,866 + 1,000 (USD million) | USD 3,866 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 10 |
| C78 | Cumulative leverage through Revolver | 0 divided by LTM reported EBITDA 1,013 (USD million) | 0.00x | calculation C8 |
| C79 | Cumulative leverage through Term Loan A | 1,400 divided by LTM reported EBITDA 1,013 (USD million) | 1.38x | calculation C8 |
| C80 | Cumulative leverage through Term Loan B | 2,866 divided by LTM reported EBITDA 1,013 (USD million) | 2.83x | calculation C8 |
| C81 | Cumulative leverage through Senior notes | 3,866 divided by LTM reported EBITDA 1,013 (USD million) | 3.82x | calculation C8 |
| C82 | Scheduled annual amortisation, Term Loan A to 2028-06-30 | 0.625% x 1,400 x 4 quarters (USD million) | USD 35 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 12 |
| C83 | Scheduled annual amortisation, Term Loan B | 0.25% x 1,591 x 4 quarters (USD million) | USD 15.91 million | 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 11–12 |
| C84 | Operating lease liabilities, FY2025 | Current 67 + long-term 157 (USD million) | USD 224 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 152 |
| C85 | Term Loan B margin change at the amendment | Term SOFR margin 2.25% before the amendment less 1.75% after | 0.50 percentage points | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 147; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 12 |
| C86 | Term loans raised at the amendment less term loan outstanding at 2026-04-03 | (1,400 + 1,591) less 2,981 (USD million) | USD 10 million | 10-Q_2026-04-03_amtm-20260403.htm.jsonl, page 10; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 11 |
| C87 | LTM operating income to 2026-07-03 | FY2025 480 + 9M 2026 461 less 9M 2025 345 (USD million) | USD 596 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| C88 | LTM net income attributable to common shareholders to 2026-07-03 | FY2025 66 + 9M 2026 164 less 9M 2025 26 (USD million) | USD 204 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3 |
| C89 | LTM operating cash flow to 2026-07-03 | FY2025 543 + 9M 2026 235 less 9M 2025 273 (USD million) | USD 505 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 115–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 |
| C90 | LTM capital expenditure to 2026-07-03 | FY2025 27 + 9M 2026 22 less 9M 2025 18 (USD million) | USD 31 million | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 |
| C91 | LTM operating cash flow less capital expenditure to 2026-07-03 | 505 less 31 (USD million) | USD 474 million | calculation C89; calculation C90 |
| C92 | EBITDA (Reported) over revenues, FY2025 | 994 divided by 14,393 times 100 (USD million) | 6.91% | calculation C3; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 |
| C93 | EBITDA (Adjusted) over revenues, FY2025 | 1,104 divided by 14,393 times 100 (USD million) | 7.67% | 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 157; 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114 |
| C94 | Operating cash flow over EBITDA (Reported), 9M 2026 | 235 divided by 752 times 100 (USD million) | 31.25% | calculation C5; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 |
| C95 | Operating cash flow less capital expenditure over total debt, FY2025 | 516 divided by 3,943 times 100 (USD million) | 13.09% | calculation C62; calculation C18 |
| C96 | Cash plus revolver availability over total debt, 2026-07-03 | 1,376 divided by 3,825 times 100 (USD million) | 35.97% | calculation C52; calculation C24 |
| C97 | Operating cash flow by quarter, nine months to 2026-07-03 | First quarter -136 + second quarter 225 + third quarter 146 (USD million) | USD 235 million | EX-99.1_2026-02-09_exhibit991-february92026.htm.jsonl, page 2; EX-99.1_2026-05-11_exhibit991-may112026.htm.jsonl, page 3; EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, page 3; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4 |

## Gaps

- No maturity ladder after the 24 April 2026 amendment is printed, so the debt maturities table shows the schedule printed at 3 October 2025, which predates the new Term Loan A, the revised Term Loan B and the larger revolver; this restricts any view of repayments from fiscal 2027 to 2031 to the stated amortisation percentages. Severity Medium; the executed amendment or a lender schedule would close it.
  Basis: 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 150; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 11–12
- The fiscal 2024 leverage ratios are not calculable because the 27 September 2024 balance sheet includes the acquired business while fiscal 2024 EBITDA does not, and the annual report gives only unaudited pro forma revenue and net income for that year. Severity Medium; pro forma combined EBITDA would close it.
  Basis: 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 117–118, 132
- EBITDA (Reported) is not stated by the issuer for fiscal years, so it is calculated from net income attributable to common shareholders, depreciation, amortization, interest expense and other, net, and income taxes for FY2023, FY2024 and FY2025; the interim figures are the issuer's own EBITDA before add-backs. Severity Low; an issuer statement of the figure would close it.
  Basis: calculation C3; EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, pages 10–12
- Several statement lines print a dash or exist in only one filing layout, so they are not supplied for the affected columns: goodwill impairment charges, loss on extinguishment of debt and gain on acquisition of controlling interest in the income statement; amortization of deferred loan costs, derivative instruments, goodwill impairment, gain on acquisition, repayments under other agreements, capital contributions, term loan and senior note proceeds and debt issuance fees in the cash flow statement; and the foreign exchange effect on cash for the nine months to 3 July 2026, where the other lines add to the net change without it. Severity Low; none changes a total.
  Basis: 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 114–116; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–5
- The line for net income attributable to non-controlling interests is printed with positive amounts that add to net income in the annual report and the nine-month statements, and with brackets that subtract in the quarterly releases; it is kept as printed and the attributable total is used. Severity Low.
  Basis: 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 114; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2–3; EX-99.1_2026-05-11_exhibit991-may112026.htm.jsonl, page 8
- Instrument-level carrying values are not disclosed, only principal by instrument and one unamortized discount and cost total of USD 50 million at 3 July 2026; the USD 9 million other debt line has no stated description, rank, rate or maturity and is left out of the debt stack. Severity Low; the debt note detail would close it.
  Basis: 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 10
- The covenant level and definition after the 24 April 2026 amendment are not stated: the annual report gives a revolver test of 5.25x first lien net leverage stepping down to 5.00x, while the quarterly reports say only that Term Loan A and the revolver carry a financial covenant under certain circumstances. Severity High for any headroom conclusion; the executed amendment would close it.
  Basis: 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 148; 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 13
- There is no balance sheet at 27 June 2025 in the sources, so net debt and leverage are not supplied for the nine months to 27 June 2025. Severity Low.
  Basis: 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4
- The latest balance sheet is dated 3 July 2026 and no fiscal 2026 year-end result is supplied; no subsequent event after 3 July 2026 is stated, so the post-balance-sheet table holds none. Severity Medium; the fourth-quarter release would close it.
  Basis: 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 32
- The annual report describes the guarantees of the senior notes due 2032 as senior unsecured yet names the note trustee also as collateral agent, so the notes are ranked second here on the stated guarantee wording and their security is not independently established. Severity Medium; the indenture would close it.
  Basis: 10-K_2025-10-03_amtm-20251003.htm.jsonl, page 149
- USD 123 million of the USD 459 million of cash at 3 July 2026 sits in consolidated joint ventures that are variable interest entities, and the filings do not say whether it is free for debt service. Severity Medium.
  Basis: 10-Q_2026-07-03_amtm-20260703.htm.jsonl, pages 2, 13
- Receivables sold under the receivable purchase agreement are a non-debt funding source: USD 300 million of receivables stood sold to the purchaser at 3 July 2026 against a USD 400 million maximum (USD 158 million after cash collected but not yet remitted), the net inflow of USD 120 million in the nine months supports operating cash flow, and the agreement term is not printed. Severity Medium; the agreement terms would close it.
  Basis: 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 9
- Capital expenditure is stated only as purchase of property and equipment, with no maintenance and growth split. Severity Low.
  Basis: 10-Q_2026-07-03_amtm-20260703.htm.jsonl, page 4
- Fiscal 2025 has 53 weeks, one more than fiscal 2024 and 2023, and the issuer does not quantify the extra week. Severity Low.
  Basis: 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 117–118
- The quarterly reports carry no lease or pension note, so operating lease liabilities of USD 224 million and the defined benefit position are available only at 3 October 2025; they sit outside the debt figure. Severity Low.
  Basis: 10-K_2025-10-03_amtm-20251003.htm.jsonl, pages 139–140, 152
- The issuer's net leverage in the releases uses principal debt and last twelve months Adjusted EBITDA, 3.0x at 3 July 2026, and differs from the carrying-value, reported-EBITDA ratios here; both are shown and neither is the covenant measure. Severity Low.
  Basis: calculation C69; EX-99.1_2026-08-10_exhibit991-august102026.htm.jsonl, pages 9–10

## Next module

The orchestrator selects the next module.
