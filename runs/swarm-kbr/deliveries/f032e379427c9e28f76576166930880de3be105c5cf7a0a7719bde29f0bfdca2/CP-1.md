---
issuer_id: kbr
module_id: CP-1
analysis_date: 2026-11-05
run_id: kbr-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
evidence_class: full_run
---

# KBR, INC. - Financial foundation as of 2026-11-05

## Request

KBR, INC. (issuer id kbr), as of 2026-11-05, credit snapshot pathway. The scope is the financial foundation: statements, debt, liquidity, leverage and coverage for fiscal 2024, fiscal 2025 and the periods to 2026-10-02, on the pre-separation consolidated group.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2026-01-02_kbr-20260102.htm.jsonl | Annual report on Form 10-K for the fiscal year ended January 2, 2026 | 2026-02-26 | 70a5484afe968d04878ecfbd9ba98fbc8b2e533d80b037cf7e0fbe8fc36978f6 | Fiscal 2024 and fiscal 2025 income statement, cash flow statement and balance sheet; debt note; contractual obligations table; cash paid for interest |
| 10-Q_2026-04-03_kbr-20260403.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended April 3, 2026 | 2026-05-05 | 229fd064926bbf07fa2ffc7f4e9a8540fba07ff80bff683174d3e6bf584a1097 | First-quarter revolver, letters of credit and cash for the liquidity series |
| 10-Q_2026-07-03_kbr-20260703.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended July 3, 2026 | 2026-07-30 | 03481c0125a989ff4806da22dd3ff2f0b9e8f670b7937bd3534d5f18af112842 | Second-quarter revolver, letters of credit and cash for the liquidity series |
| 10-Q_2026-10-02_kbr-20261002.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended October 2, 2026 | 2026-10-29 | 2c823521cf553855a1c6f024759c3cf281ec337e0a326f8e90d2907e80c4bda7 | Three- and nine-month statements to 2026-10-02, latest balance sheet, debt note, segment note and liquidity |
| EX-99.1_2026-05-05_q126kbr-exhibit991x04032026.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of fiscal 2026 | 2026-05-05 | 637447f463ddb8da8421513a330ad5f3f064d43b06c65a05bc24e887dc1454a5 | Issuer net debt, trailing Adjusted EBITDA and the first statement of the new add-back |
| EX-99.1_2026-07-30_q226kbr-exhibit991x07032026.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of fiscal 2026 | 2026-07-30 | a28b1fbbbe3fdbb720131bc1fbcfab96a71df9dab52334b36ea2579495838d75 | Issuer net debt and trailing Adjusted EBITDA at 2026-07-03 |
| EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of fiscal 2026 | 2026-10-29 | 6be5d8833637eda688ff0b9db487f2aba8e19b0cf92b7431b20fb793cb7ffccf | Adjusted EBITDA reconciliation, segment Adjusted EBITDA, issuer net debt and leverage, operating cash flow adjustment |

| Upstream analysis | Module | sha256 |
|---|---|---|
| Source readiness | CP-0 | e616293eafcb43da4831bdfdcf61c971de11bc31d47eb12cc9d5e3ce89293028 |

## Findings

### Bottom line

Net leverage is moderate but depends on the EBITDA definition: net debt is 2.35x trailing reported EBITDA at 2026-10-02 against 2.07x on the issuer's adjusted measure, so the two series now point in opposite directions.
Net debt itself barely moved, USD 2,102 million against USD 2,096 million at fiscal year-end 2025, and no separation financing is yet quantified, so no pro forma figure is stated.
Basis: calculation K3; calculation K4; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 2; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 52

Debt of USD 2,541 million at carrying value includes USD 554 million due within 12 months, which cash and undrawn revolver of USD 1,046 million cover 1.89 times. Interest cover was 6.72x in fiscal 2025 on cash interest paid, but the quarterly reports print no cash interest, so cover at 2026-10-02 is not calculable.
Basis: calculation K3; calculation K4; calculation K5; calculation K7; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 17; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 20

### Financial foundation analysis

Reported leverage rose while adjusted leverage fell. Net debt over trailing reported EBITDA moved from 2.21x at fiscal year-end 2025 to 2.35x at 2026-10-02, whereas net debt over the issuer's adjusted measure moved from 2.17x to 2.07x. The divergence sits in the denominator: nine-month spin-off costs of USD 70 million, against USD 4 million a year earlier, reduce reported EBITDA, and the issuer adds back USD 72 million of spin-off, acquisition and restructuring costs together with a new add-back of USD 44 million for its share of joint venture interest, tax, depreciation and amortisation. For creditors the reported series is the like-for-like one, because the new add-back was applied from 2026 without restating earlier periods.
Basis: calculation K4; calculation K8; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 4

Cash flow quality weakened even though net debt held. Operating cash flow from continuing operations fell to USD 331 million in the nine months to 2026-10-02 from USD 506 million a year earlier, because receivables absorbed USD 218 million against USD 40 million while payables and customer advances added USD 134 million and USD 99 million. The inflow from customer advances is a non-debt funding float: contract liabilities rose to USD 429 million from USD 331 million at fiscal year-end, and the company says it often receives cash in advance on sustainable technology projects, so the balance unwinds as that work is delivered and the inflow would reverse. Spin-off transaction costs paid of USD 40 million sit inside the USD 331 million, which the issuer adjusts to USD 371 million.
Basis: calculation K9; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–7; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 48; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 15

Interest cover is only measurable on an annual basis. Reported EBITDA of USD 947 million covered cash interest paid of USD 141 million 6.72x in fiscal 2025, up from 6.57x in fiscal 2024, while the income-statement proxy gives 6.17x on the trailing twelve months to 2026-10-02, using interest expense of USD 145 million. The quarterly reports do not print cash interest paid, so the trailing cash measure cannot be built and the proxy is labelled as such.
Basis: calculation K4; calculation K6; 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 7

Liquidity and maturities need the revolver, not cash alone. At 2026-10-02 cash of USD 439 million plus undrawn revolver of USD 607 million after USD 18 million of letters of credit gives USD 1,046 million, against USD 554 million of current maturities that include the Term Loan A-2 due August 2027; the issuer's USD 625 million of revolver capacity equals the commitment less borrowings and so does not deduct those letters of credit. The maturity table at fiscal year-end 2025 shows USD 551 million due in fiscal 2027, USD 285 million in fiscal 2028 and USD 788 million in fiscal 2029, so refinancing is concentrated in the next three years. A schedule at 2026-10-02 is not printed.
Basis: calculation K5; calculation K7; 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 97; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 17–20

