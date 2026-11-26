# CP-1 Financial foundation: Snap Inc (snap-1564408)

## Request
Snap Inc (issuer id snap-1564408), as of 2026-11-18, pathway credit snapshot. Scope: statement tables, debt and liquidity data and credit ratios from the five supplied SEC filings, in the issuer's own currency. The Source readiness output of this run is the only earlier input.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_snap.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2024 | 2025-02-04 (signature date; the FY2025 annual report states the filing date, 2025-02-05) | 7055cdc69865d9612707c9660ee89e683c928fc774dd32340511f712973762cc | Balance sheet at 2023-12-31, debt note at 2023-12-31 and 2024-12-31, facility terms and letters of credit at 2024-12-31. |
| 10-K_2025-12-31_snap.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2025 | 2026-02-04 (signature date; the third-quarter 2026 report states the filing date, 2026-02-05) | ee99525ebb014193d070b5deb5486b38ebd3539d2d9018794846855178914462 | FY2023 to FY2025 income and cash flow statements, balance sheets at 2025-12-31 and 2024-12-31, debt note, commitments, non-GAAP reconciliations, user metrics and subsequent events. |
| 10-Q_2026-03-31_snap.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-06 (signature date; no source states the filing date) | 958cd95d1cd1644497a90cc62264f2ab21059330888ab9b071f31ca19bb89b36 | First-quarter 2026 statements, cash interest paid, user metrics, revenue by source and the April 2026 headcount plan. |
| 10-Q_2026-06-30_snap.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-03 (signature date; no source states the filing date) | e5a9658d4e88c7854a13b8104c719d8e03035017ba4a6319c9c91fb3c67a9ccc | Second-quarter 2026 statements, cash interest paid, user metrics and revenue by source. |
| 10-Q_2026-09-30_snap.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-04 (signature date; no source states the filing date) | a8f46f343c6c74de0389be31cc331fe16bcbc3e82a2c21daad50c1c69ab4abab | Third-quarter and nine-month 2026 statements, balance sheet at 2026-09-30, debt and revolving facility note, fair values, restructuring, liquidity discussion and non-GAAP reconciliations. |

| Module | Document | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness (CP-0) | Source readiness register set for this run | 0ec4b3eadb948f28ab590b5c85a951538464881ad885c9d349507c3c5c667fa3 | Document dates, the effective-source set, version map and the evidence-demand limits for financial work. |

## Findings

### Bottom line

Snap's leverage is 2.85x on issuer-adjusted EBITDA but not meaningful on reported EBITDA, which treats stock-based compensation as a cost, so the credit case rests on cash generation and liquid assets rather than earnings cover.

For the last twelve months to 30 September 2026, total debt is 58.56x reported EBITDA and 2.85x adjusted EBITDA, and cash interest paid is covered 0.39x and 8.10x respectively. On adjusted EBITDA, leverage has fallen from 23.21x in FY2023 as the issuer's own measure grew and carrying debt declined. Reported EBITDA was negative in every fiscal year to FY2025, so those ratios are not calculable. Net debt counts cash and cash equivalents only: it is 41.44x reported and 2.02x adjusted EBITDA, and the investment portfolio is not netted.
Basis: 10-Q_2026-09-30_snap.htm.jsonl, page 10; 10-Q_2026-09-30_snap.htm.jsonl, page 24; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56; 10-K_2025-12-31_snap.htm.jsonl, page 144; calculation C02; calculation C04; calculation C05; calculation C07

### Analysis by dimension

Leverage has fallen sharply on the issuer's own EBITDA, but its level depends on an add-back that is a recurring cost. Total debt at carrying value over issuer-adjusted EBITDA fell from 23.21x for FY2023 to 7.16x for FY2024, 5.13x for FY2025 and 2.85x for the last twelve months to 30 September 2026, because adjusted EBITDA grew from USD 161.577 million to USD 1,223.341 million while carrying debt declined from USD 3,749.400 million to USD 3,486.418 million. The adjusted measure adds back about USD 1.0 billion a year of stock-based compensation, so reported EBITDA, which treats it as a cost, was negative in each fiscal year to FY2025 and is USD 59.536 million for the last twelve months. Creditors gain from the improvement on both measures, but a leverage level that depends on excluding a compensation cost paid in equity is only as reliable as the equity currency that pays it.
Basis: 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-K_2025-12-31_snap.htm.jsonl, page 156; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56; 10-Q_2026-09-30_snap.htm.jsonl, page 10; calculation C02; calculation C04; calculation C05

Cash interest cover is adequate on the adjusted measure and thin on the reported one, and the coupon step-up is recent. Cash interest paid rose from USD 10.244 million in FY2023 to USD 65.060 million in FY2025 and about USD 151.060 million for the last twelve months, because the 2033 and 2034 senior notes (USD 2,050.000 million of principal issued in 2025) replaced low-coupon convertible notes; the issuer states future interest obligations of USD 145.3 million within a year and USD 824.5 million thereafter. Cover is 8.10x on adjusted EBITDA but 0.39x on reported EBITDA, so every dollar of cash coupon is serviced from cash flow that includes a large non-cash compensation add-back rather than from earnings after that cost.
Basis: 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-09-30_snap.htm.jsonl, page 25; 10-Q_2026-09-30_snap.htm.jsonl, page 50; calculation C03; calculation C05; calculation C09

Cash flow is the strongest support but is flattered by stock-based compensation, and shareholder returns absorb all of it. Free cash flow was USD 776.554 million for the last twelve months, 63.48% of adjusted EBITDA and 11.83% of revenue, with capital intensity of only 3.14% of revenue because the platform runs on third-party hosting and leased offices. Operating cash flow includes the non-cash compensation add-back of USD 1,016.825 million in FY2025, so the figure is not comparable with a business that pays staff in cash; and share repurchases of USD 600.964 million in nine months 2026 exceeded nine-month free cash flow of USD 570.998 million, so the excess came out of cash and the securities portfolio.
Basis: 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9; 10-Q_2026-09-30_snap.htm.jsonl, page 55; 10-K_2025-12-31_snap.htm.jsonl, page 143; 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; calculation C03; calculation C06

Liquidity is large against near-term maturities, and the facility covenant is tested on cash and cash equivalents rather than on the whole portfolio. Cash and cash equivalents of USD 1,019.215 million, marketable securities of USD 1,751.432 million and an undrawn USD 1,050.000 million revolving facility compare with USD 106.318 million of 2027 convertible notes due on 1 May 2027 and a USD 250.000 million facility tranche expiring on 6 May 2027. Net debt on cash and cash equivalents alone is USD 2,467.203 million, or USD 715.771 million if marketable securities are netted. The facility's minimum-liquidity covenant of USD 800.000 million is defined on unrestricted cash and cash equivalents, a line that excludes marketable securities on the balance sheet; whether the agreement counts the securities is not stated, and this module computes no covenant headroom.
Basis: 10-Q_2026-09-30_snap.htm.jsonl, page 10; 10-Q_2026-09-30_snap.htm.jsonl, page 24; 10-Q_2026-09-30_snap.htm.jsonl, page 26; 10-Q_2026-09-30_snap.htm.jsonl, page 50; calculation C04; calculation C07

The one non-debt funding float is deferred revenue, which is growing and is not debt. Deferred revenue inside accrued expenses rose from USD 145.2 million at 31 December 2025 to USD 246.6 million at 30 September 2026 alongside growth in other revenue, mainly subscriptions; it is a prepayment for service delivered, carries no interest and is outside net debt. No supplier finance, factoring or customer-deposit arrangement is described in any source.
Basis: 10-Q_2026-09-30_snap.htm.jsonl, page 15; 10-Q_2026-09-30_snap.htm.jsonl, page 16

No event after the 30 September 2026 balance sheet changes net debt, and the multi-figure debt items are kept apart by purpose. The share-reserve increase approved on 4 November 2026 does not touch net debt, and the February 2026 repurchase programme of USD 500.0 million, of which USD 150.0 million remained at 30 September 2026, is a discretionary outflow after FY2025 and is excluded from period figures. The 2025 note exchanges leave two debt figures: principal of USD 3,420.509 million, used for the maturity ladder, and carrying value of USD 3,486.418 million, used for leverage, which includes a USD 106.943 million premium on the 2033 notes created by debt-modification accounting.
Basis: 10-Q_2026-09-30_snap.htm.jsonl, page 164; 10-Q_2026-09-30_snap.htm.jsonl, pages 23–24; 10-Q_2026-09-30_snap.htm.jsonl, page 51; 10-K_2025-12-31_snap.htm.jsonl, page 199; calculation C08

