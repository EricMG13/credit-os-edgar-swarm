---
module_id: CP-1
issuer_id: natl-1974138
analysis_date: 2026-11-18
module_status: Complete
---

## Request

NCR Atleos Corp (issuer id natl-1974138), as of 2026-11-18, credit snapshot pathway. This module extracts the issuer's statements, debt, liquidity and leverage on one basis (USD millions, carrying-value debt) and logs every definition conflict and gap. It makes no recommendation.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_ncr-20241231.htm.jsonl | Annual report on Form 10-K of NCR Atleos Corporation for the year ended 31 December 2024, original filing before the later Form 10-K/A revision | 2025-03-03 | 5ffff15d118f915510bf17cd580f459a9e92ed3367ed0f3a99d4a5430d60ed7e | FY2024 and FY2023 values as originally reported, compared with the revised comparatives; Dec 2024 revolver position; superseded for revised figures |
| 10-K_2025-12-31_ncr-20251231.htm.jsonl | Annual report on Form 10-K of NCR Atleos Corporation for the year ended 31 December 2025 | 2026-02-27 | 82aacbf6aab03d88dc88e24cdbc8d70fb577ef903d2576b2121915ae37c23dea | Audited FY2025, FY2024 and FY2023 statements, debt, lease, covenant, obligations and revision notes, segment data |
| 10-Q_2026-03-31_natl-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-07 | 3b0509879e26f96f871caf37730ceb3615cca41c559d5a4cc5faa65ee1d25b6a | Q1 2026 context for the change-of-control consent and the Q1 2025 revision note |
| 10-Q_2026-06-30_natl-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-08-05 | 57729259a075be7fb5b1f9bc1178b492ce0e26270aaf73106906c7cef41edba8 | Six-month depreciation and amortization, used to derive the Q3 quarter, and the revolver position at 2026-06-30 |
| 10-Q_2026-09-30_natl-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-04 | f209a9db5da681c2b4bb35738277daefad7cd60682363ce747d97bbecb553d9f | Nine-month and Q3 2026 statements, debt note, liquidity, segment data, non-GAAP bridges, merger status |
| EX-99.1_2026-05-06_ex-991ncratleosearningsrel.htm.jsonl | Earnings release for the first quarter of 2026, Exhibit 99.1 | 2026-05-06 | 59c688a352c508d72a0cdebe1265a49478157d1a9175c129020e8e5617dd1f82 | Q1 2026 net leverage table and statement that no outlook is given |
| EX-99.1_2026-08-05_ex-991ncratleosearningsrel.htm.jsonl | Earnings release for the second quarter of 2026, Exhibit 99.1 | 2026-08-05 | 57dcd0c49995c8afadaf3cb0d46539d5c840875134dcbffde4655c78f06bb07d | Q2 2026 net leverage table and statement that no outlook is given |
| EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl | Earnings release for the third quarter of 2026, Exhibit 99.1 | 2026-11-04 | 4592d9ff4208ed6ea25f38ea5138a262b41ddec0072ec4cd047d71a210836142 | Q3 2026 Adjusted EBITDA, free cash flow and net leverage tables including the 2025-09-30 comparative |

Handoff supplied: Source readiness (CP-0), sha256 dd6fcbcac85d42e8f46a9a0f7d5a3ddc9cf4e36da4f0fca865b579719e006c94

## Findings

### Bottom line

NCR Atleos is deleveraging through earnings growth and debt repayment, with net debt of USD 2,233 million at 2026-09-30, or 2.59x reported and 2.47x issuer-adjusted trailing EBITDA, so lenders face limited near-term refinancing pressure but a heavy 2028 and 2029 maturity wall. Gross debt at carrying value has fallen from USD 2,940 million at 2024-12-31 to USD 2,544 million, while cash fell by USD 145 million to USD 311 million as the revolver was repaid.
Basis: 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 170; calculation K4; calculation K25; calculation K39

The reported-basis ratios rest on an EBITDA derived by this analysis, because the issuer states only an adjusted measure, which is USD 94 million higher for FY2025. Interest cover was a modest 2.75x on the derived EBITDA, cannot be stated for 2026 because quarterly cash interest is not disclosed, and the pending Brink's merger leaves pro forma net debt not established.
Basis: 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21; calculation K11; calculation K24

### Key findings

Gross debt at balance-sheet carrying value fell from USD 2,940 million at 2024-12-31 to USD 2,758 million at 2025-12-31 and USD 2,544 million at 2026-09-30, and net debt fell from USD 2,521 million to USD 2,302 million and USD 2,233 million. Trailing issuer-adjusted EBITDA rose from USD 785 million to USD 830 million and USD 903 million, so adjusted net leverage fell from 3.21x to 2.77x and 2.47x, and on the derived reported EBITDA net leverage fell from 3.50x to 3.13x and 2.59x. The 2026 reduction came from repayment: USD 125 million of net revolver repayment and USD 91 million of term-loan payments in nine months, funded by USD 219 million of operating cash flow and a USD 145 million fall in cash.
Basis: 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12; calculation K1; calculation K3; calculation K4; calculation K17; calculation K25; calculation K26

The issuer states no unadjusted EBITDA, so the reported-basis ratios use EBITDA derived as net income plus income tax, interest and cash-flow depreciation and amortization, USD 736 million for FY2025. The issuer's adjusted figure of USD 830 million is USD 94 million higher, chiefly because it adds back USD 51 million of Voyix indemnification expense and USD 34 million of stock-based compensation, so creditors should treat 2.59x rather than 2.47x as the cautious reading of leverage at 2026-09-30.
Basis: 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 98–99; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; calculation K11; calculation K24

Cash interest paid was USD 271 million in FY2024 and USD 268 million in FY2025, giving EBITDA cover of 2.66x and 2.75x on the derived measure and 2.90x and 3.10x on the issuer's adjusted measure. Interest expense fell to USD 186 million for nine months from USD 204 million, but the quarterly reports do not disclose cash interest, so cover for 2026 is not established.
Basis: 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6; calculation K32

Operating cash flow was USD 356 million in FY2025 and USD 450 million for the twelve months to 2026-09-30, and free cash flow after capital expenditures and capitalized software was USD 200 million and USD 276 million. Q3 2026 operating cash flow of USD 198 million includes legal settlement proceeds that the issuer's bridge deducts (USD 38 million) and compares with USD 27 million a year earlier, when a USD 117 million swing in restricted settlement cash depressed it, so quarterly operating cash flow moves with settlement timing and one-offs and the trailing figure is the better guide.
Basis: 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12; calculation K20; calculation K23

Liquidity at 2026-09-30 was USD 882 million, made of USD 311 million of cash and USD 571 million of undrawn revolver after letters of credit, against USD 903 million at 2025-12-31 and USD 769 million at 2024-12-31; USD 166 million of restricted settlement cash is excluded. Scheduled principal is light until 2028, with USD 80 million due in 2026 and USD 93 million in 2027 on the year-end ladder, then USD 949 million in 2028 when the term loans A and the revolver mature and USD 1,670 million in 2029 including the 2029 secured notes, so refinancing ahead of 2028 is the central test.
Basis: 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 106; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 170; 10-K_2024-12-31_ncr-20241231.htm.jsonl, page 111; calculation K27; calculation K28; calculation K29

Carrying debt excludes claims that compete for the same cash: USD 186 million of receivables sold under the receivables facility at 2026-09-30, lease liabilities of USD 190 million and a USD 248 million underfunded US pension plan at 2025-12-31, USD 48 million of Voyix indemnification due in 2026, and a vault cash balance of about USD 4.1 billion on average in FY2025 that sits outside the statements.
Basis: 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 13; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 108–109; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 196

The pending merger with Brink's, expected to close in early January 2027, does not trigger a change-of-control put on the 2029 secured notes because holders consented in March 2026, but the consent fee, the acquirer's financing and the treatment of the credit facilities at closing are not stated, so pro forma net debt is not established.
Basis: 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, pages 1–2; 10-Q_2026-03-31_natl-20260331.htm.jsonl, page 20; Source readiness (CP-0)

### Contrary evidence and what would change the view

The strongest case against the improving trend is that it leans on adjusted EBITDA and on cash. The derived EBITDA gives 2.59x, the issuer's FY2025 add-backs include USD 34 million of stock-based compensation, a recurring cost, and USD 51 million of Voyix indemnification, cash fell by USD 145 million, and Q3 operating cash flow includes legal settlement proceeds. The trailing derived EBITDA also includes a USD 31.5 million legal settlement gain booked in Q3 2026, and without it net leverage at 2026-09-30 would be 2.69x. Self-Service Banking hardware revenue fell from USD 235 million in Q3 2025 to USD 188 million in Q3 2026, so EBITDA could stall before the 2028 wall if hardware and crypto-related volumes keep falling.
Basis: 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 42–43; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99; calculation K24; calculation K25; calculation K40

A revolver redraw, a merger-related financing, a consent fee paid from cash or trailing adjusted EBITDA below USD 903 million would worsen the view, as would a revised FY2024 annual report that moves the earlier leverage points; continued repayment from operating cash flow would strengthen it.
Basis: 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12; calculation K17

### Limitations

