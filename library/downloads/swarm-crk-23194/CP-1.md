# Financial foundation for Comstock Resources Inc (crk-23194)

## Request

Issuer: Comstock Resources Inc (issuer crk-23194), as of 2026-11-18. Pathway: credit snapshot. Scope: extract and normalise the issuer's financial statements for FY2023 to FY2025 and the nine months to 2026-09-30, and build the debt, liquidity, leverage and coverage tables from the supplied filings and releases.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_crk.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-21 | 573187cc759c1ddea7c19cbed85103f9de784b84068ad1f069616d53b3e50b5d | FY2023 balance sheet and FY2024 comparatives, debt note, cash interest paid |
| 10-K_2025-12-31_crk.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-19 | 12ac885c29363474639ac322947a020de6bb51304e642efc61d014faf9dc6c42 | FY2023 to FY2025 income statement and cash flow statement, FY2024 and FY2025 balance sheets, debt note and maturity table, commitments, reserves and discussion of results |
| 10-Q_2026-03-31_crk.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-06 | 0ab54d7a64d72e20c298d655c35f6bf913d9d4292578a3cf7c1d924042c6f0d1 | Read for the Pinnacle Gas Services redemption agreement and credit agreement; no figure carried into the tables |
| 10-Q_2026-06-30_crk.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-30 | b32ec30d3a928a0c7e848a82cfe993544f549cf4d36b65127a3d8ded2384f633 | Read for the Pinnacle Gas Services ownership change; no figure carried into the tables |
| 10-Q_2026-09-30_crk.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-05 | ac2df52d79abc76f06043e3b129bdcf68705d2e5a4044e8b86abd40d62a5351a | Nine-month 2026 and 2025 statements, 2026-09-30 balance sheet, debt and facility terms, liquidity, subsequent events, cash interest paid |
| EX99.1_2026-03-31_crk_crk-ex99-1-htm.htm.jsonl | News release (Exhibit 99.1) reporting first quarter 2026 results | 2026-05-05 | 07421ce1120c7d1aa01229881aa6226301661e78bad274f77f20b9315c629392 | Read for issuer-defined measures; no figure carried into the tables |
| EX99.1_2026-06-30_crk_crk-ex99-1-htm.htm.jsonl | News release (Exhibit 99.1) reporting second quarter 2026 results | 2026-07-29 | 6e7daf261ae302c5c1acf6af33c14648ece4908285b4f9b8d17c9eaf1b1b92d6 | Read for the announcement that the Pinnacle Gas Services equity sale proceeds retired its preferred equity and indebtedness |
| EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl | News release (Exhibit 99.1) reporting third quarter 2026 results | 2026-11-04 | 713c0c09d0c85716b5e5e1f5fa9c725fe47ad70dbe28a00e48d93cc02a70032e | Issuer-stated adjusted EBITDAX for nine months 2026 and 2025, operating cost data, announcement of the sale to SOCAR |

Earlier module output used by this module:

| Module | sha256 |
| --- | --- |
| Source readiness (CP-0) | 4d828ec134dc85e81a0498171f16731f7ee18c8c27f3ac9fe91923f8ecc46280 |

## Findings

### Bottom line

Reported leverage of 2.37x net debt to LTM EBITDA at 2026-09-30 overstates credit strength, because that EBITDA includes asset-sale and non-cash hedge gains; on an analyst-adjusted basis net leverage is 3.49x, so creditors should size risk off the higher figure.
Basis: calculation C6; calculation C8; calculation C12

Operating cash flow has run below capital spending in every period shown, so asset sales, partner capital and bank borrowings fund the gap. Net debt rose from USD 2,785.14 million at year-end 2025 to USD 3,338.34 million at 2026-09-30. Interest cover is 6.71x EBITDA to cash interest and 4.55x on normalised EBITDA, but the 2026-11-04 asset sale and bank facility amendment are not in these figures.
Basis: calculation C9; calculation C11; calculation C6; 10-Q_2026-09-30_crk.htm.jsonl, page 21

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 2.58 | 2.56 | x | EBITDA (Reported) calculated as net income plus interest expense, income taxes and DD&A; debt at balance-sheet carrying value; consolidated perimeter including PGS |
| FY2024 / 2024-12-31 | 4.63 | 4.62 | x | EBITDA (Reported) calculated as net income plus interest expense, income taxes and DD&A; debt at balance-sheet carrying value; consolidated perimeter including PGS |
| FY2025 / 2025-12-31 | 2.05 | 2.03 | x | EBITDA (Reported) calculated as net income plus interest expense, income taxes and DD&A; debt at balance-sheet carrying value; consolidated perimeter including PGS |
| 2026-09-30 | 2.38 | 2.37 | x | LTM to 2026-09-30 constructed as FY2025 plus nine months 2026 less nine months 2025; EBITDA (Reported) includes the sale gains and unrealized hedge gains shown in the Normalization register; consolidated perimeter including PGS |

Reported EBITDA includes non-operating gains in FY2025 and the last twelve months, so these ratios flatter leverage; the normalised ratio is in the Calculation register.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 6.36 | x | EBITDA (Reported) over cash interest paid as printed in the cash flow supplement; consolidated perimeter |
| FY2024 / 2024-12-31 | 3.36 | x | EBITDA (Reported) over cash interest paid as printed in the cash flow supplement; consolidated perimeter |
| FY2025 / 2025-12-31 | 6.51 | x | EBITDA (Reported) over cash interest paid as printed in the cash flow supplement; consolidated perimeter |
| 2026-09-30 | 6.71 | x | LTM EBITDA (Reported) over LTM cash interest paid, both constructed as FY2025 plus nine months 2026 less nine months 2025 |

Cash interest paid is a cash figure and differs from interest expense, so cover on expense would differ.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 16.669 | Not supplied: the facility commitments at 2023-12-31 are not stated in the supplied sources | US$m | Cash at 2023-12-31; the facility commitments at that date are not stated in the supplied sources |
| FY2024 / 2024-12-31 | 6.799 | 1,085.000 | US$m | Cash at 2024-12-31; undrawn is commitments of 1,500.000 less 415.000 drawn on the Comstock bank credit facility |
| FY2025 / 2025-12-31 | 23.930 | 1,240.000 | US$m | Cash at 2025-12-31; undrawn is commitments of 1,500.000 less 260.000 drawn on the Comstock bank credit facility |
| 2026-09-30 | 18.633 | 700.000 | US$m | Cash at 2026-09-30; undrawn is commitments of 1,500.000 less 800.000 drawn on the Comstock bank credit facility; excludes the undrawn PGS facility of 150.000, which is restricted to PGS midstream activities, and the issuer's reported unused capacity of 850.000 includes it |

The undrawn amount is the borrowing capacity of the Comstock facility only and cash at 2026-09-30 includes cash that PGS holds and Comstock cannot use for general purposes.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2027 | 800.000 | US$m | Comstock bank credit facility drawn amount at 2026-09-30, which matured on 2027-11-15 at that date; the amendment of 2026-11-04, after the balance-sheet date, moves the maturity to 2028-11-15 and extends it to 2031-11-15 only after the SOCAR sale closes and debt is repaid |
| FY2029 | 1,623.880 | US$m | 6.75% senior notes, maturing 2029-03-01; principal at 2026-09-30 |
| FY2030 | 965.000 | US$m | 5.875% senior notes, due 2030; exact maturity date not printed; principal at 2026-09-30 |

