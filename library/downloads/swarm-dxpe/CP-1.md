# CP-1 financial foundation for DXP ENTERPRISES INC (dxpe)

## Request

DXP ENTERPRISES INC (issuer id dxpe), as of 2026-11-05, credit snapshot pathway. Scope: the financial foundation (statements, debt, liquidity and credit metrics) built from the seven supplied filings and releases and the source-readiness answer. No credit recommendation is made here.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_dxpe-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 2025-12-31 | 2026-02-26 | c7d8164f031d9598f9c9e55a6ea72326cd8ca955352110463388478f041b6c83 | Audited FY2024 and FY2025 statements, debt, lease, segment and cash-flow notes, EBITDA reconciliation, credit ratings |
| 10-Q_2026-03-31_dxpe-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 | 2026-05-07 | 4b722eaa286fac42b216402a6ee697593be8d829c4523c0675f74f3756f37099 | First-quarter debt note and covenant status, read to confirm the covenant schedule |
| 10-Q_2026-06-30_dxpe-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 | 2026-08-06 | 062fb840fed8d87a2ce7f779ade2c10a2a9fa08cd06748ccc79bfb77eaff175c | Second-quarter debt note, covenant status and July 2026 events, read to confirm the covenant schedule |
| 10-Q_2026-09-30_dxpe-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 | 2026-11-05 | b25274cf886044ab8c2b70c234e1e7077124a752d54250ff0e625889085dbaa2 | Nine-month 2026 and 2025 statements, 2026-09-30 balance sheet, debt and liquidity notes, segments, acquisitions, subsequent events |
| EX-99.1_2026-05-07_earningsrelease3312026.htm.jsonl | Earnings press release for the first quarter of 2026 (Exhibit 99.1) | 2026-05-07 | 7239622f24e9378a19997bda2636b1f0c58c04309af7d0be42e5556062a8f4af | Read for management's stated covenant EBITDA at 2026-03-31; no figure from it enters the statements |
| EX-99.1_2026-08-05_earningsrelease6302026.htm.jsonl | Earnings press release for the second quarter of 2026 (Exhibit 99.1) | 2026-08-05 | 6d154d2d8605fdb9abb6da2ab17ed2ed1363c8da5b1cd9a1ff2db3ea0cf9c96c | Read for management's stated covenant EBITDA at 2026-06-30; no figure from it enters the statements |
| EX-99.1_2026-11-05_earningsrelease9302026.htm.jsonl | Earnings press release for the third quarter of 2026 (Exhibit 99.1) | 2026-11-05 | 7fc5ad335ae78b4ce865ab4ec5f61033f2b042958c1ba4a250444be1733b49a2 | EBITDA, Adjusted EBITDA and free cash flow reconciliations; management's stated covenant EBITDA and secured leverage at 2026-09-30 |

Supplied module answer used by this module:

| Module | sha256 | Use |
|---|---|---|
| Source readiness (CP-0) | 69fa01cceaaf10466a0146bbb22884307f5d270a0c1dbefebc6142e13a9c6b85 | Source set, perimeter, covenant-level conflict, missing documents and cutoff |

## Findings

### Bottom line

DXP's net debt was 2.45x twelve-month reported EBITDA at 2026-09-30, with 4.20x cash interest cover, USD 411.0 million of liquidity and no bullet maturity before 2030, so creditors' exposure is floating-rate leverage and acquisition spending, not a refinancing wall.
Basis: calculation C03; calculation C08; calculation C10; calculation C14; calculation C15; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 11–14; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 33

Net leverage was 2.63x at 2024-12-31, 2.39x at 2025-12-31 and 2.45x at 2026-09-30: the USD 205.0 million term loan increase of December 2025 raised cash, and USD 126.2 million of 2026 cash acquisitions used it, so net debt rose 15.50% against EBITDA growth of 13.07%. The company's own secured leverage of 2.30x uses principal debt and covenant EBITDA of USD 270.0 million, so it is not comparable with these figures.
Basis: calculation C08; calculation C16; calculation C20; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4; EX-99.1_2026-11-05_earningsrelease9302026.htm.jsonl, page 2

Covenant headroom is not established: the annual report and the 2026 quarterly reports state different maximum levels for the Secured Leverage Ratio, and no executed agreement is supplied. Pro forma net debt for the acquisition agreed on 2026-11-01 is also not established because its price is not stated.
Basis: 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 84; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 21; Source readiness (CP-0)

### Leverage and its drivers

Net debt rose by USD 81.1 million between 2025-12-31 and 2026-09-30, from USD 523.3 million to USD 604.4 million, while last-twelve-months reported EBITDA rose by USD 28.6 million to USD 247.2 million. Net leverage therefore edged up from 2.39x to 2.45x and total leverage fell from 3.78x to 3.33x. Carrying debt was almost unchanged at USD 823.2 million, so the rise in net debt is a fall in cash of USD 84.9 million: USD 126.2 million went on acquisitions in nine months against operating cash flow of USD 80.6 million.
Basis: calculation C01; calculation C03; calculation C04; calculation C08; calculation C16; calculation C21

Against this view, the company's secured leverage ratio was 2.30x at 2026-09-30 and 2.25x at 2025-12-31, which is lower than the 2.45x here because the company measures principal debt against a wider covenant EBITDA. The view would change if acquisitions were funded with new borrowing, which the sources do not show so far, or if the new repurchase authorization of up to USD 150.0 million were used. Twelve-month EBITDA also includes the 2026 acquisitions only from their purchase dates, so the ratios are slightly high against a pro forma view that is not supplied.
Basis: calculation C20; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 12; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 84; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 19

### Interest cover and rate exposure

Reported EBITDA covered cash interest paid 4.20x over the twelve months to 2026-09-30, 4.07x in FY2025 and 2.72x in FY2024. The FY2024 figure carries USD 9.3 million of interest for 2023 paid in 2024; without it, cover would be 3.16x, which is an Analyst Judgement shown only in the calculation. Interest expense still rose by USD 5.9 million to USD 50.2 million in nine months 2026 because the term loan was increased in December 2025.
Basis: calculation C06; calculation C10; calculation C21; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 92; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 30

The term loan pays Term SOFR plus 3.25% with a floor of 1.00%, its rate was 7.15% at 2026-09-30, and the annual report states no interest-rate hedges at 2025-12-31. Each 100 bp on the USD 839.5 million of principal is therefore about USD 8.4 million of annual interest, or 3.40% of twelve-month EBITDA, on the assumption that the whole balance floats and no hedge was added since year end. EBITDA growth has so far outrun the extra interest, which supports coverage.
Basis: calculation C19; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 11; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 64

### Cash flow quality

Operating cash flow was USD 80.6 million in nine months 2026 against USD 56.5 million a year earlier and free cash flow USD 70.5 million against USD 19.5 million, but two items flatter the comparison: cash taxes paid were USD 6.6 million against USD 35.1 million, and capital expenditure was USD 10.2 million against USD 37.0 million. Working capital absorbed USD 41.9 million in 2026 against USD 60.5 million, with receivables up USD 52.6 million, and free cash flow was 37% of reported nine-month EBITDA.
Basis: calculation C11; calculation C12; calculation C17; calculation C21

After USD 126.2 million of cash acquisitions, free cash flow in the nine months was negative USD 55.7 million, so the business is funding its growth from the balance sheet rather than from internally generated cash alone. The low 2026 cash taxes and capital expenditure may not repeat, and the twelve-month free cash flow of USD 105.0 million still includes them.
Basis: calculation C12; calculation C21

### Liquidity and the maturity wall

Liquidity was USD 411.0 million at 2026-09-30: USD 218.8 million of cash and USD 192.2 million of revolver availability after USD 32.8 million of letters of credit, equal to 49.93% of carrying debt. It was USD 457.3 million at 2025-12-31, so the nine-month fall in cash of USD 84.9 million was partly offset by a larger revolver. Scheduled principal is USD 2.1 million for the rest of 2026 and USD 8.5 million a year in 2027 to 2029, and USD 812.0 million falls due in 2030; the revolver now matures on 2031-07-02 where it matured on 2027-07-19 before the July 2026 agreement.
Basis: calculation C14; calculation C15; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 33; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 85

Against this, the revolver availability is the company's own figure after letters of credit and is not shown to be a borrowing-base limit, and the threshold at which the fixed charge coverage test begins to apply is not stated, so the cushion may be smaller than the headline suggests if receivables or inventory fall.
Basis: 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 13

### Claims outside Total Debt and definition risks

Three claims sit outside Total Debt: acquisition contingent consideration of USD 30.7 million at 2026-09-30 against USD 13.8 million at 2025-12-31 and a maximum of USD 34.0 million, finance lease liabilities of USD 20.9 million at 2025-12-31 that are not stated later, and operating lease liabilities of USD 74.7 million. Customer deposits and billings in excess of costs, a non-debt float, rose to USD 43.6 million from USD 31.1 million, with billings in excess of costs at USD 27.7 million; if projects complete, that float unwinds into cost and absorbs cash.
Basis: calculation C13; calculation C18; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3

