## Request

Financial foundation for Solaris Energy Infrastructure, Inc. (issuer sei-1697500), as of 2026-11-18, on the credit_snapshot pathway. The scope is normalised statements, debt, liquidity and credit metrics from the five supplied SEC filings, in US dollars.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_sei.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 (the date shown is the signature date) | 2025-03-05 | 8c21247efa2f6d585dbecf4b9b5ce1bce9bea5e8cfdea78711c1881131630672 | December 31, 2024 balance sheet as first reported; FY2023 and FY2024 comparatives; conflict check. |
| 10-K_2025-12-31_sei.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 (the date shown is the signature date) | 2026-02-26 | 1c296185e265a5c3bc40240b7cfe5cc86dc1d9fc635c3e2a92bda6d4544526ec | FY2024 and FY2025 income statement, cash flow and balance sheet columns; debt note; liquidity; customer concentration; segment note. |
| 10-Q_2026-03-31_sei.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 (the date shown is the signature date) | 2026-04-30 | 9ce9bae7de360e463170992f73470b5447cebc5ebd932208c50a793f3e6b2151 | March 31, 2026 balance sheet, debt table and liquidity. |
| 10-Q_2026-06-30_sei.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 (the date shown is the signature date) | 2026-08-06 | 756f226c1182fe3d80e442b6f0a49c6463ff3f7048d89c877473e9793cba14f1 | June 30, 2026 balance sheet, revolver availability and debt table. |
| 10-Q_2026-09-30_sei.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 (the date shown is the signature date) | 2026-11-06 | f599fee4fb96a0deeaccdbafea8d9f7cf470e04ad04ae0f9c0956a33871e3f94 | Q3 and nine-month 2026 and 2025 statements, September 30, 2026 balance sheet, debt note, maturities, interest cost, subsequent events, liquidity. |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | f3e65e3fe9035d3ddb841531128c62b3452c4b06cd0677b328fdcfeb65680f58 | Source status, gaps and the October 2026 events flagged as subsequent events. |

## Findings

### Bottom line

Reported leverage has risen from 3.29x at FY2024 to 8.83x on last-twelve-months EBITDA at September 30, 2026 because debt-funded growth capital expenditure and part-period acquisitions are running ahead of earnings, so creditors depend on contracted leases commencing as planned.
Basis: calculation C24; calculation C30; 10-Q_2026-09-30_sei.htm.jsonl, page 38

Debt at carrying value, including convertible notes, was USD 2,599.8 million at September 30, 2026 against cash of USD 399.5 million, and the USD 1.25 billion of senior notes issued on October 1, 2026 sits outside every statement. Reported EBITDA is after USD 57.5 million of losses on debt extinguishment over the last twelve months; excluding them leverage is 7.39x. Interest cover of 21.08x on cash interest paid flatters, because that cash figure is net of capitalised interest and the first coupon on the 2031 senior notes is payable only on November 15, 2026; interest cost incurred was USD 76.7 million in 9M 2026 against USD 11.2 million paid.
Basis: calculation C57; calculation C58; calculation C59; calculation C34; calculation C32; calculation C61; calculation C60; 10-Q_2026-09-30_sei.htm.jsonl, pages 63–65

### Analysis by dimension

Total debt at carrying value rose from USD 315.730 million at FY2024 to USD 1,064.460 million at FY2025 and USD 2,599.801 million at September 30, 2026, while reported EBITDA rose from USD 95.949 million to USD 178.220 million for FY2025 and USD 294.488 million for the last twelve months. Debt has grown faster than earnings because the 2025 convertible notes and the May 2026 senior notes fund turbine purchases and acquisitions before the leased equipment earns revenue, so reported leverage moved from 3.29x to 5.97x and then 8.83x. Creditors are therefore exposed to the pace at which new capacity commences rather than to current earnings.
Basis: calculation C6; calculation C7; calculation C10; calculation C11; calculation C12; calculation C18; calculation C30; 10-Q_2026-09-30_sei.htm.jsonl, page 79

Cover on cash interest paid was 8.37x in FY2024, 7.95x in FY2025 and 21.08x over the last twelve months, but the latest figure is flattered: cash interest of USD 13.971 million is after interest capitalised on assets under construction and before the first coupon on the 2031 senior notes. On interest expense the cover is 6.04x, and on total interest cost incurred in 9M 2026 it is 3.55x, the figure closest to the 3.00x minimum in the revolving credit facility although that covenant uses a definition the filing does not print. Cover on cash interest is likely to fall once full coupons on the 2031 and 2032 senior notes are paid.
Basis: calculation C26; calculation C29; calculation C32; calculation C41; calculation C42; 10-Q_2026-09-30_sei.htm.jsonl, pages 39, 44

Operating cash flow of USD 573.941 million over the last twelve months includes customer prepayments, with deferred revenue adding USD 207.248 million and contract liabilities USD 77.546 million in 9M 2026, which fund operations without interest and are not earnings. Capital expenditure of USD 1,636.870 million is far above operating cash flow, so free cash flow was a negative USD 1,062.929 million and the gap was financed by borrowing and equity issuance.
Basis: calculation C20; calculation C21; calculation C43; 10-Q_2026-09-30_sei.htm.jsonl, pages 10, 38

Cash of USD 399.460 million plus revolver availability of USD 525.0 million, after USD 125.0 million of letters of credit, gives USD 924.460 million at September 30, 2026 against purchase commitments of USD 1,323.9 million, before the net proceeds of the October 2026 senior notes. Those proceeds, not operating cash flow, are the main source for the roughly USD 1 billion of capital expenditure still planned for 2026.
Basis: calculation C40; 10-Q_2026-09-30_sei.htm.jsonl, pages 45, 60, 70

Three definition choices move the results: reported EBITDA carries USD 57.535 million of losses on debt extinguishment, so leverage is 8.83x against 7.39x without them; cash interest paid is net of capitalised interest; and consolidated debt includes the non-recourse Stateline term loan of USD 408.2 million. The December 31, 2024 balance sheet differs by USD 7.577 million between the two annual reports, which affects neither equity nor the debt figures.
Basis: calculation C23; calculation C34; 10-Q_2026-09-30_sei.htm.jsonl, pages 11, 45; 10-K_2024-12-31_sei.htm.jsonl, pages 87–88; 10-K_2025-12-31_sei.htm.jsonl, page 85

Events after the balance sheet are kept out of period figures: the USD 1.25 billion senior notes, the USD 200.0 million increase in revolving commitments and the USD 25.0 million Stateline draw. Pro forma net debt is established only for the Stateline draw, at USD 2,225.341 million or 7.56x, because the net proceeds of the senior notes are stated only approximately and no pro forma balance sheet or EBITDA is printed. The missing pro forma EBITDA for the 2026 acquisitions and the unprinted covenant EBITDA are the gaps that most restrict any run-rate or headroom conclusion.
Basis: calculation C55; calculation C56; 10-Q_2026-09-30_sei.htm.jsonl, pages 22, 63–65

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_sei.htm.jsonl | Annual report on Form 10-K | Year ended December 31, 2024 with 2023 comparatives | USD | thousands (statements); millions (notes) | Consolidated Solaris Energy Infrastructure, Inc. | US GAAP | Tier 1 audited statements (BDO USA, P.C.) | December 31, 2024 balance sheet as first reported; FY2023 and FY2024 comparatives | Superseded for 2024 by the FY2025 annual report; deferred taxes shown net on the 2024 balance sheet |
| 10-K_2025-12-31_sei.htm.jsonl | Annual report on Form 10-K | Year ended December 31, 2025 with 2024 and 2023 comparatives | USD | thousands (statements); millions (notes) | Consolidated, including Solaris LLC and the Stateline variable interest entity | US GAAP | Tier 1 audited statements (BDO USA, P.C.) | FY2024 and FY2025 statement columns; debt note; maturities; liquidity | Convertible notes are the only note issue; no consolidated adjusted EBITDA |
| 10-Q_2026-03-31_sei.htm.jsonl | Quarterly report on Form 10-Q | Quarter ended March 31, 2026 | USD | thousands (statements); millions (notes) | Consolidated | US GAAP, unaudited | Tier 2b unaudited without auditor review | March 31, 2026 balance sheet and debt table | Bridge term loan and its covenants were repaid in May 2026 |
| 10-Q_2026-06-30_sei.htm.jsonl | Quarterly report on Form 10-Q | Quarter and six months ended June 30, 2026 | USD | thousands (statements); millions (notes) | Consolidated | US GAAP, unaudited | Tier 2b unaudited without auditor review | June 30, 2026 balance sheet, revolver availability and debt table | GESA acquisition appears only as a subsequent event |
| 10-Q_2026-09-30_sei.htm.jsonl | Quarterly report on Form 10-Q | Quarter and nine months ended September 30, 2026 | USD | thousands (statements); millions (notes) | Consolidated, including Omega and GESA from their acquisition dates | US GAAP, unaudited | Tier 2b unaudited without auditor review | Latest statements, debt, liquidity, commitments and subsequent events | October 2026 events fall after the balance-sheet date; pro forma only for revenue and net income |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Solaris Energy Infrastructure, Inc. | Registrant, parent and guarantor; issuer of the convertible notes | December 31 | USD | thousands in the statements | Consolidated group including Solaris LLC and Stateline Power, LLC | US GAAP | FY2023 to FY2025; Q1, Q2 and Q3 2026; 9M 2025 and 9M 2026 |
| Solaris Energy Infrastructure, LLC (Solaris LLC) | Operating subsidiary; issuer of the 2031 and 2032 senior notes and borrower under the revolving credit facility | December 31 | USD | No separate statements | Consolidated; owned with non-controlling unitholders | US GAAP | None separately |
| Stateline Power, LLC | Consolidated variable interest entity, 50.1% owned; borrower under the non-recourse Stateline term loan | December 31 | USD | millions in Note 2 summary | Consolidated; assets and liabilities summarised only | US GAAP | December 31, 2025 and September 30, 2026 balance summary |
| Subsidiary Guarantors | Guarantors of the senior notes and the revolving credit facility | December 31 | USD | No separate statements | Not named in the sources read | US GAAP | None |

