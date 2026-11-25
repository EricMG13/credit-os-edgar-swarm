# Avient Corp (avnt-1122976): Financial foundation, as of 2026-11-18

## Request

Issuer: Avient Corp (avnt-1122976), a listed Ohio company reporting consolidated US GAAP statements in USD millions; as-of date 2026-11-18; pathway: credit snapshot. Scope: extract and normalise the audited annual and unaudited quarterly statements, derive last-twelve-months figures, and state debt, liquidity, leverage and coverage on the reported basis, with every gap named.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | Signed 2025-02-18 (filing date not stated) | f21009ad72e39430bdb6ac74e66b513554d05915174084fd994f9780c6b54d5d | FY2022 and FY2023 history, the 2023 balance sheet and debt table, the FY2024 subsequent-event note, the earlier revolver and the 2031 notes' ranking. |
| 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | Signed 2026-02-17 (filing date not stated) | 9e3a992976aa0b97bec6955c8c3eac3ec4063d7ee1b13ee4f2ec903ec3a29845 | Audited FY2023 to FY2025 statements, debt note, letters of credit, interest paid, taxes paid, segments, derivatives, pension, leases and contractual obligations. |
| 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | Signed 2026-05-07 (filing date not stated) | 6ce61423a045e89660047448242189f1c02759fad24af064f9abce73d4010d18 | First-quarter 2026 statements, debt table, liquidity table and Calvert City accrual. |
| 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | Signed 2026-08-06 (filing date not stated) | 480a772de4ca694d3312678b9cda629440c3e81c35c5b2caadeaa6a0c0506dbf | Six-month 2026 statements (to isolate the third quarter), debt table, liquidity table and Calvert City accrual. |
| 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | Signed 2026-11-04 (filing date not stated) | 18c4bb686a8163d9e83cbe290ac66757579459c9a66885d10029469db6de24a4 | Latest period: statements, debt table, maturities, liquidity, segments, derivatives, environmental and tax disclosures. |

| Handoff module | sha256 | Use |
|---|---|---|
| Source readiness (CP-0) | 7f8c226f27e5b07e6b1cea118fb50a9aaca47218445b979468c11169d275f0e2 | Source inventory, document dates, perimeter and the gap ledger for the five filings; the gaps it names are carried into this module's gap lines. |

## Findings

### Bottom line

Avient's net leverage fell to 2.65x last-twelve-months reported EBITDA at 30 September 2026, from 3.63x at the end of 2025, but the gain is earnings recovery rather than debt reduction, so creditors depend on earnings holding. Net debt fell only USD 31.1 million in nine months, while last-twelve-months EBITDA rose USD 132.0 million to USD 521.4 million, of which USD 86.3 million is 2025 ERP charges leaving the window.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 9–10; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3; calculation C34; calculation C31; calculation C14; calculation C55; calculation C52

Liquidity of USD 932.4 million exceeds the USD 471.1 million falling due in 2029, but cash interest cover was only 3.99x in fiscal 2025 and leans on cross-currency swap receipts, and Calvert City environmental costs of USD 19.1 million in the quarter show an obligation that is still growing.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 22; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 23; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 16; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 69; calculation C40

### Key findings

Reported leverage moved in two steps. Total debt over reported EBITDA was 5.39x in fiscal 2023, 4.06x in fiscal 2024 and 4.94x in fiscal 2025, when USD 86.3 million of ERP impairment and hosting charges depressed EBITDA, and 3.50x at 30 September 2026; net debt over EBITDA followed the same path at 3.98x, 2.99x, 3.63x and 2.65x. The 2026 gain is mostly earnings: EBITDA for nine months was USD 434.7 million against USD 302.7 million, and USD 45.7 million of the USD 132.0 million increase is underlying once the 2025 charges are set aside. Debt moved little: total debt fell USD 95.9 million through USD 100.0 million of voluntary term loan prepayments, but cash fell USD 64.8 million, so net debt fell only USD 31.1 million.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 54–56; calculation C50; calculation C51; calculation C52; calculation C53; calculation C54; calculation C55; calculation C66

Cash interest cover was 3.63x in fiscal 2023, 5.97x in fiscal 2024 and 3.99x in fiscal 2025, and no interim cash interest is printed, so cover for 2026 is not calculable. The measure uses interest paid net of hedging, and cross-currency swaps returned USD 36.1 million in fiscal 2025; adding that back to the USD 97.6 million of cash interest would put cover near 2.91x, an Analyst Judgement. On net interest expense, which also nets the swap receipts, last-twelve-months cover is 5.81x.
Basis: 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 69; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 84; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2; calculation C59; calculation C60; calculation C22; calculation C14

Cash conversion is steady and capital intensity low. Operating cash flow was USD 301.6 million in fiscal 2025 and USD 347.8 million over the last twelve months, which after capital expenditures converted 50.08% and 45.84% of EBITDA into free cash flow, with capital expenditures at 3.27% of sales in fiscal 2025. Receivables, inventories and payables absorbed USD 138.8 million in the first nine months of 2026, close to the USD 135.3 million of the prior-year period, so the seasonal build is normal; after USD 75.7 million of dividends, nine-month free cash flow left USD 37.9 million.
Basis: 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3; calculation C43; calculation C46; calculation C20; calculation C48; calculation C49; calculation C47

Liquidity was USD 932.4 million at 30 September 2026, made of USD 445.7 million of cash and USD 486.7 million of revolver availability, against USD 1,000.8 million at the end of 2025; about 83% of the cash is outside the United States. Only USD 1.0 million of principal falls due before 2029, then USD 471.1 million in 2029, USD 725.5 million in 2030 and USD 651.0 million thereafter, so USD 1,847.6 million of principal sits in a three-year window from 2029 to 2031, and the undrawn revolver matures in June 2030 alongside the 2030 notes.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 22; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 23; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 10; calculation C40; calculation C39; calculation C62; calculation C61

Several claims sit outside the USD 1,827.2 million of carrying-value debt. Cross-currency swap liabilities were USD 302.0 million at 30 September 2026, down from USD 380.9 million at the end of 2025, and the issuer has amended and extended the swaps rather than settling them in cash. Environmental accruals were USD 142.9 million, which the issuer says will probably be exceeded, with the Calvert City barrier wall now assumed complete in 2032. Operating lease obligations were USD 95.0 million undiscounted at the end of 2025, and the IRS 2019 matter claims USD 37.2 million of tax, interest and penalty with no provision, plus a 2022 matter with no amount printed. Pension plans were net overfunded by USD 4.7 million.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 11–12; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 16; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 41; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 71; calculation C63; calculation C64; calculation C65; calculation C67

The figures rest on EBITDA that this analysis derives, because the issuer states none, and on carrying-value debt of USD 1,827.2 million against principal of USD 1,848.6 million. No supplier finance, factoring or customer-funded float was found, and no event after the balance-sheet date is stated; the one flagged subsequent event is the 2025 decision to stop ERP development, which the FY2024 annual report dated after its own balance sheet and which is kept out of fiscal 2024.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 9; 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 35; 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 90; calculation C36; calculation C37

### Contrary evidence and what would change the view

The strongest case that leverage is better than it looks is that fiscal 2025 EBITDA was depressed by USD 86.3 million of ERP charges: on a normalised basis fiscal 2025 total debt over EBITDA would have been 4.04x and net debt 2.97x, so underlying leverage was already improving before 2026. The strongest case that it is worse is that reported EBITDA still carries environmental and restructuring costs, that cover and interest cost lean on swap receipts, and that the swaps mature in 2028 and 2029 and have been rolled rather than settled. The view would weaken if rolling EBITDA slipped back toward the fiscal 2025 level of USD 389.4 million, if the Calvert City accrual rose again, or if the swaps were settled in cash; it would strengthen if the 2029 term loan were refinanced well ahead of maturity and interim cash interest were disclosed.
Basis: 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 36; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 11–12; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 16; calculation C56; calculation C57; calculation C58; calculation C63

### Period table

