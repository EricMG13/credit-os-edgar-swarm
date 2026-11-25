## Request

Financial foundation for Hni Corp (HNI Corporation, issuer hni-48287), as of 2026-11-18, on the credit snapshot pathway. It extracts the income statement, cash flow statement, balance sheet, debt, liquidity, leverage and coverage figures from the five supplied filings, in USD millions, and states what the evidence supports.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-28_hni-20241228.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 28, 2024 | 2025-02-25 (filing date as stated in the 2025 annual report) | 999f58da0b84782fd97532881e9c7a07573ef51289aed6f3d93f517fc40388e2 | Read for the superseded debt and covenant terms and the FY2024 presentation of the balance sheet; FY2024 figures are taken from the 2025 annual report's comparatives |
| 10-K_2026-01-03_hni-20260103.htm.jsonl | Annual report on Form 10-K for the fiscal year ended January 3, 2026 | 2026-03-03 (signature date) | b6cfbf8c6cf7f5cf7fb5940b6d3b59b2f17fff56a63904129c74eae79a5a02b2 | FY2024 and FY2025 income statement, cash flow statement, balance sheet, debt note, maturity table, segment note, supplemental cash flow note |
| 10-Q_2026-04-04_hni-20260404.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended April 4, 2026 | 2026-05-06 (signature date) | b84d678b7b6507f27ff44abee20a4fdf46475dff36e1bbdd9bcd6f3e30748ae7 | Q1 2026 and Q1 2025 statements, balance sheet at 2026-04-04, debt note, segment note |
| 10-Q_2026-07-04_hni-20260704.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended July 4, 2026 | 2026-08-04 (signature date) | aad7ad70813e3c078773faa74f6e17fbba5464a879acaa0d63c2295e542e7ae1 | Q2 2026, H1 2026 and 2025 comparative statements, balance sheet at 2026-07-04, debt note, segment note |
| 10-Q_2026-10-03_hni-20261003.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended October 3, 2026 | 2026-11-03 (signature date) | 2a8dee24eaf2212e988af283b9f34996abcdc7c31f9c92db3a61d05e92b3c5cb | Q3 2026, 9M 2026 and 2025 comparative statements, balance sheet at 2026-10-03, debt note, segment note, liquidity discussion |
| CP-0 | Source readiness handoff (module CP-0), accepted | Not stated | f632ef349e019c953917c860fe578c4793192a8e73357caa9d308cec2826073a | Source gate, perimeter break at 2025-12-10, superseded covenant terms, presentation differences and missing documents |

## Findings

### Bottom line

Net debt is 3.07x last-twelve-months reported EBITDA at 2026-10-03, down from 6.19x at 2026-04-04, but the measure blends full acquisition debt with about ten months of Steelcase earnings and a depressed fourth quarter of 2025, so it overstates run-rate leverage.
Basis: 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 3, 5; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–4; calculation C65; calculation C61

Total debt is USD 1,354.5 million, cash USD 110.3 million and the undrawn revolver USD 380.0 million. The year-end figure of 4.65x net debt to EBITDA is the less reliable, because it sets year-end acquisition debt against under four weeks of Steelcase and USD 94.6 million of acquisition costs. Cash interest is stated only for annual periods, so interest cover is calculable only for FY2024 and FY2025, and no issuer-adjusted EBITDA is stated, so no covenant ratio can be tested.
Basis: 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 3, 14, 16; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73–76, 97; calculation C22; calculation C27; calculation C58; Source readiness (CP-0)

### Leverage and coverage

Net debt rose from USD 324.4 million at FY2024 to USD 1,083.9 million at FY2025 as the Steelcase financing replaced a much smaller debt stack, peaked at USD 1,373.7 million at 2026-04-04 on the first-quarter working-capital outflow, and fell to USD 1,244.2 million at 2026-10-03 as operating cash flow recovered after the first quarter. Net leverage on reported last-twelve-months EBITDA therefore fell from 6.19x to 4.42x to 3.07x across the three 2026 quarter ends, but most of the fall is the trailing window swapping pre-acquisition quarters for Steelcase quarters: net debt fell by only USD 129.5 million while EBITDA for the window rose from USD 222.0 million to USD 404.7 million.
Basis: 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2–5; calculation C50; calculation C39

The strongest contrary evidence to reading 3.07x as high is that the window still holds the fourth quarter of 2025, when reported EBITDA was only USD 0.5 million after USD 86.3 million of acquisition costs and with under four weeks of Steelcase. Before acquisition costs, restructuring and the inventory step-up, an Analyst Judgement and not an issuer figure, net leverage would be 2.13x. What would make the higher reading right is recurrence: restructuring and impairment charges were USD 43.1 million in nine months 2026, so some add-backs may repeat.
Basis: 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73, 75–76; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2, 4; calculation C46; calculation C47; calculation C49; calculation C77

Interest cover on cash interest paid is 10.95x for FY2024 and 9.21x for FY2025, but both predate most of the acquisition debt: FY2025 cash interest was USD 25.3 million against net interest expense of USD 35.6 million, and net interest expense was USD 63.8 million in nine months 2026 alone. The quarterly reports do not state cash interest paid, so 2026 cover is not calculable on the method's definition; on net interest expense, last-twelve-months EBITDA covers interest 5.03x at 2026-10-03 and 4.37x at 2026-04-04.
Basis: 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73, 76, 97; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2; calculation C59; calculation C74; calculation C70

### Cash flow and liquidity

Operating cash flow is strongly seasonal: USD -171.8 million in the first quarter of 2026, USD -32.0 million for six months and USD 163.3 million for nine months, so the third quarter alone produced USD 195.3 million. Last-twelve-months operating cash flow is USD 240.7 million and free cash flow after capital expenditure and capitalized software is USD 132.7 million, against nine-month dividends of USD 77.6 million and a USD 56.0 million repayment of loans against company-owned life insurance.
Basis: 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5, 36; calculation C48; calculation C43

Liquidity at 2026-10-03 was cash of USD 110.3 million plus USD 380.0 million undrawn on the USD 425.0 million revolver, USD 490.3 million in total, or 0.36x total debt. The revolver was drawn to USD 169.0 million at 2026-04-04, the highest of the quarter-end balances, which used about two-fifths of the commitment. Letters of credit and surety bonds of about USD 58 million are described, but the filing does not say whether any reduce revolver availability, so the undrawn figure may be overstated.
Basis: 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 12–13; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 14, 16, 23; calculation C53; calculation C27

### Non-debt funding and other claims outside total debt

Customer deposits, a non-interest-bearing contract liability, were USD 42.1 million at FY2024, USD 102.9 million at FY2025 and USD 117.6 million at 2026-10-03; USD 68.1 million of the FY2025 increase came with Steelcase. Supplier finance obligations were USD 31.2 million at FY2024, USD 26.1 million at FY2025 and USD 31.2 million at 2026-10-03. Both fund operations outside total debt and are not payables in the ordinary sense, so a fall in deposits or a withdrawal of supplier programmes would draw on cash or the revolver.
Basis: 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 89, 129; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 7, 26

Lease obligations sit on their own balance sheet lines and are excluded from total debt: finance leases of USD 13.4 million and operating leases of USD 289.8 million at 2026-10-03. Company-owned life insurance policy loans of USD 99.8 million at FY2025 are netted against the asset rather than shown as debt, and USD 56.0 million was repaid in the third quarter of 2026; the balance after that repayment is not stated.
Basis: 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 3, 5, 36; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 129–130; calculation C51; calculation C52

### Data quality and definition risks

No issuer-stated EBITDA or adjusted EBITDA exists in the five filings, so reported EBITDA is built as operating income plus depreciation and amortization and excludes other non-operating income; the credit agreement's Consolidated EBITDA and Net Leverage Ratio are defined in documents that were not supplied, so every ratio here is a house measure and covenant headroom is not calculable. Printed dashes are treated as missing values, not zero, and four cash flow totals and one balance sheet total are left unstated because the filings' own rounding breaks the identity; each is listed under the gaps. Steelcase purchase accounting is provisional, so goodwill, intangibles, depreciation and amortization and therefore EBITDA comparisons can still move.
Basis: 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 11, 18; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–76; Source readiness (CP-0)

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2023-12-31 | 2024-12-28 |
| FY2025 | 2024-12-29 | 2026-01-03 |
| Q1 2025 | 2024-12-29 | 2025-03-29 |
| Q2 2025 | 2025-03-30 | 2025-06-28 |
| Q3 2025 | 2025-06-29 | 2025-09-27 |
| Q1 2026 | 2026-01-04 | 2026-04-04 |
| Q2 2026 | 2026-04-05 | 2026-07-04 |
| Q3 2026 | 2026-07-05 | 2026-10-03 |
| H1 2025 | 2024-12-29 | 2025-06-28 |
| H1 2026 | 2026-01-04 | 2026-07-04 |
| 9M 2025 | 2024-12-29 | 2025-09-27 |
| 9M 2026 | 2026-01-04 | 2026-10-03 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-28_hni-20241228.htm.jsonl | Annual report, Form 10-K (audited) | FY2024 (52 weeks to 2024-12-28) with FY2023 and FY2022 | USD | millions | HNI Corporation consolidated, before Steelcase | US GAAP | Tier 1 (audited statements) | Superseded debt and covenant terms; FY2024 presentation check | FY2024 balance sheet shows cash and other assets differently from the 2025 annual report; not used for FY2024 figures |
| 10-K_2026-01-03_hni-20260103.htm.jsonl | Annual report, Form 10-K (audited) | FY2025 (53 weeks to 2026-01-03) with FY2024 and FY2023 | USD | millions | HNI Corporation consolidated; Steelcase from 2025-12-10 | US GAAP | Tier 1 (audited statements) | FY2024 and FY2025 statements, debt, maturities, segments, cash interest | Steelcase purchase accounting preliminary at the date; later revised in the quarterly reports |
| 10-Q_2026-04-04_hni-20260404.htm.jsonl | Quarterly report, Form 10-Q (unaudited) | Q1 2026 against Q1 2025 | USD | millions | HNI Corporation consolidated; prior-year column excludes Steelcase | US GAAP | Tier 2b (unaudited, auditor review not stated) | Q1 statements, balance sheet at 2026-04-04, revolver and term loan balances | Cash interest paid not stated |
| 10-Q_2026-07-04_hni-20260704.htm.jsonl | Quarterly report, Form 10-Q (unaudited) | Q2 2026 and H1 2026 against 2025 | USD | millions | HNI Corporation consolidated; prior-year columns exclude Steelcase | US GAAP | Tier 2b (unaudited, auditor review not stated) | Q2 and H1 statements, balance sheet at 2026-07-04, Amendment No. 3 term loan B refinancing | Cash interest paid not stated |
| 10-Q_2026-10-03_hni-20261003.htm.jsonl | Quarterly report, Form 10-Q (unaudited) | Q3 2026 and 9M 2026 against 2025 | USD | millions | HNI Corporation consolidated; dealer acquired 2026-09-18 included from that date; prior-year columns exclude Steelcase | US GAAP | Tier 2b (unaudited, auditor review not stated) | Latest statements, balance sheet at 2026-10-03, debt note, liquidity discussion | No Q3 2025 balance sheet; cash interest paid not stated; Steelcase purchase accounting still provisional |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| HNI Corporation (Iowa; NYSE: HNI) | Registrant, issuer of the 2029 secured Public Notes and borrower under the Credit Agreement with certain domestic subsidiaries | 52/53-week year ending on the Saturday nearest December 31 | USD | millions | Consolidated with subsidiaries; no separate borrower or guarantor statements | US GAAP | FY2024, FY2025, Q1 to Q3 2026 and 2025 comparatives, balance sheets at FY2024, FY2025 and each 2026 quarter end |
| Steelcase Inc. | Wholly-owned subsidiary since 2025-12-10 (Workplace Furnishings); obligor of USD 99.0 million of legacy Public Notes | Own fiscal year before acquisition; HNI's after 2025-12-10 | USD | millions | Consolidated from 2025-12-10; separate results disclosed since acquisition (Q3 2026 net sales USD 870.6 million, 9M 2026 USD 2,451.5 million) | US GAAP | Since 2025-12-10 only |
| Workplace furnishings dealer (acquired September 2026) | 70% owned subsidiary with 30% non-controlling interest; assumed asset-based revolving credit facility and redemption note | Not stated | USD | millions | Consolidated from 2026-09-18 | US GAAP | 2026-10-03 balance sheet only |