Subsequent events after the September 30, 2026 balance sheet, kept out of period figures: on 2026-10-01 Solaris LLC issued USD 1.25 billion of 7.000% senior notes due 2032 at par with net proceeds of about USD 1.23 billion; on 2026-10-01 the revolving commitments rose by USD 200.0 million to USD 850.0 million and the letter of credit sublimit from USD 150.0 million to USD 325.0 million; after September 30, 2026 Stateline drew a further USD 25.0 million, taking its term loan to USD 433.2 million; in the fourth quarter of 2026 seven turbines were secured for about USD 163.0 million in cash; on 2026-10-27 a dividend of USD 0.12 per share was approved; and on 2026-10-29 a 15-year agreement for about 900 MW was signed.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Statement figures in thousands converted to the money unit US$m | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-03-31_sei.htm.jsonl; 10-Q_2026-06-30_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Unit conversion | 2,599,801 USD thousands | 2,599.801 US$m | The money unit is millions even where a statement prints thousands | All money tables |
| EBITDA (Reported) built from components because the issuer prints no consolidated EBITDA | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Calculated | Not stated by the issuer | 272,601 USD thousands for 9M 2026 | Issuer definition: net income plus depreciation and amortization, interest expense (income) and income tax | All income statement columns |
| FY2024 interest shown gross from the FY2025 annual report | 10-K_2024-12-31_sei.htm.jsonl; 10-K_2025-12-31_sei.htm.jsonl | Presentation | Interest expense, net 11,808 | Interest expense 13,272 and interest income 1,464 | The later report prints both lines; net is the same 11,808 | FY2024 |
| December 31, 2024 balance sheet taken from the FY2025 annual report | 10-K_2024-12-31_sei.htm.jsonl; 10-K_2025-12-31_sei.htm.jsonl | Source choice | Total assets 1,122,881 | Total assets 1,130,458 | Latest presentation, with deferred tax liabilities 7,577 shown gross; both logged in the conflict register | FY2024 |
| Receivables at December 31, 2025 kept as the annual report prints them | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Presentation | Receivables 91,387 and contract assets 11,697 in the September 2026 report | Receivables 103,084 | The two lines add to the annual report figure | FY2025 |
| Total Debt includes the convertible notes line at carrying value; lease liabilities on their own lines are left out | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Classification | Long-term debt lines only | Long-term debt lines plus convertible notes | The convertible notes are balance-sheet debt | All balance sheet columns |
| EBITDA excluding losses on debt extinguishment (analyst judgement, labelled normalised) | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Normalisation | LTM EBITDA (Reported) 294.488 | LTM EBITDA excluding losses 352.023 | The losses of 41.451 in FY2025 and 16.084 in 9M 2026 are financing items inside the issuer EBITDA definition | LTM 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Service revenue | 263,206 | 349,848 | 84,140 | 199,236 | 257,582 | 400,449 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Service revenue - related parties | 13,465 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Leasing revenue | 36,420 | 272,357 | 82,422 | 90,598 | 183,421 | 301,680 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Product sales | Not supplied: line not presented in that period | Not supplied: line not presented in that period | 281 | 51,255 | 1,500 | 54,599 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Total revenue | 313,091 | 622,205 | 166,843 | 341,089 | 442,503 | 756,728 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Cost of services, excluding depreciation and amortization | 176,971 | 215,636 | 51,915 | 118,674 | 157,628 | 216,978 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Cost of leasing revenue, excluding depreciation | 7,950 | 121,158 | 36,613 | 25,327 | 77,390 | 114,480 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Cost of product sales | Not supplied: line not presented in that period | Not supplied: line not presented in that period | 275 | 33,365 | 744 | 37,798 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Non-leasing depreciation and amortization | 41,183 | 49,932 | 12,598 | 27,423 | 37,624 | 52,713 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Depreciation of leasing equipment | 6,035 | 34,353 | 9,757 | 24,061 | 23,172 | 63,047 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Gain on sale of Kingfisher facility | -7,461 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Gain on reversal of property tax contingency | -2,483 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Selling, general and administrative | 35,617 | 61,658 | 15,546 | 42,638 | 45,719 | 93,528 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Other operating expenses, net | 2,463 | 4,082 | 2,226 | 2,616 | 4,689 | 4,127 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Total operating costs and expenses | 260,275 | 486,819 | 128,930 | 274,104 | 346,966 | 582,671 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Operating income | 52,816 | 135,386 | 37,913 | 66,985 | 95,537 | 174,057 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Interest expense | -13,272 | -27,587 | -10,239 | -22,937 | -23,449 | -44,628 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Interest income | 1,464 | 6,732 | 1,201 | 6,180 | 3,758 | 14,386 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Loss on debt extinguishment | -4,085 | -41,451 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | -16,084 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Foreign currency gain (loss), net | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: the filing prints a dash | -1,132 | Not supplied: the filing prints a dash | -1,132 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Income before income tax expense | 36,923 | 73,080 | 28,875 | 49,096 | 75,846 | 126,599 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Provision for income taxes | -8,005 | -14,678 | -4,061 | -9,812 | -13,935 | -30,028 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Net income | 28,918 | 58,402 | 24,814 | 39,284 | 61,911 | 96,571 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Less: net income related to non-controlling interests | -13,110 | -28,233 | -10,264 | -4,684 | -30,086 | -20,047 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| Net income attributable to Solaris Energy Infrastructure, Inc. | 15,808 | 30,169 | 14,550 | 34,600 | 31,825 | 76,524 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| EBITDA (Reported) | 95,949 | 178,220 | 60,268 | 117,337 | 156,333 | 272,601 | USD thousands | Calculated: net income + depreciation and amortization + interest expense - interest income + income tax, the issuer definition; includes losses on debt extinguishment | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 28,918 | 58,402 | 61,911 | 96,571 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Depreciation and amortization | 47,218 | 84,285 | 60,796 | 115,760 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Gain on sale of Kingfisher facility | -7,461 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Stock-based compensation | 10,592 | 23,371 | 17,475 | 33,237 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Loss on debt extinguishment | 4,085 | 41,451 | Not supplied: the filing prints a dash | 16,084 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Amortization of debt financing costs | Not supplied: line not presented in that period | Not supplied: line not presented in that period | 2,085 | 7,664 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Deferred income tax expense | 6,467 | 16,093 | 12,343 | 30,029 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Change in payables related to Tax Receivable Agreement | -1,598 | 2,361 | 3,024 | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Other | 2,315 | 2,738 | -532 | 1,309 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Accounts receivable | -19,159 | -25,440 | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Accounts receivable and contract assets | Not supplied: line not presented in that period | Not supplied: line not presented in that period | -52,594 | -75,568 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Accounts receivable - related party | 2,378 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Deferred contract costs | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: the filing prints a dash | -22,744 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Prepaid expenses and other assets | -4,196 | -3,701 | -3,831 | -88,021 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Inventories | -2,251 | -3,132 | -1,207 | -23,190 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Accounts payable | -3,451 | 8,509 | 7,803 | 43,990 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Accrued liabilities | 4,951 | 7,027 | 7,814 | 58,089 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Contract liabilities | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: the filing prints a dash | 77,546 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Deferred revenue | -6,958 | 853 | 1,793 | 207,248 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Property tax contingency | -2,483 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Cash settlement of stock-based compensation | Not supplied: the filing prints a dash | -3,713 | -3,713 | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Net Cash from Operating Activities | 59,367 | 209,104 | 113,167 | 478,004 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Business acquisition, net of cash acquired | -122,065 | -29,200 | -29,423 | -103,861 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Asset acquisition, net of cash acquired | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: the filing prints a dash | -107,623 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Deposit for pending investment | Not supplied: the filing prints a dash | -10,000 | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Receivable from Sellers | -6,502 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Cash received from Sellers | 6,502 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Investment in property, plant and equipment and equipment held for lease | -188,419 | -646,757 | -392,256 | -1,382,369 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Proceeds from sale of Kingfisher facility | 5,000 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Proceeds from disposal of property, plant and equipment | 452 | 3,389 | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Short-term loan | -29,750 | -7,573 | -7,573 | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Repayment of short-term loan | 29,750 | 3,786 | 3,786 | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Other investing | Not supplied: line not presented in that period | Not supplied: line not presented in that period | 3,389 | -7,657 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Net Cash from Investing Activities | -305,032 | -686,355 | -422,077 | -1,601,510 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Capital contribution from non-controlling interest in Stateline | Not supplied: the filing prints a dash | 86,023 | 86,023 | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Share repurchases and retirements | -8,092 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Class A common stock offering | 160,875 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Distributions to non-controlling interest unitholders | -8,536 | -12,140 | -10,294 | -4,873 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Dividends paid to Class A common stock shareholders | -14,600 | -21,759 | -15,390 | -22,782 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Payments under finance leases | -2,991 | -3,240 | -2,424 | -2,604 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Proceeds from issuance of insurance notes payable | 3,553 | 4,535 | 4,535 | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Payments under insurance premium financing | -2,917 | -3,622 | -2,426 | -1,630 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Cancelled shares withheld for taxes from vesting of restricted stock and restricted stock units | -1,695 | -10,546 | -10,470 | -16,003 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Payment of liabilities under Tax Receivable Agreement | Not supplied: the filing prints a dash | -3,610 | -3,610 | -1,717 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Payment of fees related to Class A common stock offering | -5,252 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Borrowings from convertible notes | Not supplied: the filing prints a dash | 902,500 | 155,000 | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Borrowings from debt financing | 362,000 | 186,009 | 71,979 | 1,846,834 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Repayments of debt financing | -67,000 | -325,000 | -4,063 | -478,896 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Payments of fees related to debt extinguishment | -3,976 | -32,095 | Not supplied: the filing prints a dash | -5,921 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Payment for capped call transactions related to 2031 Notes | Not supplied: the filing prints a dash | -65,582 | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Payments of financing costs related to debt and convertible notes | -11,670 | -30,770 | -13,113 | -44,245 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Net Cash from Financing Activities | 399,699 | 670,703 | 255,747 | 1,268,163 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Net Cash Change | 154,034 | 193,452 | -53,163 | 144,657 | USD thousands | Reported: net increase (decrease) in cash, cash equivalents and restricted cash | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Opening Cash | 5,833 | 159,867 | 159,867 | 353,319 | USD thousands | Reported: cash, cash equivalents and restricted cash at beginning of period | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Closing Cash | 159,867 | 353,319 | 106,704 | 497,976 | USD thousands | Reported: cash, cash equivalents and restricted cash at end of period | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| Cash Interest Paid | 11,458 | 22,406 | 19,638 | 11,203 | USD thousands | Reported: interest paid, net of capitalized interest | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 114,255 | 353,319 | 344,468 | 824,101 | 399,460 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Restricted cash, current portion | 45,612 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | 6,037 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Accounts receivable, net of allowances | 71,774 | 103,084 | 148,321 | 210,024 | 284,199 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Contract assets | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | 45,980 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Deferred contract costs | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | 22,744 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Prepaid expenses and other current assets | 8,387 | 12,174 | 9,955 | 9,854 | 104,840 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Inventories, current portion | 10,948 | 14,446 | 18,064 | 25,112 | 50,737 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Total current assets | 250,976 | 483,023 | 520,808 | 1,069,091 | 913,997 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Equipment held for lease, net | 339,932 | 1,074,062 | 1,959,866 | 2,489,773 | 2,914,874 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Property, plant and equipment, net | 298,828 | 271,182 | 263,608 | 259,524 | 320,725 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Inventories, net of current portion | 1,693 | 1,327 | 1,227 | 1,229 | 1,514 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Non-current receivables, net of allowance | 1,069 | Not supplied: the filing prints a dash | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Operating lease right-of-use assets | 9,966 | 10,635 | 16,544 | 17,635 | 26,407 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Goodwill | 103,985 | 105,365 | 105,365 | 105,365 | 385,786 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Intangible assets, net | 71,521 | 59,795 | 72,738 | 69,203 | 263,630 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Deferred tax assets | 51,151 | 122,630 | 38,770 | 99,141 | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Restricted cash, net of current portion | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | 70,700 | 92,479 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Other assets | 1,337 | 15,087 | 16,999 | 30,657 | 31,938 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Total Assets | 1,130,458 | 2,143,106 | 2,995,925 | 4,212,318 | 4,951,350 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Accounts payable | 21,092 | 77,524 | 64,628 | 167,621 | 136,520 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Accrued liabilities | 23,159 | 67,558 | 48,637 | 56,215 | 128,605 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Contract liabilities | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | Not supplied: line not presented in that period | 86,998 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Deferred revenue, current portion | 4,924 | 5,777 | 29,400 | 18,004 | 14,467 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Payables related to Tax Receivable Agreement, current portion | 3,610 | 1,789 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Operating lease liabilities, current portion | 1,599 | 2,235 | 2,970 | 3,557 | 5,375 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Finance lease liabilities, current portion | 2,307 | 2,051 | 2,308 | 2,491 | 2,963 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Long-term debt, current portion | 8,125 | 4,033 | 319,729 | 11,391 | 44,308 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Other current liabilities | 717 | 2,333 | 411 | Not supplied: the filing prints a dash | 16,246 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Total current liabilities | 65,533 | 163,300 | 468,083 | 259,279 | 435,482 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Long-term debt, net of current portion | 307,605 | 179,986 | 395,368 | 1,597,592 | 1,671,617 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Convertible notes | Not supplied: the filing prints a dash | 880,441 | 881,581 | 882,726 | 883,876 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Payables related to Tax Receivable Agreement, net of current portion | 73,730 | 74,495 | 74,955 | 109,166 | 109,166 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Deferred revenue, net of current portion | Not supplied: line not presented in that period | Not supplied: line not presented in that period | 46,545 | 174,388 | 202,413 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Operating lease liabilities, net of current portion | 8,058 | 8,156 | 13,359 | 13,894 | 20,877 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Finance lease liabilities, net of current portion | 1,182 | 2,062 | 2,668 | 2,987 | 3,572 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Deferred tax liabilities | 7,577 | 7,371 | 8,640 | 11,675 | 32,098 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Other long-term liabilities | 44 | 44 | 44 | 44 | 153 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Total Liabilities | 463,729 | 1,315,855 | 1,891,243 | 3,051,751 | 3,359,254 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Class A common stock | 359 | 510 | 564 | 608 | 674 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Additional paid-in capital | 337,598 | 537,754 | 739,911 | 847,824 | 1,194,121 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Retained earnings | 17,664 | 26,074 | 40,590 | 53,544 | 79,818 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Total stockholders' equity attributable to Solaris Energy Infrastructure, Inc. | 355,621 | 564,338 | 781,065 | 901,976 | 1,274,613 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Non-controlling interest | 311,108 | 262,913 | 323,617 | 258,591 | 317,483 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Total Equity | 666,729 | 827,251 | 1,104,682 | 1,160,567 | 1,592,096 | USD thousands | Reported | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Total Debt | 315,730 | 1,064,460 | 1,596,678 | 2,491,709 | 2,599,801 | USD thousands | Calculated: long-term debt current portion + long-term debt net of current portion + convertible notes, at carrying value; lease liabilities on their own lines are not included | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| Cash & Equivalents | 114,255 | 353,319 | 344,468 | 824,101 | 399,460 | USD thousands | Reported: cash and cash equivalents, excluding restricted cash | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 6.375% Senior Notes due 2031 | Senior notes of Solaris LLC | 1,273.9 | 1,300.0 | 1,300.0 | Not applicable | Unsecured; guaranteed on a senior unsecured basis by the registrant and the Subsidiary Guarantors | Structurally senior to the convertible notes to the extent of the subsidiary guarantees; effectively junior to the revolving credit facility to the extent of its collateral | USD | 1,273.9 | Not applicable | 6.375% | Fixed | Not applicable | Not applicable | Not applicable | 2031-05-15 | 0 | 10-Q_2026-09-30_sei.htm.jsonl, pages 41–43 |
| Revolving Credit Facility | Senior secured revolving credit facility of Solaris LLC | 0.0 | 0.0 | 0.0 | 650.0 | First-priority security interest in substantially all assets of Solaris LLC and the subsidiary guarantors, and a pledge of the Solaris LLC equity | Effectively senior to the unsecured senior debt to the extent of the collateral | USD | 0.0 | Not applicable | Term SOFR plus 2.5% to 3.5%, or Base Rate plus 1.5% to 2.5% | Floating | Term SOFR | 250 to 350 | Not supplied: no floor is stated | 2031-05-12 | Not applicable | 10-Q_2026-09-30_sei.htm.jsonl, pages 43–45 |
| Stateline Term Loan | Delayed-draw term loan of Stateline Power, LLC | Not supplied: carrying value by instrument is not disclosed | 408.2 | 408.2 | 550.0 | Secured solely by Stateline equipment collateral and related contracts; non-recourse to the registrant | Not supplied: no source ranks it against the other debt | USD | 408.2 | Not applicable | 5.94% plus the greater of SOFR or 4.31% before conversion; 9.85% fixed after conversion | Floating before conversion, then fixed | SOFR | 594 | 431 | Not supplied: each advance has its own conversion date and a 72-month term | Not supplied: 80% amortises monthly after conversion, no annual schedule stated | 10-Q_2026-09-30_sei.htm.jsonl, pages 45–46 |
| Equipment financing | Financing agreements assumed with Omega and GESA | Not supplied: carrying value by instrument is not disclosed | 37.9 | 37.9 | Not supplied: no commitment is stated | Secured by the underlying financed equipment | Not supplied: no source ranks it against the other debt | USD | 37.9 | Not applicable | 0.0% to 16.5% | Not supplied: rate type is not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Q1 2027 to April 2031 | Not supplied: monthly installments, no annual schedule stated | 10-Q_2026-09-30_sei.htm.jsonl, pages 46–47 |
| 4.75% Convertible Senior Notes due 2030 | Convertible senior notes of the registrant | 150.6 | 155.0 | 155.0 | Not applicable | Unsecured (senior, unsecured obligations) | Structurally junior to the 2031 senior notes to the extent of the subsidiary guarantees | USD | 150.6 | Not applicable | 4.75% | Fixed | Not applicable | Not applicable | Not applicable | 2030-05-01 | 0 | 10-Q_2026-09-30_sei.htm.jsonl, pages 48–49; 10-K_2025-12-31_sei.htm.jsonl, page 120 |
| 0.25% Convertible Senior Notes due 2031 | Convertible senior notes of the registrant | 733.3 | 747.5 | 747.5 | Not applicable | Unsecured (senior, unsecured obligations) | Structurally junior to the 2031 senior notes to the extent of the subsidiary guarantees | USD | 733.3 | Not applicable | 0.25% | Fixed | Not applicable | Not applicable | Not applicable | 2031-10-01 | 0 | 10-Q_2026-09-30_sei.htm.jsonl, pages 48–49; 10-K_2025-12-31_sei.htm.jsonl, page 120 |
| Financing cost adjustment | Unamortised costs on instruments whose carrying value is not disclosed | -4.1 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -4.1 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_sei.htm.jsonl, pages 41, 43; calculation C53 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM | USD 622.205m | USD 756.728m | USD 442.503m | USD 936.430m | Calculated | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Full year plus current stub less prior-year stub; stubs are nine months to 2026-09-30 and 2025-09-30, all components printed |
| EBITDA (Reported) | LTM | USD 178.220m | USD 272.601m | USD 156.333m | USD 294.488m | Calculated | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Full year plus current stub less prior-year stub; stubs are nine months to 2026-09-30 and 2025-09-30, all components printed |
| Cash Interest Paid | LTM | USD 22.406m | USD 11.203m | USD 19.638m | USD 13.971m | Calculated | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Full year plus current stub less prior-year stub; stubs are nine months to 2026-09-30 and 2025-09-30, all components printed |
| Net Cash from Operating Activities | LTM | USD 209.104m | USD 478.004m | USD 113.167m | USD 573.941m | Calculated | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Full year plus current stub less prior-year stub; stubs are nine months to 2026-09-30 and 2025-09-30, all components printed |
| Capital expenditure | LTM | USD 646.757m | USD 1,382.369m | USD 392.256m | USD 1,636.870m | Calculated | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Full year plus current stub less prior-year stub; stubs are nine months to 2026-09-30 and 2025-09-30, all components printed |
| Interest expense | LTM | USD 27.587m | USD 44.628m | USD 23.449m | USD 48.766m | Calculated | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Full year plus current stub less prior-year stub; stubs are nine months to 2026-09-30 and 2025-09-30, all components printed |
| Loss on debt extinguishment | LTM | USD 41.451m | USD 16.084m | USD 0.000m | USD 57.535m | Calculated | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | Full year plus current stub less prior-year stub; stubs are nine months to 2026-09-30 and 2025-09-30, all components printed |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 315.730 | 10-K_2025-12-31_sei.htm.jsonl, page 85 | 95.949 | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86 | FY2024 / 2024-12-31 | USD | US$m | 3.29 | Calculated | Tier 1 audited statements | Reported EBITDA includes losses on debt extinguishment |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 201.475 | 10-K_2025-12-31_sei.htm.jsonl, page 85 | 95.949 | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86 | FY2024 / 2024-12-31 | USD | US$m | 2.10 | Calculated | Tier 1 audited statements | Reported EBITDA includes losses on debt extinguishment; cash excludes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 95.949 | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86 | 11.458 | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89 | FY2024 / 2024-12-31 | USD | US$m | 8.37 | Calculated | Tier 1 audited statements | Cash interest paid is net of capitalised interest |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,064.460 | 10-K_2025-12-31_sei.htm.jsonl, page 85 | 178.220 | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86 | FY2025 / 2025-12-31 | USD | US$m | 5.97 | Calculated | Tier 1 audited statements | Reported EBITDA includes losses on debt extinguishment |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 711.141 | 10-K_2025-12-31_sei.htm.jsonl, page 85 | 178.220 | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86 | FY2025 / 2025-12-31 | USD | US$m | 3.99 | Calculated | Tier 1 audited statements | Reported EBITDA includes losses on debt extinguishment; cash excludes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 178.220 | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86 | 22.406 | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89 | FY2025 / 2025-12-31 | USD | US$m | 7.95 | Calculated | Tier 1 audited statements | Cash interest paid is net of capitalised interest |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,599.801 | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 | 294.488 | T4.8 LTM; 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | 2026-09-30 | USD | US$m | 8.83 | Calculated | Tier 2b unaudited without auditor review | LTM reported EBITDA mixes part-period acquired results with full-period legacy results; October 2026 financing excluded |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,200.341 | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 | 294.488 | T4.8 LTM; 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | 2026-09-30 | USD | US$m | 7.47 | Calculated | Tier 2b unaudited without auditor review | LTM reported EBITDA mixes part-period acquired results with full-period legacy results; October 2026 financing excluded; cash excludes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 294.488 | T4.8 LTM; 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | 13.971 | T4.8 LTM; 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl | 2026-09-30 | USD | US$m | 21.08 | Calculated | Tier 2b unaudited without auditor review | Cash interest paid is net of capitalised interest and precedes the first coupon on the 2031 senior notes |
| Total debt / EBITDA excluding losses on debt extinguishment | Gross debt / (EBITDA (Reported) + losses on debt extinguishment) | 2,599.801 | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 | 352.023 | T4.3 normalisation | 2026-09-30 | USD | US$m | 7.39 | Estimated | Tier 2b unaudited without auditor review | Normalised; analyst judgement |
| Net debt / EBITDA excluding losses on debt extinguishment | Net debt / (EBITDA (Reported) + losses on debt extinguishment) | 2,200.341 | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 | 352.023 | T4.3 normalisation | 2026-09-30 | USD | US$m | 6.25 | Estimated | Tier 2b unaudited without auditor review | Normalised; analyst judgement |
| EBITDA margin | EBITDA (Reported) / Revenue x 100 | 294.488 | T4.8 LTM | 936.430 | T4.8 LTM | 2026-09-30 | USD | US$m | 31.45 | Calculated | Tier 2b unaudited without auditor review | Percent of LTM revenue |
| Revenue growth FY2025 over FY2024 | Revenue FY2025 / Revenue FY2024 - 1, x 100 | 622.205 | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86 | 313.091 | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86 | FY2025 / 2025-12-31 | USD | US$m | 98.73 | Calculated | Tier 1 audited statements | Percent; Power Solutions started in September 2024 |
| Capital expenditure / revenue | Capital expenditure / Revenue | 1,636.870 | T4.8 LTM | 936.430 | T4.8 LTM | 2026-09-30 | USD | US$m | 1.75 | Calculated | Tier 2b unaudited without auditor review | Growth capital expenditure on turbines; maintenance and growth are not split |
| Net cash from operating activities / total debt | Net cash from operating activities / Gross debt x 100 | 573.941 | T4.8 LTM | 2,599.801 | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 | 2026-09-30 | USD | US$m | 22.08 | Calculated | Tier 2b unaudited without auditor review | Percent; includes deferred revenue inflows of customers in operating cash flow |
| Cash plus undrawn revolver / total debt | (Cash + undrawn revolver) / Gross debt x 100 | 924.460 | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6, 45 | 2,599.801 | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 | 2026-09-30 | USD | US$m | 35.56 | Calculated | Tier 2b unaudited without auditor review | Percent; excludes restricted cash and the Stateline delayed-draw capacity |
| EBITDA / interest expense | EBITDA (Reported) / Interest expense | 294.488 | T4.8 LTM | 48.766 | T4.8 LTM | 2026-09-30 | USD | US$m | 6.04 | Calculated | Tier 2b unaudited without auditor review | Interest expense is after capitalised interest |
| EBITDA 9M 2026 / total interest cost incurred 9M 2026 | EBITDA (Reported) 9M 2026 / total interest cost | 272.601 | 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 | 76.700 | 10-Q_2026-09-30_sei.htm.jsonl, page 39 | 9M 2026 | USD | US$m | 3.55 | Calculated | Tier 2b unaudited without auditor review | Nine-month figures, not annualised; total interest cost includes capitalised interest of USD 32.1 million; not a covenant measure |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Operating | Weighted average deployed power capacity (MW) | Approximately 230 | Approximately 630 | 590 | 892 | Up | Period flow; FY figures are printed as approximate; Q3 2026 weighted average 818 against 760 in Q3 2025 |
| Operating | Weighted average fully utilized logistics systems (count) | 91 | 93 | 92 | 105 | Up | Period flow; Q3 2026 104 against 84 in Q3 2025 |
| Segment | Solaris Power Solutions revenue (USD millions) | 38.6 | 333.5 | 229.9 | 571.1 | Up | Issuer segment table, millions to one decimal; Power Solutions started in September 2024 |
| Segment | Solaris Logistics Solutions revenue (USD millions) | 274.5 | 288.7 | 212.6 | 185.6 | Down in 2026 | Lower last-mile transportation activity per the nine-month discussion |
| Segment | Total segment Adjusted EBITDA (USD millions) | 124.4 | 278.0 | 201.8 | 367.1 | Up | Issuer measure before corporate expenses and stock-based compensation; not a consolidated adjusted EBITDA |
| Segment | Corporate expenses (USD millions) | 21.3 | 33.8 | 26.4 | 39.1 | Up | Reconciling item between segment Adjusted EBITDA and pre-tax income |
| Concentration | Largest customer share of revenue (%) | 17% | 47% | 46% | 58% | Up | Largest single customer; FY2024 had three customers at 17%, 12% and 12%, FY2025 two at 47% and 13%, and 9M 2025 two at 46% and 12% |
| Capital | Consolidated capital expenditures (USD millions) | 188.4 | 646.8 | 392.3 | 1,382.4 | Up | Segment note; Power Solutions is almost all of it |
| Funding float | Deferred revenue plus contract liabilities, balance sheet date (USD thousands) | 4,924 | 5,777 | Not supplied: no 9M 2025 balance sheet is shown | 303,878 | Up | Customer advance lease payments and contract liabilities fund operations without interest: current deferred revenue 14,467, non-current 202,413 and contract liabilities 86,998 at 2026-09-30 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA is the issuer unadjusted EBITDA | Issuer defines EBITDA as net income plus D&A, interest expense (income) and income tax; prints only total segment Adjusted EBITDA | 10-Q_2026-09-30_sei.htm.jsonl, pages 14–15; 10-K_2025-12-31_sei.htm.jsonl, page 110 | All | High: 9M 2026 reported EBITDA 272.601 against total segment Adjusted EBITDA 367.1 | CP-1, CP-2 | Reported EBITDA built from statements and used for ratios; segment total shown as a KPI only |
| EBITDA | Reported EBITDA before normalisation | Losses on debt extinguishment are inside issuer EBITDA (net income based) | 10-K_2025-12-31_sei.htm.jsonl, page 86; 10-Q_2026-09-30_sei.htm.jsonl, page 7 | FY2025, 9M 2026, LTM | High: LTM losses of 57.535 move leverage from 8.83x to 7.39x | CP-1, CP-2 | Reported figure used; normalised twin shown and labelled analyst judgement |
| Cash interest | Cash interest paid is the coverage denominator | Interest paid is stated net of capitalised interest | 10-Q_2026-09-30_sei.htm.jsonl, pages 11, 39 | FY2024, FY2025, LTM | High: LTM cash interest 13.971 against interest expense 48.766 and 9M 2026 total interest cost 76.7 | CP-1, CP-2 | Cash interest paid used as method requires; interest expense and total interest cost cover shown beside it |
| Total Debt | Carrying value, net of issuance costs | Principal and carrying value are both printed | 10-Q_2026-09-30_sei.htm.jsonl, pages 41, 48 | 2026-09-30 | Medium: principal 2,648.6 against carrying value 2,599.801, difference 48.799 | CP-1, CP-2 | Carrying value used; principal kept in the reconciliation |
| Net debt | Debt less unrestricted cash | Restricted cash of 6.037 current and 92.479 non-current at 2026-09-30 is collateral for letters of credit and holdbacks | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 | 2026-09-30 | Medium: 98.516 excluded from cash | CP-1, CP-2 | Unrestricted cash only |
| Net debt | Group debt including consolidated subsidiaries | Stateline term loan of 408.2 is non-recourse and consolidated with a 50.1% owned entity | 10-Q_2026-09-30_sei.htm.jsonl, pages 12–13, 45–46 | 2025 to 2026 | Medium: 408.2 of 2,599.8 carrying value | CP-1, CP-2 | Included in consolidated Total Debt; flagged for restricted-group work |
| Balance sheet at 2024-12-31 | One presentation per date | FY2024 annual report total assets 1,122,881; FY2025 annual report 1,130,458 | 10-K_2024-12-31_sei.htm.jsonl, pages 87–88; 10-K_2025-12-31_sei.htm.jsonl, page 85 | FY2024 | Low: 7,577 deferred taxes shown gross in the later report, equity 666,729 in both | CP-1 | FY2025 annual report column used |
| Revenue classification | Comparable revenue lines | FY2025 annual report prints Service revenue and Leasing revenue only; 2025 nine-month comparatives in the 2026 report show Product sales of 1,500 separately | 10-K_2025-12-31_sei.htm.jsonl, page 85; 10-Q_2026-09-30_sei.htm.jsonl, page 6 | FY2025 against 9M 2025 | Low: product sales appear small in 2025 | CP-1 | Lines kept as printed; product sales shown not supplied for annual columns |
| Subsequent events | Period figures at the balance-sheet date only | October 2026 events are described in the notes | 10-Q_2026-09-30_sei.htm.jsonl, pages 63–65 | 2026-09-30 | High: USD 1.25 billion notes issue | CP-1, CP-2 | Kept out of period figures; listed in the post-balance-sheet table |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and coverage on reported EBITDA at FY2024, FY2025 and 2026-09-30 | Ready with Limitations | Reported EBITDA is built from statements; LTM mixes part-period acquisitions; cash interest is net of capitalised interest | Read the normalised and interest-expense cover rows beside the fixed rows |
| Liquidity at 2026-09-30 | Ready with Limitations | Cash 399.460 and revolver availability 525.0 are stated; October 2026 financing is after the date | Use the post-balance-sheet rows only as labelled events |
| Debt maturity profile | Ready | Principal ladder adds to 2,648.6; the thereafter bucket is the issuer bucket | Treat the FY2031 row as 2031 and later |
| Pro forma leverage after the October 2026 notes | Not Ready | Net proceeds are stated only as approximately USD 1.23 billion; no pro forma balance sheet or EBITDA | Obtain pro forma figures from the issuer |
| Covenant headroom | Not Ready | Covenant EBITDA and reported covenant ratios are not printed | Obtain the compliance certificate and credit agreement definitions |
| Run-rate leverage after the 2026 acquisitions | Not Ready | Pro forma is printed for revenue and net income only | Obtain pro forma EBITDA |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 3.29 | 2.10 | x | Reported EBITDA of the fiscal year; gross debt at carrying value including convertible notes |
| FY2025 / 2025-12-31 | 5.97 | 3.99 | x | Reported EBITDA of the fiscal year; gross debt at carrying value including convertible notes |
| 2026-09-30 | 8.83 | 7.47 | x | Reported EBITDA for the last twelve months to 2026-09-30 (calculated); the October 2026 senior notes and part-period acquisitions are not reflected |