Data quality and definitions limit comparisons. Every statement identity holds at each date, but the annual report prints no EBITDA, the segment tables changed basis in 2026, the quarterly reports omit cash interest, and issuer net debt of USD 2,118 million uses principal while this module's net debt of USD 2,102 million uses carrying value. The planned cash distribution from the business to be spun off, which KBR intends to use to cut debt, is not quantified, so net debt stays the pre-separation figure.
Basis: calculation K3; calculation K1; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 52; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 2

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2026-01-02_kbr-20260102.htm.jsonl | Annual report on Form 10-K | Fiscal 2025 with fiscal 2024 and fiscal 2023 comparatives | USD | Millions | KBR, Inc. consolidated group, continuing operations; HomeSafe is discontinued | US GAAP | Tier 1 | Annual statements, debt, contractual obligations, cash interest | Segment tables on the fiscal 2025 alignment; no Adjusted EBITDA; spin-off timing differs from later reports |
| 10-Q_2026-04-03_kbr-20260403.htm.jsonl | Quarterly report on Form 10-Q | Quarter ended 2026-04-03 | USD | Millions | KBR, Inc. consolidated group, continuing operations; HomeSafe is discontinued | US GAAP | Tier 2b | Revolver, letters of credit and cash at 2026-04-03 | Unaudited; no cash interest paid |
| 10-Q_2026-07-03_kbr-20260703.htm.jsonl | Quarterly report on Form 10-Q | Quarter and six months ended 2026-07-03 | USD | Millions | KBR, Inc. consolidated group, continuing operations; HomeSafe is discontinued | US GAAP | Tier 2b | Revolver, letters of credit and cash at 2026-07-03 | Unaudited; no cash interest paid |
| 10-Q_2026-10-02_kbr-20261002.htm.jsonl | Quarterly report on Form 10-Q | Quarter and nine months ended 2026-10-02 | USD | Millions | KBR, Inc. consolidated group, continuing operations; HomeSafe is discontinued | US GAAP | Tier 2b | Interim statements, debt note, segments, liquidity | Unaudited; no cash interest paid; no maturity schedule by year |
| EX-99.1_2026-05-05_q126kbr-exhibit991x04032026.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter ended 2026-04-03 | USD | Millions | KBR, Inc. consolidated group, continuing operations; HomeSafe is discontinued | US GAAP | Tier 2c | Issuer net debt and trailing Adjusted EBITDA | Non-GAAP measures defined by the issuer |
| EX-99.1_2026-07-30_q226kbr-exhibit991x07032026.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter and six months ended 2026-07-03 | USD | Millions | KBR, Inc. consolidated group, continuing operations; HomeSafe is discontinued | US GAAP | Tier 2c | Issuer net debt and trailing Adjusted EBITDA | Non-GAAP measures defined by the issuer |
| EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter and nine months ended 2026-10-02 | USD | Millions | KBR, Inc. consolidated group, continuing operations; HomeSafe is discontinued | US GAAP | Tier 2c | Adjusted EBITDA reconciliation, segment Adjusted EBITDA | Non-GAAP measures defined by the issuer |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| KBR, Inc. | Issuer and borrower under the Senior Credit Facility; registrant | 52-53 week year ending the Friday closest to 31 December; fiscal 2025 ended 2026-01-02 with 52 weeks; fiscal 2024 ended 2025-01-03 with 53 weeks | USD | Millions | Consolidated, continuing operations; Mission Technology Solutions is within continuing operations; HomeSafe is discontinued | US GAAP | FY2024, FY2025, Q3 2025, Q3 2026, 9M 2025, 9M 2026; balance sheets at 2025-01-03, 2026-01-02 and 2026-10-02 |
| Domestic subsidiary guarantors | Guarantors of the Senior Credit Facility and the Senior Notes | Not applicable | USD | Millions | Not supplied: the guarantors are not named in the sources read and no separate statements are given | Not applicable | Not applicable |
| Restricted group | Restricted or unrestricted subsidiaries | Not applicable | USD | Millions | Not supplied: no restricted group is defined in the sources read | Not applicable | Not applicable |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) built from operating income plus depreciation and amortisation | 10-K_2026-01-02_kbr-20260102.htm.jsonl; 10-Q_2026-10-02_kbr-20261002.htm.jsonl | Derivation | No unadjusted EBITDA printed | 815, 947, 716, 664, 234 and 229 (USD millions) | The issuer states only an adjusted measure; this is the unadjusted comparator and it includes equity earnings of unconsolidated affiliates | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| Cash flow totals include discontinued operations | 10-K_2026-01-02_kbr-20260102.htm.jsonl; 10-Q_2026-10-02_kbr-20261002.htm.jsonl | Perimeter | Operating 557, investing 16, financing -403 (continuing, fiscal 2025) | Operating 524, investing 4, financing -391 | The statement's net change and closing cash include discontinued operations, so identities only hold on the inclusive totals | FY2024, FY2025, 9M 2025, 9M 2026 |
| Total Debt at carrying value | 10-K_2026-01-02_kbr-20260102.htm.jsonl; 10-Q_2026-10-02_kbr-20261002.htm.jsonl | Basis | Principal 2,617 and 2,557 (USD millions) | Carrying value 2,596 and 2,541 | Method requires carrying value net of issuance costs and discounts of 21 and 16 | FY2025 and Q3 2026 |
| Trailing twelve months built as full year plus current nine months less prior nine months | 10-K_2026-01-02_kbr-20260102.htm.jsonl; 10-Q_2026-10-02_kbr-20261002.htm.jsonl; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl | Period construction | Fiscal 2025 and nine-month figures | LTM revenue 7,820, EBITDA 895, Adjusted EBITDA 1,015, interest expense 145 | Nine-month stubs are comparable (273 days each); the Adjusted EBITDA stubs are on different add-back bases | 2026-10-02 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2023-12-30 | 2025-01-03 |
| FY2025 | 2025-01-04 | 2026-01-02 |
| 9M 2025 | 2025-01-04 | 2025-10-03 |
| 9M 2026 | 2026-01-03 | 2026-10-02 |
| Q3 2025 | 2025-07-05 | 2025-10-03 |
| Q3 2026 | 2026-07-04 | 2026-10-02 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Revenues | 7,710 | 7,786 | 5,901 | 5,935 | 1,931 | 2,028 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Cost of revenues | -6,611 | -6,636 | -5,041 | -5,076 | -1,661 | -1,727 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Gross profit | 1,099 | 1,150 | 860 | 859 | 270 | 301 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Equity in earnings of unconsolidated affiliates | 107 | 210 | 163 | 167 | 70 | 64 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Selling, general and administrative expenses | -543 | -578 | -431 | -416 | -145 | -154 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Spin-off costs and other charges | Not supplied: not a separate line in the annual report | Not supplied: not a separate line in the annual report | -4 | -70 | -4 | -24 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Other operating income (expense) | -4 | -4 | -1 | -2 | Not supplied: shown as a dash in the source | -1 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Operating income | 659 | 778 | 587 | 538 | 191 | 186 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Interest expense | -144 | -158 | -121 | -108 | -39 | -36 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Other non-operating expense | -7 | -6 | -5 | -2 | Not supplied: shown as a dash in the source | Not supplied: shown as a dash in the source | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Income from continuing operations before income taxes | 508 | 614 | 461 | 428 | 152 | 150 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Provision for income taxes | -129 | -156 | -116 | -96 | -34 | -18 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Net income from continuing operations | 379 | 458 | 345 | 332 | 118 | 132 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Net income (loss) from discontinued operations, net of tax | 2 | -55 | -55 | 4 | -1 | 4 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Net income | 381 | 403 | 290 | 336 | 117 | 136 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Net income attributable to noncontrolling interests included in continuing operations | 5 | 7 | 4 | 4 | 2 | 2 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Net income (loss) attributable to noncontrolling interests included in discontinued operations | 1 | -19 | -18 | 1 | Not supplied: shown as a dash in the source | 1 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Net income attributable to KBR | 375 | 415 | 304 | 331 | 115 | 133 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Diluted earnings per share from continuing operations | 2.78 | 3.49 | 2.62 | 2.57 | 0.91 | 1.03 | USD per share | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Diluted earnings per share attributable to KBR | 2.79 | 3.21 | 2.33 | 2.60 | 0.90 | 1.06 | USD per share | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| Depreciation and amortization (continuing operations) | 156 | 169 | 129 | 126 | 43 | 43 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 115; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 6; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 11 |
| EBITDA (Reported) | 815 | 947 | 716 | 664 | 234 | 229 | USD millions | Calculated: operating income plus depreciation and amortization; the issuer states no unadjusted EBITDA; includes equity earnings of unconsolidated affiliates and is after spin-off costs | calculation K1; 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–4 |
| EBITDA (Adjusted) | Not supplied: no adjusted EBITDA is printed for fiscal 2024 in the sources | 968 | 730 | 777 | 240 | 268 | USD millions | Issuer-defined Adjusted EBITDA; from the first quarter of fiscal 2026 it adds back the share of joint venture interest, tax, depreciation and amortization and acquisition costs without recasting earlier periods; fiscal 2025 is the trailing figure the issuer states at 2026-01-02 | EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 2; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 381 | 403 | 290 | 336 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Net (income) loss from discontinued operations, net of tax | -2 | 55 | 55 | -4 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Net income from continuing operations | 379 | 458 | 345 | 332 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Depreciation and amortization | 156 | 169 | 129 | 126 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Equity in earnings of unconsolidated affiliates | -107 | -210 | -163 | -167 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Deferred income tax | 1 | 60 | 50 | 42 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Other charges associated with lease right-of-use asset impairment | Not supplied: line not presented in this filing | Not supplied: line not presented in this filing | Not supplied: shown as a dash in the source | 19 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Other (operating adjustments) | -11 | -1 | -2 | -4 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Accounts receivable, net of allowance for credit losses | 5 | -2 | -40 | -218 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Contract assets | -93 | -3 | 29 | -38 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Accounts payable | 147 | -70 | -52 | 134 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Contract liabilities | -29 | -16 | -1 | 99 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Accrued salaries, wages and benefits | -7 | -2 | 41 | 19 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Payments on operating lease liabilities | -71 | -81 | -62 | -61 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Payments from unconsolidated affiliates, net | 9 | 9 | 10 | 10 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Distributions of earnings from unconsolidated affiliates | 163 | 170 | 163 | 145 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Pension funding | -62 | -3 | Not supplied: line not presented in this filing | Not supplied: line not presented in this filing | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Other assets and liabilities | -30 | 79 | 59 | -107 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Total cash flows provided by operating activities - continuing operations | 450 | 557 | 506 | 331 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Purchases of property, plant and equipment | -52 | -42 | -24 | -36 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Proceeds from sale of assets or investments | 7 | 3 | Not supplied: line not presented in this filing | Not supplied: line not presented in this filing | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Return of (investment in) equity method investments, net | 36 | 82 | 82 | -127 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Acquisitions of businesses, net of cash acquired | -738 | -14 | -13 | Not supplied: shown as a dash in the source | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Purchases of available-for-sale debt securities | Not supplied: line not presented in this filing | Not supplied: line not presented in this filing | Not supplied: shown as a dash in the source | -49 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Funding in other investments | -5 | -10 | Not supplied: shown as a dash in the source | -13 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Other (investing) | 1 | -3 | 2 | 2 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Total cash flows provided by (used in) investing activities - continuing operations | -751 | 16 | 47 | -223 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Borrowings on short-term and long-term debt | 574 | Not supplied: shown as a dash in the source | Not supplied: line not presented in this filing | Not supplied: line not presented in this filing | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Borrowings on Revolver | 393 | 555 | 555 | 281 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Payments on short-term and long-term debt | -124 | -36 | -27 | -37 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Payments on Revolver | -98 | -505 | -505 | -301 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Payments to repurchase common stock | -218 | -329 | -304 | -29 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Payments on settlement of warrants | -33 | Not supplied: shown as a dash in the source | Not supplied: line not presented in this filing | Not supplied: line not presented in this filing | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Debt issuance costs | -18 | Not supplied: shown as a dash in the source | Not supplied: line not presented in this filing | Not supplied: line not presented in this filing | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Acquisition of noncontrolling interest | -10 | Not supplied: shown as a dash in the source | Not supplied: line not presented in this filing | Not supplied: line not presented in this filing | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Payments of dividends to shareholders | -79 | -84 | -63 | -63 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Other (financing) | -13 | -4 | -6 | -15 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Total cash flows provided by (used in) financing activities - continuing operations | 374 | -403 | -350 | -164 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Total operating cash flows from discontinued operations | 12 | -33 | -31 | -3 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Total investing cash flows from discontinued operations | -25 | -12 | -12 | Not supplied: shown as a dash in the source | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Total financing cash flows from discontinued operations | Not supplied: shown as a dash in the source | 12 | 10 | Not supplied: shown as a dash in the source | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Total cash flows from discontinued operations | -13 | -33 | -33 | -3 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Effect of exchange rate changes on cash | -14 | 18 | 19 | -4 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Increase (decrease) in cash and cash equivalents (printed line) | 46 | 155 | 189 | -63 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Net Cash from Operating Activities | 462 | 524 | 475 | 328 | USD millions | Normalized: continuing plus discontinued operations | calculation K2; 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Net Cash from Investing Activities | -776 | 4 | 35 | -223 | USD millions | Normalized: continuing plus discontinued operations; a discontinued line shown as a dash is nil because the discontinued total equals its stated parts | calculation K2; 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Net Cash from Financing Activities | 374 | -391 | -340 | -164 | USD millions | Normalized: continuing plus discontinued operations; a discontinued line shown as a dash is nil because the discontinued total equals its stated parts | calculation K2; 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| FX Effect on Cash | -14 | 18 | 19 | -4 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Net Cash Change | 46 | 155 | 189 | -63 | USD millions | Reported: equals the three totals above plus the FX effect | calculation K2; 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Opening Cash | 304 | 350 | 350 | 505 | USD millions | Reported: includes cash of discontinued operations | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Closing Cash | 350 | 505 | 539 | 442 | USD millions | Reported: includes cash of discontinued operations of 8 at fiscal 2024, 5 at fiscal 2025 and 3 at 2026-10-02 | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| Cash Interest Paid | 124 | 141 | Not supplied: cash paid for interest is not printed in the quarterly report | Not supplied: cash paid for interest is not printed in the quarterly report | USD millions | Reported from the annual report's supplemental disclosure; the quarterly report prints none | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 7 |
| Cash paid for income taxes (net of refunds) | 82 | 83 | Not supplied: not printed in the quarterly report | Not supplied: not printed in the quarterly report | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 7 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 342 | 500 | 439 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Accounts receivable, net of allowance for credit losses | 1,066 | 1,086 | 1,300 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Contract assets | 271 | 280 | 320 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Other current assets | 173 | 166 | 225 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Current assets of discontinued operations | 21 | 19 | 14 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Total current assets | 1,873 | 2,051 | 2,298 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Pension assets | 82 | 89 | 127 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Property, plant and equipment, net | 237 | 232 | 244 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Operating lease right-of-use assets | 203 | 217 | 224 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Goodwill | 2,630 | 2,677 | 2,670 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Intangible assets, net | 763 | 727 | 681 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Equity in and advances to unconsolidated affiliates | 192 | 107 | 242 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Deferred income taxes (asset) | 209 | 162 | 120 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Other assets | 396 | 322 | 412 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Non-current assets of discontinued operations | 78 | Not supplied: shown as a dash in the source | Not supplied: line not presented in this filing | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Total assets (printed line) | 6,663 | 6,584 | 7,018 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Accounts payable | 772 | 712 | 847 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Contract liabilities | 328 | 331 | 429 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Accrued salaries, wages and benefits | 351 | 342 | 353 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Current maturities of long-term debt | 36 | 49 | 554 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Other current liabilities | 280 | 235 | 253 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Current liabilities of discontinued operations | 15 | 19 | 10 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Total current liabilities | 1,782 | 1,688 | 2,446 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Employee compensation and benefits | 135 | 144 | 153 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Income tax payable | 122 | 83 | 102 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Deferred income taxes (liability) | 83 | 95 | 97 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Long-term debt | 2,533 | 2,547 | 1,987 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Operating lease liabilities | 228 | 236 | 236 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Other liabilities | 244 | 279 | 223 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Non-current liabilities of discontinued operations | 69 | Not supplied: shown as a dash in the source | Not supplied: line not presented in this filing | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Total liabilities (printed line) | 5,196 | 5,072 | 5,244 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| PIC | 2,526 | 2,552 | 2,572 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Retained earnings | 1,367 | 1,697 | 1,965 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Treasury stock, at cost | -1,494 | -1,818 | -1,842 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| AOCL | -946 | -928 | -931 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Total KBR shareholders' equity | 1,453 | 1,503 | 1,764 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Noncontrolling interests | 14 | 9 | 10 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Total shareholders' equity (printed line) | 1,467 | 1,512 | 1,774 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Total Assets | 6,663 | 6,584 | 7,018 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Total Liabilities | 5,196 | 5,072 | 5,244 | USD millions | Reported | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Total Equity | 1,467 | 1,512 | 1,774 | USD millions | Reported: total shareholders' equity including noncontrolling interests | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Total Debt | 2,569 | 2,596 | 2,541 | USD millions | Normalized: current maturities plus long-term debt at carrying value, net of issuance costs and discounts; operating lease liabilities are separate lines and are not included | calculation K3; 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |
| Cash & Equivalents | 342 | 500 | 439 | USD millions | Reported: continuing operations | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 4–5 |

