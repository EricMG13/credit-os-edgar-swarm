---
issuer_id: gtn
module_id: CP-1
analysis_date: 2026-11-05
run_id: gtn-2026-11-05-credit_snapshot-host
---

# GRAY MEDIA, INC (gtn) - Financial foundation as of 2026-11-05

## Request

GRAY MEDIA, INC (issuer id gtn), as of 2026-11-05, credit snapshot pathway. Scope: normalised statements, debt, liquidity, leverage and coverage from the supplied annual report, quarterly reports and earnings releases, latest balance sheet 2026-06-30.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_gtn20251231_10k.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-26 | 88cd2be27d00e9908e881a07fffdbfb7e9fbcb182cd4daa7213df1b4b5f00737 | Audited FY2024 and FY2025 statements, segment note, debt note and maturities, interest paid |
| 10-Q_2025-09-30_gtn20250930_10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2025 | 2025-11-07 | b62445e5fe4a163fa362c47bf83e36bde2a987867496619de6fe27a40edfa171 | Read for the third quarter 2025 context; no figure of this module is taken from it |
| 10-Q_2026-03-31_gtn20260331_10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | 3356f048b1cdb10c04c5b80b0d02babf79237e5dc24d851924643abb820dcebd | Read for the first quarter 2026 context and the 2026 refinancing steps; no figure of this module is taken from it |
| 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-07 | e96d90052b60b94fa2a12b7f9024364ed7aff9961690c651cc002284f695a02b | Six-month 2026 and 2025 statements, 2026-06-30 balance sheet, debt table and maturities, covenant leverage table, liquidity, subsequent events |
| EX-99.1_2026-02-26_ex_924265.htm.jsonl | Earnings release (Exhibit 99.1) for the fourth quarter ended December 31, 2025 | 2026-02-26 | 178b7bc5710105291e494cc784bd65c8c9bce375e1552cc63408e1853ff6a993 | Adjusted EBITDA reconciliation and selected operating data for FY2025 and FY2024 |
| EX-99.1_2026-05-07_ex_956963.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter ended March 31, 2026 | 2026-05-07 | b04f43ebe7b79436fed34dc07bcf8f9f9fb0c9fac32a39299a3e02ac7ae325d8 | Read for context; no figure of this module is taken from it |
| EX-99.1_2026-08-07_ex_998938.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter ended June 30, 2026 | 2026-08-07 | 1120ddd52748c4fbbc1c17f2a7297d8e7f38db5b861bb6f5b9064b68dbae4a0d | Adjusted EBITDA reconciliation for the six months, debt summary, liquidity, repurchase authorization, acquisitions after the quarter end |

| Module | sha256 | Use |
| --- | --- | --- |
| Source readiness (CP-0) | 1e895f5dcb28fa76408daa7368fd7caa4247616e95e3f02e2861ceaa9f2fceb6 | Source set, document dates, gaps and the definition of net debt used by the issuer |

## Findings

### Bottom line

Net debt of USD 5,632 million at 2026-06-30 is 8.42x last-twelve-months reported EBITDA, against 4.90x at FY2024, because the 2024 political-year earnings rolled off while debt rose. The issuer's covenant measure of 5.73x is lower because it divides by a pro forma eight-quarter average of USD 994 million.

Reported EBITDA covers cash interest paid only 1.74x over the last twelve months. Liquidity at 2026-06-30 was cash of USD 176 million and revolver availability of USD 745 million, before a July 2026 repurchase that the company partly funded from the revolver in an amount it does not state.
Basis: calculation C10; calculation C19; calculation C24; calculation C25; calculation C26; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 37

