# CP-1 for ATS Corp /ATS (ats), as of 2026-11-05

## Request

ATS Corp /ATS (ats), as of 2026-11-05, credit snapshot pathway: financial foundation covering statements, debt, leverage, interest cover and liquidity from the supplied filings.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 40-F_2026-03-31_ats-20260331_d2.htm.jsonl | Annual report on Form 40-F of ATS Corporation for the fiscal year ended March 31, 2026 (cover, governance statements and exhibit index) | 2026-05-28 (signature date) | 461a9e1a5795ad26589158b15641a8ecb65a515f78e81e620080a11c1ee51f03 | Registrant identity and the exhibit index that shows the annual statements are not supplied |
| 6-K-EX-99.1_2025-12-28_ats-mdaxfy26q3.htm.jsonl | Management's discussion and analysis for the quarter ended December 28, 2025 (third quarter of fiscal 2026), furnished on Form 6-K | 2026-02-04 (date the MD&A is stated to be as of) | 495104fe5a368c3f86fa5f222fb1d1be8a8ff26e6c4af4a09766387bac60f769 | December 2025 Credit Facility amendment, 2025-03-31 facility comparatives, leadership changes |
| 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl | Results news release for the fourth quarter and fiscal year ended March 31, 2026, furnished on Form 6-K | 2026-05-28 | 9c0afcbd3db8908a2bce9809ae30cf6e21e3c8555f5c3d8e1a44911b7a679728 | Fiscal 2025 and 2026 statements, year-end net debt, EBITDA reconciliations, FY2026 balances |
| 6-K-EX-99.1_2026-06-28_ats-mdaxfy27q1.htm.jsonl | Management's discussion and analysis for the quarter ended June 28, 2026 (first quarter of fiscal 2027), furnished on Form 6-K | 2026-08-06 (date the MD&A is stated to be as of) | 7139467d52f7afd7dcfcd7f72f26d02042ad1d04d4e987664edd2eeedb7dac8a | First quarter of fiscal 2027 context and Credit Facility terms |
| 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl | Management's discussion and analysis for the quarter ended September 27, 2026 (second quarter of fiscal 2027), furnished on Form 6-K | 2026-11-04 (date the MD&A is stated to be as of) | 927254e506c477f0f3c479b731264614078302a7152fb02abbd056d0f3cf2206 | Latest debt terms, liquidity, contractual obligations, hedges, exchange rates, quarterly series |
| 6-K-EX-99.5_2026-06-28_ats-pressreleasexfy27q1.htm.jsonl | Results news release for the quarter ended June 28, 2026, announcing a Fixed Cost Transformation Program, furnished on Form 6-K | 2026-08-06 | bd6442bf8c1097adcf56b29d660c89aa138c0b9c5262ef32298dfe327594d94e | First quarter of fiscal 2027 adjusted EBITDA and program announcement |
| 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl | Results news release for the quarter and six months ended September 27, 2026, furnished on Form 6-K | 2026-11-04 | 678b14cb1aaa7e6f176b56c413e4c96ec51b564dcfbf0025fed22fc9c315392b | Latest statements, reconciliations, net debt, free cash flow, subsequent facility sale |

| Module | Handoff | sha256 | Use |
| --- | --- | --- | --- |
| CP-0 | Source readiness (CP-0), accepted | d2a15aca679e64d0f4bcbfe3f414acad02e0df4529931bc745af2c3a8ad3f234 | Source scope, document dates and gaps in the supplied set |

## Findings

### Bottom line

Net leverage on reported EBITDA has risen to 3.76x over the last twelve months to 27 September 2026 from 2.75x at fiscal 2026 year end, and interest cover has fallen to 3.05x from 3.72x, so creditors now depend on liquidity more than on earnings.
Basis: 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 17–21; 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; calculation C12

Liquidity is ample, with cash of CAD 231.0 million and CAD 860.0 million undrawn on the committed revolver, and the first large principal maturity is the US dollar notes due in December 2028. The company's own 3.1x leverage relies on add-backs of CAD 103.3 million over the same twelve months, almost all restructuring and reorganisation costs, which must stop recurring for the adjusted view to hold. Covenant levels and the audited annual notes are not supplied, so covenant headroom is not established.
Basis: 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, pages 24–28; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 17; calculation C11; calculation C13

### Leverage and interest cover

Reported-basis leverage is the figure to anchor on. Net debt excluding leases was 3.76x last-twelve-months reported EBITDA at 27 September 2026, against 2.75x at fiscal 2026 year end, because reported EBITDA over the last twelve months fell to CAD 277.8 million from CAD 362.7 million while total debt barely moved. Net debt rose by about CAD 49 million, mostly because cash fell by about CAD 54 million after CAD 61.3 million of share repurchases in the second quarter, and the company itself says the repurchases added about 0.1x to its leverage. Cash interest cover on the same basis fell to 3.05x from 3.72x. The cause is earnings, not borrowing: first-half revenue fell 7.21% and adjusted EBITDA fell 15.54%, so a further decline would erode cover faster than debt can be repaid.
Basis: 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 2; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 6; calculation C3; calculation C4; calculation C12; calculation C21

The company's headline looks steadier because it adds costs back. On adjusted EBITDA, net leverage excluding leases is 2.74x against 2.41x at year end, and the company's own 3.1x, which includes lease liabilities and its pro forma EBITDA, compares with 2.8x at year end and sits above its target range of 2.0x to 3.0x. The CAD 103.3 million gap between adjusted and reported EBITDA is 27.11% of adjusted EBITDA, and CAD 99.8 million of it is restructuring or reorganisation cost that management expects to continue for about 15 more months under the Fixed Cost Transformation Program. Until those costs stop, adjusted leverage understates the cash the business consumes.
Basis: 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 4; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 17; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 6; calculation C5; calculation C11; calculation C22

### Liquidity and maturities

Liquidity is not the constraint today. At 27 September 2026 the company held CAD 231.0 million of cash and had CAD 860.0 million undrawn on its CAD 900.0 million committed revolver, which matures in December 2029; it also states CAD 277.2 million more is available under letter of credit facilities, while CAD 274.4 million of letters of credit are outstanding. The next principal maturities are the US dollar notes in December 2028, CAD 494.9 million at the period-end rate, and the credit facility in December 2029, with CAD 190.0 million drawn, so refinancing is a task for fiscal 2029 and 2030 rather than now. The risk is access: the revolver sits under a net debt to EBITDA test and an interest coverage test whose levels are not supplied, so rising leverage could narrow what can be drawn before it narrows cash.
Basis: 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, pages 24–29; calculation C13; calculation C14; calculation C15; calculation C24

The completed sale of two U.S. facilities for CAD 71.2 million after the quarter end would lower pro forma net leverage to 3.51x if the consideration arrives in cash and none of it is spent on the restructuring it is meant to fund. The completion date, the net proceeds and the lease liability from the leaseback of one facility are not stated.
Basis: 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 11; calculation C17

### Cash flow quality

Cash flow over the last twelve months is weaker than fiscal 2026 suggests. Free cash flow from the statements was about CAD 259 million over the last twelve months and about CAD 37 million in the first half of fiscal 2027, against about CAD 372 million in fiscal 2026, which included a CAD 246.6 million release of working capital, and about CAD 150 million in the first half of fiscal 2026, which included collection of an EV customer settlement whose amount is not stated. Free cash flow was 0.93x last-twelve-months reported EBITDA, which is solid only because reported EBITDA is itself low.
Basis: 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21; calculation C7; calculation C8

The working capital cushion is thinning. Non-cash working capital rose to 13.4% of annualised adjusted revenue from 12.1% at year end, and contract liabilities, the customer advances that fund projects, fell to CAD 290.8 million from CAD 307.3 million at year end and CAD 330.1 million at the prior year end. These advances are secured partly by letters of credit within the CAD 274.4 million outstanding, so if bookings slow the float unwinds and consumes cash while the letter of credit lines stay in use; the split of letters of credit by purpose is not stated. Provisions rose by CAD 6.7 million as restructuring costs were recognised ahead of payment, so a cash outflow is still to come.
Basis: 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 25; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 29

### Definitions, one-off items and data quality

Four points of definition change the answer and are kept visible. The company counts lease liabilities in net debt; this analysis keeps them out of debt and shows CAD 146.5 million of leases separately, which is 0.53x of last-twelve-months reported EBITDA and would lift reported-basis net leverage to 4.29x. Fiscal 2025 reported EBITDA of CAD 162.0 million carries a CAD 171.1 million EV customer settlement charge against a revenue portion of CAD 146.9 million, so its 8.30x net leverage is not a run rate and adjusted EBITDA of CAD 368.9 million gives 3.65x. The company's trailing pro forma EBITDA of CAD 381.3 million differs by CAD 0.2 million from the constructed CAD 381.1 million because of rounding of one-decimal quarterly figures. The unutilised credit the company states, CAD 966.7 million, is CAD 0.7 million below the sum of its own components, and the CAD 111.6 million of other facilities in it has no stated commitment status.
Basis: 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 23; 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–13; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, pages 26–27; calculation C18; calculation C19; calculation C20

