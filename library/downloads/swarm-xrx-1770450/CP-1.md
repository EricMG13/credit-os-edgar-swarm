# Financial foundation for Xerox Holdings Corp (xrx-1770450), as of 2026-11-18

## Request

Financial foundation for Xerox Holdings Corp (issuer xrx-1770450), as of 2026-11-18, on the credit snapshot pathway. The scope is the issuer's financial statements, debt, liquidity and credit metrics from the five supplied filings, on the Xerox Holdings Corporation consolidated perimeter.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_xrx-20241231.htm.jsonl | Combined annual report on Form 10-K of Xerox Holdings Corporation and Xerox Corporation for the year ended December 31, 2024 | 2025-02-24 | 7feadaeacdba2056351f3b6fa451718d0a975d778f8ada2b07315b3202b0d082 | Original FY2024 presentation and the 2024 debt note; superseded for recast FY2024 figures by the 2025 annual report |
| 10-K_2025-12-31_xrx-20251231.htm.jsonl | Combined annual report on Form 10-K of Xerox Holdings Corporation and Xerox Corporation for the year ended December 31, 2025 | 2026-03-16 | 9a3f813d924828f1b7d797af8da7a5ef15cd20354158f2cb606ad04ab04e3b1f | FY2024 and FY2025 statements, debt note, interest note, segment note and financing debt split |
| 10-Q_2026-03-31_xrx-20260331.htm.jsonl | Combined quarterly report on Form 10-Q of Xerox Holdings Corporation and Xerox Corporation for the quarter ended March 31, 2026 | 2026-05-07 | f7db690229ad2f37021ede5f6c82f0e77ea2811a1d390fe25917b83e63aea88f | Q1 2026 statements, interest note, ABL availability and debt reconciliation |
| 10-Q_2026-06-30_xrx-20260630.htm.jsonl | Combined quarterly report on Form 10-Q of Xerox Holdings Corporation and Xerox Corporation for the quarter ended June 30, 2026 | 2026-08-06 | 52663691e8f3ced2f8a35e6e1576f98f8f351b2b15809429d3f39554e0a1453c | Q2 2026 and first-half statements, interest note, ABL availability and debt reconciliation |
| 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Combined quarterly report on Form 10-Q of Xerox Holdings Corporation and Xerox Corporation for the quarter ended September 30, 2026 | 2026-11-05 | 0bee43d9f1f3367610dc24e2dc5d0026067b8b84f672c416d585d1e27999a0b4 | Nine-month and third-quarter statements, debt, liquidity, maturity ladder, segment note and subsequent events |

| Handoff module | sha256 | Use |
| --- | --- | --- |
| Source readiness (CP-0) | f5386ee8f2391c8fb25377fd1a74c87f13676ae084fda194ba544da60b4b2843 | Source limits: no issuer EBITDA, no interim cash interest, no executed legal documents, the debt exchange not confirmed |

## Findings

### Bottom line

Reported EBITDA is negative for the twelve months to 30 September 2026 after a goodwill impairment, and net debt is 4.46x house-adjusted EBITDA, so creditors rely on cash flow that was negative for nine months. House-adjusted EBITDA of USD 854 million is the issuer's adjusted operating income plus depreciation and equipment financing interest, an analyst measure, because the issuer states no EBITDA.
Basis: Source readiness (CP-0); 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–6, 21, 24; calculation C55; calculation C56; calculation C58

Cash of USD 412 million and net ABL availability of about USD 225 million exceed the USD 217 million of principal due to the end of 2027, but USD 752 million falls due in 2028 and needs refinancing. Management expects full-year operating cash flow of USD 145 million to USD 195 million, which needs USD 222 million to USD 272 million in the fourth quarter, and an exchange of 2028 notes expected to close on 2026-11-13 is not confirmed.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4, 42, 56, 95, 97, 100–101; calculation C41; calculation C39; calculation C40

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_xrx-20241231.htm.jsonl | Annual report on Form 10-K | Years ended 2024-12-31, 2023-12-31 and 2022-12-31 | USD | millions | Xerox Holdings Corporation and Xerox Corporation, separate consolidated statements | US GAAP | Tier 1: audited, auditor's report dated 2025-02-24 | FY2024 original presentation and 2024 debt note | FY2024 is recast in the 2025 annual report; recast figures are used here |
| 10-K_2025-12-31_xrx-20251231.htm.jsonl | Annual report on Form 10-K | Years ended 2025-12-31, 2024-12-31 and 2023-12-31 | USD | millions | Xerox Holdings Corporation and Xerox Corporation, separate consolidated statements | US GAAP | Tier 1: audited, auditor's report dated 2026-03-16 | FY2024 and FY2025 statements, debt note and interest note | Non-financing interest expense is inside other expenses, net in its income statement |
| 10-Q_2026-03-31_xrx-20260331.htm.jsonl | Quarterly report on Form 10-Q | Three months ended 2026-03-31; balance sheet at 2026-03-31 | USD | millions | Xerox Holdings Corporation and Xerox Corporation, separate condensed statements | US GAAP | Tier 2b: unaudited | Q1 2026 statements and interest note | No subsequent events note; cash flows are year to date |
| 10-Q_2026-06-30_xrx-20260630.htm.jsonl | Quarterly report on Form 10-Q | Three and six months ended 2026-06-30; balance sheet at 2026-06-30 | USD | millions | Xerox Holdings Corporation and Xerox Corporation, separate condensed statements | US GAAP | Tier 2b: unaudited | Q2 2026 and first-half statements | No subsequent events note; cash flows are year to date |
| 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Quarterly report on Form 10-Q | Three and nine months ended 2026-09-30; balance sheet at 2026-09-30 | USD | millions | Xerox Holdings Corporation and Xerox Corporation, separate condensed statements | US GAAP | Tier 2b: unaudited | Latest statements, debt, liquidity and subsequent events | Prints no interest paid and no instrument-level debt table |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Xerox Holdings Corporation | Issuer and parent registrant | December 31 | USD | millions | Consolidated, including Xerox Corporation, Lexmark from 2025-07-01 and XRX Brandco Holdings LLC from 2026-02-17 | US GAAP | FY2024, FY2025, Q1 2026, Q2 2026 and Q3 2026 with 2025 comparatives |
| Xerox Corporation | Primary direct operating subsidiary, borrower and co-registrant | December 31 | USD | millions | Separate consolidated statements that carry related party debt owed to the parent | US GAAP | Same periods; used only as labelled context |
| XRX Brandco Holdings LLC (IPCo Holdings) | Consolidated variable interest entity of the joint venture financing | December 31 | USD | millions | Consolidated by Xerox Corporation from 2026-02-17; its assets are generally not available to other group creditors | US GAAP | 2026-02-17 onward |