| Period | Start | End |
|---|---|---|
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q1 2025 | 2025-01-01 | 2025-03-31 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| H1 2025 | 2025-01-01 | 2025-06-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | Q1 2025 | Q1 2026 | H1 2025 | H1 2026 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Sales | 3,142.8 | 3,240.4 | 3,260.2 | 826.6 | 847.4 | 1,693.1 | 1,764.4 | 806.5 | 891.2 | 2,499.6 | 2,655.6 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Cost of sales | 2,250.3 | 2,183.7 | 2,244.6 | 563.4 | 574.8 | 1,152.0 | 1,184.2 | 561.6 | 619.4 | 1,713.6 | 1,803.6 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Gross margin | 892.5 | 1,056.7 | 1,015.6 | 263.2 | 272.6 | 541.1 | 580.2 | 244.9 | 271.8 | 786.0 | 852.0 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Selling and administrative expense | 695.7 | 727.4 | 812.1 | 262.5 | 176.8 | 444.3 | 372.0 | 177.8 | 189.2 | 622.1 | 561.2 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Operating income | 196.8 | 329.3 | 203.5 | 0.7 | 95.8 | 96.8 | 208.2 | 67.1 | 82.6 | 163.9 | 290.8 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Interest expense, net | -115.3 | -105.6 | -98.6 | -26.9 | -22.0 | -51.6 | -44.3 | -24.2 | -22.7 | -75.8 | -67.0 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Other income (expense), net | 5.8 | 1.1 | 6.8 | -0.4 | -1.5 | -0.9 | -2.5 | Not supplied: the statement prints a dash for this period | -1.4 | -0.9 | -3.9 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); the third-quarter 2025 cell is a printed dash | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Income before income taxes | 87.3 | 224.8 | 111.7 | -26.6 | 72.3 | 44.3 | 161.4 | 42.9 | 58.5 | 87.2 | 219.9 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Income tax expense | -11.0 | -54.1 | -28.1 | 6.7 | -16.5 | -10.7 | -39.9 | -10.1 | -15.0 | -20.8 | -54.9 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Net income | 76.2 | 170.7 | 83.6 | -19.9 | 55.8 | 33.6 | 121.5 | 32.8 | 43.5 | 66.4 | 165.0 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); FY2023 includes a loss from discontinued operations of 0.1 | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Net income attributable to noncontrolling interests | -0.5 | -1.2 | -1.7 | -0.3 | -0.1 | -1.2 | -1.0 | -0.2 | -0.8 | -1.4 | -1.8 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Net income attributable to Avient common shareholders | 75.7 | 169.5 | 81.9 | -20.2 | 55.7 | 32.4 | 120.5 | 32.6 | 42.7 | 65.0 | 163.2 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Depreciation and amortization (memo, from the cash flow statement; third-quarter columns from the segment note) | 188.8 | 179.7 | 185.9 | 45.3 | 47.9 | 91.9 | 96.7 | 46.9 | 47.2 | 138.8 | 143.9 | USD millions | Reported; FY, Q1, H1 and 9M from the cash flow statement, Q3 from the segment note | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14 |
| EBITDA (Reported) | 385.6 | 509.0 | 389.4 | 46.0 | 143.7 | 188.7 | 304.9 | 114.0 | 129.8 | 302.7 | 434.7 | USD millions | Calculated: Operating income plus Depreciation and amortization; the issuer states no EBITDA; includes restructuring, environmental and 2025 ERP charges; excludes Other income (expense), net | Operating income and Depreciation and amortization rows of this table |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | Q1 2025 | Q1 2026 | H1 2025 | H1 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Net income | 76.2 | 170.7 | 83.6 | -19.9 | 55.8 | 33.6 | 121.5 | 66.4 | 165.0 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Depreciation and amortization | 188.8 | 179.7 | 185.9 | 45.3 | 47.9 | 91.9 | 96.7 | 138.8 | 143.9 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Share-based compensation expense | 13.2 | 15.4 | 9.1 | 2.4 | 2.1 | 4.6 | 4.1 | 6.9 | 6.6 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Change in accounts receivable | 38.6 | -15.2 | -18.3 | -83.7 | -83.7 | -102.9 | -124.8 | -66.4 | -92.8 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); cash effect, outflow negative | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Change in inventories | 24.3 | -13.7 | 0.6 | -20.3 | -22.9 | -20.8 | -80.5 | -25.4 | -80.5 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); cash effect, outflow negative | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Change in accounts payable | -22.2 | 0.3 | -27.6 | -1.0 | 20.0 | 1.4 | 69.0 | -43.5 | 34.5 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); cash effect, outflow negative | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Net Cash from Operating Activities | 201.6 | 256.8 | 301.6 | -51.1 | -34.5 | 61.7 | 59.3 | 133.8 | 180.0 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); cumulative from the start of the fiscal year | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Capital expenditures | -119.4 | -121.9 | -106.6 | -12.5 | -19.0 | -39.5 | -41.3 | -64.2 | -66.4 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); outflow negative | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Net Cash from Investing Activities | -94.2 | -120.6 | -97.0 | -12.5 | -19.0 | -39.5 | -41.3 | -64.2 | -66.4 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); equals capital expenditures in every interim column; FY2025 and FY2024 include plant-closure proceeds | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Proceeds from long-term borrowings | Not supplied: the statement prints a dash for this period | 650.0 | Not supplied: the statement prints a dash for this period | Not supplied: the line is not printed in this report | Not supplied: the line is not printed in this report | Not supplied: the line is not printed in this report | Not supplied: the line is not printed in this report | Not supplied: the line is not printed in this report | Not supplied: the line is not printed in this report | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); FY2024 is the 6.250% notes due 2031 | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Payments on long-term borrowings | -105.8 | -660.9 | -150.3 | Not supplied: the line is not printed in this report | Not supplied: the line is not printed in this report | -50.2 | -50.0 | -100.2 | -100.2 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); outflow negative; 2026 includes voluntary term loan prepayments | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Cash dividends paid | -90.2 | -94.0 | -98.8 | -24.7 | -25.2 | -49.4 | -50.4 | -74.1 | -75.7 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); outflow negative | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Net Cash from Financing Activities | -201.7 | -120.9 | -257.1 | -28.3 | -27.8 | -106.4 | -103.0 | -181.7 | -178.5 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| FX Effect on Cash | -1.0 | -16.6 | 18.5 | 3.4 | -1.6 | 14.2 | 0.1 | 13.2 | 0.1 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Net Cash Change | -95.3 | -1.3 | -34.0 | -88.5 | -82.9 | -70.0 | -84.9 | -98.9 | -64.8 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b); operating plus investing plus financing plus FX effect | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Opening Cash | 641.1 | 545.8 | 544.5 | 544.5 | 510.5 | 544.5 | 510.5 | 544.5 | 510.5 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Closing Cash | 545.8 | 544.5 | 510.5 | 456.0 | 427.6 | 474.5 | 425.6 | 445.6 | 445.7 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 55–56; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Cash Interest Paid | 106.3 | 85.2 | 97.6 | Not supplied: cash interest paid is printed for fiscal years only, not in the quarterly reports | Not supplied: cash interest paid is printed for fiscal years only, not in the quarterly reports | Not supplied: cash interest paid is printed for fiscal years only, not in the quarterly reports | Not supplied: cash interest paid is printed for fiscal years only, not in the quarterly reports | Not supplied: cash interest paid is printed for fiscal years only, not in the quarterly reports | Not supplied: cash interest paid is printed for fiscal years only, not in the quarterly reports | USD millions | Reported (tier 1): total interest paid on debt, net of the impact of hedging; positive amount paid | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 69 |
| Income taxes paid, net of refunds | 151.2 | 65.9 | 65.8 | Not supplied: cash taxes paid are printed for fiscal years only, not in the quarterly reports | Not supplied: cash taxes paid are printed for fiscal years only, not in the quarterly reports | Not supplied: cash taxes paid are printed for fiscal years only, not in the quarterly reports | Not supplied: cash taxes paid are printed for fiscal years only, not in the quarterly reports | Not supplied: cash taxes paid are printed for fiscal years only, not in the quarterly reports | Not supplied: cash taxes paid are printed for fiscal years only, not in the quarterly reports | USD millions | Reported (tier 1); FY2023 includes 104.1 of taxes paid on the gain on sale of a business | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 78; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Cash & Equivalents | 545.8 | 544.5 | 510.5 | 427.6 | 425.6 | 445.7 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Accounts receivable, net | 399.9 | 399.5 | 435.0 | 513.4 | 553.5 | 520.7 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Inventories, net | 347.0 | 346.8 | 367.2 | 386.4 | 443.0 | 442.3 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Other current assets | 114.9 | 131.3 | 88.2 | 96.5 | 111.3 | 100.6 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Total current assets | 1,407.6 | 1,422.1 | 1,400.9 | 1,423.9 | 1,533.4 | 1,509.3 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Property, net | 1,028.9 | 955.3 | 988.8 | 967.9 | 961.9 | 958.8 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Goodwill | 1,719.3 | 1,659.7 | 1,757.6 | 1,739.2 | 1,737.6 | 1,733.2 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Intangible assets, net | 1,590.8 | 1,450.4 | 1,492.4 | 1,447.4 | 1,420.8 | 1,396.3 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Other non-current assets | 221.9 | 323.6 | 385.9 | 366.4 | 351.1 | 347.8 | USD millions | Reported in the interim reports; for fiscal years Calculated as operating lease assets plus deferred income tax assets plus other non-current assets so the lines match the interim presentation (tier 1 inputs) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Total Assets | 5,968.5 | 5,811.1 | 6,025.6 | 5,944.8 | 6,004.8 | 5,945.4 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Short-term and current portion of long-term debt | 9.5 | 7.7 | 0.5 | 0.5 | 0.5 | 0.4 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Accounts payable | 432.3 | 417.4 | 410.0 | 426.1 | 474.7 | 440.4 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Accrued expenses and other current liabilities | 331.8 | 331.0 | 435.8 | 376.5 | 331.7 | 439.7 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Total current liabilities | 773.6 | 756.1 | 846.3 | 803.1 | 806.9 | 880.5 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Long-term debt | 2,070.5 | 2,059.3 | 1,922.6 | 1,924.0 | 1,875.3 | 1,826.8 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Deferred income taxes | 281.6 | 260.4 | 285.7 | 280.5 | 278.1 | 276.7 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Other non-current liabilities | 504.8 | 405.7 | 584.7 | 519.2 | 594.5 | 490.7 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Total non-current liabilities | 2,856.9 | 2,725.4 | 2,793.0 | 2,723.7 | 2,747.9 | 2,594.2 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Total Liabilities | 3,630.5 | 3,481.5 | 3,639.3 | 3,526.8 | 3,554.8 | 3,474.7 | USD millions | Calculated: Total current liabilities plus Total non-current liabilities; the issuer prints no total liabilities line | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Avient shareholders’ equity | 2,319.2 | 2,313.8 | 2,374.2 | 2,405.8 | 2,436.9 | 2,456.8 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Noncontrolling interest | 18.8 | 15.8 | 12.1 | 12.2 | 13.1 | 13.9 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Total Equity | 2,338.0 | 2,329.6 | 2,386.3 | 2,418.0 | 2,450.0 | 2,470.7 | USD millions | Reported; FY columns audited (tier 1), interim columns unaudited (tier 2b) | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |
| Total Debt | 2,080.0 | 2,067.0 | 1,923.1 | 1,924.5 | 1,875.8 | 1,827.2 | USD millions | Calculated: Short-term and current portion of long-term debt plus Long-term debt, balance-sheet carrying value net of issuance costs and discounts; lease liabilities the issuer carries in other liabilities are not added | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 2–3 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 5.39 | 3.98 | x | Reported EBITDA for the fiscal year (operating income plus depreciation and amortization); debt at balance-sheet carrying value net of issuance costs; fiscal-year inputs audited |
| FY2024 / 2024-12-31 | 4.06 | 2.99 | x | Reported EBITDA for the fiscal year (operating income plus depreciation and amortization); debt at balance-sheet carrying value net of issuance costs; fiscal-year inputs audited |
| FY2025 / 2025-12-31 | 4.94 | 3.63 | x | Reported EBITDA for the fiscal year (operating income plus depreciation and amortization); debt at balance-sheet carrying value net of issuance costs; fiscal-year inputs audited |
| 2026-03-31 | 3.95 | 3.07 | x | Last-twelve-months reported EBITDA (fiscal year plus current stub less prior-year stub); debt at carrying value; interim inputs unaudited |
| 2026-06-30 | 3.71 | 2.87 | x | Last-twelve-months reported EBITDA (fiscal year plus current stub less prior-year stub); debt at carrying value; interim inputs unaudited |
| 2026-09-30 | 3.50 | 2.65 | x | Last-twelve-months reported EBITDA (fiscal year plus current stub less prior-year stub); debt at carrying value; interim inputs unaudited |

