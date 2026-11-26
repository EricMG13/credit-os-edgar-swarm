---
issuer_id: ptc-857005
module_id: CP-1
analysis_date: 2026-11-18
module_status: Complete
---

# Financial foundation: Ptc Inc. (ptc-857005), as of 2026-11-18

## Request

Financial foundation for Ptc Inc. (issuer id ptc-857005), as of 2026-11-18, on the credit snapshot pathway. The scope is the issuer's statements, debt, cash and leverage measures from the eight supplied filings and releases, built on reported EBITDA. No credit recommendation is made here.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-09-30_ptc-20240930.htm.jsonl | Annual report on Form 10-K for the year ended 30 September 2024 | 2024-11-14 | 9ee7956c683d95ba6b10c94da8ef8a42b4fb7c0cf6a2d3073d45ca14ffd6c07d | Cross-check of FY2024 statements, debt table and cash interest context |
| 10-K_2025-09-30_ptc-20250930.htm.jsonl | Annual report on Form 10-K for the year ended 30 September 2025 | 2025-11-21 | 0f0bea326cd4f522417f9002a2055306f8cab5802094bcd3209e072f151e6345 | FY2024 and FY2025 statements, debt note, interest paid, liquidity and leases |
| 10-Q_2025-12-31_ptc-20251231.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 December 2025 | 2026-02-05 | d74b79e416f9d1d33ce97de2a5f485e8fe0fc9a5b1e5765d6822f98152e6b878 | Q1 FY2026 debt note and covenant statement |
| 10-Q_2026-03-31_ptc-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-06 | 79e08e41ca1fa204cf8df631c4dc7e17702c1d1cf242e833b746013d7130ee35 | Q2 FY2026 divestiture and repurchase agreement |
| 10-Q_2026-06-30_ptc-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-31 | c624c8c6f1742ca90785c02f0fdf8a1e67b449dda1f4a73561091a921a3a787d | Nine-month statements, 30 June 2026 balance sheet, debt note, subsequent events |
| EX-99.1_2026-02-04_ptc-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) for the first fiscal quarter of 2026 | 2026-02-04 | d32c0319c3504d5da64ddbd3f6b7655cb0925e1311d1884033bc06a51bb72efc | Not relied on for a figure; checked against the quarterly report |
| EX-99.1_2026-05-06_ptc-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) for the second fiscal quarter of 2026 | 2026-05-06 | aa7730822cc571030c34ff0005da009bcafb35f54c50cbba721c509bbe58f7e9 | Not relied on for a figure; checked against the quarterly report |
| EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) for the third fiscal quarter of 2026 | 2026-07-29 | 7ef6cb22b1d5e049fbebe5de52ba887b18bfcde993787b88c441ea21f93b6ccc | Cash paid for interest for nine months 2026 and 2025; the divestiture gain note |

Supplied module output:

| Module | Name | sha256 | Use |
| --- | --- | --- | --- |
| CP-0 | Source readiness | 9cec6decb27f599a170cfa6362fd1a64bff0a2a039792519fc2fe4a373482eb4 | Source dates, source authority and the list of what the filings do not supply |

## Findings

### Bottom line

Net debt was only 0.88x last-twelve-months EBITDA at 30 June 2026, but borrowing to fund buybacks has begun to reverse the earlier deleveraging, so creditor protection rests on cash flow and management's capital-allocation choices rather than on covenant levels the filings do not state.
Basis: 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18; calculation C7; calculation C8

Total debt was 1.17x and cash interest paid was covered 20.53x on the same basis, against 2.51x and 5.08x at FY2024. A July 2026 repurchase of USD 273.7 million financed by USD 301.3 million of net borrowings is outside those ratios; it lifts pro forma net leverage to 1.11x.
Basis: 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 21; calculation C27; calculation C28

### Key findings

Reported leverage fell sharply in FY2025 and has edged up since. Total debt to EBITDA was 2.51x at FY2024, 1.10x at FY2025 and 1.17x at 30 June 2026, while net debt to EBITDA moved from 2.13x to 0.93x to 0.88x. FY2025 combined EBITDA growth with net debt repayments of USD 553 million; the nine months to June 2026 then added net borrowings of USD 225 million to help fund repurchases of USD 1,326 million.
Basis: 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 2–5; calculation C32; calculation C31; calculation C33

Cash interest paid was covered 5.08x at FY2024, 13.94x at FY2025 and 20.53x on a last-twelve-months basis, because EBITDA grew and cash interest paid fell to USD 40,543 thousand in the nine months to June 2026 from USD 59,062 thousand a year earlier. Cash interest paid for the two fiscal years is stated only to USD 0.1 million, so the FY2025 and last-twelve-months cover carry that rounding, and the July 2026 borrowing is not yet in cash interest.
Basis: 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 89; EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl, page 12; calculation C18

Cash conversion is strong but not constant. Free cash flow, defined as operating cash flow less additions to property and equipment, was 0.79x EBITDA in FY2025 and 0.77x over the last twelve months, and FY2025 carried an outflow of USD 195,767 thousand in other noncurrent assets and liabilities. Deferred revenue of USD 700,298 thousand at 30 June 2026 is the issuer's main non-debt funding, since customers are generally invoiced annually in advance, and it was USD 111,973 thousand lower than at 30 September 2025.
Basis: 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 32; calculation C40; calculation C41; calculation C34

Liquidity at 30 June 2026 was cash of USD 351,454 thousand plus unused revolver commitments of USD 774.9 million, of which USD 757.5 million was available to borrow, against a USD 1.25 billion revolver. Both the facility and the 2028 notes fall due in fiscal 2028, so USD 1,393.7 million of the USD 1,425.0 million of scheduled principal matures in that year. Only USD 25,074 thousand of debt is classified as current and no facility matures within twelve months of 30 June 2026. Two items outside debt were unpaid at that date, a solar energy investment of USD 134,602 thousand and a repurchase of USD 25,000 thousand executed but not settled, and their settlement dates are not established.
Basis: 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 19; calculation C19; calculation C20; calculation C39

The issuer states no EBITDA or adjusted EBITDA, so every ratio uses EBITDA derived as operating income plus depreciation and amortization, which treats stock-based compensation of USD 185,848 thousand in the nine months to June 2026 as a cost. The issuer's non-GAAP operating income was USD 285.4 million above GAAP operating income in that period, so issuer-adjusted leverage would look lower than the figures here.
Basis: 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 24; calculation C4; calculation C36

The sale of Kepware and ThingWorx is reported with several figures that serve different purposes. Total consideration was USD 530.8 million and cash received was USD 523.3 million; the gain was USD 462.6 million in other income and USD 464.6 million in the cash flow statement, which adds USD 2.0 million from an earlier divestiture; tax on the sale was USD 95.6 million. Operating income excludes the gain, so EBITDA is not inflated by it, but nine-month net income is.
Basis: 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 11; EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl, page 11; calculation C38