### Segment schedule

| Segment | Period | Revenue | Operating income | Adjusted EBITDA | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Mission Technology Solutions | Q3 2026 | 1,266 | 115 | 145 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Sustainable Technology Solutions | Q3 2026 | 762 | 124 | 147 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Corporate | Q3 2026 | Not supplied: corporate carries no revenue in the segment note | -53 | -24 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Mission Technology Solutions | Q3 2025 | 1,326 | 113 | 138 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Sustainable Technology Solutions | Q3 2025 | 605 | 119 | 128 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Corporate | Q3 2025 | Not supplied: corporate carries no revenue in the segment note | -41 | -26 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Mission Technology Solutions | 9M 2026 | 3,870 | 342 | 441 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Sustainable Technology Solutions | 9M 2026 | 2,065 | 340 | 407 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Corporate | 9M 2026 | Not supplied: corporate carries no revenue in the segment note | -144 | -71 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Mission Technology Solutions | 9M 2025 | 4,043 | 334 | 413 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Sustainable Technology Solutions | 9M 2025 | 1,858 | 371 | 397 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| Corporate | 9M 2025 | Not supplied: corporate carries no revenue in the segment note | -118 | -80 | USD millions | Reported segment figures on the 2026 alignment (prior year recast); Adjusted EBITDA is issuer-defined and the 2026 columns include the joint venture add-back | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 10–12; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2025-01-03 | 2,569 | 342 | 2,227 | US$m | Reported carrying value: current maturities 36 plus long-term debt 2,533; principal 2,594 with 25 of unamortised costs and discounts; excludes operating lease liabilities (228 non-current); cash is continuing operations |
| 2026-01-02 | 2,596 | 500 | 2,096 | US$m | Reported carrying value: current maturities 49 plus long-term debt 2,547; principal 2,617 with 21 of unamortised costs and discounts; the issuer's net debt of 2,117 uses principal; excludes operating lease liabilities (236 non-current) |
| 2026-10-02 | 2,541 | 439 | 2,102 | US$m | Reported carrying value: current maturities 554 plus long-term debt 1,987; principal 2,557 with 16 of unamortised costs and discounts; the issuer's net debt of 2,118 uses principal; pre-separation; excludes operating lease liabilities (236 non-current) |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 2025-01-03 | 3.15 | 2.73 | x | Carrying-value debt over EBITDA (Reported) derived as operating income plus depreciation and amortisation; 53-week year |
| 2026-01-02 | 2.74 | 2.21 | x | Carrying-value debt over EBITDA (Reported) derived as operating income plus depreciation and amortisation; 52-week year |
| 2026-10-02 | 2.84 | 2.35 | x | Trailing twelve months to 2026-10-02 of EBITDA (Reported), after 70 of nine-month spin-off costs; adjusted ratios of 2.50x and 2.07x are in the calculation register |

