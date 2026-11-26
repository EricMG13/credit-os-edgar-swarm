# CP-1 Financial foundation for DIEBOLD NIXDORF, Inc (dbd-28823), as of 2026-11-18

## Request

Financial foundation for DIEBOLD NIXDORF, Inc (issuer id dbd-28823), as of 2026-11-18, on the credit snapshot pathway. Scope: statements, debt, liquidity, leverage and coverage for FY2024, FY2025 and the first nine months of 2026, built from the supplied filings and release.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| Source readiness (CP-0) | Source readiness handoff for this run | 2026-11-18 | a3e994a512009dfbb90af829898f7dcd7fa54fc974d2cc6e787d87f233be04c5 | Source dates, gaps and the finding that the FY2025 adjusted EBITDA is not in the sources; no figure is taken from it. |
| 10-K_2025-12-31_dbd.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-12 | 7641f45f66e6bb590327958da55ee836901e6672d3c467b402d1e057797f6161 | FY2025 and FY2024 statements, debt note, obligations table, lease note, interest coverage inputs, ratings and risk disclosures. |
| 10-K_2024-12-31_dbd.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-25 | 82b5edab10f4f813e3b4d95a80c3c0627242d316b939ab218b16f3c218f9ccb2 | Cross-check of the FY2024 balance sheet lines against the 2025 report's comparatives. |
| 10-Q_2026-09-30_dbd.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-28 | ab5fbb8597a516f00d41b9a42678d2893cbfb39f1cbb48bc07cfe58441998f87 | Nine-month and third-quarter statements, 2026-09-30 balance sheet, debt note, liquidity, share repurchases, segments. |
| EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl | Earnings release (press release) for the third quarter of 2026 | 2026-10-28 | 643961e5258f40afd65d75fdd4e39253686cdc5da0f39ecaf18145b33422072f | Issuer EBITDA and adjusted EBITDA reconciliation, net debt definition, discrete tax payments. |

## Findings

### Bottom line

Reported leverage is moderate at 2.90x total debt and 2.33x net debt to last-twelve-month EBITDA, but net leverage rose from 1.69x at year-end 2025 because buybacks and negative operating cash flow cut cash by USD 202.4 million in nine months.
Basis: calculation C3; calculation C7; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–13; 10-K_2025-12-31_dbd.htm.jsonl, pages 54–56

Liquidity fell to USD 470.7 million from USD 673.0 million, and cash interest cover eased to 4.27x from 5.51x, although the earlier figure is flattered by a short first coupon on the 2030 secured notes. The only drawn borrowing of size, those notes, matures in March 2030, so the exposure is cash discipline rather than refinancing. Adjusted EBITDA of USD 347.5 million for nine months rests on USD 127.5 million of add-backs against USD 220.0 million reported.
Basis: calculation C10; calculation C14; 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–10; 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 13–15

### Key findings

- Leverage is stable on year-end figures and rising on net debt. Total debt to reported EBITDA was 2.85x for FY2024, 2.88x for FY2025 and 2.90x on the last twelve months to 2026-09-30, while net debt rose by USD 213.2 million in nine months to USD 764.4 million as cash fell from USD 387.3 million to USD 184.9 million. The largest use of cash was treasury share purchases of USD 154.9 million, followed by free cash outflow of USD 68.5 million (an operating cash outflow of USD 29.3 million plus capital spending and capitalised software of USD 39.2 million). Last-twelve-month EBITDA did not fall, so the rise in net leverage comes mainly from the discretionary buyback. A further USD 19.3 million of shares was bought after quarter-end and the board approved a new USD 250.0 million programme on 2026-10-28, which points to a further rise. Pro forma for those purchases net debt is USD 783.7 million and net leverage 2.39x.
Basis: calculation C4; calculation C16; 10-Q_2026-09-30_dbd.htm.jsonl, page 10; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13

- Interest cover of 4.27x on the last twelve months is the level to use, not the 5.51x of FY2025. Cash interest paid was USD 59.1 million in FY2025 because the first coupon on the 2030 secured notes, accruing from 2024-12-18, fell due on 2025-03-31, while the annual report shows USD 73.6 million of contractual interest due within one year; on that figure FY2025 cover would be 4.43x. FY2024 cover of 2.18x reflects the larger term loan repaid in December 2024.
Basis: calculation C8; calculation C20; 10-K_2025-12-31_dbd.htm.jsonl, page 16; 10-K_2025-12-31_dbd.htm.jsonl, page 19; 10-K_2025-12-31_dbd.htm.jsonl, pages 77–78

- Cash generation turned negative in 2026 and the customer-prepayment float is shrinking. Operating cash flow was an outflow of USD 29.3 million for nine months against an inflow of USD 83.2 million a year earlier, with inventories absorbing USD 51.1 million, income taxes USD 68.0 million, sales tax and value added tax USD 34.8 million and deferred revenue USD 50.1 million, partly offset by USD 73.2 million from payables. Deferred revenue, a non-interest-bearing funding source, fell by USD 71.7 million to USD 254.1 million, so customers are funding less of the business. Free cash flow was an outflow of USD 68.5 million for nine months against USD 43.3 million of inflow, and last-twelve-month free cash flow converts only 38.84% of EBITDA against 73.34% in FY2025.
Basis: calculation C13; calculation C17; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–13; 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56

- Liquidity is adequate but shrinking. Cash plus undrawn revolver, stated net of letters of credit, was USD 470.7 million at 2026-09-30 against USD 673.0 million at 2025-12-31; of the cash, USD 15.9 million is restricted, which leaves USD 454.8 million on an unrestricted basis. The USD 310.0 million revolver matures on 2029-12-18, carries USD 24.2 million of letters of credit and is undrawn, although USD 37.0 million was borrowed and repaid within the nine months, and no facility matures within twelve months other than uncommitted short-term lines of USD 10.2 million.
Basis: calculation C10; calculation C18; 10-Q_2026-09-30_dbd.htm.jsonl, page 9; 10-Q_2026-09-30_dbd.htm.jsonl, page 12; 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18; 10-Q_2026-09-30_dbd.htm.jsonl, page 23

- Adjusted EBITDA flatters earnings more than a year ago. Add-backs were USD 127.5 million or 36.69% of adjusted EBITDA for nine months of 2026 against USD 102.0 million or 31.84% for nine months of 2025, driven by restructuring of USD 78.2 million, the Turkey wind-down of USD 10.8 million and an impairment of USD 16.9 million, partly offset by a foreign exchange add-back that fell from USD 41.5 million to USD 4.2 million, while reported EBITDA grew only USD 1.6 million to USD 220.0 million. Reported EBITDA is therefore the denominator here, and leverage on adjusted EBITDA is not calculable because the issuer does not state FY2025 or fourth-quarter 2025 adjusted EBITDA.
Basis: calculation C14; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 13–15

- Net debt is stated here on carrying value and differs from the issuer's own figure. The release shows net debt of USD 791.5 million on debt principal of USD 976.4 million, while this module uses debt of USD 949.3 million net of USD 27.1 million of deferred financing fees; the direction and the increase since year-end are the same on either basis.
Basis: calculation C5; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 15; 10-Q_2026-09-30_dbd.htm.jsonl, page 17

### Contrary evidence and what would change the view

The strongest case against concern is that the weakness is seasonal and discretionary. Fourth-quarter 2025 operating cash flow, found as the year less nine months, was USD 217.5 million, 72.33% of the year's inflow, and the nine-month 2026 outflow includes USD 32.3 million of discrete German tax payments for earlier years and an inventory build that the quarterly report attributes to higher memory costs, finished goods and seasonality; the buyback is the largest use of cash and the board may suspend it at any time. The view would soften if fourth-quarter 2026 operating cash flow approaches the fourth-quarter 2025 level and buybacks stay within the authorisation already in use, and it would harden if cash falls further while repurchases continue under the new USD 250.0 million programme.
Basis: calculation C19; 10-Q_2026-09-30_dbd.htm.jsonl, page 10; 10-Q_2026-09-30_dbd.htm.jsonl, page 12; 10-Q_2026-09-30_dbd.htm.jsonl, page 14; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 7; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 2–3