Subsequent events are kept out of the period figures. After 27 September 2026 the company completed the sale of two U.S. facilities, on a day that is not stated, and a forward-starting swap fixes the rate on the CAD 150.0 million term facility at 3.264% from 4 November 2026 to 4 November 2028, which does not change debt. The statements are condensed releases without notes, the interim figures are unaudited, and printed dashes are recorded as not supplied rather than zero.
Basis: 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 11; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 30; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2025 | 2024-04-01 | 2025-03-31 |
| FY2026 | 2025-04-01 | 2026-03-31 |
| H1 2026 | 2025-04-01 | 2025-09-28 |
| H1 2027 | 2026-04-01 | 2026-09-27 |
| Q2 2026 | 2025-06-30 | 2025-09-28 |
| Q2 2027 | 2026-06-29 | 2026-09-27 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2025 / 2025-03-31 | 9.70 | 8.30 | x | Calculated from carrying-value debt excluding leases over issuer-stated reported EBITDA 162.0, which is depressed by a 171.1 EV customer settlement charge; adjusted-EBITDA ratios are in the calculation register |
| FY2026 / 2026-03-31 | 3.53 | 2.75 | x | Calculated from carrying-value debt excluding leases over issuer-stated reported EBITDA 362.7; adjusted-EBITDA ratios are in the calculation register |
| 2026-09-27 | 4.60 | 3.76 | x | Calculated from carrying-value debt excluding leases over last-twelve-months reported EBITDA 277.8 constructed as fiscal 2026 plus first half 2027 less first half 2026; unaudited interim balance sheet |

Debt is carrying value excluding leases and the 2026-09-27 ratios use last-twelve-months reported EBITDA, while fiscal 2025 reported EBITDA is depressed by a CAD 171.1 million settlement charge.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2025 / 2025-03-31 | 1.70 | x | Calculated: reported EBITDA 162.0 over cash interest paid 95.151; depressed by the EV customer settlement charge |
| FY2026 / 2026-03-31 | 3.72 | x | Calculated: reported EBITDA 362.7 over cash interest paid 97.501 |
| 2026-09-27 | 3.05 | x | Calculated: last-twelve-months reported EBITDA 277.8 over last-twelve-months cash interest paid 91.152, both constructed |

Cover divides reported EBITDA by cash interest paid, so fiscal 2025 is depressed by the settlement charge and the last-twelve-months figure is constructed.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2025 / 2025-03-31 | 225.947 | Not supplied: the Credit Facility commitment before the amendment of 2025-12-04 is not in the supplied files | CADm | Cash is calculated from the statement line in millions; undrawn committed facilities are not stated for this date because the facility was amended on 2025-12-04 and its earlier commitment is not supplied |
| FY2026 / 2026-03-31 | 284.957 | 850.0 | CADm | Cash from the balance sheet; undrawn is the 900.0 committed revolver less 50.0 drawn (200.0 utilised less the 150.0 term facility), letters of credit under the facility nil; other facilities and letter of credit capacity excluded because their commitment status is not stated |
| 2026-09-27 | 230.968 | 860.0 | CADm | Cash from the balance sheet (issuer states 231.0); undrawn is the 900.0 committed revolver less 40.0 drawn (190.0 utilised less the 150.0 term facility), letters of credit under the facility nil; the issuer's 966.7 of unutilised multipurpose credit also counts other facilities of 111.6 whose commitment status is not stated |

Undrawn committed facilities count only the CAD 900.0 million revolver less drawings, because the commitment status of other facilities and of letter of credit capacity is not stated.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2029 | 494.9 | CADm | US$350.0 million senior notes due 2028-12-15 converted at the stated period-end rate of 1.414 (calculation C14); the issuer's contractual obligations table puts the matching payment in the two-to-three-year bucket and includes interest |
| FY2030 | 190.0 | CADm | Credit Facility drawn amount (150.0 term facility plus 40.0 revolver) due at the facility maturity of 2029-12-04 |
| FY2033 | 600.0 | CADm | CAD senior notes due 2032-08-21, principal 600.0 (400.0 issued 2024-08-21 plus 200.0 issued 2024-12-19) |

Principal is shown at each instrument's maturity, the US dollar notes are converted at the stated period-end rate of 1.414, and CAD 4.2 million of other facilities with no stated maturity is left out.

### Financials and credit metrics

| Metric | FY2025 | FY2026 | LTM to 2026-09-27 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue (IFRS) | 2,533.3 | 2,972.9 | 2,867.2 | CAD millions | Reported; last twelve months constructed (calculation C9) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| EBITDA (Reported) | 162.0 | 362.7 | 277.8 | CAD millions | Issuer-stated; last twelve months constructed (calculation C4) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| EBITDA (Adjusted) | 368.9 | 413.0 | 381.1 | CAD millions | Issuer-adjusted; last twelve months constructed (calculation C5) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Add-backs (adjusted less reported) | 206.9 | 50.3 | 103.3 | CAD millions | Calculated (calculation C11) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Cash interest paid | 95.151 | 97.501 | 91.152 | CAD millions | Reported; last twelve months constructed (calculation C6) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Net cash from operating activities | 25.771 | 448.383 | 334.443 | CAD millions | Reported; last twelve months constructed (calculation C7) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Free cash flow (operating cash flow less capital expenditure) | -52.259 | 371.607 | 258.591 | CAD millions | Calculated from statement lines (calculation C8) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Total debt, carrying value excluding leases | 1,570.949 | 1,281.469 | 1,276.552 | CAD millions | Calculated (calculation C1) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Cash and cash equivalents | 225.947 | 284.957 | 230.968 | CAD millions | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Net debt | 1,345.002 | 996.512 | 1,045.584 | CAD millions | Calculated (calculation C3) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Net debt / EBITDA (Reported) | 8.30 | 2.75 | 3.76 | x | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Net debt / EBITDA (Adjusted) | 3.65 | 2.41 | 2.74 | x | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| EBITDA (Reported) / cash interest | 1.70 | 3.72 | 3.05 | x | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Issuer net debt / pro forma adjusted EBITDA, including leases | 3.9 | 2.8 | 3.1 | x | Issuer-stated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Order Backlog, period end | 2,139 | 1,958 | 2,009 | CAD millions | Reported, supplementary measure | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |
| Non-cash working capital, % of annualised adjusted revenue | 22.4 | 12.1 | 13.4 | % | Issuer-stated, non-IFRS ratio | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 14–21 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-03-31 | 1,570.949 | 225.947 | 1,345.002 | CADm | Calculated from statement lines: bank indebtedness 27.271 plus current portion of long-term debt 0.219 plus long-term debt 1,543.459, carrying value net of issuance costs; excludes lease liabilities of 129.393 carried on their own lines and any securitisation or finance leases (none stated in debt lines); principal total not supplied because the US dollar notes' rate at 2025-03-31 is not in the supplied files; the issuer's own net debt including leases is 1,474.5 |
| FY2026 / 2026-03-31 | 1,281.469 | 284.957 | 996.512 | CADm | Calculated from statement lines: bank indebtedness 6.744 plus current portion of long-term debt 0.173 plus long-term debt 1,274.552, carrying value net of issuance costs; excludes lease liabilities of 154.688; principal total 1,296.5 (US dollar notes 487.9 at the stated rate of CAD 1.00 = USD 0.7174, CAD notes 600.0, Credit Facility 200.0, other facilities 8.6); the issuer's own net debt including leases is 1,151.2 |
| 2026-09-27 | 1,276.552 | 230.968 | 1,045.584 | CADm | Calculated from statement lines: bank indebtedness 2.407 plus current portion of long-term debt 0.177 plus long-term debt 1,273.968, carrying value net of issuance costs; excludes lease liabilities of 146.547; principal total 1,289.1 (US dollar notes 494.9, CAD notes 600.0, Credit Facility 190.0, other facilities 4.2); the issuer's own net debt including leases is 1,192.2 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-27 | 1,284.9 | -8.348 | 1,276.552 | CADm | Principal is the sum of the three maturity rows (calculation C15); reconciling items of -8.348 are +4.2 of other credit facilities left out of the ladder (bank indebtedness 2.4 and long-term 1.8, stated principal) and -12.548 for unamortised issuance costs, premium and rounding, derived as the difference because the unamortised balances are not stated (calculation C16) |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Completed sale of two U.S. facilities after the quarter end for consideration of 71.2 (one facility to be leased back) | Not supplied: the source states after the quarter end only | -71.2 | 974.384 | 3.51 | CADm | Amount is the stated consideration, treated as cash received; net proceeds, completion date and the lease liability from the leaseback are not stated; pro forma net debt is the 2026-09-27 net debt 1,045.584 less 71.2, and the leverage is over last-twelve-months reported EBITDA 277.8 (calculation C17); estimated gain of about 12.2 is not a net debt item; recognition in the third quarter of fiscal 2027 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2025 | 2,533.3 | 368.9 | CADm | Revenue is IFRS reported revenue including a 146.9 EV customer settlement; Adjusted EBITDA is the issuer-adjusted measure; annual period |
| FY2026 | 2,972.9 | 413.0 | CADm | IFRS reported revenue; issuer-adjusted EBITDA; annual period |
| LTM 2026-09-27 | 2,867.2 | 381.1 | CADm | Last twelve months constructed as fiscal 2026 plus first half 2027 less first half 2026 for both columns (calculation C9 and C5); issuer-adjusted EBITDA; the issuer's own trailing figure is 381.3 |

