# CP-1 Financial foundation: Ttm Technologies Inc (ttmi-1116942)

## Request

Financial foundation for Ttm Technologies Inc (issuer ttmi-1116942), as of 2026-11-18, on the credit snapshot pathway. Scope: income statement, cash flow statement, balance sheet, debt, liquidity and leverage from the five supplied filings, to the latest balance sheet at 2026-09-28, with the events after it flagged and kept out of the period figures.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-30_ttmi-20241230.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 30, 2024 | 2025-02-21 (signature date) | 2ecb5d437575cc6b47e9f7e360dc8708e75669d9459532de6d36a4473df6b04a | Balance sheet at 2024-01-01 and 2024-12-30; FY2023 and FY2024 debt note; year-end 2024 undrawn facilities; segment basis of that year |
| 10-K_2025-12-29_ttmi-20251229.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 29, 2025 | 2026-02-13 (signature date) | e0057323b507c4260b01fabc0dc2593f39572eb96a283c3aaefc23f944970470 | FY2023 to FY2025 income and cash flow statements; balance sheets at 2024-12-30 and 2025-12-29; debt note, liquidity and segments |
| 10-Q_2026-03-30_ttmi-20260330.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 30, 2026 | 2026-05-01 (signature date) | e38d01c722eba4b16a6fdc74e83853a734db204a73cf5341b4670720580e3854 | Cross-check of the first 2026 quarter against the nine-month figures; Q1 2025 comparatives |
| 10-Q_2026-06-29_ttmi-20260629.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 29, 2026 | 2026-08-05 (signature date) | c322b420083f5004f0f0f68e88641c5a43510b206553314f2dde3e74b0412d70 | Six-month depreciation and amortization to derive the third quarter; June 2026 refinancing |
| 10-Q_2026-09-28_ttmi-20260928.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 28, 2026 | 2026-10-28 (signature date) | 6699c987321cbc9c730e4a26348e573d1839ad98f60bb7dceb2c4f878a7721ad | Latest balance sheet, nine-month and third-quarter statements, debt note, liquidity, acquisitions and subsequent events |

| Module | Handoff | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | ebe57e6955cc48b23838644a54d0f9c04687bccb43bc45da3c752a3a217dbc17 | Source coverage, gaps and the perimeter of the five filings |

## Findings

### Bottom line

Reported leverage is moderate but understates what creditors now hold: net debt of USD 767.5 million was 1.31x last-twelve-months EBITDA at 2026-09-28, before the USD 1,100.0 million Epiq purchase that, on stated amounts, lifts it to 3.20x.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 24; calculation C16; calculation C18; calculation C22; calculation C41

Earnings growth, not debt paydown, drove total leverage from 4.52x in FY2023 to 2.22x in FY2025. Free cash flow is thin: capital spending of USD 251.6 million left only USD 21.2 million of the USD 272.9 million operating cash flow of the first nine months of 2026, and that flow leaned on a USD 376.0 million rise in payables.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; calculation C17; calculation C27; calculation C28; calculation C42

### Key findings

Carrying debt was essentially unchanged from FY2023 to FY2025, so the fall in total leverage from 4.52x to 2.22x came from earnings: EBITDA rose from USD 203.0 million to USD 411.9 million as net sales grew from USD 2,232.6 million to USD 2,906.3 million, and the goodwill impairments of FY2023 and FY2024, which reported EBITDA does not add back, ended. In 2026 the direction reversed: debt rose by USD 727.7 million to USD 1,643.9 million while cash rose by USD 375.1 million, so net debt rose by USD 352.6 million, mainly to pay USD 369.1 million, net of cash acquired, for Swiss Technology Group AG, and net leverage moved from 1.01x to 1.31x.
Basis: 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 23; calculation C15; calculation C16; calculation C18; calculation C30; calculation C31; calculation C43

Cash interest cover rose from 4.24x in FY2023 to 8.92x in FY2025 and 12.72x on a last-twelve-months basis because EBITDA doubled while cash interest was broadly unchanged. That cover looks backward: scheduled interest of USD 65.0 million falls due within a year on debt at 2026-09-28, before the Incremental Facilities, and the 2034 senior unsecured notes alone cost USD 33.8 million a year, so 12.72x overstates the cover creditors now have.
Basis: 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 18; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 36; calculation C19; calculation C32; calculation C33; calculation C44

Operating cash flow was carried by working capital rather than earnings alone. In the first nine months of 2026 receivables and contract assets absorbed USD 574.9 million and payables supplied USD 376.0 million, and all working capital lines together were a net use of USD 169.7 million. Equipment of USD 167.3 million sat unpaid in payables, USD 104.7 million more than a year earlier, so cash capital spending of USD 251.6 million understates what has been committed, and income taxes payable of USD 50.6 million indicate tax expense still to be paid in cash. Free cash flow was USD 21.2 million against USD 5.8 million a year earlier.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 14; calculation C28; calculation C29; calculation C38; calculation C37; calculation C27; calculation C45

Liquidity at 2026-09-28 was USD 1,610.2 million, cash of USD 876.3 million plus USD 733.9 million of revolver availability, with USD 241.1 million of the cash in foreign subsidiaries; it is stated before the Epiq payment and the USD 180.0 million revolver repayment that followed. The maturity ladder is light until 2029: USD 181.0 million falls in the rest of 2026, USD 5.0 million in 2027 and USD 3.0 million in 2028, then USD 504.0 million in 2029 and USD 386.0 million in 2030. The Incremental Facilities add USD 300.0 million maturing in 2031 and USD 800.0 million in 2033.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 3; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 17–18; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 34; calculation C25; calculation C21; calculation C24; calculation C46

At 2026-09-28 the first-priority secured term loan (USD 399.0 million) and revolver (USD 260.0 million) rank ahead of the 2029 and 2034 senior unsecured notes (USD 500.0 million each). Cumulative principal through the notes is 2.84x last-twelve-months EBITDA against 2.81x on carrying value. Operating and finance leases, supplier finance and customer deposits sit outside the debt lines.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 17–18; calculation C20; calculation C40; calculation C17; calculation C47

Contract liabilities were USD 202.3 million against USD 175.6 million at year-end 2025, long-term customer deposits fell from USD 23.5 million to USD 17.6 million after USD 5.8 million was refunded, and supplier finance obligations carried in payables rose from USD 12.5 million to USD 21.5 million. These are small beside payables of USD 1,032.7 million, but they fund working capital and would reverse if customers or banks withdrew.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 14; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 21; calculation C39; calculation C48

The issuer states no EBITDA, so EBITDA here is operating income plus depreciation and amortization, a stricter measure than a lender-defined one: stock-based compensation of USD 61.7 million and acquisition-related and other charges of USD 18.5 million in the first nine months of 2026 are charged against it. Capital spending is gross in the annual reports and net in the interim reports, so a last-twelve-months free cash flow is not calculable, and segment reporting changed twice, so annual segment history does not compare with 2026.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 13; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; calculation C35; calculation C49

After 2026-09-28 the Epiq purchase closed on 2026-09-30 for USD 1,100.0 million of cash, funded by the Incremental Facilities and part of the proceeds of the 2034 notes; USD 180.0 million of revolver debt was repaid; shares costing about USD 100.0 million were bought on 2026-10-26 and 2026-10-27, with a further USD 100.0 million authorized on 2026-10-27; and an agreement to buy Ophir Optics for USD 650.0 million, announced on 2026-10-19, is expected to close in the second quarter of 2027. The 2026 capital expenditure outlook is USD 410.0 million to USD 430.0 million.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 17–18; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 20; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 24; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 34; calculation C22; calculation C23; calculation C50

### Contrary evidence and what would change the view

The strongest contrary evidence is that the Incremental Facilities of USD 1,100.0 million equal the Epiq price, so on stated amounts the cash and revolver availability of USD 1,610.2 million at 2026-09-28 was left largely in place, and the 3.20x pro forma net leverage overstates leverage if Epiq earns material EBITDA, which is not supplied. As an illustration only, USD 100.0 million of Epiq EBITDA would put pro forma net leverage at 2.73x. The view would change with Epiq's reported EBITDA and purchase accounting in the fourth quarter 2026 report, an adjusted EBITDA reconciliation, the revolver availability after closing, and the reported covenant ratios.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 24; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 34; calculation C25; calculation C22; calculation C34; calculation C51

### Limitations

Epiq's results, balance sheet and purchase price allocation are in no supplied document, so the pro forma figures use stated transaction amounts only and exclude Epiq's own earnings, cash and debt, fees and closing adjustments.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 24; Source readiness (CP-0)

