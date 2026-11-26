# CP-1 for Block, Inc. (xyz), as of 2026-11-05

## Request

Financial foundation for Block, Inc. (issuer id xyz), as of 2026-11-05, on the credit snapshot pathway. Scope: the audited fiscal 2025 and 2024 statements and the unaudited nine-month 2026 and 2025 statements, normalised on one basis, with debt, cash, liquidity and leverage measures for the latest balance-sheet date.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_xyz-20251231.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2025 | 2026-02-26 | 6d2723637c4e4692665dfc17c25cdb747bc058fa0efdacc637270724a986bc79 | FY2025 and FY2024 statements, debt note, warehouse note, segment note, non-GAAP reconciliations, commitments and subsequent event |
| 10-Q_2026-03-31_xyz-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | fb16696ee2c760f5f516dd4d7d776ad2e1413e975d581b22e43bf743c804dffb | Read for the January 14, 2026 revolver restatement; its statements are not tabulated because the nine-month report supersedes them |
| 10-Q_2026-06-30_xyz-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-05 | 298a453eb61f62c2eadccf751942418cba8c13261b222b26c193276f0204df4e | Read for the covenant description; its statements are not tabulated because the nine-month report supersedes them |
| 10-Q_2026-09-30_xyz-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-03 | c3685fce2b8084b3b1277e2ff24d3b8912d57dba3d48bc4c00ef1cdf864ed3ba | Nine-month 2026 and 2025 statements, balance sheet at September 30, 2026, debt, warehouse and liquidity disclosures, non-GAAP reconciliations |
| EX-99.1_2026-05-07_d132441dex991.htm.jsonl | Exhibit 99.1, Q1 2026 shareholder letter | not stated | d34a2a9e1d7a5617f1c2e6fc60dfac8b09244c4670a9cb13c493e5c88cddf1a8 | Read for context; no figure of this module comes from it |
| EX-99.1_2026-08-05_d91486dex991.htm.jsonl | Exhibit 99.1, Q2 2026 shareholder letter | not stated | 804a5c312efc62e6ddd1ec8bbc4d12bb902bba131422b7373caf3f4ebbc3e21e | Read for context; no figure of this module comes from it |
| EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl | Exhibit 99.1, Q3 2026 shareholder letter | not stated | a2c931043c84d33fdc40710a24c2e84aa25d66394cc76e294f6f9e8221b76b85 | Cross-check of the liquidity statement against the quarterly report |

- Source readiness (CP-0), sha256 e2fef1f2e8cd622f6df897a62ac10760012c962b492b10cb3d5cd60b05a9546c: source gate, perimeter and gap list; the covenant level and the executed financing documents are absent.

## Findings

### Bottom line

Block's debt is serviceable, but leverage depends on which earnings measure creditors accept: 4.64x on reported EBITDA against 1.68x on the issuer's adjusted measure for the twelve months to September 30, 2026.
Basis: calculation LEV-2026-09-30; calculation LTM-EBITDA; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27, 50–54

The gap comes from add-backs the issuer excludes, and contingency and restructuring charges are the largest of them, ahead of share-based compensation, so part of the difference is cash that has left or is still to leave rather than an accounting item.
Basis: calculation BRIDGE-LTM; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 34–35, 40, 53–54

Liquidity is not the constraint: cash exceeds total debt including the matched warehouse funding, which makes net debt negative on the balance sheet, and the revolver is undrawn, but the level of its leverage covenant is not disclosed, so headroom cannot be calculated.
Basis: calculation NETDEBT-2026-09-30; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 28–29, 55

### Credit analysis

Gross debt, counting every debt line on the balance sheet, fell from USD 8653.901 million at December 31, 2025 to USD 7266.567 million at September 30, 2026, because the 2026 convertible notes and the 2026 senior notes were repaid from cash and no new notes were issued, while warehouse funding rose from USD 1364.883 million to USD 1543.540 million. Cash and cash equivalents rose over the same months, so net debt moved from USD 2089.809 million to USD -592.747 million; the negative figure is net cash. The warehouse debt is matched funding of consumer receivables and loans held by separate entities whose assets are not available to the issuer's other creditors, so the notes alone, USD 5723.027 million at carrying value, are the claim that ranks against the issuer's own resources.
Basis: 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5, 27–30; calculation NETDEBT-2026-09-30; calculation NETDEBT-FY2025

Leverage is therefore measure-dependent. Reported EBITDA, built as operating income plus depreciation and amortization because the issuer states no unadjusted EBITDA, was USD 1566.955 million for the twelve months to September 30, 2026, against USD 4336.429 million on the issuer's adjusted measure. The difference of USD 2769.474 million is share-based compensation of USD 1038.104 million, contingency, restructuring and other charges of USD 1597.003 million, restructuring share-based compensation of USD 126.639 million and small items. Share-based compensation is a recurring cost the adjusted measure excludes. The charge add-back is described by the issuer as including severance, contingent losses and certain litigation and regulatory charges; the severance reserve was fully paid by September 30, 2026, while the Department of Justice accrual is unpaid, but the filing does not itemise the add-back, so its split is not established. Neither extreme is a clean read: the reported measure is depressed by charges that should not recur, and the adjusted measure is flattered by costs that are real.
Basis: calculation BRIDGE-LTM; calculation LTM-EBITDA; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 34–35, 40, 53–54

Interest cover shows the same split. Cash interest paid for the twelve months was USD 393.057 million against USD 246.331 million in fiscal 2025, because the senior notes issued in August 2025 carry coupons that were first paid in 2026, and cover is 3.99x on reported EBITDA against 11.03x on adjusted EBITDA. Cash interest paid may include interest on warehouse funding, which the issuer books in general and administrative expense, so the ratio is on a broader interest base than the income statement line.
Basis: calculation COVER-2026-09-30; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27, 30, 40

Operating cash flow of USD 3001.581 million for nine months of 2026 is far above net income of USD 342.615 million, because the cash flow statement adds back transaction, loan and consumer receivable losses of USD 1687.281 million and share-based compensation of USD 871.220 million, and shows an inflow of USD 777.910 million from other assets and liabilities that the statement does not break down. Operating cash flow includes the movement in loans originally classified as held for sale and the movement in customers payable, so it is not a clean measure of cash earnings.
Basis: 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8

Near-term liquidity is ample against dated obligations. No note matures before the 2027 convertible notes on November 1, 2027, the warehouse facilities have USD 447.437 million falling due within a year, and the revolver is undrawn at USD 900.000 million. The claims that could draw on cash are the share repurchase programme, which absorbed USD 700.935 million in nine months, and the Department of Justice resolution accrued at USD 764.000 million with its payment date not stated.
Basis: 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5, 27–30, 34–35, 55

Customers payable, a non-debt funding float, were USD 7700.091 million at September 30, 2026 against USD 6805.366 million at December 31, 2025, an increase of USD 894.725 million, partly matched on the asset side by customer funds of USD 5356.911 million. The issuer excludes customer funds from its liquidity, and this module excludes them from cash, but the obligation is repayable on demand and is the obligation most exposed to a confidence shock. Interest-bearing deposits at the bank subsidiary rose by USD 604.593 million in nine months and brokered deposits began in the third quarter; these fund cash that is counted here, which makes part of the net cash position deposit-funded.
Basis: 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5, 7–8, 55–56

Two events after reporting dates are kept out of period figures. The annual report records, as a subsequent event, the workforce reduction announced on February 26, 2026 with estimated charges of USD 450 million to USD 500 million, and the nine-month report shows USD 495.012 million charged; neither is in fiscal 2025 figures. The agreement in principle with the Department of Justice reached in October 2026 is accrued at September 30, 2026 but not paid, so it is not in any pro forma figure. The revolver restatement of January 14, 2026 and the repayment of the 2026 notes do not change net debt, because debt and cash fall together.
Basis: 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 212; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27–28, 34–35, 40

