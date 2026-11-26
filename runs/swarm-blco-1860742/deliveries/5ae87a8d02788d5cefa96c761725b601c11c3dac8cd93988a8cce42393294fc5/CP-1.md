---
issuer_id: blco-1860742
module_id: CP-1
analysis_date: 2026-11-18
---

## Request

Bausch & Lomb Corp (reporting as Bausch + Lomb Corporation and its subsidiaries; issuer id blco-1860742), as of 2026-11-18, credit snapshot pathway. Scope: the issuer's financial foundation from the five supplied filings, namely statements, debt, liquidity, leverage and coverage to 2026-09-30. Figures are in US dollars; the run settings are context, not evidence.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_blco_blco-20241231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-19 | d1a818e6dae62c0569001be3adf70a8440ab09b135fbd8a8415d916f347ac944 | Audited 2022 to 2024 statements, year-end 2023 balance sheet, year-end 2024 debt, revolver availability and ratings |
| 10-K_2025-12-31_blco_blco-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-18 | f9be8b58ba08e3778eb7929adfd8e91c7937b14763b1612985a5ea40049fae96 | Audited 2023 to 2025 statements, notes, debt, leases, pensions, cash interest paid and segments |
| 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-29 | b5fd820786b285fad91b4bbfc64c3e7e4ef0ef85e352ca3af624a2c65416917e | Checked for printed debt and interest figures; superseded by the third-quarter report |
| 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-29 | 756a1d9122dd4fe39810dfb8ff6416d6377e3c912267a2effad38ff1ca21dc42 | Checked for printed debt and interest figures; superseded by the third-quarter report |
| 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-28 | 846d19ab6fa76521b0c1971958df2b6423a7a62d000b6bf115cb56f37aff87b9 | Nine-month 2026 and 2025 statements, 2026-09-30 balance sheet, debt table, maturities, covenants, liquidity and events after the quarter |

| Module | Supplied handoff | sha256 | Use |
|---|---|---|---|
| Source readiness (CP-0) | Source readiness handoff of this run | 93efafeefba58f7d7010f8901bd5ce70298fb793786add3e8b2bb377ee0af733 | Gaps and limits of the five filings: no issuer-stated EBITDA, no executed debt documents, nothing dated after 2026-10-28 |

## Findings

### Bottom line

Leverage fell to 6.47x total debt and 5.82x net debt to LTM reported EBITDA at 2026-09-30, from 9.52x and 8.80x at FY2025, but cash interest cover cannot be measured for the latest twelve months, so the improvement is unproven against debt service.
Basis: 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308; calculation C23; calculation C24; calculation C13

The improvement comes from USD 253 million more LTM EBITDA, not from debt reduction, because total debt rose to USD 5,095 million from USD 5,082 million. FY2025 cash interest cover was 1.41x. Cash and revolver availability of USD 1,179 million cover the fourth-quarter cash needs the company states, about USD 357 million, and nothing but amortization falls due before 2028. Net leverage would be 5.93x after the acquisition or 5.92x after the executive payment announced after the quarter.
Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–34; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 89–90; calculation C20; calculation C21; calculation C25; calculation C28; calculation C31; calculation C35; calculation C39; calculation C40

### Key findings

- Leverage fell because earnings rose, not because debt fell. Reported EBITDA, which the issuer does not state and which is built here as operating income plus depreciation and amortization, was USD 787 million for the last twelve months against USD 534 million for FY2025, while total debt moved from USD 5,082 million to USD 5,095 million. Nine-month operating income was USD 271 million against USD 1 million a year earlier, on revenue of USD 4,013 million against USD 3,696 million, and USD 62 million of non-cash inventory step-up amortization sat in the 2025 comparison period while the 2026 statement prints none, so about USD 62 million of the rise is the end of a non-cash charge and not operating improvement.
  Basis: 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17; calculation C13; calculation C20; calculation C21; calculation C55; calculation C60
- Coverage is thin and only partly measurable. Reported EBITDA covered cash interest paid 1.41x in FY2025, 1.44x in FY2024 and 2.15x in FY2023, but cash interest paid is printed only in the annual reports, so the latest twelve months cannot be measured on the method's cash basis. On accrued interest expense, which the quarterly statements do print, LTM EBITDA covers USD 383 million of expense 2.05x against 1.27x in FY2025; that is a labelled proxy, not the method's measure.
  Basis: 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; calculation C25; calculation C26; calculation C18
- Cash conversion improved with earnings. Nine-month operating cash flow was USD 418 million against USD 147 million and capital expenditure fell to USD 226 million from USD 273 million, so free cash flow was USD 192 million against negative USD 126 million, and LTM free cash flow is USD 252 million after annual deficits of USD 198 million in FY2023, USD 59 million in FY2024 and USD 66 million in FY2025. Operating cash flow was 72.57% of nine-month reported EBITDA against 45.51% a year earlier, and capital expenditure was 5.63% of nine-month revenue against 7.39%.
  Basis: 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17; calculation C22; calculation C19; calculation C49; calculation C48
- Liquidity covers the stated near-term needs. Cash of USD 513 million plus USD 666 million of revolver availability, after USD 100 million of borrowings and USD 34 million of letters of credit, is USD 1,179 million against USD 1,047 million at FY2025. The company states fourth-quarter 2026 cash needs of about USD 357 million, being interest of about USD 130 million, amortization of USD 7 million, capital expenditure of about USD 60 million, the USD 85 million acquisition and the USD 75 million executive payment, so liquidity is about 3.30x those needs.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–34; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 89–90; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 188; calculation C28; calculation C29; calculation C31; calculation C32
- The debt is back-ended. The four main instruments are senior secured and rank equally. Nothing falls due before 2028 beyond amortization; USD 1,440 million falls due in 2028, led by the 2028 secured notes of USD 1,400 million, and USD 3,434 million falls due in 2031, being the term loan balance and the euro notes. The weighted average stated interest rate is 7.63% and the revolver of USD 800 million matures in 2030.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–36; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 191–194; calculation C35; calculation C36; calculation C38
- Reported EBITDA is unadjusted. It carries USD 127 million of other expense, net over the last twelve months, including restructuring, litigation, acquired research and contingent-consideration charges. Adding that back, a house sensitivity labelled Analyst Judgement and applied in no ratio, would lift LTM EBITDA to USD 914 million and cut total leverage to 5.57x. The issuer states no adjusted EBITDA, so no issuer-adjusted figure or bridge exists to show beside it.
  Basis: 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 303; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; calculation C54; calculation C41; Source readiness (CP-0)
- Total debt of USD 5,095 million is balance-sheet carrying value and includes USD 78 million of failed sale-leaseback obligations. Contractual principal is USD 5,065 million, so carrying value is USD 30 million higher: USD 78 million of other financial liabilities less USD 48 million of unamortized discount. Operating lease liabilities of USD 163 million and a net pension and retiree deficit of USD 31 million at 2025-12-31 sit outside debt and are in no ratio here.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 38; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 292–297; calculation C33; calculation C34; calculation C42
- Two events after 2026-09-30 would raise net debt of USD 4,582 million: USD 85 million of upfront cash for the acquisition of surgical manufacturing businesses, giving USD 4,667 million or 5.93x, and the USD 75 million lump-sum payment to the departing chief executive, giving USD 4,657 million or 5.92x. Neither is in the period figures; the filing describes the acquisition as expected to close in the fourth quarter, and it does not state when the payment is made.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 56; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 89–90; calculation C4; calculation C39; calculation C40
- The material gaps are cash interest paid for the interim periods, any issuer-stated adjusted EBITDA, and a stated rank for USD 91 million of other debt-like items left out of the debt stack. Covenant headroom is not established because the issuer prints no covenant ratio.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 38; Source readiness (CP-0); calculation C37

### Contrary evidence and what would change the view

The strongest case that leverage has not truly improved is that the gain is a nine-month figure measured against a 2025 base that carried USD 62 million of step-up amortization, that total debt is higher than at FY2025, and that cash interest, the real debt-service test, is unmeasured for the latest period. Cash interest paid has differed from accrued expense by USD 16 million to USD 45 million in each of the last three years, in both directions, so the proxy of 2.05x is a guide and not a measure.
Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308; calculation C55; calculation C26; calculation C21; calculation C56

The view would strengthen if fourth-quarter results keep LTM EBITDA at or above USD 787 million, and if the USD 85 million acquisition and the USD 75 million payment are funded from cash without a revolver draw. It would weaken if nine-month cash interest paid proves far above the proxy, or if the issuer's own covenant definition of earnings gives a lower figure than reported EBITDA.
Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 56; calculation C13; calculation C39; calculation C40

### Limitations

- Reported EBITDA is constructed from operating income and the depreciation and amortization line of the cash flow statement; the issuer defines no EBITDA, so every ratio here depends on that construction and on no add-backs.
  Basis: Source readiness (CP-0)
- Cash interest paid, income taxes paid, leases and pensions are printed only for full years, so interim and latest-twelve-month cash coverage cannot be built and year-end 2025 claims are dated nine months before the latest debt figures.
  Basis: 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 296–297