The ratios divide carrying-value debt by reported EBITDA built from operating income plus depreciation and amortization, so the fiscal 2025 ratio carries about USD 86.3 million of ERP impairment and hosting charges that the later last-twelve-months windows no longer include.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2023 / 2023-12-31 | 3.63 | x | Reported EBITDA over total interest paid on debt net of the impact of hedging; cross-currency swap receipts reduce the denominator |
| FY2024 / 2024-12-31 | 5.97 | x | Reported EBITDA over total interest paid on debt net of the impact of hedging; cross-currency swap receipts reduce the denominator |
| FY2025 / 2025-12-31 | 3.99 | x | Reported EBITDA over total interest paid on debt net of the impact of hedging; cross-currency swap receipts reduce the denominator |
| 2026-03-31 | Not supplied: cash interest paid is not printed in the quarterly reports | x | No interim cash interest figure exists, so no last-twelve-months cover on cash interest is stated |
| 2026-06-30 | Not supplied: cash interest paid is not printed in the quarterly reports | x | No interim cash interest figure exists, so no last-twelve-months cover on cash interest is stated |
| 2026-09-30 | Not supplied: cash interest paid is not printed in the quarterly reports | x | No interim cash interest figure exists, so no last-twelve-months cover on cash interest is stated |

Cover is stated on interest paid net of swap receipts and is available for fiscal years only.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 545.8 | Not supplied: the FY2024 annual report states revolver availability at 2024-12-31 only | US$m | Cash and cash equivalents; revolver availability at this date is not printed |
| FY2024 / 2024-12-31 | 544.5 | 211.4 | US$m | Cash and cash equivalents; undrawn is the earlier revolver's availability under a borrowing base and a 2026 maturity, superseded in June 2025 |
| FY2025 / 2025-12-31 | 510.5 | 490.3 | US$m | Cash and cash equivalents; undrawn is the revolver availability the issuer prints, net of 9.7 of letters of credit |
| 2026-03-31 | 427.6 | 490.3 | US$m | Cash and cash equivalents; undrawn is the revolver availability the issuer prints; letters-of-credit usage is not itemized in the 2026 reports |
| 2026-06-30 | 425.6 | 490.5 | US$m | Cash and cash equivalents; undrawn is the revolver availability the issuer prints; letters-of-credit usage is not itemized in the 2026 reports |
| 2026-09-30 | 445.7 | 486.7 | US$m | Cash and cash equivalents; undrawn is the revolver availability the issuer prints; letters-of-credit usage is not itemized in the 2026 reports |

Undrawn amounts are the issuer's printed revolver availability, and the 2026 reports do not itemize the letters of credit that reduce it from the commitment.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 0.2 | US$m | Principal due in the remainder of 2026 at 2026-09-30, all debt combined |
| FY2027 | 0.4 | US$m | Principal due in 2027, all debt combined |
| FY2028 | 0.4 | US$m | Principal due in 2028, all debt combined |
| FY2029 | 471.1 | US$m | Principal due in 2029, all debt combined; the senior secured term loan (principal 470.7) matures in 2029 |
| FY2030 | 725.5 | US$m | Principal due in 2030, all debt combined; the 7.125% senior notes (principal 725.0) mature in 2030, and the undrawn revolving credit facility matures on 2030-06-12 |
| FY2031 | 651.0 | US$m | The filing's 'thereafter' row: includes the 6.250% senior notes of 650.0 due 2031-11-01; the remainder is not itemized |

The ladder is principal at 2026-09-30, not carrying value, and the last row is the filing's thereafter bucket.

### Financials and credit metrics

| Measure | FY2023 | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Sales | 3,142.8 | 3,240.4 | 3,260.2 | 3,416.2 | USD millions | Reported; LTM Calculated (fiscal year plus nine months 2026 less nine months 2025) | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| EBITDA (Reported) | 385.6 | 509.0 | 389.4 | 521.4 | USD millions | Calculated: operating income plus depreciation and amortization | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Operating income | 196.8 | 329.3 | 203.5 | 330.4 | USD millions | Reported; LTM Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Net income | 76.2 | 170.7 | 83.6 | 182.2 | USD millions | Reported; LTM Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Net Cash from Operating Activities | 201.6 | 256.8 | 301.6 | 347.8 | USD millions | Reported; LTM Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Capital expenditures | 119.4 | 121.9 | 106.6 | 108.8 | USD millions | Reported as an outflow, shown here as a positive amount; LTM Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Free cash flow (operating cash flow less capital expenditures) | 82.2 | 134.9 | 195.0 | 239.0 | USD millions | Calculated; before dividends and acquisitions | Rows of this table |
| Total Debt (carrying value) | 2,080.0 | 2,067.0 | 1,923.1 | 1,827.2 | USD millions | Calculated from balance-sheet debt lines; LTM column is the balance at 2026-09-30 | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| Cash & Equivalents | 545.8 | 544.5 | 510.5 | 445.7 | USD millions | Reported; LTM column is the balance at 2026-09-30 | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 |
| Net debt | 1,534.2 | 1,522.5 | 1,412.6 | 1,381.5 | USD millions | Calculated: Total Debt less Cash & Equivalents | Rows of this table |
| Total debt / EBITDA | 5.39 | 4.06 | 4.94 | 3.50 | x | Calculated on reported EBITDA and carrying-value debt | Calculation register |
| Net debt / EBITDA | 3.98 | 2.99 | 3.63 | 2.65 | x | Calculated on reported EBITDA and carrying-value debt | Calculation register |
| EBITDA / cash interest | 3.63 | 5.97 | 3.99 | Not supplied: cash interest paid is not printed for interim periods | x | Calculated on interest paid net of hedging | Calculation register |
| Liquidity (cash plus revolving credit availability) | Not supplied: availability at 2023-12-31 is not printed | 755.9 | 1,000.8 | 932.4 | USD millions | Calculated; FY2024 uses the earlier revolver; LTM column is the balance at 2026-09-30 | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 38; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 38–39; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 22 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2023 / 2023-12-31 | 2,080.0 | 545.8 | 1,534.2 | US$m | Gross debt is carrying value, short-term and current portion plus long-term debt net of issuance costs and discounts, with no leases or other items inside it; principal total 2,110.5; balance sheet audited; reported, not pro forma |
| FY2024 / 2024-12-31 | 2,067.0 | 544.5 | 1,522.5 | US$m | Gross debt is carrying value, short-term and current portion plus long-term debt net of issuance costs and discounts, with no leases or other items inside it; principal total 2,099.2; balance sheet audited; reported, not pro forma |
| FY2025 / 2025-12-31 | 1,923.1 | 510.5 | 1,412.6 | US$m | Gross debt is carrying value, short-term and current portion plus long-term debt net of issuance costs and discounts, with no leases or other items inside it; principal total 1,948.9; balance sheet audited; reported, not pro forma |
| 2026-03-31 | 1,924.5 | 427.6 | 1,496.9 | US$m | Gross debt is carrying value, short-term and current portion plus long-term debt net of issuance costs and discounts, with no leases or other items inside it; principal total 1,948.8; balance sheet unaudited; reported, not pro forma |
| 2026-06-30 | 1,875.8 | 425.6 | 1,450.2 | US$m | Gross debt is carrying value, short-term and current portion plus long-term debt net of issuance costs and discounts, with no leases or other items inside it; principal total 1,898.6; balance sheet unaudited; reported, not pro forma |
| 2026-09-30 | 1,827.2 | 445.7 | 1,381.5 | US$m | Gross debt is carrying value, short-term and current portion plus long-term debt net of issuance costs and discounts, with no leases or other items inside it; principal total 1,848.6; balance sheet unaudited; reported, not pro forma |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 1,848.6 | -21.4 | 1,827.2 | US$m | Reconciling items is the unamortized discount and debt issuance cost of 21.4 (term loan 9.3, 2030 notes 5.2, 2031 notes 6.9); no debt is left out of the ladder; principal is the sum of the maturity rows |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | Read: the 2026-09-30 quarterly report, which states no event after the balance-sheet date, and the earlier 2026 reports; nothing is supplied after the report's signature on 2026-11-04; the voluntary term loan prepayments of June and September 2026 fall inside the reported balances |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 3,142.8 | 385.6 | US$m | EBITDA identity: reported (unadjusted) EBITDA, operating income plus depreciation and amortization; the issuer states no adjusted EBITDA; twelve months |
| FY2024 / 2024-12-31 | 3,240.4 | 509.0 | US$m | EBITDA identity: reported (unadjusted) EBITDA, operating income plus depreciation and amortization; the issuer states no adjusted EBITDA; twelve months |
| FY2025 / 2025-12-31 | 3,260.2 | 389.4 | US$m | EBITDA identity: reported (unadjusted) EBITDA, operating income plus depreciation and amortization; the issuer states no adjusted EBITDA; twelve months |
| 2026-09-30 | 3,416.2 | 521.4 | US$m | EBITDA identity: reported (unadjusted) EBITDA; last twelve months to 2026-09-30; twelve months |

The Adjusted EBITDA column holds reported EBITDA because the issuer states no adjusted measure, and fiscal 2025 includes the ERP charges.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: legal ranking is not stated for the facilities as a set | Not supplied: no filing states the rank of each facility | Not supplied: security is stated only by table captions | Not supplied: a stack needs ranked facilities | Not supplied: no ranked cumulative debt exists | US$m | The debt table calls the revolver and term loan senior secured and the 2030 and 2031 notes senior notes; only the FY2024 annual report states the 2031 notes are senior unsecured obligations of the Company; guarantors, collateral and relative ranking of the facilities and the 2030 notes are not stated, so no stack is drawn; facilities left out: the revolver, term loan, 2030 notes, 2031 notes and other debt |

The debt stack is not supplied because ranking and guarantor scope are not stated.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| Opening: EBITDA (Reported) | Not supplied: no issuer-adjusted EBITDA exists to bridge to | US$m | The reported measure is operating income plus depreciation and amortization, calculated by this module |
| Closing: EBITDA (Adjusted) | Not supplied: the issuer states no adjusted EBITDA or add-backs | US$m | No filing in the set states an adjusted EBITDA, its add-backs or a management bridge, so no step is stated and none is manufactured |

