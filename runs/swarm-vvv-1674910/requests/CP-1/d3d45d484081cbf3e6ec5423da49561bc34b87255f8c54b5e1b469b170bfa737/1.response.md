# Financial foundation: Valvoline Inc (vvv-1674910), as of 2026-11-18

## Request

Financial foundation for Valvoline Inc (issuer vvv-1674910), as of 2026-11-18, on the credit snapshot pathway. Scope: statements, debt, cash, leverage, coverage and liquidity from the five supplied filings, with every gap stated.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-09-30_vvv-20240930.htm.jsonl | Annual report on Form 10-K for the year ended September 30, 2024 | 2024-11-22 (date signed; filing date not stated) | 24690964c18f2016719f4c7f7a46038637a00e91394e9c843c24fae37d5f50cc | Fiscal 2024 covenant summary, debt maturity table at 2024-09-30, undrawn revolver capacity at 2024-09-30, store count and system-wide sales |
| 10-K_2025-09-30_vvv-20250930.htm.jsonl | Annual report on Form 10-K for the year ended September 30, 2025 | 2025-11-21 (date signed; filing date not stated) | b885defac1ff52441e2e04ee4701c7fcdae244ad16d0fbad6ac620fc6c84dd6d | Fiscal 2024 and fiscal 2025 statements, EBITDA reconciliation, cash interest paid, debt and leases, maturity table at 2025-09-30, subsequent events |
| 10-Q_2025-12-31_vvv-20251231.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended December 31, 2025 | 2026-02-04 (date signed; filing date not stated) | a98fe86113b9a801f93408e3fac808cb3311459a0eb335f86b700a37071004c6 | Term Loan B terms at 2025-12-31 and store-sale gain as first reported |
| 10-Q_2026-03-31_vvv-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 (date signed; filing date not stated) | dbbb3a3f2ca063cbd68b6c914b0b96c7cbb76fca745940506fb80508df967e2b | Debt and revolver capacity at 2026-03-31 and the leverage target wording |
| 10-Q_2026-06-30_vvv-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-05 (date signed; filing date not stated) | 17f9c0c8aa70e246edd10d76211ff714f7b95c7bbe84af1d2f45ed0381b5daca | Nine-month and third-quarter statements, balance sheet at 2026-06-30, debt note, EBITDA reconciliation, store measures, Breeze Autocare acquisition |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 3c1213c3887eb0aa5a9baf90f63cbd23435441fe6d32de76ea76913ccb897442 | Source coverage, missing documents and the differing figures between reports |

## Findings

### Bottom line

Net debt rose to USD 1,517.8 million at June 30, 2026 after the Breeze Autocare acquisition, equal to 3.61x last-twelve-months reported EBITDA and 2.79x Adjusted EBITDA against 2.11x and 2.19x at fiscal 2025 year-end, above management's 1.5x to 2.5x target on the adjusted measure.
Basis: calculation K3; calculation K7; calculation K8; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 12, 26, 30

Liquidity of USD 554.3 million and no sizeable maturity before fiscal 2028 on the last printed ladder cushion this, and nine-month free cash flow of USD 112.3 million supports repayment. Cash interest cover cannot be updated beyond 8.66x at fiscal 2025 year-end because the quarterly reports print no interest paid, and the ladder predates the Term Loan B.
Basis: calculation K13; calculation K16; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 97; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 12

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-09-30 | 2.37 | 2.22 | x | Reported EBITDA from continuing operations; carrying-value debt; fiscal year-end |
| FY2025 / 2025-09-30 | 2.21 | 2.11 | x | Reported EBITDA from continuing operations; carrying-value debt; fiscal year-end, before the Breeze Autocare acquisition |
| 2026-06-30 | 3.81 | 3.61 | x | Last-twelve-months reported EBITDA (calculation K7), which carries the USD 57.9 million loss on the forced store sale and excludes Breeze Autocare before 2025-12-01; carrying-value debt |

The 2026-06-30 row is on last-twelve-months EBITDA that includes Breeze Autocare only from 2025-12-01, so it overstates leverage against a full-year basis.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-09-30 | 5.90 | x | Reported EBITDA over interest paid in the cash flow statement; fiscal year |
| FY2025 / 2025-09-30 | 8.66 | x | Reported EBITDA over interest paid in the cash flow statement; fiscal year, before the Term Loan B |
| 2026-06-30 | Not supplied: the interim cash flow statements print no interest paid | x | No last-twelve-months cash interest can be built, so the ratio is not calculable; an expense-basis cover is in the calculation register |

Cash interest paid is available only for fiscal years, so the series stops at fiscal 2025 year-end and does not show the effect of the Term Loan B.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-09-30 | 68.3 | 346.8 | US$m | Cash and cash equivalents; undrawn revolver capacity after USD 125.0 million drawn and USD 3.2 million of letters of credit; total 415.1 (calculation K16) |
| FY2025 / 2025-09-30 | 51.6 | 341.6 | US$m | Cash and cash equivalents; undrawn revolver capacity after USD 130.0 million drawn and USD 3.4 million of letters of credit; total 393.2 (calculation K16) |
| 2026-06-30 | 84.2 | 470.1 | US$m | Cash and cash equivalents; undrawn capacity of the USD 475.0 million revolver after USD 4.9 million of letters of credit and nothing drawn; total 554.3 (calculation K16) |

The revolver's maturity date is not printed in the quarterly reports, so the period over which this capacity is available is not established.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 23.8 | US$m | Scheduled installments of the Term Loan as printed at 2025-09-30; the fiscal year has since ended |
| FY2027 | 23.8 | US$m | Scheduled installments of the Term Loan as printed at 2025-09-30 |
| FY2028 | 498.0 | US$m | Printed maturity for fiscal 2028 at 2025-09-30; it equals the Term Loan balance after two years of installments, 368.0, plus the USD 130.0 million Revolver draw (calculation K10, Analyst Judgement on the composition); the Revolver repayment and USD 50.0 million Term Loan prepayment since then are not reflected |
| FY2029 | 0.0 | US$m | Printed as a dash; the table total of 1,080.6 equals the other rows, so the dash is nil (calculation K10) |
| FY2030 | 0.0 | US$m | Printed as a dash; the table total of 1,080.6 equals the other rows, so the dash is nil (calculation K10) |
| FY2031 | 535.0 | US$m | Printed as thereafter; its only instrument is the 2031 Notes, due in 2031, so it is shown at FY2031 as Analyst Judgement because the maturity day is not stated |

The ladder is the contractual principal at 2025-09-30, before the Term Loan B, so it is not the wall at 2026-06-30.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-06-30 |
|---|---|---|---|
| Net revenues (US$m) | 1,619.0 | 1,710.3 | 1,964.0 |
| EBITDA, reported (US$m) | 461.4 | 485.7 | 420.5 |
| EBITDA, issuer-adjusted (US$m) | 442.6 | 466.8 | 543.5 |
| Adjusted EBITDA margin (%) | 27.34 | 27.29 | 27.67 |
| Operating cash flow, continuing (US$m) | 282.9 | 307.1 | 411.7 |
| Additions to property, plant and equipment (US$m) | 224.4 | 259.2 | 271.2 |
| Free cash flow (US$m) | 58.5 | 47.9 | 140.5 |
| Total debt, carrying value (US$m) | 1,093.8 | 1,074.0 | 1,602.0 |
| Cash and cash equivalents (US$m) | 68.3 | 51.6 | 84.2 |
| Net debt (US$m) | 1,025.5 | 1,022.4 | 1,517.8 |
| Total debt / EBITDA, reported (x) | 2.37 | 2.21 | 3.81 |
| Net debt / EBITDA, reported (x) | 2.22 | 2.11 | 3.61 |
| Total debt / EBITDA, adjusted (x) | 2.47 | 2.30 | 2.95 |
| Net debt / EBITDA, adjusted (x) | 2.32 | 2.19 | 2.79 |
| EBITDA / cash interest, reported (x) | 5.90 | 8.66 | Not supplied: no interim cash interest |
| Adjusted EBITDA / cash interest (x) | 5.66 | 8.32 | Not supplied: no interim cash interest |