Three data limits restrict the ratios and two definition differences matter. Reported EBITDA is calculated because the issuer reports only an adjusted figure; interim cash interest is stated to one decimal in USD millions, so last-twelve-months cover is an estimate; and the fourth quarter of 2025 is constructed because no fourth-quarter statements are supplied. The issuer's reconciliation also uses depreciation and compensation figures that differ from the cash flow statement by restructuring-related amounts (USD 1.374 million and USD 26.071 million for nine months 2026), and its cash interest paid is lumpy because the senior notes pay semi-annually, so a quarter's cash interest is not a run rate.
Basis: 10-Q_2026-09-30_snap.htm.jsonl, page 25; 10-Q_2026-09-30_snap.htm.jsonl, page 35; 10-Q_2026-09-30_snap.htm.jsonl, page 56; calculation C02; calculation C10

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| Q2 2026 | 2026-04-01 | 2026-06-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_snap.htm.jsonl | Annual report on Form 10-K | FY2022 to FY2024 statements; balance sheets at 2024-12-31 and 2023-12-31 | USD | thousands | Consolidated Snap Inc. | US GAAP | Tier 1: audited statements | Balance sheet at 2023-12-31, debt note and facility terms at 2024-12-31 | Superseded for FY2024 by the FY2025 report's comparatives; FY2023 facility availability not stated |
| 10-K_2025-12-31_snap.htm.jsonl | Annual report on Form 10-K | FY2023 to FY2025 income and cash flow statements; balance sheets at 2025-12-31 and 2024-12-31 | USD | thousands | Consolidated Snap Inc. | US GAAP | Tier 1: audited statements | Fiscal-year statements, debt note, non-GAAP reconciliations, commitments, subsequent events | Charts not extracted; no unadjusted EBITDA is reported |
| 10-Q_2026-03-31_snap.htm.jsonl | Quarterly report on Form 10-Q | Q1 2026 against Q1 2025; balance sheet at 2026-03-31 | USD | thousands | Consolidated Snap Inc. | US GAAP | Tier 2b: unaudited, no auditor review stated | Discrete first quarter, cash interest paid | Interim cash interest stated in USD millions to one decimal |
| 10-Q_2026-06-30_snap.htm.jsonl | Quarterly report on Form 10-Q | Q2 and six months 2026 against 2025; balance sheet at 2026-06-30 | USD | thousands | Consolidated Snap Inc. | US GAAP | Tier 2b: unaudited, no auditor review stated | Discrete second quarter, cash interest paid | Interim cash interest stated in USD millions to one decimal |
| 10-Q_2026-09-30_snap.htm.jsonl | Quarterly report on Form 10-Q | Q3 and nine months 2026 against 2025; balance sheets at 2026-09-30 and 2025-12-31 | USD | thousands | Consolidated Snap Inc. | US GAAP | Tier 2b: unaudited, no auditor review stated | Latest quarter, nine months, balance sheet, debt note, liquidity | Interim cash interest stated in USD millions to one decimal |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Snap Inc. | Issuer and registrant; the notes and the revolving facility are its obligations; no borrower, guarantor or restricted group is named | December 31 | USD | thousands | Snap Inc. and its subsidiaries, consolidated, one operating segment | US GAAP | FY2023, FY2024, FY2025, Q1 2026, Q2 2026, Q3 2026, 9M 2026, Q3 2025, 9M 2025; balance sheets at 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 |

