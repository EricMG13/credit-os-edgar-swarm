---
module_id: CP-1
issuer_id: gva-861459
analysis_date: 2026-11-18
issuer_name: Granite Construction Inc
pathway: credit_snapshot
run_id: gva-861459-2026-11-18-credit_snapshot-host
---

## Request

Financial foundation for Granite Construction Inc (gva-861459), as of 2026-11-18, on the credit snapshot pathway. Scope: statements, debt, liquidity and credit metrics from the five supplied SEC filings, covering FY2024 and FY2025 and the first three quarters of 2026, with EBITDA calculated because the issuer reports none.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_gva-20241231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-13 (date signed) | 534d52cef6d622c0952233f2e7a6edae57d524686ee9a438797f58b6d478f4ba | FY2024 comparatives checked against the later annual report; FY2024 debt and revolver availability. |
| 10-K_2025-12-31_gva-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-12 (date signed) | acfffbeb192fc1b8147c7479344ae15f2da7d84de95eb39ab0cc17fb958cc0ae | FY2024 and FY2025 statements, debt and credit agreement, leases, customers and segments. |
| 10-Q_2026-03-31_gva-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-30 (date signed) | 0c05b0b0190bc3b6f38a5779e638e3dd5c08fa7c17ac2486d0329afc8e9b6d29 | First-quarter 2026 stubs, the 2026-03-31 balance sheet and the February 2026 note exchange. |
| 10-Q_2026-06-30_gva-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-30 (date signed) | 0c4ffa4311c6b4ce5353c077c09151ea4f3382ee977879135f25202837e9621b | Six-month 2026 stubs, the 2026-06-30 balance sheet and the senior notes issue. |
| 10-Q_2026-09-30_gva-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-29 (date signed) | ea9d11b31cea8dbbe5a21ee2ce19abee7e7258c96aeb4305b4293ecccee9442f | Third-quarter and nine-month 2026 statements, the latest balance sheet, debt, liquidity and segments. |
| Source readiness (CP-0) | Earlier module output: source readiness for the five filings | 2026-11-18 (run as-of date) | 4984bf0b3e2833322bd90491e7dd6aaff9adca599980350a5311ca5b032ecaa4 | Source authority, period coverage and the limitations on covenant levels, ratings and legal documents. |

## Findings

### Bottom line

Granite's leverage is moderate at 2.67x total debt and 1.84x net debt to last-twelve-month EBITDA, but total debt has more than doubled since 2024 and cash interest cover has fallen to 8.57x before the new senior notes' coupons begin.
Basis: 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6, 24–31; 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; calculation calc-15; calculation calc-21

Granite reports no EBITDA, so every multiple uses operating income plus depreciation, depletion and amortization calculated here, and the non-cash charges from settling the 3.75% convertible notes, which produced a nine-month net loss, sit below operating income and are excluded.
Basis: 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 5, 28–30; calculation calc-09

Liquidity is USD 1,069.09 million of cash and undrawn revolver, against USD 381.69 million of debt classified as current, almost all of it the 3.25% convertible notes whose principal holders may require in cash. The credit agreement's covenant levels are not supplied, so headroom is not established.
Basis: 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2, 26, 30–32, 44–46; calculation calc-19; calculation calc-20

### Evidence, risk and credit analysis

Leverage rose with the acquisition programme and the 2026 refinancing, but earnings grew with it. Debt at carrying value went from USD 739.048 million at the end of 2024 to USD 1,339.129 million at the end of 2025 and USD 1,556.025 million at 2026-09-30, while EBITDA went from USD 333.694 million in FY2024 to USD 444.879 million in FY2025 and USD 583.582 million over the last twelve months, so total debt to EBITDA moved from 2.21x to 3.01x and back to 2.67x. The 2025 step-up came with USD 777.517 million of acquisitions, financed by a USD 600.000 million term loan and cash; 2026 added USD 600.000 million of senior notes due 2034, whose proceeds and cash on hand retired the 3.75% convertible notes with payments of USD 289.7 million in March and USD 714.9 million in August, less capped call proceeds of USD 203.773 million. Net debt therefore rose from USD 160.718 million to USD 1,075.736 million, and net leverage rose from 0.48x to 1.84x, with the 2026-06-30 peak in cash of USD 877.121 million showing how much of the senior notes cash was held before the August settlement.
Basis: 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96, 139–140; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6, 24–30; calculation calc-01; calculation calc-05; calculation calc-24

Cash interest cover has fallen and will fall further. Cash interest paid over the last twelve months was USD 68.104 million, covered 8.57x by EBITDA against 12.32x for FY2025, but the USD 600.000 million senior notes carry a coupon that adds USD 38.250 million a year with the first payment due on 2026-12-15, the 3.25% convertible notes add their coupon, and the term loan floats over SOFR with USD 350 million swapped to a fixed 3.218% plus margin. No pro forma interest is stated in the filings, so none is calculated; cover on a forward basis is therefore not established. Reported interest expense of USD 329.421 million for nine months is not a cover measure, because USD 273.747 million of it is non-cash discount amortization.
Basis: 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 6, 25, 30–32; 10-K_2025-12-31_gva-20251231.htm.jsonl, page 79; calculation calc-22

Cash-flow quality is good on the face of it but depends on working capital. Operating cash flow was USD 404.270 million for nine months 2026 against USD 89.879 million of capital expenditure, leaving free cash flow of USD 314.391 million, 68.38% of EBITDA. Receivables absorbed USD 325.647 million, offset by USD 192.881 million more payables and a rise in contract liabilities from USD 327.372 million to USD 464.996 million; those billings in excess of revenue are a non-interest-bearing float that would reverse if new awards slowed. The partner share of joint venture cash and the non-controlling distributions also leave the group, so the conversion figure overstates cash available to creditors.
Basis: 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2, 5–6; calculation calc-26

Liquidity covers the near-term claims, with one equity-linked exception. Cash and equivalents were USD 480.289 million, of which USD 149.707 million sits in consolidated joint ventures and is generally not available until distributed, plus USD 588.800 million undrawn on the revolver after USD 11.200 million of letters of credit. Current maturities of USD 381.686 million are almost all the 3.25% convertible notes, which are current because holders may convert through 2026-12-31 while the stock trades above 130% of the USD 77.88 conversion price; principal must be settled in cash on conversion and any premium in cash or shares at the issuer's election. The filing expects no early conversion because the notes trade above conversion value, which is the contrary evidence; it would be overturned if that trading premium disappeared, for example on a fundamental change that let holders put the notes at par or convert with a make-whole adjustment. Surety capacity is a further call on liquidity, with USD 4.2 billion of the USD 7.5 billion backlog bonded.
Basis: 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2, 26, 30–31, 44–48; calculation calc-19

Data and definition risks bound these conclusions. EBITDA is calculated and the credit agreement's own Consolidated EBITDA is not supplied; covenant levels are not printed, so compliance, which the issuer states, cannot be tested. The maturity ladder derives term loan installments from stated percentages. The convertible notes' security is not stated. Lines printed as dashes are shown as not supplied rather than zero. Net debt nets all cash, including joint venture cash; excluding it, net leverage would be 2.10x, and netting marketable securities instead would give 1.77x.
Basis: 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3, 30–32, 44–46; calculation calc-25

