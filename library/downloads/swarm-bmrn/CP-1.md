# CP-1 Financial foundation: BIOMARIN PHARMACEUTICAL INC (bmrn)

## Request

BIOMARIN PHARMACEUTICAL INC (bmrn), as of 2026-11-05, credit snapshot pathway. Scope is the financial foundation: statements, debt, net debt, liquidity and calculated credit metrics from the supplied filings and earnings releases. The statements cover FY2024, FY2025, nine months 2025 and nine months 2026, with the balance sheet at three dates.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_bmrn-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-26 | ea07c0b0ced62ce928418e33e7850bb4f7657797e8c0bf5f5000905677fe1e06 | Audited FY2024 and FY2025 statements, year-end debt, 2027 notes terms, leases, product revenue, purchase obligations |
| 10-Q_2026-03-31_bmrn-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-05 (signature page date) | 2a99ceccd25eef82b99d8805175210aaa89ec2399f72c136d49401e8ef68101d | Pre-acquisition position at 2026-03-31: revolver undrawn and terminated in April 2026, Amicus close as a subsequent event |
| 10-Q_2026-06-30_bmrn-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter and six months ended June 30, 2026 | 2026-08-06 (signature page date) | ab3790f631c592e337d10380a75780f5e20242f4c9bb7ba84f7627e0f0826177 | Six-month depreciation and amortization and cash interest, used to derive the third quarter stub |
| 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter and nine months ended September 30, 2026 | 2026-11-03 (signature page date) | d37c2b4920de3198d70881c8f1da80a4e23e61a15cd3750a74ed566c3cf812ae | Controlling statements at 2026-09-30, debt note, facility terms, covenants, acquisitions, commitments, subsequent event |
| EX-99.1_2026-05-04_earningsrelease-4may26ex991.htm.jsonl | Earnings release for the first quarter of 2026 (Exhibit 99.1) | 2026-05-04 | 4342224974b87cfa461fd3f7cf30a3f9e47704c85d4929187beb8b8d81373433 | Read for context only; no figure is taken from it |
| EX-99.1_2026-08-06_earningsrelease-6aug26ex991.htm.jsonl | Earnings release for the second quarter of 2026 (Exhibit 99.1) | 2026-08-06 | 5716fe1e56e2ba465f10bd50a733773a00cfbe4f0196fc4b254c96006e5e867a | Company definition of Non-GAAP Adjusted EBITDA and the gross leverage target |
| EX-99.1_2026-11-02_earningsrelease-2nov26ex991.htm.jsonl | Earnings release for the third quarter of 2026 (Exhibit 99.1) | 2026-11-02 | 9fad7cb025a49338e77589bbc1ee8b206ca16d3ad7a77a9450a90d585d60fed5 | Updated 2026 guidance and synergy statement |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 6cf4eab2083b3073e93897d638f9e04abf19087d21c67eb59b97c0b43dbc5eea | Source inventory, limits on the legal documents and the perimeter change caused by the Amicus acquisition |

## Findings

### Bottom line

BioMarin went from net cash at the 2025 year end to net debt of USD 3,437.68 million at 2026-09-30 after buying Amicus, and its reported earnings do not yet carry that debt.
Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22; calculation C3

Net debt is 9.07x reported EBITDA of USD 378.82 million for the twelve months to 2026-09-30. That base holds Amicus for only about five months and absorbs a USD 287.69 million acquired research charge, so it overstates leverage, but no pro forma EBITDA or covenant calculation is supplied to show by how much. Liquidity is USD 1,336.01 million of cash and an undrawn revolver, and USD 660.00 million of principal falls due in 2027, mostly convertible notes in May.
Basis: calculation C2; calculation C5; calculation C8; calculation C10; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 22–25

### Key findings

At the 2025 year end the only debt was the USD 600.00 million convertible notes due in 2027, carried at USD 597.18 million, against cash of USD 1,311.68 million, so net debt was negative USD 714.50 million, that is net cash. During 2026 the company raised USD 3,650.00 million (USD 850.00 million of senior unsecured notes and USD 2,800.00 million of senior secured term loans), repaid USD 15.00 million and paid USD 5,067.63 million of cash, net of cash acquired, for Amicus. Principal debt reached USD 4,235.00 million at 2026-09-30, carried at USD 4,173.69 million, and cash fell to USD 736.01 million. Reported total debt to EBITDA therefore moved from 1.22x at 2025 to 11.02x on the twelve months to 2026-09-30, and net leverage from net cash equal to 1.46x EBITDA to net debt of 9.07x.
Basis: 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 22–25; calculation C3; calculation C4; calculation C5

The trailing figure is not a clean measure of the new group. BioMarin states no EBITDA, so it is built as income from operations plus depreciation and amortization: USD 489.04 million for 2025 and USD 378.82 million for the twelve months to 2026-09-30, although revenue rose from USD 3,221.25 million to USD 3,655.13 million. The window absorbs integration and restructuring costs and acquired research charges while counting Amicus only from 2026-04-27: Amicus contributed revenue of USD 336.42 million and a net loss of USD 239.38 million, and the nine months carry restructuring charges of USD 113.59 million, acquisition-related costs of USD 32.80 million and inventory step-up amortization of USD 29.20 million. Printed pro forma figures give revenue and net loss as if Amicus had been owned from 2025-01-01 but no pro forma EBITDA.
Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 14–18; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 30; calculation C1; calculation C2

Cash interest cover was 67.50x in 2025 and 5.43x on the twelve months to 2026-09-30, but the trailing ratio understates the new burden because it holds only about five months of interest on the new debt. In the third quarter alone, the first full quarter with Amicus, cash interest paid was USD 62.33 million against reported EBITDA of USD 48.38 million, a cover of 0.78x; before the acquired research charge of USD 287.69 million, which is mostly the Alesta asset purchase, the same quarter covered interest 5.39x. A single quarter is lumpy because the first semi-annual coupon on the 2034 notes fell due on 2026-08-15; interest expense in the quarter, which payment timing does not affect, was USD 55.63 million. USD 2,785.00 million of term loans float, and the company states that a rise of 100 bp in rates would add about USD 27.9 million a year to interest expense.
Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10; 10-Q_2026-06-30_bmrn-20260630.htm.jsonl, page 10; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 52; calculation C6; calculation C7

Operating cash flow was USD 576.97 million in the nine months to 2026-09-30 against USD 728.35 million a year earlier, and free cash flow after purchases of property, plant and equipment was USD 498.94 million against USD 666.03 million, 123.81% of nine-month reported EBITDA. Cash conversion exceeds EBITDA because reported EBITDA is struck after stock-based compensation of USD 172.68 million and the acquired research expense of USD 282.26 million, neither of which reduces operating cash flow. The measure flatters debt service capacity, because it excludes USD 277.88 million paid for acquired research assets and USD 5,067.63 million for Amicus, both investing outflows.
Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10; calculation C1; calculation C14

Liquidity at 2026-09-30 was USD 1,336.01 million: cash of USD 736.01 million plus the USD 600.00 million senior secured revolving facility, which is undrawn and runs to April 2031. The sources state the full capacity is available and name no letters of credit against it. Marketable securities, USD 741.17 million at the 2025 year end, were nil. No facility expires within twelve months. The balance sheet shows USD 658.72 million of debt as current, which is consistent with the 2027 convertible notes plus the next four quarters of term loan repayments, USD 60.00 million, less unamortized costs; the rest of the term debt falls due from 2031. Firm purchase commitments of USD 768.80 million, USD 291.10 million of them due in 2026, also draw on cash.
Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 22–25; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 32–33; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 51; 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 182; calculation C8; calculation C9; calculation C10

The new debt is mostly secured. The term loans of USD 2,785.00 million carry first-priority liens on substantially all assets of the company and its subsidiary guarantors and rank ahead of the USD 850.00 million senior unsecured notes and the USD 600.00 million senior subordinated convertible notes. Secured principal is 7.35x trailing reported EBITDA and all principal debt is 11.18x. The term loans amortise by USD 60.00 million a year in total, and the guarantors are described only as certain subsidiaries.
Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 22–25; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 50; 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 206; calculation C11

The company reports compliance at 2026-09-30 with a maximum total net leverage ratio of 3.50x, temporarily 4.00x for certain acquisitions, and a minimum interest coverage ratio of 3.00x, which apply to the term loan A and the revolver. The ratios, their definitions and the headroom are not printed, and the credit agreement is not supplied, so the 9.07x above cannot be compared with the covenant and no headroom is calculated.
Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 50; 10-Q_2026-06-30_bmrn-20260630.htm.jsonl, page 45; Source readiness (CP-0)

BioMarin defines a non-GAAP adjusted EBITDA as income from operations excluding depreciation, amortization and stock-based compensation but prints no value for it. Applying that definition to the trailing period gives USD 598.42 million and net debt of 5.74x; also adding back the acquired research charge gives USD 886.10 million and 3.88x. These are analyst calculations for scale only, not company figures, and covenant EBITDA may differ.
Basis: EX-99.1_2026-08-06_earningsrelease-6aug26ex991.htm.jsonl, page 10; calculation C12

One event after the balance sheet date changes net debt: in October 2026 the company agreed to license an experimental Fabry disease treatment for an upfront payment of USD 70.00 million, to be expensed as acquired research in the fourth quarter, with up to USD 405.00 million of milestones. If the upfront payment is made in cash, pro forma net debt is USD 3,507.68 million, or 9.26x trailing reported EBITDA; the payment date is not stated.
Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 34; calculation C13

### Contrary evidence and what would change the view

The strongest evidence that leverage is less severe than the trailing ratios show is the company's statement that it met its covenants at 2026-09-30, which allow net leverage of 3.50x to 4.00x, and its stated aim of gross leverage below 2.50x by mid-2027, supported by about USD 280.00 million of expected GAAP cost synergies fully realised in 2028. Free cash flow of USD 498.94 million in nine months, and revenue guidance of USD 3,800.00 million to USD 3,900.00 million for 2026, point the same way. Reported EBITDA is also depressed by USD 287.69 million of acquired research charges that reflect discretionary pipeline purchases rather than the earnings of the marketed products: before them, trailing net leverage is 5.16x.
Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 50; EX-99.1_2026-08-06_earningsrelease-6aug26ex991.htm.jsonl, page 3; EX-99.1_2026-11-02_earningsrelease-2nov26ex991.htm.jsonl, pages 3–5; calculation C12; calculation C14