The issuer's covenant ratios are not printed and the 2026 wording on term loan repayments is ambiguous, so scheduled amortization and covenant headroom are not established.
Basis: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 16–17; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 106

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2023-01-03 | 2024-01-01 |
| FY2024 | 2024-01-02 | 2024-12-30 |
| FY2025 | 2024-12-31 | 2025-12-29 |
| 9M 2025 | 2024-12-31 | 2025-09-29 |
| 9M 2026 | 2025-12-30 | 2026-09-28 |
| Q3 2025 | 2025-07-01 | 2025-09-29 |
| Q3 2026 | 2026-06-30 | 2026-09-28 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-30_ttmi-20241230.htm.jsonl | Annual report, Form 10-K | FY2024, FY2023, FY2022 | USD | thousands | TTM Technologies, Inc. and subsidiaries, consolidated | U.S. GAAP | Tier 1: audited by KPMG LLP | Year-end 2024 and 2023 balance sheet; debt note; FY2023 cash flow | Older source; the year-end 2024 figures agree with the FY2025 annual report; segments PCB and RF&S Components |
| 10-K_2025-12-29_ttmi-20251229.htm.jsonl | Annual report, Form 10-K | FY2025, FY2024, FY2023 | USD | thousands | TTM Technologies, Inc. and subsidiaries, consolidated | U.S. GAAP | Tier 1: audited by KPMG LLP | Annual income and cash flow statements; year-end 2025 balance sheet; debt, liquidity, segments | Pre-dates the 2026 refinancing and acquisitions; segments A&D, Commercial and RF&S Components |
| 10-Q_2026-03-30_ttmi-20260330.htm.jsonl | Quarterly report, Form 10-Q | Q1 2026 and Q1 2025 | USD | thousands | Consolidated | U.S. GAAP | Tier 2b: unaudited, no auditor review stated | Quarter sum check | Superseded for year-to-date figures by later 2026 reports |
| 10-Q_2026-06-29_ttmi-20260629.htm.jsonl | Quarterly report, Form 10-Q | Q2 2026, H1 2026 and 2025 comparatives | USD | thousands | Consolidated | U.S. GAAP | Tier 2b: unaudited, no auditor review stated | Six-month depreciation and amortization; June 2026 refinancing | Swiss Technology Group AG acquisition still pending |
| 10-Q_2026-09-28_ttmi-20260928.htm.jsonl | Quarterly report, Form 10-Q | Q3 2026, 9M 2026 and 2025 comparatives | USD | thousands | Consolidated; Swiss Technology Group AG from 2026-09-16; Epiq not included | U.S. GAAP | Tier 2b: unaudited, no auditor review stated | Latest balance sheet and nine-month statements; debt; subsequent events | Balance sheet precedes the Epiq closing; acquisition accounting provisional or incomplete |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TTM Technologies, Inc. | Issuer, borrower and registrant | Monday nearest December 31 (52 or 53 weeks); FY2025 ended 2025-12-29 | USD | thousands | Consolidated with its subsidiaries; Swiss Technology Group AG from 2026-09-16 | U.S. GAAP | FY2022 to FY2025; Q1 to Q3 2026 with 2025 comparatives |
| Domestic subsidiary guarantors | Guarantors of the senior notes and the credit agreement | As issuer | USD | not reported separately | Not reported separately from the consolidated group | U.S. GAAP | No separate financial statements supplied |
| Swiss Technology Group AG | Acquired subsidiary, Switzerland | As issuer | CHF functional; reported in USD | thousands | Consolidated from 2026-09-16 (cash consideration 401.161 US$m) | U.S. GAAP, provisional acquisition accounting | Balance sheet at 2026-09-28 only |
| EDS Intermediate Holding, LLC (Epiq) | Acquired company, closed after the balance sheet date | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Outside every period supplied; became a guarantor on 2026-09-30 | Not supplied: initial accounting not yet available | None |

Subsequent events after the 2026-09-28 balance sheet, each flagged with its date and kept out of the period figures: the Epiq acquisition closed on 2026-09-30; the Third Amended and Restated Credit Agreement and the Incremental Facilities took effect on 2026-09-30; revolver debt was repaid after the quarter end on a date the filing does not give; shares were repurchased on 2026-10-26 and 2026-10-27; a new share repurchase authorization was approved on 2026-10-27; and an agreement to acquire Ophir Optics was announced on 2026-10-19 with closing expected in the second quarter of 2027.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Statements restated from USD thousands to US$ millions in the money tables | All five filings | Unit | Thousands as printed | Millions to three decimals, exact | The money tables use millions; no value is rounded | All |
| EBITDA (Reported) constructed as operating income plus depreciation plus amortization of intangible assets | 10-K_2025-12-29_ttmi-20251229.htm.jsonl; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl | Calculated | No EBITDA stated by the issuer | FY2023 203.047; FY2024 266.168; FY2025 411.855; 9M 2025 293.743; 9M 2026 466.153; Q3 2025 108.711; Q3 2026 205.787 (US$m) | Unadjusted measure per the method; the filings state no EBITDA or adjusted EBITDA | All income statement columns |
| Goodwill impairments left inside EBITDA (Reported) | 10-K_2025-12-29_ttmi-20251229.htm.jsonl | Analyst Judgement: no adjustment | Impairment 44.100 (FY2023) and 32.600 (FY2024) | Not added back | Reported EBITDA is the unadjusted denominator; the effect is stated here so it can be added back by a reader | FY2023, FY2024 |
| Third-quarter depreciation and amortization taken from the segment and intangible notes | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl | Reported component | Not a quarterly cash flow line | Depreciation 34.310 and 27.580; amortization 9.224 and 9.225 (US$m) | The cash flow statement is year-to-date only; the notes state the quarter | Q3 2025, Q3 2026 |
| Total Liabilities derived as total current plus total long-term liabilities | 10-K_2024-12-30_ttmi-20241230.htm.jsonl; 10-K_2025-12-29_ttmi-20251229.htm.jsonl; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl | Calculated | Not printed | See the balance sheet table | The balance sheets print the two subtotals but no total | All balance sheet columns |
| Total Debt taken as short-term debt including current portion plus long-term debt net of discount and issuance costs | 10-K_2024-12-30_ttmi-20241230.htm.jsonl; 10-K_2025-12-29_ttmi-20251229.htm.jsonl; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl | Calculated | Two balance sheet lines | See the balance sheet table | Carrying value per the method; principal is shown separately | All balance sheet columns |
| Period start dates set to the day after the previous period end | 10-K_2024-12-30_ttmi-20241230.htm.jsonl; 10-K_2025-12-29_ttmi-20251229.htm.jsonl; 10-Q_2026-06-29_ttmi-20260629.htm.jsonl; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl | Derived date | Only period ends are printed | See the Period table | The filings print period ends; the start follows the 52 or 53 week calendar | All |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 2232567 | 2442753 | 2906345 | 2132025 | 3053885 | 752736 | 1203855 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Cost of goods sold | 1819299 | 1965378 | 2304659 | 1696208 | 2368982 | 596000 | 911991 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Gross profit | 413268 | 477375 | 601686 | 435817 | 684903 | 156736 | 291864 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Selling and marketing | 76922 | 80030 | 85460 | 64383 | 75626 | 21796 | 25142 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| General and administrative | 149631 | 170107 | 192149 | 142091 | 218406 | 48598 | 87554 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Research and development | 27272 | 31845 | 28992 | 22111 | 25432 | 7038 | 9646 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Amortization of definite-lived intangibles (operating expenses line) | 48675 | 35550 | 27554 | 20666 | 20666 | 6889 | 6889 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Impairment of goodwill | 44100 | 32600 | Not supplied: dash in source | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Restructuring charges | 24352 | 11200 | 2847 | 2631 | 1016 | 509 | 380 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Total operating expenses | 370952 | 361332 | 337002 | 251882 | 341146 | 84830 | 129611 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Operating income | 42316 | 116043 | 264684 | 183935 | 343757 | 71906 | 162253 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Interest expense | -48124 | -47515 | -45334 | -32958 | -33905 | -10399 | -12809 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Loss on extinguishment of debt | -1154 | Not supplied: dash in source | Not supplied: dash in source | Not supplied: dash in source | -747 | Not supplied: dash in source | Not supplied: dash in source | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Gain on sale of subsidiary | 1270 | Not supplied: dash in source | Not supplied: dash in source | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Realized and unrealized losses on derivative instruments | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: dash in source | -20097 | Not supplied: dash in source | -6103 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Other, net | 5989 | 15421 | -9013 | -2648 | -7535 | 306 | -1640 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Total other expense, net | -42019 | -32094 | -54347 | -35606 | -62284 | -10093 | -20552 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Income before income taxes | 297 | 83949 | 210337 | 148329 | 281473 | 61813 | 141701 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Income tax provision | -19015 | -27650 | -32889 | -21566 | -63635 | -8758 | -56898 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Net income | -18718 | 56299 | 177448 | 126763 | 217838 | 53055 | 84803 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| Depreciation of property, plant, and equipment | 99155 | 105233 | 110274 | 82135 | 94724 | 27580 | 34310 | USD thousands | Reported: cash flow statement for annual and nine-month columns; segment note for the quarters | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 13 |
| Amortization of definite-lived intangible assets (total) | 61576 | 44892 | 36897 | 27673 | 27672 | 9225 | 9224 | USD thousands | Reported: includes the part booked in cost of goods sold | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15 |
| Stock-based compensation | 22887 | 29780 | 41668 | 29586 | 61738 | 11611 | 24090 | USD thousands | Reported: cash flow statement; segment note for the quarters | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| EBITDA (Reported) | 203047 | 266168 | 411855 | 293743 | 466153 | 108711 | 205787 | USD thousands | Calculated: operating income + depreciation + amortization of intangible assets; the issuer states no EBITDA; impairments not added back | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 13; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | -18718 | 56299 | 177448 | 126763 | 217838 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Depreciation of property, plant, and equipment | 99155 | 105233 | 110274 | 82135 | 94724 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Amortization of definite-lived intangible assets | 61576 | 44892 | 36897 | 27673 | 27672 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Amortization of debt discount and issuance costs | 2205 | 2042 | 2157 | 1609 | 1895 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Loss on extinguishment of debt | 1154 | Not supplied: dash in source | Not supplied: dash in source | Not supplied: dash in source | 747 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Deferred income taxes | -11347 | -1722 | 3349 | 1461 | 19003 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Stock-based compensation | 22887 | 29780 | 41668 | 29586 | 61738 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Impairment of goodwill | 44100 | 32600 | Not supplied: dash in source | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Gain on sale of subsidiary | -1270 | Not supplied: dash in source | Not supplied: dash in source | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Unrealized loss on derivative instruments | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: dash in source | 12710 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Other (operating adjustments) | -516 | -1899 | 5376 | 5512 | 6252 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Accounts receivable, net | 49936 | -35054 | -115130 | -51536 | -259039 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Contract assets | 42589 | -89332 | -86624 | -65585 | -315828 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Inventories | -45392 | -11910 | -25072 | -28702 | -67332 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Prepaid expenses and other assets | -6034 | -2688 | -22489 | -11667 | -52473 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Accounts payable | -34582 | 49719 | 138971 | 102253 | 375981 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Contract liabilities | 22527 | 44407 | 4712 | -21547 | 26715 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Accrued salaries, wages, and benefits | -16447 | 9588 | 24038 | 22944 | 28214 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Other liabilities | -24539 | 4939 | -3693 | 8053 | 94066 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Net Cash from Operating Activities | 187284 | 236894 | 291882 | 228952 | 272883 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Purchases of property, plant, and equipment and other assets | -160242 | -185739 | -292565 | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported: the annual reports print gross purchases | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Net purchases of property, plant, and equipment and other assets | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | -223176 | -251636 | USD thousands | Reported: the interim reports print capital spending net of proceeds | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Proceeds from capital-related government incentives | Not supplied: dash in source | Not supplied: dash in source | 17844 | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Proceeds from sale of property, plant, and equipment and other assets | 505 | 32868 | 781 | 489 | 14498 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Proceeds from sale of SH E-MS property | 61769 | 6737 | Not supplied: dash in source | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Proceeds from sale of subsidiary, net of cash disposed | 6039 | Not supplied: dash in source | Not supplied: dash in source | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Acquisition of STG, net of cash acquired | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: dash in source | -369129 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Other (investing) | -101 | -76 | Not supplied: dash in source | Not supplied: dash in source | -7387 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Net Cash from Investing Activities | -92030 | -146210 | -273940 | -222687 | -613654 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Repurchases of common stock | -24432 | -34479 | -17875 | -17875 | Not supplied: dash in source | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Repayment of long-term debt borrowings | -291572 | -9596 | -3795 | -2845 | -344310 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Proceeds from long-term debt borrowings | 234818 | 8416 | Not supplied: dash in source | Not supplied: dash in source | 1079159 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Payment of debt issuance costs | -5487 | -1162 | Not supplied: dash in source | Not supplied: dash in source | -12000 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Proceeds from borrowings of revolving loan | 50000 | Not supplied: dash in source | Not supplied: dash in source | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Customer deposits received | Not supplied: dash in source | Not supplied: dash in source | 1500 | 1500 | Not supplied: dash in source | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Refund or repayment of customer deposits | -7500 | Not supplied: dash in source | Not supplied: dash in source | Not supplied: dash in source | -5750 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Payment of original issue discount | -3500 | Not supplied: dash in source | Not supplied: dash in source | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Proceeds from exercise of stock options | Not supplied: dash in source | Not supplied: dash in source | 236 | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Other (financing) | Not supplied: dash in source | Not supplied: dash in source | -987 | Not supplied: dash in source | -1451 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Net Cash from Financing Activities | -47673 | -36821 | -20921 | -19220 | 715648 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| FX Effect on Cash | -122 | -139 | 281 | 143 | 236 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Net Cash Change | 47459 | 53724 | -2698 | -12812 | 375113 | USD thousands | Reported: operating plus investing plus financing plus the FX effect | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Opening Cash | 402749 | 450208 | 503932 | 503932 | 501234 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Closing Cash | 450208 | 503932 | 501234 | 491120 | 876347 | USD thousands | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Cash Interest Paid | 47884 | 48988 | 46197 | 39807 | 39535 | USD thousands | Reported: supplemental cash paid, net for interest | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Cash paid, net for income taxes | 53751 | 18766 | 37437 | 19426 | 11300 | USD thousands | Reported: supplemental, net | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 87–88; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 450208 | 503932 | 501234 | 876347 | USD thousands | Reported: Cash and cash equivalents | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Accounts receivable, net | 413557 | 448611 | 563741 | 836362 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Contract assets | 292050 | 381382 | 468006 | 793552 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Inventories | 213075 | 224985 | 250057 | 325432 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Receivable from sale of SH E-MS property | 6737 | Not supplied: dash in source | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Prepaid expenses and other current assets | 54060 | 47834 | 72368 | 130024 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Total current assets | 1429687 | 1606744 | 1855406 | 2961717 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Property, plant, and equipment, net | 807667 | 869957 | 1010710 | 1286879 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Operating lease right-of-use assets | 86286 | 78252 | 80914 | 96164 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Goodwill | 702735 | 670135 | 670135 | 872665 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Definite-lived intangibles, net | 236711 | 191819 | 154922 | 238250 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Deposits and other non-current assets | 60577 | 55587 | 68244 | 107245 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Total Assets | 3323663 | 3472494 | 3840331 | 5562920 | USD thousands | Reported: Total assets | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Short-term debt, including current portion of long-term debt | 3500 | 3795 | 3815 | 184000 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Accounts payable | 334609 | 406221 | 543538 | 1032661 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Contract liabilities | 126508 | 170915 | 175627 | 202342 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Accrued salaries, wages, and benefits | 98561 | 108149 | 132967 | 163552 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Other current liabilities | 140806 | 119974 | 106250 | 190930 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Total current liabilities | 703984 | 809054 | 962197 | 1773485 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Long-term debt, net of discount and issuance costs | 914336 | 914359 | 912336 | 1459872 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Operating lease liabilities | 80786 | 77509 | 87524 | 102798 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Other long-term liabilities | 113518 | 107748 | 116021 | 184323 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Total long-term liabilities | 1108640 | 1099616 | 1115881 | 1746993 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Total Liabilities | 1812624 | 1908670 | 2078078 | 3520478 | USD thousands | Calculated: total current plus total long-term liabilities; no total is printed | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Common stock | 111 | 113 | 115 | 115 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Treasury stock | -123091 | -157570 | -174744 | -146633 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Additional paid-in capital | 880963 | 910741 | 951942 | 984955 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Retained earnings | 782123 | 838422 | 1015870 | 1233708 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Accumulated other comprehensive loss | -29067 | -27882 | -30930 | -29703 | USD thousands | Reported | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Total Equity | 1511039 | 1563824 | 1762253 | 2042442 | USD thousands | Reported: Total stockholders' equity | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| Total Debt | 917836 | 918154 | 916151 | 1643872 | USD thousands | Calculated: short-term debt including current portion plus long-term debt net of discount and issuance costs, carrying value; operating lease liabilities and finance leases in other liabilities are outside it | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Senior Notes due March 2029 | Senior notes | 497978 | 500000 | 500000 | Not applicable | Unsecured | Senior unsecured, guaranteed by domestic subsidiaries | USD | 497978 | Not applicable | 4.000% | fixed | Not applicable | Not applicable | Not applicable | 2029-03-01 | 0 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 16–18; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 20–21 |
| Senior Notes due October 2034 | Senior notes | 490961 | 500000 | 500000 | Not applicable | Unsecured | Senior unsecured, guaranteed by domestic subsidiaries | USD | 490961 | Not applicable | 6.750% | fixed | Not applicable | Not applicable | Not applicable | 2034-10-01 | 0 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 16–18; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 20–21 |
| Amended Term Loan Facility | Senior secured term loan | 394933 | 399000 | 399000 | Not applicable | Secured by a first-priority lien on substantially all assets of the Company and the guarantors | Senior secured, first priority | USD | 394933 | Not applicable | 1-month CME Term SOFR plus 1.75% (5.65% at 2026-09-28) | floating | 1-month CME Term SOFR | 175 | Not applicable | 2030-05-30 | 4000 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 16–18; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 20–21 |
| RCF | Senior secured revolving credit facility | 260000 | 260000 | 260000 | 1000000 | Secured by a first-priority lien on substantially all assets of the Company and the guarantors | Senior secured, first priority | USD | 260000 | Not applicable | 1-month CME Term SOFR plus 1.25% to 2.25% by leverage (5.40% at 2026-09-28) | floating | 1-month CME Term SOFR | 125 to 225 | Not applicable | 2031-05 | 0 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 16–18; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 20–21 |