Leverage on the 2026-09-30 row uses last-twelve-months reported EBITDA that mixes part-period acquired results with full-period legacy results and excludes the October 2026 senior notes.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 8.37 | x | Cash interest paid net of capitalised interest; reported EBITDA |
| FY2025 / 2025-12-31 | 7.95 | x | Cash interest paid net of capitalised interest; reported EBITDA |
| 2026-09-30 | 21.08 | x | Cash interest paid net of capitalised interest, before the first coupon on the 2031 senior notes; interest expense cover is 6.04x and 9M 2026 cover on total interest cost is 3.55x |

Cover uses cash interest paid net of capitalised interest, which flatters the 2026-09-30 row.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 114.255 | 36.8 | US$m | 2024 annual report: cash excludes restricted cash of 45.612; undrawn is the Bank of America revolver availability under its borrowing base |
| FY2025 / 2025-12-31 | 353.319 | 59.9 | US$m | 2025 annual report: undrawn is the Bank of America revolver availability under its borrowing base; Stateline delayed-draw capacity of 332.5 is excluded as non-recourse |
| 2026-03-31 | 344.468 | Not supplied: the March 2026 report states no undrawn committed facility; the Bank of America revolver was terminated on 2026-03-16 | US$m | March 2026 report: cash only; the bridge term loan was fully drawn |
| 2026-06-30 | 824.101 | 575.0 | US$m | June 2026 report: revolver commitments of 650.0 less letters of credit of 75.0, nothing drawn; restricted cash of 70.7 excluded |
| 2026-09-30 | 399.460 | 525.0 | US$m | September 2026 report: revolver commitments of 650.0 less letters of credit of 125.0, nothing drawn; restricted cash of 98.516 and the separate cash-collateralised letter of credit line of 90.6 excluded; commitments rose to 850.0 on 2026-10-01 |