Revenue is IFRS reported revenue and Adjusted EBITDA is the issuer-adjusted measure, with the last twelve months constructed from stated components.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Credit Facility (term facility and revolver drawn) | 1 | Yes | 190.0 | 0.68 | CADm | Senior secured by the Company's assets and a pledge of shares of certain subsidiaries, with guarantees from certain subsidiaries; cumulative leverage is 190.0 over last-twelve-months reported EBITDA 277.8; the senior notes and other facilities are left out because no source states their legal rank |

Only the Credit Facility has a stated legal rank, so the senior notes and other facilities are left out and named under Gaps.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), fiscal 2026 | 362.7 | CADm | Issuer-stated reported EBITDA; opening amount |
| Restructuring charges | 23.1 | CADm | Classification: restructuring; realisation status: not stated |
| Acquisition-related transaction costs | 0.8 | CADm | Classification: transaction costs; realisation status: not stated |
| Stock-based compensation forfeiture | -7.3 | CADm | Classification: share-based compensation; reversal on the former CEO's departure; realisation status: not stated |
| Transportation reorganization | 28.3 | CADm | Classification: other (stated as reorganization); realisation status: not stated |
| Services reorganization | 2.6 | CADm | Classification: other (stated as reorganization); realisation status: not stated; 7.2 of related amortization is already outside EBITDA |
| CEO inducement | 1.3 | CADm | Classification: share-based compensation; realisation status: not stated |
| Mark to market portion of stock-based compensation | 1.5 | CADm | Classification: share-based compensation revaluation; realisation status: not stated |
| EBITDA (Adjusted), fiscal 2026 | 413.0 | CADm | Issuer-adjusted EBITDA; closing amount; the bridge adds to it exactly |

The bridge is for fiscal 2026 as the issuer states it, and the last twelve months carry larger add-backs of CAD 103.3 million built in the calculations.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 22 |
| Calculated | 12 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 26 |
| Fields total | 27 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 5 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 40-F_2026-03-31_ats-20260331_d2.htm.jsonl | Annual report on Form 40-F (cover, governance statements, exhibit index) | Fiscal year ended 2026-03-31 | CAD | Not applicable: no statements printed in the supplied text | ATS Corporation consolidated group | IFRS; audited statements are an exhibit that is not supplied | 1 (filed primary document; carries no statements) | Identifies the registrant and shows that annual statements, MD&A and AIF are not supplied | Statements incorporated by reference only |
| 6-K-EX-99.1_2025-12-28_ats-mdaxfy26q3.htm.jsonl | MD&A for the third quarter of fiscal 2026 | Quarter and nine months ended 2025-12-28, as of 2026-02-04 | CAD | millions | ATS Corporation consolidated group | IAS 34 interim, unaudited | 2b | December 2025 Credit Facility amendment, 2025-03-31 facility comparatives, CEO and CFO changes | Management summaries; superseded by later MD&As for current facts |
| 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl | Results news release for the fourth quarter and fiscal year 2026 with statements | Three and twelve months ended 2026-03-31 | CAD | thousands (statements); millions (reconciliations) | ATS Corporation consolidated group | IFRS annual statements as published; non-IFRS reconciliations | 1 (annual statements as published; the audited set is not supplied) | Fiscal 2025 and 2026 statements, year-end net debt, EBITDA reconciliations, FY2026 debt balances | Condensed; no notes; non-IFRS measures defined by management |
| 6-K-EX-99.1_2026-06-28_ats-mdaxfy27q1.htm.jsonl | MD&A for the first quarter of fiscal 2027 | Quarter ended 2026-06-28, as of 2026-08-06 | CAD | millions | ATS Corporation consolidated group | IAS 34 interim, unaudited | 2b | Program announcement and first quarter comparatives; not a primary source for the current period | Superseded by the second-quarter MD&A |
| 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl | MD&A for the second quarter of fiscal 2027 | Quarter and six months ended 2026-09-27, as of 2026-11-04 | CAD | millions | ATS Corporation consolidated group | IAS 34 interim, unaudited | 2b | Debt terms, liquidity, contractual obligations, hedges, controls, quarterly series, net debt table | Covenant levels and definitions not printed |
| 6-K-EX-99.5_2026-06-28_ats-pressreleasexfy27q1.htm.jsonl | Results news release for the first quarter of fiscal 2027 | Quarter ended 2026-06-28 | CAD | thousands (statements); millions (reconciliations) | ATS Corporation consolidated group | IAS 34 interim, unaudited | 2b | First quarter comparatives and program announcement | Condensed; no notes |
| 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl | Results news release for the second quarter of fiscal 2027 with statements | Three and six months ended 2026-09-27 | CAD | thousands (statements); millions (reconciliations) | ATS Corporation consolidated group | IAS 34 interim, unaudited | 2b | Latest statements, non-IFRS reconciliations, net debt, subsequent facility sale, guidance | Condensed; no notes; non-IFRS measures defined by management |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ATS Corporation (Ontario, Canada) | Issuer, registrant, borrower under the Credit Facility and issuer of both senior notes | March 31 | CAD (functional currency stated as the Canadian dollar) | thousands in statements; millions in management tables | Consolidated group: the Company and its subsidiaries | IFRS annual; IAS 34 interim | FY2025, FY2026, H1 2026, H1 2027, Q2 2026, Q2 2027 as statement columns; quarterly series of eight quarters from Q3 2025 to Q2 2027 |
| Subsidiary guarantors | Guarantors of both senior notes: each subsidiary that is a borrower or has guaranteed obligations under the Credit Facility | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: names and contribution of guarantors are not listed in the supplied files | Not supplied: not stated | Not supplied: not stated |
| Restricted and unrestricted groups | Not stated as such; the notes carry customary covenants on the Company and its subsidiaries | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no restricted group definition is printed | Not supplied: not stated | Not supplied: not stated |

Subsequent events after the balance-sheet date of 27 September 2026: the company completed the sale of two U.S. facilities for CAD 71.2 million on a day the source does not state, and agreed to lease one of them back; a forward-starting interest rate swap on the CAD 150.0 million term facility takes effect on 4 November 2026.
Basis: 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 11; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 30

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Statements in thousands restated to millions for the money tables, without rounding | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl | Scale | CAD thousands, for example 1,276,552 | CAD millions, for example 1,276.552 | One money unit for the net debt, chart and register tables | All periods |
| Reported EBITDA and adjusted EBITDA kept as the issuer states them, one decimal, in CAD millions | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl | Source figure, no change | Issuer-stated, for example 362.7 | 362.7 | Statements do not print EBITDA; the issuer's reconciliation is the only source and the statement tie uses the same figure | FY2025, FY2026, H1 2026, H1 2027, Q2 2026, Q2 2027 |
| US dollar notes principal converted to Canadian dollars at the stated period-end rate | 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl | Currency conversion | USD 350.0 million | CAD 494.9 million at CAD 1.414 per USD 1.00 | A rate the sources state is used; no other rate is used | 2026-09-27 |
| Lease liabilities excluded from Total Debt and Net debt | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl | Perimeter and definition | Issuer net debt including leases 1,192.2 | House net debt 1,045.584, with leases of 146.547 shown separately | The method keeps lease liabilities the issuer presents on their own lines out of Total Debt | 2026-09-27, FY2026, FY2025 |
| Last-twelve-months figures built as fiscal 2026 plus first half 2027 less first half 2026 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl | Derived period | Components | Reported EBITDA 277.8; adjusted EBITDA 381.1; cash interest 91.152 | Interim ratios use a twelve-month denominator | 2026-09-27 |
| Closing cash for the first half of 2027 not stated as a figure in the cash flow statement | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl | Identity limitation | Closing cash 230,968 | Not supplied | Printed opening cash plus the net change differs from printed closing cash by 1,158, an IFRS 9 initial-adoption amount printed outside the three activities | H1 2027 |
| Printed dashes in statements recorded as not supplied, not zero | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl | Missing value rule | Dash | Not supplied | The method treats a dash as a missing value with a gap line | Cash flow, income and balance sheet cells named under Gaps |

### T4.4 Income statement

