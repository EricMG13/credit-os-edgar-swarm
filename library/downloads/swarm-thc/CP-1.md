---
module_id: CP-1
issuer_id: thc
analysis_date: 2026-11-05
pathway: credit_snapshot
---

# Financial foundation for TENET HEALTHCARE CORP

## Request

Financial foundation for TENET HEALTHCARE CORP (issuer thc), as of 2026-11-05, on the credit snapshot pathway. The scope is normalised statements for fiscal 2024 and 2025 and the first nine months of 2026, debt, liquidity, leverage and interest cover, from the annual report, the latest quarterly report and the latest earnings release.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_thc-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-17 | f11b8c51ccd0de901ead39554fe597e277a823a504d6f5879743322f2e033f67 | Audited FY2024 and FY2025 statements, debt note, maturities, covenants, lease note, segment note, subsequent event |
| 10-Q_2026-09-30_thc-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-29 | e79732f4107be2e25480e8b1b80ad38188b6eb8362209287bd06381751951a29 | Latest balance sheet, Q3 2026 and nine-month statements, debt note, liquidity, segment note, cash discussion |
| EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-29 | de8966425c6d51c46fec7968d415d855247be5599cd3f04bbba535aedb3bc95d | Operating statistics, net leverage ratio as the issuer states it, adjusted free cash flow, financing events, outlook |

| Handoff module | sha256 | Use |
| --- | --- | --- |
| Source readiness (CP-0) | f3d4a4b7f71d056fdc3ae807f74582f0d82acd06daa067e2fc8ebad65506e75c | Source coverage, dates and limitations; confirms the seven supplied documents cover FY2025 and Q1 to Q3 2026 |

## Findings

### Bottom line

Net debt to adjusted EBITDA fell to 2.11x at 2026-09-30 from 2.25x at 2025-12-31, but ratios on reported EBITDA are flattered by non-recurring contract termination revenue, so creditors should anchor on the adjusted measure.

Net debt at carrying value was USD 10,569 million after the September 2026 refinancing, which retired the 2027 secured notes and part of the 2028 notes with new notes due in 2034, and undrawn revolver availability was USD 1,900 million. The statements tie across the annual report and the latest quarterly report, and the debt note reconciles to the balance sheet exactly.
Basis: 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 144–149; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 12–13; EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl, page 2; calculation CALC-03; calculation CALC-05

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_thc-20251231.htm.jsonl | Annual report (10-K) | FY2023 to FY2025; balance sheets at 2024-12-31 and 2025-12-31 | USD | millions | Tenet Healthcare Corporation and consolidated subsidiaries | US GAAP | Tier 1 (audited) | Statements, debt, maturities, covenants, leases, segments | Part III incorporated by reference to a proxy statement not supplied |
| 10-Q_2026-03-31_thc-20260331.htm.jsonl | Quarterly report (10-Q) | Q1 2026 | USD | millions | Tenet Healthcare Corporation and consolidated subsidiaries | US GAAP | Tier 2b (unaudited) | Not used for figures: superseded by the later cumulative filing | Unaudited |
| 10-Q_2026-06-30_thc-20260630.htm.jsonl | Quarterly report (10-Q) | Q2 2026 and six months 2026 | USD | millions | Tenet Healthcare Corporation and consolidated subsidiaries | US GAAP | Tier 2b (unaudited) | Not used for figures: superseded by the later cumulative filing | Unaudited |
| 10-Q_2026-09-30_thc-20260930.htm.jsonl | Quarterly report (10-Q) | Q3 2026 and nine months 2026; balance sheet at 2026-09-30 | USD | millions | Tenet Healthcare Corporation and consolidated subsidiaries | US GAAP | Tier 2b (unaudited) | Latest statements, debt note, liquidity, segments | Unaudited; no maturity table printed |
| EX-99.1_2026-04-30_thc-20260331ex991earningsr.htm.jsonl | Earnings release (Exhibit 99.1) | Q1 2026 | USD | millions | Tenet Healthcare Corporation and consolidated subsidiaries | US GAAP | Tier 3 (issuer release) | Not used for figures | Non-GAAP measures defined by the issuer |
| EX-99.1_2026-07-23_thc-20260630ex991earningsr.htm.jsonl | Earnings release (Exhibit 99.1) | Q2 2026 | USD | millions | Tenet Healthcare Corporation and consolidated subsidiaries | US GAAP | Tier 3 (issuer release) | Not used for figures | Non-GAAP measures defined by the issuer |
| EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl | Earnings release (Exhibit 99.1) | Q3 2026 | USD | millions | Tenet Healthcare Corporation and consolidated subsidiaries | US GAAP | Tier 3 (issuer release) | Operating statistics, net leverage as the issuer states it, adjusted cash flow measures | Non-GAAP measures defined by the issuer |

Sufficiency: the annual report and the latest quarterly report together support the income statement, cash flow statement, balance sheet and segment data for every period used; the key performance indicators are supported from the latest release only.

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tenet Healthcare Corporation (Nevada) | Issuer, registrant and borrower | December 31 | USD | millions | Consolidated, including majority-owned subsidiaries and consolidated joint ventures; noncontrolling interests shown separately | US GAAP | FY2023, FY2024, FY2025; Q1, Q2 and Q3 2026; six and nine months 2026 |
| Certain wholly owned domestic hospital subsidiaries (not named) | Guarantors of the senior secured notes and the credit agreement | December 31 | USD | millions | Not reported separately in the sources read | US GAAP | Not supplied: no guarantor-level financial statements in the sources read |
| United Surgical Partners International (Ambulatory Care segment) | Operating segment | December 31 | USD | millions | Included in the consolidated statements; segment figures only | US GAAP | FY2023, FY2024, FY2025; Q3 and nine months 2025 and 2026 |
| Conifer Health Solutions, LLC | Subsidiary within the Hospital Operations segment | December 31 | USD | millions | 76.2% owned at 2025-12-31 and wholly owned at 2026-09-30 after the redemption of CommonSpirit's interest effective 2026-01-01 | US GAAP | Included in the consolidated statements |