Carrying values sum to the balance sheet Total Debt of 1,643,872 thousand (497,978 + 490,961 + 394,933 + 260,000). The revolver issuance costs of 5,385 thousand sit in other non-current assets, so its carrying value equals its principal. The Incremental Facilities (Term Loan A of 300,000 thousand maturing 2031-05-30 and Term Loan B of 800,000 thousand maturing 2033-09-30) were funded on 2026-09-30, after the balance sheet date, and are not instruments at the latest balance sheet date. The 2026 wording on term loan repayments is ambiguous, so the annual amortization shown is the 4,000 thousand current portion on the balance sheet.

### Segment schedule

| Period | Business unit | Segment basis | Segment sales | Segment operating income | Unit | Source |
| --- | --- | --- | --- | --- | --- | --- |
| FY2025 | A&D | A&D, Commercial, RF&S Components | 1292523 | 183813 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2025 | Commercial | A&D, Commercial, RF&S Components | 1585701 | 238781 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2025 | RF&S Components | A&D, Commercial, RF&S Components | 40014 | 11253 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2025 | Corporate, unallocated amounts and eliminations | A&D, Commercial, RF&S Components | -11893 | -169163 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2024 | A&D | A&D, Commercial, RF&S Components | 1139955 | 141800 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2024 | Commercial | A&D, Commercial, RF&S Components | 1275701 | 179782 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2024 | RF&S Components | A&D, Commercial, RF&S Components | 37317 | 8666 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2024 | Corporate, unallocated amounts and eliminations | A&D, Commercial, RF&S Components | -10220 | -214205 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2023 | A&D | A&D, Commercial, RF&S Components | 1045983 | 95021 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2023 | Commercial | A&D, Commercial, RF&S Components | 1164672 | 171379 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2023 | RF&S Components | A&D, Commercial, RF&S Components | 38619 | 10955 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| FY2023 | Corporate, unallocated amounts and eliminations | A&D, Commercial, RF&S Components | -16707 | -235039 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| 9M 2026 | A&D | A&D, Commercial | 1150954 | 195681 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| 9M 2026 | Commercial | A&D, Commercial | 1904530 | 360523 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| 9M 2026 | Corporate, unallocated amounts and eliminations | A&D, Commercial | -1599 | -212447 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| 9M 2025 | A&D | A&D, Commercial | 995915 | 146524 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| 9M 2025 | Commercial | A&D, Commercial | 1137249 | 163749 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| 9M 2025 | Corporate, unallocated amounts and eliminations | A&D, Commercial | -1139 | -126338 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| Q3 2026 | A&D | A&D, Commercial | 416540 | 77041 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| Q3 2026 | Commercial | A&D, Commercial | 787882 | 166279 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| Q3 2026 | Corporate, unallocated amounts and eliminations | A&D, Commercial | -567 | -81067 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| Q3 2025 | A&D | A&D, Commercial | 344482 | 56010 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| Q3 2025 | Commercial | A&D, Commercial | 408920 | 60031 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| Q3 2025 | Corporate, unallocated amounts and eliminations | A&D, Commercial | -666 | -44135 | USD thousands | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |

Segment sales include intersegment sales; the sum of each period equals reported net sales after eliminations. The corporate row is calculated as consolidated operating income less the segment total, which equals the issuer-itemised unallocated amounts (restructuring, impairment, acquisition-related charges, stock-based compensation, other corporate expenses and amortization). The 2026 reports moved RF&S Components into A&D, so the FY2023 to FY2025 rows and the 2026 rows are on different bases and are not comparable.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | LTM to 2026-09-28 | USD 2,906.345m | USD 3,053.885m | USD 2,132.025m | USD 3,828.205m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 | Last twelve months = FY2025 + 9M 2026 - 9M 2025 |
| Gross profit | LTM to 2026-09-28 | USD 601.686m | USD 684.903m | USD 435.817m | USD 850.772m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 | Last twelve months = FY2025 + 9M 2026 - 9M 2025 |
| Operating income | LTM to 2026-09-28 | USD 264.684m | USD 343.757m | USD 183.935m | USD 424.506m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 | Last twelve months = FY2025 + 9M 2026 - 9M 2025 |
| EBITDA (Reported) | LTM to 2026-09-28 | USD 411.855m | USD 466.153m | USD 293.743m | USD 584.265m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 | Last twelve months = FY2025 + 9M 2026 - 9M 2025; constructed, not issuer-stated |
| Net income | LTM to 2026-09-28 | USD 177.448m | USD 217.838m | USD 126.763m | USD 268.523m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 | Last twelve months = FY2025 + 9M 2026 - 9M 2025 |
| Net cash from operating activities | LTM to 2026-09-28 | USD 291.882m | USD 272.883m | USD 228.952m | USD 335.813m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 | Last twelve months = FY2025 + 9M 2026 - 9M 2025 |
| Cash interest paid | LTM to 2026-09-28 | USD 46.197m | USD 39.535m | USD 39.807m | USD 45.925m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 | Last twelve months = FY2025 + 9M 2026 - 9M 2025 |
| Capital spending | LTM to 2026-09-28 | USD 292.565m | USD 251.636m | USD 223.176m | Not calculable: the annual figure is gross purchases and the interim figures are net of proceeds, so the stubs are not comparable | Not Calculable | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 | Not Comparable |
| Net sales | Q4 2025 (FY2025 less 9M 2025; no fourth-quarter report supplied) | USD 2,906.345m | USD 2,132.025m | Not applicable | USD 774.320m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 | Calculated and labelled: a fourth quarter is not reported separately |
| Operating income | Q4 2025 (FY2025 less 9M 2025; no fourth-quarter report supplied) | USD 264.684m | USD 183.935m | Not applicable | USD 80.749m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 | Calculated and labelled: a fourth quarter is not reported separately |
| EBITDA (Reported) | Q4 2025 (FY2025 less 9M 2025; no fourth-quarter report supplied) | USD 411.855m | USD 293.743m | Not applicable | USD 118.112m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 | Calculated and labelled: a fourth quarter is not reported separately |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2024-01-01 | 917.836 | 450.208 | 467.628 | US$m | FY2023 year-end; reported; gross debt is short-term debt 3.500 plus long-term debt 914.336 at carrying value, net of issuance costs and discount; contractual principal 929.125 beside it; finance leases and operating leases are outside the debt lines |
| 2024-12-30 | 918.154 | 503.932 | 414.222 | US$m | FY2024 year-end; reported; gross debt is short-term debt 3.795 plus long-term debt 914.359 at carrying value; contractual principal 927.945 beside it; leases outside the debt lines |
| 2025-12-29 | 916.151 | 501.234 | 414.917 | US$m | FY2025 year-end; reported; gross debt is short-term debt 3.815 plus long-term debt 912.336 at carrying value; contractual principal 924.150 beside it; leases outside the debt lines |
| 2026-09-28 | 1643.872 | 876.347 | 767.525 | US$m | Latest balance sheet; reported, before the Epiq closing; gross debt is short-term debt 184.000 plus long-term debt 1459.872 at carrying value; contractual principal 1659.000 beside it; cash includes proceeds of the 2034 notes issued on 2026-09-24 that funded Epiq on 2026-09-30; leases outside the debt lines |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| 2024-01-01 | 4.52 | 2.30 | x | Total debt and net debt at carrying value over EBITDA (Reported), constructed from operating income plus depreciation and amortization; fiscal-year EBITDA |
| 2024-12-30 | 3.45 | 1.56 | x | Total debt and net debt at carrying value over EBITDA (Reported), constructed from operating income plus depreciation and amortization; fiscal-year EBITDA |
| 2025-12-29 | 2.22 | 1.01 | x | Total debt and net debt at carrying value over EBITDA (Reported), constructed from operating income plus depreciation and amortization; fiscal-year EBITDA |
| 2026-09-28 | 2.81 | 1.31 | x | Total debt and net debt at carrying value over EBITDA (Reported), constructed from operating income plus depreciation and amortization; last-twelve-months EBITDA to 2026-09-28; before the Epiq closing |

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2024-01-01 | 4.24 | x | EBITDA (Reported) over cash interest paid, net; fiscal year |
| 2024-12-30 | 5.43 | x | EBITDA (Reported) over cash interest paid, net; fiscal year |
| 2025-12-29 | 8.92 | x | EBITDA (Reported) over cash interest paid, net; fiscal year |
| 2026-09-28 | 12.72 | x | EBITDA (Reported) over cash interest paid, net; last-twelve-months to 2026-09-28; excludes interest on the Incremental Facilities funded after quarter end |

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| 2024-01-01 | 450.208 | Not supplied: FY2023 annual report not supplied | US$m | FY2023 year-end; cash reported; availability of the revolving facilities at that date is in the FY2023 annual report, which is not supplied |
| 2024-12-30 | 503.932 | 195.572 | US$m | FY2024 year-end; cash reported; undrawn is the U.S. ABL availability 142.503 plus Asia ABL availability 53.069 after letters of credit |
| 2025-12-29 | 501.234 | 195.832 | US$m | FY2025 year-end; cash reported; undrawn is the U.S. ABL availability 143.372 plus Asia ABL availability 52.460 after letters of credit |
| 2026-09-28 | 876.347 | 733.866 | US$m | Latest balance sheet; cash reported with 241.1 held by foreign subsidiaries; undrawn is the RCF availability; excludes the 8.5 banking facility for letters of credit; before the Epiq payment and the 180.000 revolver repayment |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Remaining 2026 | 181.000 | US$m | Fiscal calendar maturities at 2026-09-28; Analyst Judgement: equals the 180.000 revolver repayment made after quarter end plus 1.000 of term loan |
| 2027 | 5.000 | US$m | Fiscal calendar maturity at 2026-09-28; term loan repayments |
| 2028 | 3.000 | US$m | Fiscal calendar maturity at 2026-09-28; term loan repayments |
| 2029 | 504.000 | US$m | Fiscal calendar maturity at 2026-09-28; the 4.000% notes of 500.000 plus term loan repayments of 4.000 |
| 2030 | 386.000 | US$m | Fiscal calendar maturity at 2026-09-28; term loan balance due 2030-05-30 |
| Thereafter | 580.000 | US$m | Fiscal calendar maturities at 2026-09-28; the 2034 notes of 500.000 plus revolver of 80.000 due 2031-05; excludes the Incremental Facilities funded after quarter end |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-28 | 1659.000 | -15.128 | 1643.872 | US$m | Principal is the sum of the maturity ladder; reconciling items are unamortized issuance costs of -13.402 and unamortized discount of -1.726; no debt is left out of the ladder; carrying value is the Gross debt of Net debt data |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Epiq acquisition closed for cash consideration of USD 1,100.0 million, funded by the Incremental Facilities and part of the 2034 notes proceeds | 2026-09-30 | 1100.000 | 1867.525 | 3.20 | US$m | Applied alone to net debt at 2026-09-28; not cumulative; excludes fees and closing adjustments and Epiq cash and debt; source: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 17–18 and 24; net debt rises by the price because the cash is paid out; gross debt would be 2563.872 after the Incremental Facilities of 1100.000 and the revolver repayment of 180.000; Epiq EBITDA is not in the denominator |
| Share repurchase of about 1.159 million shares costing about USD 100.0 million, including commissions | Not supplied: the source states 2026-10-26 to 2026-10-27, two days, and not the day of each purchase | 100.000 | 867.525 | 1.48 | US$m | Applied alone to net debt at 2026-09-28; not cumulative; excludes fees and closing adjustments and Epiq cash and debt; source: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 20 and 35 |
| Agreement to acquire Ophir Optics for USD 650.0 million in cash, expected to close in the second quarter of 2027 | 2026-10-19 | Not supplied: not completed; closing is expected in the second quarter of 2027 | Not supplied: not completed | Not supplied: not completed | US$m | Announced agreement only, so no effect on net debt yet; if completed for the stated price, net debt would rise by 650.000; source: 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 24 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| 2024-01-01 | 2232.567 | 203.047 | US$m | EBITDA is reported (constructed from operating income plus depreciation and amortization), not issuer-adjusted; fiscal year |
| 2024-12-30 | 2442.753 | 266.168 | US$m | EBITDA is reported (constructed from operating income plus depreciation and amortization), not issuer-adjusted; fiscal year |
| 2025-12-29 | 2906.345 | 411.855 | US$m | EBITDA is reported (constructed from operating income plus depreciation and amortization), not issuer-adjusted; fiscal year |
| 2026-09-28 | 3828.205 | 584.265 | US$m | EBITDA is reported (constructed from operating income plus depreciation and amortization), not issuer-adjusted; last twelve months to 2026-09-28, twelve months like the other rows |

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Amended Term Loan Facility due 2030-05-30 | 1 | Yes | 399.000 | 0.68 | US$m | Principal at 2026-09-28; first-priority lien on substantially all assets of the Company and the guarantors, with a 65% pledge limit on certain foreign subsidiaries; guaranteed by domestic subsidiaries; cumulative over LTM EBITDA (Reported) 584.265; ranked with the revolver because one first-priority lien secures both, relative payment priority between them is not stated |
| RCF due 2031-05 | 1 | Yes | 260.000 | 1.13 | US$m | Drawn principal at 2026-09-28 of a 1000.000 commitment; same collateral and guarantors as the term loan; undrawn availability 733.866 is not counted as debt |
| Senior Notes due 2029-03-01 (4.000%) | 2 | No | 500.000 | 1.98 | US$m | Principal; senior unsecured obligations of the Company guaranteed on a senior unsecured basis by existing and future domestic subsidiaries |
| Senior Notes due 2034-10-01 (6.750%) | 2 | No | 500.000 | 2.84 | US$m | Principal; senior unsecured, same guarantor scope as the 2029 notes; the Incremental Facilities funded on 2026-09-30 are not at the balance sheet date and are left out |

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA | Not supplied: the issuer states no adjusted EBITDA, so there is no bridge from the reported measure | US$m | First row is EBITDA (Reported), constructed from operating income plus depreciation and amortization |
| Adjusted EBITDA | Not supplied: no issuer-stated adjusted EBITDA or add-backs in any of the five filings | US$m | Last row would be the issuer-stated adjusted measure; no add-back is stated, so none is inferred |

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 2232.567 | 2442.753 | 2906.345 | 3828.205 | US$m | Reported; LTM calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Gross profit | 413.268 | 477.375 | 601.686 | 850.772 | US$m | Reported; LTM calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| EBITDA (Reported) | 203.047 | 266.168 | 411.855 | 584.265 | US$m | Calculated: operating income + depreciation + amortization | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| EBITDA margin | 9.09 | 10.90 | 14.17 | 15.26 | % | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Net income | -18.718 | 56.299 | 177.448 | 268.523 | US$m | Reported; LTM calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Net cash from operating activities | 187.284 | 236.894 | 291.882 | 335.813 | US$m | Reported; LTM calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Free cash flow (operating cash flow less capital spending) | 27.042 | 51.155 | -0.683 | Not calculable: annual capital spending is gross and interim is net | US$m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Total debt (carrying value) | 917.836 | 918.154 | 916.151 | 1643.872 | US$m | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Cash | 450.208 | 503.932 | 501.234 | 876.347 | US$m | Reported | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Net debt | 467.628 | 414.222 | 414.917 | 767.525 | US$m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Total debt / EBITDA | 4.52 | 3.45 | 2.22 | 2.81 | x | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Net debt / EBITDA | 2.30 | 1.56 | 1.01 | 1.31 | x | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| EBITDA / cash interest | 4.24 | 5.43 | 8.92 | 12.72 | x | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| Cash plus undrawn committed facilities | Not supplied: FY2023 annual report not supplied | 699.504 | 697.066 | 1610.213 | US$m | Calculated | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 917.836 | Net debt data Gross debt 2024-01-01 | 203.047 | T4.4 EBITDA (Reported) FY2023 | 2024-01-01 | USD | US$m | 4.52 | Calculated | Tier 1 | Carrying value basis |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 467.628 | Net debt data Net debt 2024-01-01 | 203.047 | T4.4 EBITDA (Reported) FY2023 | 2024-01-01 | USD | US$m | 2.30 | Calculated | Tier 1 | Carrying value basis |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 203.047 | T4.4 EBITDA (Reported) FY2023 | 47.884 | T4.5 Cash Interest Paid FY2023 | 2024-01-01 | USD | US$m | 4.24 | Calculated | Tier 1 | Cash interest is cash paid, net, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 918.154 | Net debt data Gross debt 2024-12-30 | 266.168 | T4.4 EBITDA (Reported) FY2024 | 2024-12-30 | USD | US$m | 3.45 | Calculated | Tier 1 | Carrying value basis |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 414.222 | Net debt data Net debt 2024-12-30 | 266.168 | T4.4 EBITDA (Reported) FY2024 | 2024-12-30 | USD | US$m | 1.56 | Calculated | Tier 1 | Carrying value basis |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 266.168 | T4.4 EBITDA (Reported) FY2024 | 48.988 | T4.5 Cash Interest Paid FY2024 | 2024-12-30 | USD | US$m | 5.43 | Calculated | Tier 1 | Cash interest is cash paid, net, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 916.151 | Net debt data Gross debt 2025-12-29 | 411.855 | T4.4 EBITDA (Reported) FY2025 | 2025-12-29 | USD | US$m | 2.22 | Calculated | Tier 1 | Carrying value basis |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 414.917 | Net debt data Net debt 2025-12-29 | 411.855 | T4.4 EBITDA (Reported) FY2025 | 2025-12-29 | USD | US$m | 1.01 | Calculated | Tier 1 | Carrying value basis |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 411.855 | T4.4 EBITDA (Reported) FY2025 | 46.197 | T4.5 Cash Interest Paid FY2025 | 2025-12-29 | USD | US$m | 8.92 | Calculated | Tier 1 | Cash interest is cash paid, net, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1643.872 | Net debt data Gross debt 2026-09-28 | 584.265 | T4.8 EBITDA (Reported) LTM | 2026-09-28 | USD | US$m | 2.81 | Calculated | Tier 2b | Last-twelve-months denominator; before the Epiq closing |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 767.525 | Net debt data Net debt 2026-09-28 | 584.265 | T4.8 EBITDA (Reported) LTM | 2026-09-28 | USD | US$m | 1.31 | Calculated | Tier 2b | Last-twelve-months denominator; before the Epiq closing |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 584.265 | T4.8 EBITDA (Reported) LTM | 45.925 | T4.8 cash interest paid LTM | 2026-09-28 | USD | US$m | 12.72 | Calculated | Tier 2b | Last-twelve-months denominator; before the Epiq closing |
| Gross margin | Gross profit / Net sales x 100 | 413.268 | T4.4 Gross profit FY2023 | 2232.567 | T4.4 Net sales FY2023 | FY2023 | USD | US$m | 18.51 | Calculated | Tier 1 |  |
| Gross margin | Gross profit / Net sales x 100 | 477.375 | T4.4 Gross profit FY2024 | 2442.753 | T4.4 Net sales FY2024 | FY2024 | USD | US$m | 19.54 | Calculated | Tier 1 |  |
| Gross margin | Gross profit / Net sales x 100 | 601.686 | T4.4 Gross profit FY2025 | 2906.345 | T4.4 Net sales FY2025 | FY2025 | USD | US$m | 20.70 | Calculated | Tier 1 |  |
| Gross margin | Gross profit / Net sales x 100 | 684.903 | T4.4 Gross profit 9M 2026 | 3053.885 | T4.4 Net sales 9M 2026 | 9M 2026 | USD | US$m | 22.43 | Calculated | Tier 2b |  |
| EBITDA margin | EBITDA (Reported) / Net sales x 100 | 203.047 | T4.4 EBITDA (Reported) FY2023 | 2232.567 | T4.4 Net sales FY2023 | FY2023 | USD | US$m | 9.09 | Calculated | Tier 1 |  |
| EBITDA margin | EBITDA (Reported) / Net sales x 100 | 266.168 | T4.4 EBITDA (Reported) FY2024 | 2442.753 | T4.4 Net sales FY2024 | FY2024 | USD | US$m | 10.90 | Calculated | Tier 1 |  |
| EBITDA margin | EBITDA (Reported) / Net sales x 100 | 411.855 | T4.4 EBITDA (Reported) FY2025 | 2906.345 | T4.4 Net sales FY2025 | FY2025 | USD | US$m | 14.17 | Calculated | Tier 1 |  |
| EBITDA margin | EBITDA (Reported) / Net sales x 100 | 466.153 | T4.4 EBITDA (Reported) 9M 2026 | 3053.885 | T4.4 Net sales 9M 2026 | 9M 2026 | USD | US$m | 15.26 | Calculated | Tier 2b |  |
| Net sales growth | (Net sales FY2025 / Net sales FY2024 - 1) x 100 | 2906.345 | T4.4 Net sales FY2025 | 2442.753 | T4.4 Net sales FY2024 | FY2025 | USD | US$m | 18.98 | Calculated | Tier 1 | Year on year change in percent |
| Net sales growth | (Net sales FY2024 / Net sales FY2023 - 1) x 100 | 2442.753 | T4.4 Net sales FY2024 | 2232.567 | T4.4 Net sales FY2023 | FY2024 | USD | US$m | 9.41 | Calculated | Tier 1 | Year on year change in percent |
| Net sales growth | (Net sales 9M 2026 / Net sales 9M 2025 - 1) x 100 | 3053.885 | T4.4 Net sales 9M 2026 | 2132.025 | T4.4 Net sales 9M 2025 | 9M 2026 | USD | US$m | 43.24 | Calculated | Tier 2b | Year on year change in percent |
| Capital spending / net sales | Capital spending / Net sales x 100 | 160.242 | T4.5 capital spending FY2023 | 2232.567 | T4.4 Net sales FY2023 | FY2023 | USD | US$m | 7.18 | Calculated | Tier 1 | Annual capital spending is gross and interim is net of proceeds |
| Capital spending / net sales | Capital spending / Net sales x 100 | 185.739 | T4.5 capital spending FY2024 | 2442.753 | T4.4 Net sales FY2024 | FY2024 | USD | US$m | 7.60 | Calculated | Tier 1 | Annual capital spending is gross and interim is net of proceeds |
| Capital spending / net sales | Capital spending / Net sales x 100 | 292.565 | T4.5 capital spending FY2025 | 2906.345 | T4.4 Net sales FY2025 | FY2025 | USD | US$m | 10.07 | Calculated | Tier 1 | Annual capital spending is gross and interim is net of proceeds |
| Capital spending / net sales | Capital spending / Net sales x 100 | 251.636 | T4.5 capital spending 9M 2026 | 3053.885 | T4.4 Net sales 9M 2026 | 9M 2026 | USD | US$m | 8.24 | Calculated | Tier 2b | Annual capital spending is gross and interim is net of proceeds |
| FCF conversion | Free cash flow / EBITDA (Reported) | 27.042 | Calculations: free cash flow FY2023 | 203.047 | T4.4 EBITDA (Reported) FY2023 | FY2023 | USD | US$m | 0.13 | Calculated | Tier 1 | Free cash flow is operating cash flow less capital spending as printed; FY2025 excludes 17.844 of capital-related government incentives shown separately in investing |
| FCF conversion | Free cash flow / EBITDA (Reported) | 51.155 | Calculations: free cash flow FY2024 | 266.168 | T4.4 EBITDA (Reported) FY2024 | FY2024 | USD | US$m | 0.19 | Calculated | Tier 1 | Free cash flow is operating cash flow less capital spending as printed; FY2025 excludes 17.844 of capital-related government incentives shown separately in investing |
| FCF conversion | Free cash flow / EBITDA (Reported) | -0.683 | Calculations: free cash flow FY2025 | 411.855 | T4.4 EBITDA (Reported) FY2025 | FY2025 | USD | US$m | -0.00 | Calculated | Tier 1 | Free cash flow is operating cash flow less capital spending as printed; FY2025 excludes 17.844 of capital-related government incentives shown separately in investing |
| FCF conversion | Free cash flow / EBITDA (Reported) | 21.247 | Calculations: free cash flow 9M 2026 | 466.153 | T4.4 EBITDA (Reported) 9M 2026 | 9M 2026 | USD | US$m | 0.05 | Calculated | Tier 2b | Free cash flow is operating cash flow less capital spending as printed; FY2025 excludes 17.844 of capital-related government incentives shown separately in investing |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Profitability | Gross margin (%) | 18.51 | 19.54 | 20.70 | 20.44 | 22.43 | Rising | Gross margin 18.51% in FY2023 to 22.43% in 9M 2026 |
| Profitability | Operating margin (%) | 1.90 | 4.75 | 9.11 | 8.63 | 11.26 | Rising | FY2023 and FY2024 carry goodwill impairments of 44.100 and 32.600 (US$m) |
| Profitability | EBITDA (Reported) margin (%) | 9.09 | 10.90 | 14.17 | 13.78 | 15.26 | Rising | Constructed EBITDA; no issuer-adjusted measure |
| Profitability | Net income margin (%) | -0.84 | 2.30 | 6.11 | 5.95 | 7.13 | Rising | FY2023 is a loss; the Q3 2026 tax provision of 56.898 on pre-tax income of 141.701 is 40.15% (US$m) |
| Segment (issuer-reported) | A&D segment operating margin (%) | 9.1 | 12.4 | 14.2 | 14.7 | 17.0 | Rising | Annual margins are on the A&D, Commercial, RF&S Components basis and the nine-month margins on the A&D and Commercial basis; not comparable |
| Segment (issuer-reported) | Commercial segment operating margin (%) | 14.7 | 14.1 | 15.1 | 14.4 | 18.9 | Rising since FY2024 | Same basis caution as the A&D margin |
| Customers (issuer-reported, rate) | Five largest customers, share of net sales (%) | 41 | 42 | 44 | 44 | 44 | Rising to FY2025, then flat | Share of net sales as printed; Q3 2026 alone is 42 and Q3 2025 is 45 |
| Working capital | Receivables plus contract assets (US$m, period end) | 705.607 | 829.993 | 1031.747 | Not supplied: no balance sheet at 2025-09-29 | 1629.914 | Rising | Period-end value; 9M 2026 column is the balance at 2026-09-28 |
| Working capital | Accounts payable (US$m, period end) | 334.609 | 406.221 | 543.538 | Not supplied: no balance sheet at 2025-09-29 | 1032.661 | Rising | Period-end value; includes equipment payables of 167.275 at 2026-09-28 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | EBITDA (Reported): unadjusted, operating income plus depreciation and amortization | No EBITDA or adjusted EBITDA is stated; stock-based compensation and acquisition-related charges are itemised outside segment results | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 | All | High: all leverage and cover ratios | Fundamental credit; Liquidity | Constructed EBITDA used; no add-back inferred |
| Debt carrying value against principal | Carrying value, net of issuance costs and discount | Principal 1659.000 against carrying value 1643.872 at 2026-09-28; difference 15.128 (US$m) | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15 | 2026-09-28 and each year-end | Medium: 0.9% of principal | Fundamental credit | Carrying value is the leverage numerator; principal shown beside it and in the debt stack |
| Term loan scheduled amortization | Annual principal due per the debt note | The 2026 reports say quarterly repayments equal to 1% of 400.000, which reads as 4.000 a quarter; the year-end 2025 report says an aggregate annual amount of 1% of the principal; the current portion on the balance sheet is 4.000 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 16; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 106; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 3 | 2026-06-29 and 2026-09-28 | Low: 12.000 a year | Liquidity | Annual reading used because it fits the current portion and the maturity ladder |
| Capital spending | Total capex as purchases of property, plant and equipment | Annual reports print gross purchases with separate proceeds lines; interim reports print net purchases | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 | FY2025 against 9M 2026 | Medium: LTM free cash flow not calculable | Fundamental credit | Interim and annual figures kept apart; no LTM capital spending |
| Swiss Technology Group AG purchase | One economic event, all figures with their roles | Total cash consideration 401.161; acquisition net of cash acquired 369.129 in investing cash flow; cash acquired 32.032 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 23 | 9M 2026 | Low: reconciles exactly | Fundamental credit | Net of cash acquired used for cash flow, total consideration for the purchase price |
| Epiq purchase | One economic event, all figures with their roles | Cash consideration 1100.000 subject to closing adjustments; funded by Incremental Facilities 1100.000 (300.000 plus 800.000) and part of the 2034 notes of 500.000 raised before quarter end | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 3; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 18; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 24 | After 2026-09-28 | High: lifts net leverage from 1.31x to 3.20x on stated amounts | Fundamental credit; Liquidity | Price used for net debt; fees, adjustments and Epiq balance sheet not supplied |
| Interest | Cash interest paid for cover; interest expense for earnings | 9M 2026 interest expense 33.905 against cash paid 39.535; FY2025 45.334 against 46.197 | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 | All | Low | Fundamental credit | Cover uses cash paid; the two are kept apart |
| Segments | Same segment basis in every period | Two segments (PCB and RF&S Components) in the FY2024 report; three (A&D, Commercial, RF&S Components) in the FY2025 report; two (A&D, Commercial) in 2026 | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, page 139; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 102; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 11 | FY2023 to 9M 2026 | Medium: no annual series on the 2026 basis | Business & governance | Segment schedule shows each basis; consolidated figures used for trend |
| Net debt | Gross debt less cash and equivalents | Cash at 2026-09-28 includes proceeds of the 2034 notes raised on 2026-09-24 that funded Epiq on 2026-09-30 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 18; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 34 | 2026-09-28 | High: period-end net debt is before the use of that cash | Fundamental credit; Liquidity | Pro forma shown in Post-balance-sheet adjustments, kept out of period figures |
| Covenant EBITDA and leverage | Not inferred | Revolver tests are on defined ratios of 2.50:1.00 minimum interest coverage and 4.50:1.00 maximum leverage; the definitions and ratios are not in the filings | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 17 | 2026-09-28 | High: headroom not calculable | Legal & covenants | No covenant capacity inferred from reported EBITDA |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Historical statements and year-end balance sheets | Ready | Every statement foots and ties across filings; some lines are dashes in the source | None |
| Reported leverage and cover to 2026-09-28 | Ready with Limitations | EBITDA is constructed; no adjusted measure; period end precedes the Epiq closing | Use the pro forma rows only as labelled estimates |
| Pro forma leverage after Epiq | Not Ready | Epiq earnings, cash, debt and fees are not supplied | Obtain the fourth quarter 2026 report with the purchase accounting |
| Covenant headroom | Not Ready | Ratios and definitions are not printed | Obtain the executed credit agreement and compliance certificates |
| Segment trend | Ready with Limitations | Three bases of segment reporting | Use consolidated figures for trend |
| Liquidity at 2026-09-28 | Ready with Limitations | Stated before the Epiq payment and the revolver repayment | Obtain the post-closing liquidity statement |
| Free cash flow trend | Ready with Limitations | Capital spending is gross in annual and net in interim reports | Treat the last twelve months as not calculable |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 22 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 4 |
| Fields present | 25 |
| Fields total | 26 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 15 |

