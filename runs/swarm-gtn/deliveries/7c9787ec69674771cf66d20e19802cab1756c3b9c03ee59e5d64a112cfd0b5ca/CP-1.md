# Financial foundation: GRAY MEDIA, INC (gtn)

## Request

GRAY MEDIA, INC (issuer gtn), as of 2026-11-05, credit snapshot pathway. Scope: extract and normalise the issuer's financial statements, debt, liquidity and leverage and coverage measures from the seven supplied filings and releases, with the source readiness results of this run as the only earlier input. No credit recommendation is made.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_gtn20251231_10k.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-26 (signature date) | 88cd2be27d00e9908e881a07fffdbfb7e9fbcb182cd4daa7213df1b4b5f00737 | Audited FY2023 to FY2025 statements, debt note, maturity table, liquidity and covenant tables, segment note, interest paid. |
| 10-Q_2025-09-30_gtn20250930_10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2025 | 2025-11-07 (signature date) | b62445e5fe4a163fa362c47bf83e36bde2a987867496619de6fe27a40edfa171 | Read for the discrete third quarter of 2025; its revenue is used only as a cross-check of the twelve-month revenue (calculation K9). |
| 10-Q_2026-03-31_gtn20260331_10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 (signature date) | 3356f048b1cdb10c04c5b80b0d02babf79237e5dc24d851924643abb820dcebd | First-quarter debt note and covenant table, used for the definition conflict register and the term loan repayment. |
| 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-07 (signature date) | e96d90052b60b94fa2a12b7f9024364ed7aff9961690c651cc002284f695a02b | Six-month 2026 statements, 2026-06-30 balance sheet, debt note and maturity table, liquidity, covenant table, subsequent events. |
| EX-99.1_2026-02-26_ex_924265.htm.jsonl | Earnings release (Exhibit 99.1) for the fourth quarter and year ended December 31, 2025 | 2026-02-26 | 178b7bc5710105291e494cc784bd65c8c9bce375e1552cc63408e1853ff6a993 | FY2025 and FY2024 adjusted EBITDA and its reconciliation; year-end debt summary. |
| EX-99.1_2026-05-07_ex_956963.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter ended March 31, 2026 | 2026-05-07 | b04f43ebe7b79436fed34dc07bcf8f9f9fb0c9fac32a39299a3e02ac7ae325d8 | First-quarter 2025 adjusted EBITDA comparison and the term loan settlement. |
| EX-99.1_2026-08-07_ex_998938.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter ended June 30, 2026 | 2026-08-07 | 1120ddd52748c4fbbc1c17f2a7297d8e7f38db5b861bb6f5b9064b68dbae4a0d | Six-month 2026 and 2025 adjusted EBITDA and its reconciliation; debt summary, liquidity, post-quarter acquisitions. |

| Supplied module output | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 151d7c6976209778fb24f710b491d64f53ea1be92150190307d6b329db17921e | Run scope, source register and the gaps already logged; no figure is taken from it. |

## Findings

### Bottom line

Leverage is high and cyclical, with net debt at 8.42x derived reported EBITDA and cash interest cover of 1.74x at 2026-06-30, so creditors depend on political-year earnings recovering while no principal falls due before 2028.
Basis: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-5, 15-16; calculation K22; calculation K23

The issuer's own covenant ratio of 5.73x looks far lower because its denominator averages eight quarters and adds acquisition and synergy adjustments, so it is not comparable with these figures. Liquidity was USD 921 million of cash and undrawn revolver at quarter end, but the derived EBITDA, the quarter-end balance-sheet date and the unquantified revolver borrowing since then limit how far these figures can be pushed.
Basis: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 33-37; EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 5, 12-13; calculation K30; calculation K32

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_gtn20251231_10k.htm.jsonl | Annual report (Form 10-K) | FY2025 with FY2024 and FY2023 comparatives (balance sheet FY2025 and FY2024) | USD | millions | Gray Media, Inc., consolidated | US GAAP, audited | Tier 1 | Annual statements, debt note, covenant table, segment note, interest paid | Part III is incorporated from a proxy statement not supplied; prints no EBITDA |
| 10-Q_2025-09-30_gtn20250930_10q.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and nine months ended 2025-09-30 | USD | millions | Gray Media, Inc., consolidated | US GAAP, unaudited | Tier 2b | Cross-check of the discrete third quarter of 2025 only | No release for the quarter is supplied |
| 10-Q_2026-03-31_gtn20260331_10q.htm.jsonl | Quarterly report (Form 10-Q) | Quarter ended 2026-03-31 | USD | millions | Gray Media, Inc., consolidated | US GAAP, unaudited | Tier 2b | Debt note and covenant table at 2026-03-31 | Covenant table differs from its debt note by 6 and 1 USD million |
| 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and six months ended 2026-06-30 and balance sheet at 2025-12-31 | USD | millions | Gray Media, Inc., consolidated | US GAAP, unaudited | Tier 2b | Latest balance sheet, six-month statements, debt note, covenant table, subsequent events | Newest period supplied; subsequent events run only to 2026-08-07 |
| EX-99.1_2026-02-26_ex_924265.htm.jsonl | Earnings release (Exhibit 99.1) | Fourth quarter and FY2025, with FY2024 | USD | millions | Gray Media, Inc., consolidated | Issuer non-GAAP and GAAP, unaudited | Tier 2b | Adjusted EBITDA for FY2025 and FY2024 | Adjusted EBITDA is issuer-defined; FY2023 not printed |
| EX-99.1_2026-05-07_ex_956963.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter ended 2026-03-31 | USD | millions | Gray Media, Inc., consolidated | Issuer non-GAAP and GAAP, unaudited | Tier 2b | Adjusted EBITDA comparison and term loan settlement | Adjusted EBITDA is issuer-defined |
| EX-99.1_2026-08-07_ex_998938.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter and six months ended 2026-06-30 | USD | millions | Gray Media, Inc., consolidated | Issuer non-GAAP and GAAP, unaudited | Tier 2b | Adjusted EBITDA for the six months of 2026 and 2025; debt summary; liquidity | Adjusted EBITDA is issuer-defined |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Gray Media, Inc. | Issuer and borrower; holding company with no material independent assets; substantially all subsidiaries guarantee the debt | December 31 | USD | millions | Consolidated group; the station perimeter changed during the first half of 2026 through acquisitions and a station swap | US GAAP | FY2023, FY2024, FY2025 (annual); H1 2025 and H1 2026 (six months); balance sheets at 2024-12-31, 2025-12-31 and 2026-06-30 |

Subsequent events after 2026-06-30 are flagged in the post-balance-sheet table and are not blended into any period figure.
Basis: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 55; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 25-26, 35

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) derived as operating income plus depreciation plus amortization of intangible assets, because no filing prints an EBITDA | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 | Derivation | Not supplied: no EBITDA printed in the filings | 722, 1,120, 629, 297 and 337 (USD millions) for FY2023, FY2024, FY2025, H1 2025 and H1 2026 | Method step 4: derive from components when not stated | All periods |
| Adjusted EBITDA taken from the issuer's releases unchanged and shown beside the derived figure | EX-99.1_2026-02-26_ex_924265.htm.jsonl, pages 2, 11; EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 3-4, 12 | Source adoption | Not applicable | 1,162, 670, 329 and 368 (USD millions) for FY2024, FY2025, H1 2025 and H1 2026 | The issuer states an adjusted figure, so it is carried labelled; the two are never mixed in one table | FY2024, FY2025, H1 2025, H1 2026 |
| Total Debt taken at balance-sheet carrying value (current plus long-term, net of issuance costs and premium), not principal | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 92; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15 | Basis | Principal 5,690, 5,810 and 5,867 | Carrying 5,621, 5,744 and 5,808 | Method rule: gross principal is never the leverage denominator | FY2024, FY2025, 2026-06-30 |
| Preferred stock dividends and the deemed contribution shown as signed amounts below net income | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 | Sign | 52 printed unsigned in the 10-K; (13) and (26) printed in brackets in the 10-Q | -52 for each year; -26 for each six months; 20 deemed contribution | One sign convention across annual and interim columns | All periods |
| Cash Interest Paid taken from the debt note's approximate interest payments, because the cash flow statement prints none | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 16 | Source selection | Not supplied: no cash flow line | 419, 394, 393, 230 and 222 (USD millions) | Method step 5: cash interest is cash paid, not the income statement expense | All periods |
| Dashes in the maturity table read as nil in the debt ladder | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 95; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 16 | Nil reading | Dash | 0 for 2026 and 2027 | The printed years add exactly to the printed total principal, so nothing falls due in those years | 2026-06-30 ladder |
| No currency, unit or perimeter adjustment | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 2 | None | Not applicable | Not applicable | Statements are in USD millions on one consolidated perimeter | All periods |