No qualification.

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl | Annual report on Form 10-K | FY2024, FY2023 and FY2022 income statement and cash flows; balance sheets 2024 and 2023 | USD | millions | Avient Corporation and consolidated subsidiaries | US GAAP | Tier 1 (audited) | FY2022 and FY2023 history, the 2023 balance sheet and debt table, the FY2024 subsequent-event note, the earlier revolver and the 2031 notes' ranking. | Superseded by the FY2025 annual report for FY2024 comparatives (they agree); its revolver description and subsequent-event note are history |
| 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl | Annual report on Form 10-K | FY2025, FY2024 and FY2023 income statement and cash flows; balance sheets 2025 and 2024 | USD | millions | Avient Corporation and consolidated subsidiaries | US GAAP | Tier 1 (audited) | Audited FY2023 to FY2025 statements, debt note, letters of credit, interest paid, taxes paid, segments, derivatives, pension, leases and contractual obligations. | No non-GAAP measures; executed debt documents not attached |
| 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl | Quarterly report on Form 10-Q | Three months to 2026-03-31 and 2025; balance sheet 2026-03-31 and 2025-12-31 | USD | millions | Avient Corporation and consolidated subsidiaries | US GAAP | Tier 2b (unaudited, no auditor review stated) | First-quarter 2026 statements, debt table, liquidity table and Calvert City accrual. | Unaudited; cash flow is cumulative; no interest or tax paid; no letters-of-credit figure |
| 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl | Quarterly report on Form 10-Q | Three and six months to 2026-06-30 and 2025; balance sheet 2026-06-30 and 2025-12-31 | USD | millions | Avient Corporation and consolidated subsidiaries | US GAAP | Tier 2b (unaudited, no auditor review stated) | Six-month 2026 statements (to isolate the third quarter), debt table, liquidity table and Calvert City accrual. | Unaudited; cash flow is six-month cumulative; no interest or tax paid; no letters-of-credit figure |
| 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl | Quarterly report on Form 10-Q | Three and nine months to 2026-09-30 and 2025; balance sheet 2026-09-30 and 2025-12-31 | USD | millions | Avient Corporation and consolidated subsidiaries | US GAAP | Tier 2b (unaudited, no auditor review stated) | Latest period: statements, debt table, maturities, liquidity, segments, derivatives, environmental and tax disclosures. | Unaudited; cash flow is nine-month cumulative; no interest or tax paid; no letters-of-credit figure |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Avient Corporation | Issuer and registrant; parent of the consolidated group; borrower and guarantor roles not stated | December 31 | USD | millions | Consolidated: Avient Corporation and its consolidated subsidiaries; one perimeter in all five filings; segments are Color, Additives and Inks and Specialty Engineered Materials | US GAAP | FY2022 to FY2025; Q1, Q2, Q3, H1 and 9M of 2025 and 2026; balance sheets at 2023-12-31, 2024-12-31, 2025-12-31, 2026-03-31, 2026-06-30 and 2026-09-30 |

