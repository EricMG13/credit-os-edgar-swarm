## Request

Financial foundation for Ziprecruiter, Inc. (zip-1617553), as of 2026-11-18, under the credit_snapshot pathway (full credit assessment). The scope is the consolidated income statement, cash flow statement, balance sheet, debt, liquidity and leverage metrics built from the five supplied SEC filings, with Q3 2026 as the current period and FY2025 as the prior period.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_zip-20241231.htm.jsonl | Annual report on Form 10-K of Ziprecruiter, Inc. for the year ended 31 December 2024 | 2025-02-25 (signature date; filing date not stated) | 4c6af145b03114d7fc912e17b781557c30eaf55222c72a7a1e2ec997aad65c29 | FY2023 balance sheet and Adjusted EBITDA reconciliation; FY2024 revolving facility availability |
| 10-K_2025-12-31_zip-20251231.htm.jsonl | Annual report on Form 10-K of Ziprecruiter, Inc. for the year ended 31 December 2025 | 2026-02-25 (signature date; filing date not stated) | 6dfe6d458eadd70f776719e563c19476bcf176d4563b526b71feb00c5d33eb46 | Audited FY2023 to FY2025 income statement and cash flow, FY2024 and FY2025 balance sheets, debt note, Adjusted EBITDA reconciliation, commitments and leases |
| 10-Q_2026-03-31_zip-20260331.htm.jsonl | Quarterly report on Form 10-Q of Ziprecruiter, Inc. for the quarter ended 31 March 2026 | 2026-05-07 (signature date; filing date not stated) | 5e50a7cc70946277b7a20b88ef836cbbcfa0d0dd3d289ffc085bf555703efc7f | Quarterly figures and the facility expiry subsequent event |
| 10-Q_2026-06-30_zip-20260630.htm.jsonl | Quarterly report on Form 10-Q of Ziprecruiter, Inc. for the quarter ended 30 June 2026 | 2026-08-05 (signature date; filing date not stated) | b52e8b008cdcfe329007adb1e5461c18705547e8db0ac74d8a5ed84b46d67915 | Second quarter 2026 figures, June 2026 note repurchase, balance sheet at 2026-06-30 |
| 10-Q_2026-09-30_zip-20260930.htm.jsonl | Quarterly report on Form 10-Q of Ziprecruiter, Inc. for the quarter ended 30 September 2026 | 2026-11-09 (signature date; filing date not stated) | 02a71bc8b05fc313332809859cd2714710e240d686bc1d6349f7b0b2e3bd1a83 | Current period statements, debt, liquidity, nine-month 2025 comparatives, Adjusted EBITDA reconciliation and subsequent items |

Supplied handoffs:

| Module | Handoff | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness (CP-0) | CP-0 source readiness for Ziprecruiter, Inc. | 4e707b7bff84f222add8c3e3e640800cbda009dd7deba9c6b7f2174000e0b825 | Source gate, gaps on the indenture, guarantors and ratings, and the period coverage statement |

## Findings

### Bottom line

ZipRecruiter's creditors hold a claim less than half its former size after the 2026 note buyback, with USD 248.7 million of debt against USD 174.7 million of cash, but earnings remain thin: trailing debt is 8.53x reported EBITDA.
Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6; calculation C7

On the issuer's adjusted EBITDA, which adds back stock-based compensation, trailing leverage is 4.06x and net leverage 1.21x; on reported EBITDA net leverage is 2.54x, and FY2025 reported EBITDA was negative. No revolver remains and cash interest paid for the trailing year is not disclosed, so trailing interest cover is not established.
Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 21 and 30; calculation C6; calculation C9; calculation C10

### Leverage trajectory and drivers

Total debt at carrying value fell from USD 544.8 million at FY2025 to USD 248.7 million at 2026-09-30 because the company bought back USD 299.3 million of principal of its 2030 notes at about 79 cents on the dollar, so what remains for creditors is the USD 250.7 million of notes. The cash used came from the balance sheet, not from earnings: cash and marketable securities together fell from USD 409.1 million to USD 174.7 million, a fall of USD 234.4 million, and the USD 60.0 million gain on the buyback (the discount to par net of fees and the write-off of issuance costs) accounts for almost all of the fall in net debt after marketable securities from USD 135.6 million to USD 74.0 million.
Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6, 7 and 21; calculation C16; calculation C17; calculation C19; calculation C20; calculation C30

Before the buyback the problem was earnings, not debt. Debt at carrying value stayed between USD 542.6 million and USD 544.8 million from FY2023 to FY2025 while Adjusted EBITDA fell from USD 175.3 million to USD 40.8 million and reported EBITDA fell from USD 91.1 million to a loss of USD 6.9 million, driven by revenue declines of 26.6% in FY2024 and 5.3% in FY2025. FY2025 leverage was therefore 13.37x on Adjusted EBITDA and could not be calculated on reported EBITDA, and the creditor's cushion rested on cash and marketable securities of USD 409.1 million rather than on earnings.
Basis: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 72 and 98; calculation C5; calculation C9; calculation C19

The turn in 2026 is visible but young. Nine-month revenue rose 3.79% and Q3 revenue 8.23%, operating income swung by USD 36.8 million to a profit of USD 13.5 million, and Adjusted EBITDA margin was 16.70% in Q3 against 8.04% a year earlier. Most of the swing came from lower costs, not faster growth: operating expenses fell USD 25.151 million against a USD 11.662 million rise in gross profit, with research and development expense down 19.15% and stock-based compensation down 40.56% for the nine months, which also shrinks the add-back that separates adjusted from reported EBITDA.
Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 7, 30, 36 and 37; calculation C27; calculation C28

### Coverage and cash interest

Interest cover cannot be established for the trailing twelve months because the quarterly reports print no cash interest paid, and interest expense, which is an accrual that includes issuance cost amortisation, is not substituted. The annual figures show reported EBITDA covering cash interest 3.24x in FY2023, 0.48x in FY2024 and not at all in FY2025 (negative 0.24x), while Adjusted EBITDA covered it 6.23x, 2.77x and 1.44x. After the buyback the contractual coupon is USD 12.535 million a year against USD 27.500 million before, which Adjusted EBITDA of USD 61.3 million covers 4.89x and reported EBITDA of USD 29.1 million covers 2.33x; this is a coupon calculation, not cash interest paid.
Basis: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21; calculation C11; calculation C12; calculation C21

### Cash flow quality

Free cash flow was USD 92.5 million in FY2023, USD 36.2 million in FY2024, USD 3.5 million in FY2025 and USD 27.4 million for the last twelve months, after capital spending that fell from USD 10.7 million in FY2023 to about USD 7.5 million in FY2025 and the last twelve months, mostly capitalised software. In FY2025 the company spent USD 102.1 million on share repurchases against free cash flow of USD 3.5 million, so distributions to shareholders were funded from the investment portfolio; in the nine months to 2026-09-30 share repurchases of USD 14.0 million were below free cash flow of USD 21.2 million, but USD 107.3 million of authorisation remains and the indenture's limits on restricted payments are not supplied.
Basis: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100 and 101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 10, 24 and 96; calculation C18

Operating cash flow of USD 27.3 million for nine months 2026 includes a non-cash deferred tax add-back of USD 20.3 million, which the issuer attributes to using carried-forward tax losses against the taxable gain on the buyback, so most of the USD 20.2 million income tax expense for the period is not a cash cost; it is also reduced by a USD 10.2 million fall in accrued interest as old coupons were settled. Deferred tax assets fell by USD 20.380 million to USD 54.812 million, so part of the shield against cash taxes has been used; nine-month cash taxes are not printed, and FY2025 cash taxes paid were USD 4.061 million.
Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6, 10 and 42; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101

### Liquidity adequacy and claims outside debt

Liquidity at 2026-09-30 is cash only: USD 174.7 million of cash and equivalents, no marketable securities and no committed facility, because the USD 290.0 million revolver expired unrenewed on 2026-04-30. That cash is 70.25% of carrying debt, so the USD 250.7 million bullet due 2030-01-15, three years and three and a half months away, will need free cash flow or a refinancing for the remainder. Letters of credit are cash collateralised by a restricted deposit of USD 2.1 million that is excluded from cash.
Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6, 17 and 21; calculation C4

Claims outside debt are small but real: operating lease liabilities of USD 11.058 million sit outside Total Debt, hosting service purchase commitments were USD 76.5 million in total at FY2025 (USD 15.2 million due in 2026 and USD 16.0 million in each of 2027 to 2029), and a stockholder class action filed on 2026-06-17 over the buyback programme carries no estimate of loss. No pension, factoring, supply chain finance or consent decree funding is disclosed, the company states it has no finance leases, and deferred revenue of USD 11.610 million is too small to be a funding float.
Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6 and 23; 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 114 and 130; calculation C23; calculation C24

### Evidence that cuts the other way

The strongest case against caution is operational momentum: Quarterly Paid Employers rose about a tenth year on year to 73,929 in Q3 2026, revenue grew 8.23% and Adjusted EBITDA more than doubled, while the debt claim has been cut by more than half at a discount. It would win if Adjusted EBITDA holds near the Q3 level of USD 20.8 million a quarter while stock-based compensation stays near USD 7.0 million, which would take reported EBITDA to an annualised USD 55.0 million against the trailing USD 29.1 million; it loses if revenue per employer keeps falling (USD 1,683 against USD 1,717 a year earlier) and the labour market stays subdued.
Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 7, 28, 30 and 31; calculation C28; calculation C29