The FY2024 annual report supplied is the original and was later revised, so FY2024 and FY2023 figures come from the FY2025 annual report and the revised FY2024 annual report is not supplied.
Basis: 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 205–206; 10-K_2024-12-31_ncr-20241231.htm.jsonl, page 130; Source readiness (CP-0)

The issuer states no unadjusted EBITDA, so reported EBITDA is derived, and trailing reported EBITDA at 2025-09-30 cannot be built because nine months of 2024 are not in the sources.
Basis: 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8

The debt maturity ladder is printed only at 2025-12-31, cash interest only for fiscal years, and no covenant ratio or lien-priority terms are supplied, so coverage for 2026, the maturity wall at the latest date and recovery ranking are restricted.
Basis: 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 170; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 167–169

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 4.08 | 3.50 | x | Carrying-value debt over derived reported EBITDA (K1, K6, K12); the FY2024 annual report was revised later, so revised comparatives are used |
| 2025-09-30 | Not supplied: trailing reported EBITDA cannot be built because nine months of 2024 are not in the sources | Not supplied: trailing reported EBITDA cannot be built because nine months of 2024 are not in the sources | x | Carrying debt and cash from the Q3 2026 release comparative; reported EBITDA for the trailing year needs nine months of 2024, which the sources do not hold |
| FY2025 / 2025-12-31 | 3.75 | 3.13 | x | Carrying-value debt over derived reported EBITDA (K3, K5, K11); the issuer's own adjusted net leverage is 2.77x |
| 2026-09-30 | 2.95 | 2.59 | x | Carrying-value debt over trailing derived reported EBITDA (K4, K7, K16); the issuer's own adjusted net leverage is 2.47x |

Reported EBITDA is derived because the issuer states only an adjusted measure, so the issuer's own leverage (2.47x net at 2026-09-30) is lower than the figures charted here.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2.66 | x | Derived reported EBITDA over cash interest paid for the fiscal year (FY2024 / 2024-12-31) |
| 2025-09-30 | Not supplied: cash interest paid is disclosed only for fiscal years | x | Interim period: the quarterly reports do not disclose cash interest paid, so cover is not calculable |
| FY2025 / 2025-12-31 | 2.75 | x | Derived reported EBITDA over cash interest paid for the fiscal year (FY2025 / 2025-12-31) |
| 2026-09-30 | Not supplied: cash interest paid is disclosed only for fiscal years | x | Interim period: the quarterly reports do not disclose cash interest paid, so cover is not calculable |

Cover is stated for fiscal years only because cash interest paid is not disclosed for interim periods, and it uses cash interest, which differs from interest expense of USD 270 million in FY2025.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 419 | 350 | US$m | Cash and cash equivalents; undrawn is the USD 600 million revolver less USD 225 million drawn and USD 25 million of letters of credit, from the original FY2024 annual report |
| 2025-09-30 | 412 | Not supplied: the 2025-09-30 revolver position is not in the sources | US$m | Cash from the Q3 2026 release comparative; the revolver position at that date is not in the sources |
| FY2025 / 2025-12-31 | 456 | 447 | US$m | Cash and cash equivalents; undrawn is the USD 600 million revolver less USD 125 million drawn and USD 28 million of letters of credit; restricted cash of USD 175 million excluded |
| 2026-09-30 | 311 | 571 | US$m | Cash and cash equivalents; undrawn is the USD 600 million revolver with nothing drawn less USD 29 million of letters of credit; restricted cash of USD 166 million excluded |

Undrawn committed facilities is the revolver only; USD 14 million of headroom under the USD 200 million receivables sale facility at 2026-09-30 is not counted and restricted settlement cash is excluded from cash.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 80 | US$m | Principal due in the year on the debt maturity table at 2025-12-31, the latest ladder printed; the 2030 column is a dash and is left out |
| FY2027 | 93 | US$m | Principal due in the year on the debt maturity table at 2025-12-31, the latest ladder printed; the 2030 column is a dash and is left out |
| FY2028 | 949 | US$m | Principal due in the year on the debt maturity table at 2025-12-31, the latest ladder printed; the 2030 column is a dash and is left out |
| FY2029 | 1,670 | US$m | Principal due in the year on the debt maturity table at 2025-12-31, the latest ladder printed; the 2030 column is a dash and is left out |

The ladder is drawn at 2025-12-31 and not at the latest balance-sheet date, so it omits principal repaid in 2026 and sums to USD 2,792 million, not the USD 2,798 million of principal in the debt table.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue | 4,186 | 4,305 | 4,354 | 4,397 | US$m | FY figures as revised in the FY2025 annual report; trailing = FY2025 + 9M 2026 - 9M 2025 |
| Adjusted EBITDA (issuer-adjusted) | 738 | 785 | 830 | 903 | US$m | Issuer's recast definition; trailing figure equals the Q3 release |
| EBITDA (Reported, derived) | 433 | 721 | 736 | 861 | US$m | Net income + income tax + interest + cash-flow D&A; trailing = FY2025 + 9M 2026 - 9M 2025 |
| Net income (loss) attributable to Atleos | -150 | 80 | 162 | 267 | US$m | Trailing equals the Q3 release |
| Net cash from operating activities | 355 | 344 | 356 | 450 | US$m | Trailing = FY2025 + 9M 2026 - 9M 2025 |
| Free cash flow (operating cash flow less capital expenditures and capitalized software) | 223 | 218 | 200 | 276 | US$m | Not the issuer's Adjusted free cash flow-unrestricted (USD 326 million in FY2025) |
| Total debt (carrying value) | Not supplied: the FY2023 balance sheet exists only in the pre-revision FY2024 annual report | 2,940 | 2,758 | 2,544 | US$m | Balance-sheet date: 2024-12-31, 2025-12-31, 2026-09-30 |
| Cash and cash equivalents | Not supplied: the FY2023 balance sheet exists only in the pre-revision FY2024 annual report | 419 | 456 | 311 | US$m | Restricted cash excluded |
| Net debt | Not supplied: the FY2023 balance sheet exists only in the pre-revision FY2024 annual report | 2,521 | 2,302 | 2,233 | US$m | Total debt less cash and cash equivalents |
| Total debt / EBITDA (reported) | Not supplied: the FY2023 balance sheet exists only in the pre-revision FY2024 annual report | 4.08 | 3.75 | 2.95 | x | Derived reported EBITDA |
| Net debt / EBITDA (reported) | Not supplied: the FY2023 balance sheet exists only in the pre-revision FY2024 annual report | 3.50 | 3.13 | 2.59 | x | Derived reported EBITDA |
| Net debt / adjusted EBITDA | Not supplied: the FY2023 balance sheet exists only in the pre-revision FY2024 annual report | 3.21 | 2.77 | 2.47 | x | Issuer-adjusted EBITDA |
| EBITDA / cash interest (reported) | Not supplied: FY2023 cash interest includes related party interest not added here | 2.66 | 2.75 | Not supplied: cash interest is not disclosed for interim periods | x | Fiscal years only |
| Adjusted EBITDA / cash interest | Not supplied: FY2023 cash interest includes related party interest not added here | 2.90 | 3.10 | Not supplied: cash interest is not disclosed for interim periods | x | Fiscal years only |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2,940 | 419 | 2,521 | US$m | Carrying value: short-term borrowings 81 plus long-term borrowings 2,859 (K6), net of discount and fees of 54; includes the term loans, revolver, senior secured notes and other borrowings; excludes lease liabilities carried in other liabilities, receivables sold and vault cash; principal 2,994 beside it |
| 2025-09-30 | 2,869 | 412 | 2,457 | US$m | Carrying value from the Q3 2026 release comparative: short-term borrowings 80 plus long-term borrowings 2,789 (K8); the Q3 2025 balance sheet and the principal total are not in the sources |
| FY2025 / 2025-12-31 | 2,758 | 456 | 2,302 | US$m | Carrying value: short-term borrowings 86 plus long-term borrowings 2,672 (K5), net of discount and fees of 40; same perimeter as the other rows; excludes receivables sold of 200; principal 2,798 beside it |
| 2026-09-30 | 2,544 | 311 | 2,233 | US$m | Carrying value: short-term borrowings 89 plus long-term borrowings 2,455 (K7), net of discount and fees of 31; excludes receivables sold of 186; principal 2,575 beside it; no pro forma adjustment applied |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 2,792 | -34 | 2,758 | US$m | Principal is the debt maturity table total of 2,792. Reconciling items sum to -34: discount and deferred financing fees of -40 and 6 of principal the ladder leaves out (the debt table gives 2,798), per K9 and K10. Carrying value is Gross debt at 2025-12-31 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Consent fee on the 9.500% senior secured notes, payable for the change-of-control waiver to operate | Not supplied: the source states only that the waiver operates immediately before the effective time of the first merger | Not supplied: the consent fee amount is not stated | Not supplied: the amount is not stated | Not supplied: the amount is not stated | US$m | Read: the Q3 2026 and Q1 2026 quarterly reports and the Q3 2026 release; no other event after 2026-09-30 that changes net debt is stated; the merger closing itself is expected in early January 2027 and its effect on Atleos debt is not stated |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 | 4,186 | 738 | US$m | Revenue as revised in the FY2025 annual report; Adjusted EBITDA is issuer-adjusted on the recast definition (excludes other income and expense items); annual periods only |
| FY2024 | 4,305 | 785 | US$m | Revenue as revised in the FY2025 annual report; Adjusted EBITDA is issuer-adjusted on the recast definition; the original FY2024 annual report shows revenue of 4,317 and Adjusted EBITDA of 781 |
| FY2025 | 4,354 | 830 | US$m | Revenue and Adjusted EBITDA as reported; Adjusted EBITDA is issuer-adjusted, not a reported measure |

