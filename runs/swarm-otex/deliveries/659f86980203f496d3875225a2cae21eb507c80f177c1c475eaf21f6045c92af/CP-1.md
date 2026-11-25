---
module_id: CP-1
issuer_id: otex
issuer_name: OPEN TEXT CORP
analysis_date: 2026-11-05
run_id: otex-2026-11-05-credit_snapshot-host
---

## Request

This is the financial foundation for OPEN TEXT CORP (otex) as of 2026-11-05 on the credit snapshot pathway. It extracts the statements, debt, liquidity, leverage and cover from the supplied filings and releases, in US dollars. It makes no credit recommendation.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2026-06-30_otex-20260630.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 30 June 2026 | 2026-08-06 | f68e5c975d736a5d60a932e22b4b1113b0dd717debe22c96d4297e49e4b48ad7 | Audited statements, debt note, covenant text, supplemental cash flow, non-GAAP reconciliations, subsequent events, outlook |
| 10-Q_2026-09-30_otex-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-05 | 1fd82748eef70947f4a4d274b026606169ae599efc16f0e2194cf001bfe65e31 | Latest statements, debt note, subsequent financing events, supplemental cash flow, fiscal 2027 outlook |
| EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of fiscal 2027 | 2026-11-05 | f55be454dd27b1c15a5ec57d7bf7bf620ded41528eca4ef61bb9f128226efbcd | Adjusted EBITDA and free cash flow reconciliations for three quarters, net leverage statement, debt reduction statement |
| EX-99.1_2026-08-06_q4-26pressreleaseexhibit991.htm.jsonl | Earnings release (Exhibit 99.1) for the fourth quarter and fiscal year 2026 | 2026-08-06 | 83f62f97a6b7c7e9bfc3742a4b7bc9c0199bd0f87ffa7a765f100c4602287036 | Adjusted EBITDA margin for fiscal 2025 |
| 10-Q_2026-03-31_otex-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-07 | 337092207ee075518fbe18b12c9d6afe8e47e489c027bb48960c31b2c5742175 | Covenant ratio reported at 31 March 2026 |
| 10-Q_2025-12-31_otex-20251231.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 December 2025 | 2026-02-05 | c656e908af03f16a38fffb87df79cdeabf81b11c447b6307e4c89c53daecd451 | Covenant ratio reported at 31 December 2025 |

| Module | Handoff | sha256 | Use |
|---|---|---|---|
| Source readiness (CP-0) | Source-readiness handoff for OPEN TEXT CORP dated 2026-11-05 | e9b5574d7b5b32a8219d11a4ed0dbae67a707097c3f84935626d42ce21c72e01 | Confirmed the document set, the October 2026 events outside the latest balance sheet and the gaps on letters of credit and the term loan maturity |

## Findings

### Bottom line

Open Text cut leverage to 3.50x reported EBITDA (2.90x net) at 30 September 2026 from 4.16x (3.40x net) at the 2025 fiscal year-end, with cash interest cover of 5.50x, but progress stalled in the latest quarter.

Last-twelve-months EBITDA fell with revenue and higher special charges, so total leverage rose from 3.41x at the 2026 fiscal year-end. The October 2026 refinancing moved the nearest secured maturity from 2027 to 2031 and 2033, but the cash it used is not stated, so net debt and leverage after it are not established.
Basis: calculation C3; calculation C4; calculation C6; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 43–44

### Key findings

- Leverage on carrying-value debt over reported EBITDA fell from 4.16x at the 2025 fiscal year-end to 3.41x at the 2026 fiscal year-end, as debt fell by USD 607.55 million and reported EBITDA rose by 10.16%. It then rose to 3.50x on a last-twelve-months basis at 30 September 2026, because last-twelve-months EBITDA is USD 40.13 million below the fiscal 2026 figure while debt barely moved: first-quarter revenue fell 4.00% year on year and special charges were USD 33.29 million against USD 20.14 million. Net leverage moved from 3.40x to 2.85x to 2.90x, so the deleveraging of fiscal 2026 has paused.
  Basis: calculation C3; calculation C4; calculation C6; calculation C9; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3
- Cash interest paid fell from USD 352.38 million in fiscal 2025 to USD 321.69 million in fiscal 2026 and to USD 300.11 million over the last twelve months, which lifted reported EBITDA cover from 4.35x to 5.25x and 5.50x. The fall comes from the term loan, whose interest expense dropped as prepayments cut its floating-rate balance, while interest on the fixed-rate notes did not change; cash received for interest is not netted.
  Basis: calculation C4; calculation C6; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 42; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 269–270; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 273
- Free cash flow, operating cash flow less capital expenditure, was USD 807.52 million in fiscal 2026 against USD 687.40 million in fiscal 2025, a conversion of 47.79% of reported EBITDA. Dividends, share repurchases and treasury purchases took USD 737.67 million, or 91.35% of it, so debt repayment of USD 648.85 million depended on USD 311.91 million of divestiture proceeds and a USD 200.85 million fall in cash. Capital returns compete with deleveraging for the same cash.
  Basis: calculation C10; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 117
- Liquidity at 30 September 2026 was USD 983.29 million of cash plus the undrawn USD 750 million revolver, before letters of credit that no document quantifies. Before 2028 the only principal falling due is term loan amortisation of USD 35.85 million a year; after 2 October 2026 the nearest note maturity is the 2028 notes, with USD 600 million left after the tender. The revolver maturity was extended to 2031, subject to conditions.
  Basis: 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 19; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268; calculation C5
- The latest balance sheet precedes the October 2026 refinancing. On 1 October 2026 the issuer issued USD 500 million of 6.70% secured notes due 2031 and USD 500 million of 7.15% secured notes due 2033, and on 2 October 2026 it redeemed USD 1.0 billion of 2027 secured notes and cancelled USD 300 million of 2028 unsecured notes. Principal ends USD 300 million lower, and the new coupons of 6.70% and 7.15% straddle the 6.90% coupon on the notes redeemed. The cash paid in premium, accrued interest and costs is not stated, so pro forma net debt and leverage are not established.
  Basis: 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 43–44; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 52; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 3; calculation C13
- Printed covenant ratios and the figures computed here are different measures. The lenders' ratio was 3.35x at 31 December 2025, 3.02x at 31 March 2026 and 2.75x at 30 June 2026, falling with debt; the last sits between net debt over reported EBITDA at 2.85x and net debt over adjusted EBITDA at 2.53x, and its definition sits in agreements that are not supplied. The release's net leverage ratio of 2.55x at 30 September 2026 equals net debt over last-twelve-months adjusted EBITDA computed here, although the release does not define it. Covenant capacity is not inferred.
  Basis: 10-Q_2025-12-31_otex-20251231.htm.jsonl, page 22; 10-Q_2026-03-31_otex-20260331.htm.jsonl, page 23; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 124; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 126; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 3; calculation C4; calculation C12
- Deferred revenue, a funding float that bears no interest, was USD 1,643.15 million at the 2026 fiscal year-end against USD 1,684.14 million a year earlier and USD 1,529.69 million at 30 September 2026. The first quarter drained USD 116.56 million of cash through deferred revenue, against USD 108.80 million a year earlier, and receivables collections of USD 115.80 million offset it; a shrinking float is a claim on cash that creditors do not see in debt.
  Basis: calculation C11; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5
- The statements agree internally: assets equal liabilities plus equity, the cash flows reconcile to the change in cash, the 30 June 2026 balance sheet is identical in the annual and quarterly reports, and the issuer's adjusted EBITDA and free cash flow agree to the figures computed here. Dashes in the source are carried as not supplied, never as zero.
  Basis: calculation C1; calculation C2; calculation C8; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–5

### Contrary evidence and what would change the view

The strongest evidence against reading this as a steady deleveraging credit is the company's own fiscal 2027 outlook: revenue of USD 5,135 million to USD 5,185 million and an adjusted EBITDA margin of 32% to 33%, against 36.3% in fiscal 2026 and 35.8% in the latest quarter. A lower margin on lower revenue cuts EBITDA and lifts leverage unless debt falls faster, and the latest quarter already shows that. It would take a second quarter of rising last-twelve-months EBITDA, or debt falling faster than EBITDA, to restore the fiscal 2026 trend.
Basis: 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 53–54; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 136; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 16; calculation C4

The strongest support is the maturity profile: nothing but term loan amortisation falls due before 2028, the revolver is undrawn, and the refinancing removed the nearest secured maturity. What would change the view is evidence of cash used in the refinancing large enough to lift net debt, or a covenant ratio at 30 September 2026 close to the 4.50x maximum, neither of which is printed.
Basis: 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 43–44; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 124

### Limitations

- Reported EBITDA is derived as income from operations plus depreciation and amortization of intangible assets because the issuer states no unadjusted EBITDA; a different treatment of other income or special charges would move every ratio.
  Basis: 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236
- Net debt after 2 October 2026 is not established: premium, accrued interest, tender price and costs are not stated and no pro forma capitalisation is supplied.
  Basis: 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 43–44
- Leverage is built only at 30 June 2025, 30 June 2026 and 30 September 2026; interim dates in between are not constructed, and no balance sheet exists in the documents for 30 June 2024 or 30 September 2025.
  Basis: 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3
- Cash interest is the gross amount paid; interest received is not netted, so cover is conservative.
  Basis: 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 42