Subsequent events are flagged with their dates and are not blended into period figures. On 2026-01-27 Tenet and CommonSpirit agreed to end the revenue cycle services agreement, to a payment to Tenet of USD 1,900 million in annual installments over three years of which USD 540 million was set off against the USD 540 million Conifer paid to redeem CommonSpirit's interest, and the annual report treats the agreement as a subsequent event that did not change the 2025 statements. The transition of revenue cycle services is to be substantially complete by 2026-10-30, after the latest balance sheet date; no net debt amount is stated for that date.
Basis: 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 175–176; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 17

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Derive EBITDA (Reported) as operating income plus depreciation and amortization | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | Derivation | Not printed: the issuer states no unadjusted EBITDA | FY2024 6,774; FY2025 4,371; Q3 2025 1,107; Q3 2026 1,967; 9M 2025 3,287; 9M 2026 5,208 | The method derives EBITDA from printed components when none is stated; the figure includes the one-off items the issuer excludes from Adjusted EBITDA | All income statement periods |
| Write cash interest paid as a positive amount | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | Sign convention | Printed as a deduction: (851), (865), (499), (464) | 851; 865; 499; 464 | The fixed row states the positive amount paid | FY2024; FY2025; 9M 2025; 9M 2026 |
| Carry debt at balance-sheet carrying value | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | Basis | Principal 13,267; 13,265; 13,341 USD millions at 2024-12-31, 2025-12-31 and 2026-09-30 | Carrying value 13,173; 13,171; 13,243 USD millions | Debt is carrying value net of issuance costs and discounts, with principal logged beside it | 2024-12-31; 2025-12-31; 2026-09-30 |
| No currency, unit or perimeter adjustment | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | None | USD millions as printed | USD millions | All sources use one currency, one unit and one consolidated perimeter; the 2025-12-31 balance sheet in the quarterly report equals the annual report's | All periods |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net operating revenues | 20,675 | 21,310 | 5,289 | 5,631 | 15,783 | 16,627 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Revenue from contract termination | Not supplied: the line is not presented in this filing | Not supplied: the line is not presented in this filing | Not supplied: the filing prints a dash for this period | 646 | Not supplied: the filing prints a dash for this period | 1,472 | USD millions | Reported; shown as a separate revenue line from 2026, outside net operating revenues | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Equity in earnings of unconsolidated affiliates | 260 | 264 | 64 | 64 | 181 | 180 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Salaries, wages and benefits | 8,801 | 8,705 | 2,204 | 2,173 | 6,483 | 6,578 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Supplies | 3,647 | 3,780 | 931 | 983 | 2,770 | 2,928 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Other operating expenses, net | 4,492 | 4,523 | 1,119 | 1,184 | 3,328 | 3,480 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Depreciation and amortization | 818 | 863 | 218 | 217 | 632 | 661 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Impairment and restructuring charges, and acquisition-related costs | 102 | 130 | 23 | 37 | 66 | 92 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Litigation and investigation costs (benefit) | 35 | 64 | -11 | 6 | 34 | 36 | USD millions | Reported; a benefit is negative | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Net losses (gains) on sales, consolidation and deconsolidation of facilities | -2,916 | 1 | -20 | -9 | -4 | -43 | USD millions | Reported; a gain is negative | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Operating income | 5,956 | 3,508 | 889 | 1,750 | 2,655 | 4,547 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Interest expense | -826 | -821 | -206 | -203 | -616 | -612 | USD millions | Reported; printed as a deduction | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Other non-operating income, net | 126 | 117 | 29 | 37 | 80 | 121 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Loss from early extinguishment of debt | -8 | -4 | Not supplied: the filing prints a dash for this period | -5 | Not supplied: the filing prints a dash for this period | -5 | USD millions | Reported; printed as a deduction | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Income before income taxes | 5,248 | 2,800 | 712 | 1,579 | 2,119 | 4,051 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Income tax expense | -1,184 | -433 | -133 | -360 | -396 | -881 | USD millions | Reported; printed as a deduction | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Net income | 4,064 | 2,367 | 579 | 1,219 | 1,723 | 3,170 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Less: Net income available to noncontrolling interests | 864 | 960 | 237 | 219 | 687 | 642 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Net income available to Tenet Healthcare Corporation common shareholders | 3,200 | 1,407 | 342 | 1,000 | 1,036 | 2,528 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Diluted earnings per share | 32.70 | 15.49 | 3.86 | 12.41 | 11.28 | 30.08 | USD per share | Reported; per share | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| Weighted average diluted shares outstanding | 97,881 | 90,833 | 88,610 | 80,600 | 91,805 | 84,053 | shares thousands | Reported; thousands of shares | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| EBITDA (Reported) | 6,774 | 4,371 | 1,107 | 1,967 | 3,287 | 5,208 | USD millions | Calculated: operating income plus depreciation and amortization; the issuer prints no unadjusted EBITDA; includes revenue from contract termination of 646 USD millions in Q3 2026 and 1,472 in 9M 2026 | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| EBITDA (Adjusted) | 3,995 | 4,566 | 1,099 | 1,355 | 3,383 | 3,821 | USD millions | Issuer-reported Adjusted EBITDA (non-GAAP): revenues and equity earnings less salaries, supplies and other operating expenses; excludes contract termination revenue, depreciation, impairment, restructuring, litigation, facility sale gains and losses, interest and other non-operating items | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 174; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 24–25 |

Segment schedule: the two segments sum to the consolidated totals in every period, so no corporate or eliminations row exists. Revenue from contract termination sits outside segment net operating revenues and outside Adjusted EBITDA.

### Segment schedule