No event after 2026-09-30 that changes net debt is stated, so no pro forma figure is given. The first-quarter report's subsequent events, the April 2026 acquisition of Kenny Seng Construction for USD 164.1 million and a USD 170.0 million revolver draw, are already in the 2026 interim balance sheets or were repaid in the second quarter. Scheduled calls on cash after the balance sheet date are the first senior notes coupon on 2026-12-15 and the first term loan installment in the quarter ending 2026-12-31, neither of which is an event with a stated net debt effect.
Basis: 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 6, 35; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 25, 31

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_gva-20241231.htm.jsonl | Annual report on Form 10-K | FY2022 to FY2024 statements of operations and cash flows; balance sheets 2024-12-31 and 2023-12-31 | USD | Thousands | Granite Construction Incorporated, consolidated, including consolidated construction joint ventures | US GAAP | Tier 1 (audited) | FY2024 comparatives cross-checked to the later annual report; FY2024 debt and revolver terms | Superseded by the FY2025 annual report for FY2024 figures |
| 10-K_2025-12-31_gva-20251231.htm.jsonl | Annual report on Form 10-K | FY2023 to FY2025 statements of operations and cash flows; balance sheets 2025-12-31 and 2024-12-31 | USD | Thousands | Granite Construction Incorporated, consolidated, including consolidated construction joint ventures | US GAAP | Tier 1 (audited) | FY2024 and FY2025 statements, debt, leases, segments, customers, risk factors | No adjusted EBITDA; Part III in a proxy statement not supplied |
| 10-Q_2026-03-31_gva-20260331.htm.jsonl | Quarterly report on Form 10-Q | Quarter ended 2026-03-31; balance sheet 2026-03-31 | USD | Thousands | Granite Construction Incorporated, consolidated, including consolidated construction joint ventures | US GAAP | Tier 2b (unaudited, no auditor review stated) | Q1 2026 stubs for last-twelve-month construction; 2026-03-31 balance sheet; February 2026 note exchange | Unaudited |
| 10-Q_2026-06-30_gva-20260630.htm.jsonl | Quarterly report on Form 10-Q | Quarter and six months ended 2026-06-30; balance sheet 2026-06-30 | USD | Thousands | Granite Construction Incorporated, consolidated, including consolidated construction joint ventures | US GAAP | Tier 2b (unaudited, no auditor review stated) | H1 2026 stubs; 2026-06-30 balance sheet; senior notes issue and conversion derivative | Unaudited |
| 10-Q_2026-09-30_gva-20260930.htm.jsonl | Quarterly report on Form 10-Q | Quarter and nine months ended 2026-09-30; balance sheet 2026-09-30 | USD | Thousands | Granite Construction Incorporated, consolidated, including consolidated construction joint ventures | US GAAP | Tier 2b (unaudited, no auditor review stated) | Latest balance sheet, nine-month statements, debt, liquidity, segments, backlog | Unaudited; covenant levels not printed |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Granite Construction Incorporated | Issuer of the 6.375% Senior Notes and 3.25% Convertible Notes; borrower and guarantor under the Credit Agreement; listed holding company | 31 December | USD | Thousands | Consolidated, including consolidated construction joint ventures (variable interest entities) with non-controlling interests | US GAAP | FY2023 to FY2025; Q1, H1 and 9M 2026 with 2025 comparatives |
| Granite Construction Company | Operating subsidiary; borrower under the Credit Agreement | 31 December | USD | Not supplied: no standalone statements | Within the consolidated group | US GAAP | Not supplied: no standalone statements |
| GILC Incorporated | Subsidiary; borrower under the Credit Agreement | 31 December | USD | Not supplied: no standalone statements | Within the consolidated group | US GAAP | Not supplied: no standalone statements |
| Domestic subsidiaries that are borrowers or guarantors under the Credit Agreement | Guarantors of the 6.375% Senior Notes; individual names and the guarantor perimeter not supplied | 31 December | USD | Not supplied: no standalone statements | Within the consolidated group; restricted group not defined in the filings | US GAAP | Not supplied: no guarantor financial information |
| Consolidated construction joint ventures | Variable interest entities consolidated at 100%; partners' share shown as non-controlling interests; cash generally unavailable to Granite until distributed | 31 December | USD | Thousands | Consolidated | US GAAP | FY2023 to FY2025; Q1, H1 and 9M 2026 with 2025 comparatives |
| Unconsolidated construction joint ventures and affiliates | Equity-method investments; Granite's share of cash USD 28.0 million at 2026-09-30; local bank debt of foreign affiliates is non-recourse to Granite | 31 December | USD | Thousands | Equity method | US GAAP | FY2023 to FY2025; Q1, H1 and 9M 2026 with 2025 comparatives |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Presentation scale: statements printed in thousands restated to millions in the money tables | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6 | Unit conversion | Total debt 1,556,025 (USD thousands) | Total debt 1,556.025 (US$m) | The money unit is millions; all figures kept exact to three decimals | All periods |
| EBITDA built from components | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 5 | Derivation | No EBITDA stated | 9M 2026 EBITDA 459,783 (USD thousands) | Operating income 320,013 plus depreciation, depletion and amortization 139,770; equity income, interest income and other income excluded | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| Quarterly depreciation, depletion and amortization derived by difference | 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 5; 10-Q_2026-06-30_gva-20260630.htm.jsonl, page 5 | Derivation | Nine months 139,770; six months 89,048 (USD thousands) | Q3 2026 50,722; Q3 2025 48,247 (USD thousands) | Nine months less six months from the cash flow statements, which are year to date | Q3 2025, Q3 2026 |
| Total liabilities derived | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 | Derivation | No total printed | 9M 2026 3,471,700 (USD thousands) | Total current liabilities plus long-term debt, lease, deferred tax and other long-term liabilities; ties to total assets less total equity | All balance sheet dates |
| Last-twelve-month figures built | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, 10-Q_2026-06-30_gva-20260630.htm.jsonl, 10-Q_2026-09-30_gva-20260930.htm.jsonl | Derivation | FY2025 revenue 4,424,379 (USD thousands) | LTM to 2026-09-30 revenue 5,300,038 (USD thousands) | Full year plus current stub less prior-year stub; see the constructed period register | 2026-03-31, 2026-06-30, 2026-09-30 |
| Maturity ladder built from stated amortization percentages | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 30–31 | Derivation (Analyst Judgement) | Term loan amortization stated as 2.5% then 5.0% a year | Installments of 3.750 then 7.500 million a quarter | Percentages applied to the USD 600.000 million initial term loan principal; the filings print no dollar installments, so a different base would move the ladder | FY2026 to FY2030 |
| Non-cash convertible note charges shown against a normalised pre-tax result (Analyst Judgement) | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 28–30 | Normalisation | 9M 2026 loss before income taxes (220,687) (USD thousands) | Excluding loss on convertible debt transactions 260,852 and discount amortization 273,747: 313,912 | Shows the result without the non-cash charges from settling the 3.75% convertible notes; not tax-effected because the items are largely non-deductible; not used in EBITDA, which already sits above them | 9M 2026 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | 4,007,574 | 4,424,379 | 3,259,009 | 4,134,668 | 1,433,498 | 1,766,331 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Cost of revenue | 3,434,877 | 3,713,163 | 2,715,513 | 3,450,232 | 1,172,950 | 1,430,571 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Gross profit | 572,697 | 711,216 | 543,496 | 684,436 | 260,548 | 335,760 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Selling, general and administrative expenses | 334,162 | 407,561 | 303,443 | 352,868 | 101,645 | 104,124 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Other costs, net | 39,936 | 41,416 | 38,698 | 15,441 | 16,019 | 6,998 | USD thousands | Reported; acquisition, integration and legal costs | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| (Gain) loss on sales of property and equipment, net | -8,764 | -20,207 | -6,110 | -3,886 | -767 | 300 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Operating income | 207,363 | 282,446 | 207,465 | 320,013 | 143,651 | 224,338 | USD thousands | Reported; used as EBIT | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Depreciation, depletion and amortization | 126,331 | 162,433 | 113,615 | 139,770 | 48,247 | 50,722 | USD thousands | Reported in the cash flow statements; Q3 columns calculated as nine months less six months | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 95; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 5; 10-Q_2026-06-30_gva-20260630.htm.jsonl, page 5 |
| EBITDA (Reported) | 333,694 | 444,879 | 321,080 | 459,783 | 191,898 | 275,060 | USD thousands | Calculated: operating income plus depreciation, depletion and amortization; the issuer states no EBITDA and no adjusted EBITDA; excludes equity income of affiliates, interest income and other income; Q3 columns use the derived quarterly depreciation | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 5; 10-Q_2026-06-30_gva-20260630.htm.jsonl, page 5 |
| Exceptionals: loss on debt extinguishment (FY2024) and (gain) loss on convertible debt transactions, net (2026) | 27,552 | Not supplied: the line prints a dash in the source | Not supplied: the line prints a dash in the source | 260,852 | Not supplied: the line prints a dash in the source | -108,571 | USD thousands | Reported; non-operating, below operating income | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Interest income | -24,349 | -26,878 | -18,015 | -17,464 | -5,986 | -6,468 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Interest expense | 29,188 | 47,223 | 29,051 | 329,421 | 13,367 | 291,328 | USD thousands | Reported; includes non-cash amortization of convertible debt discount of 273,747 in 9M 2026 and about 270,200 in Q3 2026 (cash interest is in the cash flow table) | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Equity in income of affiliates, net | -16,982 | -14,958 | -9,738 | -13,756 | -4,946 | -4,586 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Other (income) expense, net | -4,238 | -11,768 | -8,834 | -18,353 | -6,309 | -14,522 | USD thousands | Reported; Q3 2026 and 9M 2026 include a gain of about 13,500 on remeasuring a previously held equity investment | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Total other (income) expense, net | 11,171 | -6,381 | -7,536 | 540,700 | -3,874 | 157,181 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Income (loss) before income taxes | 196,192 | 288,827 | 215,001 | -220,687 | 147,525 | 67,157 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Provision for income taxes | 55,749 | 68,476 | 53,586 | 76,895 | 38,128 | 56,766 | USD thousands | Reported; Q3 2026 effective rate 84.5% on non-deductible convertible items | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Net income (loss) | 140,443 | 220,351 | 161,415 | -297,582 | 109,397 | 10,391 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Amount attributable to non-controlling interests | -14,097 | -27,348 | -20,442 | -19,069 | -6,468 | -7,181 | USD thousands | Reported; consolidated construction joint ventures | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| Net income (loss) attributable to Granite Construction Incorporated | 126,346 | 193,003 | 140,973 | -316,651 | 102,929 | 3,210 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | 140,443 | 220,351 | 161,415 | -297,582 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Depreciation, depletion and amortization | 126,331 | 162,433 | 113,615 | 139,770 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Stock-based compensation | 19,595 | 39,150 | 36,845 | 46,565 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Non-cash debt extinguishment and convertible note items | 27,552 | Not supplied: the line prints a dash in the source | Not supplied: the line prints a dash in the source | 531,606 | USD thousands | FY2024: non-cash loss on debt extinguishment; 9M 2026: calculated as discount amortization 273,747, derivative remeasurement loss 254,959 and inducement expense 2,900 | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Operating cash flow before working capital changes | 315,391 | 408,400 | 294,206 | 380,801 | USD thousands | Calculated: net cash from operating activities less the working capital and joint venture lines; includes other non-cash lines as printed | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Working capital and joint venture changes, net | 140,952 | 60,516 | -4,594 | 23,469 | USD thousands | Calculated: receivables, contract assets, inventories, joint venture contributions and distributions, other assets, accounts payable and accruals as printed | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Operating Activities | 456,343 | 468,916 | 289,612 | 404,270 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Purchases of property and equipment (capital expenditure) | -136,405 | -138,270 | -87,730 | -89,879 | USD thousands | Reported; maintenance and growth split not supplied | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Proceeds from sales of property and equipment | 13,852 | 32,845 | 10,921 | 16,576 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Acquisitions of businesses, net of cash acquired | -134,361 | -777,517 | -705,278 | -184,314 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Marketable securities, net (maturities less purchases) | 27,023 | -113,146 | -167,956 | 75,795 | USD thousands | Calculated from the two printed lines | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Other investing, including collection of a note receivable | 1,335 | 2,367 | 2,250 | 25,965 | USD thousands | Calculated: other investing activities and, in 9M 2026, collection of note receivable 24,960 | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Investing Activities | -228,556 | -993,721 | -947,793 | -155,857 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Proceeds from long-term debt and convertible notes | 373,750 | 685,000 | 610,000 | 770,000 | USD thousands | Reported; FY2024 is convertible notes, FY2025 and the 2025 interim figures are the term loan, a delayed draw term loan and other borrowings, 9M 2026 is senior notes and a revolver draw | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Debt repayments | -310,498 | -86,113 | -10,831 | -1,177,899 | USD thousands | Reported; 9M 2026 includes cash paid to exchange and settle the 3.75% convertible notes | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Cash dividends paid | -22,813 | -22,719 | -17,030 | -17,031 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Repurchases of common stock | -50,631 | -48,208 | -21,600 | -55,772 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Other financing items, net | -56,928 | -52,265 | -38,884 | 183,358 | USD thousands | Calculated: capped call purchase or unwind proceeds, warrants, issuance costs, non-controlling partner contributions and distributions, other | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Financing Activities | -67,120 | 475,695 | 521,655 | -297,344 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Net Cash Change | 160,667 | -49,110 | -136,526 | -48,931 | USD thousands | Reported; no foreign exchange effect line is printed | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Opening Cash | 417,663 | 578,330 | 578,330 | 529,220 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Closing Cash | 578,330 | 529,220 | 441,804 | 480,289 | USD thousands | Reported; includes cash of consolidated construction joint ventures | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Cash Interest Paid | 26,072 | 36,113 | 13,416 | 45,407 | USD thousands | Reported in the supplementary cash flow information; the interest line is within operating activities | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |
| Income taxes paid, net of refunds | 30,465 | 49,044 | 25,922 | 32,541 | USD thousands | Reported; 9M 2025 revised for a new accounting standard | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 578,330 | 529,220 | 265,714 | 877,121 | 480,289 | USD thousands | Reported; includes cash of consolidated construction joint ventures (USD 149,707 thousand at 2026-09-30) | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Short-term marketable securities | 7,311 | 71,021 | 49,191 | 36,852 | 32,084 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Receivables, net | 511,742 | 630,392 | 636,513 | 886,793 | 953,454 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Contract assets | 328,353 | 236,879 | 283,979 | 283,191 | 297,270 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Inventories | 108,175 | 143,129 | 168,789 | 182,116 | 181,200 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Equity in unconsolidated construction joint ventures | 140,928 | 134,670 | 126,857 | 131,096 | 122,898 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Other current assets | 41,824 | 66,920 | 73,663 | 52,979 | 55,521 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Total current assets | 1,716,663 | 1,812,231 | 1,604,706 | 2,450,148 | 2,122,716 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Property and equipment, net | 716,184 | 1,260,823 | 1,242,501 | 1,304,105 | 1,331,606 | USD thousands | Reported; FY2025 step-up from the 2025 acquisitions | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Long-term marketable securities | Not supplied: the line prints a dash in the source | 49,534 | 32,616 | 17,550 | 13,018 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Investments in affiliates | 94,031 | 96,764 | 97,985 | 102,424 | 86,390 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Goodwill | 214,465 | 400,814 | 400,536 | 445,984 | 448,395 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Intangible assets, net | 127,886 | 179,548 | 174,496 | 211,812 | 202,822 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Right of use assets | 89,791 | 152,678 | 149,438 | 167,074 | 184,614 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Other noncurrent assets | 66,635 | 78,001 | 77,361 | 79,779 | 78,838 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Total Assets | 3,025,655 | 4,030,393 | 3,779,639 | 4,778,876 | 4,468,399 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Current maturities of long-term debt | 1,109 | 375,896 | 379,794 | 381,008 | 381,686 | USD thousands | Reported; from FY2025 includes the 3.25% convertible notes classified as current | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Accounts payable | 407,223 | 430,298 | 430,306 | 607,814 | 639,564 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Contract liabilities | 299,671 | 327,372 | 356,860 | 440,364 | 464,996 | USD thousands | Reported; billings in excess of revenue, a non-interest-bearing funding float | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Embedded conversion option derivative liability | Not supplied: not a line of this balance sheet | Not supplied: not a line of this balance sheet | Not supplied: not a line of this balance sheet | 630,473 | Not supplied: not a line of this balance sheet | USD thousands | Reported only on the 2026-06-30 balance sheet; a cash-settled conversion obligation on the 3.75% convertible notes | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Accrued expenses and other current liabilities | 323,956 | 348,179 | 311,882 | 359,219 | 419,607 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Total current liabilities | 1,031,959 | 1,481,745 | 1,478,842 | 2,418,878 | 1,905,853 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Long-term debt | 737,939 | 963,233 | 861,187 | 1,177,644 | 1,174,339 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Long-term lease liabilities | 73,638 | 125,733 | 122,753 | 137,747 | 150,641 | USD thousands | Reported; separate balance sheet line, not added to Total Debt | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Deferred income taxes, net | 13,874 | 141,489 | 143,458 | 143,955 | 147,385 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Other long-term liabilities | 88,882 | 96,660 | 92,359 | 95,316 | 93,482 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Total Liabilities | 1,946,292 | 2,808,860 | 2,698,599 | 3,973,540 | 3,471,700 | USD thousands | Calculated: total current liabilities plus the four long-term lines; the balance sheet prints no total | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Granite Construction Incorporated shareholders' equity | 1,015,226 | 1,179,048 | 1,032,121 | 752,748 | 945,992 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Non-controlling interests | 64,137 | 42,485 | 48,919 | 52,588 | 50,707 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Total Equity | 1,079,363 | 1,221,533 | 1,081,040 | 805,336 | 996,699 | USD thousands | Reported | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |
| Total Debt | 739,048 | 1,339,129 | 1,240,981 | 1,558,652 | 1,556,025 | USD thousands | Calculated: current maturities plus long-term debt, carrying value net of issuance costs and discounts; excludes lease liabilities and the conversion derivative liability | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 6.375% Senior Notes due 2034 | Senior notes | Not supplied: carrying value by instrument is not stated; only the aggregate issuance costs are | 600,000 | 600,000 | Not applicable | Unsecured (described as senior unsecured notes; guaranteed by domestic subsidiaries that are borrowers or guarantors under the Credit Agreement) | Senior unsecured | USD | 600,000 | Not applicable | 6.375% fixed | Fixed | Not applicable | Not applicable | Not applicable | 2034-06-15 | 0 | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 24–25; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 21 |
| 3.25% Convertible Senior Notes due 2030 | Convertible notes, principal settled in cash on conversion | Not supplied: carrying value by instrument is not stated; only the aggregate issuance costs are | 373,750 | 373,750 | Not applicable | Not supplied: the filings do not state whether the notes are secured | Senior (called convertible senior notes); relative rank not stated | USD | 373,750 | Not applicable | 3.25% fixed | Fixed | Not applicable | Not applicable | Not applicable | 2030-06-15 | 0 | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 26–27 |
| Credit Agreement - Initial Term Loan | Senior secured term loan | Not supplied: carrying value by instrument is not stated; only the aggregate issuance costs are | 600,000 | 600,000 | 600,000 | Secured (senior secured; collateral not itemised) | Senior secured | USD | 600,000 | Not applicable | Term SOFR plus a margin of 1.25% to 2.0%; USD 350 million swapped to 3.218% fixed plus the margin | Floating, partly swapped to fixed | Term SOFR | 125 to 200 | Not applicable | 2030-08-05 | 15,000 a year from the quarter ending 2026-12-31 to 2027-09-30 (2.5%), then 30,000 a year (5.0%) | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 30–31; 10-K_2025-12-31_gva-20251231.htm.jsonl, page 79 |
| Credit Agreement - Revolver | Senior secured revolving credit facility | Not applicable: undrawn | 0 | 0 | 600,000 | Secured (senior secured revolving credit facility) | Senior secured | USD | 0 | Not applicable | Term SOFR plus a margin of 1.25% to 2.0%; unused fee 0.175% to 0.350% | Floating | Term SOFR | 125 to 200 | Not applicable | 2030-08-05 | 0 | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 30–31; 10-K_2025-12-31_gva-20251231.htm.jsonl, page 140 |
| Financing cost adjustment | Debt issuance costs and other, net | -17,725 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -17,725 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 24 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM to 2026-03-31 | USD 4,424.379m | USD 912.465m | USD 699.547m | USD 4,637.297m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 3–5 | Calculated; acquisitions enter from completion dates, so the last twelve months mix full and partial contributions |
| EBITDA (Reported) | LTM to 2026-03-31 | USD 444.879m | USD 10.879m | USD -9.580m | USD 465.338m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 3–5 | Calculated from operating income plus depreciation, depletion and amortization for each component; not an issuer-stated measure |
| Cash Interest Paid | LTM to 2026-03-31 | USD 36.113m | USD 14.985m | USD 0.079m | USD 51.019m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 3–5 | Cash paid for interest from the supplementary cash flow information; understates run-rate interest until the senior notes pay their first coupon |
| Revenue | LTM to 2026-06-30 | USD 4,424.379m | USD 2,368.337m | USD 1,825.511m | USD 4,967.205m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 3, 5–6 | Calculated; acquisitions enter from completion dates, so the last twelve months mix full and partial contributions |
| EBITDA (Reported) | LTM to 2026-06-30 | USD 444.879m | USD 184.723m | USD 129.182m | USD 500.420m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 3, 5–6 | Calculated from operating income plus depreciation, depletion and amortization for each component; not an issuer-stated measure |
| Cash Interest Paid | LTM to 2026-06-30 | USD 36.113m | USD 35.065m | USD 13.229m | USD 57.949m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-06-30_gva-20260630.htm.jsonl, pages 3, 5–6 | Cash paid for interest from the supplementary cash flow information; understates run-rate interest until the senior notes pay their first coupon |
| Revenue | LTM to 2026-09-30 | USD 4,424.379m | USD 4,134.668m | USD 3,259.009m | USD 5,300.038m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 5–6 | Calculated; acquisitions enter from completion dates, so the last twelve months mix full and partial contributions |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 444.879m | USD 459.783m | USD 321.080m | USD 583.582m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 5–6 | Calculated from operating income plus depreciation, depletion and amortization for each component; not an issuer-stated measure |
| Cash Interest Paid | LTM to 2026-09-30 | USD 36.113m | USD 45.407m | USD 13.416m | USD 68.104m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 5–6 | Cash paid for interest from the supplementary cash flow information; understates run-rate interest until the senior notes pay their first coupon |
| Purchases of property and equipment (capital expenditure) | LTM to 2026-09-30 | USD 138.270m | USD 89.879m | USD 87.730m | USD 140.419m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 5–6 | Capex only; maintenance and growth split not supplied |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 468.916m | USD 404.270m | USD 289.612m | USD 583.574m | Calculated | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 93, 95–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 5–6 | Includes working capital swings and non-cash convertible items only below net income; not adjusted |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Debt / EBITDA | 739.048 | Gross debt in Net debt data | 333.694 | EBITDA (Reported) in T4.4, FY column | FY2024 / 2024-12-31 | USD | US$m | 2.21 | Calculated | Tier 1 (audited annual report) | Carrying-value debt; EBITDA calculated, not issuer-stated |
| Net debt / EBITDA | Debt / EBITDA | 160.718 | Net debt in Net debt data | 333.694 | EBITDA (Reported) in T4.4, FY column | FY2024 / 2024-12-31 | USD | US$m | 0.48 | Calculated | Tier 1 (audited annual report) | Carrying-value debt; EBITDA calculated, not issuer-stated |
| EBITDA / cash interest | EBITDA / cash interest paid | 333.694 | EBITDA (Reported) in T4.4, FY column | 26.072 | Cash Interest Paid in T4.5, FY column | FY2024 / 2024-12-31 | USD | US$m | 12.80 | Calculated | Tier 1 (audited annual report) | Cash interest paid, not interest expense |
| Total debt / EBITDA | Debt / EBITDA | 1,339.129 | Gross debt in Net debt data | 444.879 | EBITDA (Reported) in T4.4, FY column | FY2025 / 2025-12-31 | USD | US$m | 3.01 | Calculated | Tier 1 (audited annual report) | Carrying-value debt; EBITDA calculated, not issuer-stated |
| Net debt / EBITDA | Debt / EBITDA | 809.909 | Net debt in Net debt data | 444.879 | EBITDA (Reported) in T4.4, FY column | FY2025 / 2025-12-31 | USD | US$m | 1.82 | Calculated | Tier 1 (audited annual report) | Carrying-value debt; EBITDA calculated, not issuer-stated |
| EBITDA / cash interest | EBITDA / cash interest paid | 444.879 | EBITDA (Reported) in T4.4, FY column | 36.113 | Cash Interest Paid in T4.5, FY column | FY2025 / 2025-12-31 | USD | US$m | 12.32 | Calculated | Tier 1 (audited annual report) | Cash interest paid, not interest expense |
| Total debt / EBITDA | Debt / EBITDA | 1,240.981 | Gross debt in Net debt data | 465.338 | EBITDA (Reported) in T4.4, LTM in T4.8 | 2026-03-31 | USD | US$m | 2.67 | Calculated | Tier 2b (unaudited quarterly report) | Carrying-value debt; EBITDA calculated, not issuer-stated; last-twelve-month EBITDA |
| Net debt / EBITDA | Debt / EBITDA | 975.267 | Net debt in Net debt data | 465.338 | EBITDA (Reported) in T4.4, LTM in T4.8 | 2026-03-31 | USD | US$m | 2.10 | Calculated | Tier 2b (unaudited quarterly report) | Carrying-value debt; EBITDA calculated, not issuer-stated; last-twelve-month EBITDA |
| EBITDA / cash interest | EBITDA / cash interest paid | 465.338 | EBITDA (Reported) in T4.4, LTM in T4.8 | 51.019 | Cash Interest Paid, LTM in T4.8 | 2026-03-31 | USD | US$m | 9.12 | Calculated | Tier 2b (unaudited quarterly report) | Cash interest paid, not interest expense; last-twelve-month figures |
| Total debt / EBITDA | Debt / EBITDA | 1,558.652 | Gross debt in Net debt data | 500.420 | EBITDA (Reported) in T4.4, LTM in T4.8 | 2026-06-30 | USD | US$m | 3.11 | Calculated | Tier 2b (unaudited quarterly report) | Carrying-value debt; EBITDA calculated, not issuer-stated; last-twelve-month EBITDA |
| Net debt / EBITDA | Debt / EBITDA | 681.531 | Net debt in Net debt data | 500.420 | EBITDA (Reported) in T4.4, LTM in T4.8 | 2026-06-30 | USD | US$m | 1.36 | Calculated | Tier 2b (unaudited quarterly report) | Carrying-value debt; EBITDA calculated, not issuer-stated; last-twelve-month EBITDA |
| EBITDA / cash interest | EBITDA / cash interest paid | 500.420 | EBITDA (Reported) in T4.4, LTM in T4.8 | 57.949 | Cash Interest Paid, LTM in T4.8 | 2026-06-30 | USD | US$m | 8.64 | Calculated | Tier 2b (unaudited quarterly report) | Cash interest paid, not interest expense; last-twelve-month figures |
| Total debt / EBITDA | Debt / EBITDA | 1,556.025 | Gross debt in Net debt data | 583.582 | EBITDA (Reported) in T4.4, LTM in T4.8 | 2026-09-30 | USD | US$m | 2.67 | Calculated | Tier 2b (unaudited quarterly report) | Carrying-value debt; EBITDA calculated, not issuer-stated; last-twelve-month EBITDA |
| Net debt / EBITDA | Debt / EBITDA | 1,075.736 | Net debt in Net debt data | 583.582 | EBITDA (Reported) in T4.4, LTM in T4.8 | 2026-09-30 | USD | US$m | 1.84 | Calculated | Tier 2b (unaudited quarterly report) | Carrying-value debt; EBITDA calculated, not issuer-stated; last-twelve-month EBITDA |
| EBITDA / cash interest | EBITDA / cash interest paid | 583.582 | EBITDA (Reported) in T4.4, LTM in T4.8 | 68.104 | Cash Interest Paid, LTM in T4.8 | 2026-09-30 | USD | US$m | 8.57 | Calculated | Tier 2b (unaudited quarterly report) | Cash interest paid, not interest expense; last-twelve-month figures |
| Revenue growth, FY2025 on FY2024 (%) | Revenue FY2025 / Revenue FY2024 - 1, x 100 | 4,424.379 | Revenue in T4.4 | 4,007.574 | Revenue in T4.4 | FY2025 | USD | US$m | 10.40 | Calculated | Tier 1 (audited annual report) | Includes acquisitions from August 2025 |
| Revenue growth, 9M 2026 on 9M 2025 (%) | Revenue 9M 2026 / Revenue 9M 2025 - 1, x 100 | 4,134.668 | Revenue in T4.4 | 3,259.009 | Revenue in T4.4 | 9M 2026 | USD | US$m | 26.87 | Calculated | Tier 2b (unaudited quarterly report) | Acquired businesses contribute to 2026 only or for part of 2025 |
| Revenue growth, Q3 2026 on Q3 2025 (%) | Revenue Q3 2026 / Revenue Q3 2025 - 1, x 100 | 1,766.331 | Revenue in T4.4 | 1,433.498 | Revenue in T4.4 | Q3 2026 | USD | US$m | 23.22 | Calculated | Tier 2b (unaudited quarterly report) | Acquired businesses contribute to 2026 only or for part of 2025 |
| EBITDA growth, FY2025 on FY2024 (%) | EBITDA FY2025 / EBITDA FY2024 - 1, x 100 | 444.879 | EBITDA (Reported) in T4.4 | 333.694 | EBITDA (Reported) in T4.4 | FY2025 | USD | US$m | 33.32 | Calculated | Tier 1 (audited annual report) | Calculated EBITDA |
| EBITDA growth, 9M 2026 on 9M 2025 (%) | EBITDA 9M 2026 / EBITDA 9M 2025 - 1, x 100 | 459.783 | EBITDA (Reported) in T4.4 | 321.080 | EBITDA (Reported) in T4.4 | 9M 2026 | USD | US$m | 43.20 | Calculated | Tier 2b (unaudited quarterly report) | Calculated EBITDA |
| Gross margin, FY2025 (%) | Gross profit / Revenue, x 100 | 711.216 | Gross profit in T4.4 | 4,424.379 | Revenue in T4.4 | FY2025 | USD | US$m | 16.07 | Calculated | Tier 1 (audited annual report) | Reported lines |
| Gross margin, 9M 2026 (%) | Gross profit / Revenue, x 100 | 684.436 | Gross profit in T4.4 | 4,134.668 | Revenue in T4.4 | 9M 2026 | USD | US$m | 16.55 | Calculated | Tier 2b (unaudited quarterly report) | Reported lines |
| Gross margin, Q3 2026 (%) | Gross profit / Revenue, x 100 | 335.760 | Gross profit in T4.4 | 1,766.331 | Revenue in T4.4 | Q3 2026 | USD | US$m | 19.01 | Calculated | Tier 2b (unaudited quarterly report) | Reported lines |
| EBITDA margin, FY2024 (%) | EBITDA / Revenue, x 100 | 333.694 | EBITDA (Reported) in T4.4 | 4,007.574 | Revenue in T4.4 | FY2024 | USD | US$m | 8.33 | Calculated | Tier 1 (audited annual report) | Calculated EBITDA |
| EBITDA margin, FY2025 (%) | EBITDA / Revenue, x 100 | 444.879 | EBITDA (Reported) in T4.4 | 4,424.379 | Revenue in T4.4 | FY2025 | USD | US$m | 10.06 | Calculated | Tier 1 (audited annual report) | Calculated EBITDA |
| EBITDA margin, 9M 2026 (%) | EBITDA / Revenue, x 100 | 459.783 | EBITDA (Reported) in T4.4 | 4,134.668 | Revenue in T4.4 | 9M 2026 | USD | US$m | 11.12 | Calculated | Tier 2b (unaudited quarterly report) | Calculated EBITDA |
| EBITDA margin, Q3 2026 (%) | EBITDA / Revenue, x 100 | 275.060 | EBITDA (Reported) in T4.4 | 1,766.331 | Revenue in T4.4 | Q3 2026 | USD | US$m | 15.57 | Calculated | Tier 2b (unaudited quarterly report) | Calculated EBITDA |
| EBITDA margin, LTM to 2026-09-30 (%) | LTM EBITDA / LTM Revenue, x 100 | 583.582 | T4.8 | 5,300.038 | T4.8 | LTM 2026-09-30 | USD | US$m | 11.01 | Calculated | Tier 2b (unaudited quarterly report) | Calculated EBITDA; acquisitions part-year |
| Operating margin, FY2025 (%) | Operating income / Revenue, x 100 | 282.446 | Operating income in T4.4 | 4,424.379 | Revenue in T4.4 | FY2025 | USD | US$m | 6.38 | Calculated | Tier 1 (audited annual report) | Reported lines |
| Operating margin, 9M 2026 (%) | Operating income / Revenue, x 100 | 320.013 | Operating income in T4.4 | 4,134.668 | Revenue in T4.4 | 9M 2026 | USD | US$m | 7.74 | Calculated | Tier 2b (unaudited quarterly report) | Reported lines |
| Net margin attributable to shareholders, 9M 2026 (%) | Net income attributable / Revenue, x 100 | -316.651 | T4.4 | 4,134.668 | T4.4 | 9M 2026 | USD | US$m | -7.66 | Calculated | Tier 2b (unaudited quarterly report) | Distorted by non-cash convertible note charges below operating income |
| Free cash flow, FY2025 | Net cash from operating activities less purchases of property and equipment | 468.916 | T4.5 | 138.270 | T4.5 | FY2025 | USD | US$m | 330.646 | Calculated | Tier 1 (audited annual report) | Levered; after cash interest and cash taxes and after working capital changes |
| Free cash flow, 9M 2026 | Net cash from operating activities less purchases of property and equipment | 404.270 | T4.5 | 89.879 | T4.5 | 9M 2026 | USD | US$m | 314.391 | Calculated | Tier 2b (unaudited quarterly report) | Levered; after cash interest and cash taxes and after working capital changes |
| Free cash flow conversion, FY2025 (%) | Free cash flow / EBITDA, x 100 | 330.646 | Free cash flow above | 444.879 | T4.4 | FY2025 | USD | US$m | 74.32 | Calculated | Tier 1 (audited annual report) | Working capital timing flatters or depresses conversion |
| Free cash flow conversion, 9M 2026 (%) | Free cash flow / EBITDA, x 100 | 314.391 | Free cash flow above | 459.783 | T4.4 | 9M 2026 | USD | US$m | 68.38 | Calculated | Tier 2b (unaudited quarterly report) | Working capital timing flatters or depresses conversion |
| Capital expenditure to revenue, FY2025 (%) | Purchases of property and equipment / Revenue, x 100 | 138.270 | T4.5 | 4,424.379 | T4.4 | FY2025 | USD | US$m | 3.13 | Calculated | Tier 1 (audited annual report) | Total capex; split not supplied |
| Capital expenditure to revenue, 9M 2026 (%) | Purchases of property and equipment / Revenue, x 100 | 89.879 | T4.5 | 4,134.668 | T4.4 | 9M 2026 | USD | US$m | 2.17 | Calculated | Tier 2b (unaudited quarterly report) | Total capex; split not supplied |
| (EBITDA less capex) / cash interest, FY2025 | (EBITDA - Purchases of property and equipment) / Cash interest paid | 306.609 | T4.4 and T4.5 | 36.113 | T4.5 | FY2025 | USD | US$m | 8.49 | Calculated | Tier 1 (audited annual report) | Cash interest paid |
| (EBITDA less capex) / cash interest, LTM to 2026-09-30 | (LTM EBITDA - LTM capital expenditure) / LTM cash interest paid | 443.163 | T4.8 | 68.104 | T4.8 | LTM 2026-09-30 | USD | US$m | 6.51 | Calculated | Tier 2b (unaudited quarterly report) | Cash interest paid understates run rate |
| Liquidity: cash plus undrawn revolver, 2026-09-30 | Cash & Equivalents + undrawn committed facilities | 480.289 | T4.6 | 588.800 | Chart data: liquidity | 2026-09-30 | USD | US$m | 1,069.089 | Calculated | Tier 2b (unaudited quarterly report) | Cash includes joint venture cash of USD 149.707 million not generally available; marketable securities of USD 45.102 million excluded |
| Liquidity to total debt, 2026-09-30 | Liquidity / Total Debt | 1,069.089 | Liquidity above | 1,556.025 | T4.6 | 2026-09-30 | USD | US$m | 0.69 | Calculated | Tier 2b (unaudited quarterly report) | Carrying-value debt |
| Net cash from operating activities to total debt, FY2025 | Net Cash from Operating Activities / Total Debt | 468.916 | T4.5 | 1,339.129 | T4.6 | FY2025 | USD | US$m | 0.35 | Calculated | Tier 1 (audited annual report) | Year-end debt includes borrowings for acquisitions whose cash flow is only part-year |
| Funds from operations proxy to total debt, FY2025 | Operating cash flow before working capital changes / Total Debt | 408.400 | T4.5 | 1,339.129 | T4.6 | FY2025 | USD | US$m | 0.30 | Proxy | Tier 1 (audited annual report) | The issuer states no funds from operations; the cash flow before working capital changes is used as a proxy |
| Senior secured debt to EBITDA, 2026-09-30 (principal) | Term loan and revolver drawn principal / LTM EBITDA | 600.000 | T4.18 | 583.582 | T4.8 | 2026-09-30 | USD | US$m | 1.03 | Calculated | Tier 2b (unaudited quarterly report) | On principal because the term loan's carrying value is not stated separately; revolver undrawn |
| EBITDA to interest expense as reported, 9M 2026 | EBITDA / Interest expense | 459.783 | T4.4 | 329.421 | T4.4 | 9M 2026 | USD | US$m | 1.40 | Conflicted | Tier 2b (unaudited quarterly report) | Reported interest expense includes USD 273.747 million of non-cash discount amortization; shown only to expose the definition conflict |
| EBITDA to interest expense excluding non-cash discount amortization, 9M 2026 | EBITDA / (Interest expense - amortization of convertible debt discount) | 459.783 | T4.4 | 55.674 | T4.4 and T4.5 | 9M 2026 | USD | US$m | 8.26 | Calculated | Tier 2b (unaudited quarterly report) | Still includes accrual-basis interest, which differs from cash paid |
| Free cash flow to total debt, LTM to 2026-09-30 | LTM free cash flow / Total Debt | 443.155 | T4.8 | 1,556.025 | T4.6 | LTM 2026-09-30 | USD | US$m | 0.28 | Calculated | Tier 2b (unaudited quarterly report) | Last-twelve-month operating cash flow less capital expenditure; working capital timing included |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Growth (period flow, rate) | Revenue growth on the prior year (%) | 14.20 | 10.40 | Not supplied: the prior-year comparable is not in the sources | 26.87 | Not supplied: the prior-year comparable is not in the sources | 23.22 | Accelerating | Acquisitions completed from August 2025 contribute in 2026 |
| Margin (rate) | Gross margin (%) | 14.29 | 16.07 | 16.68 | 16.55 | 18.18 | 19.01 | Improving in Q3, flat for nine months | Q3 2026 above Q3 2025; nine months 2026 slightly below nine months 2025 |
| Margin (rate) | Operating margin (%) | 5.17 | 6.38 | 6.37 | 7.74 | 10.02 | 12.70 | Improving | Q3 operating margin is seasonally high |
| Margin (rate) | EBITDA margin (%) | 8.33 | 10.06 | 9.85 | 11.12 | 13.39 | 15.57 | Improving | Calculated EBITDA |
| Segment (rate) | Construction gross margin (%) | 14.38 | 15.71 | 15.89 | 16.68 | 16.55 | 18.61 | Improving | Segment tables |
| Segment (rate) | Materials gross margin (%) | 13.79 | 17.81 | 20.58 | 15.90 | 25.17 | 21.01 | Deteriorating in 2026 | Energy surcharges offset elevated diesel costs; acquired Materials businesses add volume |
| Backlog (period end) | Committed and awarded projects, USD thousands | 5,296,067 | 6,969,372 | Not supplied: the 2025 interim date is not in the sources | 7,455,470 | Not supplied: the 2025 interim date is not in the sources | 7,455,470 | Rising | Period-end values at 2024-12-31, 2025-12-31 and 2026-09-30; all in the Construction segment |
| Backlog (period end) | Public share of committed and awarded projects (%) | 77.81 | 86.94 | Not supplied: the 2025 interim date is not in the sources | 83.17 | Not supplied: the 2025 interim date is not in the sources | 83.17 | Stable to higher | Public work is about 85% of the backlog |
| Concentration (period flow) | Largest customer revenue share, Caltrans (%) | 14.2 | 10.1 | Not supplied: interim customer shares not stated | Not supplied: interim customer shares not stated | Not supplied: interim customer shares not stated | Not supplied: interim customer shares not stated | Falling | Reported to one decimal in the annual report |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA: operating income plus depreciation, depletion and amortization | No EBITDA or adjusted EBITDA is stated; the Credit Agreement uses a Consolidated EBITDA that is not printed | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 140; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 30 | All periods | High: every multiple depends on it | Financial foundation; Fundamental credit; Downside | Use the calculated measure, label it calculated, and do not read the credit agreement's covenant EBITDA from it |
| Interest expense and cover | Cash interest paid is the cover denominator | Interest expense of USD 329.421 million for 9M 2026 includes USD 273.747 million of non-cash discount amortization (USD 270.2 million in Q3) | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 3, 30–32 | Q3 2026, 9M 2026, LTM to 2026-09-30 | High: cover on expense is 1.40x against 8.57x on cash paid | Financial foundation; Fundamental credit | Use cash interest paid for cover; show expense ex discount in the calculation register |
| Total debt | Carrying value, current plus long-term, net of issuance costs and discounts | Debt table totals the same; the 3.25% convertible notes are current because holders may convert; principal total is USD 1,573.750 million against carrying value of USD 1,556.025 million at 2026-09-30 | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2, 24, 26 | 2026-09-30 | Low: USD 17.725 million | Financial foundation; Liquidity | Leverage on carrying value; principal shown in the reconciliation |
| Net debt | Gross debt less cash and equivalents | Cash includes USD 149.707 million of consolidated joint venture cash that is generally not available until distributed; marketable securities of USD 45.102 million are separate | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 44–46 | 2026-09-30 | Medium: net leverage would be 2.10x if joint venture cash were excluded and 1.77x if marketable securities were netted against debt | Financial foundation; Liquidity | Keep the statement cash; disclose the alternatives |
| Lease liabilities | Lease liabilities the issuer presents on their own lines are not added to Total Debt | Long-term lease liabilities of USD 150.641 million plus short-term lease liabilities of USD 40.869 million at 2026-09-30 | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2, 24 | 2026-09-30 | Medium | Financial foundation; Structural priority | Excluded from debt; shown here |
| 3.75% convertible notes settlement (multi-figure event) | One economic event: all figures with their roles | Principal USD 373.750 million; cash paid USD 289.7 million in March (exchange of USD 100.0 million principal, including USD 1.2 million accrued interest) and USD 714.9 million in August (settlement of USD 273.7 million principal); derivative liability USD 527.863 million at 2026-05-19, USD 630.473 million at 2026-06-30, settled at USD 522.425 million; capped call proceeds USD 56.7 million and USD 147.6 million; profit and loss: loss on convertible debt transactions of USD 260.852 million and discount amortization of USD 273.747 million in 9M 2026 | 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 23–24; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 27–30 | Q1 to Q3 2026 | High: the nine-month report states net cash used of USD 797.3 million net of capped call proceeds, while the payments less the cash flow capped call proceeds sum to USD 800.827 million; the USD 3.527 million difference is not explained in the filings, and none of the cost is in operating income | Financial foundation; Refinancing & LME; Liquidity | Cash flow and balance sheet figures serve leverage and liquidity; profit and loss charges are non-operating and excluded from EBITDA |
| Depreciation, depletion and amortization | Consolidated total from the cash flow statement | Segment note totals USD 134.319 million for 9M 2026 against USD 139.770 million consolidated, the difference being corporate | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5, 35–36 | 9M 2026 | Low | Financial foundation | Use the cash flow statement total |
| Income taxes paid | Cash taxes as printed | Nine-month 2025 income tax paid revised for a new accounting standard | 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 6 | 9M 2025 | Low | Financial foundation | Use the revised figure as printed |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage, cover and liquidity snapshot at 2026-09-30 | Ready with Limitations | EBITDA is calculated, not issuer-stated; interim ratios use last-twelve-month figures built from stubs; cash interest paid understates the run rate after the senior notes issue | Treat EBITDA as house-calculated; obtain the covenant compliance certificate for the credit agreement's definitions |
| Covenant headroom | Not Ready | Maximum leverage and minimum interest coverage levels, and the reported ratios, are not supplied | Obtain the executed Credit Agreement or compliance certificate |
| Maturity profile and refinancing | Ready with Limitations | Term loan dollar installments are derived from stated percentages; indentures are not supplied | Confirm installments against the credit agreement schedule |
| Forward interest burden | Not Ready | No pro forma interest is stated; the swap covers USD 350 million of the USD 600 million term loan; margins depend on a leverage grid whose current level is not stated | Obtain the current applicable margin and the swap terms |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2.21 | 0.48 | x | Reported EBITDA calculated from operating income plus depreciation, depletion and amortization for FY2024; debt at carrying value |
| FY2025 / 2025-12-31 | 3.01 | 1.82 | x | FY2025; debt includes the USD 600.000 million term loan drawn for the 2025 acquisitions, whose results enter EBITDA only from August 2025 |
| 2026-03-31 | 2.67 | 2.10 | x | Last twelve months to 2026-03-31 (FY2025 plus Q1 2026 less Q1 2025); a seasonally weak quarter with an operating loss |
| 2026-06-30 | 3.11 | 1.36 | x | Last twelve months to 2026-06-30; debt after the senior notes issue while the 3.75% convertible notes were still outstanding at a carrying value net of a USD 270.236 million discount, with their conversion value in a separate USD 630.473 million derivative liability that is not in debt, so this row understates the claim |
| 2026-09-30 | 2.67 | 1.84 | x | Last twelve months to 2026-09-30; debt after settlement of the 3.75% convertible notes; includes acquisitions only from their completion dates |

