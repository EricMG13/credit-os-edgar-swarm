# CP-1 Financial foundation: Bristow Group Inc.

## Request

Financial foundation for Bristow Group Inc. (issuer id vtol-1525221) as of 2026-11-18, on the credit snapshot pathway. The scope is the reported statements, debt, liquidity and derived leverage and coverage metrics for fiscal 2024 and 2025, the nine months of 2025 and 2026, and the twelve months to 2026-09-30.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_vtol_vtol-20241231.htm.jsonl | Annual report on Form 10-K of Bristow Group Inc. for the year ended December 31, 2024 | 2025-02-27 | 8fda19864e35a526e943982ad5c6089e06e4699e1492318e78e805248116dfaf | Fiscal 2024 balance sheet, debt, ABL and liquidity cross-check; agrees with the 2024 comparatives in the 2025 annual report |
| 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl | Annual report on Form 10-K of Bristow Group Inc. for the year ended December 31, 2025 | 2026-02-25 | fc88c93b0e2db8f89903bb5daa6709643b509cdb16f53dc90e05c4bf34d56699 | Fiscal 2024 and 2025 statements, segments, debt note, maturity schedules, ABL, liquidity, cash interest |
| 10-Q_2026-03-31_vtol_vtol-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-05 | b615d21156b82b90894701c34085d2b6eb09424e5530e72cca78c2b20f96a8b2 | Q4 2025 and Q1 2026 quarterly comparison; 6.750% notes issue and 6.875% notes redemption |
| 10-Q_2026-06-30_vtol_vtol-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-04 | da06f90346ff55233178fddeb1919ea18ec409511b242f51c5e49b3121586d2e | Q2 2026 and six-month 2026 statements; Berry Aviation as a subsequent event |
| 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-03 | 45df10687aae19139111ce6dbd592d1a72681f2ef20411d04d914e06a33c250b | Nine-month 2026 and 2025 statements, 2026-09-30 balance sheet, debt, liquidity, segments, Berry Aviation accounting |

| Handoff | sha256 | Use |
| --- | --- | --- |
| Source readiness (CP-0) | 3c1c581672ea0619df0b67aa120d3a45975a1a3a8f7c7b2fc25578c0d39a910c | Source list, period coverage, and the conflicts and gaps carried into this module |

## Findings

### Bottom line

Net leverage rose to 1.99x trailing twelve-month EBITDA at 2026-09-30 from 1.68x at the 2025 year-end while total leverage held near 2.91x, because 2026 cash went into an acquisition, capital returns and capital spending.
Basis: calculation C8; calculation C9; calculation C18; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5

Coverage is comfortable at 5.45x EBITDA to cash interest, and liquidity of USD 287.3 million sits against no scheduled maturity before 2031 beyond amortisation, but EBITDA is derived by the analyst because the issuer reports none, and covenant headroom is not established.
Basis: calculation C10; calculation C11; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 33; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 114

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
| FY2024 / 2024-12-31 | 3.43 | 2.20 | x | Reported EBITDA is derived as operating income plus depreciation and amortization expense, house-calculated because the issuer states none; debt is balance-sheet carrying value. |
| FY2025 / 2025-12-31 | 2.93 | 1.68 | x | Reported EBITDA is derived as operating income plus depreciation and amortization expense, house-calculated because the issuer states none; debt is balance-sheet carrying value. |
| 2026-09-30 | 2.91 | 1.99 | x | LTM to 2026-09-30 is FY2025 plus nine months 2026 less nine months 2025; same derived EBITDA definition; the Berry Aviation acquisition closed on 2026-07-13, so the cash outflow is in net debt but only about one quarter of its EBITDA is in the twelve months. |

EBITDA is the analyst's derived measure and includes gains on asset disposals, so the ratios are not the issuer's own and not covenant ratios.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 4.64 | x | Derived reported EBITDA over cash interest paid in the cash flow statement (USD 43.269 million). |
| FY2025 / 2025-12-31 | 4.89 | x | Derived reported EBITDA over cash interest paid in the cash flow statement (USD 46.800 million). |
| 2026-09-30 | 5.45 | x | LTM derived reported EBITDA over LTM cash interest paid (USD 46.856 million), built as FY2025 plus nine months 2026 less nine months 2025. |

Cash interest paid is taken from the cash flow statement and differs from interest expense, net in the income statement.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 247.503 | 64.0 | US$m | Unrestricted cash and cash equivalents; undrawn is the remaining ABL availability the issuer states (commitments USD 85.0 million, letters of credit USD 8.1 million). |
| FY2025 / 2025-12-31 | 286.208 | 60.7 | US$m | Unrestricted cash; undrawn is the remaining ABL availability the issuer states, which on commitments then in force of USD 85.0 million less letters of credit of USD 9.4 million would be USD 75.6 million. |
| 2026-09-30 | 233.378 | 53.9 | US$m | Unrestricted cash; undrawn is the remaining ABL availability the issuer states, USD 6.0 million below commitments of USD 70.0 million less letters of credit of USD 10.1 million; no borrowing base is described. Restricted cash of USD 2.454 million is excluded. |

The undrawn figure is the issuer's stated availability, which does not reconcile to commitments less letters of credit and cannot be explained from the filings.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 | 27.943 | US$m | Scheduled principal maturities pro forma for the January 2026 6.750% notes and the March 2026 redemption of the 6.875% notes, drawn at 2025-12-31 (the latest year-end schedule printed); excludes unamortized deferred financing fees; the 2033 notes, the 2031 IRCG Debt and the 2036 UKSAR Debt fall in the later bucket. |
| 2027 | 27.943 | US$m | Scheduled principal maturities pro forma for the January 2026 6.750% notes and the March 2026 redemption of the 6.875% notes, drawn at 2025-12-31 (the latest year-end schedule printed); excludes unamortized deferred financing fees; the 2033 notes, the 2031 IRCG Debt and the 2036 UKSAR Debt fall in the later bucket. |
| 2028 | 27.943 | US$m | Scheduled principal maturities pro forma for the January 2026 6.750% notes and the March 2026 redemption of the 6.875% notes, drawn at 2025-12-31 (the latest year-end schedule printed); excludes unamortized deferred financing fees; the 2033 notes, the 2031 IRCG Debt and the 2036 UKSAR Debt fall in the later bucket. |
| 2029 | 27.943 | US$m | Scheduled principal maturities pro forma for the January 2026 6.750% notes and the March 2026 redemption of the 6.875% notes, drawn at 2025-12-31 (the latest year-end schedule printed); excludes unamortized deferred financing fees; the 2033 notes, the 2031 IRCG Debt and the 2036 UKSAR Debt fall in the later bucket. |
| 2030 | 27.943 | US$m | Scheduled principal maturities pro forma for the January 2026 6.750% notes and the March 2026 redemption of the 6.875% notes, drawn at 2025-12-31 (the latest year-end schedule printed); excludes unamortized deferred financing fees; the 2033 notes, the 2031 IRCG Debt and the 2036 UKSAR Debt fall in the later bucket. |
| Thereafter | 643.798 | US$m | Scheduled principal maturities pro forma for the January 2026 6.750% notes and the March 2026 redemption of the 6.875% notes, drawn at 2025-12-31; includes USD 500.000 million of 2033 notes; the maturity schedule is not reprinted in the 2026 quarterly reports. |

