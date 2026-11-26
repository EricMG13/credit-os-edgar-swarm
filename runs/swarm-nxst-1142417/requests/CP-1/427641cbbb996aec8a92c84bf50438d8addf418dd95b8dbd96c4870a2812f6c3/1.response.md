## Request

Financial foundation for Nexstar Media Group, Inc. as of 2026-11-18 under the credit snapshot pathway, built from the 2024 and 2025 annual reports, the 2026 quarterly reports and the 2026 earnings releases. Scope is consolidated reported statements for FY2024, FY2025 and the nine months of 2025 and 2026, carrying-value debt, liquidity, the last twelve months to 2026-09-30 and subsequent events to the information cutoff.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_nxst-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-26 | 15c23adc91659586e1de118e8fa5a681e03fd060740ba126f529b554f92119e4 | Audited FY2025 and FY2024 statements, debt note, covenant text, maturities and lease detail. |
| 10-K_2024-12-31_nxst-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-27 | acb4cca6d026cbbf8e00c0cc3b30a36e70ca1a0e6e54322d064c4c2ea33a9e4f | Cross-check of the FY2024 balance sheet and the unused revolving commitments at 2024-12-31. |
| 10-Q_2026-09-30_nxst-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-05 | 0f916cde390a4f7e9590fe4e1caa979f945662ffe9776e6a4f5e28e698c1f848 | Nine-month 2026 and 2025 statements, 2026-09-30 balance sheet, debt by instrument, fair value table, maturities, segments, subsequent events. |
| EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-11-05 | 427cafb9c7bb3cad4f7acdaee61e23bba96cbaaa5a0b6c9cbdb388cc9012aea4 | Issuer Adjusted EBITDA reconciliation, secured and unsecured debt split, issuer leverage ratios, repayments after the quarter end. |
| EX-99.1_2026-05-07_nxst-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-07 | 5ea5febc4a329af445017444ffd4527bec6dfdecc4134cdae075b3b045fb7cee | Issuer first-quarter leverage ratio and its definition, for the definition conflict register. |
| EX-99.1_2026-08-06_nxst-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-08-06 | c2a3391659e0efbd2efa89eaf120e9062707d27c1e03dd9d4d38c11f02a8b52d | Issuer second-quarter leverage ratio and the change in its definition. |
| 10-Q_2026-03-31_nxst-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | c399e89f355fffbbae893da6fb416ea431e994477b3abaf453bd3e139b073d75 | Inventory only; quarterly detail is left to other analyses and no figure here is taken from it. |
| 10-Q_2026-06-30_nxst-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-07 | 568aa8cd49ec2e6c8179ddceaab40fb9441c5fe3e156daf70d344b10b4003ad6 | Inventory only; quarterly detail is left to other analyses and no figure here is taken from it. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 7f921b69af9f4a05e9083f1937385b35f0935742ba54d1be8257d8dcb6865c99 | Accepted source inventory, reporting perimeter, entity and issuer map and gap list; no financial balance or ratio is imported from it. |

No external sources were used. Dates above are the signature or release dates the documents state.

## Findings

### Bottom line

The TEGNA acquisition lifted carrying debt from USD 6,333 million at year-end 2025 to USD 11,409 million, leaving net leverage at 6.86x on reported last-twelve-month EBITDA, so creditors depend on a full year of TEGNA earnings and continued repayment.
Basis: 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 21; calculation C01; calculation C05

The issuer's own covenant ratios are far lower, at 3.03x first lien and 4.04x total net, because they count TEGNA for a full period and use a different EBITDA; this module cannot reproduce that basis. Adjusted EBITDA is stated only for interim periods, and FY2025 reported EBITDA carries a USD 381 million impairment, so every leverage figure here is a reported-basis ceiling, not a forecast. The dividend payable on 2026-11-27 would lift net leverage to 6.90x.
Basis: EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 4; EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8; calculation C09; calculation C11; calculation C12

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_nxst-20251231.htm.jsonl | Annual Form 10-K, audited | FY2025 with FY2024 and FY2023 comparatives | USD | millions, except per-share and share amounts | Nexstar Media Group, Inc. consolidated, including consolidated variable interest entities | US GAAP | Tier 1 audited statements | Annual statements, debt note, covenant, leases | Pre-acquisition; describes the TEGNA merger as pending; no Adjusted EBITDA reconciliation printed. |
| 10-K_2024-12-31_nxst-20241231.htm.jsonl | Annual Form 10-K, audited | FY2024 with FY2023 and FY2022 comparatives | USD | millions, except per-share and share amounts | Nexstar Media Group, Inc. consolidated, including consolidated variable interest entities | US GAAP | Tier 1 audited statements | Cross-check of FY2024 comparatives and unused revolver | Superseded by the FY2025 report for the latest year-end; FY2024 comparatives agree with it. |
| 10-Q_2026-09-30_nxst-20260930.htm.jsonl | Quarterly Form 10-Q, unaudited | Three and nine months ended 2026-09-30 | USD | millions, except per-share and share amounts | Nexstar Media Group, Inc. consolidated, including consolidated variable interest entities | US GAAP | Tier 2b unaudited interim | Latest statements, debt by instrument, maturities, subsequent events | TEGNA consolidated from its closing date only; purchase price allocation preliminary. |
| EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl | Earnings release, Exhibit 99.1 | Three and nine months ended 2026-09-30 | USD | millions, except per-share and share amounts | Nexstar Media Group, Inc. consolidated, including consolidated variable interest entities | US GAAP | Tier 2b unaudited issuer release; non-GAAP measures | Adjusted EBITDA reconciliation, debt classes, issuer leverage | Issuer-defined non-GAAP measures; the quarterly report controls where figures differ. |
| EX-99.1_2026-05-07_nxst-ex99_1.htm.jsonl | Earnings release, Exhibit 99.1 | Three months ended 2026-03-31 | USD | millions, except per-share and share amounts | Nexstar Media Group, Inc. consolidated, including consolidated variable interest entities | US GAAP | Tier 2b unaudited issuer release | Issuer first-quarter leverage definition | Leverage ratio included run-rate savings and expected synergies. |
| EX-99.1_2026-08-06_nxst-ex99_1.htm.jsonl | Earnings release, Exhibit 99.1 | Three and six months ended 2026-06-30 | USD | millions, except per-share and share amounts | Nexstar Media Group, Inc. consolidated, including consolidated variable interest entities | US GAAP | Tier 2b unaudited issuer release | Issuer second-quarter leverage definition | Leverage ratio excludes expected synergies from the second quarter. |
| 10-Q_2026-03-31_nxst-20260331.htm.jsonl | Quarterly Form 10-Q, unaudited | Three months ended 2026-03-31 | USD | millions, except per-share and share amounts | Nexstar Media Group, Inc. consolidated, including consolidated variable interest entities | US GAAP | Tier 2b unaudited interim | Inventory only | No figure taken from it. |
| 10-Q_2026-06-30_nxst-20260630.htm.jsonl | Quarterly Form 10-Q, unaudited | Three and six months ended 2026-06-30 | USD | millions, except per-share and share amounts | Nexstar Media Group, Inc. consolidated, including consolidated variable interest entities | US GAAP | Tier 2b unaudited interim | Inventory only | No figure taken from it. |

The documents are sufficient for income statement, cash flow statement, balance sheet and debt analysis, but they do not state an annual Adjusted EBITDA and they omit the executed debt documents.
Basis: 10-K_2025-12-31_nxst-20251231.htm.jsonl, pages 83–85; EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Nexstar Media Group, Inc. | Reporting registrant and parent; co-obligor of the assumed 2027 notes | December 31 | USD | millions | Consolidated subsidiaries and consolidated variable interest entities | US GAAP | FY2024; FY2025; 9M 2025; 9M 2026 |
| Nexstar Media Inc. | Operating subsidiary; borrower under the Nexstar credit agreement and issuer of the 4.75% notes due 2028, the 6.50% secured notes due 2033 and the 7.25% notes due 2034 | December 31 | USD | millions | Debt-specific obligor; not a separate financial statement set | Filing descriptions only | Debt at 2026-09-30 |
| Mission Broadcasting, Inc. | Consolidated variable interest entity; borrower under the Mission credit agreement; guarantor of most notes | December 31 | USD | millions | Consolidated into Nexstar; its assets are not available to settle Nexstar obligations | US GAAP | FY2024; FY2025; 9M 2026 |
| TEGNA Inc. | Wholly owned subsidiary since its acquisition; issuer of the 5.00% notes due 2029 | December 31 | USD | millions | Consolidated only from the closing date | US GAAP | 9M 2026 from the closing date |
| Belo Corp. | Issuer of the 7.75% and 7.25% notes due 2027, with TEGNA and Nexstar Media Group, Inc. as co-obligors | December 31 | USD | millions | Debt-specific obligor | Filing descriptions only | Debt at 2026-09-30 |
| The CW Network, LLC | 82.0% owned, consolidated; unrestricted subsidiary excluded from the covenant calculation and the note guarantees | December 31 | USD | millions | Consolidated in the statements; excluded from covenant and guarantee perimeters | US GAAP | FY2024; FY2025; 9M 2026 |

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