The reported-EBITDA basis is shown; the issuer's adjusted ratios are in the calculation register and are not like-for-like across periods.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| 2025-01-03 | 6.57 | x | EBITDA (Reported) over cash interest paid of 124 |
| 2026-01-02 | 6.72 | x | EBITDA (Reported) over cash interest paid of 141 |
| 2026-10-02 | Not supplied: cash paid for interest is not printed in the quarterly report | x | Trailing cash interest cannot be built; the proxy on income-statement interest expense is 6.17x in the calculation register |

Cover is on cash interest paid, which only the annual report prints.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 2025-01-03 | 342 | Not supplied: the revolver commitment and letters of credit at 2025-01-03 are not stated in the sources | US$m | Cash from the balance sheet; undrawn revolver not stated for this date. Source: 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114 |
| 2026-01-02 | 500 | 591 | US$m | Undrawn revolver: commitment 1,000 less borrowings 395 less letters of credit 14 under the Senior Credit Facility. Source: 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 156 |
| 2026-04-03 | 380 | 588 | US$m | Undrawn revolver: commitment 1,000 less borrowings 395 less letters of credit 17 under the Senior Credit Facility. Source: 10-Q_2026-04-03_kbr-20260403.htm.jsonl, page 4; 10-Q_2026-04-03_kbr-20260403.htm.jsonl, page 17 |
| 2026-07-03 | 312 | 607 | US$m | Undrawn revolver: commitment 1,000 less borrowings 375 less letters of credit 18 under the Senior Credit Facility. Source: 10-Q_2026-07-03_kbr-20260703.htm.jsonl, page 4; 10-Q_2026-07-03_kbr-20260703.htm.jsonl, page 20 |
| 2026-10-02 | 439 | 607 | US$m | Undrawn revolver: commitment 1,000 less borrowings 375 less letters of credit 18 under the Senior Credit Facility; bilateral and uncommitted lines (491, of which 305 used) only issue letters of credit and are excluded. Source: 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 5; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 20 |

Undrawn committed facilities are the revolver net of letters of credit issued under it, which is 18 lower than the issuer's own capacity statement at 2026-10-02.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 49 | US$m | Contractual obligations table at 2026-01-02, fiscal 2026 column; principal |
| FY2027 | 551 | US$m | Fiscal 2027 column; includes Term Loan A-2 due August 2027 |
| FY2028 | 285 | US$m | Fiscal 2028 column; includes the Senior Notes due September 30, 2028 |
| FY2029 | 788 | US$m | Fiscal 2029 column; includes the Revolver and Term Loan A-1 and A-3 due February 2029 |
| FY2030 | 10 | US$m | Fiscal 2030 column |
| FY2031 | 934 | US$m | Thereafter column; the only instrument maturing after fiscal 2030 is Term Loan B in January 2031 |

