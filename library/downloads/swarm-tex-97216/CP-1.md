---
module_id: CP-1
issuer_id: tex-97216
analysis_date: 2026-11-18
run_id: tex-97216-2026-11-18-credit_snapshot-host
---

## Request

Financial foundation for Terex Corp, as of 2026-11-18, on the credit snapshot pathway. Scope: normalised statements, debt, liquidity, leverage and cover from the five supplied filings, with the REV merger as a perimeter change.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_tex.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-07 | 070e0393e0649ac1fcb82fc8fe9adda2a0d7683c584b19aa44b44575a47cc7d1 | FY2024 statements, FY2024 debt ladder, 2024 pension note, 2.5x leverage target |
| 10-K_2025-12-31_tex.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-13 | 0e8b6c85df8394f5b5edb3ae37a6e9f0a81438f6ac5fee410e779541dac1d53b | FY2025 and FY2024 statements, debt, leases, cash interest paid, depreciation and amortisation notes |
| 10-Q_2026-03-31_tex.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-01 | e23bbda658715732d1c5f2f0d864627d49d1db630b0236e210c1ec235144ffe4 | Q1 2026 and Q1 2025 statements, EBITDA reconciliation, debt and liquidity at 2026-03-31 |
| 10-Q_2026-06-30_tex.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-30 | 76c05a56b7157ad387be72285c87280b00ef0edfa78501f579bfb3c4e95b7104 | H1 2026 and H1 2025 statements, EBITDA reconciliation, debt and liquidity at 2026-06-30 |
| 10-Q_2026-09-30_tex.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-29 | 938dce037f99dc025dc9b69c8b6c1331521a724913c419ac73e1555c084a752b | 9M 2026 and 9M 2025 statements, EBITDA reconciliation, debt, liquidity, held-for-sale and subsequent events |

Document date is the date the registrant signed the report; the reports do not state a filing date.

| Module | Document | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness (CP-0) | Source readiness summary of the five filings | e6d48e9a85a18e457f801633a8f7a823bb32331460e349d563611a59d1da8326 | Perimeter break, definition differences, evidence boundary and gaps carried into the limitations |

## Findings

### Bottom line

Net leverage of 3.06x at 2026-09-30 has eased from 4.59x at 2026-03-31 but remains above 2.89x at 2025-12-31, so creditors rely on REV earnings that enter the last-twelve-month base only from 2026-02-02.
Basis: calculation V5; calculation V3; calculation V2; 10-Q_2026-09-30_tex.htm.jsonl, page 8

Liquidity is comfortable at USD 1,207 million, made up of USD 407 million of cash and an undrawn USD 800 million revolver, and the company reports no significant debt maturities until 2029. Interest cover on cash interest can be tested only for fiscal years, at 4.01x for FY2025, because cash interest paid is not printed for 2026.
Basis: calculation Y5; calculation X2; 10-Q_2026-09-30_tex.htm.jsonl, page 47

### Leverage and debt structure

The merger was paid mostly in shares, so total debt barely moved. Total debt at carrying value was USD 2,584 million at both 2024-12-31 and 2025-12-31, USD 2,749 million at 2026-03-31 when the revolver stood at USD 170 million, and USD 2,578 million at 2026-09-30 with the revolver repaid. Cash fell from USD 772 million at year-end 2025 to USD 407 million, primarily because the merger took USD 467 million net of cash acquired, so net debt rose from USD 1,812 million to USD 2,171 million over the nine months.
Basis: calculation D2; calculation D5; calculation R2; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 20; 10-Q_2026-09-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 19; 10-Q_2026-09-30_tex.htm.jsonl, page 25

The fall in net leverage from 4.59x to 3.06x since 2026-03-31 comes mostly from the denominator: last-twelve-month EBITDA rose from USD 513 million to USD 710 million as REV earnings accumulated, while net debt fell from USD 2,357 million to USD 2,171 million. Because the base mixes a calculated FY2025 with printed interim figures and includes REV for only part of the period, the ratio is a conservative reading rather than a pro forma one.
Basis: calculation L1; calculation L3; calculation D3; calculation D5; 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46

### Coverage

Interest cover on cash interest paid was 11.42x in FY2024 and 4.01x in FY2025, the fall reflecting a full year of the acquisition debt, with interest expense of USD 177 million against USD 89 million. For 2026 only EBITDA over total interest expense is available, at 3.70x on a last-twelve-month basis at 2026-09-30 against 2.83x at 2026-03-31; interest expense includes factoring discounts and, since the merger, interest on customer advances.
Basis: calculation X1; calculation X2; calculation X3; calculation X4; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 102; 10-K_2025-12-31_tex.htm.jsonl, page 132; 10-Q_2026-09-30_tex.htm.jsonl, page 10

### Cash generation and working capital

Operating cash flow was USD 440 million in FY2025 and issuer-defined free cash flow USD 325 million, helped by a working capital release. In the first nine months of 2026 operating cash flow was USD 338 million, against USD 235 million a year earlier, and free cash flow USD 253 million; the company reports working capital at 15.0% of annualised net sales at 2026-09-30, down from 20.8% at 2025-12-31.
Basis: 10-K_2025-12-31_tex.htm.jsonl, pages 58–59; 10-K_2025-12-31_tex.htm.jsonl, page 96; 10-K_2025-12-31_tex.htm.jsonl, pages 72–73; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7; 10-Q_2026-09-30_tex.htm.jsonl, pages 48–49

### Liquidity and funding outside debt

Liquidity at 2026-09-30 was USD 1,207 million. Letters of credit totalled USD 156 million, of which USD 149 million sit under a facility that does not reduce the revolver, so the revolver is fully available. Receivable sales of about USD 562 million in the nine months and supplier finance of USD 51 million sit outside debt, and the repurchase agreements and bonds that came with REV add contingent claims of USD 460 million and USD 619 million.
Basis: calculation Y5; 10-Q_2026-09-30_tex.htm.jsonl, page 11; 10-Q_2026-09-30_tex.htm.jsonl, pages 27–31; 10-Q_2026-09-30_tex.htm.jsonl, page 48

### Customer advances as non-debt funding

Customer advances have become a material funding float: USD 271 million short term and USD 176 million long term at 2026-09-30, against USD 44 million and USD 20 million at 2025-12-31, largely assumed with REV, whose contract liabilities were USD 359 million at closing. They fund inventory without being debt and bear interest, USD 11 million in nine months, so a slower order book or customer refunds would turn them into cash outflows.
Basis: 10-Q_2026-09-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 10

### Subsequent events and pro forma effect

After 2026-09-30 the sale of two Specialty Vehicles businesses closed on 2026-10-23 for about USD 33 million, which would lower net debt to USD 2,138 million and net leverage to 3.01x if the consideration is received in cash; the filing does not say so. A buyback authorisation of up to USD 500 million and a dividend of USD 0.17 per share are scheduled but carry no stated effect on net debt.
Basis: calculation Q1; calculation Q2; 10-Q_2026-09-30_tex.htm.jsonl, page 22; 10-Q_2026-09-30_tex.htm.jsonl, pages 33–34

### Definition and data-quality risks

Five differences limit comparison. Full-year EBITDA is calculated because the annual reports print none, so last-twelve-month figures mix a calculated year with printed interim figures. Debt at 2025-12-31 is USD 2,584 million on the balance sheet, USD 2,592 million as principal and USD 2,552 million under a line labelled net debt, and the first is used. The 2026 quarterly reports move amortisation of customer relationships and trade names out of cost of goods sold, so gross profit is not comparable with the annual reports, while operating profit is. The REV purchase price is USD 3,262 million in the annual report and USD 3,384 million in the quarterly reports, and letters of credit at 2025-12-31 are USD 85 million in one set of filings and USD 50 million in another.
Basis: calculation K1; calculation K2; calculation R1; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-K_2025-12-31_tex.htm.jsonl, page 132; 10-Q_2026-09-30_tex.htm.jsonl, page 8

### Contrary evidence and what would change the view

The strongest case that leverage is better than 3.06x is that REV earnings are only partly in the base: nine-month Adjusted EBITDA of USD 727 million exceeds EBITDA (Reported) of USD 534 million by USD 193 million of add-backs, mainly deal-related and purchase accounting items, and pro forma net sales for the nine months were USD 6,359 million against reported USD 6,169 million. The case that it is worse is that those add-backs are large and their realisation status is not stated, that FY2025 EBITDA of USD 626 million is calculated and cannot be tested against an issuer figure, and that cash interest paid is not available to test cover for 2026. A printed FY2025 Adjusted EBITDA, a pro forma EBITDA for REV or quarterly cash interest paid would settle the point.
Basis: calculation B2; calculation E2; 10-Q_2026-09-30_tex.htm.jsonl, page 22; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46

### Limitations

The ratios rest on carrying-value debt and on EBITDA that is calculated for full years, so they compare across dates only as labelled. Last-twelve-month figures are not pro forma for REV or for the 2025 sale of the tower and rough terrain cranes businesses. Covenant headroom is not calculable: the credit agreement was not supplied and no filing prints the first lien net leverage ratio. The REV purchase accounting is provisional and the 2026 reports are unaudited.
Basis: 10-Q_2026-09-30_tex.htm.jsonl, page 20; 10-Q_2026-09-30_tex.htm.jsonl, page 27

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q1 2025 | 2025-01-01 | 2025-03-31 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| H1 2025 | 2025-01-01 | 2025-06-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 4.27 | 3.63 | x | Carrying-value debt over EBITDA (Reported) calculated for the year; ESG debt is in the balance but ESG earnings only from 2024-10-08 |
| FY2025 / 2025-12-31 | 4.13 | 2.89 | x | Carrying-value debt over EBITDA (Reported) calculated for the year; before the REV merger |
| 2026-03-31 | 5.36 | 4.59 | x | Last-twelve-month EBITDA (Reported) of USD 513 million; REV earnings only from 2026-02-02, not pro forma |
| 2026-06-30 | 4.35 | 3.70 | x | Last-twelve-month EBITDA (Reported) of USD 617 million; REV earnings only from 2026-02-02, not pro forma |
| 2026-09-30 | 3.63 | 3.06 | x | Last-twelve-month EBITDA (Reported) of USD 710 million; REV earnings only from 2026-02-02, not pro forma |

Leverage for interim dates uses last-twelve-month EBITDA that includes REV only from 2026-02-02 and is not pro forma.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 11.42 | x | EBITDA (Reported) calculated for the year over cash interest paid in the debt note; ESG debt outstanding for about a quarter of the year |
| FY2025 / 2025-12-31 | 4.01 | x | EBITDA (Reported) calculated for the year over cash interest paid in the debt note; full year of acquisition debt |
| 2026-03-31 | Not supplied: cash interest paid is not printed in the quarterly reports | x | Interest cover on cash interest paid cannot be stated for interim dates; EBITDA over total interest expense is in the register |
| 2026-06-30 | Not supplied: cash interest paid is not printed in the quarterly reports | x | Interest cover on cash interest paid cannot be stated for interim dates; EBITDA over total interest expense is in the register |
| 2026-09-30 | Not supplied: cash interest paid is not printed in the quarterly reports | x | Interest cover on cash interest paid cannot be stated for interim dates; EBITDA over total interest expense is in the register |