## Calculations

Each check shows its inputs. Money amounts are in US$ millions to three decimals, exact from the thousands printed; the ratios are the register values.

| ID | Check | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | EBITDA (Reported) FY2023 | Operating income 42.316 + depreciation 99.155 + amortization of intangible assets 61.576 (US$m) | 203.047 (US$m) | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87 |
| C2 | EBITDA (Reported) FY2024 | Operating income 116.043 + depreciation 105.233 + amortization of intangible assets 44.892 (US$m) | 266.168 (US$m) | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87 |
| C3 | EBITDA (Reported) FY2025 | Operating income 264.684 + depreciation 110.274 + amortization of intangible assets 36.897 (US$m) | 411.855 (US$m) | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 85–86; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87 |
| C4 | EBITDA (Reported) 9M 2025 | Operating income 183.935 + depreciation 82.135 + amortization of intangible assets 27.673 (US$m) | 293.743 (US$m) | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| C5 | EBITDA (Reported) 9M 2026 | Operating income 343.757 + depreciation 94.724 + amortization of intangible assets 27.672 (US$m) | 466.153 (US$m) | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| C6 | EBITDA (Reported) Q3 2025 | Operating income 71.906 + depreciation 27.580 + amortization of intangible assets 9.225 (US$m) | 108.711 (US$m) | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 13; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15 |
| C7 | EBITDA (Reported) Q3 2026 | Operating income 162.253 + depreciation 34.310 + amortization of intangible assets 9.224 (US$m) | 205.787 (US$m) | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 13; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15 |
| C8 | LTM EBITDA (Reported) to 2026-09-28 | FY2025 411.855 + 9M 2026 466.153 - 9M 2025 293.743 (US$m) | 584.265 (US$m) | Calculated from the EBITDA rows above |
| C9 | LTM cash interest paid to 2026-09-28 | FY2025 46.197 + 9M 2026 39.535 - 9M 2025 39.807 (US$m) | 45.925 (US$m) | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| C10 | LTM net sales to 2026-09-28 | FY2025 2906.345 + 9M 2026 3053.885 - 9M 2025 2132.025 (US$m) | 3828.205 (US$m) | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| C11 | LTM operating income to 2026-09-28 | FY2025 264.684 + 9M 2026 343.757 - 9M 2025 183.935 (US$m) | 424.506 (US$m) | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| C12 | LTM net income to 2026-09-28 | FY2025 177.448 + 9M 2026 217.838 - 9M 2025 126.763 (US$m) | 268.523 (US$m) | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 86; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4 |
| C13 | LTM operating cash flow to 2026-09-28 | FY2025 291.882 + 9M 2026 272.883 - 9M 2025 228.952 (US$m) | 335.813 (US$m) | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| C14 | Total Liabilities (not printed): current plus long-term liabilities | FY2023: 703.984 + 1108.640; FY2024: 809.054 + 1099.616; FY2025: 962.197 + 1115.881; Q3 2026: 1773.485 + 1746.993 (US$m) | FY2023 1812.624; FY2024 1908.670; FY2025 2078.078; Q3 2026 3520.478 (US$m) | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| C15 | Total Debt: short-term debt including current portion plus long-term debt net of discount and issuance costs | FY2023: 3.500 + 914.336; FY2024: 3.795 + 914.359; FY2025: 3.815 + 912.336; Q3 2026: 184.000 + 1459.872 (US$m) | FY2023 917.836; FY2024 918.154; FY2025 916.151; Q3 2026 1643.872 (US$m) | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, pages 109–110; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 85; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 3–4 |
| C16 | Net debt = gross debt less cash | 2024-01-01: 917.836 - 450.208; 2024-12-30: 918.154 - 503.932; 2025-12-29: 916.151 - 501.234; 2026-09-28: 1643.872 - 876.347 (US$m) | 2024-01-01 467.628; 2024-12-30 414.222; 2025-12-29 414.917; 2026-09-28 767.525 (US$m) | Calculated from the Net debt data table |
| C17 | Total debt / EBITDA | 2024-01-01: 917.836 / 203.047; 2024-12-30: 918.154 / 266.168; 2025-12-29: 916.151 / 411.855; 2026-09-28: 1643.872 / 584.265 (US$m) | 2024-01-01 4.52x; 2024-12-30 3.45x; 2025-12-29 2.22x; 2026-09-28 2.81x | Calculated; LTM EBITDA at 2026-09-28 |
| C18 | Net debt / EBITDA | 2024-01-01: 467.628 / 203.047; 2024-12-30: 414.222 / 266.168; 2025-12-29: 414.917 / 411.855; 2026-09-28: 767.525 / 584.265 (US$m) | 2024-01-01 2.30x; 2024-12-30 1.56x; 2025-12-29 1.01x; 2026-09-28 1.31x | Calculated; LTM EBITDA at 2026-09-28 |
| C19 | EBITDA / cash interest paid | 2024-01-01: 203.047 / 47.884; 2024-12-30: 266.168 / 48.988; 2025-12-29: 411.855 / 46.197; 2026-09-28: 584.265 / 45.925 (US$m) | 2024-01-01 4.24x; 2024-12-30 5.43x; 2025-12-29 8.92x; 2026-09-28 12.72x | Calculated; LTM at 2026-09-28 |
| C20 | Contractual principal to carrying value at 2026-09-28 | Principal 500.000 + 500.000 + 399.000 + 260.000; less unamortized issuance costs 13.402 and discount 1.726 (US$m) | Principal 1659.000; reconciling items -15.128; carrying value 1643.872 (US$m) | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15 |
| C21 | Maturity ladder adds to principal | Remaining 2026 181.000 + 2027 5.000 + 2028 3.000 + 2029 504.000 + 2030 386.000 + thereafter 580.000 (US$m) | Total 1659.000, equal to the contractual principal 1659.000 (US$m) | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15 |
| C22 | Post-balance-sheet: Epiq cash consideration applied alone to net debt at 2026-09-28 | Net debt 767.525 + Epiq cash consideration 1100.000; over LTM EBITDA 584.265 (US$m) | Pro forma net debt 1867.525 (US$m); pro forma net leverage 3.20x | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 24 |
| C23 | Post-balance-sheet: share repurchase applied alone to net debt at 2026-09-28 | Net debt 767.525 + repurchase cost about 100.000; over LTM EBITDA 584.265 (US$m) | Pro forma net debt 867.525 (US$m); pro forma net leverage 1.48x | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 20 |
| C24 | Gross debt after the Incremental Facilities and the revolver repayment (not a table figure) | Carrying debt 1643.872 + Incremental Term Loan A 300.000 + Incremental Term Loan B 800.000 - revolver repaid 180.000 (US$m) | 2563.872 (US$m), before any other post-quarter borrowing or fees | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 3; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 17–18 |
| C25 | Liquidity = cash plus undrawn committed facilities | 2024-12-30: 503.932 + 195.572; 2025-12-29: 501.234 + 195.832; 2026-09-28: 876.347 + 733.866 (US$m) | 2024-12-30 699.504; 2025-12-29 697.066; 2026-09-28 1610.213 (US$m) | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, page 134; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 108; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 17; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 34 |
| C26 | Year-end undrawn facilities: U.S. ABL plus Asia ABL availability | 2024-12-30: 142.503 + 53.069; 2025-12-29: 143.372 + 52.460 (US$m) | 2024-12-30 195.572; 2025-12-29 195.832 (US$m) | 10-K_2024-12-30_ttmi-20241230.htm.jsonl, page 134; 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 108 |
| C27 | Free cash flow = operating cash flow less capital spending as the cash flow statement prints it | FY2023: 187.284 - 160.242; FY2024: 236.894 - 185.739; FY2025: 291.882 - 292.565; 9M 2025: 228.952 - 223.176; 9M 2026: 272.883 - 251.636 (US$m) | FY2023 27.042; FY2024 51.155; FY2025 -0.683; 9M 2025 5.776; 9M 2026 21.247 (US$m); annual capital spending is gross and interim is net, so not one basis | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, page 87; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| C28 | Working capital movement in operating cash flow, nine months 2026 | Receivables -259.039, contract assets -315.828, inventories -67.332, prepaid and other assets -52.473, payables 375.981, contract liabilities 26.715, accrued salaries 28.214, other liabilities 94.066 (US$m) | Net -169.696 (US$m); receivables plus contract assets -574.867 (US$m) | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| C29 | Operating cash flow bridge, nine months 2026 | Net income 217.838 + non-cash items (94.724 + 27.672 + 1.895 + 0.747 + 19.003 + 61.738 + 12.710 + 6.252 = 224.741) + working capital -169.696 (US$m) | 272.883 (US$m), equal to net cash from operating activities 272.883 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| C30 | Change from year-end 2025 to 2026-09-28 | Debt 1643.872 - 916.151; cash 876.347 - 501.234; net debt 767.525 - 414.917 (US$m) | Debt +727.721; cash +375.113; net debt +352.608 (US$m) | Calculated from the Net debt data table |
| C31 | Swiss Technology Group AG consideration net of cash acquired | Total cash consideration 401.161 - cash acquired 32.032 (US$m) | 369.129 (US$m), equal to the cash flow line Acquisition of STG, net of cash acquired 369.129 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 23 |
| C32 | Scheduled interest on debt obligations at 2026-09-28 | Within 1 year 65.0 + 1-3 years 166.7 + 4-5 years 72.3 + thereafter 118.0 (US$m) | 422.0 (US$m), equal to the stated total 422.0; excludes the Incremental Facilities funded after quarter end | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 36 |
| C33 | Annual interest on the 2034 senior unsecured notes at the stated rate | Principal 500.000 x 6.750% (US$m) | 33.750 (US$m) a year; interest first payable on 2027-04-01 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 18 |
| C34 | Illustration, not sourced: pro forma net leverage if Epiq contributed 100.000 of EBITDA | Pro forma net debt 1867.525 / (LTM EBITDA 584.265 + 100.000) (US$m) | 2.73x; Epiq's own EBITDA is not supplied, so this is a sensitivity only | Analyst Judgement |
| C35 | Costs inside reported EBITDA that the issuer itemises outside segment results, nine months 2026 | Stock-based compensation 61.738; acquisition-related and other charges 18.510 (US$m) | Together 80.248 (US$m), or 13.7% of 9M 2026 EBITDA (Reported) 466.153; no adjusted EBITDA is stated | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 13 |
| C36 | Segment sales (including intersegment) less eliminations equal net sales | FY2025 1292.523 + 1585.701 + 40.014 - 11.893; FY2024 1139.955 + 1275.701 + 37.317 - 10.220; FY2023 1045.983 + 1164.672 + 38.619 - 16.707; 9M 2026 1150.954 + 1904.530 - 1.599; 9M 2025 995.915 + 1137.249 - 1.139; Q3 2026 416.540 + 787.882 - 0.567; Q3 2025 344.482 + 408.920 - 0.666 (US$m) | FY2025 2906.345; FY2024 2442.753; FY2023 2232.567; 9M 2026 3053.885; 9M 2025 2132.025; Q3 2026 1203.855; Q3 2025 752.736 (US$m), each equal to reported net sales; difference 0 | 10-K_2025-12-29_ttmi-20251229.htm.jsonl, pages 102–103; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 12–13 |
| C37 | Tax expense not yet paid in cash, nine months 2026 | Income tax provision 63.635 - cash paid, net for income taxes 11.300 (US$m) | 52.335 (US$m); income taxes payable 50.586 at 2026-09-28 against 8.080 at 2025-12-29 | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 14 |
| C38 | Equipment unpaid at period end | Property, plant, and equipment recorded in accounts payable and other current liabilities: 167.275 at 2026-09-28; 62.561 at 2025-09-29 (US$m) | 104.714 more than a year earlier (US$m) | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 6 |
| C39 | Non-debt funding float | Contract liabilities 202.342 (2026-09-28) against 175.627 (2025-12-29); long-term customer deposits 17.575 against 23.465; supplier finance obligations in payables 21.531 against 12.535 (US$m) | Contract liabilities +26.715; customer deposits -5.890; supplier finance +8.996 (US$m) | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 4; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 14; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 21 |
| C40 | Cumulative principal through each facility over LTM EBITDA (Reported) at 2026-09-28 | Amended Term Loan Facility: 399.000 / 584.265; RCF: 659.000 / 584.265; Senior Notes due March 2029: 1159.000 / 584.265; Senior Notes due October 2034: 1659.000 / 584.265 (US$m) | Amended Term Loan Facility 0.68x; RCF 1.13x; Senior Notes due March 2029 1.98x; Senior Notes due October 2034 2.84x; on carrying value total debt / EBITDA is 2.81x | 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, page 15; 10-Q_2026-09-28_ttmi-20260928.htm.jsonl, pages 17–18 |
| C41 | Figures quoted in the findings: Bottom line, first paragraph | Exact values: Net debt at 2026-09-28: USD 767.525 million; Epiq cash consideration: USD 1100.000 million | Quoted, rounded half up to the decimals shown: Net debt at 2026-09-28: USD 767.5 million; Epiq cash consideration: USD 1,100.0 million | Rounded from the tables and checks above |
| C42 | Figures quoted in the findings: Bottom line, second paragraph | Exact values: Capital spending, nine months 2026: USD 251.636 million; Free cash flow, nine months 2026: USD 21.247 million; Operating cash flow, nine months 2026: USD 272.883 million; Rise in payables, nine months 2026: USD 375.981 million | Quoted, rounded half up to the decimals shown: Capital spending, nine months 2026: USD 251.6 million; Free cash flow, nine months 2026: USD 21.2 million; Operating cash flow, nine months 2026: USD 272.9 million; Rise in payables, nine months 2026: USD 376.0 million | Rounded from the tables and checks above |
| C43 | Figures quoted in the findings: Key findings, leverage | Exact values: EBITDA FY2023: USD 203.047 million; EBITDA FY2025: USD 411.855 million; Net sales FY2023: USD 2232.567 million; Net sales FY2025: USD 2906.345 million; Debt increase 2026: USD 727.721 million; Debt at 2026-09-28: USD 1643.872 million; Cash increase 2026: USD 375.113 million; Net debt increase 2026: USD 352.608 million; Swiss Technology Group AG consideration net of cash acquired: USD 369.129 million | Quoted, rounded half up to the decimals shown: EBITDA FY2023: USD 203.0 million; EBITDA FY2025: USD 411.9 million; Net sales FY2023: USD 2,232.6 million; Net sales FY2025: USD 2,906.3 million; Debt increase 2026: USD 727.7 million; Debt at 2026-09-28: USD 1,643.9 million; Cash increase 2026: USD 375.1 million; Net debt increase 2026: USD 352.6 million; Swiss Technology Group AG consideration net of cash acquired: USD 369.1 million | Rounded from the tables and checks above |
| C44 | Figures quoted in the findings: Key findings, interest cover | Exact values: Scheduled interest within one year: USD 65.0 million; Annual interest on the 2034 senior unsecured notes: USD 33.750 million | Quoted, rounded half up to the decimals shown: Scheduled interest within one year: USD 65.0 million; Annual interest on the 2034 senior unsecured notes: USD 33.8 million | Rounded from the tables and checks above |
| C45 | Figures quoted in the findings: Key findings, cash flow quality | Exact values: Receivables and contract assets increase: USD 574.867 million; Rise in payables: USD 375.981 million; Net working capital use: USD 169.696 million; Equipment in payables at 2026-09-28: USD 167.275 million; Increase in equipment in payables: USD 104.714 million; Capital spending, nine months 2026: USD 251.636 million; Income taxes payable at 2026-09-28: USD 50.586 million; Free cash flow, nine months 2026: USD 21.247 million; Free cash flow, nine months 2025: USD 5.776 million | Quoted, rounded half up to the decimals shown: Receivables and contract assets increase: USD 574.9 million; Rise in payables: USD 376.0 million; Net working capital use: USD 169.7 million; Equipment in payables at 2026-09-28: USD 167.3 million; Increase in equipment in payables: USD 104.7 million; Capital spending, nine months 2026: USD 251.6 million; Income taxes payable at 2026-09-28: USD 50.6 million; Free cash flow, nine months 2026: USD 21.2 million; Free cash flow, nine months 2025: USD 5.8 million | Rounded from the tables and checks above |
| C46 | Figures quoted in the findings: Key findings, liquidity and maturities | Exact values: Cash plus revolver availability: USD 1610.213 million; Cash: USD 876.347 million; Revolver availability: USD 733.866 million; Cash held by foreign subsidiaries: USD 241.1 million; Revolver repaid after quarter end: USD 180.000 million; Maturing in the rest of 2026: USD 181.000 million; Maturing 2027: USD 5.000 million; Maturing 2028: USD 3.000 million; Maturing 2029: USD 504.000 million; Maturing 2030: USD 386.000 million; Incremental Term Loan A: USD 300.000 million; Incremental Term Loan B: USD 800.000 million | Quoted, rounded half up to the decimals shown: Cash plus revolver availability: USD 1,610.2 million; Cash: USD 876.3 million; Revolver availability: USD 733.9 million; Cash held by foreign subsidiaries: USD 241.1 million; Revolver repaid after quarter end: USD 180.0 million; Maturing in the rest of 2026: USD 181.0 million; Maturing 2027: USD 5.0 million; Maturing 2028: USD 3.0 million; Maturing 2029: USD 504.0 million; Maturing 2030: USD 386.0 million; Incremental Term Loan A: USD 300.0 million; Incremental Term Loan B: USD 800.0 million | Rounded from the tables and checks above |
| C47 | Figures quoted in the findings: Key findings, ranking | Exact values: Term loan principal: USD 399.000 million; Revolver drawn: USD 260.000 million; Each senior unsecured note issue: USD 500.000 million | Quoted, rounded half up to the decimals shown: Term loan principal: USD 399.0 million; Revolver drawn: USD 260.0 million; Each senior unsecured note issue: USD 500.0 million | Rounded from the tables and checks above |
| C48 | Figures quoted in the findings: Key findings, non-debt funding float | Exact values: Contract liabilities at 2026-09-28: USD 202.342 million; Contract liabilities at 2025-12-29: USD 175.627 million; Customer deposits at 2025-12-29: USD 23.465 million; Customer deposits at 2026-09-28: USD 17.575 million; Customer deposits refunded: USD 5.750 million; Supplier finance at 2025-12-29: USD 12.535 million; Supplier finance at 2026-09-28: USD 21.531 million; Accounts payable at 2026-09-28: USD 1032.661 million | Quoted, rounded half up to the decimals shown: Contract liabilities at 2026-09-28: USD 202.3 million; Contract liabilities at 2025-12-29: USD 175.6 million; Customer deposits at 2025-12-29: USD 23.5 million; Customer deposits at 2026-09-28: USD 17.6 million; Customer deposits refunded: USD 5.8 million; Supplier finance at 2025-12-29: USD 12.5 million; Supplier finance at 2026-09-28: USD 21.5 million; Accounts payable at 2026-09-28: USD 1,032.7 million | Rounded from the tables and checks above |
| C49 | Figures quoted in the findings: Key findings, definitions | Exact values: Stock-based compensation, nine months 2026: USD 61.738 million; Acquisition-related and other charges, nine months 2026: USD 18.510 million | Quoted, rounded half up to the decimals shown: Stock-based compensation, nine months 2026: USD 61.7 million; Acquisition-related and other charges, nine months 2026: USD 18.5 million | Rounded from the tables and checks above |
| C50 | Figures quoted in the findings: Key findings, subsequent events | Exact values: Epiq cash consideration: USD 1100.000 million; Revolver repaid after quarter end: USD 180.000 million; Share repurchase: USD 100.000 million; New repurchase authorization: USD 100.000 million; Ophir Optics price: USD 650.000 million; Capex outlook low: USD 410.000 million; Capex outlook high: USD 430.000 million | Quoted, rounded half up to the decimals shown: Epiq cash consideration: USD 1,100.0 million; Revolver repaid after quarter end: USD 180.0 million; Share repurchase: USD 100.0 million; New repurchase authorization: USD 100.0 million; Ophir Optics price: USD 650.0 million; Capex outlook low: USD 410.0 million; Capex outlook high: USD 430.0 million | Rounded from the tables and checks above |
| C51 | Figures quoted in the findings: Contrary evidence | Exact values: Incremental Facilities: USD 1100.000 million; Cash plus revolver availability: USD 1610.213 million; Illustrative Epiq EBITDA: USD 100.000 million | Quoted, rounded half up to the decimals shown: Incremental Facilities: USD 1,100.0 million; Cash plus revolver availability: USD 1,610.2 million; Illustrative Epiq EBITDA: USD 100.0 million | Rounded from the tables and checks above |

