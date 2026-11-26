---
issuer_id: axon-1069183
module_id: CP-1
analysis_date: 2026-11-18
module_status: Complete with limitations
---

# Financial foundation: Axon Enterprise, Inc.

## Request

Financial foundation for Axon Enterprise, Inc. as of 2026-11-18 on the credit snapshot pathway, built from the 2024 and 2025 annual reports and the three 2026 quarterly reports. Scope: statements, debt, liquidity, last-twelve-month metrics and definition conflicts, with no credit recommendation.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_axon_axon-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 (original report) | 2025-02-28 (signature date; the document states no filing date) | 635d2ec5b2621e23cc68d2c62a3e772d4aca47e0a247b0b2888130ee08e69fae | Original 2024 figures used only for comparison; the 2025 annual report controls the 2024 comparatives |
| 10-K_2025-12-31_axon_axon-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-24 (signature date; the document states no filing date) | 3c7e48bccb00384255c4b71c4e7bf644d3dbcb2fa7d00c3a59508b2870df2c42 | FY2025 and FY2024 statements, debt and revolver notes, covenant ratios, non-GAAP reconciliation |
| 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-06 (signature date; the document states no filing date) | f1356dd60e028595ab658423cca928a3afd3607957d5348ef8a4c3856f4fa612 | Q1 2026 and Q1 2025 statements, debt note, revolver availability |
| 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-05 (signature date; the document states no filing date) | 356d426d8c11d5806215990f0fec8e1527c1938da8d613e9c53b0076176a25b3 | Q2 2026 and six-month statements with 2025 comparatives, debt note, revolver availability |
| 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-05 (signature date; the document states no filing date) | 5112b7dee7d51acaee61185e41b946f2b6006cd3c41fe8e76e796964f4814f4b | Q3 2026 and nine-month statements with 2025 comparatives, debt, convertible notes, revolver, subsequent event |

| Supplied handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 0ed204b3de7a5f6214b4aab597aaeda3d6b208ee592d9c71a491f3a063a02280 | Source set, perimeter, version and definition conflicts, gaps already logged |

## Findings

### Bottom line

Axon's reported net leverage of 3.21x at 2026-09-30 rests on investment gains: net debt of USD 1,409.22 million against last-twelve-month reported EBITDA of USD 439.05 million, of which 57.12% is other income, so creditors should read leverage and cover on operating earnings.
Basis: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 45–46; calculation C5; calculation C18; calculation C55

The September 2026 issue of USD 1,150 million of zero-coupon convertible notes raised debt and cash together and adds no cash coupon, so cash interest cover of 4.03x reflects only the two senior note series, and the Skydio commitment of up to USD 720.0 million in cash after the quarter end is not in these figures.
Basis: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 16–20; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 33; calculation C47; calculation C66

On the issuer's adjusted EBITDA, which adds back stock-based compensation, net leverage is 1.59x, but the adjusted figures for 2025 and 2026 follow different definitions, so the two measures bracket the position rather than settle it.
Basis: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 44–46; calculation C49

### Evidence, risk and credit analysis

Net leverage on reported EBITDA rose from 0.56x at the end of 2024 to 4.89x at the end of 2025, peaked at 5.14x at 2026-03-31 and was 3.21x at 2026-09-30. Both moves came mainly from the earnings denominator: reported EBITDA fell from USD 401,724 thousand in 2024 to USD 124,570 thousand in 2025 as other income dropped and operating income turned negative, and it rebuilt to USD 439,050 thousand over the last twelve months as weak 2025 quarters rolled off and 2026 other income came in, while net debt rose from USD 609.575 million at 2025-12-31 to USD 1,409.220 million at 2026-09-30. For creditors the ratio is a poor guide to debt-service capacity because it moves with investment marks and equity compensation more than with operating cash.
Basis: 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 70; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–87; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 45–46; calculation C22; calculation C28; calculation C34; calculation C40; calculation C46

Other income, net of 250,789 thousand over the last twelve months equals 57.12% of reported EBITDA, and EBITDA before other income is 188,261 thousand, which puts net debt at 7.49x that measure. Most of the other income is mark-to-market and realised gains on strategic investments, which the filings describe as driven by observable price changes at one investee, so it can reverse and it is not cash available to service debt. The risk mechanism is that a fall in the investee's valuation would lower reported EBITDA and lift reported leverage without any change in operations.
Basis: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 15–16; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 48–49; calculation C51; calculation C52; calculation C53; calculation C54; calculation C55; calculation C56

Cash interest paid over the last twelve months was USD 108,892 thousand against an annual cash coupon of USD 108.125 million on the 2030 and 2033 notes, so cover of 4.03x on reported EBITDA and 8.13x on adjusted EBITDA is adequate today. The 2031 convertible notes carry a zero coupon, so the September 2026 issue adds no recurring cash interest, but the capped call that cost USD 114.885 million and a conversion that may be settled in cash or shares create a future cash or dilution call that interest cover does not show.
Basis: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 16–20; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 7; calculation C20; calculation C62; calculation C47; calculation C50

Operating cash flow was weak against profit. Net cash from operating activities was 225,482 thousand over the last twelve months and purchases of property and equipment were 144,570 thousand, so free cash flow was 80,912 thousand, while net income for nine months 2026 of 255,745 thousand included 257,616 thousand of non-cash gains on strategic investments. Receivables and contract assets rose 448,926 thousand and inventory rose 238,141 thousand in the nine months, partly offset by deferred revenue of 85,227 thousand, as the issuer bought materials ahead for TASER 10 and counter-drone equipment, so growth consumes cash before it converts. Free cash flow after cash interest is therefore small against the debt and against the cash the issuer has committed to Skydio, so acquisitions and investments are funded from the balance sheet and not from operations.
Basis: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 48–49; calculation C57; calculation C58; calculation C59; calculation C20

Scale is growing but operating profit is thin. Net sales were 3,417,012 thousand over the last twelve months against 2,779,536 thousand in 2025, yet income from operations was only 67,983 thousand because selling, general and administrative plus research and development expenses took 52.05% of third-quarter sales and gross margin fell to 56.68% in the quarter on a larger mix of counter-drone equipment and higher memory costs. The creditor consequence is that debt service depends on sustaining growth in subscription revenue and on cash from the balance sheet, and not yet on operating margin.
Basis: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 34–35; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 36–37; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5; calculation C51; calculation C17; calculation C60; calculation C61

Liquidity is strong against the debt. Cash and cash equivalents, short-term investments, marketable securities and the undrawn revolver together came to USD 2,146.055 million at 2026-09-30, and no note matures before March 2030. The 2031 convertible notes can become convertible at the holders' option from the first quarter of 2027 only if the share price stays at least 130% of the conversion price for 20 of 30 trading days, and the issuer may settle in cash, shares or a mix, so near-term cash calls from conversion are possible but within the issuer's choice. The Skydio agreements of 2026-11-05 allow cash of up to USD 720.0 million, of which USD 127.5 million was paid on the closing date, so a further amount of up to USD 592.5 million can leave in the next two quarters; the issuer states that the remaining cash will come from cash on hand, so the cash raised in September is largely committed.
Basis: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 23; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 33; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 46–47; calculation C63; calculation C64; calculation C65; calculation C66

Deferred revenue is a non-debt funding float: total deferred revenue was 1,177,573 thousand at 2026-09-30 against 1,074,610 thousand at 2025-12-31, and customer deposits were 17,020 thousand. It funds operations without interest and unwinds only as service is delivered, so a slowdown in subscription billings would shrink cash inflows before it shows in revenue.
Basis: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4; calculation C68; calculation C69

The strongest contrary evidence is that adjusted leverage is low and liquidity is large: net debt is 1.59x issuer-adjusted EBITDA and total liquidity of USD 2,146.055 million exceeds pro forma net debt of USD 1,536.720 million after the first Skydio payment. That view wins if the other income proves recurring and stock-based compensation is accepted as a non-cash cost; it loses if the strategic-investment marks reverse or if equity compensation has to be settled in cash, as the tax payments for net-settled awards of USD 167.156 million in nine months 2026 already show.
Basis: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 50; calculation C49; calculation C63; calculation C64

