## Request

Tidewater Inc (issuer tdw-98222), financial foundation as of 2026-11-18 under the credit_snapshot pathway. Scope: consolidated statements for FY2024, FY2025 and the nine months and third quarter of 2026, carrying-value debt, net debt, cash interest, liquidity and leverage on derived reported EBITDA, with the Wilson acquisition of 2026-08-31 flagged as a perimeter change.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_tdw.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2024 | 2025-02-27 | 8ca905527a7c9cff621b832e11b0692bba991cec6181aa1dc09c8d400ca983ae | FY2024 undrawn revolver and original FY2024 operating cash flow, compared with the revised figure. Dated by its signature; the filing date is not stated. |
| 10-K_2025-12-31_tdw.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2025 | 2026-03-02 | a5dd7b901aba62c3d1fb5905f82bacfcbef2c20814021d03fb5b0e0fb84c37a3 | Audited FY2025 and FY2024 statements, debt note, maturity ladder, cash interest paid and cash flow revision. |
| 10-Q_2026-03-31_tdw.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-04 | ec23107e32824444c2930d5dafe63209c29ee1d04ad97946638eba864d6eb9f8 | Cross-check of the Q4 2025 and Q1 2026 quarterly revenue. Dated by its signature; the filing date is not stated. |
| 10-Q_2026-06-30_tdw.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-03 | aabaaaa4fb775da999e974484c9f3c6d0ddcecd159cc02343a69c3603ef85378 | Cross-check of the Q2 2026 and six-month 2026 revenue. Dated by its signature; the filing date is not stated. |
| 10-Q_2026-09-30_tdw.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-09 | 63e21a9ee66b23e600a92728e401ca57ba23e6788b945355a3b31bab060a9145 | Unaudited Q3 and nine-month 2026 and 2025 statements, balance sheet at 2026-09-30, debt table and ladder, covenants, liquidity, acquisition note and subsequent events. Dated by its signature; the filing date is not stated. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 21c520fc23ce3fb1f87a3455bc17a1eef6e2f580a49223f557c8bdf11ac4fe26 | Source dates, perimeter change, version conflicts and missing documents; no financial balance was imported from it. |

No external sources were used.

## Findings

### Bottom line

Leverage on reported EBITDA is low but rose sharply: net debt reached 0.92x last-twelve-months EBITDA at 2026-09-30 against 0.14x at 2025-12-31, because the Wilson acquisition added debt and used cash while contributing one month of earnings.
Basis: 10-Q_2026-09-30_tdw.htm.jsonl, pages 2–4; 10-Q_2026-09-30_tdw.htm.jsonl, page 8; 10-K_2025-12-31_tdw.htm.jsonl, page 100; calculation C02; calculation C05

Interest cover on cash interest paid was 8.03x on the same basis against 11.40x at 2025-12-31. The issuer states no EBITDA, so the figure used is operating income plus depreciation and amortization, derived and unadjusted.
Basis: 10-Q_2026-09-30_tdw.htm.jsonl, pages 2–4; 10-K_2025-12-31_tdw.htm.jsonl, pages 101–103; calculation C03; calculation C04; calculation C05

Latest-quarter ratios mix the full acquired debt with a month of acquired earnings, and the acquisition accounting is provisional, so read them as the starting point after the acquisition, not as steady state.
Basis: 10-Q_2026-09-30_tdw.htm.jsonl, pages 7–9; Source readiness (CP-0)

### Key findings

Carrying-value debt rose from USD 654,893 thousand at 2025-12-31 to USD 862,260 thousand at 2026-09-30 while cash fell from USD 578,761 thousand to USD 390,844 thousand, so net debt rose from USD 76,132 thousand to USD 471,416 thousand. The Wilson acquisition accounts for the move: net cash paid for it was USD 272,975 thousand and the acquired loans stood at USD 224,506 thousand of principal at 2026-09-30, so it was funded from cash on hand and assumed loans, with no new borrowing in the nine months.
Basis: 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, pages 2–4; 10-Q_2026-09-30_tdw.htm.jsonl, page 13; calculation C01; calculation C02; calculation C10

Cash interest paid was USD 62,908 thousand in the nine months of 2026 against USD 47,234 thousand a year earlier, and reported EBITDA fell to USD 379,583 thousand from USD 414,770 thousand, a decline of 8.48%. The July 2025 refinancing left the senior notes due July 2030 paying one coupon each January and July, so two coupons fall inside the 2026 nine months and cash interest in any period is timing-sensitive.
Basis: 10-Q_2026-09-30_tdw.htm.jsonl, pages 2–4; 10-Q_2026-09-30_tdw.htm.jsonl, page 13; calculation C03; calculation C11

Operating cash flow was USD 161,443 thousand in the nine months of 2026 against USD 226,148 thousand, and after additions to properties and equipment of USD 39,188 thousand free cash flow was USD 122,255 thousand against USD 205,534 thousand. The EBITDA used here adds back USD 84,118 thousand of drydock amortization while cash drydock spending was USD 87,898 thousand, so on the last-twelve-months basis net debt over EBITDA less cash drydock spending is 1.16x rather than 0.92x.
Basis: 10-Q_2026-09-30_tdw.htm.jsonl, pages 3–4; calculation C08; calculation C12

Cash of USD 390,844 thousand plus the undrawn USD 250.0 million revolver gives USD 640,844 thousand of stated liquidity at 2026-09-30, and about 21% of the cash held by foreign subsidiaries was awaiting conversion to dollars. Principal due through 2029 totals USD 141,707 thousand, while USD 682,474 thousand falls due in 2030, mostly the senior unsecured notes due July 2030, so refinancing pressure sits in 2030 rather than in the near term.
Basis: 10-Q_2026-09-30_tdw.htm.jsonl, page 2; 10-Q_2026-09-30_tdw.htm.jsonl, pages 13–14; 10-Q_2026-09-30_tdw.htm.jsonl, pages 43–44; 10-Q_2026-09-30_tdw.htm.jsonl, page 19; calculation C08; calculation C13

The issuer prints no EBITDA and no total liabilities, so both are derived here, and the 2024 operating cash flow was revised upward by USD 8,623 thousand in the 2025 annual report; the revised figure is used throughout.
Basis: 10-K_2025-12-31_tdw.htm.jsonl, pages 100–104; 10-K_2024-12-31_tdw.htm.jsonl, page 105; calculation C03; calculation C07; calculation C14

### Contrary evidence and what would change the view

