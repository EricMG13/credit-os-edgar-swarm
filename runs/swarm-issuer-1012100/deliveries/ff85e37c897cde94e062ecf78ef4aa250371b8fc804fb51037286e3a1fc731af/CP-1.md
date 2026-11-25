# Financial foundation for Sealed Air Corp/De (issuer-1012100), as of 2026-11-18

## Request

Sealed Air Corp/De (issuer-1012100), as of 2026-11-18, credit snapshot pathway. Scope: normalized FY2025, FY2024 and FY2023 statements, debt, liquidity and credit metrics from the four supplied filings, with every figure traced to its page and nothing after the balance-sheet date blended into a period figure.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_sealed-air-corp.htm.jsonl | Annual report on Form 10-K of Sealed Air Corporation for the fiscal year ended December 31, 2024 | 2025-02-26 | 809ce92ba2d431a3d4a9f1d37023edc761248a67a97cec7779c49c479e27027c | FY2023 balance sheet column, FY2024 debt table and maturity schedule, covenant figure; cross-check of FY2024 comparatives. |
| 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Annual report on Form 10-K of Sealed Air Corporation for the fiscal year ended December 31, 2025 | 2026-03-02 | 82c4c91d640b6a99e501ef92e9529bf167e6836d7c667123c1f99182de8c964f | Primary source: FY2025, FY2024 and FY2023 statements, debt note, liquidity, covenant, adjusted EBITDA reconciliation, subsequent events. |
| EX-99.1_2025-12-31_see.htm.jsonl | Exhibit 99.1 results release for the fourth quarter and full year 2025 | 2026-03-02 | 8e659f869890926eac235f32c50d49018142a623ac38809e5149545764ee1ca1 | Issuer net debt and net leverage definitions, liquidity statement, share-based compensation inside depreciation and amortization; cross-check of year-end figures. |
| STATUS_15-12G_2026-04-20_see.htm.jsonl | Form 15 certification and notice of termination of registration of Sealed Air Corporation | 2026-04-20 | 37dcda77f63552d032343b335621baa4af5e9e92a6f903f1d638b61d3f2822f9 | Date the merger completed; confirms no filing after the annual report supplies financial figures. |

| Handoff | Module | sha256 |
|---|---|---|
| Source readiness | CP-0 | 73526f45cde93ce1074d268f33a8f50a70ffd84b055e9d5b799c5469c307641e |

## Findings

### Bottom line

Sealed Air ended 2025 with net debt of USD 3,665.7 million, or 3.90x reported EBITDA, down from 4.69x two years earlier, but these year-end figures predate the CD&R acquisition and its financing and so do not describe the credit today. Pro forma for the dividend declared on 2026-02-16, net debt is USD 3,695.2 million, or 3.94x.
Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109, 177; calculation C7; calculation C1; calculation C25; calculation C26

The USD 600 million notes due October 2026 sat in current debt at year-end with their outcome not established, and the sources give no acquisition financing. Cash interest cover was 3.50x, and free cash flow of USD 458.5 million covered dividends of USD 119.2 million. Almost all of the deleveraging came from debt repayment rather than higher earnings.
Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148–149; calculation C10

### Key findings

- Leverage fell because debt was repaid, not because earnings grew: net debt dropped by USD 678.5 million between 2023 and 2025 while reported EBITDA rose by only USD 12.9 million, taking net leverage from 4.69x to 4.26x and then 3.90x. Total debt over reported EBITDA is still 4.27x, so creditors rely on continued cash generation to keep reducing it.
  Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104; calculation C28; calculation C29
- Cash generation funds the repayment: free cash flow after capital expenditure was USD 458.5 million in 2025 and USD 507.8 million in 2024, and after dividends USD 339.3 million and USD 389.8 million. Operating cash flow in 2025 was USD 100.0 million lower than in 2024, a year that included a USD 54.0 million IRS refund.
  Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112; calculation C10; calculation C13; calculation C45
- Coverage is moderate: reported EBITDA covered cash interest paid 3.50x in 2025, 3.33x in 2024 and 3.49x in 2023, and EBITDA less capital expenditure covered it 2.87x in 2025. Cash interest paid exceeded the income-statement interest expense by USD 49.6 million largely because the expense is shown net of interest income and capitalized interest.
  Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 70, 112; calculation C30; calculation C40; calculation C46
- Liquidity at year-end was USD 1,344.0 million, cash of USD 344.0 million plus the undrawn USD 1,000.0 million revolver, which covers the USD 724.8 million of current debt 1.85x. The USD 600 million senior secured notes due October 2026 fell due before the as-of date; a USD 600 million delayed draw term loan was available to October 15, 2026, but whether it was drawn is not stated.
  Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 84, 148–150; calculation C16; calculation C31; calculation C32
- Maturities are uneven rather than front-loaded: USD 626.4 million falls due in 2026, USD 445.9 million in 2027, USD 791.3 million in 2028, USD 452.1 million in 2029, USD 339.9 million in 2030 and USD 1,281.8 million after 2030, so 2028 is the largest of the five years to 2030. The October 2025 credit agreement moved the bank debt out to October 2030, replacing the March 2027 Term Loan A of USD 685.2 million at the end of 2024 with a Term Loan A due October 2030 of USD 371.6 million, and the sources do not say whether the acquisition left this structure in place.
  Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148–150
- The issuer's own leverage is lower than the reported-EBITDA measure because adjusted EBITDA of USD 1,134.3 million is USD 195.3 million above reported EBITDA, mainly restructuring and other charges and USD 41.1 million of share-based compensation: net debt over adjusted EBITDA is 3.23x against 3.90x, and the covenant measure of 2.95x sits against a 4.50x maximum.
  Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 61, 85; EX-99.1_2025-12-31_see.htm.jsonl, pages 5, 11–12; calculation C42; calculation C27
- Debt-like funding sits outside the debt figure: USD 50.0 million of receivables sold under the U.S. securitization program started in December 2025 is not carried as debt and its cash is in operating cash flow, receivables factored in 2025 totalled USD 628.7 million against USD 721.7 million in 2024, supply chain finance obligations inside payables were USD 147.1 million against USD 161.1 million, and operating lease liabilities of USD 90.4 million are separate lines.
  Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 83–85, 109, 142–146; calculation C33
- Subsequent events are kept out of the period figures: the February 2026 dividend and the merger that completed on April 9, 2026 are shown only in the post-balance-sheet table, and the sources give no acquisition financing, so net debt after closing is not established.
  Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 177; STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1

### Contrary evidence and what would change the view

The strongest evidence against a cautious reading is that the issuer's own measures are lower than the ones used here: covenant leverage was 2.95x against a 4.50x maximum, net leverage on adjusted EBITDA was 3.23x, and free cash flow after dividends was USD 339.3 million in 2025 and USD 389.8 million in 2024. The view would soften if post-closing statements show net debt close to the year-end figure, and it would harden if they show the acquisition financing added materially to it, which is the open question the sources cannot answer.
Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 61, 85, 111–112; calculation C13; calculation C14

### Limitations

- Every leverage, coverage and liquidity figure is struck at December 31, 2025 or earlier, so none of them describes the company after the merger completed; a conclusion about today's leverage needs post-closing statements the sources do not contain.
- EBITDA (Reported) is derived here from net earnings, interest, tax and depreciation and amortization because the issuer states only an adjusted figure; leverage on the issuer's measure is shown beside it, and the two differ by USD 195.3 million in 2025.
  Basis: calculation C42
- The undrawn committed facilities figure of USD 1,000.0 million is the revolver the annual report states; the annual report's lines-of-credit table shows USD 1,197.0 million of unused lines and the results release about USD 1,060 million of unused committed lines, so undrawn committed capacity lies between USD 1,000.0 million and USD 1,197.0 million and the liquidity figure is a floor.
  Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 84, 154; EX-99.1_2025-12-31_see.htm.jsonl, page 5; calculation C44
- Debt maturing after 2030 is one total in the filing, so the ladder chart stops at 2030 and USD 1,281.8 million sits in the reconciliation instead of a chart bar.
  Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 149; calculation C23

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 4.27 | 3.90 | x | Total debt 4,009.7 and net debt 3,665.7 at carrying value over EBITDA (Reported) 939.0, derived; excludes 50.0 of receivables sold under the new U.S. program and operating lease liabilities of 90.4 |
| FY2024 / 2024-12-31 | 4.65 | 4.26 | x | Total debt 4,403.9 and net debt 4,032.1 at carrying value over EBITDA (Reported) 946.9, derived; includes 50.0 of U.S. securitization borrowings that the FY2025 structure no longer carries |
| FY2023 / 2023-12-31 | 5.06 | 4.69 | x | Total debt 4,690.3 and net debt 4,344.2 at carrying value over EBITDA (Reported) 926.1, derived; balance sheet from the 2024 annual report |

Leverage uses EBITDA (Reported) that this module derived because the issuer states only an adjusted figure, so it is higher than the issuer's own 3.2x net leverage.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2025 / 2025-12-31 | 3.50 | x | EBITDA (Reported) 939.0 over cash interest paid 268.5, net of capitalized interest and including securitization interest; interest expense, net is 218.9 after interest income of 46.0 |
| FY2024 / 2024-12-31 | 3.33 | x | EBITDA (Reported) 946.9 over cash interest paid 284.1 |
| FY2023 / 2023-12-31 | 3.49 | x | EBITDA (Reported) 926.1 over cash interest paid 265.2 |

Cover is measured on cash interest paid, which is larger than the income-statement interest expense because that expense is shown net of interest income.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 344.0 | 1,000.0 | US$m | Cash and cash equivalents, excluding restricted cash of 1.3; undrawn is the 1,000 revolver stated as available with no borrowings; excludes the 600 delayed draw term loan available to 2026-10-15 and securitization availability of 199; the results release states about 1,060 of unused committed lines; no letters of credit against the revolver are stated |
| FY2024 / 2024-12-31 | 371.8 | 1,000.0 | US$m | Cash and cash equivalents; undrawn is the 1,000 revolver stated as available with no borrowings; securitization availability of 133 excluded |
| FY2023 / 2023-12-31 | 346.1 | 1,000.0 | US$m | Cash and cash equivalents; undrawn is the 1,000 revolver stated as available with no borrowings, from the 2024 annual report; securitization availability of 135 excluded |