Balance-sheet observations are instants at the period end, not flows beginning on the start date. The 2025 balance sheet at the third quarter is not supplied, only its closing cash. Subsequent events after 2026-09-30: the issuer repaid USD 400 million of senior secured facilities on 2026-10-30 and USD 125 million on 2026-11-05, and declared a quarterly dividend on 2026-10-30 payable on 2026-11-27; none is blended into a period figure.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 51

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Reporting basis retained | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 | Presentation only | USD millions; US GAAP; consolidated including variable interest entities | USD millions; US GAAP; consolidated including variable interest entities | No currency conversion, perimeter adjustment or house earnings add-back | All periods |
| EBITDA (Reported) derived | calculation C02 | Calculated | Issuer states no unadjusted EBITDA | Net income plus interest expense, net, plus income tax expense, plus depreciation and amortization of intangible assets | Method rule: reported EBITDA is derived from components when not stated; amortization of broadcast rights stays an operating cost | FY2024; FY2025; 9M 2025; 9M 2026 |
| Total Debt aggregation | calculation C01 | Calculated aggregation | Current portion of debt and debt net of current portion as printed | 6523; 6333; 11409 | Carrying value of every balance-sheet debt line; operating leases are separate lines and excluded | FY2024; FY2025; 9M 2026 |
| Last twelve months to 2026-09-30 | calculation C04 | Constructed period | Nine-month figures and FY2025 | FY2025 plus 9M 2026 less 9M 2025 | Latest full year plus current stub less prior-year stub | LTM 2026-09-30 |
| Deferred revenue re-split | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 2 | Presentation only | FY2025 other current liabilities 64 in the annual report | Deferred revenue 24 and other current liabilities 40 | The third-quarter report splits the December 2025 line; the annual report figure is kept in the Basis cell of the balance sheet | FY2025 |
| Cash flow sign convention | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 | Presentation only | Parenthesized source outflows | Negative numbers | Outflows negative; cash interest and cash taxes kept as positive amounts paid | All periods |
| Source dashes | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 | Presentation only | Dash printed in a statement line | Not supplied: source dash, not stated as zero | A dash is a missing value, not zero | Lines listed in the statements |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net revenue | 5407 | 4949 | 3660 | 5522 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Direct operating, excluding depreciation and amortization | 2221 | 2235 | 1670 | 2477 | USD millions | Reported expense magnitude | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Selling, general and administrative, excluding depreciation and amortization | 1088 | 1063 | 790 | 1204 | USD millions | Reported expense magnitude | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Amortization of broadcast rights | 324 | 314 | 239 | 246 | USD millions | Reported expense magnitude; programming cost, not part of D&A below | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Depreciation and amortization of intangible assets | 484 | 471 | 353 | 434 | USD millions | Reported expense magnitude; the D&A used in EBITDA (Reported) | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Goodwill and long-lived asset impairments | 24 | 14 | Not supplied: line not presented in the nine-month statement | Not supplied: line not presented in the nine-month statement | USD millions | Reported expense magnitude; no such line in the nine-month statements | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Other | -2 | 3 | 1 | 2 | USD millions | Reported; operating expense (income), sign as printed for expense | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Total operating expenses | 4139 | 4100 | 3053 | 4363 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Income from operations | 1268 | 849 | 607 | 1159 | USD millions | Reported EBIT | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Income from equity method investments, net (excluding impairment) | 70 | 30 | 24 | 7 | USD millions | Reported; mainly TV Food Network | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Impairment of an equity method investment | Not supplied: source dash, not stated as zero | -381 | Not supplied: line not presented in the nine-month statement | Not supplied: line not presented in the nine-month statement | USD millions | Reported; FY2025 fourth-quarter impairment of the TV Food Network investment; dash in FY2024 | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Interest expense, net | -444 | -379 | -288 | -495 | USD millions | Reported accrued net interest expense, not cash paid; gross interest and interest income are not separated | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Pension and other postretirement plans credit, net | 27 | 31 | 23 | 22 | USD millions | Reported non-operating credit | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Gain on disposal of an investment | 40 | Not supplied: source dash, not stated as zero | Not supplied: line not presented in the nine-month statement | Not supplied: line not presented in the nine-month statement | USD millions | Reported; FY2024 only | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Loss on extinguishment of debt | Not supplied: line not presented in the annual statement | Not supplied: line not presented in the annual statement | -5 | -21 | USD millions | Reported; shown as a separate line in the nine-month statements only | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 3 |
| Other income (expenses), net | -2 | Not supplied: source dash, not stated as zero | 3 | 1 | USD millions | Reported; annual line is Other expenses, net, the nine-month line is Other income, net | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Income before income taxes | 959 | 150 | 364 | 673 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Income tax expense | -276 | -67 | -111 | -150 | USD millions | Reported accrued tax, not cash paid | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Net income | 683 | 83 | 253 | 523 | USD millions | Reported, including noncontrolling interests | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Net loss attributable to noncontrolling interests | 39 | 26 | 22 | 16 | USD millions | Reported; added back to net income | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Net income attributable to Nexstar Media Group, Inc. | 722 | 109 | 275 | 539 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| EBITDA (Reported) | 1887 | 1000 | 1005 | 1602 | USD millions | Calculated: net income plus interest expense, net, plus income tax plus depreciation and amortization of intangible assets; includes the FY2025 equity method impairment | calculation C02 |
| EBITDA (Adjusted) | Not supplied: the annual report states no Adjusted EBITDA | Not supplied: the annual report states no Adjusted EBITDA | 1128 | 1860 | USD millions | Issuer-stated Adjusted EBITDA for the nine-month periods only; transaction costs, stock compensation, basis-difference amortization, debt extinguishment and pension credit are the add-backs | EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8 |
| Net income per share, basic | 21.73 | 3.04 | 8.66 | 16.86 | USD per share | Reported per-share amount, kept apart from monetary totals | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Net income per share, diluted | 21.41 | 3.00 | 8.57 | 16.62 | USD per share | Reported per-share amount, kept apart from monetary totals | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |

The annual columns are the audited 2025 annual report, which prints 2024 as its comparative year; the nine-month columns are the unaudited third-quarter report. The nine-month Adjusted EBITDA is the release reconciliation.
Basis: 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 3; EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 683 | 83 | 253 | 523 | USD millions | Reported operating reconciliation | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Amortization of broadcast rights | 324 | 314 | 239 | 246 | USD millions | Reported noncash adjustment | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Depreciation and amortization of intangible assets | 484 | 471 | 353 | 434 | USD millions | Reported noncash adjustment | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Goodwill and long-lived asset impairments | 24 | 14 | Not supplied: line not presented in the nine-month statement | Not supplied: line not presented in the nine-month statement | USD millions | Reported noncash adjustment | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Stock-based compensation expense | 78 | 78 | 58 | 80 | USD millions | Reported noncash adjustment | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Amortization of debt financing costs, debt discounts and premium | 12 | 8 | 6 | 8 | USD millions | Reported noncash adjustment | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Loss on extinguishment of debt | Not supplied: line not presented in the annual statement | Not supplied: line not presented in the annual statement | 5 | 21 | USD millions | Reported noncash adjustment; nine-month statements only | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5 |
| Gain on disposal of an investment | -40 | Not supplied: source dash, not stated as zero | Not supplied: line not presented in the nine-month statement | Not supplied: line not presented in the nine-month statement | USD millions | Reported operating reconciliation, not disposal proceeds | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Deferred income taxes | -33 | -129 | -20 | -56 | USD millions | Reported noncash adjustment | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Payments for broadcast rights | -325 | -343 | -249 | -246 | USD millions | Reported operating outflow | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Income from equity method investments, net (excluding impairment) | -70 | -30 | -24 | -7 | USD millions | Reported noncash adjustment | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Impairment of an equity method investment | Not supplied: source dash, not stated as zero | 381 | Not supplied: line not presented in the nine-month statement | Not supplied: line not presented in the nine-month statement | USD millions | Reported noncash adjustment | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Distribution from equity method investments, return on capital | 154 | 137 | 131 | 100 | USD millions | Reported operating inflow; TV Food Network distributions | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Change in accounts receivable | 68 | -47 | 15 | 128 | USD millions | Reported change, net of acquisitions | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Change in prepaid expenses and other current assets | -1 | -1 | 6 | 26 | USD millions | Reported change | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Change in other noncurrent assets | -10 | 6 | 3 | 8 | USD millions | Reported change | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Change in accounts payable | -98 | 4 | -30 | -12 | USD millions | Reported change | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Change in accrued expenses and other current liabilities | -26 | Not supplied: source dash, not stated as zero | 44 | 89 | USD millions | Reported change | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Change in income tax payable | 52 | -14 | -45 | -14 | USD millions | Reported change | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Change in other noncurrent liabilities | -36 | -54 | -50 | -62 | USD millions | Reported change | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Other operating items | 10 | 13 | 6 | 1 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Net Cash from Operating Activities | 1250 | 891 | 701 | 1267 | USD millions | Reported total; after cash interest and cash taxes | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Purchases of property and equipment | -145 | -148 | -94 | -113 | USD millions | Reported capital expenditure; total only, no maintenance or growth split | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Payments for acquisitions, net of cash acquired | Not supplied: source dash, not stated as zero | -22 | -22 | -3341 | USD millions | Reported; nine-month 2026 is the TEGNA equity payment net of cash acquired | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Proceeds from disposal of an investment | 40 | Not supplied: source dash, not stated as zero | Not supplied: line not presented in the nine-month statement | Not supplied: line not presented in the nine-month statement | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Proceeds received from life insurance policies | Not supplied: line not presented in the annual statement | Not supplied: line not presented in the annual statement | 1 | 55 | USD millions | Reported; nine-month statements only | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5 |
| Proceeds from disposal of property and equipment | Not supplied: line not presented in the annual statement | Not supplied: line not presented in the annual statement | 1 | 12 | USD millions | Reported; nine-month statements only | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5 |
| Other investing activities, net | 3 | -3 | -4 | -5 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Net Cash from Investing Activities | -102 | -173 | -118 | -3392 | USD millions | Reported total | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Proceeds from debt issuance, net of debt discounts | 55 | 3393 | 3393 | 11106 | USD millions | Reported gross issuance, including revolver and refinancing flows | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Repayments of long-term debt | -382 | -3595 | -3568 | -8498 | USD millions | Reported gross repayments, including revolver and refinancing flows | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Payments for debt financing costs | Not supplied: line not presented in the annual statement | Not supplied: line not presented in the annual statement | -2 | -107 | USD millions | Reported; nine-month statements only | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5 |
| Premium paid on debt extinguishment | Not supplied: line not presented in the annual statement | Not supplied: line not presented in the annual statement | Not supplied: source dash, not stated as zero | -13 | USD millions | Reported; nine-month statements only | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5 |
| Purchase of treasury stock | -601 | -125 | -125 | Not supplied: source dash, not stated as zero | USD millions | Reported; dash in nine-month 2026 | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Common stock dividends paid | -219 | -226 | -169 | -171 | USD millions | Reported cash dividends | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Contribution from noncontrolling interests | 19 | Not supplied: source dash, not stated as zero | Not supplied: line not presented in the nine-month statement | Not supplied: line not presented in the nine-month statement | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Payments for capitalized software obligations | -19 | -20 | -14 | -7 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Cash paid for shares withheld for taxes | -8 | -1 | Not supplied: source dash, not stated as zero | -18 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Proceeds from exercise of stock options | 10 | Not supplied: source dash, not stated as zero | Not supplied: line not presented in the nine-month statement | Not supplied: line not presented in the nine-month statement | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Other financing activities, net | -6 | -8 | -6 | -1 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Net Cash from Financing Activities | -1151 | -582 | -491 | 2291 | USD millions | Reported total | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Net Cash Change | -3 | 136 | 92 | 166 | USD millions | Reported net change in cash, cash equivalents and restricted cash; no FX line is presented | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Opening Cash | 147 | 144 | 144 | 280 | USD millions | Reported; FY2024 opening balance includes restricted cash | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Closing Cash | 144 | 280 | 236 | 446 | USD millions | Reported; equals balance-sheet cash where a balance sheet is supplied | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Cash Interest Paid | 431 | 372 | 294 | 448 | USD millions | Reported supplemental gross cash paid for interest; positive amount paid | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Income taxes paid, net of refunds | 254 | 208 | 175 | 219 | USD millions | Reported supplemental cash taxes | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |

Annual columns are the 2025 annual report; nine-month columns are the third-quarter report, whose cash flow statement prints interest paid and taxes paid in its supplemental lines. Nexstar classifies interest paid in operating activities and presents no FX effect line.
Basis: 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash & Equivalents | 144 | 280 | 446 | USD millions | Reported; no restricted cash balance presented at these dates | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Accounts receivable, net | 1028 | 1075 | 1550 | USD millions | Reported net of allowance for credit losses | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Broadcast rights | 84 | 61 | 85 | USD millions | Reported current asset | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Prepaid expenses and other current assets | 41 | 57 | 111 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Total current assets | 1297 | 1473 | 2192 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Property and equipment, net | 1207 | 1158 | 1830 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Goodwill | 2922 | 2910 | 5034 | USD millions | Reported; 9M 2026 includes preliminary TEGNA goodwill | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| FCC licenses | 2929 | 2949 | 5112 | USD millions | Reported indefinite-lived intangible | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Network affiliation agreements, net | 1494 | 1305 | 2483 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Other intangible assets, net | 353 | 282 | 290 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Investments | 877 | 396 | 385 | USD millions | Reported; mainly TV Food Network, written down in FY2025 | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Other noncurrent assets, net | 389 | 373 | 451 | USD millions | Reported; includes operating lease right-of-use assets | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Total Assets | 11468 | 10846 | 17777 | USD millions | Reported; includes assets of consolidated variable interest entities not available to Nexstar creditors | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Current portion of debt | 124 | 111 | 556 | USD millions | Reported carrying value | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Accounts payable | 133 | 133 | 215 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Broadcast rights payable | 97 | 48 | 87 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Accrued expenses | 314 | 314 | 671 | USD millions | Reported; includes interest payable and network affiliation fees | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Operating lease liabilities, current | 37 | 41 | 52 | USD millions | Reported; not added to Total Debt | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Deferred revenue | Not supplied: not a separate line in the annual report | 24 | 123 | USD millions | Reported in the third-quarter report; its December 2025 comparative splits the annual report's combined line | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 2 |
| Other current liabilities | 78 | 40 | 40 | USD millions | Reported; the 2024 figure includes deferred revenue, and the annual report prints 64 for 2025 before the split | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Total current liabilities | 783 | 711 | 1744 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Debt, net of current portion | 6399 | 6222 | 10853 | USD millions | Reported carrying value, net of issuance costs and discounts | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Deferred tax liabilities | 1487 | 1354 | 2144 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Other noncurrent liabilities | 531 | 497 | 560 | USD millions | Reported; includes noncurrent operating lease liabilities and pension obligations | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Total Liabilities | 9200 | 8784 | 15301 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Temporary Equity | 26 | 19 | 28 | USD millions | Reported redeemable noncontrolling interests, outside stockholders' equity | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Additional paid-in capital | 1304 | 1331 | 1326 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Accumulated other comprehensive loss | -1 | -15 | -15 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Retained earnings | 3671 | 3537 | 3882 | USD millions | Reported | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |
| Treasury stock, at cost | -2717 | -2789 | -2721 | USD millions | Reported monetary balance, not a share count | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Total Nexstar Media Group, Inc. stockholders' equity | 2257 | 2064 | 2472 | USD millions | Reported parent equity | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Noncontrolling interests | -15 | -21 | -24 | USD millions | Reported equity | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Total Equity | 2242 | 2043 | 2448 | USD millions | Reported total stockholders' equity including noncontrolling interests; excludes temporary equity | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92 |
| Total Debt | 6523 | 6333 | 11409 | USD millions | Calculated: current portion plus debt net of current portion at carrying value; operating leases excluded | calculation C01 |
| Senior Secured Debt, carrying value | Not supplied: carrying value by security class is not disclosed for 2024-12-31 | 3622 | 8646 | USD millions | Issuer classification in the earnings release: secured credit facilities plus secured notes, including the assumed 2027 notes the release classes as secured | EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 4 |
| Senior Unsecured Debt, carrying value | Not supplied: carrying value by security class is not disclosed for 2024-12-31 | 2711 | 2763 | USD millions | Issuer classification in the earnings release: unsecured notes | EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 4 |
| Undrawn committed revolving facilities | 545 | 600 | 441 | USD millions | Reported unused revolving commitments of Nexstar (net of letters of credit) and Mission available for borrowing | calculation C03 |
| Operating lease liabilities, noncurrent | 253 | 242 | 284 | USD millions | Reported supplementary liability inside other noncurrent liabilities; not added to debt | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 124 |
| Accrued network affiliation fees | 77 | 77 | 283 | USD millions | Reported component of accrued expenses; non-debt funding float | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 118 |
| Interest payable | 56 | 55 | 100 | USD millions | Reported component of accrued expenses | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 118 |
| Restricted cash | Not supplied: none presented at 2024-12-31; no balance established for later dates | Not supplied: no balance presented | Not supplied: no balance presented | USD millions | No assumption of zero | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91 |