Ratios use calculated reported-basis EBITDA and carrying-value debt, and the 2026 rows divide by last-twelve-month EBITDA that includes acquired businesses only from completion.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 12.80 | x | FY2024 EBITDA over cash interest paid in the year |
| FY2025 / 2025-12-31 | 12.32 | x | FY2025 EBITDA over cash interest paid in the year |
| 2026-03-31 | 9.12 | x | Last-twelve-month EBITDA over last-twelve-month cash interest paid; the prior-year first-quarter stub of cash interest paid was only USD 0.079 million, so the last twelve months carry almost all of the 2026 first-quarter payment |
| 2026-06-30 | 8.64 | x | Last-twelve-month EBITDA over last-twelve-month cash interest paid; the senior notes issued on 2026-06-02 had paid no coupon by this date |
| 2026-09-30 | 8.57 | x | Last-twelve-month EBITDA over last-twelve-month cash interest paid; the first coupon on the senior notes is due 2026-12-15, so cash interest paid understates the run rate |

Cover uses cash interest paid, which has not yet absorbed a coupon on the senior notes issued in June 2026.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 578.330 | 333.700 | US$m | Cash and cash equivalents; undrawn revolver after USD 16.300 million of letters of credit, under the credit agreement in force before August 2025 |
| FY2025 / 2025-12-31 | 529.220 | 583.200 | US$m | Cash and cash equivalents; revolver commitment USD 600.000 million less USD 16.800 million of letters of credit, nothing drawn |
| 2026-03-31 | 265.714 | 584.900 | US$m | Cash and cash equivalents; revolver USD 600.000 million less USD 15.100 million of letters of credit; a USD 170.000 million draw after quarter-end is not reflected |
| 2026-06-30 | 877.121 | 584.900 | US$m | Cash and cash equivalents at a peak after the senior notes issue and before the August settlement of the 3.75% convertible notes; revolver USD 600.000 million less USD 15.100 million of letters of credit; USD 170.000 million drawn and repaid during the second quarter |
| 2026-09-30 | 480.289 | 588.800 | US$m | Cash and cash equivalents including USD 149.707 million held by consolidated construction joint ventures that is generally not available until distributed; revolver USD 600.000 million less USD 11.200 million of letters of credit, nothing drawn |

