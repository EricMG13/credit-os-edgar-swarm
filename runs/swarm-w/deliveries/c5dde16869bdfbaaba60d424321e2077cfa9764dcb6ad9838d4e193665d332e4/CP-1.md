---
module_id: CP-1
module_name: FinancialFoundation
issuer_id: w
issuer_name: Wayfair Inc.
analysis_date: 2026-11-05
pathway: credit_snapshot
run_id: w-2026-11-05-credit_snapshot-host
---

## Request

Wayfair Inc. (issuer id w), as of 2026-11-05, credit_snapshot pathway (the full credit assessment). Scope: the financial foundation, meaning normalised statements, net debt, leverage and coverage, liquidity, the maturity ladder and definition conflicts, from the supplied annual report, three quarterly reports and three earnings releases.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_w-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-19 (date signed; filing date not stated) | 8ef4121e11689a0c5565962f85cfafc125f39e54e08df2c3b6c79eaf68e84e4d | Audited 2025, 2024 and 2023 statements, debt note, revolver and covenant description, contractual obligations, Adjusted EBITDA and Free Cash Flow reconciliations, segment note |
| 10-Q_2026-03-31_w-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-30 (date signed; filing date not stated) | 79f74f0ba7972d92f75742a90568a879936b4ecf939af4026c967768203f5019 | Not used for any figure in this module; first-quarter figures are not extracted into a column |
| 10-Q_2026-06-30_w-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-04 (date signed; filing date not stated) | e52476a4ad53b4396b19ba631702cd30b522eb54aecabc978fa654467e46935a | 2034 secured notes terms and the indenture exhibit; no statement column is taken from it |
| 10-Q_2026-09-30_w-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-04 (date signed; filing date not stated) | 9224a05a14ec554aa7f19d7d2ae6869a07a996f1d60af972e32e1595aefdd8c3 | Third-quarter and nine-month 2026 statements, 2026-09-30 balance sheet, debt note, liquidity, covenant description, Adjusted EBITDA and Free Cash Flow reconciliations, segment note |
| EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl | Exhibit 99.1 earnings release for the first quarter ended March 31, 2026 | 2026-04-30 | a3debc23ce5c3027daa8862793a0e092539f933475881f34dd98f47a74a5cd40 | Not used for any figure in this module |
| EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl | Exhibit 99.1 earnings release for the second quarter ended June 30, 2026 | 2026-08-04 | bd4c1a88b49b8e4441931ccafc159f4e1f6d02b8d8bf7918ce20a28d44352f87 | Not used for any figure in this module |
| EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl | Exhibit 99.1 earnings release for the third quarter ended September 30, 2026 | 2026-11-04 | 2907d0c055207f89b1a08967b4ff5b2fe5bb05c815f0f3ad4e1479f1b9a353cb | Third-quarter operating metrics and the issuer's statement of total liquidity including revolver availability |
| Source readiness (CP-0) | Source readiness module answer for this run | 2026-11-05 | 43399c8cef27a5fea1c5523c8802a00ed6679b3ea634675ab7f84523ab1a7ba4 | Source list, document dates, gaps and cross-document checks |

## Findings

### Bottom line

Wayfair's leverage has fallen but depends on adjusted earnings: net debt of USD 1,761 million at 2026-09-30 is 2.06x issuer-adjusted EBITDA but 3.21x reported EBITDA, so creditors rely on USD 304 million of last-twelve-month add-backs. Reported EBITDA is calculated here as operating income plus depreciation and amortization, because the issuer states only adjusted EBITDA. Cash interest paid was USD 170 million over the last twelve months, covered 3.23x by reported and 5.02x by adjusted EBITDA.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 2–5; 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; calculation C35; calculation C25; calculation C65; calculation C62; calculation C15

Cash and equivalents were USD 1,038 million with USD 418 million of undrawn revolver, against USD 229 million of convertible notes due in 2027 as the nearest maturity. A USD 64 million settlement on 2026-10-28 is outside every period figure, and its direction is not stated, so pro forma net debt is not established.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; calculation C37; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42

### Analysis by dimension

Leverage fell mainly because earnings improved, with total debt also lower in 2026: reported EBITDA went from a loss of USD 74 million in FY2024 to USD 322 million in FY2025 and USD 549 million over the last twelve months, while total debt was USD 3,118 million, USD 3,272 million and USD 2,799 million at the three balance-sheet dates. For creditors the improvement is recent, because FY2025 is the first year of positive reported EBITDA in the three years supplied, and on that measure total debt was still 10.16x at FY2025 before falling to 5.10x.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 49; calculation C2; calculation C3; calculation C13; calculation C55; calculation C61

Interest cost has risen with the refinancing into secured notes: cash interest paid was USD 53 million in FY2023, USD 63 million in FY2024 and USD 139 million in FY2025, as the 2030 and 2032 secured notes were issued while older convertible notes were repurchased. Coverage on reported EBITDA improved from 2.32x in FY2025 to 3.23x on the last twelve months, which leaves less headroom than the 5.02x on adjusted EBITDA suggests, so a fall in earnings would reach cash interest cover quickly.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 78; 10-K_2025-12-31_w-20251231.htm.jsonl, page 80; 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 5; calculation C57; calculation C63; calculation C66

Operating cash flow improved in 2026 but much of the gain is working capital: net cash from operating activities was USD 506 million in the nine months of 2026 against USD 332 million a year earlier, a rise of USD 174 million, of which USD 140 million is the swing in operating assets and liabilities from an outflow of USD 76 million to an inflow of USD 64 million. Free cash flow as the issuer defines it, operating cash flow less capital expenditure, was USD 476 million over the last twelve months and USD 329 million in FY2025, so part of the recent figure may not repeat if payables stop growing.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4; 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; calculation C28; calculation C29; calculation C30; calculation C31; calculation C22; calculation C23

Liquidity fell in 2026 because debt was repaid ahead of maturity: cash and equivalents were USD 1,038 million at 2026-09-30 against USD 1,476 million at FY2025 after USD 696 million of long-term debt settlement and USD 245 million of extinguishment payments, partly funded by USD 395 million of new debt, and the revolver adds USD 418 million undrawn after USD 82 million of letters of credit. The nearest maturity is USD 229 million of 2027 convertible notes, which became convertible for the quarter ending 2026-12-31, and the filing says conversion could require cash settlement of part or all of the obligation, so the cash balance is the buffer against that call.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; calculation C37; calculation C42

The choice of EBITDA changes the leverage read sharply: adjusted EBITDA of USD 743 million in FY2025 is USD 421 million above reported EBITDA of USD 322 million, of which USD 345 million is equity-based compensation and related taxes, and an EBITDA built from net income would be USD 120 million because it carries the USD 233 million loss on debt extinguishment, putting total debt at 27.27x. This module therefore shows reported, issuer-adjusted and definition-conflict figures side by side and does not choose between them.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; calculation C3; calculation C26; calculation C73; calculation C74

Debt is carried at USD 2,799 million against contractual principal of USD 2,829 million at 2026-09-30, a USD 30 million difference that is unamortised discount; operating lease liabilities of USD 864 million non-current are shown separately and are not in debt. The balance sheet at 2023-12-31 is not in the supplied documents, so leverage trends start at FY2024.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; calculation C40

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 24 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 0 |
| Fields present | 16 |
| Fields total | 16 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 14 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | Not supplied: reported EBITDA is negative | Not supplied: reported EBITDA is negative | x | Gross debt 3,118 and net debt 1,802 over reported EBITDA of -74; reported EBITDA is negative, so the ratio is not meaningful |
| FY2025 / 2025-12-31 | 10.16 | 5.58 | x | Gross debt 3,272 and net debt 1,796 over reported EBITDA of 322 (calculated: income from operations plus depreciation and amortization) |
| 2026-09-30 | 5.10 | 3.21 | x | Gross debt 2,799 and net debt 1,761 over last-twelve-month reported EBITDA of 549 (FY2025 plus 9M 2026 less 9M 2025); interim balance sheet |

Reported EBITDA is calculated by this module and excludes the issuer's add-backs, so the ratios are far higher than the same ratios on adjusted EBITDA.
Basis: calculation C3; calculation C13

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | -1.17 | x | Reported EBITDA of -74 over cash interest paid of 63; a negative cover because EBITDA is negative |
| FY2025 / 2025-12-31 | 2.32 | x | Reported EBITDA of 322 over cash interest paid of 139 |
| 2026-09-30 | 3.23 | x | Last-twelve-month reported EBITDA of 549 over last-twelve-month cash interest paid of 170 |

