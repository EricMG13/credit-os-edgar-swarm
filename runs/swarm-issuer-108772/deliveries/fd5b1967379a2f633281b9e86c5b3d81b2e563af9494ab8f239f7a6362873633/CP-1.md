# CP-1 Financial foundation: Xerox Corp (issuer-108772)

## Request
Financial foundation for Xerox Corp (issuer-108772), as of 2026-11-18, for the credit snapshot pathway. Scope: the Xerox Corporation statements, debt, liquidity and derived ratios for FY2024, FY2025 and the period to September 30, 2026, built from the five supplied filings.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_xrx-20241231.htm.jsonl | Combined annual report on Form 10-K of Xerox Holdings Corporation and Xerox Corporation for the year ended December 31, 2024 | 2025-02-24 (signature date) | 7feadaeacdba2056351f3b6fa451718d0a975d778f8ada2b07315b3202b0d082 | Read for the 2024 debt table, the FY2024 interest paid and the original FY2024 captions compared with the reclassified ones. |
| 10-K_2025-12-31_xrx-20251231.htm.jsonl | Combined annual report on Form 10-K of Xerox Holdings Corporation and Xerox Corporation for the year ended December 31, 2025 | 2026-03-16 (signature date) | 9a3f813d924828f1b7d797af8da7a5ef15cd20354158f2cb606ad04ab04e3b1f | Read for the Xerox Corporation FY2024 and FY2025 statements, the debt note, interest paid, segment note and liquidity text. |
| 10-Q_2026-03-31_xrx-20260331.htm.jsonl | Combined quarterly report on Form 10-Q of Xerox Holdings Corporation and Xerox Corporation for the quarter ended March 31, 2026 | 2026-05-07 (signature date) | f7db690229ad2f37021ede5f6c82f0e77ea2811a1d390fe25917b83e63aea88f | Read for the Joint Venture financing and the presentation change; no figure is taken from it. |
| 10-Q_2026-06-30_xrx-20260630.htm.jsonl | Combined quarterly report on Form 10-Q of Xerox Holdings Corporation and Xerox Corporation for the quarter ended June 30, 2026 | 2026-08-06 (signature date) | 52663691e8f3ced2f8a35e6e1576f98f8f351b2b15809429d3f39554e0a1453c | Read for six-month depreciation and amortization used to derive the quarter. |
| 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Combined quarterly report on Form 10-Q of Xerox Holdings Corporation and Xerox Corporation for the quarter ended September 30, 2026 | 2026-11-05 (signature date) | 0bee43d9f1f3367610dc24e2dc5d0026067b8b84f672c416d585d1e27999a0b4 | Read for the Xerox Corporation statements at September 30, 2026, debt, maturities, liquidity and the subsequent events note. |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 1ba0d179ac7e86ccc4a4b1185eb8737c9fdd8709e7a24f6263b8cb45a4e7054b | Perimeter, document dates and the gaps in the source set. |

## Findings

### Bottom line

Xerox Corporation carries USD 4,220 million of debt at September 30, 2026, 6.80x last-twelve-months reported EBITDA of USD 621 million, so creditors depend on a thin and volatile earnings base. Net debt is USD 3,810 million, or 6.14x; if the debt exchange expected on or about November 13, 2026 closes, pro forma net debt is USD 3,756 million, or 6.05x, but closing is not confirmed. That EBITDA includes about USD 205 million of one-off gains from debt repurchases and tariff refunds; without them total leverage would be 10.14x.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 56; calculation C3; calculation C6; calculation C16; calculation C21; calculation C27; calculation C35

Cash interest cover was 0.38x in FY2025 against 1.12x in FY2024, and the goodwill impairment of USD 959 million recorded in the third quarter of 2026 is added back to EBITDA as a non-cash charge. Debt maturities step up from USD 197 million in 2027 to USD 752 million in 2028 and USD 1,137 million in 2029, against cash of USD 410 million and net revolver availability of USD 225 million.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 42; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227; calculation C22; calculation C23

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 14.16 | 11.77 | x | EBITDA (Reported) is derived because the issuer states none; fiscal year EBITDA; total debt includes related party debt owed to the parent |
| FY2025 / 2025-12-31 | 41.23 | 36.27 | x | EBITDA (Reported) is derived; fiscal year EBITDA depressed by purchase accounting and restructuring charges; total debt includes related party debt |
| 2026-09-30 | 6.80 | 6.14 | x | EBITDA is the last twelve months to 2026-09-30 (FY2025 plus nine months 2026 less nine months 2025); total debt includes the Joint Venture debt of 450 |

The ratios use derived reported EBITDA with the goodwill impairment added back, so they move with that choice and with the parent's debt carried inside the issuer's balance sheet.
Basis: calculation C19; calculation C20; calculation C21

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1.12 | x | EBITDA (Reported) over interest paid on short-term and long-term debt; the interest figure is the combined note figure |
| FY2025 / 2025-12-31 | 0.38 | x | EBITDA (Reported) over interest paid; the interest figure is the combined note figure |
| 2026-09-30 | Not supplied: the quarterly reports print no interest paid, so the last twelve months cannot be covered | x | Cash interest paid is stated only for fiscal years |

Cover is stated only for fiscal years because cash interest paid is printed only in the annual reports and only for the combined group.
Basis: calculation C22

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 575 | Not supplied: the 2024 report states no availability at the balance sheet date | US$m | Cash and cash equivalents excluding restricted cash; the ABL had no borrowings and letters of credit of 2 at 2024-12-31 against commitments of 425 |
| FY2025 / 2025-12-31 | 511 | Not supplied: the 2025 report states availability as of 2026-03-16 only | US$m | Cash and cash equivalents excluding restricted cash; net availability of about 289 is stated as of 2026-03-16 with no borrowings |
| 2026-09-30 | 410 | 225 | US$m | Cash and cash equivalents excluding restricted cash; undrawn is the issuer's net ABL availability dated 2026-11-05 on its September calculation, after letters of credit of about 66 and borrowings of 75; no borrowings were outstanding at 2026-09-30 |

Undrawn facilities are the issuer's borrowing-base availability at a date after the balance sheet, not commitments of 425, and group-level restricted cash of 118 is excluded from cash.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 42; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 95; 10-K_2024-12-31_xrx-20241231.htm.jsonl, page 114; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 116

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026-12-31 | 20 | US$m | Fourth quarter of 2026; principal at 2026-09-30 for Xerox Holdings Corporation, Xerox Corporation and its other subsidiaries combined; Period is the end date of the bucket |
| 2027-12-31 | 197 | US$m | 2027; principal at 2026-09-30 for Xerox Holdings Corporation, Xerox Corporation and its other subsidiaries combined; Period is the end date of the bucket |
| 2028-12-31 | 752 | US$m | 2028; principal at 2026-09-30 for Xerox Holdings Corporation, Xerox Corporation and its other subsidiaries combined; Period is the end date of the bucket |
| 2029-12-31 | 1,137 | US$m | 2029; principal at 2026-09-30 for Xerox Holdings Corporation, Xerox Corporation and its other subsidiaries combined; Period is the end date of the bucket |
| 2030-12-31 | 1,042 | US$m | 2030; principal at 2026-09-30 for Xerox Holdings Corporation, Xerox Corporation and its other subsidiaries combined; Period is the end date of the bucket |
| 2031-12-31 | 1,200 | US$m | 2031 and thereafter; principal at 2026-09-30 for Xerox Holdings Corporation, Xerox Corporation and its other subsidiaries combined; Period is the end date of the bucket |