Cash includes joint venture cash that is generally not available until distributed, and the revolver is undrawn after letters of credit.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 3.750 | US$m | Term loan installment due in the quarter ending 2026-12-31 (2.5% a year of USD 600.000 million, one quarter); calculated from the stated amortization percentages applied to the initial term loan principal, as the filings print no dollar installments; revolver undrawn and matures 2030-08-05 |
| FY2027 | 18.750 | US$m | Term loan: three quarterly installments at 2.5% a year and one at 5.0% a year from the quarter ending 2027-12-31 |
| FY2028 | 30.000 | US$m | Term loan: four quarterly installments at 5.0% a year |
| FY2029 | 30.000 | US$m | Term loan: four quarterly installments at 5.0% a year |
| FY2030 | 891.250 | US$m | Term loan: two quarterly installments of USD 7.500 million plus a balance of USD 502.500 million at the 2030-08-05 maturity; and the 3.25% convertible notes of USD 373.750 million due 2030-06-15 |
| FY2034 | 600.000 | US$m | 6.375% Senior Notes due 2034-06-15 (USD 600.000 million); no instrument matures in FY2031 to FY2033 under the stated terms |

Term loan installments are derived from the stated amortization percentages and the 3.25% convertible notes are shown at their 2030 contractual maturity although they are classified as current.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-30 | Unit | Source |
| --- | --- | --- | --- | --- | --- |
| Revenue | 4,007.574 | 4,424.379 | 5,300.038 | US$m | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| Gross profit | 572.697 | 711.216 | 852.156 | US$m | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| Operating income | 207.363 | 282.446 | 394.994 | US$m | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| EBITDA (Reported), calculated | 333.694 | 444.879 | 583.582 | US$m | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| EBITDA margin | 8.33 | 10.06 | 11.01 | % | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| Net cash from operating activities | 456.343 | 468.916 | 583.574 | US$m | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| Purchases of property and equipment | 136.405 | 138.270 | 140.419 | US$m | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| Free cash flow | 319.938 | 330.646 | 443.155 | US$m | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| Cash interest paid | 26.072 | 36.113 | 68.104 | US$m | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| Total debt (carrying value, period end) | 739.048 | 1,339.129 | 1,556.025 | US$m | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| Net debt (period end) | 160.718 | 809.909 | 1,075.736 | US$m | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6; T4.8 |
| Total debt / EBITDA | 2.21 | 3.01 | 2.67 | x | T4.9 |
| Net debt / EBITDA | 0.48 | 1.82 | 1.84 | x | T4.9 |
| EBITDA / cash interest | 12.80 | 12.32 | 8.57 | x | T4.9 |
| Liquidity: cash plus undrawn revolver (period end) | 912.030 | 1,112.420 | 1,069.089 | US$m | Chart data: liquidity |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 739.048 | 578.330 | 160.718 | US$m | Carrying value of the 3.25% and 3.75% convertible notes net of issuance costs; principal total USD 747.500 million; excludes lease liabilities; cash includes joint venture cash; marketable securities of USD 7.311 million not netted |
| FY2025 / 2025-12-31 | 1,339.129 | 529.220 | 809.909 | US$m | Carrying value of the two convertible notes and the USD 600.000 million term loan net of issuance costs; principal total USD 1,347.500 million; excludes lease liabilities; cash includes joint venture cash; marketable securities of USD 120.555 million not netted; 3.25% convertible notes are current |
| 2026-03-31 | 1,240.981 | 265.714 | 975.267 | US$m | Carrying value of the convertible notes (the 3.75% notes after a USD 100.000 million principal exchange) and the term loan; principal total USD 1,247.500 million; excludes lease liabilities; a USD 170.000 million revolver draw after quarter-end (repaid in the second quarter) is not in the balance sheet |
| 2026-06-30 | 1,558.652 | 877.121 | 681.531 | US$m | Carrying value after the USD 600.000 million senior notes issue and net of a USD 270.236 million debt discount on the 3.75% convertible notes; principal total USD 1,847.497 million; excludes the USD 630.473 million conversion derivative liability and lease liabilities; cash is a peak before the August conversion settlement |
| 2026-09-30 | 1,556.025 | 480.289 | 1,075.736 | US$m | Carrying value of the senior notes, the 3.25% convertible notes and the term loan net of USD 17.725 million issuance costs and other; principal total USD 1,573.750 million; excludes lease liabilities; cash includes USD 149.707 million of joint venture cash; marketable securities of USD 45.102 million not netted |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 1,573.750 | -17.725 | 1,556.025 | US$m | Principal is the sum of the maturity ladder; reconciling items are debt issuance costs and other of USD 17.725 million (no discount remains after the 3.75% notes were settled); the 3.25% convertible notes are listed at principal, as carrying value by instrument is not stated |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | Read: the five filings. The third-quarter report states no subsequent event after 2026-09-30 that changes net debt; events between year-end 2025 and 2026-09-30 are already in the interim rows of Net debt data; the first-quarter report's USD 170.000 million revolver draw was repaid in the second quarter |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 4,007.574 | 333.694 | US$m | Twelve months; EBITDA is reported-basis EBITDA calculated here from operating income plus depreciation, depletion and amortization (the issuer states no adjusted EBITDA) |
| FY2025 / 2025-12-31 | 4,424.379 | 444.879 | US$m | Twelve months; same EBITDA identity; includes Warren Paving, Papich Construction and Cinderlite only from their 2025 completion dates |
| 2026-09-30 | 5,300.038 | 583.582 | US$m | Last twelve months to 2026-09-30 (FY2025 plus nine months 2026 less nine months 2025), a twelve-month period like the annual rows; same EBITDA identity |

