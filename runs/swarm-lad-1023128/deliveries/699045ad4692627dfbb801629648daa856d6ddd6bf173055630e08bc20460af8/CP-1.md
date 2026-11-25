---
issuer_id: lad-1023128
module_id: CP-1
analysis_date: 2026-11-18
---

## Request

Lithia Motors Inc (issuer lad-1023128), as of 2026-11-18, credit_snapshot pathway: financial foundation for the three annual statements to 31 December 2025 and the nine months to 30 September 2026, with leverage, interest cover, liquidity and debt on the issuer's consolidated perimeter.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_lad-20241231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-24 | 194eeb30f10cd4d3e1431f9f952423cc3ea79959d16ba8073b342e85d7556ed8 | Balance sheet at 31 December 2023, 2023 liquidity table and debt note, original 2024 figures |
| 10-K_2025-12-31_lad-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-25 | 2e3557296e9f8f84630d0e817ff711aa8ec21982672f0f9c2c6d9a52998d771b | Annual statements for 2023 to 2025, revised 2024 comparatives, debt note, principal payment schedule, liquidity table, financing operations table |
| 10-Q_2026-03-31_lad-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-29 | 7a32aa9929bdb1870f82c81f859aeb10f37597d7d9bfefffe15693db4485349f | Searched for revisions, covenant levels and maturity schedules; no figure of this report is used in a table |
| 10-Q_2026-06-30_lad-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-29 | 243aaf7a875132962343d788d780b6cb48f7d90041c1115c748756229104f0f3 | Searched for revisions, covenant levels and maturity schedules; no figure of this report is used in a table |
| 10-Q_2026-09-30_lad-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter and nine months ended 30 September 2026 | 2026-10-28 | e484586748d2a6ae9e3f4d67eaf1cc80b305506d805e1cf1810943c6ffe3c350 | Nine-month statements, balance sheet at 30 September 2026, debt note, available funds, outstanding balances on credit facilities and long-term debt |
| EX-99.1_2026-04-29_a2026q1exx99earningsrelease.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-04-29 | df3151850bfaf9ac8eef47efa036934ce09f2b4f91992694c8312deca1ee9bfe | Searched for revisions and adjusted measures; no figure of this release is used in a table |
| EX-99.1_2026-07-29_a2026q2exx99earningsrelease.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-29 | 43561e8b1453bf56b1bdc7d318aef29d916a2d1e5c36e03bc84b7a12471fa8eb | Searched for revisions and adjusted measures; no figure of this release is used in a table |
| EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-21 | 6c46671a065e78d9eda57a4d72ad24576fa653f3c9043c6848b55a9d6995809d | EBITDA and Adjusted EBITDA reconciliation, trailing Adjusted EBITDA, issuer net debt, October 2026 events |

Supplied module output: Source readiness (CP-0), sha256 9a4084c9b814e33734012003bc205c46696d4807bd57b37d3480acd8297c7fda, used for the revised 2024 comparatives, the debt perimeter note and the list of missing documents.

## Findings

### Bottom line

Lithia carries 7.77x total debt to trailing reported EBITDA on its full balance sheet but 3.07x on the company's narrower measure, so creditor exposure depends on how much floor plan and finance-arm funding is treated as matched by assets.

On the full perimeter, leverage rose from 5.24x at the end of 2023 to 7.14x at the end of 2025 while cash interest cover fell from 4.05x to 2.93x, and trailing cover is 2.79x. About 74.5% of the debt added since 2023 is floor plan and securitisation notes, which finance inventory and finance receivables, and reported operating cash flow turned negative in the nine months to September 2026.
Basis: 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11; calculation CALC-27; calculation CALC-28

### Key findings

On all balance-sheet debt, total debt to reported EBITDA rose from 5.24x in 2023 to 6.48x in 2024, 7.14x in 2025 and 7.77x over the twelve months to 30 September 2026, and net of unrestricted cash from 4.84x to 7.71x. Total debt grew by USD 5,355.8 million over that span to USD 16,256.3 million while reported EBITDA moved only from USD 2,080.7 million to USD 2,093.4 million, so the ratio rose because debt grew, not because earnings fell; USD 2,931.3 million of the increase is floor plan notes and USD 1,060.1 million is non-recourse notes, together 74.5%.
Basis: 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3; calculation CALC-1; calculation CALC-4; calculation CALC-14; calculation CALC-24; calculation CALC-25; calculation CALC-26; calculation CALC-27

The company's own measure is 3.07x: net debt of USD 4,992.2 million over trailing Adjusted EBITDA of USD 1,627.2 million. It leaves out USD 6,570.3 million of inventory-related debt and USD 4,509.2 million of financing-operations debt and takes floor plan and financing interest out of EBITDA, so it measures the corporate layer, which is USD 5,176.8 million of debt before cash. A creditor to the corporate layer should read both figures: the full-perimeter ratio shows how much debt sits on the balance sheet, and the company's ratio shows what is left once asset-matched funding is set aside.
Basis: EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; calculation CALC-28; calculation CALC-36

Reported EBITDA covered cash interest paid 4.05x in 2023, 2.77x in 2024, 2.93x in 2025 and 2.79x over the trailing twelve months, while trailing cash interest of USD 750.4 million compares with USD 514.3 million in 2023. Floor plan interest and financing-operations interest are inside that cash interest, so cover on this perimeter is lower than the burden the corporate layer alone carries.
Basis: 10-K_2025-12-31_lad-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 6; calculation CALC-15

Reported operating cash flow was an outflow of USD 204.9 million in the nine months to September 2026 against an inflow of USD 233.0 million a year earlier, because USD 831.4 million went into finance receivables and USD 555.0 million into inventory. The company's adjusted operating cash flow of USD 2,125.2 million adds back that finance receivables outflow and net floor plan borrowings of USD 1,542.2 million; USD 1,138.3 million of those borrowings came from converting inventory-secured revolvers into floor plan facilities, which changes where debt is recorded and earns no cash. After capex of USD 252.3 million, free cash flow was an outflow of USD 457.2 million, while shareholder returns of USD 665.6 million were paid and net financing inflow was USD 722.3 million.
Basis: 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 4–5; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; calculation CALC-29; calculation CALC-30

Immediately available funds were USD 1,440.7 million at 30 September 2026, made of USD 108.1 million unrestricted cash, USD 76.1 million of marketable securities and USD 1,256.5 million of available credit, and available credit fell from USD 1,359.2 million at the end of 2025. The principal schedule at the end of 2025 shows USD 71.6 million due in 2026 and USD 536.5 million in 2027, which includes the USD 400.0 million of 2027 senior notes, but it leaves out revolvers, warehouse facilities, non-recourse notes and floor plan notes, so the full near-term maturity wall is not established.
Basis: 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 42; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 103; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 99; calculation CALC-31; calculation CALC-34

The 2025 annual report revised 2024 for an immaterial error in interest and fee income, so 2024 is shown as revised, with net income of USD 816.3 million and not the USD 821.6 million first reported. Deferred revenue, which funds operations without interest, rose from USD 264.1 million at the end of 2023 to USD 499.4 million at September 2026, and contract liabilities on aftersales and lease vehicles were USD 549.7 million and USD 155.2 million; these are service obligations that unwind through delivery and sit outside debt.
Basis: 10-K_2025-12-31_lad-20251231.htm.jsonl, page 90; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 11; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76

Two events after the balance sheet are not in any period figure: an October 2026 acquisition of four stores and a dividend of USD 0.75 per share expected on 20 November 2026. The sources state neither the purchase price nor the total dividend, so no pro forma net debt is stated.
Basis: EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 2

### Contrary evidence and what would change the view

The strongest case against reading the full-perimeter leverage as a creditor risk is asset matching: inventory of USD 6,624.3 million stands against floor plan notes of USD 6,566.8 million, and net finance receivables of USD 5,578.6 million against financing-operations debt of USD 4,509.2 million, so most of the added debt is backed by assets that turn over or amortise. That case would lose if used vehicle values or credit performance weakened, because the notes would then fall due faster than the assets convert; net credit losses on managed receivables were USD 47.8 million in the nine months to September 2026 against USD 54.1 million a year earlier, so that sign is absent today, and a reversal would be the first signal. A fuller maturity schedule for the revolvers, warehouse and non-recourse lines would show whether that matching holds in time as well as in amount.
Basis: 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 34

### Limitations

Fiscal-year EBITDA is calculated by the issuer's own definition from statement lines, because the issuer states EBITDA only for 2025 and 2026 interim periods; trailing figures add the nine-month stubs.
Basis: EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; calculation CALC-9; calculation CALC-10; calculation CALC-11