### Limitations

- Adjusted EBITDA is not stated for FY2024, FY2025 or the fourth quarter of 2025, so leverage and cover on the issuer's own adjusted measure cannot be stated and the figures above rest on reported EBITDA.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, page 6; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 14
- Statements before 2024 are not carried because the August 2023 emergence splits 2023 into predecessor and successor periods that no single period column can hold, so no trend longer than two fiscal years is stated.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, page 55
- Cash includes restricted cash and excludes short-term investments, which were USD 29.1 million at 2025-12-31 and are not shown at 2026-09-30, so year-end cash and net debt are on a narrower base than the issuer's own net debt.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 15

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Net sales - Services | 2,150.4 | 2,168.9 | 1,595.3 | 1,654.2 | 544.2 | 565.0 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Net sales - Products | 1,600.7 | 1,636.8 | 1,106.2 | 1,162.6 | 401.0 | 429.3 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Total revenues | 3,751.1 | 3,805.7 | 2,701.5 | 2,816.8 | 945.2 | 994.3 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Cost of sales - Services | 1,616.9 | 1,648.5 | 1,211.8 | 1,251.3 | 408.4 | 413.1 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Cost of sales - Products | 1,214.2 | 1,196.0 | 808.3 | 865.7 | 291.7 | 334.0 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Total cost of sales | 2,831.1 | 2,844.5 | 2,020.1 | 2,117.0 | 700.1 | 747.1 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Gross profit | 920.0 | 961.2 | 681.4 | 699.8 | 245.1 | 247.2 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Selling and administrative expense | 643.6 | 632.5 | 456.9 | 491.7 | 150.9 | 172.2 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Research, development and engineering expense | 93.6 | 86.7 | 65.3 | 62.4 | 20.3 | 19.8 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Impairment of assets and other (annual report) / Other operating expense (income) (quarterly report) | 0.7 | Not supplied: the statement prints a dash for this period | -0.4 | 16.9 | 0.1 | 16.4 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Total costs and expenses | 737.9 | 719.2 | 521.8 | 571.0 | 171.3 | 208.4 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Operating profit | 182.1 | 242.0 | 159.6 | 128.8 | 73.8 | 38.8 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Interest income | 12.3 | 8.9 | 6.1 | 10.6 | 2.1 | 5.6 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Interest expense | -155.3 | -85.7 | -65.1 | -74.1 | -21.8 | -26.7 | USD millions | Reported; expense shown negative as printed | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Foreign exchange gain (loss), net | 13.8 | -44.1 | -41.5 | -4.2 | -0.8 | 0.5 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Miscellaneous, net | 1.5 | 4.0 | 3.2 | 3.0 | -0.9 | -2.9 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Loss on extinguishment of debt | -7.1 | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Income before taxes | 47.3 | 125.1 | 62.3 | 64.1 | 52.4 | 15.3 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Income tax expense | 64.3 | 24.1 | 12.2 | 30.5 | 9.6 | 5.6 | USD millions | Reported; expense shown positive as printed | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Equity in earnings (loss) of unconsolidated subsidiaries, net | 2.5 | -3.5 | -3.1 | -4.7 | -1.1 | -2.6 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Net income (loss) | -14.5 | 97.5 | 47.0 | 28.9 | 41.7 | 7.1 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Net income attributable to noncontrolling interests | 2.0 | 2.9 | 2.0 | 1.8 | 0.6 | 0.5 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Net income (loss) attributable to Diebold Nixdorf | -16.5 | 94.6 | 45.0 | 27.1 | 41.1 | 6.6 | USD millions | Reported; audited for FY columns, unaudited for 9M and Q3 columns | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 |
| Depreciation and amortization (cash flow statement, memo) | 132.3 | 127.5 | 96.8 | 93.7 | Not supplied: not presented for a quarter in the cash flow statement | Not supplied: not presented for a quarter in the cash flow statement | USD millions | Reported; used to build EBITDA for FY2024 and FY2025 | 10-K_2025-12-31_dbd.htm.jsonl, page 55; 10-Q_2026-09-30_dbd.htm.jsonl, page 12 |
| EBITDA (Reported) | 325.1 | 325.9 | 218.4 | 220.0 | 104.1 | 66.5 | USD millions | FY2024 and FY2025 calculated as net income plus income tax plus interest expense less interest income plus depreciation and amortization from the cash flow statement; 9M and Q3 columns are the issuer's own EBITDA, which uses a depreciation and amortization figure that includes cloud-software amortization | Calculated: 10-K_2025-12-31_dbd.htm.jsonl, page 55; issuer-stated: EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 13 |
| EBITDA (Adjusted) | Not supplied: the issuer states no adjusted EBITDA for the year | Not supplied: the issuer states no adjusted EBITDA for the year | 320.4 | 347.5 | 121.9 | 127.8 | USD millions | Issuer-adjusted EBITDA as defined in the release: EBITDA before share-based compensation, restructuring, Turkey wind-down, impairment of an unconsolidated subsidiary, foreign exchange, equity in loss of unconsolidated subsidiaries and non-routine items | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 13–14 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income (loss) | -14.5 | 97.5 | 47.0 | 28.9 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Depreciation and amortization | 132.3 | 127.5 | 96.8 | 93.7 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Amortization of deferred financing costs into interest expense | 1.9 | 6.4 | 4.7 | 5.1 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Share-based compensation | 9.7 | 12.1 | 9.3 | 11.7 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Loss (gain) on foreign currency (transactions in the annual report, translation in the quarterly report) | -23.5 | 38.8 | 42.3 | -1.8 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Impairment | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | 1.5 | 21.7 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Other (operating) | 15.3 | 0.7 | -1.1 | -3.9 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Deferred income taxes | -34.1 | -48.1 | -31.5 | -10.1 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Trade receivables | 99.6 | 25.9 | 54.0 | 20.4 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Inventories | 20.9 | 65.1 | -13.2 | -51.1 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Sales tax and net value added tax | -19.1 | 17.8 | -11.6 | -34.8 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Accounts payable | -42.2 | -68.3 | -37.0 | 73.2 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Deferred revenue | -34.6 | -21.4 | -45.7 | -50.1 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Accrued salaries, wages and commissions | 29.0 | 9.4 | -17.3 | -33.2 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Restructuring accrual | 5.8 | 24.7 | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Income taxes (working capital) | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | 3.3 | -68.0 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Certain other assets and liabilities | 2.7 | 12.6 | -18.3 | -31.0 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Net Cash from Operating Activities | 149.2 | 300.7 | 83.2 | -29.3 | USD millions | Reported total | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Proceeds from maturities of investments | 288.8 | 306.0 | 223.1 | 29.7 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Payments for purchases of investments | -295.2 | -318.4 | -223.1 | -1.3 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Payments for acquisitions, net of cash acquired | Not supplied: the statement prints a dash for this period | -24.5 | -18.4 | Not supplied: the statement prints a dash for this period | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Capital expenditures | -17.4 | -37.4 | -22.6 | -19.0 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Capitalized software development | -23.0 | -24.3 | -17.3 | -20.2 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Other (investing) | 1.3 | 1.0 | -0.7 | 2.3 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Net Cash from Investing Activities | -45.5 | -97.6 | -59.0 | -8.5 | USD millions | Reported total | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Borrowings - prior Revolving Credit Facility | 200.0 | Not supplied: the statement prints a dash for this period | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Repayments - prior Revolving Credit Facility | -200.0 | Not supplied: the statement prints a dash for this period | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Borrowings - new Revolving Credit Facility (2024) | 70.0 | Not supplied: the statement prints a dash for this period | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Repayments - new Revolving Credit Facility (2024) | -70.0 | Not supplied: the statement prints a dash for this period | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Borrowings and repayments of Exit Facility | -1,250.0 | Not supplied: the statement prints a dash for this period | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Proceeds from the issuance of 2030 Senior Secured Notes | 950.0 | Not supplied: the statement prints a dash for this period | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Debt issuance costs | -26.8 | Not supplied: the statement prints a dash for this period | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Payment of Exit Facility call premium | -21.0 | Not supplied: the statement prints a dash for this period | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Borrowings on international short-term uncommitted lines of credit | 0.4 | Not supplied: the statement prints a dash for this period | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| International short-term uncommitted lines of credit and other repayments | -0.5 | Not supplied: the statement prints a dash for this period | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Borrowings - Revolving Credit Facility (2026) | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | 37.0 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Repayments - Revolving Credit Facility (2026) | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | -37.0 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Distributions to noncontrolling interest holders | -10.4 | -7.3 | -4.9 | Not supplied: the statement prints a dash for this period | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Treasury share activity | Not supplied: the statement prints a dash for this period | -130.7 | -79.6 | -154.9 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Other (financing) | -8.2 | -5.9 | -3.7 | -5.8 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Net Cash from Financing Activities | -366.5 | -143.9 | -88.2 | -160.7 | USD millions | Reported total | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| FX Effect on Cash | -18.2 | 16.8 | 15.3 | -3.9 | USD millions | Reported effect of exchange rate changes on cash, cash equivalents and restricted cash | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Net Cash Change | -281.0 | 76.0 | -48.7 | -202.4 | USD millions | Reported change in cash, cash equivalents and restricted cash; operating plus investing plus financing plus FX effect | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Opening Cash | 592.3 | 311.3 | 311.3 | 387.3 | USD millions | Reported; includes restricted cash | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Closing Cash | 311.3 | 387.3 | 262.6 | 184.9 | USD millions | Reported; includes restricted cash | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Cash Interest Paid | 149.4 | 59.1 | 58.8 | 76.4 | USD millions | Reported cash paid for interest; positive amount paid | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |
| Cash paid for income taxes (memo) | 56.1 | 57.2 | 35.9 | 75.1 | USD millions | Reported cash paid for income taxes | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12–13 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash, cash equivalents and restricted cash | 311.3 | 387.3 | 184.9 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Short-term investments | 16.9 | 29.1 | Not supplied: the statement prints a dash for this period | USD millions | Reported; nil at 2026-09-30 as printed by a dash | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Trade receivables, net | 588.5 | 609.4 | 577.4 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Inventories | 528.1 | 521.0 | 561.7 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Prepaid expenses | 45.8 | 50.9 | 32.1 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Income tax receivables | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | 102.7 | USD millions | Presented separately only in the 2026 quarterly report; in the annual report it sits within other current assets | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Other current assets | 177.3 | 189.1 | 196.4 | USD millions | Annual report line; the 2026 quarterly report splits income tax receivables out of it | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Total current assets | 1,667.9 | 1,786.8 | 1,655.2 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Property, plant and equipment, net | 246.2 | 286.0 | 314.0 | USD millions | The annual report includes operating lease right-of-use assets in this line for FY2024 and FY2025; the quarterly report shows right-of-use assets within it as well | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Deferred income taxes (asset) | 69.5 | 105.0 | 114.5 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Goodwill | 586.4 | 642.4 | 626.2 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Customer relationships and other intangible assets, net | 778.6 | 792.4 | 725.8 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Other assets | 194.9 | 241.8 | 227.7 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Total Assets | 3,543.5 | 3,854.4 | 3,663.4 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Accounts payable | 460.2 | 431.1 | 493.0 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Deferred revenue | 320.7 | 325.8 | 254.1 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Payroll and other benefits liabilities | 173.2 | 201.6 | 159.2 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Accrued taxes | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | 111.1 | USD millions | Presented separately only in the 2026 quarterly report; in the annual report it sits within other current liabilities | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Other current liabilities | 312.2 | 413.0 | 285.8 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Total current liabilities | 1,266.3 | 1,371.5 | 1,303.2 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Long-term debt | 927.3 | 938.5 | 949.3 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Pensions, post-retirement and other benefits | 124.4 | 120.4 | 111.8 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Deferred income taxes (liability) | 176.8 | 200.7 | 195.5 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Other liabilities | 110.5 | 118.5 | 159.5 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Total Liabilities | 2,605.3 | 2,749.6 | 2,719.3 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Common stock | 0.4 | 0.4 | 0.4 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Paid-in-capital | 1,048.4 | 1,060.5 | 1,072.6 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Retained earnings (deficit) | -1.1 | 91.9 | 119.0 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Treasury shares, at cost | Not supplied: the statement prints a dash for this period | -130.7 | -285.6 | USD millions | Reported; none at 2024-12-31 as printed by a dash | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Accumulated other comprehensive income (loss) | -117.9 | 77.8 | 29.8 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Total Diebold Nixdorf shareholders' equity | 929.8 | 1,099.9 | 936.2 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Noncontrolling interests | 8.4 | 4.9 | 7.9 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Total Equity | 938.2 | 1,104.8 | 944.1 | USD millions | Reported | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |
| Total Debt | 927.3 | 938.5 | 949.3 | USD millions | Carrying value of long-term debt, net of deferred financing fees; includes non-current finance lease liabilities at 2024-12-31 and 2025-12-31 (composition at 2026-09-30 not stated); principal is USD 976.4 million at 2026-09-30 and USD 970.7 million at 2025-12-31 | 10-K_2025-12-31_dbd.htm.jsonl, pages 54–78; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–17 |
| Cash & Equivalents | 311.3 | 387.3 | 184.9 | USD millions | Cash, cash equivalents and restricted cash as one balance sheet line; restricted cash is USD 15.9 million at 2026-09-30 and USD 18.4 million at 2025-12-31 | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-Q_2026-09-30_dbd.htm.jsonl, page 11 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 927.3 | 311.3 | 616.0 | US$m | Gross debt is the carrying value of long-term debt (principal 965.8 less deferred financing fees 38.5), including non-current finance lease liabilities; cash is cash, cash equivalents and restricted cash (restricted cash 15.1); short-term investments of 16.9 are excluded |
| FY2025 / 2025-12-31 | 938.5 | 387.3 | 551.2 | US$m | Gross debt is the carrying value of long-term debt (principal 970.7 less deferred financing fees 32.2), including non-current finance lease liabilities of 20.7; cash includes restricted cash of 18.4; short-term investments of 29.1 are excluded |
| 2026-09-30 | 949.3 | 184.9 | 764.4 | US$m | Gross debt is the carrying value of long-term debt (principal 976.4 less deferred financing fees 27.1); cash includes restricted cash of 15.9; no short-term investments are shown at this date; the issuer's own net debt is 791.5 on principal |

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 311.3 | 288.1 | US$m | Cash includes restricted cash of 15.1; undrawn is the 310.0 revolver less letters of credit of 21.9; stated by the issuer as available borrowing capacity |
| FY2025 / 2025-12-31 | 387.3 | 285.7 | US$m | Cash includes restricted cash of 18.4; undrawn is the 310.0 revolver less letters of credit of 24.3; stated by the issuer as available borrowing capacity |
| 2026-09-30 | 184.9 | 285.8 | US$m | Cash includes restricted cash of 15.9; undrawn is the 310.0 revolver less letters of credit of 24.2; uncommitted short-term lines of 10.2 are excluded; stated by the issuer as available borrowing capacity |