EBITDA is calculated by this module from operating income and depreciation, depletion and amortization, because the issuer states no EBITDA.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Revolving credit facility (USD 600.000 million commitment, undrawn) | 1 | Yes | 0.000 | 0.00 | US$m | Senior secured revolver under the Fifth Amended and Restated Credit Agreement; borrowers are Granite Construction Incorporated, Granite Construction Company and GILC Incorporated; matures 2030-08-05; amount is the drawn principal; letters of credit of USD 11.200 million reduce availability to USD 588.800 million; cumulative leverage is principal over last-twelve-month EBITDA |
| Initial Term Loan (Credit Agreement) | 1 | Yes | 600.000 | 1.03 | US$m | Senior secured term loan, pari passu with the revolver on the filings' description; same borrowers; collateral not itemised in the filings; USD 350 million swapped to a fixed 3.218% plus margin; matures 2030-08-05; principal, not carrying value |
| 6.375% Senior Notes due 2034 | 2 | No | 600.000 | 2.06 | US$m | Described as senior unsecured notes issued 2026-06-02 by Granite Construction Incorporated and guaranteed on a senior unsecured basis by each domestic subsidiary that is a borrower or guarantor under the Credit Agreement; principal |
| 3.25% Convertible Senior Notes due 2030 | 2 | No | 373.750 | 2.70 | US$m | Issued by Granite Construction Incorporated; described as convertible senior notes; the filings state no collateral and no guarantors, and the indenture is not supplied, so rank equal to the senior notes and unsecured status are Analyst Judgement from the description and the absence of any stated lien; principal, settled in cash on conversion |

