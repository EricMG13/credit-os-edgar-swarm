---
module_id: CP-2
module_name: FundamentalCredit
issuer_id: cnm-1856525
analysis_date: 2026-11-18
run_id: cnm-1856525-2026-11-18-credit_snapshot-host
method_version: deploy-v-r14
pathway: credit_snapshot
---

# CP-2 Fundamental credit for Core & Main, Inc. (cnm-1856525), as of 2026-11-18

## Request

Fundamental credit for Core & Main, Inc. (issuer id cnm-1856525), as of 2026-11-18, on the credit snapshot pathway. The scope is the integrated fundamental credit view: business and operating model, financial profile, liquidity and refinancing, financial policy, downside path and monitoring triggers.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-01-28_cnm.htm.jsonl | Annual report on Form 10-K for the fiscal year ended January 28, 2024 | 2024-03-19 (signature page and auditor's report) | 7d49a2886a7b87956b9b3c00170119569c12f68ef6f9901dc1e2c0c33d36ab4a | Fiscal 2023 balance sheet context for the sponsor exit repurchases and the February 2024 financing. |
| 10-K_2025-02-02_cnm.htm.jsonl | Annual report on Form 10-K for the fiscal year ended February 2, 2025 | 2025-03-25 (auditor's report; the signature page prints 2024-03-25) | e22a4f864a5fbd988927e6678e529c0188660ca06badc8d8df757277e51e3278 | Business description, competition, customers and suppliers, seasonality, EBITDA reconciliation, income statement, cash flow statement and debt facts for fiscal 2022 to fiscal 2024. |
| 10-Q_2026-05-03_cnm.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended May 3, 2026 | 2026-06-10 (signature page) | e961340eaef56046003419c49345b8385cc4758b7ed1e0f6ebe7c011c8ca7772 | Repurchase authorization remaining at 2026-05-03 and the first-quarter position. |
| 10-Q_2026-08-02_cnm.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended August 2, 2026 | 2026-09-09 (signature page) | 28b726b3f6668bcdd97245f0621ab2882b59eb8ea624fb56e28ade1353c29582 | Latest balance sheet, six-month income and cash flow statements, debt note and fair values, liquidity, variable-rate exposure, tax receivable payable, product categories, tariffs and the exhibit list. |
| EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl | Press release (Exhibit 99.1) announcing fiscal 2026 first quarter results | 2026-06-10 (dateline) | 477e5f3e43d234f37f42b280aadf2b1519060085427091f1fc6c99c4a3062f24 | First-quarter sales commentary (flat sales, lower volume offset by acquisitions). |
| EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl | Press release (Exhibit 99.1) announcing the launch of a senior notes offering | 2026-06-25 (dateline) | cb8f146c390230ebda3e60db4c869cf724b254ec5081fea6559ffb69b3f490ec | Intended use of proceeds of the notes due 2034. |
| EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl | Press release (Exhibit 99.1) announcing fiscal 2026 second quarter results | 2026-09-09 (dateline) | da395e9c6715bf9c1e1ddee4a29d0807fc00729e5c3b140e2d774d335674b8b5 | Fiscal 2026 outlook, revolver availability and letters of credit, repurchases after the quarter end, associates. |

| Handoff module | sha256 | Use |
| --- | --- | --- |
| Source readiness (CP-0) | 67d2612aff08ec2c003fef819ef1089cc758031524f3ceaeac38cbc3f4c2730a | Source inventory, document dates and the list of documents that are not supplied. |
| Financial foundation (CP-1) | 4422cf72c7a3d11e45c46aed061a5a753f3ab6b4c599faec19a6e4eb93f328aa | Net debt, leverage, interest cover, liquidity, debt stack, maturity ladder, cash flow and post-balance-sheet adjustments. |
| Business & governance (CP-1A) | 9b351ddc63124e60d1d56b9aa05dcfe4e04fc45d3fafbba222ae35065cd5cf1d | Ownership and control, sponsor behaviour flags, capital allocation, tax receivable agreements, risk level and events. |

## Findings

### Bottom line

Core & Main's fundamental credit is adequate: USD 1,538 million of liquidity and no final maturity before 2031 support it, but shareholder returns now exceed free cash flow, so the creditor risk is leverage drift, not near-term liquidity.
Basis: calculation LQ1; calculation SR1; calculation FC4; Financial foundation (CP-1); Business & governance (CP-1A)

On the last measurable basis net debt was 2.49x reported EBITDA at the end of fiscal 2024, and EBITDA covered cash interest 4.59x; the annual report for the year ended February 1, 2026 is missing, so trailing leverage cannot be stated. Net debt was USD 2,137 million at August 2, 2026 and USD 2,148 million pro forma for USD 11 million of repurchases made after that date, on a day the report does not state, about 2.23x the midpoint of the company's fiscal 2026 EBITDA guidance.
Basis: calculation LV2; calculation CV2; calculation ND4; calculation PF1; calculation GL2; Financial foundation (CP-1); EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 1, 5

### Key findings

Business risk is moderate: customers are highly diversified and capital needs are low, but demand follows construction. Tens of thousands of customers buy from the company, the top 50 are about 10% of net sales and the largest is under 1%; capital expenditure was 0.47% of net sales in fiscal 2024; and fiscal 2024 net sales of USD 7,441 million are 19.08% of a USD 39 billion market that management estimates. Against that, about 58% of sales go to private non-residential and residential construction on management's estimates, and the first half of fiscal 2026 sales grew only 1.27%, mainly through acquisitions.
Basis: calculation CX1; calculation MS1; calculation NM1; calculation GR2; 10-K_2025-02-02_cnm.htm.jsonl, pages 6, 8, 14, 15, 86, 87; 10-Q_2026-08-02_cnm.htm.jsonl, page 33; Business & governance (CP-1A)

Earnings have been flat while debt grew, which is why leverage is the issue. Adjusted EBITDA was USD 935 million in fiscal 2022, USD 910 million in fiscal 2023 and USD 930 million in fiscal 2024, a fall of 0.53% over two years, although the Adjusted EBITDA margin fell from 13.58% to 12.50% as SG&A rose 15.79% in fiscal 2024 against sales growth of 11.03%. Net debt rose from USD 1,877 million to USD 2,253 million in that year, taking net debt to reported EBITDA from 2.11x to 2.49x and cash interest cover from 8.47x to 4.59x.
Basis: calculation EB1; calculation EM1; calculation EM2; calculation GR1; calculation GR3; calculation ND1; calculation ND2; calculation LV1; calculation LV2; calculation CV1; calculation CV2; 10-K_2025-02-02_cnm.htm.jsonl, pages 86, 97, 108; Financial foundation (CP-1)

Cash conversion is the main operating support, but it is seasonal and uneven. Operating cash flow was 117.47% of Adjusted EBITDA in fiscal 2023 and 66.77% in fiscal 2024, and 28.80% in the first half of fiscal 2026 against 22.65%, because working capital absorbed USD 242 million in that half. The company says cash flow is typically lower in the first two quarters and higher in the last two, and its fiscal 2026 outlook of operating cash flow at 60% to 70% of Adjusted EBITDA implies second-half operating cash flow of USD 426 million to USD 542 million.
Basis: calculation CN1; calculation CN2; calculation CN3; calculation CN4; calculation WC1; calculation GL6; calculation GL7; 10-K_2025-02-02_cnm.htm.jsonl, page 81; 10-Q_2026-08-02_cnm.htm.jsonl, page 8; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5

Liquidity is strong and refinancing risk is low until 2031. Liquidity was USD 1,538 million at August 2, 2026, before USD 11 million of repurchases made after that date: cash plus USD 1,226 million of availability on an undrawn USD 1,250 million revolver, which depends on the borrowing base. Debt payments and tax receivable payments due within 12 months are only USD 58 million, and liquidity is 6.36x the working capital outflow of the first half. The first final maturity is February 2031, and the 2031 loan, the 2033 loan and the 2034 notes are 37.45%, 32.28% and 30.27% of principal; the notes' fair value is 99.60% of par, which shows market access after the July 2026 refinancing.
Basis: calculation LQ1; calculation LQ2; calculation LQ3; calculation LQ5; calculation WC1; calculation DS2; calculation DS3; calculation DS4; calculation DS14; 10-Q_2026-08-02_cnm.htm.jsonl, pages 15, 18, 20, 36; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1; Financial foundation (CP-1)

Leverage is moderate on the last measurable basis and rising in absolute terms. Net debt was USD 1,928 million at the end of fiscal 2025 and USD 2,137 million at August 2, 2026, USD 2,148 million pro forma for USD 11 million of repurchases after that date, which is 2.19x to 2.26x the fiscal 2026 Adjusted EBITDA guidance of USD 950 million to USD 980 million. That is an indicator on company guidance, not a trailing ratio, and the August balance is seasonally high; six-month Adjusted EBITDA covered six-month interest expense 8.47x against 8.03x a year earlier, but covered cash interest paid 8.47x against 10.00x.
Basis: calculation ND3; calculation ND4; calculation PF1; calculation GL1; calculation GL3; calculation HC1; calculation HC2; calculation HC3; calculation HC4; Financial foundation (CP-1); 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 8, 42; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5

Financial policy is the weakest dimension. In the first half of fiscal 2026 the company repurchased USD 257 million of shares and paid USD 42 million under the tax receivable agreements, USD 299 million against free cash flow of USD 112 million, and net new debt was USD 293 million; USD 412 million of a USD 1 billion repurchase authorization was unused at August 2, 2026. Claims outside debt, lease liabilities and the tax receivable payable, add USD 985 million, 46.09% of net debt, and the payable can accelerate on a change of control.
Basis: calculation SR1; calculation FC4; calculation SR3; calculation OC3; calculation OC4; Business & governance (CP-1A); 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 8, 10, 20

The primary downside path is a construction downturn met with unchanged shareholder returns. Each 1 percentage point of gross margin is worth USD 40.55 million of six-month gross profit, 8.11% of six-month Adjusted EBITDA, and each 1% fall in six-month sales removes USD 10.93 million, 2.19% of that EBITDA, if SG&A does not fall; in fiscal 2024 SG&A rose faster than sales and operating income fell 2.84%. Variable-rate debt is 69.73% of principal and the swap covers 86.81% of it only to July 2028, after which each 1 percentage point costs USD 17.28 million a year.
Basis: calculation SN1; calculation SN2; calculation SN3; calculation SN4; calculation GR4; calculation DS8; calculation DS9; calculation DS12; 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, pages 28, 33

### Contrary evidence and what would change the view

The strongest evidence for a better view is that the company can delever quickly when it chooses: net debt fell USD 325 million in fiscal 2025 while it still repurchased shares, free cash flow was USD 1,030 million in fiscal 2023, the revolver is undrawn, and buybacks, acquisitions and the pace of greenfield openings are discretionary. If the third-quarter report and the annual report for fiscal 2025 show trailing net debt to EBITDA at or below about 2.23x and buybacks met from operating cash flow, the view would move up. It would move down if net debt rises through the seasonally stronger second half, if Adjusted EBITDA falls below the fiscal 2024 level of USD 930 million, if the revolver is drawn to fund repurchases, or if a larger acquisition is financed with debt.
Basis: calculation NC3; calculation FC1; calculation GL2; 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 108; 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 18; Business & governance (CP-1A)

### Limitations

- The conclusion that leverage is moderate rests on the fiscal 2024 ratio and on a guidance-based indicator, and it would change if the missing fiscal 2025 results show EBITDA far below fiscal 2024 or year-end net debt well above the August balance.
  Basis: Financial foundation (CP-1); 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5
- The credit agreements and the borrowing base are not supplied, so the strong liquidity conclusion holds only if the borrowing base supports the stated availability, and a downturn that shrinks receivables and inventory would lower it.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, pages 18, 19, 36
- No credit rating, market spread or peer set is supplied, so the adequate judgement is absolute and not relative to other leveraged issuers, and the pricing of the credit cannot be tested.
  Basis: Source readiness (CP-0)
- The fiscal 2026 outlook is management's own and unaudited, so the guidance-based leverage indicator and the implied second-half cash flow would move with any miss, and a miss in the second half is the case that would break the leverage drift conclusion.
  Basis: EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5
- The split of sales by end market and the product category labels come from fiscal 2024 management estimates and from a category renamed in 2026, so the cyclical share of about 58% may have moved and the construction exposure conclusion is bounded.
  Basis: 10-K_2025-02-02_cnm.htm.jsonl, pages 6, 8, 9; 10-Q_2026-08-02_cnm.htm.jsonl, page 13

### T2.1 Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2024-01-28_cnm.htm.jsonl | High (audited annual report) | Fiscal 2023, year ended 2024-01-28 | Core & Main, Inc. consolidated | Balance sheet and cash flow context for the sponsor exit and the February 2024 financing | Superseded by later periods for balances | Used here as context for financial policy |
| S2 | 10-K_2025-02-02_cnm.htm.jsonl | High (audited annual report) | Fiscal 2024, year ended 2025-02-02; comparatives for fiscal 2022 and 2023 | Core & Main, Inc. consolidated | Business, competition, customers, suppliers, seasonality, EBITDA reconciliation, statements | Signature date misprinted; fiscal 2025 report not supplied | Used here for the business profile and the fiscal year leverage and cover |
| S3 | 10-Q_2026-05-03_cnm.htm.jsonl | High (unaudited quarterly report) | Quarter ended 2026-05-03 | Core & Main, Inc. consolidated | Repurchase authorization remaining at 2026-05-03 | Balances superseded by S4 | Used here for the repurchase pattern |
| S4 | 10-Q_2026-08-02_cnm.htm.jsonl | High (unaudited quarterly report) | Quarter and six months ended 2026-08-02 | Core & Main, Inc. consolidated | Balance sheet, six-month statements, debt note, liquidity, variable-rate exposure, tariffs, exhibits | Latest periodic report; no third-quarter material | Used here for the current financial profile |
| S5 | EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl | Medium (issuer release) | Quarter ended 2026-05-03 | Core & Main, Inc. | First-quarter sales commentary | Issuer-defined highlights | Used here for the first-quarter volume trend |
| S6 | EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl | Medium (issuer release) | Announced 2026-06-25 | Core & Main LP as issuer | Use of proceeds of the 2034 notes | Launch notice only | Used here for the use of refinancing proceeds |
| S7 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl | Medium (issuer release) | Quarter and six months ended 2026-08-02 | Core & Main, Inc. | Fiscal 2026 outlook, availability, repurchases after the quarter end | Management guidance, unaudited | Used here for guidance and availability |
| H0 | Source readiness (CP-0) | Accepted module output | Run 2026-11-18, all periods | Core & Main, Inc. (cnm-1856525) | Source inventory, document dates, missing documents | No rating, peer or fiscal 2025 annual data | Used here for perimeter and the missing-document list |
| H1 | Financial foundation (CP-1) | Accepted module output | Fiscal 2023 and 2024; first half of fiscal 2026; balances to 2026-08-02 | Core & Main, Inc. consolidated, carrying-value basis | Net debt USD 2,137 million, pro forma USD 2,148 million; liquidity USD 1,538 million; ratios for fiscal 2023 and 2024; principal USD 2,478 million | Trailing leverage and cover not calculable; covenant terms not supplied | Used here for every leverage, liquidity and cash flow figure |
| H1A | Business & governance (CP-1A) | Accepted module output | Fiscal 2022 to 2026-09-09 | Core & Main, Inc. and Core & Main LP | Ownership, sponsor exit, repurchases, tax receivable payable USD 685 million, risk level Medium, events | Credit agreements, proxy statement and fiscal 2025 report not supplied | Used here for ownership and financial policy |

Module status: Ready with Limitations.

### Company description

Core & Main distributes water, wastewater, storm drainage and fire protection products and related services to municipalities, private water companies and professional contractors through over 370 branches in the United States and Canada, selling more than 225,000 products from more than 5,000 suppliers to more than 60,000 customers. Fiscal 2024 net sales of USD 7,441 million are 19.08% of a USD 39 billion addressable market that management estimates, and the company names one other national competitor. The model earns about 27% of sales as gross profit by buying at scale and passing product costs to customers with a lag, and it links cash flow to repair and replacement of water infrastructure, to private construction and, for fire protection, to building projects; the business grew through acquisitions after a lineage that began in 1874 and a CD&R ownership from 2017 to January 2024.
Basis: calculation MS1; 10-K_2025-02-02_cnm.htm.jsonl, pages 6, 7, 15, 86; 10-Q_2026-08-02_cnm.htm.jsonl, pages 10, 29; Business & governance (CP-1A)

For creditors the customer base supports cash-flow visibility, because no customer is above 1% of net sales and the top 50 are about 10%, and low capital needs (0.47% of net sales in fiscal 2024) help liquidity preservation. Revenue is not contracted, so debt service depends on construction activity and on the second-half release of working capital rather than on committed revenue, and refinancing confidence rests on the market access shown in July 2026.
Basis: calculation CX1; 10-K_2025-02-02_cnm.htm.jsonl, page 14; 10-Q_2026-08-02_cnm.htm.jsonl, page 18; Financial foundation (CP-1)

### Ownership and group structure

Core & Main, Inc. is a listed holding company whose main asset is its interest in Core & Main Holdings, LP, which sits above the borrower, Core & Main LP. No holder is identified as controlling: CD&R, the owner from 2017, held no shares after January 25, 2024, the company repurchased USD 1,344 million of shares and interests from CD&R-affiliated sellers in fiscal 2023, and the management holding vehicle holds a non-controlling interest of 3.3%. The 2034 notes are guaranteed by the borrower's parent companies, while the term loans and the revolver are secured on substantially all assets of the borrower, so the structural exposure is to the group, not to a controlling holder.
Basis: 10-K_2025-02-02_cnm.htm.jsonl, pages 7, 21, 80, 110; 10-Q_2026-08-02_cnm.htm.jsonl, pages 10, 18, 19, 22; EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl, page 1; Business & governance (CP-1A)

The structural points for creditors are the USD 685 million tax receivable payable to former owners and management, which the listed company pays out of distributions from the operating partnership and which can accelerate on a change of control, and a consent point for the CD&R investors on refinancing terms that are more restrictive on those payments. Business & governance rates sponsor and governance risk Medium, and this module agrees: the risk comes from debt-funded shareholder returns and the tax receivable claim, not from sponsor control.
Basis: calculation OC2; Business & governance (CP-1A); 10-K_2025-02-02_cnm.htm.jsonl, pages 56, 60, 61; 10-Q_2026-08-02_cnm.htm.jsonl, page 20

### Revenue drivers and pricing power

Sales follow municipal repair and replacement (about 42% of fiscal 2024 sales on management's estimate), private non-residential and residential construction (about 38% and 20%) and acquisitions: the first half of fiscal 2026 grew 1.27% mainly through acquisitions, storm drainage fell 2.9% on lower volume and fire protection rose 15.3% on volume and price. The first quarter was flat because lower volume was offset by acquisitions, and fire protection net sales fell 13.37% in fiscal 2024, so category risk is real even though the base is broad. Revenue is repeat but transactional: no contract length, renewal or churn data is supplied, and switching costs are not quantified.
Basis: calculation GR2; calculation GR5; 10-K_2025-02-02_cnm.htm.jsonl, pages 6, 8, 86; 10-Q_2026-08-02_cnm.htm.jsonl, pages 31, 33; EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, page 2

Pricing is passed through with a lag as product costs move: the 27.1% gross margin of fiscal 2023 benefited from inventory bought during inflation, and inflation lifts sales as deflation or tariff reversals would lower them. Management says over three-quarters of purchased products are made in the United States, which limits tariff exposure, and petroleum costs affect delivery. Revenue is therefore cyclical and construction-linked, not predictable; for creditors a volume decline reaches EBITDA quickly because nothing is contracted.
Basis: 10-K_2025-02-02_cnm.htm.jsonl, page 87; 10-Q_2026-08-02_cnm.htm.jsonl, page 27

### Cost structure and margin resilience

Gross profit was 26.61% of net sales in fiscal 2024 against 27.13% in fiscal 2023, and 26.95% in the first half of fiscal 2026 against 26.72%, a band of about half a percentage point that management attributes to purchasing, pricing and private label work. Costs below gross profit are sticky: in fiscal 2024 SG&A rose 15.79% against net sales growth of 11.03%, operating income fell 2.84% and the Adjusted EBITDA margin fell from 13.58% to 12.50%; in the first half of fiscal 2026 SG&A was 14.8% of net sales and the margin was 12.33% against 12.24%.
Basis: calculation GM1; calculation GM2; calculation GM3; calculation GM4; calculation GR1; calculation GR3; calculation GR4; calculation EM1; calculation EM2; calculation EM3; calculation EM4; 10-K_2025-02-02_cnm.htm.jsonl, pages 86, 87, 97; 10-Q_2026-08-02_cnm.htm.jsonl, pages 33, 34, 42

Each 1 percentage point of gross margin is USD 40.55 million of six-month gross profit, 8.11% of six-month Adjusted EBITDA, and each 1% fall in six-month sales removes USD 10.93 million, 2.19% of that EBITDA, if SG&A does not fall. Margins can be defended against modest volume pressure because gross margin has moved little, but not against a deep volume fall unless SG&A is cut, and the quarterly report mentions cost actions without amounts.
Basis: calculation SN1; calculation SN2; calculation SN3; calculation SN4; 10-Q_2026-08-02_cnm.htm.jsonl, pages 33, 34

### Capital intensity and FCF conversion

Capital expenditure was 0.47% of net sales in fiscal 2024 and 0.79% in the first half of fiscal 2026, with no split between maintenance and growth. Operating cash flow was 117.47% of Adjusted EBITDA in fiscal 2023, 66.77% in fiscal 2024 and 28.80% in the first half of fiscal 2026 against 22.65%, because working capital absorbed USD 242 million in the latest half and USD 255 million a year earlier; the company says operating cash flow is typically lower in the first two quarters and higher in the last two. Free cash flow was USD 1,030 million in fiscal 2023, USD 586 million in fiscal 2024 and USD 112 million in the latest half against USD 88 million.
Basis: calculation CX1; calculation CX2; calculation CN1; calculation CN2; calculation CN3; calculation CN4; calculation WC1; calculation WC2; calculation FC1; calculation FC2; calculation FC3; calculation FC4; 10-K_2025-02-02_cnm.htm.jsonl, pages 81, 108; 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 13

Cash taxes of USD 40 million and cash interest of USD 59 million were paid in the latest half before free cash flow, and operating lease liabilities of USD 300 million sit outside debt. EBITDA converts into durable free cash flow over a full year on the evidence of fiscal 2023 and fiscal 2024, with the first half funded by the revolver and cash; the fiscal 2026 outlook of operating cash flow at 60% to 70% of Adjusted EBITDA implies second-half operating cash flow of USD 426 million to USD 542 million, and capex flexibility is high because spending is small.
Basis: calculation OC1; calculation GL6; calculation GL7; 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 8; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5

### Porter's five forces

Rivalry is moderate: the company faces one other national distributor and hundreds of regional and local ones, and it competes on availability, local expertise and project planning as well as price, which fits a gross margin that has stayed within about half a percentage point; a price war would show first in that margin.
Basis: 10-K_2025-02-02_cnm.htm.jsonl, page 15; calculation GM1; calculation GM2

The threat of new entrants is low to moderate: a national branch network, supplier distribution rights and local specification knowledge take time to build, although the company itself opens greenfield locations, so regional entry is feasible; entry would pressure local gross margin rather than refinancing capacity.
Basis: 10-K_2025-02-02_cnm.htm.jsonl, pages 10, 15; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1

The threat of substitutes is moderate: the company lists the development of alternatives to distributors, including direct sales by suppliers to end users, among its risks; substitution would reduce volume and sticky SG&A would turn it into EBITDA loss.
Basis: 10-Q_2026-08-02_cnm.htm.jsonl, page 4; 10-K_2025-02-02_cnm.htm.jsonl, page 15

Buyer power is low per customer, because the largest customer is under 1% of net sales, but municipal bidding and contractor price sensitivity limit price increases, which supports stable revenue and a limited ability to widen margin.
Basis: 10-K_2025-02-02_cnm.htm.jsonl, page 14

Supplier power is moderate: the largest supplier is about 7% and the top ten about 43% of product expenditures, suppliers pay rebates for volume, and cost increases are passed on with a lag; supply disruption or tariff changes would hit gross margin before prices catch up.
Basis: 10-K_2025-02-02_cnm.htm.jsonl, pages 11, 15; 10-Q_2026-08-02_cnm.htm.jsonl, page 27

### PEST analysis

Regulatory funding and the economic cycle are material to credit quality; social and technological factors do not appear to be a primary credit driver based on the provided materials. The Infrastructure Investment and Jobs Act includes USD 55 billion for water infrastructure, most of which management believes has yet to be spent, and a January 2025 order paused some disbursements without affecting water or road projects; a lasting cut would lower municipal demand, 42% of sales on management's estimate. Interest rates and housing and commercial construction drive private demand and the variable-rate cost of USD 1,728 million of debt, and tariffs and petroleum prices affect product and delivery costs.
Basis: 10-K_2025-02-02_cnm.htm.jsonl, pages 8, 81; 10-Q_2026-08-02_cnm.htm.jsonl, pages 27, 28; calculation DS7

### SWOT analysis

Strengths: customer diversification, liquidity of USD 1,538 million, no maturity before 2031 and a gross margin steady near 27%. Weaknesses: shareholder returns above free cash flow, sticky SG&A, USD 685 million of tax receivable claims and flat EBITDA over three years. Opportunities: municipal and fire protection demand and acquisitions, which would raise credit quality only if funded from cash flow. Threats: a construction downturn, deflation or tariff reversals in product prices, higher rates after the swap ends in July 2028, and a larger debt-funded acquisition or buyback.
Basis: calculation LQ1; calculation OC2; calculation GM1; calculation GM2; calculation GM3; calculation GM4; 10-K_2025-02-02_cnm.htm.jsonl, pages 14, 97; 10-Q_2026-08-02_cnm.htm.jsonl, pages 18, 27, 28; Business & governance (CP-1A)

### Strengths and weaknesses

The strongest support is liquidity and maturity profile: USD 1,538 million of liquidity on an undrawn revolver and a first final maturity in February 2031 mean that seasonal working capital and debt service can be met without market access for several years, so refinancing risk is low before fiscal 2030.
Basis: calculation LQ1; calculation LQ5; calculation DS5; calculation DS6; 10-Q_2026-08-02_cnm.htm.jsonl, pages 15, 19, 36; Financial foundation (CP-1)

The second support is a broad customer base with low capital needs: no customer is above 1% of net sales, the top 50 are about 10% and capital expenditure is 0.47% of net sales, so cash flow does not depend on a single account or on heavy reinvestment.
Basis: calculation CX1; 10-K_2025-02-02_cnm.htm.jsonl, pages 14, 86, 108

The third support is a stable gross margin of 26.61% to 27.13% across periods, which together with pass-through pricing limits margin shocks from supplier cost changes.
Basis: calculation GM1; calculation GM2; calculation GM3; calculation GM4; 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, page 33

The fourth support is demonstrated market access on improving terms: three term loan repricings since May 2024 and a July 2026 refinancing that raised USD 1,550 million of new debt, with fair values of 99.60% of par for the notes, 99.75% for the 2033 loan and 100.00% for the 2031 loan.
Basis: calculation RF1; calculation DS14; calculation DS15; calculation DS16; 10-Q_2026-08-02_cnm.htm.jsonl, pages 16, 17, 18; Business & governance (CP-1A)

The fifth support is the absence of a controlling holder, a dividend or a creditor-adverse transaction in the documents supplied, which removes sponsor extraction as a driver.
Basis: Business & governance (CP-1A)

The main weakness is financial policy: USD 299 million of repurchases and tax receivable payments in the first half of fiscal 2026 exceeded free cash flow of USD 112 million by USD 187 million and net new debt was USD 293 million, so leverage rises unless EBITDA grows or repurchases slow.
Basis: calculation SR1; calculation FC4; calculation SR2; calculation SR3; 10-Q_2026-08-02_cnm.htm.jsonl, page 8; Business & governance (CP-1A)

The second weakness is that leverage is not measurable on a trailing basis and has risen: net debt to reported EBITDA went from 2.11x to 2.49x in fiscal 2024 and cash interest cover from 8.47x to 4.59x, and no later ratio is stated.
Basis: calculation LV1; calculation LV2; calculation CV1; calculation CV2; Financial foundation (CP-1)

The third weakness is operating leverage in a construction-linked business: SG&A grew 15.79% against sales growth of 11.03% in fiscal 2024 and Adjusted EBITDA has been flat since fiscal 2022, so a volume decline would reach cash flow faster than costs fall.
Basis: calculation GR1; calculation GR3; calculation EB1; 10-K_2025-02-02_cnm.htm.jsonl, pages 86, 97

The fourth weakness is claims outside debt: USD 985 million of lease liabilities and tax receivable payable, 46.09% of net debt, with the tax receivable payable accelerating on a change of control.
Basis: calculation OC1; calculation OC2; calculation OC3; calculation OC4; Business & governance (CP-1A); 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 20

The fifth weakness is rate exposure: 69.73% of principal is variable-rate, the swap covers 86.81% of it only to July 2028, and each 1 percentage point on all variable-rate debt would cost USD 17.28 million a year after that.
Basis: calculation DS7; calculation DS8; calculation DS9; calculation DS12; 10-Q_2026-08-02_cnm.htm.jsonl, pages 15, 28

### Financial profile and credit quality

The nine dimensions are assessed as follows, each on the evidence cited.

- Scale and market position: Strong. Net sales of USD 7,441 million in fiscal 2024 are 19.08% of the market management estimates, with one other national competitor, which gives scale in purchasing and branch coverage and cushions shocks.
  Basis: calculation MS1; 10-K_2025-02-02_cnm.htm.jsonl, pages 15, 86
- Competitive advantage: Average. Scale, local specification knowledge and supplier distribution rights are advantages that management describes, but a gross margin of 26.61% and Adjusted EBITDA margins of 12.50% to 13.58% show limited pricing power.
  Basis: 10-K_2025-02-02_cnm.htm.jsonl, pages 11, 15; calculation GM2; calculation EM1; calculation EM2
- Business diversification: Average. Customers are broad (largest under 1%) and products numerous, but 67% of sales are pipes, valves and fittings, about 58% of sales are private construction and sales are in the United States and Canada only.
  Basis: calculation NM1; 10-K_2025-02-02_cnm.htm.jsonl, pages 8, 9, 13, 14
- Cost and capex flexibility: Average. Capital expenditure is 0.47% of net sales and can be cut, but SG&A is sticky: it grew 15.79% in fiscal 2024 against sales growth of 11.03%.
  Basis: calculation CX1; calculation GR1; calculation GR3; 10-K_2025-02-02_cnm.htm.jsonl, pages 86, 108
- Margin stability: Average. Gross margin moved within about half a percentage point but the Adjusted EBITDA margin fell from 13.58% to 12.50% in fiscal 2024 and is 12.33% in the latest half.
  Basis: calculation GM1; calculation GM2; calculation EM1; calculation EM2; calculation EM4
- Free cash flow stability: Average. Free cash flow was USD 1,030 million in fiscal 2023 and USD 586 million in fiscal 2024, with operating cash flow at 117.47% and 66.77% of Adjusted EBITDA, so conversion is seasonal and uneven; after shareholder returns the latest half was USD 187 million negative.
  Basis: calculation FC1; calculation FC2; calculation CN1; calculation CN2; calculation SR2
- Ability to refinance and access capital markets: Strong. The July 2026 refinancing raised USD 1,550 million of new debt, with a notes fair value of 99.60% of par, repricings cut margins, and no maturity falls before 2031; no rating or spread is supplied.
  Basis: calculation RF1; calculation DS14; 10-Q_2026-08-02_cnm.htm.jsonl, pages 16, 18
- Liquidity position: Strong. Liquidity is USD 1,538 million, 6.36x the first-half working capital outflow, on an undrawn revolver whose availability depends on a borrowing base that is not supplied.
  Basis: calculation LQ1; calculation LQ5; 10-Q_2026-08-02_cnm.htm.jsonl, page 36
- Financial policy and governance: Average. No controlling holder and no dividend are positives, while buybacks and tax receivable payments above free cash flow, USD 685 million of tax receivable claims and a Medium risk level in Business & governance are negatives.
  Basis: calculation OC2; calculation SR1; calculation FC4; Business & governance (CP-1A)

The main credit supports are liquidity, the maturity profile and customer breadth; the main constraints are financial policy, sticky SG&A and the unmeasurable trailing leverage. The trend is stable operations with rising absolute debt, from net debt of USD 1,877 million at the end of fiscal 2023 to USD 2,137 million at August 2, 2026 (USD 2,148 million pro forma for USD 11 million of repurchases after that date), and the missing datapoints are fiscal 2025 EBITDA and cash interest, covenant calculations, the borrowing base and any rating.
Basis: calculation ND1; calculation ND4; calculation PF1; Financial foundation (CP-1)

### Outlook, tailwinds and headwinds

In the short term, 12 to 24 months, the only outlook the company gives is for fiscal 2026: net sales of USD 7,800 million to USD 7,900 million, Adjusted EBITDA of USD 950 million to USD 980 million (2.15% to 5.38% above fiscal 2024), a margin of 12.2% to 12.4% and operating cash flow at 60% to 70% of Adjusted EBITDA, and it reaffirmed this in September 2026. On the pro forma net debt of USD 2,148 million that is 2.19x to 2.26x, an indicator that supports the stable view if second-half cash flow of USD 426 million to USD 542 million arrives and buybacks stay near the first-half pace, but it is management's guidance, not an audited result.
Basis: calculation GL1; calculation GL3; calculation GL6; calculation GL7; calculation GL8; calculation GL9; calculation PF1; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 1, 5; Financial foundation (CP-1)

Over three to five years the debt moves toward its first final maturities, the 2031 loan in February 2031 and the revolver in April 2031; the interest rate swap ends in July 2028, which leaves all USD 1,728 million of variable-rate debt unhedged, and tax receivable payments rise as exchanges continue (USD 41 million expected within 12 months against USD 42 million paid in the first half). Tailwinds are municipal demand and federal water funding, fire protection growth of 15.3% in the first half, and management's acquisition pipeline; headwinds are storm drainage volume down 2.9%, flat first-quarter sales on lower volume, tariff and petroleum cost uncertainty, and higher rates if the housing and commercial cycle weakens. Company-specific pressure comes from the repurchase pace, with USD 412 million of authorization left, which would add debt if free cash flow does not cover it.
Basis: calculation DS7; 10-K_2025-02-02_cnm.htm.jsonl, pages 8, 81; 10-Q_2026-08-02_cnm.htm.jsonl, pages 10, 20, 27, 28, 31, 33; EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, page 2; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1

### Qualitative downside scenario

The initiating condition is a downturn in private construction, which is about 58% of sales on management's estimates, coinciding with higher interest rates. The first operational break is volume: the first quarter of fiscal 2026 was flat on lower volume, storm drainage already fell 2.9% in the first half, and fire protection fell 13.37% in fiscal 2024. Revenue falls and margins follow because SG&A is sticky: each 1% fall in six-month sales removes USD 10.93 million of gross profit, and each point of gross margin lost is USD 40.55 million.
Basis: calculation NM1; calculation GR5; calculation SN1; calculation SN3; 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, pages 31, 33; EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, page 2

Free cash flow weakens, but the first-half working capital build of USD 242 million would shrink as receivables and inventory fall, which cushions cash; the borrowing base also shrinks with them, so availability under the USD 1,250 million revolver would fall by an amount that is not supplied. Liquidity of USD 1,538 million and near-term fixed claims of USD 58 million mean liquidity distress is unlikely in this scenario within a year; the exposure is leverage, because net debt of USD 2,148 million would sit on lower EBITDA and shareholder returns of USD 299 million in a half, if continued, add debt.
Basis: calculation WC1; calculation LQ1; calculation LQ3; calculation PF1; calculation SR1; 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 18, 36; Financial foundation (CP-1)

Management has levers: buybacks, acquisitions and greenfield openings are discretionary, capital expenditure is small, and tax receivable payments are contractual but linked to taxable income. The refinancing consequence is limited before fiscal 2030 because the first maturity is February 2031, and the variable-rate cost rises by USD 17.28 million a year per percentage point once the swap ends in July 2028. Resilience appears sufficient to avoid liquidity distress; whether leverage stays acceptable depends on whether buybacks are cut in time, and the observable triggers are in the monitoring table.
Basis: calculation DS12; 10-Q_2026-08-02_cnm.htm.jsonl, pages 18, 28; Business & governance (CP-1A)

### T2.10 Materiality filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Liquidity and maturity profile | Liquidity USD 1,538 million; revolver undrawn; first final maturity February 2031; scheduled principal to fiscal 2030 only USD 77 million (calculation LQ1, calculation DS5, calculation DS6) | Large undrawn backstop and distant maturities remove near-term refinancing need | Lowers refinancing and liquidity risk; PD low within 12 months on liquidity | Positive | High |
| 2 | Shareholder returns above free cash flow | Repurchases and tax receivable payments USD 299 million against free cash flow USD 112 million; net new debt USD 293 million (calculation SR1, calculation FC4, calculation SR3) | Returns funded by borrowing raise net debt while EBITDA is flat | Raises leverage and weakens the cushion for lenders; discretionary and reversible | Negative | High |
| 3 | Customer diversification and low capital intensity | Largest customer under 1%; capital expenditure 0.47% of net sales (calculation CX1) | Cash flow does not depend on one account or heavy reinvestment | Supports free cash flow durability and debt service | Positive | High |
| 4 | Leverage not measurable on a trailing basis and rising in absolute terms | Net debt to reported EBITDA 2.11x to 2.49x in fiscal 2024; net debt USD 2,137 million at 2026-08-02, USD 2,148 million pro forma; guidance-based 2.19x to 2.26x (calculation LV1, calculation LV2, calculation ND4, calculation PF1, calculation GL1, calculation GL3) | Higher net debt on flat EBITDA | Raises PD sensitivity to an EBITDA miss; trailing ratio needed to confirm | Negative | Medium |
| 5 | Cash conversion and seasonal working capital | Operating cash flow 117.47% and 66.77% of Adjusted EBITDA in fiscal 2023 and 2024; 28.80% in the first half of fiscal 2026 (calculation CN1, calculation CN2, calculation CN4) | First-half build then second-half release | Supports annual free cash flow but makes debt service dependent on the release | Positive | Medium |
| 6 | Construction-linked demand with sticky SG&A | About 58% of sales from private construction; SG&A +15.79% against sales +11.03% in fiscal 2024; operating income -2.84% (calculation NM1, calculation GR1, calculation GR3, calculation GR4) | Volume decline reaches EBITDA quickly | Raises downside EBITDA volatility and leverage risk | Negative | Medium |
| 7 | Tax receivable and lease claims outside debt | Tax receivable payable USD 685 million and leases USD 300 million, 46.09% of net debt together (calculation OC1, calculation OC2, calculation OC3, calculation OC4) | Contractual cash claims and change-of-control acceleration | Reduces cash for debt service; acceleration would add a claim at a change of control | Negative | High |
| 8 | Gross margin stability and pricing pass-through | Gross margin between 26.61% and 27.13% across four periods (calculation GM1, calculation GM2, calculation GM3, calculation GM4) | Pass-through with a lag and supplier rebates | Limits margin shocks; supports EBITDA | Positive | Medium |
| 9 | Variable-rate exposure after the swap ends | Variable-rate debt USD 1,728 million, 69.73% of principal, swap covers 86.81% to 2028-07-27; USD 17.28 million per 1 percentage point after (calculation DS7, calculation DS8, calculation DS9, calculation DS12) | Cash interest follows Term SOFR | Raises interest burden if rates rise after 2028 | Negative | Medium |

### T2.12 Monitoring triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
| --- | --- | --- | --- | --- |
| Revenue decline | Quarterly net sales falling against the prior-year quarter, after growth of 1.27% in the first half of fiscal 2026 and a guided 2% to 3% for fiscal 2026; storm drainage and flat first-quarter volume are the early signals | 58% of sales are private construction and nothing is contracted | Volume loss reaches EBITDA quickly | 10-Q_2026-08-02_cnm.htm.jsonl, pages 31, 33; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5; the third-quarter report is not supplied |
| EBITDA margin pressure | Adjusted EBITDA margin below the 12.33% of the first half of fiscal 2026 or below the guided 12.2% to 12.4%; gross margin below 26.61% | SG&A is sticky and gross margin is the main buffer | Lower margin lifts leverage and weakens cover | 10-Q_2026-08-02_cnm.htm.jsonl, pages 33, 42; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5 |
| FCF deterioration | Operating cash flow below 60% of Adjusted EBITDA for fiscal 2026 or free cash flow in the third and fourth quarters below the USD 426 million of implied second-half operating cash flow | The second-half release funds debt service and returns | Weak release would force borrowing | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5; capital expenditure guidance not supplied |
| Liquidity reduction | Liquidity below the USD 1,538 million of August 2, 2026, any revolver drawing for repurchases, or availability under 10.0% of the borrowing base, which starts the fixed charge test of 1.00 | The revolver is the seasonal backstop | Draws or a shrinking borrowing base weaken liquidity | 10-Q_2026-08-02_cnm.htm.jsonl, pages 19, 36; borrowing base not supplied |
| Leverage increase | Net debt above USD 2,148 million at the next quarter end or trailing net debt to reported EBITDA above 2.49x once fiscal 2025 data are available | Net debt rose with flat EBITDA | Higher leverage reduces cushion and raises PD | Financial foundation (CP-1); trailing ratio not calculable now |
| Refinancing delay | Any new issue or amendment of the 2031 loan or revolver ahead of the February and April 2031 maturities, or the notes trading below the 99.60% of par fair value | No maturity before 2031 but 37.45% of principal falls due in 2031 | Pricing and access matter from fiscal 2029 onward | 10-Q_2026-08-02_cnm.htm.jsonl, pages 15, 18; no market price series supplied |
| Sponsor/shareholder action | Repurchases above free cash flow of USD 112 million per half, use of the USD 412 million authorization with borrowed funds, a dividend, a debt-funded acquisition, a new holder above 5% or tax receivable acceleration | Financial policy is the weakest dimension | Debt-funded returns raise leverage; acceleration adds a claim | Business & governance (CP-1A); 10-Q_2026-08-02_cnm.htm.jsonl, pages 10, 20 |
| Sector deterioration | Housing starts, non-residential construction, municipal budgets and federal water funding disbursements turning down; tariff and petroleum cost shocks | The company's demand is tied to these drivers | Sector weakness feeds the revenue and margin triggers | 10-K_2025-02-02_cnm.htm.jsonl, pages 8, 81; 10-Q_2026-08-02_cnm.htm.jsonl, page 27; no sector series supplied |

### Overall credit view

Overall, Core & Main presents an adequate business profile supported by customer diversification, low capital needs and USD 1,538 million of liquidity, but credit quality is constrained by shareholder returns above free cash flow, USD 685 million of tax receivable claims and a leverage measure that can be fixed only to fiscal 2024. Cash-flow durability appears adequate because operating cash flow was 117.47% and 66.77% of Adjusted EBITDA in the last two fiscal years, although the first half is seasonally weak. Refinancing capacity is likely to depend on the leverage trend ahead of fiscal 2030, since no maturity falls before February 2031. The primary downside path is a construction downturn met with unchanged shareholder returns, which would raise leverage while liquidity holds. Against typical leveraged-credit issuers in the sector the business profile cannot be compared, because no peer data is supplied. Further analysis would require the annual report for fiscal 2025, the third-quarter report, the credit agreements and a rating or peer set. Fundamental credit completed. Top risk: debt-funded shareholder returns ahead of a construction downturn.
Basis: calculation LQ1; calculation OC2; calculation CN1; calculation CN2; Financial foundation (CP-1); Business & governance (CP-1A); Source readiness (CP-0)

### Reconciliation with earlier modules

Financial foundation quotes USD 644 million of tax receivable liabilities, which is the non-current balance sheet line; Business & governance states the full payable of USD 685 million, including USD 41 million expected within 12 months, and this module uses USD 685 million.
Basis: calculation OC2; Financial foundation (CP-1); Business & governance (CP-1A); 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 20

Business & governance states the August 2026 repricing of the 2031 term loan without a day. The exhibit list of the second-quarter report dates a Seventh Amendment to the term loan credit agreement August 11, 2026, and Financial foundation records that date; the report itself does not label the amendment as the repricing, so the day is stated here as the amendment's date and not as an established repricing date.
Basis: 10-Q_2026-08-02_cnm.htm.jsonl, pages 23, 48; Financial foundation (CP-1); Business & governance (CP-1A)

Business & governance records that the notes indenture is not among the supplied documents; the exhibit list shows an indenture and a first supplemental indenture dated July 1, 2026, incorporated by reference to a Form 8-K filed July 2, 2026, which is not supplied either, so that statement stands. Net debt, principal, liquidity and repurchase figures agree across the earlier modules and the sources.
Basis: 10-Q_2026-08-02_cnm.htm.jsonl, page 47; Financial foundation (CP-1); Business & governance (CP-1A); Source readiness (CP-0)

### cp2.cp_model_strengths_weaknesses - Strengths and weaknesses for the model

<!-- table-id: cp2.cp_model_strengths_weaknesses -->
| direction | rank | label | mechanism | evidence_ids | status | source_id | source_locator | as_of |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STRENGTH | 1 | Liquidity and distant maturities | An undrawn revolver and no final maturity before February 2031 remove near-term refinancing and liquidity risk | LQ1; LQ5; DS5; DS6 | READY | S4 | pages 15, 19, 36 | 2026-08-02 |
| STRENGTH | 2 | Customer breadth and low capital intensity | No customer above 1% of sales and capital expenditure under 1% of sales keep cash flow independent of one account and heavy reinvestment | CX1; CX2 | READY | S2 | pages 14, 108 | 2025-02-02 |
| STRENGTH | 3 | Stable gross margin | Pass-through pricing and rebates hold gross margin within about half a percentage point | GM1; GM2; GM3; GM4 | READY | S4 | page 33 | 2026-08-02 |
| STRENGTH | 4 | Market access on improving terms | Three repricings and a July 2026 refinancing at near-par fair values show lender appetite | RF1; DS14; DS15; DS16 | READY | S4 | pages 16, 17, 18 | 2026-08-02 |
| STRENGTH | 5 | No controlling holder or dividend | Without a sponsor or a dividend there is no extraction path beyond buybacks and tax receivable payments | CP-2C-FLAG-009; CP-2C-FLAG-010 | READY | S2 | pages 7, 75 | 2025-03-25 |
| WEAKNESS | 1 | Shareholder returns above free cash flow | Returns funded with net new debt raise net debt while EBITDA is flat | SR1; SR2; SR3; FC4 | READY | S4 | page 8 | 2026-08-02 |
| WEAKNESS | 2 | Leverage unmeasurable on a trailing basis and rising | Net debt rose from USD 1,877 million to USD 2,253 million in fiscal 2024 and no trailing ratio exists afterwards | LV1; LV2; CV1; CV2 | READY | S2 | pages 97, 106, 108 | 2025-02-02 |
| WEAKNESS | 3 | Operating leverage in construction-linked demand | SG&A rises faster than sales, so a volume decline reaches EBITDA quickly | GR1; GR3; GR4; EB1 | READY | S2 | pages 86, 97 | 2025-02-02 |
| WEAKNESS | 4 | Claims outside debt | Tax receivable payable and leases add claims equal to a large share of net debt, with acceleration on a change of control | OC1; OC2; OC3; OC4 | READY | S4 | pages 6, 20 | 2026-08-02 |
| WEAKNESS | 5 | Rate exposure after the swap ends | Most principal is variable-rate and the swap covers it only to July 2028 | DS7; DS8; DS9; DS12 | READY | S4 | pages 15, 28 | 2026-08-02 |

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| Private construction at 58% of sales | Volume falls feed through sticky SG&A | Analyst Interpretation | EBITDA falls faster than sales | SG&A +15.79% against sales +11.03% and operating income -2.84% in fiscal 2024 (10-K_2025-02-02_cnm.htm.jsonl, page 86; calculation GR1; calculation GR3; calculation GR4) |
| Seasonal working capital build | Absorbs cash in the first half | Documentary Fact | Revolver is the seasonal backstop | Five lines absorbed USD 242 million in the first half (10-Q_2026-08-02_cnm.htm.jsonl, page 8; calculation WC1); cash flow lower in the first two quarters (10-K_2025-02-02_cnm.htm.jsonl, page 81) |
| Gross margin steady near 27% | Pass-through pricing and rebates | Management Language | Margin cushion for EBITDA | Management attributes the gain to purchasing and pricing (10-Q_2026-08-02_cnm.htm.jsonl, page 34; calculation GM4) |
| Customer base with no account above 1% | Limits single-account loss | Documentary Fact | Stable revenue base | Top 50 about 10% of sales (10-K_2025-02-02_cnm.htm.jsonl, page 14) |
| Capital expenditure at 0.47% of sales | Leaves cash for debt service or returns | Documentary Fact | Free cash flow flexibility | Fiscal 2024 spending USD 35 million (10-K_2025-02-02_cnm.htm.jsonl, page 108; calculation CX1) |
| Repurchases and tax payments above FCF | Financed by net new debt | Documentary Fact | Net debt rises | USD 299 million against free cash flow of USD 112 million; net new debt USD 293 million (10-Q_2026-08-02_cnm.htm.jsonl, page 8; calculation SR1; calculation FC4; calculation SR3) |
| Net debt up on flat EBITDA | Raises net debt to EBITDA | Documentary Fact | Leverage 2.11x to 2.49x | Net debt USD 1,877 million to USD 2,253 million in fiscal 2024 (Financial foundation (CP-1); calculation LV1; calculation LV2) |
| No final maturity before February 2031 | Defers refinancing need | Documentary Fact | Low refinancing risk near term | Scheduled principal before fiscal 2031 is 3.11% of principal (10-Q_2026-08-02_cnm.htm.jsonl, pages 15, 19; calculation DS5; calculation DS6) |
| Variable-rate debt at 69.73% of principal | Interest cost follows Term SOFR | Documentary Fact | Cash interest sensitivity | USD 1,728 million variable-rate; swap covers USD 1,500 million to 2028-07-27 (10-Q_2026-08-02_cnm.htm.jsonl, page 28; calculation DS8; calculation DS9) |
| Swap ending July 2028 | Leaves all variable-rate debt open | Analyst Interpretation | USD 17.28 million per 1 pp | Annual cost of a 1 percentage point rise on USD 1,728 million (10-Q_2026-08-02_cnm.htm.jsonl, page 28; calculation DS12) |
| Tax receivable payable USD 685 million | Pays 85% of tax benefits to former owners | Documentary Fact | Cash leakage and change-of-control claim | USD 41 million expected within 12 months (10-Q_2026-08-02_cnm.htm.jsonl, page 20; Business & governance (CP-1A); calculation OC2) |
| Guidance: cash flow 60% to 70% of EBITDA | Implies a second-half release | Management Language | Debt service funded in the second half | Implied second-half operating cash flow USD 426 million to USD 542 million (EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5; calculation GL6; calculation GL7) |
| Credit agreements and borrowing base absent | Headroom cannot be measured | Insufficient Information | Liquidity conclusion is bounded | Only covenant summaries and a compliance statement exist (10-Q_2026-08-02_cnm.htm.jsonl, pages 18, 19) |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 41 |
| Calculated | 44 |
| Assumption-Based | 3 |
| Analyst Inference | 11 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 7 |
| Fields present | 21 |
| Fields total | 24 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 5 |

## Calculations

| ID | Calculation | Inputs | Result | Unit | Source |
| --- | --- | --- | --- | --- | --- |
| ND1 | Net debt at carrying value, 2024-01-28: debt less cash | 1,878 - 1 | 1,877 | US$m | Financial foundation (CP-1); 10-K_2025-02-02_cnm.htm.jsonl, page 106 |
| ND2 | Net debt at carrying value, 2025-02-02 | 2,261 - 8 | 2,253 | US$m | Financial foundation (CP-1); 10-K_2025-02-02_cnm.htm.jsonl, page 106 |
| ND3 | Net debt at carrying value, 2026-02-01 | 2,148 - 220 | 1,928 | US$m | Financial foundation (CP-1); 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 |
| ND4 | Net debt at carrying value, 2026-08-02 | 2,449 - 312 | 2,137 | US$m | Financial foundation (CP-1); 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 |
| PF1 | Pro forma net debt at 2026-08-02 for USD 11 million of repurchases after the quarter end | 2,137 + 11 | 2,148 | US$m | Financial foundation (CP-1); EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1 |
| LV1 | Net debt / reported EBITDA, fiscal 2023 | 1,877 / 889 | 2.11 | x | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 106; calculation ND1 |
| LV2 | Net debt / reported EBITDA, fiscal 2024 | 2,253 / 905 | 2.49 | x | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 106; calculation ND2 |
| CV1 | Reported EBITDA / cash interest paid, fiscal 2023 | 889 / 105 | 8.47 | x | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 108 |
| CV2 | Reported EBITDA / cash interest paid, fiscal 2024 | 905 / 197 | 4.59 | x | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 108 |
| HC1 | Adjusted EBITDA / interest expense, six months to 2026-08-02 | 500 / 59 | 8.47 | x | 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 42 |
| HC2 | Adjusted EBITDA / interest expense, six months to 2025-08-03 | 490 / 61 | 8.03 | x | 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 42 |
| HC3 | Adjusted EBITDA / cash interest paid, six months to 2026-08-02 | 500 / 59 | 8.47 | x | 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 42 |
| HC4 | Adjusted EBITDA / cash interest paid, six months to 2025-08-03 | 490 / 49 | 10.00 | x | 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 42 |
| GL1 | Pro forma net debt / low end of fiscal 2026 Adjusted EBITDA guidance | 2,148 / 950 | 2.26 | x | calculation PF1; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5 |
| GL2 | Pro forma net debt / midpoint of fiscal 2026 Adjusted EBITDA guidance | 2,148 / ((950 + 980) / 2 = 965) | 2.23 | x | calculation PF1; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5 |
| GL3 | Pro forma net debt / high end of fiscal 2026 Adjusted EBITDA guidance | 2,148 / 980 | 2.19 | x | calculation PF1; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5 |
| GL4 | Operating cash flow implied by guidance, low end: 60% of USD 950 million | 950 x 0.60 | 570 | US$m | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5 |
| GL5 | Operating cash flow implied by guidance, high end: 70% of USD 980 million | 980 x 0.70 | 686 | US$m | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5 |
| GL6 | Second-half operating cash flow implied by guidance, low end | 570 - 144 | 426 | US$m | calculation GL4; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| GL7 | Second-half operating cash flow implied by guidance, high end | 686 - 144 | 542 | US$m | calculation GL5; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| GL8 | Guided Adjusted EBITDA growth over fiscal 2024, low end | 950 / 930 - 1 | 2.15 | % | 10-K_2025-02-02_cnm.htm.jsonl, page 97; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5 |
| GL9 | Guided Adjusted EBITDA growth over fiscal 2024, high end | 980 / 930 - 1 | 5.38 | % | 10-K_2025-02-02_cnm.htm.jsonl, page 97; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5 |
| EM1 | Adjusted EBITDA margin, fiscal 2023 | 910 / 6,702 | 13.58 | % | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 106 |
| EM2 | Adjusted EBITDA margin, fiscal 2024 | 930 / 7,441 | 12.50 | % | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 106 |
| EM3 | Adjusted EBITDA margin, six months to 2025-08-03 | 490 / 4,004 | 12.24 | % | 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 42 |
| EM4 | Adjusted EBITDA margin, six months to 2026-08-02 | 500 / 4,055 | 12.33 | % | 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 42 |
| GM1 | Gross profit / net sales, fiscal 2023 | 1,818 / 6,702 | 27.13 | % | 10-K_2025-02-02_cnm.htm.jsonl, page 86 |
| GM2 | Gross profit / net sales, fiscal 2024 | 1,980 / 7,441 | 26.61 | % | 10-K_2025-02-02_cnm.htm.jsonl, page 86 |
| GM3 | Gross profit / net sales, six months to 2025-08-03 | 1,070 / 4,004 | 26.72 | % | 10-Q_2026-08-02_cnm.htm.jsonl, page 33 |
| GM4 | Gross profit / net sales, six months to 2026-08-02 | 1,093 / 4,055 | 26.95 | % | 10-Q_2026-08-02_cnm.htm.jsonl, page 33 |
| CN1 | Operating cash flow / Adjusted EBITDA, fiscal 2023 | 1,069 / 910 | 117.47 | % | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 108 |
| CN2 | Operating cash flow / Adjusted EBITDA, fiscal 2024 | 621 / 930 | 66.77 | % | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 108 |
| CN3 | Operating cash flow / Adjusted EBITDA, six months to 2025-08-03 | 111 / 490 | 22.65 | % | 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 42 |
| CN4 | Operating cash flow / Adjusted EBITDA, six months to 2026-08-02 | 144 / 500 | 28.80 | % | 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 42 |
| GR1 | Net sales growth, fiscal 2024 over fiscal 2023 | 7,441 / 6,702 - 1 | 11.03 | % | 10-K_2025-02-02_cnm.htm.jsonl, pages 86, 87 |
| GR2 | Net sales growth, six months to 2026-08-02 over the prior-year six months | 4,055 / 4,004 - 1 | 1.27 | % | 10-Q_2026-08-02_cnm.htm.jsonl, page 33 |
| GR3 | SG&A growth, fiscal 2024 over fiscal 2023 | 1,078 / 931 - 1 | 15.79 | % | 10-K_2025-02-02_cnm.htm.jsonl, page 86 |
| GR4 | Operating income change, fiscal 2024 against fiscal 2023 | 719 / 740 - 1 | -2.84 | % | 10-K_2025-02-02_cnm.htm.jsonl, page 86 |
| GR5 | Fire protection net sales change, fiscal 2024 against fiscal 2023 | 596 / 688 - 1 | -13.37 | % | 10-K_2025-02-02_cnm.htm.jsonl, page 86 |
| SN1 | Gross profit from each 1 percentage point of gross margin on six-month net sales | 4,055 x 1% | 40.55 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 33 |
| SN2 | That amount as a share of six-month Adjusted EBITDA | 40.55 / 500 | 8.11 | % | calculation SN1; 10-Q_2026-08-02_cnm.htm.jsonl, page 42 |
| SN3 | Gross profit lost per 1% fall in six-month net sales at the 26.95% gross margin | 4,055 x 1% x 26.95% | 10.93 | US$m | calculation GM4 |
| SN4 | That amount as a share of six-month Adjusted EBITDA, if SG&A did not fall | 10.93 / 500 | 2.19 | % | calculation SN3; 10-Q_2026-08-02_cnm.htm.jsonl, page 42 |
| CX1 | Capital expenditures / net sales, fiscal 2024 | 35 / 7,441 | 0.47 | % | 10-K_2025-02-02_cnm.htm.jsonl, pages 86, 108 |
| CX2 | Capital expenditures / net sales, six months to 2026-08-02 | 32 / 4,055 | 0.79 | % | 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 33 |
| NM1 | Non-municipal share of fiscal 2024 net sales: non-residential plus residential, management estimates | 38 + 20 | 58 | % | 10-K_2025-02-02_cnm.htm.jsonl, pages 8, 9 |
| MS1 | Fiscal 2024 net sales as a share of the USD 39 billion addressable market | 7,441 / 39,000 | 19.08 | % | 10-K_2025-02-02_cnm.htm.jsonl, pages 15, 86 |
| FC1 | Free cash flow, fiscal 2023: operating cash flow less capital expenditures | 1,069 - 39 | 1,030 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 108 |
| FC2 | Free cash flow, fiscal 2024 | 621 - 35 | 586 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 108 |
| FC3 | Free cash flow, six months to 2025-08-03 | 111 - 23 | 88 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| FC4 | Free cash flow, six months to 2026-08-02 | 144 - 32 | 112 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| WC1 | Working capital change, six months to 2026-08-02: five lines of the cash flow statement | -397 + -155 + -1 + 301 + 10 | -242 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| WC2 | Working capital change, six months to 2025-08-03 | -300 + -152 + -5 + 196 + 6 | -255 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| SR1 | Repurchases plus tax receivable payments, six months to 2026-08-02 | 257 + 42 | 299 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| SR2 | Free cash flow after those payments | 112 - 299 | -187 | US$m | calculation FC4; calculation SR1 |
| SR3 | Net new debt, six months to 2026-08-02: issuance less repayments less issuance costs | 929 - 617 - 19 | 293 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| LQ1 | Liquidity at 2026-08-02: cash plus revolver availability | 312 + 1,226 | 1,538 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 36; Financial foundation (CP-1) |
| LQ2 | Revolver availability: commitment less letters of credit | 1,250 - 24 | 1,226 | US$m | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 36 |
| LQ3 | Near-term fixed claims: current debt maturities plus tax receivable payments within 12 months | 17 + 41 | 58 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 20 |
| LQ5 | Liquidity against the first-half working capital outflow | 1,538 / 242 | 6.36 | x | calculation LQ1; calculation WC1 |
| RF1 | New debt raised on 2026-07-01: 2033 term loan plus 2034 notes | 800 + 750 | 1,550 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 16, 18; Business & governance (CP-1A) |
| DS1 | Debt principal at 2026-08-02: 2031 loan, 2033 loan and 2034 notes | 928 + 800 + 750 | 2,478 | US$m | Financial foundation (CP-1); 10-Q_2026-08-02_cnm.htm.jsonl, page 15 |
| DS2 | 2031 term loan share of principal | 928 / 2,478 | 37.45 | % | calculation DS1 |
| DS3 | 2033 term loan share of principal | 800 / 2,478 | 32.28 | % | calculation DS1 |
| DS4 | 2034 notes share of principal | 750 / 2,478 | 30.27 | % | calculation DS1 |
| DS5 | Scheduled principal payments before fiscal 2031: remainder of fiscal 2026 to fiscal 2030 | 9 + 17 + 17 + 17 + 17 | 77 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 19 |
| DS6 | Those payments as a share of principal | 77 / 2,478 | 3.11 | % | calculation DS5; calculation DS1 |
| DS7 | Variable-rate debt: 2031 loan plus 2033 loan | 928 + 800 | 1,728 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 15, 28 |
| DS8 | Variable-rate debt as a share of principal | 1,728 / 2,478 | 69.73 | % | calculation DS7; calculation DS1 |
| DS9 | Share of variable-rate debt covered by the USD 1,500 million swap to 2028-07-27 | 1,500 / 1,728 | 86.81 | % | 10-Q_2026-08-02_cnm.htm.jsonl, page 28; calculation DS7 |
| DS10 | Variable-rate debt not covered by the swap | 1,728 - 1,500 | 228 | US$m | calculation DS7 |
| DS12 | Annual interest on a 1 percentage point rise on all variable-rate debt once the swap ends | 1,728 x 1% | 17.28 | US$m | calculation DS7 |
| DS14 | Fair value of the 2034 notes as a share of principal | 747 / 750 | 99.60 | % | 10-Q_2026-08-02_cnm.htm.jsonl, page 18 |
| DS15 | Fair value of the 2033 term loan as a share of principal | 798 / 800 | 99.75 | % | 10-Q_2026-08-02_cnm.htm.jsonl, page 16 |
| DS16 | Fair value of the 2031 term loan as a share of principal | 928 / 928 | 100.00 | % | 10-Q_2026-08-02_cnm.htm.jsonl, page 17 |
| OC1 | Operating lease liabilities at 2026-08-02: current plus non-current | 79 + 221 | 300 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| OC2 | Tax receivable payable at 2026-08-02: non-current plus expected within 12 months | 644 + 41 | 685 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 20; Business & governance (CP-1A) |
| OC3 | Claims outside debt: lease liabilities plus tax receivable payable | 300 + 685 | 985 | US$m | calculation OC1; calculation OC2 |
| OC4 | Those claims as a share of net debt at 2026-08-02 | 985 / 2,137 | 46.09 | % | calculation OC3; calculation ND4 |
| EB1 | Change in Adjusted EBITDA, fiscal 2022 to fiscal 2024 | 930 / 935 - 1 | -0.53 | % | 10-K_2025-02-02_cnm.htm.jsonl, page 97 |
| NC3 | Change in net debt, 2025-02-02 to 2026-02-01 | 1,928 - 2,253 | -325 | US$m | calculation ND2; calculation ND3 |

## Gaps

- High severity: The annual report for the year ended February 1, 2026 is not supplied, so fiscal 2025 EBITDA, cash interest and operating cash flow are missing and no trailing leverage or cover can be stated; leverage is shown at fiscal 2024 and as an indicator on guidance. The action that would close it is that annual report or the third-quarter report.
  Basis: Financial foundation (CP-1); 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6
- Medium severity: The credit agreements, the borrowing base and the compliance certificates are not supplied, so covenant headroom, the revolver's true availability in a downturn and restricted-payment capacity are not measured. The action that would close it is the executed agreements and certificates.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, pages 18, 19, 36; Business & governance (CP-1A)
- Medium severity: No credit rating, market spread or peer set is supplied, so the business and financial profile are not compared with other leveraged issuers and the notes' market pricing is known only through fair value at par. The action that would close it is rating reports and a peer benchmark.
  Basis: Source readiness (CP-0); 10-Q_2026-08-02_cnm.htm.jsonl, page 18
- Low severity: The fiscal 2026 outlook is management's guidance and gives no capital expenditure or interest guidance, so free cash flow and net debt at the fiscal year end cannot be projected from it; the implied second-half operating cash flow is arithmetic on guidance. The action that would close it is the third-quarter report.
  Basis: EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5; calculation GL6; calculation GL7
- Low severity: The end-market split is a fiscal 2024 management estimate and the product category was renamed in 2026, and no contract length, renewal or churn data is supplied, so revenue durability is judged on customer breadth and category history. The action that would close it is the fiscal 2025 annual report.
  Basis: 10-K_2025-02-02_cnm.htm.jsonl, pages 6, 8, 9; 10-Q_2026-08-02_cnm.htm.jsonl, page 13
- Low severity: Maintenance and growth capital expenditure and the cost of the cost actions are not disclosed, so cost and capex flexibility is judged on total spending and the SG&A trend. No action closes this from the issuer's public statements.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 34
- Low severity: The latest supplied document is dated 2026-09-09, 70 days before the as-of date of 2026-11-18, and no third-quarter material is supplied; nothing after that document is used as fact. The action that would close it is the third-quarter report.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, page 48; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1

## Next module

The orchestrator selects the next module.