Adjusted EBITDA is the issuer's own measure on a recast definition and is not comparable with the reported EBITDA derived elsewhere in this answer.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Term loan facilities (Term A-1, Term A-2 and Term B) | 1 | Yes | 1,224 | 2.99 | US$m | Principal outstanding at 2026-09-30; secured by substantially all assets of the Company and its wholly owned domestic subsidiaries, which guarantee it; rank is Analyst Judgement: both credit facilities and the notes are described as senior secured on the same collateral and no source states lien priority between them; cumulative leverage is the equal-rank group over trailing derived reported EBITDA of 861 (K33) |
| Revolving Credit Facility | 1 | Yes | 0 | 2.99 | US$m | Nothing drawn at 2026-09-30 against a commitment of 600 and letters of credit of 29; same security, guarantors and Analyst Judgement on rank as the term loans; cumulative leverage as above |
| 9.500% senior secured notes due 2029 | 1 | Yes | 1,350 | 2.99 | US$m | Principal; secured by first-priority liens on the same collateral and guaranteed by the subsidiary guarantors of the credit facilities; rank is Analyst Judgement as above; the ATMaaS equipment loan of 1 is left out because its rank is not stated |

Ranking is shown as equal because no source states lien priority between the credit facilities and the notes and no intercreditor terms are supplied, so the stack does not show who is paid first.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Net income (loss) attributable to Atleos (GAAP) | 162 | US$m | Opening amount: reported measure, GAAP net income attributable to Atleos for FY2025, the start of the issuer's own reconciliation (the derived reported EBITDA of 736 is a different measure) |
| Interest expense, net | 270 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Interest income | -6 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Income tax expense | 27 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Depreciation and amortization expense | 168 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Acquisition-related amortization of intangibles | 95 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Stock-based compensation expense | 34 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Separation costs | 11 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Acquisition-related costs | 2 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Transformation and restructuring costs | 10 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Pension mark-to-market adjustments | 2 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Voyix indemnification expense | 51 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Other (income) expense items | 4 | US$m | Add-back as the issuer labels it in its FY2025 reconciliation |
| Adjusted EBITDA (Non-GAAP), FY2025 | 830 | US$m | Closing amount: the issuer's Adjusted EBITDA; opening plus the add-backs equals 830 (K34); no plug; the loss on debt extinguishment line is a dash for FY2025 and is left out |

The bridge starts from net income because that is where the issuer's reconciliation starts, so it does not reconcile the derived reported EBITDA to the adjusted figure.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 26 |
| Calculated | 20 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 5 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 4 |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2023 | 2023-01-01 | 2023-12-31 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_ncr-20241231.htm.jsonl | Annual report, Form 10-K | FY2024 with FY2023 and FY2022 | USD | Millions | NCR Atleos Corporation consolidated | US GAAP | Tier 1 (audited statements) | Comparison with revised comparatives; December 2024 revolver position | Original filing, superseded for revised values; the Form 10-K/A of 2025-11-05 is not supplied |
| 10-K_2025-12-31_ncr-20251231.htm.jsonl | Annual report, Form 10-K | FY2025 with revised FY2024 and FY2023 | USD | Millions | NCR Atleos Corporation consolidated | US GAAP | Tier 1 (audited statements) | Controlling annual statements, notes and ladder | Quarter Q4 2025 only in an unaudited table |
| 10-Q_2026-03-31_natl-20260331.htm.jsonl | Quarterly report, Form 10-Q | Q1 2026 with revised Q1 2025 | USD | Millions | NCR Atleos Corporation consolidated | US GAAP | Tier 2b (unaudited, no auditor review stated) | Context for the consent and revision note | Condensed statements |
| 10-Q_2026-06-30_natl-20260630.htm.jsonl | Quarterly report, Form 10-Q | Q2 2026 and six months | USD | Millions | NCR Atleos Corporation consolidated | US GAAP | Tier 2b (unaudited, no auditor review stated) | Revolver position at 2026-06-30 | Condensed statements |
| 10-Q_2026-09-30_natl-20260930.htm.jsonl | Quarterly report, Form 10-Q | Q3 2026 and nine months | USD | Millions | NCR Atleos Corporation consolidated | US GAAP | Tier 2b (unaudited, no auditor review stated) | Latest statements, debt note and liquidity | Condensed statements; no ladder, no cash interest paid |
| EX-99.1_2026-05-06_ex-991ncratleosearningsrel.htm.jsonl | Earnings release, Exhibit 99.1 | Q1 2026 | USD | Millions | NCR Atleos Corporation consolidated | US GAAP | Tier 2b (issuer release, unaudited) | Net leverage table, outlook statement | Net leverage table prints quarterly rows beside a trailing ratio |
| EX-99.1_2026-08-05_ex-991ncratleosearningsrel.htm.jsonl | Earnings release, Exhibit 99.1 | Q2 2026 | USD | Millions | NCR Atleos Corporation consolidated | US GAAP | Tier 2b (issuer release, unaudited) | Net leverage table, outlook statement | Non-GAAP measures |
| EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl | Earnings release, Exhibit 99.1 | Q3 2026 with 2025-09-30 comparatives | USD | Millions | NCR Atleos Corporation consolidated | US GAAP | Tier 2b (issuer release, unaudited) | Net leverage and free cash flow tables | Non-GAAP measures |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NCR Atleos Corporation | Issuer of the senior secured notes and borrower under the credit agreement | December 31 | USD | Millions | Consolidated, including two bankruptcy-remote receivables subsidiaries | US GAAP | FY2023 to FY2025; Q1, Q2 and Q3 2026; nine months 2025 and 2026 |
| Subsidiary Guarantors (wholly owned domestic subsidiaries) | Guarantors of the credit facilities and the notes; names not supplied | December 31 | USD | Not supplied: no separate statements | Within the consolidated group | US GAAP | Not supplied: no separate statements |
| NCR Atleos Receivables LLC and NCR Atleos Canada Receivables LP | Special purpose entities for the trade receivables facility | December 31 | USD | Not supplied: no separate statements | Consolidated by the issuer | US GAAP | Not supplied: no separate statements |
| The Brink's Company | Acquirer under the pending merger; outside the perimeter | Not supplied: not in the sources | Not supplied: not in the sources | Not supplied: not in the sources | Not part of the issuer group | Not supplied: not in the sources | Not supplied: no filings of the acquirer are supplied |

Subsequent events are flagged with their dates and kept out of the period figures: the merger agreement of 2026-02-26 and the change-of-control consent of 2026-03-11 follow the FY2025 balance sheet, stockholder approval came on 2026-06-30, and no event after the 2026-09-30 balance sheet that changes net debt is stated, with closing expected in early January 2027.
Basis: 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 127; 10-Q_2026-03-31_natl-20260331.htm.jsonl, page 20; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 10–11; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, pages 1–2

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Use revised FY2024 and FY2023 comparatives from the FY2025 annual report in place of the original FY2024 annual report | 10-K_2025-12-31_ncr-20251231.htm.jsonl | Version selection | Revenue 4,317 and 4,191; net income attributable 91 and -134; Adjusted EBITDA 781 and 732 | Revenue 4,305 and 4,186; net income attributable 80 and -150; Adjusted EBITDA 785 and 738 | The later audited filing controls revised years; the Form 10-K/A is not supplied | FY2024; FY2023 |
| Derive EBITDA (Reported) as net income plus income tax plus interest expense plus depreciation and amortization from the cash flow statement | 10-K_2025-12-31_ncr-20251231.htm.jsonl; 10-Q_2026-09-30_natl-20260930.htm.jsonl | Derivation | Not stated by the issuer | 736 FY2025; 721 FY2024; 433 FY2023; 652 nine months 2026; 527 nine months 2025 | The method needs an unadjusted EBITDA; the issuer states only an adjusted one (K11 to K15) | FY2023 to FY2025; 9M 2025; 9M 2026 |
| Interest expense and other costs keep the sign the statements print; Cash Interest Paid is the positive amount paid | 10-K_2025-12-31_ncr-20251231.htm.jsonl | Sign convention | Expenses in brackets | Negative numbers in the statements; positive cash interest | The checked tables fix these signs | All |
| Net income attributable to noncontrolling interests for nine months 2025 written as -2 | 10-Q_2026-09-30_natl-20260930.htm.jsonl | Label alignment | Net loss attributable to noncontrolling interests (2) | Net income (loss) attributable to noncontrolling interests -2 | The quarterly report labels the line as a loss, the annual report as income; attributable net income of 79 reconciles | 9M 2025 |
| Debt at 2025-09-30 taken from the Q3 2026 release comparative column | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl | Source substitution | Not printed in a balance sheet | Short-term 80 plus long-term 2,789 less cash 412 | The Q3 2025 balance sheet and quarterly report are not in the sources | 2025-09-30 |
| Gross debt is balance-sheet carrying value; principal shown beside it | 10-K_2025-12-31_ncr-20251231.htm.jsonl; 10-Q_2026-09-30_natl-20260930.htm.jsonl | Basis | Principal 2,798; 2,575 | Carrying value 2,758; 2,544 | Carrying value is the leverage basis; the difference is discount and deferred financing fees | FY2025; 2026-09-30 |
| FY2023 cash interest stated as external interest only | 10-K_2025-12-31_ncr-20251231.htm.jsonl | Perimeter | External 36 and related party 36 | 36 | Related party interest to the former parent is excluded; FY2023 is not used in any ratio | FY2023 |
| Quarterly depreciation and amortization derived as nine months less six months | 10-Q_2026-09-30_natl-20260930.htm.jsonl; 10-Q_2026-06-30_natl-20260630.htm.jsonl | Derived period | Not printed for the quarter | 72 in Q3 2026 and 70 in Q3 2025 | The cash flow statement is cumulative and the quarter is absent, so Q3 is nine months less six months (K35, K36) | Q3 2026; Q3 2025 |
| Trailing twelve months built as FY2025 plus nine months 2026 less nine months 2025 | 10-K_2025-12-31_ncr-20251231.htm.jsonl; 10-Q_2026-09-30_natl-20260930.htm.jsonl | Derived period | Not printed | See the constructed period register | A reported year is never replaced; every component is available | LTM 2026-09-30 |
| Dashes in the statements read as missing values | 10-K_2025-12-31_ncr-20251231.htm.jsonl; 10-Q_2026-09-30_natl-20260930.htm.jsonl | Null handling | Dash printed | Not supplied | A dash is a missing value and never zero under the method | All statements |