| Line item | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hospital Operations net operating revenues | 16,141 | 16,138 | 4,014 | 4,260 | 12,044 | 12,548 | USD millions | Reported segment figure (non-GAAP for Adjusted EBITDA) | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 174; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 24–25 |
| Ambulatory Care net operating revenues | 4,534 | 5,172 | 1,275 | 1,371 | 3,739 | 4,079 | USD millions | Reported segment figure (non-GAAP for Adjusted EBITDA) | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 174; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 24–25 |
| Hospital Operations Adjusted EBITDA | 2,185 | 2,540 | 607 | 818 | 1,937 | 2,258 | USD millions | Reported segment figure (non-GAAP for Adjusted EBITDA) | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 174; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 24–25 |
| Ambulatory Care Adjusted EBITDA | 1,810 | 2,026 | 492 | 537 | 1,446 | 1,563 | USD millions | Reported segment figure (non-GAAP for Adjusted EBITDA) | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 174; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 24–25 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 4,064 | 2,367 | 1,723 | 3,170 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Depreciation and amortization | 818 | 863 | 632 | 661 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Deferred income tax expense (benefit) | -103 | 9 | 51 | 324 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Stock-based compensation expense | 67 | 104 | 79 | 104 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Impairment and restructuring charges, and acquisition-related costs | 102 | 130 | 66 | 92 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Litigation and investigation costs | 35 | 64 | 34 | 36 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Net losses (gains) on sales, consolidation and deconsolidation of facilities | -2,916 | 1 | -4 | -43 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Loss from early extinguishment of debt | 8 | 4 | Not supplied: the filing prints a dash for this period | 5 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Equity in earnings of unconsolidated affiliates, net of distributions received | -29 | -34 | -13 | -11 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Amortization of debt discount and debt issuance costs | 26 | 23 | 18 | 16 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Net gains from the sale of investments and long-lived assets | -4 | -4 | Not supplied: the line is not presented in this filing | Not supplied: the line is not presented in this filing | USD millions | Reported; not a separate line in the quarterly filing | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Other items, net (operating) | -4 | -6 | -5 | -11 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Accounts receivable | 245 | 20 | 68 | -11 | USD millions | Reported; change in operating assets and liabilities | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Inventories and other current assets | -86 | -73 | -58 | 211 | USD millions | Reported; change in operating assets and liabilities | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Income taxes | 16 | -25 | 15 | 63 | USD millions | Reported; change in operating assets and liabilities | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Accounts payable, accrued expenses and other current liabilities | -30 | 209 | 237 | -1,042 | USD millions | Reported; change in operating assets and liabilities | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Other long-term liabilities | -9 | 9 | 50 | 46 | USD millions | Reported; change in operating assets and liabilities | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Payments for restructuring charges, acquisition-related costs, and litigation costs and settlements | -153 | -121 | -84 | -103 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | 2,047 | 3,540 | 2,809 | 3,507 | USD millions | Reported; the 9M 2026 figure includes contract termination payments received of 540 USD millions | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Purchases of property and equipment | -931 | -1,010 | -646 | -546 | USD millions | Reported; total capital expenditure, no maintenance or growth split disclosed | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Purchases of businesses or joint venture interests, net of cash acquired | -571 | -308 | -266 | -201 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Proceeds from sales of facilities and other assets | 4,981 | 38 | 18 | 11 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Proceeds from sales of marketable securities and long-term investments | 63 | 93 | 74 | 66 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Purchases of marketable securities and long-term investments | -94 | -90 | -69 | -122 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Other items, net (investing) | -19 | 2 | 3 | -26 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | 3,429 | -1,275 | -886 | -818 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Repayments of borrowings | -2,243 | -2,372 | -90 | -2,087 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Proceeds from borrowings | 23 | 2,276 | 21 | 2,041 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Repurchases of common stock | -672 | -1,386 | -1,188 | -1,615 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Debt issuance costs | Not supplied: the filing prints a dash for this period | -32 | Not supplied: the filing prints a dash for this period | -22 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Distributions paid to noncontrolling interests | -681 | -809 | -585 | -614 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Proceeds from the sale of noncontrolling interests | 23 | 42 | 27 | 33 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Purchases of noncontrolling interests | -200 | -92 | -88 | -583 | USD millions | Reported; the 9M 2026 figure includes the redemption of CHI's interest in Conifer | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Advances from managed care payers | 342 | Not supplied: the filing prints a dash for this period | Not supplied: the line is not presented in this filing | Not supplied: the line is not presented in this filing | USD millions | Reported; not a separate line in the quarterly filing | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Repayments of advances from managed care payers | -310 | -32 | -33 | Not supplied: the filing prints a dash for this period | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Taxes paid related to net share settlement, net of proceeds from shares issued under stock-based compensation plans | -25 | -51 | -47 | -84 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Other items, net (financing) | 58 | 55 | 16 | 33 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | -3,685 | -2,401 | -1,967 | -2,898 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Net Cash Change | 1,791 | -136 | -44 | -209 | USD millions | Reported; net increase (decrease) in cash and cash equivalents; no foreign exchange line is presented | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Opening Cash | 1,228 | 3,019 | 3,019 | 2,883 | USD millions | Reported; cash and cash equivalents at beginning of period | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Closing Cash | 3,019 | 2,883 | 2,975 | 2,674 | USD millions | Reported; cash and cash equivalents at end of period | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Cash Interest Paid | 851 | 865 | 499 | 464 | USD millions | Reported; interest paid, net of capitalized interest, printed as a deduction and written here as the positive amount paid | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Income tax payments, net | -1,271 | -450 | -329 | -493 | USD millions | Reported; supplemental disclosure, printed as a deduction | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 3,019 | 2,883 | 2,674 | USD millions | Reported; cash and cash equivalents, of which 76 USD millions at 2026-09-30, 108 at 2025-12-31 and 110 at 2024-12-31 are intended for insurance-related subsidiaries | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Accounts receivable | 2,536 | 2,565 | 2,595 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Inventories of supplies, at cost | 346 | 348 | 340 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Assets held for sale | 21 | 62 | 62 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Other current assets | 1,760 | 1,991 | 2,757 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Total current assets | 7,682 | 7,849 | 8,428 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Investments and other assets | 3,037 | 2,883 | 3,958 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Deferred income taxes (asset) | 80 | 84 | 49 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Property and equipment, net | 6,049 | 6,315 | 6,290 | USD millions | Reported; at cost less accumulated depreciation and amortization | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Goodwill | 10,691 | 11,198 | 11,641 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Other intangible assets, net | 1,397 | 1,348 | 1,226 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Total Assets | 28,936 | 29,677 | 31,592 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Current portion of long-term debt | 92 | 79 | 164 | USD millions | Reported; debt at carrying value | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Accounts payable | 1,294 | 1,360 | 1,387 | USD millions | Reported; includes book overdrafts of 143, 161 and 165 USD millions at the three dates | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Accrued compensation and benefits | 899 | 858 | 873 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Professional and general liability reserves (current) | 238 | 276 | 317 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Accrued interest payable | 149 | 81 | 213 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Liabilities held for sale | 13 | Not supplied: the filing prints a dash for this period | Not supplied: the line is not presented in this filing | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Income tax payable | 18 | Not supplied: the filing prints a dash for this period | 22 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Other current liabilities | 1,607 | 1,809 | 2,342 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Total current liabilities | 4,310 | 4,463 | 5,318 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Long-term debt, net of current portion | 13,081 | 13,092 | 13,079 | USD millions | Reported; debt at carrying value | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Professional and general liability reserves (long-term) | 900 | 951 | 979 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Defined benefit plan obligations | 298 | 245 | 238 | USD millions | Reported; outside Total Debt | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Deferred income taxes (liability) | 227 | 240 | 529 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Other long-term liabilities | 1,573 | 1,713 | 1,855 | USD millions | Reported; includes long-term operating lease liabilities | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Total Liabilities | 20,389 | 20,704 | 21,998 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Temporary Equity | 2,727 | 2,956 | 2,179 | USD millions | Reported; redeemable noncontrolling interests in equity of consolidated subsidiaries | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Common stock | 8 | 8 | 8 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Additional paid-in capital | 4,873 | 4,914 | 5,236 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Accumulated other comprehensive loss | -180 | -181 | -178 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Retained earnings | 3,008 | 4,415 | 6,943 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Common stock in treasury, at cost | -3,538 | -4,936 | -6,565 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Total shareholders' equity | 4,171 | 4,220 | 5,444 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Noncontrolling interests | 1,649 | 1,797 | 1,971 | USD millions | Reported | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Total Equity | 5,820 | 6,017 | 7,415 | USD millions | Reported; shareholders' equity plus noncontrolling interests, excluding the redeemable interests above | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Total Debt | 13,173 | 13,171 | 13,243 | USD millions | Calculated: current portion of long-term debt plus long-term debt, net of current portion; carrying value net of issuance costs and discounts; includes finance leases, mortgages and other notes | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2025 Credit Agreement revolving credit facility | Senior secured revolving credit facility, asset-based | Not supplied: no cash borrowings are outstanding and no carrying value is stated | 0 | 0 | 1,900 | First-priority lien on accounts receivable and inventory; guaranteed by certain domestic wholly owned subsidiaries | Senior secured; effectively senior to the notes as to its collateral | USD | 0 | Not applicable | Term SOFR, Daily Simple SOFR or EURIBOR plus 1.25% to 1.50%; commitment fee 0.25% | Floating | Term SOFR, Daily Simple SOFR or EURIBOR | 125 to 150 | Not supplied: no floor stated | 2030-11-04 scheduled, earlier if a springing condition applies | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 13; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 146–147 |
| 4.625% senior secured first lien notes due 2028 | Senior secured first lien notes | Not supplied: carrying value by note is not disclosed | 600 | Not applicable | Not applicable | Guaranteed by certain wholly owned domestic hospital subsidiaries; first lien on a pledge of those subsidiaries' capital stock | Senior secured; ranks equally with other senior secured debt; effectively junior to the revolver as to its collateral | USD | 600 | Not applicable | 4.625% | Fixed | Not applicable | Not applicable | Not applicable | 2028 | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 145–146 |
| 4.250% senior secured first lien notes due 2029 | Senior secured first lien notes | Not supplied: carrying value by note is not disclosed | 1,400 | Not applicable | Not applicable | Guaranteed by certain wholly owned domestic hospital subsidiaries; first lien on a pledge of those subsidiaries' capital stock | Senior secured; ranks equally with other senior secured debt; effectively junior to the revolver as to its collateral | USD | 1,400 | Not applicable | 4.250% | Fixed | Not applicable | Not applicable | Not applicable | 2029 | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 145–146 |
| 4.375% senior secured first lien notes due 2030 | Senior secured first lien notes | Not supplied: carrying value by note is not disclosed | 1,450 | Not applicable | Not applicable | Guaranteed by certain wholly owned domestic hospital subsidiaries; first lien on a pledge of those subsidiaries' capital stock | Senior secured; ranks equally with other senior secured debt; effectively junior to the revolver as to its collateral | USD | 1,450 | Not applicable | 4.375% | Fixed | Not applicable | Not applicable | Not applicable | 2030 | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 145–146 |
| 6.125% senior secured first lien notes due 2030 | Senior secured first lien notes | Not supplied: carrying value by note is not disclosed | 2,000 | Not applicable | Not applicable | Guaranteed by certain wholly owned domestic hospital subsidiaries; first lien on a pledge of those subsidiaries' capital stock | Senior secured; ranks equally with other senior secured debt; effectively junior to the revolver as to its collateral | USD | 2,000 | Not applicable | 6.125% | Fixed | Not applicable | Not applicable | Not applicable | 2030 | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 145–146 |
| 6.750% senior secured first lien notes due 2031 | Senior secured first lien notes | Not supplied: carrying value by note is not disclosed | 1,350 | Not applicable | Not applicable | Guaranteed by certain wholly owned domestic hospital subsidiaries; first lien on a pledge of those subsidiaries' capital stock | Senior secured; ranks equally with other senior secured debt; effectively junior to the revolver as to its collateral | USD | 1,350 | Not applicable | 6.750% | Fixed | Not applicable | Not applicable | Not applicable | 2031 | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 145–146 |
| 5.500% senior secured first lien notes due 2032 | Senior secured first lien notes | Not supplied: carrying value by note is not disclosed | 1,500 | Not applicable | Not applicable | Guaranteed by certain wholly owned domestic hospital subsidiaries; first lien on a pledge of those subsidiaries' capital stock | Senior secured; ranks equally with other senior secured debt; effectively junior to the revolver as to its collateral | USD | 1,500 | Not applicable | 5.500% | Fixed | Not applicable | Not applicable | Not applicable | 2032 | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 145–146 |
| 6.125% senior unsecured notes due 2028 | Senior unsecured notes | Not supplied: carrying value by note is not disclosed | 1,250 | Not applicable | Not applicable | Unsecured | Senior unsecured; effectively junior to secured debt and the revolver to the extent of collateral | USD | 1,250 | Not applicable | 6.125% | Fixed | Not applicable | Not applicable | Not applicable | 2028 | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 145–146 |
| 6.875% senior unsecured notes due 2031 | Senior unsecured notes | Not supplied: carrying value by note is not disclosed | 362 | Not applicable | Not applicable | Unsecured | Senior unsecured; effectively junior to secured debt and the revolver to the extent of collateral | USD | 362 | Not applicable | 6.875% | Fixed | Not applicable | Not applicable | Not applicable | 2031 | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 145–146 |
| 6.000% senior unsecured notes due 2033 | Senior unsecured notes | Not supplied: carrying value by note is not disclosed | 750 | Not applicable | Not applicable | Unsecured | Senior unsecured; effectively junior to secured debt and the revolver to the extent of collateral | USD | 750 | Not applicable | 6.000% | Fixed | Not applicable | Not applicable | Not applicable | 2033 | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 145–146 |
| 6.250% senior unsecured notes due 2034 | Senior unsecured notes | Not supplied: carrying value by note is not disclosed | 2,000 | Not applicable | Not applicable | Unsecured | Senior unsecured; effectively junior to secured debt and the revolver to the extent of collateral | USD | 2,000 | Not applicable | 6.250% | Fixed | Not applicable | Not applicable | Not applicable | 2034 | 0 | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 145–146 |
| Finance leases, mortgages and other notes | Finance leases, mortgages and other notes | 679 | Not supplied: no principal is printed for this line in the quarterly report | Not applicable | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 679 | Not applicable | Not supplied: rates are not stated | Not supplied: rate type is not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: maturities are not stated in the quarterly report | Not supplied: amortisation is not stated | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12 |
| Financing cost adjustment | Unamortized issue costs and note discounts | -98 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -98 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 12 |