The ladder is contractual principal by the earliest put date or maturity the filing uses and excludes the debt exchange expected to close on or about 2026-11-13.
Basis: calculation C23; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 100–101

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-30 | Basis |
| --- | --- | --- | --- | --- |
| Revenue (USD millions) | 6,221 | 7,022 | 7,664 | Reported; LTM is FY2025 plus nine months 2026 less nine months 2025; Lexmark is included from 2025-07-01 |
| EBITDA (Reported) (USD millions) | 240 | 103 | 621 | Calculated, not issuer-stated; goodwill impairment added back |
| EBITDA margin (percent) | 3.86 | 1.47 | 8.10 | Calculated |
| Net cash from operating activities (USD millions) | 511 | 224 | 131 | Reported; finance receivable sales are inside operating cash flow |
| Capital expenditure (USD millions) | 44 | 91 | 94 | Reported as cost of additions to land, buildings, equipment and software |
| Operating cash flow less capital expenditure (USD millions) | 467 | 133 | 37 | Calculated; before dividends and distributions to the parent |
| Total debt (USD millions) | 3,399 | 4,247 | 4,220 | Balance sheet carrying value at the period end, related party debt included |
| Net debt (USD millions) | 2,824 | 3,736 | 3,810 | Total debt less cash and cash equivalents |
| Total debt / EBITDA (x) | 14.16 | 41.23 | 6.80 | Calculated |
| Net debt / EBITDA (x) | 11.77 | 36.27 | 6.14 | Calculated |
| EBITDA / cash interest (x) | 1.12 | 0.38 | Not supplied: cash interest paid is printed for fiscal years only | Calculated; interest paid is the combined note figure |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 3,399 | 575 | 2,824 | US$m | Carrying value of the four debt lines including related party debt of 2,022, net of issuance costs of 30 and discounts of 22; principal of 3,451 is the combined debt table total; cash excludes restricted cash |
| FY2025 / 2025-12-31 | 4,247 | 511 | 3,736 | US$m | Carrying value including related party debt of 1,993, net of issuance costs of 59 and discounts of 38; principal of 4,344; cash excludes restricted cash |
| 2026-09-30 | 4,220 | 410 | 3,810 | US$m | Carrying value including related party debt of 1,676 and the Joint Venture term loans and Class A Units of 450, net of issuance costs of 95 and discounts of 33; principal of 4,348; cash excludes restricted cash; the tariff monetization financing liability of 81 is outside gross debt |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 4,348 | -128 | 4,220 | US$m | Principal is Xerox Holdings Corporation 1,698, Xerox Corporation 2,199 and Xerox Corporation's other subsidiaries 451; reconciling items are issuance costs of -95 and net unamortized discount of -33; Xerox Corporation's balance sheet carries the parent's notes as an intercompany loan of 1,676 so its debt lines equal the combined total |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Exchange of about 174 of Xerox Holdings Corporation 5.50% Senior Notes due 2028 for about 120 of new 10.25% First Lien Senior Secured Notes due 2030 of Xerox Corporation and about 3.9 million shares of Xerox Holdings Corporation common stock, announced and not yet closed | Not supplied: the source states October 2026 for the agreement and an expected closing on or about 2026-11-13 only | -54 | 3,756 | 6.05 | US$m | The filing says aggregate principal is expected to fall by up to about 54 on closing and about 120 of debt moves from 2028 to 2030; accrued interest on the exchanged notes is paid in cash and is not quantified, and no document after 2026-11-05 confirms closing, so the figures are expected, not final; net leverage uses the same last twelve months EBITDA as the 2026-09-30 row |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 6,221 | 240 | US$m | Annual period; EBITDA (Reported) derived from the statements, no adjusted EBITDA exists; FY2024 captions as reclassified |
| FY2025 / 2025-12-31 | 7,022 | 103 | US$m | Annual period; EBITDA (Reported) derived; includes Lexmark from 2025-07-01 |
| 2026-09-30 | 7,664 | 621 | US$m | Last twelve months, a twelve month period like the annual rows; EBITDA (Reported) derived; no issuer-adjusted or house-adjusted figure is mixed in |

The Adjusted EBITDA column holds reported EBITDA because the issuer states no adjusted EBITDA; its own adjusted measure is adjusted operating income, which is not EBITDA.
Basis: calculation C9; calculation C10; calculation C16

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Term Loan B due 2029 (Xerox Corporation borrower) | 1 | Yes | 705 | 1.14 | US$m | First lien senior secured term loan; guaranteed by Xerox Holdings Corporation and certain subsidiaries including Lexmark; principal derived as Xerox Corporation's registrant principal less its listed notes (calculation C26); cumulative leverage is cumulative principal over last twelve months EBITDA (Reported) of 621 |
| 10.25% First Lien Senior Secured Notes due 2030 (Xerox Corporation issuer) | 1 | Yes | 400 | 1.78 | US$m | First priority on fixed asset collateral and second on current asset collateral; guaranteed by Xerox Holdings Corporation and certain subsidiaries; cumulative leverage is cumulative principal over last twelve months EBITDA (Reported) of 621 |
| 13.50% Senior Secured Second Lien Notes due 2031 (Xerox Corporation issuer) | 2 | Yes | 494 | 2.57 | US$m | Second priority on fixed asset collateral and third on current asset collateral; principal after the 2026 repurchase of 6; cumulative leverage is cumulative principal over last twelve months EBITDA (Reported) of 621 |
| 4.80% Senior Notes due 2035 (Xerox Corporation issuer) | 3 | No | 250 | 2.98 | US$m | Within the unsecured debt the 2025 report splits from secured debt; senior unsecured as the filing's secured and unsecured totals imply; cumulative leverage is cumulative principal over last twelve months EBITDA (Reported) of 621 |
| 6.75% Senior Notes due 2039 (Xerox Corporation issuer) | 3 | No | 350 | 3.54 | US$m | Within the unsecured debt; as above; cumulative leverage is cumulative principal over last twelve months EBITDA (Reported) of 621 |
| 5.50% Senior Unsecured Notes due 2028 (Xerox Holdings Corporation issuer) | 3 | No | 556 | 4.44 | US$m | Guaranteed by Xerox Corporation; principal after the 2026 repurchase of 194; cumulative leverage is cumulative principal over last twelve months EBITDA (Reported) of 621 |
| 8.88% Senior Notes due 2029 (Xerox Holdings Corporation issuer) | 3 | No | 500 | 5.24 | US$m | Guaranteed by Xerox Corporation and Xerox Business Solutions, LLC; within the unsecured debt; cumulative leverage is cumulative principal over last twelve months EBITDA (Reported) of 621 |
| 13.00% Senior Notes due 2030 (Xerox Holdings Corporation issuer) | 3 | No | 250 | 5.64 | US$m | Guaranteed on an unsecured basis by Xerox Corporation; coupon steps up to 13.50% from 2026-07-01; cumulative leverage is cumulative principal over last twelve months EBITDA (Reported) of 621 |
| 3.75% Convertible Senior Notes due 2030 (Xerox Holdings Corporation issuer) | 3 | No | 392 | 6.28 | US$m | Principal after 8 extinguished on warrant exercise; within the unsecured debt; cumulative leverage is cumulative principal over last twelve months EBITDA (Reported) of 621 |

The stack omits the ABL (undrawn at 2026-09-30, lien rank not stated) and the Joint Venture term loans and Class A Units of 450 (ring-fenced, rank against the group not stated), and a residual of 1 in other subsidiaries, so it reaches 3,897 of principal, not 4,348.
Basis: calculation C29

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA | Not supplied: the issuer states no adjusted EBITDA, so no bridge exists | US$m | Opening step is EBITDA (Reported), which is derived here, not stated by the issuer |
| Adjusted EBITDA | Not supplied: the issuer states no adjusted EBITDA, so no bridge exists | US$m | Closing step; the issuer's adjusted measure is adjusted operating income, which is not EBITDA |

No bridge is drawn because no issuer-stated adjusted EBITDA exists to reconcile to.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 22 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 5 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 4 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 7 |