- Nine-month columns stand in for the discrete quarters; a discrete third-quarter income statement is printed but its cash flows and depreciation are not, so no discrete quarter is carried.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17
- Pro forma figures after 2026-09-30 are single-event illustrations from stated amounts, not cumulative and not a forecast.

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 8.91 | 8.26 | x | Reported EBITDA built from operating income plus depreciation and amortization; debt at carrying value including other financial liabilities |
| FY2024 / 2024-12-31 | 8.00 | 7.49 | x | Reported EBITDA built from operating income plus depreciation and amortization; debt at carrying value including other financial liabilities |
| FY2025 / 2025-12-31 | 9.52 | 8.80 | x | Reported EBITDA built from operating income plus depreciation and amortization; debt at carrying value including other financial liabilities |
| 2026-09-30 | 6.47 | 5.82 | x | Debt at 2026-09-30 over LTM reported EBITDA of 787 (FY2025 plus nine months 2026 less nine months 2025); no issuer-adjusted EBITDA exists |

The latest row divides period-end debt by a last-twelve-months EBITDA built from three filings, and no ratio uses an issuer-adjusted measure.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2023 / 2023-12-31 | 2.15 | x | Reported EBITDA over interest paid from the supplemental cash flow note |
| FY2024 / 2024-12-31 | 1.44 | x | Reported EBITDA over interest paid from the supplemental cash flow note |
| FY2025 / 2025-12-31 | 1.41 | x | Reported EBITDA over interest paid from the supplemental cash flow note |
| 2026-09-30 | Not supplied: cash interest paid is printed in the annual reports only | x | LTM EBITDA of 787 is stated but the nine-month cash interest paid is not printed, so the cash-basis cover is not calculable; an accrued-expense proxy is in the calculation register |

The latest period has no cash-basis cover because the quarterly reports print no cash interest paid.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 331 | Not supplied: the 2024 annual report states no revolver availability at 2023-12-31 | US$m | Balance-sheet cash excluding restricted cash of 3; revolver availability for this date is not printed in the supplied filings |
| FY2024 / 2024-12-31 | 305 | 358 | US$m | Balance-sheet cash excluding restricted cash; revolver availability is the commitment less borrowings and letters of credit |
| FY2025 / 2025-12-31 | 383 | 664 | US$m | Balance-sheet cash excluding restricted cash; revolver availability is the commitment less borrowings and letters of credit |
| 2026-09-30 | 513 | 666 | US$m | Balance-sheet cash excluding restricted cash; revolver availability is the commitment less borrowings and letters of credit |

Undrawn committed facilities are net of letters of credit and subject to customary conditions, so they are availability rather than raw undrawn commitments.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 7 | US$m | Contractual principal due in the rest of 2026 (October to December) at the 2026-09-30 balance sheet date; scheduled term loan amortization |
| FY2027 | 28 | US$m | Contractual principal at 2026-09-30; scheduled term loan amortization |
| FY2028 | 1440 | US$m | Contractual principal at 2026-09-30; includes the 2028 secured notes of 1400 and term loan amortization of 28; the remaining 12 is not itemised in the filing |
| FY2029 | 28 | US$m | Contractual principal at 2026-09-30; scheduled term loan amortization |
| FY2030 | 128 | US$m | Contractual principal at 2026-09-30; includes the revolver of 100 drawn and term loan amortization |
| FY2031 | 3434 | US$m | Contractual principal at 2026-09-30; term loan balance after amortization of 2669 plus the euro notes of 765 |

The table prints a dash for amounts after 2031 and the rows add to the contractual principal of 5065, so the ladder is drawn at 2026-09-30 and its first row covers three months only.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | LTM 2026-09-30 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Revenue | 4146 | 4791 | 5101 | 3696 | 4013 | 5418 | USD millions | Reported; LTM calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Revenue growth | 10.03% | 15.56% | 6.47% | Not supplied: nine months 2024 is not in the supplied filings | 8.58% | Not supplied: the prior last twelve months needs nine months 2024 | percent | Calculated against the prior comparable period | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, pages 225–226; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Gross margin (calculated, before amortization of intangibles) | 60.40% | 60.93% | 59.81% | 58.96% | 62.72% | 62.55% | percent | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| EBITDA (Reported) | 512 | 598 | 534 | 323 | 576 | 787 | USD millions | Calculated: operating income plus depreciation and amortization | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| EBITDA margin | 12.35% | 12.48% | 10.47% | 8.74% | 14.35% | 14.53% | percent | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Operating income | 130 | 162 | 113 | 1 | 271 | 383 | USD millions | Reported; LTM calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Net loss | -248 | -305 | -352 | -294 | -45 | -103 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Net cash from operating activities | -17 | 232 | 283 | 147 | 418 | 554 | USD millions | Reported; LTM calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Capital expenditure | 181 | 291 | 349 | 273 | 226 | 302 | USD millions | Reported purchases of property, plant and equipment, shown as a positive amount | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Free cash flow | -198 | -59 | -66 | -126 | 192 | 252 | USD millions | Calculated: operating cash flow less capital expenditure; working capital included | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Total debt | 4562 | 4784 | 5082 | Not supplied: no balance sheet at 2025-09-30 | 5095 | 5095 | USD millions | Balance-sheet carrying value including other financial liabilities | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Cash and equivalents | 331 | 305 | 383 | Not supplied: no balance sheet at 2025-09-30 | 513 | 513 | USD millions | Reported, excluding restricted cash | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Net debt | 4231 | 4479 | 4699 | Not supplied: no balance sheet at 2025-09-30 | 4582 | 4582 | USD millions | Calculated: total debt less cash and equivalents | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Total debt / EBITDA | 8.91 | 8.00 | 9.52 | Not supplied: no balance sheet at 2025-09-30 | Not applicable: nine-month EBITDA is not annual | 6.47 | x | Calculated on reported EBITDA; the last column uses LTM EBITDA | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Net debt / EBITDA | 8.26 | 7.49 | 8.80 | Not supplied: no balance sheet at 2025-09-30 | Not applicable: nine-month EBITDA is not annual | 5.82 | x | Calculated on reported EBITDA; the last column uses LTM EBITDA | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| EBITDA / cash interest paid | 2.15 | 1.44 | 1.41 | Not supplied: cash interest paid is annual only | Not supplied: cash interest paid is annual only | Not calculable: cash interest paid is annual only | x | Calculated on reported EBITDA and cash interest paid | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308 |
| EBITDA / interest expense (proxy) | 1.81 | 1.50 | 1.27 | 1.00 | 2.02 | 2.05 | x | Calculated on accrued interest expense, not the method's cash measure | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Liquidity (cash plus revolver availability) | Not supplied: no revolver availability at 2023-12-31 | 663 | 1047 | Not supplied: no balance sheet at 2025-09-30 | 1179 | 1179 | USD millions | Calculated; availability net of letters of credit | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 180; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 188; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–34 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2023 / 2023-12-31 | 4562 | 331 | 4231 | US$m | Carrying value 4562 of the debt table; principal 4636; no other financial liabilities carried at this date |
| FY2024 / 2024-12-31 | 4784 | 305 | 4479 | US$m | Carrying value 4784 of the debt table; principal 4841; no other financial liabilities carried at this date |
| FY2025 / 2025-12-31 | 5082 | 383 | 4699 | US$m | Carrying value 5082 = debt table 5048 plus 34 of failed sale-leaseback obligations carried within the debt lines; principal total 5107; cash excludes restricted cash of 14 |
| 2026-09-30 | 5095 | 513 | 4582 | US$m | Carrying value 5095 = debt table 5017 plus 78 of failed sale-leaseback obligations carried within the debt lines; principal total 5065; reported at the balance sheet date, before any event after it; cash excludes restricted cash of 2 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 5065 | 30 | 5095 | US$m | Reconciling items are minus 48 of unamortized discounts and plus 78 of other financial liabilities (failed sale-leasebacks) that the ladder leaves out; principal is the sum of the maturity ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Agreement to acquire certain ophthalmic surgical manufacturing businesses for upfront cash due at closing | 2026-10-08 | 85 | 4667 | 5.93 | US$m | Source states about 85 of upfront cash and closing expected in the fourth quarter of 2026; not yet reflected in 2026-09-30 net debt of 4582; leverage is pro forma net debt over LTM EBITDA of 787; effect not cumulative with the payment below; any assumed debt or earnings from the acquired businesses are not stated |
| Lump-sum cash payment under the separation agreement with the former chief executive | 2026-10-11 | 75 | 4657 | 5.92 | US$m | Source states a lump-sum payment of about 75 under an agreement dated as of 2026-10-11 and does not state when it is paid; not reflected in the 2026-09-30 statements; leverage is pro forma net debt over LTM EBITDA of 787; effect not cumulative with the acquisition above |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 | 4146 | 512 | US$m | Revenue as reported; the EBITDA column is reported EBITDA (operating income plus depreciation and amortization), not issuer-adjusted, because the issuer states no adjusted EBITDA; fiscal years only |
| FY2024 | 4791 | 598 | US$m | Revenue as reported; the EBITDA column is reported EBITDA (operating income plus depreciation and amortization), not issuer-adjusted, because the issuer states no adjusted EBITDA; fiscal years only |
| FY2025 | 5101 | 534 | US$m | Revenue as reported; the EBITDA column is reported EBITDA (operating income plus depreciation and amortization), not issuer-adjusted, because the issuer states no adjusted EBITDA; fiscal years only |