Against that, no covenant ratio, pro forma EBITDA or definition is available to confirm the headroom, the cash interest in the trailing window is only a part of the new run-rate, and further acquired research charges are already coming: the upfront licence payment of USD 70.00 million in the fourth quarter and up to USD 405.00 million of milestones. The view would improve with disclosure of covenant EBITDA and ratios, with a fourth quarter showing a full quarter of Amicus and a lower interest burden relative to EBITDA, or with a refinancing of the USD 600.00 million convertible notes due in May 2027. It would worsen if the third quarter cover of 5.39x before acquired research charges fell as interest costs rise, or if the 2027 notes had to be repaid from cash rather than refinanced.
Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 34; calculation C7; calculation C13

### Limitations

- No pro forma or covenant EBITDA, computed covenant ratio or headroom is supplied, so every leverage and cover ratio here is on reported figures and mixes periods with and without Amicus.
  Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 15–18; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 50

- The executed credit agreement and indentures are not supplied, so security, guarantees, margins and amortisation rest on the company's own summaries.
  Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 23–25; Source readiness (CP-0)

- The maturity ladder is calculated from stated amortisation rates and assumes scheduled payments fall on calendar quarter ends, which the filings do not state.
  Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 24; calculation C8

- The 2026 interim statements are unaudited, the balance sheet at 2025-09-30 is not printed, and the annual statements show acquired research expense inside research and development while the 2026 statements show it on its own line.
  Basis: 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8; 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1.02 | -0.60 | x | Reported EBITDA (calculated: income from operations plus depreciation and amortization); debt is the 2027 convertible notes at carrying value |
| FY2025 / 2025-12-31 | 1.22 | -1.46 | x | Reported EBITDA (calculated); debt is the 2027 convertible notes at carrying value; net debt is negative, so net leverage is a net cash ratio |
| 2026-09-30 | 11.02 | 9.07 | x | Twelve months to 2026-09-30: EBITDA is FY2025 plus nine months 2026 less nine months 2025 and holds Amicus only from 2026-04-27, while debt is the full post-acquisition carrying value |

The 2026-09-30 ratios pair a trailing EBITDA that includes Amicus for about five months with debt that funds the whole acquisition, so they overstate leverage on a full-year basis.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 56.04 | x | Reported EBITDA over cash interest paid (cash flow statement supplemental disclosure) |
| FY2025 / 2025-12-31 | 67.50 | x | Reported EBITDA over cash interest paid (cash flow statement supplemental disclosure) |
| 2026-09-30 | 5.43 | x | Twelve months to 2026-09-30; cash interest paid is FY2025 plus nine months 2026 less nine months 2025 and holds only about five months of interest on the new debt |

The 2026-09-30 cover uses cash interest from a window that holds only part of the new debt service, so it overstates forward cover.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 942.842 | Not supplied: the annual report states the revolver position at 2025-12-31 only | US$m | Cash and cash equivalents; marketable securities of 716.102 (short-term 194.864, long-term 521.238) are excluded |
| FY2025 / 2025-12-31 | 1,311.679 | 600.000 | US$m | Cash and cash equivalents; undrawn USD 600.0 million unsecured revolver maturing August 2029 with no amount outstanding; marketable securities of 741.172 are excluded; no letters of credit stated |
| 2026-09-30 | 736.007 | 600.000 | US$m | Cash and cash equivalents (cash 594.217, money market 141.790); undrawn senior secured revolver maturing 2031-04-27 with the full capacity stated as available; no facility expires within twelve months; no marketable securities |

The undrawn revolver is available subject to compliance with the credit agreement, which is not supplied, so its usable amount depends on covenant tests that cannot be checked.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 15.000 | US$m | Calculated at 2026-09-30 from stated terms; Scheduled term loan repayments for the last quarter of 2026: term loan A 10.000 and term loan B 5.000 |
| FY2027 | 660.000 | US$m | Calculated at 2026-09-30 from stated terms; 2027 convertible notes 600.000 due 2027-05-15 plus four quarters of term loan repayments (term loan A 40.000, term loan B 20.000) |
| FY2028 | 60.000 | US$m | Calculated at 2026-09-30 from stated terms; Four quarters of term loan repayments (term loan A 40.000, term loan B 20.000) |
| FY2029 | 60.000 | US$m | Calculated at 2026-09-30 from stated terms; Four quarters of term loan repayments (term loan A 40.000, term loan B 20.000) |
| FY2030 | 60.000 | US$m | Calculated at 2026-09-30 from stated terms; Four quarters of term loan repayments (term loan A 40.000, term loan B 20.000) |
| FY2031 | 640.000 | US$m | Calculated at 2026-09-30 from stated terms; Term loan A: one repayment of 10.000 and the balance of 610.000 due 2031-04-27; term loan B: four quarters of repayments of 20.000 |
| FY2032 | 20.000 | US$m | Calculated at 2026-09-30 from stated terms; Term loan B: four quarters of repayments of 20.000 |
| FY2033 | 1,870.000 | US$m | Calculated at 2026-09-30 from stated terms; Term loan B: one repayment of 5.000 and the balance of 1,865.000 due 2033-04-27 |
| FY2034 | 850.000 | US$m | Calculated at 2026-09-30 from stated terms; 2034 senior unsecured notes 850.000 due 2034-02-15 |

The filings print no ladder by year: amounts are calculated from the stated quarterly amortisation rates and assume payments on calendar quarter ends, and the revolver, undrawn until 2031, is not a maturity.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | Twelve months to 2026-09-30 | Unit | Source |
| --- | --- | --- | --- | --- | --- |
| Total revenues | 2,853.915 | 3,221.253 | 3,655.127 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Gross profit (total revenues less cost of sales) | 2,273.680 | 2,503.811 | 2,776.208 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Income from operations | 484.214 | 409.478 | 113.869 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| EBITDA (Reported, calculated) | 580.640 | 489.035 | 378.821 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Net income | 426.859 | 348.901 | -19.115 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Net cash from operating activities | 572.841 | 827.994 | 676.618 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Free cash flow (operating cash flow less purchases of property, plant and equipment) | 487.417 | 724.956 | 557.864 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Cash interest paid | 10.361 | 7.245 | 69.721 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Cash and cash equivalents (period end) | 942.842 | 1,311.679 | 736.007 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Total debt (carrying value, period end) | 595.138 | 597.176 | 4,173.691 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Net debt (period end) | -347.704 | -714.503 | 3,437.684 | US$m | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Total debt / EBITDA | 1.02 | 1.22 | 11.02 | x | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| Net debt / EBITDA | -0.60 | -1.46 | 9.07 | x | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |
| EBITDA / cash interest | 56.04 | 67.50 | 5.43 | x | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 595.138 | 942.842 | -347.704 | US$m | Reported at 2024-12-31; gross debt is Long-term convertible debt, net (2027 notes, principal 600.000 less unamortized discount); cash excludes marketable securities of 716.102 |
| FY2025 / 2025-12-31 | 597.176 | 1,311.679 | -714.503 | US$m | Reported at 2025-12-31; gross debt is Long-term convertible debt, net (2027 notes, principal 600.000 less unamortized discount 2.824); cash excludes marketable securities of 741.172; net debt is negative (net cash) |
| 2026-09-30 | 4,173.691 | 736.007 | 3,437.684 | US$m | Reported at 2026-09-30; gross debt is current portion 658.717 plus long-term 3,514.974 and covers the 2027, 2034 notes and both term loans, principal 4,235.000 less unamortized discount and costs 61.309; revolver undrawn; no marketable securities; lease liabilities are not in debt |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 4,235.000 | -61.309 | 4,173.691 | US$m | Principal is the sum of the debt maturing rows (2027 notes 600.000, 2034 notes 850.000, term loan A 790.000, term loan B 1,995.000); the one reconciling item is unamortized discount and deferred offering costs of 61.309; the undrawn revolver and lease liabilities are outside both figures |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| BMN 450 licence upfront payment to GC Biopharma and Hanmi | Not supplied: the source states October 2026 only | 70.000 | 3,507.684 | 9.26 | US$m | Source: third quarter 10-Q subsequent events note; the 70.000 upfront payment is assumed paid in cash and is expensed as acquired research in the fourth quarter; payment date not stated; milestones of up to 405.000 are contingent and excluded; net leverage uses the same trailing EBITDA as 2026-09-30 net leverage; 2026 events before the balance sheet date are already in the 2026-09-30 figures |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2,853.915 | 580.640 | US$m | Twelve months; reported EBITDA (calculated), no issuer-adjusted figure is stated |
| FY2025 / 2025-12-31 | 3,221.253 | 489.035 | US$m | Twelve months; reported EBITDA (calculated), no issuer-adjusted figure is stated |
| 2026-09-30 | 3,655.127 | 378.821 | US$m | Twelve months to 2026-09-30 constructed from FY2025, nine months 2026 and nine months 2025; reported EBITDA (calculated); counts Amicus only from 2026-04-27 |

The column is reported EBITDA, calculated by us, because the company states no adjusted EBITDA value; the last row mixes periods with and without Amicus.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| 2026 Revolving Facility (USD 600.0 million commitment, undrawn) | 1 | Yes | 0.000 | 7.35 | US$m | Borrower BioMarin Pharmaceutical Inc.; guaranteed by certain subsidiaries and secured by first-priority liens on substantially all assets of the company and the guarantors; no borrowings; leverage is cumulative principal through all rank 1 debt over trailing reported EBITDA of 378.821 |
| Term Loan A Facility due 2031-04-27 | 1 | Yes | 790.000 | 7.35 | US$m | Same obligor, guarantee and collateral as the revolver; original principal 800.000; maintenance covenants apply; cumulative leverage is through all rank 1 debt |
| Term Loan B Facility due 2033-04-27 | 1 | Yes | 1,995.000 | 7.35 | US$m | Same obligor, guarantee and collateral; original principal 2,000.000; the maintenance covenants are stated for term loan A and the revolver only |
| 5.5% senior unsecured notes due 2034-02-15 | 2 | No | 850.000 | 9.60 | US$m | Issuer BioMarin Pharmaceutical Inc.; guarantors not stated; ranks behind the secured debt as to collateral; cumulative principal 3,635.000 |
| 1.25% senior subordinated convertible notes due 2027-05-15 | 3 | No | 600.000 | 11.18 | US$m | Issuer BioMarin Pharmaceutical Inc.; unsecured; subordinated in right of payment to senior debt and effectively subordinated to secured debt; cumulative principal 4,235.000 |