### T4.4 Income statement

| Line item | FY2025 | FY2024 | FY2023 | 9M 2026 | 9M 2025 | Q3 2026 | Q3 2025 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product revenue | 1,030 | 993 | 1,030 | 712 | 728 | 243 | 274 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Service revenue | 3,324 | 3,312 | 3,156 | 2,533 | 2,474 | 856 | 847 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Total revenue | 4,354 | 4,305 | 4,186 | 3,245 | 3,202 | 1,099 | 1,121 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Cost of products | 826 | 840 | 845 | 556 | 596 | 187 | 219 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Cost of services | 2,467 | 2,445 | 2,413 | 1,863 | 1,851 | 629 | 631 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Selling, general and administrative expenses | 513 | 521 | 585 | 345 | 381 | 82 | 143 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Research and development expenses | 70 | 62 | 80 | 58 | 52 | 18 | 18 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Total operating expenses | 3,876 | 3,868 | 3,923 | 2,822 | 2,880 | 916 | 1,011 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Income from operations | 478 | 437 | 263 | 423 | 322 | 183 | 110 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Loss on extinguishment of debt | Not supplied: the statement prints a dash | -24 | Not supplied: the statement prints a dash | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Interest expense | -270 | -309 | -77 | -186 | -204 | -61 | -68 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Related party interest expense, net | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -13 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Other (expense) income, net | -19 | 21 | -84 | 15 | -6 | 7 | -9 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Income before income taxes | 189 | 125 | 89 | 252 | 112 | 129 | 33 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Income tax expense | 27 | 44 | 237 | 68 | 35 | 32 | 7 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Net income (loss) | 162 | 81 | -148 | 184 | 77 | 97 | 26 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Net income (loss) attributable to noncontrolling interests | Not supplied: the statement prints a dash | 1 | 2 | Not supplied: the statement prints a dash | -2 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Net income (loss) attributable to Atleos | 162 | 80 | -150 | 184 | 79 | 97 | 26 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Basic earnings (loss) per share | 2.20 | 1.11 | -2.12 | 2.49 | 1.08 | 1.31 | 0.35 | USD per share | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Diluted earnings (loss) per share | 2.14 | 1.08 | -2.12 | 2.42 | 1.05 | 1.27 | 0.34 | USD per share | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Weighted average basic shares | 73.5 | 72.2 | 70.6 | 73.8 | 73.4 | 73.9 | 73.7 | millions of shares | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Weighted average diluted shares | 75.6 | 74.2 | 70.6 | 75.9 | 75.5 | 76.1 | 76.0 | millions of shares | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| Depreciation and amortization expense (cash flow statement) | 277 | 287 | 254 | 214 | 211 | 72 | 70 | USD millions | Reported for the years and nine months; Calculated for the two quarters as nine months less six months (K35, K36) | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-06-30_natl-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 7 |
| Stock-based compensation expense | 34 | 38 | 68 | 26 | 25 | 9 | 8 | USD millions | Reported (cash flow statement for the periods to date; reconciliation for the quarter) | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 39 |
| EBITDA (Reported) | 736 | 721 | 433 | 652 | 527 | 262 | 171 | USD millions | Calculated: net income plus income tax plus interest expense (including related party) plus cash-flow depreciation and amortization; the issuer states no unadjusted EBITDA (K11 to K15, K37, K38) | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-06-30_natl-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 |
| EBITDA (Adjusted) | 830 | 785 | 738 | 667 | 594 | 241 | 219 | USD millions | Issuer-stated Adjusted EBITDA (non-GAAP), recast definition; adds back stock-based compensation, Voyix indemnification, separation, transformation and acquisition costs, pension mark-to-market and other items | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 39 |
| Segment revenue: Self-Service Banking | 2,881 | 2,685 | 2,577 | 2,169 | 2,099 | 731 | 744 | USD millions | Reported segment note; the Other row is not a reportable segment | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 158–163; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 39–43 |
| Segment revenue: Network | 1,265 | 1,284 | 1,266 | 939 | 946 | 322 | 328 | USD millions | Reported segment note; the Other row is not a reportable segment | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 158–163; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 39–43 |
| Segment revenue: Telecommunications & Technology | 168 | 194 | 196 | 122 | 124 | 41 | 40 | USD millions | Reported segment note; the Other row is not a reportable segment | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 158–163; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 39–43 |
| Revenue: Other, not a reportable segment | 40 | 142 | 147 | 15 | 33 | 5 | 9 | USD millions | Reported segment note; the Other row is not a reportable segment | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 158–163; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 39–43 |
| Segment Adjusted EBITDA: Self-Service Banking | 751 | 629 | 626 | 580 | 536 | 209 | 196 | USD millions | Reported segment Adjusted EBITDA | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 158–163; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 39–43 |
| Segment Adjusted EBITDA: Network | 359 | 403 | 377 | 281 | 265 | 91 | 93 | USD millions | Reported segment Adjusted EBITDA | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 158–163; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 39–43 |
| Segment Adjusted EBITDA: Telecommunications & Technology | 31 | 35 | 33 | 24 | 25 | 10 | 8 | USD millions | Reported segment Adjusted EBITDA | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 158–163; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 39–43 |
| Adjusted EBITDA: corporate and other not allocated to segments | -311 | -282 | -298 | -218 | -232 | -69 | -78 | USD millions | Calculated: the issuer's corporate unallocated expense and other unallocated income and expense netted into one separate row (FY2025: -312 plus 1) | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 158–163; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 39–43 |

### T4.5 Cash flow statement