Subsequent events are flagged with their dates and kept out of the period figures: an exchange of Holdings 5.50% notes due 2028 expected to close on or about 2026-11-13, and the suspension of common and preferred dividend payments from January 2027, both stated in October 2026.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 56

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Services, maintenance, rentals and other revenue recast to the 2025 presentation | 10-K_2025-12-31_xrx-20251231.htm.jsonl | Issuer reclassification | 3,692 | 3,843 | Financing revenue of 151 was moved into services; the recast figure is used | FY2024 |
| Other expenses, net, shown without non-financing interest expense | 10-K_2025-12-31_xrx-20251231.htm.jsonl | Analyst reclassification, Calculated | 360 and 158 | 112 and 39 | Matches the 2026 presentation, in which non-financing interest is a separate line (248 and 119 from the debt note) | FY2025, FY2024 |
| EBITDA (Reported) derived from statement lines | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-03-31_xrx-20260331.htm.jsonl; 10-Q_2026-06-30_xrx-20260630.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Derivation, Analyst Judgement | Not stated by the issuer | -717, 177, 31, -421, -92, -801, 130, 250 in column order of the income statement table | (Loss) before income taxes + total interest expense + depreciation and amortization; no add-back for impairment, restructuring or other items | All income statement columns |
| House-adjusted EBITDA built from the issuer's segment profit | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Normalization, Analyst Judgement | EBITDA (Reported) LTM -275 | House-adjusted EBITDA LTM 854 | Adds goodwill impairment 959 and restructuring and related costs 80 plus other expenses, net and one-time items of 90 that the segment profit excludes, and keeps depreciation and equipment financing interest on the same basis as total debt | LTM to 2026-09-30 |
| Temporary Equity combines noncontrolling interests and convertible preferred stock | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Presentation | Printed on two lines (10 and 214) | 224 | Both lines are printed between liabilities and equity and are needed for the balance sheet identity | All balance sheet dates |
| Cash & Equivalents excludes restricted cash | 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Definition | Cash, cash equivalents and restricted cash 530 | Cash and cash equivalents 412 | Restricted cash of 118 is not available for debt service; the cash flow statement uses the larger figure | 2026-09-30 |
| Total Debt includes the joint venture term loans and Class A Units and excludes the tariff financing liability | 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Definition | Tariff financing liability 81 outside debt | Total Debt 4,220 as the issuer states it | The issuer classifies the term loans and Class A Units of about 450 as indebtedness and presents the tariff financing liability on its own line | 2026-06-30, 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | Q3 2025 | Q1 2026 | Q2 2026 | Q3 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sales | 2,378 | 3,283 | 2,215 | 993 | 920 | 996 | 954 | 2,870 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Services, maintenance, rentals and other | 3,843 | 3,739 | 2,779 | 968 | 926 | 926 | 914 | 2,766 | USD millions | Reported; FY2024 as recast in the 2025 annual report | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Total Revenues | 6,221 | 7,022 | 4,994 | 1,961 | 1,846 | 1,922 | 1,868 | 5,636 | USD millions | Reported; FY2024 as recast in the 2025 annual report | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Cost of sales | 1,562 | 2,367 | 1,650 | 788 | 600 | 579 | 652 | 1,831 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Cost of services, maintenance, rentals and other | 2,699 | 2,754 | 2,022 | 728 | 697 | 655 | 671 | 2,023 | USD millions | Reported; includes equipment financing interest | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Research, development and engineering expenses | 191 | 230 | 159 | 74 | 64 | 67 | 56 | 187 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Selling, administrative and general expenses | 1,537 | 1,654 | 1,223 | 477 | 430 | 432 | 374 | 1,236 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Goodwill impairment | 1,058 | Not supplied: dash in source | Not supplied: dash in source | Not supplied: dash in source | Not supplied: line not printed | Not supplied: line not printed | 959 | 959 | USD millions | Reported; a dash is carried as not supplied, a line not printed is carried as not supplied | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Restructuring and related costs, net | 112 | 66 | 68 | 59 | 45 | 23 | 14 | 82 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Amortization of intangible assets | 73 | 83 | 50 | 30 | 30 | 30 | 31 | 91 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Divestitures | 47 | -4 | -4 | Not supplied: dash in source | Not supplied: dash in source | Not supplied: dash in source | Not supplied: dash in source | Not supplied: dash in source | USD millions | Reported; a dash is carried as not supplied | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Non-financing interest expense | 119 | 248 | 168 | 80 | 84 | 100 | 93 | 277 | USD millions | Reported for 2026 and 2025 interim columns; FY columns from the debt note because the annual statements include it in other expenses, net | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 3; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 3 |
| Other expenses (income), net, excluding non-financing interest | 39 | 112 | 85 | 25 | -31 | 5 | 24 | -2 | USD millions | Reported for interim columns; FY columns Calculated: printed 360 and 158 less non-financing interest 248 and 119 (C1 to C8 give total interest) | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 150, 227; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3, 14; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 3; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Total Costs and Expenses | 7,437 | 7,510 | 5,421 | 2,261 | 1,919 | 1,891 | 2,874 | 6,684 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| (Loss) before Income Taxes | -1,216 | -488 | -427 | -300 | -73 | 31 | -1,006 | -1,048 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Income tax expense | 105 | 541 | 529 | 460 | 32 | 18 | 9 | 59 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Net (Loss) Income | -1,321 | -1,029 | -956 | -760 | -105 | 13 | -1,015 | -1,107 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, pages 3–4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 3–4 |
| Equipment financing interest | 106 | 86 | 66 | 21 | 19 | 18 | 17 | 54 | USD millions | Reported in the interest note; included in cost of services, maintenance, rentals and other | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 43; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 35; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 37 |
| Total interest expense | 225 | 334 | 234 | 101 | 103 | 118 | 110 | 331 | USD millions | Calculated: equipment financing interest + non-financing interest expense (C1 to C8) | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 43; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 35; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 37 |
| Depreciation and amortization | 274 | 331 | 224 | 107 | 100 | 101 | 95 | 296 | USD millions | Reported in the cash flow statement; quarter columns from the segment note | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5, 24; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 5, 23 |
| EBITDA (Reported) | -717 | 177 | 31 | -92 | 130 | 250 | -801 | -421 | USD millions | Calculated, Analyst Judgement on definition: the issuer states no EBITDA, so it is (loss) before income taxes + total interest expense + depreciation and amortization, with no add-back for impairment, restructuring or other items (C9 to C16) | T4.4 Income statement |
| Adjusted operating income (issuer segment profit after corporate) | 302 | 248 | 146 | 65 | 72 | 203 | 124 | 399 | USD millions | Reported: the issuer's non-GAAP segment profit, before restructuring, intangible amortization, goodwill impairment, purchase accounting, transaction costs, non-financing interest and other expenses, net | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 21, 24; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 19; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 21 |
| Depreciation excluding acquired intangible amortization | 201 | 248 | 174 | 77 | 70 | 71 | 64 | 205 | USD millions | Reported: segment depreciation, equal to depreciation and amortization less amortization of intangible assets | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 21, 24; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 19; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 21 |
| House-adjusted EBITDA | 609 | 582 | 386 | 163 | 161 | 292 | 205 | 658 | USD millions | Calculated, Analyst Judgement: adjusted operating income + depreciation + equipment financing interest, so that it matches total debt that includes financing debt (C17 to C24) | T4.4 Income statement |

### Segment revenue schedule

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Print and Other segment revenue | 5,864 | 6,272 | 4,399 | 5,113 | 1,739 | 1,688 | USD millions | Reported: total segment revenue | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 21 |
| IT Solutions segment revenue | 358 | 761 | 603 | 537 | 226 | 187 | USD millions | Reported: total segment revenue including intersegment revenue | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 21 |
| Corporate and eliminations | -1 | -11 | -8 | -14 | -4 | -7 | USD millions | Reported: intersegment revenue eliminated | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 21 |
| Total Revenues | 6,221 | 7,022 | 4,994 | 5,636 | 1,961 | 1,868 | USD millions | Reported; equals the segment lines above, so the segment schedule reconciles to reported revenue | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 21 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net (Loss) Income | -1,321 | -1,029 | -956 | -105 | -92 | -1,107 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Depreciation and amortization | 274 | 331 | 224 | 100 | 201 | 296 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Decrease in finance receivables | 663 | 489 | 338 | 66 | 157 | 152 | USD millions | Reported; included in operating activities | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Payments for restructurings | -78 | -69 | -41 | -21 | -40 | -60 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Contributions to retirement plans | -145 | -161 | -123 | -36 | -72 | -118 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Net Cash from Operating Activities | 511 | 224 | 16 | -144 | -107 | -77 | USD millions | Reported; Q1 2026 and H1 2026 are year-to-date amounts | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Cost of additions to land, buildings, equipment and software | -44 | -91 | -67 | -21 | -47 | -70 | USD millions | Reported; total capital expenditure, no maintenance or growth split is printed | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Proceeds from sales of businesses and assets | 35 | 79 | 56 | 2 | 8 | 10 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Acquisitions, net of cash acquired | -161 | -674 | -674 | Not supplied: dash in source | 19 | 19 | USD millions | Reported; a dash is carried as not supplied | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Net Cash from Investing Activities | -198 | -698 | -694 | -24 | -33 | -57 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Net (payments) proceeds on short-term debt | Not supplied: dash in source | 119 | 218 | Not supplied: line not printed | -125 | -125 | USD millions | Reported; a dash or a line not printed is carried as not supplied | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Proceeds from issuance of long-term debt | 907 | 1,140 | 1,137 | 446 | 446 | 446 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Payments on long-term debt | -992 | -755 | -685 | -191 | -251 | -253 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Dividends | -141 | -71 | -65 | -10 | -16 | -24 | USD millions | Reported; common and preferred dividends | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Net Cash from Financing Activities | -271 | 404 | 577 | 242 | 128 | 101 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| FX Effect on Cash | -28 | 4 | 5 | -2 | -1 | -2 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Net Cash Change | 14 | -66 | -96 | 72 | -13 | -35 | USD millions | Reported; operating + investing + financing + FX effect | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Opening Cash | 617 | 631 | 631 | 565 | 565 | 565 | USD millions | Reported; cash, cash equivalents and restricted cash | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Closing Cash | 631 | 565 | 535 | 637 | 552 | 530 | USD millions | Reported; cash, cash equivalents and restricted cash, which differs from Cash & Equivalents in the balance sheet | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 5; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5 |
| Cash Interest Paid | 214 | 272 | Not supplied: not printed for nine months 2025 | Not supplied: not printed for Q1 2026 | Not supplied: not printed for H1 2026 | Not supplied: not printed for nine months 2026 | USD millions | Reported for full years only; the 2026 quarterly reports print no interest paid | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 37–38 |
| Free cash flow | 467 | 133 | -51 | -165 | -154 | -147 | USD millions | Calculated: net cash from operating activities + capital expenditure (C32 to C37) | T4.5 Cash flow statement |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 576 | 512 | 585 | 495 | 412 | USD millions | Reported: cash and cash equivalents, excluding restricted cash | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Accounts receivable, net | 796 | 1,122 | 1,218 | 1,185 | 1,153 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Finance receivables, net (billed, current and long-term) | 1,745 | 1,402 | 1,316 | 1,214 | 1,209 | USD millions | Calculated: the three printed finance receivable lines added | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Inventories | 695 | 1,016 | 1,043 | 1,043 | 1,063 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Total current assets | 2,935 | 3,568 | 3,780 | 3,697 | 3,638 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Intangible assets, net | 236 | 921 | 891 | 857 | 827 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Goodwill, net | 1,937 | 2,222 | 2,201 | 2,234 | 1,273 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Total Assets | 8,365 | 9,823 | 9,902 | 9,724 | 8,642 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Short-term debt and current portion of long-term debt | 585 | 231 | 165 | 70 | 157 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Financing liability - tariff receivables monetization | Not supplied: line not printed | Not supplied: dash in source | Not supplied: line not printed | 90 | 81 | USD millions | Reported; carried outside Total Debt by the issuer, a dash or a line not printed is carried as not supplied | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Accounts payable | 1,023 | 1,498 | 1,548 | 1,456 | 1,484 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Total current liabilities | 2,619 | 3,222 | 3,202 | 3,126 | 3,201 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Long-term debt | 2,814 | 4,016 | 4,281 | 4,153 | 4,063 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Pension and other benefit liabilities | 1,088 | 1,068 | 1,037 | 1,027 | 989 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Total Liabilities | 7,061 | 9,150 | 9,373 | 9,170 | 9,095 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Temporary Equity | 224 | 224 | 224 | 224 | 224 | USD millions | Calculated: noncontrolling interests 10 and convertible preferred stock 214 printed between liabilities and equity | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Total Equity | 1,080 | 449 | 305 | 330 | -677 | USD millions | Reported: total (deficit) equity including noncontrolling interests in equity | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |
| Total Debt | 3,399 | 4,247 | 4,446 | 4,223 | 4,220 | USD millions | Calculated: short-term debt and current portion + long-term debt, carrying value net of issuance costs and discounts (C25 to C29) | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 151; 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–5 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Xerox Holdings Senior Notes due 2026 | Senior unsecured notes | Not supplied: carrying value is not printed by instrument | 125 | 125 | Not applicable | Unsecured | Senior unsecured | USD | 125 | Not applicable | 13.00% | Fixed | Not applicable | Not applicable | Not applicable | 2026-06-30 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 219–220 |
| Xerox Holdings Senior Notes due 2028 | Senior notes | Not supplied: carrying value is not printed by instrument | 750 | 750 | Not applicable | Unsecured | Senior unsecured | USD | 750 | Not applicable | 5.50% | Fixed | Not applicable | Not applicable | Not applicable | August 2028 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 40 |
| Xerox Holdings Senior Notes due 2029 | Senior notes | Not supplied: carrying value is not printed by instrument | 500 | 500 | Not applicable | Unsecured | Senior unsecured | USD | 500 | Not applicable | 8.88% | Fixed | Not applicable | Not applicable | Not applicable | Not supplied: day and month not stated in the debt table | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 33, 36 |
| Xerox Holdings Senior Notes due 2030 | Senior notes with step-up | Not supplied: carrying value is not printed by instrument | 250 | 250 | Not applicable | Unsecured | Senior unsecured | USD | 250 | Not applicable | 13.00% rising to 16.75% by July 2030 | Fixed with step-ups | Not applicable | Not applicable | Not applicable | 2030-07-31 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 220–221 |
| Xerox Holdings Convertible Senior Notes due 2030 | Convertible senior notes | Not supplied: carrying value is not printed by instrument | 400 | 400 | Not applicable | Unsecured | Senior unsecured | USD | 400 | Not applicable | 3.75% | Fixed | Not applicable | Not applicable | Not applicable | March 2030 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 33, 36; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 40 |
| Xerox Corporation Term Loan B due 2029 | First lien term loan | Not supplied: carrying value is not printed by instrument | 706 | 706 | Not applicable | First lien on substantially all assets of the guarantors | First lien | USD | 706 | Not applicable | Term SOFR + 4.00% | Floating | Term SOFR | 400 | 50 | November 2029 | 7.50% a year in 2026 and 10% a year after | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 222–223 |
| Xerox Corporation Senior Secured First Lien Notes due 2030 | First lien notes | Not supplied: carrying value is not printed by instrument | 400 | 400 | Not applicable | First priority on fixed asset collateral, second on current asset collateral | First lien | USD | 400 | Not applicable | 10.25% | Fixed | Not applicable | Not applicable | Not applicable | 2030-10-15 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 218–219 |
| Xerox Corporation Senior Secured Second Lien Notes due 2031 | Second lien notes | Not supplied: carrying value is not printed by instrument | 500 | 500 | Not applicable | Second priority on fixed asset collateral, third on current asset collateral | Second lien | USD | 500 | Not applicable | 13.50% | Fixed | Not applicable | Not applicable | Not applicable | Not supplied: day and month not stated in the debt table | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 218–219 |
| Xerox Corporation Secured Promissory Note due 2026 (ITsavvy) | Secured promissory note | Not supplied: carrying value is not printed by instrument | 110 | 110 | Not applicable | Secured; lien subject to intercreditor agreements | Not supplied: rank among secured claims is not stated | USD | 110 | Not applicable | Non-interest bearing | Fixed | Not applicable | Not applicable | Not applicable | 2026-01-30 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 222, 226 |
| Xerox Corporation Senior Notes due 2035 | Senior notes | Not supplied: carrying value is not printed by instrument | 250 | 250 | Not applicable | Unsecured | Senior unsecured | USD | 250 | Not applicable | 4.80% | Fixed | Not applicable | Not applicable | Not applicable | Not supplied: day and month not stated in the debt table | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 33, 36 |
| Xerox Corporation Senior Notes due 2039 | Senior notes | Not supplied: carrying value is not printed by instrument | 350 | 350 | Not applicable | Unsecured | Senior unsecured | USD | 350 | Not applicable | 6.75% | Fixed | Not applicable | Not applicable | Not applicable | Not supplied: day and month not stated in the debt table | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 33, 36 |
| Lexmark secured borrowings | Secured borrowings of a subsidiary | Not supplied: carrying value is not printed by instrument | 3 | 3 | Not applicable | Secured by finance receivables | Not supplied: rank is not stated | USD | 3 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 217, 227 |
| ABL Facility | Asset-based revolving credit facility | Not supplied: carrying value is not printed by instrument | Not supplied: drawn amount at 2025-12-31 is not stated | Not supplied: drawn amount at 2025-12-31 is not stated | 425 | Secured by security interests in substantially all assets of the borrower and guarantors | Not supplied: priority against the term loan and notes is set by intercreditor agreements that are not supplied | USD | Not supplied: drawn amount at 2025-12-31 is not stated | Not applicable | Term SOFR + 1.50% to 2.00%, or base rate + 0.50% to 1.00% | Floating | Term SOFR | 150 to 200 | 0 | 2028-05-22 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 223–225 |
| Financing cost adjustment | Aggregate issuance costs and discount | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -97 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 217 |