Several claims sit outside the debt figure. Operating lease obligations were USD 184,379 thousand at 30 June 2026 on their own balance sheet lines, and the headquarters lease runs to 2037; the defined benefit pension projected benefit obligation was USD 69,460 thousand at FY2025; purchase obligations were USD 188.8 million at FY2025, of which USD 91.9 million fell in FY2026; and legal proceedings are described as immaterial. No factoring or supplier finance programme is described in the sources read, and finance leases sit in other balance sheet lines without a stated amount.
Basis: 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2; 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 35; 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 90; 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 95; 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 100; calculation C37; calculation C42; calculation C43

### Contrary evidence and what would change the view

The strongest contrary evidence is that last-twelve-months EBITDA still includes Kepware and ThingWorx until their sale in March 2026, a business with USD 46 million of revenue in Q3 2025 alone, so leverage on the continuing business is higher than 1.17x; the July 2026 borrowing then adds to net debt. The view would worsen if repurchases keep being funded from the revolver, and improve if the fourth-quarter FY2026 report shows net debt back near its FY2025 level.
Basis: 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 11; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 21; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 24; calculation C27

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-09-30 | 2.51 | 2.13 | x | Carrying-value debt over reported EBITDA derived from the statements (calculation C1); fiscal-year EBITDA |
| FY2025 / 2025-09-30 | 1.10 | 0.93 | x | Carrying-value debt over reported EBITDA derived from the statements (calculation C2); fiscal-year EBITDA |
| 2026-06-30 | 1.17 | 0.88 | x | Carrying-value debt over reported EBITDA derived from the statements (calculation C8); interim row uses last-twelve-months EBITDA to 2026-06-30, which includes Kepware and ThingWorx until 2026-03-13 |

The 2026-06-30 ratios use last-twelve-months EBITDA that still includes the divested businesses until March 2026.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-09-30 | 5.08 | x | Fiscal-year EBITDA over cash interest paid stated to USD 0.1 million |
| FY2025 / 2025-09-30 | 13.94 | x | Fiscal-year EBITDA over cash interest paid stated to USD 0.1 million |
| 2026-06-30 | 20.53 | x | Last-twelve-months EBITDA over last-twelve-months cash interest paid (calculation C18), built on the FY2025 figure stated to USD 0.1 million |

Cash interest paid for the fiscal years is stated only to USD 0.1 million, and the interim ratio is built from it.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-09-30 | 265.808 | 988.0 | US$m | Cash and cash equivalents excluding restricted cash; undrawn is the unused revolver commitment, with USD 972.1 million stated as available to borrow |
| FY2025 / 2025-09-30 | 184.415 | 1,018.8 | US$m | Cash and cash equivalents excluding restricted cash; undrawn is the unused revolver commitment, with USD 1,001.7 million stated as available to borrow |
| 2026-06-30 | 351.454 | 774.9 | US$m | Cash and cash equivalents excluding restricted cash; undrawn is the unused revolver commitment, with USD 757.5 million stated as available to borrow |

Unused revolver commitments exceed the amount available to borrow and the reason is not stated; the July 2026 borrowing is not reflected.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 6.3 | US$m | Remaining term loan payment in fiscal 2026 on the schedule printed at 2026-06-30 |
| FY2027 | 25.0 | US$m | Term loan amortization in fiscal 2027 |
| FY2028 | 1,393.7 | US$m | Term loan balloon 418.7, revolver 475.0 (stated maturity 2028-01-03) and 4.000% senior notes 500.0 (maturing in February 2028), calculation C19 |

The ladder is drawn at 30 June 2026 and leaves out the July 2026 net borrowings.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-06-30 |
| --- | --- | --- | --- |
| Revenue (US$m) | 2,298.472 | 2,739.226 | 2,953.972 |
| EBITDA, reported (US$m) | 696.181 | 1,084.889 | 1,216.889 |
| Operating income (US$m) | 588.062 | 982.385 | 1,117.008 |
| Net income (US$m) | 376.333 | 733.997 | 1,223.814 |
| Net cash from operating activities (US$m) | 749.984 | 867.696 | 955.321 |
| Free cash flow (US$m) | 735.606 | 856.688 | 935.484 |
| Cash interest paid (US$m) | 137.000 | 77.800 | 59.281 |
| Total debt, carrying value (US$m) | 1,748.572 | 1,197.434 | 1,423.315 |
| Cash and cash equivalents (US$m) | 265.808 | 184.415 | 351.454 |
| Net debt (US$m) | 1,482.764 | 1,013.019 | 1,071.861 |
| Total debt / EBITDA (x) | 2.51 | 1.10 | 1.17 |
| Net debt / EBITDA (x) | 2.13 | 0.93 | 0.88 |
| EBITDA / cash interest (x) | 5.08 | 13.94 | 20.53 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-09-30 | 1,748.572 | 265.808 | 1,482.764 | US$m | Reported balance-sheet carrying value of current plus long-term debt (net of issuance costs on the senior notes); no finance leases or securitisation are carried in debt; principal 1,752.625 (calculation C5) |
| FY2025 / 2025-09-30 | 1,197.434 | 184.415 | 1,013.019 | US$m | Reported balance-sheet carrying value of current plus long-term debt (net of issuance costs on the senior notes); no finance leases or securitisation are carried in debt; principal 1,200.000 (calculation C6) |
| 2026-06-30 | 1,423.315 | 351.454 | 1,071.861 | US$m | Reported balance-sheet carrying value of current plus long-term debt (net of issuance costs on the senior notes); no finance leases or securitisation are carried in debt; principal 1,425.074 (calculation C7) |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-06-30 | 1,425.0 | -1.685 | 1,423.315 | US$m | Principal is the printed schedule (calculation C20); reconciling items are unamortized note issuance costs of -1.759 and 0.074 of term loan principal outside the printed payments (calculation C22); the printed total principal is 1,425.074 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Repurchase of common stock of USD 273.7 million financed primarily with USD 301.3 million of net credit facility borrowings | Not supplied: the source states July 2026 only | 273.7 | 1,345.561 | 1.11 | US$m | Subsequent events note of the 2026-06-30 quarterly report. Amount is the cash cost of the repurchase added to 2026-06-30 net debt; the borrowing itself raises gross debt by 301.3 but, drawn as cash, leaves net debt unchanged (calculation C27, C28, C29); the 27.6 of borrowings above the repurchase and any other July cash flows are not reflected (calculation C30) |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-09-30 | 2,298.472 | 696.181 | US$m | Twelve months. The column holds reported EBITDA derived as operating income plus depreciation and amortization (calculation C1); the issuer states no adjusted EBITDA |
| FY2025 / 2025-09-30 | 2,739.226 | 1,084.889 | US$m | Twelve months. Reported EBITDA, derived (calculation C2) |
| 2026-06-30 | 2,953.972 | 1,216.889 | US$m | Last twelve months to 2026-06-30 (calculation C9, C8); includes Kepware and ThingWorx until 2026-03-13. Reported EBITDA, derived |