Cash includes restricted cash and the undrawn amount is net of letters of credit issued under the revolver.

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 2.85 | 1.89 | x | Reported EBITDA of 325.1; debt at carrying value; adjusted-EBITDA leverage is not calculable |
| FY2025 / 2025-12-31 | 2.88 | 1.69 | x | Reported EBITDA of 325.9; debt at carrying value; adjusted-EBITDA leverage is not calculable |
| 2026-09-30 | 2.90 | 2.33 | x | Reported EBITDA of 327.5 (last twelve months to 2026-09-30); debt at carrying value; adjusted-EBITDA leverage is not calculable |

The ratios use reported EBITDA, which is lower than the issuer's adjusted EBITDA where that is stated, and the last row uses a last-twelve-month figure built from the annual and nine-month statements.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 2.18 | x | Reported EBITDA of 325.1 over cash interest paid of 149.4; FY2024 includes interest on the term loan repaid in December 2024 |
| FY2025 / 2025-12-31 | 5.51 | x | Reported EBITDA of 325.9 over cash interest paid of 59.1; FY2025 includes only part of a year of coupon on the 2030 secured notes |
| 2026-09-30 | 4.27 | x | Reported EBITDA of 327.5 over cash interest paid of 76.7; last twelve months to 2026-09-30 |