### Periods covered

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| H1 2025 | 2025-01-01 | 2025-06-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | H1 2025 | H1 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue - Broadcasting | 3,539 | 2,988 | 1,509 | 1,552 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Revenue - Production companies | 105 | 107 | 45 | 55 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Total revenue (less agency commissions) | 3,644 | 3,095 | 1,554 | 1,607 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Operating expense - Broadcasting | 2,317 | 2,239 | 1,140 | 1,124 | USD millions | Reported, before depreciation, amortization, impairment and disposals | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Operating expense - Production companies | 83 | 95 | 40 | 50 | USD millions | Reported, before depreciation, amortization, impairment and disposals | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Operating expense - Corporate and administrative | 104 | 113 | 57 | 76 | USD millions | Reported, before depreciation, amortization, impairment and disposals | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Depreciation | 144 | 133 | 66 | 67 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Amortization of intangible assets | 125 | 104 | 57 | 53 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Impairment of goodwill, broadcast licenses and other intangible assets | Not supplied: the source prints a dash | 30 | 28 | Not supplied: the source prints a dash | USD millions | Reported; a dash is not read as zero | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| (Gain) loss on disposal of long-lived assets, net | 20 | -11 | -8 | 20 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Operating expenses, net | 2,793 | 2,703 | 1,380 | 1,390 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Operating income | 851 | 392 | 174 | 217 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Miscellaneous (expense) income, net | 117 | -1 | 1 | 8 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Impairment of investments | -25 | -20 | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | USD millions | Reported, printed as a deduction | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Interest expense | -485 | -474 | -235 | -234 | USD millions | Reported, printed as a deduction; accrual basis, not cash interest | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| (Loss) gain on early extinguishment of debt | 34 | -10 | 1 | Not supplied: the source prints a dash | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| (Loss) income before income taxes | 492 | -113 | -59 | -9 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Income tax (benefit) expense | 117 | -28 | 6 | -3 | USD millions | Reported, a benefit is negative | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Net (loss) income | 375 | -85 | -65 | -6 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Preferred stock dividends | 52 | 52 | 26 | 26 | USD millions | Reported, deducted to reach income attributable to common stockholders | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Deemed contribution on repurchase of Series A Perpetual Preferred Stock | Not supplied: the annual statement prints no such line | Not supplied: the annual statement prints no such line | Not supplied: the interim statement prints no such line | 20 | USD millions | Reported, added to income attributable to common stockholders | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Net (loss) income attributable to common stockholders | 323 | -137 | -91 | -12 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Stock-based compensation (non-cash) | 22 | 22 | 12 | 11 | USD millions | Reported in the cash flow statement; non-cash charge inside operating expenses | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Segment operating income - Broadcasting | 956 | 513 | 236 | 300 | USD millions | Reported, segment note | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 113–114; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 23 |
| Segment operating income - Production companies | 1 | -6 | -4 | -6 | USD millions | Reported, segment note | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 113–114; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 23 |
| Segment operating income - Other (corporate) | -106 | -115 | -58 | -77 | USD millions | Reported, segment note; the Other column is corporate and carries no revenue | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 113–114; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 23 |
| EBITDA (Reported) | 1,120 | 629 | 297 | 337 | USD millions | Calculated: operating income plus depreciation plus amortization of intangible assets (calculations C1 to C4); the issuer states no unadjusted EBITDA | Calculations C1 to C4 |
| EBITDA (Adjusted) | 1,162 | 670 | 329 | 368 | USD millions | Issuer-stated Adjusted EBITDA; adds back stock-based compensation, impairment of intangible assets and loss (gain) on disposals, and excludes miscellaneous, investment impairment, interest, extinguishment and tax items | EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 11; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 12 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | H1 2025 | H1 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net (loss) income | 375 | -85 | -65 | -6 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Depreciation | 144 | 133 | 66 | 67 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Amortization of intangible assets | 125 | 104 | 57 | 53 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Amortization of deferred loan costs | 15 | 16 | 8 | 7 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Stock-based compensation | 22 | 22 | 12 | 11 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Amortization of program broadcast rights | 28 | 27 | 12 | 13 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Payments on program broadcast obligations | -29 | -27 | -14 | -14 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Deferred income taxes | -9 | -56 | -35 | -1 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| (Gain) loss on disposal of long-lived assets, net | 20 | -6 | -2 | 20 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Gain on sale of investments | -110 | -5 | -6 | -8 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Loss (gain) on early extinguishment of debt | -34 | 10 | -1 | Not supplied: the source prints a dash | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Impairment of investments | 25 | 20 | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Impairment of goodwill and other intangible assets | Not supplied: the source prints a dash | 30 | 28 | Not supplied: the source prints a dash | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Other operating adjustments | -1 | 15 | 7 | Not supplied: the source prints a dash | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in accounts receivable, net | 5 | 132 | 120 | 14 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in income tax receivable or prepaid | 8 | -10 | Not supplied: the source prints a dash | -43 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in other current assets | 27 | -6 | -6 | -6 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in accounts payable | 52 | -10 | 26 | 26 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in employee compensation, benefits and pension costs | 1 | -7 | -28 | -9 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in accrued other expenses | 49 | -38 | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in accrued interest | 49 | 39 | -17 | Not supplied: the source prints a dash | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in income taxes payable | -17 | Not supplied: the source prints a dash | 3 | -1 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in deferred revenue | 6 | -9 | -2 | 1 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net Cash from Operating Activities | 751 | 289 | 163 | 124 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Acquisitions of businesses, licenses and television stations, net of cash acquired | -1 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | -264 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Purchases of property and equipment | -143 | -108 | -40 | -36 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Proceeds from asset sales | 14 | 47 | 14 | 2 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Proceeds from sale of investments | 110 | 24 | 22 | 10 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Investments in broadcast, production and technology companies | -7 | -8 | -8 | Not supplied: the source prints a dash | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Other investing | -1 | -18 | -2 | -2 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net Cash from Investing Activities | -28 | -63 | -14 | -290 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Proceeds from borrowings on long-term debt | 2,070 | 2,110 | 130 | 70 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Repayments of borrowings on long-term debt | -2,544 | -1,987 | -168 | -13 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Repurchase of Series A Perpetual Preferred Stock | Not supplied: the annual statement prints no such line | Not supplied: the annual statement prints no such line | Not supplied: the source prints a dash | -30 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Payments of common stock dividends | -32 | -33 | -16 | -17 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Payments of preferred stock dividends | -52 | -52 | -26 | -27 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Deferred and other loan costs | -47 | -26 | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Payments for taxes related to net share settlement of equity awards | -4 | -5 | -5 | -9 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net Cash from Financing Activities | -609 | 7 | -85 | -26 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net Cash Change | 114 | 233 | 64 | -192 | USD millions | Reported; operating plus investing plus financing, no foreign exchange effect printed | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Opening Cash | 21 | 135 | 135 | 368 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Closing Cash | 135 | 368 | 199 | 176 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Cash Interest Paid | 394 | 393 | 230 | 222 | USD millions | Reported in the debt note as interest payments on all interest-bearing obligations, stated as approximate; paid in operating activities | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 16 |
| Income taxes paid, net of refunds | 135 | 38 | 39 | 42 | USD millions | Reported in the earnings release supplemental information | EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 11; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 12 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | H1 2025 | H1 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash | 135 | 368 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 176 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Accounts receivable, net | 337 | 205 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 193 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Current portion of program broadcast rights, net | 17 | 17 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 5 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Income tax refunds receivable | 6 | 6 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 1 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Prepaid income taxes | 25 | 35 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 83 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Prepaid and other current assets | 21 | 25 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 34 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Total current assets | 541 | 656 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 492 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Property and equipment, net | 1,577 | 1,509 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 1,522 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Operating lease right of use asset | 69 | 66 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 76 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Broadcast licenses | 5,311 | 5,309 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 5,463 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Goodwill | 2,642 | 2,642 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 2,693 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Other intangible assets, net | 290 | 157 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 109 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Investments in broadcasting and technology companies | 66 | 37 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 32 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Deferred pension assets | 19 | 21 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 21 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Other assets | 27 | 43 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 29 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Total Assets | 10,542 | 10,440 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 10,437 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Accounts payable | 154 | 144 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 143 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Employee compensation and benefits | 111 | 103 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 95 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Accrued interest | 112 | 151 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 150 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Other accrued expenses | 53 | 47 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 73 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Federal and state income taxes | 5 | 5 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 4 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Current portion of program broadcast obligations | 18 | 18 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 5 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Deferred revenue | 29 | 20 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 22 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Dividends payable | 15 | 16 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 14 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Current portion of operating lease liabilities | 10 | 10 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 11 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Current portion of long-term debt | 20 | 2 | Not supplied: the 2025-06-30 balance sheet is not in the sources | Not supplied: the source prints a dash | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Total current liabilities | 527 | 516 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 517 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Long-term debt, less current portion and deferred financing costs | 5,601 | 5,742 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 5,808 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Deferred income taxes | 1,347 | 1,300 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 1,299 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Operating lease liabilities, less current portion | 62 | 59 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 68 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Other liabilities | 72 | 18 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 17 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Total Liabilities | 7,609 | 7,635 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 7,709 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Temporary Equity | 650 | 650 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 600 | USD millions | Reported: Series A Perpetual Preferred Stock at liquidation value, shown between liabilities and equity | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Common stock | 1,198 | 1,210 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 1,216 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Class A common stock | 57 | 67 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 72 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Retained earnings | 1,375 | 1,205 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 1,176 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Accumulated other comprehensive loss | -30 | -4 | Not supplied: the 2025-06-30 balance sheet is not in the sources | -4 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Treasury stock, common stock | -284 | -288 | Not supplied: the 2025-06-30 balance sheet is not in the sources | -292 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Treasury stock, Class A common stock | -33 | -35 | Not supplied: the 2025-06-30 balance sheet is not in the sources | -40 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Total Equity | 2,283 | 2,155 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 2,128 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Total Debt | 5,621 | 5,744 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 5,808 | USD millions | Calculated: current portion of long-term debt plus long-term debt net of deferred financing costs (calculations C5 to C7); carrying value | Calculations C5 to C7 |
| Cash & Equivalents | 135 | 368 | Not supplied: the 2025-06-30 balance sheet is not in the sources | 176 | USD millions | Reported, the Cash line | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2028 first lien term loan (the 2021 term loan; deferred costs of 11 are shared with the revolver) | Term loan | 728 | 739 | Not applicable | Not applicable | First lien, secured by substantially all assets excluding real estate; guaranteed by substantially all subsidiaries | 1 | USD | 728 | Not applicable | Term SOFR plus 3.00% margin and a credit spread adjustment; 6.7% at 2026-06-30 | floating | Term SOFR | 300 | Not supplied: no floor is stated in the filings read | 2028-12-01 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15–16; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 91–94 |
| 10.5% first lien notes due 2029 | Senior secured notes | 1,118 | 1,125 | Not applicable | Not applicable | First lien, secured by substantially all assets excluding real estate; guaranteed by substantially all subsidiaries | 1 | USD | 1,118 | Not applicable | 10.5% | fixed | Not applicable | Not applicable | Not applicable | 2029-07-15 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15–16; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 91–94 |
| 7.25% first lien notes due 2033 | Senior secured notes | 830 | 845 | Not applicable | Not applicable | First lien, secured by substantially all assets excluding real estate; guaranteed by substantially all subsidiaries | 1 | USD | 830 | Not applicable | 7.25% | fixed | Not applicable | Not applicable | Not applicable | 2033-08-15 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15–16; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 91–94 |
| 9.625% second lien notes due 2032 | Senior secured notes | 1,139 | 1,150 | Not applicable | Not applicable | Second lien on the same collateral; guaranteed by substantially all subsidiaries | 2 | USD | 1,139 | Not applicable | 9.625% | fixed | Not applicable | Not applicable | Not applicable | 2032-07-15 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15–16; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 91–94 |
| 4.75% senior notes due 2030 | Senior unsecured notes | 784 | 790 | Not applicable | Not applicable | Unsecured; guaranteed by substantially all subsidiaries | 3 | USD | 784 | Not applicable | 4.75% | fixed | Not applicable | Not applicable | Not applicable | 2030-10-15 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15–16; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 91–94 |
| 5.375% senior notes due 2031 | Senior unsecured notes | 1,209 | 1,218 | Not applicable | Not applicable | Unsecured; guaranteed by substantially all subsidiaries | 3 | USD | 1,209 | Not applicable | 5.375% | fixed | Not applicable | Not applicable | Not applicable | 2031-11-15 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15–16; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 91–94 |
| Revolving credit facility | Revolver | 0 | 0 | 0 | 750 | First lien, secured by substantially all assets excluding real estate; guaranteed by substantially all subsidiaries | 1 | USD | 0 | Not applicable | Term SOFR plus 1.75% to 2.75% by first lien net leverage; commitment fee 0.250% to 0.400% | floating | Term SOFR | 175 to 275 | Not supplied: no floor is stated in the filings read | 2028-12-01 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15–16; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 91–94 |