The Reporting Currency Amount cells add to 13,243 USD millions, which is Total Debt at 2026-09-30. All instruments are in USD, so no conversion applies.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 4,371m | USD 5,208m | USD 3,287m | USD 6,292m | Calculated | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | Derived from operating income plus depreciation and amortization; includes 1,472 USD millions of contract termination revenue in the 2026 stub |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 4,566m | USD 3,821m | USD 3,383m | USD 5,004m | Calculated | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | Issuer-adjusted; consolidated, including the share earned for noncontrolling interests |
| Cash Interest Paid | LTM to 2026-09-30 | USD 865m | USD 464m | USD 499m | USD 830m | Calculated | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | Interest paid, net of capitalized interest |
| Net operating revenues | LTM to 2026-09-30 | USD 21,310m | USD 16,627m | USD 15,783m | USD 22,154m | Calculated | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | Excludes revenue from contract termination |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 3,540m | USD 3,507m | USD 2,809m | USD 4,238m | Calculated | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | The 2026 stub includes contract termination payments received of 540 USD millions |
| Purchases of property and equipment | LTM to 2026-09-30 | USD 1,010m | USD 546m | USD 646m | USD 910m | Calculated | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | Total capital expenditure written as a positive outflow |
| Free cash flow (operating cash flow less purchases of property and equipment) | LTM to 2026-09-30 | USD 2,530m | USD 2,961m | USD 2,163m | USD 3,328m | Calculated | 10-K_2025-12-31_thc-20251231.htm.jsonl; 10-Q_2026-09-30_thc-20260930.htm.jsonl | Components are each period's operating cash flow less purchases of property and equipment: 3,540 less 1,010; 3,507 less 546; 2,809 less 646 |

The LTM figures equal the latest full year plus the nine-month stub minus the prior-year nine-month stub; each component is a reported or derived period, none is estimated. Quarters Q1 and Q2 2026 are not needed because nine-month figures are printed.

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1.94 | 1.50 | x | Ratios on EBITDA (Reported), derived as operating income plus depreciation and amortization, on balance-sheet carrying value of debt; FY2024 includes a gain on facility sales of 2,916 USD millions; ratios on issuer-adjusted EBITDA are 3.30x total and 2.54x net, in the calculation register |
| FY2025 / 2025-12-31 | 3.01 | 2.35 | x | Ratios on EBITDA (Reported), derived as operating income plus depreciation and amortization, on balance-sheet carrying value of debt; ratios on issuer-adjusted EBITDA are 2.88x total and 2.25x net, in the calculation register |
| 2026-09-30 | 2.10 | 1.68 | x | Ratios on EBITDA (Reported), derived as operating income plus depreciation and amortization, on balance-sheet carrying value of debt; last twelve months to 2026-09-30, including 1,472 USD millions of contract termination revenue in 2026; ratios on issuer-adjusted EBITDA are 2.65x total and 2.11x net, in the calculation register |

Reported EBITDA includes one-off items the issuer excludes from Adjusted EBITDA, so the adjusted ratios in the calculation register are the better guide to recurring leverage.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 7.96 | x | EBITDA (Reported) over cash interest paid; fiscal years use the year's interest paid and 2026-09-30 uses last twelve months; adjusted cover is 4.69x in the calculation register |
| FY2025 / 2025-12-31 | 5.05 | x | EBITDA (Reported) over cash interest paid; fiscal years use the year's interest paid and 2026-09-30 uses last twelve months; adjusted cover is 5.28x in the calculation register |
| 2026-09-30 | 7.58 | x | EBITDA (Reported) over cash interest paid; fiscal years use the year's interest paid and 2026-09-30 uses last twelve months; adjusted cover is 6.03x in the calculation register |

Cash interest paid is a cash figure and differs from the interest expense of 821 USD millions in FY2025, so cover on expense would be lower.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 3,019 | Not supplied: the sources state revolver availability at 2025-12-31 and later, not at 2024-12-31 | US$m | Cash and cash equivalents; 110 USD millions was intended for insurance-related subsidiaries |
| FY2025 / 2025-12-31 | 2,883 | 1,900 | US$m | Cash and cash equivalents, of which 108 USD millions was intended for insurance-related subsidiaries; undrawn is borrowing availability under the 2025 Credit Agreement, no cash borrowings and less than 1 USD million of letters of credit; the 200 USD millions letter of credit facility is excluded |
| 2026-09-30 | 2,674 | 1,900 | US$m | Cash and cash equivalents, of which 76 USD millions is intended for insurance-related subsidiaries; undrawn is borrowing availability under the revolver, subject to the borrowing base; the letter of credit facility of 200 USD millions, with 105 outstanding, is excluded |

Revolver availability depends on a borrowing base of eligible receivables, inventory and Medicaid supplemental payments, and the executed credit agreement was not supplied to test it.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 79 | US$m | Principal due by year at 2025-12-31, including finance lease obligations, as printed in the annual report |
| FY2027 | 1,628 | US$m | Principal due by year at 2025-12-31, including finance lease obligations, as printed in the annual report |
| FY2028 | 2,402 | US$m | Principal due by year at 2025-12-31, including finance lease obligations, as printed in the annual report |
| FY2029 | 1,438 | US$m | Principal due by year at 2025-12-31, including finance lease obligations, as printed in the annual report |
| FY2030 | 3,465 | US$m | Principal due by year at 2025-12-31, including finance lease obligations, as printed in the annual report |
| Later years | 4,253 | US$m | Principal due by year at 2025-12-31, including finance lease obligations, as printed in the annual report |