### Subsequent events, multi-figure events and data quality

The credit facility expiry on 2026-04-30 was reported as a subsequent event in the first quarter report and is already in the 2026-09-30 balances; the only dated items after 2026-09-30 are an expected USD 5.7 million tax benefit in Q4 2026 and the 2026-10-28 termination of two executive share-sale plans, none of which changes net debt or is blended into any period figure. The note buyback is one event with several figures: principal USD 299.3 million, price USD 236.8 million including fees, discounted par of USD 233.3 million before fees, cash paid of USD 236.764 million for nine months but only USD 229.684 million for six months, and a gain of USD 60.003 million, which reconcile except for about USD 3.1 million of the June price that the six-month cash flow does not yet show, which the filings do not explain.
Basis: 10-Q_2026-03-31_zip-20260331.htm.jsonl, page 22; 10-Q_2026-06-30_zip-20260630.htm.jsonl, pages 9 and 20; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 10, 19, 21, 22 and 26; calculation C16; calculation C17

Reported EBITDA is calculated because the issuer states none, so the leverage tables rest on a definition choice (income from operations plus depreciation and amortization) that the registers disclose beside the issuer's own Adjusted EBITDA. The statements are unaudited for 2026, the company has one reportable segment with only a subscription and performance-based revenue split, and the quarterly cash flow statement prints neither interest nor taxes paid.
Basis: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 72 and 98; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 10 and 13; calculation C5

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 5.96 | 2.85 | x | Reported EBITDA (operating income plus depreciation and amortization, calculated; the issuer states none) of USD 91.061 million. Net debt nets cash and equivalents only. |
| FY2024 / 2024-12-31 | 40.11 | 24.00 | x | Reported EBITDA of USD 13.553 million, a near-zero denominator, so the multiples are not informative as levels. Net debt nets cash and equivalents only. |
| FY2025 / 2025-12-31 | Not supplied: reported EBITDA is negative (-6.896), so no multiple exists | Not supplied: reported EBITDA is negative (-6.896), so no multiple exists | x | Reported EBITDA is a loss of USD 6.896 million, so no multiple exists. On the issuer's Adjusted EBITDA the multiples are 13.37x and 8.75x (register). |
| 2026-09-30 | 8.53 | 2.54 | x | EBITDA is last twelve months to 2026-09-30 (FY2025 plus nine months 2026 less nine months 2025) of USD 29.145 million, calculated. Debt and cash are the 2026-09-30 balances after the 2026 note repurchase; Adjusted EBITDA equivalents are 4.06x and 1.21x (register). |

The multiples use calculated reported EBITDA and carrying-value debt, so they differ from the issuer's own Adjusted EBITDA view shown in the register, and the 2026-09-30 row uses last twelve months EBITDA.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 3.24 | x | Reported EBITDA of USD 91.061 million over cash interest paid of USD 28.121 million (annual report supplemental disclosure). |
| FY2024 / 2024-12-31 | 0.48 | x | Reported EBITDA of USD 13.553 million over cash interest paid of USD 28.149 million. |
| FY2025 / 2025-12-31 | -0.24 | x | Reported EBITDA of a loss of USD 6.896 million over cash interest paid of USD 28.227 million; a negative cover figure means EBITDA did not cover interest at all. |
| 2026-09-30 | Not supplied: the quarterly reports print no cash interest paid | x | Last twelve months cash interest cannot be built because interest paid for nine months 2025 and nine months 2026 is not printed; income statement interest expense is a different measure and is not substituted. |

Cover uses cash interest paid, which only the annual reports print, so the 2026-09-30 row has no figure.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 283.043 | Not supplied: the supplied annual reports do not state availability at 2023-12-31 | US$m | Cash and cash equivalents; marketable securities of USD 237.074 million are additional liquid assets not counted here. |
| FY2024 / 2024-12-31 | 218.432 | 286.600 | US$m | Undrawn is the USD 290.0 million revolving commitment less USD 3.4 million of letters of credit, nothing drawn (calculation); marketable securities of USD 287.449 million are not counted in Cash. |
| FY2025 / 2025-12-31 | 188.028 | 287.700 | US$m | Undrawn is the USD 290.0 million commitment less USD 2.3 million of letters of credit, nothing drawn (calculation); the facility matured on 2026-04-30; marketable securities of USD 221.109 million are not counted in Cash. |
| 2026-09-30 | 174.724 | 0.000 | US$m | The revolving facility expired unrenewed on 2026-04-30 with nothing outstanding, so no committed facility remains (stated as expiry, not as a zero line). Letters of credit are now cash collateralised by a restricted deposit of USD 2.067 million that is excluded from Cash. No marketable securities are held. |

Cash excludes marketable securities and restricted cash, and the revolver expired on 2026-04-30, so the 2026-09-30 undrawn figure reflects an expired facility rather than an unused one.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 | 0.000 | US$m | Bullet maturity: the notes carry no scheduled amortisation and nothing else is outstanding at 2026-09-30. Source: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21. |
| 2027 | 0.000 | US$m | Bullet maturity: the notes carry no scheduled amortisation and nothing else is outstanding at 2026-09-30. |
| 2028 | 0.000 | US$m | Bullet maturity: the notes carry no scheduled amortisation and nothing else is outstanding at 2026-09-30. |
| 2029 | 0.000 | US$m | Bullet maturity: the notes carry no scheduled amortisation and nothing else is outstanding at 2026-09-30. |
| 2030 | 250.700 | US$m | Principal of the 5% senior unsecured notes due 2030-01-15, stated as USD 250.7 million (to the nearest USD 0.1 million), so the principal carries a rounding limit of USD 0.05 million. |

