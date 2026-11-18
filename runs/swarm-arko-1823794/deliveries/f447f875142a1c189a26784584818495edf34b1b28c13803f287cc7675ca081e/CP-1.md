# ARKO Corp. — Financial foundation

## Request

Issuer: ARKO Corp., issuer id arko-1823794, as of 2026-11-18, credit snapshot pathway. Scope: statements, net debt, liquidity, maturities and credit metrics from the five supplied filings, with every balance sheet date to 2026-09-30 and last-twelve-months figures to that date. The module draws no recommendation.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_arko_arko-20241231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-26 | 30099d5050db6ac0368f88b28d857a9a9d746a674ed2f8c95454cfa27ad6e5d5 | 2024 balance sheet components and debt note, 2024 liquidity components and the FY2024 Adjusted EBITDA reconciliation; cross-check of FY2024 statement columns. |
| 10-K_2025-12-31_arko_arko-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-25 | 21af2950aeb046d875c8fbf588a55748c51fe126978fdd1da364c46cc3697084 | Audited FY2025 and FY2024 statements, debt note and maturity schedule, Adjusted EBITDA reconciliation, liquidity, covenant description, segment note and parent-only statements. |
| 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-07 | 4fd1f1f4e34e8322139ef7177074fe32c134dcdef8140a6ffe107c26a5fa80fd | Balance sheet and debt note at 2026-03-31. |
| 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-08-07 | 4cbf20d756410398d38970ce1e4f247d1143b165fdcd63d3abb7dff4057dcd2d | Balance sheet and debt note at 2026-06-30. |
| 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-05 | 28a3dbf93c9e062092f7330877b3e6a4e6352a114e43313fda25dd33f69ea2c8 | Latest balance sheet, quarter and nine-month statements, debt and credit facility notes, liquidity, Adjusted EBITDA reconciliation, segment note and subsequent-event disclosures. |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | Source readiness (CP-0) | 4934282bdfbbbc0489c8f0295d56af0d9cb6ce8374b76c0d77feb2eb83b03774 | Source coverage, document dates and limitations of the five filings. |

## Findings

### Bottom line

ARKO's leverage fell to 2.75x debt to reported EBITDA at 30 September 2026 after 2026 stock-offering proceeds repaid bank debt, but interest cover of 3.01x and near-zero free cash flow leave creditors reliant on liquidity and refinancing.
Basis: calculation C27; calculation C29; calculation C12; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 21

Net debt to reported EBITDA is 1.94x. On the issuer's adjusted EBITDA the two ratios are 2.36x and 1.67x, but add-backs equal 13.94% of adjusted EBITDA on a last-twelve-months basis. Liquidity is about USD 1.0 billion, but the only maturity table printed predates the 2026 repayments, so the current maturity wall is not established.
Basis: calculation C28; calculation C30; calculation C31; calculation C52; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 57–58; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 134

### Analysis: leverage and cover

Reported leverage is lower mainly because debt fell, not because earnings rose. The carrying value of total debt dropped from USD 912.145 million at the end of 2025 to USD 624.743 million at 30 September 2026, as proceeds of the 2026 stock offering by the subsidiary ARKO Petroleum Corp. repaid part of the Capital One line and the company bought back USD 100.0 million of Senior Notes for about USD 91.858 million. Over the same window last-twelve-months reported EBITDA slipped to USD 227.442 million from USD 236.861 million, because a gain of about USD 20.8 million on a 2025 sale-leaseback leaves the twelve-month window, so the move in debt to EBITDA from 3.85x to 2.75x is a debt-reduction effect.
Basis: calculation C68; calculation C69; calculation C67; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 19–21; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76

Adjusted EBITDA flatters the picture. Add-backs are USD 36.839 million over the twelve months, of which share-based compensation is USD 19.289 million and acquisition, divestiture and disposal items are USD 16.233 million; reported EBITDA, the primary measure here, gives cash interest cover of 3.01x against 3.50x on the adjusted figure. Cover is thin for a business with 44.0% of its debt at variable rates, although a one percentage point rise in rates adds only about USD 2.8 million of annual debt service against USD 75.590 million of cash interest paid over the twelve months.
Basis: calculation C50; calculation C44; calculation C53; calculation C09; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 55–56; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 64

### Analysis: cash flow and free cash flow

Free cash flow after capital spending was close to zero over the last twelve months: operating cash flow of USD 135.334 million less purchases of property and equipment of USD 134.590 million leaves USD 0.744 million, against USD 65.299 million in 2025 and USD 107.944 million in 2024. The fall is sharpest in the 2026 nine months, when operating cash flow of USD 90.758 million, against USD 148.009 million a year earlier, did not cover purchases of property and equipment of USD 104.945 million, with trade receivables up USD 101.894 million and inventory up USD 31.938 million, partly offset by payables up USD 56.209 million. The filing attributes the decline to higher fuel prices, the day of the week on which the quarter ended and about USD 14.9 million lower dealer deposits received. Part of this is working capital that can reverse, but the company also paid dividends of USD 10.096 million on common stock, USD 4.301 million on preferred stock and USD 9.553 million to outside holders of the subsidiary in the nine months.
Basis: calculation C12; calculation C13; calculation C14; calculation C84; calculation C81; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 59

### Analysis: liquidity and refinancing

Liquidity is ample against near-term needs: cash of USD 183.804 million plus undrawn committed facilities of USD 845.200 million, which the company describes as about USD 1.0 billion in total. The undrawn figure takes the PNC lines at their full size less USD 9.0 million of letters of credit, because their borrowing-base availability is not stated at 30 September 2026; those lines depend on receivables and inventory, so this part is a ceiling. The Capital One availability of USD 621.400 million is stated net of USD 178.1 million drawn and USD 0.5 million of letters of credit.
Basis: calculation C37; calculation C38; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 57–58; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 61; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 63

The maturity wall is less certain. The only printed schedule, at the end of 2025, places USD 395.694 million in 2028, which is the Capital One line maturing on 2028-05-05, and USD 453.298 million in 2029, which is the Senior Notes due 2029-11-15. Since then the company repaid USD 206.7 million of the Capital One line, repurchased USD 100.0 million of Senior Notes and refinanced its M&T term loans to 2031, so both amounts are now lower, but no updated schedule is printed. The PNC lines mature on the earliest of 2031-02-13 and six months before the Capital One line or the Senior Notes mature, subject to conditions the filing mentions, which on the printed dates is 2027-11-05, so a Capital One extension is needed to keep PNC access beyond 2027.
Basis: calculation C39; calculation C83; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 134; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 20–21

### Analysis: perimeter, definitions and data quality

The statements consolidate all of ARKO Petroleum Corp. although the company holds 73.6% of its economic interests, so 26.4% of that subsidiary's earnings and dividends belong to outside holders, while the Capital One line sits at its GPMP subsidiary and the Senior Notes at the parent. Total debt here is the balance-sheet carrying value of the four debt lines and excludes finance lease liabilities of USD 201.436 million, which would lift debt to EBITDA to 3.63x, sale-leaseback financial liabilities of USD 126.435 million at the end of 2025 that are carried in other liabilities, and USD 100.0 million of Series A redeemable preferred stock. Cash excludes USD 12.995 million of restricted cash and USD 8.337 million of short-term investments, while the cash flow statement's closing cash includes restricted cash.
Basis: calculation C70; calculation C55; calculation C56; calculation C57; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 146–149

A small non-debt funding float also exists: dealer deposits of USD 16.115 million non-current and USD 6.153 million current at the end of 2025, and deferred vendor income of USD 37.026 million non-current and USD 16.475 million current; lower dealer deposits received were one reason nine-month operating cash flow fell. At the parent alone, the 2025 annual report shows cash of USD 2.577 million and loans to subsidiaries of USD 420.0 million against the Senior Notes, so note holders depend on cash moving up from operating subsidiaries, and the Capital One line limits dividends from its borrower to the extent of available cash.
Basis: 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 128–130; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 63

### Analysis: subsequent events and multi-figure events

Three events after 30 September 2026 are stated. The pending purchase of U.S. Petroleum Partners assets by the subsidiary is for about USD 205 million of cash plus inventory at closing and USD 30 million of its Class A stock held in escrow, expected to close later in 2026 and to be funded from existing lines of credit; its effect on net debt is not established because the inventory value is not stated, and it is not blended into any period figure. A common dividend of USD 0.03 per share is payable on 2026-12-03 and a subsidiary dividend of USD 0.50 per share on 2026-11-30, together about USD 9.65 million of cash if paid in full, which would add about 0.04x to net leverage; both are shown as pro forma rows only.
Basis: calculation C75; calculation C76; calculation C77; calculation C79; calculation C82; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 23