The strongest case against a cautious reading is the balance sheet itself: cash exceeds every debt line, the revolver is undrawn and no note matures before November 2027, so debt service does not depend on either EBITDA measure in the near term. It would win if the Department of Justice payment is met from cash on hand without drawing the revolver and the restructuring charges prove one-off. The strongest case against the benign adjusted reading is the size of the add-backs relative to adjusted EBITDA; it would win if contingency charges recur in later periods or if the unpaid accrual is followed by further regulatory costs, in which case reported leverage and reported cover are the better guide. Part of the cash balance is funded by bank deposits and by customer-related float, so net cash overstates the issuer's own resources.
Basis: 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 28, 34–35, 55–56; calculation LEV-2026-09-30; calculation BRIDGE-LTM

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_xyz-20251231.htm.jsonl | Annual report, audited by Ernst & Young LLP (opinion dated 2026-02-26) | FY2025, FY2024 and FY2023 flows; balance sheets at 2025-12-31 and 2024-12-31 | USD | USD thousands | Block, Inc. and consolidated subsidiaries, including consolidated warehouse special-purpose entities | US GAAP | Tier 1 | Annual statements, notes, segment note, non-GAAP reconciliations | Part III incorporated by reference to a proxy statement not supplied |
| 10-Q_2026-03-31_xyz-20260331.htm.jsonl | Quarterly report, unaudited | Quarter and period ended 2026-03-31 | USD | USD thousands | Block, Inc. and consolidated subsidiaries, including consolidated warehouse special-purpose entities | US GAAP | Tier 2b | Revolver restatement and exhibit index | Superseded by the nine-month report for figures; not tabulated |
| 10-Q_2026-06-30_xyz-20260630.htm.jsonl | Quarterly report, unaudited | Quarter and half-year ended 2026-06-30 | USD | USD thousands | Block, Inc. and consolidated subsidiaries, including consolidated warehouse special-purpose entities | US GAAP | Tier 2b | Covenant description | Superseded by the nine-month report for figures; not tabulated |
| 10-Q_2026-09-30_xyz-20260930.htm.jsonl | Quarterly report, unaudited | Quarter and nine months ended 2026-09-30; balance sheets at 2026-09-30 and 2025-12-31 | USD | USD thousands | Block, Inc. and consolidated subsidiaries, including consolidated warehouse special-purpose entities | US GAAP | Tier 2b | Latest statements, debt, warehouse, liquidity and non-GAAP reconciliations | Condensed balance sheet aggregates lines the annual report shows separately; no segment assets; the auditor review is not stated |
| EX-99.1_2026-05-07_d132441dex991.htm.jsonl | Issuer shareholder letter (Exhibit 99.1), non-GAAP | Quarter ended 2026-03-31 | USD | USD thousands | Block, Inc. and consolidated subsidiaries, including consolidated warehouse special-purpose entities | US GAAP | Tier 3a | Context only | Management framing; no figure taken from it |
| EX-99.1_2026-08-05_d91486dex991.htm.jsonl | Issuer shareholder letter (Exhibit 99.1), non-GAAP | Quarter ended 2026-06-30 | USD | USD thousands | Block, Inc. and consolidated subsidiaries, including consolidated warehouse special-purpose entities | US GAAP | Tier 3a | Context only | Management framing; no figure taken from it |
| EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl | Issuer shareholder letter (Exhibit 99.1), non-GAAP | Quarter ended 2026-09-30 | USD | USD thousands | Block, Inc. and consolidated subsidiaries, including consolidated warehouse special-purpose entities | US GAAP | Tier 3a | Liquidity cross-check | Management framing; reconciliations of guidance withheld by the issuer |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Block, Inc. | Issuer and registrant (Delaware); Class A common stock listed on the NYSE as XYZ | December 31 | USD | Thousands | Consolidated: Block, Inc. and its subsidiaries | US GAAP | FY2023, FY2024, FY2025 flows; 9M 2025 and 9M 2026 flows; balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30 |
| Square Financial Services, Inc. | Wholly-owned Utah industrial loan company (bank subsidiary), consolidated | December 31 | USD | Thousands | Inside the consolidated statements; no stand-alone statements supplied | US GAAP | Not separately reported |
| Warehouse special-purpose entities | Consolidated financing entities holding receivables and loans; borrowers under the warehouse facilities; assets not available to the issuer's other creditors | December 31 | USD | Thousands | Inside the consolidated statements; warehouse debt shown on its own balance-sheet lines | US GAAP | Not separately reported |

Borrower, parent, guarantors and a restricted group are not named in any source; the notes and the revolver are described as obligations of the Company. Subsequent events are flagged by date: the workforce reduction plan announced on February 26, 2026 (annual report), the revolver restatement of January 14, 2026, the repayment of the 2026 convertible notes on May 1, 2026 and of the 2026 senior notes on June 1, 2026, and the agreement in principle with the Department of Justice in October 2026 (nine-month report).
Basis: 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 1, 212; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27–29, 34

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Reported EBITDA derived as operating income plus depreciation and amortization; the issuer states Adjusted EBITDA only | 10-K_2025-12-31_xyz-20251231.htm.jsonl; 10-Q_2026-09-30_xyz-20260930.htm.jsonl | Derivation | Not supplied: no unadjusted EBITDA is stated | FY2024 1268.454; FY2025 2077.935; 9M 2025 1496.499; 9M 2026 985.519 (US$m) | Reported EBITDA is the primary denominator; this definition reconciles exactly to the issuer's Adjusted EBITDA through its stated add-backs | FY2024, FY2025, 9M 2025, 9M 2026 |
| Total Debt set as every balance-sheet debt line: current portion of long-term debt, long-term debt, and warehouse funding facilities current and non-current | 10-K_2025-12-31_xyz-20251231.htm.jsonl; 10-Q_2026-09-30_xyz-20260930.htm.jsonl | Definition | Notes only: FY2024 6105.436; FY2025 7289.018; 9M 2026 5723.027 (US$m) | FY2024 7587.116; FY2025 8653.901; 9M 2026 7266.567 (US$m) | The method counts every debt line the issuer carries; warehouse debt is matched funding, so notes-only ratios are also shown | FY2024, FY2025, 9M 2026 |
| Money tables restated from thousands to millions without rounding | 10-K_2025-12-31_xyz-20251231.htm.jsonl; 10-Q_2026-09-30_xyz-20260930.htm.jsonl | Unit | USD thousands as printed | US$m to three decimals, exact | Money tables use one unit; no figure is rounded | All |
| Third-quarter balance sheet re-presents December 31, 2025 with lines folded together; the annual report's separate lines are used for FY2025 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl; 10-K_2025-12-31_xyz-20251231.htm.jsonl | Presentation | Other current assets 4107.702; other non-current assets 1482.028; other non-current liabilities 381.845 (US$m, third-quarter report) | Annual report lines 3589.925 + 517.777; 323.375 + 188.887 + 214.929 + 754.837; 1.173 + 257.126 + 123.546 (US$m) | The totals agree exactly (see Calculations); separate lines keep FY2025 comparable with FY2024 | FY2025 |
| Twelve months to September 30, 2026 built as FY2025 plus nine months 2026 less nine months 2025 | 10-K_2025-12-31_xyz-20251231.htm.jsonl; 10-Q_2026-09-30_xyz-20260930.htm.jsonl | Derived period | Not supplied: no reported twelve-month figure | Reported EBITDA 1566.955; Adjusted EBITDA 4336.429; cash interest 393.057 (US$m) | Every component is available and the stubs are comparable | LTM to 2026-09-30 |