Last-twelve-months figures are constructed from fiscal 2025 and the nine-month periods, and ratios use carrying-value debt.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 51, 68–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–4, 26; calculation K3; calculation K7; calculation K8; calculation K9; calculation K13; calculation K15

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-09-30 | 1,093.8 | 68.3 | 1,025.5 | US$m | Reported; gross debt is carrying value of the 2031 Notes, Term Loan and Revolver net of USD 5.6 million of issuance costs and discounts, principal 1,099.4; leases are carried outside the debt lines |
| FY2025 / 2025-09-30 | 1,074.0 | 51.6 | 1,022.4 | US$m | Reported; gross debt is carrying value of the 2031 Notes, Term Loan and Revolver net of USD 6.6 million of issuance costs and discounts, principal 1,080.6; finance leases of 244.5 and operating leases are carried outside the debt lines; before the Breeze Autocare acquisition |
| 2026-06-30 | 1,602.0 | 84.2 | 1,517.8 | US$m | Reported interim balance sheet; gross debt is carrying value of the 2031 Notes, Term Loan A, Term Loan B and Revolver net of USD 19.0 million of issuance costs and discounts, principal 1,621.0 (calculation K11); finance and operating leases are carried outside the debt lines; no pro forma adjustment |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-09-30 | 1,080.6 | -6.6 | 1,074.0 | US$m | Principal is the sum of the maturity ladder printed at 2025-09-30 (calculation K10); the reconciling item is the debt issuance costs and discounts of 6.6; the ladder is the latest printed, so no reconciliation is drawn at 2026-06-30, where principal is 1,621.0 and the difference to carrying value is 19.0 (calculation K11) |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Breeze Autocare acquisition | 2025-12-01 | 632.8 | 1,655.2 | 3.41 | US$m | Cash consideration of 637.4 less cash acquired of 4.6 (calculation K17), funded by the Term Loan B, which raises gross debt and cash equally; Year-end FY2025 net debt of 1,022.4 (calculation K2) and reported EBITDA of 485.7; the EBITDA of Breeze Autocare is not in the denominator; source: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 8 |
| Required divestiture of 45 Breeze stores | 2025-12-01 | -32.1 | 1,623.1 | 3.34 | US$m | Sale proceeds of 32.1 against a carrying amount of 90.0; cumulative with the row above; source: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 9–11 |
| Acquisition of 21 other service center stores | Not supplied: the source states the nine months to 2026-06-30 only | 19.7 | 1,642.8 | 3.38 | US$m | Aggregate purchase price of 19.7 including goodwill of 15.3; cumulative with the rows above; source: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 10 |
| Sale of 10 company-operated stores to a franchisee | Not supplied: the source states October 2025 only | Not supplied: the sale proceeds are not stated | Not supplied: the proceeds are not stated, and the rows above exclude this sale | Not supplied: the proceeds are not stated | US$m | The 10-K states the sale was completed in October 2025 and the gain was 14.3 in the nine months to 2026-06-30; no cash amount is given; source: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 108 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-09-30 | 1,619.0 | 442.6 | US$m | Twelve months; issuer-adjusted EBITDA from continuing operations |
| FY2025 / 2025-09-30 | 1,710.3 | 466.8 | US$m | Twelve months; issuer-adjusted EBITDA from continuing operations |
| 2026-06-30 | 1,964.0 | 543.5 | US$m | Twelve months to 2026-06-30, constructed from fiscal 2025 plus nine months to 2026-06-30 less nine months to 2025-06-30 (calculations K8 and K9); Breeze Autocare is included from 2025-12-01 only and the fiscal 2026 key items are defined slightly differently |

The last row is constructed, not reported, and mixes two definitions of issuer-adjusted EBITDA.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolver | 1 | Yes | 0.0 | 2.58 | US$m | Drawn amount nil at 2026-06-30 against a USD 475.0 million commitment; secured by a first-priority security interest in substantially all personal property and certain real property under the Senior Credit Agreement, guaranteed by existing and future subsidiaries other than certain immaterial ones; cumulative leverage is principal of the secured facilities (1,086.0) over last-twelve-months reported EBITDA (420.5) and is the same for the rank; source: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 97; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 12 |
| Term Loan A | 1 | Yes | 347.8 | 2.58 | US$m | Principal outstanding at 2026-06-30; same security and guarantors as the Revolver; equal rank shares the cumulative figure of 1,086.0 over 420.5 |
| Term Loan B | 1 | Yes | 738.2 | 2.58 | US$m | Principal outstanding at 2026-06-30; added by amendment to the Senior Credit Agreement, so its security is taken from that agreement as Analyst Judgement because no filing after the amendment restates it; same guarantors and equal rank |
| 2031 Notes | 2 | No | 535.0 | 3.85 | US$m | Principal of the 3.625% senior unsecured notes due 2031 (carrying value 531.5); guaranteed by the subsidiaries that guarantee the Senior Credit Agreement; cumulative through the notes is 1,621.0 over 420.5 |

Cumulative leverage uses principal and last-twelve-months reported EBITDA, so it is not the carrying-value ratio in the leverage table, and the equal ranking of the three secured facilities is taken from their sharing one security package.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2025 | 485.7 | US$m | Opening: EBITDA from continuing operations as reported by the issuer (income from continuing operations plus income tax, net interest and other financing expenses, and depreciation and amortization); source: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 |
| Net pension and other postretirement plan expenses (income) | 23.6 | US$m | Add-back; classification other stated (non-service pension activity including a USD 26.6 million remeasurement loss); realisation not stated; source: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 |
| Net legacy and separation-related expenses (income) | 1.4 | US$m | Add-back; classification other stated (legacy businesses and separation); realisation not stated; source: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 |
| Information technology costs | 11.5 | US$m | Add-back; classification other stated (information technology transitions and control remediation); realisation not stated; source: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 |
| Investment and divestiture-related (income) costs | -55.4 | US$m | Deduction of net gains; classification transaction costs and gains on disposal as stated; realisation not stated; source: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 |
| EBITDA (Adjusted), FY2025 | 466.8 | US$m | Closing: issuer Adjusted EBITDA from continuing operations; source: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 |

This is the fiscal 2025 bridge; the nine months to 2026-06-30 add 68.6 of investment and divestiture-related costs (calculation K20), which is a different composition.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 16 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 6 |
| Fields present | 22 |
| Fields total | 24 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 0 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2023-10-01 | 2024-09-30 |
| FY2025 | 2024-10-01 | 2025-09-30 |
| 9M 2025 | 2024-10-01 | 2025-06-30 |
| 9M 2026 | 2025-10-01 | 2026-06-30 |
| Q3 2025 | 2025-04-01 | 2025-06-30 |
| Q3 2026 | 2026-04-01 | 2026-06-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-09-30_vvv-20240930.htm.jsonl | Annual report on Form 10-K | Fiscal 2024, with fiscal 2023 and 2022 comparatives | USD | millions | Valvoline Inc and consolidated subsidiaries, continuing operations | US GAAP | Tier 1 | Covenant summary and maturity table at 2024-09-30; undrawn revolver capacity at 2024-09-30; store count and system-wide sales; comparison of fiscal 2024 comparatives | Audited statements; the auditor's opinion on internal control was adverse; fiscal 2024 figures are taken from the later annual report where it restates presentation |
| 10-K_2025-09-30_vvv-20250930.htm.jsonl | Annual report on Form 10-K | Fiscal 2025, with fiscal 2024 and 2023 comparatives | USD | millions | Valvoline Inc and consolidated subsidiaries, continuing operations | US GAAP | Tier 1 | Fiscal 2024 and fiscal 2025 statements, EBITDA reconciliation, interest paid, leases, maturity table, subsequent events | Audited statements; the auditor's opinion on internal control was adverse; written before the Breeze Autocare acquisition closed |
| 10-Q_2025-12-31_vvv-20251231.htm.jsonl | Quarterly report on Form 10-Q | Three months to 2025-12-31 (first quarter of fiscal 2026) | USD | millions | Valvoline Inc and consolidated subsidiaries, continuing operations | US GAAP | Tier 2b | Term Loan B terms; first report of the store-sale gain | Unaudited with no auditor review stated; superseded by later reports for balances |
| 10-Q_2026-03-31_vvv-20260331.htm.jsonl | Quarterly report on Form 10-Q | Three and six months to 2026-03-31 (second quarter of fiscal 2026) | USD | millions | Valvoline Inc and consolidated subsidiaries, continuing operations | US GAAP | Tier 2b | Debt and revolver capacity at 2026-03-31; leverage target wording | Unaudited with no auditor review stated; superseded by the June 2026 report for balances |
| 10-Q_2026-06-30_vvv-20260630.htm.jsonl | Quarterly report on Form 10-Q | Three and nine months to 2026-06-30 (third quarter of fiscal 2026), with prior-year comparatives | USD | millions | Valvoline Inc and consolidated subsidiaries, continuing operations | US GAAP | Tier 2b | Nine-month and quarter statements, balance sheet at 2026-06-30, debt note, EBITDA reconciliation, store measures | Unaudited with no auditor review stated; disclosure controls not effective because of a continuing material weakness |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Valvoline Inc | Issuer and registrant; the borrower under the Senior Credit Agreement is not named separately and existing and future subsidiaries other than certain immaterial ones guarantee the Senior Credit Agreement and the Senior Notes | September 30 | USD | millions | Valvoline Inc and consolidated subsidiaries, continuing operations; the former Global Products business, sold on 2023-03-01, is discontinued operations; franchisees are independent and not consolidated; one reportable segment | US GAAP | FY2024 and FY2025 (audited); Q3 2025 and Q3 2026; 9M 2025 and 9M 2026 (unaudited); balance sheets at 2024-09-30, 2025-09-30 and 2026-06-30; the quarterly reports of 2025-12-31 and 2026-03-31 supply debt and capacity balances only |

