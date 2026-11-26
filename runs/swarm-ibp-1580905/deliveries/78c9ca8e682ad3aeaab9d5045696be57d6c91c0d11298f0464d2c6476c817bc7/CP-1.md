# Financial foundation for Installed Building Products, Inc.

## Request
Financial foundation for Installed Building Products, Inc. (issuer ibp-1580905) as of 2026-11-18, on the credit snapshot pathway. The scope is statements for FY2023 to FY2025 and the nine months to 2026-09-30, carrying-value debt, liquidity and post-balance-sheet events, taken from the five supplied filings and nothing else.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_ibp-20241231.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2024 | 2025-02-27 | 43fc427d223aed274776a9d6ca5fde2f55d2cbd24780a26db884964bf5d24025 | FY2023 balance sheet and debt note; FY2024 statements, debt and liquidity |
| 10-K_2025-12-31_ibp-20251231.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2025 | 2026-02-26 | 03b8de0e297ca73f1d424064b74b046864a2893576a799a6a3b13af45122b35e | FY2023 to FY2025 statements, segments, debt note, liquidity and subsequent events |
| 10-Q_2026-03-31_ibp-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | b51cc01569723de4f80fa088d333477b6826156f97750b77d9b78d776c80ed58 | Liquidity at 2026-03-31 and the net proceeds of the 2034 notes |
| 10-Q_2026-06-30_ibp-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-06 | 0fb52476a0a914dcabac5d2ccf6fcd69e5693e27d34e8893dab18a8ab8d4d520 | Liquidity at 2026-06-30 and the net proceeds of the 2034 notes |
| 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-05 | d00afa049acfbef203a56f297d83bd5f47f5a6c78105d5dbe18860b16e387f13 | Nine-month statements, 2026-09-30 balance sheet, debt, liquidity, covenant compliance and subsequent events |

| Supplied analysis | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | b0c4fcfe23a4a76917b7f6da67197053f764a1c8156a2ccb4fe03a69916503d4 | Source inventory, reporting scope, version differences between the filings, and the gaps carried forward; no financial balance or ratio is imported from it |

No external source was used, and the run settings are not listed as a source.

## Findings

### Bottom line
Credit quality is sound: net debt was 1.37x EBITDA on the 12 months to 2026-09-30 and liquidity was USD 788.0 million, though net leverage has risen from 1.14x at FY2025 as shareholder returns and acquisitions outran free cash flow while EBITDA slipped.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 2–5; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 43; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–104; calculation C35; calculation C34; calculation C54

Total debt to EBITDA is 2.26x, and the USD 250.0 million term loan add-on of 2026-10-27 postdates the balance sheet, so pro forma net debt and net leverage after it are not established. EBITDA is calculated because the issuer states none, interest cover fell to 8.76x from 12.04x, and covenant headroom cannot be assessed without the executed agreements.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 33–34; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 47–48; calculation C31; calculation C39; calculation C38

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM to 2026-09-30 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net revenue | 2,778.6 | 2,941.3 | 2,970.8 | 2,994.2 | USD millions | Reported for fiscal years; LTM calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4 |
| EBITDA (Reported) | 465.8 | 484.1 | 493.7 | 465.9 | USD millions | Calculated: operating income plus depreciation and amortization; the issuer states none | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4 |
| EBITDA margin | 16.76 | 16.46 | 16.62 | 15.56 | % | Calculated: EBITDA (Reported) over net revenue | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4 |
| Free cash flow | 278.6 | 251.4 | 300.8 | 245.2 | USD millions | Calculated: operating cash flow less purchases of property and equipment | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Cash interest paid | 42.5 | 43.7 | 41.0 | 53.2 | USD millions | Reported supplemental disclosure; LTM calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Total debt (carrying value) | 867.3 | 874.8 | 886.6 | 1,053.4 | USD millions | Calculated: current maturities plus long-term debt; 2026-09-30 in the last column | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Cash and cash equivalents | 386.5 | 327.6 | 321.9 | 415.9 | USD millions | Reported; 2026-09-30 in the last column | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Net debt | 480.8 | 547.2 | 564.7 | 637.5 | USD millions | Calculated: total debt less cash; before the 2026-10-27 add-on, whose effect on net debt is not established | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Total debt / EBITDA | 1.86 | 1.81 | 1.80 | 2.26 | x | Calculated on carrying value and EBITDA (Reported) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4 |
| Net debt / EBITDA | 1.03 | 1.13 | 1.14 | 1.37 | x | Calculated on carrying value and EBITDA (Reported) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4 |
| EBITDA / cash interest | 10.96 | 11.08 | 12.04 | 8.76 | x | Calculated on EBITDA (Reported) and cash interest paid | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4 |
| Liquidity (cash plus undrawn revolver) | Not supplied: revolver availability at 2023-12-31 is not printed | 573.6 | 568.4 | 788.0 | USD millions | Calculated; equals the issuer's stated total liquidity; the last column is 2026-09-30 | 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 83; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 85; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 43 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 1.86 | 1.03 | x | Calculated: carrying-value debt and cash at 2023-12-31 over FY2023 EBITDA (Reported), itself calculated; no covenant definition applies |
| FY2024 / 2024-12-31 | 1.81 | 1.13 | x | Calculated: carrying-value debt and cash at 2024-12-31 over FY2024 EBITDA (Reported), itself calculated; the FY2024 impairment of 4.9 is not added back |
| FY2025 / 2025-12-31 | 1.80 | 1.14 | x | Calculated: carrying-value debt and cash at 2025-12-31 over FY2025 EBITDA (Reported); before the January 2026 refinancing |
| 2026-09-30 | 2.26 | 1.37 | x | Calculated: carrying-value debt and cash at 2026-09-30 over LTM EBITDA (Reported) to 2026-09-30, derived from nine-month stubs; excludes the 2026-10-27 add-on; no covenant definition applies |

EBITDA is calculated, not issuer-stated, and the last row uses a last-twelve-month figure and excludes the 2026-10-27 term loan add-on.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 2–5; calculation C31; calculation C35

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 10.96 | x | Calculated: FY2023 EBITDA (Reported) over cash interest paid of 42.5; interest paid is not net of swap settlements |
| FY2024 / 2024-12-31 | 11.08 | x | Calculated: FY2024 EBITDA (Reported) over cash interest paid of 43.7; interest paid is not net of swap settlements |
| FY2025 / 2025-12-31 | 12.04 | x | Calculated: FY2025 EBITDA (Reported) over cash interest paid of 41.0; interest paid is not net of swap settlements of 13.6 received |
| 2026-09-30 | 8.76 | x | Calculated: LTM EBITDA (Reported) over LTM cash interest paid of 53.2; the nine months follow the January 2026 notes issue, with the first coupon on the 2034 notes due 2026-08-01, and the split of interest paid is not stated |

Cover uses cash interest paid, which is not net of swap settlements received, and the last row uses last-twelve-month figures.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5; calculation C39

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 386.5 | Not supplied: letters of credit under the revolver at 2023-12-31 are not printed in the supplied filings | US$m | Cash from the balance sheet; the revolver was undrawn at 2023-12-31 with a commitment of 250.0, but availability net of letters of credit is not supplied |
| FY2024 / 2024-12-31 | 327.6 | 246.0 | US$m | Cash 327.6; ABL commitment 250.0 less letters of credit 4.0, nothing drawn; issuer total liquidity 573.6 |
| FY2025 / 2025-12-31 | 321.9 | 246.5 | US$m | Cash 321.9; ABL commitment 250.0 less letters of credit 3.5, nothing drawn; issuer total liquidity 568.4; the commitment rose to 375.0 in January 2026 |
| 2026-03-31 | 474.3 | 371.1 | US$m | Cash 474.3; ABL commitment 375.0 less letters of credit 3.9, nothing drawn; issuer total liquidity 845.4 |
| 2026-06-30 | 394.5 | 372.1 | US$m | Cash 394.5; ABL commitment 375.0 less letters of credit 2.9, nothing drawn; issuer total liquidity 766.6 |
| 2026-09-30 | 415.9 | 372.1 | US$m | Cash 415.9; ABL commitment 375.0 less letters of credit 2.9, nothing drawn; issuer total liquidity 788.0; insurance letters of credit of 65.3 are unsecured and do not reduce liquidity; availability is limited by the borrowing base, which is not printed |

Undrawn committed facilities are the revolver commitment less letters of credit, availability depends on a borrowing base that the filings do not print, and the FY2023 availability is not supplied.
Basis: 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 83; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 85; 10-Q_2026-03-31_ibp-20260331.htm.jsonl, page 37; 10-Q_2026-06-30_ibp-20260630.htm.jsonl, page 41; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 43; calculation C54

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Remainder of 2026 | 9.0 | US$m | Printed repayment schedule at 2026-09-30, principal gross of unamortized issuance costs; covers 2026-10-01 to 2026-12-31 only, not a full year |
| 2027 | 32.4 | US$m | Printed repayment schedule at 2026-09-30; term loan amortization of 5.0 a year plus vehicle and equipment notes |
| 2028 | 25.7 | US$m | Printed repayment schedule at 2026-09-30; the 2028 notes were redeemed in January 2026, so the 2028 wall of the year-end schedule is gone |
| 2029 | 18.4 | US$m | Printed repayment schedule at 2026-09-30 |
| 2030 | 11.2 | US$m | Printed repayment schedule at 2026-09-30; the ABL Revolver matures 2031-01-21 but springs 91 days ahead of any material debt maturity |
| Thereafter | 966.3 | US$m | Printed repayment schedule at 2026-09-30; includes the term loan balloon due 2031-03-28 and the 500.0 of 2034 senior notes due 2034-02-01; the schedule does not split the years after 2030 |

The ladder is the schedule at 2026-09-30, gross of unamortized issuance costs, and its last row combines every year after 2030.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11; calculation C40

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 867.3 | 386.5 | 480.8 | US$m | Reported balance sheet at 2023-12-31; gross debt is current maturities plus long-term debt at carrying value, including the 2028 senior notes, the term loan, vehicle and equipment notes and various notes payable; finance leases (9.3) and operating leases (78.2) are on their own lines and excluded; principal is 874.2, derived from carrying value plus 6.9 of unamortized issuance costs |
| FY2024 / 2024-12-31 | 874.8 | 327.6 | 547.2 | US$m | Reported balance sheet at 2024-12-31; gross debt as for FY2023 and excludes finance leases (8.2) and operating leases (95.3); principal is 880.3, the sum of the printed repayment schedule |
| FY2025 / 2025-12-31 | 886.6 | 321.9 | 564.7 | US$m | Reported balance sheet at 2025-12-31, before the January 2026 notes issue and redemption; gross debt as for FY2023 and excludes finance leases (6.7) and operating leases (98.4); principal is 890.9, the sum of the printed repayment schedule; no pro forma figure for the January 2026 events is stated |
| 2026-09-30 | 1,053.4 | 415.9 | 637.5 | US$m | Reported balance sheet at 2026-09-30 after the January 2026 refinancing; gross debt includes the 2034 senior notes, the term loan, vehicle and equipment notes and various notes payable and excludes finance leases (10.8) and operating leases (124.6); principal is 1,063.0, the sum of the printed repayment schedule; excludes the USD 250.0 million term loan add-on of 2026-10-27 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 1,063.0 | -9.6 | 1,053.4 | US$m | Principal is the sum of the maturity rows above; reconciling items are unamortized issuance costs of 6.9 on the 2034 senior notes and 2.7 on the term loan, each deducted, and no debt is left out of the ladder; carrying value is the Gross debt of the net debt table |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| USD 250.0 million of incremental term loans under Amendment No. 5 to the term loan agreement | 2026-10-27 | Not supplied: the source states the 250.0 of principal but not the fees or how the proceeds are used, so the effect on net debt is not stated | Not supplied: depends on the effect on net debt, which is not stated | Not supplied: depends on the effect on net debt, which is not stated | US$m | Source is Note 19 of the 10-Q for the quarter ended 2026-09-30; terms are identical to the existing term loan and maturity is 2031-03-28; gross debt principal would rise by 250.0 to 1,313.0 before any use of proceeds; net debt of 637.5 at 2026-09-30 is unchanged by this event only if the proceeds are held as cash; the filing says the add-on raises variable-rate debt by 250.0 and adds 2.5 to annual interest expense for each percentage point of rates; relative to the latest balance sheet, not to FY2025 |
| Quarterly dividend of USD 0.39 per share declared, payable 2026-12-31 to holders of record 2026-12-15 | 2026-11-05 | Not supplied: the source states the per-share rate only, not the aggregate | Not supplied: depends on the aggregate, which is not stated | Not supplied: depends on the aggregate, which is not stated | US$m | Source is Note 19 of the 10-Q for the quarter ended 2026-09-30; the dividend declared for the third quarter at the same rate was 10.3 in aggregate per the equity note, an indication only; a cash outflow on 2026-12-31 that raises net debt when paid |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 2,778.6 | 465.8 | US$m | Revenue as reported; EBITDA is reported EBITDA, calculated as operating income plus depreciation and amortization, because the issuer states no adjusted EBITDA |
| FY2024 / 2024-12-31 | 2,941.3 | 484.1 | US$m | As FY2023; the FY2024 impairment of 4.9 is not added back, so the measure is unadjusted |
| FY2025 / 2025-12-31 | 2,970.8 | 493.7 | US$m | As FY2023 |
| 2026-09-30 | 2,994.2 | 465.9 | US$m | LTM to 2026-09-30, derived as FY2025 plus 9M 2026 minus 9M 2025; same reported (calculated) EBITDA identity; a twelve-month period like the annual rows |