The 2025 annual report states a 53-week year with the extra week in the fourth quarter; FY2024 had 52 weeks. No subsequent event after 2026-10-03 is stated in the quarterly report signed 2026-11-03.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| FY2024 cash and cash equivalents taken from the 2025 annual report's comparative | 10-K_2024-12-28_hni-20241228.htm.jsonl, page 63; 10-K_2026-01-03_hni-20260103.htm.jsonl, page 74 | Presentation (restricted cash) | 22.5 | 20.2 | The 2025 annual report states USD 2.4 million of restricted cash at 2024-12-28 is in other assets; the later presentation is used so FY2024 matches FY2025 and 2026 | FY2024 |
| EBITDA (Reported) derived: operating income plus depreciation and amortization | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73, 75; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2, 4 | Calculated measure | Not supplied: no issuer EBITDA | Operating income plus D&A; excludes other non-operating income | The filings state no EBITDA; other non-operating income (USD 8.3 million in 9M 2026) is mostly equity-method and similar income, not operating earnings | All periods |
| Total debt as carrying value: current maturities plus long-term debt | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 3, 14 | Definition | Principal 1,373.9 | Carrying 1,354.5 | Debt is balance sheet carrying value, net of deferred issuance costs and discount of USD 19.4 million at 2026-10-03; leases are on separate lines and excluded | All balance sheet dates |
| LTM construction: FY2025 plus current year-to-date less prior-year year-to-date | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73, 75; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2, 4 | Derived period | FY2025 233.1 | LTM 404.7 | Window holds Q4 2025 (EBITDA USD 0.5 million after acquisition costs) and between four and ten months of Steelcase depending on the date; perimeter is not constant across the window | LTM to 2026-04-04, 2026-07-04, 2026-10-03 |
| LTM EBITDA before acquisition costs, restructuring and inventory step-up (Analyst Judgement, not issuer-stated) | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2, 4 | Analyst normalisation | 404.7 | 582.8 | Shows sensitivity of leverage to one-offs on the face of the income statement; FY2025 inventory step-up is not separately stated so only the 9M 2026 amount of USD 31.3 million is added; restructuring in cost of sales is not added | LTM to 2026-10-03 |
| Cash flow opening and closing cash include restricted cash | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 76; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 5 | Definition | Balance sheet cash 110.3 | Cash flow closing 119.3 | The cash flow statement reconciles cash, cash equivalents and restricted cash (USD 9.0 million at 2026-10-03, in other assets); net debt uses balance sheet cash only | All cash flow columns |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q1 2025 | Q2 2025 | Q3 2025 | Q1 2026 | Q2 2026 | Q3 2026 | H1 2025 | H1 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Net sales | 2,526.4 | 2,839.0 | 599.8 | 667.1 | 683.8 | 1,347.5 | 1,472.4 | 1,592.9 | 1,266.8 | 2,819.9 | 1,950.6 | 4,412.9 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Cost of sales | 1,493.0 | 1,662.9 | 361.4 | 380.9 | 395.7 | 847.6 | 825.2 | 914.4 | 742.3 | 1,672.8 | 1,138.0 | 2,587.2 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Gross profit | 1,033.4 | 1,176.1 | 238.4 | 286.2 | 288.1 | 499.9 | 647.2 | 678.5 | 524.6 | 1,147.1 | 812.6 | 1,825.6 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Selling and administrative expenses | 820.7 | 937.0 | 207.6 | 215.5 | 214.4 | 514.8 | 533.0 | 533.6 | 423.1 | 1,047.9 | 637.4 | 1,581.5 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Acquisition and related costs | Not supplied: printed as a dash | 94.6 | Not supplied: printed as a dash | Not supplied: printed as a dash | 8.3 | 3.5 | 4.2 | 0.9 | Not supplied: printed as a dash | 7.8 | 8.3 | 8.6 | USD millions | Reported; the annual reports call the line Acquisition costs; a printed dash is shown as not supplied | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Restructuring, impairment, and loss on divestiture | 6.2 | 18.5 | 6.4 | 2.5 | 0.8 | 18.0 | 17.9 | 7.3 | 8.9 | 35.9 | 9.7 | 43.1 | USD millions | Reported; the Q1 2026 report calls the line Restructuring and impairment charges | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Operating income | 206.5 | 126.0 | 24.4 | 68.2 | 64.6 | -36.4 | 92.1 | 136.7 | 92.6 | 55.7 | 157.2 | 192.4 | USD millions | Reported (EBIT); amounts may not sum because of the filing's rounding | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Depreciation and amortization | 107.8 | 107.1 | 25.5 | 25.0 | 24.9 | 75.2 | 66.2 | 70.4 | 50.5 | 141.4 | 75.4 | 211.8 | USD millions | Reported in the cash flow statement and segment note, not an income statement line | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4, 24; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4, 25–26 |
| EBITDA (Reported) | 314.3 | 233.1 | 49.9 | 93.2 | 89.5 | 38.8 | 158.3 | 207.1 | 143.1 | 197.1 | 232.6 | 404.2 | USD millions | Calculated: operating income plus depreciation and amortization; the issuer states no EBITDA | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4, 24; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4, 25–26 |
| Other non-operating income, net | Not supplied: printed as a dash | 0.4 | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | 1.5 | 2.8 | 4.0 | Not supplied: printed as a dash | 4.3 | Not supplied: printed as a dash | 8.3 | USD millions | Reported; excluded from EBITDA | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Interest expense, net | 27.2 | 35.6 | 5.5 | 6.1 | 7.2 | 20.7 | 23.7 | 19.4 | 11.7 | 44.4 | 18.9 | 63.8 | USD millions | Reported; net of interest income, which is not separated; not cash interest | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Income before income taxes | 179.3 | 90.8 | 18.9 | 62.0 | 57.4 | -55.6 | 71.2 | 121.3 | 80.9 | 15.5 | 138.3 | 136.8 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Income taxes | 39.8 | 36.5 | 5.0 | 13.8 | 16.2 | -16.8 | 20.1 | 31.3 | 18.8 | 3.2 | 34.9 | 34.5 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Net income | 139.5 | 54.2 | 13.9 | 48.3 | 41.2 | -38.8 | 51.1 | 90.0 | 62.2 | 12.3 | 103.4 | 102.3 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Net income attributable to HNI Corporation | 139.5 | 54.2 | 13.9 | 48.2 | 41.2 | -38.8 | 51.1 | 90.0 | 62.2 | 12.3 | 103.4 | 102.3 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Diluted earnings per share | 2.88 | 1.11 | 0.29 | 1.02 | 0.88 | -0.55 | 0.70 | 1.23 | 1.31 | 0.17 | 2.19 | 1.40 | USD per share | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |
| Diluted average shares outstanding | 48.5 | 48.9 | 48.0 | 47.1 | 46.7 | 71.6 | 72.1 | 72.5 | 47.6 | 71.9 | 47.3 | 72.1 | Millions of shares | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 |

### Segment schedule

| Segment | Measure | FY2024 | FY2025 | Q1 2025 | Q2 2025 | Q3 2025 | Q1 2026 | Q2 2026 | Q3 2026 | H1 2025 | H1 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Workplace Furnishings | Net sales | 1,888.0 | 2,164.1 | 441.1 | 516.0 | 516.9 | 1,185.4 | 1,323.7 | 1,417.9 | 957.0 | 2,509.2 | 1,473.9 | 3,927.1 | USD millions | Reported segment note; General corporate holds unallocated corporate costs, including Steelcase acquisition costs in FY2025 | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 125–127; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 20–21; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 23–24; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 24–26 |
| Residential Building Products | Net sales | 638.4 | 674.9 | 158.7 | 151.1 | 166.9 | 162.1 | 148.7 | 175.0 | 309.8 | 310.8 | 476.7 | 485.7 | USD millions | Reported segment note; General corporate holds unallocated corporate costs, including Steelcase acquisition costs in FY2025 | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 125–127; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 20–21; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 23–24; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 24–26 |
| Workplace Furnishings | Operating income | 169.1 | 183.0 | 18.0 | 65.8 | 62.5 | -42.6 | 101.7 | 131.7 | 83.8 | 59.1 | 146.3 | 190.8 | USD millions | Reported segment note; General corporate holds unallocated corporate costs, including Steelcase acquisition costs in FY2025 | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 125–127; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 20–21; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 23–24; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 24–26 |
| Residential Building Products | Operating income | 110.8 | 121.8 | 25.0 | 23.7 | 30.0 | 28.5 | 23.4 | 34.7 | 48.6 | 51.9 | 78.6 | 86.5 | USD millions | Reported segment note; General corporate holds unallocated corporate costs, including Steelcase acquisition costs in FY2025 | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 125–127; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 20–21; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 23–24; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 24–26 |
| General corporate | Operating income | -73.4 | -178.9 | -18.6 | -21.3 | -27.9 | -22.3 | -33.0 | -29.7 | -39.9 | -55.3 | -67.7 | -85.0 | USD millions | Reported segment note; General corporate holds unallocated corporate costs, including Steelcase acquisition costs in FY2025 | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 125–127; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 20–21; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 23–24; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 24–26 |