Events after the fiscal 2025 balance sheet date are dated and kept out of period figures: the sale of 10 stores to a franchisee in October 2025, the closing of the Breeze Autocare acquisition and the Term Loan B on December 1, 2025, the immediate sale of 45 acquired stores on December 1, 2025, and the Term Loan B repricing on June 30, 2026. The June 2026 quarterly report prints no event dated after June 30, 2026.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 108–109; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 8–12

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Fiscal 2024 comparatives taken from the fiscal 2025 annual report | 10-K_2025-09-30_vvv-20250930.htm.jsonl | Presentation reclassification, no change in totals | Acquisitions of businesses 52.7; other investing activities (4.1); other financing activities (20.7) | Acquisitions, net of cash acquired 52.7; notes receivable issued 13.6 and repaid 9.7; other investing (0.2); finance lease payments 12.0; other financing 8.7 | The later report presents finer lines; operating, investing and financing totals and closing cash are unchanged | FY2024 |
| Total Liabilities derived as total current plus total noncurrent liabilities | 10-Q_2026-06-30_vvv-20260630.htm.jsonl | Derived subtotal (calculation K4) | Not printed | 2,253.1 at FY2024; 2,331.9 at FY2025; 3,064.9 at 2026-06-30 | The balance sheet prints no total liabilities line; the identity with equity holds exactly | FY2024; FY2025; 9M 2026 |
| Net Cash from Operating Activities is the total including discontinued operations | 10-K_2025-09-30_vvv-20250930.htm.jsonl | Presentation choice | Continuing operations 282.9; 307.1; 180.0; 284.6 | Total 265.1; 297.2; 175.3; 284.6 | The total reconciles to the net change in cash; free cash flow uses the continuing figure as the issuer does | FY2024; FY2025; 9M 2025; 9M 2026 |
| Last-twelve-months construction to 2026-06-30 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl | Derived period (calculations K7 to K9, K14, K15) | Fiscal 2025, nine months 2026 and nine months 2025 as printed | 420.5 reported EBITDA; 543.5 Adjusted EBITDA; 1,964.0 net revenues | Latest full year plus current stub less prior-year stub; every component is printed | LTM 2026-06-30 |
| Debt carrying values not disclosed by instrument | 10-Q_2026-06-30_vvv-20260630.htm.jsonl | Allocation limited to disclosure (calculation K12) | Issuance costs and discounts (19.0) in total; 2031 Notes (3.5) | Financing cost adjustment (15.5) beside principal for the Term Loan A and Term Loan B | Only the 2031 Notes' carrying value is printed, so the rest is one adjustment row in the debt instruments register | 2026-06-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Net revenues | 1,619.0 | 1,710.3 | 1,256.5 | 1,510.2 | 439.0 | 544.6 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Cost of sales | 1,000.2 | 1,051.8 | 775.5 | 935.8 | 261.4 | 329.7 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Gross profit | 618.8 | 658.5 | 481.0 | 574.4 | 177.6 | 214.9 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Selling, general and administrative expenses | 305.1 | 349.9 | 246.8 | 308.5 | 82.8 | 103.0 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Net legacy and separation-related expenses (income) | -0.7 | 1.4 | 1.6 | 6.2 | 0.4 | 0.1 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Other (income) loss, net | -52.8 | -82.7 | -72.8 | 43.2 | -0.3 | -0.4 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Operating income | 367.2 | 389.9 | 305.4 | 216.5 | 94.7 | 112.2 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Net pension and other postretirement plan expenses (income) | 11.7 | 23.6 | -2.7 | -3.7 | -0.9 | -1.3 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Net interest and other financing expenses | 71.9 | 74.0 | 53.0 | 81.1 | 18.6 | 27.9 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Income before income taxes | 283.6 | 292.3 | 255.1 | 139.1 | 77.0 | 85.6 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Income tax expense | 69.1 | 77.5 | 65.9 | 61.0 | 20.0 | 20.6 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Income from continuing operations | 214.5 | 214.8 | 189.2 | 78.1 | 57.0 | 65.0 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| (Loss) income from discontinued operations, net of tax | -3.0 | -4.1 | -3.5 | -1.6 | -0.5 | -0.5 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Net income | 211.5 | 210.7 | 185.7 | 76.5 | 56.5 | 64.5 | USD millions | Reported; expense positive, income negative as the issuer's label states; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| Depreciation and amortization | 105.9 | 119.4 | 86.6 | 109.3 | 30.2 | 38.2 | USD millions | Reported in the EBITDA reconciliation; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 26 |
| EBITDA (Reported) | 461.4 | 485.7 | 394.7 | 329.5 | 125.8 | 151.7 | USD millions | Reported; issuer EBITDA from continuing operations (income from continuing operations plus income tax, net interest and other financing expenses and depreciation and amortization); Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 26 |
| EBITDA (Adjusted) | 442.6 | 466.8 | 336.7 | 413.4 | 129.5 | 162.4 | USD millions | Reported; issuer Adjusted EBITDA from continuing operations, EBITDA adjusted for key items (pension plan activity, legacy and separation costs, information technology and control remediation costs, investment and divestiture activity); the 9M 2026 and Q3 2026 definitions add amortization of Breeze acquired intangibles; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 26 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 211.5 | 210.7 | 185.7 | 76.5 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Loss (income) from discontinued operations | 3.0 | 4.1 | 3.5 | 1.6 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Loss on extinguishment of debt | 5.1 | Not supplied: printed as a dash | Not supplied: not printed in the interim statement | Not supplied: not printed in the interim statement | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| (Gain) loss on sale of operations | -41.8 | -71.1 | -71.6 | 43.6 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Depreciation and amortization | 105.9 | 119.4 | 86.6 | 109.3 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Deferred income taxes | 23.5 | 38.3 | Not supplied: not printed in the interim statement | Not supplied: not printed in the interim statement | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Loss (gain) on pension and other postretirement plan remeasurements | -2.4 | 26.6 | Not supplied: not printed in the interim statement | Not supplied: not printed in the interim statement | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Stock-based compensation expense | 12.0 | 10.5 | 7.4 | 9.3 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Other, net | -0.1 | 3.6 | 1.5 | 6.1 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Receivables | -0.9 | -3.1 | -0.7 | 0.6 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Inventories | -7.7 | -5.4 | -3.8 | -4.3 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Payables and accrued liabilities | -6.4 | 3.3 | -28.4 | -0.7 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Other assets and liabilities | -18.8 | -29.8 | -0.2 | 42.6 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Operating cash flows from continuing operations | 282.9 | 307.1 | 180.0 | 284.6 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Operating cash flows from discontinued operations | -17.8 | -9.9 | -4.7 | Not supplied: printed as a dash | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | 265.1 | 297.2 | 175.3 | 284.6 | USD millions | Reported total including discontinued operations; an outflow is negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Additions to property, plant and equipment | -224.4 | -259.2 | -160.3 | -172.3 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Acquisitions, net of cash acquired | -52.7 | -65.0 | -32.1 | -652.5 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Proceeds from sale of operations, net of cash disposed | 71.5 | 121.0 | 121.0 | 63.6 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Issuances of notes receivable | -13.6 | -24.2 | -17.3 | -16.3 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Repayments of notes receivable | 9.7 | 21.2 | 11.7 | 17.7 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Purchases of investments | -3.5 | -4.5 | Not supplied: not printed in the interim statement | Not supplied: not printed in the interim statement | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Proceeds from investments | 350.0 | 6.0 | Not supplied: not printed in the interim statement | Not supplied: not printed in the interim statement | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Other investing activities, net | -0.2 | 3.6 | 5.1 | -1.5 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | 136.8 | -201.1 | -71.9 | -761.3 | USD millions | Reported total including discontinued operations; an outflow is negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Proceeds from borrowings | 200.0 | 85.0 | 85.0 | 755.0 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Payments of debt issuance costs and discounts | Not supplied: not printed separately in the annual statement | Not supplied: not printed separately in the annual statement | -2.0 | -14.5 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Repayments on borrowings | -698.8 | -103.8 | -97.8 | -214.7 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Repurchases of common stock, including excise taxes | -226.8 | -76.8 | -76.8 | Not supplied: printed as a dash | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Payment of finance lease obligations | -12.0 | -12.2 | Not supplied: included in other financing activities in the interim statement | Not supplied: included in other financing activities in the interim statement | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Other financing activities, net | -8.7 | -5.1 | -12.0 | -16.3 | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | -746.3 | -112.9 | -103.6 | 509.5 | USD millions | Reported total including discontinued operations; an outflow is negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| FX Effect on Cash | Not supplied: printed as a dash | -0.3 | -0.2 | -0.2 | USD millions | Reported; fiscal 2024 prints a dash | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Net Cash Change | -344.4 | -17.1 | -0.4 | 32.6 | USD millions | Reported net change in cash, cash equivalents and restricted cash; equals operating plus investing plus financing plus the FX effect | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Opening Cash | 413.1 | 68.7 | 68.7 | 51.6 | USD millions | Cash, cash equivalents and restricted cash, which exceeds the balance sheet cash at 2024-09-30 by 0.4 of restricted cash | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Closing Cash | 68.7 | 51.6 | 68.3 | 84.2 | USD millions | Cash, cash equivalents and restricted cash, which exceeds the balance sheet cash at 2024-09-30 by 0.4 of restricted cash | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |
| Cash Interest Paid | 78.2 | 56.1 | Not supplied: the interim cash flow statement prints no interest paid | Not supplied: the interim cash flow statement prints no interest paid | USD millions | Supplemental disclosure of interest paid, positive amount; interim statements print none | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 70 |
| Income taxes paid | 31.3 | 35.8 | Not supplied: not printed in the interim statement | Not supplied: not printed in the interim statement | USD millions | Reported; outflow negative; Tier 1 for fiscal years, Tier 2b for interim columns | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 68.3 | 51.6 | 84.2 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Receivables, net | 86.4 | 89.6 | 102.8 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Inventories, net | 39.7 | 42.6 | 50.4 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Prepaid expenses and other current assets | 61.0 | 59.9 | 47.0 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Total current assets | 255.4 | 243.7 | 284.4 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Property, plant and equipment, net | 958.7 | 1,134.6 | 1,280.7 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Operating lease assets | 298.6 | 331.8 | 401.4 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Goodwill and intangibles, net | 705.6 | 740.5 | 1,283.3 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Other noncurrent assets | 220.4 | 219.8 | 231.8 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Total noncurrent assets | 2,183.3 | 2,426.7 | 3,197.2 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Current portion of long-term debt | 23.8 | 23.8 | 31.1 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Trade and other payables | 117.4 | 118.9 | 119.8 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Accrued expenses and other liabilities | 212.7 | 204.7 | 254.5 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Total current liabilities | 353.9 | 347.4 | 405.4 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Long-term debt | 1,070.0 | 1,050.2 | 1,570.9 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Employee benefit obligations | 176.2 | 187.5 | 178.9 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Operating lease liabilities | 279.7 | 315.3 | 377.3 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Other noncurrent liabilities | 373.3 | 431.5 | 532.4 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Total noncurrent liabilities | 1,899.2 | 1,984.5 | 2,659.5 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Common stock | 1.3 | 1.3 | 1.3 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Paid-in capital | 51.2 | 58.4 | 63.7 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Retained earnings | 123.2 | 273.6 | 350.1 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Accumulated other comprehensive income | 9.9 | 5.2 | 1.6 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Stockholders' equity | 185.6 | 338.5 | 416.7 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Total liabilities and stockholders' equity | 2,438.7 | 2,670.4 | 3,481.6 | USD millions | Reported; Tier 1 at fiscal year-ends, Tier 2b at 2026-06-30 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| Total Assets | 2,438.7 | 2,670.4 | 3,481.6 | USD millions | Reported total assets | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 3 |
| Total Liabilities | 2,253.1 | 2,331.9 | 3,064.9 | USD millions | Calculated as total current plus total noncurrent liabilities (calculation K4); the statement prints no total | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 3 |
| Total Equity | 185.6 | 338.5 | 416.7 | USD millions | Reported stockholders' equity; no temporary equity | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 3 |
| Total Debt | 1,093.8 | 1,074.0 | 1,602.0 | USD millions | Carrying value: current portion plus long-term debt, net of issuance costs and discounts (calculation K5); finance and operating leases are outside it | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 3 |
| Cash & Equivalents | 68.3 | 51.6 | 84.2 | USD millions | Reported cash and cash equivalents; restricted cash is outside it | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2031 Notes | Senior notes | 531.5 | 535.0 | 535.0 | Not applicable | Unsecured | Senior unsecured, guaranteed by the subsidiaries that guarantee the Senior Credit Agreement | USD | 531.5 | Not applicable | 3.625% | Fixed | Not applicable | Not applicable | Not applicable | 2031; the day is not stated | 0, a bullet with no scheduled repayment before maturity | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 95, 97; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 7, 12 |
| Term Loan A | Term loan under the Senior Credit Agreement | Not supplied: the filing prints no carrying value for this loan alone | 347.8 | 347.8 | Original five-year facility of 475.0 | First-priority security interest in substantially all personal property and certain real property of Valvoline and the guarantors | First-priority lien as stated; priority against the Term Loan B is not separately stated | USD | 347.8 | Not applicable | Not supplied: the margin in force at 2026-06-30 is not stated; the grid is SOFR plus 1.375% to 2.250% on the net leverage ratio | Floating | SOFR | Not supplied: the margin in force at 2026-06-30 is not stated | Not supplied: a floor is not stated | Not supplied: a five-year facility; the maturity date is not stated, and the maturity table of 2025-09-30 places the balance in fiscal 2028 | 23.8 in the maturity table at 2025-09-30; not restated at 2026-06-30 after the USD 50.0 million prepayment | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 96–97; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 12, 28–29 |
| Term Loan B | Term loan under the Senior Credit Agreement | Not supplied: the filing prints no carrying value for this loan alone | 738.2 | 738.2 | 740.0 original | Not supplied: no filing after the December 2025 amendment restates security; the Senior Credit Agreement is described as secured | Not supplied: legal rank is not stated after the amendment | USD | 738.2 | Not applicable | Adjusted term SOFR plus 1.750% (2.000% before the 2026-06-30 repricing) or base rate plus 0.750%; effective rate 5.393% | Floating | Adjusted term SOFR | 175 | Not supplied: a floor is not stated | Not supplied: a seven-year facility from December 2025; the maturity date is not stated | About 7.6, quarterly installments of about 1.9 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 12; 10-Q_2025-12-31_vvv-20251231.htm.jsonl, page 10 |
| Revolver | Revolving credit facility under the Senior Credit Agreement | 0.0 | 0.0 | 0.0 | 475.0, with 4.9 of letters of credit and 470.1 undrawn | First-priority security interest as for the Senior Credit Agreement | First-priority lien as stated | USD | 0.0 | Not applicable | Not supplied: the margin in force at 2026-06-30 is not stated; the grid is SOFR plus 1.375% to 2.250% on the net leverage ratio | Floating | SOFR | Not supplied: the margin in force at 2026-06-30 is not stated | Not supplied: a floor is not stated | Not supplied: a five-year facility; the maturity date is not stated | 0, no scheduled repayment | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 96–97; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 12 |
| Financing cost adjustment | Aggregate issuance costs and discounts not allocated by instrument | -15.5 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -15.5 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 7, 12 |