- The ladder of debt maturities leaves out the term loan balance beyond its current portion because its maturity date is not printed.
  Basis: 10-K_2026-06-30_otex-20260630.htm.jsonl, page 272
- The EBITDA bridge starts from derived reported EBITDA, not from the issuer's own net income start, and carries the non-controlling interest step needed to reach the issuer's figure.
  Basis: 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-06-30 | 4.16 | 3.40 | x | Reported EBITDA is income from operations plus depreciation and amortization of intangible assets, fiscal year; debt is balance-sheet carrying value. Not the covenant ratio (calculation C4). |
| FY2026 / 2026-06-30 | 3.41 | 2.85 | x | Reported EBITDA is income from operations plus depreciation and amortization of intangible assets, fiscal year; debt is balance-sheet carrying value. Not the covenant ratio (calculation C4). |
| 2026-09-30 | 3.50 | 2.90 | x | Reported EBITDA is income from operations plus depreciation and amortization of intangible assets, last twelve months to 2026-09-30 (fiscal 2026 plus the first quarter of fiscal 2027 less the first quarter of fiscal 2026); debt is balance-sheet carrying value. Not the covenant ratio (calculation C4). |

The ratios use balance-sheet carrying value and derived reported EBITDA, and the last row is a last-twelve-months figure before the October 2026 refinancing.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2025 / 2025-06-30 | 4.35 | x | Reported EBITDA over cash interest paid, fiscal year; cash interest received is not netted (calculation C4). |
| FY2026 / 2026-06-30 | 5.25 | x | Reported EBITDA over cash interest paid, fiscal year; cash interest received is not netted (calculation C4). |
| 2026-09-30 | 5.50 | x | Reported EBITDA over cash interest paid, last twelve months to 2026-09-30; cash interest received is not netted (calculation C4). |

Cover uses cash interest paid, not netted for interest received, and the last row is a last-twelve-months figure.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-06-30 | 1,156.496 | 750.000 | US$m | Cash is cash and cash equivalents excluding restricted cash. Undrawn committed facilities is the USD 750 million revolver commitment with no outstanding balance, stated before any letters of credit issued under it, which no document quantifies. |
| FY2026 / 2026-06-30 | 956.024 | 750.000 | US$m | Cash is cash and cash equivalents excluding restricted cash. Undrawn committed facilities is the USD 750 million revolver commitment with no outstanding balance, stated before any letters of credit issued under it, which no document quantifies. |
| 2026-09-30 | 983.292 | 750.000 | US$m | Cash is cash and cash equivalents excluding restricted cash. Undrawn committed facilities is the USD 750 million revolver commitment with no outstanding balance, stated before any letters of credit issued under it, which no document quantifies. |

Undrawn committed facilities is the revolver commitment before any letters of credit, which no document quantifies.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2027 | 35.850 | US$m | Principal at 2026-06-30 maturing in the fiscal year: current portion of the Acquisition Term Loan, the only principal falling due in fiscal 2027. Dates are the contractual maturities in the debt note. |
| FY2028 | 1,900.000 | US$m | Principal at 2026-06-30 maturing in the fiscal year: Senior Secured Notes 2027 (1,000.000, due 2027-12-01) and Senior Notes 2028 (900.000, due 2028-02-15). Dates are the contractual maturities in the debt note. |
| FY2030 | 1,750.000 | US$m | Principal at 2026-06-30 maturing in the fiscal year: Senior Notes 2029 (850.000, due 2029-12-01) and Senior Notes 2030 (900.000, due 2030-02-15). Dates are the contractual maturities in the debt note. |
| FY2032 | 650.000 | US$m | Principal at 2026-06-30 maturing in the fiscal year: Senior Notes 2031 (650.000, due 2031-12-01). Dates are the contractual maturities in the debt note. |

The ladder holds only principal with a printed maturity at 2026-06-30; the term loan balance beyond its current portion, 1,500.675, has no printed maturity and sits in the reconciliation to carrying value.

### Financials and credit metrics

| Measure | FY2024 | FY2025 | FY2026 | Q1 2026 | Q1 2027 | Last twelve months to 2026-09-30 |
|---|---|---|---|---|---|---|
| Total revenues (US$m) | 5,769.577 | 5,168.405 | 5,246.401 | 1,288.135 | 1,236.634 | 5,194.900 |
| Income from operations (US$m) | 887.085 | 892.689 | 1,082.597 | 269.949 | 250.811 | 1,063.459 |
| EBITDA (Reported) (US$m) | 1,695.010 | 1,533.933 | 1,689.747 | 429.635 | 389.501 | 1,649.613 |
| EBITDA (Adjusted) (US$m) | 1,970.200 | 1,784.465 | 1,903.162 | 467.411 | 442.432 | 1,878.183 |
| Net income (US$m) | 465.284 | 436.066 | 643.263 | 146.660 | 155.300 | Not calculable: not constructed |
| Net cash provided by operating activities (US$m) | 967.691 | 830.618 | 1,006.817 | 147.763 | 172.273 | Not calculable: not constructed |
| Capital expenditure (US$m) | 159.295 | 143.222 | 199.300 | 46.534 | 33.756 | Not calculable: not constructed |
| Free cash flow, operating cash flow less capital expenditure (US$m) | 808.396 | 687.396 | 807.517 | 101.229 | 138.517 | Not calculable: not constructed |
| Cash paid for interest (US$m) | 533.866 | 352.383 | 321.694 | 79.500 | 57.917 | 300.111 |
| Total debt, carrying value (US$m) | Not supplied: no balance sheet | 6,377.921 | 5,770.369 | Not supplied: no balance sheet | 5,766.377 | 5,766.377 |
| Cash and cash equivalents (US$m) | Not supplied: no balance sheet | 1,156.496 | 956.024 | Not supplied: no balance sheet | 983.292 | 983.292 |
| Net debt (US$m) | Not supplied: no balance sheet | 5,221.425 | 4,814.345 | Not supplied: no balance sheet | 4,783.085 | 4,783.085 |
| Total debt / EBITDA (reported), x | Not supplied: no balance sheet | 4.16 | 3.41 | Not supplied: no balance sheet | Not calculable: interim EBITDA is not annual | 3.50 |
| Net debt / EBITDA (reported), x | Not supplied: no balance sheet | 3.40 | 2.85 | Not supplied: no balance sheet | Not calculable: interim EBITDA is not annual | 2.90 |
| Net debt / EBITDA (adjusted), x | Not supplied: no balance sheet | 2.93 | 2.53 | Not supplied: no balance sheet | Not calculable: interim EBITDA is not annual | 2.55 |
| EBITDA (reported) / cash interest, x | 3.17 | 4.35 | 5.25 | Not calculable: semi-annual coupons make one quarter unrepresentative | Not calculable: semi-annual coupons make one quarter unrepresentative | 5.50 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-06-30 | 6,377.921 | 1,156.496 | 5,221.425 | US$m | Reported balance sheet. Gross debt is carrying value: current portion 35.850 plus long-term debt 6,342.071, net of issuance costs and discounts; it includes no leases, which sit on their own lines. Contractual principal beside it is 6,485.375. Cash excludes restricted cash. Net debt is gross debt less cash (calculation C3). Before the October 2026 refinancing. |
| FY2026 / 2026-06-30 | 5,770.369 | 956.024 | 4,814.345 | US$m | Reported balance sheet. Gross debt is carrying value: current portion 35.850 plus long-term debt 5,734.519, net of issuance costs and discounts; it includes no leases, which sit on their own lines. Contractual principal beside it is 5,836.525. Cash excludes restricted cash. Net debt is gross debt less cash (calculation C3). Before the October 2026 refinancing. |
| 2026-09-30 | 5,766.377 | 983.292 | 4,783.085 | US$m | Reported balance sheet. Gross debt is carrying value: current portion 35.850 plus long-term debt 5,730.527, net of issuance costs and discounts; it includes no leases, which sit on their own lines. Contractual principal beside it is 5,827.563. Cash excludes restricted cash. Net debt is gross debt less cash (calculation C3). Before the October 2026 refinancing. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2026 / 2026-06-30 | 4,335.850 | 1,434.519 | 5,770.369 | US$m | Contractual principal here is the dated ladder only, 4,335.850; total contractual principal is 5,836.525. Reconciling items 1,434.519 are the Acquisition Term Loan principal beyond its current portion, 1,500.675, whose maturity date no document prints (the seven-year term runs from a funding date that is not stated), less unamortised debt discount and issuance costs of 66.156 (calculation C5). |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Issue of USD 500 million 6.70% senior secured notes due 2031 and USD 500 million 7.15% senior secured notes due 2033 | 2026-10-01 | Not supplied: the net proceeds and issuance costs are not stated | Not supplied: the cash held after the issue is not stated | Not supplied: net debt after the event is not stated | US$m | Source: the 10-Q note on subsequent events and the debt note. Gross principal rises by 1,000.000 from 5,827.563 to 6,827.563 on the principal basis; deferred financing costs of 5.9 are noted but the proceeds received are not stated. Net debt after the event is not worked out. |
| Redemption in full and cancellation of the USD 1.0 billion Senior Secured Notes 2027 | 2026-10-02 | Not supplied: the redemption premium, accrued interest and costs are not stated | Not supplied: the cash paid is not stated | Not supplied: net debt after the event is not stated | US$m | Source: the 10-Q note on subsequent events. Funded by the new notes and cash on hand; principal falls by 1,000.000 to 5,827.563 on the principal basis after the issue and redemption together. |
| Purchase and cancellation of USD 300.0 million of Senior Notes 2028 under a cash tender offer | 2026-10-02 | Not supplied: the tender price and accrued interest are not stated | Not supplied: the cash paid is not stated | Not supplied: net debt after the event is not stated | US$m | Source: the 10-Q note on subsequent events. Principal falls by 300.000 to 5,527.563 after the three debt events together, and Senior Notes 2028 principal after the tender is 600.000; cash after the tender is not stated, so net debt and leverage after the events are not established. |
| Quarterly dividend of USD 0.28 per share declared, payable 2026-12-18 | 2026-11-03 | Not supplied: the total payable is not stated | Not supplied: the cash paid is not stated | Not supplied: net debt after the event is not stated | US$m | Source: the 10-Q note on subsequent events. Payment falls after the 2026-11-05 as-of date, so it is not yet a cash outflow. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-06-30 | 5,769.577 | 1,970.200 | US$m | Fiscal year (twelve months). Adjusted EBITDA is the issuer-adjusted measure, as stated in the annual report. |
| FY2025 / 2025-06-30 | 5,168.405 | 1,784.465 | US$m | Fiscal year (twelve months). Issuer-adjusted EBITDA. |
| FY2026 / 2026-06-30 | 5,246.401 | 1,903.162 | US$m | Fiscal year (twelve months). Issuer-adjusted EBITDA. |
| 2026-09-30 | 5,194.900 | 1,878.183 | US$m | Last twelve months: fiscal 2026 plus the first quarter of fiscal 2027 less the first quarter of fiscal 2026 (calculation C6). Issuer-adjusted EBITDA; divestitures of eDOCS and Vertica reduce revenue in the later periods. |