The segment net sales add to consolidated net sales and the segment operating income lines add to consolidated operating income in every column to within the filing's rounding. There are no intersegment sales of note: the filings call them immaterial.

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Net income | 139.5 | 54.2 | -38.8 | 12.3 | 103.4 | 102.3 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Depreciation and amortization | 107.8 | 107.1 | 75.2 | 141.4 | 75.4 | 211.8 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Other post-retirement and post-employment benefits | 1.1 | 1.9 | 0.9 | 1.7 | 0.8 | 2.6 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Stock-based compensation | 17.4 | 24.7 | 18.1 | 27.7 | 13.3 | 33.5 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Deferred income taxes | -14.1 | 33.7 | 9.4 | 10.1 | 25.9 | 15.9 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Asset impairment charges | Not supplied: printed as a dash | 7.7 | 9.5 | 15.2 | Not supplied: printed as a dash | 14.6 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Loss on sale of subsidiary | Not supplied: printed as a dash | 6.6 | Not supplied: line not printed in this report | Not supplied: printed as a dash | 6.6 | Not supplied: printed as a dash | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Inventory step-up | Not supplied: line not printed in this report | Not supplied: line not printed in this report | 31.3 | 31.3 | Not supplied: printed as a dash | 31.3 | USD millions | Reported; non-cash Steelcase purchase accounting; not a separate line in the annual report | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Other - net (operating) | 5.5 | 14.3 | -0.6 | 0.9 | 4.9 | 5.6 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Net change in operating assets and liabilities (annual report line) | -19.1 | 23.9 | Not supplied: line not printed in this report | Not supplied: line not printed in this report | Not supplied: line not printed in this report | Not supplied: line not printed in this report | USD millions | Reported; the annual report prints one combined line; the quarterly reports print the five detail lines below | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Receivables | Not supplied: line not printed in this report | Not supplied: line not printed in this report | 19.2 | -59.4 | -18.7 | -95.6 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Inventories | Not supplied: line not printed in this report | Not supplied: line not printed in this report | -15.6 | -26.4 | -2.9 | -13.5 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Prepaid expenses and other | Not supplied: line not printed in this report | Not supplied: line not printed in this report | -60.7 | -55.4 | -7.3 | -42.9 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Accounts payable and accrued expenses | Not supplied: line not printed in this report | Not supplied: line not printed in this report | -184.8 | -84.5 | -4.6 | -40.9 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Income taxes payable | Not supplied: line not printed in this report | Not supplied: line not printed in this report | -2.4 | -3.1 | -0.2 | -1.9 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Increase (decrease) in other liabilities | -11.4 | 2.1 | -32.4 | -43.8 | 2.4 | -59.7 | USD millions | Reported; the annual report labels the line Decrease in other liabilities | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Net Cash from Operating Activities | 226.7 | 276.3 | -171.8 | -32.0 | 198.9 | 163.3 | USD millions | Reported; components may not sum because of the filing's rounding | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Capital expenditures | -50.6 | -65.8 | -34.0 | -62.4 | -49.6 | -86.9 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Capitalized software | -2.3 | -2.0 | -1.7 | -2.3 | -1.3 | -4.2 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Acquisition, net of cash acquired | Not supplied: printed as a dash | -390.3 | Not supplied: line not printed in this report | Not supplied: line not printed in this report | Not supplied: printed as a dash | -24.1 | USD millions | Reported; 9M 2026 is the dealer acquired in September 2026; FY2025 is Steelcase | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Purchase of investments | -3.2 | -2.8 | -2.7 | -2.8 | -2.1 | -2.9 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Sales or maturities of investments | 4.7 | 4.8 | 1.4 | 6.2 | 3.2 | 6.5 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Net proceeds from sale of subsidiary | Not supplied: printed as a dash | 8.1 | Not supplied: line not printed in this report | Not supplied: printed as a dash | 8.1 | Not supplied: printed as a dash | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Investment in unconsolidated affiliates, purchases | Not supplied: line not printed in this report | Not supplied: line not printed in this report | -45.7 | -46.4 | Not supplied: printed as a dash | -46.4 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Investment in unconsolidated affiliates, proceeds | Not supplied: line not printed in this report | Not supplied: line not printed in this report | 8.0 | 8.8 | Not supplied: printed as a dash | 10.0 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Proceeds from sale of property, plant, and equipment | Not supplied: line not printed in this report | Not supplied: line not printed in this report | 1.6 | 18.5 | 3.5 | 19.3 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Other - net (investing) | 0.4 | 4.1 | Not supplied: line not printed in this report | 0.7 | Not supplied: printed as a dash | 1.7 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Net Cash from Investing Activities | -51.0 | -443.9 | -73.1 | -79.8 | -38.1 | -127.0 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Payments of debt | -420.6 | -782.5 | -37.4 | -236.7 | -377.4 | -363.8 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Proceeds from debt | 328.2 | 1,296.7 | 188.0 | 315.4 | 357.1 | 384.1 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Dividends paid | -63.6 | -63.1 | -26.6 | -52.1 | -47.5 | -77.6 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Purchase of HNI Corporation common stock | -65.8 | -83.6 | Not supplied: printed as a dash | Not supplied: printed as a dash | -83.6 | -5.6 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Proceeds from sales of HNI Corporation common stock | 51.2 | 3.8 | 0.7 | 1.4 | 3.3 | 7.4 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Debt-issuance costs | Not supplied: printed as a dash | -14.6 | Not supplied: line not printed in this report | Not supplied: line not printed in this report | Not supplied: line not printed in this report | Not supplied: line not printed in this report | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Withholding related to net share settlements of equity based awards | -7.6 | -13.3 | -18.0 | -20.5 | -5.6 | -22.6 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Proceeds from COLI policy loans | Not supplied: printed as a dash | 32.0 | Not supplied: line not printed in this report | Not supplied: line not printed in this report | Not supplied: line not printed in this report | Not supplied: line not printed in this report | USD millions | Reported; the annual report labels the line Proceeds from COLI | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Repayment of COLI policy loans | Not supplied: line not printed in this report | Not supplied: line not printed in this report | Not supplied: line not printed in this report | Not supplied: line not printed in this report | Not supplied: printed as a dash | -56.0 | USD millions | Reported; 9M 2026 repayment of loans against company-owned life insurance | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Other - net (financing) | -4.0 | -12.5 | 0.5 | -1.2 | -9.0 | -0.9 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Net Cash from Financing Activities | -182.2 | 363.1 | 107.3 | 6.4 | -162.6 | -135.0 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Net Cash Change | Not supplied: rounding in the filing; see gaps | Not supplied: rounding in the filing; see gaps | -137.6 | Not supplied: rounding in the filing; see gaps | -1.8 | Not supplied: rounding in the filing; see gaps | USD millions | Reported where stated; not supplied where the filing's rounding breaks the sum of the three activity totals or the cash roll-forward; printed values are in the gaps | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Opening Cash | 28.9 | 22.5 | 217.9 | 217.9 | 22.5 | 217.9 | USD millions | Reported; cash, cash equivalents and restricted cash | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Closing Cash | 22.5 | 217.9 | 80.3 | 112.6 | 20.7 | 119.3 | USD millions | Reported; cash, cash equivalents and restricted cash; differs from balance sheet cash by restricted cash held in other assets | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 4; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 4–5; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |
| Cash Interest Paid | 28.7 | 25.3 | Not supplied: not stated in the quarterly reports | Not supplied: not stated in the quarterly reports | Not supplied: not stated in the quarterly reports | Not supplied: not stated in the quarterly reports | USD millions | Reported in the supplemental cash flow note for the fiscal years only | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 97 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Cash and cash equivalents | 20.2 | 209.2 | 71.4 | 105.0 | 110.3 | USD millions | Reported; FY2024 from the 2025 annual report's comparative | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Short-term investments | 6.4 | 6.5 | 6.8 | 3.2 | 3.7 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Receivables | 248.4 | 571.1 | 552.8 | 630.9 | 704.0 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Allowance for credit losses | -2.0 | -1.1 | -2.0 | -1.5 | -2.1 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Inventories, net | 194.3 | 475.3 | 490.5 | 498.8 | 507.5 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Prepaid expenses and other current assets | 54.9 | 150.9 | 177.3 | 174.3 | 169.0 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Total Current Assets | 522.2 | 1,411.9 | 1,296.9 | 1,410.6 | 1,492.5 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Net property, plant, and equipment | 529.6 | 1,137.2 | 1,050.7 | 1,024.6 | 1,017.9 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Right-of-use - finance leases | 14.3 | 11.3 | 10.9 | 11.8 | 13.1 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Right-of-use - operating leases | 121.8 | 274.5 | 259.7 | 246.0 | 275.6 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Goodwill and other intangible assets, net | 624.3 | 1,702.6 | 1,820.7 | 1,792.6 | 1,798.8 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Other assets | 63.0 | 347.6 | 333.8 | 331.9 | 387.6 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Total Assets | 1,875.1 | 4,885.0 | 4,772.6 | 4,817.6 | 4,985.5 | USD millions | Reported; components may not sum because of the filing's rounding | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Accounts payable and accrued expenses | 391.2 | 1,016.4 | 820.5 | 914.9 | 1,007.8 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Current maturities of debt | 50.3 | 16.2 | 18.3 | 18.1 | 22.7 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Current maturities of other long-term obligations | 2.3 | 38.2 | 28.7 | 32.7 | 14.7 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Current lease obligations - finance | 5.6 | 4.2 | 4.0 | 4.2 | 4.4 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Current lease obligations - operating | 28.1 | 64.4 | 64.7 | 65.6 | 72.8 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Total Current Liabilities | 477.5 | 1,139.3 | 936.1 | 1,035.6 | 1,122.4 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Long-term debt | 294.3 | 1,276.9 | 1,426.8 | 1,357.1 | 1,331.8 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Long-term lease obligations - finance | 8.9 | 7.3 | 7.1 | 7.9 | 9.0 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Long-term lease obligations - operating | 109.6 | 224.6 | 206.7 | 191.2 | 217.0 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Other long-term liabilities | 72.9 | 220.4 | 195.9 | 190.7 | 193.4 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Deferred income taxes | 71.6 | 180.9 | 226.3 | 230.0 | 236.4 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Total Liabilities | 1,034.7 | Not supplied: rounding in the filing; see gaps | 2,999.0 | 3,012.4 | 3,110.0 | USD millions | Reported; FY2025 not supplied because printed liabilities plus equity exceed printed assets by 0.1 (rounding in the filing); printed value in the gaps | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| HNI Corporation shareholders' equity | 840.1 | 1,835.6 | 1,773.6 | 1,805.2 | 1,869.1 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Non-controlling interest | 0.3 | Not supplied: printed as a dash | Not supplied: line not printed in this report | Not supplied: line not printed in this report | 6.4 | USD millions | Reported; a printed dash is shown as not supplied; the dealer's 30% interest from September 2026 | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Total Equity | 840.4 | 1,835.6 | 1,773.6 | 1,805.2 | 1,875.5 | USD millions | Reported | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Total Debt | 344.6 | 1,293.1 | 1,445.1 | 1,375.2 | 1,354.5 | USD millions | Calculated: current maturities of debt plus long-term debt, carrying value net of issuance costs and discount; excludes finance and operating lease obligations on their own lines | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |
| Cash & Equivalents | 20.2 | 209.2 | 71.4 | 105.0 | 110.3 | USD millions | Reported cash and cash equivalents; excludes short-term investments and restricted cash held in other assets | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74–75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2–3; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2–3; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolving Facility | Senior secured revolving credit facility | Not supplied: not stated per instrument | 45.0 | 45.0 | 425.0 | Senior secured (stated) | Senior secured; lien priority against the other facilities not stated | USD | 45.0 | Not applicable | 5.4% at 2026-10-03 | Floating | Term SOFR (one, three or six months) | 125 to 187.5 by net leverage (per the 2025 annual report) | 0 on term SOFR | Earlier of 2030-12-10 and a springing maturity | 0 | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 16; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 103–105 |
| Term Loan A | Senior secured term loan | Not supplied: not stated per instrument | 343.4 | 343.4 | Not applicable | Senior secured (stated) | Senior secured | USD | 343.4 | Not applicable | 5.4% at 2026-10-03 | Floating | Term SOFR (one, three or six months) | 125 to 187.5 by net leverage (per the 2025 annual report) | 0 on term SOFR | Earlier of 2030-12-10 and a springing maturity | Quarterly 0.625% of original principal in 2026, rising to 1.25%, 1.875% and 2.5% (USD 8.75 million in 2026, calculation C90) | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 16–17; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 104–105 |
| Term Loan B (2026 Replacement Term B Loans) | Senior secured term loan, refinanced 2026-06-10 under Amendment No. 3 | Not supplied: not stated per instrument | 496.3 | 496.3 | Not applicable | Senior secured (stated) | Senior secured | USD | 496.3 | Not applicable | 5.5% at 2026-10-03 | Floating | Term SOFR | Not supplied: the margin after Amendment No. 3 is not stated (200 before) | 0 on term SOFR | 2032-12-10 or a springing maturity | Quarterly 0.25% of the original USD 499 million tranche | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 14–15, 17; 10-K_2026-01-03_hni-20260103.htm.jsonl, page 105 |
| Asset-based revolving credit facility assumed with the dealer (September 2026) | Asset-based revolving credit facility | Not supplied: not stated per instrument | 27.2 | 27.2 | Not supplied: USD 23 million assumed, USD 27.2 million outstanding | Not supplied: security not stated | Not supplied: ranking not stated | USD | 27.2 | Not applicable | 5.9% at 2026-10-03 | Floating | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 7, 14, 18–19 |
| Public Notes due 2029 issued by HNI in the exchange (senior secured) | Senior secured notes | Not supplied: not stated per instrument | 351.0 | 351.0 | Not applicable | Senior secured (stated); collateral and lien priority against the Credit Agreement not stated | Senior secured | USD | 351.0 | Not applicable | 5.125% fixed | Fixed | Not applicable | Not applicable | Not applicable | 2029-01-18 | 0 (bullet) | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 106; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 14, 18 |
| Public Notes due 2029 issued by Steelcase and not exchanged (unsecured) | Notes classified as unsecured obligations of Steelcase, a subsidiary | Not supplied: not stated per instrument | 99.0 | 99.0 | Not applicable | Unsecured (stated) | Unsecured obligation of Steelcase | USD | 99.0 | Not applicable | 5.125% fixed | Fixed | Not applicable | Not applicable | Not applicable | 2029-01-18 | 0 (bullet) | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 106; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 14, 18 |
| Redemption note assumed with the dealer | Fixed-rate redemption note | Not supplied: not stated per instrument | 12.0 | 12.0 | Not applicable | Not supplied: security not stated | Not supplied: ranking not stated | USD | 12.0 | Not applicable | 6.0% fixed | Fixed | Not applicable | Not applicable | Not applicable | 2031 (day not stated) | Not supplied: not stated | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 14, 18–19 |
| Financing cost adjustment | Deferred debt issuance costs and discount | -19.4 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -19.4 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 14 |