## Gaps

- Epiq's financial statements, results, balance sheet and purchase price allocation are not in any supplied document, so pro forma leverage cannot include Epiq's earnings, cash or debt; it restricts the post-closing leverage, cover and liquidity figures, severity High, and the action is the fourth quarter 2026 report or Epiq's own statements.
- The issuer states no EBITDA or adjusted EBITDA, so EBITDA is built from operating income plus depreciation and amortization for every period; it restricts comparison with lender-defined leverage and with covenant tests, severity Medium, and the action is an earnings release with a reconciliation.
- Covenant ratio values and definitions for the revolver tests are not printed, so covenant headroom is not calculable for any period; severity Medium, and the action is the executed credit agreement and compliance certificates.
- The undrawn committed facilities at the end of FY2023 are not in the supplied annual reports, so the FY2023 liquidity row has cash only; severity Low, and the action is the FY2023 annual report.
- Several income statement and cash flow cells are dashes in the source (impairment of goodwill, loss on extinguishment of debt, gain on sale of subsidiary, derivative losses, proceeds of capital-related government incentives and others) and are written as not supplied, not zero; severity Low, and the action is none beyond confirming the dashes mean nil.
- Some lines exist in only some reports (for example derivative losses appear only in the 2026 interim statements and purchases of equipment are gross in annual reports and net in interim reports), so those cells are not supplied for the other columns; severity Medium for capital spending, which makes last-twelve-months capital spending and free cash flow not calculable, and the action is a consistent capital spending series.
- The 2026 wording on term loan repayments is ambiguous between a quarterly and an annual 1% of the original principal; it restricts the scheduled amortization shown for the term loan; severity Medium, and the action is the credit agreement.
- Segment reporting changed in 2025 and again in 2026 and no annual series is on the 2026 basis, so segment trend across annual and interim periods is not comparable; severity Medium, and the action is a recast annual segment table.
- Acquisition accounting for Swiss Technology Group AG is provisional and the filing presents no pro forma information, so goodwill, intangibles and the post-acquisition earnings contribution may change; severity Low, and the action is the fourth quarter 2026 report.
- No quarterly statement for the fourth quarter of 2025 is supplied, so that quarter is derived as the full year less nine months and labelled calculated; severity Low, and the action is none.
- Period start dates are not printed and are set to the day after the previous period end; severity Low, and the action is none.
- The share of cash held by foreign subsidiaries, USD 241.1 million at 2026-09-28, may be subject to repatriation tax if remitted, although the issuer states no material unaccrued tax; severity Low, and the action is none.
- Capital spending is not split between maintenance and growth in any filing, so those lines are not supplied; severity Medium, and the action is management disclosure of the split.
- The pending Ophir Optics acquisition is not completed, so no net debt effect or pro forma figure is stated for it and its cells are not supplied; severity Low, and the action is the report after closing.
- The share repurchase is dated as a two-day window and not by purchase, so its date cell is not supplied; severity Low, and the action is none.
- No balance sheet at the end of the third quarter of 2025 is supplied, so the period-end working capital measures have no nine-month 2025 value; severity Low, and the action is none.

## Next module

The orchestrator selects the next module.