Ranks are read from the stated security and subordination terms, not from executed documents, and amounts are principal at 2026-09-30, not carrying value.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA (opening) | Not supplied: the company states no adjusted EBITDA value and no add-back schedule | US$m | Reported EBITDA is calculated by us; the company defines Non-GAAP Adjusted EBITDA but prints no figure or bridge |
| Adjusted EBITDA (closing) | Not supplied: the company states no adjusted EBITDA value and no add-back schedule | US$m | No issuer-adjusted figure exists to reconcile to; analyst adjustments are in the calculation register, not in a bridge |

No bridge is drawn because the issuer states no adjusted EBITDA.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 18 |
| Calculated | 17 |
| Assumption-Based | 1 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 6 |
| Fields present | 14 |
| Fields total | 14 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 5 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_bmrn-20251231.htm.jsonl | Annual report (Form 10-K) with audited statements and KPMG LLP audit report dated 2026-02-26 | FY2025 with FY2024 and FY2023 comparatives; balance sheets at 2025-12-31 and 2024-12-31 | USD | thousands | BioMarin Pharmaceutical Inc. consolidated, one operating segment | US GAAP | Tier 1 (audited statements) | FY2024 and FY2025 statements, 2027 notes, leases, product revenue, purchase obligations | Predates the Amicus acquisition and the 2026 financing; acquired research expense sits inside research and development |
| 10-Q_2026-03-31_bmrn-20260331.htm.jsonl | Quarterly report (Form 10-Q), unaudited | Quarter ended 2026-03-31 | USD | thousands | Consolidated, before Amicus | US GAAP | Tier 2b (unaudited, no auditor review stated) | Pre-acquisition debt position and the acquisition as a subsequent event | Balance sheet precedes the term loans; no figure is taken into the tables |
| 10-Q_2026-06-30_bmrn-20260630.htm.jsonl | Quarterly report (Form 10-Q), unaudited | Quarter and six months ended 2026-06-30 | USD | thousands | Consolidated, Amicus from 2026-04-27 | US GAAP | Tier 2b (unaudited, no auditor review stated) | Six-month depreciation and amortization and cash interest for the third quarter stub | Purchase accounting preliminary |
| 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Quarterly report (Form 10-Q), unaudited | Quarter and nine months ended 2026-09-30, with the 2025-12-31 balance sheet | USD | thousands (discussion tables in millions) | Consolidated, Amicus from 2026-04-27, Alesta from 2026-08-31 | US GAAP | Tier 2b (unaudited, no auditor review stated) | Nine-month statements, balance sheet at 2026-09-30, debt, covenants, commitments, subsequent events | Purchase accounting for Amicus preliminary; covenant definitions not printed |
| EX-99.1_2026-05-04_earningsrelease-4may26ex991.htm.jsonl | Earnings release (Exhibit 99.1), issuer-prepared | Quarter ended 2026-03-31 | USD | millions (rounded) | Consolidated | US GAAP with company-defined non-GAAP measures | Tier 2b (unaudited issuer material) | Context only | Rounded figures; guidance superseded |
| EX-99.1_2026-08-06_earningsrelease-6aug26ex991.htm.jsonl | Earnings release (Exhibit 99.1), issuer-prepared | Quarter and six months ended 2026-06-30 | USD | millions (rounded) | Consolidated | US GAAP with company-defined non-GAAP measures | Tier 2b (unaudited issuer material) | Definition of Non-GAAP Adjusted EBITDA and gross leverage target | Management statements; no EBITDA value printed |
| EX-99.1_2026-11-02_earningsrelease-2nov26ex991.htm.jsonl | Earnings release (Exhibit 99.1), issuer-prepared | Quarter and nine months ended 2026-09-30 | USD | millions (rounded) | Consolidated | US GAAP with company-defined non-GAAP measures | Tier 2b (unaudited issuer material) | Updated guidance and synergy statement | Guidance covers revenue and non-GAAP diluted EPS only |

Sufficiency: the income statement, cash flow statement and balance sheet are present for FY2024, FY2025 and nine months 2026 with nine months 2025 comparatives. The balance sheet at 2025-09-30 is not printed, so the nine months 2025 column has no balance sheet.

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BioMarin Pharmaceutical Inc. | Issuer, registrant and consolidated reporting entity; borrower under the 2026 Credit Agreement; issuer of the 2027 and 2034 notes | December 31 | USD | thousands | Consolidated; one operating segment | US GAAP | FY2023 to FY2025; Q1, Q2 and Q3 2026 with nine months 2025 comparatives |
| Amicus Therapeutics, Inc. | Wholly-owned subsidiary acquired 2026-04-27 | December 31 | USD | thousands | Consolidated from 2026-04-27 | US GAAP | 2026-04-27 to 2026-09-30 only |
| Alesta Therapeutics B.V. | Wholly-owned subsidiary acquired 2026-08-31 as an asset acquisition | Not supplied: not stated | USD | thousands | Consolidated from 2026-08-31 | US GAAP | 2026-08-31 to 2026-09-30 only |
| Guarantor subsidiaries of the 2026 Credit Agreement | Guarantors, described as certain subsidiaries | Not supplied: not named | Not supplied: not named | Not supplied: not named | Not supplied: the perimeter is not named | Not supplied: not named | Not supplied: not named |

Subsequent events flagged, with their dates, and kept out of every period figure:

| Event | Date | Effect | Treatment | Source |
| --- | --- | --- | --- | --- |
| Licence of BMN 450 from GC Biopharma and Hanmi | October 2026 (day not stated) | Upfront payment 70.000 and up to 405.000 of milestones; 70.000 expensed as acquired research in Q4 2026 | Shown in the post-balance-sheet table, excluded from period figures | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 34 |
| Updated 2026 guidance | 2026-11-02 | Total revenues guidance cut to 3,800 to 3,900 and non-GAAP diluted EPS to 2.80 to 3.10 on order timing and two acquired research charges | Context only; not used in any figure | EX-99.1_2026-11-02_earningsrelease-2nov26ex991.htm.jsonl, page 5 |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Money tables restated from USD thousands to USD millions | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Unit conversion | 489,035 (thousands) | 489.035 (US$m) | Chart, net debt and register tables use the money unit; no figure changed value | All periods |
| EBITDA (Reported) calculated as income from operations plus depreciation and amortization | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Calculated measure | Not stated by the issuer | FY2024 580,640; FY2025 489,035; 9M 2025 513,207; 9M 2026 402,993 (thousands) | The issuer prints no EBITDA; depreciation and amortization is taken from the cash flow statement; other income and impairments are not adjusted | FY2024, FY2025, 9M 2025, 9M 2026 |
| Twelve months to 2026-09-30 constructed | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Derived period | FY2025 489,035; 9M 2026 402,993; 9M 2025 513,207 (EBITDA) | 378,821 (thousands) | Latest full year plus current stub less prior-year stub; perimeter differs because Amicus is in 9M 2026 only | Twelve months to 2026-09-30 |
| Third quarter 2026 stub derived for depreciation and cash interest | 10-Q_2026-06-30_bmrn-20260630.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Derived period | 9M 244,514 and 66,048; H1 114,049 and 3,716 (thousands) | 130,465 and 62,332 (thousands) | The cash flow statement is cumulative and no discrete quarter is printed, so the quarter is nine months less six months | Q3 2026 |
| Acquired research expense kept where the issuer prints it | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Presentation difference, no restatement | FY2025 research and development 921,930 includes about 220,963 of acquired research; 9M columns show it on its own line | Not restated; the FY columns show the separate line as Not supplied and the cash flow add-back states 220,963 | Restating would move 220,963 between two expense lines and leave operating income and EBITDA unchanged | FY2024, FY2025 |
| Cash defined as cash and cash equivalents only | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Definition choice | Marketable securities 716,102 (2024) and 741,172 (2025), nil at 2026-09-30 | Not netted against debt | Net debt at 2025-12-31 would be -1,455.675 US$m if securities were counted, against -714.503 as stated | FY2024, FY2025 |
| Cash flow line labels aligned | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Label mapping | FY2025 Acquisition, net of cash acquired 285,193; 9M 2025 Purchases of IPR&D, net of cash acquired 285,193 | One row, same amount in both periods | The amounts are equal, so the two labels are read as one line | FY2025, 9M 2025 |
| Debt kept at carrying value with principal beside it | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Basis statement | Principal 4,235,000; fair value 4,167,757 | Carrying value 4,173,691 used as Total Debt | Principal and fair value are shown separately and never replace carrying value | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net product revenues | 2,809,445 | 3,167,759 | 2,308,438 | 2,757,551 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Royalty and other revenues | 44,470 | 53,494 | 38,250 | 23,011 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Total revenues | 2,853,915 | 3,221,253 | 2,346,688 | 2,780,562 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Gross profit (calculated: total revenues less cost of sales) | 2,273,680 | 2,503,811 | 1,904,955 | 2,177,352 | USD thousands | Calculated; cost of sales includes inventory step-up amortization in 2026 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Cost of sales | 580,235 | 717,442 | 441,733 | 603,210 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Research and development | 747,184 | 921,930 | 508,554 | 566,273 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Acquired in-process research and development (IPR&D) | Not supplied: the annual statement includes this charge within Research and development | Not supplied: the annual statement includes this charge within Research and development | 220,963 | 287,685 | USD thousands | Reported; shown separately in the 9M statements only | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Selling, general and administrative | 1,009,025 | 1,153,017 | 706,810 | 987,482 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Intangible asset amortization | 43,257 | 19,386 | 14,540 | 177,433 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Gain on sale of nonfinancial assets | -10,000 | Not supplied: the 2025 column prints a dash | Not supplied: line not presented | Not supplied: line not presented | USD thousands | Reported; negative reduces operating expenses | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Total operating expenses | 2,369,701 | 2,811,775 | 1,892,600 | 2,622,083 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Income from operations (EBIT) | 484,214 | 409,478 | 454,088 | 158,479 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Interest income | 74,883 | 74,904 | 55,694 | 37,670 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Interest expense | -12,666 | -10,899 | -8,121 | -133,881 | USD thousands | Reported; negative as printed; 9M 2026 includes a bridge commitment fee of 22,813 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Other income (expense), net | -4,668 | 8,997 | 7,972 | 8,550 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Income before income taxes | 541,763 | 482,480 | 509,633 | 70,818 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Provision for income taxes | 114,904 | 133,579 | 114,159 | 43,360 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Net income | 426,859 | 348,901 | 395,474 | 27,458 | USD thousands | Reported; FY2025 audited, 9M unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| Depreciation and amortization (cash flow statement) | 96,426 | 79,557 | 59,119 | 244,514 | USD thousands | Reported in the cash flow statement; includes intangible asset amortization | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| EBITDA (Reported) | 580,640 | 489,035 | 513,207 | 402,993 | USD thousands | Calculated: income from operations plus depreciation and amortization; the issuer prints no EBITDA; 9M columns are nine-month figures, not twelve months | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–182; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8; 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Stock-based compensation (cash flow statement) | 201,571 | 181,409 | 134,496 | 172,684 | USD thousands | Reported; non-cash, not added back in reported EBITDA | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Impairment of assets (cash flow statement) | 19,889 | 125,012 | 2,967 | 15,203 | USD thousands | Reported; non-cash, inside operating expenses | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| ROCTAVIAN inventory write-off (cash flow statement) | Not supplied: the 2024 column prints a dash | 119,208 | Not supplied: line not presented | Not supplied: line not presented | USD thousands | Reported in the FY2025 cash flow statement only; non-cash, inside operating expenses | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184 |
| Cash paid for income taxes (supplemental cash flow) | 57,269 | 96,205 | 70,208 | 74,378 | USD thousands | Reported | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 426,859 | 348,901 | 395,474 | 27,458 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Depreciation and amortization | 96,426 | 79,557 | 59,119 | 244,514 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Non-cash interest expense | 3,359 | 2,622 | 1,969 | 30,548 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Accretion of discount on investments | -8,345 | -4,801 | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Stock-based compensation | 201,571 | 181,409 | 134,496 | 172,684 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Gain on sale of nonfinancial assets | -10,000 | Not supplied: the period's statement prints a dash or no such line | Not supplied: the period's statement prints a dash or no such line | Not supplied: the period's statement prints a dash or no such line | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Impairment of assets | 19,889 | 125,012 | 2,967 | 15,203 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| ROCTAVIAN inventory write-off | Not supplied: the period's statement prints a dash or no such line | 119,208 | Not supplied: the period's statement prints a dash or no such line | Not supplied: the period's statement prints a dash or no such line | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Acquired in-process research and development expense | Not supplied: the period's statement prints a dash or no such line | 220,963 | 220,963 | 282,258 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Deferred income taxes | 56,096 | 48,738 | 48,125 | -27,490 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Unrealized foreign exchange losses (gains) | -16,753 | 4,459 | 244 | -8,380 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Other | 20,135 | -4,414 | -5,399 | -7,091 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Accounts receivable, net | -57,909 | -228,054 | -107,378 | -60,435 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Inventory | -63,530 | -116,929 | -98,796 | -1,621 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Other current assets | -3,778 | 8,891 | -32,125 | -54,369 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Other assets | -73,700 | -38,573 | -32,679 | 12,859 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Accounts payable and accrued liabilities | -32,240 | 66,136 | 119,478 | -52,675 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Other long-term liabilities | 14,761 | 14,869 | 21,892 | 3,511 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Net Cash from Operating Activities | 572,841 | 827,994 | 728,350 | 576,974 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Purchases of property, plant and equipment | -85,424 | -103,038 | -62,316 | -78,032 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Maturities and sales of investments | 633,018 | 337,801 | 294,547 | 767,277 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Purchases of investments | -410,250 | -355,875 | -313,262 | -25,792 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Proceeds from sale of nonfinancial assets | 10,000 | Not supplied: the period's statement prints a dash or no such line | Not supplied: the period's statement prints a dash or no such line | Not supplied: the period's statement prints a dash or no such line | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Purchase of intangible assets | -11,994 | -7,937 | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Acquisition or purchases of IPR&D, net of cash acquired | Not supplied: line not presented in this period's statement | -285,193 | -285,193 | -277,881 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Business combination, net of cash acquired | Not supplied: the period's statement prints a dash or no such line | Not supplied: the period's statement prints a dash or no such line | Not supplied: the period's statement prints a dash or no such line | -5,067,630 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Other investing activities, net | 1,141 | Not supplied: line not presented in this period's statement | -5,569 | -1,191 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Net Cash from Investing Activities | 136,491 | -414,242 | -371,793 | -4,683,249 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Proceeds from exercises of awards under equity incentive plans | 49,277 | 14,460 | 7,714 | 6,655 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Taxes paid related to net share settlement of equity awards | -77,560 | -55,965 | -53,265 | -43,330 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Repayments of convertible debt | -494,987 | Not supplied: the period's statement prints a dash or no such line | Not supplied: the period's statement prints a dash or no such line | Not supplied: the period's statement prints a dash or no such line | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Proceeds from borrowings | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | 3,650,000 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Payments of debt issuance costs | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | -65,605 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Repayments of borrowings | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | -15,000 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Other financing | -3,177 | -889 | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Net Cash from Financing Activities | -526,447 | -42,394 | -45,551 | 3,532,720 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| FX Effect on Cash | 4,830 | -2,521 | -3,740 | -2,117 | USD thousands | Reported; FY audited, 9M unaudited; outflow negative | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Net Cash Change | 187,715 | 368,837 | 307,266 | -575,672 | USD thousands | Reported; operating plus investing plus financing plus the FX effect | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Opening Cash | 755,127 | 942,842 | 942,842 | 1,311,679 | USD thousands | Reported; cash and cash equivalents at the start of the period | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Closing Cash | 942,842 | 1,311,679 | 1,250,108 | 736,007 | USD thousands | Reported; cash and cash equivalents at the end of the period | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Cash Interest Paid | 10,361 | 7,245 | 3,572 | 66,048 | USD thousands | Reported supplemental disclosure; positive amount paid | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Cash paid for income taxes | 57,269 | 96,205 | 70,208 | 74,378 | USD thousands | Reported supplemental disclosure; paid within operating activities | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| Accounts payable and accrued liabilities related to fixed assets (non-cash) | 3,751 | 3,780 | 6,040 | 9,623 | USD thousands | Reported supplemental non-cash disclosure | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 942,842 | 1,311,679 | 736,007 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Short-term investments | 194,864 | 248,930 | 0 | USD thousands | Reported; the 2026-09-30 figure is nil because no marketable securities are held | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Accounts receivable, net | 660,535 | 908,214 | 1,076,355 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Inventory | 1,232,653 | 1,298,883 | 1,796,069 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Other current assets | 201,533 | 185,784 | 312,205 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Total current assets | 3,232,427 | 3,953,490 | 3,920,636 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Long-term investments | 521,238 | 492,242 | 0 | USD thousands | Reported; the 2026-09-30 figure is nil because no marketable securities are held | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Property, plant and equipment, net | 1,043,041 | 952,508 | 980,081 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Intangible assets, net | 255,278 | 213,837 | 4,777,247 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Goodwill | 196,199 | 196,199 | 666,367 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Deferred tax assets | 1,489,366 | 1,508,697 | 897,787 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Other assets | 251,391 | 277,049 | 327,113 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Total assets | 6,988,940 | 7,594,022 | 11,569,231 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Accounts payable and accrued liabilities | 606,988 | 759,031 | 946,107 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Current portion of long-term debt, net | Not supplied: line not presented at this date | Not supplied: line not presented at this date | 658,717 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Total current liabilities | 606,988 | 759,031 | 1,604,824 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Long-term debt, net | 595,138 | 597,176 | 3,514,974 | USD thousands | Reported; labelled Long-term convertible debt, net at FY2024 and FY2025; 2027 notes only before 2026 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Other long-term liabilities | 128,824 | 150,816 | 193,401 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Total liabilities | 1,330,950 | 1,507,023 | 5,313,199 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Common stock | 191 | 192 | 194 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Additional paid-in capital | 5,802,068 | 5,956,582 | 6,089,036 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Company common stock held by the Nonqualified Deferred Compensation Plan | -11,227 | -10,508 | -10,851 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Accumulated other comprehensive income (loss) | 61,653 | -13,473 | -4,011 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Retained earnings (accumulated deficit) | -194,695 | 154,206 | 181,664 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Total stockholders' equity | 5,657,990 | 6,086,999 | 6,256,032 | USD thousands | Reported; 2026-09-30 unaudited | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Total Assets | 6,988,940 | 7,594,022 | 11,569,231 | USD thousands | Reported | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Total Liabilities | 1,330,950 | 1,507,023 | 5,313,199 | USD thousands | Reported | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Total Equity | 5,657,990 | 6,086,999 | 6,256,032 | USD thousands | Reported total stockholders' equity | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| Total Debt | 595,138 | 597,176 | 4,173,691 | USD thousands | Carrying value, current plus long-term, net of issuance costs and discounts; at 2026-09-30 includes the 2027 and 2034 notes and both term loans; leases are not included | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22 |
| Cash & Equivalents | 942,842 | 1,311,679 | 736,007 | USD thousands | Reported cash and cash equivalents; marketable securities are excluded | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25% senior subordinated convertible notes due May 2027 (2027 Notes) | Convertible notes | Not supplied: only the aggregate unamortized discount and costs of 61,309 is printed | 600,000 | Not applicable | Not applicable | Unsecured | Senior subordinated; subordinated in right of payment to senior debt, effectively subordinated to secured debt | USD | 600,000 | Not applicable | 1.25% | Fixed | Not applicable | Not applicable | Not applicable | 2027-05-15 | 0 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22; 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 206 |
| 5.5% senior unsecured notes due February 2034 (2034 Notes) | Senior notes | Not supplied: only the aggregate unamortized discount and costs of 61,309 is printed | 850,000 | Not applicable | Not applicable | Unsecured | Senior unsecured | USD | 850,000 | Not applicable | 5.5%; interest paid February 15 and August 15 | Fixed | Not applicable | Not applicable | Not applicable | 2034-02-15 | 0 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 25 |
| Term Loan A Facility | Senior secured term loan A; quarterly repayments of 1.25% of original principal | Not supplied: only the aggregate unamortized discount and costs of 61,309 is printed | 790,000 | 790,000 | 800,000 | Senior secured; first-priority liens on substantially all assets of the company and the guarantors, guaranteed by certain subsidiaries | Senior secured | USD | 790,000 | Not applicable | Term SOFR plus 1.75% initially (alternate base rate plus 0.75%); margin ranges from 1.00% to 1.75% by total net leverage from delivery of the compliance certificate for the first full fiscal quarter after 2026-04-27 | Floating | Term SOFR (one, three or six months) or alternate base rate | 175 | Not applicable | 2031-04-27 | 40,000 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 22–24; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 49; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 50 |
| Term Loan B Facility | Senior secured term loan B; quarterly repayments of 0.25% of original principal | Not supplied: only the aggregate unamortized discount and costs of 61,309 is printed | 1,995,000 | 1,995,000 | 2,000,000 | Senior secured; first-priority liens on substantially all assets of the company and the guarantors, guaranteed by certain subsidiaries | Senior secured | USD | 1,995,000 | Not applicable | Term SOFR plus 1.75% (alternate base rate plus 0.75%) | Floating | Term SOFR (one, three or six months) or alternate base rate | 175 | Not applicable | 2033-04-27 | 20,000 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 22–24; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 49; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 50 |
| 2026 Revolving Facility | Senior secured revolving credit facility | 0 | 0 | 0 | 600,000 | Senior secured; same collateral and guarantees as the term loans | Senior secured | USD | 0 | Not applicable | Same margin as term loan A (Term SOFR plus 1.75% initially) | Floating | Term SOFR or alternate base rate | 175 | Not applicable | 2031-04-27 | 0 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 48–49 |
| Financing cost adjustment | Aggregate unamortized discount and deferred offering costs | -61,309 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -61,309 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22 |