The instrument principal balances add to USD 1,373.9 million and, less USD 19.4 million of deferred issuance costs and discount, to total debt of USD 1,354.5 million at 2026-10-03.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM to 2026-04-04 | USD 233.1m | USD 38.8m | USD 49.9m | USD 222.0m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73, 75; 10-Q_2026-04-04_hni-20260404.htm.jsonl, pages 2, 4 | Perimeter changes at 2025-12-10; the window holds Q4 2025 and under four months of Steelcase |
| EBITDA (Reported) | LTM to 2026-07-04 | USD 233.1m | USD 197.1m | USD 143.1m | USD 287.1m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73, 75; 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 2, 4 | Perimeter changes at 2025-12-10; the window holds Q4 2025 and about seven months of Steelcase |
| EBITDA (Reported) | LTM to 2026-10-03 | USD 233.1m | USD 404.2m | USD 232.6m | USD 404.7m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73, 75; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2, 4 | Perimeter changes at 2025-12-10; the window holds Q4 2025 and about ten months of Steelcase |
| Net sales | LTM to 2026-04-04 | USD 2,839.0m | USD 1,347.5m | USD 599.8m | USD 3,586.7m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2 | Perimeter changes at 2025-12-10 |
| Net sales | LTM to 2026-07-04 | USD 2,839.0m | USD 2,819.9m | USD 1,266.8m | USD 4,392.1m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2 | Perimeter changes at 2025-12-10 |
| Net sales | LTM to 2026-10-03 | USD 2,839.0m | USD 4,412.9m | USD 1,950.6m | USD 5,301.3m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 | Perimeter changes at 2025-12-10 |
| Interest expense, net | LTM to 2026-04-04 | USD 35.6m | USD 20.7m | USD 5.5m | USD 50.8m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 2 | Net of interest income; not cash interest |
| Interest expense, net | LTM to 2026-07-04 | USD 35.6m | USD 44.4m | USD 11.7m | USD 68.3m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2 | Net of interest income; not cash interest |
| Interest expense, net | LTM to 2026-10-03 | USD 35.6m | USD 63.8m | USD 18.9m | USD 80.5m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 | Net of interest income; not cash interest |
| Gross profit | LTM to 2026-10-03 | USD 1,176.1m | USD 1,825.6m | USD 812.6m | USD 2,189.1m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 | Perimeter changes at 2025-12-10 |
| Acquisition and related costs | LTM to 2026-10-03 | USD 94.6m | USD 8.6m | USD 8.3m | USD 94.9m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 | Perimeter changes at 2025-12-10 |
| Restructuring, impairment, and loss on divestiture | LTM to 2026-10-03 | USD 18.5m | USD 43.1m | USD 9.7m | USD 51.9m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 | Perimeter changes at 2025-12-10 |
| Net Cash from Operating Activities | LTM to 2026-10-03 | USD 276.3m | USD 163.3m | USD 198.9m | USD 240.7m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 | Outflows are negative; cash flow statement basis |
| Capital expenditures | LTM to 2026-10-03 | USD -65.8m | USD -86.9m | USD -49.6m | USD -103.1m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 | Outflows are negative; cash flow statement basis |
| Capitalized software | LTM to 2026-10-03 | USD -2.0m | USD -4.2m | USD -1.3m | USD -4.9m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 | Outflows are negative; cash flow statement basis |
| Free cash flow (operating cash flow plus capital expenditures plus capitalized software) | LTM to 2026-10-03 | USD 208.5m | USD 72.2m | USD 148.0m | USD 132.7m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 75–76; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 | Before dividends, acquisitions and debt movements |
| Fourth quarter 2025 EBITDA (Reported) | Q4 (FY less 9M) | USD 233.1m | Not applicable | USD 232.6m | USD 0.5m | Calculated | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73, 75; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2, 4 | No stand-alone Q4 2025 statement is printed; the quarter had 14 weeks, under four of them with Steelcase |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 344.6 | Net debt data, Gross debt, 2024-12-28 | 314.3 | EBITDA (Reported), FY2024, income statement | 2024-12-28 | USD | US$m | 1.10 | Calculated | Tier 1 | Reported EBITDA derived as operating income plus D&A; FY2024 is before Steelcase; debt is carrying value, principal is higher |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 324.4 | Net debt data, Net debt, 2024-12-28 | 314.3 | EBITDA (Reported), FY2024, income statement | 2024-12-28 | USD | US$m | 1.03 | Calculated | Tier 1 | Reported EBITDA derived as operating income plus D&A; FY2024 is before Steelcase; cash excludes short-term investments and restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 314.3 | EBITDA (Reported), FY2024, income statement | 28.7 | Cash Interest Paid, FY2024, supplemental cash flow note | 2024-12-28 | USD | US$m | 10.95 | Calculated | Tier 1 | Cash interest paid of USD 28.7 million against net interest expense of USD 27.2 million; before any acquisition debt |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1,293.1 | Net debt data, Gross debt, 2026-01-03 | 233.1 | EBITDA (Reported), FY2025, income statement | 2026-01-03 | USD | US$m | 5.55 | Calculated | Tier 1 | Reported EBITDA derived as operating income plus D&A; FY2025 holds under four weeks of Steelcase and USD 94.6 million of acquisition costs; debt is carrying value, principal is higher |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,083.9 | Net debt data, Net debt, 2026-01-03 | 233.1 | EBITDA (Reported), FY2025, income statement | 2026-01-03 | USD | US$m | 4.65 | Calculated | Tier 1 | Reported EBITDA derived as operating income plus D&A; FY2025 holds under four weeks of Steelcase and USD 94.6 million of acquisition costs; cash excludes short-term investments and restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 233.1 | EBITDA (Reported), FY2025, income statement | 25.3 | Cash Interest Paid, FY2025, supplemental cash flow note | 2026-01-03 | USD | US$m | 9.21 | Calculated | Tier 1 | Cash interest paid is lower than net interest expense for FY2025 because most acquisition debt arrived on 2025-12-10 |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1,445.1 | Net debt data, Gross debt, 2026-04-04 | 222.0 | LTM EBITDA (Reported), constructed period register, to 2026-04-04 | 2026-04-04 | USD | US$m | 6.51 | Calculated | Tier 2b | Reported EBITDA derived as operating income plus D&A; window holds Q4 2025 and under four months of Steelcase; debt is carrying value, principal is higher |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,373.7 | Net debt data, Net debt, 2026-04-04 | 222.0 | LTM EBITDA (Reported), constructed period register, to 2026-04-04 | 2026-04-04 | USD | US$m | 6.19 | Calculated | Tier 2b | Reported EBITDA derived as operating income plus D&A; window holds Q4 2025 and under four months of Steelcase; cash excludes short-term investments and restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 222.0 | LTM EBITDA (Reported), constructed period register, to 2026-04-04 | Not calculable: cash interest paid is not stated in the quarterly reports | Not supplied: not stated | 2026-04-04 | USD | US$m | Not calculable: cash interest paid is not stated in the quarterly reports | Not Calculable | Tier 2b | Interim cash interest is not stated; net interest expense is not a substitute under the method |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1,375.2 | Net debt data, Gross debt, 2026-07-04 | 287.1 | LTM EBITDA (Reported), constructed period register, to 2026-07-04 | 2026-07-04 | USD | US$m | 4.79 | Calculated | Tier 2b | Reported EBITDA derived as operating income plus D&A; window holds Q4 2025 and about seven months of Steelcase; debt is carrying value, principal is higher |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,270.2 | Net debt data, Net debt, 2026-07-04 | 287.1 | LTM EBITDA (Reported), constructed period register, to 2026-07-04 | 2026-07-04 | USD | US$m | 4.42 | Calculated | Tier 2b | Reported EBITDA derived as operating income plus D&A; window holds Q4 2025 and about seven months of Steelcase; cash excludes short-term investments and restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 287.1 | LTM EBITDA (Reported), constructed period register, to 2026-07-04 | Not calculable: cash interest paid is not stated in the quarterly reports | Not supplied: not stated | 2026-07-04 | USD | US$m | Not calculable: cash interest paid is not stated in the quarterly reports | Not Calculable | Tier 2b | Interim cash interest is not stated; net interest expense is not a substitute under the method |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1,354.5 | Net debt data, Gross debt, 2026-10-03 | 404.7 | LTM EBITDA (Reported), constructed period register, to 2026-10-03 | 2026-10-03 | USD | US$m | 3.35 | Calculated | Tier 2b | Reported EBITDA derived as operating income plus D&A; window holds Q4 2025 and about ten months of Steelcase; debt is carrying value, principal is higher |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,244.2 | Net debt data, Net debt, 2026-10-03 | 404.7 | LTM EBITDA (Reported), constructed period register, to 2026-10-03 | 2026-10-03 | USD | US$m | 3.07 | Calculated | Tier 2b | Reported EBITDA derived as operating income plus D&A; window holds Q4 2025 and about ten months of Steelcase; cash excludes short-term investments and restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 404.7 | LTM EBITDA (Reported), constructed period register, to 2026-10-03 | Not calculable: cash interest paid is not stated in the quarterly reports | Not supplied: not stated | 2026-10-03 | USD | US$m | Not calculable: cash interest paid is not stated in the quarterly reports | Not Calculable | Tier 2b | Interim cash interest is not stated; net interest expense is not a substitute under the method |
| EBITDA / net interest expense | EBITDA (Reported) / Interest expense, net | 314.3 | EBITDA (Reported), FY2024, income statement | 27.2 | Interest expense, net, FY2024, income statement | 2024-12-28 | USD | US$m | 11.56 | Calculated | Tier 1 | Interest expense, net is an income statement figure, not cash paid; net of interest income, which the filings do not separate |
| EBITDA margin (%) | EBITDA (Reported) / Net sales x 100 | 314.3 | EBITDA (Reported) | 2,526.4 | Net sales, income statement | 2024-12-28 | USD | US$m | 12.44 | Calculated | Tier 1 | Reported EBITDA is derived (operating income plus depreciation and amortization); LTM and FY2025 net sales include Steelcase only from 2025-12-10 |
| EBITDA / net interest expense | EBITDA (Reported) / Interest expense, net | 233.1 | EBITDA (Reported), FY2025, income statement | 35.6 | Interest expense, net, FY2025, income statement | 2026-01-03 | USD | US$m | 6.55 | Calculated | Tier 1 | Interest expense, net is an income statement figure, not cash paid; net of interest income, which the filings do not separate |
| EBITDA margin (%) | EBITDA (Reported) / Net sales x 100 | 233.1 | EBITDA (Reported) | 2,839.0 | Net sales, income statement | 2026-01-03 | USD | US$m | 8.21 | Calculated | Tier 1 | Reported EBITDA is derived (operating income plus depreciation and amortization); LTM and FY2025 net sales include Steelcase only from 2025-12-10 |
| EBITDA / net interest expense | EBITDA (Reported) / Interest expense, net | 222.0 | LTM EBITDA (Reported), Constructed period register | 50.8 | LTM interest expense, net, Constructed period register | 2026-04-04 | USD | US$m | 4.37 | Calculated | Tier 2b | Interest expense, net is an income statement figure, not cash paid; net of interest income, which the filings do not separate |
| EBITDA margin (%) | EBITDA (Reported) / Net sales x 100 | 222.0 | EBITDA (Reported) | 3,586.7 | Net sales, income statement | 2026-04-04 | USD | US$m | 6.19 | Calculated | Tier 2b | Reported EBITDA is derived (operating income plus depreciation and amortization); LTM and FY2025 net sales include Steelcase only from 2025-12-10 |
| EBITDA / net interest expense | EBITDA (Reported) / Interest expense, net | 287.1 | LTM EBITDA (Reported), Constructed period register | 68.3 | LTM interest expense, net, Constructed period register | 2026-07-04 | USD | US$m | 4.20 | Calculated | Tier 2b | Interest expense, net is an income statement figure, not cash paid; net of interest income, which the filings do not separate |
| EBITDA margin (%) | EBITDA (Reported) / Net sales x 100 | 287.1 | EBITDA (Reported) | 4,392.1 | Net sales, income statement | 2026-07-04 | USD | US$m | 6.54 | Calculated | Tier 2b | Reported EBITDA is derived (operating income plus depreciation and amortization); LTM and FY2025 net sales include Steelcase only from 2025-12-10 |
| EBITDA / net interest expense | EBITDA (Reported) / Interest expense, net | 404.7 | LTM EBITDA (Reported), Constructed period register | 80.5 | LTM interest expense, net, Constructed period register | 2026-10-03 | USD | US$m | 5.03 | Calculated | Tier 2b | Interest expense, net is an income statement figure, not cash paid; net of interest income, which the filings do not separate |
| EBITDA margin (%) | EBITDA (Reported) / Net sales x 100 | 404.7 | EBITDA (Reported) | 5,301.3 | Net sales, income statement | 2026-10-03 | USD | US$m | 7.63 | Calculated | Tier 2b | Reported EBITDA is derived (operating income plus depreciation and amortization); LTM and FY2025 net sales include Steelcase only from 2025-12-10 |
| Cash plus undrawn revolver / total debt | (Cash + undrawn Revolving Facility) / Total debt | 490.3 | Cash and undrawn revolver, calculation C53 | 1,354.5 | Total debt, balance sheet | 2026-10-03 | USD | US$m | 0.36 | Calculated | Tier 2b | Undrawn revolver is the USD 425.0 million commitment less borrowings; whether letters of credit reduce it is not stated |
| Net debt / EBITDA before one-offs (Analyst Judgement) | Net debt / (LTM EBITDA + acquisition and related costs + restructuring, impairment, and loss on divestiture + inventory step-up) | 1,244.2 | Net debt, Net debt data | 582.8 | LTM EBITDA before one-offs, calculation C49 | 2026-10-03 | USD | US$m | 2.13 | Estimated | Analyst Judgement | Not an issuer-stated adjusted EBITDA; add-backs are those on the face of the income statement plus the 9M 2026 inventory step-up; FY2025 step-up not separately stated |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | LTM Q3 2026 or 2026-10-03 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|
| Profitability | Gross margin (% of net sales, calculated) | 40.90 | 41.43 | 41.29 | Flat to slightly up | Calculated from gross profit and net sales; the LTM figure mixes perimeters |
| Profitability | Workplace Furnishings operating margin (%, issuer-reported) | 9.0 | 8.5 | 4.9 | Down | The latest figure is nine months 2026 and carries Steelcase purchase accounting of USD 110.9 million and restructuring |
| Profitability | Residential Building Products operating margin (%, issuer-reported) | 17.4 | 18.0 | 17.8 | Stable at a high level | The latest figure is nine months 2026; the segment is outside the Steelcase perimeter |
| Tax | Effective tax rate (%, issuer-reported) | 22.2 | 40.2 | 25.2 | Normalising | FY2025 rate reflects non-deductible acquisition costs and parachute payments; the latest figure is nine months 2026 |
| Non-debt funding | Customer deposits (contract liabilities, USD millions) | 42.1 | 102.9 | 117.6 | Up | Non-interest-bearing funding inside accounts payable and accrued expenses; USD 68.1 million of the FY2025 rise came with Steelcase |
| Non-debt funding | Supplier finance obligations (USD millions) | 31.2 | 26.1 | 31.2 | Flat | Bank programmes in which suppliers sell receivables due from the issuer; obligations sit in accounts payable and accrued expenses |
| Liquidity | Revolver borrowings outstanding (USD millions) | 45.7 | 15.0 | 45.0 | Seasonal | Peak of USD 169.0 million at 2026-04-04; facility size USD 425.0 million |
| Working capital | Inventory turns (times, issuer-reported) | 7.6 | 8.7 | Not supplied: not stated in the quarterly reports | Up | FY2025 turns are normalised by the issuer for half a month of Steelcase |
| Capital returns | Dividends declared and paid per share (USD) | 1.31 | 1.35 | 1.04 | Up | The latest figure is nine months 2026; the quarterly rate rose to USD 0.35 in Q3 2026 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA is the primary denominator; adjusted shown beside it when the issuer states it | No EBITDA or adjusted EBITDA is stated; the credit agreement uses Consolidated EBITDA and a Net Leverage Ratio, both defined in documents not supplied | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 18; Source readiness (CP-0) | All periods | High: covenant headroom cannot be calculated | Not supplied: dependencies are not mapped in this run | House EBITDA (operating income plus D&A) used; obtain the Credit Agreement and compliance certificate for the covenant measure |
| Total debt | Balance sheet carrying value, current plus long-term, net of issuance costs; principal logged beside it | Debt note shows principal lines less deferred issuance costs and discount | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 14 | All balance sheet dates | Low: USD 19.4 million at 2026-10-03 (principal 1,373.9 against carrying 1,354.5) | Not supplied: dependencies are not mapped in this run | Carrying value used for leverage; principal shown in the debt instruments and reconciliation tables |
| Net debt | Total debt less cash; short-term investments and restricted cash are a stated choice | The filer states no net debt; the covenant Net Leverage Ratio nets cash on a definition not supplied | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 3, 5, 18 | All balance sheet dates | Medium: short-term investments USD 3.7 million and restricted cash USD 9.0 million at 2026-10-03 are excluded | Not supplied: dependencies are not mapped in this run | Cash and cash equivalents only; both amounts named in the net debt basis |
| Cash and cash equivalents, FY2024 | One balance for one date | USD 22.5 million in the 2024 annual report and USD 20.2 million in the 2025 annual report for 2024-12-28; the later report states USD 2.4 million of restricted cash in other assets | 10-K_2024-12-28_hni-20241228.htm.jsonl, page 63; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74, 76 | FY2024 | Low: USD 2.3 million on cash and on other assets | Not supplied: dependencies are not mapped in this run | 2025 annual report comparative used; the difference is consistent with restricted cash but the filings do not say it was moved |
| Interest | Cash interest paid for cover; expense is a different quantity | Net interest expense on the income statement; cash interest paid only in annual supplemental notes | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73, 97; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 2 | FY2025 and 2026 | High: FY2025 cash interest USD 25.3 million against net interest expense USD 35.6 million; nine months 2026 expense USD 63.8 million | Not supplied: dependencies are not mapped in this run | Cover on cash interest shown for fiscal years only; cover on net interest expense shown as a labelled free-name ratio for interim dates |
| Perimeter of last twelve months | One perimeter across the window | FY2025 holds Steelcase for 2025-12-10 to 2026-01-03; 9M 2025 excludes it; 9M 2026 includes it | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 46; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 6, 11, 30 | LTM to 2026-04-04, 2026-07-04, 2026-10-03 | High: Q4 2025 EBITDA is USD 0.5 million after USD 86.3 million of acquisition costs | Not supplied: dependencies are not mapped in this run | Ratios shown on the mixed window and flagged; the issuer's pro forma figures cover net sales and net income only |
| Lease and similar obligations | Leases presented on their own lines are not added to total debt | Finance leases USD 13.4 million and operating leases USD 289.8 million at 2026-10-03 are on separate lines; COLI policy loans are netted against the asset | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 3; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 129–130 | 2026-10-03 | Medium: USD 303.2 million of lease obligations outside debt | Not supplied: dependencies are not mapped in this run | Excluded from total debt; listed so a reader can add them |
| Capital expenditure outlook for 2026 | Latest statement governs | USD 140 million to USD 150 million in the 2025 annual report; USD 125 million to USD 130 million in the quarterly report for Q3 2026 | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 49; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 36 | FY2026 | Low | Not supplied: dependencies are not mapped in this run | Later statement used; no cash flow forecast is made here |
| Operating income by line | Statement lines add to the printed total | The filing warns amounts may not sum because of rounding; H1 2026 lines add to USD 55.5 million against printed USD 55.7 million | 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 2 | H1 2026 and other columns | Low: 0.2 or less | Not supplied: dependencies are not mapped in this run | Printed totals used |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 2024-12-28 | 1.10 | 1.03 | x | FY2024 reported EBITDA of USD 314.3 million before Steelcase; debt at carrying value |
| 2026-01-03 | 5.55 | 4.65 | x | FY2025 reported EBITDA holds under four weeks of Steelcase and USD 94.6 million of acquisition costs while year-end debt is the full acquisition financing; overstates run-rate leverage |
| 2026-04-04 | 6.51 | 6.19 | x | Reported EBITDA for the last twelve months to 2026-04-04 (operating income plus D&A, USD 222.0 million); window holds Q4 2025 and under four months of Steelcase; not the covenant measure |
| 2026-07-04 | 4.79 | 4.42 | x | Reported EBITDA for the last twelve months to 2026-07-04 (operating income plus D&A, USD 287.1 million); window holds Q4 2025 and about seven months of Steelcase; not the covenant measure |
| 2026-10-03 | 3.35 | 3.07 | x | Reported EBITDA for the last twelve months to 2026-10-03 (operating income plus D&A, USD 404.7 million); window holds Q4 2025 and about ten months of Steelcase; not the covenant measure |

