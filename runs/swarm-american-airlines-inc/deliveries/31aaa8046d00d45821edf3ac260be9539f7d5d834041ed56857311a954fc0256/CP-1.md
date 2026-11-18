---
issuer_id: american-airlines-inc
module_id: CP-1
analysis_date: 2026-11-05
pathway: credit_snapshot
module_status: Complete
---

# AMERICAN AIRLINES, INC. — Financial foundation

## Request

Financial foundation for the credit snapshot pathway, as of 2026-11-05, for AMERICAN AIRLINES, INC. The scope is the issuer's own statements for FY2023 to FY2025 and the first nine months of 2026, with trailing twelve months to 2026-09-30, debt, liquidity and coverage, all in USD millions as printed. The parent's group figures are context only and are labelled as such.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_aal-20251231.htm.jsonl | Combined annual report on Form 10-K of American Airlines Group Inc. and American Airlines, Inc. for the year ended 31 December 2025 | 2026-02-18 | 241cb406125cf4a40a3dec4d315c7a8e709f73f5f12957d46a28f056de7b338c | American's audited statements for FY2023 to FY2025, debt, lease and related-party notes, liquidity table, subsequent events, segment note |
| 10-Q_2026-03-31_aal-20260331.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-23 | bd54f0ef7be7c4905b1acb2a15d1e60b5211836b6a174b954a6d8e979771d4f3 | Scanned for events after balance-sheet dates; no figure taken |
| 10-Q_2026-06-30_aal-20260630.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-23 | e590d34e327bfac4cc2a446c7444656df89c4b6aac523f8df741e9c71b1ace9a | Scanned for events after balance-sheet dates; no figure taken |
| 10-Q_2026-09-30_aal-20260930.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-22 | edb09356472b6a21c11979d0ace904761af85e302b5218542813aede49a0decc | American's interim statements for the third quarter and nine months of 2026, debt note, maturity ladder, liquidity, related-party note, group debt note for context |
| EX-99.2_2026-04-23_earningspresentation.htm.jsonl | Earnings presentation (Exhibit 99.2) of American Airlines Group Inc. for the first quarter of 2026 | 2026-04-23 | 9a2e0cf77a5348cca76e4e1fa089b91044513dded2916dcf498cbc76a4f142fe | Group adjusted EBITDAR, for the definition conflict register only |
| EX-99.2_2026-07-23_earningspresentation.htm.jsonl | Earnings presentation (Exhibit 99.2) of American Airlines Group Inc. for the second quarter of 2026 | 2026-07-23 | 60d450333d317c8f5bcb2c0834ff53272fd96fa253d4a67d36813c30742d7ee9 | Scanned; no figure taken |
| EX-99.2_2026-10-22_earningspresentation.htm.jsonl | Earnings presentation (Exhibit 99.2) of American Airlines Group Inc. for the third quarter of 2026 | 2026-10-22 | ce6723a4b2e59ac217d38de9b2fa855bbf5fa9fd11b713b0732222688fa7865b | Group total debt and net debt on management's definition, for the definition conflict register only |
| Source readiness (CP-0) | Source readiness module output for this run | 2026-11-05 | 4252ff615ac41d676d95264f3441638e114fef5fac4ea9ed713cc85514f48952 | Entity perimeter and source limitations |

## Findings

### Bottom line

American Airlines, Inc. carries net debt of 6.04x trailing reported EBITDA with interest cover of only 2.06x, so creditors rely on liquidity of USD 11,763 million rather than earnings while fuel costs depress profit. Net debt was USD 17,623 million at 2026-09-30, USD 1,820 million below the 2025 year-end, yet leverage rose from 5.73x because trailing EBITDA fell by USD 479 million. These are American's own figures; the parent's group figures are context only.
Basis: calculation C04; calculation C13; calculation C14; calculation C15; calculation C24; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201

Two definitions limit the ratios. Reported EBITDA is derived from operating income and the depreciation line on the face of the statement, which omits depreciation booked in other lines, and American holds a USD 12,512 million net receivable from its parent that is not cash and is excluded from net debt. The parent's reported net debt of USD 28,079 million includes lease and pension obligations and is not comparable.
Basis: calculation C05; calculation C23; calculation C39; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 40; EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 10; Source readiness (CP-0)

### Credit analysis of the data

Net leverage on trailing reported EBITDA rose to 6.04x at 2026-09-30 from 5.73x at the 2025 year-end and 4.10x a year earlier, even though net debt is lower than at either year-end, because earnings have fallen faster than debt. The mechanism is fuel: fuel and related taxes rose by USD 4,427 million in the first nine months of 2026 while revenue grew 15.63%, so operating income fell to USD 535 million from USD 1,042 million. For creditors the consequence is that deleveraging so far has come from cash rather than earnings, and a further rise in fuel prices would widen the gap before any debt is repaid. The strongest contrary evidence is liquidity, with USD 11,763 million available and nothing drawn on the revolving facilities, which would have to be spent down before leverage becomes a refinancing problem.
Basis: calculation C13; calculation C31; calculation C29; calculation C24; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31

Cover of cash interest by reported EBITDA is 2.06x trailing against 2.19x for FY2025 and 2.53x for FY2024. Interest paid is falling, at USD 1,416 million trailing against USD 1,551 million for FY2025, so the squeeze comes from earnings rather than from rates or new debt. Accrued interest expense exceeded interest paid by USD 187 million over the first nine months of 2026, so cash-based cover flatters cover on accrued interest.
Basis: calculation C14; calculation C37; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254

Operating cash flow of USD 4,440 million for the first nine months is double the USD 2,229 million of a year earlier, but the quarterly report attributes the rise mainly to working capital in the air traffic and loyalty liabilities and to the 2025 cash funding of the parent's note settlement, partly offset by lower profitability. Free cash flow of USD 1,780 million for the nine months therefore reflects seasonal and intercompany timing rather than earnings power; over the trailing twelve months it is a deficit of USD 132 million after capital expenditure of USD 4,273 million.
Basis: calculation C22; calculation C09; calculation C10; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 63

Liquidity is USD 11,763 million, made up of USD 8,253 million of cash and short-term investments and USD 3,510 million of undrawn facilities, equal to 0.45x of balance-sheet debt. The undrawn amount is the issuer's printed availability under three revolving facilities and two smaller facilities, one of which, a USD 50 million cargo receivables facility, expires in December 2026. The filings state a covenant requiring at least USD 2.0 billion of unrestricted cash and cash equivalents plus undrawn revolver amounts; its definition differs from the liquidity measure used here, so no covenant headroom is calculated.
Basis: calculation C15; calculation C33; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 60; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 61

A large part of the balance sheet is customer-funded. Air traffic liability of USD 9,414 million, loyalty program liability of USD 11,514 million and fuel financing of USD 933 million together stand at USD 21,861 million, USD 3,225 million above the year-end. Ticket and mileage cash is received before service and reverses as flights are flown, so it flatters operating cash flow in the build season and becomes a call on cash in a downturn, particularly because the filings warn that credit card processing terms can tighten if financial condition worsens. The float sits outside Total Debt and bears no interest, but it is a claim on future cash.
Basis: calculation C32; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 30; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 3

American is a net lender to its parent. Net related-party receivables of USD 10,430 million comprise USD 12,512 million due from the parent less USD 2,082 million owed to the parent's regional subsidiaries, and the annual report links growth in the parent receivable to American providing cash for the parent's financing. None of this is cash and it is outside net debt here. Creditors of American therefore hold a buffer that depends on the parent's ability to repay, while the parent carries USD 3,746 million of its own unsecured promissory notes.
Basis: calculation C39; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 15; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257

Reported EBITDA is a derived figure, built from the depreciation line on the face of the income statement. The cash flow statement shows depreciation and amortization of USD 2,177 million for FY2025 against USD 1,884 million on the face, which would raise FY2025 EBITDA by USD 293 million to USD 3,688 million and lower FY2025 leverage to 6.85x from 7.44x. The face-of-statement basis is used for every period because the quarterly statements print no total depreciation, so the series is consistent but overstates leverage and understates cover. The issuer states no adjusted EBITDA for American, so no adjusted ratios are shown.
Basis: calculation C05; calculation C23; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202