Two data-quality limits bear on every figure above. The 2025 annual report reported a material weakness in revenue-recognition controls with immaterial errors in 2023 and 2024 revenue, contract balances and remaining performance obligations, and the 2026 quarterly reports describe it as remediated by 2026-06-30. The original 2024 annual report classified the 2027 convertible notes as long-term and the 2025 annual report shows them as current; the carrying amount is the same, so debt and net debt are unaffected, but current liabilities differ.
Basis: 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 44–45; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 146–148; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 45–46; 10-K_2024-12-31_axon_axon-20241231.htm.jsonl, page 102; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 85

### Reporting periods

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q1 2025 | 2025-01-01 | 2025-03-31 |
| Q2 2025 | 2025-04-01 | 2025-06-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| H1 2025 | 2025-01-01 | 2025-06-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| Q2 2026 | 2026-04-01 | 2026-06-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1.69 | 0.56 | x | Fiscal year; carrying-value debt over reported EBITDA of the year |
| FY2025 / 2025-12-31 | 14.54 | 4.89 | x | Fiscal year; reported EBITDA is depressed by stock-based compensation and includes other income |
| 2026-03-31 | 7.00 | 5.14 | x | Last twelve months to 2026-03-31 reported EBITDA; interim, unaudited |
| 2026-06-30 | 4.99 | 3.27 | x | Last twelve months to 2026-06-30 reported EBITDA; interim, unaudited |
| 2026-09-30 | 6.53 | 3.21 | x | Last twelve months to 2026-09-30 reported EBITDA; interim, unaudited; before the Skydio commitment |

Reported EBITDA is the issuer's own unadjusted EBITDA and includes other income, net, so these ratios move with investment gains; adjusted ratios are in the calculation register.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 116.44 | x | Fiscal year; reported EBITDA of the year; cash interest paid is the cash flow statement figure |
| FY2025 / 2025-12-31 | 2.18 | x | Fiscal year; reported EBITDA is depressed by stock-based compensation and includes other income; cash interest paid is the cash flow statement figure |
| 2026-03-31 | 2.23 | x | Last twelve months to 2026-03-31 reported EBITDA; interim, unaudited; cash interest paid is the cash flow statement figure |
| 2026-06-30 | 3.15 | x | Last twelve months to 2026-06-30 reported EBITDA; interim, unaudited; cash interest paid is the cash flow statement figure |
| 2026-09-30 | 4.03 | x | Last twelve months to 2026-09-30 reported EBITDA; interim, unaudited; before the Skydio commitment; cash interest paid is the cash flow statement figure |

Cash interest paid falls on March and September coupon dates, so quarter-end last-twelve-month cover is stable only on full coupon cycles.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 454.844 | 192.2 | US$m | Cash and cash equivalents only; undrawn revolver is the issuer's available borrowing (commitment 200.0 less letters of credit 7.8); short-term investments and marketable securities are excluded |
| FY2025 / 2025-12-31 | 1,201.147 | 291.1 | US$m | Cash and cash equivalents only; undrawn revolver is the issuer's available borrowing (commitment 300.0 less letters of credit 8.9); short-term investments and marketable securities are excluded |
| 2026-03-31 | 458.921 | 291.1 | US$m | Cash and cash equivalents only; undrawn revolver is the issuer's available borrowing (commitment 300.0 less letters of credit 8.9); short-term investments and marketable securities are excluded |
| 2026-06-30 | 597.704 | 290.9 | US$m | Cash and cash equivalents only; undrawn revolver is the issuer's available borrowing (commitment 300.0 less letters of credit 9.1); short-term investments and marketable securities are excluded |
| 2026-09-30 | 1,458.817 | 490.9 | US$m | Cash and cash equivalents only; undrawn revolver is the issuer's available borrowing (commitment 500.0 less letters of credit 9.1); short-term investments and marketable securities are excluded |

Short-term investments of USD 181.587 million and marketable securities of USD 14.751 million at 2026-09-30 are not in Cash, so total liquidity is higher than the two columns show.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 | 0.000 | US$m | No instrument matures in this year; the principal table lists three note series only and the revolver is undrawn |
| 2027 | 0.000 | US$m | No instrument matures in this year; the principal table lists three note series only and the revolver is undrawn |
| 2028 | 0.000 | US$m | No instrument matures in this year; the principal table lists three note series only and the revolver is undrawn |
| 2029 | 0.000 | US$m | No instrument matures in this year; the principal table lists three note series only and the revolver is undrawn |
| 2030 | 1,000.000 | US$m | 2030 Notes, 6.125% senior notes due 2030-03-15 |
| 2031 | 1,150.000 | US$m | 2031 Notes, 0% convertible senior notes due 2031-09-15; holders may require repurchase on or around 2031-03-20 |
| 2032 | 0.000 | US$m | No instrument matures in this year; the principal table lists three note series only and the revolver is undrawn |
| 2033 | 750.000 | US$m | 2033 Notes, 6.250% senior notes due 2033-03-15 |

The ladder is drawn at 2026-09-30 on contractual principal and ignores conversion, redemption and the earlier holder repurchase option of the 2031 notes.

### Financials and credit metrics

| Metric (US$m unless stated) | FY2024 | FY2025 | LTM to 2026-03-31 | LTM to 2026-06-30 | LTM to 2026-09-30 |
| --- | --- | --- | --- | --- | --- |
| Net sales | 2,082.526 | 2,779.536 | 2,983.248 | 3,219.099 | 3,417.012 |
| Gross margin | 1,241.380 | 1,658.125 | 1,769.672 | 1,912.376 | 2,000.006 |
| Income (loss) from operations | 58.540 | -62.076 | -24.040 | 23.774 | 67.983 |
| Other income (loss), net | 286.369 | 99.857 | 174.466 | 214.072 | 250.789 |
| Net income | 377.034 | 124.656 | 205.988 | 199.298 | 258.490 |
| EBITDA (Reported) | 401.724 | 124.570 | 247.366 | 347.077 | 439.050 |
| EBITDA (Adjusted) | 521.375 | 710.155 | 756.615 | 827.007 | 885.657 |
| Cash interest paid | 3.450 | 57.173 | 110.799 | 110.093 | 108.892 |
| Net cash from operating activities | 408.312 | 211.339 | 154.028 | 265.809 | 225.482 |
| Purchases of property and equipment | -78.785 | -136.258 | -134.521 | -132.617 | -144.570 |
| Total debt (balance sheet carrying value) | 680.289 | 1,810.722 | 1,730.987 | 1,731.817 | 2,868.037 |
| Cash and cash equivalents | 454.844 | 1,201.147 | 458.921 | 597.704 | 1,458.817 |
| Net debt | 225.445 | 609.575 | 1,272.066 | 1,134.113 | 1,409.220 |
| Total debt / EBITDA (x) | 1.69 | 14.54 | 7.00 | 4.99 | 6.53 |
| Net debt / EBITDA (x) | 0.56 | 4.89 | 5.14 | 3.27 | 3.21 |
| EBITDA / cash interest (x) | 116.44 | 2.18 | 2.23 | 3.15 | 4.03 |
| Total debt / adjusted EBITDA (x) | 1.30 | 2.55 | 2.29 | 2.09 | 3.24 |
| Net debt / adjusted EBITDA (x) | 0.43 | 0.86 | 1.68 | 1.37 | 1.59 |
| Adjusted EBITDA / cash interest (x) | 151.12 | 12.42 | 6.83 | 7.51 | 8.13 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 680.289 | 454.844 | 225.445 | US$m | Reported; gross debt is the 2027 convertible notes at carrying value, principal 690.000 less issuance costs 9.711; the 2025 annual report shows it as current |
| FY2025 / 2025-12-31 | 1,810.722 | 1,201.147 | 609.575 | US$m | Reported; 2027 notes 81.110, 2030 and 2033 notes 1,750.000, principal 1,831.110 less issuance costs 20.388; current portion 80.552 |
| 2026-03-31 | 1,730.987 | 458.921 | 1,272.066 | US$m | Reported; 2030 and 2033 notes only, principal 1,750.000 less issuance costs 19.013; 2027 notes settled in February 2026 |
| 2026-06-30 | 1,731.817 | 597.704 | 1,134.113 | US$m | Reported; 2030 and 2033 notes only, principal 1,750.000 less issuance costs 18.183 |
| 2026-09-30 | 2,868.037 | 1,458.817 | 1,409.220 | US$m | Reported; 2030, 2031 and 2033 notes, principal 2,900.000 less issuance costs 31.963; no leases or securitisation in debt lines; cash excludes short-term investments 181.587 and marketable securities 14.751 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 2,900.000 | -31.963 | 2,868.037 | US$m | Principal of the 2030, 2031 and 2033 notes less unamortized debt issuance costs of 31.963; no other debt is carried and the revolver is undrawn |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Skydio primary investment closed, cash paid | 2026-11-05 | 127.5 | 1,536.720 | 3.50 | US$m | Cash of USD 127.5 million of an aggregate USD 254.9 million paid on the closing date; the other half is a commitment to deliver shares; net debt at 2026-09-30 plus the cash paid, over last-twelve-month reported EBITDA of 439.050; source: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 33 and 47 |
| Skydio tender offer and secondary purchases, cash share | Not supplied: the source states the fourth quarter of 2026 and the first quarter of 2027 only | Not supplied: the cash share depends on the tender offer results | Not supplied: the cash share is not yet known | Not supplied: the cash share is not yet known | US$m | Investments of up to USD 968.6 million remain, to be settled with cash and shares; the total cash for all Skydio investments is capped at about USD 720.0 million, so at most USD 592.5 million of cash remains; source: 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 33 and 47 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2,082.526 | 521.375 | US$m | Fiscal year; revenue is net sales; adjusted EBITDA is the issuer-adjusted measure, whose definition changed in 2026 and was not recast for 2025 |
| FY2025 / 2025-12-31 | 2,779.536 | 710.155 | US$m | Fiscal year; revenue is net sales; adjusted EBITDA is the issuer-adjusted measure, whose definition changed in 2026 and was not recast for 2025 |
| 2026-03-31 | 2,983.248 | 756.615 | US$m | Last twelve months to 2026-03-31; revenue is net sales; adjusted EBITDA is the issuer-adjusted measure, whose definition changed in 2026 and was not recast for 2025 |
| 2026-06-30 | 3,219.099 | 827.007 | US$m | Last twelve months to 2026-06-30; revenue is net sales; adjusted EBITDA is the issuer-adjusted measure, whose definition changed in 2026 and was not recast for 2025 |
| 2026-09-30 | 3,417.012 | 885.657 | US$m | Last twelve months to 2026-09-30; revenue is net sales; adjusted EBITDA is the issuer-adjusted measure, whose definition changed in 2026 and was not recast for 2025 |