The EBITDA column is reported EBITDA built from components and carries no add-backs, so it is not comparable with an issuer-adjusted figure.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| June 2030 Revolving Credit Facility | 1 | Yes | 100 | 0.13 | US$m | Carrying value 100 drawn of 800 commitment, maturing June 2030; weighted average stated rate across all debt 7.63% at 2026-09-30; borrower Bausch + Lomb; secured by substantially all assets of the borrower and its material wholly-owned Canadian, U.S., Dutch and Irish subsidiaries; guarantor scope stated by reference to the credit agreement guarantors; cumulative leverage runs in listed order over LTM EBITDA of 787 and equal ranks make the order presentational; carrying values exclude 13 of other debt and 78 of other financial liabilities whose rank is not stated |
| January 2031 Refinancing Term Facility | 1 | Yes | 2758 | 3.63 | US$m | Carrying value 2758 of principal 2788, maturing January 2031; borrower Bausch + Lomb; same security and obligor scope as the revolver; 1 percent annual amortization of 28; cumulative leverage runs in listed order over LTM EBITDA of 787 and equal ranks make the order presentational; carrying values exclude 13 of other debt and 78 of other financial liabilities whose rank is not stated |
| October 2028 Secured Notes | 1 | Yes | 1390 | 5.40 | US$m | Carrying value 1390 of principal 1400; issuer Bausch + Lomb; guaranteed by the credit agreement guarantors; first priority liens shared with the credit agreement and effectively pari passu with it; cumulative leverage runs in listed order over LTM EBITDA of 787 and equal ranks make the order presentational; carrying values exclude 13 of other debt and 78 of other financial liabilities whose rank is not stated |
| January 2031 Secured Notes | 1 | Yes | 756 | 6.36 | US$m | Carrying value 756 of principal 765 (EUR 675 million floating rate notes); issuers Bausch + Lomb Netherlands B.V. and Bausch & Lomb Incorporated; guaranteed by Bausch + Lomb and the note guarantors; first priority liens shared with the credit agreement; cumulative leverage runs in listed order over LTM EBITDA of 787 and equal ranks make the order presentational; carrying values exclude 13 of other debt and 78 of other financial liabilities whose rank is not stated |

Cumulative leverage runs in the listed order, but the four rows rank equally, so no single row is a separate attachment point.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| Opening: EBITDA (Reported), LTM to 2026-09-30 | Not supplied: the issuer states no adjusted EBITDA, so there is no bridge to state | US$m | Opening is the reported measure, calculated at 787 from components; no adjusted measure exists |
| Closing: EBITDA (Adjusted) | Not supplied: the issuer states no adjusted EBITDA | US$m | No issuer-adjusted EBITDA or add-back schedule is printed in any supplied filing, so no bridge is manufactured from the endpoints |

No bridge is drawn because the issuer states no adjusted EBITDA.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 11 |
| Calculated | 9 |
| Assumption-Based | 1 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 2 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 12 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_blco_blco-20241231.htm.jsonl | Annual report, Form 10-K | Balance sheets at 2024-12-31 and 2023-12-31; income statements and cash flows for 2022 to 2024 | USD | millions | Bausch + Lomb Corporation and subsidiaries, consolidated | US GAAP | Tier 1 audited | FY2023 balance sheet, FY2022 reference figures, year-end 2024 debt and revolver availability | Superseded by the 2025 annual report for FY2023 and FY2024 income and cash flow columns |
| 10-K_2025-12-31_blco_blco-20251231.htm.jsonl | Annual report, Form 10-K | Balance sheets at 2025-12-31 and 2024-12-31; income statements and cash flows for 2023 to 2025 | USD | millions | Bausch + Lomb Corporation and subsidiaries, consolidated | US GAAP | Tier 1 audited | FY2023 to FY2025 statements, notes, cash interest paid, leases, pensions, segments | Lease, pension and cash interest notes are dated year-end |
| 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl | Quarterly report, Form 10-Q | Balance sheet at 2026-03-31; three months to 2026-03-31 | USD | millions | Bausch + Lomb Corporation and subsidiaries, consolidated | US GAAP interim | Tier 2b unaudited | Checked only for printed interest and debt figures | Superseded for the latest position by the third-quarter report; no discrete quarter carried |
| 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl | Quarterly report, Form 10-Q | Balance sheet at 2026-06-30; three and six months to 2026-06-30 | USD | millions | Bausch + Lomb Corporation and subsidiaries, consolidated | US GAAP interim | Tier 2b unaudited | Checked only for printed interest and debt figures | Superseded for the latest position by the third-quarter report; no discrete quarter carried |
| 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl | Quarterly report, Form 10-Q | Balance sheet at 2026-09-30; three and nine months to 2026-09-30 with 2025 comparatives | USD | millions | Bausch + Lomb Corporation and subsidiaries, consolidated | US GAAP interim | Tier 2b unaudited | Nine-month columns, 2026-09-30 balance sheet, debt, liquidity, events after the period | No cash interest paid, lease note or pension note; discrete quarter not carried |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Bausch + Lomb Corporation | Issuer, registrant and borrower under the credit agreement | 31 December | USD | millions | Parent company of the consolidated group reported in all five filings | US GAAP | FY2022 to FY2025; 2026-03-31, 2026-06-30 and 2026-09-30 interim periods |
| Bausch + Lomb Netherlands B.V. and Bausch & Lomb Incorporated | Co-issuers of the euro floating rate notes due January 2031 | 31 December | USD | millions | Subsidiaries inside the consolidated group | US GAAP | Debt terms at 2025-12-31 and 2026-09-30 |
| Material wholly-owned Canadian, U.S., Dutch and Irish subsidiaries | Guarantors and collateral providers of the credit facilities and secured notes; the restricted group is not defined in the filings | 31 December | USD | millions | Subsidiaries inside the consolidated group | US GAAP | Stated at 2026-09-30 |
| Bausch Health Companies Inc. | Parent holding about 87 percent of the shares; outside the reported perimeter | 31 December | USD | millions | Not consolidated in these statements; its own debt and statements are not supplied | Not supplied: the parent's statements are not in the supplied filings | Ownership stated at 2026-10-21 |