Interest cover on cash interest paid is available for fiscal years only because the quarterly reports do not print cash interest.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 388 | 800 | US$m | Cash as reported; revolver commitment USD 800 million, no revolver amount outstanding and nothing used under the revolver-reducing letter of credit facility; the USD 400 million facility and bilateral letters of credit USD 95 million in total do not reduce availability |
| FY2025 / 2025-12-31 | 772 | 800 | US$m | Cash as reported; revolver commitment USD 800 million, undrawn; letters of credit USD 85 million in the annual report and USD 50 million in later comparatives, none under the revolver-reducing facility |
| 2026-03-31 | 392 | 630 | US$m | Cash as reported; revolver commitment USD 800 million less USD 170 million drawn; company-stated liquidity USD 1,022 million |
| 2026-06-30 | 407 | 690 | US$m | Cash as reported; revolver commitment USD 800 million less USD 110 million drawn; company-stated liquidity USD 1,097 million |
| 2026-09-30 | 407 | 800 | US$m | Cash as reported; revolver commitment USD 800 million, undrawn; letters of credit USD 156 million in total, of which USD 149 million under the USD 400 million facility and USD 7 million bilateral, none under the revolver-reducing facility; company-stated liquidity USD 1,207 million |

Undrawn committed facilities is the revolver commitment less drawn amounts, and the other letter of credit lines do not reduce it.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 | 2 | US$m | Maturity ladder at 2025-12-31 from the annual report, principal portion; excludes finance leases and secured borrowings; the 2026 amount is the printed USD 2 million |
| 2027 | 0 | US$m | Printed as a dash; read as nil because the ladder adds to the printed total only with nil |
| 2028 | 0 | US$m | Printed as a dash; read as nil because the ladder adds to the printed total only with nil |
| 2029 | 600 | US$m | The 5% senior notes due 2029-05-15 |
| 2030 | 0 | US$m | Printed as a dash; read as nil because the ladder adds to the printed total only with nil |
| Thereafter | 1990 | US$m | The 6.25% senior notes due 2032-10-15 and the term loan due 2031-10-08; no ladder is printed at 2026-09-30 |

The ladder is drawn at 2025-12-31 because no later ladder is printed, and it excludes finance leases and secured borrowings.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-03-31 | LTM 2026-06-30 | LTM 2026-09-30 | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | USD 5,127 million | USD 5,421 million | USD 5,926 million | USD 6,677 million | USD 7,487 million | Reported for fiscal years; last twelve months for interim dates | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Operating profit | USD 526 million | USD 475 million | USD 324 million | USD 382 million | USD 425 million | Reported for fiscal years; last twelve months for interim dates | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| EBITDA (Reported) | USD 605 million | USD 626 million | USD 513 million | USD 617 million | USD 710 million | Calculated for fiscal years; FY2025 plus printed interim stubs for last twelve months | 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36; 10-Q_2026-06-30_tex.htm.jsonl, pages 42–43; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46 |
| Interest expense | USD 89 million | USD 177 million | USD 181 million | USD 187 million | USD 192 million | Reported for fiscal years; last twelve months for interim dates | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Total debt at carrying value | USD 2,584 million | USD 2,584 million | USD 2,749 million | USD 2,687 million | USD 2,578 million | Balance-sheet carrying value at each date | 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Cash and cash equivalents | USD 388 million | USD 772 million | USD 392 million | USD 407 million | USD 407 million | Balance-sheet cash at each date | 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Net debt | USD 2,196 million | USD 1,812 million | USD 2,357 million | USD 2,280 million | USD 2,171 million | Total debt less cash | 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Undrawn revolver | USD 800 million | USD 800 million | USD 630 million | USD 690 million | USD 800 million | USD 800 million commitment less drawn amount | 10-K_2025-12-31_tex.htm.jsonl, page 130; 10-Q_2026-03-31_tex.htm.jsonl, page 20; 10-Q_2026-06-30_tex.htm.jsonl, page 23; 10-Q_2026-09-30_tex.htm.jsonl, page 25 |
| Liquidity (cash plus undrawn revolver) | USD 1,188 million | USD 1,572 million | USD 1,022 million | USD 1,097 million | USD 1,207 million | Equals the company-stated liquidity at each date | 10-K_2024-12-31_tex.htm.jsonl, page 67; 10-K_2025-12-31_tex.htm.jsonl, page 71; 10-Q_2026-03-31_tex.htm.jsonl, page 37; 10-Q_2026-06-30_tex.htm.jsonl, page 44; 10-Q_2026-09-30_tex.htm.jsonl, page 47 |
| Total debt / EBITDA | 4.27x | 4.13x | 5.36x | 4.35x | 3.63x | Carrying-value debt over EBITDA (Reported) | See the calculation register |
| Net debt / EBITDA | 3.63x | 2.89x | 4.59x | 3.70x | 3.06x | Net debt over EBITDA (Reported) | See the calculation register |
| EBITDA / cash interest | 11.42x | 4.01x | Not supplied: cash interest paid is not printed | Not supplied: cash interest paid is not printed | Not supplied: cash interest paid is not printed | EBITDA (Reported) over cash interest paid; fiscal years only | 10-K_2025-12-31_tex.htm.jsonl, page 132 |
| EBITDA / interest expense | 6.80x | 3.54x | 2.83x | 3.30x | 3.70x | EBITDA (Reported) over total interest expense | See the calculation register |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2584 | 388 | 2196 | US$m | Carrying value net of issuance costs and discount; includes secured borrowings USD 18 million, finance leases USD 12 million and other debt USD 1 million; principal USD 2,600 million on the maturity ladder, which excludes secured borrowings and finance leases; reported cash |
| FY2025 / 2025-12-31 | 2584 | 772 | 1812 | US$m | Carrying value net of issuance costs and discount; includes secured borrowings USD 21 million, finance leases USD 11 million and other debt USD 2 million; principal USD 2,592 million on the maturity ladder, which excludes secured borrowings and finance leases; reported cash |
| 2026-03-31 | 2749 | 392 | 2357 | US$m | Carrying value including revolver USD 170 million, secured borrowings USD 20 million, finance leases USD 9 million and other debt USD 1 million; principal total not printed at this date; reported cash |
| 2026-06-30 | 2687 | 407 | 2280 | US$m | Carrying value including revolver USD 110 million, secured borrowings USD 20 million and finance leases USD 9 million; principal total not printed at this date; reported cash |
| 2026-09-30 | 2578 | 407 | 2171 | US$m | Carrying value including secured borrowings USD 20 million and finance leases USD 11 million with the revolver undrawn; principal total not printed at this date (notes USD 600 million and USD 750 million, term loan net of discount USD 1,227 million); reported cash |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 2592 | -8 | 2584 | US$m | Reconciling items are unamortised original issue discount -5, unamortised debt issuance costs -35, secured borrowings 21 and finance leases 11 that the ladder leaves out, net -8 (calculation P1); carrying value is Gross debt of the Net debt data row |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Sale of the Capacity and LayMor businesses completed | 2026-10-23 | -33 | 2138 | 3.01 | US$m | Event after the latest balance sheet 2026-09-30: sale of Capacity and LayMor for total consideration of about USD 33 million, completed 2026-10-23; the filing does not state the cash share or costs, so the consideration is treated as cash received; pro forma net debt USD 2,138 million is 2026-09-30 net debt USD 2,171 million less USD 33 million, over last-twelve-month EBITDA (Reported) of USD 710 million; a buyback authorisation of up to USD 500 million and a USD 0.17 per share dividend carry no stated net debt effect |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 | 5127 | 605 | US$m | Revenue as reported; the column holds EBITDA (Reported), calculated as operating profit plus depreciation plus amortisation of intangible assets, not an issuer-adjusted figure; annual period |
| FY2025 | 5421 | 626 | US$m | Revenue as reported; the column holds EBITDA (Reported), calculated on the same basis as FY2024, not an issuer-adjusted figure; annual period, before REV |

The EBITDA column holds EBITDA (Reported) calculated for full years, not an issuer-adjusted figure, and excludes REV.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Revolving credit facility due 2029-10-08 (commitment USD 800 million) | 1 | Yes | 0 | 0.00 | US$m | Undrawn at 2026-09-30; first priority security over substantially all domestic assets and equity interests in material foreign subsidiaries; guaranteed by material domestic subsidiaries; obligors are Terex Corporation and borrowing subsidiaries under the credit agreement; cumulative leverage over last-twelve-month EBITDA (Reported) of USD 710 million |
| Term loan due 2031-10-08 | 1 | Yes | 1212 | 1.71 | US$m | Carrying value net of USD 15 million issuance costs and USD 4 million discount; same security and guarantors as the revolver, no maintenance covenant; cumulative leverage includes the revolver |
| 6.25% senior notes due 2032-10-15 | 2 | No | 737 | Not supplied: the 5% senior notes, whose ranking no source states, are outside the stack, so cumulative debt through this rank is not stated | US$m | Described in the annual report risk factor as senior unsecured; carrying value net of USD 13 million issuance costs; issuer Terex Corporation, guaranteed jointly and severally by certain domestic subsidiaries |

The stack leaves out the 5% notes, secured borrowings and finance leases because no source states their ranking, so it does not show all debt.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Opening: EBITDA (Reported), 9M 2026 | 534 | US$m | Opening measure, reported EBITDA as printed in the issuer reconciliation |
| Restructuring and other | -8 | US$m | Classification restructuring; realisation status not stated; net credit from the release of a contingent liability in ES and a reduction in force and plant closure in Aerials |
| Deal related | 90 | US$m | Classification transaction costs; realisation status not stated; REV costs including stock compensation acceleration, severance, retention and integration |
| Purchase price accounting | 91 | US$m | Classification other stated (purchase accounting); realisation status not stated; REV inventory step-up and replacement award compensation |
| Divestitures | 20 | US$m | Classification other stated (divestiture losses and gains); realisation status not stated; net of a gain on the earlier Cranes sale and losses on held-for-sale and sold businesses in MP and SV |
| Closing: Adjusted EBITDA (issuer-adjusted), 9M 2026 | 727 | US$m | Closing measure, issuer-adjusted EBITDA as printed; opening plus the four stated adjustments equals closing with no plug |