Every row covers twelve months, but the issuer widened its adjustments in 2026, so the last three rows are not like for like with the first two.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: no source states the legal rank or security of the 2030, 2031 and 2033 notes | Not supplied: the filings name the notes senior notes but state no rank | Not supplied: the filings state no security for the notes | Not supplied: not stated without a rank | Not supplied: not stated without a rank | US$m | The revolver is stated as senior unsecured and is undrawn; no subsidiary guarantees the notes; the indentures are not supplied, so no stack is drawn |

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported) FY2025 | 124.570 | US$m | Issuer-stated EBITDA of the year; opening amount |
| Stock-based compensation expense | 610.151 | US$m | Issuer-stated non-GAAP adjustment, as printed |
| Unrealized and realized (gains) on investments and marketable securities, net | -134.658 | US$m | Issuer-stated non-GAAP adjustment, as printed |
| Realized (gains) on previously held minority interests acquired in business combinations, net | -2.193 | US$m | Issuer-stated non-GAAP adjustment, as printed |
| Debt inducement expense | 38.868 | US$m | Issuer-stated non-GAAP adjustment, as printed |
| Severance costs | 31.816 | US$m | Issuer-stated non-GAAP adjustment, as printed |
| Transaction costs related to strategic investments and acquisitions | 15.588 | US$m | Issuer-stated non-GAAP adjustment, as printed |
| Payroll taxes related to Employee XSP vesting and 2018 CEO Performance Award option exercises | 14.768 | US$m | Issuer-stated non-GAAP adjustment, as printed |
| Litigation and regulatory costs | 9.579 | US$m | Issuer-stated non-GAAP adjustment, as printed |
| Loss on disposal, abandonment, and impairment of property, equipment and intangible assets, net | 1.059 | US$m | Issuer-stated non-GAAP adjustment, as printed |
| Inventory step-up amortization | 0.607 | US$m | Issuer-stated non-GAAP adjustment, as printed |
| EBITDA (Adjusted) FY2025 | 710.155 | US$m | Issuer-adjusted EBITDA of the year; closing amount; reported measure plus the ten adjustments above |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 14 |
| Calculated | 6 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 14 |
| Fields total | 15 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 10 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_axon_axon-20241231.htm.jsonl | Annual report (Form 10-K) | FY2024, with FY2023 and FY2022 | USD | thousands | Consolidated | US GAAP | Tier 1 audited statements | Prior-year comparison only | Original report; the 2024 debt classification was restated afterwards and the 2025 annual report controls |
| 10-K_2025-12-31_axon_axon-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025, with FY2024 and FY2023 | USD | thousands | Consolidated | US GAAP | Tier 1 audited statements | Annual statements, debt, covenant ratios, non-GAAP reconciliation | Adverse internal-control conclusion at 2025-12-31 (revenue recognition) |
| 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Q1 2026 and Q1 2025 | USD | thousands | Consolidated | US GAAP | Tier 2b unaudited | Q1 statements and 2025 comparatives | Unaudited; disclosure controls reported as not effective at 2026-03-31 |
| 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Q2 and H1 2026 with 2025 comparatives | USD | thousands | Consolidated | US GAAP | Tier 2b unaudited | Q2 and half-year statements | Unaudited |
| 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Q3 and 9M 2026 with 2025 comparatives | USD | thousands | Consolidated | US GAAP | Tier 2b unaudited | Latest statements, debt, liquidity, subsequent event | Unaudited; Skydio events are after the balance-sheet date |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Axon Enterprise, Inc. | Issuer of the senior and convertible notes and borrower under the revolver; no guarantor or restricted group is stated | December 31 | USD | thousands | Parent and all subsidiaries; no subsidiary guarantees the notes | US GAAP | FY2024, FY2025, Q1 2026, Q2 2026, Q3 2026 and the 2025 comparatives |

