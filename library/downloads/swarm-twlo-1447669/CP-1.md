---
issuer_id: twlo-1447669
issuer_name: Twilio Inc
module_id: CP-1
analysis_date: 2026-11-18
reporting_period: Q3 2026
reporting_currency: USD
pathway: credit_snapshot
run_id: twlo-1447669-2026-11-18-credit_snapshot-host
method_version: deploy-v-r14
artifact: twlo-1447669_CP-1_20261118.md
module_status: Ready with Limitations
---

## Request

Twilio Inc (issuer twlo-1447669), as of 2026-11-18, pathway credit_snapshot: normalise the issuer's financial statements, debt, liquidity and credit metrics from the five supplied SEC filings, within the limits stated by the earlier source-readiness review.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_twlo-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-26 | afc80dae142f1e2c48131f9c9da01c49763830e7d85e3635b95dcb2c35324db8 | FY2023 balance sheet; two-segment presentation and segment revenue for FY2023 and FY2024; original FY2024 product revenue groups. |
| 10-K_2025-12-31_twlo-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-24 | 8c23a5b2267d10b1ed34358eff69987b9802fc03b69d28331c7a0b42d10c5fbd | FY2023 to FY2025 income statements, cash flows and balance sheets; debt terms; commitments; key business metrics; non-GAAP and free cash flow reconciliations. |
| 10-Q_2026-03-31_twlo-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-01 | b2c45b905396faa88b0f483398b8f72b641b36e9f41b31733422513df8d665ee | First-quarter 2026 key metrics, non-GAAP and free cash flow figures; discontinued customer-account metric. |
| 10-Q_2026-06-30_twlo-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-07 | bb65df71688feef2fb4ef0ce49bb85c96817f8c06d5bf41bd9ced5745b5c97de | Second-quarter 2026 key metrics, non-GAAP and free cash flow figures; balance sheet presentation of the deferred tax asset. |
| 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-30 | b4d585ca5f8e62081a2705cc0ead0bc494604cbd967e8d301cf0f4b11f9b89fb | Nine-month 2026 and 2025 statements, 2026-09-30 balance sheet, debt note, liquidity, commitments, hedges and third-quarter metrics. |

| Supplied analysis | Module | Exact sha256 | Use |
|---|---|---|---|
| twlo-1447669_CP-0_20261118.md | Source readiness (CP-0) | 4a3d91ec4cd283bcba5101ed97a800396be3fe6c61c40a9f65c74cd20ffd26e5 | Accepted source inventory, authority, period coverage and the conflicts and gaps in the filings that this module carries forward. |

## Findings

### Bottom line

Twilio's two senior note series are small against recovered earnings and fully covered by cash, with gross leverage on derived reported EBITDA falling from 6.51x for FY2024 to 1.85x for the last twelve months to Q3 2026, so debt service is not a near-term constraint.
Basis: calculation C28; calculation C34; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13

That improvement rests on an EBITDA derived from operating income and depreciation, because the issuer reports none, and on profits that followed large impairments and restructuring charges in 2023. Net income for the first nine months of 2026 is inflated by a non-cash tax benefit and is not a guide to cash earnings, and the issuer's summary of the notes lists no limit on share repurchases, though the indenture was not supplied, so cash can be returned to shareholders unless the full terms say otherwise.
Basis: 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 3, 27; calculation C06; calculation C07

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_twlo-20241231.htm.jsonl | Annual report (Form 10-K) | FY2024, FY2023 and FY2022 statements; balance sheets at 2024-12-31 and 2023-12-31 | USD | thousands | Twilio Inc consolidated; Syniverse equity-method investee not consolidated | US GAAP | Tier 1: audited | FY2023 balance sheet; segment revenue; original FY2024 product groups | Superseded for FY2024 comparatives by the FY2025 annual report; two segments reported; Part III by reference. |
| 10-K_2025-12-31_twlo-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025, FY2024 and FY2023 statements; balance sheets at 2025-12-31 and 2024-12-31 | USD | thousands | Twilio Inc consolidated; Syniverse equity-method investee not consolidated | US GAAP | Tier 1: audited | Controlling source for FY2023 to FY2025 and the notes | No separate interest expense or EBITDA; Part III by reference; indenture text not supplied. |
| 10-Q_2026-03-31_twlo-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Three months to 2026-03-31 with 2025 comparatives | USD | thousands | Twilio Inc consolidated | US GAAP | Tier 2b: unaudited, no auditor review report supplied | Quarterly key metrics, non-GAAP and free cash flow; purchase commitments | Condensed notes; no lease maturity table. |
| 10-Q_2026-06-30_twlo-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Three and six months to 2026-06-30 with 2025 comparatives | USD | thousands | Twilio Inc consolidated | US GAAP | Tier 2b: unaudited, no auditor review report supplied | Quarterly key metrics, non-GAAP and free cash flow; deferred tax asset presentation | Condensed notes; no lease maturity table. |
| 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Three and nine months to 2026-09-30 with 2025 comparatives | USD | thousands | Twilio Inc consolidated | US GAAP | Tier 2b: unaudited, no auditor review report supplied | Latest balance sheet, nine-month statements, debt note and liquidity | Non-GAAP reconciliations cover three months only; purchase commitments are one total. |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Twilio Inc | Issuer and registrant; issuer of both note series | December 31 | USD | thousands | Consolidated, including all subsidiaries; no subsidiary guarantees the notes initially | US GAAP | FY2022 (income statement and cash flows only), FY2023, FY2024, FY2025, Q1 2026, H1 2026, 9M 2026 with 2025 comparatives |
| Syniverse Corporation | Equity-method investee, 43.7% at 2025-12-31; not consolidated and not a borrower here | November 30 (reported on a lag) | USD | thousands | Outside the consolidated perimeter; its own debt is not in Twilio's debt | US GAAP | FY2023 to FY2025 summarised financial information in the annual report |

| Period | Start | End |
|---|---|---|
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