### Period table

| Period | Start | End |
|---|---|---|
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| H1 2025 | 2025-01-01 | 2025-06-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | H1 2025 | H1 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Revenue: Broadcasting | 3,195 | 3,539 | 2,988 | 1,509 | 1,552 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Revenue: Production companies | 86 | 105 | 107 | 45 | 55 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Total revenue (less agency commissions) | 3,281 | 3,644 | 3,095 | 1,554 | 1,607 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Operating expenses before depreciation, amortization, impairment and (gain) loss on disposal: Broadcasting | 2,268 | 2,317 | 2,239 | 1,140 | 1,124 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Operating expenses before depreciation, amortization, impairment and (gain) loss on disposal: Production companies | 115 | 83 | 95 | 40 | 50 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Operating expenses before depreciation, amortization, impairment and (gain) loss on disposal: Corporate and administrative | 112 | 104 | 113 | 57 | 76 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Depreciation | 145 | 144 | 133 | 66 | 67 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Amortization of intangible assets | 194 | 125 | 104 | 57 | 53 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Impairment of goodwill, broadcast licenses and other intangible assets | 43 | Not supplied: the source prints a dash for this line | 30 | 28 | Not supplied: the source prints a dash for this line | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| (Gain) loss on disposal of assets, net | 21 | 20 | -11 | -8 | 20 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Operating expenses, net | 2,898 | 2,793 | 2,703 | 1,380 | 1,390 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Operating income | 383 | 851 | 392 | 174 | 217 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Miscellaneous (expense) income, net | 7 | 117 | -1 | 1 | 8 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Impairment of investments | -29 | -25 | -20 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Interest expense | -440 | -485 | -474 | -235 | -234 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| (Loss) gain on early extinguishment of debt | -3 | 34 | -10 | 1 | Not supplied: the source prints a dash for this line | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| (Loss) income before income taxes | -82 | 492 | -113 | -59 | -9 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Income tax (benefit) expense | -6 | 117 | -28 | 6 | -3 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Net (loss) income | -76 | 375 | -85 | -65 | -6 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Preferred stock dividends | -52 | -52 | -52 | -26 | -26 | USD millions | Reported amount shown as a deduction in every column (T4.3) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Deemed contribution on repurchase of Series A Perpetual Preferred Stock | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the source prints a dash for this line | 20 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Net (loss) income attributable to common stockholders | -128 | 323 | -137 | -91 | -12 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| Segment operating income (loss): Broadcasting | 587 | 956 | 513 | 236 | 300 | USD millions | Reported segment note | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 113-114; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 23 |
| Segment operating income (loss): Production companies | -88 | 1 | -6 | -4 | -6 | USD millions | Reported segment note | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 113-114; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 23 |
| Segment operating income (loss): Other (corporate and eliminations) | -116 | -106 | -115 | -58 | -77 | USD millions | Reported segment note; one separate row, never an operating unit | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 113-114; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 23 |
| EBITDA (Reported) | 722 | 1,120 | 629 | 297 | 337 | USD millions | Calculated: operating income plus depreciation plus amortization of intangible assets (calculations K1 to K5); the issuer prints no EBITDA in its filings | calculation K1; calculation K2; calculation K3; calculation K4; calculation K5 |
| EBITDA (Adjusted) | Not supplied: the supplied releases print adjusted EBITDA for FY2025 and FY2024 only | 1,162 | 670 | 329 | 368 | USD millions | Issuer-adjusted, reported in the releases: net income plus tax, interest, depreciation, amortization, stock-based compensation, impairment, disposal result and miscellaneous items; the add-backs between operating income plus depreciation and amortization and this figure are stock-based compensation, impairment and the disposal result (calculation K33) | EX-99.1_2026-02-26_ex_924265.htm.jsonl, pages 2, 11; EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 3-4, 12 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | H1 2025 | H1 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net (loss) income | -76 | 375 | -85 | -65 | -6 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Depreciation | 145 | 144 | 133 | 66 | 67 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Amortization of intangible assets | 194 | 125 | 104 | 57 | 53 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Amortization of deferred loan costs | 13 | 15 | 16 | 8 | 7 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Accretion of original issue discount and premium related to long-term debt, net | -1 | Not supplied: the source prints a dash for this line | Not supplied: the source prints a dash for this line | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Stock-based compensation | 20 | 22 | 22 | 12 | 11 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Amortization of program broadcast rights | 37 | 28 | 27 | 12 | 13 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Payments on program broadcast obligations | -38 | -29 | -27 | -14 | -14 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Common stock contributed to 401(k) plan | 10 | Not supplied: the source prints a dash for this line | Not supplied: the source prints a dash for this line | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Deferred income taxes | -91 | -9 | -56 | -35 | -1 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| (Gain) loss on disposal of property and equipment, net | 21 | 20 | -6 | -2 | 20 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Gain on sale of investments | Not supplied: the source prints a dash for this line | -110 | -5 | -6 | -8 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Loss (gain) on early extinguishment of debt | 3 | -34 | 10 | -1 | Not supplied: the source prints a dash for this line | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Impairment of investments | 29 | 25 | 20 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Impairment of goodwill and other intangible assets | 43 | Not supplied: the source prints a dash for this line | 30 | 28 | Not supplied: the source prints a dash for this line | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Other operating adjustments | 14 | -1 | 15 | 7 | Not supplied: the source prints a dash for this line | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in accounts receivable, net | 308 | 5 | 132 | 120 | 14 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in income tax receivable or prepaid | 26 | 8 | -10 | Not supplied: the source prints a dash for this line | -43 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in other current assets | 7 | 27 | -6 | -6 | -6 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in accounts payable | -32 | 52 | -10 | 26 | 26 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in employee compensation, benefits and pension costs | 12 | 1 | -7 | -28 | -9 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in accrued other expenses | -5 | 49 | -38 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in accrued interest | 3 | 49 | 39 | -17 | Not supplied: the source prints a dash for this line | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in income taxes payable | 7 | -17 | Not supplied: the source prints a dash for this line | 3 | -1 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Change in deferred revenue | -1 | 6 | -9 | -2 | 1 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net cash provided by operating activities | 648 | 751 | 289 | 163 | 124 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Acquisitions of businesses and broadcast licenses, net of cash acquired | -6 | -1 | Not supplied: the source prints a dash for this line | Not supplied: the source prints a dash for this line | -264 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Proceeds from sale of television stations | 6 | Not supplied: the source prints a dash for this line | Not supplied: the source prints a dash for this line | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Purchases of property and equipment | -348 | -143 | -108 | -40 | -36 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Proceeds from asset sales | 54 | 14 | 47 | 14 | 2 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Proceeds from sale of investments | Not supplied: the source prints a dash for this line | 110 | 24 | 22 | 10 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Reimbursement of development costs | 18 | Not supplied: the source prints a dash for this line | Not supplied: the source prints a dash for this line | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Investments in broadcast, production and technology companies | -14 | -7 | -8 | -8 | Not supplied: the source prints a dash for this line | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Other investing | -1 | -1 | -18 | -2 | -2 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net cash used in investing activities | -291 | -28 | -63 | -14 | -290 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Proceeds from borrowings on long-term debt | 300 | 2,070 | 2,110 | 130 | 70 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Repayments of borrowings on long-term debt | -610 | -2,544 | -1,987 | -168 | -13 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Repurchase of Series A preferred stock | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | -30 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Payments of common stock dividends | -30 | -32 | -33 | -16 | -17 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Payments of preferred stock dividends | -52 | -52 | -52 | -26 | -27 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Deferred and other loan costs | Not supplied: the source prints a dash for this line | -47 | -26 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Payments for taxes related to net share settlement of equity awards | -5 | -4 | -5 | -5 | -9 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net cash provided by (used in) financing activities | -397 | -609 | 7 | -85 | -26 | USD millions | Reported; FY columns audited (Tier 1), H1 columns unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net Cash from Operating Activities | 648 | 751 | 289 | 163 | 124 | USD millions | Reported; the three activity totals and the change are signed, an outflow negative | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net Cash from Investing Activities | -291 | -28 | -63 | -14 | -290 | USD millions | Reported; the three activity totals and the change are signed, an outflow negative | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net Cash from Financing Activities | -397 | -609 | 7 | -85 | -26 | USD millions | Reported; the three activity totals and the change are signed, an outflow negative | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Net Cash Change | -40 | 114 | 233 | 64 | -192 | USD millions | Reported; the three activity totals and the change are signed, an outflow negative | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Opening Cash | 61 | 21 | 135 | 135 | 368 | USD millions | Reported; the three activity totals and the change are signed, an outflow negative | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Closing Cash | 21 | 135 | 368 | 199 | 176 | USD millions | Reported; the three activity totals and the change are signed, an outflow negative | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Cash Interest Paid | 419 | 394 | 393 | 230 | 222 | USD millions | Reported in the debt note as approximate interest payments on all interest-bearing obligations; the note separately states capitalised interest of 3 (FY2025) and under 1 (H1 2026) and does not say whether the approximate figure includes it; the cash flow statement prints no such line | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 16 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | H1 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash | 135 | 368 | 176 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Accounts receivable, net | 337 | 205 | 193 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Current portion of program broadcast rights, net | 17 | 17 | 5 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Income tax refunds receivable | 6 | 6 | 1 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Prepaid income taxes | 25 | 35 | 83 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Prepaid and other current assets | 21 | 25 | 34 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Total current assets | 541 | 656 | 492 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Property and equipment, net | 1,577 | 1,509 | 1,522 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Operating lease right of use asset | 69 | 66 | 76 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Broadcast licenses | 5,311 | 5,309 | 5,463 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Goodwill | 2,642 | 2,642 | 2,693 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Other intangible assets, net | 290 | 157 | 109 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Investments in broadcasting and technology companies | 66 | 37 | 32 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Deferred pension assets | 19 | 21 | 21 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Other non-current assets | 27 | 43 | 29 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Accounts payable | 154 | 144 | 143 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Employee compensation and benefits | 111 | 103 | 95 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Accrued interest | 112 | 151 | 150 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Other accrued expenses | 53 | 47 | 73 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Federal and state income taxes | 5 | 5 | 4 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Current portion of program broadcast obligations | 18 | 18 | 5 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Deferred revenue | 29 | 20 | 22 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Dividends payable | 15 | 16 | 14 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Current portion of operating lease liabilities | 10 | 10 | 11 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Current portion of long-term debt | 20 | 2 | Not supplied: the source prints a dash for this line | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Total current liabilities | 527 | 516 | 517 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Long-term debt, less current portion and less deferred financing costs | 5,601 | 5,742 | 5,808 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Deferred income taxes | 1,347 | 1,300 | 1,299 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Operating lease liabilities, less current portion | 62 | 59 | 68 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Other non-current liabilities | 72 | 18 | 17 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Common stock | 1,198 | 1,210 | 1,216 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Class A common stock | 57 | 67 | 72 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Retained earnings | 1,375 | 1,205 | 1,176 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Accumulated other comprehensive loss | -30 | -4 | -4 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Treasury stock, common stock | -284 | -288 | -292 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Treasury stock, Class A common stock | -33 | -35 | -40 | USD millions | Reported; balance at the period end; FY columns audited (Tier 1), H1 2026 unaudited (Tier 2b) | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Total Assets | 10,542 | 10,440 | 10,437 | USD millions | Reported | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Total Liabilities | 7,609 | 7,635 | 7,709 | USD millions | Reported total liabilities, excluding the Series A preferred stock shown between liabilities and equity | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Temporary Equity | 650 | 650 | 600 | USD millions | Reported Series A Perpetual Preferred Stock (liquidation preference); redeemable, outside stockholders' equity | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Total Equity | 2,283 | 2,155 | 2,128 | USD millions | Reported total stockholders' equity, excluding Temporary Equity | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| Total Debt | 5,621 | 5,744 | 5,808 | USD millions | Calculated: long-term debt less current portion and deferred financing costs plus current portion (calculations K12 to K14); carrying value; the receivables securitization and the preferred stock are not in it | calculation K12; calculation K13; calculation K14 |
| Cash & Equivalents | 135 | 368 | 176 | USD millions | Reported cash; no restricted cash or short-term investment line is printed | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2028 first lien term loan (2021 term loan) | Term loan | Not supplied: the note prints principal and unamortized costs, not a carrying value by instrument | 739 | 739 | Not applicable | First lien secured on substantially all assets except real estate | First lien | USD | 739 | Not applicable | Term SOFR plus 3.00% plus a credit spread adjustment; 6.7% at 2026-06-30 | Floating | Term SOFR | 300 | Not applicable | 2028-12-01 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15-16; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 55 |
| 2029 first lien notes | Senior secured notes | Not supplied: the note prints principal and unamortized costs, not a carrying value by instrument | 1,125 | 1,125 | Not applicable | First lien secured on substantially all assets except real estate | First lien | USD | 1,125 | Not applicable | 10.5% | Fixed | Not applicable | Not applicable | Not applicable | 2029-07-15 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 93-95 |
| 2033 first lien notes | Senior secured notes | Not supplied: the note prints principal and unamortized costs, not a carrying value by instrument | 845 | 845 | Not applicable | First lien secured on substantially all assets except real estate | First lien | USD | 845 | Not applicable | 7.25% | Fixed | Not applicable | Not applicable | Not applicable | 2033-08-15 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94 |
| 2032 second lien notes | Senior secured notes | Not supplied: the note prints principal and unamortized costs, not a carrying value by instrument | 1,150 | 1,150 | Not applicable | Second lien secured on substantially all assets except real estate | Second lien | USD | 1,150 | Not applicable | 9.625% | Fixed | Not applicable | Not applicable | Not applicable | 2032-07-15 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 93 |
| 2030 senior unsecured notes | Senior notes | Not supplied: the note prints principal and unamortized costs, not a carrying value by instrument | 790 | 790 | Not applicable | Unsecured, guaranteed by substantially all subsidiaries | Senior unsecured | USD | 790 | Not applicable | 4.75% | Fixed | Not applicable | Not applicable | Not applicable | 2030-10-15 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15, 35 |
| 2031 senior unsecured notes | Senior notes | Not supplied: the note prints principal and unamortized costs, not a carrying value by instrument | 1,218 | 1,218 | Not applicable | Unsecured, guaranteed by substantially all subsidiaries | Senior unsecured | USD | 1,218 | Not applicable | 5.375% | Fixed | Not applicable | Not applicable | Not applicable | 2031-11-15 | 0 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15, 35 |
| Revolving credit facility | Revolver | 0 | 0 | 0 | 750 | First lien secured, under the senior credit agreement | First lien | USD | 0 | Not applicable | Term SOFR plus 1.75% to 2.75%, or base rate plus 0.75% to 1.75%, by first lien net leverage; commitment fee 0.250% to 0.400% | Floating | Term SOFR or base rate | 175 to 275, by first lien net leverage | Not applicable | 2028-12-01 | Not applicable | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15-16; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 5 |
| Receivables securitization facility (sold receivables) | Off-balance-sheet receivables sale | Not applicable | Not applicable | 400 | 400 | Receivables of a special purpose subsidiary; not a claim on the other assets | Not supplied: no rank is stated for it among the debt | USD | Not applicable: derecognised as a true sale and outside Total Debt | Not applicable | One-month SOFR plus 125 bps | Floating | One-month SOFR | 125 | Not applicable | 2028-03-31 | Not applicable | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 8; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 61, 78 |
| Financing cost adjustment | Unamortized issuance costs net of premium | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -59 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM to 2026-06-30 | USD 629m | USD 337m | USD 297m | USD 669m | Calculated | calculation K3; calculation K5; calculation K4; calculation K6 | Derived EBITDA; the stub columns are comparable six-month periods |
| EBITDA (Adjusted) | LTM to 2026-06-30 | USD 670m | USD 368m | USD 329m | USD 709m | Calculated | EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2; EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 3-4; calculation K7 | Issuer-adjusted; both half-year figures are as printed in the second-quarter release |
| Cash Interest Paid | LTM to 2026-06-30 | USD 393m | USD 222m | USD 230m | USD 385m | Calculated | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 16; calculation K8 | Approximate interest payments from the debt notes |
| Revenue | LTM to 2026-06-30 | USD 3,095m | USD 1,607m | USD 1,554m | USD 3,148m | Calculated | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3; calculation K9 | Equals the sum of the four discrete quarters from the third quarter of 2025 to the second quarter of 2026 |
| Net cash provided by operating activities | LTM to 2026-06-30 | USD 289m | USD 124m | USD 163m | USD 250m | Calculated | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5; calculation K10 | Working-capital swings make the twelve-month figure volatile |
| Purchases of property and equipment | LTM to 2026-06-30 | USD 108m | USD 36m | USD 40m | USD 104m | Calculated | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 75; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5; calculation K11 | Includes Assembly Atlanta capital expenditure in FY2025; not split into maintenance and growth |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 5,621 | 135 | 5,486 | US$m | Carrying value: long-term debt less current portion and deferred financing costs 5,601 plus current portion 20; principal 5,690. Includes no securitization (sold receivables derecognised), no lease and no preferred stock; reported |
| FY2025 / 2025-12-31 | 5,744 | 368 | 5,376 | US$m | Carrying value: 5,742 plus current portion 2; principal 5,810. Excludes sold receivables of 400, operating lease liabilities of 69 and preferred stock of 650; reported |
| 2026-06-30 | 5,808 | 176 | 5,632 | US$m | Carrying value: 5,808 plus nil current portion; principal 5,867. Excludes sold receivables of 400, operating lease liabilities of 79 (68 plus 11) and preferred stock of 600; reported at the quarter end, before the post-quarter events |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-06-30 | 5,867 | -59 | 5,808 | US$m | Principal is the sum of the maturity rows. Reconciling items are unamortized deferred loan costs of -11, -7, -6, -9, -15 and -15 and an unamortized premium of 4 (calculation K18); no debt is left out of the ladder |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 0 | US$m | The maturity table prints a dash for the year; read as nil because the printed years add exactly to the printed principal; principal basis |
| FY2027 | 0 | US$m | The maturity table prints a dash for the year; read as nil because the printed years add exactly to the printed principal; principal basis |
| FY2028 | 739 | US$m | Principal due in the year as printed in the maturity table at 2026-06-30; principal, not carrying value |
| FY2029 | 1,125 | US$m | Principal due in the year as printed in the maturity table at 2026-06-30; principal, not carrying value |
| FY2030 | 790 | US$m | Principal due in the year as printed in the maturity table at 2026-06-30; principal, not carrying value |
| FY2031 | 1,218 | US$m | Principal due in the year as printed in the maturity table at 2026-06-30; principal, not carrying value |
| FY2032 | 1,150 | US$m | Principal due in the year as printed in the maturity table at 2026-06-30; principal, not carrying value |
| FY2033 | 845 | US$m | Principal due in the year as printed in the maturity table at 2026-06-30; principal, not carrying value |