The amount of offering proceeds used to repay the Capital One line differs between filings: the 2025 annual report, signed before the underwriters' option was exercised, says about USD 184.0 million, and the 2026 quarterly reports say USD 206.7 million. Both are kept; the later figure is used for 2026 facts.
Basis: 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 134; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 16

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_arko_arko-20241231.htm.jsonl | Annual report, Form 10-K | Year ended 2024-12-31 with 2023 and 2022 comparatives | USD | Thousands | ARKO Corp. consolidated, before the 2026 listing of APC | US GAAP | Tier 1 audited statements | 2024 debt note, 2024 liquidity components, FY2024 Adjusted EBITDA reconciliation | Prepared text flattens tables; FY2024 statement columns taken from the later annual report |
| 10-K_2025-12-31_arko_arko-20251231.htm.jsonl | Annual report, Form 10-K | Year ended 2025-12-31 with 2024 and 2023 comparatives | USD | Thousands | ARKO Corp. consolidated; APC wholly owned at year end; parent-only schedule included | US GAAP | Tier 1 audited statements | FY2024 and FY2025 statements, debt, maturities, covenants, segments | Prepared text flattens tables; covenant levels not printed |
| 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl | Quarterly report, Form 10-Q | Three months ended 2026-03-31 | USD | Thousands | ARKO Corp. consolidated, including non-controlling interest in APC | US GAAP, interim | Tier 2b unaudited without auditor review stated | Balance sheet and debt at 2026-03-31 | Unaudited; tables flattened |
| 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl | Quarterly report, Form 10-Q | Three and six months ended 2026-06-30 | USD | Thousands | ARKO Corp. consolidated, including non-controlling interest in APC | US GAAP, interim | Tier 2b unaudited without auditor review stated | Balance sheet, debt and Adjusted EBITDA at 2026-06-30 | Unaudited; tables flattened |
| 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Quarterly report, Form 10-Q | Three and nine months ended 2026-09-30 | USD | Thousands | ARKO Corp. consolidated, including non-controlling interest in APC | US GAAP, interim | Tier 2b unaudited without auditor review stated | Latest balance sheet, quarter and nine-month statements, liquidity, credit facilities | Unaudited; segment expense tables lose column alignment |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| ARKO Corp. | Issuer of the 5.125% Senior Notes due 2029 and reporting parent; Delaware; Nasdaq: ARKO | 31 December | USD | Thousands | Consolidated, including 100% of APC from 2026-02-13 with non-controlling interests shown separately | US GAAP | FY2024, FY2025, Q1 2026, H1 2026, 9M 2026 and Q3 2026 with comparatives |
| GPM Investments, LLC | Wholly owned operating entity; retail segment; borrower under the PNC and M&T facilities | 31 December | USD | Thousands | Inside ARKO Corp. consolidation; no separate statements supplied | US GAAP | Not supplied: no separate statements |
| ARKO Petroleum Corp. (APC) | Listed subsidiary (Nasdaq: APC); 73.6% economic interest and 93.3% voting power held by ARKO; operates wholesale, fleet fueling and GPMP segments | 31 December | USD | Thousands | Inside ARKO Corp. consolidation from 2026-02-13; no separate statements supplied | US GAAP | Not supplied: no separate statements |
| GPM Petroleum LP (GPMP) | APC subsidiary; borrower under the Capital One Line of Credit | 31 December | USD | Thousands | Inside ARKO Corp. consolidation; segment results only | US GAAP | Segment results in FY2024, FY2025, Q3 and 9M columns |
| Senior Notes guarantors | Certain domestic subsidiaries guarantee the Senior Notes on an unsecured senior basis; the filings do not list them | 31 December | USD | Thousands | Not supplied: no guarantor-only figures | US GAAP | Not supplied: parent-only condensed statements at 2025-12-31 only |

The Senior Notes are issued by ARKO Corp. The subsequent events dated after 2026-09-30 are the pending asset purchase by APC, a common dividend payable 2026-12-03 and an APC dividend payable 2026-11-30; none is blended into a period figure.
Basis: 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 16–19; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 159

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Statements restated from thousands to millions for the money tables, with three decimals | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Unit restatement | USD 624,743 thousand | US$m 624.743 | One money unit for the net debt, chart and register tables; no figure rounded | All money tables |
| Last twelve months to 2026-09-30 built as FY2025 plus 9M 2026 less 9M 2025 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Derived period | FY2025, 9M 2026 and 9M 2025 columns | LTM revenue, EBITDA, Adjusted EBITDA, cash interest, operating cash flow and capex | Rule for interim leverage and cover; every component is available | 2026-09-30 |
| Total Debt set to the sum of the current portion and long-term debt, net, equal to the debt note total | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Debt basis | Long-term debt, current portion 16,155; long-term debt, net 608,588 | Total Debt 624,743 | Balance-sheet carrying value, net of deferred financing costs; finance leases not added | All balance sheet dates |
| Cash & Equivalents set to cash and cash equivalents only | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Cash basis | Cash and cash equivalents 183,804; restricted cash 12,995; short-term investments 8,337 | Cash & Equivalents 183,804 | Net debt uses unrestricted cash; the cash flow statement's closing cash of 196,799 includes restricted cash | All balance sheet dates |
| Net Cash Change set to the three activity totals plus the exchange-rate effect | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Cash flow identity | Operating 90,758; investing -91,708; financing -125,828; exchange effect -137 | Net Cash Change -126,915 | Method definition; closing cash equals opening cash plus the change | 9M 2026 and the other cash flow columns |
| Segment revenue stated as revenue from external customers; inter-segment revenue shown as one eliminated line | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Perimeter | Segment revenues including inter-segment 1,810,004 in Q3 2026 | External revenue by segment summing to consolidated revenue | Segment external revenues add to consolidated revenue; GPMP fuel sales to other segments are eliminated | All columns of the income statement |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Fuel revenue | 6,858,919 | 6,038,934 | 1,599,990 | 2,007,278 | 4,616,448 | 5,407,854 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Merchandise revenue | 1,767,345 | 1,482,454 | 389,727 | 350,964 | 1,144,338 | 1,003,802 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Other revenues, net | 105,698 | 122,083 | 31,116 | 32,251 | 88,471 | 97,246 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Total revenues | 8,731,962 | 7,643,471 | 2,020,833 | 2,390,493 | 5,849,257 | 6,508,902 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Fuel costs | 6,271,696 | 5,479,934 | 1,453,175 | 1,861,705 | 4,195,877 | 4,984,486 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Merchandise costs | 1,187,776 | 982,673 | 258,248 | 228,994 | 760,804 | 657,816 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Site operating expenses | 875,272 | 785,361 | 198,491 | 188,679 | 600,925 | 559,867 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| General and administrative expenses | 162,920 | 165,711 | 40,048 | 40,787 | 122,403 | 124,506 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Depreciation and amortization | 132,414 | 134,451 | 32,944 | 32,762 | 101,433 | 97,303 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Total operating expenses | 8,630,078 | 7,548,130 | 1,982,906 | 2,352,927 | 5,781,442 | 6,423,978 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Other (income) expenses, net | 7,858 | -6,961 | 2,003 | 2,337 | -13,035 | 9,278 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Operating income | 94,026 | 102,302 | 35,924 | 35,229 | 80,850 | 75,646 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Interest and other financial income | 30,591 | 19,531 | 3,340 | 6,685 | 16,397 | 14,407 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Interest and other financial expenses | -97,752 | -92,855 | -23,485 | -17,799 | -69,911 | -57,677 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Income before income taxes | 26,865 | 28,978 | 15,779 | 24,115 | 27,336 | 32,376 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Income tax expense | -6,144 | -6,342 | -2,368 | -9,799 | -6,546 | -14,242 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Income (loss) from equity investment | 124 | 108 | 48 | -11 | 95 | 10 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Net income | 20,845 | 22,744 | 13,459 | 14,305 | 20,885 | 18,144 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Net income attributable to non-controlling interests | Not supplied: the source prints a dash | Not supplied: the source prints a dash | Not supplied: the source prints a dash | 3,609 | Not supplied: the source prints a dash | 7,974 | USD thousands | Reported; a dash in the source is not read as zero | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| Net income attributable to ARKO Corp. | 20,845 | 22,744 | 13,459 | 10,696 | 20,885 | 10,170 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| EBITDA (Reported) | 226,564 | 236,861 | 68,916 | 67,980 | 182,378 | 172,959 | USD thousands | Reported by the issuer as net income including non-controlling interests plus net interest, tax and depreciation and amortization; unadjusted | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| EBITDA (Adjusted) | 248,860 | 248,653 | 75,161 | 75,664 | 182,954 | 198,582 | USD thousands | Issuer-adjusted: reported EBITDA plus acquisition and divestiture costs, APC IPO costs, disposal losses and impairments, share-based compensation, equity-investment income, contingent consideration, litigation settlement and other items; non-GAAP | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| Segment revenue from external customers: Retail | 5,342,544 | 4,377,135 | 1,148,847 | 1,223,276 | 3,371,416 | 3,395,775 | USD thousands | Reported, Note on segments; revenue from external customers | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Segment revenue from external customers: Wholesale | 2,829,009 | 2,753,108 | 739,687 | 974,834 | 2,088,703 | 2,599,899 | USD thousands | Reported, Note on segments; revenue from external customers | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Segment revenue from external customers: Fleet Fueling | 524,597 | 483,779 | 124,932 | 186,441 | 365,822 | 494,229 | USD thousands | Reported, Note on segments; revenue from external customers | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Segment revenue from external customers: GPMP | 4,462 | 1,576 | 194 | 50 | 1,389 | 268 | USD thousands | Reported, Note on segments; revenue from external customers | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Segment revenue from external customers: All Other | 31,350 | 27,873 | 7,173 | 5,892 | 21,927 | 18,731 | USD thousands | Reported, Note on segments; revenue from external customers | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Inter-segment revenues eliminated on consolidation | 5,639,020 | 4,868,434 | 1,299,223 | 1,810,004 | 3,737,045 | 4,817,043 | USD thousands | Reported total of inter-segment revenues, eliminated | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Segment operating income (loss): Retail | 282,404 | 268,365 | 77,470 | 73,730 | 197,991 | 200,244 | USD thousands | Reported, Note on segments; segment measure before unallocated costs | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Segment operating income (loss): Wholesale | 79,811 | 89,396 | 24,128 | 25,823 | 66,000 | 73,718 | USD thousands | Reported, Note on segments; segment measure before unallocated costs | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Segment operating income (loss): Fleet Fueling | 48,507 | 48,596 | 12,211 | 13,294 | 36,282 | 38,536 | USD thousands | Reported, Note on segments; segment measure before unallocated costs | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Segment operating income (loss): GPMP | 99,038 | 92,910 | 24,308 | 26,930 | 70,182 | 79,116 | USD thousands | Reported, Note on segments; segment measure before unallocated costs | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Segment operating income (loss): All Other | -449 | -52 | -229 | 484 | -211 | 943 | USD thousands | Reported, Note on segments; segment measure before unallocated costs | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| Corporate and eliminations, operating income | -415,285 | -396,913 | -101,964 | -105,032 | -289,394 | -316,911 | USD thousands | Calculated: operating income less the five segment operating incomes; covers intercompany GPMP charges and unallocated site, administrative and depreciation costs (calculation C74) | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 20,845 | 22,744 | 20,885 | 18,144 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Depreciation and amortization | 132,414 | 134,451 | 101,433 | 97,303 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Net Cash from Operating Activities | 221,858 | 192,585 | 148,009 | 90,758 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Purchase of property and equipment | -113,914 | -127,286 | -97,641 | -104,945 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Proceeds from sale of property and equipment | 53,549 | 7,198 | 3,868 | 6,048 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Business and asset acquisitions, net of cash | -54,549 | -242 | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | USD thousands | Reported where the period's statement prints the line | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Net Cash from Investing Activities | -114,858 | -119,792 | -93,725 | -91,708 | USD thousands | Reported; outflow negative | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Receipt of long-term debt, net | 47,556 | 38,838 | 37,302 | 24,431 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Repayment of debt | -26,357 | -24,102 | -18,624 | -225,064 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Repurchase of long-term debt | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | -91,858 | USD thousands | Reported where the period's statement prints the line | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Principal payments on financing leases | -4,940 | -5,704 | -4,315 | -11,608 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Issuance of shares in APC IPO, net of underwriting discounts and commissions | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | 210,426 | USD thousands | Reported where the period's statement prints the line | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Payment of APC IPO costs | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | -3,651 | USD thousands | Reported where the period's statement prints the line | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Common stock repurchased | -31,989 | -27,964 | -20,773 | -4,554 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Dividends paid to non-controlling interests | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | Not supplied: the line is not printed in this period's statement | -9,553 | USD thousands | Reported where the period's statement prints the line | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Dividends paid on common stock | -14,015 | -13,622 | -10,288 | -10,096 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Dividends paid on redeemable preferred stock | -5,750 | -5,750 | -4,301 | -4,301 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Net Cash from Financing Activities | -56,004 | -41,514 | -20,999 | -125,828 | USD thousands | Reported; outflow negative | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| FX Effect on Cash | -9 | 27 | 36 | -137 | USD thousands | Reported effect of exchange rate on cash, cash equivalents and restricted cash | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Net Cash Change | 50,987 | 31,306 | 33,321 | -126,915 | USD thousands | Calculated: activity totals plus the exchange-rate effect; equals the printed change plus the effect | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Opening Cash | 241,421 | 292,408 | 292,408 | 323,714 | USD thousands | Reported; includes restricted cash | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Closing Cash | 292,408 | 323,714 | 325,729 | 196,799 | USD thousands | Reported; includes restricted cash | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Cash Interest Paid | 92,103 | 87,269 | 59,919 | 48,240 | USD thousands | Reported supplementary cash paid for interest; operating-activity classification under US GAAP | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Cash received for interest | 9,485 | 10,750 | 7,936 | 6,059 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |
| Cash paid for taxes, net of refunds | 9,659 | 5,041 | 5,080 | 6,188 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 99–101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 8–9 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Cash and cash equivalents | 261,758 | 305,004 | 272,115 | 245,556 | 183,804 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Restricted cash | 30,650 | 18,710 | 17,029 | 15,012 | 12,995 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Short-term investments | 5,330 | 6,465 | 7,212 | 8,166 | 8,337 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Trade receivables, net | 95,832 | 87,331 | 160,336 | 151,070 | 188,374 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Inventory | 231,225 | 190,707 | 206,335 | 208,475 | 222,645 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Other current assets | 97,413 | 109,520 | 106,649 | 116,237 | 111,729 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Total current assets | 722,208 | 717,737 | 769,676 | 744,516 | 727,884 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Property and equipment, net | 747,548 | 739,570 | 750,615 | 759,328 | 778,617 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Right-of-use assets under operating leases | 1,386,244 | 1,340,450 | 1,328,394 | 1,336,883 | 1,316,436 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Right-of-use assets under financing leases, net | 157,999 | 144,601 | 135,289 | 132,959 | 130,653 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Goodwill | 299,973 | 299,973 | 299,973 | 299,973 | 299,973 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Intangible assets, net | 182,355 | 160,136 | 154,596 | 148,897 | 143,397 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Equity investment | 3,009 | 3,117 | 3,136 | 132 | 118 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Deferred tax asset | 67,689 | 62,625 | 68,101 | 63,549 | 57,772 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Other non-current assets | 53,633 | 66,603 | 68,984 | 70,738 | 71,985 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Total Assets | 3,620,658 | 3,534,812 | 3,578,764 | 3,556,975 | 3,526,835 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Long-term debt, current portion | 12,944 | 36,676 | 13,398 | 16,014 | 16,155 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Accounts payable | 190,212 | 156,616 | 202,266 | 198,850 | 216,215 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Other current liabilities | 159,239 | 148,340 | 173,317 | 162,346 | 174,046 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Operating leases, current portion | 71,580 | 78,162 | 79,783 | 80,504 | 82,810 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Financing leases, current portion | 11,515 | 13,239 | 6,310 | 6,445 | 6,584 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Total current liabilities | 445,490 | 433,033 | 475,074 | 464,159 | 495,810 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Long-term debt, net | 868,055 | 875,469 | 691,048 | 658,498 | 608,588 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Asset retirement obligation | 87,375 | 89,304 | 89,742 | 89,815 | 88,656 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Operating leases | 1,408,293 | 1,374,101 | 1,364,430 | 1,376,279 | 1,357,477 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Financing leases | 211,051 | 199,691 | 198,099 | 196,462 | 194,852 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Other non-current liabilities | 223,528 | 195,975 | 200,312 | 200,970 | 202,595 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Total Liabilities | 3,243,792 | 3,167,573 | 3,018,705 | 2,986,183 | 2,947,978 | USD thousands | Reported; excludes Series A redeemable preferred stock | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Temporary Equity | 100,000 | 100,000 | 100,000 | 100,000 | 100,000 | USD thousands | Reported Series A redeemable preferred stock, redemption value 100,000 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Total stockholders' equity | 276,866 | 267,239 | 395,406 | 402,092 | 412,625 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Non-controlling interests | Not supplied: the filing prints no non-controlling interest line at this date | Not supplied: the source prints a dash | 64,653 | 68,700 | 66,232 | USD thousands | Reported | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Total Equity | 276,866 | 267,239 | 460,059 | 470,792 | 478,857 | USD thousands | Reported total equity including non-controlling interests | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Total Debt | 880,999 | 912,145 | 704,446 | 674,512 | 624,743 | USD thousands | Calculated: long-term debt, current portion plus long-term debt, net; equals the debt note total; Senior Notes, M&T debt, Capital One line and insurance premium notes; finance leases are separate lines and not added | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |
| Cash & Equivalents | 261,758 | 305,004 | 272,115 | 245,556 | 183,804 | USD thousands | Reported cash and cash equivalents; restricted cash and short-term investments excluded | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, pages 4–5; 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, pages 4–5; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 5–6 |