Contractual principal at the balance-sheet date, before the 2026-11-04 amendment; the PGS facility is undrawn and no other instrument matures before 2029.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis |
| --- | --- | --- | --- | --- | --- | --- |
| Total revenues and other operating income | 1,565.234 | 1,254.455 | 2,220.289 | 2,114.813 | US$m | Reported; LTM constructed; includes gas services pass-through and gains on sale |
| EBITDA (Reported) | 1,023.915 | 638.189 | 1,372.696 | 1,409.072 | US$m | Calculated: net income plus interest expense, income taxes and DD&A; LTM constructed |
| Net cash provided by operating activities | 1,016.846 | 620.337 | 899.607 | 846.583 | US$m | Reported; LTM constructed |
| Capital expenditures (cash flow statement) | 1,425.086 | 1,097.478 | 1,349.280 | 1,665.388 | US$m | Reported as an outflow, shown positive; LTM constructed |
| Operating cash flow less capital expenditures | -408.240 | -477.141 | -449.673 | -818.805 | US$m | Calculated; negative means spending exceeded operating cash flow |
| Total debt (carrying value) | 2,640.391 | 2,952.090 | 2,809.066 | 3,356.968 | US$m | Reported long-term debt, net of discount and issuance costs |
| Net debt | 2,623.722 | 2,945.291 | 2,785.136 | 3,338.335 | US$m | Calculated: total debt less cash and cash equivalents |
| Total debt / EBITDA | 2.58 | 4.63 | 2.05 | 2.38 | x | Calculated on EBITDA (Reported) |
| Net debt / EBITDA | 2.56 | 4.62 | 2.03 | 2.37 | x | Calculated on EBITDA (Reported) |
| EBITDA / cash interest | 6.36 | 3.36 | 6.51 | 6.71 | x | Calculated on EBITDA (Reported) and cash interest paid |
| Net debt / EBITDA excluding sale gains and unrealized hedge gains | 2.86 | 3.53 | 2.73 | 3.49 | x | Analyst Judgement normalisation; see the Normalization register |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 2,640.391 | 16.669 | 2,623.722 | US$m | Reported at 2023-12-31; gross debt is balance-sheet long-term debt at carrying value (no current portion is presented), which includes no lease or securitization; contractual principal 2,668.880 (bank facility 480.000, 6.75% notes 1,223.880, 5.875% notes 965.000), a premium of 5.138 and issuance costs of -33.627 |
| FY2024 / 2024-12-31 | 2,952.090 | 6.799 | 2,945.291 | US$m | Reported at 2024-12-31; gross debt is carrying value; contractual principal 3,003.880 (bank facility 415.000, 6.75% notes 1,623.880, 5.875% notes 965.000) |
| FY2025 / 2025-12-31 | 2,809.066 | 23.930 | 2,785.136 | US$m | Reported at 2025-12-31; gross debt is carrying value; contractual principal 2,848.880 (bank facility 260.000, 6.75% notes 1,623.880, 5.875% notes 965.000) |
| 2026-09-30 | 3,356.968 | 18.633 | 3,338.335 | US$m | Reported at 2026-09-30, interim; gross debt is carrying value; contractual principal 3,388.880 (bank facility 800.000, 6.75% notes 1,623.880, 5.875% notes 965.000); operating leases are separate balance-sheet lines and are not in gross debt; before the 2026-11-04 sale and facility amendment |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 3,388.880 | -31.912 | 3,356.968 | US$m | Principal is the sum of the debt maturing rows. Reconciling items are the discount on the 6.75% notes of -12.619 and unamortised debt issuance costs of -19.293; no debt is left out of the ladder because the PGS facility is undrawn |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Purchase and sale agreement with SOCAR to sell non-operated interests in upstream assets and in PGS for cash | 2026-11-04 | Not supplied: the USD 1,650 million price is subject to customary adjustments and the sale has not closed, so its net effect on net debt is not stated | Not supplied: no source states net debt after the sale and the planned repayment of the bank facility and part of the 6.75% notes | Not supplied: net debt after the sale is not stated, and EBITDA of the interests sold is not stated | US$m | Source: 10-Q_2026-09-30_crk.htm.jsonl, pages 21, 30; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 3. Effective date of the sale is 2026-07-01 and closing is expected by the end of 2026; the amended bank facility (maturity 2028-11-15, borrowing base initially 1,600.000 after closing) is also not reflected in any period figure |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 1,565.234 | 1,023.915 | US$m | Revenue is total revenues and other operating income, which includes gas services revenue and gains on sale; the Adjusted EBITDA column holds EBITDA (Reported), calculated, because no adjusted figure is stated for a full year or the LTM |
| FY2024 / 2024-12-31 | 1,254.455 | 638.189 | US$m | Revenue is total revenues and other operating income, which includes gas services revenue and gains on sale; the Adjusted EBITDA column holds EBITDA (Reported), calculated, because no adjusted figure is stated for a full year or the LTM |
| FY2025 / 2025-12-31 | 2,220.289 | 1,372.696 | US$m | Revenue includes a gain on sale of 291.938; the Adjusted EBITDA column holds EBITDA (Reported), calculated, which includes that gain and an unrealized hedge gain of 62.402 |
| 2026-09-30 | 2,114.813 | 1,409.072 | US$m | Revenue is total revenues and other operating income, which includes gas services revenue and gains on sale; the Adjusted EBITDA column holds EBITDA (Reported), calculated, because no adjusted figure is stated for a full year or the LTM |

The EBITDA column is the reported identity throughout and every row spans twelve months, the last being the LTM to 2026-09-30.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: no source states the legal rank of the senior notes or the bank facility | Not supplied: legal rank is not stated | Not supplied: security of the notes is not stated | Not supplied: amounts are given in Debt principal to carrying value | Not supplied: no rank order, so no cumulative figure | US$m | The bank credit facility is secured by substantially all assets except PGS and the notes are described only as senior; no indenture or credit agreement is supplied, so rank, guarantors and obligor scope are not established; the facilities are named under Gaps |

No ranking is drawn because no source states one.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), nine months 2026 | 837.046 | US$m | Opening: reported measure, calculated from net income, interest expense, income taxes and DD&A |
| Add: exploration expense | 24.515 | US$m | Issuer reconciliation line |
| Less: unrealized gain from derivative financial instruments | -118.883 | US$m | Issuer reconciliation line |
| Add: stock-based compensation | 23.280 | US$m | Issuer reconciliation line |
| Less: gain on sale of assets | -3.400 | US$m | Issuer reconciliation line |
| Adjusted EBITDAX (issuer-defined), nine months 2026 | 762.558 | US$m | Closing: the issuer's stated adjusted measure, EBITDAX; the bridge is for nine months because no source states a full-year or LTM adjusted figure |

The bridge covers nine months 2026 only and uses the issuer's own adjustment lines.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 14 |
| Calculated | 6 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 4 |
| Fields present | 24 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 10 |

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
| 10-K_2024-12-31_crk.htm.jsonl | Annual report (Form 10-K) | FY2024, with FY2023 balance sheet | USD | thousands | Consolidated | US GAAP, successful efforts | Tier 1 (audited) | FY2023 balance sheet, debt note, interest paid | Older annual; FY2025 report carries the FY2024 comparatives |
| 10-K_2025-12-31_crk.htm.jsonl | Annual report (Form 10-K) | FY2025, with FY2024 and FY2023 statements | USD | thousands | Consolidated | US GAAP, successful efforts | Tier 1 (audited) | Income and cash flow statements, FY2024 and FY2025 balance sheets, debt note | Part III incorporated by reference to a proxy statement not supplied |
| 10-Q_2026-03-31_crk.htm.jsonl | Quarterly report (Form 10-Q) | Q1 2026 | USD | thousands | Consolidated | US GAAP | Tier 2b (unaudited) | Read for the PGS agreement; no figure used | Unaudited |
| 10-Q_2026-06-30_crk.htm.jsonl | Quarterly report (Form 10-Q) | Q2 2026 and six months | USD | thousands | Consolidated | US GAAP | Tier 2b (unaudited) | Read for the PGS ownership change; no figure used | Unaudited |
| 10-Q_2026-09-30_crk.htm.jsonl | Quarterly report (Form 10-Q) | Q3 2026 and nine months 2026 and 2025 | USD | thousands | Consolidated | US GAAP | Tier 2b (unaudited) | Nine-month statements, 2026-09-30 balance sheet, debt and liquidity | Unaudited; subsequent events described, not reflected |
| EX99.1_2026-03-31_crk_crk-ex99-1-htm.htm.jsonl | News release (Exhibit 99.1) | Q1 2026 | USD | thousands | Consolidated | Issuer-defined non-GAAP measures | Tier 2b (unaudited) | Read; no figure used | Issuer-defined measures |
| EX99.1_2026-06-30_crk_crk-ex99-1-htm.htm.jsonl | News release (Exhibit 99.1) | Q2 2026 and six months | USD | thousands | Consolidated | Issuer-defined non-GAAP measures | Tier 2b (unaudited) | Read for the PGS equity sale announcement | Issuer-defined measures |
| EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl | News release (Exhibit 99.1) | Q3 2026 and nine months 2026 and 2025 | USD | thousands | Consolidated | Issuer-defined non-GAAP measures | Tier 2b (unaudited) | Adjusted EBITDAX, operating cost data | Issuer-defined measures; the quarterly report controls where figures differ |

Sufficiency: the income statement, cash flow statement and balance sheet are all supported for FY2023 to FY2025 and for nine months 2026 and 2025; key performance indicators are supported for FY2024, FY2025 and the nine-month periods.

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Comstock Resources, Inc. | Issuer and reporting entity; the senior notes and the Comstock bank credit facility are its debt | December 31 | USD | thousands | Consolidated: Comstock and its wholly-owned subsidiaries plus PGS, a variable interest entity, with a noncontrolling interest | US GAAP, successful efforts | FY2023, FY2024, FY2025, Q1 to Q3 2026, nine months 2025 and 2026 |
| Pinnacle Gas Services, LLC (PGS) | Consolidated midstream joint venture; borrower under its own USD 150 million bank facility; outside the collateral of the Comstock facility | December 31 | USD | thousands | Consolidated within Comstock | US GAAP | Formed October 2023; ownership changed 2026-06-15 |