The ladder is drawn at 2025-12-31; the September 2026 refinancing removed 1,500 USD millions due in 2027 and 500 USD millions due in 2028 and added 2,000 USD millions due in 2034, and no updated ladder is printed.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Net operating revenues | 20,675 | 21,310 | 22,154 | USD millions | Reported; LTM is FY2025 plus nine months 2026 less nine months 2025; excludes revenue from contract termination | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 118–119; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| EBITDA (Reported) | 6,774 | 4,371 | 6,292 | USD millions | Calculated: operating income plus depreciation and amortization; includes one-off items | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| EBITDA (Adjusted) | 3,995 | 4,566 | 5,004 | USD millions | Issuer-reported, non-GAAP | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 174; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 24–25 |
| Cash interest paid | 851 | 865 | 830 | USD millions | Reported cash interest paid | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Net cash from operating activities | 2,047 | 3,540 | 4,238 | USD millions | Reported; LTM includes contract termination payments received of 540 USD millions | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Purchases of property and equipment | 931 | 1,010 | 910 | USD millions | Reported capital expenditure as a positive outflow | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Free cash flow | 1,116 | 2,530 | 3,328 | USD millions | Calculated: operating cash flow less purchases of property and equipment | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |
| Total debt | 13,173 | 13,171 | 13,243 | USD millions | Balance-sheet carrying value; LTM column is the balance at 2026-09-30 | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Cash and cash equivalents | 3,019 | 2,883 | 2,674 | USD millions | Reported; LTM column is the balance at 2026-09-30 | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Net debt | 10,154 | 10,288 | 10,569 | USD millions | Calculated: total debt less cash | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 2 |
| Net debt / EBITDA (Adjusted) | 2.54 | 2.25 | 2.11 | x | Calculated; the issuer states 2.25x and 2.11x for the last two dates | EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl, page 2 |
| Net debt / EBITDA (Reported) | 1.50 | 2.35 | 1.68 | x | Calculated on derived reported EBITDA | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 118; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 2–3 |
| EBITDA (Adjusted) / cash interest | 4.69 | 5.28 | 6.03 | x | Calculated | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 13,173 | 3,019 | 10,154 | US$m | Reported balance sheet; gross debt is carrying value, current plus long-term, and includes finance leases, mortgages and other notes; operating lease liabilities and pensions are outside it. Principal of notes 12,662 plus finance leases, mortgages and other notes 605 is 13,267 USD millions; carrying value is net of 94 USD millions of issuance costs and discounts |
| FY2025 / 2025-12-31 | 13,171 | 2,883 | 10,288 | US$m | Reported balance sheet; gross debt is carrying value, current plus long-term, and includes finance leases, mortgages and other notes; operating lease liabilities and pensions are outside it. Principal of notes 12,662 plus finance leases, mortgages and other notes 603 is 13,265 USD millions, matching the maturity ladder; carrying value is net of 94 USD millions of issuance costs and discounts |
| 2026-09-30 | 13,243 | 2,674 | 10,569 | US$m | Reported balance sheet; gross debt is carrying value, current plus long-term, and includes finance leases, mortgages and other notes; operating lease liabilities and pensions are outside it. Principal of notes 12,662 plus finance leases, mortgages and other notes 679 is 13,341 USD millions; carrying value is net of 98 USD millions of issuance costs and discounts |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 13,265 | -94 | 13,171 | US$m | Contractual principal is the sum of the maturity ladder, including finance lease obligations; the reconciling item is unamortized issue costs and note discounts of 94 USD millions; no debt is left out of the ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | Sources read: the annual report, the three 2026 quarterly reports and the three 2026 earnings releases, to the cutoff of 2026-11-05; the 2026-01-27 agreement with CommonSpirit and the September 2026 refinancing fall before the latest balance sheet date of 2026-09-30 and are already in it, and the 2026-10-30 transition date carries no stated net debt amount |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 20,675 | 3,995 | US$m | Net operating revenues; Adjusted EBITDA is the issuer-adjusted measure for the year |
| FY2025 / 2025-12-31 | 21,310 | 4,566 | US$m | Net operating revenues; Adjusted EBITDA is the issuer-adjusted measure for the year |
| 2026-09-30 | 22,154 | 5,004 | US$m | Last twelve months: FY2025 plus nine months 2026 less nine months 2025; Adjusted EBITDA is issuer-adjusted; revenue excludes revenue from contract termination |

All three rows cover twelve months, but the last includes 233 USD millions of timing-related catch-up in third quarter 2026 revenue from contract termination, outside these figures, and 147 USD millions of net favorable transition benefit inside Adjusted EBITDA.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| 2025 Credit Agreement revolving credit facility | 1 | Yes | 0 | 0.00 | US$m | Drawn amount, no cash borrowings at 2026-09-30; commitment 1,900 USD millions subject to a borrowing base; guaranteed by certain domestic wholly owned subsidiaries and secured on receivables and inventory; cumulative leverage on principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |
| 4.625% senior secured first lien notes due 2028 | 2 | Yes | 600 | 1.66 | US$m | Principal, carrying value by note not disclosed; guaranteed by certain wholly owned domestic hospital subsidiaries and secured by a first lien on a pledge of their capital stock; cumulative leverage is for the whole rank, 8,300 USD millions of principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |
| 4.250% senior secured first lien notes due 2029 | 2 | Yes | 1,400 | 1.66 | US$m | Principal, carrying value by note not disclosed; guaranteed by certain wholly owned domestic hospital subsidiaries and secured by a first lien on a pledge of their capital stock; cumulative leverage is for the whole rank, 8,300 USD millions of principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |
| 4.375% senior secured first lien notes due 2030 | 2 | Yes | 1,450 | 1.66 | US$m | Principal, carrying value by note not disclosed; guaranteed by certain wholly owned domestic hospital subsidiaries and secured by a first lien on a pledge of their capital stock; cumulative leverage is for the whole rank, 8,300 USD millions of principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |
| 6.125% senior secured first lien notes due 2030 | 2 | Yes | 2,000 | 1.66 | US$m | Principal, carrying value by note not disclosed; guaranteed by certain wholly owned domestic hospital subsidiaries and secured by a first lien on a pledge of their capital stock; cumulative leverage is for the whole rank, 8,300 USD millions of principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |
| 6.750% senior secured first lien notes due 2031 | 2 | Yes | 1,350 | 1.66 | US$m | Principal, carrying value by note not disclosed; guaranteed by certain wholly owned domestic hospital subsidiaries and secured by a first lien on a pledge of their capital stock; cumulative leverage is for the whole rank, 8,300 USD millions of principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |
| 5.500% senior secured first lien notes due 2032 | 2 | Yes | 1,500 | 1.66 | US$m | Principal, carrying value by note not disclosed; guaranteed by certain wholly owned domestic hospital subsidiaries and secured by a first lien on a pledge of their capital stock; cumulative leverage is for the whole rank, 8,300 USD millions of principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |
| 6.125% senior unsecured notes due 2028 | 3 | No | 1,250 | 2.53 | US$m | Principal; obligor is Tenet Healthcare Corporation and no guarantee is stated in the sources read; cumulative leverage is for the whole rank, 12,662 USD millions of principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |
| 6.875% senior unsecured notes due 2031 | 3 | No | 362 | 2.53 | US$m | Principal; obligor is Tenet Healthcare Corporation and no guarantee is stated in the sources read; cumulative leverage is for the whole rank, 12,662 USD millions of principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |
| 6.000% senior unsecured notes due 2033 | 3 | No | 750 | 2.53 | US$m | Principal; obligor is Tenet Healthcare Corporation and no guarantee is stated in the sources read; cumulative leverage is for the whole rank, 12,662 USD millions of principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |
| 6.250% senior unsecured notes due 2034 | 3 | No | 2,000 | 2.53 | US$m | Principal; obligor is Tenet Healthcare Corporation and no guarantee is stated in the sources read; cumulative leverage is for the whole rank, 12,662 USD millions of principal over last-twelve-month issuer-adjusted EBITDA of 5,004 USD millions |

Finance leases, mortgages and other notes of 679 USD millions are left out because no source states their legal rank, so the stack sums to 12,662 USD millions of principal rather than total debt.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), nine months 2026 | 5,208 | US$m | Opening amount: derived as operating income of 4,547 plus depreciation and amortization of 661; not issuer-stated |
| Revenue from contract termination | -1,472 | US$m | Removed by the issuer; classified as other stated; realisation not stated, since most of the 1,900 USD millions consideration is receivable in installments |
| Impairment and restructuring charges, and acquisition-related costs | 92 | US$m | Added back by the issuer; classified as restructuring and transaction costs; realisation not stated |
| Litigation and investigation costs | 36 | US$m | Added back by the issuer; classified as other stated; realisation not stated |
| Net gains on sales, consolidation and deconsolidation of facilities | -43 | US$m | Removed by the issuer; classified as other stated; realisation not stated |
| EBITDA (Adjusted), nine months 2026 | 3,821 | US$m | Closing amount: issuer-reported Adjusted EBITDA; the steps are the issuer's own reconciling items and no plug is used |