Amounts are principal, not carrying value, and the convertible notes' security is an Analyst Judgement from the description in the filings.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Opening: EBITDA (Reported), last twelve months to 2026-09-30 | Not supplied: the issuer states no adjusted EBITDA, so no bridge from reported to adjusted EBITDA exists | US$m | The reported-basis EBITDA is calculated by this module; the issuer states no add-backs |
| Closing: EBITDA (Adjusted) | Not supplied: the issuer states no adjusted EBITDA, so no bridge from reported to adjusted EBITDA exists | US$m | No issuer-adjusted or covenant EBITDA is stated; the credit agreement's Consolidated EBITDA definition is not supplied |

No bridge exists because the issuer states no adjusted EBITDA.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 16 |
| Calculated | 14 |
| Assumption-Based | 1 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 29 |
| Fields total | 30 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 3 |

## Calculations

| Calculation ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| calc-01 | Net debt at FY2024 / 2024-12-31 = gross debt less cash (US$m) | 739.048 less 578.330 | 160.718 | Net debt data; balance sheets |
| calc-02 | Net debt at FY2025 / 2025-12-31 = gross debt less cash (US$m) | 1,339.129 less 529.220 | 809.909 | Net debt data; balance sheets |
| calc-03 | Net debt at 2026-03-31 = gross debt less cash (US$m) | 1,240.981 less 265.714 | 975.267 | Net debt data; balance sheets |
| calc-04 | Net debt at 2026-06-30 = gross debt less cash (US$m) | 1,558.652 less 877.121 | 681.531 | Net debt data; balance sheets |
| calc-05 | Net debt at 2026-09-30 = gross debt less cash (US$m) | 1,556.025 less 480.289 | 1,075.736 | Net debt data; balance sheets |
| calc-06 | EBITDA (Reported) FY2024 = operating income plus depreciation, depletion and amortization (US$m) | 207.363 plus 126.331 | 333.694 | T4.4 |
| calc-07 | EBITDA (Reported) FY2025 = operating income plus depreciation, depletion and amortization (US$m) | 282.446 plus 162.433 | 444.879 | T4.4 |
| calc-08 | EBITDA (Reported) 9M 2025 = operating income plus depreciation, depletion and amortization (US$m) | 207.465 plus 113.615 | 321.080 | T4.4 |
| calc-09 | EBITDA (Reported) 9M 2026 = operating income plus depreciation, depletion and amortization (US$m) | 320.013 plus 139.770 | 459.783 | T4.4 |
| calc-10 | EBITDA (Reported) Q3 2025 = operating income plus depreciation, depletion and amortization (US$m) | 143.651 plus 48.247 | 191.898 | T4.4 |
| calc-11 | EBITDA (Reported) Q3 2026 = operating income plus depreciation, depletion and amortization (US$m) | 224.338 plus 50.722 | 275.060 | T4.4 |
| calc-12 | Quarterly depreciation, depletion and amortization = nine months less six months (US$m) | 2026: 139.770 less 89.048; 2025: 113.615 less 65.368 | 2026: 50.722; 2025: 48.247 | T4.5; Q2 10-Q cash flow |
| calc-13 | LTM EBITDA to 2026-03-31 = FY2025 plus current stub less prior-year stub (US$m) | 444.879 plus 10.879 less -9.580 | 465.338 | T4.8 |
| calc-14 | LTM EBITDA to 2026-06-30 = FY2025 plus current stub less prior-year stub (US$m) | 444.879 plus 184.723 less 129.182 | 500.420 | T4.8 |
| calc-15 | LTM EBITDA to 2026-09-30 = FY2025 plus current stub less prior-year stub (US$m) | 444.879 plus 459.783 less 321.080 | 583.582 | T4.8 |
| calc-16 | Contractual principal = sum of the maturity ladder (US$m) | 3.750 plus 18.750 plus 30.000 plus 30.000 plus 891.250 plus 600.000 | 1,573.750 | Chart data: debt maturities |
| calc-17 | Reconciling items = debt issuance costs and other (US$m) | Debt table line at 2026-09-30 | -17.725 | 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 24 |
| calc-18 | Carrying value = principal plus reconciling items (US$m) | 1,573.750 plus -17.725 | 1,556.025 | Debt principal to carrying value |
| calc-19 | Liquidity at 2026-09-30 = cash plus undrawn revolver (US$m); rounded to two decimals for the narrative | 480.289 plus 588.800 | 1,069.089; narrative figure 1,069.09 | Chart data: liquidity |
| calc-20 | Current maturities of long-term debt at 2026-09-30 (US$m); rounded to two decimals for the narrative | 381.686 | 381.686; narrative figure 381.69 | T4.6 |
| calc-21 | Growth in total debt: carrying value at 2026-09-30 over carrying value at 2024-12-31 | 1,556.025 divided by 739.048 | 2.11x | T4.6 |
| calc-22 | Annual coupon on the senior notes = principal times 6.375% (US$m) | 600.000 times 6.375% | 38.250 | 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 25 |
| calc-23 | Term loan installments = 600.000 times 2.5% or 5.0% divided by 4 (US$m); balance at maturity | 600.000 times 0.025 divided by 4 equals 3.750; 600.000 times 0.05 divided by 4 equals 7.500; 600.000 less 4 times 3.750 less 11 times 7.500 | 3.750; 7.500; 502.500 | 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 31 |
| calc-24 | 3.75% convertible notes cash cost: March exchange plus August settlement less capped call proceeds in the cash flow statement (US$m); difference from the nine-month report's USD 797.3 million | 289.700 plus 714.900 less 203.773 | 800.827; difference 3.527 | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 6, 28–30, 47 |
| calc-25 | Net leverage alternatives at 2026-09-30: excluding joint venture cash (149.707), and netting marketable securities (45.102) | (1,556.025 less 330.582) divided by 583.582; (1,556.025 less 525.391) divided by 583.582 | 2.10x; 1.77x | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 44–46 |
| calc-26 | Free cash flow 9M 2026 = net cash from operating activities less purchases of property and equipment (US$m) | 404.270 less 89.879 | 314.391 | T4.5 |

