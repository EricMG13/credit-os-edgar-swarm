---
issuer_id: gff-50725
module_id: CP-1
analysis_date: 2026-11-18
---

# CP-1 Financial foundation: Griffon Corp (gff-50725)

## Request

Financial foundation for Griffon Corp (issuer gff-50725) as of 2026-11-18, under the credit snapshot pathway. Scope: normalised statements for the continuing-operations perimeter, net debt, liquidity, leverage and interest cover, built from the four supplied filings and the Source readiness handoff.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-09-30_gff-20250930.htm.jsonl | Annual report on Form 10-K for the year ended 30 September 2025 | 2025-11-19 | fc0e17249f99e02270a17b9a7f2256446e6e5d40d93fbd4171ae85061e5c72d8 | Debt and liquidity at 2025-09-30 as first reported (availability of the revolver, the 2.4x compliance leverage), the pre-disposal perimeter, and the original 2025 cash flow total. The date is the signature date |
| 10-K_2026-09-30_gff-20260930.htm.jsonl | Annual report on Form 10-K for the year ended 30 September 2026 | 2026-11-17 | 92a3b051e05b0f1a1729b1e53dc85ac489959385dfef38d93cc2515c94a1d639 | Primary source: restated income statement and cash flow for FY2024 to FY2026, balance sheets at 2025-09-30 and 2026-09-30, debt note, liquidity, non-GAAP reconciliations and subsequent events. The date is the signature date |
| 10-Q_2026-03-31_gff-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-07 | 294b90cf2bfc764d150ad2661c4d88f4eb74b3458e1216b4553b6403a26f0165 | Compliance EBITDA for 2025 of 547,776 thousand as previously reported, for the definition comparison. The date is the signature date |
| 10-Q_2026-06-30_gff-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-08-05 | 96058c3de96a5c5432d03a061fc3a8aa41dcb03dc811c973c95926861cef64c7 | Nine-month 2026 and 2025 statements, balance sheet at 2026-06-30, debt before the August 2026 refinancing and the trailing twelve month build. The date is the signature date |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 358ac1d836ace37700461b65331ec7b85d10263a45413ac8e444e98640bca69d | Source perimeter, period conflict and gap list; confirms no executed legal documents are supplied |

## Findings

### Bottom line

Griffon Corp ended fiscal 2026 at 2.12x net debt to reported EBITDA with no material principal due before fiscal 2031, but the deleveraging came from asset sales while adjusted EBITDA was flat, so creditor protection depends on cash discipline after the disposals.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 53, 72, 103–105; calculation C1; calculation C5

Net debt fell to USD 946.66 million from USD 1,313.26 million a year earlier, helped by USD 304.38 million of disposal proceeds, while dividends and buybacks of USD 191.71 million absorbed most of free cash flow of USD 266.95 million. Pro forma for buybacks to 2026-11-16, net debt is USD 963.55 million, or 2.15x. Cash interest cover is 5.52x and liquidity is USD 324.23 million, but covenant levels are not supplied.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 53–54, 56, 73–74, 114; calculation C5; calculation C7; calculation C8; calculation C9; calculation C11; calculation C12

### Key findings

Leverage fell sharply in fiscal 2026 and now sits at 2.12x net debt to reported EBITDA (2.15x pro forma for buybacks to 2026-11-16) and 2.06x on issuer-adjusted EBITDA, against a compliance figure of 2.0x that uses principal net debt and adds stock-based compensation. The mechanism was disposal proceeds of USD 304.38 million from the AMES businesses, equal to 83.03% of the USD 366.60 million fall in net debt, with the term loan repaid in full and the 2028 notes refinanced by new notes and revolver borrowings. It was not earnings growth: adjusted EBITDA slipped 0.48% against a year earlier. The earlier ratios of 6.06x for FY2025 and 2.57x at June 2026 are not a like-for-like trend, because that debt was carried by the whole group including businesses since disposed of.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 53, 65–66, 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 18, 60; calculation C1; calculation C5; calculation C6; calculation C12; calculation C14

Operating earnings are stable but margins are eroding. Revenue rose 2.95% to USD 1,848.38 million on price and mix, offset by lower residential volume, gross margin slipped to 46.36% from 47.24%, and adjusted EBITDA margin has fallen in each of the last two years to 24.86%. Lower volume absorbs less overhead and material costs rose, so price increases are carrying the earnings that creditors rely on for coverage.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 45–46, 72; calculation C14

Cash generation is strong and consistent. Operating cash flow from continuing operations was USD 304.87 million and free cash flow USD 266.95 million, 58.08% of adjusted EBITDA, with capital expenditure of only USD 37.91 million. Shareholder returns took 71.81% of free cash flow, which leaves a cushion but is discretionary and can be raised: the board added USD 400 million of repurchase authority on 2026-11-16.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 54, 73; calculation C7; calculation C8; calculation C13

Interest burden is falling but not yet at its run rate. Cash interest of USD 81.08 million gave cover of 5.52x, yet it includes interest on debt that was repaid in August 2026, and the issuer states annual interest on the new notes of about USD 50 million. The new notes carry 6.25% against 5.75% on the retired notes, so the cost per dollar of debt rose while the amount of debt fell.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 57, 74, 104–105

Liquidity is adequate but conditional. Cash of USD 98.63 million plus revolver availability of USD 225.60 million gives USD 324.23 million, down from USD 584.72 million at 2025-09-30 because USD 260.00 million of the revolver is drawn, and USD 52.30 million of the cash is held outside the United States. The revolver matures in 2031 and the notes in 2034, so there is no refinancing event inside the next four fiscal years, but availability is subject to maintenance tests whose levels are not supplied.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 51, 56, 105; calculation C9

Griffon retains USD 215.58 million of related-party second-lien paid-in-kind notes and USD 139.50 million of equity-method investments from the joint ventures. Neither has a quoted price in the filing, so they add to asset cover only if they can be monetised.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71, 93–95

### Contrary evidence and what would change the view

The strongest evidence against a cautious reading is cash generation. Free cash flow of USD 266.95 million was 25.54% of year-end debt, interest is falling as the term loan and the 2028 notes are replaced, and shareholder returns of USD 191.71 million were covered by free cash flow, so debt could fall further without asset sales. The view would soften if adjusted EBITDA stabilises and buybacks stay below free cash flow for another year.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 53–54, 73; calculation C7; calculation C8

The view would harden if EBITDA keeps falling in step with margins, if buybacks funded partly by the revolver push net debt above the pro forma figure, or if the joint venture notes prove hard to collect. Pro forma net leverage after repurchases to 2026-11-16 is 2.15x, and every further USD 100 million of buybacks adds about 0.22x on reported EBITDA.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 54, 93–95; calculation C11

### Limitations

The leverage and cover ratios for FY2025 and June 2026 mix debt that financed divested businesses with continuing-operations EBITDA, so they overstate leverage and are not a clean trend, and FY2024 has no balance sheet on the restated perimeter.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-K_2025-09-30_gff-20250930.htm.jsonl, page 78

Covenant levels, the covenant calculation and the compliance certificate are not supplied, so headroom is not established, and trailing twelve month interest cover at June 2026 cannot be built because the quarterly report prints no cash interest paid.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, page 56; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 5


### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2026-09-30_gff-20260930.htm.jsonl | Annual report, Form 10-K | Years ended 2026-09-30, 2025-09-30 and 2024-09-30 (statements of operations and cash flows); balance sheets at 2026-09-30 and 2025-09-30 | USD | Thousands | Continuing operations (Building Products); AMES U.S., Canada, Australia and U.K. shown as discontinued operations for all periods; two equity-method joint ventures not consolidated | US GAAP | Tier 1: audited statements | Primary source for the FY2024 to FY2026 series, year-end debt, liquidity and the issuer's non-GAAP reconciliations | No balance sheet at 2024-09-30; no 2024 liquidity figure; covenant levels not printed |
| 10-K_2025-09-30_gff-20250930.htm.jsonl | Annual report, Form 10-K | Years ended 2025-09-30, 2024-09-30 and 2023-09-30; balance sheets at 2025-09-30 and 2024-09-30 | USD | Thousands | Griffon consolidated including the AMES businesses; two reportable segments | US GAAP | Tier 1: audited statements | Context for the pre-disposal perimeter, availability at 2025-09-30 and the first-reported compliance leverage of 2.4x | Not used for the restated series: its income statement, cash flow and segment figures include AMES |
| 10-Q_2026-06-30_gff-20260630.htm.jsonl | Quarterly report, Form 10-Q | Quarter and nine months ended 2026-06-30 and 2025-06-30; balance sheet at 2026-06-30 | USD | Thousands | Continuing operations; AMES North America sold 2026-06-09, AMES Australia held for sale, AMES U.K. ceased | US GAAP | Tier 2b: unaudited, no auditor report in the text | Nine-month columns, interim balance sheet, trailing twelve month construction | Unaudited; prints no cash paid for interest for the nine months; no balance sheet at 2025-06-30 |
| 10-Q_2026-03-31_gff-20260331.htm.jsonl | Quarterly report, Form 10-Q | Quarter and six months ended 2026-03-31 | USD | Thousands | Continuing operations; AMES reported as discontinued for all periods | US GAAP | Tier 2b: unaudited, no auditor report in the text | Definition check of compliance EBITDA for 2025 | Unaudited; six-month columns are not used in the statement tables |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Griffon Corporation | Issuer, parent registrant and borrower under the revolving credit agreement | 30 September | USD | Thousands | Consolidated, continuing operations; the 2026 annual report restates 2025 and 2024 for the AMES disposals | US GAAP | FY2024, FY2025, FY2026 (income statement and cash flow); 9M 2025 and 9M 2026 (income statement and cash flow); balance sheets at 2025-09-30, 2026-06-30 and 2026-09-30 |
| Clopay Corporation; Clopay Holding Corp.; Hunter Holdings Corporation; Hunter Fan Company; CornellCookson, LLC; Cornell Real Estate Holdings, LLC | Guarantors of the 6.25% senior notes due 2034 (named in the annual report); the revolver is guaranteed by material domestic subsidiaries | 30 September | USD | Thousands | Summarised guarantor information only, excluding non-guarantors | US GAAP | Years ended 2026-09-30 and 2025-09-30 |
| Veritage Brands (43% equity interest) and Griffon ANZ (49% equity interest) | Unconsolidated joint ventures; related parties; obligors on PIK notes held by Griffon | Not supplied: the annual report states no fiscal year end for them | USD and AUD | Thousands | Equity method on a three-month lag; no equity earnings recorded for fiscal 2026 | US GAAP | Veritage Brands summarised balance sheet at 2026-06-30 only |

Subsequent events flagged with their dates and kept out of the period figures: a cash dividend of USD 0.25 per share declared on 2026-11-16 and payable on 2026-12-16; share repurchases of USD 16.893 million between 2026-10-01 and 2026-11-16; and an added USD 400 million repurchase authority approved on 2026-11-16. The August 2026 refinancing falls inside fiscal 2026 and is in the year-end figures, but after the 2026-06-30 balance sheet.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 54, 114

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Statements kept in USD thousands as printed; the money tables convert exactly to USD millions (US$m) by dividing by 1,000 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–74 | Unit conversion | Thousands | US$m, three decimals | The chart, net debt and register tables use one money unit; no rate or rounding is involved | All periods |
| EBITDA (Reported) derived because the issuer states no unadjusted EBITDA: income from continuing operations plus net interest expense, income taxes and depreciation and amortization | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72, 73; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5, 58 | Derived metric | Not stated | 447,530 for FY2026; 216,805 for FY2025; 471,475 for FY2024; 325,537 for 9M 2026; 92,785 for 9M 2025 | Reported EBITDA is the primary denominator; it keeps impairments, retirement plan events and debt extinguishment inside earnings | FY2024, FY2025, FY2026, 9M 2025, 9M 2026 |
| Total Debt taken at balance-sheet carrying value: notes payable and current portion plus long-term debt, net | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71, 103; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 2, 18 | Debt basis | Principal 1,423,811 / 1,274,786 / 1,060,005 | Carrying 1,412,309 / 1,267,635 / 1,045,292 | Principal is never the leverage denominator; the difference is capitalised fees, original issue discount and premium | 2025-09-30, 2026-06-30, 2026-09-30 |
| Activity totals in the cash flow fixed rows include discontinued operations (continuing plus discontinued), so that the three totals, the foreign exchange effect and the net change reconcile | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 | Classification | Continuing operations only | Operating 305,043; investing 262,882; financing -568,492 for FY2026 | The filing prints discontinued operations as a separate block; the net change in cash covers both | All periods |
| Trailing twelve months to 2026-06-30 built as FY2025 plus 9M 2026 less 9M 2025 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5, 58 | Derived period | Not stated | EBITDA (Reported) 449,557; EBITDA (Adjusted) 454,607 | The only interim leverage that can be put on the same perimeter as the annual figures | 2026-06-30 |
| Balance sheet at 2025-09-30 taken as printed in the 2026 annual report, which shows the AMES assets and liabilities as held for sale (735,816 and 250,390) | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 71 | Perimeter | Printed in the 2025 annual report with AMES inside each line | Held-for-sale lines as printed in the 2026 annual report | Debt and cash are unchanged by the reclassification; the 2024 balance sheet is not printed on this basis and is left out | 2025-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | FY2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | 1,855,985 | 1,795,384 | 1,848,378 | 1,319,829 | 1,357,490 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Cost of goods and services | 983,585 | 947,284 | 991,400 | 691,254 | 730,714 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Gross profit | 872,400 | 848,100 | 856,978 | 628,575 | 626,776 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Selling, general and administrative expenses | 436,163 | 430,622 | 437,164 | 321,790 | 324,515 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Goodwill and intangible asset impairments | 0 | 243,612 | 0 | 243,612 | 0 | USD thousands | Reported; printed as a dash where nil, and the annual report states no impairment was recorded in FY2024 or FY2026 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Total operating expenses | 436,163 | 674,234 | 437,164 | 565,402 | 324,515 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Income from continuing operations before other income and expense | 436,237 | 173,866 | 419,814 | 63,173 | 302,261 | USD thousands | Reported; printed as Income from continuing operations above other income and expense (operating income) | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Interest expense | -103,821 | -95,737 | -85,826 | -72,763 | -64,254 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Interest income | 388 | 649 | 6,809 | 429 | 1,243 | USD thousands | Reported; FY2026 includes 5,891 of non-cash paid-in-kind interest from the joint ventures | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Debt extinguishment, net | -1,700 | 0 | -6,701 | 0 | -1,389 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Other, net | 989 | 4,466 | -5,867 | 858 | -5,192 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Total other income (expense) | -104,144 | -90,622 | -91,585 | -71,476 | -69,592 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Income before taxes from continuing operations | 332,093 | 83,244 | 328,229 | -8,303 | 232,669 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Provision for income taxes from continuing operations | 86,497 | 62,997 | 92,582 | -8,589 | 63,849 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Income from continuing operations | 245,596 | 20,247 | 235,647 | 286 | 168,820 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Income (loss) before tax from discontinued operations | -35,443 | 44,127 | 101,940 | 35,159 | -30,464 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Provision for income taxes of discontinued operations | 256 | 13,264 | 16,348 | 27,971 | 3,019 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Income (loss) from discontinued operations | -35,699 | 30,863 | 85,592 | 7,188 | -33,483 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Net income | 209,897 | 51,110 | 321,239 | 7,474 | 135,337 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5 |
| Net interest expense (issuer reconciliation) | 103,433 | 95,088 | 79,017 | 72,334 | 63,011 | USD thousands | Reported in the adjusted EBITDA reconciliation: interest expense less interest income | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 65; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 58 |
| Depreciation and amortization | 35,949 | 38,473 | 40,284 | 28,754 | 29,857 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 45, 73; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5, 58 |
| Stock-based compensation | 25,570 | 24,191 | 30,543 | 16,898 | 20,652 | USD thousands | Reported in the cash flow statement; continuing operations | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| EBITDA (Reported) | 471,475 | 216,805 | 447,530 | 92,785 | 325,537 | USD thousands | Calculated: income from continuing operations plus net interest expense, provision for income taxes and depreciation and amortization (calculation C1); the issuer states no unadjusted EBITDA | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4–5, 58 |
| EBITDA (Adjusted) | 482,292 | 461,820 | 459,593 | 338,965 | 331,752 | USD thousands | Issuer-stated adjusted EBITDA, continuing operations: adds back goodwill and intangible impairments, retirement plan events, debt extinguishment and strategic review costs (calculation C2) | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 65; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 58 |