The bridge covers nine months 2026, not a full year, and the opening figure is derived here because the issuer prints no unadjusted EBITDA.

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 13,173 | Net debt data, gross debt | 6,774 | T4.4 EBITDA (Reported) | FY2024 / 2024-12-31 | USD | US$m | 1.94 | Calculated | Tier 1 (audited statements) | Reported EBITDA is derived and includes one-off items |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 10,154 | Net debt data, net debt | 6,774 | T4.4 EBITDA (Reported) | FY2024 / 2024-12-31 | USD | US$m | 1.50 | Calculated | Tier 1 (audited statements) | Reported EBITDA is derived and includes one-off items |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 6,774 | T4.4 EBITDA (Reported) | 851 | T4.5 Cash Interest Paid | FY2024 / 2024-12-31 | USD | US$m | 7.96 | Calculated | Tier 1 (audited statements) | Reported EBITDA is derived and includes one-off items |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 13,173 | Net debt data, gross debt | 3,995 | T4.4 EBITDA (Adjusted) | FY2024 / 2024-12-31 | USD | US$m | 3.30 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA is non-GAAP and consolidated |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 10,154 | Net debt data, net debt | 3,995 | T4.4 EBITDA (Adjusted) | FY2024 / 2024-12-31 | USD | US$m | 2.54 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA is non-GAAP and consolidated |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 3,995 | T4.4 EBITDA (Adjusted) | 851 | T4.5 Cash Interest Paid | FY2024 / 2024-12-31 | USD | US$m | 4.69 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA is non-GAAP and consolidated |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 13,171 | Net debt data, gross debt | 4,371 | T4.4 EBITDA (Reported) | FY2025 / 2025-12-31 | USD | US$m | 3.01 | Calculated | Tier 1 (audited statements) | Reported EBITDA is derived and includes one-off items |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 10,288 | Net debt data, net debt | 4,371 | T4.4 EBITDA (Reported) | FY2025 / 2025-12-31 | USD | US$m | 2.35 | Calculated | Tier 1 (audited statements) | Reported EBITDA is derived and includes one-off items |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 4,371 | T4.4 EBITDA (Reported) | 865 | T4.5 Cash Interest Paid | FY2025 / 2025-12-31 | USD | US$m | 5.05 | Calculated | Tier 1 (audited statements) | Reported EBITDA is derived and includes one-off items |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 13,171 | Net debt data, gross debt | 4,566 | T4.4 EBITDA (Adjusted) | FY2025 / 2025-12-31 | USD | US$m | 2.88 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA is non-GAAP and consolidated |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 10,288 | Net debt data, net debt | 4,566 | T4.4 EBITDA (Adjusted) | FY2025 / 2025-12-31 | USD | US$m | 2.25 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA is non-GAAP and consolidated |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 4,566 | T4.4 EBITDA (Adjusted) | 865 | T4.5 Cash Interest Paid | FY2025 / 2025-12-31 | USD | US$m | 5.28 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA is non-GAAP and consolidated |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 13,243 | Net debt data, gross debt | 6,292 | T4.8 EBITDA (Reported) LTM | 2026-09-30 | USD | US$m | 2.10 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Reported EBITDA is derived and includes one-off items |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 10,569 | Net debt data, net debt | 6,292 | T4.8 EBITDA (Reported) LTM | 2026-09-30 | USD | US$m | 1.68 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Reported EBITDA is derived and includes one-off items |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 6,292 | T4.8 EBITDA (Reported) LTM | 830 | T4.8 Cash Interest Paid LTM | 2026-09-30 | USD | US$m | 7.58 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Reported EBITDA is derived and includes one-off items |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 13,243 | Net debt data, gross debt | 5,004 | T4.8 EBITDA (Adjusted) LTM | 2026-09-30 | USD | US$m | 2.65 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Issuer-adjusted EBITDA is non-GAAP and consolidated |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 10,569 | Net debt data, net debt | 5,004 | T4.8 EBITDA (Adjusted) LTM | 2026-09-30 | USD | US$m | 2.11 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Issuer-adjusted EBITDA is non-GAAP and consolidated |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 5,004 | T4.8 EBITDA (Adjusted) LTM | 830 | T4.8 Cash Interest Paid LTM | 2026-09-30 | USD | US$m | 6.03 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Issuer-adjusted EBITDA is non-GAAP and consolidated |
| Adjusted EBITDA margin | EBITDA (Adjusted) / net operating revenues | 5,004 | T4.8 EBITDA (Adjusted) LTM | 22,154 | T4.8 Net operating revenues LTM | 2026-09-30 | USD | US$m | 0.2259 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Revenue excludes revenue from contract termination |
| Capital expenditure / revenue | Purchases of property and equipment / net operating revenues | 910 | T4.8 Purchases of property and equipment LTM | 22,154 | T4.8 Net operating revenues LTM | 2026-09-30 | USD | US$m | 0.0411 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Total capital expenditure only; no maintenance split disclosed |
| Operating cash flow / total debt | Net cash from operating activities / total debt | 4,238 | T4.8 Net Cash from Operating Activities LTM | 13,243 | T4.6 Total Debt at 2026-09-30 | 2026-09-30 | USD | US$m | 0.3200 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Operating cash flow includes contract termination payments received of 540 USD millions |
| Free cash flow / adjusted EBITDA | Free cash flow / EBITDA (Adjusted) | 3,328 | T4.8 free cash flow LTM | 5,004 | T4.8 EBITDA (Adjusted) LTM | 2026-09-30 | USD | US$m | 0.6651 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Free cash flow before distributions to noncontrolling interests and share repurchases |
| Cash interest cover after capital expenditure | EBITDA (Adjusted) less purchases of property and equipment, divided by cash interest paid | 4,094 | T4.8 EBITDA (Adjusted) LTM less purchases of property and equipment LTM | 830 | T4.8 Cash Interest Paid LTM | 2026-09-30 | USD | US$m | 4.93 | Calculated | Tier 2b (unaudited quarterly figures plus audited year) | Capital expenditure is total, not maintenance |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Profitability | Hospital segment Adjusted EBITDA margin (%, period-flow rate) | 15.1 | 19.2 | 16.1 | 18.0 | Improving | Issuer-reported; Q3 2026 includes a net favorable 147 USD millions from transition activities (EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl, page 2) |
| Profitability | Ambulatory segment Adjusted EBITDA margin (%, period-flow rate) | 38.6 | 39.2 | 38.7 | 38.3 | Broadly stable | Issuer-reported; nine-month margin is slightly lower than a year earlier |
| Volume | Same-hospital admissions change versus prior-year period (%) | 1.5 | 2.8 | 2.5 | 1.8 | Mixed | Issuer-reported change, not a level |
| Volume | Same-hospital adjusted admissions change versus prior-year period (%) | 1.4 | 3.2 | 1.6 | 2.1 | Improving | Issuer-reported change, not a level |
| Volume | Ambulatory same-facility system-wide surgical cases change versus prior-year period (%) | 2.1 | -1.5 | -0.2 | -0.8 | Declining | Issuer-reported change; cases fell while revenue per case rose 6.1% in Q3 2026 |
| Revenue | Ambulatory same-facility system-wide net patient service revenue change versus prior-year period (%) | 8.3 | 4.5 | 7.5 | 5.1 | Slowing | Issuer-reported change, driven by revenue per case |
| Profitability | Ambulatory Adjusted EBITDA less noncontrolling interests (USD millions, period flow) | 292 | 327 | 874 | 948 | Improving | Issuer-reported; the difference to segment Adjusted EBITDA is the minority holders' share |