The reporting currency amounts (principal, with the financing cost adjustment) add to 4,173,691 thousand, the Total Debt of the balance sheet at 2026-09-30. No instrument is in another currency, so no exchange rate is applied.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total revenues | LTM to 2026-09-30 | USD 3,221.253m | USD 2,780.562m | USD 2,346.688m | USD 3,655.127m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Amicus is in the nine months 2026 stub from 2026-04-27 and not in the prior-year stub, so the twelve months are not like-for-like |
| Income from operations | LTM to 2026-09-30 | USD 409.478m | USD 158.479m | USD 454.088m | USD 113.869m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Amicus is in the nine months 2026 stub from 2026-04-27 and not in the prior-year stub, so the twelve months are not like-for-like |
| Depreciation and amortization | LTM to 2026-09-30 | USD 79.557m | USD 244.514m | USD 59.119m | USD 264.952m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Amicus is in the nine months 2026 stub from 2026-04-27 and not in the prior-year stub, so the twelve months are not like-for-like |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 489.035m | USD 402.993m | USD 513.207m | USD 378.821m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Amicus is in the nine months 2026 stub from 2026-04-27 and not in the prior-year stub, so the twelve months are not like-for-like; no pro forma EBITDA is printed |
| Cash interest paid | LTM to 2026-09-30 | USD 7.245m | USD 66.048m | USD 3.572m | USD 69.721m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Holds interest on the new debt for about five months only |
| Interest expense (positive is expense) | LTM to 2026-09-30 | USD 10.899m | USD 133.881m | USD 8.121m | USD 136.659m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | 9M 2026 includes a bridge commitment fee of 22.813m |
| Stock-based compensation | LTM to 2026-09-30 | USD 181.409m | USD 172.684m | USD 134.496m | USD 219.597m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Amicus is in the nine months 2026 stub from 2026-04-27 and not in the prior-year stub, so the twelve months are not like-for-like |
| Acquired in-process research and development | LTM to 2026-09-30 | USD 220.963m | USD 287.685m | USD 220.963m | USD 287.685m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | The FY2025 component of 220.963m sits inside research and development in the annual statement; the prior-year stub states it separately |
| Net income | LTM to 2026-09-30 | USD 348.901m | USD 27.458m | USD 395.474m | USD -19.115m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Amicus is in the nine months 2026 stub from 2026-04-27 and not in the prior-year stub, so the twelve months are not like-for-like |
| Net cash from operating activities | LTM to 2026-09-30 | USD 827.994m | USD 576.974m | USD 728.350m | USD 676.618m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Amicus is in the nine months 2026 stub from 2026-04-27 and not in the prior-year stub, so the twelve months are not like-for-like |
| Purchases of property, plant and equipment (positive is outflow) | LTM to 2026-09-30 | USD 103.038m | USD 78.032m | USD 62.316m | USD 118.754m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Amicus is in the nine months 2026 stub from 2026-04-27 and not in the prior-year stub, so the twelve months are not like-for-like |
| Free cash flow (operating cash flow less purchases of property, plant and equipment) | LTM to 2026-09-30 | USD 724.956m | USD 498.942m | USD 666.034m | USD 557.864m | Calculated | 10-K_2025-12-31_bmrn-20251231.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Amicus is in the nine months 2026 stub from 2026-04-27 and not in the prior-year stub, so the twelve months are not like-for-like |
| Depreciation and amortization | Q3 2026 stub (nine months less six months) | Not applicable | USD 244.514m | USD 114.049m | USD 130.465m | Calculated | 10-Q_2026-06-30_bmrn-20260630.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Current Stub is the nine months to 2026-09-30 and Prior-Year Stub the six months to 2026-06-30; the cash flow statement is cumulative |
| Cash interest paid | Q3 2026 stub (nine months less six months) | Not applicable | USD 66.048m | USD 3.716m | USD 62.332m | Calculated | 10-Q_2026-06-30_bmrn-20260630.htm.jsonl; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl | Current Stub is the nine months to 2026-09-30 and Prior-Year Stub the six months to 2026-06-30; the cash flow statement is cumulative |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 595.138 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183 | 580.640 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; calculation C1 | FY2024 / 2024-12-31 | USD | US$m | 1.02 | Calculated | Tier 1 (audited) | Debt is the 2027 convertible notes at carrying value |
| Net debt / EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Reported) | -347.704 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; calculation C3 | 580.640 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; calculation C1 | FY2024 / 2024-12-31 | USD | US$m | -0.60 | Calculated | Tier 1 (audited) | Net debt is negative (net cash); cash excludes marketable securities |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 580.640 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; calculation C1 | 10.361 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 184 | FY2024 / 2024-12-31 | USD | US$m | 56.04 | Calculated | Tier 1 (audited) | Cash interest from the cash flow statement |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 597.176 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183 | 489.035 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; calculation C1 | FY2025 / 2025-12-31 | USD | US$m | 1.22 | Calculated | Tier 1 (audited) | Debt is the 2027 convertible notes at carrying value |
| Net debt / EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Reported) | -714.503 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; calculation C3 | 489.035 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; calculation C1 | FY2025 / 2025-12-31 | USD | US$m | -1.46 | Calculated | Tier 1 (audited) | Net debt is negative (net cash); cash excludes marketable securities |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 489.035 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; calculation C1 | 7.245 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 184 | FY2025 / 2025-12-31 | USD | US$m | 67.50 | Calculated | Tier 1 (audited) | Cash interest from the cash flow statement |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 4,173.691 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22 | 378.821 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 | 2026-09-30 | USD | US$m | 11.02 | Calculated | Tier 2b (unaudited components) | Full post-acquisition debt against twelve-month EBITDA that holds Amicus for about five months |
| Net debt / EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Reported) | 3,437.684 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22; calculation C3 | 378.821 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 | 2026-09-30 | USD | US$m | 9.07 | Calculated | Tier 2b (unaudited components) | Same perimeter mismatch; cash is the full 2026-09-30 balance |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 378.821 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; calculation C2 | 69.721 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10; calculation C2 | 2026-09-30 | USD | US$m | 5.43 | Calculated | Tier 2b (unaudited components) | Cash interest holds about five months of interest on the new debt |
| Senior secured debt / EBITDA (principal basis) | Term Loan A plus Term Loan B principal / EBITDA (Reported) | 2,785.000 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22 | 378.821 | calculation C2 | 2026-09-30 | USD | US$m | 7.35 | Calculated | Tier 2b (unaudited components) | Principal not carrying value; revolver undrawn; same perimeter mismatch as the fixed rows |
| Total principal debt / EBITDA (principal basis) | Total debt principal / EBITDA (Reported) | 4,235.000 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22 | 378.821 | calculation C2 | 2026-09-30 | USD | US$m | 11.18 | Calculated | Tier 2b (unaudited components) | Principal 4,235.000 against carrying value 4,173.691 used in the fixed rows |
| EBITDA / cash interest, Q3 2026 stub | EBITDA (Reported) Q3 2026 / Cash Interest Paid Q3 2026 | 48.384 | calculation C7 | 62.332 | calculation C7 | Q3 2026 | USD | US$m | 0.78 | Calculated | Tier 2b (unaudited components) | Quarter includes a 287.685m acquired research charge, inventory step-up amortization and restructuring costs; EBITDA is income from operations of -82.081m plus depreciation and amortization of 130.465m; cash interest includes the first semi-annual coupon on the 2034 notes due 2026-08-15, while interest expense in the quarter was 55.628m |
| EBITDA before acquired IPR&D / cash interest, Q3 2026 stub (Analyst Judgement) | (EBITDA (Reported) Q3 2026 + Acquired IPR&D Q3 2026) / Cash Interest Paid Q3 2026 | 336.069 | calculation C7 | 62.332 | calculation C7 | Q3 2026 | USD | US$m | 5.39 | Estimated | Tier 3 analyst normalisation of Tier 2b inputs | Analyst Judgement: adds back the 287.685m acquired research expense; the quarter still carries restructuring and step-up costs |
| Net debt / (EBITDA plus stock-based compensation) (Analyst Judgement) | Net Debt / (EBITDA (Reported) + Stock-based compensation) | 3,437.684 | calculation C3 | 598.418 | calculation C12 | 2026-09-30 | USD | US$m | 5.74 | Estimated | Tier 3 analyst normalisation of Tier 2b inputs | Analyst Judgement: applies the company's Non-GAAP Adjusted EBITDA definition (income from operations plus depreciation, amortization and stock-based compensation) to the trailing period; the company prints no value |
| Net debt / (EBITDA before acquired IPR&D) (Analyst Judgement) | Net Debt / (EBITDA (Reported) + Acquired IPR&D) | 3,437.684 | calculation C3 | 666.506 | calculation C12 | 2026-09-30 | USD | US$m | 5.16 | Estimated | Tier 3 analyst normalisation of Tier 2b inputs | Analyst Judgement: adds back the trailing acquired research expense of 287.685m only |
| Net debt / (EBITDA plus stock-based compensation and acquired IPR&D) (Analyst Judgement) | Net Debt / (EBITDA (Reported) + Stock-based compensation + Acquired IPR&D) | 3,437.684 | calculation C3 | 886.103 | calculation C12 | 2026-09-30 | USD | US$m | 3.88 | Estimated | Tier 3 analyst normalisation of Tier 2b inputs | Analyst Judgement: both add-backs; covenant EBITDA and pro forma Amicus earnings are not included |
| Liquidity / total debt | (Cash & Equivalents + Undrawn revolver) / Total Debt | 1,336.007 | calculation C10 | 4,173.691 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 | 2026-09-30 | USD | US$m | 0.32 | Calculated | Tier 2b (unaudited components) | Undrawn revolver is available subject to covenant compliance |
| Net cash from operating activities (twelve months) / total debt | Operating cash flow (LTM) / Total Debt | 676.618 | calculation C2 | 4,173.691 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 | 2026-09-30 | USD | US$m | 0.16 | Calculated | Tier 2b (unaudited components) | Operating cash flow holds Amicus from 2026-04-27 only |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Profitability | Gross margin (%) | 79.67 | 77.73 | 81.18 | 78.31 | Down year on year in both comparisons | Total revenues less cost of sales over total revenues; 2026 cost of sales includes inventory step-up amortization of 29.2m in 9M |
| Profitability | Operating margin (%) | 16.97 | 12.71 | 19.35 | 5.70 | Down | Income from operations over total revenues; 9M 2026 carries a 287.685m acquired research charge and Amicus costs |
| Profitability | EBITDA margin, reported (%) | 20.35 | 15.18 | 21.87 | 14.49 | Down | Calculated EBITDA over total revenues |
| Profitability | Net margin (%) | 14.96 | 10.83 | 16.85 | 0.99 | Down | Net income over total revenues |
| Growth | Total revenue growth, year on year (%) | 17.97 | 12.87 | Not supplied: nine months 2024 is not in the sources | 18.49 | Higher than FY2025 on Amicus | FY2024 against FY2023 revenue of 2,419,226; 9M 2026 includes 336,422 of Amicus product revenue |
| Cash flow | Free cash flow (USD thousands) | 487,417 | 724,956 | 666,034 | 498,942 | Mixed | Net cash from operating activities less purchases of property, plant and equipment; excludes acquired research and acquisition payments |
| Cash flow | Free cash flow / EBITDA, reported (%) | 83.94 | 148.24 | 129.78 | 123.81 | Above 100% in 2025 and 2026 | Conversion exceeds 100% because reported EBITDA is after stock-based compensation, impairments and non-cash acquired research |
| Cash flow | Purchases of property, plant and equipment / revenue (%) | 2.99 | 3.20 | 2.66 | 2.81 | Stable | Capital intensity is low |
| Liquidity | Cash plus undrawn revolver (USD thousands) | Not supplied: revolver position at 2024-12-31 not stated | 1,911,679 | Not supplied: no balance sheet at 2025-09-30 | 1,336,007 | Down | Excludes marketable securities of 741,172 at 2025-12-31 |
| Liquidity | Cash plus undrawn revolver / total debt (x) | Not supplied: revolver position at 2024-12-31 not stated | 3.20 | Not supplied: no balance sheet at 2025-09-30 | 0.32 | Down sharply | Debt carrying value at period end |
| Operating measure, period flow | VOXZOGO net product revenues (USD thousands) | 735,092 | 926,923 | 653,532 | 717,422 | Up | Net product revenues of the product; reported in the annual and quarterly notes |
| Operating measure, period flow | VIMIZIM net product revenues (USD thousands) | 739,784 | 792,051 | 586,525 | 620,371 | Up | Net product revenues of the product; reported in the annual and quarterly notes |
| Operating measure, period flow | NAGLAZYME net product revenues (USD thousands) | 479,584 | 485,400 | 365,182 | 373,153 | Up | Net product revenues of the product; reported in the annual and quarterly notes |
| Operating measure, period flow | PALYNZIQ net product revenues (USD thousands) | 355,047 | 433,310 | 307,985 | 335,760 | Up | Net product revenues of the product; reported in the annual and quarterly notes |
| Operating measure, period flow | GALAFOLD net product revenues (USD thousands) | Not supplied: product not owned or not reported in this period | Not supplied: product not owned or not reported in this period | Not supplied: product not owned or not reported in this period | 257,579 | New with Amicus | Net product revenues of the product; acquired with Amicus on 2026-04-27 |
| Operating measure, period flow | BRINEURA net product revenues (USD thousands) | 169,083 | 186,397 | 137,007 | 151,186 | Up | Net product revenues of the product; reported in the annual and quarterly notes |
| Operating measure, period flow | ALDURAZYME net product revenues (USD thousands) | 183,887 | 208,508 | 159,123 | 136,879 | Down | Net product revenues of the product; reported in the annual and quarterly notes |
| Operating measure, period flow | POMBILITI + OPFOLDA net product revenues (USD thousands) | Not supplied: product not owned or not reported in this period | Not supplied: product not owned or not reported in this period | Not supplied: product not owned or not reported in this period | 78,843 | New with Amicus | Net product revenues of the product; acquired with Amicus on 2026-04-27 |
| Operating measure, period flow | KUVAN net product revenues (USD thousands) | 120,902 | 99,530 | 76,195 | 71,271 | Down | Net product revenues of the product; reported in the annual and quarterly notes |
| Operating measure, period flow | ROCTAVIAN net product revenues (USD thousands) | 26,066 | 35,640 | 22,889 | 15,087 | Down | Net product revenues of the product; reported in the annual and quarterly notes |
| Operating measure, rate | Top three customers, share of net product revenues (%) | 35 | 37 | 38 | 36 | Stable | Customers A, B and C together as printed; a rate, not averaged |
| Operating measure, period flow | Amicus products share of total revenues (%) | Not supplied: not owned | Not supplied: not owned | Not supplied: not owned | 12.10 | New in 2026 | GALAFOLD plus POMBILITI + OPFOLDA over total revenues in nine months 2026; equals the 336,422 revenue contributed since 2026-04-27 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA is the primary denominator: income from operations plus depreciation and amortization | The issuer states no EBITDA. Its release defines Non-GAAP Adjusted EBITDA as income from operations excluding depreciation, amortization and stock-based compensation, with no value | EX-99.1_2026-08-06_earningsrelease-6aug26ex991.htm.jsonl, page 10; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 | All | Adding back trailing stock-based compensation of 219.597 moves trailing EBITDA from 378.821 to 598.418, an increase of 57.97% | Fundamental credit; Downside; Forward credit model | Reported EBITDA used throughout; the adjusted definition is applied only in labelled analyst rows |
| EBITDA add-backs inside reported EBITDA | No add-back of one-offs in reported EBITDA | Non-GAAP income excludes acquired research and other items; no EBITDA bridge is printed | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 30; EX-99.1_2026-11-02_earningsrelease-2nov26ex991.htm.jsonl, page 4 | Twelve months to 2026-09-30 | Reported EBITDA carries acquired research of 287.685, restructuring charges of 113.591 (nine months), acquisition-related costs of 32.8 (nine months) and inventory step-up amortization of 29.2 (nine months) | Fundamental credit; Earnings quality | Shown beside, not removed; the research charge is the only add-back in an analyst row |
| Covenant leverage and interest cover | Total debt and net debt over reported EBITDA, and EBITDA over cash interest | Maximum Total Net Leverage Ratio 3.50 to 1.00 (4.00 to 1.00 for certain acquisitions) and minimum Interest Coverage Ratio 3.00 to 1.00, as defined in the 2026 Credit Agreement; compliance stated at 2026-09-30 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 50; 10-Q_2026-06-30_bmrn-20260630.htm.jsonl, page 45 | 2026-06-30, 2026-09-30 | Reported-basis net leverage of 9.07x against a 3.50x maximum cannot be reconciled without the contract definitions | Legal & covenants; Covenant capacity | Computed ratios, definitions and headroom are not supplied; no headroom is calculated |
| Debt carrying value against principal | Total Debt is carrying value; principal is separate | Debt table shows principal 4,235.000, unamortized discount and deferred offering costs of 61.309, carrying value 4,173.691 and fair value 4,167.757 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22 | 2026-09-30 | Carrying value is 61.309 (1.45%) below principal | Liquidity; Refinancing & LME | Carrying value used in the fixed ratios; principal shown in the ladder and the debt stack |
| Cash and net debt | Net debt uses cash and cash equivalents; marketable securities are not netted | The balance sheet shows short-term and long-term investments separately | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 182 | FY2024, FY2025 | Counting securities would give net debt of -1,455.675 at 2025-12-31 against -714.503 stated | Liquidity | Cash and equivalents only; nil securities at 2026-09-30, so no effect on the latest period |
| Acquired in-process research and development presentation | One expense line definition across periods | FY2025 statement includes about 220.963 within Research and development; the 2026 statements show it on its own line, with the nine months 2025 comparative restated to match | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 | FY2024, FY2025, 9M 2025 | Research and development of 921.930 for FY2025 includes 220.963 (23.97%); no effect on operating income or EBITDA | Earnings quality | FY columns left as printed and the separate line shown as Not supplied for FY2024 and FY2025 |
| Acquired research expense, three figures for one item | One event with several statement roles is shown with each figure | Income statement 287.685, cash flow add-back 282.258, Alesta note 282.258 for BMN 440 in the third quarter of 2026 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 18–19 | Q3 2026 | The difference of 5.427 between the income statement and the cash flow add-back is not explained in the sources | Earnings quality | Income statement figure used for the research charge; the 5.427 difference is carried as a gap |
| Amicus consideration, several figures for one acquisition | One economic event with each statement role labelled | Total consideration 5,323.561 including 432.920 of Amicus debt repaid; cash flow business combination net of cash acquired 5,067.630 after 255.931 of cash acquired; Q1 10-Q equity value of about 4.8 billion | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 14–15; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10; 10-Q_2026-03-31_bmrn-20260331.htm.jsonl, page 24 | 2026-04-27 | 5,323.561 less 255.931 equals 5,067.630, so the figures reconcile | Fundamental credit; Liquidity | Cash flow figure used for cash spent; total consideration for the price |
| Cash interest against interest expense | Cash interest paid is kept apart from interest expense | Cash paid for interest 69.721 and interest expense 136.659 for the twelve months to 2026-09-30 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 23 | Twelve months to 2026-09-30 | Expense includes a bridge commitment fee of 22.813, accretion and cost amortization; the cash figure holds only about five months of new interest | Fundamental credit; Rates, FX & hedging | Cash interest used for cover; run-rate shown through the third quarter stub |
| Stock-based compensation, equity statement against cash flow statement | One figure per period | Equity statement 169.841 for nine months 2026 against cash flow statement and note 172.684; FY2025 196.788 against 181.409 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 9–10; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 29; 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184 | 9M 2026, FY2025 | Differences of 2.843 and 15.379; cash flow statement figure used | Earnings quality | The statements do not explain the difference; cash flow statement figure used |
| Perimeter of the twelve months to 2026-09-30 | Stub periods comparable in perimeter | Amicus consolidated from 2026-04-27 and Alesta from 2026-08-31; printed pro forma revenue and net loss only | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 14–18 | Twelve months to 2026-09-30 | Amicus contributed revenue of 336.422 and a net loss of 239.383; pro forma nine months revenue is 3,009.554 against 2,780.562 reported | All | Constructed figures labelled; no pro forma EBITDA exists to use |