The ladder is drawn at 2026-01-02 and does not reflect 2026 repayments; no schedule is printed at 2026-10-02.

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-01-02 | 2,617 | -21 | 2,596 | US$m | Principal is the sum of the ladder; reconciling items are unamortised issuance costs and discounts of 21 (negative); no debt is left out of the ladder; carrying value is Gross debt at fiscal year-end 2025 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Planned cash distribution from the Mission Technology Solutions business to KBR, to be used to reduce indebtedness before the planned spin-off | Not supplied: the source states only that it precedes the spin-off targeted for January 4, 2027 | Not supplied: the amount is not stated | Not supplied: the amount is not stated | Not supplied: the amount is not stated | US$m | Source: quarterly report to 2026-10-02 (financing intention only); the registration statement on Form 10 is not supplied; net debt of 2,102 at 2026-10-02 is the pre-separation figure and no pro forma figure is worked |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 | 7,710 | Not supplied: no adjusted EBITDA is printed for fiscal 2024 in the sources | US$m | Revenue as recast for the discontinued HomeSafe operations; 53-week year; Adjusted EBITDA not supplied |
| FY2025 | 7,786 | 968 | US$m | Revenue for 52 weeks; Adjusted EBITDA is issuer-defined, taken from the trailing figure at 2026-01-02, on the basis before the 2026 joint venture add-back |

Annual periods only; fiscal 2024 had 53 weeks and the Adjusted EBITDA measure is issuer-defined.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no source states the legal rank of the Senior Credit Facility or its relation to the Senior Notes | Not supplied: legal rank not stated | Not supplied: security of the Senior Credit Facility not stated | Not supplied: amounts are shown by instrument in the debt instruments register | Not supplied: no ranked stack can be built | US$m | The Senior Notes are stated as senior unsecured and guaranteed by the domestic subsidiaries that guarantee the Senior Credit Facility, but the Senior Credit Facility's security and rank are not stated |

The stack is omitted because the Senior Credit Facility's security and rank are not stated.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), nine months 2026: operating income 538 plus depreciation and amortisation 126 | 664 | US$m | Opening: EBITDA (Reported) derived from the statements for the nine months to 2026-10-02 |
| Less net income attributable to noncontrolling interests in continuing operations | -4 | US$m | Issuer reconciliation line; realisation status not stated |
| Add spin-off, acquisition and restructuring | 72 | US$m | Issuer add-back classified as transaction and restructuring cost; realisation status not stated |
| Add share of joint venture interest, tax, depreciation and amortisation and acquisition costs | 44 | US$m | Issuer add-back introduced in 2026 without recasting earlier periods; not a cost saving or synergy |
| Add Ichthys commercial dispute cost | 1 | US$m | Issuer add-back for a commercial dispute cost; realisation status not stated |
| Adjusted EBITDA (issuer-defined), nine months 2026 | 777 | US$m | Closing: Adjusted EBITDA as the issuer states it; opening plus the four stated changes equals this amount with no plug |