Events after the balance-sheet date, flagged and kept out of the period figures: on 2026-11-04 the issuer agreed to sell non-operated interests in upstream assets and in PGS to SOCAR for a stated cash price of USD 1,650 million, with closing expected by the end of 2026, and amended the Comstock bank credit facility (maturity 2028-11-15, borrowing base initially USD 1,600 million after closing).

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Money tables restated from USD thousands to US$m | 10-Q_2026-09-30_crk.htm.jsonl, page 2 | Unit conversion | USD 3,356,968 thousand (long-term debt at 2026-09-30) | US$m 3,356.968 | One unit for every money table; no value changes | All periods |
| EBITDA (Reported) built from components because the issuer states no unadjusted EBITDA | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 | Derivation | Not stated | FY2023 1,023.915; FY2024 638.189; FY2025 1,372.696; nine months 2025 800.670; nine months 2026 837.046 (US$m) | Net income plus interest expense, income taxes and DD&A; it includes derivative gains, gains on sale and exploration expense | All periods |
| Last twelve months to 2026-09-30 constructed | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 | Derived period | Not stated | EBITDA (Reported) 1,409.072; cash interest paid 210.047 (US$m) | FY2025 plus nine months 2026 less nine months 2025 | LTM 2026-09-30 |
| Gain on sale of assets excluded from EBITDA (Analyst Judgement) | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 | Analyst normalisation | EBITDA (Reported) LTM 1,409.072 | 1,111.241 after removing 297.831 (US$m) | A gain on sale is not recurring operating cash earnings; FY2025 includes the Shelby Trough sale gain | FY2023 to FY2025 and LTM |
| Unrealized derivative gain excluded from EBITDA (Analyst Judgement) | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, page 4 | Analyst normalisation | 1,111.241 | 955.578 after removing 155.663 (US$m) | Gain on derivatives less cash settlements is non-cash; the issuer's own adjusted EBITDAX removes it | FY2023 to FY2025 and LTM |
| Debt kept at carrying value; principal difference logged | 10-Q_2026-09-30_crk.htm.jsonl, page 19 | Basis | Principal 3,388.880 | Carrying value 3,356.968 | Discount of 12.619 and issuance costs of 19.293 are deducted; gross principal is not the leverage denominator | 2026-09-30 |
| Undrawn committed facilities limited to the Comstock facility | 10-Q_2026-09-30_crk.htm.jsonl, pages 27–29 | Perimeter | Issuer-reported unused capacity 850.000 (US$m) | 700.000 | The PGS facility of 150.000 is restricted to PGS midstream activities | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Natural gas sales | 1,259,450 | 1,043,886 | 1,425,857 | 1,059,417 | 1,025,289 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Oil sales | 5,161 | 3,597 | 2,292 | 2,124 | 1,846 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Total natural gas and oil sales | 1,264,611 | 1,047,483 | 1,428,149 | 1,061,541 | 1,027,135 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Gas services revenue | 300,498 | 206,097 | 500,202 | 371,427 | 294,464 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Gain (loss) on sale of assets | 125 | 875 | 291,938 | -2,493 | 3,400 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Total revenues and other operating income | 1,565,234 | 1,254,455 | 2,220,289 | 1,430,475 | 1,324,999 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Production and ad valorem taxes | 91,803 | 57,437 | 40,453 | 32,950 | 28,653 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Gathering and transportation | 184,906 | 194,890 | 166,108 | 124,345 | 135,147 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Lease operating | 132,203 | 130,504 | 122,662 | 94,887 | 84,888 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Depreciation, depletion and amortization | 607,908 | 795,397 | 641,163 | 483,665 | 494,619 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Gas services expense | 282,050 | 205,407 | 516,224 | 385,167 | 285,293 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| General and administrative, net | 37,992 | 39,435 | 48,685 | 34,884 | 51,477 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Impairment of natural gas and oil properties | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | 29,071 | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Exploration | 1,775 | Not supplied: the statement prints a dash for this period | 10,071 | 8,750 | 24,515 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Total operating expenses | 1,338,637 | 1,423,070 | 1,574,437 | 1,164,648 | 1,104,592 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Operating income (loss) | 226,597 | -168,615 | 645,852 | 265,827 | 220,407 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Gain from derivative financial instruments | 187,639 | 10,196 | 82,537 | 48,330 | 121,290 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Other income | 1,771 | 1,211 | 3,144 | 2,848 | 730 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Interest expense | -169,018 | -210,621 | -222,797 | -166,737 | -166,436 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Total other income (expenses) | 20,392 | -199,214 | -137,116 | -115,559 | -44,416 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Income (loss) before income taxes | 246,989 | -367,829 | 508,736 | 150,268 | 175,991 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| (Provision for) benefit from income taxes | -35,095 | 149,075 | -88,533 | -16,834 | -23,126 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Net income (loss) | 211,894 | -218,754 | 420,203 | 133,434 | 152,865 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Net income attributable to noncontrolling interest | -777 | -10,897 | -24,592 | -18,742 | -14,379 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| Net income (loss) available to Comstock | 211,117 | -229,651 | 395,611 | 114,692 | 138,486 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| EBITDA (Reported) | 1,023,915 | 638,189 | 1,372,696 | 800,670 | 837,046 | USD thousands | Calculated: net income plus interest expense, income taxes and DD&A; the issuer states no unadjusted EBITDA | calculation C1 |
| EBITDA (Adjusted) | Not supplied: the issuer states adjusted EBITDAX for quarterly and nine-month periods only | Not supplied: the issuer states adjusted EBITDAX for quarterly and nine-month periods only | Not supplied: the issuer states adjusted EBITDAX for quarterly and nine-month periods only | 801,886 | 762,558 | USD thousands | Issuer-stated adjusted EBITDAX: adds back exploration expense and stock-based compensation and removes unrealized derivative gains and gains and losses on sale | EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 6 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | 211,894 | -218,754 | 420,203 | 133,434 | 152,865 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Deferred income taxes | 44,301 | -124,919 | 91,982 | 20,485 | 23,763 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Impairment of natural gas and oil properties | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | 29,071 | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| (Gain) loss on sale of assets | -125 | -875 | -291,938 | 2,493 | -3,400 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Depreciation, depletion and amortization | 607,908 | 795,397 | 641,163 | 483,665 | 494,619 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Dry hole costs and abandonments | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | Not supplied: the statement prints a dash for this period | 6,746 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Gain on derivative financial instruments | -187,639 | -10,196 | -82,537 | -48,330 | -121,290 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Cash settlements of derivative financial instruments | 80,328 | 207,803 | 20,135 | 22,708 | 2,407 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Amortization of debt discount, premium and issuance costs | 7,964 | 11,476 | 11,976 | 8,925 | 9,398 | USD thousands | Reported. Interim label: amortization of debt discount and issuance costs. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Stock-based compensation | 9,867 | 15,261 | 21,222 | 15,595 | 23,280 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| (Increase) decrease in accounts receivable | 278,697 | 56,584 | -60,496 | 1,900 | 18,745 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| (Increase) decrease in other current assets | 745 | -22,893 | 17,518 | 24,152 | -2,978 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Increase (decrease) in accounts payable and accrued expenses | -37,094 | -88,547 | 81,308 | 10,376 | 18,224 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Net cash provided by operating activities | 1,016,846 | 620,337 | 899,607 | 675,403 | 622,379 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Capital expenditures | -1,425,086 | -1,097,478 | -1,349,280 | -983,828 | -1,299,936 | USD thousands | Reported. Interim label: capital expenditures and acquisitions. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Prepaid drilling costs | -34,010 | 11,988 | 5,002 | 5,438 | 8,877 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Proceeds from sales of assets | 41,295 | 1,214 | 428,868 | 15,166 | 18,415 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Net cash used for investing activities | -1,417,801 | -1,084,276 | -915,410 | -963,224 | -1,272,644 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Borrowings on bank credit facility | 820,000 | 645,000 | 750,000 | 540,000 | 1,047,000 | USD thousands | Reported. Interim label: borrowings on bank credit facilities. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Repayments on bank credit facility | -340,000 | -710,000 | -905,000 | -375,000 | -507,000 | USD thousands | Reported. Interim label: repayments of bank credit facilities. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Issuance of Senior Notes | Not supplied: the statement prints a dash for this period | 372,000 | Not supplied: the statement prints a dash for this period | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Issuance of common stock | Not supplied: the statement prints a dash for this period | 100,450 | Not supplied: the statement prints a dash for this period | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Debt and stock issuance costs | -144 | -6,855 | -36 | -36 | -1,496 | USD thousands | Reported. Interim label: debt issuance costs. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Income tax withholdings on equity awards | -1,899 | -3,373 | -11,010 | -11,010 | -5,514 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Common stock dividends paid | -138,985 | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Contributions from noncontrolling interest | 24,000 | 60,500 | 215,500 | 156,500 | 600,126 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Distributions to noncontrolling interest | Not supplied: the statement prints a dash for this period | -3,653 | -16,520 | -10,217 | -24,589 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Redemption of noncontrolling interest | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | -445,000 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Noncontrolling interest transaction costs | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | Not supplied: the line is not presented in this period's statement | -18,559 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Net cash provided by financing activities | 362,972 | 454,069 | 32,934 | 300,237 | 644,968 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Net increase (decrease) in cash and cash equivalents | -37,983 | -9,870 | 17,131 | 12,416 | -5,297 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Cash and cash equivalents, beginning of period | 54,652 | 16,669 | 6,799 | 6,799 | 23,930 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Cash and cash equivalents, end of period | 16,669 | 6,799 | 23,930 | 19,215 | 18,633 | USD thousands | Reported. | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Net Cash from Operating Activities | 1,016,846 | 620,337 | 899,607 | 675,403 | 622,379 | USD thousands | Reported total, repeated as the fixed row | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Net Cash from Investing Activities | -1,417,801 | -1,084,276 | -915,410 | -963,224 | -1,272,644 | USD thousands | Reported total, repeated as the fixed row | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Net Cash from Financing Activities | 362,972 | 454,069 | 32,934 | 300,237 | 644,968 | USD thousands | Reported total, repeated as the fixed row | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Net Cash Change | -37,983 | -9,870 | 17,131 | 12,416 | -5,297 | USD thousands | Reported; operating plus investing plus financing; no foreign exchange effect is presented | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Opening Cash | 54,652 | 16,669 | 6,799 | 6,799 | 23,930 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Closing Cash | 16,669 | 6,799 | 23,930 | 19,215 | 18,633 | USD thousands | Reported | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5 |
| Cash Interest Paid | 161,009 | 190,016 | 210,820 | 199,841 | 199,068 | USD thousands | Reported in the supplementary cash flow information; the positive amount paid | 10-K_2025-12-31_crk.htm.jsonl, page 98; 10-Q_2026-09-30_crk.htm.jsonl, page 18 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 16,669 | 6,799 | 23,930 | 18,633 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Accounts receivable: natural gas and oil sales and gas services | 166,639 | 145,398 | 203,549 | 139,399 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Accounts receivable: joint interest operations | 48,704 | 23,956 | 35,400 | 32,918 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Accounts receivable: from affiliates | 16,087 | 5,492 | 3,596 | 51,483 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Derivative financial instruments (current asset) | 126,775 | 4,865 | 19,206 | 108,576 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Other current assets | 86,619 | 97,524 | 75,257 | 69,250 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Total current assets | 461,493 | 284,034 | 360,938 | 420,259 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Natural gas and oil properties: proved | 7,126,519 | 8,054,250 | 8,984,969 | 10,120,536 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Natural gas and oil properties: unproved | 343,419 | 424,648 | 391,065 | 406,976 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Other property and equipment | 62,382 | 150,023 | 386,656 | 504,058 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Accumulated depreciation, depletion and amortization | -2,147,549 | -2,940,532 | -3,547,196 | -4,040,793 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Net property and equipment | 5,384,771 | 5,688,389 | 6,215,494 | 6,990,777 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Goodwill | 335,897 | 335,897 | 335,897 | 335,897 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Derivative financial instruments (non-current asset) | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | 11,571 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Operating lease right-of-use assets | 71,462 | 73,777 | 94,733 | 96,456 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Accounts payable | 523,260 | 421,814 | 501,695 | 547,744 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Accrued expenses | 134,466 | 146,173 | 153,248 | 116,348 | USD thousands | Reported; interim label: accrued costs | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Operating leases (current) | 23,765 | 35,927 | 46,937 | 37,789 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Derivative financial instruments (current liability) | Not supplied: the statement prints a dash for this period | 8,940 | 27,636 | Not supplied: the statement prints a dash for this period | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Total current liabilities | 681,491 | 612,854 | 729,516 | 701,881 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Long-term debt | 2,640,391 | 2,952,090 | 2,809,066 | 3,356,968 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Deferred income taxes | 470,035 | 345,116 | 437,098 | 510,039 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Derivative financial instruments (non-current liability) | Not supplied: the statement prints a dash for this period | 66,757 | Not supplied: the statement prints a dash for this period | 9,694 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Long-term operating leases | 47,742 | 37,740 | 47,692 | 58,215 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Reserve for future abandonment costs | 30,773 | 33,996 | 20,787 | 21,829 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Common stock | 139,214 | 146,130 | 146,527 | 146,810 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Additional paid-in capital | 1,260,930 | 1,366,274 | 1,376,053 | 1,199,358 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Accumulated earnings | 958,270 | 728,619 | 1,124,230 | 1,262,716 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Total stockholders' equity attributable to Comstock | 2,358,414 | 2,241,023 | 2,646,810 | 2,608,884 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Noncontrolling interest | 24,777 | 92,521 | 316,093 | 587,450 | USD thousands | Reported | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Total Assets | 6,253,623 | 6,382,097 | 7,007,062 | 7,854,960 | USD thousands | Reported total assets | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Total Liabilities | 3,870,432 | 4,048,553 | 4,044,159 | 4,658,626 | USD thousands | Reported total liabilities | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Total Equity | 2,383,191 | 2,333,544 | 2,962,903 | 3,196,334 | USD thousands | Reported total stockholders' equity including the noncontrolling interest | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Total Debt | 2,640,391 | 2,952,090 | 2,809,066 | 3,356,968 | USD thousands | Reported long-term debt at carrying value, net of discount and issuance costs; no current portion is presented; operating leases are separate lines and are not included | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| Cash & Equivalents | 16,669 | 6,799 | 23,930 | 18,633 | USD thousands | Reported cash and cash equivalents | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 6.75% Senior Notes due 2029 | Senior notes | 1,611,261 | 1,623,880 | Not applicable | Not applicable | Not supplied: the notes' security is not stated in the supplied sources | Not supplied: no source states the legal rank | USD | 1,611,261 | Not applicable | 6.75% fixed | fixed | Not applicable | Not applicable | Not applicable | 2029-03-01 | 0 | 10-Q_2026-09-30_crk.htm.jsonl, pages 17, 19; 10-K_2025-12-31_crk.htm.jsonl, page 100 |
| 5.875% Senior Notes due 2030 | Senior notes | 965,000 | 965,000 | Not applicable | Not applicable | Not supplied: the notes' security is not stated in the supplied sources | Not supplied: no source states the legal rank | USD | 965,000 | Not applicable | 5.875% fixed | fixed | Not applicable | Not applicable | Not applicable | Not supplied: only the year 2030 is printed | 0 | 10-Q_2026-09-30_crk.htm.jsonl, pages 17, 19; 10-K_2025-12-31_crk.htm.jsonl, page 100 |
| Comstock bank credit facility | Revolving bank credit facility | 800,000 | 800,000 | 800,000 | 1,500,000 | Secured by substantially all assets of Comstock and its subsidiaries except PGS | Not supplied: no source states the legal rank | USD | 800,000 | Not applicable | Adjusted SOFR plus 2.25% to 3.25%, or alternate base rate plus 1.25% to 2.25%, by borrowing base utilisation | floating | Adjusted SOFR | 225 to 325 | Not applicable | 2027-11-15 at the balance-sheet date; 2028-11-15 after the amendment of 2026-11-04 | 0 | 10-Q_2026-09-30_crk.htm.jsonl, pages 17, 19, 29; 10-Q_2026-06-30_crk.htm.jsonl, page 19 |
| PGS bank credit facility | Revolving bank credit facility of PGS | 0 | 0 | 0 | 150,000 | Not supplied: the security of the PGS facility is not stated | Not supplied: no source states the legal rank | USD | 0 | Not applicable | SOFR plus 2.5% to 3.5%, or alternate base rate plus 1.5% to 2.5%, by consolidated net leverage | floating | SOFR | 250 to 350 | Not applicable | 2030-03-26 | 0 | 10-Q_2026-09-30_crk.htm.jsonl, pages 19–20, 29 |
| Financing cost adjustment | Aggregate unamortised debt issuance costs | -19,293 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -19,293 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_crk.htm.jsonl, page 19 |