Carrying values are principal less each instrument's own deferred loan costs, plus the premium on the 2032 notes, as the debt table prints them; they add to Total Debt of 5,808. Unsecured notes rank pari passu with the first lien debt in right of payment and are effectively junior to it to the extent of the collateral.

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_gtn20251231_10k.htm.jsonl | Annual report | FY2025 with FY2024 and FY2023 comparatives | USD | millions | Consolidated Gray Media, Inc. | US GAAP | Tier 1 audited statements | Statements, debt note, interest paid, segment note | Part III incorporated by reference to a proxy statement not supplied |
| 10-Q_2025-09-30_gtn20250930_10q.htm.jsonl | Quarterly report | Quarter and nine months ended 2025-09-30 | USD | millions | Consolidated Gray Media, Inc. | US GAAP | Tier 2b unaudited | Context only; superseded for year-end balances by the annual report | No figure of this module is taken from it |
| 10-Q_2026-03-31_gtn20260331_10q.htm.jsonl | Quarterly report | Quarter ended 2026-03-31 | USD | millions | Consolidated Gray Media, Inc. | US GAAP | Tier 2b unaudited | Context only; the six-month report carries the same period | No figure of this module is taken from it |
| 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Quarterly report | Quarter and six months ended 2026-06-30 | USD | millions | Consolidated Gray Media, Inc. | US GAAP | Tier 2b unaudited | Six-month statements, latest balance sheet, debt table, covenant leverage table | No 2025-06-30 balance sheet; auditor review not stated |
| EX-99.1_2026-02-26_ex_924265.htm.jsonl | Earnings release | Fourth quarter and FY2025 | USD | millions | Consolidated Gray Media, Inc. | Non-GAAP reconciliation to US GAAP net income | Tier 2b unaudited | Adjusted EBITDA for FY2025 and FY2024 | Issuer definition of Adjusted EBITDA |
| EX-99.1_2026-05-07_ex_956963.htm.jsonl | Earnings release | First quarter 2026 | USD | millions | Consolidated Gray Media, Inc. | Non-GAAP reconciliation to US GAAP net income | Tier 2b unaudited | Context only | No figure of this module is taken from it |
| EX-99.1_2026-08-07_ex_998938.htm.jsonl | Earnings release | Second quarter and six months 2026 | USD | millions | Consolidated Gray Media, Inc. | Non-GAAP reconciliation to US GAAP net income | Tier 2b unaudited | Adjusted EBITDA for the six months, debt summary, post-quarter events | Issuer definition of Adjusted EBITDA; guidance is forward-looking |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GRAY MEDIA, INC | Issuer and holding company; substantially all subsidiaries guarantee the senior credit facility and the notes | December 31 | USD | millions | Consolidated; unrestricted and immaterial subsidiaries sit outside the guarantor group; receivables sold under the securitization facility are derecognized | US GAAP | FY2023, FY2024 and FY2025 flows; balance sheets 2024-12-31, 2025-12-31 and 2026-06-30; H1 2025 and H1 2026 flows |