The column headed Adjusted EBITDA holds reported EBITDA because the issuer states no adjusted measure.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Credit facility revolver line | 1 | Yes | 475.000 | 0.39 | US$m | Drawn principal at 2026-06-30 of a USD 1.25 billion revolver; borrowers Ptc Inc. and certain foreign subsidiaries, guarantee and first-priority security as stated for the facility; cumulative principal over LTM reported EBITDA (calculation C24) |
| Credit facility term loan | 1 | Yes | 450.074 | 0.76 | US$m | Principal at 2026-06-30; same borrowers and security as the revolver; equal rank with the revolver (calculation C25) |
| 4.000% senior notes due 2028 | 2 | No | 500.000 | 1.17 | US$m | Senior unsecured notes issued by Ptc Inc.; no guarantors are stated; rank follows the stated security because the indenture is not supplied (calculation C26) |

Ranking follows the stated security, not an intercreditor document, and the leverage figures are on principal.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), opening | Not supplied: the issuer states no adjusted EBITDA, so no bridge exists | US$m | The opening measure is reported EBITDA derived from the statements; nothing is stated to bridge it |
| EBITDA (Adjusted), closing | Not supplied: the issuer states no adjusted EBITDA, so no bridge exists | US$m | The issuer states non-GAAP operating income, not adjusted EBITDA; no add-back list is manufactured from it |

No bridge is drawn because no adjusted EBITDA is stated.

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2023-10-01 | 2024-09-30 |
| FY2025 | 2024-10-01 | 2025-09-30 |
| 9M 2025 | 2024-10-01 | 2025-06-30 |
| 9M 2026 | 2025-10-01 | 2026-06-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-09-30_ptc-20240930.htm.jsonl | Annual report (Form 10-K) | FY2024, year to 2024-09-30, with FY2023 and FY2022 comparatives | USD | thousands | Consolidated, Ptc Inc. and subsidiaries | US GAAP | Tier 1 (audited, PricewaterhouseCoopers LLP opinion) | Cross-check of FY2024 statements and the FY2024 debt table | Superseded by the FY2025 report for FY2024 comparatives; tables arrive one value per line |
| 10-K_2025-09-30_ptc-20250930.htm.jsonl | Annual report (Form 10-K) | FY2025, year to 2025-09-30, with FY2024 and FY2023 comparatives | USD | thousands | Consolidated, Ptc Inc. and subsidiaries | US GAAP | Tier 1 (audited, PricewaterhouseCoopers LLP opinion) | FY2024 and FY2025 statements, debt note, interest paid, leases | Cash interest paid is stated in USD millions to one decimal; tables arrive one value per line |
| 10-Q_2025-12-31_ptc-20251231.htm.jsonl | Quarterly report (Form 10-Q) | Q1 FY2026, three months to 2025-12-31 | USD | thousands | Consolidated | US GAAP | Tier 2b (unaudited; no auditor review report in the filing) | Debt note and covenant statement at 2025-12-31 | Statements not tabulated here |
| 10-Q_2026-03-31_ptc-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Q2 FY2026, three and six months to 2026-03-31 | USD | thousands | Consolidated | US GAAP | Tier 2b (unaudited; no auditor review report in the filing) | Divestiture closing and the accelerated share repurchase | Statements not tabulated here |
| 10-Q_2026-06-30_ptc-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Q3 FY2026 and nine months to 2026-06-30, with prior-year comparatives | USD | thousands | Consolidated | US GAAP | Tier 2b (unaudited; no auditor review report in the filing) | Nine-month statements, 2026-06-30 balance sheet, debt note, subsequent events | Unaudited; latest balance sheet is 141 days before the as-of date |
| EX-99.1_2026-02-04_ptc-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) | Q1 FY2026 | USD | thousands | Consolidated | US GAAP with non-GAAP measures | Tier 2b (issuer release, unaudited) | Not used for a figure | Management statements; the filed statements control |
| EX-99.1_2026-05-06_ptc-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) | Q2 FY2026 | USD | thousands | Consolidated | US GAAP with non-GAAP measures | Tier 2b (issuer release, unaudited) | Not used for a figure | Management statements; the filed statements control |
| EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) | Q3 FY2026 and nine months to 2026-06-30 | USD | thousands | Consolidated | US GAAP with non-GAAP measures | Tier 2b (issuer release, unaudited) | Cash paid for interest for nine months 2026 and 2025; divestiture gain note | Management statements; the filed statements control |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ptc Inc. | Issuer and reporting parent; borrower under the credit facility and issuer of the senior notes | 30 September | USD | thousands | Consolidated, Ptc Inc. and subsidiaries; one operating and reportable segment | US GAAP | FY2023 to FY2025 annual; Q1 to Q3 FY2026 quarterly; nine months to 2025-06-30 as comparative |