About 33% of borrowings at June 30, 2026 had fixed rates, against approximately 50% at September 30, 2025, so the floating-rate share rose with the term loan. The Reporting Currency Amount cells add to the balance sheet Total Debt of 1,602.0 (calculation K12).
Basis: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 29; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 55; calculation K12

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM | USD 485.7m | USD 329.5m | USD 394.7m | USD 420.5m | Calculated | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 26 | Fiscal 2025 plus nine months to 2026-06-30 less nine months to 2025-06-30; includes the 57.9 loss on the required store sale and the 71.6 prior-year gain on sales; excludes Breeze Autocare before 2025-12-01 |
| EBITDA (Adjusted) | LTM | USD 466.8m | USD 413.4m | USD 336.7m | USD 543.5m | Calculated | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 26 | Same construction on issuer Adjusted EBITDA; the fiscal 2026 key items include amortization of Breeze acquired intangibles and are not defined identically to fiscal 2025 |
| Net revenues | LTM | USD 1,710.3m | USD 1,510.2m | USD 1,256.5m | USD 1,964.0m | Calculated | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 | Breeze Autocare contributes from 2025-12-01 only |
| Operating cash flows from continuing operations | LTM | USD 307.1m | USD 284.6m | USD 180.0m | USD 411.7m | Calculated | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 3 | Continuing operations only |
| Additions to property, plant and equipment | LTM | USD 259.2m | USD 172.3m | USD 160.3m | USD 271.2m | Calculated | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 3 | Total capital expenditure, growth and maintenance |
| Free cash flow | LTM | USD 47.9m | USD 112.3m | USD 19.7m | USD 140.5m | Calculated | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 55; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 29 | Continuing operating cash flow less additions to property, plant and equipment, as the issuer defines it |
| Net interest and other financing expenses | LTM | USD 74.0m | USD 81.1m | USD 53.0m | USD 102.1m | Calculated | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 | Expense basis, includes financing and debt modification costs |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 1,093.8 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69 | 461.4 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | FY2024 / 2024-09-30 | USD | US$m | 2.37 | Calculated | Tier 1 | Carrying-value debt, not principal. Reported EBITDA from continuing operations. |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 1,025.5 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69 | 461.4 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | FY2024 / 2024-09-30 | USD | US$m | 2.22 | Calculated | Tier 1 | Net debt is gross debt less cash and cash equivalents. Reported EBITDA from continuing operations. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 461.4 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | 78.2 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 70 | FY2024 / 2024-09-30 | USD | US$m | 5.90 | Calculated | Tier 1 | Cash interest is interest paid per the cash flow statement, not interest expense. Reported EBITDA from continuing operations. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 1,093.8 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69 | 442.6 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | FY2024 / 2024-09-30 | USD | US$m | 2.47 | Calculated | Tier 1 | Carrying-value debt. Issuer Adjusted EBITDA from continuing operations. |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 1,025.5 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69 | 442.6 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | FY2024 / 2024-09-30 | USD | US$m | 2.32 | Calculated | Tier 1 | Issuer Adjusted EBITDA from continuing operations. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 442.6 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | 78.2 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 70 | FY2024 / 2024-09-30 | USD | US$m | 5.66 | Calculated | Tier 1 | Issuer Adjusted EBITDA from continuing operations. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 1,074.0 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69 | 485.7 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | FY2025 / 2025-09-30 | USD | US$m | 2.21 | Calculated | Tier 1 | Carrying-value debt, not principal. Reported EBITDA from continuing operations. |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 1,022.4 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69 | 485.7 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | FY2025 / 2025-09-30 | USD | US$m | 2.11 | Calculated | Tier 1 | Net debt is gross debt less cash and cash equivalents. Reported EBITDA from continuing operations. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 485.7 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | 56.1 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 70 | FY2025 / 2025-09-30 | USD | US$m | 8.66 | Calculated | Tier 1 | Cash interest is interest paid per the cash flow statement, not interest expense. Reported EBITDA from continuing operations. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 1,074.0 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69 | 466.8 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | FY2025 / 2025-09-30 | USD | US$m | 2.30 | Calculated | Tier 1 | Carrying-value debt. Issuer Adjusted EBITDA from continuing operations. |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 1,022.4 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69 | 466.8 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | FY2025 / 2025-09-30 | USD | US$m | 2.19 | Calculated | Tier 1 | Issuer Adjusted EBITDA from continuing operations. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 466.8 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | 56.1 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 70 | FY2025 / 2025-09-30 | USD | US$m | 8.32 | Calculated | Tier 1 | Issuer Adjusted EBITDA from continuing operations. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 1,602.0 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 12 | 420.5 | T4.8 constructed period register | 2026-06-30 | USD | US$m | 3.81 | Calculated | Tier 1 and Tier 2b | Carrying-value debt, not principal. Last-twelve-months reported EBITDA (calculation K7); excludes Breeze Autocare before 2025-12-01. |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 1,517.8 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 12 | 420.5 | T4.8 constructed period register | 2026-06-30 | USD | US$m | 3.61 | Calculated | Tier 1 and Tier 2b | Net debt is gross debt less cash and cash equivalents. Last-twelve-months reported EBITDA (calculation K7); excludes Breeze Autocare before 2025-12-01. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 420.5 | T4.8 constructed period register | Not supplied: the interim cash flow statements print no interest paid, so no last-twelve-months figure can be built | not printed | 2026-06-30 | USD | US$m | Not calculable: cash interest paid is not available for the nine months to 2026-06-30 or the prior-year nine months | Not Calculable | Tier 1 and Tier 2b | Last-twelve-months reported EBITDA (calculation K7); excludes Breeze Autocare before 2025-12-01. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 1,602.0 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 12 | 543.5 | T4.8 constructed period register | 2026-06-30 | USD | US$m | 2.95 | Calculated | Tier 1 and Tier 2b | Carrying-value debt. Last-twelve-months issuer Adjusted EBITDA (calculation K8); excludes Breeze Autocare before 2025-12-01 and mixes fiscal 2025 and fiscal 2026 key-item definitions. |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 1,517.8 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 12 | 543.5 | T4.8 constructed period register | 2026-06-30 | USD | US$m | 2.79 | Calculated | Tier 1 and Tier 2b | Last-twelve-months issuer Adjusted EBITDA (calculation K8); excludes Breeze Autocare before 2025-12-01 and mixes fiscal 2025 and fiscal 2026 key-item definitions. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 543.5 | T4.8 constructed period register | Not supplied: the interim cash flow statements print no interest paid, so no last-twelve-months figure can be built | not printed | 2026-06-30 | USD | US$m | Not calculable: cash interest paid is not available for the nine months to 2026-06-30 or the prior-year nine months | Not Calculable | Tier 1 and Tier 2b | Last-twelve-months issuer Adjusted EBITDA (calculation K8); excludes Breeze Autocare before 2025-12-01 and mixes fiscal 2025 and fiscal 2026 key-item definitions. |
| EBITDA (Adjusted) margin | EBITDA (Adjusted) / Net revenues x 100 | 466.8 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | 1,710.3 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68 | FY2025 | USD | US$m | 27.29 | Calculated | Tier 1 | Percentage of net revenues; issuer Adjusted EBITDA. |
| EBITDA (Adjusted) margin | EBITDA (Adjusted) / Net revenues x 100 | 543.5 | Calculation K8 | 1,964.0 | Calculation K9 | 2026-06-30 | USD | US$m | 27.67 | Calculated | Tier 1 and Tier 2b | Percentage of last-twelve-months net revenues; Breeze Autocare is in revenue only from 2025-12-01 and in EBITDA on the same basis. |
| Net revenues growth | (Net revenues FY2025 / Net revenues FY2024 - 1) x 100 | 1,710.3 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68 | 1,619.0 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68 | FY2025 | USD | US$m | 5.64 | Calculated | Tier 1 | Percentage change; includes the effect of store refranchising. |
| Free cash flow conversion | Free cash flow / EBITDA (Reported) x 100 | 47.9 | Calculation K13 | 485.7 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51 | FY2025 | USD | US$m | 9.86 | Calculated | Tier 1 | Free cash flow is continuing operating cash flow less additions to property, plant and equipment, as the issuer defines it. |
| Free cash flow conversion | Free cash flow / EBITDA (Reported) x 100 | 140.5 | Calculation K13 | 420.5 | Calculation K7 | 2026-06-30 | USD | US$m | 33.41 | Calculated | Tier 1 and Tier 2b | Last-twelve-months free cash flow over last-twelve-months reported EBITDA; the nine months to 2026-06-30 include a USD 42.6 million inflow in other assets and liabilities. |
| Capital expenditure intensity | Additions to property, plant and equipment / Net revenues x 100 | 271.2 | Calculation K13 | 1,964.0 | Calculation K9 | 2026-06-30 | USD | US$m | 13.81 | Calculated | Tier 1 and Tier 2b | Total capital expenditure including growth capital expenditure. |
| EBITDA (Adjusted) / net interest and other financing expenses | EBITDA (Adjusted) / Net interest and other financing expenses | 543.5 | Calculation K8 | 102.1 | Calculation K14 | 2026-06-30 | USD | US$m | 5.32 | Calculated | Tier 1 and Tier 2b | Expense basis, not cash interest and not the covenant test; the expense includes financing and debt modification costs. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|---|
| Network | System-wide same-store sales growth (%), rate | 7.1 | 6.1 | 4.9 | 8.0 | 6.2 | 7.4 | Fiscal 2025 below fiscal 2024; the 2026 periods above the prior-year periods | Rate as the issuer prints it; the definition of same stores changed in fiscal 2025 and again in fiscal 2026 to include mobile service; source: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 49; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 22 |
| Network | System-wide store sales (US$m), period flow | 3,104.3 | 3,453.8 | 889.6 | 1,053.9 | 2,535.4 | 2,964.1 | Rising in every pair of periods | Includes franchisees, which are not consolidated; source: 10-K_2024-09-30_vvv-20240930.htm.jsonl, page 47; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 49; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 22 |
| Network | System-wide store count (number), period-end | 2,010 | 2,180 | 2,124 | 2,456 | 2,124 | 2,456 | Rising | The nine-month columns repeat the third-quarter period-end counts; source: 10-K_2024-09-30_vvv-20240930.htm.jsonl, page 47; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 49; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 22 |
| Network | Company-operated stores (number), period-end | Not supplied: not printed in the text of the fiscal 2024 report | 1,016 | 983 | 1,232 | 983 | 1,232 | Rising | Includes 204 Breeze stores acquired less 45 sold, and 21 other acquisitions; source: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 10, 22 |
| Network | Franchised stores (number), period-end | Not supplied: not printed in the text of the fiscal 2024 report | 1,164 | 1,141 | 1,224 | 1,141 | 1,224 | Rising | Franchisees are independent legal entities; source: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 22 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA from continuing operations is the leverage denominator; adjusted EBITDA is shown beside it, labelled | Adjusted EBITDA adds back key items to EBITDA from continuing operations | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 26 | FY2024; FY2025; 9M 2025; 9M 2026 | FY2025 Adjusted is 18.9 below reported (485.7 less 466.8); 9M 2026 Adjusted is 83.9 above reported (413.4 less 329.5) | Financial foundation; Fundamental credit | Both measures are stated in every table; reported EBITDA is the primary denominator and the adjusted ratios are labelled |
| Adjusted EBITDA key items | Same key items in every period | The fiscal 2025 label is information technology costs; the fiscal 2026 label is information technology transition and material weakness remediation costs; investment and divestiture-related costs for fiscal 2026 include amortization of Breeze acquired intangibles and temporary financing costs | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 51–53; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 26–27 | FY2025 to 9M 2026 | Investment and divestiture-related costs are 68.6 in 9M 2026 against (65.4) in 9M 2025, so the key item decides the sign of the adjustment | Financial foundation; Fundamental credit | The last-twelve-months Adjusted EBITDA of 543.5 mixes the two definitions and is flagged as such |
| Total debt | Balance-sheet carrying value, current plus long-term, net of issuance costs and discounts; principal kept apart | The issuer's total debt equals carrying value; the debt table lists principal by instrument and one line for issuance costs and discounts | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 12; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 95 | 2024-09-30; 2025-09-30; 2026-06-30 | At 2026-06-30 principal of 1,621.0 exceeds carrying value of 1,602.0 by 19.0; at 2025-09-30 the difference is 6.6 | Financial foundation; Fundamental credit | Carrying value is used for every ratio; principal is shown in the debt stack and the reconciliation |
| Total debt perimeter | Lease liabilities presented on their own balance-sheet lines are not added to debt | Finance lease liabilities sit in accrued expenses and other liabilities and in other noncurrent liabilities; operating lease liabilities have their own line | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 93 | FY2025; 2026-06-30 | Finance leases were 244.5 at 2025-09-30 (calculation K18) and are not printed in total at 2026-06-30 | Financial foundation; Fundamental credit | Leases stay outside total debt and are named as claims outside debt; the 2026-06-30 finance lease total is not established |
| Cash | Cash and cash equivalents | The cash flow statement reconciles cash, cash equivalents and restricted cash | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70 | FY2024 | Closing cash in the cash flow statement is 68.7 against 68.3 on the balance sheet, a difference of 0.4 | Financial foundation | Balance sheet cash is used in net debt and liquidity; cash flow closing cash is used in the roll-forward |
| Cash interest | Interest paid in the cash flow statement | Net interest and other financing expenses on the income statement include financing and modification costs | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 68, 70 | FY2024; FY2025; 9M 2026 | FY2025 interest paid is 56.1 against 74.0 of expense | Financial foundation; Fundamental credit | Coverage uses interest paid; an expense-basis cover is shown separately and labelled |
| Management leverage target | Net debt to reported EBITDA | Fiscal 2024, fiscal 2025 and the December 2025 report: a ratings agency target adjusted EBITDA net leverage ratio of 2.5x to 3.5x; March and June 2026 reports: a net debt to adjusted EBITDA leverage ratio of 1.5x to 2.5x | 10-K_2024-09-30_vvv-20240930.htm.jsonl, page 57; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 57; 10-Q_2025-12-31_vvv-20251231.htm.jsonl, page 26; 10-Q_2026-03-31_vvv-20260331.htm.jsonl, page 28; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 30 | FY2024 to 9M 2026 | The ceiling moves from 3.5x to 2.5x; at 2.79x net on Adjusted EBITDA the issuer is 0.29x above the new ceiling (calculation K19) | Financial foundation; Fundamental credit | Both wordings are reported; neither is treated as a covenant |
| Gain on sale of 10 stores | One figure per event | 14.8 in the quarter to 2025-12-31 and the six months to 2026-03-31; 14.3 in the nine months to 2026-06-30 | 10-Q_2025-12-31_vvv-20251231.htm.jsonl, page 9; 10-Q_2026-03-31_vvv-20260331.htm.jsonl, page 10; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 11 | Q1 to 9M 2026 | 0.5 (calculation K22); the prior-year 39-store gain moves 73.9, 74.2, 74.3 | Financial foundation | The latest figure, 14.3, is used and the earlier figure kept in this register; no filing explains the change |
| Breeze Autocare purchase terms | Final figures from the closing report | Expected net purchase price of 593 million for 207 stores; closing report states cash consideration of 637.4 for 204 stores initially | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 109; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 8 | FY2025 report to 9M 2026 | Difference of 44.4 between 637.4 and 593 (calculation K22), on different bases | Financial foundation; Business & governance | Closing figures are used; the earlier figure is kept as the pre-closing expectation |