### Statement periods

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_xrx-20241231.htm.jsonl | Annual report, Form 10-K | FY2024 with 2023 and 2022 comparatives | USD | millions | Combined report; separate statements for each registrant | US GAAP | Tier 1 audited statements | Original FY2024 captions, 2024 debt table, FY2024 interest paid | Superseded for FY2024 amounts by the FY2025 report, which reclassifies captions |
| 10-K_2025-12-31_xrx-20251231.htm.jsonl | Annual report, Form 10-K | FY2025 with 2024 and 2023 comparatives | USD | millions | Combined report; separate statements for each registrant | US GAAP | Tier 1 audited statements | Xerox Corporation FY2024 and FY2025 statements, debt note, interest paid, segments | Interest paid and the debt table are combined-group figures |
| 10-Q_2026-03-31_xrx-20260331.htm.jsonl | Quarterly report, Form 10-Q | Q1 2026 against Q1 2025 | USD | millions | Combined report; separate statements for each registrant | US GAAP | Tier 2b unaudited, no auditor review stated | Context only; no figure is taken from it | Year-to-date amounts are superseded by the Q3 report |
| 10-Q_2026-06-30_xrx-20260630.htm.jsonl | Quarterly report, Form 10-Q | Q2 and six months 2026 against 2025 | USD | millions | Combined report; separate statements for each registrant | US GAAP | Tier 2b unaudited, no auditor review stated | Six-month depreciation and amortization | Cumulative amounts are superseded by the Q3 report |
| 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Quarterly report, Form 10-Q | Q3 and nine months 2026 against 2025; balance sheet at 2026-09-30 | USD | millions | Combined report; separate statements for each registrant | US GAAP | Tier 2b unaudited, no auditor review stated | Xerox Corporation statements at 2026-09-30, debt, maturities, liquidity, subsequent events | Prints no interest paid and no instrument-level debt table |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Xerox Corporation | Issuer and reporting entity of this module; borrower under the ABL and the Term Loan B; issuer of the first lien, second lien, 4.80% and 6.75% notes | December 31 | USD | millions | Consolidated, including IPCo Holdings as a variable interest entity from Q1 2026 | US GAAP | FY2023 to FY2025; Q1, Q2, Q3 and nine months 2026 |
| Xerox Holdings Corporation | Parent and co-registrant; issuer of the 5.50%, 8.88% and 13.00% senior notes and the 3.75% convertible notes, guaranteed by Xerox Corporation; guarantor of Xerox Corporation's secured debt | December 31 | USD | millions | Consolidated, includes Xerox Corporation, which reflects nearly all of its operations | US GAAP | FY2023 to FY2025; Q1, Q2, Q3 and nine months 2026 |
| XRX Brandco Holdings LLC (IPCo Holdings) | Borrower of the Joint Venture term loans; consolidated variable interest entity of Xerox Corporation with limited recourse | December 31 | USD | millions | Consolidated into Xerox Corporation from Q1 2026; assets 923 and liabilities 458 at 2026-09-30 | US GAAP | 2026-02-17 to 2026-09-30 |
| XRX Brandco LLC (IPCo) | Subsidiary of IPCo Holdings; guarantor of the term loans; holds the contributed intellectual property and receives the royalty | December 31 | USD | millions | Within IPCo Holdings | US GAAP | 2026-02-17 to 2026-09-30 |
| Lexmark | Acquired by Xerox Corporation on 2025-07-01; guarantor under the ABL, Term Loan B and first lien notes from October 2025 | December 31 | USD | millions | Consolidated from 2025-07-01 | US GAAP | 2025-07-01 to 2026-09-30 |