Balance-sheet columns are instants at the end date of the period shown, not flows from its start. No subsequent event is flagged: the latest report prints no subsequent-events note and states one date after the quarter end, the share count at 2026-10-16.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 1, 107

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Statements kept in thousands of US dollars as printed; money tables restate them in US$ millions | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Unit presentation only | USD thousands | US$m (thousands divided by 1000, exact to three decimals) | The money tables use millions; no rounding is applied. | All periods |
| EBITDA derived because the issuer states none | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Calculated from components | Not supplied: no EBITDA is printed | Income (loss) from operations plus depreciation and amortization | Method step 4: derive from components and label as calculated; no add-backs are applied (Analyst Judgement: no house adjustment). | FY2023, FY2024, FY2025, 9M 2025, 9M 2026 |
| Total Debt taken as long-term debt, net | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Mapping to the fixed row | Long-term debt, net | Total Debt | The two note series are the only balance-sheet debt line; operating lease liabilities are on their own lines and are not added. | All balance-sheet dates |
| Dec 2025 other long-term assets: annual report line kept whole | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Presentation difference | Other long-term assets 242674 (annual report) against 222648 plus deferred tax asset 20026 (Q3 comparative) | 242674 in the FY2025 column; deferred tax asset shown as not separately printed there | The audited annual report is controlling for the FY2025 column; both presentations sum to the same total. | FY2025 |
| Cash and cash equivalents only in net debt | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Definition choice | Cash and cash equivalents plus short-term marketable securities | Cash and cash equivalents | The method's Cash & Equivalents row excludes short-term investments; the wider figure is shown beside it as an Analyst Judgement. | All balance-sheet dates |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Revenue | 4153945 | 4458036 | 5067220 | 3701290 | 4465532 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Cost of revenue | 2110015 | 2179824 | 2588486 | 1884906 | 2294892 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Gross profit | 2043930 | 2278212 | 2478734 | 1816384 | 2170640 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Research and development | 942790 | 1008747 | 1020159 | 760101 | 815850 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Sales and marketing | 1022985 | 860821 | 873216 | 653464 | 645314 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| General and administrative | 468459 | 449079 | 410678 | 301800 | 335863 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Restructuring costs | 165733 | 13273 | 15030 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Impairment of long-lived assets | 320504 | Not supplied: the source prints a dash | 1849 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Impairment loss on prepaid assets | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the source prints a dash | 32771 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Total operating expenses | 2920471 | 2331920 | 2320932 | 1715365 | 1829798 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Income (loss) from operations | -876541 | -53708 | 157802 | 101019 | 340842 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Share of losses from equity method investment | -121897 | -108481 | -101217 | -72199 | -77058 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Impairment of equity method investment | Not supplied: the source prints a dash | Not supplied: the source prints a dash | -80629 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Impairment of strategic investments | -46154 | -8220 | Not supplied: the source prints a dash | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Other income, net | 47863 | 81796 | 79138 | 64040 | 53103 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Interest expense (total) | Not supplied: interest expense is not printed separately; it sits within other income, net | Not supplied: interest expense is not printed separately; it sits within other income, net | Not supplied: interest expense is not printed separately; it sits within other income, net | Not supplied: interest expense is not printed separately; it sits within other income, net | Not supplied: interest expense is not printed separately; it sits within other income, net | USD thousands | Not printed | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Interest income | Not supplied: interest income is not printed separately; it sits within other income, net | Not supplied: interest income is not printed separately; it sits within other income, net | Not supplied: interest income is not printed separately; it sits within other income, net | Not supplied: interest income is not printed separately; it sits within other income, net | Not supplied: interest income is not printed separately; it sits within other income, net | USD thousands | Not printed | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Total other expenses, net | -120188 | -34905 | -102708 | -8159 | -23955 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Income (loss) before income taxes | -996729 | -88613 | 55094 | 92860 | 316887 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Benefit from (provision for) income taxes | -18712 | -20790 | -21260 | -13172 | 1001618 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Net income (loss) attributable to common stockholders | -1015441 | -109403 | 33834 | 79688 | 1318505 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Depreciation and amortization | 284413 | 205984 | 195444 | 147901 | 91414 | USD thousands | Reported in the cash flow statement | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 5 |
| Stock-based compensation | 675857 | 616607 | 600407 | 446693 | 432339 | USD thousands | Reported in the cash flow statement | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 5 |
| EBITDA (Reported) | -592128 | 152276 | 353246 | 248920 | 432256 | USD thousands | Calculated: income (loss) from operations plus depreciation and amortization; the issuer states no EBITDA; calculations C05 to C09 | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104, 106; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 3, 5 |

Signs are as the statements print them: operating costs are positive, and other expenses, impairments and tax charges are negative; a tax benefit is positive.
Basis: 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–105; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3

### Segment schedule

| Business unit | Period | Revenue | Unit | Basis | Source |
|---|---|---|---|---|---|
| Twilio Communications | FY2023 | 3858693 | USD thousands | Reported in the FY2024 annual report under the two-segment presentation | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 151 |
| Twilio Communications | FY2024 | 4160340 | USD thousands | Reported in the FY2024 annual report under the two-segment presentation | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 151 |
| Twilio Segment | FY2023 | 295252 | USD thousands | Reported in the FY2024 annual report under the two-segment presentation | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 151 |
| Twilio Segment | FY2024 | 297696 | USD thousands | Reported in the FY2024 annual report under the two-segment presentation | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 151 |
| Consolidated (single reportable segment) | FY2025 | 5067220 | USD thousands | One operating and reportable segment from the third quarter of 2025; no segment split is printed | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 82, 104 |
| Consolidated (single reportable segment) | 9M 2026 | 4465532 | USD thousands | One operating and reportable segment; no segment split is printed | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 3, 9 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net income (loss) | -1015441 | -109403 | 33834 | 79688 | 1318505 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Depreciation and amortization | 284413 | 205984 | 195444 | 147901 | 91414 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Non-cash reduction to the right-of-use asset | 26971 | 19095 | 22000 | 16634 | 14206 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Net amortization of investment premium and discount | -44 | -22940 | -14132 | -11473 | -5908 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Impairment of long-lived assets | 320504 | Not supplied: the source prints a dash | 1849 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Stock-based compensation | 675857 | 616607 | 600407 | 446693 | 432339 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Amortization of deferred commissions | 72892 | 76348 | 74533 | 56895 | 48910 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Realized and unrealized (gains) losses on equity securities | 8043 | 1681 | -1016 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Provision for doubtful accounts | 51859 | 35393 | 8230 | 6361 | 15101 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Value of shares of Class A common stock issued and donated to charity | 5346 | 5907 | 9935 | 7118 | 12328 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Share of losses from equity method investment | 121897 | 108481 | 101217 | 72199 | 77058 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Impairment of equity method investment | Not supplied: the source prints a dash | Not supplied: the source prints a dash | 80629 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Impairment of strategic investments | 46154 | 8220 | Not supplied: the source prints a dash | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Loss on net assets divested | 32277 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Impairment of capitalized internal-use software development costs | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | 6642 | 13957 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Tax benefit related to release of valuation allowance | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the source prints a dash | -937077 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Impairment loss on prepaid assets | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the source prints a dash | 32771 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Other adjustments | 14669 | 5009 | 4182 | 204 | 1924 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Accounts receivable | -85093 | -61160 | -55067 | -30942 | -133381 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Prepaid expenses and other current assets | -56283 | -153470 | 10552 | 77596 | 93142 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Deferred tax asset | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | -1667 | -82243 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Other long-term assets | -2328 | -47077 | -122203 | -62592 | -57462 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Accounts payable | 12370 | -20256 | -14973 | -59798 | -24720 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Accrued expenses and other current liabilities | -51816 | 87434 | 102652 | 3939 | 33929 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Deferred revenue and customer deposits | 5371 | 11181 | 2038 | 3484 | -1631 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Operating lease liabilities | -56340 | -48759 | -35592 | -26868 | -26730 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Other long-term liabilities | 3474 | -2034 | -1275 | -325 | -1677 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Operating Activities | 414752 | 716241 | 1003244 | 731689 | 914755 | USD thousands | Reported total | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Acquisitions, net of cash acquired and payments related to prior period acquisitions | -5770 | Not supplied: the source prints a dash | -61496 | Not supplied: the source prints a dash | -685 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Divestitures, net of cash divested | 38194 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Purchases of marketable securities and other investments | -1953003 | -923863 | -1050858 | -780234 | -751923 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Proceeds from sales and maturities of marketable securities and other investments | 2200417 | 2353486 | 1251119 | 1043977 | 688244 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Capitalized software development costs | -39925 | -51808 | -51969 | -37964 | -47968 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Purchases of long-lived and intangible assets | -11310 | -6978 | -5848 | -4402 | -12168 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Investing Activities | 228603 | 1370837 | 80948 | 221377 | -124500 | USD thousands | Reported total | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Principal payments on finance leases | -16134 | -12558 | -5306 | -5255 | -193 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Value of equity awards withheld for tax liabilities | -2565 | -2000 | -213 | -213 | -62 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Repurchases of shares of Class A common stock and related costs | -668751 | -2334400 | -868939 | -670472 | -448296 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Proceeds from exercises of stock options and shares of Class A common stock issued under ESPP | 43840 | 37386 | 41363 | 26280 | 37293 | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Financing Activities | -643610 | -2311572 | -833095 | -649660 | -411258 | USD thousands | Reported total | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| FX Effect on Cash | 108 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Net Cash Change | -147 | -224494 | 251097 | 303406 | 378997 | USD thousands | Reported: operating plus investing plus financing plus the FX effect | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Opening Cash | 656078 | 655931 | 431437 | 431437 | 682534 | USD thousands | Reported: cash, cash equivalents and restricted cash | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Closing Cash | 655931 | 431437 | 682534 | 734843 | 1061531 | USD thousands | Reported: cash, cash equivalents and restricted cash | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Cash Interest Paid | 38389 | 37904 | 37578 | 37571 | 37516 | USD thousands | Reported supplemental disclosure; cash paid, not accrued expense | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Cash Taxes Paid | 37818 | 36547 | 17711 | 15947 | 25741 | USD thousands | Reported supplemental disclosure, net | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| Free cash flow (issuer definition) | 363517 | 657455 | 945427 | 689323 | 854619 | USD thousands | Calculated: operating cash flow less capitalized software development costs and purchases of long-lived and intangible assets; calculations C16 to C20 | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |

Interest is classified in operating activities under US GAAP and lease principal paid on finance leases in financing activities; the purchases line is labelled long-lived and intangible assets in the annual report and long-lived assets in the quarterly report. Cash and equivalents at 2026-09-30 equal closing cash including restricted cash, so no restricted-cash difference is printed for that date.
Basis: 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 6

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Cash & Equivalents | 655931 | 421297 | 682335 | 1061531 | USD thousands | Reported: cash and cash equivalents | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Short-term marketable securities | 3356064 | 1963102 | 1788007 | 1829940 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Accounts receivable, net | 562773 | 588540 | 636736 | 755015 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Prepaid expenses and other current assets | 329204 | 474360 | 469650 | 338971 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Total current assets | 4903972 | 3447299 | 3576728 | 3985457 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Property and equipment, net | 209639 | 191042 | 176963 | 183870 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Operating right-of-use assets | 73959 | 53405 | 39031 | 25740 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Equity method investment | 593582 | 485835 | 301642 | 225180 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Intangible assets, net | 350490 | 238503 | 142065 | 105301 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Goodwill | 5243266 | 5243266 | 5291787 | 5291893 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Other long-term assets | 234799 | 206122 | 242674 | 230008 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Deferred tax asset | Not supplied: not printed separately in the annual report; included in other long-term assets | Not supplied: not printed separately in the annual report; included in other long-term assets | Not supplied: not printed separately in the annual report; the third-quarter report's comparative shows 20026 within other long-term assets | 1059490 | USD thousands | Reported where printed | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Accounts payable | 119615 | 100169 | 85089 | 61624 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Accrued expenses and other current liabilities | 424311 | 530686 | 608119 | 646245 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Deferred revenue and customer deposits | 144499 | 155680 | 158677 | 157046 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Operating lease liability, current | 49872 | 33685 | 35123 | 26583 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Total current liabilities | 738297 | 820220 | 887008 | 891498 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Operating lease liability, noncurrent | 120770 | 85875 | 54162 | 36811 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Other long-term liabilities | 29135 | 15824 | 15887 | 14431 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Class A common stock | 182 | 153 | 152 | 155 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Additional paid-in capital | 14797723 | 15476124 | 16148190 | 16657626 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Accumulated other comprehensive income (loss) | 619 | -1301 | 15668 | -16520 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Accumulated deficit | -5065972 | -7522010 | -8342464 | -7470668 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Total Assets | 11609707 | 9865472 | 9770890 | 11106939 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Total Liabilities | 1877155 | 1912506 | 1949344 | 1936346 | USD thousands | Reported | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Total Equity | 9732552 | 7952966 | 7821546 | 9170593 | USD thousands | Reported: total stockholders' equity; no temporary equity or minority interest is printed | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Total Debt | 988953 | 990587 | 992287 | 993606 | USD thousands | Reported: long-term debt, net, the only debt line; carrying value net of discount and issuance costs | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |

Operating lease liabilities are on their own lines and are not added to Total Debt; the third-quarter report's balance sheet columns are at 2026-09-30, so the 9M 2026 column is an instant at that date. The printed preferred stock line is nil at every date and no temporary equity is printed.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2029 Senior Notes | Senior notes | 497398 | 500000 | Not applicable | Not applicable | Unsecured: general unsecured obligations | Senior in right of payment to subordinated debt; equal to other unsecured, unsubordinated liabilities | USD | 497398 | Not applicable | 3.625% | fixed | Not applicable | Not applicable | Not applicable | 2029-03-15 | 0 | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136 |
| 2031 Senior Notes | Senior notes | 496208 | 500000 | Not applicable | Not applicable | Unsecured: general unsecured obligations | Senior in right of payment to subordinated debt; equal to other unsecured, unsubordinated liabilities | USD | 496208 | Not applicable | 3.875% | fixed | Not applicable | Not applicable | Not applicable | 2031-03-15 | 0 | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136 |