Debt is stated at balance-sheet carrying value, and instrument-level carrying values, security, ranking and guarantors are not disclosed in any supplied document, so no debt stack by seniority can be drawn.
Basis: 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 99

Interim cash flow statements are year to date only and the interim statements are unaudited, so quarterly flows and the trailing ratios rest on differences of reported totals.
Basis: 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 5.24 | 4.84 | x | Calculated from balance-sheet carrying debt including floor plan and financing-operations debt over EBITDA (Reported) calculated by the issuer's definition |
| FY2024 / 2024-12-31 | 6.48 | 6.37 | x | Calculated; 2024 as revised; same perimeter and EBITDA definition |
| FY2025 / 2025-12-31 | 7.14 | 7.08 | x | Calculated; same perimeter and EBITDA definition |
| 2026-09-30 | 7.77 | 7.71 | x | Calculated on trailing twelve months to 30 September 2026; EBITDA (Reported) is 2025 plus nine months 2026 less nine months 2025 |

The debt includes USD 6,570.3 million of inventory-related debt and USD 4,509.2 million of financing-operations debt at 30 September 2026, so these ratios are not the company's own 3.07x measure.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 4.05 | x | Calculated: EBITDA (Reported) over cash interest paid |
| FY2024 / 2024-12-31 | 2.77 | x | Calculated: EBITDA (Reported) over cash interest paid |
| FY2025 / 2025-12-31 | 2.93 | x | Calculated: EBITDA (Reported) over cash interest paid |
| 2026-09-30 | 2.79 | x | Calculated: EBITDA (Reported) over cash interest paid; trailing twelve months |

Cash interest paid includes floor plan and financing-operations interest, so cover is lower than a corporate-layer measure would be.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 825.0 | 870.4 | US$m | Cash is unrestricted cash and cash equivalents; undrawn is available credit on the credit facilities as the company reports it, limited by borrowing base and net of letters of credit; restricted cash is excluded |
| FY2024 / 2024-12-31 | 225.1 | 1,075.3 | US$m | Cash is unrestricted cash and cash equivalents; undrawn is available credit on the credit facilities as the company reports it, limited by borrowing base and net of letters of credit; restricted cash is excluded |
| FY2025 / 2025-12-31 | 109.2 | 1,359.2 | US$m | Cash is unrestricted cash and cash equivalents; undrawn is available credit on the credit facilities as the company reports it, limited by borrowing base and net of letters of credit; restricted cash is excluded |
| 2026-09-30 | 108.1 | 1,256.5 | US$m | Cash is unrestricted cash and cash equivalents; undrawn is available credit on the credit facilities as the company reports it, limited by borrowing base and net of letters of credit; restricted cash is excluded |

Available credit moves with a monthly borrowing base, so undrawn amounts are not guaranteed to be usable in full.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 71.6 | US$m | Scheduled principal at 31 December 2025 on real estate mortgages, finance lease liabilities, senior notes and other debt |
| FY2027 | 536.5 | US$m | Scheduled principal at 31 December 2025 on real estate mortgages, finance lease liabilities, senior notes and other debt |
| FY2028 | 124.0 | US$m | Scheduled principal at 31 December 2025 on real estate mortgages, finance lease liabilities, senior notes and other debt |
| FY2029 | 889.4 | US$m | Scheduled principal at 31 December 2025 on real estate mortgages, finance lease liabilities, senior notes and other debt |
| FY2030 | 738.9 | US$m | Scheduled principal at 31 December 2025 on real estate mortgages, finance lease liabilities, senior notes and other debt |
| Thereafter | 1,141.7 | US$m | Scheduled principal at 31 December 2025 on real estate mortgages, finance lease liabilities, senior notes and other debt; the Thereafter row is all payments after 2030 |

The schedule leaves out revolving lines of credit, warehouse facilities, non-recourse notes and floor plan notes, so it is not the full maturity wall.

### Financials and credit metrics