The ladder is a single bullet maturity and the principal is printed to USD 0.1 million.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM 2026-09-30 | Basis |
| --- | --- | --- | --- | --- | --- |
| Revenue | USD 645.7 million | USD 474.0 million | USD 449.0 million | USD 461.7 million | Reported; LTM is FY2025 plus nine months 2026 less nine months 2025; rounded to USD 0.1 million for reading |
| Gross margin | 90.04% | 89.42% | 89.25% | Not supplied: gross profit for LTM is not constructed | Calculated: gross profit over revenue |
| EBITDA (Reported) | USD 91.1 million | USD 13.6 million | USD -6.9 million | USD 29.1 million | Calculated: operating income plus depreciation and amortization; rounded to USD 0.1 million |
| EBITDA (Adjusted) | USD 175.3 million | USD 78.0 million | USD 40.8 million | USD 61.3 million | Issuer-stated; adds back stock-based compensation; rounded to USD 0.1 million |
| Stock-based compensation | USD 84.2 million | USD 64.5 million | USD 47.6 million | USD 32.1 million | Reported in the issuer reconciliation; rounded to USD 0.1 million |
| Net income (loss) | USD 49.1 million | USD -12.9 million | USD -33.0 million | Not supplied: net income for LTM is not constructed | Reported; FY2025 loss; nine months 2026 net income of USD 43.8 million includes the USD 60.0 million extinguishment gain |
| Net cash from operating activities | USD 103.2 million | USD 45.7 million | USD 11.0 million | USD 35.0 million | Reported; LTM constructed |
| Capital expenditure (property and capitalised software) | USD 10.7 million | USD 9.5 million | USD 7.5 million | USD 7.5 million | Calculated from two cash flow lines |
| Free cash flow (operating cash flow less capital expenditure) | USD 92.5 million | USD 36.2 million | USD 3.5 million | USD 27.4 million | Calculated; before share repurchases and note repurchases |
| Cash and cash equivalents | USD 283.0 million | USD 218.4 million | USD 188.0 million | USD 174.7 million | Reported |
| Marketable securities | USD 237.1 million | USD 287.4 million | USD 221.1 million | nil | Reported |
| Total debt (carrying value) | USD 542.6 million | USD 543.6 million | USD 544.8 million | USD 248.7 million | Reported balance sheet; principal USD 550.0 million until the 2026 repurchase, then USD 250.7 million |
| Net debt (debt less cash and equivalents) | USD 259.5 million | USD 325.2 million | USD 356.8 million | USD 74.0 million | Calculated; excludes marketable securities |
| Net debt after marketable securities | USD 22.5 million | USD 37.8 million | USD 135.6 million | USD 74.0 million | Calculated; debt less cash, equivalents and marketable securities |
| Total debt / EBITDA (Reported) | 5.96x | 40.11x | Not calculable: reported EBITDA is negative | 8.53x | Calculated |
| Net debt / EBITDA (Reported) | 2.85x | 24.00x | Not calculable: reported EBITDA is negative | 2.54x | Calculated |
| Total debt / EBITDA (Adjusted) | 3.10x | 6.97x | 13.37x | 4.06x | Calculated |
| Net debt / EBITDA (Adjusted) | 1.48x | 4.17x | 8.75x | 1.21x | Calculated |
| EBITDA (Reported) / cash interest | 3.24x | 0.48x | -0.24x | Not supplied: no cash interest paid is printed | Calculated |
| EBITDA (Adjusted) / cash interest | 6.23x | 2.77x | 1.44x | Not supplied: no cash interest paid is printed | Calculated |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 542.577 | 283.043 | 259.534 | US$m | Gross debt is the balance-sheet carrying value of long-term borrowings, net of issuance costs (the senior unsecured notes only; no current debt, no finance leases, operating leases of the period stay outside); principal USD 550.0 million. Cash is cash and cash equivalents only, so marketable securities of USD 237.074 million and restricted cash are not netted. Sources: 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100. |
| FY2024 / 2024-12-31 | 543.649 | 218.432 | 325.217 | US$m | Gross debt is the balance-sheet carrying value of long-term borrowings, net of issuance costs (the senior unsecured notes only; no current debt, no finance leases, operating leases of the period stay outside); principal USD 550.0 million. Cash is cash and cash equivalents only, so marketable securities of USD 287.449 million and restricted cash are not netted. Sources: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98. |
| FY2025 / 2025-12-31 | 544.780 | 188.028 | 356.752 | US$m | Gross debt is the balance-sheet carrying value of long-term borrowings, net of issuance costs (the senior unsecured notes only; no current debt, no finance leases, operating leases of the period stay outside); principal USD 550.0 million. Cash is cash and cash equivalents only, so marketable securities of USD 221.109 million and restricted cash are not netted. Sources: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98. |
| 2026-09-30 | 248.715 | 174.724 | 73.991 | US$m | Gross debt is the balance-sheet carrying value of long-term borrowings, net of issuance costs (the senior unsecured notes only; no current debt, no finance leases, operating leases of the period stay outside); principal USD 250.7 million. Cash is cash and cash equivalents only, so marketable securities of nil and restricted cash are not netted. Reported balance sheet, not pro forma. Sources: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6 and 21. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 250.700 | -1.985 | 248.715 | US$m | Principal is the USD 250.7 million the report states for the 5% notes due 2030, equal to the maturity ladder total. The single reconciling item is unamortised issuance costs of USD 1.985 million, derived as carrying value less principal; the filing states approximately USD 2.0 million, and principal is printed to USD 0.1 million, so the derived item carries that rounding limit. No other debt, premium or discount exists. Sources: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6 and 22. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | Read: the five supplied filings, including the quarterly report signed 2026-11-09 and its income tax and other information notes. The only dated items after 2026-09-30 are an expected Q4 2026 income tax benefit of USD 5.7 million from expiring limitation periods (no stated net debt effect) and the 2026-10-28 termination of two executive share-sale plans; neither changes net debt. Nothing between 2026-11-09 and 2026-11-18 is covered by any source. Source: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 26 and 96. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 645.722 | 175.296 | US$m | Annual or twelve-month periods only. Adjusted EBITDA is the issuer-adjusted measure (adds back stock-based compensation) in every row; reported EBITDA is in the leverage tables. Sources: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98; 10-K_2024-12-31_zip-20241231.htm.jsonl, page 72. |
| FY2024 / 2024-12-31 | 474.001 | 78.006 | US$m | Annual or twelve-month periods only. Adjusted EBITDA is the issuer-adjusted measure (adds back stock-based compensation) in every row; reported EBITDA is in the leverage tables. |
| FY2025 / 2025-12-31 | 448.952 | 40.750 | US$m | Annual or twelve-month periods only. Adjusted EBITDA is the issuer-adjusted measure (adds back stock-based compensation) in every row; reported EBITDA is in the leverage tables. |
| 2026-09-30 | 461.725 | 61.258 | US$m | Twelve months to 2026-09-30: FY2025 plus nine months 2026 less nine months 2025, calculated from issuer-stated components; the same issuer-adjusted identity as the annual rows. |

Adjusted EBITDA adds back stock-based compensation and the last row is a constructed twelve-month figure from unaudited stubs.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| 5% senior unsecured notes due 2030-01-15 | 1 | No | 250.700 | 8.60 | US$m | Senior unsecured obligation of Ziprecruiter, Inc. and the only debt; the annual report refers to guarantees but names no guarantor, so the obligor scope beyond the issuer is not established. Amount is principal; cumulative leverage is principal over last-twelve-month reported EBITDA of USD 29.145 million (4.09x on Adjusted EBITDA of USD 61.258 million); the carrying-value ratio is 8.53x. The expired revolving facility is not a current facility. Sources: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 128; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21. |

Amount is principal of the only debt instrument, leverage is on last twelve months reported EBITDA, and the obligor scope beyond the issuer is not established.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), twelve months to 2026-09-30 | 29.145 | US$m | Opening: operating income of USD 17.455 million plus depreciation and amortization of USD 11.690 million, last twelve months, calculated. |
| Add back stock-based compensation | 32.113 | US$m | The only add-back the issuer states (FY2025 plus nine months 2026 less nine months 2025); the issuer states no restructuring, run-rate, synergy or cost-saving add-back, and none is realised or unrealised in the sense the method asks. |
| EBITDA (Adjusted), twelve months to 2026-09-30 | 61.258 | US$m | Closing: the issuer-stated Adjusted EBITDA built the same way; it equals the opening plus the single add-back with no balancing item. |