Management's covenant EBITDA is USD 22.8 million above reported EBITDA with no bridge, and the maximum Secured Leverage Ratio is stated at two different levels, 5.50x and 5.75x, for the June and September 2026 tests, so covenant headroom is not stated here and no covenant capacity is inferred. Interim figures are unaudited and the last twelve months are built from stubs.
Basis: calculation C20; Source readiness (CP-0)

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_dxpe-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025 with FY2024 and FY2023 comparatives; balance sheets at 2025-12-31 and 2024-12-31 | USD | Thousands | DXP Enterprises, Inc. and subsidiaries, consolidated | US GAAP | Tier 1 (audited, PricewaterhouseCoopers LLP) | FY2024 and FY2025 statements, debt note, EBITDA reconciliation, cash interest, leases, segments | FY2023 columns not extracted; Part III information incorporated by reference to a proxy statement that is not supplied |
| 10-Q_2026-09-30_dxpe-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Three and nine months to 2026-09-30 with 2025 comparatives; balance sheet at 2026-09-30 | USD | Thousands | DXP Enterprises, Inc. and subsidiaries, consolidated | US GAAP, unaudited | Tier 2b (unaudited; auditor review not stated) | Nine-month statements, latest balance sheet, debt and liquidity notes, acquisitions, subsequent events | Unaudited; no finance-lease balances at 2026-09-30; segment note is the only segment detail |
| EX-99.1_2026-11-05_earningsrelease9302026.htm.jsonl | Earnings release (Exhibit 99.1) | Three and nine months to 2026-09-30 | USD | Thousands | DXP Enterprises, Inc. and subsidiaries, consolidated | US GAAP with company-defined non-GAAP measures | Tier 2b (unaudited issuer release) | EBITDA, Adjusted EBITDA and free cash flow reconciliations; covenant EBITDA and secured leverage as management states them | Company-defined measures; the filing controls where they differ |
| 10-Q_2026-06-30_dxpe-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and six months to 2026-06-30 | USD | Thousands | DXP Enterprises, Inc. and subsidiaries, consolidated | US GAAP, unaudited | Tier 2b (unaudited; auditor review not stated) | Covenant level and ratio at 2026-06-30; July 2026 revolver agreement | Not used for statement figures |
| 10-Q_2026-03-31_dxpe-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Quarter to 2026-03-31 | USD | Thousands | DXP Enterprises, Inc. and subsidiaries, consolidated | US GAAP, unaudited | Tier 2b (unaudited; auditor review not stated) | Covenant level and ratio at 2026-03-31 | Not used for statement figures |
| EX-99.1_2026-05-07_earningsrelease3312026.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter to 2026-03-31 | USD | Thousands | DXP Enterprises, Inc. and subsidiaries, consolidated | US GAAP with company-defined non-GAAP measures | Tier 2b (unaudited issuer release) | Covenant EBITDA stated by management at 2026-03-31 | Not used for statement figures |
| EX-99.1_2026-08-05_earningsrelease6302026.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter to 2026-06-30 | USD | Thousands | DXP Enterprises, Inc. and subsidiaries, consolidated | US GAAP with company-defined non-GAAP measures | Tier 2b (unaudited issuer release) | Covenant EBITDA stated by management at 2026-06-30 | Not used for statement figures |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| DXP Enterprises, Inc. | Issuer; borrower under the Senior Secured Term Loan B and the U.S. borrower under the asset-based revolver | 12-31 | USD | Thousands (statements) | Consolidated with all subsidiaries | US GAAP | FY2023 to FY2025; Q1, Q2 and Q3 2026 and nine months 2026 with 2025 comparatives |
| Material wholly owned U.S. subsidiaries (not named in the sources read) | Guarantors of the term loan and the revolver | 12-31 | USD | Included in consolidated figures | Consolidated | US GAAP | No separate statements |
| Canadian subsidiaries (not named in the sources read) | Canadian borrowers and guarantors under the revolver; not guarantors of the term loan | 12-31 | USD (Canadian dollar borrowings permitted) | Included in consolidated figures | Consolidated | US GAAP | No separate statements |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Statements kept in USD thousands as printed; money tables restated in USD millions to three decimals | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 | Unit presentation | USD thousands | US$m with three decimals (exact) | The host's money unit is USD millions; three decimals keep every thousand exact | All periods |
| Other (income) expense, net shown with income as a negative number | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68 | Sign convention | (3,517) printed in brackets for 2024 | -3,517 | A negative has a minus sign in every statement table | FY2024, FY2025, 9M 2025, 9M 2026 |
| Cash flow outflows shown as negatives; Cash Interest Paid shown as the positive amount paid | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70 | Sign convention | Brackets for outflows | Minus signs | Statement tables carry signed flows | All periods |
| Last-twelve-months figures to 2026-09-30 built as FY2025 plus nine months 2026 less nine months 2025 | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–4 | Derived period | Separate periods | LTM 2026-09-30 | Stub periods are the same length and the same perimeter; register T4.8 | LTM 2026-09-30 |
| Total Debt taken at balance-sheet carrying value (current maturities plus long-term debt net of unamortized costs and discounts) | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 | Definition | Principal USD 839,525 thousand at 2026-09-30 | Carrying USD 823,216 thousand | Method defines Total Debt as carrying value; the difference is the reconciling item in the debt table | FY2024, FY2025, 2026-09-30 |
| No foreign-currency conversion applied | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 | Currency | USD | USD | All statements are printed in USD; no rate is needed | All periods |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Sales | 1,802,040 | 2,016,365 | 1,488,975 | 1,685,299 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Cost of sales | 1,245,763 | 1,380,437 | 1,019,638 | 1,153,118 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Gross profit | 556,277 | 635,928 | 469,337 | 532,181 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Selling, general and administrative expenses | 410,895 | 459,058 | 339,138 | 381,752 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Income from operations | 145,382 | 176,870 | 130,199 | 150,429 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Interest expense | 63,927 | 60,530 | 44,298 | 50,223 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Other (income) expense, net | -3,517 | -2,882 | -2,320 | -2,603 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Income before income taxes | 84,972 | 119,222 | 88,221 | 102,809 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Provision for income taxes | 14,483 | 30,545 | 22,389 | 27,253 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Net income | 70,489 | 88,677 | 65,832 | 75,556 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Preferred stock dividend | 90 | 90 | 68 | 68 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Net income attributable to common shareholders | 70,399 | 88,587 | 65,764 | 75,488 | USD thousands | Reported (FY audited; 9M unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Depreciation and amortization | 33,405 | 38,850 | 28,544 | 36,609 | USD thousands | Reported by the issuer (non-GAAP, unaudited reconciliation) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 |
| EBITDA (Reported) | 182,304 | 218,602 | 161,063 | 189,641 | USD thousands | Reported by the issuer as EBITDA: net income plus interest, taxes, depreciation and amortization; not adjusted | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 |
| Stock compensation expense | 4,714 | 5,708 | 4,278 | 4,757 | USD thousands | Reported by the issuer (non-GAAP, unaudited reconciliation) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 |
| Other non-recurring items | 4,292 | 992 | 992 | 1,046 | USD thousands | Reported by the issuer (non-GAAP, unaudited reconciliation) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 |
| EBITDA (Adjusted) | 191,310 | 225,302 | 166,333 | 195,444 | USD thousands | Issuer-stated Adjusted EBITDA: EBITDA plus stock compensation and other non-recurring items; issuer-adjusted, not house-adjusted | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 |
| Segment sales: Service Centers | 1,236,775 | 1,373,140 | 1,016,985 | 1,082,511 | USD thousands | Reported segment sales, net of intersegment eliminations; 2024 as recast | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 17 |
| Segment sales: Innovative Pumping Solutions | 308,850 | 390,291 | 280,273 | 405,514 | USD thousands | Reported segment sales, net of intersegment eliminations; 2024 as recast | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 17 |
| Segment sales: Supply Chain Services | 256,415 | 252,934 | 191,717 | 197,274 | USD thousands | Reported segment sales, net of intersegment eliminations; 2024 as recast | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 17 |
| Segment income from operations: Service Centers | 179,522 | 198,166 | 148,561 | 159,454 | USD thousands | Reported segment operating income | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 17 |
| Segment income from operations: Innovative Pumping Solutions | 51,063 | 70,223 | 50,448 | 71,777 | USD thousands | Reported segment operating income | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 17 |
| Segment income from operations: Supply Chain Services | 21,742 | 21,919 | 16,096 | 18,896 | USD thousands | Reported segment operating income | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 17 |
| Corporate and unallocated (income from operations) | -106,945 | -113,438 | -84,906 | -99,698 | USD thousands | Reported; Corporate holds unallocated overhead and intangible amortization and is a separate row, not an operating unit | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 99–100; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 17 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income (cash flow statement) | 70,489 | 88,677 | 65,832 | 75,556 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Depreciation | 9,019 | 10,372 | 7,646 | 8,992 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Amortization of intangibles and finance lease assets | 24,386 | 28,478 | 20,898 | 27,617 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Amortization of debt issuance costs | 3,646 | 4,041 | 2,908 | 3,388 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Deferred income taxes | -14,990 | 27,358 | 23,503 | 11,087 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Restricted stock compensation expense | 4,714 | 5,708 | 4,278 | 4,757 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Other non-cash items | 3,877 | -11,390 | -8,142 | -10,497 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Change in accounts receivable | -12,552 | -41,502 | -33,346 | -52,649 | USD thousands | Reported (working capital line) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Change in costs and estimated profits in excess of billings | -8,506 | -3,064 | -6,914 | -10,641 | USD thousands | Reported (working capital line) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Change in inventories | 8,432 | 1,037 | -1,332 | -13,347 | USD thousands | Reported (working capital line) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Change in prepaid expenses and other assets | 2,643 | -5,732 | -9,867 | -2,507 | USD thousands | Reported (working capital line) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Change in trade accounts payable | -3,473 | 532 | 6,766 | 442 | USD thousands | Reported (working capital line) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Change in accrued expenses | 2,009 | 17,875 | 16,947 | 23,524 | USD thousands | Reported (working capital line) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Change in billings in excess of costs and estimated profits | 3,263 | 2,951 | 3,989 | 6,009 | USD thousands | Reported (working capital line) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Change in income taxes | 9,010 | -30,984 | -36,782 | 7,303 | USD thousands | Reported (working capital line) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Working capital change (sum of the eight lines above) | 826 | -58,887 | -60,539 | -41,866 | USD thousands | Calculated: the statement prints no total; calculation C11 | calculation C11 |
| Operating cash flow before working capital change | 101,385 | 153,151 | 117,044 | 122,507 | USD thousands | Calculated: Net Cash from Operating Activities less the working capital change; calculation C11 | calculation C11 |
| Net Cash from Operating Activities | 102,211 | 94,264 | 56,505 | 80,641 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Purchase of property and equipment | -25,068 | -40,286 | -37,000 | -10,153 | USD thousands | Reported; capital expenditure is total capex, no maintenance and growth split is stated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 3–4 |
| Acquisition of businesses, net of cash acquired | -156,624 | -61,675 | -24,448 | -126,234 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | -181,692 | -99,246 | -58,733 | -135,755 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Principal payments on debt | -5,749 | -7,091 | -4,871 | -7,260 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Debt issuance costs | -2,309 | -3,173 | -325 | -1,179 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Payment for acquisition contingent consideration liability | -5,000 | -7,538 | -6,874 | -6,085 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Preferred stock dividends paid | -90 | -90 | -68 | -68 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Payment for employee taxes withheld from stock awards | -1,826 | -4,539 | -4,460 | -6,682 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Principal payments on finance leases | -4,216 | -6,592 | -4,597 | -6,877 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Net Cash from Financing Activities | 56,803 | 158,868 | -23,194 | -28,151 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| FX Effect on Cash | -2,122 | 1,486 | 840 | -1,684 | USD thousands | Reported | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Net Cash Change | -24,800 | 155,372 | -24,582 | -84,949 | USD thousands | Reported: operating plus investing plus financing plus the FX effect | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Opening Cash | 173,211 | 148,411 | 148,411 | 303,783 | USD thousands | Reported: cash and restricted cash at the start of the period | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Closing Cash | 148,411 | 303,783 | 123,829 | 218,834 | USD thousands | Reported: cash and restricted cash at the end of the period | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Cash Interest Paid | 67,005 | 53,698 | 40,225 | 45,330 | USD thousands | Reported supplemental disclosure; the 2024 figure includes USD 9.3 million of interest relating to 2023 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 92; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 19 |
| Cash taxes paid | 20,433 | 36,399 | 35,095 | 6,579 | USD thousands | Reported supplemental disclosure | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 92; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 19 |
| Free cash flow (Net Cash from Operating Activities less purchase of property and equipment) | 77,143 | 53,978 | 19,505 | 70,488 | USD thousands | Calculated; matches the issuer's own free cash flow; calculation C12 | calculation C12 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash & Equivalents | 148,320 | 303,783 | 218,834 | USD thousands | Reported: the Cash line; 2024 excludes USD 91 thousand of restricted cash shown separately | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Accounts receivable, net | 339,365 | 397,502 | 472,409 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Inventories | 103,113 | 108,144 | 124,100 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Costs and estimated profits in excess of billings | 50,735 | 53,855 | 68,504 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Prepaid expenses and other current assets | 20,250 | 47,033 | 39,674 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Total current assets | 661,874 | 910,317 | 923,521 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Property and equipment, net | 81,556 | 114,822 | 122,023 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Goodwill | 452,343 | 494,561 | 573,034 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Other intangible assets, net | 85,679 | 81,351 | 114,192 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Operating lease right of use assets, net | 46,569 | 74,709 | 72,680 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Other long-term assets | 21,473 | 9,395 | 12,279 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Total Assets | 1,349,494 | 1,685,155 | 1,817,729 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Current maturities of debt | 6,595 | 8,580 | 8,480 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Trade accounts payable | 103,728 | 116,765 | 123,767 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Accrued wages and benefits | 41,650 | 51,180 | 62,164 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Customer advances | 13,655 | 15,460 | 15,872 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Billings in excess of costs and estimated profits | 12,662 | 15,689 | 27,735 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Short-term operating lease liabilities | 14,921 | 19,038 | 20,042 | USD thousands | Reported; lease liability on its own line, not added to Total Debt | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Other current liabilities | 50,773 | 45,769 | 54,298 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Total current liabilities | 243,984 | 272,481 | 312,358 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Long-term debt, net of unamortized debt issuance costs and discounts | 621,684 | 818,476 | 814,736 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Long-term operating lease liabilities | 33,159 | 57,509 | 54,682 | USD thousands | Reported; lease liability on its own line, not added to Total Debt | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Other long-term liabilities | 27,879 | 38,250 | 65,539 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Total long-term liabilities | 682,722 | 914,235 | 934,957 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Total Liabilities | 926,706 | 1,186,716 | 1,247,315 | USD thousands | Reported (2024 and 2025 audited; 2026-09-30 unaudited) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Total Equity | 422,788 | 498,439 | 570,414 | USD thousands | Reported: total DXP Enterprises, Inc. equity; no non-controlling interest or temporary equity is shown | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Total Debt | 628,279 | 827,056 | 823,216 | USD thousands | Calculated: current maturities of debt plus long-term debt net of unamortized issuance costs and discounts (carrying value); finance leases sit in other liabilities and are not included; calculation C01 | calculation C01 |
| Principal of debt outstanding (contractual) | 648,876 | 846,785 | 839,525 | USD thousands | Reported in the debt note: term loan, revolver and promissory note principal | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 11 |
| Unamortized discount and debt issuance costs | 20,597 | 19,729 | 16,309 | USD thousands | Reported in the debt note | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 11 |
| Restricted cash | 91 | Not supplied: the 2025 balance sheet prints a dash | Not supplied: the 2026-09-30 balance sheet prints no restricted cash line | USD thousands | Reported for 2024 only; at 2026-09-30 cash and restricted cash in the cash flow statement equal the Cash line | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| Finance lease liabilities (within other liabilities) | 16,376 | 20,883 | Not supplied: the 2026 quarterly report states no finance lease balance | USD thousands | Reported in the lease note at year end: current plus non-current finance lease liabilities; calculation C13 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 78; calculation C13 |
| Operating lease liabilities (current plus long-term) | 48,080 | 76,547 | 74,724 | USD thousands | Calculated from the two reported lines; calculation C13 | calculation C13 |
| Contingent consideration liability (within other liabilities) | 16,322 | 13,775 | 30,711 | USD thousands | Reported in the fair value notes; maximum payable USD 34.0 million over three years at 2026-09-30 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 8 |

### T4.18 Debt instruments

Amounts are in USD millions at 2026-09-30.

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Senior Secured Term Loan B | Term loan | Not supplied: the filing states carrying value only for total debt | 839.525 | 839.525 | Not applicable | Secured: holds a security interest in the receivables and inventory collateral that ranks behind the revolver; the rest of its collateral package is not described | Behind the revolver on receivables and inventory; ranking on other collateral not stated | USD | 839.525 | Not applicable | Term SOFR plus 3.25% or base rate plus 2.25%; 7.15% at 2026-09-30 | Floating | Term SOFR | 325 | 100 | 2030-10-13 | 8.480 | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 11–12; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 14 |
| ABL Revolver | Asset-based revolving credit facility | 0.000 | 0.000 | 0.000 | 225.000 | First-priority security interest in the receivables, inventory and related assets of the U.S. borrowers; the Canadian borrowing base is secured on the Canadian borrowers' assets and the U.S. borrowers' assets | Ahead of the term loan on receivables and inventory | USD | 0.000 | Not applicable | Term SOFR or Term CORRA plus 1.25% to 1.75%, or base rate plus 0.25% to 0.75%; 7.25% at 2026-09-30; unused line fee 0.375% | Floating | Term SOFR (U.S.) or Term CORRA (Canada) | 125 to 175 | Not supplied: no floor is stated | 2031-07-02 | 0.000 | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 12–13 |
| Promissory Note due 2029 | Seller note issued in an acquisition | 0.000 | 0.000 | 0.000 | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 0.000 | Not applicable | 5% fixed | Fixed | Not applicable | Not applicable | Not applicable | 2029-11-01 | Not applicable | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 14 |
| Financing cost adjustment | Unamortized discount and debt issuance costs | -16.309 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -16.309 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 11 |


### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Sales | LTM to 2026-09-30 | USD 2,016,365k | USD 1,685,299k | USD 1,488,975k | USD 2,212,689k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 | Stub periods are both nine months on the same perimeter |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 218,602k | USD 189,641k | USD 161,063k | USD 247,180k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 | Issuer EBITDA, unadjusted |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 225,302k | USD 195,444k | USD 166,333k | USD 254,413k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 | Issuer-stated Adjusted EBITDA |
| Stock compensation expense add-back | LTM to 2026-09-30 | USD 5,708k | USD 4,757k | USD 4,278k | USD 6,187k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 | Stub periods are both nine months on the same perimeter |
| Other non-recurring items add-back | LTM to 2026-09-30 | USD 992k | USD 1,046k | USD 992k | USD 1,046k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 | Stub periods are both nine months on the same perimeter |
| Cash Interest Paid | LTM to 2026-09-30 | USD 53,698k | USD 45,330k | USD 40,225k | USD 58,803k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 92; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 19 | The FY2025 cash interest carries no prior-year interest; the FY2024 figure, which includes USD 9.3 million for 2023, is not a component here |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 94,264k | USD 80,641k | USD 56,505k | USD 118,400k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 | Stub periods are both nine months on the same perimeter |
| Purchase of property and equipment (capital expenditure, positive) | LTM to 2026-09-30 | USD 40,286k | USD 10,153k | USD 37,000k | USD 13,439k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 | Stub periods are both nine months on the same perimeter |
| Free cash flow | LTM to 2026-09-30 | USD 53,978k | USD 70,488k | USD 19,505k | USD 104,961k | Calculated | calculation C12 | Built from the free cash flow of each period |
| Income from operations | LTM to 2026-09-30 | USD 176,870k | USD 150,429k | USD 130,199k | USD 197,100k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 | Stub periods are both nine months on the same perimeter |
| Interest expense | LTM to 2026-09-30 | USD 60,530k | USD 50,223k | USD 44,298k | USD 66,455k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 | Stub periods are both nine months on the same perimeter |
| Sales | Q4 2025 (FY2025 less nine months 2025; no fourth quarter is reported) | USD 2,016,365k | Not applicable | USD 1,488,975k | USD 527,390k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 | The nine-month 2025 amount subtracted sits in the Prior-Year Stub column; labelled calculated, not reported |
| EBITDA (Reported) | Q4 2025 (FY2025 less nine months 2025; no fourth quarter is reported) | USD 218,602k | Not applicable | USD 161,063k | USD 57,539k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 | The nine-month 2025 amount subtracted sits in the Prior-Year Stub column; labelled calculated, not reported |
| EBITDA (Adjusted) | Q4 2025 (FY2025 less nine months 2025; no fourth quarter is reported) | USD 225,302k | Not applicable | USD 166,333k | USD 58,969k | Calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 | The nine-month 2025 amount subtracted sits in the Prior-Year Stub column; labelled calculated, not reported |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 628.279 | Total Debt: carrying value FY2024 | 182.304 | EBITDA (Reported) FY2024 (T4.4) | FY2024 / 2024-12-31 | USD | US$m | 3.45 | Calculated | Tier 1 (audited year) | Carrying value, not principal; Fiscal-year figure |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 827.056 | Total Debt: carrying value FY2025 | 218.602 | EBITDA (Reported) FY2025 (T4.4) | FY2025 / 2025-12-31 | USD | US$m | 3.78 | Calculated | Tier 1 (audited year) | Carrying value, not principal; Fiscal-year figure |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 823.216 | Total Debt: carrying value 2026-09-30 | 247.180 | EBITDA (Reported) LTM (T4.8) | 2026-09-30 | USD | US$m | 3.33 | Calculated | Tier 2b (LTM built from unaudited stubs) | Carrying value, not principal; EBITDA and cash interest are last twelve months to 2026-09-30 (T4.8) |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 479.959 | Net debt data FY2024 | 182.304 | EBITDA (Reported) FY2024 (T4.4) | FY2024 / 2024-12-31 | USD | US$m | 2.63 | Calculated | Tier 1 (audited year) | Carrying value, not principal; Fiscal-year figure |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 523.273 | Net debt data FY2025 | 218.602 | EBITDA (Reported) FY2025 (T4.4) | FY2025 / 2025-12-31 | USD | US$m | 2.39 | Calculated | Tier 1 (audited year) | Carrying value, not principal; Fiscal-year figure |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 604.382 | Net debt data 2026-09-30 | 247.180 | EBITDA (Reported) LTM (T4.8) | 2026-09-30 | USD | US$m | 2.45 | Calculated | Tier 2b (LTM built from unaudited stubs) | Carrying value, not principal; EBITDA and cash interest are last twelve months to 2026-09-30 (T4.8) |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 182.304 | EBITDA (Reported) FY2024 (T4.4) | 67.005 | Cash Interest Paid FY2024 (T4.5) | FY2024 / 2024-12-31 | USD | US$m | 2.72 | Calculated | Tier 1 (audited year) | Fiscal-year figure; cash interest includes USD 9.3 million of 2023 interest paid in 2024 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 218.602 | EBITDA (Reported) FY2025 (T4.4) | 53.698 | Cash Interest Paid FY2025 (T4.5) | FY2025 / 2025-12-31 | USD | US$m | 4.07 | Calculated | Tier 1 (audited year) | Fiscal-year figure |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 247.180 | EBITDA (Reported) 2026-09-30 (T4.8) | 58.803 | Cash Interest Paid LTM (T4.8) | 2026-09-30 | USD | US$m | 4.20 | Calculated | Tier 2b (LTM built from unaudited stubs) | EBITDA and cash interest are last twelve months to 2026-09-30 (T4.8) |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 628.279 | Total Debt: carrying value FY2024 | 191.310 | EBITDA (Adjusted) FY2024 (T4.4) | FY2024 / 2024-12-31 | USD | US$m | 3.28 | Calculated | Tier 1 (audited year) | Carrying value, not principal; Fiscal-year figure; issuer-adjusted EBITDA, not house-adjusted |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 827.056 | Total Debt: carrying value FY2025 | 225.302 | EBITDA (Adjusted) FY2025 (T4.4) | FY2025 / 2025-12-31 | USD | US$m | 3.67 | Calculated | Tier 1 (audited year) | Carrying value, not principal; Fiscal-year figure; issuer-adjusted EBITDA, not house-adjusted |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 823.216 | Total Debt: carrying value 2026-09-30 | 254.413 | EBITDA (Adjusted) LTM (T4.8) | 2026-09-30 | USD | US$m | 3.24 | Calculated | Tier 2b (LTM built from unaudited stubs) | Carrying value, not principal; EBITDA and cash interest are last twelve months to 2026-09-30 (T4.8); issuer-adjusted EBITDA, not house-adjusted |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 479.959 | Net debt data FY2024 | 191.310 | EBITDA (Adjusted) FY2024 (T4.4) | FY2024 / 2024-12-31 | USD | US$m | 2.51 | Calculated | Tier 1 (audited year) | Carrying value, not principal; Fiscal-year figure; issuer-adjusted EBITDA, not house-adjusted |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 523.273 | Net debt data FY2025 | 225.302 | EBITDA (Adjusted) FY2025 (T4.4) | FY2025 / 2025-12-31 | USD | US$m | 2.32 | Calculated | Tier 1 (audited year) | Carrying value, not principal; Fiscal-year figure; issuer-adjusted EBITDA, not house-adjusted |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 604.382 | Net debt data 2026-09-30 | 254.413 | EBITDA (Adjusted) LTM (T4.8) | 2026-09-30 | USD | US$m | 2.38 | Calculated | Tier 2b (LTM built from unaudited stubs) | Carrying value, not principal; EBITDA and cash interest are last twelve months to 2026-09-30 (T4.8); issuer-adjusted EBITDA, not house-adjusted |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 191.310 | EBITDA (Adjusted) FY2024 (T4.4) | 67.005 | Cash Interest Paid FY2024 (T4.5) | FY2024 / 2024-12-31 | USD | US$m | 2.86 | Calculated | Tier 1 (audited year) | Fiscal-year figure; cash interest includes USD 9.3 million of 2023 interest paid in 2024; issuer-adjusted EBITDA, not house-adjusted |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 225.302 | EBITDA (Adjusted) FY2025 (T4.4) | 53.698 | Cash Interest Paid FY2025 (T4.5) | FY2025 / 2025-12-31 | USD | US$m | 4.20 | Calculated | Tier 1 (audited year) | Fiscal-year figure; issuer-adjusted EBITDA, not house-adjusted |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 254.413 | EBITDA (Adjusted) 2026-09-30 (T4.8) | 58.803 | Cash Interest Paid LTM (T4.8) | 2026-09-30 | USD | US$m | 4.33 | Calculated | Tier 2b (LTM built from unaudited stubs) | EBITDA and cash interest are last twelve months to 2026-09-30 (T4.8); issuer-adjusted EBITDA, not house-adjusted |
| Free cash flow / EBITDA (Reported) | Free cash flow / EBITDA (Reported) | 70.488 | Free cash flow 9M 2026 (T4.5) | 189.641 | EBITDA (Reported) 9M 2026 (T4.4) | 9M 2026 | USD | US$m | 0.37 | Calculated | Tier 2b | Nine months; the 2026 figure benefited from USD 6.6 million of cash taxes against USD 35.1 million a year earlier |
| Capex / Sales | Purchase of property and equipment / Sales x 100 | 10.153 | Purchase of property and equipment 9M 2026 (T4.5) | 1685.299 | Sales 9M 2026 (T4.4) | 9M 2026 | USD | US$m | 0.60 | Calculated | Tier 2b | Percentage; total capex only, no maintenance and growth split is stated |
| Sales growth | FY2025 sales / FY2024 sales - 1 | 2016.365 | Sales FY2025 (T4.4) | 1802.040 | Sales FY2024 (T4.4) | FY2025 | USD | US$m | 11.89 | Calculated | Tier 1 | Percentage; includes acquisition sales of USD 96.0 million in 2025 |
| Adjusted EBITDA growth | FY2025 EBITDA (Adjusted) / FY2024 EBITDA (Adjusted) - 1 | 225.302 | EBITDA (Adjusted) FY2025 (T4.4) | 191.310 | EBITDA (Adjusted) FY2024 (T4.4) | FY2025 | USD | US$m | 17.77 | Calculated | Tier 1 | Percentage; issuer-adjusted EBITDA |
| EBITDA (Reported) margin | EBITDA (Reported) / Sales x 100 | 218.602 | EBITDA (Reported) FY2025 (T4.4) | 2016.365 | Sales FY2025 (T4.4) | FY2025 | USD | US$m | 10.84 | Calculated | Tier 1 | Percentage; the issuer states 10.8% |
| Liquidity / Total debt | (Cash + undrawn committed facilities) / Total debt x 100 | 411.005 | Cash 218.834 plus revolver availability 192.171 (calculation C14) | 823.216 | Total Debt: carrying value 2026-09-30 | 2026-09-30 | USD | US$m | 49.93 | Calculated | Tier 2b | Percentage; revolver availability is after letters of credit and is not a committed borrowing base figure |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Margin | Gross profit margin (issuer-reported) | 30.9% | 31.5% | 31.5% | 31.6% | Up | Reported; period flow; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 45; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 25 |
| Margin | Income from operations margin (issuer-reported) | 8.1% | 8.8% | 8.7% | 8.9% | Up | Reported; period flow; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 45; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 25 |
| Margin | EBITDA margin (issuer-reported) | 10.1% | 10.8% | 10.8% | 11.3% | Up | Reported; period flow; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 45; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 25 |
| Margin | Adjusted EBITDA margin (issuer-reported) | 10.6% | 11.2% | 11.2% | 11.6% | Up | Reported; period flow; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 45; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 25 |
| Margin | Net income margin (issuer-reported) | 3.9% | 4.4% | 4.4% | 4.5% | Up | Reported; period flow; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 45; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 25 |
| Operating | Business days | 253 | 252 | 190 | 190 | Flat | Reported; period flow; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 45; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 25 |
| Operating | Sales per business day (USD thousands) | 7,123 | 8,001 | 7,837 | 8,870 | Up | Reported; period flow; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 45; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 25 |
| Operating | Acquisition sales (USD thousands) | 98,500 | 96,043 | 74,120 | 139,425 | Up in 2026 | Reported; sales of acquisitions owned under twelve months; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 45; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 25 |
| Operating | Organic sales (USD thousands) | 1,703,540 | 1,920,322 | 1,414,855 | 1,545,874 | Up | Reported; period flow; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 45; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 25 |
| Operating | Organic sales per business day (USD thousands) | 6,733 | 7,620 | 7,447 | 8,136 | Up | Reported; period flow; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 45; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 25 |
| Segment | Service Centers income from operations / segment sales | 14.52% | 14.43% | 14.61% | 14.73% | Stable | Calculated from T4.4; segment operating margin, before Corporate |
| Segment | Innovative Pumping Solutions income from operations / segment sales | 16.53% | 17.99% | 18.00% | 17.70% | Mixed | Calculated from T4.4; segment operating margin, before Corporate |
| Segment | Supply Chain Services income from operations / segment sales | 8.48% | 8.67% | 8.40% | 9.58% | Up | Calculated from T4.4; segment operating margin, before Corporate |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA is the issuer's unadjusted EBITDA; adjusted EBITDA is shown beside it, labelled | Adjusted EBITDA adds stock compensation and other non-recurring items; covenant EBITDA (term loan definition) adds all non-cash charges and non-recurring cash expenses and is pro forma for acquisitions, and management states USD 270.0 million for the twelve months to 2026-09-30 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 85; EX-99.1_2026-11-05_earningsrelease9302026.htm.jsonl, page 2 | LTM 2026-09-30 | LTM EBITDA (Reported) USD 247.180 million, Adjusted USD 254.413 million, covenant USD 270.000 million; the spread to the covenant figure is USD 22.820 million (calculation C20) | Fundamental credit; Covenant capacity | Use reported EBITDA for every ratio here; keep the adjusted ratio in the register; the covenant figure is not bridged in any source read, so it is not used |
| Total debt and net debt | Balance-sheet carrying value, net of issuance costs and discounts | The company's leverage commentary and the covenant use principal of USD 839.5 million | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 11; EX-99.1_2026-11-05_earningsrelease9302026.htm.jsonl, page 2 | FY2024, FY2025, 2026-09-30 | Carrying debt is below principal by USD 16.309 million at 2026-09-30 (USD 19.729 million at 2025-12-31); about 0.07x of net leverage (calculation C20) | Fundamental credit; Refinancing & LME | Carrying value used; principal shown beside it and reconciled in the debt table |
| Secured leverage (company-reported) | Net debt over reported EBITDA, all debt | Secured Leverage Ratio of 2.30 to 1.00 at 2026-09-30: secured debt net of unrestricted cash (cash netting capped at USD 330 million) over covenant EBITDA | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 12; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 84 | 2026-09-30 | Company 2.30x against 2.45x here; the gap is principal against carrying value (+0.07x) and covenant against reported EBITDA (-0.21x); calculation C20 | Fundamental credit; Covenant capacity | Both are reported; the covenant ratio is not a substitute for the register's net leverage |
| Secured Leverage Ratio maximum | The covenant level that applies at each test date | Annual report schedule of maximum levels: 5.75:1.00 at 2025-12-31 and 2026-03-31, 5.50:1.00 at 2026-06-30, 2026-09-30 and 2026-12-31, 5.25:1.00 at 2027-03-31 to 2027-09-30, 5.00:1.00 at 2027-12-31 and 2028-03-31, then 4.75:1.00; the quarterly reports state less than 5.75 to 1.00 at 2026-06-30 and 2026-09-30, and the first-quarter report agrees with the schedule at 5.75 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 84; 10-Q_2026-06-30_dxpe-20260630.htm.jsonl, page 11; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 12 | 2026-06-30, 2026-09-30 | Either level leaves headroom against the reported 2.30x, but the level cannot be fixed from the sources read | Legal & covenants; Covenant capacity | Unresolved; executed term loan agreement and the December 2025 amendment needed; no covenant capacity is inferred here |
| Fixed Charge Coverage Ratio (revolver covenant) | Not a leverage measure; kept as the issuer states it | Four-quarter ratio of EBITDA less capital expenditure less cash taxes to fixed charges; the minimum of 1.00 to 1.00 applies only during a compliance period that starts when revolver availability falls below a threshold the filings do not state; reported 2.12 at 2025-12-31, 2.54 at 2026-03-31, 2.97 at 2026-06-30 and 2.98 at 2026-09-30 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 86; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 13 | 2025-12-31 to 2026-09-30 | The test is not currently binding on the stated figures, but the threshold that would trigger it is not stated, so its distance from the test cannot be measured | Legal & covenants; Covenant capacity | Reported figure kept as stated; no headroom is inferred |
| Cash interest | Cash interest paid, from the cash flow disclosure | Interest expense also carries amortization of issuance costs and finance-lease interest; the 2024 cash figure includes USD 9.3 million of interest for 2023 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 92; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 14 | FY2024, FY2025, 9M 2026 | FY2025 cash paid USD 53.698 million against expense USD 60.530 million; FY2024 cover is 2.72x as stated and 3.16x excluding the 2023 interest (calculation C10) | Fundamental credit | Cash interest paid is the denominator; the normalised FY2024 cover is Analyst Judgement and sits only in the calculation |
| Leases | Lease liabilities the issuer presents on their own lines are not added to Total Debt; a lease carried inside debt lines stays in | Finance leases sit in other liabilities (USD 20.883 million at 2025-12-31); operating leases have their own lines (USD 74.724 million at 2026-09-30) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 | FY2024, FY2025, 2026-09-30 | Adding finance leases to FY2025 total debt would lift total leverage from 3.78x to 3.88x (calculation C13) | Fundamental credit; Refinancing & LME | Excluded from Total Debt; shown as separate balance-sheet rows; finance lease balance at 2026-09-30 is not stated |
| Segment perimeter | One perimeter across periods | The company moved certain branch locations from Innovative Pumping Solutions to Service Centers on 2025-01-01 and recast earlier years | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 99 | FY2024 | FY2024 segment figures here are the recast ones; the 2024 originals are not read | Business & governance | Recast figures used throughout; no mixing of recast and original figures |
| Contingent consideration and contract liabilities | Debt-like and float items outside Total Debt are flagged, not added | Acquisition contingent consideration (USD 30.711 million at 2026-09-30) and customer deposits and billings in excess of costs (USD 43.607 million) sit in other liabilities and payables | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 | FY2025, 2026-09-30 | Contingent consideration rose by USD 16.936 million in nine months; contract liabilities rose by USD 12.458 million (calculation C18) | Liquidity; Fundamental credit | Kept outside Total Debt and net debt; carried to the analysis as named claims |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage, coverage and liquidity metrics for the credit snapshot | Ready with Limitations | Interim figures are unaudited; the last twelve months are built from stubs; covenant EBITDA is not bridged to reported EBITDA | None needed to use the metrics; a covenant compliance certificate would bridge the EBITDA measures |
| Covenant headroom | Not Ready | The maximum Secured Leverage Ratio differs between the annual report and the 2026 quarterly reports and no executed agreement is supplied | Obtain the executed term loan agreement and the December 2025 amendment |
| Debt maturity wall and refinancing view | Ready with Limitations | Principal ladder is complete at 2026-09-30; no market quotes; revolver collateral and term loan collateral ranking described only in part | Obtain the intercreditor terms if lien ranking matters |
| Segment analysis | Ready | Segment figures are recast for the 2025 branch move; no segment balance sheet beyond total assets | None |
| Fourth quarter of 2025 on its own | Ready with Limitations | Derived as FY2025 less nine months 2025 and labelled calculated; no reported fourth quarter | None needed |

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 628.279 | 148.320 | 479.959 | US$m | Gross debt is carrying value: current maturities plus long-term debt net of unamortized costs and discounts; principal is USD 648.876 million; finance leases, contingent consideration and operating leases are outside it; audited year end |
| FY2025 / 2025-12-31 | 827.056 | 303.783 | 523.273 | US$m | Gross debt is carrying value: current maturities plus long-term debt net of unamortized costs and discounts; principal is USD 846.785 million; finance leases, contingent consideration and operating leases are outside it; audited year end |
| 2026-09-30 | 823.216 | 218.834 | 604.382 | US$m | Gross debt is carrying value: current maturities plus long-term debt net of unamortized costs and discounts; principal is USD 839.525 million; finance leases, contingent consideration and operating leases are outside it; 2026-09-30 is unaudited |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 3.45 | 2.63 | x | Carrying debt over reported EBITDA; fiscal-year EBITDA |
| FY2025 / 2025-12-31 | 3.78 | 2.39 | x | Carrying debt over reported EBITDA; fiscal-year EBITDA |
| 2026-09-30 | 3.33 | 2.45 | x | Carrying debt over reported EBITDA; EBITDA is the last twelve months to 2026-09-30 |

The ratios use carrying-value debt and reported EBITDA, so they differ from the company's own secured leverage of 2.30x, which uses principal and covenant EBITDA.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 2.72 | x | Reported EBITDA over cash interest paid; fiscal year; the 2024 cash interest includes USD 9.3 million relating to 2023 |
| FY2025 / 2025-12-31 | 4.07 | x | Reported EBITDA over cash interest paid; fiscal year |
| 2026-09-30 | 4.20 | x | Reported EBITDA over cash interest paid; last twelve months to 2026-09-30 |

The FY2024 cover is depressed by USD 9.3 million of 2023 interest paid in 2024.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 148.320 | 125.646 | US$m | Cash is the balance-sheet Cash line; undrawn facilities are the revolver's commitment of USD 135.000 million less letters of credit of USD 9.354 million with nothing drawn |
| FY2025 / 2025-12-31 | 303.783 | 153.528 | US$m | Cash is the balance-sheet Cash line; undrawn facilities are the revolver's commitment of USD 185.000 million less letters of credit of USD 31.472 million with nothing drawn |
| 2026-09-30 | 218.834 | 192.171 | US$m | Cash is the balance-sheet Cash line; undrawn facilities are the revolver's commitment of USD 225.000 million less letters of credit of USD 32.829 million with nothing drawn |

Availability is as the company states it after letters of credit; the borrowing base terms and the compliance-period threshold are not stated.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 2.120 | US$m | Scheduled term loan amortization remaining after 2026-09-30; principal at 2026-09-30, not carrying value |
| FY2027 | 8.480 | US$m | Scheduled term loan amortization; principal at 2026-09-30, not carrying value |
| FY2028 | 8.480 | US$m | Scheduled term loan amortization; principal at 2026-09-30, not carrying value |
| FY2029 | 8.480 | US$m | Scheduled term loan amortization; principal at 2026-09-30, not carrying value |
| FY2030 | 811.965 | US$m | Term loan balance due at maturity on 2030-10-13 including scheduled amortization of the year; principal at 2026-09-30, not carrying value |

The ladder is principal as the debt note prints it; the undrawn revolver, which matures on 2031-07-02, is not a funded maturity.

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 839.525 | -16.309 | 823.216 | US$m | Principal is the sum of the maturity ladder; the one reconciling item is unamortized discount and debt issuance costs (calculation C02); no debt is left out of the ladder; the revolver is undrawn and the promissory note is repaid |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Agreement to acquire MDS of Michigan, LLC, funded with cash on hand | 2026-11-01 | Not supplied: the purchase price is not stated | Not supplied: no amount, so no pro forma net debt | Not supplied: no amount, so no pro forma net leverage | US$m | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 21; a cash outflow that would raise net debt is not yet reflected in the 2026-09-30 figures |
| New share repurchase program of up to USD 150.0 million or 1.0 million shares over 24 months | 2026-10-28 | Not supplied: authorization only, no purchase is stated | Not supplied: no purchase, so no pro forma net debt | Not supplied: no purchase, so no pro forma net leverage | US$m | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 21; any purchase would raise net debt; none is stated |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1802.040 | 191.310 | US$m | Adjusted EBITDA is the issuer-adjusted measure (reported EBITDA plus stock compensation and other non-recurring items), not house-adjusted; fiscal year, twelve months |
| FY2025 / 2025-12-31 | 2016.365 | 225.302 | US$m | Adjusted EBITDA is the issuer-adjusted measure (reported EBITDA plus stock compensation and other non-recurring items), not house-adjusted; fiscal year, twelve months |
| 2026-09-30 | 2212.689 | 254.413 | US$m | Adjusted EBITDA is the issuer-adjusted measure (reported EBITDA plus stock compensation and other non-recurring items), not house-adjusted; twelve months to 2026-09-30 built from stubs (T4.8) |

Every row covers twelve months; the 2026-09-30 row is built from unaudited stubs.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| ABL Revolver | 1 | Yes | 0.000 | 0.00 | US$m | Nothing drawn at 2026-09-30; commitment USD 225.000 million, letters of credit USD 32.829 million; ranks ahead of the term loan on receivables and inventory; borrowers and guarantors are the U.S. subsidiaries, with Canadian subsidiaries guaranteeing the Canadian borrowers' obligations |
| Senior Secured Term Loan B | 2 | Yes | 839.525 | 3.40 | US$m | Principal, not carrying value; ranking is behind the revolver on receivables and inventory only, and the ranking on its other collateral is not stated; guaranteed by the material wholly owned subsidiaries other than the Canadian and certain excluded subsidiaries; cumulative leverage uses last-twelve-months reported EBITDA of USD 247.180 million |

Ranking is the stated order on shared collateral only; no source states the term loan's own priority collateral or the intercreditor terms, and the promissory note is repaid.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), last twelve months to 2026-09-30 | 247.180 | US$m | The reported measure: issuer EBITDA before add-backs; calculation C04 |
| Stock compensation expense add-back | 6.187 | US$m | Share-based compensation, non-cash; realisation status not stated; last twelve months (calculation C05) |
| Other non-recurring items add-back | 1.046 | US$m | The issuer describes it as unique acquisition integration costs and other non-cash, non-recurring costs; classification other stated; realisation status not stated; last twelve months (calculation C05) |
| EBITDA (Adjusted), last twelve months to 2026-09-30 | 254.413 | US$m | The specified adjusted measure: issuer-stated Adjusted EBITDA; calculation C05; no plug or balancing line |

The adjustments are the two the issuer states; the term loan's covenant EBITDA is a different, larger measure that no source bridges.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Definition / identity | Source |
|---|---|---|---|---|---|
| Sales, US$m | 1802.040 | 2016.365 | 2212.689 | Reported; LTM is FY2025 plus nine months 2026 less nine months 2025 (calculation C07) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| EBITDA (Reported), US$m | 182.304 | 218.602 | 247.180 | Issuer EBITDA, unadjusted; LTM calculation C04 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 |
| EBITDA (Adjusted, issuer-stated), US$m | 191.310 | 225.302 | 254.413 | Issuer-adjusted; LTM calculation C05 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 |
| EBITDA (Reported) margin | 10.12% | 10.84% | 11.17% | EBITDA (Reported) over sales; calculation C17 | calculation C17 |
| Income from operations, US$m | 145.382 | 176.870 | 197.100 | Reported; LTM calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Interest expense, US$m | 63.927 | 60.530 | 66.455 | Reported; includes amortization of issuance costs and finance-lease interest; LTM calculated | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Cash interest paid, US$m | 67.005 | 53.698 | 58.803 | Reported supplemental; FY2024 includes USD 9.3 million of 2023 interest; LTM calculation C06 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 92; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 19 |
| Net cash from operating activities, US$m | 102.211 | 94.264 | 118.400 | Reported; LTM calculation C12 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Purchase of property and equipment, US$m | 25.068 | 40.286 | 13.439 | Reported capital expenditure; LTM calculation C12 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| Free cash flow, US$m | 77.143 | 53.978 | 104.961 | Operating cash flow less purchase of property and equipment; calculation C12 | calculation C12 |
| Total debt (carrying value), US$m | 628.279 | 827.056 | 823.216 | Current maturities plus long-term debt net of costs; calculation C01 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| Debt principal, US$m | 648.876 | 846.785 | 839.525 | Reported principal in the debt note; reconciled in calculation C02 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 11 |
| Cash, US$m | 148.320 | 303.783 | 218.834 | Balance-sheet Cash line | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| Net debt, US$m | 479.959 | 523.273 | 604.382 | Total debt less cash; calculation C03 | calculation C03 |
| Total debt / EBITDA (Reported) | 3.45x | 3.78x | 3.33x | Calculation C08 | calculation C08 |
| Net debt / EBITDA (Reported) | 2.63x | 2.39x | 2.45x | Calculation C08 | calculation C08 |
| Total debt / EBITDA (Adjusted) | 3.28x | 3.67x | 3.24x | Calculation C09; issuer-adjusted EBITDA | calculation C09 |
| Net debt / EBITDA (Adjusted) | 2.51x | 2.32x | 2.38x | Calculation C09; issuer-adjusted EBITDA | calculation C09 |
| EBITDA (Reported) / cash interest paid | 2.72x | 4.07x | 4.20x | Calculation C10 | calculation C10 |
| EBITDA (Adjusted) / cash interest paid | 2.86x | 4.20x | 4.33x | Calculation C10 | calculation C10 |
| Liquidity (cash plus undrawn revolver availability), US$m | 273.966 | 457.311 | 411.005 | Cash plus the revolver commitment less letters of credit; calculation C14 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 33 |
| Secured Leverage Ratio as reported by the company | Not supplied: no 2024 year-end ratio is in the annual report supplied | 2.25x | 2.30x | Company covenant definition: secured debt net of unrestricted cash over covenant EBITDA; stated maximum differs between documents (T4.11) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 84; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 12 |
| Covenant EBITDA stated by management, US$m | Not supplied: no 2024 or 2025 year-end figure is in the documents supplied | Not supplied: no year-end 2025 figure is in the documents supplied | 270.000 | Management's figure for the twelve months to 2026-09-30; not bridged to reported EBITDA | EX-99.1_2026-11-05_earningsrelease9302026.htm.jsonl, page 2 |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 34 |
| Calculated | 20 |
| Assumption-Based | 1 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 5 |
| Fields present | 24 |
| Fields total | 24 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 11 |

## Calculations

| ID | Calculation | Inputs | Working | Result | Source |
|---|---|---|---|---|---|
| C01 | Total Debt at carrying value (USD thousands) | Current maturities of debt plus long-term debt, net of unamortized costs and discounts: FY2024 6,595 and 621,684; FY2025 8,580 and 818,476; 2026-09-30 8,480 and 814,736 | 6,595 + 621,684; 8,580 + 818,476; 8,480 + 814,736 | 628,279; 827,056; 823,216 (USD 628.279 million; 827.056 million; 823.216 million; text rounding USD 823.2 million at 2026-09-30) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3 |
| C02 | Principal to carrying value (USD thousands) | Principal FY2024 648,876; FY2025 846,785; 2026-09-30 839,525; unamortized discount and issuance costs 20,597; 19,729; 16,309 | 648,876 - 20,597; 846,785 - 19,729; 839,525 - 16,309 | 628,279; 827,056; 823,216, equal to C01; reconciling item at 2026-09-30 is -16,309 (USD -16.309 million) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 11 |
| C03 | Net debt (USD thousands) | Total Debt (C01) and cash 148,320; 303,783; 218,834 | 628,279 - 148,320; 827,056 - 303,783; 823,216 - 218,834 | 479,959; 523,273; 604,382 (text rounding USD 523.3 million at 2025-12-31 and USD 604.4 million at 2026-09-30) | calculation C01; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| C04 | Last-twelve-months reported EBITDA to 2026-09-30 (USD thousands) | FY2025 218,602; nine months 2026 189,641; nine months 2025 161,063 | 218,602 + 189,641 - 161,063 | 247,180 (text rounding USD 247.2 million) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 |
| C05 | Last-twelve-months Adjusted EBITDA and its add-backs (USD thousands) | Adjusted EBITDA FY2025 225,302, nine months 2026 195,444, nine months 2025 166,333; stock compensation 5,708, 4,757, 4,278; other non-recurring items 992, 1,046, 992 | 225,302 + 195,444 - 166,333; 5,708 + 4,757 - 4,278; 992 + 1,046 - 992; check 247,180 + 6,187 + 1,046 | 254,413; stock compensation 6,187; other non-recurring items 1,046; reported EBITDA plus add-backs equals 254,413 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 31 |
| C06 | Last-twelve-months cash interest paid (USD thousands) | FY2025 53,698; nine months 2026 45,330; nine months 2025 40,225 | 53,698 + 45,330 - 40,225 | 58,803 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 92; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 19 |
| C07 | Last-twelve-months sales (USD thousands) | FY2025 2,016,365; nine months 2026 1,685,299; nine months 2025 1,488,975 | 2,016,365 + 1,685,299 - 1,488,975 | 2,212,689 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2 |
| C08 | Leverage on reported EBITDA (USD millions) | Total Debt 628.279; 827.056; 823.216; net debt 479.959; 523.273; 604.382; EBITDA (Reported) 182.304; 218.602; 247.180 (C04) | 628.279 / 182.304; 827.056 / 218.602; 823.216 / 247.180; 479.959 / 182.304; 523.273 / 218.602; 604.382 / 247.180 | Total debt / EBITDA 3.45x; 3.78x; 3.33x; net debt / EBITDA 2.63x; 2.39x; 2.45x | calculation C01; calculation C03; calculation C04 |
| C09 | Leverage on Adjusted EBITDA (USD millions) | Total Debt and net debt as C08; EBITDA (Adjusted) 191.310; 225.302; 254.413 (C05) | 628.279 / 191.310; 827.056 / 225.302; 823.216 / 254.413; 479.959 / 191.310; 523.273 / 225.302; 604.382 / 254.413 | Total debt / adjusted EBITDA 3.28x; 3.67x; 3.24x; net debt / adjusted EBITDA 2.51x; 2.32x; 2.38x | calculation C01; calculation C03; calculation C05 |
| C10 | Interest cover on cash interest paid (USD millions) | EBITDA (Reported) 182.304; 218.602; 247.180; EBITDA (Adjusted) 191.310; 225.302; 254.413; cash interest 67.005; 53.698; 58.803 (C06); FY2024 cash interest less USD 9.3 million of 2023 interest paid in 2024 is 57.705 | 182.304 / 67.005; 218.602 / 53.698; 247.180 / 58.803; 191.310 / 67.005; 225.302 / 53.698; 254.413 / 58.803; normalised 182.304 / 57.705 | EBITDA / cash interest 2.72x; 4.07x; 4.20x; Adjusted EBITDA / cash interest 2.86x; 4.20x; 4.33x; FY2024 excluding the 2023 interest 3.16x (Analyst Judgement) | calculation C04; calculation C05; calculation C06; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 92 |
| C11 | Working capital change and operating cash flow before it (USD thousands) | Eight changes in operating assets and liabilities per period (FY2024, FY2025, 9M 2025, 9M 2026); Net Cash from Operating Activities 102,211; 94,264; 56,505; 80,641 | Sum of the eight lines; operating cash flow less that sum | Working capital change 826; -58,887; -60,539; -41,866 (nine months 2026 absorbed USD 41.9 million; nine months 2025 USD 60.5 million); operating cash flow before working capital 101,385; 153,151; 117,044; 122,507 | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| C12 | Free cash flow and its last twelve months (USD thousands) | Net Cash from Operating Activities and purchase of property and equipment: FY2024 102,211 and 25,068; FY2025 94,264 and 40,286; 9M 2025 56,505 and 37,000; 9M 2026 80,641 and 10,153 | Operating cash flow less purchase of property and equipment; LTM operating cash flow 94,264 + 80,641 - 56,505; LTM capex 40,286 + 10,153 - 37,000 | Free cash flow 77,143; 53,978; 19,505; 70,488; LTM operating cash flow 118,400, LTM capex 13,439, LTM free cash flow 104,961; nine months 2026 free cash flow after USD 126.2 million of cash acquisitions is -55,746 (USD -55.7 million) | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 3–4 |
| C13 | Lease liabilities and lease-adjusted leverage (USD thousands) | Operating leases: 14,921 and 33,159; 19,038 and 57,509; 20,042 and 54,682; finance leases: 5,321 and 11,055; 7,660 and 13,223; total debt FY2025 827,056; EBITDA (Reported) FY2025 218,602 | Current plus long-term per date; (827,056 + 20,883) / 218,602 | Operating lease liabilities 48,080; 76,547; 74,724 (USD 74.7 million at 2026-09-30); finance lease liabilities 16,376; 20,883 (USD 20.9 million at 2025-12-31); FY2025 total debt plus finance leases over EBITDA 3.88x | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |
| C14 | Revolver availability and liquidity (USD thousands) | Commitment 135,000; 185,000; 225,000; letters of credit 9,354; 31,472; 32,829; nothing drawn; cash 148,320; 303,783; 218,834 | Commitment - drawn - letters of credit; cash plus availability | Availability 125,646; 153,528; 192,171 (USD 192.2 million); liquidity 273,966; 457,311 (USD 457.3 million); 411,005 (USD 411.0 million) at 2026-09-30; cash USD 218.8 million and letters of credit USD 32.8 million | 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 33 |
| C15 | Maturity ladder to principal (USD thousands) | FY2026 2,120; FY2027 8,480; FY2028 8,480; FY2029 8,480; FY2030 811,965 | 2,120 + 8,480 + 8,480 + 8,480 + 811,965 | 839,525, equal to principal; FY2030 USD 812.0 million; FY2026 USD 2.1 million; each of FY2027 to FY2029 USD 8.5 million | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 14 |
| C16 | Net debt movement since 2025-12-31 (USD thousands) | Net debt 523,273 and 604,382; Total Debt 827,056 and 823,216; cash 303,783 and 218,834; LTM EBITDA (Reported) 218,602 (FY2025) and 247,180; incremental term loan commitments of USD 205.0 million in the December 2025 amendment | 604,382 - 523,273; 823,216 - 827,056; 218,834 - 303,783; 247,180 - 218,602; 81,109 / 523,273; 28,578 / 218,602 | Net debt +81,109 (USD 81.1 million, +15.50%); Total Debt -3,840; cash -84,949 (USD 84.9 million fall); LTM EBITDA +28,578 (USD 28.6 million, +13.07%); term loan increase USD 205.0 million; USD 126.2 million cash acquisitions in nine months 2026 | calculation C03; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 83; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4 |
| C17 | Margins, growth and liquidity cover (USD millions) | EBITDA (Reported) 182.304; 218.602; 247.180 over sales 1,802.040; 2,016.365; 2,212.689; sales FY2025 and FY2024; Adjusted EBITDA FY2025 and FY2024; capex 10.153 over sales 1,685.299; free cash flow 70.488 over EBITDA 189.641; liquidity 411.005 over Total Debt 823.216 | EBITDA / sales; 2,016.365 / 1,802.040 - 1; 225.302 / 191.310 - 1; 10.153 / 1,685.299; 70.488 / 189.641; 411.005 / 823.216 | EBITDA margin 10.12%; 10.84%; 11.17%; sales growth FY2025 11.89%; Adjusted EBITDA growth FY2025 17.77%; capex over sales 0.60%; free cash flow over EBITDA 0.37 (37%); liquidity over Total Debt 49.93% | calculation C04; calculation C07; calculation C12; calculation C14 |
| C18 | Non-debt float and contingent consideration (USD thousands) | Customer advances 13,655; 15,460; 15,872 and billings in excess of costs 12,662; 15,689; 27,735; contingent consideration 13,775 at 2025-12-31 plus acquisitions 21,988, less settlements 6,250, plus fair value change 1,198 | Customer advances plus billings in excess; 13,775 + 21,988 - 6,250 + 1,198; 30,711 - 13,775 | Contract liabilities 26,317; 31,149; 43,607 (USD 43.6 million; USD 31.1 million at 2025-12-31; rise 12,458, USD 12.5 million); billings in excess USD 27.7 million; contingent consideration 30,711 (USD 30.7 million; USD 13.8 million at 2025-12-31; rise 16,936, USD 16.9 million); maximum payable USD 34.0 million | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 2–3; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 80 |
| C19 | Interest rate sensitivity on principal (USD thousands) | Term loan principal 839,525 at 2026-09-30; LTM EBITDA 247,180; floor 1.00% and a 7.15% rate that implies the floating leg is above the floor | 839,525 x 1%; 8,395 / 247,180 | Annual interest change per 100 bp of 8,395 (USD 8.4 million), 3.40% of LTM EBITDA; Assumption-Based: the whole principal floats and no hedge is in place | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 11; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 64 |
| C20 | Company secured leverage against this module's net leverage (USD thousands) | Principal 839,525; cash 218,834; covenant EBITDA 270,000; LTM EBITDA (Reported) 247,180; LTM Adjusted EBITDA 254,413; net debt on carrying value 604,382 | (839,525 - 218,834) / 270,000; 620,691 / 247,180; 604,382 / 247,180; 270,000 - 247,180; 270,000 - 254,413 | Principal net debt 620,691; 2.2989 on covenant EBITDA (reported 2.30x); 2.5111 on reported EBITDA; 2.4451 on carrying value; principal against carrying adds 0.0660x and covenant against reported EBITDA takes off 0.2122x; covenant EBITDA is 22,820 above reported (USD 22.8 million) and 15,587 above Adjusted (USD 15.6 million) | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 12; EX-99.1_2026-11-05_earningsrelease9302026.htm.jsonl, page 2 |
| C21 | Other rounded figures used in the analysis text (USD thousands) | Interest expense 50,223 and 44,298; cash taxes paid 6,579 and 35,095; capex 10,153 and 37,000; receivables change -52,649; operating cash flow 80,641 and 56,505; free cash flow 70,488 and 19,505; cash fall 84,949; scheduled principal and acquisition sales | Differences and one-decimal rounding in USD millions | Interest expense up 5,925 (USD 5.9 million) to USD 50.2 million; cash taxes USD 6.6 million against USD 35.1 million; capex USD 10.2 million against USD 37.0 million; receivables absorbed USD 52.6 million; operating cash flow USD 80.6 million against USD 56.5 million; free cash flow USD 70.5 million against USD 19.5 million; Q4 2025 sales 527,390 and EBITDA 57,539 (USD 57.5 million) | 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3 |

## Gaps

The maximum Secured Leverage Ratio for the June and September 2026 tests is 5.50 to 1.00 in the annual report schedule but less than 5.75 to 1.00 in the second-quarter and third-quarter reports, and no executed credit agreement is supplied, so covenant headroom cannot be stated as one figure. Severity High. Action: obtain the executed term loan agreement and the December 2025 amendment.
Basis: 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 84; 10-Q_2026-06-30_dxpe-20260630.htm.jsonl, page 11; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 12; Source readiness (CP-0)

Management's covenant EBITDA of USD 270.0 million for the twelve months to 2026-09-30 is USD 22.8 million above reported EBITDA and USD 15.6 million above Adjusted EBITDA, and no source bridges the measures, so the company's secured leverage of 2.30x cannot be rebuilt line by line from reported figures. Severity Medium. Action: obtain the covenant compliance certificate or the agreement's EBITDA definition schedule.
Basis: EX-99.1_2026-11-05_earningsrelease9302026.htm.jsonl, page 2; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 85; calculation C20

Pro forma EBITDA for the five acquisitions of 2026 is not supplied, although the third-quarter report gives pro forma sales of USD 1,699.9 million against reported USD 1,685.3 million for nine months, so twelve-month EBITDA includes the acquired businesses only from their purchase dates and the leverage ratios are slightly overstated against a pro forma view. Severity Medium. Action: obtain pro forma EBITDA for the acquisitions.
Basis: 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 18

The security package of the term loan and its ranking beyond receivables and inventory are not stated, the revolver's floor is not stated, the filing states carrying value only for total debt and not for each instrument, and the promissory note's security and ranking are not stated, so the debt stack ranks the revolver ahead of the term loan on shared collateral only. Severity Medium. Action: obtain the term loan agreement and the intercreditor terms.
Basis: 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, pages 12–13; 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 86

The price of the agreement of 2026-11-01 to acquire MDS of Michigan, LLC and any purchases under the repurchase program authorized on 2026-10-28 are not stated, so the pro forma net debt and pro forma net leverage after these events are not established. Severity Medium. Action: obtain the purchase price and the repurchase activity from the next filing.
Basis: 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 21

Finance lease liabilities are not stated at 2026-09-30 (they were USD 20.9 million at 2025-12-31), so lease-adjusted leverage at the latest date is not calculable. Severity Low. Action: obtain the lease note of the next annual report or a quarterly lease disclosure.
Basis: 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 14

Restricted cash is printed as a dash at 2025-12-31 and has no line at 2026-09-30, and the 2024 balance of USD 0.091 million was excluded from Cash & Equivalents; at 2026-09-30 cash and restricted cash in the cash flow statement equal the Cash line, so none is implied. Severity Low. Action: none needed.
Basis: 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 4

The fourth quarter of 2025 is not reported on its own, so its sales of USD 527.4 million and EBITDA of USD 57.5 million are calculated as FY2025 less nine months 2025 and labelled calculated. Severity Low. Action: none needed.
Basis: 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 2; calculation C21

The statements for FY2023 are in the annual report but were not extracted, so the trend rests on FY2024, FY2025 and the 2026 periods, and no FY2023 balance sheet is in the documents supplied. Severity Low. Action: extract FY2023 income statement and cash flow only if a longer trend is needed.
Basis: 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 68

No year-end secured leverage ratio or covenant EBITDA is supplied for FY2024, and no covenant EBITDA for FY2025, so the company-reported series in the metrics table starts at 2025-12-31 for the ratio and 2026-09-30 for covenant EBITDA. Severity Low. Action: none needed for this snapshot.
Basis: 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 84; EX-99.1_2026-11-05_earningsrelease9302026.htm.jsonl, page 2

Capital expenditure is stated in total only; no maintenance and growth split is stated. The interim statements and the quarterly reports are unaudited and the filings do not say whether the auditor reviewed them. Severity Low. Action: none needed.
Basis: 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 3

The Total Leverage Ratio that sets the term loan's excess cash flow prepayment, which is 50% of excess cash flow falling to 25% at or below 3.00 to 1.00 and nil at or below 2.50 to 1.00, is not stated in the filings, so whether any mandatory prepayment is due from 2026 cash flow is not established. Severity Low. Action: obtain the agreement's definition of Total Leverage Ratio and the company's computation.
Basis: 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 84; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 12

Interest-rate hedging after 2025-12-31 is stated only by reference to the annual report, which reports no hedges, so the rate-sensitivity figure assumes none. Severity Low. Action: confirm in the next annual report.
Basis: 10-K_2025-12-31_dxpe-20251231.htm.jsonl, page 64; 10-Q_2026-09-30_dxpe-20260930.htm.jsonl, page 34; calculation C19

## Next module

The orchestrator selects the next module.