The register is drawn at 2025-12-31, the latest date for which any filing prints each instrument, because the 2026 quarterly reports print debt only by obligor. The Reporting Currency Amount column of the twelve drawn instruments (principal, USD millions) is 4,344; with the Financing cost adjustment of -97 it equals Total Debt of 4,247 at 2025-12-31. Changes in 2026 are the repurchase of USD 194 million of the 5.50% notes due 2028 and USD 6 million of the second lien notes, the USD 8 million extinguished on warrant exercise of the convertible notes, the joint venture term loans and Class A Units of about USD 450 million and ABL borrowings of USD 75 million at 2026-11-05.
Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40, 42

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component (USD millions) | Current Stub (USD millions) | Prior-Year Stub (USD millions) | Derived Value (USD millions) | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM to 2026-03-31 | 177 | 130 | 48 | 259 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-03-31_xrx-20260331.htm.jsonl; 10-Q_2026-06-30_xrx-20260630.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Derived EBITDA; stub components are comparable periods of the same length; includes goodwill impairment in the Q3 2026 stub |
| EBITDA (Reported) | LTM to 2026-06-30 | 177 | 380 | 123 | 434 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-03-31_xrx-20260331.htm.jsonl; 10-Q_2026-06-30_xrx-20260630.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Derived EBITDA; stub components are comparable periods of the same length; includes goodwill impairment in the Q3 2026 stub |
| EBITDA (Reported) | LTM to 2026-09-30 | 177 | -421 | 31 | -275 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-03-31_xrx-20260331.htm.jsonl; 10-Q_2026-06-30_xrx-20260630.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Derived EBITDA; stub components are comparable periods of the same length; includes goodwill impairment in the Q3 2026 stub |
| House-adjusted EBITDA | LTM to 2026-03-31 | 582 | 161 | 94 | 649 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-03-31_xrx-20260331.htm.jsonl; 10-Q_2026-06-30_xrx-20260630.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Analyst Judgement; adjusted operating income + depreciation + equipment financing interest |
| House-adjusted EBITDA | LTM to 2026-06-30 | 582 | 453 | 223 | 812 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-03-31_xrx-20260331.htm.jsonl; 10-Q_2026-06-30_xrx-20260630.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Analyst Judgement; adjusted operating income + depreciation + equipment financing interest |
| House-adjusted EBITDA | LTM to 2026-09-30 | 582 | 658 | 386 | 854 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-03-31_xrx-20260331.htm.jsonl; 10-Q_2026-06-30_xrx-20260630.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Analyst Judgement; adjusted operating income + depreciation + equipment financing interest |
| Adjusted operating income plus depreciation | LTM to 2026-03-31 | 496 | 142 | 72 | 566 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-03-31_xrx-20260331.htm.jsonl; 10-Q_2026-06-30_xrx-20260630.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Analyst Judgement; the issuer's segment profit plus segment depreciation, before any financing interest add-back |
| Adjusted operating income plus depreciation | LTM to 2026-06-30 | 496 | 416 | 178 | 734 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-03-31_xrx-20260331.htm.jsonl; 10-Q_2026-06-30_xrx-20260630.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Analyst Judgement; the issuer's segment profit plus segment depreciation, before any financing interest add-back |
| Adjusted operating income plus depreciation | LTM to 2026-09-30 | 496 | 604 | 320 | 780 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-03-31_xrx-20260331.htm.jsonl; 10-Q_2026-06-30_xrx-20260630.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Analyst Judgement; the issuer's segment profit plus segment depreciation, before any financing interest add-back |
| Revenue | LTM to 2026-09-30 | 7,022 | 5,636 | 4,994 | 7,664 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Lexmark is included from 2025-07-01, so the prior-year stub holds one quarter of Lexmark and the LTM holds four |
| Net cash from operating activities | LTM to 2026-09-30 | 224 | -77 | 16 | 131 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Includes finance receivable run-off and sales that the issuer says fell in 2026 |
| Capital expenditure | LTM to 2026-09-30 | 91 | 70 | 67 | 94 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Positive amount spent; total capital expenditure only |
| Free cash flow | LTM to 2026-09-30 | 133 | -147 | -51 | 37 | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Net cash from operating activities less capital expenditure |
| Cash interest paid | LTM to 2026-09-30 | 272 | Not supplied: not printed for nine months 2026 | Not supplied: not printed for nine months 2025 | Not calculable: interim cash interest is not printed | Not Calculable | 10-K_2025-12-31_xrx-20251231.htm.jsonl; 10-Q_2026-09-30_xrx-20260930.htm.jsonl | The method needs all three components; none of the 2026 quarterly reports prints interest paid |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 3,399 | Net debt data | -717 | T4.4 Income statement, FY2024 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: EBITDA (Reported) is not above zero | Not Calculable | Tier 1 | Annual EBITDA is derived, not issuer-stated; no add-back for impairment, restructuring or other items |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,823 | Net debt data | -717 | T4.4 Income statement, FY2024 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: EBITDA (Reported) is not above zero | Not Calculable | Tier 1 | Annual EBITDA is derived, not issuer-stated; no add-back for impairment, restructuring or other items |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | -717 | T4.4 Income statement, FY2024 | 214 | T4.5 Cash flow statement, Cash Interest Paid | FY2024 / 2024-12-31 | USD | US$m | -3.35 | Calculated | Tier 1 | Annual EBITDA is derived, not issuer-stated; no add-back for impairment, restructuring or other items; cash interest is the annual amount paid |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 4,247 | Net debt data | 177 | T4.4 Income statement, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 23.99 | Calculated | Tier 1 | Annual EBITDA is derived, not issuer-stated; no add-back for impairment, restructuring or other items |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,735 | Net debt data | 177 | T4.4 Income statement, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 21.10 | Calculated | Tier 1 | Annual EBITDA is derived, not issuer-stated; no add-back for impairment, restructuring or other items |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 177 | T4.4 Income statement, FY2025 | 272 | T4.5 Cash flow statement, Cash Interest Paid | FY2025 / 2025-12-31 | USD | US$m | 0.65 | Calculated | Tier 1 | Annual EBITDA is derived, not issuer-stated; no add-back for impairment, restructuring or other items; cash interest is the annual amount paid |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 4,446 | Net debt data | 259 | T4.8 Constructed period register | 2026-03-31 | USD | US$m | 17.17 | Calculated | Tier 2b | LTM EBITDA is derived by FY + current stub - prior-year stub; no add-back for impairment, restructuring or other items |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,861 | Net debt data | 259 | T4.8 Constructed period register | 2026-03-31 | USD | US$m | 14.91 | Calculated | Tier 2b | LTM EBITDA is derived by FY + current stub - prior-year stub; no add-back for impairment, restructuring or other items |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 259 | T4.8 Constructed period register | Not supplied: cash interest paid is not printed for the 2026 quarters | T4.5 Cash flow statement, Cash Interest Paid | 2026-03-31 | USD | US$m | Not calculable: cash interest paid is not printed for the 2026 quarters | Not Calculable | Tier 2b | LTM EBITDA is derived by FY + current stub - prior-year stub; no add-back for impairment, restructuring or other items |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 4,223 | Net debt data | 434 | T4.8 Constructed period register | 2026-06-30 | USD | US$m | 9.73 | Calculated | Tier 2b | LTM EBITDA is derived by FY + current stub - prior-year stub; no add-back for impairment, restructuring or other items |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,728 | Net debt data | 434 | T4.8 Constructed period register | 2026-06-30 | USD | US$m | 8.59 | Calculated | Tier 2b | LTM EBITDA is derived by FY + current stub - prior-year stub; no add-back for impairment, restructuring or other items |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 434 | T4.8 Constructed period register | Not supplied: cash interest paid is not printed for the 2026 quarters | T4.5 Cash flow statement, Cash Interest Paid | 2026-06-30 | USD | US$m | Not calculable: cash interest paid is not printed for the 2026 quarters | Not Calculable | Tier 2b | LTM EBITDA is derived by FY + current stub - prior-year stub; no add-back for impairment, restructuring or other items |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 4,220 | Net debt data | -275 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: EBITDA (Reported) is not above zero | Not Calculable | Tier 2b | LTM EBITDA is derived by FY + current stub - prior-year stub; no add-back for impairment, restructuring or other items |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,808 | Net debt data | -275 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: EBITDA (Reported) is not above zero | Not Calculable | Tier 2b | LTM EBITDA is derived by FY + current stub - prior-year stub; no add-back for impairment, restructuring or other items |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | -275 | T4.8 Constructed period register | Not supplied: cash interest paid is not printed for the 2026 quarters | T4.5 Cash flow statement, Cash Interest Paid | 2026-09-30 | USD | US$m | Not calculable: cash interest paid is not printed for the 2026 quarters | Not Calculable | Tier 2b | LTM EBITDA is derived by FY + current stub - prior-year stub; no add-back for impairment, restructuring or other items |
| Total debt / house-adjusted EBITDA | Gross debt / house-adjusted EBITDA | 3,399 | Net debt data | 609 | T4.4 Income statement, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 5.58 | Calculated | Tier 1 | Analyst Judgement: house-adjusted EBITDA is built from issuer segment profit; it excludes restructuring, pension non-service cost and other cash items |
| Total debt / house-adjusted EBITDA | Gross debt / house-adjusted EBITDA | 4,247 | Net debt data | 582 | T4.4 Income statement, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 7.30 | Calculated | Tier 1 | Analyst Judgement: house-adjusted EBITDA is built from issuer segment profit; it excludes restructuring, pension non-service cost and other cash items |
| Total debt / house-adjusted EBITDA | Gross debt / house-adjusted EBITDA | 4,446 | Net debt data | 649 | T4.8 Constructed period register | 2026-03-31 | USD | US$m | 6.85 | Calculated | Tier 2b | Analyst Judgement: house-adjusted EBITDA is built from issuer segment profit; it excludes restructuring, pension non-service cost and other cash items |
| Total debt / house-adjusted EBITDA | Gross debt / house-adjusted EBITDA | 4,223 | Net debt data | 812 | T4.8 Constructed period register | 2026-06-30 | USD | US$m | 5.20 | Calculated | Tier 2b | Analyst Judgement: house-adjusted EBITDA is built from issuer segment profit; it excludes restructuring, pension non-service cost and other cash items |
| Total debt / house-adjusted EBITDA | Gross debt / house-adjusted EBITDA | 4,220 | Net debt data | 854 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 4.94 | Calculated | Tier 2b | Analyst Judgement: house-adjusted EBITDA is built from issuer segment profit; it excludes restructuring, pension non-service cost and other cash items |
| Net debt / house-adjusted EBITDA | Net debt / house-adjusted EBITDA | 2,823 | Net debt data | 609 | T4.4 Income statement, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 4.64 | Calculated | Tier 1 | Analyst Judgement: same EBITDA as the row above |
| Net debt / house-adjusted EBITDA | Net debt / house-adjusted EBITDA | 3,735 | Net debt data | 582 | T4.4 Income statement, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 6.42 | Calculated | Tier 1 | Analyst Judgement: same EBITDA as the row above |
| Net debt / house-adjusted EBITDA | Net debt / house-adjusted EBITDA | 3,861 | Net debt data | 649 | T4.8 Constructed period register | 2026-03-31 | USD | US$m | 5.95 | Calculated | Tier 2b | Analyst Judgement: same EBITDA as the row above |
| Net debt / house-adjusted EBITDA | Net debt / house-adjusted EBITDA | 3,728 | Net debt data | 812 | T4.8 Constructed period register | 2026-06-30 | USD | US$m | 4.59 | Calculated | Tier 2b | Analyst Judgement: same EBITDA as the row above |
| Net debt / house-adjusted EBITDA | Net debt / house-adjusted EBITDA | 3,808 | Net debt data | 854 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 4.46 | Calculated | Tier 2b | Analyst Judgement: same EBITDA as the row above |
| House-adjusted EBITDA / cash interest | House-adjusted EBITDA / cash interest paid | 609 | T4.4 Income statement, FY2024 | 214 | T4.5 Cash flow statement, Cash Interest Paid | FY2024 / 2024-12-31 | USD | US$m | 2.85 | Calculated | Tier 1 | Analyst Judgement: annual cash interest paid only |
| House-adjusted EBITDA / cash interest | House-adjusted EBITDA / cash interest paid | 582 | T4.4 Income statement, FY2025 | 272 | T4.5 Cash flow statement, Cash Interest Paid | FY2025 / 2025-12-31 | USD | US$m | 2.14 | Calculated | Tier 1 | Analyst Judgement: annual cash interest paid only |
| Core debt / adjusted operating income plus depreciation | Core debt / (adjusted operating income + depreciation) | 1,658 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 123 | 503 | T4.4 Income statement | FY2024 / 2024-12-31 | USD | US$m | 3.30 | Calculated | Tier 1 | Analyst Judgement: core debt excludes financing debt that supports finance receivables and operating lease equipment, so equipment financing interest is not added back; lease funding is a matched-funding assumption of 7 to 1 |
| Core debt / adjusted operating income plus depreciation | Core debt / (adjusted operating income + depreciation) | 2,759 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 123 | 496 | T4.4 Income statement | FY2025 / 2025-12-31 | USD | US$m | 5.56 | Calculated | Tier 1 | Analyst Judgement: core debt excludes financing debt that supports finance receivables and operating lease equipment, so equipment financing interest is not added back; lease funding is a matched-funding assumption of 7 to 1 |
| Core debt / adjusted operating income plus depreciation | Core debt / (adjusted operating income + depreciation) | 3,039 | 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 73 | 566 | T4.8 Constructed period register | 2026-03-31 | USD | US$m | 5.37 | Calculated | Tier 2b | Analyst Judgement: core debt excludes financing debt that supports finance receivables and operating lease equipment, so equipment financing interest is not added back; lease funding is a matched-funding assumption of 7 to 1 |
| Core debt / adjusted operating income plus depreciation | Core debt / (adjusted operating income + depreciation) | 2,913 | 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 88 | 734 | T4.8 Constructed period register | 2026-06-30 | USD | US$m | 3.97 | Calculated | Tier 2b | Analyst Judgement: core debt excludes financing debt that supports finance receivables and operating lease equipment, so equipment financing interest is not added back; lease funding is a matched-funding assumption of 7 to 1 |
| Core debt / adjusted operating income plus depreciation | Core debt / (adjusted operating income + depreciation) | 2,924 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 100 | 780 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 3.75 | Calculated | Tier 2b | Analyst Judgement: core debt excludes financing debt that supports finance receivables and operating lease equipment, so equipment financing interest is not added back; lease funding is a matched-funding assumption of 7 to 1 |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | LTM to 2026-09-30 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue (USD millions) | 6,221 | 7,022 | 7,664 | Up | Lexmark is consolidated from 2025-07-01, so FY2025 holds two quarters and the LTM four |
| Profitability | Gross margin (%) | 31.51 | 27.07 | 30.81 | Up | Revenue less cost of sales and cost of services; FY2025 includes purchase accounting effects in cost of sales |
| Profitability | Adjusted operating income (USD millions) | 302 | 248 | 501 | Up | Issuer segment profit after corporate costs; FY2024 on the 2025 segment basis |
| Profitability | Adjusted operating income margin (%) | 4.85 | 3.53 | 6.54 | Up | Adjusted operating income over revenue |
| Profitability | EBITDA (Reported) (USD millions) | -717 | 177 | -275 | Down | Derived; includes goodwill impairment of 1,058 in FY2024 and 959 in Q3 2026 |
| Profitability | House-adjusted EBITDA (USD millions) | 609 | 582 | 854 | Up | Analyst Judgement |
| Cash flow | Net cash from operating activities (USD millions) | 511 | 224 | 131 | Down | Includes run-off of finance receivables |
| Cash flow | Free cash flow (USD millions) | 467 | 133 | 37 | Down | Operating cash flow less capital expenditure |
| Leverage | Total debt / house-adjusted EBITDA (x) | 5.58 | 7.30 | 4.94 | Down | Analyst Judgement |
| Leverage | Net debt / house-adjusted EBITDA (x) | 4.64 | 6.42 | 4.46 | Down | Analyst Judgement |
| Leverage | Core debt / (adjusted operating income + depreciation) (x) | 3.30 | 5.56 | 3.75 | Down | FY2025 earnings hold Lexmark for six months |
| Capital structure | Financing debt (USD millions) | 1,741 | 1,488 | 1,296 | Down | Debt the issuer allocates to finance receivables and operating lease equipment at an assumed 7 to 1 ratio |
| Capital structure | Core debt (USD millions) | 1,658 | 2,759 | 2,924 | Up | Total debt less financing debt |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA, unadjusted, as the primary denominator | None: no EBITDA or adjusted EBITDA is stated; the issuer states adjusted operating income (segment profit) and a leverage target of less than 3.0x total debt to EBITDA | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 7; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 21 | All periods | High: LTM reported EBITDA is -275 and house-adjusted EBITDA is 854, a difference of 1,129 | Financial foundation, Fundamental credit, Downside | Reported EBITDA is derived and shown with house-adjusted EBITDA, labelled Analyst Judgement; the issuer's own EBITDA definition is needed |
| Total debt | Balance-sheet carrying value, with principal logged beside it | Total Debt 4,220 at 2026-09-30, of which financing debt 1,296 and core debt 2,924 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–100 | 2026-09-30 | Medium: principal is 4,348, 128 higher | Financial foundation, Liquidity | Carrying value is used for leverage; principal is shown in the ladder and the reconciliation |
| Total debt | Every balance-sheet debt line | The tariff financing liability of 81 sits outside Total Debt; the joint venture term loans and Class A Units of about 450 sit inside | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4, 39, 41 | 2026-06-30, 2026-09-30 | Medium: 81 of debt-like funding is outside the ratio | Financial foundation, Liquidity | Issuer classification followed; the tariff liability is shown on its own balance sheet line |
| Interest | Cash interest paid for coverage | Interest expense 331 for nine months 2026 and interest paid only for full years (272 in FY2025) | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 43 | 2026 interim periods | High for coverage: no LTM cash interest exists | Financial foundation, Fundamental credit | Annual cash interest is used for FY2024 and FY2025; interim cover is not calculable |
| Revenue | One presentation across periods | FY2024 services revenue recast from 3,692 to 3,843; non-financing interest split out in 2025 comparatives | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 161; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 14 | FY2024, 2025 comparatives | Low: totals are unchanged | Financial foundation, Earnings changes | Later report used; recast shown in the normalization register |
| Perimeter | Issuer consolidated statements | Xerox Corporation reports separately; Q3 2026 net loss is 1,015 for Holdings and 1,012 for Xerox Corporation, and its balance sheet holds related party debt of 1,658 and 18 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4, 6, 7 | 2026-09-30 | Low: intragroup debt is not added to the parent's | Financial foundation | Holdings statements used; Xerox Corporation shown as context only |
| Acquisition basis | Reported periods as printed | Pro forma discussion treats Lexmark as owned for all periods compared; reported figures include it from 2025-07-01 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 111–112 | FY2025, nine months 2025, LTM | Medium: year-on-year growth mixes acquired and organic revenue | Financial foundation, Earnings changes | Reported figures used; no pro forma figure is built |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| Q2 2026 | 2026-04-01 | 2026-06-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 3,399 | 576 | 2,823 | US$m | Gross debt is balance-sheet total debt (short-term debt and current portion plus long-term debt, net of issuance costs and discounts) and includes financing debt of 1,741 supporting finance receivables and operating lease equipment and core debt of 1,658; principal total 3,451; cash excludes restricted cash |
| FY2025 / 2025-12-31 | 4,247 | 512 | 3,735 | US$m | Gross debt is balance-sheet total debt (short-term debt and current portion plus long-term debt, net of issuance costs and discounts) and includes financing debt of 1,488 supporting finance receivables and operating lease equipment and core debt of 2,759; principal total 4,344; cash excludes restricted cash |
| 2026-03-31 | 4,446 | 585 | 3,861 | US$m | Gross debt is balance-sheet total debt (short-term debt and current portion plus long-term debt, net of issuance costs and discounts) and includes financing debt of 1,407 supporting finance receivables and operating lease equipment and core debt of 3,039; principal total 4,581; cash excludes restricted cash; the joint venture term loans and Class A Units (about 450) are included as debt |
| 2026-06-30 | 4,223 | 495 | 3,728 | US$m | Gross debt is balance-sheet total debt (short-term debt and current portion plus long-term debt, net of issuance costs and discounts) and includes financing debt of 1,310 supporting finance receivables and operating lease equipment and core debt of 2,913; principal total 4,357; cash excludes restricted cash; the joint venture term loans and Class A Units (about 450) are included as debt; the tariff financing liability of 90 is excluded |
| 2026-09-30 | 4,220 | 412 | 3,808 | US$m | Gross debt is balance-sheet total debt (short-term debt and current portion plus long-term debt, net of issuance costs and discounts) and includes financing debt of 1,296 supporting finance receivables and operating lease equipment and core debt of 2,924; principal total 4,348; cash excludes restricted cash; the joint venture term loans and Class A Units (about 450) are included as debt; the tariff financing liability of 81 is excluded |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 4,348 | -128 | 4,220 | US$m | Reconciling items are debt issuance costs of -95 and net unamortized discount of -33, summed in calculation C30; the ladder is a principal ladder by obligor and includes the joint venture term loans and Class A Units |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Exchange of about 174 of Holdings 5.50% notes due 2028 for about 120 of new first lien notes due 2030 and shares | 2026-11-13 | -54 | 3,754 | Not supplied: LTM EBITDA (Reported) is not above zero | US$m | Expected, not confirmed, closing on or about 2026-11-13 per the quarterly report; the issuer expects total principal to fall by up to about 54 (net debt 3,808 less 54, calculation C46); accrued interest on the exchanged notes is paid in cash and is not stated, and the carrying-value effect is not stated; about 120 of maturity moves from 2028 to 2030 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | Not supplied: EBITDA (Reported) is not above zero | Not supplied: EBITDA (Reported) is not above zero | x | Reported EBITDA is derived by the method's definition; annual EBITDA -717 is negative or zero; debt is carrying value; the ratio mixes financing debt with a derived EBITDA |
| FY2025 / 2025-12-31 | 23.99 | 21.10 | x | Reported EBITDA is derived by the method's definition; annual EBITDA 177; debt is carrying value; the ratio mixes financing debt with a derived EBITDA |
| 2026-03-31 | 17.17 | 14.91 | x | Reported EBITDA is derived by the method's definition; LTM EBITDA 259; debt is carrying value; the ratio mixes financing debt with a derived EBITDA |
| 2026-06-30 | 9.73 | 8.59 | x | Reported EBITDA is derived by the method's definition; LTM EBITDA 434; debt is carrying value; the ratio mixes financing debt with a derived EBITDA |
| 2026-09-30 | Not supplied: EBITDA (Reported) is not above zero | Not supplied: EBITDA (Reported) is not above zero | x | Reported EBITDA is derived by the method's definition; LTM EBITDA -275 is negative or zero; debt is carrying value; the ratio mixes financing debt with a derived EBITDA |