The strongest contrary evidence is that the ratio overstates steady-state leverage: all of the acquired debt is in the balance sheet but only one month of acquired earnings is in the last twelve months, and the issuer's own pro forma revenue for the nine months of 2026 is USD 1,169,676 thousand against USD 1,028,925 thousand reported, a difference of USD 140,751 thousand. No pro forma EBITDA is stated, and the acquired business reported a net loss for its first month, so how much earnings the extra revenue adds is not established. A full quarter of the acquired fleet in the next report, the final purchase accounting, or a further fall in legacy earnings would each move the view.
Basis: 10-Q_2026-09-30_tdw.htm.jsonl, pages 8–9; calculation C15

### Limitations

Reported EBITDA is derived as operating income plus depreciation and amortization and includes gains on asset dispositions, and the revolver covenant EBITDA is defined in an agreement that was not supplied, so covenant headroom is not established. Cash flows are printed only year to date, the 2025 interim reports as first filed were not supplied, and whether bank guarantees procured for the acquisition reduced revolver availability before 2026-10-02 is not stated, so undrawn capacity is the commitment less drawings only. Every ratio at 2026-09-30 uses principal and carrying values that include the acquired loans.
Basis: Source readiness (CP-0); 10-Q_2026-09-30_tdw.htm.jsonl, page 14; 10-Q_2026-09-30_tdw.htm.jsonl, page 26

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1.15 | 0.56 | x | Carrying-value debt and cash at 2024-12-31 over derived reported EBITDA for FY2024; EBITDA is operating income plus depreciation and amortization, not an issuer figure. |
| FY2025 / 2025-12-31 | 1.20 | 0.14 | x | Carrying-value debt and cash at 2025-12-31 over derived reported EBITDA for FY2025; the Wilson acquisition of 2026-08-31 is not in this year-end. |
| 2026-09-30 | 1.69 | 0.92 | x | Carrying-value debt and cash at 2026-09-30 over last-twelve-months derived reported EBITDA; debt includes all of the Wilson loans while EBITDA includes one month of Wilson. |

The main qualification is that the 2026-09-30 row puts all acquired debt over only one month of acquired earnings.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 8.28 | x | Derived reported EBITDA over cash interest paid, net of amounts capitalized, for FY2024. |
| FY2025 / 2025-12-31 | 11.40 | x | Derived reported EBITDA over cash interest paid for FY2025. |
| 2026-09-30 | 8.03 | x | Last-twelve-months derived reported EBITDA over last-twelve-months cash interest paid; semiannual coupons make cash interest in a twelve-month window timing-sensitive. |

The main qualification is that cash interest paid depends on coupon dates, so cover moves with timing as well as with earnings.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 324.918 | 25.000 | US$m | Cash and cash equivalents excluding USD 2.032m of restricted cash shown on its own line; undrawn is the USD 25.0m revolver maturing in 2026 with no amounts drawn. |
| FY2025 / 2025-12-31 | 578.761 | 250.000 | US$m | Cash and cash equivalents; undrawn is the USD 250.0m revolver maturing 2030-04-15, with no amounts drawn as of the date of the report. |
| 2026-09-30 | 390.844 | 250.000 | US$m | Cash and cash equivalents excluding long-term restricted cash of about USD 4.1m in other assets; undrawn is the USD 250.0m commitment with no amounts drawn as of the date of the report; any reduction for guarantees or letters of credit is not stated. |

The main qualification is that undrawn capacity is commitment less drawings and the filings do not say whether guarantees reduced it.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 15.489 | US$m | Scheduled principal for the remainder of 2026 as of 2026-09-30. |
| FY2027 | 51.280 | US$m | Scheduled principal. |
| FY2028 | 38.809 | US$m | Scheduled principal. |
| FY2029 | 36.129 | US$m | Scheduled principal. |
| FY2030 | 682.474 | US$m | Scheduled principal, including the USD 650.0m 9.125% senior notes due 2030-07-15. |
| FY2031 | 65.809 | US$m | The filing's thereafter line: all principal due after 2030; the maturity year is not stated. |

The main qualification is that the FY2031 row holds all principal due after 2030, not a single year.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-30 | Unit | Basis |
|---|---|---|---|---|---|
| Revenue | 1,345.835 | 1,352.786 | 1,365.723 | US$m | Reported; last twelve months is FY2025 plus nine months 2026 less nine months 2025 |
| EBITDA (Reported, derived) | 554.118 | 544.935 | 509.748 | US$m | Calculated: operating income plus depreciation and amortization |
| EBITDA margin | 41.17 | 40.28 | 37.32 | % | Calculated: EBITDA over revenue |
| Net Cash from Operating Activities | 282.472 | 379.108 | 314.403 | US$m | Reported; FY2024 as revised in the FY2025 annual report |
| Additions to properties and equipment | 27.580 | 25.761 | 44.335 | US$m | Reported cash outflow, shown as a positive amount |
| Free cash flow (operating cash flow less additions to properties and equipment) | 254.892 | 353.347 | 270.068 | US$m | Calculated; working capital and drydock spending are inside operating cash flow |
| Cash Interest Paid | 66.897 | 47.810 | 63.484 | US$m | Reported cash paid, net of amounts capitalized |
| Total debt (carrying value) | 637.096 | 654.893 | 862.260 | US$m | Reported current plus long-term debt, net of issuance costs and discounts |
| Cash & Equivalents | 324.918 | 578.761 | 390.844 | US$m | Reported balance sheet cash |
| Net debt | 312.178 | 76.132 | 471.416 | US$m | Calculated: total debt less cash |
| Total debt / EBITDA | 1.15 | 1.20 | 1.69 | x | Calculated |
| Net debt / EBITDA | 0.56 | 0.14 | 0.92 | x | Calculated |
| EBITDA / cash interest | 8.28 | 11.40 | 8.03 | x | Calculated |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 637.096 | 324.918 | 312.178 | US$m | Gross debt is current portion USD 65.386m plus long-term debt USD 571.710m at carrying value, net of USD 10.791m of discount and issuance costs; principal USD 647.887m. It includes the term loan, notes and vessel facility agreements; finance leases are carried outside debt. Reported. |
| FY2025 / 2025-12-31 | 654.893 | 578.761 | 76.132 | US$m | Gross debt is current portion USD 5.845m plus long-term debt USD 649.048m at carrying value, net of USD 15.185m of discount and issuance costs; principal USD 670.078m. It includes the 2030 senior notes and vessel facility agreements; a finance lease liability of USD 24.370m sits in other current liabilities, outside debt. Reported. |
| 2026-09-30 | 862.260 | 390.844 | 471.416 | US$m | Gross debt is current portion USD 58.694m plus long-term debt USD 803.566m at carrying value, net of USD 27.730m of discount and issuance costs; principal USD 889.990m. It includes the 2030 senior notes, the acquired BNDES and Banco do Brasil loans and vessel facility agreements. Reported; the acquired loans were assumed on 2026-08-31. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 889.990 | -27.730 | 862.260 | US$m | Principal is the sum of the maturity ladder; the reconciling item is the debt discount and issuance costs of USD 27.730m, which includes the fair value discount on the acquired loans; no debt is left out of the ladder. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Wilson Companies acquisition closed, after the FY2025 balance-sheet date | 2026-08-31 | Not supplied: the filings state cash paid, cash acquired and debt assumed but no effect on net debt | Not supplied: no pro forma 2025-12-31 net debt is stated and combining the pieces would construct one | Not supplied: no pro forma 2025-12-31 net debt is stated | US$m | The acquisition is inside the 2026-09-30 row of the net debt table and outside the FY2025 row; the closing, cash paid of USD 283.112m and debt assumed are stated in the third-quarter 2026 report, which gives pro forma revenue and net income only. |
| Replacement bank guarantees terminated, after the 2026-09-30 balance-sheet date | 2026-10-02 | Not supplied: the filing states a termination cost of about USD 1.3m but not whether it was paid after 2026-09-30 or accrued before | Not supplied: the cash effect on net debt is not established | Not supplied: the cash effect on net debt is not established | US$m | Source is the subsequent events note of the third-quarter 2026 report; the guarantees were up to USD 170.5m from DNB Bank ASA and backstopped the indemnity to the sellers; no other post-period change in net debt is stated. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1345.835 | 554.118 | US$m | Twelve months; the EBITDA column is reported EBITDA derived as operating income plus depreciation and amortization, because the issuer states no adjusted EBITDA. |
| FY2025 / 2025-12-31 | 1352.786 | 544.935 | US$m | Twelve months; reported EBITDA derived, same definition. |
| 2026-09-30 | 1365.723 | 509.748 | US$m | Twelve months to 2026-09-30 (FY2025 plus nine months 2026 less nine months 2025); reported EBITDA derived, same definition; includes one month of the Wilson Companies. |