| Line item | FY2025 | FY2026 | H1 2026 | H1 2027 | Q2 2026 | Q2 2027 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenues | 2,533,288 | 2,972,932 | 1,465,176 | 1,359,487 | 728,456 | 665,766 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Cost of revenues | 1,886,641 | 2,122,067 | 1,027,451 | 980,052 | 510,581 | 476,282 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Selling, general and administrative | 604,241 | 620,270 | 300,507 | 298,629 | 149,372 | 144,607 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Restructuring costs | 23,972 | 23,128 | 2,493 | 26,951 | Not supplied: the source prints a dash | 21,293 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Stock-based compensation (recovery) | 9,178 | 8,687 | 1,699 | 6,446 | -6,740 | 389 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Earnings from operations | 9,256 | 198,780 | 133,026 | 47,409 | 75,243 | 23,195 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Net finance costs | 92,194 | 99,579 | 50,054 | 42,920 | 24,413 | 22,201 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Income (loss) before income taxes | -82,938 | 99,201 | 82,972 | 4,489 | 50,830 | 994 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Income tax expense (recovery) | -54,960 | 27,468 | 25,068 | 9,754 | 17,192 | 6,004 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Net income (loss) | -27,978 | 71,733 | 57,904 | -5,265 | 33,638 | -5,010 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Net income (loss) attributable to shareholders | -28,049 | 71,637 | 57,796 | -5,263 | 33,679 | -4,954 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Net income (loss) attributable to non-controlling interests | 71 | 96 | 108 | -2 | -41 | -56 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Basic and diluted earnings (loss) per share | -0.29 | 0.73 | 0.59 | -0.05 | 0.34 | -0.05 | CAD per share | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 |
| Depreciation and amortization (issuer-stated) | 152.7 | 163.9 | 76.8 | 77.5 | 39.4 | 37.3 | CAD millions | Reported, non-IFRS reconciliation table | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14 |
| EBITDA (Reported) | 162.0 | 362.7 | 209.8 | 124.9 | 114.6 | 60.5 | CAD millions | Issuer-stated EBITDA: earnings from operations plus depreciation and amortization, non-IFRS; interim figures unaudited; reported one decimal | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14 |
| EBITDA (Adjusted) | 368.9 | 413.0 | 205.3 | 173.4 | 103.7 | 80.7 | CAD millions | Issuer-adjusted EBITDA: EBITDA plus the add-backs of the EBITDA bridge, non-IFRS; add-backs named in the bridge table and the definition register | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14 |
| Adjusted revenues (issuer-stated) | 2,680.2 | 2,970.1 | 1,465.2 | 1,364.1 | 728.5 | 665.8 | CAD millions | Reported, non-IFRS reconciliation table | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 4 |
| Adjusted earnings from operations (issuer-stated) | 282.6 | 314.4 | 157.7 | 125.5 | 79.1 | 57.4 | CAD millions | Reported, non-IFRS reconciliation table | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14 |

### T4.5 Cash flow statement