Undrawn committed facilities are the revolver only, net of letters of credit; restricted cash and the Stateline delayed-draw capacity are excluded.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 2.5 | US$m | Remainder of 2026 (the issuer row 2026 remainder): term debt 2.5, convertible notes none |
| FY2027 | 57.1 | US$m | Term debt 57.1, convertible notes none |
| FY2028 | 62.9 | US$m | Term debt 62.9, convertible notes none |
| FY2029 | 56.0 | US$m | Term debt 56.0, convertible notes none |
| FY2030 | 209.8 | US$m | Term debt 54.8 plus 2030 convertible notes 155.0 |
| FY2031 | 2,260.3 | US$m | The issuer Thereafter bucket: term debt 1,512.8 (including the 2031 senior notes of 1,300.0) plus 2031 convertible notes 747.5; later years are not split |

The FY2031 row is the issuer's Thereafter bucket, so it holds 2031 and any later maturities.

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 315.730 | 114.255 | 201.475 | US$m | Long-term debt current and non-current at carrying value; no convertible notes; excludes finance lease liabilities of 3.489, operating lease liabilities and restricted cash; principal total 325.0; Stateline non-recourse loan included |
| FY2025 / 2025-12-31 | 1,064.460 | 353.319 | 711.141 | US$m | Long-term debt current and non-current plus convertible notes at carrying value; excludes finance lease liabilities of 4.113, operating lease liabilities and restricted cash; principal total 1,088.5; Stateline non-recourse loan included |
| 2026-03-31 | 1,596.678 | 344.468 | 1,252.210 | US$m | Long-term debt current and non-current plus convertible notes at carrying value; excludes finance lease liabilities of 4.976, operating lease liabilities and restricted cash; principal total 1,626.8; Stateline non-recourse loan included |
| 2026-06-30 | 2,491.709 | 824.101 | 1,667.608 | US$m | Long-term debt current and non-current plus convertible notes at carrying value; excludes finance lease liabilities of 5.478, operating lease liabilities and restricted cash; principal total 2,542.2; Stateline non-recourse loan included |
| 2026-09-30 | 2,599.801 | 399.460 | 2,200.341 | US$m | Long-term debt current and non-current plus convertible notes at carrying value; excludes finance lease liabilities of 6.535, operating lease liabilities and restricted cash; principal total 2,648.6; Stateline non-recourse loan included |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 2,648.6 | -48.799 | 2,599.801 | US$m | Principal is the issuer ladder total of term debt 1,746.1 and convertible notes 902.5; reconciling items are unamortised debt financing costs of -48.8 (30.2 on the debt table, 4.4 and 14.2 on the convertible notes) and 0.001 of rounding between the notes (millions to one decimal) and the balance sheet (thousands) |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Issue of USD 1.25 billion 7.000% senior notes due 2032 by Solaris LLC | 2026-10-01 | Not supplied: net proceeds are stated only as approximately USD 1.23 billion | Not supplied: the effect of the issue on net debt cannot be worked exactly | Not supplied: depends on the pro forma net debt | US$m | 10-Q_2026-09-30_sei.htm.jsonl, pages 63–65; gross debt rises by the principal less about USD 22.8 million of financing costs and cash by the net proceeds; use of proceeds is not yet reflected; no pro forma balance sheet or EBITDA is printed |
| Additional draw on the Stateline term loan to USD 433.2 million | Not supplied: the source states after September 30, 2026 only | 25.0 | 2,225.341 | 7.56 | US$m | 10-Q_2026-09-30_sei.htm.jsonl, pages 65, 69; proceeds were used for growth capital expenditure, so cash is unchanged and net debt rises by the draw; leverage on LTM reported EBITDA; other October events are not included |
| Seven turbines secured for about USD 163.0 million in cash | Not supplied: the source states the fourth quarter of 2026 only | Not supplied: the source states the price, not when it was paid | Not supplied: depends on the payment date | Not supplied: depends on the pro forma net debt | US$m | 10-Q_2026-09-30_sei.htm.jsonl, page 63; a cash purchase would raise net debt by the amount paid; not reflected in any figure |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 313.091 | 95.949 | US$m | Adjusted EBITDA column holds reported EBITDA (issuer definition, calculated); twelve months |
| FY2025 / 2025-12-31 | 622.205 | 178.220 | US$m | Adjusted EBITDA column holds reported EBITDA (issuer definition, calculated); twelve months |
| 2026-09-30 | 936.430 | 294.488 | US$m | Adjusted EBITDA column holds reported EBITDA (calculated); last twelve months to 2026-09-30; part-period acquired results |