The main qualification is that the EBITDA column is derived reported EBITDA, not an adjusted measure.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolving Credit Facility, USD 250.0m, due 2030-04-15 | 1 | Yes | 0 | 0.00 | US$m | Senior secured; Tidewater Inc. as borrower with the Guarantors; no amounts drawn as of the date of the report. Rank 1 groups secured borrowings; the sources do not state intercreditor ranking among them. |
| Vessel Facility Agreements | 1 | Yes | 15.484 | 0.03 | US$m | Principal; secured by the financed vessels and guaranteed by Tidewater Inc. as parent guarantor. |
| BNDES Vessel Construction Loans | 1 | Yes | 167.691 | 0.36 | US$m | Principal; borrower Tidewater do Brasil S.A. (formerly Wilson Sons Offshore S.A.), secured by eleven vessels; Tidewater Inc. guaranteed under an agreement of 2026-09-21 and former guarantors were released effective 2026-10-01. |
| BNDES Vessel Conversion and Drydock Loans | 1 | Yes | 34.828 | 0.43 | US$m | Principal; borrowers Tidewater do Brasil S.A. or Tidewater Navegacao Brasileira S.A.; secured by bank guarantees from various banks; no Tidewater Inc. guarantee is stated. |
| Banco do Brasil Vessel Construction Loan | 1 | Yes | 21.987 | 0.47 | US$m | Principal; borrower Tidewater Navegacao Brasileira S.A.; Tidewater Inc. is guarantor; secured by four vessels and a bank guarantee equal to 20% of the balance. |
| 9.125% Senior Notes due July 2030 | 2 | No | 650.000 | 1.75 | US$m | Principal; issued by Tidewater Inc. and unconditionally guaranteed on a senior unsecured basis by the Guarantors. Cumulative leverage is cumulative principal over last-twelve-months derived reported EBITDA of USD 509.748m, so it differs from the carrying-value ratio. |

The main qualification is that rank 1 groups every secured borrowing on separate collateral and the sources do not state ranking among them.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported) | Not supplied: the issuer states no adjustments, so no bridge to an adjusted figure can be stated | US$m | Reported EBITDA is derived as operating income plus depreciation and amortization; no add-backs are stated by the issuer. |
| EBITDA (Adjusted) | Not supplied: the issuer states no adjusted EBITDA | US$m | None of the five filings states an adjusted EBITDA or a list of add-backs. |

No qualification.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 62 |
| Calculated | 38 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 6 |
| Fields present | 18 |
| Fields total | 18 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 2 |

### Statement periods

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_tdw.htm.jsonl | Annual Form 10-K | FY2025 and FY2024 statements; FY2023 comparatives not extracted | USD | thousands | Tidewater Inc. consolidated, before the Wilson acquisition | US GAAP | Tier 1 audited statements | Controls FY2025 and FY2024, debt note, cash interest paid | Cash flow classification of FY2024 revised; states the acquisition as a subsequent event only |
| 10-K_2024-12-31_tdw.htm.jsonl | Annual Form 10-K | FY2024 as originally reported | USD | thousands | Tidewater Inc. consolidated, before the Wilson acquisition | US GAAP | Tier 1 audited statements | FY2024 undrawn revolver; original operating cash flow for comparison | Debt description superseded in July 2025; operating cash flow superseded by the 2025 report |
| 10-Q_2026-09-30_tdw.htm.jsonl | Quarterly Form 10-Q | Q3 2026 and nine months 2026 with 2025 comparatives; balance sheet at 2026-09-30 | USD | thousands | Tidewater Inc. consolidated including the Wilson Companies from 2026-08-31 | US GAAP | Tier 2b unaudited, no auditor review stated | Latest balance sheet, debt, liquidity, covenants | Provisional purchase accounting; cash flows year to date only |
| 10-Q_2026-06-30_tdw.htm.jsonl | Quarterly Form 10-Q | Q2 2026 and six months 2026 | USD | thousands | Tidewater Inc. consolidated, before the Wilson acquisition | US GAAP | Tier 2b unaudited, no auditor review stated | Quarterly revenue cross-check | Not used for any ratio |
| 10-Q_2026-03-31_tdw.htm.jsonl | Quarterly Form 10-Q | Q1 2026 with Q4 2025 sequential comparison | USD | thousands | Tidewater Inc. consolidated, before the Wilson acquisition | US GAAP | Tier 2b unaudited, no auditor review stated | Q4 2025 revenue cross-check | Not used for any ratio |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Tidewater Inc. | Issuer and registrant; borrower of the revolving credit facility and issuer of the 2030 notes | December 31 | USD | thousands | Consolidated with its subsidiaries | US GAAP | FY2024, FY2025, Q3 2026, 9M 2026 with 2025 comparatives; balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30 |
| Wilson Companies (Tidewater Offshore do Brasil S.A. and Atlantic Offshore Services S.A.) | Acquired subsidiaries; borrowers of the acquired BNDES and Banco do Brasil loans | December 31 | USD (loan denomination not stated) | thousands | Consolidated from 2026-08-31 only | US GAAP | Revenue and net loss since closing; provisional balance sheet at closing |