Subsequent events are flagged with their dates and kept out of period figures: the February 2026 repurchase programme of USD 500.0 million (after the FY2025 balance sheet), the headcount reduction announced on 15 April 2026 (after the Q1 balance sheet, charges recognised in the second quarter), the repayment of the 2026 notes on 1 August 2026 (inside the nine months) and the share-reserve increase approved on 4 November 2026 (after the latest balance sheet, no effect on debt).
Basis: 10-K_2025-12-31_snap.htm.jsonl, page 199; 10-Q_2026-03-31_snap.htm.jsonl, page 31; 10-Q_2026-09-30_snap.htm.jsonl, page 9; 10-Q_2026-09-30_snap.htm.jsonl, page 21; 10-Q_2026-09-30_snap.htm.jsonl, page 164

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Money tables restated from USD thousands to US$m | 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, page 10 | Unit conversion | USD 3,486,418 thousand | US$m 3,486.418 | The money tables use US$m with three decimals, which is exact; the statements stay in thousands | All balance-sheet dates |
| EBITDA (Reported) calculated as operating income (loss) plus depreciation and amortization as the issuer reconciles it | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 | Derivation | Operating income (loss) 76,716; D&A 44,597 | EBITDA (Reported) 121,313 | The issuer reports no unadjusted EBITDA; the reconciliation's depreciation excludes depreciation inside restructuring charges so the bridge to Adjusted EBITDA closes without a plug | All nine statement columns |
| Interim cash interest paid converted from USD millions to thousands | 10-Q_2026-03-31_snap.htm.jsonl, page 23; 10-Q_2026-06-30_snap.htm.jsonl, page 23; 10-Q_2026-09-30_snap.htm.jsonl, page 25 | Unit conversion with precision flag | USD 148.7 million | 148,700 thousand | The debt note states interim cash interest to one decimal, so each figure is precise to about 50 thousand | Q1, Q2, Q3 and 9M 2026; Q3 and 9M 2025 |
| Last twelve months constructed as FY2025 plus 9M 2026 less 9M 2025 | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–10; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 | Period construction | FY2025 EBITDA (Reported) -368,534 | LTM 59,536 | Every component is available and the stubs are comparable nine-month periods | 2026-09-30 |
| Fourth quarter of 2025 constructed as FY2025 less 9M 2025 | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 | Period construction | FY2025 revenue 5,931,447 | Q4 2025 revenue 1,716,461 | No fourth-quarter statements are supplied, so the quarter is calculated and labelled | Q4 2025 |
| Total Debt at FY2023 taken from the long-term line only | 10-K_2024-12-31_snap.htm.jsonl, page 123 | Aggregation | Current convertible notes: dash; long-term 3,749,400 | Total Debt 3,749,400 | A dash is printed for the current line and total current liabilities reconcile without it | FY2023 |
| No currency conversion | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-09-30_snap.htm.jsonl, page 9 | None | USD | USD | Every figure is in USD; the one currency and unit of the statements is kept | All periods |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | 9M 2026 | Q3 2025 | 9M 2025 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | 4,606,115 | 5,361,398 | 5,931,447 | 1,528,791 | 1,598,993 | 1,722,471 | 4,850,255 | 1,506,839 | 4,214,986 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Cost of revenue | 2,114,117 | 2,474,237 | 2,669,575 | 665,241 | 667,885 | 649,413 | 1,982,539 | 674,220 | 1,967,132 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Gross Profit | 2,491,998 | 2,887,161 | 3,261,872 | 863,550 | 931,108 | 1,073,058 | 2,867,716 | 832,619 | 2,247,854 | USD thousands | Calculated: revenue less cost of revenue (the issuer prints no gross profit); calculation C01 | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Research and development | 1,910,862 | 1,691,683 | 1,793,601 | 478,296 | 542,092 | 477,678 | 1,498,066 | 453,418 | 1,320,908 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Sales and marketing | 1,122,092 | 1,063,675 | 1,021,305 | 239,011 | 298,399 | 298,036 | 835,446 | 256,215 | 772,025 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| General and administrative | 857,423 | 919,097 | 979,133 | 220,692 | 261,338 | 220,628 | 702,658 | 251,348 | 736,805 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Total costs and expenses | 6,004,494 | 6,148,692 | 6,463,614 | 1,603,240 | 1,769,714 | 1,645,755 | 5,018,709 | 1,635,201 | 4,796,870 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Operating income (loss) | -1,398,379 | -787,294 | -532,167 | -74,449 | -170,721 | 76,716 | -168,454 | -128,362 | -581,884 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Interest income | 168,394 | 153,466 | 134,159 | 26,459 | 24,672 | 26,859 | 77,990 | 32,255 | 102,472 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Interest expense | -22,024 | -21,552 | -121,998 | -36,756 | -36,941 | -37,290 | -110,987 | -34,494 | -85,500 | USD thousands | Reported; interest expense and tax are shown as printed, a cost negative | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Other income (expense), net | -42,414 | -16,846 | 68,870 | -1,014 | 21,502 | -36 | 20,452 | 27,570 | 75,816 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Income (loss) before income taxes | -1,294,423 | -672,226 | -451,136 | -85,760 | -161,488 | 66,249 | -180,999 | -103,031 | -489,096 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Income tax benefit (expense) | -28,062 | -25,630 | -9,353 | -3,191 | -2,472 | -9,751 | -15,414 | -510 | -16,602 | USD thousands | Reported; interest expense and tax are shown as printed, a cost negative | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Net income (loss) | -1,322,485 | -697,856 | -460,489 | -88,951 | -163,960 | 56,498 | -196,413 | -103,541 | -505,698 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| Depreciation and amortization (issuer reconciliation) | 159,999 | 154,459 | 163,633 | 44,696 | 45,599 | 44,597 | 134,892 | 42,514 | 120,252 | USD thousands | Reported in the Adjusted EBITDA reconciliation; excludes depreciation inside restructuring charges | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-03-31_snap.htm.jsonl, pages 47–48; 10-Q_2026-06-30_snap.htm.jsonl, page 50; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 |
| Stock-based compensation expense (issuer reconciliation) | 1,319,783 | 1,031,621 | 1,016,825 | 250,040 | 236,680 | 255,227 | 741,947 | 260,363 | 759,587 | USD thousands | Reported in the Adjusted EBITDA reconciliation; excludes stock-based compensation inside restructuring charges | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-03-31_snap.htm.jsonl, pages 47–48; 10-Q_2026-06-30_snap.htm.jsonl, page 50; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 |
| Payroll and other tax expense related to stock-based compensation | 39,324 | 37,768 | 41,188 | 13,046 | 9,552 | 6,107 | 28,705 | 7,523 | 33,778 | USD thousands | Reported in the Adjusted EBITDA reconciliation | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-03-31_snap.htm.jsonl, pages 47–48; 10-Q_2026-06-30_snap.htm.jsonl, page 50; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 |
| Restructuring charges | 40,850 | 72,051 | Not supplied: dash in filing | Not supplied: dash in filing | 128,505 | Not supplied: dash in filing | 128,505 | Not supplied: dash in filing | Not supplied: dash in filing | USD thousands | Reported in the Adjusted EBITDA reconciliation; a dash is a gap, not zero | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-03-31_snap.htm.jsonl, pages 47–48; 10-Q_2026-06-30_snap.htm.jsonl, page 50; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 |
| EBITDA (Reported) | -1,238,380 | -632,835 | -368,534 | -29,753 | -125,122 | 121,313 | -33,562 | -85,848 | -461,632 | USD thousands | Calculated: operating income (loss) plus depreciation and amortization as the issuer reconciles it; the issuer reports no unadjusted EBITDA; calculation C02 | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-03-31_snap.htm.jsonl, pages 47–48; 10-Q_2026-06-30_snap.htm.jsonl, page 50; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 |
| EBITDA (Adjusted) | 161,577 | 508,605 | 689,479 | 233,333 | 249,615 | 382,647 | 865,595 | 182,038 | 331,733 | USD thousands | Issuer-adjusted Adjusted EBITDA: net income (loss) before interest, other income (expense), tax, depreciation and amortization, stock-based compensation, related payroll tax and restructuring charges | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-03-31_snap.htm.jsonl, pages 47–48; 10-Q_2026-06-30_snap.htm.jsonl, page 50; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | 9M 2026 | Q3 2025 | 9M 2025 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | -1,322,485 | -697,856 | -460,489 | -88,951 | -163,960 | 56,498 | -196,413 | -103,541 | -505,698 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Depreciation and amortization | 168,441 | 158,074 | 163,633 | 44,696 | 46,945 | 44,625 | 136,266 | 42,514 | 120,252 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Stock-based compensation | 1,324,004 | 1,041,023 | 1,016,825 | 250,040 | 263,189 | 254,789 | 768,018 | 260,363 | 759,587 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Amortization of debt issuance costs and debt discount (premium) | 7,361 | 9,388 | 6,880 | -931 | -967 | -1,014 | -2,912 | 686 | 7,778 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Losses (gains) on debt and equity securities, net | 33,027 | 8,460 | 16,940 | 845 | -129 | -440 | 276 | 1,182 | 15,774 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| (Gain) loss on extinguishment of debt | Not supplied: dash in filing | 6,672 | -96,734 | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: dash in filing | -29,795 | -96,734 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Other (operating) | -26,958 | -20,825 | 26,119 | 5,126 | 10,909 | 6,832 | 22,867 | 2,985 | 14,542 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Accounts receivable, net of allowance | -98,127 | -94,005 | -31,827 | 174,635 | -67,614 | -14,348 | 92,673 | -89,096 | 102,032 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Prepaid expenses and other current assets | -9,920 | -36,544 | -66,744 | -16,270 | -14,460 | -27,092 | -57,822 | -16,313 | -46,199 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Operating lease right-of-use assets | 70,674 | 54,127 | 57,214 | 15,114 | 15,734 | 16,920 | 47,768 | 14,909 | 42,829 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Other assets | 2,238 | -9,952 | 7,705 | -240 | 159 | -3,421 | -3,502 | 161 | 7,054 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Accounts payable | 94,988 | -100,728 | 45,918 | 22,044 | -59,745 | -103,688 | -141,389 | 38,125 | -21,818 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Accrued expenses and other current liabilities | 62,130 | 150,391 | 12,814 | -67,649 | 155,599 | -6,252 | 81,698 | 23,926 | 9,053 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Operating lease liabilities | -68,007 | -62,663 | -34,429 | -12,455 | -9,011 | -13,512 | -34,978 | 1,325 | -24,160 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Other liabilities | 9,155 | 7,918 | -7,655 | 775 | -435 | 587 | 927 | -943 | 2,300 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Net Cash from Operating Activities | 246,521 | 413,480 | 656,170 | 326,779 | 176,214 | 210,484 | 713,477 | 146,488 | 386,592 | USD thousands | Reported total | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Purchases of property and equipment | -211,727 | -194,826 | -218,981 | -40,772 | -55,676 | -46,031 | -142,479 | -53,044 | -154,959 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Purchases of strategic investments | -7,770 | -2,000 | -22,500 | -5,934 | Not supplied: dash in filing | -1,000 | -6,934 | Not supplied: dash in filing | -20,000 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Sales of strategic investments | 7,559 | 1,755 | 11,050 | Not supplied: no line printed | Not supplied: no line printed | Not supplied: dash in filing | Not supplied: dash in filing | 11,050 | 11,050 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Cash paid for acquisitions, net of cash acquired | -50,254 | Not supplied: dash in filing | -35,499 | -39,370 | -25,678 | Not supplied: dash in filing | -65,048 | Not supplied: dash in filing | -35,499 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Purchases of marketable securities | -2,048,273 | -2,287,668 | -1,275,796 | -302,360 | -213,798 | -279,851 | -796,009 | -388,652 | -1,015,317 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Sales of marketable securities | 459,481 | 354,311 | 741,266 | 232,098 | 55,359 | 16,333 | 303,790 | 102,530 | 539,688 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Maturities of marketable securities | 2,424,717 | 1,411,444 | 977,159 | 213,600 | 216,138 | 208,595 | 638,333 | 220,203 | 785,317 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Other (investing) | -2,779 | -100 | -3,581 | Not supplied: no line printed | -500 | Not supplied: dash in filing | -500 | Not supplied: dash in filing | Not supplied: dash in filing | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Net Cash from Investing Activities | 570,954 | -717,084 | 173,118 | 57,262 | -24,155 | -101,954 | -68,847 | -107,913 | 110,280 | USD thousands | Reported total | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Proceeds from issuance of notes, net of issuance costs | Not supplied: dash in filing | 740,350 | 2,014,193 | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: dash in filing | 541,110 | 2,014,193 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Purchase of capped calls | Not supplied: dash in filing | -68,850 | Not supplied: dash in filing | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Proceeds from termination of capped calls | Not supplied: dash in filing | 62,683 | Not supplied: dash in filing | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Proceeds from the exercise of stock options | 1,038 | 12,798 | 374 | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | Not supplied: no line printed | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Repurchases of Class A non-voting common stock | -189,394 | -311,069 | -750,866 | -350,499 | -250,465 | Not supplied: dash in filing | -600,964 | Not supplied: dash in filing | -500,573 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Deferred payments for acquisitions | -270,433 | -3,695 | -72,539 | Not supplied: dash in filing | -2,642 | -250 | -2,892 | Not supplied: dash in filing | -67,539 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Repurchases of convertible notes | Not supplied: dash in filing | -859,042 | -1,994,550 | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: dash in filing | Not supplied: dash in filing | -549,924 | -1,994,550 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Repayment of convertible notes | Not supplied: dash in filing | Not supplied: dash in filing | -36,240 | Not supplied: no line printed | Not supplied: dash in filing | -47,013 | -47,013 | Not supplied: dash in filing | -36,240 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Other (financing) | Not supplied: dash in filing | -1,799 | -8,497 | -1,601 | -1,799 | -1,000 | -4,400 | -3,199 | -6,898 | USD thousands | Reported | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Net Cash from Financing Activities | -458,789 | -428,624 | -848,125 | -352,100 | -254,906 | -48,263 | -655,269 | -12,013 | -591,607 | USD thousands | Reported total | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Net Cash Change | 358,686 | -732,228 | -18,837 | 31,941 | -102,847 | 60,267 | -10,639 | 26,562 | -94,735 | USD thousands | Reported total | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Opening Cash | 1,423,776 | 1,782,462 | 1,050,234 | 1,031,397 | 1,063,338 | 960,491 | 1,031,397 | 928,937 | 1,050,234 | USD thousands | Reported; the issuer's own total (cash includes restricted cash) | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Closing Cash | 1,782,462 | 1,050,234 | 1,031,397 | 1,063,338 | 960,491 | 1,020,758 | 1,020,758 | 955,499 | 955,499 | USD thousands | Reported; the issuer's own total (cash includes restricted cash) | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-03-31_snap.htm.jsonl, pages 7–8; 10-Q_2026-06-30_snap.htm.jsonl, pages 7–8; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9 |
| Cash Interest Paid | 10,244 | 10,284 | 65,060 | 74,900 | 2,400 | 71,400 | 148,700 | 58,100 | 62,700 | USD thousands | Reported in the annual cash flow statement for fiscal years; for 2026 and 2025 interim columns stated in the debt note in USD millions to one decimal, so precise to about 50 thousand | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 23; 10-Q_2026-06-30_snap.htm.jsonl, page 23; 10-Q_2026-09-30_snap.htm.jsonl, page 25 |
| Cash paid for income taxes, net | 30,924 | 24,686 | 26,716 | Not supplied: interim reports state none | Not supplied: interim reports state none | Not supplied: interim reports state none | Not supplied: interim reports state none | Not supplied: interim reports state none | Not supplied: interim reports state none | USD thousands | Reported in the annual cash flow statement | 10-K_2025-12-31_snap.htm.jsonl, page 155 |
| Free Cash Flow (issuer non-GAAP) | 34,794 | 218,654 | 437,189 | 286,007 | 120,538 | 164,453 | 570,998 | 93,444 | 231,633 | USD thousands | Calculated: net cash from operating activities less purchases of property and equipment, as the issuer defines it; calculation C03 | 10-K_2025-12-31_snap.htm.jsonl, page 143; 10-Q_2026-03-31_snap.htm.jsonl, page 47; 10-Q_2026-06-30_snap.htm.jsonl, page 50; 10-Q_2026-09-30_snap.htm.jsonl, page 55 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 1,780,400 | 1,046,534 | 1,030,435 | 1,019,215 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Marketable securities | 1,763,680 | 2,329,745 | 1,910,137 | 1,751,432 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Accounts receivable, net of allowance | 1,278,176 | 1,348,472 | 1,372,237 | 1,243,746 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Prepaid expenses and other current assets | 153,587 | 182,006 | 272,065 | 306,648 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Total current assets | 4,975,843 | 4,906,757 | 4,584,874 | 4,321,041 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Property and equipment, net | 410,326 | 489,088 | 578,075 | 618,149 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Operating lease right-of-use assets | 516,862 | 530,441 | 506,216 | 509,344 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Intangible assets, net | 146,303 | 86,363 | 66,613 | 86,423 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Goodwill | 1,691,827 | 1,689,785 | 1,720,769 | 1,779,086 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Other assets | 226,597 | 233,914 | 221,255 | 252,330 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Total assets | 7,967,758 | 7,936,348 | 7,677,802 | 7,566,373 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Accounts payable | 278,961 | 173,197 | 219,793 | 76,030 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Operating lease liabilities | 49,321 | 24,885 | 48,479 | 54,428 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Accrued expenses and other current liabilities | 805,836 | 1,009,254 | 971,627 | 1,050,879 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Short-term debt, net | Not supplied: dash in filing | 36,212 | 46,969 | 106,202 | USD thousands | Reported; the FY2024 report labels the line convertible senior notes, net; FY2023 prints a dash and total current liabilities reconcile without a current debt line | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Total current liabilities | 1,134,118 | 1,243,548 | 1,286,868 | 1,287,539 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Long-term debt, net | 3,749,400 | 3,607,717 | 3,489,860 | 3,380,216 | USD thousands | Reported; the FY2024 report labels the line long-term convertible senior notes, net | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Operating lease liabilities, noncurrent | 546,279 | 575,082 | 557,823 | 587,118 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Other liabilities | 123,849 | 59,240 | 61,756 | 81,257 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Total liabilities | 5,553,646 | 5,485,587 | 5,396,307 | 5,336,130 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Class A non-voting common stock | 14 | 14 | 15 | 15 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Class C voting common stock | 2 | 2 | 2 | 2 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Treasury stock, at cost | -479,903 | -460,620 | -435,722 | -416,774 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Additional paid-in capital | 14,613,404 | 15,644,132 | 16,637,324 | 17,390,584 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Accumulated deficit | -11,726,536 | -12,735,461 | -13,946,816 | -14,744,193 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Accumulated other comprehensive income (loss) | 7,131 | 2,694 | 26,692 | 609 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Total stockholders’ equity | 2,414,112 | 2,450,761 | 2,281,495 | 2,230,243 | USD thousands | Reported | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Total Assets | 7,967,758 | 7,936,348 | 7,677,802 | 7,566,373 | USD thousands | Reported total assets | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Total Liabilities | 5,553,646 | 5,485,587 | 5,396,307 | 5,336,130 | USD thousands | Reported total liabilities | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Total Equity | 2,414,112 | 2,450,761 | 2,281,495 | 2,230,243 | USD thousands | Reported total stockholders’ equity; no temporary equity is printed | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Total Debt | 3,749,400 | 3,643,929 | 3,536,829 | 3,486,418 | USD thousands | Calculated: short-term plus long-term debt, net, at balance-sheet carrying value (net of issuance costs, with premium); principal is 3,772,587, 3,685,994, 3,467,522 and 3,420,509 for the four dates; FY2023 has no current debt line; calculation C04 | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |
| Cash & Equivalents | 1,780,400 | 1,046,534 | 1,030,435 | 1,019,215 | USD thousands | Reported cash and cash equivalents; marketable securities and restricted cash are not included | 10-K_2024-12-31_snap.htm.jsonl, pages 122–123; 10-K_2025-12-31_snap.htm.jsonl, pages 155–156; 10-Q_2026-09-30_snap.htm.jsonl, pages 10–11 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revolving Credit Facility | Senior unsecured revolving credit facility | 0 | Not applicable | 0 | 1,050,000 | Unsecured | Senior unsecured; rank against the notes not stated | USD | 0 | Not applicable | SOFR plus 0.85% (USD loans); commitment fee 0.10% on the undrawn balance | Floating | Term SOFR | 85 | Not applicable | 250,000 on 2027-05-06; 800,000 on 2030-02-12 | Not applicable | 10-Q_2026-09-30_snap.htm.jsonl, pages 25–26; 10-Q_2026-09-30_snap.htm.jsonl, pages 49–50 |
| 2027 convertible notes | Convertible senior notes | 106,202 | 106,318 | Not applicable | Not applicable | Unsecured | Unsecured and unsubordinated; ranks equally with the other notes | USD | 106,202 | Not applicable | No regular interest (stated rate nil; effective 0.19%) | Fixed | Not applicable | Not applicable | Not applicable | 2027-05-01 | 0 | 10-Q_2026-09-30_snap.htm.jsonl, pages 21–24 |
| 2028 convertible notes | Convertible senior notes | 512,808 | 514,191 | Not applicable | Not applicable | Unsecured | Unsecured and unsubordinated; ranks equally with the other notes | USD | 512,808 | Not applicable | 0.125% (effective 0.32%) | Fixed | Not applicable | Not applicable | Not applicable | 2028-03-01 | 0 | 10-Q_2026-09-30_snap.htm.jsonl, pages 21–24 |
| 2030 convertible notes | Convertible senior notes | 731,365 | 750,000 | Not applicable | Not applicable | Unsecured | Unsecured and unsubordinated; ranks equally with the other notes | USD | 731,365 | Not applicable | 0.50% (effective 1.21%) | Fixed | Not applicable | Not applicable | Not applicable | 2030-05-01 | 0 | 10-Q_2026-09-30_snap.htm.jsonl, pages 20–24 |
| 2033 senior notes | Senior notes | 1,585,665 | 1,500,000 | Not applicable | Not applicable | Unsecured | Unsecured and unsubordinated; ranks equally with the other notes | USD | 1,585,665 | Not applicable | 6.875% (effective 5.81%) | Fixed | Not applicable | Not applicable | Not applicable | 2033-03-01 | Not supplied: no amortisation schedule is stated | 10-Q_2026-09-30_snap.htm.jsonl, pages 19–24 |
| 2034 senior notes | Senior notes | 550,378 | 550,000 | Not applicable | Not applicable | Unsecured | Unsecured and unsubordinated; ranks equally with the other notes | USD | 550,378 | Not applicable | 6.875% (effective 6.86%) | Fixed | Not applicable | Not applicable | Not applicable | 2034-03-15 | Not supplied: no amortisation schedule is stated | 10-Q_2026-09-30_snap.htm.jsonl, pages 19–24 |