The ratios use derived reported EBITDA, which is negative or distorted by the goodwill impairments, so house-adjusted leverage in the calculation register is the more informative reading.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | -3.35 | x | Reported EBITDA -717 over cash interest paid 214 for the year; annual figures only |
| FY2025 / 2025-12-31 | 0.65 | x | Reported EBITDA 177 over cash interest paid 272 for the year; annual figures only |
| 2026-03-31 | Not supplied: cash interest paid is not printed for the 2026 quarters | x | Reported LTM EBITDA 259; the 2026 quarterly reports print no interest paid, so no LTM cash interest exists |
| 2026-06-30 | Not supplied: cash interest paid is not printed for the 2026 quarters | x | Reported LTM EBITDA 434; the 2026 quarterly reports print no interest paid, so no LTM cash interest exists |
| 2026-09-30 | Not supplied: cash interest paid is not printed for the 2026 quarters | x | Reported LTM EBITDA -275; the 2026 quarterly reports print no interest paid, so no LTM cash interest exists |

Cover is available only for full years because the 2026 quarterly reports print no interest paid.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 576 | Not supplied: availability under the borrowing base is not stated at 2024-12-31 | US$m | Cash is cash and cash equivalents excluding restricted cash; undrawn is the ABL facility's no borrowings and USD 2 million of letters of credit at 2024-12-31 under USD 425 million of commitments; borrowing base availability not stated |
| FY2025 / 2025-12-31 | 512 | Not supplied: availability is stated only as of 2026-03-16 on a January calculation | US$m | Cash is cash and cash equivalents excluding restricted cash; undrawn is the ABL facility's the annual report states net availability of about 289 as of 2026-03-16 based on January availability, which is not a year-end figure |
| 2026-03-31 | 585 | 289 | US$m | Cash is cash and cash equivalents excluding restricted cash; undrawn is the ABL facility's net availability as of 2026-05-07 based on the March calculation: availability 387 less letters of credit about 98, no borrowings |
| 2026-06-30 | 495 | 276 | US$m | Cash is cash and cash equivalents excluding restricted cash; undrawn is the ABL facility's net availability as of 2026-08-06 based on the June calculation: availability 388 less letters of credit about 112, no borrowings |
| 2026-09-30 | 412 | 225 | US$m | Cash is cash and cash equivalents excluding restricted cash; undrawn is the ABL facility's net availability as of 2026-11-05 based on the September calculation: availability 366 less letters of credit about 66 and borrowings 75 |