Subsequent events: the BNDES loan amendments took effect on 2026-10-01, the replacement bank guarantees ended on 2026-10-02, and the appeal hearing on the Venezuela judgment was held on 2026-10-21. None is blended into period figures.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Money tables restated from thousands to millions | 10-Q_2026-09-30_tdw.htm.jsonl, pages 2–4 | Unit conversion | USD thousands as printed | US$m, exact division by 1,000 | The money unit is millions even where a statement prints thousands | All |
| EBITDA (Reported) derived | 10-K_2025-12-31_tdw.htm.jsonl, page 101 | Derivation | Not printed by the issuer | Operating income plus depreciation and amortization | No source states EBITDA; the derivation keeps gains on asset dispositions inside operating income | FY2024, FY2025, 9M 2026, 9M 2025, Q3 2026, Q3 2025 |
| Total Liabilities derived | 10-K_2025-12-31_tdw.htm.jsonl, page 100 | Derivation | Not printed by the issuer | Total current liabilities plus long-term debt plus other liabilities | The balance sheets print no total liabilities line; the sum equals total assets less total equity | 2024-12-31, 2025-12-31, 2026-09-30 |
| Total Debt set to carrying value | 10-Q_2026-09-30_tdw.htm.jsonl, page 2; 10-Q_2026-09-30_tdw.htm.jsonl, page 13 | Definition | Principal USD 889,990 thousand | Carrying value USD 862,260 thousand | Debt is current portion plus long-term debt, net of issuance costs and discounts | 2026-09-30 |
| Last-twelve-months figures constructed | 10-Q_2026-09-30_tdw.htm.jsonl, page 2 | Derived period | Not printed | FY2025 plus nine months 2026 less nine months 2025 | Interim ratios use a twelve-month window | 2026-09-30 |
| FY2024 operating cash flow taken as revised | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-K_2024-12-31_tdw.htm.jsonl, page 105 | Version choice | USD 273,849 thousand | USD 282,472 thousand | The later annual report states the revision and controls | FY2024 |

### T4.4 Income statement

| Line item | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Q3 2026 | Q3 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Vessel revenues | 1,338,931 | 1,337,637 | 1,020,696 | 1,006,048 | 357,547 | 338,491 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Other operating revenues | 13,855 | 8,198 | 8,229 | 9,940 | 2,869 | 2,622 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Total revenue | 1,352,786 | 1,345,835 | 1,028,925 | 1,015,988 | 360,416 | 341,113 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Vessel operating costs | 680,582 | 693,107 | 537,174 | 508,463 | 190,241 | 176,130 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Costs of other operating revenues | 6,420 | 3,555 | 3,183 | 5,790 | 1,350 | 1,252 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| General and administrative | 134,531 | 110,817 | 112,181 | 95,563 | 43,777 | 35,256 | USD thousands | Reported; includes acquisition costs of USD 10.2 million in Q3 2026 and USD 14.4 million in the nine months | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 2; 10-Q_2026-09-30_tdw.htm.jsonl, page 8 |
| Depreciation and amortization | 262,339 | 242,770 | 207,738 | 196,150 | 74,707 | 66,404 | USD thousands | Reported; includes amortization of deferred drydocking and survey costs | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 2; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| (Gain) loss on asset dispositions, net | -13,682 | -15,762 | -3,196 | -8,598 | 8 | -580 | USD thousands | Reported; a gain is negative | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, pages 2–3 |
| Total costs and expenses | 1,070,190 | 1,034,487 | 857,080 | 797,368 | 310,083 | 278,462 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, pages 2–3 |
| Operating income | 282,596 | 311,348 | 171,845 | 218,620 | 50,333 | 62,651 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Foreign exchange gain (loss) | 22,683 | -15,276 | -7,765 | 20,549 | -3,674 | 1,277 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Interest income and other, net | 8,169 | 6,383 | 7,761 | 4,715 | 4,842 | 455 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Loss on early extinguishment of debt | -27,113 | Not supplied: printed as a dash in the source | Not supplied: printed as a dash in the source | -27,101 | Not supplied: printed as a dash in the source | -27,101 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Interest and other debt costs, net | -66,090 | -72,967 | -49,392 | -49,375 | -16,075 | -16,589 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Total other expense | -62,351 | -81,860 | -49,396 | -51,212 | -14,907 | -41,958 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Income before income taxes | 220,245 | 229,488 | 122,449 | 167,408 | 35,426 | 20,693 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Income tax expense (benefit) | -113,208 | 50,216 | 78,160 | 53,404 | 18,195 | 21,711 | USD thousands | Reported; FY2025 is a benefit | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Net income | 333,453 | 179,272 | 44,289 | 114,004 | 17,231 | -1,018 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Net loss attributable to noncontrolling interests | -1,208 | -1,384 | -1,027 | -773 | -283 | -212 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Net income attributable to Tidewater Inc. | 334,661 | 180,656 | 45,316 | 114,777 | 17,514 | -806 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| EBITDA (Reported) | 544,935 | 554,118 | 379,583 | 414,770 | 125,040 | 129,055 | USD thousands | Calculated: operating income plus depreciation and amortization; the issuer states no EBITDA; gains on asset dispositions stay inside operating income | calculation C03 |

### T4.5 Cash flow statement