Subsequent events are flagged with their dates in the post-balance-sheet table: the first closing of the American Spirit Media and WHPM acquisitions on 2026-07-01, the receivables facility amendment on 2026-07-15, the note repurchase on 2026-07-21 and the repurchase authorization of 2026-08-06.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) built from components | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Derived | Not supplied: the issuer states no unadjusted EBITDA | 629 for FY2025 | Operating income plus depreciation plus amortization of intangible assets, so reported EBITDA keeps impairment, disposal and stock-based compensation charges | FY2024, FY2025, H1 2025, H1 2026 |
| Total Debt set at carrying value | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Basis | Principal 5,867 at 2026-06-30 | 5,808 | Balance-sheet carrying value net of deferred financing costs and premium; principal kept in the reconciliation | 2024-12-31, 2025-12-31, 2026-06-30 |
| Last-twelve-months figures built from the latest year plus the current stub less the prior-year stub | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Derived | Not supplied: no reported twelve-month figure | See the constructed period register | Interim ratios need a twelve-month denominator | LTM to 2026-06-30 |
| No currency, unit or perimeter adjustment | Not applicable | None | Not applicable | Not applicable | All statements are USD millions for the consolidated group | All |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 5.02 | 4.90 | x | Carrying-value debt over reported EBITDA of the fiscal year; reported EBITDA is operating income plus depreciation and amortization of intangibles |
| FY2025 / 2025-12-31 | 9.13 | 8.55 | x | Carrying-value debt over reported EBITDA of the fiscal year; reported EBITDA is operating income plus depreciation and amortization of intangibles |
| 2026-06-30 | 8.68 | 8.42 | x | Carrying-value debt over last-twelve-months reported EBITDA (calculation C12); interim rows use a twelve-month denominator; reported EBITDA is operating income plus depreciation and amortization of intangibles |

The ratios use carrying-value debt and reported EBITDA, so they are higher than the issuer's covenant ratios, which use principal, a pro forma eight-quarter average denominator and expected synergies.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2.84 | x | Reported EBITDA over cash interest paid, which the filings state as approximate; the interim row is last twelve months (calculations C12 and C14) |
| FY2025 / 2025-12-31 | 1.60 | x | Reported EBITDA over cash interest paid, which the filings state as approximate; the interim row is last twelve months (calculations C12 and C14) |
| 2026-06-30 | 1.74 | x | Reported EBITDA over cash interest paid, which the filings state as approximate; the interim row is last twelve months (calculations C12 and C14) |

Cash interest paid is an approximate figure from the debt note and is gross of capitalised interest of USD 3 million in FY2025.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 135 | 674 | US$m | Cash is the balance-sheet cash line; undrawn committed facilities are the revolving credit facility availability net of undrawn letters of credit; the securitization facility of USD 400 million is fully drawn and adds none |
| FY2025 / 2025-12-31 | 368 | 745 | US$m | Cash is the balance-sheet cash line; undrawn committed facilities are the revolving credit facility availability net of undrawn letters of credit; the securitization facility of USD 400 million is fully drawn and adds none |
| 2026-06-30 | 176 | 745 | US$m | Cash is the balance-sheet cash line; undrawn committed facilities are the revolving credit facility availability net of undrawn letters of credit; the securitization facility of USD 400 million is fully drawn and adds none |

The 2026-06-30 figures precede the 2026-07-21 repurchase that the company partly funded from the revolver, so current availability is not established.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 0 | US$m | Principal maturing, ladder drawn at 2026-06-30; remainder of 2026 only, the source prints a dash for no maturity |
| FY2027 | 0 | US$m | Principal maturing, ladder drawn at 2026-06-30; the source prints a dash for no maturity |
| FY2028 | 739 | US$m | Principal maturing, ladder drawn at 2026-06-30; 2028 first lien term loan, due 2028-12-01 |
| FY2029 | 1,125 | US$m | Principal maturing, ladder drawn at 2026-06-30; 10.5% first lien notes, due 2029-07-15 |
| FY2030 | 790 | US$m | Principal maturing, ladder drawn at 2026-06-30; 4.75% unsecured notes, due 2030-10-15 |
| FY2031 | 1,218 | US$m | Principal maturing, ladder drawn at 2026-06-30; 5.375% unsecured notes, due 2031-11-15 |
| FY2032 | 1,150 | US$m | Principal maturing, ladder drawn at 2026-06-30; 9.625% second lien notes, due 2032-07-15, within the source's thereafter column |
| FY2033 | 845 | US$m | Principal maturing, ladder drawn at 2026-06-30; 7.25% first lien notes, due 2033-08-15, within the source's thereafter column |

The revolving credit facility (commitment USD 750 million, due 2028-12-01) is undrawn at 2026-06-30 and is not in the ladder; the 2026-07-21 repurchase of USD 100 million of 2029 notes and USD 20 million of 2031 notes is not reflected.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-06-30 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue | 3,644 | 3,095 | 3,148 | US$m | Reported; LTM calculated (calculation C11) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| EBITDA (Reported) | 1,120 | 629 | 669 | US$m | Calculated (calculations C1 to C4, C12) | Calculations C1 to C4 and C12 |
| EBITDA (Adjusted) | 1,162 | 670 | 709 | US$m | Issuer-stated; LTM calculated (calculation C13) | EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 11; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 12 |
| Total debt (carrying value) | 5,621 | 5,744 | 5,808 | US$m | Calculated (calculations C5 to C7) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Cash | 135 | 368 | 176 | US$m | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72–73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2–3 |
| Net debt | 5,486 | 5,376 | 5,632 | US$m | Calculated (calculations C8 to C10) | Calculations C8 to C10 |
| Total debt / EBITDA | 5.02 | 9.13 | 8.68 | x | Calculated | T4.9 Calculation register |
| Net debt / EBITDA | 4.90 | 8.55 | 8.42 | x | Calculated | T4.9 Calculation register |
| EBITDA / cash interest | 2.84 | 1.60 | 1.74 | x | Calculated | T4.9 Calculation register |
| Net debt / adjusted EBITDA | 4.72 | 8.02 | 7.94 | x | Calculated | T4.9 Calculation register |
| Operating cash flow | 751 | 289 | 250 | US$m | Reported; LTM calculated (calculation C15) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Purchases of property and equipment | 143 | 108 | 104 | US$m | Reported; LTM calculated (calculation C16) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75–76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 5621 | 135 | 5486 | US$m | Gross debt is carrying value, current portion plus long-term debt net of deferred financing costs and premium; principal is 5,690; excludes the derecognized securitization facility of USD 400 million, operating leases and Series A preferred stock |
| FY2025 / 2025-12-31 | 5744 | 368 | 5376 | US$m | Gross debt is carrying value, current portion plus long-term debt net of deferred financing costs and premium; principal is 5,810; excludes the derecognized securitization facility of USD 400 million, operating leases and Series A preferred stock |
| 2026-06-30 | 5808 | 176 | 5632 | US$m | Gross debt is carrying value, current portion plus long-term debt net of deferred financing costs and premium; principal is 5,867; excludes the derecognized securitization facility of USD 400 million, operating leases and Series A preferred stock |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-06-30 | 5,867 | -59 | 5,808 | US$m | Reconciling items are unamortized deferred loan costs of 11 on the senior credit facility, 7 on the 2029 first lien notes, 6 on the 2030 notes, 9 on the 2031 notes, 15 on the 2032 second lien notes and 15 on the 2033 first lien notes, less a premium of 4 on the 2032 notes (calculation C17); the ladder leaves out no debt |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| First closing of the American Spirit Media and WHPM station acquisitions, paid in cash | 2026-07-01 | 43 | 5675 | 8.48 | US$m | EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 5 states USD 43 million in cash; the USD 40 million for American Spirit Media came from the 2033 first lien notes issued on 2026-06-30, assumed held in cash at 2026-06-30, which is an analyst inference; net leverage uses last-twelve-months reported EBITDA of 669 and adds no acquired earnings; the second closings await regulatory approval |
| Repurchase of USD 100 million of 2029 first lien notes and USD 20 million of 2031 notes at par plus accrued interest | 2026-07-21 | Not supplied: the accrued interest paid is not stated and the principal repurchased is net-debt neutral when funded from cash and the revolver | Not supplied: the cash and revolver amounts used are not stated | Not supplied: net debt after the event is not established | US$m | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 25 and EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 4; funded from cash on hand and revolver borrowings in amounts the filings do not state |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 | 3,644 | 1,162 | US$m | Twelve months; Adjusted EBITDA is issuer-adjusted, not reported EBITDA; FY2024 was a political-cycle on-year |
| FY2025 | 3,095 | 670 | US$m | Twelve months; Adjusted EBITDA is issuer-adjusted, not reported EBITDA; FY2025 was a political off-year |