Subsequent events: the Skydio agreements dated 2026-11-05 and the closing of the primary investment on the same day follow the balance-sheet date of 2026-09-30 and are held in the post-balance-sheet table, not in period figures. The Patent Trial and Appeal Board decision of 2026-10-07 on two patents has no stated effect on debt or cash.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Money tables restate statement thousands as millions with three decimals | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 | Scale only | USD 2,868,037 thousand | US$m 2,868.037 | The money unit is millions; three decimals keep every printed digit | All |
| Prepaid expenses and other current assets summed for the 2026 quarters | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 | Aggregation | Two printed lines | One line | The annual reports print one combined line, the quarterly reports two; the sum keeps the series comparable | Q1 2026, Q2 2026, Q3 2026 |
| Dash in a current portion of notes payable read as nil | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 16 | Presentation | Dash | 0 | The debt note states no current portion and that no 2027 notes remain | Q1 2026, Q2 2026, Q3 2026, FY2024 long-term line |
| Dash in a cash flow line left as Not supplied | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 7 | Presentation | Dash | Not supplied | The method treats a dash as a missing value; subtotals are the printed totals | Cash flow lines marked in the table |
| Last twelve months built from the full year, current stub and prior-year stub | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 5 and 7 | Derived period | Reported periods | Last twelve months | The method defines the construction; every component is printed | Q1 2026, Q2 2026, Q3 2026 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q1 2025 | Q2 2025 | Q3 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales from products | 1,221,292 | 1,576,864 | 340,896 | 376,360 | 405,399 | 452,821 | 506,553 | 471,524 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Net sales from services | 861,234 | 1,202,672 | 262,737 | 292,178 | 305,242 | 354,524 | 397,836 | 437,030 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Net sales | 2,082,526 | 2,779,536 | 603,633 | 668,538 | 710,641 | 807,345 | 904,389 | 908,554 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Cost of product sales | 618,136 | 809,303 | 170,181 | 193,507 | 203,173 | 232,156 | 243,861 | 268,629 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Cost of service sales | 223,010 | 312,108 | 67,713 | 71,288 | 80,120 | 97,903 | 114,081 | 124,947 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Cost of sales | 841,146 | 1,121,411 | 237,894 | 264,795 | 283,293 | 330,059 | 357,942 | 393,576 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Gross margin | 1,241,380 | 1,658,125 | 365,739 | 403,743 | 427,348 | 477,286 | 546,447 | 514,978 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Selling, general and administrative | 741,247 | 1,035,893 | 223,509 | 242,212 | 252,803 | 259,093 | 290,982 | 280,496 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Research and development | 441,593 | 684,308 | 151,023 | 162,567 | 176,674 | 188,950 | 208,687 | 192,402 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Total operating expenses | 1,182,840 | 1,720,201 | 374,532 | 404,779 | 429,477 | 448,043 | 499,669 | 472,898 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Income (loss) from operations | 58,540 | -62,076 | -8,793 | -1,036 | -2,129 | 29,243 | 46,778 | 42,080 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Interest income | 43,693 | 75,431 | 10,604 | 23,253 | 23,941 | 10,611 | 6,815 | 5,657 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Interest expense | -7,098 | -94,238 | -7,821 | -28,686 | -28,912 | -28,643 | -28,101 | -28,337 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Other income (loss), net | 286,369 | 99,857 | 114,401 | -32,414 | 22,803 | 189,010 | 7,192 | 59,520 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Income before provision for income taxes | 381,504 | 18,974 | 108,391 | -38,883 | 15,703 | 200,221 | 32,684 | 78,920 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Provision for (benefit from) income taxes | 4,470 | -105,682 | 20,411 | -75,000 | 17,889 | 30,909 | 3,257 | 21,914 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Net income | 377,034 | 124,656 | 87,980 | 36,117 | -2,186 | 169,312 | 29,427 | 57,006 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 85–86; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 5 |
| Depreciation and amortization (EBITDA reconciliation) | 56,815 | 86,789 | 19,195 | 19,324 | 21,310 | 29,346 | 31,615 | 32,357 | USD thousands | Reported in the non-GAAP reconciliation; differs from the cash flow statement figure | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 70; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, page 31; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 38–39; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 45–46 |
| EBITDA (Reported) | 401,724 | 124,570 | 124,803 | -14,126 | 41,984 | 247,599 | 85,585 | 133,957 | USD thousands | Issuer-stated EBITDA: net income plus depreciation and amortization plus interest expense less investment interest income plus income taxes; unadjusted and includes other income, net | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 70; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, page 31; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 38–39; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 45–46 |
| EBITDA (Adjusted) | 521,375 | 710,155 | 155,170 | 171,632 | 177,010 | 201,630 | 242,024 | 235,660 | USD thousands | Issuer-stated adjusted EBITDA; adds back stock-based compensation, other income and other items; 2026 definition widened and not recast for 2025 | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 70; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, page 31; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 38–39; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 45–46 |
| Segment net sales: Connected Devices | 1,221,292 | 1,576,864 | 340,896 | 376,360 | 405,399 | 452,821 | 506,553 | 471,524 | USD thousands | Reported segment revenue; equals the product or service line | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 135–136; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, page 10; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 11–12; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 11–12 |
| Segment net sales: Software and Services | 861,234 | 1,202,672 | 262,737 | 292,178 | 305,242 | 354,524 | 397,836 | 437,030 | USD thousands | Reported segment revenue; equals the product or service line | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 135–136; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, page 10; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 11–12; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 11–12 |
| Corporate and eliminations | Not supplied: no such line is printed | Not supplied: no such line is printed | Not supplied: no such line is printed | Not supplied: no such line is printed | Not supplied: no such line is printed | Not supplied: no such line is printed | Not supplied: no such line is printed | Not supplied: no such line is printed | USD thousands | The two segments sum to total net sales | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 135–136; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, page 10; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 11–12; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 11–12 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | Q1 2025 | H1 2025 | 9M 2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 377,034 | 124,656 | 87,980 | 124,097 | 121,911 | 169,312 | 198,739 | 255,745 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Stock-based compensation | 382,604 | 634,231 | 140,239 | 279,483 | 425,635 | 134,701 | 278,697 | 435,062 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Gain on strategic investments and marketable securities, net | -283,217 | -139,969 | -143,921 | -111,754 | -134,647 | -191,090 | -197,873 | -257,616 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Debt inducement expense | Not supplied: the filing prints a dash | 38,868 | 28,666 | 28,666 | 28,584 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Depreciation and amortization | 48,425 | 83,161 | 19,453 | 36,610 | 56,216 | 30,361 | 62,824 | 96,059 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Provision for bad debts and inventory | 20,073 | 11,348 | 3,800 | 6,254 | 8,828 | 1,968 | 2,630 | 7,208 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Deferred income taxes | -85,096 | -82,679 | -48,768 | -70,065 | -53,696 | 18,020 | 11,456 | 36,093 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Noncash lease expense | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | 7,026 | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | 10,962 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Other noncash items | 21,177 | 23,467 | 9,515 | 19,278 | 8,904 | 11,695 | 18,466 | 27,913 | USD thousands | Reported; the 2026 nine-month report prints noncash lease expense on its own line, earlier reports did not | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Receivables and contract assets | -245,842 | -505,560 | -73,565 | -212,833 | -366,053 | 48,915 | -256,919 | -448,926 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Inventory | 607 | -81,951 | -16,986 | -48,098 | -58,177 | -64,713 | -145,099 | -238,141 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Deferred revenue | 155,641 | 83,476 | 33,505 | -51,143 | 21,556 | -40,295 | -35,334 | 85,227 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Accounts payable, accrued and other liabilities | 54,519 | 286,885 | 8,611 | 21,175 | 44,730 | -151,047 | 105,531 | 108,786 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Prepaid expenses and other assets | -37,613 | -264,594 | -22,735 | -87,580 | -116,713 | 656 | -54,558 | -110,125 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Net Cash from Operating Activities | 408,312 | 211,339 | 25,794 | -65,910 | -5,896 | -31,517 | -11,440 | 8,247 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Purchases of investments | -793,419 | -2,076,304 | -1,079,169 | -1,793,862 | -2,045,738 | -291,952 | -302,844 | -490,743 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Business combinations, net of cash acquired | -621,817 | -646,875 | Not supplied: the filing prints a dash | -3,809 | -22,809 | -549,681 | -551,593 | -552,018 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Proceeds from call, maturity, and sale of investments | 1,003,394 | 2,134,556 | 401,811 | 756,654 | 1,644,556 | 249,345 | 434,345 | 509,430 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Purchases of property and equipment | -78,785 | -136,258 | -24,862 | -47,815 | -74,450 | -23,125 | -44,174 | -82,762 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Other investing, net | 54 | -49 | 3 | 83 | -49 | -1,524 | -1,496 | -2,201 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Net Cash from Investing Activities | -490,573 | -724,930 | -702,217 | -1,088,749 | -498,490 | -616,937 | -465,762 | -618,294 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Net proceeds from equity offering | Not supplied: the filing prints a dash | 489,554 | Not supplied: line not printed in that filing | 183,960 | 362,241 | Not supplied: line not printed in that filing | 100,477 | 100,259 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Proceeds from issuance of notes | Not supplied: the filing prints a dash | 1,750,000 | 1,750,000 | 1,750,000 | 1,750,000 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | 1,150,000 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Proceeds from options exercised | 14,576 | Not supplied: the filing prints a dash | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Purchase of capped calls related to the 2031 convertible senior notes | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: the filing prints a dash | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | -114,885 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Principal payments for conversion and redemption of convertible debt | Not supplied: the filing prints a dash | -608,890 | -407,453 | -407,453 | -407,472 | -81,110 | -81,110 | -81,110 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Payments to third parties for debt issuance, amendments, conversion, redemption and capped call activity | Not supplied: the filing prints a dash | -26,994 | -24,210 | -24,735 | -26,888 | -964 | -964 | -17,311 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Income and payroll tax payments for net-settled stock awards | -58,178 | -350,981 | -5,035 | -192,835 | -209,631 | -10,210 | -140,192 | -167,156 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Other financing, net | -1,835 | -224 | -76 | -76 | -226 | -4 | -829 | 671 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Net Cash from Financing Activities | -45,437 | 1,252,465 | 1,313,226 | 1,308,861 | 1,468,024 | -92,288 | -122,618 | 870,468 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| FX Effect on Cash | -6,209 | 7,756 | 1,192 | 6,497 | 5,741 | -1,495 | -3,949 | -1,786 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Net Cash Change | -133,907 | 746,630 | 637,995 | 160,699 | 969,379 | -742,237 | -603,769 | 258,635 | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Opening Cash | 600,670 | 466,763 | 466,763 | 466,763 | 466,763 | 1,213,393 | 1,213,393 | 1,213,393 | USD thousands | Reported; includes restricted cash | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Closing Cash | 466,763 | 1,213,393 | 1,104,758 | 627,462 | 1,436,142 | 471,156 | 609,624 | 1,472,028 | USD thousands | Reported; includes restricted cash | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Cash Interest Paid | 3,450 | 57,173 | 498 | 1,204 | 56,468 | 54,124 | 54,124 | 108,187 | USD thousands | Reported supplemental disclosure; interest paid is in operating activities | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |
| Cash paid for income taxes, net of refunds | 67,845 | 51,121 | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | Not supplied: line not printed in that filing | USD thousands | Reported; year to date as printed | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 87–88; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 5–6; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 6–7 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 454,844 | 1,201,147 | 458,921 | 597,704 | 1,458,817 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Short-term investments | 333,235 | 505,417 | 260,000 | 75,703 | 181,587 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Marketable securities | 198,270 | 27,213 | 18,052 | 19,126 | 14,751 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Accounts and notes receivable, net | 547,572 | 777,486 | 674,598 | 768,637 | 838,294 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Contract assets, net | 367,929 | 582,630 | 641,597 | 750,950 | 866,856 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Inventory | 265,316 | 341,811 | 408,010 | 486,556 | 579,225 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Prepaid expenses and other current assets | 130,315 | 277,348 | 282,952 | 306,029 | 342,687 | USD thousands | Reported for the annual columns; sum of two printed lines for the 2026 quarters | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Total current assets | 2,297,481 | 3,713,052 | 2,744,130 | 3,004,705 | 4,282,217 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Property and equipment, net | 247,324 | 330,979 | 336,443 | 341,507 | 357,342 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Deferred tax assets, net | 304,282 | 359,803 | 339,546 | 345,500 | 333,585 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Intangible assets, net | 175,157 | 196,972 | 295,069 | 281,583 | 268,817 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Goodwill | 756,838 | 1,370,189 | 1,894,376 | 1,898,827 | 1,885,348 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Long-term notes receivable, net | 3,460 | 6,066 | 1,933 | 1,597 | 1,704 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Long-term contract assets, net | 119,876 | 178,249 | 195,737 | 296,458 | 298,906 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Strategic investments | 332,550 | 416,833 | 838,243 | 853,842 | 924,934 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Other long-term assets | 237,620 | 428,170 | 421,372 | 457,138 | 479,924 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Total Assets | 4,474,588 | 7,000,313 | 7,066,849 | 7,481,157 | 8,832,777 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Accounts payable | 71,955 | 139,086 | 175,135 | 269,957 | 249,940 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Accrued liabilities | 279,193 | 510,538 | 312,428 | 423,932 | 398,475 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Current portion of deferred revenue | 612,955 | 714,708 | 690,419 | 670,740 | 742,247 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Current portion of notes payable, net | 680,289 | 80,552 | 0 | 0 | 0 | USD thousands | Reported carrying value net of issuance costs; a dash is read as nil as the debt note shows no such amount | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 116; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, page 14; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, page 16; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 16 |
| Customer deposits | 20,626 | 16,156 | 18,125 | 16,477 | 17,020 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Other current liabilities | 12,857 | 9,107 | 12,190 | 17,131 | 19,220 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Total current liabilities | 1,677,875 | 1,470,147 | 1,208,297 | 1,398,237 | 1,426,902 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Deferred revenue, net of current portion | 360,685 | 359,902 | 362,242 | 385,659 | 435,326 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Liability for unrecognized tax benefits | 25,007 | 24,376 | 27,238 | 26,587 | 26,517 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Long-term deferred compensation | 15,877 | 23,675 | 29,313 | 33,094 | 34,573 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Long-term lease liabilities | 41,383 | 98,942 | 97,182 | 101,658 | 100,861 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Long-term notes payable, net | 0 | 1,730,170 | 1,730,987 | 1,731,817 | 2,868,037 | USD thousands | Reported carrying value net of issuance costs; a dash is read as nil as the debt note shows no such amount | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 116; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, page 14; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, page 16; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 16 |
| Other long-term liabilities | 26,096 | 50,443 | 77,477 | 129,568 | 177,633 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Total Liabilities | 2,146,923 | 3,757,655 | 3,532,736 | 3,806,620 | 5,069,849 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Total Equity | 2,327,665 | 3,242,658 | 3,534,113 | 3,674,537 | 3,762,928 | USD thousands | Reported | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |
| Total Debt | 680,289 | 1,810,722 | 1,730,987 | 1,731,817 | 2,868,037 | USD thousands | Reported carrying value net of issuance costs; a dash is read as nil as the debt note shows no such amount | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 116; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, page 14; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, page 16; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 16 |
| Cash & Equivalents | 454,844 | 1,201,147 | 458,921 | 597,704 | 1,458,817 | USD thousands | Cash and cash equivalents; excludes restricted cash, short-term investments and marketable securities | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, pages 84–85; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, pages 3–4; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 4 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2030 Notes | Senior notes | Not supplied: only the total carrying amount is printed | 1,000,000 | Not applicable | Not applicable | Not supplied: the filings state no security | Not supplied: named senior notes, no rank stated | USD | 1,000,000 | Not applicable | 6.125% | Fixed | Not applicable | Not applicable | Not applicable | 2030-03-15 | 0 | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 20; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 117 |
| 2031 Notes | Convertible senior notes | Not supplied: only the total carrying amount is printed | 1,150,000 | Not applicable | Not applicable | Not supplied: the filings state no security | Not supplied: named convertible senior notes, no rank stated | USD | 1,150,000 | Not applicable | 0% | Fixed | Not applicable | Not applicable | Not applicable | 2031-09-15 | 0 | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 16–19 |
| 2033 Notes | Senior notes | Not supplied: only the total carrying amount is printed | 750,000 | Not applicable | Not applicable | Not supplied: the filings state no security | Not supplied: named senior notes, no rank stated | USD | 750,000 | Not applicable | 6.250% | Fixed | Not applicable | Not applicable | Not applicable | 2033-03-15 | 0 | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 20; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 118 |
| Revolving credit facility | Senior unsecured multi-currency revolver | 0 | 0 | 0 | 500,000 | Unsecured | Senior (stated as senior unsecured) | USD | 0 | Not applicable | Term SOFR plus 1.25% to 1.75% by pricing grid | Floating | Term SOFR | 125 to 175 | Not applicable | 2031-09-18 or earlier springing date | Not applicable | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 23; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 51 |
| Financing cost adjustment | Unamortized debt issuance costs | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -31,963 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 16 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | LTM to 2026-03-31 | USD 2,779.536m | USD 807.345m | USD 603.633m | USD 2,983.248m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl | Full year FY2025, current stub Q1 2026, prior-year stub Q1 2025; interim and unaudited; components are as printed |
| EBITDA (Reported) | LTM to 2026-03-31 | USD 124.570m | USD 247.599m | USD 124.803m | USD 247.366m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl | Full year FY2025, current stub Q1 2026, prior-year stub Q1 2025; interim and unaudited; components are as printed |
| EBITDA (Adjusted) | LTM to 2026-03-31 | USD 710.155m | USD 201.630m | USD 155.170m | USD 756.615m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl | Full year FY2025, current stub Q1 2026, prior-year stub Q1 2025; interim and unaudited; adjusted EBITDA definitions differ between 2025 and 2026 |
| Cash Interest Paid | LTM to 2026-03-31 | USD 57.173m | USD 54.124m | USD 0.498m | USD 110.799m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl | Full year FY2025, current stub Q1 2026, prior-year stub Q1 2025; interim and unaudited; components are as printed |
| Net sales | LTM to 2026-06-30 | USD 2,779.536m | USD 1,711.734m | USD 1,272.171m | USD 3,219.099m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl | Full year FY2025, current stub H1 2026, prior-year stub H1 2025; interim and unaudited; components are as printed |
| EBITDA (Reported) | LTM to 2026-06-30 | USD 124.570m | USD 333.184m | USD 110.677m | USD 347.077m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl | Full year FY2025, current stub H1 2026, prior-year stub H1 2025; interim and unaudited; components are as printed |
| EBITDA (Adjusted) | LTM to 2026-06-30 | USD 710.155m | USD 443.654m | USD 326.802m | USD 827.007m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl | Full year FY2025, current stub H1 2026, prior-year stub H1 2025; interim and unaudited; adjusted EBITDA definitions differ between 2025 and 2026 |
| Cash Interest Paid | LTM to 2026-06-30 | USD 57.173m | USD 54.124m | USD 1.204m | USD 110.093m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl | Full year FY2025, current stub H1 2026, prior-year stub H1 2025; interim and unaudited; components are as printed |
| Net sales | LTM to 2026-09-30 | USD 2,779.536m | USD 2,620.288m | USD 1,982.812m | USD 3,417.012m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl | Full year FY2025, current stub 9M 2026, prior-year stub 9M 2025; interim and unaudited; components are as printed |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 124.570m | USD 467.141m | USD 152.661m | USD 439.050m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl | Full year FY2025, current stub 9M 2026, prior-year stub 9M 2025; interim and unaudited; components are as printed |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 710.155m | USD 679.314m | USD 503.812m | USD 885.657m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl | Full year FY2025, current stub 9M 2026, prior-year stub 9M 2025; interim and unaudited; adjusted EBITDA definitions differ between 2025 and 2026 |
| Cash Interest Paid | LTM to 2026-09-30 | USD 57.173m | USD 108.187m | USD 56.468m | USD 108.892m | Calculated | 10-K_2025-12-31_axon_axon-20251231.htm.jsonl; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl | Full year FY2025, current stub 9M 2026, prior-year stub 9M 2025; interim and unaudited; components are as printed |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 680.289 | Net debt data | 401.724 | T4.4 and T4.8 | FY2024 / 2024-12-31 | USD | US$m | 1.69 | Calculated | Tier 1 audited statements | Fiscal year figures |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 225.445 | Net debt data | 401.724 | T4.4 and T4.8 | FY2024 / 2024-12-31 | USD | US$m | 0.56 | Calculated | Tier 1 audited statements | Fiscal year figures |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 401.724 | Chart data: revenue and EBITDA and T4.4 | 3.450 | T4.5 and T4.8 | FY2024 / 2024-12-31 | USD | US$m | 116.44 | Calculated | Tier 1 audited statements | Fiscal year figures |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 680.289 | Net debt data | 521.375 | T4.4 and T4.8 | FY2024 / 2024-12-31 | USD | US$m | 1.30 | Calculated | Tier 1 audited statements | Fiscal year figures; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 225.445 | Net debt data | 521.375 | T4.4 and T4.8 | FY2024 / 2024-12-31 | USD | US$m | 0.43 | Calculated | Tier 1 audited statements | Fiscal year figures; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 521.375 | Chart data: revenue and EBITDA and T4.4 | 3.450 | T4.5 and T4.8 | FY2024 / 2024-12-31 | USD | US$m | 151.12 | Calculated | Tier 1 audited statements | Fiscal year figures; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,810.722 | Net debt data | 124.570 | T4.4 and T4.8 | FY2025 / 2025-12-31 | USD | US$m | 14.54 | Calculated | Tier 1 audited statements | Fiscal year figures |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 609.575 | Net debt data | 124.570 | T4.4 and T4.8 | FY2025 / 2025-12-31 | USD | US$m | 4.89 | Calculated | Tier 1 audited statements | Fiscal year figures |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 124.570 | Chart data: revenue and EBITDA and T4.4 | 57.173 | T4.5 and T4.8 | FY2025 / 2025-12-31 | USD | US$m | 2.18 | Calculated | Tier 1 audited statements | Fiscal year figures |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,810.722 | Net debt data | 710.155 | T4.4 and T4.8 | FY2025 / 2025-12-31 | USD | US$m | 2.55 | Calculated | Tier 1 audited statements | Fiscal year figures; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 609.575 | Net debt data | 710.155 | T4.4 and T4.8 | FY2025 / 2025-12-31 | USD | US$m | 0.86 | Calculated | Tier 1 audited statements | Fiscal year figures; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 710.155 | Chart data: revenue and EBITDA and T4.4 | 57.173 | T4.5 and T4.8 | FY2025 / 2025-12-31 | USD | US$m | 12.42 | Calculated | Tier 1 audited statements | Fiscal year figures; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,730.987 | Net debt data | 247.366 | T4.4 and T4.8 | 2026-03-31 | USD | US$m | 7.00 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,272.066 | Net debt data | 247.366 | T4.4 and T4.8 | 2026-03-31 | USD | US$m | 5.14 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 247.366 | Chart data: revenue and EBITDA and T4.4 | 110.799 | T4.5 and T4.8 | 2026-03-31 | USD | US$m | 2.23 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,730.987 | Net debt data | 756.615 | T4.4 and T4.8 | 2026-03-31 | USD | US$m | 2.29 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,272.066 | Net debt data | 756.615 | T4.4 and T4.8 | 2026-03-31 | USD | US$m | 1.68 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 756.615 | Chart data: revenue and EBITDA and T4.4 | 110.799 | T4.5 and T4.8 | 2026-03-31 | USD | US$m | 6.83 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,731.817 | Net debt data | 347.077 | T4.4 and T4.8 | 2026-06-30 | USD | US$m | 4.99 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,134.113 | Net debt data | 347.077 | T4.4 and T4.8 | 2026-06-30 | USD | US$m | 3.27 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 347.077 | Chart data: revenue and EBITDA and T4.4 | 110.093 | T4.5 and T4.8 | 2026-06-30 | USD | US$m | 3.15 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,731.817 | Net debt data | 827.007 | T4.4 and T4.8 | 2026-06-30 | USD | US$m | 2.09 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,134.113 | Net debt data | 827.007 | T4.4 and T4.8 | 2026-06-30 | USD | US$m | 1.37 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 827.007 | Chart data: revenue and EBITDA and T4.4 | 110.093 | T4.5 and T4.8 | 2026-06-30 | USD | US$m | 7.51 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,868.037 | Net debt data | 439.050 | T4.4 and T4.8 | 2026-09-30 | USD | US$m | 6.53 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,409.220 | Net debt data | 439.050 | T4.4 and T4.8 | 2026-09-30 | USD | US$m | 3.21 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 439.050 | Chart data: revenue and EBITDA and T4.4 | 108.892 | T4.5 and T4.8 | 2026-09-30 | USD | US$m | 4.03 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,868.037 | Net debt data | 885.657 | T4.4 and T4.8 | 2026-09-30 | USD | US$m | 3.24 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,409.220 | Net debt data | 885.657 | T4.4 and T4.8 | 2026-09-30 | USD | US$m | 1.59 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 885.657 | Chart data: revenue and EBITDA and T4.4 | 108.892 | T4.5 and T4.8 | 2026-09-30 | USD | US$m | 8.13 | Calculated | Tier 2b unaudited | Last twelve months EBITDA and cash interest; interim; issuer-adjusted EBITDA, definition not constant across 2025 and 2026 |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Contracted backlog | Remaining performance obligations, period-end, USD billions | 7.9 | 9.9 | 9.7 | 9.8 | 10.2 | Up since Q1 2026 | The 2025 annual report states immaterial errors in earlier remaining performance obligations disclosure; the FY2024 value is from the original 2024 report (10-K_2024-12-31_axon_axon-20241231.htm.jsonl, page 125; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 111; 10-Q_2026-03-31_axon_axon-20260331.htm.jsonl, page 11; 10-Q_2026-06-30_axon_axon-20260630.htm.jsonl, page 12; 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 12) |
| Recurring revenue | Annual recurring revenue, period-end, USD billions | 1.0 | 1.3 | Not supplied: not stated in the quarterly report | Not supplied: not stated in the quarterly report | Not supplied: not stated in the quarterly report | Up for the two year ends | Management operating measure, not GAAP revenue (10-K_2024-12-31_axon_axon-20241231.htm.jsonl, page 6; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 6) |
| Non-debt funding float | Total deferred revenue, period-end, USD thousands | 973,640 | 1,074,610 | 1,052,661 | 1,056,399 | 1,177,573 | Up since FY2025 | Interest-free funding that unwinds as service is delivered; customer deposits are separate and small |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | Unadjusted EBITDA from the statements | Issuer EBITDA is net income plus depreciation and amortization, interest expense, less investment interest income, plus income taxes, so it includes other income, net | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 45 | All | Other income, net was 250,789 thousand in the last twelve months to 2026-09-30, 57.12% of reported EBITDA | Financial foundation, Fundamental credit | Use issuer EBITDA as reported EBITDA; show adjusted EBITDA beside it and EBITDA before other income in the analysis |
| EBITDA (Adjusted) | Issuer-stated adjusted EBITDA | From Q1 2026 excludes all other income (loss), net; from Q2 2026 also excludes jurisdiction-specific compensation taxes; prior periods not recast | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 44 | 9M 2026 against 9M 2025; last twelve months | Described by the issuer as de minimis for earlier periods | Financial foundation, Fundamental credit | Label adjusted ratios as mixed-definition |
| Depreciation and amortization | Cash flow statement figure | EBITDA reconciliation uses a different amount | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 7 and 45 | 9M 2026: 96,059 against 93,318 thousand | Small against EBITDA | Financial foundation | EBITDA uses the issuer reconciliation amount; the cash flow statement amount is shown in T4.5 |
| Stock-based compensation | Cash flow statement figure | EBITDA reconciliation excludes non-recurring amounts | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 7 and 45 | 9M 2026: 435,062 against 429,317 thousand | Small against EBITDA | Financial foundation | Cash flow figure shown in T4.5; reconciliation figure used in adjusted EBITDA |
| Total debt | Balance-sheet carrying value | Notes at principal in the debt note | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, page 16 | Q3 2026 | Principal 2,900,000 thousand against carrying 2,868,037 thousand, difference 31,963 thousand | Financial foundation | Carrying value is Gross debt; principal is in the reconciliation table |
| Cash | Cash and cash equivalents | Cash flow statement closing cash includes restricted cash | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 4 and 7 | Q3 2026 | Closing cash 1,472,028 thousand against balance-sheet cash 1,458,817 thousand | Financial foundation | Net debt uses balance-sheet cash and cash equivalents |
| Net debt | Gross debt less cash and cash equivalents | Short-term investments and marketable securities are separate lines | 10-Q_2026-09-30_axon_axon-20260930.htm.jsonl, pages 4 and 12 to 13 | Q3 2026 | Short-term investments 181,587 and marketable securities 14,751 thousand are excluded from cash | Financial foundation, Liquidity | Net debt stated on the narrow cash definition; wider liquidity is in the analysis |
| Current portion of debt | Carrying value, classification as filed | The original 2024 report shows the 2027 convertible notes as long-term; the 2025 annual report shows them as current | 10-K_2024-12-31_axon_axon-20241231.htm.jsonl, page 102; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 85 | FY2024 | Current liabilities 997,586 thousand against 1,677,875 thousand; debt carrying value unchanged at 680,289 thousand | Financial foundation | Use the 2025 annual report for FY2024 balances |
| Segments | Segments as in the latest annual report | The 2024 report shows Software and Sensors and TASER; the 2025 report shows Connected Devices and Software and Services with 2024 recast | 10-K_2024-12-31_axon_axon-20241231.htm.jsonl, page 5; 10-K_2025-12-31_axon_axon-20251231.htm.jsonl, page 64 | FY2024 | Segment names and splits differ | Business and governance | Use the recast 2024 figures in the 2025 annual report |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and interest cover from reported EBITDA | Ready with Limitations | Reported EBITDA includes other income; interim ratios use last twelve months built from unaudited periods | Read with adjusted ratios and EBITDA before other income |
| Liquidity and debt maturities | Ready | Wider liquidity excluded from the cash column; revolver covenant ratios after September 2026 not printed | State total liquidity beside the cash column |
| Debt ranking and security | Not Ready | No source states the rank or security of the notes; indentures not supplied | Supply the indentures |
| Cash flow quality | Ready with Limitations | Cash flow lines printed as dashes are not carried as zero; the 2026 nine-month report reclassifies some noncash lines | None needed for totals |