| Line item | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 333,453 | 179,272 | 44,289 | 114,004 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Depreciation | 151,095 | 156,166 | 123,620 | 113,257 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Amortization of deferred drydocking and survey costs | 111,244 | 86,604 | 84,118 | 82,893 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Deferred drydocking and survey costs paid | -98,575 | -133,258 | -87,898 | -84,722 | USD thousands | Reported cash outflow inside operating activities | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Net Cash from Operating Activities | 379,108 | 282,472 | 161,443 | 226,148 | USD thousands | Reported; FY2024 as revised in the FY2025 annual report | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Proceeds from asset dispositions | 17,619 | 19,338 | 14,856 | 12,288 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Proceeds from sale of notes | 660 | 8,054 | Not supplied: printed as a dash in the source | 660 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 |
| Acquisitions, net of cash acquired | Not supplied: printed as a dash in the source | Not supplied: printed as a dash in the source | -272,975 | Not supplied: printed as a dash in the source | USD thousands | Reported; the Wilson acquisition | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, pages 3–4 |
| Additions to properties and equipment | -25,761 | -27,580 | -39,188 | -20,614 | USD thousands | Reported cash outflow | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Net Cash from Investing Activities | -7,482 | -188 | -297,307 | -7,666 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Issuance of long-term debt | 650,000 | Not supplied: printed as a dash in the source | Not supplied: printed as a dash in the source | 650,000 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Principal payments on long-term debt | -641,942 | -103,030 | -8,521 | -640,128 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Purchase of common stock | -90,089 | -90,742 | -7,945 | -90,089 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Payments on finance leases | -6,432 | Not supplied: printed as a dash in the source | -24,903 | -5,537 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Debt extinguishment premium | -19,601 | Not supplied: printed as a dash in the source | Not supplied: printed as a dash in the source | -19,589 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Debt issuance costs | -19,829 | -213 | -109 | -18,985 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Share based awards reacquired to pay taxes | -8,066 | -28,614 | -6,568 | -8,039 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Net Cash from Financing Activities | -135,959 | -222,595 | -48,046 | -132,367 | USD thousands | Reported; FY2024 also includes exercise of warrants of USD 4 thousand | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| FX Effect on Cash | 16,870 | -8,623 | -2,704 | 15,960 | USD thousands | Reported effect of exchange rate changes on cash, cash equivalents and restricted cash | 10-K_2025-12-31_tdw.htm.jsonl, page 103; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Net Cash Change | 252,537 | 51,066 | -186,614 | 102,075 | USD thousands | Reported; includes the FX effect | 10-K_2025-12-31_tdw.htm.jsonl, page 103; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Opening Cash | 329,031 | 277,965 | 581,568 | 329,031 | USD thousands | Reported; cash, cash equivalents and restricted cash | 10-K_2025-12-31_tdw.htm.jsonl, page 103; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Closing Cash | 581,568 | 329,031 | 394,954 | 431,106 | USD thousands | Reported; cash, cash equivalents and restricted cash, including long-term restricted cash in other assets | 10-K_2025-12-31_tdw.htm.jsonl, page 103; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Cash Interest Paid | 47,810 | 66,897 | 62,908 | 47,234 | USD thousands | Reported cash paid, net of amounts capitalized | 10-K_2025-12-31_tdw.htm.jsonl, page 103; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2024 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 578,761 | 324,918 | 390,844 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Restricted cash, current | Not supplied: printed as a dash in the source | 2,032 | Not supplied: not a separate line in the quarterly balance sheet | USD thousands | Reported; long-term restricted cash of about USD 4.1 million sits in other assets at 2026-09-30 | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 |
| Trade and other receivables, net | 285,372 | 323,805 | 328,738 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Marine operating supplies | 38,482 | 34,319 | 51,050 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Prepaid expenses and other current assets | 11,520 | 13,588 | 17,627 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Total current assets | 914,135 | 698,662 | 788,259 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Net properties and equipment | 1,072,020 | 1,184,282 | 1,513,820 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Deferred drydocking and survey costs | 139,736 | 152,550 | 143,393 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Indemnification assets | 9,455 | 11,946 | 9,153 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Deferred tax assets | 200,939 | 3,163 | 179,013 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Other assets | 50,626 | 24,301 | 39,410 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Total Assets | 2,386,911 | 2,074,904 | 2,673,048 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Accounts payable | 66,347 | 71,385 | 60,238 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Accrued expenses | 153,169 | 129,894 | 155,362 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Current portion of long-term debt | 5,845 | 65,386 | 58,694 | USD thousands | Reported carrying value | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Other current liabilities | 89,876 | 64,948 | 78,610 | USD thousands | Reported; at 2025-12-31 includes a finance lease liability of USD 24,370 thousand | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2; 10-Q_2026-09-30_tdw.htm.jsonl, page 23 |
| Total current liabilities | 315,237 | 331,613 | 352,904 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Long-term debt | 649,048 | 571,710 | 803,566 | USD thousands | Reported carrying value, net of issuance costs and discounts | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Other liabilities | 61,372 | 60,396 | 115,537 | USD thousands | Reported; includes deferred tax liabilities from the acquisition at 2026-09-30 | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Total Liabilities | 1,025,657 | 963,719 | 1,272,007 | USD thousands | Calculated: total current liabilities plus long-term debt plus other liabilities; the balance sheet prints no total liabilities line | calculation C07 |
| Total stockholders' equity | 1,365,388 | 1,114,111 | 1,406,202 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Noncontrolling interests | -4,134 | -2,926 | -5,161 | USD thousands | Reported | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Total Equity | 1,361,254 | 1,111,185 | 1,401,041 | USD thousands | Reported; includes noncontrolling interests | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| Total Debt | 654,893 | 637,096 | 862,260 | USD thousands | Calculated: current portion plus long-term debt at carrying value; the principal totals are 670,078, 647,887 and 889,990 | calculation C01 |
| Cash & Equivalents | 578,761 | 324,918 | 390,844 | USD thousands | Reported cash and cash equivalents; restricted cash is excluded | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component (USD millions) | Current Stub (USD millions) | Prior-Year Stub (USD millions) | Derived Value (USD millions) | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM to 2026-09-30 | USD 1,352.786m | USD 1,028.925m | USD 1,015.988m | USD 1,365.723m | Calculated | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 | Includes one month of the Wilson Companies |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 544.935m | USD 379.583m | USD 414.770m | USD 509.748m | Calculated | calculation C03 | Derived EBITDA; includes one month of the Wilson Companies |
| Cash Interest Paid | LTM to 2026-09-30 | USD 47.810m | USD 62.908m | USD 47.234m | USD 63.484m | Calculated | 10-K_2025-12-31_tdw.htm.jsonl, page 103; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 | Timing of semiannual coupons |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 379.108m | USD 161.443m | USD 226.148m | USD 314.403m | Calculated | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 | Nine-month 2025 comparative as printed in the 2026 report |
| Additions to properties and equipment | LTM to 2026-09-30 | USD 25.761m | USD 39.188m | USD 20.614m | USD 44.335m | Calculated | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 4 | Cash outflow shown as a positive amount |
| Deferred drydocking and survey costs paid | LTM to 2026-09-30 | USD 98.575m | USD 87.898m | USD 84.722m | USD 101.751m | Calculated | 10-K_2025-12-31_tdw.htm.jsonl, page 102; 10-Q_2026-09-30_tdw.htm.jsonl, page 3 | Cash outflow shown as a positive amount |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 637.096 | 10-K_2025-12-31_tdw.htm.jsonl, page 100 | 554.118 | 10-K_2025-12-31_tdw.htm.jsonl, page 101 | FY2024 / 2024-12-31 | USD | US$m | 1.15 | Calculated | Tier 1 audited | EBITDA derived, not issuer-stated |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 312.178 | calculation C02 | 554.118 | 10-K_2025-12-31_tdw.htm.jsonl, page 101 | FY2024 / 2024-12-31 | USD | US$m | 0.56 | Calculated | Tier 1 audited | EBITDA derived, not issuer-stated |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 554.118 | 10-K_2025-12-31_tdw.htm.jsonl, page 101 | 66.897 | 10-K_2025-12-31_tdw.htm.jsonl, page 103 | FY2024 / 2024-12-31 | USD | US$m | 8.28 | Calculated | Tier 1 audited | Cash interest is cash paid, not expense |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 654.893 | 10-K_2025-12-31_tdw.htm.jsonl, page 100 | 544.935 | 10-K_2025-12-31_tdw.htm.jsonl, page 101 | FY2025 / 2025-12-31 | USD | US$m | 1.20 | Calculated | Tier 1 audited | EBITDA derived, not issuer-stated |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 76.132 | calculation C02 | 544.935 | 10-K_2025-12-31_tdw.htm.jsonl, page 101 | FY2025 / 2025-12-31 | USD | US$m | 0.14 | Calculated | Tier 1 audited | EBITDA derived, not issuer-stated |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 544.935 | 10-K_2025-12-31_tdw.htm.jsonl, page 101 | 47.810 | 10-K_2025-12-31_tdw.htm.jsonl, page 103 | FY2025 / 2025-12-31 | USD | US$m | 11.40 | Calculated | Tier 1 audited | Cash interest is cash paid, not expense |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 862.260 | 10-Q_2026-09-30_tdw.htm.jsonl, page 2 | 509.748 | calculation C04 | 2026-09-30 | USD | US$m | 1.69 | Calculated | Tier 2b unaudited | Last-twelve-months EBITDA with one month of Wilson |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 471.416 | calculation C02 | 509.748 | calculation C04 | 2026-09-30 | USD | US$m | 0.92 | Calculated | Tier 2b unaudited | Last-twelve-months EBITDA with one month of Wilson |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 509.748 | calculation C04 | 63.484 | calculation C04 | 2026-09-30 | USD | US$m | 8.03 | Calculated | Tier 2b unaudited | Cash interest is cash paid, not expense |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | LTM to 2026-09-30 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|
| Profitability | EBITDA margin, % of revenue | 41.17 | 40.28 | 37.32 | Down | Derived EBITDA over revenue; calculation C12 |
| Cash flow | Free cash flow, US$m | 254.892 | 353.347 | 270.068 | Up then down | Operating cash flow less additions to properties and equipment; drydock spending is inside operating cash flow |
| Liquidity | Cash plus undrawn committed facilities, US$m | 349.918 | 828.761 | 640.844 | Up then down | Undrawn capacity is commitment less drawings; availability after guarantees not stated |
| Fleet | Owned vessels at period end | 211 | 208 | 226 | Down then up | Counts from 10-K_2024-12-31_tdw.htm.jsonl, page 66 and 10-Q_2026-09-30_tdw.htm.jsonl, page 22; the 2025-12-31 count includes two vessels held under finance leases and the 2026-09-30 count includes the 22 vessels acquired with the Wilson Companies |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported unadjusted EBITDA, derived from components when not stated | The issuer states no EBITDA; the revolver covenant uses consolidated earnings before depreciation and amortization, interest and other debt costs, net and income tax expense as defined in an agreement not supplied | 10-Q_2026-09-30_tdw.htm.jsonl, page 14 | All | Gains on asset dispositions are 2.51% of FY2025 derived EBITDA; the covenant definition may differ by other income lines | Financial foundation; Fundamental credit | Use derived EBITDA; do not infer covenant headroom |
| Total debt | Carrying value, current plus long-term, net of issuance costs and discounts | Principal in the debt table | 10-Q_2026-09-30_tdw.htm.jsonl, page 13 | 2024-12-31, 2025-12-31, 2026-09-30 | Principal exceeds carrying value by 27,730 thousand at 2026-09-30 | Financial foundation; Fundamental credit | Carrying value for ratios; principal for the maturity ladder and stack |
| Cash | Cash and cash equivalents on the balance sheet | Cash, cash equivalents and restricted cash in the liquidity text | 10-Q_2026-09-30_tdw.htm.jsonl, page 2; 10-Q_2026-09-30_tdw.htm.jsonl, page 43 | 2025-12-31, 2026-09-30 | 4,110 thousand at 2026-09-30 and 2,807 thousand at 2025-12-31 | Financial foundation; Fundamental credit | Balance sheet cash for net debt |
| Operating cash flow | As revised in the later annual report | Original FY2024 figure of 273,849 thousand | 10-K_2024-12-31_tdw.htm.jsonl, page 105; 10-K_2025-12-31_tdw.htm.jsonl, page 102 | FY2024 | 8,623 thousand | Financial foundation | Revised 282,472 thousand used |
| Net debt | Debt less cash and cash equivalents, excluding lease liabilities carried on their own lines | A finance lease liability of 24,370 thousand sits in other current liabilities at 2025-12-31; the two vessels were bought in Q1 2026 | 10-Q_2026-09-30_tdw.htm.jsonl, page 23 | 2025-12-31 | 24,370 thousand excluded from FY2025 net debt | Financial foundation; Fundamental credit | Excluded from debt as the issuer presents it outside debt lines |
| Wilson debt | One figure per date and basis | About USD 261.0 million at 2025-09-30, about USD 231.0 million at 2026-06-30, 229,047 thousand face at closing, 224,506 thousand principal at 2026-09-30 and about USD 214.8 million recorded fair value | 10-K_2025-12-31_tdw.htm.jsonl, page 143; 10-Q_2026-06-30_tdw.htm.jsonl, page 19; 10-Q_2026-09-30_tdw.htm.jsonl, pages 7–8 | Q3 2026 | Different dates and bases, not errors | Financial foundation; Fundamental credit | Principal 224,506 thousand used for the stack; carrying value inside Total Debt |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and cover at FY2024 and FY2025 | Ready with Limitations | EBITDA derived; no adjusted EBITDA stated | Use as filing-based figures |
| Leverage and cover at 2026-09-30 | Ready with Limitations | One month of acquired earnings against all acquired debt; provisional purchase accounting | Refresh with the next quarterly report |
| Covenant headroom | Not Ready | Covenant EBITDA and net interest-bearing debt are defined in agreements not supplied | Obtain the revolving credit agreement |
| Pro forma net debt including the acquisition for 2025-12-31 | Not Ready | No source states it | None until a source states it |
| Liquidity | Ready with Limitations | Undrawn capacity after guarantees not stated | Obtain the credit agreement and closing report |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 9.125% Senior Notes due July 2030 | Senior notes | Not supplied: carrying value is not disclosed by instrument | 650,000 | 650,000 | Not applicable | Unsecured; guaranteed by the Guarantors | Senior unsecured | USD | 650,000 | Not applicable | 9.125% | fixed | Not applicable | Not applicable | Not applicable | 2030-07-15 | 0 | 10-Q_2026-09-30_tdw.htm.jsonl, page 13 |
| Revolving Credit Facility | Senior secured revolver | Not supplied: carrying value is not disclosed by instrument | 0 | 0 | 250,000 | Senior secured; DNB Bank ASA, New York Branch as facility agent and security trustee | Senior secured | USD | 0 | Not applicable | Term SOFR plus a margin of 250 to 350 basis points by net leverage | floating | Term SOFR | 250 to 350 | Not applicable | 2030-04-15 | 0 | 10-Q_2026-09-30_tdw.htm.jsonl, page 14; 10-Q_2026-09-30_tdw.htm.jsonl, page 43 |
| BNDES Vessel Construction Loans | Secured loan | Not supplied: carrying value is not disclosed by instrument | 167,691 | Not supplied: drawn amount not separately stated | Not supplied: commitment not stated | Secured by eleven vessels with collateral coverage of at least 130%; Tidewater Inc. guarantee | Secured | Not supplied: loan denomination not stated | 167,691 | Not applicable | 3.21% to 3.77% | fixed | Not applicable | Not applicable | Not applicable | December 2026 to December 2035 | Not supplied: monthly installments, yearly amounts not stated | 10-Q_2026-09-30_tdw.htm.jsonl, page 13; 10-Q_2026-09-30_tdw.htm.jsonl, page 15 |
| BNDES Vessel Conversion and Drydock Loans | Secured loan | Not supplied: carrying value is not disclosed by instrument | 34,828 | Not supplied: drawn amount not separately stated | Not supplied: commitment not stated | Secured by bank guarantees from various banks | Secured | Not supplied: loan denomination not stated | 34,828 | Not applicable | 2.4% or 3% | fixed | Not applicable | Not applicable | Not applicable | February 2027 to July 2035 | Not supplied: monthly installments, yearly amounts not stated | 10-Q_2026-09-30_tdw.htm.jsonl, page 13; 10-Q_2026-09-30_tdw.htm.jsonl, page 17 |
| Banco do Brasil Vessel Construction Loan | Secured loan | Not supplied: carrying value is not disclosed by instrument | 21,987 | Not supplied: drawn amount not separately stated | Not supplied: commitment not stated | Secured by four vessels and a bank guarantee of 20% of the balance; Tidewater Inc. guarantee | Secured | Not supplied: loan denomination not stated | 21,987 | Not applicable | 3.1% | fixed | Not applicable | Not applicable | Not applicable | 2030-12-18 | Not supplied: equal monthly installments, yearly amount not stated | 10-Q_2026-09-30_tdw.htm.jsonl, page 13; 10-Q_2026-09-30_tdw.htm.jsonl, page 18 |
| Vessel Facility Agreements | Secured term loans | Not supplied: carrying value is not disclosed by instrument | 15,484 | Not supplied: drawn amount not separately stated | Not supplied: commitment not stated | Secured by the vessels; guaranteed by Tidewater Inc. as parent guarantor; no financial covenants | Secured | Not supplied: the filing prints the balance in USD and the original size as EUR 24.9 million | 15,484 | Not applicable | 2.7% to 6.3% | fixed | Not applicable | Not applicable | Not applicable | Not supplied: ten facilities with semiannual installments, final dates not stated | Not supplied: ten equal semiannual installments per facility, yearly amount not stated | 10-Q_2026-09-30_tdw.htm.jsonl, page 13; 10-Q_2026-09-30_tdw.htm.jsonl, page 19 |
| Financing cost adjustment | Debt discount and issuance costs | -27,730 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -27,730 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_tdw.htm.jsonl, page 13 |