In July 2026 the issuer repurchased USD 273.7 million of its common stock, financed primarily with USD 301.3 million of net credit facility borrowings; the source states the month but not the day, and the event is kept out of every period figure and shown only in the post-balance-sheet table.
Basis: 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 21

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Statement figures carried in USD thousands; money tables restated to USD millions (US$m) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 2–4 | Unit conversion | 1,197,434 (USD thousands) | 1,197.434 (US$m) | The money tables use millions; no value changes and no rounding is applied | All periods |
| EBITDA (Reported) derived because the issuer states no EBITDA | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | Derived measure | Not stated by the issuer | FY2025: 1,084,889 (USD thousands) | Operating income plus depreciation and amortization from the cash flow statement; stock-based compensation and amortization of right-of-use lease assets are not added back; Analyst Judgement on the definition | FY2024, FY2025, 9M 2025, 9M 2026 |
| Cash Interest Paid for FY2024 and FY2025 converted from USD millions to thousands at stated precision | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 89 | Precision | USD 137.0 million; USD 77.8 million | 137,000; 77,800 (USD thousands) | The debt note states cash interest to USD 0.1 million; the thousands figures carry that precision | FY2024, FY2025, LTM |
| Last-twelve-months construction to 2026-06-30 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4; EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl, page 12 | Period construction | FY2025, 9M 2026 and 9M 2025 components | LTM revenue, EBITDA, operating income, net income, operating cash flow, free cash flow and cash interest paid | Full year plus current stub less prior-year stub; every component is stated, so no component is missing | LTM 2026-06-30 |
| No currency conversion and no normalisation of one-offs | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 | None | As reported | As reported | All statements are in USD; the USD 462.6 million divestiture gain sits below operating income and is left as reported | All periods |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| License | 806,871 | 1,162,709 | 678,628 | 838,210 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Support and cloud services | 1,359,355 | 1,469,180 | 1,083,819 | 1,151,720 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Total software revenue | 2,166,226 | 2,631,889 | 1,762,447 | 1,989,930 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Professional services | 132,246 | 107,337 | 82,984 | 70,247 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Total revenue | 2,298,472 | 2,739,226 | 1,845,431 | 2,060,177 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Cost of license revenue | 46,850 | 46,913 | 33,222 | 36,379 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Cost of support and cloud services revenue | 274,599 | 291,812 | 215,101 | 230,953 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Total cost of software revenue | 321,449 | 338,725 | 248,323 | 267,332 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Cost of professional services revenue | 123,367 | 106,258 | 79,761 | 73,616 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Total cost of revenue | 444,816 | 444,983 | 328,084 | 340,948 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Gross margin | 1,853,656 | 2,294,243 | 1,517,347 | 1,719,229 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Sales and marketing | 558,954 | 566,516 | 424,319 | 417,271 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Research and development | 433,047 | 457,693 | 343,186 | 359,824 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| General and administrative | 232,377 | 226,058 | 162,457 | 222,620 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Amortization of acquired intangible assets | 42,018 | 45,948 | 34,356 | 36,075 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Impairment and other charges (credits), net | -802 | 15,643 | 4,213 | Not supplied: the filing prints a dash for this line | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Total operating expenses | 1,265,594 | 1,311,858 | 968,531 | 1,035,790 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Operating income | 588,062 | 982,385 | 548,816 | 683,439 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Interest expense | -119,653 | -77,019 | -60,058 | -48,359 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Other income, net | 553 | 14,811 | 3,321 | 467,134 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Income before income taxes | 468,962 | 920,177 | 492,079 | 1,102,214 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Provision for income taxes | 92,629 | 186,180 | 105,875 | 226,193 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Net income | 376,333 | 733,997 | 386,204 | 876,021 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| Depreciation and amortization (cash flow statement) | 108,119 | 102,504 | 76,803 | 74,180 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Stock-based compensation (cash flow statement) | 223,461 | 216,205 | 161,395 | 185,848 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| EBITDA (Reported) | 696,181 | 1,084,889 | 625,619 | 757,619 | USD thousands | Calculated: operating income plus depreciation and amortization (calculations C1 to C4); the issuer states no EBITDA | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3; 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 376,333 | 733,997 | 386,204 | 876,021 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Depreciation and amortization | 108,119 | 102,504 | 76,803 | 74,180 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Amortization of right-of-use lease assets | 33,288 | 32,912 | 24,459 | 25,723 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Stock-based compensation | 223,461 | 216,205 | 161,395 | 185,848 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Gain on divestiture of businesses | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | Not supplied: the filing prints a dash for this line | -464,602 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Other non-cash items, net | -1,625 | -3,516 | 159 | -3,010 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Provision (benefit) from deferred income taxes | -39,040 | -26,283 | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Accounts receivable | -34,629 | -121,052 | 173,557 | 158,180 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Accounts payable and accrued expenses | -24,368 | -636 | -21,373 | 214,882 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Accrued compensation and benefits | 8,404 | 20,526 | 11,044 | -10,297 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Deferred revenue | 81,399 | 37,753 | -16,472 | -104,664 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Accrued income taxes | 65,006 | 89,856 | 22,409 | 116,084 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Other current assets and prepaid expenses | -16,137 | -8,458 | 5,525 | -133,193 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Operating lease liabilities | -13,245 | -10,345 | -4,869 | 14,322 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Other noncurrent assets and liabilities | -16,982 | -195,767 | -55,175 | -98,183 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Net Cash from Operating Activities | 749,984 | 867,696 | 763,666 | 851,291 | USD thousands | Reported; interest is classified within operating activities | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Additions to property and equipment | -14,378 | -11,008 | -7,462 | -16,291 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Acquisitions of businesses, net of cash acquired | -93,457 | -6,532 | -6,532 | -3,573 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Contribution to solar energy equity investment | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | Not supplied: the filing prints a dash for this line | -50,146 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Settlement of net investment hedges | -13,078 | -20,753 | -14,560 | 26,549 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Divestiture of businesses | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | Not supplied: the filing prints a dash for this line | 523,306 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Other investing activities | -3,901 | Not supplied: the filing prints a dash for this line | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Net Cash from Investing Activities | -124,814 | -38,293 | -28,554 | 479,845 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Borrowings under credit facility | 1,084,845 | 860,000 | 860,000 | 313,750 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Repayments of senior notes | Not supplied: the filing prints a dash for this line | -500,000 | -500,000 | Not supplied: the filing prints a dash for this line | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Repayments of borrowings under credit facility | -1,038,921 | -912,958 | -876,708 | -88,750 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Repurchases of common stock | Not supplied: the filing prints a dash for this line | -299,998 | -224,987 | -1,326,190 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Proceeds from issuance of common stock | 25,674 | 26,062 | 13,307 | 13,162 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Payments of withholding taxes in connection with stock-based awards | -102,001 | -80,205 | -71,761 | -67,343 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Credit facility origination costs | Not supplied: the filing prints a dash for this line | -1,171 | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Payment of deferred acquisition consideration | -620,040 | Not supplied: the filing prints a dash for this line | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Other financing activity | -282 | -239 | -1,410 | -1,007 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Net Cash from Financing Activities | -650,725 | -908,509 | -801,559 | -1,156,378 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| FX Effect on Cash | 3,223 | -2,372 | -125 | -7,719 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Net Cash Change | -22,332 | -81,478 | -66,572 | 167,039 | USD thousands | Reported; operating plus investing plus financing plus the exchange rate effect | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Opening Cash | 288,798 | 266,466 | 266,466 | 184,988 | USD thousands | Reported; includes restricted cash | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Closing Cash | 266,466 | 184,988 | 199,894 | 352,027 | USD thousands | Reported; includes restricted cash | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 60–61; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| Cash Interest Paid | 137,000 | 77,800 | 59,062 | 40,543 | USD thousands | Reported; FY2024 and FY2025 stated in USD millions to one decimal, nine-month figures from the third-quarter release | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 89; EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl, page 12 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 265,808 | 184,415 | 351,454 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Accounts receivable, net | 861,953 | 1,001,085 | 824,107 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Prepaid expenses | 102,931 | 119,107 | 114,722 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Other current assets | 68,013 | 78,760 | 81,583 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Total current assets | 1,298,705 | 1,383,367 | 1,371,866 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Property and equipment, net | 75,187 | 60,843 | 62,839 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Goodwill | 3,461,891 | 3,493,316 | 3,398,303 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Acquired intangible assets, net | 897,476 | 824,663 | 765,799 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Deferred tax assets | 159,404 | 194,070 | 100,544 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Operating right-of-use lease assets | 133,317 | 114,974 | 126,048 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Other assets | 357,562 | 545,939 | 688,178 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Total Assets | 6,383,542 | 6,617,172 | 6,513,577 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Accounts payable | 24,198 | 11,504 | 34,909 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Accrued expenses and other current liabilities | 129,528 | 136,140 | 300,576 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Accrued compensation and benefits | 173,797 | 199,561 | 167,955 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Accrued income taxes | 39,978 | 28,749 | 85,227 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Current portion of long-term debt | 521,467 | 25,000 | 25,074 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Deferred revenue | 754,039 | 812,271 | 700,298 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Short-term lease obligations | 24,186 | 24,179 | 24,070 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Total current liabilities | 1,667,193 | 1,237,404 | 1,338,109 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Long-term debt | 1,227,105 | 1,172,434 | 1,398,241 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Total Debt | 1,748,572 | 1,197,434 | 1,423,315 | USD thousands | Reported carrying value: current portion plus long-term debt, net of issuance costs on the senior notes; credit facility issuance costs sit in other assets | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Deferred tax liabilities | 32,216 | 30,151 | 30,241 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Long-term deferred revenue | 21,235 | 14,794 | 12,229 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Long-term lease obligations | 157,568 | 148,254 | 160,309 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Other liabilities | 63,827 | 187,906 | 104,705 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Total Liabilities | 3,169,144 | 2,790,943 | 3,043,834 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Common stock | 1,202 | 1,195 | 1,107 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Additional paid-in capital | 1,965,307 | 1,822,590 | 610,985 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Retained earnings | 1,349,610 | 2,083,607 | 2,959,628 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Accumulated other comprehensive loss | -101,721 | -81,163 | -101,977 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Total Equity | 3,214,398 | 3,826,229 | 3,469,743 | USD thousands | Reported | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| Cash & Equivalents | 265,808 | 184,415 | 351,454 | USD thousands | Reported; excludes restricted cash | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 58–59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 4.000% senior notes due 2028 | Senior unsecured notes issued by Ptc Inc.; no co-issuer is stated | Not supplied: carrying value by instrument is not stated | 500,000 | Not applicable | Not applicable | Unsecured; guarantors are not stated | Senior | USD | 500,000 | Not applicable | 4.000% | Fixed | Not applicable | Not applicable | Not applicable | February 2028 (day not stated) | 0 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 19; 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 87 |
| Credit facility revolver line | Revolving credit facility; borrowers Ptc Inc. and certain foreign subsidiaries, of which USD 46.3 million was borrowed by a foreign subsidiary | Not supplied: carrying value by instrument is not stated | 475,000 | 475,000 | 1,250,000 | Secured: first-priority perfected security interest for foreign-subsidiary borrowings, as stated for the facility; no subsidiary guarantors at the filing of the FY2025 annual report | First-priority secured | USD | 475,000 | Not applicable | Variable; 5.0% annual rate on borrowings at 2026-06-30 | Floating | Adjusted Daily Simple RFR or adjusted Term SOFR for USD borrowings | Not supplied: the spread over the base rate is not stated | Not supplied: no floor is stated | 2028-01-03 | 0 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 19; 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 88 |
| Credit facility term loan | Term loan under the same credit agreement; borrower Ptc Inc. | Not supplied: carrying value by instrument is not stated | 450,074 | 450,074 | Not applicable | Secured: same facility, security and guarantor position as the revolver | First-priority secured | USD | 450,074 | Not applicable | Variable; 5.0% annual rate on borrowings at 2026-06-30 | Floating | Adjusted Daily Simple RFR or adjusted Term SOFR for USD borrowings | Not supplied: the spread over the base rate is not stated | Not supplied: no floor is stated | 2028-01-03 | 25,000 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 19 |
| Financing cost adjustment | Unamortized issuance costs of the senior notes | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -1,759 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component (FY2025) | Current Stub (9M 2026) | Prior-Year Stub (9M 2025) | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM to 2026-06-30 | USD 2,739.226m | USD 2,060.177m | USD 1,845.431m | USD 2,953.972m | Calculated | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | Full year plus current stub less prior-year stub (calculation C9); includes the Kepware and ThingWorx businesses until 2026-03-13 |
| Operating income | LTM to 2026-06-30 | USD 982.385m | USD 683.439m | USD 548.816m | USD 1,117.008m | Calculated | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | Full year plus current stub less prior-year stub (calculation C10); includes the Kepware and ThingWorx businesses until 2026-03-13 |
| EBITDA (Reported) | LTM to 2026-06-30 | USD 1,084.889m | USD 757.619m | USD 625.619m | USD 1,216.889m | Calculated | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | Full year plus current stub less prior-year stub (calculation C8); derived from operating income and depreciation and amortization; includes the Kepware and ThingWorx businesses until 2026-03-13 |
| Net income | LTM to 2026-06-30 | USD 733.997m | USD 876.021m | USD 386.204m | USD 1,223.814m | Calculated | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | Full year plus current stub less prior-year stub (calculation C11) |
| Net cash from operating activities | LTM to 2026-06-30 | USD 867.696m | USD 851.291m | USD 763.666m | USD 955.321m | Calculated | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | Full year plus current stub less prior-year stub (calculation C12) |
| Free cash flow | LTM to 2026-06-30 | USD 856.688m | USD 835.000m | USD 756.204m | USD 935.484m | Calculated | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | Full year plus current stub less prior-year stub (calculation C17) |
| Cash interest paid | LTM to 2026-06-30 | USD 77.800m | USD 40.543m | USD 59.062m | USD 59.281m | Calculated | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4; EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl, page 12 | Full year plus current stub less prior-year stub (calculation C18); the FY2025 component is stated only to USD 0.1 million |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,748.572 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 58 | 696.181 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60 | FY2024 / 2024-09-30 | USD | US$m | 2.51 | Calculated | Tier 1 | Reported EBITDA is derived, not issuer-stated |
| Net debt / EBITDA | (Gross debt - Cash) / EBITDA (Reported) | 1,482.764 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 58 | 696.181 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60 | FY2024 / 2024-09-30 | USD | US$m | 2.13 | Calculated | Tier 1 | Reported EBITDA is derived, not issuer-stated |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 696.181 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60 | 137.000 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 89 | FY2024 / 2024-09-30 | USD | US$m | 5.08 | Calculated | Tier 1 | Reported EBITDA is derived, not issuer-stated; cash interest stated to USD 0.1 million |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,197.434 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 58 | 1,084.889 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60 | FY2025 / 2025-09-30 | USD | US$m | 1.10 | Calculated | Tier 1 | Reported EBITDA is derived, not issuer-stated |
| Net debt / EBITDA | (Gross debt - Cash) / EBITDA (Reported) | 1,013.019 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 58 | 1,084.889 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60 | FY2025 / 2025-09-30 | USD | US$m | 0.93 | Calculated | Tier 1 | Reported EBITDA is derived, not issuer-stated |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,084.889 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60 | 77.800 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 89 | FY2025 / 2025-09-30 | USD | US$m | 13.94 | Calculated | Tier 1 | Reported EBITDA is derived, not issuer-stated; cash interest stated to USD 0.1 million |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,423.315 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18 | 1,216.889 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | 2026-06-30 | USD | US$m | 1.17 | Calculated | Tier 2b | Reported EBITDA is derived, not issuer-stated; last twelve months, including the divested businesses until 2026-03-13 |
| Net debt / EBITDA | (Gross debt - Cash) / EBITDA (Reported) | 1,071.861 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18 | 1,216.889 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | 2026-06-30 | USD | US$m | 0.88 | Calculated | Tier 2b | Reported EBITDA is derived, not issuer-stated; last twelve months, including the divested businesses until 2026-03-13 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,216.889 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | 59.281 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 89; EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl, page 12 | 2026-06-30 | USD | US$m | 20.53 | Calculated | Tier 2b | Reported EBITDA is derived, not issuer-stated; last twelve months, including the divested businesses until 2026-03-13; cash interest stated to USD 0.1 million |
| Revenue growth | Revenue FY2025 / Revenue FY2024 - 1 | 2,739,226 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59 | 2,298,472 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59 | FY2025 | USD | USD thousands | 0.1918 | Calculated | Tier 1 | Fraction of the denominator |
| Revenue growth | Revenue 9M 2026 / Revenue 9M 2025 - 1 | 2,060,177 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 | 1,845,431 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 | 9M 2026 | USD | USD thousands | 0.1164 | Calculated | Tier 2b | Fraction of the denominator |
| Operating margin | Operating income / Revenue | 982,385 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59 | 2,739,226 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59 | FY2025 | USD | USD thousands | 0.3586 | Calculated | Tier 1 | Fraction of the denominator |
| Operating margin | Operating income / Revenue | 683,439 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 | 2,060,177 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 | 9M 2026 | USD | USD thousands | 0.3317 | Calculated | Tier 2b | Fraction of the denominator |
| EBITDA margin | EBITDA (Reported) / Revenue | 1,084,889 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60 | 2,739,226 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59 | FY2025 | USD | USD thousands | 0.3961 | Calculated | Tier 1 | Fraction of the denominator; derived EBITDA is not issuer-stated |
| Free cash flow / EBITDA | Free cash flow / EBITDA (Reported) | 856,688 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60 | 1,084,889 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60 | FY2025 | USD | USD thousands | 0.7897 | Calculated | Tier 1 | Fraction of the denominator; derived EBITDA is not issuer-stated |
| Free cash flow / EBITDA | Free cash flow / EBITDA (Reported) | 935,484 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 | 1,216,889 | 10-K_2025-09-30_ptc-20250930.htm.jsonl, pages 59–60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 3–4 | LTM 2026-06-30 | USD | USD thousands | 0.7688 | Calculated | Tier 2b | Fraction of the denominator; derived EBITDA is not issuer-stated |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue growth, year on year (%) | 9.60 | 19.18 | Not supplied: nine months 2024 is not in the file set | 11.64 | Mixed | FY2024 uses FY2023 revenue of 2,097,053 from the FY2025 annual report; revenue timing under ASC 606 varies with contract mix; the divestiture removes revenue from March 2026 |
| Profitability | Operating margin (%) | 25.58 | 35.86 | 29.74 | 33.17 | Up | Reported on GAAP operating income; the issuer's own non-GAAP operating margin is higher |
| Profitability | EBITDA margin (%), reported EBITDA derived | 30.29 | 39.61 | 33.90 | 36.77 | Up | Derived as operating income plus depreciation and amortization |
| Cash flow | Free cash flow (US$m) | 735.606 | 856.688 | 756.204 | 835.000 | Up | Operating cash flow less additions to property and equipment; the issuer reports the same figures for the nine-month periods; nine months 2026 includes divestiture-related items |
| Cash flow | Free cash flow / EBITDA (x) | 1.06 | 0.79 | 1.21 | 1.10 | Mixed | Working capital and noncurrent items move this ratio between periods |
| Operating (period-end) | ARR as reported (US$m) | 2,250 | 2,480 | 2,415.6 | 2,412.4 | Flat | FY2024 and FY2025 are stated in USD billions to two decimals (2.25 and 2.48); the 2026 figure no longer includes the divested businesses |
| Operating (period-end) | ARR excluding divested businesses (US$m) | Not supplied: the basis starts in fiscal 2026 | Not supplied: the basis starts in fiscal 2026 | 2,255.6 | 2,412.4 | Up | A separate definition from the row above; never joined to it |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA from components; adjusted EBITDA only where the issuer states it | No EBITDA stated; non-GAAP operating income excludes stock-based compensation, amortization of acquired intangibles, acquisition costs and impairment | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 24 | All periods | Non-GAAP operating income exceeds GAAP operating income by USD 285.4 million in 9M 2026 (calculation C36) | Fundamental credit; Downside; Forward credit model | Ratios use derived reported EBITDA; the issuer measure is not substituted |
| Total debt | Balance-sheet carrying value | Principal as printed in the debt note | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18 | 2026-06-30 | Principal 1,425.074 against carrying value 1,423.315, a difference of 1.759 of note issuance costs (calculation C23) | Liquidity; Refinancing & LME | Carrying value is used in ratios; principal is kept in the debt instruments table |
| Free cash flow | Levered free cash flow stating whether working capital is included | Operating cash flow less capital expenditures | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 24 | All periods | Nine months 2026 free cash flow of 835,000 includes divestiture-related payments and tax effects | Forward credit model | The issuer definition is used and labelled; divestiture effects are not removed |
| Net debt cash | Cash and cash equivalents | Cash flow statement closing cash includes restricted cash | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 2 and 4 | 2026-06-30 | Closing cash 352,027 against cash and cash equivalents 351,454, a difference of 573 (calculation C35) | Liquidity | Cash and cash equivalents is used for net debt |
| Kepware and ThingWorx sale (multi-figure event) | All figures with their roles in one row | Total consideration USD 530.8 million; cash received USD 523.3 million (cash flow line 523,306 thousand); gain USD 462.6 million in other income against 464,602 thousand in the cash flow statement; tax USD 95.6 million; net assets sold USD 68.2 million | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 11; EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl, page 11 | 9M 2026 | The cash flow gain adds USD 2.0 million from an earlier PLM services divestiture (calculation C38); consideration is subject to working capital and indebtedness adjustments | Financial foundation readers; Fundamental credit | Operating income excludes the gain; net income and cash flow include it; each figure keeps its own role |
| Revenue and ARR comparability | One basis for a trend | ARR is reported as reported and excluding divested businesses; Kepware and ThingWorx had USD 46 million of revenue in Q3 2025 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 24 | Q3 2025 to 9M 2026 | ARR 2,412.4 against 2,415.6 as reported and 2,255.6 excluding divested businesses a year earlier | Fundamental credit; Forward credit model | Both bases are kept as separate rows and never joined |
| Debt basis and leases | Lease liabilities on their own lines are not added to Total Debt | Short-term and long-term lease obligations are separate balance sheet lines | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 | 2026-06-30 | Lease obligations of 184,379 thousand sit outside debt (calculation C37) | Liquidity; Refinancing & LME | Kept outside Total Debt and named here |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and interest cover on reported EBITDA to 2026-06-30 | Ready with Limitations | EBITDA is derived; cash interest for the fiscal years is stated to USD 0.1 million; the balance sheet is 141 days old | Treat ratios as June 2026 values; supply later statements if issued |
| Liquidity and maturity ladder | Ready with Limitations | Letters of credit at 2026-06-30 are not stated; the July 2026 borrowing is not in the balances | Supply the fourth-quarter FY2026 report |
| Debt stack and ranking | Ready with Limitations | Ranking follows stated security; the credit agreement and indenture are not supplied | Supply the executed agreements |
| Covenant headroom | Not Ready | The required financial ratios and their levels are not stated | Supply the credit agreement and compliance certificates |
| Adjusted EBITDA analysis | Not Ready | The issuer states no adjusted EBITDA and no add-back list | None possible from the filings |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 46 |
| Calculated | 30 |
| Assumption-Based | 2 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 5 |
| Fields present | 13 |
| Fields total | 14 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 0 |