There are 11 conflicts across the EBITDA, debt, cash, cash interest, research expense, stock-based compensation and perimeter definitions and seven sources.

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Reported leverage and interest cover at FY2024, FY2025 and the twelve months to 2026-09-30 | Ready with Limitations | Twelve-month figures mix periods with and without Amicus and hold about five months of new interest | Read the trailing ratios with the third quarter stub rows; obtain pro forma EBITDA |
| Covenant headroom | Not Ready | Covenant ratios, definitions and the credit agreement are not supplied | Obtain the 2026 Credit Agreement and the compliance certificate |
| Liquidity and maturity profile | Ready with Limitations | No ladder by year is printed; amounts are calculated with assumed quarter-end payments; letters of credit not stated | Confirm payment dates and revolver usage with the agreement |
| Capital structure and ranking | Ready with Limitations | Security, guarantors and ranking rest on the company's summaries; per-instrument carrying values are not printed | Obtain the indentures and credit agreement |
| Trailing and run-rate earnings base | Not Ready | No pro forma EBITDA; the company prints no adjusted EBITDA value | Obtain the pro forma condensed combined statements and Amicus stand-alone results |
| Free cash flow and cash conversion | Ready with Limitations | Quarterly cash flows are cumulative; acquired research payments sit in investing activities | Use with the investing cash flow lines |
| Income statement, cash flow and balance sheet history | Ready | Balance sheet at 2025-09-30 is not printed | None |