Undrawn facilities are the ABL's net availability at filing dates, limited by the borrowing base, not commitments of USD 425 million.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 Q4 | 20 | US$m | Principal maturing from 2026-10-01 to 2026-12-31 at 2026-09-30; includes joint venture amortization of Other subsidiaries |
| 2027 | 197 | US$m | Principal maturing in 2027 at 2026-09-30: Holdings 25, Xerox Corporation 90, other subsidiaries 82 |
| 2028 | 752 | US$m | Principal maturing in 2028: Holdings 581, Xerox Corporation 90, other subsidiaries 81; the ABL matures in May 2028 |
| 2029 | 1,137 | US$m | Principal maturing in 2029: Holdings 531, Xerox Corporation 525, other subsidiaries 81; the term loan matures in November 2029 |
| 2030 | 1,042 | US$m | Principal maturing in 2030: Holdings 561, Xerox Corporation 400, other subsidiaries 81 |
| 2031 and thereafter | 1,200 | US$m | Principal maturing from 2031: Xerox Corporation 1,094, other subsidiaries 106; a principal ladder, not carrying value |

The ladder is principal by period at 2026-09-30, not carrying value, and it includes the joint venture term loans and Class A Units.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 6,221 | 609 | US$m | Revenue as recast in the 2025 annual report; EBITDA identity: house-adjusted (adjusted operating income 302 + depreciation 201 + equipment financing interest 106), because the issuer states no adjusted EBITDA; reported EBITDA is -717 |
| FY2025 / 2025-12-31 | 7,022 | 582 | US$m | EBITDA identity: house-adjusted (248 + 248 + 86); reported EBITDA is 177; Lexmark is included from 2025-07-01 |
| 2026-09-30 | 7,664 | 854 | US$m | LTM to 2026-09-30, twelve months; EBITDA identity: house-adjusted; reported LTM EBITDA is -275 after a goodwill impairment of 959; four quarters of Lexmark |