The subsequent events the sources flag are dated: the FY2024 annual report describes the decision to stop S/4HANA development, taken in the first quarter of 2025, as a subsequent event to its December 31, 2024 balance sheet, and the 2026-09-30 quarterly report discloses a draft IRS notice received in September 2026. Neither is blended into the period figures above.
Basis: 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 35; 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 90; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 8

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) derived from components | Operating income and depreciation and amortization rows | Calculated | EBITDA not stated by the issuer | FY2025 389.4; FY2024 509.0; FY2023 385.6; 9M 2026 434.7; 9M 2025 302.7 | The method derives EBITDA from components when the issuer states none; Other income (expense), net is excluded; restructuring, environmental and ERP charges stay inside | All columns |
| Last-twelve-months construction | Fiscal-year, current-stub and prior-year-stub figures | Calculated | Not stated | EBITDA 487.1 at 2026-03-31, 505.6 at 2026-06-30, 521.4 at 2026-09-30 | Latest full year plus current stub less prior-year comparable stub; every component is stated, so none is estimated | 2026-03-31, 2026-06-30, 2026-09-30 |
| Total Liabilities derived | Balance sheets of all five filings | Calculated | No total liabilities line printed | Total current liabilities plus Total non-current liabilities | The issuer prints the two sub-totals only; assets equal this sum plus Total Equity in every column | All balance sheets |
| Total Debt derived | Balance sheets of all five filings | Calculated | Two debt lines | Short-term and current portion plus Long-term debt | Carrying value including the current portion; ties to the debt note's net debt column at every date | All balance sheets |
| Other non-current assets combined for fiscal years | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 57; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55 | Calculated | Three lines (operating lease assets, deferred income tax assets, other non-current assets) | One line | The quarterly reports print one combined line, so fiscal-year columns use the same grouping; totals are unchanged | FY2023, FY2024, FY2025 |
| Third-quarter depreciation and amortization taken from the segment note | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14 | Reported | Not in a discrete cash flow column | Q3 2026 47.2; Q3 2025 46.9 | A reported discrete quarter comes first; each equals nine months less six months | Q3 2026, Q3 2025 |
| Analyst Judgement: ERP impairment and hosting charges shown beside EBITDA, not used in any ratio | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 36; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 7 | Analyst Judgement | FY2025 EBITDA 389.4; 9M 2025 EBITDA 302.7 | FY2025 475.7; 9M 2025 389.0 | Adds back the 71.6 impairment and 14.7 hosting charges recognised in the first quarter of 2025 to show underlying earnings; restructuring and environmental charges are not adjusted | FY2025, 9M 2025 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Senior secured revolving credit facility due 2030 | Revolving credit facility | 0.0 | 0.0 | 0.0 | 500.0 | Secured by the filing's table caption; collateral not described | Not supplied: ranking is not stated | USD | 0.0 | Not applicable | Not supplied: the revolver margin is not stated | Not supplied: rate type is not stated | Not supplied: reference rate is not stated | Not supplied: spread is not stated | Not supplied: floor is not stated | 2030-06-12 | 0 | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 10 |
| Senior secured term loan due 2029 | Term loan | 461.4 | 470.7 | 470.7 | Not applicable | Secured by the filing's table caption; collateral not described | Not supplied: ranking is not stated | USD | 461.4 | Not applicable | Adjusted Term SOFR plus 1.75%; weighted average rate 5.48% | Floating | Adjusted Term SOFR | 175 | Not applicable | 2029 (day and month not stated) | Not supplied: the filings give aggregate maturities only; 1.0 falls due in 2026 to 2028 across all debt | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 9–10 |
| 7.125% senior notes due 2030 | Senior notes | 719.8 | 725.0 | 725.0 | Not applicable | Not supplied: security is not stated for these notes | Not supplied: ranking is not stated | USD | 719.8 | Not applicable | 7.125% | Fixed | Not applicable | Not applicable | Not applicable | 2030 (day and month not stated) | 0 | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 23 |
| 6.250% senior notes due 2031 | Senior notes | 643.1 | 650.0 | 650.0 | Not applicable | Unsecured (FY2024 annual report: senior unsecured obligations of the Company) | Senior unsecured obligations of the Company (FY2024 annual report only) | USD | 643.1 | Not applicable | 6.250% | Fixed | Not applicable | Not applicable | Not applicable | 2031-11-01 | 0 | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 9; 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 41 |
| Other debt | Other | 2.9 | 2.9 | 2.9 | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 2.9 | Not applicable | Not supplied: terms are not stated | Not supplied: rate type is not stated | Not supplied: reference rate is not stated | Not supplied: spread is not stated | Not supplied: floor is not stated | Not supplied: maturities are not itemized | Not supplied: not itemized | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 9 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component (USD millions) | Current Stub (USD millions) | Prior-Year Stub (USD millions) | Derived Value (USD millions) | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM 2026-03-31 | 389.4 | 143.7 | 46.0 | 487.1 | Calculated | Rows of T4.4 | Reported EBITDA, unadjusted; stub is Q1 2026, prior stub Q1 2025 |
| EBITDA (Reported) | LTM 2026-06-30 | 389.4 | 304.9 | 188.7 | 505.6 | Calculated | Rows of T4.4 | Reported EBITDA, unadjusted; stub is H1 2026, prior stub H1 2025 |
| EBITDA (Reported) | LTM 2026-09-30 | 389.4 | 434.7 | 302.7 | 521.4 | Calculated | Rows of T4.4 | Reported EBITDA, unadjusted; stub is 9M 2026, prior stub 9M 2025 |
| Sales | LTM 2026-09-30 | 3,260.2 | 2,655.6 | 2,499.6 | 3,416.2 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 | All components reported |
| Operating income | LTM 2026-09-30 | 203.5 | 290.8 | 163.9 | 330.4 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 | Fiscal 2025 and nine months 2025 both include the 86.3 of ERP charges, which therefore cancel |
| Depreciation and amortization | LTM 2026-09-30 | 185.9 | 143.9 | 138.8 | 191.0 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 | All components reported |
| Net income | LTM 2026-09-30 | 83.6 | 165.0 | 66.4 | 182.2 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 | Before noncontrolling interests |
| Net Cash from Operating Activities | LTM 2026-09-30 | 301.6 | 180.0 | 133.8 | 347.8 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 | All components reported; seasonal first-quarter outflow |
| Capital expenditures (outflow shown positive) | LTM 2026-09-30 | 106.6 | 66.4 | 64.2 | 108.8 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 | All components reported |
| Interest expense, net (income statement) | LTM 2026-09-30 | 98.6 | 67.0 | 75.8 | 89.8 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2 | Net of interest income including cross-currency swap receipts; not cash interest |
| Net Cash from Operating Activities | Q3 2026 (nine months less six months) | Not applicable | 180.0 | 59.3 | 120.7 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3 | No discrete third-quarter cash flow is reported, so it is nine months less six months |
| Net Cash from Operating Activities | Q3 2025 (nine months less six months) | Not applicable | 133.8 | 61.7 | 72.1 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3 | No discrete third-quarter cash flow is reported, so it is nine months less six months |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,080.0 | Net debt data, Gross debt FY2023 / 2023-12-31 | 385.6 | T4.4 EBITDA (Reported) FY2023 | FY2023 / 2023-12-31 | USD | US$m | 5.39 | Calculated | Tier 1 (audited inputs) | Carrying-value debt; reported EBITDA includes restructuring, environmental and 2025 ERP charges |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,534.2 | Net debt data, Net debt FY2023 / 2023-12-31 | 385.6 | T4.4 EBITDA (Reported) FY2023 | FY2023 / 2023-12-31 | USD | US$m | 3.98 | Calculated | Tier 1 (audited inputs) | Gross debt less cash; reported EBITDA includes restructuring, environmental and 2025 ERP charges |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 385.6 | T4.4 EBITDA (Reported) FY2023 | 106.3 | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 69 | FY2023 / 2023-12-31 | USD | US$m | 3.63 | Calculated | Tier 1 (audited inputs) | Cash interest is net of the impact of hedging, so swap receipts flatter the denominator |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,067.0 | Net debt data, Gross debt FY2024 / 2024-12-31 | 509.0 | T4.4 EBITDA (Reported) FY2024 | FY2024 / 2024-12-31 | USD | US$m | 4.06 | Calculated | Tier 1 (audited inputs) | Carrying-value debt; reported EBITDA includes restructuring, environmental and 2025 ERP charges |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,522.5 | Net debt data, Net debt FY2024 / 2024-12-31 | 509.0 | T4.4 EBITDA (Reported) FY2024 | FY2024 / 2024-12-31 | USD | US$m | 2.99 | Calculated | Tier 1 (audited inputs) | Gross debt less cash; reported EBITDA includes restructuring, environmental and 2025 ERP charges |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 509.0 | T4.4 EBITDA (Reported) FY2024 | 85.2 | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 69 | FY2024 / 2024-12-31 | USD | US$m | 5.97 | Calculated | Tier 1 (audited inputs) | Cash interest is net of the impact of hedging, so swap receipts flatter the denominator |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,923.1 | Net debt data, Gross debt FY2025 / 2025-12-31 | 389.4 | T4.4 EBITDA (Reported) FY2025 | FY2025 / 2025-12-31 | USD | US$m | 4.94 | Calculated | Tier 1 (audited inputs) | Carrying-value debt; reported EBITDA includes restructuring, environmental and 2025 ERP charges |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,412.6 | Net debt data, Net debt FY2025 / 2025-12-31 | 389.4 | T4.4 EBITDA (Reported) FY2025 | FY2025 / 2025-12-31 | USD | US$m | 3.63 | Calculated | Tier 1 (audited inputs) | Gross debt less cash; reported EBITDA includes restructuring, environmental and 2025 ERP charges |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 389.4 | T4.4 EBITDA (Reported) FY2025 | 97.6 | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 69 | FY2025 / 2025-12-31 | USD | US$m | 3.99 | Calculated | Tier 1 (audited inputs) | Cash interest is net of the impact of hedging, so swap receipts flatter the denominator |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,924.5 | Net debt data, Gross debt 2026-03-31 | 487.1 | T4.8 EBITDA (Reported) LTM 2026-03-31 | 2026-03-31 | USD | US$m | 3.95 | Calculated | Tier 2b (unaudited interim inputs) | Carrying-value debt; last-twelve-months reported EBITDA |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,496.9 | Net debt data, Net debt 2026-03-31 | 487.1 | T4.8 EBITDA (Reported) LTM 2026-03-31 | 2026-03-31 | USD | US$m | 3.07 | Calculated | Tier 2b (unaudited interim inputs) | Gross debt less cash; last-twelve-months reported EBITDA |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 487.1 | T4.8 EBITDA (Reported) LTM 2026-03-31 | Not supplied: cash interest paid is not printed in the quarterly reports | No source | 2026-03-31 | USD | US$m | Not calculable: cash interest paid is not printed for an interim period | Not Calculable | Tier 2b (unaudited interim inputs) | Net interest expense of the income statement is a different measure and is shown as a separate proxy row |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,875.8 | Net debt data, Gross debt 2026-06-30 | 505.6 | T4.8 EBITDA (Reported) LTM 2026-06-30 | 2026-06-30 | USD | US$m | 3.71 | Calculated | Tier 2b (unaudited interim inputs) | Carrying-value debt; last-twelve-months reported EBITDA |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,450.2 | Net debt data, Net debt 2026-06-30 | 505.6 | T4.8 EBITDA (Reported) LTM 2026-06-30 | 2026-06-30 | USD | US$m | 2.87 | Calculated | Tier 2b (unaudited interim inputs) | Gross debt less cash; last-twelve-months reported EBITDA |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 505.6 | T4.8 EBITDA (Reported) LTM 2026-06-30 | Not supplied: cash interest paid is not printed in the quarterly reports | No source | 2026-06-30 | USD | US$m | Not calculable: cash interest paid is not printed for an interim period | Not Calculable | Tier 2b (unaudited interim inputs) | Net interest expense of the income statement is a different measure and is shown as a separate proxy row |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,827.2 | Net debt data, Gross debt 2026-09-30 | 521.4 | T4.8 EBITDA (Reported) LTM 2026-09-30 | 2026-09-30 | USD | US$m | 3.50 | Calculated | Tier 2b (unaudited interim inputs) | Carrying-value debt; last-twelve-months reported EBITDA |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,381.5 | Net debt data, Net debt 2026-09-30 | 521.4 | T4.8 EBITDA (Reported) LTM 2026-09-30 | 2026-09-30 | USD | US$m | 2.65 | Calculated | Tier 2b (unaudited interim inputs) | Gross debt less cash; last-twelve-months reported EBITDA |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 521.4 | T4.8 EBITDA (Reported) LTM 2026-09-30 | Not supplied: cash interest paid is not printed in the quarterly reports | No source | 2026-09-30 | USD | US$m | Not calculable: cash interest paid is not printed for an interim period | Not Calculable | Tier 2b (unaudited interim inputs) | Net interest expense of the income statement is a different measure and is shown as a separate proxy row |
| Gross margin % | Gross margin / Sales | 892.5 | T4.4 Gross margin | 3,142.8 | T4.4 Sales | FY2023 | USD | US$m | 28.40% | Calculated | Tier 1 | As reported gross margin; cost of sales includes restructuring and environmental charges |
| EBITDA margin % | EBITDA (Reported) / Sales | 385.6 | T4.4 EBITDA (Reported) | 3,142.8 | T4.4 Sales | FY2023 | USD | US$m | 12.27% | Calculated | Tier 1 | Reported EBITDA, unadjusted |
| Operating margin % | Operating income / Sales | 196.8 | T4.4 Operating income | 3,142.8 | T4.4 Sales | FY2023 | USD | US$m | 6.26% | Calculated | Tier 1 | Reported operating income |
| Net income margin % | Net income / Sales | 76.2 | T4.4 Net income | 3,142.8 | T4.4 Sales | FY2023 | USD | US$m | 2.42% | Calculated | Tier 1 | Before noncontrolling interests |
| Capital expenditures / revenue % | Capital expenditures / Sales | 119.4 | T4.5 Capital expenditures (outflow shown positive) | 3,142.8 | T4.4 Sales | FY2023 | USD | US$m | 3.80% | Calculated | Tier 1 | Total capex; maintenance and growth split not disclosed |
| Free cash flow conversion % | (Operating cash flow - Capital expenditures) / EBITDA (Reported) | 82.2 | T4.5 operating cash flow less capital expenditures | 385.6 | T4.4 EBITDA (Reported) | FY2023 | USD | US$m | 21.32% | Calculated | Tier 1 | Levered free cash flow after cash interest and taxes, before dividends; working capital included |
| Operating cash flow / total debt % | Operating cash flow / Total Debt | 201.6 | T4.5 Net Cash from Operating Activities | 2,080.0 | T4.6 Total Debt | FY2023 | USD | US$m | 9.69% | Calculated | Tier 1 | Debt at carrying value at the fiscal year end |
| Free cash flow / total debt % | (Operating cash flow - Capital expenditures) / Total Debt | 82.2 | T4.5 operating cash flow less capital expenditures | 2,080.0 | T4.6 Total Debt | FY2023 | USD | US$m | 3.95% | Calculated | Tier 1 | Debt at carrying value at the fiscal year end |
| EBITDA / net interest expense (proxy) | EBITDA (Reported) / Interest expense, net | 385.6 | T4.4 EBITDA (Reported) | 115.3 | T4.4 Interest expense, net (shown positive) | FY2023 | USD | US$m | 3.34 | Proxy | Tier 1 | Net interest expense is net of interest income including swap receipts; not cash interest |
| Gross margin % | Gross margin / Sales | 1,056.7 | T4.4 Gross margin | 3,240.4 | T4.4 Sales | FY2024 | USD | US$m | 32.61% | Calculated | Tier 1 | As reported gross margin; cost of sales includes restructuring and environmental charges |
| EBITDA margin % | EBITDA (Reported) / Sales | 509.0 | T4.4 EBITDA (Reported) | 3,240.4 | T4.4 Sales | FY2024 | USD | US$m | 15.71% | Calculated | Tier 1 | Reported EBITDA, unadjusted |
| Operating margin % | Operating income / Sales | 329.3 | T4.4 Operating income | 3,240.4 | T4.4 Sales | FY2024 | USD | US$m | 10.16% | Calculated | Tier 1 | Reported operating income |
| Net income margin % | Net income / Sales | 170.7 | T4.4 Net income | 3,240.4 | T4.4 Sales | FY2024 | USD | US$m | 5.27% | Calculated | Tier 1 | Before noncontrolling interests |
| Capital expenditures / revenue % | Capital expenditures / Sales | 121.9 | T4.5 Capital expenditures (outflow shown positive) | 3,240.4 | T4.4 Sales | FY2024 | USD | US$m | 3.76% | Calculated | Tier 1 | Total capex; maintenance and growth split not disclosed |
| Free cash flow conversion % | (Operating cash flow - Capital expenditures) / EBITDA (Reported) | 134.9 | T4.5 operating cash flow less capital expenditures | 509.0 | T4.4 EBITDA (Reported) | FY2024 | USD | US$m | 26.50% | Calculated | Tier 1 | Levered free cash flow after cash interest and taxes, before dividends; working capital included |
| Operating cash flow / total debt % | Operating cash flow / Total Debt | 256.8 | T4.5 Net Cash from Operating Activities | 2,067.0 | T4.6 Total Debt | FY2024 | USD | US$m | 12.42% | Calculated | Tier 1 | Debt at carrying value at the fiscal year end |
| Free cash flow / total debt % | (Operating cash flow - Capital expenditures) / Total Debt | 134.9 | T4.5 operating cash flow less capital expenditures | 2,067.0 | T4.6 Total Debt | FY2024 | USD | US$m | 6.53% | Calculated | Tier 1 | Debt at carrying value at the fiscal year end |
| EBITDA / net interest expense (proxy) | EBITDA (Reported) / Interest expense, net | 509.0 | T4.4 EBITDA (Reported) | 105.6 | T4.4 Interest expense, net (shown positive) | FY2024 | USD | US$m | 4.82 | Proxy | Tier 1 | Net interest expense is net of interest income including swap receipts; not cash interest |
| Gross margin % | Gross margin / Sales | 1,015.6 | T4.4 Gross margin | 3,260.2 | T4.4 Sales | FY2025 | USD | US$m | 31.15% | Calculated | Tier 1 | As reported gross margin; cost of sales includes restructuring and environmental charges |
| EBITDA margin % | EBITDA (Reported) / Sales | 389.4 | T4.4 EBITDA (Reported) | 3,260.2 | T4.4 Sales | FY2025 | USD | US$m | 11.94% | Calculated | Tier 1 | Reported EBITDA, unadjusted |
| Operating margin % | Operating income / Sales | 203.5 | T4.4 Operating income | 3,260.2 | T4.4 Sales | FY2025 | USD | US$m | 6.24% | Calculated | Tier 1 | Reported operating income |
| Net income margin % | Net income / Sales | 83.6 | T4.4 Net income | 3,260.2 | T4.4 Sales | FY2025 | USD | US$m | 2.56% | Calculated | Tier 1 | Before noncontrolling interests |
| Capital expenditures / revenue % | Capital expenditures / Sales | 106.6 | T4.5 Capital expenditures (outflow shown positive) | 3,260.2 | T4.4 Sales | FY2025 | USD | US$m | 3.27% | Calculated | Tier 1 | Total capex; maintenance and growth split not disclosed |
| Free cash flow conversion % | (Operating cash flow - Capital expenditures) / EBITDA (Reported) | 195.0 | T4.5 operating cash flow less capital expenditures | 389.4 | T4.4 EBITDA (Reported) | FY2025 | USD | US$m | 50.08% | Calculated | Tier 1 | Levered free cash flow after cash interest and taxes, before dividends; working capital included |
| Operating cash flow / total debt % | Operating cash flow / Total Debt | 301.6 | T4.5 Net Cash from Operating Activities | 1,923.1 | T4.6 Total Debt | FY2025 | USD | US$m | 15.68% | Calculated | Tier 1 | Debt at carrying value at the fiscal year end |
| Free cash flow / total debt % | (Operating cash flow - Capital expenditures) / Total Debt | 195.0 | T4.5 operating cash flow less capital expenditures | 1,923.1 | T4.6 Total Debt | FY2025 | USD | US$m | 10.14% | Calculated | Tier 1 | Debt at carrying value at the fiscal year end |
| EBITDA / net interest expense (proxy) | EBITDA (Reported) / Interest expense, net | 389.4 | T4.4 EBITDA (Reported) | 98.6 | T4.4 Interest expense, net (shown positive) | FY2025 | USD | US$m | 3.95 | Proxy | Tier 1 | Net interest expense is net of interest income including swap receipts; not cash interest |
| Gross margin % | Gross margin / Sales | 1,081.6 | T4.8-style LTM of Gross margin (1,015.6 + 852.0 - 786.0) | 3,416.2 | T4.8 LTM Sales | LTM 2026-09-30 | USD | US$m | 31.66% | Calculated | Tier 1 and 2b | LTM built from fiscal and interim statements |
| EBITDA margin % | EBITDA (Reported) / Sales | 521.4 | T4.8 LTM EBITDA (Reported) | 3,416.2 | T4.8 LTM Sales | LTM 2026-09-30 | USD | US$m | 15.26% | Calculated | Tier 1 and 2b | Reported EBITDA, unadjusted |
| Operating margin % | Operating income / Sales | 330.4 | T4.8 LTM Operating income | 3,416.2 | T4.8 LTM Sales | LTM 2026-09-30 | USD | US$m | 9.67% | Calculated | Tier 1 and 2b | Reported operating income |
| Net income margin % | Net income / Sales | 182.2 | T4.8 LTM Net income | 3,416.2 | T4.8 LTM Sales | LTM 2026-09-30 | USD | US$m | 5.33% | Calculated | Tier 1 and 2b | Before noncontrolling interests |
| Capital expenditures / revenue % | Capital expenditures / Sales | 108.8 | T4.8 LTM Capital expenditures | 3,416.2 | T4.8 LTM Sales | LTM 2026-09-30 | USD | US$m | 3.18% | Calculated | Tier 1 and 2b | Total capex |
| Free cash flow conversion % | (Operating cash flow - Capital expenditures) / EBITDA (Reported) | 239.0 | T4.8 LTM operating cash flow less capital expenditures | 521.4 | T4.8 LTM EBITDA (Reported) | LTM 2026-09-30 | USD | US$m | 45.84% | Calculated | Tier 1 and 2b | Working capital included |
| Operating cash flow / total debt % | Operating cash flow / Total Debt | 347.8 | T4.8 LTM Net Cash from Operating Activities | 1,827.2 | T4.6 Total Debt at 2026-09-30 | LTM 2026-09-30 | USD | US$m | 19.03% | Calculated | Tier 1 and 2b | Debt at the latest balance sheet |
| Free cash flow / total debt % | (Operating cash flow - Capital expenditures) / Total Debt | 239.0 | T4.8 LTM operating cash flow less capital expenditures | 1,827.2 | T4.6 Total Debt at 2026-09-30 | LTM 2026-09-30 | USD | US$m | 13.08% | Calculated | Tier 1 and 2b | Debt at the latest balance sheet |
| EBITDA / net interest expense (proxy) | EBITDA (Reported) / Interest expense, net | 521.4 | T4.8 LTM EBITDA (Reported) | 89.8 | T4.8 LTM Interest expense, net | LTM 2026-09-30 | USD | US$m | 5.81 | Proxy | Tier 1 and 2b | Interim cash interest is not printed; net interest expense is net of swap receipts |
| Liquidity / total debt % | (Cash + Revolving credit availability) / Total Debt | 932.4 | Chart data: liquidity, cash plus undrawn at 2026-09-30 | 1,827.2 | T4.6 Total Debt at 2026-09-30 | 2026-09-30 | USD | US$m | 51.03% | Calculated | Tier 2b | Availability is the issuer's printed figure |
| Liquidity / total debt % | (Cash + Revolving credit availability) / Total Debt | 1,000.8 | Chart data: liquidity, cash plus undrawn at 2025-12-31 | 1,923.1 | T4.6 Total Debt at 2025-12-31 | FY2025 | USD | US$m | 52.04% | Calculated | Tier 1 | Availability is the issuer's printed figure |
| Revenue growth % | T4.4 Sales FY2024 / T4.4 Sales FY2023 - 1 | 3,240.4 | T4.4 Sales FY2024 | 3,142.8 | T4.4 Sales FY2023 | FY2024 | USD | US$m | 3.11% | Calculated | Tier 1 | Percentage change on reported figures |
| Revenue growth % | T4.4 Sales FY2025 / T4.4 Sales FY2024 - 1 | 3,260.2 | T4.4 Sales FY2025 | 3,240.4 | T4.4 Sales FY2024 | FY2025 | USD | US$m | 0.61% | Calculated | Tier 1 | Percentage change on reported figures |
| Revenue growth % | T4.4 Sales 9M 2026 / T4.4 Sales 9M 2025 - 1 | 2,655.6 | T4.4 Sales 9M 2026 | 2,499.6 | T4.4 Sales 9M 2025 | 9M 2026 | USD | US$m | 6.24% | Calculated | Tier 2b | Percentage change on reported figures |
| EBITDA growth % | T4.4 EBITDA (Reported) FY2025 / T4.4 EBITDA (Reported) FY2024 - 1 | 389.4 | T4.4 EBITDA (Reported) FY2025 | 509.0 | T4.4 EBITDA (Reported) FY2024 | FY2025 | USD | US$m | -23.50% | Calculated | Tier 1 | Percentage change on reported figures |
| EBITDA growth % | T4.4 EBITDA (Reported) 9M 2026 / T4.4 EBITDA (Reported) 9M 2025 - 1 | 434.7 | T4.4 EBITDA (Reported) 9M 2026 | 302.7 | T4.4 EBITDA (Reported) 9M 2025 | 9M 2026 | USD | US$m | 43.61% | Calculated | Tier 2b | Percentage change on reported figures |