The bridge is constructed for the twelve months to 2026-09-30 and stock-based compensation is the issuer's only add-back.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 22 |
| Calculated | 12 |
| Assumption-Based | 0 |
| Analyst Inference | 1 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 3 |
| Fields present | 29 |
| Fields total | 30 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 6 |

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

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_zip-20241231.htm.jsonl | Annual report on Form 10-K | Year ended 2024-12-31 with FY2023 comparatives | USD | thousands | Ziprecruiter, Inc. and subsidiaries, consolidated | US GAAP | 1 (audited, auditor report dated 2025-02-25) | FY2023 balance sheet and Adjusted EBITDA; FY2024 history | Superseded by the FY2025 report for FY2024 figures |
| 10-K_2025-12-31_zip-20251231.htm.jsonl | Annual report on Form 10-K | Year ended 2025-12-31 with FY2024 and FY2023 comparatives | USD | thousands | Ziprecruiter, Inc. and subsidiaries, consolidated | US GAAP | 1 (audited, auditor report dated 2026-02-25) | Prior-period anchor FY2025; three-year statements; debt note and credit facility terms | Single reportable segment; Part III incorporated from a proxy statement not supplied |
| 10-Q_2026-03-31_zip-20260331.htm.jsonl | Quarterly report on Form 10-Q | Quarter ended 2026-03-31 | USD | thousands | Ziprecruiter, Inc. and subsidiaries, consolidated | US GAAP | 2b (unaudited) | Quarterly KPIs and the facility expiry subsequent event | Condensed notes |
| 10-Q_2026-06-30_zip-20260630.htm.jsonl | Quarterly report on Form 10-Q | Quarter and six months ended 2026-06-30 | USD | thousands | Ziprecruiter, Inc. and subsidiaries, consolidated | US GAAP | 2b (unaudited) | Quarterly Adjusted EBITDA, June 2026 repurchase and balance sheet at 2026-06-30 | Condensed notes; June repurchase date not stated to the day |
| 10-Q_2026-09-30_zip-20260930.htm.jsonl | Quarterly report on Form 10-Q | Quarter and nine months ended 2026-09-30 with comparatives | USD | thousands | Ziprecruiter, Inc. and subsidiaries, consolidated | US GAAP | 2b (unaudited) | Current period statements, debt, liquidity and subsequent items | No cash interest paid or income taxes paid disclosure; condensed notes |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ziprecruiter, Inc. | Issuer and registrant; obligor of the senior unsecured notes (the annual report refers to guarantees without naming a guarantor); revolving facility borrower until its expiry on 2026-04-30 | 12-31 | USD | thousands | Consolidated with ZipRecruiter Israel Ltd., ZipRecruiter Canada Ltd. and Poplar Technologies Ltd. (Breakroom, acquired July 2024); ZipRecruiter UK Ltd. dissolved 2025-12-02 | US GAAP | FY2023, FY2024, FY2025, Q1 2026, Q2 2026 and six months 2026, Q3 2026 and nine months 2026, with 2025 comparatives |
| Poplar Technologies Ltd. (Breakroom) | Wholly owned subsidiary acquired July 2024 for USD 12.040 million of cash outflow net of cash acquired (FY2024 cash flow) | 12-31 | USD | thousands | Included in consolidated figures from acquisition; no separate statements | US GAAP | Not separately reported |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Money tables restated from thousands to millions | 10-Q_2026-09-30_zip-20260930.htm.jsonl | Unit | USD 248,715 thousand | US$m 248.715 | The host money unit is millions; division by 1,000 with all three decimals kept, so nothing is rounded | All money tables |
| EBITDA (Reported) calculated as income (loss) from operations plus depreciation and amortization | 10-K_2025-12-31_zip-20251231.htm.jsonl | Calculation | Not stated by the issuer | USD 91,061 thousand (FY2023); 13,553 (FY2024); -6,896 (FY2025); -13,773 (9M 2025); 22,268 (9M 2026) | The issuer states only Adjusted EBITDA; operating income excludes interest income and the extinguishment gain, which sit below operating income | FY2023, FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| Last twelve months to 2026-09-30 constructed as FY2025 plus nine months 2026 less nine months 2025 | 10-Q_2026-09-30_zip-20260930.htm.jsonl | Derived period | Not stated by the issuer | See the constructed period register | Every component is stated; stub periods are the same nine months of consecutive years | 2026-09-30 |
| Cash defined as cash and cash equivalents only | 10-Q_2026-09-30_zip-20260930.htm.jsonl | Definition | Cash, restricted cash and marketable securities | USD 174.724 million | Method definition of Cash & Equivalents; marketable securities (USD 221.109 million at FY2025, nil at 2026-09-30) and restricted cash (USD 2.067 million at 2026-09-30) are shown beside it, never netted silently | All net debt rows |
| Q4 2025 constructed as FY2025 less nine months 2025 | 10-K_2025-12-31_zip-20251231.htm.jsonl | Derived period | Not reported separately | Revenue USD 111,673 thousand; Adjusted EBITDA USD 16,224 thousand | No fourth-quarter report is supplied, so the quarter is calculated and labelled | Q4 2025 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | 645,722 | 474,001 | 448,952 | 337,279 | 350,052 | 114,982 | 124,444 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Subscription revenue | 508,384 | 369,823 | 345,155 | 260,897 | 265,077 | 87,729 | 93,591 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 16 |
| Performance-based revenue | 137,338 | 104,178 | 103,797 | 76,382 | 84,975 | 27,253 | 30,853 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 16 |
| Cost of revenue | 64,309 | 50,150 | 48,272 | 36,133 | 37,244 | 12,515 | 12,681 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Gross profit | 581,413 | 423,851 | 400,680 | 301,146 | 312,808 | 102,467 | 111,763 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Sales and marketing | 265,253 | 215,808 | 227,908 | 176,485 | 173,263 | 59,952 | 59,318 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Research and development | 141,801 | 134,831 | 124,565 | 96,215 | 77,789 | 30,854 | 25,336 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| General and administrative | 94,922 | 71,950 | 67,565 | 51,804 | 48,301 | 16,688 | 16,244 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Total operating expenses | 501,976 | 422,589 | 420,038 | 324,504 | 299,353 | 107,494 | 100,898 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Income (loss) from operations | 79,437 | 1,262 | -19,358 | -23,358 | 13,455 | -5,027 | 10,865 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Depreciation and amortization | 11,624 | 12,291 | 12,462 | 9,585 | 8,813 | 3,216 | 2,885 | USD thousands | Reported (issuer reconciliation) | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 72; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 |
| Stock-based compensation | 84,235 | 64,453 | 47,646 | 38,299 | 22,766 | 11,060 | 7,028 | USD thousands | Reported (issuer reconciliation) | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 72; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 |
| EBITDA (Reported) | 91,061 | 13,553 | -6,896 | -13,773 | 22,268 | -1,811 | 13,750 | USD thousands | Calculated: Income (loss) from operations plus Depreciation and amortization; the issuer states no unadjusted EBITDA | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 |
| EBITDA (Adjusted) | 175,296 | 78,006 | 40,750 | 24,526 | 45,034 | 9,249 | 20,778 | USD thousands | Issuer-stated Adjusted EBITDA: net income before interest expense, gain on debt extinguishment, other income (expense) net, income tax and depreciation and amortization, plus stock-based compensation; the only add-back stated | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 72; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 |
| Interest expense | -29,393 | -29,597 | -29,629 | -22,199 | -17,461 | -7,406 | -3,329 | USD thousands | Reported (accrual basis) | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Gain on debt extinguishment | Not supplied: a dash or no line is printed | Not supplied: a dash or no line is printed | Not supplied: a dash or no line is printed | Not supplied: a dash or no line is printed | 60,003 | Not supplied: a dash or no line is printed | 741 | USD thousands | Reported | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Other income (expense), net | 20,506 | 21,838 | 18,369 | 14,427 | 7,989 | 4,119 | 1,425 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Total other income (expense), net | -8,887 | -7,759 | -11,260 | -7,772 | 50,531 | -3,287 | -1,163 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Income (loss) before income taxes | 70,550 | -6,497 | -30,618 | -31,130 | 63,986 | -8,314 | 9,702 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Income tax expense | 21,452 | 6,357 | 2,376 | 1,029 | 20,191 | 1,508 | 4,594 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |
| Net income (loss) | 49,098 | -12,854 | -32,994 | -32,159 | 43,795 | -9,822 | 5,108 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | 49,098 | -12,854 | -32,994 | -32,159 | 43,795 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Stock-based compensation expense | 84,235 | 64,398 | 47,646 | 38,299 | 22,766 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Depreciation and amortization | 11,624 | 12,291 | 12,462 | 9,585 | 8,813 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Provision for bad debts | 2,736 | 185 | 1,140 | 921 | 868 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Deferred income taxes | -18,397 | -15,531 | -1,843 | -3,302 | 20,332 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Non-cash lease expense | 4,212 | 3,969 | 3,070 | 2,604 | 1,450 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Amortization and accretion of marketable securities | -11,320 | -10,649 | -6,936 | -5,579 | -1,802 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Gain on debt extinguishment | Not supplied: a dash or no line is printed | Not supplied: a dash or no line is printed | Not supplied: a dash or no line is printed | Not supplied: a dash or no line is printed | -60,003 | USD thousands | Reported | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Other | 1,548 | 3,645 | 2,566 | 2,199 | 2,280 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Change in accounts receivable | 14,438 | 3,686 | -3,352 | -2,338 | -4,757 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Change in prepaid expenses and other assets | 2,261 | -132 | -1,120 | -1,064 | -203 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Change in deferred commissions | 498 | 1,991 | 473 | 260 | 924 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Change in other assets | 246 | 767 | 704 | 982 | -2,079 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Change in accounts payable | -9,336 | -1,383 | -1,372 | 900 | 1,178 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Change in accrued expenses and other liabilities | -15,884 | 2,767 | -5,128 | 801 | 3,898 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Change in accrued interest | Not supplied: printed as a dash or not printed | 29 | -2 | -6,877 | -10,218 | USD thousands | Reported; a dash in the FY2023 column is treated as not supplied | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Change in deferred revenue | -6,726 | -2,118 | -1,088 | 467 | 1,851 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Change in operating lease liabilities | -6,041 | -5,326 | -3,268 | -2,454 | -1,843 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Net Cash from Operating Activities | 103,192 | 45,735 | 10,958 | 3,245 | 27,250 | USD thousands | Reported; US GAAP, interest paid is classified in operating activities | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Purchases of property and equipment | -918 | -922 | -1,078 | -976 | -516 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Acquisition of business, net of cash acquired | Not supplied: printed as a dash or not printed | -12,040 | Not supplied: printed as a dash or not printed | Not supplied: printed as a dash or not printed | Not supplied: printed as a dash or not printed | USD thousands | Reported (Breakroom, 2024) | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Capitalized internal-use software costs | -9,744 | -8,609 | -6,397 | -5,023 | -5,538 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Purchases of marketable securities | -421,294 | -632,600 | -525,114 | -401,632 | -62,905 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Sales of marketable securities | Not supplied: printed as a dash or not printed | Not supplied: printed as a dash or not printed | 983 | 983 | 1,301 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Paydowns, maturities, and redemptions of marketable securities | 538,692 | 592,188 | 596,697 | 493,521 | 283,355 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Net Cash from Investing Activities | 106,736 | -61,983 | 65,091 | 86,873 | 215,697 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Repurchase of common stock | -147,565 | -40,346 | -102,105 | -94,105 | -14,027 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Proceeds from exercise of stock options | 4,271 | 1,944 | 2,842 | 2,506 | 338 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Payments of tax withholdings on net settlement of equity awards | -17,352 | -13,586 | -7,927 | -5,879 | -3,731 | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Proceeds from issuance of stock under employee stock purchase plan | 6,381 | 3,625 | 1,665 | 1,665 | Not supplied: printed as a dash or not printed | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Payment of acquisition-related non-employee investor holdback consideration | Not supplied: printed as a dash or not printed | Not supplied: printed as a dash or not printed | -928 | -928 | Not supplied: printed as a dash or not printed | USD thousands | Reported | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Repurchases of senior unsecured notes | Not supplied: a dash or no line is printed | Not supplied: a dash or no line is printed | Not supplied: a dash or no line is printed | Not supplied: a dash or no line is printed | -236,764 | USD thousands | Reported; the cash price including fees, excluding accrued interest | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Net Cash from Financing Activities | -154,265 | -48,363 | -106,453 | -96,741 | -254,184 | USD thousands | Reported; no dividends paid | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Net Cash Change | 55,663 | -64,611 | -30,404 | -6,623 | -11,237 | USD thousands | Reported; operating plus investing plus financing; no FX effect line is printed | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Opening Cash | 227,380 | 283,043 | 218,432 | 218,432 | 188,028 | USD thousands | Reported; cash and cash equivalents (restricted cash is included from 2026) | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Closing Cash | 283,043 | 218,432 | 188,028 | 211,809 | 176,791 | USD thousands | Reported; the 9M 2026 figure includes USD 2,067 thousand of restricted cash | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| Cash Interest Paid | 28,121 | 28,149 | 28,227 | Not supplied: the quarterly report prints no interest paid | Not supplied: the quarterly report prints no interest paid | USD thousands | Reported; supplemental disclosure of the annual report only | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101 |
| Income taxes paid | 25,569 | 18,010 | 4,061 | Not supplied: the quarterly report prints no income taxes paid | Not supplied: the quarterly report prints no income taxes paid | USD thousands | Reported; supplemental disclosure of the annual report only | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 283,043 | 218,432 | 188,028 | 174,724 | USD thousands | Reported; cash and cash equivalents only, excluding restricted cash and marketable securities | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Marketable securities | 237,074 | 287,449 | 221,109 | 0 | USD thousands | Reported; 9M 2026 printed as a dash, and the report states no available-for-sale debt securities are held, so the figure is nil | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Accounts receivable, net | 27,247 | 23,454 | 25,666 | 29,555 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Prepaid expenses and other assets | 9,853 | 10,059 | 11,097 | 11,559 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Deferred commissions, current portion | 5,071 | 4,279 | 2,951 | 2,741 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Total current assets | 562,288 | 543,673 | 448,851 | 218,579 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Property and equipment, net | 6,213 | 4,889 | 4,076 | 3,663 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Operating lease right-of-use assets | 8,744 | 6,007 | 9,715 | 8,265 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Internal-use software, net | 18,609 | 18,510 | 16,050 | 14,733 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Deferred commissions, net of current portion | 4,114 | 2,915 | 3,770 | 3,056 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Intangible assets, net | Not supplied: printed as a dash | 5,339 | 3,369 | 1,895 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Goodwill | 1,724 | 8,518 | 8,518 | 8,518 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Deferred tax assets, net | 57,050 | 73,737 | 75,192 | 54,812 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Other assets | 758 | 472 | 202 | 5,133 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Total Assets | 659,500 | 664,060 | 569,743 | 318,654 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Accounts payable | 11,839 | 10,519 | 9,115 | 10,276 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Accrued expenses | 41,741 | 43,493 | 36,610 | 40,010 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Accrued interest | 12,837 | 12,866 | 12,864 | 2,646 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Deferred revenue | 12,860 | 10,837 | 9,731 | 11,610 | USD thousands | Reported; the issuer carries no other non-debt funding float | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Operating lease liabilities, current portion | 4,429 | 2,786 | 2,213 | 2,134 | USD thousands | Reported; carried on its own line and not added to Total Debt | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Other current liabilities | 1,164 | 1,093 | 363 | Not supplied: printed as a dash | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Total current liabilities | 84,870 | 81,594 | 70,896 | 66,676 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Operating lease liabilities, net of current portion | 8,721 | 6,286 | 10,688 | 8,924 | USD thousands | Reported; carried on its own line and not added to Total Debt | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Total Debt | 542,577 | 543,649 | 544,780 | 248,715 | USD thousands | Reported: long-term borrowings, net, which is the senior unsecured notes net of unamortised issuance costs; there is no current portion and no finance lease debt | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Other long-term liabilities | 14,967 | 19,101 | 20,580 | 21,683 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Total Liabilities | 651,135 | 650,630 | 646,944 | 345,998 | USD thousands | Reported | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |
| Total Equity | 8,365 | 13,430 | -77,201 | -27,344 | USD thousands | Reported; a stockholders deficit at FY2025 and 9M 2026 | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 (FY2023); 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 (FY2024, FY2025); 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–7 (9M 2026) |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM | USD 448,952k | USD 350,052k | USD 337,279k | USD 461,725k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Last twelve months to 2026-09-30; every component stated; unaudited stub periods |
| Income (loss) from operations | LTM | USD -19,358k | USD 13,455k | USD -23,358k | USD 17,455k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Last twelve months to 2026-09-30; every component stated; unaudited stub periods |
| Depreciation and amortization | LTM | USD 12,462k | USD 8,813k | USD 9,585k | USD 11,690k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Last twelve months to 2026-09-30; every component stated; unaudited stub periods |
| EBITDA (Reported) | LTM | USD -6,896k | USD 22,268k | USD -13,773k | USD 29,145k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Last twelve months to 2026-09-30; every component stated; unaudited stub periods |
| Stock-based compensation | LTM | USD 47,646k | USD 22,766k | USD 38,299k | USD 32,113k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Last twelve months to 2026-09-30; every component stated; unaudited stub periods |
| EBITDA (Adjusted) | LTM | USD 40,750k | USD 45,034k | USD 24,526k | USD 61,258k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Last twelve months to 2026-09-30; every component stated; unaudited stub periods |
| Net Cash from Operating Activities | LTM | USD 10,958k | USD 27,250k | USD 3,245k | USD 34,963k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Last twelve months to 2026-09-30; every component stated; unaudited stub periods |
| Purchases of property and equipment | LTM | USD -1,078k | USD -516k | USD -976k | USD -618k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Last twelve months to 2026-09-30; every component stated; unaudited stub periods |
| Capitalized internal-use software costs | LTM | USD -6,397k | USD -5,538k | USD -5,023k | USD -6,912k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Last twelve months to 2026-09-30; every component stated; unaudited stub periods |
| Interest expense | LTM | USD -29,629k | USD -17,461k | USD -22,199k | USD -24,891k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Last twelve months to 2026-09-30; every component stated; unaudited stub periods |
| Cash Interest Paid | LTM | USD 28,227k | Not supplied: nine months 2026 interest paid is not printed | Not supplied: nine months 2025 interest paid is not printed | Not supplied: a component is missing, so the whole derived figure is missing | Not Available | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | No substitute is made from interest expense |
| Revenue | Q4 2025 (calculated) | USD 448,952k | USD 337,279k (nine months 2025, subtracted) | Not applicable | USD 111,673k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Fourth quarter is not reported separately in the supplied sources |
| EBITDA (Adjusted) | Q4 2025 (calculated) | USD 40,750k | USD 24,526k (nine months 2025, subtracted) | Not applicable | USD 16,224k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Fourth quarter is not reported separately in the supplied sources |
| EBITDA (Reported) | Q4 2025 (calculated) | USD -6,896k | USD -13,773k (nine months 2025, subtracted) | Not applicable | USD 6,877k | Calculated | 10-K_2025-12-31_zip-20251231.htm.jsonl; 10-Q_2026-09-30_zip-20260930.htm.jsonl | Fourth quarter is not reported separately in the supplied sources |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 542.577 | Net debt data FY2023 / 2023-12-31 Gross debt: 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 | 91.061 | EBITDA (Reported) FY2023 / 2023-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | FY2023 / 2023-12-31 | USD | US$m | 5.96 | Calculated | 1 (audited annual statements) | EBITDA (Reported) is calculated as operating income plus depreciation and amortization; debt is carrying value, not principal |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 259.534 | Net debt data FY2023 / 2023-12-31 Net debt: 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 | 91.061 | EBITDA (Reported) FY2023 / 2023-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | FY2023 / 2023-12-31 | USD | US$m | 2.85 | Calculated | 1 (audited annual statements) | EBITDA (Reported) is calculated as operating income plus depreciation and amortization; debt is carrying value, not principal |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 91.061 | EBITDA (Reported) FY2023 / 2023-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | 28.121 | Cash Interest Paid FY2023 / 2023-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101 | FY2023 / 2023-12-31 | USD | US$m | 3.24 | Calculated | 1 (audited annual statements) | EBITDA is calculated as operating income plus depreciation and amortization; cash interest paid is the annual report supplemental disclosure |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 542.577 | Net debt data FY2023 / 2023-12-31 Gross debt: 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 | 175.296 | EBITDA (Adjusted) FY2023 / 2023-12-31: 10-K_2024-12-31_zip-20241231.htm.jsonl, page 72 | FY2023 / 2023-12-31 | USD | US$m | 3.10 | Calculated | 1 (audited annual statements) | Issuer-adjusted EBITDA adds back stock-based compensation; debt is carrying value, not principal |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 259.534 | Net debt data FY2023 / 2023-12-31 Net debt: 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 | 175.296 | EBITDA (Adjusted) FY2023 / 2023-12-31: 10-K_2024-12-31_zip-20241231.htm.jsonl, page 72 | FY2023 / 2023-12-31 | USD | US$m | 1.48 | Calculated | 1 (audited annual statements) | Issuer-adjusted EBITDA adds back stock-based compensation; debt is carrying value, not principal |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 175.296 | EBITDA (Adjusted) FY2023 / 2023-12-31: 10-K_2024-12-31_zip-20241231.htm.jsonl, page 72 | 28.121 | Cash Interest Paid FY2023 / 2023-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101 | FY2023 / 2023-12-31 | USD | US$m | 6.23 | Calculated | 1 (audited annual statements) | EBITDA is issuer-adjusted (adds back stock-based compensation); cash interest paid is the annual report supplemental disclosure |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 543.649 | Net debt data FY2024 / 2024-12-31 Gross debt: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 | 13.553 | EBITDA (Reported) FY2024 / 2024-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | FY2024 / 2024-12-31 | USD | US$m | 40.11 | Calculated | 1 (audited annual statements) | EBITDA (Reported) is calculated as operating income plus depreciation and amortization; debt is carrying value, not principal |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 325.217 | Net debt data FY2024 / 2024-12-31 Net debt: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 | 13.553 | EBITDA (Reported) FY2024 / 2024-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | FY2024 / 2024-12-31 | USD | US$m | 24.00 | Calculated | 1 (audited annual statements) | EBITDA (Reported) is calculated as operating income plus depreciation and amortization; debt is carrying value, not principal |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 13.553 | EBITDA (Reported) FY2024 / 2024-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | 28.149 | Cash Interest Paid FY2024 / 2024-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101 | FY2024 / 2024-12-31 | USD | US$m | 0.48 | Calculated | 1 (audited annual statements) | EBITDA is calculated as operating income plus depreciation and amortization; cash interest paid is the annual report supplemental disclosure |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 543.649 | Net debt data FY2024 / 2024-12-31 Gross debt: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 | 78.006 | EBITDA (Adjusted) FY2024 / 2024-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72 | FY2024 / 2024-12-31 | USD | US$m | 6.97 | Calculated | 1 (audited annual statements) | Issuer-adjusted EBITDA adds back stock-based compensation; debt is carrying value, not principal |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 325.217 | Net debt data FY2024 / 2024-12-31 Net debt: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 | 78.006 | EBITDA (Adjusted) FY2024 / 2024-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72 | FY2024 / 2024-12-31 | USD | US$m | 4.17 | Calculated | 1 (audited annual statements) | Issuer-adjusted EBITDA adds back stock-based compensation; debt is carrying value, not principal |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 78.006 | EBITDA (Adjusted) FY2024 / 2024-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72 | 28.149 | Cash Interest Paid FY2024 / 2024-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101 | FY2024 / 2024-12-31 | USD | US$m | 2.77 | Calculated | 1 (audited annual statements) | EBITDA is issuer-adjusted (adds back stock-based compensation); cash interest paid is the annual report supplemental disclosure |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 544.780 | Net debt data FY2025 / 2025-12-31 Gross debt: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 | -6.896 | EBITDA (Reported) FY2025 / 2025-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: EBITDA is negative (-6.896) | Not Calculable | 1 (audited annual statements) | Reported EBITDA is a loss, so a multiple of it has no meaning |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 356.752 | Net debt data FY2025 / 2025-12-31 Net debt: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 | -6.896 | EBITDA (Reported) FY2025 / 2025-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: EBITDA is negative (-6.896) | Not Calculable | 1 (audited annual statements) | Reported EBITDA is a loss, so a multiple of it has no meaning |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | -6.896 | EBITDA (Reported) FY2025 / 2025-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | 28.227 | Cash Interest Paid FY2025 / 2025-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101 | FY2025 / 2025-12-31 | USD | US$m | -0.24 | Calculated | 1 (audited annual statements) | EBITDA is calculated as operating income plus depreciation and amortization; cash interest paid is the annual report supplemental disclosure; a negative numerator means EBITDA did not cover interest |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 544.780 | Net debt data FY2025 / 2025-12-31 Gross debt: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 | 40.750 | EBITDA (Adjusted) FY2025 / 2025-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72 | FY2025 / 2025-12-31 | USD | US$m | 13.37 | Calculated | 1 (audited annual statements) | Issuer-adjusted EBITDA adds back stock-based compensation; debt is carrying value, not principal |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 356.752 | Net debt data FY2025 / 2025-12-31 Net debt: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 | 40.750 | EBITDA (Adjusted) FY2025 / 2025-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72 | FY2025 / 2025-12-31 | USD | US$m | 8.75 | Calculated | 1 (audited annual statements) | Issuer-adjusted EBITDA adds back stock-based compensation; debt is carrying value, not principal |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 40.750 | EBITDA (Adjusted) FY2025 / 2025-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72 | 28.227 | Cash Interest Paid FY2025 / 2025-12-31: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101 | FY2025 / 2025-12-31 | USD | US$m | 1.44 | Calculated | 1 (audited annual statements) | EBITDA is issuer-adjusted (adds back stock-based compensation); cash interest paid is the annual report supplemental disclosure |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 248.715 | Net debt data 2026-09-30 Gross debt: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 | 29.145 | EBITDA (Reported) 2026-09-30: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 | 2026-09-30 | USD | US$m | 8.53 | Calculated | 2b (unaudited quarterly statements, constructed last twelve months) | EBITDA (Reported) is calculated as operating income plus depreciation and amortization; debt is carrying value, not principal; EBITDA is last twelve months |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 73.991 | Net debt data 2026-09-30 Net debt: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 | 29.145 | EBITDA (Reported) 2026-09-30: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 | 2026-09-30 | USD | US$m | 2.54 | Calculated | 2b (unaudited quarterly statements, constructed last twelve months) | EBITDA (Reported) is calculated as operating income plus depreciation and amortization; debt is carrying value, not principal; EBITDA is last twelve months |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 29.145 | EBITDA (Reported) 2026-09-30: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 | Not supplied: cash interest paid is not printed in the quarterly reports | Cash Interest Paid: not printed in the quarterly reports | 2026-09-30 | USD | US$m | Not supplied: cash interest paid is not printed in the quarterly reports | Not Available | 2b (unaudited quarterly statements, constructed last twelve months) | Last twelve months cash interest needs nine-month interest paid for 2025 and 2026, which the quarterly reports do not print |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 248.715 | Net debt data 2026-09-30 Gross debt: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 | 61.258 | EBITDA (Adjusted) 2026-09-30: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 | 2026-09-30 | USD | US$m | 4.06 | Calculated | 2b (unaudited quarterly statements, constructed last twelve months) | Issuer-adjusted EBITDA adds back stock-based compensation; debt is carrying value, not principal; EBITDA is last twelve months |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 73.991 | Net debt data 2026-09-30 Net debt: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 | 61.258 | EBITDA (Adjusted) 2026-09-30: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 | 2026-09-30 | USD | US$m | 1.21 | Calculated | 2b (unaudited quarterly statements, constructed last twelve months) | Issuer-adjusted EBITDA adds back stock-based compensation; debt is carrying value, not principal; EBITDA is last twelve months |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 61.258 | EBITDA (Adjusted) 2026-09-30: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 | Not supplied: cash interest paid is not printed in the quarterly reports | Cash Interest Paid: not printed in the quarterly reports | 2026-09-30 | USD | US$m | Not supplied: cash interest paid is not printed in the quarterly reports | Not Available | 2b (unaudited quarterly statements, constructed last twelve months) | Last twelve months cash interest needs nine-month interest paid for 2025 and 2026, which the quarterly reports do not print |
| Revenue growth | Revenue FY2025 / Revenue FY2024 - 1 | 448,952 | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | 474,001 | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | FY2025 | USD | USD thousands | -0.052846 | Calculated | 1 (audited) | Reported inputs |
| Revenue growth | Revenue FY2024 / Revenue FY2023 - 1 | 474,001 | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | 645,722 | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | FY2024 | USD | USD thousands | -0.265936 | Calculated | 1 (audited) | Reported inputs |
| Revenue growth | Revenue 9M 2026 / Revenue 9M 2025 - 1 | 350,052 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 | 337,279 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 | 9M 2026 | USD | USD thousands | 0.037871 | Calculated | 2b (unaudited) | Reported inputs; unaudited |
| Revenue growth | Revenue Q3 2026 / Revenue Q3 2025 - 1 | 124,444 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 | 114,982 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 | Q3 2026 | USD | USD thousands | 0.082291 | Calculated | 2b (unaudited) | Reported inputs; unaudited |
| Gross margin | Gross profit / Revenue | 400,680 | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | 448,952 | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | FY2025 | USD | USD thousands | 0.892478 | Calculated | 1 (audited) | Reported inputs |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Revenue | 40,750 | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72 | 448,952 | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99 | FY2025 | USD | USD thousands | 0.090767 | Calculated | 1 (audited) | Issuer-adjusted EBITDA |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Revenue | 61,258 | Constructed last twelve months (T4.8) | 461,725 | Constructed last twelve months (T4.8) | 2026-09-30 | USD | USD thousands | 0.132672 | Calculated | 2b (unaudited) | Issuer-adjusted EBITDA; last twelve months |
| Reported EBITDA margin | EBITDA (Reported) / Revenue | 29,145 | Constructed last twelve months (T4.8) | 461,725 | Constructed last twelve months (T4.8) | 2026-09-30 | USD | USD thousands | 0.063122 | Calculated | 2b (unaudited) | Calculated EBITDA; last twelve months |
| Stock-based compensation share of Adjusted EBITDA | Stock-based compensation / EBITDA (Adjusted) | 32,113 | Constructed last twelve months (T4.8) | 61,258 | Constructed last twelve months (T4.8) | 2026-09-30 | USD | USD thousands | 0.524225 | Calculated | 2b (unaudited) | Last twelve months |
| Operating cash flow to debt | Net Cash from Operating Activities / Total Debt | 34,963 | Constructed last twelve months (T4.8) | 248,715 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 | 2026-09-30 | USD | USD thousands | 0.140575 | Calculated | 2b (unaudited) | Operating cash flow is last twelve months; debt is carrying value at 2026-09-30 |
| Free cash flow conversion | Free cash flow / EBITDA (Adjusted) | 27,433 | Operating cash flow less capex (T4.8) | 61,258 | Constructed last twelve months (T4.8) | 2026-09-30 | USD | USD thousands | 0.447827 | Calculated | 2b (unaudited) | Free cash flow is levered (after cash interest) and before share and note repurchases |
| Capex intensity | Capex / Revenue | 7,530 | Property and capitalised software (T4.8) | 461,725 | Constructed last twelve months (T4.8) | 2026-09-30 | USD | USD thousands | 0.016308 | Calculated | 2b (unaudited) | Capex is purchases of property and equipment plus capitalised internal-use software |
| Cash to debt | Cash & Equivalents / Total Debt | 174,724 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 | 248,715 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 | 2026-09-30 | USD | USD thousands | 0.702507 | Calculated | 2b (unaudited) | Liquidity is cash only: no committed facility remains |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q1 2025 | Q2 2025 | Q3 2025 | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Customer base (period flow) | Quarterly Paid Employers | 63,466 | 66,302 | 66,959 | 59,104 | 63,329 | 70,721 | 73,929 | Up from Q4 2025 | Q3 2026 is above Q3 2025 by about a tenth; the issuer cites strong new and returning employers. Sources: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 28. |
| Monetisation (rate) | Revenue per Paid Employer (USD) | 1,734 | 1,693 | 1,717 | 1,889 | 1,698 | 1,669 | 1,683 | Flat to down year on year | Q3 2026 is below Q3 2025; growth comes from employer count, not spend per employer. Source: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 28. |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | EBITDA (Reported): income (loss) from operations plus depreciation and amortization, with no add-backs | Adjusted EBITDA adds back stock-based compensation (the only add-back); interest income and the extinguishment gain are excluded in both | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 | All periods | High: FY2025 Adjusted EBITDA USD 40.750 million against reported USD -6.896 million (difference USD 47.646 million); last twelve months USD 61.258 million against USD 29.145 million | Financial foundation; Fundamental credit | Both are shown; reported is the leverage denominator and adjusted is a separate labelled row |
| Stock-based compensation | Cash flow statement expense | Issuer reconciliation amount for FY2024 is USD 64.453 million; the cash flow statement prints USD 64.398 million; the equity statement prints USD 66.299 million, a further difference the filing does not explain | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 72 and 100 | FY2024 | Low: USD 0.055 million between the reconciliation and the cash flow statement | Financial foundation | Reconciliation amount is used in the income statement table because it ties to the stated Adjusted EBITDA; cash flow amount is kept in the cash flow table |
| Net debt | Total Debt less Cash & Equivalents | Issuer states no net debt; it holds marketable securities (liquid, available for current operations) outside cash and equivalents | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6 and 41 | FY2023, FY2024, FY2025 | High before 2026: FY2025 net debt USD 356.752 million against USD 135.643 million after marketable securities of USD 221.109 million; none held at 2026-09-30 | Financial foundation; Liquidity | Net debt follows the method; the securities-adjusted figure is carried in the metrics table and calculations |
| Total Debt | Balance-sheet carrying value, net of issuance costs | Principal outstanding USD 250.7 million at 2026-09-30 (USD 550.0 million before the repurchase) | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6 and 22 | 2026-09-30 and each year end | Low: USD 1.985 million at 2026-09-30; USD 5.220 million at FY2025 | Financial foundation | Carrying value is used for ratios; principal is kept in the reconciliation and debt stack |
| Notes repurchase price | One economic event, all figures with roles | Principal USD 299.3 million; price USD 236.8 million including fees (USD 232.8 million June, USD 4.0 million September); discounted par value USD 233.3 million before fees (USD 229.4 million plus USD 3.9 million); cash paid USD 236.764 million for nine months but USD 229.684 million for six months; gain USD 60.003 million | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 10, 19, 21 and 22; 10-Q_2026-06-30_zip-20260630.htm.jsonl, pages 9 and 20 | Q2 2026, Q3 2026, nine months 2026 | Medium: about USD 3.1 million of the June price was settled after 2026-06-30 on the filings' figures, which the filings do not explain | Financial foundation | The nine-month cash figure of USD 236.764 million (price including fees) is used for cash flow; the gain reconciles to principal less price less write-off |
| Cash | Cash and cash equivalents | Cash flow statement closing cash includes restricted cash: USD 176.791 million against USD 174.724 million on the balance sheet | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6, 10 and 17 | 9M 2026 | Low: USD 2.067 million of restricted cash | Financial foundation; Liquidity | Balance sheet cash is used for Cash; restricted cash is disclosed beside it |
| Interest | Cash interest paid (cash flow statement) | Interest expense in the income statement (accrual, including issuance cost amortisation); cash interest paid is printed only in the annual reports | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98 and 101 | All periods | Medium: FY2025 cash interest paid USD 28.227 million against interest expense USD 29.629 million; nine-month cash interest is not printed | Financial foundation; Fundamental credit | Cover uses cash interest paid only; interim cover is not supplied |
| Adjusted EBITDA definition | Definition applied consistently across periods | The definition added the gain on debt extinguishment to the items excluded from net income from the second quarter of 2026; it earlier named only interest expense and other income (expense) net | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 71; 10-Q_2026-06-30_zip-20260630.htm.jsonl, page 26 | Q2 2026 onward | Low: no earlier period had the gain, so no figure changes | Financial foundation | No restatement needed; flagged for monitoring |
| Leases | Operating lease liabilities presented on their own lines stay outside Total Debt | Operating lease liabilities USD 11.058 million at 2026-09-30 (USD 12.901 million at FY2025) | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 132 | All periods | Low against debt of USD 248.715 million | Financial foundation; Liquidity | Excluded from Total Debt and shown as a claim outside debt |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Annual leverage and cover, FY2023 to FY2025 | Ready with Limitations | Reported EBITDA is calculated, not issuer-stated; FY2025 reported EBITDA is negative so reported multiples are not calculable | Read the reported and adjusted rows together |
| Current-period leverage at 2026-09-30 | Ready with Limitations | Last twelve months EBITDA is constructed from unaudited stubs; reported leverage 8.53x against adjusted 4.06x depends on a stock-based compensation add-back of USD 32.113 million | State both bases |
| Current-period interest cover | Not Ready | Cash interest paid for the trailing twelve months is not printed | Obtain nine-month interest paid for 2025 and 2026 or the FY2026 annual report |
| Liquidity and debt maturity profile | Ready with Limitations | No committed facility since 2026-04-30; FY2023 undrawn availability is not stated; hosting and lease commitments are as of FY2025 | Use the 2026-09-30 balances and the FY2025 commitment schedule, labelled |
| Covenant capacity and restricted payments | Not Ready | The indenture is not supplied; its covenant and any net leverage definition are described only in summary; the credit agreement has expired | Obtain the indenture before any covenant conclusion |
| Segment analysis | Not Ready | A single reportable segment; only subscription and performance-based revenue streams are disclosed | Use the revenue stream split |