The bridge covers nine months to 2026-10-02 only; the fiscal 2025 reconciliation is not supplied.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-10-02 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Revenue | 7,710 | 7,786 | 7,820 | USD millions | Reported; LTM is fiscal 2025 plus nine months 2026 less nine months 2025 | calculation K6; 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 3 |
| EBITDA (Reported) | 815 | 947 | 895 | USD millions | Calculated: operating income plus depreciation and amortization | calculation K1; calculation K6 |
| EBITDA (Adjusted), issuer-defined | Not supplied: not printed for fiscal 2024 | 968 | 1,015 | USD millions | Issuer trailing figure; add-back basis differs across the periods | EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 2 |
| Total debt, carrying value | 2,569 | 2,596 | 2,541 | USD millions | Reported balance sheet | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 5 |
| Cash and cash equivalents | 342 | 500 | 439 | USD millions | Reported balance sheet | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 114; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 5 |
| Net debt, carrying value | 2,227 | 2,096 | 2,102 | USD millions | Calculated: total debt less cash | calculation K3 |
| Total debt / EBITDA (Reported) | 3.15 | 2.74 | 2.84 | x | Calculated | calculation K4 |
| Net debt / EBITDA (Reported) | 2.73 | 2.21 | 2.35 | x | Calculated | calculation K4 |
| Net debt / EBITDA (Adjusted) | Not supplied: adjusted EBITDA not supplied | 2.17 | 2.07 | x | Calculated on issuer-defined EBITDA | calculation K4 |
| EBITDA (Reported) / cash interest | 6.57 | 6.72 | Not calculable: cash interest paid not printed in the quarterly report | x | Calculated; cash interest paid from the annual report | calculation K4 |
| Cash from operating activities, continuing operations | 450 | 557 | 382 | USD millions | Reported; LTM is fiscal 2025 plus nine months 2026 less nine months 2025 | calculation K6; 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 115; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 6 |
| Liquidity: cash plus undrawn revolver | Not supplied: revolver commitment at 2025-01-03 not stated | 1,091 | 1,046 | USD millions | Calculated: cash plus revolver net of letters of credit | calculation K5 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM | USD 7,786m | USD 5,935m | USD 5,901m | USD 7,820m | Calculated | 10-K_2026-01-02_kbr-20260102.htm.jsonl; 10-Q_2026-10-02_kbr-20261002.htm.jsonl | Both stubs are nine months of 273 days |
| EBITDA (Reported) | LTM | USD 947m | USD 664m | USD 716m | USD 895m | Calculated | 10-K_2026-01-02_kbr-20260102.htm.jsonl; 10-Q_2026-10-02_kbr-20261002.htm.jsonl | Derived as operating income plus depreciation and amortisation in each component |
| EBITDA (Adjusted) | LTM | USD 968m | USD 777m | USD 730m | USD 1,015m | Verified | 10-K_2026-01-02_kbr-20260102.htm.jsonl; 10-Q_2026-10-02_kbr-20261002.htm.jsonl; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl | Equals the issuer's trailing figure; current stub includes the joint venture add-back and the prior-year stub does not |
| Interest expense | LTM | USD 158m | USD 108m | USD 121m | USD 145m | Calculated | 10-K_2026-01-02_kbr-20260102.htm.jsonl; 10-Q_2026-10-02_kbr-20261002.htm.jsonl | Income-statement interest expense, not cash interest |
| Cash from operating activities, continuing operations | LTM | USD 557m | USD 331m | USD 506m | USD 382m | Calculated | 10-K_2026-01-02_kbr-20260102.htm.jsonl; 10-Q_2026-10-02_kbr-20261002.htm.jsonl | Continuing operations only |
| Cash interest paid | LTM | USD 141m | Not supplied: not printed for the nine months to 2026-10-02 | Not supplied: not printed for the nine months to 2025-10-03 | Not calculable: the current and prior-year stubs are not supplied | Not Calculable | 10-K_2026-01-02_kbr-20260102.htm.jsonl; 10-Q_2026-10-02_kbr-20261002.htm.jsonl | Annual report prints cash interest paid; the quarterly report does not |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,569 | Net debt data | 815 | T4.4 EBITDA (Reported) | 2025-01-03 | USD | US$m | 3.15 | Calculated | Tier 1 | Carrying value; EBITDA derived as operating income plus depreciation and amortisation |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,227 | Net debt data | 815 | T4.4 EBITDA (Reported) | 2025-01-03 | USD | US$m | 2.73 | Calculated | Tier 1 | Carrying-value net debt; the issuer's own net debt uses principal |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 815 | T4.4 EBITDA (Reported) | 124 | T4.5 Cash Interest Paid | 2025-01-03 | USD | US$m | 6.57 | Calculated | Tier 1 | Cash interest paid from the supplemental cash flow disclosure |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,569 | Net debt data | Not supplied: no adjusted EBITDA is printed for fiscal 2024 in the sources | Not applicable | 2025-01-03 | USD | US$m | Not calculable: adjusted EBITDA for fiscal 2024 is not supplied | Not Available | Tier 2c | No adjusted EBITDA for this year |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,227 | Net debt data | Not supplied: no adjusted EBITDA is printed for fiscal 2024 in the sources | Not applicable | 2025-01-03 | USD | US$m | Not calculable: adjusted EBITDA for fiscal 2024 is not supplied | Not Available | Tier 2c | No adjusted EBITDA for this year |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: no adjusted EBITDA is printed for fiscal 2024 in the sources | Not applicable | 124 | T4.5 Cash Interest Paid | 2025-01-03 | USD | US$m | Not calculable: adjusted EBITDA for fiscal 2024 is not supplied | Not Available | Tier 2c | No adjusted EBITDA for this year |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,596 | Net debt data | 947 | T4.4 EBITDA (Reported) | 2026-01-02 | USD | US$m | 2.74 | Calculated | Tier 1 | Carrying value; EBITDA derived as operating income plus depreciation and amortisation |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,096 | Net debt data | 947 | T4.4 EBITDA (Reported) | 2026-01-02 | USD | US$m | 2.21 | Calculated | Tier 1 | Carrying-value net debt; the issuer's own net debt uses principal |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 947 | T4.4 EBITDA (Reported) | 141 | T4.5 Cash Interest Paid | 2026-01-02 | USD | US$m | 6.72 | Calculated | Tier 1 | Cash interest paid from the supplemental cash flow disclosure |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,596 | Net debt data | 968 | T4.4 EBITDA (Adjusted) | 2026-01-02 | USD | US$m | 2.68 | Calculated | Tier 2c | Issuer trailing figure at fiscal year end; no reconciliation supplied |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,096 | Net debt data | 968 | T4.4 EBITDA (Adjusted) | 2026-01-02 | USD | US$m | 2.17 | Calculated | Tier 2c | Carrying-value net debt over the issuer-defined measure |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 968 | T4.4 EBITDA (Adjusted) | 141 | T4.5 Cash Interest Paid | 2026-01-02 | USD | US$m | 6.87 | Calculated | Tier 2c | Issuer-defined measure over cash interest paid |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,541 | Net debt data | 895 | T4.8 LTM EBITDA (Reported) | 2026-10-02 | USD | US$m | 2.84 | Calculated | Tier 2b | Interim LTM; unaudited components |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,102 | Net debt data | 895 | T4.8 LTM EBITDA (Reported) | 2026-10-02 | USD | US$m | 2.35 | Calculated | Tier 2b | Carrying-value net debt; the issuer's own net debt uses principal |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 895 | T4.8 LTM EBITDA (Reported) | Not supplied: cash paid for interest is not printed in the quarterly report | Not applicable | 2026-10-02 | USD | US$m | Not calculable: no cash interest paid figure for the nine months of 2026 or 2025 | Not Calculable | Tier 2b | Interim cash interest is not supplied |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,541 | Net debt data | 1,015 | T4.8 LTM EBITDA (Adjusted) | 2026-10-02 | USD | US$m | 2.50 | Calculated | Tier 2b | Issuer-defined measure; bases differ across the trailing months (add-back introduced in 2026) |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,102 | Net debt data | 1,015 | T4.8 LTM EBITDA (Adjusted) | 2026-10-02 | USD | US$m | 2.07 | Calculated | Tier 2b | Carrying-value net debt over the issuer-defined measure |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1,015 | T4.8 LTM EBITDA (Adjusted) | Not supplied: cash paid for interest is not printed in the quarterly report | Not applicable | 2026-10-02 | USD | US$m | Not calculable: no cash interest paid figure for the nine months of 2026 or 2025 | Not Calculable | Tier 2b | Interim cash interest is not supplied |
| EBITDA / interest expense (income statement) | EBITDA (Reported) / interest expense | 815 | T4.4 / T4.8 | 144 | T4.4 Interest expense / T4.8 | 2025-01-03 | USD | US$m | 5.66 | Proxy | Tier 1 | Accrual-based proxy for cover; not cash interest |
| EBITDA / interest expense (income statement) | EBITDA (Reported) / interest expense | 947 | T4.4 / T4.8 | 158 | T4.4 Interest expense / T4.8 | 2026-01-02 | USD | US$m | 5.99 | Proxy | Tier 1 | Accrual-based proxy for cover; not cash interest |
| EBITDA / interest expense (income statement) | EBITDA (Reported) / interest expense | 895 | T4.4 / T4.8 | 145 | T4.4 Interest expense / T4.8 | 2026-10-02 | USD | US$m | 6.17 | Proxy | Tier 2b | Accrual-based proxy for cover; not cash interest |
| Liquidity / current maturities | (Cash + undrawn revolver net of letters of credit) / current maturities of long-term debt | 1,046 | Chart data: liquidity | 554 | T4.6 Current maturities of long-term debt | 2026-10-02 | USD | US$m | 1.89 | Calculated | Tier 2b | Excludes bilateral and uncommitted lines, which only issue letters of credit |

### T4.10 KPI dashboard