### T4.16 Segment schedule

| Segment | Period | Sales | Operating income | Depreciation and amortization | Capital expenditures | Unit | Source |
|---|---|---|---|---|---|---|---|
| Color, Additives and Inks | FY2023 | 2,007.4 | 259.9 | 98.3 | 21.4 | USD millions | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 83 |
| Specialty Engineered Materials | FY2023 | 1,138.2 | 142.5 | 81.5 | 50.1 | USD millions | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 83 |
| Corporate and eliminations | FY2023 | -2.8 | -205.6 | 9.0 | 47.9 | USD millions | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 83 |
| Consolidated | FY2023 | 3,142.8 | 196.8 | 188.8 | 119.4 | USD millions | Sum of the three rows above; equals the consolidated statements |
| Color, Additives and Inks | FY2024 | 2,046.5 | 296.2 | 87.5 | 33.6 | USD millions | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 83 |
| Specialty Engineered Materials | FY2024 | 1,196.8 | 167.2 | 82.1 | 48.7 | USD millions | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 83 |
| Corporate and eliminations | FY2024 | -2.9 | -134.1 | 10.1 | 39.6 | USD millions | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 83 |
| Consolidated | FY2024 | 3,240.4 | 329.3 | 179.7 | 121.9 | USD millions | Sum of the three rows above; equals the consolidated statements |
| Color, Additives and Inks | FY2025 | 2,034.2 | 301.3 | 89.2 | 36.8 | USD millions | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 83 |
| Specialty Engineered Materials | FY2025 | 1,231.3 | 163.6 | 88.2 | 54.7 | USD millions | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 83 |
| Corporate and eliminations | FY2025 | -5.3 | -261.4 | 8.5 | 15.1 | USD millions | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 83 |
| Consolidated | FY2025 | 3,260.2 | 203.5 | 185.9 | 106.6 | USD millions | Sum of the three rows above; equals the consolidated statements |
| Color, Additives and Inks | 9M 2025 | 1,568.2 | 242.7 | 66.7 | 21.8 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Specialty Engineered Materials | 9M 2025 | 935.8 | 124.6 | 65.9 | 34.2 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Corporate and eliminations | 9M 2025 | -4.4 | -203.4 | 6.2 | 8.2 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Consolidated | 9M 2025 | 2,499.6 | 163.9 | 138.8 | 64.2 | USD millions | Sum of the three rows above; equals the consolidated statements |
| Color, Additives and Inks | 9M 2026 | 1,653.8 | 271.9 | 70.2 | 21.5 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Specialty Engineered Materials | 9M 2026 | 1,004.7 | 149.8 | 68.7 | 33.0 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Corporate and eliminations | 9M 2026 | -2.9 | -130.9 | 5.0 | 11.9 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Consolidated | 9M 2026 | 2,655.6 | 290.8 | 143.9 | 66.4 | USD millions | Sum of the three rows above; equals the consolidated statements |
| Color, Additives and Inks | Q3 2025 | 509.9 | 73.8 | 22.6 | 8.5 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Specialty Engineered Materials | Q3 2025 | 297.7 | 37.3 | 22.0 | 12.7 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Corporate and eliminations | Q3 2025 | -1.1 | -44.0 | 2.3 | 3.5 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Consolidated | Q3 2025 | 806.5 | 67.1 | 46.9 | 24.7 | USD millions | Sum of the three rows above; equals the consolidated statements |
| Color, Additives and Inks | Q3 2026 | 551.5 | 88.7 | 22.4 | 7.4 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Specialty Engineered Materials | Q3 2026 | 340.6 | 49.7 | 23.0 | 13.4 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Corporate and eliminations | Q3 2026 | -0.9 | -55.8 | 1.8 | 4.2 | USD millions | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 20 |
| Consolidated | Q3 2026 | 891.2 | 82.6 | 47.2 | 25.0 | USD millions | Sum of the three rows above; equals the consolidated statements |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|
| Segment sales | Color, Additives and Inks sales | 2,007.4 | 2,046.5 | 2,034.2 | 1,568.2 | 1,653.8 | Up FY2023 to FY2025; up nine months | Segment measure excludes corporate costs, restructuring, environmental and impairment items; unit USD millions |
| Segment sales | Specialty Engineered Materials sales | 1,138.2 | 1,196.8 | 1,231.3 | 935.8 | 1,004.7 | Up FY2023 to FY2025; up nine months | Segment measure excludes corporate costs, restructuring, environmental and impairment items; unit USD millions |
| Segment operating income | Color, Additives and Inks operating income | 259.9 | 296.2 | 301.3 | 242.7 | 271.9 | Up FY2023 to FY2025; up nine months | Segment measure excludes corporate costs, restructuring, environmental and impairment items; unit USD millions |
| Segment operating income | Specialty Engineered Materials operating income | 142.5 | 167.2 | 163.6 | 124.6 | 149.8 | Up FY2023 to FY2025; up nine months | Segment measure excludes corporate costs, restructuring, environmental and impairment items; unit USD millions |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Analyses Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA derived from operating income plus depreciation and amortization | The issuer states no EBITDA, adjusted EBITDA or non-GAAP reconciliation | No source states one | All periods | FY2025 reported EBITDA is 389.4; adding back the 86.3 of ERP and hosting charges gives 475.7 (Analyst Judgement, not used in any ratio) | Leverage and coverage statements | Use the derived measure, labelled calculated; do not present it as company-reported |
| Cash interest | Cash interest paid as the cash flow statement reports it | Interest paid on debt net of the impact of hedging is printed in the annual report note; the income statement shows interest expense, net of 98.6 for FY2025 after interest income of 46.3 that includes swap receipts of 36.1 | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 69; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 84 | FY2023 to FY2025 | Cover of 3.99x on interest paid net of hedging would be about 2.91x with the swap receipts added back (Analyst Judgement) | Interest cover statements | State cover on the net-of-hedging basis and show the swap sensitivity |
| Debt | Carrying value at the balance sheet | Principal is 1,848.6 against carrying value 1,827.2 at 2026-09-30, a difference of 21.4 of unamortized discount and issuance cost | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 9 | 2026-09-30 and every earlier date | 21.4 at 2026-09-30 | Leverage, liquidity and maturity statements | Ratios use carrying value; principal is shown beside it |
| Net debt | Gross debt less cash and equivalents | About 83% of cash is outside the United States; no restricted cash or short-term investments are separately disclosed | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 23 | 2026-09-30 | Net debt treats all cash as available to creditors | Net debt and liquidity statements | State the 83% location of cash beside net debt |
| Environmental cost | One environmental cost figure | The contingencies note gives Calvert City costs of 19.1 for the third quarter and 27.7 for nine months; the segment reconciliation gives environmental remediation costs, net of 18.3 and 26.6 | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 12–13; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, pages 16–17 | Q3 2026 and 9M 2026 | Differences of 0.8 and 1.1 | Environmental cost statements | Quote each figure with its definition; do not reconcile silently |
| Capital expenditures | Cash flow capex | Third-quarter capex of 25.0 in the segment note differs by 0.1 from nine months less six months of 25.1 | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3 | Q3 2026 | 0.1, rounding | Capital expenditure statements | Use the reported discrete quarter; the difference is rounding |
| Net income | Net income of the period | FY2023 net income of 76.2 includes a loss from discontinued operations of 0.1; interim statements show no such line | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54 | FY2023 | 0.1 | Net income statements | Use net income as printed |
| Leases and pensions | Debt excludes leases the issuer carries outside its debt lines and pension obligations | Operating lease obligations sit in accrued and other liabilities, and the pension plans are net overfunded by 4.7 at 2025-12-31 | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 41; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 71 | FY2025 | Operating leases 95.0 undiscounted; not in Total Debt | Claims outside debt | Show leases and the swap liability as claims outside the debt total |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and net debt to 2026-09-30 | Ready with Limitations | EBITDA is derived, not issuer-reported; no adjusted EBITDA exists | Use reported EBITDA with the labelled ERP sensitivity |
| Interest cover | Ready with Limitations | Cash interest is printed for fiscal years only and is net of hedging | Use fiscal-year cover; state interim cover as not calculable |
| Liquidity and maturity wall | Ready with Limitations | Letters-of-credit usage is not printed for 2026; availability is the issuer's figure | State availability as printed |
| Cash flow and conversion | Ready | Interim cash flow is cumulative; the discrete third quarter is calculated | None |
| Claims outside debt | Ready with Limitations | Environmental accrual is open-ended; 2022 IRS matter has no amount | Carry as separate claims |
| Covenant headroom | Not Ready | Financial test levels and definitions are not printed; credit agreement not supplied | Obtain the credit agreement |
| Debt ranking, guarantors and collateral | Not Ready | Ranking and guarantor scope are not stated for the facilities or the 2030 notes | Obtain the executed agreements and indentures |
| Adjusted EBITDA and bridge | Not Ready | The issuer states none | Build house adjustments only with labelled Analyst Judgement |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 38 |
| Calculated | 24 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 6 |
| Fields present | 21 |
| Fields total | 22 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 9 |