The Adjusted EBITDA column holds reported EBITDA on the issuer definition, because no consolidated adjusted EBITDA is printed.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Revolving Credit Facility | 1 | Yes | 0.0 | 0.00 | US$m | Drawn amount; commitments 650.0; guaranteed by the registrant and restricted subsidiaries and secured on substantially all assets of Solaris LLC and the subsidiary guarantors |
| 6.375% Senior Notes due 2031 | 2 | No | 1,273.9 | 4.33 | US$m | Carrying value of 1,300.0 principal; issued by Solaris LLC, guaranteed by the registrant and the subsidiary guarantors; effectively junior to the revolver to the extent of collateral |
| 4.75% Convertible Senior Notes due 2030 | 3 | No | 150.6 | 4.84 | US$m | Carrying value of 155.0 principal; obligation of the registrant; structurally junior to the senior notes; ranks with the 2031 convertible notes as the notes carry the same description |
| 0.25% Convertible Senior Notes due 2031 | 3 | No | 733.3 | 7.33 | US$m | Carrying value of 747.5 principal; obligation of the registrant; cumulative leverage on LTM reported EBITDA; Stateline term loan and equipment financing are left out because no source states their legal rank |

The stack omits the Stateline term loan and the equipment financing because no source states their legal rank.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), LTM to 2026-09-30 | Not supplied: the issuer prints no consolidated adjusted EBITDA to bridge to | US$m | Opening measure is reported EBITDA of 294.488; the issuer states only total segment Adjusted EBITDA before corporate expenses |
| Adjusted EBITDA, as specified by the method | Not supplied: the issuer prints no consolidated adjusted EBITDA | US$m | No add-back list reconciles reported EBITDA to a consolidated adjusted measure, so no bridge is drawn |