## Gaps

The financial covenant levels in the credit agreement, a minimum interest coverage ratio and a maximum leverage ratio, and the issuer's reported ratios are not printed in any of the five filings, which state only compliance at each period end. This blocks any covenant headroom measure. Severity: High. The executed credit agreement or a compliance certificate would close it.

The issuer reports no EBITDA, adjusted EBITDA or reconciliation, so every EBITDA figure is calculated from operating income and depreciation, depletion and amortization and the credit agreement's Consolidated EBITDA is unknown. This restricts comparison with covenant and market definitions. Severity: Medium. The credit agreement definition would close it.

Carrying values by instrument are not stated, only principal by instrument and one aggregate of issuance costs and other; the 3.25% convertible notes and senior notes are therefore listed at principal. This restricts debt by seniority at carrying value. Severity: Low. The indentures or a detailed debt note would close it.

The term loan's dollar installments are not printed, only the percentage rates, so the maturity ladder applies those rates to the USD 600.000 million initial principal. This restricts the near-year maturity figures. Severity: Medium. The credit agreement schedule would close it.

The security and relative ranking of the 3.25% convertible notes, the guarantor perimeter and any collateral package are not stated beyond the descriptions in the notes. This restricts the debt stack and structural priority work. Severity: Medium. The indentures and guarantee agreements would close it.