## Calculations

Every figure below is arithmetic on printed figures, in USD millions unless stated; lines marked Analyst Judgement are this analysis's own adjustments and feed no ratio in the register.

| Calculation ID | Calculation | Inputs | Result | Basis class | Source |
|---|---|---|---|---|---|
| C01 | EBITDA (Reported), FY2023 | operating income 196.8 + depreciation and amortization 188.8 | 385.6 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55 |
| C02 | EBITDA (Reported), FY2024 | operating income 329.3 + depreciation and amortization 179.7 | 509.0 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55 |
| C03 | EBITDA (Reported), FY2025 | operating income 203.5 + depreciation and amortization 185.9 | 389.4 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 54; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 55 |
| C04 | EBITDA (Reported), Q1 2025 | operating income 0.7 + depreciation and amortization 45.3 | 46.0 | Calculated | 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3 |
| C05 | EBITDA (Reported), Q1 2026 | operating income 95.8 + depreciation and amortization 47.9 | 143.7 | Calculated | 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 2; 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3 |
| C06 | EBITDA (Reported), H1 2025 | operating income 96.8 + depreciation and amortization 91.9 | 188.7 | Calculated | 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3 |
| C07 | EBITDA (Reported), H1 2026 | operating income 208.2 + depreciation and amortization 96.7 | 304.9 | Calculated | 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3 |
| C08 | EBITDA (Reported), Q3 2025 | operating income 67.1 + depreciation and amortization 46.9 | 114.0 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14 |
| C09 | EBITDA (Reported), Q3 2026 | operating income 82.6 + depreciation and amortization 47.2 | 129.8 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14 |
| C10 | EBITDA (Reported), 9M 2025 | operating income 163.9 + depreciation and amortization 138.8 | 302.7 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| C11 | EBITDA (Reported), 9M 2026 | operating income 290.8 + depreciation and amortization 143.9 | 434.7 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3 |
| C12 | LTM EBITDA (Reported) to 2026-03-31 | FY2025 389.4 + Q1 2026 143.7 - Q1 2025 46.0 | 487.1 | Calculated | Rows of T4.4 |
| C13 | LTM EBITDA (Reported) to 2026-06-30 | FY2025 389.4 + H1 2026 304.9 - H1 2025 188.7 | 505.6 | Calculated | Rows of T4.4 |
| C14 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 389.4 + 9M 2026 434.7 - 9M 2025 302.7 | 521.4 | Calculated | Rows of T4.4 |
| C15 | LTM Sales to 2026-09-30 | FY2025 3,260.2 + 9M 2026 2,655.6 - 9M 2025 2,499.6 | 3,416.2 | Calculated | Rows of T4.4 and T4.5 |
| C16 | LTM Gross margin to 2026-09-30 | FY2025 1,015.6 + 9M 2026 852.0 - 9M 2025 786.0 | 1,081.6 | Calculated | Rows of T4.4 and T4.5 |
| C17 | LTM Operating income to 2026-09-30 | FY2025 203.5 + 9M 2026 290.8 - 9M 2025 163.9 | 330.4 | Calculated | Rows of T4.4 and T4.5 |
| C18 | LTM Depreciation and amortization to 2026-09-30 | FY2025 185.9 + 9M 2026 143.9 - 9M 2025 138.8 | 191.0 | Calculated | Rows of T4.4 and T4.5 |
| C19 | LTM Net income to 2026-09-30 | FY2025 83.6 + 9M 2026 165.0 - 9M 2025 66.4 | 182.2 | Calculated | Rows of T4.4 and T4.5 |
| C20 | LTM Net Cash from Operating Activities to 2026-09-30 | FY2025 301.6 + 9M 2026 180.0 - 9M 2025 133.8 | 347.8 | Calculated | Rows of T4.4 and T4.5 |
| C21 | LTM Capital expenditures (positive) to 2026-09-30 | FY2025 106.6 + 9M 2026 66.4 - 9M 2025 64.2 | 108.8 | Calculated | Rows of T4.4 and T4.5 |
| C22 | LTM Interest expense, net (positive) to 2026-09-30 | FY2025 98.6 + 9M 2026 67.0 - 9M 2025 75.8 | 89.8 | Calculated | Rows of T4.4 and T4.5 |
| C23 | Total Debt at FY2023 | short-term and current portion 9.5 + long-term debt 2,070.5 | 2,080.0 | Calculated | Rows of T4.6 |
| C24 | Total Debt at FY2024 | short-term and current portion 7.7 + long-term debt 2,059.3 | 2,067.0 | Calculated | Rows of T4.6 |
| C25 | Total Debt at FY2025 | short-term and current portion 0.5 + long-term debt 1,922.6 | 1,923.1 | Calculated | Rows of T4.6 |
| C26 | Total Debt at 2026-03-31 | short-term and current portion 0.5 + long-term debt 1,924.0 | 1,924.5 | Calculated | Rows of T4.6 |
| C27 | Total Debt at 2026-06-30 | short-term and current portion 0.5 + long-term debt 1,875.3 | 1,875.8 | Calculated | Rows of T4.6 |
| C28 | Total Debt at 2026-09-30 | short-term and current portion 0.4 + long-term debt 1,826.8 | 1,827.2 | Calculated | Rows of T4.6 |
| C29 | Net debt at FY2023 | gross debt 2,080.0 - cash 545.8 | 1,534.2 | Calculated | Net debt data |
| C30 | Net debt at FY2024 | gross debt 2,067.0 - cash 544.5 | 1,522.5 | Calculated | Net debt data |
| C31 | Net debt at FY2025 | gross debt 1,923.1 - cash 510.5 | 1,412.6 | Calculated | Net debt data |
| C32 | Net debt at 2026-03-31 | gross debt 1,924.5 - cash 427.6 | 1,496.9 | Calculated | Net debt data |
| C33 | Net debt at 2026-06-30 | gross debt 1,875.8 - cash 425.6 | 1,450.2 | Calculated | Net debt data |
| C34 | Net debt at 2026-09-30 | gross debt 1,827.2 - cash 445.7 | 1,381.5 | Calculated | Net debt data |
| C35 | Contractual principal at 2026-09-30 | 0.2 + 0.4 + 0.4 + 471.1 + 725.5 + 651.0 | 1,848.6 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 23 |
| C36 | Reconciling items at 2026-09-30 | term loan 9.3 + 2030 notes 5.2 + 2031 notes 6.9 of unamortized discount and issuance cost, shown negative | -21.4 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 9 |
| C37 | Carrying value at 2026-09-30 | principal 1,848.6 - reconciling items 21.4 | 1,827.2 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 9 |
| C38 | Liquidity at FY2024 | cash 544.5 + revolver availability 211.4 | 755.9 | Calculated | 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 38 |
| C39 | Liquidity at FY2025 | cash 510.5 + revolver availability 490.3 | 1,000.8 | Calculated | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 38–39 |
| C40 | Liquidity at 2026-09-30 | cash 445.7 + revolver availability 486.7 | 932.4 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 22 |
| C41 | Free cash flow, FY2023 | operating cash flow 201.6 - capital expenditures 119.4 | 82.2 | Calculated | Rows of T4.5 |
| C42 | Free cash flow, FY2024 | operating cash flow 256.8 - capital expenditures 121.9 | 134.9 | Calculated | Rows of T4.5 |
| C43 | Free cash flow, FY2025 | operating cash flow 301.6 - capital expenditures 106.6 | 195.0 | Calculated | Rows of T4.5 |
| C44 | Free cash flow, 9M 2025 | operating cash flow 133.8 - capital expenditures 64.2 | 69.6 | Calculated | Rows of T4.5 |
| C45 | Free cash flow, 9M 2026 | operating cash flow 180.0 - capital expenditures 66.4 | 113.6 | Calculated | Rows of T4.5 |
| C46 | Free cash flow, LTM 2026-09-30 | LTM operating cash flow 347.8 - LTM capital expenditures 108.8 | 239.0 | Calculated | Rows above |
| C47 | Free cash flow after dividends, 9M 2026 | free cash flow 113.6 - cash dividends paid 75.7 | 37.9 | Calculated | Rows of T4.5 |
| C48 | Working capital movement in receivables, inventories and payables, 9M 2026 | -92.8 + -80.5 + 34.5 | -138.8 | Calculated | Rows of T4.5 |
| C49 | Working capital movement in receivables, inventories and payables, 9M 2025 | -66.4 + -25.4 + -43.5 | -135.3 | Calculated | Rows of T4.5 |
| C50 | Change in total debt, 2025-12-31 to 2026-09-30 | 1,923.1 - 1,827.2 | 95.9 | Calculated | Net debt data |
| C51 | Change in cash, 2025-12-31 to 2026-09-30 | 510.5 - 445.7 | 64.8 | Calculated | Net debt data |
| C52 | Change in net debt, 2025-12-31 to 2026-09-30 | 1,412.6 - 1,381.5 | 31.1 | Calculated | Net debt data |
| C53 | Change in EBITDA, 9M 2026 against 9M 2025 | 434.7 - 302.7 | 132.0 | Calculated | Rows of T4.4 |
| C54 | Change in EBITDA excluding the 2025 ERP charges (Analyst Judgement) | 132.0 - ERP charges 86.3 | 45.7 | Analyst Judgement | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14 |
| C55 | ERP impairment plus hosting charges recognised in the first quarter of 2025 | 71.6 + 14.7 | 86.3 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14 |
| C56 | Normalized FY2025 EBITDA (Analyst Judgement) | FY2025 EBITDA 389.4 + ERP charges 86.3 | 475.7 | Analyst Judgement | Rows above |
| C57 | Normalized FY2025 total debt / EBITDA (Analyst Judgement) | 1,923.1 / 475.7 | 4.04 | Analyst Judgement | Rows above |
| C58 | Normalized FY2025 net debt / EBITDA (Analyst Judgement) | 1,412.6 / 475.7 | 2.97 | Analyst Judgement | Rows above |
| C59 | FY2025 cash interest with swap receipts added back (Analyst Judgement) | cash interest paid 97.6 + swap receipts 36.1 | 133.7 | Analyst Judgement | 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 69; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 84 |
| C60 | FY2025 illustrative cover excluding swap receipts (Analyst Judgement) | EBITDA 389.4 / 133.7 | 2.91 | Analyst Judgement | Rows above |
| C61 | Principal due 2029 to 2031 | 471.1 + 725.5 + 651.0 | 1,847.6 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 23 |
| C62 | Principal due before 2029 | 0.2 + 0.4 + 0.4 | 1.0 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 23 |
| C63 | Cross-currency swap liabilities at 2026-09-30 | current 97.2 + non-current 204.8 | 302.0 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 12 |
| C64 | Cross-currency swap liabilities at 2025-12-31 | current 94.8 + non-current 286.1 | 380.9 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 12 |
| C65 | IRS 2019 matter as claimed | additional tax 23.8 + interest 8.6 + penalty 4.8 | 37.2 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 8 |
| C66 | Voluntary term loan prepayments in 2026 | June 50.0 + September 50.0 | 100.0 | Calculated | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 10 |
| C67 | Total environmental accruals at 2026-09-30, of which Calvert City 133.9 | total accrual as printed | 142.9 | Reported | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 16 |
| C68 | Revolver commitment less printed availability at 2026-09-30 (implied, not a printed letters-of-credit figure) | 500.0 - 486.7 | 13.3 | Analyst Judgement | 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 22 |