The ladder is drawn at principal and the revolver commitments of USD 750 million, undrawn at the date, also end in 2028.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 135 | 674 | US$m | Cash as reported; undrawn is the revolver commitment of 680 less letters of credit of 6; the securitization is fully drawn and adds none |
| FY2025 / 2025-12-31 | 368 | 745 | US$m | Cash as reported; undrawn is the revolver commitment of 750 less letters of credit of 5; the securitization is fully drawn and adds none |
| 2026-06-30 | 176 | 745 | US$m | Cash as reported; undrawn is the revolver commitment of 750 less letters of credit of 5; before the post-quarter acquisitions and bond repurchase, and the revolver borrowing since then is not stated |

The undrawn figure is borrowing availability net of letters of credit, and the revolver is shown undrawn only at the balance-sheet date.

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 5.02 | 4.90 | x | Carrying-value debt over derived reported EBITDA of the year (calculation K2); FY2024 was the election year; adjusted-EBITDA ratios are in the register |
| FY2025 / 2025-12-31 | 9.13 | 8.55 | x | Carrying-value debt over derived reported EBITDA of the year (calculation K3); FY2025 was the off-year of the political cycle |
| 2026-06-30 | 8.68 | 8.42 | x | Carrying-value debt over derived reported EBITDA of the twelve months to 2026-06-30 (calculation K6); before post-quarter events; not the issuer's covenant ratio, which uses an eight-quarter average denominator |