The last-twelve-months figures to 2026-06-30 (revenue 3,148, issuer-adjusted EBITDA 709) are in the constructed period register and are left out here to keep one duration.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| 2028 first lien term loan, due 2028-12-01 | 1 | Yes | 739 | 4.05 | US$m | Principal at 2026-06-30; cumulative principal over last-twelve-months reported EBITDA of 669, so it is not on carrying value; first lien debt shares one collateral package and ranks equally; guaranteed by substantially all subsidiaries; cumulative leverage is through the whole first lien group because equal ranks share a position; the undrawn USD 750 million revolver also ranks first lien and is not in the amount |
| 10.5% first lien notes, due 2029-07-15 | 1 | Yes | 1,125 | 4.05 | US$m | Principal at 2026-06-30; cumulative principal over last-twelve-months reported EBITDA of 669, so it is not on carrying value; first lien debt shares one collateral package and ranks equally; guaranteed by substantially all subsidiaries; cumulative leverage is through the whole first lien group because equal ranks share a position; the undrawn USD 750 million revolver also ranks first lien and is not in the amount |
| 7.25% first lien notes, due 2033-08-15 | 1 | Yes | 845 | 4.05 | US$m | Principal at 2026-06-30; cumulative principal over last-twelve-months reported EBITDA of 669, so it is not on carrying value; first lien debt shares one collateral package and ranks equally; guaranteed by substantially all subsidiaries; cumulative leverage is through the whole first lien group because equal ranks share a position; the undrawn USD 750 million revolver also ranks first lien and is not in the amount |
| 9.625% second lien notes, due 2032-07-15 | 2 | Yes | 1,150 | 5.77 | US$m | Principal at 2026-06-30; cumulative principal over last-twelve-months reported EBITDA of 669, so it is not on carrying value; second lien on the same collateral, guaranteed by substantially all subsidiaries; cumulative leverage is through the second lien notes |
| 4.75% senior unsecured notes, due 2030-10-15 | 3 | No | 790 | 8.77 | US$m | Principal at 2026-06-30; cumulative principal over last-twelve-months reported EBITDA of 669, so it is not on carrying value; unsecured, guaranteed by substantially all subsidiaries and effectively junior to secured debt; cumulative leverage is through the whole unsecured group because equal ranks share a position |
| 5.375% senior unsecured notes, due 2031-11-15 | 3 | No | 1,218 | 8.77 | US$m | Principal at 2026-06-30; cumulative principal over last-twelve-months reported EBITDA of 669, so it is not on carrying value; unsecured, guaranteed by substantially all subsidiaries and effectively junior to secured debt; cumulative leverage is through the whole unsecured group because equal ranks share a position |

Cumulative leverage is on principal, so it is not comparable with the carrying-value ratios in the leverage chart.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), FY2025 | 629 | US$m | Calculated: operating income 392 plus depreciation 133 plus amortization of intangible assets 104 |
| Impairment of goodwill and other intangible assets | 30 | US$m | Issuer add-back, FY2025 reconciliation |
| Non-cash stock-based compensation | 22 | US$m | Issuer add-back, FY2025 reconciliation |
| Gain on disposal of assets, net | -11 | US$m | Issuer deduction, FY2025 reconciliation |
| Adjusted EBITDA, FY2025 | 670 | US$m | Issuer-stated Adjusted EBITDA; the issuer's other reconciling items (miscellaneous, investment impairment, interest, extinguishment, tax) sit below operating income and net to zero against the net loss start |