Leverage uses house reported EBITDA because no issuer or covenant EBITDA is supplied, and the trailing window mixes perimeters.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| 2024-12-28 | 10.95 | x | Reported EBITDA divided by cash interest paid of USD 28.7 million from the supplemental cash flow note; the figure predates most of the acquisition debt |
| 2026-01-03 | 9.21 | x | Reported EBITDA divided by cash interest paid of USD 25.3 million from the supplemental cash flow note; the figure predates most of the acquisition debt |
| 2026-04-04 | Not supplied: cash interest paid is not stated in the quarterly reports | x | Quarterly reports state no cash interest paid; cover on net interest expense is in the calculation register as a labelled free-name ratio |
| 2026-07-04 | Not supplied: cash interest paid is not stated in the quarterly reports | x | Quarterly reports state no cash interest paid; cover on net interest expense is in the calculation register as a labelled free-name ratio |
| 2026-10-03 | Not supplied: cash interest paid is not stated in the quarterly reports | x | Quarterly reports state no cash interest paid; cover on net interest expense is in the calculation register as a labelled free-name ratio |

Interest cover is stated only for fiscal years because cash interest paid appears only in the annual supplemental note.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 2024-12-28 | 20.2 | 379.3 | US$m | Cash and cash equivalents; undrawn is the USD 425.0 million Revolving Facility less USD 45.7 million drawn, which the issuer says it can access in full; letters of credit and surety bonds are not shown as reducing it because the filings do not say they do |
| 2026-01-03 | 209.2 | 410.0 | US$m | Cash and cash equivalents; undrawn is the USD 425.0 million Revolving Facility less USD 15.0 million drawn, which the issuer says it can access in full; letters of credit and surety bonds are not shown as reducing it because the filings do not say they do |
| 2026-04-04 | 71.4 | 256.0 | US$m | Cash and cash equivalents; undrawn is the USD 425.0 million Revolving Facility less USD 169.0 million drawn, which the issuer says it can access in full; letters of credit and surety bonds are not shown as reducing it because the filings do not say they do |
| 2026-07-04 | 105.0 | 322.0 | US$m | Cash and cash equivalents; undrawn is the USD 425.0 million Revolving Facility less USD 103.0 million drawn, which the issuer says it can access in full; letters of credit and surety bonds are not shown as reducing it because the filings do not say they do |
| 2026-10-03 | 110.3 | 380.0 | US$m | Cash and cash equivalents; undrawn is the USD 425.0 million Revolving Facility less USD 45.0 million drawn, which the issuer says it can access in full; letters of credit and surety bonds are not shown as reducing it because the filings do not say they do |