The EBITDA is derived from operating income and depreciation and amortization because the issuer prints none, and the twelve-month row mixes a full year with two half-years.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 2.84 | x | Derived reported EBITDA over cash interest paid for the year (394, approximate) |
| FY2025 / 2025-12-31 | 1.60 | x | Derived reported EBITDA over cash interest paid for the year (393, approximate) |
| 2026-06-30 | 1.74 | x | Derived reported EBITDA over cash interest paid for the twelve months (385, approximate; calculation K8) |

Cash interest paid is the issuer's approximate figure from the debt note, not a cash flow statement line.

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 5,621 | Net debt data, Gross debt; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 | 1,120 | T4.4 Income statement, EBITDA (Reported); calculation K2 | FY2024 / 2024-12-31 | USD | US$m | 5.02 | Calculated | Tier 1 | Derived EBITDA; carrying-value debt |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 5,744 | Net debt data, Gross debt; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 | 629 | T4.4 Income statement, EBITDA (Reported); calculation K3 | FY2025 / 2025-12-31 | USD | US$m | 9.13 | Calculated | Tier 1 | Derived EBITDA; carrying-value debt |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 5,808 | Net debt data, Gross debt; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 | 669 | T4.4 Income statement, EBITDA (Reported); calculation K6 | 2026-06-30 | USD | US$m | 8.68 | Calculated | Tier 2b | Derived EBITDA; carrying-value debt; twelve months to 2026-06-30, before post-quarter events |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 5,486 | Net debt data, Net debt; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 | 1,120 | T4.4 Income statement, EBITDA (Reported); calculation K2 | FY2024 / 2024-12-31 | USD | US$m | 4.90 | Calculated | Tier 1 | Derived EBITDA; carrying-value debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 5,376 | Net debt data, Net debt; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 | 629 | T4.4 Income statement, EBITDA (Reported); calculation K3 | FY2025 / 2025-12-31 | USD | US$m | 8.55 | Calculated | Tier 1 | Derived EBITDA; carrying-value debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 5,632 | Net debt data, Net debt; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 | 669 | T4.4 Income statement, EBITDA (Reported); calculation K6 | 2026-06-30 | USD | US$m | 8.42 | Calculated | Tier 2b | Derived EBITDA; carrying-value debt; twelve months to 2026-06-30, before post-quarter events |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,120 | T4.4 Income statement, EBITDA (Reported); calculation K2 | 394 | T4.5 Cash flow statement, Cash Interest Paid; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94 | FY2024 / 2024-12-31 | USD | US$m | 2.84 | Calculated | Tier 1 | Cash interest is the issuer's approximate interest paid |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 629 | T4.4 Income statement, EBITDA (Reported); calculation K3 | 393 | T4.5 Cash flow statement, Cash Interest Paid; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94 | FY2025 / 2025-12-31 | USD | US$m | 1.60 | Calculated | Tier 1 | Cash interest is the issuer's approximate interest paid |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 669 | T4.4 Income statement, EBITDA (Reported); calculation K6 | 385 | T4.5 Cash flow statement, Cash Interest Paid; calculation K8 | 2026-06-30 | USD | US$m | 1.74 | Calculated | Tier 2b | Cash interest is the issuer's approximate interest paid; twelve months to 2026-06-30, before post-quarter events |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 5,621 | Net debt data, Gross debt; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 | 1,162 | T4.4 Income statement, EBITDA (Adjusted); EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2 | FY2024 / 2024-12-31 | USD | US$m | 4.84 | Calculated | Tier 2b | Issuer-adjusted EBITDA from the releases; carrying-value debt |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 5,744 | Net debt data, Gross debt; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 | 670 | T4.4 Income statement, EBITDA (Adjusted); EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2 | FY2025 / 2025-12-31 | USD | US$m | 8.57 | Calculated | Tier 2b | Issuer-adjusted EBITDA from the releases; carrying-value debt |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 5,808 | Net debt data, Gross debt; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 | 709 | T4.4 Income statement, EBITDA (Adjusted); calculation K7 | 2026-06-30 | USD | US$m | 8.19 | Calculated | Tier 2b | Issuer-adjusted EBITDA from the releases; carrying-value debt; twelve months to 2026-06-30, before post-quarter events |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 5,486 | Net debt data, Net debt; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 | 1,162 | T4.4 Income statement, EBITDA (Adjusted); EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2 | FY2024 / 2024-12-31 | USD | US$m | 4.72 | Calculated | Tier 2b | Issuer-adjusted EBITDA from the releases; carrying-value debt |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 5,376 | Net debt data, Net debt; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 | 670 | T4.4 Income statement, EBITDA (Adjusted); EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2 | FY2025 / 2025-12-31 | USD | US$m | 8.02 | Calculated | Tier 2b | Issuer-adjusted EBITDA from the releases; carrying-value debt |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 5,632 | Net debt data, Net debt; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 | 709 | T4.4 Income statement, EBITDA (Adjusted); calculation K7 | 2026-06-30 | USD | US$m | 7.94 | Calculated | Tier 2b | Issuer-adjusted EBITDA from the releases; carrying-value debt; twelve months to 2026-06-30, before post-quarter events |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,162 | T4.4 Income statement, EBITDA (Adjusted); EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2 | 394 | T4.5 Cash flow statement, Cash Interest Paid; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94 | FY2024 / 2024-12-31 | USD | US$m | 2.95 | Calculated | Tier 2b | Cash interest is the issuer's approximate interest paid |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 670 | T4.4 Income statement, EBITDA (Adjusted); EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2 | 393 | T4.5 Cash flow statement, Cash Interest Paid; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94 | FY2025 / 2025-12-31 | USD | US$m | 1.70 | Calculated | Tier 2b | Cash interest is the issuer's approximate interest paid |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 709 | T4.4 Income statement, EBITDA (Adjusted); calculation K7 | 385 | T4.5 Cash flow statement, Cash Interest Paid; calculation K8 | 2026-06-30 | USD | US$m | 1.84 | Calculated | Tier 2b | Cash interest is the issuer's approximate interest paid; twelve months to 2026-06-30, before post-quarter events |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 | 3,281 | Not supplied: the supplied releases print adjusted EBITDA for FY2025 and FY2024 only | US$m | Revenue as reported; the adjusted EBITDA column is the issuer-adjusted measure and is not printed for FY2023 in the supplied releases |
| FY2024 | 3,644 | 1,162 | US$m | Revenue as reported; adjusted EBITDA is the issuer-adjusted measure from the release; FY2024 was the election year |
| FY2025 | 3,095 | 670 | US$m | Revenue as reported; adjusted EBITDA is the issuer-adjusted measure from the release; FY2025 was the off-year of the political cycle |