### Segment schedule

| Business unit | FY2024 | FY2025 | FY2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Building Products: Residential repair and remodel | 1,011,932 | 956,653 | 985,860 | USD thousands | Reported; end-market split contains management assumptions on customer and product type | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 122–123 |
| Building Products: Commercial | 709,507 | 702,760 | 726,172 | USD thousands | Reported; end-market split contains management assumptions on customer and product type | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 122–123 |
| Building Products: Residential new construction | 134,546 | 135,971 | 136,346 | USD thousands | Reported; end-market split contains management assumptions on customer and product type | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 122–123 |
| Corporate and eliminations | Not supplied: no corporate or elimination line is printed | Not supplied: no corporate or elimination line is printed | Not supplied: no corporate or elimination line is printed | USD thousands | Building Products is the sole operating segment; the revenue of the two joint ventures is not reviewed by the chief operating decision maker | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 121–123 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | FY2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Income from continuing operations | 245,596 | 20,247 | 235,647 | 286 | 168,820 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Net cash provided by operating activities - continuing operations | 307,370 | 307,794 | 304,868 | 234,516 | 217,944 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Acquisition of property, plant and equipment | -50,279 | -41,692 | -37,914 | -32,498 | -23,736 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Proceeds from sale of business, net | 3,500 | 0 | 304,383 | 0 | 100,000 | USD thousands | Reported; FY2026 is 100,000 from AMES North America, 180,910 from AMES Australasia and 23,473 from the U.K. liquidation; the 9M 2026 column holds only the first | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Net cash provided by (used in) investing activities - continuing operations | -46,762 | -41,542 | 266,490 | -32,360 | 76,264 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Dividends paid | -35,806 | -39,692 | -40,531 | -31,622 | -30,939 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Purchase of shares for treasury | -309,916 | -183,271 | -151,180 | -161,709 | -119,055 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Proceeds from long-term debt | 217,000 | 63,000 | 1,110,000 | 63,000 | 50,000 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Payments of long-term debt | -167,367 | -178,524 | -1,473,801 | -139,018 | -199,019 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Net cash used in financing activities - continuing operations | -297,337 | -338,618 | -568,414 | -269,439 | -299,251 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Net cash provided by operating activities - discontinued operations | 69,897 | 48,224 | 175 | 47,144 | 20,873 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Net cash provided by (used in) investing activities - discontinued operations | -18,238 | 7,251 | -3,608 | 10,526 | -3,608 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Net cash used in financing activities - discontinued operations | -1,411 | -130 | -78 | -99 | -78 | USD thousands | Reported; outflows negative | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Cash Taxes Paid | 102,978 | 96,244 | 96,037 | Not supplied: the quarterly report prints no cash paid for taxes | Not supplied: the quarterly report prints no cash paid for taxes | USD thousands | Reported cash paid for taxes | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 74 |
| Net Cash from Operating Activities | 377,267 | 356,018 | 305,043 | 281,660 | 238,817 | USD thousands | Calculated: continuing plus discontinued operations (calculation C3); the continuing figure is the issuer's own line above | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Net Cash from Investing Activities | -65,000 | -34,291 | 262,882 | -21,834 | 72,656 | USD thousands | Calculated: continuing plus discontinued operations (calculation C3) | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Net Cash from Financing Activities | -298,748 | -338,748 | -568,492 | -269,538 | -299,329 | USD thousands | Calculated: continuing plus discontinued operations (calculation C3) | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| FX Effect on Cash | -1,970 | 1,628 | 154 | 2,553 | -839 | USD thousands | Reported effect of exchange rate changes on cash and equivalents | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Net Cash Change | 11,549 | -15,393 | -413 | -7,159 | 11,305 | USD thousands | Reported net increase (decrease) in cash and equivalents | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Opening Cash | 102,889 | 114,438 | 99,045 | 114,438 | 99,045 | USD thousands | Reported cash and equivalents at beginning of period | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Closing Cash | 114,438 | 99,045 | 98,632 | 107,279 | 110,350 | USD thousands | Reported cash and equivalents at end of period | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 5–6 |
| Cash Interest Paid | 100,676 | 92,887 | 81,084 | Not supplied: the quarterly report prints no cash paid for interest | Not supplied: the quarterly report prints no cash paid for interest | USD thousands | Reported cash paid for interest, a positive amount; the filing does not say whether any belongs to discontinued operations | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 74 |

### T4.6 Balance sheet

| Line item | FY2025 | 9M 2026 | FY2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 99,045 | 110,350 | 98,632 | USD thousands | Reported cash and equivalents | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Accounts receivable, net | 196,957 | 201,696 | 191,167 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Inventories | 171,747 | 185,532 | 183,577 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Prepaid and other current assets | 42,079 | 54,565 | 60,240 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Assets of discontinued operations held for sale | 735,816 | 171,466 | 0 | USD thousands | Reported; the 2026-09-30 line is printed as a dash and the annual report states no assets remained classified as held for sale | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Total current assets | 1,245,644 | 723,609 | 533,616 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Property, plant and equipment, net | 195,950 | 204,691 | 208,683 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Operating lease right-of-use assets | 53,041 | 65,335 | 63,979 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Goodwill | 191,253 | 191,253 | 191,253 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Intangible assets, net | 363,955 | 346,815 | 343,611 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Equity method investments | 0 | 118,600 | 139,496 | USD thousands | Reported; the 2025-09-30 line is printed as a dash and the joint ventures were formed in June and July 2026 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Notes receivable (related party) | 0 | 162,039 | 215,584 | USD thousands | Reported; the 2025-09-30 line is printed as a dash and the joint ventures were formed in June and July 2026 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Other assets | 26,191 | 23,713 | 22,882 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Total Assets | 2,076,034 | 1,836,055 | 1,719,104 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Notes payable and current portion of long-term debt | 8,033 | 8,011 | 5 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Accounts payable | 57,663 | 90,975 | 56,165 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Accrued liabilities | 114,628 | 130,553 | 127,876 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Current portion of operating lease liabilities | 15,473 | 16,834 | 16,897 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Liabilities of discontinued operations held for sale | 250,390 | 53,814 | 0 | USD thousands | Reported; the 2026-09-30 line is printed as a dash, consistent with the annual report's statement that nothing remained classified as held for sale | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Total current liabilities | 446,187 | 300,187 | 200,943 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Long-term debt, net | 1,404,276 | 1,259,624 | 1,045,287 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Long-term operating lease liabilities | 40,453 | 52,523 | 51,027 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Other liabilities | 111,146 | 94,565 | 115,070 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Total Liabilities | 2,002,062 | 1,706,899 | 1,412,327 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Total Equity | 73,972 | 129,156 | 306,777 | USD thousands | Reported | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 2 |
| Total Debt | 1,412,309 | 1,267,635 | 1,045,292 | USD thousands | Calculated: notes payable and current portion plus long-term debt, net, at carrying value (calculation C4); the 2026-09-30 and 2025-09-30 figures equal the debt note totals; principal is kept apart | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71, 103; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 2, 18 |

### T4.18 Debt instruments

Amounts are USD thousands as printed, at 2026-09-30.

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revolver due 2031 | Revolving credit facility; maximum 500,000 thousand with a 125,000 letter of credit sub-facility and a 200,000 multi-currency sub-facility | 256,329 | 260,000 | 260,000 | 500,000 | Secured on a first-priority basis by substantially all domestic assets of the Company and the guarantors | First-priority secured | USD | 256,329 | Not applicable | Term SOFR plus 1.75% (5.65% at 2026-09-30); base rate loans at prime plus 0.75% (7.75%); 0.20% fee on unused commitments | Floating | Term SOFR, or prime for base rate loans | 175 | Not applicable | 2031-08-18 | 0 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 56, 103, 105 |
| 6.25% Senior Notes due 2034 | Senior notes issued 2026-08-18 under Rule 144A and Regulation S | 788,958 | 800,000 | Not applicable | Not applicable | Unsecured; senior unsecured obligations guaranteed by certain domestic subsidiaries | Senior unsecured | USD | 788,958 | Not applicable | 6.25% fixed, payable semi-annually on April 1 and October 1 | Fixed | Not applicable | Not applicable | Not applicable | 2034-10-01 | 0 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 55, 103–104 |
| Other debt | Finance leases, primarily | 5 | 5 | Not applicable | Not applicable | Not supplied: no source states security | Not supplied: no source states ranking | USD | 5 | Not applicable | Variable as printed in the debt table; the finance lease discount rate is 7.29% | Floating | Not supplied: the table prints only Variable | Not supplied: not stated | Not applicable | Not supplied: only a weighted-average remaining term of 0.2 years is stated | 5 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 103, 106, 126 |