| Line item | FY2025 | FY2024 | FY2023 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | 162 | 81 | -148 | 184 | 77 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Depreciation and amortization expense | 277 | 287 | 254 | 214 | 211 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Stock-based compensation expense | 34 | 38 | 68 | 26 | 25 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Pension, postretirement and postemployment benefit (income) expense | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | -23 | -2 | USD millions | Reported; the line is not printed in every statement | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Deferred income taxes | -1 | -19 | 74 | 1 | 16 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| (Gain) loss on divestiture and disposal of assets, net | -32 | 2 | 3 | -8 | -30 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Bargain purchase gain from acquisition | Not supplied: the statement prints a dash | -5 | Not supplied: the statement prints a dash | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Loss from equity investments | 2 | 3 | Not supplied: the statement prints a dash | 3 | 2 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Loss on debt extinguishment | Not supplied: the statement prints a dash | 24 | Not supplied: the statement prints a dash | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Receivables | 36 | 106 | -50 | 27 | 29 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Related party receivables and payables | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -22 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Inventories | -97 | -77 | 53 | -59 | -108 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Current payables and accrued expenses | 49 | 100 | 140 | 32 | -42 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Contract liabilities | 59 | Not supplied: the statement prints a dash | 2 | Not supplied: the statement prints a dash | 22 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Employee benefit plans | -51 | -69 | -170 | -51 | -32 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Settlement assets and liabilities, net | 8 | -49 | 2 | Not supplied: the statement prints a dash | -14 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Other assets and liabilities | -90 | -78 | 149 | -127 | -29 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Operating Activities | 356 | 344 | 355 | 219 | 125 | USD millions | Reported; keeps the printed total | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Capital expenditures | -117 | -87 | -108 | -104 | -80 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Additions to capitalized software | -39 | -39 | -24 | -33 | -39 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Business acquisitions, net of cash acquired | -17 | Not supplied: the statement prints a dash | -1 | -1 | -17 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Purchase of intellectual property | Not supplied: the statement prints a dash | -13 | Not supplied: the statement prints a dash | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Proceeds from sale of property, plant and equipment | 45 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 24 | 36 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Proceeds from divestiture | 11 | 1 | Not supplied: the statement prints a dash | 12 | 11 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Sale (purchase) of investments, net | 1 | 4 | -10 | Not supplied: the statement prints a dash | 1 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Amounts advanced for related party notes receivable | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -217 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Repayments received from related party notes receivable | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 44 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Other investing activities, net | Not supplied: the statement prints a dash | -1 | Not supplied: the statement prints a dash | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Investing Activities | -116 | -135 | -316 | -102 | -88 | USD millions | Reported; keeps the printed total | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Proceeds from related party borrowings | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 412 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Payments on related party borrowings | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -314 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Proceeds from issuance of senior secured notes | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 1,333 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Borrowings on term credit facilities | 11 | 300 | 1,561 | Not supplied: the statement prints a dash | 11 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Payments on term credit facilities | -109 | -473 | Not supplied: the statement prints a dash | -91 | -90 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Borrowings on revolving credit facilities | 965 | 1,104 | 330 | 530 | 750 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Payments on revolving credit facilities | -1,065 | -1,034 | -175 | -655 | -750 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Payments on other financing arrangements | -3 | -3 | -1 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; the line is not printed in every statement | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Debt issuance costs | Not supplied: the statement prints a dash | -2 | -51 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Call premium paid on debt extinguishments | Not supplied: the statement prints a dash | -7 | Not supplied: the statement prints a dash | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Principal payments for finance lease obligations | -5 | -4 | -1 | -10 | -3 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Tax withholding payments on behalf of employees | -19 | -14 | -7 | -8 | -8 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Proceeds from employee stock plans | 11 | 4 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 7 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Payments on acquisition holdback | -16 | -5 | Not supplied: the statement prints a dash | -10 | -16 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Repurchases of common stock | -28 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -16 | Not supplied: the statement prints a dash | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Net transfers to NCR Corporation | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -60 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Consideration paid to NCR Corporation in connection with the Separation | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -2,996 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Other financing activities | 5 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -7 | -3 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Financing Activities | -253 | -134 | 31 | -267 | -102 | USD millions | Reported; keeps the printed total | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| FX Effect on Cash | 16 | -20 | 17 | -3 | 11 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Net Cash Change | 3 | 55 | 87 | -153 | -54 | USD millions | Reported; keeps the printed total | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Opening Cash | 641 | 586 | 499 | 644 | 641 | USD millions | Reported; keeps the printed total | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Closing Cash | 644 | 641 | 586 | 491 | 587 | USD millions | Reported; keeps the printed total | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 124–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| Cash Interest Paid | 268 | 271 | 36 | Not supplied: the quarterly reports do not disclose cash interest paid | Not supplied: the quarterly reports do not disclose cash interest paid | USD millions | Reported external interest paid in cash, a positive amount; interim reports do not disclose it; FY2023 excludes related party interest paid of 36 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138 |
| Cash paid for income taxes, net of refunds | 83 | 54 | 69 | Not supplied: the quarterly reports do not disclose cash paid for income taxes | Not supplied: the quarterly reports do not disclose cash paid for income taxes | USD millions | Reported in the income tax note; interim reports do not disclose it | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 173 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2024 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 456 | 419 | 311 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Accounts receivable, net | 550 | 581 | 519 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Inventories | 342 | 307 | 362 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Restricted cash | 175 | 210 | 166 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Other current assets | 301 | 232 | 293 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total current assets | 1,824 | 1,749 | 1,651 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Property, plant and equipment, net | 511 | 474 | 539 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Goodwill | 1,958 | 1,950 | 1,957 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Intangibles, net | 498 | 550 | 430 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Operating lease right of use assets | 177 | 144 | 191 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Prepaid pension cost | 259 | 227 | 266 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Deferred income tax assets | 288 | 285 | 275 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Other assets | 153 | 156 | 197 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total assets | 5,668 | 5,535 | 5,506 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Short-term borrowings | 86 | 81 | 89 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Accounts payable | 617 | 564 | 643 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Payroll and benefits liabilities | 139 | 145 | 123 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Contract liabilities | 383 | 328 | 383 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Settlement liabilities | 184 | 171 | 185 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Other current liabilities | 490 | 433 | 402 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total current liabilities | 1,899 | 1,722 | 1,825 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Long-term borrowings | 2,672 | 2,859 | 2,455 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Pension and indemnity plan liabilities | 313 | 343 | 276 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Postretirement and postemployment benefits liabilities | 43 | 81 | 42 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Income tax accruals | 24 | 37 | 27 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Operating lease liabilities | 139 | 110 | 152 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Deferred income tax liabilities | 41 | 40 | 37 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Other liabilities | 135 | 120 | 129 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total liabilities | 5,266 | 5,312 | 4,943 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Preferred stock | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Common stock | 1 | 1 | 1 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Paid-in capital | 65 | 47 | 83 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Retained earnings | 299 | 188 | 468 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Accumulated other comprehensive income (loss) | 38 | -17 | 12 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total Atleos stockholders' equity | 403 | 219 | 564 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Noncontrolling interests in subsidiaries | -1 | 4 | -1 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total stockholders' equity | 402 | 223 | 563 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total liabilities and stockholders' equity | 5,668 | 5,535 | 5,506 | USD millions | Reported | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total Assets | 5,668 | 5,535 | 5,506 | USD millions | Reported total assets | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total Liabilities | 5,266 | 5,312 | 4,943 | USD millions | Reported total liabilities | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total Equity | 402 | 223 | 563 | USD millions | Reported total stockholders' equity including noncontrolling interests | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Total Debt | 2,758 | 2,940 | 2,544 | USD millions | Calculated: short-term plus long-term borrowings at carrying value, net of discount and deferred financing fees (K5 to K7) | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| Cash & Equivalents | 456 | 419 | 311 | USD millions | Reported cash and cash equivalents; restricted cash is a separate line | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Term loan facilities (Term A-1, Term A-2 and Term B) | Senior secured term loans | Not supplied: carrying value is not disclosed by instrument | 1,224 | 1,224 | Not applicable | Secured by substantially all assets of the Company and its wholly owned domestic subsidiaries, which guarantee it | Senior secured as the filing labels it; lien priority against the notes is not stated | USD | 1,224 | Not applicable | SOFR plus 2.00% to 3.00% on Term A-1 and Term A-2 by leverage; SOFR plus 3.00% on Term B; weighted average 6.61% on the long-term portion and 6.57% on the current portion | Floating | SOFR | 200 to 300 on Term A-1 and Term A-2; 300 on Term B | Not applicable | Term A-1 and Term A-2: 2028-10-16; Term B: 2029-04-16 | Not supplied: quarterly percentages of original principal are stated, not a yearly amount | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 20–21; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 166–168 |
| Revolving Credit Facility | Senior secured revolving credit | Not supplied: carrying value is not disclosed by instrument | 0 | 0 | 600 | Secured by substantially all assets of the Company and its wholly owned domestic subsidiaries, which guarantee it | Senior secured as the filing labels it; lien priority against the notes is not stated | USD | 0 | Not applicable | SOFR plus 2.00% to 3.00% by leverage; commitment fee 0.25% to 0.50% on the unused portion | Floating | SOFR | 200 to 300 | Not applicable | 2028-10-16 | 0 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 166–167 |
| 9.500% senior secured notes due 2029 | Senior secured notes | Not supplied: carrying value is not disclosed by instrument | 1,350 | 1,350 | Not applicable | First-priority liens on the Collateral; guaranteed by the Subsidiary Guarantors of the credit facilities | Senior secured; first-priority liens on the Collateral | USD | 1,350 | Not applicable | 9.500% fixed, interest paid each 1 April and 1 October | Fixed | Not applicable | Not applicable | Not applicable | 2029-04-01 | 0 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 169–170 |
| ATMaaS master loan agreement with Banc of America Leasing & Capital | Secured equipment financing | Not supplied: carrying value is not disclosed by instrument | 1 | 1 | 20 | Security interest in the financed ATM as a Service assets and rights to payment | Not supplied: the source does not state a rank | USD | 1 | Not applicable | 7.17% weighted average | Not supplied: rate type is not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: weighted average term of 8 months; final maturity not stated | Not supplied: not stated | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 170 |
| Financing cost adjustment | Aggregate discount and deferred financing fees | -31 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -31 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 20 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM to 2026-09-30 | USD 4,354m | USD 3,245m | USD 3,202m | USD 4,397m | Calculated | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 | Latest year FY2025 plus nine months 2026 less nine months 2025; all components are available and comparable |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 736m | USD 652m | USD 527m | USD 861m | Calculated | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 | Latest year FY2025 plus nine months 2026 less nine months 2025; all components are available and comparable |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 830m | USD 667m | USD 594m | USD 903m | Calculated | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 | Latest year FY2025 plus nine months 2026 less nine months 2025; all components are available and comparable |
| Net income attributable to Atleos | LTM to 2026-09-30 | USD 162m | USD 184m | USD 79m | USD 267m | Calculated | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 | Latest year FY2025 plus nine months 2026 less nine months 2025; all components are available and comparable |
| Net cash from operating activities | LTM to 2026-09-30 | USD 356m | USD 219m | USD 125m | USD 450m | Calculated | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 | Latest year FY2025 plus nine months 2026 less nine months 2025; all components are available and comparable |
| Capital expenditures (outflow) | LTM to 2026-09-30 | USD 117m | USD 104m | USD 80m | USD 141m | Calculated | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 | Latest year FY2025 plus nine months 2026 less nine months 2025; all components are available and comparable |
| Additions to capitalized software (outflow) | LTM to 2026-09-30 | USD 39m | USD 33m | USD 39m | USD 33m | Calculated | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 | Latest year FY2025 plus nine months 2026 less nine months 2025; all components are available and comparable |
| Free cash flow (operating cash flow less capital expenditures and capitalized software) | LTM to 2026-09-30 | USD 200m | USD 82m | USD 6m | USD 276m | Calculated | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 | Latest year FY2025 plus nine months 2026 less nine months 2025; all components are available and comparable |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt at carrying value / EBITDA (Reported) | 2,940 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 | 721 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | FY2024 / 2024-12-31 | USD | US$m | 4.08 | Calculated | Tier 1 | Derived reported EBITDA; the issuer states no unadjusted EBITDA |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,521 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 | 721 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | FY2024 / 2024-12-31 | USD | US$m | 3.50 | Calculated | Tier 1 | Derived reported EBITDA; the issuer states no unadjusted EBITDA |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 721 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | 271 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138 | FY2024 / 2024-12-31 | USD | US$m | 2.66 | Calculated | Tier 1 | Cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Gross debt at carrying value / EBITDA (Adjusted) | 2,940 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 | 785 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99 | FY2024 / 2024-12-31 | USD | US$m | 3.75 | Calculated | Tier 1 | Issuer-adjusted EBITDA on the recast definition |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,521 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 | 785 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99 | FY2024 / 2024-12-31 | USD | US$m | 3.21 | Calculated | Tier 1 | Issuer-adjusted EBITDA on the recast definition |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 785 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99 | 271 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138 | FY2024 / 2024-12-31 | USD | US$m | 2.90 | Calculated | Tier 1 | Issuer-adjusted EBITDA on the recast definition |
| Total debt / EBITDA | Gross debt at carrying value / EBITDA (Reported) | 2,869 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | Not calculable: trailing reported EBITDA cannot be built because nine months of 2024 are not in the sources | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | 2025-09-30 | USD | US$m | Not calculable: an operand is not supplied | Not Calculable | Tier 2b | Trailing reported EBITDA needs nine months of 2024, which the sources do not hold |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,457 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | Not calculable: trailing reported EBITDA cannot be built because nine months of 2024 are not in the sources | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | 2025-09-30 | USD | US$m | Not calculable: an operand is not supplied | Not Calculable | Tier 2b | Trailing reported EBITDA needs nine months of 2024, which the sources do not hold |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | Not calculable: trailing reported EBITDA cannot be built because nine months of 2024 are not in the sources | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | Not supplied: cash interest paid is not disclosed for this period | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138 | 2025-09-30 | USD | US$m | Not calculable: an operand is not supplied | Not Calculable | Tier 2b | Trailing reported EBITDA needs nine months of 2024, which the sources do not hold |
| Total debt / adjusted EBITDA | Gross debt at carrying value / EBITDA (Adjusted) | 2,869 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | 823 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | 2025-09-30 | USD | US$m | 3.49 | Calculated | Tier 2b | Trailing Adjusted EBITDA of 823 is the issuer's own figure from the Q3 2026 release |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,457 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | 823 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | 2025-09-30 | USD | US$m | 2.99 | Calculated | Tier 2b | Trailing Adjusted EBITDA of 823 is the issuer's own figure from the Q3 2026 release |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 823 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | Not supplied: cash interest paid is not disclosed for this period | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138 | 2025-09-30 | USD | US$m | Not calculable: an operand is not supplied | Not Calculable | Tier 2b | Trailing Adjusted EBITDA of 823 is the issuer's own figure from the Q3 2026 release |
| Total debt / EBITDA | Gross debt at carrying value / EBITDA (Reported) | 2,758 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 | 736 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | FY2025 / 2025-12-31 | USD | US$m | 3.75 | Calculated | Tier 1 | Derived reported EBITDA; the issuer states no unadjusted EBITDA |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,302 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 | 736 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | FY2025 / 2025-12-31 | USD | US$m | 3.13 | Calculated | Tier 1 | Derived reported EBITDA; the issuer states no unadjusted EBITDA |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 736 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | 268 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138 | FY2025 / 2025-12-31 | USD | US$m | 2.75 | Calculated | Tier 1 | Cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Gross debt at carrying value / EBITDA (Adjusted) | 2,758 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 | 830 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99 | FY2025 / 2025-12-31 | USD | US$m | 3.32 | Calculated | Tier 1 | Issuer-adjusted EBITDA on the recast definition |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,302 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 | 830 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99 | FY2025 / 2025-12-31 | USD | US$m | 2.77 | Calculated | Tier 1 | Issuer-adjusted EBITDA on the recast definition |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 830 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99 | 268 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138 | FY2025 / 2025-12-31 | USD | US$m | 3.10 | Calculated | Tier 1 | Issuer-adjusted EBITDA on the recast definition |
| Total debt / EBITDA | Gross debt at carrying value / EBITDA (Reported) | 2,544 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 | 861 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | 2026-09-30 | USD | US$m | 2.95 | Calculated | Tier 2b | Derived reported EBITDA; the issuer states no unadjusted EBITDA |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,233 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 | 861 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | 2026-09-30 | USD | US$m | 2.59 | Calculated | Tier 2b | Derived reported EBITDA; the issuer states no unadjusted EBITDA |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 861 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 | Not supplied: cash interest paid is not disclosed for this period | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138 | 2026-09-30 | USD | US$m | Not calculable: an operand is not supplied | Not Calculable | Tier 2b | Interim period: EBITDA is a trailing figure; cash interest paid is not disclosed |
| Total debt / adjusted EBITDA | Gross debt at carrying value / EBITDA (Adjusted) | 2,544 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 | 903 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | 2026-09-30 | USD | US$m | 2.82 | Calculated | Tier 2b | Issuer-adjusted EBITDA on the recast definition |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,233 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 | 903 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | 2026-09-30 | USD | US$m | 2.47 | Calculated | Tier 2b | Issuer-adjusted EBITDA on the recast definition |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 903 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | Not supplied: cash interest paid is not disclosed for this period | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138 | 2026-09-30 | USD | US$m | Not calculable: an operand is not supplied | Not Calculable | Tier 2b | Interim period: EBITDA is a trailing figure; cash interest paid is not disclosed |
| Adjusted EBITDA margin | Adjusted EBITDA / Revenue x 100 | 830 | Statements and Calculations | 4,354 | Statements and Calculations | FY2025 | USD | US$m | 19.06 | Calculated | Tier 1 | Issuer-adjusted EBITDA over revenue |
| Adjusted EBITDA margin | Adjusted EBITDA / Revenue x 100 | 903 | Statements and Calculations | 4,397 | Statements and Calculations | LTM 2026-09-30 | USD | US$m | 20.54 | Calculated | Tier 2b | Trailing issuer-adjusted EBITDA over trailing revenue |
| Free cash flow to adjusted EBITDA | Free cash flow / Adjusted EBITDA x 100 | 200 | Statements and Calculations | 830 | Statements and Calculations | FY2025 | USD | US$m | 24.10 | Calculated | Tier 1 | Free cash flow is operating cash flow less capital expenditures and capitalized software |
| Free cash flow to adjusted EBITDA | Free cash flow / Adjusted EBITDA x 100 | 276 | Statements and Calculations | 903 | Statements and Calculations | LTM 2026-09-30 | USD | US$m | 30.56 | Calculated | Tier 2b | Trailing figures |
| Capital intensity | (Capital expenditures + Additions to capitalized software) / Revenue x 100 | 156 | Statements and Calculations | 4,354 | Statements and Calculations | FY2025 | USD | US$m | 3.58 | Calculated | Tier 1 | Capital expenditures 117 plus capitalized software 39 |
| Operating cash flow to total debt | Net cash from operating activities / Total debt x 100 | 356 | Statements and Calculations | 2,758 | Statements and Calculations | FY2025 | USD | US$m | 12.91 | Calculated | Tier 1 | Carrying-value debt at 2025-12-31 |
| Operating cash flow to total debt | Net cash from operating activities / Total debt x 100 | 450 | Statements and Calculations | 2,544 | Statements and Calculations | LTM 2026-09-30 | USD | US$m | 17.69 | Calculated | Tier 2b | Trailing operating cash flow over carrying-value debt at 2026-09-30 |
| Revenue growth | Numerator Value / Denominator Value - 1 | 4,354 | Statements and Calculations | 4,305 | Statements and Calculations | FY2025 against FY2024 | USD | US$m | 1.14 | Calculated | Tier 1 | Percent; FY2024 as revised |
| Revenue growth | Numerator Value / Denominator Value - 1 | 3,245 | Statements and Calculations | 3,202 | Statements and Calculations | 9M 2026 against 9M 2025 | USD | US$m | 1.34 | Calculated | Tier 2b | Percent; comparatives as revised |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2025 | Q3 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- |
| Revenue quality | Recurring revenue (USD millions) | 783 | 782 | Flat | Recurring revenue was 71.2% of revenue in Q3 2026 against 69.8% |
| Revenue quality | Recurring revenue as a percent of total revenue | 69.8 | 71.2 | Up | Share rose while hardware revenue fell |
| Self-Service Banking | Annualized recurring revenue (USD millions) | 1,712 | 1,742 | Up | Issuer-defined operating metric |
| Self-Service Banking | Revenue from ATMaaS arrangements (USD millions) | 67 | 83 | Up | Growth in the recurring ATM as a Service model |
| Self-Service Banking | Hardware revenue (USD millions) | 235 | 188 | Down | Lower hardware volumes in certain markets |
| Network | LTM average revenue per unit (USD thousands) | 16.2 | 16.1 | Flat | Trailing twelve months; period-end rate |
| Network | Network Managed Units (thousands) | 80.9 | 77.0 | Down | Period-end count of transacting ATMs |
| Margins | Gross margin as a percent of revenue | 24.2 | 25.8 | Up | Issuer-reported |
| Margins | Adjusted gross margin as a percent of revenue | 26.5 | 27.7 | Up | Issuer-reported, non-GAAP |
| Margins | Adjusted EBITDA margin as a percent of revenue | 19.5 | 21.9 | Up | Issuer-reported, non-GAAP |
| Cash flow | Net cash from operating activities (USD millions) | 27 | 198 | Up | Q3 2025 was depressed by settlement timing |
| Cash flow | Change in restricted cash settlement activity in the issuer bridge (USD millions) | 117 | -2 | Down | Settlement timing swing added back in the issuer's free cash flow bridge |
| Cash flow | Adjusted free cash flow-unrestricted, issuer definition (USD millions) | 124 | 156 | Up | Issuer-defined non-GAAP measure; differs from free cash flow here |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA is the unadjusted primary denominator; adjusted EBITDA is shown beside it, labelled | The issuer states only Adjusted EBITDA (non-GAAP) and no unadjusted EBITDA | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 39 | FY2023 to 9M 2026 | Adjusted exceeds derived reported EBITDA by 94 in FY2025 | Financial foundation; Fundamental credit | Derived reported EBITDA is the primary denominator and the adjusted ratios stay in the register |
| Depreciation and amortization | Depreciation and amortization from the cash flow statement | The issuer's reconciliation shows depreciation and amortization of 168 plus acquisition amortization of 95 for FY2025, against 277 in the cash flow statement | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 98; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 | FY2025 difference 14; FY2024 16; FY2023 5; 9M 2026 9; 9M 2025 11 | Minor | Financial foundation | Cash flow statement figure used; the difference sits in the adjusted bridge |
| Adjusted EBITDA definition | Constant definition across periods | From 2025 the issuer excludes other income and expense items (bank fees, non-service pension cost, currency effects) and recasts earlier periods | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99 | FY2023 to FY2025 | Other items of 4 in FY2025, 11 in FY2024 and 24 in FY2023 | Financial foundation; Earnings quality | Use the recast figures only; originals are not comparable |
| Debt basis | Carrying value, current plus long-term, net of issuance costs and discounts; principal logged separately | Principal and carrying value both printed | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 165–166; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 20–21 | 2024-12-31; 2025-12-31; 2026-09-30 | Carrying 2,940, 2,758 and 2,544 against principal 2,994, 2,798 and 2,575; differences 54, 40 and 31 | Financial foundation; Liquidity | Carrying value used for leverage; principal beside it |
| Debt perimeter | Lease liabilities the issuer presents on their own lines are not added to debt | Finance lease liabilities of 14 and operating lease liabilities of 176 sit in other liabilities; receivables sold of 200 at 2025-12-31 and 186 at 2026-09-30 are derecognized; vault cash averaging about USD 4.1 billion in FY2025 is outside the statements | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 196; 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 171–172; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 13 | 2025-12-31; 2026-09-30 | Lease liabilities 190 in total; receivables sold 186 | Financial foundation; Liquidity; Fundamental credit | Excluded from debt and named as claims outside debt |
| Pensions and indemnities | Pension and indemnity obligations are not financial debt | US pension plan underfunded by 248 and international plans net funded by 211 at 2025-12-31; Voyix indemnification obligations of 48 due in 2026 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 108–109 | 2025-12-31 | Not included in debt or net debt | Financial foundation; Fundamental credit | Shown outside debt |
| Net debt | Gross debt at carrying value less cash and equivalents, restricted cash excluded | The issuer's adjusted net debt is short-term plus long-term borrowings less cash and cash equivalents | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, pages 10–12 | 2025-09-30; 2025-12-31; 2026-03-31; 2026-06-30; 2026-09-30 | No difference in definition; restricted cash of 166 at 2026-09-30 is excluded by both | Financial foundation | Aligned |
| Free cash flow | Operating cash flow less capital expenditures and capitalized software | Adjusted free cash flow-unrestricted adds back restricted cash settlement activity, pension contributions, indemnification payments and sale-leaseback proceeds; the FY2025 report widened it and the 2026 releases word it differently | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, pages 8–9 | FY2023 to Q3 2026 | FY2025: 326 issuer-defined against 200 here | Financial foundation; Earnings quality | Simple free cash flow used; issuer measure shown in the KPI dashboard |
| Revised comparatives | The later audited filing controls revised years | The original FY2024 annual report shows revenue 4,317, income from operations 449, net income attributable 91 and Adjusted EBITDA 781; the FY2025 annual report shows 4,305, 437, 80 and 785 | 10-K_2024-12-31_ncr-20241231.htm.jsonl, page 130; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123 | FY2024; FY2023 | Revenue 12, net income 11 and Adjusted EBITDA 4 in FY2024 | Financial foundation; Changes since the last run | Revised figures used; the Form 10-K/A is not supplied |
| Debt maturity total | The maturity ladder sums to the principal outstanding | The ladder totals 2,792 while the debt table and summary give principal of 2,798 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 170; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 107 | 2025-12-31 | 6 unexplained | Financial foundation; Liquidity | Both totals shown; the ladder is used for the principal row and the 6 sits in reconciling items |
| Q3 2026 legal settlement (one event, three figures) | All figures of one event are shown with their roles | The quarterly report states net settlement proceeds of 31.5 in selling, general and administrative expenses; the Adjusted EBITDA bridge removes 31; the release cash flow bridge deducts 38 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 39; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 | Q3 2026 | 6.5 between the release cash flow deduction and the net proceeds | Financial foundation; Earnings quality | Net proceeds of 31.5 is the cash fact; the bridge figures serve each issuer measure |
| Net leverage table in the Q1 2026 release | The printed ratio reconciles to its printed rows | The table prints quarterly net income of 22 and Adjusted EBITDA of 172 beside a ratio of 2.83x that implies about 830 of trailing Adjusted EBITDA | EX-99.1_2026-05-06_ex-991ncratleosearningsrel.htm.jsonl, page 12 | 2026-03-31 | Printed rows give 13.66x against 2.83x | Financial foundation | Trailing figures rebuilt from FY2025 plus Q1 2026 less Q1 2025; the ratio reconciles |
| Cash interest | Cash interest paid is the cash flow measure, kept apart from interest expense | Cash interest paid was 268 in FY2025 and 271 in FY2024 against interest expense of 270 and 309 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 138; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123 | FY2024; FY2025 | FY2024 cash interest is 38 below expense | Financial foundation | Cover uses cash interest |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and net debt | Ready with Limitations | Reported EBITDA is derived; FY2024 and FY2023 only as revised; trailing reported EBITDA at 2025-09-30 not calculable | Use the issuer-adjusted ratios beside the derived ones and name the basis |
| Interest cover | Ready with Limitations | Cash interest paid is disclosed only for fiscal years, so 2026 cover is not established | Use fiscal-year cover and the fall in interest expense |
| Liquidity | Ready | Revolver position at 2025-09-30 not supplied | None for the latest date |
| Maturity profile | Ready with Limitations | The ladder is printed only at 2025-12-31 and differs from principal by 6 | State the date of the ladder |
| Debt structure and ranking | Ready with Limitations | Lien priority between the credit facilities and the notes and intercreditor terms are not supplied | Request the credit agreement, the indenture and any intercreditor agreement |
| Covenant compliance | Not Ready | The covenant is printed but the issuer's covenant ratio and its Consolidated EBITDA definition are not | Request the compliance certificate and credit agreement |
| Pro forma for the Brink's merger | Not Ready | The consent fee amount and the treatment of the credit facilities at closing are not stated | Request the merger agreement and the joint proxy statement |