Subsequent events after the balance sheet date of 2026-09-30, each kept out of the period figures: an exchange support agreement of October 2026 for Xerox Holdings Corporation's 5.50% notes due 2028, expected to close on or about 2026-11-13; a Board decision in October 2026 to suspend common and preferred dividends effective January 2027, expected to conserve about 28 a year; Amendment No. 2 to the First Lien Term Loan Credit Agreement in a current report dated 2026-10-29; a letter of credit facility entered in October 2026; and ABL availability of 366 before letters of credit of about 66 and borrowings of 75 as of 2026-11-05.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 56; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 42; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 42–43; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 114

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Carve non-financing interest out of Other expenses, net for FY2024 | 10-K_2025-12-31_xrx-20251231.htm.jsonl | Reclassification to the 2026 presentation | Other expenses, net 155 | Non-financing interest expense 119; Other expenses (income), net 36 | The 2026 reports print the interest on its own line and reclassified nine months 2025; the combined 2025 note gives 119 | FY2024 |
| Carve non-financing interest out of Other expenses, net for FY2025 | 10-K_2025-12-31_xrx-20251231.htm.jsonl | Reclassification to the 2026 presentation | Other expenses, net 352 | Non-financing interest expense 248; Other expenses (income), net 104 | Analyst Judgement: the combined note figure is applied to Xerox Corporation because the 2026 reports print identical interest for both registrants | FY2025 |
| Use FY2025 report captions for FY2024 | 10-K_2025-12-31_xrx-20251231.htm.jsonl | Reclassification already made by the issuer | Services, maintenance and rentals 3,692 and Financing 151; Cost of services 2,593 and Cost of financing 106 | Services, maintenance, rentals and other 3,843; Cost of services, maintenance, rentals and other 2,699 | The FY2025 report reclassifies the FY2024 captions with no change in totals | FY2024 |
| Read a printed dash as nil | 10-K_2025-12-31_xrx-20251231.htm.jsonl and 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Interpretation | Dash | 0 | A dash on the face of a statement line with figures in other columns is the filings' own sign for nil; logged as an interpretation | Goodwill impairment, divestitures, inventory-related and Lexmark settlement lines, tariff financing liability, corporate segment revenue |
| Derive third quarter depreciation and amortization | 10-Q_2026-09-30_xrx-20260930.htm.jsonl and 10-Q_2026-06-30_xrx-20260630.htm.jsonl | Derived period | Nine months 296 and 224; six months 201 and 117 | Q3 2026 95; Q3 2025 107 | No discrete quarter cash flow is printed; nine months less six months, labelled calculated | Q3 2025 and Q3 2026 |
| Add back goodwill impairment in EBITDA | 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Definition choice | Goodwill impairment 959 in Q3 2026 and 1,058 in FY2024 as a cost | Added back with depreciation and amortization | A non-cash write-down treated like amortization; the alternative is shown in the definition conflict register | FY2024, 9M 2026, Q3 2026, LTM |
| Take cash and cash equivalents, not restricted cash, as cash | 10-Q_2026-09-30_xrx-20260930.htm.jsonl | Definition choice | Cash, cash equivalents and restricted cash 528 | Cash and cash equivalents 410 | Restricted cash is held for the Joint Venture reserve, the tariff monetization and other purposes and is not freely available | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Print and Other external revenue | 5,864 | 6,272 | 4,399 | 5,113 | 1,739 | 1,688 | USD millions | Reported in the segment note; the segment includes Xerox Financial Services and Lexmark from 2025-07-01 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 21 |
| IT Solutions external revenue | 357 | 750 | 595 | 523 | 222 | 180 | USD millions | Reported in the segment note | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 21 |
| Corporate and eliminations external revenue | 0 | 0 | 0 | 0 | 0 | 0 | USD millions | Printed as a dash in the Corporate column and read as nil; intersegment revenue is eliminated and is not external revenue | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 21 |
| Sales | 2,378 | 3,283 | 2,215 | 2,870 | 993 | 954 | USD millions | Reported; FY2024 as reclassified in the FY2025 report | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Services, maintenance, rentals and other | 3,843 | 3,739 | 2,779 | 2,766 | 968 | 914 | USD millions | Reported; FY2024 includes financing revenue of 151 that the FY2024 report showed on its own line (reclassified in the FY2025 report) | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Total Revenues | 6,221 | 7,022 | 4,994 | 5,636 | 1,961 | 1,868 | USD millions | Reported; equals the two segments' external revenue | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Cost of sales | 1,562 | 2,367 | 1,650 | 1,831 | 788 | 652 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Cost of services, maintenance, rentals and other | 2,699 | 2,754 | 2,022 | 2,023 | 728 | 671 | USD millions | Reported; includes equipment financing interest and, for FY2024, cost of financing of 106 reclassified from its own line | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Research, development and engineering expenses | 191 | 230 | 159 | 187 | 74 | 56 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Selling, administrative and general expenses | 1,535 | 1,650 | 1,221 | 1,235 | 476 | 375 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Goodwill impairment | 1,058 | 0 | 0 | 959 | 0 | 959 | USD millions | Reported; a dash in the filing is read as nil for the periods without a charge | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Restructuring and related costs, net | 112 | 66 | 68 | 82 | 59 | 14 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Amortization of intangible assets | 73 | 83 | 50 | 91 | 30 | 31 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Divestitures | 47 | -4 | -4 | 0 | 0 | 0 | USD millions | Reported; a dash is read as nil | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Non-financing interest expense | 119 | 248 | 168 | 277 | 80 | 93 | USD millions | 2026 columns reported; FY2024 and FY2025 are the combined note figures applied to Xerox Corporation (Analyst Judgement, calculation C8) and carved out of Other expenses, net | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 227–229; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Other expenses (income), net | 36 | 104 | 80 | -7 | 24 | 20 | USD millions | 2026 columns as printed after the reclassification; FY2024 and FY2025 are printed Other expenses, net less the interest line above (Normalized, calculation C8) | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Total Costs and Expenses | 7,432 | 7,498 | 5,414 | 6,678 | 2,259 | 2,871 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| (Loss) before Income Taxes | -1,211 | -476 | -420 | -1,042 | -298 | -1,003 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Income tax expense (benefit) | 105 | 541 | 529 | 59 | 460 | 9 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Net (Loss) | -1,316 | -1,017 | -949 | -1,101 | -758 | -1,012 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| Depreciation and amortization | 274 | 331 | 224 | 296 | 107 | 95 | USD millions | Reported in the cash flow statement for FY2024, FY2025 and the nine-month columns; the quarter columns are nine months less six months (Calculated, calculation C7) | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 7 |
| EBITDA (Reported) | 240 | 103 | -28 | 490 | -111 | 144 | USD millions | Calculated, not issuer-stated: (Loss) before Income Taxes plus Non-financing interest expense plus Depreciation and amortization plus Goodwill impairment (calculations C9 to C14); equipment financing interest stays in cost of services | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 154–155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net (Loss) Income | -1,316 | -1,017 | -949 | -1,101 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Depreciation and amortization | 274 | 331 | 224 | 296 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Provisions | 110 | 85 | 67 | 49 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Net (gain) loss on early extinguishment of debt | Not supplied: not printed as a separate line in the annual statement | Not supplied: not printed as a separate line in the annual statement | 4 | -100 | USD millions | Reported in the interim statements only | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Inventory-related purchase accounting adjustment - noncash | 0 | 102 | 102 | 0 | USD millions | Reported; a dash is read as nil | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Effective settlement of a pre-existing relationship between Lexmark and Xerox | 0 | -43 | -43 | 0 | USD millions | Reported; a dash is read as nil | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Deferred tax benefit | 90 | 502 | Not supplied: not printed as a separate line in the interim statement | Not supplied: not printed as a separate line in the interim statement | USD millions | Reported in the annual statements only | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Net (gain) loss on sales of businesses and assets | -8 | -5 | -6 | 1 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Divestitures | 47 | -4 | -4 | 0 | USD millions | Reported; a dash is read as nil | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Stock-based compensation | 52 | 45 | 33 | 29 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Goodwill impairment | 1,058 | 0 | 0 | 959 | USD millions | Reported; a dash is read as nil | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Restructuring and asset impairment charges | 87 | 67 | 69 | 78 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Payments for restructurings | -78 | -69 | -41 | -60 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Non-service retirement-related costs | 80 | 78 | 57 | 63 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Contributions to retirement plans | -145 | -161 | -123 | -118 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| (Increase) decrease in accounts receivable and billed portion of finance receivables | 71 | -36 | -41 | -52 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| (Increase) decrease in inventories | -122 | -12 | -123 | -97 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Increase in equipment on operating leases | -107 | -126 | -88 | -92 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Decrease in finance receivables | 663 | 489 | 338 | 152 | USD millions | Reported; finance receivable sales proceeds are inside operating cash flow | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| (Increase) decrease in other current and long-term assets | -19 | -3 | -3 | -84 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Increase (decrease) in accounts payable | -48 | 24 | 4 | 0 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Decrease (increase) in accrued compensation | -78 | -53 | -39 | -10 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Increase (decrease) in other current and long-term liabilities | -47 | 33 | 58 | -1 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Net change in income tax assets and liabilities | -50 | -26 | 479 | 5 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Net change in derivative assets and liabilities | 10 | -12 | Not supplied: not printed as a separate line in the interim statement | Not supplied: not printed as a separate line in the interim statement | USD millions | Reported in the annual statements only | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Other operating, net | -13 | 35 | 41 | 6 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Operating Activities | 511 | 224 | 16 | -77 | USD millions | Reported; fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Cost of additions to land, buildings, equipment and software | -44 | -91 | -67 | -70 | USD millions | Reported; total capital expenditure, no maintenance or growth split is printed | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Proceeds from sales of businesses and assets | 35 | 79 | 56 | 10 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Acquisitions, net of cash acquired | -161 | -674 | -674 | 19 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Other investing, net | -9 | 1 | Not supplied: not printed as a separate line in the interim statement | Not supplied: not printed as a separate line in the interim statement | USD millions | Reported in the annual statements only | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Investing Activities | -179 | -685 | -685 | -41 | USD millions | Reported; fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Net proceeds (payments) on short-term debt | 0 | 119 | 218 | -125 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Proceeds from issuance of long-term debt | 907 | 1,140 | 1,137 | 446 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Payments on long-term debt | -992 | -755 | -685 | -253 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Proceeds from tariff monetization financing | Not supplied: not printed as a separate line in the annual statement | Not supplied: not printed as a separate line in the annual statement | 0 | 80 | USD millions | Reported in the interim statements only | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Repayments of tariff monetization financing | Not supplied: not printed as a separate line in the annual statement | Not supplied: not printed as a separate line in the annual statement | 0 | -14 | USD millions | Reported in the interim statements only | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Distributions to parent | -202 | -79 | -69 | -45 | USD millions | Reported; cash paid to Xerox Holdings Corporation | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Other financing, net | -4 | -34 | -33 | -5 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Financing Activities | -291 | 391 | 568 | 84 | USD millions | Reported; fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| FX Effect on Cash | -28 | 4 | 5 | -2 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Net Cash Change | 13 | -66 | -96 | -36 | USD millions | Reported; operating plus investing plus financing plus the exchange rate effect; fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Opening Cash | 617 | 630 | 630 | 564 | USD millions | Reported; includes restricted cash; fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Closing Cash | 630 | 564 | 534 | 528 | USD millions | Reported; includes restricted cash, so it is not the balance sheet cash line; fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8 |
| Cash Interest Paid | 214 | 272 | Not supplied: the quarterly reports print no interest paid | Not supplied: the quarterly reports print no interest paid | USD millions | FY columns are the combined note figure for interest paid on short-term and long-term debt, applied to Xerox Corporation (Analyst Judgement); fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227; 10-K_2024-12-31_xrx-20241231.htm.jsonl, page 216 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 575 | 511 | 410 | USD millions | Reported; excludes restricted cash | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Accounts receivable, net | 796 | 1,122 | 1,153 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Billed portion of finance receivables, net | 48 | 46 | 36 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Finance receivables, net | 608 | 510 | 438 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Inventories | 695 | 1,016 | 1,063 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Other current assets | 212 | 362 | 536 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Total current assets | 2,934 | 3,567 | 3,636 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Finance receivables due after one year, net | 1,089 | 846 | 735 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Equipment on operating leases, net | 245 | 299 | 272 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Land, buildings and equipment, net | 251 | 390 | 365 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Intangible assets, net | 236 | 921 | 827 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Goodwill, net | 1,937 | 2,222 | 1,273 | USD millions | Reported; the 2026-09-30 figure is after the goodwill impairment of the third quarter | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Deferred tax assets | 615 | 98 | 83 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Other long-term assets | 1,017 | 1,438 | 1,397 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Total Assets | 8,324 | 9,781 | 8,588 | USD millions | Reported; fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Short-term debt and current portion of long-term debt | 197 | 110 | 139 | USD millions | Reported; carrying value | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Short-term related party debt | 388 | 121 | 18 | USD millions | Reported; owed to Xerox Holdings Corporation under the intercompany loan | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Financing liability - tariff receivables monetization | Not supplied: not a line in the 2024 balance sheet | 0 | 81 | USD millions | Reported; a dash at 2025-12-31 is read as nil; kept outside Total Debt and logged as a definition conflict | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Accounts payable | 1,023 | 1,498 | 1,484 | USD millions | Reported; includes a supplier finance programme balance (FY2025 report, page 216) | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Accrued compensation and benefits costs | 227 | 235 | 217 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Accrued expenses and other current liabilities | 741 | 1,245 | 1,252 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Total current liabilities | 2,576 | 3,209 | 3,191 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Long-term debt | 1,180 | 2,144 | 2,405 | USD millions | Reported; carrying value | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Long-term related party debt | 1,634 | 1,872 | 1,658 | USD millions | Reported; owed to Xerox Holdings Corporation under the intercompany loan | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Pension and other benefit liabilities | 1,088 | 1,068 | 989 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Post-retirement medical benefits | 154 | 159 | 146 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Other long-term liabilities | 386 | 685 | 675 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Total Liabilities | 7,018 | 9,137 | 9,064 | USD millions | Reported; fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Additional paid-in capital | 3,487 | 3,492 | 3,513 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Retained earnings | 1,504 | 448 | -674 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Accumulated other comprehensive loss | -3,699 | -3,311 | -3,331 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Xerox shareholder's equity | 1,292 | 629 | -492 | USD millions | Reported | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Noncontrolling interests | 4 | 5 | 6 | USD millions | Reported; within equity | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Total Equity | 1,296 | 634 | -486 | USD millions | Reported; fixed row; negative at 2026-09-30 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Temporary Equity | 10 | 10 | 10 | USD millions | Reported as the line headed Noncontrolling Interests between liabilities and equity; optional fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Total Debt | 3,399 | 4,247 | 4,220 | USD millions | Calculated: the four debt lines above at carrying value, related party debt included (calculations C1 to C3); excludes the tariff monetization financing liability; fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| Cash & Equivalents | 575 | 511 | 410 | USD millions | Reported cash and cash equivalents, restricted cash excluded; fixed row | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Term Loan B (Xerox Corporation borrower) | First lien term loan | Not supplied: instrument carrying values are not printed | 705 | 705 | Not applicable | First lien senior secured; guaranteed by Xerox Holdings Corporation and subsidiaries incl. Lexmark | First lien | USD | 705 | Not applicable | Term SOFR plus 4.00%, floor 0.50% (2025 report) | floating | Term SOFR | 400 | 50 | November 2029 | Not supplied: the amended schedule is not supplied; the 2025 report states 10% a year from 2027 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–223; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101 |
| 10.25% First Lien Senior Secured Notes (Xerox Corporation issuer) | Senior secured notes | Not supplied: instrument carrying values are not printed | 400 | 400 | Not applicable | First priority fixed asset collateral, second priority current asset collateral; guaranteed by Xerox Holdings Corporation and subsidiaries | First lien | USD | 400 | Not applicable | 10.25% | fixed | Not applicable | Not applicable | Not applicable | 2030-10-15 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–223; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101 |
| 13.50% Senior Secured Second Lien Notes (Xerox Corporation issuer) | Senior secured notes | Not supplied: instrument carrying values are not printed | 494 | 494 | Not applicable | Second priority fixed asset collateral, third priority current asset collateral | Second lien | USD | 494 | Not applicable | 13.50% | fixed | Not applicable | Not applicable | Not applicable | 2031 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–223; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101 |
| 4.80% Senior Notes (Xerox Corporation issuer) | Senior notes | Not supplied: instrument carrying values are not printed | 250 | 250 | Not applicable | Unsecured as the secured and unsecured totals imply; guarantors not stated in the pages read | Senior unsecured | USD | 250 | Not applicable | 4.80% | fixed | Not applicable | Not applicable | Not applicable | 2035 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–223; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101 |
| 6.75% Senior Notes (Xerox Corporation issuer) | Senior notes | Not supplied: instrument carrying values are not printed | 350 | 350 | Not applicable | Unsecured as the secured and unsecured totals imply; guarantors not stated in the pages read | Senior unsecured | USD | 350 | Not applicable | 6.75% | fixed | Not applicable | Not applicable | Not applicable | 2039 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–223; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101 |
| 5.50% Senior Unsecured Notes (Xerox Holdings Corporation issuer) | Senior unsecured notes | Not supplied: instrument carrying values are not printed | 556 | 556 | Not applicable | Unsecured; guaranteed by Xerox Corporation | Senior unsecured | USD | 556 | Not applicable | 5.50% | fixed | Not applicable | Not applicable | Not applicable | August 2028 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–223; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101 |
| 8.88% Senior Notes (Xerox Holdings Corporation issuer) | Senior notes | Not supplied: instrument carrying values are not printed | 500 | 500 | Not applicable | Unsecured; guaranteed by Xerox Corporation and Xerox Business Solutions, LLC | Senior unsecured | USD | 500 | Not applicable | 8.875% | fixed | Not applicable | Not applicable | Not applicable | 2029 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–223; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101 |
| 13.00% Senior Notes (Xerox Holdings Corporation issuer) | Senior notes | Not supplied: instrument carrying values are not printed | 250 | 250 | Not applicable | Unsecured guarantee by Xerox Corporation and subsidiaries | Senior unsecured | USD | 250 | Not applicable | 13.50% from 2026-07-01, stepping up to 16.75% | fixed | Not applicable | Not applicable | Not applicable | 2030-07-31 | 0 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–223; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101 |
| 3.75% Convertible Senior Notes (Xerox Holdings Corporation issuer) | Convertible notes | Not supplied: instrument carrying values are not printed | 392 | 392 | Not applicable | Unsecured; guaranteed by Xerox Corporation and Xerox Business Solutions, LLC | Senior unsecured | USD | 392 | Not applicable | 3.75% | fixed | Not applicable | Not applicable | Not applicable | March 2030 | Not supplied: the ladder spreads this principal across 2027 to 2030 but the schedule is not stated | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–223; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101 |
| Joint Venture senior secured term loans (IPCo Holdings borrower) | Senior secured term loans | Not supplied: instrument carrying values are not printed | 405 | 405 | Not applicable | Secured by substantially all assets of IPCo Holdings and IPCo; limited recourse to Xerox Corporation | Not stated against the group | USD | 405 | Not applicable | Term SOFR plus 8.125%, floor 3.000% | floating | Term SOFR | 812.5 | 300 | Five years from 2026-02-17 | 4.50% of the closing amount each quarter from the quarter after 2026-09-30 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 10–11; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 39 |
| Joint Venture Class A Units (IPCo Holdings) | Redeemable units classified as debt | Not supplied: instrument carrying values are not printed | 45 | 45 | Not applicable | Units of IPCo Holdings classified as indebtedness; mandatory cumulative redemption in five years | Not stated against the group | USD | 45 | Not applicable | Term SOFR plus 11.875%, floor 3.000% | floating | Term SOFR | 1187.5 | 300 | Five years from 2026-02-17 | 4.50% of the closing amount each quarter from the quarter after 2026-09-30 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 10–11; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 39 |
| Other Xerox Corporation subsidiaries (residual) | Other debt | Not supplied: instrument carrying values are not printed | 1 | 1 | Not applicable | Not stated | Not stated | USD | 1 | Not applicable | Not stated | Not stated | Not stated | Not stated | Not stated | Not stated | Not stated | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 99 |
| ABL Facility (Xerox Corporation borrower) | Asset-based revolving credit | Not supplied: instrument carrying values are not printed | 0 | 0 | 425 | Secured; lien rank against the other secured debt not stated; guaranteed by Xerox Holdings Corporation and subsidiaries | Not stated | USD | 0 | Not applicable | Not stated | floating | Not stated | Not stated | Not stated | 2028-05-22 or 91 days before the earliest Material Springer Debt maturity | 0 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 42; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 223 |
| Financing cost adjustment | Aggregate issuance costs and net discount | -128 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -128 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 99 |