## Calculations

Amounts are USD thousand as printed unless a result says US$m; each result is worked from the printed inputs and shows its inputs.

| Calculation ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C01 | Gross debt at carrying value: current portion plus long-term debt | 2024-12-31: 65,386 + 571,710. 2025-12-31: 5,845 + 649,048. 2026-09-30: 58,694 + 803,566 | USD 637,096 thousand; USD 654,893 thousand; USD 862,260 thousand (USD 862.26 million at 2026-09-30) | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2 |
| C02 | Net debt: gross debt less cash and cash equivalents | 637,096 − 324,918; 654,893 − 578,761; 862,260 − 390,844 | USD 312,178 thousand; USD 76,132 thousand; USD 471,416 thousand | calculation C01 |
| C03 | EBITDA (Reported) derived: operating income plus depreciation and amortization | FY2025 282,596 + 262,339; FY2024 311,348 + 242,770; 9M 2026 171,845 + 207,738; 9M 2025 218,620 + 196,150; Q3 2026 50,333 + 74,707; Q3 2025 62,651 + 66,404 | 544,935; 554,118; 379,583; 414,770; 125,040; 129,055 | 10-K_2025-12-31_tdw.htm.jsonl, page 101; 10-Q_2026-09-30_tdw.htm.jsonl, pages 2–3 |
| C04 | Last twelve months to 2026-09-30: FY2025 + nine months 2026 − nine months 2025 | Revenue 1,352,786 + 1,028,925 − 1,015,988. EBITDA 544,935 + 379,583 − 414,770. Cash interest 47,810 + 62,908 − 47,234. Operating cash flow 379,108 + 161,443 − 226,148. Additions to properties and equipment 25,761 + 39,188 − 20,614. Drydock cash 98,575 + 87,898 − 84,722 | Revenue 1,365,723; EBITDA 509,748; cash interest 63,484; operating cash flow 314,403; additions 44,335; drydock cash 101,751 | calculation C03; 10-K_2025-12-31_tdw.htm.jsonl, pages 101–103; 10-Q_2026-09-30_tdw.htm.jsonl, pages 2–4 |
| C05 | Leverage and cover ratios (US$m inputs) | FY2024: 637.096 / 554.118; 312.178 / 554.118; 554.118 / 66.897. FY2025: 654.893 / 544.935; 76.132 / 544.935; 544.935 / 47.810. 2026-09-30: 862.260 / 509.748; 471.416 / 509.748; 509.748 / 63.484 | 1.15x, 0.56x, 8.28x; 1.20x, 0.14x, 11.40x; 1.69x, 0.92x, 8.03x | calculation C02; calculation C04 |
| C06 | Principal to carrying value | 2024-12-31: 647,887 − 10,791. 2025-12-31: 670,078 − 15,185. 2026-09-30: 889,990 − 27,730 | 637,096; 654,893; 862,260, equal to gross debt in each case | 10-K_2025-12-31_tdw.htm.jsonl, pages 118–119; 10-Q_2026-09-30_tdw.htm.jsonl, page 13 |
| C07 | Total liabilities: current liabilities plus long-term debt plus other liabilities, checked against total assets less total equity | 2025-12-31: 315,237 + 649,048 + 61,372 and 2,386,911 − 1,361,254. 2024-12-31: 331,613 + 571,710 + 60,396 and 2,074,904 − 1,111,185. 2026-09-30: 352,904 + 803,566 + 115,537 and 2,673,048 − 1,401,041. FY2024 operating cash flow 282,472 − 273,849 | 1,025,657; 963,719; 1,272,007, each equal on both routes; revision of 8,623 | 10-K_2025-12-31_tdw.htm.jsonl, page 100; 10-Q_2026-09-30_tdw.htm.jsonl, page 2; 10-K_2024-12-31_tdw.htm.jsonl, page 105 |
| C08 | Free cash flow and liquidity | Nine months 2026: 161,443 − 39,188. Nine months 2025: 226,148 − 20,614. FY2025: 379,108 − 25,761. FY2024: 282,472 − 27,580. LTM: 314,403 − 44,335. Liquidity: 324,918 + 25,000; 578,761 + 250,000; 390,844 + 250,000 | 122,255; 205,534; 353,347; 254,892; 270,068. Liquidity 349,918; 828,761; 640,844 | calculation C04; 10-Q_2026-09-30_tdw.htm.jsonl, pages 3–4; 10-Q_2026-09-30_tdw.htm.jsonl, page 43 |
| C09 | Debt stack cumulative principal over last-twelve-months EBITDA 509,748 | 0; 15,484; 15,484 + 167,691; + 34,828; + 21,987; + 650,000 | Cumulative 0; 15,484; 183,175; 218,003; 239,990; 889,990, giving 0.00x, 0.03x, 0.36x, 0.43x, 0.47x, 1.75x | 10-Q_2026-09-30_tdw.htm.jsonl, page 13; calculation C04 |
| C10 | Wilson loans principal at 2026-09-30 | 167,691 + 34,828 + 21,987 | USD 224,506 thousand, consistent with the issuer's statement of about USD 224.5 million | 10-Q_2026-09-30_tdw.htm.jsonl, page 13; 10-Q_2026-09-30_tdw.htm.jsonl, page 43 |
| C11 | Change in nine-month EBITDA | (379,583 − 414,770) / 414,770 | −8.48% | calculation C03 |
| C12 | Net debt over EBITDA less cash drydock spending, and EBITDA margin | LTM EBITDA 509,748 − drydock cash 101,751 = 407,997; 471,416 / 407,997. Margins: 554,118 / 1,345,835; 544,935 / 1,352,786; 509,748 / 1,365,723 | 1.16x; margins 41.17%, 40.28%, 37.32% | calculation C04 |
| C13 | Principal maturing through 2029 | 15,489 + 51,280 + 38,809 + 36,129; with 2030 principal of 682,474 and the thereafter line of 65,809 | USD 141,707 thousand; total with 2030 and thereafter 889,990 | 10-Q_2026-09-30_tdw.htm.jsonl, page 19 |
| C14 | Tie of the maturity ladder to principal | 15.489 + 51.280 + 38.809 + 36.129 + 682.474 + 65.809 (US$m) | 889.990, equal to contractual principal | 10-Q_2026-09-30_tdw.htm.jsonl, page 13; 10-Q_2026-09-30_tdw.htm.jsonl, page 19 |
| C15 | Pro forma revenue difference, nine months 2026 | 1,169,676 − 1,028,925 | USD 140,751 thousand | 10-Q_2026-09-30_tdw.htm.jsonl, page 2; 10-Q_2026-09-30_tdw.htm.jsonl, page 9 |