The EBITDA column holds reported EBITDA calculated here, not an issuer-adjusted figure, and the last row is a twelve-month period built from nine-month stubs.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4; calculation C06

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| ABL Revolver | 1 | Yes | 0.0 | 0.00 | US$m | Undrawn at 2026-09-30 against a commitment of 375.0, with letters of credit of 2.9; guaranteed by all existing restricted subsidiaries and secured by substantially all assets; the filing prints lien priorities for the term loan and revolver together; cumulative leverage is cumulative principal over LTM EBITDA (Reported) of 465.9 |
| Term loan | 1 | Yes | 487.5 | 1.05 | US$m | Principal 487.5 (carrying 484.8 plus unamortized issuance costs 2.7); guaranteed by all existing restricted subsidiaries and secured by substantially all assets; shares the collateral with the revolver on the lien priorities printed; cumulative leverage is cumulative principal over LTM EBITDA (Reported) of 465.9 |
| Vehicle and equipment notes | 1 | Yes | 74.2 | 1.21 | US$m | Outstanding balance 74.2, secured by the financed vehicles and equipment note by note; the obligor and guarantor scope is not stated; ranks first only on those assets; cumulative leverage is cumulative principal over LTM EBITDA (Reported) of 465.9 |
| 5.625% Senior Notes due 2034 | 2 | No | 500.0 | 2.28 | US$m | Principal 500.0, carrying 493.1; senior unsecured; the notes to the financial statements do not name the guarantors; cumulative leverage is cumulative principal over LTM EBITDA (Reported) of 465.9 |

Amounts are principal, ranks follow the filings' security statements, and the various notes payable of USD 1.3 million are left out because no rank is stated.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 11–12; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 47–49; calculation C59

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), calculated | Not supplied: the issuer states no adjusted EBITDA, so the method has no adjustments to bridge | US$m | Opening measure is reported EBITDA calculated from operating income and depreciation and amortization; no adjustment is stated in any of the five filings |
| EBITDA (Adjusted) | Not supplied: the issuer states no adjusted EBITDA | US$m | Closing measure named by the method is the issuer's adjusted EBITDA, which does not exist in the supplied filings; no step is manufactured from the endpoints |

No bridge can be drawn because the issuer states no adjusted EBITDA.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 96; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 100–101

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_ibp-20241231.htm.jsonl | Annual report on Form 10-K for the year ended 2024-12-31 | Income statement and cash flow statement for 2024, 2023 and 2022; balance sheets at 2024-12-31 and 2023-12-31 | USD | millions (per-share amounts in dollars) | Consolidated: the registrant and its wholly-owned subsidiaries | US GAAP | Tier 1: audited statements, auditor opinion dated 2025-02-27 | FY2023 balance sheet and debt note; FY2024 statements, debt, liquidity and revolver terms at 2024-12-31 | Debt and liquidity positions are superseded by later reports; used for the 2023 and 2024 year-ends only |
| 10-K_2025-12-31_ibp-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 2025-12-31 | Income statement and cash flow statement for 2025, 2024 and 2023; balance sheets at 2025-12-31 and 2024-12-31 | USD | millions (per-share amounts in dollars) | Consolidated: the registrant and its wholly-owned subsidiaries; three operating segments, one reportable | US GAAP | Tier 1: audited statements, auditor opinion dated 2026-02-26 with a critical audit matter on the Distribution reporting unit goodwill | FY2023 to FY2025 statements, segment schedule, debt note, liquidity and subsequent events | Year-end debt still includes the 2028 notes redeemed in January 2026; the debt note prints revolver terms that the January 2026 amendment replaced |
| 10-Q_2026-03-31_ibp-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 | Three months to 2026-03-31 with 2025 comparatives | USD | millions | Consolidated: the registrant and its wholly-owned subsidiaries | US GAAP | Tier 2b: unaudited; auditor review not stated in the filing | Liquidity at 2026-03-31 only (cash, revolver commitment and letters of credit) | Statements not extracted; the later quarterly reports carry the same year-to-date periods |
| 10-Q_2026-06-30_ibp-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 | Three and six months to 2026-06-30 with 2025 comparatives | USD | millions | Consolidated: the registrant and its wholly-owned subsidiaries | US GAAP | Tier 2b: unaudited; auditor review not stated in the filing | Liquidity at 2026-06-30 only (cash, revolver commitment and letters of credit) | Statements not extracted; the later quarterly report carries the nine-month period |
| 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 | Three and nine months to 2026-09-30 with 2025 comparatives; balance sheet at 2026-09-30 with 2025-12-31 comparative | USD | millions (per-share amounts in dollars) | Consolidated: the registrant and its wholly-owned subsidiaries | US GAAP | Tier 2b: unaudited; auditor review not stated in the filing | Nine-month statements, 2026-09-30 balance sheet, debt note, liquidity, covenant compliance statement and subsequent events | The September 2025 balance sheet is not in any supplied filing; nothing after the filing signature of 2026-11-05 is covered |

The income statement, cash flow statement and balance sheet are sufficient for every requested conclusion except covenant capacity, because no executed agreement or availability threshold is supplied, and any adjusted earnings measure, because the issuer states none.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 2–5; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 47–48

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Installed Building Products, Inc. | Registrant and reporting parent; party to the Term Loan and ABL Credit Agreements and issuer of the 2034 Senior Notes (the filings write 'we' and 'the Company'; the run settings leave borrower and parent blank) | December 31 | USD | millions | Consolidated: the registrant and its wholly-owned subsidiaries; Installation is the one reportable segment, Distribution and Manufacturing are reported together as Other | US GAAP | FY2023, FY2024 and FY2025 (audited, annual); 9M 2025 and 9M 2026 (unaudited, nine months); balance sheets at 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30; LTM to 2026-09-30 constructed |
| All existing restricted subsidiaries | Guarantors of the Term Loan and the ABL Revolver | December 31 | USD | millions | Not supplied: no standalone or guarantor-group statements are printed | US GAAP | Not supplied: the notes give no guarantor figures |
| Guarantors of the 2034 Senior Notes | Not supplied: the notes to the financial statements do not name the guarantors of the 2034 Senior Notes | Not supplied: not applicable to an unnamed group | USD | millions | Not supplied: the guarantor group is not stated | US GAAP | Not supplied |

Subsequent events are kept outside the period figures. On 2026-01-21 the 2034 senior notes of USD 500.0 million were issued and the 2028 senior notes redeemed, and the revolver commitment rose to USD 375.0 million with its maturity moved to 2031-01-21. On 2026-02-26 an annual variable dividend, a quarterly dividend and a new repurchase authorisation of up to USD 500.0 million were announced. On 2026-10-27 Amendment No. 5 added USD 250.0 million of incremental term loans, and on 2026-11-05 a quarterly dividend of USD 0.39 per share was declared. Balance sheet figures are instants at the dates stated, and flows run over the Start and End dates below.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 150–151; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 12–13; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 33–34

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| One currency and unit: every statement is USD millions as printed; share counts and per-share amounts are not used | 10-K_2025-12-31_ibp-20251231.htm.jsonl | None required | USD millions as printed | USD millions | The filings are in one currency and one unit; no rate or scale conversion applies | All |
| EBITDA (Reported) calculated as operating income plus depreciation and amortization of property and equipment plus amortization of intangibles | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Derivation (the issuer states no EBITDA) | Operating income 386.4 for FY2025 | EBITDA 493.7 for FY2025 | Method step 4: derive from components and label as calculated; operating-lease right-of-use amortization, deferred financing cost amortization and stock compensation are not added back; the FY2024 impairment of 4.9 stays in | FY2023, FY2024, FY2025, 9M 2025, 9M 2026 |
| Total Debt taken as current maturities of long-term debt plus long-term debt at carrying value | 10-K_2024-12-31_ibp-20241231.htm.jsonl; 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Perimeter | Principal 1,063.0 at 2026-09-30 | Carrying value 1,053.4 | Method debt basis: balance-sheet carrying value net of issuance costs; principal kept in the reconciliation; finance leases (10.8) and operating leases (124.6) on their own lines are excluded | FY2023, FY2024, FY2025, 9M 2026 |
| Source dashes treated as missing, not zero | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Missing value rule | — | Not supplied | Method null rule: a dash or blank is a missing value with a gap line | Lines named under Gaps |
| LTM to 2026-09-30 built as FY2025 plus 9M 2026 minus 9M 2025 for income, cash flow and interest lines | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Derived period | FY2025 EBITDA 493.7 | LTM EBITDA 465.9 | Method step 8: latest full year plus current stub minus prior-year stub; the two nine-month stubs are comparable | 2026-09-30 |
| Interest: income statement interest expense, net kept apart from cash interest paid | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Definition | Interest expense, net 31.7 for FY2025 | Cash interest paid 41.0 for FY2025 | Cover uses cash interest paid, as the method requires; the two differ in timing and by swap settlements | FY2023, FY2024, FY2025, 9M 2025, 9M 2026 |
| Other expense (income) sign: income is negative, as the filings print it | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Presentation | (2.3) | -2.3 | One sign convention for every table | All |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net revenue | 2,778.6 | 2,941.3 | 2,970.8 | 2,223.3 | 2,246.7 | USD millions | Reported (Tier 1 audited for fiscal years, Tier 2b unaudited for nine months) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Cost of sales | 1,847.9 | 1,946.8 | 1,961.5 | 1,475.5 | 1,518.1 | USD millions | Reported (Tier 1 audited for fiscal years, Tier 2b unaudited for nine months) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Gross profit | 930.7 | 994.5 | 1,009.3 | 747.8 | 728.6 | USD millions | Reported (Tier 1 audited for fiscal years, Tier 2b unaudited for nine months) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Selling | 131.8 | 139.8 | 144.6 | 107.3 | 107.9 | USD millions | Reported (Tier 1 audited for fiscal years, Tier 2b unaudited for nine months) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Administrative | 385.3 | 424.8 | 437.2 | 332.6 | 345.0 | USD millions | Reported (Tier 1 audited for fiscal years, Tier 2b unaudited for nine months) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Asset impairment | Not supplied: the filing prints a dash for this line | 4.9 | Not supplied: the filing prints a dash for this line | Not supplied: the filing prints no such line for this period | Not supplied: the filing prints no such line for this period | USD millions | Reported; FY2024 charge is a one-off inside operating income, not added back | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Amortization | 44.5 | 42.5 | 41.1 | 30.3 | 31.8 | USD millions | Reported; amortization of intangibles | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Operating income | 369.1 | 382.5 | 386.4 | 277.6 | 243.9 | USD millions | Reported (Tier 1 audited for fiscal years, Tier 2b unaudited for nine months) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Interest expense, net | 37.0 | 36.9 | 31.7 | 23.5 | 31.2 | USD millions | Reported; net of interest income and of swap settlement benefit, so not cash interest | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Interest income | Not supplied: interest income is netted within Interest expense, net and not printed separately | Not supplied: interest income is netted within Interest expense, net and not printed separately | Not supplied: interest income is netted within Interest expense, net and not printed separately | Not supplied: interest income is netted within Interest expense, net and not printed separately | Not supplied: interest income is netted within Interest expense, net and not printed separately | USD millions | Not available | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Other expense (income) | -1.0 | -0.8 | -2.3 | -0.9 | -0.7 | USD millions | Reported; a negative figure is income, as the filing prints it in brackets | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Income before income taxes | 333.1 | 346.4 | 357.0 | 255.0 | 213.4 | USD millions | Reported (Tier 1 audited for fiscal years, Tier 2b unaudited for nine months) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Income tax provision | 89.4 | 89.8 | 91.6 | 66.2 | 54.3 | USD millions | Reported (Tier 1 audited for fiscal years, Tier 2b unaudited for nine months) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Net income | 243.7 | 256.6 | 265.4 | 188.8 | 159.1 | USD millions | Reported (Tier 1 audited for fiscal years, Tier 2b unaudited for nine months) | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Depreciation and amortization of property and equipment | 52.2 | 59.1 | 66.2 | 49.2 | 53.6 | USD millions | Reported in the cash flow statement; depreciation sits mainly in cost of sales | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Amortization of intangibles | 44.5 | 42.5 | 41.1 | 30.3 | 31.8 | USD millions | Reported in the cash flow statement; equals the Amortization line | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Total depreciation and amortization | 96.7 | 101.6 | 107.3 | 79.5 | 85.4 | USD millions | Calculated: the two lines above | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Non-cash stock compensation | 15.9 | 19.4 | 21.5 | 16.5 | 17.5 | USD millions | Reported in the cash flow statement; not added back to EBITDA | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| EBITDA (Reported) | 465.8 | 484.1 | 493.7 | 357.1 | 329.3 | USD millions | Calculated: operating income plus total depreciation and amortization; the issuer states no EBITDA or adjusted EBITDA; unadjusted, so the FY2024 impairment is not added back | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4 |
| Installation segment revenue | 2,605.6 | 2,761.9 | 2,763.6 | 2,083.9 | 2,060.9 | USD millions | Reported segment schedule; reconciles to Net revenue | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18 |
| Other revenue (Distribution and Manufacturing, before eliminations) | 182.0 | 196.9 | 258.6 | 173.9 | 251.1 | USD millions | Reported segment schedule; reconciles to Net revenue | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18 |
| Elimination of inter-segment revenue | -9.0 | -17.5 | -51.4 | -34.5 | -65.3 | USD millions | Reported segment schedule; reconciles to Net revenue | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18 |
| Installation segment gross profit | 930.9 | 1,002.0 | 1,021.1 | 760.9 | 735.1 | USD millions | Reported segment schedule; gross profit before depreciation and amortization, which is shown as a deduction; reconciles to Gross profit | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18 |
| Other gross profit (Distribution and Manufacturing, before eliminations) | 51.3 | 53.1 | 65.2 | 42.7 | 61.5 | USD millions | Reported segment schedule; gross profit before depreciation and amortization, which is shown as a deduction; reconciles to Gross profit | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18 |
| Elimination of inter-segment gross profit | -2.3 | -5.2 | -15.6 | -10.1 | -18.4 | USD millions | Reported segment schedule; gross profit before depreciation and amortization, which is shown as a deduction; reconciles to Gross profit | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18 |
| Depreciation and amortization excluded from segment cost of sales | -49.2 | -55.4 | -61.4 | -45.7 | -49.6 | USD millions | Reported segment schedule; gross profit before depreciation and amortization, which is shown as a deduction; reconciles to Gross profit | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18 |

