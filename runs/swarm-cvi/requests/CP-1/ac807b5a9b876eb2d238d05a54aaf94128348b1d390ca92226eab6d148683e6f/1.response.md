---
issuer_id: cvi
module_id: CP-1
analysis_date: 2026-11-05
run_id: cvi-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
evidence_class: full_run
---
# CVR ENERGY INC - Financial foundation, as of 2026-11-05

## Request
CVR ENERGY INC (issuer id cvi), as of 2026-11-05, credit snapshot pathway. This module builds the issuer's financial statements, debt and net debt, liquidity, constructed last-twelve-month figures and credit metrics from the seven supplied filings and releases, on the consolidated CVR Energy, Inc. perimeter. It uses the Source readiness module output for the evidence limits and no other earlier module output.

## Sources
| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_cvi-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-18 | 11b2ae0e09456bfa771d4cab8a17d5e6eecebad270822a0aa27a6321ae3e1326 | Audited FY2025 and FY2024 statements, debt and lease notes, liquidity, cash requirements, non-GAAP reconciliation, segment note |
| 10-Q_2026-03-31_cvi-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-29 | 0d5ec22f9043f7de61004c1d3fc3166812200367bbaae195e5e1fbdd81619bfc | March 31, 2026 cash, debt and liquidity as an interim cross-check of the 2026 financing |
| 10-Q_2026-06-30_cvi-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-29 | 358aaec14a40e7fb2473ba1f5c1574588c88cdab98ea0a6156b8c6e07d430343 | June 30, 2026 cash, debt and liquidity as an interim cross-check of the 2026 financing |
| 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-03 | c1bc2003ec1856161a58b4e8e6474dd136cd1e6864fe6be884dd4ce7689172a8 | Latest balance sheet, nine-month statements, debt note, liquidity, supplemental cash flow, segment note, non-GAAP reconciliation, pending acquisition |
| EX-99.1_2026-04-29_exhibit991-cviq12026earnin.htm.jsonl | Exhibit 99.1 press release, first quarter 2026 results | 2026-04-29 | ec1426d7dc5a0e9978dd49bcfe1d59907ecfcc63064a0912a9028158f50040e7 | March 31, 2026 debt and cash by segment, as an interim cross-check |
| EX-99.1_2026-07-29_exhibit991-cviq22026earnin.htm.jsonl | Exhibit 99.1 press release, second quarter 2026 results | 2026-07-29 | 1459a1187a6f9d055543784814ad9e46560c18ce90ff9327aed9062ea6d7d429 | June 30, 2026 debt and cash by segment, as an interim cross-check |
| EX-99.1_2026-11-03_d897437dex991.htm.jsonl | Exhibit 99.1 press release, third quarter 2026 results | 2026-11-03 | a8afdbbc4ca0ef0b0aa3933661eb6fa3f49fab4f6b6643dc433309cf920a00ae | Cash and debt by segment, declared dividend and distribution, free cash flow, fourth quarter outlook, non-GAAP reconciliation |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 341f6d6d18a1cef5aafa0f3dcc12be394109eaf5840a3d3ac714eb1fe2bac0b4 | Source gate, readiness limits and the list of documents; no figure was taken from it without the source being re-read |

## Findings
### Bottom line
Leverage looks low at 1.85x reported EBITDA, but it rests on a record third quarter and excludes the pending USD 4,200 million refinery acquisition, so creditors should read it as a peak-earnings snapshot.

Total debt was USD 1,781 million and net debt USD 503 million at September 30, 2026, with USD 1,853 million of cash and undrawn facilities and no note maturity before 2028. On Adjusted EBITDA the figure is 1.94x, and Q3 2026 supplies 63.33% of last-twelve-months Adjusted EBITDA of USD 919 million. How the acquisition is financed is not established in the sources.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 8, 16, 56 and 59; calculation C1; calculation C6; calculation C9

### Key findings
Debt barely moved while earnings changed the ratios. Total debt was USD 1,919 million at the end of 2024, USD 1,765 million at the end of 2025 and USD 1,781 million at September 30, 2026, while last-twelve-months reported EBITDA rose from USD 394 million in FY2024 and USD 591 million in FY2025 to USD 964 million. Total debt to EBITDA therefore fell from 4.87x to 2.99x and then 1.85x, and net debt to EBITDA from 2.37x to 2.12x and then 0.52x. The mechanism is operating, not balance-sheet: the nine-month 2026 refining result carried the figure, so creditors hold a ratio that depends on refining margins they do not control.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 115 and 150–151; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 16 and 56; calculation C2; calculation C3

Reported EBITDA is flattered by non-cash refining-obligation gains, so the adjusted measure is the better coverage base. Favorable changes in the Renewable Fuel Standard obligation sit in reported EBITDA and are removed from Adjusted EBITDA: USD 262 million in FY2025 and USD 190 million in the first nine months of 2026, which includes the USD 253 million liability removed by the August 2026 waiver. The 2026 adjustment also adds back USD 278 million of unrealized derivative losses and removes USD 173 million of favorable inventory valuation. EBITDA to cash interest was 4.16x reported against 2.77x adjusted in FY2025, and is 7.30x reported against 6.96x adjusted over the last twelve months. A creditor who sized FY2025 cover on the reported figure would have overstated it by 1.39x.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56; calculation C4; calculation C5

The last twelve months hold one record quarter, and the rest were far weaker. Implied fourth-quarter 2025 Adjusted EBITDA was USD 91 million (the annual USD 393 million less nine months of USD 302 million), the first half of 2026 added USD 246 million, and Q3 2026 alone was USD 582 million, which the company calls the best quarter in its history, so the last twelve months of USD 919 million hold 63.33% from one quarter. Had Q3 2026 matched the USD 180 million of Q3 2025, last-twelve-months Adjusted EBITDA would be USD 517 million and total debt to Adjusted EBITDA 3.44x, an illustration rather than a forecast. The low leverage and 6.96x adjusted cover are therefore as fragile as one quarter's refining margins, and the fourth-quarter outlook the company gives covers operations and capital spending only, not earnings.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, pages 1 and 10; calculation C6; calculation C7; calculation C24; calculation C25

Cash generation was real but part of it is timing. Operating cash flow was USD 1,026 million over nine months of 2026 against USD 144 million a year earlier, and capital expenditure plus turnaround spending fell to USD 154 million from USD 326 million as the next turnaround is not until 2027. Of the operating cash flow, USD 132 million is accrued income tax not yet paid and USD 278 million is a non-cash derivative loss added back, so the tax payable is a cash call still to come. Cash rose by USD 767 million to USD 1,278 million even after USD 20 million of dividends and USD 70 million of distributions to the nitrogen unitholders, and the company-defined free cash flow was USD 878 million.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 10, 15 and 27; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, pages 8 and 11; calculation C8

Liquidity is ample and nothing is drawn, but not all of the cash is freely available. Cash of USD 1,278 million plus USD 530 million available under the CVR Energy credit facility (USD 550 million of available capacity less USD 20 million of letters of credit) and USD 45 million under the CVR Partners facility gives USD 1,853 million, up from USD 807 million at the end of 2025. Cash was USD 512 million at March 31 and USD 737 million at June 30 on total debt of USD 1,784 million and USD 1,783 million, so the build came in the third quarter. Of the cash, USD 158 million sits in CVR Partners, which is consolidated but is a separate borrower with its own secured notes and credit facility, and the company has agreed to hold at least USD 500 million of unrestricted cash until the acquisition closes or the agreement terminates. The CVR Energy facility matures in February 2031 and the CVR Partners facility in September 2028, so no committed line expires within twelve months.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 8, 11, 16 and 59; 10-Q_2026-03-31_cvi-20260331.htm.jsonl, pages 7 and 14; 10-Q_2026-06-30_cvi-20260630.htm.jsonl, pages 7 and 13; calculation C9; calculation C10

The 2026 refinancing cleared the near-term wall and left a 2028 cluster. In February 2026 the company issued USD 1,000 million of new senior notes and used them to repay the USD 157 million term loan, redeem all USD 600 million of the 2029 notes and redeem USD 217 million of the 2028 notes. Contractual principal is now USD 1,733 million, of which USD 733 million falls due in 2028: USD 183 million of unsecured 2028 notes at CVR Energy and USD 550 million of secured 2028 notes at CVR Partners. The fixed coupons on these notes come to about USD 120.71 million a year, and the carrying value of USD 1,781 million exceeds principal by USD 48 million because finance leases of USD 61 million sit inside debt and USD 13 million of issuance costs are deducted.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 150–157; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 16–17; calculation C11; calculation C12; calculation C13