The ladder is the 2025 annual report's pro forma schedule at 2025-12-31, not a schedule at 2026-09-30, so amortisation paid in 2026 is not removed.

### Financials and credit metrics

| Metric (USD millions unless stated) | FY2024 | FY2025 | LTM to 2026-09-30 | Basis |
| --- | --- | --- | --- | --- |
| Revenue | 1415.491 | 1490.512 | 1615.644 | Reported; LTM constructed |
| EBITDA (Reported, derived) | 200.895 | 229.075 | 255.167 | Calculated: operating income plus depreciation and amortization expense |
| Operating income | 132.608 | 158.806 | 154.037 | Reported; LTM constructed |
| Net income | 94.87 | 129.427 | 80.691 | Reported; LTM constructed |
| Cash interest paid | 43.269 | 46.8 | 46.856 | Reported; LTM constructed |
| Net cash from operating activities | 177.42 | 198.406 | 170.9 | Reported; LTM constructed |
| Capital expenditures | 255.393 | 142.021 | 158.644 | Reported; LTM constructed |
| Free cash flow (operating cash flow less capital expenditures) | -77.973 | 56.385 | 12.256 | Calculated |
| Total debt (carrying value) | 689.783 | 671.454 | 741.739 | Reported balance sheet |
| Cash and cash equivalents | 247.503 | 286.208 | 233.378 | Reported balance sheet |
| Net debt | 442.28 | 385.246 | 508.361 | Calculated: total debt less cash |
| Total debt / EBITDA (x) | 3.43 | 2.93 | 2.91 | Calculated |
| Net debt / EBITDA (x) | 2.20 | 1.68 | 1.99 | Calculated |
| EBITDA / cash interest (x) | 4.64 | 4.89 | 5.45 | Calculated |
| EBITDA margin (%) | 14.19 | 15.37 | 15.79 | Calculated |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 689.783 | 247.503 | 442.28 | US$m | Gross debt is carrying value: the 6.875% notes USD 395.610 million, UKSAR Debt USD 200.273 million and IRCG Debt USD 93.900 million, net of issuance costs; principal USD 706.058 million per the maturity schedule; operating lease liabilities are not in debt. |
| FY2025 / 2025-12-31 | 671.454 | 286.208 | 385.246 | US$m | Gross debt is carrying value: the 6.875% notes USD 397.031 million, UKSAR Debt USD 160.635 million and IRCG Debt USD 113.788 million; principal USD 683.513 million; reported before the January 2026 refinancing and before the Berry Aviation acquisition. |
| 2026-09-30 | 741.739 | 233.378 | 508.361 | US$m | Gross debt is carrying value: the 2033 notes USD 489.444 million, UKSAR Debt USD 147.444 million and IRCG Debt USD 104.851 million, net of USD 18.2 million of unamortized fees; contractual principal is not stated for the two equipment financings; ABL has no borrowings; operating lease liabilities of USD 233.981 million are excluded. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 783.513 | -112.059 | 671.454 | US$m | Principal is the pro forma ladder total (reported schedule USD 683.513 million plus USD 100.000 million net of the 2033 notes of USD 500.000 million less the 6.875% notes of USD 400.000 million); reconciling items are unamortized deferred financing fees of USD 12.059 million and the USD 100.000 million of net principal added after year-end that the 2025-12-31 balance sheet does not carry. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | Read all five filings; the 2026-09-30 balance sheet is the latest and the third-quarter report states no subsequent event after it. The 2025 year-end figures predate the January 2026 notes refinancing, the 2026-07-13 Berry Aviation acquisition (cash paid net of cash acquired USD 102.849 million) and 2026 dividends and buybacks; the 2026-09-30 row already includes them and no pro forma net debt is stated by any source. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1415.491 | 200.895 | US$m | Twelve months; the EBITDA column is house-calculated reported EBITDA (operating income plus depreciation and amortization expense) because the issuer states no adjusted EBITDA. |
| FY2025 / 2025-12-31 | 1490.512 | 229.075 | US$m | Twelve months; same house-calculated reported EBITDA identity. |
| 2026-09-30 | 1615.644 | 255.167 | US$m | Twelve months to 2026-09-30, constructed as FY2025 plus nine months 2026 less nine months 2025; same identity. |

Every row is twelve months, but the EBITDA identity is the analyst's and the 2026 row includes about one quarter of Berry Aviation.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| 2033 senior secured notes | 1 | Yes | 489.444 | 1.92 | US$m | Carrying value at 2026-09-30 (principal USD 500.000 million); first-priority liens on substantially all assets of the issuer and subsidiary guarantors, including certain pledged aircraft, and guaranteed by certain material domestic and foreign subsidiaries; leverage is cumulative carrying value over LTM derived EBITDA. |

Only the notes' rank is stated; the ABL Facility, UKSAR Debt and IRCG Debt are left out because no source states their legal rank, so the stack understates total debt.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA | Not supplied: the issuer states no EBITDA, so the opening measure is house-derived and no issuer bridge exists | US$m | Opening measure would be the issuer's reported EBITDA. |
| Adjusted EBITDA | Not supplied: the issuer states no adjusted EBITDA and no add-backs | US$m | Closing measure would be the issuer's adjusted EBITDA; no adjustment is manufactured from the endpoints. |