These operating indicators are issuer-reported rates and changes from the latest release; each is period-flow, and none is joined across a change of definition.
Basis: EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl, pages 2–3

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Unadjusted EBITDA: operating income plus depreciation and amortization | Adjusted EBITDA: excludes contract termination revenue, impairment, restructuring, litigation, facility sale gains and losses, interest and other non-operating items | 10-K_2025-12-31_thc-20251231.htm.jsonl, page 174; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 24–25 | All periods | High: LTM reported 6,292 against adjusted 5,004 USD millions, a difference of 1,288 (calculation CALC-12); in FY2024 reported exceeds adjusted by 2,779 because of a 2,916 USD millions facility sale gain | All leverage and cover ratios | Both are carried; reported ratios are in the chart tables and adjusted ratios in the register, labelled; the adjusted ratio is the better guide to recurring leverage |
| Total debt | Balance-sheet carrying value, current plus long-term, net of issuance costs | Total long-term debt of 13,243 USD millions at carrying value; aggregate principal of notes 12.662 billion USD | 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 12–13 | 2024-12-31; 2025-12-31; 2026-09-30 | Low: carrying value is 98 USD millions below principal including finance leases and other notes at 2026-09-30 | Leverage | Carrying value is used; principal is logged beside it in the net debt table |
| Net debt / Adjusted EBITDA | Net debt at carrying value over adjusted EBITDA | Issuer ratio of net debt to Adjusted EBITDA of 2.11x at 2026-09-30, 2.33x at 2026-06-30 and 2.25x at 2025-12-31 | EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl, page 2 | 2025-12-31; 2026-09-30 | None: the calculated 2.25x and 2.11x equal the issuer's | Leverage | No conflict across the two dates; the 2026-06-30 ratio is not recomputed because that balance sheet is not used |
| Leases | Lease liabilities the issuer presents on their own lines stay outside Total Debt; leases carried inside debt lines stay in | Finance lease liabilities of 452 USD millions at 2025-12-31 sit inside debt; operating lease liabilities of 1,257 USD millions sit in other liabilities | 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 142–143 | 2025-12-31 | Medium: operating leases are 1,257 USD millions, about 9.5% of carrying debt, outside net debt | Leverage, coverage | Operating leases stay outside Total Debt as the method states; lease-adjusted leverage is not computed |
| Noncontrolling interests | Consolidated EBITDA and net debt as reported | Adjusted EBITDA is consolidated and includes the share belonging to noncontrolling interests; the issuer also states Adjusted EBITDA less noncontrolling interests for the Ambulatory segment only | EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl, pages 3 and 4 | FY2026 and nine months 2026 | High: the Ambulatory minority share of Adjusted EBITDA is 615 USD millions for nine months 2026 (calculation CALC-24) and distributions to noncontrolling interests were 614 USD millions | All leverage and cover ratios | Consolidated figures are used throughout; leverage on EBITDA after minorities is not established because the Hospital segment's minority share is not printed for the period |
| Cash | Cash and cash equivalents | Cash includes 76 USD millions intended for insurance-related subsidiaries; book overdrafts of 165 USD millions are in accounts payable | 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 8 | 2026-09-30 | Low | Net debt | Full cash is used; the two items are shown in the Basis and limitation cells |
| Operating cash flow and free cash flow | Net cash from operating activities less purchases of property and equipment | Issuer free cash flow equals that definition; adjusted operating cash flow also removes restructuring and litigation payments and 540 USD millions of cash received for contract termination | EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl, pages 9 and 14 | 9M 2026 | Medium: adjusted operating cash flow is 3,070 USD millions against reported 3,507 for nine months 2026 | Cash flow quality, leverage | Reported figures are used; the 540 USD millions is a set-off against the Conifer redemption rather than free cash, shown as a financing outflow in purchases of noncontrolling interests |
| Contract termination revenue | Operating revenue recognised under the contract | Present value of the 1,900 USD millions consideration, recognised as revenue from contract termination of 1,472 USD millions in nine months 2026; outside net operating revenues and Adjusted EBITDA | 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 5 and 17; EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl, page 8 | Q3 2026; 9M 2026 | High: included in operating income and derived reported EBITDA, excluded from adjusted; most of the consideration is a receivable payable in annual installments over three years | All reported-basis ratios | Excluded from the adjusted measures; the 1,360 USD millions still to be paid is not netted against debt (calculation CALC-22) |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and interest cover from reported statements | Ready with Limitations | Reported EBITDA is derived and includes one-off items; adjusted ratios are the better guide; consolidated figures include minority interests | Read both identities, labelled, and prefer the adjusted ratios |
| Liquidity | Ready with Limitations | Undrawn facilities at 2024-12-31 not stated; revolver subject to a borrowing base; executed agreement not supplied | Obtain the executed credit agreement before relying on availability in stress cases |
| Debt maturities and refinancing | Ready with Limitations | The maturity ladder is drawn at 2025-12-31 and the September 2026 refinancing is not reflected; no later ladder is printed | Use the instrument table at 2026-09-30 for notes and treat other debt maturities as not established |
| Segment and operating analysis | Ready | Segment figures sum to the consolidated totals; operating indicators come from the latest release only | None |
| Covenant and legal analysis | Not Ready | No executed indenture or credit agreement was supplied; covenant terms are known only from the issuer's summaries | Supply the executed documents |

### Leverage and coverage

On the issuer's adjusted EBITDA, net debt leverage fell from 2.54x at 2024-12-31 to 2.25x at 2025-12-31 and 2.11x at 2026-09-30 because last-twelve-month adjusted EBITDA rose from USD 4,566 million to USD 5,004 million while net debt rose only from USD 10,288 million to USD 10,569 million. The reported-basis ratio of 1.68x is not a better guide: it is lower only because reported EBITDA of USD 6,292 million includes USD 1,472 million of contract termination revenue in nine months 2026, which does not recur and is mostly a receivable, so creditors should anchor on the adjusted ratio. Collection of the remaining USD 1,360 million of the CommonSpirit consideration over three years would lower net debt and is the main thing that would improve this view, while a fall in adjusted EBITDA would reverse it quickly because debt is fixed-rate and long-dated.
Basis: 10-K_2025-12-31_thc-20251231.htm.jsonl, page 174; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 24–25; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 5; calculation CALC-03; calculation CALC-11; calculation CALC-22

Adjusted EBITDA covered cash interest paid 6.03 times in the last twelve months, against 5.28 times in FY2025 and 4.69 times in FY2024, as cash interest paid fell from USD 865 million to USD 830 million. The September 2026 refinancing moved USD 2,000 million into 6.25% notes due 2034 from a 5.125% secured note and part of a 6.125% unsecured note, so interest per dollar of debt rises slightly while the 2027 secured maturity disappears; the first coupon on the new notes is due 2027-03-15.
Basis: 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 120–121; 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 13; calculation CALC-12

### Cash flow quality

Operating cash flow of USD 4,238 million for the last twelve months overstates recurring cash generation because nine months 2026 includes USD 540 million of contract termination consideration that was set off against the USD 540 million Conifer paid to redeem CommonSpirit's interest, so the cash never reached the bank; the issuer's own adjusted operating cash flow for nine months 2026 is USD 3,070 million against USD 3,507 million reported. Free cash flow of USD 3,328 million is also before distributions of USD 614 million to noncontrolling interests, share repurchases of USD 1,615 million and purchases of noncontrolling interests of USD 583 million in nine months 2026, which is why cash fell by USD 209 million over the nine months and net debt rose modestly.
Basis: 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_thc-20260930.htm.jsonl, page 33; EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl, page 14; calculation CALC-16

### Liquidity and maturities

Liquidity is ample at USD 2,674 million of cash plus USD 1,900 million of undrawn revolver availability, against USD 164 million of debt due within a year, so no near-term refinancing pressure is visible. The nearest large maturities are in 2028 and 2030, and the September 2026 refinancing removed the 2027 secured notes; the maturity ladder in the sources is drawn at 2025-12-31 with USD 1,628 million in 2027 and USD 2,402 million in 2028, so the current wall is not established. The revolver terminates early if a large series of 2027 to 2030 secured or 2028 unsecured notes is not refinanced, and although no single series in the instrument table exceeds the USD 2,500 million threshold, the executed agreement was not supplied to confirm that reading.
Basis: 10-Q_2026-09-30_thc-20260930.htm.jsonl, pages 12–13; 10-K_2025-12-31_thc-20251231.htm.jsonl, pages 146–147; 10-K_2025-12-31_thc-20251231.htm.jsonl, page 149

### Data and definition risks

Three definition issues change how the ratios should be used: reported EBITDA is derived because the issuer prints none and it carries one-off items; Adjusted EBITDA is consolidated and includes USD 615 million of Ambulatory profit for nine months 2026 that belongs to minority holders, with FY2026 distributions to them guided at USD 900 million to USD 970 million; and third quarter 2026 Adjusted EBITDA includes a net favorable USD 147 million from revenue cycle transition activities that the issuer describes as timing-related. Together these mean consolidated adjusted leverage of 2.11x probably understates leverage on cash flow available to Tenet's creditors, which is a conclusion for the leverage analysis to test, not one this module draws.
Basis: EX-99.1_2026-10-29_thc-20260930ex991earningsr.htm.jsonl, pages 2–4; calculation CALC-24

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 26 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 6 |
| Fields present | 19 |
| Fields total | 20 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 6 |