Subsequent events are flagged with their dates in the post-balance-sheet table and are not blended into any period figure; the acquisition agreement of 2026-10-08 and the executive separation agreement of 2026-10-11 follow the 2026-09-30 balance sheet date.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) constructed from components | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl | Derivation | Not supplied: the issuer states no EBITDA | 512; 598; 534; 323; 576 | Method step 4 derives EBITDA from operating income plus depreciation and amortization when none is stated; no add-backs applied | FY2023; FY2024; FY2025; 9M 2025; 9M 2026 |
| Total Debt includes other financial liabilities carried in the debt lines | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl | Definition | 5048; 5017 (debt table carrying value) | 5082; 5095 (balance-sheet debt lines) | The issuer carries failed sale-leaseback obligations within its debt captions, so the method keeps them in Total Debt and names them | FY2025; 9M 2026 |
| Contingent consideration shown on its own cash flow line | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl | Presentation | Within Other: 2024 minus 19, 2023 minus 1 | Own line minus 9 and 2; Other minus 10 and minus 3 | The 2025 annual report presentation is used for FY2023 and FY2024 columns; operating cash flow subtotals are unchanged | FY2023; FY2024 |
| Debt captions renamed | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl | Caption mapping | Current portion of long-term debt; Long-term debt | Current portion of long-term debt and other financial liabilities; Long-term debt and other financial liabilities | Amounts at 2023-12-31 and 2024-12-31 are unchanged; the new caption reflects other financial liabilities that arose in 2025 | FY2023; FY2024 |
| Euro notes carried at the issuer's US dollar translation | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl | Currency | EUR 675 million principal | 765 principal; 756 carrying value | The issuer states the US dollar amounts; no rate is applied here and none is looked up | 9M 2026 |
| Cash excludes restricted cash | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl | Definition | Closing cash incl. restricted: 397; 515 | Cash & Equivalents: 383; 513 | Net debt uses unrestricted cash; the cash flow statement includes restricted cash of 14 and 2 | FY2025; 9M 2026 |
| Printed dashes carried as not supplied | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl | Null handling | A dash | Not supplied | The method treats a source dash as a missing value with a gap line rather than as zero; the printed totals add up with those cells at zero | Several lines |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Product sales | 4131 | 4774 | 5080 | 3682 | 3999 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Other revenues | 15 | 17 | 21 | 14 | 14 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Total revenues | 4146 | 4791 | 5101 | 3696 | 4013 | USD millions | Reported printed total, unlabeled in the filing | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Cost of goods sold (excluding amortization and impairments of intangible assets) | 1640 | 1868 | 2045 | 1513 | 1494 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Cost of other revenues | 2 | 4 | 5 | 4 | 2 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Gross profit (calculated, before amortization of intangible assets) | 2504 | 2919 | 3051 | 2179 | 2517 | USD millions | Calculated: total revenues less cost of goods sold less cost of other revenues; the issuer prints no gross profit | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Selling, general and administrative | 1736 | 2082 | 2234 | 1670 | 1688 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Research and development | 324 | 343 | 371 | 277 | 306 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Amortization of intangible assets | 240 | 288 | 258 | 202 | 171 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Other expense, net | 74 | 44 | 75 | 29 | 81 | USD millions | Reported; the nine-month statement labels it Other expense (income), net | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Total expenses | 4016 | 4629 | 4988 | 3695 | 3742 | USD millions | Reported printed total, unlabeled in the filing | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Operating income | 130 | 162 | 113 | 1 | 271 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Interest income | 15 | 15 | 12 | 9 | 10 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Interest expense | -283 | -399 | -421 | -323 | -285 | USD millions | Reported; accrued expense, not cash paid | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Loss on extinguishment of debt | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | -6 | -6 | -1 | USD millions | Reported; the nine-month statement labels it Gain (loss) on extinguishment of debt | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Foreign exchange and other | -28 | -12 | -15 | -11 | -12 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Income (loss) before provision for income taxes | -166 | -234 | -317 | -330 | -17 | USD millions | Reported; the annual statements label it Loss before provision for income taxes | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Provision for income taxes | -82 | -71 | -35 | 36 | -28 | USD millions | Reported; the nine-month 2025 figure is a benefit | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Net income (loss) | -248 | -305 | -352 | -294 | -45 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Net income attributable to noncontrolling interest | -12 | -12 | -8 | -8 | -8 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Net income (loss) attributable to Bausch + Lomb Corporation | -260 | -317 | -360 | -302 | -53 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| Depreciation and amortization of intangible assets | 382 | 436 | 421 | 322 | 305 | USD millions | Reported in the cash flow statement; the income statement prints no separate depreciation | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| EBITDA (Reported) | 512 | 598 | 534 | 323 | 576 | USD millions | Calculated: operating income plus depreciation and amortization of intangible assets; the issuer states no EBITDA and no add-backs are applied | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Other expense, net: asset impairments | Not supplied: the filing prints a dash | 5 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | 13 | USD millions | Reported note detail | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 303; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 40 |
| Other expense, net: restructuring, integration and separation costs | 44 | 26 | 58 | 43 | 21 | USD millions | Reported note detail | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 303; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 40 |
| Other expense, net: gain on sale of assets | Not supplied: the filing prints a dash | -5 | -6 | -6 | -3 | USD millions | Reported note detail | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 303; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 40 |
| Other expense, net: litigation and other matters | 3 | 5 | 10 | 8 | 20 | USD millions | Reported note detail | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 303; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 40 |
| Other expense, net: acquired in-process research and development costs | Not supplied: the filing prints a dash | 18 | 33 | 29 | 16 | USD millions | Reported note detail | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 303; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 40 |
| Other expense, net: acquisition-related costs | 25 | 4 | 7 | 5 | 4 | USD millions | Reported note detail | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 303; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 40 |
| Other expense, net: acquisition-related contingent consideration | 2 | -9 | -27 | -50 | 10 | USD millions | Reported note detail | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 303; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 40 |
| Segment revenue: Vision Care | 2543 | 2739 | 2923 | 2145 | 2269 | USD millions | Reported segment note | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |
| Segment revenue: Pharmaceuticals | 836 | 1209 | 1284 | 906 | 1026 | USD millions | Reported segment note | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |
| Segment revenue: Surgical | 767 | 843 | 894 | 645 | 718 | USD millions | Reported segment note | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |
| Segment profit: Vision Care | 689 | 808 | 849 | 602 | 675 | USD millions | Reported segment note; operating income after intercompany eliminations and before amortization of intangible assets and other expense | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |
| Segment profit: Pharmaceuticals | 241 | 256 | 258 | 124 | 289 | USD millions | Reported segment note | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |
| Segment profit: Surgical | 50 | 44 | 18 | 3 | 58 | USD millions | Reported segment note | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |
| Segment profit: total | 980 | 1108 | 1125 | 729 | 1022 | USD millions | Reported segment note printed total | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |
| Corporate and eliminations | -536 | -614 | -679 | -497 | -499 | USD millions | Reported segment note; unallocated corporate costs including part of share-based compensation, one row | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net loss | -248 | -305 | -352 | -294 | -45 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Depreciation and amortization of intangible assets | 382 | 436 | 421 | 322 | 305 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Amortization and write-off of debt premiums, discounts and issuance costs | 30 | 20 | 18 | 14 | 10 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Asset impairments | Not supplied: the filing prints a dash | 5 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | 13 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Acquisition-related contingent consideration | 2 | -9 | -27 | -50 | 10 | USD millions | Reported; the 2024 annual report shows the 2024 and 2023 amounts within Other | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Allowances for losses on trade receivables and inventories | 21 | 26 | 31 | 23 | 25 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Deferred income taxes | -10 | -10 | -32 | -96 | -36 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Gain on sale of assets | Not supplied: the filing prints a dash | -5 | -6 | -6 | -3 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Additions of accrued legal settlements | Not supplied: not a separate line in this period's statement | Not supplied: not a separate line in this period's statement | Not supplied: not a separate line in this period's statement | 3 | 13 | USD millions | Reported in the interim statements only | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Share-based compensation | 74 | 92 | 149 | 85 | 109 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Foreign exchange gain | 12 | 10 | 2 | Not supplied: not a separate line in this period's statement | Not supplied: not a separate line in this period's statement | USD millions | Reported in the annual statements only | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Foreign exchange loss | Not supplied: not a separate line in this period's statement | Not supplied: not a separate line in this period's statement | Not supplied: not a separate line in this period's statement | Not supplied: the filing prints a dash | 17 | USD millions | Reported in the interim statements only | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Gain excluded from hedge effectiveness | -13 | -13 | -10 | -8 | -5 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Loss on extinguishment of debt | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | 6 | 6 | 1 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Amortization of inventory step-up resulting from acquisitions | 23 | 82 | 62 | 62 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Other | -3 | -10 | 3 | 1 | -6 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Trade receivables | -121 | -227 | -148 | -18 | 64 | USD millions | Reported change in working capital | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Inventories | -264 | -147 | 38 | 10 | -65 | USD millions | Reported change in working capital | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Prepaid expenses and other current assets | -147 | 161 | 20 | -17 | -50 | USD millions | Reported change in working capital | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Accounts payable, accrued and other liabilities | 245 | 126 | 108 | 110 | 61 | USD millions | Reported change in working capital | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Net Cash from Operating Activities | -17 | 232 | 283 | 147 | 418 | USD millions | Reported subtotal; under US GAAP interest paid sits within operating activities | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Acquisitions and other investments | -1941 | -138 | -122 | -13 | -76 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Purchases of property, plant and equipment | -181 | -291 | -349 | -273 | -226 | USD millions | Reported total capital expenditure; the maintenance and growth split is not stated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Purchases of marketable securities | -17 | -12 | -11 | -6 | -9 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Proceeds from sale of marketable securities | 16 | 14 | 8 | 6 | 9 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Proceeds from sale of assets and businesses, net of costs to sell | 1 | 2 | 7 | 7 | 3 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Interest settlements from cross-currency swaps | 13 | 13 | 12 | 12 | 9 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Net Cash from Investing Activities | -2109 | -412 | -455 | -267 | -290 | USD millions | Reported subtotal | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Issuance of long-term debt, net of discounts, and other financial liabilities | 2276 | 631 | 3357 | 3221 | 2930 | USD millions | Reported; the nine-month statement labels it Issuance of debt, net of discounts, and other financial liabilities | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Repayments of debt | -161 | -430 | -3096 | -3077 | -2901 | USD millions | Reported; the nine-month statement labels it Repayments of debt and other financial liabilities | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Payment of employee withholding taxes related to share-based awards | -10 | -12 | -15 | -14 | -28 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Proceeds from exercise of stock options | Not supplied: not a separate line in this period's statement | Not supplied: not a separate line in this period's statement | Not supplied: not a separate line in this period's statement | Not supplied: the filing prints a dash | 2 | USD millions | Reported in the interim statements only | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Payments of financing costs | -16 | Not supplied: the filing prints a dash | -12 | -12 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Payments of noncontrolling interest distributions | -9 | -10 | -9 | -9 | -10 | USD millions | Reported | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Other financing | -2 | -1 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | -1 | USD millions | Reported as Other within financing activities | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Net Cash from Financing Activities | 2078 | 178 | 225 | 109 | -8 | USD millions | Reported subtotal; no dividends were paid | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| FX Effect on Cash | 2 | -16 | 28 | 27 | -2 | USD millions | Reported effect of exchange rate changes on cash, cash equivalents and restricted cash | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Net Cash Change | -46 | -18 | 81 | 16 | 118 | USD millions | Reported net change in cash, cash equivalents and restricted cash | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Opening Cash | 380 | 334 | 316 | 316 | 397 | USD millions | Reported; includes restricted cash | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Closing Cash | 334 | 316 | 397 | 332 | 515 | USD millions | Reported; includes restricted cash, so it differs from balance-sheet Cash & Equivalents | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| Cash Interest Paid | 238 | 415 | 380 | Not supplied: the quarterly reports print no cash interest paid or income taxes paid | Not supplied: the quarterly reports print no cash interest paid or income taxes paid | USD millions | Reported in the supplemental cash flow note, annual only | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308 |
| Income taxes paid | 64 | 91 | 59 | Not supplied: the quarterly reports print no cash interest paid or income taxes paid | Not supplied: the quarterly reports print no cash interest paid or income taxes paid | USD millions | Reported in the supplemental cash flow note, annual only | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308 |
| Accrued purchases of property, plant and equipment (non-cash investing) | 65 | 56 | 51 | 46 | 28 | USD millions | Reported non-cash investing activity | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Cash and cash equivalents | 331 | 305 | 383 | 513 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Restricted cash | 3 | 11 | 14 | 2 | USD millions | Reported; excluded from Cash & Equivalents | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Trade receivables, net | 839 | 1026 | 1221 | 1147 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Inventories, net | 1028 | 1036 | 976 | 1007 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Prepaid expenses and other current assets | 541 | 410 | 383 | 386 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Total current assets | 2742 | 2788 | 2977 | 3055 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Property, plant and equipment, net | 1390 | 1485 | 1762 | 1812 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Intangible assets, net | 3589 | 3494 | 3281 | 3131 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Goodwill | 4575 | 4523 | 4758 | 4714 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Deferred tax assets, net | 921 | 885 | 934 | 963 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Other non-current assets | 225 | 294 | 310 | 284 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Total Assets | 13442 | 13469 | 14022 | 13959 | USD millions | Reported printed total | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Accounts payable | 522 | 389 | 388 | 367 | USD millions | Reported; trade payables | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Accrued and other current liabilities | 1027 | 1309 | 1493 | 1548 | USD millions | Reported; includes product rebates, employee costs, returns and accrued interest | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Current portion of long-term debt and other financial liabilities | 30 | 40 | 39 | 45 | USD millions | Reported; the 2023 and 2024 captions read Current portion of long-term debt | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Total current liabilities | 1579 | 1738 | 1920 | 1960 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Deferred tax liabilities, net | 14 | 13 | 19 | 19 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Other non-current liabilities | 397 | 430 | 521 | 420 | USD millions | Reported; includes operating lease liabilities and net pension and postretirement deficits | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Long-term debt and other financial liabilities | 4532 | 4744 | 5043 | 5050 | USD millions | Reported; the 2023 and 2024 captions read Long-term debt | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Total Liabilities | 6522 | 6925 | 7503 | 7449 | USD millions | Reported printed total | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Additional paid-in capital | 8349 | 8429 | 8563 | 8646 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Accumulated deficit | -254 | -571 | -931 | -984 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Accumulated other comprehensive loss | -1245 | -1385 | -1184 | -1223 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Total Bausch + Lomb Corporation shareholders' equity | 6850 | 6473 | 6448 | 6439 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Noncontrolling interest | 70 | 71 | 71 | 71 | USD millions | Reported | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Total Equity | 6920 | 6544 | 6519 | 6510 | USD millions | Reported printed total including noncontrolling interest | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Total Debt | 4562 | 4784 | 5082 | 5095 | USD millions | Calculated: current portion plus long-term debt, both including other financial liabilities (failed sale-leasebacks of 34 at FY2025 and 78 at 9M 2026), net of issuance costs and discounts | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| Cash & Equivalents | 331 | 305 | 383 | 513 | USD millions | Reported as Cash and cash equivalents; excludes restricted cash | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| June 2030 Revolving Credit Facility | Revolving credit facility | 100 | 100 | 100 | 800 | Secured by substantially all assets of the borrower and its material wholly-owned Canadian, U.S., Dutch and Irish subsidiaries | Senior secured, first priority liens | USD | 100 | Not applicable | Margin 1.75% to 2.75% over the reference rate, by total net leverage; stated rate 6.52% to 6.65% at 2026-09-30 | floating | Term SOFR for US dollar borrowings; CORRA, EURIBOR or SONIA for other currencies | 175 to 275 | Not applicable | 2030-06-26 | 0 | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 32–35 |
| January 2031 Refinancing Term Facility | Term loan B | 2758 | 2788 | 2788 | Not applicable | Secured by substantially all assets of the borrower and its material wholly-owned Canadian, U.S., Dutch and Irish subsidiaries | Senior secured, first priority liens | USD | 2758 | Not applicable | Term SOFR plus 3.75%; stated rate 7.65% at 2026-09-30 | floating | Term SOFR | 375 | Not applicable | 2031-01-15 | 28 | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 32–36 |
| October 2028 Secured Notes | Senior secured notes | 1390 | 1400 | 1400 | Not applicable | Secured by the same first priority liens as the credit agreement; guaranteed by the credit agreement guarantors | Senior secured, pari passu with the credit facilities | USD | 1390 | Not applicable | 8.375% fixed | fixed | Not applicable | Not applicable | Not applicable | October 2028; the day is not stated | 0 | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 191–192 |
| January 2031 Secured Notes | Senior secured floating rate notes | Not supplied: the filing prints the carrying value in US dollars only | 675 | 675 | Not applicable | Secured by the same first priority liens as the credit agreement; guaranteed by Bausch + Lomb and the note guarantors | Senior secured, pari passu with the credit facilities | EUR | 756 | Not applicable | Three-month EURIBOR plus 3.875%; stated rate 6.31% at 2026-09-30 | floating | Three-month EURIBOR | 387.5 | 0 | January 2031; the day is not stated | 0 | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 32–33; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 192–194 |
| Other debt | Other | 13 | 12 | 12 | Not applicable | Not supplied: the filing states no security | Not supplied: the filing states no rank | USD | 13 | Not applicable | Not supplied: no rate is stated | not stated | Not applicable | Not applicable | Not applicable | Various | Not supplied: no amortization is stated | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32 |
| Other financial liabilities (failed sale-leasebacks) | Failed sale-leaseback obligations | 78 | Not supplied: principal is not stated separately | Not supplied: not stated | Not applicable | Not supplied: the filing states no security | Not supplied: the filing states no rank | USD | 78 | Not applicable | Weighted-average discount rate of 7.5% at 2025-12-31 for the 2025 leaseback; no rate is stated for the 2026 leaseback | not stated | Not applicable | Not applicable | Not applicable | A three-year leaseback from October 2025 and a five-year leaseback with payments from January 2028; instrument maturities are not stated | Not supplied: no schedule is stated | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 38; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 296–297 |