No qualification.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 60 |
| Calculated | 24 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 6 |
| Fields present | 38 |
| Fields total | 42 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 7 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Total revenues | 1,415,491 | 1,490,512 | 1,113,248 | 1,238,380 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Personnel | 340,560 | 378,999 | 274,621 | 313,068 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Repairs and maintenance | 273,284 | 236,931 | 181,640 | 189,283 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Insurance | 24,907 | 24,900 | 18,761 | 19,187 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Fuel | 86,946 | 81,435 | 60,670 | 83,015 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Leased-in equipment | 103,540 | 106,607 | 79,278 | 88,395 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Other operating expenses | 212,881 | 273,407 | 203,759 | 215,828 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Total operating expenses | 1,042,118 | 1,102,279 | 818,729 | 908,776 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| General and administrative expenses | 175,550 | 174,121 | 130,680 | 138,281 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Depreciation and amortization expense | 68,287 | 70,269 | 51,892 | 82,753 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Total costs and expenses | 1,285,955 | 1,346,669 | 1,001,301 | 1,129,810 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Gains (losses) on disposal of assets | -1,045 | 11,785 | 13,896 | 9,716 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Earnings from unconsolidated affiliates | 4,117 | 3,178 | 880 | 3,668 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Operating income | 132,608 | 158,806 | 126,723 | 121,954 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Interest income | 8,901 | 9,354 | 6,419 | 8,968 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Interest expense, net | -37,581 | -39,918 | -29,486 | -37,968 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Loss on extinguishment of debt | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | -2,849 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Other, net | -1,865 | 22,994 | 25,878 | -15,329 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Total other income (expense), net | -30,545 | -7,570 | 2,811 | -47,178 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Income before income taxes | 102,063 | 151,236 | 129,534 | 74,776 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Income tax expense | -7,193 | -21,809 | -18,783 | -12,761 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Net income | 94,870 | 129,427 | 110,751 | 62,015 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Net income attributable to noncontrolling interests | -73 | -353 | -100 | -25 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Net income attributable to Bristow Group Inc. | 94,797 | 129,074 | 110,651 | 61,990 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| Revenue: Offshore Energy Services | 966,064 | 990,480 | 743,026 | 771,967 | USD thousands | Reported segment note | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 133–134; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 19–20 |
| Revenue: Government Services | 329,654 | 379,437 | 279,340 | 350,140 | USD thousands | Reported segment note | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 133–134; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 19–20 |
| Revenue: Other Services | 119,773 | 120,595 | 90,882 | 116,273 | USD thousands | Reported segment note | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 133–134; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 19–20 |
| Revenue: Corporate | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | USD thousands | Reported segment note | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 133–134; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 19–20 |
| Operating income: Offshore Energy Services | 132,165 | 165,582 | 123,389 | 131,009 | USD thousands | Reported segment note | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 133–134; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 19–20 |
| Operating income: Government Services | 21,070 | 5,078 | 6,685 | -2,627 | USD thousands | Reported segment note | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 133–134; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 19–20 |
| Operating income: Other Services | 13,747 | 9,814 | 8,284 | 11,454 | USD thousands | Reported segment note | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 133–134; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 19–20 |
| Operating income: Corporate | -34,374 | -21,668 | -11,635 | -17,882 | USD thousands | Reported segment note | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 133–134; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 19–20 |
| EBITDA (Reported) | 200,895 | 229,075 | 178,615 | 204,707 | USD thousands | Calculated: operating income plus depreciation and amortization expense; the issuer states no EBITDA | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 94,870 | 129,427 | 110,751 | 62,015 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Depreciation and amortization expense (cash flow) | 83,188 | 81,666 | 61,057 | 91,797 | USD thousands | Reported; includes power-by-hour amortization recorded in operating expenses | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Losses (gains) on disposal of assets | 1,045 | -11,785 | -13,896 | -9,716 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Earnings from unconsolidated affiliates, net of dividends received | -3,742 | -1,428 | -880 | -1,168 | USD thousands | Reported; the nine-month columns print the line without the words net of dividends received | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Loss on extinguishment of debt | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | 2,849 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Deferred income taxes | -19,960 | -10,018 | -11,213 | -6,777 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Share-based compensation expense | 15,792 | 16,895 | 12,750 | 12,196 | USD thousands | Reported; the quarterly reports label it stock-based compensation expense | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Amortization of deferred financing fees | 3,318 | 5,347 | 4,472 | 2,730 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Amortization of deferred contract costs | 3,611 | 11,423 | 7,726 | 13,317 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Change in accounts receivable | 9,288 | 7,737 | -8,197 | -24,464 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Change in inventory, prepaid expenses and other assets | -44,724 | -99,773 | -79,010 | -37,977 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Change in accounts payable, accrued expenses and other liabilities | 34,734 | 68,915 | 37,933 | -10,815 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Operating Activities | 177,420 | 198,406 | 121,493 | 93,987 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Capital expenditures | -255,393 | -142,021 | -112,893 | -129,516 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Proceeds from asset dispositions | 9,439 | 54,694 | 52,716 | 49,245 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Acquisition, net of cash received | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | -102,849 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Investing Activities | -245,954 | -87,327 | -60,177 | -183,120 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Proceeds from borrowings | 164,576 | 5,831 | 5,831 | 500,000 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Debt issuance costs | -4,524 | -238 | -238 | -12,408 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Repayments of debt | -15,401 | -57,818 | -53,739 | -417,712 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Exercise of stock options | 507 | 1,393 | 1,319 | 519 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Purchase of treasury stock | -4,054 | -15,213 | -9,139 | -36,096 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Dividend payments | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | -11,093 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Financing Activities | 141,104 | -66,045 | -55,966 | 23,210 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| FX Effect on Cash | -4,951 | -2,684 | -5,926 | 8,124 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Net Cash Change | 67,619 | 42,350 | -576 | -57,799 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Opening Cash | 183,662 | 251,281 | 251,281 | 293,631 | USD thousands | Reported; includes restricted cash | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Closing Cash | 251,281 | 293,631 | 250,705 | 235,832 | USD thousands | Reported; includes restricted cash | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Cash Interest Paid | 43,269 | 46,800 | 41,162 | 41,218 | USD thousands | Reported cash paid during the period; differs from interest expense, net | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |
| Income taxes paid, net | 20,781 | 26,717 | 22,400 | 24,806 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5–6 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 247,503 | 286,208 | Not supplied: the sources print no balance sheet at 2025-09-30 | 233,378 | USD thousands | Reported unrestricted cash and cash equivalents | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Restricted cash | 3,778 | 7,423 | Not supplied: the sources print no balance sheet at 2025-09-30 | 2,454 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Accounts receivable, net | 211,590 | 217,102 | Not supplied: the sources print no balance sheet at 2025-09-30 | 263,212 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Inventories | 114,509 | 132,727 | Not supplied: the sources print no balance sheet at 2025-09-30 | 151,145 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Prepaid expenses and other current assets | 42,078 | 50,828 | Not supplied: the sources print no balance sheet at 2025-09-30 | 58,592 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Total current assets | 619,458 | 694,288 | Not supplied: the sources print no balance sheet at 2025-09-30 | 708,781 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Property and equipment, net | 1,076,221 | 1,152,668 | Not supplied: the sources print no balance sheet at 2025-09-30 | 1,214,959 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Investment in unconsolidated affiliates | 22,424 | 23,852 | Not supplied: the sources print no balance sheet at 2025-09-30 | 25,020 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Right-of-use assets | 264,270 | 241,666 | Not supplied: the sources print no balance sheet at 2025-09-30 | 236,119 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Goodwill | Not supplied: no goodwill line is printed at this date | Not supplied: no goodwill line is printed at this date | Not supplied: printed as a dash or not printed at this date | 23,425 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Other assets | 142,873 | 198,787 | Not supplied: the sources print no balance sheet at 2025-09-30 | 211,507 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Total Assets | 2,125,246 | 2,311,261 | Not supplied: the sources print no balance sheet at 2025-09-30 | 2,419,811 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Accounts payable | 83,462 | 86,286 | Not supplied: the sources print no balance sheet at 2025-09-30 | 79,437 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Accrued wages, benefits and related taxes | 54,406 | 68,654 | Not supplied: the sources print no balance sheet at 2025-09-30 | 59,794 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Income taxes payable and other accrued taxes | 16,229 | 22,759 | Not supplied: the sources print no balance sheet at 2025-09-30 | 23,779 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Deferred revenue | 15,186 | 22,440 | Not supplied: the sources print no balance sheet at 2025-09-30 | 39,048 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Accrued maintenance and repairs | 30,698 | 28,793 | Not supplied: the sources print no balance sheet at 2025-09-30 | 26,269 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Current portion of operating lease liabilities | 78,359 | 77,038 | Not supplied: the sources print no balance sheet at 2025-09-30 | 67,389 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Accrued interest and other accrued liabilities | 28,946 | 31,317 | Not supplied: the sources print no balance sheet at 2025-09-30 | 32,519 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Current maturities of long-term debt | 18,614 | 27,943 | Not supplied: the sources print no balance sheet at 2025-09-30 | 27,360 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Total current liabilities | 325,900 | 365,230 | Not supplied: the sources print no balance sheet at 2025-09-30 | 355,595 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Long-term debt, less current maturities | 671,169 | 643,511 | Not supplied: the sources print no balance sheet at 2025-09-30 | 714,379 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Other liabilities and deferred credits | 8,937 | 31,782 | Not supplied: the sources print no balance sheet at 2025-09-30 | 37,595 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Deferred taxes | 39,019 | 46,571 | Not supplied: the sources print no balance sheet at 2025-09-30 | 50,106 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Long-term operating lease liabilities | 188,949 | 164,544 | Not supplied: the sources print no balance sheet at 2025-09-30 | 166,592 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Total Liabilities | 1,233,974 | 1,251,638 | Not supplied: the sources print no balance sheet at 2025-09-30 | 1,324,267 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Total Bristow Group Inc. stockholders' equity | 891,707 | 1,059,705 | Not supplied: the sources print no balance sheet at 2025-09-30 | 1,095,601 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Noncontrolling interests | -435 | -82 | Not supplied: the sources print no balance sheet at 2025-09-30 | -57 | USD thousands | Reported | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Total Equity | 891,272 | 1,059,623 | 1,036,149 | 1,095,544 | USD thousands | Reported total stockholders' equity including noncontrolling interests; the 2025-09-30 figure is from the statement of changes in equity | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| Total Debt | 689,783 | 671,454 | Not supplied: the sources print no balance sheet at 2025-09-30 | 741,739 | USD thousands | Calculated: current maturities of long-term debt plus long-term debt, less current maturities; carrying value net of issuance costs | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 689.783 | Net debt data; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95 | 200.895 | T4.4 EBITDA (Reported); 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94 | FY2024 / 2024-12-31 | USD | US$m | 3.43 | Calculated | Tier 1 audited statements | EBITDA is derived (operating income plus depreciation and amortization expense) because the issuer states none; it includes gains on disposals; debt is carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 442.28 | Net debt data; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95 | 200.895 | T4.4 EBITDA (Reported); 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94 | FY2024 / 2024-12-31 | USD | US$m | 2.20 | Calculated | Tier 1 audited statements | EBITDA is derived (operating income plus depreciation and amortization expense) because the issuer states none; it includes gains on disposals; net debt uses unrestricted cash |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 200.895 | T4.4 EBITDA (Reported); 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94 | 43.269 | T4.5 Cash Interest Paid; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 96 | FY2024 / 2024-12-31 | USD | US$m | 4.64 | Calculated | Tier 1 audited statements | EBITDA is derived (operating income plus depreciation and amortization expense) because the issuer states none; it includes gains on disposals; cash interest paid, not interest expense |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 671.454 | Net debt data; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95 | 229.075 | T4.4 EBITDA (Reported); 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94 | FY2025 / 2025-12-31 | USD | US$m | 2.93 | Calculated | Tier 1 audited statements | EBITDA is derived (operating income plus depreciation and amortization expense) because the issuer states none; it includes gains on disposals; debt is carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 385.246 | Net debt data; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95 | 229.075 | T4.4 EBITDA (Reported); 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94 | FY2025 / 2025-12-31 | USD | US$m | 1.68 | Calculated | Tier 1 audited statements | EBITDA is derived (operating income plus depreciation and amortization expense) because the issuer states none; it includes gains on disposals; net debt uses unrestricted cash |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 229.075 | T4.4 EBITDA (Reported); 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94 | 46.8 | T4.5 Cash Interest Paid; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 96 | FY2025 / 2025-12-31 | USD | US$m | 4.89 | Calculated | Tier 1 audited statements | EBITDA is derived (operating income plus depreciation and amortization expense) because the issuer states none; it includes gains on disposals; cash interest paid, not interest expense |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 741.739 | Net debt data; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4 | 255.167 | T4.8 LTM EBITDA (Reported); 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 | 2026-09-30 | USD | US$m | 2.91 | Calculated | Tier 1 and Tier 2b: audited year plus unaudited nine-month stubs | EBITDA is derived (operating income plus depreciation and amortization expense) because the issuer states none; it includes gains on disposals; debt is carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 508.361 | Net debt data; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4 | 255.167 | T4.8 LTM EBITDA (Reported); 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 | 2026-09-30 | USD | US$m | 1.99 | Calculated | Tier 1 and Tier 2b: audited year plus unaudited nine-month stubs | EBITDA is derived (operating income plus depreciation and amortization expense) because the issuer states none; it includes gains on disposals; net debt uses unrestricted cash |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 255.167 | T4.8 LTM EBITDA (Reported); 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 | 46.856 | T4.8 LTM Cash Interest Paid; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 6 | 2026-09-30 | USD | US$m | 5.45 | Calculated | Tier 1 and Tier 2b: audited year plus unaudited nine-month stubs | EBITDA is derived (operating income plus depreciation and amortization expense) because the issuer states none; it includes gains on disposals; cash interest paid, not interest expense |
| EBITDA margin | EBITDA (Reported) / Revenue x 100 | 200.895 | T4.4 and T4.5 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | 1415.491 | T4.4 and T4.6 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | FY2024 / 2024-12-31 | USD | US$m | 14.19 | Calculated | Tier 1 and Tier 2b | Percentage; LTM figures are constructed in T4.8 |
| EBITDA margin | EBITDA (Reported) / Revenue x 100 | 229.075 | T4.4 and T4.5 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | 1490.512 | T4.4 and T4.6 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | FY2025 / 2025-12-31 | USD | US$m | 15.37 | Calculated | Tier 1 and Tier 2b | Percentage; LTM figures are constructed in T4.8 |
| EBITDA margin | EBITDA (Reported) / Revenue x 100 | 255.167 | T4.4 and T4.5 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | 1615.644 | T4.4 and T4.6 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | 2026-09-30 | USD | US$m | 15.79 | Calculated | Tier 1 and Tier 2b | Percentage; LTM figures are constructed in T4.8 |
| Capital expenditures / revenue | Capital expenditures / Revenue x 100 | 142.021 | T4.4 and T4.5 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | 1490.512 | T4.4 and T4.6 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | FY2025 / 2025-12-31 | USD | US$m | 9.53 | Calculated | Tier 1 and Tier 2b | Percentage; LTM figures are constructed in T4.8 |
| Capital expenditures / revenue | Capital expenditures / Revenue x 100 | 158.644 | T4.4 and T4.5 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | 1615.644 | T4.4 and T4.6 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | 2026-09-30 | USD | US$m | 9.82 | Calculated | Tier 1 and Tier 2b | Percentage; LTM figures are constructed in T4.8 |
| Operating cash flow / total debt | Net cash from operating activities / Total debt x 100 | 170.9 | T4.4 and T4.5 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | 741.739 | T4.4 and T4.6 and T4.8; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96 | 2026-09-30 | USD | US$m | 23.04 | Calculated | Tier 1 and Tier 2b | Percentage; LTM figures are constructed in T4.8 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_vtol_vtol-20241231.htm.jsonl | Annual report, audited (auditor report in the filing) | FY2024, FY2023 and nine months ended 2022-12-31 | USD | thousands | Bristow Group Inc. consolidated | US GAAP | Tier 1 audited statements | Fiscal 2024 balance sheet, debt and ABL; agreement check on 2024 comparatives | Earlier annual report; the 2022 column is a nine-month period |
| 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl | Annual report, audited (auditor report in the filing) | FY2025, FY2024, FY2023 | USD | thousands | Bristow Group Inc. consolidated | US GAAP | Tier 1 audited statements | Fiscal 2024 and 2025 statements, notes, segments, maturity schedules | Governance items incorporated from a proxy statement not supplied |
| 10-Q_2026-03-31_vtol_vtol-20260331.htm.jsonl | Quarterly report, unaudited | Q1 2026 and Q1 2025; Q4 2025 in the MD&A comparison | USD | thousands | Bristow Group Inc. consolidated | US GAAP | Tier 2b unaudited, no auditor review stated | Q4 2025 and Q1 2026 quarterly comparison; refinancing facts | Condensed notes |
| 10-Q_2026-06-30_vtol_vtol-20260630.htm.jsonl | Quarterly report, unaudited | Q2 2026 and six months 2026 with 2025 | USD | thousands | Bristow Group Inc. consolidated | US GAAP | Tier 2b unaudited, no auditor review stated | Q2 2026 statements; Berry Aviation as subsequent event | Berry Aviation price shown before purchase accounting |
| 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl | Quarterly report, unaudited | Q3 2026 and nine months 2026 with 2025 | USD | thousands | Bristow Group Inc. consolidated | US GAAP | Tier 2b unaudited, no auditor review stated | Latest period, balance sheet and debt | Berry Aviation allocation preliminary; no maturity schedule reprinted |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bristow Group Inc. | Reporting entity and registrant; the debt note says the company issued the 2033 notes | December 31 | USD | thousands | Consolidated with subsidiaries; Bristow Special Mission Inc. consolidated from 2026-07-13 | US GAAP | FY2023, FY2024, FY2025; Q1, Q2 and Q3 2026 with 2025 comparatives; nine months 2025 and 2026 |
| Certain material domestic and foreign subsidiaries | Guarantors of the 2033 notes and the ABL Facility; not named in the debt note | December 31 | USD | thousands | Inside the consolidation | US GAAP | Same as the registrant |
| Bristow Helicopters Limited and Bristow LLC | Borrowers under the ABL Facility | December 31 | USD | thousands | Inside the consolidation | US GAAP | Same as the registrant |
| Cougar Helicopters Inc. | Unconsolidated affiliate: 25% voting and 40% economic interest; related party | December 31 | USD | thousands | Equity-method affiliate outside consolidated debt and EBITDA | US GAAP | Related-party flows in each report |