No financing event after 2026-09-30 is stated in the sources up to the cutoff, so no pro forma net debt is shown. The quarterly report mentions the exercise of purchase options for five Airbus A320 aircraft in October 2026, which adds to aircraft commitments but not to net debt.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 65

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Passenger | 48,512 | 49,586 | 49,643 | 36,985 | 42,609 | 12,471 | 14,900 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Cargo | 812 | 804 | 839 | 612 | 761 | 212 | 274 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Other | 3,460 | 3,814 | 4,144 | 3,031 | 3,609 | 1,005 | 1,160 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Total operating revenues | 52,784 | 54,204 | 54,626 | 40,628 | 46,979 | 13,688 | 16,334 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Aircraft fuel and related taxes | 12,257 | 11,418 | 10,718 | 8,017 | 12,444 | 2,767 | 4,635 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Salaries, wages and benefits | 14,572 | 16,012 | 17,556 | 13,058 | 14,019 | 4,459 | 4,711 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Regional expenses | 4,619 | 5,009 | 5,406 | 4,027 | 4,278 | 1,353 | 1,452 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Maintenance, materials and repairs | 3,265 | 3,794 | 3,844 | 2,876 | 3,100 | 1,028 | 1,092 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Other rent and landing fees | 2,928 | 3,303 | 3,476 | 2,627 | 2,862 | 906 | 996 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Aircraft rent | 1,369 | 1,242 | 1,220 | 910 | 926 | 310 | 309 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Selling expenses | 1,799 | 1,812 | 1,997 | 1,467 | 1,664 | 483 | 553 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Depreciation and amortization | 1,927 | 1,919 | 1,884 | 1,414 | 1,442 | 473 | 491 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Special items, net | 971 | 610 | 159 | 125 | 29 | 7 | 9 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Other operating expenses | 6,008 | 6,431 | 6,855 | 5,065 | 5,680 | 1,735 | 1,972 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Total operating expenses | 49,715 | 51,550 | 53,115 | 39,586 | 46,444 | 13,521 | 16,220 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Operating income | 3,069 | 2,654 | 1,511 | 1,042 | 535 | 167 | 114 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Interest income | 1,078 | 1,058 | 949 | 732 | 639 | 249 | 231 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Interest expense, net | -2,206 | -2,029 | -1,780 | -1,343 | -1,231 | -450 | -427 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Other income (expense), net | -359 | 5 | 81 | 41 | -200 | 49 | -101 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Total nonoperating expense, net | -1,487 | -966 | -750 | -570 | -792 | -152 | -297 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Income (loss) before income taxes | 1,582 | 1,688 | 761 | 472 | -257 | 15 | -183 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Income tax provision (benefit) | 394 | 426 | 197 | 128 | -26 | 5 | -32 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Net income (loss) | 1,188 | 1,262 | 564 | 344 | -231 | 10 | -151 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| EBITDA (Reported) | 4,996 | 4,573 | 3,395 | 2,456 | 1,977 | 640 | 605 | USD millions | Calculated C05: operating income plus the depreciation and amortization line; the issuer prints no EBITDA | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | 1,188 | 1,262 | 564 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Depreciation and amortization (cash flow statement) | 2,198 | 2,198 | 2,177 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported: total depreciation and amortization of the cash flow statement | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Debt extinguishment costs | 267 | 9 | 20 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Special items, net non-cash | 41 | -1 | -17 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Pension and postretirement | -14 | -82 | -31 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Deferred income tax provision | 394 | 426 | 197 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Share-based compensation, non-cash | 97 | 89 | 55 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Other, net | -216 | -260 | -91 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Decrease (increase) in accounts receivable | 104 | 33 | -69 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Increase in other assets | -2 | -287 | -144 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Increase in accounts payable | 147 | 284 | 274 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Increase (decrease) in air traffic liability | -545 | 559 | 399 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Increase in receivables from related parties, net | -482 | -1,099 | -1,701 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Increase in loyalty program liability | 182 | 727 | 510 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Contributions to pension plans | -71 | -295 | -225 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Increase (decrease) in other liabilities | 418 | -154 | 12 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Net Cash from Operating Activities | 3,706 | 3,409 | 1,930 | 2,229 | 4,440 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Capital expenditures and aircraft purchase deposits | -2,542 | -2,624 | -3,716 | -2,103 | -2,660 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Proceeds from sale-leaseback transactions and sale of property and equipment | 230 | 654 | 343 | 243 | 77 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Sales of short-term investments | 8,861 | 8,013 | 6,189 | 4,944 | 2,751 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Purchases of short-term investments | -7,324 | -7,194 | -4,905 | -4,801 | -5,025 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Decrease (increase) in restricted short-term investments | 51 | 177 | 3 | -20 | 180 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Other investing activities | 275 | 65 | 254 | 280 | -80 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Net Cash from Investing Activities | -449 | -909 | -1,832 | -1,457 | -4,757 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Payments on long-term debt and finance leases | -7,697 | -3,973 | -4,503 | -3,086 | -5,343 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Proceeds from issuance of long-term debt | 4,822 | 1,670 | 3,773 | 2,169 | 5,933 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Net proceeds from fuel financing | Not supplied: the statement prints a dash | 74 | 840 | Not supplied: the quarterly statement prints no such line | Not supplied: the quarterly statement prints no such line | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Other financing activities | -287 | -48 | -63 | 180 | -113 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Net Cash from Financing Activities | -3,162 | -2,277 | 47 | -737 | 477 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Net Cash Change | 95 | 223 | 145 | 35 | 160 | USD millions | Reported: operating plus investing plus financing; the statement has no FX line | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Opening Cash | 575 | 670 | 893 | 893 | 1,038 | USD millions | Reported: cash and restricted cash | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Closing Cash | 670 | 893 | 1,038 | 928 | 1,198 | USD millions | Reported: cash and restricted cash | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Cash Interest Paid | 2,058 | 1,806 | 1,551 | 1,179 | 1,044 | USD millions | Reported: interest paid, net, from the supplemental information; positive amount | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash | 795 | 936 | 1,094 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Short-term investments | 6,177 | 4,880 | 7,159 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Restricted cash and short-term investments | 732 | 735 | 555 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Accounts receivable, net | 1,977 | 2,041 | 1,891 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Receivables from related parties, net | 8,187 | 9,896 | 10,430 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Aircraft fuel, spare parts and supplies, net | 2,476 | 2,596 | 2,939 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Prepaid expenses and other | 675 | 645 | 678 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total current assets | 21,019 | 21,729 | 24,746 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Flight equipment | 43,158 | 46,226 | 48,318 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Ground property and equipment | 9,709 | 9,954 | 10,240 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Equipment purchase deposits | 1,012 | 656 | 633 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total property and equipment, at cost | 53,879 | 56,836 | 59,191 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Less accumulated depreciation and amortization | -23,060 | -24,621 | -25,935 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total property and equipment, net | 30,819 | 32,215 | 33,256 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Operating lease right-of-use assets | 7,274 | 7,038 | 6,699 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Goodwill | 4,091 | 4,091 | 4,091 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Intangibles, net | 2,044 | 2,066 | 2,067 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Deferred tax asset | 2,068 | 1,832 | 1,844 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Other assets | 1,440 | 1,276 | 1,115 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total other assets | 9,643 | 9,265 | 9,117 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total assets | 68,755 | 70,247 | 73,818 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Current maturities of long-term debt and finance leases | 4,326 | 3,750 | 3,689 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Accounts payable | 2,372 | 2,717 | 3,175 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Accrued salaries and wages | 1,995 | 1,957 | 1,985 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Air traffic liability | 6,759 | 7,158 | 9,414 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Loyalty program liability, current | 3,556 | 3,725 | 4,446 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Operating lease liabilities, current | 1,082 | 1,048 | 1,025 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Fuel financing | 74 | 914 | 933 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Other accrued liabilities | 2,738 | 2,768 | 2,871 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total current liabilities | 22,902 | 24,037 | 27,538 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Long-term debt and finance leases, net of current maturities | 21,410 | 21,509 | 22,187 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Pension and postretirement benefits | 2,115 | 1,566 | 1,098 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Loyalty program liability, noncurrent | 6,498 | 6,839 | 7,068 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Operating lease liabilities, noncurrent | 5,926 | 5,860 | 5,567 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Other liabilities | 1,670 | 1,408 | 1,465 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total noncurrent liabilities | 37,619 | 37,182 | 37,385 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Additional paid-in capital | 17,408 | 17,468 | 17,520 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Accumulated other comprehensive loss | -4,677 | -4,507 | -4,461 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Retained deficit | -4,497 | -3,933 | -4,164 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total stockholder's equity | 8,234 | 9,028 | 8,895 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total liabilities and stockholder's equity | 68,755 | 70,247 | 73,818 | USD millions | Reported | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total Assets | 68,755 | 70,247 | 73,818 | USD millions | Reported: total assets | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total Liabilities | 60,521 | 61,219 | 64,923 | USD millions | Calculated C01: total current plus total noncurrent liabilities; the statement prints no total | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total Equity | 8,234 | 9,028 | 8,895 | USD millions | Reported: total stockholder's equity; no temporary equity | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total Debt | 25,736 | 25,259 | 25,876 | USD millions | Calculated C02: carrying value of the two balance-sheet lines that hold debt and finance leases, net of issuance costs and discounts; operating lease liabilities, fuel financing and pension are not included | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Cash & Equivalents | 6,972 | 5,816 | 8,253 | USD millions | Calculated C03: cash plus short-term investments; restricted cash and short-term investments are excluded | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 5.63 | 4.10 | x | Calculated on reported EBITDA derived from the statements; annual figures; American's own perimeter; debt at balance-sheet carrying value including finance leases |
| FY2025 / 2025-12-31 | 7.44 | 5.73 | x | Calculated on reported EBITDA derived from the statements; annual figures; American's own perimeter; debt at balance-sheet carrying value including finance leases |
| 2026-09-30 | 8.87 | 6.04 | x | Calculated on reported EBITDA derived from the statements; Q3 2026 uses trailing twelve months to 2026-09-30; American's own perimeter; debt at balance-sheet carrying value including finance leases |