### Statement periods

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Commerce enablement revenue | 10512453 | 11514162 | 8464330 | 9755964 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Financial solutions revenue | 3250817 | 4176734 | 2954489 | 4143982 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Bitcoin ecosystem revenue | 10357783 | 8502787 | 6522386 | 5493947 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Total net revenue | 24121053 | 24193683 | 17941205 | 19393893 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Commerce enablement costs | 4913124 | 5353254 | 3940242 | 4453989 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Financial solutions costs | 311209 | 339878 | 249149 | 290359 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Bitcoin ecosystem costs | 9939320 | 8083772 | 6221176 | 5301264 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Amortization of acquired technology assets | 68364 | 56850 | 42935 | 37688 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Total cost of revenue | 15232017 | 13833754 | 10453502 | 10083300 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Gross profit | 8889036 | 10359929 | 7487703 | 9310593 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Product development | 2914415 | 2907889 | 2197222 | 2283123 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Sales and marketing | 1984265 | 2273072 | 1653524 | 2003363 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| General and administrative | 2149099 | 1997587 | 1485008 | 2530894 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Transaction, loan, and consumer receivable losses | 794221 | 1337246 | 827234 | 1687281 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Amortization of customer and other acquired intangible assets | 154709 | 135729 | 101680 | 102561 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Total operating expenses | 7996709 | 8651523 | 6264668 | 8607222 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Operating income | 892327 | 1708406 | 1223035 | 703371 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Interest expense (income), net | 9302 | 129363 | 75582 | 157044 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Remeasurement loss (gain) on bitcoin investment | -420918 | 55900 | -178402 | 31587 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Other expense (income), net | -53211 | -166768 | -162103 | -6650 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Income before income tax | 1357154 | 1689911 | 1487958 | 521390 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Provision for (benefit from) income taxes | -1509343 | 385701 | 299304 | 178775 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Net income | 2866497 | 1304210 | 1188654 | 342615 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| Depreciation and amortization (cash flow statement) | 376127 | 369529 | 273464 | 282148 | USD thousands | Reported; total of the cash flow statement line | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 143; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 7 |
| EBITDA (Reported) | 1268454 | 2077935 | 1496499 | 985519 | USD thousands | Calculated: Operating income plus Depreciation and amortization; the issuer states no unadjusted EBITDA | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 143; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 7 |
| EBITDA (Adjusted) | 3029031 | 3466568 | 2536878 | 3406739 | USD thousands | Issuer-adjusted: net income plus share-based compensation, restructuring share-based compensation, depreciation and amortization, acquisition costs, contingencies and restructuring, interest, bitcoin remeasurement, other income, tax, loss on disposal and acquired deferred revenue | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| Adjusted Operating Income (issuer) | 1608790 | 2083813 | 1496024 | 2514254 | USD thousands | Issuer-adjusted; shown beside EBITDA, not used in a ratio | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 53 |
| Share-based compensation expense | 1264486 | 1203220 | 909697 | 744581 | USD thousands | Issuer add-back | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| Restructuring share-based compensation expense | 8071 | 12260 | 12260 | 126639 | USD thousands | Issuer add-back | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| Acquisition-related and integration costs | 49019 | 2059 | 1707 | 1094 | USD thousands | Issuer add-back | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| Contingencies, restructuring and other charges | 302446 | 168509 | 114407 | 1542901 | USD thousands | Issuer add-back | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| Goodwill and intangible asset impairment | 133854 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Issuer add-back | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 54 |
| Loss on disposal of property and equipment | 2634 | 2546 | 2276 | 5988 | USD thousands | Issuer add-back | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| Acquired deferred revenue and cost adjustment | 67 | 39 | 32 | 17 | USD thousands | Issuer add-back | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 2866497 | 1304210 | 1188654 | 342615 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Depreciation and amortization | 376127 | 369529 | 273464 | 282148 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Share-based compensation | 1272779 | 1215480 | 921957 | 871220 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Transaction, loan, and consumer receivable losses | 794221 | 1337246 | 827234 | 1687281 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Settlements receivable | 1947849 | -487316 | -291388 | -274477 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Customers payable | -1853872 | 373925 | 313061 | 309299 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Operating Activities | 1707350 | 2579714 | 1958714 | 3001581 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Purchases of property and equipment | -153947 | -155038 | -113838 | -127996 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Investing Activities | 649952 | -2801932 | -671814 | -653602 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Proceeds from issuance of senior notes | 2000000 | 2200000 | 2200000 | Not supplied: the statement prints a dash or no line for this period | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Repayments of senior notes | Not supplied: the statement prints a dash or no line for this period | Not supplied: the statement prints a dash or no line for this period | Not supplied: the statement prints a dash or no line for this period | -1000000 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Payments to redeem convertible notes | Not supplied: the statement prints a dash or no line for this period | -1000624 | -1000624 | -575000 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Proceeds from warehouse facilities borrowings | 1255745 | 1305288 | 448530 | 1320398 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Repayments of warehouse facilities borrowings | -1329729 | -1456869 | -1456869 | -1155192 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Repurchases of common stock | -1170339 | -2330661 | -1540529 | -700935 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Change in customer funds, restricted from use in the Company's operations | 1012442 | 588952 | 620844 | 585087 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Financing Activities | 1952662 | -613099 | -652901 | -896369 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| FX Effect on Cash | -88539 | 86081 | 80515 | 4397 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Net Cash Change | 4221425 | -749236 | 714514 | 1456007 | USD thousands | Reported; net increase (decrease) in cash, cash equivalents, restricted cash and customer funds | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Opening Cash | 9009087 | 13230512 | 13230512 | 12481276 | USD thousands | Reported; cash, cash equivalents, restricted cash and customer funds, a wider base than the balance sheet cash line | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Closing Cash | 13230512 | 12481276 | 13945026 | 13937283 | USD thousands | Reported; cash, cash equivalents, restricted cash and customer funds, a wider base than the balance sheet cash line | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| Cash Interest Paid | 205776 | 246331 | 124220 | 270946 | USD thousands | Reported; cash paid for interest, supplemental disclosure; US GAAP classifies interest paid in operating activities | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 211; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 40 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 8075247 | 6564092 | 7859314 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Investments in short-term debt securities | 403426 | 517777 | Not supplied: the third-quarter balance sheet folds this line into another line | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Settlements receivable | 1060966 | 1359983 | 1454211 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Customer funds | 4182872 | 4771824 | 5356911 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Consumer receivables, net | 2504879 | 2670322 | 2352214 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Loans held for investment, net | 365062 | 3382957 | 4401001 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Other current assets | 3287749 | 3589925 | 3561245 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Total current assets | 19880201 | 22856880 | 24984896 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Property and equipment, net | 314432 | 323375 | Not supplied: the third-quarter balance sheet folds this line into another line | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Goodwill | 11417422 | 11849018 | 11984759 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Acquired intangible assets, net | 1433067 | 1281670 | 1155971 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Investments in long-term debt securities | 471977 | 188887 | Not supplied: the third-quarter balance sheet folds this line into another line | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Bitcoin investment | 792282 | 777515 | 771881 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Operating lease right-of-use assets | 219954 | 214929 | Not supplied: the third-quarter balance sheet folds this line into another line | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Deferred tax assets | 1800994 | 1302776 | 1313316 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Other non-current assets | 447266 | 754837 | 1024864 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Customers payable | 5837152 | 6805366 | 7700091 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Accrued expenses and other current liabilities | 1525149 | 1538893 | 3061320 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Current portion of long-term debt | 999497 | 1573259 | 0 | USD thousands | Reported; the third-quarter balance sheet prints a dash, read as nil because the notes table total equals long-term debt | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Warehouse funding facilities, current | 185000 | 466942 | 447437 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Total current liabilities | 8546798 | 10384460 | 11208848 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Deferred tax liabilities | 162435 | 1173 | Not supplied: the third-quarter balance sheet folds this line into another line | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Warehouse funding facilities, non-current | 1296680 | 897941 | 1096103 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Long-term debt | 5105939 | 5715759 | 5723027 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Operating lease liabilities, non-current | 278617 | 257126 | Not supplied: the third-quarter balance sheet folds this line into another line | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Other non-current liabilities | 152164 | 123546 | 337523 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Total Liabilities | 15542633 | 17380005 | 18365501 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Additional paid-in capital | 19900379 | 18895405 | 19122552 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Accumulated other comprehensive loss | -1001065 | -365381 | -234839 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Retained earnings | 2368618 | 3674254 | 4019641 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Noncontrolling interests | -32970 | -34396 | -37168 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Total Equity | 21234962 | 22169882 | 22870186 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Total Assets | 36777595 | 39549887 | 41235687 | USD thousands | Reported | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Total Debt | 7587116 | 8653901 | 7266567 | USD thousands | Calculated: current portion of long-term debt plus long-term debt plus warehouse funding facilities current and non-current, at carrying value net of issuance costs | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| Cash & Equivalents | 8075247 | 6564092 | 7859314 | USD thousands | Reported cash and cash equivalents; excludes restricted cash, customer funds and marketable securities | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2027 Convertible Notes | Convertible senior notes | 573540 | 575000 | Not applicable | Not applicable | Not supplied: the sources call them convertible senior notes and state no security | Senior (security not stated) | USD | 573540 | Not applicable | 0.25% | Fixed | Not applicable | Not applicable | Not applicable | 2027-11-01 | 0 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27, 57 |
| 2030 Senior Notes | Senior unsecured notes | 1187619 | 1200000 | Not applicable | Not applicable | Unsecured | Senior unsecured | USD | 1187619 | Not applicable | 5.625% | Fixed | Not applicable | Not applicable | Not applicable | 2030-08-15 | 0 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 188 |
| 2031 Senior Notes | Senior unsecured notes | 993421 | 1000000 | Not applicable | Not applicable | Unsecured | Senior unsecured | USD | 993421 | Not applicable | 3.50% | Fixed | Not applicable | Not applicable | Not applicable | 2031-06-01 | 0 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 186 |
| 2032 Senior Notes | Senior unsecured notes | 1979887 | 2000000 | Not applicable | Not applicable | Unsecured | Senior unsecured | USD | 1979887 | Not applicable | 6.50% | Fixed | Not applicable | Not applicable | Not applicable | 2032-05-15 | 0 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 190 |
| 2033 Senior Notes | Senior unsecured notes | 988560 | 1000000 | Not applicable | Not applicable | Unsecured | Senior unsecured | USD | 988560 | Not applicable | 6.000% | Fixed | Not applicable | Not applicable | Not applicable | 2033-08-15 | 0 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 188 |
| Revolving credit facility (restated January 14, 2026) | Senior unsecured revolving credit facility | 0 | Not applicable | 0 | 900000 | Unsecured | Senior unsecured | USD | 0 | Not applicable | Term SOFR plus 1.25% to 1.75%, or base rate plus 0.25% to 0.75%, by total net leverage ratio | Floating | Term SOFR | 125 to 175 | Not supplied: no floor is stated | 2031-01-14, or 91 days before an earlier note maturity if liquidity would then be below USD 250 million | 0 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 28, 57 |
| Warehouse funding facilities | Secured warehouse facilities of consolidated special-purpose entities | 1543540 | 1543540 | 1543540 | Not supplied: aggregate printed as USD 2.4 billion on a revolving basis | Secured by the consumer receivables or loans held by each special-purpose entity; no corporate financial covenants | Secured at entity level; assets unavailable to the issuer's other creditors | USD | 1543540 | Not applicable | Base rate plus a margin set per facility; margin not printed | Floating | Local risk-free rate such as Term SOFR or SONIA | Not supplied: margins are not printed | Not supplied: no floor is stated | Final maturities through July 2029 | Scheduled by final maturity: 2027 515039; 2028 549437; 2029 479064 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 29–30 |
| Square Financial Services uncommitted lines of credit | Uncommitted, unsecured bank lines | 0 | Not applicable | 0 | Not applicable: uncommitted | Unsecured | Not supplied: not stated | USD | 0 | Not applicable | Not supplied: not printed | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: uncommitted | Not applicable | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 29 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 2,077.935m | USD 985.519m | USD 1,496.499m | USD 1,566.955m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141–143; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 7 | Derived EBITDA; each component is the filing's own line |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 3,466.568m | USD 3,406.739m | USD 2,536.878m | USD 4,336.429m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 | Issuer-adjusted measure; add-backs listed below |
| Cash Interest Paid | LTM to 2026-09-30 | USD 246.331m | USD 270.946m | USD 124.220m | USD 393.057m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 211; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 40 | Every component is available; stubs are comparable nine-month periods |
| Total net revenue | LTM to 2026-09-30 | USD 24,193.683m | USD 19,393.893m | USD 17,941.205m | USD 25,646.371m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 | Every component is available; stubs are comparable nine-month periods |
| Gross profit | LTM to 2026-09-30 | USD 10,359.929m | USD 9,310.593m | USD 7,487.703m | USD 12,182.819m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 | Every component is available; stubs are comparable nine-month periods |
| Operating income | LTM to 2026-09-30 | USD 1,708.406m | USD 703.371m | USD 1,223.035m | USD 1,188.742m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 | Every component is available; stubs are comparable nine-month periods |
| Depreciation and amortization | LTM to 2026-09-30 | USD 369.529m | USD 282.148m | USD 273.464m | USD 378.213m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 143; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 7 | Every component is available; stubs are comparable nine-month periods |
| Share-based compensation expense | LTM to 2026-09-30 | USD 1,203.220m | USD 744.581m | USD 909.697m | USD 1,038.104m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 | Issuer add-back to Adjusted EBITDA |
| Restructuring share-based compensation expense | LTM to 2026-09-30 | USD 12.260m | USD 126.639m | USD 12.260m | USD 126.639m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 | Issuer add-back to Adjusted EBITDA |
| Acquisition-related and integration costs | LTM to 2026-09-30 | USD 2.059m | USD 1.094m | USD 1.707m | USD 1.446m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 | Issuer add-back to Adjusted EBITDA |
| Contingencies, restructuring and other charges | LTM to 2026-09-30 | USD 168.509m | USD 1,542.901m | USD 114.407m | USD 1,597.003m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 | Issuer add-back to Adjusted EBITDA |
| Loss on disposal of property and equipment | LTM to 2026-09-30 | USD 2.546m | USD 5.988m | USD 2.276m | USD 6.258m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 | Issuer add-back to Adjusted EBITDA |
| Acquired deferred revenue and cost adjustment | LTM to 2026-09-30 | USD 0.039m | USD 0.017m | USD 0.032m | USD 0.024m | Calculated | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 | Issuer add-back to Adjusted EBITDA |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 7587.116 | Net debt data, Gross debt, FY2024 / 2024-12-31 | 1268.454 | EBITDA (Reported) FY2024, 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143 | FY2024 / 2024-12-31 | USD | US$m | 5.98 | Calculated | Tier 1 | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); EBITDA derived as operating income plus depreciation and amortization; share-based compensation is not added back |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 8653.901 | Net debt data, Gross debt, FY2025 / 2025-12-31 | 2077.935 | EBITDA (Reported) FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143 | FY2025 / 2025-12-31 | USD | US$m | 4.16 | Calculated | Tier 1 | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); EBITDA derived as operating income plus depreciation and amortization; share-based compensation is not added back |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 7266.567 | Net debt data, Gross debt, 2026-09-30 | 1566.955 | EBITDA (Reported) LTM, calculation LTM-EBITDA | 2026-09-30 | USD | US$m | 4.64 | Calculated | Tier 1 and Tier 2b | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); LTM figures: FY2025 plus 9M 2026 less 9M 2025; EBITDA derived as operating income plus depreciation and amortization; share-based compensation is not added back |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | -488.131 | Net debt data, Net debt, FY2024 / 2024-12-31 | 1268.454 | EBITDA (Reported) FY2024, 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143 | FY2024 / 2024-12-31 | USD | US$m | -0.38 | Calculated | Tier 1 | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); EBITDA derived as operating income plus depreciation and amortization; share-based compensation is not added back |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2089.809 | Net debt data, Net debt, FY2025 / 2025-12-31 | 2077.935 | EBITDA (Reported) FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143 | FY2025 / 2025-12-31 | USD | US$m | 1.01 | Calculated | Tier 1 | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); EBITDA derived as operating income plus depreciation and amortization; share-based compensation is not added back |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | -592.747 | Net debt data, Net debt, 2026-09-30 | 1566.955 | EBITDA (Reported) LTM, calculation LTM-EBITDA | 2026-09-30 | USD | US$m | -0.38 | Calculated | Tier 1 and Tier 2b | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); LTM figures: FY2025 plus 9M 2026 less 9M 2025; EBITDA derived as operating income plus depreciation and amortization; share-based compensation is not added back |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1268.454 | EBITDA (Reported) FY2024, 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143 | 205.776 | Cash Interest Paid FY2024, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 211 | FY2024 / 2024-12-31 | USD | US$m | 6.16 | Calculated | Tier 1 | EBITDA derived as operating income plus depreciation and amortization; share-based compensation is not added back |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 2077.935 | EBITDA (Reported) FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143 | 246.331 | Cash Interest Paid FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 211 | FY2025 / 2025-12-31 | USD | US$m | 8.44 | Calculated | Tier 1 | EBITDA derived as operating income plus depreciation and amortization; share-based compensation is not added back |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1566.955 | EBITDA (Reported) LTM, calculation LTM-EBITDA | 393.057 | Cash Interest Paid LTM, calculation LTM-EBITDA | 2026-09-30 | USD | US$m | 3.99 | Calculated | Tier 1 and Tier 2b | LTM figures: FY2025 plus 9M 2026 less 9M 2025; EBITDA derived as operating income plus depreciation and amortization; share-based compensation is not added back |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 7587.116 | Net debt data, Gross debt, FY2024 / 2024-12-31 | 3029.031 | EBITDA (Adjusted) FY2024, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125 | FY2024 / 2024-12-31 | USD | US$m | 2.50 | Calculated | Tier 1 | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); Issuer-adjusted EBITDA adds back share-based compensation and charges |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 8653.901 | Net debt data, Gross debt, FY2025 / 2025-12-31 | 3466.568 | EBITDA (Adjusted) FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125 | FY2025 / 2025-12-31 | USD | US$m | 2.50 | Calculated | Tier 1 | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); Issuer-adjusted EBITDA adds back share-based compensation and charges |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 7266.567 | Net debt data, Gross debt, 2026-09-30 | 4336.429 | EBITDA (Adjusted) LTM, calculation LTM-EBITDA | 2026-09-30 | USD | US$m | 1.68 | Calculated | Tier 1 and Tier 2b | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); LTM figures: FY2025 plus 9M 2026 less 9M 2025; Issuer-adjusted EBITDA adds back share-based compensation and charges |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | -488.131 | Net debt data, Net debt, FY2024 / 2024-12-31 | 3029.031 | EBITDA (Adjusted) FY2024, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125 | FY2024 / 2024-12-31 | USD | US$m | -0.16 | Calculated | Tier 1 | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); Issuer-adjusted EBITDA adds back share-based compensation and charges |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2089.809 | Net debt data, Net debt, FY2025 / 2025-12-31 | 3466.568 | EBITDA (Adjusted) FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125 | FY2025 / 2025-12-31 | USD | US$m | 0.60 | Calculated | Tier 1 | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); Issuer-adjusted EBITDA adds back share-based compensation and charges |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | -592.747 | Net debt data, Net debt, 2026-09-30 | 4336.429 | EBITDA (Adjusted) LTM, calculation LTM-EBITDA | 2026-09-30 | USD | US$m | -0.14 | Calculated | Tier 1 and Tier 2b | Gross debt includes warehouse funding facilities (matched funding, non-recourse to the issuer's other assets); LTM figures: FY2025 plus 9M 2026 less 9M 2025; Issuer-adjusted EBITDA adds back share-based compensation and charges |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 3029.031 | EBITDA (Adjusted) FY2024, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125 | 205.776 | Cash Interest Paid FY2024, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 211 | FY2024 / 2024-12-31 | USD | US$m | 14.72 | Calculated | Tier 1 | Issuer-adjusted EBITDA adds back share-based compensation and charges |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 3466.568 | EBITDA (Adjusted) FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125 | 246.331 | Cash Interest Paid FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 211 | FY2025 / 2025-12-31 | USD | US$m | 14.07 | Calculated | Tier 1 | Issuer-adjusted EBITDA adds back share-based compensation and charges |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 4336.429 | EBITDA (Adjusted) LTM, calculation LTM-EBITDA | 393.057 | Cash Interest Paid LTM, calculation LTM-EBITDA | 2026-09-30 | USD | US$m | 11.03 | Calculated | Tier 1 and Tier 2b | LTM figures: FY2025 plus 9M 2026 less 9M 2025; Issuer-adjusted EBITDA adds back share-based compensation and charges |
| Notes debt / EBITDA | Notes carrying value / EBITDA (Reported) | 6105.436 | Notes carrying value (current portion plus long-term debt), 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 4; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141 | 1268.454 | EBITDA (Reported) FY2024, 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143 | FY2024 / 2024-12-31 | USD | US$m | 4.81 | Calculated | Tier 1 | Excludes warehouse funding; EBITDA derived |
| Notes debt / EBITDA | Notes carrying value / EBITDA (Reported) | 7289.018 | Notes carrying value (current portion plus long-term debt), 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 4; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141 | 2077.935 | EBITDA (Reported) FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143 | FY2025 / 2025-12-31 | USD | US$m | 3.51 | Calculated | Tier 1 | Excludes warehouse funding; EBITDA derived |
| Notes debt / EBITDA | Notes carrying value / EBITDA (Reported) | 5723.027 | Notes carrying value (current portion plus long-term debt), 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 4; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141 | 1566.955 | EBITDA (Reported) LTM, calculation LTM-EBITDA | 2026-09-30 | USD | US$m | 3.65 | Calculated | Tier 1 and Tier 2b | Excludes warehouse funding; EBITDA derived |
| Notes debt / adjusted EBITDA | Notes carrying value / EBITDA (Adjusted) | 6105.436 | Notes carrying value (current portion plus long-term debt), 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 4; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141 | 3029.031 | EBITDA (Adjusted) FY2024, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125 | FY2024 / 2024-12-31 | USD | US$m | 2.02 | Calculated | Tier 1 | Excludes warehouse funding; issuer-adjusted EBITDA |
| Notes debt / adjusted EBITDA | Notes carrying value / EBITDA (Adjusted) | 7289.018 | Notes carrying value (current portion plus long-term debt), 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 4; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141 | 3466.568 | EBITDA (Adjusted) FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125 | FY2025 / 2025-12-31 | USD | US$m | 2.10 | Calculated | Tier 1 | Excludes warehouse funding; issuer-adjusted EBITDA |
| Notes debt / adjusted EBITDA | Notes carrying value / EBITDA (Adjusted) | 5723.027 | Notes carrying value (current portion plus long-term debt), 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 4; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141 | 4336.429 | EBITDA (Adjusted) LTM, calculation LTM-EBITDA | 2026-09-30 | USD | US$m | 1.32 | Calculated | Tier 1 and Tier 2b | Excludes warehouse funding; issuer-adjusted EBITDA |
| Gross margin % | Gross profit / Total net revenue x 100 | 8889.036 | Gross profit, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 | 24121.053 | Total net revenue, same pages | FY2024 / 2024-12-31 | USD | US$m | 36.85 | Calculated | Tier 1 | Gross profit includes bitcoin ecosystem revenue at near-nil margin |
| Gross margin % | Gross profit / Total net revenue x 100 | 10359.929 | Gross profit, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 | 24193.683 | Total net revenue, same pages | FY2025 / 2025-12-31 | USD | US$m | 42.82 | Calculated | Tier 1 | Gross profit includes bitcoin ecosystem revenue at near-nil margin |
| Gross margin % | Gross profit / Total net revenue x 100 | 12182.819 | Gross profit, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 | 25646.371 | Total net revenue, same pages | 2026-09-30 | USD | US$m | 47.50 | Calculated | Tier 1 and Tier 2b | Gross profit includes bitcoin ecosystem revenue at near-nil margin |
| Revenue growth % | Total net revenue FY2025 / Total net revenue FY2024 - 1 (x 100) | 24193.683 | Total net revenue FY2025, 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141 | 24121.053 | Total net revenue FY2024, same page | FY2025 / 2025-12-31 | USD | US$m | 0.30 | Calculated | Tier 1 | Revenue includes bitcoin ecosystem revenue, which is low-margin and volatile |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume | Gross Payment Volume (USD millions, period flow) | 240812 | 259631 | 192695 | 215996 | Up | Excludes buy-now-pay-later transactions; rose in both the fiscal-year and nine-month comparisons |
| Segment gross profit (USD thousands, period flow) | Cash App | 5239011 | 6335543 | 4504404 | 5950975 | Up | Segment gross profit is the measure the chief operating decision maker uses |
| Segment gross profit (USD thousands, period flow) | Square | 3598912 | 3935041 | 2942369 | 3298652 | Up | Includes financial solutions offered to sellers |
| Segment gross profit (USD thousands, period flow) | Corporate and Other | 51113 | 89345 | 40930 | 60966 | Up | Products not assigned to a segment and intersegment eliminations, one row |
| Segment revenue (USD thousands, period flow) | Cash App | 16247880 | 15425043 | 11523444 | 11965176 | Mixed | Bitcoin ecosystem revenue fell in FY2025 and in 9M 2026 against 9M 2025; commerce and financial solutions revenue rose |
| Segment revenue (USD thousands, period flow) | Square | 7681656 | 8451911 | 6259281 | 7209657 | Up | Revenue rose in both comparisons |
| Segment revenue (USD thousands, period flow) | Corporate and Other | 191517 | 316729 | 158480 | 219060 | Up | Revenue rose in both comparisons |
| Non-debt funding float (USD thousands, period end) | Customers payable | 5837152 | 6805366 | Not supplied: no balance sheet at 2025-09-30 is in the sources | 7700091 | Up | Repayable obligation to customers; not debt and not in cash |
| Non-debt funding float (USD thousands, period end) | Customer funds (asset) | 4182872 | 4771824 | Not supplied: no balance sheet at 2025-09-30 is in the sources | 5356911 | Up | Held on behalf of customers; excluded from the issuer's liquidity |
| Bank funding (USD thousands, period flow) | Net increase in interest-bearing deposits | 74856 | 55548 | 81176 | 604593 | Mixed | Fell in FY2025, then rose sharply in 9M 2026; brokered certificates of deposit began in Q3 2026 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA: operating income plus depreciation and amortization, no add-backs | Adjusted EBITDA adds back share-based compensation, restructuring share-based compensation, acquisition costs, contingencies and restructuring, loss on disposal and acquired deferred revenue | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 | All; LTM to 2026-09-30 difference 2769.474 against adjusted 4336.429 (US$m), 63.87% of adjusted | High | Fundamental credit; Liquidity; Forward credit model | Both measures are shown; reported is the primary denominator, adjusted is a labelled twin |
| Total debt | Carrying value of every balance-sheet debt line, net of issuance costs; principal kept apart | Notes table: carrying value 5723.027 against principal 5775.000 at 2026-09-30; with warehouse funding 7266.567 against 7318.540; FY2025 8653.901 against 8714.883 (US$m) | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27, 30; 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 184, 198 | 2026-09-30; FY2025 | Medium: difference 51.973 at 2026-09-30 and 60.982 at FY2025, all unamortised issuance costs | Financial foundation; Refinancing & LME | Carrying value used in every ratio; principal shown in the reconciliation table |
| Total debt perimeter | Every debt line, including warehouse funding facilities | Issuer presents warehouse funding on its own lines; corporate notes and warehouse funding are described separately and warehouse assets are unavailable to other creditors | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5, 29; 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141 | All | High: warehouse funding is 1543.540 of 7266.567 at 2026-09-30 (US$m) | Fundamental credit; Recovery & fulcrum | Total debt includes warehouse funding; notes-only ratios are shown beside it |
| Cash | Cash and cash equivalents on the balance sheet | Issuer liquidity adds restricted cash and marketable securities; the cash flow statement counts cash, restricted cash and customer funds | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4, 8, 55 | 2026-09-30 | High: balance-sheet cash 7859.314; issuer liquidity base excluding the revolver 9164.035; cash flow statement base 13937.283 (US$m) | Liquidity | Balance-sheet cash is used for net debt; the other bases are labelled and not substituted |
| Interest | Cash paid for interest, the cover denominator | Income statement shows interest expense, net; the notes table shows interest expense on the notes; warehouse interest is booked in general and administrative expense | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 27, 30, 40 | 9M 2026 | Medium: 9M 2026 cash interest paid 270.946, interest expense on the notes 240.380, interest expense net 157.044, warehouse interest 47.2 (US$m) | Fundamental credit | Cash interest paid is the denominator; the other figures are not substituted |
| Share-based compensation | One figure per period | Non-GAAP reconciliation and cash flow statement differ in FY2024 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 125, 143 | FY2024 | Low: reconciliation 1264.486 plus restructuring 8.071 is 1272.557 against 1272.779 in the cash flow statement, difference 0.222 (US$m) | Earnings quality | Reconciliation figures used in the bridge; cash flow figure used in the cash flow table |
| Adjusted EPS | Not used | Issuer revised the definition to include share-based compensation from fiscal 2025 and recast prior periods; Adjusted EBITDA is unchanged | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 122 | FY2025 | Low | Earnings quality | Not used in any ratio |
| Balance sheet presentation | Annual report lines | Third-quarter report re-presents December 31, 2025 with lines folded into other current assets, other non-current assets and other non-current liabilities | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5; 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141 | FY2025; 9M 2026 | Low: totals agree exactly (see Calculations) | Financial foundation | Annual lines used for FY2025; folded lines for 9M 2026 are not supplied |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 5.98 | -0.38 | x | Fiscal-year EBITDA, reported (operating income plus depreciation and amortization); gross debt includes warehouse funding; net debt is gross debt less balance-sheet cash and is negative where cash exceeds debt |
| FY2025 / 2025-12-31 | 4.16 | 1.01 | x | Fiscal-year EBITDA, reported (operating income plus depreciation and amortization); gross debt includes warehouse funding; net debt is gross debt less balance-sheet cash and is negative where cash exceeds debt |
| 2026-09-30 | 4.64 | -0.38 | x | LTM EBITDA to 2026-09-30, reported (operating income plus depreciation and amortization); gross debt includes warehouse funding; net debt is gross debt less balance-sheet cash and is negative where cash exceeds debt |

Leverage on reported EBITDA is depressed by charges the issuer adds back, and total debt includes matched warehouse funding; the same ratios on adjusted EBITDA are in the calculation register.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 6.16 | x | Fiscal-year reported EBITDA over cash interest paid; cash interest may include warehouse interest |
| FY2025 / 2025-12-31 | 8.44 | x | Fiscal-year reported EBITDA over cash interest paid; cash interest may include warehouse interest |
| 2026-09-30 | 3.99 | x | LTM reported EBITDA over cash interest paid; cash interest may include warehouse interest |

Cover on adjusted EBITDA is much higher and is shown in the calculation register; the cash interest base may include warehouse interest.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 8075.247 | 775.000 | US$m | Cash is balance-sheet cash and cash equivalents; undrawn committed facilities are the undrawn revolver; warehouse availability at December 31, 2024 is not printed because it can fund receivables only; restricted cash, customer funds and marketable securities are excluded |
| FY2025 / 2025-12-31 | 6564.092 | 775.000 | US$m | Cash is balance-sheet cash and cash equivalents; undrawn committed facilities are the undrawn revolver; warehouse availability of USD 323.9 million is excluded because it can fund receivables only; restricted cash, customer funds and marketable securities are excluded |
| 2026-09-30 | 7859.314 | 900.000 | US$m | Cash is balance-sheet cash and cash equivalents; undrawn committed facilities are the undrawn revolver; warehouse availability of USD 809.3 million is excluded because it can fund receivables only; restricted cash, customer funds and marketable securities are excluded |

The issuer's own liquidity of USD 10,064.035 million at September 30, 2026 also counts restricted cash and marketable securities, which this table leaves out.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2027 | 1090.039 | US$m | Contractual principal at 2026-09-30 by year of final maturity: 2027 convertible notes 575000 due 2027-11-01 plus warehouse principal 515039 by final maturity |
| 2028 | 549.437 | US$m | Contractual principal at 2026-09-30 by year of final maturity: Warehouse principal by final maturity |
| 2029 | 479.064 | US$m | Contractual principal at 2026-09-30 by year of final maturity: Warehouse principal by final maturity |
| 2030 | 1200.000 | US$m | Contractual principal at 2026-09-30 by year of final maturity: 2030 senior notes due 2030-08-15 |
| 2031 | 1000.000 | US$m | Contractual principal at 2026-09-30 by year of final maturity: 2031 senior notes due 2031-06-01; the undrawn revolver, maturing 2031-01-14, is not principal outstanding |
| 2032 | 2000.000 | US$m | Contractual principal at 2026-09-30 by year of final maturity: 2032 senior notes due 2032-05-15 |
| 2033 | 1000.000 | US$m | Contractual principal at 2026-09-30 by year of final maturity: 2033 senior notes due 2033-08-15 |

Warehouse amounts are shown by final maturity; the facilities are revolving, so drawn balances move with the receivables they fund.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-30 | Unit | Basis |
| --- | --- | --- | --- | --- | --- |
| Total net revenue | 24121.053 | 24193.683 | 25646.371 | US$m | Reported; LTM built from FY2025, 9M 2026 and 9M 2025 |
| Gross profit | 8889.036 | 10359.929 | 12182.819 | US$m | Reported; LTM built |
| Operating income | 892.327 | 1708.406 | 1188.742 | US$m | Reported; LTM built |
| EBITDA (Reported) | 1268.454 | 2077.935 | 1566.955 | US$m | Calculated: operating income plus depreciation and amortization |
| EBITDA (Adjusted) | 3029.031 | 3466.568 | 4336.429 | US$m | Issuer-adjusted |
| Net income | 2866.497 | 1304.210 | 458.171 | US$m | Reported; LTM built; includes bitcoin remeasurement and tax items |
| Net cash from operating activities | 1707.350 | 2579.714 | 3622.581 | US$m | Reported; LTM built; includes loan and customers payable movements |
| Cash interest paid | 205.776 | 246.331 | 393.057 | US$m | Reported; LTM built |
| Total debt (carrying value) | 7587.116 | 8653.901 | 7266.567 | US$m | Calculated: notes plus warehouse funding |
| Cash and cash equivalents | 8075.247 | 6564.092 | 7859.314 | US$m | Reported |
| Net debt | -488.131 | 2089.809 | -592.747 | US$m | Calculated: total debt less cash; negative is net cash |
| Total debt / EBITDA | 5.98 | 4.16 | 4.64 | x | Calculated on reported EBITDA |
| Net debt / EBITDA | -0.38 | 1.01 | -0.38 | x | Calculated on reported EBITDA |
| EBITDA / cash interest | 6.16 | 8.44 | 3.99 | x | Calculated on reported EBITDA |
| Total debt / adjusted EBITDA | 2.50 | 2.50 | 1.68 | x | Calculated on issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | 14.72 | 14.07 | 11.03 | x | Calculated on issuer-adjusted EBITDA |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 7587.116 | 8075.247 | -488.131 | US$m | Reported balance sheet; gross debt is carrying value: notes 6105.436 plus warehouse funding 1481.680, net of issuance costs; principal total 7631.680 (notes 6150.000 plus warehouse 1481.680; the warehouse principal at 2024-12-31 is not printed, so its carrying value is used); cash excludes restricted cash, customer funds and marketable securities; no pro forma adjustment |
| FY2025 / 2025-12-31 | 8653.901 | 6564.092 | 2089.809 | US$m | Reported balance sheet; gross debt is carrying value: notes 7289.018 plus warehouse funding 1364.883, net of issuance costs; principal total 8714.883 (notes 7350.000 plus warehouse 1364.883); cash excludes restricted cash, customer funds and marketable securities; no pro forma adjustment |
| 2026-09-30 | 7266.567 | 7859.314 | -592.747 | US$m | Reported balance sheet; gross debt is carrying value: notes 5723.027 plus warehouse funding 1543.540, net of issuance costs; principal total 7318.540 (notes 5775.000 plus warehouse 1543.540); cash excludes restricted cash, customer funds and marketable securities; no pro forma adjustment |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 7318.540 | -51.973 | 7266.567 | US$m | Principal is the sum of the maturity rows (notes 5775.000 plus warehouse 1543.540); the only reconciling item is unamortised debt issuance costs on the notes of -51.973; warehouse carrying value equals its principal; no debt is left out of the ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | All seven sources were read to September 30, 2026, the latest balance-sheet date. The Department of Justice agreement in principle (October 2026) is accrued at September 30, 2026 but no final agreement, amount payable or date is stated, so no pro forma row is built; the repayment of the 2026 notes and the revolver restatement precede the latest balance sheet and do not change net debt |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 | 24121.053 | 3029.031 | US$m | Twelve months; Adjusted EBITDA is issuer-adjusted |
| FY2025 | 24193.683 | 3466.568 | US$m | Twelve months; Adjusted EBITDA is issuer-adjusted |
| LTM to 2026-09-30 | 25646.371 | 4336.429 | US$m | Twelve months built from FY2025, 9M 2026 and 9M 2025; Adjusted EBITDA is issuer-adjusted |

Revenue includes bitcoin ecosystem revenue, which carries almost no margin, and Adjusted EBITDA adds back share-based compensation and charges.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Warehouse funding facilities | 1 | Yes | 1543.540 | 0.99 | US$m | Secured by receivables or loans held by consolidated special-purpose entities; obligors are those entities, whose assets are unavailable to the issuer's other creditors; no corporate financial covenants; rank 1 reflects security over those assets and no source states a ranking; amount is carrying value at 2026-09-30; cumulative debt over LTM reported EBITDA of 1566.955 |
| Revolving credit facility, undrawn | 2 | No | 0.000 | 0.99 | US$m | Senior unsecured; obligor is the Company; nothing drawn and no letters of credit at 2026-09-30; guarantors not stated; amount is carrying value at 2026-09-30; cumulative debt over LTM reported EBITDA of 1566.955 |
| 2027 convertible notes | 2 | No | 573.540 | 1.35 | US$m | Convertible senior notes of the Company; the sources call them senior and state no security or guarantor; amount is carrying value at 2026-09-30; cumulative debt over LTM reported EBITDA of 1566.955 |
| 2030 senior notes | 2 | No | 1187.619 | 2.11 | US$m | Senior unsecured notes of the Company; guarantors not stated; amount is carrying value at 2026-09-30; cumulative debt over LTM reported EBITDA of 1566.955 |
| 2031 senior notes | 2 | No | 993.421 | 2.74 | US$m | Senior unsecured notes of the Company; guarantors not stated; amount is carrying value at 2026-09-30; cumulative debt over LTM reported EBITDA of 1566.955 |
| 2032 senior notes | 2 | No | 1979.887 | 4.01 | US$m | Senior unsecured notes of the Company; guarantors not stated; amount is carrying value at 2026-09-30; cumulative debt over LTM reported EBITDA of 1566.955 |
| 2033 senior notes | 2 | No | 988.560 | 4.64 | US$m | Senior unsecured notes of the Company; guarantors not stated; amount is carrying value at 2026-09-30; cumulative debt over LTM reported EBITDA of 1566.955 |

The order within rank 2 follows maturity, not a stated ranking, and the legal rank of the warehouse facilities relative to the unsecured debt is the issuer's security over entity-level assets, not a ranking any source states.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), LTM to 2026-09-30 | 1566.955 | US$m | Opening: reported EBITDA, operating income plus depreciation and amortization |
| Add: Share-based compensation expense | 1038.104 | US$m | Issuer add-back, LTM built from FY2025, 9M 2026 and 9M 2025 |
| Add: Restructuring share-based compensation expense | 126.639 | US$m | Issuer add-back, LTM built from FY2025, 9M 2026 and 9M 2025 |
| Add: Acquisition-related and integration costs | 1.446 | US$m | Issuer add-back, LTM built from FY2025, 9M 2026 and 9M 2025 |
| Add: Contingencies, restructuring and other charges | 1597.003 | US$m | Issuer add-back, LTM built from FY2025, 9M 2026 and 9M 2025 |
| Add: Loss on disposal of property and equipment | 6.258 | US$m | Issuer add-back, LTM built from FY2025, 9M 2026 and 9M 2025 |
| Add: Acquired deferred revenue and cost adjustment | 0.024 | US$m | Issuer add-back, LTM built from FY2025, 9M 2026 and 9M 2025 |
| EBITDA (Adjusted), LTM to 2026-09-30 | 4336.429 | US$m | Closing: issuer-adjusted EBITDA; the issuer prints a dash for goodwill and intangible asset impairment in FY2025 and both nine-month periods, so no step is shown |

Contingency and restructuring charges and share-based compensation make up nearly all of the add-backs; the bridge states the issuer's own adjustments and does not judge whether they will recur.

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Reported-fact summary of the statements, debt and cash | Ready | Statements tie: balance sheet, cash flow totals and cash roll-forward agree in every column | None |
| Leverage and interest cover on reported and adjusted EBITDA | Ready with Limitations | Reported EBITDA is derived because the issuer states none; total debt includes matched warehouse funding; interim ratios use LTM EBITDA; cash interest base may include warehouse interest | Read the notes-only and adjusted ratios beside the headline |
| Liquidity adequacy | Ready with Limitations | Payment timing of the Department of Justice accrual is not stated; part of cash is deposit-funded; warehouse availability is restricted to funding receivables | Update when the final agreement is published |
| Covenant headroom | Not Ready | The maximum total net leverage ratio level and definition are not printed in any source | Obtain the restated credit agreement |
| Segment-level leverage and perimeter | Not Ready | Assets by reportable segment are not presented; no stand-alone parent or bank statements | Request segment assets and parent-only data if needed |
| Year-earlier interim comparison of leverage | Ready with Limitations | No balance sheet at 2025-09-30 is in the sources, so interim leverage is shown for 2026-09-30 only | Add the third-quarter 2025 report if a year-earlier interim is needed |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 46 |
| Calculated | 38 |
| Assumption-Based | 0 |
| Analyst Inference | 6 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 9 |
| Fields present | 27 |
| Fields total | 27 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 0 |

## Calculations

Each row works one figure from the inputs shown, in USD thousands or US$m as labelled; the money tables restate thousands in millions without rounding.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| EBITDA-FY2024 | EBITDA (Reported) FY2024 | Operating income 892327 + depreciation and amortization 376127 (USD thousands) | 1268454 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 7 |
| EBITDA-FY2025 | EBITDA (Reported) FY2025 | Operating income 1708406 + depreciation and amortization 369529 (USD thousands) | 2077935 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 7 |
| EBITDA-9M2025 | EBITDA (Reported) 9M 2025 | Operating income 1223035 + depreciation and amortization 273464 (USD thousands) | 1496499 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 7 |
| EBITDA-9M2026 | EBITDA (Reported) 9M 2026 | Operating income 703371 + depreciation and amortization 282148 (USD thousands) | 985519 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 143; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 7 |
| DEBT-FY2024 | Total Debt at FY2024 | Current portion 999497 + long-term debt 5105939 + warehouse current 185000 + warehouse non-current 1296680 (USD thousands) | 7587116 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| DEBT-FY2025 | Total Debt at FY2025 | Current portion 1573259 + long-term debt 5715759 + warehouse current 466942 + warehouse non-current 897941 (USD thousands) | 8653901 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| DEBT-2026-09-30 | Total Debt at 2026-09-30 | Current portion 0 + long-term debt 5723027 + warehouse current 447437 + warehouse non-current 1096103 (USD thousands) | 7266567 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| NETDEBT-FY2024 | Net debt at FY2024 | Gross debt 7587.116 - cash 8075.247 (US$m) | -488.131 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| NETDEBT-FY2025 | Net debt at FY2025 | Gross debt 8653.901 - cash 6564.092 (US$m) | 2089.809 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| NETDEBT-2026-09-30 | Net debt at 2026-09-30 | Gross debt 7266.567 - cash 7859.314 (US$m) | -592.747 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| LTM-EBITDA | LTM to 2026-09-30: reported EBITDA, adjusted EBITDA and cash interest | Reported 2077935 + 985519 - 1496499; adjusted 3466568 + 3406739 - 2536878; cash interest 246331 + 270946 - 124220 (USD thousands) | Reported 1566955; adjusted 4336429; cash interest 393057 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 125, 141, 143, 211; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 7, 40, 53–54 |
| LEV-2026-09-30 | Leverage and cover at 2026-09-30 | Gross debt 7266.567 / reported EBITDA 1566.955; / adjusted EBITDA 4336.429; net debt -592.747 / reported EBITDA (US$m) | 4.64x reported; 1.68x adjusted; net -0.38x reported | Calculation register |
| COVER-2026-09-30 | Interest cover at 2026-09-30 | Reported EBITDA 1566.955 / cash interest 393.057; adjusted EBITDA 4336.429 / cash interest (US$m) | 3.99x reported; 11.03x adjusted | Calculation register |
| BRIDGE-LTM | Adjusted EBITDA bridge, LTM to 2026-09-30 | Reported EBITDA 1566955 + add-backs (each FY2025 + 9M 2026 - 9M 2025): Share-based compensation expense 1038104; Restructuring share-based compensation expense 126639; Acquisition-related and integration costs 1446; Contingencies, restructuring and other charges 1597003; Loss on disposal of property and equipment 6258; Acquired deferred revenue and cost adjustment 24 (USD thousands) | Add-backs total 2769474; 1566955 + 2769474 = 4336429, equal to adjusted EBITDA 4336429 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| BRIDGE-FY2024 | Adjusted EBITDA bridge check, FY2024 | Reported EBITDA 1268454 + add-backs 1760577 (USD thousands) | 3029031, equal to adjusted EBITDA 3029031 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| BRIDGE-FY2025 | Adjusted EBITDA bridge check, FY2025 | Reported EBITDA 2077935 + add-backs 1388633 (USD thousands) | 3466568, equal to adjusted EBITDA 3466568 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| BRIDGE-9M2025 | Adjusted EBITDA bridge check, 9M 2025 | Reported EBITDA 1496499 + add-backs 1040379 (USD thousands) | 2536878, equal to adjusted EBITDA 2536878 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| BRIDGE-9M2026 | Adjusted EBITDA bridge check, 9M 2026 | Reported EBITDA 985519 + add-backs 2421220 (USD thousands) | 3406739, equal to adjusted EBITDA 3406739 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54 |
| LADDER-2026-09-30 | Maturity ladder total at 2026-09-30 | 1090.039 + 549.437 + 479.064 + 1200.000 + 1000.000 + 2000.000 + 1000.000 (US$m) | 7318.540, equal to notes principal 5775.000 plus warehouse principal 1543.540 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27, 30 |
| RECON-2026-09-30 | Principal to carrying value at 2026-09-30 | Principal 7318.540 + reconciling items -51.973 (unamortised issuance costs of the notes, -51.973; warehouse carrying value equals principal) (US$m) | 7266.567, equal to gross debt | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4, 27, 30 |
| STACK-2026-09-30 | Cumulative leverage of the debt stack | Running sum of amounts to the 2033 senior notes 7266.567 / reported LTM EBITDA 1566.955 (US$m) | 4.64x, equal to total debt / EBITDA | Chart data: debt stack |
| TIE-BS-FY2024 | Balance sheet identity, FY2024 | Total liabilities 15542633 + total equity 21234962 (USD thousands) | 36777595, equal to total assets 36777595 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| TIE-BS-FY2025 | Balance sheet identity, FY2025 | Total liabilities 17380005 + total equity 22169882 (USD thousands) | 39549887, equal to total assets 39549887 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| TIE-BS-9M2026 | Balance sheet identity, 9M 2026 | Total liabilities 18365501 + total equity 22870186 (USD thousands) | 41235687, equal to total assets 41235687 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4–5 |
| TIE-CF-FY2024 | Cash flow identities, FY2024 | Operating 1707350 + investing 649952 + financing 1952662 + FX -88539; opening 9009087 + change (USD thousands) | Net change 4221425; closing 13230512, equal to closing cash 13230512 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| TIE-CF-FY2025 | Cash flow identities, FY2025 | Operating 2579714 + investing -2801932 + financing -613099 + FX 86081; opening 13230512 + change (USD thousands) | Net change -749236; closing 12481276, equal to closing cash 12481276 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| TIE-CF-9M2025 | Cash flow identities, 9M 2025 | Operating 1958714 + investing -671814 + financing -652901 + FX 80515; opening 13230512 + change (USD thousands) | Net change 714514; closing 13945026, equal to closing cash 13945026 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| TIE-CF-9M2026 | Cash flow identities, 9M 2026 | Operating 3001581 + investing -653602 + financing -896369 + FX 4397; opening 12481276 + change (USD thousands) | Net change 1456007; closing 13937283, equal to closing cash 13937283 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8 |
| TIE-DEBT-NOTE-2026-09-30 | Notes table to balance sheet, 2026-09-30 | Net carrying values 1,187,619 + 993,421 + 1,979,887 + 988,560 + 573,540 (USD thousands) | 5,723,027, equal to long-term debt 5,723,027; no current portion | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4, 27 |
| TIE-DEBT-NOTE-FY2025 | Notes table to balance sheet, FY2025 | Current portion 1,573,259 + long-term debt 5,715,759 (USD thousands) | 7,289,018, equal to the notes table total 7,289,018 | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 141, 184 |
| TIE-PRESENTATION | Third-quarter re-presentation of December 31, 2025 | Other current assets 3,589,925 + short-term investments 517,777; other non-current assets 323,375 + 188,887 + 214,929 + 754,837; other non-current liabilities 1,173 + 257,126 + 123,546 (USD thousands) | 4,107,702; 1,482,028; 381,845, each equal to the third-quarter report's December 31, 2025 line | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 140–141; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 4 |

## Gaps

- The level and definition of the maximum total net leverage ratio in the restated credit agreement are not printed in any source, so covenant headroom is not calculable for any period; this restricts every conclusion about revolver availability; severity High; the action is to obtain the restated credit agreement.
- The Department of Justice resolution is an agreement in principle accrued at USD 764.000 million at September 30, 2026 with no final agreement, payment amount, schedule or funding source stated, so no pro forma net debt can be built and the timing of the cash outflow against liquidity is not established; severity High; the action is to update the figures when the agreement is signed.
- No balance sheet at September 30, 2025 is in the sources, so the nine months 2025 column of the balance sheet is not supplied and interim leverage is stated for September 30, 2026 only; severity Medium; the action is to add the third-quarter 2025 report.
- Assets by reportable segment are not presented and no stand-alone parent or bank-subsidiary statements are supplied, so corporate cash and debt cannot be separated from bank, customer-funds and warehouse items except through the notes; severity Medium; the action is to request segment assets and parent-only data.
- No borrower scope, guarantor or restricted group is named for the notes, the revolver or the warehouse facilities, so the obligor scope in the debt stack states only the Company and the warehouse special-purpose entities; severity Medium; the action is to obtain the indentures and the credit agreement.
- The balance sheet lines the third-quarter report folds into other lines (property and equipment, long-term debt securities, operating lease assets, deferred tax liabilities and operating lease liabilities) are not supplied for September 30, 2026, and short-term investments are not shown separately; severity Low; the action is to use the quarterly balance sheet detail if filed.
- Cash flow statement dashes are shown as not supplied rather than zero: proceeds from senior notes in nine months 2026, repayments of senior notes in the earlier columns, convertible note redemptions in FY2024, and the goodwill and intangible impairment add-back in FY2025 and both nine-month periods; the current portion of long-term debt at September 30, 2026 is read as nil because the notes table total equals long-term debt; severity Low; no action beyond the filings.
- Discrete quarterly cash flows are not printed, only cumulative figures, so no third-quarter 2026 or 2025 cash flow column is built; a third-quarter column could be derived as nine months less six months from the second-quarter report if discrete quarters are needed; severity Low.
- The floor and margin of the revolver and warehouse facilities, the commitment of each warehouse facility (only an aggregate printed as USD 2.4 billion) and the definition of liquidity in the revolver maturity test are not printed; severity Low; the action is to obtain the credit agreement and facility documents.
- Whether cash interest paid includes interest on the warehouse facilities is not stated, so interest cover is on an interest base of uncertain breadth; severity Low; the action is to confirm with the issuer.
- Reported EBITDA is calculated because the issuer states only Adjusted EBITDA; share-based compensation is not added back, so reported EBITDA is conservative against the issuer's measure; severity Low; the action is none, both measures are shown.
- Warehouse availability at December 31, 2024 is not printed, so the FY2024 liquidity row excludes it; severity Low; the action is none.

## Next module

The orchestrator selects the next module.