### Third quarter results

| Line item | Q3 2026 | Q3 2025 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- |
| Net revenue | 808.4 | 778.2 | USD millions | Reported, unaudited; a three-month period, so not comparable with the 12-month ratios | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Gross profit | 257.4 | 264.2 | USD millions | Reported, unaudited; a three-month period, so not comparable with the 12-month ratios | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Operating income | 91.7 | 106.8 | USD millions | Reported, unaudited; a three-month period, so not comparable with the 12-month ratios | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Interest expense, net | 10.4 | 6.9 | USD millions | Reported, unaudited; a three-month period, so not comparable with the 12-month ratios | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Income before income taxes | 81.2 | 100.3 | USD millions | Reported, unaudited; a three-month period, so not comparable with the 12-month ratios | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Net income | 59.4 | 74.4 | USD millions | Reported, unaudited; a three-month period, so not comparable with the 12-month ratios | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Dividends declared | 10.3 | 10.1 | USD millions | Reported in the three-month equity statement | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |
| Common stock repurchase | Not supplied: the three-month equity statement shows no repurchase for 2026 | 52.0 | USD millions | Reported in the three-month equity statement; the 2025 amount is inclusive of excise tax | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 243.7 | 256.6 | 265.4 | 188.8 | 159.1 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Depreciation and amortization of property and equipment | 52.2 | 59.1 | 66.2 | 49.2 | 53.6 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Amortization of operating lease right-of-use assets | 29.0 | 32.9 | 37.6 | 27.2 | 29.9 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Amortization of intangibles | 44.5 | 42.5 | 41.1 | 30.3 | 31.8 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Amortization of deferred financing costs and debt discount | 1.9 | 1.6 | 1.5 | 1.2 | 1.4 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Provision for credit losses | 6.3 | 6.0 | 8.1 | 6.1 | 6.4 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Write-off of debt issuance costs | 0.9 | 1.5 | Not supplied: the filing prints a dash for this line | Not supplied: the filing prints a dash for this line | 1.2 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Gain on sale of property and equipment | -1.9 | -1.9 | -1.6 | -1.1 | -0.2 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Non-cash stock compensation | 15.9 | 19.4 | 21.5 | 16.5 | 17.5 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Asset impairment | Not supplied: the filing prints a dash for this line | 4.9 | Not supplied: the filing prints a dash for this line | Not supplied: the filing prints no such line for this period | Not supplied: the filing prints no such line for this period | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Deferred income taxes | 0.5 | 1.7 | 3.7 | Not supplied: the filing prints no such line for this period | Not supplied: the filing prints no such line for this period | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Other, net | -12.2 | -13.1 | -12.1 | -9.0 | -5.3 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Change in accounts receivable | -25.1 | -10.8 | -13.7 | -17.5 | -42.3 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Change in inventories | 16.5 | -26.3 | -5.8 | 8.5 | -18.2 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Change in other assets | -11.0 | -7.9 | 1.2 | 16.0 | 0.6 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Change in accounts payable | 5.1 | -18.8 | -25.2 | -9.1 | 19.9 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Change in income taxes receivable/payable | -5.7 | 3.4 | 2.1 | 4.8 | 3.9 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Change in other liabilities | -20.4 | -10.8 | -18.6 | -5.4 | -13.4 | USD millions | Reported; operating activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Net Cash from Operating Activities | 340.2 | 340.0 | 371.4 | 306.5 | 245.9 | USD millions | Reported subtotal | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5 |
| Purchases of property and equipment | -61.6 | -88.6 | -70.6 | -55.0 | -50.0 | USD millions | Reported; investing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Acquisitions of businesses, net of cash acquired | -59.6 | -88.6 | -51.5 | -32.3 | -63.2 | USD millions | Reported; investing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Proceeds from sale of property and equipment | 2.7 | 2.9 | 2.7 | 1.9 | 1.6 | USD millions | Reported; investing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Settlements with interest rate swap counterparties | 16.7 | 17.5 | 13.6 | 10.4 | Not supplied: the filing prints a dash for this line | USD millions | Reported; investing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Other investing, net | -1.6 | -2.3 | -6.2 | -5.4 | -2.6 | USD millions | Reported; investing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Net Cash from Investing Activities | -103.4 | -159.1 | -112.0 | -80.4 | -114.2 | USD millions | Reported subtotal | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Proceeds from term loan | Not supplied: the filing prints a dash for this line | 186.0 | Not supplied: the filing prints a dash for this line | Not supplied: the filing prints no such line for this period | Not supplied: the filing prints no such line for this period | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Payments on term loan | -5.0 | -179.8 | -5.0 | -3.8 | -3.8 | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Proceeds from Senior Notes | Not supplied: the filing prints no such line for this period | Not supplied: the filing prints no such line for this period | Not supplied: the filing prints no such line for this period | Not supplied: the filing prints a dash for this line | 500.0 | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Payments on Senior Notes | Not supplied: the filing prints no such line for this period | Not supplied: the filing prints no such line for this period | Not supplied: the filing prints no such line for this period | Not supplied: the filing prints a dash for this line | -300.0 | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Proceeds from vehicle and equipment notes payable | 38.7 | 28.7 | 46.3 | 31.6 | Not supplied: the filing prints a dash for this line | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Debt issuance costs | -0.5 | -1.5 | Not supplied: the filing prints a dash for this line | Not supplied: the filing prints a dash for this line | -9.1 | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Principal payments on long-term debt | -29.5 | -30.0 | -31.2 | -22.7 | -24.5 | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Principal payments on finance lease obligations | -2.9 | -3.0 | -3.1 | -2.2 | -3.1 | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Acquisition-related obligations | -4.7 | -2.2 | -2.8 | -1.6 | -1.9 | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Dividends paid | -63.1 | -84.7 | -87.6 | -77.7 | -80.1 | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Repurchase of common stock | -6.3 | -145.3 | -172.6 | -134.9 | -101.7 | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Surrender of common stock awards by employees | -6.6 | -8.0 | -9.1 | -9.1 | -13.5 | USD millions | Reported; financing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Net Cash from Financing Activities | -79.9 | -239.8 | -265.1 | -220.4 | -37.7 | USD millions | Reported subtotal | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Net Cash Change | 156.9 | -58.9 | -5.7 | 5.7 | 94.0 | USD millions | Reported; operating plus investing plus financing; the filing prints no FX effect | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Opening Cash | 229.6 | 386.5 | 327.6 | 327.6 | 321.9 | USD millions | Reported cash and cash equivalents at beginning of period | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Closing Cash | 386.5 | 327.6 | 321.9 | 333.3 | 415.9 | USD millions | Reported cash and cash equivalents at end of period; 9M 2025 closing cash is the 2025-09-30 balance printed in the cash flow statement | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Cash Interest Paid | 42.5 | 43.7 | 41.0 | 34.9 | 47.1 | USD millions | Reported supplemental disclosure, net cash paid for interest; not net of interest rate swap settlements | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 |
| Income taxes paid, net of refunds | 92.5 | 83.6 | 82.1 | 57.7 | 50.7 | USD millions | Reported supplemental disclosure; 9M 2026 includes cash paid for federal tax credits of USD 7.0 million per the filing note | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 5–6 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 386.5 | 327.6 | 321.9 | 415.9 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Accounts receivable, net | 423.3 | 433.9 | 444.1 | 485.2 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Inventories | 162.8 | 194.6 | 203.0 | 223.9 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Prepaid expenses and other current assets | 97.4 | 98.8 | 73.6 | 69.3 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Total current assets | 1,070.0 | 1,054.9 | 1,042.6 | 1,194.3 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Property and equipment, net | 137.2 | 174.8 | 183.3 | 196.0 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Operating lease right-of-use assets | 78.1 | 95.6 | 98.7 | 120.0 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Goodwill | 398.8 | 432.6 | 450.4 | 475.6 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Customer relationships, net | 179.6 | 178.8 | 172.2 | 174.8 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Other intangibles, net | 89.1 | 91.7 | 89.3 | 92.6 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Other non-current assets | 28.5 | 31.5 | 31.5 | 47.6 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Total Assets | 1,981.3 | 2,059.9 | 2,068.0 | 2,300.9 | USD millions | Reported total assets | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Current maturities of long-term debt | 32.2 | 32.4 | 36.6 | 33.7 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Current maturities of operating lease obligations | 28.3 | 34.3 | 37.0 | 39.7 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Current maturities of finance lease obligations | 2.7 | 2.8 | 2.7 | 4.0 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Accounts payable | 158.6 | 146.6 | 119.0 | 141.3 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Accrued compensation | 59.6 | 66.4 | 69.5 | 78.2 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Other current liabilities | 65.0 | 76.5 | 79.4 | 85.8 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Total current liabilities | 346.4 | 359.0 | 344.2 | 382.7 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Long-term debt | 835.1 | 842.4 | 850.0 | 1,019.7 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Operating lease obligations | 49.9 | 61.0 | 61.4 | 84.9 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Finance lease obligations | 6.6 | 5.4 | 4.0 | 6.8 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Deferred income taxes | 24.5 | 26.3 | 24.7 | 25.5 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Other long-term liabilities | 48.5 | 60.5 | 73.8 | 85.0 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Total Liabilities | 1,311.0 | 1,354.6 | 1,358.1 | 1,604.6 | USD millions | Reported total liabilities | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Common stock | 0.3 | 0.3 | 0.3 | 0.3 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Additional paid in capital | 244.7 | 261.3 | 284.1 | 303.2 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Retained earnings | 693.8 | 865.5 | 1,043.4 | 1,122.6 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Treasury stock, at cost | -302.2 | -456.8 | -640.0 | -755.9 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Accumulated other comprehensive income | 33.7 | 35.0 | 22.1 | 26.1 | USD millions | Reported; balance sheet date 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 (9M 2026 column) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Total Equity | 670.3 | 705.3 | 709.9 | 696.3 | USD millions | Reported total stockholders' equity; no temporary equity or minority interest is printed | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Total Debt | 867.3 | 874.8 | 886.6 | 1,053.4 | USD millions | Calculated: current maturities of long-term debt plus long-term debt, at carrying value net of issuance costs and discounts; includes vehicle and equipment notes and various notes payable; finance and operating lease obligations are on their own lines and excluded | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 118; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11 |
| Cash & Equivalents | 386.5 | 327.6 | 321.9 | 415.9 | USD millions | Reported cash and cash equivalents; no restricted cash or short-term investment line is printed | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Senior unsecured notes, carrying value | 297.5 | 298.2 | 298.8 | 493.1 | USD millions | Reported debt note: 5.75% notes due 2028 until redeemed in January 2026, then the 2034 notes net of unamortized issuance costs (2026-09-30: 6.9) | 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 118; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11 |
| Term loan, carrying value | 485.6 | 492.5 | 488.1 | 484.8 | USD millions | Reported debt note, net of unamortized issuance costs (2.7 at 2026-09-30); secured | 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 118; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11 |
| Vehicle and equipment notes, carrying value | 83.0 | 82.3 | 98.5 | 74.2 | USD millions | Reported debt note; collateral is the financed vehicles and equipment | 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 118; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11 |
| Various notes payable, carrying value | 1.2 | 1.8 | 1.2 | 1.3 | USD millions | Reported debt note; security not stated | 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 118; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11 |
| Senior Secured Debt | Not supplied: the filings give security per instrument but no senior secured total, and the ranking of the vehicle notes is not stated | Not supplied: the filings give security per instrument but no senior secured total, and the ranking of the vehicle notes is not stated | Not supplied: the filings give security per instrument but no senior secured total, and the ranking of the vehicle notes is not stated | Not supplied: the filings give security per instrument but no senior secured total, and the ranking of the vehicle notes is not stated | USD millions | Not available; see the debt instruments register for security as printed | 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 118; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11 |
| Subordinated Debt | Not supplied: the debt note lists no subordinated instrument and prints no subordinated total | Not supplied: the debt note lists no subordinated instrument and prints no subordinated total | Not supplied: the debt note lists no subordinated instrument and prints no subordinated total | Not supplied: the debt note lists no subordinated instrument and prints no subordinated total | USD millions | Not available | 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 118; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11 |
| Finance lease obligations, total | 9.3 | 8.2 | 6.7 | 10.8 | USD millions | Calculated: current plus non-current finance lease lines; outside Total Debt | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 13–14 |
| Operating lease obligations, total | 78.2 | 95.3 | 98.4 | 124.6 | USD millions | Calculated: current plus non-current operating lease lines; outside Total Debt | 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 13–14 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5.625% Senior Notes due 2034 | Senior notes | 493.1 | 500.0 | 500.0 | Not applicable | Unsecured (the filing calls them senior unsecured notes) | Senior unsecured; relative rank to other debt not stated beyond that | USD | 493.1 | Not applicable | 5.625% | Fixed | Not applicable | Not applicable | Not applicable | 2034-02-01 | 0.0 | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 11–12 |
| Term loan | Term loan, seven-year facility amended March 2024 | 484.8 | 487.5 | 487.5 | Not applicable | Secured by substantially all assets of the registrant and guarantors; the filing prints a first-priority interest in ABL Priority Collateral and a second-priority interest in Term Loan Priority Collateral for the term loan and the revolver together and does not allocate them | Secured; lien priority by collateral pool as printed | USD | 484.8 | Not applicable | Term SOFR plus 1.75% (or base rate plus 0.75%) | Floating | Adjusted Term SOFR | 175 | Not supplied: no floor is stated | 2031-03-28 | 5.0 | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 47; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 51; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 125–126 |
| ABL Revolver | Asset-based revolving credit facility | Not applicable: undrawn | Not applicable: undrawn | 0.0 | 375.0 | Secured by substantially all assets of the registrant and guarantors; lien priority as for the term loan | Secured; lien priority by collateral pool as printed | USD | 0.0 | Not applicable | Term SOFR plus 1.00% or 1.25% (or base rate plus 0.00% or 0.25%), by availability | Floating | Term SOFR | 100 to 125 | Not supplied: no floor is stated | 2031-01-21 (springing 91 days ahead of any material indebtedness) | Not applicable | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 12–13; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 36; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 47–48 |
| Vehicle and equipment notes | Equipment finance notes under master loan and equipment agreements | 74.2 | 74.2 | 74.2 | Not applicable | Secured by the financed vehicles and equipment, note by note | Secured on the specific financed assets | USD | 74.2 | Not applicable | 1.9% to 7.3% | Not supplied: the filing does not say whether the notes are fixed or floating | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Through 2030-11 (monthly installments) | Not supplied: scheduled annual principal for these notes alone is not stated | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 49 |
| Various notes payable | Notes payable in annual installments | 1.3 | 1.3 | 1.3 | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 1.3 | Not applicable | 5.0% | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Through 2028-10 (annual installments) | Not supplied: scheduled annual principal is not stated | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11 |