Amounts are USD thousands at 2026-09-30 as printed. The carrying values add to Total Debt of 993606, so no financing cost adjustment row is needed. Neither series has a subsidiary guarantee initially, though material domestic subsidiaries may guarantee them later; both can be redeemed at the issuer's option on the stated schedules and carry a change-of-control repurchase offer at 101% of principal. No credit facility, securitization, term loan or letter of credit is disclosed.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136; calculation C24

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM | USD 5067.22m | USD 4465.532m | USD 3701.29m | USD 5831.462m | Calculated | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | FY2025 plus 9M 2026 less 9M 2025; the stubs are comparable nine-month periods. |
| Income from operations | LTM | USD 157.802m | USD 340.842m | USD 101.019m | USD 397.625m | Calculated | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Includes impairment and restructuring items in each component. |
| Depreciation and amortization | LTM | USD 195.444m | USD 91.414m | USD 147.901m | USD 138.957m | Calculated | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Cash flow statement line. |
| EBITDA (Reported, derived) | LTM | USD 353.246m | USD 432.256m | USD 248.92m | USD 536.582m | Calculated | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Derived from operating income plus depreciation and amortization; no issuer EBITDA exists. |
| Cash interest paid | LTM | USD 37.578m | USD 37.516m | USD 37.571m | USD 37.523m | Calculated | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Cash paid, not accrued. |
| Net cash from operating activities | LTM | USD 1003.244m | USD 914.755m | USD 731.689m | USD 1186.31m | Calculated | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Includes working capital movements. |
| Free cash flow (issuer definition) | LTM | USD 945.427m | USD 854.619m | USD 689.323m | USD 1110.723m | Calculated | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Operating cash flow less capitalized software and purchases of long-lived assets. |
| Revenue | Q4 2025 (FY2025 less 9M 2025) | USD 5067.22m | Not applicable: no current stub | USD 3701.29m | USD 1365.93m | Calculated | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | No fourth-quarter 2025 report is supplied, so the quarter is derived by subtraction. |
| EBITDA (Reported, derived) | Q4 2025 (FY2025 less 9M 2025) | USD 353.246m | Not applicable: no current stub | USD 248.92m | USD 104.326m | Calculated | 10-K_2025-12-31_twlo-20251231.htm.jsonl; 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Derived by subtraction; labelled calculated. |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt (carrying value) / EBITDA (Reported) | 988.953 | T4.6 Total Debt and Net debt data, FY2023 / 2023-12-31; C01 | -592.128 | T4.4 EBITDA (Reported), FY2023; C05 | FY2023 / 2023-12-31 | USD | US$m | Not calculable: EBITDA is zero or negative | Not Calculable | Tier 1: audited annual statements, derived EBITDA | Reported EBITDA is negative after impairments and restructuring, so the ratio has no meaning. |
| Net debt / EBITDA | Net debt (gross debt less cash and cash equivalents) / EBITDA (Reported) | 333.022 | T4.6 Total Debt and Net debt data, FY2023 / 2023-12-31; C01 | -592.128 | T4.4 EBITDA (Reported), FY2023; C05 | FY2023 / 2023-12-31 | USD | US$m | Not calculable: EBITDA is zero or negative | Not Calculable | Tier 1: audited annual statements, derived EBITDA | Reported EBITDA is negative, so the ratio has no meaning. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | -592.128 | T4.4 EBITDA (Reported), FY2023; C05 | 38.389 | T4.5 Cash Interest Paid, FY2023 | FY2023 / 2023-12-31 | USD | US$m | -15.42 | Calculated | Tier 1: audited annual statements, derived EBITDA | Negative because EBITDA is negative; cash paid, not accrued interest. |
| Total debt / EBITDA | Gross debt (carrying value) / EBITDA (Reported) | 990.587 | T4.6 Total Debt and Net debt data, FY2024 / 2024-12-31; C02 | 152.276 | T4.4 EBITDA (Reported), FY2024; C06 | FY2024 / 2024-12-31 | USD | US$m | 6.51 | Calculated | Tier 1: audited annual statements, derived EBITDA | Carrying value, not principal; derived EBITDA with no add-backs. |
| Net debt / EBITDA | Net debt (gross debt less cash and cash equivalents) / EBITDA (Reported) | 569.29 | T4.6 Total Debt and Net debt data, FY2024 / 2024-12-31; C02 | 152.276 | T4.4 EBITDA (Reported), FY2024; C06 | FY2024 / 2024-12-31 | USD | US$m | 3.74 | Calculated | Tier 1: audited annual statements, derived EBITDA | Cash and cash equivalents only; short-term marketable securities are not netted. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 152.276 | T4.4 EBITDA (Reported), FY2024; C06 | 37.904 | T4.5 Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 4.02 | Calculated | Tier 1: audited annual statements, derived EBITDA | Denominator is cash paid, not accrued interest expense. |
| Total debt / EBITDA | Gross debt (carrying value) / EBITDA (Reported) | 992.287 | T4.6 Total Debt and Net debt data, FY2025 / 2025-12-31; C03 | 353.246 | T4.4 EBITDA (Reported), FY2025; C07 | FY2025 / 2025-12-31 | USD | US$m | 2.81 | Calculated | Tier 1: audited annual statements, derived EBITDA | Carrying value, not principal; derived EBITDA with no add-backs. |
| Net debt / EBITDA | Net debt (gross debt less cash and cash equivalents) / EBITDA (Reported) | 309.952 | T4.6 Total Debt and Net debt data, FY2025 / 2025-12-31; C03 | 353.246 | T4.4 EBITDA (Reported), FY2025; C07 | FY2025 / 2025-12-31 | USD | US$m | 0.88 | Calculated | Tier 1: audited annual statements, derived EBITDA | Cash and cash equivalents only; short-term marketable securities are not netted. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 353.246 | T4.4 EBITDA (Reported), FY2025; C07 | 37.578 | T4.5 Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 9.40 | Calculated | Tier 1: audited annual statements, derived EBITDA | Denominator is cash paid, not accrued interest expense. |
| Total debt / EBITDA | Gross debt (carrying value) / EBITDA (Reported) | 993.606 | T4.6 Total Debt and Net debt data, 2026-09-30; C04 | 536.582 | T4.8 EBITDA (Reported, derived) LTM; C13 | 2026-09-30 | USD | US$m | 1.85 | Calculated | Tier 1 annual plus Tier 2b interim, derived LTM EBITDA | Carrying value, not principal; derived EBITDA with no add-backs. |
| Net debt / EBITDA | Net debt (gross debt less cash and cash equivalents) / EBITDA (Reported) | -67.925 | T4.6 Total Debt and Net debt data, 2026-09-30; C04 | 536.582 | T4.8 EBITDA (Reported, derived) LTM; C13 | 2026-09-30 | USD | US$m | -0.13 | Calculated | Tier 1 annual plus Tier 2b interim, derived LTM EBITDA | Cash and cash equivalents only; short-term marketable securities are not netted. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 536.582 | T4.8 EBITDA (Reported, derived) LTM; C13 | 37.523 | T4.5 Cash Interest Paid, 2026-09-30; C14 | 2026-09-30 | USD | US$m | 14.30 | Calculated | Tier 1 annual plus Tier 2b interim, derived LTM EBITDA | Denominator is cash paid, not accrued interest expense. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|---|
| Issuer reported | Dollar-Based Net Expansion Rate, % | 103 | 104 | 108 | 114 | 116 | 114 | Higher, with a small step down in Q3 2026 | Period flow, issuer-defined rate, not averaged; the quarterly values are the quarter's own rate. 10-K_2025-12-31_twlo-20251231.htm.jsonl page 84; 10-Q_2026-03-31_twlo-20260331.htm.jsonl page 23; 10-Q_2026-06-30_twlo-20260630.htm.jsonl page 27; 10-Q_2026-09-30_twlo-20260930.htm.jsonl page 27. |
| Issuer reported | Total revenue growth rate, % | 9 | 7 | 14 | 20 | 22 | 20 | Higher, with a step down in Q3 2026 | Period flow, year on year; as reported. |
| Issuer reported | Active Customer Accounts, count at period end | 305000 | 325000 | 402000 | Not supplied: the metric was discontinued from the first quarter of 2026 | Not supplied: the metric was discontinued from the first quarter of 2026 | Not supplied: the metric was discontinued from the first quarter of 2026 | Higher to 2025; series ends | Period-end value; a new series starts only if the issuer resumes it. 10-K_2025-12-31_twlo-20251231.htm.jsonl page 84; 10-Q_2026-03-31_twlo-20260331.htm.jsonl page 24. |
| Issuer reported | Usage-based share of revenue, % | 71 | 72 | 74 | 75 | 75 | 76 | Higher | Period flow; the 2026 values are for the three months of each quarter. 10-K_2025-12-31_twlo-20251231.htm.jsonl page 87; 10-Q_2026-03-31_twlo-20260331.htm.jsonl page 25; 10-Q_2026-06-30_twlo-20260630.htm.jsonl page 29; 10-Q_2026-09-30_twlo-20260930.htm.jsonl page 29. |
| Issuer reported | Non-GAAP income from operations, USD thousands | 533008 | 714394 | 924033 | 278927 | 284633 | 325731 | Higher | Issuer-adjusted measure that adds back stock-based compensation and other items; not EBITDA and not used in leverage. 10-K_2025-12-31_twlo-20251231.htm.jsonl page 93; 10-Q_2026-03-31_twlo-20260331.htm.jsonl page 31; 10-Q_2026-06-30_twlo-20260630.htm.jsonl page 37; 10-Q_2026-09-30_twlo-20260930.htm.jsonl page 37. |
| Issuer reported | Free cash flow, USD thousands | 363517 | 657455 | 945427 | 132345 | 352645 | 369629 | Higher | Issuer definition, period flow; the 2026 quarters sum to 854619, the nine-month figure in calculation C20. |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Affected conclusions | Resolution / Recommendation | Source |
|---|---|---|---|---|---|---|---|---|
| EBITDA | Reported unadjusted EBITDA is the leverage denominator | No EBITDA is stated; the issuer reports non-GAAP income from operations that adds back stock-based compensation, amortization of acquired intangibles and other items | Issuer discloses a different earnings measure | FY2023 to 9M 2026 | FY2025 derived EBITDA 353.246 against non-GAAP income from operations 924.033, US$m | Leverage and cover are on the derived measure; a measure that adds back stock-based compensation would show lower leverage | EBITDA derived as operating income plus depreciation and amortization; no add-back is accepted; the non-GAAP measure is shown separately in the dashboard | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 93, 104, 106 |
| Net debt | Gross debt less cash and cash equivalents | No net debt measure is stated | Short-term marketable securities are a large liquid asset outside the method's cash row | All balance-sheet dates | At 2026-09-30 net debt is -67.925 on cash and equivalents and -1897.865 after short-term marketable securities, US$m | Net leverage understates liquidity; both views support low leverage | Primary net debt follows the method; the wider figure is stated beside it | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Total debt | Balance-sheet carrying value; principal kept separate | Principal 500 plus 500 against carrying 993.606, US$m | Unamortized discount and issuance costs | 2026-09-30 | Difference 6.394 US$m | Carrying leverage 1.85x against principal 1.86x | Carrying value used; the reconciliation is in the debt table | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13 |
| Other long-term assets and deferred tax asset | One presentation per balance-sheet date | Annual report and first-quarter report print one line of 242674 at 2025-12-31; the second and third quarter reports split it into 222648 and 20026 | Reclassification to conform to current presentation | FY2025 and 9M 2026 | No total differs; deferred tax asset line of 20026 within 242674 | None for leverage; matters for asset analysis | The annual report line is kept for FY2025 and the split line is used from the third-quarter report | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-06-30_twlo-20260630.htm.jsonl, pages 2, 7; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Segment structure | One perimeter across periods | Two reportable segments in the FY2024 report; one from the third quarter of 2025 | Realignment of the business units | FY2023 and FY2024 against FY2025 onward | Segment revenue exists for FY2023 and FY2024 only | Segment trends cannot be extended | Segment schedule keeps the two presentations apart; consolidated series are not split | 10-K_2024-12-31_twlo-20241231.htm.jsonl, pages 142–144; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 82 |
| Product revenue groups | One classification across periods | RCS and WhatsApp messaging moved from Other to Messaging in the FY2025 report | Reclassification of prior years | FY2023 and FY2024 | 76.695 US$m moved for FY2024 and 66.6 US$m for FY2023 per the annual report | Product mix series must use the FY2025 report | Use the FY2025 report's regrouped figures; the FY2024 report's groups are not mixed in | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 151; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 136 |
| Purchase commitments | One definition and a schedule by year | Annual report: USD 349.241 million with a yearly schedule at 2025-12-31; quarterly reports: USD 273.2 million at 2026-03-31, USD 1.5 billion at 2026-06-30 and USD 1.3 billion at 2026-09-30, each as a single total | Single totals with no schedule; the step up in the second quarter is not explained | 2025-12-31 to 2026-09-30 | Unexplained increase from USD 273.2 million to USD 1.5 billion between 2026-03-31 and 2026-06-30 | Claims outside debt for 2026 cannot be scheduled | Stated as reported with no reconciliation; kept as a limitation for liquidity | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 137; 10-Q_2026-03-31_twlo-20260331.htm.jsonl, page 13; 10-Q_2026-06-30_twlo-20260630.htm.jsonl, page 14; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 15 |
| Share repurchases (multi-figure event) | One economic event with every figure and its role | Aggregate value repurchased USD 446.7 million in nine months 2026 (equity note); cash paid for repurchases and related costs 448.296 US$m (cash flow statement) | Cash paid includes related costs and settlement timing | 9M 2026 | Difference of 1.596 US$m between the cash flow line and the aggregate value | None for leverage; cash returned to shareholders is slightly above the stated purchase value | Cash flow line used for cash analysis; aggregate value used for the programme; both kept | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 6, 18, 39 |
| Valuation allowance release (multi-figure event) | One economic event with every figure and its role | Income tax benefit 937.077 in the cash flow statement; deferred tax asset on the balance sheet up by 1039.464; deferred tax asset line in operating cash flow 82.243, US$m | The release is booked through tax benefit, and the asset also moves for other reasons | 9M 2026 | Balance-sheet movement 1039.464 against benefit 937.077, US$m (calculation C46) | Nine-month net income is not a cash earnings guide | Benefit is non-cash and excluded from EBITDA; each figure kept with its role | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2, 5–6, 27 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | Not supplied: reported EBITDA is negative | Not supplied: reported EBITDA is negative | x | Reported EBITDA of the year is negative after 2023 impairments and restructuring, so no ratio is stated. |
| FY2024 / 2024-12-31 | 6.51 | 3.74 | x | Carrying debt; derived reported EBITDA for the fiscal year; net debt on cash and cash equivalents only. |
| FY2025 / 2025-12-31 | 2.81 | 0.88 | x | Carrying debt; derived reported EBITDA for the fiscal year; net debt on cash and cash equivalents only. |
| 2026-09-30 | 1.85 | -0.13 | x | Carrying debt; derived reported EBITDA, last twelve months to 2026-09-30; net debt on cash and cash equivalents only. |