### Leverage and coverage

Reported total debt to EBITDA fell from 2.37x at fiscal 2024 year-end to 2.21x at fiscal 2025 year-end, then rose to 3.81x on last-twelve-months EBITDA at June 30, 2026 as the Term Loan B funded the Breeze Autocare acquisition and carrying-value debt rose from USD 1,074.0 million to USD 1,602.0 million. Reported EBITDA overstates the rise in leverage: the nine months to June 30, 2026 carry a USD 57.9 million pre-tax loss on the required sale of 45 acquired stores, and Breeze Autocare contributes only from December 1, 2025. On issuer Adjusted EBITDA the same ratio is 2.95x, against 2.30x at fiscal 2025 year-end.
Basis: calculation K5; calculation K7; calculation K8; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 10–11, 26

Net debt to Adjusted EBITDA of 2.79x at June 30, 2026 is 0.29x above the top of management's stated range of 1.5x to 2.5x. Management lowered that range from 2.5x to 3.5x between the December 2025 and March 2026 reports and no supplied report explains the change; it says it has made substantial progress and paused repurchases to deleverage, but the supplied figures show the range has not yet been reached.
Basis: calculation K19; 10-Q_2025-12-31_vvv-20251231.htm.jsonl, page 26; 10-Q_2026-03-31_vvv-20260331.htm.jsonl, page 28; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 30