## Calculations

| Calculation ID | Item | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | EBITDA (Reported), FY2024 | Operating income 588,062 plus depreciation and amortization 108,119 (USD thousands) | 696,181 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59 |
| C2 | EBITDA (Reported), FY2025 | Operating income 982,385 plus depreciation and amortization 102,504 (USD thousands) | 1,084,889 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59 |
| C3 | EBITDA (Reported), 9M 2025 | Operating income 548,816 plus depreciation and amortization 76,803 (USD thousands) | 625,619 (USD thousands) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| C4 | EBITDA (Reported), 9M 2026 | Operating income 683,439 plus depreciation and amortization 74,180 (USD thousands) | 757,619 (USD thousands) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| C5 | Net debt at 2024-09-30 | Gross debt 1,748.572 less cash 265.808 (US$m) | 1,482.764 (US$m) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 58 |
| C6 | Net debt at 2025-09-30 | Gross debt 1,197.434 less cash 184.415 (US$m) | 1,013.019 (US$m) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 58 |
| C7 | Net debt at 2026-06-30 | Gross debt 1,423.315 less cash 351.454 (US$m) | 1,071.861 (US$m) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| C8 | LTM EBITDA (Reported) to 2026-06-30 | FY2025 1,084,889 plus 9M 2026 757,619 less 9M 2025 625,619 (USD thousands) | 1,216,889 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| C9 | LTM revenue to 2026-06-30 | FY2025 2,739,226 plus 9M 2026 2,060,177 less 9M 2025 1,845,431 (USD thousands) | 2,953,972 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| C10 | LTM operating income to 2026-06-30 | FY2025 982,385 plus 9M 2026 683,439 less 9M 2025 548,816 (USD thousands) | 1,117,008 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| C11 | LTM net income to 2026-06-30 | FY2025 733,997 plus 9M 2026 876,021 less 9M 2025 386,204 (USD thousands) | 1,223,814 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| C12 | LTM net cash from operating activities to 2026-06-30 | FY2025 867,696 plus 9M 2026 851,291 less 9M 2025 763,666 (USD thousands) | 955,321 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| C13 | Free cash flow (operating cash flow less additions to property and equipment), FY2024 | 749,984 less 14,378 (USD thousands) | 735,606 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| C14 | Free cash flow (operating cash flow less additions to property and equipment), FY2025 | 867,696 less 11,008 (USD thousands) | 856,688 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| C15 | Free cash flow (operating cash flow less additions to property and equipment), 9M 2025 | 763,666 less 7,462 (USD thousands) | 756,204 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| C16 | Free cash flow (operating cash flow less additions to property and equipment), 9M 2026 | 851,291 less 16,291 (USD thousands) | 835,000 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| C17 | LTM free cash flow to 2026-06-30 | FY2025 856,688 plus 9M 2026 835,000 less 9M 2025 756,204 (USD thousands) | 935,484 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| C18 | LTM cash interest paid to 2026-06-30 | FY2025 77,800 plus 9M 2026 40,543 less 9M 2025 59,062 (USD thousands) | 59,281 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 89; EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl, page 12 |
| C19 | Debt maturing in fiscal 2028 at 2026-06-30 | Term loan balloon 418.7 plus revolver 475.0 plus 4.000% senior notes 500.0 (US$m) | 1,393.7 (US$m) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 18–19 |
| C20 | Contractual principal on the printed schedule at 2026-06-30 | 6.3 plus 25.0 plus 1,393.7 (US$m) | 1,425.0 (US$m) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 18–19 |
| C21 | Term loan principal not on the printed payment schedule | Term loan principal 450.074 less printed payments 6.3 plus 25.0 plus 418.7 (US$m) | 0.074 (US$m) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, pages 18–19 |
| C22 | Reconciling items between schedule principal and carrying value at 2026-06-30 | Unamortized issuance costs on the senior notes -1.759 plus unscheduled term loan principal 0.074 (US$m) | -1.685 (US$m); principal 1,425.0 plus -1.685 is carrying value 1,423.315 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18 |
| C23 | Total debt principal at 2026-06-30 as printed | Notes 500.000 plus revolver 475.000 plus term loan 450.074 (US$m) | 1,425.074 (US$m); carrying value 1,423.315 is lower by 1.759 of note issuance costs | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18 |
| C24 | Cumulative principal through Credit facility revolver line over LTM EBITDA (Reported) | 475.000 divided by 1,216.889 (US$m) | 0.39x | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18 |
| C25 | Cumulative principal through Credit facility term loan over LTM EBITDA (Reported) | 925.074 divided by 1,216.889 (US$m) | 0.76x | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18 |
| C26 | Cumulative principal through 4.000% senior notes due 2028 over LTM EBITDA (Reported) | 1,425.074 divided by 1,216.889 (US$m) | 1.17x | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18 |
| C27 | Pro forma net debt after the July 2026 repurchase | Net debt 1,071.861 plus repurchase cash cost 273.7 (US$m) | 1,345.561 (US$m) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 21 |
| C28 | Pro forma net debt to LTM EBITDA (Reported) | 1,345.561 divided by 1,216.889 (US$m) | 1.11x | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 21 |
| C29 | Gross debt if the July 2026 net borrowings are added (not entered in any table) | Carrying value 1,423.315 plus net borrowings 301.3 (US$m) | 1,724.615 (US$m) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 18; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 21 |
| C30 | Borrowings in July 2026 net of the repurchase | Net borrowings 301.3 less repurchase 273.7 (US$m) | 27.6 (US$m); its use is not stated | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 21 |
| C31 | Net borrowings under the credit facility, 9M 2026 | Borrowings 313,750 less repayments 88,750 (USD thousands) | 225,000 (USD thousands); the quarterly report states USD 225 million | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 31 |
| C32 | Net debt repayments in FY2025 | Repayments 500,000 plus 912,958 less borrowings 860,000 (USD thousands) | 552,958 (USD thousands); the annual report states USD 553 million | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 34; 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60 |
| C33 | Repurchases of common stock, 9M 2026 | Cash flow line 1,326,190 (USD thousands) | The quarterly report states USD 1,326 million | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 31 |
| C34 | Change in deferred revenue (current) since 2025-09-30 | 700,298 less 812,271 (USD thousands) | -111,973 (USD thousands) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2 |
| C35 | Restricted cash in the cash flow statement's closing cash at 2026-06-30 | Closing cash 352,027 less cash and cash equivalents 351,454 (USD thousands) | 573 (USD thousands) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| C36 | Non-GAAP operating income less GAAP operating income, 9M 2026 | 968.8 less 683.4 (USD millions) | 285.4 (USD millions) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 24 |
| C37 | Lease obligations carried outside debt at 2026-06-30 | Short-term 24,070 plus long-term 160,309 (USD thousands) | 184,379 (USD thousands); the headquarters lease runs through June 2037 | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 2; 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 100 |
| C38 | Gains in the cash flow statement for the divestitures, 9M 2026 | Kepware and ThingWorx 462.6 plus 2.0 from an earlier divestiture (USD millions) | 464.6 (USD millions); cash flow line 464,602 thousand | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4; EX-99.1_2026-07-29_ptc-ex99_1.htm.jsonl, page 11 |
| C39 | Items outside debt at 2026-06-30 settled after the balance sheet date | Solar energy investment not yet paid 134,602 plus repurchase executed but not settled 25,000 (USD thousands) | 159,602 (USD thousands) | 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 4 |
| C40 | Free cash flow to EBITDA (Reported), FY2025 | 856,688 divided by 1,084,889 (USD thousands) | 0.79x | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 60 |
| C41 | Free cash flow to EBITDA (Reported), LTM to 2026-06-30 | 935,484 divided by 1,216,889 (USD thousands) | 0.77x | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_ptc-20260630.htm.jsonl, page 3 |
| C42 | Defined benefit pension projected benefit obligation at 2025-09-30 as printed | Projected benefit obligation, end of year (USD thousands) | 69,460 (USD thousands) | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 95 |
| C43 | Purchase obligations at 2025-09-30 as printed | Total 188.8 of which 91.9 expected in FY2026 and 96.9 thereafter (USD millions) | 188.8 (USD millions) against 188.8 total | 10-K_2025-09-30_ptc-20250930.htm.jsonl, page 35 |