The EBITDA shown is house-adjusted, an analyst measure that excludes goodwill impairment, restructuring and other one-time items, while reported EBITDA is negative for FY2024 and the LTM.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Xerox Corporation Term Loan B due 2029 | 1 | Yes | 706 | 3.99 | US$m | Principal at 2025-12-31 (latest instrument-level disclosure); cumulative leverage = cumulative principal 706 / FY2025 EBITDA (Reported) 177; First lien term loan; guaranteed by Holdings and subsidiaries; secured on substantially all assets of the guarantors |
| Xerox Corporation Senior Secured First Lien Notes due 2030 | 1 | Yes | 400 | 6.25 | US$m | Principal at 2025-12-31 (latest instrument-level disclosure); cumulative leverage = cumulative principal 1,106 / FY2025 EBITDA (Reported) 177; First priority on fixed asset collateral; guaranteed by Holdings and subsidiaries; rank 1 shared with the term loan on the filing's first lien description, intercreditor terms not supplied |
| Xerox Corporation Senior Secured Second Lien Notes due 2031 | 2 | Yes | 500 | 9.07 | US$m | Principal at 2025-12-31 (latest instrument-level disclosure); cumulative leverage = cumulative principal 1,606 / FY2025 EBITDA (Reported) 177; Second priority on fixed asset collateral; guaranteed by Holdings and subsidiaries |
| Xerox Holdings Senior Notes due 2026 | 3 | No | 125 | 9.78 | US$m | Principal at 2025-12-31 (latest instrument-level disclosure); cumulative leverage = cumulative principal 1,731 / FY2025 EBITDA (Reported) 177; Unsecured; obligor Holdings; guaranteed by Xerox Corporation and subsidiaries |
| Xerox Holdings Senior Notes due 2028 | 3 | No | 750 | 14.02 | US$m | Principal at 2025-12-31 (latest instrument-level disclosure); cumulative leverage = cumulative principal 2,481 / FY2025 EBITDA (Reported) 177; Unsecured; obligor Holdings |
| Xerox Holdings Senior Notes due 2029 | 3 | No | 500 | 16.84 | US$m | Principal at 2025-12-31 (latest instrument-level disclosure); cumulative leverage = cumulative principal 2,981 / FY2025 EBITDA (Reported) 177; Unsecured; obligor Holdings |
| Xerox Holdings Senior Notes due 2030 | 3 | No | 250 | 18.25 | US$m | Principal at 2025-12-31 (latest instrument-level disclosure); cumulative leverage = cumulative principal 3,231 / FY2025 EBITDA (Reported) 177; Unsecured; obligor Holdings; guaranteed by Xerox Corporation and subsidiaries |
| Xerox Holdings Convertible Senior Notes due 2030 | 3 | No | 400 | 20.51 | US$m | Principal at 2025-12-31 (latest instrument-level disclosure); cumulative leverage = cumulative principal 3,631 / FY2025 EBITDA (Reported) 177; Unsecured; obligor Holdings |
| Xerox Corporation Senior Notes due 2035 | 3 | No | 250 | 21.93 | US$m | Principal at 2025-12-31 (latest instrument-level disclosure); cumulative leverage = cumulative principal 3,881 / FY2025 EBITDA (Reported) 177; Unsecured; obligor Xerox Corporation |
| Xerox Corporation Senior Notes due 2039 | 3 | No | 350 | 23.90 | US$m | Principal at 2025-12-31 (latest instrument-level disclosure); cumulative leverage = cumulative principal 4,231 / FY2025 EBITDA (Reported) 177; Unsecured; obligor Xerox Corporation |

The stack is drawn at 2025-12-31 and leaves out the 110 secured promissory note, the 3 of secured borrowings and the undrawn ABL because their rank or drawn amount is not stated.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA | Not supplied: the issuer states no adjusted EBITDA, so the method gives no bridge | US$m | Opening measure would be EBITDA (Reported); the closing measure, an issuer-stated adjusted EBITDA, does not exist in the sources |
| Adjusted EBITDA | Not supplied: the issuer states no adjusted EBITDA, so the method gives no bridge | US$m | House-adjusted EBITDA is shown in the revenue and EBITDA table and the register as Analyst Judgement and is not an issuer measure |

The issuer states no adjusted EBITDA, so no bridge can be drawn from the method's definition.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-30 | Unit | Basis |
| --- | --- | --- | --- | --- | --- |
| Revenue | 6,221 | 7,022 | 7,664 | USD millions | Reported; LTM Calculated in T4.8 |
| EBITDA (Reported) | -717 | 177 | -275 | USD millions | Derived from statement lines; includes goodwill impairment |
| House-adjusted EBITDA | 609 | 582 | 854 | USD millions | Analyst Judgement |
| Net cash from operating activities | 511 | 224 | 131 | USD millions | Reported; LTM Calculated |
| Free cash flow | 467 | 133 | 37 | USD millions | Operating cash flow less capital expenditure |
| Total debt at period end | 3,399 | 4,247 | 4,220 | USD millions | Balance-sheet carrying value |
| Net debt at period end | 2,823 | 3,735 | 3,808 | USD millions | Total debt less cash and cash equivalents |
| Total debt / EBITDA (Reported) | Not calculable: EBITDA (Reported) is not above zero | 23.99 | Not calculable: EBITDA (Reported) is not above zero | x | Calculated |
| Total debt / house-adjusted EBITDA | 5.58 | 7.30 | 4.94 | x | Analyst Judgement |
| Net debt / house-adjusted EBITDA | 4.64 | 6.42 | 4.46 | x | Analyst Judgement |
| EBITDA (Reported) / cash interest | -3.35 | 0.65 | Not calculable: cash interest paid is not printed for the 2026 quarters | x | Calculated; annual cash interest only |

### Leverage and coverage

The issuer states no EBITDA, so the reported measure is derived from the statements and it absorbs the third-quarter 2026 goodwill impairment of USD 959 million, which leaves EBITDA for the twelve months to 30 September 2026 at negative USD 275 million and total debt over EBITDA not calculable, as it is for FY2024, when a USD 1,058 million impairment had the same effect. At FY2025, with no impairment, reported EBITDA of USD 177 million gives total debt of 23.99x and cover of 0.65x on the USD 272 million of cash interest paid, which shows how little earnings stood behind the debt before Lexmark contributed for a full year.
Basis: Source readiness (CP-0); 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 150, 152, 227; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–4; calculation C55; calculation C64

On the house-adjusted measure, net debt is 4.46x LTM EBITDA against 6.42x at FY2025 and 4.64x at FY2024, and total debt is 4.94x against 7.30x at FY2025. The improvement is earnings, not repayment: net debt rose by USD 73 million from 2025-12-31 to 2026-09-30, while adjusted operating income for the nine months was USD 399 million against USD 146 million a year earlier, a rise of USD 253 million, which the issuer attributes to integration synergies and cost discipline, although revenue fell 4.7% in the third quarter of 2026 against a third quarter 2025 that already included Lexmark, so the gain is cost-led.
Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 151, 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4, 21, 59, 66; calculation C58; calculation C60; calculation C62; calculation C59; calculation C61; calculation C65; calculation C67