Carrying values of USD 493.1 million, USD 484.8 million, USD 74.2 million and USD 1.3 million add to the Total Debt of USD 1,053.4 million at 2026-09-30, and the revolver is undrawn. Finance lease obligations of USD 10.8 million sit on their own balance sheet lines and are not in these rows. The registrant is the issuer of the notes and the borrower under the credit agreements as the filings write it, and no co-issuer is named. The term loan and the revolver are guaranteed by all existing restricted subsidiaries; the guarantors of the 2034 notes, the vehicle and equipment notes and the various notes payable are not stated. Two interest rate swaps hedge USD 400.0 million of the term loan variable cash flows through 2028-12-14.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 11–14; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 48

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net revenue | LTM | USD 2,970.8m | USD 2,246.7m | USD 2,223.3m | USD 2,994.2m | Calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Nine-month stubs are comparable; both unaudited |
| Operating income | LTM | USD 386.4m | USD 243.9m | USD 277.6m | USD 352.7m | Calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Nine-month stubs are comparable; both unaudited |
| Total depreciation and amortization | LTM | USD 107.3m | USD 85.4m | USD 79.5m | USD 113.2m | Calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Sum of two cash flow lines; nine-month stubs are comparable |
| EBITDA (Reported) | LTM | USD 493.7m | USD 329.3m | USD 357.1m | USD 465.9m | Calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Calculated measure; the issuer states no EBITDA; nine-month stubs are comparable |
| Net income | LTM | USD 265.4m | USD 159.1m | USD 188.8m | USD 235.7m | Calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Nine-month stubs are comparable; both unaudited |
| Cash interest paid | LTM | USD 41.0m | USD 47.1m | USD 34.9m | USD 53.2m | Calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Not net of swap settlements; semi-annual coupon timing makes any nine-month stub lumpy |
| Net cash from operating activities | LTM | USD 371.4m | USD 245.9m | USD 306.5m | USD 310.8m | Calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Nine-month stubs are comparable; both unaudited |
| Purchases of property and equipment | LTM | USD 70.6m | USD 50.0m | USD 55.0m | USD 65.6m | Calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Outflow shown as a positive amount; nine-month stubs are comparable |
| Free cash flow | LTM | USD 300.8m | USD 195.9m | USD 251.5m | USD 245.2m | Calculated | 10-K_2025-12-31_ibp-20251231.htm.jsonl; 10-Q_2026-09-30_ibp-20260930.htm.jsonl | Operating cash flow less purchases of property and equipment; no maintenance and growth split is stated |