Undrawn committed facilities may be overstated if letters of credit reduce the revolver, which the filings do not state.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 16.2 | US$m | Scheduled principal maturing in the fiscal year, from the maturity table at 2026-01-03; the table is not reprinted in the 2026 quarterly reports |
| FY2027 | 22.5 | US$m | Scheduled principal maturing in the fiscal year, from the maturity table at 2026-01-03; the table is not reprinted in the 2026 quarterly reports |
| FY2028 | 22.5 | US$m | Scheduled principal maturing in the fiscal year, from the maturity table at 2026-01-03; the table is not reprinted in the 2026 quarterly reports |
| FY2029 | 473.4 | US$m | Scheduled principal maturing in the fiscal year, from the maturity table at 2026-01-03; the table is not reprinted in the 2026 quarterly reports |
| FY2030 | 306.6 | US$m | Scheduled principal maturing in the fiscal year, from the maturity table at 2026-01-03; the table is not reprinted in the 2026 quarterly reports |
| FY2031 | 476.3 | US$m | All principal maturing in FY2031 and later, printed as thereafter; mostly the Term Loan B due 2032; the table is not reprinted in the 2026 quarterly reports |

The ladder is as at 2026-01-03 and does not reflect the June 2026 Term Loan B refinancing or the dealer debt assumed in September 2026.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM Q1 2026 | LTM Q2 2026 | LTM Q3 2026 |
|---|---|---|---|---|---|
| Net sales (USD millions) | 2,526.4 | 2,839.0 | 3,586.7 | 4,392.1 | 5,301.3 |
| EBITDA, reported (USD millions) | 314.3 | 233.1 | 222.0 | 287.1 | 404.7 |
| EBITDA margin (%) | 12.44 | 8.21 | 6.19 | 6.54 | 7.63 |
| Net cash from operating activities (USD millions) | 226.7 | 276.3 | Not supplied: no Q1 2025 cash flow column | Not supplied: no H1 2025 cash flow column | 240.7 |
| Free cash flow after capital expenditure and capitalized software (USD millions) | 173.8 | 208.5 | Not supplied: no Q1 2025 cash flow column | Not supplied: no H1 2025 cash flow column | 132.7 |
| Total debt, carrying value (USD millions) | 344.6 | 1,293.1 | 1,445.1 | 1,375.2 | 1,354.5 |
| Cash and cash equivalents (USD millions) | 20.2 | 209.2 | 71.4 | 105.0 | 110.3 |
| Net debt (USD millions) | 324.4 | 1,083.9 | 1,373.7 | 1,270.2 | 1,244.2 |
| Total debt / EBITDA (x) | 1.10 | 5.55 | 6.51 | 4.79 | 3.35 |
| Net debt / EBITDA (x) | 1.03 | 4.65 | 6.19 | 4.42 | 3.07 |
| EBITDA / cash interest (x) | 10.95 | 9.21 | Not calculable: no cash interest paid | Not calculable: no cash interest paid | Not calculable: no cash interest paid |
| Cash plus undrawn revolver (USD millions) | 399.5 | 619.2 | 327.4 | 427.0 | 490.3 |

Fiscal-year columns are FY2024 and FY2025; LTM columns are the twelve months to 2026-04-04, 2026-07-04 and 2026-10-03 and balances are at those dates. EBITDA is reported EBITDA (operating income plus D&A), not an issuer measure; LTM columns mix perimeters.

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2024-12-28 | 344.6 | 20.2 | 324.4 | US$m | Gross debt is carrying value, current maturities plus long-term debt, net of USD 1.4 million of issuance costs and discount; principal is USD 346.0 million (the debt note rounds within USD 0.1 million); includes the debt lines of the debt note only; lease obligations on their own lines are excluded; cash excludes short-term investments and restricted cash; reported, not pro forma |
| 2026-01-03 | 1,293.1 | 209.2 | 1,083.9 | US$m | Gross debt is carrying value, current maturities plus long-term debt, net of USD 24.3 million of issuance costs and discount; principal is USD 1,317.4 million (the debt note rounds within USD 0.1 million); includes the debt lines of the debt note only; lease obligations on their own lines are excluded; cash excludes short-term investments and restricted cash; reported, not pro forma |
| 2026-04-04 | 1,445.1 | 71.4 | 1,373.7 | US$m | Gross debt is carrying value, current maturities plus long-term debt, net of USD 22.8 million of issuance costs and discount; principal is USD 1,468.0 million (the debt note rounds within USD 0.1 million); includes the debt lines of the debt note only; lease obligations on their own lines are excluded; cash excludes short-term investments and restricted cash; reported, not pro forma |
| 2026-07-04 | 1,375.2 | 105.0 | 1,270.2 | US$m | Gross debt is carrying value, current maturities plus long-term debt, net of USD 20.9 million of issuance costs and discount; principal is USD 1,396.1 million (the debt note rounds within USD 0.1 million); includes the debt lines of the debt note only; lease obligations on their own lines are excluded; cash excludes short-term investments and restricted cash; reported, not pro forma |
| 2026-10-03 | 1,354.5 | 110.3 | 1,244.2 | US$m | Gross debt is carrying value, current maturities plus long-term debt, net of USD 19.4 million of issuance costs and discount; principal is USD 1,373.9 million (the debt note rounds within USD 0.1 million); includes the dealer's asset-based revolver USD 27.2 million and redemption note USD 12.0 million; lease obligations on their own lines are excluded; cash excludes short-term investments and restricted cash; reported, not pro forma |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-01-03 | 1,317.5 | -24.4 | 1,293.1 | US$m | Principal is the sum of the maturity table at 2026-01-03; reconciling items are deferred debt issuance costs and discount of -24.3 and a rounding difference of -0.1 between the maturity table and the instrument balances; the ladder is drawn at the year-end balance sheet because the quarterly reports print no maturity table |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | All five filings were read; the quarterly report for Q3 2026, signed 2026-11-03, states no event after the 2026-10-03 balance sheet date that changes net debt; filings after 2026-11-03 were not supplied |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 2024-12-28 | 2,526.4 | 314.3 | US$m | Revenue is net sales; the EBITDA column holds reported EBITDA (operating income plus D&A) because the issuer states no adjusted EBITDA, so its identity is reported and unadjusted for every row. Fiscal year of 52 weeks; before Steelcase |
| 2026-01-03 | 2,839.0 | 233.1 | US$m | Revenue is net sales; the EBITDA column holds reported EBITDA (operating income plus D&A) because the issuer states no adjusted EBITDA, so its identity is reported and unadjusted for every row. Fiscal year of 53 weeks; under four weeks of Steelcase and USD 94.6 million of acquisition costs |
| 2026-04-04 | 3,586.7 | 222.0 | US$m | Revenue is net sales; the EBITDA column holds reported EBITDA (operating income plus D&A) because the issuer states no adjusted EBITDA, so its identity is reported and unadjusted for every row. Twelve months to this date; mixes perimeters |
| 2026-07-04 | 4,392.1 | 287.1 | US$m | Revenue is net sales; the EBITDA column holds reported EBITDA (operating income plus D&A) because the issuer states no adjusted EBITDA, so its identity is reported and unadjusted for every row. Twelve months to this date; mixes perimeters |
| 2026-10-03 | 5,301.3 | 404.7 | US$m | Revenue is net sales; the EBITDA column holds reported EBITDA (operating income plus D&A) because the issuer states no adjusted EBITDA, so its identity is reported and unadjusted for every row. Twelve months to this date; mixes perimeters |

The rows are twelve-month or fiscal-year periods of 52 or 53 weeks and are not like for like across the Steelcase acquisition.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolving Facility, drawn | 1 | Yes | 45.0 | 0.11 | US$m | Principal drawn under the USD 425.0 million Revolving Facility at 2026-10-03; obligors are the Corporation and certain domestic subsidiaries party to the Credit Agreement, guarantor list not stated; leverage is cumulative principal over LTM reported EBITDA of USD 404.7 million |
| Term Loan A | 1 | Yes | 343.4 | 0.96 | US$m | Principal at 2026-10-03; same Credit Agreement obligors; senior secured as stated |
| Term Loan B (2026 Replacement Term B Loans) | 1 | Yes | 496.3 | 2.19 | US$m | Principal of the 2026 Replacement Term B Loans at 2026-10-03; same Credit Agreement obligors; senior secured as stated |
| HNI senior secured Public Notes due 2029 | 1 | Yes | 351.0 | 3.05 | US$m | Notes issued by HNI in exchange for Steelcase notes; stated as senior secured but collateral and lien priority against the Credit Agreement are not stated, so rank 1 reflects the stated label only |
| Steelcase Public Notes due 2029 (not exchanged) | 2 | No | 99.0 | 3.30 | US$m | Steelcase notes not exchanged; stated as unsecured obligations of Steelcase, a subsidiary of HNI; ranked below the secured debt by the stated security only |

The dealer's asset-based revolver of USD 27.2 million and redemption note of USD 12.0 million are left out because no source states their security or rank; they are named under the gaps.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| Reported EBITDA (opening) | Not supplied: no issuer-stated adjusted EBITDA to bridge to | US$m | Reported EBITDA is derived by this module (operating income plus D&A) and no issuer states an adjusted figure or add-backs, so no bridge to an adjusted measure can be reconciled; no plug is made |
| Issuer-adjusted EBITDA (closing) | Not supplied: no issuer-stated adjusted EBITDA to bridge to | US$m | The five filings state no adjusted EBITDA, and the method's adjusted measure is the issuer's own |