The 2026-09-30 balance sheet is the latest and the third-quarter report states no subsequent event after it; the Berry Aviation acquisition on 2026-07-13 is inside Q3 2026 and was a subsequent event only in the second-quarter report.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Money tables restated from thousands to millions | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl | Unit conversion | USD 689,783 thousand | USD 689.783m | The money unit is millions even where statements print thousands | All net debt, liquidity, maturity and chart tables |
| EBITDA derived as operating income plus depreciation and amortization expense | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl | Derivation (Analyst Judgement) | Operating income USD 158,806 thousand | EBITDA USD 229,075 thousand | The issuer states no EBITDA; income statement D&A is used, not the larger cash flow D&A that includes power-by-hour amortization | FY2024, FY2025, nine months 2025, nine months 2026, LTM |
| LTM constructed as FY2025 plus nine months 2026 less nine months 2025 | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl | Derived period | FY2025 EBITDA USD 229,075 thousand | LTM EBITDA USD 255,167 thousand | Latest full year plus current stub less prior-year comparable stub; all components available and comparable | LTM to 2026-09-30 |
| Debt pro forma maturity ladder used with a principal-to-carrying reconciliation | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 114 | Presentation | Reported schedule principal USD 683,513 thousand | Pro forma schedule principal USD 783,513 thousand | The 2026 quarterly reports print no maturity schedule; the year-end pro forma schedule is the latest stated | Chart data: debt maturities |
| Gap cells for lines printed as a dash | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 | Missing value | Dash in the filing | Not supplied | A dash is a missing value, never read as zero | Nine months 2025 and annual columns |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM | USD 1,490.512m | USD 1,238.380m | USD 1,113.248m | USD 1,615.644m | Calculated | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 | Fiscal 2025 plus nine months 2026 less nine months 2025; Berry Aviation is in the 2026 stub only |
| Operating income | LTM | USD 158.806m | USD 121.954m | USD 126.723m | USD 154.037m | Calculated | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 | Includes gains on disposal of assets and earnings from unconsolidated affiliates |
| Depreciation and amortization expense | LTM | USD 70.269m | USD 82.753m | USD 51.892m | USD 101.130m | Calculated | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 | Income statement line; nine months 2026 includes USD 20.2 million of accelerated S76D depreciation and USD 1.9 million for the ERP system |
| EBITDA (Reported) | LTM | USD 229.075m | USD 204.707m | USD 178.615m | USD 255.167m | Calculated | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 | Derived; see the normalization register |
| Cash Interest Paid | LTM | USD 46.800m | USD 41.218m | USD 41.162m | USD 46.856m | Calculated | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 | Cash flow statement; not interest expense |
| Net cash from operating activities | LTM | USD 198.406m | USD 93.987m | USD 121.493m | USD 170.900m | Calculated | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 | Nine months 2026 includes working capital uses of USD 73.3 million |
| Capital expenditures | LTM | USD 142.021m | USD 129.516m | USD 112.893m | USD 158.644m | Calculated | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 | Cash capital expenditures; unfunded commitments are not included |
| Net income | LTM | USD 129.427m | USD 62.015m | USD 110.751m | USD 80.691m | Calculated | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 | Before noncontrolling interests |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | LTM to 2026-09-30 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue (USD millions) | 1415.491 | 1490.512 | 1615.644 | Rising | Fiscal 2025 revenue grew 5.30% on fiscal 2024; LTM revenue is 8.39% above fiscal 2025, helped by the new government contracts and Berry Aviation |
| Margin | EBITDA margin (%) | 14.19 | 15.37 | 15.79 | Rising | Derived EBITDA; accelerated depreciation of about USD 22.1 million in nine months 2026 is added back |
| Cash flow | Cash conversion: operating cash flow / EBITDA (%) | 88.31 | 86.61 | 66.98 | Falling | Working capital uses and start-up costs on new government contracts absorbed cash in 2026 |
| Cash flow | Free cash flow after capital expenditures (USD millions) | -77.973 | 56.385 | 12.256 | Improved from FY2024, below FY2025 | Capital returns of USD 47.189 million in nine months 2026 exceeded free cash flow |
| Liquidity | Cash plus stated ABL availability (USD millions) | 311.503 | 346.908 | 287.278 | Falling | Stated availability does not reconcile to commitments less letters of credit |
| Leverage | Net debt / EBITDA (x) | 2.20 | 1.68 | 1.99 | Rising in 2026 | Gross leverage near 2.9x in both latest periods |
| Coverage | EBITDA / cash interest (x) | 4.64 | 4.89 | 5.45 | Rising | Cash interest paid nearly flat across FY2025 and LTM |