The ratios use balance-sheet carrying debt and EBITDA derived from operating income plus depreciation and amortization, and the last row is a last-twelve-months figure.
Basis: calculation C25; calculation C28; calculation C31; calculation C34; calculation C35

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2023 / 2023-12-31 | -15.42 | x | Fiscal-year derived EBITDA over cash interest paid; cash paid, not accrued. Negative because EBITDA is negative. |
| FY2024 / 2024-12-31 | 4.02 | x | Fiscal-year derived EBITDA over cash interest paid; cash paid, not accrued. |
| FY2025 / 2025-12-31 | 9.40 | x | Fiscal-year derived EBITDA over cash interest paid; cash paid, not accrued. |
| 2026-09-30 | 14.30 | x | Last twelve months derived EBITDA over cash interest paid. |

Cover divides derived EBITDA by cash interest paid rather than accrued interest, and the FY2023 figure is negative because impairments and restructuring depressed operating income.
Basis: calculation C27; calculation C30; calculation C33; calculation C36

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 655.931 | Not supplied: no committed facility is disclosed | US$m | Cash and cash equivalents; short-term marketable securities of 3356.064 are excluded and are not a committed facility. Only a possible future revolving facility is mentioned in risk factors. |
| FY2024 / 2024-12-31 | 421.297 | Not supplied: no committed facility is disclosed | US$m | Cash and cash equivalents; short-term marketable securities of 1963.102 are excluded and are not a committed facility. Only a possible future revolving facility is mentioned in risk factors. |
| FY2025 / 2025-12-31 | 682.335 | Not supplied: no committed facility is disclosed | US$m | Cash and cash equivalents; short-term marketable securities of 1788.007 are excluded and are not a committed facility. Only a possible future revolving facility is mentioned in risk factors. |
| 2026-09-30 | 1061.531 | Not supplied: no committed facility is disclosed | US$m | Cash and cash equivalents; short-term marketable securities of 1829.94 are excluded and are not a committed facility. Only a possible future revolving facility is mentioned in risk factors. |

Cash excludes short-term marketable securities, which exceed cash at every date shown, and no committed facility is disclosed.
Basis: 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104, 63; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2, 92; calculation C41

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2029 | 500 | US$m | 2029 senior notes, principal at maturity on 2029-03-15; unsecured bullet; carrying value 497.398 at 2026-09-30. |
| FY2031 | 500 | US$m | 2031 senior notes, principal at maturity on 2031-03-15; unsecured bullet; carrying value 496.208 at 2026-09-30. |

The ladder shows contractual note principal at the 2029 and 2031 maturities only; operating lease liabilities and finance leases are outside it, and no other principal is printed for any year.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136; calculation C23

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Revenue | 4153.945 | 4458.036 | 5067.22 | 5831.462 | US$m | Reported; LTM calculated (calculation C10) | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| EBITDA (Reported, derived) | -592.128 | 152.276 | 353.246 | 536.582 | US$m | Calculated: operating income plus depreciation and amortization (calculation C13) | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| EBITDA margin | -14.25 | 3.42 | 6.97 | 9.20 | % | Calculated: derived EBITDA over revenue | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| Income (loss) from operations | -876.541 | -53.708 | 157.802 | 397.625 | US$m | Reported; LTM calculated (calculation C11) | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| Net cash from operating activities | 414.752 | 716.241 | 1003.244 | 1186.31 | US$m | Reported; LTM calculated (calculation C15) | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| Free cash flow (issuer definition) | 363.517 | 657.455 | 945.427 | 1110.723 | US$m | Calculated, equal to the issuer's reconciliation (calculation C21) | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| Cash interest paid | 38.389 | 37.904 | 37.578 | 37.523 | US$m | Reported; LTM calculated (calculation C14) | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| Total debt (carrying value) | 988.953 | 990.587 | 992.287 | 993.606 | US$m | Reported at the balance-sheet date; the last column is 2026-09-30 | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| Cash and cash equivalents | 655.931 | 421.297 | 682.335 | 1061.531 | US$m | Reported at the balance-sheet date; the last column is 2026-09-30 | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| Cash plus short-term marketable securities | 4011.995 | 2384.399 | 2470.342 | 2891.471 | US$m | Calculated (calculation C41); Analyst Judgement on liquidity, not the method's cash row | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| Net debt (cash and equivalents basis) | 333.022 | 569.29 | 309.952 | -67.925 | US$m | Calculated: gross debt less cash and cash equivalents | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| Total debt / EBITDA | Not calculable: EBITDA is negative | 6.51 | 2.81 | 1.85 | x | Calculated; see the calculation register | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| Net debt / EBITDA | Not calculable: EBITDA is negative | 3.74 | 0.88 | -0.13 | x | Calculated; see the calculation register | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |
| EBITDA / cash interest | -15.42 | 4.02 | 9.40 | 14.30 | x | Calculated; see the calculation register | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2023 / 2023-12-31 | 988.953 | 655.931 | 333.022 | US$m | Reported carrying value of the 2029 and 2031 senior notes, net of discount and issuance costs; no securitization, facility or finance lease is carried within debt lines; principal total 1000 beside it. Net debt is gross debt less cash and cash equivalents only (calculation C01); a negative figure is net cash. |
| FY2024 / 2024-12-31 | 990.587 | 421.297 | 569.29 | US$m | Reported carrying value of the 2029 and 2031 senior notes, net of discount and issuance costs; no securitization, facility or finance lease is carried within debt lines; principal total 1000 beside it. Net debt is gross debt less cash and cash equivalents only (calculation C02); a negative figure is net cash. |
| FY2025 / 2025-12-31 | 992.287 | 682.335 | 309.952 | US$m | Reported carrying value of the 2029 and 2031 senior notes, net of discount and issuance costs; no securitization, facility or finance lease is carried within debt lines; principal total 1000 beside it. Net debt is gross debt less cash and cash equivalents only (calculation C03); a negative figure is net cash. |
| 2026-09-30 | 993.606 | 1061.531 | -67.925 | US$m | Reported carrying value of the 2029 and 2031 senior notes, net of discount and issuance costs; no securitization, facility or finance lease is carried within debt lines; principal total 1000 beside it. Net debt is gross debt less cash and cash equivalents only (calculation C04); a negative figure is net cash. |