The bridge covers FY2025 only and starts from calculated reported EBITDA, not an issuer-stated figure.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM | USD 3,095m | USD 1,607m | USD 1,554m | USD 3,148m | Calculated | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Latest year plus six months 2026 less six months 2025 |
| EBITDA (Reported) | LTM | USD 629m | USD 337m | USD 297m | USD 669m | Calculated | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Components are calculated reported EBITDA |
| EBITDA (Adjusted) | LTM | USD 670m | USD 368m | USD 329m | USD 709m | Calculated | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl; EX-99.1_2026-08-07_ex_998938.htm.jsonl | Issuer definition; excludes pro forma acquisition and synergy effects |
| Cash interest paid | LTM | USD 393m | USD 222m | USD 230m | USD 385m | Calculated | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Each component is approximate in the filings |
| Net cash from operating activities | LTM | USD 289m | USD 124m | USD 163m | USD 250m | Calculated | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Includes a working capital outflow of USD 114 million in the 2026 six months |
| Purchases of property and equipment | LTM | USD 108m | USD 36m | USD 40m | USD 104m | Calculated | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Excludes nothing; Assembly Atlanta spending is inside the cash flow line |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total debt / EBITDA (reported) | 5621 | Net debt data, Gross debt | 1120 | EBITDA (Reported) row of the income statement | FY2024 / 2024-12-31 | USD | US$m | 5.02 | Calculated | Tier 1 | Fiscal-year denominator; carrying-value debt |
| Net debt / EBITDA | Net debt / EBITDA (reported) | 5486 | Net debt data, Net debt | 1120 | EBITDA (Reported) row of the income statement | FY2024 / 2024-12-31 | USD | US$m | 4.90 | Calculated | Tier 1 | Fiscal-year denominator; carrying-value debt less cash |
| EBITDA / cash interest | EBITDA (reported) / cash interest paid | 1120 | EBITDA (Reported) row of the income statement | 394 | Cash Interest Paid row of the cash flow statement | FY2024 / 2024-12-31 | USD | US$m | 2.84 | Calculated | Tier 1 | Fiscal-year denominator; cash interest is approximate |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 5621 | Net debt data, Gross debt | 1162 | EBITDA (Adjusted) row of the income statement | FY2024 / 2024-12-31 | USD | US$m | 4.84 | Calculated | Tier 1 | Fiscal-year denominator; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 5486 | Net debt data, Net debt | 1162 | EBITDA (Adjusted) row of the income statement | FY2024 / 2024-12-31 | USD | US$m | 4.72 | Calculated | Tier 1 | Fiscal-year denominator; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | 1162 | EBITDA (Adjusted) row of the income statement | 394 | Cash Interest Paid row of the cash flow statement | FY2024 / 2024-12-31 | USD | US$m | 2.95 | Calculated | Tier 1 | Fiscal-year denominator; issuer-adjusted EBITDA |
| Total debt / EBITDA | Total debt / EBITDA (reported) | 5744 | Net debt data, Gross debt | 629 | EBITDA (Reported) row of the income statement | FY2025 / 2025-12-31 | USD | US$m | 9.13 | Calculated | Tier 1 | Fiscal-year denominator; carrying-value debt |
| Net debt / EBITDA | Net debt / EBITDA (reported) | 5376 | Net debt data, Net debt | 629 | EBITDA (Reported) row of the income statement | FY2025 / 2025-12-31 | USD | US$m | 8.55 | Calculated | Tier 1 | Fiscal-year denominator; carrying-value debt less cash |
| EBITDA / cash interest | EBITDA (reported) / cash interest paid | 629 | EBITDA (Reported) row of the income statement | 393 | Cash Interest Paid row of the cash flow statement | FY2025 / 2025-12-31 | USD | US$m | 1.60 | Calculated | Tier 1 | Fiscal-year denominator; cash interest is approximate |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 5744 | Net debt data, Gross debt | 670 | EBITDA (Adjusted) row of the income statement | FY2025 / 2025-12-31 | USD | US$m | 8.57 | Calculated | Tier 1 | Fiscal-year denominator; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 5376 | Net debt data, Net debt | 670 | EBITDA (Adjusted) row of the income statement | FY2025 / 2025-12-31 | USD | US$m | 8.02 | Calculated | Tier 1 | Fiscal-year denominator; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | 670 | EBITDA (Adjusted) row of the income statement | 393 | Cash Interest Paid row of the cash flow statement | FY2025 / 2025-12-31 | USD | US$m | 1.70 | Calculated | Tier 1 | Fiscal-year denominator; issuer-adjusted EBITDA |
| Total debt / EBITDA | Total debt / EBITDA (reported) | 5808 | Net debt data, Gross debt | 669 | Calculation C12 | 2026-06-30 | USD | US$m | 8.68 | Calculated | Tier 2b | Last-twelve-months denominator; carrying-value debt |
| Net debt / EBITDA | Net debt / EBITDA (reported) | 5632 | Net debt data, Net debt | 669 | Calculation C12 | 2026-06-30 | USD | US$m | 8.42 | Calculated | Tier 2b | Last-twelve-months denominator; carrying-value debt less cash |
| EBITDA / cash interest | EBITDA (reported) / cash interest paid | 669 | Calculation C12 | 385 | Calculation C14 | 2026-06-30 | USD | US$m | 1.74 | Calculated | Tier 2b | Last-twelve-months denominator; cash interest is approximate |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 5808 | Net debt data, Gross debt | 709 | Calculation C13 | 2026-06-30 | USD | US$m | 8.19 | Calculated | Tier 2b | Last-twelve-months denominator; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 5632 | Net debt data, Net debt | 709 | Calculation C13 | 2026-06-30 | USD | US$m | 7.94 | Calculated | Tier 2b | Last-twelve-months denominator; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | 709 | Calculation C13 | 385 | Calculation C14 | 2026-06-30 | USD | US$m | 1.84 | Calculated | Tier 2b | Last-twelve-months denominator; issuer-adjusted EBITDA |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | H1 2025 | H1 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue growth year on year | 11.06% | -15.07% | Not supplied: H1 2024 is not in the sources | 3.41% | Down in FY2025, up in H1 2026 | FY2024 against FY2023 revenue of 3,281 (annual report); the cycle swings with political advertising |
| Margin | Reported EBITDA margin | 30.74% | 20.32% | 19.11% | 20.97% | Down in FY2025, up in H1 2026 | Calculated from the statement tables |
| Margin | Adjusted EBITDA margin (issuer definition) | 31.89% | 21.65% | 21.17% | 22.90% | Down in FY2025, up in H1 2026 | Calculated from issuer-stated Adjusted EBITDA |
| Operating | Core advertising revenue, USD millions (period flow) | 1,490 | 1,452 | 705 | 709 | Flat to down | Reported in the earnings releases |
| Operating | Political advertising revenue, USD millions (period flow) | 497 | 42 | 22 | 113 | Cyclical: high in even years | Reported; 2024 and 2026 are election years |
| Operating | Retransmission consent revenue, USD millions (period flow) | 1,482 | 1,429 | 748 | 698 | Down | Reported; a distribution partner dispute ended 2026-05-01 |
| Operating | Net Retransmission Revenue, USD millions (period flow) | 550 | 547 | 281 | 292 | Flat to up | Retransmission consent revenue less network affiliation fees, issuer definition |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt | Balance-sheet carrying value, current plus long-term, net of issuance costs | Outstanding principal of debt obligations | Carrying value 5,808 against principal 5,867 at 2026-06-30, a difference of 59 (10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 3 and 15) | 2024-12-31, 2025-12-31, 2026-06-30 | 59 at 2026-06-30, about 1% of principal | CP-1, CP-2 | Use carrying value as the ratio basis and name the principal beside it |
| Net debt | Carrying-value debt less cash: 5,632 | Consolidated Total Net Debt 5,696 (principal plus letters of credit of 5 less cash) in the credit agreement table; 5,691 (principal less cash) in the release | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 37; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 4 | 2026-06-30 | 64 between the carrying-value and covenant figures | CP-1, CP-2 | Name the definition beside each net debt figure |
| EBITDA | Reported EBITDA, here operating income plus depreciation and amortization of intangibles: 669 last twelve months | Adjusted EBITDA 709 last twelve months; Leverage Ratio Denominator 994, an eight-quarter average with pro forma acquisitions and expected synergies | EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 12 and 13; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 37 | FY2024, FY2025, LTM | The covenant denominator is about 49% above reported last-twelve-months EBITDA | CP-1, CP-2 | Keep the three measures separate; do not read the covenant ratios as leverage on reported earnings |
| Total leverage | Net debt / reported EBITDA: 8.42x at 2026-06-30 | Consolidated Total Net Leverage Ratio 5.73x, maximum permitted incurrence 7.00x | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 37 | 2026-06-30 | 2.69x between the two measures | CP-1, CP-2 | Treat 5.73x as the covenant measure only; covenant capacity is not inferred |
| Cash interest | Cash interest paid, a cash-flow figure | Interest expense 234 for the six months 2026 (accrual); interest payments of approximately 222 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 3 and 16 | H1 2026 | 12, accrual against cash | CP-1 | Cover uses cash interest paid as the denominator |
| Debt perimeter | Balance-sheet debt lines only | Receivables securitization facility, USD 400 million sold and derecognized; Series A preferred stock of 600 shown as temporary equity | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 8 and 3 | 2025-12-31, 2026-06-30 | 400 of off-balance-sheet funding and 600 of preferred stock | CP-1, CP-2 | Both stay outside debt and are flagged as claims ahead of or beside creditors |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and coverage metrics | Ready with Limitations | Reported EBITDA is built from components; cash interest is approximate; the interim ratio uses a last-twelve-months denominator | Name the EBITDA and net debt definition beside every ratio |
| Liquidity | Ready with Limitations | Availability of USD 745 million is at 2026-06-30; the revolver drawing for the 2026-07-21 repurchase is not stated | Obtain the revolver balance after 2026-07-21 |
| Debt structure and maturities | Ready | Principal ladder and carrying values reconcile; no executed debt documents were supplied | None for the filed figures |
| Quarterly trend | Not Ready | The 2025-06-30 balance sheet is not supplied; flows come from six-month columns and the three-month columns are not carried | Supply the second quarter 2025 report if quarterly balance sheet trends are needed |