Net debt, leverage and cover tables follow in the order the method states.

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 5.125% Senior Notes due 2029 | Senior unsecured notes | 347,491 | 350,000 | Not applicable | Not applicable | Unsecured; guaranteed on an unsecured senior basis by certain domestic subsidiaries | Equal in right of payment with senior unsecured debt; effectively subordinated to secured debt to the extent of collateral; structurally subordinated to non-guarantor subsidiaries | USD | 347,491 | Not applicable | 5.125% | Fixed | Not applicable | Not applicable | Not applicable | 2029-11-15 | 0 | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 27; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 130–132 |
| PNC GPM Line of Credit | Asset-based revolving line (GPM) | 0 | 0 | 0 | 130,000 | Secured; PNC holds a first priority lien on receivables, inventory and bank-account rights | Senior secured on its own collateral, ahead of the unsecured Senior Notes; rank against the other secured facilities is not stated | USD | 0 | Not applicable | Term SOFR plus 1.25% to 1.75% | Floating | Term SOFR | 125 to 175 | Not applicable | Earliest of 2031-02-13, six months before the Senior Notes maturity and six months before the Capital One maturity | Not applicable | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 61; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 132 |
| PNC APC Line of Credit | Asset-based revolving line (APC) | 0 | 0 | 0 | 84,000 | Secured; terms substantially similar to the GPM line | Senior secured on its own collateral, ahead of the unsecured Senior Notes; rank against the other secured facilities is not stated | USD | 0 | Not applicable | Term SOFR plus 1.25% to 1.75% | Floating | Term SOFR | 125 to 175 | Not applicable | Same earliest-of test as the GPM line | Not applicable | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 61 |
| M&T debt (term loans and equipment line) | Secured term loans and equipment line (GPM) | 98,217 | Not supplied: total principal not printed; term loans 70,200 and equipment line 26,200 outstanding | 26,200 on the equipment line | 45,000 equipment line; 18,800 available | Secured by real property of sites and by the equipment financed | Senior secured on that collateral, ahead of the unsecured Senior Notes; rank against the other secured facilities is not stated | USD | 98,217 | Not applicable | Term SOFR plus 2.25%; equipment tranches may be fixed at five-year cost of funds plus 2.25% | Floating or fixed by tranche | SOFR | 225 | Not applicable | Term loans 2031-02-10; equipment line draws through February 2031 | Not supplied: amortisation per tranche not stated | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 20; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 62; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 131–133 |
| Capital One Line of Credit (GPMP) | Secured revolving credit facility | 174,431 | 178,100 | 178,100 | 800,000; can be raised to 1,000,000 | Secured by GPMP assets and equity pledges and by GPM Empire LLC's interest in APC's agreements with the Company and its fuel supply agreements | Senior secured on its collateral, ahead of the unsecured Senior Notes; rank against the other secured facilities is not stated | USD | 174,431 | Not applicable | Adjusted Term SOFR plus 2.25% to 3.25%; rate 6.0% at 2026-09-30 | Floating | Adjusted Term SOFR | 225 to 325 | Not applicable | 2028-05-05 | 0 | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 62–63; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 64 |
| Insurance premium notes | Notes financing insurance premiums | 4,604 | Not supplied: principal not printed | Not applicable | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 4,604 | Not applicable | Not supplied: rate not stated | Not supplied: rate type not stated | Not applicable | Not applicable | Not applicable | Terms generally 24 months or less | Not supplied: not stated | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 19; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 134 |