### Quarterly operating trend

| Line (USD thousands) | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Source |
| --- | --- | --- | --- | --- | --- |
| Total revenues | 377,264 | 388,705 | 411,755 | 437,920 | 10-Q_2026-03-31_vtol_vtol-20260331.htm.jsonl, page 21; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2 and 26 |
| Offshore Energy Services revenue | 247,454 | 254,333 | 261,618 | 256,016 | 10-Q_2026-03-31_vtol_vtol-20260331.htm.jsonl, page 21; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 26 |
| Government Services revenue | 100,097 | 107,870 | 112,234 | 130,036 | 10-Q_2026-03-31_vtol_vtol-20260331.htm.jsonl, page 21; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 26 |
| Other Services revenue | 29,713 | 26,502 | 37,903 | 51,868 | 10-Q_2026-03-31_vtol_vtol-20260331.htm.jsonl, page 21; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 26 |
| Operating income | 32,083 | 34,675 | 39,576 | 47,703 | 10-Q_2026-03-31_vtol_vtol-20260331.htm.jsonl, page 21; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 26 |
| Government Services operating income (loss) | (1,607) | 943 | (2,145) | (1,425) | 10-Q_2026-03-31_vtol_vtol-20260331.htm.jsonl, page 21; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 26 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA, unadjusted, derived from components when not stated | The issuer states no EBITDA or adjusted EBITDA in any source read | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 | All periods | Leverage and cover cannot be compared with issuer figures | Financial foundation; Fundamental credit | Use derived EBITDA, labelled house-calculated; obtain issuer measures from earnings releases if supplied |
| Depreciation and amortization for EBITDA | Income statement depreciation and amortization expense | The cash flow statement and segment note total depreciation and amortization including power-by-hour amortization recorded in operating expenses | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 96 and 134; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5 and 21 | FY2024, FY2025, nine months 2025 and 2026, LTM | Adding power-by-hour amortization of USD 11.276 million to LTM EBITDA would give USD 266.443 million and total leverage 2.78x against 2.91x | Financial foundation; Fundamental credit | Keep the income statement line as the base; treat the larger figure as an Analyst Judgement sensitivity |
| EBITDA and disposals | EBITDA excluding gains on asset disposals if the method adjusted | Operating income includes gains on disposal of assets of USD 11.785 million in FY2025 and USD 9.716 million in nine months 2026 | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 3 | FY2024, FY2025, LTM | LTM gains net of the prior-year stub are USD 7.605 million, 2.98% of LTM EBITDA | Financial foundation | Left in derived EBITDA because the method calls for unadjusted EBITDA; flagged |
| Total debt | Balance-sheet carrying value, net of issuance costs; principal kept apart | Carrying value USD 741.739 million at 2026-09-30; principal stated only for the 2033 notes (USD 500.000 million) | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 12–13 | 2026-09-30 | Unamortized fees of USD 18.2 million, so principal is about USD 759.9 million by arithmetic on rounded fees | Financial foundation; Fundamental credit | Use carrying value; state principal as not exactly stated for UKSAR Debt and IRCG Debt |
| Net debt and cash | Unrestricted cash and cash equivalents | Cash flow statement closing cash USD 235.832 million includes restricted cash of USD 2.454 million | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3 and 6 | 2026-09-30 | USD 2.454 million | Financial foundation | Use unrestricted cash USD 233.378 million for net debt and liquidity |
| Operating leases | Lease liabilities on their own balance-sheet lines are not added to debt | Current USD 67.389 million and long-term USD 166.592 million operating lease liabilities; undiscounted payments USD 282.805 million | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 4 and 38 | 2026-09-30 | Lease-adjusted debt would be higher by USD 233.981 million | Fundamental credit | Keep leases outside debt; show them as a separate claim |
| ABL availability | Undrawn committed facilities net of letters of credit | Remaining availability stated at USD 53.9 million against commitments of USD 70.0 million less USD 10.1 million of letters of credit | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 13–14 and 33 | 2025-12-31, 2026-03-31, 2026-06-30, 2026-09-30 | USD 6.0 million at 2026-09-30; USD 8.5 million at 2026-03-31; USD 0.8 million at 2026-06-30 | Financial foundation; Fundamental credit | Use the stated figure labelled as stated; the borrowing base is not described |
| 6.750% notes maturity | One maturity date | January 2033 in the 2025 annual report; February 2033 in the 2026 quarterly reports | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 112; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 13 | 2026-09-30 | Month only | Financial foundation | Carry February 2033 from the latest report and flag |
| Berry Aviation consideration | One purchase price and one cash paid | USD 105.0 million in the second-quarter report; estimated USD 110.920 million in the third-quarter report; cash paid net of cash received USD 102.849 million | 10-Q_2026-06-30_vtol_vtol-20260630.htm.jsonl, page 18; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5 and 10 | Q3 2026 | Consideration less cash acquired is USD 101.588 million, USD 1.261 million below the cash flow line | Financial foundation; Business & governance | Use the cash flow line for net debt; price remains preliminary |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Reported statements, debt and liquidity as of 2026-09-30 | Ready | Unaudited quarterly figures; ABL availability stated by the issuer | Use as reported |
| Leverage and interest cover | Ready with Limitations | EBITDA is derived by the analyst; no issuer EBITDA; LTM includes a partial quarter of Berry Aviation | Label as house-calculated; request issuer adjusted EBITDA |
| Maturity wall | Ready with Limitations | Schedule printed at 2025-12-31 only, pro forma; no 2026 schedule | Carry the pro forma ladder and state its date |
| Debt stack and ranking | Ready with Limitations | Only the 2033 notes have a stated rank; principal of the equipment financings not stated | Obtain facility agreements |
| Covenant headroom | Not Ready | No covenant test, level or definition printed | Obtain executed indenture and facility agreements |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2033 senior secured notes | Senior secured notes | 489,444 | 500,000 | 500,000 | Not applicable | First-priority liens on substantially all tangible and intangible assets of the issuer and subsidiary guarantors, including certain pledged aircraft | Senior secured, first-priority liens | USD | 489,444 | Not applicable | 6.750% | fixed | Not applicable | Not applicable | Not applicable | February 2033 | 0 | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 12–13; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 114 |
| UKSAR Debt | Secured equipment financings, NatWest as arranger, agent and security trustee | 147,444 | Not supplied: only the carrying value and fees rounded to USD 0.1 million are stated | Not supplied: no drawn total stated | GBP 200 million aggregate, up to | Secured by 14 search and rescue helicopters per the 2025 annual report | Not supplied: rank not stated | GBP | 147,444 | Not applicable | SONIA plus 2.75% | floating | SONIA | 275 | Not applicable | March 2036 | Not supplied: only USD 27,943 thousand a year combined for UKSAR Debt and IRCG Debt is printed | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 12–13 and 37; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 113 |
| IRCG Debt | Equipment financing, NatWest original lender, UK Export Finance guaranteeing 80% | 104,851 | Not supplied: only the carrying value and fees rounded to USD 0.1 million are stated | Not supplied: draws of EUR 93.4 million to 2024 and EUR 5.6 million in 2025 are stated separately | EUR 100.0 million aggregate, up to | Not supplied: the debt note states no collateral | Not supplied: rank not stated | EUR | 104,851 | Not applicable | EURIBOR plus 1.95% | floating | EURIBOR | 195 | Not applicable | June 2031 | Not supplied: semi-annual installments from June 2026, amounts not stated individually | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 12–13 and 37; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 113 |
| ABL Facility | Asset-backed revolving credit facility, Barclays Bank plc as agent | 0 | 0 | 0 | 70,000 | Secured by certain accounts receivable and the deposit accounts into which they are paid; guaranteed by the parent and certain subsidiaries | Not supplied: rank not stated | USD | 0 | Not applicable | Not supplied: the margin level is not stated | floating | SOFR | Not supplied: margin not stated | Not supplied: no floor stated | January 26, 2031 | 0 | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 13–14; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 76 |