### Credit read-through

Leverage on the basis a creditor carries has deteriorated sharply. Net debt moved from USD 5,486 million at FY2024 to USD 5,376 million at FY2025 and USD 5,632 million at 2026-06-30, while reported EBITDA fell from USD 1,120 million to USD 629 million as political advertising dropped from USD 497 million to USD 42 million, so net debt over reported EBITDA rose from 4.90x to 8.55x and stood at 8.42x on the last twelve months. The cyclical earnings swing, not new borrowing, drives most of the change, which means the ratio should improve only if the 2026 election-year advertising lifts the twelve-month figure.
Basis: calculation C8; calculation C9; calculation C10; calculation C12; calculation C24; calculation C25; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73

Coverage is the thinner dimension. Reported EBITDA covered cash interest paid 2.84x at FY2024, 1.60x at FY2025 and 1.74x over the last twelve months, and issuer-adjusted EBITDA covered it 1.84x on the same twelve months, so a further earnings shortfall would leave little margin before cash flow after interest turns negative. Operating cash flow over the last twelve months was USD 250 million against purchases of property and equipment of USD 104 million, which leaves little to fund the common and preferred dividends.
Basis: calculation C14; calculation C15; calculation C16; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94

Liquidity at 2026-06-30 was cash of USD 176 million plus USD 745 million of revolver availability, with the USD 400 million securitization facility fully drawn, so the facilities already carry funding that sits outside reported debt. The 2026-07-21 repurchase of USD 120 million of notes was funded in part from the revolver in an amount the filings do not state, so current availability is lower than the reported figure by an amount that is not established. Maturities are light until 2028, when USD 739 million of term loan and the revolver fall due, which concentrates refinancing risk in the next political cycle.
Basis: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15–16; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 25; calculation C18; calculation C28

The issuer's own leverage measures tell a milder story than the reported figures. Its covenant total net leverage of 5.73x and first lien net leverage of 2.55x rest on a denominator that averages eight quarters and adds pro forma acquisition earnings and expected synergies, so they measure compliance headroom on a smoothed, pro forma earnings base rather than leverage on current reported earnings. Covenant capacity is not inferred from them because the credit agreement was not supplied.
Basis: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 37; calculation C19

Acquisitions add debt capacity pressure before they add earnings. The company spent USD 264 million of cash on acquisitions in the 2026 six months, issued USD 70 million of additional 2033 first lien notes on 2026-06-30 and paid USD 43 million in cash on 2026-07-01 for further stations, so pro forma net debt of USD 5,675 million, or 8.48x last-twelve-months reported EBITDA, already exceeds the reported 2026-06-30 figure before any acquired earnings are included.
Basis: calculation C20; calculation C22; calculation C27; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 5, 15; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 5

Contrary evidence is that revenue grew 3.41% in the 2026 six months and issuer-adjusted EBITDA grew from USD 329 million to USD 368 million, with political advertising at USD 113 million against USD 22 million a year earlier, so the twelve-month denominator should keep rising through the second half of 2026. What would make the view wrong is a second-half political result well above the guided range, or debt reduction from the USD 250 million repurchase authorization; what would confirm it is further revolver borrowing to fund repurchases or acquisitions.
Basis: calculation C13; calculation C23; EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 2–5

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-06-30 | day | 2026-08-07 | Issue of USD 70 million of additional 7.25% first lien notes due 2033 at par; proceeds fund USD 40 million of acquisition consideration and a USD 30 million repurchase of USD 50 million of preferred stock | Historical: issued June 30, 2026 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15 | Adds secured debt on the balance sheet date; USD 40 million was spent after the date |
| 2026-07-01 | day | 2026-08-07 | First closing of the American Spirit Media and WHPM acquisitions for USD 43 million in cash | Historical: completed July 1, 2026 | EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 5 | Raises net debt by the cash paid before any acquired earnings |
| 2026-07-15 | day | 2026-08-07 | Receivables securitization facility amended to clarify the treatment of receivables from customers in bankruptcy | Historical: amended July 15, 2026 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 25 | Funding of USD 400 million sits outside reported debt; terms of the change are not stated |
| 2026-07-21 | day | 2026-08-07 | Repurchase of USD 100 million of 2029 first lien notes and USD 20 million of 2031 notes at par plus accrued interest | Historical: repurchased July 21, 2026 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 25 | Reduces debt but was funded partly from the revolver, so liquidity falls by an unstated amount |
| 2026-08-06 | day | 2026-08-07 | Board authorized up to USD 250 million of repurchases of outstanding indebtedness through 2027-12-31 | Historical: authorized August 6, 2026 | EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 5 | Allows debt reduction from liquidity; no minimum amount is required |
| 2028-12-01 | day | 2026-08-07 | Maturity of the 2028 first lien term loan of USD 739 million and the revolving credit facility | Scheduled: matures December 1, 2028 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15 | First large maturity; refinancing falls in the 2028 political cycle |
| 2029-07-15 | day | 2026-08-07 | Maturity of the 10.5% first lien notes of USD 1,125 million | Scheduled: matures July 15, 2029 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15 | Highest coupon in the structure; a refinancing priority |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 14 |
| Calculated | 12 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 3 |
| Fields present | 14 |
| Fields total | 15 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 7 |