### T4.18 Debt instruments

Amounts are in USD thousands as the filings print them.

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5% senior unsecured notes due 2030 | Senior notes (private placement, indenture dated 2022-01-12) | 248,715 | 250,700 | 250,700 | Not applicable | Not secured: the filings call them senior unsecured obligations | Senior unsecured; the only debt | USD | 248,715 | Not applicable | 5.0% | fixed | Not applicable | Not applicable | Not applicable | 2030-01-15 | 0 | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 128; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6, 21 and 22 |

## Calculations

Every figure below is worked from the cited inputs; amounts printed in thousands are shown in thousands where stated and in USD millions elsewhere.

| Calculation ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Net debt FY2023 | Gross debt USD 542.577 million less cash USD 283.043 million | USD 259.534 million | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 100 |
| C2 | Net debt FY2024 | Gross debt USD 543.649 million less cash USD 218.432 million | USD 325.217 million | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 |
| C3 | Net debt FY2025 | Gross debt USD 544.780 million less cash USD 188.028 million | USD 356.752 million | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 |
| C4 | Net debt 2026-09-30 | Gross debt USD 248.715 million less cash USD 174.724 million | USD 73.991 million | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 |
| C5 | EBITDA (Reported) = income (loss) from operations + depreciation and amortization | FY2023 79,437 + 11,624; FY2024 1,262 + 12,291; FY2025 -19,358 + 12,462; 9M 2025 -23,358 + 9,585; 9M 2026 13,455 + 8,813 (USD thousands) | FY2023 91,061; FY2024 13,553; FY2025 -6,896; 9M 2025 -13,773; 9M 2026 22,268 (USD thousands) | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–99; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 |
| C6 | Last twelve months to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | Revenue 448,952 + 350,052 - 337,279; EBITDA (Reported) -6,896 + 22,268 - (-13,773); EBITDA (Adjusted) 40,750 + 45,034 - 24,526; stock-based compensation 47,646 + 22,766 - 38,299 (USD thousands) | Revenue 461,725; EBITDA (Reported) 29,145; EBITDA (Adjusted) 61,258; stock-based compensation 32,113 (USD thousands) | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 |
| C7 | Total debt / EBITDA (Reported) | FY2023 542.577 / 91.061; FY2024 543.649 / 13.553; FY2025 544.780 / -6.896; 2026-09-30 248.715 / 29.145 | 5.96x; 40.11x; not calculable (negative EBITDA); 8.53x | Net debt data; EBITDA (Reported) per C5 and C6 |
| C8 | Net debt / EBITDA (Reported) | 259.534 / 91.061; 325.217 / 13.553; 356.752 / -6.896; 73.991 / 29.145 | 2.85x; 24.00x; not calculable; 2.54x | C1 to C4; C5 and C6 |
| C9 | Total debt / EBITDA (Adjusted) | 542.577 / 175.296; 543.649 / 78.006; 544.780 / 40.750; 248.715 / 61.258 | 3.10x; 6.97x; 13.37x; 4.06x | C6; 10-K_2024-12-31_zip-20241231.htm.jsonl, page 72; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72 |
| C10 | Net debt / EBITDA (Adjusted) | 259.534 / 175.296; 325.217 / 78.006; 356.752 / 40.750; 73.991 / 61.258 | 1.48x; 4.17x; 8.75x; 1.21x | C1 to C4; C6 |
| C11 | EBITDA (Reported) / cash interest paid | 91.061 / 28.121; 13.553 / 28.149; -6.896 / 28.227 | 3.24x; 0.48x; -0.24x | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101; C5 |
| C12 | EBITDA (Adjusted) / cash interest paid | 175.296 / 28.121; 78.006 / 28.149; 40.750 / 28.227 | 6.23x; 2.77x; 1.44x | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101 |
| C13 | Principal to carrying value at 2026-09-30 | Principal USD 250.700 million plus reconciling item -1.985 (carrying value 248.715 less principal 250.700) | USD 248.715 million | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 22 |
| C14 | Debt maturity ladder total | 0.000 + 0.000 + 0.000 + 0.000 + 250.700 | USD 250.700 million | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21 |
| C15 | EBITDA bridge, last twelve months | EBITDA (Reported) 29.145 + stock-based compensation 32.113 | USD 61.258 million, equal to EBITDA (Adjusted) | C6 |
| C16 | Notes principal repurchased and price, nine months 2026 | 294.6 + 4.7; 232.8 + 4.0; 550.0 less 299.3; 236.8 / 299.3 | USD 299.3 million principal; USD 236.8 million price; USD 250.7 million outstanding; 79.12% of principal | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 40 |
| C17 | Gain on debt extinguishment reconciliation | Principal 299.3 less price 236.8 less issuance cost write-off 2.5 | USD 60.0 million, equal to the USD 60.003 million printed | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 22 |
| C18 | Free cash flow = operating cash flow less purchases of property and equipment less capitalised software | FY2023 103,192 - 918 - 9,744; FY2024 45,735 - 922 - 8,609; FY2025 10,958 - 1,078 - 6,397; 9M 2025 3,245 - 976 - 5,023; 9M 2026 27,250 - 516 - 5,538; LTM 34,963 - 7,530 (USD thousands) | FY2023 92,530; FY2024 36,204; FY2025 3,483; 9M 2025 -2,754; 9M 2026 21,196; LTM 27,433 (USD thousands) | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10 |
| C19 | Cash plus marketable securities | FY2025 188.028 + 221.109; 2026-09-30 174.724 + 0.000 | USD 409.137 million; USD 174.724 million; a fall of USD 234.413 million | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 |
| C20 | Net debt after marketable securities | FY2023 259.534 - 237.074; FY2024 325.217 - 287.449; FY2025 356.752 - 221.109; 2026-09-30 73.991 - 0.000 | USD 22.460 million; USD 37.768 million; USD 135.643 million; USD 73.991 million | C1 to C4; balance sheets |
| C21 | Run-rate annual coupon on notes outstanding, and cover of it | 5% x 250.7; 5% x 550.0; 61.258 / 12.535; 29.145 / 12.535 | USD 12.535 million (previously USD 27.500 million); 4.89x on Adjusted EBITDA; 2.33x on reported EBITDA; a contractual coupon, not cash interest paid | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21 |
| C22 | Undrawn revolving facility | FY2024 290.0 - 3.4; FY2025 290.0 - 2.3 | USD 286.6 million; USD 287.7 million | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 130; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 128 |
| C23 | Operating lease liabilities, 2026-09-30 (outside Total Debt) | Current 2.134 + non-current 8.924 | USD 11.058 million | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 |
| C24 | Hosting purchase commitments as of 2025-12-31 | 15.2 + 16.0 + 16.0 + 16.0 + 13.3 | USD 76.5 million | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 130 |
| C25 | Debt stack leverage on principal | 250.700 / 29.145; 250.700 / 61.258 | 8.60x; 4.09x | C6 |
| C26 | Fourth quarter 2025 = FY2025 less nine months 2025 | Revenue 448,952 - 337,279; EBITDA (Adjusted) 40,750 - 24,526; EBITDA (Reported) -6,896 - (-13,773) (USD thousands) | Revenue 111,673; EBITDA (Adjusted) 16,224; EBITDA (Reported) 6,877 (USD thousands) | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 |
| C27 | Nine-month and quarterly changes in the income statement | Revenue 350,052 / 337,279 - 1; Q3 revenue 124,444 / 114,982 - 1; research and development 77,789 / 96,215 - 1; stock-based compensation 22,766 / 38,299 - 1; operating income 13,455 - (-23,358); total operating expenses 299,353 - 324,504; gross profit 312,808 - 301,146 (USD thousands) | +3.79%; +8.23%; -19.15%; -40.56%; USD 36.813 million swing, of which operating expenses -25.151 million and gross profit +11.662 million | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 |
| C28 | Quarterly Adjusted EBITDA margin, Q3 2026 and Q3 2025 | 20,778 / 124,444; 9,249 / 114,982 | 16.70%; 8.04% | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 |
| C29 | Annualised Q3 2026 reported-equivalent EBITDA = (Adjusted EBITDA less stock-based compensation) x 4 | (20,778 - 7,028) x 4 (USD thousands); compared with trailing 29,145 | USD 55,000 thousand, which is 1.89 times the trailing figure; an illustration, not a forecast | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 |
| C30 | Fall in net debt after marketable securities against the buyback gain | 135.643 - 73.991; gain 60.003 | USD 61.652 million fall against a USD 60.003 million gain (97% of the fall) | C20; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 |