The Reporting Currency Amount cells add to the Total Debt of USD 3,356,968 thousand at 2026-09-30. Amounts are in USD thousands as the filing prints them.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM | USD 1,372.696m | USD 837.046m | USD 800.670m | USD 1,409.072m | Calculated | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 | Includes gains on sale and unrealized derivative gains; see the Normalization register |
| Cash Interest Paid | LTM | USD 210.820m | USD 199.068m | USD 199.841m | USD 210.047m | Calculated | 10-K_2025-12-31_crk.htm.jsonl, page 98; 10-Q_2026-09-30_crk.htm.jsonl, page 18 | Cash paid, not interest expense |
| Net cash provided by operating activities | LTM | USD 899.607m | USD 622.379m | USD 675.403m | USD 846.583m | Calculated | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, page 4 | Includes working capital changes |
| Capital expenditures | LTM | USD 1,349.280m | USD 1,299.936m | USD 983.828m | USD 1,665.388m | Calculated | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, page 4 | Cash flow statement line, shown positive; interim line includes acquisitions |
| Total revenues and other operating income | LTM | USD 2,220.289m | USD 1,324.999m | USD 1,430.475m | USD 2,114.813m | Calculated | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 | Includes gas services revenue and gains on sale |
| Gain (loss) on sale of assets | LTM | USD 291.938m | USD 3.400m | USD -2.493m | USD 297.831m | Calculated | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 | Prior-year stub is a loss of 2.493 |
| Unrealized gain (loss) from derivative financial instruments | LTM | USD 62.402m | USD 118.883m | USD 25.622m | USD 155.663m | Calculated | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, page 4 | Gain on derivatives less cash settlements; the issuer states the same nine-month amounts |
| EBITDA excluding sale gains and unrealized hedge gains (Analyst Judgement) | LTM | USD 1,018.356m | USD 714.763m | USD 777.541m | USD 955.578m | Calculated | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 | Analyst Judgement; not an issuer measure |