FY2025 cover is flattered by a short first coupon and FY2024 reflects the repaid term loan, so the last-twelve-month figure is the representative one.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| 2026 | 0 | US$m | No scheduled principal: the notes mature in 2030 and the revolver is undrawn; laddered at 2026-09-30 |
| 2027 | 0 | US$m | No scheduled principal on the notes or the undrawn revolver |
| 2028 | 0 | US$m | No scheduled principal on the notes or the undrawn revolver |
| 2029 | 0 | US$m | Revolver of 310.0 matures on 2029-12-18 and is undrawn; no principal outstanding |
| 2030 | 950.0 | US$m | 2030 senior secured notes mature on 2030-03-31 at principal of 950.0; the other debt line of 26.4 is not laddered because no maturity is stated |

The ladder holds contractual principal of the notes only; the other debt line of USD 26.4 million has no stated maturity and is carried as a reconciling item.

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 950.0 | -0.7 | 949.3 | US$m | Reconciling items are deferred financing fees of -27.1 and the other debt line of 26.4 that the ladder leaves out (finance lease liabilities at 2025-12-31; composition at 2026-09-30 not stated); principal of all debt lines is 976.4 |

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-30 | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| Revenue | 3,751.1 | 3,805.7 | 3,921.0 | US$m | Reported; last twelve months is FY2025 plus nine months 2026 less nine months 2025 |
| EBITDA (Reported) | 325.1 | 325.9 | 327.5 | US$m | Calculated for FY columns from statements; last twelve months built with issuer-stated nine-month EBITDA |
| EBITDA (Adjusted), issuer-defined | Not supplied: not stated for the year | Not supplied: not stated for the year | Not calculable: fourth quarter 2025 adjusted EBITDA is not stated | US$m | Nine-month 2026 adjusted EBITDA is 347.5 and nine-month 2025 is 320.4 |
| Cash interest paid | 149.4 | 59.1 | 76.7 | US$m | Reported cash paid for interest |
| Net cash from operating activities | 149.2 | 300.7 | 188.2 | US$m | Reported; last twelve months constructed |
| Free cash flow (operating cash flow less capital expenditures and capitalised software) | 108.8 | 239.0 | 127.2 | US$m | Calculated on the issuer's own definition before discrete tax payments |
| Total debt (carrying value) | 927.3 | 938.5 | 949.3 | US$m | Balance sheet date: 2024-12-31, 2025-12-31 and 2026-09-30 |
| Cash and equivalents (including restricted cash) | 311.3 | 387.3 | 184.9 | US$m | Balance sheet date as above |
| Net debt | 616.0 | 551.2 | 764.4 | US$m | Gross debt less cash |
| Liquidity (cash plus undrawn revolver) | 599.4 | 673.0 | 470.7 | US$m | Undrawn revolver stated net of letters of credit |
| Total debt / EBITDA | 2.85 | 2.88 | 2.90 | x | Reported EBITDA; carrying value |
| Net debt / EBITDA | 1.89 | 1.69 | 2.33 | x | Reported EBITDA; carrying value |
| EBITDA / cash interest | 2.18 | 5.51 | 4.27 | x | Reported EBITDA over cash interest paid |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Share repurchases after the balance sheet date | Not supplied: the source states a period through 2026-10-23 only | 19.3 | 783.7 | 2.39 | US$m | 294,094 shares bought for 19.3 through 2026-10-23, per the quarterly report; leverage uses last-twelve-month reported EBITDA of 327.5; the new authorisation of 250.0 announced on 2026-10-28 and further German tax payments expected in the fourth quarter of 2026 are not yet reflected because no purchase or payment amount after 2026-10-23 is stated |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 | 3,751.1 | 325.1 | US$m | Annual duration; the column holds reported (unadjusted) EBITDA, calculated from statements; the issuer states no adjusted EBITDA for the year |
| FY2025 | 3,805.7 | 325.9 | US$m | Annual duration; reported EBITDA, calculated; same identity as the other rows |
| 2026-09-30 | 3,921.0 | 327.5 | US$m | Last twelve months to 2026-09-30, an annual duration; reported EBITDA built from FY2025 plus nine months 2026 less nine months 2025 |

The EBITDA column is reported EBITDA in every row, not the issuer's adjusted measure, which is not stated for either full year.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| 2030 Senior Secured Notes (7.75%) | 1 | Yes | 950.0 | 2.90 | US$m | Principal; issued by the registrant, guaranteed jointly and severally by subsidiaries that guarantee the revolver and certain wholly owned domestic subsidiaries, first-priority liens on substantially all assets; ranks pari passu with the revolver; leverage is cumulative principal over last-twelve-month reported EBITDA of 327.5 |
| Revolving Credit Facility (310.0 commitment) | 1 | Yes | 0.0 | 2.90 | US$m | Drawn amount nil at 2026-09-30 with 24.2 of letters of credit issued; borrower is the registrant, guaranteed by the same guarantors; first-priority liens pari passu with the notes; equal rank shares the cumulative figure |

The other debt line of USD 26.4 million is left out because no source states its legal rank, and the revolver is shown at its drawn amount of nil.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (reported), nine months 2026 | 220.0 | US$m | Issuer-stated reported EBITDA, opening measure |
| Share-based compensation | 11.7 | US$m | Classification: share-based compensation; realisation not stated |
| Restructuring and other savings initiative expenses | 78.2 | US$m | Classification: restructuring; realisation not stated |
| Non-core Turkey operation | 10.8 | US$m | Classification: other stated (wind-down of a non-core operation); realisation not stated |
| Impairment of unconsolidated subsidiary | 16.9 | US$m | Classification: other stated (impairment of an investment in a Chinese subsidiary); realisation not stated |
| Foreign exchange loss, net | 4.2 | US$m | Classification: other stated; realisation not stated |
| Equity in loss of unconsolidated subsidiaries, net | 4.7 | US$m | Classification: other stated; realisation not stated |
| Non-routine expense, net | 1.0 | US$m | Classification: other stated; realisation not stated |
| Adjusted EBITDA (issuer-defined), nine months 2026 | 347.5 | US$m | Issuer-stated adjusted EBITDA, closing measure; the add-backs sum to 127.5 |