All three rows are full fiscal years and the adjusted figure is issuer-defined, so it is not the derived reported EBITDA used in the ratios.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| 2028 first lien term loan | 1 | Yes | 739 | 1.10 | US$m | Principal at 2026-06-30; cumulative principal 739 over twelve-month derived reported EBITDA of 669 (calculation K35); obligor: Gray Media, Inc.; guarantors: substantially all subsidiaries; secured on substantially all assets except real estate |
| 2029 first lien notes | 1 | Yes | 1,125 | 2.79 | US$m | Principal at 2026-06-30; cumulative principal 1,864 over twelve-month derived reported EBITDA of 669 (calculation K35); obligor: Gray Media, Inc.; guarantors: substantially all subsidiaries; secured on substantially all assets except real estate |
| 2033 first lien notes | 1 | Yes | 845 | 4.05 | US$m | Principal at 2026-06-30; cumulative principal 2,709 over twelve-month derived reported EBITDA of 669 (calculation K35); obligor: Gray Media, Inc.; guarantors: substantially all subsidiaries; secured on substantially all assets except real estate |
| 2032 second lien notes | 2 | Yes | 1,150 | 5.77 | US$m | Principal at 2026-06-30; cumulative principal 3,859 over twelve-month derived reported EBITDA of 669 (calculation K35); obligor: Gray Media, Inc.; guarantors: substantially all subsidiaries; secured on substantially all assets except real estate |
| 2030 senior unsecured notes | 3 | No | 790 | 6.95 | US$m | Principal at 2026-06-30; cumulative principal 4,649 over twelve-month derived reported EBITDA of 669 (calculation K35); obligor: Gray Media, Inc.; guarantors: substantially all subsidiaries; unsecured |
| 2031 senior unsecured notes | 3 | No | 1,218 | 8.77 | US$m | Principal at 2026-06-30; cumulative principal 5,867 over twelve-month derived reported EBITDA of 669 (calculation K35); obligor: Gray Media, Inc.; guarantors: substantially all subsidiaries; unsecured |

Rank is by lien priority, with all the notes ranking equally in right of payment, the stack is at principal so its total differs from the carrying-value leverage by the 59 of unamortized costs net of premium, and the undrawn revolver of 750 ranks with the first lien but is not shown.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2025 | 629 | US$m | Derived: operating income 392 plus depreciation 133 plus amortization 104 (calculation K3) |
| Impairment of goodwill, broadcast licenses and other intangible assets | 30 | US$m | Issuer add-back, non-cash impairment; classification other; realisation not stated |
| Non-cash stock-based compensation | 22 | US$m | Issuer add-back; classification share-based compensation; realisation not stated |
| Gain on disposal of assets, net | -11 | US$m | Issuer adjustment removing the gain; classification other; realisation not stated |
| EBITDA (Adjusted), FY2025 | 670 | US$m | Issuer-adjusted EBITDA from the release; the issuer's own reconciliation starts at net income and its other items sit below operating income (calculation K33) |