The three carrying values add to 1,045,292 thousand, the balance sheet Total Debt, so no separate financing cost adjustment row is needed.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, page 103

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM to 2026-06-30 | USD 1,795.384m | USD 1,357.490m | USD 1,319.829m | USD 1,833.045m | Calculated | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 4 | Continuing operations on the restated perimeter; unaudited stub |
| EBITDA (Reported) | LTM to 2026-06-30 | USD 216.805m | USD 325.537m | USD 92.785m | USD 449.557m | Calculated | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4, 58 | Derived from components; FY2025 includes a 243,612 thousand impairment that the 9M 2025 stub also includes, so the impairment nets out of the LTM |
| EBITDA (Adjusted) | LTM to 2026-06-30 | USD 461.820m | USD 331.752m | USD 338.965m | USD 454.607m | Calculated | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 65; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 58 | Issuer-stated adjusted EBITDA, continuing operations; the issuer states no TTM figure on this basis |
| Net interest expense | LTM to 2026-06-30 | USD 95.088m | USD 63.011m | USD 72.334m | USD 85.765m | Calculated | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 65; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 58 | Issuer reconciliation line; includes non-cash PIK interest income from the joint ventures in FY2026 |
| Capital expenditure | LTM to 2026-06-30 | USD 41.692m | USD 23.736m | USD 32.498m | USD 32.930m | Calculated | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 5 | Continuing operations, unaudited stub |
| Operating cash flow, continuing operations | LTM to 2026-06-30 | USD 307.794m | USD 217.944m | USD 234.516m | USD 291.222m | Calculated | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 5 | Continuing operations, unaudited stub |
| Cash interest paid | LTM to 2026-06-30 | USD 92.887m | Not supplied: the quarterly report prints no cash paid for interest | Not supplied: the quarterly report prints no cash paid for interest | Not calculable: the 9M 2026 and 9M 2025 stubs are not printed | Not Calculable | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 74; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 5 | A missing stub makes the derived figure missing; no estimate is made |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1412.309 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 71 | 216.805 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | FY2025 / 2025-09-30 | USD | US$m | 6.51 | Calculated | Tier 1: audited statements | Carrying-value debt over reported EBITDA of continuing operations; the 243,612 thousand impairment is inside reported EBITDA, and the debt was carried by the whole group including AMES businesses whose EBITDA is excluded from continuing EBITDA, so the ratio overstates leverage |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1313.264 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 71 | 216.805 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | FY2025 / 2025-09-30 | USD | US$m | 6.06 | Calculated | Tier 1: audited statements | Carrying-value debt over reported EBITDA of continuing operations; the 243,612 thousand impairment is inside reported EBITDA, and the debt was carried by the whole group including AMES businesses whose EBITDA is excluded from continuing EBITDA, so the ratio overstates leverage |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 216.805 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | 92.887 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 74 | FY2025 / 2025-09-30 | USD | US$m | 2.33 | Calculated | Tier 1: audited statements | Cash interest is cash paid for interest, not interest expense; reported EBITDA is depressed by the 243,612 thousand impairment |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1412.309 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 71 | 461.820 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | FY2025 / 2025-09-30 | USD | US$m | 3.06 | Calculated | Tier 1: audited statements | Carrying-value debt over issuer-adjusted EBITDA of continuing operations; the debt was carried by the whole group including AMES businesses whose EBITDA is excluded |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1313.264 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 71 | 461.820 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | FY2025 / 2025-09-30 | USD | US$m | 2.84 | Calculated | Tier 1: audited statements | Carrying-value net debt over issuer-adjusted EBITDA of continuing operations; the debt was carried by the whole group including AMES businesses whose EBITDA is excluded |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 461.820 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | 92.887 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 74 | FY2025 / 2025-09-30 | USD | US$m | 4.97 | Calculated | Tier 1: audited statements | Cash interest is cash paid for interest, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1267.635 | 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 2, 18 | 449.557 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4, 58 | 2026-06-30 | USD | US$m | 2.82 | Calculated | Tier 2b: unaudited | Carrying-value debt over reported EBITDA of continuing operations; the debt was carried by the whole group including AMES businesses disposed of or ceased after this date, and the structure was refinanced on 2026-08-18 |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1157.285 | 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 2, 18 | 449.557 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4, 58 | 2026-06-30 | USD | US$m | 2.57 | Calculated | Tier 2b: unaudited | Carrying-value debt over reported EBITDA of continuing operations; the debt was carried by the whole group including AMES businesses disposed of or ceased after this date, and the structure was refinanced on 2026-08-18 |
| EBITDA / cash interest | LTM EBITDA (Reported) / cash interest paid | 449.557 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4, 58 | Not calculable: the nine-month cash interest paid is not printed | Not supplied: no source states the nine-month cash paid for interest | 2026-06-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 2b: unaudited | No cash paid for interest is printed for the nine months, so no trailing twelve month figure exists |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1267.635 | 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 2, 18 | 454.607 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4, 58 | 2026-06-30 | USD | US$m | 2.79 | Calculated | Tier 2b: unaudited | Carrying-value debt over issuer-adjusted EBITDA of continuing operations; the debt was carried by the whole group including AMES businesses whose EBITDA is excluded |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1157.285 | 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 2, 18 | 454.607 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4, 58 | 2026-06-30 | USD | US$m | 2.55 | Calculated | Tier 2b: unaudited | Carrying-value net debt over issuer-adjusted EBITDA of continuing operations; the debt was carried by the whole group including AMES businesses whose EBITDA is excluded |
| Adjusted EBITDA / cash interest | LTM EBITDA (Adjusted) / cash interest paid | 454.607 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 4, 58 | Not calculable: the nine-month cash interest paid is not printed | Not supplied: no source states the nine-month cash paid for interest | 2026-06-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 2b: unaudited | No cash paid for interest is printed for the nine months, so no trailing twelve month figure exists |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1045.292 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71, 103 | 447.530 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | FY2026 / 2026-09-30 | USD | US$m | 2.34 | Calculated | Tier 1: audited statements | Carrying-value debt over reported EBITDA of continuing operations; issuer's credit agreement leverage is 2.0x on principal net debt over a compliance EBITDA that adds stock-based compensation |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 946.660 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71, 103 | 447.530 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | FY2026 / 2026-09-30 | USD | US$m | 2.12 | Calculated | Tier 1: audited statements | Carrying-value debt over reported EBITDA of continuing operations; issuer's credit agreement leverage is 2.0x on principal net debt over a compliance EBITDA that adds stock-based compensation |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 447.530 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | 81.084 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 74 | FY2026 / 2026-09-30 | USD | US$m | 5.52 | Calculated | Tier 1: audited statements | Cash interest is cash paid for interest, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1045.292 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71, 103 | 459.593 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | FY2026 / 2026-09-30 | USD | US$m | 2.27 | Calculated | Tier 1: audited statements | Carrying-value debt over issuer-adjusted EBITDA of continuing operations |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 946.660 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71, 103 | 459.593 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | FY2026 / 2026-09-30 | USD | US$m | 2.06 | Calculated | Tier 1: audited statements | Carrying-value net debt over issuer-adjusted EBITDA of continuing operations |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 459.593 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | 81.084 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 74 | FY2026 / 2026-09-30 | USD | US$m | 5.67 | Calculated | Tier 1: audited statements | Cash interest is cash paid for interest, not interest expense |
| Gross margin | Gross profit / Revenue x 100 | 872.400 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | 1855.985 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2024 | USD | US$m | 47.00 | Calculated | Tier 1: audited statements | Percent; continuing operations |
| Gross margin | Gross profit / Revenue x 100 | 848.100 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | 1795.384 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2025 | USD | US$m | 47.24 | Calculated | Tier 1: audited statements | Percent; continuing operations |
| Gross margin | Gross profit / Revenue x 100 | 856.978 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | 1848.378 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2026 | USD | US$m | 46.36 | Calculated | Tier 1: audited statements | Percent; continuing operations |
| EBITDA margin (reported) | EBITDA (Reported) / Revenue x 100 | 471.475 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | 1855.985 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2024 | USD | US$m | 25.40 | Calculated | Tier 1: audited statements | Percent; FY2025 includes the 243,612 thousand impairment |
| EBITDA margin (reported) | EBITDA (Reported) / Revenue x 100 | 216.805 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | 1795.384 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2025 | USD | US$m | 12.08 | Calculated | Tier 1: audited statements | Percent; FY2025 includes the 243,612 thousand impairment |
| EBITDA margin (reported) | EBITDA (Reported) / Revenue x 100 | 447.530 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72 | 1848.378 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2026 | USD | US$m | 24.21 | Calculated | Tier 1: audited statements | Percent; FY2025 includes the 243,612 thousand impairment |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Revenue x 100 | 482.292 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 65 | 1855.985 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2024 | USD | US$m | 25.99 | Calculated | Tier 1: audited statements | Percent; issuer-adjusted; the issuer prints 26.0%, 25.7% and 24.9% |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Revenue x 100 | 461.820 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 65 | 1795.384 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2025 | USD | US$m | 25.72 | Calculated | Tier 1: audited statements | Percent; issuer-adjusted; the issuer prints 26.0%, 25.7% and 24.9% |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Revenue x 100 | 459.593 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 65 | 1848.378 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2026 | USD | US$m | 24.86 | Calculated | Tier 1: audited statements | Percent; issuer-adjusted; the issuer prints 26.0%, 25.7% and 24.9% |
| Revenue growth | (Revenue / prior-year Revenue - 1) x 100 | 1795.384 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | 1855.985 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2025 | USD | US$m | -3.27 | Calculated | Tier 1: audited statements | Percent; both years on the restated continuing perimeter |
| Revenue growth | (Revenue / prior-year Revenue - 1) x 100 | 1848.378 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | 1795.384 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2026 | USD | US$m | 2.95 | Calculated | Tier 1: audited statements | Percent; both years on the restated continuing perimeter |
| Free cash flow | Operating cash flow, continuing less capital expenditure | 307.370 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | 50.279 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | FY2024 | USD | US$m | 257.091 | Calculated | Tier 1: audited statements | Levered, after cash interest and cash taxes, before dividends and buybacks; continuing operations |
| Free cash flow | Operating cash flow, continuing less capital expenditure | 307.794 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | 41.692 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | FY2025 | USD | US$m | 266.102 | Calculated | Tier 1: audited statements | Levered, after cash interest and cash taxes, before dividends and buybacks; continuing operations |
| Free cash flow | Operating cash flow, continuing less capital expenditure | 304.868 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | 37.914 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | FY2026 | USD | US$m | 266.954 | Calculated | Tier 1: audited statements | Levered, after cash interest and cash taxes, before dividends and buybacks; continuing operations |
| Free cash flow conversion (adjusted) | Free cash flow / EBITDA (Adjusted) x 100 | 266.102 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | 461.820 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 65 | FY2025 | USD | US$m | 57.62 | Calculated | Tier 1: audited statements | Percent; issuer-adjusted EBITDA |
| Free cash flow conversion (adjusted) | Free cash flow / EBITDA (Adjusted) x 100 | 266.954 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | 459.593 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 65 | FY2026 | USD | US$m | 58.08 | Calculated | Tier 1: audited statements | Percent; issuer-adjusted EBITDA |
| Capex / revenue | Capital expenditure / Revenue x 100 | 41.692 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | 1795.384 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2025 | USD | US$m | 2.32 | Calculated | Tier 1: audited statements | Percent; total capital expenditure, no maintenance and growth split is printed |
| Capex / revenue | Capital expenditure / Revenue x 100 | 37.914 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | 1848.378 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2026 | USD | US$m | 2.05 | Calculated | Tier 1: audited statements | Percent; total capital expenditure, no maintenance and growth split is printed |
| Operating cash flow / total debt | Operating cash flow, continuing / Total Debt x 100 | 307.794 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | 1412.309 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 71 | FY2025 | USD | US$m | 21.79 | Calculated | Tier 1: audited statements | Percent; carrying-value debt |
| Operating cash flow / total debt | Operating cash flow, continuing / Total Debt x 100 | 304.868 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 73 | 1045.292 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 71 | FY2026 | USD | US$m | 29.17 | Calculated | Tier 1: audited statements | Percent; carrying-value debt |
| Liquidity / total debt | (Cash + undrawn revolver) / Total Debt | 584.717 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 56, 71; 10-K_2025-09-30_gff-20250930.htm.jsonl, page 64 | 1412.309 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 71 | FY2025 | USD | US$m | 0.41 | Calculated | Tier 1: audited statements | Times; undrawn revolver is availability net of standby letters of credit and subject to covenants |
| Liquidity / total debt | (Cash + undrawn revolver) / Total Debt | 324.230 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 56, 71; 10-K_2025-09-30_gff-20250930.htm.jsonl, page 64 | 1045.292 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 71 | FY2026 | USD | US$m | 0.31 | Calculated | Tier 1: audited statements | Times; undrawn revolver is availability net of standby letters of credit and subject to covenants |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | FY2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue growth (%) | Not supplied: no restated 2023 revenue is printed | -3.27 | 2.95 | Rising from FY2025 to FY2026 | FY2026 growth came from price and mix of 6% offset by volume down 3% |
| Margin | Gross margin (%) | 47.00 | 47.24 | 46.36 | Falling from FY2025 to FY2026 | Overhead absorption on lower volume and higher material costs |
| Margin | Adjusted EBITDA margin (%) | 25.99 | 25.72 | 24.86 | Falling across the three years | Issuer-adjusted; adjusted EBITDA is flat while revenue rose |
| Cash flow | Operating cash flow, continuing (US$m) | 307.370 | 307.794 | 304.868 | Flat | Stable within 3 million dollars across three years |
| Cash flow | Capital expenditure (US$m) | 50.279 | 41.692 | 37.914 | Falling | Total capital expenditure; no maintenance and growth split is printed |
| Cash flow | Free cash flow (US$m) | 257.091 | 266.102 | 266.954 | Rising slightly, then flat in FY2026 | Operating cash flow less capital expenditure |
| Capital returns | Dividends and share purchases (US$m) | 345.722 | 222.963 | 191.711 | Falling | Dividends paid plus purchases of shares for treasury, continuing operations |
| Liquidity | Cash plus undrawn revolver (US$m) | Not supplied: no 2024 revolver availability is printed | 584.717 | 324.230 | Falling from FY2025 to FY2026 | The 2025 figure is on the revolver before the 2026 draw of 260,000 thousand |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt | Balance-sheet carrying value, current plus long-term, net of capitalised fees and discount | The issuer's Total debt in the liquidity table is the principal: 1,060,005 at 2026-09-30 (long-term debt net 1,045,287 plus current 5 plus issuance costs 14,713) | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 55, 71, 103; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 59 | 2025-09-30; 2026-06-30; 2026-09-30 | 14,713 thousand at 2026-09-30; 11,502 at 2025-09-30; 7,151 at 2026-06-30 | Financial foundation; Short credit snapshot | Carrying value used for every leverage ratio; principal kept in the debt stack and the reconciliation |
| EBITDA | EBITDA (Reported): income from continuing operations plus net interest, taxes and D&A, no add-backs | Adjusted EBITDA adds back impairments, retirement plan events, debt extinguishment and strategic review costs | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 65 | FY2024; FY2025; FY2026; 9M 2025; 9M 2026 | 12,063 thousand in FY2026; 245,015 in FY2025 (243,612 impairment); 10,817 in FY2024 | Financial foundation; Short credit snapshot | Reported EBITDA is the ratio denominator; adjusted EBITDA is shown beside it, labelled |
| Leverage ratio | Carrying-value net debt over reported EBITDA of continuing operations: 2.12x at 2026-09-30 | Credit agreement: principal net debt over EBITDA that adds stock-based compensation and includes discontinued operations not yet disposed: 2.0x at 2026-09-30, 2.4x at 2025-09-30, 2.2x at 2026-06-30 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 66; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 60 | 2025-09-30; 2026-06-30; 2026-09-30 | About 0.12x at 2026-09-30 (2.12x against 2.0x); about 0.37x at 2026-06-30 (2.57x against 2.2x); about 3.66x at 2025-09-30 (6.06x against 2.4x) | Financial foundation; Short credit snapshot | Both figures are shown with their definitions; the covenant test levels are not supplied, so headroom is not calculated |
| Compliance EBITDA for 2025 | Not applicable: not a method metric | 547,776 thousand in the 2026 annual report and the March 2026 quarterly report; 529,076 thousand in the June 2026 quarterly report, which deducts 18,700 thousand of EBITDA from divested and ceased operations | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 66; 10-Q_2026-03-31_gff-20260331.htm.jsonl, page 52; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 60 | FY2025 | 18,700 thousand, about 3.4% of the higher figure | Financial foundation | Both figures are kept; the later definition excludes divested EBITDA, the 2026 annual report figure does not |
| Revenue and EBITDA perimeter | One perimeter: continuing operations as restated in the 2026 annual report | The 2025 annual report prints FY2025 revenue of 2,519,926 thousand with AMES inside; the 2026 annual report restates it to 1,795,384 thousand | 10-K_2025-09-30_gff-20250930.htm.jsonl, page 78; 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | FY2024; FY2025 | 724,542 thousand of FY2025 revenue | Financial foundation; Business & governance | Restated figures are used for every ratio; the 2025 annual report figures are context only |
| Operating cash flow FY2025 | Continuing operations plus discontinued operations | The 2025 annual report prints 357,440 thousand; the 2026 annual report prints 307,794 continuing plus 48,224 discontinued, 356,018 in total | 10-K_2025-09-30_gff-20250930.htm.jsonl, page 79; 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 73–74 | FY2025 | 1,422 thousand, about 0.4%; the filings give no explanation | Financial foundation | The restated figures are used; the difference is left as a stated, unexplained gap |
| Interest | Cash interest paid for the cover ratio; net interest expense for EBITDA | Interest expense 85,826; net interest expense 79,017; cash interest in the debt note 82,207; cash paid for interest 81,084 (all thousands, FY2026) | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 65, 72–74, 104 | FY2026 | Cash paid 81,084 against cash interest in the note 82,207, a 1,123 thousand difference; net interest includes 5,891 of non-cash PIK income | Financial foundation; Short credit snapshot | Cash paid for interest is the cover denominator; the others are shown for reference |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Year-end 2026 leverage, net debt and liquidity of the continuing business | Ready with Limitations | Covenant test levels are not supplied; compliance EBITDA differs from reported EBITDA; USD 52.3 million of cash is held by non-U.S. subsidiaries | Obtain the executed credit agreement and compliance certificate to state headroom |
| Trend of leverage and cover for FY2024 to FY2026 | Ready with Limitations | FY2024 has no balance sheet on the restated perimeter; FY2025 and June 2026 debt was carried by the whole group including businesses since disposed of, so the earlier ratios are on a mismatched perimeter | Obtain a pro forma FY2025 debt and EBITDA split or the 2024 balance sheet restated for the disposals |
| Interim (June 2026) leverage and cover | Ready with Limitations | No cash paid for interest is printed for the nine months, so cover cannot be built; the debt is the pre-refinancing structure | Obtain the quarterly cash flow supplemental disclosure on interest paid |
| Pro forma net debt after year-end events | Not Ready | The dividend payout total is not stated; only the repurchases to 2026-11-16 are quantified | Obtain the dividend payment amount or the 8-K and share count at the record date |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2023-10-01 | 2024-09-30 |
| FY2025 | 2024-10-01 | 2025-09-30 |
| FY2026 | 2025-10-01 | 2026-09-30 |
| 9M 2025 | 2024-10-01 | 2025-06-30 |
| 9M 2026 | 2025-10-01 | 2026-06-30 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-09-30 | 1412.309 | 99.045 | 1313.264 | US$m | Reported at 2025-09-30 as printed in the 2026 annual report. Gross debt is carrying value: notes payable and current portion 8,033 plus long-term debt, net 1,404,276 thousand, including 36 thousand of finance leases; principal is 1,423.811 US$m |
| 2026-06-30 | 1267.635 | 110.350 | 1157.285 | US$m | Reported at 2026-06-30 in the June 2026 quarterly report, before the August 2026 refinancing. Gross debt is carrying value: 8,011 plus 1,259,624 thousand, including 11 thousand of finance leases; principal is 1,274.786 US$m |
| FY2026 / 2026-09-30 | 1045.292 | 98.632 | 946.660 | US$m | Reported at 2026-09-30. Gross debt is carrying value: 5 plus 1,045,287 thousand, including 5 thousand of finance leases; principal is 1,060.005 US$m. Cash includes 52.3 US$m held by non-U.S. subsidiaries |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Share repurchases of 175,568 shares for USD 16.893 million between 2026-10-01 and 2026-11-16 | 2026-11-16 | 16.893 | 963.553 | 2.15 | US$m | The 2026 annual report states the total for the period through 2026-11-16, which is the date used. Pro forma net debt is year-end net debt of 946.660 plus the repurchase cash; leverage is that over FY2026 EBITDA (Reported) of 447.530. Settlement timing is not stated, and no other post year-end cash flow is reflected |
| Cash dividend of USD 0.25 per share declared by the board, payable 2026-12-16 to holders of record on 2026-11-27 | 2026-11-16 | Not supplied: the total payout is not stated, only the per-share amount | Not supplied: the amount is not stated | Not supplied: the amount is not stated | US$m | Declared on 2026-11-16 and not paid at the as-of date. An added USD 400 million repurchase authority approved the same day is not a cash flow and changes no net debt until executed |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2025 / 2025-09-30 | 6.51 | 6.06 | x | Carrying-value debt over EBITDA (Reported) of continuing operations. Reported EBITDA includes the 243,612 thousand impairment, and the debt was carried by the whole group including AMES businesses whose EBITDA is excluded, so both ratios are overstated; the issuer's own 2.4x covers discontinued operations |
| 2026-06-30 | 2.82 | 2.57 | x | Trailing twelve months to 2026-06-30 (EBITDA (Reported) 449.557 US$m). The debt is the structure before the August 2026 refinancing and was carried by the whole group including AMES businesses disposed of afterwards; the issuer's own compliance leverage is 2.2x |
| FY2026 / 2026-09-30 | 2.34 | 2.12 | x | Carrying-value debt over EBITDA (Reported) of continuing operations after the disposals and refinancing; the issuer's compliance leverage is 2.0x on principal and a different EBITDA |