| Line | FY2023 | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis |
| --- | --- | --- | --- | --- | --- | --- |
| Total revenues | 31,042.3 | 36,188.2 | 37,634.9 | 38,207.2 | USD millions | Reported for years; trailing twelve months calculated |
| Gross profit | 5,228.9 | 5,561.0 | 5,733.0 | Not supplied: trailing gross profit is not constructed | USD millions | Reported |
| EBITDA (Reported) | 2,080.7 | 2,048.6 | 2,076.6 | 2,093.4 | USD millions | Calculated by the issuer's definition; trailing is 2025 plus nine months 2026 less nine months 2025 |
| Net income | 1,011.7 | 816.3 | 825.9 | 794.5 | USD millions | Reported; 2024 as revised |
| Net cash from operating activities | -472.4 | 425.1 | 356.7 | -81.2 | USD millions | Reported; trailing calculated |
| Cash interest paid | 514.3 | 739.7 | 709.4 | 750.4 | USD millions | Reported; trailing calculated |
| Total debt (carrying value) | 10,900.5 | 13,265.7 | 14,821.9 | 16,256.3 | USD millions | Calculated from the six balance-sheet debt lines; includes floor plan and non-recourse notes |
| Net debt (total debt less unrestricted cash) | 10,075.5 | 13,040.6 | 14,712.7 | 16,148.2 | USD millions | Calculated |
| Total debt / EBITDA | 5.24 | 6.48 | 7.14 | 7.77 | x | Calculated on the full perimeter |
| Net debt / EBITDA | 4.84 | 6.37 | 7.08 | 7.71 | x | Calculated on the full perimeter |
| EBITDA / cash interest | 4.05 | 2.77 | 2.93 | 2.79 | x | Calculated |
| Issuer net debt / trailing Adjusted EBITDA | Not supplied: not stated for 2023 | Not supplied: not stated for 2024 | Not supplied: not stated at year end 2025 | 3.07 | x | Reported by the issuer for 30 September 2026; excludes inventory-related and financing-operations debt |
| Debt excluding inventory-related and financing-operations debt | Not supplied: not stated for 2023 | Not supplied: not stated for 2024 | Not supplied: not stated at year end 2025 | 5,176.8 | USD millions | Calculated from the issuer's debt table at 30 September 2026 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 10,900.5 | 825.0 | 10,075.5 | US$m | Gross debt is the six balance-sheet debt lines at carrying value (floor plan notes, term debt and securitisation notes including finance leases carried in debt lines); principal total beside it is 10,932.3 before issuance costs of 31.8 |
| FY2024 / 2024-12-31 | 13,265.7 | 225.1 | 13,040.6 | US$m | Gross debt is the six balance-sheet debt lines at carrying value, 2024 as revised; principal total beside it is 13,290.8 before issuance costs of 25.1 |
| FY2025 / 2025-12-31 | 14,821.9 | 109.2 | 14,712.7 | US$m | Gross debt is the six balance-sheet debt lines at carrying value; principal total beside it is 14,849.7 before issuance costs of 27.8 |
| 2026-09-30 | 16,256.3 | 108.1 | 16,148.2 | US$m | Gross debt is the six balance-sheet debt lines at carrying value, reported; principal total beside it is 16,280.7 before issuance costs of 24.4; cash is unrestricted |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 3,502.1 | 11,319.8 | 14,821.9 | US$m | Principal is the scheduled payment table at 31 December 2025 for mortgages, finance leases, senior notes and other debt; reconciling items are floor plan notes 5,008.9, used and service loaner financing 1,043.0, revolving lines 1,570.8, warehouse facilities 1,251.0 and non-recourse notes 2,473.9 that the ladder leaves out, less issuance costs 27.8 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Acquisition of four Hyundai and Kia stores in Memphis | Not supplied: the source states October 2026 only | Not supplied: the purchase price is not stated | Not supplied: amount not stated | Not supplied: amount not stated | US$m | Source states expected annualized revenue of 250 and no price; not reflected in any period figure |
| Quarterly dividend declared with third-quarter results, payment scheduled | 2026-11-20 | Not supplied: the total is not stated | Not supplied: total not stated | Not supplied: total not stated | US$m | Source states 0.75 per share, expected payment 2026-11-20 and record date 2026-11-06; the dividend total and net debt effect are not stated |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 31,042.3 | 2,080.7 | US$m | Annual period; EBITDA is reported (the issuer's unadjusted EBITDA, calculated by its definition); no adjusted measure is stated for the year |
| FY2024 / 2024-12-31 | 36,188.2 | 2,048.6 | US$m | Annual period; EBITDA is reported (the issuer's unadjusted EBITDA, calculated by its definition); no adjusted measure is stated for the year; 2024 as revised |
| FY2025 / 2025-12-31 | 37,634.9 | 2,076.6 | US$m | Annual period; EBITDA is reported (the issuer's unadjusted EBITDA, calculated by its definition); no adjusted measure is stated for the year |

The Adjusted EBITDA column holds reported EBITDA, because the issuer states adjusted EBITDA only for quarters and trailing periods.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: no supplied document states the legal rank of any instrument | Not supplied: rank not stated | Not supplied: not stated by instrument | Not supplied: no instrument ranking | Not supplied: needs a ranking | US$m | The filings describe the bank facilities as secured by a substantial amount of assets and name guarantors in the indenture exhibits, but state no rank, collateral by instrument or guarantor; the executed documents were not supplied |

No debt stack by seniority is drawn, because no source states the rank of any instrument.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), nine months to 30 September 2026 | 1650.6 | US$m | Reported measure: the issuer's EBITDA for the nine months to 30 September 2026 |
| Less: flooring interest expense | -195.9 | US$m | Issuer's own adjustment, as stated; classification: interest reclassified to operating cost |
| Less: financing operations interest expense | -161.4 | US$m | Issuer's own adjustment, as stated; classification: interest reclassified to operating cost |
| Less: used vehicle line of credit interest | -1.5 | US$m | Issuer's own adjustment, as stated; classification: interest reclassified to operating cost |
| Add: acquisition expenses | 0.7 | US$m | Issuer's own adjustment, as stated; classification: non-core item; realisation status not stated |
| Add: gain on disposal of stores (shown as a deduction) | -9.2 | US$m | Issuer's own adjustment, as stated; classification: non-core item; realisation status not stated |
| Add: investment gain (shown as a deduction) | -43.7 | US$m | Issuer's own adjustment, as stated; classification: non-core item; realisation status not stated |
| Add: insurance reserves | 3.2 | US$m | Issuer's own adjustment, as stated; classification: non-core item; realisation status not stated |
| Add: contract buyouts | 20.3 | US$m | Issuer's own adjustment, as stated; classification: non-core item; realisation status not stated |
| Adjusted EBITDA, nine months to 30 September 2026 | 1263.1 | US$m | Specified adjusted measure: the issuer's Adjusted EBITDA for the same nine months |

The bridge deducts floor plan and financing interest, so the issuer's Adjusted EBITDA is not comparable with reported EBITDA.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 7 |
| Calculated | 9 |
| Assumption-Based | 0 |
| Analyst Inference | 1 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 3 |
| Fields present | 20 |
| Fields total | 22 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 6 |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_lad-20241231.htm.jsonl | Annual report (Form 10-K) | Year ended 2024-12-31 with 2023 comparatives | USD | millions | Consolidated Lithia Motors, Inc. including Driveway Finance Corporation | US GAAP | Tier 1 audited | Balance sheet at 2023-12-31, liquidity table 2023, original 2024 figures | 2024 figures later revised |
| 10-K_2025-12-31_lad-20251231.htm.jsonl | Annual report (Form 10-K) | Year ended 2025-12-31 with 2024 revised and 2023 | USD | millions | Consolidated Lithia Motors, Inc. including Driveway Finance Corporation | US GAAP | Tier 1 audited | Controlling annual statements, debt note, principal schedule | Part III incorporated by reference to a proxy statement not supplied |
| 10-Q_2026-03-31_lad-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Quarter ended 2026-03-31 | USD | millions | Consolidated | US GAAP | Tier 2b unaudited without auditor review | Coverage only; no figure used | No figure of this report appears in a table |
| 10-Q_2026-06-30_lad-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and six months ended 2026-06-30 | USD | millions | Consolidated | US GAAP | Tier 2b unaudited without auditor review | Coverage only; no figure used | No figure of this report appears in a table |
| 10-Q_2026-09-30_lad-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and nine months ended 2026-09-30 | USD | millions | Consolidated | US GAAP | Tier 2b unaudited without auditor review | Nine-month statements, balance sheet, debt note, liquidity table | Cash flow is year to date only |
| EX-99.1_2026-04-29_a2026q1exx99earningsrelease.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter ended 2026-03-31 | USD | millions | Consolidated | Non-GAAP measures included | Tier 3b issuer release, unaudited | Coverage only; no figure used | No figure of this release appears in a table |
| EX-99.1_2026-07-29_a2026q2exx99earningsrelease.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter ended 2026-06-30 | USD | millions | Consolidated | Non-GAAP measures included | Tier 3b issuer release, unaudited | Coverage only; no figure used | No figure of this release appears in a table |
| EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter ended 2026-09-30 with nine months and trailing twelve months | USD | millions | Consolidated | Non-GAAP measures included | Tier 3b issuer release, unaudited | EBITDA, Adjusted EBITDA, issuer net debt and trailing ratio | Adjusted EBITDA is the issuer's own non-GAAP measure |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lithia Motors, Inc. | Issuer and registrant | 31 December | USD | millions | Consolidated group | US GAAP | FY2023, FY2024 (revised), FY2025, nine months 2025, nine months 2026 |
| Driveway Finance Corporation (Financing Operations segment) | Captive finance arm, reported inside the consolidated statements | 31 December | USD | millions | Financing operations segment of the consolidated group | US GAAP | FY2023, FY2024, FY2025, nine months 2025, nine months 2026 |
| United Kingdom and Canadian operations | Foreign operating subsidiaries; Canadian and sterling facilities are stated in their own currencies | 31 December | USD | millions | Consolidated into the group's US dollar statements | US GAAP | FY2023 to FY2025 and 2026 interim |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| 2024 net income taken as revised for the correction of an immaterial error | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 90 | Revision | 821.6 | 816.3 | The later annual report controls the 2024 comparative | FY2024 |
| EBITDA (Reported) calculated for fiscal years from statement lines by the issuer's definition | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75 | Derivation | Not supplied: not stated for years | 2,080.7; 2,048.6; 2,076.6 | Issuer states EBITDA only in releases for 2026 and 2025 interim periods | FY2023; FY2024; FY2025 |
| Total debt calculated as the sum of the six balance-sheet debt lines | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75 | Aggregation | Not supplied: no printed total | 10,900.5; 13,265.7; 14,821.9; 16,256.3 | Carrying value including floor plan and non-recourse notes; no lease liability on its own line is added | FY2023; FY2024; FY2025; 2026-09-30 |
| Cash & Equivalents taken as unrestricted cash, not the balance-sheet line that includes restricted collections | 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 5–6 | Definition | 374.0 | 108.1 | Restricted collections are trapped in securitisations and are not available to the group | 2026-09-30 |
| Revenue lines combined by the company (used wholesale into used, fleet into new) with no effect on totals | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 7 | Reclassification | Not supplied: prior line split not restated here | As printed in the latest report | Totals are unchanged by the reclassification | FY2023 to 2026 interim |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| New vehicle revenue | 15,601.2 | 18,322.8 | 18,703.0 | 14,076.3 | 14,077.1 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Used vehicle revenue | 10,897.3 | 12,628.8 | 13,371.5 | 10,192.3 | 10,647.8 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Finance and insurance revenue | 1,337.0 | 1,417.7 | 1,473.6 | 1,116.8 | 1,087.5 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Aftersales revenue | 3,206.8 | 3,818.9 | 4,086.8 | 3,051.7 | 3,197.0 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Total revenues | 31,042.3 | 36,188.2 | 37,634.9 | 28,437.1 | 29,009.4 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Cost of sales: new vehicle | 14,173.2 | 17,037.3 | 17,533.9 | 13,178.1 | 13,255.7 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Cost of sales: used vehicle | 10,192.5 | 11,905.1 | 12,638.3 | 9,609.2 | 10,035.2 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Cost of sales: aftersales | 1,447.7 | 1,684.8 | 1,729.7 | 1,288.3 | 1,303.6 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Total cost of sales | 25,813.4 | 30,627.2 | 31,901.9 | 24,075.6 | 24,594.5 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Gross profit | 5,228.9 | 5,561.0 | 5,733.0 | 4,361.5 | 4,414.9 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Financing operations income (loss) | -45.9 | 8.4 | 74.6 | 51.7 | 90.0 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Asset impairments | Not supplied: printed as a dash in the filing | Not supplied: printed as a dash in the filing | 5.8 | Not supplied: no such line in the interim statement | Not supplied: no such line in the interim statement | USD millions | Reported; dashes in the filing are not read as zero | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Selling, general and administrative | 3,294.8 | 3,755.2 | 3,944.7 | 2,965.3 | 3,088.4 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Depreciation and amortization | 195.8 | 245.6 | 262.4 | 194.6 | 212.3 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Operating income | 1,692.4 | 1,568.6 | 1,594.7 | 1,253.3 | 1,204.2 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Floor plan interest expense | -150.9 | -278.8 | -228.2 | -169.8 | -195.9 | USD millions | Reported as printed, expense negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Other interest expense | -201.2 | -257.8 | -275.5 | -200.5 | -196.0 | USD millions | Reported as printed, expense negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Other income, net | 22.0 | 39.3 | 17.4 | 35.9 | 72.7 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Income before income taxes | 1,362.3 | 1,071.3 | 1,108.4 | 918.9 | 885.0 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Income tax provision | -350.6 | -255.0 | -282.5 | -230.9 | -228.4 | USD millions | Reported as printed, expense negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Net income | 1,011.7 | 816.3 | 825.9 | 688.0 | 656.6 | USD millions | Reported; 2024 as revised | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Net income attributable to non-controlling interests | -6.5 | -4.8 | -6.3 | -5.3 | -5.1 | USD millions | Reported as printed, expense negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Net income attributable to redeemable non-controlling interest | -4.4 | -14.8 | Not supplied: printed as a dash in the filing | Not supplied: no such line in the interim statement | Not supplied: no such line in the interim statement | USD millions | Reported as printed, expense negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Net income attributable to Lithia Motors, Inc. | 1,000.8 | 796.7 | 819.6 | 682.7 | 651.5 | USD millions | Reported | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 |
| Memo: financing operations interest expense | 170.5 | 195.1 | 202.1 | 150.0 | 161.4 | USD millions | Reported; positive magnitude; added back in EBITDA (Reported) | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 50; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 22 |
| EBITDA (Reported) | 2,080.7 | 2,048.6 | 2,076.6 | 1,633.8 | 1,650.6 | USD millions | Calculated: net income plus floor plan interest, other interest, financing operations interest, income tax and depreciation and amortization, the issuer's EBITDA definition; the issuer states 1,633.8 and 1,650.6 for the nine-month periods | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11 |
| EBITDA (Adjusted) | Not supplied: the issuer states Adjusted EBITDA for quarters and trailing periods only | Not supplied: the issuer states Adjusted EBITDA for quarters and trailing periods only | Not supplied: the issuer states Adjusted EBITDA for quarters and trailing periods only | 1,302.5 | 1,263.1 | USD millions | Reported by the issuer: EBITDA less floor plan and financing interest plus non-core items; Normalized by the issuer, not by this analysis | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 1,011.7 | 816.3 | 825.9 | 688.0 | 656.6 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Asset impairments | Not supplied: printed as a dash in the filing | Not supplied: printed as a dash in the filing | 5.8 | Not supplied: no such line in the interim statement | Not supplied: no such line in the interim statement | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Depreciation and amortization | 204.1 | 295.3 | 323.6 | 239.5 | 266.2 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Share-based compensation | 40.8 | 58.4 | 60.3 | 45.1 | 39.8 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Net loss (gain) on disposal of other assets | -3.8 | -8.2 | 9.3 | 3.9 | 6.3 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Net gain on disposal of stores | -31.2 | -8.2 | -20.3 | -17.7 | -9.2 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Investment loss (gain) | Not supplied: printed as a dash in the filing | -33.1 | 14.2 | -12.1 | -54.5 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Deferred income taxes | 58.7 | 38.2 | 94.7 | 102.6 | 68.7 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Amortization of operating lease right-of-use assets | 60.5 | 94.5 | 91.3 | 67.2 | 73.8 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Trade receivables, net | -222.1 | -9.8 | 148.2 | 55.5 | 2.6 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Inventories | -863.5 | -260.9 | 33.3 | 44.8 | -555.0 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Finance receivables, net | -1,052.0 | -622.4 | -878.3 | -671.3 | -831.4 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Other assets | -59.2 | -165.1 | -225.0 | -263.8 | -136.2 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Floor plan notes payable | 363.7 | 194.5 | -186.1 | -151.0 | 87.6 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Trade payables | -19.9 | 9.0 | -7.5 | -7.4 | 93.3 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Accrued liabilities | 21.2 | 30.8 | 14.8 | 52.8 | 54.9 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Other long-term liabilities and deferred revenue | 18.6 | -4.2 | 52.5 | 56.9 | 31.6 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Net Cash from Operating Activities | -472.4 | 425.1 | 356.7 | 233.0 | -204.9 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Principal payments received on notes receivable | Not supplied: no such line in the annual statement | Not supplied: no such line in the annual statement | Not supplied: no such line in the annual statement | Not supplied: printed as a dash in the filing | 13.8 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Capital expenditures | -230.2 | -351.4 | -350.9 | -257.7 | -252.3 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Proceeds from sales of assets | 13.2 | 14.5 | 30.7 | 30.5 | 24.2 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Net cash used for other investments | -11.1 | -354.7 | -15.3 | -12.7 | -34.0 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Cash paid for acquisitions, net of cash acquired | -1,185.1 | -1,248.5 | -886.4 | -417.6 | -264.8 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Proceeds from sales of stores | 142.9 | 85.7 | 194.0 | 178.1 | 31.9 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Net Cash from Investing Activities | -1,270.3 | -1,854.4 | -1,027.9 | -479.4 | -481.2 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Borrowings on floor plan notes payable: non-trade, net | 878.7 | 304.8 | 191.7 | 73.3 | 1,542.2 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Borrowings on lines of credit | 12,738.1 | 13,666.5 | 16,217.2 | 11,707.1 | 9,037.0 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Repayments on lines of credit | -12,413.8 | -13,319.7 | -15,808.6 | -11,575.1 | -9,405.5 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Principal payments on long-term debt and finance lease liabilities, scheduled | -35.2 | -64.9 | -40.6 | -29.6 | -36.2 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Principal payments on long-term debt and finance lease liabilities, other | -10.6 | -74.3 | -15.7 | -15.7 | -51.4 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Proceeds from issuance of long-term debt | 79.8 | 408.2 | 786.8 | 741.0 | Not supplied: printed as a dash in the filing | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Principal payments on non-recourse notes payable | -589.5 | -950.2 | -1,314.0 | -959.0 | -1,228.4 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Proceeds from issuance of non-recourse notes payable | 1,872.9 | 1,353.9 | 1,678.5 | 1,095.3 | 1,520.2 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Payment of debt issuance costs | -16.7 | -10.7 | -16.0 | -11.7 | -7.2 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Proceeds from issuance of common stock | 29.7 | 27.3 | 27.5 | 21.0 | 21.2 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Repurchase of common stock | -48.9 | -365.9 | -960.9 | -662.3 | -624.5 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Dividends paid | -52.8 | -56.5 | -55.3 | -42.1 | -41.1 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Payments of contingent consideration related to acquisitions | -14.0 | -11.7 | -9.4 | -9.4 | Not supplied: printed as a dash in the filing | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Other financing activities | -7.9 | 0.8 | -69.1 | -68.3 | -4.0 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Net Cash from Financing Activities | 2,409.8 | 907.6 | 612.1 | 264.5 | 722.3 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| FX Effect on Cash | 33.4 | -4.5 | 4.6 | 4.7 | -3.5 | USD millions | Reported; signed | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Net Cash Change | 700.5 | -526.2 | -54.5 | 22.8 | 32.7 | USD millions | Reported; signed | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Opening Cash | 271.5 | 972.0 | 445.8 | 445.8 | 391.3 | USD millions | Reported; cash, restricted cash and cash equivalents as the cash flow statement defines it, including reserve-account cash | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Closing Cash | 972.0 | 445.8 | 391.3 | 468.6 | 424.0 | USD millions | Reported; cash, restricted cash and cash equivalents as the cash flow statement defines it, including reserve-account cash | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 |
| Cash Interest Paid | 514.3 | 739.7 | 709.4 | 524.7 | 565.7 | USD millions | Reported supplemental disclosure; positive amount paid, includes floor plan and financing interest | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 6 |
| Cash paid for income taxes, net | 222.1 | 242.7 | 201.9 | 137.9 | 116.0 | USD millions | Reported; signed, outflow negative | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 6 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash, restricted cash, and cash equivalents (balance-sheet line) | 941.4 | 402.2 | 341.8 | 374.0 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Accounts receivable, net | 1,105.5 | 1,237.0 | 1,134.1 | 1,132.9 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Inventories, net | 4,753.9 | 5,911.7 | 6,119.6 | 6,624.3 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Other current assets | 136.8 | 223.0 | 262.5 | 261.8 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Total current assets | 6,937.6 | 7,773.9 | 7,858.0 | 8,393.0 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Property and equipment, net | 3,981.4 | 4,629.9 | 4,936.0 | 5,074.7 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Operating lease right-of-use assets | 478.8 | 658.7 | 717.2 | 681.3 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Finance receivables, net | 3,259.9 | 3,868.2 | 4,755.1 | 5,578.6 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Goodwill | 1,930.6 | 2,115.5 | 2,476.7 | 2,736.1 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Franchise value | 2,402.2 | 2,550.3 | 2,777.4 | 2,894.6 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Other non-current assets | 642.0 | 1,526.1 | 1,586.8 | 1,477.7 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Total Assets | 19,632.5 | 23,122.6 | 25,107.2 | 26,836.0 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Floor plan notes payable | 1,347.0 | 2,055.1 | 1,992.6 | 2,062.6 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Floor plan notes payable: non-trade | 2,288.5 | 2,848.0 | 3,016.3 | 4,504.2 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Current maturities of long-term debt | 75.7 | 134.0 | 64.2 | 95.6 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Current maturities of non-recourse notes payable | 33.9 | 58.1 | 69.7 | 19.4 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Trade payables | 288.0 | 333.7 | 339.5 | 434.5 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Accrued liabilities | 899.1 | 1,122.2 | 1,214.4 | 1,289.0 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Total current liabilities | 4,932.2 | 6,551.1 | 6,696.7 | 8,405.3 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Long-term debt, less current maturities | 5,483.7 | 6,119.3 | 7,274.9 | 6,828.2 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Non-recourse notes payable, less current maturities | 1,671.7 | 2,051.2 | 2,404.2 | 2,746.3 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Deferred revenue | 264.1 | 414.2 | 452.7 | 499.4 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Deferred income taxes | 349.3 | 397.1 | 516.3 | 595.7 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Non-current operating lease liabilities | 427.9 | 596.5 | 662.1 | 619.9 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Other long-term liabilities | 220.7 | 319.1 | 471.9 | 500.4 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Total Liabilities | 13,349.6 | 16,448.5 | 18,478.8 | 20,195.2 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Temporary Equity | 44.0 | Not supplied: printed as a dash in the filing | Not supplied: printed as a dash in the filing | Not supplied: printed as a dash in the filing | USD millions | Reported redeemable non-controlling interest; a dash in the filing is not read as zero | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Total stockholders' equity - Lithia Motors, Inc. | 6,213.9 | 6,650.2 | 6,603.2 | 6,614.6 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Non-controlling interest | 25.0 | 23.9 | 25.2 | 26.2 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Total Equity | 6,238.9 | 6,674.1 | 6,628.4 | 6,640.8 | USD millions | Reported | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Total Debt | 10,900.5 | 13,265.7 | 14,821.9 | 16,256.3 | USD millions | Calculated: sum of the six debt lines above at carrying value, net of issuance costs; operating lease liabilities are not added | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 |
| Cash & Equivalents | 825.0 | 225.1 | 109.2 | 108.1 | USD millions | Reported unrestricted cash and cash equivalents from the cash flow supplement; excludes restricted collections | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 79; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 5–6 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Floor plan notes payable: non-trade | Vehicle floor plan | Not supplied: instrument carrying values are not disclosed | 4,504.2 | 4,504.2 | Not supplied: commitment is stated for the facility, not this line | Not supplied: not stated for this line | Not supplied: not stated in any supplied document | USD | 4,504.2 | Not applicable | US Bank facility: Daily Simple SOFR plus 1.10% new vehicle, 1.20% used vehicle and service loaner; Bank of Nova Scotia: CORRA plus 0.30% plus 1.00% to 1.10% | Floating | Daily Simple SOFR (US Bank); CORRA (Bank of Nova Scotia) | Not supplied: differs by facility; US Bank margins are 110 and 120 bps | Not supplied: not stated | Not supplied: not stated for this line | Not supplied: not stated | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 13–14 |
| Floor plan notes payable | Vehicle floor plan | Not supplied: instrument carrying values are not disclosed | 2,062.6 | 2,062.6 | Not supplied: not stated | Not supplied: not stated for this line | Not supplied: not stated in any supplied document | USD | 2,062.6 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45 |
| Daily rental vehicle inventory financing commitments | Inventory financing | Not supplied: instrument carrying values are not disclosed | 3.5 | 3.5 | Not supplied: commitment not stated; remaining available 0.4 | Not supplied: not stated | Not supplied: not stated in any supplied document | USD | 3.5 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45 |
| Revolving lines of credit (CAD and GBP revolvers not shown separately) | Revolving credit | Not supplied: instrument carrying values are not disclosed | 1,736.6 | 1,736.6 | Not supplied: commitment not stated; remaining available 1,226.7 | Not supplied: bank facility described as secured by a substantial amount of assets | Not supplied: not stated in any supplied document | USD | 1,736.6 | Not applicable | Revolver margin 1.00% to 2.00% by leverage ratio (US Bank facility) | Floating | Daily Simple SOFR | Not supplied: stated as a margin range | Not supplied: not stated | US Bank facility matures 2031-02-27; Bank of Nova Scotia facilities mature 2029-03-18 except demand facilities | Not supplied: not stated | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 12–13 |
| Warehouse facilities | Securitisation warehouse | Not supplied: instrument carrying values are not disclosed | 1,743.5 | 1,743.5 | Not supplied: commitment not stated; remaining available 29.4 | Not supplied: not stated | Not supplied: not stated in any supplied document | USD | 1,743.5 | Not applicable | Mizuho facility: Daily Simple SOFR plus 0.825%; other warehouse terms are not stated in the quarterly report | Floating | Daily Simple SOFR | Not supplied: stated for the Mizuho facility only, at 82.5 | Not supplied: not stated | Mizuho commitment termination 2028-07-31; the other warehouse maturities are not stated in the quarterly report | Not supplied: not stated | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 14–15 |
| Non-recourse notes payable | Asset-backed securitisation notes | Not supplied: instrument carrying values are not disclosed | 2,765.7 | 2,765.7 | Not applicable | Not supplied: not stated in this form; notes are non-recourse by name and by the filing's description | Not supplied: not stated in any supplied document | USD | 2,765.7 | Not applicable | Interest rate ranges by series from 3.75% to 7.45% | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Final distribution dates through June 2034 | Not supplied: amortises with the receivables; schedule not stated | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 15 |
| 4.625% Senior notes due 2027 | Senior notes | Not supplied: instrument carrying values are not disclosed | 400.0 | 400.0 | Not applicable | Not supplied: not stated in any supplied document | Not supplied: not stated in any supplied document | USD | 400.0 | Not applicable | 4.625% | Fixed | Not applicable | Not applicable | Not applicable | December 2027 | Not supplied: the filings state one maturity date and do not say whether principal amortises before it | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 99 |
| 3.875% Senior notes due 2029 | Senior notes | Not supplied: instrument carrying values are not disclosed | 800.0 | 800.0 | Not applicable | Not supplied: not stated in any supplied document | Not supplied: not stated in any supplied document | USD | 800.0 | Not applicable | 3.875% | Fixed | Not applicable | Not applicable | Not applicable | June 2029 | Not supplied: the filings state one maturity date and do not say whether principal amortises before it | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 99 |
| 5.500% Senior notes due 2030 | Senior notes | Not supplied: instrument carrying values are not disclosed | 600.0 | 600.0 | Not applicable | Not supplied: not stated in any supplied document | Not supplied: not stated in any supplied document | USD | 600.0 | Not applicable | 5.500% | Fixed | Not applicable | Not applicable | Not applicable | October 2030 | Not supplied: the filings state one maturity date and do not say whether principal amortises before it | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 99 |
| 4.375% Senior notes due 2031 | Senior notes | Not supplied: instrument carrying values are not disclosed | 550.0 | 550.0 | Not applicable | Not supplied: not stated in any supplied document | Not supplied: not stated in any supplied document | USD | 550.0 | Not applicable | 4.375% | Fixed | Not applicable | Not applicable | Not applicable | January 2031 | Not supplied: the filings state one maturity date and do not say whether principal amortises before it | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 99 |
| Real estate mortgages, finance lease obligations and other debt | Mortgages and finance leases | Not supplied: instrument carrying values are not disclosed | 1,114.6 | 1,114.6 | Not applicable | Not supplied: not stated for this line | Not supplied: not stated in any supplied document | USD | 1,114.6 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Various dates through October 2045 at 31 December 2025 | Not supplied: not stated | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 99 |
| Financing cost adjustment | Unamortized debt issuance costs | -24.4 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -24.4 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total revenues | LTM | USD 37,634.9m | USD 29,009.4m | USD 28,437.1m | USD 38,207.2m | Calculated | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 | Trailing twelve months to 2026-09-30; stubs are the nine-month periods |
| EBITDA (Reported) | LTM | USD 2,076.6m | USD 1,650.6m | USD 1,633.8m | USD 2,093.4m | Calculated | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11 | Full-year EBITDA is calculated by the issuer's definition; nine-month figures are stated by the issuer |
| Cash Interest Paid | LTM | USD 709.4m | USD 565.7m | USD 524.7m | USD 750.4m | Calculated | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 6 | Cash paid, including floor plan and financing-operations interest |
| Net income | LTM | USD 825.9m | USD 656.6m | USD 688.0m | USD 794.5m | Calculated | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 3 | Includes non-controlling interests |
| Net Cash from Operating Activities | LTM | USD 356.7m | USD -204.9m | USD 233.0m | USD -81.2m | Calculated | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 | Reported operating cash flow before the issuer's floor plan and finance receivable adjustments |
| Capital expenditures (outflow shown as a positive amount) | LTM | USD 350.9m | USD 252.3m | USD 257.7m | USD 345.5m | Calculated | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 5 | Purchases of property and equipment as printed in investing activities |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 10,900.5 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | 2,080.7 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | FY2023 / 2023-12-31 | USD | US$m | 5.24 | Calculated | Tier 1 statements with calculated EBITDA | Full perimeter debt including floor plan and financing-operations debt; EBITDA calculated by the issuer's definition |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 10,075.5 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | 2,080.7 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | FY2023 / 2023-12-31 | USD | US$m | 4.84 | Calculated | Tier 1 statements with calculated EBITDA | Net of unrestricted cash only; Full perimeter debt including floor plan and financing-operations debt; EBITDA calculated by the issuer's definition |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 2,080.7 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | 514.3 | T4.5 Cash Interest Paid for years, T4.8 for the trailing row | FY2023 / 2023-12-31 | USD | US$m | 4.05 | Calculated | Tier 1 statements with calculated EBITDA | Cash interest includes floor plan and financing-operations interest |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 13,265.7 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | 2,048.6 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | FY2024 / 2024-12-31 | USD | US$m | 6.48 | Calculated | Tier 1 statements with calculated EBITDA | Full perimeter debt including floor plan and financing-operations debt; EBITDA calculated by the issuer's definition |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 13,040.6 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | 2,048.6 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | FY2024 / 2024-12-31 | USD | US$m | 6.37 | Calculated | Tier 1 statements with calculated EBITDA | Net of unrestricted cash only; Full perimeter debt including floor plan and financing-operations debt; EBITDA calculated by the issuer's definition |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 2,048.6 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | 739.7 | T4.5 Cash Interest Paid for years, T4.8 for the trailing row | FY2024 / 2024-12-31 | USD | US$m | 2.77 | Calculated | Tier 1 statements with calculated EBITDA | Cash interest includes floor plan and financing-operations interest |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 14,821.9 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | 2,076.6 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | FY2025 / 2025-12-31 | USD | US$m | 7.14 | Calculated | Tier 1 statements with calculated EBITDA | Full perimeter debt including floor plan and financing-operations debt; EBITDA calculated by the issuer's definition |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 14,712.7 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | 2,076.6 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | FY2025 / 2025-12-31 | USD | US$m | 7.08 | Calculated | Tier 1 statements with calculated EBITDA | Net of unrestricted cash only; Full perimeter debt including floor plan and financing-operations debt; EBITDA calculated by the issuer's definition |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 2,076.6 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | 709.4 | T4.5 Cash Interest Paid for years, T4.8 for the trailing row | FY2025 / 2025-12-31 | USD | US$m | 2.93 | Calculated | Tier 1 statements with calculated EBITDA | Cash interest includes floor plan and financing-operations interest |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 16,256.3 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | 2,093.4 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | 2026-09-30 | USD | US$m | 7.77 | Calculated | Tier 1 and 2b with calculated EBITDA | Full perimeter debt including floor plan and financing-operations debt; EBITDA calculated by the issuer's definition; trailing twelve months |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 16,148.2 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | 2,093.4 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | 2026-09-30 | USD | US$m | 7.71 | Calculated | Tier 1 and 2b with calculated EBITDA | Net of unrestricted cash only; Full perimeter debt including floor plan and financing-operations debt; EBITDA calculated by the issuer's definition; trailing twelve months |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 2,093.4 | T4.4 EBITDA (Reported) for years, T4.8 for the trailing row | 750.4 | T4.5 Cash Interest Paid for years, T4.8 for the trailing row | 2026-09-30 | USD | US$m | 2.79 | Calculated | Tier 1 and 2b with calculated EBITDA | Cash interest includes floor plan and financing-operations interest; trailing twelve months |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 10,900.5 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | Not supplied: Adjusted EBITDA is not stated for FY2023 | T4.4 EBITDA (Adjusted) | FY2023 / 2023-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA stated for the year | Not Calculable | Not applicable | Issuer states Adjusted EBITDA only for quarters and trailing periods |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 10,075.5 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | Not supplied: Adjusted EBITDA is not stated for FY2023 | T4.4 EBITDA (Adjusted) | FY2023 / 2023-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA stated for the year | Not Calculable | Not applicable | Issuer states Adjusted EBITDA only for quarters and trailing periods |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: Adjusted EBITDA is not stated for FY2023 | T4.4 EBITDA (Adjusted) | 514.3 | T4.5 Cash Interest Paid for years, T4.8 for the trailing row | FY2023 / 2023-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA stated for the year | Not Calculable | Not applicable | Issuer states Adjusted EBITDA only for quarters and trailing periods |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 13,265.7 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | Not supplied: Adjusted EBITDA is not stated for FY2024 | T4.4 EBITDA (Adjusted) | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA stated for the year | Not Calculable | Not applicable | Issuer states Adjusted EBITDA only for quarters and trailing periods |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 13,040.6 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | Not supplied: Adjusted EBITDA is not stated for FY2024 | T4.4 EBITDA (Adjusted) | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA stated for the year | Not Calculable | Not applicable | Issuer states Adjusted EBITDA only for quarters and trailing periods |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: Adjusted EBITDA is not stated for FY2024 | T4.4 EBITDA (Adjusted) | 739.7 | T4.5 Cash Interest Paid for years, T4.8 for the trailing row | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA stated for the year | Not Calculable | Not applicable | Issuer states Adjusted EBITDA only for quarters and trailing periods |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 14,821.9 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | Not supplied: Adjusted EBITDA is not stated for FY2025 | T4.4 EBITDA (Adjusted) | FY2025 / 2025-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA stated for the year | Not Calculable | Not applicable | Issuer states Adjusted EBITDA only for quarters and trailing periods |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 14,712.7 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | Not supplied: Adjusted EBITDA is not stated for FY2025 | T4.4 EBITDA (Adjusted) | FY2025 / 2025-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA stated for the year | Not Calculable | Not applicable | Issuer states Adjusted EBITDA only for quarters and trailing periods |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: Adjusted EBITDA is not stated for FY2025 | T4.4 EBITDA (Adjusted) | 709.4 | T4.5 Cash Interest Paid for years, T4.8 for the trailing row | FY2025 / 2025-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA stated for the year | Not Calculable | Not applicable | Issuer states Adjusted EBITDA only for quarters and trailing periods |
| Total debt / adjusted EBITDA | Gross debt / trailing Adjusted EBITDA | 16,256.3 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | 1,627.2 | EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11 | 2026-09-30 | USD | US$m | 9.99 | Calculated | Tier 1 debt with issuer non-GAAP EBITDA | Issuer Adjusted EBITDA is after floor plan and financing interest while this debt and cash interest include them; the ratio is not comparable with the reported-EBITDA rows |
| Net debt / adjusted EBITDA | Net debt / trailing Adjusted EBITDA | 16,148.2 | Net debt data row; 10-K_2024-12-31_lad-20241231.htm.jsonl, page 76; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 74–75; 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 2–3 | 1,627.2 | EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11 | 2026-09-30 | USD | US$m | 9.92 | Calculated | Tier 1 debt with issuer non-GAAP EBITDA | Issuer Adjusted EBITDA is after floor plan and financing interest while this debt and cash interest include them; the ratio is not comparable with the reported-EBITDA rows |
| Adjusted EBITDA / cash interest | Trailing Adjusted EBITDA / cash interest paid | 1,627.2 | EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11 | 750.4 | T4.5 Cash Interest Paid for years, T4.8 for the trailing row | 2026-09-30 | USD | US$m | 2.17 | Calculated | Tier 1 cash interest with issuer non-GAAP EBITDA | Issuer Adjusted EBITDA is after floor plan and financing interest while this debt and cash interest include them; the ratio is not comparable with the reported-EBITDA rows |
| Issuer net debt / trailing Adjusted EBITDA | Net debt (issuer) / TTM Adjusted EBITDA | 4,992.2 | EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 46 | 1,627.2 | EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11 | 2026-09-30 | USD | US$m | 3.07 | Verified | Issuer non-GAAP, stated 3.07x | Issuer net debt excludes inventory-related and financing-operations debt and deducts marketable securities |
| Issuer net debt / trailing Adjusted EBITDA | Net debt (issuer) / TTM Adjusted EBITDA | 4,470.9 | EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11 | 1,701.9 | EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11 | 2025-09-30 | USD | US$m | 2.63 | Verified | Issuer non-GAAP, stated 2.63x | Prior-year comparative from the same release; same exclusions |
| Inventory-related debt / total debt | Inventory-related debt / total debt x 100 | 6,570.3 | EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45 | 16,256.3 | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45 | 2026-09-30 | USD | % | 40.42 | Calculated | Tier 1 and issuer table | Issuer-defined inventory-related debt |
| Financing-operations debt / total debt | Financing-operations related debt / total debt x 100 | 4,509.2 | EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45 | 16,256.3 | 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 45 | 2026-09-30 | USD | % | 27.74 | Calculated | Tier 1 and issuer table | Issuer-defined financing-operations related debt |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Margin | Gross profit / revenue (%) | 16.84 | 15.37 | 15.23 | 15.34 | 15.22 | Down from 2023 | Calculated from the income statement |
| Margin | Operating income / revenue (%) | 5.45 | 4.33 | 4.24 | 4.41 | 4.15 | Down from 2023 | Calculated from the income statement; operating income includes financing operations income net of its interest |
| Margin | SG&A / gross profit (%) | 63.01 | 67.53 | 68.81 | 67.99 | 69.95 | Up from 2023 | Calculated from the income statement; the company reports adjusted ratios separately |
| Margin | EBITDA (Reported) / revenue (%) | 6.70 | 5.66 | 5.52 | 5.75 | 5.69 | Down from 2023 | Calculated from the income statement; before floor plan and financing interest |
| Financing operations | Financing operations income (loss), USD millions | -45.9 | 8.4 | 74.6 | 51.7 | 90.0 | Up | Reported; 2024 as revised |
| Cash flow | Issuer adjusted net cash from operating activities, USD millions | 1,349.1 | 1,246.8 | 1,291.3 | 914.7 | 2,125.2 | Up in 2026 | Issuer non-GAAP; adds back floor plan borrowings and finance receivables activity; 9M 2026 includes 1,138.3 from converting inventory-secured revolvers to floor plan facilities; 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 57–58; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 43 |
| Credit quality | Net credit losses on managed receivables, USD millions | 62.0 | 88.0 | 74.8 | 54.1 | 47.8 | Down in 2026 | Reported; excludes Canadian and U.K. portfolios; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 50; 10-Q_2026-09-30_lad-20260930.htm.jsonl, page 34 |
| Funding float | Deferred revenue, USD millions (period end) | 264.1 | 414.2 | 452.7 | Not supplied: balance at 2025-09-30 not printed | 499.4 | Up | Reported; customer-funded obligation that is not debt |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA before any adjustment, as an input to total debt / EBITDA | Issuer EBITDA adds back floor plan, other and financing-operations interest; issuer Adjusted EBITDA then deducts floor plan and financing interest and non-core items | EX-99.1_2026-10-21_a2026q3exx99earningsrelease.htm.jsonl, page 11 | 9M 2025; 9M 2026; all years by calculation | 2026-09-30: reported EBITDA for nine months 1,650.6 versus Adjusted EBITDA 1,263.1, a difference of 387.5 | Financial foundation; Fundamental credit | Reported EBITDA is the denominator of the fixed ratios; Adjusted EBITDA is shown beside it, labelled |
| Debt perimeter | Every balance-sheet debt line at carrying value, current plus long-term | Issuer total debt equals the balance-sheet lines; issuer net debt excludes inventory-related debt of 6,570.3 and financing-operations debt of 4,509.2 | 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 45–46 | 2026-09-30 | Total debt 16,256.3 versus issuer net debt 4,992.2, a difference of 11,264.1 | Financial foundation; Fundamental credit | Both are shown; matched-funding debt is not industrial leverage |
| Long-term debt total | Balance-sheet carrying value including floor plan notes | Annual debt note total excludes floor plan notes: 9,840.8 at 2025-12-31 against balance-sheet debt of 14,821.9 | 10-K_2025-12-31_lad-20251231.htm.jsonl, page 99 | FY2023; FY2024; FY2025 | Floor plan notes 5,008.9 and issuance costs 27.8 at 2025-12-31 | Financial foundation | Total Debt uses the balance-sheet lines; the principal bridge is in the Debt principal to carrying value table |
| Cash | Cash & Equivalents as unrestricted cash and equivalents | Balance-sheet line includes restricted collections: 374.0 against 108.1 unrestricted at 2026-09-30 | 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 5–6 | All balance dates | Restricted collections 265.9 at 2026-09-30 | Financial foundation; Fundamental credit | Unrestricted cash is used in net debt and liquidity |
| Net income 2024 | Latest filed comparative | Net income 821.6 first reported; 816.3 as revised in the later annual report | 10-K_2024-12-31_lad-20241231.htm.jsonl, page 77; 10-K_2025-12-31_lad-20251231.htm.jsonl, page 90 | FY2024 | 5.3 lower net income; operating income 7.0 lower | Financial foundation | The revised figure is used |
| Depreciation and amortization | Income statement depreciation and amortization used in EBITDA | Cash flow statement D&A is higher: 323.6 against 262.4 in 2025, and the filings do not reconcile the two line by line | 10-K_2025-12-31_lad-20251231.htm.jsonl, pages 75–77 | FY2023; FY2024; FY2025 | 61.2 in 2025 | Financial foundation | The income statement figure is used, matching the issuer's EBITDA reconciliation |
| Non-debt funding float | Customer-funded, non-interest-bearing obligations are working-capital float and not debt | Deferred revenue 499.4 and contract liabilities of 549.7 on aftersales and 155.2 on lease vehicles at 2026-09-30 sit outside debt | 10-Q_2026-09-30_lad-20260930.htm.jsonl, pages 3 and 11 | 2026-09-30 | Deferred revenue up from 264.1 at 2023-12-31 | Fundamental credit | Flagged as float; not added to debt |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and interest cover on the full perimeter | Ready with Limitations | Fiscal-year EBITDA is calculated; interim columns rest on unaudited statements | Use the reported-EBITDA ratios with the company's own measure beside them |
| Liquidity and available funds | Ready with Limitations | Available credit moves with a monthly borrowing base; no schedule of near-term maturities for revolvers and warehouse lines | Obtain the facility-level maturity profile |
| Debt stack by seniority | Not Ready | No instrument rank, collateral or guarantor is stated in any supplied document | Obtain the executed credit agreement and note indentures |
| Covenant headroom | Not Ready | Covenant types are named without levels | Obtain the executed credit agreement |
| Adjusted leverage history | Ready with Limitations | Adjusted EBITDA stated only for 2026 and 2025 interim periods | Obtain the fourth-quarter 2025 release or define a house-adjusted measure |

## Calculations

| Calculation ID | Quantity | Inputs | Result | Period and unit |
| --- | --- | --- | --- | --- |
| CALC-1 | Total debt FY2023 | 1,347.0 + 2,288.5 + 75.7 + 33.9 + 5,483.7 + 1,671.7 | 10,900.5 | 2023-12-31, USD million |
| CALC-2 | Total debt FY2024 (revised) | 2,055.1 + 2,848.0 + 134.0 + 58.1 + 6,119.3 + 2,051.2 | 13,265.7 | 2024-12-31, USD million |
| CALC-3 | Total debt FY2025 | 1,992.6 + 3,016.3 + 64.2 + 69.7 + 7,274.9 + 2,404.2 | 14,821.9 | 2025-12-31, USD million |
| CALC-4 | Total debt at 30 September 2026 | 2,062.6 + 4,504.2 + 95.6 + 19.4 + 6,828.2 + 2,746.3 | 16,256.3, equal to the company's total debt of 16,256.3 | 2026-09-30, USD million |
| CALC-5 | Net debt FY2023 | 10,900.5 - 825.0 | 10,075.5 | 2023-12-31, USD million |
| CALC-6 | Net debt FY2024 | 13,265.7 - 225.1 | 13,040.6 | 2024-12-31, USD million |
| CALC-7 | Net debt FY2025 | 14,821.9 - 109.2 | 14,712.7 | 2025-12-31, USD million |
| CALC-8 | Net debt at 30 September 2026 | 16,256.3 - 108.1 | 16,148.2 | 2026-09-30, USD million |
| CALC-9 | EBITDA (Reported) FY2023 | 1,011.7 net income + 150.9 floor plan interest + 201.2 other interest + 170.5 financing operations interest + 350.6 income tax + 195.8 depreciation and amortization | 2,080.7 | FY2023, USD million |
| CALC-10 | EBITDA (Reported) FY2024 | 816.3 + 278.8 + 257.8 + 195.1 + 255.0 + 245.6 | 2,048.6 | FY2024, USD million |
| CALC-11 | EBITDA (Reported) FY2025 | 825.9 + 228.2 + 275.5 + 202.1 + 282.5 + 262.4 | 2,076.6 | FY2025, USD million |
| CALC-12 | EBITDA (Reported) nine months 2025, recomputed against the issuer's stated figure | 688.0 + 169.8 + 200.5 + 150.0 + 230.9 + 194.6 | 1,633.8, equal to the issuer's 1,633.8 | 9M 2025, USD million |
| CALC-13 | EBITDA (Reported) nine months 2026, recomputed against the issuer's stated figure | 656.6 + 195.9 + 196.0 + 161.4 + 228.4 + 212.3 | 1,650.6, equal to the issuer's 1,650.6 | 9M 2026, USD million |
| CALC-14 | EBITDA (Reported) trailing twelve months | 2,076.6 + 1,650.6 - 1,633.8 | 2,093.4 | LTM 2026-09-30, USD million |
| CALC-15 | Cash interest paid trailing twelve months | 709.4 + 565.7 - 524.7 | 750.4 | LTM 2026-09-30, USD million |
| CALC-16 | Total revenues trailing twelve months | 37,634.9 + 29,009.4 - 28,437.1 | 38,207.2 | LTM 2026-09-30, USD million |
| CALC-17 | Net income trailing twelve months | 825.9 + 656.6 - 688.0 | 794.5 | LTM 2026-09-30, USD million |
| CALC-18 | Operating cash flow trailing twelve months | 356.7 + (-204.9) - 233.0 | -81.2 | LTM 2026-09-30, USD million |
| CALC-19 | Capital expenditures trailing twelve months | 350.9 + 252.3 - 257.7 | 345.5 | LTM 2026-09-30, USD million |
| CALC-20 | Principal total beside carrying debt FY2023 | 7,296.8 note total + 3,635.5 floor plan notes | 10,932.3 | 2023-12-31, USD million |
| CALC-21 | Principal total beside carrying debt FY2024 | 8,387.7 + 4,903.1 | 13,290.8 | 2024-12-31, USD million |
| CALC-22 | Principal total beside carrying debt FY2025 | 9,840.8 + 5,008.9 | 14,849.7 | 2025-12-31, USD million |
| CALC-23 | Principal total beside carrying debt at 30 September 2026 | 16,256.3 + 24.4 issuance costs | 16,280.7 | 2026-09-30, USD million |
| CALC-24 | Increase in total debt, 2023 to September 2026 | 16,256.3 - 10,900.5 | 5,355.8 | USD million |
| CALC-25 | Increase in floor plan notes, 2023 to September 2026 | (2,062.6 + 4,504.2) - (1,347.0 + 2,288.5) = 6,566.8 - 3,635.5 | 2,931.3 | USD million |
| CALC-26 | Increase in non-recourse notes, 2023 to September 2026 | (19.4 + 2,746.3) - (33.9 + 1,671.7) = 2,765.7 - 1,705.6 | 1,060.1 | USD million |
| CALC-27 | Share of the debt increase that is floor plan and non-recourse notes | (2,931.3 + 1,060.1) / 5,355.8 x 100 | 74.5% | Percent |
| CALC-28 | Debt excluding inventory-related and financing-operations debt | 16,256.3 - 6,570.3 - 4,509.2 | 5,176.8 | 2026-09-30, USD million |
| CALC-29 | Free cash flow after capex, nine months 2026 and 2025 | -204.9 - 252.3; 233.0 - 257.7 | -457.2; -24.7 | 9M 2026; 9M 2025, USD million |
| CALC-30 | Shareholder returns, nine months 2026 | 624.5 repurchases + 41.1 dividends | 665.6 | 9M 2026, USD million |
| CALC-31 | Immediately available funds | 108.1 + 76.1 + 1,256.5 | 1,440.7 | 2026-09-30, USD million |
| CALC-32 | Reconciling items from scheduled principal to carrying debt | 5,008.9 + 1,043.0 + 1,570.8 + 1,251.0 + 2,473.9 - 27.8; then 3,502.1 + 11,319.8 | 11,319.8; 14,821.9 | 2025-12-31, USD million |
| CALC-33 | Scheduled principal ladder total | 71.6 + 536.5 + 124.0 + 889.4 + 738.9 + 1,141.7 | 3,502.1 | 2025-12-31, USD million |
| CALC-34 | Scheduled principal due in 2026 and 2027 | 71.6 and 536.5 | 71.6; 536.5 | USD million |
| CALC-35 | EBITDA bridge nine months 2026 | 1,650.6 - 195.9 - 161.4 - 1.5 + 0.7 - 9.2 - 43.7 + 3.2 + 20.3 | 1,263.1 | 9M 2026, USD million |
| CALC-36 | Issuer net debt to trailing Adjusted EBITDA | 4,992.2 / 1,627.2 | 3.07 | 2026-09-30, times |
| CALC-37 | Total debt, annual note total plus floor plan notes, tie at 2025-12-31 | 9,840.8 - 27.8 + 5,008.9 | 14,821.9 | 2025-12-31, USD million |

## Gaps

Adjusted EBITDA is not stated for 2023, 2024 or 2025 as a year, only for quarters, nine-month periods and trailing twelve months, so the adjusted ratios for those years are not calculable; severity is medium, and a fourth-quarter 2025 release or a house-adjusted measure would close it.

The legal rank, collateral and guarantors of every debt instrument are not stated in any supplied document, so no facility is drawn in the debt stack by seniority and the senior notes, bank facilities, non-recourse notes and mortgages are all left out of it; severity is high, and the executed credit agreement and note indentures would close it.

Instrument-level carrying values are not disclosed, only the aggregate unamortized issuance costs, so debt by instrument is shown at outstanding principal with one financing cost adjustment row; severity is low.

The scheduled principal table at 31 December 2025 leaves out revolving lines of credit, warehouse facilities, non-recourse notes and floor plan notes, and no later schedule is supplied, so the full maturity wall and the first operational break in the funding are not established; severity is medium, and a facility-level maturity profile would close it.

Several lines are printed as a dash and are not read as zero: asset impairments for 2023 and 2024, redeemable non-controlling interest income for 2025, the investment gain for 2023, temporary equity at 2024, 2025 and September 2026, notes receivable proceeds for the nine months of 2025, and long-term debt issuance and contingent consideration for the nine months of 2026; severity is low. Lines that exist in one statement and not the other are shown as not supplied for the periods without them.

The interim cash flow statements are printed year to date only, so discrete second and third quarter flows are not stated and are not constructed; severity is low.

The October 2026 acquisition has no stated purchase price and the dividend payable on 20 November 2026 has no stated total, so no pro forma net debt is stated; severity is low.

The 2024 income statement and balance sheet are taken as revised from the 2025 annual report, so the 2024 net income first reported is not used, and the balance sheet at 31 December 2023 comes from the 2024 annual report because the 2025 annual report does not print it; severity is low.

Covenant levels are not stated, so headroom is not calculable; severity is high, and the executed credit agreement would close it.

## Next module

The orchestrator selects the next module.