The undrawn figure is the revolver alone, so total committed liquidity may be understated by the amount the results release adds in other committed lines.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 626.4 | US$m | Scheduled principal of long-term debt, including the current portion and finance leases, at 2025-12-31 |
| FY2027 | 445.9 | US$m | Scheduled principal of long-term debt, including the current portion and finance leases, at 2025-12-31 |
| FY2028 | 791.3 | US$m | Scheduled principal of long-term debt, including the current portion and finance leases, at 2025-12-31 |
| FY2029 | 452.1 | US$m | Scheduled principal of long-term debt, including the current portion and finance leases, at 2025-12-31 |
| FY2030 | 339.9 | US$m | Scheduled principal of long-term debt, including the current portion and finance leases, at 2025-12-31; maturities after 2030 total 1,281.8 and are left out of this chart because the filing gives them as one total |

The chart stops at 2030; USD 1,281.8 million matures later and appears only in the reconciliation of principal to carrying value.

### Financials and credit metrics

| Metric | FY2025 | FY2024 | FY2023 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Net sales | 5,359.8 | 5,392.6 | 5,488.9 | US$m | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| EBITDA (Adjusted), issuer-stated | 1,134.3 | 1,110.6 | 1,106.6 | US$m | Issuer non-GAAP | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 |
| EBITDA (Reported), derived | 939.0 | 946.9 | 926.1 | US$m | Calculated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111 |
| Operating profit | 725.7 | 735.9 | 754.6 | US$m | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 110 |
| Net earnings from continuing operations | 441.2 | 269.5 | 339.3 | US$m | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 110 |
| Net cash from operating activities | 628.0 | 728.0 | 516.2 | US$m | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 |
| Capital expenditures | 169.5 | 220.2 | 244.2 | US$m | Reported; outflow shown as a positive amount | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 |
| Free cash flow | 458.5 | 507.8 | 272.0 | US$m | Calculated: operating cash flow less capital expenditures | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 |
| Dividends paid | 119.2 | 118.0 | 117.9 | US$m | Reported; outflow shown as a positive amount | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 |
| Total debt | 4,009.7 | 4,403.9 | 4,690.3 | US$m | Calculated: carrying value | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| Cash and cash equivalents | 344.0 | 371.8 | 346.1 | US$m | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| Net debt | 3,665.7 | 4,032.1 | 4,344.2 | US$m | Calculated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| Total debt / EBITDA (Reported) | 4.27 | 4.65 | 5.06 | x | Calculated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| Net debt / EBITDA (Reported) | 3.90 | 4.26 | 4.69 | x | Calculated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| Net debt / EBITDA (Adjusted) | 3.23 | 3.63 | 3.93 | x | Calculated on the issuer's adjusted EBITDA | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 |
| EBITDA (Reported) / cash interest paid | 3.50 | 3.33 | 3.49 | x | Calculated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 |
| Covenant leverage ratio (debt to EBITDA as the credit agreement defines it) | 2.95 | 3.37 | Not supplied: the 2023 annual report is not supplied | x | Reported by the issuer; maximum 4.50 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 85; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 79 |
| Cash plus undrawn revolver | 1,344.0 | 1,371.8 | 1,346.1 | US$m | Calculated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 84 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 4,009.7 | 344.0 | 3,665.7 | US$m | Reported at carrying value, net of discounts and issuance costs of 22.3; includes finance lease liabilities of 18.9 and European securitization borrowings of 93.7; excludes operating lease liabilities of 90.4 and 50.0 of receivables sold under the U.S. program from December 2025; principal total 4,037.0 is the schedule total of 3,937.4 plus short-term borrowings of 99.6 |
| FY2024 / 2024-12-31 | 4,403.9 | 371.8 | 4,032.1 | US$m | Reported at carrying value, net of discounts and issuance costs of 31.5; includes the Term Loan A due March 2027 of 685.2 that the October 2025 refinancing replaced, finance lease liabilities of 19.5 and securitization borrowings of 133.0 (European 83.0, U.S. 50.0); excludes operating lease liabilities of 104.5; principal total 4,441.8 is the schedule total of 4,301.3 plus short-term borrowings of 140.5 |
| FY2023 / 2023-12-31 | 4,690.3 | 346.1 | 4,344.2 | US$m | Reported at carrying value, net of discounts and issuance costs of 36.9; includes finance lease liabilities of 19.5 and securitization borrowings of 133.2 (European 86.7, U.S. 46.5); principal total not supplied because the 2023 annual report is not supplied |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 2,655.6 | 1,354.1 | 4,009.7 | US$m | Principal is the sum of the 2026 to 2030 rows of the maturity chart (calculation C19); reconciling items net to 1,354.1: debt maturing after 2030 of 1,281.8 that the chart leaves out, short-term borrowings of 99.6 that the schedule excludes, less unamortized discounts and issuance costs of 22.3, less a difference of 5.0 that the filing does not itemise (calculation C23) |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Quarterly dividend of USD 0.20 per share declared, estimated at USD 29.5 million | 2026-02-16 | 29.5 | 3,695.2 | 3.94 | US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 177: payable March 27, 2026 to holders of record March 13, 2026; the sources do not confirm payment before the merger closed; pro forma net debt is year-end net debt plus the estimate (calculation C25) and leverage is that over EBITDA (Reported) of 939.0 (calculation C26) |
| Merger completed: Sword Purchaser, LLC acquired the company, total purchase price USD 10.3 billion in cash | 2026-04-09 | Not supplied: the acquisition financing and its effect on net debt are not stated in the sources | Not supplied: the acquisition financing is not stated in the sources | Not supplied: the acquisition financing is not stated in the sources | US$m | STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 for the date; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 7 for the price; the debt commitment letter is referred to but its terms are not given, so nothing on net debt after closing is reflected |
| 1.573% senior secured notes due October 2026 mature, USD 600 million | Not supplied: the source states the month only (October 2026) | Not supplied: repayment or refinancing is not stated in the sources | Not supplied: repayment or refinancing is not stated in the sources | Not supplied: repayment or refinancing is not stated in the sources | US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 149–150: a scheduled maturity before the as-of date; a USD 600 million delayed draw term loan was available until 2026-10-15; whether it was used is not stated |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 5,359.8 | 1,134.3 | US$m | Net sales as reported; Adjusted EBITDA is the issuer-adjusted, non-GAAP Consolidated Adjusted EBITDA from continuing operations, the same identity in every row; fiscal years only |
| FY2024 / 2024-12-31 | 5,392.6 | 1,110.6 | US$m | Net sales as reported; Adjusted EBITDA is the issuer-adjusted, non-GAAP Consolidated Adjusted EBITDA from continuing operations, the same identity in every row; fiscal years only |
| FY2023 / 2023-12-31 | 5,488.9 | 1,106.6 | US$m | Net sales as reported; Adjusted EBITDA is the issuer-adjusted, non-GAAP Consolidated Adjusted EBITDA from continuing operations, the same identity in every row; fiscal years only |

Adjusted EBITDA is the issuer's own measure, which adds back restructuring, other special items and share-based compensation that EBITDA (Reported) keeps.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolving credit facility due October 2030 | 1 | Yes | 0 | 0.00 | US$m | Commitment of about 1,000, undrawn at 2025-12-31; the credit facilities are described as senior secured with collateral; obligors are the company and certain subsidiaries, with domestic subsidiaries guaranteeing; no ranking between the facility and the secured notes is stated, so rank 1 is by security class; cumulative leverage is the cumulative secured debt over EBITDA (Reported) of 939.0 |
| Term Loan A due October 2030 | 1 | Yes | 371.6 | 0.40 | US$m | Carrying value, variable rate; same security class and obligors as the revolver; outstanding principal is not stated |
| 1.573% Senior Secured Notes due October 2026 | 1 | Yes | 599.2 | 1.03 | US$m | Carrying value of notes with USD 600 million principal, described as senior secured with collateral; the issuer and guarantor scope is not described in the filing; matured before the as-of date |
| 6.125% Senior Notes due February 2028 | 2 | No | 769.4 | Not supplied: the 2027, 2029 and 2033 notes of 1,293.7 have no stated security or ranking, so debt through this rank cannot be totalled | US$m | Carrying value, principal 775.0, co-issued with Sealed Air Corporation (US); guaranteed on a senior unsecured basis by wholly owned domestic subsidiaries that guarantee the senior secured credit facilities |
| 7.250% Senior Notes due February 2031 | 2 | No | 421.8 | Not supplied: the 2027, 2029 and 2033 notes of 1,293.7 have no stated security or ranking, so debt through this rank cannot be totalled | US$m | Carrying value, principal 425.0, co-issued with Sealed Air Corporation (US); guaranteed on a senior unsecured basis by wholly owned domestic subsidiaries that guarantee the senior secured credit facilities, other than Sealed Air Corporation (US) |
| 6.500% Senior Notes due July 2032 | 2 | No | 396.6 | Not supplied: the 2027, 2029 and 2033 notes of 1,293.7 have no stated security or ranking, so debt through this rank cannot be totalled | US$m | Carrying value, principal 400.0, co-issued with Sealed Air Corporation (US); guaranteed on a senior unsecured basis by wholly owned domestic subsidiaries that guarantee the senior secured credit facilities, other than Sealed Air Corporation (US) |