## Calculations

Each figure below is worked from the inputs shown; money amounts are in the unit stated and ratios are in times or percent. Ratios are numerator over denominator, rounded half up to two decimals.

| Calculation ID | Item | Formula and inputs | Result | Unit |
| --- | --- | --- | --- | --- |
| C1 | Net debt at 2024-12-31 | Gross debt 680.289 less cash and cash equivalents 454.844 | 225.445 | US$m |
| C2 | Net debt at 2025-12-31 | Gross debt 1,810.722 less cash and cash equivalents 1,201.147 | 609.575 | US$m |
| C3 | Net debt at 2026-03-31 | Gross debt 1,730.987 less cash and cash equivalents 458.921 | 1,272.066 | US$m |
| C4 | Net debt at 2026-06-30 | Gross debt 1,731.817 less cash and cash equivalents 597.704 | 1,134.113 | US$m |
| C5 | Net debt at 2026-09-30 | Gross debt 2,868.037 less cash and cash equivalents 1,458.817 | 1,409.220 | US$m |
| C6 | Prepaid expenses and other current assets at 2026-03-31 | 178,632 prepaid plus 104,320 other current assets | 282,952 | USD thousands |
| C7 | Prepaid expenses and other current assets at 2026-06-30 | 190,682 prepaid plus 115,347 other current assets | 306,029 | USD thousands |
| C8 | Prepaid expenses and other current assets at 2026-09-30 | 201,603 prepaid plus 141,084 other current assets | 342,687 | USD thousands |
| C9 | Net sales last twelve months to 2026-03-31 | FY2025 2,779,536 plus 2026 stub 807,345 less 2025 stub 603,633 | 2,983,248 | USD thousands |
| C10 | EBITDA (Reported) last twelve months to 2026-03-31 | FY2025 124,570 plus 2026 stub 247,599 less 2025 stub 124,803 | 247,366 | USD thousands |
| C11 | EBITDA (Adjusted) last twelve months to 2026-03-31 | FY2025 710,155 plus 2026 stub 201,630 less 2025 stub 155,170 | 756,615 | USD thousands |
| C12 | Cash Interest Paid last twelve months to 2026-03-31 | FY2025 57,173 plus 2026 stub 54,124 less 2025 stub 498 | 110,799 | USD thousands |
| C13 | Net sales last twelve months to 2026-06-30 | FY2025 2,779,536 plus 2026 stub 1,711,734 less 2025 stub 1,272,171 | 3,219,099 | USD thousands |
| C14 | EBITDA (Reported) last twelve months to 2026-06-30 | FY2025 124,570 plus 2026 stub 333,184 less 2025 stub 110,677 | 347,077 | USD thousands |
| C15 | EBITDA (Adjusted) last twelve months to 2026-06-30 | FY2025 710,155 plus 2026 stub 443,654 less 2025 stub 326,802 | 827,007 | USD thousands |
| C16 | Cash Interest Paid last twelve months to 2026-06-30 | FY2025 57,173 plus 2026 stub 54,124 less 2025 stub 1,204 | 110,093 | USD thousands |
| C17 | Net sales last twelve months to 2026-09-30 | FY2025 2,779,536 plus 2026 stub 2,620,288 less 2025 stub 1,982,812 | 3,417,012 | USD thousands |
| C18 | EBITDA (Reported) last twelve months to 2026-09-30 | FY2025 124,570 plus 2026 stub 467,141 less 2025 stub 152,661 | 439,050 | USD thousands |
| C19 | EBITDA (Adjusted) last twelve months to 2026-09-30 | FY2025 710,155 plus 2026 stub 679,314 less 2025 stub 503,812 | 885,657 | USD thousands |
| C20 | Cash Interest Paid last twelve months to 2026-09-30 | FY2025 57,173 plus 2026 stub 108,187 less 2025 stub 56,468 | 108,892 | USD thousands |
| C21 | Total debt / EBITDA at 2024-12-31 | 680.289 divided by 401.724 | 1.69 | x |
| C22 | Net debt / EBITDA at 2024-12-31 | 225.445 divided by 401.724 | 0.56 | x |
| C23 | EBITDA / cash interest at 2024-12-31 | 401.724 divided by 3.450 | 116.44 | x |
| C24 | Total debt / adjusted EBITDA at 2024-12-31 | 680.289 divided by 521.375 | 1.30 | x |
| C25 | Net debt / adjusted EBITDA at 2024-12-31 | 225.445 divided by 521.375 | 0.43 | x |
| C26 | Adjusted EBITDA / cash interest at 2024-12-31 | 521.375 divided by 3.450 | 151.12 | x |
| C27 | Total debt / EBITDA at 2025-12-31 | 1,810.722 divided by 124.570 | 14.54 | x |
| C28 | Net debt / EBITDA at 2025-12-31 | 609.575 divided by 124.570 | 4.89 | x |
| C29 | EBITDA / cash interest at 2025-12-31 | 124.570 divided by 57.173 | 2.18 | x |
| C30 | Total debt / adjusted EBITDA at 2025-12-31 | 1,810.722 divided by 710.155 | 2.55 | x |
| C31 | Net debt / adjusted EBITDA at 2025-12-31 | 609.575 divided by 710.155 | 0.86 | x |
| C32 | Adjusted EBITDA / cash interest at 2025-12-31 | 710.155 divided by 57.173 | 12.42 | x |
| C33 | Total debt / EBITDA at 2026-03-31 | 1,730.987 divided by 247.366 | 7.00 | x |
| C34 | Net debt / EBITDA at 2026-03-31 | 1,272.066 divided by 247.366 | 5.14 | x |
| C35 | EBITDA / cash interest at 2026-03-31 | 247.366 divided by 110.799 | 2.23 | x |
| C36 | Total debt / adjusted EBITDA at 2026-03-31 | 1,730.987 divided by 756.615 | 2.29 | x |
| C37 | Net debt / adjusted EBITDA at 2026-03-31 | 1,272.066 divided by 756.615 | 1.68 | x |
| C38 | Adjusted EBITDA / cash interest at 2026-03-31 | 756.615 divided by 110.799 | 6.83 | x |
| C39 | Total debt / EBITDA at 2026-06-30 | 1,731.817 divided by 347.077 | 4.99 | x |
| C40 | Net debt / EBITDA at 2026-06-30 | 1,134.113 divided by 347.077 | 3.27 | x |
| C41 | EBITDA / cash interest at 2026-06-30 | 347.077 divided by 110.093 | 3.15 | x |
| C42 | Total debt / adjusted EBITDA at 2026-06-30 | 1,731.817 divided by 827.007 | 2.09 | x |
| C43 | Net debt / adjusted EBITDA at 2026-06-30 | 1,134.113 divided by 827.007 | 1.37 | x |
| C44 | Adjusted EBITDA / cash interest at 2026-06-30 | 827.007 divided by 110.093 | 7.51 | x |
| C45 | Total debt / EBITDA at 2026-09-30 | 2,868.037 divided by 439.050 | 6.53 | x |
| C46 | Net debt / EBITDA at 2026-09-30 | 1,409.220 divided by 439.050 | 3.21 | x |
| C47 | EBITDA / cash interest at 2026-09-30 | 439.050 divided by 108.892 | 4.03 | x |
| C48 | Total debt / adjusted EBITDA at 2026-09-30 | 2,868.037 divided by 885.657 | 3.24 | x |
| C49 | Net debt / adjusted EBITDA at 2026-09-30 | 1,409.220 divided by 885.657 | 1.59 | x |
| C50 | Adjusted EBITDA / cash interest at 2026-09-30 | 885.657 divided by 108.892 | 8.13 | x |
| C51 | Income from operations last twelve months to 2026-09-30 | FY2025 -62,076 plus nine months 2026 118,101 less nine months 2025 -11,958 | 67,983 | USD thousands |
| C52 | Depreciation and amortization (EBITDA reconciliation) last twelve months to 2026-09-30 | FY2025 86,789 plus nine months 2026 93,318 less nine months 2025 59,829 | 120,278 | USD thousands |
| C53 | Other income (loss), net last twelve months to 2026-09-30 | FY2025 99,857 plus nine months 2026 255,722 less nine months 2025 104,790 | 250,789 | USD thousands |
| C54 | EBITDA before other income, last twelve months to 2026-09-30 | Income from operations 67,983 plus depreciation and amortization 120,278 | 188,261 | USD thousands |
| C55 | Other income as a share of reported EBITDA, last twelve months to 2026-09-30 | 250,789 divided by 439,050 times 100 | 57.12 | % |
| C56 | Net debt over EBITDA before other income at 2026-09-30 | Net debt 1,409.220 divided by 188.261 | 7.49 | x |
| C57 | Net cash from operating activities last twelve months to 2026-09-30 | FY2025 211,339 plus nine months 2026 8,247 less nine months 2025 -5,896 | 225,482 | USD thousands |
| C58 | Purchases of property and equipment last twelve months to 2026-09-30 | FY2025 -136,258 plus nine months 2026 -82,762 less nine months 2025 -74,450 | -144,570 | USD thousands |
| C59 | Free cash flow (operating cash flow less purchases of property and equipment) last twelve months to 2026-09-30 | 225,482 plus -144,570 | 80,912 | USD thousands |
| C60 | Operating expenses as a share of net sales, Q3 2026 | Total operating expenses 472,898 divided by net sales 908,554 times 100 | 52.05 | % |
| C61 | Gross margin as a share of net sales, Q3 2026 | Gross margin 514,978 divided by net sales 908,554 times 100 | 56.68 | % |
| C62 | Annual cash coupon of the 2030 and 2033 notes at the stated rates | 1,000.000 times 6.125% plus 750.000 times 6.250% | 108.125 | US$m |
| C63 | Cash, short-term investments, marketable securities and undrawn revolver at 2026-09-30 | 1,458.817 plus 181.587 plus 14.751 plus 490.9 | 2,146.055 | US$m |
| C64 | Pro forma net debt after the Skydio primary closing | Net debt 1,409.220 plus cash paid 127.5 | 1,536.720 | US$m |
| C65 | Pro forma net debt over last-twelve-month reported EBITDA | 1,536.720 divided by 439.050 | 3.50 | x |
| C66 | Largest remaining cash settlement of the Skydio investments | Cash maximum 720.0 less cash already paid 127.5 | 592.5 | US$m |
| C67 | Total deferred revenue at 2024-12-31 | Current 612,955 plus non-current 360,685 | 973,640 | USD thousands |
| C68 | Total deferred revenue at 2025-12-31 | Current 714,708 plus non-current 359,902 | 1,074,610 | USD thousands |
| C69 | Total deferred revenue at 2026-09-30 | Current 742,247 plus non-current 435,326 | 1,177,573 | USD thousands |
| C70 | Principal to carrying value at 2026-09-30 | Principal 2,900.000 less unamortized debt issuance costs 31.963 | 2,868.037 | US$m |
| C71 | FY2025 bridge from reported to adjusted EBITDA | Reported 124,570 plus adjustments 585,585 | 710,155 | USD thousands |