All amounts are USD thousands as printed; the reporting currency amounts add to Total Debt of 3,486,418 at 2026-09-30 (calculation C04). The revolving facility shows no amount outstanding, as the issuer states, and the standby letters of credit of USD 111.4 million are not a drawing.
Basis: 10-Q_2026-09-30_snap.htm.jsonl, page 24; 10-Q_2026-09-30_snap.htm.jsonl, page 26; calculation C04

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM | USD 5,931.447m | USD 4,850.255m | USD 4,214.986m | USD 6,566.716m | Calculated | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 | Twelve months to 2026-09-30; every component reported |
| Net income (loss) | LTM | USD -460.489m | USD -196.413m | USD -505.698m | USD -151.204m | Calculated | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 | Twelve months to 2026-09-30; every component reported |
| EBITDA (Reported) | LTM | USD -368.534m | USD -33.562m | USD -461.632m | USD 59.536m | Calculated | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 | Each component is itself calculated (operating income plus reconciled depreciation) |
| EBITDA (Adjusted) | LTM | USD 689.479m | USD 865.595m | USD 331.733m | USD 1,223.341m | Calculated | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 | Issuer-adjusted; every component reported |
| Net Cash from Operating Activities | LTM | USD 656.170m | USD 713.477m | USD 386.592m | USD 983.055m | Calculated | 10-K_2025-12-31_snap.htm.jsonl, page 154; 10-Q_2026-09-30_snap.htm.jsonl, page 9 | Every component reported |
| Purchases of property and equipment | LTM | USD -218.981m | USD -142.479m | USD -154.959m | USD -206.501m | Calculated | 10-K_2025-12-31_snap.htm.jsonl, page 154; 10-Q_2026-09-30_snap.htm.jsonl, page 9 | Outflow shown negative |
| Free Cash Flow | LTM | USD 437.189m | USD 570.998m | USD 231.633m | USD 776.554m | Calculated | 10-K_2025-12-31_snap.htm.jsonl, page 143; 10-Q_2026-09-30_snap.htm.jsonl, page 55 | Issuer non-GAAP definition |
| Cash Interest Paid | LTM | USD 65.060m | USD 148.700m | USD 62.700m | USD 151.060m | Estimated | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-09-30_snap.htm.jsonl, page 25 | The two nine-month figures are stated to one decimal in USD millions, so the result is precise to about USD 0.1m |
| Revenue | Q4 2025 (calculated; no fourth quarter is reported) | USD 5,931.447m | Not applicable | USD 4,214.986m | USD 1,716.461m | Calculated | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 | Full year less nine months; the filings report no fourth quarter |
| EBITDA (Adjusted) | Q4 2025 (calculated; no fourth quarter is reported) | USD 689.479m | Not applicable | USD 331.733m | USD 357.746m | Calculated | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 | Full year less nine months |
| Net Cash from Operating Activities | Q4 2025 (calculated; no fourth quarter is reported) | USD 656.170m | Not applicable | USD 386.592m | USD 269.578m | Calculated | 10-K_2025-12-31_snap.htm.jsonl, page 154; 10-Q_2026-09-30_snap.htm.jsonl, page 9 | Full year less nine months |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 3,749.400 | Gross debt from Net debt data | -1,238.380 | EBITDA from the income statement table | FY2023 / 2023-12-31 | USD | US$m | Not calculable: EBITDA (Reported) is negative | Not Calculable | Tier 1 | EBITDA (Reported) is calculated, not issuer-reported; No current debt line is printed |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 3,643.929 | Gross debt from Net debt data | -632.835 | EBITDA from the income statement table | FY2024 / 2024-12-31 | USD | US$m | Not calculable: EBITDA (Reported) is negative | Not Calculable | Tier 1 | EBITDA (Reported) is calculated, not issuer-reported |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 3,536.829 | Gross debt from Net debt data | -368.534 | EBITDA from the income statement table | FY2025 / 2025-12-31 | USD | US$m | Not calculable: EBITDA (Reported) is negative | Not Calculable | Tier 1 | EBITDA (Reported) is calculated, not issuer-reported |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 3,486.418 | Gross debt from Net debt data | 59.536 | EBITDA from the constructed period register | 2026-09-30 | USD | US$m | 58.56 | Calculated | Tier 2b | Last twelve months to 2026-09-30, calculation C05; EBITDA (Reported) is calculated, not issuer-reported |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,969.000 | Net debt from Net debt data | -1,238.380 | EBITDA from the income statement table | FY2023 / 2023-12-31 | USD | US$m | Not calculable: EBITDA (Reported) is negative | Not Calculable | Tier 1 | EBITDA (Reported) is calculated, not issuer-reported; No current debt line is printed |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,597.395 | Net debt from Net debt data | -632.835 | EBITDA from the income statement table | FY2024 / 2024-12-31 | USD | US$m | Not calculable: EBITDA (Reported) is negative | Not Calculable | Tier 1 | EBITDA (Reported) is calculated, not issuer-reported |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,506.394 | Net debt from Net debt data | -368.534 | EBITDA from the income statement table | FY2025 / 2025-12-31 | USD | US$m | Not calculable: EBITDA (Reported) is negative | Not Calculable | Tier 1 | EBITDA (Reported) is calculated, not issuer-reported |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,467.203 | Net debt from Net debt data | 59.536 | EBITDA from the constructed period register | 2026-09-30 | USD | US$m | 41.44 | Calculated | Tier 2b | Last twelve months to 2026-09-30, calculation C05; EBITDA (Reported) is calculated, not issuer-reported |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | -1,238.380 | EBITDA from the income statement table | 10.244 | Cash Interest Paid from the cash flow statement table | FY2023 / 2023-12-31 | USD | US$m | -120.89 | Calculated | Tier 1 | EBITDA (Reported) is calculated, not issuer-reported; Negative EBITDA gives a negative cover |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | -632.835 | EBITDA from the income statement table | 10.284 | Cash Interest Paid from the cash flow statement table | FY2024 / 2024-12-31 | USD | US$m | -61.54 | Calculated | Tier 1 | EBITDA (Reported) is calculated, not issuer-reported; Negative EBITDA gives a negative cover |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | -368.534 | EBITDA from the income statement table | 65.060 | Cash Interest Paid from the cash flow statement table | FY2025 / 2025-12-31 | USD | US$m | -5.66 | Calculated | Tier 1 | EBITDA (Reported) is calculated, not issuer-reported; Negative EBITDA gives a negative cover |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 59.536 | EBITDA from the constructed period register | 151.060 | Cash interest from the constructed period register | 2026-09-30 | USD | US$m | 0.39 | Estimated | Tier 2b | Last twelve months to 2026-09-30, calculation C05; LTM cash interest uses interim amounts stated to one decimal in USD millions; EBITDA (Reported) is calculated, not issuer-reported |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 3,749.400 | Gross debt from Net debt data | 161.577 | EBITDA from the income statement table | FY2023 / 2023-12-31 | USD | US$m | 23.21 | Calculated | Tier 1 | Issuer-adjusted EBITDA excludes stock-based compensation; No current debt line is printed |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 3,643.929 | Gross debt from Net debt data | 508.605 | EBITDA from the income statement table | FY2024 / 2024-12-31 | USD | US$m | 7.16 | Calculated | Tier 1 | Issuer-adjusted EBITDA excludes stock-based compensation |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 3,536.829 | Gross debt from Net debt data | 689.479 | EBITDA from the income statement table | FY2025 / 2025-12-31 | USD | US$m | 5.13 | Calculated | Tier 1 | Issuer-adjusted EBITDA excludes stock-based compensation |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 3,486.418 | Gross debt from Net debt data | 1,223.341 | EBITDA from the constructed period register | 2026-09-30 | USD | US$m | 2.85 | Calculated | Tier 2b | Last twelve months to 2026-09-30, calculation C05; Issuer-adjusted EBITDA excludes stock-based compensation |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,969.000 | Net debt from Net debt data | 161.577 | EBITDA from the income statement table | FY2023 / 2023-12-31 | USD | US$m | 12.19 | Calculated | Tier 1 | Issuer-adjusted EBITDA excludes stock-based compensation; No current debt line is printed |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,597.395 | Net debt from Net debt data | 508.605 | EBITDA from the income statement table | FY2024 / 2024-12-31 | USD | US$m | 5.11 | Calculated | Tier 1 | Issuer-adjusted EBITDA excludes stock-based compensation |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,506.394 | Net debt from Net debt data | 689.479 | EBITDA from the income statement table | FY2025 / 2025-12-31 | USD | US$m | 3.64 | Calculated | Tier 1 | Issuer-adjusted EBITDA excludes stock-based compensation |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,467.203 | Net debt from Net debt data | 1,223.341 | EBITDA from the constructed period register | 2026-09-30 | USD | US$m | 2.02 | Calculated | Tier 2b | Last twelve months to 2026-09-30, calculation C05; Issuer-adjusted EBITDA excludes stock-based compensation |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 161.577 | EBITDA from the income statement table | 10.244 | Cash Interest Paid from the cash flow statement table | FY2023 / 2023-12-31 | USD | US$m | 15.77 | Calculated | Tier 1 | Issuer-adjusted EBITDA excludes stock-based compensation |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 508.605 | EBITDA from the income statement table | 10.284 | Cash Interest Paid from the cash flow statement table | FY2024 / 2024-12-31 | USD | US$m | 49.46 | Calculated | Tier 1 | Issuer-adjusted EBITDA excludes stock-based compensation |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 689.479 | EBITDA from the income statement table | 65.060 | Cash Interest Paid from the cash flow statement table | FY2025 / 2025-12-31 | USD | US$m | 10.60 | Calculated | Tier 1 | Issuer-adjusted EBITDA excludes stock-based compensation |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1,223.341 | EBITDA from the constructed period register | 151.060 | Cash interest from the constructed period register | 2026-09-30 | USD | US$m | 8.10 | Estimated | Tier 2b | Last twelve months to 2026-09-30, calculation C05; LTM cash interest uses interim amounts stated to one decimal in USD millions; Issuer-adjusted EBITDA excludes stock-based compensation |
| Revenue growth | Revenue FY2025 / Revenue FY2024 - 1 | 5,931.447 | Income statement table | 5,361.398 | Income statement table | FY2025 | USD | US$m | 10.63 | Calculated | Tier 1 | Growth in percent |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Revenue x 100 | 689.479 | Statement tables | 5,931.447 | Statement tables | FY2025 | USD | US$m | 11.62 | Calculated | Tier 1 | Ratio of two statement figures |
| Adjusted EBITDA margin, LTM | EBITDA (Adjusted) / Revenue x 100 | 1,223.341 | Statement tables | 6,566.716 | Statement tables | 2026-09-30 | USD | US$m | 18.63 | Calculated | Tier 2b | Twelve months ending 2026-09-30 |
| Free cash flow margin | Free Cash Flow / Revenue x 100 | 437.189 | Statement tables | 5,931.447 | Statement tables | FY2025 | USD | US$m | 7.37 | Calculated | Tier 1 | Ratio of two statement figures |
| Free cash flow margin, LTM | Free Cash Flow / Revenue x 100 | 776.554 | Statement tables | 6,566.716 | Statement tables | 2026-09-30 | USD | US$m | 11.83 | Calculated | Tier 2b | Twelve months ending 2026-09-30 |
| Free cash flow conversion of Adjusted EBITDA, FY2025 | Free Cash Flow / EBITDA (Adjusted) x 100 | 437.189 | Statement tables | 689.479 | Statement tables | FY2025 | USD | US$m | 63.41 | Calculated | Tier 1 | Ratio of two statement figures |
| Free cash flow conversion of Adjusted EBITDA, LTM | Free Cash Flow / EBITDA (Adjusted) x 100 | 776.554 | Statement tables | 1,223.341 | Statement tables | 2026-09-30 | USD | US$m | 63.48 | Calculated | Tier 2b | Twelve months ending 2026-09-30 |
| Capex intensity, FY2025 | Purchases of property and equipment / Revenue x 100 | 218.981 | Statement tables | 5,931.447 | Statement tables | FY2025 | USD | US$m | 3.69 | Calculated | Tier 1 | Ratio of two statement figures |
| Capex intensity, LTM | Purchases of property and equipment / Revenue x 100 | 206.501 | Statement tables | 6,566.716 | Statement tables | 2026-09-30 | USD | US$m | 3.14 | Calculated | Tier 2b | Twelve months ending 2026-09-30 |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2025 | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Operating measure (period average, million users) | Global daily active users | 477 | 474 | 483 | 493 | 495 | Up | Third-quarter 2025 is the 2026 figure less the stated increase of 18 million; the issuer will replace this metric from Q1 2027, and a 2025 refinement of the counting process limits comparison with earlier periods |
| Operating measure (period average, million users) | Global monthly active users | 943 | Not supplied: not stated in the report | Not supplied: not stated in the report | Not supplied: not stated in the report | 977 | Up | Stated for the third quarter of 2026 only; third-quarter 2025 is that figure less the stated increase of 34 million |
| Operating measure (rate, USD per user per quarter) | Global average revenue per user | 3.16 | 3.62 | 3.17 | 3.25 | 3.48 | Up year on year | Quarterly revenue divided by average daily active users; the issuer plans to redefine it on monthly users from Q1 2027 |
| Revenue by source (period flow, USD thousands) | Advertising revenue | 1,317,119 | 1,484,541 | 1,243,462 | 1,282,522 | 1,372,788 | Up | Fourth-quarter 2025 is calculated as FY2025 advertising revenue 5,186,077 less nine months 2025 3,701,536 |
| Revenue by source (period flow, USD thousands) | Other revenue (subscriptions and partnerships) | 189,720 | 231,920 | 285,329 | 316,471 | 349,683 | Up | Fourth-quarter 2025 is calculated as FY2025 other revenue 745,370 less nine months 2025 513,450; other revenue is the fastest-growing source |