Annual columns are the 2025 annual report; the 2026-09-30 column is the third-quarter report. The third-quarter report prints no balance sheet at 2025-09-30, so there is no nine-month 2025 column here.
Basis: 10-K_2025-12-31_nxst-20251231.htm.jsonl, pages 91–92; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 118; 10-K_2025-12-31_nxst-20251231.htm.jsonl, pages 123–124; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, pages 2–3; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 27; EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 4

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Nexstar revolving loans due 2030 | Revolver | 292 | 292 | 292 | 750 | Secured: substantially all combined assets excluding FCC licenses, consolidated variable interest entity assets and The CW | First lien credit agreement; relative lien priority against the notes not established | USD | 292 | Not applicable | SOFR plus a leverage-grid margin; 1.50% margin at 2025-12-31 | floating | SOFR | Not supplied: grid margin at 2026-09-30 not stated | Not supplied: floor not stated | 2030-06-27 | 0 | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| Nexstar Term Loan A due 2030 | Term loan | 1782 | 1786 | 1786 | Not applicable: notes | Secured: same collateral as the revolver | First lien credit agreement | USD | 1782 | Not applicable | SOFR plus a leverage-grid margin; 1.50% margin at 2025-12-31 | floating | SOFR | Not supplied: grid margin at 2026-09-30 not stated | Not supplied: floor not stated | 2030-06-27 | Not supplied: amortization is stated only for the combined Nexstar facilities | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| Nexstar Term Loan B due 2032 | Term loan | 1269 | 1287 | 1287 | Not applicable: notes | Secured: same collateral as the revolver | First lien credit agreement | USD | 1269 | Not applicable | SOFR + 2.50% | floating | SOFR | 250 | Not supplied: floor not stated | 2032-06-27 | Not supplied: amortization is stated only for the combined Nexstar facilities | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| Nexstar Term Loan B due 2033 | Term loan | 1160 | 1200 | 1200 | Not applicable: notes | Secured: same collateral as the revolver | First lien credit agreement | USD | 1160 | Not applicable | SOFR + 2.75% | floating | SOFR | 275 | Not supplied: floor not stated | 2033-03-19 | Not supplied: amortization is stated only for the combined Nexstar facilities | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| 7.75% Notes due 2027 | Senior notes assumed from TEGNA | 202 | 200 | 200 | Not applicable: notes | Described as secured by certain assets of Belo Corp. and its subsidiaries and, in the debt table, by the Company; scope not established; Mission is not a guarantor | Not supplied: rank against other debt not stated | USD | 202 | Not applicable | 7.75% | fixed | Not applicable: fixed rate | Not applicable: fixed rate | Not applicable: fixed rate | 2027-06-01 | Not supplied: no amortization term stated | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| 7.25% Notes due 2027 | Senior notes assumed from TEGNA | 242 | 240 | 240 | Not applicable: notes | Described as secured by certain assets of Belo Corp. and its subsidiaries and, in the debt table, by the Company; scope not established; Mission is not a guarantor | Not supplied: rank against other debt not stated | USD | 242 | Not applicable | 7.25% | fixed | Not applicable: fixed rate | Not applicable: fixed rate | Not applicable: fixed rate | 2027-09-15 | Not supplied: no amortization term stated | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| 6.50% Secured Notes due 2033 | Senior secured notes | 3353 | 3390 | 3390 | Not applicable: notes | Secured with the obligations under Nexstar's first lien credit agreement; guaranteed by Nexstar, Mission and certain restricted subsidiaries | Senior secured; lien priority against the credit facilities not established | USD | 3353 | Not applicable | 6.50% | fixed | Not applicable: fixed rate | Not applicable: fixed rate | Not applicable: fixed rate | 2033-09-15 | Not supplied: no amortization term stated | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| 4.75% Notes due 2028 | Senior unsecured notes | 997 | 1000 | 1000 | Not applicable: notes | Unsecured; guaranteed by Nexstar, Mission and certain restricted subsidiaries | Senior unsecured; equal in right of payment with senior debt and effectively junior to secured debt to the extent of collateral | USD | 997 | Not applicable | 4.75% | fixed | Not applicable: fixed rate | Not applicable: fixed rate | Not applicable: fixed rate | 2028-11 (day not stated) | Not supplied: no amortization term stated | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| 5.00% Notes due 2029 | Senior unsecured notes assumed from TEGNA | 62 | 60 | 60 | Not applicable: notes | Unsecured senior notes; guaranteed by Nexstar Media Group, Inc. and subsidiary guarantors, and not by Mission | Not supplied: rank against other debt not stated | USD | 62 | Not applicable | 5.00% | fixed | Not applicable: fixed rate | Not applicable: fixed rate | Not applicable: fixed rate | 2029-09-15 | Not supplied: no amortization term stated | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| 7.25% Notes due 2034 | Senior unsecured notes | 1704 | 1725 | 1725 | Not applicable: notes | Unsecured; guaranteed by Nexstar, Mission and certain restricted subsidiaries | Senior unsecured; equal in right of payment with senior debt | USD | 1704 | Not applicable | 7.25% | fixed | Not applicable: fixed rate | Not applicable: fixed rate | Not applicable: fixed rate | 2034-04-15 | Not supplied: no amortization term stated | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| Mission revolving loans due 2030 | Revolver | 62 | 62 | 62 | 75 | Secured under the Mission credit agreement; Nexstar guarantees payment | Mission credit agreement; rank against Nexstar debt not stated | USD | 62 | Not applicable | SOFR plus a leverage-grid margin; 1.50% margin at 2025-12-31 | floating | SOFR | Not supplied: grid margin at 2026-09-30 not stated | Not supplied: floor not stated | 2030-06-27 | 0 | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |
| Mission Term Loan B due 2028 | Term loan | 284 | 285 | 285 | Not applicable: notes | Secured under the Mission credit agreement; Nexstar guarantees payment | Mission credit agreement; rank against Nexstar debt not stated | USD | 284 | Not applicable | SOFR + 2.50% | floating | SOFR | 250 | Not supplied: floor not stated | 2028-06 (day not stated) | Not supplied: amortization is stated only for the combined Mission facility | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 |