The bridge covers nine months of 2026 only because the annual reports state no Adjusted EBITDA.

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_tex.htm.jsonl | Annual report, Form 10-K, FY2024 | FY2024; FY2022 and FY2023 comparatives | USD | millions | Terex Corporation consolidated; ESG from 2024-10-08 | US GAAP; audited | Tier 1 (audited statements) | FY2024 base year, pension note, FY2024 debt ladder and covenant text | Pre-REV perimeter; superseded by comparatives in the FY2025 report for the main statements |
| 10-K_2025-12-31_tex.htm.jsonl | Annual report, Form 10-K, FY2025 | FY2025; FY2023 and FY2024 comparatives | USD | millions | Terex Corporation consolidated; excludes REV | US GAAP; audited, KPMG LLP | Tier 1 (audited statements) | FY2025 statements, debt, lease and note disclosures, cash interest paid | No EBITDA reconciliation; no retirement plans note; amortisation not recast |
| 10-Q_2026-03-31_tex.htm.jsonl | Quarterly report, Form 10-Q, Q1 2026 | Three months to 2026-03-31; Q1 2025 comparative | USD | millions | Terex Corporation consolidated; REV from 2026-02-02 | US GAAP; unaudited | Tier 2b (unaudited without auditor report) | Q1 2026 statements, EBITDA reconciliation, revolver draw | Cash flow cumulative; working capital ratio on pro forma sales |
| 10-Q_2026-06-30_tex.htm.jsonl | Quarterly report, Form 10-Q, Q2 2026 | Three and six months to 2026-06-30; 2025 comparatives | USD | millions | Terex Corporation consolidated; REV from 2026-02-02 | US GAAP; unaudited | Tier 2b (unaudited without auditor report) | H1 2026 statements, EBITDA reconciliation, revolver draw | Bilateral letters of credit at 2025-12-31 differ from the Q1 report |
| 10-Q_2026-09-30_tex.htm.jsonl | Quarterly report, Form 10-Q, Q3 2026 | Three and nine months to 2026-09-30; 2025 comparatives | USD | millions | Terex Corporation consolidated; REV from 2026-02-02 | US GAAP; unaudited | Tier 2b (unaudited without auditor report) | Latest balance sheet, debt, liquidity, EBITDA reconciliation, subsequent events | REV purchase accounting provisional; no cash interest paid |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Terex Corporation | Issuer, parent registrant and borrower under the credit agreement | December 31 | USD | millions | Consolidated with majority-owned and controlled subsidiaries | US GAAP | FY2022 to FY2025; Q1, H1 and 9M 2025 and 2026 |
| Certain material domestic subsidiaries | Guarantors of the credit agreement and both note series; not named in the filings | December 31 | USD | millions | Inside the consolidated perimeter; no guarantor financial information printed | US GAAP | Not supplied: no separate statements |
| REV Group, Inc. | Acquired business, consolidated as the Specialty Vehicles segment from 2026-02-02 | Not supplied: not stated in the supplied filings | USD | millions | Inside the perimeter from 2026-02-02; purchase accounting provisional | US GAAP | Q1 2026 onward; pre-closing history not supplied |
| Terex Financial Services (TFS) | Financing facilitator inside Corporate and Other; no separate finance debt or cash printed | December 31 | USD | millions | Inside the consolidated perimeter; no industrial versus finance split printed | US GAAP | Not supplied: no separate statements |