Adjusted EBITDA is the issuer's non-GAAP measure, and the last row is a last-twelve-months figure.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolver (USD 750 million commitment, undrawn) | 1 | Yes | 0.000 | 0.00 | US$m | Drawn amount, no outstanding balance at 2026-09-30; secured by a first charge on substantially all assets, pari passu with the term loan and the Senior Secured Notes 2027; borrower and guarantor scope not stated beyond the credit group. Cumulative leverage is cumulative principal through this row over last-twelve-months reported EBITDA of 1,649.613 (calculation C7); principal basis at 2026-09-30, before the October 2026 refinancing. |
| Acquisition Term Loan | 1 | Yes | 1,527.563 | 0.93 | US$m | Principal; first charge on substantially all assets of the company and the subsidiary guarantors; unconditionally guaranteed by certain subsidiary guarantors. Cumulative leverage is cumulative principal through this row over last-twelve-months reported EBITDA of 1,649.613 (calculation C7); principal basis at 2026-09-30, before the October 2026 refinancing. |
| Senior Secured Notes 2027 (6.90%, due 2027-12-01) | 1 | Yes | 1,000.000 | 1.53 | US$m | Principal; guaranteed on a senior secured basis by certain subsidiaries, secured with the same priority as the senior credit facilities; redeemed in full on 2026-10-02. Cumulative leverage is cumulative principal through this row over last-twelve-months reported EBITDA of 1,649.613 (calculation C7); principal basis at 2026-09-30, before the October 2026 refinancing. |
| Senior Notes 2028 (3.875%, due 2028-02-15) | 2 | No | 900.000 | 2.08 | US$m | Principal; issued by the company, guaranteed on a senior unsecured basis by wholly-owned subsidiaries that borrow or guarantee the credit facilities; USD 300.0 million cancelled on 2026-10-02. Cumulative leverage is cumulative principal through this row over last-twelve-months reported EBITDA of 1,649.613 (calculation C7); principal basis at 2026-09-30, before the October 2026 refinancing. |
| Senior Notes 2029 (3.875%, due 2029-12-01) | 2 | No | 850.000 | 2.59 | US$m | Principal; issued by the company, guaranteed on a senior unsecured basis by the same subsidiaries. Cumulative leverage is cumulative principal through this row over last-twelve-months reported EBITDA of 1,649.613 (calculation C7); principal basis at 2026-09-30, before the October 2026 refinancing. |
| Senior Notes 2030 (4.125%, due 2030-02-15) | 2 | No | 900.000 | 3.14 | US$m | Principal; issued by Open Text Inc., guaranteed by the company and by wholly-owned subsidiaries that borrow or guarantee the credit facilities. Cumulative leverage is cumulative principal through this row over last-twelve-months reported EBITDA of 1,649.613 (calculation C7); principal basis at 2026-09-30, before the October 2026 refinancing. |
| Senior Notes 2031 (4.125%, due 2031-12-01) | 2 | No | 650.000 | 3.53 | US$m | Principal; issued by Open Text Inc., guaranteed by the company and by wholly-owned subsidiaries that borrow or guarantee the credit facilities. Cumulative leverage is cumulative principal through this row over last-twelve-months reported EBITDA of 1,649.613 (calculation C7); principal basis at 2026-09-30, before the October 2026 refinancing. |

Amounts are principal at 2026-09-30, before the October 2026 refinancing, and cumulative leverage divides cumulative principal by last-twelve-months reported EBITDA.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2026 | 1,689.747 | US$m | Opening amount: income from operations plus depreciation and amortization of intangible assets, calculated (calculation C1); the reported measure |
| Net income attributable to non-controlling interests | -0.241 | US$m | Outflow: the issuer's measure starts from net income attributable to OpenText, so non-controlling income is excluded |
| Share-based compensation expense | 80.636 | US$m | Add-back as stated in the issuer's reconciliation; classification share-based compensation; realisation not applicable |
| Special charges (recoveries) | 133.020 | US$m | Add-back as stated in the issuer's reconciliation; classification restructuring and other special charges; realisation not stated |
| EBITDA (Adjusted), FY2026 | 1,903.162 | US$m | Closing amount: issuer-adjusted EBITDA as stated; the steps reconcile exactly with no balancing line (calculation C8) |

The bridge starts from derived reported EBITDA, not from the issuer's own net income starting point.

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2023-07-01 | 2024-06-30 |
| FY2025 | 2024-07-01 | 2025-06-30 |
| FY2026 | 2025-07-01 | 2026-06-30 |
| Q1 2026 | 2025-07-01 | 2025-09-30 |
| Q1 2027 | 2026-07-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2026-06-30_otex-20260630.htm.jsonl | Annual report on Form 10-K | Fiscal years ended 2026-06-30, 2025-06-30 and 2024-06-30 (balance sheets 2026-06-30 and 2025-06-30) | USD | Thousands | Open Text Corporation, consolidated | US GAAP | Tier 1: audited statements (audit report dated 2026-08-05) | Annual statements, debt note, covenant text, supplemental cash flow, non-GAAP reconciliations | Balance sheet precedes the October 2026 refinancing |
| 10-Q_2026-09-30_otex-20260930.htm.jsonl | Quarterly report on Form 10-Q | Quarter ended 2026-09-30 with the quarter ended 2025-09-30; balance sheets 2026-09-30 and 2026-06-30 | USD | Thousands | Open Text Corporation, consolidated | US GAAP | Tier 2b: unaudited, no auditor review stated | Latest statements, debt note, subsequent events, outlook | Interim; October 2026 financing in notes only |
| EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl | Earnings release, Exhibit 99.1 | Quarters ended 2026-09-30, 2026-06-30 and 2025-09-30 | USD | Millions and thousands | Open Text Corporation, consolidated | US GAAP and non-GAAP | Tier 2b: unaudited issuer release | Adjusted EBITDA and free cash flow reconciliations; net leverage statement | Management-prepared; net leverage ratio not defined |
| EX-99.1_2026-08-06_q4-26pressreleaseexhibit991.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter and year ended 2026-06-30 | USD | Millions and thousands | Open Text Corporation, consolidated | US GAAP and non-GAAP | Tier 2b: unaudited issuer release | Adjusted EBITDA margin for fiscal 2025 | Management-prepared |
| 10-Q_2026-03-31_otex-20260331.htm.jsonl | Quarterly report on Form 10-Q | Quarter and nine months ended 2026-03-31 | USD | Thousands | Open Text Corporation, consolidated | US GAAP | Tier 2b: unaudited, no auditor review stated | Covenant ratio reported at 2026-03-31 | Interim; not otherwise used |
| 10-Q_2025-12-31_otex-20251231.htm.jsonl | Quarterly report on Form 10-Q | Quarter and six months ended 2025-12-31 | USD | Thousands | Open Text Corporation, consolidated | US GAAP | Tier 2b: unaudited, no auditor review stated | Covenant ratio reported at 2025-12-31 | Interim; not otherwise used |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Open Text Corporation | Issuer and parent; issuer of the Senior Notes 2028, 2029 and Senior Secured Notes 2027; guarantor of the Senior Notes 2030 and 2031 | June 30 | USD | Thousands in the statements; US$m in the money tables | Consolidated, including subsidiaries other than Open Text South Africa Proprietary Ltd., 70% owned | US GAAP | FY2024, FY2025, FY2026, Q1 2026, Q1 2027; balance sheets at 2025-06-30, 2026-06-30 and 2026-09-30 |
| Open Text Inc. | Issuer of the Senior Notes 2030 and 2031, a wholly-owned indirect subsidiary (successor to Open Text Holdings, Inc. from 2024-07-01) | June 30 | USD | Not stated: no entity-level statements | Within the consolidated group | US GAAP | Not stated: no entity-level statements |
| Certain subsidiary guarantors | Guarantors of the Acquisition Term Loan, the Senior Secured Notes 2027 and the unsecured notes; not named | June 30 | USD | Not stated: no guarantor-level statements | Within the consolidated group | US GAAP | Not stated: no guarantor-level statements |