## Calculations

Each row works a figure used above from the printed inputs. Amounts are USD millions unless a unit is shown.

| Calculation ID | Quantity | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| K1 | Net debt at 2024-12-31 | 2,940 - 419 | 2,521 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 |
| K2 | Net debt at 2025-09-30 | 2,869 - 412 | 2,457 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 |
| K3 | Net debt at 2025-12-31 | 2,758 - 456 | 2,302 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 |
| K4 | Net debt at 2026-09-30 | 2,544 - 311 | 2,233 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–7 |
| K5 | Gross debt at 2025-12-31: short-term plus long-term borrowings | 86 + 2,672 | 2,758 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 |
| K6 | Gross debt at 2024-12-31: short-term plus long-term borrowings | 81 + 2,859 | 2,940 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 |
| K7 | Gross debt at 2026-09-30: short-term plus long-term borrowings | 89 + 2,455 | 2,544 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 7 |
| K8 | Gross debt at 2025-09-30: short-term plus long-term borrowings | 80 + 2,789 | 2,869 | EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 |
| K9 | Principal in the debt table at 2025-12-31: current credit facility, other, term loans, revolver, notes | 78 + 8 + 1,237 + 125 + 1,350 | 2,798 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 165–166 |
| K10 | Reconciling items to carrying value at 2025-12-31: discount and fees, plus principal the ladder leaves out | -40 + (2,798 - 2,792) = -40 + 6 | -34 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 165–166; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 170 |
| K11 | EBITDA (Reported) FY2025: net income, income tax, interest expense, depreciation and amortization | 162 + 27 + 270 + 277 | 736 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 |
| K12 | EBITDA (Reported) FY2024 | 81 + 44 + 309 + 287 | 721 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 |
| K13 | EBITDA (Reported) FY2023: interest includes related party interest of 13 | -148 + 237 + (77 + 13) + 254 | 433 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125 |
| K14 | EBITDA (Reported) nine months 2026 | 184 + 68 + 186 + 214 | 652 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 |
| K15 | EBITDA (Reported) nine months 2025 | 77 + 35 + 204 + 211 | 527 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 |
| K16 | Trailing EBITDA (Reported) at 2026-09-30 | 736 + 652 - 527 | 861 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 123–125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 6–8 |
| K17 | Trailing Adjusted EBITDA at 2026-09-30 | 830 + 667 - 594 | 903, equal to the Q3 release | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 39; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 |
| K18 | Trailing revenue at 2026-09-30 | 4,354 + 3,245 - 3,202 | 4,397 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| K19 | Trailing net income attributable to Atleos at 2026-09-30 | 162 + 184 - 79 | 267, equal to the Q3 release | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6; EX-99.1_2026-11-04_ex-991ncratleosearningsrel.htm.jsonl, page 12 |
| K20 | Trailing net cash from operating activities at 2026-09-30 | 356 + 219 - 125 | 450 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 7 |
| K21 | Trailing capital expenditures at 2026-09-30 | 117 + 104 - 80 | 141 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 7 |
| K22 | Trailing capitalized software at 2026-09-30 | 39 + 33 - 39 | 33 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 7 |
| K23 | Free cash flow: operating cash flow less capital expenditures and capitalized software | FY2023 355 - 108 - 24 = 223; FY2024 344 - 87 - 39 = 218; FY2025 356 - 117 - 39 = 200; nine months 2026 219 - 104 - 33 = 82; nine months 2025 125 - 80 - 39 = 6; trailing 200 + 82 - 6 | 223; 218; 200; 82; 6; 276 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_natl-20260930.htm.jsonl, pages 7–8 |
| K24 | Adjusted EBITDA less derived reported EBITDA, FY2025 | 830 - 736 | 94 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 99 |
| K25 | Fall in cash and cash equivalents from 2025-12-31 to 2026-09-30 | 456 - 311 | 145 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| K26 | Net revolver repayment, nine months 2026 | 655 - 530 | 125 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 7 |
| K27 | Liquidity at 2026-09-30: cash plus undrawn revolver after letters of credit | 311 + 571 | 882 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21 |
| K28 | Liquidity at 2025-12-31 | 456 + 447 | 903 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 106; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 |
| K29 | Liquidity at 2024-12-31 | 419 + 350 | 769 | 10-K_2024-12-31_ncr-20241231.htm.jsonl, page 111; 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 |
| K30 | Fall in carrying-value gross debt from 2025-12-31 to 2026-09-30 | 2,758 - 2,544 | 214 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 7 |
| K31 | Fall in carrying-value gross debt from 2024-12-31 to 2025-12-31 | 2,940 - 2,758 | 182 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 124 |
| K32 | Fall in interest expense, nine months | 204 - 186 | 18 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |
| K33 | Cumulative secured debt over trailing derived reported EBITDA: term loans, revolver, notes | (1,224 + 0 + 1,350) / 861 = 2,574 / 861 | 2.99 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 21 |
| K34 | Adjusted EBITDA bridge FY2025: net income plus add-backs | 162 + 270 - 6 + 27 + 168 + 95 + 34 + 11 + 2 + 10 + 2 + 51 + 4 | 830 | 10-K_2025-12-31_ncr-20251231.htm.jsonl, pages 98–99 |
| K35 | Depreciation and amortization Q3 2026: nine months less six months | 214 - 142 | 72 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 7; 10-Q_2026-06-30_natl-20260630.htm.jsonl, page 7 |
| K36 | Depreciation and amortization Q3 2025: nine months less six months | 211 - 141 | 70 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 7; 10-Q_2026-06-30_natl-20260630.htm.jsonl, page 7 |
| K37 | EBITDA (Reported) Q3 2026: net income, income tax, interest expense, depreciation and amortization | 97 + 32 + 61 + 72 | 262 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6; 10-Q_2026-06-30_natl-20260630.htm.jsonl, page 7 |
| K38 | EBITDA (Reported) Q3 2025 | 26 + 7 + 68 + 70 | 171 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6; 10-Q_2026-06-30_natl-20260630.htm.jsonl, page 7 |
| K39 | Share of the year-end debt ladder due in 2028 and 2029 | (949 + 1,670) / 2,792 = 2,619 / 2,792 x 100 | 93.80% | 10-K_2025-12-31_ncr-20251231.htm.jsonl, page 170 |
| K40 | Analyst Judgement: net leverage at 2026-09-30 with the Q3 2026 legal settlement gain of 31.5 removed from trailing derived reported EBITDA | 2,233 / (861 - 31.5) = 2,233 / 829.5 | 2.69 | 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_natl-20260930.htm.jsonl, page 6 |