The stack omits the 4.000% 2027, 5.000% 2029 and 6.875% 2033 senior notes, USD 1,293.7 million in all, and the securitization, credit-line and finance lease debt, because the filing does not state their ranking in a comparable form.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2025 | 939.0 | US$m | Opening measure: derived reported EBITDA; the Liquibox intangible amortization of 30.4 is already inside it through depreciation and amortization, so it is not a step |
| Share-based incentive compensation inside the issuer's depreciation and amortization line, excluding the accelerated amount | 36.1 | US$m | Calculated: share-based incentive compensation of 41.1 that the results release states is inside consolidated depreciation and amortization, less the accelerated amount of 5.0 shown below; it is added back in the issuer's depreciation and amortization line of 249.3 |
| Accelerated share-based compensation expense | 5.0 | US$m | Issuer special item; part of the 41.1 of share-based compensation, listed once |
| Restructuring charges | 39.9 | US$m | Issuer special item, as labelled |
| Other restructuring associated costs | 41.1 | US$m | Issuer special item, as labelled |
| Foreign currency exchange loss due to highly inflationary economies | 15.1 | US$m | Issuer special item, as labelled |
| Loss on debt redemption and refinancing activities | 5.8 | US$m | Issuer special item, as labelled |
| Contract terminations | 3.9 | US$m | Issuer special item, as labelled |
| Charges related to acquisition and divestiture activity | 12.4 | US$m | Issuer special item, as labelled |
| CEO severance and separation costs | 7.4 | US$m | Issuer special item, as labelled |
| Other Special Items | 28.6 | US$m | Issuer special item, as labelled |
| Adjusted EBITDA (issuer-adjusted), FY2025 | 1,134.3 | US$m | Closing measure: Consolidated Adjusted EBITDA from continuing operations as the issuer states it; impairment of debt investment is a dash for FY2025 and adds nothing |

The share-based compensation step relies on the results release stating that consolidated depreciation and amortization includes it, because the annual report does not say so.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 16 |
| Calculated | 10 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 25 |
| Fields total | 25 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 6 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2023 | 2023-01-01 | 2023-12-31 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_sealed-air-corp.htm.jsonl | Annual report (Form 10-K) with audited statements | FY2024, FY2023 and FY2022 | USD | millions | Sealed Air Corporation and consolidated subsidiaries | US GAAP | Tier 1, audited statements | FY2023 balance sheet and FY2024 debt schedule | Superseded for FY2024 by the 2025 annual report except where this module cites it for FY2023 |
| 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Annual report (Form 10-K) with audited statements | FY2025, FY2024 and FY2023 | USD | millions | Sealed Air Corporation and consolidated subsidiaries | US GAAP | Tier 1, audited statements | Statements, debt, liquidity, covenant and Adjusted EBITDA reconciliation | Pre-merger; balance sheet at 2025-12-31 |
| EX-99.1_2025-12-31_see.htm.jsonl | Results release (Exhibit 99.1) | Q4 2025 and FY2025 with 2024 comparatives | USD | millions | Sealed Air Corporation and consolidated subsidiaries | US GAAP with non-GAAP measures | Tier 2b, unaudited without auditor review | Cross-check of net debt, leverage and liquidity; share-based compensation inside depreciation and amortization | Preliminary tables; the annual report controls |
| STATUS_15-12G_2026-04-20_see.htm.jsonl | Status filing (Form 15) | Event of 2026-04-09 | Not applicable | Not applicable | Sealed Air Corporation | Not applicable | Tier 1, signed regulatory notice | Date the merger completed | Contains no financial figures |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Sealed Air Corporation (Delaware) | Issuer and registrant; borrower under the senior secured credit facilities | December 31 | USD | millions | Consolidated, including subsidiaries and consolidated securitization vehicles | US GAAP | FY2023, FY2024 and FY2025 annual; Q4 2025 three months from the results release |
| Sealed Air Corporation (US) | Co-issuer of the 6.125% 2028, 7.250% 2031 and 6.500% 2032 senior notes; wholly owned subsidiary | December 31 | USD | millions | Consolidated within the registrant; no separate statements supplied | US GAAP | Not supplied: no separate statements |
| Wholly owned domestic subsidiaries that guarantee the senior secured credit facilities | Guarantors; not named in the supplied pages | December 31 | USD | millions | Consolidated within the registrant | US GAAP | Not supplied: no guarantor statements |
| Sword Purchaser, LLC | Parent from 2026-04-09, affiliated with CD&R | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no statements | Not supplied: not stated | Not supplied: none |

Subsequent events flagged and kept out of period figures: dividend declared 2026-02-16, stockholder adoption of the merger agreement 2026-02-25, annual report signed 2026-03-02, merger completed 2026-04-09 and registration terminated 2026-04-20.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) derived from components | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Derivation | Not supplied: the issuer states no unadjusted EBITDA | 939.0; 946.9; 926.1 | Net earnings from continuing operations plus interest expense, net plus income tax provision plus depreciation and amortization, the method's default when EBITDA is not stated | FY2025; FY2024; FY2023 |
| FY2023 other receivables including advances and deposits | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Presentation | 94.2 other receivables and 72.8 advances and deposits (2024 annual report) | 167.0 | The 2025 annual report prints the combined line at 167.0 for FY2023 and 135.9 for FY2024 | FY2023; FY2024 |
| Total Debt at carrying value | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Aggregation | Short-term borrowings, current portion and long-term debt as three lines | 4,009.7; 4,403.9; 4,690.3 | Debt is balance-sheet carrying value; operating lease liabilities stay out and finance leases stay in | FY2025; FY2024; FY2023 |
| Signs of expenses and outflows | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Sign convention | Parentheses as printed | Minus sign | The three activity totals, foreign exchange effect, capital expenditures and dividends are signed with outflows negative; cash interest paid is the positive amount paid | FY2025; FY2024; FY2023 |
| Reporting currency and unit | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Unit | USD millions as printed | USD millions | One currency and unit throughout; the euro securitization borrowings enter at the USD equivalent the issuer states | FY2025; FY2024; FY2023 |

### T4.4 Income statement

| Line item | FY2025 | FY2024 | FY2023 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Net sales | 5,359.8 | 5,392.6 | 5,488.9 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Cost of sales | 3,763.0 | 3,767.5 | 3,847.6 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Gross profit | 1,596.8 | 1,625.1 | 1,641.3 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Selling, general and administrative expenses | 744.9 | 752.6 | 759.1 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Loss on disposal of long-lived assets and businesses, net | -26.8 | -16.2 | -49.3 | USD millions | Reported; a loss, shown negative | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Amortization expense of intangible assets | 59.5 | 62.6 | 62.7 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Restructuring charges | 39.9 | 57.8 | 15.6 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Operating profit | 725.7 | 735.9 | 754.6 | USD millions | Reported; used as EBIT | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Interest expense, net | -218.9 | -247.6 | -263.0 | USD millions | Reported; an expense, shown negative; net of interest income and of capitalized interest of 9.9, 12.6 and 13.1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 70, 110 |
| Interest income | 46.0 | 40.4 | 14.5 | USD millions | Reported inside the interest expense table and netted within interest expense, net; not a line on the face of the statement | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 70 |
| Other expense, net | -30.3 | -29.9 | -61.9 | USD millions | Reported; an expense, shown negative | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Earnings before income tax provision | 476.5 | 458.4 | 429.7 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Income tax provision | 35.3 | 188.9 | 90.4 | USD millions | Reported; total tax; cash taxes are in the cash flow information | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Net earnings from continuing operations | 441.2 | 269.5 | 339.3 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Gain (loss) on sale of discontinued operations, net of tax | 64.3 | -4.8 | 2.3 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Net earnings | 505.5 | 264.7 | 341.6 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Depreciation and amortization | 243.6 | 240.9 | 233.4 | USD millions | Reported in the cash flow statement | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 |
| Share-based incentive compensation | 39.5 | 31.6 | 33.0 | USD millions | Reported in the cash flow statement | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 |
| Pre-tax impact of Special Items (exceptionals) | 189.6 | 160.9 | 174.3 | USD millions | Issuer-stated non-GAAP add-backs in the Adjusted EBITDA reconciliation | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 |
| Basic earnings per share, continuing operations | 3.00 | 1.85 | 2.35 | USD per share | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Diluted earnings per share, continuing operations | 2.99 | 1.84 | 2.34 | USD per share | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Net earnings per share, basic | 3.44 | 1.82 | 2.37 | USD per share | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Net earnings per share, diluted | 3.43 | 1.81 | 2.36 | USD per share | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Weighted average shares outstanding, basic | 146.9 | 145.5 | 144.4 | shares millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| Weighted average shares outstanding, diluted | 147.5 | 146.0 | 144.9 | shares millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–110 |
| EBITDA (Reported) | 939.0 | 946.9 | 926.1 | USD millions | Calculated: net earnings from continuing operations + interest expense, net + income tax provision + depreciation and amortization; the issuer states no unadjusted EBITDA | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111 |
| EBITDA (Adjusted) | 1,134.3 | 1,110.6 | 1,106.6 | USD millions | Issuer-stated non-GAAP Consolidated Adjusted EBITDA from continuing operations; adds back Special Items and share-based incentive compensation (see the EBITDA bridge) | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 |

### Segment schedule

| Segment | Period | Net sales | Adjusted EBITDA | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Food | FY2025 | 3,594.7 | 829.1 | US$m | Reported; adjusted EBITDA margin 23.1% | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 77, 137 |
| Food | FY2024 | 3,582.6 | 807.7 | US$m | Reported; adjusted EBITDA margin 22.5% | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 77, 137 |
| Food | FY2023 | 3,519.7 | 775.0 | US$m | Reported; adjusted EBITDA margin 22.0% | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 77, 137 |
| Protective | FY2025 | 1,765.1 | 310.4 | US$m | Reported; adjusted EBITDA margin 17.6% | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 77, 137 |
| Protective | FY2024 | 1,810.0 | 313.5 | US$m | Reported; adjusted EBITDA margin 17.3% | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 77, 137 |
| Protective | FY2023 | 1,969.2 | 361.8 | US$m | Reported; adjusted EBITDA margin 18.4% | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 77, 137 |
| Corporate and eliminations | FY2025 | Not applicable | -5.2 | US$m | Corporate carries no net sales; segment sales add to consolidated net sales of 5,359.8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 77, 137 |
| Corporate and eliminations | FY2024 | Not applicable | -10.6 | US$m | Corporate carries no net sales; segment sales add to consolidated net sales of 5,392.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 77, 137 |
| Corporate and eliminations | FY2023 | Not applicable | -30.2 | US$m | Corporate carries no net sales; segment sales add to consolidated net sales of 5,488.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 77, 137 |