Components are FY2025, nine months 2026 and nine months 2025 in USD millions; every component was available, so no figure is estimated.

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 2,640.391 | 10-K_2024-12-31_crk.htm.jsonl, page 78 | 1,023.915 | calculation C1 | FY2023 / 2023-12-31 | USD | US$m | 2.58 | Calculated | Tier 1 | EBITDA (Reported) includes gains on sale and unrealized derivative gains |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,623.722 | calculation C3 | 1,023.915 | calculation C1 | FY2023 / 2023-12-31 | USD | US$m | 2.56 | Calculated | Tier 1 | EBITDA (Reported) includes gains on sale and unrealized derivative gains |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 1,023.915 | calculation C1 | 161.009 | 10-K_2025-12-31_crk.htm.jsonl, page 98 | FY2023 / 2023-12-31 | USD | US$m | 6.36 | Calculated | Tier 1 | Cash interest paid, not interest expense |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 2,952.090 | 10-K_2025-12-31_crk.htm.jsonl, page 81 | 638.189 | calculation C1 | FY2024 / 2024-12-31 | USD | US$m | 4.63 | Calculated | Tier 1 | EBITDA (Reported) includes gains on sale and unrealized derivative gains |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,945.291 | calculation C3 | 638.189 | calculation C1 | FY2024 / 2024-12-31 | USD | US$m | 4.62 | Calculated | Tier 1 | EBITDA (Reported) includes gains on sale and unrealized derivative gains |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 638.189 | calculation C1 | 190.016 | 10-K_2025-12-31_crk.htm.jsonl, page 98 | FY2024 / 2024-12-31 | USD | US$m | 3.36 | Calculated | Tier 1 | Cash interest paid, not interest expense |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 2,809.066 | 10-K_2025-12-31_crk.htm.jsonl, page 81 | 1,372.696 | calculation C1 | FY2025 / 2025-12-31 | USD | US$m | 2.05 | Calculated | Tier 1 | EBITDA (Reported) includes gains on sale and unrealized derivative gains |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,785.136 | calculation C3 | 1,372.696 | calculation C1 | FY2025 / 2025-12-31 | USD | US$m | 2.03 | Calculated | Tier 1 | EBITDA (Reported) includes gains on sale and unrealized derivative gains |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 1,372.696 | calculation C1 | 210.820 | 10-K_2025-12-31_crk.htm.jsonl, page 98 | FY2025 / 2025-12-31 | USD | US$m | 6.51 | Calculated | Tier 1 | Cash interest paid, not interest expense |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 3,356.968 | 10-Q_2026-09-30_crk.htm.jsonl, page 2 | 1,409.072 | calculation C2 | 2026-09-30 | USD | US$m | 2.38 | Calculated | Tier 2b | LTM constructed; EBITDA (Reported) includes gains on sale and unrealized derivative gains; before the 2026-11-04 sale |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,338.335 | calculation C3 | 1,409.072 | calculation C2 | 2026-09-30 | USD | US$m | 2.37 | Calculated | Tier 2b | LTM constructed; EBITDA (Reported) includes gains on sale and unrealized derivative gains; before the 2026-11-04 sale |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 1,409.072 | calculation C2 | 210.047 | calculation C2 | 2026-09-30 | USD | US$m | 6.71 | Calculated | Tier 2b | Cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Total debt / adjusted EBITDA | 3,356.968 | 10-Q_2026-09-30_crk.htm.jsonl, page 2 | Not calculable: no supplied source states adjusted EBITDAX for FY2025, so the LTM figure cannot be built | 10-Q_2026-09-30_crk.htm.jsonl, page 2 | 2026-09-30 | USD | US$m | Not calculable: no supplied source states adjusted EBITDAX for FY2025, so the LTM figure cannot be built | Not Calculable | Tier 2b | Adjusted EBITDAX is stated only for nine-month and quarterly periods |
| Net debt / adjusted EBITDA | Net debt / adjusted EBITDA | 3,338.335 | calculation C3 | Not calculable: no supplied source states adjusted EBITDAX for FY2025, so the LTM figure cannot be built | 10-Q_2026-09-30_crk.htm.jsonl, page 2 | 2026-09-30 | USD | US$m | Not calculable: no supplied source states adjusted EBITDAX for FY2025, so the LTM figure cannot be built | Not Calculable | Tier 2b | Adjusted EBITDAX is stated only for nine-month and quarterly periods |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | Not calculable: no supplied source states adjusted EBITDAX for FY2025, so the LTM figure cannot be built | 10-Q_2026-09-30_crk.htm.jsonl, page 2 | 210.047 | calculation C2 | 2026-09-30 | USD | US$m | Not calculable: no supplied source states adjusted EBITDAX for FY2025, so the LTM figure cannot be built | Not Calculable | Tier 2b | Adjusted EBITDAX is stated only for nine-month and quarterly periods |
| Net debt / normalised EBITDA | Net debt / normalised EBITDA | 2,623.722 | calculation C3 | 916.479 | calculation C7 | FY2023 / 2023-12-31 | USD | US$m | 2.86 | Calculated | Tier 1 | Analyst Judgement: EBITDA (Reported) less gain on sale and less unrealized derivative gain |
| Net debt / normalised EBITDA | Net debt / normalised EBITDA | 2,945.291 | calculation C3 | 834.921 | calculation C7 | FY2024 / 2024-12-31 | USD | US$m | 3.53 | Calculated | Tier 1 | Analyst Judgement: EBITDA (Reported) less gain on sale and less unrealized derivative gain |
| Net debt / normalised EBITDA | Net debt / normalised EBITDA | 2,785.136 | calculation C3 | 1,018.356 | calculation C7 | FY2025 / 2025-12-31 | USD | US$m | 2.73 | Calculated | Tier 1 | Analyst Judgement: EBITDA (Reported) less gain on sale and less unrealized derivative gain |
| Net debt / normalised EBITDA | Net debt / normalised EBITDA | 3,338.335 | calculation C3 | 955.578 | calculation C7 | 2026-09-30 | USD | US$m | 3.49 | Calculated | Tier 2b | Analyst Judgement: EBITDA (Reported) less gain on sale and less unrealized derivative gain |
| Normalised EBITDA / cash interest | Normalised EBITDA / cash interest paid | 916.479 | calculation C7 | 161.009 | 10-K_2025-12-31_crk.htm.jsonl, page 98 | FY2023 / 2023-12-31 | USD | US$m | 5.69 | Calculated | Tier 1 | Analyst Judgement: normalised EBITDA as in the Normalization register |
| Normalised EBITDA / cash interest | Normalised EBITDA / cash interest paid | 834.921 | calculation C7 | 190.016 | 10-K_2025-12-31_crk.htm.jsonl, page 98 | FY2024 / 2024-12-31 | USD | US$m | 4.39 | Calculated | Tier 1 | Analyst Judgement: normalised EBITDA as in the Normalization register |
| Normalised EBITDA / cash interest | Normalised EBITDA / cash interest paid | 1,018.356 | calculation C7 | 210.820 | 10-K_2025-12-31_crk.htm.jsonl, page 98 | FY2025 / 2025-12-31 | USD | US$m | 4.83 | Calculated | Tier 1 | Analyst Judgement: normalised EBITDA as in the Normalization register |
| Normalised EBITDA / cash interest | Normalised EBITDA / cash interest paid | 955.578 | calculation C7 | 210.047 | calculation C2 | 2026-09-30 | USD | US$m | 4.55 | Calculated | Tier 2b | Analyst Judgement: normalised EBITDA as in the Normalization register |
| Operating cash flow / total debt | Net cash from operating activities / total debt | 1,016.846 | calculation C9 | 2,640.391 | 10-K_2024-12-31_crk.htm.jsonl, page 78 | FY2023 / 2023-12-31 | USD | US$m | 0.39 | Calculated | Tier 1 | Operating cash flow after working capital changes |
| Operating cash flow / total debt | Net cash from operating activities / total debt | 620.337 | calculation C9 | 2,952.090 | 10-K_2025-12-31_crk.htm.jsonl, page 81 | FY2024 / 2024-12-31 | USD | US$m | 0.21 | Calculated | Tier 1 | Operating cash flow after working capital changes |
| Operating cash flow / total debt | Net cash from operating activities / total debt | 899.607 | calculation C9 | 2,809.066 | 10-K_2025-12-31_crk.htm.jsonl, page 81 | FY2025 / 2025-12-31 | USD | US$m | 0.32 | Calculated | Tier 1 | Operating cash flow after working capital changes |
| Operating cash flow / total debt | Net cash from operating activities / total debt | 846.583 | calculation C9 | 3,356.968 | 10-Q_2026-09-30_crk.htm.jsonl, page 2 | 2026-09-30 | USD | US$m | 0.25 | Calculated | Tier 2b | Operating cash flow after working capital changes |
| Capital expenditures / operating cash flow | Capital expenditures / net cash from operating activities | 1,425.086 | calculation C9 | 1,016.846 | calculation C9 | FY2023 / 2023-12-31 | USD | US$m | 1.40 | Calculated | Tier 1 | Above 1.00 means spending exceeded operating cash flow |
| Capital expenditures / operating cash flow | Capital expenditures / net cash from operating activities | 1,097.478 | calculation C9 | 620.337 | calculation C9 | FY2024 / 2024-12-31 | USD | US$m | 1.77 | Calculated | Tier 1 | Above 1.00 means spending exceeded operating cash flow |
| Capital expenditures / operating cash flow | Capital expenditures / net cash from operating activities | 1,349.280 | calculation C9 | 899.607 | calculation C9 | FY2025 / 2025-12-31 | USD | US$m | 1.50 | Calculated | Tier 1 | Above 1.00 means spending exceeded operating cash flow |
| Capital expenditures / operating cash flow | Capital expenditures / net cash from operating activities | 1,665.388 | calculation C9 | 846.583 | calculation C9 | 2026-09-30 | USD | US$m | 1.97 | Calculated | Tier 2b | Above 1.00 means spending exceeded operating cash flow |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Production | Natural gas equivalent production (MMcfe) | 527,847 | 450,423 | 339,166 | 333,453 | Down | Trend is nine months 2026 against nine months 2025; period flow; 10-K_2025-12-31_crk.htm.jsonl, page 58; 10-Q_2026-09-30_crk.htm.jsonl, page 22 |
| Pricing | Average realised price per Mcfe before hedging (USD) | 1.98 | 3.17 | 3.13 | 3.08 | Down | Trend is nine months 2026 against nine months 2025; period rate; 10-K_2025-12-31_crk.htm.jsonl, page 58; 10-Q_2026-09-30_crk.htm.jsonl, page 22 |
| Unit cost | Gathering and transportation per Mcfe (USD) | 0.37 | 0.37 | 0.37 | 0.41 | Up | Trend is nine months 2026 against nine months 2025; period rate; 10-K_2025-12-31_crk.htm.jsonl, page 59; 10-Q_2026-09-30_crk.htm.jsonl, page 22 |
| Unit cost | Lease operating cost per Mcfe (USD) | 0.25 | 0.27 | 0.28 | 0.25 | Down | Trend is nine months 2026 against nine months 2025; period rate; 10-K_2025-12-31_crk.htm.jsonl, page 59; 10-Q_2026-09-30_crk.htm.jsonl, page 22 |
| Unit cost | Total production cost per Mcfe including cash G&A (USD) | Not supplied: not stated for full years | Not supplied: not stated for full years | 0.80 | 0.83 | Up | Trend is nine months 2026 against nine months 2025; issuer-defined; period rate; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 5 |
| Margin | Unhedged operating margin (%) | Not supplied: not stated for full years | Not supplied: not stated for full years | 74 | 73 | Down | Trend is nine months 2026 against nine months 2025; issuer-defined; period rate; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 5 |
| Hedging | Cash settlements on derivatives received (USD thousands) | 207,803 | 20,135 | 22,708 | 2,407 | Down | Trend is nine months 2026 against nine months 2025; period flow; 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, page 4 |
| Investment | Total cash capital expenditures (USD thousands) | 1,085,490 | 1,344,278 | 978,390 | 1,291,059 | Up | Trend is nine months 2026 against nine months 2025; period flow; 10-K_2025-12-31_crk.htm.jsonl, page 62; 10-Q_2026-09-30_crk.htm.jsonl, page 27 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | EBITDA (Reported): net income plus interest expense, income taxes and DD&A, unadjusted | Adjusted EBITDAX: adds exploration expense and stock-based compensation, removes unrealized derivative gains and gains and losses on sale | EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 6 against 10-Q_2026-09-30_crk.htm.jsonl, page 3 | Nine months 2026 and 2025 | Nine months 2026: EBITDA (Reported) 837.046 against adjusted EBITDAX 762.558, a difference of 74.488; nine months 2025: 800.670 against 801.886 (US$m) | Fundamental credit; Liquidity | Reported EBITDA is the denominator; the issuer's adjusted measure is shown only in the bridge; FY2025 and LTM adjusted figures are not stated |
| Non-operating gains inside EBITDA (Reported) | No gain on sale or unrealized derivative gain in an earnings measure used for leverage | EBITDA (Reported) as built includes both | 10-K_2025-12-31_crk.htm.jsonl, pages 82–83; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–4 | FY2023 to FY2025 and LTM | LTM: gain on sale 297.831 and unrealized derivative gain 155.663, 453.494 together, within EBITDA (Reported) of 1,409.072 (US$m) | Fundamental credit; Forward credit model | Normalised leverage is stated beside reported leverage as an Analyst Judgement; both are in the Calculation register |
| Total debt | Balance-sheet carrying value, net of discount and issuance costs | Debt note lists principal, discount and issuance costs separately | 10-Q_2026-09-30_crk.htm.jsonl, page 19 | 2026-09-30 | Principal 3,388.880 against carrying value 3,356.968, a difference of 31.912 (US$m) | Refinancing & LME; Liquidity | Carrying value is used; principal is shown in the debt tables |
| Interest | Cash interest paid is the coverage denominator | Interest expense is an accrual and includes non-cash amortisation | 10-K_2025-12-31_crk.htm.jsonl, pages 82, 98; 10-Q_2026-09-30_crk.htm.jsonl, pages 3, 10, 18 | FY2025 and nine months 2026 | FY2025: cash paid 210.820 against expense 222.797; nine months 2026: cash paid 199.068 against expense 166.436 (US$m); the nine-month difference of 32.632 equals the fall in accrued interest payable of 42.030 less non-cash amortisation of 9.398 (calculation C13) | Fundamental credit | Cash interest paid is used as the coverage denominator and expense is not substituted |
| Net debt perimeter | Consolidated cash less consolidated debt | Some consolidated cash is held by PGS and cannot be used for general corporate purposes | 10-Q_2026-09-30_crk.htm.jsonl, page 6 | 2026-09-30 | PGS cash of 16.4 within consolidated cash of 18.633 (US$m) | Liquidity | Consolidated figures are used and the restriction is noted; restricted-group figures are not supplied |
| Liquidity | Cash plus undrawn commitments of the Comstock facility | Issuer-reported liquidity of USD 868.6 million includes the undrawn PGS facility of USD 150 million restricted to PGS | 10-Q_2026-09-30_crk.htm.jsonl, pages 27–29 | 2026-09-30 | Issuer figure 850.000 unused capacity against Comstock facility 700.000, a difference of 150.000 (US$m) | Liquidity | The Comstock-only figure is charted; the issuer figure is logged here |
| Pinnacle Gas Services redemption (multi-figure event) | One economic event, every figure with its role | Agreement: USD 440 million plus accrued unpaid distributions to the Class B holder, named Quantum in the annual report and Cactus in the first quarter report; amount paid on 2026-06-15: USD 445 million (cash flow statement redemption of noncontrolling interest 445.000, of which 300.000 retired the noncontrolling interest balance and 145.000 reduced additional paid-in capital); source of funds: USD 600 million of Class A-2 units issued to a new investor, net of transaction costs of 18.559 (US$m); the second quarter release says the proceeds also retired preferred equity and indebtedness | 10-K_2025-12-31_crk.htm.jsonl, page 107; 10-Q_2026-03-31_crk.htm.jsonl, page 5; 10-Q_2026-09-30_crk.htm.jsonl, pages 4–5; EX99.1_2026-06-30_crk_crk-ex99-1-htm.htm.jsonl, page 1 | Nine months 2026 | The agreement figure and the paid figure differ by 5 (US$m), not reconciled; the debt retired is not quantified | Liquidity; Refinancing & LME | Every figure is retained; none is chosen; the cash flow statement figures are used in the tables |
| Covenant leverage | Not defined here | Leverage ratio below 3.5 to 1.0 under an issuer and credit agreement definition not supplied | 10-Q_2026-09-30_crk.htm.jsonl, pages 19, 29 | 2026-09-30 | Not quantified | Legal & covenants; Covenant capacity | No covenant headroom is inferred |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Reported statements and credit ratios for FY2023 to nine months 2026 | Ready with Limitations | Reported EBITDA includes non-operating gains; no fourth quarter 2025 stand-alone period; one business segment | Use the normalised ratios beside the reported ones |
| Leverage and cover on adjusted EBITDA | Not Ready | Adjusted EBITDAX is not stated for FY2025 or the last twelve months | Obtain the fourth quarter 2025 release |
| Net debt and leverage after the SOCAR sale | Not Ready | No pro forma capitalisation and no EBITDA of the interests sold | Obtain a closing statement |
| Debt stack and ranking | Not Ready | No legal rank, security of the notes or guarantors stated | Obtain the indentures and credit agreement |
| Covenant headroom | Not Ready | Covenant definitions and issuer-reported ratios not printed | Obtain the credit agreement and compliance certificate |
| Liquidity at 2026-09-30 | Ready with Limitations | Issuer liquidity includes a restricted PGS facility; consolidated cash includes PGS cash | Use the Comstock-only undrawn amount |