## Gaps

Each line below states what is missing, the metric and period it restricts, its severity and the action that would close it.

- Cash interest paid for nine months 2025 and nine months 2026 is not printed in the quarterly reports, so EBITDA over cash interest for the twelve months to 2026-09-30 is not supplied; severity Medium; the cash flow supplement of the FY2026 annual report or an interest paid disclosure would close it.
  Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10
- Undrawn committed facilities at 2023-12-31 are not stated in the supplied annual reports, so the FY2023 liquidity row has cash only; severity Low; the FY2023 annual report would close it.
  Basis: 10-K_2024-12-31_zip-20241231.htm.jsonl, page 130
- The indenture for the notes is not supplied, so covenant levels, any net leverage definition and restricted payment limits are not established and no covenant capacity is inferred; severity High for covenant work and Low for the figures here; the executed indenture would close it.
  Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 40 and 85
- Guarantors of the notes are not named, so the obligor scope of the debt stack beyond the issuer is not established; severity Low; the indenture or subsidiary list would close it.
  Basis: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 128
- The issuer states no unadjusted EBITDA, so EBITDA (Reported) is calculated from operating income and depreciation and amortization for every period; severity Low; the definition is disclosed and the issuer's Adjusted EBITDA is shown beside it.
  Basis: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 72 and 98