## Gaps

- Earnings before depreciation and amortization, interest and tax is not stated by the issuer in any of the five documents, so EBITDA is derived as operating income plus depreciation and amortization for every period; this restricts every leverage and cover ratio to a derived measure, severity Medium, and the action is to obtain the covenant definition from the revolving credit agreement.
- No adjusted EBITDA or add-back list is stated, so the adjusted ratios and the EBITDA bridge are not supplied; severity Low, and the action is none unless the issuer publishes one.
- Loss on early extinguishment of debt is printed as a dash for FY2024, the nine months and the third quarter of 2026; the dash cells in the cash flow statement for proceeds from sale of notes, acquisitions, issuance of long-term debt, finance lease payments and the debt extinguishment premium, and the restricted cash line on the balance sheet, are likewise carried as not supplied rather than zero; severity Low, and the action is none.
- Wilson Companies results are in the statements from 2026-08-31 only, and their purchase accounting is provisional; the last-twelve-months ratios therefore mix all acquired debt with one month of acquired earnings, severity High, and the action is to refresh with the next quarterly report and the final purchase accounting.
- No pro forma net debt for 2025-12-31 including the acquisition is stated, so the Post-balance-sheet adjustments row for the acquisition carries no figure; severity Medium, and the action is to use the 2026-09-30 row.
- Whether the termination cost of the replacement guarantees was paid after 2026-09-30 is not stated, so the net debt effect of that event is not established; severity Low, and the action is to read the next quarterly report.
- Undrawn revolver capacity is the commitment less drawings; whether guarantees or letters of credit reduced availability at 2026-09-30 is not stated; severity Medium, and the action is to obtain the credit agreement and the closing report.
- Cash flows are printed only year to date, so quarterly cash flow figures and the fourth quarter of 2025 cash flow are not supplied and the third quarter of 2026 is not derived here; severity Low, and the action is to derive them from the year-to-date figures if needed.
- The 2025 interim reports as first filed were not supplied, so the revision of the 2025 interim cash flows cannot be tested and the nine-month 2025 operating cash flow is taken as printed in the 2026 report; severity Low, and the action is to obtain them if nine-month comparisons matter.
- The denomination of the acquired Brazilian loans and the yearly amortization of each loan are not stated, so the instrument register carries those cells as not supplied; severity Low, and the action is to read the loan agreements.
- Legal ranking among the secured borrowings is not stated; the debt stack groups them at one rank and names this limitation; severity Medium, and the action is to obtain the intercreditor and security documents.
- The sources are page text, so layout and footnote marks were read as text and not checked visually against the original filings; severity Low, and the action is to check key figures against the filings before committee use.

## Next module

The orchestrator selects the next module.