The bridge is not stated because the issuer states no adjusted EBITDA to reconcile to.

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Reported leverage and liquidity at 2026-10-03 | Ready with Limitations | Reported EBITDA is house-derived; the window mixes perimeters; letters of credit may reduce revolver availability | Use the figures with the stated perimeter and definition labels; obtain the revolver availability certificate |
| Interest cover | Ready with Limitations | Calculable on cash interest for FY2024 and FY2025 only; 2026 cover is not calculable on the method's definition | Obtain cash interest paid for 2026 periods or the Q4 2026 report |
| Covenant headroom (Net Leverage Ratio and Interest Coverage Ratio) | Not Ready | Credit Agreement definitions and compliance certificate are not supplied; only levels and a statement of compliance are printed | Obtain the executed Credit Agreement and quarterly compliance certificate |
| Year-on-year growth and margin comparisons | Ready with Limitations | Prior-year columns exclude Steelcase; pro forma only for net sales and net income | Use pro forma net sales and net income where comparing, and label the perimeter |
| Debt structure and maturity profile | Ready with Limitations | Maturity table is as at 2026-01-03; dealer debt security and rank not stated; lien priority of the HNI secured notes against the facilities not stated | Obtain the Public Notes terms and Credit Agreement security terms |
| Cash flow quality and free cash flow | Ready with Limitations | Seasonal; no 2025 interim cash flow columns for Q1 and H1; rounding gaps in four totals | Add Q1 and H1 2025 cash flow columns if trend by quarter is needed |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 45 |
| Calculated | 30 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 9 |
| Fields present | 15 |
| Fields total | 16 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 4 |

## Calculations

Every derived figure below is worked from the cited inputs in USD millions unless stated; ratios are printed to two decimals.

| Calculation ID | Item | Inputs | Result |
|---|---|---|---|
| C1 | EBITDA (Reported), FY2024 | Operating income 206.5 plus depreciation and amortization 107.8 (USD millions) | 314.3 |
| C2 | EBITDA (Reported), FY2025 | Operating income 126.0 plus depreciation and amortization 107.1 (USD millions) | 233.1 |
| C3 | EBITDA (Reported), Q1 2025 | Operating income 24.4 plus depreciation and amortization 25.5 (USD millions) | 49.9 |
| C4 | EBITDA (Reported), Q2 2025 | Operating income 68.2 plus depreciation and amortization 25.0 (USD millions) | 93.2 |
| C5 | EBITDA (Reported), Q3 2025 | Operating income 64.6 plus depreciation and amortization 24.9 (USD millions) | 89.5 |
| C6 | EBITDA (Reported), Q1 2026 | Operating income -36.4 plus depreciation and amortization 75.2 (USD millions) | 38.8 |
| C7 | EBITDA (Reported), Q2 2026 | Operating income 92.1 plus depreciation and amortization 66.2 (USD millions) | 158.3 |
| C8 | EBITDA (Reported), Q3 2026 | Operating income 136.7 plus depreciation and amortization 70.4 (USD millions) | 207.1 |
| C9 | EBITDA (Reported), H1 2025 | Operating income 92.6 plus depreciation and amortization 50.5 (USD millions) | 143.1 |
| C10 | EBITDA (Reported), H1 2026 | Operating income 55.7 plus depreciation and amortization 141.4 (USD millions) | 197.1 |
| C11 | EBITDA (Reported), 9M 2025 | Operating income 157.2 plus depreciation and amortization 75.4 (USD millions) | 232.6 |
| C12 | EBITDA (Reported), 9M 2026 | Operating income 192.4 plus depreciation and amortization 211.8 (USD millions) | 404.2 |
| C13 | Total debt at balance sheet, FY2024 | Current maturities of debt 50.3 plus long-term debt 294.3 (USD millions) | 344.6 |
| C14 | Total debt at balance sheet, FY2025 | Current maturities of debt 16.2 plus long-term debt 1,276.9 (USD millions) | 1,293.1 |
| C15 | Total debt at balance sheet, Q1 2026 | Current maturities of debt 18.3 plus long-term debt 1,426.8 (USD millions) | 1,445.1 |
| C16 | Total debt at balance sheet, Q2 2026 | Current maturities of debt 18.1 plus long-term debt 1,357.1 (USD millions) | 1,375.2 |
| C17 | Total debt at balance sheet, Q3 2026 | Current maturities of debt 22.7 plus long-term debt 1,331.8 (USD millions) | 1,354.5 |
| C18 | Net debt, FY2024 | Total debt 344.6 less cash and cash equivalents 20.2 (USD millions) | 324.4 |
| C19 | Net debt, FY2025 | Total debt 1,293.1 less cash and cash equivalents 209.2 (USD millions) | 1,083.9 |
| C20 | Net debt, Q1 2026 | Total debt 1,445.1 less cash and cash equivalents 71.4 (USD millions) | 1,373.7 |
| C21 | Net debt, Q2 2026 | Total debt 1,375.2 less cash and cash equivalents 105.0 (USD millions) | 1,270.2 |
| C22 | Net debt, Q3 2026 | Total debt 1,354.5 less cash and cash equivalents 110.3 (USD millions) | 1,244.2 |
| C23 | Undrawn revolving facility, FY2024 | Revolving Facility commitment 425.0 less borrowings outstanding 45.7 (USD millions) | 379.3 |
| C24 | Undrawn revolving facility, FY2025 | Revolving Facility commitment 425.0 less borrowings outstanding 15.0 (USD millions) | 410.0 |
| C25 | Undrawn revolving facility, Q1 2026 | Revolving Facility commitment 425.0 less borrowings outstanding 169.0 (USD millions) | 256.0 |
| C26 | Undrawn revolving facility, Q2 2026 | Revolving Facility commitment 425.0 less borrowings outstanding 103.0 (USD millions) | 322.0 |
| C27 | Undrawn revolving facility, Q3 2026 | Revolving Facility commitment 425.0 less borrowings outstanding 45.0 (USD millions) | 380.0 |
| C28 | Net sales, last twelve months to 2026-04-04 | FY2025 2,839.0 plus Q1 2026 1,347.5 less Q1 2025 599.8 (USD millions) | 3,586.7 |
| C29 | Interest expense, net, last twelve months to 2026-04-04 | FY2025 35.6 plus Q1 2026 20.7 less Q1 2025 5.5 (USD millions) | 50.8 |
| C30 | EBITDA (Reported), last twelve months to 2026-04-04 | FY2025 233.1 plus Q1 2026 38.8 less Q1 2025 49.9 (USD millions) | 222.0 |
| C31 | Net sales, last twelve months to 2026-07-04 | FY2025 2,839.0 plus H1 2026 2,819.9 less H1 2025 1,266.8 (USD millions) | 4,392.1 |
| C32 | Interest expense, net, last twelve months to 2026-07-04 | FY2025 35.6 plus H1 2026 44.4 less H1 2025 11.7 (USD millions) | 68.3 |
| C33 | EBITDA (Reported), last twelve months to 2026-07-04 | FY2025 233.1 plus H1 2026 197.1 less H1 2025 143.1 (USD millions) | 287.1 |
| C34 | Net sales, last twelve months to 2026-10-03 | FY2025 2,839.0 plus 9M 2026 4,412.9 less 9M 2025 1,950.6 (USD millions) | 5,301.3 |
| C35 | Interest expense, net, last twelve months to 2026-10-03 | FY2025 35.6 plus 9M 2026 63.8 less 9M 2025 18.9 (USD millions) | 80.5 |
| C36 | Gross profit, last twelve months to 2026-10-03 | FY2025 1,176.1 plus 9M 2026 1,825.6 less 9M 2025 812.6 (USD millions) | 2,189.1 |
| C37 | Acquisition and related costs, last twelve months to 2026-10-03 | FY2025 94.6 plus 9M 2026 8.6 less 9M 2025 8.3 (USD millions) | 94.9 |
| C38 | Restructuring, impairment, and loss on divestiture, last twelve months to 2026-10-03 | FY2025 18.5 plus 9M 2026 43.1 less 9M 2025 9.7 (USD millions) | 51.9 |
| C39 | EBITDA (Reported), last twelve months to 2026-10-03 | FY2025 233.1 plus 9M 2026 404.2 less 9M 2025 232.6 (USD millions) | 404.7 |
| C40 | Net cash from operating activities, last twelve months to 2026-10-03 | FY2025 276.3 plus 9M 2026 163.3 less 9M 2025 198.9 (USD millions) | 240.7 |
| C41 | Capital expenditures, last twelve months to 2026-10-03 | FY2025 -65.8 plus 9M 2026 -86.9 less 9M 2025 -49.6 (USD millions) | -103.1 |
| C42 | Capitalized software, last twelve months to 2026-10-03 | FY2025 -2.0 plus 9M 2026 -4.2 less 9M 2025 -1.3 (USD millions) | -4.9 |
| C43 | Free cash flow, last twelve months to 2026-10-03 | Operating cash flow 240.7 plus capital expenditures -103.1 plus capitalized software -4.9 (USD millions, outflows negative) | 132.7 |
| C44 | Free cash flow, FY2025 | Operating cash flow 276.3 plus capital expenditures -65.8 plus capitalized software -2.0 | 208.5 |
| C45 | Free cash flow, FY2024 | Operating cash flow 226.7 plus capital expenditures -50.6 plus capitalized software -2.3 | 173.8 |
| C46 | EBITDA (Reported), fourth quarter 2025 | FY2025 233.1 less 9M 2025 232.6 (USD millions) | 0.5 |
| C47 | Acquisition and related costs, fourth quarter 2025 | FY2025 94.6 less 9M 2025 8.3 (USD millions) | 86.3 |
| C48 | Operating cash flow in Q3 2026 | 9M 2026 163.3 less H1 2026 -32.0 (USD millions) | 195.3 |
| C49 | LTM EBITDA before acquisition costs, restructuring and inventory step-up (Analyst Judgement) | LTM EBITDA 404.7 plus LTM acquisition and related costs 94.9 plus LTM restructuring, impairment, and loss on divestiture 51.9 plus 9M 2026 inventory step-up 31.3 (USD millions) | 582.8 |
| C50 | Fall in net debt between 2026-04-04 and 2026-10-03 | Net debt 1,373.7 less 1,244.2 (USD millions) | 129.5 |
| C51 | Finance lease obligations, 2026-10-03 | Current 4.4 plus long-term 9.0 (USD millions) | 13.4 |
| C52 | Operating lease obligations, 2026-10-03 | Current 72.8 plus long-term 217.0 (USD millions) | 289.8 |
| C53 | Cash plus undrawn revolving facility, 2026-10-03 | Cash 110.3 plus undrawn revolver 380.0 (USD millions) | 490.3 |
| C54 | Total debt / EBITDA, 2024-12-28 | 344.6 divided by 314.3 | 1.10 |
| C55 | Net debt / EBITDA, 2024-12-28 | 324.4 divided by 314.3 | 1.03 |
| C56 | EBITDA / cash interest, 2024-12-28 | 314.3 divided by 28.7 | 10.95 |
| C57 | Total debt / EBITDA, 2026-01-03 | 1,293.1 divided by 233.1 | 5.55 |
| C58 | Net debt / EBITDA, 2026-01-03 | 1,083.9 divided by 233.1 | 4.65 |
| C59 | EBITDA / cash interest, 2026-01-03 | 233.1 divided by 25.3 | 9.21 |
| C60 | Total debt / EBITDA, 2026-04-04 | 1,445.1 divided by 222.0 | 6.51 |
| C61 | Net debt / EBITDA, 2026-04-04 | 1,373.7 divided by 222.0 | 6.19 |
| C62 | Total debt / EBITDA, 2026-07-04 | 1,375.2 divided by 287.1 | 4.79 |
| C63 | Net debt / EBITDA, 2026-07-04 | 1,270.2 divided by 287.1 | 4.42 |
| C64 | Total debt / EBITDA, 2026-10-03 | 1,354.5 divided by 404.7 | 3.35 |
| C65 | Net debt / EBITDA, 2026-10-03 | 1,244.2 divided by 404.7 | 3.07 |
| C66 | EBITDA / net interest expense, 2024-12-28 | 314.3 divided by 27.2 | 11.56 |
| C67 | EBITDA margin (%), 2024-12-28 | 314.3 divided by 2,526.4 times 100 | 12.44 |
| C68 | EBITDA / net interest expense, 2026-01-03 | 233.1 divided by 35.6 | 6.55 |
| C69 | EBITDA margin (%), 2026-01-03 | 233.1 divided by 2,839.0 times 100 | 8.21 |
| C70 | EBITDA / net interest expense, 2026-04-04 | 222.0 divided by 50.8 | 4.37 |
| C71 | EBITDA margin (%), 2026-04-04 | 222.0 divided by 3,586.7 times 100 | 6.19 |
| C72 | EBITDA / net interest expense, 2026-07-04 | 287.1 divided by 68.3 | 4.20 |
| C73 | EBITDA margin (%), 2026-07-04 | 287.1 divided by 4,392.1 times 100 | 6.54 |
| C74 | EBITDA / net interest expense, 2026-10-03 | 404.7 divided by 80.5 | 5.03 |
| C75 | EBITDA margin (%), 2026-10-03 | 404.7 divided by 5,301.3 times 100 | 7.63 |
| C76 | Cash plus undrawn revolver / total debt, 2026-10-03 | 490.3 divided by 1,354.5 | 0.36 |
| C77 | Net debt / EBITDA before one-offs (Analyst Judgement), 2026-10-03 | 1,244.2 divided by 582.8 | 2.13 |
| C78 | Cumulative leverage through Revolving Facility, drawn | Cumulative principal 45.0 divided by LTM EBITDA (Reported) 404.7 | 0.11 |
| C79 | Cumulative leverage through Term Loan A | Cumulative principal 388.4 divided by LTM EBITDA (Reported) 404.7 | 0.96 |
| C80 | Cumulative leverage through Term Loan B (2026 Replacement Term B Loans) | Cumulative principal 884.7 divided by LTM EBITDA (Reported) 404.7 | 2.19 |
| C81 | Cumulative leverage through HNI senior secured Public Notes due 2029 | Cumulative principal 1,235.7 divided by LTM EBITDA (Reported) 404.7 | 3.05 |
| C82 | Cumulative leverage through Steelcase Public Notes due 2029 (not exchanged) | Cumulative principal 1,334.7 divided by LTM EBITDA (Reported) 404.7 | 3.30 |
| C83 | Principal outstanding, FY2024 | Sum of instrument balances printed in the debt note: 346.0; less deferred debt issuance costs and discount 1.4 gives 344.6 against carrying value 344.6 | 346.0 |
| C84 | Principal outstanding, FY2025 | Sum of instrument balances printed in the debt note: 1,317.4; less deferred debt issuance costs and discount 24.3 gives 1,293.1 against carrying value 1,293.1 | 1,317.4 |
| C85 | Principal outstanding, Q1 2026 | Sum of instrument balances printed in the debt note: 1,468.0; less deferred debt issuance costs and discount 22.8 gives 1,445.2 against carrying value 1,445.1 | 1,468.0 |
| C86 | Principal outstanding, Q2 2026 | Sum of instrument balances printed in the debt note: 1,396.1; less deferred debt issuance costs and discount 20.9 gives 1,375.2 against carrying value 1,375.2 | 1,396.1 |
| C87 | Principal outstanding, Q3 2026 | Sum of instrument balances printed in the debt note: 1,373.9; less deferred debt issuance costs and discount 19.4 gives 1,354.5 against carrying value 1,354.5 | 1,373.9 |
| C88 | Debt maturing, sum of the maturity table as at 2026-01-03 | 16.2 plus 22.5 plus 22.5 plus 473.4 plus 306.6 plus 476.3 (USD millions) | 1,317.5 |
| C89 | Reconciling items, 2026-01-03 | Carrying value 1,293.1 less contractual principal 1,317.5; made of deferred debt issuance costs and discount -24.3 and a rounding difference of -0.1 between the maturity table total 1,317.5 and the instrument balances 1,317.4 | -24.4 |
| C90 | Term Loan A scheduled amortisation in 2026 | 0.625% per quarter times 4 quarters times original principal 350.0 (USD millions) | 8.75 |
| C91 | Gross margin FY2024 | Gross profit 1,033.4 divided by net sales 2,526.4 times 100 | 40.90 |
| C92 | Gross margin FY2025 | Gross profit 1,176.1 divided by net sales 2,839.0 times 100 | 41.43 |
| C93 | Gross margin, LTM to 2026-10-03 | LTM gross profit 2,189.1 divided by LTM net sales 5,301.3 times 100 | 41.29 |
| C94 | Lease obligations outside total debt, 2026-10-03 | Finance 13.4 plus operating 289.8 (USD millions) | 303.2 |
| C95 | Principal less carrying value of debt, 2026-10-03 | Principal 1,373.9 less carrying value 1,354.5 (USD millions) | 19.4 |
| C96 | H1 2026 operating income from printed lines | Gross profit 1,147.1 less selling and administrative 1,047.9 less acquisition and related 7.8 less restructuring 35.9 (USD millions) | 55.5 |
| C97 | Dealer debt assumed in September 2026 | Asset-based revolver 27.2 plus redemption note 12.0 outstanding at 2026-10-03 (USD millions) | 39.2 |