Cash interest paid is the cash-flow figure, which differs from interest expense, net of income on the income statement.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 5

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1,316 | Not supplied: the 2025 annual report states the revolver commitment and letters of credit at 2025-12-31 only | US$m | Cash and cash equivalents of 1,316; short-term investments of 56 are excluded; the debt table prints a dash for the revolver at 2024-12-31 |
| FY2025 / 2025-12-31 | 1,476 | 406 | US$m | Cash and cash equivalents of 1,476 (short-term investments of 66 excluded); undrawn is the 500 revolver commitment less 94 of letters of credit |
| 2026-09-30 | 1,038 | 418 | US$m | Cash and cash equivalents of 1,038 (short-term investments of 60 excluded); undrawn is the 500 revolver commitment less 82 of letters of credit |

The issuer's own total liquidity of USD 1.5 billion in the third quarter release includes revolver availability, while its quarterly report table of USD 1,098 million excludes it, so liquidity is shown here by component.
Basis: EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 39; calculation C42

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2027 | 229 | US$m | 2027 Notes: 3.250% unsecured convertible senior notes due 2027-09-15; principal 229, carrying value 227 |
| FY2029 | 800 | US$m | 2029 Secured Notes: senior secured notes due 2029-10-31; principal 800, carrying value 791 |
| FY2030 | 700 | US$m | 2030 Secured Notes: senior secured notes due 2030-09-15; principal 700, carrying value 693; the 500 revolver also matures 2030-03-13 and was undrawn |
| FY2032 | 700 | US$m | 2032 Secured Notes: senior secured notes due 2032-11-15; principal 700, carrying value 693 |
| FY2034 | 400 | US$m | 2034 Secured Notes: senior secured notes due 2034-05-31; principal 400, carrying value 395 |

Principal at 2026-09-30 is shown by maturity year, with no principal maturing in the years not listed, and the 2027 convertible notes could be settled earlier because they are convertible in the quarter ending 2026-12-31.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 10–11; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; calculation C38

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis |
|---|---|---|---|---|---|
| Net revenue | 11,851 | 12,457 | 13,207 | USD millions | Reported; LTM is FY2025 plus 9M 2026 less 9M 2025 |
| Gross profit | 3,574 | 3,765 | 3,956 | USD millions | Reported; LTM derived |
| EBITDA (Reported) | -74 | 322 | 549 | USD millions | Calculated: income (loss) from operations plus depreciation and amortization |
| EBITDA (Adjusted) | 453 | 743 | 853 | USD millions | Issuer-adjusted, as stated; LTM derived |
| Net income (loss) | -492 | -313 | -160 | USD millions | Reported; LTM derived |
| Net cash from operating activities | 317 | 534 | 708 | USD millions | Reported; LTM derived |
| Free cash flow (issuer definition) | 83 | 329 | 476 | USD millions | Operating cash flow less capital expenditure; issuer states 83 and 329 for FY2024 and FY2025 |
| Cash interest paid | 63 | 139 | 170 | USD millions | Reported cash-flow figure; LTM derived |
| Total debt (carrying value) | 3,118 | 3,272 | 2,799 | USD millions | Balance-sheet carrying value at period end; last column is 2026-09-30 |
| Cash and cash equivalents | 1,316 | 1,476 | 1,038 | USD millions | Balance-sheet line; last column is 2026-09-30 |
| Net debt | 1,802 | 1,796 | 1,761 | USD millions | Gross debt less cash and cash equivalents |
| Total debt / EBITDA | Not calculable: negative EBITDA | 10.16 | 5.10 | x | Calculated; LTM column uses last-twelve-month EBITDA and cash interest |
| Net debt / EBITDA | Not calculable: negative EBITDA | 5.58 | 3.21 | x | Calculated; LTM column uses last-twelve-month EBITDA and cash interest |
| Total debt / adjusted EBITDA | 6.88 | 4.40 | 3.28 | x | Calculated; LTM column uses last-twelve-month EBITDA and cash interest |
| Net debt / adjusted EBITDA | 3.98 | 2.42 | 2.06 | x | Calculated; LTM column uses last-twelve-month EBITDA and cash interest |
| EBITDA / cash interest | -1.17 | 2.32 | 3.23 | x | Calculated; LTM column uses last-twelve-month EBITDA and cash interest |
| Adjusted EBITDA / cash interest | 7.19 | 5.35 | 5.02 | x | Calculated; LTM column uses last-twelve-month EBITDA and cash interest |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 3,118 | 1,316 | 1,802 | US$m | Carrying value of 3,118 (principal 3,151) includes convertible and secured notes net of unamortised discount; no finance leases, securitisation or revolver drawings; operating lease liabilities are separate; reported |
| FY2025 / 2025-12-31 | 3,272 | 1,476 | 1,796 | US$m | Carrying value of 3,272 (principal 3,308) includes convertible and secured notes net of unamortised discount; no finance leases, securitisation or revolver drawings; operating lease liabilities are separate; reported |
| 2026-09-30 | 2,799 | 1,038 | 1,761 | US$m | Carrying value of 2,799 (principal 2,829) includes the 2027 convertible notes and four secured note series net of unamortised discount; no finance leases, securitisation or revolver drawings; operating lease liabilities are separate; reported |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 2,829 | -30 | 2,799 | US$m | Principal is the sum of the five ladder rows; reconciling items are unamortised discounts of 2 (2027 Notes), 9 (2029), 7 (2030), 7 (2032) and 5 (2034); no debt is left out of the ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Settlement of an equity instrument bought to facilitate share repurchases (cash settlement of 64) | 2026-10-28 | Not supplied: the filing states a cash settlement of 64 but not whether Wayfair paid or received it | Not supplied: the effect on net debt is not established | Not supplied: the effect on net debt is not established | US$m | Source: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18 and page 42; the instrument cost 60 in the third quarter, so a settlement received would lower net debt and a payment would raise it; not reflected in any period figure |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 12,003 | 306 | US$m | Twelve months; revenue as reported; EBITDA is issuer-adjusted (as stated by the issuer) |
| FY2024 / 2024-12-31 | 11,851 | 453 | US$m | Twelve months; revenue as reported; EBITDA is issuer-adjusted (as stated by the issuer) |
| FY2025 / 2025-12-31 | 12,457 | 743 | US$m | Twelve months; revenue as reported; EBITDA is issuer-adjusted (as stated by the issuer) |
| 2026-09-30 | 13,207 | 853 | US$m | Twelve months to 2026-09-30 (FY2025 plus 9M 2026 less 9M 2025); EBITDA is issuer-adjusted, derived from stated figures |

All four rows are twelve-month figures and the Adjusted EBITDA column is the issuer-adjusted measure, which is above reported EBITDA in every period.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; calculation C12; calculation C14

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolving credit facility (undrawn) | 1 | Yes | 0 | 0.00 | US$m | Wayfair LLC is the borrower; guaranteed by Wayfair Inc. and certain subsidiaries; first-priority liens, pari passu with the secured notes; 500 commitment, nothing drawn, 82 of letters of credit; matures 2030-03-13; cumulative debt 0 over last-twelve-month reported EBITDA of 549 |
| 2029 Secured Notes | 1 | Yes | 791 | 1.44 | US$m | Carrying value; issued by Wayfair LLC and guaranteed by Wayfair Inc. and certain subsidiaries; first-priority liens, pari passu with the revolver; cumulative debt 791 over last-twelve-month reported EBITDA of 549 |
| 2030 Secured Notes | 1 | Yes | 693 | 2.70 | US$m | Carrying value; issued by Wayfair LLC and guaranteed by Wayfair Inc. and certain subsidiaries; first-priority liens, pari passu with the revolver; cumulative debt 1,484 over last-twelve-month reported EBITDA of 549 |
| 2032 Secured Notes | 1 | Yes | 693 | 3.97 | US$m | Carrying value; issued by Wayfair LLC and guaranteed by Wayfair Inc. and certain subsidiaries; first-priority liens, pari passu with the revolver; cumulative debt 2,177 over last-twelve-month reported EBITDA of 549 |
| 2034 Secured Notes | 1 | Yes | 395 | 4.68 | US$m | Carrying value; issued by Wayfair LLC; the quarterly report states senior secured obligations and guarantors including Wayfair Inc.; first-priority treatment is stated for the other secured notes only; cumulative debt 2,572 over last-twelve-month reported EBITDA of 549 |
| 2027 Notes (convertible, unsecured) | 2 | No | 227 | 5.10 | US$m | Carrying value; issued by Wayfair Inc. with Wayfair LLC as guarantor; unsecured, effectively subordinated to secured debt and structurally subordinated to subsidiary liabilities; cumulative debt 2,799 over last-twelve-month reported EBITDA of 549 |