## Gaps

Each line states what is missing or unreconciled, for which item and period, what it restricts, its severity and what would close it. Four are Medium and unresolved, four are Low and unresolved, and two are resolved.

- Cash interest paid is not disclosed in the quarterly reports, so EBITDA cover for 2025-09-30 and 2026-09-30 is not calculable and every interest cover cell for those dates is not supplied, which restricts any 2026 coverage conclusion; Severity Medium; the actions that would close it are an issuer disclosure of cash interest paid for the periods.
- The debt maturity ladder is printed only at 2025-12-31 and the 2026-09-30 report gives total principal of USD 2,575 million without a ladder, so principal repaid in 2026 is not scheduled and the maturity wall at the latest date is not established; Severity Medium; a ladder at 2026-09-30 or the tranche balances would close it.
- No source states lien priority between the credit facilities and the 2029 secured notes and no intercreditor terms are supplied, so the debt stack shows equal rank as Analyst Judgement and the equipment loan is left out because its rank is not stated; Severity Medium; the credit agreement, the indenture and any intercreditor agreement would close it.
- The consent fee on the 2029 secured notes is not stated and the treatment of the credit facilities at the merger closing is not stated, so pro forma net debt and pro forma net leverage are not established; Severity Medium; the merger agreement and the joint proxy statement would close it.
- The issuer states no unadjusted EBITDA, so EBITDA is derived from net income, income tax, interest and cash-flow depreciation and amortization, which differs from the issuer's reconciliation by USD 14 million of depreciation and amortization in FY2025; the Q3 quarters use depreciation and amortization derived as nine months less six months, and reported EBITDA is not calculable for the trailing year at 2025-09-30 because nine months of 2024 are not in the sources; Severity Low; an issuer statement of unadjusted EBITDA would close it.
- The Q3 2025 balance sheet and the revolver position at 2025-09-30 are not in the sources, so the 2025-09-30 debt and cash come from the Q3 2026 release, and the FY2023 balance sheet is printed only in the original FY2024 annual report before the revision, so FY2023 has no leverage; lines printed in the annual report but not in the quarterly reports are not supplied for the nine-month columns, dashes in the statements are read as not supplied and not as zero, and FY2023 cash interest is external interest only; Severity Low; the earlier quarterly reports would close the first three.
- Tranche balances of the term loans at 2026-09-30 and instrument-level carrying values are not disclosed, and the average vault cash balance for 2026 is not stated, so only an aggregate financing cost adjustment of USD 31 million and the FY2025 average of about USD 4.1 billion are shown, and no separate statements for the subsidiary guarantors, the receivables subsidiaries or the acquirer are supplied; Severity Low; a debt schedule, the vault cash disclosure and those statements would close it.
- Printed figures disagree in three places: the FY2025 maturity table totals USD 2,792 million against principal of USD 2,798 million, the Q3 2026 release deducts USD 38 million for legal settlements against net proceeds of USD 31.5 million in the quarterly report, and the free cash flow definition is worded differently between the FY2025 annual report and the 2026 releases; all figures are shown with their roles and none is forced to agree; Severity Low; issuer explanations would close them.
- The FY2024 annual report supplied is the original and was later revised in a Form 10-K/A that is not supplied; FY2024 and FY2023 figures are taken from the FY2025 annual report, which is a resolved conflict for those years, and revised FY2022 figures exist nowhere in the sources; Severity Low and resolved by using the later filing.
- The Q1 2026 release prints quarterly net income of USD 22 million and Adjusted EBITDA of USD 172 million beside a net leverage ratio of 2.83x, which implies trailing Adjusted EBITDA of about USD 830 million; the trailing figure was rebuilt from FY2025 plus Q1 2026 less Q1 2025 and agrees; Severity Low and resolved by recomputation.

## Next module

The orchestrator selects the next module.