Cash interest cover rose from 5.90x in fiscal 2024 to 8.66x in fiscal 2025 as interest paid fell from USD 78.2 million to USD 56.1 million after the 2030 notes were retired. That cover pre-dates the Term Loan B: net interest and other financing expenses were USD 81.1 million in the nine months to June 30, 2026 against USD 53.0 million, and last-twelve-months Adjusted EBITDA covers that expense 5.32x, an expense-based measure that is not the covenant test. Cash interest cover on the current debt load is not calculable because the quarterly reports print no interest paid.
Basis: calculation K14; 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 54, 70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2

The strongest contrary evidence is cash generation. Free cash flow was USD 112.3 million in the nine months to June 30, 2026 against USD 19.7 million a year earlier, and USD 50.0 million of the Term Loan A was prepaid in the quarter. It would carry more weight if fiscal 2026 year-end figures show net debt below USD 1,517.8 million without further acquisitions, and it carries less weight because the other assets and liabilities line turned from an outflow of USD 0.2 million to an inflow of USD 42.6 million.
Basis: calculation K3; calculation K13; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 12, 28

### Cash flow quality

Operating cash flow from continuing operations was USD 284.6 million in the nine months to June 30, 2026 against USD 180.0 million a year earlier, an increase of USD 104.6 million of which the issuer attributes USD 80.4 million to higher cash earnings and, to a lesser extent, lower cloud computing implementation spend. Payables and accrued liabilities swung from an outflow of USD 28.4 million to an outflow of USD 0.7 million, so part of the improvement may be working-capital timing.
Basis: calculation K23; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 28