The Reporting Currency Amount cells add to USD 5,095 million, which equals Total Debt at 2026-09-30 in the balance sheet table.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM to 2026-09-30 | USD 5,101m | USD 4,013m | USD 3,696m | USD 5,418m | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 | Full year 2025 plus nine months 2026 less nine months 2025; every component printed |
| Operating income | LTM to 2026-09-30 | USD 113m | USD 271m | USD 1m | USD 383m | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 | Full year 2025 plus nine months 2026 less nine months 2025; every component printed |
| Depreciation and amortization | LTM to 2026-09-30 | USD 421m | USD 305m | USD 322m | USD 404m | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 | Full year 2025 plus nine months 2026 less nine months 2025; every component printed |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 534m | USD 576m | USD 323m | USD 787m | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 | Full year 2025 plus nine months 2026 less nine months 2025; each component is operating income plus depreciation and amortization |
| Net cash from operating activities | LTM to 2026-09-30 | USD 283m | USD 418m | USD 147m | USD 554m | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 | Full year 2025 plus nine months 2026 less nine months 2025; every component printed |
| Purchases of property, plant and equipment | LTM to 2026-09-30 | USD 349m | USD 226m | USD 273m | USD 302m | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 | Full year 2025 plus nine months 2026 less nine months 2025; every component printed |
| Other expense, net | LTM to 2026-09-30 | USD 75m | USD 81m | USD 29m | USD 127m | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 | Full year 2025 plus nine months 2026 less nine months 2025; every component printed |
| Gross profit (calculated) | LTM to 2026-09-30 | USD 3,051m | USD 2,517m | USD 2,179m | USD 3,389m | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 | Full year 2025 plus nine months 2026 less nine months 2025; every component printed |
| Interest expense | LTM to 2026-09-30 | USD 421m | USD 285m | USD 323m | USD 383m | Calculated | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 | Accrued expense shown as a positive amount; every component printed |
| Cash interest paid | LTM to 2026-09-30 | USD 380m | Not supplied: the quarterly reports print no cash interest paid | Not supplied: the quarterly reports print no cash interest paid | Not calculable: the nine-month components are missing | Not Calculable | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308 | One missing component makes the whole derived figure missing |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total debt / EBITDA | 4562 | Net debt data Gross debt | 512 | T4.4 EBITDA (Reported) FY2023 | FY2023 / 2023-12-31 | USD | US$m | 8.91 | Calculated | Tier 1 audited | Debt at carrying value including other financial liabilities; reported EBITDA is unadjusted |
| Total debt / EBITDA | Total debt / EBITDA | 4784 | Net debt data Gross debt | 598 | T4.4 EBITDA (Reported) FY2024 | FY2024 / 2024-12-31 | USD | US$m | 8.00 | Calculated | Tier 1 audited | Debt at carrying value including other financial liabilities; reported EBITDA is unadjusted |
| Total debt / EBITDA | Total debt / EBITDA | 5082 | Net debt data Gross debt | 534 | T4.4 EBITDA (Reported) FY2025 | FY2025 / 2025-12-31 | USD | US$m | 9.52 | Calculated | Tier 1 audited | Debt at carrying value including other financial liabilities; reported EBITDA is unadjusted |
| Total debt / EBITDA | Total debt / EBITDA | 5095 | Net debt data Gross debt | 787 | T4.8 LTM EBITDA (Reported) | 2026-09-30 | USD | US$m | 6.47 | Calculated | Tier 2b unaudited balance sheet; LTM EBITDA from Tier 1 and Tier 2b | Debt at carrying value including other financial liabilities; reported EBITDA is unadjusted; LTM EBITDA is constructed from three filings |
| Net debt / EBITDA | Net debt / EBITDA | 4231 | Net debt data Net debt | 512 | T4.4 EBITDA (Reported) FY2023 | FY2023 / 2023-12-31 | USD | US$m | 8.26 | Calculated | Tier 1 audited | Debt at carrying value including other financial liabilities; reported EBITDA is unadjusted |
| Net debt / EBITDA | Net debt / EBITDA | 4479 | Net debt data Net debt | 598 | T4.4 EBITDA (Reported) FY2024 | FY2024 / 2024-12-31 | USD | US$m | 7.49 | Calculated | Tier 1 audited | Debt at carrying value including other financial liabilities; reported EBITDA is unadjusted |
| Net debt / EBITDA | Net debt / EBITDA | 4699 | Net debt data Net debt | 534 | T4.4 EBITDA (Reported) FY2025 | FY2025 / 2025-12-31 | USD | US$m | 8.80 | Calculated | Tier 1 audited | Debt at carrying value including other financial liabilities; reported EBITDA is unadjusted |
| Net debt / EBITDA | Net debt / EBITDA | 4582 | Net debt data Net debt | 787 | T4.8 LTM EBITDA (Reported) | 2026-09-30 | USD | US$m | 5.82 | Calculated | Tier 2b unaudited balance sheet; LTM EBITDA from Tier 1 and Tier 2b | Debt at carrying value including other financial liabilities; reported EBITDA is unadjusted; LTM EBITDA is constructed from three filings |
| EBITDA / cash interest | EBITDA / cash interest | 512 | T4.4 EBITDA (Reported) FY2023 | 238 | T4.5 Cash Interest Paid FY2023 | FY2023 / 2023-12-31 | USD | US$m | 2.15 | Calculated | Tier 1 audited | Interest paid is the supplemental note figure; reported EBITDA is unadjusted |
| EBITDA / cash interest | EBITDA / cash interest | 598 | T4.4 EBITDA (Reported) FY2024 | 415 | T4.5 Cash Interest Paid FY2024 | FY2024 / 2024-12-31 | USD | US$m | 1.44 | Calculated | Tier 1 audited | Interest paid is the supplemental note figure; reported EBITDA is unadjusted |
| EBITDA / cash interest | EBITDA / cash interest | 534 | T4.4 EBITDA (Reported) FY2025 | 380 | T4.5 Cash Interest Paid FY2025 | FY2025 / 2025-12-31 | USD | US$m | 1.41 | Calculated | Tier 1 audited | Interest paid is the supplemental note figure; reported EBITDA is unadjusted |
| EBITDA / cash interest | EBITDA / cash interest | 787 | T4.8 LTM EBITDA (Reported) | Not supplied: the quarterly reports print no cash interest paid | T4.5 Cash Interest Paid | 2026-09-30 | USD | US$m | Not calculable: cash interest paid for the nine months is not printed | Not Calculable | Tier 2b unaudited balance sheet; LTM EBITDA from Tier 1 and Tier 2b | Interim cash interest paid is not printed, so no cash-basis cover exists for this period |
| EBITDA after capex / cash interest | EBITDA after capex / cash interest | 331 | T4.4 EBITDA (Reported) less purchases of property, plant and equipment in T4.5, FY2023 | 238 | T4.5 Cash Interest Paid FY2023 | FY2023 / 2023-12-31 | USD | US$m | 1.39 | Calculated | Tier 1 audited | Free-name row; the numerator is EBITDA less total capital expenditure |
| EBITDA after capex / cash interest | EBITDA after capex / cash interest | 307 | T4.4 EBITDA (Reported) less purchases of property, plant and equipment in T4.5, FY2024 | 415 | T4.5 Cash Interest Paid FY2024 | FY2024 / 2024-12-31 | USD | US$m | 0.74 | Calculated | Tier 1 audited | Free-name row; the numerator is EBITDA less total capital expenditure |
| EBITDA after capex / cash interest | EBITDA after capex / cash interest | 185 | T4.4 EBITDA (Reported) less purchases of property, plant and equipment in T4.5, FY2025 | 380 | T4.5 Cash Interest Paid FY2025 | FY2025 / 2025-12-31 | USD | US$m | 0.49 | Calculated | Tier 1 audited | Free-name row; the numerator is EBITDA less total capital expenditure |
| Liquidity / total debt | Liquidity / total debt | 663 | Chart data: liquidity Cash plus Undrawn committed facilities | 4784 | Net debt data Gross debt | FY2024 / 2024-12-31 | USD | US$m | 0.14 | Calculated | Tier 1 audited | Free-name row; liquidity is cash plus revolver availability net of letters of credit |
| Liquidity / total debt | Liquidity / total debt | 1047 | Chart data: liquidity Cash plus Undrawn committed facilities | 5082 | Net debt data Gross debt | FY2025 / 2025-12-31 | USD | US$m | 0.21 | Calculated | Tier 1 audited | Free-name row; liquidity is cash plus revolver availability net of letters of credit |
| Liquidity / total debt | Liquidity / total debt | 1179 | Chart data: liquidity Cash plus Undrawn committed facilities | 5095 | Net debt data Gross debt | 2026-09-30 | USD | US$m | 0.23 | Calculated | Tier 2b unaudited balance sheet; LTM EBITDA from Tier 1 and Tier 2b | Free-name row; liquidity is cash plus revolver availability net of letters of credit |
| EBITDA / interest expense | EBITDA / interest expense | 512 | T4.4 EBITDA (Reported) FY2023 | 283 | T4.4 Interest expense FY2023, sign reversed | FY2023 / 2023-12-31 | USD | US$m | 1.81 | Proxy | Tier 1 audited | Proxy on accrued interest expense, not cash interest paid; labelled so and not the method's coverage measure |
| EBITDA / interest expense | EBITDA / interest expense | 598 | T4.4 EBITDA (Reported) FY2024 | 399 | T4.4 Interest expense FY2024, sign reversed | FY2024 / 2024-12-31 | USD | US$m | 1.50 | Proxy | Tier 1 audited | Proxy on accrued interest expense, not cash interest paid; labelled so and not the method's coverage measure |
| EBITDA / interest expense | EBITDA / interest expense | 534 | T4.4 EBITDA (Reported) FY2025 | 421 | T4.4 Interest expense FY2025, sign reversed | FY2025 / 2025-12-31 | USD | US$m | 1.27 | Proxy | Tier 1 audited | Proxy on accrued interest expense, not cash interest paid; labelled so and not the method's coverage measure |
| EBITDA / interest expense | EBITDA / interest expense | 787 | T4.8 LTM EBITDA (Reported) | 383 | T4.8 LTM Interest expense | 2026-09-30 | USD | US$m | 2.05 | Proxy | Tier 2b unaudited balance sheet; LTM EBITDA from Tier 1 and Tier 2b | Proxy on accrued interest expense, not cash interest paid; labelled so and not the method's coverage measure |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|
| Growth | Revenue growth (percent) | 10.03 | 15.56 | 6.47 | Not supplied: nine months 2024 is not in the supplied filings | 8.58 | Slowing then recovering | Growth fell from the FY2024 level in FY2025 and nine-month 2026 growth is above the FY2025 rate; each against the prior comparable period |
| Growth | EBITDA (Reported) growth (percent) | -12.63 | 16.80 | -10.70 | Not supplied: nine months 2024 is not in the supplied filings | 78.33 | Volatile | FY2025 fell and nine-month 2026 rose sharply against a 2025 base depressed by step-up amortization |
| Margin | Gross margin, calculated (percent) | 60.40 | 60.93 | 59.81 | 58.96 | 62.72 | Improving in 2026 | Before amortization of intangible assets; the 2025 nine months also carried 62 of inventory step-up amortization shown in the cash flow statement |
| Margin | EBITDA margin (percent) | 12.35 | 12.48 | 10.47 | 8.74 | 14.35 | Improving in 2026 | Reported EBITDA, no add-backs |
| Margin | Operating margin (percent) | 3.14 | 3.38 | 2.22 | 0.03 | 6.75 | Improving in 2026 | Operating income over revenue |
| Cash flow | Free cash flow (USD millions) | -198 | -59 | -66 | -126 | 192 | Improving in 2026 | Operating cash flow less capital expenditure; positive only in nine months 2026 |
| Cash flow | Operating cash flow / EBITDA (percent) | -3.32 | 38.80 | 53.00 | 45.51 | 72.57 | Improving | Operating cash flow is struck after interest paid, which US GAAP includes in operating activities, so the ratio is a net conversion measure |
| Cash flow | Capital expenditure / revenue (percent) | 4.37 | 6.07 | 6.84 | 7.39 | 5.63 | Falling in 2026 | Total capital expenditure; maintenance and growth split not stated |
| Segment | Vision Care segment profit margin (percent) | 27.09 | 29.50 | 29.05 | 28.07 | 29.75 | Stable | Segment profit over segment revenue |
| Segment | Pharmaceuticals segment profit margin (percent) | 28.83 | 21.17 | 20.09 | 13.69 | 28.17 | Improving in 2026 | Nine-month 2026 margin is above 2025 as the segment's costs fell |
| Segment | Surgical segment profit margin (percent) | 6.52 | 5.22 | 2.01 | 0.47 | 8.08 | Weak, recovering in 2026 | Margin fell through FY2025 and the 2025 nine months before the nine-month 2026 recovery |
| Liquidity | Cash plus revolver availability (USD millions) | Not supplied: no revolver availability at 2023-12-31 | 663 | 1047 | Not supplied: no balance sheet at 2025-09-30 | 1179 | Improving | Revolver availability is net of letters of credit |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA is the issuer's unadjusted EBITDA; adjusted EBITDA is shown only when the issuer states it | The issuer states no EBITDA; adjusted EBITDA appears only as a share-award performance target | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 39; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 299 | All periods | Every leverage and coverage ratio depends on the construction; the unapplied house sensitivity moves LTM total leverage from 6.47x to 5.57x | Fundamental credit; Covenant capacity; Earnings quality | Reported EBITDA built as operating income plus depreciation and amortization is used; the covenant's own earnings definition is not supplied |
| Total debt | Balance-sheet carrying value of every debt line, with other obligations carried inside debt lines named | The debt note shows long-term debt of 5017; the balance-sheet lines add 78 of other financial liabilities to 5095 | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 38 | 9M 2026 and FY2025 | 78 of 5095 at 9M 2026 (1.53 percent); 34 of 5082 at FY2025 | Financial foundation; Liquidity; Refinancing & LME | The balance-sheet total of 5095 is used and the debt table carrying value of 5017 is shown in the reconciliation |
| Principal against carrying value | Principal and carrying value are kept separate and neither stands in for the other | Principal 5065 against carrying 5095 at 2026-09-30 | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36 | 9M 2026 | Difference of 30 (minus 48 of discounts plus 78 of other financial liabilities) | Financial foundation; Refinancing & LME | Carrying value is the leverage numerator; principal drives the maturity ladder |
| Cash | Cash and equivalents exclude restricted cash | The cash flow statement reconciles to cash plus restricted cash | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 | FY2025 and 9M 2026 | Restricted cash of 14 at FY2025 and 2 at 9M 2026 | Liquidity | Net debt uses balance-sheet cash; closing cash on the cash flow statement is shown unchanged |
| Interest | Coverage uses cash interest paid | Interest expense is accrued (421 in FY2025) and cash interest paid was 380; interim cash interest is not printed | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 236; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 | FY2025 and all interim periods | Gap of 41 between expense and cash in FY2025; no interim cash figure exists | Fundamental credit; Downside | Cash-basis cover is stated for full years only; an expense-based proxy is labelled for the latest period |
| Leases and pensions | Lease liabilities the issuer presents on their own lines are not added to Total Debt | Operating lease liabilities of 163 sit in other liabilities; pension and retiree deficits total 31 | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 292; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 296–297 | FY2025 | 194 combined against total debt of 5082 (3.82 percent) | Fundamental credit; Covenant capacity | Excluded from ratios and shown as claims outside debt; interim values are not printed |
| Contingent consideration cash flow line | One line per item as the latest annual report prints it | The 2024 annual report folds contingent consideration into Other | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 227; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 237 | FY2023 and FY2024 | 9 in FY2024 and 2 in FY2023; operating cash flow unchanged | Financial foundation | The 2025 annual report presentation is used |
| Segment profit against EBITDA | EBITDA is operating income plus depreciation and amortization | Segment profit excludes amortization of intangibles, other expense and corporate costs | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 | All periods | Segment profit totals 1125 in FY2025 against reported EBITDA of 534 | Business & governance; Earnings quality | Segment profit is shown as a separate KPI and never used as an EBITDA substitute |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Annual leverage and coverage, FY2023 to FY2025 | Ready | EBITDA is constructed and unadjusted; cash interest paid is annual | None needed beyond labelling EBITDA as reported and constructed |
| Latest-twelve-month leverage at 2026-09-30 | Ready with Limitations | LTM EBITDA is constructed from three filings; debt is the 2026-09-30 carrying value | Obtain an issuer-stated adjusted EBITDA to compare |
| Latest-twelve-month cash interest cover | Not Ready | Nine-month cash interest paid is not printed | Obtain nine-month cash interest paid from a release, presentation or the cash flow statement notes |
| Liquidity at 2026-09-30 | Ready with Limitations | No cash forecast beyond the fourth quarter of 2026; availability is subject to customary conditions | None needed for the stated horizon |
| Debt structure and maturities | Ready with Limitations | Rank is not stated for 91 of other debt-like items; executed debt documents are not supplied | Obtain the credit agreement and indentures |
| Covenant headroom | Not Ready | The issuer prints no ratio or earnings definition for the springing test | Obtain the covenant compliance calculation and definitions |
| Forecast inputs | Ready with Limitations | No management guidance; 2025 comparison base carries step-up amortization | Use history only and label scenarios as assumptions |