No bridge is drawn because the issuer prints no consolidated adjusted EBITDA.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| Revenue | 313.091 | 622.205 | 936.430 | US$m | Reported; LTM calculated |
| EBITDA (Reported) | 95.949 | 178.220 | 294.488 | US$m | Calculated on the issuer definition; includes losses on debt extinguishment |
| EBITDA margin | 30.65 | 28.64 | 31.45 | % | Reported EBITDA over revenue |
| Total debt (carrying value) | 315.730 | 1,064.460 | 2,599.801 | US$m | LTM column is the balance at 2026-09-30 |
| Net debt | 201.475 | 711.141 | 2,200.341 | US$m | Debt less unrestricted cash |
| Total debt / EBITDA | 3.29 | 5.97 | 8.83 | x | Reported EBITDA |
| Net debt / EBITDA | 2.10 | 3.99 | 7.47 | x | Reported EBITDA |
| EBITDA / cash interest | 8.37 | 7.95 | 21.08 | x | Cash interest paid net of capitalised interest |
| Net cash from operating activities | 59.367 | 209.104 | 573.941 | US$m | Reported; LTM calculated |
| Capital expenditure | 188.419 | 646.757 | 1,636.870 | US$m | Investment in property, plant and equipment and equipment held for lease |
| Free cash flow (operating cash flow less capital expenditure) | -129.052 | -437.653 | -1,062.929 | US$m | Calculated; negative because growth capital expenditure exceeds operating cash flow |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| Q2 2026 | 2026-04-01 | 2026-06-30 |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 28 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 14 |
| Fields total | 14 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 7 |
| MINOR | 8 |

## Calculations

Each figure below was worked from the statements and notes in US$m unless stated; rounded figures quoted in the narrative are restated at the end.