The house measure is generous in two ways. It excludes restructuring charges and the non-service cost of retirement plans, although the company paid USD 60 million for restructuring and contributed USD 118 million to retirement plans in the first nine months of 2026, and it adds back equipment financing interest so that it matches total debt that includes USD 1,296 million of financing debt supporting finance receivables and operating lease equipment. Against core debt of USD 2,924 million, the ratio to adjusted operating income plus depreciation is 3.75x, against 5.56x at FY2025, whose earnings held Lexmark for only six months.
Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 123, 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5, 24, 100; calculation C63

The strongest evidence against a cautious view is the recovery in adjusted operating income and the issuer's own targets: it states run-rate synergies above USD 300 million by the end of 2027, and the October 2026 exchange would cut principal by up to about USD 54 million while moving about USD 120 million of maturities from 2028 to 2030. That view would win if operating cash flow converts: management's range for 2026 needs USD 222 million to USD 272 million in the fourth quarter, against USD 208 million in the fourth quarter of 2025, and a shortfall would leave interest, restructuring and the 2028 maturities to be funded from cash and the ABL.
Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 7, 152; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 56, 97; calculation C38; calculation C39; calculation C40

### Cash flow quality

Operating cash flow was negative USD 77 million in the first nine months of 2026 against positive USD 16 million a year earlier, and free cash flow after USD 70 million of capital expenditure was negative USD 147 million. Operating cash flow includes USD 152 million from the run-off of finance receivables, down from USD 338 million, and the issuer attributes weaker liquidity in 2026 to lower profitability and lower proceeds from sales of finance receivables; without the run-off, operating cash flow was negative USD 229 million against negative USD 322 million.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 5–6, 95; calculation C35; calculation C44; calculation C45

Dividends paid fell to USD 24 million from USD 65 million, and the board suspended common and preferred dividend payments from January 2027, which the issuer expects to conserve about USD 28 million a year. The issuer also sold rights to USD 105 million of tariff refund receivables for about USD 80 million of cash, shown in financing activities, and carries a related financing liability of USD 81 million outside total debt, while its supplier finance program, at USD 12 million against accounts payable of USD 1,484 million, is not a material funding float.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4, 6, 38, 41, 56

### Liquidity and refinancing

Cash and cash equivalents were USD 412 million at 2026-09-30, with restricted cash of USD 118 million held separately, and net ABL availability was about USD 225 million after USD 75 million of borrowings and about USD 66 million of letters of credit, together USD 637 million. Principal due is USD 20 million in the fourth quarter of 2026 and USD 197 million in 2027, then USD 752 million in 2028, USD 1,137 million in 2029 and USD 1,042 million in 2030, so USD 2,931 million falls due in the three years from 2028, including the ABL in May 2028 and the term loan in November 2029.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4, 37, 42, 95, 100–101; calculation C43; calculation C66

The joint venture financing adds scheduled amortization of about USD 81 million a year from the fourth quarter of 2026. Management states that liquidity is sufficient for at least twelve months from 2026-11-05 without relying on capital markets, but expects to address the 2028 and 2029 maturities through cash from operations, refinancings and exchanges whose timing and terms are uncertain.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39, 95; calculation C42

### Data quality, definitions and subsequent events

Debt is measured at balance-sheet carrying value of USD 4,220 million, which is USD 128 million below the USD 4,348 million of principal because of USD 95 million of issuance costs and USD 33 million of net discount; the tariff financing liability of USD 81 million is outside this figure, while the joint venture term loans and Class A Units of about USD 450 million are inside it.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4, 39, 99; calculation C30

Comparatives were recast: FY2024 services revenue rises from USD 3,692 million to USD 3,843 million in the 2025 annual report, and non-financing interest expense was split out of other expenses in the 2025 comparatives of the latest quarterly report, so FY2024 and 2025 figures here follow the later reports. Lexmark has been consolidated since 2025-07-01, so nine months 2025 hold one quarter of Lexmark and the twelve months to 2026-09-30 hold four.
Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 161; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 14, 26

Dashes in the statements are carried as not supplied, not as zero, which affects the goodwill impairment, divestitures, short-term debt and tariff liability lines. Xerox Corporation, the operating subsidiary, reports a third-quarter 2026 net loss USD 3 million smaller than the parent's and carries related party debt of USD 1,658 million owed to the parent, which is not added to the parent's debt.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4, 6, 7; calculation C54

Two subsequent events are flagged and kept out of the period figures. The debt exchange expected to close on 2026-11-13 would reduce principal by up to about USD 54 million, which would put net debt at about USD 3,754 million on the issuer's terms before accrued interest paid in cash, and dividends on common and preferred stock are suspended from January 2027. No supplied document confirms that the exchange closed.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 56, 95; calculation C46

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Historical statements, FY2024 to Q3 2026 | Ready | FY2024 is recast; dashes are carried as not supplied | None |
| Leverage and coverage on reported EBITDA | Not Ready | The issuer states no EBITDA; derived EBITDA is negative for FY2024 and the LTM; interim cash interest is not printed | Obtain an issuer-stated adjusted EBITDA definition and interim interest paid |
| Leverage on house-adjusted EBITDA | Ready with Limitations | Analyst measure built from segment profit; excludes restructuring and pension costs | Label as Analyst Judgement wherever used |
| Debt structure and priority | Ready with Limitations | Instrument register and stack are at 2025-12-31; executed documents are not supplied | Obtain the indentures, credit agreements and a current debt schedule |
| Liquidity and maturity profile | Ready with Limitations | Availability is stated at filing dates; the exchange is not confirmed | Obtain borrowing base certificates and the report of the exchange closing |
| Cash flow quality and industrial against finance split | Ready with Limitations | Only debt is split between financing and core; cash flows are year to date | Obtain interim cash flow supplements and any segment cash flow disclosure |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 14 |
| Calculated | 8 |
| Assumption-Based | 1 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 5 |
| Fields present | 24 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 6 |

## Calculations