### Leverage trajectory and drivers

Reported net leverage fell from 4.62x at year-end 2024 to 2.03x at year-end 2025 and stood at 2.37x on an LTM basis at 2026-09-30, but most of that improvement is not operating. EBITDA (Reported) for FY2024 absorbed an unrealized hedge loss of USD 197.607 million, and FY2025 includes a gain on sale of USD 291.938 million, mainly the Shelby Trough sale, and an unrealized hedge gain of USD 62.402 million. With sale gains and unrealized hedge gains removed, net leverage was 2.86x at year-end 2023, 3.53x at year-end 2024, 2.73x at year-end 2025 and 3.49x at 2026-09-30, so the real improvement was a reduction of about 0.80x in 2025 that has since reversed.
Basis: calculation C6; calculation C7; calculation C8; 10-K_2025-12-31_crk.htm.jsonl, page 60

Net debt rose by USD 553.199 million between 2025-12-31 and 2026-09-30 while normalised LTM EBITDA of USD 955.578 million is below the USD 1,018.356 million of FY2025. Capital expenditures of USD 1,299.936 million in nine months 2026 exceeded operating cash flow of USD 622.379 million, and the gap was met by net bank borrowings of USD 540.000 million and partner capital, not by retained cash. The reported ratios sit well below the bank facility's leverage covenant of 3.5 to 1.0, while the normalised ratio is close to that level; the covenant definition is not supplied, so no headroom is inferred.
Basis: calculation C8; calculation C11; 10-Q_2026-09-30_crk.htm.jsonl, page 4; 10-Q_2026-09-30_crk.htm.jsonl, page 19