The EBITDA behind these ratios is derived from the face of the income statement and excludes depreciation booked in other lines, so the ratios are higher than they would be on total depreciation.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2.53 | x | Reported EBITDA derived from the statements over interest paid, net, from the cash flow supplemental information |
| FY2025 / 2025-12-31 | 2.19 | x | Reported EBITDA derived from the statements over interest paid, net, from the cash flow supplemental information |
| 2026-09-30 | 2.06 | x | Reported EBITDA derived from the statements over interest paid, net, from the cash flow supplemental information; trailing twelve months to 2026-09-30 |

Cash interest paid is net of amounts the issuer capitalises, which the filings do not state, so cover may be understated or overstated by that amount.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 6,972 | 3,289 | US$m | Cash is unrestricted cash plus short-term investments; undrawn facilities are the issuer's printed availability under revolving credit and other facilities |
| FY2025 / 2025-12-31 | 5,816 | 3,397 | US$m | Cash is unrestricted cash plus short-term investments; undrawn facilities are the issuer's printed availability under revolving credit and other facilities; no borrowings outstanding under the three revolving facilities at 2025-12-31, and no letters of credit under the 2013 and 2014 facilities |
| 2026-09-30 | 8,253 | 3,510 | US$m | Cash is unrestricted cash plus short-term investments; undrawn facilities are the issuer's printed availability under revolving credit and other facilities; no amounts drawn |

Undrawn facilities are shown as the issuer prints them; letters of credit outstanding are not stated for 2026-09-30 or 2024-12-31, and the figure includes a cargo receivables facility that expires in December 2026.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 631 | US$m | Contractual principal due, Remainder of 2026 (October to December), for American at 2026-09-30; the first row is the remaining three months |
| FY2027 | 3,550 | US$m | Contractual principal due, 2027, for American at 2026-09-30; the first row is the remaining three months |
| FY2028 | 7,861 | US$m | Contractual principal due, 2028, for American at 2026-09-30; the first row is the remaining three months |
| FY2029 | 3,884 | US$m | Contractual principal due, 2029, for American at 2026-09-30; the first row is the remaining three months |
| FY2030 | 972 | US$m | Contractual principal due, 2030, for American at 2026-09-30; the first row is the remaining three months |
| FY2031 | 8,677 | US$m | Contractual principal due, 2031 and thereafter, for American at 2026-09-30; the last row is every year from 2031 |

The ladder is principal only, so it excludes interest, finance lease payments and operating lease payments, and the last row combines all years from 2031.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 52,784 | 4,996 | US$m | Reported EBITDA derived from the statements; the issuer states no adjusted EBITDA, so this column is the reported identity |
| FY2024 / 2024-12-31 | 54,204 | 4,573 | US$m | Reported EBITDA derived from the statements; reported identity |
| FY2025 / 2025-12-31 | 54,626 | 3,395 | US$m | Reported EBITDA derived from the statements; reported identity |
| 2026-09-30 | 60,977 | 2,916 | US$m | Trailing twelve months to 2026-09-30, twelve months like the annual rows; reported identity |

Every row spans twelve months, and the EBITDA is derived rather than printed by the issuer.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: no source ranks every facility against the others | Not supplied: the filings state a first lien for some secured facilities on separate collateral pools but no single legal ranking | Not supplied: see ranking | Not supplied: not stated by rank | Not supplied: not stated by rank | US$m | Instrument amounts and the first-lien statements that exist are in the debt instruments register; no ranked stack is stated |

No qualification.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA | Not supplied: the issuer states no adjusted EBITDA, so no bridge exists | US$m | First row is reported EBITDA (derived); no adjusted measure is stated by American, so no step can be stated without a plug |
| Adjusted EBITDA | Not supplied: the issuer states no adjusted EBITDA | US$m | Last row is the adjusted measure the method names; not stated |