The user metrics and the revenue by source come from the reports cited in the line below.
Basis: 10-Q_2026-09-30_snap.htm.jsonl, page 41; 10-Q_2026-09-30_snap.htm.jsonl, page 15; 10-Q_2026-06-30_snap.htm.jsonl, pages 35–36; 10-Q_2026-06-30_snap.htm.jsonl, page 13; 10-Q_2026-03-31_snap.htm.jsonl, pages 34–35; 10-Q_2026-03-31_snap.htm.jsonl, page 13; 10-K_2025-12-31_snap.htm.jsonl, pages 131–132; 10-K_2025-12-31_snap.htm.jsonl, page 171

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA: operating income (loss) plus depreciation and amortization, before any add-back | Issuer Adjusted EBITDA also excludes stock-based compensation, related payroll tax and restructuring charges | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 | FY2023 to FY2025; 9M and Q3 2025 and 2026; LTM | FY2025: Adjusted EBITDA 689,479 against Reported -368,534, a difference of 1,058,013 (stock-based compensation 1,016,825 plus payroll tax 41,188); LTM 1,223,341 against 59,536 | Fundamental credit; Liquidity; Downside; Forward credit model | Both bases are carried and labelled; the leverage and cover charts use the reported names, the adjusted ratios stay in the register |
| Depreciation and compensation in the reconciliation | Cash flow statement amounts | The reconciliation excludes depreciation and stock-based compensation that sit inside restructuring charges | 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-K_2025-12-31_snap.htm.jsonl, page 154; 10-Q_2026-09-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, page 35; 10-Q_2026-09-30_snap.htm.jsonl, page 56 | FY2023, FY2024, nine months 2026 | 9M 2026: stock-based compensation 768,018 against 741,947 (difference 26,071, the restructuring table's amount); depreciation 136,266 against 134,892 (difference 1,374); FY2024: 1,041,023 against 1,031,621 and 158,074 against 154,459 | Financial foundation; Earnings quality | The reconciliation's amounts are used so that the bridge to Adjusted EBITDA closes without a plug; the cash flow amounts stay in the cash flow table |
| Net debt | Total Debt less Cash & Equivalents (cash and cash equivalents only) | The issuer does not define net debt; marketable securities of 1,751,432 are held as liquid investments | 10-Q_2026-09-30_snap.htm.jsonl, page 10; 10-Q_2026-09-30_snap.htm.jsonl, page 34 | All balance-sheet dates | 2026-09-30: net debt 2,467.203 US$m on cash and cash equivalents; 715.771 US$m if marketable securities are netted (calculation C07) | Liquidity; Fundamental credit; Refinancing & LME | Cash and cash equivalents only is used for Net debt data and the ratios; the securities are shown on the balance sheet and in liquidity |
| Total Debt: carrying against principal | Balance-sheet carrying value, net of issuance costs and including premium | The notes table states principal separately; the maturity ladder uses contractual principal | 10-Q_2026-09-30_snap.htm.jsonl, page 10; 10-Q_2026-09-30_snap.htm.jsonl, page 24 | 2026-09-30 and earlier dates | Carrying 3,486,418 against principal 3,420,509: difference 65,909, being unamortized issuance costs of -34,990 and net premium of 100,899 (calculation C08) | Refinancing & LME; Liquidity | Carrying value is used for leverage; principal is used for the maturity ladder and the debt stack; the difference is one reconciling row |
| Cash interest | Cash interest paid | Interest expense in the income statement | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-09-30_snap.htm.jsonl, page 25; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 | FY2025; 9M 2026 | FY2025: cash paid 65,060 against expense 121,998; 9M 2026: cash paid about 148,700 against expense 110,987; the semi-annual coupon dates make a quarter's cash paid a poor run rate | Fundamental credit; Downside | Cover uses cash interest paid as the method requires; the timing difference is stated in the cash flow table and the analysis |
| Cash | Balance-sheet cash and cash equivalents | The cash flow statement's cash includes restricted cash | 10-Q_2026-09-30_snap.htm.jsonl, page 9; 10-Q_2026-09-30_snap.htm.jsonl, page 34 | All periods | 2026-09-30: cash and cash equivalents 1,019,215 against cash, cash equivalents and restricted cash 1,020,758 (restricted cash 1,543) | Financial foundation | Balance-sheet cash feeds Net debt data and liquidity; the cash flow roll-forward keeps the issuer's wider total |
| Lease liabilities | Lease liabilities the issuer presents on their own balance-sheet lines are not added to Total Debt | Operating lease liabilities are presented on separate lines, 641,546 in total at 2026-09-30 | 10-Q_2026-09-30_snap.htm.jsonl, page 10; 10-Q_2026-09-30_snap.htm.jsonl, pages 31–32 | All dates | Operating lease liabilities of 54,428 current and 587,118 noncurrent are outside Total Debt; leases not yet commenced carry USD 391.5 million | Fundamental credit; Liquidity | Kept outside Total Debt; stated here so a lease-adjusted reading can be built |
| Daily active users | Metric as defined in each period | The issuer refined its counting in the first quarter of 2025 and will replace the metric with monthly users from Q1 2027 | 10-K_2025-12-31_snap.htm.jsonl, page 131; 10-Q_2026-09-30_snap.htm.jsonl, page 6 | Q1 2025 onward; Q1 2027 onward | The issuer states the effect of the 2027 definition change as less than 1% on historical monthly users | Business & governance | The dashboard keeps one definition per row and does not join pre- and post-change series |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Statement tables and period coverage | Ready with Limitations | Fourth quarter of 2025 is constructed; some lines print dashes that are kept as gaps; interim cash taxes are not stated | State the derivation with the figure; no further source is needed for the totals |
| Leverage and interest-cover ratios | Ready with Limitations | Reported EBITDA is calculated and negative through FY2025; interim cash interest is rounded to one decimal in USD millions | Carry both bases with their labels; obtain the interim cash flow supplemental disclosure if a precise cover is needed |
| Debt, liquidity and maturity data | Ready with Limitations | FY2023 facility availability is not stated; whether letters of credit use facility capacity is not stated; executed documents are not supplied | Supply the revolving credit agreement and the indentures |
| Debt stack and ranking | Ready with Limitations | Ranking is stated only as unsecured and unsubordinated; the revolving facility's rank against the notes and any guarantors are not stated | Supply the indentures and credit agreement |
| Forward base for later modelling | Ready with Limitations | Nine-month and last-twelve-month bases are constructed; the issuer states no guidance in the sources read | Treat forecast drivers as labelled analyst assumptions anchored to these tables |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 3,749.400 | 1,780.400 | 1,969.000 | US$m | Gross debt is balance-sheet carrying value (short-term plus long-term debt, net of issuance costs, including premium); cash is cash and cash equivalents only; marketable securities and restricted cash are not netted; principal 3,772.587 US$m; no current debt line is printed |
| FY2024 / 2024-12-31 | 3,643.929 | 1,046.534 | 2,597.395 | US$m | Gross debt is balance-sheet carrying value (short-term plus long-term debt, net of issuance costs, including premium); cash is cash and cash equivalents only; marketable securities and restricted cash are not netted; principal 3,685.994 US$m |
| FY2025 / 2025-12-31 | 3,536.829 | 1,030.435 | 2,506.394 | US$m | Gross debt is balance-sheet carrying value (short-term plus long-term debt, net of issuance costs, including premium); cash is cash and cash equivalents only; marketable securities and restricted cash are not netted; principal 3,467.522 US$m |
| 2026-09-30 | 3,486.418 | 1,019.215 | 2,467.203 | US$m | Gross debt is balance-sheet carrying value (short-term plus long-term debt, net of issuance costs, including premium); cash is cash and cash equivalents only; marketable securities and restricted cash are not netted; principal 3,420.509 US$m; reported, no pro forma adjustment |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 3,420.509 | 65.909 | 3,486.418 | US$m | Reconciling items are unamortized issuance costs of -34.990 and net premium of 100.899, mainly the 106.943 premium on the 2033 notes from debt-modification accounting, summed in calculation C08; the revolving facility is undrawn and adds nothing |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | Sources read: the five supplied filings, latest signed 2026-11-04; no issue, repayment, acquisition, disposal or dividend after 2026-09-30 that changes net debt is stated, and the 2026-11-04 share-reserve increase does not change it |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | Not supplied: EBITDA (Reported) is negative | Not supplied: EBITDA (Reported) is negative | x | Reported basis; EBITDA (Reported) is calculated, calculation C02 |
| FY2024 / 2024-12-31 | Not supplied: EBITDA (Reported) is negative | Not supplied: EBITDA (Reported) is negative | x | Reported basis; EBITDA (Reported) is calculated, calculation C02 |
| FY2025 / 2025-12-31 | Not supplied: EBITDA (Reported) is negative | Not supplied: EBITDA (Reported) is negative | x | Reported basis; EBITDA (Reported) is calculated, calculation C02 |
| 2026-09-30 | 58.56 | 41.44 | x | Last twelve months to 2026-09-30 on calculated EBITDA (Reported) of 59.536 US$m, which is barely positive, so the multiple is not informative; calculation C05; the adjusted ratios are in the register |

Reported EBITDA is calculated and negative through FY2025, so those ratios are not supplied, and the last-twelve-months multiple rests on a barely positive denominator.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2023 / 2023-12-31 | -120.89 | x | Reported basis; negative EBITDA gives a negative cover; cash interest is cash paid |
| FY2024 / 2024-12-31 | -61.54 | x | Reported basis; negative EBITDA gives a negative cover; cash interest is cash paid |
| FY2025 / 2025-12-31 | -5.66 | x | Reported basis; negative EBITDA gives a negative cover; cash interest is cash paid |
| 2026-09-30 | 0.39 | x | Last twelve months to 2026-09-30; cash interest of 151.060 US$m is estimated from interim amounts stated to one decimal in USD millions; calculation C05 |

Interim cash interest is stated to one decimal in USD millions, so the last-twelve-months cover is an estimate.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 1,780.400 | Not supplied: the facility's availability at 2023-12-31 is not stated in the sources read | US$m | Cash is cash and cash equivalents; marketable securities of 1,763.680 US$m are excluded; standby letters of credit are not deducted from the undrawn facility because the filings do not say they use its capacity |
| FY2024 / 2024-12-31 | 1,046.534 | 1,050.000 | US$m | Cash is cash and cash equivalents; marketable securities of 2,329.745 US$m are excluded; standby letters of credit are not deducted from the undrawn facility because the filings do not say they use its capacity |
| FY2025 / 2025-12-31 | 1,030.435 | 1,050.000 | US$m | Cash is cash and cash equivalents; marketable securities of 1,910.137 US$m are excluded; standby letters of credit are not deducted from the undrawn facility because the filings do not say they use its capacity |
| 2026-09-30 | 1,019.215 | 1,050.000 | US$m | Cash is cash and cash equivalents; marketable securities of 1,751.432 US$m are excluded; standby letters of credit are not deducted from the undrawn facility because the filings do not say they use its capacity |

Cash excludes marketable securities, and standby letters of credit are not deducted from the undrawn facility.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2027 | 106.318 | US$m | 2027 convertible notes, principal due 2027-05-01; carrying value 106.202 US$m |
| FY2028 | 514.191 | US$m | 2028 convertible notes, principal due 2028-03-01 |
| FY2030 | 750.000 | US$m | 2030 convertible notes, principal due 2030-05-01 |
| FY2033 | 1,500.000 | US$m | 2033 senior notes, principal due 2033-03-01 |
| FY2034 | 550.000 | US$m | 2034 senior notes, principal due 2034-03-15 |

Principal at the 2026-09-30 balance sheet date; the revolving facility is undrawn and has no row, and a year with no maturing note has no row.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 4,606.115 | 161.577 | US$m | Revenue as reported; Adjusted EBITDA is the issuer-adjusted measure, which excludes stock-based compensation, related payroll tax and restructuring charges; twelve-month fiscal year |
| FY2024 / 2024-12-31 | 5,361.398 | 508.605 | US$m | Revenue as reported; Adjusted EBITDA is the issuer-adjusted measure, which excludes stock-based compensation, related payroll tax and restructuring charges; twelve-month fiscal year |
| FY2025 / 2025-12-31 | 5,931.447 | 689.479 | US$m | Revenue as reported; Adjusted EBITDA is the issuer-adjusted measure, which excludes stock-based compensation, related payroll tax and restructuring charges; twelve-month fiscal year |
| 2026-09-30 | 6,566.716 | 1,223.341 | US$m | Twelve months to 2026-09-30, constructed as FY2025 plus nine months 2026 less nine months 2025 (calculation C05); same issuer-adjusted identity and the same twelve-month duration |

Adjusted EBITDA is the issuer's measure excluding about USD 1.0 billion a year of stock-based compensation, and the last row is a constructed twelve-month period.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| 2027 convertible notes | 1 | No | 106.318 | 57.45 | US$m | Principal; unsecured and unsubordinated obligation of Snap Inc., no guarantor stated; ranks equally with the other four series, so cumulative debt through this rank is all principal of 3,420.509 US$m over last-twelve-months EBITDA (Reported) of 59.536 US$m (2.80x on adjusted EBITDA of 1,223.341 US$m); the undrawn revolving facility is left out, see Gaps |
| 2028 convertible notes | 1 | No | 514.191 | 57.45 | US$m | Principal; unsecured and unsubordinated obligation of Snap Inc., no guarantor stated; same equal rank and the same cumulative figure as the first row; the undrawn revolving facility is left out |
| 2030 convertible notes | 1 | No | 750.000 | 57.45 | US$m | Principal; unsecured and unsubordinated obligation of Snap Inc., no guarantor stated; same equal rank and the same cumulative figure as the first row; the undrawn revolving facility is left out |
| 2033 senior notes | 1 | No | 1,500.000 | 57.45 | US$m | Principal; unsecured and unsubordinated obligation of Snap Inc., no guarantor stated; same equal rank and the same cumulative figure as the first row; the undrawn revolving facility is left out |
| 2034 senior notes | 1 | No | 550.000 | 57.45 | US$m | Principal; unsecured and unsubordinated obligation of Snap Inc., no guarantor stated; same equal rank and the same cumulative figure as the first row; the undrawn revolving facility is left out |

All five notes rank equally, the revolving facility is left out because its rank against the notes is not stated, and cumulative leverage is on principal over last-twelve-months reported EBITDA.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), FY2025 | -368.534 | US$m | Calculated: operating loss -532.167 plus depreciation and amortization 163.633 (calculation C02) |
| Stock-based compensation expense | 1,016.825 | US$m | Issuer add-back in its Adjusted EBITDA reconciliation |
| Payroll and other tax expense related to stock-based compensation | 41.188 | US$m | Issuer add-back in its Adjusted EBITDA reconciliation |
| EBITDA (Adjusted), FY2025 | 689.479 | US$m | Issuer-adjusted Adjusted EBITDA; the issuer states no restructuring charge for FY2025, so no restructuring step is shown |