Free cash flow converts 33.41% of last-twelve-months reported EBITDA, against 9.86% in fiscal 2025, because the operating inflow rose while capital expenditure stayed at 13.81% of last-twelve-months revenue. Maintenance capital expenditure was USD 43.3 million in the nine months against USD 35.1 million, and growth capital expenditure USD 129.0 million against USD 125.2 million, so most of the spend is growth capital expenditure.
Basis: calculation K13; calculation K15; calculation K24; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 29

### Liquidity and maturities

Liquidity at June 30, 2026 was USD 554.3 million: cash of USD 84.2 million and USD 470.1 million undrawn on the USD 475.0 million revolver after USD 4.9 million of letters of credit, against USD 393.2 million at fiscal 2025 year-end. The last printed maturity ladder, at September 30, 2025, shows USD 23.8 million due in each of fiscal 2026 and fiscal 2027, USD 498.0 million in fiscal 2028 and USD 535.0 million thereafter. It predates the USD 740.0 million Term Loan B, whose seven-year maturity date is not printed, so the maturity wall at June 30, 2026 is not established.
Basis: calculation K16; calculation K10; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 12; 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 96–97

About 33% of borrowings at June 30, 2026 had fixed rates, against approximately 50% at September 30, 2025, and the June 30, 2026 repricing cut the Term Loan B margin by 0.25 percentage points; the floating-rate share therefore leaves interest cost sensitive to base rates.
Basis: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 12, 29; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 55

### Data quality and definition risks

Every figure rests on filings with a continuing material weakness in financial-reporting controls, and the quarterly statements are unaudited, although management reports no identified material misstatement. The statements nevertheless tie internally: assets equal liabilities plus equity at all three balance sheet dates, the cash flow totals reconcile to the change in cash in every column, and EBITDA rebuilds from its components in every column.
Basis: calculation K6; calculation K21; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 31–34

Claims outside the debt figure include finance lease liabilities of USD 244.5 million at fiscal 2025 year-end, noncurrent operating lease liabilities of USD 377.3 million and employee benefit obligations of USD 178.9 million at June 30, 2026, lease guarantees of USD 93.4 million and franchisee debt guarantees of USD 12.4 million. None is in total debt, and the finance lease total at June 30, 2026 is not established.
Basis: calculation K18; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 13

No non-debt funding float is material: the issuer states that contract liabilities are not material, and no filing mentions supplier finance or factoring.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 73, 80

Subsequent events are dated and kept out of period figures. The Breeze Autocare acquisition closed on December 1, 2025, with 45 stores sold the same day; the pro forma effect on fiscal 2025 year-end net debt is in the post-balance-sheet table, with the sale of 10 stores to a franchisee left unquantified because no proceeds are stated. The gain on that sale is USD 14.8 million in two reports and USD 14.3 million in the third, a difference of USD 0.5 million that no filing explains.
Basis: calculation K17; calculation K22; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 108; 10-Q_2025-12-31_vvv-20251231.htm.jsonl, page 9; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 9–11

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and cash interest cover at fiscal year-ends | Ready | Fiscal 2024 and fiscal 2025 are audited and tie; the ratios are on reported and issuer-adjusted EBITDA and carrying-value debt | None needed for the fiscal year-ends |
| Current leverage at 2026-06-30 on last-twelve-months EBITDA | Ready with Limitations | EBITDA is constructed, excludes Breeze Autocare before 2025-12-01, includes a 57.9 loss on the required sale, and mixes two key-item definitions | Use the adjusted and reported ratios together; obtain pro forma EBITDA for Breeze Autocare |
| Current cash interest cover | Not Ready | Interim cash flow statements print no interest paid; only an expense-basis cover can be shown | Obtain interest paid for the twelve months to 2026-06-30 or the fiscal 2026 annual report |
| Maturity wall | Ready with Limitations | The only ladder is at 2025-09-30, before the Term Loan B; maturity dates of the loans and the revolver are not printed | Obtain the executed credit agreement and its December 2025 and June 2026 amendments |
| Liquidity | Ready with Limitations | Cash and undrawn revolver are printed at 2026-06-30; the revolver's expiry is not printed | Confirm the revolver maturity date |
| Covenant compliance | Not Ready | Covenant levels are known only from the fiscal 2025 summary and the company's compliance statement; the definitions of net debt and Adjusted EBITDA for covenant purposes are not supplied | Obtain the executed credit agreement; no headroom is inferred |
| Claims outside debt | Ready with Limitations | Finance lease liabilities are printed at 2025-09-30 only; guarantees and operating leases are printed at 2026-06-30 | Obtain the finance lease total at 2026-06-30 |

## Calculations

Amounts are US dollars in millions as printed; ratios are in times. A source dash is never read as zero except where the printed total proves it, as noted.

| Calculation ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| K1 | Net debt at 2024-09-30 | Total debt 1,093.8 - cash 68.3 | 1,025.5 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69 |
| K2 | Net debt at 2025-09-30 | Total debt 1,074.0 - cash 51.6 | 1,022.4 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69 |
| K3 | Net debt at 2026-06-30 | Total debt 1,602.0 - cash 84.2 | 1,517.8 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| K4 | Total liabilities at the three balance sheet dates | 353.9 + 1,899.2; 347.4 + 1,984.5; 405.4 + 2,659.5 | 2,253.1; 2,331.9; 3,064.9 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 3 |
| K5 | Total debt as carrying value | 23.8 + 1,070.0; 23.8 + 1,050.2; 31.1 + 1,570.9 | 1,093.8; 1,074.0; 1,602.0 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 3 |
| K6 | Balance sheet identity: total liabilities + equity - total assets | 2,253.1 + 185.6 - 2,438.7; 2,331.9 + 338.5 - 2,670.4; 3,064.9 + 416.7 - 3,481.6 | 0.0; 0.0; 0.0 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3 |
| K7 | Last-twelve-months EBITDA (Reported) to 2026-06-30 | 485.7 + 329.5 - 394.7 | 420.5 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 26 |
| K8 | Last-twelve-months EBITDA (Adjusted) to 2026-06-30 | 466.8 + 413.4 - 336.7 | 543.5 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 26 |
| K9 | Last-twelve-months net revenues to 2026-06-30 | 1,710.3 + 1,510.2 - 1,256.5 | 1,964.0 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| K10 | Maturity ladder at 2025-09-30 against instruments, and the fiscal 2028 composition | 23.8 + 23.8 + 498.0 + 0 + 0 + 535.0 = 1,080.6; 535.0 + 415.6 + 130.0 = 1,080.6; 1,080.6 - 6.6 = 1,074.0; 415.6 - 23.8 - 23.8 + 130.0 = 498.0 | 1,080.6; 1,080.6; 1,074.0; 498.0 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 55, 97 |
| K11 | Principal and carrying value at 2026-06-30 | 535.0 + 347.8 + 738.2 + 0 = 1,621.0; 1,621.0 - 19.0 = 1,602.0 | 1,621.0; 1,602.0 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 12 |
| K12 | Debt instruments register reconciliation to Total Debt | Financing cost adjustment -19.0 - (-3.5) = -15.5; 531.5 + 347.8 + 738.2 + 0 - 15.5 | -15.5; 1,602.0 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 7, 12 |
| K13 | Free cash flow, continuing operations: operating cash flow less additions to property, plant and equipment | 282.9 - 224.4; 307.1 - 259.2; 180.0 - 160.3; 284.6 - 172.3; 47.9 + 112.3 - 19.7 | 58.5; 47.9; 19.7; 112.3; 140.5 (last twelve months) | 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 55, 70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 29 |
| K14 | Last-twelve-months net interest and other financing expenses | 74.0 + 81.1 - 53.0 | 102.1 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 68; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 2 |
| K15 | Last-twelve-months operating cash flow and capital expenditure | 307.1 + 284.6 - 180.0; 259.2 + 172.3 - 160.3 | 411.7; 271.2 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 3 |
| K16 | Liquidity: cash plus undrawn revolver capacity | 68.3 + 346.8; 51.6 + 341.6; 84.2 + 470.1 | 415.1; 393.2; 554.3 | 10-K_2024-09-30_vvv-20240930.htm.jsonl, page 97; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 96; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2, 12 |
| K17 | Pro forma net debt after events following the fiscal 2025 balance sheet | Breeze: 637.4 - 4.6 = 632.8; 1,022.4 + 632.8 = 1,655.2; - 32.1 = 1,623.1; + 19.7 = 1,642.8; leverage over 485.7 | 3.41; 3.34; 3.38 (times) | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 8–11 |
| K18 | Finance lease liabilities at 2025-09-30 | 15.2 + 229.3 | 244.5 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 93 |
| K19 | Net debt to Adjusted EBITDA above the top of management's target range | 1,517.8 / 543.5 = 2.79; 2.79 - 2.5 | 0.29 (times) | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 30 |
| K20 | Adjusted EBITDA bridges tie to printed Adjusted EBITDA | 485.7 + 23.6 + 1.4 + 11.5 - 55.4; 329.5 - 3.7 + 6.2 + 12.8 + 68.6; 394.7 - 2.7 + 1.6 + 8.5 - 65.4 | 466.8; 413.4; 336.7 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 26 |
| K21 | EBITDA rebuilt from income from continuing operations + income tax + net interest and other financing expenses + depreciation and amortization | 214.5 + 69.1 + 71.9 + 105.9; 214.8 + 77.5 + 74.0 + 119.4; 189.2 + 65.9 + 53.0 + 86.6; 78.1 + 61.0 + 81.1 + 109.3; 57.0 + 20.0 + 18.6 + 30.2; 65.0 + 20.6 + 27.9 + 38.2 | 461.4; 485.7; 394.7; 329.5; 125.8; 151.7 | 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 26 |
| K22 | Differences between reports | Store sale gain 14.8 - 14.3; prior-year store sale gain 74.3 - 73.9; Breeze price 637.4 - 593 | 0.5; 0.4; 44.4 | 10-Q_2025-12-31_vvv-20251231.htm.jsonl, page 9; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 8, 11; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 109 |
| K23 | Increase in operating cash flow from continuing operations, nine months | 284.6 - 180.0 | 104.6 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 28 |
| K24 | Capital expenditure split, nine months to 2026-06-30 and 2025-06-30 | 43.3 + 129.0; 35.1 + 125.2 | 172.3; 160.3 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3, 29 |
| K25 | Guarantees outside debt at 2026-06-30 | Lease guarantees 93.4; franchisee debt guarantees 12.4 | 93.4; 12.4 | 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 13 |