The carrying values of the four drawn instruments add to the Total Debt of 624,743; the PNC lines carry nothing because the filing states no borrowings under either.
Basis: 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 20

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM to 2026-09-30 | USD 7643.471m | USD 6508.902m | USD 5849.257m | USD 8303.116m | Calculated | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Every component is reported; FY2025 audited, stubs unaudited; calculation C06 |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 236.861m | USD 172.959m | USD 182.378m | USD 227.442m | Calculated | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Every component is reported; FY2025 audited, stubs unaudited; calculation C07 |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 248.653m | USD 198.582m | USD 182.954m | USD 264.281m | Calculated | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Every component is reported; FY2025 audited, stubs unaudited; calculation C08 |
| Cash interest paid | LTM to 2026-09-30 | USD 87.269m | USD 48.240m | USD 59.919m | USD 75.590m | Calculated | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Every component is reported; FY2025 audited, stubs unaudited; calculation C09 |
| Net cash from operating activities | LTM to 2026-09-30 | USD 192.585m | USD 90.758m | USD 148.009m | USD 135.334m | Calculated | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Every component is reported; FY2025 audited, stubs unaudited; calculation C10 |
| Purchase of property and equipment | LTM to 2026-09-30 | USD 127.286m | USD 104.945m | USD 97.641m | USD 134.590m | Calculated | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | Every component is reported; FY2025 audited, stubs unaudited; calculation C11 |
| Revenue | Q4 2025 calculated (FY2025 less 9M 2025) | USD 7643.471m | USD 5849.257m | Not applicable | USD 1794.214m | Calculated | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | No Q4 2025 is reported separately; calculated and not substituted for a reported period; calculation C71 |
| EBITDA (Reported) | Q4 2025 calculated (FY2025 less 9M 2025) | USD 236.861m | USD 182.378m | Not applicable | USD 54.483m | Calculated | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | No Q4 2025 is reported separately; calculated and not substituted for a reported period; calculation C72 |
| EBITDA (Adjusted) | Q4 2025 calculated (FY2025 less 9M 2025) | USD 248.653m | USD 182.954m | Not applicable | USD 65.699m | Calculated | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl | No Q4 2025 is reported separately; calculated and not substituted for a reported period; calculation C73 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 880.999 | Net debt data table of this module, Gross debt | 226.564 | Income statement EBITDA (Reported), FY column | FY2024 / 2024-12-31 | USD | US$m | 3.89 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 619.241 | Net debt data table of this module, Net debt | 226.564 | Income statement EBITDA (Reported), FY column | FY2024 / 2024-12-31 | USD | US$m | 2.73 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 226.564 | Income statement EBITDA (Reported), FY column | 92.103 | Cash flow statement Cash Interest Paid, FY column | FY2024 / 2024-12-31 | USD | US$m | 2.46 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 880.999 | Net debt data table of this module, Gross debt | 248.860 | Income statement EBITDA (Adjusted), FY column | FY2024 / 2024-12-31 | USD | US$m | 3.54 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 619.241 | Net debt data table of this module, Net debt | 248.860 | Income statement EBITDA (Adjusted), FY column | FY2024 / 2024-12-31 | USD | US$m | 2.49 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 248.860 | Income statement EBITDA (Adjusted), FY column | 92.103 | Cash flow statement Cash Interest Paid, FY column | FY2024 / 2024-12-31 | USD | US$m | 2.70 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 912.145 | Net debt data table of this module, Gross debt | 236.861 | Income statement EBITDA (Reported), FY column | FY2025 / 2025-12-31 | USD | US$m | 3.85 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 607.141 | Net debt data table of this module, Net debt | 236.861 | Income statement EBITDA (Reported), FY column | FY2025 / 2025-12-31 | USD | US$m | 2.56 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 236.861 | Income statement EBITDA (Reported), FY column | 87.269 | Cash flow statement Cash Interest Paid, FY column | FY2025 / 2025-12-31 | USD | US$m | 2.71 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 912.145 | Net debt data table of this module, Gross debt | 248.653 | Income statement EBITDA (Adjusted), FY column | FY2025 / 2025-12-31 | USD | US$m | 3.67 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 607.141 | Net debt data table of this module, Net debt | 248.653 | Income statement EBITDA (Adjusted), FY column | FY2025 / 2025-12-31 | USD | US$m | 2.44 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 248.653 | Income statement EBITDA (Adjusted), FY column | 87.269 | Cash flow statement Cash Interest Paid, FY column | FY2025 / 2025-12-31 | USD | US$m | 2.85 | Calculated | Tier 1 audited statements | Carrying-value debt; finance leases excluded; cash interest from the cash flow statement |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 624.743 | Net debt data table of this module, Gross debt | 227.442 | Constructed period register, LTM EBITDA (Reported) | 2026-09-30 | USD | US$m | 2.75 | Calculated | Tier 1 and Tier 2b: FY2025 audited with unaudited nine-month stubs | Debt at 2026-09-30 against last-twelve-months EBITDA; the LTM is built from FY2025, 9M 2026 and 9M 2025; finance leases excluded |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 440.939 | Net debt data table of this module, Net debt | 227.442 | Constructed period register, LTM EBITDA (Reported) | 2026-09-30 | USD | US$m | 1.94 | Calculated | Tier 1 and Tier 2b: FY2025 audited with unaudited nine-month stubs | Debt at 2026-09-30 against last-twelve-months EBITDA; the LTM is built from FY2025, 9M 2026 and 9M 2025; finance leases excluded |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 227.442 | Constructed period register, LTM EBITDA (Reported) | 75.590 | Constructed period register, LTM cash interest paid | 2026-09-30 | USD | US$m | 3.01 | Calculated | Tier 1 and Tier 2b: FY2025 audited with unaudited nine-month stubs | Debt at 2026-09-30 against last-twelve-months EBITDA; the LTM is built from FY2025, 9M 2026 and 9M 2025; finance leases excluded |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 624.743 | Net debt data table of this module, Gross debt | 264.281 | Constructed period register, LTM EBITDA (Adjusted) | 2026-09-30 | USD | US$m | 2.36 | Calculated | Tier 1 and Tier 2b: FY2025 audited with unaudited nine-month stubs | Debt at 2026-09-30 against last-twelve-months EBITDA; the LTM is built from FY2025, 9M 2026 and 9M 2025; finance leases excluded |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 440.939 | Net debt data table of this module, Net debt | 264.281 | Constructed period register, LTM EBITDA (Adjusted) | 2026-09-30 | USD | US$m | 1.67 | Calculated | Tier 1 and Tier 2b: FY2025 audited with unaudited nine-month stubs | Debt at 2026-09-30 against last-twelve-months EBITDA; the LTM is built from FY2025, 9M 2026 and 9M 2025; finance leases excluded |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 264.281 | Constructed period register, LTM EBITDA (Adjusted) | 75.590 | Constructed period register, LTM cash interest paid | 2026-09-30 | USD | US$m | 3.50 | Calculated | Tier 1 and Tier 2b: FY2025 audited with unaudited nine-month stubs | Debt at 2026-09-30 against last-twelve-months EBITDA; the LTM is built from FY2025, 9M 2026 and 9M 2025; finance leases excluded |
| EBITDA (Reported) margin | EBITDA (Reported) / Revenue x 100 | 227.442 | LTM EBITDA (Reported) | 8303.116 | LTM revenue | 2026-09-30 | USD | US$m | 2.74 | Calculated | Tier 1 and Tier 2b | Percent of revenue; revenue includes pass-through fuel and excise tax |
| EBITDA (Adjusted) margin | EBITDA (Adjusted) / Revenue x 100 | 264.281 | LTM EBITDA (Adjusted) | 8303.116 | LTM revenue | 2026-09-30 | USD | US$m | 3.18 | Calculated | Tier 1 and Tier 2b | Percent of revenue; issuer-adjusted non-GAAP measure |
| Capex / revenue | Purchase of property and equipment / Revenue x 100 | 134.590 | LTM purchase of property and equipment | 8303.116 | LTM revenue | 2026-09-30 | USD | US$m | 1.62 | Calculated | Tier 1 and Tier 2b | Cash purchases only; equipment acquired under leases is non-cash and excluded |
| Operating cash flow / total debt | Net Cash from Operating Activities / Total Debt x 100 | 135.334 | LTM net cash from operating activities | 624.743 | Total Debt at 2026-09-30 | 2026-09-30 | USD | US$m | 21.66 | Calculated | Tier 1 and Tier 2b | Percent; carrying-value debt |
| Free cash flow / total debt | Free cash flow / Total Debt x 100 | 0.744 | LTM operating cash flow less purchase of property and equipment | 624.743 | Total Debt at 2026-09-30 | 2026-09-30 | USD | US$m | 0.12 | Calculated | Tier 1 and Tier 2b | Percent; free cash flow before dividends and share repurchases |
| Total debt including finance leases / EBITDA (Reported) | (Total Debt + finance lease liabilities) / EBITDA (Reported) | 826.179 | Total Debt 624.743 plus finance lease liabilities 201.436 | 227.442 | LTM EBITDA (Reported) | 2026-09-30 | USD | US$m | 3.63 | Calculated | Tier 1 and Tier 2b | Lease-adjusted view; operating lease cost stays inside EBITDA and operating lease liabilities are excluded |
| Add-backs / Adjusted EBITDA | Total add-backs / EBITDA (Adjusted) x 100 | 36.839 | LTM add-backs in the EBITDA bridge | 264.281 | LTM EBITDA (Adjusted) | 2026-09-30 | USD | US$m | 13.94 | Calculated | Tier 1 and Tier 2b | Percent; add-backs are the issuer's own |
| Revenue growth, 9M 2026 against 9M 2025 | Revenue 9M 2026 / Revenue 9M 2025 - 1 | 6508.902 | Income statement 9M 2026 revenue | 5849.257 | Income statement 9M 2025 revenue | 9M 2026 against 9M 2025 | USD | US$m | 11.28 | Calculated | Tier 2b unaudited | Percent change; mostly higher fuel prices with fewer gallons sold |
| Adjusted EBITDA growth, 9M 2026 against 9M 2025 | EBITDA (Adjusted) 9M 2026 / EBITDA (Adjusted) 9M 2025 - 1 | 198.582 | Income statement 9M 2026 EBITDA (Adjusted) | 182.954 | Income statement 9M 2025 EBITDA (Adjusted) | 9M 2026 against 9M 2025 | USD | US$m | 8.54 | Calculated | Tier 2b unaudited | Percent change; issuer-adjusted non-GAAP measure |
| Senior Notes fair value / gross carrying value | Fair value / gross carrying value x 100 | 312.300 | Fair value of the Senior Notes, Level 1 market trades | 350.000 | Gross carrying value of the Senior Notes | 2026-09-30 | USD | US$m | 89.23 | Calculated | Tier 2b unaudited | Percent of carrying principal, a market-price proxy as the filing estimates it |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Volume (period flow) | Fuel gallons sold, thousands | 2,189,245 | 2,063,736 | 1,559,378 | 1,440,748 | Down | Fewer gallons in each year and in 9M 2026, which the filing ties to store closures and conversions and to weak same-store volumes |
| Margin (rate) | Fuel margin, cents per gallon, consolidated | 26.8 | 27.1 | 27.0 | 29.4 | Up | The filing attributes the 2026 gain to fuel-market volatility from the geopolitical environment; margins fall when costs rise gradually |
| Margin (rate) | Retail fuel margin, cents per gallon | 39.6 | 42.8 | 42.2 | 48.4 | Up | Retail same-store margin was 48.5 cents in 9M 2026 against 43.0 cents a year earlier |
| Margin (rate) | Merchandise margin, percent | 32.8 | 33.7 | 33.5 | 34.5 | Up | Margin rate up while merchandise contribution fell with store conversions |
| Contribution (period flow) | Merchandise contribution, USD thousands | 579,569 | 499,781 | 383,534 | 345,986 | Down | Lower sales from converted and closed stores |
| Same-store (period flow) | Retail same-store fuel gallons change, percent | -6.1 | -5.4 | -5.8 | -5.3 | Stable | Declines of about 5% to 6% in every period |
| Same-store (period flow) | Retail same-store merchandise sales change, percent | -5.4 | -4.1 | -4.4 | -1.3 | Improving | Cigarettes explain about 90% of the 9M 2026 same-store merchandise decline |
| Sites (period end) | Retail sites | 1,389 | 1,118 | 1,182 | 1,038 | Down | 488 stores converted to dealer locations since the programme began; expected largely complete by the end of 2027 |
| Sites (period end) | Wholesale fuel supply sites, excluding bulk and spot | 1,922 | 2,099 | 2,053 | 2,124 | Up | Converted stores become wholesale sites with fuel supply and rental income |
| Sites (period end) | Fleet fueling locations | 280 | 295 | 288 | 294 | Up | Five new locations opened in 9M 2026 |
| Cost (period flow) | Non-cash rent expense, USD thousands | 14,335 | 12,132 | 9,405 | 6,991 | Down | GAAP rent expense exceeded cash rent by these amounts |