### T4.5 Cash flow statement

| Line item | FY2025 | FY2024 | FY2023 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Net earnings | 505.5 | 264.7 | 341.6 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Depreciation and amortization | 243.6 | 240.9 | 233.4 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Share-based incentive compensation | 39.5 | 31.6 | 33.0 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Profit sharing expense | 24.6 | 26.4 | 25.4 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Loss on debt redemption and refinancing activities | 5.8 | 6.8 | 13.2 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Impairment of debt investment | Not supplied: printed as a dash in the filing | 8.5 | Not supplied: printed as a dash in the filing | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Provision for allowance for credit losses on trade receivables | 1.1 | 1.3 | 3.1 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Provisions for inventory obsolescence | 22.7 | 18.6 | 18.3 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Deferred taxes, net | 73.3 | -16.4 | -27.8 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Net (gain) loss on disposal/sale of businesses | -64.3 | 4.8 | 52.5 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Other non-cash items | 31.7 | 27.3 | 25.2 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Trade receivables, net | -2.8 | -34.1 | 73.4 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Inventories, net | 6.2 | -4.3 | 136.0 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Income tax receivable/payable | -64.3 | 45.6 | -0.4 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Accounts payable | -29.3 | 28.1 | -122.8 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Tax refunds (payments and deposits) to resolve certain prior years' tax matters | Not supplied: printed as a dash in the filing | 54.0 | -195.0 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Other assets and liabilities | -165.3 | 24.2 | -92.9 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Net cash provided by operating activities | 628.0 | 728.0 | 516.2 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Capital expenditures | -169.5 | -220.2 | -244.2 | USD millions | Reported; an outflow, shown negative | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Proceeds related to sale of businesses and property and equipment, net | 0.3 | 1.0 | 10.2 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Businesses acquired in purchase transactions, net of cash acquired | Not supplied: printed as a dash in the filing | 4.2 | -1,160.7 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| (Payments) Proceeds associated with debt, equity, and equity method investments | -0.6 | -1.1 | 2.8 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Proceeds from cross-currency swaps | 5.3 | 3.1 | 1.6 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Settlement of foreign currency forward contracts | 30.9 | -19.5 | 12.1 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Net cash used in investing activities | -133.6 | -232.5 | -1,378.2 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Net (payments) proceeds of short-term borrowings | -51.6 | 5.2 | 131.6 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Proceeds from long-term debt | 15.4 | 416.2 | 1,833.4 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Payments of long-term debt | -383.0 | -710.5 | -958.4 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Dividends paid on common stock | -119.2 | -118.0 | -117.9 | USD millions | Reported; an outflow, shown negative | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Repurchases of common stock | Not supplied: printed as a dash in the filing | Not supplied: printed as a dash in the filing | -79.9 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Payments for debt modification/extinguishment costs and other | -5.8 | -7.6 | -22.3 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Impact of tax withholding on share-based compensation | -13.6 | -9.9 | -21.8 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Principal payments related to financing leases | -9.8 | -8.2 | -9.0 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Net cash (used in) provided by financing activities | -567.6 | -432.8 | 755.7 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Effect of foreign currency exchange rate changes on cash and cash equivalents | 46.7 | -37.0 | -3.7 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Net change during the period | -26.5 | 25.7 | -110.0 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Net Cash from Operating Activities | 628.0 | 728.0 | 516.2 | USD millions | Reported; the same figure as net cash provided by operating activities | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Net Cash from Investing Activities | -133.6 | -232.5 | -1,378.2 | USD millions | Reported; the same figure as net cash used in investing activities | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Net Cash from Financing Activities | -567.6 | -432.8 | 755.7 | USD millions | Reported; the same figure as net cash (used in) provided by financing activities | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Net Cash Change | -26.5 | 25.7 | -110.0 | USD millions | Reported; operating plus investing plus financing plus the foreign exchange effect | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Opening Cash | 371.8 | 346.1 | 456.1 | USD millions | Reported; cash, cash equivalents and restricted cash at the start of the period | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Closing Cash | 345.3 | 371.8 | 346.1 | USD millions | Reported; cash, cash equivalents and restricted cash at the end of the period; the balance sheet shows cash and cash equivalents of 344.0 in FY2025, restricted cash being 1.3 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Cash Interest Paid | 268.5 | 284.1 | 265.2 | USD millions | Reported; interest payments, net of amounts capitalized, in operating activities | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| FX Effect on Cash | 46.7 | -37.0 | -3.7 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| Income taxes paid, net of refunds | 172.2 | 109.7 | 357.7 | USD millions | Reported in the income taxes note; FY2023 includes 195.0 of payments and deposits to resolve prior-year tax matters | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 169 |
| Restructuring payments including associated costs | 79.8 | 58.1 | 19.2 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2024 | FY2023 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 344.0 | 371.8 | 346.1 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Trade receivables, net | 522.2 | 443.1 | 442.6 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Income tax receivables | 57.3 | 25.0 | 44.9 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Other receivables, including advances and deposits | 96.5 | 135.9 | 167.0 | USD millions | Reported; the 2025 annual report prints FY2024 as 135.9 and FY2023 as 167.0 (the 2024 annual report showed advances and deposits on a separate line) | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109, 138 |
| Inventories, net | 737.0 | 722.2 | 774.3 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Prepaid expenses and other current assets | 162.5 | 193.8 | 188.4 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Total current assets | 1,919.5 | 1,891.8 | 1,963.3 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Property and equipment, net | 1,423.1 | 1,397.9 | 1,416.4 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Goodwill | 2,900.8 | 2,878.5 | 2,892.5 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Identifiable intangible assets, net | 333.3 | 381.6 | 439.0 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Deferred taxes (asset) | 70.0 | 112.0 | 130.8 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Operating lease right-of-use assets | 82.4 | 98.0 | 86.5 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Other non-current assets | 283.7 | 262.3 | 272.1 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Total assets | 7,012.8 | 7,022.1 | 7,200.6 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Short-term borrowings | 99.6 | 140.5 | 140.7 | USD millions | Reported; debt | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Current portion of long-term debt | 625.2 | 64.6 | 35.7 | USD millions | Reported; debt; includes the 1.573% senior secured notes due October 2026 and current finance lease liabilities in FY2025 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Current portion of operating lease liabilities | 30.1 | 29.7 | 29.2 | USD millions | Reported; not debt | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Accounts payable | 769.4 | 771.0 | 764.6 | USD millions | Reported; includes supply chain finance obligations of 147.1 (FY2025) and 161.1 (FY2024) | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 146 |
| Accrued restructuring costs | 33.3 | 42.6 | 23.1 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Income tax payable | 20.1 | 53.3 | 28.7 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Other current liabilities | 523.7 | 533.8 | 487.0 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Total current liabilities | 2,101.4 | 1,635.5 | 1,509.0 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Long-term debt, less current portion | 3,284.9 | 4,198.8 | 4,513.9 | USD millions | Reported; debt; net of unamortized discounts and issuance costs | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Long-term operating lease liabilities, less current portion | 60.3 | 74.8 | 66.7 | USD millions | Reported; not debt | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Deferred taxes (liability) | 41.6 | 26.1 | 35.8 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Other non-current liabilities | 287.1 | 462.4 | 525.7 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Total liabilities | 5,775.3 | 6,397.6 | 6,651.1 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Common stock | 15.5 | 15.5 | 15.4 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Additional paid-in capital | 1,461.1 | 1,445.7 | 1,429.5 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Retained earnings | 1,029.4 | 643.4 | 496.5 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Common stock in treasury | -366.6 | -404.2 | -436.4 | USD millions | Reported; shown negative | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Accumulated other comprehensive loss, net of taxes | -901.9 | -1,075.9 | -955.5 | USD millions | Reported; shown negative | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Total stockholders' equity | 1,237.5 | 624.5 | 549.5 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Total liabilities and stockholders' equity | 7,012.8 | 7,022.1 | 7,200.6 | USD millions | Reported | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Total Assets | 7,012.8 | 7,022.1 | 7,200.6 | USD millions | Reported; the same figure as total assets | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Total Liabilities | 5,775.3 | 6,397.6 | 6,651.1 | USD millions | Reported; the same figure as total liabilities | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Total Equity | 1,237.5 | 624.5 | 549.5 | USD millions | Reported; stockholders' equity, the balance sheet shows no non-controlling interest or temporary equity | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |
| Total Debt | 4,009.7 | 4,403.9 | 4,690.3 | USD millions | Calculated: short-term borrowings + current portion of long-term debt + long-term debt, at carrying value net of discounts and issuance costs; includes finance lease liabilities and securitization borrowings carried as short-term borrowings; excludes operating lease liabilities | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 148 |
| Cash & Equivalents | 344.0 | 371.8 | 346.1 | USD millions | Reported; cash and cash equivalents, excluding restricted cash | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–105 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolving credit facility | Revolving credit facility | 0 | Not applicable | 0 | 1,000 | Secured by collateral granted to the lenders under the senior secured credit facilities; collateral not itemized | Senior secured; no ranking against other debt stated | USD | 0 | Not applicable | Not supplied: margin not stated | floating | Not supplied: the filing names SOFR in the amendment but does not map it to this facility | Not supplied: not stated | Not supplied: not stated | 2030-10-31 | 0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 45, 84, 150 |
| Delayed draw term loan A (available to 2026-10-15) | Term loan A, delayed draw | Not supplied: not separately stated; any amount drawn is not shown | Not supplied: not stated | Not supplied: whether drawn at year-end is not stated | 600 | Secured by collateral granted to the lenders under the senior secured credit facilities; collateral not itemized | Senior secured; no ranking against other debt stated | USD or EUR | Not supplied: not separately stated | Not applicable | Not supplied: margin not stated | floating | Not supplied: not stated for this facility | Not supplied: not stated | Not supplied: not stated | 2030-10-31 | Not supplied: not stated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 150 |
| Term Loan A due October 2030 | Term loan A, USD and GBP tranches | 371.6 | Not supplied: year-end principal not stated; about 445 USD and 25 GBP at amendment | Not supplied: not stated | Not supplied: not stated | Secured by collateral granted to the lenders under the senior secured credit facilities; collateral not itemized | Senior secured; no ranking against other debt stated | USD and GBP | 371.6 | Not applicable | Not supplied: margin not stated | floating | Not supplied: the filing names SOFR in the amendment but does not map it to this facility | Not supplied: not stated | Not supplied: not stated | 2030-10-31 | Not supplied: not stated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 45, 148, 150 |
| 1.573% Senior Secured Notes due October 2026 | Senior secured notes | 599.2 | 600 | Not applicable | Not applicable | Secured: the filing says note holders could proceed against the collateral granted to them; collateral not itemized | Senior secured; no ranking against other debt stated | USD | 599.2 | Not applicable | 1.573% | Not supplied: the filing states the rate, not its type | Not applicable | Not applicable | Not applicable | 2026-10 | 0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148–149, 160 |
| 4.000% Senior Notes due December 2027 | Senior notes | 423.7 | Not supplied: principal not stated | Not applicable | Not applicable | Not supplied: the filing does not describe its security | Not supplied: not stated | USD | 423.7 | Not applicable | 4.000% | Not supplied: the filing states the rate, not its type | Not applicable | Not applicable | Not applicable | 2027-12 | Not supplied: not stated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148, 160 |
| 6.125% Senior Notes due February 2028 | Senior notes | 769.4 | 775.0 | Not applicable | Not applicable | Unsecured: guaranteed on a senior unsecured basis by wholly owned domestic subsidiaries that guarantee the senior secured credit facilities | Senior unsecured, as the guarantee is described | USD | 769.4 | Not applicable | 6.125% | fixed | Not applicable | Not applicable | Not applicable | 2028-02-01 | 0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148, 153 |
| 5.000% Senior Notes due April 2029 | Senior notes | 422.8 | Not supplied: principal not stated | Not applicable | Not applicable | Not supplied: the filing does not describe its security | Not supplied: not stated | USD | 422.8 | Not applicable | 5.000% | Not supplied: the filing states the rate, not its type | Not applicable | Not applicable | Not applicable | 2029-04 | Not supplied: not stated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148, 160 |
| 7.250% Senior Notes due February 2031 | Senior notes | 421.8 | 425.0 | Not applicable | Not applicable | Unsecured: guaranteed on a senior unsecured basis by wholly owned domestic subsidiaries that guarantee the senior secured credit facilities, other than Sealed Air Corporation (US) | Senior unsecured, as the guarantee is described | USD | 421.8 | Not applicable | 7.250% | fixed | Not applicable | Not applicable | Not applicable | 2031-02-15 | 0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148, 152 |
| 6.500% Senior Notes due July 2032 | Senior notes | 396.6 | 400.0 | Not applicable | Not applicable | Unsecured: guaranteed on a senior unsecured basis by wholly owned domestic subsidiaries that guarantee the senior secured credit facilities, other than Sealed Air Corporation (US) | Senior unsecured, as the guarantee is described | USD | 396.6 | Not applicable | 6.500% | fixed | Not applicable | Not applicable | Not applicable | 2032-07-15 | 0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148, 151 |
| 6.875% Senior Notes due July 2033 | Senior notes | 447.2 | Not supplied: principal not stated | Not applicable | Not applicable | Not supplied: the filing does not describe its security | Not supplied: not stated | USD | 447.2 | Not applicable | 6.875% | Not supplied: the filing states the rate, not its type | Not applicable | Not applicable | Not applicable | 2033-07 | Not supplied: not stated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148, 160 |
| Finance lease liabilities (current 6.9, long-term 12.0) | Finance leases | 18.9 | Not supplied: undiscounted payments are 24.7 | Not applicable | Not applicable | Not supplied: not stated | Not supplied: not stated | USD | 18.9 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not applicable | Not applicable | Not applicable | Not supplied: payments run to beyond 2030 | Not supplied: payments of 8.1 in 2026 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 133, 149 |
| European accounts receivable securitization program | Securitization borrowing in short-term borrowings | 93.7 | Not supplied: not stated separately from the EUR amount | 93.7 | 94.0 | First priority perfected security interest in the receivables held by the vehicle | Not supplied: not stated | EUR | 93.7 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: the program expires annually and is renewable; no date stated | Not applicable | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 143–144 |
| Short-term borrowings under various lines of credit | Lines of credit to subsidiaries | 5.9 | Not supplied: not stated | 5.9 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | USD | 5.9 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 85, 148 |
| Other borrowings not itemized in the debt note | Other foreign and domestic borrowings | 38.9 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 38.9 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148, 160 |
| U.S. accounts receivable securitization program (off balance sheet from December 2025) | Receivables sold, derecognized | Not applicable: sold receivables are derecognized, not carried as borrowings | Not applicable | 50.0 | 105.0 | Unsold receivables of 140.4 pledged by the special purpose entity as collateral | Not supplied: not stated | USD | Not applicable: not carried as debt | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: the program expires annually and is renewable; no date stated | Not applicable | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 142–143 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| LTM EBITDA (Reported) | LTM | Not supplied: the latest period is the full year; no interim stub exists | Not supplied: no interim statements are supplied after 2025-12-31 | Not supplied: no interim statements are supplied | Not supplied: no LTM is constructed; FY2025 stands as the latest twelve months | Not Available | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Only the fourth quarter 2025 three-month columns of the release are available, and a reported fiscal year is never replaced by a derived period |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 4,009.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; calculation C4 | 939.0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111; calculation C1 | FY2025 / 2025-12-31 | USD | US$m | 4.27 | Calculated | 1 audited statements, EBITDA derived | Carrying value, not principal; EBITDA derived because the issuer states no unadjusted figure |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,665.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; calculation C7 | 939.0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111; calculation C1 | FY2025 / 2025-12-31 | USD | US$m | 3.90 | Calculated | 1 audited statements, EBITDA derived | Cash is unrestricted cash and equivalents |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 939.0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111; calculation C1 | 268.5 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 | FY2025 / 2025-12-31 | USD | US$m | 3.50 | Calculated | 1 audited statements, EBITDA derived | Cash interest paid, net of amounts capitalized; not the accrued expense |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 4,009.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; calculation C4 | 1,134.3 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | FY2025 / 2025-12-31 | USD | US$m | 3.53 | Calculated | 1 audited statements plus issuer non-GAAP | Issuer add-backs not independently accepted |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 3,665.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; calculation C7 | 1,134.3 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | FY2025 / 2025-12-31 | USD | US$m | 3.23 | Calculated | 1 audited statements plus issuer non-GAAP | Rounds to the issuer's stated 3.2x |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1,134.3 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | 268.5 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 | FY2025 / 2025-12-31 | USD | US$m | 4.22 | Calculated | 1 audited statements plus issuer non-GAAP | Issuer add-backs not independently accepted |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 4,403.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; calculation C5 | 946.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111; calculation C2 | FY2024 / 2024-12-31 | USD | US$m | 4.65 | Calculated | 1 audited statements, EBITDA derived | Carrying value, not principal; EBITDA derived because the issuer states no unadjusted figure |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 4,032.1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; calculation C8 | 946.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111; calculation C2 | FY2024 / 2024-12-31 | USD | US$m | 4.26 | Calculated | 1 audited statements, EBITDA derived | Cash is unrestricted cash and equivalents |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 946.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111; calculation C2 | 284.1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 | FY2024 / 2024-12-31 | USD | US$m | 3.33 | Calculated | 1 audited statements, EBITDA derived | Cash interest paid, net of amounts capitalized; not the accrued expense |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 4,403.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; calculation C5 | 1,110.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | FY2024 / 2024-12-31 | USD | US$m | 3.97 | Calculated | 1 audited statements plus issuer non-GAAP | Issuer add-backs not independently accepted |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 4,032.1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109; calculation C8 | 1,110.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | FY2024 / 2024-12-31 | USD | US$m | 3.63 | Calculated | 1 audited statements plus issuer non-GAAP | Rounds to the issuer's stated 3.6x |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1,110.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | 284.1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 | FY2024 / 2024-12-31 | USD | US$m | 3.91 | Calculated | 1 audited statements plus issuer non-GAAP | Issuer add-backs not independently accepted |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 4,690.3 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104; calculation C6 | 926.1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111; calculation C3 | FY2023 / 2023-12-31 | USD | US$m | 5.06 | Calculated | 1 audited statements, EBITDA derived | Carrying value, not principal; EBITDA derived because the issuer states no unadjusted figure |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 4,344.2 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104; calculation C9 | 926.1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111; calculation C3 | FY2023 / 2023-12-31 | USD | US$m | 4.69 | Calculated | 1 audited statements, EBITDA derived | Cash is unrestricted cash and equivalents |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 926.1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111; calculation C3 | 265.2 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 | FY2023 / 2023-12-31 | USD | US$m | 3.49 | Calculated | 1 audited statements, EBITDA derived | Cash interest paid, net of amounts capitalized; not the accrued expense |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 4,690.3 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104; calculation C6 | 1,106.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | FY2023 / 2023-12-31 | USD | US$m | 4.24 | Calculated | 1 audited statements plus issuer non-GAAP | Issuer add-backs not independently accepted |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 4,344.2 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104; calculation C9 | 1,106.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | FY2023 / 2023-12-31 | USD | US$m | 3.93 | Calculated | 1 audited statements plus issuer non-GAAP | Issuer add-backs not independently accepted |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1,106.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | 265.2 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 | FY2023 / 2023-12-31 | USD | US$m | 4.17 | Calculated | 1 audited statements plus issuer non-GAAP | Issuer add-backs not independently accepted |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) less capital expenditures) / cash interest paid | 769.5 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–112; calculation C1 | 268.5 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 | FY2025 / 2025-12-31 | USD | US$m | 2.87 | Calculated | 1 audited statements, EBITDA derived | Times; excludes taxes and working capital |
| FFO / debt | Funds from operations / Total Debt | Not supplied: the issuer states no funds from operations and the method gives no formula | Not supplied: no source | 4,009.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | Not supplied: funds from operations is not available | Not Calculable | Insufficient | No FFO is stated in the sources |
| FCF conversion | Free cash flow / EBITDA (Reported) | 458.5 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111; calculation C10 | 939.0 | calculation C1 | FY2025 / 2025-12-31 | USD | US$m | 0.4883 | Calculated | 1 audited statements, EBITDA derived | After interest and taxes; before dividends |
| CFO / debt | Net cash from operating activities / Total Debt | 628.0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 | 4,009.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 0.1566 | Calculated | 1 audited statements | Fraction, not a percentage |
| FCF / debt | Free cash flow / Total Debt | 458.5 | calculation C10 | 4,009.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 0.1143 | Calculated | 1 audited statements | Fraction, not a percentage |
| FCF after dividends / debt | Free cash flow after dividends / Total Debt | 339.3 | calculation C13 | 4,009.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 0.0846 | Calculated | 1 audited statements | Dividends only; the 79.9 of share repurchases in FY2023 is not deducted |
| Liquidity / debt | (Cash + undrawn revolver) / Total Debt | 1,344.0 | calculation C16 | 4,009.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 0.3352 | Calculated | 1 audited statements | Excludes the delayed draw term loan and securitization availability |
| Capex / revenue | Capital expenditures / Net sales | 169.5 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 | 5,359.8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 0.0316 | Calculated | 1 audited statements | Total capex; the maintenance and growth split is not stated |
| Gross margin | Gross profit / Net sales | 1,596.8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | 5,359.8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 0.2979 | Calculated | 1 audited statements | Fraction, not a percentage |
| EBITDA margin (reported) | EBITDA (Reported) / Net sales | 939.0 | calculation C1 | 5,359.8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 0.1752 | Calculated | 1 audited statements, EBITDA derived | Fraction, not a percentage |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 1,134.3 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | 5,359.8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 0.2116 | Calculated | 1 audited statements plus issuer non-GAAP | Fraction; the issuer prints 21.2%, 20.6% and 20.2% |
| EBIT margin | Operating profit / Net sales | 725.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 110 | 5,359.8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 0.1354 | Calculated | 1 audited statements | Fraction, not a percentage |
| Net income margin | Net earnings from continuing operations / Net sales | 441.2 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 110 | 5,359.8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 0.0823 | Calculated | 1 audited statements | Continuing operations; FY2024 includes a deferred tax asset write-off |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) less capital expenditures) / cash interest paid | 726.7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–112; calculation C2 | 284.1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 | FY2024 / 2024-12-31 | USD | US$m | 2.56 | Calculated | 1 audited statements, EBITDA derived | Times; excludes taxes and working capital |
| FFO / debt | Funds from operations / Total Debt | Not supplied: the issuer states no funds from operations and the method gives no formula | Not supplied: no source | 4,403.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | Not supplied: funds from operations is not available | Not Calculable | Insufficient | No FFO is stated in the sources |
| FCF conversion | Free cash flow / EBITDA (Reported) | 507.8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111; calculation C11 | 946.9 | calculation C2 | FY2024 / 2024-12-31 | USD | US$m | 0.5363 | Calculated | 1 audited statements, EBITDA derived | After interest and taxes; before dividends |
| CFO / debt | Net cash from operating activities / Total Debt | 728.0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 | 4,403.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 0.1653 | Calculated | 1 audited statements | Fraction, not a percentage |
| FCF / debt | Free cash flow / Total Debt | 507.8 | calculation C11 | 4,403.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 0.1153 | Calculated | 1 audited statements | Fraction, not a percentage |
| FCF after dividends / debt | Free cash flow after dividends / Total Debt | 389.8 | calculation C14 | 4,403.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 0.0885 | Calculated | 1 audited statements | Dividends only; the 79.9 of share repurchases in FY2023 is not deducted |
| Liquidity / debt | (Cash + undrawn revolver) / Total Debt | 1,371.8 | calculation C17 | 4,403.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 0.3115 | Calculated | 1 audited statements | Excludes the delayed draw term loan and securitization availability |
| Capex / revenue | Capital expenditures / Net sales | 220.2 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 | 5,392.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 0.0408 | Calculated | 1 audited statements | Total capex; the maintenance and growth split is not stated |
| Gross margin | Gross profit / Net sales | 1,625.1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | 5,392.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 0.3014 | Calculated | 1 audited statements | Fraction, not a percentage |
| EBITDA margin (reported) | EBITDA (Reported) / Net sales | 946.9 | calculation C2 | 5,392.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 0.1756 | Calculated | 1 audited statements, EBITDA derived | Fraction, not a percentage |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 1,110.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | 5,392.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 0.2059 | Calculated | 1 audited statements plus issuer non-GAAP | Fraction; the issuer prints 21.2%, 20.6% and 20.2% |
| EBIT margin | Operating profit / Net sales | 735.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 110 | 5,392.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 0.1365 | Calculated | 1 audited statements | Fraction, not a percentage |
| Net income margin | Net earnings from continuing operations / Net sales | 269.5 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 110 | 5,392.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 0.0500 | Calculated | 1 audited statements | Continuing operations; FY2024 includes a deferred tax asset write-off |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) less capital expenditures) / cash interest paid | 681.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–112; calculation C3 | 265.2 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 112 | FY2023 / 2023-12-31 | USD | US$m | 2.57 | Calculated | 1 audited statements, EBITDA derived | Times; excludes taxes and working capital |
| FFO / debt | Funds from operations / Total Debt | Not supplied: the issuer states no funds from operations and the method gives no formula | Not supplied: no source | 4,690.3 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104 | FY2023 / 2023-12-31 | USD | US$m | Not supplied: funds from operations is not available | Not Calculable | Insufficient | No FFO is stated in the sources |
| FCF conversion | Free cash flow / EBITDA (Reported) | 272.0 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111; calculation C12 | 926.1 | calculation C3 | FY2023 / 2023-12-31 | USD | US$m | 0.2937 | Calculated | 1 audited statements, EBITDA derived | After interest and taxes; before dividends |
| CFO / debt | Net cash from operating activities / Total Debt | 516.2 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 | 4,690.3 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104 | FY2023 / 2023-12-31 | USD | US$m | 0.1101 | Calculated | 1 audited statements | Fraction, not a percentage |
| FCF / debt | Free cash flow / Total Debt | 272.0 | calculation C12 | 4,690.3 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104 | FY2023 / 2023-12-31 | USD | US$m | 0.0580 | Calculated | 1 audited statements | Fraction, not a percentage |
| FCF after dividends / debt | Free cash flow after dividends / Total Debt | 154.1 | calculation C15 | 4,690.3 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104 | FY2023 / 2023-12-31 | USD | US$m | 0.0329 | Calculated | 1 audited statements | Dividends only; the 79.9 of share repurchases in FY2023 is not deducted |
| Liquidity / debt | (Cash + undrawn revolver) / Total Debt | 1,346.1 | calculation C18 | 4,690.3 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104 | FY2023 / 2023-12-31 | USD | US$m | 0.2870 | Calculated | 1 audited statements | Excludes the delayed draw term loan and securitization availability |
| Capex / revenue | Capital expenditures / Net sales | 244.2 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 | 5,488.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2023 / 2023-12-31 | USD | US$m | 0.0445 | Calculated | 1 audited statements | Total capex; the maintenance and growth split is not stated |
| Gross margin | Gross profit / Net sales | 1,641.3 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | 5,488.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2023 / 2023-12-31 | USD | US$m | 0.2990 | Calculated | 1 audited statements | Fraction, not a percentage |
| EBITDA margin (reported) | EBITDA (Reported) / Net sales | 926.1 | calculation C3 | 5,488.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2023 / 2023-12-31 | USD | US$m | 0.1687 | Calculated | 1 audited statements, EBITDA derived | Fraction, not a percentage |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 1,106.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | 5,488.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2023 / 2023-12-31 | USD | US$m | 0.2016 | Calculated | 1 audited statements plus issuer non-GAAP | Fraction; the issuer prints 21.2%, 20.6% and 20.2% |
| EBIT margin | Operating profit / Net sales | 754.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 110 | 5,488.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2023 / 2023-12-31 | USD | US$m | 0.1375 | Calculated | 1 audited statements | Fraction, not a percentage |
| Net income margin | Net earnings from continuing operations / Net sales | 339.3 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 110 | 5,488.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2023 / 2023-12-31 | USD | US$m | 0.0618 | Calculated | 1 audited statements | Continuing operations; FY2024 includes a deferred tax asset write-off |
| Revenue growth | Net sales FY2025 / Net sales FY2024 - 1 | 5,359.8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | 5,392.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | -0.0061 | Calculated | 1 audited statements | Reported, not constant currency |
| EBITDA growth (reported) | EBITDA (Reported) FY2025 / EBITDA (Reported) FY2024 - 1 | 939.0 | calculation C1 | 946.9 | calculation C2 | FY2025 / 2025-12-31 | USD | US$m | -0.0083 | Calculated | 1 audited statements, EBITDA derived | Fraction, not a percentage |
| Adjusted EBITDA growth | EBITDA (Adjusted) FY2025 / EBITDA (Adjusted) FY2024 - 1 | 1,134.3 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | 1,110.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | FY2025 / 2025-12-31 | USD | US$m | 0.0213 | Calculated | 1 audited statements plus issuer non-GAAP | Fraction, not a percentage |
| Revenue growth | Net sales FY2024 / Net sales FY2023 - 1 | 5,392.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | 5,488.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | -0.0175 | Calculated | 1 audited statements | Reported, not constant currency |
| EBITDA growth (reported) | EBITDA (Reported) FY2024 / EBITDA (Reported) FY2023 - 1 | 946.9 | calculation C2 | 926.1 | calculation C3 | FY2024 / 2024-12-31 | USD | US$m | 0.0225 | Calculated | 1 audited statements, EBITDA derived | Fraction, not a percentage |
| Adjusted EBITDA growth | EBITDA (Adjusted) FY2024 / EBITDA (Adjusted) FY2023 - 1 | 1,110.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | 1,106.6 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 | FY2024 / 2024-12-31 | USD | US$m | 0.0036 | Calculated | 1 audited statements plus issuer non-GAAP | Fraction, not a percentage |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2025 | FY2024 | FY2023 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|
| Segment, period flow | Food net sales (US$m) | 3,594.7 | 3,582.6 | 3,519.7 | Rising | Share of net sales 67.1%, 66.4% and 64.1% as printed |
| Segment, period flow | Protective net sales (US$m) | 1,765.1 | 1,810.0 | 1,969.2 | Falling | Share of net sales 32.9%, 33.6% and 35.9% as printed |
| Segment, period flow | Food Adjusted EBITDA (US$m) | 829.1 | 807.7 | 775.0 | Rising | Issuer-stated segment measure |
| Segment, period flow | Protective Adjusted EBITDA (US$m) | 310.4 | 313.5 | 361.8 | Falling | Issuer-stated segment measure |
| Segment, period flow | Corporate Adjusted EBITDA (US$m) | -5.2 | -10.6 | -30.2 | Improving | Cost line, shown negative |
| Issuer-reported margin, rate | Food Adjusted EBITDA margin (%) | 23.1 | 22.5 | 22.0 | Rising | As printed by the issuer |
| Issuer-reported margin, rate | Protective Adjusted EBITDA margin (%) | 17.6 | 17.3 | 18.4 | Mixed | As printed by the issuer |
| Issuer-reported margin, rate | Consolidated Adjusted EBITDA margin (%) | 21.2 | 20.6 | 20.2 | Rising | As printed by the issuer |
| Operating, period flow | Net sales change from price (US$m) | -0.1 | -118.8 | Not supplied: the 2025 annual report compares 2025 with 2024 and 2024 with 2023 only | Stabilising | Price was flat in 2025 after a decline in 2024 |
| Operating, period flow | Net sales change from volume (US$m) | -65.4 | 34.7 | Not supplied: the 2025 annual report compares 2025 with 2024 and 2024 with 2023 only | Falling | Volume fell in 2025 after a rise in 2024 |
| Cash, period flow | Cash taxes paid, net of refunds (US$m) | 172.2 | 109.7 | 357.7 | Volatile | FY2023 includes 195.0 of payments and deposits to resolve prior-year tax matters; the filing expects about 155 of tax payments in 2026 |
| Cash, period flow | Gross receivables factored (US$m) | 628.7 | 721.7 | 749.7 | Falling | Part of working capital funding outside debt; fees of 8.2, 11.3 and 12.3 |
| Cash, period end | Supply chain finance obligations in accounts payable (US$m) | 147.1 | 161.1 | Not supplied: the 2023 balance is not in the supplied pages | Falling | Non-debt funding float inside payables |
| Cash, period flow | Restructuring payments including associated costs (US$m) | 79.8 | 58.1 | 19.2 | Rising | Cash cost of the CTO2Grow program, which concluded in the third quarter of 2025 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA as the primary denominator, derived from net earnings, interest, tax and depreciation and amortization | Adjusted EBITDA adds back Special Items and share-based incentive compensation | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61; EX-99.1_2025-12-31_see.htm.jsonl, pages 11–12 | FY2025; FY2024; FY2023 | FY2025 difference 195.3; net leverage 3.90x on reported against 3.23x on adjusted | Fundamental credit; Earnings changes; Liquidity | Carry both, labelled; the chart tables use reported EBITDA and the register keeps the adjusted twins |
| Net leverage | Net debt over EBITDA (Reported), net debt at carrying value | Net debt over trailing twelve month Adjusted EBITDA, 3.2x for FY2025 and 3.6x for FY2024 | EX-99.1_2025-12-31_see.htm.jsonl, pages 5, 13 | FY2025; FY2024 | About 0.7x in FY2025 | Fundamental credit; Ratings & triggers | Quote the issuer figure only with its definition |
| Covenant leverage | Not defined by the method | Maximum leverage ratio of debt to EBITDA of 4.50 to 1.00; 2.95 to 1.00 at FY2025 and 3.37 to 1.00 at FY2024; the risk factors call it a specified net leverage ratio | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 43, 85; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 79 | FY2025; FY2024 | Whether the ratio is gross or net, and the covenant EBITDA definition, are not stated | Legal & covenants; Covenant capacity | Do not infer covenant headroom from the metric computed here |
| Undrawn committed facilities | Committed undrawn capacity, net of letters of credit | Annual report: 1,000 revolver available; lines-of-credit table: unused lines 1,197.0 of which committed share is not split, committed lines in total 1,199.0; release: about 1,060 of unused committed lines | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 84, 154; EX-99.1_2025-12-31_see.htm.jsonl, page 5 | FY2025 | Between 60 and 197 on a base of 1,000 | Liquidity | Chart uses 1,000; the other figures stay in the conflict until the committed split is supplied |
| Debt, carrying value against principal | Carrying value is Total Debt; principal is kept separately | Maturity schedule principal of long-term debt 3,937.4 against carrying 3,910.1 for the current portion and long-term debt | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109, 148–149 | FY2025 | Difference 27.3: discounts and issuance costs 22.3 and 5.0 not itemized | Refinancing & LME; Fundamental credit | Use carrying value; the principal total appears in the reconciliation |
| Receivables securitization | Secured borrowings are debt | The U.S. program from December 2025 sells receivables and derecognizes 50.0, with proceeds in operating activities; the 50.0 U.S. borrowing at 2024-12-31 was in short-term borrowings | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 83, 142–143 | FY2025 against FY2024 | 50.0, about 1.2% of FY2025 total debt | Fundamental credit; Liquidity | Total debt is not comparable across the two dates without this note |
| Cash | Unrestricted cash and equivalents | The cash flow statement closes on cash, cash equivalents and restricted cash of 345.3 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112, 120 | FY2025 | 1.3 of restricted cash | Liquidity | Net debt uses 344.0 |
| Interest | Cash interest paid for coverage | Interest expense, net of 218.9 is after interest income of 46.0 and capitalized interest of 9.9 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 70, 112 | FY2025 | Cash paid exceeds expense by 49.6 | Fundamental credit | Coverage uses cash interest paid |
| Other receivables | One presentation across periods | The 2024 annual report shows advances and deposits on a separate line; the 2025 annual report combines them | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109, 138; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104 | FY2024; FY2023 | Presentation only; totals unchanged | Financial foundation | Combined line used throughout |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage, coverage and liquidity as at the FY2025 balance sheet | Ready with Limitations | Pre-merger balance sheet; EBITDA derived; undrawn facilities differ between sources | Quote each figure with its date and definition |
| Three-year trend in leverage and cash generation | Ready | FY2023 balance sheet comes from the 2024 annual report | None |
| Credit position after the merger completed on 2026-04-09 | Not Ready | No post-closing statements or financing terms in the sources | Obtain post-closing financial statements and the debt schedule |
| Debt maturity profile beyond 2030 | Ready with Limitations | The filing gives one total for maturities after 2030 | Obtain note-level principal for the 2031 to 2033 notes if a year-by-year wall is needed |
| Instrument-level terms and ranking | Ready with Limitations | Principal, security and ranking not stated for three note series; margins and drawn amounts not stated for the credit facilities | Obtain the indentures and the October 2025 credit agreement |