| Line item | FY2025 | FY2026 | H1 2026 | H1 2027 | Q2 2026 | Q2 2027 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | -27,978 | 71,733 | 57,904 | -5,265 | 33,638 | -5,010 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Depreciation of property, plant and equipment | 33,674 | 34,470 | 17,020 | 17,259 | 8,616 | 7,586 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Amortization of right-of-use assets | 33,824 | 38,821 | 18,801 | 19,304 | 9,848 | 9,347 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Amortization of intangible assets | 85,172 | 90,582 | 40,924 | 40,931 | 20,967 | 20,330 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Impairment of assets | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the source prints a dash | 7,088 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Deferred income taxes | -84,546 | -37,522 | -25,270 | -14,721 | -3,256 | -3,855 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Other items not involving cash | -16,971 | -1,345 | -265 | -3,305 | 3,178 | 2,012 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Stock-based compensation | 10,564 | 5,057 | 823 | 7,990 | -3,502 | 3,598 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Change in non-cash operating working capital | -7,968 | 246,587 | 74,336 | 1,052 | -40,998 | 46,673 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Net Cash from Operating Activities | 25,771 | 448,383 | 184,273 | 70,333 | 28,491 | 80,681 | CAD thousands | Reported total; inflow positive | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Acquisition of property, plant and equipment | -33,952 | -33,642 | -15,229 | -16,185 | -8,135 | -8,161 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Acquisition of intangible assets | -44,078 | -43,134 | -19,480 | -17,600 | -10,240 | -10,013 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Business acquisitions, net of cash acquired | -179,389 | Not supplied: the source prints a dash | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Settlement of cross-currency interest rate swap instrument (investing) | -16,555 | Not supplied: the source prints a dash | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Proceeds from disposal of property, plant and equipment | 5,532 | 740 | 125 | 1,225 | 34 | 176 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Net Cash from Investing Activities | -268,442 | -76,036 | -34,584 | -32,560 | -18,341 | -17,998 | CAD thousands | Reported total; outflow negative | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Bank indebtedness | 22,478 | -20,420 | -19,967 | -4,369 | 5,098 | 1,537 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Repayment of long-term debt | -573,777 | -331,424 | -215,070 | -50,116 | -40,047 | -49 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Proceeds from long-term debt | 907,015 | 84,999 | 84,999 | 40,000 | 39,999 | 40,000 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Settlement of cross-currency interest rate swap instrument (financing) | 24,262 | Not supplied: the source prints a dash | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Proceeds from exercise of stock options | 495 | 12,422 | 11,033 | 636 | 10,607 | 118 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Purchase of non-controlling interest | Not supplied: the source prints a dash | -4,370 | -4,370 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | Not supplied: the source prints a dash | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Repurchase of common shares | -44,983 | -10,000 | -10,000 | -61,297 | Not supplied: the source prints a dash | -61,297 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Acquisition of shares held in trust | -14,690 | -9,616 | -9,616 | -2,589 | -9,616 | -2,589 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Principal lease payments | -30,519 | -34,676 | -16,672 | -17,500 | -8,751 | -8,945 | CAD thousands | Reported in financing activities (lease principal outside operating cash flow) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Net Cash from Financing Activities | 290,281 | -313,085 | -179,663 | -95,235 | -2,710 | -31,225 | CAD thousands | Reported total; outflow negative; interest paid and lease principal sit here or in operating as stated by the issuer | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| FX Effect on Cash | 8,160 | -252 | 1,339 | 2,315 | 1,263 | 577 | CAD thousands | Reported effect of exchange rate changes on cash | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Net Cash Change | 55,770 | 59,010 | -28,635 | -55,147 | 8,703 | 32,035 | CAD thousands | Reported increase (decrease): operating plus investing plus financing plus FX effect | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Opening Cash | 170,177 | 225,947 | 225,947 | 284,957 | 188,609 | 198,933 | CAD thousands | Reported beginning-of-period cash | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Initial adoption of amendments to IFRS 9 | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | Not supplied: the source prints a dash | 1,158 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | CAD thousands | Reported amount added to cash on 2026-04-01 outside the three activities | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Closing Cash | 225,947 | 284,957 | 197,312 | Not supplied: printed closing cash 230,968 differs from opening cash 284,957 plus net change -55,147 by 1,158, an IFRS 9 initial-adoption amount printed outside the three activities | 197,312 | 230,968 | CAD thousands | Reported end-of-period cash | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Cash income taxes paid | 61,936 | 42,166 | 14,104 | 25,799 | 12,115 | 866 | CAD thousands | Reported supplemental cash taxes paid | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |
| Cash Interest Paid | 95,151 | 97,501 | 49,648 | 43,299 | 29,639 | 27,371 | CAD thousands | Reported supplemental cash interest paid, positive amount; differs from net finance costs | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2026 | H1 2027 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 225,947 | 284,957 | 230,968 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Accounts receivable | 719,435 | 523,738 | 521,208 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Income tax receivable | 32,065 | 10,356 | 17,686 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Contract assets | 503,552 | 436,847 | 406,746 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Inventories | 320,172 | 295,206 | 301,618 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Deposits, prepaids and other assets | 104,179 | 94,873 | 95,412 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Assets held for sale | Not supplied: the source prints a dash | 60,302 | 61,263 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Total current assets | 1,905,350 | 1,706,279 | 1,634,901 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Property, plant and equipment | 325,048 | 259,791 | 259,217 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Right-of-use assets | 122,291 | 147,054 | 137,276 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Long-term deposits | 4,992 | 3,710 | 3,896 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Other assets | 7,062 | 4,464 | 9,737 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Goodwill | 1,394,576 | 1,399,253 | 1,411,763 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Intangible assets | 758,531 | 704,210 | 680,300 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Deferred income tax assets | 104,022 | 115,269 | 130,220 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Total non-current assets | 2,716,522 | 2,633,751 | 2,632,409 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Total Assets | 4,621,872 | 4,340,030 | 4,267,310 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Bank indebtedness | 27,271 | 6,744 | 2,407 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Accounts payable and accrued liabilities | 665,109 | 622,436 | 608,761 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Income tax payable | 40,073 | 34,123 | 39,839 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Contract liabilities | 330,134 | 307,306 | 290,844 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Provisions | 29,960 | 32,100 | 38,750 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Current portion of lease liabilities | 32,694 | 35,202 | 36,652 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Current portion of long-term debt | 219 | 173 | 177 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Total current liabilities | 1,125,460 | 1,038,084 | 1,017,430 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Employee benefits | 25,805 | 26,075 | 26,684 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Long-term provisions | 1,000 | 468 | 4,775 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Long-term lease liabilities | 96,699 | 119,486 | 109,895 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Long-term debt | 1,543,459 | 1,274,552 | 1,273,968 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Deferred income tax liabilities | 100,573 | 80,462 | 79,201 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Other long-term liabilities | 19,519 | 21,445 | 19,560 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Total non-current liabilities | 1,787,055 | 1,522,488 | 1,514,083 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Total Liabilities | 2,912,515 | 2,560,572 | 2,531,513 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Share capital | 842,015 | 852,805 | 835,589 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Contributed surplus | 36,539 | 30,758 | 33,263 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Accumulated other comprehensive income | 166,855 | 171,573 | 189,658 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Retained earnings | 660,368 | 722,621 | 675,583 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Equity attributable to shareholders | 1,705,777 | 1,777,757 | 1,734,093 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Non-controlling interests | 3,580 | 1,701 | 1,704 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Total Equity | 1,709,357 | 1,779,458 | 1,735,797 | CAD thousands | Reported total equity including non-controlling interests | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Total Debt | 1,570,949 | 1,281,469 | 1,276,552 | CAD thousands | Calculated: bank indebtedness plus current portion of long-term debt plus long-term debt, balance-sheet carrying value net of issuance costs; lease liabilities excluded because the issuer carries them on their own lines (calculation C1) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |
| Lease liabilities (current plus long-term, not in Total Debt) | 129,393 | 154,688 | 146,547 | CAD thousands | Calculated: current portion of lease liabilities plus long-term lease liabilities (calculation C2) | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 16–17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Credit Facility: term credit facility | Term loan | Not supplied: carrying value by instrument is not disclosed | 150.0 | 150.0 | 150.0 | Secured by the Company's assets, including a pledge of shares of certain subsidiaries; guarantees from certain subsidiaries | Senior secured, as the filing names it | CAD | 150.0 | Not applicable | Margin 1.45% to 3.00% over the reference rate, set by net debt to EBITDA; swapped to fixed 3.264% from 2026-11-04 to 2028-11-04 | floating | Term CORRA, Daily Compounded CORRA, Term SOFR, EURIBOR or Daily Simple SONIA by currency | 145 to 300 | Not supplied: not stated | 2029-12-04 | Not supplied: scheduled repayments are not stated | 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 26; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 30 |
| Credit Facility: revolving line of credit | Revolver | Not supplied: carrying value by instrument is not disclosed | 40.0 | 40.0 | 900.0 | Secured by the Company's assets, including a pledge of shares of certain subsidiaries; guarantees from certain subsidiaries | Senior secured, as the filing names it | CAD | 40.0 | Not applicable | Margin 1.45% to 3.00% over the reference rate for term-rate advances; prime or base rate plus 0.45% to 2.00%; standby fee 0.29% to 0.60% on the unadvanced part | floating | Term CORRA, Daily Compounded CORRA, Term SOFR, EURIBOR or Daily Simple SONIA by currency | 145 to 300 | Not supplied: not stated | 2029-12-04 | 0, a revolving line with no scheduled repayment | 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 26 |
| U.S. Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 350.0 | 350.0 | Not applicable | Not supplied: lien status is not stated; guaranteed by each subsidiary that is a borrower or has guaranteed obligations under the Credit Facility | Not supplied: ranking is not stated beyond the name | USD | 494.9 | 1.414 CAD/USD (stated period-end rate) | 4.125% per annum | fixed | Not applicable | Not applicable | Not applicable | 2028-12-15 | 0, a single maturity at par is stated | 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 27; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 31 |
| CAD Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 600.0 | 600.0 | Not applicable | Not supplied: lien status is not stated; guaranteed by each subsidiary that is a borrower or has guaranteed obligations under the Credit Facility | Not supplied: ranking is not stated beyond the name | CAD | 600.0 | Not applicable | 6.50% per annum | fixed | Not applicable | Not applicable | Not applicable | 2032-08-21 | 0, a single maturity at par is stated | 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 28 |
| Other credit facilities (bank indebtedness 2.4 and long-term debt 1.8) | Bank facilities in several currencies | Not supplied: carrying value by instrument is not disclosed | 4.2 | 4.2 | 111.6 | Not supplied: a portion of the long-term debt is secured by certain assets; which portion is not stated | Not supplied: not stated | Several (EUR, USD, THB, GBP, CNY, AUD, CAD) | 4.2 | Not applicable | 3.05% to 7.00% per annum in local currency | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 27 |
| Financing cost adjustment | Derived reconciling row | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | CAD | -12.548 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Derived as carrying value 1,276.552 less the other rows' amounts 1,289.1 (calculation C16); original deferred fees of 8.1, 9.6 and 2.6 and a premium of 1.3 are stated, unamortised balances are not |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM | CAD 362.7m | CAD 124.9m | CAD 209.8m | CAD 277.8m | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–13; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14 | Issuer-stated components; derived value depends on their one-decimal rounding |
| EBITDA (Adjusted) | LTM | CAD 413.0m | CAD 173.4m | CAD 205.3m | CAD 381.1m | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, pages 12–13; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14 | Issuer-adjusted components; the issuer's own trailing pro forma figure is 381.3, a 0.2 difference from rounding of quarterly components |
| Revenue (IFRS) | LTM | CAD 2,972.9m | CAD 1,359.5m | CAD 1,465.2m | CAD 2,867.2m | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 2; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 4 | One-decimal issuer figures |
| Adjusted revenue (non-IFRS) | LTM | CAD 2,970.1m | CAD 1,364.1m | CAD 1,465.2m | CAD 2,869.0m | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 | One-decimal issuer figures; first half 2027 includes a 4.6 transportation reorganization revenue adjustment |
| Cash interest paid | LTM | CAD 97.501m | CAD 43.299m | CAD 49.648m | CAD 91.152m | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 21 | Statement figures; cash paid, not accrued finance cost |
| Net cash from operating activities | LTM | CAD 448.383m | CAD 70.333m | CAD 184.273m | CAD 334.443m | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 | The first half of 2026 includes collection of the EV customer settlement, whose amount is not stated |
| Capital expenditure (property, plant and equipment plus intangible assets) | LTM | CAD 76.776m | CAD 33.785m | CAD 34.709m | CAD 75.852m | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 | Sum of the two statement lines |
| Free cash flow (operating cash flow less capital expenditure) | LTM | CAD 371.607m | CAD 36.548m | CAD 149.564m | CAD 258.591m | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, pages 20–21 | Calculated from statement lines; the issuer's stated 371.7 for fiscal 2026 differs by 0.093 because it subtracts rounded components |
| Net income (loss) | LTM | CAD 71.733m | CAD -5.265m | CAD 57.904m | CAD 8.564m | Calculated | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20 | Statement figures |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,570.949 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | 162.0 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 | FY2025 / 2025-03-31 | CAD | CADm | 9.70 | Calculated | 1 | Reported EBITDA depressed by the 171.1 EV customer settlement charge |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,345.002 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | 162.0 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 | FY2025 / 2025-03-31 | CAD | CADm | 8.30 | Calculated | 1 | Reported EBITDA depressed by the 171.1 EV customer settlement charge |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 162.0 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 | 95.151 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18 | FY2025 / 2025-03-31 | CAD | CADm | 1.70 | Calculated | 1 | Reported EBITDA depressed by the 171.1 EV customer settlement charge |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,570.949 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | 368.9 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13 | FY2025 / 2025-03-31 | CAD | CADm | 4.26 | Calculated | 1 | Issuer-adjusted EBITDA includes add-backs listed in the bridge |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,345.002 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | 368.9 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13 | FY2025 / 2025-03-31 | CAD | CADm | 3.65 | Calculated | 1 | Issuer-adjusted EBITDA includes add-backs listed in the bridge |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 368.9 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13 | 95.151 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18 | FY2025 / 2025-03-31 | CAD | CADm | 3.88 | Calculated | 1 | Issuer-adjusted EBITDA includes add-backs listed in the bridge |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,281.469 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | 362.7 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 | FY2026 / 2026-03-31 | CAD | CADm | 3.53 | Calculated | 1 | Interim and annual statements are condensed |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 996.512 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | 362.7 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 | FY2026 / 2026-03-31 | CAD | CADm | 2.75 | Calculated | 1 | Interim and annual statements are condensed |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 362.7 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 | 97.501 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18 | FY2026 / 2026-03-31 | CAD | CADm | 3.72 | Calculated | 1 | Interim and annual statements are condensed |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,281.469 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | 413.0 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13 | FY2026 / 2026-03-31 | CAD | CADm | 3.10 | Calculated | 1 | Issuer-adjusted EBITDA includes add-backs listed in the bridge |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 996.512 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | 413.0 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13 | FY2026 / 2026-03-31 | CAD | CADm | 2.41 | Calculated | 1 | Issuer-adjusted EBITDA includes add-backs listed in the bridge |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 413.0 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13 | 97.501 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18 | FY2026 / 2026-03-31 | CAD | CADm | 4.24 | Calculated | 1 | Issuer-adjusted EBITDA includes add-backs listed in the bridge |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,276.552 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 (calculation C1) | 277.8 | calculation C4 | 2026-09-27 | CAD | CADm | 4.60 | Calculated | 2b | Denominator is a constructed last-twelve-months figure; unaudited |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,045.584 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 (calculation C1) | 277.8 | calculation C4 | 2026-09-27 | CAD | CADm | 3.76 | Calculated | 2b | Denominator is a constructed last-twelve-months figure; unaudited |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 277.8 | calculation C4 | 91.152 | calculation C6 | 2026-09-27 | CAD | CADm | 3.05 | Calculated | 2b | Denominator is a constructed last-twelve-months figure; unaudited |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,276.552 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 (calculation C1) | 381.1 | calculation C5 | 2026-09-27 | CAD | CADm | 3.35 | Calculated | 2b | Issuer-adjusted EBITDA includes add-backs listed in the bridge |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,045.584 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 (calculation C1) | 381.1 | calculation C5 | 2026-09-27 | CAD | CADm | 2.74 | Calculated | 2b | Issuer-adjusted EBITDA includes add-backs listed in the bridge |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 381.1 | calculation C5 | 91.152 | calculation C6 | 2026-09-27 | CAD | CADm | 4.18 | Calculated | 2b | Issuer-adjusted EBITDA includes add-backs listed in the bridge |
| FCF conversion | FCF / EBITDA (Reported) | 371.607 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18 (calculation C8) | 362.7 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 | FY2026 | CAD | CADm | 1.02 | Calculated | 1 | Statement-derived FCF |
| FCF conversion | FCF / EBITDA (Reported) | 258.591 | calculation C8 | 277.8 | calculation C4 | LTM 2026-09-27 | CAD | CADm | 0.93 | Calculated | 2b | Constructed last twelve months |
| EBITDA less capex over cash interest | (EBITDA (Reported) - Capex) / Cash Interest Paid | 285.924 | calculation C8 | 97.501 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18 | FY2026 | CAD | CADm | 2.93 | Calculated | 1 | Numerator is 362.7 less capital expenditure of 76.776 |
| EBITDA less capex over cash interest | (EBITDA (Reported) - Capex) / Cash Interest Paid | 201.948 | calculation C8 | 91.152 | calculation C6 | LTM 2026-09-27 | CAD | CADm | 2.22 | Calculated | 2b | Numerator is 277.8 less capital expenditure of 75.852 |
| Operating cash flow / total debt | Net cash from operating activities / Total debt | 448.383 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 18 | 1,281.469 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | FY2026 | CAD | CADm | 0.35 | Calculated | 1 | Fiscal 2026 includes a 246.587 working capital release |
| Operating cash flow / total debt | Net cash from operating activities / Total debt | 334.443 | calculation C7 | 1,276.552 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 | LTM 2026-09-27 | CAD | CADm | 0.26 | Calculated | 2b | Constructed last-twelve-months operating cash flow over the 2026-09-27 debt |
| FCF / total debt | FCF / Total debt | 371.607 | calculation C8 | 1,281.469 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | FY2026 | CAD | CADm | 0.29 | Calculated | 1 | Statement-derived FCF |
| FCF / total debt | FCF / Total debt | 258.591 | calculation C8 | 1,276.552 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 | LTM 2026-09-27 | CAD | CADm | 0.20 | Calculated | 2b | Constructed last twelve months |
| Liquidity / total debt | (Cash + Undrawn committed facilities) / Total debt | 1,134.957 | calculation C24 | 1,281.469 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 17 | FY2026 | CAD | CADm | 0.89 | Calculated | 1 | Undrawn counts the committed revolver only |
| Liquidity / total debt | (Cash + Undrawn committed facilities) / Total debt | 1,090.968 | calculation C24 | 1,276.552 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 | 2026-09-27 | CAD | CADm | 0.85 | Calculated | 2b | Undrawn counts the committed revolver only |
| Capex / revenue | Capex / Revenue (IFRS) x 100 in percent | 76.776 | calculation C8 | 2,972.9 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 2 | FY2026 | CAD | CADm | 2.58 | Calculated | 1 | Percent; capex is property, plant and equipment plus intangible assets |
| Capex / revenue | Capex / Revenue (IFRS) x 100 in percent | 75.852 | calculation C8 | 2,867.2 | calculation C9 | LTM 2026-09-27 | CAD | CADm | 2.65 | Calculated | 2b | Percent; constructed last twelve months |
| Revenue growth | Revenue (IFRS) / prior-year revenue - 1, in percent | 2,972.9 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 2 | 2,533.3 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 2 | FY2026 | CAD | CADm | 17.35 | Calculated | 1 | Fiscal 2025 revenue includes the 146.9 EV settlement |
| Revenue growth | Revenue (IFRS) / prior-year revenue - 1, in percent | 1,359.5 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 4 | 1,465.2 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 4 | H1 2027 | CAD | CADm | -7.21 | Calculated | 2b | First half over first half |
| Adjusted EBITDA growth | EBITDA (Adjusted) / prior-year EBITDA (Adjusted) - 1, in percent | 413.0 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13 | 368.9 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13 | FY2026 | CAD | CADm | 11.95 | Calculated | 1 | Issuer-adjusted measure |
| Adjusted EBITDA growth | EBITDA (Adjusted) / prior-year EBITDA (Adjusted) - 1, in percent | 173.4 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14 | 205.3 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14 | H1 2027 | CAD | CADm | -15.54 | Calculated | 2b | Issuer-adjusted measure; first half over first half |
| Add-backs share of adjusted EBITDA | (EBITDA (Adjusted) - EBITDA (Reported)) / EBITDA (Adjusted) x 100 in percent | 103.3 | calculation C11 | 381.1 | calculation C5 | LTM 2026-09-27 | CAD | CADm | 27.11 | Calculated | 2b | Percent; add-backs are 103.3 over the last twelve months |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2025 | FY2026 | Q2 2026 | Q2 2027 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Orders | Order Bookings, CAD millions (period flow) | 3,305 | 2,952 | 734 | 827 | Up in Q2 year on year, down for the full year | Q2 2027 up 12.7% year on year and 26.1% on the first quarter; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 1 |
| Orders | Order Backlog, CAD millions (period end) | 2,139 | 1,958 | 2,070 | 2,009 | Down year on year | Down 2.9% on 2026-09-28; life sciences 1,238 of 2,009; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 15 |
| Orders | Book-to-bill, trailing twelve months (period end) | Not supplied: not stated in the supplied files | 0.99:1 | Not supplied: not stated in the supplied files | 1.05:1 approximately | Improving | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 4; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 2 |
| Margin | Adjusted EBITDA margin, % of adjusted revenue (period flow) | 13.8 | 13.9 | 14.2 | 12.1 | Down in Q2 year on year | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 2; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 4 |
| Margin | Adjusted earnings from operations margin, % (period flow) | 10.5 | 10.6 | 10.9 | 8.6 | Down in Q2 year on year | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 2; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 4 |
| Margin | Gross margin, % of revenue (period flow) | Not supplied: not stated in the supplied files | Not supplied: not stated in the supplied files | 29.9 | 28.5 | Down | 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 17 |
| Working capital | Non-cash working capital, % of annualised adjusted revenue (period end) | 22.4 | 12.1 | Not supplied: not stated in the supplied files | 13.4 | Up since year end; target below 15 | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 15; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 17 |
| Cash | Cash and cash equivalents, CAD millions as the issuer rounds them (period end) | 225.9 | 285.0 | 197.3 | 231.0 | Down since year end | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 15; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 24 |
| Cash | Free cash flow, CAD millions as the issuer states it (period flow) | -52.3 | 371.7 | 10.2 | 62.5 | Q2 up year on year; first half down | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 15; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 18 |
| Leverage | Net debt to pro forma adjusted EBITDA, issuer definition including leases (period end) | 3.9x | 2.8x | Not supplied: not stated in the supplied files | 3.1x | Up since year end; target range 2.0x to 3.0x | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 15; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 17; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 6 |
| Growth | Organic revenue growth, % (period flow) | Not supplied: not stated in the supplied files | Not supplied: not stated in the supplied files | Not supplied: not stated in the supplied files | -9.1 | Down | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 17 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net debt | Carrying value of bank indebtedness, current and long-term debt, less cash; lease liabilities on their own lines excluded | Cash less bank indebtedness, long-term debt and lease liabilities (net debt 1,192.2 at 2026-09-27) | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 17; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 23 | FY2025, FY2026, 2026-09-27 | Lease liabilities of 146.547 at 2026-09-27, equal to 0.53x of last-twelve-months reported EBITDA; including them the reported-basis net leverage would be 4.29x | Financial foundation; Liquidity; Fundamental credit | House figure 1,045.584 used for ratios; issuer figure shown beside it; leases shown separately in the balance sheet table |
| EBITDA | Reported EBITDA is the denominator; adjusted shown beside it, labelled | Adjusted EBITDA adds back restructuring, reorganization, inducement, acquisition and share-based compensation revaluation items | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 14; 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13 | FY2025, FY2026, LTM 2026-09-27 | Last twelve months: adjusted 381.1 against reported 277.8, a gap of 103.3, 27.11% of adjusted; 99.8 of it is restructuring or reorganization | Financial foundation; Fundamental credit; Liquidity | Reported EBITDA used in the charts; adjusted ratios shown in the calculation register |
| Pro forma adjusted EBITDA (trailing twelve months) | Constructed last twelve months from fiscal year plus current stub less prior-year stub | Issuer states 381.3 as pro forma adjusted EBITDA for the trailing twelve months; the four reported quarterly adjusted figures 105.2, 102.5, 92.9 and 80.7 also sum to 381.3 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 17; 6-K-EX-99.1_2025-12-28_ats-mdaxfy26q3.htm.jsonl, page 3; 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 1; 6-K-EX-99.5_2026-06-28_ats-pressreleasexfy27q1.htm.jsonl, page 1; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 1 | 2026-09-27 | 0.2 between 381.1 and 381.3, from rounding of one-decimal quarterly and half-year figures; no acquisition adjustment is itemised | Financial foundation | Constructed 381.1 used; issuer 381.3 shown beside it |
| Undrawn credit available | Undrawn committed facilities only | Unutilised multipurpose credit including letters of credit of 966.7, over the Credit Facility and other facilities | 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 26; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 27 | 2026-09-27 | Components stated give 967.4 (900.0 less 40.0 plus 111.6 less 4.2), 0.7 above the issuer's 966.7; the 111.6 of other facilities has no stated commitment status | Liquidity | Only the 900.0 revolver less drawings counted as undrawn committed: 860.0 |
| Free cash flow | Operating cash flow less capital expenditure on property, plant, equipment and intangibles; lease principal shown separately | Cash flows from operating activities less acquisition of property, plant and equipment and of intangible assets, before principal lease payments of 17.5 in the first half of 2027 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 18; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 21 | FY2025, FY2026, H1 2027 | Lease principal of 34.676 in fiscal 2026 is outside the issuer's free cash flow; the issuer's fiscal 2026 figure of 371.7 sums rounded components and statement lines give 371.607 | Financial foundation; Fundamental credit | Statement-derived figures used; issuer figures shown in the dashboard |
| Cash interest | Cash interest paid from the cash flow statement | Net finance costs in the income statement (42.920 in the first half of 2027) | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 20; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 21 | H1 2027 | Cash interest paid 43.299 against net finance costs 42.920; they differ by 0.379 | Financial foundation | Cash interest paid used for cover; finance costs shown in the income statement |
| Market split of revenue | One series per definition, never joined | Fiscal 2026 reports Life Sciences, Consumer Products, Food & Beverage, Energy and Transportation; fiscal 2027 reports Life Sciences, Industrial & Consumer, Food & Beverage and Energy | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 | FY2025, FY2026, H1 2026, H1 2027, Q2 2026, Q2 2027 | Transportation and Consumer Products are folded into Industrial & Consumer from fiscal 2027; the issuer restates the prior-year half and quarter on the new cut but not fiscal 2025 or 2026 | Business & governance; Fundamental credit | Two series kept apart in the segment register |
| EV customer settlement (multi-figure event) | All figures with their statement roles in one row | Fiscal 2025: revenue portion 146.9; EBITDA effect 171.1; collection in the first quarter of fiscal 2026 is not quantified | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 13; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 24 | FY2025, H1 2026, FY2026 | Reported EBITDA of fiscal 2025 is 162.0 after a 171.1 charge, so reported leverage for fiscal 2025 is not a run-rate; the first-half 2026 operating cash flow of 184.273 includes the collection | Financial foundation; Fundamental credit | Fiscal 2025 reported ratios shown, flagged; last-twelve-months ratios exclude the collection by construction |
| Carrying value against principal | Carrying value used; principal logged beside it | Principal 1,289.1 against carrying 1,276.552 at 2026-09-27 | 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 26; 6-K-EX-99.1_2026-09-27_ats-mdaxfy27q2.htm.jsonl, page 28; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 | 2026-09-27 | Difference of 12.548: unamortised issuance costs, premium and rounding; the instrument-level carrying values are not stated | Financial foundation; Refinancing & LME | Both figures retained; the reconciling row of the debt instrument register carries the difference |
| Debt to equity | Not a method metric | Bank indebtedness, long-term debt and lease liabilities over total equity less accumulated other comprehensive income: 0.92:1 | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 19 | 2026-09-27 | Includes leases, so it is not comparable with the house debt measure | Financial foundation | Shown in the dashboard only if needed; not used in ratios |