Operating measures are shown as the issuer reports them and are not recomputed here.
Basis: 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 67–68; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 41; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 46–48

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| Total debt | Balance-sheet carrying value, current plus long-term, net of issuance costs; principal kept separately | Debt note total, net: 624.743 US$m at 2026-09-30; gross principal printed at year ends only | Carrying 912.145 against principal 920.894 at 2025-12-31 (difference 8.749); 880.999 against 891.203 at 2024-12-31 | FY2024, FY2025; principal at 2026-09-30 not printed | Low: 0.96% of FY2025 carrying value | Not supplied: module routing is outside this register | Carrying value used throughout; principal shown in the debt principal table |
| EBITDA (Reported) | Reported EBITDA is the primary denominator | Net income including non-controlling interests plus net interest and other financial expenses, income taxes and depreciation and amortization | Gain of about 20.8 million on the expiry of a 2021 purchase option, accounted for as a sale-leaseback, sits in other income inside reported EBITDA in Q2 2025 | FY2025 and 9M 2025; drops out of LTM to 2026-09-30 | Medium: 8.77% of FY2025 reported EBITDA | Not supplied: module routing is outside this register | Reported figures used; the Adjusted EBITDA bridge removes the gain |
| EBITDA (Adjusted) | Shown beside reported EBITDA, labelled | Reported EBITDA plus acquisition and divestiture costs, APC IPO costs, disposal losses and impairments, share-based compensation, equity-investment income, contingent consideration, litigation settlement and other items | Add-backs are the issuer's own; non-cash rent is shown as additional information and not added back | All periods | Medium: LTM add-backs 36.839 US$m, 13.94% of LTM Adjusted EBITDA | Not supplied: module routing is outside this register | Adjusted ratios kept in separate register rows |
| Cash & Equivalents | Unrestricted cash for net debt | Balance sheet cash and cash equivalents; restricted cash and short-term investments are separate lines | Cash flow closing cash includes restricted cash: 196.799 against balance sheet 183.804 at 2026-09-30 | All balance sheet dates | Low: 12.995 US$m restricted cash at 2026-09-30 | Not supplied: module routing is outside this register | Balance sheet cash used for net debt and liquidity |
| Total debt and leases | Lease liabilities on their own lines are not added to debt | Finance lease liabilities and operating lease liabilities are separate balance sheet lines | Finance leases 201.436 US$m; operating leases 1,440.287 US$m at 2026-09-30 | All balance sheet dates | High for lease-adjusted leverage: debt including finance leases / EBITDA is 3.63x against 2.75x | Not supplied: module routing is outside this register | Method basis kept; the lease-adjusted ratio is shown as a labelled free row |
| Debt-like financing obligations | A debt-like obligation outside the debt lines is flagged | Sale-leaseback financial liabilities carried in other liabilities; Series A redeemable preferred stock in temporary equity | Financial liabilities 126.435 US$m at 2025-12-31; Series A preferred 100.000 US$m with 5.75% cumulative dividends and a change-of-control put at 101% | FY2024, FY2025; not itemised at 2026-09-30 | Medium: 13.86% and 10.96% of FY2025 total debt | Not supplied: module routing is outside this register | Not added to Total Debt; named in the analysis and gaps |
| Interest | Cash interest paid is the cover denominator | Cash paid for interest 48.240 US$m in 9M 2026; interest and other financial expenses, net 43.270 US$m | Net expense includes a 7.444 US$m gain on Senior Notes repurchased and fair value items; cash paid is a cash flow line | 9M 2026, 9M 2025 | Medium: 4.970 US$m between cash paid and net expense | Not supplied: module routing is outside this register | Cash interest paid used |
| Offering proceeds used to repay the Capital One line | One figure per event with all figures and roles | The 2025 annual report states about 184.0 million; the 2026 quarterly reports state 206.7 million | Annual report signed 2026-02-25 before the over-allotment closed on 2026-03-09; quarterly reports record the final amount | Q1 2026 onward | Low: 22.7 US$m between the two figures, explained by the later share issue | Not supplied: module routing is outside this register | Later figure used for 2026 facts; both kept |
| Segment revenue | Revenue from external customers sums to consolidated revenue | The management discussion shows segment totals including inter-segment items | Wholesale revenue 975.181 including inter-segment 0.347 against 974.834 external in Q3 2026 | 9M 2026 and Q3 2026 | Low: 0.347 US$m | Not supplied: module routing is outside this register | External revenue used in the segment rows |


### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Credit metrics and net debt at 2026-09-30 | Ready with Limitations | Carrying-value debt and last-twelve-months EBITDA are stated; finance leases, sale-leaseback liabilities and preferred stock are outside the ratios; principal total is not printed | Read the lease-adjusted row beside the headline ratios |
| Liquidity at 2026-09-30 | Ready with Limitations | PNC borrowing-base availability is not stated; the undrawn figure is a ceiling for that line | Obtain the PNC borrowing base certificate or a lender presentation |
| Maturity wall and refinancing paths | Not Ready | The only printed schedule is at 2025-12-31 and predates the 2026 repayments, repurchases and refinancing | Obtain the updated maturity table from the next annual report or a presentation |
| Covenant headroom | Not Ready | Covenant levels and compliance after 2025-12-31 are not printed | Obtain the credit agreements and compliance certificates |
| Segment analysis | Ready with Limitations | External revenue and operating income by segment are extracted; segment expense lines are flattened in the third-quarter report | Use the aligned segment tables in the management discussion for detail |
| Subsidiary-level and guarantor-level leverage | Not Ready | No figures for APC, the guarantor group or the parent after 2025-12-31 | Obtain APC's own report and guarantor information |
| Pro forma for the pending acquisition | Not Ready | Inventory at closing is not stated, so the cash cost is not established | Obtain the closing statement when the purchase completes |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 3.89 | 2.73 | x | Reported EBITDA and carrying-value debt at 2024-12-31; finance leases, operating leases and preferred stock excluded |
| FY2025 / 2025-12-31 | 3.85 | 2.56 | x | Reported EBITDA and carrying-value debt at 2025-12-31; finance leases, operating leases and preferred stock excluded |
| 2026-09-30 | 2.75 | 1.94 | x | Debt at 2026-09-30 over last-twelve-months reported EBITDA built from FY2025, 9M 2026 and 9M 2025; finance leases, operating leases and preferred stock excluded |

The 2026-09-30 ratios divide by a last-twelve-months EBITDA and the 2026 fall comes from debt repayment, while finance lease liabilities are outside the ratios.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 2.46 | x | Reported EBITDA over cash interest paid in FY2024 |
| FY2025 / 2025-12-31 | 2.71 | x | Reported EBITDA over cash interest paid in FY2025 |
| 2026-09-30 | 3.01 | x | Last-twelve-months reported EBITDA over last-twelve-months cash interest paid, built from FY2025, 9M 2026 and 9M 2025 |

Cash interest paid is the group's cash flow line and is not split by instrument.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 261.758 | 579.423 | US$m | Balance sheet cash plus undrawn committed facilities (PNC borrowing-base availability 131.574, M&T equipment line 29.149, Capital One 418.700); the company states about USD 841 million in total; restricted cash excluded |
| FY2025 / 2025-12-31 | 305.004 | 583.220 | US$m | Balance sheet cash plus undrawn committed facilities (PNC borrowing-base availability 131.641, M&T equipment line 32.879, Capital One 418.700); the company states about USD 888 million in total; restricted cash excluded |
| 2026-09-30 | 183.804 | 845.200 | US$m | Balance sheet cash plus undrawn committed facilities of PNC lines 214.000 less letters of credit 9.000, M&T equipment line 18.800 and Capital One 621.400; PNC borrowing-base availability is not stated so that part is a ceiling; the company states about USD 845 million of availability and about USD 1.0 billion in total |

The 2026-09-30 undrawn figure assumes the PNC lines are available in full less letters of credit, which the filing does not confirm.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 37.137 | US$m | Scheduled principal payments at 2025-12-31, the latest schedule printed, which predates the 2026 repayments and repurchases; includes the M&T term loan balance of 23.1 due 2026-06-10, refinanced to 2031 in February 2026 |
| FY2027 | 9.191 | US$m | Scheduled principal payments at 2025-12-31, the latest schedule printed, which predates the 2026 repayments and repurchases; scheduled amortisation of M&T and other loans |
| FY2028 | 395.694 | US$m | Scheduled principal payments at 2025-12-31, the latest schedule printed, which predates the 2026 repayments and repurchases; mainly the Capital One line maturing 2028-05-05 |
| FY2029 | 453.298 | US$m | Scheduled principal payments at 2025-12-31, the latest schedule printed, which predates the 2026 repayments and repurchases; mainly the Senior Notes due 2029-11-15 |
| FY2030 | 25.574 | US$m | Scheduled principal payments at 2025-12-31, the latest schedule printed, which predates the 2026 repayments and repurchases; includes the M&T term loan balance of 23.0 due 2030-05-10, refinanced to 2031 in February 2026 |