### Subsequent events

| Event date | Event | Source | Treatment |
|---|---|---|---|
| 2026-08-05 | Quarterly dividend of USD 0.28 per share declared, payable 2026-09-18 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 310 | Subsequent to the 2026-06-30 balance sheet; kept out of the period figures |
| 2026-08-12 | Share repurchase plan renewed for the twelve months to 2027-08-11 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 310 | Subsequent to the 2026-06-30 balance sheet; no amount at the balance-sheet date |
| 2026-10-01 | Issue of the Senior Secured Notes 2031 and 2033 and amendment of the revolver | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 43–44 | Subsequent to the 2026-09-30 balance sheet; shown only in the post-balance-sheet table |
| 2026-10-02 | Redemption of the Senior Secured Notes 2027 and cancellation of USD 300.0 million of the Senior Notes 2028 | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 43–44 | Subsequent to the 2026-09-30 balance sheet; shown only in the post-balance-sheet table |
| 2026-11-03 | Quarterly dividend of USD 0.28 per share declared, payable 2026-12-18 | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 43–44 | Subsequent to the 2026-09-30 balance sheet; payment after the as-of date |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Convert statement figures from USD thousands to US$m for the money tables | All seven sources | Unit conversion | 5,770,369 thousand | 5,770.369 million | Divide by 1,000 exactly, to three decimals, so no figure is rounded | All periods |
| Derive EBITDA (Reported) as income from operations plus depreciation and amortization of intangible assets | 10-K and 10-Q | Derivation | Not stated by the issuer | FY2026 1,689.747 million | The issuer states no unadjusted EBITDA; other income (expense), net, interest and tax sit below the line and special charges stay in (calculation C1) | FY2024 to Q1 2027 |
| Derive Total Liabilities as total current plus total long-term liabilities | 10-K and 10-Q | Derivation | Not printed as one line | 9,090,438 thousand at 2026-06-30 | The balance sheet prints the two subtotals and equity, not total liabilities (calculation C2) | FY2025, FY2026, Q1 2027 |
| Derive Total Debt as current portion plus long-term debt | 10-K and 10-Q | Derivation | Two lines | 5,770,369 thousand at 2026-06-30 | Carrying value net of issuance costs and discounts, equal to the debt note's total amount outstanding (calculation C2) | FY2025, FY2026, Q1 2027 |
| Align labels that differ between the annual and quarterly reports | 10-K and 10-Q | Label alignment | Customer support, customer-based | Client support, client-based | The quarterly report renames the lines; amounts are unchanged; both names are kept in the row label | Q1 2026, Q1 2027 |
| Construct last-twelve-months figures to 2026-09-30 | 10-K and 10-Q | Period construction | Fiscal 2026 plus first quarter of fiscal 2027 less first quarter of fiscal 2026 | See the constructed period register | No figure is replaced by a derived one; interim balance-sheet dates before 2026-09-30 are not constructed | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | FY2026 | Q1 2026 | Q1 2027 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Revenues: Cloud services and subscriptions | 1,820,524 | 1,856,474 | 1,958,554 | 484,509 | 505,469 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Revenues: Customer support (client support in the quarterly report) | 2,713,297 | 2,334,037 | 2,287,449 | 586,845 | 534,111 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Revenues: License | 834,162 | 625,614 | 678,465 | 134,548 | 123,847 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Revenues: Professional service and other | 401,594 | 352,280 | 321,933 | 82,233 | 73,207 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Total revenues | 5,769,577 | 5,168,405 | 5,246,401 | 1,288,135 | 1,236,634 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Cost of revenues: Cloud services and subscriptions | 713,759 | 697,929 | 700,617 | 172,217 | 178,453 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Cost of revenues: Customer support (client support in the quarterly report) | 292,733 | 250,310 | 231,670 | 64,064 | 47,836 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Cost of revenues: License | 25,608 | 31,939 | 25,132 | 7,096 | 4,275 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Cost of revenues: Professional service and other | 302,527 | 265,160 | 245,912 | 63,038 | 57,732 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Amortization of acquired technology-based intangible assets | 243,922 | 188,780 | 174,609 | 44,204 | 42,810 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Total cost of revenues | 1,578,549 | 1,434,118 | 1,377,940 | 350,619 | 331,106 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Gross profit | 4,191,028 | 3,734,287 | 3,868,461 | 937,516 | 905,528 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Research and development | 864,463 | 755,936 | 647,707 | 169,128 | 142,147 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Sales and marketing | 1,163,134 | 1,059,497 | 1,136,030 | 257,055 | 277,587 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| General and administrative | 577,038 | 427,811 | 436,566 | 105,763 | 105,813 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Depreciation | 131,599 | 130,573 | 143,938 | 35,921 | 39,802 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Amortization of acquired customer-based intangible assets (client-based in the quarterly report) | 432,404 | 321,891 | 288,603 | 79,561 | 56,078 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Special charges (recoveries) | 135,305 | 145,890 | 133,020 | 20,139 | 33,290 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Total operating expenses | 3,303,943 | 2,841,598 | 2,785,864 | 667,567 | 654,717 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Income from operations | 887,085 | 892,689 | 1,082,597 | 269,949 | 250,811 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Other income (expense), net | 358,391 | -82,787 | 85,875 | -2,976 | 16,110 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Interest and other related expense, net | -516,180 | -327,831 | -309,595 | -81,114 | -67,938 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Income before income taxes | 729,296 | 482,071 | 858,877 | 185,859 | 198,983 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Provision for income taxes | 264,012 | 46,005 | 215,614 | 39,199 | 43,683 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Net income | 465,284 | 436,066 | 643,263 | 146,660 | 155,300 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Net (income) attributable to non-controlling interests | -194 | -198 | -241 | -44 | -53 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| Net income attributable to OpenText | 465,090 | 435,868 | 643,022 | 146,616 | 155,247 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| EBITDA (Reported) | 1,695,010 | 1,533,933 | 1,689,747 | 429,635 | 389,501 | USD thousands | Calculated: income from operations plus depreciation and amortization of intangible assets; the issuer states no unadjusted EBITDA; excludes other income (expense), net; includes special charges (calculation C1) | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 233–234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| EBITDA (Adjusted) | 1,970,200 | 1,784,465 | 1,903,162 | 467,411 | 442,432 | USD thousands | Reported: issuer Adjusted EBITDA, net income attributable to OpenText excluding interest, taxes, depreciation, amortization, other income (expense), share-based compensation and special charges | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 15; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 19 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | FY2026 | Q1 2026 | Q1 2027 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net income | 465,284 | 436,066 | 643,263 | 146,660 | 155,300 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Depreciation and amortization of intangible assets | 807,925 | 641,244 | 607,150 | 159,686 | 138,690 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Share-based compensation expense | 140,079 | 104,840 | 80,636 | 17,681 | 19,694 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Pension expense | 13,881 | 14,593 | 15,381 | 3,141 | 1,968 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Amortization of debt discount and issuance costs | 25,257 | 21,977 | 22,522 | 5,760 | 4,970 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Write-off of right of use assets | 20,056 | 8,805 | 12,085 | 4,422 | Not supplied: the source prints no figure for the period | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Loss on extinguishment of debt | 56,393 | Not supplied: the source prints no figure for the period | 18,787 | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| (Gain) adjustments to gain on divestitures | -429,102 | 4,175 | -76,136 | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Loss on sale and write down of property and equipment, net | 3,710 | 3,178 | 6,546 | 2,314 | 217 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Deferred taxes | -142,271 | -138,616 | -26,202 | -15,132 | 12,262 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Share in net (income) loss of equity investees | 18,194 | -230 | 4,049 | -2,417 | -5,729 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Changes in derivative instruments | -3,116 | 44,286 | -27,369 | -7,843 | -7,558 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Accounts receivable | 108,562 | 80,097 | 14,449 | 93,998 | 115,800 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Contract assets | -95,403 | -135,911 | -147,700 | -30,970 | -27,819 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Prepaid expenses and other current assets | -28,395 | 42,486 | -39,979 | -2,096 | 26,893 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Income taxes | 112,097 | -246,681 | -39,427 | -33,112 | -48,435 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Accounts payable and accrued liabilities | -65,887 | -23,012 | -39,696 | -89,793 | -81,848 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Deferred revenue | -42,974 | 3,565 | -7,860 | -108,798 | -116,563 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Other assets | 24,849 | -15,264 | -56 | 7,809 | -12,288 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Operating lease assets and liabilities, net | -21,448 | -14,980 | -13,626 | -3,547 | -3,281 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Net cash provided by operating activities | 967,691 | 830,618 | 1,006,817 | 147,763 | 172,273 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Additions of property and equipment | -159,295 | -143,222 | -199,300 | -46,534 | -33,756 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Purchase of Micro Focus, net of cash acquired | -9,272 | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Proceeds (adjustments to proceeds) from divestitures | 2,229,187 | -11,686 | 311,913 | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Settlement of derivative instruments | Not supplied: the source prints no figure for the period | -10,380 | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Proceeds from interest on derivative instruments | 4,456 | 5,166 | 5 | 870 | -607 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Other investing activities | -9,759 | 6,614 | 4,559 | 632 | 1,248 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Net cash from investing activities | 2,055,317 | -153,508 | 117,177 | -45,032 | -33,115 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Proceeds from issuance of Common Shares from exercise of stock options and ESPP | 66,914 | 35,372 | 56,419 | 8,380 | 6,742 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Repayment of long-term debt and Revolver | -2,568,352 | -35,851 | -648,852 | -8,963 | -8,963 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Debt issuance costs | -3,833 | -1,066 | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Net change in transition services agreement obligation | 15,278 | -15,278 | 14,271 | Not supplied: the source prints no figure for the period | -12,840 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Repurchase of Common Shares | -150,017 | -413,256 | -416,411 | -107,629 | -30,010 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Purchase of treasury stock | -53,085 | -130,649 | -52,901 | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Payments of dividends to shareholders | -267,362 | -271,523 | -268,357 | -68,220 | -66,465 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Other financing activities | -1,447 | -2,428 | -3,309 | Not supplied: the source prints no figure for the period | Not supplied: the source prints no figure for the period | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Net cash used in financing activities | -2,961,904 | -834,679 | -1,319,140 | -176,432 | -111,536 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Foreign exchange gain (loss) on cash held in foreign currencies | -12,263 | 32,882 | -5,706 | 4,306 | -301 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Increase (decrease) in cash, cash equivalents and restricted cash during the period | 48,841 | -124,687 | -200,852 | -69,395 | 27,321 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Cash, cash equivalents and restricted cash at beginning of the period | 1,233,952 | 1,282,793 | 1,158,106 | 1,158,106 | 957,254 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Cash, cash equivalents and restricted cash at end of the period | 1,282,793 | 1,158,106 | 957,254 | 1,088,711 | 984,575 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Net Cash from Operating Activities | 967,691 | 830,618 | 1,006,817 | 147,763 | 172,273 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Net Cash from Investing Activities | 2,055,317 | -153,508 | 117,177 | -45,032 | -33,115 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Net Cash from Financing Activities | -2,961,904 | -834,679 | -1,319,140 | -176,432 | -111,536 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Net Cash Change | 48,841 | -124,687 | -200,852 | -69,395 | 27,321 | USD thousands | Reported: includes restricted cash and the foreign exchange effect | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Opening Cash | 1,233,952 | 1,282,793 | 1,158,106 | 1,158,106 | 957,254 | USD thousands | Reported: cash, cash equivalents and restricted cash | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Closing Cash | 1,282,793 | 1,158,106 | 957,254 | 1,088,711 | 984,575 | USD thousands | Reported: cash, cash equivalents and restricted cash | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| Cash Interest Paid | 533,866 | 352,383 | 321,694 | 79,500 | 57,917 | USD thousands | Reported: cash paid during the period for interest, supplemental cash flow note; cash received for interest is not netted | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 42 |
| FX Effect on Cash | -12,263 | 32,882 | -5,706 | 4,306 | -301 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2026 | Q1 2027 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 1,156,496 | 956,024 | 983,292 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Accounts receivable trade, net of allowance for credit losses | 659,675 | 751,046 | 663,434 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Contract assets | 77,920 | 77,447 | 72,647 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Income taxes recoverable | 108,792 | 97,715 | 86,965 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Prepaid expenses and other current assets | 198,575 | 235,641 | 208,931 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total current assets | 2,201,458 | 2,117,873 | 2,015,269 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Property and equipment | 375,252 | 522,197 | 524,125 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Operating lease right of use assets | 197,977 | 134,377 | 137,690 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Long-term contract assets | 49,293 | 59,872 | 62,679 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Goodwill | 7,517,463 | 7,327,376 | 7,326,605 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Acquired intangible assets | 1,976,591 | 1,475,018 | 1,376,131 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Deferred tax assets | 1,080,575 | 1,077,003 | 1,054,861 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Other assets | 307,693 | 301,328 | 317,230 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Long-term income taxes recoverable | 67,762 | 91,460 | 109,174 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total assets | 13,774,064 | 13,106,504 | 12,923,764 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Accounts payable and accrued liabilities (current) | 1,026,583 | 969,079 | 863,107 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Current portion of long-term debt | 35,850 | 35,850 | 35,850 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Operating lease liabilities (current) | 75,914 | 63,612 | 64,822 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Deferred revenues (current) | 1,515,382 | 1,483,234 | 1,378,557 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Income taxes payable (current) | 93,325 | 71,550 | 32,515 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total current liabilities | 2,747,054 | 2,623,325 | 2,374,851 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Accrued liabilities (long-term) | 42,312 | 128,915 | 127,239 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Pension liability, net | 132,215 | 100,473 | 98,914 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Long-term debt | 6,342,071 | 5,734,519 | 5,730,527 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Long-term operating lease liabilities | 189,949 | 138,425 | 137,939 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Long-term deferred revenues | 168,757 | 159,912 | 151,137 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Long-term income taxes payable | 79,604 | 65,255 | 59,905 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Deferred tax liabilities | 141,514 | 139,614 | 132,312 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total long-term liabilities | 7,096,422 | 6,467,113 | 6,437,973 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Share capital and additional paid-in capital | 2,193,985 | 2,160,481 | 2,170,790 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Accumulated other comprehensive income (loss) | -67,067 | -38,567 | -37,503 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Retained earnings | 1,940,113 | 2,016,086 | 2,089,829 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Treasury stock, at cost | -138,164 | -123,896 | -114,191 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total OpenText shareholders' equity | 3,928,867 | 4,014,104 | 4,108,925 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Non-controlling interests | 1,721 | 1,962 | 2,015 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total shareholders' equity | 3,930,588 | 4,016,066 | 4,110,940 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total liabilities and shareholders' equity | 13,774,064 | 13,106,504 | 12,923,764 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total Assets | 13,774,064 | 13,106,504 | 12,923,764 | USD thousands | Reported | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total Liabilities | 9,843,476 | 9,090,438 | 8,812,824 | USD thousands | Calculated: total current liabilities plus total long-term liabilities (calculation C2) | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total Equity | 3,930,588 | 4,016,066 | 4,110,940 | USD thousands | Reported: total shareholders' equity including non-controlling interests | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| Total Debt | 6,377,921 | 5,770,369 | 5,766,377 | USD thousands | Calculated: current portion of long-term debt plus long-term debt, carrying value net of issuance costs and discounts; leases on their own lines are not added (calculation C2) | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 16 |
| Cash & Equivalents | 1,156,496 | 956,024 | 983,292 | USD thousands | Reported: excludes restricted cash | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolver | Revolving credit facility | Not supplied: no balance outstanding to carry | 0 | 0 | 750,000 | Secured: first charge over substantially all assets, pari passu with the term loan and the Senior Secured Notes 2027 | 1 | USD | 0 | Not applicable | Term SOFR plus a margin of 1.25% to 1.75% by consolidated net leverage; facility fee 0.30% on unused commitments | Floating | Term SOFR | 125 to 175 | Not supplied: no floor stated | 2028-12-19, extended to 2031-10-01 on 2026-10-01 subject to conditions | 0: no scheduled repayment before maturity | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 16–21; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 269–272 |
| Acquisition Term Loan | Term loan, senior secured | Not supplied: carrying value by instrument is not disclosed | 1,527,563 | 1,527,563 | 3,585,000 aggregate delayed-draw commitment at the 2022-12-01 amendment, fully drawn | Secured: first charge over substantially all assets of the company and subsidiary guarantors, pari passu with the revolver and the Senior Secured Notes 2027 | 1 | USD | 1,527,563 | Not applicable | Term SOFR plus 1.75%; 5.44% at 2026-09-30 | Floating | Term SOFR | 175 | Not supplied: no floor stated | Not supplied: seven-year term from a funding date that is not stated | 35,850 | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 16–21; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 269–272 |
| Senior Secured Notes 2027 | Senior secured notes | Not supplied: carrying value by instrument is not disclosed | 1,000,000 | 1,000,000 | Not applicable | Secured: guaranteed by certain subsidiaries, same priority as the senior credit facilities | 1 | USD | 1,000,000 | Not applicable | 6.90% | Fixed | Not applicable | Not applicable | Not applicable | 2027-12-01 | 0: bullet | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 16–21; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 269–272 |
| Senior Notes 2028 | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 900,000 | 900,000 | Not applicable | Unsecured: guaranteed on a senior unsecured basis by wholly-owned subsidiaries that borrow or guarantee the credit facilities | 2 | USD | 900,000 | Not applicable | 3.875% | Fixed | Not applicable | Not applicable | Not applicable | 2028-02-15 | 0: bullet | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 16–21; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 269–272 |
| Senior Notes 2029 | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 850,000 | 850,000 | Not applicable | Unsecured: guaranteed on a senior unsecured basis by wholly-owned subsidiaries that borrow or guarantee the credit facilities | 2 | USD | 850,000 | Not applicable | 3.875% | Fixed | Not applicable | Not applicable | Not applicable | 2029-12-01 | 0: bullet | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 16–21; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 269–272 |
| Senior Notes 2030 | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 900,000 | 900,000 | Not applicable | Unsecured: issued by Open Text Inc., guaranteed by the company and wholly-owned subsidiaries that borrow or guarantee the credit facilities | 2 | USD | 900,000 | Not applicable | 4.125% | Fixed | Not applicable | Not applicable | Not applicable | 2030-02-15 | 0: bullet | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 16–21; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 269–272 |
| Senior Notes 2031 | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 650,000 | 650,000 | Not applicable | Unsecured: issued by Open Text Inc., guaranteed by the company and wholly-owned subsidiaries that borrow or guarantee the credit facilities | 2 | USD | 650,000 | Not applicable | 4.125% | Fixed | Not applicable | Not applicable | Not applicable | 2031-12-01 | 0: bullet | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 16–21; 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 269–272 |
| Financing cost adjustment | Unamortised debt discount and issuance costs | -61,186 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -61,186 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 16 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM at 2026-09-30 | USD 5,246.401m | USD 1,236.634m | USD 1,288.135m | USD 5,194.900m | Calculated | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 | Twelve months; fiscal 2026 includes divested businesses until their sale dates |
| EBITDA (Reported) | LTM at 2026-09-30 | USD 1,689.747m | USD 389.501m | USD 429.635m | USD 1,649.613m | Calculated | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 | Derived EBITDA; the quarterly comparison carries higher special charges in the latest quarter |
| EBITDA (Adjusted) | LTM at 2026-09-30 | USD 1,903.162m | USD 442.432m | USD 467.411m | USD 1,878.183m | Calculated | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 15; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 19 | Issuer-defined non-GAAP measure |
| Cash Interest Paid | LTM at 2026-09-30 | USD 321.694m | USD 57.917m | USD 79.500m | USD 300.111m | Calculated | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 42 | Semi-annual coupons make quarterly cash interest uneven; the twelve-month figure averages the timing |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 6,377.921 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268 | 1,533.933 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236 | FY2025 / 2025-06-30 | USD | US$m | 4.16 | Calculated | Tier 1 | Carrying-value debt over derived reported EBITDA; not the covenant ratio. |
| Net debt / EBITDA | (Gross debt - Cash) / EBITDA (Reported) | 5,221.425 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268 | 1,533.933 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236 | FY2025 / 2025-06-30 | USD | US$m | 3.40 | Calculated | Tier 1 | Net of unrestricted cash only. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,533.933 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236 | 352.383 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306 | FY2025 / 2025-06-30 | USD | US$m | 4.35 | Calculated | Tier 1 | Cash interest paid, not netted for interest received. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 6,377.921 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268 | 1,784.465 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305 | FY2025 / 2025-06-30 | USD | US$m | 3.57 | Calculated | Tier 1 | Issuer-adjusted EBITDA as denominator, shown beside the reported ratio. |
| Net debt / adjusted EBITDA | (Gross debt - Cash) / EBITDA (Adjusted) | 5,221.425 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268 | 1,784.465 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305 | FY2025 / 2025-06-30 | USD | US$m | 2.93 | Calculated | Tier 1 | Issuer-adjusted EBITDA as denominator. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,784.465 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305 | 352.383 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306 | FY2025 / 2025-06-30 | USD | US$m | 5.06 | Calculated | Tier 1 | Issuer-adjusted EBITDA over cash interest paid. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 5,770.369 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268 | 1,689.747 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236 | FY2026 / 2026-06-30 | USD | US$m | 3.41 | Calculated | Tier 1 | Carrying-value debt over derived reported EBITDA; not the covenant ratio. |
| Net debt / EBITDA | (Gross debt - Cash) / EBITDA (Reported) | 4,814.345 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268 | 1,689.747 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236 | FY2026 / 2026-06-30 | USD | US$m | 2.85 | Calculated | Tier 1 | Net of unrestricted cash only. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,689.747 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236 | 321.694 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306 | FY2026 / 2026-06-30 | USD | US$m | 5.25 | Calculated | Tier 1 | Cash interest paid, not netted for interest received. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 5,770.369 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268 | 1,903.162 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305 | FY2026 / 2026-06-30 | USD | US$m | 3.03 | Calculated | Tier 1 | Issuer-adjusted EBITDA as denominator, shown beside the reported ratio. |
| Net debt / adjusted EBITDA | (Gross debt - Cash) / EBITDA (Adjusted) | 4,814.345 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268 | 1,903.162 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305 | FY2026 / 2026-06-30 | USD | US$m | 2.53 | Calculated | Tier 1 | Issuer-adjusted EBITDA as denominator. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,903.162 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305 | 321.694 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306 | FY2026 / 2026-06-30 | USD | US$m | 5.92 | Calculated | Tier 1 | Issuer-adjusted EBITDA over cash interest paid. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 5,766.377 | 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 16 | 1,649.613 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 | 2026-09-30 | USD | US$m | 3.50 | Calculated | Tier 1 and 2b: audited year with unaudited stubs | Carrying-value debt over derived reported EBITDA; not the covenant ratio. Last twelve months to 2026-09-30. |
| Net debt / EBITDA | (Gross debt - Cash) / EBITDA (Reported) | 4,783.085 | 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 16 | 1,649.613 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 | 2026-09-30 | USD | US$m | 2.90 | Calculated | Tier 1 and 2b: audited year with unaudited stubs | Net of unrestricted cash only. Last twelve months to 2026-09-30. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,649.613 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 | 300.111 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 42 | 2026-09-30 | USD | US$m | 5.50 | Calculated | Tier 1 and 2b: audited year with unaudited stubs | Cash interest paid, not netted for interest received. Last twelve months to 2026-09-30. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 5,766.377 | 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 16 | 1,878.183 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 15; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 19 | 2026-09-30 | USD | US$m | 3.07 | Calculated | Tier 1 and 2b: audited year with unaudited stubs | Issuer-adjusted EBITDA as denominator, shown beside the reported ratio. Last twelve months to 2026-09-30. |
| Net debt / adjusted EBITDA | (Gross debt - Cash) / EBITDA (Adjusted) | 4,783.085 | 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 16 | 1,878.183 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 15; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 19 | 2026-09-30 | USD | US$m | 2.55 | Calculated | Tier 1 and 2b: audited year with unaudited stubs | Issuer-adjusted EBITDA as denominator. Last twelve months to 2026-09-30. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,878.183 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 15; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 19 | 300.111 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 42 | 2026-09-30 | USD | US$m | 6.26 | Calculated | Tier 1 and 2b: audited year with unaudited stubs | Issuer-adjusted EBITDA over cash interest paid. Last twelve months to 2026-09-30. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | FY2026 | Q1 2026 | Q1 2027 | FY2027 outlook | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|---|
| Revenue | Total revenues (US$m) | 5,769.577 | 5,168.405 | 5,246.401 | 1,288.135 | 1,236.634 | 5,135 to 5,185 | Mixed: fell in fiscal 2025, rose in fiscal 2026, fell in the latest quarter | Q1 2027 revenue is 4.00% below Q1 2026 and the release gives a fall of 1.7% in constant currency excluding divestitures; the outlook range sits below fiscal 2026 revenue |
| Revenue | Cloud services and subscriptions revenue (US$m) | 1,820.524 | 1,856.474 | 1,958.554 | 484.509 | 505.469 | Not supplied: the outlook states growth rates, not an amount | Rising | Cloud revenue rose in each year and in the latest quarter, while customer support revenue fell |
| Revenue | Recurring revenue, cloud plus customer support (US$m), calculated | 4,533.821 | 4,190.511 | 4,246.003 | 1,071.354 | 1,039.580 | Not supplied: not an outlook metric | Mixed: fell in fiscal 2025, rose in fiscal 2026, fell in the latest quarter | Customer support decline offset cloud growth in fiscal 2025 and in the latest quarter, not in fiscal 2026 |
| Profitability | Adjusted EBITDA margin, issuer-reported (%) | 34.1 | 34.5 | 36.3 | 36.3 | 35.8 | 32% to 33% | Rising across the fiscal years; lower in the latest quarter than a year earlier | The fiscal 2027 outlook margin range is below the fiscal 2026 and first-quarter margins |
| Profitability | Net income (US$m) | 465.284 | 436.066 | 643.263 | 146.660 | 155.300 | Not supplied: no net income outlook | Rose in fiscal 2026 | Fiscal 2026 net income includes divestiture gains in other income; the cash flow statement removes 76.136 of gain |
| Cash flow | Net cash provided by operating activities (US$m) | 967.691 | 830.618 | 1,006.817 | 147.763 | 172.273 | Not supplied: no operating cash flow outlook | Rose in fiscal 2026 | First-quarter operating cash flow is a fraction of the annual figure |
| Cash flow | Capital expenditure (US$m) | 159.295 | 143.222 | 199.300 | 46.534 | 33.756 | Not supplied: no capital expenditure outlook | Rising in fiscal 2026 | Total only; maintenance and growth capex are not split |
| Cash flow | Free cash flow, issuer-defined (US$m) | 808.396 | 687.396 | 807.517 | 101.229 | 138.517 | 625 to 725 | Rose in fiscal 2026 | Operating cash flow less capital expenditure, agreed to the issuer's reconciliation |
| Cash flow | Free cash flow conversion, free cash flow over EBITDA (Reported) (%), calculated | 47.69 | 44.81 | 47.79 | 23.56 | 35.56 | Not supplied: not an outlook metric | Rose in fiscal 2026 | Calculated; reported EBITDA is after special charges |
| Capital returns | Dividends, share repurchases and treasury stock purchases paid (US$m), calculated | 470.464 | 815.428 | 737.669 | 175.849 | 96.475 | Not supplied: no outlook | Falling from fiscal 2025 | The first-quarter statements show no treasury stock purchase line |
| Funding float | Deferred revenue, current plus long-term (US$m), calculated | Not supplied: no balance sheet | 1,684.139 | 1,643.146 | Not supplied: no balance sheet | 1,529.694 | Not supplied: no outlook | Falling | A non-debt, non-interest-bearing obligation to deliver services; the balance declines in the first quarter |
| Liquidity | Cash and cash equivalents (US$m) | Not supplied: no balance sheet | 1,156.496 | 956.024 | Not supplied: no balance sheet | 983.292 | Not supplied: no outlook | Mixed: fell in fiscal 2026, rose in the latest quarter | Excludes restricted cash |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Unadjusted: income from operations plus depreciation and amortization of intangible assets | Adjusted EBITDA: net income attributable to OpenText excluding interest, taxes, depreciation, amortization, other income (expense), share-based compensation and special charges | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 136 | FY2024 to Q1 2027 | FY2026 gap of 213.415, 12.63% of reported EBITDA, made of share-based compensation 80.636, special charges 133.020 and non-controlling interests -0.241 | Fundamental credit; Covenant capacity | Both are shown beside each other; the reported measure is the primary denominator and the adjusted one is labelled |
| Net leverage ratio tested by lenders | Net debt over reported EBITDA, 2.85x at 2026-06-30 | Consolidated net leverage, maximum 4.50x at each quarter end: total debt reduced by unrestricted cash, including guarantees and letters of credit, over twelve-month net income before interest, taxes, depreciation, amortization, restructuring, share-based compensation and other miscellaneous charges; printed 3.35x at 2025-12-31, 3.02x at 2026-03-31 and 2.75x at 2026-06-30 | 10-Q_2025-12-31_otex-20251231.htm.jsonl, page 22; 10-Q_2026-03-31_otex-20260331.htm.jsonl, page 23; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 124; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 126 | 2025-12-31, 2026-03-31, 2026-06-30 | At 2026-06-30 the printed 2.75x lies between 2.85x (reported EBITDA) and 2.53x (adjusted EBITDA); difference 0.10x and 0.22x | Covenant capacity; Legal & covenants | Not reconciled: the agreement definitions are not supplied, and capacity is never inferred |
| Net leverage ratio in the release | Net debt over adjusted EBITDA, last twelve months, 2.55x at 2026-09-30 | Net leverage ratio 2.55x as of 2026-09-30, no definition given | EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 3 | 2026-09-30 | None: the release figure equals net debt over last-twelve-months adjusted EBITDA computed here | Fundamental credit | The agreement is stated as consistent with the computed ratio, not as its definition |
| Total debt | Balance-sheet carrying value, net of issuance costs and discounts | Principal payments due in the debt note | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 16 | 2025-06-30, 2026-06-30, 2026-09-30 | 66.156 at 2026-06-30 and 61.186 at 2026-09-30, about 1.13% and 1.05% of principal | Fundamental credit | Carrying value is used in every ratio; principal is shown beside it |
| October 2026 refinancing (one event, several figures) | All figures with roles: issue 1,000.000 principal (cash in), redemption 1,000.000 principal (cash out, premium not stated), tender 300.000 principal (cash out, price not stated) | Release: a 1.0 billion refinancing and a 300 million paydown, debt reduced by approximately 949 million over twelve months including October 2026 | 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 43–44; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 3 | After 2026-09-30 | The release's 949 equals fiscal 2026 debt repayments of 648.852 plus 300.000; premium, accrued interest and costs are in no document | Refinancing & LME; Fundamental credit | Principal figures are shown in the post-balance-sheet table; net debt after the event is not established |
| Interest | Cash interest paid, supplemental cash flow note | Interest and other related expense, net, in the income statement | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306 | FY2026 | 321.694 paid against 309.595 expensed, a difference of 12.099 | Fundamental credit | Cover uses cash paid; the expense line is kept apart |
| Product categories | Seven categories to 2026-06-30 | Eight categories from 2026-09-30 with only the quarter ended 2025-09-30 recast | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 11; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 9–10 | Q1 2026, Q1 2027 | Totals unchanged; category revenue breaks | Business & governance | Category series is not joined across the change |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Credit snapshot financial foundation: leverage, cover, liquidity and maturities to 2026-09-30 | Ready with Limitations | Reported EBITDA is derived; letters of credit are not quantified; the term loan maturity date is not printed; the covenant ratio at 2026-09-30 is not printed | Use the ratios as computed here; read the covenant ratio only where the issuer prints it |
| Pro forma net debt and leverage after the October 2026 transactions | Not Ready | Premium, accrued interest, tender price, costs and the cash held after 2026-10-02 are not stated | Obtain the company's pro forma capitalisation or the closing statements |
| Covenant headroom at 2026-09-30 | Not Ready | Ratio not printed for 2026-09-30; definitions sit in agreements not supplied | Obtain the compliance certificate and the credit agreement definitions |
| Liquidity net of letters of credit | Not Ready | No amount of letters of credit issued under the revolver | Obtain the facility utilisation |
| Maturity wall by fiscal year | Ready with Limitations | Term loan balloon of 1,500.675 sits outside the dated ladder | Obtain the term loan funding date or the credit agreement |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 9 |
| Calculated | 9 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 5 |
| Fields present | 26 |
| Fields total | 26 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 8 |

