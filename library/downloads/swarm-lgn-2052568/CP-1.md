# Financial foundation for Legence Corp. (lgn-2052568)

## Request

Financial foundation for Legence Corp. (lgn-2052568), as of 2026-11-18, for the credit snapshot pathway (credit_snapshot). Scope: statements, debt, liquidity, leverage and interest cover from the five supplied filings, with statements in USD thousands as printed and money tables in US$m. No credit recommendation is made here.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_lgn-20251231.htm.jsonl | Annual report on Form 10-K of Legence Corp. for the fiscal year ended 31 December 2025 | 2026-03-30 (date signed; the first-quarter report's exhibit list gives the same filing date) | 51dc065b4728d53abfadd26e7a544b5e8afa84ae0d38cfe57ccdd1cae9a4ba25 | Audited FY2025 and FY2024 statements, debt note, revolver terms, interest paid, Adjusted EBITDA reconciliation. |
| 10-Q_2026-03-31_lgn-20260331.htm.jsonl | Quarterly report on Form 10-Q of Legence Corp. for the quarter ended 31 March 2026 | 2026-05-14 (date signed) | e9bb19a3ee6e67552e9c2e2a2db4c61621dd70d771e80363fc95d69bd81a80bd | Q1 2026 revenue and Adjusted EBITDA for the quarterly chart. |
| 10-Q_2026-06-30_lgn-20260630.htm.jsonl | Quarterly report on Form 10-Q of Legence Corp. for the quarter ended 30 June 2026 | 2026-08-13 (date signed) | 5663e478749a37f05ecffc8c145485144ab952d3f1330a50222ed966ae9935ba | Q2 2026 revenue and Adjusted EBITDA for the quarterly chart. |
| 10-Q_2026-09-30_lgn-20260930.htm.jsonl | Quarterly report on Form 10-Q of Legence Corp. for the quarter ended 30 September 2026 | 2026-11-12 (date signed) | 0379f5f78c4f331b131b8c9b66339b4af128d1d950ec3226705e4e638fba33b9 | Q3 and nine-month 2026 statements, debt note, liquidity, backlog, subsequent events. |
| 424B4_2024-12-31_lgn-20241231.htm.jsonl | Prospectus under Rule 424(b)(4) for the initial public offering of Class A common stock of Legence Corp. | 2025-09-11 (prospectus date; the supplied file name carries 2024-12-31) | 65389676403a6d4dfa57c216a53333cae3fea6fcf986c17e10e3c24bee694310 | FY2024 revolver availability and pre-offering debt terms only. |
| Source readiness (CP-0) | Handoff of the Source readiness module for this run | 2026-11-18 | d541366fd6a2ba0511d4f8797be030349e1b87952d6758c0dd6a61eb176e5002 | Source set, perimeter, period coverage and the limits on legal, rating and market inputs. |

## Findings

### Bottom line

Net leverage on reported EBITDA fell from 8.79x at FY2024 to 2.27x at 2026-09-30, first through IPO debt repayment and then through earnings growth that includes acquired businesses, shifting creditor risk to integration and cash conversion.
Basis: calculation C4; calculation C6; calculation C8; calculation C14; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 172; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 26

The issuer states only adjusted EBITDA, so reported EBITDA is derived here, and the choice matters: net leverage is 2.27x on reported EBITDA (2.56x pro forma for the acquisition completed on 2026-11-01) but 1.28x on the issuer's adjusted figure, and share-based and other non-cash compensation explains over half of the gap. Cash interest cover improved to 5.28x on the last twelve months from 1.61x for FY2025, but cash interest is measured net of swap settlements.
Basis: calculation C14; calculation C15; calculation C22; calculation C23; calculation C24; calculation C16; calculation C35; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 44–45

### Key findings

Deleveraging through FY2025 came from repaying debt, not from earnings: net leverage on reported EBITDA fell to 3.83x from 8.79x while reported EBITDA itself fell by 10.03%, because IPO proceeds and cash on hand repaid USD 780.3 million of term loan in September 2025. Adjusted EBITDA rose by 30.14% in the same year, but 72.25% of the rise in add-backs is the larger share-based compensation charge of the IPO year, so the two measures tell different stories.
Basis: calculation C4; calculation C5; calculation C25; calculation C26; calculation C37; calculation C38; calculation C39; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 172

Net debt has risen again since the year end because of acquisitions, but last-twelve-month reported EBITDA has nearly doubled, so net leverage still fell to 2.27x, or 2.56x pro forma for the acquisition completed on 2026-11-01. Acquisition spending was the largest use of cash in the nine months, ahead of capital expenditure, so the improvement depends on the acquired businesses holding their earnings and on integration going to plan.
Basis: calculation C5; calculation C6; calculation C7; calculation C14; calculation C35; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 18–20

Interest cover on cash interest rose to 5.28x from 1.61x because the IPO paydown cut interest, and is 9.32x on the issuer's adjusted EBITDA. The last twelve months include only nine months of interest on the USD 200.0 million incremental term loan drawn on 2026-01-02, and cash interest is net of swap settlements, so cover on a full year of that loan would be lower.
Basis: calculation C16; calculation C14; calculation C15; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 44–45

Working capital is absorbing cash as revenue scales, and supplier credit is covering part of it: the rise in contract assets used 66.74% of nine-month operating cash flow, while the rise in accounts payable supplied 42.11%. Balance sheet contract liabilities are up 42.00% and accounts payable 78.84% since the year end, by more than the cash flow statement shows, so part of the increase came with acquired businesses and a slowdown in awards would turn this float into a cash drain.
Basis: calculation C40; calculation C41; calculation C31; calculation C32; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10

Liquidity is cash plus an undrawn revolver, and letters of credit have grown to USD 30.7 million from USD 5.7 million at the year end, reducing availability on the USD 200.0 million facility. The springing leverage test applies only when revolver usage exceeds 35% of commitments, so the test is not live while the revolver stays undrawn.
Basis: calculation C28; calculation C29; calculation C30; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 27; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 174

### Limitations

Reported EBITDA is a house calculation because the issuer states only adjusted EBITDA, so every reported-basis ratio moves with non-cash items such as share-based compensation and impairments, and leverage conclusions should be read against both measures.
Basis: calculation C7; calculation C14; calculation C15; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72

The only maturity ladder in the filings is at 2025-12-31 and predates the incremental term loan of 2026-01-02, so debt maturing by year is not established at the latest balance sheet date beyond the term loan maturity of 2031-12-16.
Basis: 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 171; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 26

Cash interest paid is stated net of interest rate swap settlements, so interest cover on cash interest cannot be split between interest and hedge cash flows and understates the burden if swap receipts fade.
Basis: 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 44–45

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_lgn-20251231.htm.jsonl | Annual report on Form 10-K | Fiscal years 2025, 2024 and 2023; balance sheets at 2025-12-31 and 2024-12-31 | USD | thousands | Legence Corp., consolidated with Legence Holdings LLC and two professional corporations | US GAAP | Tier 1 (audited statements) | Audited baseline, debt note, revolver terms, interest paid, Adjusted EBITDA reconciliation | FY2024 columns are the pre-offering presentation with member's equity; revolver maturity stated here only. |
| 10-Q_2026-03-31_lgn-20260331.htm.jsonl | Quarterly report on Form 10-Q | Quarter ended 2026-03-31 with 2025 comparatives | USD | thousands | Legence Corp., consolidated | US GAAP | Tier 2b (unaudited, no auditor review stated) | First-quarter revenue and Adjusted EBITDA | Unaudited. |
| 10-Q_2026-06-30_lgn-20260630.htm.jsonl | Quarterly report on Form 10-Q | Quarter and six months ended 2026-06-30 with 2025 comparatives | USD | thousands | Legence Corp., consolidated | US GAAP | Tier 2b (unaudited, no auditor review stated) | Second-quarter revenue and Adjusted EBITDA | Unaudited. |
| 10-Q_2026-09-30_lgn-20260930.htm.jsonl | Quarterly report on Form 10-Q | Quarter and nine months ended 2026-09-30 with 2025 comparatives | USD | thousands | Legence Corp., consolidated | US GAAP | Tier 2b (unaudited, no auditor review stated) | Latest statements, debt note, liquidity, backlog, subsequent events | Unaudited; no maturity ladder; post-quarter events not reflected. |
| 424B4_2024-12-31_lgn-20241231.htm.jsonl | IPO prospectus, Rule 424(b)(4) | Predecessor FY2024, FY2023 and FY2022 audited; six months ended 2025-06-30 unaudited | USD | thousands | Legence Corp. and Legence Holdings LLC (predecessor) | US GAAP | Tier 1 (audited FY2024); Tier 2b (interim) | FY2024 revolver availability and pre-offering debt terms | Superseded for debt terms by later amendments; not used for statement figures. |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Legence Corp. | Issuer and registrant; holding company whose Class A common stock trades on Nasdaq as LGN | 31 December | USD | thousands | Consolidates Legence Holdings LLC (variable interest entity, primary beneficiary) and two professional corporations; noncontrolling interests included | US GAAP | FY2025 and FY2024 audited; Q1, Q2, Q3, H1 and 9M 2026 unaudited with 2025 comparatives |
| Legence Holdings LLC | Borrower under the credit agreement; operating company consolidated by the issuer | 31 December | USD | thousands | Not reported separately | US GAAP | Not supplied: no separate statements |
| Legence Intermediate LLC | Holdings entity under the credit agreement | 31 December | USD | thousands | Not reported separately | US GAAP | Not supplied: no separate statements |
| Guarantors | Described only as the guarantors party to the credit agreement from time to time | Not supplied: not stated | USD | thousands | Not supplied: guarantors are not named | US GAAP | Not supplied: no guarantor statements |
| Legence Holdings LLC (Predecessor) | Reporting entity of the pre-offering statements in the prospectus | 31 December | USD | thousands | Predecessor consolidated | US GAAP | FY2024, FY2023 and FY2022 audited; six months ended 2025-06-30 unaudited (prospectus only) |

Subsequent events after the 2026-09-30 balance sheet, flagged and kept out of every period figure: the acquisition of CTI completed on 2026-11-01 for estimated consideration of USD 90.0 million cash and 256,411 Class A shares, and a USD 150.0 million share repurchase programme authorised on 2026-11-10. Both are carried only in the post-balance-sheet adjustments table.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Money tables restated from thousands to millions | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–10 | Unit conversion | USD thousands as printed | US$m, three decimals, exact | The net debt, liquidity, ladder and chart tables use US$m; statements keep the printed thousands | All money tables |
| Total Debt built from two balance sheet lines | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 | Aggregation | Current portion of long-term debt and long-term debt, net of current portion | Total Debt at carrying value | Carrying value, net of issuance costs and discounts, includes finance lease liabilities the issuer carries in its debt lines | FY2024, FY2025, 9M 2026 |
| EBITDA (Reported) derived from components | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 | Derivation | No unadjusted EBITDA stated by the issuer | Net income + interest expense + interest income + income tax + total depreciation and amortization | The method derives EBITDA when it is not stated; Analyst Judgement on the component set | All six income statement periods |
| LTM figures constructed to 2026-09-30 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 | Derived period | Full year, nine months 2026 and nine months 2025 | Full year + nine months 2026 - nine months 2025 | Latest full year plus current stub less prior-year stub; all components stated | LTM to 2026-09-30 |
| Q4 2025 constructed as full year less nine months | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 | Derived period | No discrete fourth quarter reported | Revenue and Adjusted EBITDA for Q4 2025, labelled calculated | Used only in the quarterly revenue and EBITDA chart | Q4 2025 |
| Presentation basis kept as printed | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–125 | None | FY2024 shown with member's equity and no earnings-per-share | Unchanged | The pre-offering presentation is retained and labelled; no pro forma restatement is stated by the issuer | FY2024 |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |

### T4.4 Income statement

| Line item | FY2025 | FY2024 | Q3 2026 | Q3 2025 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | 2,550,491 | 2,098,602 | 1,310,668 | 708,006 | 3,610,688 | 1,812,849 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Cost of revenue | 2,014,566 | 1,667,835 | 1,035,169 | 559,947 | 2,928,804 | 1,424,412 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Gross profit | 535,925 | 430,767 | 275,499 | 148,059 | 681,884 | 388,437 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Selling, general and administrative | 342,627 | 242,888 | 70,467 | 85,887 | 334,153 | 227,814 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Depreciation and amortization (operating expense line) | 100,365 | 97,153 | 37,638 | 24,183 | 112,438 | 75,619 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Acquisition-related costs | 5,739 | 5,634 | 499 | 795 | 12,346 | 971 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| (Gain) loss on sale of property and equipment | -326 | Not supplied: the filing prints a dash for this period | -116 | 21 | -298 | -199 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Goodwill impairment | 24,966 | 17,804 | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | 21,586 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Long-lived asset impairment | 2,415 | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | 19,491 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Equity in earnings of joint venture | -1,443 | -3,063 | -115 | -24 | -707 | -848 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Income from operations | 61,582 | 70,351 | 167,126 | 37,197 | 182,875 | 85,080 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Interest expense, net of capitalized interest | 101,778 | 91,609 | 16,477 | 28,183 | 50,388 | 88,228 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Interest income | -4,488 | -5,464 | -2,505 | -1,069 | -5,739 | -2,588 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Credit agreement amendment fees | 6,302 | 7,801 | Not supplied: the filing prints a dash for this period | 64 | 5,257 | 2,990 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Loss on debt extinguishment | 6,651 | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | 5,685 | 13 | 5,685 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Other expense (income), net | 6,481 | -473 | -505 | -123 | -1,243 | -268 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Total other expense, net | 116,724 | 93,473 | 13,467 | 32,740 | 48,676 | 94,047 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Income (loss) before income tax | -55,142 | -23,122 | 153,659 | 4,457 | 134,199 | -8,967 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Income tax expense (benefit) | 22,161 | 4,521 | 19,782 | 4,078 | 17,492 | 13,662 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Net income (loss) | -77,303 | -27,643 | 133,877 | 379 | 116,707 | -22,629 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Net income (loss) attributable to noncontrolling interests | -17,523 | 912 | 44,304 | 955 | 38,881 | 4,430 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Net income (loss) attributable to Legence | -59,780 | -28,555 | 89,573 | -576 | 77,826 | -27,059 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| Depreciation and amortization, total (issuer's Adjusted EBITDA reconciliation) | 114,288 | 110,849 | 44,417 | 27,490 | 130,883 | 85,611 | USD thousands | reported; includes depreciation and amortization carried in cost of revenue | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 71 |
| EBITDA (Reported) | 156,436 | 173,872 | 212,048 | 59,061 | 309,731 | 162,284 | USD thousands | calculated: net income + interest expense + interest income + income tax + total depreciation and amortization; the issuer states no unadjusted EBITDA; calculation C7; calculation C8; calculation C9; calculation C10; calculation C11; calculation C12 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 |
| EBITDA (Adjusted) | 298,825 | 229,625 | 177,008 | 88,821 | 449,678 | 211,844 | USD thousands | issuer-stated Adjusted EBITDA (non-GAAP): reported EBITDA plus the add-backs in the EBITDA bridge table; identity issuer-adjusted | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 |

### T4.5 Cash flow statement

| Line item | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | -77,303 | -27,643 | 116,707 | -22,629 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Amortization of intangible assets | 82,342 | 80,967 | 98,604 | 61,888 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Depreciation of property and equipment | 31,946 | 29,882 | 32,279 | 23,723 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Goodwill impairment | 24,966 | 17,804 | 21,586 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Long-lived asset impairment | 2,415 | Not supplied: the filing prints a dash for this period | 19,491 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Amortization of debt issuance costs and discounts | 3,480 | 5,052 | 1,299 | 3,007 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Loss on debt extinguishment | 6,651 | Not supplied: the filing prints a dash for this period | 13 | 5,685 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Stock-based compensation | 67,550 | 5,411 | 61,158 | 21,881 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Compensation expense - Performance Interests | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | 15,554 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Deferred taxes | 15,287 | -13,704 | -24,643 | 6,378 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Tax receivable agreement liability remeasurement | 2,914 | Not supplied: the filing prints a dash for this period | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Equity in earnings of joint venture | -1,443 | -3,063 | -707 | -848 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Return on investment in joint venture | 1,700 | 1,000 | 500 | 500 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Operating lease right-of-use asset lease expense | 18,279 | 13,091 | 22,484 | 12,959 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Other (operating adjustments) | 1,158 | 3,749 | 348 | 148 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Accounts receivable, net | -130,070 | 17,955 | -73,599 | -139,448 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Contract assets | -71,185 | -50,995 | -184,847 | -46,182 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Prepaid expenses and other current assets | 2,929 | 4,498 | -12,395 | 1,198 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Accounts payable | 117,910 | 10,699 | 116,630 | 94,542 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Accrued compensation and benefits | 12,298 | -2,778 | 57,174 | 34,355 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Accrued and other current liabilities | -13,967 | -36,638 | 11,751 | -4,110 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Contract liabilities | 172,194 | -14,507 | 15,535 | 120,027 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Operating lease liabilities, current and long-term | -15,280 | -10,603 | -19,417 | -10,727 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Other long-term assets and liabilities | 2,102 | -909 | 1,476 | -223 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Purchases of property and equipment | -37,940 | -19,008 | -60,184 | -24,734 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Consideration paid for acquisitions, net of cash acquired | -16,497 | -225,246 | -281,293 | -453 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Proceeds from sale of property and equipment | 390 | 269 | 327 | 226 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Term loan borrowings | 59,636 | 565,000 | 200,000 | 2,495 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Term loan payments | -852,214 | -13,682 | -7,471 | -795,073 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Revolver borrowings | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | 25,000 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Revolver payments | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | -25,000 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Notes payable payments | -7,878 | -6,485 | -7,428 | -6,102 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Finance lease payments | -3,843 | -2,460 | -4,430 | -2,694 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Cash distributions to Legence Parent | Not supplied: the filing prints a dash for this period | -301,614 | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Distribution to Legence Parent | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | -5,800 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Cash contributions from Legence Parent | Not supplied: the filing prints a dash for this period | 400 | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Proceeds from issuance of shares under ESPP | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | 1,768 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Proceeds from IPO, net of underwriting discounts and commissions | 780,243 | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | 780,243 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Debt issuance costs | -1,626 | -1,495 | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Payments of contingent consideration | Not supplied: the filing prints a dash for this period | -32,504 | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Payments for deferred offering costs | -28,145 | -196 | -60 | -21,165 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Proceeds from exercise of stock options | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | 175 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Payments of withholding taxes related to net share settlement of equity awards | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | -3,404 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Other (financing) | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | 1,431 | Not supplied: the filing prints a dash for this period | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Net Cash from Operating Activities | 256,873 | 29,268 | 276,981 | 162,124 | USD thousands | reported: cash provided by operating activities | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Net Cash from Investing Activities | -54,047 | -243,985 | -341,150 | -24,961 | USD thousands | reported: cash used in investing activities | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Net Cash from Financing Activities | -53,827 | 206,964 | 174,781 | -42,296 | USD thousands | reported: cash (used in) provided by financing activities | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Net Cash Change | 148,999 | -7,753 | 110,612 | 94,867 | USD thousands | reported: increase (decrease) in cash and cash equivalents; no FX effect line is printed | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Opening Cash | 81,167 | 88,920 | 230,166 | 81,167 | USD thousands | reported: beginning of period; the 10-K label adds restricted cash and no restricted cash is separately stated | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Closing Cash | 230,166 | 81,167 | 340,778 | 176,034 | USD thousands | reported: end of period | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| Cash Interest Paid | 96,884 | 85,662 | 44,757 | 84,089 | USD thousands | reported: interest paid, net of interest rate swaps, positive amount paid | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 44 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2024 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 230,166 | 81,167 | 340,778 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Accounts receivable, net | 584,060 | 448,610 | 841,535 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Contract assets, net | 259,941 | 188,132 | 513,316 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Prepaid expenses and other current assets | 36,179 | 38,506 | 67,383 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Total current assets | 1,110,346 | 756,415 | 1,763,012 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Property and equipment, net | 92,333 | 73,381 | 140,112 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Operating lease right-of-use assets | 117,139 | 90,922 | 155,441 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Goodwill | 764,336 | 781,194 | 822,521 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Intangible assets, net | 551,420 | 624,250 | 759,525 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Other assets | 43,822 | 26,338 | 192,018 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Total Assets | 2,679,396 | 2,352,500 | 3,832,629 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Accounts payable | 246,161 | 126,502 | 440,232 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Accrued compensation and benefits | 68,064 | 54,601 | 153,655 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Accrued and other current liabilities | 16,475 | 28,490 | 93,386 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Contract liabilities | 339,462 | 164,130 | 482,046 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Current portion of operating lease liabilities | 21,300 | 14,402 | 33,050 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Current portion of long-term debt | 16,694 | 22,984 | 22,329 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Total current liabilities | 708,156 | 411,109 | 1,224,698 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Long-term debt, net of current portion | 812,398 | 1,585,846 | 1,007,424 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Operating lease liabilities, net of current portion | 103,762 | 80,669 | 130,505 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Tax receivable agreement liability - related party | 207,448 | Not supplied: the filing prints a dash for this period | 342,729 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Deferred tax liabilities, net | 46,714 | 35,428 | 42,390 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Other long-term liabilities | 12,123 | 35,856 | 12,847 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Total Liabilities | 1,890,601 | 2,148,908 | 2,760,593 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Member's equity | Not supplied: the filing prints a dash for this period | 443,738 | Not supplied: the line is not printed in this filing | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Class A common stock | 638 | Not supplied: the filing prints a dash for this period | 771 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Class B common stock | 415 | Not supplied: the filing prints a dash for this period | 312 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Class A common stock in treasury at cost | Not supplied: the filing prints a dash for this period | Not supplied: the line is not printed in this filing | -3,404 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Additional paid-in capital | 701,791 | Not supplied: the filing prints a dash for this period | 909,132 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Accumulated deficit | -309,949 | -250,169 | -232,123 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Accumulated other comprehensive income (loss) | -698 | 9,111 | 7,792 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Total Legence stockholders' equity (member's equity for FY2024) | 392,197 | 202,680 | 682,480 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Noncontrolling interests | 396,598 | 912 | 389,556 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Total Equity | 788,795 | 203,592 | 1,072,036 | USD thousands | reported | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| Total Debt | 829,092 | 1,608,830 | 1,029,753 | USD thousands | calculated: current portion of long-term debt plus long-term debt, net of current portion; carrying value net of issuance costs and discounts; includes finance lease liabilities the issuer carries in its debt lines; calculation C2; calculation C1; calculation C3 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5; 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 170–171; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 25 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Term loan (Legence Holdings LLC borrower; Jefferies Finance LLC agent) | Term loan, including the incremental term loan of USD 200.0 million drawn 2026-01-02 | 984,836 | 990,301 | 990,301 | Not applicable | Secured by a lien on substantially all assets of Legence Holdings LLC and its wholly-owned subsidiaries, subject to customary exclusions | Secured, pari passu with the revolving credit facility | USD | 984,836 | Not applicable | SOFR plus 1.75%, SOFR floor 0.75%; base rate loans at the base rate plus 0.75% | Floating | SOFR | 175 | 75 | 2031-12-16 | 10,000 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 25–26; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 29 |
| Revolving credit facility | Revolver of USD 200.0 million, undrawn; USD 30.7 million of letters of credit outstanding; springing first lien net leverage test applies only if usage exceeds 35% | 0 | 0 | 0 | 200,000 | Secured by a lien on substantially all assets of Legence Holdings LLC and its wholly-owned subsidiaries, pari passu with the term loan | Secured, pari passu with the term loan | USD | 0 | Not applicable | SOFR plus 2.25%; unused commitment fee 0.38% | Floating | SOFR | 225 | Not supplied: the floor after the 2025 amendment is not stated | 2030-09-22 | 0 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 27; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 174 |
| Notes payable (promissory notes to former owners of acquired companies and other notes) | Acquisition promissory notes and other notes payable | Not supplied: carrying value is stated only for the promissory notes component (21,817) | 29,369 | Not applicable | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 29,369 | Not applicable | 5.5% stated on the 2022 acquisition promissory notes; other notes not stated | Fixed for the 2022 acquisition promissory notes; others not stated | Not applicable | Not applicable | Not applicable | 2027 and 2028 for the two 2022 acquisition notes; others not stated | Not supplied: scheduled repayments are not stated | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 28–29 |
| Finance lease liabilities | Finance leases carried within the debt lines | 16,521 | 16,521 | Not applicable | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 16,521 | Not applicable | 7.2% weighted-average discount rate at 2025-12-31 in the annual report; not stated at 2026-09-30 | Not supplied: the rate type is not stated | Not applicable | Not applicable | Not applicable | Weighted-average remaining term of 3.1 years at 2025-12-31 in the annual report; not stated at 2026-09-30 | Not supplied: scheduled repayments are not stated | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 25; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 169 |
| Financing cost adjustment | Unamortized issuance costs and discounts not already deducted in the term loan carrying value | -973 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -973 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 29; calculation C36 |

The Reporting Currency Amount cells (984,836, 0, 29,369, 16,521 and -973, in USD thousands) add to Total Debt of 1,029,753 at 2026-09-30.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM to 2026-09-30 | USD 2,550.491m | USD 3,610.688m | USD 1,812.849m | USD 4,348.330m | Calculated | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 | Includes acquired businesses from their completion dates. |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 156.436m | USD 309.731m | USD 162.284m | USD 303.883m | Calculated | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 | Derived from components; Q3 2026 includes a non-cash compensation credit. |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 298.825m | USD 449.678m | USD 211.844m | USD 536.659m | Calculated | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 | Issuer-adjusted; the issuer's add-back definitions apply. |
| Cash Interest Paid | LTM to 2026-09-30 | USD 96.884m | USD 44.757m | USD 84.089m | USD 57.552m | Calculated | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 44 | Net of interest rate swap settlements. |
| Revenue | Q4 2025 (full year less nine months) | USD 2,550.491m | Not applicable | USD 1,812.849m | USD 737.642m | Calculated | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 | No discrete fourth quarter is reported; labelled calculated. |
| EBITDA (Adjusted) | Q4 2025 (full year less nine months) | USD 298.825m | Not applicable | USD 211.844m | USD 86.981m | Calculated | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 | No discrete fourth quarter is reported; labelled calculated. |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1608.830 | Net debt data, Gross debt, carrying value | 173.872 | EBITDA (Reported), income statement | FY2024 / 2024-12-31 | USD | US$m | 9.25 | Calculated | Tier 1 (audited statements) | EBITDA (Reported) is derived from components; the issuer states no unadjusted EBITDA. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1527.663 | Net debt data, Net debt | 173.872 | EBITDA (Reported), income statement | FY2024 / 2024-12-31 | USD | US$m | 8.79 | Calculated | Tier 1 (audited statements) | EBITDA (Reported) is derived from components; the issuer states no unadjusted EBITDA. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 173.872 | EBITDA (Reported), income statement | 85.662 | Cash Interest Paid, cash flow statement | FY2024 / 2024-12-31 | USD | US$m | 2.03 | Calculated | Tier 1 (audited statements) | EBITDA (Reported) is derived from components; the issuer states no unadjusted EBITDA. Cash interest is net of swap settlements. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1608.830 | Net debt data, Gross debt, carrying value | 229.625 | EBITDA (Adjusted), income statement | FY2024 / 2024-12-31 | USD | US$m | 7.01 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA; add-backs per the EBITDA bridge. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1527.663 | Net debt data, Net debt | 229.625 | EBITDA (Adjusted), income statement | FY2024 / 2024-12-31 | USD | US$m | 6.65 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA; add-backs per the EBITDA bridge. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 229.625 | EBITDA (Adjusted), income statement | 85.662 | Cash Interest Paid, cash flow statement | FY2024 / 2024-12-31 | USD | US$m | 2.68 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA; add-backs per the EBITDA bridge. Cash interest is net of swap settlements. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 829.092 | Net debt data, Gross debt, carrying value | 156.436 | EBITDA (Reported), income statement | FY2025 / 2025-12-31 | USD | US$m | 5.30 | Calculated | Tier 1 (audited statements) | EBITDA (Reported) is derived from components; the issuer states no unadjusted EBITDA. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 598.926 | Net debt data, Net debt | 156.436 | EBITDA (Reported), income statement | FY2025 / 2025-12-31 | USD | US$m | 3.83 | Calculated | Tier 1 (audited statements) | EBITDA (Reported) is derived from components; the issuer states no unadjusted EBITDA. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 156.436 | EBITDA (Reported), income statement | 96.884 | Cash Interest Paid, cash flow statement | FY2025 / 2025-12-31 | USD | US$m | 1.61 | Calculated | Tier 1 (audited statements) | EBITDA (Reported) is derived from components; the issuer states no unadjusted EBITDA. Cash interest is net of swap settlements. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 829.092 | Net debt data, Gross debt, carrying value | 298.825 | EBITDA (Adjusted), income statement | FY2025 / 2025-12-31 | USD | US$m | 2.77 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA; add-backs per the EBITDA bridge. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 598.926 | Net debt data, Net debt | 298.825 | EBITDA (Adjusted), income statement | FY2025 / 2025-12-31 | USD | US$m | 2.00 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA; add-backs per the EBITDA bridge. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 298.825 | EBITDA (Adjusted), income statement | 96.884 | Cash Interest Paid, cash flow statement | FY2025 / 2025-12-31 | USD | US$m | 3.08 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA; add-backs per the EBITDA bridge. Cash interest is net of swap settlements. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1029.753 | Net debt data, Gross debt, carrying value | 303.883 | EBITDA (Reported), constructed period register | 2026-09-30 | USD | US$m | 3.39 | Calculated | Tier 2b (unaudited components) | EBITDA (Reported) is derived from components; the issuer states no unadjusted EBITDA. LTM construction in the constructed period register. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 688.975 | Net debt data, Net debt | 303.883 | EBITDA (Reported), constructed period register | 2026-09-30 | USD | US$m | 2.27 | Calculated | Tier 2b (unaudited components) | EBITDA (Reported) is derived from components; the issuer states no unadjusted EBITDA. LTM construction in the constructed period register. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 303.883 | EBITDA (Reported), constructed period register | 57.552 | Cash Interest Paid, constructed period register | 2026-09-30 | USD | US$m | 5.28 | Calculated | Tier 2b (unaudited components) | EBITDA (Reported) is derived from components; the issuer states no unadjusted EBITDA. LTM construction in the constructed period register. Cash interest is net of swap settlements. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1029.753 | Net debt data, Gross debt, carrying value | 536.659 | EBITDA (Adjusted), constructed period register | 2026-09-30 | USD | US$m | 1.92 | Calculated | Tier 2b (unaudited components) | Issuer-adjusted EBITDA; add-backs per the EBITDA bridge. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 688.975 | Net debt data, Net debt | 536.659 | EBITDA (Adjusted), constructed period register | 2026-09-30 | USD | US$m | 1.28 | Calculated | Tier 2b (unaudited components) | Issuer-adjusted EBITDA; add-backs per the EBITDA bridge. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 536.659 | EBITDA (Adjusted), constructed period register | 57.552 | Cash Interest Paid, constructed period register | 2026-09-30 | USD | US$m | 9.32 | Calculated | Tier 2b (unaudited components) | Issuer-adjusted EBITDA; add-backs per the EBITDA bridge. Cash interest is net of swap settlements. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Order book | Backlog, period-end, US$m (equal to remaining performance obligations) | 2,317.807 | 4,108.028 | Not applicable: the period-end value is in the quarter column | Not applicable: the period-end value is in the quarter column | Up | Growth is attributed by the issuer to the Bowers acquisition and higher awards; the organic share is not stated. 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 73–75 |
| Order book | Backlog and awarded contracts, period-end, US$m | 3,065.448 | 5,900.584 | Not applicable: the period-end value is in the quarter column | Not applicable: the period-end value is in the quarter column | Up | Awarded contracts have no signed contract yet and are not performance obligations. 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 74 |
| Order book | Book-to-bill, ratio in times (period flow) | 1.5 | 1.2 | 1.3 | 1.2 | Down | Bookings are growing more slowly than revenue in the quarter. 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 74 |
| Margin | Adjusted EBITDA margin, issuer-reported, % | 12.5 | 13.5 | 11.7 | 12.5 | Up | Issuer-adjusted; includes the non-cash compensation credit in Q3 2026. 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 72 |
| Revenue mix | Data centers and technology share of revenue, issuer-reported, % | 41.6 | 63.1 | 39.2 | 62.6 | Up | Rising customer-end-market concentration. 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 47 |
| Revenue mix | New building share of revenue, issuer-reported, % | 41.5 | 60.6 | 37.1 | 61.1 | Up | Project-based new-build work is now the larger share. 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 47 |
| Segment revenue | Engineering & Consulting revenue, US$m | 212.172 | 199.940 | 553.713 | 572.634 | Mixed | Down in the quarter, up in the nine months. 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 16 |
| Segment revenue | Installation & Maintenance revenue, US$m | 495.834 | 1,110.728 | 1,259.136 | 3,038.054 | Up | Includes acquired businesses. 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 16 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Net income + interest + tax + depreciation and amortization, unadjusted | Adjusted EBITDA only: also adds back impairments, share-based and other non-cash compensation, acquisition, integration and strategic costs, amendment fees and other items | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 | All periods | LTM gap of USD 232,776 thousand between the two measures, of which share-based and other non-cash compensation is 125,158 thousand; leverage is 2.27x reported and 1.28x adjusted | Fundamental credit and any leverage or cover ratio | Both measures are shown, reported is primary; the choice is flagged wherever a ratio is quoted |
| Total Debt | Carrying value, net of issuance costs and discounts, including finance leases carried in debt lines | Total debt in the debt note is principal including finance leases; the balance sheet shows carrying value | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 170–171; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 25 | FY2025; 2026-09-30 | USD 6,667 thousand at FY2025 and 6,438 thousand at 2026-09-30 between principal and carrying value | Net debt and leverage | Carrying value is used; principal is stated beside it in the net debt table |
| Interest cost | Cash interest paid on the cash flow statement | Interest paid net of interest rate swaps; interest expense on the income statement is a separate, higher figure | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 44–45 | All periods | FY2025 interest expense 101,778 thousand against 96,884 thousand paid | Interest cover | Cash interest paid is the denominator, as the method states; the swap netting is flagged |
| Stock-based compensation | Expense recognised in the period | The Adjusted EBITDA add-back differs from the cash flow statement line: 68,003 against 67,550 thousand for FY2025, and 79,036 against 61,158 thousand plus 15,554 thousand for the nine months of 2026 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 | FY2025; 9M 2026 | Small for FY2025; 2,324 thousand for the nine months of 2026 | EBITDA (Adjusted) | The issuer's add-back is used for EBITDA (Adjusted); the difference is unexplained beyond the issuer's note that the add-back covers legacy interests, RSUs, options and the employee share plan |
| Depreciation and amortization | Total depreciation and amortization of property and intangibles | The income statement line excludes amounts carried in cost of revenue; the reconciliation and cash flow statement carry the total | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 71 | All periods | FY2025: 100,365 thousand on the income statement against 114,288 thousand in total | EBITDA | The total from the reconciliation is used in EBITDA (Reported) |
| Tax receivable agreement liability | Outside Total Debt: a related-party liability to the pre-offering owners | Recorded as a separate balance sheet liability, not in debt | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 39 | FY2025; 2026-09-30 | 342,729 thousand at 2026-09-30 against 207,448 thousand at FY2025 | Net debt and structural claims | Excluded from Total Debt and flagged as a non-debt claim |
| Perimeter | Consolidated issuer group | Consolidated statements include noncontrolling interests and two consolidated professional corporations whose assets can settle only their own obligations | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 24 | All periods | Cash of the professional corporations is 5,027 thousand at 2026-09-30 | Liquidity | Consolidated cash is used; the restricted share is flagged |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and interest cover at 2026-09-30 | Ready with Limitations | Reported EBITDA is derived; cash interest is net of swap settlements; LTM includes acquired earnings only from completion dates | Quote both reported and adjusted measures |
| Debt structure and maturities | Ready with Limitations | Ladder only at 2025-12-31; guarantors and ranking of notes and leases not stated | Obtain the amortisation schedule and guarantor list |
| Liquidity | Ready with Limitations | Revolver availability is net of letters of credit; post-quarter acquisition cash is not reflected | Update for the 2026-11-01 acquisition funding |
| Earnings and cash flow trend | Ready | Interim figures are unaudited; Q4 2025 is calculated, not reported | None |
| Pro forma for post-quarter events | Ready with Limitations | Acquired net debt, cash and earnings of the 2026-11-01 acquisition are not stated | Obtain the acquisition's financial terms |
| Covenant headroom | Not Ready | Covenant EBITDA definition and the executed agreement are not supplied | Obtain the credit agreement |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 9.25 | 8.79 | x | FY2024 audited; debt before the 2025 IPO paydown; EBITDA (Reported) derived; carrying-value debt. |
| FY2025 / 2025-12-31 | 5.30 | 3.83 | x | FY2025 audited; debt after the 2025 IPO paydown; EBITDA (Reported) derived; carrying-value debt. |
| 2026-09-30 | 3.39 | 2.27 | x | LTM to 2026-09-30 (full year 2025 + nine months 2026 - nine months 2025); EBITDA (Reported) derived; debt at 2026-09-30 carrying value before the 2026-11-01 acquisition. |

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2.03 | x | FY2024 audited; cash interest paid net of swap settlements; EBITDA (Reported) derived. |
| FY2025 / 2025-12-31 | 1.61 | x | FY2025 audited; includes pre-IPO interest to September 2025; cash interest net of swap settlements; EBITDA (Reported) derived. |
| 2026-09-30 | 5.28 | x | LTM to 2026-09-30; cash interest net of swap settlements; includes only nine months of interest on the incremental term loan drawn 2026-01-02; EBITDA (Reported) derived. |

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 81.167 | 84.8 | US$m | Revolver commitment USD 90.0 million less USD 5.2 million letters of credit; cash at 2024-12-31; undrawn availability per the prospectus. |
| FY2025 / 2025-12-31 | 230.166 | 194.3 | US$m | Revolver commitment USD 200.0 million less USD 5.7 million letters of credit; cash at 2025-12-31. |
| 2026-09-30 | 340.778 | 169.3 | US$m | Revolver commitment USD 200.0 million less USD 30.7 million letters of credit; cash at 2026-09-30 includes cash of the consolidated professional corporations that can settle only their own obligations; the acquisition of 2026-11-01 is not reflected. |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 12.963 | US$m | Contractual principal due in 2026; ladder drawn at 2025-12-31 from the annual report and excludes finance lease liabilities; predates the incremental term loan of 2026-01-02. |
| FY2027 | 18.592 | US$m | Contractual principal due in 2027; ladder drawn at 2025-12-31 from the annual report and excludes finance lease liabilities; predates the incremental term loan of 2026-01-02. |
| FY2028 | 19.722 | US$m | Contractual principal due in 2028; ladder drawn at 2025-12-31 from the annual report and excludes finance lease liabilities; predates the incremental term loan of 2026-01-02. |
| FY2029 | 7.978 | US$m | Contractual principal due in 2029; ladder drawn at 2025-12-31 from the annual report and excludes finance lease liabilities; predates the incremental term loan of 2026-01-02. |
| FY2030 | 7.978 | US$m | Contractual principal due in 2030; ladder drawn at 2025-12-31 from the annual report and excludes finance lease liabilities; predates the incremental term loan of 2026-01-02. |
| FY2031 | 757.884 | US$m | Contractual principal due in 2031 and later, which includes the term loan maturing 2031-12-16; ladder drawn at 2025-12-31 and excludes finance lease liabilities. |

### Financials and credit metrics

| Line item | FY2024 | FY2025 | LTM to 2026-09-30 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue | 2098.602 | 2550.491 | 4348.330 | US$m | reported; LTM calculated | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6; calculation C13 |
| EBITDA (Reported) | 173.872 | 156.436 | 303.883 | US$m | calculated; derived from components | calculation C8; calculation C7; calculation C14 |
| EBITDA (Adjusted) | 229.625 | 298.825 | 536.659 | US$m | issuer-stated; LTM calculated | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72; calculation C15 |
| Cash interest paid | 85.662 | 96.884 | 57.552 | US$m | reported; net of swap settlements; LTM calculated | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 44; calculation C16 |
| Gross debt (Total Debt, carrying value) | 1608.830 | 829.092 | 1029.753 | US$m | calculated at period end | calculation C1; calculation C2; calculation C3 |
| Cash | 81.167 | 230.166 | 340.778 | US$m | reported at period end | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 121; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 4 |
| Net debt | 1527.663 | 598.926 | 688.975 | US$m | calculated at period end | calculation C4; calculation C5; calculation C6 |
| Total debt / EBITDA (Reported) | 9.25 | 5.30 | 3.39 | x | calculated | T4.9 Calculation register |
| Net debt / EBITDA (Reported) | 8.79 | 3.83 | 2.27 | x | calculated | T4.9 Calculation register |
| Net debt / EBITDA (Adjusted) | 6.65 | 2.00 | 1.28 | x | calculated | T4.9 Calculation register |
| EBITDA (Reported) / cash interest | 2.03 | 1.61 | 5.28 | x | calculated | T4.9 Calculation register |
| EBITDA (Adjusted) / cash interest | 2.68 | 3.08 | 9.32 | x | calculated | T4.9 Calculation register |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1608.830 | 81.167 | 1527.663 | US$m | Reported balance sheet at 2024-12-31; gross debt is carrying value including finance lease liabilities of USD 7.216 million carried in debt lines; principal total 1,624.649 in the debt note; before the 2025 IPO paydown.; calculation C1; calculation C4 |
| FY2025 / 2025-12-31 | 829.092 | 230.166 | 598.926 | US$m | Reported balance sheet at 2025-12-31 after the prepayment of USD 780.3 million of term loan on 2025-09-15; gross debt is carrying value including finance lease liabilities carried in debt lines; principal total 835.759 in the debt note.; calculation C2; calculation C5 |
| 2026-09-30 | 1029.753 | 340.778 | 688.975 | US$m | Reported balance sheet at 2026-09-30, reported and before the 2026-11-01 acquisition; gross debt is carrying value including finance lease liabilities carried in debt lines; principal total 1,036.191 in the debt note.; calculation C3; calculation C6 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 825.117 | 3.975 | 829.092 | US$m | Ladder at 2025-12-31 (term loan 797.772 and notes payable 27.345); reconciling items are finance lease liabilities of 10.642 carried in debt lines less unamortized issuance costs and discounts of 6.667; calculation C20; calculation C19; calculation C2; 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 170–171 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Acquisition of Central Texas Industrial Contractors LLC (CTI) completed | 2026-11-01 | 90.0 | 778.975 | 2.56 | US$m | Estimated consideration of USD 90.0 million cash and 256,411 Class A shares, subject to purchase price adjustments; net debt rises by the cash paid whether funded from cash or borrowings; pro forma net leverage uses LTM EBITDA (Reported) without CTI earnings, and CTI's net debt and earnings are not stated; calculation C34; calculation C35; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 46 |
| Share repurchase programme authorised | 2026-11-10 | Not supplied: an authorisation only, no repurchase after 2026-09-30 is stated | Not supplied: no repurchase is stated | Not supplied: no repurchase is stated | US$m | Board authorisation of up to USD 150.0 million with no termination date or required purchases; no net debt effect is stated; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 33; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 47 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| Q1 2025 | 505.953 | 50.819 | US$m | Three-month period; revenue as reported and Adjusted EBITDA issuer-adjusted (non-GAAP, same identity in every row); 10-Q_2026-03-31_lgn-20260331.htm.jsonl, page 5; 10-Q_2026-03-31_lgn-20260331.htm.jsonl, page 60 |
| Q2 2025 | 598.890 | 72.204 | US$m | Three-month period; revenue as reported and Adjusted EBITDA issuer-adjusted (non-GAAP, same identity in every row); 10-Q_2026-06-30_lgn-20260630.htm.jsonl, page 6; 10-Q_2026-06-30_lgn-20260630.htm.jsonl, page 68 |
| Q3 2025 | 708.006 | 88.821 | US$m | Three-month period; revenue as reported and Adjusted EBITDA issuer-adjusted (non-GAAP, same identity in every row); 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 72 |
| Q4 2025 | 737.642 | 86.981 | US$m | Three-month period; revenue as reported and Adjusted EBITDA issuer-adjusted (non-GAAP, same identity in every row); calculated as full year less nine months; calculation C17; calculation C18; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 72 |
| Q1 2026 | 1037.893 | 118.101 | US$m | Three-month period; revenue as reported and Adjusted EBITDA issuer-adjusted (non-GAAP, same identity in every row); 10-Q_2026-03-31_lgn-20260331.htm.jsonl, page 5; 10-Q_2026-03-31_lgn-20260331.htm.jsonl, page 60 |
| Q2 2026 | 1262.127 | 154.569 | US$m | Three-month period; revenue as reported and Adjusted EBITDA issuer-adjusted (non-GAAP, same identity in every row); 10-Q_2026-06-30_lgn-20260630.htm.jsonl, page 6; 10-Q_2026-06-30_lgn-20260630.htm.jsonl, page 68 |
| Q3 2026 | 1310.668 | 177.008 | US$m | Three-month period; revenue as reported and Adjusted EBITDA issuer-adjusted (non-GAAP, same identity in every row); 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 72 |

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Term loan | 1 | Yes | 990.301 | 3.26 | US$m | Principal at 2026-09-30; borrower Legence Holdings LLC; secured by a lien on substantially all assets of the borrower and its wholly-owned subsidiaries, subject to customary exclusions; guarantors are not named; cumulative leverage is principal over LTM EBITDA (Reported) of 303.883; calculation C33; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 25–26 |
| Revolving credit facility | 1 | Yes | 0.000 | 3.26 | US$m | Drawn amount at 2026-09-30, pari passu with the term loan; USD 200.0 million commitment, no borrowings and USD 30.7 million of letters of credit; cumulative leverage adds nothing to the term loan principal; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 27 |

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), FY2025 | 156.436 | US$m | Opening amount, reported measure: derived from components; calculation C7; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| Credit agreement amendment fees | 6.302 | US$m | Issuer's add-back, issuer's label; classification: transaction costs (debt refinancings); realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| Goodwill impairment | 24.966 | US$m | Issuer's add-back, issuer's label; classification: other stated (non-cash impairment); realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| Long-lived asset impairment | 2.415 | US$m | Issuer's add-back, issuer's label; classification: other stated (non-cash impairment); realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| Net (gain) loss on sale and disposition of property and equipment | -0.326 | US$m | Issuer's add-back, issuer's label; classification: other stated; realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| Loss on debt extinguishment | 6.651 | US$m | Issuer's add-back, issuer's label; classification: other stated (debt refinancing); realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| Acquisition and integration costs | 8.436 | US$m | Issuer's add-back, issuer's label; classification: transaction costs; realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| System deployment costs | 2.140 | US$m | Issuer's add-back, issuer's label; classification: other stated (enterprise resource planning implementation); realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| Strategic initiative costs | 17.092 | US$m | Issuer's add-back, issuer's label; classification: transaction costs (IPO and secondary offering costs and other non-recurring transactions); realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| Indemnification asset adjustments | 3.796 | US$m | Issuer's add-back, issuer's label; classification: other stated; realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| Tax Receivable Agreement liability remeasurements | 2.914 | US$m | Issuer's add-back, issuer's label; classification: other stated; realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| Stock-based compensation expense | 68.003 | US$m | Issuer's add-back, issuer's label; classification: share-based compensation; realisation not stated; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| EBITDA (Adjusted), FY2025 | 298.825 | US$m | Closing amount, issuer-stated Adjusted EBITDA; opening plus the eleven add-backs reconciles exactly; calculation C21; 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 16 |
| Calculated | 12 |
| Assumption-Based | 0 |
| Analyst Inference | 1 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 14 |
| Fields total | 14 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 9 |

## Calculations

Each figure below is worked from the inputs shown. Money figures are in US$m unless the result says USD thousands, and ratios are printed to two decimal places.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Total Debt at 2024-12-31 (carrying value) | 22.984 + 1,585.846 | US$m 1,608.830 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122 |
| C2 | Total Debt at 2025-12-31 (carrying value) | 16.694 + 812.398 | US$m 829.092 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122 |
| C3 | Total Debt at 2026-09-30 (carrying value) | 22.329 + 1,007.424 | US$m 1,029.753 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| C4 | Net debt at 2024-12-31 | 1,608.830 - 81.167 | US$m 1,527.663 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122 |
| C5 | Net debt at 2025-12-31 | 829.092 - 230.166 | US$m 598.926 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 121–122 |
| C6 | Net debt at 2026-09-30 | 1,029.753 - 340.778 | US$m 688.975 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 4–5 |
| C7 | EBITDA (Reported) FY2025: net income + interest expense + interest income + income tax + depreciation and amortization (USD thousands) | -77,303 + 101,778 + (-4,488) + 22,161 + 114,288 | USD thousands 156,436 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123 |
| C8 | EBITDA (Reported) FY2024: net income + interest expense + interest income + income tax + depreciation and amortization (USD thousands) | -27,643 + 91,609 + (-5,464) + 4,521 + 110,849 | USD thousands 173,872 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 122–123 |
| C9 | EBITDA (Reported) Q3 2026: net income + interest expense + interest income + income tax + depreciation and amortization (USD thousands) | 133,877 + 16,477 + (-2,505) + 19,782 + 44,417 | USD thousands 212,048 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 |
| C10 | EBITDA (Reported) Q3 2025: net income + interest expense + interest income + income tax + depreciation and amortization (USD thousands) | 379 + 28,183 + (-1,069) + 4,078 + 27,490 | USD thousands 59,061 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 |
| C11 | EBITDA (Reported) 9M 2026: net income + interest expense + interest income + income tax + depreciation and amortization (USD thousands) | 116,707 + 50,388 + (-5,739) + 17,492 + 130,883 | USD thousands 309,731 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 |
| C12 | EBITDA (Reported) 9M 2025: net income + interest expense + interest income + income tax + depreciation and amortization (USD thousands) | -22,629 + 88,228 + (-2,588) + 13,662 + 85,611 | USD thousands 162,284 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 |
| C13 | LTM revenue to 2026-09-30 (USD thousands) | 2,550,491 + 3,610,688 - 1,812,849 | USD thousands 4,348,330 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| C14 | LTM EBITDA (Reported) to 2026-09-30 (USD thousands) | 156,436 + 309,731 - 162,284 | USD thousands 303,883 | calculation C7; calculation C11; calculation C12 |
| C15 | LTM EBITDA (Adjusted) to 2026-09-30 (USD thousands) | 298,825 + 449,678 - 211,844 | USD thousands 536,659 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 |
| C16 | LTM cash interest paid to 2026-09-30 (USD thousands) | 96,884 + 44,757 - 84,089 | USD thousands 57,552 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 44 |
| C17 | Q4 2025 revenue, calculated because no discrete fourth quarter is reported (USD thousands) | 2,550,491 - 1,812,849 | USD thousands 737,642 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 122; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 6 |
| C18 | Q4 2025 Adjusted EBITDA, calculated because no discrete fourth quarter is reported (USD thousands) | 298,825 - 211,844 | USD thousands 86,981 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 |
| C19 | Reconciling items at 2025-12-31: finance lease liabilities carried in debt less unamortized issuance costs | 10.642 - 6.667 | US$m 3.975 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, pages 170–171 |
| C20 | Contractual principal at 2025-12-31: sum of the debt maturing rows | 12.963 + 18.592 + 19.722 + 7.978 + 7.978 + 757.884 | US$m 825.117 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 171 |
| C21 | FY2025 add-backs from EBITDA (Reported) to EBITDA (Adjusted), and the closing check | 6.302 + 24.966 + 2.415 - 0.326 + 6.651 + 8.436 + 2.140 + 17.092 + 3.796 + 2.914 + 68.003 = 142.389; 156.436 + 142.389 | US$m 298.825 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| C22 | LTM EBITDA (Adjusted) less EBITDA (Reported) to 2026-09-30 (USD thousands) | 536,659 - 303,883 | USD thousands 232,776 | calculation C15; calculation C14 |
| C23 | LTM share-based and other non-cash compensation add-back (USD thousands) | 68,003 + 79,036 - 21,881 | USD thousands 125,158 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 71–72 |
| C24 | Share of the LTM gap explained by that add-back | 125,158 / 232,776 x 100 | 53.77% | calculation C23; calculation C22 |
| C25 | EBITDA (Reported) growth, FY2025 on FY2024 | 156,436 / 173,872 - 1 | -10.03% | calculation C7; calculation C8 |
| C26 | EBITDA (Adjusted) growth, FY2025 on FY2024 | 298,825 / 229,625 - 1 | 30.14% | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| C27 | Undrawn revolver at 2024-12-31: commitment less letters of credit | 90.0 - 5.2 | US$m 84.8 | 424B4_2024-12-31_lgn-20241231.htm.jsonl, page 159; 424B4_2024-12-31_lgn-20241231.htm.jsonl, page 323 |
| C28 | Undrawn revolver at 2025-12-31: commitment less letters of credit | 200.0 - 5.7 | US$m 194.3 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 174 |
| C29 | Undrawn revolver at 2026-09-30: commitment less letters of credit | 200.0 - 30.7 | US$m 169.3 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 27 |
| C30 | Cash plus undrawn revolver at 2026-09-30 | 340.778 + 169.3 | US$m 510.078 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 27 |
| C31 | Contract liabilities, change from 2025-12-31 to 2026-09-30 | 482,046 / 339,462 - 1 | 42.00% | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 5 |
| C32 | Accounts payable, change from 2025-12-31 to 2026-09-30 | 440,232 / 246,161 - 1 | 78.84% | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 5 |
| C33 | Cumulative leverage of the secured facilities at 2026-09-30: term loan principal over LTM EBITDA (Reported) | 990.301 / 303.883 | 3.26x | calculation C14 |
| C34 | Pro forma net debt for the 2026-11-01 acquisition: net debt at 2026-09-30 plus estimated cash consideration | 688.975 + 90.0 | US$m 778.975 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 46 |
| C35 | Pro forma net leverage for that acquisition: pro forma net debt over LTM EBITDA (Reported) | 778.975 / 303.883 | 2.56x | calculation C34; calculation C14 |
| C36 | Financing cost adjustment in the debt instruments table: unamortized issuance costs and discounts less the amount already deducted in the term loan carrying value (USD thousands) | -6,438 + 5,465 | USD thousands -973 | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_lgn-20260930.htm.jsonl, page 29 |
| C37 | Rise in add-backs between EBITDA (Reported) and EBITDA (Adjusted), FY2025 over FY2024 (USD thousands) | (298,825 - 156,436) - (229,625 - 173,872) | USD thousands 86,636 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| C38 | Rise in the share-based compensation add-back, FY2025 over FY2024 (USD thousands) | 68,003 - 5,411 | USD thousands 62,592 | 10-K_2025-12-31_lgn-20251231.htm.jsonl, page 100 |
| C39 | Share of the rise in add-backs that is share-based compensation | 62,592 / 86,636 x 100 | 72.25% | calculation C38; calculation C37 |
| C40 | Contract assets outflow as a share of operating cash flow, nine months 2026 | 184,847 / 276,981 x 100 | 66.74% | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |
| C41 | Accounts payable inflow as a share of operating cash flow, nine months 2026 | 116,630 / 276,981 x 100 | 42.11% | 10-Q_2026-09-30_lgn-20260930.htm.jsonl, pages 9–10 |

## Gaps

- The issuer states no unadjusted EBITDA in any period, so EBITDA (Reported) is derived from net income, interest, tax and total depreciation and amortization; this restricts every reported-basis leverage and cover ratio to a house calculation, and the severity is Medium. The action that would close it is the issuer's or the lenders' definition of EBITDA.
- The filings print no maturity ladder at 2026-09-30, and the only ladder at 2025-12-31 predates the incremental term loan of 2026-01-02 and the scheduled repayments since; this restricts the debt maturities chart and the principal reconciliation to 2025-12-31, and the severity is Medium. The action is the quarter-end amortisation schedule.
- Cash interest paid is net of interest rate swap settlements in every period and gross interest cash is not stated; this restricts interest cover to a net measure and prevents a split of hedge cash flows, and the severity is Medium. The action is the swap settlement amounts.
- The filings print dashes for some lines in some periods, among them goodwill impairment, long-lived asset impairment, credit agreement amendment fees, loss on debt extinguishment and the cash flow lines for IPO proceeds and Parent distributions; each is shown as not supplied rather than zero, and lines that appear in only one filing, such as revolver borrowings, are shown as not printed in the other. The severity is Low, and a dash should be read as nil only where the issuer says so.
- The estimated cash consideration for the acquisition completed on 2026-11-01 is stated, but the acquired company's net debt, cash and earnings are not, so pro forma net leverage excludes its earnings and may overstate leverage; the severity is Medium. The action is the acquisition's financial terms.
- The share repurchase programme authorised on 2026-11-10 has no stated repurchases, so it has no net debt effect in the post-balance-sheet table; the severity is Low. The action is any later repurchase disclosure.
- The ranking and security of the acquisition promissory notes and finance lease liabilities are not stated and the guarantors are not named, so those facilities are left out of the debt stack; the severity is Low. The action is the guarantor schedule and the notes' terms.
- The revolver maturity of 2030-09-22 is stated in the annual report only and the quarterly reports do not repeat it; the severity is Low. The action is confirmation from the credit agreement.
- No discrete fourth quarter of 2025 is reported, so Q4 2025 revenue and Adjusted EBITDA are calculated and a reported-basis EBITDA for that quarter is not constructed; the severity is Low. The action is the fourth-quarter release.

## Next module

The orchestrator selects the next module.