### Analysis by dimension

Gross leverage has been stable near 2.9x while net leverage moved with cash. Net debt fell by USD 57.0 million in fiscal 2025 as operating cash flow of USD 198.4 million funded capital spending of USD 142.0 million and debt prepayments, then rose by USD 123.1 million in the nine months to 2026-09-30 as USD 129.5 million of capital spending, USD 102.8 million for Berry Aviation, USD 36.1 million of buybacks and USD 11.1 million of dividends exceeded operating cash flow of USD 94.0 million. The January 2026 refinancing replaced USD 400 million of 2028 secured notes with USD 500 million of 2033 secured notes, which lengthened the maturity profile and added about USD 100 million of principal, so creditors carry a larger gross debt base into the first full period with Berry Aviation and net leverage falls only if EBITDA grows or cash is rebuilt.
Basis: calculation C7; calculation C18; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5 and 13; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 112 and 96

Cash interest cover of 5.45x for the twelve months to 2026-09-30 compares with 4.89x in fiscal 2025 because derived EBITDA rose while cash interest paid was almost unchanged. The cash measure flatters coverage relative to the income statement: interest expense, net rose by USD 8.5 million in the nine months because USD 6.5 million less interest was capitalised once aircraft entered service and because debt was higher during the refinancing, so an accrual-based cover would be lower than the cash-based cover shown.
Basis: calculation C10; calculation C6; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3 and 33