The consolidated figures combine two separate creditor groups. CVR Partners carries USD 569 million of debt net of current portion, including its secured 2028 notes of USD 550 million, and USD 158 million of cash, and the filings do not describe any CVR Energy guarantee of it, while the three CVR Energy notes of USD 1,183 million are expressly not guaranteed by CVR Partners. Noncontrolling holders took USD 70 million of distributions in nine months, cash that leaves the consolidated total without reaching CVR Energy's own creditors. Holders of the CVR Energy notes therefore rely on the petroleum business and on distributions that the partnership shares with outside unitholders, and the 0.52x consolidated net leverage nets nitrogen cash against the debt of both groups, so it cannot be read as the position of CVR Energy's own noteholders.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 8, 10, 11 and 16; 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 151, 153 and 157; calculation C26

Several claims sit outside the debt figure. The accrued renewable fuel obligation was USD 230 million at September 30, 2026 against USD 72 million at the end of 2025, derivative liabilities were USD 160 million, and accrued income taxes USD 132 million, all inside other current liabilities and none in debt. At the end of 2025 the company also reported purchase commitments of USD 165 million and transportation agreements of USD 995 million, and operating lease liabilities of USD 64 million; these are outside the debt figure and are cash calls that compete with debt service. Lawsuits over an ammonia release, environmental claims in Kansas and a guaranty dispute are not quantified, so they are a limit on certainty rather than a number.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 15, 24 and 25; 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 120–121 and 150

The pending acquisition is the main event after the balance sheet date and is not in any figure above. On November 2, 2026 the company agreed to buy two refineries and related assets from Marathon Petroleum for about USD 4,200 million in cash, backed by a commitment for a 364-day secured bridge of up to USD 2,500 million, USD 550 million of extra credit-facility commitments, a USD 800 million convertible preferred placement and up to USD 500 million of equity from the controlling holder. The sources do not say how much of the bridge will be drawn or when the deal closes, so pro forma debt and leverage are not established; a termination fee of 2% to 6% of the base price applies if the agreement ends in specified ways. A declared dividend of USD 10 million is payable on November 23, 2026.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 11–12 and 59; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 2; calculation C14

### Contrary evidence and what would change the view
The view that leverage is a peak reading has real counter-evidence. Net debt of USD 503 million is only 0.52x reported EBITDA and 0.55x Adjusted EBITDA, liquidity of USD 1,853 million exceeds total debt by USD 72 million, no note or loan matures before 2028, the company states it complied with all covenants at September 30, 2026, and the third quarter alone produced free cash flow of USD 593 million. The quarter that drops out of the window next is the weak fourth quarter of 2025, so if refining margins stay near the third-quarter level the last twelve months would rise again and the favorable reading would hold. The view weakens further if the acquisition closes with the bridge drawn in full, because USD 2,500 million of new secured debt would rank ahead of the unsecured notes on any pledged assets against USD 919 million of last-twelve-months Adjusted EBITDA, or 2.72x.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 12, 17 and 59; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 11; calculation C9; calculation C15

### Limitations
The interim figures are unaudited and the adjusted measure is company-defined. No credit agreement or indenture was supplied, so covenant levels and headroom, borrowing-base mechanics and the post-amendment pricing of the CVR Energy facility are not established. The fourth quarter of 2025 is not supplied on its own, so last-twelve-months figures are built from the annual report and the nine-month comparatives. The September 30, 2025 balance sheet is not supplied. Segment presentation changed in 2026, with the renewables business moved into other, so segment series are not comparable across the annual and 2026 columns. The pending acquisition is outside every balance-sheet figure, and no ratings, market prices or peer data were supplied.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 175; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 11–12 and 26

### T4.1 Source register
| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_cvi-20251231.htm.jsonl | Annual report | FY2025, FY2024 and FY2023; balance sheets at 2025-12-31 and 2024-12-31 | USD | millions | CVR Energy, Inc. consolidated, CVR Partners, LP as a variable interest entity | US GAAP | Tier 1 audited statements | FY2025 and FY2024 statement columns, debt and lease notes, non-GAAP reconciliation | Unqualified audit opinion of Grant Thornton LLP dated 2026-02-18 (page 128); segment presentation precedes the 2026 change |
| 10-Q_2026-03-31_cvi-20260331.htm.jsonl | Quarterly report | Three months to 2026-03-31 | USD | millions | CVR Energy, Inc. consolidated | US GAAP, condensed | Tier 2b unaudited without auditor review | Interim cross-check of cash 512, debt 1,784 and liquidity | Condensed notes; no figure of the tables is taken from it |
| 10-Q_2026-06-30_cvi-20260630.htm.jsonl | Quarterly report | Three and six months to 2026-06-30 | USD | millions | CVR Energy, Inc. consolidated | US GAAP, condensed | Tier 2b unaudited without auditor review | Interim cross-check of cash 737, debt 1,783 and liquidity | Condensed notes; no figure of the tables is taken from it |
| 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Quarterly report | Three and nine months to 2026-09-30; balance sheet at 2026-09-30 | USD | millions | CVR Energy, Inc. consolidated, CVR Partners, LP as a variable interest entity | US GAAP, condensed | Tier 2b unaudited without auditor review | 9M 2026 and 9M 2025 columns, latest balance sheet, debt, liquidity, supplemental cash flow | Unaudited; acquisition described but not in the balance sheet |
| EX-99.1_2026-04-29_exhibit991-cviq12026earnin.htm.jsonl | Earnings release | Q1 2026 | USD | millions | Consolidated and by segment | Company-defined non-GAAP beside US GAAP | Tier 2b issuer release | Cross-check of segment debt and cash at 2026-03-31 | Company-defined adjusted measures |
| EX-99.1_2026-07-29_exhibit991-cviq22026earnin.htm.jsonl | Earnings release | Q2 2026 and H1 2026 | USD | millions | Consolidated and by segment | Company-defined non-GAAP beside US GAAP | Tier 2b issuer release | Cross-check of segment debt and cash at 2026-06-30 | Company-defined adjusted measures |
| EX-99.1_2026-11-03_d897437dex991.htm.jsonl | Earnings release | Q3 2026 and 9M 2026 | USD | millions | Consolidated and by segment | Company-defined non-GAAP beside US GAAP | Tier 2b issuer release | Cash and debt by segment, free cash flow, dividend and distribution, outlook | Company-defined adjusted measures; where it differs from the 10-Q the filing controls |

Sufficiency: the income statement, cash flow statement and balance sheet are each supported for FY2025, FY2024, 9M 2026 and (income statement and cash flow only) 9M 2025; KPIs are partly supported.

### T4.2 Entity period key
| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| CVR Energy, Inc. | Issuer and reporting entity; issuer of the 2028, 2031 and 2034 senior notes | December 31 | USD | millions | Consolidated, including CVR Partners, LP | US GAAP | FY2025, FY2024, 9M 2026, 9M 2025; balance sheets 2025-12-31, 2024-12-31, 2026-09-30 |
| CVR Partners, LP with CVR Nitrogen Finance Corporation | Consolidated variable interest entity; issuer of the 6.125% senior secured notes due 2028 and borrower under its own credit facility | December 31 | USD | millions | CVR Energy holds about 37% of common units and 100% of general partner interests | US GAAP | Within the consolidated columns above; cash 158 at 2026-09-30 |
| Petroleum Segment subsidiaries (credit parties of the CVR Energy credit facility) | Borrowers and guarantors of the CVR Energy credit facility and, until repaid in February 2026, the term loan | December 31 | USD | millions | Part of the consolidated perimeter | US GAAP | Segment data FY2025, FY2024, 9M 2026, 9M 2025 |

Subsequent events flagged with dates, kept out of period figures: purchase agreement for two Marathon Petroleum refineries on 2026-11-02; dividend and distribution declared on 2026-11-03 and payable on 2026-11-23.

### T4.3 Normalization register
| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Total Liabilities derived as total current liabilities plus total long-term liabilities, because the balance sheet prints no total | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 | Derivation | Not supplied: no printed total | 2,808; 3,375; 3,523 | Needed for the balance sheet identity; matches the total liabilities of 3,523 printed in the third quarter release | FY2025; FY2024; 9M 2026 |
| Total Debt set to long-term debt and finance lease obligations net of current portion plus the current portion shown in other current liabilities | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 131 and 151; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 8 and 16 | Aggregation | 1,751; 1,907; 1,769 | 1,765; 1,919; 1,781 | Carrying value of every debt line the issuer carries, current plus long-term, with finance leases carried inside the debt lines | FY2025; FY2024; 9M 2026 |
| Two depreciation and amortization lines of the income statement combined for EBITDA | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56 | Aggregation | 394 and 9; 290 and 8; 232 and 5; 251 and 7 | 403; 298; 237; 258 | Issuer EBITDA reconciliation adds back the total | FY2025; FY2024; 9M 2026; 9M 2025 |
| Last-twelve-months figures built as the latest full year plus the current nine months less the prior-year nine months | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 115, 132 and 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 9, 10, 27 and 56 | Construction | Not supplied: no reported twelve-month figure | See the constructed period register | The fourth quarter of 2025 is not supplied on its own | 2026-09-30 |
| Segment sales shown on a third-party basis so they add to consolidated net sales | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 175; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 27 | Presentation | Segment totals including inter-segment sales | Third-party sales | Inter-segment sales are eliminated in consolidation | FY2025; FY2024; 9M 2026; 9M 2025 |
| Opening cash of FY2024 taken as printed, including reserved funds and restricted cash | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133 | Definition | Cash and cash equivalents of 581 at 2023-12-31 | 1,186 | The cash flow statement reconciles cash, reserved funds and restricted cash, not cash alone; the identity holds on that basis | FY2024 |