## Calculations

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | EBITDA (Reported), FY2025: net earnings from continuing operations plus interest expense, net plus income tax provision plus depreciation and amortization | 441.2 + 218.9 + 35.3 + 243.6 | 939.0 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111 |
| C2 | EBITDA (Reported), FY2024: net earnings from continuing operations plus interest expense, net plus income tax provision plus depreciation and amortization | 269.5 + 247.6 + 188.9 + 240.9 | 946.9 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111 |
| C3 | EBITDA (Reported), FY2023: net earnings from continuing operations plus interest expense, net plus income tax provision plus depreciation and amortization | 339.3 + 263.0 + 90.4 + 233.4 | 926.1 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 110–111 |
| C4 | Total debt at carrying value, FY2025: short-term borrowings plus current portion of long-term debt plus long-term debt | 99.6 + 625.2 + 3,284.9 | 4,009.7 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| C5 | Total debt at carrying value, FY2024: short-term borrowings plus current portion of long-term debt plus long-term debt | 140.5 + 64.6 + 4,198.8 | 4,403.9 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| C6 | Total debt at carrying value, FY2023: short-term borrowings plus current portion of long-term debt plus long-term debt | 140.7 + 35.7 + 4,513.9 | 4,690.3 US$m | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 104 |
| C7 | Net debt, FY2025: total debt less cash and cash equivalents | 4,009.7 - 344.0 | 3,665.7 US$m | calculation C4 |
| C8 | Net debt, FY2024: total debt less cash and cash equivalents | 4,403.9 - 371.8 | 4,032.1 US$m | calculation C5 |
| C9 | Net debt, FY2023: total debt less cash and cash equivalents | 4,690.3 - 346.1 | 4,344.2 US$m | calculation C6 |
| C10 | Free cash flow, FY2025: net cash from operating activities less capital expenditures | 628.0 - 169.5 | 458.5 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 |
| C11 | Free cash flow, FY2024: net cash from operating activities less capital expenditures | 728.0 - 220.2 | 507.8 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 |
| C12 | Free cash flow, FY2023: net cash from operating activities less capital expenditures | 516.2 - 244.2 | 272.0 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 |
| C13 | Free cash flow after dividends, FY2025: free cash flow less dividends paid on common stock | 458.5 - 119.2 | 339.3 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| C14 | Free cash flow after dividends, FY2024: free cash flow less dividends paid on common stock | 507.8 - 118.0 | 389.8 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| C15 | Free cash flow after dividends, FY2023: free cash flow less dividends paid on common stock | 272.0 - 117.9 | 154.1 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112 |
| C16 | Cash plus undrawn revolving credit facility, FY2025 | 344.0 + 1,000.0 | 1,344.0 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 84 |
| C17 | Cash plus undrawn revolving credit facility, FY2024 | 371.8 + 1,000.0 | 1,371.8 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 84 |
| C18 | Cash plus undrawn revolving credit facility, FY2023 | 346.1 + 1,000.0 | 1,346.1 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 84 |
| C19 | Contractual principal in the debt maturities table, 2026 to 2030 (the ladder) | 626.4 + 445.9 + 791.3 + 452.1 + 339.9 | 2,655.6 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 149 |
| C20 | Scheduled principal of long-term debt including the current portion and finance leases, all years; the filing states the same total | 2,655.6 + 1,281.8 | 3,937.4 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 149 |
| C21 | Carrying value of long-term debt including the current portion, 2025-12-31 | 625.2 + 3,284.9 | 3,910.1 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| C22 | Difference between scheduled principal and carrying value not explained by discounts and issuance costs | 3,937.4 - 3,910.1 - 22.3 | 5.0 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148–149 |
| C23 | Reconciling items, 2025-12-31: debt maturing after 2030 plus short-term borrowings less unamortized discounts and issuance costs less the unexplained difference | 1,281.8 + 99.6 - 22.3 - 5.0 | 1,354.1 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148–149 |
| C24 | Check: contractual principal plus reconciling items equals carrying value, 2025-12-31 | 2,655.6 + 1,354.1 | 4,009.7 US$m | calculation C19 |
| C25 | Pro forma net debt for the dividend declared 2026-02-16: year-end net debt plus the estimated dividend | 3,665.7 + 29.5 | 3,695.2 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 177 |
| C26 | Pro forma net leverage for that dividend: pro forma net debt over EBITDA (Reported), FY2025 | 3,695.2 / 939.0 | 3.94x | calculation C25 |
| C27 | EBITDA bridge, FY2025: EBITDA (Reported) plus the issuer's add-backs not already in depreciation and amortization | 939.0 + 36.1 + 5.0 + 39.9 + 41.1 + 15.1 + 5.8 + 3.9 + 12.4 + 7.4 + 28.6 | 1,134.3 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61; EX-99.1_2025-12-31_see.htm.jsonl, pages 11–12 |
| C28 | Change in net debt, 2023 to 2025: FY2023 net debt less FY2025 net debt | 4,344.2 - 3,665.7 | 678.5 US$m | calculation C7 |
| C29 | Change in EBITDA (Reported), 2023 to 2025 | 939.0 - 926.1 | 12.9 US$m | calculation C1 |
| C30 | Cash interest paid less interest expense, net, FY2025 | 268.5 - 218.9 | 49.6 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 70, 112 |
| C31 | Debt classified as current, 2025-12-31: short-term borrowings plus current portion of long-term debt | 99.6 + 625.2 | 724.8 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| C32 | Cash plus undrawn revolver over debt classified as current, 2025-12-31 | 1,344.0 / 724.8 | 1.85x | calculation C16 |
| C33 | Operating lease liabilities, 2025-12-31: current plus long-term | 30.1 + 60.3 | 90.4 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 109 |
| C34 | Current portion of long-term debt other than the 1.573% notes and finance leases, 2025-12-31 | 625.2 - 599.2 - 6.9 | 19.1 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 149, 160 |
| C35 | Other borrowings not itemized in the debt note, 2025-12-31: current remainder plus the Other line less long-term finance leases | 19.1 + (31.8 - 12.0) | 38.9 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148–149 |
| C36 | Check: other foreign and other domestic borrowings in the fair value table less securitization borrowings and credit-line borrowings | (133.1 + 5.4) - 93.7 - 5.9 | 38.9 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148, 160 |
| C37 | Check: instrument carrying values in the debt instruments table add to total debt, 2025-12-31 | 0 + 371.6 + 599.2 + 423.7 + 769.4 + 422.8 + 421.8 + 396.6 + 447.2 + 18.9 + 93.7 + 5.9 + 38.9 | 4,009.7 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148–149 |
| C38 | Cumulative secured debt over EBITDA (Reported), FY2025, through the revolver (0), the Term Loan A (371.6) and the 1.573% notes (599.2) | 0 / 939.0; 371.6 / 939.0; 970.8 / 939.0 | 0.00x; 0.40x; 1.03x | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148, 160 |
| C39 | Senior notes whose security and ranking the filing does not describe, 2025-12-31: 2027, 2029 and 2033 notes at carrying value | 423.7 + 422.8 + 447.2 | 1,293.7 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 148 |
| C40 | Gross interest cost behind interest expense, net, FY2025: net expense plus interest income plus capitalized interest | 218.9 + 46.0 + 9.9 | 274.8 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 70 |
| C41 | Share-based incentive compensation in consolidated depreciation and amortization, FY2025, split at the accelerated amount | 41.1 - 5.0 | 36.1 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 138; EX-99.1_2025-12-31_see.htm.jsonl, pages 11–12 |
| C42 | Adjusted EBITDA less EBITDA (Reported), FY2025 | 1,134.3 - 939.0 | 195.3 US$m | calculation C1 |
| C43 | Closing cash in the cash flow statement less cash and cash equivalents on the balance sheet, 2025-12-31 (restricted cash) | 345.3 - 344.0 | 1.3 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 111–112, 120 |
| C44 | Unused lines of credit in the annual report less the revolver stated as available, 2025-12-31 | 1,197.0 - 1,000.0 | 197.0 US$m | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 84, 154 |
| C45 | Change in net cash from operating activities, FY2024 to FY2025 | 728.0 - 628.0 | 100.0 US$m lower | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 111 |
| C46 | EBITDA (Reported) less capital expenditures over cash interest paid, FY2025 | (939.0 - 169.5) / 268.5 | 2.87x | calculation C1 |