Cash conversion weakened. Operating cash flow was 86.61% of derived EBITDA in fiscal 2025 and 66.98% for the twelve months to 2026-09-30 because nine months of 2026 absorbed USD 73.3 million of working capital, mainly receivables on higher activity and start-up costs on new government contracts paid before revenue starts. Free cash flow after capital spending fell from USD 56.4 million in fiscal 2025 to USD 12.3 million on a twelve-month basis and was negative in the nine months of 2026, when operating cash flow of USD 94.0 million was below capital expenditures of USD 129.5 million, so the 2026 buyback and dividend programme of USD 47.2 million was funded from cash on hand rather than from free cash flow.
Basis: calculation C15; calculation C22; calculation C23; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 5 and 35

Liquidity of USD 287.3 million at 2026-09-30 is USD 59.6 million below the USD 346.9 million at 2025-12-31, of which USD 52.8 million is lower unrestricted cash and USD 6.8 million is lower stated ABL availability. Current maturities of long-term debt are USD 27.4 million and no other scheduled principal falls due before 2031, but about 75% of cash is held outside the U.S. against 43% three months earlier and repatriation could be taxed, so liquidity available to the U.S. borrowers is lower than the headline. The ABL Facility is undrawn, with USD 10.1 million of letters of credit outstanding, and its availability does not reconcile to commitments less letters of credit.
Basis: calculation C11; calculation C19; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 4, 13–14 and 33; 10-Q_2026-06-30_vtol_vtol-20260630.htm.jsonl, page 31; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 72

Data quality and definition risks are concentrated in EBITDA. The issuer states no EBITDA, so every leverage and cover figure rests on an analyst definition that includes gains on asset disposals and excludes power-by-hour amortization from the add-back; adding that amortization would lower LTM total leverage to 2.78x from 2.91x. The maturity ladder is the year-end 2025 pro forma schedule rather than a 2026-09-30 schedule, the principal of the two equipment financings is not stated, and the 2033 notes are dated January 2033 in the annual report but February 2033 in the quarterly reports.
Basis: calculation C17; calculation C12; 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 112 and 114; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 13

The strongest contrary evidence to a rising-leverage concern is that net leverage is still below 2x, cover is above 5x, no maturity beyond amortisation falls before 2031 and the revolver is undrawn; that view wins if the Government Services segment returns to profit as the new UK and Irish contract transitions complete and Berry Aviation contributes a full year. It loses if the segment's operating loss persists, buybacks continue at the 2026 pace without free cash flow to fund them, or cash held outside the U.S. cannot be moved to the borrowers, which would be visible in the next quarter's net debt and the ABL availability statement.
Basis: 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 19–20, 28 and 36; calculation C9; calculation C15