| ID | Calculation | Formula and inputs | Result | Unit | Source |
| --- | --- | --- | --- | --- | --- |
| C1 | Net debt FY2024 / 2024-12-31 | Gross debt 315.730 less cash 114.255 | 201.475 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| C2 | Net debt FY2025 / 2025-12-31 | Gross debt 1,064.460 less cash 353.319 | 711.141 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| C3 | Net debt 2026-03-31 | Gross debt 1,596.678 less cash 344.468 | 1,252.210 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| C4 | Net debt 2026-06-30 | Gross debt 2,491.709 less cash 824.101 | 1,667.608 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| C5 | Net debt 2026-09-30 | Gross debt 2,599.801 less cash 399.460 | 2,200.341 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| C6 | Gross debt FY2024 / 2024-12-31 | Long-term debt current 8.125 + long-term debt net of current 307.605 + convertible notes 0.000 | 315.730 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| C7 | Gross debt FY2025 / 2025-12-31 | Long-term debt current 4.033 + long-term debt net of current 179.986 + convertible notes 880.441 | 1,064.460 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| C8 | Gross debt 2026-03-31 | Long-term debt current 319.729 + long-term debt net of current 395.368 + convertible notes 881.581 | 1,596.678 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| C9 | Gross debt 2026-06-30 | Long-term debt current 11.391 + long-term debt net of current 1,597.592 + convertible notes 882.726 | 2,491.709 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| C10 | Gross debt 2026-09-30 | Long-term debt current 44.308 + long-term debt net of current 1,671.617 + convertible notes 883.876 | 2,599.801 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 84–85 (FY2024, FY2025); 10-Q_2026-03-31_sei.htm.jsonl, pages 6–7 (Q1 2026); 10-Q_2026-06-30_sei.htm.jsonl, pages 6–7 (Q2 2026); 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6 (Q3 2026) |
| C11 | EBITDA (Reported) FY2024 | Net income 28.918 + D&A 47.218 + interest expense 13.272 - interest income 1.464 + income tax 8.005 | 95.949 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| C12 | EBITDA (Reported) FY2025 | Net income 58.402 + D&A 84.285 + interest expense 27.587 - interest income 6.732 + income tax 14.678 | 178.220 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| C13 | EBITDA (Reported) Q3 2025 | Net income 24.814 + D&A 22.355 + interest expense 10.239 - interest income 1.201 + income tax 4.061 | 60.268 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| C14 | EBITDA (Reported) Q3 2026 | Net income 39.284 + D&A 51.484 + interest expense 22.937 - interest income 6.180 + income tax 9.812 | 117.337 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| C15 | EBITDA (Reported) 9M 2025 | Net income 61.911 + D&A 60.796 + interest expense 23.449 - interest income 3.758 + income tax 13.935 | 156.333 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| C16 | EBITDA (Reported) 9M 2026 | Net income 96.571 + D&A 115.760 + interest expense 44.628 - interest income 14.386 + income tax 30.028 | 272.601 | US$m | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| C17 | LTM revenue to 2026-09-30 | FY2025 622.205 + 9M 2026 756.728 - 9M 2025 442.503 | 936.430 | US$m | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl |
| C18 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 178.220 + 9M 2026 272.601 - 9M 2025 156.333 | 294.488 | US$m | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl |
| C19 | LTM cash interest paid to 2026-09-30 | FY2025 22.406 + 9M 2026 11.203 - 9M 2025 19.638 | 13.971 | US$m | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl |
| C20 | LTM net cash from operating activities to 2026-09-30 | FY2025 209.104 + 9M 2026 478.004 - 9M 2025 113.167 | 573.941 | US$m | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl |
| C21 | LTM capital expenditure (investment in property, plant and equipment and equipment held for lease) to 2026-09-30 | FY2025 646.757 + 9M 2026 1,382.369 - 9M 2025 392.256 | 1,636.870 | US$m | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl |
| C22 | LTM interest expense to 2026-09-30 | FY2025 27.587 + 9M 2026 44.628 - 9M 2025 23.449 | 48.766 | US$m | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl |
| C23 | LTM loss on debt extinguishment to 2026-09-30 | FY2025 41.451 + 9M 2026 16.084 - 9M 2025 0.000 | 57.535 | US$m | 10-K_2025-12-31_sei.htm.jsonl; 10-Q_2026-09-30_sei.htm.jsonl |
| C24 | Total debt / EBITDA FY2024 / 2024-12-31 | 315.730 / 95.949 | 3.29 | x | calculation C6 |
| C25 | Net debt / EBITDA FY2024 / 2024-12-31 | 201.475 / 95.949 | 2.10 | x | calculation C1 |
| C26 | EBITDA / cash interest FY2024 / 2024-12-31 | 95.949 / 11.458 | 8.37 | x | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| C27 | Total debt / EBITDA FY2025 / 2025-12-31 | 1,064.460 / 178.220 | 5.97 | x | calculation C7 |
| C28 | Net debt / EBITDA FY2025 / 2025-12-31 | 711.141 / 178.220 | 3.99 | x | calculation C2 |
| C29 | EBITDA / cash interest FY2025 / 2025-12-31 | 178.220 / 22.406 | 7.95 | x | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| C30 | Total debt / EBITDA 2026-09-30 | 2,599.801 / 294.488 | 8.83 | x | calculation C10 |
| C31 | Net debt / EBITDA 2026-09-30 | 2,200.341 / 294.488 | 7.47 | x | calculation C5 |
| C32 | EBITDA / cash interest 2026-09-30 | 294.488 / 13.971 | 21.08 | x | 10-K_2025-12-31_sei.htm.jsonl, pages 88–89; 10-Q_2026-09-30_sei.htm.jsonl, pages 9–11 |
| C33 | EBITDA (Reported) LTM excluding losses on debt extinguishment (analyst judgement) | 294.488 + 57.535 | 352.023 | US$m | calculation C18 |
| C34 | Total debt / EBITDA excluding losses on debt extinguishment, LTM 2026-09-30 | 2,599.801 / 352.023 | 7.39 | x | calculation C33 |
| C35 | Net debt / EBITDA excluding losses on debt extinguishment, LTM 2026-09-30 | 2,200.341 / 352.023 | 6.25 | x | calculation C33 |
| C36 | EBITDA margin, LTM 2026-09-30 (percent) | 294.488 / 936.430 x 100 | 31.45 | % | calculations C18, C17 |
| C37 | Revenue growth FY2025 over FY2024 (percent) | (622.205 / 313.091 - 1) x 100 | 98.73 | % | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 6–7 |
| C38 | Capital expenditure / revenue, LTM 2026-09-30 | 1,636.870 / 936.430 | 1.75 | x | calculations C21, C17 |
| C39 | Net cash from operating activities / total debt, LTM 2026-09-30 (percent) | 573.941 / 2,599.801 x 100 | 22.08 | % | calculations C20, C10 |
| C40 | Cash plus undrawn revolver / total debt, 2026-09-30 (percent) | (399.460 + 525.000) / 2,599.801 x 100 | 35.56 | % | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6, 45; calculation C10 |
| C41 | EBITDA / interest expense, LTM 2026-09-30 | 294.488 / 48.766 | 6.04 | x | calculations C18, C22 |
| C42 | EBITDA 9M 2026 / total interest cost incurred 9M 2026 (including capitalised interest) | 272.601 / 76.700 | 3.55 | x | 10-Q_2026-09-30_sei.htm.jsonl, page 39; calculation C16 |
| C43 | Free cash flow LTM 2026-09-30: net cash from operating activities less capital expenditure | 573.941 - 1,636.870 | -1,062.929 | US$m | calculations C20, C21 |
| C44 | Contractual principal at 2026-09-30 | 2.5 + 57.1 + 62.9 + 56.0 + 209.8 + 2,260.3 | 2,648.6 | US$m | 10-Q_2026-09-30_sei.htm.jsonl, page 48 |
| C45 | Reconciling items, principal to carrying value, 2026-09-30 | 2,599.801 - 2,648.6 | -48.799 | US$m | calculations C10, C44 |
| C46 | Unamortised debt financing costs, 2026-09-30 | Debt table 30.2 + 2030 convertible notes 4.4 + 2031 convertible notes 14.2 | 48.8 | US$m | 10-Q_2026-09-30_sei.htm.jsonl, pages 41, 49 |
| C47 | Rounding inside the reconciling items (notes in millions to one decimal, balance sheet in thousands) | Reconciling items -48.799 less unamortised costs -48.8 | 0.001 | US$m | calculations C45, C46 |
| C48 | Cumulative debt through the revolving credit facility / LTM EBITDA (Reported) | 0.0 / 294.488 | 0.00 | x | 10-Q_2026-09-30_sei.htm.jsonl, pages 41–43, 49 |
| C49 | Cumulative debt through the 2031 senior notes / LTM EBITDA (Reported) | 1,273.9 / 294.488 | 4.33 | x | 10-Q_2026-09-30_sei.htm.jsonl, pages 41–43, 49 |
| C50 | Cumulative debt through the 2030 convertible notes / LTM EBITDA (Reported) | 1,424.5 / 294.488 | 4.84 | x | 10-Q_2026-09-30_sei.htm.jsonl, pages 41–43, 49 |
| C51 | Cumulative debt through the 2031 convertible notes / LTM EBITDA (Reported) | 2,157.8 / 294.488 | 7.33 | x | 10-Q_2026-09-30_sei.htm.jsonl, pages 41–43, 49 |
| C52 | Carrying value of the 2031 senior notes, 2026-09-30 | 1,300.0 principal less 26.1 unamortised debt financing costs | 1,273.9 | US$m | 10-Q_2026-09-30_sei.htm.jsonl, page 43 |
| C53 | Financing cost adjustment for instruments with no disclosed carrying value | Total unamortised 30.2 less 26.1 on the 2031 senior notes | 4.1 | US$m | 10-Q_2026-09-30_sei.htm.jsonl, pages 41, 43 |
| C54 | Instrument amounts plus adjustment, 2026-09-30 | 1,273.9 + 0.0 + 408.2 + 37.9 + 150.6 + 733.3 - 4.1 | 2,599.8 | US$m | 10-Q_2026-09-30_sei.htm.jsonl, pages 41, 49 |
| C55 | Pro forma net debt after the Stateline draw | 2,200.341 + 25.000 | 2,225.341 | US$m | 10-Q_2026-09-30_sei.htm.jsonl, page 65; calculation C5 |
| C56 | Pro forma net debt / LTM EBITDA (Reported) after the Stateline draw | 2,225.341 / 294.488 | 7.56 | x | calculations C55, C18 |
| C57 | Total debt at carrying value including convertible notes, 2026-09-30, rounded | Rounded for the narrative: 2,599.801 US$m | USD 2,599.8 million | USD | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6, 41, 49 |
| C58 | Cash and cash equivalents, 2026-09-30, rounded | Rounded for the narrative: 399.460 US$m | USD 399.5 million | USD | 10-Q_2026-09-30_sei.htm.jsonl, pages 5–6, 77 |
| C59 | Losses on debt extinguishment in the last twelve months, rounded | Rounded for the narrative: 57.535 US$m | USD 57.5 million | USD | 10-K_2025-12-31_sei.htm.jsonl, page 86; 10-Q_2026-09-30_sei.htm.jsonl, page 7 |
| C60 | Cash interest paid, 9M 2026, rounded | Rounded for the narrative: 11.203 US$m | USD 11.2 million | USD | 10-Q_2026-09-30_sei.htm.jsonl, page 11 |
| C61 | Total interest cost incurred, 9M 2026 | As printed: 76.7 as printed | USD 76.7 million | USD | 10-Q_2026-09-30_sei.htm.jsonl, page 39 |
| C62 | Senior notes issued on October 1, 2026 | As printed: 1.25 billion principal as printed | USD 1.25 billion | USD | 10-Q_2026-09-30_sei.htm.jsonl, page 63 |