The bridge is for FY2025, where the issuer states no restructuring charge; the other periods' add-backs are in the income statement table.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM 2026-09-30 | Unit |
| --- | --- | --- | --- | --- | --- |
| Revenue | 4,606.115 | 5,361.398 | 5,931.447 | 6,566.716 | US$m |
| EBITDA (Reported), calculated | -1,238.380 | -632.835 | -368.534 | 59.536 | US$m |
| EBITDA (Adjusted), issuer | 161.577 | 508.605 | 689.479 | 1,223.341 | US$m |
| Net income (loss) | -1,322.485 | -697.856 | -460.489 | -151.204 | US$m |
| Net cash from operating activities | 246.521 | 413.480 | 656.170 | 983.055 | US$m |
| Purchases of property and equipment | -211.727 | -194.826 | -218.981 | -206.501 | US$m |
| Free Cash Flow | 34.794 | 218.654 | 437.189 | 776.554 | US$m |
| Cash interest paid | 10.244 | 10.284 | 65.060 | 151.060 | US$m |
| Total debt (carrying value) | 3,749.400 | 3,643.929 | 3,536.829 | 3,486.418 | US$m |
| Cash and cash equivalents | 1,780.400 | 1,046.534 | 1,030.435 | 1,019.215 | US$m |
| Net debt | 1,969.000 | 2,597.395 | 2,506.394 | 2,467.203 | US$m |
| Total debt / EBITDA (Reported) | Not calculable: negative EBITDA | Not calculable: negative EBITDA | Not calculable: negative EBITDA | 58.56 | x |
| Net debt / EBITDA (Reported) | Not calculable: negative EBITDA | Not calculable: negative EBITDA | Not calculable: negative EBITDA | 41.44 | x |
| EBITDA (Reported) / cash interest | -120.89 | -61.54 | -5.66 | 0.39 | x |
| Total debt / EBITDA (Adjusted) | 23.21 | 7.16 | 5.13 | 2.85 | x |
| Net debt / EBITDA (Adjusted) | 12.19 | 5.11 | 3.64 | 2.02 | x |
| EBITDA (Adjusted) / cash interest | 15.77 | 49.46 | 10.60 | 8.10 | x |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 26 |
| Calculated | 15 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 1 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 4 |
| Fields present | 24 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 7 |