### T4.4 Income statement
| Line item | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net sales | 7,162 | 7,610 | 8,000 | 5,352 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Third-party sales: Petroleum Segment | 6,416 | 6,909 | 7,472 | 4,769 | USD millions | Reported; segment schedule on a third-party basis | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 159; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 18 |
| Third-party sales: Renewables Segment (2025 annual report presentation) | 141 | 177 | Not supplied: renewables is within Other from 2026 | Not supplied: renewables is within Other from 2026 | USD millions | Reported; a separate segment only in the annual report | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 159 |
| Third-party sales: Nitrogen Fertilizer Segment | 605 | 524 | 528 | 474 | USD millions | Reported; segment schedule on a third-party basis | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 159; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 18 |
| Third-party sales: Other, renewable fuel activity (2026 quarterly report presentation) | Not supplied: not a line of the annual report | Not supplied: not a line of the annual report | Not supplied: printed as a dash | 109 | USD millions | Reported; a new row because the segment perimeter changed | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 18 and 27 |
| Corporate and eliminations (third-party basis) | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | USD millions | Third-party sales need no elimination; inter-segment sales are shown in the segment note | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 175; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 27 |
| Cost of materials and other | 5,722 | 6,448 | 6,398 | 4,195 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Direct operating expenses (exclusive of depreciation and amortization) | 700 | 667 | 573 | 503 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Depreciation and amortization (within cost of sales) | 394 | 290 | 232 | 251 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Cost of sales | 6,816 | 7,405 | 7,203 | 4,949 | USD millions | Reported; the three lines above add to it | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Selling, general and administrative expenses (exclusive of depreciation and amortization) | 148 | 139 | 131 | 115 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Depreciation and amortization (outside cost of sales) | 9 | 8 | 5 | 7 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Other operating expenses, net | 7 | Not supplied: printed as a dash | 4 | 4 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Operating income | 182 | 58 | 657 | 277 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Interest expense, net | -108 | -77 | -105 | -79 | USD millions | Reported as an expense (negative); 9M 2026 includes loss on extinguishment of debt of 32 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Other income, net | 6 | 38 | 19 | 5 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Income before income taxes | 80 | 19 | 571 | 203 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Income tax (benefit) expense | -10 | -26 | 122 | -3 | USD millions | Reported; an expense is positive and a benefit negative | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Net income | 90 | 45 | 449 | 206 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Less: Net income attributable to noncontrolling interest | 63 | 38 | 74 | 69 | USD millions | Reported; arises only from CVR Partners | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Net income attributable to CVR Energy stockholders | 27 | 7 | 375 | 137 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Total depreciation and amortization (EBITDA reconciliation) | 403 | 298 | 237 | 258 | USD millions | Reported; the two income statement lines combined | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56 |
| EBITDA (Reported) | 591 | 394 | 913 | 540 | USD millions | Issuer-stated EBITDA: net income plus interest expense, net, income tax and depreciation and amortization, before any adjustment | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56 |
| EBITDA (Adjusted) | 393 | 317 | 828 | 302 | USD millions | Company-defined Adjusted EBITDA: removes changes in the refining obligation, unrealized derivative gains and losses and inventory valuation impacts, and in FY2024 a gain on sale of an equity method investment | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56 |

Adjusted EBITDA bridge add-backs, as the issuer labels them: FY2025 changes in the RFS liability (262) classified as other stated, realisation not stated; unrealized gain on derivatives (4) other stated, not stated; inventory valuation impacts 66 other stated, not stated; other non-cash adjustments 2 other stated, not stated. The 9M 2026 add-backs are in the bridge chart table below.

### T4.5 Cash flow statement
| Line item | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 90 | 45 | 449 | 206 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Depreciation and amortization | 403 | 298 | 237 | 258 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Loss on lower of cost or net realizable value adjustment | 12 | 5 | Not supplied: printed as a dash | 12 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Deferred income taxes and unrecognized tax benefits | -8 | -50 | -24 | -3 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Loss (gain) asset write-downs and asset disposals | 7 | -24 | Not supplied: not a line of the quarterly statement | Not supplied: not a line of the quarterly statement | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133 |
| Loss on extinguishment of debt | Not supplied: not a line of the annual statement | Not supplied: not a line of the annual statement | 32 | 2 | USD millions | Reported | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Unrealized (gain) loss on derivatives, net | -4 | 22 | 278 | 6 | USD millions | Reported; a gain is negative | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Share-based compensation | 42 | 15 | 38 | 37 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Income from equity method investments | -4 | -13 | Not supplied: not a line of the quarterly statement | Not supplied: not a line of the quarterly statement | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133 |
| Return from equity method investment earnings | 5 | 13 | Not supplied: not a line of the quarterly statement | Not supplied: not a line of the quarterly statement | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133 |
| Other items | 10 | 7 | 10 | 11 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Change in accounts receivable | 60 | -9 | -229 | 42 | USD millions | Reported; working capital change | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Change in inventories | 8 | 96 | -184 | -27 | USD millions | Reported; working capital change | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Change in prepaid expenses and other current assets | -11 | -21 | 14 | -11 | USD millions | Reported; working capital change | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Change in accounts payable | -143 | 2 | 200 | -137 | USD millions | Reported; working capital change | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Change in deferred revenue | -34 | 29 | Not supplied: not a line of the quarterly statement | Not supplied: not a line of the quarterly statement | USD millions | Reported; working capital change | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133 |
| Change in accrued income taxes | Not supplied: not a line of the annual statement | Not supplied: not a line of the annual statement | 132 | Not supplied: printed as a dash | USD millions | Reported; working capital change | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Change in other current liabilities | -289 | -11 | 73 | -252 | USD millions | Reported; working capital change | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Net Cash from Operating Activities | 144 | 404 | 1,026 | 144 | USD millions | Reported; before and after working capital the split is the working capital lines above | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Capital expenditures | -185 | -179 | -152 | -130 | USD millions | Reported cash amount, excluding turnaround; the maintenance and growth split is in the capital spending rows below | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Turnaround expenditures | -197 | -53 | -2 | -196 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Capital expenditures, maintenance (capital spending disclosure) | 134 | Not supplied: the annual report splits 2025 only | 98 | 90 | USD millions | Reported; positive spending on an accrual basis, excluding turnaround, so it differs from the cash flow line | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 119–120; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 60; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 8 |
| Capital expenditures, growth (capital spending disclosure) | 63 | Not supplied: the annual report splits 2025 only | 49 | 42 | USD millions | Reported; positive spending on an accrual basis, excluding turnaround | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 119–120; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 60; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 8 |
| Capital expenditures, total (capital spending disclosure) | 197 | 181 | 147 | 132 | USD millions | Reported; positive spending on an accrual basis, excluding turnaround; FY2024 is the segment note total | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 120 and 176; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 60; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 8 |
| Insurance proceeds related to asset damages | 3 | 10 | Not supplied: not a line of the quarterly statement | Not supplied: not a line of the quarterly statement | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133 |
| Proceeds from sale of investments and assets | 10 | 92 | Not supplied: not a line of the quarterly statement | Not supplied: not a line of the quarterly statement | USD millions | Reported; disposals | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133 |
| Return of equity method investment | 7 | 9 | 6 | 6 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Other investing activities | Not supplied: not a line of the annual statement | Not supplied: not a line of the annual statement | 1 | 11 | USD millions | Reported | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Net Cash from Investing Activities | -362 | -121 | -147 | -309 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Proceeds from issuance of long-term debt (Senior Notes in 2026) | Not supplied: printed as a dash | 325 | 1,000 | Not supplied: printed as a dash | USD millions | Reported; debt issuance | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Principal payments on Term Loan | -168 | Not supplied: printed as a dash | -157 | -92 | USD millions | Reported; debt repayment | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Principal payments on senior notes (labelled senior secured notes in the cash flow statements) | Not supplied: printed as a dash | -600 | -817 | Not supplied: printed as a dash | USD millions | Reported; debt repayment, 9M 2026 is the 2029 notes of 600 and 217 of the 2028 notes | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 10 and 17 |
| Call premium on extinguishment of debt | Not supplied: not a line of the annual statement | Not supplied: not a line of the annual statement | -25 | Not supplied: printed as a dash | USD millions | Reported | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Payment of deferred financing costs | Not supplied: not a line of the annual statement | Not supplied: not a line of the annual statement | -15 | Not supplied: printed as a dash | USD millions | Reported | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Dividends to CVR Energy stockholders | Not supplied: printed as a dash | -151 | -20 | Not supplied: printed as a dash | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Distributions to CVR Partners noncontrolling interest holders | -80 | -44 | -70 | -53 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Other financing activities | -10 | -12 | -8 | -7 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Net Cash from Financing Activities | -258 | -482 | -112 | -152 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Net Cash Change | -476 | -199 | 767 | -317 | USD millions | Reported; operating plus investing plus financing; no foreign exchange effect is printed | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Opening Cash | 987 | 1,186 | 511 | 987 | USD millions | Reported; FY2024 opening includes 598 of reserved funds and 7 of restricted cash | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Closing Cash | 511 | 987 | 1,278 | 670 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10 |
| Cash Interest Paid | 142 | 112 | 106 | 116 | USD millions | Reported; supplemental disclosure, kept apart from interest expense, net | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 177; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 27 |
| Income taxes paid (refunded), net of refunds | -11 | 60 | Not supplied: printed as a dash | -3 | USD millions | Reported; a refund is negative; cash tax is kept apart from the income tax expense | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 168; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 27 |