## Calculations

Each calculation below uses figures from the tables above, in US$m unless stated, and the second table lists every rounded figure written in the text.

| Calculation ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | EBITDA (Reported) = income from operations + depreciation + amortization of acquired technology-based and customer-based intangible assets (US$m) | FY2024: 887.085 + (131.599 + 243.922 + 432.404) = 1,695.010; FY2025: 892.689 + (130.573 + 188.780 + 321.891) = 1,533.933; FY2026: 1,082.597 + (143.938 + 174.609 + 288.603) = 1,689.747; Q1 2026: 269.949 + (35.921 + 44.204 + 79.561) = 429.635; Q1 2027: 250.811 + (39.802 + 42.810 + 56.078) = 389.501 | FY2024 1,695.010; FY2025 1,533.933; FY2026 1,689.747; Q1 2026 429.635; Q1 2027 389.501; each depreciation and amortization total equals the cash flow statement line | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 5 |
| C2 | Total Liabilities and Total Debt (US$m) | FY2025: liabilities 2,747.054 + 7,096.422 = 9,843.476; debt 35.850 + 6,342.071 = 6,377.921; FY2026: liabilities 2,623.325 + 6,467.113 = 9,090.438; debt 35.850 + 5,734.519 = 5,770.369; Q1 2027: liabilities 2,374.851 + 6,437.973 = 8,812.824; debt 35.850 + 5,730.527 = 5,766.377 | Assets equal liabilities plus equity at all three dates; Total Debt equals the debt note's total amount outstanding at 30 June 2025, 30 June 2026 and 30 September 2026 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 16 |
| C3 | Net debt = gross debt - cash (US$m) | FY2025 / 2025-06-30: 6,377.921 - 1,156.496 = 5,221.425; FY2026 / 2026-06-30: 5,770.369 - 956.024 = 4,814.345; 2026-09-30: 5,766.377 - 983.292 = 4,783.085 | FY2025 5,221.425; FY2026 4,814.345; 2026-09-30 4,783.085 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 2 |
| C4 | Leverage and cover ratios, each numerator over its denominator to two decimals (US$m) | FY2025 / 2025-06-30: debt/EBITDA 6,377.921/1,533.933, net 5,221.425/1,533.933, cover 1,533.933/352.383, net/adjusted 5,221.425/1,784.465; FY2026 / 2026-06-30: debt/EBITDA 5,770.369/1,689.747, net 4,814.345/1,689.747, cover 1,689.747/321.694, net/adjusted 4,814.345/1,903.162; 2026-09-30: debt/EBITDA 5,766.377/1,649.613, net 4,783.085/1,649.613, cover 1,649.613/300.111, net/adjusted 4,783.085/1,878.183 | FY2025: 4.16, 3.40, 4.35, 2.93; FY2026: 3.41, 2.85, 5.25, 2.53; 2026-09-30: 3.50, 2.90, 5.50, 2.55; the full set of six ratios per date is in the audit register | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 42 |
| C5 | Debt ladder and reconciliation at 2026-06-30 (US$m) | Ladder 35.850 + 1,900.000 + 1,750.000 + 650.000 = 4,335.850; term loan beyond current portion 1,536.525 - 35.850 = 1,500.675; reconciling items 1,500.675 - 66.156 = 1,434.519; total principal 650.000 + 900.000 + 850.000 + 900.000 + 1,000.000 + 1,536.525 = 5,836.525 | 4,335.850 + 1,434.519 = 5,770.369, the carrying value | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 268 |
| C6 | Last twelve months to 2026-09-30 = fiscal 2026 + first quarter of fiscal 2027 - first quarter of fiscal 2026 (US$m) | Revenue 5,246.401 + 1,236.634 - 1,288.135; EBITDA (Reported) 1,689.747 + 389.501 - 429.635; EBITDA (Adjusted) 1,903.162 + 442.432 - 467.411; cash interest 321.694 + 57.917 - 79.500 | Revenue 5,194.900; EBITDA (Reported) 1,649.613; EBITDA (Adjusted) 1,878.183; cash interest 300.111 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 15; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 19; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 306; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 42 |
| C7 | Debt stack cumulative leverage = cumulative principal / last-twelve-months EBITDA (Reported) 1,649.613 (US$m) | Revolver: 0.000/1,649.613 = 0.00; Acquisition Term Loan: 1,527.563/1,649.613 = 0.93; Senior Secured Notes 2027: 2,527.563/1,649.613 = 1.53; Senior Notes 2028: 3,427.563/1,649.613 = 2.08; Senior Notes 2029: 4,277.563/1,649.613 = 2.59; Senior Notes 2030: 5,177.563/1,649.613 = 3.14; Senior Notes 2031: 5,827.563/1,649.613 = 3.53 | 0.00, 0.93, 1.53, 2.08, 2.59, 3.14, 3.53 | 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 19–21 |
| C8 | EBITDA bridge, fiscal 2026 (US$m) | 1,689.747 - 0.241 + 80.636 + 133.020 = 1,903.162 | 1,903.162, equal to the issuer's Adjusted EBITDA; no balancing line | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 234; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 305 |
| C9 | Changes used in the text (US$m) | Debt 6,377.921 - 5,770.369 = 607.552; EBITDA (Reported) 1,689.747 / 1,533.933 - 1; LTM EBITDA shortfall 1,689.747 - 1,649.613 = 40.134; revenue 1,236.634 / 1,288.135 - 1; special charges 33.290 and 20.139 | 607.552; 10.16%; 40.134; -4.00% | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 3 |
| C10 | Free cash flow, conversion and returns, fiscal 2026 (US$m) | FCF 1,006.817 - 199.300 = 807.517 (fiscal 2025 830.618 - 143.222 = 687.396); conversion 807.517 / 1,689.747; returns 268.357 + 416.411 + 52.901 = 737.669; share 737.669 / 807.517 | 807.517; 687.396; 47.79%; 737.669; 91.35%; the issuer's own free cash flow figures agree | 10-K_2026-06-30_otex-20260630.htm.jsonl, pages 236–237; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 136; 10-K_2026-06-30_otex-20260630.htm.jsonl, page 139 |
| C11 | Deferred revenue, current plus long-term (US$m) | 2025-06-30: 1,515.382 + 168.757 = 1,684.139; 2026-06-30: 1,483.234 + 159.912 = 1,643.146; 2026-09-30: 1,378.557 + 151.137 = 1,529.694 | 1,684.139; 1,643.146; 1,529.694 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 233; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 2–3 |
| C12 | Covenant comparison, US$m not applicable (times) | Printed 2.75 at 2026-06-30; computed net debt / EBITDA (Reported) 2.85 and net debt / EBITDA (Adjusted) 2.53; 2.85 - 2.75 = 0.10; 2.75 - 2.53 = 0.22 | 0.10 and 0.22; the release's 2.55 equals computed net debt 4,783.085 / 1,878.183 = 2.55 | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 124; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 3 |
| C13 | Principal after the three debt events of October 2026 (US$m) | 5,827.563 + 1,000.000 - 1,000.000 - 300.000 = 5,527.563; Senior Notes 2028 900.000 - 300.000 = 600.000 | 5,527.563; 600.000; net principal change -300.000 | 10-Q_2026-09-30_otex-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_otex-20260930.htm.jsonl, pages 43–44 |
| C14 | Cross-check of the release's debt reduction (US$m) | Fiscal 2026 repayments 648.852 + tender 300.000 = 948.852 | 948.852, which rounds to the release's approximately 949 million | 10-K_2026-06-30_otex-20260630.htm.jsonl, page 236; EX-99.1_2026-11-05_q1-27pressreleaseexhibit991.htm.jsonl, page 3 |