## Gaps

- No issuer-stated EBITDA, adjusted EBITDA, Consolidated EBITDA or Net Leverage Ratio exists in the five filings and the Credit Agreement was not supplied, so reported EBITDA is derived as operating income plus depreciation and amortization and covenant headroom is not calculable for any period. Severity High. Obtaining the executed Credit Agreement and the quarterly compliance certificate would close it.
- Cash interest paid is stated only in the annual supplemental note (USD 28.7 million for FY2024, USD 25.3 million for FY2025), so EBITDA over cash interest is not calculable for 2026-04-04, 2026-07-04 and 2026-10-03; interim cover is shown on net interest expense as a labelled alternative. Severity High. The annual report for FY2026 would close it.
- The last-twelve-months window mixes perimeters: it holds the fourth quarter of 2025 (reported EBITDA of USD 0.5 million after USD 86.3 million of acquisition costs, and under four weeks of Steelcase) and between four and ten months of Steelcase depending on the date, while debt is the full acquisition financing. Pro forma net sales and net income are given by the issuer for FY2025, FY2024, Q3 2025 and nine months 2025, but no pro forma EBITDA or cash flow is supplied, so a like-for-like leverage ratio cannot be built. Severity High. A pro forma EBITDA from the issuer or a lender presentation would close it.
- Printed dashes are shown as not supplied rather than zero, as the method requires: acquisition and related costs for FY2024, Q1 2025, Q2 2025 and H1 2025; other non-operating income for FY2024 and the 2025 interim columns; asset impairment charges for FY2024 and 9M 2025; loss on sale of subsidiary for FY2024, H1 2026 and 9M 2026; net proceeds from sale of subsidiary for FY2024, H1 2026 and 9M 2026; acquisition spending for FY2024 and 9M 2025; the unconsolidated affiliate lines and other investing items for 9M 2025; purchases of common stock in Q1 and H1 2026; debt-issuance costs and COLI loan lines where only a dash is printed; inventory step-up for 9M 2025; and non-controlling interest for FY2025. Severity Low; the printed dash very probably means nil.
- Some cash flow lines are not printed in every report: the annual report prints one combined working capital line while the quarterly reports print five detail lines, and the inventory step-up, COLI loan, unconsolidated affiliate, debt-issuance cost and property sale lines appear only in some reports. The non-controlling interest line is also not printed on the Q1 and Q2 2026 balance sheets. These cells are marked not supplied. Severity Low; totals are unaffected.
- Four cash flow totals and one balance sheet total are left not supplied because the filings' own rounding breaks an identity: Net Cash Change for FY2024 (printed -6.4, activity totals sum to -6.5), FY2025 (printed 195.4, sum 195.5) and H1 2026 (printed -105.3, sum -105.4); Net Cash Change for 9M 2026 (printed -98.7, but opening cash 217.9 plus -98.7 is 119.2 against printed closing cash 119.3); and Total Liabilities for FY2025 (printed 3,049.5, which with equity of 1,835.6 exceeds printed total assets of 4,885.0 by 0.1). Severity Low; each difference is 0.1.
- The maturity table by year is printed only at 2026-01-03, so the ladder does not reflect the June 2026 Term Loan B refinancing (a USD 499 million tranche due 2032), the Term Loan A and B amortisation since January, or the dealer debt assumed in September 2026 (USD 35.4 million at acquisition, USD 39.2 million outstanding at 2026-10-03). Severity Medium. The annual report for FY2026 would close it.
- Security and rank are not stated for the dealer's asset-based revolver (USD 27.2 million outstanding, USD 23 million described as assumed, commitment not stated) or its redemption note (USD 12.0 million due 2031, day not stated), and the lien priority of the HNI secured Public Notes against the Credit Agreement facilities is not stated. The dealer debt is left out of the debt stack and the notes are ranked on their stated label only. Severity Medium.
- The margin on the Term Loan B after Amendment No. 3 is not stated; the 2025 annual report gives 2.00% over term SOFR before the refinancing, and the quarterly rate fell from 5.8% at 2026-01-03 to 5.5% at 2026-10-03. Severity Low.
- Whether letters of credit and surety bonds of about USD 58 million, and trade letters of credit of USD 6 million, are issued under the revolver or reduce its availability is not stated, so undrawn committed facilities may be overstated. Severity Medium. The revolver availability certificate would close it.
- Company-owned life insurance policy loans of USD 99.8 million at FY2025 are netted against the asset and are not in total debt; USD 56.0 million was repaid in the third quarter of 2026 and the remaining balance is not stated. Severity Medium.
- The dollar amount of tariff refunds recognised in cost of sales is not stated for Q3 2026 or nine months 2026; the second-quarter report gives only a margin effect, so the quality of 2026 gross margin cannot be sized. Severity Medium.
- No stand-alone Q4 2025 statement and no Q3 2025 balance sheet are printed; the fourth quarter is constructed as the fiscal year less nine months, and net debt at 2025-09-27 is not available. FY2023 and earlier periods in the annual reports, the Q1 and H1 2025 cash flow columns and the Q2 stand-alone cash flow were not extracted. Severity Low.
- Steelcase purchase accounting is provisional and the quarterly report already lowered goodwill by USD 121.3 million and raised intangible assets by USD 281.0 million since the annual report; depreciation and amortization, and therefore reported EBITDA, can still change when the allocation is finalised in the fourth quarter of 2026. Severity Medium.
- No filing dated after 2026-11-03 was supplied, so events between 2026-11-04 and the as-of date of 2026-11-18 are not established, and the post-balance-sheet table records none found only for the sources read. Severity Low.

## Next module

The orchestrator selects the next module.