## Gaps

**Interim cash interest paid is not printed (High).** The nine-month cash flow statements print no interest paid, so Cash Interest Paid is not supplied for the nine months to June 30, 2026 and the nine months to June 30, 2025. EBITDA to cash interest at June 30, 2026 is therefore not calculable, and the interest cover charts stop at fiscal 2025 year-end, before the Term Loan B raised debt. Closing the gap needs interest paid for the twelve months to June 30, 2026 or the fiscal 2026 annual report.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 3

**No statements after June 30, 2026 (High).** Every balance and the last-twelve-months construction end at June 30, 2026. Year-end fiscal 2026 debt, cash, EBITDA and cash interest are not available, and the pro forma table covers only events after the fiscal 2025 balance sheet. Closing the gap needs the fiscal 2026 annual report.
Basis: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3, 32

**Maturity dates and the maturity wall after the Term Loan B are not printed (Medium).** The only maturity ladder is at September 30, 2025, with fiscal 2029 and fiscal 2030 printed as dashes that the printed total shows to be nil. No report prints the maturity date of the Term Loan A, the Term Loan B or the revolver, or a ladder after the December 2025 amendment, so the maturity wall at June 30, 2026 is not established and the fiscal 2031 bucket is placed by Analyst Judgement. Closing the gap needs the executed credit agreement and its amendments.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 97; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 12; calculation K10

**Carrying values by instrument are not printed (Medium).** Only the 2031 Notes' carrying value is printed, so the Term Loan A and Term Loan B carry principal in the instrument register and the remaining issuance costs and discounts of USD 15.5 million are one adjustment row. The gross debt used in every ratio is the printed total and is not affected.
Basis: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 7, 12; calculation K12

**Finance lease liabilities at June 30, 2026 are not printed (Medium).** Finance lease liabilities were USD 244.5 million at September 30, 2025 and sit outside total debt; the June 2026 report prints only the amounts assumed with Breeze Autocare, so the current total is not established and any lease-adjusted leverage cannot be built. Closing the gap needs the lease note of the fiscal 2026 annual report.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 9; calculation K18

**Last-twelve-months EBITDA excludes Breeze Autocare before December 1, 2025 (Medium).** No pro forma EBITDA for the acquisition is printed, so leverage at June 30, 2026 is stated on earnings that include the acquired business for seven months of the twelve and the debt that funded it in full. The ratio overstates leverage against a full-year basis by an amount that is not established. Closing the gap needs a pro forma EBITDA from the issuer.
Basis: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 8–9, 26

**Adjusted EBITDA key items are defined differently across periods (Medium).** The fiscal 2026 key items include amortization of Breeze acquired intangibles and temporary financing costs, and the information technology label now includes control remediation costs; the last-twelve-months Adjusted EBITDA of USD 543.5 million mixes the two definitions and the effect is not quantified in the filings.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 51–53; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 26–27; calculation K8

**Covenant definitions are not supplied (Medium).** The financial covenants are summarised in the fiscal 2025 annual report as a maximum net leverage ratio of 4.5x and a minimum interest coverage ratio of 3.0x, tested each quarter, and the company states compliance at June 30, 2026. The covenant definitions of net debt and Adjusted EBITDA are not supplied, so covenant headroom is not inferred or calculated here.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 97; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 12, 29

**Security, rank, margins and floors for the loans are partly not stated (Medium).** The security and legal rank of the Term Loan B are taken from the Senior Credit Agreement it amends as Analyst Judgement, because no filing after the amendment restates them. The margins in force at June 30, 2026 for the Term Loan A and the revolver, and any floors, are not stated. The debt stack therefore ranks the three facilities equally.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 96–97; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 12

**Interim cash flow lines and dash entries are not supplied (Low).** The interim statements do not print deferred income taxes, pension remeasurement, purchases and proceeds of investments, finance lease payments or income taxes paid, so those cells are not supplied for the nine-month columns. Entries printed as a dash are not read as zero: the loss on extinguishment of debt in fiscal 2025, operating cash flows from discontinued operations and repurchases of common stock in the nine months to June 30, 2026, and the exchange effect on cash in fiscal 2024.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, pages 69–70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 3–4

**Total liabilities and the 2025-06-30 balance sheet are not printed (Low).** The balance sheets print no total liabilities line, so it is calculated and shown as such, and the June 2026 report prints no balance sheet at June 30, 2025, so net debt at that date and a prior-year last-twelve-months leverage are not available.
Basis: 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 69; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 2–3; calculation K4

**No segment revenue schedule applies (Low).** The issuer reports one segment, so no segment revenue or elimination rows exist and no segment sum is stated; revenue by service category is printed in the quarterly report but is not a segment schedule.
Basis: 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 15–16

**Some period-end store counts and event amounts are not printed (Low).** Company-operated and franchised store counts for fiscal 2024 are not printed in the text of the fiscal 2024 report. The proceeds of the October 2025 sale of 10 stores are not stated, so the post-balance-sheet table leaves that row unquantified, and the dates of the 21 other store acquisitions are given only as the nine months to June 30, 2026.
Basis: 10-K_2024-09-30_vvv-20240930.htm.jsonl, page 47; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 108; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, pages 10–11

**Fiscal 2024 comparatives were re-presented (Low).** The fiscal 2025 annual report splits fiscal 2024 investing and financing lines more finely than the fiscal 2024 annual report; totals and closing cash are unchanged, and the quarterly reports state that certain prior period amounts were reclassified. Fiscal 2024 figures here follow the later report.
Basis: 10-K_2024-09-30_vvv-20240930.htm.jsonl, page 70; 10-K_2025-09-30_vvv-20250930.htm.jsonl, page 70; 10-Q_2026-06-30_vvv-20260630.htm.jsonl, page 5

## Next module

The orchestrator selects the next module.