## Calculations

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | EBITDA (Reported) = income from operations + depreciation and amortization (USD thousands) | FY2024: 484,214 + 96,426; FY2025: 409,478 + 79,557; 9M 2025: 454,088 + 59,119; 9M 2026: 158,479 + 244,514 | FY2024 580,640; FY2025 489,035; 9M 2025 513,207; 9M 2026 402,993 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10 |
| C2 | Twelve months to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 (USD thousands) | Revenue 3,221,253 + 2,780,562 - 2,346,688; income from operations 409,478 + 158,479 - 454,088; D&A 79,557 + 244,514 - 59,119; EBITDA 489,035 + 402,993 - 513,207; cash interest 7,245 + 66,048 - 3,572; SBC 181,409 + 172,684 - 134,496; IPR&D 220,963 + 287,685 - 220,963; operating cash flow 827,994 + 576,974 - 728,350 | Revenue 3,655,127; income from operations 113,869; D&A 264,952; EBITDA 378,821; cash interest 69,721; SBC 219,597; IPR&D 287,685; operating cash flow 676,618 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10 |
| C3 | Net debt = Total Debt (carrying value) - Cash & Equivalents (USD thousands) | FY2024: 595,138 - 942,842; FY2025: 597,176 - 1,311,679; 2026-09-30: 4,173,691 - 736,007 | FY2024 -347,704; FY2025 -714,503; 2026-09-30 3,437,684 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 182–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9 |
| C4 | Total debt / EBITDA (Reported) | FY2024 595.138 / 580.640; FY2025 597.176 / 489.035; 2026-09-30 4,173.691 / 378.821 | FY2024 1.02x; FY2025 1.22x; 2026-09-30 11.02x | calculation C1; calculation C2; calculation C3 |
| C5 | Net debt / EBITDA (Reported) | FY2024 -347.704 / 580.640; FY2025 -714.503 / 489.035; 2026-09-30 3,437.684 / 378.821 | FY2024 -0.60x; FY2025 -1.46x; 2026-09-30 9.07x; FY2025 net cash over EBITDA 1.46x | calculation C1; calculation C2; calculation C3 |
| C6 | EBITDA (Reported) / cash interest paid | FY2024 580.640 / 10.361; FY2025 489.035 / 7.245; 2026-09-30 378.821 / 69.721 | FY2024 56.04x; FY2025 67.50x; 2026-09-30 5.43x | calculation C1; calculation C2 |
| C7 | Third quarter 2026 stub (USD thousands): depreciation and amortization = 244,514 - 114,049; cash interest = 66,048 - 3,716; EBITDA = income from operations of the quarter + depreciation and amortization | Q3 interest expense 55,628 (three months, income statement); Q3 income from operations -82,081; depreciation and amortization 130,465; EBITDA -82,081 + 130,465; EBITDA before acquired IPR&D 48,384 + 287,685; cover 48.384 / 62.332 and 336.069 / 62.332 | Depreciation and amortization 130,465; cash interest 62,332; EBITDA 48,384; EBITDA before acquired IPR&D 336,069; cover 0.78x and 5.39x | 10-Q_2026-06-30_bmrn-20260630.htm.jsonl, page 10; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10 |
| C8 | Debt maturity ladder at 2026-09-30 from stated terms (USD thousands): term loan A repayment 1.25% x 800,000 = 10,000 a quarter; term loan B 0.25% x 2,000,000 = 5,000 a quarter; one repayment of each already made (15,000); payments assumed at calendar quarter ends; term loan A balance at 2031-04-27 = 790,000 - 18 x 10,000 = 610,000; term loan B balance at 2033-04-27 = 1,995,000 - 26 x 5,000 = 1,865,000 | 2026: 10,000 + 5,000; 2027: 600,000 + 4 x 10,000 + 4 x 5,000; 2028 to 2030: 4 x 10,000 + 4 x 5,000 each; 2031: 10,000 + 610,000 + 4 x 5,000; 2032: 4 x 5,000; 2033: 5,000 + 1,865,000; 2034: 850,000 | 2026 15,000; 2027 660,000; 2028 60,000; 2029 60,000; 2030 60,000; 2031 640,000; 2032 20,000; 2033 1,870,000; 2034 850,000; total 4,235,000 equals the debt note total; annual scheduled amortisation 40,000 + 20,000 = 60,000 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 22–24 |
| C9 | Principal to carrying value, and current portion (USD thousands) | 600,000 + 850,000 + 790,000 + 1,995,000 = 4,235,000; 4,235,000 - 61,309 = 4,173,691; 658,717 + 3,514,974 = 4,173,691; due within twelve months 600,000 + 60,000 = 660,000; 660,000 - 658,717 = 1,283 | Principal 4,235,000; carrying value 4,173,691 on both bases; the 1,283 gap between current principal and the current portion is the unamortized discount on the current part | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22 |
| C10 | Liquidity = cash and cash equivalents + undrawn committed revolver (USD thousands) | 2025-12-31: 1,311,679 + 600,000; 2026-09-30: 736,007 + 600,000 | 2025-12-31 1,911,679; 2026-09-30 1,336,007; marketable securities at 2025-12-31 248,930 + 492,242 = 741,172 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 162–183; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–9; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 25 |
| C11 | Secured and total principal over trailing reported EBITDA, and debt stack cumulative leverage | Secured principal 790.000 + 1,995.000 = 2,785.000; / 378.821; through the 2034 notes 3,635.000; through all debt 4,235.000 | Rank 1 7.35x; through the 2034 notes 9.60x; through the 2027 notes 11.18x | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22; calculation C2 |
| C12 | Analyst-adjusted trailing EBITDA and net leverage (USD thousands) | EBITDA plus SBC 378,821 + 219,597; plus IPR&D 598,418 + 287,685; EBITDA plus IPR&D 378,821 + 287,685; net debt 3,437,684 | 598,418 gives 5.74x; 886,103 gives 3.88x; 666,506 gives 5.16x; SBC is 57.97% of trailing EBITDA | EX-99.1_2026-08-06_earningsrelease-6aug26ex991.htm.jsonl, page 10; calculation C2; calculation C3 |
| C13 | Post-balance-sheet pro forma (USD thousands): net debt after the BMN 450 upfront payment | 3,437,684 + 70,000; over trailing EBITDA 378,821 | 3,507,684; 9.26x | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 34; calculation C2; calculation C3 |
| C14 | Free cash flow = net cash from operating activities - purchases of property, plant and equipment (USD thousands) | FY2024 572,841 - 85,424; FY2025 827,994 - 103,038; 9M 2025 728,350 - 62,316; 9M 2026 576,974 - 78,032 | FY2024 487,417; FY2025 724,956; 9M 2025 666,034; 9M 2026 498,942; 9M 2026 over reported EBITDA 123.81%; twelve months 557,864 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 183–184; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| C15 | Statement identities, each exact (USD thousands) | Balance sheet 2026-09-30: liabilities 5,313,199 + equity 6,256,032 = assets 11,569,231; FY2025: 1,507,023 + 6,086,999 = 7,594,022; FY2024: 1,330,950 + 5,657,990 = 6,988,940. Cash roll-forward 9M 2026: 1,311,679 - 575,672 = 736,007; operating 576,974 + investing -4,683,249 + financing 3,532,720 + FX -2,117 = -575,672. Retained earnings 2026: 154,206 + 27,458 = 181,664. Operating expenses 9M 2026 add to 2,622,083 | All identities hold with no difference; product revenues add to net product revenues in all four periods | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 8–10; 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 181–184 |
| C16 | Amicus consideration (USD thousands) | 5,323,561 total consideration - 255,931 cash acquired | 5,067,630, equal to the cash flow business combination, net of cash acquired | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 14–15; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| C17 | Debt movements against cash flows (USD thousands) | Principal 4,235,000 - 600,000 = 3,635,000; borrowings 3,650,000 - repayments 15,000 = 3,635,000; 850,000 + 2,800,000 = 3,650,000 | Both 3,635,000; difference 0 | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 10–22; 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 204 |
| C18 | Amicus product revenue and floating-rate sensitivity (USD thousands) | 257,579 + 78,843 = 336,422; floating-rate principal 790,000 + 1,995,000 = 2,785,000 x 1% = 27,850 | 336,422 equals the revenue contributed since 2026-04-27; 27,850 is about 27.9 million, as the company states | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 17–28; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 52 |
| C19 | Management statements quoted in the text, not used in any calculation | Gross leverage target below 2.5x by mid-year 2027 (definition: undiscounted debt over four quarter projected Non-GAAP Adjusted EBITDA); GAAP cost synergies about USD 280 million (about 220 million non-GAAP) fully realised in 2028; total revenues guidance for 2026 of USD 3,800 million to 3,900 million; 100 bp rise in rates adds about 27.9 million a year to interest expense | As stated by the company | EX-99.1_2026-08-06_earningsrelease-6aug26ex991.htm.jsonl, pages 3–10; EX-99.1_2026-11-02_earningsrelease-2nov26ex991.htm.jsonl, pages 3–5; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 52 |
| C20 | Covenant levels as stated, no ratio computed | Maximum Total Net Leverage Ratio 3.50 to 1.00, temporarily 4.00 to 1.00; minimum Interest Coverage Ratio 3.00 to 1.00 | Not calculable: the ratios and definitions are not printed | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 50 |