### Coverage and cash-flow quality

EBITDA (Reported) covered cash interest paid 6.71x on an LTM basis, but on normalised EBITDA cover is 4.55x, compared with 5.69x in FY2023, 4.39x in FY2024 and 4.83x in FY2025. Cover is adequate while the 6.75% notes and 5.875% notes carry fixed coupons, and the floating-rate bank debt of USD 800.000 million at 2026-09-30 is the only part exposed to rate changes; no interest-rate hedge is described.
Basis: calculation C6; calculation C8; 10-Q_2026-09-30_crk.htm.jsonl, page 32

Operating cash flow after working capital covered only part of capital expenditures in every period: capital expenditures were 1.40x operating cash flow in FY2023, 1.77x in FY2024, 1.50x in FY2025 and 1.97x on an LTM basis, and operating cash flow fell short of capital expenditures by USD 818.805 million for the LTM. FY2025 spending was funded by USD 428.868 million of asset sale proceeds and USD 215.500 million of partner contributions, and nine months 2026 by USD 1,047.000 million of bank borrowings less USD 507.000 million repaid and USD 600.126 million of partner contributions less a USD 445.000 million redemption. The business therefore depends on continued access to the bank facility and partner capital while it invests above internally generated cash.
Basis: calculation C9; 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, page 4

### Liquidity adequacy

Cash was USD 18.633 million at 2026-09-30 and undrawn commitments of the Comstock facility were USD 700.000 million, USD 540.000 million lower than the USD 1,240.000 million at 2025-12-31 because net borrowings of the same amount were drawn. The issuer reports liquidity of USD 868.6 million, which adds the undrawn PGS facility of USD 150 million that is restricted to PGS, and its consolidated cash includes PGS cash of USD 16.4 million that is not available for general purposes. At the balance-sheet date the bank facility matured on 2027-11-15, about 13 months away, and the amendment of 2026-11-04 moved it to 2028-11-15, with a further extension to 2031-11-15 only after the SOCAR sale closes and debt is repaid; no other debt matures before 2029. The bank facility commitments of USD 1,500.000 million sit below the borrowing base of USD 2.0 billion, so availability is set by commitments and not by the base.
Basis: calculation C5; 10-Q_2026-09-30_crk.htm.jsonl, pages 6, 19, 27, 29; 10-Q_2026-06-30_crk.htm.jsonl, page 19

### Subsequent events and multi-figure events

On 2026-11-04, after the balance-sheet date, the issuer agreed to sell non-operated interests in upstream assets and in PGS to SOCAR for a stated cash price of USD 1,650 million and amended the bank facility to mature on 2028-11-15, with a further extension to 2031-11-15 after the sale closes and debt is repaid. Neither event is in any period figure, and no source states net debt after the sale or the EBITDA of the interests sold, so a pro forma leverage figure is not established; the issuer states that proceeds will repay the bank facility and retire part of the 6.75% notes.
Basis: 10-Q_2026-09-30_crk.htm.jsonl, page 21; 10-Q_2026-09-30_crk.htm.jsonl, page 30; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 3

The redemption of the PGS noncontrolling holder appears with different figures: an agreement for USD 440 million plus accrued unpaid distributions, and a payment of USD 445 million on 2026-06-15 funded by USD 600 million of new units. The cash flow statement figure of USD 445.000 million is used in the tables; the agreement figure, the paid figure and their roles are kept in one conflict row.
Basis: 10-K_2025-12-31_crk.htm.jsonl, page 107; 10-Q_2026-09-30_crk.htm.jsonl, page 5; 10-Q_2026-09-30_crk.htm.jsonl, page 4

### Non-debt funding float

No customer deposits, deferred revenue, supplier finance or similar non-interest-bearing funding liability is described in any source, and a search for those terms found none; accounts payable and accrued expenses are ordinary trade and capital-spending liabilities.
Basis: 10-Q_2026-09-30_crk.htm.jsonl, page 2; 10-K_2025-12-31_crk.htm.jsonl, page 81

### Data quality and definition risks

EBITDA (Reported) is built from components because the issuer states no unadjusted EBITDA, and it includes derivative and sale gains, so it is a measure the issuer does not itself use. The issuer's own adjusted EBITDAX is stated for quarterly and nine-month periods only, so adjusted leverage cannot be stated for a fiscal year or the LTM. Consolidated figures include PGS, whose cash and assets are not freely available to Comstock, and no figures for the group that borrows under the Comstock facility are supplied.
Basis: calculation C1; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 6; 10-Q_2026-09-30_crk.htm.jsonl, page 6

### Gaps and their credit consequence

Four gaps are rated high. The missing executed debt documents mean rank, security, guarantors and covenant definitions rest on summaries; the missing pro forma capitalisation means the SOCAR sale, whose stated cash price of USD 1,650 million compares with a carrying value of debt of USD 3,356.968 million, is not reflected in any leverage figure; and the missing adjusted EBITDA for fiscal years and the LTM leaves the issuer's own earnings measure unavailable for leverage. Each gap is listed under Gaps with its severity and the action that would close it.
Basis: 10-Q_2026-09-30_crk.htm.jsonl, pages 19, 21, 30

## Calculations

Amounts are in thousand USD unless stated; the money tables restate them in US$m by dividing by 1,000.