The first two rows are on a perimeter that does not match the debt, and only the FY2026 row has debt and earnings on the same continuing business.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2025 / 2025-09-30 | 2.33 | x | EBITDA (Reported) over cash paid for interest; reported EBITDA is depressed by the 243,612 thousand impairment and the issuer-adjusted cover is higher |
| 2026-06-30 | Not supplied: the nine-month cash paid for interest is not printed | x | No trailing twelve month cash interest can be built from the quarterly report |
| FY2026 / 2026-09-30 | 5.52 | x | EBITDA (Reported) over cash paid for interest of 81.084 US$m, which includes interest on the 2028 notes and the term loan before they were repaid |

FY2026 cash interest still includes the repaid 2028 notes and term loan, so run-rate cover should be higher.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2025 / 2025-09-30 | 99.045 | 485.672 | US$m | Cash as printed. Undrawn is the revolver availability: 500.000 maximum, no borrowings and 14.328 of standby letters of credit; availability is subject to loan covenants whose levels are not supplied |
| 2026-06-30 | 110.350 | 472.348 | US$m | Undrawn is revolver availability: 500.000 maximum, 15.000 drawn and 12.652 of standby letters of credit; subject to loan covenants |
| FY2026 / 2026-09-30 | 98.632 | 225.598 | US$m | Undrawn is revolver availability of the amended 2031 facility: 500.000 maximum, 260.000 drawn and 14.402 of standby letters of credit; 52.3 of the cash is held by non-U.S. subsidiaries |