The bridge reconciles the derived measure to the issuer's, and the issuer states no cost-saving, run-rate or synergy add-back in this adjusted EBITDA.

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| First closings of the American Spirit Media and WHPM station acquisitions, 43 in cash | 2026-07-01 | 43 | 5,675 | 8.48 | US$m | Cash paid at the first closings: 40 of the 70 raised in additional 2033 first lien notes at the quarter end (already in cash at 2026-06-30) and 3 from cash on hand (calculation K31); net debt rises by the cash paid; the acquired stations' EBITDA and the second closings (10 and 1 still to pay) are not reflected; source: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 25; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 5 |
| Repurchase of 100 of 2029 first lien notes and 20 of 2031 notes at par | 2026-07-21 | Not supplied: the accrued interest paid on the repurchase is not stated | Not supplied: the accrued interest paid on the repurchase is not stated | Not supplied: the accrued interest paid on the repurchase is not stated | US$m | Principal of 120 retired at par plus accrued interest, funded from cash and revolver borrowings of amounts not stated, so gross debt falls by 120 while cash plus revolver borrowings rise by the same principal and net debt moves only by the accrued interest; source: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 25; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 4 |

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-06-30 | Unit | Basis |
|---|---|---|---|---|---|
| Revenue | 3,644 | 3,095 | 3,148 | US$m | Reported; the twelve-month figure is calculation K9 |
| EBITDA (Reported) | 1,120 | 629 | 669 | US$m | Calculated from operating income plus depreciation and amortization |
| EBITDA (Adjusted) | 1,162 | 670 | 709 | US$m | Issuer-adjusted, from the releases |
| Net cash provided by operating activities | 751 | 289 | 250 | US$m | Reported; the twelve-month figure is calculation K10 |
| Purchases of property and equipment | 143 | 108 | 104 | US$m | Reported; the twelve-month figure is calculation K11 |
| Free cash flow (operating cash flow less purchases of property and equipment) | 608 | 181 | 146 | US$m | Calculated, before dividends and acquisitions (calculation K27) |
| Cash interest paid | 394 | 393 | 385 | US$m | Reported approximate interest payments; the twelve-month figure is calculation K8 |
| Total debt (carrying value) | 5,621 | 5,744 | 5,808 | US$m | Reported balance-sheet carrying value |
| Cash | 135 | 368 | 176 | US$m | Reported |
| Net debt | 5,486 | 5,376 | 5,632 | US$m | Calculated: total debt less cash |
| Cash plus undrawn revolver availability | 809 | 1,113 | 921 | US$m | Calculated (calculation K30) |
| Total debt / EBITDA (Reported) | 5.02 | 9.13 | 8.68 | x | Calculated |
| Net debt / EBITDA (Reported) | 4.90 | 8.55 | 8.42 | x | Calculated |
| EBITDA (Reported) / cash interest | 2.84 | 1.60 | 1.74 | x | Calculated |
| Total debt / EBITDA (Adjusted) | 4.84 | 8.57 | 8.19 | x | Calculated on issuer-adjusted EBITDA |
| Net debt / EBITDA (Adjusted) | 4.72 | 8.02 | 7.94 | x | Calculated on issuer-adjusted EBITDA |
| EBITDA (Adjusted) / cash interest | 2.95 | 1.70 | 1.84 | x | Calculated on issuer-adjusted EBITDA |
| Issuer covenant: Consolidated Total Net Leverage Ratio (maximum permitted incurrence 7.00x) | Not supplied: the FY2024 annual report is not supplied | 5.80 | 5.73 | x | Reported; issuer-defined on an eight-quarter average denominator (994 at 2026-06-30, 939 at 2025-12-31); not comparable with the derived ratios |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | H1 2025 | H1 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|
| Revenue mix | Core advertising | 1,514 | 1,490 | 1,452 | 705 | 709 | Down from FY2023 to FY2025 (1,514 to 1,452); up in the first half (705 to 709) | Macroeconomic softness in 2025 per the 10-K; source: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 49; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 11 |
| Revenue mix | Political advertising | 79 | 497 | 42 | 22 | 113 | Cyclical: election years FY2024 and 2026 high, FY2023 and FY2025 low | Political revenue is the swing factor in EBITDA; source: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 49; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 11 |
| Revenue mix | Retransmission consent | 1,532 | 1,482 | 1,429 | 748 | 698 | Down in every period shown (1,532 to 1,429; 748 to 698) | Subscriber declines, one station's change of affiliation and a distribution dispute resolved in the second quarter of 2026; source: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 49; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 11, 29 |
| Revenue mix | Other | 70 | 70 | 65 | 34 | 32 | Down slightly (70 to 65; 34 to 32) | Tower rentals and miscellaneous; source: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 49; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 11 |
| Revenue mix | Production companies | 86 | 105 | 107 | 45 | 55 | Up (86 to 107; 45 to 55) | Sports production contracts; source: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 49; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 11, 29 |
| Cost | Network affiliation fees | 937 | 932 | 882 | 467 | 406 | Down (937 to 882; 467 to 406) | Lower fees after new affiliation agreements and one independent station; source: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 49-50, 113-114; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 23 |
| Cost | Net retransmission revenue (retransmission consent revenue less network affiliation fees) | 595 | 550 | 547 | 281 | 292 | Down across the years (595 to 547); up in the first half (281 to 292) | Issuer-defined measure; FY2023 is calculated (calculation K34); source: EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2; EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 3-4 |
| Cash | Purchases of property and equipment | 348 | 143 | 108 | 40 | 36 | Down (348 to 108; 40 to 36) | FY2023 includes the Assembly Atlanta build; source: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 75; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| Operating (period-end) | Full-power television markets served | Not supplied: the supplied sources do not print the FY2023 count | Not supplied: the supplied sources do not print the FY2024 count | 114 | Not supplied: the supplied sources print no count at 2025-06-30 | 117 | Up (114 to 117) | Perimeter changed through acquisitions and a swap; the first-quarter 10-Q printed 120, before the station swap; source: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 4; 10-Q_2026-03-31_gtn20260331_10q.htm.jsonl, page 6; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 7 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA is operating income plus depreciation and amortization, unadjusted | Adjusted EBITDA adds back stock-based compensation, impairment and the disposal result | Releases against derived figure; EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 11; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 12 | FY2025, H1 2025, H1 2026, LTM | Moderate: 41, 32, 31 and 40 (USD millions) of add-backs, about 6% of LTM derived EBITDA (calculation K33) | Financial foundation; Fundamental credit | Both are shown, labelled, never mixed in one table; ratios on both are in the register |
| Leverage | Total or net debt at carrying value over derived reported EBITDA of the period | Consolidated Total Net Leverage Ratio: principal plus letters of credit less cash over an eight-quarter average denominator that adds acquisition and synergy adjustments | Q2 10-Q covenant table against the derived ratio; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 37 | FY2025, 2026-06-30 | High: 5.73x issuer against 8.42x derived net leverage at 2026-06-30; denominators 994 against 669 (calculation K32) | Financial foundation; Fundamental credit; Legal & covenants | Use the derived ratio for credit analysis and the issuer ratio only as the issuer's covenant statistic |
| Total debt | Carrying value, with principal logged separately | Principal in the release summary and the covenant tables | Debt note against release summary; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 92; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 4 | FY2024, FY2025, 2026-06-30 | Low: principal 5,867 against carrying 5,808, a difference of 59 at 2026-06-30 (calculation K18) | Financial foundation | Carrying value is the leverage numerator; principal is shown in the stack and the ladder |
| Net debt | Carrying-value debt less cash | The release's principal less cash (5,691 at 2026-06-30) | Release debt summary against Net debt data; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 4 | 2026-06-30 | Low: 5,691 against 5,632, the same 59 | Financial foundation | Both are stated; the carrying-value net debt feeds the ratios |
| Cash interest | Cash interest paid, not the expense | Interest expense of 474 in FY2025 includes amortization of deferred loan costs of 16 and accruals; interest payments are approximate | Income statement against debt note; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 73-74, 94 | All periods | Low to moderate: expense 474 against paid 393 in FY2025 | Financial foundation | The cover ratio uses cash paid; expense is shown in T4.4 |
| Debt-like funding | Debt is every balance-sheet debt line | The securitization of 400 sold receivables is derecognised and the Series A preferred stock of 600 is temporary equity | Release debt summary excludes both; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 4; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 8, 18 | FY2025, 2026-06-30 | Moderate: 1,000 together against total debt of 5,808 (calculation K36) | Financial foundation; Fundamental credit | Both are excluded from Total Debt and flagged here as debt-like claims |
| Covenant table consistency | Principal by instrument adds to the debt note total | First-quarter 2026 covenant table prints secured principal 3,805 and total 5,809 | Q1 10-Q covenant table against its debt note; 10-Q_2026-03-31_gtn20260331_10q.htm.jsonl, pages 12, 30 | 2026-03-31 | Low: differences of 6 and 1 (calculation K37) | Financial foundation | Both figures are carried as printed and not reconciled |
| Term loan name | One instrument has one name | The 10 term loan is the 2024 term loan in the 10-K and the first-quarter release and the 2026 first lien term loan in the 10-Qs | 10-K against 10-Qs; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 91; 10-Q_2026-03-31_gtn20260331_10q.htm.jsonl, page 12; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15 | 2025-12-31, 2026-03-31 | Low: same amount, repaid after the first quarter | Financial foundation | Both names are noted; the amount is the same |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and interest cover on carrying-value debt | Ready with Limitations | EBITDA is derived; adjusted EBITDA exists only in the releases; the latest balance sheet is 2026-06-30 | Add the third-quarter 2026 report and release when available; source: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15, 33-37 |
| Liquidity at the latest balance-sheet date | Ready with Limitations | Revolver borrowing after 2026-06-30 is not quantified; the securitization is fully drawn | Obtain the revolver balance after the July repurchase; source: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 25, 34 |
| Debt maturity ladder and capital structure | Ready | None beyond principal against carrying value | None; source: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 15-16 |
| Cash flow quality and free cash flow | Ready with Limitations | Cash interest is an approximate note figure; several lines are not printed in the six-month statements | None; source: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76, 94; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 5, 16 |
| Covenant analysis | Not Ready | Issuer-calculated ratios only; no executed credit agreement or indenture supplied | Supply the executed documents before any covenant capacity work; source: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 119-120 |