| Figure ID | Figure as written in the text | Derivation |
|---|---|---|
| F1 | USD 607.55 million | 6,377.921 less 5,770.369 (calculation C9) |
| F2 | 10.16% | 1,689.747 over 1,533.933 less 1 (calculation C9) |
| F3 | USD 40.13 million | 1,689.747 less 1,649.613 (calculation C9) |
| F4 | 4.00% | 1 less 1,236.634 over 1,288.135 (calculation C9) |
| F5 | USD 33.29 million | income statement, three months to 2026-09-30 |
| F6 | USD 20.14 million | income statement, three months to 2025-09-30 |
| F7 | USD 352.38 million | cash paid for interest, fiscal 2025 |
| F8 | USD 321.69 million | cash paid for interest, fiscal 2026 |
| F9 | USD 300.11 million | 321.694 plus 57.917 less 79.500 (calculation C6) |
| F10 | USD 807.52 million | 1,006.817 less 199.300 (calculation C10) |
| F11 | USD 687.40 million | 830.618 less 143.222 (calculation C10) |
| F12 | 47.79% | 807.517 over 1,689.747 (calculation C10) |
| F13 | USD 737.67 million | 268.357 plus 416.411 plus 52.901 (calculation C10) |
| F14 | 91.35% | 737.669 over 807.517 (calculation C10) |
| F15 | USD 648.85 million | cash flow statement, repayment of long-term debt and revolver |
| F16 | USD 311.91 million | cash flow statement, proceeds from divestitures |
| F17 | USD 200.85 million | cash flow statement, decrease in cash, cash equivalents and restricted cash |
| F18 | USD 983.29 million | 983.292 balance sheet cash |
| F19 | USD 35.85 million | current portion of long-term debt |
| F20 | USD 1,643.15 million | current 1,483.234 plus long-term 159.912 (calculation C11) |
| F21 | USD 1,684.14 million | current 1,515.382 plus long-term 168.757 (calculation C11) |
| F22 | USD 1,529.69 million | current 1,378.557 plus long-term 151.137 (calculation C11) |
| F23 | USD 116.56 million | cash flow statement, deferred revenues, three months to 2026-09-30 |
| F24 | USD 108.80 million | cash flow statement, deferred revenue, three months to 2025-09-30 |
| F25 | USD 115.80 million | cash flow statement, accounts receivable, three months to 2026-09-30 |