- Several statement lines are printed as dashes or are absent for some periods (gain on debt extinguishment before 2026, intangible assets at 2023-12-31, other current liabilities at 2026-09-30, acquisition and holdback payments, share plan proceeds, sales of marketable securities, change in accrued interest for FY2023) and are carried as not supplied rather than zero; severity Low; the filings print no further detail.
  Basis: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98 and 100; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6 and 10
- Income taxes paid and interest paid are not printed for the nine-month columns, so cash taxes for 2026 are not established; severity Low; the annual report for FY2026 would close it.
  Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10
- Maintenance and growth capital spending are not split by the issuer, so only total capital spending (property and capitalised software) is stated; severity Low; no source in the set closes it.
  Basis: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 101
- No segment revenue exists beyond the subscription and performance-based split because the company reports one segment, so no segment schedule is written and no segment sum is stated; severity Low.
  Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 13 and 16
- The principal of the notes is printed to USD 0.1 million (USD 250.7 million), so the derived issuance cost reconciling item of USD 1.985 million carries a rounding limit of USD 0.05 million against the approximately USD 2.0 million the filing states; severity Low.
  Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 22 and 40; calculation C13
- The quarterly cash flow statement is cumulative, so discrete Q3 cash flows are not printed and the Q3 columns carry income statement lines only; severity Low; the six-month report would allow a derived quarter if needed.
  Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 10
- The filings do not explain why USD 229.684 million of note repurchases appears in the six-month cash flow against a June price of USD 232.8 million, a difference of about USD 3.1 million that falls in the third quarter; severity Low; the nine-month total ties to the stated price.
  Basis: 10-Q_2026-06-30_zip-20260630.htm.jsonl, pages 9 and 20; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 10 and 21; calculation C16
- Nothing between 2026-11-09 and 2026-11-18 is covered by any source, so any later debt, cash or repurchase event is not reflected; severity Low.
  Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 97

## Next module

The orchestrator selects the next module.