Cash flow classification: operating-lease cost is inside operating expenses; cash paid on operating leases was 21 in FY2025 and 17 in 9M 2026 and is in operating activities; principal paid on finance leases was 10 in FY2025 and 8 in 9M 2026 and is in financing activities within other financing activities; interest paid is in operating activities as for US GAAP.

### T4.6 Balance sheet
| Line item | FY2025 | FY2024 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash & Equivalents | 511 | 987 | 1,278 | USD millions | Reported as cash and cash equivalents; includes cash of the consolidated variable interest entity of 69, 91 and 158; no restricted cash line | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Accounts receivable, net | 235 | 295 | 464 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Inventories | 472 | 502 | 655 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Prepaid expenses | 29 | 16 | 20 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Other current assets | 20 | 24 | 17 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Total current assets | 1,267 | 1,824 | 2,434 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Property, plant, and equipment, net | 2,050 | 2,176 | 2,011 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Other long-term assets | 389 | 263 | 335 | USD millions | Reported; includes turnaround assets | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Total Assets | 3,706 | 4,263 | 4,780 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Accounts payable | 415 | 538 | 620 | USD millions | Reported; trade payables | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Other current liabilities | 291 | 560 | 785 | USD millions | Reported; includes the current portion of debt and finance leases, the accrued RFS obligation, accrued income taxes and derivative liabilities | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 131 and 150; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 8 and 15 |
| Total current liabilities | 706 | 1,098 | 1,405 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Long-term debt and finance lease obligations, net of current portion | 1,751 | 1,907 | 1,769 | USD millions | Reported; the non-current part of Total Debt | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Deferred income taxes | 269 | 277 | 245 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Other long-term liabilities | 82 | 93 | 104 | USD millions | Reported; includes long-term deferred revenue of 21 at 2025-12-31 and 16 at 2026-09-30 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 8 and 18 |
| Total long-term liabilities | 2,102 | 2,277 | 2,118 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Total Liabilities | 2,808 | 3,375 | 3,523 | USD millions | Calculated: total current plus total long-term liabilities; the third quarter release prints 3,523 and 2,808 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 8 |
| Common stock | 1 | 1 | 1 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Additional paid-in-capital | 1,508 | 1,508 | 1,508 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Accumulated deficit | -777 | -804 | -422 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Treasury stock | -2 | -2 | -2 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Total CVR stockholders' equity | 730 | 703 | 1,085 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Noncontrolling interest | 168 | 185 | 172 | USD millions | Reported; arises only from CVR Partners | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| Total Equity | 898 | 888 | 1,257 | USD millions | Reported | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 131; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 9 |
| Total Debt | 1,765 | 1,919 | 1,781 | USD millions | Carrying value, current plus long-term, net of issuance costs and discounts; includes finance lease obligations of 66, 58 and 61 carried inside the debt lines | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 151; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 |
| Current portion of long-term debt and finance lease obligations | 14 | 12 | 12 | USD millions | Reported inside other current liabilities | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 15 |
| Accrued Renewable Fuel Standard obligation | 72 | 323 | 230 | USD millions | Reported inside other current liabilities; non-interest-bearing funding float, outside Total Debt | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 15 |
| Derivative liabilities | Not supplied: printed as a dash | Not supplied: not listed in the annual report note | 160 | USD millions | Reported inside other current liabilities; outside Total Debt | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 15 |
| Accrued income taxes | Not supplied: printed as a dash | Not supplied: not listed in the annual report note | 132 | USD millions | Reported inside other current liabilities; outside Total Debt | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 15 |
| Deferred revenue | 23 | 51 | 68 | USD millions | Reported inside other current liabilities; funding float, outside Total Debt | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 15 |
| Current portion of operating lease liabilities | 16 | 16 | 17 | USD millions | Reported inside other current liabilities; outside Total Debt | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 15 |

### T4.18 Debt instruments
| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7.500% Senior Notes due February 2031 (CVR Energy, Inc.) | Senior notes | Not supplied: carrying value is disclosed by group only | 600 | Not applicable | Not applicable | Unsecured; the filing states the guarantees are on a senior unsecured basis | Senior unsecured; guaranteed by the domestic subsidiaries other than CVR Partners and listed excluded entities | USD | 600 | Not applicable | 7.500% | fixed | Not applicable | Not applicable | Not applicable | 2031-02-15 | 0 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16; 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 151–152 |
| 7.875% Senior Notes due February 2034 (CVR Energy, Inc.) | Senior notes | Not supplied: carrying value is disclosed by group only | 400 | Not applicable | Not applicable | Unsecured; the filing states the guarantees are on a senior unsecured basis | Senior unsecured; guaranteed by the domestic subsidiaries other than CVR Partners and listed excluded entities | USD | 400 | Not applicable | 7.875% | fixed | Not applicable | Not applicable | Not applicable | 2034-02-15 | 0 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16; 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 151–152 |
| 5.750% Senior Notes due February 2028 (CVR Energy, Inc.) | Senior unsecured notes | Not supplied: carrying value is disclosed by group only | 183 | Not applicable | Not applicable | Unsecured; guaranteed on a senior unsecured basis by wholly owned subsidiaries other than CVR Partners and certain immaterial ones | Senior unsecured | USD | 183 | Not applicable | 5.750% | fixed | Not applicable | Not applicable | Not applicable | 2028-02-15 | 0 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 16–17; 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 153 |
| 6.125% Senior Secured Notes due June 2028 (CVR Partners, LP and CVR Nitrogen Finance Corporation) | Senior secured notes | Not supplied: carrying value is disclosed by group only | 550 | Not applicable | Not applicable | Secured; guaranteed on a senior secured basis by the existing domestic subsidiaries of CVR Partners, not by CVR Energy | Senior secured | USD | 550 | Not applicable | 6.125% | fixed | Not applicable | Not applicable | Not applicable | 2028-06-15 | 0 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16; 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 157 |
| CVR Energy Amended and Restated ABL Credit Agreement | Asset-based revolving credit facility | 0 | 0 | 0 | 550 | Secured; senior secured asset based revolving credit facility of the Petroleum Segment credit parties | Senior secured | USD | 0 | Not applicable | Not supplied: pricing after the February 2026 amendment is not described | floating | Term SOFR | Not supplied: the annual report states 150 to 175 before the amendment only | Not supplied: no floor is stated | 2031-02-12 | Not applicable | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 16–17; 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 156 |
| CVR Partners Credit Agreement (ABL) | Asset-based revolving credit facility | 0 | 0 | 0 | 45 | Secured; asset-based facility of CVR Partners and certain subsidiaries | Senior secured | USD | 0 | Not applicable | SOFR plus 1.615%, 1.865% or 2.115% by excess availability | floating | Daily simple SOFR | 161.5 to 211.5 | Not supplied: no floor is stated | 2028-09-26 | Not applicable | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16; 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 158–159 |
| Finance lease obligations (CVR Energy 4, Petroleum Segment 25, Nitrogen Fertilizer 20 net of current portion, plus current portion 12) | Finance leases | 61 | Not supplied: stated at carrying value only | Not applicable | Not applicable | Not supplied: security and ranking of lease claims are not stated | Not supplied: legal rank is not stated | USD | 61 | Not applicable | Not supplied: the 2026 rate is not stated; 10.0% weighted-average discount rate at 2025-12-31 | Not supplied: not stated | Not applicable | Not applicable | Not applicable | Not supplied: the 2026 schedule is not stated | Not supplied: the 2026 schedule is not stated | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 15–16; 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 150 |
| Financing cost adjustment | Unamortized debt issuance costs (CVR Energy 12, Nitrogen Fertilizer 1) | Not applicable | -13 | Not applicable | Not applicable | Not applicable | Not applicable | USD | -13 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 |