## Gaps

No debt, cash or leverage figure below is worked out where its input is missing; each gap says what it restricts.

| Gap | Line item or metric and period | What it restricts | Severity | Action that would close it |
|---|---|---|---|---|
| Pro forma net debt, cash and leverage after the October 2026 transactions are not established: the premium, accrued interest, tender price and costs, and the cash held after 2 October 2026, are in no document | Net debt and leverage after 2026-10-02 | The as-of-date capital structure, interest burden and net leverage | Medium | Obtain the company's pro forma capitalisation or the closing statements |
| The lenders' covenant ratio at 2026-09-30 is not printed, the release's 2.55x is undefined, and the printed 2.75x at 2026-06-30 does not reconcile to the ratios computed here | Consolidated net leverage ratio, 2026-09-30 | Any statement of covenant headroom | Medium | Obtain the compliance certificate and the agreement definitions |
| Letters of credit issued under the revolver are not quantified | Undrawn committed facilities, all periods | Liquidity net of letters of credit | Low | Obtain the facility utilisation |
| The Acquisition Term Loan maturity date is not printed, so 1,500.675 of its principal sits outside the dated ladder | Debt maturing, fiscal years 2029 to 2031 | The fiscal year of the term loan balloon | Low | Obtain the funding date or the credit agreement |
| Reported EBITDA is derived because the issuer states no unadjusted EBITDA | EBITDA (Reported), all periods | Comparison with any issuer-defined measure | Low | Confirm the treatment of other income and special charges |
| Source dashes are carried as not supplied, not zero: in the cash flow statement the loss on extinguishment of debt, purchase of Micro Focus, settlement of derivative instruments and debt issuance costs in some years, and lines present only in the annual report for the first quarters | Cash flow lines, FY2024 to Q1 2027 | Totals still tie; only the line-level detail is blank | Low | None needed for the totals |
| Earnings per share and share counts are not carried in the income statement table, which holds monetary lines | Per-share lines, all periods | Per-share analysis | Low | Read them in the statements if needed |
| No balance sheet is in the documents for 2024-06-30 or 2025-09-30, and leverage is not built for 2025-12-31 or 2026-03-31 | Balance sheet lines and ratios at those dates | Trend between the three dates shown | Low | Add the quarterly reports and releases for those dates |
| No segment schedule: the issuer reports one operating segment, and product-category revenue changed basis in the quarter ended 2026-09-30 | Segment revenue, all periods | Revenue by business unit | Low | Use the recast comparative for the quarter ended 2025-09-30 |
| Maintenance and growth capital expenditure are not split | Capital expenditure, all periods | Maintenance capex analysis | Low | Not disclosed |

## Next module

The orchestrator selects the next module.