Cash interest paid understates the future interest burden because the senior notes issued on 2026-06-02 had paid no coupon by 2026-09-30, and no pro forma interest or current applicable margin is stated. This restricts forward cover. Severity: Medium. The current margin and the swap terms would close it.

Cash includes USD 149.707 million held by consolidated joint ventures that is generally not available until distributed, and the filings do not state how much of the remainder is held in operating subsidiaries or needed for bonding. This restricts the cash netted in net debt and the liquidity figure. Severity: Medium. Management disclosure would close it.

Lines printed as dashes are shown as not supplied rather than zero: the debt extinguishment and convertible transaction line for FY2025, nine months 2025 and the third quarter of 2025, the non-cash debt extinguishment and convertible note line for FY2025 and nine months 2025, long-term marketable securities at 2024-12-31, and the conversion derivative liability outside the 2026-06-30 balance sheet. The statements foot without them, so the effect is presentational. Severity: Low.

No balance sheets at the 2025 interim dates and no fiscal 2024 interim reports are supplied, so last-twelve-month leverage starts at 2026-03-31 and the 2025 and 2026 interim cash flow lines exist only for year-to-date periods. Severity: Low. The 2025 quarterly reports would close it.

Capital expenditure is not split between maintenance and growth, and funds from operations is not stated, so a proxy is used. Severity: Low. Management disclosure would close it.

Segment EBITDA is not stated; segment operating income and depreciation are printed with corporate costs separate. This restricts segment cash flow analysis. Severity: Low.

No event after 2026-09-30 that changes net debt is stated in the sources read; any later financing or acquisition is outside the evidence. Severity: Low.

## Next module

The orchestrator selects the next module.