No qualification.

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 927.3 | Net debt data, FY2024 / 2024-12-31 | 325.1 | T4.4 Income statement, EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 2.85 | Calculated | Tier 1 audited statements; issuer-derived EBITDA calculated | Fiscal year; debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 616.0 | Net debt data, FY2024 / 2024-12-31 | 325.1 | T4.4 Income statement, EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 1.89 | Calculated | Tier 1 audited statements; issuer-derived EBITDA calculated | Fiscal year; cash includes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 325.1 | T4.4 Income statement, EBITDA (Reported), FY2024 | 149.4 | T4.5 Cash flow statement, Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 2.18 | Calculated | Tier 1 audited statements; issuer-derived EBITDA calculated | Fiscal year |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 927.3 | Net debt data, FY2024 / 2024-12-31 | Not supplied: the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built | T4.4 Income statement, EBITDA (Adjusted) | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not stated | Not Calculable | Tier 1 audited statements; issuer-derived EBITDA calculated | the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 616.0 | Net debt data, FY2024 / 2024-12-31 | Not supplied: the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built | T4.4 Income statement, EBITDA (Adjusted) | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not stated | Not Calculable | Tier 1 audited statements; issuer-derived EBITDA calculated | the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | Not supplied: the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built | T4.4 Income statement, EBITDA (Adjusted) | 149.4 | T4.5 Cash flow statement, Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not stated | Not Calculable | Tier 1 audited statements; issuer-derived EBITDA calculated | the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 938.5 | Net debt data, FY2025 / 2025-12-31 | 325.9 | T4.4 Income statement, EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 2.88 | Calculated | Tier 1 audited statements; EBITDA calculated | Fiscal year; debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 551.2 | Net debt data, FY2025 / 2025-12-31 | 325.9 | T4.4 Income statement, EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 1.69 | Calculated | Tier 1 audited statements; EBITDA calculated | Fiscal year; cash includes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 325.9 | T4.4 Income statement, EBITDA (Reported), FY2025 | 59.1 | T4.5 Cash flow statement, Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 5.51 | Calculated | Tier 1 audited statements; EBITDA calculated | Fiscal year; FY2025 coupon period is short |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 938.5 | Net debt data, FY2025 / 2025-12-31 | Not supplied: the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built | T4.4 Income statement, EBITDA (Adjusted) | FY2025 / 2025-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not stated | Not Calculable | Tier 1 audited statements; EBITDA calculated | the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 551.2 | Net debt data, FY2025 / 2025-12-31 | Not supplied: the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built | T4.4 Income statement, EBITDA (Adjusted) | FY2025 / 2025-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not stated | Not Calculable | Tier 1 audited statements; EBITDA calculated | the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | Not supplied: the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built | T4.4 Income statement, EBITDA (Adjusted) | 59.1 | T4.5 Cash flow statement, Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not stated | Not Calculable | Tier 1 audited statements; EBITDA calculated | the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 949.3 | Net debt data, 2026-09-30 | 327.5 | T4.4 Income statement, EBITDA (Reported), T4.8 last twelve months | 2026-09-30 | USD | US$m | 2.90 | Calculated | Tier 2b unaudited; last twelve months constructed | Last twelve months built from FY2025 plus nine months 2026 less nine months 2025; debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 764.4 | Net debt data, 2026-09-30 | 327.5 | T4.4 Income statement, EBITDA (Reported), T4.8 last twelve months | 2026-09-30 | USD | US$m | 2.33 | Calculated | Tier 2b unaudited; last twelve months constructed | Last twelve months built from FY2025 plus nine months 2026 less nine months 2025; cash includes restricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 327.5 | T4.4 Income statement, EBITDA (Reported), T4.8 last twelve months | 76.7 | T4.5 Cash flow statement, Cash Interest Paid, T4.8 last twelve months | 2026-09-30 | USD | US$m | 4.27 | Calculated | Tier 2b unaudited; last twelve months constructed | Last twelve months built from FY2025 plus nine months 2026 less nine months 2025 |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 949.3 | Net debt data, 2026-09-30 | Not supplied: the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built | T4.4 Income statement, EBITDA (Adjusted) | 2026-09-30 | USD | US$m | Not calculable: adjusted EBITDA is not stated | Not Calculable | Tier 2b unaudited; last twelve months constructed | the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 764.4 | Net debt data, 2026-09-30 | Not supplied: the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built | T4.4 Income statement, EBITDA (Adjusted) | 2026-09-30 | USD | US$m | Not calculable: adjusted EBITDA is not stated | Not Calculable | Tier 2b unaudited; last twelve months constructed | the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | Not supplied: the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built | T4.4 Income statement, EBITDA (Adjusted) | 76.7 | T4.5 Cash flow statement, Cash Interest Paid, T4.8 last twelve months | 2026-09-30 | USD | US$m | Not calculable: adjusted EBITDA is not stated | Not Calculable | Tier 2b unaudited; last twelve months constructed | the issuer states no adjusted EBITDA for FY2024 or FY2025, and fourth-quarter 2025 is not stated, so no last-twelve-month figure can be built |
| Gross margin, percent | Gross profit / Total revenues, as a percentage | 920.0 | T4.4 Income statement, Gross profit, FY2024 | 3,751.1 | T4.4 Income statement, Total revenues, FY2024 | FY2024 | USD | US$m | 24.53 | Calculated | Tier 1 audited | Percentage of revenue |
| Gross margin, percent | Gross profit / Total revenues, as a percentage | 961.2 | T4.4 Income statement, Gross profit, FY2025 | 3,805.7 | T4.4 Income statement, Total revenues, FY2025 | FY2025 | USD | US$m | 25.26 | Calculated | Tier 1 audited | Percentage of revenue |
| Gross margin, percent | Gross profit / Total revenues, as a percentage | 681.4 | T4.4 Income statement, Gross profit, 9M 2025 | 2,701.5 | T4.4 Income statement, Total revenues, 9M 2025 | 9M 2025 | USD | US$m | 25.22 | Calculated | Tier 2b unaudited | Percentage of revenue |
| Gross margin, percent | Gross profit / Total revenues, as a percentage | 699.8 | T4.4 Income statement, Gross profit, 9M 2026 | 2,816.8 | T4.4 Income statement, Total revenues, 9M 2026 | 9M 2026 | USD | US$m | 24.84 | Calculated | Tier 2b unaudited | Percentage of revenue; products margin fell while services margin rose |
| EBITDA margin (Reported), percent | EBITDA (Reported) / Total revenues, as a percentage | 325.9 | T4.4 Income statement, EBITDA (Reported), FY2025 | 3,805.7 | T4.4 Income statement, Total revenues, FY2025 | FY2025 | USD | US$m | 8.56 | Calculated | Tier 1 audited | Percentage of revenue |
| EBITDA margin (Reported), percent | EBITDA (Reported) / Total revenues, as a percentage | 220.0 | T4.4 Income statement, EBITDA (Reported), 9M 2026 | 2,816.8 | T4.4 Income statement, Total revenues, 9M 2026 | 9M 2026 | USD | US$m | 7.81 | Calculated | Tier 2b unaudited | Percentage of revenue |
| Free cash flow conversion, percent | Free cash flow / EBITDA (Reported), as a percentage | 239.0 | Calculation C13, FY2025 | 325.9 | T4.4 Income statement, EBITDA (Reported), FY2025 | FY2025 | USD | US$m | 73.34 | Calculated | Tier 1 audited | Free cash flow is operating cash flow less capital expenditures and capitalised software |
| Free cash flow conversion, percent | Free cash flow / EBITDA (Reported), as a percentage | 127.2 | Calculation C13, last twelve months to 2026-09-30 | 327.5 | T4.8 last twelve months | 2026-09-30 | USD | US$m | 38.84 | Calculated | Tier 2b unaudited | Last twelve months |
| EBITDA / contractual interest due within one year | EBITDA (Reported) / Interest on debt due within one year | 325.9 | T4.4 Income statement, EBITDA (Reported), FY2025 | 73.6 | 2025 annual report obligations table, interest on debt due in less than one year | FY2025 | USD | US$m | 4.43 | Calculated | Tier 1 audited | Interest of 73.6 is the annual report's estimate at 2025-12-31 using rates then in effect |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM 2026-09-30 | USD 3,805.7m | USD 2,816.8m | USD 2,701.5m | USD 3,921.0m | Calculated | Annual report FY2025; quarterly report Q3 2026 | Last twelve months is FY2025 plus nine months 2026 less nine months 2025 |
| EBITDA (Reported) | LTM 2026-09-30 | USD 325.9m | USD 220.0m | USD 218.4m | USD 327.5m | Calculated | Annual report FY2025 (components); Q3 2026 earnings release | FY2025 is calculated and the stubs are issuer-stated, with a possible definitional difference in depreciation and amortization described in the conflict register |
| EBITDA (Adjusted) | LTM 2026-09-30 | Not supplied: not stated by the issuer for FY2025 | USD 347.5m | USD 320.4m | Not calculable: the full-year component is not stated | Not Calculable | Q3 2026 earnings release | Fourth quarter 2025 adjusted EBITDA is not stated |
| Cash Interest Paid | LTM 2026-09-30 | USD 59.1m | USD 76.4m | USD 58.8m | USD 76.7m | Calculated | Annual report FY2025; quarterly report Q3 2026 | Last twelve months |
| Net cash from operating activities | LTM 2026-09-30 | USD 300.7m | USD -29.3m | USD 83.2m | USD 188.2m | Calculated | Annual report FY2025; quarterly report Q3 2026 | Last twelve months |
| Capital expenditures and capitalised software | LTM 2026-09-30 | USD 61.7m | USD 39.2m | USD 39.9m | USD 61.0m | Calculated | Annual report FY2025; quarterly report Q3 2026 | Capital expenditures 37.4 plus capitalised software 24.3 for FY2025; 19.0 plus 20.2 for 2026; 22.6 plus 17.3 for 2025 |
| Free cash flow | LTM 2026-09-30 | USD 239.0m | USD -68.5m | USD 43.3m | USD 127.2m | Calculated | Annual report FY2025; quarterly report Q3 2026 | Operating cash flow less capital expenditures and capitalised software; before discrete tax payments |
| Cash paid for income taxes | LTM 2026-09-30 | USD 57.2m | USD 75.1m | USD 35.9m | USD 96.4m | Calculated | Annual report FY2025; quarterly report Q3 2026 | Last twelve months |
| Revenue | Q4 2025 (FY less 9M) | USD 3,805.7m | USD 2,701.5m | Not supplied: not applicable to this construction | USD 1,104.2m | Calculated | Annual report FY2025; quarterly report Q3 2026 | No fourth-quarter figure is reported, so it is the year less nine months and is labelled calculated |
| EBITDA (Reported) | Q4 2025 (FY less 9M) | USD 325.9m | USD 218.4m | Not supplied: not applicable to this construction | USD 107.5m | Calculated | Annual report FY2025; Q3 2026 earnings release | Calculated as the year less nine months |
| Net cash from operating activities | Q4 2025 (FY less 9M) | USD 300.7m | USD 83.2m | Not supplied: not applicable to this construction | USD 217.5m | Calculated | Annual report FY2025; quarterly report Q3 2026 | Calculated as the year less nine months |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_dbd.htm.jsonl | Annual report on Form 10-K | FY2025 and FY2024 comparatives; 2023 predecessor and successor columns | USD | millions | Consolidated Diebold Nixdorf, Incorporated and subsidiaries | US GAAP; successor basis after fresh-start accounting on 2023-08-11 | Tier 1 audited statements | Statements, debt note, obligations, leases, ratings, risk factors | Part III and Exhibit 21.1 not in the text; no adjusted EBITDA |
| 10-K_2024-12-31_dbd.htm.jsonl | Annual report on Form 10-K | FY2024; 2023 predecessor and successor periods; FY2022 predecessor | USD | millions | Consolidated Diebold Nixdorf, Incorporated and subsidiaries | US GAAP; fresh-start accounting at 2023-08-11 | Tier 1 audited statements | Cross-check of FY2024 balance sheet lines only | FY2024 lines are presented differently in the 2025 report; the 2025 report's comparatives are used |
| 10-Q_2026-09-30_dbd.htm.jsonl | Quarterly report on Form 10-Q | Q3 2026, 9M 2026 and 9M 2025 comparatives; balance sheets at 2026-09-30 and 2025-12-31 | USD | millions | Consolidated Diebold Nixdorf, Incorporated and subsidiaries | US GAAP, unaudited | Tier 2b unaudited without stated auditor review | Nine-month and quarter statements, debt, liquidity, segments, repurchases | Cash flow statement is nine months only; no discrete third-quarter cash flow |
| EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl | Earnings release | Q3 2026, 9M 2026, Q3 2025 and 9M 2025 | USD | millions | Consolidated Diebold Nixdorf, Incorporated and subsidiaries | Non-GAAP measures reconciled to US GAAP, unaudited | Tier 2b unaudited | EBITDA, adjusted EBITDA, net debt and free cash flow definitions | Company-defined non-GAAP measures; adjusted EBITDA for FY2024, FY2025 and Q4 2025 not given |