## Gaps

- EBITDA is not stated by the issuer in any period, so EBITDA (Reported) is derived as operating income plus depreciation and amortization; every leverage and cover ratio depends on that definition. Severity: Medium. Action: none possible from the filings.
- Adjusted EBITDA and its add-back list are not stated, so the adjusted ratios and the EBITDA bridge are not supplied. Severity: Medium. Action: none possible from the filings.
- The credit facility's required financial ratios are described but no test level, step-down or definition is printed, so covenant headroom is not calculable. Severity: High. Action: obtain the executed credit agreement and compliance certificates.
- No statements after 30 June 2026 are supplied, although the as-of date is 141 days later; the July 2026 borrowing of USD 301.3 million and repurchase of USD 273.7 million are stated without a resulting balance, so pro forma net debt rests on the repurchase cost alone, ignores other July cash flows and has no stated day. Severity: High. Action: supply the fourth-quarter FY2026 report if issued.
- Cash interest paid for FY2024 and FY2025 is stated only in USD millions to one decimal, so the FY2025 and last-twelve-months interest cover carry that rounding. Severity: Low. Action: none needed for the snapshot.
- Letters of credit and bank guarantees are stated at 2025-09-30 and 2024-09-30 but not at 30 June 2026, and unused revolver commitments of USD 774.9 million exceed the USD 757.5 million available to borrow by USD 17.4 million for a reason the filing does not give. Severity: Medium. Action: obtain the facility compliance or borrowing-base detail.
- Items outside debt at 30 June 2026 total USD 159,602 thousand, an unpaid solar energy investment of USD 134,602 thousand and a repurchase executed but not settled of USD 25,000 thousand, and the settlement dates are not stated. Severity: Medium. Action: obtain the payment timing from management.
- Several statement lines are Not supplied in some periods because the filing prints a dash or does not present the line in that period: impairment and other charges in nine months 2026, the gain on divestiture in the fiscal years and nine months 2025, deferred income taxes in the nine-month columns, the solar energy contribution and divestiture proceeds before 2026, other investing activities, repayments of senior notes in FY2024 and nine months 2026, repurchases of common stock in FY2024, credit facility origination costs and deferred acquisition consideration. No zero is implied. Severity: Low. Action: none needed.
- No segment revenue schedule exists because the issuer reports one operating and reportable segment; revenue by line of business is printed in the filings but is not a segment and is not summed here. Severity: Low. Action: none.
- Carrying value by debt instrument is not stated, so each instrument is carried at principal with one financing cost adjustment for the senior notes; issuance costs of the revolver and term loan sit in other assets and are not netted from debt. Severity: Low. Action: none needed.
- The spread over the base rate and any floor on the credit facility are not stated, and the exact maturity day of the 2028 senior notes is not stated. Severity: Low. Action: obtain the credit agreement and indenture.
- The KPI dashboard shows Not supplied for revenue growth in nine months 2025 because nine months 2024 is not in the file set, and for ARR excluding divested businesses at the fiscal year ends because that basis starts in fiscal 2026. Severity: Low. Action: none needed.
- Finance lease amounts are not stated because finance leases are carried within property and equipment and other balance sheet lines; pension and purchase obligation figures are available only at FY2025. Severity: Low. Action: obtain the lease and pension notes of the next annual report.
- Discrete quarters Q1, Q2 and Q3 of FY2026 and a standalone fourth quarter of FY2025 are not tabulated; the nine-month and annual columns are. Severity: Low. Action: build discrete quarters from the quarterly reports if a quarterly view is needed.
- The interim quarterly reports and releases are unaudited and the filings state no auditor review, so nine-month figures carry lower evidence quality than the annual figures. Severity: Low. Action: none.

## Next module

The orchestrator selects the next module.