Amounts are carrying values at 2026-09-30 so that the last cumulative figure equals total debt over reported EBITDA, and the equal rank of the 2034 secured notes rests on the quarterly report calling them senior secured.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 12; calculation C72

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2025 | 322 | US$m | Opening measure: reported EBITDA, calculated as income from operations of 17 plus depreciation and amortization of 305 |
| Equity-based compensation and related taxes | 345 | US$m | Add-back as stated by the issuer; classification share-based compensation; realisation status not stated |
| Impairment and other related net charges | 23 | US$m | Add-back as stated by the issuer; classification other stated; realisation status not stated |
| Restructuring and other charges, net | 53 | US$m | Add-back as stated by the issuer; classification restructuring; realisation status not stated; includes a 15 gain on lease modification |
| EBITDA (Adjusted), FY2025 | 743 | US$m | Closing measure: issuer-adjusted EBITDA as stated; the opening plus the three add-backs equals it |

The bridge starts from calculated reported EBITDA, not from the net loss the issuer reconciles from, so its first row is this module's figure and not the issuer's.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; calculation C27

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_w-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025 with FY2024 and FY2023 comparatives; balance sheets at 2025-12-31 and 2024-12-31 | USD | millions | Wayfair Inc. consolidated | US GAAP | Tier 1 (audited) | Annual statements, debt note, covenant description, Adjusted EBITDA reconciliation, segment note | No balance sheet at 2023-12-31; exhibits not supplied |
| 10-Q_2026-03-31_w-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Three months ended 2026-03-31 with comparatives | USD | millions | Wayfair Inc. consolidated | US GAAP | Tier 2b (unaudited) | Not used for any figure | Not extracted into a column |
| 10-Q_2026-06-30_w-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Three and six months ended 2026-06-30 with comparatives | USD | millions | Wayfair Inc. consolidated | US GAAP | Tier 2b (unaudited) | 2034 secured notes terms; not extracted | Not extracted into a column |
| 10-Q_2026-09-30_w-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Three and nine months ended 2026-09-30 with comparatives; balance sheet at 2026-09-30 | USD | millions | Wayfair Inc. consolidated | US GAAP | Tier 2b (unaudited) | Latest statements, debt, liquidity and covenant description | Cash flows are year to date only; no separate subsequent-events note |
| EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter ended 2026-03-31 | USD | millions | Wayfair Inc. consolidated | US GAAP with issuer non-GAAP measures | Tier 2b (unaudited) | Not used for any figure | Issuer-defined measures; no outlook |
| EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter ended 2026-06-30 | USD | millions | Wayfair Inc. consolidated | US GAAP with issuer non-GAAP measures | Tier 2b (unaudited) | Not used for any figure | Issuer-defined measures; no outlook |
| EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter ended 2026-09-30 | USD | millions | Wayfair Inc. consolidated | US GAAP with issuer non-GAAP measures | Tier 2b (unaudited) | Operating metrics and the issuer's liquidity statement | Issuer-defined measures; no outlook |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Wayfair Inc. | Issuer of the 2027 convertible notes; parent guarantor of the revolver and secured notes; reporting registrant | December 31 | USD | millions | Consolidated, including Wayfair LLC and other subsidiaries | US GAAP | FY2023, FY2024, FY2025; Q3 2025, 9M 2025, Q3 2026, 9M 2026 (income statement); balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30 |
| Wayfair LLC | Issuer of the secured notes and borrower under the revolver; guarantor of the convertible notes | December 31 | USD | millions | Included in the consolidated statements; no stand-alone statements supplied | US GAAP | None supplied separately |
| Guarantors (certain subsidiaries, not named) | Guarantors of the revolver and secured notes | December 31 | USD | millions | Not supplied: no guarantor list or guarantor-only figures | US GAAP | None supplied |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) derived as income (loss) from operations plus depreciation and amortization | 10-K_2025-12-31_w-20251231.htm.jsonl; 10-Q_2026-09-30_w-20260930.htm.jsonl | Derivation of a line the issuer does not state | Not stated by the issuer | FY2025: 322; 9M 2026: 394 | The issuer states only Adjusted EBITDA; this basis excludes other income (expense) and gain or loss on debt extinguishment, which the issuer also excludes. Analyst Judgement. | All income statement columns |
| Total Debt taken as long-term debt plus short-term debt presented within other current liabilities | 10-K_2025-12-31_w-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 | Reclassification to a single debt total | Long-term debt: 2025-12-31: 3,233 | Total Debt: 2025-12-31: 3,272 | The balance sheet shows short-term debt inside other current liabilities; the debt note gives it | FY2024, FY2025, 9M 2026 |
| Last-twelve-month figures built as FY2025 plus 9M 2026 less 9M 2025 | 10-K_2025-12-31_w-20251231.htm.jsonl; 10-Q_2026-09-30_w-20260930.htm.jsonl | Derived period | Not stated by the issuer | See the constructed period register | No four-quarter totals are reported at 2026-09-30 | 2026-09-30 |
| Cells the filing prints as a dash are not read as zero | 10-K_2025-12-31_w-20251231.htm.jsonl; 10-Q_2026-09-30_w-20260930.htm.jsonl | Treatment of a missing value | Dash | Not supplied | A dash is a missing value under the method, with a gap line | See the statement tables |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | Q3 2025 | 9M 2025 | Q3 2026 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|
| Net revenue | 12,003 | 11,851 | 12,457 | 3,117 | 9,120 | 3,420 | 9,870 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Cost of goods sold | 8,336 | 8,277 | 8,692 | 2,183 | 6,365 | 2,408 | 6,924 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Gross profit | 3,667 | 3,574 | 3,765 | 934 | 2,755 | 1,012 | 2,946 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Customer service and merchant fees | 557 | 470 | 471 | 118 | 346 | 127 | 369 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Advertising | 1,397 | 1,472 | 1,425 | 330 | 1,046 | 338 | 1,059 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Selling, operations, technology, general and administrative | 2,447 | 1,977 | 1,776 | 445 | 1,339 | 441 | 1,293 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Impairment and other related net charges | 14 | 37 | 23 | Not supplied: the filing prints a dash | 23 | Not supplied: the filing prints a dash | 2 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Restructuring and other charges, net | 65 | 79 | 53 | 3 | 68 | Not supplied: the filing prints a dash | 24 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Total operating expenses | 4,480 | 4,035 | 3,748 | 896 | 2,822 | 906 | 2,747 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Income (loss) from operations | -813 | -461 | 17 | 38 | -67 | 106 | 199 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Interest expense, net | -17 | -29 | -119 | -31 | -83 | -42 | -120 | USD millions | Reported net of interest income, which the investments note states | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Interest income (included in interest expense, net) | 47 | 54 | 45 | 11 | 34 | 9 | 30 | USD millions | Reported in the investments note; not a line of the income statement | 10-K_2025-12-31_w-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 9 |
| Interest expense on the Notes (contractual interest plus debt discount amortization) | 63 | 83 | 165 | 45 | 123 | 50 | 149 | USD millions | Reported total for FY2023 to FY2025; quarter and nine-month columns are calculated as contractual interest plus discount amortization | 10-K_2025-12-31_w-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 15; calculation C8; calculation C9; calculation C10; calculation C11 |
| Other income (expense), net | 1 | -21 | 31 | -5 | 28 | 1 | -14 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| (Loss) gain on debt extinguishment, net | 100 | 29 | -233 | -99 | -68 | Not supplied: the filing prints a dash | -102 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Income (loss) before income taxes | -729 | -482 | -304 | -97 | -190 | 65 | -37 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Provision for income taxes, net | 9 | 10 | 9 | 2 | 7 | 3 | 7 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Net income (loss) | -738 | -492 | -313 | -99 | -197 | 62 | -44 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| Depreciation and amortization | 417 | 387 | 305 | 75 | 234 | 64 | 195 | USD millions | Reported in the Adjusted EBITDA reconciliation | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 49 |
| Equity-based compensation and related taxes | 623 | 411 | 345 | 92 | 261 | 66 | 209 | USD millions | Reported in the Adjusted EBITDA reconciliation; includes employer taxes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 49 |
| EBITDA (Reported) | -396 | -74 | 322 | 113 | 167 | 170 | 394 | USD millions | Calculated: income (loss) from operations plus depreciation and amortization; the issuer states no unadjusted EBITDA | calculation C1; calculation C2; calculation C3; calculation C4; calculation C5; calculation C6; calculation C7 |
| EBITDA (Adjusted) | 306 | 453 | 743 | 208 | 519 | 236 | 629 | USD millions | Issuer-adjusted as stated: adds back equity-based compensation and related taxes, impairment and restructuring to the same operating base | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 49 |
| U.S. net revenue | 10,482 | 10,373 | 10,973 | 2,728 | 8,031 | 3,040 | 8,777 | USD millions | Reported segment figure; no corporate or elimination row exists | 10-K_2025-12-31_w-20251231.htm.jsonl, page 143; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 23 |
| International net revenue | 1,521 | 1,478 | 1,484 | 389 | 1,089 | 380 | 1,093 | USD millions | Reported segment figure; no corporate or elimination row exists | 10-K_2025-12-31_w-20251231.htm.jsonl, page 143; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 23 |
| U.S. Adjusted EBITDA | 444 | 571 | 762 | 209 | 528 | 261 | 683 | USD millions | Reported segment measure | 10-K_2025-12-31_w-20251231.htm.jsonl, page 143; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 23 |
| International Adjusted EBITDA | -138 | -118 | -19 | -1 | -9 | -25 | -54 | USD millions | Reported segment measure | 10-K_2025-12-31_w-20251231.htm.jsonl, page 143; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 23 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net loss | -738 | -492 | -313 | -197 | -44 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Depreciation and amortization | 417 | 387 | 305 | 234 | 195 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Equity-based compensation expense | 605 | 395 | 335 | 252 | 201 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Amortization of debt discount and issuance costs | 8 | 9 | 9 | 7 | 6 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Gain on lease modification | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | -15 | Not supplied: not a line of this statement | Not supplied: not a line of this statement | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Impairment and other related net charges | 14 | 37 | 23 | 23 | 2 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Loss (gain) on debt extinguishment | -100 | -29 | 233 | 68 | 102 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Other non-cash adjustments | -3 | -1 | 6 | 21 | -20 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Accounts receivable, net | 132 | -35 | 29 | 33 | -36 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Inventories | 16 | -2 | 6 | 7 | -18 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Prepaid expenses and other assets | 16 | 10 | 11 | 18 | -70 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Accounts payable and other liabilities | -18 | 38 | -95 | -134 | 188 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Net Cash from Operating Activities | 349 | 317 | 534 | 332 | 506 | USD millions | Reported; interest paid is inside operating activities | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Purchase of short- and long-term investments | -36 | -67 | -115 | -76 | -53 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Sale and maturities of short- and long-term investments | 233 | 39 | 101 | 74 | 60 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Purchase of property and equipment | -148 | -73 | -70 | -45 | -81 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Site and software development costs | -203 | -161 | -135 | -103 | -94 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Other investing activities, net | 2 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: not a line of this statement | Not supplied: not a line of this statement | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Net Cash from Investing Activities | -152 | -262 | -219 | -150 | -168 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Proceeds from issuance of debt, net of issuance costs | 678 | 786 | 1,383 | 691 | 395 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Premiums paid for capped call confirmations | -87 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: not a line of this statement | Not supplied: not a line of this statement | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Payment of principal upon maturity of debt | Not supplied: the filing prints a dash | -117 | -157 | Not supplied: the filing prints a dash | -39 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Payments to extinguish debt | -514 | -741 | -1,315 | -940 | -245 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Settlement of long-term debt | Not supplied: not a line of this statement | Not supplied: not a line of this statement | Not supplied: not a line of this statement | Not supplied: the filing prints a dash | -696 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Payments of taxes related to net share settlement of equity awards | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | -89 | -54 | -77 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Repurchase of common stock | Not supplied: not a line of this statement | Not supplied: not a line of this statement | Not supplied: not a line of this statement | Not supplied: the filing prints a dash | -60 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Payments for purchase of equity instrument | Not supplied: not a line of this statement | Not supplied: not a line of this statement | Not supplied: not a line of this statement | Not supplied: the filing prints a dash | -60 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Unwind of capped calls | Not supplied: the filing prints a dash | 3 | 49 | Not supplied: not a line of this statement | Not supplied: not a line of this statement | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Net Cash from Financing Activities | 77 | -69 | -129 | -303 | -782 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| FX Effect on Cash | 2 | 8 | -30 | -28 | 6 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Net Cash Change | 276 | -6 | 156 | -149 | -438 | USD millions | Reported; includes the foreign-exchange effect | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Opening Cash | 1,050 | 1,326 | 1,320 | 1,320 | 1,476 | USD millions | Reported; cash, cash equivalents and restricted cash | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Closing Cash | 1,326 | 1,320 | 1,476 | 1,171 | 1,038 | USD millions | Reported; cash, cash equivalents and restricted cash | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| Cash Interest Paid | 53 | 63 | 139 | 98 | 129 | USD millions | Reported supplemental cash-flow figure: cash paid for interest on long-term debt | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 5 |
| Income taxes paid (state taxes net of refunds plus foreign taxes) | Not supplied: the filing does not state it for this period | Not supplied: the filing does not state it for this period | 12 | Not supplied: the filing does not state it for this period | Not supplied: the filing does not state it for this period | USD millions | Reported components of 4 and 8, summed (calculation C32); federal payments are not stated | 10-K_2025-12-31_w-20251231.htm.jsonl, page 137 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 1,316 | 1,476 | 1,038 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Short-term investments | 56 | 66 | 60 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Accounts receivable, net | 155 | 132 | 165 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Inventories | 76 | 71 | 89 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Prepaid expenses and other current assets | 274 | 256 | 323 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Total current assets | 1,877 | 2,001 | 1,675 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Operating lease right-of-use assets | 925 | 862 | 881 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Property and equipment, net | 603 | 516 | 533 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Other non-current assets | 54 | 61 | 62 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Total Assets | 3,459 | 3,440 | 3,151 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Accounts payable | 1,246 | 1,202 | 1,213 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Other current liabilities | 1,124 | 927 | 1,283 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Total current liabilities | 2,370 | 2,129 | 2,496 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Long-term debt | 2,882 | 3,233 | 2,572 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Operating lease liabilities, net of current | 929 | 835 | 864 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Other non-current liabilities | 33 | 25 | 23 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Total Liabilities | 6,214 | 6,222 | 5,955 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Additional paid-in capital | 1,751 | 2,073 | 2,087 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Accumulated deficit | -4,510 | -4,823 | -4,867 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Accumulated other comprehensive income (loss) | 4 | -32 | -24 | USD millions | Reported | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Total Equity | -2,755 | -2,782 | -2,804 | USD millions | Reported total stockholders' deficit | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Short-term debt, within other current liabilities | 236 | 39 | 227 | USD millions | Reported in the debt note | 10-K_2025-12-31_w-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 |
| Total Debt | 3,118 | 3,272 | 2,799 | USD millions | Carrying value: long-term debt plus short-term debt, net of unamortised discount; reported in the debt note | 10-K_2025-12-31_w-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 |
| Cash & Equivalents | 1,316 | 1,476 | 1,038 | USD millions | Reported; excludes short-term investments | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Operating lease liabilities, current, within other current liabilities | 174 | 190 | Not supplied: the quarterly report does not state the current portion | USD millions | Reported in the lease note; not in Total Debt | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 117–118 |
| Total operating lease liabilities | 1,103 | 1,025 | Not supplied: the quarterly report does not state the current portion | USD millions | Reported in the lease note; not in Total Debt | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 117–118 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolving Credit Facility | Revolver | Not supplied: the debt table prints a dash | 0 | 0 | 500 | Senior secured; first-priority liens on substantially all assets of the borrower and guarantors, including capital stock of domestic subsidiaries and 65% of voting stock of first-tier foreign subsidiaries | First-priority, pari passu with the secured notes | USD | 0 | Not applicable | Adjusted Term SOFR plus 1.25% margin at 2025-12-31 | Floating | Adjusted Term SOFR | 125 | Not applicable | 2030-03-13 (springing earlier maturity in certain circumstances, not described) | 0 | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 119–120; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 |
| 2027 Notes | Convertible senior notes | 227 | 229 | Not applicable | Not applicable | Unsecured | Senior unsecured; effectively subordinated to secured debt; structurally subordinated to subsidiary liabilities | USD | 227 | Not applicable | 3.250% | Fixed | Not applicable | Not applicable | Not applicable | 2027-09-15 | 0 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130 |
| 2029 Secured Notes | Senior secured notes | 791 | 800 | Not applicable | Not applicable | Senior secured; first-priority liens | First-priority, pari passu with the revolver | USD | 791 | Not applicable | 7.250% | Fixed | Not applicable | Not applicable | Not applicable | 2029-10-31 | 0 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-K_2025-12-31_w-20251231.htm.jsonl, page 121; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130 |
| 2030 Secured Notes | Senior secured notes | 693 | 700 | Not applicable | Not applicable | Senior secured; first-priority liens | First-priority, pari passu with the revolver | USD | 693 | Not applicable | 7.750% | Fixed | Not applicable | Not applicable | Not applicable | 2030-09-15 | 0 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-K_2025-12-31_w-20251231.htm.jsonl, page 121; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130 |
| 2032 Secured Notes | Senior secured notes | 693 | 700 | Not applicable | Not applicable | Senior secured; first-priority liens | First-priority, pari passu with the revolver | USD | 693 | Not applicable | 6.750% | Fixed | Not applicable | Not applicable | Not applicable | 2032-11-15 | 0 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-K_2025-12-31_w-20251231.htm.jsonl, pages 121–122; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130 |
| 2034 Secured Notes | Senior secured notes | 395 | 400 | Not applicable | Not applicable | Senior secured obligations of Wayfair LLC; lien priority not restated | Senior secured; priority against the revolver is not stated | USD | 395 | Not applicable | 7.125% | Fixed | Not applicable | Not applicable | Not applicable | 2034-05-31 | 0 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 12 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Net revenue | LTM to 2026-09-30 | USD 12,457m | USD 9,870m | USD 9,120m | USD 13,207m | Calculated | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3; calculation C12 | Full-year component is FY2025, current stub 9M 2026, prior-year stub 9M 2025 |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 322m | USD 394m | USD 167m | USD 549m | Calculated | calculation C3; calculation C7; calculation C5; calculation C13 | Each component is calculated from income from operations and depreciation and amortization |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 743m | USD 629m | USD 519m | USD 853m | Calculated | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 49; calculation C14 | Issuer-adjusted components as stated |
| Cash Interest Paid | LTM to 2026-09-30 | USD 139m | USD 129m | USD 98m | USD 170m | Calculated | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 5; calculation C15 | Cash-flow supplemental figures |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 534m | USD 506m | USD 332m | USD 708m | Calculated | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4; calculation C16 | Includes a working-capital inflow in 9M 2026 |
| Capital expenditure (property and equipment plus site and software development) | LTM to 2026-09-30 | USD 205m | USD 175m | USD 148m | USD 232m | Calculated | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4; calculation C20 | Maintenance and growth capex are not split in the filings |
| Equity-based compensation and related taxes | LTM to 2026-09-30 | USD 345m | USD 209m | USD 261m | USD 293m | Calculated | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 49; calculation C21 | Reconciling item between reported and adjusted EBITDA |
| Free cash flow (issuer definition) | LTM to 2026-09-30 | USD 329m | USD 331m | USD 184m | USD 476m | Calculated | 10-K_2025-12-31_w-20251231.htm.jsonl, page 89; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 50; calculation C22 | Operating cash flow less capital expenditure |
| Depreciation and amortization | LTM to 2026-09-30 | USD 305m | USD 195m | USD 234m | USD 266m | Calculated | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 49; calculation C24 | Part of the reported EBITDA derivation |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3,118 | Net debt data | -74 | calculation C2 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: the denominator is not above zero | Not Calculable | Tier 1 | Reported EBITDA is negative; the issuer-adjusted ratios are the usable measure for this period; calculation C49 |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 1,802 | Net debt data | -74 | calculation C2 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: the denominator is not above zero | Not Calculable | Tier 1 | Reported EBITDA is negative; the issuer-adjusted ratios are the usable measure for this period; calculation C50 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | -74 | calculation C2 | 63 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101 | FY2024 / 2024-12-31 | USD | US$m | -1.17 | Calculated | Tier 1 | Reported EBITDA is calculated, not issuer-stated; calculation C51 |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 3,118 | Net debt data | 453 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88 | FY2024 / 2024-12-31 | USD | US$m | 6.88 | Calculated | Tier 1 | Issuer-adjusted EBITDA as stated; calculation C52 |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 1,802 | Net debt data | 453 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88 | FY2024 / 2024-12-31 | USD | US$m | 3.98 | Calculated | Tier 1 | Issuer-adjusted EBITDA as stated; calculation C53 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 453 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88 | 63 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101 | FY2024 / 2024-12-31 | USD | US$m | 7.19 | Calculated | Tier 1 | Issuer-adjusted EBITDA as stated; calculation C54 |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3,272 | Net debt data | 322 | calculation C3 | FY2025 / 2025-12-31 | USD | US$m | 10.16 | Calculated | Tier 1 | Reported EBITDA is calculated, not issuer-stated; calculation C55 |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 1,796 | Net debt data | 322 | calculation C3 | FY2025 / 2025-12-31 | USD | US$m | 5.58 | Calculated | Tier 1 | Reported EBITDA is calculated, not issuer-stated; calculation C56 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 322 | calculation C3 | 139 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101 | FY2025 / 2025-12-31 | USD | US$m | 2.32 | Calculated | Tier 1 | Reported EBITDA is calculated, not issuer-stated; calculation C57 |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 3,272 | Net debt data | 743 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88 | FY2025 / 2025-12-31 | USD | US$m | 4.40 | Calculated | Tier 1 | Issuer-adjusted EBITDA as stated; calculation C58 |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 1,796 | Net debt data | 743 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88 | FY2025 / 2025-12-31 | USD | US$m | 2.42 | Calculated | Tier 1 | Issuer-adjusted EBITDA as stated; calculation C59 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 743 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88 | 139 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101 | FY2025 / 2025-12-31 | USD | US$m | 5.35 | Calculated | Tier 1 | Issuer-adjusted EBITDA as stated; calculation C60 |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 2,799 | Net debt data | 549 | calculation C13 | 2026-09-30 | USD | US$m | 5.10 | Calculated | Tier 2b | Reported EBITDA is calculated, not issuer-stated; last-twelve-month operands; calculation C61 |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 1,761 | Net debt data | 549 | calculation C13 | 2026-09-30 | USD | US$m | 3.21 | Calculated | Tier 2b | Reported EBITDA is calculated, not issuer-stated; last-twelve-month operands; calculation C62 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 549 | calculation C13 | 170 | calculation C15 | 2026-09-30 | USD | US$m | 3.23 | Calculated | Tier 2b | Reported EBITDA is calculated, not issuer-stated; last-twelve-month operands; calculation C63 |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 2,799 | Net debt data | 853 | calculation C14 | 2026-09-30 | USD | US$m | 3.28 | Calculated | Tier 2b | Issuer-adjusted EBITDA as stated; last-twelve-month operands; calculation C64 |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 1,761 | Net debt data | 853 | calculation C14 | 2026-09-30 | USD | US$m | 2.06 | Calculated | Tier 2b | Issuer-adjusted EBITDA as stated; last-twelve-month operands; calculation C65 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 853 | calculation C14 | 170 | calculation C15 | 2026-09-30 | USD | US$m | 5.02 | Calculated | Tier 2b | Issuer-adjusted EBITDA as stated; last-twelve-month operands; calculation C66 |
| Senior secured debt / EBITDA | Senior secured debt carrying value / EBITDA (Reported) | 2,173 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 118 | 322 | calculation C3 | FY2025 / 2025-12-31 | USD | US$m | 6.75 | Calculated | Tier 1 | Secured notes only (2029, 2030, 2032); the revolver was undrawn; calculation C75; not a covenant calculation |
| Senior secured debt / EBITDA | Senior secured debt carrying value / EBITDA (Reported) | 2,572 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 | 549 | calculation C13 | 2026-09-30 | USD | US$m | 4.68 | Calculated | Tier 2b | Secured notes only (2029, 2030, 2032, 2034); the revolver was undrawn; calculation C76; not a covenant calculation |
| (EBITDA - Capex) / cash interest | (EBITDA (Reported) - Capex) / Cash Interest Paid | 117 | calculation C77 | 139 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101 | FY2025 / 2025-12-31 | USD | US$m | 0.84 | Calculated | Tier 1 | Capex is purchase of property and equipment plus site and software development costs; calculation C78 |
| (EBITDA - Capex) / cash interest | (EBITDA (Reported) - Capex) / Cash Interest Paid | 317 | calculation C79 | 170 | calculation C15 | 2026-09-30 | USD | US$m | 1.86 | Calculated | Tier 2b | LTM figures derived from the annual report and the third-quarter report; calculation C80 |
| Liquidity / total debt | Liquidity (cash and equivalents plus undrawn revolver) / Total Debt | 1,882 | calculation C41 | 3,272 | Net debt data | FY2025 / 2025-12-31 | USD | US$m | 0.58 | Calculated | Tier 1 | Excludes short-term investments; calculation C81 |
| Liquidity / total debt | Liquidity (cash and equivalents plus undrawn revolver) / Total Debt | 1,456 | calculation C42 | 2,799 | Net debt data | 2026-09-30 | USD | US$m | 0.52 | Calculated | Tier 2b | Excludes short-term investments; calculation C82 |
| Free cash flow / adjusted EBITDA | Free Cash Flow / EBITDA (Adjusted) | 329 | calculation C23 | 743 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88 | FY2025 | USD | US$m | 0.44 | Calculated | Tier 1 | Free cash flow is operating cash flow less capital expenditure and includes working capital; calculation C83 |
| Free cash flow / adjusted EBITDA | Free Cash Flow / EBITDA (Adjusted) | 476 | calculation C22 | 853 | calculation C14 | LTM 2026-09-30 | USD | US$m | 0.56 | Calculated | Tier 2b | Includes a working-capital inflow in the nine months of 2026; calculation C84 |
| Gross margin | Gross Profit / Net revenue x 100 | 3,765 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100 | 12,457 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100 | FY2025 | USD | US$m | 30.22% | Calculated | Tier 1 | As reported; calculation C85 |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net revenue x 100 | 743 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88 | 12,457 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100 | FY2025 | USD | US$m | 5.96% | Calculated | Tier 1 | The issuer prints 6.0%; calculation C86 |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net revenue x 100 | 853 | calculation C14 | 13,207 | calculation C12 | LTM 2026-09-30 | USD | US$m | 6.46% | Calculated | Tier 2b | Issuer-adjusted measure on LTM revenue; calculation C87 |
| Net revenue growth | Net revenue / prior-year net revenue - 1 | 12,457 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100 | 11,851 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100 | FY2025 | USD | US$m | 5.11% | Calculated | Tier 1 | Year-over-year; calculation C88 |
| Net revenue growth | Net revenue / prior-year net revenue - 1 | 9,870 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 | 9,120 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 | 9M 2026 | USD | US$m | 8.22% | Calculated | Tier 2b | Year-over-year; calculation C89 |
| Capex / revenue | Capex / Net revenue x 100 | 205 | calculation C17 | 12,457 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100 | FY2025 | USD | US$m | 1.65% | Calculated | Tier 1 | Maintenance and growth capex are not split in the filings; calculation C90 |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|
| Operating | Active customers, period-end (millions) | 22 | 21 | 21 | 21.2 | 22.2 | Up (9M 2026 against 9M 2025) | The annual report rounds to whole millions; the quarterly report states one decimal |
| Operating | LTM net revenue per active customer, rate (USD) | 537 | 555 | 586 | 578 | 596 | Up (9M 2026 against 9M 2025) | Last-twelve-month definition at each period end |
| Operating | Orders delivered, period flow (millions) | 41 | 40 | 40 | 28.9 | 31.0 | Up (9M 2026 against 9M 2025) | The annual report rounds to whole millions |
| Operating | Average order value, rate (USD) | 292 | 300 | 312 | 315 | 318 | Up (9M 2026 against 9M 2025) | Issuer-reported |
| Margin | Adjusted EBITDA margin, issuer-reported (%) | 2.5 | 3.8 | 6.0 | 5.7 | 6.4 | Up (9M 2026 against 9M 2025) | Issuer-adjusted measure |
| Cash flow | Free cash flow, issuer definition (USD millions) | -2 | 83 | 329 | 184 | 331 | Up (9M 2026 against 9M 2025) | Operating cash flow less capital expenditure; includes working capital |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA is the unadjusted measure; here income (loss) from operations plus depreciation and amortization | The issuer states only Adjusted EBITDA, which also adds back equity-based compensation and related taxes, impairment and restructuring | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 49 | All periods | FY2025: 322 reported against 743 adjusted; difference 421. LTM: 549 against 853; difference 304 | Financial foundation; Fundamental credit | Both measures are shown and labelled; leverage is stated on each; no choice is made between them |
| EBITDA (alternative build) | Operating-income basis, as above | A net-income basis (net loss plus interest, tax and depreciation) would carry other income and the debt extinguishment loss | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100 | FY2025 | FY2025: 120 on a net-income basis against 322; total debt would be 27.27x instead of 10.16x | Financial foundation | The operating-income basis is used because non-operating items are not earnings available for debt service; Analyst Judgement |
| Debt | Balance-sheet carrying value, with principal logged beside it | The debt note gives principal and net carrying amount by instrument | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-K_2025-12-31_w-20251231.htm.jsonl, page 118 | 2024-12-31, 2025-12-31, 2026-09-30 | Carrying value is below principal by 33, 36 and 30 respectively; carrying value is used | Financial foundation | Both figures are stated; carrying value is the leverage numerator |
| Total liquidity | Cash plus undrawn committed facilities | The quarterly report table of total liquidity of 1,098 excludes the revolver; the release states USD 1.5 billion including revolver availability | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 39; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1 | 2026-09-30 | The two figures differ by the revolver availability of 418 and rounding | Financial foundation; Fundamental credit | Liquidity is shown by component: cash and equivalents of 1,038 and undrawn revolver of 418 |
| Net debt | Gross debt less cash and cash equivalents | The issuer states no net debt; short-term investments are a separate line | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 | 2026-09-30 | Short-term investments of 60 would lower net debt to 1,701 if counted as cash | Financial foundation | Short-term investments are excluded from cash, the conservative treatment; both are visible |
| Interest | Cash interest paid for coverage | The income statement shows interest expense net of interest income; the debt note gives interest expense on the Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-K_2025-12-31_w-20251231.htm.jsonl, page 115; 10-K_2025-12-31_w-20251231.htm.jsonl, page 129 | FY2025 | FY2025: 119 net expense (interest income of 45 deducted), 165 on the Notes and 139 cash paid | Financial foundation | Coverage uses cash interest paid; the other measures are shown beside it |
| Free cash flow | Operating cash flow less capital expenditure, working capital included | The issuer deducts purchases of property and equipment and site and software development costs | 10-K_2025-12-31_w-20251231.htm.jsonl, page 89; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 50 | All periods | No difference in amount: the figures agree with this definition | Financial foundation | Issuer definition used; no unlevered measure is stated |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and coverage on reported and adjusted EBITDA | Ready with Limitations | Reported EBITDA is calculated; FY2024 reported leverage is not calculable; covenant ratio headroom is not stated in the sources | State leverage on both measures; do not infer covenant headroom |
| Liquidity and maturity wall | Ready with Limitations | FY2024 undrawn revolver is not stated; the 2027 convertible notes are convertible in the quarter ending 2026-12-31; the post-quarter settlement direction is not stated | Use cash and undrawn revolver by component; treat the 64 settlement as unresolved |
| Net debt and capital structure | Ready | Guarantor list is not supplied; the 2034 secured notes' lien priority against the revolver is not restated | Read the notes' security from the annual report and the quarterly reports |
| Segment and operating performance | Ready | No gap beyond rounding of the annual operating metrics | None needed |
| Quarterly build and earnings quality | Ready with Limitations | Q4 2025, Q1 2026 and Q2 2026 discrete columns are not extracted; dash cells are not read as zero | Use the nine-month and last-twelve-month figures supplied |