Principal at 2026-09-30 is the 2025-12-31 instrument table rolled forward for the 2026 repurchases of 194 and 6 and the warrant exercise of 8, the repaid secured promissory note and 13.00% notes due 2026, and the Joint Venture financing; the Term Loan B figure is the residual of Xerox Corporation's registrant principal of 2,199 and is derived. The principal amounts plus the financing cost adjustment equal total debt of 4,220.
Basis: calculation C25; calculation C26; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 99

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM to 2026-09-30 | USD 7,022m | USD 5,636m | USD 4,994m | USD 7,664m | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 | Lexmark is in 2026 and in 2025 only from 2025-07-01, so the stubs are not like for like; no pro forma is built |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 103m | USD 490m | USD -28m | USD 621m | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 154–155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 | Derived EBITDA; the FY2025 interest line uses the combined note figure; nine months 2025 EBITDA is negative |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 224m | USD -77m | USD 16m | USD 131m | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7 | Finance receivable sales proceeds fell in 2026 and are inside operating cash flow |
| Cost of additions to land, buildings, equipment and software | LTM to 2026-09-30 | USD 91m | USD 70m | USD 67m | USD 94m | Calculated | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7 | Total capital expenditure; no maintenance or growth split is printed |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 3,399 | Net debt data Gross debt, FY2024 / 2024-12-31 | 240 | T4.4 EBITDA (Reported) | FY2024 / 2024-12-31 | USD | US$m | 14.16 | Calculated | Tier 1 | EBITDA derived, not issuer-stated |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,824 | Net debt data Net debt, FY2024 / 2024-12-31 | 240 | T4.4 EBITDA (Reported) | FY2024 / 2024-12-31 | USD | US$m | 11.77 | Calculated | Tier 1 | EBITDA derived, not issuer-stated |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 240 | T4.4 EBITDA (Reported) | 214 | T4.5 Cash Interest Paid | FY2024 / 2024-12-31 | USD | US$m | 1.12 | Calculated | Tier 1 | Interest paid is the combined note figure; EBITDA derived |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 4,247 | Net debt data Gross debt, FY2025 / 2025-12-31 | 103 | T4.4 EBITDA (Reported) | FY2025 / 2025-12-31 | USD | US$m | 41.23 | Calculated | Tier 1 | EBITDA derived, not issuer-stated |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,736 | Net debt data Net debt, FY2025 / 2025-12-31 | 103 | T4.4 EBITDA (Reported) | FY2025 / 2025-12-31 | USD | US$m | 36.27 | Calculated | Tier 1 | EBITDA derived, not issuer-stated |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 103 | T4.4 EBITDA (Reported) | 272 | T4.5 Cash Interest Paid | FY2025 / 2025-12-31 | USD | US$m | 0.38 | Calculated | Tier 1 | Interest paid is the combined note figure; EBITDA derived |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 4,220 | Net debt data Gross debt, 2026-09-30 | 621 | T4.8 EBITDA (Reported) LTM | 2026-09-30 | USD | US$m | 6.80 | Calculated | Tier 1 and Tier 2b | EBITDA derived, not issuer-stated; last twelve months |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,810 | Net debt data Net debt, 2026-09-30 | 621 | T4.8 EBITDA (Reported) LTM | 2026-09-30 | USD | US$m | 6.14 | Calculated | Tier 1 and Tier 2b | EBITDA derived, not issuer-stated; last twelve months |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 621 | T4.8 EBITDA (Reported) LTM | Not supplied: the quarterly reports print no interest paid | T4.5 Cash Interest Paid | 2026-09-30 | USD | US$m | Not calculable: no cash interest paid for the last twelve months | Not Calculable | Tier 1 and Tier 2b | Cash interest paid is printed for fiscal years only |
| EBITDA margin (reported) | EBITDA (Reported) / Total Revenues x 100 | 240 | T4.4 EBITDA (Reported) | 6,221 | T4.4 Total Revenues | FY2024 | USD | US$m | 3.86 | Calculated | Tier 1 | Percent; derived EBITDA |
| EBITDA margin (reported) | EBITDA (Reported) / Total Revenues x 100 | 103 | T4.4 EBITDA (Reported) | 7,022 | T4.4 Total Revenues | FY2025 | USD | US$m | 1.47 | Calculated | Tier 1 | Percent; derived EBITDA |
| EBITDA margin (reported) | EBITDA (Reported) / Total Revenues x 100 | 621 | T4.8 EBITDA (Reported) LTM | 7,664 | T4.8 Revenue LTM | LTM to 2026-09-30 | USD | US$m | 8.10 | Calculated | Tier 1 and Tier 2b | Percent; derived EBITDA |
| Core debt / EBITDA | Core debt / EBITDA (Reported) | 1,658 | 10-K_2024-12-31_xrx-20241231.htm.jsonl, page 121 | 240 | T4.4 EBITDA (Reported) | FY2024 | USD | US$m | 6.91 | Proxy | Tier 1 | Core debt is the issuer's allocation of total debt after an assumed 7:1 leverage on finance assets; a management definition |
| Core debt / EBITDA | Core debt / EBITDA (Reported) | 2,759 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 115 | 103 | T4.4 EBITDA (Reported) | FY2025 | USD | US$m | 26.79 | Proxy | Tier 1 | Core debt is the issuer's allocation; FY2025 EBITDA is depressed |
| Core debt / EBITDA | Core debt / EBITDA (Reported) | 2,924 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 100 | 621 | T4.8 EBITDA (Reported) LTM | LTM to 2026-09-30 | USD | US$m | 4.71 | Proxy | Tier 2b | Core debt is the issuer's allocation of total debt after an assumed 7:1 leverage on finance assets of 1,481; a management definition, not an audited figure |
| Revenue growth | Total Revenues FY2025 / Total Revenues FY2024 - 1 | 7,022 | T4.4 Total Revenues FY2025 | 6,221 | T4.4 Total Revenues FY2024 | FY2025 | USD | US$m | 12.88 | Calculated | Tier 1 | Percent; FY2025 includes Lexmark from 2025-07-01 |
| Capital expenditure / revenue | Capital expenditure / Total Revenues x 100 | 94 | T4.8 Capital expenditure LTM | 7,664 | T4.8 Revenue LTM | LTM to 2026-09-30 | USD | US$m | 1.23 | Calculated | Tier 1 and Tier 2b | Percent; total capital expenditure only |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | LTM to 2026-09-30 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- |
| Growth | Total revenues (USD millions) | 6,221 | 7,022 | 7,664 | Up, driven by the Lexmark acquisition | FY2025 growth reflects six months of Lexmark; Print and Other revenue rose from 5,864 to 6,272 and IT Solutions from 357 to 750 |
| Profitability | EBITDA (Reported) (USD millions) | 240 | 103 | 621 | Down in FY2025, recovering in the last twelve months | The LTM figure benefits from adding back the goodwill impairment of 959 and from a weak comparative of -28 for nine months 2025 |
| Cash flow | Net cash from operating activities (USD millions) | 511 | 224 | 131 | Down | A smaller decrease in finance receivables and higher interest cost; the issuer now expects 2026 operating cash flow of about 145 to 195 |
| Cash flow | Capital expenditure (USD millions) | 44 | 91 | 94 | Up then flat | Total capital expenditure |
| Cash flow | Operating cash flow less capital expenditure (USD millions) | 467 | 133 | 37 | Down | Before dividends and distributions to the parent |
| Liquidity | Cash and cash equivalents (USD millions) | 575 | 511 | 410 | Down | Excludes restricted cash |
| Debt | Core debt, non-financing business (USD millions) | 1,658 | 2,759 | 2,924 | Up | Issuer allocation using an assumed 7:1 leverage on finance assets; financing debt fell from 1,741 to 1,488 to 1,296; 2024 report page 121, 2025 report page 115, Q3 report page 100 |
| Debt | Finance assets, net (USD millions) | 1,990 | 1,701 | 1,481 | Down | Finance receivables plus equipment on operating leases; shrinking as finance receivables are sold; 2024 report page 121, Q3 report page 100 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA, unadjusted, as the primary denominator | The issuer states no EBITDA; it reports adjusted operating income and a target of total debt to EBITDA below 3.0x | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 7; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 106 | FY2024, FY2025, 9M 2026, LTM | High: treating the goodwill impairment of 959 as a cost gives a last twelve months EBITDA of -338 instead of 621 and no meaningful leverage | Financial foundation; Fundamental credit; Earnings quality | EBITDA is derived as pre-tax result plus non-financing interest, depreciation and amortization and goodwill impairment; the alternative is shown here, not used in the ratios |
| One-off gains in EBITDA | Reported EBITDA unadjusted, with one-offs shown separately | Nine months 2026 includes a net gain on early extinguishment of debt of 100 and, in the second quarter, a 105 reduction of cost of sales for recoverable tariff refunds; neither is removed from EBITDA (Reported) | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 40 | 9M 2026, LTM | High: without the two items last twelve months EBITDA is 416 and total leverage 10.14x | Financial foundation; Fundamental credit; Earnings quality | Left in EBITDA (Reported) as the method requires; the sensitivity is shown here and in the analysis |
| Total debt perimeter | Balance sheet carrying value of the issuer's own debt lines | Xerox Corporation's debt lines include related party debt owed to Xerox Holdings Corporation of 1,676, so they equal the combined total of 4,220 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 4–7; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 43; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 124 | All periods | High: the issuer's debt includes the parent's notes it guarantees; leaving them out would give 2,544 | Financial foundation; Fundamental credit; Structural priority | Total debt includes related party debt because the parent's notes are guaranteed by Xerox Corporation and the proceeds were contributed in full to it; the split is shown in Net debt data |
| Carrying value against principal | Carrying value is the debt figure; principal is kept separately | Principal 4,348 against carrying value 4,220 at 2026-09-30 (issuance costs 95, discount 33); 4,344 against 4,247 at 2025-12-31; 3,451 against 3,399 at 2024-12-31 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 99; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 217; 10-K_2024-12-31_xrx-20241231.htm.jsonl, page 205 | FY2024, FY2025, 2026-09-30 | Medium: carrying value is below principal by 128 at 2026-09-30 | Financial foundation; Refinancing & LME | Ratios use carrying value; the maturity ladder and debt stack use principal |
| Financing debt | Matched-funding debt is not industrial leverage | The issuer allocates 1,296 of total debt to finance assets at 2026-09-30 (2025-12-31: 1,488) on an assumed 7:1 ratio and calls the remaining 2,924 core debt; equipment financing interest sits in cost of services | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 100–101; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 115–116 | FY2024, FY2025, 2026-09-30 | High: core debt over last twelve months EBITDA is 4.71x against 6.80x on total debt | Financial foundation; Fundamental credit | Total debt is the primary denominator; core debt is a labelled proxy row in the register |
| Joint Venture debt | Every balance sheet debt line is Total Debt | The term loans of 405 and Class A Units of 45 sit in a consolidated variable interest entity with limited recourse and a restricted cash reserve; Class A Units are redeemable units classified as debt | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 9–11; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 39 | 2026-09-30 | Medium: 450 of 4,220 is ring-fenced from the general credit of Xerox Corporation | Financial foundation; Structural priority; Recovery & fulcrum | Included in Total Debt as the issuer classifies it, and identified in the notes of Net debt data |
| Tariff receivable monetization | Obligations carried on their own line are not Total Debt | A financing liability of 81 for sold tariff refund rights, with restricted cash of 17, sits outside the debt lines but is a financing transaction | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 40–41 | 2026-09-30 | Low: 81 against 4,220 | Financial foundation; Liquidity | Kept outside Total Debt and Net debt data; flagged here as debt-like |
| Cash | Cash and cash equivalents less restricted cash | Cash, cash equivalents and restricted cash is 528 for Xerox Corporation and 530 for the group against cash and cash equivalents of 410 and 412 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–8; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 95 | 2026-09-30 | Medium: 118 of the group's balance is restricted | Financial foundation; Liquidity | Cash is cash and cash equivalents only |
| Non-financing interest | Interest expense on its own line | The 2026 reports print it on its own line; the 2025 report carries it inside Other expenses, net, with the combined note giving 248 and 119 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 14; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 227–229 | FY2024, FY2025 | Medium: the carve-out uses the combined figure for Xerox Corporation | Financial foundation; Earnings changes | Applied to FY2024 and FY2025 and logged in the normalization register |
| Interest paid | Cash interest paid by the issuer | Printed only for fiscal years and for the combined group (272 for 2025, 214 for 2024); Xerox Corporation's own intercompany interest expense is 136 for 2025 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 227–229 | FY2024, FY2025 | Medium: interim cover cannot be calculated | Financial foundation; Liquidity | The combined figure is used for the fiscal years; interim cover is not calculable |
| Comparability of periods | Like-for-like periods | Lexmark joined on 2025-07-01, so nine months 2025 and 2026 differ in scope; management's pro forma basis is not used | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 26–27; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 111 | 9M 2025, 9M 2026, Q3 2025, LTM | Medium: the LTM mixes a full year with Lexmark and a stub without it | Financial foundation; Earnings changes | No pro forma is built; every comparison is labelled |