### Analysis by dimension

Leverage is high and swings with the political cycle rather than with debt paydown. Total debt was 5.02x derived reported EBITDA at FY2024, 9.13x at FY2025 and 8.68x on the twelve months to 2026-06-30, while carrying-value debt moved only from USD 5,621 million to USD 5,744 million and USD 5,808 million. The swing came from EBITDA, which fell from USD 1,120 million to USD 629 million as political advertising revenue dropped from USD 497 million to USD 42 million, and recovered to USD 669 million on the twelve months to 2026-06-30 with USD 113 million of political revenue in the first half of 2026. A large share of broadcasting operating expenses is fixed, so lost political revenue falls straight through to EBITDA, and creditors should expect year-end leverage to look better or worse by several turns depending on the political calendar.
Basis: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 48-49; calculation K21; calculation K2; calculation K3; calculation K6

Interest cover is thin and depends on the same cycle. Derived reported EBITDA covered cash interest paid 2.84x in FY2024, 1.60x in FY2025 and 1.74x on the twelve months to 2026-06-30, and 1.70x and 1.84x on issuer-adjusted EBITDA for FY2025 and the twelve months. Cash interest paid of about USD 393 million in FY2025 absorbed about 62% of derived EBITDA before USD 85 million of preferred and common dividends and USD 108 million of purchases of property and equipment. Operating cash flow of USD 289 million left only USD 96 million after those uses, so the preferred dividend of USD 52 million and the capital programme are funded, but with little room for acquisitions or debt reduction in an off-year.
Basis: 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; calculation K23; calculation K24; calculation K25; calculation K26; calculation K28

Cash flow quality weakened and the receivables securitization behaves as debt-like funding. Operating cash flow fell from USD 751 million in FY2024 to USD 289 million in FY2025 and was USD 124 million in the first half of 2026 against USD 163 million a year earlier, with working capital contributing USD 114 million less than in the first half of 2025. The securitization had USD 400 million of receivables sold at both year-end and quarter-end, derecognised as a true sale and so absent from total debt, while the receivables kept as collateral fell from USD 344 million to USD 125 million. The facility therefore adds no further liquidity and its USD 400 million is a claim on cash flow that senior creditors should weigh beside the USD 600 million of redeemable preferred stock, together USD 1,000 million outside the debt figures.
Basis: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 8, 34; 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 61, 75-76, 78; calculation K36

Liquidity is adequate for the next twelve months on the issuer's own figures but the capital structure has a 2028 wall. Cash of USD 176 million and USD 745 million of revolver availability gave USD 921 million at 2026-06-30 against about USD 465 million of interest due over the next twelve months and no principal due before 2028, after cash fell by USD 192 million in the first half of 2026 on USD 264 million of station acquisitions. The 2028 term loan of USD 739 million and the revolver commitments both end in 2028, and USD 1,125 million of 2029 first lien notes follow, so USD 1,864 million of term loan and first lien notes comes due within two years of each other. The post-quarter acquisitions and the bond repurchase were paid from cash and revolver borrowings of amounts the issuer does not state, so liquidity after 2026-06-30 is not established.
Basis: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 5, 15-16, 25, 34; calculation K30; calculation K20; calculation K35

The issuer's covenant ratio is not a substitute for these measures. The consolidated total net leverage ratio of 5.73x at 2026-06-30 divides USD 5,696 million of net debt by a USD 994 million denominator that averages eight quarters, whose eight-quarter total of USD 1,987 million includes USD 144 million of adjustments for acquired and divested stations, financings and expected synergies, against USD 669 million of derived twelve-month EBITDA, and the first lien test of 2.55x is far below its 4.25x limit applying when the revolver is drawn. This is the strongest contrary evidence to the high-leverage reading: if political-year EBITDA in the second half of 2026 restores the twelve-month figure towards the covenant denominator, the gap would narrow, but the filings give no basis to treat the adjustments as realised.
Basis: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 35-37; EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 12-13; calculation K32

Data-quality and definition risks are bounded but real. The filings print no EBITDA, so reported EBITDA is derived and adjusted EBITDA exists only in the releases, with FY2023 not printed; the third quarter of 2025 has no release in the supplied set, so the twelve-month figure is built from full-year and half-year columns. Cash interest is an approximate note figure, several statement lines print dashes or are absent from the six-month statements, and the first-quarter 2026 covenant table differs from its own debt note by USD 6 million of secured principal and USD 1 million of total principal. None of these changes the direction of the findings.
Basis: 10-Q_2026-03-31_gtn20260331_10q.htm.jsonl, pages 12, 30; EX-99.1_2026-02-26_ex_924265.htm.jsonl, pages 2, 11; calculation K37; calculation K33

Subsequent events are flagged and kept out of the period figures. The first closings of the American Spirit Media and WHPM acquisitions paid USD 43 million in cash after the quarter end, which raises net debt to USD 5,675 million and net leverage to 8.48x before any acquired EBITDA, and a repurchase of USD 120 million of 2029 and 2031 notes at par left net debt unchanged except for accrued interest not stated. A new authorisation of up to USD 250 million for debt repurchases and a pension plan termination awaiting regulatory approval do not change net debt at the balance-sheet date.
Basis: 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 25-26; EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 4-5; calculation K31

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 9 |
| Calculated | 7 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 3 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 6 |

## Calculations

Each calculation uses only figures printed in the supplied documents, in USD millions unless a ratio is shown; none is a figure the issuer prints.