### Chart data: leverage
| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 4.87 | 2.37 | x | Reported EBITDA of 394; carrying-value debt of 1,919 including finance leases; audited year |
| FY2025 / 2025-12-31 | 2.99 | 2.12 | x | Reported EBITDA of 591, which includes favorable refining-obligation changes of 262; audited year |
| 2026-09-30 | 1.85 | 0.52 | x | Last-twelve-months reported EBITDA of 964 built from FY2025 plus 9M 2026 less 9M 2025; unaudited interim; excludes the pending acquisition |

Leverage is on reported EBITDA, which includes non-cash refining-obligation gains, and the adjusted ratios are in the calculation register.

### Chart data: interest cover
| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 3.52 | x | Reported EBITDA of 394 over cash interest paid of 112 |
| FY2025 / 2025-12-31 | 4.16 | x | Reported EBITDA of 591 over cash interest paid of 142 |
| 2026-09-30 | 7.30 | x | Last-twelve-months reported EBITDA of 964 over last-twelve-months cash interest paid of 132, which probably includes about 25 of accrued interest settled on the 2029 notes redemption (the filing does not say where it is classified) |

Cash interest is cash paid, not the income statement expense, and the last twelve months include a one-off settlement of accrued interest.

### Chart data: liquidity
| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 987 | 277 | US$m | Undrawn is 238 under the CVR Energy credit facility and 39 under the CVR Partners facility, as the annual report states the availability |
| FY2025 / 2025-12-31 | 511 | 296 | US$m | Undrawn is 248 under the CVR Energy credit facility (available borrowing capacity of 258 less letters of credit of 10; commitments were 345) and 48 under the CVR Partners facility |
| 2026-09-30 | 1,278 | 575 | US$m | Undrawn is 530 under the CVR Energy credit facility (available borrowing capacity of 550 less letters of credit of 20) and 45 under the CVR Partners facility; cash includes 158 held by CVR Partners |

Availability under both facilities is subject to borrowing-base conditions that are not supplied, and the cash includes amounts held by the consolidated nitrogen partnership.

### Chart data: debt maturities
| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 0 | US$m | No instrument matures in 2026; the term loan was repaid in February 2026 |
| FY2027 | 0 | US$m | No instrument matures in 2027; the CVR Energy credit facility maturity moved from June 2027 to February 2031 |
| FY2028 | 733 | US$m | 5.750% senior notes of 183 due February 2028 plus 6.125% senior secured notes of 550 due June 2028; the CVR Partners facility (undrawn) matures September 2028 |
| FY2029 | 0 | US$m | The 2029 notes were redeemed in February 2026 |
| FY2030 | 0 | US$m | No instrument matures in 2030 |
| FY2031 | 600 | US$m | 7.500% senior notes due February 2031; the CVR Energy credit facility (undrawn) matures February 2031 |
| FY2032 | 0 | US$m | No instrument matures in 2032 |
| FY2033 | 0 | US$m | No instrument matures in 2033 |
| FY2034 | 400 | US$m | 7.875% senior notes due February 2034 |

Maturities are contractual principal at September 30, 2026 by the maturity date each instrument states, exclude finance lease obligations whose payment schedule at that date is not supplied, and treat years without a stated maturity as nil.

### Net debt data
| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1,919 | 987 | 932 | US$m | Reported; carrying value including current portion and finance leases of 58; principal of 1,875 beside it |
| FY2025 / 2025-12-31 | 1,765 | 511 | 1,254 | US$m | Reported; carrying value including current portion and finance leases of 66; principal of 1,707 beside it |
| 2026-09-30 | 1,781 | 1,278 | 503 | US$m | Reported; carrying value including current portion and finance leases of 61; principal of 1,733 beside it; cash includes 158 held by CVR Partners |

### Debt principal to carrying value
| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 1,733 | 48 | 1,781 | US$m | Principal is the sum of the maturity rows. Reconciling items are finance lease obligations of 61 that the ladder leaves out, less unamortized debt issuance costs of 13 (CVR Energy 12 and Nitrogen Fertilizer 1), which nets to 48 |

### Post-balance-sheet adjustments
| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Third quarter 2026 dividend of 10 cents per share declared, payable 2026-11-23 | 2026-11-03 | 10 | 513 | 0.53 | US$m | Declared by the board on 2026-11-03 and payable in cash on 2026-11-23, after the as-of date; net debt of 503 plus 10, over last-twelve-months reported EBITDA of 964; not yet reflected in cash at 2026-09-30 |
| Third quarter 2026 CVR Partners distribution of 1.79 per common unit declared, payable 2026-11-23 | 2026-11-03 | Not supplied: only the total of about 19 and the share of about 7 for CVR Energy are stated | Not supplied: the effect on consolidated cash is not stated | Not supplied: net debt after the distribution is not established | US$m | About 19 in total with about 7 to CVR Energy, which is eliminated on consolidation, and less than 1 to the controlling holder; the amount paid to public unitholders is not stated separately; not yet reflected in cash |
| Marathon Petroleum refinery acquisition (St. Paul Park and Mandan) under the purchase agreement | 2026-11-02 | Not supplied: closing date and the amount drawn on the bridge are not stated | Not supplied: pro forma debt and cash are not stated | Not supplied: not established | US$m | Cash consideration of about 4,200 subject to closing adjustments; committed financing of a senior secured 364-day bridge of up to 2,500, extra credit-facility commitments of 550, a preferred placement of 800 and up to 500 of equity from the controlling holder; a termination fee of 6%, 4% or 2% of the base purchase price applies in specified cases; none is reflected in any figure; at least 500 of unrestricted cash must be kept until closing or termination |

### Chart data: revenue and EBITDA
| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 7,610 | 317 | US$m | Twelve months; Adjusted EBITDA is issuer-adjusted (company-defined), audited-year filing |
| FY2025 / 2025-12-31 | 7,162 | 393 | US$m | Twelve months; issuer-adjusted Adjusted EBITDA |
| 2026-09-30 | 9,810 | 919 | US$m | Twelve months to 2026-09-30, built from FY2025 plus 9M 2026 less 9M 2025; issuer-adjusted Adjusted EBITDA; unaudited |

Adjusted EBITDA is the issuer's own definition in every row, and the last row is a constructed twelve-month figure with a record third quarter in it.

### Chart data: debt stack
| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| CVR Energy Amended and Restated ABL Credit Agreement | 1 | Yes | 0 | 0.00 | US$m | Commitments of 550, undrawn at 2026-09-30 (letters of credit of 20); obligors are the Petroleum Segment credit parties; cumulative debt over last-twelve-months reported EBITDA of 964 |
| CVR Partners Credit Agreement (ABL) | 1 | Yes | 0 | 0.00 | US$m | Commitments of 45, undrawn; borrower is CVR Partners and certain subsidiaries only, outside the CVR Energy group; shares rank 1 with the other secured facility but not the same collateral; cumulative leverage counts nothing drawn |
| 6.125% Senior Secured Notes due June 2028 | 1 | Yes | 550 | 0.57 | US$m | Issued by CVR Partners, LP and CVR Nitrogen Finance Corporation and guaranteed by CVR Partners' domestic subsidiaries, not by CVR Energy; cumulative debt 550 over 964 |
| 5.750% Senior Notes due February 2028 | 2 | No | 183 | 0.76 | US$m | Issued by CVR Energy, Inc.; guaranteed on a senior unsecured basis by wholly owned subsidiaries other than CVR Partners; cumulative debt 733 over 964 |
| 7.500% Senior Notes due February 2031 | 2 | No | 600 | 1.38 | US$m | Issued by CVR Energy, Inc.; guaranteed on a senior unsecured basis by domestic subsidiaries other than CVR Partners; cumulative debt 1,333 over 964 |
| 7.875% Senior Notes due February 2034 | 2 | No | 400 | 1.80 | US$m | Issued by CVR Energy, Inc.; guaranteed on a senior unsecured basis by domestic subsidiaries other than CVR Partners; cumulative debt 1,733 over 964 |

Rank 1 groups the secured claims of two separate obligor groups, so cumulative leverage across them is a consolidated reading, not a single waterfall; finance lease obligations of 61 are left out because their legal rank is not stated.

### Chart data: EBITDA bridge
| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), 9M 2026 | 913 | US$m | Opening: reported EBITDA, net income plus interest, tax and depreciation and amortization; nine months to 2026-09-30 |
| Changes in RFS obligation, favorable | -190 | US$m | Issuer's own add-back label; classification other stated; includes the 253 liability removed by the August 2026 waiver; non-cash; realisation not stated |
| Unrealized loss on derivatives, net | 278 | US$m | Issuer's own add-back label; classification other stated; non-cash; realisation not stated |
| Inventory valuation impacts, favorable | -173 | US$m | Issuer's own add-back label; classification other stated; first-in first-out valuation effect; realisation not stated |
| Adjusted EBITDA (issuer-adjusted), 9M 2026 | 828 | US$m | Closing: company-defined Adjusted EBITDA; steps add to it with no balancing line |