## Calculations

All amounts are USD thousands as printed in the statements unless a row says US$m or USD millions; each row shows its inputs.

| ID | Calculation | Method | Inputs | Result | Source |
| --- | --- | --- | --- | --- | --- |
| C01 | Gross Profit | Revenue less cost of revenue by column | FY2023 4,606,115 - 2,114,117; FY2024 5,361,398 - 2,474,237; FY2025 5,931,447 - 2,669,575; Q1 2026 1,528,791 - 665,241; Q2 2026 1,598,993 - 667,885; Q3 2026 1,722,471 - 649,413; 9M 2026 4,850,255 - 1,982,539; Q3 2025 1,506,839 - 674,220; 9M 2025 4,214,986 - 1,967,132 | FY2023 2,491,998; FY2024 2,887,161; FY2025 3,261,872; Q1 2026 863,550; Q2 2026 931,108; Q3 2026 1,073,058; 9M 2026 2,867,716; Q3 2025 832,619; 9M 2025 2,247,854 | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-Q_2026-03-31_snap.htm.jsonl, page 8; 10-Q_2026-06-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, pages 9–10 |
| C02 | EBITDA (Reported) | Operating income (loss) plus depreciation and amortization as reconciled by the issuer | FY2023 -1,398,379 + 159,999; FY2024 -787,294 + 154,459; FY2025 -532,167 + 163,633; Q1 2026 -74,449 + 44,696; Q2 2026 -170,721 + 45,599; Q3 2026 76,716 + 44,597; 9M 2026 -168,454 + 134,892; Q3 2025 -128,362 + 42,514; 9M 2025 -581,884 + 120,252 | FY2023 -1,238,380; FY2024 -632,835; FY2025 -368,534; Q1 2026 -29,753; Q2 2026 -125,122; Q3 2026 121,313; 9M 2026 -33,562; Q3 2025 -85,848; 9M 2025 -461,632 | 10-K_2025-12-31_snap.htm.jsonl, page 155; 10-K_2025-12-31_snap.htm.jsonl, page 144; 10-Q_2026-03-31_snap.htm.jsonl, pages 47–48; 10-Q_2026-06-30_snap.htm.jsonl, page 50; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 |
| C03 | Free Cash Flow | Net cash from operating activities plus purchases of property and equipment (an outflow, negative) | FY2023 246,521 + (-211,727); FY2024 413,480 + (-194,826); FY2025 656,170 + (-218,981); Q1 2026 326,779 + (-40,772); Q2 2026 176,214 + (-55,676); Q3 2026 210,484 + (-46,031); 9M 2026 713,477 + (-142,479); Q3 2025 146,488 + (-53,044); 9M 2025 386,592 + (-154,959) | FY2023 34,794; FY2024 218,654; FY2025 437,189; Q1 2026 286,007; Q2 2026 120,538; Q3 2026 164,453; 9M 2026 570,998; Q3 2025 93,444; 9M 2025 231,633 | 10-K_2025-12-31_snap.htm.jsonl, page 143; 10-Q_2026-03-31_snap.htm.jsonl, page 47; 10-Q_2026-06-30_snap.htm.jsonl, page 50; 10-Q_2026-09-30_snap.htm.jsonl, page 55 |
| C04 | Total Debt and net debt at balance-sheet dates (US$m) | Short-term plus long-term debt, net, less cash and cash equivalents | FY2023 / 2023-12-31: (no current debt line + 3,749.400) - 1,780.400; FY2024 / 2024-12-31: (36.212 + 3,607.717) - 1,046.534; FY2025 / 2025-12-31: (46.969 + 3,489.860) - 1,030.435; 2026-09-30: (106.202 + 3,380.216) - 1,019.215 | FY2023 / 2023-12-31: debt 3,749.400, net debt 1,969.000; FY2024 / 2024-12-31: debt 3,643.929, net debt 2,597.395; FY2025 / 2025-12-31: debt 3,536.829, net debt 2,506.394; 2026-09-30: debt 3,486.418, net debt 2,467.203 | 10-K_2024-12-31_snap.htm.jsonl, page 123; 10-K_2025-12-31_snap.htm.jsonl, page 156; 10-Q_2026-09-30_snap.htm.jsonl, page 10 |
| C05 | Last twelve months to 2026-09-30 (US$m) | FY2025 plus nine months 2026 less nine months 2025 | Revenue 5,931.447 + 4,850.255 - 4,214.986; EBITDA (Reported) -368.534 + (-33.562) - (-461.632); EBITDA (Adjusted) 689.479 + 865.595 - 331.733; operating cash flow 656.170 + 713.477 - 386.592; capex -218.981 + (-142.479) - (-154.959); cash interest 65.060 + 148.700 - 62.700; net income (loss) -460.489 + (-196.413) - (-505.698) | Net income (loss) -151.204; Revenue 6,566.716; EBITDA (Reported) 59.536; EBITDA (Adjusted) 1,223.341; operating cash flow 983.055; capex -206.501; Free Cash Flow 776.554; cash interest 151.060 | 10-K_2025-12-31_snap.htm.jsonl, pages 154–155; 10-Q_2026-09-30_snap.htm.jsonl, pages 8–10; 10-Q_2026-09-30_snap.htm.jsonl, page 25; 10-Q_2026-09-30_snap.htm.jsonl, pages 55–56 |
| C06 | Share repurchases against free cash flow, nine months 2026 (USD thousands) | Repurchases of Class A stock less nine-month Free Cash Flow | 600,964 - 570,998 | 29,966 excess of repurchases | 10-Q_2026-09-30_snap.htm.jsonl, pages 8–9; 10-Q_2026-09-30_snap.htm.jsonl, page 55 |
| C07 | Net debt if marketable securities are netted, 2026-09-30 (US$m) | Total Debt less cash and cash equivalents less marketable securities | 3,486.418 - 1,019.215 - 1,751.432 | 715.771 | 10-Q_2026-09-30_snap.htm.jsonl, page 10 |
| C08 | Carrying value less principal, 2026-09-30 (US$m) | Total Debt less contractual principal; equals issuance costs plus net premium | 3,486.418 - 3,420.509; -34.990 + 100.899 | 65.909; ladder 106.318 + 514.191 + 750.000 + 1,500.000 + 550.000 = 3,420.509 | 10-Q_2026-09-30_snap.htm.jsonl, page 24 |
| C09 | Interest obligations stated at 2026-09-30 (USD millions as stated) | Short-term plus long-term future interest payment obligations | 145.3 + 824.5 | 969.8 | 10-Q_2026-09-30_snap.htm.jsonl, page 50 |
| C10 | Reconciliation differences, nine months 2026 (USD thousands) | Cash flow statement amount less reconciliation amount | Stock-based compensation 768,018 - 741,947; depreciation and amortization 136,266 - 134,892 | 26,071 (equals the restructuring table's stock-based compensation); 1,374 | 10-Q_2026-09-30_snap.htm.jsonl, page 8; 10-Q_2026-09-30_snap.htm.jsonl, page 35; 10-Q_2026-09-30_snap.htm.jsonl, page 56 |
| C11 | Facility availability if standby letters of credit used its capacity (USD millions) | Facility commitment less letters of credit | 1,050.0 - 111.4 | 938.6 | 10-Q_2026-09-30_snap.htm.jsonl, page 26; 10-Q_2026-09-30_snap.htm.jsonl, page 50 |

## Gaps

- The issuer reports no unadjusted EBITDA, so EBITDA (Reported) is calculated as operating income (loss) plus depreciation and amortization as the issuer reconciles it; this restricts every leverage and cover ratio on the reported basis, and each stays labelled as calculated. Severity Medium. The action that would close it is to confirm the definition with the issuer or to accept the calculated figure.
- The interim cash flow statements carry no supplemental disclosures: cash paid for interest is available only from the debt note in USD millions to one decimal, so each interim figure is precise to about USD 0.05 million and last-twelve-months cover is an estimate, and cash paid for income taxes is stated only in the annual statements (USD 26.716 million for FY2025), so the interim cash tax cells are not supplied. Severity Medium. The action is to obtain the interim supplemental cash flow disclosures.
- The fourth quarter of 2025 is not reported; the constructed revenue of USD 1,716.461 million, adjusted EBITDA of USD 357.746 million and operating cash flow of USD 269.578 million are calculated from the annual report and the nine-month 2025 comparatives. Severity Low. The action is to supply the fourth-quarter release if a reported figure is wanted.
- The revolving facility's availability is not fully established: its availability at 31 December 2023 is not stated in the sources read, so undrawn committed facilities for FY2023 is not supplied, and the filings do not say whether the standby letters of credit (USD 111.4 million at 30 September 2026) use the facility's capacity, so undrawn committed facilities is shown without deducting them; deducting them would give USD 938.6 million. Severity Medium. The action is to supply the credit agreement and the earlier annual report.
- The debt terms the filings summarise leave three items unstated: the guarantor or obligor scope of the notes, the rank of the revolving facility against the notes (the facility is left out of the debt stack for that reason) and any scheduled amortisation of the 2033 and 2034 senior notes, which is therefore not supplied; the convertible notes state no sinking fund. Severity Medium. The action is to supply the indentures and the credit agreement.
- The filings print dashes for nil amounts on 13 cash flow lines, on restructuring charges in five income statement columns and on current debt at FY2023; these are kept as gaps and not read as zero, and 6 cash flow lines are not printed in some periods. The totals tie without them. Severity Low. No action is needed for the totals.
- The issuer reports one operating segment, so no segment schedule or segment revenue sum is stated, and maintenance and growth capital expenditure are not disclosed, so only total purchases of property and equipment is carried; revenue by source is in the KPI dashboard and revenue by customer billing region is printed in the revenue note but not tabulated here. Severity Low. The action is to tabulate the regional split and obtain a capex split if they are needed.

## Next module

The orchestrator selects the next module.