| Calculation ID | Quantity | Inputs and working | Result | Source |
|---|---|---|---|---|
| K1 | EBITDA (Reported), FY2023 | Operating income 383 + depreciation 145 + amortization 194 | 722 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73 |
| K2 | EBITDA (Reported), FY2024 | 851 + 144 + 125 | 1,120 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73 |
| K3 | EBITDA (Reported), FY2025 | 392 + 133 + 104 | 629 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73 |
| K4 | EBITDA (Reported), H1 2025 | 174 + 66 + 57 | 297 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| K5 | EBITDA (Reported), H1 2026 | 217 + 67 + 53 | 337 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| K6 | LTM EBITDA (Reported) to 2026-06-30 | FY2025 629 + H1 2026 337 - H1 2025 297 | 669 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3 |
| K7 | LTM EBITDA (Adjusted) to 2026-06-30 | FY2025 670 + H1 2026 368 - H1 2025 329 | 709 | EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2; EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 3-4 |
| K8 | LTM cash interest paid to 2026-06-30 | FY2025 393 + H1 2026 222 - H1 2025 230 | 385 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 16 |
| K9 | LTM revenue to 2026-06-30 | FY2025 3,095 + H1 2026 1,607 - H1 2025 1,554; cross-check of the four quarters 749 + 792 + 768 + 839 | 3,148 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 73; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 3; 10-Q_2025-09-30_gtn20250930_10q.htm.jsonl, page 3; EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2; EX-99.1_2026-05-07_ex_956963.htm.jsonl, page 2 |
| K10 | LTM operating cash flow to 2026-06-30 | 289 + 124 - 163 | 250 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| K11 | LTM purchases of property and equipment to 2026-06-30 | 108 + 36 - 40 | 104 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 75; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| K12 | Total debt at 2024-12-31 | Long-term debt less current portion and financing costs 5,601 + current portion 20 | 5,621 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 53, 72-73 |
| K13 | Total debt at 2025-12-31 | 5,742 + 2 | 5,744 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 |
| K14 | Total debt at 2026-06-30 | 5,808 + nil current portion | 5,808 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| K15 | Net debt at 2024-12-31 | 5,621 - cash 135 | 5,486 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 |
| K16 | Net debt at 2025-12-31 | 5,744 - cash 368 | 5,376 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 72-73 |
| K17 | Net debt at 2026-06-30 | 5,808 - cash 176 | 5,632 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 2-3 |
| K18 | Reconciling items at 2026-06-30 | Unamortized costs -11 - 7 - 6 - 9 - 15 - 15 plus premium 4; principal 5,867 + (-59) = carrying 5,808 | -59 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15 |
| K19 | Principal listed by instrument at 2026-06-30 | 739 + 1,125 + 845 + 1,150 + 790 + 1,218 | 5,867 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15 |
| K20 | Sum of the maturity ladder | 0 + 0 + 739 + 1,125 + 790 + 1,218 + 1,150 + 845 | 5,867 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 16 |
| K21 | Total debt / EBITDA (Reported) | 5,621/1,120 = 5.02; 5,744/629 = 9.13; 5,808/669 = 8.68 | 5.02, 9.13 and 8.68 times | Net debt data; T4.4 |
| K22 | Net debt / EBITDA (Reported) | 5,486/1,120 = 4.90; 5,376/629 = 8.55; 5,632/669 = 8.42 | 4.90, 8.55 and 8.42 times | Net debt data; T4.4 |
| K23 | EBITDA (Reported) / cash interest | 1,120/394 = 2.84; 629/393 = 1.60; 669/385 = 1.74 | 2.84, 1.60 and 1.74 times | T4.4; T4.5 |
| K24 | Adjusted-EBITDA ratios | Total debt 5,621/1,162 = 4.84, 5,744/670 = 8.57, 5,808/709 = 8.19; net debt 5,486/1,162 = 4.72, 5,376/670 = 8.02, 5,632/709 = 7.94; cover 1,162/394 = 2.95, 670/393 = 1.70, 709/385 = 1.84 | As listed, in times | EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 2; EX-99.1_2026-08-07_ex_998938.htm.jsonl, pages 3-4 |
| K25 | Interest as a share of derived EBITDA, FY2025 | 393 / 629 | 62% | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 94 |
| K26 | Dividends paid, FY2025 | Common 33 + preferred 52 | 85 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76 |
| K27 | Free cash flow (operating cash flow less purchases of property and equipment) | 751 - 143 = 608; 289 - 108 = 181; 250 - 104 = 146 | 608, 181 and 146 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 5 |
| K28 | Cash after capital expenditure and dividends, FY2025 | 181 - 85 | 96 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76 |
| K29 | Operating cash flow decline FY2024 to FY2025 | 751 - 289 | 462 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 75-76 |
| K30 | Liquidity: cash plus undrawn revolver availability | 135 + 674 = 809; 368 + 745 = 1,113; 176 + 745 = 921 | 809, 1,113 and 921 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, page 53; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 34; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 5 |
| K31 | Pro forma net debt after the first closings | 5,632 + 43 = 5,675; 5,675 / 669 = 8.48 | 5,675 and 8.48 times | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 25; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 5 |
| K32 | Issuer covenant ratio against the derived ratio | Issuer: net debt 5,696 / denominator 994 = 5.73; derived: 5,632 / 669 = 8.42; denominators differ by 994 - 669 = 325 | 5.73, 8.42 and 325 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 37 |
| K33 | Adjusted EBITDA less derived reported EBITDA | FY2025 670 - 629 = 41 (22 + 30 - 11); H1 2026 368 - 337 = 31 (11 + 20); H1 2025 329 - 297 = 32 (12 + 28 - 8); LTM 709 - 669 = 40; 40 / 669 = 5.98% | 41, 31, 32 and 40 | EX-99.1_2026-02-26_ex_924265.htm.jsonl, page 11; EX-99.1_2026-08-07_ex_998938.htm.jsonl, page 12 |
| K34 | Net retransmission revenue, FY2023 | Retransmission consent 1,532 - network affiliation fees 937; FY2024 1,482 - 932 = 550; FY2025 1,429 - 882 = 547; H1 2025 748 - 467 = 281; H1 2026 698 - 406 = 292 | 595, 550, 547, 281 and 292 | 10-K_2025-12-31_gtn20251231_10k.htm.jsonl, pages 49, 113-114; 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 11, 23 |
| K35 | Cumulative principal over LTM derived EBITDA of 669 | 739 = 1.10; 1,864 = 2.79; 2,709 = 4.05; 3,859 = 5.77; 4,649 = 6.95; 5,867 = 8.77 (each divided by 669) | As listed, in times | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, page 15 |
| K36 | Debt-like claims outside total debt at 2026-06-30 | Sold receivables 400 + preferred stock 600 | 1,000 | 10-Q_2026-06-30_gtn20260630_10q.htm.jsonl, pages 8, 18 |
| K37 | First-quarter 2026 covenant table against its debt note | First lien 739 + 10 + 1,125 + 775 = 2,649; plus second lien 1,150 = 3,799; printed 3,805, difference 6; note total 5,808 against printed 5,809, difference 1 | 6 and 1 | 10-Q_2026-03-31_gtn20260331_10q.htm.jsonl, pages 12, 30 |

## Gaps

- Medium: no document covers the period after 2026-08-07 or the quarter ended 2026-09-30, so every balance-sheet figure is dated 2026-06-30, the revolver borrowing used to part-fund the post-quarter acquisitions and bond repurchase is not quantified, and liquidity after the quarter end is not established; the third-quarter 2026 report and release would close it.
- Low: the filings print no EBITDA, so reported EBITDA is derived from operating income and depreciation and amortization for every period and is a house measure, not an issuer-stated figure; adjusted EBITDA is not printed for FY2023 in the supplied releases, so FY2023 adjusted EBITDA and its ratios are not supplied; and the third-quarter 2025 release is not supplied, so the twelve-month figures are built from full-year and half-year columns; the releases for FY2023 and for the third quarter of 2025 would close these.
- Low: the supplied statements print dashes for several lines (impairment in FY2024 and the first half of 2026, the extinguishment result in the first half of 2026, the deemed contribution in the first half of 2025 and some cash flow lines), and many lines print in the annual statements but not the six-month statements or the reverse; the method reads a dash as not supplied rather than zero, and no checked total is affected because each statement adds without them; the full-power market count is printed only at the end of 2025 and at the 2026 quarter ends, so earlier periods are not supplied there.
- Low: cash interest paid is an approximate note figure because the cash flow statement prints none, and carrying value by instrument is not printed, only principal and unamortized costs, so the instrument table states principal plus one financing cost adjustment, and no rank is stated for the securitization; the issuer's own cash flow disclosure and instrument breakdown would close these.
- Low: the accrued interest paid on the post-quarter repurchase of 2029 and 2031 notes is not stated, so its effect on pro forma net debt and net leverage for that event is not supplied; the issuer's next report would close it.
- Low: the first-quarter 2026 covenant table prints secured principal 3,805 and total principal 5,809 against 3,799 and 5,808 in its own debt note, a difference of USD 6 million and USD 1 million the filing does not explain, and the same USD 10 million term loan carries two names across the filings; both are carried as printed and not reconciled.
- Low: leverage on the issuer's covenant definition cannot be reproduced because the executed credit agreement is not supplied, the FY2024 covenant table is not in the supplied set so that ratio is not supplied for FY2024, and the FY2023 balance sheet is not printed beyond total assets of USD 10,640 million so no FY2023 net debt or ratio is supplied; the executed agreement and the earlier annual report would close these.

## Next module

The orchestrator selects the next module.