### Financials and credit metrics
| Metric | FY2024 | FY2025 | 9M 2025 | 9M 2026 | LTM to 2026-09-30 | Unit | Basis |
|---|---|---|---|---|---|---|---|
| Net sales | 7,610 | 7,162 | 5,352 | 8,000 | 9,810 | USD millions | Reported; LTM is constructed |
| EBITDA (Reported) | 394 | 591 | 540 | 913 | 964 | USD millions | Issuer-stated; LTM is constructed |
| EBITDA (Adjusted) | 317 | 393 | 302 | 828 | 919 | USD millions | Company-defined; LTM is constructed |
| Net income | 45 | 90 | 206 | 449 | 333 | USD millions | Reported; LTM is constructed |
| Net Cash from Operating Activities | 404 | 144 | 144 | 1,026 | 1,026 | USD millions | Reported; LTM is constructed |
| Capital expenditures plus turnaround expenditures | 232 | 382 | 326 | 154 | 210 | USD millions | Calculated as capital expenditures plus turnaround expenditures, shown as positive outflows |
| Free cash flow after capital expenditures and turnaround | 172 | -238 | -182 | 872 | 816 | USD millions | Calculated: operating cash flow less capital expenditures and turnaround expenditures; the issuer's own definition adds the return of equity method investment and states 878 for 9M 2026 |
| Total debt / EBITDA | 4.87 | 2.99 | Not supplied: no balance sheet at 2025-09-30 | Not supplied: ratio is on the last twelve months | 1.85 | x | Calculated on reported EBITDA and carrying-value debt |
| Net debt / EBITDA | 2.37 | 2.12 | Not supplied: no balance sheet at 2025-09-30 | Not supplied: ratio is on the last twelve months | 0.52 | x | Calculated on reported EBITDA |
| EBITDA / cash interest | 3.52 | 4.16 | Not supplied: ratio is on the last twelve months | Not supplied: ratio is on the last twelve months | 7.30 | x | Calculated on reported EBITDA and cash interest paid |

### Period table
| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |

### T4.8 Constructed period register
| Metric Name | Derived Period Type | Full-Year Component (USD m) | Current Stub (USD m) | Prior-Year Stub (USD m) | Derived Value (USD m) | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Net sales | LTM to 2026-09-30 | 7162 | 8000 | 5352 | 9810 | Calculated | 10-K_2025-12-31_cvi-20251231.htm.jsonl; 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Fourth quarter of 2025 not supplied on its own; stubs are the nine-month periods to September 30 and comparable |
| EBITDA (Reported) | LTM to 2026-09-30 | 591 | 913 | 540 | 964 | Calculated | 10-K_2025-12-31_cvi-20251231.htm.jsonl; 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Includes favorable refining-obligation changes in both full year and stub |
| EBITDA (Adjusted) | LTM to 2026-09-30 | 393 | 828 | 302 | 919 | Calculated | 10-K_2025-12-31_cvi-20251231.htm.jsonl; 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Company-defined adjustments; same definition in all three components |
| Cash Interest Paid | LTM to 2026-09-30 | 142 | 106 | 116 | 132 | Calculated | 10-K_2025-12-31_cvi-20251231.htm.jsonl; 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Probably includes about 25 of accrued interest settled on the February 2026 redemption of the 2029 notes (its classification is not stated) |
| Net Cash from Operating Activities | LTM to 2026-09-30 | 144 | 1026 | 144 | 1026 | Calculated | 10-K_2025-12-31_cvi-20251231.htm.jsonl; 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Includes accrued income taxes of 132 not yet paid |
| Capital expenditures (outflow) | LTM to 2026-09-30 | 185 | 152 | 130 | 207 | Calculated | 10-K_2025-12-31_cvi-20251231.htm.jsonl; 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Excludes turnaround expenditures |
| Turnaround expenditures (outflow) | LTM to 2026-09-30 | 197 | 2 | 196 | 3 | Calculated | 10-K_2025-12-31_cvi-20251231.htm.jsonl; 10-Q_2026-09-30_cvi-20260930.htm.jsonl | The Coffeyville turnaround of 2025 falls in the prior-year stub |
| Net income | LTM to 2026-09-30 | 90 | 449 | 206 | 333 | Calculated | 10-K_2025-12-31_cvi-20251231.htm.jsonl; 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Includes the 253 removal of the refining obligation in the stub |

### T4.9 Calculation register
| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1919 | Net debt data, 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 151 | 394 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | FY2024 / 2024-12-31 | USD | US$m | 4.87 | Calculated | Tier 1 | Carrying-value debt including finance leases |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 932 | Net debt data, 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 151 | 394 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | FY2024 / 2024-12-31 | USD | US$m | 2.37 | Calculated | Tier 1 | Cash of 987 includes cash of the consolidated variable interest entity of 91 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 394 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | 112 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 177 | FY2024 / 2024-12-31 | USD | US$m | 3.52 | Calculated | Tier 1 | Cash interest is paid in cash and is kept apart from interest expense, net of 77 |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1919 | Net debt data, 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 151 | 317 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | FY2024 / 2024-12-31 | USD | US$m | 6.05 | Calculated | Tier 2b | Company-defined Adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 932 | Net debt data, 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 151 | 317 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | FY2024 / 2024-12-31 | USD | US$m | 2.94 | Calculated | Tier 2b | Company-defined Adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 317 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | 112 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 177 | FY2024 / 2024-12-31 | USD | US$m | 2.83 | Calculated | Tier 2b | Company-defined Adjusted EBITDA |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1765 | Net debt data, 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 151 | 591 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | FY2025 / 2025-12-31 | USD | US$m | 2.99 | Calculated | Tier 1 | Carrying-value debt including finance leases; EBITDA includes favorable refining-obligation changes of 262 |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1254 | Net debt data, 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 151 | 591 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | FY2025 / 2025-12-31 | USD | US$m | 2.12 | Calculated | Tier 1 | Cash of 511 includes cash of the consolidated variable interest entity of 69 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 591 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | 142 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 177 | FY2025 / 2025-12-31 | USD | US$m | 4.16 | Calculated | Tier 1 | Cash interest is paid in cash and is kept apart from interest expense, net of 108 |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1765 | Net debt data, 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 151 | 393 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | FY2025 / 2025-12-31 | USD | US$m | 4.49 | Calculated | Tier 2b | Company-defined Adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1254 | Net debt data, 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 151 | 393 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | FY2025 / 2025-12-31 | USD | US$m | 3.19 | Calculated | Tier 2b | Company-defined Adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 393 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 | 142 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 177 | FY2025 / 2025-12-31 | USD | US$m | 2.77 | Calculated | Tier 2b | Company-defined Adjusted EBITDA |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1781 | Net debt data, 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 | 964 | Constructed period register | 2026-09-30 | USD | US$m | 1.85 | Calculated | Tier 2b | Last-twelve-months EBITDA; unaudited; excludes the pending acquisition |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 503 | Net debt data, 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 | 964 | Constructed period register | 2026-09-30 | USD | US$m | 0.52 | Calculated | Tier 2b | Cash of 1,278 includes cash of the consolidated variable interest entity of 158 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 964 | Constructed period register | 132 | Constructed period register | 2026-09-30 | USD | US$m | 7.30 | Calculated | Tier 2b | Cash interest probably includes about 25 of accrued interest settled on the 2029 notes redemption (its classification is not stated) |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1781 | Net debt data, 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 | 919 | Constructed period register | 2026-09-30 | USD | US$m | 1.94 | Calculated | Tier 2b | Company-defined Adjusted EBITDA; 63.33% of it is the third quarter of 2026 |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 503 | Net debt data, 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 | 919 | Constructed period register | 2026-09-30 | USD | US$m | 0.55 | Calculated | Tier 2b | Company-defined Adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 919 | Constructed period register | 132 | Constructed period register | 2026-09-30 | USD | US$m | 6.96 | Calculated | Tier 2b | Company-defined Adjusted EBITDA |
| Liquidity (cash plus undrawn facilities) / total debt | Liquidity / Total Debt | 1853 | Chart data: liquidity, 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 16 and 59 | 1781 | Net debt data | 2026-09-30 | USD | US$m | 1.04 | Calculated | Tier 2b | Undrawn facilities are subject to borrowing-base conditions not supplied |