### Leverage and coverage reading

Leverage on the issuer's own statements is high and unstable: total debt of USD 4,220 million is 6.80x derived EBITDA for the last twelve months, against 41.23x in FY2025 and 14.16x in FY2024, because EBITDA fell to USD 103 million in FY2025 after Lexmark purchase accounting and restructuring charges and recovered to USD 621 million as those charges eased, helped by about USD 205 million of one-off gains in 2026 from debt repurchases and tariff refunds. The mechanism is that debt rose with the Lexmark acquisition while the earnings base stayed thin, so a small shortfall in EBITDA moves the ratio by several turns; the exchange expected in November 2026 would cut principal by up to about USD 54 million, which changes the ratio by less than 0.1x. Cash interest cover was 0.38x in FY2025 and 1.12x in FY2024, so earnings did not cover cash interest in 2025, and cover for the last twelve months cannot be calculated because interim cash interest is not printed.
Basis: calculation C19; calculation C20; calculation C21; calculation C22; calculation C27

The strongest evidence against a bearish reading is that last-twelve-months EBITDA of USD 621 million is well above FY2024's USD 240 million, that cost actions and integration synergies lifted adjusted operating income for three consecutive quarters, and that the issuer targets total leverage below 3.0x. That target needs EBITDA of about USD 1,407 million on today's debt, so the gap is large even if the one-off gains prove to be a timing effect; what would change the view is confirmed debt reduction well beyond the exchange or an issuer-stated EBITDA that differs materially from the derived figure.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 59; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 7; calculation C35; calculation C36