### T4.16 Segment revenue

| Segment | Period | Adjusted Revenue | Currency | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Life Sciences | Q2 2027 | 355.8 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Industrial & Consumer | Q2 2027 | 136.4 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Food & Beverage | Q2 2027 | 99.6 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Energy | Q2 2027 | 74.0 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Life Sciences | Q2 2026 | 374.5 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Industrial & Consumer | Q2 2026 | 178.2 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Food & Beverage | Q2 2026 | 124.8 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Energy | Q2 2026 | 51.0 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Life Sciences | H1 2027 | 701.6 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Industrial & Consumer | H1 2027 | 312.0 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Food & Beverage | H1 2027 | 216.6 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Energy | H1 2027 | 133.9 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Life Sciences | H1 2026 | 753.2 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Industrial & Consumer | H1 2026 | 362.4 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Food & Beverage | H1 2026 | 263.2 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Energy | H1 2026 | 86.4 | CAD | millions | Reported, fiscal 2027 market definitions; end-market split, not IFRS operating segments | 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |
| Life Sciences | FY2026 | 1,522.0 | CAD | millions | Reported, fiscal 2026 market definitions; not joined to the fiscal 2027 series | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 |
| Consumer Products | FY2026 | 553.0 | CAD | millions | Reported, fiscal 2026 market definitions; not joined to the fiscal 2027 series | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 |
| Food & Beverage | FY2026 | 498.8 | CAD | millions | Reported, fiscal 2026 market definitions; not joined to the fiscal 2027 series | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 |
| Energy | FY2026 | 226.6 | CAD | millions | Reported, fiscal 2026 market definitions; not joined to the fiscal 2027 series | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 |
| Transportation | FY2026 | 169.7 | CAD | millions | Reported, fiscal 2026 market definitions; not joined to the fiscal 2027 series | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 |
| Life Sciences | FY2025 | 1,471.8 | CAD | millions | Reported, fiscal 2026 market definitions; not joined to the fiscal 2027 series | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 |
| Consumer Products | FY2025 | 335.7 | CAD | millions | Reported, fiscal 2026 market definitions; not joined to the fiscal 2027 series | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 |
| Food & Beverage | FY2025 | 416.9 | CAD | millions | Reported, fiscal 2026 market definitions; not joined to the fiscal 2027 series | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 |
| Energy | FY2025 | 124.0 | CAD | millions | Reported, fiscal 2026 market definitions; not joined to the fiscal 2027 series | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 |
| Transportation | FY2025 | 331.8 | CAD | millions | Reported, fiscal 2026 market definitions; not joined to the fiscal 2027 series | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12 |
| Corporate and eliminations | All periods | Not supplied: no corporate or elimination line is printed in the market split | CAD | millions | The market split sums to total adjusted revenues in every period | 6-K-EX-99.1_2026-03-31_ats-pressreleasexfy26q4.htm.jsonl, page 12; 6-K-EX-99.5_2026-09-27_ats-pressreleasexfy27q2.htm.jsonl, page 13 |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Reported and adjusted leverage and interest cover for fiscal 2025, fiscal 2026 and the last twelve months | Ready with Limitations | Interim statements unaudited and condensed; last-twelve-months denominators constructed; lease treatment differs from the issuer's | Confirm against the audited annual statements and the covenant compliance certificate |
| Liquidity and maturity profile | Ready with Limitations | Commitment status of other facilities and the letter of credit facilities not stated; split of letters of credit by purpose not stated | Obtain the facility terms and a schedule of letters of credit |
| Debt stack by legal rank | Not Ready | Only the Credit Facility has a stated legal rank; security and ranking of both senior notes are not stated | Obtain the note indentures or the annual information form |
| Covenant headroom | Not Ready | Test levels, step-downs and definitions are not printed; sources state only that covenants were met | Obtain the credit agreement and the compliance certificate |
| Cash flow quality and free cash flow | Ready with Limitations | Working capital swings dominate fiscal 2026; the EV settlement collection is not quantified | Obtain the annual statements notes on working capital and the settlement |
| Market and revenue mix analysis | Ready with Limitations | Market definitions changed in fiscal 2027; fiscal 2025 and 2026 not restated | Ask the issuer for restated fiscal 2026 market revenue |