No reported fourth quarter of 2025 exists in the supplied filings, and a stand-alone fourth quarter is not constructed because no later metric depends on it. No pro forma adjustment is built into any period figure: the term loan add-on of 2026-10-27 and the dividend declaration of 2026-11-05 sit in the post-balance-sheet table.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–5; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 33–34

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 867.3 | Net debt data Gross debt; 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99 | 465.8 | T4.4 EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103 | FY2023 / 2023-12-31 | USD | US$m | 1.86 | Calculated | Tier 1 audited | EBITDA is calculated because the issuer states none; carrying-value debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 480.8 | Net debt data Net debt; 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 98–99 | 465.8 | T4.4 EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103 | FY2023 / 2023-12-31 | USD | US$m | 1.03 | Calculated | Tier 1 audited | Net debt is carrying-value debt less cash; EBITDA is calculated |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 465.8 | T4.4 EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103 | 42.5 | T4.5 Cash Interest Paid; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104 | FY2023 / 2023-12-31 | USD | US$m | 10.96 | Calculated | Tier 1 audited | Cash interest paid is not net of swap settlements; EBITDA is calculated |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 874.8 | Net debt data Gross debt; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102 | 484.1 | T4.4 EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103 | FY2024 / 2024-12-31 | USD | US$m | 1.81 | Calculated | Tier 1 audited | EBITDA is calculated because the issuer states none; carrying-value debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 547.2 | Net debt data Net debt; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102 | 484.1 | T4.4 EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103 | FY2024 / 2024-12-31 | USD | US$m | 1.13 | Calculated | Tier 1 audited | Net debt is carrying-value debt less cash; EBITDA is calculated |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 484.1 | T4.4 EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103 | 43.7 | T4.5 Cash Interest Paid; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104 | FY2024 / 2024-12-31 | USD | US$m | 11.08 | Calculated | Tier 1 audited | Cash interest paid is not net of swap settlements; EBITDA is calculated |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 886.6 | Net debt data Gross debt; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102 | 493.7 | T4.4 EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103 | FY2025 / 2025-12-31 | USD | US$m | 1.80 | Calculated | Tier 1 audited | EBITDA is calculated because the issuer states none; carrying-value debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 564.7 | Net debt data Net debt; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102 | 493.7 | T4.4 EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103 | FY2025 / 2025-12-31 | USD | US$m | 1.14 | Calculated | Tier 1 audited | Net debt is carrying-value debt less cash; EBITDA is calculated |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 493.7 | T4.4 EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103 | 41.0 | T4.5 Cash Interest Paid; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104 | FY2025 / 2025-12-31 | USD | US$m | 12.04 | Calculated | Tier 1 audited | Cash interest paid is not net of swap settlements; EBITDA is calculated |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1,053.4 | Net debt data Gross debt; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 | 465.9 | T4.8 LTM EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4 | 2026-09-30 | USD | US$m | 2.26 | Calculated | Tier 1 audited and Tier 2b unaudited, LTM derived | EBITDA is calculated because the issuer states none; carrying-value debt; LTM denominator derived from nine-month stubs; excludes the 2026-10-27 add-on |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 637.5 | Net debt data Net debt; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 | 465.9 | T4.8 LTM EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4 | 2026-09-30 | USD | US$m | 1.37 | Calculated | Tier 1 audited and Tier 2b unaudited, LTM derived | Net debt is carrying-value debt less cash; EBITDA is calculated; LTM denominator derived from nine-month stubs; excludes the 2026-10-27 add-on |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 465.9 | T4.8 LTM EBITDA (Reported); 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4 | 53.2 | T4.8 LTM cash interest paid; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5 | 2026-09-30 | USD | US$m | 8.76 | Calculated | Tier 1 audited and Tier 2b unaudited, LTM derived | Cash interest paid is not net of swap settlements; EBITDA is calculated; LTM denominator derived from nine-month stubs; excludes the 2026-10-27 add-on |
| Net revenue growth | Net revenue FY2024 / Net revenue FY2023 - 1, x 100 | 2,941.3 | T4.4 Net revenue FY2024 | 2,778.6 | T4.4 Net revenue FY2023 | FY2024 | USD | US$m | 5.86 | Calculated | Tier 1 audited | Percent; includes acquired revenue |
| Net revenue growth | Net revenue FY2025 / Net revenue FY2024 - 1, x 100 | 2,970.8 | T4.4 Net revenue FY2025 | 2,941.3 | T4.4 Net revenue FY2024 | FY2025 | USD | US$m | 1.00 | Calculated | Tier 1 audited | Percent; includes acquired revenue |
| Net revenue growth | Net revenue 9M 2026 / Net revenue 9M 2025 - 1, x 100 | 2,246.7 | T4.4 Net revenue 9M 2026 | 2,223.3 | T4.4 Net revenue 9M 2025 | 9M 2026 | USD | US$m | 1.05 | Calculated | Tier 2b unaudited | Percent; includes acquired revenue; nine-month periods |
| EBITDA growth | EBITDA (Reported) FY2024 / EBITDA (Reported) FY2023 - 1, x 100 | 484.1 | T4.4 EBITDA (Reported) FY2024 | 465.8 | T4.4 EBITDA (Reported) FY2023 | FY2024 | USD | US$m | 3.93 | Calculated | Tier 1 audited | Percent; calculated EBITDA |
| EBITDA growth | EBITDA (Reported) FY2025 / EBITDA (Reported) FY2024 - 1, x 100 | 493.7 | T4.4 EBITDA (Reported) FY2025 | 484.1 | T4.4 EBITDA (Reported) FY2024 | FY2025 | USD | US$m | 1.98 | Calculated | Tier 1 audited | Percent; calculated EBITDA |
| EBITDA growth | EBITDA (Reported) 9M 2026 / EBITDA (Reported) 9M 2025 - 1, x 100 | 329.3 | T4.4 EBITDA (Reported) 9M 2026 | 357.1 | T4.4 EBITDA (Reported) 9M 2025 | 9M 2026 | USD | US$m | -7.78 | Calculated | Tier 2b unaudited | Percent; calculated EBITDA; nine-month periods |
| EBITDA margin | EBITDA (Reported) / Net revenue, x 100 | 465.8 | T4.4 EBITDA (Reported) FY2023 | 2,778.6 | T4.4 Net revenue FY2023 | FY2023 | USD | US$m | 16.76 | Calculated | Tier 1 audited | Percent; calculated EBITDA |
| EBITDA margin | EBITDA (Reported) / Net revenue, x 100 | 484.1 | T4.4 EBITDA (Reported) FY2024 | 2,941.3 | T4.4 Net revenue FY2024 | FY2024 | USD | US$m | 16.46 | Calculated | Tier 1 audited | Percent; calculated EBITDA |
| EBITDA margin | EBITDA (Reported) / Net revenue, x 100 | 493.7 | T4.4 EBITDA (Reported) FY2025 | 2,970.8 | T4.4 Net revenue FY2025 | FY2025 | USD | US$m | 16.62 | Calculated | Tier 1 audited | Percent; calculated EBITDA |
| EBITDA margin | EBITDA (Reported) / Net revenue, x 100 | 357.1 | T4.4 EBITDA (Reported) 9M 2025 | 2,223.3 | T4.4 Net revenue 9M 2025 | 9M 2025 | USD | US$m | 16.06 | Calculated | Tier 2b unaudited | Percent; calculated EBITDA |
| EBITDA margin | EBITDA (Reported) / Net revenue, x 100 | 329.3 | T4.4 EBITDA (Reported) 9M 2026 | 2,246.7 | T4.4 Net revenue 9M 2026 | 9M 2026 | USD | US$m | 14.66 | Calculated | Tier 2b unaudited | Percent; calculated EBITDA |
| Free cash flow conversion | Free cash flow / EBITDA (Reported), x 100 | 278.6 | T4.5 operating cash flow less purchases of property and equipment FY2023 | 465.8 | T4.4 EBITDA (Reported) FY2023 | FY2023 | USD | US$m | 59.81 | Calculated | Tier 1 audited | Percent; free cash flow is operating cash flow less purchases of property and equipment, after working capital |
| Free cash flow conversion | Free cash flow / EBITDA (Reported), x 100 | 251.4 | T4.5 operating cash flow less purchases of property and equipment FY2024 | 484.1 | T4.4 EBITDA (Reported) FY2024 | FY2024 | USD | US$m | 51.93 | Calculated | Tier 1 audited | Percent; free cash flow is operating cash flow less purchases of property and equipment, after working capital |
| Free cash flow conversion | Free cash flow / EBITDA (Reported), x 100 | 300.8 | T4.5 operating cash flow less purchases of property and equipment FY2025 | 493.7 | T4.4 EBITDA (Reported) FY2025 | FY2025 | USD | US$m | 60.93 | Calculated | Tier 1 audited | Percent; free cash flow is operating cash flow less purchases of property and equipment, after working capital |
| Free cash flow conversion | Free cash flow / EBITDA (Reported), x 100 | 251.5 | T4.5 operating cash flow less purchases of property and equipment 9M 2025 | 357.1 | T4.4 EBITDA (Reported) 9M 2025 | 9M 2025 | USD | US$m | 70.43 | Calculated | Tier 2b unaudited | Percent; free cash flow is operating cash flow less purchases of property and equipment, after working capital |
| Free cash flow conversion | Free cash flow / EBITDA (Reported), x 100 | 195.9 | T4.5 operating cash flow less purchases of property and equipment 9M 2026 | 329.3 | T4.4 EBITDA (Reported) 9M 2026 | 9M 2026 | USD | US$m | 59.49 | Calculated | Tier 2b unaudited | Percent; free cash flow is operating cash flow less purchases of property and equipment, after working capital |
| Capital expenditure intensity | Purchases of property and equipment / Net revenue, x 100 | 61.6 | T4.5 Purchases of property and equipment FY2023 | 2,778.6 | T4.4 Net revenue FY2023 | FY2023 | USD | US$m | 2.22 | Calculated | Tier 1 audited | Percent; maintenance and growth split not stated |
| Capital expenditure intensity | Purchases of property and equipment / Net revenue, x 100 | 88.6 | T4.5 Purchases of property and equipment FY2024 | 2,941.3 | T4.4 Net revenue FY2024 | FY2024 | USD | US$m | 3.01 | Calculated | Tier 1 audited | Percent; maintenance and growth split not stated |
| Capital expenditure intensity | Purchases of property and equipment / Net revenue, x 100 | 70.6 | T4.5 Purchases of property and equipment FY2025 | 2,970.8 | T4.4 Net revenue FY2025 | FY2025 | USD | US$m | 2.38 | Calculated | Tier 1 audited | Percent; maintenance and growth split not stated |
| Capital expenditure intensity | Purchases of property and equipment / Net revenue, x 100 | 55.0 | T4.5 Purchases of property and equipment 9M 2025 | 2,223.3 | T4.4 Net revenue 9M 2025 | 9M 2025 | USD | US$m | 2.47 | Calculated | Tier 2b unaudited | Percent; maintenance and growth split not stated |
| Capital expenditure intensity | Purchases of property and equipment / Net revenue, x 100 | 50.0 | T4.5 Purchases of property and equipment 9M 2026 | 2,246.7 | T4.4 Net revenue 9M 2026 | 9M 2026 | USD | US$m | 2.23 | Calculated | Tier 2b unaudited | Percent; maintenance and growth split not stated |
| Operating cash flow / Total debt | Net cash from operating activities / Total Debt, x 100 | 340.2 | T4.5 Net Cash from Operating Activities FY2023 | 867.3 | T4.6 Total Debt FY2023 | FY2023 | USD | US$m | 39.23 | Calculated | Tier 1 audited | Percent; carrying-value debt |
| Operating cash flow / Total debt | Net cash from operating activities / Total Debt, x 100 | 340.0 | T4.5 Net Cash from Operating Activities FY2024 | 874.8 | T4.6 Total Debt FY2024 | FY2024 | USD | US$m | 38.87 | Calculated | Tier 1 audited | Percent; carrying-value debt |
| Operating cash flow / Total debt | Net cash from operating activities / Total Debt, x 100 | 371.4 | T4.5 Net Cash from Operating Activities FY2025 | 886.6 | T4.6 Total Debt FY2025 | FY2025 | USD | US$m | 41.89 | Calculated | Tier 1 audited | Percent; carrying-value debt |
| Operating cash flow / Total debt | LTM net cash from operating activities / Total Debt, x 100 | 310.8 | T4.8 LTM net cash from operating activities | 1,053.4 | T4.6 Total Debt 9M 2026 | 9M 2026 | USD | US$m | 29.50 | Calculated | Tier 1 audited and Tier 2b unaudited, LTM derived | Percent; LTM numerator against 2026-09-30 carrying-value debt |
| Liquidity / Total debt | Liquidity (cash plus undrawn revolver) / Total Debt | 573.6 | Liquidity chart table FY2024 | 874.8 | T4.6 Total Debt FY2024 | FY2024 | USD | US$m | 0.66 | Calculated | Tier 1 audited | Times; liquidity is the issuer's stated total |
| Liquidity / Total debt | Liquidity (cash plus undrawn revolver) / Total Debt | 568.4 | Liquidity chart table FY2025 | 886.6 | T4.6 Total Debt FY2025 | FY2025 | USD | US$m | 0.64 | Calculated | Tier 1 audited | Times; liquidity is the issuer's stated total |
| Liquidity / Total debt | Liquidity (cash plus undrawn revolver) / Total Debt | 788.0 | Liquidity chart table 2026-09-30 | 1,053.4 | T4.6 Total Debt 9M 2026 | 9M 2026 | USD | US$m | 0.75 | Calculated | Tier 2b unaudited | Times; liquidity is the issuer's stated total |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Growth | Consolidated sales growth (issuer-reported), % | 4.1 | 5.9 | 1.0 | 1.5 | 1.1 | Slowing from FY2024 | Period-over-period; includes acquisitions; period flow |
| Growth | Consolidated same-branch sales growth (issuer-reported), % | 0.2 | 3.5 | -1.3 | -0.9 | -1.8 | Declining | Branches owned more than 12 months; period flow |
| Growth | Installation same-branch volume growth excluding heavy commercial, % | -8.4 | 0.2 | -5.7 | -4.5 | -5.6 | Declining | Completed same-branch jobs; period flow; the quarterly report adds a measure including heavy commercial (9M 2026 -5.3), not comparable with the annual report basis |
| Growth | Installation same-branch price and mix growth excluding heavy commercial, % | 7.2 | 3.7 | 1.6 | 1.6 | 0.3 | Declining | Period flow; pricing contribution has faded |
| Growth | Single-family same-branch sales growth, % | -9.0 | 3.6 | -4.1 | -2.2 | -7.7 | Declining | Largest end market; period flow |
| Growth | Multi-family same-branch sales growth, % | 33.3 | 5.6 | -5.7 | -5.1 | -1.8 | Mixed | Period flow; national multi-family completions fell faster |
| Growth | Commercial same-branch sales growth, % | 11.5 | 1.2 | 10.4 | 6.2 | 10.4 | Improving | Period flow; includes heavy commercial |
| Growth | Other category sales growth, net of eliminations (Distribution and Manufacturing), % | 10.7 | 3.7 | 15.5 | 12.3 | 33.2 | Improving | Period flow; inter-segment sales are large and carry a margin, see segment schedule |
| Market | U.S. total housing completions growth (Census Bureau), % | 4.2 | 12.3 | -7.9 | -6.7 | -12.6 | Declining | External series; period flow |
| Margin | Gross profit percentage (issuer-reported), % | 33.5 | 33.8 | 34.0 | 33.6 | 32.4 | Declining in 2026 | Issuer cites higher material prices, labor, fuel and mix toward the lower-margin Other category; period flow |
| Margin | Installation segment gross profit percentage before depreciation and amortization, % | 35.7 | 36.3 | 36.9 | 36.5 | 35.7 | Declining in 2026 | Issuer-reported; excludes depreciation and amortization; period flow |
| Shareholder returns | Cash dividends declared per share, USD | 2.22 | 3.00 | 3.18 | 2.81 | 2.97 | Rising | Includes the annual variable dividend of 1.80 in 2026; period flow |