Availability depends on covenant levels that are not supplied, and part of the cash sits outside the United States.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2027 | 0.005 | US$m | Finance lease balance due within fiscal 2027; the filing prints 5 thousand of minimum required payments |
| FY2028 | 0 | US$m | The filing states no minimum required debt payments in 2028 |
| FY2029 | 0 | US$m | The filing states no minimum required debt payments in 2029; the term loan due 2029 was repaid in full during fiscal 2026 |
| FY2030 | 0 | US$m | The filing states no minimum required debt payments in 2030 |
| FY2031 | 260.000 | US$m | Revolver drawn balance; the amended facility matures 2031-08-18, and borrowings may be repaid and re-borrowed |
| FY2035 | 800.000 | US$m | 6.25% senior notes due 2034-10-01, the first day of fiscal 2035; the filing groups them under due thereafter |

The ladder is drawn at 2026-09-30 on contractual principal, and the revolver amount is a drawn balance that can be repaid or re-borrowed before maturity.

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2026 / 2026-09-30 | 1060.005 | -14.713 | 1045.292 | US$m | Principal is the ladder total: notes 800.000, revolver 260.000 and other debt 0.005. Reconciling items are capitalised fees and expenses: notes -11.042, revolver -3.671 and other debt nil (calculation C10); no debt is left out of the ladder |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 | 1855.985 | 482.292 | US$m | Revenue of continuing operations as restated in the 2026 annual report; Adjusted EBITDA is the issuer-adjusted measure for every row, not reported or house-adjusted |
| FY2025 | 1795.384 | 461.820 | US$m | Revenue of continuing operations as restated in the 2026 annual report; Adjusted EBITDA is the issuer-adjusted measure for every row, not reported or house-adjusted |
| FY2026 | 1848.378 | 459.593 | US$m | Revenue of continuing operations as restated in the 2026 annual report; Adjusted EBITDA is the issuer-adjusted measure for every row, not reported or house-adjusted |