The schedule is dated 2025-12-31 and overstates the 2028 and 2029 maturities after the 2026 repayments and repurchases.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 8731.962 | 248.860 | US$m | Twelve months to 2024-12-31; revenue as reported including excise tax; Adjusted EBITDA is issuer-adjusted non-GAAP |
| FY2025 / 2025-12-31 | 7643.471 | 248.653 | US$m | Twelve months to 2025-12-31; revenue as reported including excise tax; Adjusted EBITDA is issuer-adjusted non-GAAP |
| 2026-09-30 | 8303.116 | 264.281 | US$m | Last twelve months to 2026-09-30 built from FY2025, 9M 2026 and 9M 2025; twelve months like the annual rows; Adjusted EBITDA is issuer-adjusted non-GAAP |

Revenue moves with fuel prices and the dealer conversion programme, and Adjusted EBITDA is the issuer's own measure.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| PNC GPM Line of Credit (undrawn) | 1 | Yes | 0.000 | 0.00 | US$m | PNC lines carry no borrowings; first priority lien on receivables, inventory and bank accounts; borrowers GPM Investments, LLC and certain subsidiaries; size 130.000; cumulative debt 0.000 over last-twelve-months reported EBITDA 227.442 |
| PNC APC Line of Credit (undrawn) | 1 | Yes | 0.000 | 0.00 | US$m | No borrowings; secured revolving line of APC and certain subsidiaries with terms like the GPM line; size 84.000; cumulative debt 0.000 over last-twelve-months reported EBITDA 227.442 |
| M&T debt (term loans and equipment line) | 1 | Yes | 98.217 | 0.43 | US$m | Carrying value; secured by real property of sites and by financed equipment; obligor GPM Investments, LLC; APC assets released in 2026; cumulative debt 98.217 over last-twelve-months reported EBITDA 227.442 |
| Capital One Line of Credit (GPMP) | 1 | Yes | 174.431 | 1.20 | US$m | Carrying value of USD 178.1 million drawn, net of deferred costs; secured by GPMP assets and equity pledges and by GPM Empire LLC's interest in APC's agreements; obligor GPM Petroleum LP and guarantors; cumulative debt 272.648 over last-twelve-months reported EBITDA 227.442 |
| Senior Notes due 2029 | 2 | No | 347.491 | 2.73 | US$m | Carrying value of USD 350 million gross; unsecured; guaranteed by certain domestic subsidiaries; issuer ARKO Corp.; effectively subordinated to secured debt on its collateral; cumulative debt 620.139 over last-twelve-months reported EBITDA 227.442 |

The four secured facilities sit on separate collateral pools and obligors, so their order inside rank 1 is not a ranking, and insurance premium notes of 4.604 are left out because their rank is not stated.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), LTM to 2026-09-30 | 227.442 | US$m | Opening measure: issuer-reported EBITDA built as FY2025 plus 9M 2026 less 9M 2025 |
| Acquisition and divestiture costs | 8.929 | US$m | Issuer's own add-back, LTM built as FY2025 plus 9M 2026 less 9M 2025; a negative reduces EBITDA (calculation C41) |
| APC IPO costs | 0.904 | US$m | Issuer's own add-back, LTM built as FY2025 plus 9M 2026 less 9M 2025; a negative reduces EBITDA (calculation C42) |
| (Gain) loss on disposal of assets and impairment charges | 7.304 | US$m | Issuer's own add-back, LTM built as FY2025 plus 9M 2026 less 9M 2025; a negative reduces EBITDA (calculation C43) |
| Share-based compensation expense | 19.289 | US$m | Issuer's own add-back, LTM built as FY2025 plus 9M 2026 less 9M 2025; a negative reduces EBITDA (calculation C44) |
| (Income) loss from equity investment | -0.023 | US$m | Issuer's own add-back, LTM built as FY2025 plus 9M 2026 less 9M 2025; a negative reduces EBITDA (calculation C45) |
| Taxes paid (received) in arrears | 0.305 | US$m | Issuer's own add-back, LTM built as FY2025 plus 9M 2026 less 9M 2025; a negative reduces EBITDA (calculation C46) |
| Adjustment to contingent consideration | -0.337 | US$m | Issuer's own add-back, LTM built as FY2025 plus 9M 2026 less 9M 2025; a negative reduces EBITDA (calculation C47) |
| Expenses related to wage and hour claim settlement | 0.466 | US$m | Issuer's own add-back, LTM built as FY2025 plus 9M 2026 less 9M 2025; a negative reduces EBITDA (calculation C48) |
| Other | 0.002 | US$m | Issuer's own add-back, LTM built as FY2025 plus 9M 2026 less 9M 2025; a negative reduces EBITDA (calculation C49) |
| EBITDA (Adjusted), LTM to 2026-09-30 | 264.281 | US$m | Closing measure: issuer-adjusted EBITDA built the same way; non-GAAP; equals the opening amount plus the add-backs exactly |

The add-backs are the issuer's own lines built over the same last twelve months and reconcile exactly to the issuer-adjusted figure.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Source |
|---|---|---|---|---|---|
| Revenue | 8731.962 | 7643.471 | 8303.116 | US$m | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| EBITDA (Reported) | 226.564 | 236.861 | 227.442 | US$m | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| EBITDA (Adjusted) | 248.860 | 248.653 | 264.281 | US$m | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| Net cash from operating activities | 221.858 | 192.585 | 135.334 | US$m | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 8 |
| Purchase of property and equipment | 113.914 | 127.286 | 134.590 | US$m | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 8 |
| Free cash flow (operating cash flow less purchase of property and equipment) | 107.944 | 65.299 | 0.744 | US$m | Calculated |
| Cash interest paid | 92.103 | 87.269 | 75.590 | US$m | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 9 |
| Total debt (carrying value) | 880.999 | 912.145 | 624.743 | US$m | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 5 |
| Cash and cash equivalents | 261.758 | 305.004 | 183.804 | US$m | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 5 |
| Net debt | 619.241 | 607.141 | 440.939 | US$m | Calculated |
| Undrawn committed facilities | 579.423 | 583.220 | 845.200 | US$m | 10-K_2024-12-31_arko_arko-20241231.htm.jsonl, page 67; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 57–58 |
| Cash plus undrawn committed facilities | 841.181 | 888.224 | 1029.004 | US$m | Calculated |
| Total debt / EBITDA | 3.89 | 3.85 | 2.75 | x | Calculated, T4.9 register rows |
| Net debt / EBITDA | 2.73 | 2.56 | 1.94 | x | Calculated, T4.9 register rows |
| EBITDA / cash interest | 2.46 | 2.71 | 3.01 | x | Calculated, T4.9 register rows |
| Total debt / adjusted EBITDA | 3.54 | 3.67 | 2.36 | x | Calculated, T4.9 register rows |
| Net debt / adjusted EBITDA | 2.49 | 2.44 | 1.67 | x | Calculated, T4.9 register rows |
| Adjusted EBITDA / cash interest | 2.70 | 2.85 | 3.50 | x | Calculated, T4.9 register rows |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 880.999 | 261.758 | 619.241 | US$m | Reported at 2024-12-31 before the 2026 APC offering. Gross debt is long-term debt, current portion 12.944 plus long-term debt, net 868.055, net of deferred financing costs of 10.204; principal total 891.203. Includes Senior Notes, M&T debt, Capital One line and insurance premium notes; excludes finance leases 222.566, operating leases and sale-leaseback liabilities. Cash excludes restricted cash 30.650 and short-term investments 5.330 |
| FY2025 / 2025-12-31 | 912.145 | 305.004 | 607.141 | US$m | Reported at 2025-12-31. Gross debt is current portion 36.676 plus long-term debt, net 875.469, net of deferred financing costs of 8.749; principal total 920.894. Includes the four debt lines; excludes finance leases 212.930, operating leases and sale-leaseback liabilities. Cash excludes restricted cash 18.710 and short-term investments 6.465. Not pro forma for the 2026 APC offering or repayments |
| 2026-03-31 | 704.446 | 272.115 | 432.331 | US$m | Reported at 2026-03-31. Gross debt is current portion 13.398 plus long-term debt, net 691.048; principal total not printed. Excludes finance leases 204.409. Cash excludes restricted cash 17.029 and short-term investments 7.212 |
| 2026-06-30 | 674.512 | 245.556 | 428.956 | US$m | Reported at 2026-06-30. Gross debt is current portion 16.014 plus long-term debt, net 658.498; principal total not printed. Excludes finance leases 202.907. Cash excludes restricted cash 15.012 and short-term investments 8.166 |
| 2026-09-30 | 624.743 | 183.804 | 440.939 | US$m | Reported at 2026-09-30, no pro forma. Gross debt is current portion 16.155 plus long-term debt, net 608.588; principal total not printed (stated: Senior Notes 350.000, Capital One drawn 178.100). Includes the four debt lines; excludes finance leases 201.436, operating leases and sale-leaseback liabilities. Cash excludes restricted cash 12.995 and short-term investments 8.337 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 920.894 | -8.749 | 912.145 | US$m | Ladder drawn at 2025-12-31, the latest schedule printed. Principal is the sum of the five Debt maturing rows. Reconciling items are deferred financing costs of 8.749 deducted from the carrying value (calculation C40); no debt is left out of the ladder. Carrying value equals Gross debt in Net debt data. Principal at 2026-09-30 is not printed |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Closing of the pending purchase of U.S. Petroleum Partners assets by APC | Not supplied: the source states later in 2026 only | Not supplied: about 205 of cash plus inventory at closing is stated and the inventory value is not stated | Not supplied: the net debt effect is not established | Not supplied: depends on the net debt effect | US$m | Agreement dated 2026-08-04; about USD 205 million of cash plus inventory at closing and USD 30 million of APC Class A stock held in escrow; cash to be borrowed under existing lines; closing not certain; nothing reflected in the 2026-09-30 figures |
| Common dividend of USD 0.03 per share payable to holders of record 2026-11-20 | 2026-12-03 | 3.365 | 444.304 | 1.95 | US$m | Calculated: 112,175,416 shares outstanding at 2026-11-03 times USD 0.03; event alone, not cumulative; pro forma net leverage over last-twelve-months reported EBITDA 227.442 (calculation C77) |
| APC dividend of USD 0.50 per share payable to holders of record 2026-11-18 | 2026-11-30 | 6.285 | 447.224 | 1.97 | US$m | Calculated: 12,570,223 Class A shares held outside the group times USD 0.50 (the Class B dividend stays inside the group); event alone, not cumulative; equals the 6.285 declared to outside holders in Q3 2026 (calculation C79) |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 46 |
| Calculated | 28 |
| Assumption-Based | 1 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 11 |
| Fields present | 26 |
| Fields total | 26 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 8 |
| MINOR | 8 |