Amounts quoted in the text are rounded half up to two decimals from the exact values in the tables, as listed here.

| ID | Quoted item | Exact value (USD millions unless a ratio) | Quoted value |
| --- | --- | --- | --- |
| R1 | Net debt 2026-09-30 | 3,437.684 | 3,437.68 |
| R2 | EBITDA LTM | 378.821 | 378.82 |
| R3 | Acquired IPR&D LTM | 287.685 | 287.69 |
| R4 | Liquidity 2026-09-30 | 1,336.007 | 1,336.01 |
| R5 | Debt due 2027 | 660 | 660.00 |
| R6 | 2027 notes principal | 600 | 600.00 |
| R7 | Total debt 2025-12-31 | 597.176 | 597.18 |
| R8 | Cash 2025-12-31 | 1,311.679 | 1,311.68 |
| R9 | Net debt 2025-12-31 | -714.503 | -714.50 |
| R10 | Borrowings raised 9M 2026 | 3,650 | 3,650.00 |
| R11 | 2034 notes principal | 850 | 850.00 |
| R12 | Term loans raised | 2,800 | 2,800.00 |
| R13 | Borrowings repaid 9M 2026 | 15 | 15.00 |
| R14 | Amicus cash net of cash acquired | 5,067.63 | 5,067.63 |
| R15 | Principal debt 2026-09-30 | 4,235 | 4,235.00 |
| R16 | Total debt 2026-09-30 | 4,173.691 | 4,173.69 |
| R17 | Cash 2026-09-30 | 736.007 | 736.01 |
| R18 | EBITDA FY2025 | 489.035 | 489.04 |
| R19 | Revenue FY2025 | 3,221.253 | 3,221.25 |
| R20 | Revenue LTM | 3,655.127 | 3,655.13 |
| R21 | Amicus revenue since 2026-04-27 | 336.422 | 336.42 |
| R22 | Amicus net loss since 2026-04-27 | -239.383 | -239.38 |
| R23 | Restructuring charges 9M 2026 | 113.591 | 113.59 |
| R24 | Acquisition-related costs 9M 2026 | 32.8 | 32.80 |
| R25 | Inventory step-up amortization 9M 2026 | 29.2 | 29.20 |
| R26 | Q3 2026 cash interest | 62.332 | 62.33 |
| R27 | Q3 2026 EBITDA | 48.384 | 48.38 |
| R28 | Acquired IPR&D Q3 2026 | 287.685 | 287.69 |
| R29 | Q3 2026 interest expense | 55.628 | 55.63 |
| R30 | Term loans outstanding | 2,785 | 2,785.00 |
| R31 | Operating cash flow 9M 2026 | 576.974 | 576.97 |
| R32 | Operating cash flow 9M 2025 | 728.35 | 728.35 |
| R33 | Free cash flow 9M 2026 | 498.942 | 498.94 |
| R34 | Free cash flow 9M 2025 | 666.034 | 666.03 |
| R35 | Stock-based compensation 9M 2026 | 172.684 | 172.68 |
| R36 | Acquired IPR&D cash flow add-back 9M 2026 | 282.258 | 282.26 |
| R37 | Purchases of IPR&D 9M 2026 | 277.881 | 277.88 |
| R38 | Revolver commitment | 600 | 600.00 |
| R39 | Marketable securities 2025-12-31 | 741.172 | 741.17 |
| R40 | Current portion of long-term debt, net | 658.717 | 658.72 |
| R41 | Scheduled term loan repayments next four quarters | 60 | 60.00 |
| R42 | Firm purchase commitments | 768.8 | 768.80 |
| R43 | Purchase commitments due 2026 | 291.1 | 291.10 |
| R44 | Annual term loan amortisation | 60 | 60.00 |
| R45 | EBITDA plus SBC LTM | 598.418 | 598.42 |
| R46 | EBITDA plus SBC plus IPR&D LTM | 886.103 | 886.10 |
| R47 | Upfront licence payment | 70 | 70.00 |
| R48 | Licence milestones | 405 | 405.00 |
| R49 | Pro forma net debt | 3,507.684 | 3,507.68 |
| R50 | GAAP cost synergies | 280 | 280.00 |
| R51 | Revenue guidance low | 3,800 | 3,800.00 |
| R52 | Revenue guidance high | 3,900 | 3,900.00 |

## Gaps

| Gap ID | Severity | Gap | What it restricts | Action that would close it | Source |
| --- | --- | --- | --- | --- | --- |
| G1 | High | No pro forma EBITDA for Amicus, and no EBITDA for the full twelve months, is supplied; only pro forma revenue and net loss are printed. Trailing EBITDA, leverage and cover at 2026-09-30 therefore hold Amicus for about five months against debt that funds the whole acquisition. | Every leverage and cover ratio for 2026-09-30 | Obtain the pro forma condensed combined statements and Amicus results for the missing months | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 15–18 |
| G2 | High | The covenant ratios, the definitions of Total Net Leverage Ratio and Interest Coverage Ratio, and any headroom are not printed. | Covenant capacity and compliance cushion | Obtain the 2026 Credit Agreement and the compliance certificate | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 50 |
| G3 | Medium | The executed 2026 Credit Agreement and the indentures are not supplied; guarantor names, collateral detail, the term loan A margin in force at 2026-09-30 and any mandatory prepayment terms are not stated. | Ranking, guarantees and interest rate cells in the debt register; spread for term loan A is read as the initial margin | Obtain the agreements | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 23–25 |
| G4 | Medium | The issuer defines Non-GAAP Adjusted EBITDA but prints no value, so no adjusted EBITDA row, adjusted ratio or EBITDA bridge is stated. | Adjusted leverage and the EBITDA bridge | Obtain the company's adjusted EBITDA reconciliation if one exists | EX-99.1_2026-08-06_earningsrelease-6aug26ex991.htm.jsonl, page 10 |
| G5 | Medium | Cash interest in the twelve months to 2026-09-30 holds only about five months of interest on the new debt, so trailing cover overstates forward cover; a single quarter is also lumpy because the first semi-annual coupon on the 2034 notes fell due on 2026-08-15. | Interest cover for 2026-09-30 | Use the third quarter stub rows until a full year of cash interest exists | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| G6 | Medium | The maturity ladder is calculated: the filings print no ladder by year and do not state the scheduled payment dates, so quarter-end payments are assumed. | Maturity amounts by year, most of all 2031 and 2033 | Confirm payment dates with the credit agreement | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 24 |
| G7 | Medium | Instrument carrying values are not printed; only the aggregate unamortized discount and costs of 61.309 is given, so carrying value for each instrument in the debt register is Not supplied. | Instrument level carrying values and secured subtotals at carrying value | Obtain the debt note detail by instrument | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 22 |
| G8 | Medium | Letters of credit under the revolver are not stated; at 2025-12-31 restricted investments of 375 thousand secured standby letters of credit for commercial agreements, and the company states the full revolver capacity is available at 2026-09-30. | Revolver availability net of letters of credit | Confirm with the lenders or the agreement | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 202 |
| G9 | Medium | The third quarter figures for depreciation and amortization and cash interest are derived as nine months less six months; no discrete quarter is printed in the cash flow statement. | Third quarter stub rows | None; the derivation is exact if both filings are right | 10-Q_2026-06-30_bmrn-20260630.htm.jsonl, page 10 |
| G10 | Medium | The difference of USD 5.427 million between the acquired research expense on the income statement (287.685) and the cash flow add-back (282.258) is not explained. | Exact size of the third quarter research charge | Ask the issuer for the reconciliation | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| G11 | Low | The revolver position at 2024-12-31 is not stated in the annual report for 2025, so undrawn committed facilities for FY2024 are Not supplied. | Liquidity chart for FY2024 | Obtain the annual report for 2024 | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 207 |
| G12 | Low | Several cash flow and income statement lines appear in some periods only, so the other periods are Not supplied for them: the gain on sale of nonfinancial assets, accretion of discount on investments, the ROCTAVIAN inventory write-off, repurchases of convertible debt, borrowing lines, the purchase of intangible assets and the 2025 annual acquired research line. | Line by line comparisons across periods | None; totals reconcile | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 10 |
| G13 | Low | The balance sheet at 2025-09-30 is not printed, so the nine months 2025 balance sheet is not shown, and quarter-end net debt for 2025 is not available. | Interim 2025 net debt and liquidity | Obtain the third quarter 2025 report | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| G14 | Low | The date of the BMN 450 upfront payment is given as October 2026 with no day, and payment in cash is assumed for the pro forma row. | Pro forma net debt row | Confirm the payment date | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 34 |
| G15 | Low | The company has one operating segment and prints no segment revenue other than by product, so no segment sum is stated; the product table is shown in the KPI dashboard. | Segment schedule | None | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, page 208 |
| G16 | Low | Pensions, retiree medical, factoring, supplier finance, securitisation and consent decree funding were searched for in the annual report and the third quarter report and none was found; lease liabilities were 45.697 at 2025-12-31 and Amicus added about 53.8 of leases, kept outside debt; purchase commitments of 768.8 and contingent milestones reasonably possible of 485.5 are outside debt; unrecognized tax benefits were 380.9 at 2025-12-31; a Department of Justice subpoena on sponsored testing programs is disclosed with no amount. | Claims outside debt | None | 10-K_2025-12-31_bmrn-20251231.htm.jsonl, pages 162–204; 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, pages 17–33 |
| G17 | Low | No discrete fourth quarter 2025 is printed, so the reported fiscal year is not tested against its quarters; the three 2026 quarters add to the nine months for revenue and net income. | Quarter sum check | None | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 8 |
| G18 | Low | Restructuring cash costs of 113.591 in nine months 2026 and an unpaid balance of 47.739 at 2026-09-30 sit inside reported EBITDA and operating cash flow. | Cash flow quality | None | 10-Q_2026-09-30_bmrn-20260930.htm.jsonl, page 30 |

## Next module

The orchestrator selects the next module.