Adjusted EBITDA is issuer-defined and adds back items the issuer treats as unusual, so it differs from reported EBITDA by 245.015 US$m in FY2025.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Revolver due 2031 (drawn) | 1 | Yes | 260.000 | 0.58 | US$m | Drawn principal at 2026-09-30 of a 500.000 US$m commitment; secured on a first-priority basis by substantially all domestic assets of the Company and the guarantors, and guaranteed by material domestic subsidiaries. Cumulative leverage is cumulative principal over FY2026 EBITDA (Reported) |
| 6.25% Senior Notes due 2034 | 2 | No | 800.000 | 2.37 | US$m | Principal; senior unsecured obligations guaranteed by Clopay Corporation, Clopay Holding Corp., Hunter Holdings Corporation, Hunter Fan Company, CornellCookson, LLC and Cornell Real Estate Holdings, LLC. Cumulative leverage is cumulative principal of 1,060.000 over FY2026 EBITDA (Reported), excluding 0.005 of other debt |

Other debt of 0.005 US$m is left out because no source states its ranking.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported) | 447.530 | US$m | FY2026 reported EBITDA derived from components (calculation C1); the reported measure |
| Impact of retirement plan events | 5.362 | US$m | Issuer add-back: non-cash retiree medical plan charge, as stated; classification other stated, realisation not stated |
| Debt extinguishment, net | 6.701 | US$m | Issuer add-back: loss on early repayment of the term loan and redemption of the 2028 notes, as stated; classification other stated, realisation not stated |
| Adjusted EBITDA | 459.593 | US$m | Issuer-stated adjusted EBITDA, continuing operations, the specified adjusted measure; no goodwill impairment or strategic review item arises in FY2026 |

The bridge is for FY2026 only and holds every add-back the issuer states for that year.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | FY2026 | Basis |
| --- | --- | --- | --- | --- |
| Revenue (US$m) | 1855.985 | 1795.384 | 1848.378 | Reported, continuing operations |
| Gross margin (%) | 47.00 | 47.24 | 46.36 | Calculated |
| EBITDA (Reported) (US$m) | 471.475 | 216.805 | 447.530 | Calculated; FY2025 includes the 243.612 impairment |
| EBITDA (Adjusted) (US$m) | 482.292 | 461.820 | 459.593 | Issuer-stated |
| Adjusted EBITDA margin (%) | 25.99 | 25.72 | 24.86 | Calculated |
| Operating cash flow, continuing (US$m) | 307.370 | 307.794 | 304.868 | Reported |
| Free cash flow (US$m) | 257.091 | 266.102 | 266.954 | Calculated |
| Cash interest paid (US$m) | 100.676 | 92.887 | 81.084 | Reported |
| Total debt, carrying (US$m) | Not supplied: no 2024 balance sheet on the restated perimeter | 1412.309 | 1045.292 | Calculated from the balance sheet |
| Net debt (US$m) | Not supplied: no 2024 balance sheet on the restated perimeter | 1313.264 | 946.660 | Calculated |
| Net debt / EBITDA (Reported) (x) | Not supplied: no 2024 balance sheet on the restated perimeter | 6.06 | 2.12 | Calculated; FY2025 on a mismatched perimeter |
| Net debt / EBITDA (Adjusted) (x) | Not supplied: no 2024 balance sheet on the restated perimeter | 2.84 | 2.06 | Calculated; FY2025 on a mismatched perimeter |
| EBITDA (Reported) / cash interest (x) | 4.68 | 2.33 | 5.52 | Calculated |
| Cash plus undrawn revolver (US$m) | Not supplied: no 2024 revolver availability is printed | 584.717 | 324.230 | Calculated |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 20 |
| Calculated | 18 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 5 |
| Fields present | 24 |
| Fields total | 24 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 3 |

## Calculations

Inputs are USD thousands as printed unless stated; US$m figures divide by 1,000 exactly.

| ID | Calculation | Inputs | Result |
| --- | --- | --- | --- |
| C1 | EBITDA (Reported) = income from continuing operations + net interest expense + provision for income taxes + depreciation and amortization | FY2024: 245,596 + 103,433 + 86,497 + 35,949; FY2025: 20,247 + 95,088 + 62,997 + 38,473; FY2026: 235,647 + 79,017 + 92,582 + 40,284; 9M 2025: 286 + 72,334 - 8,589 + 28,754; 9M 2026: 168,820 + 63,011 + 63,849 + 29,857 | FY2024 471,475; FY2025 216,805; FY2026 447,530; 9M 2025 92,785; 9M 2026 325,537 |
| C2 | EBITDA (Adjusted) check = EBITDA (Reported) + impairments + retirement plan events + debt extinguishment + strategic review | FY2024: 471,475 + 0 + 0 + 1,700 + 9,117; FY2025: 216,805 + 243,612 - 1,165 + 0 + 2,568; FY2026: 447,530 + 0 + 5,362 + 6,701 + 0; 9M 2025: 92,785 + 243,612 + 0 + 0 + 2,568; 9M 2026: 325,537 + 0 + 4,826 + 1,389 + 0 | FY2024 482,292 (agrees with the issuer figure); FY2025 461,820 (agrees with the issuer figure); FY2026 459,593 (agrees with the issuer figure); 9M 2025 338,965 (agrees with the issuer figure); 9M 2026 331,752 (agrees with the issuer figure) |
| C3 | Activity totals = continuing + discontinued operations | FY2024: operating 307,370 + 69,897; investing -46,762 - 18,238; financing -297,337 - 1,411; FY2025: operating 307,794 + 48,224; investing -41,542 + 7,251; financing -338,618 - 130; FY2026: operating 304,868 + 175; investing 266,490 - 3,608; financing -568,414 - 78; 9M 2025: operating 234,516 + 47,144; investing -32,360 + 10,526; financing -269,439 - 99; 9M 2026: operating 217,944 + 20,873; investing 76,264 - 3,608; financing -299,251 - 78 | FY2024: operating 377,267, investing -65,000, financing -298,748, with FX -1,970 gives net change 11,549; FY2025: operating 356,018, investing -34,291, financing -338,748, with FX 1,628 gives net change -15,393; FY2026: operating 305,043, investing 262,882, financing -568,492, with FX 154 gives net change -413; 9M 2025: operating 281,660, investing -21,834, financing -269,538, with FX 2,553 gives net change -7,159; 9M 2026: operating 238,817, investing 72,656, financing -299,329, with FX -839 gives net change 11,305 |
| C4 | Total Debt = notes payable and current portion + long-term debt, net (carrying value) | 2025-09-30: 8,033 + 1,404,276; 2026-06-30: 8,011 + 1,259,624; 2026-09-30: 5 + 1,045,287 | 1,412,309; 1,267,635; 1,045,292 |
| C5 | Net debt = Total Debt - cash and equivalents | 2025-09-30: 1,412,309 - 99,045; 2026-06-30: 1,267,635 - 110,350; 2026-09-30: 1,045,292 - 98,632 | 1,313,264; 1,157,285; 946,660 (US$m 1313.264; 1157.285; 946.660) |
| C6 | Trailing twelve months to 2026-06-30 = FY2025 + 9M 2026 - 9M 2025 | EBITDA (Reported): 216,805 + 325,537 - 92,785; EBITDA (Adjusted): 461,820 + 331,752 - 338,965; revenue: 1,795,384 + 1,357,490 - 1,319,829 | EBITDA (Reported) 449,557; EBITDA (Adjusted) 454,607; revenue 1,833,045 |
| C7 | Free cash flow = operating cash flow, continuing - capital expenditure | FY2024: 307,370 - 50,279; FY2025: 307,794 - 41,692; FY2026: 304,868 - 37,914 | FY2024 257,091 (US$m 257.091); FY2025 266,102 (US$m 266.102); FY2026 266,954 (US$m 266.954) |
| C8 | Dividends and share purchases = dividends paid + purchase of shares for treasury | FY2024: 35,806 + 309,916; FY2025: 39,692 + 183,271; FY2026: 40,531 + 151,180 | FY2024 345,722 (US$m 345.722); FY2025 222,963 (US$m 222.963); FY2026 191,711 (US$m 191.711) |
| C9 | Liquidity = cash and equivalents + undrawn revolver availability | 2025-09-30: 99,045 + 485,672; 2026-06-30: 110,350 + 472,348; 2026-09-30: 98,632 + 225,598 | 584,717; 582,698; 324,230 (US$m 584.717; 582.698; 324.230) |
| C10 | Debt principal to carrying value at 2026-09-30 = principal + reconciling items | 800,000 + 260,000 + 5; fees: -11,042 + -3,671 + 0 | Principal 1,060,005; reconciling items -14,713; carrying value 1,045,292 |
| C11 | Pro forma net debt = year-end net debt + repurchase cash to 2026-11-16 | 946,660 + 16,893; leverage 963.553 / 447.530 | 963,553 (US$m 963.553); 2.15x |
| C12 | Disposal proceeds in fiscal 2026 = AMES North America + AMES Australasia + AMES U.K. liquidation | 100,000 + 180,910 + 23,473 | 304,383 |
| C13 | Share of free cash flow returned = dividends and share purchases / free cash flow | FY2026: 191,711 / 266,954 | 71.81% |
| C14 | Change in adjusted EBITDA FY2026 against FY2025 | 459,593 / 461,820 - 1 | -0.48% |