No qualification.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | Trailing twelve months to 2026-09-30 | Unit | Basis |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue | 52,784 | 54,204 | 54,626 | 60,977 | US$m | Reported; trailing figure calculated C06 |
| EBITDA (Reported, derived) | 4,996 | 4,573 | 3,395 | 2,916 | US$m | Calculated C05; trailing C07 |
| Operating income | 3,069 | 2,654 | 1,511 | 1,004 | US$m | Reported; trailing C11 |
| Net cash from operating activities | 3,706 | 3,409 | 1,930 | 4,141 | US$m | Reported; trailing C09; includes advances to the parent |
| Capital expenditures and aircraft purchase deposits | 2,542 | 2,624 | 3,716 | 4,273 | US$m | Reported outflow shown positive; trailing C10 |
| Free cash flow | 1,164 | 785 | -1,786 | -132 | US$m | Calculated C22 |
| Total Debt | Not supplied: no balance sheet at 2023-12-31 in the sources | 25,736 | 25,259 | 25,876 | US$m | Calculated C02; Q3 2026 column is the balance at 2026-09-30 |
| Cash & Equivalents | Not supplied: no balance sheet at 2023-12-31 in the sources | 6,972 | 5,816 | 8,253 | US$m | Calculated C03 |
| Net debt | Not supplied: no balance sheet at 2023-12-31 in the sources | 18,764 | 19,443 | 17,623 | US$m | Calculated C04 |
| Total debt / EBITDA | Not supplied: no balance sheet at 2023-12-31 in the sources | 5.63 | 7.44 | 8.87 | x | Calculated C12 |
| Net debt / EBITDA | Not supplied: no balance sheet at 2023-12-31 in the sources | 4.10 | 5.73 | 6.04 | x | Calculated C13 |
| EBITDA / cash interest | 2.43 | 2.53 | 2.19 | 2.06 | x | Calculated C14; FY2023 calculated C38 with interest paid of 2,058 |
| Total available liquidity | Not supplied: no balance sheet at 2023-12-31 in the sources | 10,261 | 9,213 | 11,763 | US$m | Calculated C15; ties to the issuer's printed totals |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 25,736 | 6,972 | 18,764 | US$m | Reported balance at 2024-12-31. Gross debt is the carrying value of current maturities and long-term debt including finance leases (finance lease liabilities 663), net of unamortized costs of 300; contractual principal 25,372; fuel financing 74 and operating lease liabilities 7,008 are outside gross debt; the components add to 25,735, one below the balance-sheet total |
| FY2025 / 2025-12-31 | 25,259 | 5,816 | 19,443 | US$m | Reported balance at 2025-12-31. Gross debt is the carrying value of current maturities and long-term debt including finance leases (finance lease liabilities 724), net of unamortized costs of 313; contractual principal 24,848; fuel financing 914 and operating lease liabilities 6,908 are outside gross debt |
| 2026-09-30 | 25,876 | 8,253 | 17,623 | US$m | Reported balance at 2026-09-30. Gross debt is the carrying value of current maturities and long-term debt including finance leases (derived 645), net of unamortized costs of 344; contractual principal 25,575; fuel financing 933 and operating lease liabilities 6,592 are outside gross debt; cash is cash plus short-term investments, excluding restricted cash and short-term investments of 555 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 25,575 | 301 | 25,876 | US$m | Principal is the sum of the maturity ladder. Reconciling items are unamortized debt discount, premium and issuance costs of -344 (printed) and finance lease liabilities and other debt carried in the balance-sheet debt lines of 645 (derived as Total Debt less the debt note's carrying value of 25,231, because the quarterly report prints no finance lease balance; at the year-end the same difference equalled the printed finance lease liabilities); calculations C19 and C18 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | Read the three 2026 quarterly reports, the 2025 annual report and the three presentations for events after 2026-09-30 up to the cutoff; the only item is the October 2026 exercise of purchase options for five aircraft, a commitment that does not change net debt until delivery and payment |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 15 |
| Calculated | 18 |
| Assumption-Based | 1 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 8 |
| Fields present | 23 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 11 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_aal-20251231.htm.jsonl | Annual report, combined filing | FY2023 to FY2025 statements of operations and cash flows; balance sheets at 2024-12-31 and 2025-12-31 | USD | millions | American (Item 8B) and AAG (Item 8A) separately | US GAAP | Tier 1, audited | American's statements, debt, lease and related-party notes, liquidity table | Part III omitted; exhibits listed, not supplied; extract splits some tables across chunks |
| 10-Q_2026-03-31_aal-20260331.htm.jsonl | Quarterly report, combined filing | Quarter ended 2026-03-31 | USD | millions | American (Item 1B) and AAG (Item 1A) separately | US GAAP | Tier 2b, unaudited; no auditor report in the document | Scanned for events only | No figure taken |
| 10-Q_2026-06-30_aal-20260630.htm.jsonl | Quarterly report, combined filing | Quarter and six months ended 2026-06-30 | USD | millions | American (Item 1B) and AAG (Item 1A) separately | US GAAP | Tier 2b, unaudited; no auditor report in the document | Scanned for events only | No figure taken |
| 10-Q_2026-09-30_aal-20260930.htm.jsonl | Quarterly report, combined filing | Quarter and nine months ended 2026-09-30; balance sheets at 2026-09-30 and 2025-12-31 | USD | millions | American (Item 1B) and AAG (Item 1A) separately | US GAAP | Tier 2b, unaudited; no auditor report in the document | American's interim statements, debt note, ladder, liquidity, related parties | Year-to-date cash flows only; operating cash flow printed as one total |
| EX-99.2_2026-04-23_earningspresentation.htm.jsonl | Earnings presentation | Quarter ended 2026-03-31 | USD | millions | AAG only | US GAAP with management non-GAAP measures | Tier 2b, unaudited issuer presentation | Group adjusted EBITDAR for the conflict register | Group perimeter; management definitions |
| EX-99.2_2026-07-23_earningspresentation.htm.jsonl | Earnings presentation | Quarter ended 2026-06-30 | USD | millions | AAG only | US GAAP with management non-GAAP measures | Tier 2b, unaudited issuer presentation | Scanned | No figure taken |
| EX-99.2_2026-10-22_earningspresentation.htm.jsonl | Earnings presentation | Quarter ended 2026-09-30 | USD | millions | AAG only | US GAAP with management non-GAAP measures | Tier 2b, unaudited issuer presentation | Group total debt and net debt for the conflict register | Group perimeter; management definitions |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| American Airlines, Inc. | Issuer; borrower under the credit facilities; issuer of the senior secured notes and EETCs | 31 December | USD | millions | American and its consolidated subsidiaries; AAG's wholly-owned regional airlines are outside it | US GAAP | FY2023, FY2024, FY2025; Q1, Q2 and Q3 2026 with 2025 comparatives (year-to-date for cash flows) |
| American Airlines Group Inc. | Parent; guarantor of the credit facilities and secured notes on a senior unsecured basis; context only | 31 December | USD | millions | AAG and all its subsidiaries, regional airlines included | US GAAP | Same periods |
| AAdvantage Loyalty IP Ltd. | Co-issuer of the AAdvantage notes and term loans; Cayman Islands exempted company, indirect wholly-owned subsidiary of American | Not supplied: no separate statements | Not supplied: no separate statements | Not supplied: no separate statements | Consolidated into American | Not supplied: no separate statements | Not supplied: no separate statements |
| SPV Guarantors of the AAdvantage financing | Wholly-owned subsidiaries guaranteeing the AAdvantage notes and loans | Not supplied: no separate statements | Not supplied: no separate statements | Not supplied: no separate statements | Consolidated into American | Not supplied: no separate statements | Not supplied: no separate statements |
| AAG's wholly-owned regional airlines | Related parties supplying capacity to American under capacity purchase agreements | Not supplied: no separate statements | Not supplied: no separate statements | Not supplied: no separate statements | Outside American's consolidation; a net payable of 2,082 at 2026-09-30 | Not supplied: no separate statements | Not supplied: no separate statements |

### Subsequent events scan

| Event | Date | Balance sheet it follows | Treatment | Source |
| --- | --- | --- | --- | --- |
| Irrevocable notice of redemption of the 8.50% senior secured notes | Not supplied: the source states the first quarter of 2026 only | 2025-12-31 | Excluded from FY2025 figures; the notes show no balance at 2026-09-30 and were prepaid in full in 2026 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 30 |
| Fourth amendment to the AAdvantage term loan agreement: the 2025 AAdvantage Term Loan Facility was replaced with new term loans of the same principal at a lower margin | 2026-02-12 | 2025-12-31 | No change in principal; excluded from FY2025 figures | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 33 |
| Exercise of purchase options for five Airbus A320 Family aircraft | Not supplied: the source states October 2026 only | 2026-09-30 | A commitment, in the commitments table; no effect on net debt until paid; not blended into period figures | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 65 |
| Opposition filed to a class certification motion in the Northeast Alliance private-party antitrust case | Not supplied: the source states October 2026 only | 2026-09-30 | Legal event with no amount stated; not blended into period figures | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 42 |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents set to cash plus short-term investments | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Definition | Cash 1,094; 936; 795 | 8,253; 5,816; 6,972 | The issuer's liquidity table counts short-term investments as liquid; restricted cash and short-term investments of 555, 735 and 732 are excluded | Q3 2026, FY2025, FY2024 |
| EBITDA derived as operating income plus the depreciation and amortization line | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 | Derivation | Operating income and depreciation printed separately; no EBITDA printed | 4,996; 4,573; 3,395; 2,456; 1,977; 640; 605 | The issuer prints no EBITDA for American; the face-of-statement depreciation line is the only line available for every period | FY2023, FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| Total Liabilities calculated | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Derivation | Total current and total noncurrent liabilities printed; no total | 60,521; 61,219; 64,923 | Sum of the two printed totals | FY2024, FY2025, Q3 2026 |
| Trailing twelve months built as full year plus nine months less prior nine months | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 | Period construction | FY2025 EBITDA 3,395; 9M 2026 1,977; 9M 2025 2,456 | 2,916 | Same construction for revenue, cash interest, operating cash flow, capital expenditure and operating income | Q3 2026 |
| No currency or scale conversion | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 | None | USD millions as printed | USD millions | Every statement is in the issuer's own currency and scale | All |
| Related-party receivables left in operating assets and not netted against debt | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 40 | Perimeter decision | Net receivable 10,430 | 10,430, not deducted | The balance is a claim on the parent, not cash | Q3 2026, FY2025, FY2024 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2013 Term Loan Facility | Term loan | Not supplied: the note prints principal only | 960 | 960 | Not applicable | Secured (listed under secured debt) | First lien on the collateral shared pari passu with the 7.25% senior secured notes (annual report, as of 2025-12-31) | USD | 960 | Not applicable | Variable, 5.94% at 2026-09-30; margin 2.25% elected at 2025-12-31 | Variable | SOFR | 225 | 0 | 2028-02 | Not supplied: 1.00% a year of the amount issued, no amount printed | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 30; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 220; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 224 |
| 2014 Term Loan Facility | Term loan | Not supplied: the note prints principal only | 1,850 | 1,850 | Not applicable | Secured (listed under secured debt) | Not supplied: no source states its legal rank | USD | 1,850 | Not applicable | Variable, 6.76% at 2026-09-30; SOFR plus 3.00% | Variable | SOFR, three months | 300 | 0 | 2033-05 | Not supplied: 1.00% a year of the amount outstanding from May 2027, no amount printed | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 30; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 32 |
| 2023 Term Loan Facility | Term loan | Not supplied: the note prints principal only | 1,078 | 1,078 | Not applicable | Secured (listed under secured debt) | First lien on the collateral shared pari passu with the 8.50% senior secured notes (annual report, as of 2025-12-31) | USD | 1,078 | Not applicable | Variable, 6.09% at 2026-09-30; margin 2.25% elected at 2025-12-31 | Variable | SOFR | 225 | 0 | 2029-06 | Not supplied: 1.00% a year of the amount issued, no amount printed | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 30; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 222; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 225 |
| 7.25% senior secured notes | Senior secured notes | Not supplied: the note prints principal only | 750 | 750 | Not applicable | Secured (listed under secured debt) | First lien, pari passu with the 2013 Credit Facilities (annual report, as of 2025-12-31) | USD | 750 | Not applicable | 7.25% fixed | Fixed | Not applicable | Not applicable | Not applicable | 2028-02 | 0 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 30; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 224 |
| 5.75% senior secured notes (AAdvantage Notes) | Senior secured notes | Not supplied: the note prints principal only | 2,750 | 2,750 | Not applicable | Secured (AAdvantage collateral) | First-priority security interest in the AAdvantage collateral (annual report) | USD | 2,750 | Not applicable | 5.75% fixed | Fixed | Not applicable | Not applicable | Not applicable | 2029-04 | 1,000 (quarterly installments of 250 from 2026-07-20) | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 227 |
| 2021 AAdvantage Term Loan Facility | Term loan | Not supplied: the note prints principal only | 2,247 | 2,247 | Not applicable | Secured (AAdvantage collateral) | First-priority security interest in the AAdvantage collateral (annual report) | USD | 2,247 | Not applicable | Variable, 5.98% at 2026-09-30; margin 2.25% elected at 2025-12-31 | Variable | SOFR | 225 | 0 | 2028-04 | About 24 (quarterly installments of about 6) | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 226; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 228 |
| 2025 AAdvantage Term Loan Facility | Term loan | Not supplied: the note prints principal only | 988 | 988 | Not applicable | Secured (AAdvantage collateral) | First-priority security interest in the AAdvantage collateral (annual report) | USD | 988 | Not applicable | Variable, 6.48% at 2026-09-30; SOFR plus 2.75% | Variable | SOFR, three months | 275 | 0 | 2032-05 | About 12 (quarterly installments of about 3) | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 33; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 228 |
| Enhanced equipment trust certificates (EETCs) | Pass-through certificates secured by aircraft | Not supplied: the note prints principal only | 9,332 | 9,332 | Not applicable | Secured (listed under secured debt) | Not supplied: no source states a single legal rank | USD | 9,332 | Not applicable | Fixed, 2.88% to 7.15%, averaging 4.54% | Fixed | Not applicable | Not applicable | Not applicable | 2027 to 2039 | Not supplied: scheduled amounts not printed | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 |
| Equipment loans and other notes payable | Equipment loans and notes | Not supplied: the note prints principal only | 4,926 | 4,926 | Not applicable | Secured (listed under secured debt) | Not supplied: no source states a single legal rank | USD | 4,926 | Not applicable | Fixed and variable, 2.55% to 6.76%, averaging 5.65% | Fixed and variable | Not supplied: reference rate not stated for the pool | Not supplied: not stated for the pool | Not supplied: not stated for the pool | 2027 to 2038 | Not supplied: scheduled amounts not printed | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 |
| Special facility revenue bonds | Municipal special facility bonds | Not supplied: the note prints principal only | 694 | 694 | Not applicable | Secured (listed under secured debt) | Not supplied: no source states its legal rank | USD | 694 | Not applicable | Fixed, 3.00% to 5.38% | Fixed | Not applicable | Not applicable | Not applicable | 2031 to 2036 | Not supplied: scheduled amounts not printed | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 |
| 2013 Revolving Facility | Revolving credit facility | Not applicable | 0 | 0 | 363 | Secured (collateral shared with the 2013 Term Loan Facility) | Not supplied: no source states its legal rank | USD | 0 | Not applicable | Margin by AAG's public rating: SOFR plus 3.00%, 3.25% or 3.50% (annual report) | Variable | SOFR | 300 to 350 | 0 | 2031-03 | Not applicable | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 32; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 220 |
| 2014 Revolving Facility | Revolving credit facility | Not applicable | 0 | 0 | 1,296 | Secured (listed under secured debt) | Not supplied: no source states its legal rank | USD | 0 | Not applicable | Margin by AAG's public rating: SOFR plus 3.00%, 3.25% or 3.50% (annual report) | Variable | SOFR | 300 to 350 | 0 | 2031-03 | Not applicable | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 32; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 220 |
| 2023 Revolving Facility | Revolving credit facility | Not applicable | 0 | 0 | 1,451 | Secured (listed under secured debt) | Not supplied: no source states its legal rank | USD | 0 | Not applicable | Margin by AAG's public rating: SOFR plus 3.00%, 3.25% or 3.50% (annual report) | Variable | SOFR | 300 to 350 | 0 | 2031-03 | Not applicable | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 33; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 222 |
| Other facilities: revolving credit facility of up to 350 and cargo receivables facility of 50 | Revolving credit and receivables facilities | Not applicable | 0 | 0 | 400 | Secured (listed under secured debt) | Not supplied: no source states its legal rank | USD | 0 | Not applicable | Not supplied: pricing not printed in the sources read | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Revolver 2028-03; cargo facility 2026-12 | Not applicable | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 |
| Financing cost adjustment | Unamortized debt discount, premium and issuance costs | -344 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -344 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 |
| Finance lease liabilities and other debt carried in the balance-sheet debt lines (derived) | Finance leases | 645 | Not applicable | Not applicable | Not applicable | Not supplied: not stated at 2026-09-30 | Not supplied: not stated | USD | 645 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; calculation C18 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total operating revenues | LTM to 2026-09-30 | USD 54,626m | USD 46,979m | USD 40,628m | USD 60,977m | Calculated | 10-K_2025-12-31_aal-20251231.htm.jsonl; 10-Q_2026-09-30_aal-20260930.htm.jsonl | Prior-year stub is nine months 2025 as printed in the 2026 quarterly report; calculation C06 |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 3,395m | USD 1,977m | USD 2,456m | USD 2,916m | Calculated | 10-K_2025-12-31_aal-20251231.htm.jsonl; 10-Q_2026-09-30_aal-20260930.htm.jsonl | Derived EBITDA on the face-of-statement depreciation basis for all three components; calculation C07 |
| Interest paid, net | LTM to 2026-09-30 | USD 1,551m | USD 1,044m | USD 1,179m | USD 1,416m | Calculated | 10-K_2025-12-31_aal-20251231.htm.jsonl; 10-Q_2026-09-30_aal-20260930.htm.jsonl | Net of amounts capitalised, not stated; calculation C08 |
| Net cash from operating activities | LTM to 2026-09-30 | USD 1,930m | USD 4,440m | USD 2,229m | USD 4,141m | Calculated | 10-K_2025-12-31_aal-20251231.htm.jsonl; 10-Q_2026-09-30_aal-20260930.htm.jsonl | Includes advances to the parent; calculation C09 |
| Capital expenditures and aircraft purchase deposits, outflow shown positive | LTM to 2026-09-30 | USD 3,716m | USD 2,660m | USD 2,103m | USD 4,273m | Calculated | 10-K_2025-12-31_aal-20251231.htm.jsonl; 10-Q_2026-09-30_aal-20260930.htm.jsonl | Before sale-leaseback proceeds; calculation C10 |
| Operating income | LTM to 2026-09-30 | USD 1,511m | USD 535m | USD 1,042m | USD 1,004m | Calculated | 10-K_2025-12-31_aal-20251231.htm.jsonl; 10-Q_2026-09-30_aal-20260930.htm.jsonl | Reported operating income including special items; calculation C11 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 25,736 | Net debt data gross debt, FY2024 / 2024-12-31 | 4,573 | T4.4 EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 5.63 | Calculated | Tier 1 | Derived EBITDA; carrying value of debt including finance leases |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 18,764 | Net debt data net debt, FY2024 / 2024-12-31 | 4,573 | T4.4 EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 4.10 | Calculated | Tier 1 | Derived EBITDA; carrying value of debt including finance leases; cash includes short-term investments |
| EBITDA / cash interest | EBITDA (Reported) / interest paid, net | 4,573 | T4.4 EBITDA (Reported), FY2024 | 1,806 | T4.5 Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 2.53 | Calculated | Tier 1 | Derived EBITDA; interest paid net of amounts capitalised, not stated |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 25,259 | Net debt data gross debt, FY2025 / 2025-12-31 | 3,395 | T4.4 EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 7.44 | Calculated | Tier 1 | Derived EBITDA; carrying value of debt including finance leases |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 19,443 | Net debt data net debt, FY2025 / 2025-12-31 | 3,395 | T4.4 EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 5.73 | Calculated | Tier 1 | Derived EBITDA; carrying value of debt including finance leases; cash includes short-term investments |
| EBITDA / cash interest | EBITDA (Reported) / interest paid, net | 3,395 | T4.4 EBITDA (Reported), FY2025 | 1,551 | T4.5 Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 2.19 | Calculated | Tier 1 | Derived EBITDA; interest paid net of amounts capitalised, not stated |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 25,876 | Net debt data gross debt, 2026-09-30 | 2,916 | T4.8 LTM EBITDA (Reported) | 2026-09-30 | USD | US$m | 8.87 | Calculated | Tier 2b | Derived EBITDA; carrying value of debt including finance leases; trailing twelve months |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 17,623 | Net debt data net debt, 2026-09-30 | 2,916 | T4.8 LTM EBITDA (Reported) | 2026-09-30 | USD | US$m | 6.04 | Calculated | Tier 2b | Derived EBITDA; carrying value of debt including finance leases; trailing twelve months; cash includes short-term investments |
| EBITDA / cash interest | EBITDA (Reported) / interest paid, net | 2,916 | T4.8 LTM EBITDA (Reported) | 1,416 | T4.8 LTM interest paid, net | 2026-09-30 | USD | US$m | 2.06 | Calculated | Tier 2b | Derived EBITDA; interest paid net of amounts capitalised, not stated; trailing twelve months |
| EBITDA margin | EBITDA (Reported) / total operating revenues x 100 | 3,395 | T4.4 EBITDA (Reported), FY2025 | 54,626 | T4.4 Total operating revenues, FY2025 | FY2025 | USD | % | 6.21 | Calculated | Tier 1 | Derived EBITDA |
| EBITDA margin | EBITDA (Reported) / total operating revenues x 100 | 2,916 | T4.8 LTM EBITDA (Reported) | 60,977 | T4.8 LTM total operating revenues | LTM to 2026-09-30 | USD | % | 4.78 | Calculated | Tier 2b | Derived EBITDA; trailing twelve months |
| Revenue growth | Total operating revenues 9M 2026 / 9M 2025 - 1 | 46,979 | T4.4 Total operating revenues, 9M 2026 | 40,628 | T4.4 Total operating revenues, 9M 2025 | 9M 2026 against 9M 2025 | USD | % | 15.63 | Calculated | Tier 2b | Change in percent |
| Liquidity / total debt | (Cash & Equivalents + undrawn committed facilities) / Total Debt | 11,763 | Chart data: liquidity, 2026-09-30 | 25,876 | Net debt data gross debt, 2026-09-30 | 2026-09-30 | USD | x | 0.45 | Calculated | Tier 2b | Undrawn facilities as printed |
| Operating cash flow / total debt | Net cash from operating activities (LTM) / Total Debt | 4,141 | T4.8 LTM net cash from operating activities | 25,876 | Net debt data gross debt, 2026-09-30 | LTM to 2026-09-30 | USD | x | 0.16 | Calculated | Tier 2b | Includes advances to the parent |
| Capital expenditures / revenue | Capital expenditures and aircraft purchase deposits (LTM) / total operating revenues (LTM) | 4,273 | T4.8 LTM capital expenditures | 60,977 | T4.8 LTM total operating revenues | LTM to 2026-09-30 | USD | x | 0.07 | Calculated | Tier 2b | Before sale-leaseback proceeds |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue growth, percent | Not supplied: no FY2022 revenue in the sources | 2.69 | 0.78 | Not supplied: no 9M 2024 revenue in the sources | 15.63 | Slowing in FY2025, then rising in 2026 | Calculated C29; the 2026 gain is large because fuel and capacity rose together |
| Margin | Operating margin, percent | 5.81 | 4.90 | 2.77 | 2.56 | 1.14 | Falling | Calculated C25; after special items |
| Margin | EBITDA margin (derived), percent | 9.46 | 8.44 | 6.21 | 6.05 | 4.21 | Falling | Calculated C26; derived EBITDA |
| Margin | Net margin, percent | 2.25 | 2.33 | 1.03 | 0.85 | -0.49 | Falling, negative in 9M 2026 | Calculated C27 |
| Cost | Fuel share of revenue, percent | 23.22 | 21.06 | 19.62 | 19.73 | 26.49 | Down to FY2025, then sharply up in 2026 | Calculated C28 |
| Cash flow | Free cash flow, USD millions | 1,164 | 785 | -1,786 | 126 | 1,780 | Falling to FY2025, then rising | Calculated C22; timing and related-party flows distort it |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Total Debt | Balance-sheet carrying value of every debt line; finance leases the issuer carries inside its debt lines stay in; principal kept separately | Debt note total principal 25,575 less unamortized costs 344 gives 25,231; the balance sheet line for debt and finance leases totals 25,876 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Q3 2026 and each year-end | Medium: difference of USD 301 million between principal and carrying value | Fundamental credit | Total Debt of 25,876 is used; principal 25,575 is shown beside it in the reconciliation |
| Cash & Equivalents | Cash and cash equivalents; the treatment of short-term investments and restricted cash is a definition choice | Cash 1,094 is printed apart from short-term investments 7,159; management's group measure is cash and short-term investments of 8,287 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 10 | Q3 2026, FY2025, FY2024 | High: net debt is lower by USD 7,159 million than on cash alone | Fundamental credit | Cash plus short-term investments is used; restricted cash and short-term investments of 555 are excluded |
| EBITDA (Reported) | The issuer's unadjusted EBITDA; derived from components when not printed | American prints no EBITDA; the group adjusted EBITDAR for Q1 2026 is 850 after adding aircraft rent 311, depreciation 566 and operating special items 14 to an operating loss of 41; American's cash flow depreciation is 2,177 against 1,884 on the face for FY2025 | EX-99.2_2026-04-23_earningspresentation.htm.jsonl, page 11; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202 | All periods | Medium: FY2025 EBITDA 3,395 here against 3,688 on cash flow depreciation, USD 293 million | Fundamental credit; Downside | Face-of-statement depreciation is used for every period; the alternative is shown as a calculation |
| Special items | Reported EBITDA is after special items; adjusted EBITDA only when the issuer states it | Management excludes net special items in group non-GAAP measures, for example group operating income of 132 against 115 reported for Q3 2026 | EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 8; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201 | FY2025: special items 159; 9M 2026: 29 | Low: small against EBITDA in 2026 | Earnings quality | Not added back; no adjusted EBITDA is stated for American |
| Perimeter of debt and net debt | The issuer's own statements; the parent's figures are context only | Group debt and finance leases 29,635, total debt including operating leases and pension 36,366 and net debt 28,079 against American's own Total Debt of 25,876 and net debt of 17,623 | EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 10; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Q3 2026 | High: group net debt is USD 10,456 million higher | Fundamental credit; Committee decision | American's own perimeter is used; the group figures are labelled context |
| Net cash from operating activities | As reported on the issuer's own cash flow statement | American FY2025 operating cash flow 1,930 includes an increase in receivables from related parties of 1,701; the group figure is 3,099 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 143 | FY2023 to FY2025 | Medium: group operating cash flow exceeds American's by USD 1,169 million in FY2025 | Fundamental credit | American's figure is used and the related-party flow is flagged; net receivable from the parent 12,512 less 2,082 payable to regional subsidiaries is 10,430, outside net debt |
| Operating leases and pension in net debt | Lease liabilities presented on their own balance-sheet lines are not added to Total Debt | Management's group total debt includes operating lease liabilities of 6,639 and pension obligations of 92; American carries operating lease liabilities of 6,592 and pension and postretirement benefits of 1,098 on separate lines | EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 10; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Q3 2026 | Medium: 6,592 outside Total Debt | Fundamental credit; Downside | Not added; shown in the Net debt basis and available to later modules |
| Covenant liquidity measure | Cash and equivalents plus undrawn committed facilities | A significant portion of debt agreements require at least USD 2.0 billion of unrestricted cash and cash equivalents plus amounts available under revolvers | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 61 | Q3 2026 | Medium: definition differs from the liquidity measure used here | Legal & covenants; Covenant capacity | No covenant headroom is inferred; the stated minimum is recorded only |
| Fuel financing | Not debt where the issuer presents it on its own line as supplier financing | Fuel financing of 933 is a separate current liability, not in debt and finance leases | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Q3 2026, FY2025 | Low to Medium: 933 sits outside Total Debt | Fundamental credit | Kept outside Total Debt and flagged as non-debt funding float |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| American's reported statements: income, cash flow and balance sheet | Ready with Limitations | Interim cash-flow components and quarterly flows are not printed; no balance sheet at 2023-12-31 | None for the credit snapshot |
| Leverage and cover on reported EBITDA | Ready with Limitations | EBITDA is derived on the face-of-statement depreciation basis, which overstates leverage and understates cover | Obtain total depreciation by interim period |
| Liquidity assessment | Ready | A small cargo facility expires in December 2026; letters of credit at 2026-09-30 are not stated | None |
| Debt structure and ranking | Not Ready | No legal ranking across facilities and no executed documents | Supply the executed debt documents |
| Adjusted EBITDA and bridge | Not Ready | The issuer states no adjusted EBITDA for American | Obtain management's adjusted EBITDA by period |
| Cash-flow quality and free cash flow | Ready with Limitations | Intercompany advances and seasonal liabilities distort it; 2026 interim detail is not printed | Read with the related-party note |
| Parent-consolidated leverage as context | Ready with Limitations | Management's group measures include leases and pension and are not American's | Label as parent context |

## Calculations

| ID | Calculation | Inputs | Result | Unit |
| --- | --- | --- | --- | --- |
| C01 | Total Liabilities = total current liabilities + total noncurrent liabilities | FY2024 22,902 + 37,619; FY2025 24,037 + 37,182; Q3 2026 27,538 + 37,385 | FY2024 60,521; FY2025 61,219; Q3 2026 64,923 | US$m |
| C02 | Total Debt = current maturities of long-term debt and finance leases + long-term debt and finance leases, net of current maturities (balance-sheet carrying value) | FY2024 4,326 + 21,410; FY2025 3,750 + 21,509; Q3 2026 3,689 + 22,187 | FY2024 25,736; FY2025 25,259; Q3 2026 25,876 | US$m |
| C03 | Cash & Equivalents = cash + short-term investments (restricted cash and short-term investments excluded) | FY2024 795 + 6,177; FY2025 936 + 4,880; Q3 2026 1,094 + 7,159 | FY2024 6,972; FY2025 5,816; Q3 2026 8,253 | US$m |
| C04 | Net debt = Total Debt - Cash & Equivalents | FY2024 25,736 - 6,972; FY2025 25,259 - 5,816; Q3 2026 25,876 - 8,253 | FY2024 18,764; FY2025 19,443; Q3 2026 17,623 | US$m |
| C05 | EBITDA (Reported) = operating income + depreciation and amortization line of the statement of operations (the issuer prints no EBITDA) | FY2023 3,069 + 1,927; FY2024 2,654 + 1,919; FY2025 1,511 + 1,884; 9M 2025 1,042 + 1,414; 9M 2026 535 + 1,442; Q3 2025 167 + 473; Q3 2026 114 + 491 | FY2023 4,996; FY2024 4,573; FY2025 3,395; 9M 2025 2,456; 9M 2026 1,977; Q3 2025 640; Q3 2026 605 | US$m |
| C06 | LTM revenue to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 54,626 + 46,979 - 40,628 | 60,977 | US$m |
| C07 | LTM EBITDA (Reported) to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 3,395 + 1,977 - 2,456 | 2,916 | US$m |
| C08 | LTM cash interest paid, net, to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 1,551 + 1,044 - 1,179 | 1,416 | US$m |
| C09 | LTM net cash from operating activities to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 1,930 + 4,440 - 2,229 | 4,141 | US$m |
| C10 | LTM capital expenditures and aircraft purchase deposits to 2026-09-30 (outflow shown positive) = FY2025 + 9M 2026 - 9M 2025 | 3,716 + 2,660 - 2,103 | 4,273 | US$m |
| C11 | LTM operating income to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 1,511 + 535 - 1,042 | 1,004 | US$m |
| C12 | Total debt / EBITDA = Total Debt / EBITDA (Reported); the Q3 2026 row uses LTM EBITDA | FY2024 25,736 / 4,573; FY2025 25,259 / 3,395; Q3 2026 25,876 / 2,916 | FY2024 5.63; FY2025 7.44; Q3 2026 8.87 | x |
| C13 | Net debt / EBITDA = Net debt / EBITDA (Reported); the Q3 2026 row uses LTM EBITDA | FY2024 18,764 / 4,573; FY2025 19,443 / 3,395; Q3 2026 17,623 / 2,916 | FY2024 4.10; FY2025 5.73; Q3 2026 6.04 | x |
| C14 | EBITDA / cash interest = EBITDA (Reported) / cash interest paid, net; the Q3 2026 row uses LTM figures | FY2024 4,573 / 1,806; FY2025 3,395 / 1,551; Q3 2026 2,916 / 1,416 | FY2024 2.53; FY2025 2.19; Q3 2026 2.06 | x |
| C15 | Total available liquidity = Cash & Equivalents + undrawn committed facilities | FY2024 6,972 + 3,289; FY2025 5,816 + 3,397; Q3 2026 8,253 + 3,510 | FY2024 10,261; FY2025 9,213; Q3 2026 11,763 | US$m |
| C16 | Contractual principal = sum of the maturity ladder at 2026-09-30 | 631 + 3,550 + 7,861 + 3,884 + 972 + 8,677 | 25,575 | US$m |
| C17 | Debt note carrying value at 2026-09-30 = contractual principal - unamortized debt discount, premium and issuance costs | 25,575 - 344 | 25,231 | US$m |
| C18 | Finance lease liabilities and other debt in the balance-sheet debt lines (derived) = Total Debt - debt note carrying value; current part 3,689 - 3,580; long-term part 22,187 - 21,651 | 25,876 - 25,231; 109 + 536 | 645 | US$m |
| C19 | Reconciling items = unamortized discount, premium and issuance costs + finance lease liabilities and other debt in the debt lines | -344 + 645 | 301 | US$m |
| C20 | Contractual principal + reconciling items = carrying value (Total Debt) | 25,575 + 301 | 25,876 | US$m |
| C21 | Year-end check of the same bridge: principal - unamortized costs + finance lease liabilities printed in the lease note | FY2025 24,848 - 313 + 724 = 25,259; FY2024 25,372 - 300 + 663 = 25,735 against Total Debt 25,736 | FY2025 ties; FY2024 differs by 1 (rounding in the filing) | US$m |
| C22 | Free cash flow = net cash from operating activities - capital expenditures and aircraft purchase deposits (before sale-leaseback proceeds and short-term investment flows) | FY2023 3,706 - 2,542; FY2024 3,409 - 2,624; FY2025 1,930 - 3,716; 9M 2025 2,229 - 2,103; 9M 2026 4,440 - 2,660; LTM 4,141 - 4,273 | FY2023 1,164; FY2024 785; FY2025 -1,786; 9M 2025 126; 9M 2026 1,780; LTM -132 | US$m |
| C23 | EBITDA FY2025 using depreciation and amortization from the cash flow statement = operating income + 2,177; leverage on it | 1,511 + 2,177; 25,259 / 3,688; difference to reported-line EBITDA 3,688 - 3,395 | 3,688; 6.85x; 293 | US$m |
| C24 | Change in net debt and in LTM EBITDA from FY2025 to Q3 2026 | 17,623 - 19,443; 2,916 - 3,395 | -1,820; -479 | US$m |
| C25 | Operating margin = operating income / total operating revenues x 100 | FY2023 3,069 / 52,784; FY2024 2,654 / 54,204; FY2025 1,511 / 54,626; 9M 2025 1,042 / 40,628; 9M 2026 535 / 46,979 | FY2023 5.81; FY2024 4.90; FY2025 2.77; 9M 2025 2.56; 9M 2026 1.14 | % |
| C26 | EBITDA margin = EBITDA (Reported) / total operating revenues x 100 | FY2023 4,996 / 52,784; FY2024 4,573 / 54,204; FY2025 3,395 / 54,626; 9M 2025 2,456 / 40,628; 9M 2026 1,977 / 46,979 | FY2023 9.46; FY2024 8.44; FY2025 6.21; 9M 2025 6.05; 9M 2026 4.21 | % |
| C27 | Net margin = net income (loss) / total operating revenues x 100 | FY2023 1,188 / 52,784; FY2024 1,262 / 54,204; FY2025 564 / 54,626; 9M 2025 344 / 40,628; 9M 2026 -231 / 46,979 | FY2023 2.25; FY2024 2.33; FY2025 1.03; 9M 2025 0.85; 9M 2026 -0.49 | % |
| C28 | Fuel share of revenue = aircraft fuel and related taxes / total operating revenues x 100 | FY2023 12,257 / 52,784; FY2024 11,418 / 54,204; FY2025 10,718 / 54,626; 9M 2025 8,017 / 40,628; 9M 2026 12,444 / 46,979 | FY2023 23.22; FY2024 21.06; FY2025 19.62; 9M 2025 19.73; 9M 2026 26.49 | % |
| C29 | Revenue growth = total operating revenues / prior comparable period - 1, in percent | FY2024 54,204 / 52,784 - 1; FY2025 54,626 / 54,204 - 1; 9M 2026 46,979 / 40,628 - 1; Q3 2026 16,334 / 13,688 - 1 | FY2024 2.69; FY2025 0.78; 9M 2026 15.63; Q3 2026 19.33 | % |
| C30 | Change in EBITDA (Reported): 9M 2026 against 9M 2025 and Q3 2026 against Q3 2025 | 1,977 - 2,456; 605 - 640 | -479; -35 | US$m |
| C31 | Change in fuel expense, 9M 2026 against 9M 2025 | 12,444 - 8,017 | 4,427 | US$m |
| C32 | Customer-funded float = air traffic liability + loyalty program liability (current + noncurrent) + fuel financing, and its change from 2025-12-31 to 2026-09-30 | 2026-09-30: 9,414 + (4,446 + 7,068) + 933 = 21,861; 2025-12-31: 7,158 + (3,725 + 6,839) + 914 = 18,636; change 3,225; air traffic liability 9,414 - 7,158 = 2,256; loyalty 11,514 - 10,564 = 950; fuel financing 933 - 914 = 19 | 21,861; 18,636; 3,225; 2,256; 950; 19 | US$m |
| C33 | Liquidity / total debt = total available liquidity / Total Debt | 11,763 / 25,876 | 0.45 | x |
| C34 | Net cash from operating activities (LTM) / Total Debt | 4,141 / 25,876 | 0.16 | x |
| C35 | Capital expenditures (LTM) / revenue (LTM) | 4,273 / 60,977 | 0.07 | x |
| C36 | Operating lease liabilities (current + noncurrent), held outside Total Debt | 2026-09-30 1,025 + 5,567; 2025-12-31 1,048 + 5,860; 2024-12-31 1,082 + 5,926 | 6,592; 6,908; 7,008 | US$m |
| C37 | Interest expense, net less interest paid, net (accrual against cash) | FY2025 1,780 - 1,551; 9M 2026 1,231 - 1,044 | 229; 187 | US$m |
| C38 | EBITDA / cash interest FY2023 = EBITDA (Reported) / cash interest paid, net | 4,996 / 2,058 | 2.43 | x |
| C39 | Net receivable from related parties = receivable from AAG + payable to AAG's wholly-owned subsidiaries | 2026-09-30 12,512 - 2,082; 2025-12-31 11,938 - 2,042 | 10,430; 9,896 | US$m |

## Gaps

| Gap | Line item or metric and period | What it restricts | Severity | Action that would close it |
| --- | --- | --- | --- | --- |
| EBITDA (Reported) is not printed by the issuer; it is derived from operating income and the depreciation line on the face of the statement of operations, which omits depreciation booked in other lines (FY2025: 1,884 on the face against 2,177 in the cash flow statement). | EBITDA (Reported) in all periods; total debt, net debt and cover ratios built on it | Leverage is overstated and cover understated against total depreciation, by about 0.6 turns of leverage in FY2025; comparison with the issuer's own EBITDAR is not possible | Medium | Obtain total depreciation and amortization by interim period, or the issuer's own EBITDA, and recompute |
| The issuer states no adjusted EBITDA for American, and management's adjusted EBITDAR is reconciled only for the first quarter of 2026 at group level. | EBITDA (Adjusted); adjusted ratios; EBITDA bridge | Adjusted leverage, adjusted cover and the bridge cannot be shown; special items of 159 in FY2025 and 29 in the first nine months of 2026 are not added back | Low | Obtain management's adjusted EBITDA for American by period |
| The quarterly statements print operating cash flow as one total and omit the working-capital lines, and print no fuel financing line, for the nine-month periods. | Cash flow statement: operating cash flow components and net proceeds from fuel financing, for nine months 2025 and 2026; fuel financing for FY2023, where the statement prints a dash | Working-capital and related-party effects in 2026 operating cash flow cannot be separated by line | Medium | Use the 2026 annual report when filed, or the narrative in the quarterly report as a qualitative guide |
| Three-month cash flow statements are not printed; the quarterly reports give year-to-date totals only. | Cash flow lines, Q3 2025 and Q3 2026 | Third-quarter cash flows are differences of two filings and are not constructed here | Low | Construct Q3 flows as nine months less six months only if the second-quarter figures are supplied |
| No balance sheet is printed at 2023-12-31 or at 2025-09-30 in the sources; the annual report shows two year-ends and the quarterly report compares with the year-end. | Total Debt, Cash & Equivalents and leverage, FY2023 and 9M 2025 | Leverage cannot be stated for FY2023 or for a year-earlier interim date | Low | Supply the 2024 annual report and the third-quarter 2025 quarterly report |
| The quarterly report prints no finance lease liability balance; 645 is derived as Total Debt less the debt note's carrying value. | Finance lease liabilities, 2026-09-30 | The split of Total Debt between notes and finance leases is a derivation | Low | Use the lease note of the 2026 annual report |
| No source states the legal ranking of every facility against the others; first-lien status is stated for some facilities on separate collateral pools, and equipment financings are described by aircraft collateral. | Debt stack chart and the ranking column of the debt instruments register | A ranked capital structure and cumulative leverage by rank cannot be stated | Medium | Supply the executed indentures, credit agreements and an intercreditor summary |
| No FY2022 revenue and no nine-month 2024 revenue are in the sources, so growth for FY2023 and for nine months 2025 is not shown. | Revenue growth, FY2023 and 9M 2025 | Two growth figures are missing from the KPI dashboard | Low | Supply the 2023 annual report and the third-quarter 2024 quarterly report |
| The debt note prints principal by instrument and not carrying value; scheduled amortisation amounts are printed only for some instruments, and pricing is not printed for the smaller facilities. | Carrying value, annual amortisation, spread and floor columns of the debt instruments register | Instrument-level carrying values and repayment profiles are not stated; the ladder and the aggregate adjustment stand in | Low | Use the executed documents and the annual report for repayment schedules |
| American reports a single operating segment, so there is no segment schedule; passenger revenue by geographic region sits in a note that was not extracted. | Segment revenue | No segment sum is stated; the segment check is not applicable | Low | Extract the geographic revenue note if regional mix is needed |
| Operating statistics (capacity, unit revenue, unit cost, load factor) are printed at group level in the quarterly report, not for American alone. | KPI dashboard operating measures | Only financial margins are shown for American | Low | Obtain American-level operating statistics or label group statistics as parent context |
| Capital expenditure is not split between maintenance and growth, and cash taxes paid are not printed in the supplemental cash flow information. | Capex (maintenance and growth); cash taxes | Cover after maintenance capital expenditure and cash tax burden cannot be stated | Low | Not disclosed; none |
| American's operating cash flow includes advances to its parent and the net receivable from related parties is large; group figures include the parent and its regional subsidiaries. | Net cash from operating activities, free cash flow, net debt perimeter | Free cash flow on American's perimeter is not comparable with group free cash flow; net debt excludes the parent receivable | Medium | Read American's figures with the related-party note; request any statement of intercompany repayment terms |
| Letters of credit outstanding under the revolving facilities are not stated at 2026-09-30; the printed availability is used as the undrawn figure. | Undrawn committed facilities, 2026-09-30 | Availability may be lower than commitments if letters of credit are outstanding | Low | Obtain the facility-level drawn and letter of credit figures |
| No events after 2026-09-30 that change net debt are stated up to the cutoff; the fourth-quarter 2026 outcome is outside the sources. | Post-balance-sheet adjustments | Pro forma net debt is not shown | Low | Re-run after the next filing |

## Next module

The orchestrator selects the next module.