## Calculations

| ID | Calculation | Formula | Inputs | Result | Unit |
| --- | --- | --- | --- | --- | --- |
| CALC-01 | Net debt at 2024-12-31 | Gross debt less cash | 13,173 less 3,019 | 10,154 | USD millions |
| CALC-02 | Net debt at 2025-12-31 | Gross debt less cash | 13,171 less 2,883 | 10,288 | USD millions |
| CALC-03 | Net debt at 2026-09-30 | Gross debt less cash | 13,243 less 2,674 | 10,569 | USD millions |
| CALC-04 | EBITDA (Reported) FY2024 | Operating income plus depreciation and amortization | 5,956 plus 818 | 6,774 | USD millions |
| CALC-05 | Net debt over Adjusted EBITDA at 2026-09-30 | Net debt / LTM EBITDA (Adjusted) | 10,569 / 5,004 | 2.11 | x |
| CALC-06 | EBITDA (Reported) FY2025 | Operating income plus depreciation and amortization | 3,508 plus 863 | 4,371 | USD millions |
| CALC-07 | EBITDA (Reported) Q3 2025 | Operating income plus depreciation and amortization | 889 plus 218 | 1,107 | USD millions |
| CALC-08 | EBITDA (Reported) Q3 2026 | Operating income plus depreciation and amortization | 1,750 plus 217 | 1,967 | USD millions |
| CALC-09 | EBITDA (Reported) 9M 2025 | Operating income plus depreciation and amortization | 2,655 plus 632 | 3,287 | USD millions |
| CALC-10 | EBITDA (Reported) 9M 2026 | Operating income plus depreciation and amortization | 4,547 plus 661 | 5,208 | USD millions |
| CALC-11 | LTM EBITDA (Adjusted) to 2026-09-30 | FY2025 plus 9M 2026 less 9M 2025 | 4,566 plus 3,821 less 3,383 | 5,004 | USD millions |
| CALC-12 | LTM EBITDA (Reported) to 2026-09-30, and its difference from Adjusted | FY2025 plus 9M 2026 less 9M 2025 | 4,371 plus 5,208 less 3,287 = 6,292; 6,292 less 5,004 = 1,288 | 6,292 | USD millions |
| CALC-13 | LTM cash interest paid to 2026-09-30 | FY2025 plus 9M 2026 less 9M 2025 | 865 plus 464 less 499 | 830 | USD millions |
| CALC-14 | LTM net operating revenues to 2026-09-30 | FY2025 plus 9M 2026 less 9M 2025 | 21,310 plus 16,627 less 15,783 | 22,154 | USD millions |
| CALC-15 | LTM net cash from operating activities to 2026-09-30 | FY2025 plus 9M 2026 less 9M 2025 | 3,540 plus 3,507 less 2,809 | 4,238 | USD millions |
| CALC-16 | LTM free cash flow to 2026-09-30 | LTM operating cash flow less LTM purchases of property and equipment (1,010 plus 546 less 646 = 910) | 4,238 less 910 | 3,328 | USD millions |
| CALC-17 | Free cash flow FY2024 and FY2025 | Operating cash flow less purchases of property and equipment | 2,047 less 931 = 1,116; 3,540 less 1,010 = 2,530 | 1,116; 2,530 | USD millions |
| CALC-18 | Maturity ladder total at 2025-12-31 | Sum of the years | 79 plus 1,628 plus 2,402 plus 1,438 plus 3,465 plus 4,253 | 13,265 | USD millions |
| CALC-19 | Reconciling items, principal to carrying value at 2025-12-31 | Carrying value less principal | 13,171 less 13,265 | -94 | USD millions |
| CALC-20 | Debt instruments to Total Debt at 2026-09-30 | Revolver 0 plus notes 12,662 plus finance leases, mortgages and other notes 679 less issuance costs 98 | 0 plus 12,662 plus 679 less 98 | 13,243 | USD millions |
| CALC-21 | Principal at 2026-09-30 | Notes plus finance leases, mortgages and other notes | 12,662 plus 679 | 13,341 | USD millions |
| CALC-22 | CommonSpirit consideration still to be paid | Aggregate payment less amount set off on 2026-01-27 | 1,900 less 540 | 1,360 | USD millions |
| CALC-23 | Nine-month 2026 EBITDA bridge | Reported plus signed adjustments | 5,208 less 1,472 plus 92 plus 36 less 43 | 3,821 | USD millions |
| CALC-24 | Ambulatory minority share of Adjusted EBITDA, 9M 2026 | Segment Adjusted EBITDA less Adjusted EBITDA less noncontrolling interests | 1,563 less 948 | 615 | USD millions |
| CALC-25 | Debt stack cumulative principal by rank at 2026-09-30 | Secured notes; then plus unsecured notes | 600 plus 1,400 plus 1,450 plus 2,000 plus 1,350 plus 1,500 = 8,300; plus 1,250 plus 362 plus 750 plus 2,000 = 12,662 | 8,300; 12,662 | USD millions |

The leverage, cover and margin ratios are worked in the calculation register, each with its numerator, denominator and source, and the statements tie: assets equal liabilities plus redeemable interests plus equity at all three balance sheet dates, the three cash flow activities sum to the net change in cash, and opening cash plus the change equals closing cash in every column.

## Gaps

- Reported EBITDA is derived because the issuer prints no unadjusted EBITDA; it includes contract termination revenue and the other items the issuer excludes, so reported-basis ratios understate recurring leverage; severity Medium; the action is to rely on the adjusted ratios until an issuer reconciliation from reported earnings is supplied.
- The maturity ladder is drawn at 2025-12-31 and no later ladder is printed, so the maturity wall after the September 2026 refinancing is not established for the finance lease and other note lines; severity Medium; the action is to obtain the maturity schedule from the next annual report.
- The Hospital segment's share of Adjusted EBITDA belonging to noncontrolling interests is not printed for nine months 2026, so consolidated Adjusted EBITDA less noncontrolling interests is not established; severity Medium; the action is to use the issuer's supplemental disclosure, which was not supplied.
- No executed indenture or credit agreement was supplied, so covenant terms, the springing maturity of the revolver and guarantor scope for the unsecured notes rest on the issuer's summaries; severity Medium; the action is to supply the executed documents.
- Undrawn committed facilities at 2024-12-31 are not stated in the sources read, which restricts the FY2024 liquidity row only; severity Low; the action is to read the prior-year annual report.
- The legal rank and security of finance leases, mortgages and other notes of USD 679 million at 2026-09-30 are not stated, so they are left out of the debt stack and the secured and unsecured subtotals; severity Low; the action is to read the executed documents or lease schedules.
- Several lines print a dash for a period, namely revenue from contract termination in Q3 2025 and nine months 2025, loss from early extinguishment of debt in Q3 2025 and nine months 2025, debt issuance costs in FY2024 and nine months 2025, advances from managed care payers in FY2025, repayments of those advances in nine months 2026, and liabilities held for sale and income tax payable in FY2025; each is carried as not supplied rather than zero, and none changes a ratio; severity Low; no action is needed.
- Some lines are not presented in every filing, namely revenue from contract termination in the annual report, net gains from the sale of investments and long-lived assets and advances from managed care payers in the quarterly cash flow statement, and liabilities held for sale in the latest balance sheet; they are carried as not supplied and restrict no ratio; severity Low; no action is needed.
- A stand-alone third quarter 2026 cash flow statement is not printed because the quarterly report gives nine months only, so only cumulative cash flow columns are stated; severity Low; the action is to difference the six-month and nine-month reports if a quarterly series is needed.
- No filing or release dated after 2026-10-29 was supplied although the cutoff is 2026-11-05, so net debt events between those dates are not established; severity Low; the action is to check for later current reports.
- The current report dated 2026-02-02 on the CommonSpirit agreement was not supplied, so the consideration is read from the annual report, quarterly report and release only; severity Low; the action is to supply it.

## Next module

The orchestrator selects the next module.