The income statement, cash flow statement and balance sheet are sufficient for every period used here; key performance indicators are limited to those the statements and the release support, and order entry and backlog are described only in words, so they carry no figure.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 54–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–13; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 13–15

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Diebold Nixdorf, Incorporated | Registrant; issuer of the 2030 senior secured notes; borrower under the revolving credit facility | December 31 | USD | millions | Consolidated group including subsidiaries; noncontrolling interests are inside net income and equity | US GAAP; successor basis from 2023-08-12 | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| Guarantor subsidiaries | Guarantors of the notes and the revolver; named in the indenture | December 31 | Not supplied: guarantor financials are not stated | Not supplied: guarantor financials are not stated | Not supplied: the guarantor list is not in the sources | Not supplied: guarantor financials are not stated | No separate guarantor periods |
| Non-core Turkey operation | Consolidated operation to be wound down in 2026 | December 31 | USD | millions | Inside consolidated results; revenue USD 10.1 million for nine months 2026 | US GAAP | 9M 2026 and Q3 2026 disclosed |

Events after 2026-09-30 are kept out of period figures: purchases of 294,094 shares for USD 19.3 million through 2026-10-23, and the board's new USD 250.0 million repurchase authorisation announced on 2026-10-28. A strategic collaboration with Euronet Worldwide, Inc. is named only as a risk with no date or terms, and German tax payments of about USD 50 million for 2026, of which USD 32.3 million was paid by 2026-09-30, continue in the fourth quarter.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, page 10; 10-Q_2026-09-30_dbd.htm.jsonl, page 17; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 3–7; 10-Q_2026-09-30_dbd.htm.jsonl, page 4

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) built from components for FY2024 and FY2025 | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56 | Calculated | Not stated | FY2024 325.1 and FY2025 325.9 | The annual report states no EBITDA; net income plus income tax plus interest expense less interest income plus depreciation and amortization from the cash flow statement | FY2024, FY2025 |
| Issuer-stated EBITDA kept for nine-month and third-quarter columns | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 13 | None | 220.0 (9M 2026) | 220.0 | A directly reported period is never replaced by a derived one | 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| Last twelve months constructed from the latest year plus the current stub less the prior-year stub | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–13 | Calculated | Not stated | See the constructed period register | Needed for leverage and cover at 2026-09-30 | LTM to 2026-09-30 |
| Debt taken at carrying value | 10-Q_2026-09-30_dbd.htm.jsonl, page 17 | None | Principal 976.4 | Carrying value 949.3 | Method rule: carrying value, with the principal difference logged | 2024-12-31, 2025-12-31, 2026-09-30 |
| FY2024 balance sheet read from the 2025 report's comparatives | 10-K_2025-12-31_dbd.htm.jsonl, page 54; 10-K_2024-12-31_dbd.htm.jsonl, page 78 | Reclassification | 2024 report: property, plant and equipment 128.1 and operating lease assets 118.1 | 2025 report: property, plant and equipment 246.2 | The 2025 report reclassified prior-year presentation; totals tie | FY2024 |
| Cash kept inclusive of restricted cash | 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–12 | None | Cash, cash equivalents and restricted cash 184.9 | 184.9 | The statements print one line and the cash flow statement reconciles to it | All balance sheet dates |
| Currency and unit | 10-K_2025-12-31_dbd.htm.jsonl, page 54 | None | USD millions | USD millions | All sources are USD millions; no conversion | All periods |

### Segment schedule