Short-term marketable securities of 1829.94 US$m at 2026-09-30 are not netted; after them the figure is -1897.865 US$m (calculation C42), which is why the net debt figure is a conservative view of liquidity.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2; 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 1000 | -6.394 | 993.606 | US$m | Ladder principal 500 plus 500; reconciling items are unamortized discount 2.124 and 3.095 and unamortized issuance costs 0.478 and 0.697, together negative 6.394 (calculation C23); no debt is left out of the ladder. Carrying value 993.606 is the Gross debt of the net debt table. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | The five filings were read: the latest report (signed 2026-10-30) prints no subsequent-events note and no issue, repayment, acquisition, disposal or dividend after 2026-09-30; its cover shows 154734032 shares outstanding at 2026-10-16 against 154749685 at 2026-09-30, which states no financing event. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 4153.945 | -592.128 | US$m | Fiscal-year duration for every row; EBITDA is reported EBITDA derived as operating income plus depreciation and amortization, not issuer-adjusted or house-adjusted. Negative after 2023 impairments and restructuring. |
| FY2024 / 2024-12-31 | 4458.036 | 152.276 | US$m | Fiscal-year duration for every row; EBITDA is reported EBITDA derived as operating income plus depreciation and amortization, not issuer-adjusted or house-adjusted. |
| FY2025 / 2025-12-31 | 5067.22 | 353.246 | US$m | Fiscal-year duration for every row; EBITDA is reported EBITDA derived as operating income plus depreciation and amortization, not issuer-adjusted or house-adjusted. |

The EBITDA in this chart is the derived reported measure, not an issuer-adjusted figure, and the FY2023 value is negative.
Basis: calculation C05; calculation C06; calculation C07; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| 2029 senior notes | 1 | No | 500 | 0.93 | US$m | Issuer Twilio Inc; no subsidiary guarantee initially; general unsecured obligation equal in right of payment to other unsecured, unsubordinated liabilities. Principal basis over last twelve months derived EBITDA 536.582; carrying-value leverage is 1.85x for both series. |
| 2031 senior notes | 1 | No | 500 | 1.86 | US$m | Issuer Twilio Inc; no subsidiary guarantee initially; same rank as the 2029 notes. Cumulative principal 1000 over the same EBITDA (calculation C44). |

Only the two note series are stated as debt, their ranking is the issuer's own description of the notes, and no secured or subordinated debt is stated.
Basis: 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13; calculation C44

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), opening | Not supplied: the issuer states no adjusted EBITDA, so no bridge can be stated | US$m | The reported measure here is derived by this analysis; the method names an issuer-adjusted EBITDA as the closing measure and the issuer reports none. |
| EBITDA (Adjusted), closing | Not supplied: the issuer states no adjusted EBITDA | US$m | Twilio reports non-GAAP income from operations instead, which is a different measure and is shown in the dashboard; no add-back is manufactured. |

No bridge is stated because the issuer reports no adjusted EBITDA, and its non-GAAP income from operations is a different measure.
Basis: 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 93

### Financial interpretation

Leverage has fallen because earnings recovered while debt stayed flat. Derived EBITDA rose from 152.276 US$m in FY2024 to 353.246 US$m in FY2025 and 536.582 US$m for the last twelve months, while carrying debt moved only from 990.587 to 993.606 US$m, so gross leverage went from 6.51x to 2.81x to 1.85x. The mechanism is operating leverage on a largely fixed cost base after the 2023 restructuring, and it matters to creditors because the improvement came from profit, not from repaying the notes; a profit setback would raise leverage again without any change in debt.
Basis: calculation C28; calculation C31; calculation C34; calculation C13; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–3

Coverage is ample and set by the fixed coupons. Cash interest paid has stayed near 37.578 US$m a year, which matches the scheduled coupons of 37.5 US$m (calculation C45), and EBITDA cover rose from 4.02x in FY2024 to 9.40x and 14.30x on the last twelve months. Because the notes are fixed rate and the investments are short dated, interest cost does not rise if rates rise; the FY2023 cover is negative only because impairments and restructuring charges drove operating income below zero.
Basis: calculation C30; calculation C33; calculation C36; calculation C45; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 43

Cash conversion is strong but flattered by non-cash compensation. Operating cash flow of 1003.244 US$m in FY2025 exceeded derived EBITDA by 649.998 US$m because stock-based compensation of 600.407 US$m is an expense that does not use cash, and free cash flow on the issuer's definition was 945.427 US$m. That cash has gone mainly to share repurchases of 868.939 US$m in FY2025 and 448.296 US$m in nine months 2026, so cash and securities have rebuilt since the end of 2024 while capital allocation, not debt repayment, remains the main use; for creditors the point is that nothing in the stated covenants stops further buybacks.
Basis: calculation C47; calculation C18; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136

Liquidity is the main strength, with limits around commitments. Cash and cash equivalents were 1061.531 US$m and short-term marketable securities 1829.94 US$m at 2026-09-30, against notes that fall due in 2029 and 2031 and no credit facility to draw or to refinance. The weak point is outside the debt: purchase commitments are reported as a single USD 1.3 billion total at 2026-09-30, up from USD 349.241 million at the end of 2025, with no yearly schedule, so the pace at which that cash is called is not established. Operating lease liabilities of 63.394 US$m are outside Total Debt.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2, 15; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 137; calculation C41; calculation C43

The only named non-debt funding float is deferred revenue and customer deposits of 157.046 US$m at 2026-09-30, against 158.677 at 2025-12-31 and 155.68 at 2024-12-31, which is small and flat, so a customer-driven drawdown of that float is not a near-term funding risk. Accrued cost of revenue of 285.224 US$m, up from 226.878 US$m at the year end, behaves like a supplier payable for network and infrastructure costs.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2, 13; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104

In the latest quarter the only financing-type events are share repurchases: USD 127.2 million of stock was bought in the third quarter of 2026 and USD 446.7 million in nine months, leaving USD 698.7 million of the USD 2.0 billion authorisation, which expires at the end of 2027. No debt was issued or repaid, no amendment to the notes is described, no consent decree or settlement is described, and the latest acquisition was the USD 104.1 million cash purchase of Stytch in November 2025; the 43.7% Syniverse stake is an equity-method investment whose own debt is outside Twilio's.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 6, 13, 18, 39; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 131–132