## Gaps

- No financial statements, results or trading update after December 31, 2025 are supplied, so leverage, interest cover, liquidity and every other figure here stop at that date; this restricts every conclusion about the credit today. Severity High. Action: obtain post-closing financial statements or lender reports for the company.
- The capital structure after the merger completed on April 9, 2026 is not stated: the debt commitment letter is mentioned without terms, so net debt after closing cannot be stated and year-end net debt of USD 3,665.7 million is the last figure available. Severity High. Action: obtain the financing documents or a post-closing debt schedule.
- The outcome for the 1.573% senior secured notes due October 2026 (USD 600 million) and for the USD 600 million delayed draw term loan available to October 15, 2026 is not stated, so year-end current debt and the 2026 maturity cannot be rolled forward. Severity Medium. Action: obtain the debt schedule at a date after October 2026.
- Undrawn committed facilities differ across sources for FY2025: USD 1,000 million of revolver in the annual report, about USD 1,060 million of unused committed lines in the results release, and USD 1,197.0 million of unused lines of which the committed share is not split; no letters of credit are stated. This restricts the liquidity chart for FY2025, FY2024 and FY2023. Severity Medium. Action: obtain the committed and uncommitted split by facility.
- The covenant leverage definition is not stated: the annual report calls the measure debt to EBITDA in one place and a net leverage ratio in the risk factors, and the covenant EBITDA definition is not given. This restricts any headroom conclusion for FY2025 and FY2024. Severity Medium. Action: obtain the credit agreement.
- Maturities after 2030 of USD 1,281.8 million are one total, so the maturity chart stops at 2030, and USD 5.0 million of the difference between scheduled principal and carrying value is not itemized. This restricts the year-by-year wall beyond 2030. Severity Medium. Action: obtain note-level principal and the lease schedule.
- Principal is not stated for the 4.000% 2027, 5.000% 2029 and 6.875% 2033 notes, and security and ranking are not described for them (USD 1,293.7 million at carrying value); outstanding principal, drawn amount, margin, floor and reference-rate spread are not stated for the Term Loan A, the revolver or the delayed draw term loan; the rate type is not stated for the notes whose filing gives only a rate. This restricts the debt stack, which omits those notes, and the cumulative leverage of unsecured debt. Severity Medium. Action: obtain the indentures and the credit agreement.
- The U.S. securitization program started in December 2025 derecognizes USD 50.0 million of receivables outside debt with cash in operating activities, which makes FY2025 total debt and operating cash flow not fully comparable with FY2024. This restricts year-on-year debt and cash flow comparisons by about USD 50.0 million. Severity Medium. Action: carry the program beside debt in later analysis.
- Several cash flow cells are printed as dashes in the filing and are carried as not supplied rather than zero: impairment of debt investment in FY2025 and FY2023, tax refunds and deposits in FY2025, businesses acquired in FY2025, and repurchases of common stock in FY2025 and FY2024. This restricts nothing material because the activity totals tie. Severity Low. Action: none unless a dash is shown to be a nil amount.
- The cash flow statement closes on cash, cash equivalents and restricted cash of USD 345.3 million while the balance sheet shows cash of USD 344.0 million, a restricted amount of USD 1.3 million; net debt uses the balance sheet figure. Severity Low. Action: none.
- Funds from operations is not stated by the issuer and the method gives no formula, so funds from operations to debt is not calculable for any period. This restricts one coverage measure only. Severity Low. Action: define an agreed funds from operations proxy if committee needs it.
- No interim statements are supplied beyond the fourth quarter 2025 three-month columns of the results release, so no last-twelve-months figure is constructed and the quarterly trend is not available. This restricts quarterly leverage analysis only. Severity Low. Action: none while the full-year figures stand.
- Interest income is netted within interest expense, net and is stated only inside the interest expense table, so gross interest cost is a calculation (USD 274.8 million for FY2025) and not a reported line. Severity Low. Action: none.

## Next module

The orchestrator selects the next module.