## Gaps

- High: no source states the legal rank or security of the 2030, 2031 and 2033 notes, so the debt stack is not drawn and note ranking is not established; the action is to obtain the indentures.
- Medium: the debt note prints only a total carrying amount, so the carrying value of each note is not stated and the principal of each note stands in the instrument table beside one financing cost adjustment row.
- Medium: the quarterly reports state compliance with the revolver covenants but print no ratio, and the covenant levels after the September 2026 amendment are not printed, so covenant headroom is not established; the action is to obtain the compliance certificates.
- Medium: reported EBITDA includes other income, net, mostly gains on strategic investments, and adjusted EBITDA changed definition in 2026 without recasting 2025, so leverage and cover are shown on both measures and neither is clean; the action is to restate the 2025 periods on the 2026 definition.
- Medium: the cash share of the Skydio tender offer and secondary purchases and the date of each closing are not established, so the pro forma net debt for those purchases is not stated.
- Low: cash flow lines that the filings print as a dash are marked Not supplied rather than zero, and lines that a filing does not print at all are marked Not supplied; these cells are in the cash flow table and affect no printed subtotal.
- Low: annual recurring revenue is not stated in the quarterly reports, so the series stops at the 2025 year end; the action is to read the issuer's investor materials.
- Low: the remaining performance obligations of the original 2024 report may carry the immaterial errors the 2025 annual report describes; the value is shown as printed.
- Low: the 2027 convertible notes were classified as long-term in the original 2024 report and as current in the 2025 annual report; the 2025 annual report is used for 2024 balances and the carrying amount is unchanged.
- Low: the segment realignment means segment figures before 2024 are not on the current basis.
- Low: the Q3 2026 report is unaudited and the period from 2026-11-05 to the as-of date is not covered by any supplied document.

## Next module

The orchestrator selects the next module.