| KPI Category | Metric Name | 2026-01-02 | 2026-10-02 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|
| Backlog (period-end) | Total backlog, USD millions | 16,864 | 17,718 | Up | Backlog and options 23,211 to 23,122 (USD millions); the segment split is on the 2026 alignment |
| Backlog (period-end) | Mission Technology Solutions backlog, USD millions | 12,552 | 11,890 | Down | Down 662 (USD millions) |
| Backlog (period-end) | Sustainable Technology Solutions backlog, USD millions | 4,312 | 5,828 | Up | Up 1,516 (USD millions) |
| Backlog (period-end) | Award options, USD millions | 6,347 | 5,404 | Down | Down 943 (USD millions); the issuer reports options separately from backlog |
| Working capital float (period-end) | Contract liabilities, USD millions | 331 | 429 | Up | Up 98 (USD millions); customer advances that unwind as work is delivered |
| Off-balance-sheet funding (period-end) | Receivables sold and outstanding with financial institutions, USD millions | 65 | 65 | Flat | Nine-month flow of 935 sold and 935 settled in 2026 |
| Pension (period-end) | U.K. pension funding surplus, USD millions | 84 | 120 | Up | A surplus, so no funding obligation is shown |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| Adjusted EBITDA | Reported EBITDA is the primary denominator; adjusted shown beside it, labelled | Operating income less noncontrolling interests plus depreciation and amortisation plus discrete items; from Q1 2026 adds the share of joint venture interest, tax, depreciation and amortisation and acquisition costs prospectively, without recasting | EX-99.1_2026-05-05_q126kbr-exhibit991x04032026.htm.jsonl, page 13; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 | Q1 2026 onward; fiscal 2025 comparatives are on the earlier basis | 44 of the 777 nine-month Adjusted EBITDA for 2026; about 20 basis points of fiscal 2025 margin | Financial foundation; Fundamental credit | Use reported EBITDA for ratios and show adjusted beside it with its basis |
| EBITDA (Reported) | The issuer's unadjusted EBITDA | None stated; the annual report prints no EBITDA | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 3 | All periods | Derived at 664 for nine months 2026 and 947 for fiscal 2025 (USD millions); includes equity earnings of unconsolidated affiliates of 167 and 210 | Financial foundation; Fundamental credit | Derived as operating income plus depreciation and amortisation and labelled calculated |
| Net debt | Carrying-value debt less cash | Gross debt before unamortised costs and discounts, less cash | EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 2; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 17 | 2026-01-02 and 2026-10-02 | 2,118 issuer against 2,102 here at 2026-10-02 (difference 16); 2,117 against 2,096 at 2026-01-02 (difference 21) | Financial foundation; Liquidity | Show both; ratios use carrying value |
| Cash and cash equivalents | Continuing operations cash on the balance sheet | Cash flow statement closes on cash including discontinued operations | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 7 | 2026-10-02 | 442 against 439 (difference 3) | Financial foundation | Balance sheet cash is used in net debt and liquidity |
| Liquidity | Cash plus undrawn committed facilities net of letters of credit drawn on them | Cash plus revolver borrowing capacity of 625, before letters of credit | EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 5; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 20 | 2026-10-02 | 1,064 issuer against 1,046 here (difference 18) | Liquidity; Fundamental credit | Use the net figure and show the issuer's beside it |
| Segment results | One consistent segment basis across periods | Fiscal 2025 on the fiscal 2025 alignment; 2026 reports move part of a Mission Technology Solutions business unit to Sustainable Technology Solutions and recast prior-year quarters | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 137; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 9 | FY2024, FY2025 against 2026 periods | Not quantified: the fiscal 2025 full year on the new basis is not supplied | Business & governance; Financial foundation | Compare segments only within the 2026 reports and their recast comparatives |
| Spin-off costs | Costs shown on their own line in every period | A separate line in the 2026 quarterly reports and in their recast prior-year comparatives; not a separate line in the annual report | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 4 | FY2024, FY2025 | 4 in nine months 2025; the fiscal 2025 amount is not supplied | Financial foundation | Fiscal columns show Not supplied for the line |
| Total debt and leases | Every balance-sheet debt line; separately presented lease liabilities excluded | Operating lease liabilities are separate lines; finance leases of 10 appear in the contractual obligations table without a statement that they sit in debt | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 97; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 5 | 2026-01-02, 2026-10-02 | Operating lease liabilities of 236 non-current excluded; finance leases of 10 not stated as inside debt | Financial foundation; Fundamental credit | Total debt follows the balance-sheet debt lines only |
| Fiscal year length | Comparable period lengths | Fiscal 2024 had 53 weeks and fiscal 2025 52 weeks | 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 117 | FY2024 | One extra week in fiscal 2024; not quantified | Financial foundation | State the week count beside annual comparisons |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Reported statements and balance-sheet debt for fiscal 2024, fiscal 2025 and the periods to 2026-10-02 | Ready with Limitations | Fourth quarter of fiscal 2025 is not presented on its own; some lines are shown as dashes or are not presented in a filing | None needed for a reported-fact summary |
| Leverage at 2026-10-02 on reported EBITDA | Ready with Limitations | EBITDA is derived; the issuer's adjusted measure changed basis in 2026 | Show reported and adjusted side by side with their bases |
| Interest cover at 2026-10-02 | Not Ready | Cash interest paid is not printed in the quarterly reports | Supply cash interest paid for the nine months to 2026-10-02 |
| Maturity wall at 2026-10-02 | Ready with Limitations | The ladder is drawn at 2026-01-02; no tranche principal for Term Loan A | Supply the tranche schedule or an updated ladder |
| Post-separation capital structure | Not Ready | The separation financing amount and debt allocation are not stated; the registration statement is not supplied | Supply the Form 10 and any financing announcements |
| Ranked debt stack and secured leverage | Not Ready | The security and rank of the Senior Credit Facility are not stated | Supply the credit agreement |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolver | Revolving credit facility | Not supplied: carrying value by instrument is not disclosed | 375 | 375 | 1,000 | Not supplied: security not stated | Not supplied: rank not stated | USD | 375 | Not applicable | Margin 1.25% to 2.25% by consolidated net leverage ratio, tier not stated; commitment fee 0.23% to 0.33% | Floating | SOFR plus 10 bps credit spread adjustment | Not supplied: the applicable tier depends on a covenant ratio that is not printed | Not applicable | February 2029 | 0 | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 17–20 |
| Term Loan A (tranches A-1, A-2 and A-3; includes a sterling tranche, split not printed) | Term loan | Not supplied: carrying value by instrument is not disclosed | 957 | 957 | Not applicable | Not supplied: security not stated | Not supplied: rank not stated | USD | 957 | Not applicable | A-1 and A-3: margin 1.25% to 2.25%; A-2: 1.13% to 2.13%; tier by net leverage, not stated | Floating | A-1 USD: SOFR plus 10 bps; A-3 GBP: SONIA plus 12 bps; A-2: SOFR | Not supplied: the applicable tier depends on a covenant ratio that is not printed | Not applicable | A-2 August 2027; A-1 and A-3 February 2029 | Not supplied: tranche principal is not printed (A-1 and A-3 amortise 1.25% a quarter, A-2 0.625% a quarter) | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 17–19 |
| Term Loan B | Term loan | Not supplied: carrying value by instrument is not disclosed | 975 | 975 | Not applicable | Not supplied: security not stated | Not supplied: rank not stated | USD | 975 | Not applicable | Term SOFR plus 2.00% | Floating | Term SOFR | 200 | Not applicable | January 2031 | 12 | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 17–19 |
| 4.750% Senior Notes due 2028 | Senior notes | Not supplied: carrying value by instrument is not disclosed | 250 | 250 | Not applicable | Unsecured (stated: senior unsecured obligations) | Senior (stated); rank against the Senior Credit Facility not stated | USD | 250 | Not applicable | 4.750% | Fixed | Not applicable | Not applicable | Not applicable | 2028-09-30 | 0 | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 19 |
| Financing cost adjustment | Aggregate unamortised issuance costs and discounts | -16 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -16 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 17 |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 14 |
| Calculated | 8 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 4 |
| Insufficient Information | 5 |
| Fields present | 27 |
| Fields total | 27 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 0 |

## Calculations

Each row shows its inputs; amounts are in USD millions unless a unit is shown.