Each calculation uses only figures printed in the supplied filings or stated in this answer's tables; negative amounts carry a minus sign.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Total interest expense, FY2024 | equipment financing interest 106 + non-financing interest expense 119 | 225 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227 |
| C2 | Total interest expense, FY2025 | equipment financing interest 86 + non-financing interest expense 248 | 334 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227 |
| C3 | Total interest expense, 9M 2025 | equipment financing interest 66 + non-financing interest expense 168 | 234 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 43 |
| C4 | Total interest expense, 9M 2026 | equipment financing interest 54 + non-financing interest expense 277 | 331 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 43 |
| C5 | Total interest expense, Q3 2025 | equipment financing interest 21 + non-financing interest expense 80 | 101 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 43 |
| C6 | Total interest expense, Q3 2026 | equipment financing interest 17 + non-financing interest expense 93 | 110 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 43 |
| C7 | Total interest expense, Q1 2026 | equipment financing interest 19 + non-financing interest expense 84 | 103 | 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 35 |
| C8 | Total interest expense, Q2 2026 | equipment financing interest 18 + non-financing interest expense 100 | 118 | 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 37 |
| C9 | EBITDA (Reported), FY2024 | (Loss) before income taxes -1,216 + total interest expense 225 + depreciation and amortization 274 | -717 | T4.4 Income statement |
| C10 | EBITDA (Reported), FY2025 | (Loss) before income taxes -488 + total interest expense 334 + depreciation and amortization 331 | 177 | T4.4 Income statement |
| C11 | EBITDA (Reported), 9M 2025 | (Loss) before income taxes -427 + total interest expense 234 + depreciation and amortization 224 | 31 | T4.4 Income statement |
| C12 | EBITDA (Reported), 9M 2026 | (Loss) before income taxes -1,048 + total interest expense 331 + depreciation and amortization 296 | -421 | T4.4 Income statement |
| C13 | EBITDA (Reported), Q3 2025 | (Loss) before income taxes -300 + total interest expense 101 + depreciation and amortization 107 | -92 | T4.4 Income statement |
| C14 | EBITDA (Reported), Q3 2026 | (Loss) before income taxes -1,006 + total interest expense 110 + depreciation and amortization 95 | -801 | T4.4 Income statement |
| C15 | EBITDA (Reported), Q1 2026 | (Loss) before income taxes -73 + total interest expense 103 + depreciation and amortization 100 | 130 | T4.4 Income statement |
| C16 | EBITDA (Reported), Q2 2026 | (Loss) before income taxes 31 + total interest expense 118 + depreciation and amortization 101 | 250 | T4.4 Income statement |
| C17 | House-adjusted EBITDA, FY2024 | adjusted operating income 302 + depreciation 201 + equipment financing interest 106 | 609 | T4.4 Income statement |
| C18 | House-adjusted EBITDA, FY2025 | adjusted operating income 248 + depreciation 248 + equipment financing interest 86 | 582 | T4.4 Income statement |
| C19 | House-adjusted EBITDA, 9M 2025 | adjusted operating income 146 + depreciation 174 + equipment financing interest 66 | 386 | T4.4 Income statement |
| C20 | House-adjusted EBITDA, 9M 2026 | adjusted operating income 399 + depreciation 205 + equipment financing interest 54 | 658 | T4.4 Income statement |
| C21 | House-adjusted EBITDA, Q3 2025 | adjusted operating income 65 + depreciation 77 + equipment financing interest 21 | 163 | T4.4 Income statement |
| C22 | House-adjusted EBITDA, Q3 2026 | adjusted operating income 124 + depreciation 64 + equipment financing interest 17 | 205 | T4.4 Income statement |
| C23 | House-adjusted EBITDA, Q1 2026 | adjusted operating income 72 + depreciation 70 + equipment financing interest 19 | 161 | T4.4 Income statement |
| C24 | House-adjusted EBITDA, Q2 2026 | adjusted operating income 203 + depreciation 71 + equipment financing interest 18 | 292 | T4.4 Income statement |
| C25 | Gross debt and net debt, FY2024 / 2024-12-31 | short-term debt and current portion 585 + long-term debt 2,814 = 3,399; less cash and cash equivalents 576 | gross debt 3,399; net debt 2,823 | T4.6 Balance sheet |
| C26 | Gross debt and net debt, FY2025 / 2025-12-31 | short-term debt and current portion 231 + long-term debt 4,016 = 4,247; less cash and cash equivalents 512 | gross debt 4,247; net debt 3,735 | T4.6 Balance sheet |
| C27 | Gross debt and net debt, 2026-03-31 | short-term debt and current portion 165 + long-term debt 4,281 = 4,446; less cash and cash equivalents 585 | gross debt 4,446; net debt 3,861 | T4.6 Balance sheet |
| C28 | Gross debt and net debt, 2026-06-30 | short-term debt and current portion 70 + long-term debt 4,153 = 4,223; less cash and cash equivalents 495 | gross debt 4,223; net debt 3,728 | T4.6 Balance sheet |
| C29 | Gross debt and net debt, 2026-09-30 | short-term debt and current portion 157 + long-term debt 4,063 = 4,220; less cash and cash equivalents 412 | gross debt 4,220; net debt 3,808 | T4.6 Balance sheet |
| C30 | Reconciling items between principal and carrying value, 2026-09-30 | debt issuance costs -95 + net unamortized discount -33 | -128; principal 4,348 + (-128) = 4,220 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 99 |
| C31 | Maturity ladder total, 2026-09-30 | 20 + 197 + 752 + 1,137 + 1,042 + 1,200 | 4,348 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 100–101 |
| C32 | Free cash flow, FY2024 | net cash from operating activities 511 + capital expenditure -44 | 467 | T4.5 Cash flow statement |
| C33 | Free cash flow, FY2025 | net cash from operating activities 224 + capital expenditure -91 | 133 | T4.5 Cash flow statement |
| C34 | Free cash flow, 9M 2025 | net cash from operating activities 16 + capital expenditure -67 | -51 | T4.5 Cash flow statement |
| C35 | Free cash flow, 9M 2026 | net cash from operating activities -77 + capital expenditure -70 | -147 | T4.5 Cash flow statement |
| C36 | Free cash flow, Q1 2026 | net cash from operating activities -144 + capital expenditure -21 | -165 | T4.5 Cash flow statement |
| C37 | Free cash flow, H1 2026 | net cash from operating activities -107 + capital expenditure -47 | -154 | T4.5 Cash flow statement |
| C38 | Operating cash flow of Q4 2025 | FY2025 224 - nine months 2025 16 | 208 | T4.5 Cash flow statement |
| C39 | Operating cash flow needed in Q4 2026 for the low end of management's range | 145 - nine months 2026 (-77) | 222 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 97 |
| C40 | Operating cash flow needed in Q4 2026 for the high end of management's range | 195 - nine months 2026 (-77) | 272 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 97 |
| C41 | Principal due from 2026-10-01 to 2027-12-31 | 2026 Q4 20 + 2027 197 | 217 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 100–101 |
| C42 | Scheduled amortization of the joint venture financing | 4.50% x USD 450 million per quarter = 20.25; x 4 quarters | 81 a year | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 39 |
| C43 | Cash plus net ABL availability, 2026-09-30 | cash and cash equivalents 412 + net availability 225 | 637 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4, 42 |
| C44 | Operating cash flow excluding run-off of finance receivables, nine months 2026 | -77 - decrease in finance receivables 152 | -229 | T4.5 Cash flow statement |
| C45 | Operating cash flow excluding run-off of finance receivables, nine months 2025 | 16 - decrease in finance receivables 338 | -322 | T4.5 Cash flow statement |
| C46 | Net debt after the expected exchange, from 2026-09-30 | net debt 3,808 + effect on net debt (-54) | 3,754 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 56 |
| C47 | Gross margin, FY2024 | (revenue 6,221 - cost of sales 1,562 - cost of services 2,699) / revenue = 1,960 / 6,221 | 31.51% | T4.4 Income statement |
| C48 | Gross margin, FY2025 | (revenue 7,022 - cost of sales 2,367 - cost of services 2,754) / revenue = 1,901 / 7,022 | 27.07% | T4.4 Income statement |
| C49 | Gross margin, LTM to 2026-09-30 | LTM revenue 7,664 - LTM cost of sales 2,548 - LTM cost of services 2,755 = 2,361; / revenue | 30.81% | T4.4 Income statement; T4.8 Constructed period register |
| C50 | Adjusted operating income margin, FY2024 | adjusted operating income 302 / revenue 6,221 | 4.85% | T4.4 Income statement; T4.8 Constructed period register |
| C51 | Adjusted operating income margin, FY2025 | adjusted operating income 248 / revenue 7,022 | 3.53% | T4.4 Income statement; T4.8 Constructed period register |
| C52 | Adjusted operating income margin, LTM | adjusted operating income 501 / revenue 7,664 | 6.54% | T4.4 Income statement; T4.8 Constructed period register |
| C53 | Revenue growth, FY2025 on FY2024 | 7,022 / 6,221 - 1 | 12.88% | T4.4 Income statement |
| C54 | Q3 2026 net loss, parent less subsidiary | Holdings -1,015 less Xerox Corporation -1,012 | -3 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4, 6 |
| C55 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 177 + nine months 2026 (-421) - nine months 2025 31 | -275 | T4.8 Constructed period register |
| C56 | LTM house-adjusted EBITDA to 2026-09-30 | FY2025 582 + nine months 2026 658 - nine months 2025 386 | 854 | T4.8 Constructed period register |
| C57 | LTM adjusted operating income plus depreciation to 2026-09-30 | FY2025 496 + nine months 2026 604 - nine months 2025 320 | 780 | T4.8 Constructed period register |
| C58 | Net debt / house-adjusted EBITDA, 2026-09-30 | 3,808 / 854 | 4.46 | T4.9 Calculation register |
| C59 | Total debt / house-adjusted EBITDA, 2026-09-30 | 4,220 / 854 | 4.94 | T4.9 Calculation register |
| C60 | Net debt / house-adjusted EBITDA, FY2025 | 3,735 / 582 | 6.42 | T4.9 Calculation register |
| C61 | Total debt / house-adjusted EBITDA, FY2025 | 4,247 / 582 | 7.30 | T4.9 Calculation register |
| C62 | Net debt / house-adjusted EBITDA, FY2024 | 2,823 / 609 | 4.64 | T4.9 Calculation register |
| C63 | Core debt / (adjusted operating income + depreciation), 2026-09-30 and FY2025 | 2,924 / 780; 2,759 / 496 | 3.75; 5.56 | T4.9 Calculation register |
| C64 | Total debt / EBITDA (Reported) and EBITDA (Reported) / cash interest, FY2025 | 4,247 / 177; 177 / 272 | 23.99; 0.65 | T4.9 Calculation register |
| C65 | Change in net debt from 2025-12-31 to 2026-09-30 | 3,808 - 3,735 | 73 | T4.6 Balance sheet |
| C66 | Principal due 2028 to 2030 | 752 + 1,137 + 1,042 | 2,931 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 100–101 |
| C67 | Adjusted operating income, nine months 2026 against nine months 2025 | 399 - 146 | 253 | T4.4 Income statement |

## Gaps

Cash paid for interest is not printed in the three 2026 quarterly reports, so cover on cash interest cannot be built for the first quarter, the first half, the nine months or any twelve-month period to 2026, and only FY2024 (USD 214 million) and FY2025 (USD 272 million) are available. This restricts every coverage conclusion after FY2025. Severity: Medium. Action: obtain interim cash flow supplements or earnings releases that state interest paid.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 37–38; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227

The issuer states no EBITDA or adjusted EBITDA, so reported EBITDA is derived and includes the USD 959 million goodwill impairment and the USD 1,058 million impairment of FY2024. Total debt and net debt over EBITDA are not calculable for FY2024 and the twelve months to 2026-09-30, no EBITDA bridge can be drawn, and the house-adjusted measure used instead is an analyst judgement. Severity: Low, because both measures are shown and labelled. Action: obtain the issuer's own adjusted EBITDA definition.
Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 7; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 21, 24

No instrument-level debt table is printed after 2025-12-31, so the instrument register and the debt stack are drawn at that date and do not show the 2026 repurchases, the joint venture financing, the ABL borrowing or the exchange. Severity: Low. Action: obtain the current debt schedule.
Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40, 99

The debt exchange expected to close on 2026-11-13 is not confirmed by any supplied document, so debt after the balance sheet date is stated only as expected. Severity: Low. Action: obtain the later report of the closing and its final terms.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 56

ABL availability is stated at filing dates on a month-end calculation, not at balance-sheet dates, and is not stated for the FY2024 and FY2025 year ends, so undrawn facilities are not supplied for those two dates. Severity: Low. Action: obtain borrowing base certificates.
Basis: 10-Q_2026-03-31_xrx-20260331.htm.jsonl, page 34; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 37; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 42; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 225

The issuer does not split cash, operating cash flow, capital expenditure or free cash flow between its finance receivables business and the rest, and splits only debt into financing debt and core debt on an assumed 7 to 1 ratio of debt to equity, so industrial leverage is shown on debt and earnings only. Severity: Low. Action: obtain any segment cash flow disclosure.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 100; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 123

Cash flow statements are year to date, discrete cash flows for the second and third quarters of 2026 and the fourth quarter of 2025 are not printed and are not derived here, except the fourth quarter 2025 operating cash flow taken once as the full year less nine months for the comparison with management's range, dashes in the statements are carried as not supplied, and balance sheets at the 2025 interim dates are not supplied. Severity: Low. Action: none needed for the requested snapshot.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 3–6; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 5

## Next module

The orchestrator selects the next module.