The key measures are as the issuer reports them, period over period and not worked out here; the volume and price/mix rows use the issuer's measure that excludes heavy commercial, which is comparable between the annual and quarterly reports, and the gross profit percentages are the issuer's own.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 76–77; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 36–37

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | EBITDA (Reported): operating income plus depreciation and amortization, unadjusted | None: the issuer states no EBITDA or adjusted EBITDA; the word appears only in the goodwill test and the auditor's critical audit matter | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 96; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 100–101 | All periods | An alternative built from net income (net income plus tax plus interest expense, net plus depreciation and amortization) gives 496.0 for FY2025 against 493.7, a difference of 2.3 or 0.47%, because it keeps other income; the FY2024 impairment of 4.9 is also not added back | Fundamental credit; Forward credit model; Covenant capacity | Use the operating-income build and label it calculated; no adjusted EBITDA exists to show beside it; never read these as covenant EBITDA |
| Total debt | Carrying value of current maturities plus long-term debt, excluding separately presented leases | Long-term debt lines are net of unamortized issuance costs; the repayment schedule is gross of them | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 122; 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 118 | 2024-12-31, 2025-12-31, 2026-09-30 | Carrying 1,053.4 against principal 1,063.0 at 2026-09-30, a difference of 9.6 (0.9%); 886.6 against 890.9 at 2025-12-31 (4.3); 874.8 against 880.3 at 2024-12-31 (5.5) | Liquidity; Refinancing & LME; Fundamental credit | Ratios use carrying value; principal is kept in the reconciliation table |
| Total debt: lease claims | Lease liabilities on their own balance sheet lines are not added to Total Debt | Finance lease obligations are presented on separate lines; operating lease obligations likewise | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 13–14 | 2026-09-30 and earlier year-ends | Finance leases of 10.8 would lift total debt to 1,064.2 and total debt / EBITDA from 2.26x to 2.28x; operating leases of 124.6 are further outside | Fundamental credit; Structural priority | Kept outside Total Debt per the method; the amounts are shown beside it |
| Net proceeds of the 2034 senior notes | Each statement role labelled; none chosen silently | Approximately 490.0 after fees and estimated offering expenses in the annual report; approximately 492.4 after fees and offering expenses in each 2026 quarterly report | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 150; 10-Q_2026-03-31_ibp-20260331.htm.jsonl, page 11; 10-Q_2026-06-30_ibp-20260630.htm.jsonl, page 12; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 12 | 2026-01-21 event | Difference 2.4; the later figure is the more recent and replaces an estimate; no table figure depends on either | Refinancing & LME | Both are carried; the 492.4 is the later statement and the 490.0 an estimate |
| ABL Revolver terms | Terms valid at the date stated | Annual report debt note: commitment 250.0 maturing 2027-02-17, incremental 50.0, swingline 25.0; 2026 reports: commitment 375.0 maturing 2031-01-21, incremental 105.0, swingline 50.0 | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 124; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 151; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 12–13 | 2025-12-31 against 2026-03-31 onward | Commitment differs by 125.0; liquidity at 2025-12-31 rests on 250.0, later liquidity on 375.0 | Liquidity; Refinancing & LME | Keep each term beside its date; the January 2026 amendment is a subsequent event of the annual report |
| Interest | Cover uses cash interest paid, as the method requires | Interest expense, net is presented net of interest income and of swap settlement benefit; swap settlements received are classified within investing activities | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 21 | FY2023 to 9M 2026 | FY2025 cash interest paid 41.0 against interest expense, net 31.7; netting the 13.6 swap settlements gives 27.4 and cover of 18.02x against 12.04x; 2026 swap settlements fell to 1.9 for nine months against 10.4 | Rates, FX & hedging; Fundamental credit | Cover is stated on cash interest paid without netting settlements; the alternative is shown for transparency only |
| Volume and price/mix growth | Same definition across periods | The annual report excludes heavy commercial; the September 2026 quarterly report presents measures both including and excluding it | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 76–77; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 36 | 9M 2026 and 9M 2025 | 9M 2026 volume growth is -5.6% excluding and -5.3% including heavy commercial; price/mix is 0.3% excluding and 2.5% including | Business & governance; Fundamental credit | The dashboard uses the excluding measure for comparability with the annual report |
| Segment gross profit | Consolidated gross profit after depreciation and amortization | Segment gross profit excludes depreciation and amortization, and the Other category sells to Installation at a margin that is eliminated | 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18 | All periods | FY2025 depreciation and amortization excluded from segment cost of sales is 61.4; eliminations of 15.6 of gross profit | Business & governance | The segment schedule reconciles to consolidated gross profit through the stated eliminations and depreciation |

### Claims outside Total Debt

| Claim | Amount | Unit | Inside Total Debt | Basis | Source |
| --- | --- | --- | --- | --- | --- |
| Finance lease obligations, current plus non-current | 10.8 | USD millions | Outside; own balance sheet lines | Reported at 2026-09-30; 6.7 at 2025-12-31 | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 13–14; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 126 |
| Operating lease obligations, current plus non-current | 124.6 | USD millions | Outside; own balance sheet lines | Reported present value at 2026-09-30; 98.4 at 2025-12-31 | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 13–14; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 126–127 |
| Accrued general liability and auto insurance reserves | 50.3 | USD millions | Outside; inside other liabilities | Reported at 2026-09-30; insurance receivables and indemnification assets of 11.1 offset part of it | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 27 |
| Contract liabilities (customer deposits and billings in excess of revenue) | 22.5 | USD millions | Outside; inside other current liabilities | Reported at 2026-09-30; 20.5 at 2025-12-31 and 19.7 at 2024-12-31; small beside accounts payable of 141.3, so not a funding float | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 9; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 119 |
| Performance bonds | 212.7 | USD millions | Outside; contingent | Reported at 2026-09-30; released as work is completed | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 49 |
| Insurance letters of credit and cash collateral | 71.9 | USD millions | Outside; contingent | Reported at 2026-09-30; 65.3 of the letters are unsecured and do not reduce liquidity; letters issued under the revolver are 2.9 | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 49–50; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 43 |
| Permit and license bonds | 11.5 | USD millions | Outside; contingent | Reported at 2026-09-30 | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 49 |
| Minimum purchase commitment under a fixed-price supply contract | 10.8 | USD millions | Outside; not a liability | Stated minimum commitment through 2027-12-31; two other supply agreements state volumes in pounds, not amounts | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 28 |
| Multiemployer pension plans | Not supplied: no withdrawal liability or underfunding amount is printed | USD millions | Outside | Contributions to pension plans were 3.0 in FY2025, 2.8 in FY2024 and 3.6 in FY2023; the filing says no plan is individually significant | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 137 |
| Factoring and supply-chain finance | Not supplied: no such arrangement is disclosed in the pages read | USD millions | Not applicable | No disclosure found | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2 |
| Litigation and consent decrees | Not supplied: no accrual or amount is stated | USD millions | Outside | Management does not expect a material effect | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 28 |

### Covenants as printed

| Test | Level | Step-down | Issuer-reported figure | Headroom | Source |
| --- | --- | --- | --- | --- | --- |
| Minimum fixed charge coverage ratio, ABL Credit Agreement | 1.0x, required only if availability under the revolver falls below a minimum measure | None printed | Compliance with all applicable covenants at 2026-09-30 is stated; no ratio is printed | Not supplied: the availability threshold and the ratio are not printed, and the covenant definition may differ from the EBITDA to cash interest ratio calculated here | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 47–48 |
| Mandatory prepayment from excess cash flow, term loan | 50% of excess cash flow above USD 15.0 million, subject to exceptions | Steps down to 25% and 0% at specified net leverage ratios whose levels are not printed | Not applicable: a prepayment rule, not a maintenance test | Not supplied: the net leverage levels are not printed | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 47 |
| Mandatory prepayment from asset sales, term loan | 100% of net proceeds above a threshold, subject to reinvestment | Steps down to 50% and 0% at specified net leverage ratios whose levels are not printed | Not applicable: a prepayment rule, not a maintenance test | Not supplied: the threshold and levels are not printed | 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 47 |
| Springing maturity, ABL Revolver | 91 days ahead of the maturity of any material indebtedness | None printed | Not applicable | Not applicable | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 47 |
| Restrictive covenants, 2034 senior notes indenture | Limits on dividends, redemptions and repurchases, prepayment of subordinated debt, asset sale proceeds, affiliate transactions, mergers and distributions from subsidiaries | None printed | Compliance stated at 2026-09-30; no maintenance ratio is printed | Not supplied: the indenture is not supplied | 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 48 |

### Key findings

The five filings describe one consolidated registrant with a single reportable segment, and the statements tie: assets equal liabilities plus equity at every balance sheet date and each cash flow statement rolls opening cash to closing cash. Because the issuer states no EBITDA, every leverage and cover ratio rests on a calculated EBITDA of USD 493.7 million for FY2025 and USD 465.9 million for the 12 months to 2026-09-30, a house measure that creditors should not read as covenant EBITDA.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 2–5; calculation C03; calculation C06

Gross leverage eased from 1.86x at FY2023 to 1.80x at FY2025 and then rose to 2.26x on the 12 months to 2026-09-30, while net leverage rose from 1.14x to 1.37x. Debt rose by USD 166.8 million after the January 2026 issue of USD 500.0 million of 2034 notes replaced USD 300.0 million of 2028 notes, and 12-month EBITDA fell by USD 27.8 million, or 5.63%, as the nine-month gross profit percentage slipped to 32.4% from 33.6%. Cash rose by USD 94.0 million, so net debt rose by less, USD 72.8 million; the effect of the October 2026 term loan add-on on net leverage is not established.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 101–102; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 2–3; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 11–12; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18; calculation C28; calculation C30; calculation C31; calculation C34; calculation C35; calculation C63; calculation C60; calculation C61; calculation C64; calculation C65

EBITDA covered cash interest 12.04x in FY2025 and 8.76x on the 12 months to 2026-09-30. Cash interest paid rose to USD 53.2 million from USD 41.0 million on a 12-month basis, and for the nine months it rose by USD 12.2 million to USD 47.1 million; interest expense, net rose to USD 31.2 million from USD 23.5 million, which the issuer attributes primarily to higher debt levels. Cover is still wide, but it now falls with both lower EBITDA and higher interest, and the October add-on, priced at Term SOFR plus 1.75%, would add interest that the September figures do not carry.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 47; calculation C38; calculation C39; calculation C07; calculation C71

Free cash flow was USD 300.8 million in FY2025, 60.93% of EBITDA, but nine-month free cash flow fell 22.11% to USD 195.9 million because operating cash flow dropped USD 60.6 million: net income was lower and receivables absorbed USD 42.3 million against USD 17.5 million a year earlier. Capital expenditure is light at 2.23% of revenue in the nine months, so cutting it would release little cash if earnings keep falling. Dividends and share repurchases of USD 181.8 million plus acquisitions of USD 63.2 million took USD 245.0 million in the nine months, USD 49.1 million more than free cash flow, which is why net debt rose.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 103–104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5; calculation C16; calculation C90; calculation C18; calculation C70; calculation C69; calculation C96; calculation C66; calculation C67; calculation C68

The third quarter of 2026 shows no easing of the margin pressure: revenue was USD 808.4 million against USD 778.2 million a year earlier, but gross profit fell to USD 257.4 million from USD 264.2 million and operating income to USD 91.7 million from USD 106.8 million. No shares were repurchased in the quarter, against USD 52.0 million in the third quarter of 2025, and the dividend declared for the quarter was USD 10.3 million.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 35–38

Liquidity was USD 788.0 million at 2026-09-30: cash of USD 415.9 million and USD 372.1 million of undrawn revolver after USD 2.9 million of letters of credit, against USD 9.0 million of debt principal due in the rest of 2026 and USD 32.4 million in 2027. No committed facility expires within twelve months of the balance sheet date. The cushion is wide for near-term obligations and has stayed above USD 766.6 million at every 2026 quarter end, but revolver availability depends on a borrowing base that the filings do not print, and contingent bonds and letters of credit outside the debt figures are listed in the claims table.
Basis: 10-Q_2026-03-31_ibp-20260331.htm.jsonl, page 37; 10-Q_2026-06-30_ibp-20260630.htm.jsonl, page 41; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 49–50; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11; calculation C54; calculation C53; calculation C50; calculation C52

Of USD 1,063.0 million of principal at 2026-09-30, 52.84% is secured, the term loan and the vehicle and equipment notes, and USD 500.0 million is the unsecured 2034 notes; the revolver, with a commitment of USD 375.0 million, was undrawn and shares the security of the term loan on substantially all assets. The filings do not name the guarantors of the 2034 notes, so structural priority below the parent cannot be tested. Total debt plus finance leases is 2.28x EBITDA, and operating leases of USD 124.6 million sit further outside debt.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 11–14; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 47–48; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 125–126; Source readiness (CP-0); calculation C40; calculation C76; calculation C82

The only maintenance-style test the filings name is a minimum fixed charge coverage ratio of 1.0x under the revolver, which applies only if availability falls below a minimum that is not printed. The issuer reports compliance with every applicable covenant at 2026-09-30 and prints no ratio or headroom, so headroom is not established, and the cover ratio calculated here is not that test.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 47–48; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 125

Only USD 96.7 million of principal falls due from the rest of 2026 to 2030, against USD 966.3 million, 90.90% of the total, after 2030. Redeeming the 2028 notes removed the largest near-term maturity, so refinancing risk now sits in the term loan due 2031-03-28 and the 2034 notes; the revolver matures 2031-01-21 but springs 91 days ahead of any material debt maturity, which would bring it to 2030-12-27 if the term loan counts as material.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 11–13; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 122; calculation C94; calculation C77; calculation C78