All amounts are USD millions at 2026-09-30. Instrument carrying values are printed in the fair value table and add to Total Debt, so no separate financing-cost row is needed; the principal column adds to the issuer's total principal. The Nexstar facilities are scheduled to amortize USD 27 million in the remainder of 2026 and USD 108 million in 2027, combined across instruments. Carrying values are from the fair value table; principal, security, maturity and guarantee terms are from the debt note and, for the facilities' margins and commitments, the 2025 annual report.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, pages 21–26; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 51; 10-K_2025-12-31_nxst-20251231.htm.jsonl, pages 119–122; calculation C06

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM to 2026-09-30 | USD 1,000m | USD 1,602m | USD 1,005m | USD 1,597m | Calculated | calculation C04 from the income statement table | Includes a fourth-quarter 2025 equity method impairment of USD 381m; TEGNA enters only from its closing date; not pro forma. |
| Cash Interest Paid | LTM to 2026-09-30 | USD 372m | USD 448m | USD 294m | USD 526m | Calculated | calculation C04 from the cash flow table | Gross cash paid; TEGNA-related borrowings enter only from the closing date. |
| Net revenue | LTM to 2026-09-30 | USD 4,949m | USD 5,522m | USD 3,660m | USD 6,811m | Calculated | calculation C04 from the income statement table | TEGNA revenue included from its closing date only. |
| EBITDA (Adjusted) | LTM to 2026-09-30 | Not supplied: the annual report states no Adjusted EBITDA | USD 1,860m | USD 1,128m | Not supplied: full-year component is not stated | Not Calculable | Earnings release reconciliation | No last-twelve-month adjusted figure can be constructed without the FY2025 figure. |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Carrying debt / reported EBITDA | 6523 | Net debt data; calculation C01 | 1887 | Income statement table | FY2024 / 2024-12-31 | USD | US$m | 3.46 | Calculated | 1 and calculated EBITDA | Reported EBITDA calculated from components; annual cover uses gross cash interest paid. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 6379 | Net debt data; calculation C05 | 1887 | Income statement table | FY2024 / 2024-12-31 | USD | US$m | 3.38 | Calculated | 1 and calculated EBITDA | Reported EBITDA calculated from components; annual cover uses gross cash interest paid. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 1887 | Income statement table | 431 | Cash flow table | FY2024 / 2024-12-31 | USD | US$m | 4.38 | Calculated | 1 and calculated EBITDA | Reported EBITDA calculated from components; annual cover uses gross cash interest paid. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 6333 | Net debt data; calculation C01 | 1000 | Income statement table | FY2025 / 2025-12-31 | USD | US$m | 6.33 | Calculated | 1 and calculated EBITDA | FY2025 EBITDA carries a USD 381 million equity method impairment. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 6053 | Net debt data; calculation C05 | 1000 | Income statement table | FY2025 / 2025-12-31 | USD | US$m | 6.05 | Calculated | 1 and calculated EBITDA | FY2025 EBITDA carries a USD 381 million equity method impairment. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 1000 | Income statement table | 372 | Cash flow table | FY2025 / 2025-12-31 | USD | US$m | 2.69 | Calculated | 1 and calculated EBITDA | FY2025 EBITDA carries a USD 381 million equity method impairment. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 11409 | Net debt data; calculation C01 | 1597 | Income statement table; calculation C04 | 2026-09-30 | USD | US$m | 7.14 | Calculated | 1 and calculated EBITDA | Last-twelve-month EBITDA; TEGNA from closing only; not pro forma. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 10963 | Net debt data; calculation C05 | 1597 | Income statement table; calculation C04 | 2026-09-30 | USD | US$m | 6.86 | Calculated | 1 and calculated EBITDA | Last-twelve-month EBITDA; TEGNA from closing only; not pro forma. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 1597 | Income statement table; calculation C04 | 526 | Cash flow table; calculation C04 | 2026-09-30 | USD | US$m | 3.04 | Calculated | 1 and calculated EBITDA | Last-twelve-month EBITDA; TEGNA from closing only; not pro forma. |
| Total debt / adjusted EBITDA | Carrying debt / adjusted EBITDA | 6523 | Net debt data | Not supplied: no Adjusted EBITDA is stated for this period | Earnings release reconciliation covers nine-month periods only | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA is stated for this period | Not Calculable | Insufficient | Issuer-adjusted measure is stated for interim nine-month periods only. |
| Net debt / adjusted EBITDA | Carrying debt less cash / adjusted EBITDA | 6379 | Net debt data | Not supplied: no Adjusted EBITDA is stated for this period | Earnings release reconciliation covers nine-month periods only | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA is stated for this period | Not Calculable | Insufficient | Issuer-adjusted measure is stated for interim nine-month periods only. |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | Not supplied: no Adjusted EBITDA is stated for this period | Earnings release reconciliation covers nine-month periods only | 431 | Cash flow table | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA is stated for this period | Not Calculable | Insufficient | Issuer-adjusted measure is stated for interim nine-month periods only. |
| Total debt / adjusted EBITDA | Carrying debt / adjusted EBITDA | 6333 | Net debt data | Not supplied: no Adjusted EBITDA is stated for this period | Earnings release reconciliation covers nine-month periods only | FY2025 / 2025-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA is stated for this period | Not Calculable | Insufficient | Issuer-adjusted measure is stated for interim nine-month periods only. |
| Net debt / adjusted EBITDA | Carrying debt less cash / adjusted EBITDA | 6053 | Net debt data | Not supplied: no Adjusted EBITDA is stated for this period | Earnings release reconciliation covers nine-month periods only | FY2025 / 2025-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA is stated for this period | Not Calculable | Insufficient | Issuer-adjusted measure is stated for interim nine-month periods only. |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | Not supplied: no Adjusted EBITDA is stated for this period | Earnings release reconciliation covers nine-month periods only | 372 | Cash flow table | FY2025 / 2025-12-31 | USD | US$m | Not calculable: no Adjusted EBITDA is stated for this period | Not Calculable | Insufficient | Issuer-adjusted measure is stated for interim nine-month periods only. |
| Total debt / adjusted EBITDA | Carrying debt / adjusted EBITDA | 11409 | Net debt data | Not supplied: no Adjusted EBITDA is stated for this period | Earnings release reconciliation covers nine-month periods only | 2026-09-30 | USD | US$m | Not calculable: no Adjusted EBITDA is stated for this period | Not Calculable | Insufficient | Issuer-adjusted measure is stated for interim nine-month periods only. |
| Net debt / adjusted EBITDA | Carrying debt less cash / adjusted EBITDA | 10963 | Net debt data | Not supplied: no Adjusted EBITDA is stated for this period | Earnings release reconciliation covers nine-month periods only | 2026-09-30 | USD | US$m | Not calculable: no Adjusted EBITDA is stated for this period | Not Calculable | Insufficient | Issuer-adjusted measure is stated for interim nine-month periods only. |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | Not supplied: no Adjusted EBITDA is stated for this period | Earnings release reconciliation covers nine-month periods only | 526 | Cash flow table | 2026-09-30 | USD | US$m | Not calculable: no Adjusted EBITDA is stated for this period | Not Calculable | Insufficient | Issuer-adjusted measure is stated for interim nine-month periods only. |
| Liquidity / debt | (Cash + undrawn revolvers) / carrying debt | 689 | calculation C03; balance sheet table | 6523 | calculation C01 | FY2024 | USD | US$m | 0.11 | Calculated | 1 | Fraction; excludes covenant availability tests. |
| Liquidity / debt | (Cash + undrawn revolvers) / carrying debt | 880 | calculation C03; balance sheet table | 6333 | calculation C01 | FY2025 | USD | US$m | 0.14 | Calculated | 1 | Fraction; excludes covenant availability tests. |
| Liquidity / debt | (Cash + undrawn revolvers) / carrying debt | 887 | calculation C03; balance sheet table | 11409 | calculation C01 | 9M 2026 | USD | US$m | 0.08 | Calculated | 1 | Fraction; excludes covenant availability tests. |
| EBITDA margin fraction | Reported EBITDA / net revenue | 1887 | calculation C02 | 5407 | Income statement table | FY2024 | USD | US$m | 0.35 | Calculated | 1 and calculated EBITDA | Fraction; reported EBITDA, not adjusted. |
| EBITDA margin fraction | Reported EBITDA / net revenue | 1000 | calculation C02 | 4949 | Income statement table | FY2025 | USD | US$m | 0.20 | Calculated | 1 and calculated EBITDA | Fraction; reported EBITDA, not adjusted. |
| EBITDA margin fraction | Reported EBITDA / net revenue | 1005 | calculation C02 | 3660 | Income statement table | 9M 2025 | USD | US$m | 0.27 | Calculated | 1 and calculated EBITDA | Fraction; reported EBITDA, not adjusted. |
| EBITDA margin fraction | Reported EBITDA / net revenue | 1602 | calculation C02 | 5522 | Income statement table | 9M 2026 | USD | US$m | 0.29 | Calculated | 1 and calculated EBITDA | Fraction; reported EBITDA, not adjusted. |
| Capex / revenue | Total capex magnitude / net revenue | 145 | Cash flow table | 5407 | Income statement table | FY2024 | USD | US$m | 0.03 | Calculated | 1 | Fraction; total capex, no maintenance split. |
| Capex / revenue | Total capex magnitude / net revenue | 148 | Cash flow table | 4949 | Income statement table | FY2025 | USD | US$m | 0.03 | Calculated | 1 | Fraction; total capex, no maintenance split. |
| Capex / revenue | Total capex magnitude / net revenue | 94 | Cash flow table | 3660 | Income statement table | 9M 2025 | USD | US$m | 0.03 | Calculated | 1 | Fraction; total capex, no maintenance split. |
| Capex / revenue | Total capex magnitude / net revenue | 113 | Cash flow table | 5522 | Income statement table | 9M 2026 | USD | US$m | 0.02 | Calculated | 1 | Fraction; total capex, no maintenance split. |
| Revenue growth | Current revenue / prior revenue − 1 | 4949 | Income statement table | 5407 | Income statement table | FY2025 | USD | US$m | -0.08 | Calculated | 1 | Fraction; FY2025 against FY2024, a political year. |
| Revenue growth | Current revenue / prior revenue − 1 | 5522 | Income statement table | 3660 | Income statement table | 9M 2026 | USD | US$m | 0.51 | Calculated | 1 | Fraction; includes TEGNA from its closing date and a political year. |
| Senior secured debt / EBITDA | Issuer-classified secured carrying debt / reported EBITDA | 3622 | Balance sheet table | 1000 | Income statement table | FY2025 | USD | US$m | 3.62 | Calculated | 1 and issuer classification | Secured split is the issuer's release classification; FY2025 EBITDA carries the impairment. |
| Senior secured debt / EBITDA | Issuer-classified secured carrying debt / last-twelve-month reported EBITDA | 8646 | Balance sheet table | 1597 | calculation C04 | 9M 2026 | USD | US$m | 5.41 | Calculated | 1 and issuer classification | Includes the assumed 2027 notes the release classes as secured; not pro forma. |
| Senior secured debt / EBITDA | Issuer-classified secured carrying debt / reported EBITDA | Not supplied: carrying value by security class is not disclosed for 2024-12-31 | Balance sheet table | 1887 | Income statement table | FY2024 | USD | US$m | Not calculable: secured carrying value is not disclosed | Not Calculable | Insufficient | Principal by facility exists but carrying value by class is not stated. |

Each fixed row divides the figure in the net debt table by the last-twelve-month or fiscal-year EBITDA of the statement tables, printed to two places.
Basis: calculation C04; calculation C05

### T4.10 KPI dashboard

| KPI Category | Metric Name | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|
| Issuer reported | Adjusted EBITDA margin | 30.8% | 33.7% | Higher | Issuer-defined measure; margin of Adjusted EBITDA on net revenue for nine months. |
| Issuer reported | Distribution revenue, USD millions (period flow) | 2204 | 3044 | Higher | Retransmission, carriage and affiliation revenue; includes TEGNA from its closing date. |
| Issuer reported | Advertising revenue, USD millions (period flow) | 1410 | 2433 | Higher | Includes political advertising in an election year and TEGNA from its closing date. |
| Issuer reported | Net revenue growth | Not supplied: first period of the series | 50.9% | Higher | Issuer-stated nine-month growth; the perimeter includes TEGNA from its closing date. |
| Operating | Full power television stations owned, operated, programmed or serviced (period-end count) | Not supplied: no count is stated at 2025-09-30 | 265 | Not established | Period-end count at 2026-09-30 is 265 and reach about 80% of U.S. television households; the annual report states 201 stations at 2026-02-26, before the acquisition, on a household-reach basis that applies the FCC discount to owned stations, so no like-for-like series is built. |