Claims outside debt are small except for purchase commitments. Operating lease liabilities of 63.394 US$m sit outside Total Debt, accrued non-income taxes were 24.0 US$m domestic and 22.0 US$m foreign at 2026-09-30, and unrecognized tax benefits were 280.7 US$m at 2025-12-31, of which only 1.3 US$m would affect the effective tax rate. No pension, retiree medical, factoring, supplier-finance or consent-decree funding obligation is described, and the summary of the notes lists no financial maintenance test, so there is no reported covenant headroom to state.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2, 16; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136, 146; calculation C43

Data quality is good for the statements and weaker for the earnings measure. The balance sheet, cash flow and income statement identities reconcile exactly for every period in the tables, but EBITDA and interest expense are not reported by the issuer, so leverage and cover rest on a derived EBITDA with no add-backs, and the fourth quarter of 2025 exists only by subtraction. The nine-month 2026 net income of 1318.505 US$m includes a tax benefit of 937.077 US$m from releasing the valuation allowance, a non-cash event, so earnings per share and return ratios for 2026 should not be read as cash earnings.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 3, 5–6, 27; calculation C46; calculation C22

The most material gaps are the commitment schedule and the legal terms. Without the indenture, the lien and merger covenants are known only from the issuer's summary, and without a commitment schedule the cash calls on the large 2026 commitments cannot be dated; the leverage picture is otherwise well supported.
Basis: 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136, 137; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 15; Source readiness (CP-0)

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Reported financial statements and leverage and cover metrics | Ready with Limitations | EBITDA is derived, with no add-backs; interest expense is not separately printed; the fourth quarter of 2025 exists only by subtraction | Use the derived EBITDA with its label; keep the issuer's non-GAAP measure separate. |
| Debt and liquidity inputs | Ready with Limitations | No facility or letter of credit is disclosed; purchase commitments are single totals without a schedule | Obtain the yearly commitment schedule before dating cash calls. |
| Legal leverage, covenant capacity and recovery | Not Ready | No executed indenture; the covenants are known only from the annual report summary | Do not infer covenant capacity from these tables. |
| Forward-looking use | Ready with Limitations | No guidance document or forecast assumption is supplied | Treat any projection as analyst assumption. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 41 |
| Calculated | 28 |
| Assumption-Based | 0 |
| Analyst Inference | 6 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 5 |
| Insufficient Information | 6 |
| Fields present | 14 |
| Fields total | 14 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 14 |

## Calculations

| Calc ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C01 | Net debt, FY2023 / 2023-12-31 | Gross debt 988.953 less cash and cash equivalents 655.931, US$m | 333.022 US$m | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115 |
| C02 | Net debt, FY2024 / 2024-12-31 | Gross debt 990.587 less cash and cash equivalents 421.297, US$m | 569.29 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104 |
| C03 | Net debt, FY2025 / 2025-12-31 | Gross debt 992.287 less cash and cash equivalents 682.335, US$m | 309.952 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104 |
| C04 | Net debt, 2026-09-30 | Gross debt 993.606 less cash and cash equivalents 1061.531, US$m | -67.925 US$m | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| C05 | EBITDA (Reported, derived), FY2023 | Income (loss) from operations -876.541 plus depreciation and amortization 284.413, US$m | -592.128 US$m | 10-K_2024-12-31_twlo-20241231.htm.jsonl, pages 115–116 |
| C06 | EBITDA (Reported, derived), FY2024 | Income (loss) from operations -53.708 plus depreciation and amortization 205.984, US$m | 152.276 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104, 106 |
| C07 | EBITDA (Reported, derived), FY2025 | Income (loss) from operations 157.802 plus depreciation and amortization 195.444, US$m | 353.246 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104, 106 |
| C08 | EBITDA (Reported, derived), 9M 2025 | Income (loss) from operations 101.019 plus depreciation and amortization 147.901, US$m | 248.92 US$m | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 3, 5 |
| C09 | EBITDA (Reported, derived), 9M 2026 | Income (loss) from operations 340.842 plus depreciation and amortization 91.414, US$m | 432.256 US$m | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 3, 5 |
| C10 | Revenue, last twelve months to 2026-09-30 | FY2025 5067.22 plus 9M 2026 4465.532 less 9M 2025 3701.29, US$m | 5831.462 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| C11 | Income from operations, last twelve months to 2026-09-30 | FY2025 157.802 plus 9M 2026 340.842 less 9M 2025 101.019, US$m | 397.625 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| C12 | Depreciation and amortization, last twelve months to 2026-09-30 | FY2025 195.444 plus 9M 2026 91.414 less 9M 2025 147.901, US$m | 138.957 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 5 |
| C13 | EBITDA (Reported, derived), last twelve months to 2026-09-30 | FY2025 353.246 plus 9M 2026 432.256 less 9M 2025 248.92, US$m; cross-check: LTM income from operations 397.625 plus LTM depreciation and amortization 138.957 | 536.582 US$m | calculation C07; calculation C08; calculation C09 |
| C14 | Cash interest paid, last twelve months to 2026-09-30 | FY2025 37.578 plus 9M 2026 37.516 less 9M 2025 37.571, US$m | 37.523 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 6 |
| C15 | Net cash from operating activities, last twelve months to 2026-09-30 | FY2025 1003.244 plus 9M 2026 914.755 less 9M 2025 731.689, US$m | 1186.31 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 6 |
| C16 | Free cash flow (issuer definition), FY2023 | Net cash from operating activities 414.752 less capitalized software development costs 39.925 less purchases of long-lived and intangible assets 11.31, US$m | 363.517 US$m | 10-K_2024-12-31_twlo-20241231.htm.jsonl, pages 118–119 |
| C17 | Free cash flow (issuer definition), FY2024 | Net cash from operating activities 716.241 less capitalized software development costs 51.808 less purchases of long-lived and intangible assets 6.978, US$m | 657.455 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–107 |
| C18 | Free cash flow (issuer definition), FY2025 | Net cash from operating activities 1003.244 less capitalized software development costs 51.969 less purchases of long-lived and intangible assets 5.848, US$m | 945.427 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 106–107 |
| C19 | Free cash flow (issuer definition), 9M 2025 | Net cash from operating activities 731.689 less capitalized software development costs 37.964 less purchases of long-lived and intangible assets 4.402, US$m | 689.323 US$m | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| C20 | Free cash flow (issuer definition), 9M 2026 | Net cash from operating activities 914.755 less capitalized software development costs 47.968 less purchases of long-lived and intangible assets 12.168, US$m | 854.619 US$m | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| C21 | Free cash flow, last twelve months to 2026-09-30 | FY2025 945.427 plus 9M 2026 854.619 less 9M 2025 689.323, US$m | 1110.723 US$m | calculation C18; calculation C19; calculation C20 |
| C22 | Q4 2025 by subtraction (not reported separately) | Revenue 5067.22 less 3701.29 = 1365.93; income from operations 157.802 less 101.019 = 56.783; depreciation and amortization 195.444 less 147.901 = 47.543; EBITDA 104.326, US$m | Revenue 1365.93; EBITDA 104.326 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104, 106; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 3, 5 |
| C23 | Reconciling items between principal and carrying value, 2026-09-30 | Unamortized discount and issuance costs: 2029 notes 2.124 + 0.478; 2031 notes 3.095 + 0.697, US$m; principal 1000 less 6.394 | -6.394 US$m reconciling items; carrying value 993.606 US$m | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13 |
| C24 | Net carrying amount of the two note series, 2026-09-30 | 2029 notes 497.398 plus 2031 notes 496.208, US$m | 993.606 US$m, equal to long-term debt, net | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2, 13 |
| C25 | Total debt / EBITDA, FY2023 | Gross debt 988.953 / EBITDA -592.128, US$m | Not calculable: EBITDA is negative | calculation C05 |
| C26 | Net debt / EBITDA, FY2023 | Net debt 333.022 / EBITDA -592.128, US$m | Not calculable: EBITDA is negative | calculation C05; calculation C01 |
| C27 | EBITDA / cash interest, FY2023 | EBITDA -592.128 / cash interest paid 38.389, US$m | -15.42x | calculation C05; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 107 |
| C28 | Total debt / EBITDA, FY2024 | Gross debt 990.587 / EBITDA 152.276, US$m | 6.51x | calculation C06 |
| C29 | Net debt / EBITDA, FY2024 | Net debt 569.29 / EBITDA 152.276, US$m | 3.74x | calculation C06; calculation C02 |
| C30 | EBITDA / cash interest, FY2024 | EBITDA 152.276 / cash interest paid 37.904, US$m | 4.02x | calculation C06; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 107 |
| C31 | Total debt / EBITDA, FY2025 | Gross debt 992.287 / EBITDA 353.246, US$m | 2.81x | calculation C07 |
| C32 | Net debt / EBITDA, FY2025 | Net debt 309.952 / EBITDA 353.246, US$m | 0.88x | calculation C07; calculation C03 |
| C33 | EBITDA / cash interest, FY2025 | EBITDA 353.246 / cash interest paid 37.578, US$m | 9.40x | calculation C07; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 107 |
| C34 | Total debt / EBITDA, LTM to 2026-09-30 | Gross debt 993.606 / EBITDA 536.582, US$m | 1.85x | calculation C13 |
| C35 | Net debt / EBITDA, LTM to 2026-09-30 | Net debt -67.925 / EBITDA 536.582, US$m | -0.13x | calculation C13; calculation C04 |
| C36 | EBITDA / cash interest, LTM to 2026-09-30 | EBITDA 536.582 / cash interest paid 37.523, US$m | 14.30x | calculation C13; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 6 |
| C37 | EBITDA margin, FY2023 | EBITDA -592.128 / revenue 4153.945, US$m | -14.25% | calculation C05; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104 |
| C38 | EBITDA margin, FY2024 | EBITDA 152.276 / revenue 4458.036, US$m | 3.42% | calculation C06; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104 |
| C39 | EBITDA margin, FY2025 | EBITDA 353.246 / revenue 5067.22, US$m | 6.97% | calculation C07; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104 |
| C40 | EBITDA margin, last twelve months to 2026-09-30 | EBITDA 536.582 / revenue 5831.462, US$m | 9.20% | calculation C13; calculation C10 |
| C41 | Cash and cash equivalents plus short-term marketable securities, four dates | FY2023: 655.931 + 3356.064 = 4011.995; FY2024: 421.297 + 1963.102 = 2384.399; FY2025: 682.335 + 1788.007 = 2470.342; 2026-09-30: 1061.531 + 1829.94 = 2891.471, US$m | 4011.995; 2384.399; 2470.342; 2891.471 US$m | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 115; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| C42 | Gross debt less cash and short-term marketable securities, 2026-09-30 | 993.606 less 2891.471, US$m | -1897.865 US$m | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| C43 | Operating lease liabilities, 2026-09-30 | Current 26.583 plus noncurrent 36.811, US$m | 63.394 US$m, outside gross debt | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| C44 | Cumulative leverage in the debt stack, principal basis | 2029 notes 500 / LTM EBITDA 536.582 = 0.93; 2029 and 2031 notes 1000 / 536.582 = 1.86, US$m | 0.93x and 1.86x | calculation C13 |
| C45 | Scheduled annual cash coupon on the notes | 500 x 3.625% = 18.125; 500 x 3.875% = 19.375, US$m | 37.5 US$m a year | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 135 |
| C46 | Deferred tax asset movement in nine months 2026 | Deferred tax asset 2026-09-30 1059.49 less 2025-12-31 20.026 = 1039.464; tax benefit from the valuation allowance release 937.077; deferred tax asset line in operating cash flow 82.243, US$m | 1039.464 US$m balance-sheet movement against 937.077 US$m benefit | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2, 5–6 |
| C47 | Operating cash flow less derived EBITDA, FY2025 | Operating cash flow 1003.244 less EBITDA 353.246, US$m | 649.998 US$m; stock-based compensation expense 600.407 US$m | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104, 106–107 |