Two events postdate the September balance sheet. The USD 250.0 million term loan add-on of 2026-10-27 raises principal to USD 1,313.0 million, 2.82x EBITDA on a principal basis, before any use of proceeds; its effect on net debt is not established because the filing does not say how the proceeds or fees are used. The add-on is variable-rate debt, and the filing says each percentage point of rates would add USD 2.5 million to annual interest expense. The dividend of USD 0.39 per share declared on 2026-11-05 is payable 2026-12-31 and its aggregate is not stated.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 33–34; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 51–52; calculation C74; calculation C75

Claims outside the debt figures are modest: finance leases of USD 10.8 million and operating leases of USD 124.6 million are on their own balance sheet lines, accrued insurance reserves are USD 50.3 million, and contract liabilities of USD 22.5 million are small, so there is no material non-debt funding float. Bonds and letters of credit of USD 296.1 million are contingent, and the filings disclose no factoring, supply-chain finance or pension deficit in the pages read.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 13–14; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 27–28; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 49–50; calculation C95

Debt is stated at carrying value, USD 9.6 million below principal at 2026-09-30, a small gap. The two stated net proceeds of the 2034 notes, USD 490.0 million in the annual report and USD 492.4 million in each 2026 quarterly report, differ by USD 2.4 million, and no figure here depends on either. Cash interest paid is not net of USD 13.6 million of FY2025 swap settlements received; netting them would lift FY2025 cover to 18.02x from 12.04x, so the headline figure is the more conservative.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 104; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 133–134; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 150; 10-Q_2026-03-31_ibp-20260331.htm.jsonl, page 11; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 11–12; calculation C84; calculation C87; calculation C38; calculation C80

### Contrary evidence and what would change the view

The strongest evidence against a sound view is the direction of earnings. Nine-month EBITDA fell 7.78% while revenue rose 1.05%, so margin compression, not weaker sales, is the problem: the gross profit percentage fell from 33.6% to 32.4% as material, labor and fuel costs rose and the lower-margin Distribution and Manufacturing category grew 33.2%. If that continues, 12-month EBITDA falls further below USD 465.9 million and net leverage rises above 1.37x even with no new debt. Stabilisation of the gross profit percentage near the FY2025 level of 34.0%, with the add-on proceeds held as cash, would strengthen the view.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 35; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 36–38; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 41–42; calculation C62; calculation C97; calculation C72; calculation C73; calculation C06; calculation C35

The opposite reading is that the rise in gross leverage is partly a choice. The company issued USD 500.0 million of notes against USD 300.0 million redeemed, and cash is USD 94.0 million higher than at FY2025, which offsets over half of the USD 166.8 million of added debt while the revolver is undrawn; net leverage of 1.37x is low. That reading fails if the cash is spent: dividends, repurchases and acquisitions already exceeded free cash flow by USD 49.1 million in nine months, and a repurchase authorisation of up to USD 500.0 million runs to 2027-03-01. The observable tests are cash and net debt at 2026-12-31, FY2026 EBITDA against USD 493.7 million, and whether the add-on proceeds appear as cash.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 2–5; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 21; calculation C35; calculation C64; calculation C63; calculation C68; calculation C03

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and coverage on carrying-value debt, FY2023 to 2026-09-30 | Ready with Limitations | EBITDA is calculated because the issuer states none; interim ratios use LTM stubs; the 2026-10-27 add-on is not in the September balance sheet | Use the ratios as labelled calculations; state the add-on separately |
| Liquidity and maturity profile at 2026-09-30 | Ready with Limitations | Borrowing base and the availability level for the springing fixed charge test are not printed; the 2023-12-31 revolver availability is not supplied; years after 2030 are not split | Request the ABL credit agreement and a maturity schedule by year after 2030 if refinancing work is added |
| Pro forma net debt and leverage after the 2026-10-27 add-on | Not Ready | Use of the USD 250.0 million proceeds and fees are not stated, so the effect on net debt is not established | Obtain the current report on the amendment or the next quarterly report |
| Debt ranking, guarantees and structural priority | Ready with Limitations | Security is stated per facility but not allocated between lien pools; guarantors of the 2034 notes and of the vehicle notes are not stated; various notes payable have no stated security | Obtain the indenture and the credit agreements before any priority or recovery conclusion |
| Covenant headroom | Not Ready | No executed agreement, no availability threshold and no net leverage step-down levels are supplied; the issuer states only compliance at 2026-09-30 | Do not infer covenant capacity from these tables |
| Adjusted earnings and EBITDA bridge | Not Ready | The issuer states no adjusted EBITDA, so no bridge exists | Obtain earnings releases if an issuer-defined measure is wanted |

### Limitations

EBITDA is calculated from operating income and depreciation and amortization because the issuer states none, so no ratio here is a covenant or agency metric, and interim ratios use a last-twelve-month figure built from two nine-month stubs.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4; calculation C06

Nothing after the quarterly report signed on 2026-11-05 is covered, and the effect of the October 2026 term loan add-on on net debt is not established.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 33–34

No executed credit agreement, indenture or intercreditor agreement was supplied, so covenant levels, the availability trigger for the fixed charge test, the borrowing base and the guarantors of the 2034 notes are not established.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 12–13; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 47–48; Source readiness (CP-0)

Interim statements are unaudited, the September 2025 balance sheet is not supplied, and revolver availability at 2023-12-31 is not printed in the supplied filings.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 2–5; 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 72–74

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 16 |
| Calculated | 15 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 5 |
| Fields present | 13 |
| Fields total | 14 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 13 |

## Calculations
Every calculation below uses amounts printed in the statement, debt and liquidity tables above, in USD millions unless the unit column says otherwise.