## Calculations

| Calculation ID | Calculation | Inputs | Result |
| --- | --- | --- | --- |
| C1 | Total debt at carrying value, excluding leases: bank indebtedness plus current portion of long-term debt plus long-term debt, in thousands then millions | 2025-03-31: 27,271 + 219 + 1,543,459; 2026-03-31: 6,744 + 173 + 1,274,552; 2026-09-27: 2,407 + 177 + 1,273,968 | 1,570,949; 1,281,469; 1,276,552 thousands, that is 1,570.949; 1,281.469; 1,276.552 millions |
| C2 | Lease liabilities, current plus long-term | 2025-03-31: 32,694 + 96,699; 2026-03-31: 35,202 + 119,486; 2026-09-27: 36,652 + 109,895 | 129,393; 154,688; 146,547 thousands |
| C3 | Net debt: total debt less cash | 1,570.949 - 225.947; 1,281.469 - 284.957; 1,276.552 - 230.968 | 1,345.002; 996.512; 1,045.584 |
| C4 | Last-twelve-months reported EBITDA: fiscal 2026 plus first half 2027 less first half 2026 | 362.7 + 124.9 - 209.8 | 277.8 |
| C5 | Last-twelve-months adjusted EBITDA | 413.0 + 173.4 - 205.3 | 381.1 |
| C6 | Last-twelve-months cash interest paid | 97.501 + 43.299 - 49.648 | 91.152 |
| C7 | Last-twelve-months net cash from operating activities | 448.383 + 70.333 - 184.273 | 334.443 |
| C8 | Capital expenditure and free cash flow from statement lines; last twelve months | Capex: fiscal 2026 33.642 + 43.134 = 76.776; first half 2027 16.185 + 17.600 = 33.785; first half 2026 15.229 + 19.480 = 34.709; 76.776 + 33.785 - 34.709. Free cash flow: 448.383 - 76.776 = 371.607; 70.333 - 33.785 = 36.548; 184.273 - 34.709 = 149.564; 371.607 + 36.548 - 149.564 | Capex 75.852; free cash flow 258.591 |
| C9 | Last-twelve-months revenue (IFRS) | 2,972.9 + 1,359.5 - 1,465.2 | 2,867.2 |
| C10 | Last-twelve-months adjusted revenue | 2,970.1 + 1,364.1 - 1,465.2 | 2,869.0 |
| C11 | Last-twelve-months add-backs, line by line, and the gap between adjusted and reported EBITDA (a dash in a component column is read as nil, which the matching total confirms) | Restructuring 23.1 + 27.0 - 2.5 = 47.6; transaction costs 0.8 + 0.2 - 0.4 = 0.6; share-based compensation forfeiture -7.3 + 0 - (-7.3) = 0.0; transportation reorganization 28.3 + 7.6 - 0 = 35.9; services reorganization 2.6 + 4.0 - 0 = 6.6; CEO inducement 1.3 + 2.8 - 0 = 4.1; software-focused businesses reorganization 0 + 7.1 - 0 = 7.1; other reorganization-related 0 + 2.6 - 0 = 2.6; mark to market share-based compensation 1.5 + (-2.8) - (-0.1) = -1.2. Sum of lines 47.6 + 0.6 + 0.0 + 35.9 + 6.6 + 4.1 + 7.1 + 2.6 - 1.2; gap 381.1 - 277.8; restructuring and reorganization lines 47.6 + 35.9 + 6.6 + 7.1 + 2.6 | Sum of lines 103.3; gap 103.3; restructuring and reorganization 99.8 |
| C12 | Key leverage and cover ratios | Net debt over last-twelve-months reported EBITDA 1,045.584 / 277.8; over fiscal 2026 EBITDA 996.512 / 362.7; cover 277.8 / 91.152 and 362.7 / 97.501; adjusted net 1,045.584 / 381.1 and 996.512 / 413.0 | 3.76; 2.75; 3.05; 3.72; 2.74; 2.41 |
| C13 | Undrawn committed revolver: 900.0 committed less revolver drawings (credit facility utilised less the 150.0 term facility) | 2026-03-31: 900.0 - (200.0 - 150.0); 2026-09-27: 900.0 - (190.0 - 150.0) | 850.0; 860.0 |
| C14 | US dollar senior notes principal in Canadian dollars at the stated period-end rate | 350.0 x 1.414 | 494.9 |
| C15 | Contractual principal of the three instruments with a stated maturity | 494.9 + 190.0 + 600.0 | 1,284.9 |
| C16 | Reconciling items: carrying value less contractual principal, split into other facilities left out of the ladder and the derived residual | 1,276.552 - 1,284.9; other facilities 2.4 + 1.8; residual -8.348 - 4.2 | -8.348 = 4.2 + (-12.548) |
| C17 | Pro forma net debt and leverage after the sale of two U.S. facilities | 1,045.584 - 71.2; 974.384 / 277.8 | 974.384; 3.51 |
| C18 | Issuer's net debt including leases rebuilt, and the effect of leases on leverage | 1,276.552 + 146.547 - 230.968; 146.547 / 277.8; (1,045.584 + 146.547) / 277.8 | 1,192.131 against the issuer's 1,192.2; 0.53; 4.29 |
| C19 | Sum of four reported quarterly adjusted EBITDA figures against the constructed last twelve months | 105.2 + 102.5 + 92.9 + 80.7; 381.3 - 381.1 | 381.3; 0.2 |
| C20 | Unutilised credit from stated components against the issuer's figure | 900.0 - 40.0 + 111.6 - 4.2; 967.4 - 966.7 | 967.4; 0.7 |
| C21 | Change from 2026-03-31 to 2026-09-27 in net debt, total debt and cash | 1,045.584 - 996.512; 1,276.552 - 1,281.469; 230.968 - 284.957 | 49.072; -4.917; -53.989 |
| C22 | Add-backs as a share of adjusted EBITDA, in percent | 103.3 / 381.1 x 100 | 27.11 |
| C23 | Principal total at 2026-03-31 | US dollar notes 350.0 / 0.7174 = 487.9; 487.9 + 600.0 + 200.0 + (1.9 + 6.7) | 1,296.5 |
| C24 | Liquidity: cash plus undrawn committed revolver | 284.957 + 850.0; 230.968 + 860.0 | 1,134.957; 1,090.968 |