## Calculations

| ID | Calculation | Inputs | Result | Period and unit | Source |
|---|---|---|---|---|---|
| C1 | Net debt, FY2023 / 2023-12-31 | 4,562 gross debt − 331 cash | 4,231 | 2023-12-31, USD million | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225 |
| C2 | Net debt, FY2024 / 2024-12-31 | 4,784 gross debt − 305 cash | 4,479 | 2024-12-31, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235 |
| C3 | Net debt, FY2025 / 2025-12-31 | 5,082 gross debt − 383 cash | 4,699 | 2025-12-31, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235 |
| C4 | Net debt, 2026-09-30 | 5,095 gross debt − 513 cash | 4,582 | 2026-09-30, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| C5 | EBITDA (Reported), FY2023 | 130 operating income + 382 depreciation and amortization | 512 | FY2023, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238 |
| C6 | EBITDA (Reported), FY2024 | 162 operating income + 436 depreciation and amortization | 598 | FY2024, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238 |
| C7 | EBITDA (Reported), FY2025 | 113 operating income + 421 depreciation and amortization | 534 | FY2025, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238 |
| C8 | EBITDA (Reported), 9M 2025 | 1 operating income + 322 depreciation and amortization | 323 | 9M 2025, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C9 | EBITDA (Reported), 9M 2026 | 271 operating income + 305 depreciation and amortization | 576 | 9M 2026, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C10 | LTM Revenue | 5,101 + 4,013 − 3,696 | 5,418 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C11 | LTM Operating income | 113 + 271 − 1 | 383 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C12 | LTM Depreciation and amortization | 421 + 305 − 322 | 404 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C13 | LTM EBITDA (Reported) | 534 + 576 − 323 | 787 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C14 | LTM Net cash from operating activities | 283 + 418 − 147 | 554 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C15 | LTM Purchases of property, plant and equipment | 349 + 226 − 273 | 302 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C16 | LTM Other expense, net | 75 + 81 − 29 | 127 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C17 | LTM Gross profit (calculated) | 3,051 + 2,517 − 2,179 | 3,389 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C18 | LTM interest expense | 421 + 285 − 323 | 383 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C19 | LTM free cash flow | 554 operating cash flow − 302 capital expenditure | 252 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C20 | Rise in EBITDA from FY2025 to LTM | 787 LTM − 534 FY2025 | 253 | USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C21 | Change in total debt from FY2025 to 2026-09-30 | 5,095 − 5,082 | 13 | USD million | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| C22 | Free cash flow (operating cash flow − capital expenditure) | FY2023 -17 − 181; FY2024 232 − 291; FY2025 283 − 349; 9M 2025 147 − 273; 9M 2026 418 − 226 | FY2023 -198; FY2024 -59; FY2025 -66; 9M 2025 -126; 9M 2026 192 | USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C23 | Total debt / EBITDA | FY2023 4,562 / 512; FY2024 4,784 / 598; FY2025 5,082 / 534; 2026-09-30 5,095 / 787 | FY2023 8.91; FY2024 8.00; FY2025 9.52; 2026-09-30 6.47 | x; the last row uses LTM EBITDA | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| C24 | Net debt / EBITDA | FY2023 4,231 / 512; FY2024 4,479 / 598; FY2025 4,699 / 534; 2026-09-30 4,582 / 787 | FY2023 8.26; FY2024 7.49; FY2025 8.80; 2026-09-30 5.82 | x; the last row uses LTM EBITDA | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 225; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| C25 | EBITDA / cash interest paid | FY2023 512 / 238; FY2024 598 / 415; FY2025 534 / 380 | FY2023 2.15; FY2024 1.44; FY2025 1.41; 2026-09-30 not calculable | x | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308 |
| C26 | EBITDA / interest expense (proxy, accrued expense) | FY2023 512 / 283; FY2024 598 / 399; FY2025 534 / 421; 2026-09-30 787 / 383 | FY2023 1.81; FY2024 1.50; FY2025 1.27; 2026-09-30 2.05 | x | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C27 | EBITDA after capital expenditure / cash interest paid | FY2023 (512 − 181) / 238; FY2024 (598 − 291) / 415; FY2025 (534 − 349) / 380 | FY2023 1.39; FY2024 0.74; FY2025 0.49 | x | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308 |
| C28 | Cash plus revolver availability | FY2024 305 + 358; FY2025 383 + 664; 2026-09-30 513 + 666 | FY2024 663; FY2025 1,047; 2026-09-30 1,179 | USD million | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 180; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 188; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 34 |
| C29 | Revolver availability at 2026-09-30 | 800 commitments − 100 borrowings − 34 letters of credit | 666 | 2026-09-30, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–34 |
| C30 | Liquidity / total debt | FY2024 663 / 4,784; FY2025 1,047 / 5,082; 2026-09-30 1,179 / 5,095 | FY2024 0.14; FY2025 0.21; 2026-09-30 0.23 | x | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 180; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 188; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 34 |
| C31 | Stated fourth-quarter 2026 cash needs | 130 interest + 7 mandatory amortization + 60 capital expenditure + 85 acquisition upfront cash + 75 executive separation payment | 357 | 2026-10-01 to 2026-12-31, USD million, about | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 89–90 |
| C32 | Liquidity / stated fourth-quarter needs | 1,179 / 357 | 3.30 | x | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 34; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 89–90 |
| C33 | Reconciling items between principal and carrying value | −48 unamortized discounts + 78 other financial liabilities | 30 | 2026-09-30, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 38 |
| C34 | Principal plus reconciling items | 5,065 + 30 | 5,095 | 2026-09-30, USD million; equals gross debt | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32 |
| C35 | Maturity ladder total | 7 + 28 + 1,440 + 28 + 128 + 3,434 | 5,065 | 2026-09-30, USD million; equals contractual principal | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36 |
| C36 | Term loan balance due in 2031 | 2,788 outstanding − 7 − 28 − 28 − 28 − 28 amortization to 2030 = 2,669; plus 765 euro notes | 3,434 | USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 35–36 |
| C37 | Debt-like items left out of the debt stack | 13 other debt + 78 other financial liabilities | 91 | 2026-09-30, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 38 |
| C38 | Cumulative leverage through each rank-1 facility in listed order | June 2030 Revolving Credit Facility cumulative 100 / 787; January 2031 Refinancing Term Facility cumulative 2,858 / 787; October 2028 Secured Notes cumulative 4,248 / 787; January 2031 Secured Notes cumulative 5,004 / 787 | 0.13; 3.63; 5.40; 6.36 | x | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32 |
| C39 | Pro forma net debt after the acquisition | 4,582 + 85 = 4,667; 4,667 / 787 | 4,667; 5.93x | USD million; x | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 56 |
| C40 | Pro forma net debt after the executive payment | 4,582 + 75 = 4,657; 4,657 / 787 | 4,657; 5.92x | USD million; x | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 56 |
| C41 | House sensitivity: LTM EBITDA with other expense, net added back (Analyst Judgement, not applied) | 787 + 127 = 914; 5,095 / 914 | 914; 5.57x | USD million; x | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C42 | Lease and pension claims outside debt at 2025-12-31 | operating leases 38 + 125 = 163; pension and retiree deficits 3 + 6 + 22 = 31 | 163; 31 | 2025-12-31, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 292; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 296–297 |
| C43 | Revenue growth | FY2023 4,146 / 3,768 − 1; FY2024 4,791 / 4,146 − 1; FY2025 5,101 / 4,791 − 1; 9M 2026 4,013 / 3,696 − 1 | FY2023 10.03%; FY2024 15.56%; FY2025 6.47%; 9M 2026 8.58% | percent | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, pages 225–226; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C44 | EBITDA (Reported) growth | FY2023 512 / 586 − 1 (FY2022: 207 + 379); FY2024 598 / 512 − 1; FY2025 534 / 598 − 1; 9M 2026 576 / 323 − 1 | FY2023 -12.63%; FY2024 16.80%; FY2025 -10.70%; 9M 2026 78.33% | percent | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, pages 226–227; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C45 | Gross margin (calculated) | gross profit / revenue per column | FY2023 60.40%; FY2024 60.93%; FY2025 59.81%; 9M 2025 58.96%; 9M 2026 62.72%; LTM 62.55% | percent | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C46 | EBITDA margin | EBITDA (Reported) / revenue per column | FY2023 12.35%; FY2024 12.48%; FY2025 10.47%; 9M 2025 8.74%; 9M 2026 14.35%; LTM 14.53% | percent | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C47 | Operating margin | operating income / revenue per column | FY2023 3.14%; FY2024 3.38%; FY2025 2.22%; 9M 2025 0.03%; 9M 2026 6.75%; LTM 7.07% | percent | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C48 | Capital expenditure / revenue | capital expenditure / revenue per column | FY2023 4.37%; FY2024 6.07%; FY2025 6.84%; 9M 2025 7.39%; 9M 2026 5.63%; LTM 5.57% | percent | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C49 | Operating cash flow / EBITDA (Reported) | operating cash flow / EBITDA per column | FY2023 -3.32%; FY2024 38.80%; FY2025 53.00%; 9M 2025 45.51%; 9M 2026 72.57%; LTM 70.39% | percent | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 237–238; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C50 | Segment profit margin, Vision Care | segment profit / segment revenue per column | FY2023 27.09%; FY2024 29.50%; FY2025 29.05%; 9M 2025 28.07%; 9M 2026 29.75% | percent | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |
| C51 | Segment profit margin, Pharmaceuticals | segment profit / segment revenue per column | FY2023 28.83%; FY2024 21.17%; FY2025 20.09%; 9M 2025 13.69%; 9M 2026 28.17% | percent | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |
| C52 | Segment profit margin, Surgical | segment profit / segment revenue per column | FY2023 6.52%; FY2024 5.22%; FY2025 2.01%; 9M 2025 0.47%; 9M 2026 8.08% | percent | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 322; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 55 |
| C53 | FY2022 reference figures used for FY2023 growth | revenue 3,768; operating income 207; depreciation and amortization 379; EBITDA 207 + 379 | 586 | FY2022, USD million | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, pages 226–227 |
| C54 | LTM other expense, net by component | restructuring 58 + 21 − 43 = 36; litigation 10 + 20 − 8 = 22; acquired research 33 + 16 − 29 = 20; impairments 0 + 13 − 0 = 13; contingent consideration −27 + 10 + 50 = 33; acquisition costs 7 + 4 − 5 = 6; gain on sale −6 − 3 + 6 = −3 | 127 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 303; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 40 |
| C55 | Inventory step-up amortization in the comparison period | 9M 2025 62; 9M 2026 none printed | 62 | 9M 2025, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17 |
| C56 | Accrued interest expense less cash interest paid | FY2023 283 − 238; FY2024 399 − 415; FY2025 421 − 380 | FY2023 45; FY2024 -16; FY2025 41 | USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 308 |
| C57 | Other financial liabilities as a share of total debt | 78 / 5,095 | 1.53% | 2026-09-30, percent | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 38 |
| C58 | Lease and pension claims against total debt | (163 + 31) / 5,082 | 3.82% | 2025-12-31, percent | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 292; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 296–297 |
| C59 | LTM net loss | −352 + (−45) − (−294) | -103 | LTM to 2026-09-30, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C60 | Rise in nine-month gross profit (calculated) | 2,517 − 2,179 | 338 | 9M 2026 against 9M 2025, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |
| C61 | EBITDA / interest expense for the nine-month columns (proxy) | 9M 2025 323 / 323; 9M 2026 576 / 285 | 1.00; 2.02 | x; nine-month EBITDA over nine-month expense | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–236; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15 |