### T4.10 KPI dashboard
| KPI Category | Metric Name | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Margin | EBITDA margin, reported (%) | 8.25 | 5.18 | 11.41 | 10.09 | Up in 9M 2026 against 9M 2025 and up in FY2025 against FY2024 | Calculated: EBITDA (Reported) / net sales x 100; rate; includes non-cash refining-obligation gains |
| Margin | Adjusted EBITDA margin (%) | 5.49 | 4.17 | 10.35 | 5.64 | Up in both comparisons | Calculated: EBITDA (Adjusted) / net sales x 100; rate; company-defined |
| Margin | Operating income margin (%) | 2.54 | 0.76 | 8.21 | 5.18 | Up in both comparisons | Calculated: operating income / net sales x 100; rate |
| Margin | Net income margin (%) | 1.26 | 0.59 | 5.61 | 3.85 | Up in both comparisons | Calculated: net income / net sales x 100; rate |
| Operating KPI | Total refining throughput (barrels per day) | 181,988 | 196,278 | 218,339 | 169,848 | Down in FY2025, up in 9M 2026 | Period average rate as the issuer states it; the 9M 2025 figure includes the 2025 Coffeyville turnaround |
| Operating KPI | Refining margin per total throughput barrel (USD) | 13.64 | 9.53 | 19.28 | 15.93 | Up in both comparisons | Period rate as the issuer states it; company-defined non-GAAP |
| Operating KPI | Crude utilization (% of 206,500 barrels per day capacity) | 80.8 | 87.2 | 100.1 | 75.6 | Down in FY2025, up in 9M 2026 | Period rate as the issuer states it |
| Operating KPI | Ammonia utilization rate (%) | 88 | 96 | 94 | 96 | Down in FY2025 and in 9M 2026 | Period rate as the issuer states it; nitrogen fertilizer segment |

### T4.11 Definition conflict register
| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| Total debt: carrying value against principal | Balance-sheet carrying value, current plus long-term, with finance leases carried in the debt lines | Principal of the four notes, summed from the debt note: 1,733 at 2026-09-30, against carrying value 1,781 (10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16) | Principal excludes finance leases of 61 and deducts issuance costs of 13 | 2026-09-30; 2025-12-31 (principal 1,707, carrying 1,765); 2024-12-31 (principal 1,875, carrying 1,919) | 48 at 2026-09-30, 2.70% of carrying value | Liquidity; Refinancing & LME; Fundamental credit | Carrying value is used in every ratio; principal is shown beside it |
| Total debt: finance leases in or out | Finance leases carried in debt lines stay in Total Debt | The management discussion shows long-term debt of 1,720 before finance leases (10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 59) against 1,781 in the note (same file, page 16) | Two issuer totals for the same date | 2026-09-30; 2025-12-31 (1,699 against 1,765) | 61 at 2026-09-30, 3.43% of carrying value | Earnings quality; Liquidity | 1,781 is used; the 1,720 figure is not mixed in |
| EBITDA: reported against adjusted | EBITDA (Reported) is the primary denominator; adjusted shown beside it | Company Adjusted EBITDA removes refining-obligation changes, unrealized derivative results and inventory valuation (10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56) | Reported EBITDA of 964 over the last twelve months against adjusted 919; FY2025 reported 591 against adjusted 393 | FY2025; 9M 2026; LTM to 2026-09-30 | 45 at LTM; 198 at FY2025 | Earnings quality; Fundamental credit | Reported ratios charted; adjusted ratios in the register and labelled |
| Interest: expense against cash paid | Cash interest paid (supplemental) is the cover denominator | Interest expense, net of 105 in 9M 2026 includes loss on extinguishment of debt of 32 (10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 9 and 10); cash paid was 106 (page 27) | Expense includes non-cash and one-off items; cash probably includes about 25 of accrued interest on the redeemed 2029 notes | 9M 2026; LTM to 2026-09-30 | 1 between 106 and 105 at 9M 2026, with a different composition | Earnings quality; Liquidity | Cash interest paid used; one-offs named |
| Nitrogen Fertilizer debt: 569 against 570 | Carrying value, net of current portion, as in the debt note | Nitrogen Fertilizer total debt of 569 net of current portion (10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16) against 570 including current portion in the third quarter release (EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 9) | Different inclusion of the current portion of finance leases | 2026-09-30; 2025-12-31 | 1 | Structural priority | 569 used for the non-current figure; the difference is the current portion |
| Cash: consolidated against accessible | Cash and cash equivalents as reported | Consolidated cash of 1,278 includes cash of the consolidated variable interest entity of 158 (10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8) | CVR Partners cash is consolidated but is available to CVR Energy only through distributions | 2026-09-30 | 158, 12.36% of cash | Liquidity; Structural priority | Cash of 1,278 used in Net debt data; the 158 is stated in Basis |
| Segments: renewables as a segment or inside other | One consistent segment perimeter across periods | Renewables is a separate segment in the annual report and part of other from 2026 (10-K_2025-12-31_cvi-20251231.htm.jsonl, page 175; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 26) | Prior periods restated in the 2026 reports only | FY2025; FY2024 against 9M 2026; 9M 2025 | Third-party sales of 141 in FY2025 | Earnings changes | Separate rows are kept for each presentation |
| Free cash flow: house against issuer | Operating cash flow less capital expenditures and turnaround | Issuer free cash flow adds the return of equity method investment (EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 11) | 872 against 878 for 9M 2026 | 9M 2026; 9M 2025 | 6 | Earnings quality | House figure shown; the issuer figure is named |

### T4.13 Readiness
| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and coverage at 2026-09-30 | Ready with Limitations | Unaudited last-twelve-months built from three periods; reported EBITDA includes non-cash refining-obligation gains; the acquisition is outside the figures | Use the adjusted ratios beside the reported; refresh with the fourth-quarter 2026 report and the closing financing |
| Net debt and liquidity | Ready with Limitations | Borrowing-base conditions not supplied; 158 of cash sits in CVR Partners; at least 500 of unrestricted cash must be kept until the acquisition closes or the agreement ends | Obtain the credit agreements and test availability on a stressed borrowing base |
| Debt stack and maturities | Ready with Limitations | Carrying value is disclosed by group, not by instrument; finance lease schedule at 2026-09-30 and legal rank not stated | Obtain indentures and the lease maturity table |
| Covenant headroom | Not Ready | Only the compliance statement and a general description of a minimum fixed charge coverage test are in the filings; no level or definition | Obtain the two credit agreements and the indentures |
| Pro forma acquisition leverage | Not Ready | Closing date, bridge draw and permanent financing mix not stated | Await the financing disclosure or a pro forma statement |
| Segment analysis across 2025 and 2026 | Ready with Limitations | Segment perimeter changed in 2026 | Use the separate rows; do not join the series |

### Confidence inputs
| Input | Value |
|---|---|
| Directly Sourced | 34 |
| Calculated | 22 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 7 |
| Fields present | 18 |
| Fields total | 20 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 4 |