| Calculation ID | Check | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | EBITDA (Reported) = net income + interest expense + income taxes + DD&A (thousand USD) | FY2023: 211,894 + 169,018 + 35,095 + 607,908; FY2024: -218,754 + 210,621 + -149,075 + 795,397; FY2025: 420,203 + 222,797 + 88,533 + 641,163; 9M 2025: 133,434 + 166,737 + 16,834 + 483,665; 9M 2026: 152,865 + 166,436 + 23,126 + 494,619 | FY2023 = 1,023,915; FY2024 = 638,189; FY2025 = 1,372,696; 9M 2025 = 800,670; 9M 2026 = 837,046 | 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–3 |
| C2 | LTM to 2026-09-30 = FY2025 + nine months 2026 - nine months 2025 (thousand USD) | EBITDA 1,372,696 + 837,046 - 800,670; cash interest paid 210,820 + 199,068 - 199,841; operating cash flow 899,607 + 622,379 - 675,403; capital expenditures 1,349,280 + 1,299,936 - 983,828; revenues 2,220,289 + 1,324,999 - 1,430,475; gain on sale 291,938 + 3,400 - (-2,493); unrealized derivative gain 62,402 + 118,883 - 25,622 | EBITDA 1,409,072; cash interest paid 210,047; operating cash flow 846,583; capital expenditures 1,665,388; revenues 2,114,813; gain on sale 297,831; unrealized derivative gain 155,663 | 10-K_2025-12-31_crk.htm.jsonl, pages 82–83, 98; 10-Q_2026-09-30_crk.htm.jsonl, pages 2–5, 18 |
| C3 | Net debt = gross debt - cash (thousand USD) | FY2023: 2,640,391 - 16,669; FY2024: 2,952,090 - 6,799; FY2025: 2,809,066 - 23,930; LTM 2026-09-30: 3,356,968 - 18,633 | FY2023 = 2,623,722; FY2024 = 2,945,291; FY2025 = 2,785,136; LTM 2026-09-30 = 3,338,335 | 10-K_2024-12-31_crk.htm.jsonl, page 78; 10-K_2025-12-31_crk.htm.jsonl, page 81; 10-Q_2026-09-30_crk.htm.jsonl, page 2 |
| C4 | Debt principal to carrying value at 2026-09-30 (thousand USD) | 800,000 + 1,623,880 + 965,000 = 3,388,880; -12,619 + -19,293 = -31,912 | 3,388,880 + -31,912 = 3,356,968, equal to the balance-sheet carrying value | 10-Q_2026-09-30_crk.htm.jsonl, pages 2, 19 |
| C5 | Undrawn committed facilities = commitments - drawn (thousand USD); Comstock facility only | FY2024: 1,500,000 - 415,000; FY2025: 1,500,000 - 260,000; 2026-09-30: 1,500,000 - 800,000; issuer-reported 2026-09-30: unused capacity 850,000 including the PGS facility of 150,000, liquidity 850,000 + 18,633 cash = 868,633 | FY2024 1,085,000; FY2025 1,240,000; 2026-09-30 700,000; change in 2026 from year-end 2025 is 1,240,000 - 700,000 = 540,000, equal to net borrowings of 1,047,000 - 507,000 | 10-K_2024-12-31_crk.htm.jsonl, page 96; 10-K_2025-12-31_crk.htm.jsonl, page 100; 10-Q_2026-09-30_crk.htm.jsonl, pages 4, 19, 27 |
| C6 | Leverage and cover = numerator / denominator, two decimals (US$m) | FY2023: debt 2,640.391 / EBITDA 1,023.915; net debt 2,623.722 / EBITDA 1,023.915; EBITDA 1,023.915 / cash interest 161.009; FY2024: debt 2,952.090 / EBITDA 638.189; net debt 2,945.291 / EBITDA 638.189; EBITDA 638.189 / cash interest 190.016; FY2025: debt 2,809.066 / EBITDA 1,372.696; net debt 2,785.136 / EBITDA 1,372.696; EBITDA 1,372.696 / cash interest 210.820; LTM 2026-09-30: debt 3,356.968 / EBITDA 1,409.072; net debt 3,338.335 / EBITDA 1,409.072; EBITDA 1,409.072 / cash interest 210.047 | FY2023: 2.58x; 2.56x; 6.36x; FY2024: 4.63x; 4.62x; 3.36x; FY2025: 2.05x; 2.03x; 6.51x; LTM 2026-09-30: 2.38x; 2.37x; 6.71x | Net debt data and Calculation register |
| C7 | Normalised EBITDA = EBITDA (Reported) - gain on sale - unrealized derivative gain, where unrealized gain = gain from derivatives - cash settlements (thousand USD) | FY2023: 1,023,915 - 125 - 107,311; FY2024: 638,189 - 875 - -197,607; FY2025: 1,372,696 - 291,938 - 62,402; LTM 2026-09-30: 1,409,072 - 297,831 - 155,663; unrealized gain by column: FY2023 187,639 - 80,328 = 107,311; FY2024 10,196 - 207,803 = -197,607; FY2025 82,537 - 20,135 = 62,402; 9M 2025 48,330 - 22,708 = 25,622; 9M 2026 121,290 - 2,407 = 118,883 | FY2023 = 916,479; FY2024 = 834,921; FY2025 = 1,018,356; LTM 2026-09-30 = 955,578 | 10-K_2025-12-31_crk.htm.jsonl, pages 82–83; 10-Q_2026-09-30_crk.htm.jsonl, pages 3–4 |
| C8 | Normalised net leverage = net debt / normalised EBITDA; normalised cover = normalised EBITDA / cash interest paid (US$m) | FY2023: 2,623.722 / 916.479; 916.479 / 161.009; FY2024: 2,945.291 / 834.921; 834.921 / 190.016; FY2025: 2,785.136 / 1,018.356; 1,018.356 / 210.820; LTM 2026-09-30: 3,338.335 / 955.578; 955.578 / 210.047 | FY2023: 2.86x; 5.69x; FY2024: 3.53x; 4.39x; FY2025: 2.73x; 4.83x; LTM 2026-09-30: 3.49x; 4.55x | Calculation register |
| C9 | Operating cash flow / total debt; capital expenditures / operating cash flow; operating cash flow less capital expenditures (US$m) | FY2023: 1,016.846 / 2,640.391; 1,425.086 / 1,016.846; 1,016.846 - 1,425.086; FY2024: 620.337 / 2,952.090; 1,097.478 / 620.337; 620.337 - 1,097.478; FY2025: 899.607 / 2,809.066; 1,349.280 / 899.607; 899.607 - 1,349.280; LTM 2026-09-30: 846.583 / 3,356.968; 1,665.388 / 846.583; 846.583 - 1,665.388 | FY2023: 0.39x; 1.40x; -408.240; FY2024: 0.21x; 1.77x; -477.141; FY2025: 0.32x; 1.50x; -449.673; LTM 2026-09-30: 0.25x; 1.97x; -818.805 | 10-K_2025-12-31_crk.htm.jsonl, page 83; 10-Q_2026-09-30_crk.htm.jsonl, page 4 |
| C10 | EBITDA bridge, nine months 2026 (US$m) | 837.046 + 24.515 - 118.883 + 23.280 - 3.400 | = 762.558, equal to the issuer's adjusted EBITDAX of 762,558 thousand | EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 6 |
| C11 | Net debt change from 2025-12-31 to 2026-09-30 (thousand USD) | 3,338,335 - 2,785,136 | = 553,199 | 10-Q_2026-09-30_crk.htm.jsonl, page 2; 10-K_2025-12-31_crk.htm.jsonl, page 81 |
| C12 | Figures rounded to two decimals for the Bottom line (US$m unless stated) | net debt at 2025-12-31 2,785.136; net debt at 2026-09-30 3,338.335; net debt / EBITDA 3,338.335 / 1,409.072; net debt / normalised EBITDA 3,338.335 / 955.578; EBITDA / cash interest 1,409.072 / 210.047; normalised EBITDA / cash interest 955.578 / 210.047 | net debt at 2025-12-31 2,785.14; net debt at 2026-09-30 3,338.34; 2.37x; 3.49x; 6.71x; 4.55x | calculation C3; calculation C6; calculation C8 |
| C13 | Nine-month 2026 cash interest tie (thousand USD) | interest expense 166,436 - non-cash amortisation 9,398 + fall in accrued interest payable (64,042 - 22,012 = 42,030) | = 199,068, equal to cash interest paid of 199,068 | 10-Q_2026-09-30_crk.htm.jsonl, pages 3, 4, 10, 18 |

## Gaps

Adjusted EBITDA for the twelve months to 2026-09-30 and for each fiscal year cannot be calculated, because the issuer states adjusted EBITDAX only for quarterly and nine-month periods and no supplied source states it for FY2025 or for the fourth quarter of 2025. The adjusted leverage and adjusted cover rows are therefore not calculable, and the only adjusted bridge covers nine months 2026. The fourth quarter 2025 earnings release or a full-year adjusted EBITDAX reconciliation would close it. Severity: High.

Net debt, leverage and liquidity after the SOCAR sale are not established. The agreement dated 2026-11-04 states a cash price of USD 1,650 million subject to customary adjustments, an effective date of 2026-07-01 and closing expected by the end of 2026, and the issuer plans to repay the bank credit facility and retire part of the 6.75% notes, but no source states net debt after those steps or the EBITDA of the interests sold. Every ratio here is as reported at 2026-09-30. A closing statement or pro forma capitalisation would close it. Severity: High.

The legal rank, security of the notes, guarantors and obligor scope are not stated for the 6.75% senior notes, the 5.875% senior notes or the bank credit facility, beyond the statement that the bank facility is secured by substantially all assets except PGS. The debt stack is therefore not drawn and no secured or senior subtotal is stated. The indentures and the credit agreement, which are named only in exhibit lists, would close it. Severity: High.

Covenant definitions and the issuer-reported covenant ratios are not printed: the filings state a leverage ratio below 3.5 to 1.0 and an adjusted current ratio of at least 1.0 to 1.0 for the bank facility, with compliance at 2026-09-30, but not the ratios or their definitions. Covenant headroom is not inferred. The credit agreement would close it. Severity: High.

Consolidated figures include Pinnacle Gas Services, whose bank facility and assets sit outside the collateral of the Comstock facility; PGS cash of USD 16.4 million and net other property of USD 471.5 million cannot be used for general corporate purposes, and the issuer's reported liquidity includes the undrawn PGS facility. No figures for the group that borrows under the Comstock facility are supplied, so consolidated net debt and leverage may not describe that group. Restricted-group financials would close it. Severity: Medium.

The redemption of the Pinnacle Gas Services noncontrolling holder is described as USD 440 million plus accrued unpaid distributions in the annual report and the first quarter report and as USD 445 million paid on 2026-06-15 in the third quarter report, and the second quarter release says the proceeds also retired preferred equity and indebtedness. The figures are logged in one conflict row and are not reconciled. A reconciliation from the issuer would close it. Severity: Medium.

Undrawn committed facilities at 2023-12-31 are not stated, because the commitments at that date appear in no supplied source; the liquidity table states cash only for that period. The FY2023 annual report would close it. Severity: Low.

Lines the statements print as a dash, such as impairment of natural gas and oil properties in FY2023 and FY2024, exploration expense in FY2024, the issuance of senior notes and common stock in 2025 and 2023 and distributions to the noncontrolling interest in 2023, and lines that a period's statement does not present, such as the dry hole costs line in the annual statements, are written as not supplied and never as zero; the effect on totals is nil because the printed totals add. No action is needed. Severity: Low.

Total production cost per Mcfe including cash general and administrative expense and the unhedged operating margin are stated by the issuer for quarterly and nine-month periods only, so the full-year columns of those two indicators are not supplied. The fourth quarter 2025 release would close it. Severity: Low.

No stand-alone fourth quarter 2025 statement or release is supplied, so the fourth quarter is not constructed, and the quarterly columns for 2026 are not tabulated; the nine-month columns and the full years carry the periods that the leverage tables need. Severity: Low.

The balance sheet at 2025-09-30 is not in any supplied source, so no nine-month 2025 balance sheet column and no net debt at that date are stated; the nine-month 2025 figures are used only as the prior-year stub of the twelve-month construction. Severity: Low.

The exact maturity date and the call terms of the 5.875% senior notes due 2030 are not printed in the supplied filings, only the year; the 2029 notes mature on 2029-03-01. Severity: Low.

The issuer reports one business segment, so no segment revenue schedule exists, and per-share figures and share counts are not tabulated. Severity: Low.

The annual report gives two end years for the natural gas transportation and gathering contracts, 2035 in the commitments note and 2031 in the liquidity discussion, with the same amounts for later years; the commitments are outside reported debt and the end year is not established. Severity: Low.

## Next module

The orchestrator selects the next module.