## Calculations

| Calc ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C01 | Net debt at FY2024 / 2024-12-31 | Gross debt 880.999 less cash 261.758 (US$m) | 619.241 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97 |
| C02 | Net debt at FY2025 / 2025-12-31 | Gross debt 912.145 less cash 305.004 (US$m) | 607.141 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97 |
| C03 | Net debt at 2026-03-31 | Gross debt 704.446 less cash 272.115 (US$m) | 432.331 | 10-Q_2026-03-31_arko_arko-20260331.htm.jsonl, page 4 |
| C04 | Net debt at 2026-06-30 | Gross debt 674.512 less cash 245.556 (US$m) | 428.956 | 10-Q_2026-06-30_arko_arko-20260630.htm.jsonl, page 4 |
| C05 | Net debt at 2026-09-30 | Gross debt 624.743 less cash 183.804 (US$m) | 440.939 | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 5 |
| C06 | LTM revenue to 2026-09-30 | FY2025 7643.471 plus 9M 2026 6508.902 less 9M 2025 5849.257 (US$m) | 8303.116 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| C07 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 236.861 plus 9M 2026 172.959 less 9M 2025 182.378 (US$m) | 227.442 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 55–56 |
| C08 | LTM EBITDA (Adjusted) to 2026-09-30 | FY2025 248.653 plus 9M 2026 198.582 less 9M 2025 182.954 (US$m) | 264.281 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 55–56 |
| C09 | LTM cash interest paid to 2026-09-30 | FY2025 87.269 plus 9M 2026 48.240 less 9M 2025 59.919 (US$m) | 75.590 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 9 |
| C10 | LTM net cash from operating activities | FY2025 192.585 plus 9M 2026 90.758 less 9M 2025 148.009 (US$m) | 135.334 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 8 |
| C11 | LTM purchase of property and equipment | FY2025 127.286 plus 9M 2026 104.945 less 9M 2025 97.641 (US$m) | 134.590 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 8 |
| C12 | LTM free cash flow (operating cash flow less purchase of property and equipment) | 135.334 less 134.590 (US$m) | 0.744 | Calculated from the two rows above |
| C13 | FY2025 free cash flow | 192.585 less 127.286 (US$m) | 65.299 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 100 |
| C14 | FY2024 free cash flow | 221.858 less 113.914 (US$m) | 107.944 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 100 |
| C15 | Total debt / EBITDA, FY2024 / 2024-12-31 | 880.999 divided by 226.564 (US$m) | 3.89x | Debt and EBITDA tables of this module |
| C16 | Net debt / EBITDA, FY2024 / 2024-12-31 | 619.241 divided by 226.564 (US$m) | 2.73x | Debt and EBITDA tables of this module |
| C17 | EBITDA / cash interest, FY2024 / 2024-12-31 | 226.564 divided by 92.103 (US$m) | 2.46x | Debt and EBITDA tables of this module |
| C18 | Total debt / adjusted EBITDA, FY2024 / 2024-12-31 | 880.999 divided by 248.860 (US$m) | 3.54x | Debt and EBITDA tables of this module |
| C19 | Net debt / adjusted EBITDA, FY2024 / 2024-12-31 | 619.241 divided by 248.860 (US$m) | 2.49x | Debt and EBITDA tables of this module |
| C20 | Adjusted EBITDA / cash interest, FY2024 / 2024-12-31 | 248.860 divided by 92.103 (US$m) | 2.70x | Debt and EBITDA tables of this module |
| C21 | Total debt / EBITDA, FY2025 / 2025-12-31 | 912.145 divided by 236.861 (US$m) | 3.85x | Debt and EBITDA tables of this module |
| C22 | Net debt / EBITDA, FY2025 / 2025-12-31 | 607.141 divided by 236.861 (US$m) | 2.56x | Debt and EBITDA tables of this module |
| C23 | EBITDA / cash interest, FY2025 / 2025-12-31 | 236.861 divided by 87.269 (US$m) | 2.71x | Debt and EBITDA tables of this module |
| C24 | Total debt / adjusted EBITDA, FY2025 / 2025-12-31 | 912.145 divided by 248.653 (US$m) | 3.67x | Debt and EBITDA tables of this module |
| C25 | Net debt / adjusted EBITDA, FY2025 / 2025-12-31 | 607.141 divided by 248.653 (US$m) | 2.44x | Debt and EBITDA tables of this module |
| C26 | Adjusted EBITDA / cash interest, FY2025 / 2025-12-31 | 248.653 divided by 87.269 (US$m) | 2.85x | Debt and EBITDA tables of this module |
| C27 | Total debt / EBITDA, 2026-09-30 | 624.743 divided by 227.442 (US$m) | 2.75x | Debt and EBITDA tables of this module |
| C28 | Net debt / EBITDA, 2026-09-30 | 440.939 divided by 227.442 (US$m) | 1.94x | Debt and EBITDA tables of this module |
| C29 | EBITDA / cash interest, 2026-09-30 | 227.442 divided by 75.590 (US$m) | 3.01x | Debt and EBITDA tables of this module |
| C30 | Total debt / adjusted EBITDA, 2026-09-30 | 624.743 divided by 264.281 (US$m) | 2.36x | Debt and EBITDA tables of this module |
| C31 | Net debt / adjusted EBITDA, 2026-09-30 | 440.939 divided by 264.281 (US$m) | 1.67x | Debt and EBITDA tables of this module |
| C32 | Adjusted EBITDA / cash interest, 2026-09-30 | 264.281 divided by 75.590 (US$m) | 3.50x | Debt and EBITDA tables of this module |
| C33 | Undrawn committed facilities, FY2024 / 2024-12-31 | PNC unused 131.574 plus M&T equipment line 29.149 plus Capital One 418.700 (US$m) | 579.423 | 10-K_2024-12-31_arko_arko-20241231.htm.jsonl, page 67 |
| C34 | Cash plus undrawn committed facilities, FY2024 / 2024-12-31 | 261.758 plus 579.423 (US$m) | 841.181 | Calculated from the rows above |
| C35 | Undrawn committed facilities, FY2025 / 2025-12-31 | PNC unused 131.641 plus M&T equipment line 32.879 plus Capital One 418.700 (US$m) | 583.220 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 77–78 |
| C36 | Cash plus undrawn committed facilities, FY2025 / 2025-12-31 | 305.004 plus 583.220 (US$m) | 888.224 | Calculated from the rows above |
| C37 | Undrawn committed facilities, 2026-09-30 | PNC lines 214.000 plus M&T equipment line 18.800 plus Capital One 621.400 less PNC letters of credit 9.000 (US$m) | 845.200 | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 57–58 |
| C38 | Cash plus undrawn committed facilities, 2026-09-30 | 183.804 plus 845.200 (US$m) | 1029.004 | Calculated from the rows above |
| C39 | Contractual principal at 2025-12-31 | 37.137 plus 9.191 plus 395.694 plus 453.298 plus 25.574 (US$m) | 920.894 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 134 |
| C40 | Reconciling items at 2025-12-31 | Deferred financing costs -8.749 (US$m); principal 920.894 plus -8.749 equals carrying value 912.145 | -8.749 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 134 |
| C41 | LTM add-back: Acquisition and divestiture costs | FY2025 6.545 plus 9M 2026 6.125 less 9M 2025 3.741 (US$m) | 8.929 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C42 | LTM add-back: APC IPO costs | FY2025 1.897 plus 9M 2026 0.363 less 9M 2025 1.356 (US$m) | 0.904 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C43 | LTM add-back: (Gain) loss on disposal of assets and impairment charges | FY2025 -12.146 plus 9M 2026 4.159 less 9M 2025 -15.291 (US$m) | 7.304 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C44 | LTM add-back: Share-based compensation expense | FY2025 15.172 plus 9M 2026 14.995 less 9M 2025 10.878 (US$m) | 19.289 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C45 | LTM add-back: (Income) loss from equity investment | FY2025 -0.108 plus 9M 2026 -0.010 less 9M 2025 -0.095 (US$m) | -0.023 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C46 | LTM add-back: Taxes paid (received) in arrears | FY2025 0.305 plus 9M 2026 0.000 less 9M 2025 0.000 (US$m) | 0.305 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C47 | LTM add-back: Adjustment to contingent consideration | FY2025 -2.207 plus 9M 2026 0.054 less 9M 2025 -1.816 (US$m) | -0.337 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C48 | LTM add-back: Expenses related to wage and hour claim settlement | FY2025 2.517 plus 9M 2026 0.000 less 9M 2025 2.051 (US$m) | 0.466 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C49 | LTM add-back: Other | FY2025 -0.183 plus 9M 2026 -0.063 less 9M 2025 -0.248 (US$m) | 0.002 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C50 | Total LTM add-backs | 8.929 plus 0.904 plus 7.304 plus 19.289 plus -0.023 plus 0.305 plus -0.337 plus 0.466 plus 0.002 (US$m) | 36.839 | Calculated from the add-back rows above |
| C51 | LTM EBITDA bridge check | Reported 227.442 plus add-backs 36.839 equals Adjusted 264.281 (US$m) | 264.281 | Calculated from the rows above |
| C52 | Add-backs as a share of LTM Adjusted EBITDA | 36.839 divided by 264.281 times 100 | 13.94% | Calculated |
| C53 | Acquisition, divestiture and disposal add-backs (LTM) | 8.929 plus 7.304 (US$m) | 16.233 | Calculated from the add-back rows above |
| C54 | Finance lease liabilities at 2026-09-30 | Current 6.584 plus non-current 194.852 (US$m) | 201.436 | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 5 |
| C55 | Total debt plus finance lease liabilities at 2026-09-30 | 624.743 plus 201.436 (US$m) | 826.179 | Calculated from the rows above |
| C56 | Total debt including finance leases / EBITDA (Reported), 2026-09-30 | 826.179 divided by 227.442 (US$m) | 3.63x | Calculated from the rows above |
| C57 | Sale-leaseback financial liabilities at 2025-12-31 | Non-current 122.867 plus current 3.568 (US$m) | 126.435 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 128; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 130 |
| C58 | EBITDA (Reported) margin, LTM | 227.442 divided by 8303.116 times 100 | 2.74% | Calculated |
| C59 | EBITDA (Adjusted) margin, LTM | 264.281 divided by 8303.116 times 100 | 3.18% | Calculated |
| C60 | Capex / revenue, LTM | 134.590 divided by 8303.116 times 100 | 1.62% | Calculated |
| C61 | Operating cash flow / total debt, LTM | 135.334 divided by 624.743 times 100 | 21.66% | Calculated |
| C62 | Free cash flow / total debt, LTM | 0.744 divided by 624.743 times 100 | 0.12% | Calculated |
| C63 | Revenue growth, 9M 2026 against 9M 2025 | 6508.902 divided by 5849.257 less 1, times 100 | 11.28% | Calculated |
| C64 | Adjusted EBITDA growth, 9M 2026 against 9M 2025 | 198.582 divided by 182.954 less 1, times 100 | 8.54% | Calculated |
| C65 | Senior Notes fair value as a share of gross carrying value, 2026-09-30 | 312.300 divided by 350.000 times 100 (US$m) | 89.23% | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 27 |
| C66 | Senior Notes fair value as a share of gross carrying value, 2025-12-31 | 387.400 divided by 450.000 times 100 (US$m) | 86.09% | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 27 |
| C67 | Average price paid for Senior Notes repurchased in 9M 2026 | 91.858 divided by 100.000 times 100 (US$m), excluding accrued interest | 91.86% | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 19 |
| C68 | Change in total debt, 2025-12-31 to 2026-09-30 | 624.743 less 912.145 (US$m) | -287.402 | Calculated from the net debt table |
| C69 | Change in LTM EBITDA (Reported) against FY2025 | 227.442 less 236.861 (US$m) | -9.419 | Calculated |
| C70 | Share of APC economic interests held by outside holders | 100 less 73.6 | 26.4% | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 16 |
| C71 | Q4 2025 Total revenues (calculated, FY2025 less 9M 2025) | 7643.471 less 5849.257 (US$m) | 1794.214 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 6 |
| C72 | Q4 2025 EBITDA (Reported) (calculated, FY2025 less 9M 2025) | 236.861 less 182.378 (US$m) | 54.483 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C73 | Q4 2025 EBITDA (Adjusted) (calculated, FY2025 less 9M 2025) | 248.653 less 182.954 (US$m) | 65.699 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 56 |
| C74 | Corporate and eliminations, operating income, by column | Operating income less the sum of the five segment operating incomes, each column (USD thousands): FY2024 -415,285, FY2025 -396,913, Q3 2025 -101,964, Q3 2026 -105,032, 9M 2025 -289,394, 9M 2026 -316,911 | See the income statement rows | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, pages 158–159; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, pages 30–31 |
| C75 | Common dividend declared for payment 2026-12-03 | 112,175,416 shares outstanding at 2026-11-03 times USD 0.03 per share (USD) | USD 3,365,262, equal to 3.365 US$m | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 23 |
| C76 | APC dividend to outside Class A holders payable 2026-11-30 | 12,570,223 Class A shares (11,111,111 plus 1,459,112 issued in the offering) times USD 0.50 per share (USD) | USD 6,285,112, equal to 6.285 US$m | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 17 |
| C77 | Pro forma net debt after the common dividend | 440.939 plus 3.365 (US$m), event alone | 444.304 | Calculated from the rows above |
| C78 | Pro forma net leverage after the common dividend | 444.304 divided by 227.442 (US$m) | 1.95x | Calculated from the rows above |
| C79 | Pro forma net debt after the APC dividend | 440.939 plus 6.285 (US$m), event alone | 447.224 | Calculated from the rows above |
| C80 | Pro forma net leverage after the APC dividend | 447.224 divided by 227.442 (US$m) | 1.97x | Calculated from the rows above |
| C81 | Dividends paid in 9M 2026 (common, preferred, outside holders of APC) | 10.096 plus 4.301 plus 9.553 (US$m) | 23.950 | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 9 |
| C82 | Combined effect of the two dividends on net leverage | (3.365 plus 6.285) divided by 227.442 (US$m) | 0.04x | Calculated from the rows above |
| C83 | PNC lines' earliest maturity on the printed terms | Six months before 2028-05-05 (Capital One maturity) is 2027-11-05; six months before the Senior Notes' 2029-11-15 maturity is 2029-05-15; the fixed date is 2031-02-13 | 2027-11-05 | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 20; 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 130 |
| C84 | Working-capital moves in 9M 2026 cash flow | Trade receivables -101.894, inventory -31.938, accounts payable +56.209 (US$m) | -77.623 | 10-Q_2026-09-30_arko_arko-20260930.htm.jsonl, page 8 |
| C85 | Finance lease liabilities at 2025-12-31 | Current 13.239 plus non-current 199.691 (US$m) | 212.930 | 10-K_2025-12-31_arko_arko-20251231.htm.jsonl, page 97 |