## Calculations

| Calculation ID | Calculation | Inputs | Result |
|---|---|---|---|
| C1 | EBITDA (Reported), FY2023: income (loss) from operations plus depreciation and amortization | -813 + 417 | -396 |
| C2 | EBITDA (Reported), FY2024: income (loss) from operations plus depreciation and amortization | -461 + 387 | -74 |
| C3 | EBITDA (Reported), FY2025: income (loss) from operations plus depreciation and amortization | 17 + 305 | 322 |
| C4 | EBITDA (Reported), Q3 2025: income (loss) from operations plus depreciation and amortization | 38 + 75 | 113 |
| C5 | EBITDA (Reported), 9M 2025: income (loss) from operations plus depreciation and amortization | -67 + 234 | 167 |
| C6 | EBITDA (Reported), Q3 2026: income (loss) from operations plus depreciation and amortization | 106 + 64 | 170 |
| C7 | EBITDA (Reported), 9M 2026: income (loss) from operations plus depreciation and amortization | 199 + 195 | 394 |
| C8 | Interest expense on the Notes, Q3 2025: contractual interest plus debt discount amortization | 41 + 4 | 45 |
| C9 | Interest expense on the Notes, 9M 2025: contractual interest plus debt discount amortization | 114 + 9 | 123 |
| C10 | Interest expense on the Notes, Q3 2026: contractual interest plus debt discount amortization | 48 + 2 | 50 |
| C11 | Interest expense on the Notes, 9M 2026: contractual interest plus debt discount amortization | 143 + 6 | 149 |
| C12 | LTM to 2026-09-30, revenue: FY2025 plus 9M 2026 less 9M 2025 | 12,457 + 9,870 - 9,120 | 13,207 |
| C13 | LTM to 2026-09-30, EBITDA (Reported): FY2025 plus 9M 2026 less 9M 2025 | 322 + 394 - 167 | 549 |
| C14 | LTM to 2026-09-30, EBITDA (Adjusted): FY2025 plus 9M 2026 less 9M 2025 | 743 + 629 - 519 | 853 |
| C15 | LTM to 2026-09-30, cash interest paid: FY2025 plus 9M 2026 less 9M 2025 | 139 + 129 - 98 | 170 |
| C16 | LTM to 2026-09-30, net cash from operating activities: FY2025 plus 9M 2026 less 9M 2025 | 534 + 506 - 332 | 708 |
| C17 | Capital expenditure, FY2025: purchase of property and equipment plus site and software development costs | 70 + 135 | 205 |
| C18 | Capital expenditure, 9M 2025: purchase of property and equipment plus site and software development costs | 45 + 103 | 148 |
| C19 | Capital expenditure, 9M 2026: purchase of property and equipment plus site and software development costs | 81 + 94 | 175 |
| C20 | LTM to 2026-09-30, capital expenditure: FY2025 plus 9M 2026 less 9M 2025 | 205 + 175 - 148 | 232 |
| C21 | LTM to 2026-09-30, equity-based compensation and related taxes: FY2025 plus 9M 2026 less 9M 2025 | 345 + 209 - 261 | 293 |
| C22 | LTM to 2026-09-30, free cash flow: LTM net cash from operating activities less LTM capital expenditure | 708 - 232 | 476 |
| C23 | Free cash flow, FY2025: net cash from operating activities less capital expenditure | 534 - 205 | 329 |
| C24 | LTM to 2026-09-30, depreciation and amortization: FY2025 plus 9M 2026 less 9M 2025 | 305 + 195 - 234 | 266 |
| C25 | Add-backs in LTM Adjusted EBITDA: LTM EBITDA (Adjusted) less LTM EBITDA (Reported) | 853 - 549 | 304 |
| C26 | Add-backs in FY2025 Adjusted EBITDA: EBITDA (Adjusted) less EBITDA (Reported) | 743 - 322 | 421 |
| C27 | EBITDA bridge FY2025: reported EBITDA plus equity-based compensation and related taxes, impairment and restructuring | 322 + 345 + 23 + 53 | 743 |
| C28 | Net change in operating assets and liabilities, 9M 2026 | -36 - 18 - 70 + 188 | 64 |
| C29 | Net change in operating assets and liabilities, 9M 2025 | 33 + 7 + 18 - 134 | -76 |
| C30 | Swing in working-capital contribution, 9M 2026 less 9M 2025 | 64 - (-76) | 140 |
| C31 | Change in net cash from operating activities, 9M 2026 less 9M 2025 | 506 - 332 | 174 |
| C32 | Income taxes paid in 2025: state income taxes net of refunds plus foreign tax payments | 4 + 8 | 12 |
| C33 | Net debt at 2024-12-31: gross debt less cash and cash equivalents | 3,118 - 1,316 | 1,802 |
| C34 | Net debt at 2025-12-31: gross debt less cash and cash equivalents | 3,272 - 1,476 | 1,796 |
| C35 | Net debt at 2026-09-30: gross debt less cash and cash equivalents | 2,799 - 1,038 | 1,761 |
| C36 | Undrawn committed revolver at 2025-12-31: commitment less letters of credit drawn on it | 500 - 94 | 406 |
| C37 | Undrawn committed revolver at 2026-09-30: commitment less letters of credit drawn on it | 500 - 82 | 418 |
| C38 | Contractual principal at 2026-09-30: sum of the maturity ladder | 229 + 800 + 700 + 700 + 400 | 2,829 |
| C39 | Reconciling items at 2026-09-30: unamortised discounts, deducted from principal | (2) + (9) + (7) + (7) + (5) | -30 |
| C40 | Carrying value at 2026-09-30: principal plus reconciling items | 2,829 + (-30) | 2,799 |
| C41 | Liquidity at 2025-12-31: cash and cash equivalents plus undrawn revolver | 1,476 + 406 | 1,882 |
| C42 | Liquidity at 2026-09-30: cash and cash equivalents plus undrawn revolver | 1,038 + 418 | 1,456 |
| C43 | Contractual principal at 2024-12-31: sum of the instruments in the debt table | 237 + 734 + 690 + 690 + 800 | 3,151 |
| C44 | Contractual principal at 2025-12-31: sum of the instruments in the debt table | 39 + 480 + 589 + 800 + 700 + 700 | 3,308 |
| C45 | Principal less carrying value at 2024-12-31 | 3,151 - 3,118 | 33 |
| C46 | Principal less carrying value at 2025-12-31 | 3,308 - 3,272 | 36 |
| C47 | Principal less carrying value at 2026-09-30 | 2,829 - 2,799 | 30 |
| C48 | Net debt at 2026-09-30 if short-term investments were counted as cash: net debt less short-term investments | 1,761 - 60 | 1,701 |
| C49 | Total debt / EBITDA at FY2024 / 2024-12-31 | 3,118 / (-74) | Not calculable: the denominator is not above zero |
| C50 | Net debt / EBITDA at FY2024 / 2024-12-31 | 1,802 / (-74) | Not calculable: the denominator is not above zero |
| C51 | EBITDA / cash interest at FY2024 / 2024-12-31 | -74 / 63 | -1.17 |
| C52 | Total debt / adjusted EBITDA at FY2024 / 2024-12-31 | 3,118 / 453 | 6.88 |
| C53 | Net debt / adjusted EBITDA at FY2024 / 2024-12-31 | 1,802 / 453 | 3.98 |
| C54 | Adjusted EBITDA / cash interest at FY2024 / 2024-12-31 | 453 / 63 | 7.19 |
| C55 | Total debt / EBITDA at FY2025 / 2025-12-31 | 3,272 / 322 | 10.16 |
| C56 | Net debt / EBITDA at FY2025 / 2025-12-31 | 1,796 / 322 | 5.58 |
| C57 | EBITDA / cash interest at FY2025 / 2025-12-31 | 322 / 139 | 2.32 |
| C58 | Total debt / adjusted EBITDA at FY2025 / 2025-12-31 | 3,272 / 743 | 4.40 |
| C59 | Net debt / adjusted EBITDA at FY2025 / 2025-12-31 | 1,796 / 743 | 2.42 |
| C60 | Adjusted EBITDA / cash interest at FY2025 / 2025-12-31 | 743 / 139 | 5.35 |
| C61 | Total debt / EBITDA at 2026-09-30 | 2,799 / 549 | 5.10 |
| C62 | Net debt / EBITDA at 2026-09-30 | 1,761 / 549 | 3.21 |
| C63 | EBITDA / cash interest at 2026-09-30 | 549 / 170 | 3.23 |
| C64 | Total debt / adjusted EBITDA at 2026-09-30 | 2,799 / 853 | 3.28 |
| C65 | Net debt / adjusted EBITDA at 2026-09-30 | 1,761 / 853 | 2.06 |
| C66 | Adjusted EBITDA / cash interest at 2026-09-30 | 853 / 170 | 5.02 |
| C67 | Cumulative debt through Revolving credit facility (undrawn) over LTM EBITDA (Reported) | 0 / 549 | 0.00 |
| C68 | Cumulative debt through 2029 Secured Notes over LTM EBITDA (Reported) | 791 / 549 | 1.44 |
| C69 | Cumulative debt through 2030 Secured Notes over LTM EBITDA (Reported) | 1,484 / 549 | 2.70 |
| C70 | Cumulative debt through 2032 Secured Notes over LTM EBITDA (Reported) | 2,177 / 549 | 3.97 |
| C71 | Cumulative debt through 2034 Secured Notes over LTM EBITDA (Reported) | 2,572 / 549 | 4.68 |
| C72 | Cumulative debt through 2027 Notes (convertible, unsecured) over LTM EBITDA (Reported) | 2,799 / 549 | 5.10 |
| C73 | Net-income-based EBITDA, FY2025: net loss plus interest expense, net, plus provision for income taxes, plus depreciation and amortization | -313 + 119 + 9 + 305 | 120 |
| C74 | Total debt over net-income-based EBITDA, FY2025 | 3,272 / 120 | 27.27 |
| C75 | Senior secured debt over EBITDA (Reported), FY2025 | 2,173 / 322 | 6.75 |
| C76 | Senior secured debt over LTM EBITDA (Reported), 2026-09-30 | 2,572 / 549 | 4.68 |
| C77 | EBITDA (Reported) less capital expenditure, FY2025 | 322 - 205 | 117 |
| C78 | (EBITDA less capital expenditure) over cash interest paid, FY2025 | 117 / 139 | 0.84 |
| C79 | LTM EBITDA (Reported) less LTM capital expenditure, 2026-09-30 | 549 - 232 | 317 |
| C80 | (EBITDA less capital expenditure) over cash interest paid, LTM 2026-09-30 | 317 / 170 | 1.86 |
| C81 | Liquidity over total debt, FY2025 / 2025-12-31 | 1,882 / 3,272 | 0.58 |
| C82 | Liquidity over total debt, 2026-09-30 | 1,456 / 2,799 | 0.52 |
| C83 | Free cash flow over EBITDA (Adjusted), FY2025 | 329 / 743 | 0.44 |
| C84 | Free cash flow over EBITDA (Adjusted), LTM 2026-09-30 | 476 / 853 | 0.56 |
| C85 | Gross margin, FY2025 | 3,765 / 12,457 x 100 | 30.22% |
| C86 | Adjusted EBITDA margin, FY2025 | 743 / 12,457 x 100 | 5.96% |
| C87 | Adjusted EBITDA margin, LTM 2026-09-30 | 853 / 13,207 x 100 | 6.46% |
| C88 | Net revenue growth, FY2025 over FY2024 | (12,457 / 11,851 - 1) x 100 | 5.11% |
| C89 | Net revenue growth, 9M 2026 over 9M 2025 | (9,870 / 9,120 - 1) x 100 | 8.22% |
| C90 | Capital expenditure over net revenue, FY2025 | 205 / 12,457 x 100 | 1.65% |
| C91 | LTM to 2026-09-30, gross profit: FY2025 plus 9M 2026 less 9M 2025 | 3,765 + 2,946 - 2,755 | 3,956 |
| C92 | LTM to 2026-09-30, net income (loss): FY2025 plus 9M 2026 less 9M 2025 | -313 + (-44) - (-197) | -160 |