## Gaps

- Cash interest paid for the nine-month 2025 and 2026 periods, and therefore for the last twelve months, is not printed in the quarterly reports; it restricts cash-basis interest cover to full years and leaves the latest period without a measure. Severity High; the action that would close it is a release, presentation or note stating nine-month cash interest paid.
- The issuer states no EBITDA or adjusted EBITDA and prints no covenant ratio, so the adjusted EBITDA row and the EBITDA bridge are not supplied and covenant headroom is not established; it restricts every leverage ratio to a constructed reported measure. Severity High; the action is the issuer's adjusted EBITDA reconciliation and the credit agreement's earnings definition.
- Income taxes paid for the nine-month periods are not printed, so cash tax is available for full years only. Severity Low; the action is a note or release stating nine-month cash taxes.
- The December 2023 revolver availability is not stated in the 2024 annual report, so undrawn committed facilities and liquidity for FY2023 are not supplied. Severity Low; the action is the 2023 annual report.
- The balance sheet at 2025-09-30 is not in any supplied filing, so the nine-month 2025 balance sheet column and any ratio on it are not supplied. Severity Low; the action is the third-quarter 2025 report.
- Nine months 2024 is not in the supplied filings, so nine-month 2025 revenue and EBITDA growth and the growth of the prior last twelve months are not supplied. Severity Low; the action is the third-quarter 2025 report.
- Several cash flow and income statement cells are printed as dashes, among them impairments, gain on sale of assets, loss on extinguishment of debt, inventory step-up amortization and financing costs, and several lines exist only in the annual or only in the interim statements; they are carried as not supplied rather than zero, and the printed totals add up with those cells at zero. Severity Low; no action is needed.
- Maintenance and growth capital expenditure are not disclosed, so only total capital expenditure is carried. Severity Low; the action is management's split of capital expenditure.
- Debt is not split by seniority on the balance sheet and USD 91 million of other debt and failed sale-leaseback obligations carry no stated security, rank, rate or amortization schedule, so they are left out of the debt stack and out of senior secured subtotals. Severity Medium; the action is the credit agreement, indentures and lease documents.
- The parent's own statements and debt are not in the supplied filings, so the parent's accounting basis and any parent-level leverage are not supplied. Severity Low; the action is the parent's annual report.
- Lease, pension and commitment figures exist only at 2025-12-31 because the quarterly reports carry no such notes, so the claims outside debt are nine months older than the debt figures. Severity Medium; the action is management's quarterly figures for these claims.
- The carrying value of the euro floating rate notes in euro is not printed, only the US dollar translation, so the carrying value cell for that instrument is not supplied. Severity Low; the action is the issuer's euro carrying amount.
- A discrete third-quarter income statement is printed but discrete quarters of depreciation and cash flow are not, so no discrete quarter is carried and nine-month columns stand in. Severity Low; the action is a release stating third-quarter depreciation and cash flow.
- The payment date of the USD 75 million executive payment is not stated and the USD 85 million acquisition had not closed at the filing date, so the pro forma figures are single-event illustrations. Severity Medium; the action is the closing and payment disclosures after 2026-10-28.
- Per-share data and weighted average share counts are printed but not carried in the statement tables because they are not monetary millions. Severity Low; no action is needed.

## Next module

The orchestrator selects the next module.