## Gaps

- Interest expense and interest income are not printed separately in any of the five filings because both sit within other income, net, for every period; this restricts interest coverage to cash interest paid and prevents a split of net interest, severity Low, and the action that would close it is a note or earnings release that splits other income.
- EBITDA and adjusted EBITDA are not reported by the issuer for any period, so the reported EBITDA row is derived from operating income plus depreciation and amortization and the adjusted EBITDA row and bridge are not stated, severity Medium, and the action is an issuer earnings release or management bridge.
- Reported EBITDA is negative for FY2023 after large impairment and restructuring charges, so leverage for FY2023 is not calculable and the cover figure is negative, severity Low, and no action is needed beyond reading the 2023 figure as an outlier.
- The fourth quarter of 2025 is not reported separately, so revenue, operating income and EBITDA for that quarter exist only as the FY2025 figure less the nine-month 2025 comparative, severity Low, and the action is the issuer's fourth-quarter release.
- The nine-month non-GAAP reconciliation is not printed in the third-quarter report, which gives three months only, so nine-month add-backs are not stated beyond the cash flow lines, severity Low, and the action is to assemble them from the three quarterly reports.
- Several line items are not printed in some periods: restructuring and long-lived asset impairment lines do not appear in the nine-month income statements, the prepaid asset impairment appears only in 2026, and some investing, financing and non-cash lines appear in the annual statements only; these cells are marked as not supplied and nothing is set to zero, severity Low, and no action is needed.
- Source dashes were left as missing, not zero, for lines such as the foreign exchange effect on cash in FY2024 and FY2025, the FY2024 long-lived asset impairment, the equity-method impairment in FY2023 and FY2024 and acquisitions or divestitures in some years, severity Low, and the action is none because the filings print no amount.
- The deferred tax asset is not a separate balance-sheet line in the annual report or the first-quarter report; the later reports show 20026 thousand at 2025-12-31 inside the 242674 thousand shown in the annual report, so the FY2023, FY2024 and FY2025 deferred tax asset cells are not supplied, severity Low, and the action is none beyond the stated reclassification.
- Net debt on cash and equivalents alone understates liquidity because short-term marketable securities are a large part of the liquid assets, so the wider figure is stated beside it, severity Low, and no action is needed.
- Purchase commitments are single totals in each quarterly report with no yearly schedule and a large unexplained step up between the first and second quarters of 2026, so claims outside debt for 2026 cannot be scheduled, severity Medium, and the action is the commitment schedule and counterparty from the issuer.
- No committed credit facility, letter of credit or other undrawn facility is disclosed in any filing, so undrawn committed facilities are not supplied in the liquidity table; this is a finding from a search of all five filings, not a missing document, severity Low, and no action is needed.
- The indenture and first supplemental indenture are not supplied, so covenant definitions, baskets and guarantee triggers are known only from the annual report summary, which restricts any covenant or priority conclusion, severity Medium, and the action is to supply the executed documents.
- Segment revenue exists only for FY2023 and FY2024 under the earlier two-segment presentation and the issuer reports one segment from the third quarter of 2025, so segment trends cannot be extended, severity Low, and the action is none.
- FY2024 and FY2023 product revenue groups differ between the FY2024 and FY2025 annual reports because of a reclassification, so only the FY2025 report's presentation is used for those years, severity Low, and the action is none.
- Active Customer Accounts was discontinued from the first quarter of 2026, so the customer-count series ends at 402000 at 2025-12-31, severity Low, and the action is to ask the issuer for the figure if it is needed.
- Nothing dated after the third-quarter report of 2026-10-30 is supplied up to the cutoff of 2026-11-18, so events in that window are not established, severity Low, and the action is any current report filed after that date.
- Cash paid for interest in the nine-month 2026 statement is the only interest figure for that period, so last-twelve-months cash interest is built from three cash flow statements and is calculated, severity Low, and no action is needed.

## Next module

The orchestrator selects the next module.