Events after the balance-sheet dates are flagged with their dates and kept out of period figures: the REV merger closed on 2026-02-02, after the FY2025 balance sheet; the sale of Capacity and LayMor closed on 2026-10-23; a buyback authorisation was made in October 2026 and a dividend of USD 0.17 per share is payable on 2026-12-18.
Basis: 10-K_2025-12-31_tex.htm.jsonl, pages 137–138; 10-Q_2026-09-30_tex.htm.jsonl, pages 33–34

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Sign convention: costs and outflows shown with a minus sign, as the filings print them in brackets | 10-Q_2026-09-30_tex.htm.jsonl | Presentation | Brackets | Minus sign | Plain numbers in checked tables | All periods |
| Total Debt set to current portion plus long-term debt at carrying value | 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-09-30_tex.htm.jsonl, page 5 | Definition | Two balance sheet lines | One Total Debt figure | Carrying value net of issuance costs, as the method requires | All balance sheet dates |
| EBITDA (Reported) calculated for full years as operating profit plus depreciation plus amortisation of intangible assets | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127 | Derivation | Not printed | FY2024 605; FY2025 626 | Annual reports print no EBITDA; the formula reproduces the issuer interim EBITDA within 1 on four test periods | FY2024; FY2025 |
| Interim EBITDA taken as printed in the issuer reconciliation | 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36; 10-Q_2026-06-30_tex.htm.jsonl, pages 42–43; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46 | Source figure | As printed | As printed | Issuer unadjusted EBITDA | Q1, H1 and 9M of 2025 and 2026 |
| Last-twelve-month figures built as FY2025 plus current stub less prior-year stub | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 | Derived period | Stubs and full year | LTM values in the constructed period register | Every component is printed or calculated; not pro forma | 2026-03-31; 2026-06-30; 2026-09-30 |
| Balance sheet captions: FY2025 split lines taken from the Q3 report comparative; FY2024 and Q1 2026 keep grouped captions | 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-09-30_tex.htm.jsonl, page 5 | Caption alignment | Grouped lines | Split lines where printed | Totals tie to the annual report; no figure is moved between totals | FY2025; FY2024; Q1 2026 |
| Maturity ladder dashes read as nil | 10-K_2025-12-31_tex.htm.jsonl, page 132 | Reading of a dash | Dash | 0 | The printed ladder adds to the printed total only with nil | 2027; 2028; 2030 |
| Interest expense shown as a positive amount in last-twelve-month and cover calculations | 10-K_2025-12-31_tex.htm.jsonl, page 94 | Presentation | Negative | Positive | Denominator of a cover ratio | All periods |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q1 2025 | Q1 2026 | H1 2025 | H1 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 5127 | 5421 | 1229 | 1734 | 2716 | 3972 | 4103 | 6169 | USD millions | Reported; 2026 columns include REV from 2026-02-02 | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Cost of goods sold | -4059 | -4370 | -982 | -1528 | -2160 | -3321 | -3248 | -5083 | USD millions | Reported; FY columns print no separate amortisation line, 2025 interim columns are recast to show it separately | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Gross profit | 1068 | 1051 | 247 | 206 | 556 | 651 | 855 | 1086 | USD millions | Reported; FY columns and 2025 interim columns are not on the same amortisation classification | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Selling, general and administrative expenses | -542 | -576 | -161 | -241 | -323 | -451 | -465 | -650 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Amortization of purchased intangibles | Not supplied: the annual statement prints no separate amortisation line | Not supplied: the annual statement prints no separate amortisation line | -17 | -47 | -35 | -95 | -52 | -148 | USD millions | Reported; separate line only in the 2026 reports and their recast 2025 comparatives | 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Operating profit | 526 | 475 | 69 | -82 | 198 | 105 | 338 | 288 | USD millions | Reported; EBIT; unaffected by the 2026 amortisation presentation | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Depreciation and amortization | 82 | 158 | 39 | 77 | 79 | 163 | 113 | 246 | USD millions | Reported cash flow statement line; the issuer own EBITDA reconciliation also deducts non-cash interest costs | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| EBITDA (Reported) | 605 | 626 | 106 | -7 | 272 | 263 | 450 | 534 | USD millions | Interim columns as printed in the issuer reconciliation of net income to EBITDA; FY columns calculated as operating profit plus depreciation plus amortisation of intangible assets because the annual reports print none | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36; 10-Q_2026-06-30_tex.htm.jsonl, pages 42–43; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46 |
| EBITDA (Adjusted) | Not supplied: the annual report states no Adjusted EBITDA | Not supplied: the annual report states no Adjusted EBITDA | 128 | 173 | 310 | 442 | 495 | 727 | USD millions | Issuer-adjusted as printed in the 2026 reports; add-backs are restructuring, deal related, purchase price accounting, divestitures and litigation costs | 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36; 10-Q_2026-06-30_tex.htm.jsonl, pages 42–43; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46 |
| Interest income | 13 | 12 | 2 | 4 | 4 | 9 | 7 | 14 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Interest expense | -89 | -177 | -43 | -47 | -87 | -97 | -132 | -147 | USD millions | Reported; includes factoring discounts and, from 2026, interest on customer advances | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Other (expense) income – net | -42 | -18 | -2 | -1 | Not supplied: printed as a dash in the filing | -4 | -4 | -8 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Income before income taxes | 408 | 292 | 26 | -126 | 115 | 13 | 209 | 147 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| (Provision for) benefit from income taxes | -73 | -71 | -5 | 33 | -22 | 4 | -51 | -16 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Income from continuing operations | 335 | 221 | 21 | -93 | 93 | 17 | 158 | 131 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Income from discontinued operations – net of tax | Not supplied: printed as a dash in the filing | Not supplied: printed as a dash in the filing | Not supplied: printed as a dash in the filing | 4 | Not supplied: printed as a dash in the filing | 4 | Not supplied: printed as a dash in the filing | 4 | USD millions | Reported; caption is gain on disposition in the Q1 report and income from discontinued operations in the Q2 and Q3 reports | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Net income | 335 | 221 | 21 | -89 | 93 | 21 | 158 | 135 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 89; 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-06-30_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 |
| Stock-based compensation expense | 30 | 32 | 10 | 36 | 18 | 51 | 25 | 63 | USD millions | Reported cash flow statement line | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Net sales: Environmental Solutions (ES) | 822 | 1691 | 399 | 412 | 829 | 867 | 1264 | 1267 | USD millions | Reported segment net sales, issuer order; segment rows plus Corporate and Other sum to net sales | 10-K_2025-12-31_tex.htm.jsonl, pages 115–116; 10-Q_2026-03-31_tex.htm.jsonl, pages 14–15; 10-Q_2026-06-30_tex.htm.jsonl, pages 14–15; 10-Q_2026-09-30_tex.htm.jsonl, pages 15–16 |
| Net sales: Materials Processing (MP) | 1902 | 1681 | 382 | 419 | 836 | 883 | 1253 | 1317 | USD millions | Reported segment net sales | 10-K_2025-12-31_tex.htm.jsonl, pages 115–116; 10-Q_2026-03-31_tex.htm.jsonl, pages 14–15; 10-Q_2026-06-30_tex.htm.jsonl, pages 14–15; 10-Q_2026-09-30_tex.htm.jsonl, pages 15–16 |
| Net sales: Specialty Vehicles (SV) | Not supplied: the segment did not exist before the 2026 merger | Not supplied: the segment did not exist before the 2026 merger | Not supplied: the segment did not exist before the 2026 merger | 436 | Not supplied: the segment did not exist before the 2026 merger | 1086 | Not supplied: the segment did not exist before the 2026 merger | 1744 | USD millions | Reported segment net sales; segment created by the REV merger | 10-Q_2026-03-31_tex.htm.jsonl, pages 14–15; 10-Q_2026-06-30_tex.htm.jsonl, pages 14–15; 10-Q_2026-09-30_tex.htm.jsonl, pages 15–16 |
| Net sales: Aerials | 2410 | 2060 | 450 | 469 | 1057 | 1142 | 1594 | 1851 | USD millions | Reported segment net sales | 10-K_2025-12-31_tex.htm.jsonl, pages 115–116; 10-Q_2026-03-31_tex.htm.jsonl, pages 14–15; 10-Q_2026-06-30_tex.htm.jsonl, pages 14–15; 10-Q_2026-09-30_tex.htm.jsonl, pages 15–16 |
| Net sales: Corporate and Other / Eliminations | -7 | -11 | -2 | -2 | -6 | -6 | -8 | -10 | USD millions | Reported; one row for corporate and eliminations | 10-K_2025-12-31_tex.htm.jsonl, pages 115–116; 10-Q_2026-03-31_tex.htm.jsonl, pages 14–15; 10-Q_2026-06-30_tex.htm.jsonl, pages 14–15; 10-Q_2026-09-30_tex.htm.jsonl, pages 15–16 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | Q1 2025 | Q1 2026 | H1 2025 | H1 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 335 | 221 | 21 | -89 | 93 | 21 | 158 | 135 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Depreciation and amortization | 82 | 158 | 39 | 77 | 79 | 163 | 113 | 246 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| (Gain) loss on sale of business | Not supplied: printed as a dash in the filing | -41 | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | USD millions | Reported in the annual statement only; FY2025 is the tower and rough terrain cranes sale | 10-K_2025-12-31_tex.htm.jsonl, pages 96–97 |
| Deferred taxes | -10 | -3 | Not supplied: printed as a dash in the filing | -43 | -9 | -39 | 13 | -35 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Stock-based compensation expense | 30 | 32 | 10 | 36 | 18 | 51 | 25 | 63 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Inventory and other non-cash charges | 25 | 7 | 2 | 110 | 9 | 95 | 14 | 102 | USD millions | Reported; 2026 columns include the REV inventory step-up | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Receivables | 16 | -46 | -134 | -76 | -236 | -264 | -163 | -251 | USD millions | Reported change, net of acquisitions and divestitures | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Inventories | 77 | 39 | -43 | -29 | -59 | -42 | -73 | -48 | USD millions | Reported change, net of acquisitions and divestitures | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Trade accounts payable | -241 | 118 | 102 | 64 | 184 | 157 | 140 | 136 | USD millions | Reported change, net of acquisitions and divestitures | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Other assets and liabilities | 15 | -33 | -19 | -82 | Not supplied: printed as a dash in the filing | -46 | 9 | -14 | USD millions | Reported change | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Foreign exchange and other operating activities, net | -3 | -12 | 1 | 1 | 2 | 1 | -1 | 4 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Net Cash from Operating Activities | 326 | 440 | -21 | -31 | 81 | 97 | 235 | 338 | USD millions | Reported; interest paid is classified in operating activities | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Capital expenditures | -137 | -118 | -36 | -26 | -60 | -59 | -84 | -90 | USD millions | Reported total capital expenditures; maintenance and growth split not printed | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Proceeds from sale of capital assets | 1 | 3 | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | USD millions | Reported in the annual statements only; the quarterly statements include it in other investing | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Acquisitions, net of cash acquired, and investments | -2001 | Not supplied: printed as a dash in the filing | -2 | -467 | Not supplied: printed as a dash in the filing | -467 | Not supplied: printed as a dash in the filing | -467 | USD millions | Reported; 2026 columns are the REV merger | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Proceeds from sale of business | Not supplied: printed as a dash in the filing | 109 | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | USD millions | Reported in the annual statements only | 10-K_2025-12-31_tex.htm.jsonl, pages 96–97 |
| Other investing activities, net | 10 | 38 | 12 | 26 | 22 | 38 | 40 | 38 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Net Cash from Investing Activities | -2127 | 32 | -26 | -467 | -38 | -488 | -44 | -519 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Repayments of debt | -222 | -104 | -61 | -70 | -84 | -168 | -92 | -311 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Proceeds from issuance of debt | 2217 | 97 | 61 | 235 | 87 | 270 | 95 | 300 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Payment of debt issuance costs | -41 | Not supplied: printed as a dash in the filing | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | Not supplied: not a separate line in the quarterly statements | USD millions | Reported in the annual statements only | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97 |
| Share repurchases | -49 | -56 | -32 | Not supplied: printed as a dash in the filing | -55 | -3 | -55 | -75 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Dividends paid | -46 | -45 | -11 | -19 | -22 | -39 | -34 | -58 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Other financing activities, net | -22 | -15 | -7 | -24 | -10 | -30 | -12 | -33 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Net Cash from Financing Activities | 1837 | -123 | -50 | 122 | -84 | 30 | -98 | -177 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| FX Effect on Cash | -19 | 35 | 7 | -4 | 27 | -4 | 28 | -7 | USD millions | Reported effect of exchange rate changes | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Net Cash Change | 17 | 384 | -90 | -380 | -14 | -365 | 121 | -365 | USD millions | Reported; operating plus investing plus financing plus the FX effect | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Opening Cash | 371 | 388 | 388 | 772 | 388 | 772 | 388 | 772 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Closing Cash | 388 | 772 | 298 | 392 | 374 | 407 | 509 | 407 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 91; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 6; 10-Q_2026-09-30_tex.htm.jsonl, pages 6–7 |
| Cash Interest Paid | 53 | 156 | Not supplied: cash interest paid is not printed in the quarterly reports | Not supplied: cash interest paid is not printed in the quarterly reports | Not supplied: cash interest paid is not printed in the quarterly reports | Not supplied: cash interest paid is not printed in the quarterly reports | Not supplied: cash interest paid is not printed in the quarterly reports | Not supplied: cash interest paid is not printed in the quarterly reports | USD millions | Reported in the debt note for fiscal years only; interest paid is not printed in the quarterly reports | 10-K_2025-12-31_tex.htm.jsonl, page 132 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 388 | 772 | 392 | 407 | 407 | USD millions | Reported; no restricted-cash split is printed in the 2026 reports | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Receivables | 643 | 712 | 970 | 1157 | 1124 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Inventories | 1147 | 1109 | 1656 | 1656 | 1631 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Prepaid and other current assets | 142 | 132 | 153 | 156 | 236 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Total current assets | 2320 | 2725 | 3171 | 3376 | 3398 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Property, plant and equipment – net | 714 | 760 | 935 | 966 | 966 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Goodwill | 1093 | 1091 | 2539 | 2558 | 2513 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Intangible assets – net | 1107 | 1027 | 2986 | 2906 | 2901 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Long-term deferred tax asset | Not supplied: the annual report prints it inside Other assets | 207 | Not supplied: the Q1 report prints it inside Other assets | 157 | 151 | USD millions | Reported separately from the Q2 report; FY2025 is the Q3 report comparative; other columns group it in Other assets | 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Other assets | 496 | 329 | 557 | 381 | 367 | USD millions | Reported; FY2024 and Q1 2026 captions include the deferred tax asset, other columns exclude it | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Total Assets | 5730 | 6139 | 10188 | 10344 | 10296 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Current portion of long-term debt | 4 | 6 | 4 | 4 | 24 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Trade accounts payable | 580 | 683 | 931 | 1022 | 986 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Accrued compensation and benefits | 117 | 123 | 168 | 165 | 172 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Short-term customer advances | Not supplied: the annual report prints it inside Other current liabilities | 44 | 215 | 242 | 271 | USD millions | Reported separately from the Q1 report; FY2025 is the Q3 report comparative of the audited balance | 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Other current liabilities | 372 | 331 | 406 | 424 | 476 | USD millions | Reported; FY2024 caption includes customer advances, later columns exclude them | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Total current liabilities | 1073 | 1187 | 1724 | 1857 | 1929 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Long-term debt, less current portion | 2580 | 2578 | 2745 | 2683 | 2554 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Long-term customer advances | Not supplied: the annual report prints it inside Other non-current liabilities | 20 | 198 | 187 | 176 | USD millions | Reported separately from the Q1 report; FY2025 is the Q3 report comparative of the audited balance | 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Long-term deferred tax liabilities | Not supplied: the annual report prints it inside Other non-current liabilities | 8 | 398 | 396 | 411 | USD millions | Reported separately from the Q1 report; FY2025 is the Q3 report comparative of the audited balance | 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Other non-current liabilities | 245 | 251 | 301 | 296 | 268 | USD millions | Reported; FY2024 caption includes customer advances and deferred taxes, later columns exclude them | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Total Liabilities | 3898 | 4044 | 5366 | 5419 | 5338 | USD millions | Reported | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Total Equity | 1832 | 2095 | 4822 | 4925 | 4958 | USD millions | Reported total stockholders equity; no temporary equity or minority interest is printed | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |
| Total Debt | 2584 | 2584 | 2749 | 2687 | 2578 | USD millions | Normalized: current portion plus long-term debt at balance-sheet carrying value, net of issuance costs and discount; includes secured borrowings and finance leases | 10-K_2024-12-31_tex.htm.jsonl, page 90; 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-06-30_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5% senior notes due 2029-05-15 | Senior notes | 598 | 600 | Not applicable: not a revolving facility | Not applicable: not a revolving facility | Not supplied: the filings do not state security for these notes, which are guaranteed jointly and severally by certain domestic subsidiaries | Not supplied: the filings do not state a ranking beyond the instrument name | USD | 598 | Not applicable | 5% | fixed | Not applicable | Not applicable | Not applicable | 2029-05-15 | 0 | 10-Q_2026-09-30_tex.htm.jsonl, pages 24–25; 10-Q_2026-09-30_tex.htm.jsonl, page 28; 10-Q_2026-09-30_tex.htm.jsonl, page 29 |
| 6.25% senior notes due 2032-10-15 | Senior notes | 737 | 750 | Not applicable: not a revolving facility | Not applicable: not a revolving facility | Unsecured (senior unsecured notes per the annual report risk factor); guaranteed jointly and severally by certain domestic subsidiaries | Senior unsecured | USD | 737 | Not applicable | 6.25% | fixed | Not applicable | Not applicable | Not applicable | 2032-10-15 | 0 | 10-Q_2026-09-30_tex.htm.jsonl, pages 24–25; 10-Q_2026-09-30_tex.htm.jsonl, page 28; 10-K_2025-12-31_tex.htm.jsonl, page 32 |
| Term loan due 2031-10-08 (New Term Facility) | Term loan | 1212 | Not supplied: the filing prints carrying value and a net-of-discount figure of USD 1,227 million, not the principal | Not applicable: not a revolving facility | Not applicable: not a revolving facility | Secured: first priority security over substantially all domestic assets and equity interests in material foreign subsidiaries; guaranteed by material domestic subsidiaries | First priority secured | USD | 1212 | Not applicable | Term SOFR plus 1.75% | floating | Term SOFR | 175 | Not applicable | 2031-10-08 | Not supplied: scheduled amortisation is not stated | 10-Q_2026-09-30_tex.htm.jsonl, pages 25–26; 10-K_2025-12-31_tex.htm.jsonl, page 128 |
| Revolving credit facility due 2029-10-08 | Revolving line of credit | 0 | Not applicable: revolving facility | 0 | 800 | Secured: same security and guarantors as the term loan | First priority secured | USD | 0 | Not applicable | Not supplied: the base margin is not printed; only a reduction of 12.5 to 25 basis points in August 2025 | floating | Not supplied: the reference rate is not stated for the revolver | Not supplied: the spread is not printed | Not applicable | 2029-10-08 | Not applicable: revolving facility | 10-Q_2026-09-30_tex.htm.jsonl, pages 25–26; 10-Q_2026-09-30_tex.htm.jsonl, page 47 |
| Secured borrowings (VAT receivable financing) | Secured borrowing | 20 | Not supplied: principal is not stated separately from the liability | Not applicable: not a revolving facility | Not applicable: not a revolving facility | Secured by pledged VAT receivables | Not supplied: the filings do not state a ranking | Not supplied: the denomination is not stated | 20 | Not applicable | Not supplied: no rate is stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not applicable | Not supplied: classified current on expected VAT refund timing within 12 months; no maturity date stated | Not supplied: not stated | 10-Q_2026-09-30_tex.htm.jsonl, page 25; 10-Q_2026-09-30_tex.htm.jsonl, page 28 |
| Finance lease obligations | Finance leases | 11 | Not supplied: minimum lease payments are not printed in the quarterly report | Not applicable: not a revolving facility | Not applicable: not a revolving facility | Not supplied: the filings do not state security | Not supplied: the filings do not state a ranking | Not supplied: the denomination is not stated | 11 | Not applicable | Not supplied: no rate is stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not applicable | Not supplied: maturities are not printed in the quarterly report | Not supplied: not stated | 10-Q_2026-09-30_tex.htm.jsonl, page 25 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM to 2026-03-31 | USD 626m | USD -7m | USD 106m | USD 513m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| Net sales | LTM to 2026-03-31 | USD 5,421m | USD 1,734m | USD 1,229m | USD 5,926m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| Operating profit | LTM to 2026-03-31 | USD 475m | USD -82m | USD 69m | USD 324m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| Interest expense | LTM to 2026-03-31 | USD 177m | USD 47m | USD 43m | USD 181m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| EBITDA (Adjusted) | LTM to 2026-03-31 | Not supplied: the annual report states no Adjusted EBITDA | USD 173m | USD 128m | Not calculable: the full-year component is missing | Not Calculable | 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36 | Every component must be available; the annual report states no Adjusted EBITDA |
| EBITDA (Reported) | LTM to 2026-06-30 | USD 626m | USD 263m | USD 272m | USD 617m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-06-30_tex.htm.jsonl, pages 42–43 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| Net sales | LTM to 2026-06-30 | USD 5,421m | USD 3,972m | USD 2,716m | USD 6,677m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-06-30_tex.htm.jsonl, page 4 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| Operating profit | LTM to 2026-06-30 | USD 475m | USD 105m | USD 198m | USD 382m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-06-30_tex.htm.jsonl, page 4 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| Interest expense | LTM to 2026-06-30 | USD 177m | USD 97m | USD 87m | USD 187m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-06-30_tex.htm.jsonl, page 4 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| EBITDA (Adjusted) | LTM to 2026-06-30 | Not supplied: the annual report states no Adjusted EBITDA | USD 442m | USD 310m | Not calculable: the full-year component is missing | Not Calculable | 10-Q_2026-06-30_tex.htm.jsonl, pages 42–43 | Every component must be available; the annual report states no Adjusted EBITDA |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 626m | USD 534m | USD 450m | USD 710m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| Net sales | LTM to 2026-09-30 | USD 5,421m | USD 6,169m | USD 4,103m | USD 7,487m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-09-30_tex.htm.jsonl, page 4 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| Operating profit | LTM to 2026-09-30 | USD 475m | USD 288m | USD 338m | USD 425m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-09-30_tex.htm.jsonl, page 4 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| Interest expense | LTM to 2026-09-30 | USD 177m | USD 147m | USD 132m | USD 192m | Calculated | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-09-30_tex.htm.jsonl, page 4 | FY2025 plus current stub less prior-year stub; REV from 2026-02-02 only; not pro forma |
| EBITDA (Adjusted) | LTM to 2026-09-30 | Not supplied: the annual report states no Adjusted EBITDA | USD 727m | USD 495m | Not calculable: the full-year component is missing | Not Calculable | 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46 | Every component must be available; the annual report states no Adjusted EBITDA |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 2584 | 10-K_2025-12-31_tex.htm.jsonl, page 95 | 605 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127 | FY2024 / 2024-12-31 | USD | US$m | 4.27 | Calculated | Tier 1 (audited) | EBITDA (Reported) calculated for the year from operating profit, depreciation and amortisation of intangibles; ESG earnings only from 2024-10-08 against the full ESG debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2196 | 10-K_2025-12-31_tex.htm.jsonl, page 95 | 605 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127 | FY2024 / 2024-12-31 | USD | US$m | 3.63 | Calculated | Tier 1 (audited) | EBITDA (Reported) calculated for the year from operating profit, depreciation and amortisation of intangibles; ESG earnings only from 2024-10-08 against the full ESG debt |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 605 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127 | 53 | 10-K_2025-12-31_tex.htm.jsonl, page 132 | FY2024 / 2024-12-31 | USD | US$m | 11.42 | Calculated | Tier 1 (audited) | EBITDA (Reported) calculated for the year from operating profit, depreciation and amortisation of intangibles; ESG earnings only from 2024-10-08 against the full ESG debt |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 2584 | 10-K_2025-12-31_tex.htm.jsonl, page 95 | 626 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127 | FY2025 / 2025-12-31 | USD | US$m | 4.13 | Calculated | Tier 1 (audited) | EBITDA (Reported) calculated for the year, not printed by the issuer; perimeter excludes REV |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1812 | 10-K_2025-12-31_tex.htm.jsonl, page 95 | 626 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127 | FY2025 / 2025-12-31 | USD | US$m | 2.89 | Calculated | Tier 1 (audited) | EBITDA (Reported) calculated for the year, not printed by the issuer; perimeter excludes REV |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 626 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127 | 156 | 10-K_2025-12-31_tex.htm.jsonl, page 132 | FY2025 / 2025-12-31 | USD | US$m | 4.01 | Calculated | Tier 1 (audited) | EBITDA (Reported) calculated for the year, not printed by the issuer; perimeter excludes REV |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 2749 | 10-Q_2026-03-31_tex.htm.jsonl, page 5 | 513 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36 | 2026-03-31 | USD | US$m | 5.36 | Calculated | Tier 2b (unaudited) | Last-twelve-month EBITDA mixes a calculated FY2025 with printed interim figures; REV from 2026-02-02 only; not pro forma |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2357 | 10-Q_2026-03-31_tex.htm.jsonl, page 5 | 513 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36 | 2026-03-31 | USD | US$m | 4.59 | Calculated | Tier 2b (unaudited) | Last-twelve-month EBITDA mixes a calculated FY2025 with printed interim figures; REV from 2026-02-02 only; not pro forma |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 513 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36 | Not supplied: cash interest paid is not printed in the quarterly reports | Not applicable: no figure printed | 2026-03-31 | USD | US$m | Not calculable: cash interest paid is not printed for this date | Not Calculable | Tier 2b (unaudited) | Last-twelve-month EBITDA mixes a calculated FY2025 with printed interim figures; REV from 2026-02-02 only; not pro forma |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 2687 | 10-Q_2026-06-30_tex.htm.jsonl, page 5 | 617 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-06-30_tex.htm.jsonl, pages 42–43 | 2026-06-30 | USD | US$m | 4.35 | Calculated | Tier 2b (unaudited) | Last-twelve-month EBITDA mixes a calculated FY2025 with printed interim figures; REV from 2026-02-02 only; not pro forma |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2280 | 10-Q_2026-06-30_tex.htm.jsonl, page 5 | 617 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-06-30_tex.htm.jsonl, pages 42–43 | 2026-06-30 | USD | US$m | 3.70 | Calculated | Tier 2b (unaudited) | Last-twelve-month EBITDA mixes a calculated FY2025 with printed interim figures; REV from 2026-02-02 only; not pro forma |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 617 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-06-30_tex.htm.jsonl, pages 42–43 | Not supplied: cash interest paid is not printed in the quarterly reports | Not applicable: no figure printed | 2026-06-30 | USD | US$m | Not calculable: cash interest paid is not printed for this date | Not Calculable | Tier 2b (unaudited) | Last-twelve-month EBITDA mixes a calculated FY2025 with printed interim figures; REV from 2026-02-02 only; not pro forma |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 2578 | 10-Q_2026-09-30_tex.htm.jsonl, page 5 | 710 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46 | 2026-09-30 | USD | US$m | 3.63 | Calculated | Tier 2b (unaudited) | Last-twelve-month EBITDA mixes a calculated FY2025 with printed interim figures; REV from 2026-02-02 only; not pro forma |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2171 | 10-Q_2026-09-30_tex.htm.jsonl, page 5 | 710 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46 | 2026-09-30 | USD | US$m | 3.06 | Calculated | Tier 2b (unaudited) | Last-twelve-month EBITDA mixes a calculated FY2025 with printed interim figures; REV from 2026-02-02 only; not pro forma |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 710 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46 | Not supplied: cash interest paid is not printed in the quarterly reports | Not applicable: no figure printed | 2026-09-30 | USD | US$m | Not calculable: cash interest paid is not printed for this date | Not Calculable | Tier 2b (unaudited) | Last-twelve-month EBITDA mixes a calculated FY2025 with printed interim figures; REV from 2026-02-02 only; not pro forma |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 2584 | 10-K_2025-12-31_tex.htm.jsonl, page 95 | Not supplied: the annual report states no Adjusted EBITDA | Not applicable: no figure printed | FY2024 / 2024-12-31 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 1 (audited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 2196 | 10-K_2025-12-31_tex.htm.jsonl, page 95 | Not supplied: the annual report states no Adjusted EBITDA | Not applicable: no figure printed | FY2024 / 2024-12-31 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 1 (audited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | Not supplied: the annual report states no Adjusted EBITDA | Not applicable: no figure printed | 53 | 10-K_2025-12-31_tex.htm.jsonl, page 132 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 1 (audited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 2584 | 10-K_2025-12-31_tex.htm.jsonl, page 95 | Not supplied: the annual report states no Adjusted EBITDA | Not applicable: no figure printed | FY2025 / 2025-12-31 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 1 (audited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 1812 | 10-K_2025-12-31_tex.htm.jsonl, page 95 | Not supplied: the annual report states no Adjusted EBITDA | Not applicable: no figure printed | FY2025 / 2025-12-31 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 1 (audited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | Not supplied: the annual report states no Adjusted EBITDA | Not applicable: no figure printed | 156 | 10-K_2025-12-31_tex.htm.jsonl, page 132 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 1 (audited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 2749 | 10-Q_2026-03-31_tex.htm.jsonl, page 5 | Not supplied: last-twelve-month Adjusted EBITDA needs the FY2025 Adjusted EBITDA, which the annual report does not state | Not applicable: no figure printed | 2026-03-31 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 2b (unaudited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 2357 | 10-Q_2026-03-31_tex.htm.jsonl, page 5 | Not supplied: last-twelve-month Adjusted EBITDA needs the FY2025 Adjusted EBITDA, which the annual report does not state | Not applicable: no figure printed | 2026-03-31 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 2b (unaudited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | Not supplied: last-twelve-month Adjusted EBITDA needs the FY2025 Adjusted EBITDA, which the annual report does not state | Not applicable: no figure printed | Not supplied: cash interest paid is not printed in the quarterly reports | Not applicable: no figure printed | 2026-03-31 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 2b (unaudited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 2687 | 10-Q_2026-06-30_tex.htm.jsonl, page 5 | Not supplied: last-twelve-month Adjusted EBITDA needs the FY2025 Adjusted EBITDA, which the annual report does not state | Not applicable: no figure printed | 2026-06-30 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 2b (unaudited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 2280 | 10-Q_2026-06-30_tex.htm.jsonl, page 5 | Not supplied: last-twelve-month Adjusted EBITDA needs the FY2025 Adjusted EBITDA, which the annual report does not state | Not applicable: no figure printed | 2026-06-30 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 2b (unaudited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | Not supplied: last-twelve-month Adjusted EBITDA needs the FY2025 Adjusted EBITDA, which the annual report does not state | Not applicable: no figure printed | Not supplied: cash interest paid is not printed in the quarterly reports | Not applicable: no figure printed | 2026-06-30 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 2b (unaudited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Total debt / adjusted EBITDA | Total debt / Adjusted EBITDA | 2578 | 10-Q_2026-09-30_tex.htm.jsonl, page 5 | Not supplied: last-twelve-month Adjusted EBITDA needs the FY2025 Adjusted EBITDA, which the annual report does not state | Not applicable: no figure printed | 2026-09-30 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 2b (unaudited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Net debt / adjusted EBITDA | Net debt / Adjusted EBITDA | 2171 | 10-Q_2026-09-30_tex.htm.jsonl, page 5 | Not supplied: last-twelve-month Adjusted EBITDA needs the FY2025 Adjusted EBITDA, which the annual report does not state | Not applicable: no figure printed | 2026-09-30 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 2b (unaudited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| Adjusted EBITDA / cash interest | Adjusted EBITDA / cash interest paid | Not supplied: last-twelve-month Adjusted EBITDA needs the FY2025 Adjusted EBITDA, which the annual report does not state | Not applicable: no figure printed | Not supplied: cash interest paid is not printed in the quarterly reports | Not applicable: no figure printed | 2026-09-30 | USD | US$m | Not calculable: Adjusted EBITDA is not available for this period | Not Calculable | Tier 2b (unaudited) | Issuer states Adjusted EBITDA for 2026 and 2025 interim periods only |
| EBITDA / interest expense | EBITDA (Reported) / total interest expense (last twelve months for interim dates) | 605 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127 | 89 | 10-K_2025-12-31_tex.htm.jsonl, page 94 | FY2024 / 2024-12-31 | USD | US$m | 6.80 | Calculated | Tier 1 (audited) | Interest expense includes factoring discounts and, from 2026, interest on customer advances; not cash interest |
| EBITDA / interest expense | EBITDA (Reported) / total interest expense (last twelve months for interim dates) | 626 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127 | 177 | 10-K_2025-12-31_tex.htm.jsonl, page 94 | FY2025 / 2025-12-31 | USD | US$m | 3.54 | Calculated | Tier 1 (audited) | Interest expense includes factoring discounts and, from 2026, interest on customer advances; not cash interest |
| EBITDA / interest expense | EBITDA (Reported) / total interest expense (last twelve months for interim dates) | 513 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-03-31_tex.htm.jsonl, pages 35–36 | 181 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-03-31_tex.htm.jsonl, page 4 | 2026-03-31 | USD | US$m | 2.83 | Calculated | Tier 2b (unaudited) | Interest expense includes factoring discounts and, from 2026, interest on customer advances; not cash interest |
| EBITDA / interest expense | EBITDA (Reported) / total interest expense (last twelve months for interim dates) | 617 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-06-30_tex.htm.jsonl, pages 42–43 | 187 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-06-30_tex.htm.jsonl, page 4 | 2026-06-30 | USD | US$m | 3.30 | Calculated | Tier 2b (unaudited) | Interest expense includes factoring discounts and, from 2026, interest on customer advances; not cash interest |
| EBITDA / interest expense | EBITDA (Reported) / total interest expense (last twelve months for interim dates) | 710 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46 | 192 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-Q_2026-09-30_tex.htm.jsonl, page 4 | 2026-09-30 | USD | US$m | 3.70 | Calculated | Tier 2b (unaudited) | Interest expense includes factoring discounts and, from 2026, interest on customer advances; not cash interest |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) - capital expenditures) / cash interest paid | 468 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97 | 53 | 10-K_2025-12-31_tex.htm.jsonl, page 132 | FY2024 / 2024-12-31 | USD | US$m | 8.83 | Calculated | Tier 1 (audited) | Total capital expenditures; maintenance and growth split not printed |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) - capital expenditures) / cash interest paid | 508 | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127; 10-K_2025-12-31_tex.htm.jsonl, pages 96–97 | 156 | 10-K_2025-12-31_tex.htm.jsonl, page 132 | FY2025 / 2025-12-31 | USD | US$m | 3.26 | Calculated | Tier 1 (audited) | Total capital expenditures; maintenance and growth split not printed |
| Operating cash flow / total debt | Net cash from operating activities / total debt | 326 | 10-K_2025-12-31_tex.htm.jsonl, pages 96–97 | 2584 | 10-K_2025-12-31_tex.htm.jsonl, page 95 | FY2024 / 2024-12-31 | USD | US$m | 0.13 | Calculated | Tier 1 (audited) | Operating cash flow is after interest paid |
| Operating cash flow / total debt | Net cash from operating activities / total debt | 440 | 10-K_2025-12-31_tex.htm.jsonl, pages 96–97 | 2584 | 10-K_2025-12-31_tex.htm.jsonl, page 95 | FY2025 / 2025-12-31 | USD | US$m | 0.17 | Calculated | Tier 1 (audited) | Operating cash flow is after interest paid |
| Net sales growth | (Net sales FY2025 / Net sales FY2024) - 1 | 5421 | 10-K_2025-12-31_tex.htm.jsonl, page 94 | 5127 | 10-K_2025-12-31_tex.htm.jsonl, page 94 | FY2025 / 2025-12-31 | USD | US$m | 0.06 | Calculated | Tier 1 (audited) | FY2025 includes ESG for a full year against about a quarter in FY2024 |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Scale | Net sales (reported) | USD 5,127 million | USD 5,421 million | USD 4,103 million | USD 6,169 million | Up | 9M 2026 includes REV from 2026-02-02; FY2025 includes ESG for a full year |
| Earnings | EBITDA (Reported), issuer-printed interim figure | Not supplied: not printed in the annual report | Not supplied: not printed in the annual report | USD 450 million | USD 534 million | Up | Full-year columns are calculated in the statement table |
| Earnings | Adjusted EBITDA (issuer-adjusted) | Not supplied: not printed in the annual report | Not supplied: not printed in the annual report | USD 495 million | USD 727 million | Up | Add-backs of USD 193 million in 9M 2026 are listed in the EBITDA bridge |
| Margin | Gross profit % of net sales (issuer-reported) | 20.8% | 19.4% | 20.8% | 17.6% | Down | 9M 2025 is recast for the amortisation presentation; fiscal years are not |
| Margin | Operating profit % of net sales (issuer-reported) | 10.3% | 8.8% | 8.2% | 4.7% | Down | Operating profit is unaffected by the amortisation presentation |
| Margin | Adjusted EBITDA % of net sales (issuer-reported) | Not supplied: not stated in the annual report | Not supplied: not stated in the annual report | 12.1% | 11.8% | Down | Issuer-adjusted; add-backs listed in the EBITDA bridge |
| Cash flow | Net cash from operating activities | USD 326 million | USD 440 million | USD 235 million | USD 338 million | Up | Interest paid is classified in operating activities |
| Cash flow | Free cash flow (issuer definition) | USD 190 million | USD 325 million | Not supplied: not printed for 9M 2025 | USD 253 million | Up | Operating cash flow less capital expenditures net of proceeds from sale of capital assets |
| Working capital | Working capital % of annualised net sales | 24.0% | 20.8% | 23.2% | 15.0% | Down | Q1 2026 uses pro forma net sales (16.7%); other dates use reported net sales |
| Funding float | Short-term customer advances | Not supplied: grouped in other current liabilities | USD 44 million | Not supplied: not printed | USD 271 million | Up | REV customers pay in advance; interest is charged on advances |
| Funding float | Long-term customer advances | Not supplied: grouped in other non-current liabilities | USD 20 million | Not supplied: not printed | USD 176 million | Up | Contract liabilities assumed with REV were USD 359 million |
| Funding float | Interest on customer advances in interest expense | Not supplied: not applicable before the merger | Not supplied: not applicable before the merger | Not supplied: not applicable before the merger | USD 11 million | Up | Nine months 2026 |
| Off-debt financing | Receivables sold under factoring | USD 715 million | USD 702 million | Not supplied: not printed | USD 562 million | Not comparable | Fiscal years against nine months; sold without material recourse |
| Off-debt financing | Supplier finance confirmed obligations | Not supplied: not printed | USD 36 million | Not supplied: not printed | USD 51 million | Up | Included in trade accounts payable |
| Contingent claims | Credit guarantees maximum exposure | USD 72 million | USD 53 million | Not supplied: not printed | USD 52 million | Down | Recourse to financial institutions on customer financing |
| Contingent claims | Performance, bid and specialty bonds | Not supplied: not printed | USD 35 million | Not supplied: not printed | USD 619 million | Up | Increase relates mainly to REV |
| Contingent claims | Repurchase agreements maximum contingent liability | Not supplied: not applicable before the merger | Not supplied: not applicable before the merger | Not supplied: not applicable before the merger | USD 460 million | Up | Specialty Vehicles; limited by resale value of units |
| Claims outside debt | Operating lease liabilities (outside Total Debt) | USD 134 million | USD 129 million | Not supplied: no lease note in the quarterly reports | Not supplied: no lease note in the quarterly reports | Down | Held inside other liabilities; not updated for REV |
| Claims outside debt | Purchase obligations | Not supplied: not printed in the supplied pages | USD 618 million | Not supplied: not printed | Not supplied: not printed | Not comparable | Substantially all payable within 12 months; predominantly cancellable |
| Claims outside debt | Pension funded status: U.S., non-U.S. and other plans | USD -30 million; USD -10 million; USD -1 million | Not supplied: the FY2025 report prints no retirement plans note | Not supplied: not printed | Not supplied: not printed | Not comparable | Contributions of USD 11 million in 2025 are printed |
| Backlog | Remaining performance obligations | Not supplied: not printed | USD 39 million | Not supplied: not printed | USD 3,531 million | Up | About 42% to be recognised within twelve months; REV adds most of the increase |
| Pro forma | Unaudited pro forma net sales as if REV closed 2025-01-01 | Not supplied: not printed | Not supplied: not printed | USD 5,981 million | USD 6,359 million | Up | Net sales, net income and earnings per share only; no pro forma EBITDA |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA is the issuer unadjusted EBITDA; calculated only where not printed | The issuer prints EBITDA for interim periods and none for full years; its interim figure deducts non-cash interest costs of USD 5 million for 9M 2026 | 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46; 10-K_2025-12-31_tex.htm.jsonl, page 126; 10-K_2025-12-31_tex.htm.jsonl, page 127 | FY2024; FY2025; last-twelve-month dates | Medium: cash flow depreciation and amortisation of USD 158 million exceeds depreciation of USD 69 million plus intangible amortisation of USD 82 million by USD 7 million, the scale of the possible difference | Financial foundation; Fundamental credit | Use the calculated full-year figure, labelled; ask for the issuer full-year EBITDA |
| Total Debt | Balance-sheet carrying value, net of issuance costs and discount, including debt-like lines carried inside debt | Debt note prints principal of USD 2,592 million and a line labelled net debt of USD 2,552 million that excludes finance leases and secured borrowings; balance sheet debt is USD 2,584 million | 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-K_2025-12-31_tex.htm.jsonl, page 132 | 2025-12-31 | Low: differences reconcile exactly (calculations K1 and K2) | Financial foundation; Liquidity; Refinancing & LME | Use USD 2,584 million; log USD 2,592 million as principal |
| Total Debt at 2026-09-30 | Carrying value | The fair value table prints a term loan book value of USD 1,227 million net of discount only, against carrying value of USD 1,212 million net of issuance costs and discount | 10-Q_2026-09-30_tex.htm.jsonl, page 25; 10-Q_2026-09-30_tex.htm.jsonl, page 29 | 2026-09-30 | Low: USD 15 million of issuance costs | Financial foundation | Use carrying value of USD 1,212 million |
| Gross profit and operating expenses | One classification across periods | From 2026-01-01 amortisation of customer relationships and trade names moves out of cost of goods sold into a separate line; 2025 interim comparatives are recast by USD 17 million (Q3 2025) and USD 52 million (nine months 2025); annual statements are not recast | 10-Q_2026-09-30_tex.htm.jsonl, page 8; 10-K_2025-12-31_tex.htm.jsonl, page 94 | FY2024; FY2025; interim 2025 | Medium: gross profit and the operating expense split are not comparable; operating profit is unaffected | Earnings changes; Financial foundation | Compare operating profit and EBITDA across filings; label gross profit by filing |
| REV purchase consideration | All figures with roles in one row | Annual report: USD 3,262 million provisional consideration and 48.1 million shares; quarterly reports: USD 3,384 million and 47.9 million shares, made of cash portion USD 426 million, REV debt settlement USD 122 million, equity portion USD 2,828 million and awards USD 8 million | 10-K_2025-12-31_tex.htm.jsonl, page 137; 10-Q_2026-03-31_tex.htm.jsonl, page 16; 10-Q_2026-09-30_tex.htm.jsonl, page 19 | 2026-02-02 | Low: the USD 122 million gap equals the REV debt settlement (calculation R1) | Business & governance; Financial foundation | Use USD 3,384 million as the later figure; keep both |
| Letters of credit | One figure per date | At 2025-12-31 the annual report and Q1 report print total USD 85 million with bilateral USD 40 million; the Q2 and Q3 reports print total USD 50 million with bilateral USD 5 million | 10-K_2025-12-31_tex.htm.jsonl, page 130; 10-Q_2026-03-31_tex.htm.jsonl, page 22; 10-Q_2026-06-30_tex.htm.jsonl, page 25; 10-Q_2026-09-30_tex.htm.jsonl, page 27 | 2025-12-31 | Low: bilateral letters do not reduce revolver availability | Liquidity; Financial foundation | Show both; use the later comparative only for trend |
| Working capital ratio | Reported net sales basis | The Q1 report uses pro forma net sales (16.7%); other reports use reported net sales | 10-Q_2026-03-31_tex.htm.jsonl, page 39; 10-Q_2026-09-30_tex.htm.jsonl, page 49; 10-K_2025-12-31_tex.htm.jsonl, page 73 | 2026-03-31 | Low | Financial foundation | Use the reported-sales ratios for trend |
| Balance sheet captions | Customer advances and deferred taxes on their own lines | The annual report groups customer advances and deferred taxes inside other assets and liabilities; the quarterly reports show them separately | 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5; 10-Q_2026-09-30_tex.htm.jsonl, page 5 | FY2024; FY2025; Q1 2026 | Low: totals unchanged | Financial foundation | Use split lines where printed |
| Interest expense | Cash interest paid is the cover denominator | Interest expense of USD 177 million for FY2025 includes factoring discounts and non-cash items; cash interest paid is USD 156 million; interim cash interest is not printed | 10-K_2025-12-31_tex.htm.jsonl, page 94; 10-K_2025-12-31_tex.htm.jsonl, page 132; 10-K_2025-12-31_tex.htm.jsonl, page 102 | FY2025; interim 2026 | Medium: interim cover on cash interest cannot be calculated | Financial foundation; Fundamental credit | Keep cash and total interest cover as separate rows |
| Net leverage target | Management leverage policy | The FY2024 report states a 2.5x net leverage target through the cycle; the FY2025 report gives no number and the 2026 reports none | 10-K_2024-12-31_tex.htm.jsonl, page 11; 10-K_2025-12-31_tex.htm.jsonl, page 11; 10-K_2025-12-31_tex.htm.jsonl, page 26 | FY2024; FY2025 | Low | Business & governance; Fundamental credit | State the change; do not assume a target |
| Discontinued operations | One caption per line | Income of USD 4 million is a gain on disposition in the Q1 report and income from discontinued operations in later reports, without an explanatory note | 10-Q_2026-03-31_tex.htm.jsonl, page 4; 10-Q_2026-09-30_tex.htm.jsonl, page 4 | 2026 interim | Low | Financial foundation | Show as printed |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and net debt at 2026-09-30 | Ready with Limitations | Last-twelve-month EBITDA mixes a calculated FY2025 with printed interim figures and includes REV only from 2026-02-02; no pro forma EBITDA | Obtain the FY2025 EBITDA reconciliation and any REV pro forma EBITDA |
| Interest cover | Ready with Limitations | Cash interest paid exists for fiscal years only; interim cover uses total interest expense | Obtain cash interest paid for each 2026 period |
| Liquidity | Ready | Cash plus undrawn revolver equals the company-stated figure at each date; letters of credit at 2025-12-31 differ between filings | None required for the headline; ask which letters of credit comparative is correct |
| Debt maturities | Ready with Limitations | Ladder printed at 2025-12-31 only; the company states no significant maturities until 2029 | Obtain a ladder at 2026-09-30 |
| Debt stack and ranking | Ready with Limitations | Ranking of the 5% notes, secured borrowings and finance leases is not stated and they are left out of the stack | Obtain the indentures and credit agreement |
| Adjusted EBITDA ratios | Not Ready | No FY2024 or FY2025 Adjusted EBITDA, so no last-twelve-month adjusted figure | Obtain the Q4 2025 earnings release |
| Covenant headroom | Not Ready | The first lien net leverage limit of 3.00x applies only when more than 30% of the revolver is used; no ratio is printed and the agreement was not supplied | Obtain the credit agreement and compliance certificate |
| Claims outside debt | Ready with Limitations | Operating leases and pensions are not refreshed after the annual reports; contingent claims are printed at 2026-09-30 | Obtain REV lease and pension disclosures |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 46 |
| Calculated | 24 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 4 |
| Insufficient Information | 9 |
| Fields present | 32 |
| Fields total | 32 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 12 |

## Calculations

Each row works a figure used above from its printed inputs.

| ID | Calculation | Inputs | Result | Basis |
| --- | --- | --- | --- | --- |
| D1 | Net debt at FY2024 / 2024-12-31 | 2,584 total debt minus 388 cash | USD 2,196 million | Gross debt less cash, from the Net debt data row |
| D2 | Net debt at FY2025 / 2025-12-31 | 2,584 total debt minus 772 cash | USD 1,812 million | Gross debt less cash, from the Net debt data row |
| D3 | Net debt at 2026-03-31 | 2,749 total debt minus 392 cash | USD 2,357 million | Gross debt less cash, from the Net debt data row |
| D4 | Net debt at 2026-06-30 | 2,687 total debt minus 407 cash | USD 2,280 million | Gross debt less cash, from the Net debt data row |
| D5 | Net debt at 2026-09-30 | 2,578 total debt minus 407 cash | USD 2,171 million | Gross debt less cash, from the Net debt data row |
| E1 | EBITDA (Reported) FY2024, calculated | 526 operating profit plus 58 depreciation plus 21 amortisation of intangible assets | USD 605 million | Calculated; annual report prints no EBITDA |
| E2 | EBITDA (Reported) FY2025, calculated | 475 operating profit plus 69 depreciation plus 82 amortisation of intangible assets | USD 626 million | Calculated; annual report prints no EBITDA |
| L1 | Last-twelve-month EBITDA (Reported) at 2026-03-31 | 626 FY2025 plus -7 current stub minus 106 prior-year stub | USD 513 million | Calculated; stubs as printed in the issuer reconciliation |
| L2 | Last-twelve-month EBITDA (Reported) at 2026-06-30 | 626 FY2025 plus 263 current stub minus 272 prior-year stub | USD 617 million | Calculated; stubs as printed in the issuer reconciliation |
| L3 | Last-twelve-month EBITDA (Reported) at 2026-09-30 | 626 FY2025 plus 534 current stub minus 450 prior-year stub | USD 710 million | Calculated; stubs as printed in the issuer reconciliation |
| V1 | Net debt / EBITDA at FY2024 / 2024-12-31 | 2,196 net debt over 605 EBITDA | 3.63x | Calculated; two decimals |
| V2 | Net debt / EBITDA at FY2025 / 2025-12-31 | 1,812 net debt over 626 EBITDA | 2.89x | Calculated; two decimals |
| V3 | Net debt / EBITDA at 2026-03-31 | 2,357 net debt over 513 EBITDA | 4.59x | Calculated; two decimals |
| V4 | Net debt / EBITDA at 2026-06-30 | 2,280 net debt over 617 EBITDA | 3.70x | Calculated; two decimals |
| V5 | Net debt / EBITDA at 2026-09-30 | 2,171 net debt over 710 EBITDA | 3.06x | Calculated; two decimals |
| W1 | Total debt / EBITDA at FY2024 / 2024-12-31 | 2,584 total debt over 605 EBITDA | 4.27x | Calculated; two decimals |
| W2 | Total debt / EBITDA at FY2025 / 2025-12-31 | 2,584 total debt over 626 EBITDA | 4.13x | Calculated; two decimals |
| W3 | Total debt / EBITDA at 2026-03-31 | 2,749 total debt over 513 EBITDA | 5.36x | Calculated; two decimals |
| W4 | Total debt / EBITDA at 2026-06-30 | 2,687 total debt over 617 EBITDA | 4.35x | Calculated; two decimals |
| W5 | Total debt / EBITDA at 2026-09-30 | 2,578 total debt over 710 EBITDA | 3.63x | Calculated; two decimals |
| X1 | EBITDA / cash interest FY2024 | 605 over 53 cash interest paid | 11.42x | Calculated; two decimals |
| X2 | EBITDA / cash interest FY2025 | 626 over 156 cash interest paid | 4.01x | Calculated; two decimals |
| X3 | EBITDA / interest expense at 2026-09-30 (last twelve months) | 710 over 192 interest expense | 3.70x | Calculated; interest expense is 177 plus 147 minus 132 |
| X4 | EBITDA / interest expense at 2026-03-31 (last twelve months) | 513 over 181 interest expense | 2.83x | Calculated; interest expense is 177 plus 47 minus 43 |
| Y1 | Liquidity at FY2024 / 2024-12-31 | 388 cash plus 800 undrawn revolver | USD 1,188 million | Calculated; equals the company-stated figure |
| Y2 | Liquidity at FY2025 / 2025-12-31 | 772 cash plus 800 undrawn revolver | USD 1,572 million | Calculated; equals the company-stated figure |
| Y3 | Liquidity at 2026-03-31 | 392 cash plus 630 undrawn revolver | USD 1,022 million | Calculated; equals the company-stated figure |
| Y4 | Liquidity at 2026-06-30 | 407 cash plus 690 undrawn revolver | USD 1,097 million | Calculated; equals the company-stated figure |
| Y5 | Liquidity at 2026-09-30 | 407 cash plus 800 undrawn revolver | USD 1,207 million | Calculated; equals the company-stated figure |
| P1 | Reconciling items from principal to carrying value at 2025-12-31 | -5 discount, -35 issuance costs, +21 secured borrowings, +11 finance leases | USD -8 million | Calculated; 2,592 principal plus -8 equals 2,584 carrying value |
| M1 | Maturity ladder total at 2025-12-31 | 2 plus 0 plus 0 plus 600 plus 0 plus 1,990 | USD 2,592 million | Calculated; equals the printed principal total |
| K1 | Debt note line labelled net debt at 2025-12-31 | 2,592 principal minus 5 discount minus 35 issuance costs | USD 2,552 million | Calculated; equals the printed line |
| K2 | Balance-sheet debt less the debt note line at 2025-12-31 | 2,584 minus 2,552; secured borrowings 21 plus finance leases 11 | USD 32 million | Calculated; both are 32 |
| I1 | Debt instruments at 2026-09-30 | 598 plus 737 plus 1,212 plus 0 revolver plus 20 plus 11 | USD 2,578 million | Calculated; equals Total Debt |
| Q1 | Pro forma net debt after the October 2026 disposal | 2,171 net debt minus 33 consideration | USD 2,138 million | Calculated; consideration treated as cash received |
| Q2 | Pro forma net debt / EBITDA after the disposal | 2,138 over 710 last-twelve-month EBITDA | 3.01x | Calculated; same EBITDA as the 2026-09-30 ratio |
| B1 | EBITDA bridge, nine months 2026 | 534 plus -8 plus 90 plus 91 plus 20 | USD 727 million | Calculated; equals printed Adjusted EBITDA |
| B2 | Total add-backs, nine months 2026 | 727 Adjusted EBITDA minus 534 EBITDA (Reported) | USD 193 million | Calculated |
| S1 | Cumulative leverage through the term loan | 0 revolver plus 1,212 term loan over 710 EBITDA | 1.71x | Calculated; excludes the 5% notes |
| R1 | Gap between REV consideration in the two filings | 3,384 quarterly reports minus 3,262 annual report | USD 122 million | Calculated; equals the printed REV debt settlement |
| R2 | Cash paid for REV net of cash acquired | 548 total cash consideration minus 81 cash acquired | USD 467 million | Calculated; equals the printed acquisitions line |
| O1 | Stack check: net sales segments sum to net sales, FY2025 | 1,691 plus 1,681 plus 2,060 minus 11 | USD 5,421 million | Calculated; equals reported net sales |

## Gaps

Covenant headroom is not calculable: the credit agreement was not supplied and no filing prints the first lien net leverage ratio against its limit, so the one maintenance test cannot be assessed for any date; severity high; the executed agreement and the compliance certificate would close it.
Basis: 10-Q_2026-09-30_tex.htm.jsonl, page 27; 10-K_2025-12-31_tex.htm.jsonl, pages 84–88

Adjusted EBITDA is not stated for FY2024 or FY2025, so last-twelve-month Adjusted EBITDA, adjusted leverage and adjusted cover cannot be calculated for any date; severity high; the Q4 2025 earnings release or a full-year reconciliation would close it.
Basis: 10-K_2025-12-31_tex.htm.jsonl, pages 56–61; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46

No pro forma EBITDA, cash flow or debt for REV is printed, so last-twelve-month ratios include REV only from the closing date and are not like-for-like with earlier periods; severity high; REV annual report figures or a company pro forma would close it.
Basis: 10-Q_2026-09-30_tex.htm.jsonl, pages 21–22

EBITDA (Reported) for FY2024 and FY2025 is calculated from operating profit, depreciation and amortisation of intangibles because the annual reports print no EBITDA, and the issuer interim definition also deducts non-cash interest costs; severity medium; the issuer full-year EBITDA would close it.
Basis: 10-K_2025-12-31_tex.htm.jsonl, pages 126–127; 10-Q_2026-09-30_tex.htm.jsonl, pages 45–46

Cash interest paid is not printed for any 2026 period, so EBITDA over cash interest is not calculable for the interim dates; severity medium; the cash flow supplement or interest paid by quarter would close it.
Basis: 10-K_2025-12-31_tex.htm.jsonl, page 132

No maturity ladder is printed at 2026-09-30 and the term loan principal and scheduled amortisation are not stated, so the ladder and the debt principal reconciliation use 2025-12-31; severity medium; a ladder at the latest date would close it.
Basis: 10-K_2025-12-31_tex.htm.jsonl, page 132; 10-Q_2026-09-30_tex.htm.jsonl, page 25; 10-Q_2026-09-30_tex.htm.jsonl, page 29

The ranking of the 5% senior notes, the secured borrowings and the finance leases is not stated in any filing, so they are left out of the debt stack and the cumulative leverage of the 6.25% notes is not stated; severity medium; the indentures and credit agreement would close it.
Basis: 10-Q_2026-09-30_tex.htm.jsonl, pages 25–28; 10-K_2025-12-31_tex.htm.jsonl, pages 84–88

The annual statements print no separate line for amortisation of purchased intangibles, so that row is not supplied for FY2024 and FY2025; severity low; recast annual figures would close it.
Basis: 10-K_2025-12-31_tex.htm.jsonl, page 94

The Specialty Vehicles segment did not exist before the merger, so its net sales are not supplied for FY2024, FY2025 and the 2025 interim columns; severity low; no action is needed.
Basis: 10-Q_2026-09-30_tex.htm.jsonl, pages 15–16

Lines printed as a dash in the filings are shown as not supplied rather than zero, including discontinued operations, other income in H1 2025, acquisitions in FY2025 and the 2025 interim periods, and share repurchases in Q1 2026; severity low; the issuer could confirm they are nil.
Basis: 10-K_2025-12-31_tex.htm.jsonl, pages 94–97; 10-Q_2026-03-31_tex.htm.jsonl, page 6; 10-Q_2026-06-30_tex.htm.jsonl, page 4

The annual report groups deferred taxes and customer advances inside other lines, so FY2024 and the Q1 2026 deferred tax asset are not supplied separately; severity low; the Q3 report comparative gives the FY2025 split only.
Basis: 10-K_2025-12-31_tex.htm.jsonl, page 95; 10-Q_2026-03-31_tex.htm.jsonl, page 5

Cash taxes paid is not printed in any filing and the split of restricted cash is not printed in the 2026 reports, while the annual reports call restricted cash immaterial; severity low; the tax footnote supplement would close it.
Basis: 10-K_2025-12-31_tex.htm.jsonl, page 97

The pro forma row treats the October 2026 consideration as cash received because the filing states total consideration only, and the buyback authorisation and the dividend have no stated amount of use; severity low; the sale agreement terms would close it.
Basis: 10-Q_2026-09-30_tex.htm.jsonl, pages 33–34

No industrial versus finance split exists: the financing facilitator sits inside Corporate and Other and carries no separate debt or cash, so no matched-funding debt is separated; severity low; no action is needed.
Basis: 10-K_2025-12-31_tex.htm.jsonl, page 115

Operating leases and pension funded status are printed only in the annual reports and are not refreshed for REV, and purchase obligations are printed at 2025-12-31 only; severity low; REV lease and pension disclosures would close it.
Basis: 10-K_2025-12-31_tex.htm.jsonl, page 74; 10-K_2025-12-31_tex.htm.jsonl, page 133; 10-K_2024-12-31_tex.htm.jsonl, page 131

## Next module

The orchestrator selects the next module.