| Business unit | Period | Net sales | Segment gross profit | Segment operating profit | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Banking | FY2024 | 2,762.8 | 704.5 | 450.7 | USD millions | Segment note; segment gross profit excludes restructuring and non-routine items | 10-K_2025-12-31_dbd.htm.jsonl, pages 97–98 |
| Retail | FY2024 | 988.3 | 243.8 | 121.9 | USD millions | Segment note; segment gross profit excludes restructuring and non-routine items | 10-K_2025-12-31_dbd.htm.jsonl, pages 97–98 |
| Corporate and items not allocated to segments | FY2024 | Not supplied: not a segment line | Not supplied: not a segment line | -390.5 | USD millions | Printed total of corporate charges, restructuring and other items | 10-K_2025-12-31_dbd.htm.jsonl, pages 97–98 |
| Banking | FY2025 | 2,797.0 | 756.7 | 506.6 | USD millions | Segment note; segment gross profit excludes restructuring and non-routine items | 10-K_2025-12-31_dbd.htm.jsonl, pages 97–98 |
| Retail | FY2025 | 1,008.7 | 246.7 | 124.9 | USD millions | Segment note; segment gross profit excludes restructuring and non-routine items | 10-K_2025-12-31_dbd.htm.jsonl, pages 97–98 |
| Corporate and items not allocated to segments | FY2025 | Not supplied: not a segment line | Not supplied: not a segment line | -389.5 | USD millions | Printed total of corporate charges, restructuring and other items | 10-K_2025-12-31_dbd.htm.jsonl, pages 97–98 |
| Banking | 9M 2025 | 1,999.0 | 533.1 | 345.1 | USD millions | Segment note; segment gross profit excludes restructuring and non-routine items | 10-Q_2026-09-30_dbd.htm.jsonl, pages 16–17 |
| Retail | 9M 2025 | 702.5 | 170.6 | 79.8 | USD millions | Segment note; segment gross profit excludes restructuring and non-routine items | 10-Q_2026-09-30_dbd.htm.jsonl, pages 16–17 |
| Corporate and items not allocated to segments | 9M 2025 | Not supplied: not a segment line | Not supplied: not a segment line | -265.3 | USD millions | Printed total of corporate charges, restructuring and other items | 10-Q_2026-09-30_dbd.htm.jsonl, pages 16–17 |
| Banking | 9M 2026 | 1,950.5 | 535.5 | 341.1 | USD millions | Segment note; segment gross profit excludes restructuring and non-routine items | 10-Q_2026-09-30_dbd.htm.jsonl, pages 16–17 |
| Retail | 9M 2026 | 856.2 | 185.7 | 92.7 | USD millions | Segment note; segment gross profit excludes restructuring and non-routine items | 10-Q_2026-09-30_dbd.htm.jsonl, pages 16–17 |
| Corporate and items not allocated to segments | 9M 2026 | 10.1 | Not supplied: not a segment line | -305.0 | USD millions | Printed total of corporate charges, restructuring and other items; net sales is the non-core Turkey revenue outside the segment total | 10-Q_2026-09-30_dbd.htm.jsonl, pages 16–17 |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Growth | Revenue growth, percent | Not supplied: FY2023 is split at emergence | 1.46 | Not supplied: nine months 2024 not supplied | 4.27 | Up | Year-on-year on reported revenue; Retail growth and a Banking decline in 2026 |
| Margin | Gross margin, percent | 24.53 | 25.26 | 25.22 | 24.84 | Down | Products margin fell while services margin rose in 2026 |
| Margin | EBITDA (Reported) margin, percent | 8.67 | 8.56 | 8.08 | 7.81 | Down | Reported EBITDA grew slower than revenue in 2026 |
| Margin | Adjusted EBITDA margin, issuer-reported, percent | Not supplied: not stated for the year | Not supplied: not stated for the year | 11.9 | 12.4 | Up | Issuer-stated on its non-GAAP revenue base |
| Cash flow | Free cash flow, USD millions | 108.8 | 239.0 | 43.3 | -68.5 | Down | Operating cash flow less capital expenditures and capitalised software |
| Liquidity | Cash plus undrawn revolver, USD millions | 599.4 | 673.0 | Not supplied: balance sheet at 2025-09-30 not supplied | 470.7 | Down | Balance sheet dates 2024-12-31, 2025-12-31 and 2026-09-30 |
| Mix | Banking share of revenue, percent | 73.65 | 73.50 | 74.00 | 69.60 | Down | Banking on reported revenue including the non-core Turkey operation; Retail growth lowers the share |

Order entry and backlog are described only in words in the releases and are not carried as figures.

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Unadjusted EBITDA from statement components | Issuer EBITDA uses a depreciation and amortization figure that includes cloud-software amortization (97.1 against 93.7 in the cash flow statement for 9M 2026; 100.2 against 96.8 for 9M 2025) | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 13; 10-Q_2026-09-30_dbd.htm.jsonl, page 12 | 9M 2025, 9M 2026, FY columns | 3.4 per nine months; cancels in the last-twelve-month figure | Financial foundation | FY columns use statement D&A; nine-month columns use the issuer's figure; last twelve months is 327.5 on either basis |
| Adjusted EBITDA | Shown beside reported EBITDA, labelled | Issuer adds back share-based compensation, restructuring, Turkey wind-down, impairment, foreign exchange, equity-method loss and non-routine items | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 13–14 | 9M 2025, 9M 2026 | Add-backs 127.5 against 102.0 | Financial foundation | Reported EBITDA is the denominator; adjusted shown in the bridge |
| Total debt | Carrying value, net of issuance costs | Issuer net debt uses debt principal | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 15; 10-Q_2026-09-30_dbd.htm.jsonl, page 17 | 2025-12-31, 2026-09-30 | 27.1 at 2026-09-30 (deferred financing fees) | Financial foundation | Carrying value used; principal logged in the reconciliation |
| Net debt | Carrying-value debt less cash including restricted cash; short-term investments excluded | Issuer net debt is principal less cash, restricted cash and short-term investments (554.3 at 2025-12-31; 791.5 at 2026-09-30) | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 15 | 2025-12-31, 2026-09-30 | 3.1 at 2025-12-31 and 27.1 at 2026-09-30 against this module's 551.2 and 764.4 | Financial foundation | Both figures stated; this module's is used |
| Free cash flow | Operating cash flow less capital expenditures and capitalised software | Issuer headline free cash flow excludes discrete tax payments (36.2 outflow for 9M 2026 against 68.5 before) | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 7 | 9M 2026 | 32.3 of discrete German tax payments | Financial foundation | Before-exclusion figure used; exclusion shown |
| Cash interest | Cash paid for interest | Interest expense on the income statement (74.1 for 9M 2026 against 76.4 paid; 85.7 for FY2025 against 59.1 paid) | 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–13; 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56 | FY2025, 9M 2026 | 26.6 lower paid in FY2025; 2.3 higher paid in 9M 2026 | Financial foundation | Cash paid used for cover |
| Revenue | Reported GAAP revenue | Non-GAAP revenue excludes the non-core Turkey operation (2,806.7 against 2,816.8 for 9M 2026) | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 7; 10-Q_2026-09-30_dbd.htm.jsonl, page 16 | 9M 2026, Q3 2026 | 10.1 for 9M 2026 | Financial foundation | GAAP revenue used; segment table shows the gap |
| Non-core business label | One label for one perimeter | First-quarter documents say APMEA entity; later documents say Turkey operation | 10-Q_2026-09-30_dbd.htm.jsonl, page 17 | Q1 to Q3 2026 | Not quantified: amounts for the first quarter are not matched | Financial foundation | Carry both labels; match amounts |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and cover on reported EBITDA | Ready with Limitations | FY columns derived; LTM built from mixed derived and issuer-stated components | Use as stated; treat FY2025 cover as flattered |
| Leverage and cover on adjusted EBITDA | Not Ready | FY2024, FY2025 and Q4 2025 adjusted EBITDA are not stated | Obtain the fourth-quarter 2025 earnings release |
| Liquidity and debt maturities | Ready with Limitations | Other debt line of 26.4 has no stated maturity; restricted cash is inside cash | Obtain the lease and debt footnote detail for 2026-09-30 |
| Trend beyond two fiscal years | Not Ready | 2023 is split into predecessor and successor periods | Use FY2024 onward |
| Covenant headroom | Not Ready | No test, level or definition is stated in the sources | Obtain the credit agreement and indenture |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7.75% Senior Secured Notes due 2030 | Senior secured notes | Not supplied: the debt note gives no carrying value per instrument | 950.0 | 950.0 | Not applicable | First-priority liens on substantially all tangible and intangible assets of the registrant and the guarantors, pari passu with the revolver | Senior secured; pari passu with the Revolving Credit Facility | USD | 950.0 | Not applicable | 7.75% | Fixed | Not applicable | Not applicable | Not applicable | 2030-03-31 | 0 | 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18; 10-K_2025-12-31_dbd.htm.jsonl, pages 77–79 |
| Revolving Credit Facility | Revolving credit facility | 0.0 | 0.0 | 0.0 | 310.0 | First-priority liens on substantially all assets, pari passu with the notes; guaranteed by the guarantors | Senior secured; pari passu with the notes | USD | 0.0 | Not applicable | Adjusted SOFR plus 2.75% to 3.50%, or adjusted base rate plus 1.75% to 2.50%, by first lien debt ratio | Floating | Adjusted SOFR | 275 to 350 | 0 | 2029-12-18 | Not applicable | 10-Q_2026-09-30_dbd.htm.jsonl, page 9; 10-Q_2026-09-30_dbd.htm.jsonl, page 18; 10-K_2025-12-31_dbd.htm.jsonl, page 79 |
| Other debt (non-current finance lease liabilities at 2025-12-31) | Other | Not supplied: the note shows this line before deferred financing fees | 26.4 | Not supplied: not stated | Not applicable | Not supplied: not stated | Not supplied: not stated | USD | 26.4 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 10-Q_2026-09-30_dbd.htm.jsonl, page 17; 10-K_2025-12-31_dbd.htm.jsonl, page 89 |
| International uncommitted short-term lines of credit | Uncommitted lines | 0.0 | 0.0 | 0.0 | 10.2 | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 0.0 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Under one year | Not applicable | 10-Q_2026-09-30_dbd.htm.jsonl, page 18 |
| Financing cost adjustment | Deferred financing fees | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -27.1 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_dbd.htm.jsonl, page 17 |

