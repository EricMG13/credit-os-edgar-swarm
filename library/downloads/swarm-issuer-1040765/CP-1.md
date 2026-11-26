# CP-1 financial foundation: Vornado Realty Lp (issuer-1040765)

## Request

Financial foundation for Vornado Realty Lp (the operating partnership Vornado Realty L.P.), as of 2026-11-18, on the credit snapshot pathway. The scope is the partnership's statements, debt, liquidity and credit ratios from the five supplied filings. This module draws no investment recommendation.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_vno-20241231.htm.jsonl | Annual report on Form 10-K of Vornado Realty Trust and Vornado Realty L.P. for the year ended 2024-12-31 (date shown is the registrants' signature date; the filing date is not stated) | 2025-02-10 | 9cb41ce89d13c5272a61bcb62707b71969ce15d9c7b1fe7f2313fb8a839b38f5 | Cross-check of FY2024 comparatives, year-end 2024 liquidity and facility sizes; no figure taken into the statement tables |
| 10-K_2025-12-31_vno-20251231.htm.jsonl | Annual report on Form 10-K of Vornado Realty Trust and Vornado Realty L.P. for the year ended 2025-12-31 (date shown is the registrants' signature date; the filing date is not stated) | 2026-02-09 | c025ea5a05f5d38a1996a411d7c82aa4edae2be7c83fc3131f80a2c4ad7fa42a | FY2024 and FY2025 statements, debt note and maturity ladder, liquidity, related items |
| 10-Q_2026-03-31_vno-20260331.htm.jsonl | Quarterly report on Form 10-Q of Vornado Realty Trust and Vornado Realty L.P. for the quarter ended 2026-03-31 (date shown is the registrants' signature date; the filing date is not stated) | 2026-05-04 | cd0b7070d3d7bf59e3fb41df4eaf9716739295cc940ae0e9359e3f4c165b802e | Segment recast and subsequent-events scan |
| 10-Q_2026-06-30_vno-20260630.htm.jsonl | Quarterly report on Form 10-Q of Vornado Realty Trust and Vornado Realty L.P. for the quarter ended 2026-06-30 (date shown is the registrants' signature date; the filing date is not stated) | 2026-08-03 | a4953eb435c8cd6353058b5c9a4988ac66e64c309d0b463edaae852878a247df | Subsequent-events scan |
| 10-Q_2026-09-30_vno-20260930.htm.jsonl | Quarterly report on Form 10-Q of Vornado Realty Trust and Vornado Realty L.P. for the quarter ended 2026-09-30 (date shown is the registrants' signature date; the filing date is not stated) | 2026-11-02 | 709a676d2186df587ca21aa824ed37002635a44288256cc378b364f14cdab22d | Nine-month and third-quarter statements, balance sheet at 2026-09-30, debt summary, liquidity, subsequent events |

Upstream module output used: Source readiness (CP-0), sha256 8a149f3cc3784477f6f9b978e7acf147daa97d0bdc355800d687477693126868. The run settings were read for the periods and are not issuer evidence.

## Findings

### Bottom line

Leverage looks moderate for FY2025 only because of one-off gains: total debt is 8.08x trailing EBITDA at 2026-09-30, or 8.47x excluding gains the statements print separately, and EBITDA covers cash interest only 2.89x, so creditors should anchor on the trailing figures.
Basis: calculation CALC-27; calculation CALC-28; calculation CALC-36; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–17

The issuer prints no EBITDA, so every ratio rests on EBITDA derived from net income, interest, taxes and depreciation. FY2025 derived EBITDA of USD 1,766.78 million includes USD 838.54 million of gains, chiefly USD 803.25 million on a sales-type lease; without them FY2025 total debt was 7.74x EBITDA, not 4.07x.
Basis: calculation CALC-02; calculation CALC-35; calculation CALC-36; 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–106

Net debt rose by USD 523.04 million over nine months to USD 6,867.82 million at 2026-09-30, while undrawn committed revolver capacity of USD 1,188.28 million and cash of USD 580.50 million remain available.
Basis: calculation CALC-12; calculation CALC-39; calculation CALC-21; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12, 26, 43, 70

### Credit read-through

Total debt over EBITDA was 9.36x at 2024-12-31, 4.07x at 2025-12-31 and 8.08x on a trailing basis at 2026-09-30, while EBITDA over cash interest was 2.73x, 5.64x and 2.89x. The FY2025 dip is not operating: it comes from USD 838.54 million of printed gains, chiefly the USD 803.25 million lease gain, which sits in both FY2025 and nine-month 2025 EBITDA and cancels out of the trailing figure. Excluding printed gains, total debt was 9.53x EBITDA in FY2024, 7.74x in FY2025 and 8.47x trailing, so underlying leverage improved in 2025 and has since risen again; cover on the same basis was 2.68x, 2.96x and 2.76x. Equity-method income stays inside derived EBITDA and was USD 99.34 million in the nine months to 2026-09-30, including a USD 44.33 million gain on sale, against distributions of income from those entities of USD 86.02 million, so cash cover is weaker than the ratios imply. The consequence for creditors is debt of roughly eight times trailing EBITDA with cover under three times and floating-rate mortgages at a weighted average of 5.65% against 4.98% on fixed-rate mortgages, which leaves little room for lower rents or higher refinancing costs.
Basis: calculation CALC-27; calculation CALC-28; calculation CALC-36; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13, 17, 24, 27–28; 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 102, 106

Net debt rose by USD 523.04 million in the nine months to 2026-09-30. Investing outflows of USD 600.54 million, led by USD 297.12 million into partially owned entities, USD 185.55 million of additions to real estate and USD 170.32 million of acquisitions, and USD 133.40 million of Class A unit repurchases were funded by operating cash flow of USD 263.00 million and net borrowings of USD 299.21 million, while cash fell by USD 260.35 million. Operating cash flow is a weaker guide than it looks: the nine months to 2025 included USD 901.41 million of prepaid lease payment from a tenant, which more than explains the fall from USD 1,112.11 million to USD 263.00 million. On a trailing basis operating cash flow of USD 409.27 million, already after cash interest of USD 318.80 million, exceeded additions to real estate and development spending of USD 357.91 million by only USD 51.36 million, and USD 62.10 million of preferred distributions left cash flow about USD 10.74 million short.
Basis: calculation CALC-39; calculation CALC-38; calculation CALC-40; calculation CALC-30; calculation CALC-31; calculation CALC-32; calculation CALC-33; calculation CALC-34; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17; 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106

Liquidity is adequate on the company's own measure: cash of USD 580.50 million and undrawn committed revolver capacity of USD 1,188.28 million at 2026-09-30, after one revolving facility and the term loan were refinanced and the other revolver was upsized in January 2026, with maturities in 2029 and 2031. The contrary evidence is that undrawn capacity has fallen from USD 1,418.81 million at 2025-12-31 as drawings rose from USD 720.42 million to USD 918.00 million and cash fell, and that restricted cash of USD 143.34 million is not counted as available.
Basis: calculation CALC-20; calculation CALC-21; calculation CALC-40; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12, 26, 43, 70; 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 76, 85, 129

The only maturity ladder is drawn at 2025-12-31 and pre-dates the 2026 refinancings. It shows USD 925.00 million due in 2026, USD 2,400.42 million in 2027 and USD 2,300.00 million in 2028, plus USD 319.04 million already in maturity default on two mortgage loans. The 2026 amounts and the unsecured part of the 2027 amount have since been refinanced or repaid, and no source states that any 2028 maturity was refinanced, so the 2028 mortgage maturities are the largest annual amount on that ladder that the 2026 refinancings did not touch; the ladder at 2026-09-30 is not printed, so the 2028 figure cannot be refreshed.
Basis: calculation CALC-22; calculation CALC-23; calculation CALC-24; calculation CALC-26; 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 79, 128–129; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 26–27

Several choices change the numbers and are logged in the definition register. Debt is carrying value of USD 7,448.31 million at 2026-09-30, USD 39.23 million below contractual principal of USD 7,487.54 million; lease liabilities of USD 694.36 million sit on their own line and are not debt; cash excludes restricted cash; and EBITDA is derived because the issuer prints none. The balance sheet shows no separate customer-deposit, deferred-revenue or supplier-finance line, and the largest non-debt liabilities are lease liabilities and accounts payable and accrued expenses. The trust's funds from operations, which the management discussion also reports, are not partnership figures and appear only as context.
Basis: calculation CALC-09; calculation CALC-17; calculation CALC-18; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12, 27, 50–51, 78

Two events after the 2026-09-30 balance sheet are excluded from every period figure. The first, on 2026-10-20, formed a joint venture for a Park Avenue office development site, satisfied the USD 400.00 million mortgage loan on the property and deconsolidated it, with an estimated net gain of about USD 485.00 million due in the fourth quarter of 2026; the source gives no cash effect, so pro forma net debt is not established. The second, on 2026-10-26, was a maturity default on a USD 48.00 million non-recourse loan of an unconsolidated joint venture, which does not enter consolidated debt.
Basis: 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 23, 27, 45, 56

One lease transaction with a major tenant carries three figures with different roles: USD 935.00 million of cash received, USD 901.41 million after initial direct costs in the cash flow statement, and a USD 803.25 million gain in the income statement. Cash analysis uses the cash flow figure and EBITDA analysis the gain, which is why FY2025 and nine-month 2025 differ so sharply from the trailing figures.
Basis: 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 16, 51, 71; 10-K_2025-12-31_vno-20251231.htm.jsonl, page 105

The strongest evidence against reading trailing leverage near eight times as stress is that book debt is 0.48x total assets, that the partnership holds USD 2,244.17 million of investments in partially owned entities whose own debt sits outside consolidated debt while their income sits inside EBITDA, and that management states that cash flow over the next twelve months together with cash on hand will be adequate to fund its needs. What would change the view is a rise in trailing EBITDA from new leasing, or evidence that the unconsolidated joint-venture debt, which no source totals, is large.
Basis: 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12, 23–24, 70

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_vno-20241231.htm.jsonl | Annual report (Form 10-K), combined filing of Vornado Realty Trust and Vornado Realty L.P. | FY2024 with 2023 and 2022 comparatives | USD | thousands | Partnership's consolidated statements, printed separately from the trust's | US GAAP | Tier 1 (audited) | Cross-check of the 2025 annual report's FY2024 comparatives (total assets and segment revenues matched); year-end 2024 liquidity statement, letters of credit and the 915.000 revolving facility | Superseded by the 2025 annual report for FY2024 amounts; no figure taken from it into the tables |
| 10-K_2025-12-31_vno-20251231.htm.jsonl | Annual report (Form 10-K), combined filing | FY2025 with 2024 and 2023 comparatives | USD | thousands | Partnership's consolidated statements, printed separately from the trust's | US GAAP | Tier 1 (audited) | FY2024 and FY2025 statements, debt note, maturity ladder at 2025-12-31, year-end liquidity | The ladder and covenant compliance statement are year-end only |
| 10-Q_2026-03-31_vno-20260331.htm.jsonl | Quarterly report (Form 10-Q), combined filing | Three months ended 2026-03-31 | USD | thousands | Partnership's consolidated statements, printed separately from the trust's | US GAAP | Tier 2a (unaudited, auditor review) | Segment recast and subsequent-events scan only | First-quarter columns are not tabulated; the nine-month columns carry the same periods |
| 10-Q_2026-06-30_vno-20260630.htm.jsonl | Quarterly report (Form 10-Q), combined filing | Three and six months ended 2026-06-30 | USD | thousands | Partnership's consolidated statements, printed separately from the trust's | US GAAP | Tier 2a (unaudited, auditor review) | Subsequent-events scan only | Second-quarter columns are not tabulated; the nine-month columns carry the same periods |
| 10-Q_2026-09-30_vno-20260930.htm.jsonl | Quarterly report (Form 10-Q), combined filing | Three and nine months ended 2026-09-30 | USD | thousands | Partnership's consolidated statements, printed separately from the trust's | US GAAP | Tier 2a (unaudited, auditor review) | Nine-month and third-quarter statements, balance sheet at 2026-09-30, debt summary, liquidity, subsequent events | Cash flows are printed for nine months only, so no third-quarter cash flow column exists |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vornado Realty L.P. | Issuer; the operating partnership; borrower under the unsecured revolving credit agreements and term loan agreement per the exhibit list | 12-31 | USD | thousands | The partnership and its consolidated subsidiaries, including consolidated joint ventures with noncontrolling interests | US GAAP | FY2023 to FY2025 income and cash flows; balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30; nine and three months to 2025-09-30 and 2026-09-30 |
| Vornado Realty Trust | Co-registrant; sole general partner; about 91.2% of the partnership's common limited partnership interest at 2026-09-30; used as context only | 12-31 | USD | thousands | Consolidates the partnership; per-share and funds-from-operations measures are the trust's | US GAAP | Same periods as the partnership; not used for creditor figures |
| Guarantors and restricted group | Not supplied: the indentures and credit agreements are not supplied, so guarantors and any restricted group are not established | 12-31 | USD | thousands | Not supplied: not established from the sources | US GAAP | Not supplied: not applicable until the documents are supplied |

Events after the 2026-09-30 balance sheet are flagged in the credit read-through and in the post-balance-sheet table; events between 2025-12-31 and 2026-09-30 are already inside the 2026-09-30 balance sheet.
Basis: 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 26–27, 45, 56; 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 156–157

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Restate statement figures from USD thousands to US$m for the money tables | 10-K_2025-12-31_vno-20251231.htm.jsonl; 10-Q_2026-09-30_vno-20260930.htm.jsonl | Unit | 7,448,312 (USD thousands) | 7,448.312 (US$m) | One money unit across net debt, liquidity, maturity and register tables; thousands divided by 1,000 with all three decimals kept | All periods |
| Derive EBITDA (Reported) from components | 10-K_2025-12-31_vno-20251231.htm.jsonl; 10-Q_2026-09-30_vno-20260930.htm.jsonl | Calculated | Not stated by the issuer | FY2024 880,614; FY2025 1,766,782; nine months 2025 1,555,072; nine months 2026 710,656; third quarter 2025 215,231; third quarter 2026 215,463 (USD thousands) | Method step 4: derive from components when not stated; net income plus interest and debt expense plus income tax expense plus depreciation and amortization | All income columns |
| Present expenses and outflows as negatives | 10-K_2025-12-31_vno-20251231.htm.jsonl; 10-Q_2026-09-30_vno-20260930.htm.jsonl | Sign | (919,959) | -919,959 | The statements print negatives in parentheses; the tables use a minus sign | All periods |
| Treat a printed dash as not supplied, never as zero | 10-K_2025-12-31_vno-20251231.htm.jsonl; 10-Q_2026-09-30_vno-20260930.htm.jsonl | Missing value | - | Not supplied: the statement prints a dash | Method rule: a dash is a missing value with a gap line | Lines listed in the gap lines |
| Normalise EBITDA for the gain lines the statements print separately (Analyst Judgement) | 10-K_2025-12-31_vno-20251231.htm.jsonl; 10-Q_2026-09-30_vno-20260930.htm.jsonl | Normalisation | FY2025 EBITDA (Reported) 1,766,782 | FY2025 EBITDA excluding printed gains 928,243 (USD thousands) | Shows source against normalised: removes gain on debt extinguishment, gain on sales-type lease and net gains on disposition; equity-method gains on sale are not removed because the statements do not print them as separate lines | FY2024, FY2025, nine months 2025 and 2026, trailing twelve months |
| Use unrestricted cash for net debt | 10-Q_2026-09-30_vno-20260930.htm.jsonl | Definition | Cash and cash equivalents plus restricted cash 723,835 (cash flow statement) | Cash & Equivalents 580,496 (balance sheet) | Restricted cash of 143,339 is shown on its own line and is not treated as available to repay debt; the cash flow rows keep the statement's own total | 2026-09-30 and prior balance sheets |
| Keep lease liabilities out of Total Debt | 10-Q_2026-09-30_vno-20260930.htm.jsonl | Definition | Lease liabilities 694,361 | Excluded from Total Debt 7,448,312 | The issuer presents lease liabilities on their own balance-sheet line; no lease sits inside its debt lines | All balance sheets |
| Use the partnership's statements, not the trust's | 10-Q_2026-09-30_vno-20260930.htm.jsonl | Perimeter | Trust per-share and funds-from-operations measures | Partnership consolidated statements | The issuer is the partnership; the trust reports the same consolidated assets but different equity, per-share and funds-from-operations presentation | All periods |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Rental revenues | 1,568,806 | 1,558,241 | 1,176,104 | 1,213,878 | 389,097 | 409,621 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Fee and other income | 218,880 | 252,184 | 180,612 | 175,126 | 64,603 | 58,036 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Total revenues | 1,787,686 | 1,810,425 | 1,356,716 | 1,389,004 | 453,700 | 467,657 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Operating | -927,796 | -919,959 | -685,857 | -715,801 | -241,769 | -245,521 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Depreciation and amortization | -447,500 | -462,201 | -348,851 | -458,801 | -117,122 | -169,045 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| General and administrative | -148,520 | -156,115 | -116,065 | -116,050 | -37,490 | -34,705 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Income (expense) from deferred compensation plan liability | -12,638 | -10,938 | -8,790 | 1,269 | -6,756 | 4,333 | USD thousands | Reported; annual statements print this as an expense line, signs as printed | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Transaction related costs, impairment losses and other | -5,242 | -2,531 | -4,327 | -1,328 | -3,563 | -393 | USD thousands | Reported; the quarterly statements label this line without impairment losses | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Total expenses | -1,541,696 | -1,551,744 | -1,163,890 | -1,290,711 | -406,700 | -445,331 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Income from partially owned entities | 112,464 | 141,310 | 135,588 | 99,335 | 21,940 | 23,318 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Interest and other investment income, net | 45,974 | 55,113 | 41,730 | 23,423 | 22,413 | 5,107 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| (Expense) income from deferred compensation plan assets | 12,638 | 10,938 | 8,790 | -1,269 | 6,756 | -4,333 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Interest and debt expense | -390,269 | -353,868 | -268,204 | -267,502 | -84,459 | -88,714 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Gain on debt extinguishment | Not supplied: the statement does not print this line for the period | Not supplied: the statement does not print this line for the period | Not supplied: the statement prints a dash | 32,073 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Gain on sales-type lease | Not supplied: the statement prints a dash | 803,248 | 803,248 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Net gains on disposition of wholly owned and partially owned assets | 16,048 | 35,291 | 24,039 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Income (loss) before income taxes | 42,845 | 950,713 | 938,017 | -15,647 | 13,650 | -42,296 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Income tax (expense) benefit | -22,729 | -13,509 | -5,727 | -13,147 | 5,589 | -3,668 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Net income (loss) | 20,116 | 937,204 | 932,290 | -28,794 | 19,239 | -45,964 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Less net loss attributable to noncontrolling interests in consolidated subsidiaries | 51,131 | 41,622 | 30,326 | 17,122 | 8,912 | 10,180 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Net income (loss) attributable to Vornado Realty L.P. | 71,247 | 978,826 | 962,616 | -11,672 | 28,151 | -35,784 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Preferred unit distributions | -62,227 | -62,219 | -46,664 | -46,661 | -15,555 | -15,554 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Net income (loss) attributable to Class A unitholders | 9,020 | 916,607 | 915,952 | -58,333 | 12,596 | -51,338 | USD thousands | Reported; signs as printed (expense negative) | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| EBITDA (Reported) | 880,614 | 1,766,782 | 1,555,072 | 710,656 | 215,231 | 215,463 | USD thousands | Calculated: net income plus interest and debt expense plus income tax expense plus depreciation and amortization; the issuer prints no EBITDA | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Total revenues: New York (2026 composition) | Not supplied: reported on the other property composition and not comparable | Not supplied: reported on the other property composition and not comparable | 1,096,722 | 1,138,014 | 365,654 | 380,212 | USD thousands | Reported; segment revenue on the 2026 property composition (prior periods recast); the Other column contains the elimination of cleaning fees printed in the revenue note (-2,729 in Q3 2026, -2,372 in Q3 2025, -7,959 in nine months 2026, -6,706 in nine months 2025), which the statements do not print as a separate row | 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 19–20, 43–44 |
| Total revenues: Other (2026 composition) | Not supplied: reported on the other property composition and not comparable | Not supplied: reported on the other property composition and not comparable | 259,994 | 250,990 | 88,046 | 87,445 | USD thousands | Reported; segment revenue on the 2026 property composition (prior periods recast); the Other column contains the elimination of cleaning fees printed in the revenue note (-2,729 in Q3 2026, -2,372 in Q3 2025, -7,959 in nine months 2026, -6,706 in nine months 2025), which the statements do not print as a separate row | 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 19–20, 43–44 |
| Total revenues: New York (pre-2026 composition) | 1,471,997 | 1,476,522 | Not supplied: reported on the other property composition and not comparable | Not supplied: reported on the other property composition and not comparable | Not supplied: reported on the other property composition and not comparable | Not supplied: reported on the other property composition and not comparable | USD thousands | Reported; segment revenue on the pre-2026 property composition of the annual report, not comparable with the 2026 recast columns | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 69–70 |
| Total revenues: Other (pre-2026 composition) | 315,689 | 333,903 | Not supplied: reported on the other property composition and not comparable | Not supplied: reported on the other property composition and not comparable | Not supplied: reported on the other property composition and not comparable | Not supplied: reported on the other property composition and not comparable | USD thousands | Reported; segment revenue on the pre-2026 property composition of the annual report, not comparable with the 2026 recast columns | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 69–70 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | 20,116 | 937,204 | 932,290 | -28,794 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Prepaid lease payment (net of initial direct costs) | Not supplied: the statement prints a dash | 901,409 | 901,409 | Not supplied: the statement prints a dash | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Gain on sales-type lease | Not supplied: the statement prints a dash | -803,248 | -803,248 | Not supplied: the statement prints a dash | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Depreciation and amortization (including amortization of deferred financing costs) | 469,423 | 481,456 | 363,383 | 474,631 | USD thousands | Reported; includes amortization of deferred financing costs | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Equity in net income of partially owned entities | -112,464 | -141,310 | -135,588 | -99,335 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Distributions of income from partially owned entities | 142,880 | 114,754 | 80,548 | 86,015 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Straight-lining of rents | -5,086 | -71,960 | -44,235 | -77,012 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Gain on debt extinguishment | Not supplied: the statement does not print this line for the period | Not supplied: the statement does not print this line for the period | Not supplied: the statement prints a dash | -32,073 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Net gains on disposition of wholly owned and partially owned assets | -16,048 | -35,291 | -24,039 | Not supplied: the statement prints a dash | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Stock-based compensation expense | 30,172 | 25,479 | 19,114 | 17,983 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Amortization of interest rate cap premiums | 41,745 | 23,466 | 20,387 | 130 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Change in deferred tax liability | 13,008 | 3,530 | 683 | 5,685 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Amortization of below-market leases, net | -3,035 | -383 | -284 | -340 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Other non-cash adjustments | 13,995 | 4,510 | 2,488 | 8,785 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Tenant and other receivables | 4,704 | -18,787 | -30,318 | -37,335 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Prepaid assets | -8,346 | 8,644 | -52,554 | -67,342 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Other assets | -74,420 | -133,058 | -94,291 | -25,252 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Lease liabilities | 16,900 | -43,352 | -41,303 | -5,279 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Accounts payable and accrued expenses | -6,800 | 6,277 | 20,519 | 45,248 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Other liabilities | 10,979 | -955 | -2,849 | -2,718 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Net Cash from Operating Activities | 537,723 | 1,258,385 | 1,112,112 | 262,997 | USD thousands | Reported; the statement's own total | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Proceeds from partial redemption of Fifth Avenue and Times Square JV preferred equity | Not supplied: the statement prints a dash | 749,000 | 749,000 | Not supplied: the statement prints a dash | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Acquisitions of real estate and other | Not supplied: the statement prints a dash | -296,681 | -245,251 | -170,319 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Additions to real estate | -222,739 | -268,258 | -211,461 | -185,549 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Development costs and construction in progress | -242,874 | -144,609 | -117,404 | -88,361 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Proceeds from sales of real estate and other | 2,000 | 58,339 | 25,675 | 49,750 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Distributions of capital from partially owned entities | Not supplied: the statement prints a dash | 50,927 | 47,288 | 6,063 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Proceeds from sale of condominium units and ancillary amenities at 220 Central Park South | 31,605 | 37,374 | 24,839 | Not supplied: the statement prints a dash | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Investments in partially owned entities | -115,357 | -35,585 | -29,162 | -297,123 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Investment in loan receivable | -50,000 | -35,000 | -35,000 | Not supplied: the statement prints a dash | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Proceeds from repayment of loan receivable | Not supplied: the statement does not print this line for the period | Not supplied: the statement does not print this line for the period | Not supplied: the statement prints a dash | 85,000 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Net Cash from Investing Activities | -597,365 | 115,507 | 208,524 | -600,539 | USD thousands | Reported; the statement's own total | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Proceeds from borrowings | 75,000 | 835,794 | 835,420 | 1,714,781 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Repayments of borrowings | -97,439 | -1,903,513 | -1,900,683 | -1,415,569 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Distributions to Vornado | -141,103 | -141,277 | Not supplied: the statement does not print this line for the period | Not supplied: the statement does not print this line for the period | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Distributions to preferred unitholders | -62,112 | -62,104 | -46,578 | -46,575 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Repurchase of Class A units owned by Vornado | Not supplied: the statement prints a dash | -50,991 | Not supplied: the statement prints a dash | -133,396 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Distributions to redeemable security holders and noncontrolling interests in consolidated subsidiaries | -18,156 | -23,067 | -1,396 | -2,078 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Deferred financing costs | -13,870 | -7,478 | -6,809 | -34,250 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Contributions from noncontrolling interests in consolidated subsidiaries | 5,300 | 6,712 | 1,927 | 882 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Other financing activity, net | 57 | -41 | -41 | 36 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Net Cash from Financing Activities | -252,323 | -1,345,965 | -1,118,160 | 83,831 | USD thousands | Reported; the statement's own total | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Net Cash Change | -311,965 | 27,927 | 202,476 | -253,711 | USD thousands | Reported; operating plus investing plus financing; the statements print no foreign exchange effect | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Opening Cash | 1,261,584 | 949,619 | 949,619 | 977,546 | USD thousands | Reported; cash and cash equivalents plus restricted cash, as the statement reconciles | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Closing Cash | 949,619 | 977,546 | 1,152,095 | 723,835 | USD thousands | Reported; cash and cash equivalents plus restricted cash, as the statement reconciles | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Cash Interest Paid | 322,774 | 313,093 | 234,495 | 240,203 | USD thousands | Reported; cash payments for interest excluding capitalized interest, plus interest rate cap premiums; a positive amount paid | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Cash taxes paid | 7,608 | 5,201 | 5,006 | 9,349 | USD thousands | Reported; cash payments for income taxes | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Land | 2,434,209 | 2,408,914 | 2,357,135 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Buildings and improvements | 10,439,113 | 10,942,418 | 11,138,348 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Development costs and construction in progress | 1,097,395 | 890,143 | 1,037,845 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Leasehold improvements and equipment | 120,915 | 105,080 | 110,729 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Real estate, at cost (total) | 14,091,632 | 14,346,555 | 14,644,057 | USD thousands | Reported; the statement's total before accumulated depreciation | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Less accumulated depreciation and amortization | -4,025,349 | -4,191,075 | -4,534,751 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Real estate, net | 10,066,283 | 10,155,480 | 10,109,306 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Right-of-use assets | 678,804 | 671,308 | 667,270 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Net investment in lease | Not supplied: the statement prints a dash | 166,024 | 166,672 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Cash and cash equivalents | 733,947 | 840,850 | 580,496 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Restricted cash | 215,672 | 136,696 | 143,339 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Tenant and other receivables | 58,853 | 77,137 | 110,269 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Investments in partially owned entities | 2,691,478 | 1,941,278 | 2,244,170 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Receivable arising from the straight-lining of rents | 707,020 | 752,545 | 828,287 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Deferred leasing costs, net | 354,882 | 374,620 | 394,515 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Identified intangible assets, net | 118,215 | 110,593 | 104,930 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Other assets | 373,454 | 294,587 | 288,911 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Total Assets | 15,998,608 | 15,521,118 | 15,638,165 | USD thousands | Reported; the statement's own total | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Mortgages payable, net | 5,676,014 | 4,920,669 | 4,847,467 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Senior unsecured notes, net | 1,195,914 | 747,202 | 842,276 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Unsecured term loan, net | 795,948 | 797,337 | 840,569 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Unsecured revolving credit facilities | 575,000 | 720,420 | 918,000 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Lease liabilities | 749,759 | 699,640 | 694,361 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Accounts payable and accrued expenses | 374,013 | 376,190 | 411,957 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Deferred compensation plan | 114,580 | 113,778 | 102,544 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Other liabilities | 345,511 | 341,359 | 327,943 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Total Liabilities | 9,826,739 | 8,716,595 | 8,985,117 | USD thousands | Reported; the statement's own total | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Redeemable noncontrolling interests: Class A units | 708,408 | 554,136 | 561,482 | USD thousands | Reported; shown outside equity | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Redeemable noncontrolling interests: Series D cumulative redeemable preferred units | 3,535 | 3,535 | 3,535 | USD thousands | Reported; shown outside equity | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Total redeemable noncontrolling partnership units | 711,943 | 557,671 | 565,017 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Redeemable noncontrolling interest in a consolidated subsidiary | 122,715 | 90,280 | 68,158 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Temporary Equity | 834,658 | 647,951 | 633,175 | USD thousands | Reported; total redeemable noncontrolling interests | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Partners' capital | 9,242,791 | 9,478,335 | 9,487,441 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Earnings less than distributions | -4,142,249 | -3,491,603 | -3,678,344 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Accumulated other comprehensive income (loss) | 57,700 | -5 | 36,890 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Total partners' equity | 5,158,242 | 5,986,727 | 5,845,987 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Noncontrolling interests in consolidated subsidiaries | 178,969 | 169,845 | 173,886 | USD thousands | Reported | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Total Equity | 5,337,211 | 6,156,572 | 6,019,873 | USD thousands | Reported; the statement's own total | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Total Debt | 8,242,876 | 7,185,628 | 7,448,312 | USD thousands | Calculated: carrying value of mortgages payable, senior unsecured notes, unsecured term loan and unsecured revolving credit facilities, net of deferred financing costs; lease liabilities stay on their own line and are not added | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Cash & Equivalents | 733,947 | 840,850 | 580,496 | USD thousands | Reported; unrestricted cash and cash equivalents, restricted cash excluded | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mortgages payable, fixed rate | Mortgage loans | Not supplied: carrying value is disclosed only in aggregate | 3,340,000 | Not applicable | Not applicable | Secured by the related properties; non-recourse except the guarantees stated | Not supplied: no source states the legal rank | USD | 3,340,000 | Not applicable | 4.98% weighted average | Fixed | Not applicable | Not applicable | Not applicable | Not supplied: the summary table gives no maturity | Not supplied: not stated for the aggregate | 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 27–28, 42 |
| Mortgages payable, variable rate | Mortgage loans | Not supplied: carrying value is disclosed only in aggregate | 1,529,543 | Not applicable | Not applicable | Secured by the related properties; non-recourse except the guarantees stated | Not supplied: no source states the legal rank | USD | 1,529,543 | Not applicable | 5.65% weighted average | Floating | Not supplied: the aggregate row names no reference rate | Not supplied: not stated for the aggregate | Not supplied: not stated | Not supplied: the summary table gives no maturity | Not supplied: not stated for the aggregate | 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 27–28 |
| Senior unsecured notes due 2033 | Senior unsecured notes | Not supplied: carrying value is disclosed only in aggregate | 500,000 | Not applicable | Not applicable | Unsecured | Not supplied: no source states the legal rank | USD | 500,000 | Not applicable | 5.75% coupon, interest paid 1 February and 1 August | Fixed | Not applicable | Not applicable | Not applicable | 2033-02-01 | Not supplied: not stated | 10-Q_2026-09-30_vno-20260930.htm.jsonl, page 26 |
| Senior unsecured notes due 2031 | Senior unsecured notes | Not supplied: carrying value is disclosed only in aggregate | 350,000 | Not applicable | Not applicable | Unsecured | Not supplied: no source states the legal rank | USD | 350,000 | Not applicable | Not supplied: the coupon is not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: only the year 2031 is given, by the contractual obligations table | Not supplied: not stated | 10-Q_2026-09-30_vno-20260930.htm.jsonl, page 27; 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 79, 128 |
| Unsecured term loan | Term loan | Not supplied: carrying value is disclosed only in aggregate | 850,000 | 850,000 | Not applicable | Unsecured | Not supplied: no source states the legal rank | USD | 850,000 | Not applicable | SOFR plus 1.15%; 4.23% weighted average | Floating | SOFR | 115 | Not supplied: not stated | 2031-02, as fully extended | Not supplied: not stated | 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 26–28 |
| Unsecured revolving credit facilities (two facilities) | Revolving credit facilities | Not supplied: carrying value is disclosed only in aggregate | 918,000 | 918,000 | 2,130,000 | Unsecured | Not supplied: no source states the legal rank | USD | 918,000 | Not applicable | SOFR plus 1.01% on the 1,130,000 facility and SOFR plus 1.16% on the 1,000,000 facility; facility fee 24 bp; 4.18% weighted average | Floating | SOFR | 101 and 116 | Not supplied: not stated | 2031-02 and 2029-04, each as fully extended | Not applicable | 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 26–28 |
| Financing cost adjustment | Deferred financing costs, net and other | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -39,231 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_vno-20260930.htm.jsonl, page 27 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM | USD 1,766.782m | USD 710.656m | USD 1,555.072m | USD 922.366m | Calculated | T4.4 EBITDA (Reported): FY2025, 9M 2026, 9M 2025 | Components: FY2025, nine months 2026 and nine months 2025 are all available; EBITDA is derived, not issuer-stated |
| EBITDA excluding printed gains (Analyst Judgement) | LTM | USD 928.243m | USD 678.583m | USD 727.785m | USD 879.041m | Calculated | T4.4 EBITDA (Reported) less the three printed gain lines | Removes gain on debt extinguishment, gain on sales-type lease and net gains on disposition as printed; the 803.248 gain on a sales-type lease sits in both FY2025 and nine months 2025 and cancels out; equity-method gains on sale stay in |
| Total revenues | LTM | USD 1,810.425m | USD 1,389.004m | USD 1,356.716m | USD 1,842.713m | Calculated | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 | Reported components |
| Cash Interest Paid | LTM | USD 313.093m | USD 240.203m | USD 234.495m | USD 318.801m | Calculated | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, page 17 | Reported components; includes interest rate cap premiums |
| Net income (loss) | LTM | USD 937.204m | USD -28.794m | USD 932.290m | USD -23.880m | Calculated | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 | FY2025 and nine months 2025 both include the 803.248 gain on a sales-type lease |
| Net Cash from Operating Activities | LTM | USD 1,258.385m | USD 262.997m | USD 1,112.112m | USD 409.270m | Calculated | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 105; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–16 | FY2025 and nine months 2025 both include the 901.409 prepaid lease payment received from a tenant, which cancels out of the trailing figure |
| Additions to real estate | LTM | USD -268.258m | USD -185.549m | USD -211.461m | USD -242.346m | Calculated | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 105; 10-Q_2026-09-30_vno-20260930.htm.jsonl, page 16 | Reported components; outflows negative |
| Development costs and construction in progress | LTM | USD -144.609m | USD -88.361m | USD -117.404m | USD -115.566m | Calculated | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 105; 10-Q_2026-09-30_vno-20260930.htm.jsonl, page 16 | Reported components; outflows negative |
| EBITDA (Reported) | Q4 2025 | USD 1,766.782m | Not applicable | USD 1,555.072m | USD 211.710m | Calculated | T4.4 EBITDA (Reported): FY2025 and 9M 2025 | No fourth-quarter statement is printed, so Q4 is the year less nine months and is labelled calculated |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 8,242.876 | Net debt data FY2024 / 2024-12-31 | 880.614 | T4.4 EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 9.36 | Calculated | Tier 1 (audited) | Carrying-value debt; EBITDA derived, not issuer-stated |
| Net debt / EBITDA | (Gross debt - Cash) / EBITDA (Reported) | 7,508.929 | Net debt data FY2024 / 2024-12-31 | 880.614 | T4.4 EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 8.53 | Calculated | Tier 1 (audited) | Carrying-value debt; EBITDA derived, not issuer-stated; cash excludes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 880.614 | T4.4 EBITDA (Reported), FY2024 | 322.774 | T4.5 Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 2.73 | Calculated | Tier 1 (audited) | EBITDA derived, not issuer-stated; cash interest includes interest rate cap premiums |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 7,185.628 | Net debt data FY2025 / 2025-12-31 | 1,766.782 | T4.4 EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 4.07 | Calculated | Tier 1 (audited) | Carrying-value debt; EBITDA derived, not issuer-stated; FY2025 EBITDA includes an 803.248 gain on a sales-type lease |
| Net debt / EBITDA | (Gross debt - Cash) / EBITDA (Reported) | 6,344.778 | Net debt data FY2025 / 2025-12-31 | 1,766.782 | T4.4 EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 3.59 | Calculated | Tier 1 (audited) | Carrying-value debt; EBITDA derived, not issuer-stated; FY2025 EBITDA includes an 803.248 gain on a sales-type lease; cash excludes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,766.782 | T4.4 EBITDA (Reported), FY2025 | 313.093 | T4.5 Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 5.64 | Calculated | Tier 1 (audited) | EBITDA derived, not issuer-stated; FY2025 EBITDA includes an 803.248 gain on a sales-type lease; cash interest includes interest rate cap premiums |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 7,448.312 | Net debt data 2026-09-30 | 922.366 | T4.8 EBITDA (Reported) LTM | 2026-09-30 | USD | US$m | 8.08 | Calculated | Tier 2a (unaudited, auditor review) | Carrying-value debt; EBITDA derived, not issuer-stated; trailing twelve months |
| Net debt / EBITDA | (Gross debt - Cash) / EBITDA (Reported) | 6,867.816 | Net debt data 2026-09-30 | 922.366 | T4.8 EBITDA (Reported) LTM | 2026-09-30 | USD | US$m | 7.45 | Calculated | Tier 2a (unaudited, auditor review) | Carrying-value debt; EBITDA derived, not issuer-stated; trailing twelve months; cash excludes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 922.366 | T4.8 EBITDA (Reported) LTM | 318.801 | T4.8 Cash Interest Paid LTM | 2026-09-30 | USD | US$m | 2.89 | Calculated | Tier 2a (unaudited, auditor review) | EBITDA derived, not issuer-stated; trailing twelve months; cash interest includes interest rate cap premiums |
| Total debt / EBITDA excluding printed gains (Analyst Judgement) | Gross debt / (EBITDA (Reported) - printed gain lines) | 8,242.876 | Net debt data FY2024 / 2024-12-31 | 864.566 | T4.4 EBITDA (Reported) less printed gain lines, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 9.53 | Calculated | Tier 1 (audited) | Normalisation is Analyst Judgement: removes only the gain lines the statements print separately (gain on debt extinguishment, gain on sales-type lease, net gains on disposition); equity-method gains on sale stay inside EBITDA |
| Net debt / EBITDA excluding printed gains (Analyst Judgement) | (Gross debt - Cash) / (EBITDA (Reported) - printed gain lines) | 7,508.929 | Net debt data FY2024 / 2024-12-31 | 864.566 | T4.4 EBITDA (Reported) less printed gain lines, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 8.69 | Calculated | Tier 1 (audited) | Normalisation is Analyst Judgement: removes only the gain lines the statements print separately (gain on debt extinguishment, gain on sales-type lease, net gains on disposition); equity-method gains on sale stay inside EBITDA |
| EBITDA excluding printed gains / cash interest (Analyst Judgement) | (EBITDA (Reported) - printed gain lines) / Cash Interest Paid | 864.566 | T4.4 EBITDA (Reported) less printed gain lines, FY2024 | 322.774 | T4.5 Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 2.68 | Calculated | Tier 1 (audited) | Normalisation is Analyst Judgement: removes only the gain lines the statements print separately (gain on debt extinguishment, gain on sales-type lease, net gains on disposition); equity-method gains on sale stay inside EBITDA |
| Total debt / EBITDA excluding printed gains (Analyst Judgement) | Gross debt / (EBITDA (Reported) - printed gain lines) | 7,185.628 | Net debt data FY2025 / 2025-12-31 | 928.243 | T4.4 EBITDA (Reported) less printed gain lines, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 7.74 | Calculated | Tier 1 (audited) | Normalisation is Analyst Judgement: removes only the gain lines the statements print separately (gain on debt extinguishment, gain on sales-type lease, net gains on disposition); equity-method gains on sale stay inside EBITDA |
| Net debt / EBITDA excluding printed gains (Analyst Judgement) | (Gross debt - Cash) / (EBITDA (Reported) - printed gain lines) | 6,344.778 | Net debt data FY2025 / 2025-12-31 | 928.243 | T4.4 EBITDA (Reported) less printed gain lines, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 6.84 | Calculated | Tier 1 (audited) | Normalisation is Analyst Judgement: removes only the gain lines the statements print separately (gain on debt extinguishment, gain on sales-type lease, net gains on disposition); equity-method gains on sale stay inside EBITDA |
| EBITDA excluding printed gains / cash interest (Analyst Judgement) | (EBITDA (Reported) - printed gain lines) / Cash Interest Paid | 928.243 | T4.4 EBITDA (Reported) less printed gain lines, FY2025 | 313.093 | T4.5 Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 2.96 | Calculated | Tier 1 (audited) | Normalisation is Analyst Judgement: removes only the gain lines the statements print separately (gain on debt extinguishment, gain on sales-type lease, net gains on disposition); equity-method gains on sale stay inside EBITDA |
| Total debt / EBITDA excluding printed gains (Analyst Judgement) | Gross debt / (EBITDA (Reported) - printed gain lines) | 7,448.312 | Net debt data 2026-09-30 | 879.041 | T4.8 EBITDA excluding printed gain lines LTM | 2026-09-30 | USD | US$m | 8.47 | Calculated | Tier 2a (unaudited, auditor review) | Normalisation is Analyst Judgement: removes only the gain lines the statements print separately (gain on debt extinguishment, gain on sales-type lease, net gains on disposition); equity-method gains on sale stay inside EBITDA |
| Net debt / EBITDA excluding printed gains (Analyst Judgement) | (Gross debt - Cash) / (EBITDA (Reported) - printed gain lines) | 6,867.816 | Net debt data 2026-09-30 | 879.041 | T4.8 EBITDA excluding printed gain lines LTM | 2026-09-30 | USD | US$m | 7.81 | Calculated | Tier 2a (unaudited, auditor review) | Normalisation is Analyst Judgement: removes only the gain lines the statements print separately (gain on debt extinguishment, gain on sales-type lease, net gains on disposition); equity-method gains on sale stay inside EBITDA |
| EBITDA excluding printed gains / cash interest (Analyst Judgement) | (EBITDA (Reported) - printed gain lines) / Cash Interest Paid | 879.041 | T4.8 EBITDA excluding printed gain lines LTM | 318.801 | T4.5 Cash Interest Paid LTM from T4.8 | 2026-09-30 | USD | US$m | 2.76 | Calculated | Tier 2a (unaudited, auditor review) | Normalisation is Analyst Judgement: removes only the gain lines the statements print separately (gain on debt extinguishment, gain on sales-type lease, net gains on disposition); equity-method gains on sale stay inside EBITDA |
| Total debt / total assets | Gross debt / Total Assets | 8,242.876 | Net debt data FY2024 / 2024-12-31 | 15,998.608 | T4.6 Total Assets | FY2024 / 2024-12-31 | USD | US$m | 0.52 | Calculated | Tier 1 (audited) | Book assets at depreciated cost; not a market or appraised value |
| Total debt / total assets | Gross debt / Total Assets | 7,185.628 | Net debt data FY2025 / 2025-12-31 | 15,521.118 | T4.6 Total Assets | FY2025 / 2025-12-31 | USD | US$m | 0.46 | Calculated | Tier 1 (audited) | Book assets at depreciated cost; not a market or appraised value |
| Total debt / total assets | Gross debt / Total Assets | 7,448.312 | Net debt data 2026-09-30 | 15,638.165 | T4.6 Total Assets | 2026-09-30 | USD | US$m | 0.48 | Calculated | Tier 2a (unaudited, auditor review) | Book assets at depreciated cost; not a market or appraised value |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Issuer-reported, trust level | FFO attributable to common shareholders plus assumed conversions (USD thousands, period flow) | 117,372 | 122,646 | 373,482 | 363,086 | Up in the quarter, down over nine months | The trust's measure; the partnership prints no equivalent. Items affecting comparability raised FFO by 2,837 in the third quarter of 2025 and cut it by 4,010 in the third quarter of 2026; they raised it by 19,243 over nine months 2025 and 2,145 over nine months 2026 |
| Issuer-reported, trust level | FFO per diluted share (USD, rate; never averaged) | 0.58 | 0.62 | 1.86 | 1.85 | Up in the quarter, slightly down over nine months | The trust's per-share measure; not a partnership figure |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Issuer's own unadjusted EBITDA, or derived from components when not stated | No EBITDA, EBITDAre or adjusted EBITDA is printed in any source | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 32 and 10-K_2024-12-31_vno-20241231.htm.jsonl, page 31 mention EBITDA only in covenant descriptions | All | High: every leverage and cover ratio depends on the derived figure | Fundamental credit; Downside; Forward credit model | Derived as net income plus interest and debt expense plus income tax plus depreciation and amortization and labelled calculated |
| EBITDA one-offs | Reported EBITDA with source against normalised shown | Net income includes gains the statements print separately | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102 and 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13: gain on sales-type lease 803,248 in FY2025 and nine months 2025; net gains on disposition 35,291, 24,039; gain on debt extinguishment 32,073 in nine months 2026 | FY2024, FY2025, nine months 2025 and 2026 | High: FY2025 total debt over EBITDA is 4.07x reported and 7.74x excluding the printed gains | Fundamental credit; Downside | Both shown; the trailing figure is the better guide because the largest gain cancels; normalisation is Analyst Judgement |
| EBITDA and equity-method income | EBITDA before income from unconsolidated entities where it is not cash | Derived EBITDA includes income from partially owned entities, including gains on sale | 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 23–24: income from partially owned entities 99,335 in nine months 2026 includes a net gain on sale of 44,329 at Alexander's; 10-K_2025-12-31_vno-20251231.htm.jsonl, page 123: 76,162 gain at the Fifth Avenue and Times Square joint venture in FY2025 | FY2025, nine months 2025 and 2026, trailing twelve months | Medium: 44,329 of the 922,366 trailing EBITDA | Fundamental credit | Not removed because the statements do not print it as a line; flagged for the credit view |
| Total debt: carrying value against principal | Balance-sheet carrying value, with the principal difference logged | Debt summary shows principal and deferred financing costs separately | 10-Q_2026-09-30_vno-20260930.htm.jsonl, page 27: principal 7,487,543, deferred financing costs net -39,231, carrying value 7,448,312; 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 127–128: principal 7,214,457, costs -28,829, carrying value 7,185,628 | FY2024, FY2025, 2026-09-30 | Low: 0.5% of principal | Liquidity; Refinancing & LME | Carrying value used in every ratio; principal shown in the debt reconciliation |
| Lease liabilities | Lease liabilities on their own line are not added to debt | Lease liabilities of 694,361 at 2026-09-30 are on their own line | 10-Q_2026-09-30_vno-20260930.htm.jsonl, page 12 | All balance sheets | Medium: 9.3% of carrying-value debt | Fundamental credit | Excluded from Total Debt and flagged |
| Net debt and restricted cash | Cash net of restricted cash | Cash flow statement reconciles to cash plus restricted cash | 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12, 16–17: restricted cash 143,339 at 2026-09-30 | All balance sheets | Medium: 143,339 of cash held restricted | Liquidity | Net debt uses unrestricted cash only |
| Multi-figure event: the 770 Broadway master lease with a tenant | All figures with each statement's role | Cash received, cash flow line and income-statement gain differ | 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 16, 51, 71 and 10-K_2025-12-31_vno-20251231.htm.jsonl, page 105: management discussion states a 935,000 prepaid lease payment; the cash flow statement shows 901,409 net of initial direct costs; the income statement shows a gain on sales-type lease of 803,248 | FY2025, nine months 2025 | High: sets FY2025 EBITDA and operating cash flow | Fundamental credit; Earnings quality | Cash flow line 901,409 used for cash; gain 803,248 for EBITDA; 935,000 is the cash received before costs |
| Cash interest and interest expense | Cash interest paid is kept apart from interest expense | Cash interest includes interest rate cap premiums and excludes capitalized interest | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 102, 106: interest and debt expense 353,868 against cash paid 313,093 in FY2025 | All | Low: cover uses cash paid as the method requires | Fundamental credit | Cover uses cash interest paid |
| Funds from operations | Not in the method's list; shown for context | Reported for the trust's common shareholders only | 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 50–51, 78–79 | Quarter and nine months | Low | Earnings quality | Shown in the KPI dashboard as a trust measure |
| Segments | One segment basis across periods | Properties moved to the Other segment from the first quarter of 2026 and prior periods recast | 10-Q_2026-09-30_vno-20260930.htm.jsonl, page 18; 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 154–155 | FY2025 and 2026 quarterly comparatives | Low for the statements, Medium for segment comparisons | Business & governance | No segment sum is stated in this module; segment figures must not be spliced across the annual and quarterly reports |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 8,242.876 | 733.947 | 7,508.929 | US$m | Gross debt is the carrying value of mortgages payable, senior unsecured notes, the unsecured term loan and unsecured revolving credit facilities, net of deferred financing costs; the principal total is 8,282.176; lease liabilities of 749.759 sit on their own line and are excluded; cash excludes restricted cash of 215.672; reported, not pro forma |
| FY2025 / 2025-12-31 | 7,185.628 | 840.850 | 6,344.778 | US$m | Gross debt is the carrying value of mortgages payable, senior unsecured notes, the unsecured term loan and unsecured revolving credit facilities, net of deferred financing costs; the principal total is 7,214.457; lease liabilities of 699.640 sit on their own line and are excluded; cash excludes restricted cash of 136.696; reported, not pro forma |
| 2026-09-30 | 7,448.312 | 580.496 | 6,867.816 | US$m | Gross debt is the carrying value of mortgages payable, senior unsecured notes, the unsecured term loan and unsecured revolving credit facilities, net of deferred financing costs; the principal total is 7,487.543; lease liabilities of 694.361 sit on their own line and are excluded; cash excludes restricted cash of 143.339; reported, not pro forma |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 7,214.457 | -28.829 | 7,185.628 | US$m | Principal is the sum of the maturity rows. Reconciling items are deferred financing costs, net and other: mortgages payable -23.368, senior unsecured notes -2.798 and unsecured term loan -2.663; the ladder leaves out no debt because the two loans in maturity default are shown as their own row |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Joint venture formed for 350 Park Avenue: the 400.000 mortgage loan on the property satisfied at closing and the property deconsolidated | 2026-10-20 | Not supplied: the source states the mortgage loan was satisfied at closing but not the cash paid or received | Not supplied: the source states the mortgage loan was satisfied at closing but not the cash paid or received | Not supplied: pro forma net debt is not stated | US$m | After the 2026-09-30 balance sheet, so excluded from every period figure. The source gives no cash effect and no change in other consolidated debt, and states an estimated net gain of about 485.000 in the fourth quarter of 2026, which is not net debt. Source: 10-Q_2026-09-30_vno-20260930.htm.jsonl, page 45 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 9.36 | 8.53 | x | Annual: carrying-value debt over derived reported EBITDA; the issuer prints no EBITDA |
| FY2025 / 2025-12-31 | 4.07 | 3.59 | x | Annual: carrying-value debt over derived reported EBITDA; EBITDA includes an 803.248 gain on a sales-type lease and 35.291 of net gains on disposition |
| 2026-09-30 | 8.08 | 7.45 | x | Trailing twelve months: FY2025 plus nine months 2026 less nine months 2025 EBITDA; the gain cancels out of the trailing figure |

The main qualification is that EBITDA is derived by this module because the issuer prints none, and the FY2025 figure includes large one-off gains.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2.73 | x | Annual: derived reported EBITDA over cash interest paid |
| FY2025 / 2025-12-31 | 5.64 | x | Annual: derived reported EBITDA over cash interest paid; EBITDA includes an 803.248 gain on a sales-type lease |
| 2026-09-30 | 2.89 | x | Trailing twelve months for both EBITDA and cash interest paid |

The main qualification is that cover uses cash interest paid, which includes interest rate cap premiums, over derived EBITDA.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 733.947 | 1,532.357 | US$m | Cash is unrestricted cash and cash equivalents. Undrawn is the two revolving facilities' commitments of 2,165.000 less drawings of 575.000 and letters of credit of 57.643; management states USD 1.5 billion available |
| FY2025 / 2025-12-31 | 840.850 | 1,418.811 | US$m | Cash is unrestricted cash and cash equivalents. Undrawn is the two revolving facilities' commitments of 2,165.000 less drawings of 720.420 and letters of credit of 25.769; management states USD 1.4 billion available |
| 2026-09-30 | 580.496 | 1,188.280 | US$m | Cash is unrestricted cash and cash equivalents. Undrawn is the two revolving facilities' commitments of 2,130.000 less drawings of 918.000 and letters of credit of 23.720; management states USD 1.2 billion available |

The main qualification is that undrawn capacity is computed from facility sizes, drawings and letters of credit, and it agrees with management's own rounded figures.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 | 925.000 | US$m | Ladder drawn at 2025-12-31, the only date a ladder is printed; Mortgages payable 525,000 plus unsecured debt 400,000 (the senior notes repaid at maturity in June 2026) |
| 2027 | 2,400.420 | US$m | Ladder drawn at 2025-12-31, the only date a ladder is printed; Mortgages payable 880,000 plus unsecured debt 1,520,420, which assumes as-of-right extensions of the revolving credit facility and term loan that were refinanced in January 2026 |
| 2028 | 2,300.000 | US$m | Ladder drawn at 2025-12-31, the only date a ladder is printed; Mortgages payable 2,300,000; no unsecured debt |
| 2030 | 450.000 | US$m | Ladder drawn at 2025-12-31, the only date a ladder is printed; Mortgages payable 450,000; no unsecured debt |
| Thereafter | 820.000 | US$m | Ladder drawn at 2025-12-31, the only date a ladder is printed; Mortgages payable 470,000 plus unsecured debt 350,000 |
| In maturity default | 319.037 | US$m | Ladder drawn at 2025-12-31, the only date a ladder is printed; The 888 Seventh Avenue mortgage loan of 244,543 and the 606 Broadway mortgage loan of 74,494, both matured unpaid and excluded from the ladder by the issuer; no 2029 row because the issuer prints a dash for 2029 |

The main qualification is that the only ladder is drawn at 2025-12-31 and pre-dates the 2026 refinancings.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 | 1,787.686 | 880.614 | US$m | Annual; EBITDA identity is reported, derived by this module because the issuer prints no EBITDA or adjusted EBITDA |
| FY2025 | 1,810.425 | 1,766.782 | US$m | Annual; EBITDA identity is reported, derived; includes an 803.248 gain on a sales-type lease |
| LTM 2026-09-30 | 1,842.713 | 922.366 | US$m | Trailing twelve months, the same twelve-month duration as the annual rows; EBITDA identity is reported, derived |

The main qualification is that EBITDA is derived and the FY2025 figure includes large one-off gains.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | US$m | Mortgages are described as secured by the properties and the notes, term loan and revolving facilities as unsecured, but the indentures and credit agreements that fix legal rank, guarantors and obligors are not supplied, and rank is never inferred from an instrument name |

The main qualification is that no source states the legal rank of any facility, so no stack is drawn.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Opening: EBITDA (Reported) | Not supplied: the issuer states no adjusted EBITDA, so there are no add-backs to bridge | US$m | The reported measure is derived by this module, not stated by the issuer |
| Closing: adjusted EBITDA | Not supplied: the issuer states no adjusted EBITDA, so there are no add-backs to bridge | US$m | No adjusted EBITDA is stated in any source, so the closing measure and the steps between are not supplied |

The main qualification is that the issuer states no adjusted EBITDA, so no bridge exists.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-30 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue | 1,787.686 | 1,810.425 | 1,842.713 | US$m | Reported; trailing is FY2025 plus nine months 2026 less nine months 2025 | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| EBITDA (Reported, derived) | 880.614 | 1,766.782 | 922.366 | US$m | Calculated; the issuer prints no EBITDA | T4.4 and T4.8 |
| EBITDA excluding printed gains (Analyst Judgement) | 864.566 | 928.243 | 879.041 | US$m | Calculated; removes the gain lines the statements print separately | T4.8 |
| Net income (loss) | 20.116 | 937.204 | -23.880 | US$m | Reported; FY2025 includes the 803.248 gain on a sales-type lease | 10-K_2025-12-31_vno-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 12–13 |
| Cash interest paid | 322.774 | 313.093 | 318.801 | US$m | Reported; includes interest rate cap premiums | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Net cash from operating activities | 537.723 | 1,258.385 | 409.270 | US$m | Reported; FY2025 includes a 901.409 prepaid lease payment | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 15–17 |
| Total debt (carrying value) | 8,242.876 | 7,185.628 | 7,448.312 | US$m | Calculated from balance-sheet lines | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Cash and cash equivalents | 733.947 | 840.850 | 580.496 | US$m | Reported; restricted cash excluded | 10-K_2025-12-31_vno-20251231.htm.jsonl, pages 101–102; 10-Q_2026-09-30_vno-20260930.htm.jsonl, pages 11–12 |
| Net debt | 7,508.929 | 6,344.778 | 6,867.816 | US$m | Calculated: gross debt less cash | Net debt data |
| Undrawn committed facilities | 1,532.357 | 1,418.811 | 1,188.280 | US$m | Calculated from facility sizes, drawings and letters of credit | Chart data: liquidity |
| Total debt / EBITDA | 9.36 | 4.07 | 8.08 | x | Calculated on derived reported EBITDA; trailing twelve months for 2026-09-30 | T4.9 |
| Net debt / EBITDA | 8.53 | 3.59 | 7.45 | x | Calculated on derived reported EBITDA; trailing twelve months for 2026-09-30 | T4.9 |
| EBITDA / cash interest | 2.73 | 5.64 | 2.89 | x | Calculated on derived reported EBITDA; trailing twelve months for 2026-09-30 | T4.9 |
| Total debt / EBITDA excluding printed gains (Analyst Judgement) | 9.53 | 7.74 | 8.47 | x | Calculated on EBITDA excluding the printed gain lines | T4.9 |
| Net debt / EBITDA excluding printed gains (Analyst Judgement) | 8.69 | 6.84 | 7.81 | x | Calculated on EBITDA excluding the printed gain lines | T4.9 |
| EBITDA excluding printed gains / cash interest (Analyst Judgement) | 2.68 | 2.96 | 2.76 | x | Calculated on EBITDA excluding the printed gain lines | T4.9 |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Reported-fact summary of the partnership's statements | Ready | Lines printed as dashes are not supplied; first and second quarter columns are not tabulated | None needed beyond the gap lines |
| Leverage and cover on trailing derived EBITDA | Ready with Limitations | EBITDA is derived, includes equity-method gains and uses a definition the issuer does not state | State the definition wherever a ratio is quoted; show the version excluding printed gains beside it |
| FY2025 leverage and cover | Ready with Limitations | FY2025 EBITDA includes an 803,248 gain on a sales-type lease and 35,291 of disposition gains | Quote the normalised figure beside the reported one |
| Liquidity at 2026-09-30 | Ready with Limitations | Undrawn capacity is computed from stated facility sizes, drawings and letters of credit and agrees with management's statement | Quote management's figure with the computation |
| Debt maturity wall | Ready with Limitations | The only ladder is at 2025-12-31 and pre-dates the 2026 refinancings; two loans are in maturity default | Obtain a ladder at 2026-09-30 |
| Debt stack, ranking and covenant headroom | Not Ready | Legal rank, guarantors and covenant levels are not stated and the governing documents are not supplied | Obtain the executed credit agreements and indentures |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 18 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 28 |
| Fields total | 30 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 5 |

## Calculations

| ID | Calculation | Inputs | Result |
| --- | --- | --- | --- |
| CALC-01 | EBITDA (Reported) FY2024 | Net income + interest and debt expense + income tax expense + depreciation and amortization, in USD thousands, as 20,116 + 390,269 + 22,729 + 447,500 | 880,614 |
| CALC-02 | EBITDA (Reported) FY2025 | Net income + interest and debt expense + income tax expense + depreciation and amortization, in USD thousands, as 937,204 + 353,868 + 13,509 + 462,201 | 1,766,782 |
| CALC-03 | EBITDA (Reported) 9M 2025 | Net income + interest and debt expense + income tax expense + depreciation and amortization, in USD thousands, as 932,290 + 268,204 + 5,727 + 348,851 | 1,555,072 |
| CALC-04 | EBITDA (Reported) 9M 2026 | Net income + interest and debt expense + income tax expense + depreciation and amortization, in USD thousands, as -28,794 + 267,502 + 13,147 + 458,801 | 710,656 |
| CALC-05 | EBITDA (Reported) Q3 2025 | Net income + interest and debt expense + income tax expense + depreciation and amortization, in USD thousands, as 19,239 + 84,459 + -5,589 + 117,122 | 215,231 |
| CALC-06 | EBITDA (Reported) Q3 2026 | Net income + interest and debt expense + income tax expense + depreciation and amortization, in USD thousands, as -45,964 + 88,714 + 3,668 + 169,045 | 215,463 |
| CALC-07 | Total Debt FY2024 | Mortgages payable, net + senior unsecured notes, net + unsecured term loan, net + unsecured revolving credit facilities, in USD thousands, as 5,676,014 + 1,195,914 + 795,948 + 575,000 | 8,242,876 |
| CALC-08 | Total Debt FY2025 | Mortgages payable, net + senior unsecured notes, net + unsecured term loan, net + unsecured revolving credit facilities, in USD thousands, as 4,920,669 + 747,202 + 797,337 + 720,420 | 7,185,628 |
| CALC-09 | Total Debt 9M 2026 | Mortgages payable, net + senior unsecured notes, net + unsecured term loan, net + unsecured revolving credit facilities, in USD thousands, as 4,847,467 + 842,276 + 840,569 + 918,000 | 7,448,312 |
| CALC-10 | Net debt FY2024 / 2024-12-31 | Gross debt less cash and cash equivalents, in USD millions, as 8,242.876 - 733.947 | 7,508.929 |
| CALC-11 | Net debt FY2025 / 2025-12-31 | Gross debt less cash and cash equivalents, in USD millions, as 7,185.628 - 840.850 | 6,344.778 |
| CALC-12 | Net debt 2026-09-30 | Gross debt less cash and cash equivalents, in USD millions, as 7,448.312 - 580.496 | 6,867.816 |
| CALC-13 | Contractual principal FY2024 / 2024-12-31 | Mortgages payable + senior unsecured notes + unsecured term loan + unsecured revolving credit facilities at principal, in USD thousands, as 5,707,176 + 1,200,000 + 800,000 + 575,000 | 8,282,176 |
| CALC-14 | Reconciling items FY2024 / 2024-12-31 | Deferred financing costs, net and other: mortgages payable + senior unsecured notes + unsecured term loan, in USD thousands, as (31,162) + (4,086) + (4,052) | -39,300 |
| CALC-15 | Contractual principal FY2025 / 2025-12-31 | Mortgages payable + senior unsecured notes + unsecured term loan + unsecured revolving credit facilities at principal, in USD thousands, as 4,944,037 + 750,000 + 800,000 + 720,420 | 7,214,457 |
| CALC-16 | Reconciling items FY2025 / 2025-12-31 | Deferred financing costs, net and other: mortgages payable + senior unsecured notes + unsecured term loan, in USD thousands, as (23,368) + (2,798) + (2,663) | -28,829 |
| CALC-17 | Contractual principal 2026-09-30 | Mortgages payable + senior unsecured notes + unsecured term loan + unsecured revolving credit facilities at principal, in USD thousands, as 4,869,543 + 850,000 + 850,000 + 918,000 | 7,487,543 |
| CALC-18 | Reconciling items 2026-09-30 | Deferred financing costs, net and other: mortgages payable + senior unsecured notes + unsecured term loan, in USD thousands, as (22,076) + (7,724) + (9,431) | -39,231 |
| CALC-19 | Undrawn committed facilities FY2024 / 2024-12-31 | Commitments less drawings less letters of credit, in USD thousands, as 2,165,000 - 575,000 - 57,643 | 1,532,357 |
| CALC-20 | Undrawn committed facilities FY2025 / 2025-12-31 | Commitments less drawings less letters of credit, in USD thousands, as 2,165,000 - 720,420 - 25,769 | 1,418,811 |
| CALC-21 | Undrawn committed facilities 2026-09-30 | Commitments less drawings less letters of credit, in USD thousands, as 2,130,000 - 918,000 - 23,720 | 1,188,280 |
| CALC-22 | Contractual principal from the maturity ladder at 2025-12-31 | 2026 + 2027 + 2028 + 2030 + thereafter + in maturity default, in USD thousands, as 925,000 + 2,400,420 + 2,300,000 + 450,000 + 820,000 + 319,037 | 7,214,457 |
| CALC-23 | 2026 maturities | Mortgages payable 525,000 + unsecured debt 400,000, in USD thousands | 925,000 |
| CALC-24 | 2027 maturities | Mortgages payable 880,000 + unsecured debt 1,520,420, in USD thousands | 2,400,420 |
| CALC-25 | Maturities after 2030 | Mortgages payable 470,000 + unsecured debt 350,000, in USD thousands | 820,000 |
| CALC-26 | Loans in maturity default at 2025-12-31 | 888 Seventh Avenue mortgage loan 244,543 + 606 Broadway mortgage loan 74,494, in USD thousands | 319,037 |
| CALC-27 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 + nine months 2026 - nine months 2025, in USD thousands, as 1,766,782 + 710,656 - 1,555,072 | 922,366 |
| CALC-28 | LTM cash interest paid to 2026-09-30 | FY2025 + nine months 2026 - nine months 2025, in USD thousands, as 313,093 + 240,203 - 234,495 | 318,801 |
| CALC-29 | LTM total revenues to 2026-09-30 | FY2025 + nine months 2026 - nine months 2025, in USD thousands, as 1,810,425 + 1,389,004 - 1,356,716 | 1,842,713 |
| CALC-30 | LTM net cash from operating activities to 2026-09-30 | FY2025 + nine months 2026 - nine months 2025, in USD thousands, as 1,258,385 + 262,997 - 1,112,112 | 409,270 |
| CALC-31 | LTM additions to real estate and development spending to 2026-09-30 | (268,258 + 144,609) + (185,549 + 88,361) - (211,461 + 117,404), in USD thousands, outflows shown positive | 357,912 |
| CALC-32 | LTM operating cash flow less additions to real estate and development spending | 409,270 - 357,912, in USD thousands | 51,358 |
| CALC-33 | LTM distributions to preferred unitholders to 2026-09-30 | 62,104 + 46,575 - 46,578, in USD thousands, outflows shown positive | 62,101 |
| CALC-34 | LTM cash flow after preferred distributions | 51,358 - 62,101, in USD thousands | -10,743 |
| CALC-35 | Printed gain lines removed from EBITDA | Gain on debt extinguishment + gain on sales-type lease + net gains on disposition, in USD thousands: FY2024 16,048; FY2025 803,248 + 35,291; nine months 2025 803,248 + 24,039; nine months 2026 32,073 | FY2024 16,048; FY2025 838,539; nine months 2025 827,287; nine months 2026 32,073 |
| CALC-36 | EBITDA excluding printed gains (Analyst Judgement) | EBITDA (Reported) less printed gain lines, in USD thousands | FY2024 864,566; FY2025 928,243; nine months 2025 727,785; nine months 2026 678,583; LTM 879,041 |
| CALC-37 | EBITDA (Reported) Q4 2025 | FY2025 less nine months 2025, in USD thousands, as 1,766,782 - 1,555,072 | 211,710 |
| CALC-38 | Net borrowings in the nine months to 2026-09-30 | Proceeds from borrowings less repayments of borrowings, in USD thousands, as 1,714,781 - 1,415,569 | 299,212 |
| CALC-39 | Change in net debt from 2025-12-31 to 2026-09-30 | 6,867.816 - 6,344.778, in USD millions | 523.038 |
| CALC-40 | Change in cash and cash equivalents from 2025-12-31 to 2026-09-30 | 840,850 - 580,496, in USD thousands | 260,354 |
| CALC-41 | FY2025 EBITDA in USD millions rounded to two decimals for the findings | 1,766,782 thousand / 1,000 | 1,766.78 |
| CALC-42 | FY2025 printed gains in USD millions rounded to two decimals for the findings | 838,539 thousand / 1,000 | 838.54 |
| CALC-43 | Gain on sales-type lease in USD millions rounded to two decimals for the findings | 803,248 thousand / 1,000 | 803.25 |
| CALC-44 | Change in net debt in USD millions rounded to two decimals for the findings | 523,038 thousand / 1,000 | 523.04 |
| CALC-45 | Net debt 2026-09-30 in USD millions rounded to two decimals for the findings | 6,867,816 thousand / 1,000 | 6,867.82 |
| CALC-46 | Undrawn committed facilities 2026-09-30 in USD millions rounded to two decimals for the findings | 1,188,280 thousand / 1,000 | 1,188.28 |
| CALC-47 | Cash 2026-09-30 in USD millions rounded to two decimals for the findings | 580,496 thousand / 1,000 | 580.50 |
| CALC-48 | Income from partially owned entities, nine months 2026 in USD millions rounded to two decimals for the findings | 99,335 thousand / 1,000 | 99.34 |
| CALC-49 | Net gain on sale at Alexanders, nine months 2026 in USD millions rounded to two decimals for the findings | 44,329 thousand / 1,000 | 44.33 |
| CALC-50 | Distributions of income from partially owned entities, nine months 2026 in USD millions rounded to two decimals for the findings | 86,015 thousand / 1,000 | 86.02 |
| CALC-51 | Net cash used in investing, nine months 2026 in USD millions rounded to two decimals for the findings | 600,539 thousand / 1,000 | 600.54 |
| CALC-52 | Investments in partially owned entities, nine months 2026 in USD millions rounded to two decimals for the findings | 297,123 thousand / 1,000 | 297.12 |
| CALC-53 | Additions to real estate, nine months 2026 in USD millions rounded to two decimals for the findings | 185,549 thousand / 1,000 | 185.55 |
| CALC-54 | Acquisitions of real estate, nine months 2026 in USD millions rounded to two decimals for the findings | 170,319 thousand / 1,000 | 170.32 |
| CALC-55 | Repurchase of Class A units, nine months 2026 in USD millions rounded to two decimals for the findings | 133,396 thousand / 1,000 | 133.40 |
| CALC-56 | Net cash from operating activities, nine months 2026 in USD millions rounded to two decimals for the findings | 262,997 thousand / 1,000 | 263.00 |
| CALC-57 | Net borrowings, nine months 2026 in USD millions rounded to two decimals for the findings | 299,212 thousand / 1,000 | 299.21 |
| CALC-58 | Fall in cash and cash equivalents in USD millions rounded to two decimals for the findings | 260,354 thousand / 1,000 | 260.35 |
| CALC-59 | Prepaid lease payment net of initial direct costs in USD millions rounded to two decimals for the findings | 901,409 thousand / 1,000 | 901.41 |
| CALC-60 | Net cash from operating activities, nine months 2025 in USD millions rounded to two decimals for the findings | 1,112,112 thousand / 1,000 | 1,112.11 |
| CALC-61 | LTM net cash from operating activities in USD millions rounded to two decimals for the findings | 409,270 thousand / 1,000 | 409.27 |
| CALC-62 | LTM cash interest paid in USD millions rounded to two decimals for the findings | 318,801 thousand / 1,000 | 318.80 |
| CALC-63 | LTM additions and development in USD millions rounded to two decimals for the findings | 357,912 thousand / 1,000 | 357.91 |
| CALC-64 | LTM operating cash flow less additions and development in USD millions rounded to two decimals for the findings | 51,358 thousand / 1,000 | 51.36 |
| CALC-65 | LTM preferred distributions in USD millions rounded to two decimals for the findings | 62,101 thousand / 1,000 | 62.10 |
| CALC-66 | LTM cash flow after preferred distributions in USD millions rounded to two decimals for the findings | 10,743 thousand / 1,000 | 10.74 |
| CALC-67 | Undrawn committed facilities 2025-12-31 in USD millions rounded to two decimals for the findings | 1,418,811 thousand / 1,000 | 1,418.81 |
| CALC-68 | Drawings 2025-12-31 in USD millions rounded to two decimals for the findings | 720,420 thousand / 1,000 | 720.42 |
| CALC-69 | Drawings 2026-09-30 in USD millions rounded to two decimals for the findings | 918,000 thousand / 1,000 | 918.00 |
| CALC-70 | Restricted cash 2026-09-30 in USD millions rounded to two decimals for the findings | 143,339 thousand / 1,000 | 143.34 |
| CALC-71 | Maturities 2026 in USD millions rounded to two decimals for the findings | 925,000 thousand / 1,000 | 925.00 |
| CALC-72 | Maturities 2027 in USD millions rounded to two decimals for the findings | 2,400,420 thousand / 1,000 | 2,400.42 |
| CALC-73 | Maturities 2028 in USD millions rounded to two decimals for the findings | 2,300,000 thousand / 1,000 | 2,300.00 |
| CALC-74 | Loans in maturity default in USD millions rounded to two decimals for the findings | 319,037 thousand / 1,000 | 319.04 |
| CALC-75 | Total Debt 2026-09-30 in USD millions rounded to two decimals for the findings | 7,448,312 thousand / 1,000 | 7,448.31 |
| CALC-76 | Deferred financing costs 2026-09-30 in USD millions rounded to two decimals for the findings | 39,231 thousand / 1,000 | 39.23 |
| CALC-77 | Contractual principal 2026-09-30 in USD millions rounded to two decimals for the findings | 7,487,543 thousand / 1,000 | 7,487.54 |
| CALC-78 | Lease liabilities 2026-09-30 in USD millions rounded to two decimals for the findings | 694,361 thousand / 1,000 | 694.36 |
| CALC-79 | Mortgage loan satisfied at closing in USD millions rounded to two decimals for the findings | 400,000 thousand / 1,000 | 400.00 |
| CALC-80 | Estimated fourth-quarter 2026 net gain in USD millions rounded to two decimals for the findings | 485,000 thousand / 1,000 | 485.00 |
| CALC-81 | Joint venture loan matured unpaid in USD millions rounded to two decimals for the findings | 48,000 thousand / 1,000 | 48.00 |
| CALC-82 | Prepaid lease payment received in USD millions rounded to two decimals for the findings | 935,000 thousand / 1,000 | 935.00 |
| CALC-83 | Investments in partially owned entities 2026-09-30 in USD millions rounded to two decimals for the findings | 2,244,170 thousand / 1,000 | 2,244.17 |

The leverage, cover and asset ratios are worked row by row in the calculation register, each with its numerator and denominator.

## Gaps

- EBITDA is not printed anywhere in the five sources, so EBITDA (Reported) in every period is derived from net income, interest and debt expense, income tax expense and depreciation and amortization; it includes non-operating items and every leverage and cover ratio depends on it, so this is a high-severity gap that only an issuer-stated EBITDA definition would close.
- FY2025 and nine-month 2025 EBITDA include an USD 803,248 thousand gain on a sales-type lease and other printed gain lines (net gains on disposition of USD 35,291 thousand in FY2025 and USD 24,039 thousand in nine months 2025, and a gain on debt extinguishment of USD 32,073 thousand in nine months 2026); the normalised figures are an Analyst Judgement that removes only those lines, this is a high-severity gap for FY2025 comparisons, and equity-method gains on sale of USD 76,162 thousand in FY2025 and nine months 2025 and USD 44,329 thousand in nine months 2026 remain inside EBITDA because the statements do not print them as separate lines.
- The maturity ladder is printed only at 2025-12-31 and pre-dates the January 2026 refinancing of both revolving facilities and the term loan, the 2033 notes offering and the repayment of the 2026 notes, so the wall at 2026-09-30 cannot be shown; this is a high-severity gap that a ladder at 2026-09-30 would close.
- Two mortgage loans were in maturity default at 2025-12-31: the loan on the Seventh Avenue office building of USD 244,543 thousand, covered by a forbearance agreement signed on 2026-03-09 that waives default interest through March 2027 but is not supplied, and the Broadway loan of USD 74,494 thousand, which was extinguished in May 2026; the forbearance terms cannot be assessed, a medium-severity gap that the agreement itself would close.
- No source states the legal rank of any debt instrument, so the debt stack has no rows, the Ranking cells in the instrument table are not supplied, and the indentures and credit agreements named in the exhibit list are not supplied; this is a medium-severity gap for any recovery or priority analysis.
- No covenant level is stated and covenant compliance is stated only as at year-end in the annual reports, so no covenant headroom is shown and none is inferred; this is a medium-severity gap that the credit agreements would close.
- Debt of unconsolidated joint ventures is outside consolidated debt while their income is inside EBITDA, and no source totals it; this is a medium-severity gap for leverage on a look-through basis that a schedule of joint-venture debt would close.
- Pro forma net debt for the joint venture closing of 2026-10-20 is not established: the source says the USD 400,000 thousand mortgage loan was satisfied at closing and an estimated net gain of about USD 485,000 thousand will be recognised in the fourth quarter of 2026, but not the cash paid or received; this is a medium-severity gap that the next quarterly report would close.
- A mortgage loan of USD 48,000 thousand of an unconsolidated joint venture matured unpaid on 2026-10-26; it is outside consolidated debt and the partnership's share of the joint venture's debt is not totalled, so the consequence for the partnership is not established; this is a low-severity gap.
- Several lines are printed as dashes and are therefore not supplied rather than zero: in the income statements the gain on debt extinguishment, gain on sales-type lease and net gains on disposition in the periods where they print a dash, in the cash flow statements the prepaid lease payment, gain on sales-type lease, acquisitions of real estate, distributions of capital from partially owned entities, loan receivable, preferred equity redemption, condominium sales and Class A unit repurchase lines in the periods where they print a dash, and net investment in lease at 2024-12-31; this is a low-severity gap that confirmation that a dash means nil would close.
- Some lines exist in one statement but are not printed in another, for example the gain on debt extinguishment in the annual income statements and distributions to Vornado in the nine-month cash flow statements, so those cells are not supplied for the periods that do not print them; this is a low-severity gap.
- Cash flow statements are printed for year-to-date periods only, so there is no third-quarter cash flow column, and the first-quarter and second-quarter income statement columns are not tabulated because the nine-month columns carry the same periods; this is a low-severity gap, and the fourth quarter of 2025 is derived as the year less nine months and labelled calculated.
- Instrument-level carrying values are not disclosed, so principal is shown by instrument with one financing-cost adjustment of USD -39,231 thousand; the split of the USD 918,000 thousand drawn between the two revolving facilities, the coupon and month of maturity of the 2031 notes, scheduled amortisation and floors are not stated; this is a low-severity gap.
- Undrawn committed facilities are computed from stated commitments, drawings and letters of credit because the filings print only a rounded total; the computed figures agree with management's rounded statements at all three dates, a low-severity gap.
- Funds from operations are reported for the trust's common shareholders only and the partnership prints no equivalent, so the dashboard shows them as a trust measure; this is a low-severity gap.
- Segment disclosures were recast in the first quarter of 2026, so segment revenue is shown on two property compositions that are never spliced: the 2026 composition for nine months and the third quarter of 2025 and 2026, and the pre-2026 composition for FY2024 and FY2025, with the other composition not supplied in each case; the Other column contains an elimination of cleaning fees that the statements do not print as a separate Corporate and eliminations row; segment revenue reconciles to reported revenue within each basis, a low-severity gap.
- The issuer states no adjusted EBITDA, so the adjusted EBITDA bridge has no amounts and the optional adjusted EBITDA row is not written; this is a low-severity gap that closes only if the company publishes an adjusted figure.
- Restricted cash of USD 143,339 thousand at 2026-09-30 is excluded from cash; counting it would lower net debt by that amount, a low-severity matter of definition rather than evidence, and cash interest paid includes interest rate cap premiums and excludes capitalized interest.

## Next module

The orchestrator selects the next module.