Figures quoted in the findings, rounded to two decimals from the exact values above:

| ID | Quantity | Exact value | Quoted as |
| --- | --- | --- | --- |
| C15 | Free cash flow as a share of year-end debt, FY2026 | 266,954 / 1,045,292 x 100 | 25.54% |
| C16 | Disposal proceeds as a share of the fall in net debt | 304,383 / (1,313,264 - 946,660) x 100 | 83.03% |
| C17 | Net leverage added by USD 100 million of buybacks | 100.000 / 447.530 | 0.22x |
| C18 | Issuer-stated annual interest on the 2034 notes | approximately 50,000 thousand as stated in the capital resource requirements | USD 50 million |
| C19 | Coupon of the retired 2028 notes | 5.75% per the debt note, against 6.25% on the 2034 notes | 5.75% |
| C20 | Repurchase authority added on 2026-11-16 | 400,000 thousand as stated | USD 400 million |
| C21 | Net debt at 2026-09-30 | 946,660 thousand = US$m 946.660 | USD 946.66 million |
| C22 | Net debt at 2025-09-30 | 1,313,264 thousand = US$m 1313.264 | USD 1,313.26 million |
| C23 | Disposal proceeds in fiscal 2026 | 304,383 thousand = US$m 304.383 | USD 304.38 million |
| C24 | Dividends and share purchases, FY2026 | 191,711 thousand = US$m 191.711 | USD 191.71 million |
| C25 | Free cash flow, FY2026 | 266,954 thousand = US$m 266.954 | USD 266.95 million |
| C26 | Pro forma net debt after repurchases to 2026-11-16 | 963,553 thousand = US$m 963.553 | USD 963.55 million |
| C27 | Liquidity at 2026-09-30 | 324,230 thousand = US$m 324.230 | USD 324.23 million |
| C28 | Fall in net debt, FY2025 to FY2026 | 366,604 thousand = US$m 366.604 | USD 366.60 million |
| C29 | Revenue, FY2026 | 1,848,378 thousand = US$m 1848.378 | USD 1,848.38 million |
| C30 | Operating cash flow, continuing, FY2026 | 304,868 thousand = US$m 304.868 | USD 304.87 million |
| C31 | Capital expenditure, FY2026 | 37,914 thousand = US$m 37.914 | USD 37.91 million |
| C32 | Cash paid for interest, FY2026 | 81,084 thousand = US$m 81.084 | USD 81.08 million |
| C33 | Cash at 2026-09-30 | 98,632 thousand = US$m 98.632 | USD 98.63 million |
| C34 | Revolver availability at 2026-09-30 | 225,598 thousand = US$m 225.598 | USD 225.60 million |
| C35 | Liquidity at 2025-09-30 | 584,717 thousand = US$m 584.717 | USD 584.72 million |
| C36 | Revolver drawn at 2026-09-30 | 260,000 thousand = US$m 260.000 | USD 260.00 million |
| C37 | Cash held by non-U.S. subsidiaries | 52,300 thousand = US$m 52.300 | USD 52.30 million |
| C38 | Related-party second-lien PIK notes receivable | 215,584 thousand = US$m 215.584 | USD 215.58 million |
| C39 | Equity-method investments | 139,496 thousand = US$m 139.496 | USD 139.50 million |

## Gaps

- No balance sheet at 2024-09-30 is printed on the restated perimeter, so FY2024 debt, net debt, leverage and liquidity are not stated; the 2025 annual report prints one that still includes the AMES businesses. Severity: Medium. It restricts the three-year leverage trend. The action that would close it is a 2024 balance sheet restated for the disposals.
- Debt at 2025-09-30 and 2026-06-30 was carried by the whole group, including businesses later disposed of or ceased, while EBITDA is on the continuing perimeter, so the leverage ratios for those dates overstate leverage; the issuer's own 2.4x and 2.2x include discontinued operations. Severity: High for trend reading. It restricts any comparison of FY2025 or June 2026 leverage with FY2026. The action that would close it is an issuer pro forma debt allocation or EBITDA of the divested businesses by period.
- Cash paid for interest is not printed for the nine months to 2026-06-30 or 2025-06-30, so the trailing twelve month interest cover at 2026-06-30 is not calculable. Severity: Medium. The action that would close it is the cash flow supplemental disclosure or the interest paid line of the quarterly report.
- The revolver's maximum total leverage, maximum senior secured leverage and minimum interest coverage levels are not printed, so covenant headroom and the amount of the USD 225.598 million availability that can actually be drawn are not established. Severity: High for liquidity. The action that would close it is the executed credit agreement and the latest compliance certificate.
- The total payout of the dividend declared on 2026-11-16 is not stated, so pro forma net debt reflects the share repurchases only. Severity: Low. The action that would close it is the dividend payment amount.
- Other debt of 5 thousand is left out of the debt stack because no source states its ranking or security. Severity: Low. The action that would close it is the finance lease terms.
- The 2025 annual report's operating cash flow of 357,440 thousand differs from the 2026 annual report's continuing plus discontinued total of 356,018 thousand by 1,422 thousand, and no source explains the difference. Severity: Low. The restated figure is used.
- Capital expenditure is not split between maintenance and growth, and no source states a split, so free cash flow is shown after total capital expenditure only. Severity: Low. The action that would close it is a management split.
- Compliance EBITDA for 2025 is printed as 547,776 thousand in the 2026 annual report and 529,076 thousand in the June 2026 quarterly report; the later figure deducts EBITDA from divested and ceased operations. Severity: Low. Both are kept and the definition difference is logged.
- Equity earnings from the two joint ventures are not recorded for fiscal 2026, and paid-in-kind interest of 5,891 thousand from them sits inside interest income; EBITDA excludes both, so the joint ventures add nothing to the leverage denominator. Severity: Low. The action that would close it is the first full period of equity earnings, expected from fiscal 2027.

## Next module

The orchestrator selects the next module.