## Calculations

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | EBITDA (Reported), FY2024 | Operating income USD 132,608 thousand plus depreciation and amortization expense USD 68,287 thousand | USD 200,895 thousand | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94 |
| C2 | EBITDA (Reported), FY2025 | USD 158,806 thousand plus USD 70,269 thousand | USD 229,075 thousand | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–94 |
| C3 | EBITDA (Reported), nine months 2025 | USD 126,723 thousand plus USD 51,892 thousand | USD 178,615 thousand | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| C4 | EBITDA (Reported), nine months 2026 | USD 121,954 thousand plus USD 82,753 thousand | USD 204,707 thousand | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–3 |
| C5 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 USD 229,075 thousand plus nine months 2026 USD 204,707 thousand less nine months 2025 USD 178,615 thousand; cross-check LTM operating income USD 154,037 thousand plus LTM D&A USD 101,130 thousand | USD 255,167 thousand | C2; C3; C4 |
| C6 | LTM cash interest paid to 2026-09-30 | USD 46,800 thousand plus USD 41,218 thousand less USD 41,162 thousand | USD 46,856 thousand | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 6 |
| C7 | Net debt = gross debt less cash | FY2024 689.783 less 247.503; FY2025 671.454 less 286.208; 2026-09-30 741.739 less 233.378 (USD millions) | 442.280; 385.246; 508.361 (USD millions) | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 94–95; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 3–4 |
| C8 | Total debt / EBITDA | 689.783 / 200.895; 671.454 / 229.075; 741.739 / 255.167 | 3.43x; 2.93x; 2.91x | C1; C2; C5; C7 |
| C9 | Net debt / EBITDA | 442.280 / 200.895; 385.246 / 229.075; 508.361 / 255.167 | 2.20x; 1.68x; 1.99x | C1; C2; C5; C7 |
| C10 | EBITDA / cash interest | 200.895 / 43.269; 229.075 / 46.800; 255.167 / 46.856 | 4.64x; 4.89x; 5.45x | C1; C2; C5; C6 |
| C11 | Liquidity at 2026-09-30 | Unrestricted cash USD 233.378 million plus stated ABL availability USD 53.9 million equals USD 287.278 million; the issuer states USD 287.3 million | USD 287.3 million | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 33 |
| C12 | Maturity ladder total (pro forma, 2025-12-31) | 27.943 x 5 plus 643.798 (USD millions) | 783.513 (USD millions) | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 114 |
| C13 | Principal to carrying value | 783.513 less 12.059 of unamortized fees less 100.000 of net principal added after year-end equals 671.454; fees are reported principal 683.513 less carrying 671.454; added principal is 500.000 less 400.000 | 671.454 (USD millions) | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 111–114 |
| C14 | Instrument carrying values at 2026-09-30 | 489.444 plus 147.444 plus 104.851 (USD millions) | 741.739 (USD millions) | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 12 |
| C15 | LTM figures to 2026-09-30 | Revenue 1,490,512 + 1,238,380 - 1,113,248; operating income 158,806 + 121,954 - 126,723; net income 129,427 + 62,015 - 110,751; operating cash flow 198,406 + 93,987 - 121,493; capital expenditures 142,021 + 129,516 - 112,893 (USD thousands) | Revenue 1,615,644; operating income 154,037; net income 80,691; operating cash flow 170,900; capital expenditures 158,644; free cash flow 12,256 (USD thousands) | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, pages 93–96; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2–6 |
| C16 | Cumulative leverage of the 2033 notes | 489.444 / 255.167 | 1.92x | C5; C14 |
| C17 | Power-by-hour sensitivity | LTM amortization 11,397 + 9,044 - 9,165 = 11,276; EBITDA 255,167 + 11,276 = 266,443; 741,739 / 266,443 (USD thousands) | Total leverage 2.78x | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 134; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 21 |
| C18 | Net debt movement | FY2025 385.246 less FY2024 442.280; 2026-09-30 508.361 less FY2025 385.246 (USD millions) | -57.034; 123.115 (USD millions) | C7 |
| C19 | Change in stated liquidity | Stated total at 2025-12-31 346.9 less stated total at 2026-09-30 287.3 (USD millions) | 59.6 (USD millions) | 10-K_2025-12-31_vtol_vtol-20251231.htm.jsonl, page 72; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 33 |
| C20 | Operating lease liabilities at 2026-09-30 | 67.389 plus 166.592 (USD millions) | 233.981 (USD millions) | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 4 |
| C21 | Nine-month 2026 quarters | Revenue 388.705 + 411.755 + 437.920; operating income 34.675 + 39.576 + 47.703 (USD millions) | 1,238.380; 121.954 (USD millions), equal to the nine-month statements | 10-Q_2026-03-31_vtol_vtol-20260331.htm.jsonl, page 21; 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, pages 2 and 26 |
| C22 | Cash conversion, operating cash flow / EBITDA | 198,406 / 229,075; 170,900 / 255,167; 177,420 / 200,895 | 86.61%; 66.98%; 88.31% | C1; C2; C5; C15 |
| C23 | Working capital used, nine months 2026 | 24,464 + 37,977 + 10,815 (USD thousands) | 73,256 (USD thousands) | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 5 |
| C24 | Fees on the 2026-09-30 debt | 10.6 + 5.6 + 2.0 (USD millions) | 18.2 (USD millions) | 10-Q_2026-09-30_vtol_vtol-20260930.htm.jsonl, page 13 |

## Gaps

- EBITDA is not stated by the issuer in any filing read, so EBITDA (Reported) is derived for every period; this restricts comparison with issuer or covenant leverage, leaves the EBITDA bridge not supplied because no add-backs are stated, and is a Medium gap, closed by an earnings release or compliance certificate that states EBITDA.
- Depreciation and amortization differs between the income statement and the cash flow statement by power-by-hour amortization, so EBITDA depends on which line is added back; this is a Medium gap, closed by the issuer's own EBITDA definition.
- Lines printed as a dash in the filings, namely the loss on extinguishment of debt, dividends, the acquisition and corporate segment revenue in the comparative periods, are Not supplied rather than zero; this restricts only those cells and is a Low gap.
- No balance sheet at 2025-09-30 is printed in the supplied filings, so that balance-sheet column holds only total equity from the statement of changes in equity; this restricts balance-sheet trends within 2025 and is a Low gap.
- Goodwill is not printed at the 2024 and 2025 year-ends because none existed on the balance sheet; the figure appears first at 2026-09-30 and is a Low gap for trend only.
- The principal and drawn amounts of the UKSAR Debt and the IRCG Debt are not stated, only carrying values and fees rounded to USD 0.1 million, so their contractual principal is not exactly established; this is a Medium gap, closed by the facility agreements or a principal table.
- The ABL margin level and any floor are not stated, only a 25 basis point margin reduction in the January 2026 amendment, so the ABL cost of funds is not established; this is a Low gap, closed by the ABL agreement.
- The legal rank of the ABL Facility, the UKSAR Debt and the IRCG Debt is not stated, so they are left out of the debt stack and the stack understates total debt; this is a Medium gap, closed by the facility and intercreditor documents.
- The ABL availability stated by the issuer does not equal commitments less letters of credit at 2026-03-31, 2026-09-30 or, on commitments then in force, 2025-12-31, and no borrowing base is described; liquidity uses the stated figure and this is a Medium gap, closed by the ABL agreement and a borrowing base certificate.
- No maturity schedule is printed at 2026-09-30, so the ladder is the pro forma schedule at 2025-12-31 and does not reflect 2026 amortisation payments; this is a Medium gap, closed by the next annual report schedule.
- The 2033 notes are dated January 2033 in the annual report and February 2033 in the quarterly reports; the quarterly wording is carried and this is a Low gap, closed by the indenture.
- The Berry Aviation price is USD 105.0 million in the second-quarter report and an estimated USD 110.9 million in the third-quarter report, and cash paid net of cash acquired exceeds consideration less cash acquired by USD 1.261 million; the cash flow line is used for net debt and this is a Low gap until purchase accounting is final.
- Quarterly columns are not built into the statement tables; the quarterly operating trend is shown separately from the reported comparison tables and quarterly cash flow is not derived, which is a Low gap for sequential cash flow analysis.
- Operating lease liabilities and the defined benefit pension plans are outside total debt by the method's definition; leases are shown separately and pension funded status is not quantified here, which is a Low definition gap for lease-adjusted leverage.
- Covenant levels and headroom are not established because no covenant test or governing document is supplied; this is a High gap for any covenant conclusion and is closed by the executed indenture and facility agreements.

## Next module

The orchestrator selects the next module.