## Gaps

| Gap | Severity | What it restricts | Action to close | Source |
| --- | --- | --- | --- | --- |
| The issuer prints no consolidated EBITDA or adjusted EBITDA, only total segment Adjusted EBITDA of USD 367.1 million for 9M 2026 before corporate expenses, so reported EBITDA is built from net income, depreciation and amortization, interest and tax and no adjusted twin of the ratios is stated. | Medium | Adjusted leverage and coverage, and the EBITDA bridge. | Obtain the issuer consolidated adjusted EBITDA or covenant EBITDA. | 10-Q_2026-09-30_sei.htm.jsonl, pages 14–15; 10-K_2025-12-31_sei.htm.jsonl, page 110 |
| No pro forma EBITDA, debt or interest is printed for the Omega, GESA and Genco acquisitions; pro forma is given for revenue and net income only, so last-twelve-months EBITDA mixes part-period and full-period results. | High | Run-rate leverage and coverage at 2026-09-30. | Obtain pro forma EBITDA for the acquisitions. | 10-Q_2026-09-30_sei.htm.jsonl, pages 16–24 |
| The senior notes issued on October 1, 2026 state net proceeds only as about USD 1.23 billion and no pro forma balance sheet is printed, so pro forma net debt and net leverage for the issue are not established; the date of the Stateline draw and the payment date for seven turbines are not stated. | Medium | Pro forma net debt and net leverage after October 2026. | Obtain the issuer pro forma balance sheet. | 10-Q_2026-09-30_sei.htm.jsonl, pages 63–65 |
| Covenant EBITDA and the reported covenant ratios are not printed, although the filing states compliance at September 30, 2026. | High | Covenant headroom. | Obtain the compliance certificate and credit agreement definitions. | 10-Q_2026-09-30_sei.htm.jsonl, page 44 |
| Cash interest paid is net of capitalised interest: USD 11.203 million in 9M 2026 against total interest cost of USD 76.7 million, of which USD 32.1 million was capitalised, and the first coupon on the 2031 senior notes is payable on November 15, 2026, so cover on cash interest paid overstates cover. | Medium | The interest-cover figures at 2026-09-30. | Read the interest expense and total interest cost cover beside it. | 10-Q_2026-09-30_sei.htm.jsonl, pages 11, 39, 42 |
| Carrying values by instrument are not printed for the Stateline term loan or the equipment financing; only total unamortised costs of USD 30.2 million are given, so USD 4.1 million of costs is shown as one adjustment. | Low | Instrument-level carrying values. | Obtain instrument-level carrying values. | 10-Q_2026-09-30_sei.htm.jsonl, pages 41, 43 |
| No source states the legal rank of the Stateline term loan or the equipment financing against the other debt, so both are left out of the debt stack. | Medium | The debt stack and cumulative leverage. | Obtain the executed loan documents. | 10-Q_2026-09-30_sei.htm.jsonl, pages 45–47 |
| Maintenance and growth capital expenditure are not split in the filings (searched maintenance capital and maintenance capex), so only total capital expenditure is carried. | Low | Free cash flow before growth spending. | Obtain the issuer split. | 10-K_2025-12-31_sei.htm.jsonl, page 88; 10-Q_2026-09-30_sei.htm.jsonl, pages 10, 14–15 |
| Statement lines the filings print as a dash, for example service revenue from related parties in FY2025 and the Tax Receivable Agreement payable at September 30, 2026, are shown as not supplied rather than zero. | Low | Those lines in the affected columns. | None needed for the credit metrics. | 10-K_2025-12-31_sei.htm.jsonl, pages 85–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 5–7 |
| Lines the filings do not present in a period, for example product sales in the annual columns and contract assets, deferred contract costs, contract liabilities and non-current deferred revenue before 2026, are shown as not supplied. | Low | Line-by-line comparison across periods. | None needed for the credit metrics. | 10-K_2025-12-31_sei.htm.jsonl, pages 84–86; 10-Q_2026-09-30_sei.htm.jsonl, pages 5–7 |
| The December 31, 2024 balance sheet differs between the 2024 and 2025 annual reports by USD 7.577 million in total assets, deferred tax assets and total liabilities; the later column is used and equity is the same. | Low | The FY2024 balance sheet column. | None; both figures are logged. | 10-K_2024-12-31_sei.htm.jsonl, pages 87–88; 10-K_2025-12-31_sei.htm.jsonl, page 85 |
| No income statement or cash flow column is included for Q1 2026, Q2 2026 or the first half of 2025, so leverage and cover are stated at FY2024, FY2025 and 2026-09-30 only; the March and June 2026 balance sheets give net debt and liquidity without a ratio. | Low | Leverage trend between FY2025 and 2026-09-30. | Add interim last-twelve-months columns if the trend is needed. | 10-Q_2026-03-31_sei.htm.jsonl, pages 6–9; 10-Q_2026-06-30_sei.htm.jsonl, pages 6–10 |
| The March 31, 2026 report states no undrawn committed facility; the Bank of America revolver was terminated on 2026-03-16 and the new facility began on 2026-05-12, so undrawn facilities at that date are not supplied. | Low | The liquidity figure at 2026-03-31. | None needed for the latest period. | 10-Q_2026-03-31_sei.htm.jsonl, pages 30, 51; 10-Q_2026-09-30_sei.htm.jsonl, pages 43, 47 |
| The Stateline non-recourse term loan of USD 408.2 million sits inside consolidated debt and no restricted-group statements are printed, so leverage for the group that owes the senior notes is not established. | Medium | Leverage for the restricted group. | Obtain restricted-group financial information. | 10-Q_2026-09-30_sei.htm.jsonl, pages 12–13, 44–46 |
| The FY2025 annual report prints no product sales line while the 2026 report shows product sales of USD 1,500 thousand for 9M 2025, so annual and quarterly revenue lines are not strictly comparable. | Low | Revenue by type across annual and interim columns. | None needed for total revenue. | 10-K_2025-12-31_sei.htm.jsonl, page 85; 10-Q_2026-09-30_sei.htm.jsonl, page 6 |

## Next module

The orchestrator selects the next module.