## Gaps

- The audited fiscal 2026 statements with notes, the annual MD&A and the auditor's reports are not supplied, so instrument-level carrying values, issuance costs, lease maturities, pension and contingency detail cannot be read; the statements printed in the results release are the only annual source. Severity High; the action that closes it is to obtain the annual statements exhibit.
- Covenant levels, step-downs and definitions of the net debt to EBITDA and interest coverage tests are not printed, only a statement that all covenants were met at 27 September 2026, so covenant headroom is not calculable. Severity High; the action is to obtain the credit agreement or a compliance certificate.
- The security and ranking of the two senior note issues and of the other credit facilities are not stated, so they are left out of the debt stack and of any secured or senior subtotal. Severity Medium; the action is to obtain the indentures or the annual information form.
- The commitment status and expiry of the other credit facilities of CAD 111.6 million and of the letter of credit facilities are not stated, so only the revolver counts as undrawn committed, and the company's own unutilised credit figure of CAD 966.7 million is CAD 0.7 million below the sum of its stated components. Severity Medium; the action is to obtain the facility terms.
- Carrying values by instrument and the unamortised issuance costs and premium are not stated, so the CAD 12.548 million difference between principal and carrying value is derived as a residual. Severity Medium; the action is to obtain the debt note of the annual statements.
- The split of the CAD 274.4 million of letters of credit between customer advances, post-retirement obligations and leases is not stated, so the share that backs advances cannot be isolated. Severity Medium; the action is to obtain a schedule of letters of credit.
- The completion date and net cash proceeds of the sale of two U.S. facilities, and the lease liability from the leaseback of one of them, are not stated, so the pro forma net debt rests on the CAD 71.2 million consideration. Severity Medium; the action is to obtain the third-quarter disclosure of the transaction.
- The amount collected on the EV customer settlement in the first half of fiscal 2026 is not stated, so its effect on that period's operating cash flow cannot be isolated; last-twelve-months figures exclude it by construction. Severity Low; the action is to obtain the annual statements note on the settlement.
- The repayment schedule of the CAD 150.0 million term facility and the maturity of CAD 4.2 million of other facilities are not stated, so their annual amortisation and ladder year are not supplied. Severity Low; the action is to obtain the credit agreement.
- The undrawn committed facilities at 31 March 2025 and the principal total at that date are not supplied, because the credit facility was amended on 4 December 2025 and the exchange rate on that date is not in the supplied files. Severity Low; the action is to obtain the fiscal 2025 annual statements.
- Cells the statements print as a dash are recorded as not supplied rather than zero: restructuring costs for the second quarter of fiscal 2026, impairment of assets, business acquisitions, swap settlements, purchase of non-controlling interest, repurchase of common shares and the IFRS 9 adoption amount in the cash flow statement, and assets held for sale at 31 March 2025; lines printed in only one of the statements are also recorded as not supplied in the other. Severity Low; the action is to confirm nil from the audited statements.
- Closing cash for the first half of fiscal 2027 is not stated in the cash flow table because opening cash plus the net change differs from printed closing cash by CAD 1.158 million, an IFRS 9 initial adoption amount printed outside the three activities; the balance sheet shows the same closing cash. Severity Low; the action is to treat the balance sheet figure as controlling.
- The company's pro forma adjusted EBITDA is not itemised, and its trailing figure of CAD 381.3 million differs by CAD 0.2 million from the constructed CAD 381.1 million. Severity Low; the action is to obtain the pro forma adjustment schedule.
- Market revenue is reported on two definitions, and fiscal 2025 and 2026 are not restated to the fiscal 2027 markets, so the two series are kept apart. Severity Low; the action is to ask the issuer for restated fiscal 2026 market revenue.
- Guarantor subsidiaries are not named and no restricted group is defined, so the perimeter of the guarantees cannot be mapped. Severity Low; the action is to obtain the annual information form.

## Next module

The orchestrator selects the next module.