Margins and revenue lines are as the issuer prints them for the nine-month periods and are not recomputed here.
Basis: EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 1; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, pages 41–42; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 12

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Affected conclusions | Resolution / Recommendation | Source |
|---|---|---|---|---|---|---|---|---|
| Net leverage | Carrying debt less cash over reported last-twelve-month EBITDA | Pro forma total net leverage in the credit agreement definitions, with a two-year EBITDA average, pro forma TEGNA and credit-agreement adjustments | Issuer 4.04x total net and 3.03x first lien at 2026-09-30 against this module's 6.86x net on reported EBITDA | 9M 2026; 2026-09-30 | Large: about 2.8 turns between the issuer total net ratio and this module's net ratio | Leverage, covenant headroom, liquidity | Keep both; use carrying-value reported EBITDA here and the issuer's covenant ratios only as issuer-stated context; definitions are not supplied. | EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 4; calculation C05 |
| EBITDA, reported against adjusted | Reported EBITDA from net income, interest, tax and D&A | Issuer Adjusted EBITDA adds transaction costs, stock compensation, basis-difference amortization, debt extinguishment and pension credit | 9M 2026: 1602 reported against 1860 adjusted; 9M 2025: 1005 against 1128 | 9M 2025; 9M 2026 | 258 USD millions for 9M 2026; 123 for 9M 2025 | Leverage, cover, earnings quality | Reported stays the denominator; adjusted is shown beside it for interim periods only. | EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8; calculation C02 |
| FY2025 equity method impairment | Impairment is part of reported EBITDA because it sits below operating income | Issuer excludes impairments from adjusted measures where it states them | FY2025 reported EBITDA 1000 includes an impairment of 381; excluding it gives 1381, analyst arithmetic | FY2025; LTM 2026-09-30 | 381 USD millions; LTM leverage 5.54x net excluding it against 6.86x including it | Leverage trend, interest cover | Keep reported primary; show the ex-impairment ratio only as labelled Analyst Judgement in the calculations. | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 117; calculation C11 |
| Debt principal against carrying value | Total Debt at carrying value | Principal by instrument before financing costs and discounts | Principal 11527 against carrying 11409 at 2026-09-30; principal 6361 against 6333 at 2025-12-31 | FY2025; 9M 2026 | 118 and 28 USD millions | Leverage and maturity analysis | Carrying value for leverage; principal for the maturity ladder; difference reconciled in one row. | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 21; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 119; calculation C06 |
| Interest, accrued against cash paid | Cover uses cash interest paid | Interest expense, net as printed in the income statement | 9M 2026: 495 expense against 448 paid; FY2025: 379 against 372 | FY2025; 9M 2026 | 47 and 7 USD millions | Interest cover | Cash paid is the cover denominator; expense retained in the income statement table. | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Acquisition value, multi-figure event | Purchase price of the equity net of cash acquired is the cash flow figure | Pre-closing estimated transaction value 6.2 billion including refinancing and fees; closing purchase price 3,657; cash paid net of cash acquired 3,341; assumed debt 2,559 | Four figures with four roles for one acquisition | 9M 2026 | 2.5 billion USD between the pre-closing value and the closing price | Acquisition funding and debt increase | Each figure kept with its role; the cash flow line 3341 is used in the cash flow table, the purchase price in the interpretation. | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 11; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, pages 16–17 |
| Debt repayment, nine months | Repayments of long-term debt as printed in the cash flow statement | Release debt repayment 786 and note principal repaid under the senior secured facilities 783 | 786 against 783 against gross cash repayments of 8498 that include revolver and refinancing flows | 9M 2026 | 3 USD millions between the release and the note | Deleveraging narrative | Keep the three figures separate; no netting of gross cash repayments against issuance. | EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 4; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 22 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 3.46 | 3.38 | x | Carrying debt over reported EBITDA, fiscal year; 2024 year-end before the TEGNA acquisition. |
| FY2025 / 2025-12-31 | 6.33 | 6.05 | x | Carrying debt over reported EBITDA, fiscal year; EBITDA carries the 381 equity method impairment. |
| 2026-09-30 | 7.14 | 6.86 | x | Last-twelve-month reported EBITDA of 1597; TEGNA from its closing only and not pro forma; issuer covenant ratios 3.03x first lien and 4.04x total net are on another basis. |

The 2026-09-30 point carries the full acquisition debt against earnings that include TEGNA only from its closing and the 2025 impairment, so it overstates a full-year run rate.
Basis: calculation C04; calculation C05; calculation C11

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 4.38 | x | Reported EBITDA over gross cash interest paid, fiscal year. |
| FY2025 / 2025-12-31 | 2.69 | x | Reported EBITDA over gross cash interest paid, fiscal year; EBITDA carries the 381 impairment. |
| 2026-09-30 | 3.04 | x | Last-twelve-month reported EBITDA over last-twelve-month cash interest paid of 526; TEGNA debt interest from the financing dates. |

Cover is historical and uses interest actually paid, so the higher post-acquisition coupons are only partly in the last-twelve-month figure.
Basis: calculation C04

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 144 | 545 | US$m | Cash 144; unused revolving commitments 531 plus 14 at 2024-12-31, net of letters of credit. |
| FY2025 / 2025-12-31 | 280 | 600 | US$m | Cash 280; unused revolving commitments 586 plus 14 at 2025-12-31, net of letters of credit. |
| 2026-09-30 | 446 | 441 | US$m | Cash 446; unused revolving commitments 428 plus 13 at 2026-09-30, net of 30 of letters of credit; before the USD 525 million repaid after the quarter end. |

Undrawn facilities are available for borrowing only on the issuer's covenant calculation, and the cash balance is before the dividend and repayments after the quarter end.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 51; calculation C03

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| Remainder of 2026 | 28 | US$m | Principal due in the remainder of 2026: Nexstar facilities 27 and Mission facility 1. |
| 2027 | 551 | US$m | Nexstar facilities 108, Mission facility 3 and the 2027 notes 440. |
| 2028-2029 | 1558 | US$m | Includes the 4.75% notes due November 2028 of 1000, the 5.00% notes due 2029 of 60 and the Mission Term Loan B. |
| 2030-2031 | 1856 | US$m | Nexstar revolver and Term Loan A due 2030 and the Mission revolver. |
| Thereafter | 7534 | US$m | Includes the 2032 and 2033 term loans, the 2033 secured notes and the 2034 notes. |

The ladder is contractual principal by calendar period at 2026-09-30, before the repayments made after that date.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 51; calculation C07

### Financials and credit metrics

| Metric | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Free cash flow (operating cash flow less capex) | 1105 | 743 | 607 | 1154 | USD millions | Calculated; levered, after working capital, cash interest and cash taxes; excludes acquisitions | calculation C08 |
| Cash plus undrawn revolving commitments | 689 | 880 | Not supplied: no 2025 nine-month balance sheet | 887 | USD millions | Calculated; before the repayments and dividend after the quarter end | calculation C03 |
| Net debt | 6379 | 6053 | Not supplied: no 2025 nine-month balance sheet | 10963 | USD millions | Calculated carrying debt less cash | calculation C05 |
| Common stock dividends paid | -219 | -226 | -169 | -171 | USD millions | Reported cash dividends; outflow negative as in the cash flow table | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Purchase of treasury stock | -601 | -125 | -125 | Not supplied: source dash | USD millions | Reported cash repurchases; outflow negative as in the cash flow table | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94 |
| Issuer Adjusted Free Cash Flow | Not supplied: not stated for the full year | Not supplied: not stated for the full year | 615 | 1101 | USD millions | Issuer non-GAAP measure for nine months | EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8 |

Annual columns are the 2025 annual report; nine-month columns are the third-quarter report and the earnings release.
Basis: 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5; EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 6523 | 144 | 6379 | US$m | Reported carrying debt lines, current portion 124 plus debt 6399; principal 6545; operating leases excluded; reported, before any subsequent event. |
| FY2025 / 2025-12-31 | 6333 | 280 | 6053 | US$m | Reported carrying debt lines, current portion 111 plus debt 6222; principal 6361; operating leases excluded; reported, before any subsequent event. |
| 2026-09-30 | 11409 | 446 | 10963 | US$m | Reported carrying debt lines, current portion 556 plus debt 10853; principal 11527; operating leases excluded; reported, before the post-quarter repayments and dividend shown in the next table. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 11527 | -118 | 11409 | US$m | Ladder total of the maturity table; reconciling item is unamortized financing costs and discount net of premium of 118, no debt omitted from the ladder; instrument carrying values add to 11409. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Repayment of senior secured credit facilities | 2026-10-30 | 0 | 10963 | 6.86 | US$m | Debt repaid 400; funded from cash or borrowings so net debt is unchanged by the repayment itself; operating cash flow after 2026-09-30 is not reflected; standalone adjustment to 2026-09-30 over last-twelve-month reported EBITDA of 1597. |
| Repayment of senior secured credit facilities | 2026-11-05 | 0 | 10963 | 6.86 | US$m | Debt repaid 125; same treatment; standalone adjustment, not cumulative with the repayment of 2026-10-30. |
| Quarterly dividend payable | 2026-11-27 | 57.33 | 11020.33 | 6.90 | US$m | Declared 2026-10-30 at 1.86 per share and payable on 2026-11-27, after the as-of date, so scheduled and not yet paid; amount calculated as 1.86 times 30821028 shares outstanding at 2026-11-05 (57.33), record-date share count not stated; standalone adjustment to 2026-09-30. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 9M 2025 | 3660 | 1128 | US$m | Nine-month duration; issuer Adjusted EBITDA, not reported and not house-adjusted. |
| 9M 2026 | 5522 | 1860 | US$m | Same nine-month duration and issuer-adjusted identity; includes TEGNA from its closing date. |