### Cash flow quality and liquidity

Operating cash flow was USD 224 million in FY2025 and USD 131 million for the last twelve months, and after capital expenditure of USD 94 million only USD 37 million is left before distributions to the parent, so debt reduction depends on asset sales and finance receivable sales rather than free cash flow. Finance receivable sales proceeds are inside operating cash flow and fell in 2026; with lower profitability and lower tariff refund collections that led the issuer to cut its 2026 operating cash flow outlook to a range of about USD 145 million to USD 195 million. Cash of USD 410 million and net revolver availability of USD 225 million cover the USD 197 million due in 2027, but the walls of USD 752 million in 2028 and USD 1,137 million in 2029 need refinancing or further exchanges; the liquidity figure is dated after the balance sheet and is not borrowing-base certain.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 97; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 42; calculation C17; calculation C18; calculation C31

### Data quality and definitions

Three choices drive the numbers and each is logged: EBITDA is derived because the issuer states none, the parent's notes are inside the issuer's debt because Xerox Corporation guarantees them and received the proceeds, and the goodwill impairment is added back as non-cash. A reader who treats the impairment as a cost sees negative last-twelve-months EBITDA and no meaningful leverage, so every ratio here should be read with that definition. The instrument table is rolled forward from the 2025 report and its Term Loan B figure is a residual, and the exchange expected on or about November 13, 2026 is not confirmed by any document, so pro forma figures are expected, not final.
Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 56; calculation C25; calculation C26; calculation C27

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and coverage reading | Ready with Limitations | EBITDA is derived and the goodwill impairment is added back; cash interest is printed for fiscal years and the combined group only | Obtain the issuer's own EBITDA definition if it publishes one; obtain interim cash interest paid |
| Net debt and liquidity | Ready with Limitations | Undrawn facilities are dated 2026-11-05 on a September calculation; availability at the 2024 and 2025 balance sheet dates is not stated | Obtain availability and letters of credit at each balance sheet date |
| Maturity wall and refinancing | Ready with Limitations | The ladder is at 2026-09-30 and excludes the debt exchange; Amendment No. 2 to the First Lien Term Loan Credit Agreement is not supplied | Obtain the closing announcement of the exchange and the amendment |
| Debt stack and instrument terms | Ready with Limitations | Instrument principal at 2026-09-30 is rolled forward and the Term Loan B figure is a residual; carrying values by instrument are not printed | Obtain an instrument-level debt table at 2026-09-30 |
| Earnings trend | Ready with Limitations | Lexmark enters 2025-07-01, captions were reclassified in 2026, and the fourth quarter of 2025 is not filed separately | Keep each period on one basis and label reclassified amounts |

## Calculations