| ID | Calculation | Formula and inputs | Result | Unit |
| --- | --- | --- | --- | --- |
| C01 | EBITDA (Reported), FY2023 | Operating income 369.1 + depreciation and amortization of property and equipment 52.2 + amortization of intangibles 44.5 | 465.8 | USD millions |
| C02 | EBITDA (Reported), FY2024 | Operating income 382.5 + depreciation and amortization of property and equipment 59.1 + amortization of intangibles 42.5 | 484.1 | USD millions |
| C03 | EBITDA (Reported), FY2025 | Operating income 386.4 + depreciation and amortization of property and equipment 66.2 + amortization of intangibles 41.1 | 493.7 | USD millions |
| C04 | EBITDA (Reported), 9M 2025 | Operating income 277.6 + depreciation and amortization of property and equipment 49.2 + amortization of intangibles 30.3 | 357.1 | USD millions |
| C05 | EBITDA (Reported), 9M 2026 | Operating income 243.9 + depreciation and amortization of property and equipment 53.6 + amortization of intangibles 31.8 | 329.3 | USD millions |
| C06 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 493.7 + 9M 2026 329.3 - 9M 2025 357.1 | 465.9 | USD millions |
| C07 | LTM cash interest paid to 2026-09-30 | FY2025 41.0 + 9M 2026 47.1 - 9M 2025 34.9 | 53.2 | USD millions |
| C08 | LTM net revenue to 2026-09-30 | FY2025 2,970.8 + 9M 2026 2,246.7 - 9M 2025 2,223.3 | 2,994.2 | USD millions |
| C09 | LTM operating income to 2026-09-30 | FY2025 386.4 + 9M 2026 243.9 - 9M 2025 277.6 | 352.7 | USD millions |
| C10 | LTM total depreciation and amortization to 2026-09-30 | FY2025 107.3 + 9M 2026 85.4 - 9M 2025 79.5 | 113.2 | USD millions |
| C11 | LTM net income to 2026-09-30 | FY2025 265.4 + 9M 2026 159.1 - 9M 2025 188.8 | 235.7 | USD millions |
| C12 | LTM net cash from operating activities to 2026-09-30 | FY2025 371.4 + 9M 2026 245.9 - 9M 2025 306.5 | 310.8 | USD millions |
| C13 | LTM purchases of property and equipment to 2026-09-30 | FY2025 70.6 + 9M 2026 50.0 - 9M 2025 55.0 | 65.6 | USD millions |
| C14 | Free cash flow, FY2023 | Net cash from operating activities 340.2 - purchases of property and equipment 61.6 | 278.6 | USD millions |
| C15 | Free cash flow, FY2024 | Net cash from operating activities 340.0 - purchases of property and equipment 88.6 | 251.4 | USD millions |
| C16 | Free cash flow, FY2025 | Net cash from operating activities 371.4 - purchases of property and equipment 70.6 | 300.8 | USD millions |
| C17 | Free cash flow, 9M 2025 | Net cash from operating activities 306.5 - purchases of property and equipment 55.0 | 251.5 | USD millions |
| C18 | Free cash flow, 9M 2026 | Net cash from operating activities 245.9 - purchases of property and equipment 50.0 | 195.9 | USD millions |
| C19 | LTM free cash flow to 2026-09-30 | LTM operating cash flow 310.8 - LTM purchases of property and equipment 65.6 | 245.2 | USD millions |
| C20 | Gross debt (carrying value), FY2023 | Current maturities of long-term debt 32.2 + long-term debt 835.1 | 867.3 | USD millions |
| C21 | Gross debt (carrying value), FY2024 | Current maturities of long-term debt 32.4 + long-term debt 842.4 | 874.8 | USD millions |
| C22 | Gross debt (carrying value), FY2025 | Current maturities of long-term debt 36.6 + long-term debt 850.0 | 886.6 | USD millions |
| C23 | Gross debt (carrying value), 2026-09-30 | Current maturities of long-term debt 33.7 + long-term debt 1,019.7 | 1,053.4 | USD millions |
| C24 | Net debt, FY2023 | Gross debt 867.3 - cash 386.5 | 480.8 | USD millions |
| C25 | Net debt, FY2024 | Gross debt 874.8 - cash 327.6 | 547.2 | USD millions |
| C26 | Net debt, FY2025 | Gross debt 886.6 - cash 321.9 | 564.7 | USD millions |
| C27 | Net debt, 2026-09-30 | Gross debt 1,053.4 - cash 415.9 | 637.5 | USD millions |
| C28 | Total debt / EBITDA, FY2023 | 867.3 / 465.8 | 1.86 | x |
| C29 | Total debt / EBITDA, FY2024 | 874.8 / 484.1 | 1.81 | x |
| C30 | Total debt / EBITDA, FY2025 | 886.6 / 493.7 | 1.80 | x |
| C31 | Total debt / EBITDA, 2026-09-30 | 1,053.4 / 465.9 | 2.26 | x |
| C32 | Net debt / EBITDA, FY2023 | 480.8 / 465.8 | 1.03 | x |
| C33 | Net debt / EBITDA, FY2024 | 547.2 / 484.1 | 1.13 | x |
| C34 | Net debt / EBITDA, FY2025 | 564.7 / 493.7 | 1.14 | x |
| C35 | Net debt / EBITDA, 2026-09-30 | 637.5 / 465.9 | 1.37 | x |
| C36 | EBITDA / cash interest, FY2023 | 465.8 / 42.5 | 10.96 | x |
| C37 | EBITDA / cash interest, FY2024 | 484.1 / 43.7 | 11.08 | x |
| C38 | EBITDA / cash interest, FY2025 | 493.7 / 41.0 | 12.04 | x |
| C39 | EBITDA / cash interest, 2026-09-30 | 465.9 / 53.2 | 8.76 | x |
| C40 | Contractual principal at 2026-09-30 | 9.0 + 32.4 + 25.7 + 18.4 + 11.2 + 966.3 | 1,063.0 | USD millions |
| C41 | Reconciling items at 2026-09-30 | -(unamortized issuance costs on the 2034 notes 6.9 + on the term loan 2.7); principal 1,063.0 + items -9.6 = carrying 1,053.4 | -9.6 | USD millions |
| C42 | Contractual principal at 2025-12-31 | 36.6 + 32.6 + 325.7 + 18.5 + 11.3 + 466.2 | 890.9 | USD millions |
| C43 | Contractual principal at 2024-12-31 | 32.4 + 28.2 + 23.6 + 316.3 + 8.6 + 471.2 | 880.3 | USD millions |
| C44 | Contractual principal at 2023-12-31, derived | Carrying value 867.3 + unamortized issuance costs on the 2028 notes 2.5 + on the term loan 4.4; the 2023 repayment ladder is not in the supplied filings | 874.2 | USD millions |
| C45 | Undrawn committed facility (ABL Revolver) net of letters of credit, 2024-12-31 | Commitment 250.0 - drawn 0.0 - letters of credit 4.0 | 246.0 | USD millions |
| C46 | Liquidity (cash plus undrawn ABL), 2024-12-31 | Cash 327.6 + undrawn 246.0 | 573.6 | USD millions |
| C47 | Undrawn committed facility (ABL Revolver) net of letters of credit, 2025-12-31 | Commitment 250.0 - drawn 0.0 - letters of credit 3.5 | 246.5 | USD millions |
| C48 | Liquidity (cash plus undrawn ABL), 2025-12-31 | Cash 321.9 + undrawn 246.5 | 568.4 | USD millions |
| C49 | Undrawn committed facility (ABL Revolver) net of letters of credit, 2026-03-31 | Commitment 375.0 - drawn 0.0 - letters of credit 3.9 | 371.1 | USD millions |
| C50 | Liquidity (cash plus undrawn ABL), 2026-03-31 | Cash 474.3 + undrawn 371.1 | 845.4 | USD millions |
| C51 | Undrawn committed facility (ABL Revolver) net of letters of credit, 2026-06-30 | Commitment 375.0 - drawn 0.0 - letters of credit 2.9 | 372.1 | USD millions |
| C52 | Liquidity (cash plus undrawn ABL), 2026-06-30 | Cash 394.5 + undrawn 372.1 | 766.6 | USD millions |
| C53 | Undrawn committed facility (ABL Revolver) net of letters of credit, 2026-09-30 | Commitment 375.0 - drawn 0.0 - letters of credit 2.9 | 372.1 | USD millions |
| C54 | Liquidity (cash plus undrawn ABL), 2026-09-30 | Cash 415.9 + undrawn 372.1 | 788.0 | USD millions |
| C55 | Term loan principal at 2026-09-30 | Carrying value 484.8 + unamortized issuance costs 2.7 | 487.5 | USD millions |
| C56 | Cumulative debt through ABL Revolver / LTM EBITDA | 0.0 / 465.9 | 0.00 | x |
| C57 | Cumulative debt through Term loan / LTM EBITDA | 487.5 / 465.9 | 1.05 | x |
| C58 | Cumulative debt through Vehicle and equipment notes / LTM EBITDA | 561.7 / 465.9 | 1.21 | x |
| C59 | Cumulative debt through 5.625% Senior Notes due 2034 / LTM EBITDA | 1,061.7 / 465.9 | 2.28 | x |
| C60 | Change in LTM EBITDA against FY2025 | 465.9 - 493.7 | -27.8 | USD millions |
| C61 | Change in LTM EBITDA against FY2025, percent | (465.9 / 493.7 - 1) x 100 | -5.63 | % |
| C62 | Change in nine-month EBITDA, 9M 2026 against 9M 2025, percent | (329.3 / 357.1 - 1) x 100 | -7.78 | % |
| C63 | Change in gross debt, 2026-09-30 against 2025-12-31 | 1,053.4 - 886.6 | 166.8 | USD millions |
| C64 | Change in cash, 2026-09-30 against 2025-12-31 | 415.9 - 321.9 | 94.0 | USD millions |
| C65 | Change in net debt, 2026-09-30 against 2025-12-31 | 637.5 - 564.7 | 72.8 | USD millions |
| C66 | Dividends and share repurchases, 9M 2026 | Dividends paid 80.1 + repurchase of common stock 101.7 | 181.8 | USD millions |
| C67 | Dividends, share repurchases and acquisitions, 9M 2026 | 181.8 + acquisitions of businesses 63.2 | 245.0 | USD millions |
| C68 | Dividends, repurchases and acquisitions less free cash flow, 9M 2026 | 245.0 - free cash flow 195.9 | 49.1 | USD millions |
| C69 | Change in nine-month operating cash flow | 245.9 - 306.5 | -60.6 | USD millions |
| C70 | Change in nine-month free cash flow, percent | (195.9 / 251.5 - 1) x 100 | -22.11 | % |
| C71 | Change in nine-month cash interest paid | 47.1 - 34.9 | 12.2 | USD millions |
| C72 | Gross profit percentage, 9M 2026 | 728.6 / 2,246.7 x 100 | 32.43 | % |
| C73 | Gross profit percentage, 9M 2025 | 747.8 / 2,223.3 x 100 | 33.63 | % |
| C74 | Contractual principal after the 2026-10-27 term loan add-on, before any use of proceeds | 1,063.0 + 250.0 | 1,313.0 | USD millions |
| C75 | Principal after the add-on / LTM EBITDA | 1,313.0 / 465.9 | 2.82 | x |
| C76 | Secured share of principal at 2026-09-30, percent | (term loan 487.5 + vehicle and equipment notes 74.2) / 1,063.0 x 100 | 52.84 | % |
| C77 | Share of principal due after 2030, percent | 966.3 / 1,063.0 x 100 | 90.90 | % |
| C78 | Earliest ABL springing maturity if the term loan is material indebtedness | 2031-03-28 less 91 days | 2030-12-27 | date |
| C79 | EBITDA FY2025 from net income, alternative definition | Net income 265.4 + income tax 91.6 + interest expense, net 31.7 + total depreciation and amortization 107.3 | 496.0 | USD millions |
| C80 | FY2025 EBITDA / cash interest net of swap settlements received | 493.7 / (41.0 - 13.6) | 18.02 | x |
| C81 | FY2025 cash interest net of swap settlements received | 41.0 - 13.6 | 27.4 | USD millions |
| C82 | Total debt plus finance lease obligations / LTM EBITDA | (1,053.4 + 10.8) / 465.9 | 2.28 | x |
| C83 | Total debt plus finance lease obligations at 2026-09-30 | 1,053.4 + 10.8 | 1,064.2 | USD millions |
| C84 | Carrying against principal difference at 2026-09-30 | 1,063.0 - 1,053.4 | 9.6 | USD millions |
| C85 | Carrying against principal difference at 2025-12-31 | 890.9 - 886.6 | 4.3 | USD millions |
| C86 | Carrying against principal difference at 2024-12-31 | 880.3 - 874.8 | 5.5 | USD millions |
| C87 | Difference between the two stated net proceeds of the 2034 notes | 492.4 - 490.0 | 2.4 | USD millions |
| C88 | EBITDA margin, LTM | 465.9 / 2,994.2 x 100 | 15.56 | % |
| C89 | EBITDA margin, FY2025 | 493.7 / 2,970.8 x 100 | 16.62 | % |
| C90 | Free cash flow / EBITDA, FY2025, percent | 300.8 / 493.7 x 100 | 60.93 | % |
| C91 | Free cash flow / EBITDA, LTM, percent | 245.2 / 465.9 x 100 | 52.63 | % |
| C92 | EBITDA margin, FY2023 | 465.8 / 2,778.6 x 100 | 16.76 | % |
| C93 | EBITDA margin, FY2024 | 484.1 / 2,941.3 x 100 | 16.46 | % |
| C94 | Principal due from the remainder of 2026 to 2030 | 9.0 + 32.4 + 25.7 + 18.4 + 11.2 | 96.7 | USD millions |
| C95 | Bonds and letters of credit outstanding at 2026-09-30 | Performance bonds 212.7 + insurance letters of credit and cash collateral 71.9 + permit and license bonds 11.5 | 296.1 | USD millions |
| C96 | Capital expenditure intensity, 9M 2026 | 50.0 / 2,246.7 x 100 | 2.23 | % |
| C97 | Net revenue growth, 9M 2026 against 9M 2025 | (2,246.7 / 2,223.3 - 1) x 100 | 1.05 | % |
| C98 | Variable-rate debt after the 2026-10-27 add-on, before hedges | Term loan principal 487.5 + add-on 250.0 | 737.5 | USD millions |
| C99 | Variable-rate debt not covered by swaps after the add-on | Term loan principal 487.5 + add-on 250.0 - swapped notional 400.0 | 337.5 | USD millions |

## Gaps

- Medium: The effect on net debt and net leverage of the USD 250.0 million term loan add-on of 2026-10-27 is not established, because the quarterly report states neither the fees nor how the proceeds will be used. This restricts any pro forma net leverage, and gross principal after the add-on is the only figure that can be stated. The next quarterly report or the current report on the amendment would close it.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 33–34; calculation C74; calculation C75
- Medium: Covenant levels are not established. No executed credit agreement or indenture is supplied, the availability level below which the 1.0x fixed charge test applies is not printed, the net leverage levels that step down the term loan prepayments are not printed, and the revolver borrowing base is not printed. This restricts covenant headroom, effective revolver availability and any statement of capacity; the executed agreements would close it.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 12–13; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 47–48; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 125; Source readiness (CP-0)
- Medium: The issuer states no EBITDA or adjusted EBITDA, so every ratio uses an EBITDA calculated from operating income and depreciation and amortization, and no adjusted bridge exists. This restricts comparison with agency or covenant definitions and with issuer-defined leverage; earnings releases or a lender presentation would close it.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 96; 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 100–103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–4
- Low: The guarantors of the 2034 senior notes and of the vehicle and equipment notes are not stated in the notes to the financial statements, and the filings print the lien priorities of the term loan and the revolver together without allocating them. This restricts structural priority and recovery work; the indenture and credit agreements would close it.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 125–126; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 47–48; Source readiness (CP-0)
- Low: Various notes payable of USD 1.3 million have no stated security or ranking and are left out of the debt stack, so its cumulative principal is USD 1.3 million below the contractual principal. The effect on cumulative leverage is below the second decimal; the note terms would close it.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11
- Low: Revolver availability net of letters of credit at 2023-12-31 is not printed in the supplied filings, so the FY2023 undrawn figure in the liquidity table is not supplied; the revolver is stated as undrawn and its commitment as 250.0 at that date. This restricts only the FY2023 liquidity total.
Basis: 10-K_2024-12-31_ibp-20241231.htm.jsonl, pages 72–74; 10-K_2024-12-31_ibp-20241231.htm.jsonl, page 120
- Low: Source dashes are treated as missing, not zero: asset impairment in FY2023 and FY2025, write-off of debt issuance costs in FY2025 and 9M 2025, the asset impairment add-back in FY2023 and FY2025, proceeds from the term loan in FY2023 and FY2025, debt issuance costs in FY2025 and 9M 2025, swap settlements in 9M 2026 and vehicle and equipment note proceeds in 9M 2026. The subtotals tie without them, so the restriction is on line-by-line reading only; the issuer's confirmation that a dash means nil would close it.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 102–104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 3–5
- Low: Lines that one filing prints and another does not are marked missing. The nine-month cash flow statement prints no asset impairment, deferred income taxes or term loan proceeds line, and the annual cash flow statements print no senior notes lines. This restricts only like-for-like line comparison across filings.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, pages 103–104; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5
- Low: Interest income and gross interest expense are not printed separately because interest expense is shown net, so a gross interest cover cannot be calculated; cover uses cash interest paid, and the split of the 2026 interest paid between the new notes, the redeemed notes and the term loan is not stated.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5
- Low: The classification of 2026 interest rate swap settlements is not stated: the nine-month cash flow statement prints a dash for swap settlements in investing activities, while interest expense, net carries a benefit of USD 1.9 million. This restricts the alternative cover that nets settlements to the years in which they were reported in investing activities.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 21
- Low: Maintenance and growth capital expenditure are not split, so capital intensity uses total purchases of property and equipment. This restricts any recurring-surplus measure; a disclosure of the split would close it.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, pages 4–5
- Low: Restricted cash, short-term investments, a single-employer pension obligation, senior secured and subordinated debt totals and a separate non-debt funding float are not printed on the balance sheet, and none is assumed to be zero. Contract liabilities of USD 22.5 million are the only customer-funded item named and are small.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 9; 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 137
- Low: The September 2025 balance sheet is not in any supplied filing, so the 9M 2025 balance sheet column is not tabulated and only its closing cash is known from the cash flow statement. This restricts a September 2025 net debt comparison; the third-quarter 2025 report would close it.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 5
- Low: The two stated net proceeds of the 2034 senior notes, USD 490.0 million and USD 492.4 million, are both kept and no figure here depends on either; the issuer's statement of final proceeds is already the later one.
Basis: 10-K_2025-12-31_ibp-20251231.htm.jsonl, page 150; 10-Q_2026-03-31_ibp-20260331.htm.jsonl, page 11; 10-Q_2026-06-30_ibp-20260630.htm.jsonl, page 12; 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 12
- Low: The repayment schedule groups every year after 2030 in one row of USD 966.3 million, which combines the term loan balance due 2031-03-28 and the 2034 senior notes due 2034-02-01, so an annual wall after 2030 is not established. This restricts maturity-year charts beyond 2030.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 11; calculation C77
- Low: Purchase obligations under two supply agreements are stated in pounds of material, not amounts, and only one fixed-price contract has a stated minimum of USD 10.8 million. This restricts a money measure of purchase commitments.
Basis: 10-Q_2026-09-30_ibp-20260930.htm.jsonl, page 28

## Next module
The orchestrator selects the next module.