The EBITDA in this chart is the issuer's adjusted measure for nine months, whereas the leverage and cover charts use calculated reported EBITDA.
Basis: EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 1; EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Nexstar revolving loans due 2030 | 1 | Yes | 292 | 0.18 | US$m | Nexstar Media Inc. as borrower; first lien credit agreement with guarantees from Nexstar, Mission and restricted subsidiaries. Principal amount over last-twelve-month reported EBITDA of 1597; cumulative principal 292; not a recovery waterfall. |
| Nexstar Term Loan A due 2030 | 1 | Yes | 1786 | 1.30 | US$m | Same borrower, guarantors and collateral as the revolver. Principal amount over last-twelve-month reported EBITDA of 1597; cumulative principal 2078; not a recovery waterfall. |
| Nexstar Term Loan B due 2032 | 1 | Yes | 1287 | 2.11 | US$m | Same borrower, guarantors and collateral as the revolver. Principal amount over last-twelve-month reported EBITDA of 1597; cumulative principal 3365; not a recovery waterfall. |
| Nexstar Term Loan B due 2033 | 1 | Yes | 1200 | 2.86 | US$m | Same borrower, guarantors and collateral as the revolver. Principal amount over last-twelve-month reported EBITDA of 1597; cumulative principal 4565; not a recovery waterfall. |
| 6.50% Secured Notes due 2033 | 1 | Yes | 3390 | 4.98 | US$m | Nexstar Media Inc. issuer; guaranteed by Nexstar, Mission and restricted subsidiaries; secured with the obligations under the first lien credit agreement. Principal amount over last-twelve-month reported EBITDA of 1597; cumulative principal 7955; not a recovery waterfall. |
| 4.75% Notes due 2028 | 2 | No | 1000 | 5.61 | US$m | Nexstar Media Inc. issuer; guaranteed by Nexstar, Mission and restricted subsidiaries; effectively junior to secured debt. Principal amount over last-twelve-month reported EBITDA of 1597; cumulative principal 8955; not a recovery waterfall. |
| 5.00% Notes due 2029 | 2 | No | 60 | 5.64 | US$m | TEGNA issuer; senior unsecured; guaranteed by Nexstar Media Group, Inc. and subsidiary guarantors, not by Mission. Principal amount over last-twelve-month reported EBITDA of 1597; cumulative principal 9015; not a recovery waterfall. |
| 7.25% Notes due 2034 | 2 | No | 1725 | 6.73 | US$m | Nexstar Media Inc. issuer; guaranteed by Nexstar, Mission and restricted subsidiaries; senior unsecured. Principal amount over last-twelve-month reported EBITDA of 1597; cumulative principal 10740; not a recovery waterfall. |

The stack omits the Mission facility and the assumed 2027 notes because no source states their legal rank against the other debt, so it is not a full capital structure.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 22; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 24; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 26; calculation C10

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported) | 1602 | US$m | Opening amount: nine months to 2026-09-30, calculated reported EBITDA. |
| Transaction, other one-time and restructuring expenses | 125 | US$m | Issuer add-back; transaction costs; realization status not applicable to an expense incurred. |
| Stock-based compensation expense | 80 | US$m | Issuer add-back; share-based compensation; includes 18 of accelerated TEGNA awards. |
| Amortization of basis difference of equity method investments | 53 | US$m | Issuer add-back; other stated. |
| Loss on extinguishment of debt | 21 | US$m | Issuer add-back; debt transaction cost. |
| Pension and other postretirement plans credit, net | -22 | US$m | Issuer deduction of a non-operating credit. |
| Other | 1 | US$m | Issuer add-back; other stated. |
| EBITDA (Adjusted) | 1860 | US$m | Closing issuer Adjusted EBITDA; no house acceptance of the add-backs. |

The bridge reconciles arithmetically but does not establish that each add-back is nonrecurring or eligible under any debt covenant.
Basis: EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8; calculation C02

### Segment schedule

| Business unit | Period | Net revenue | Segment profit | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Broadcast | 9M 2025 | 3450 | 1216 | USD millions | Reported segment revenue and segment profit; excludes unallocated corporate costs | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 41 |
| Broadcast | 9M 2026 | 3764 | 1537 | USD millions | Reported | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 41 |
| TEGNA | 9M 2025 | Not supplied: TEGNA was not owned | Not supplied: TEGNA was not owned | USD millions | Segment created for the acquisition | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 41 |
| TEGNA | 9M 2026 | 1568 | 458 | USD millions | Reported from the closing date to 2026-09-30 | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 41 |
| Other segments, including The CW | 9M 2025 | 247 | -79 | USD millions | Reported nonreportable segments; profit is a net loss | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, pages 41–42 |
| Other segments, including The CW | 9M 2026 | 242 | -63 | USD millions | Reported nonreportable segments; profit is a net loss | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, pages 41–42 |
| Corporate and eliminations | 9M 2025 | -37 | -144 | USD millions | Corporate revenue 7 less eliminations 44; corporate unallocated costs | calculation C13 |
| Corporate and eliminations | 9M 2026 | -52 | -212 | USD millions | Corporate revenue 4 less eliminations 56; corporate unallocated costs | calculation C13 |

### Financial interpretation

Net leverage rose in two steps. First, FY2025 reported EBITDA fell to USD 1,000 million from USD 1,887 million with debt little changed, which took net leverage from 3.38x to 6.05x; the fall includes a USD 381 million impairment of the TV Food Network investment and a year without election advertising, which is generally higher in even-numbered years. Second, the debt-financed acquisition lifted carrying debt to USD 11,409 million and net debt to USD 10,963 million while last-twelve-month reported EBITDA recovered to USD 1,597 million, leaving net leverage at 6.86x. Excluding the impairment, analyst arithmetic puts it at 5.54x. Neither figure is a covenant calculation, and the issuer reports lower ratios on its own definitions.
Basis: 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 117; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 42; calculation C05; calculation C11

Cash interest paid over the last twelve months is USD 526 million and reported EBITDA covers it 3.04x, down from 4.38x in FY2024. Accrued net interest of USD 495 million for nine months in 2026 against USD 288 million a year earlier shows the new debt costing more than the debt it replaced, and cash paid should rise because the first coupon of the 2033 secured notes fell due in September 2026 and that of the 2034 notes in October 2026, after the nine-month cash flow statement, so most of a full year of new coupons is still to come.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 23; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 25; calculation C04; calculation C05

Free cash flow rose to USD 1,154 million for nine months from USD 607 million a year earlier, after operating cash flow of USD 1,267 million and capital expenditure of USD 113 million, and the issuer applied it to USD 783 million of facility repayments and USD 171 million of dividends. Working-capital inflows of USD 128 million from receivables and USD 89 million from accruals contributed, and advertising revenue is generally higher in even-numbered election years, so the 2026 cash flow is not a run rate for odd years.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 22; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 42; calculation C08

Liquidity is adequate for near-term maturities: cash of USD 446 million and undrawn revolving commitments of USD 441 million total USD 887 million against USD 28 million of principal due in the rest of 2026 and USD 551 million in 2027, which includes the assumed 2027 notes. The revolver and the Term Loan A mature in 2030, so the wall of larger maturities sits beyond the next two years. Revolver availability depends on the covenant tests, whose definitions are not supplied.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 51; calculation C03; calculation C07

Two non-debt obligations grew with the acquisition and fund operations without bearing interest: accrued network affiliation fees rose to USD 283 million from USD 77 million and deferred revenue rose to USD 123 million from USD 24 million. A slowdown in distribution or advertising receipts, or tighter network terms, would hit cash before reported debt changes, so these balances should be tracked beside debt. Repayments of USD 525 million after the quarter end leave net debt unchanged at the event itself and do not reflect cash generated in October and November.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 43; calculation C03

The strongest contrary evidence is that the issuer reports a first lien net leverage of 3.03x and total net leverage of 4.04x against a covenant test of 4.75x, and that it has repaid USD 1.3 billion of debt since the start of the year. Those figures would win if the issuer's two-year EBITDA average and full pro forma TEGNA earnings were the right measure of creditor exposure; this module cannot confirm that because the credit agreement is not supplied. A downside runs from an adverse ruling in the pending merger litigation, which could force divestitures or keep TEGNA separate, through lower synergies and EBITDA, to higher leverage against 2027 maturities; the observable triggers are the appeal outcome and the next quarterly leverage ratio.
Basis: EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 4; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 34; calculation C07

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Reported financial and debt comparison | Ready with Limitations | Statements and debt reconcile; reported EBITDA is calculated and the 2025 figure carries an impairment | Retain the stated definitions; read leverage as a reported-basis ceiling. |
| Pro forma leverage and covenant headroom | Not Ready | No pro forma EBITDA, no covenant definitions, no adjusted figure for full years | Obtain the credit agreement definitions and a pro forma TEGNA earnings schedule before stating headroom. |
| Liquidity and maturity analysis | Ready with Limitations | Cash, revolver availability and the ladder are stated; no cash forecast | Use the 2026-09-30 figures with the post-quarter events flagged. |
| Priority and recovery | Not Ready | Legal rank of the assumed 2027 notes and Mission facility is not stated; executed documents not supplied | Do not infer a full waterfall from the stack table. |