## Gaps

| Gap | Line item or metric | What it restricts | Severity | Action that would close it | Source |
|---|---|---|---|---|---|
| Cells the filings print as a dash (for example the third-quarter 2025 and 2026 impairment lines, the third-quarter 2026 restructuring and debt extinguishment lines, and several cash-flow lines in the annual and quarterly statements, and the revolver carrying value in the debt tables) | Income statement, cash flow statement and debt instrument cells marked Not supplied | Those cells are not read as zero, so no sum across them is stated | Low | Ask the issuer whether a dash means nil | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 |
| Cash-flow and income lines that one filing prints and another does not (settlement of long-term debt, repurchase of common stock and the equity instrument appear only in the 2026 quarterly statement; capped call lines only in the annual statement) | Cash flow statement cells marked as not a line of the statement | The line is not available for the other period type; totals are unaffected | Low | None needed | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 |
| The balance sheet at 2023-12-31 is not in the supplied documents | Balance sheet has no FY2023 column; leverage starts at FY2024 | Three-year leverage trend | Medium | Supply the 2024 annual report | 10-K_2025-12-31_w-20251231.htm.jsonl, page 99 |
| Reported EBITDA is negative in FY2024 | Leverage on reported EBITDA for FY2024 | The ratio is not calculable; adjusted ratios are shown instead | Medium | None; use the adjusted ratios for that year | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100 |
| The issuer states no unadjusted EBITDA, so reported EBITDA is calculated | EBITDA (Reported) in every period | Leverage and cover on reported EBITDA depend on this definition | Medium | Confirm the definition with the issuer if a stated figure is wanted | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88 |
| The revolver commitment and letters of credit are not stated at 2024-12-31 | Undrawn committed facilities, FY2024 | FY2024 liquidity includes cash only | Low | Supply the 2024 annual report | 10-K_2025-12-31_w-20251231.htm.jsonl, page 119 |
| The direction of the 64 million settlement on 2026-10-28 is not stated | Post-balance-sheet adjustment | Pro forma net debt and leverage are not established | Medium | Read the settlement terms or the fourth-quarter report | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42 |
| The covenant ratio the issuer reports against the 4.0 to 1.0 senior secured test is not stated, and its credit-agreement definition is not supplied | Covenant headroom | Headroom is not calculated and is not inferred | Medium | Supply the credit agreement and compliance certificate | 10-K_2025-12-31_w-20251231.htm.jsonl, page 120; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42 |
| The lien priority of the 2034 secured notes against the revolver is not restated; the rank of 1 rests on the notes being called senior secured | Debt stack ranking | Cumulative leverage of the secured tranche assumes equal rank | Low | Supply the 2034 indenture | 10-Q_2026-06-30_w-20260630.htm.jsonl, page 12 |
| Operating lease liabilities, current portion, are not stated at 2026-09-30 in the quarterly report | Balance sheet operating lease rows at 2026-09-30 | Total operating lease liabilities at 2026-09-30 are not established; the non-current portion is stated | Low | Read the lease note in the next annual report | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Cash taxes paid are stated for 2025 only (state and foreign; no federal figure) and for no interim period | Cash tax lines | Cash tax is not available for 2024, 2023 or 2026 | Low | Supply the interim tax paid figures | 10-K_2025-12-31_w-20251231.htm.jsonl, page 137 |
| Maintenance and growth capital expenditure are not split | Capital expenditure | Only total capex is stated | Low | None needed | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101 |
| Discrete columns for Q4 2025, Q1 2026, Q2 2026 and the first half are not extracted; the first-quarter and second-quarter reports are not extracted | Quarterly build | Last-twelve-month figures use the nine-month columns | Low | Extract those columns if a quarterly trend is wanted | 10-Q_2026-03-31_w-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 2 |
| The guarantor list and guarantor-only financial information are not supplied | Perimeter | All figures are consolidated | Low | Supply the subsidiary list | 10-K_2025-12-31_w-20251231.htm.jsonl, page 119 |

## Next module

The orchestrator selects the next module.