All amounts are USD millions as printed; ratios are to two decimals and percentages are shown as plain numbers.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Total debt at 2024-12-31 | Short-term debt 197 + short-term related party debt 388 + long-term debt 1,180 + long-term related party debt 1,634 | 3,399 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155 |
| C2 | Total debt at 2025-12-31 | 110 + 121 + 2,144 + 1,872 | 4,247 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7 |
| C3 | Total debt at 2026-09-30 | 139 + 18 + 2,405 + 1,658 | 4,220 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7 |
| C4 | Net debt at 2024-12-31 | 3,399 - 575 | 2,824 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155 |
| C5 | Net debt at 2025-12-31 | 4,247 - 511 | 3,736 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155 |
| C6 | Net debt at 2026-09-30 | 4,220 - 410 | 3,810 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 6–7 |
| C7 | Third quarter depreciation and amortization | Q3 2026: 296 - 201; Q3 2025: 224 - 117 | 95 for Q3 2026; 107 for Q3 2025 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7; 10-Q_2026-06-30_xrx-20260630.htm.jsonl, page 7 |
| C8 | Non-financing interest carved out of Other expenses, net | FY2025: 352 - 248; FY2024: 155 - 119 | 104 for FY2025; 36 for FY2024 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 154, 229 |
| C9 | EBITDA (Reported) FY2024 | Pre-tax result -1,211 + non-financing interest 119 + depreciation and amortization 274 + goodwill impairment 1,058 | 240 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| C10 | EBITDA (Reported) FY2025 | Pre-tax result -476 + non-financing interest 248 + depreciation and amortization 331 + goodwill impairment 0 | 103 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| C11 | EBITDA (Reported) 9M 2025 | Pre-tax result -420 + non-financing interest 168 + depreciation and amortization 224 + goodwill impairment 0 | -28 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| C12 | EBITDA (Reported) 9M 2026 | Pre-tax result -1,042 + non-financing interest 277 + depreciation and amortization 296 + goodwill impairment 959 | 490 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| C13 | EBITDA (Reported) Q3 2025 | Pre-tax result -298 + non-financing interest 80 + depreciation and amortization 107 + goodwill impairment 0 | -111 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| C14 | EBITDA (Reported) Q3 2026 | Pre-tax result -1,003 + non-financing interest 93 + depreciation and amortization 95 + goodwill impairment 959 | 144 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| C15 | Revenue, last twelve months to 2026-09-30 | 7,022 + 5,636 - 4,994 | 7,664 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| C16 | EBITDA (Reported), last twelve months | 103 + 490 - (-28) | 621 | Calculations C10, C11 and C12 |
| C17 | Net cash from operating activities, last twelve months | 224 + (-77) - 16 | 131 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7 |
| C18 | Capital expenditure, last twelve months | 91 + 70 - 67 | 94 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7 |
| C19 | Leverage at 2024-12-31 | 3,399 / 240 and 2,824 / 240 | 14.16x total and 11.77x net | Calculations C1, C4 and C9 |
| C20 | Leverage at 2025-12-31 | 4,247 / 103 and 3,736 / 103 | 41.23x total and 36.27x net | Calculations C2, C5 and C10 |
| C21 | Leverage at 2026-09-30 on last twelve months EBITDA | 4,220 / 621 and 3,810 / 621 | 6.80x total and 6.14x net | Calculations C3, C6 and C16 |
| C22 | Cash interest cover | FY2024: 240 / 214; FY2025: 103 / 272 | 1.12x for FY2024; 0.38x for FY2025 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227 |
| C23 | Debt maturities at 2026-09-30 | 20 + 197 + 752 + 1,137 + 1,042 + 1,200 | 4,348 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 100–101 |
| C24 | Reconciling items to carrying value | Issuance costs -95 + net unamortized discount -33; principal 4,348 - 128 | -128 and 4,220 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 99 |
| C25 | Principal by registrant and prior-year ties | 1,698 + 2,199 + 451 = 4,348; 2025-12-31: 2,025 + 2,316 + 3 = 4,344, less 59 and 38 = 4,247; 2024-12-31: 3,451 less 30 and 22 = 3,399 | 4,348; 4,247; 3,399 | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 99; 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217 |
| C26 | Instrument roll-forward to 2026-09-30 | 5.50% notes 750 - 194 = 556; convertible notes 400 - 8 = 392; second lien notes 500 - 6 = 494; Holdings 556 + 500 + 250 + 392 = 1,698; Term Loan B 2,199 - 400 - 494 - 250 - 350 = 705; other subsidiaries 405 + 45 + 1 = 451 | 1,698; 705; 451 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 40, 99 |
| C27 | Pro forma for the exchange | Principal reduction 174 - 120 = 54; net debt 3,810 - 54 = 3,756; 3,756 / 621 | 3,756 and 6.05x | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 56 |
| C28 | Core debt cross-check and ratios | 2024: 1,658 + 1,741 = 3,399; 2025: 2,759 + 1,488 = 4,247; 2026-09-30: 2,924 + 1,296 = 4,220; core debt over EBITDA: 1,658 / 240; 2,759 / 103; 2,924 / 621 | 6.91x; 26.79x; 4.71x | 10-K_2024-12-31_xrx-20241231.htm.jsonl, page 121; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 115; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 100 |
| C29 | Debt stack principal and cumulative leverage | 705 + 400 + 494 + 250 + 350 + 556 + 500 + 250 + 392; each cumulative total over 621 | 3,897 in all | Calculation C26 |
| C30 | EBITDA margin | 240 / 6,221; 103 / 7,022; 621 / 7,664 | 3.86; 1.47; 8.10 percent | Calculations C9, C10, C15 and C16 |
| C31 | Operating cash flow less capital expenditure | FY2024: 511 - 44; FY2025: 224 - 91; LTM: 131 - 94 | 467; 133; 37 | Calculations C17 and C18 |
| C32 | Revenue growth FY2025 | (7,022 - 6,221) / 6,221 x 100 | 12.88 percent | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 154; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 6 |
| C33 | Capital expenditure over revenue, last twelve months | 94 / 7,664 x 100 | 1.23 percent | Calculations C15 and C18 |
| C34 | EBITDA if the goodwill impairment is treated as a cost | Last twelve months EBITDA 621 - 959 | -338 | Calculation C16 |
| C35 | Last twelve months EBITDA without the one-off gains | 621 - 100 - 105 = 416; 4,220 / 416; 3,810 / 416 | 416; 10.14x total; 9.16x net | 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 40 |
| C36 | EBITDA needed for the issuer's leverage target on today's debt | 4,220 / 3.0 | 1,406.67, about 1,407 | 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 7 |

## Gaps

- High: the debt exchange expected to close on or about 2026-11-13 is not confirmed by any document, so the pro forma net debt of 3,756 and net leverage of 6.05x in the post-balance-sheet table are expected figures and the cash paid for accrued interest on the exchanged notes is not quantified; the action that would close it is the closing announcement.
  Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 56
- High: the issuer states no EBITDA or adjusted EBITDA, so EBITDA (Reported) is derived for every period and every leverage and cover ratio rests on that derivation, on adding back the goodwill impairment, and for FY2024 and FY2025 on the combined non-financing interest figure applied to Xerox Corporation; and the last twelve months figure includes about 205 of one-off gains (a debt extinguishment gain of 100 and a tariff refund benefit of 105 in cost of sales) that are not stripped out; the action is the issuer's own EBITDA definition.
  Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 227–229; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 106; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7
- Medium: cash interest paid is printed only in the annual reports and only for the combined group, so cover for the last twelve months and for the interim columns is not calculable; the action is interim interest paid for Xerox Corporation.
  Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 227
- Medium: undrawn committed facilities are not stated at the 2024 and 2025 balance sheet dates, and the 2026-09-30 figure of 225 is the issuer's net availability dated 2026-11-05 after borrowings of 75 that did not exist at 2026-09-30; the action is availability and letters of credit at each balance sheet date.
  Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 42; 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 116
- Medium: debt by instrument at 2026-09-30 is rolled forward from the 2025 table, instrument carrying values are not printed, the Term Loan B principal of 705 is a residual and its amended amortization is not supplied, and Amendment No. 2 to the First Lien Term Loan Credit Agreement in the current report dated 2026-10-29 is not supplied; the action is an instrument-level table and that amendment.
  Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 216–217; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 99–101; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 114
- Medium: the debt stack leaves out the ABL, whose lien rank against the other secured debt is not stated, and the Joint Venture term loans and Class A Units of 450, whose rank against the group is not stated, so it covers principal of 3,897 of 4,348.
  Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 42; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 10–11
- Medium: many cash flow and income statement lines are not printed in every period (for example deferred tax benefit and derivative changes only in the annual statements, and tariff financing only in the interim statements), so those cells are not supplied; where a statement prints a dash the cell is read as nil, which is an interpretation logged in the normalization register.
  Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, pages 155–156; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, pages 7–8
- Medium: segment profit, depreciation by segment and operating indicators such as installs are not carried, so the segment schedule holds external revenue only; the action is to extend the schedule if segment earnings are needed.
  Basis: 10-K_2025-12-31_xrx-20251231.htm.jsonl, page 187; 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 21
- Low: no maintenance and growth split of capital expenditure is printed, and the third quarter columns of the cash flow statement are not built because no discrete quarter cash flow is printed.
  Basis: 10-Q_2026-09-30_xrx-20260930.htm.jsonl, page 7

## Next module

The orchestrator selects the next module.