The reporting currency amounts of the instruments plus the financing cost adjustment add to the balance sheet carrying value of USD 949.3 million.
Basis: calculation C5; 10-Q_2026-09-30_dbd.htm.jsonl, page 11; 10-Q_2026-09-30_dbd.htm.jsonl, page 17

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 32 |
| Calculated | 24 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 4 |
| Fields present | 14 |
| Fields total | 14 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 4 |

## Calculations

Amounts are USD millions as printed in the sources; ratios are worked to the printed precision and rounded half up to two decimals.

| Calculation ID | Calculation | Inputs | Result |
|---|---|---|---|
| C1 | Net debt at 2024-12-31 | Gross debt 927.3 less cash 311.3 | 616.0 |
| C2 | Net debt at 2025-12-31 | Gross debt 938.5 less cash 387.3 | 551.2 |
| C3 | Net debt at 2026-09-30 | Gross debt 949.3 less cash 184.9 | 764.4 |
| C4 | Increase in net debt over nine months of 2026 | 764.4 less 551.2 | 213.2 |
| C5 | Debt principal to carrying value at 2026-09-30 | Notes 950.0 plus other debt 26.4 gives principal 976.4; less deferred financing fees 27.1 gives 949.3; the issuer's net debt of 791.5 is 976.4 less cash 184.9 | 949.3 |
| C6 | EBITDA (Reported) for the fiscal years | FY2025: net income 97.5 plus income tax 24.1 plus interest expense 85.7 less interest income 8.9 plus depreciation and amortization 127.5 is 325.9; FY2024: -14.5 plus 64.3 plus 155.3 less 12.3 plus 132.3 is 325.1 | FY2025 325.9; FY2024 325.1 |
| C7 | Last-twelve-month EBITDA (Reported) to 2026-09-30 | FY2025 325.9 plus 9M 2026 220.0 less 9M 2025 218.4 | 327.5 |
| C8 | Last-twelve-month cash interest paid to 2026-09-30 | FY2025 59.1 plus 9M 2026 76.4 less 9M 2025 58.8 | 76.7 |
| C9 | Last-twelve-month revenue to 2026-09-30 | FY2025 3,805.7 plus 9M 2026 2,816.8 less 9M 2025 2,701.5 | 3,921.0 |
| C10 | Liquidity: cash plus undrawn revolver net of letters of credit | 2024-12-31: 311.3 plus 288.1 is 599.4; 2025-12-31: 387.3 plus 285.7 is 673.0; 2026-09-30: 184.9 plus 285.8 is 470.7; change since 2025-12-31 is 470.7 less 673.0 | -202.3 |
| C11 | Reconciling items between principal and carrying value at 2026-09-30 | Deferred financing fees -27.1 plus other debt left out of the ladder 26.4 | -0.7 |
| C12 | Change in cash over nine months of 2026 | Cash 184.9 less 387.3, equal to the cash flow statement's net change | -202.4 |
| C13 | Free cash flow: operating cash flow less capital expenditures and capitalised software | FY2025: 300.7 less 37.4 less 24.3 is 239.0; 9M 2026: -29.3 less 19.0 less 20.2 is -68.5; 9M 2025: 83.2 less 22.6 less 17.3 is 43.3; last twelve months 239.0 plus -68.5 less 43.3 is 127.2; FY2024: 149.2 less 17.4 less 23.0 is 108.8 | LTM 127.2 |
| C14 | Adjusted EBITDA add-backs over reported EBITDA | 9M 2026: 347.5 less 220.0 is 127.5, which is 36.69% of 347.5; 9M 2025: 320.4 less 218.4 is 102.0, which is 31.84% of 320.4; reported EBITDA change 220.0 less 218.4 is 1.6 | 127.5 and 102.0 |
| C15 | Fourth quarter of 2025 as the year less nine months | Revenue 3,805.7 less 2,701.5 is 1,104.2; EBITDA 325.9 less 218.4 is 107.5 | 1,104.2 and 107.5 |
| C16 | Pro forma net debt and net leverage after purchases of 19.3 | 764.4 plus 19.3 is 783.7; 783.7 divided by 327.5 is 2.39 | 783.7 and 2.39 |
| C17 | Change in deferred revenue since 2025-12-31 | 254.1 less 325.8 | -71.7 |
| C18 | Liquidity on an unrestricted-cash basis at 2026-09-30 | Cash 184.9 less restricted cash 15.9 is 169.0; plus undrawn revolver 285.8 | 454.8 |
| C19 | Fourth-quarter 2025 operating cash flow as a share of the year | FY2025 300.7 less 9M 2025 83.2 is 217.5; 217.5 divided by 300.7 | 72.33% |
| C20 | FY2025 EBITDA over contractual interest due within one year | 325.9 divided by 73.6 | 4.43 |

## Gaps

- High: adjusted EBITDA is not stated for FY2024, FY2025 or the fourth quarter of 2025, so leverage and cover on the issuer's adjusted measure and last-twelve-month adjusted EBITDA are not calculable; the fourth-quarter 2025 earnings release would close it.

- Medium: no executed credit agreement or indenture is in the sources, so covenant tests, levels and headroom are not stated and are not inferred; the two financing agreements dated 2024-12-18 would close it.

- Medium: statements for 2023 and earlier are not carried because the August 2023 emergence splits 2023 into predecessor and successor periods, which no single period column can hold, so trend is limited to FY2024 and FY2025 and the nine-month periods.

- Medium: the other debt line of USD 26.4 million at 2026-09-30 has no stated composition or maturity in the quarterly report; at 2025-12-31 it equals non-current finance lease liabilities of USD 20.7 million, and it is kept out of the maturity ladder and carried in the reconciling items.

- Medium: German tax payments of about USD 50 million for 2026 attributable to earlier years were USD 32.3 million paid by 2026-09-30, so about USD 17.7 million remains for the fourth quarter by difference; the release gives no exact remainder, so it is not reflected in net debt.

- Low: statement cells printed as a dash are stated as not supplied rather than as zero, in the 2025 annual report for the other operating line, loss on extinguishment, acquisitions and several financing lines, and in the quarterly report for acquisitions, treasury shares and revolver lines; none changes a total.

- Low: lines that appear in only one report, such as impairment, income taxes within working capital, restructuring accrual, income tax receivables and accrued taxes, are marked as not presented where a period's statement lacks them.

- Low: the first-quarter documents call the non-core business an APMEA entity and the later ones a Turkey operation, and amounts for the first quarter are not matched across reports; both labels are carried.

- Low: net debt in the release is on debt principal and includes short-term investments, so it differs from this module's figure by USD 3.1 million at 2025-12-31 and USD 27.1 million at 2026-09-30; both are stated and the carrying-value figure is used.

- Low: the cash flow statement in the quarterly report covers nine months only, so no discrete third-quarter cash flow statement is carried; the release states third-quarter operating cash flow of an outflow of USD 47.4 million.

## Next module

The orchestrator selects the next module.