| Calc ID | Calculation | Inputs | Working | Result | Source |
|---|---|---|---|---|---|
| K1 | EBITDA (Reported) as operating income plus depreciation and amortization | Operating income 659, 778, 587, 538, 191, 186; depreciation and amortization 156, 169, 129, 126, 43, 43 (FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026) | 659 + 156 = 815; 778 + 169 = 947; 587 + 129 = 716; 538 + 126 = 664; 191 + 43 = 234; 186 + 43 = 229 | 815; 947; 716; 664; 234; 229 | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 113–115; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–6; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 11 |
| K2 | Cash flow totals including discontinued operations | Continuing operating 450, 557, 506, 331; discontinued operating 12, -33, -31, -3; continuing investing -751, 16, 47, -223; discontinued investing -25, -12, -12, nil; continuing financing 374, -403, -350, -164; discontinued financing nil, 12, 10, nil; FX -14, 18, 19, -4 (FY2024, FY2025, 9M 2025, 9M 2026) | Operating 462, 524, 475, 328; investing -776, 4, 35, -223; financing 374, -391, -340, -164; 462 - 776 + 374 - 14 = 46; 524 + 4 - 391 + 18 = 155; 475 + 35 - 340 + 19 = 189; 328 - 223 - 164 - 4 = -63; opening plus change: 304 + 46 = 350; 350 + 155 = 505; 350 + 189 = 539; 505 - 63 = 442 | Net cash change 46, 155, 189, -63; closing cash 350, 505, 539, 442 | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 115–116; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 6–7 |
| K3 | Total debt and net debt at carrying value; principal to carrying value | Current maturities 36, 49, 554; long-term debt 2,533, 2,547, 1,987; cash 342, 500, 439; principal 2,594, 2,617, 2,557; unamortised costs 25, 21, 16; issuer net debt 2,117 and 2,118 | 36 + 2,533 = 2,569; 49 + 2,547 = 2,596; 554 + 1,987 = 2,541; 2,569 - 342 = 2,227; 2,596 - 500 = 2,096; 2,541 - 439 = 2,102; 2,617 - 21 = 2,596; 2,557 - 16 = 2,541; 2,617 - 500 = 2,117; 2,557 - 439 = 2,118 | Total debt 2,569, 2,596, 2,541; net debt 2,227, 2,096, 2,102 | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 114 and 153; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 5 and 17; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 2 |
| K4 | Leverage and cover ratios as numerator over denominator to two decimals | See the calculation register | Each ratio is the numerator divided by the denominator shown in its row of the register, for example 2,102 / 895 = 2.35 and 2,102 / 1,015 = 2.07 | Register Calculated Value column | T4.9 Calculation register |
| K5 | Liquidity at 2026-10-02 and its components at other dates | Revolver commitment 1,000; borrowings 375; letters of credit under the facility 18; cash 439; issuer capacity 625; fiscal 2025 borrowings 395 and letters of credit 14 with cash 500 | 1,000 - 375 - 18 = 607; 1,000 - 375 = 625; 439 + 607 = 1,046; 439 + 625 = 1,064; 1,000 - 395 - 14 = 591; 500 + 591 = 1,091 | Undrawn revolver 607; liquidity 1,046; issuer-basis liquidity 1,064; fiscal 2025 liquidity 1,091 | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 20; 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 156; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 5 |
| K6 | Trailing twelve months to 2026-10-02 | Fiscal 2025, nine months 2026, nine months 2025: revenue 7,786, 5,935, 5,901; EBITDA (Reported) 947, 664, 716; Adjusted EBITDA 968, 777, 730; interest expense 158, 108, 121; operating cash flow 557, 331, 506 | 7,786 + 5,935 - 5,901 = 7,820; 947 + 664 - 716 = 895; 968 + 777 - 730 = 1,015; 158 + 108 - 121 = 145; 557 + 331 - 506 = 382 | Revenue 7,820; EBITDA 895; Adjusted EBITDA 1,015; interest expense 145; operating cash flow 382 | 10-K_2026-01-02_kbr-20260102.htm.jsonl, pages 113–115; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–6; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 2 |
| K7 | Liquidity cover of current maturities at 2026-10-02 | Liquidity 1,046; current maturities of long-term debt 554 | 1,046 / 554 = 1.8881 | 1.89x | 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 5 |
| K8 | Adjusted EBITDA bridge, nine months 2026 | EBITDA (Reported) 664; noncontrolling interests -4; spin-off, acquisition and restructuring 72; share of joint venture interest, tax, depreciation and amortization and acquisition costs 44; Ichthys commercial dispute cost 1 | 664 - 4 + 72 + 44 + 1 = 777; Adjusted less reported EBITDA at fiscal 2025: 968 - 947 = 21; at the trailing twelve months: 1,015 - 895 = 120 | Adjusted EBITDA 777; gap 21 and 120 | EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14 |
| K9 | Operating cash flow adjusted for spin-off costs, nine months 2026 | Operating cash flow from continuing operations 331; spin-off transaction costs 40 | 331 + 40 = 371 | 371 | EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 15 |

## Gaps

- Severity High. The separation financing is not quantified: the cash distribution that the business to be spun off will pay KBR to reduce debt has no stated amount, instrument or date, and the registration statement on Form 10 is not supplied, so post-separation net debt and leverage are not established; this restricts every forward view of leverage until the document is supplied.
  Basis: 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 52; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 33
- Severity Medium. Cash interest paid is not printed in the quarterly reports for the nine months to 2026-10-02 and 2025-10-03, so trailing interest cover on cash interest is not calculable; the income-statement proxy is shown instead; supply the cash flow supplemental disclosure.
  Basis: 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 7; 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 116
- Severity Medium. The maturity ladder is drawn at fiscal year-end 2025 only. Source readiness states that no schedule of maturities by year is printed; the annual report prints one in its contractual obligations table, which this module uses, so that statement is corrected here for 2026-01-02 only. No schedule is printed at 2026-10-02, so the 2026 repayments are not reflected; supply an updated ladder.
  Basis: 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 97; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 17–18
- Severity Medium. Term Loan A principal is reported as one line across three tranches in two currencies, so the amount maturing in August 2027 is not printed; this limits the refinancing view to dated maturities; supply the tranche schedule.
  Basis: 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 17–19
- Severity Medium. The annual report prints no EBITDA or Adjusted EBITDA, no fiscal 2024 Adjusted EBITDA exists in the sources, and the fiscal 2025 figure of USD 968 million is stated only as a trailing figure in the 2026 releases without a reconciliation; supply the fourth-quarter fiscal 2025 release.
  Basis: EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 2; EX-99.1_2026-05-05_q126kbr-exhibit991x04032026.htm.jsonl, page 2
- Severity Medium. The Adjusted EBITDA definition changed in the first quarter of fiscal 2026 and was not recast, so trailing Adjusted EBITDA mixes bases and the adjusted ratios are not like-for-like across periods; the reported ratios are used as primary.
  Basis: EX-99.1_2026-05-05_q126kbr-exhibit991x04032026.htm.jsonl, page 13; EX-99.1_2026-10-29_q326kbr-exhibit991x10022026.htm.jsonl, page 14
- Severity Medium. Segment tables in the annual report use the fiscal 2025 alignment while the 2026 quarterly reports recast prior-year quarters to a new alignment, so fiscal 2025 segment results are not comparable with 2026; the segment schedule uses the 2026 basis only.
  Basis: 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 137; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 9
- Severity Medium. The security and legal rank of the Senior Credit Facility are not stated in the sources read, so the ranked debt stack and secured leverage are not established; the Senior Notes are stated as senior unsecured; supply the credit agreement.
  Basis: 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 19
- Severity Low. The revolver commitment and letters of credit at 2025-01-03 are not stated, so undrawn committed facilities for fiscal 2024 are not established.
  Basis: 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 153
- Severity Low. Several lines are shown as dashes or are not presented in a given filing, including other operating income in Q3 2025, other non-operating expense in Q3 2025 and Q3 2026, discontinued operations lines, acquisitions in nine months 2026 and the pension funding and sale-of-asset lines in the quarterly cash flow statements; each is stated as not supplied and is not read as zero.
  Basis: 10-Q_2026-10-02_kbr-20261002.htm.jsonl, pages 3–7
- Severity Low. The spin-off costs and other charges line does not appear in the annual report income statement, so the fiscal 2025 amount is not supplied; nine-month 2025 shows USD 4 million on the recast presentation.
  Basis: 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 113; 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 4
- Severity Low. Fiscal 2024 had 53 weeks and fiscal 2025 52 weeks, and a discrete fourth quarter of fiscal 2025 is not presented, so annual comparisons carry an extra week in fiscal 2024.
  Basis: 10-K_2026-01-02_kbr-20260102.htm.jsonl, page 117
- Severity Low. Cash flow identities hold only on totals that include discontinued operations, and closing cash includes cash of discontinued operations of USD 3 million at 2026-10-02 that balance sheet cash excludes.
  Basis: 10-Q_2026-10-02_kbr-20261002.htm.jsonl, page 7

## Next module

The orchestrator selects the next module.