### Limitations

Reported EBITDA is calculated from net income, interest, tax and depreciation and amortization because the issuer states none, and the issuer's adjusted measure is stated for nine-month periods only, so adjusted leverage and cover are not shown for year-ends or the last twelve months.
Basis: EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8; calculation C02

The last-twelve-month figures contain TEGNA earnings only from its closing date but the debt at 2026-09-30 includes all acquisition borrowings, so leverage here is not pro forma and is higher than a full-year view would show; the unaudited pro forma note gives revenue and net income only.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 18; calculation C04

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 40 |
| Calculated | 24 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 8 |
| Fields present | 20 |
| Fields total | 22 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 10 |

## Calculations

All monetary calculations are USD millions on the consolidated perimeter. Results are exact at source precision; ratios are rounded to two decimals and are not new reported facts.

| ID | Purpose and period | Operation and complete operands | Result | Unit | Source | Limitation |
|---|---|---|---|---|---|---|
| C01 | Carrying debt, FY2024, FY2025 and 2026-09-30 | 124 + 6399; 111 + 6222; 556 + 10853 | 6523; 6333; 11409 | USD millions | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 2 | Current portion plus debt net of current portion; operating leases excluded. |
| C02 | EBITDA (Reported), four periods | FY2024: 683 + 444 + 276 + 484. FY2025: 83 + 379 + 67 + 471. 9M 2025: 253 + 288 + 111 + 353. 9M 2026: 523 + 495 + 150 + 434 | 1887; 1000; 1005; 1602 | USD millions | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 3 | Net income plus interest expense, net, plus income tax plus depreciation and amortization of intangible assets; the issuer states no unadjusted EBITDA. |
| C03 | Undrawn committed revolving facilities and liquidity | FY2024: 531 + 14 = 545. FY2025: 586 + 14 = 600. 2026-09-30: 428 + 13 = 441. Liquidity: 144 + 545 = 689; 280 + 600 = 880; 446 + 441 = 887 | 545; 600; 441; liquidity 689; 880; 887 | USD millions | 10-K_2024-12-31_nxst-20241231.htm.jsonl, page 115; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 51 | Availability is on the issuer's covenant calculation; the 2026-09-30 figure is net of 30 of letters of credit. |
| C04 | Last twelve months to 2026-09-30 | EBITDA: 1000 + 1602 − 1005. Cash interest: 372 + 448 − 294. Revenue: 4949 + 5522 − 3660 | EBITDA 1597; cash interest 526; revenue 6811 | USD millions | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5 | Latest full year plus current stub less prior-year stub; TEGNA included from the closing date only; not pro forma. |
| C05 | Net debt and net leverage | 6523 − 144; 6333 − 280; 11409 − 446. Divided by 1887; 1000; 1597 | Net debt 6379; 6053; 10963. Net leverage 3.38; 6.05; 6.86 | USD millions; times | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 2 | Net debt is carrying debt less all cash; restricted cash is not separately presented. |
| C06 | Principal, carrying value and instrument sums at 2026-09-30 | Principal: 292 + 1786 + 1287 + 1200 + 200 + 240 + 3390 + 1000 + 60 + 1725 + 62 + 285 = 11527. Carrying: 292 + 1782 + 1269 + 1160 + 202 + 242 + 3353 + 997 + 62 + 1704 + 62 + 284 = 11409. Difference: 11527 − 118 | Principal 11527; carrying 11409; reconciling item −118 | USD millions | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 39 | Instrument carrying values come from the fair value table and add to the balance-sheet Total Debt. |
| C07 | Maturity ladder and repayments since year-end | 28 + 551 + 1558 + 1856 + 7534. Repayments since year-end: 786 + 400 + 125 = 1311; after the quarter end: 400 + 125 = 525 | Ladder 11527; repayments 1311 against 1.3 billion stated; after the quarter end 525 | USD millions | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 51; EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 1; EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 4 | The release repayment of 786 differs from the note's 783 by 3, which the sources do not reconcile. |
| C08 | Free cash flow | FY2024: 1250 − 145. FY2025: 891 − 148. 9M 2025: 701 − 94. 9M 2026: 1267 − 113 | 1105; 743; 607; 1154 | USD millions | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5 | Levered free cash flow after working capital and cash interest; matches the issuer's free cash flow of 607 and 1154 for nine months. |
| C09 | Issuer leverage ratios for context | None calculated; as stated by the issuer: first lien net 3.03x; total net 4.04x; covenant test 4.75x at 2026-09-30 | 3.03x; 4.04x; 4.75x | times | EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 4 | Issuer-stated on credit agreement definitions that exclude TEGNA synergies from the second quarter; not recomputed here. |
| C10 | Debt stack cumulative leverage | Cumulative principal 292; 2078; 3365; 4565; 7955; 8955; 9015; 10740, each over 1597 | 0.18; 1.30; 2.11; 2.86; 4.98; 5.61; 5.64; 6.73 | times | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 21 | Principal over last-twelve-month reported EBITDA; not a recovery waterfall. |
| C11 | Analyst Judgement: net leverage excluding the 2025 equity method impairment | EBITDA 1597 + 381 = 1978; FY2025 EBITDA 1000 + 381 = 1381. Total debt 11409 / 1978; net debt 10963 / 1978; FY2025 net 6053 / 1381 | LTM 5.77 total, 5.54 net; FY2025 4.38 net | times | 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 117; calculation C04 | Analyst arithmetic labelled as a sensitivity, not a house-adjusted EBITDA; the issuer states no adjusted annual figure. |
| C12 | Post-balance-sheet dividend | 1.86 × 30821028 shares / 1000000 = 57.327; net debt 10963 + 57.33 = 11020.33; leverage 11020.33 / 1597 | 57.33; 11020.33; 6.90 | USD millions; times | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 43 | Declared rate times shares outstanding at 2026-11-05; the record-date count is not stated. |
| C13 | Corporate and eliminations revenue, nine months | 9M 2025: 7 − 44. 9M 2026: 4 − 56 | −37; −52 | USD millions | 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 41; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 42 | Corporate revenue less intersegment eliminations; segment revenues plus this line equal consolidated net revenue of 3660 and 5522. |

## Gaps

- High: No Adjusted EBITDA is stated for FY2024, FY2025 or the last twelve months, so adjusted leverage and cover are not calculable for year-ends or 2026-09-30; the issuer states it for nine-month periods only. Closing this needs the fourth-quarter or annual issuer reconciliation.
Basis: EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 8

- High: The leverage here is on calculated reported EBITDA with TEGNA included from its closing date only, against debt that includes all acquisition borrowings, and FY2025 EBITDA carries an equity method impairment of USD 381 million. A pro forma full-year TEGNA earnings schedule and the credit agreement definitions would be needed to compare with the issuer's covenant ratios.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 18; EX-99.1_2026-11-05_nxst-ex99_1.htm.jsonl, page 4; calculation C11

- Medium: The legal rank and security of the assumed 2027 notes and the Mission facility are not established, so they are left out of the debt stack, and relative lien priority between the secured notes and the credit facilities is not stated. Executed documents would close this.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 24; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 26

- Medium: Gross interest expense and interest income are not separated in the income statement, which prints only net interest expense; interest cover therefore uses gross cash interest paid and no gross-interest cover is calculated.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 3

- Medium: Restricted cash is not presented at any supplied balance-sheet date and no balance is assumed to be zero; net debt subtracts all cash and cash equivalents and does not establish that all cash is unrestricted.
Basis: 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 2

- Low: Source dashes are treated as missing, not zero, for the lines marked as source dashes in the income statement and cash flow tables, including the FY2024 acquisitions line, the FY2025 gain and disposal lines, and the nine-month 2026 treasury stock line. The reported totals remain usable; explicit numeric disclosures would close these narrower gaps.
Basis: 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 92; 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5

- Low: No balance sheet is supplied at 2025-09-30, only closing cash from the cash flow statement, so there is no nine-month 2025 balance-sheet column and no prior-year interim leverage.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 5

- Low: Maintenance and growth capital expenditure are not split; total purchases of property and equipment are carried.
Basis: 10-K_2025-12-31_nxst-20251231.htm.jsonl, page 94

- Low: Segment history before the second quarter of 2026 is on a different segment definition, so only nine-month 2025 and 2026 segment figures are shown; full-year segment series are not built.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 41

- Low: Pension obligations are not separated from other noncurrent liabilities in the balance sheet table; the assumed TEGNA plan had a net noncurrent liability of USD 19 million at closing, and Nexstar's own plan status was not extracted.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 28

- Low: Operating cash flow after 2026-09-30 is not supplied, so the post-quarter repayments are shown as net debt neutral and no later cash balance is estimated; the dividend payable after the as-of date is calculated from the declared rate and the share count at 2026-11-05.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 51

- Low: The legal parent, the borrower and the note issuers are different entities; the guarantee and restricted-group perimeters are summarised in the filings but the executed documents are not supplied, so the consolidated statements are not tied to a restricted-group perimeter.
Basis: 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_nxst-20260930.htm.jsonl, page 54

## Next module

The orchestrator selects the next module.