## Calculations
| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Total debt to reported EBITDA at 2026-09-30, in USD millions and times | 1,781 / 964 | 1.85x | Net debt data; constructed period register |
| C2 | Total debt to reported EBITDA, FY2024 then FY2025, in times | 1,919 / 394; 1,765 / 591 | 4.87x; 2.99x | Net debt data; income statement |
| C3 | Net debt to reported EBITDA, FY2024, FY2025 and 2026-09-30, in times | 932 / 394; 1,254 / 591; 503 / 964 | 2.37x; 2.12x; 0.52x | Net debt data; income statement |
| C4 | EBITDA to cash interest, reported, FY2025 and 2026-09-30, in times | 591 / 142; 964 / 132 | 4.16x; 7.30x | Income statement; cash flow statement |
| C5 | EBITDA to cash interest, adjusted, FY2025 and 2026-09-30, in times; FY2025 reported cover overstates adjusted cover by 4.16 less 2.77 | 393 / 142; 919 / 132; 4.16 - 2.77 | 2.77x; 6.96x; 1.39x | Income statement; cash flow statement |
| C6 | Third quarter 2026 share of last-twelve-months Adjusted EBITDA, in percent; total debt to Adjusted EBITDA at 2026-09-30 | 582 / 919 x 100; 1,781 / 919 | 63.33%; 1.94x | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56 |
| C7 | Implied fourth-quarter 2025 Adjusted EBITDA, in USD millions | 393 - 302 | USD 91 million | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56 |
| C8 | Capital and turnaround expenditure and nine-month free cash flow, in USD millions | 9M 2026: 152 + 2 = 154; 9M 2025: 130 + 196 = 326; free cash flow 1,026 - 152 - 2 = 872 | USD 154 million; USD 326 million; USD 872 million | Cash flow statement |
| C9 | Liquidity at 2026-09-30, net debt to Adjusted EBITDA, and liquidity less total debt, in USD millions | 1,278 + 530 + 45 = 1,853; 503 / 919; 1,853 - 1,781 | USD 1,853 million; 0.55x; USD 72 million | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 16 and 59 |
| C10 | Liquidity at 2025-12-31 and cash held outside CVR Partners at 2026-09-30, in USD millions | 511 + 248 + 48 = 807; 1,278 - 158 = 1,120 | USD 807 million; USD 1,120 million | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 119; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| C11 | Contractual principal at 2026-09-30 and 2028 maturities, in USD millions | 600 + 400 + 183 + 550 = 1,733; 183 + 550 = 733 | USD 1,733 million; USD 733 million | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 |
| C12 | Reconciling items between principal and carrying value at 2026-09-30, in USD millions | finance leases 4 + 25 + 20 + 12 = 61; issuance costs 12 + 0 + 1 = 13; 61 - 13 = 48; 1,733 + 48 = 1,781 | USD 48 million; USD 1,781 million | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 15 and 16 |
| C13 | Annual fixed coupons on the notes at 2026-09-30, in USD millions | 600 x 7.500% + 400 x 7.875% + 183 x 5.750% + 550 x 6.125% = 45 + 31.5 + 10.5225 + 33.6875 | USD 120.71 million | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 |
| C14 | Net debt after the declared dividend and its leverage, in USD millions and times | 503 + 10 = 513; 513 / 964 | USD 513 million; 0.53x | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 59 and 61 |
| C15 | Principal in the bridge relative to last-twelve-months Adjusted EBITDA, in times | 2,500 / 919 | 2.72x | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 12 |
| C16 | Last-twelve-months construction, in USD millions | EBITDA (Reported) 591 + 913 - 540 = 964; EBITDA (Adjusted) 393 + 828 - 302 = 919; net sales 7,162 + 8,000 - 5,352 = 9,810; cash interest 142 + 106 - 116 = 132; operating cash flow 144 + 1,026 - 144 = 1,026; net income 90 + 449 - 206 = 333 | 964; 919; 9,810; 132; 1,026; 333 | Constructed period register |
| C17 | Total liabilities, in USD millions | 2025-12-31: 706 + 2,102 = 2,808; 2024-12-31: 1,098 + 2,277 = 3,375; 2026-09-30: 1,405 + 2,118 = 3,523 | 2,808; 3,375; 3,523 | Balance sheet |
| C18 | Total debt reconciliation at each date, in USD millions | 2026-09-30: 1,769 + 12 = 1,781; 2025-12-31: 1,751 + 14 = 1,765; 2024-12-31: 1,907 + 12 = 1,919 | 1,781; 1,765; 1,919 | Balance sheet; debt note |
| C19 | Contractual principal and finance leases at 2025-12-31 and 2024-12-31, in USD millions | 2025-12-31: 600 + 400 + 157 + 550 = 1,707 and 1,707 + 66 - 8 = 1,765; 2024-12-31: 600 + 400 + 325 + 550 = 1,875 and 1,875 + 58 - 14 = 1,919; finance leases 2024: 1,919 - 1,861 = 58 | 1,707; 1,875; 58 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 119, 121 and 151 |
| C20 | Cumulative debt through each facility over last-twelve-months reported EBITDA of 964, in times | 550 / 964; 733 / 964; 1,333 / 964; 1,733 / 964 | 0.57x; 0.76x; 1.38x; 1.80x | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 |
| C21 | Reported EBITDA margins for the KPI dashboard, in percent | 591 / 7,162; 394 / 7,610; 913 / 8,000; 540 / 5,352 all x 100 | 8.25%; 5.18%; 11.41%; 10.09% | Income statement |
| C22 | Claims outside debt at 2025-12-31 as the annual report prints them, in USD millions | purchase commitments 165; transportation agreements 995; operating lease liabilities 64; 165 + 995 + 64 | 165; 995; 64; USD 1,224 million | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 121 and 150 |
| C23 | Issuer-defined free cash flow, third quarter 2026 and nine months 2026, in USD millions | Q3 2026: 655 - 62 - 1 + 1; 9M 2026: 1,026 - 152 - 2 + 6 | USD 593 million; USD 878 million | EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 11 |
| C24 | Adjusted EBITDA of the first half of 2026 and implied fourth quarter 2025, in USD millions | 828 - 582 = 246; 393 - 302 = 91 | USD 246 million; USD 91 million | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56; 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115 |
| C25 | Illustration only (Analyst Judgement): last-twelve-months Adjusted EBITDA if Q3 2026 equalled Q3 2025 Adjusted EBITDA of 180, and total debt over it, in USD millions and times | 919 - 582 + 180 = 517; 1,781 / 517 | USD 517 million; 3.44x | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56 |
| C26 | Principal of the three CVR Energy notes at 2026-09-30, in USD millions | 600 + 400 + 183 | USD 1,183 million | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 |

## Gaps
- Pro forma debt, cash and leverage for the Marathon refinery acquisition are not established. High. The purchase price is about USD 4,200 million in cash, but the sources state neither when it closes nor how much of the USD 2,500 million bridge, the USD 800 million preferred placement or the USD 500 million of equity will be used, so the post-balance-sheet table gives no pro forma net debt for it and any forward leverage restricts every conclusion about creditor position after closing. A pro forma statement or the closing financing disclosure would close it.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 11–12
- Covenant levels and headroom are not established. High. The filings say the company complied with all covenants at September 30, 2026 and describe a minimum fixed charge coverage test in certain circumstances for the two asset-based facilities, but no level, definition or covenant EBITDA is printed, so headroom cannot be computed and Covenant capacity is restricted. The credit agreements and the indentures would close it.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 156 and 159; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 17
- Reported EBITDA and Adjusted EBITDA differ materially and the reported figure includes non-cash refining-obligation gains. Medium. For the last twelve months the two measures are USD 964 million and USD 919 million, and for FY2025 USD 591 million and USD 393 million, so any ratio quoted without its definition can mislead; both sets are shown and labelled. Company adjustment detail beyond the three headings is not supplied.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 56
- The fourth quarter of 2025 is not supplied on its own. Medium. The last-twelve-months figures to September 30, 2026 are built from the annual report and the nine-month comparatives, so they are unaudited and depend on the nine-month comparatives being comparable; the implied fourth-quarter 2025 figures are a difference, not a reported period.
Basis: calculation C7; calculation C16
- The balance sheet at September 30, 2025 is not supplied. Medium. The 9M 2025 column of the balance sheet is omitted and no leverage ratio at that date is stated, which restricts any trend of leverage within 2025; the closing cash of USD 670 million is known only from the cash flow statement.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 10
- Several lines are printed as a dash in the statements and notes, and each is carried as not supplied, not as zero. Medium. They are the FY2024 other operating expenses, the FY2025 and 9M 2025 debt issuance and dividend lines, the 9M 2026 loss on lower of cost or net realizable value and income taxes paid, the accrued income tax and derivative liability lines at earlier dates, and the other segment sales line. The balance sheet and cash flow totals still add; the unstated lines only limit line-level trend analysis.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 132 and 133; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 10, 15, 18 and 27
- Carrying value is disclosed by debt group, not by instrument, so each note is shown at principal with one financing cost adjustment. Medium. This restricts instrument-level carrying values and prices. The indentures would close it.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16
- Finance lease obligations of USD 61 million sit inside Total Debt but their legal rank, security, rate and payment schedule at September 30, 2026 are not stated, so they are left out of the debt stack and the maturity ladder. Medium. The payment schedule is printed only at December 31, 2025. The lease note in the September 2026 quarterly report would close it.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 15–16; 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 150
- Pricing of the CVR Energy credit facility after the February 2026 amendment, its borrowing-base conditions and any floor are not stated. Medium. The undrawn availability of USD 530 million rests on a borrowing base the sources do not describe, which restricts the liquidity conclusion. The amended credit agreement would close it.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 17; 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 156
- The amount of the CVR Partners distribution payable on November 23, 2026 that goes to public unitholders is not stated separately. Low. Only about USD 19 million in total and about USD 7 million to CVR Energy are given, so the effect of the distribution on consolidated cash is not established.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 62
- Segment sales are not comparable across the annual and 2026 columns. Medium. Renewables is a separate segment in the annual report and part of other in the 2026 reports, so each presentation has its own row and no series joins them; segment EBITDA and capital expenditure are not tabulated here.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 175; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 26
- The non-current operating lease liability and the 2026 lease maturity table are not supplied for September 30, 2026; only the current portion of USD 17 million is printed. Low. Lease claims outside debt are therefore stated only at December 31, 2025. The full lease note would close it.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 15; 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 150
- The December 2025 purchase commitments and transportation agreements are not updated at September 30, 2026. Low. The quarterly report states no material change outside the ordinary course except for debt, but no table is given, so these claims outside debt are carried at the December 2025 amounts.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 61; 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 121
- The nitrogen debt figure differs by USD 1 million between the quarterly report and the release. Low. The note totals USD 569 million net of current portion and the release states USD 570 million; the cause is not stated.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 9

## Next module
The orchestrator selects the next module.