## Gaps

- Cash interest paid is not printed in any quarterly report, so EBITDA over cash interest is not calculable for 2026-03-31, 2026-06-30 and 2026-09-30, and interim cover can only be shown on net interest expense as a proxy. Severity: Medium. Action: obtain interest paid for the interim periods or keep cover to fiscal years.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3
- Cash taxes paid are printed for fiscal years only, so interim cash taxes and free cash flow after tax for 2026 are not established. Severity: Low. Action: use the annual figures with their period label.
Basis: 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 78
- The issuer states no adjusted EBITDA, no add-backs and no management bridge, so the adjusted EBITDA row, the adjusted ratios and the EBITDA bridge are not supplied and reported EBITDA is derived by this analysis. Severity: Medium. Action: obtain any management bridge, otherwise keep house adjustments labelled as Analyst Judgement.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3
- Financial test levels and definitions are not printed and the credit agreement is not supplied, so covenant headroom is not calculable at any date. The filings say only that the revolver requires compliance with financial tests under certain circumstances and that the company complied with all covenants. Severity: High. Action: obtain the executed credit agreement and compliance certificates.
Basis: 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 24; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 10
- Ranking, guarantors and collateral are not stated for the revolver, the term loan, the 2030 notes or the other debt, and the FY2024 annual report calls only the 2031 notes senior unsecured obligations, so the debt stack is not drawn and debt by seniority is not established. Severity: High. Action: obtain the executed agreements and indentures.
Basis: 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 41; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, pages 89–91
- Letters-of-credit usage is not printed in the 2026 reports, so net availability rests on the issuer's printed availability of USD 486.7 million; the implied difference from the commitment is USD 13.3 million but is not stated as letters of credit. Severity: Medium. Action: obtain the current letters-of-credit schedule.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 22; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 10
- Revolver availability at 2023-12-31 is not printed, so liquidity for fiscal 2023 is not established, and fiscal 2024 availability reflects the earlier revolver that was replaced in June 2025. Severity: Low. Action: none needed for the current position.
Basis: 10-K_2024-12-31_avnt_avnt-20241231.htm.jsonl, page 41
- The statements print a dash for Other income (expense), net in the third quarter of 2025 and for Proceeds from long-term borrowings in fiscal 2023 and fiscal 2025; these are held as not supplied rather than zero. Severity: Low. Action: none.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 56
- Payments on long-term borrowings and Proceeds from long-term borrowings are not printed in the first-quarter statements, and the interim reports print no proceeds line, so those cells are not supplied. Severity: Low. Action: none; the six- and nine-month statements carry the payments.
Basis: 10-Q_2026-03-31_avnt_avnt-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3
- The filings give maturities in aggregate only, so the term loan's scheduled amortisation, the exact maturity dates of the term loan and 2030 notes, the revolver margin and the composition of other debt are not stated; the notes are shown with no scheduled amortisation because the ladder shows only USD 1.0 million of principal due before 2029 across all debt. Severity: Low. Action: obtain the credit agreement and the indentures.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 23
- The swap maturity schedule after the June and July 2026 extensions is not printed, so which swaps make up the current liability of USD 97.2 million is not established. Severity: Medium. Action: obtain the current derivative schedule.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 12; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 85
- The IRS draft notice of proposed adjustment on the 2022 capital loss, received in September 2026, has no amount and no reserve, so the size of that claim is not established. Severity: Medium. Action: monitor for the notice amount.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 8
- The Calvert City accrual is open-ended: the issuer says additional costs above the accrual are probable and cannot be estimated, and the barrier wall completion date moved to 2032 in the third quarter, so the total environmental claim is not bounded. Severity: High. Action: track each quarterly accrual and any record-of-decision change.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 16
- Environmental cost is stated on two definitions in the third-quarter report, USD 19.1 million and USD 27.7 million in the contingencies note against USD 18.3 million and USD 26.6 million in the segment reconciliation, and the report does not reconcile them. Severity: Low. Action: quote each with its definition.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 17
- Pension and lease schedules are given in the annual report only and the 2026 reports give no update, so those claims are dated 2025-12-31. Severity: Low. Action: label them as fiscal 2025.
Basis: 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 41; 10-K_2025-12-31_avnt_avnt-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 24
- Third-quarter capital expenditures are USD 25.0 million in the segment note and USD 25.1 million as nine months less six months; the difference is rounding. Severity: Low. Action: use the reported discrete quarter.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 3; 10-Q_2026-06-30_avnt_avnt-20260630.htm.jsonl, page 3
- About 83% of cash is outside the United States and no restriction, repatriation cost or trapped-cash figure is stated, so net debt treats all cash as available. Severity: Medium. Action: state the location of cash beside net debt.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 23
- The interim statements are unaudited and no auditor review is stated, so 2026 figures carry a lower evidence tier than fiscal years. Severity: Low. Action: none.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 2
- Nothing after the third-quarter report's signature on 2026-11-04 is supplied, so no event after 2026-09-30 is established and the post-balance-sheet table states none. Severity: Low. Action: refresh from current reports.
Basis: 10-Q_2026-09-30_avnt_avnt-20260930.htm.jsonl, page 29

## Next module

The orchestrator selects the next module.