## Gaps

- The maturity schedule is printed only at 31 December 2025 and the third-quarter report prints none, so the maturity wall after the 2026 repayment of USD 206.7 million of the Capital One line, the Senior Notes repurchase of USD 100.0 million and the M&T refinancing is not established; refinancing work can rest only on the old schedule. Severity High. Action: obtain an updated maturity table from a later annual report or a lender presentation.
- The gross principal of debt at 30 September 2026 is not printed, so the reconciling items between principal and carrying value are not established for that date; the stated principal amounts are USD 350.0 million of Senior Notes, USD 178.1 million drawn on the Capital One line, M&T term loans of USD 70.2 million and an equipment line of USD 26.2 million, and insurance premium notes are carried at USD 4.604 million with no principal stated. Severity Medium. Action: obtain the debt table with principal at that date.
- Borrowing-base availability under the PNC lines is not stated at 30 September 2026, so the undrawn facilities figure of USD 845.200 million treats those lines as available in full less USD 9.0 million of letters of credit, which makes it a ceiling for liquidity. Severity Medium. Action: obtain the PNC availability calculation.
- Covenant levels, reported covenant figures and compliance statements after 31 December 2025 are not printed for the PNC availability test, the M&T liquidity and debt service coverage tests or the Capital One leverage and interest coverage tests, so no covenant headroom is stated and none is inferred. Severity Medium. Action: obtain the credit agreements and compliance certificates.
- The effect of the pending purchase of U.S. Petroleum Partners assets on net debt and leverage is not established because the inventory value at closing and the closing date are not stated; the cash price is about USD 205 million plus inventory. Severity High. Action: obtain closing terms once the purchase completes.
- Figures for the Senior Notes guarantor group, for ARKO Petroleum Corp. alone and for the parent alone at 30 September 2026 are not printed, and the parent-only condensed statements exist only at 31 December 2025, so subsidiary-level leverage and the structural position of the Senior Notes are not quantified. Severity Medium. Action: obtain the separate report of the subsidiary and guarantor information.
- Adjusted EBITDA and net debt include all of ARKO Petroleum Corp. although outside holders own 26.4% of its economic interests; the outside share of EBITDA is not printed, and only net income attributable to non-controlling interests of USD 7.974 million in nine months 2026 and dividends to them of USD 9.553 million are stated, so no deconsolidated leverage is shown. Severity Medium. Action: obtain the subsidiary's own EBITDA.
- Sale-leaseback financial liabilities of USD 126.435 million at 31 December 2025 are carried in other liabilities and are not itemised at 30 September 2026, so whether they should count as debt, and by how much, is not resolved; Series A redeemable preferred stock of USD 100.0 million is also outside total debt. Severity Medium. Action: obtain the other liabilities note for 2026.
- Non-controlling interest net income prints a dash for the fiscal years and the 2025 quarter and nine months, and non-controlling interests on the balance sheet print no line at 31 December 2024 and a dash at 31 December 2025; these cells are written as not supplied and not as zero. Severity Low. Action: none needed for credit work if the interest is nil.
- Several cash flow lines are printed only in some periods: business and asset acquisitions in the annual statements only, and the repurchase of long-term debt, the subsidiary offering proceeds and costs and dividends to outside holders in 2026 only; the other columns are written as not supplied. The cash flow table also shows the lines needed for debt, dividends and capital spending and leaves other operating lines inside the printed totals. Severity Low. Action: none.
- Several instrument terms are not stated: the principal and amortisation of the M&T loans and the insurance premium notes, the security and rate of the insurance premium notes, and the relative rank of the secured facilities against each other. Insurance premium notes are left out of the debt stack for that reason. Severity Low. Action: obtain the facility documents.
- Leverage and cover are computed for 31 December 2024, 31 December 2025 and 30 September 2026 only; balance sheets at 31 March and 30 June 2026 are tabulated and net debt is shown for them, but last-twelve-months EBITDA at those dates was not built. Severity Low. Action: none unless interim leverage is needed.
- In the third-quarter report the segment expense lines for salaries and wages, credit card fees, rent, repairs and other expenses lose their column labels in the prepared text, so they were not extracted; segment revenue and operating income were read from aligned rows. Severity Low. Action: use the segment tables in the management discussion for detail.
- Interest expense by instrument is not printed, so interest cover uses the group's cash interest paid and no instrument-level cost of debt is stated. Severity Low. Action: none.
- The amount of offering proceeds used to repay the Capital One line differs between the 2025 annual report, about USD 184.0 million, and the 2026 quarterly reports, USD 206.7 million; both figures are kept and the later one is used for 2026 facts. Severity Low. Action: none.
- The segment operating income of corporate and eliminations is a calculated residual, not a printed line, and the fourth quarter of 2025 is calculated as the fiscal year less nine months because no separate fourth quarter is reported. Severity Low. Action: none.

## Next module

The orchestrator selects the next module.