## Calculations

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | EBITDA (Reported), FY2024 | Operating income 851 plus depreciation 144 plus amortization of intangible assets 125 | USD 1,120 million | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73 |
| C2 | EBITDA (Reported), FY2025 | Operating income 392 plus depreciation 133 plus amortization of intangible assets 104 | USD 629 million | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73 |
| C3 | EBITDA (Reported), H1 2025 | Operating income 174 plus depreciation 66 plus amortization of intangible assets 57 | USD 297 million | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| C4 | EBITDA (Reported), H1 2026 | Operating income 217 plus depreciation 67 plus amortization of intangible assets 53 | USD 337 million | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| C5 | Total Debt, 2024-12-31 | Current portion 20 plus long-term debt 5,601 | USD 5,621 million | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 72 |
| C6 | Total Debt, 2025-12-31 | Current portion 2 plus long-term debt 5,742 | USD 5,744 million | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 72 |
| C7 | Total Debt, 2026-06-30 | Current portion nil plus long-term debt 5,808 | USD 5,808 million | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 2 |
| C8 | Net debt, 2024-12-31 | Total debt 5,621 less cash 135 | USD 5,486 million | Calculations C5 |
| C9 | Net debt, 2025-12-31 | Total debt 5,744 less cash 368 | USD 5,376 million | Calculations C6 |
| C10 | Net debt, 2026-06-30 | Total debt 5,808 less cash 176 | USD 5,632 million | Calculations C7 |
| C11 | Revenue, last twelve months to 2026-06-30 | FY2025 3,095 plus H1 2026 1,607 less H1 2025 1,554 | USD 3,148 million | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| C12 | EBITDA (Reported), last twelve months to 2026-06-30 | FY2025 629 plus H1 2026 337 less H1 2025 297 | USD 669 million | Calculations C2 to C4 |
| C13 | EBITDA (Adjusted), last twelve months to 2026-06-30 | FY2025 670 plus H1 2026 368 less H1 2025 329 | USD 709 million | EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 11; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 12 |
| C14 | Cash interest paid, last twelve months to 2026-06-30 | FY2025 393 plus H1 2026 222 less H1 2025 230 | USD 385 million | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 16 |
| C15 | Net cash from operating activities, last twelve months | FY2025 289 plus H1 2026 124 less H1 2025 163 | USD 250 million | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 75; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| C16 | Purchases of property and equipment, last twelve months | FY2025 108 plus H1 2026 36 less H1 2025 40 | USD 104 million | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 75; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| C17 | Reconciling items from principal to carrying value, 2026-06-30 | Deferred loan costs 11 plus 7 plus 6 plus 9 plus 15 plus 15 = 63, less premium 4; principal 5,867 less 59 | USD -59 million; carrying value USD 5,808 million | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15 |
| C18 | Principal due 2028 as a share of principal | Term loan 739 over total principal 5,867 | 12.60% | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 16 |
| C19 | Covenant total net leverage recomputed | Consolidated Total Net Debt USD 5,696 million over Leverage Ratio Denominator USD 994 million | 5.73x | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 37 |
| C20 | Pro forma net debt after the 2026-07-01 acquisitions | Net debt 5,632 plus cash paid 43 | USD 5,675 million | Calculations C10; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 5 |
| C21 | Net debt over reported EBITDA, difference to covenant ratio | 8.42x less 5.73x | 2.69x | Calculations C10, C12 and C19 |
| C22 | Pro forma net leverage | Pro forma net debt 5,675 over last-twelve-months reported EBITDA 669 | 8.48x | Calculations C12 and C20 |
| C23 | Revenue growth, H1 2026 over H1 2025 | 1,607 over 1,554 less 1 | 3.41% | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| C24 | Net debt over last-twelve-months reported EBITDA | 5,632 over 669 | 8.42x | Calculations C10 and C12 |
| C25 | Net debt over FY2024 reported EBITDA | 5,486 over 1,120 | 4.90x | Calculations C8 and C1 |
| C26 | Reported EBITDA over cash interest paid, last twelve months | 669 over 385 | 1.74x | Calculations C12 and C14 |
| C27 | Cash paid for acquisitions, H1 2026 | Acquisitions of television businesses and licenses, net of cash acquired | USD 264 million | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| C28 | Notes repurchased on 2026-07-21 | 2029 first lien notes USD 100 million plus 2031 notes USD 20 million | USD 120 million | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 25 |

## Gaps

- The 2025-06-30 balance sheet is not in the sources, so the H1 2025 balance sheet column is not supplied; this restricts quarterly balance sheet trends and nothing in the ratios, which use the 2024-12-31, 2025-12-31 and 2026-06-30 balance sheets (Medium; supply the second quarter 2025 quarterly report).
- The company does not state the revolver amount drawn to fund the 2026-07-21 repurchase, so liquidity and net debt after that date are not established and the USD 745 million availability is a 2026-06-30 figure (High; supply a later filing or release).
- No filing or release dated after 2026-08-07 was supplied, so the quarter ended 2026-09-30 and any later financing are not established (High; supply it if filed on or before the as-of date).
- The issuer states no unadjusted EBITDA, so EBITDA (Reported) is calculated from operating income and depreciation and amortization; the choice matters because impairment, disposal and stock-based compensation charges stay in it (Medium; labelled as calculated throughout).
- Cash interest paid is stated only as an approximate figure in the debt note, so interest cover carries rounding of a few million dollars (Low).
- Lines printed only as a dash in the columns shown, and per-share and share-count lines, are not carried in the statement tables; dashes are not read as zero, and where a line is printed in one period and not another the cell says so (Low).
- The tax, program rights and pension detail and the lease maturity schedule were not extracted; operating lease liabilities of USD 79 million at 2026-06-30 sit outside debt as the issuer presents them separately (Low).
- The second closings of the American Spirit Media and WHPM acquisitions depend on regulatory approval, and the receivables facility amendment of 2026-07-15 states no amount, so neither is in the net debt rows (Medium).
- The credit agreement and indentures were not supplied, so facility-level amortisation, floors and covenant definitions are known only as the filings summarise them; the term loan floor is not stated (Medium; supply the documents if covenant work is needed).

## Next module

The orchestrator selects the next module.
