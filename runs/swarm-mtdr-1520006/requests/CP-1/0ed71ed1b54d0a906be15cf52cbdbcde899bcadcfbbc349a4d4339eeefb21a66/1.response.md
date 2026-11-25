# Financial foundation for Matador Resources Co (mtdr-1520006)

## Request

Financial foundation for Matador Resources Co (issuer mtdr-1520006), as of 2026-11-18, on the credit snapshot pathway. The scope is the consolidated statements, debt and liquidity of Matador Resources Company for FY2024, FY2025 and the nine months to 2026-09-30, with the events after the balance sheet date shown separately.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_mtdr-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024, signed by the registrant | 2025-02-25 | 894e8733aecdedfb1b8e105b1b9704651564cf32d39b45ca42be6de9fdc92ae6 | Debt note and FY2024 comparatives for liquidity inputs; FY2024 letters of credit and commitments |
| 10-K_2025-12-31_mtdr-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025, signed by the registrant | 2026-02-26 | e9eaab98edbb6a1c4427eb5eb904b2e4996c57b61a98d6af93ad8bab6c6074fc | FY2025 and FY2024 statements, debt note, segment note, supplemental cash flow disclosures, adjusted EBITDA reconciliation and reserves tables |
| 10-Q_2026-03-31_mtdr-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026, signed by the registrant | 2026-05-08 | 367d7e92ebf6bbcf8864d571e81af70da4579441ff83b69644835787f9238ec0 | Checked for the first quarter debt position; no figure is tabulated from it |
| 10-Q_2026-06-30_mtdr-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026, signed by the registrant | 2026-08-07 | 7ae671b4f6ac0a4e1e36125f9cae9e5f9daaefef47a1b6d1e9f8982e6fc3b523 | Paloma agreement, BLM acquisition and the consideration stated before closing |
| 10-Q_2026-09-30_mtdr-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026, signed by the registrant | 2026-11-06 | 12260749dc2f3c04f984f5d95d8981f29239cee6889b993a7804ab65190fa1e7 | Latest balance sheet, income statement, cash flow, debt and liquidity tables, adjusted EBITDA reconciliation and subsequent events |
| EX-99.1_2026-05-06_a20260331mtdr8ker-ex991.htm.jsonl | Earnings press release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-06 | d2fda3ccc92ab5725125ea6ab53a7446253747f772bbfad87e7395d1da3be880 | Context only; the filings control |
| EX-99.1_2026-08-05_a20260630mtdr8ker-ex991.htm.jsonl | Earnings press release (Exhibit 99.1) for the second quarter of 2026 | 2026-08-05 | 4396223b51bd4312dbe30336c9a38fa3a038faf92679eaf0dc2022f6a4c17156 | Context for the acquisitions announced in the second quarter |
| EX-99.1_2026-11-03_a20260930mtdr8ker-ex991.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of 2026 | 2026-11-03 | 7a24a8df3538b970ba66c4a3e150d3b8445427df54caa0ebe1246f57b9f40a09 | Closing of the October 2026 acquisitions, repayment and dividend announcements and guidance |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 1513a76ea7e2104e23abdbcdbdbe09642d8ea05fca55ee18ab2243bc2fa3504e | Source inventory, perimeter, gaps and the limits on the evidence window |

## Findings

### Bottom line

Net debt to LTM EBITDA rose from 1.39x at year-end 2025 to 2.00x at September 30, 2026, and pro forma for the Paloma acquisition closed on October 1, 2026 it is 2.48x, so creditors now rely on acquired production arriving on plan.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 34; calculation C13; calculation C15; calculation C18

Total debt rose 46.02% in nine months to fund the BLM lease sale, the Cardinal midstream purchase and a notes refinancing, while LTM EBITDA rose only 1.51%, and 33.20% of September debt sits at San Mateo with no recourse to Matador. Interest cover is still 11.29x, but Credit Agreement borrowings of $951.0 million at quarter end reached $2.25 billion by November 3, 2026, leaving about $446.9 million of undrawn capacity. The 2.48x pro forma figure divides by reported EBITDA that holds almost none of the acquired earnings.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 16–19; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 17; EX-99.1_2026-11-03_a20260930mtdr8ker-ex991.htm.jsonl, page 1; calculation C7; calculation C13; calculation C16; calculation C19; calculation C20

### Leverage trajectory and drivers

Leverage on reported EBITDA was flat through 2025 and stepped up only in 2026: total debt to EBITDA was 1.38x at year-end 2024, 1.40x at year-end 2025 and 2.01x at September 30, 2026. The step-up is an acquisition effect, not an operating one, because reported EBITDA over the last twelve months rose from USD 2,437,322 thousand to USD 2,474,028 thousand while carrying-value debt rose from USD 3,402,102 thousand to USD 4,967,908 thousand.
Basis: 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–222; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3; calculation C7; calculation C9; calculation C13; calculation C15

Three 2026 transactions explain the debt. The May 2026 federal lease purchase cost about $1.16 billion and was funded from cash and Credit Agreement borrowings, San Mateo bought Cardinal Midstream on July 31, 2026 for $761.0 million using a new $650.0 million term loan, and Matador replaced its $500.0 million 6.875% 2028 notes with $750.0 million of 6.0% 2034 notes in March 2026. Credit Agreement borrowings rose from USD 398,000 thousand to USD 951,000 thousand and the San Mateo revolver from USD 883,000 thousand to USD 1,002,000 thousand, so borrowing, not retained cash, funded most of the acquisition cost.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 13–19; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 53; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 7

### Coverage and cash-flow quality

Interest cover on cash interest remains comfortable but is falling as debt is added: reported EBITDA to cash interest was 15.03x in FY2024, 12.41x in FY2025 and 11.29x over the last twelve months. Cash interest paid over that period was USD 219,121 thousand against USD 196,368 thousand in FY2025, and the run-rate is likely to rise further because the cost of the Cardinal term loan (an effective rate of 6.91%) and the post-quarter Credit Agreement borrowing are not yet in the history.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 18–19; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 29; 10-K_2025-12-31_mtdr-20251231.htm.jsonl, page 271; calculation C10; calculation C16

Organic cash generation is modest relative to EBITDA because capital spending absorbs most of it, and it does not cover the acquisition programme. Net cash from operations was USD 2,476,555 thousand over the last twelve months and cash flow after drilling, midstream and other organic capital spending was USD 688,366 thousand, equal to 0.28x of reported EBITDA, while nine-month 2026 acquisition spending on properties, Cardinal and the Paloma deposit totalled USD 2,102,218 thousand against organic free cash flow of USD 724,669 thousand. The difference was debt-funded, which is why net debt rose faster than EBITDA.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7; calculation C11; calculation C12; calculation C21

The hedge book is a cash cost at current prices and a growing liability. Realized derivative losses were USD 247,151 thousand in the nine months to September 30, 2026 against a gain of USD 13,607 thousand a year earlier, driven by a realized oil loss of USD 374,285 thousand partly offset by a natural gas gain of USD 127,134 thousand, and the net derivative liability on the balance sheet was USD 203,691 thousand against a net asset of USD 34,052 thousand at year-end 2025. Reported EBITDA deducts the unrealized loss of USD 237,744 thousand, while the issuer's adjusted figure adds it back but still bears the realized loss, so the two EBITDA definitions differ by USD 266,022 thousand for the last twelve months, of which USD 207,370 thousand is the unrealized derivative result.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 24–26; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 59–60; calculation C9; calculation C22

Royalties payable are a large non-debt funding float that the liquidity view should not treat as ordinary payables. They stood at USD 378,406 thousand at September 30, 2026, up from USD 351,062 thousand at year-end 2025 and USD 227,865 thousand at year-end 2024, and advances from joint interest owners add USD 79,564 thousand; both are interest-free obligations to owners that fund operations, so a slowdown in revenue or a settlement catch-up would draw on the revolver rather than on retained cash.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3; 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; calculation C25

### Liquidity and near-term maturities

Reported liquidity at September 30, 2026 was USD 1,832,829 thousand: cash of USD 11,756 thousand plus USD 1,745,941 thousand undrawn on the Credit Agreement and USD 75,132 thousand on the San Mateo revolver, which is available only inside San Mateo. After the Paloma purchase, the Credit Agreement stood at about $2.25 billion of borrowings against commitments of $2.75 billion and letters of credit of about $53.1 million at quarter end, which leaves roughly $446.9 million undrawn, so near-term flexibility depends on the stated plan to repay between $350 million and $400 million by year-end, of which $150 million was repaid by November 3, 2026.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 52–53; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 17; calculation C17; calculation C19

The next maturity is San Mateo's $650.0 million term loan due July 30, 2027, shown as a current liability of USD 647,266 thousand, and San Mateo says it expects to refinance it but gives no assurance. Without a refinancing, San Mateo would use cash, operating cash flow, the revolver (with USD 75,132 thousand undrawn) and member contributions, so a refinancing failure would fall partly on Matador as the owner of 51% of San Mateo. The remaining principal falls due in 2029 (USD 1,953,000 thousand across two revolvers) and in 2032, 2033 and 2034 (USD 2,400,000 thousand of senior unsecured notes).
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 16–19; calculation C14

### Subsequent events and perimeter

Events after September 30, 2026 are kept out of the period figures. The Paloma acquisition closed on October 1, 2026 at an as-adjusted price of about USD 1,255 million, below the USD 1,275 million agreed in July, funded by cash and Credit Agreement borrowings; a cash deposit of USD 63,750 thousand was paid before the quarter end, so, assuming it is credited against the price, only the balance of USD 1,191,250 thousand is added to net debt in the pro forma row. Ridge Runner is stated to have closed in October 2026 but its price and funding are not stated, and the annual dividend rate was raised to $1.75 per share from $1.50 per share, with no net debt effect until paid.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 34; 10-Q_2026-06-30_mtdr-20260630.htm.jsonl, page 27; EX-99.1_2026-11-03_a20260930mtdr8ker-ex991.htm.jsonl, pages 2–6; calculation C18; calculation C19

The reported statements consolidate San Mateo at 100% with a non-controlling interest of USD 364,854 thousand, whereas the issuer's headline adjusted EBITDA is stated after non-controlling interests. This analysis uses consolidated figures throughout because the debt is consolidated, and 33.20% of the carrying-value debt at September 30, 2026 belongs to San Mateo and is non-recourse to Matador, which matters for any recovery view of the parent's own creditors.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 18–19; EX-99.1_2026-11-03_a20260930mtdr8ker-ex991.htm.jsonl, page 4; calculation C20; calculation C23

### Data-quality and definition risks

The filings print no unadjusted EBITDA, so EBITDA (Reported) here is derived as net income plus income tax, interest expense and depletion, depreciation and amortization, and it differs from the issuer's adjusted measure by USD 266,022 thousand for the last twelve months. Debt carrying value is USD 35,092 thousand below principal because of issuance costs and discounts, interest expense of USD 247,371 thousand over the last twelve months is above cash interest of USD 219,121 thousand, and unrestricted cash is used for net debt while the cash-flow statement ends on a cash and restricted cash balance of USD 70,113 thousand.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 59–60; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 16; calculation C1; calculation C9; calculation C10; calculation C24

The three statement identities tie in every period: assets equal liabilities plus equity, the operating, investing and financing flows sum to the change in cash, and opening cash plus the change equals closing cash. A sale-leaseback financing obligation (USD 24,000 thousand of proceeds in the nine months) is not shown in the debt note and is not added to debt here, so its treatment is a limitation.
Basis: 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–7; 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–223

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_mtdr-20241231.htm.jsonl | Annual report (10-K) | FY2024 with FY2023 and FY2022 comparatives | USD | thousands | Consolidated, including San Mateo (51% owned) | US GAAP, audited | Tier 1 | FY2024 debt table and liquidity inputs | Superseded by the FY2025 annual report for statements |
| 10-K_2025-12-31_mtdr-20251231.htm.jsonl | Annual report (10-K) | FY2025 with FY2024 and FY2023 comparatives | USD | thousands | Consolidated, including San Mateo (51% owned) | US GAAP, audited | Tier 1 | FY2024 and FY2025 statements, debt note, segment note, adjusted EBITDA reconciliation | Part III is incorporated by reference to a proxy statement not supplied |
| 10-Q_2026-03-31_mtdr-20260331.htm.jsonl | Quarterly report (10-Q) | Q1 2026 | USD | thousands | Consolidated | US GAAP, unaudited | Tier 2b | Context for the 2026 debt build; not tabulated | Superseded by later quarters |
| 10-Q_2026-06-30_mtdr-20260630.htm.jsonl | Quarterly report (10-Q) | Q2 2026 and six months 2026 | USD | thousands | Consolidated | US GAAP, unaudited | Tier 2b | Paloma agreement and BLM acquisition; not tabulated | Superseded by the Q3 2026 quarterly report |
| 10-Q_2026-09-30_mtdr-20260930.htm.jsonl | Quarterly report (10-Q) | Q3 2026 and nine months 2026 with 2025 comparatives | USD | thousands | Consolidated, including San Mateo (51% owned) | US GAAP, unaudited | Tier 2b | Latest balance sheet, income statement, cash flow, debt, liquidity and subsequent events | Balance sheet predates the Paloma closing |
| EX-99.1_2026-05-06_a20260331mtdr8ker-ex991.htm.jsonl | Earnings release (Exhibit 99.1) | Q1 2026 | USD | thousands | Consolidated; adjusted measures after non-controlling interests | Non-GAAP and GAAP, unaudited | Tier 2b | Context only | Management-defined measures |
| EX-99.1_2026-08-05_a20260630mtdr8ker-ex991.htm.jsonl | Earnings release (Exhibit 99.1) | Q2 2026 | USD | thousands | Consolidated; adjusted measures after non-controlling interests | Non-GAAP and GAAP, unaudited | Tier 2b | Context for acquisitions | Management-defined measures |
| EX-99.1_2026-11-03_a20260930mtdr8ker-ex991.htm.jsonl | Earnings release (Exhibit 99.1) | Q3 2026 | USD | thousands | Consolidated; adjusted measures after non-controlling interests | Non-GAAP and GAAP, unaudited | Tier 2b | Subsequent events, dividend and repayment statements | Reserves and guidance are management estimates |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Matador Resources Company | Registrant and parent guarantor of the Credit Agreement | December 31 | USD | thousands | Consolidated group including San Mateo | US GAAP | FY2024, FY2025, Q1 2026, Q2 2026, Q3 2026, 9M 2025, 9M 2026, Q3 2025 |
| MRC Energy Company | Borrower under the Credit Agreement | December 31 | USD | thousands | Direct or indirect holder of the operating subsidiaries | US GAAP | Debt balances at each period end |
| Certain subsidiaries of the Company | Guarantors of the senior unsecured notes; San Mateo is not a guarantor | December 31 | USD | thousands | Restricted subsidiaries under the indentures | US GAAP | Debt balances at each period end |
| San Mateo Midstream, LLC | 51% owned midstream venture; borrower under the San Mateo Credit Facility, non-recourse to Matador | December 31 | USD | thousands | Consolidated with a non-controlling interest | US GAAP | Debt balances and segment information at each period end |

Subsequent events to November 3, 2026: the Paloma closing on 2026-10-01, Credit Agreement borrowings of $2.25 billion at 2026-11-03, a $150 million repayment, the Ridge Runner closing in October 2026 and the dividend rate increase. They are shown only in the post-balance-sheet table.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) derived from components because the filings print no unadjusted EBITDA | 10-K_2025-12-31_mtdr-20251231.htm.jsonl; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl | Derivation | Not stated | Net income + total income tax provision + interest expense + depletion, depreciation and amortization | Method step 4: derive from components and label as calculated | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| Money tables restated from thousands to millions | 10-K_2025-12-31_mtdr-20251231.htm.jsonl; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl | Unit presentation | USD thousands | US$m with three decimals (exact) | The money unit of the checked tables is millions; no value is rounded | All money tables |
| Net debt uses unrestricted cash only | 10-K_2025-12-31_mtdr-20251231.htm.jsonl; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl | Definition | Cash and restricted cash USD 70,113 thousand at 2026-09-30 | Cash USD 11,756 thousand | Restricted cash is held mainly for San Mateo and may not be commingled | FY2024, FY2025, 2026-09-30 |
| No currency conversion | 10-K_2025-12-31_mtdr-20251231.htm.jsonl; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl | None | USD | USD | All sources report in US dollars | All periods |
| No pro forma adjustment in any period figure | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl | None | Not applicable | Not applicable | The Paloma closing is shown only in the post-balance-sheet table | 2026-09-30 |

### Period coverage

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Oil and natural gas revenues | 3,143,834 | 3,238,750 | 2,535,933 | 3,128,436 | 810,241 | 1,222,121 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Third-party midstream services revenues | 141,027 | 164,733 | 119,339 | 143,018 | 43,833 | 56,334 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Sales of purchased natural gas | 194,097 | 253,031 | 191,696 | 234,113 | 61,043 | 112,085 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Realized gain (loss) on derivatives | 12,724 | 21,679 | 13,607 | -247,151 | 3,946 | -160,170 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Unrealized gain (loss) on derivatives | 13,299 | 18,084 | -12,290 | -237,744 | 19,952 | -67,727 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Total revenues | 3,504,981 | 3,696,277 | 2,848,285 | 3,020,672 | 939,015 | 1,162,643 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Lease operating | 325,145 | 415,810 | 313,822 | 334,550 | 104,181 | 120,076 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Transportation and processing | 58,593 | 66,787 | 55,326 | 56,756 | 18,814 | 22,980 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Midstream operating | 167,400 | 208,142 | 145,597 | 198,205 | 49,337 | 82,442 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Purchased natural gas | 142,715 | 163,094 | 137,735 | 94,323 | 47,658 | 90,900 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Depletion, depreciation and amortization | 974,300 | 1,195,358 | 889,847 | 950,809 | 305,354 | 342,961 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Taxes other than income | 268,649 | 275,629 | 213,813 | 274,447 | 68,754 | 100,762 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Accretion of asset retirement obligations | 6,027 | 7,846 | 5,642 | 8,615 | 2,148 | 3,995 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| General and administrative | 127,454 | 137,069 | 102,709 | 124,942 | 36,790 | 44,645 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Total expenses | 2,070,283 | 2,469,735 | 1,864,491 | 2,042,647 | 633,036 | 808,761 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Operating income | 1,434,698 | 1,226,542 | 983,794 | 978,025 | 305,979 | 353,882 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Net loss on asset sales and impairment | Not supplied: printed as a dash (nil) in the filing | -589 | -589 | -578 | -589 | Not supplied: printed as a dash (nil) in the filing | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Loss on debt extinguishment | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | -15,587 | Not supplied: printed as a dash (nil) in the filing | Not supplied: printed as a dash (nil) in the filing | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Interest expense | -171,687 | -208,520 | -153,475 | -192,326 | -50,641 | -79,982 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Other income | 696 | 16,011 | 14,011 | 11,100 | 5,003 | 2,747 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Total other expense | -170,991 | -193,098 | -140,053 | -197,391 | -46,227 | -77,235 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Income before income taxes | 1,263,707 | 1,033,444 | 843,741 | 780,634 | 259,752 | 276,647 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Current income tax provision (benefit) | 27,059 | 7,088 | 6,735 | 804 | -39,335 | 578 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Deferred income tax provision | 265,305 | 165,587 | 191,776 | 186,897 | 98,463 | 80,970 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Total income tax provision | 292,364 | 172,675 | 198,511 | 187,701 | 59,128 | 81,548 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Net income | 971,343 | 860,769 | 645,230 | 592,933 | 200,624 | 195,099 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Net income attributable to non-controlling interest in subsidiaries | -86,021 | -101,548 | -78,556 | -66,033 | -24,260 | -22,979 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| Net income attributable to Matador Resources Company shareholders | 885,322 | 759,221 | 566,674 | 526,900 | 176,364 | 172,120 | USD thousands | Reported; FY2024 column from the FY2025 annual report comparatives | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| EBITDA (Reported) | 2,409,694 | 2,437,322 | 1,887,063 | 1,923,769 | 615,747 | 699,590 | USD thousands | Calculated: net income + total income tax provision + interest expense + depletion, depreciation and amortization; includes realized and unrealized derivative results; Tier 1 and Tier 2b | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 |
| EBITDA (Adjusted) | 2,422,824 | 2,438,662 | 1,912,773 | 2,214,161 | 602,847 | 784,339 | USD thousands | Reported by the issuer: consolidated Adjusted EBITDA before non-controlling interests; adds back accretion, unrealized derivative results, share-based compensation, debt extinguishment, asset sale losses and other non-recurring items | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 177–178; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 59–60 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 971,343 | 860,769 | 645,230 | 592,933 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Depletion, depreciation and amortization | 974,300 | 1,195,358 | 889,847 | 950,809 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Deferred income tax provision | 265,305 | 165,587 | 191,776 | 186,897 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Stock-based compensation expense | 14,982 | 18,327 | 14,641 | 17,529 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Unrealized (gain) loss on derivatives | -13,299 | -18,084 | 12,290 | 237,744 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Amortization of debt issuance costs and other debt-related costs | 16,533 | 14,764 | 11,029 | 11,377 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Accretion of asset retirement obligations | 6,027 | 7,846 | 5,642 | 8,615 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Loss on extinguishment of debt | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | 15,587 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Other non-cash changes | -1,386 | 4,259 | 2,984 | 7,634 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Accounts receivable, prepaid expenses and other current assets | -138,137 | 114,285 | 14,360 | -360,090 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Lease and well equipment inventory | -10,934 | -35,313 | -32,303 | -10,812 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Other long-term assets | 4,052 | -10 | -1,524 | 1,297 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Accounts payable, accrued liabilities and other current liabilities | 33,748 | -8,930 | 42,708 | 304,553 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Royalties payable | 56,193 | 123,196 | 115,036 | 27,344 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Advances from joint interest owners | 63,384 | -19,170 | 36,143 | 15,395 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Other long-term liabilities | 4,774 | 2,131 | 2,707 | -4,706 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Net Cash from Operating Activities | 2,246,885 | 2,425,015 | 1,950,566 | 2,002,106 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Drilling, completion and equipping capital expenditures | -1,222,831 | -1,542,253 | -1,093,010 | -1,177,707 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Acquisition of oil and natural gas properties | -454,443 | -339,126 | -261,831 | -1,277,510 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Acquisition of Paloma (deposit) | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | -63,750 | USD thousands | Reported as Acquisition of Paloma; the quarterly report describes it as a cash deposit | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Acquisition of Cardinal | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | -760,958 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Acquisition of Ameredev | -1,831,214 | Not supplied: printed as a dash (nil) in the filing | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Midstream capital expenditures | -283,881 | -297,746 | -237,436 | -96,033 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Acquisition of midstream assets | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | -6,200 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Expenditures for other property and equipment | -5,691 | -4,246 | -3,047 | -3,697 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Proceeds from sale of assets and other | 12,370 | 22,426 | 22,426 | 858 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Proceeds from sale of equity method investment | 113,576 | 3,263 | 3,263 | Not supplied: printed as a dash (nil) in the filing | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Net Cash from Investing Activities | -3,672,114 | -2,157,682 | -1,569,635 | -3,384,997 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Repayments of borrowings under Credit Agreement | -3,969,500 | -2,367,500 | -1,840,500 | -2,394,000 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Borrowings under Credit Agreement | 4,065,000 | 2,170,000 | 1,530,000 | 2,947,000 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Repayments of borrowings under San Mateo Credit Facility | -733,000 | -345,000 | -265,000 | -249,000 | USD thousands | Reported; the 9M 2026 label reads San Mateo Revolving Credit Facility | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Borrowings under San Mateo Credit Facility | 826,000 | 613,000 | 465,000 | 368,000 | USD thousands | Reported; the 9M 2026 label reads San Mateo Revolving Credit Facility | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Proceeds from San Mateo Term Loan | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | 650,000 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Cost to issue San Mateo Term Loan | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | -3,280 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Cost to enter into or amend credit facilities | -33,436 | -2,406 | -530 | -2,192 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Proceeds from issuance of senior unsecured notes | 1,650,000 | Not supplied: printed as a dash (nil) in the filing | Not supplied: printed as a dash (nil) in the filing | 750,000 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Cost to issue senior unsecured notes | -28,157 | Not supplied: printed as a dash (nil) in the filing | Not supplied: printed as a dash (nil) in the filing | -12,909 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Purchase of senior unsecured notes | -699,191 | Not supplied: printed as a dash (nil) in the filing | Not supplied: printed as a dash (nil) in the filing | -509,670 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Proceeds from issuance of common stock | 344,663 | Not supplied: printed as a dash (nil) in the filing | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Contribution related to Pronto Transaction | 171,500 | Not supplied: printed as a dash (nil) in the filing | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Proceeds from sale-leaseback financing obligation | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | 24,000 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Payments on sale-leaseback financing obligation | Not supplied: line not presented in this period's statement | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | -684 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Repurchases of common stock | Not supplied: printed as a dash (nil) in the filing | -55,849 | -50,706 | -24,193 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Dividends paid | -104,876 | -163,096 | -116,812 | -139,463 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Contributions related to formation of San Mateo | 23,800 | 13,000 | 9,200 | 17,100 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Contributions from non-controlling interest owners of less-than-wholly-owned subsidiaries | 19,110 | Not supplied: printed as a dash (nil) in the filing | Not supplied: printed as a dash (nil) in the filing | 49,000 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Distributions to non-controlling interest owners of less-than-wholly-owned subsidiaries | -97,461 | -131,320 | -97,020 | -88,690 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Taxes paid related to net share settlement of stock-based compensation | -16,956 | -11,960 | -11,822 | -6,056 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Other financing | -3,823 | -1,467 | -1,096 | -1,436 | USD thousands | Reported as Other within financing activities | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Net Cash from Financing Activities | 1,413,673 | -282,598 | -379,286 | 1,373,527 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Net Cash Change | -11,556 | -15,265 | 1,645 | -9,364 | USD thousands | Reported: change in cash and restricted cash; no FX effect is printed | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Opening Cash | 106,298 | 94,742 | 94,742 | 79,477 | USD thousands | Reported: cash and restricted cash; restricted cash was 71,709, 64,163 and 58,357 (USD thousands) at 2024-12-31, 2025-12-31 and 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Closing Cash | 94,742 | 79,477 | 96,387 | 70,113 | USD thousands | Reported: cash and restricted cash; restricted cash was 71,709, 64,163 and 58,357 (USD thousands) at 2024-12-31, 2025-12-31 and 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 |
| Cash Interest Paid | 160,273 | 196,368 | 110,732 | 133,485 | USD thousands | Reported: cash paid for interest expense, net of amounts capitalized | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, page 271; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 29 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash | 23,033 | 15,314 | 11,756 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Restricted cash | 71,709 | 64,163 | 58,357 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Accounts receivable: oil and natural gas revenues | 331,590 | 286,158 | 584,976 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Accounts receivable: joint interest billings | 260,555 | 140,043 | 211,697 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Accounts receivable: other | 62,584 | 103,628 | 90,657 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Derivative instruments (current asset) | 15,968 | 34,052 | 6,815 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Lease and well equipment inventory | 38,469 | 43,842 | 53,308 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Prepaid expenses and other current assets | 123,437 | 129,368 | 236,786 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Total current assets | 927,345 | 816,568 | 1,254,352 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Oil and natural gas properties, evaluated | 12,534,290 | 14,286,726 | 15,980,199 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Oil and natural gas properties, unproved and unevaluated | 1,702,203 | 1,823,456 | 2,668,975 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Midstream properties | 1,683,334 | 1,963,059 | 2,514,284 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Other property and equipment | 47,532 | 53,199 | 61,226 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Less accumulated depletion, depreciation and amortization | -6,203,263 | -7,395,142 | -8,343,733 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Net property and equipment | 9,764,096 | 10,731,298 | 12,880,951 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Intangible assets, net | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | 263,883 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Goodwill | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | 54,864 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Other long-term assets | 158,668 | 162,703 | 239,263 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Total assets | 10,850,109 | 11,710,569 | 14,693,313 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Accounts payable and accrued liabilities | 619,167 | 540,620 | 878,503 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Current term loan payable under San Mateo Credit Facility | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | 647,266 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Royalties payable | 227,865 | 351,062 | 378,406 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Derivative instruments (current liability) | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | 198,376 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Advances from joint interest owners | 83,338 | 64,169 | 79,564 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Other current liabilities | 64,987 | 75,658 | 97,561 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Total current liabilities | 995,357 | 1,031,509 | 2,279,676 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Borrowings under Credit Agreement | 595,500 | 398,000 | 951,000 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Borrowings under San Mateo Credit Facility (revolving) | 615,000 | 883,000 | 1,002,000 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Senior unsecured notes payable | 2,114,908 | 2,121,102 | 2,367,642 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Asset retirement obligations | 114,237 | 144,063 | 258,621 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Derivative instruments (long-term liability) | Not supplied: line not presented in this period's statement | Not supplied: printed as a dash (nil) in the filing | 12,130 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Deferred income taxes | 847,666 | 1,015,931 | 1,205,997 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Other long-term liabilities | 110,009 | 120,312 | 200,985 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Total long-term liabilities | 4,397,320 | 4,682,408 | 5,998,375 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Common stock | 1,251 | 1,244 | 1,245 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Additional paid-in capital | 2,533,247 | 2,509,118 | 2,547,613 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Retained earnings | 2,556,987 | 3,153,112 | 3,540,549 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Treasury stock, at cost | -2,336 | -5,333 | -38,999 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Total Matador Resources Company shareholders' equity | 5,089,149 | 5,658,141 | 6,050,408 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Non-controlling interest in subsidiaries | 368,283 | 338,511 | 364,854 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Total shareholders' equity | 5,457,432 | 5,996,652 | 6,415,262 | USD thousands | Reported; FY2024 and FY2025 from the annual report, 9M 2026 is the balance at 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Total Assets | 10,850,109 | 11,710,569 | 14,693,313 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Total Liabilities | 5,392,677 | 5,713,917 | 8,278,051 | USD thousands | Calculated: total current liabilities + total long-term liabilities; equals total assets less total equity | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Total Equity | 5,457,432 | 5,996,652 | 6,415,262 | USD thousands | Reported | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Total Debt | 3,325,408 | 3,402,102 | 4,967,908 | USD thousands | Carrying value: Credit Agreement + San Mateo revolver + current San Mateo term loan + senior unsecured notes, net of issuance costs and discounts; excludes the sale-leaseback financing obligation and lease liabilities | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |
| Cash & Equivalents | 23,033 | 15,314 | 11,756 | USD thousands | Reported: unrestricted cash; restricted cash is a separate line | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 219–220; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 2–3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Credit Agreement due 2029 (MRC Energy Company) | Secured revolving credit facility | 951,000 | 951,000 | 951,000 | 2,750,000 elected commitments; borrowing base 3,250,000 | Mortgages on at least 85% of proved properties and equity of certain subsidiaries; guaranteed by Matador and subsidiary guarantors; San Mateo is not a guarantor | Not supplied: the source states the facility is secured but not its rank against other debt | USD | 951,000 | Not applicable | Term SOFR plus 1.75% to 2.75% (alternate base rate plus 0.75% to 1.75%); commitment fee 0.375% to 0.50% | floating | Term SOFR | 175 to 275 | Not supplied: no floor stated | 2029-03-22 | 0 | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 17; 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 245–247 |
| San Mateo Revolving Credit Facility due 2029 | Secured revolving credit facility (San Mateo) | 1,002,000 | 1,002,000 | 1,002,000 | About 1,100,000 (USD 1.10 billion stated at 2025-12-31) | Secured by substantially all San Mateo assets; guaranteed by San Mateo subsidiaries; non-recourse to Matador | Not supplied: the source states the facility is secured but not its rank against other debt | USD | 1,002,000 | Not applicable | Term SOFR plus 2.00% to 3.00% depending on San Mateo leverage | floating | Term SOFR | 200 to 300 | Not supplied: no floor stated | 2029-11-26 | 0 | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 18–19; 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 248–249 |
| San Mateo Term Loan due 2027 | Secured incremental term loan (San Mateo) | 647,266 | 650,000 | 650,000 | 650,000 | Same security and non-recourse terms as the San Mateo Credit Facility | Not supplied: the source states the facility is secured but not its rank against other debt | USD | 647,266 | Not applicable | Same floating margins as the revolver; effective rate 6.91% at 2026-09-30; 0.50% fee if outstanding at six months | floating | Not supplied: reference rate of the term loan is not named separately | Not supplied: same as the revolver per the filing | Not supplied: no floor stated | 2027-07-30 | Not supplied: no amortisation schedule stated | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 16–19 |
| 6.500% senior notes due 2032 | Senior unsecured notes | Not supplied: carrying values are not disclosed by note | 900,000 | Not applicable | Not applicable | Unsecured; guaranteed jointly and severally by certain subsidiaries; San Mateo is not a guarantor | Senior unsecured | USD | 900,000 | Not applicable | 6.50% fixed; interest each April 15 and October 15 | fixed | Not applicable | Not applicable | Not applicable | 2032-04-15 | 0 | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 16; 10-K_2025-12-31_mtdr-20251231.htm.jsonl, page 252 |
| 6.250% senior notes due 2033 | Senior unsecured notes | Not supplied: carrying values are not disclosed by note | 750,000 | Not applicable | Not applicable | Unsecured; guaranteed jointly and severally by certain subsidiaries; San Mateo is not a guarantor | Senior unsecured | USD | 750,000 | Not applicable | 6.25% fixed; interest each April 15 and October 15 | fixed | Not applicable | Not applicable | Not applicable | 2033-04-15 | 0 | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 16; 10-K_2025-12-31_mtdr-20251231.htm.jsonl, page 254 |
| 6.000% senior notes due 2034 | Senior unsecured notes | Not supplied: carrying values are not disclosed by note | 750,000 | Not applicable | Not applicable | Unsecured; guaranteed jointly and severally by certain subsidiaries; San Mateo is not a guarantor | Senior unsecured | USD | 750,000 | Not applicable | 6.0% fixed; interest each April 15 and October 15; first payment 2026-10-15 | fixed | Not applicable | Not applicable | Not applicable | 2034-04-15 | 0 | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 20 |
| Financing cost adjustment | Issuance costs and discounts on senior unsecured notes | -32,358 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -32,358 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 16 |

The reporting-currency amounts above (951,000 + 1,002,000 + 647,266 + 900,000 + 750,000 + 750,000 - 32,358) add to 4,967,908, the total debt at 2026-09-30.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Total revenues LTM to 2026-09-30 | LTM | USD 3,696.277m | USD 3,020.672m | USD 2,848.285m | USD 3,868.664m | Calculated | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 | Includes realized and unrealized derivative results |
| EBITDA (Reported) LTM to 2026-09-30 | LTM | USD 2,437.322m | USD 1,923.769m | USD 1,887.063m | USD 2,474.028m | Calculated | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 220–221; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3 | Derived from components; Tier 1 annual plus Tier 2b interim |
| EBITDA (Adjusted) LTM to 2026-09-30 | LTM | USD 2,438.662m | USD 2,214.161m | USD 1,912.773m | USD 2,740.050m | Calculated | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 177–178; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 59–60 | Consolidated, before non-controlling interests |
| Cash Interest Paid LTM to 2026-09-30 | LTM | USD 196.368m | USD 133.485m | USD 110.732m | USD 219.121m | Calculated | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, page 271; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 29 | Net of amounts capitalized |
| Net Cash from Operating Activities LTM to 2026-09-30 | LTM | USD 2,425.015m | USD 2,002.106m | USD 1,950.566m | USD 2,476.555m | Calculated | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 | Consolidated |
| Free cash flow after organic capital expenditures LTM to 2026-09-30 | LTM | USD 580.770m | USD 724.669m | USD 617.073m | USD 688.366m | Calculated | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 222–223; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 6–7 | Operating cash flow less drilling, completion and equipping, midstream and other property capital expenditures; excludes acquisitions |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 3,325.408 | Net debt data Gross debt | 2,409.694 | T4.4 EBITDA (Reported) FY2024 | FY2024 / 2024-12-31 | USD | US$m | 1.38 | Calculated | Tier 1 | Fiscal-year row |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,302.375 | Net debt data Net debt | 2,409.694 | T4.4 EBITDA (Reported) FY2024 | FY2024 / 2024-12-31 | USD | US$m | 1.37 | Calculated | Tier 1 | Fiscal-year row |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 2,409.694 | T4.4 EBITDA (Reported) FY2024 | 160.273 | T4.5 Cash Interest Paid FY2024 | FY2024 / 2024-12-31 | USD | US$m | 15.03 | Calculated | Tier 1 | Fiscal-year row |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 3,325.408 | Net debt data Gross debt | 2,422.824 | T4.4 EBITDA (Adjusted) FY2024 | FY2024 / 2024-12-31 | USD | US$m | 1.37 | Calculated | Tier 1 | Fiscal-year row |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 3,302.375 | Net debt data Net debt | 2,422.824 | T4.4 EBITDA (Adjusted) FY2024 | FY2024 / 2024-12-31 | USD | US$m | 1.36 | Calculated | Tier 1 | Fiscal-year row |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 2,422.824 | T4.4 EBITDA (Adjusted) FY2024 | 160.273 | T4.5 Cash Interest Paid FY2024 | FY2024 / 2024-12-31 | USD | US$m | 15.12 | Calculated | Tier 1 | Fiscal-year row |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 3,402.102 | Net debt data Gross debt | 2,437.322 | T4.4 EBITDA (Reported) FY2025 | FY2025 / 2025-12-31 | USD | US$m | 1.40 | Calculated | Tier 1 | Fiscal-year row |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,386.788 | Net debt data Net debt | 2,437.322 | T4.4 EBITDA (Reported) FY2025 | FY2025 / 2025-12-31 | USD | US$m | 1.39 | Calculated | Tier 1 | Fiscal-year row |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 2,437.322 | T4.4 EBITDA (Reported) FY2025 | 196.368 | T4.5 Cash Interest Paid FY2025 | FY2025 / 2025-12-31 | USD | US$m | 12.41 | Calculated | Tier 1 | Fiscal-year row |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 3,402.102 | Net debt data Gross debt | 2,438.662 | T4.4 EBITDA (Adjusted) FY2025 | FY2025 / 2025-12-31 | USD | US$m | 1.40 | Calculated | Tier 1 | Fiscal-year row |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 3,386.788 | Net debt data Net debt | 2,438.662 | T4.4 EBITDA (Adjusted) FY2025 | FY2025 / 2025-12-31 | USD | US$m | 1.39 | Calculated | Tier 1 | Fiscal-year row |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 2,438.662 | T4.4 EBITDA (Adjusted) FY2025 | 196.368 | T4.5 Cash Interest Paid FY2025 | FY2025 / 2025-12-31 | USD | US$m | 12.42 | Calculated | Tier 1 | Fiscal-year row |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 4,967.908 | Net debt data Gross debt | 2,474.028 | T4.8 EBITDA (Reported) LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 2.01 | Calculated | Tier 1 and Tier 2b | Interim row: LTM denominator; excludes Paloma earnings and most of the Cardinal contribution |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 4,956.152 | Net debt data Net debt | 2,474.028 | T4.8 EBITDA (Reported) LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 2.00 | Calculated | Tier 1 and Tier 2b | Interim row: LTM denominator; excludes Paloma earnings and most of the Cardinal contribution |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 2,474.028 | T4.8 EBITDA (Reported) LTM to 2026-09-30 | 219.121 | T4.8 Cash Interest Paid LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 11.29 | Calculated | Tier 1 and Tier 2b | Interim row: LTM numerator and denominator |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 4,967.908 | Net debt data Gross debt | 2,740.050 | T4.8 EBITDA (Adjusted) LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 1.81 | Calculated | Tier 1 and Tier 2b | Interim row: LTM denominator; excludes Paloma earnings and most of the Cardinal contribution |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 4,956.152 | Net debt data Net debt | 2,740.050 | T4.8 EBITDA (Adjusted) LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 1.81 | Calculated | Tier 1 and Tier 2b | Interim row: LTM denominator; excludes Paloma earnings and most of the Cardinal contribution |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 2,740.050 | T4.8 EBITDA (Adjusted) LTM to 2026-09-30 | 219.121 | T4.8 Cash Interest Paid LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 12.50 | Calculated | Tier 1 and Tier 2b | Interim row: LTM numerator and denominator |
| Revenue growth (%) | (FY2025 total revenues / FY2024 total revenues - 1) x 100 | 3,696.277 | T4.4 Total revenues FY2025 | 3,504.981 | T4.4 Total revenues FY2024 | FY2025 | USD | US$m | 5.46 | Calculated | Tier 1 | Includes derivative gains and losses in revenue |
| EBITDA margin (reported, %) | EBITDA (Reported) / Total revenues x 100 | 2,409.694 | T4.4 or T4.8 EBITDA (Reported) | 3,504.981 | T4.4 or T4.8 Total revenues | FY2024 | USD | US$m | 68.75 | Calculated | Tier 1 | Reported EBITDA includes unrealized derivative results |
| EBITDA margin (reported, %) | EBITDA (Reported) / Total revenues x 100 | 2,437.322 | T4.4 or T4.8 EBITDA (Reported) | 3,696.277 | T4.4 or T4.8 Total revenues | FY2025 | USD | US$m | 65.94 | Calculated | Tier 1 | Reported EBITDA includes unrealized derivative results |
| EBITDA margin (reported, %) | EBITDA (Reported) / Total revenues x 100 | 2,474.028 | T4.4 or T4.8 EBITDA (Reported) | 3,868.664 | T4.4 or T4.8 Total revenues | LTM 2026-09-30 | USD | US$m | 63.95 | Calculated | Tier 1 and Tier 2b | Reported EBITDA includes unrealized derivative results |
| EBITDA margin (adjusted, %) | EBITDA (Adjusted) / Total revenues x 100 | 2,422.824 | T4.4 or T4.8 EBITDA (Adjusted) | 3,504.981 | T4.4 or T4.8 Total revenues | FY2024 | USD | US$m | 69.13 | Calculated | Tier 1 | Consolidated adjusted EBITDA over revenue that includes derivative results |
| EBITDA margin (adjusted, %) | EBITDA (Adjusted) / Total revenues x 100 | 2,438.662 | T4.4 or T4.8 EBITDA (Adjusted) | 3,696.277 | T4.4 or T4.8 Total revenues | FY2025 | USD | US$m | 65.98 | Calculated | Tier 1 | Consolidated adjusted EBITDA over revenue that includes derivative results |
| EBITDA margin (adjusted, %) | EBITDA (Adjusted) / Total revenues x 100 | 2,740.050 | T4.4 or T4.8 EBITDA (Adjusted) | 3,868.664 | T4.4 or T4.8 Total revenues | LTM 2026-09-30 | USD | US$m | 70.83 | Calculated | Tier 1 and Tier 2b | Consolidated adjusted EBITDA over revenue that includes derivative results |
| FCF conversion (x) | Free cash flow after organic capital expenditures / EBITDA (Reported) | 734.482 | T4.8 Free cash flow after organic capital expenditures | 2,409.694 | T4.4 or T4.8 EBITDA (Reported) | FY2024 | USD | US$m | 0.30 | Calculated | Tier 1 | Excludes acquisition spending |
| FCF conversion (x) | Free cash flow after organic capital expenditures / EBITDA (Reported) | 580.770 | T4.8 Free cash flow after organic capital expenditures | 2,437.322 | T4.4 or T4.8 EBITDA (Reported) | FY2025 | USD | US$m | 0.24 | Calculated | Tier 1 | Excludes acquisition spending |
| FCF conversion (x) | Free cash flow after organic capital expenditures / EBITDA (Reported) | 688.366 | T4.8 Free cash flow after organic capital expenditures | 2,474.028 | T4.4 or T4.8 EBITDA (Reported) | LTM 2026-09-30 | USD | US$m | 0.28 | Calculated | Tier 1 and Tier 2b | Excludes acquisition spending |
| Operating cash flow / total debt (x) | Net Cash from Operating Activities / Total Debt | 2,425.015 | T4.5 or T4.8 Net Cash from Operating Activities | 3,402.102 | T4.6 Total Debt | FY2025 | USD | US$m | 0.71 | Calculated | Tier 1 | Debt at the period end; interim debt includes acquisition borrowing not yet in the cash flow |
| Operating cash flow / total debt (x) | Net Cash from Operating Activities / Total Debt | 2,476.555 | T4.5 or T4.8 Net Cash from Operating Activities | 4,967.908 | T4.6 Total Debt | LTM 2026-09-30 | USD | US$m | 0.50 | Calculated | Tier 1 and Tier 2b | Debt at the period end; interim debt includes acquisition borrowing not yet in the cash flow |
| Liquidity / total debt (x) | (Cash + Undrawn committed facilities) / Total Debt | 1,800.633 | Chart data: liquidity Cash plus Undrawn committed facilities | 3,325.408 | T4.6 Total Debt | FY2024 / 2024-12-31 | USD | US$m | 0.54 | Calculated | Tier 1 | Undrawn amounts include San Mateo capacity that is available only inside San Mateo |
| Liquidity / total debt (x) | (Cash + Undrawn committed facilities) / Total Debt | 2,015.114 | Chart data: liquidity Cash plus Undrawn committed facilities | 3,402.102 | T4.6 Total Debt | FY2025 / 2025-12-31 | USD | US$m | 0.59 | Calculated | Tier 1 | Undrawn amounts include San Mateo capacity that is available only inside San Mateo |
| Liquidity / total debt (x) | (Cash + Undrawn committed facilities) / Total Debt | 1,832.829 | Chart data: liquidity Cash plus Undrawn committed facilities | 4,967.908 | T4.6 Total Debt | 2026-09-30 | USD | US$m | 0.37 | Calculated | Tier 2b | Undrawn amounts include San Mateo capacity that is available only inside San Mateo |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|---|
| Operating (period flow) | Average daily production (BOE per day) | 170,751 | 207,070 | 205,648 | 217,982 | 209,184 | 230,470 | Up | Year-on-year rise of 10% in the third quarter; the 2026 volumes include no Paloma production before October 1 |
| Operating (period flow) | Total oil equivalent production (MBOE) | 62,495 | 75,581 | 56,142 | 59,508 | 19,245 | 21,203 | Up | Estimated at one barrel per six thousand cubic feet |
| Operating (period flow) | Oil production (MBbl) | 36,530 | 43,699 | 32,534 | 34,446 | 10,999 | 12,146 | Up | Oil is the larger revenue stream |
| Operating (period flow) | Natural gas production (Bcf) | 155.8 | 191.3 | 141.7 | 150.4 | 49.5 | 54.3 | Up | Includes liquids-rich gas |
| Price (period rate) | Oil price without realized derivatives (USD per Bbl) | 75.89 | 64.99 | 67.09 | 86.35 | 64.91 | 87.25 | Up in 2026 | Realized derivatives lower the nine-month 2026 price to 75.48 and the third quarter to 74.84 |
| Price (period rate) | Natural gas price without realized derivatives (USD per Mcf) | 2.38 | 2.08 | 2.49 | 1.02 | 1.95 | 2.99 | Volatile | Nine-month 2026 average of 1.02 reflects negative realizations in the second quarter before the Hugh Brinson pipeline opened on 2026-09-01 |
| Reserves (period end) | Total proved reserves (MBOE) | 611,537 | 667,047 | Not supplied: not stated at 2025-09-30 | Not supplied: audited reserves are stated only at year-end | Not supplied: not stated at 2025-09-30 | Not supplied: audited reserves are stated only at year-end | Up | Year-end sums of proved developed and proved undeveloped reserves; the release states 771 million BOE pro forma at 2026-09-30 on internal estimates |
| Reserves (period end) | Standardized Measure (USD thousands) | 7,376,550 | 6,986,566 | Not supplied: not stated at 2025-09-30 | Not supplied: audited measure is stated only at year-end | Not supplied: not stated at 2025-09-30 | Not supplied: audited measure is stated only at year-end | Down | Lower average oil price used at year-end 2025 |
| Margin (period flow) | EBITDA margin, reported (%) | 68.75 | 65.94 | 66.25 | 63.69 | 65.57 | 60.17 | Down | Derived from T4.4; derivative losses reduce 2026 margins |

### Segment schedule

| Segment | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Exploration and production: segment revenues | 3,177,807 | 3,366,164 | 2,608,846 | 2,721,407 | 857,122 | 1,041,730 | USD thousands | Calculated: oil and natural gas revenues + sales of purchased natural gas + realized and unrealized derivative results of the segment | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Midstream: segment revenues before eliminations | 639,611 | 715,245 | 520,321 | 611,023 | 181,177 | 237,079 | USD thousands | Calculated: oil and natural gas revenues + midstream services revenues (including revenue from Matador's own production) + sales of purchased natural gas of the segment | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Consolidations and eliminations: revenues | -312,437 | -385,132 | -280,882 | -311,758 | -99,284 | -116,166 | USD thousands | Reported: elimination of midstream services revenues associated with Company-owned production | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Consolidated total revenues | 3,504,981 | 3,696,277 | 2,848,285 | 3,020,672 | 939,015 | 1,162,643 | USD thousands | Reported; equals the T4.4 total revenues row and the three rows above | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Exploration and production: operating income | 1,302,479 | 1,064,891 | 861,039 | 875,463 | 265,281 | 315,481 | USD thousands | Reported segment operating income | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Midstream: operating income | 245,993 | 278,269 | 210,019 | 208,430 | 72,312 | 74,429 | USD thousands | Reported; includes net income attributable to non-controlling interests (USD 101,548 thousand in FY2025) | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Corporate and eliminations: operating income (loss) | -113,774 | -116,618 | -87,264 | -105,868 | -31,614 | -36,028 | USD thousands | Reported: corporate costs not allocated to a segment, with eliminations netting to nil at operating income | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Consolidated operating income | 1,434,698 | 1,226,542 | 983,794 | 978,025 | 305,979 | 353,882 | USD thousands | Reported; equals the T4.4 operating income row | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Exploration and production: total assets (period end) | 9,117,095 | 9,737,486 | 9,663,974 | 11,902,834 | 9,663,974 | 11,902,834 | USD thousands | Reported; the 9M and Q3 columns are the balances at the period end shown | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Midstream: total assets (period end) | 1,613,936 | 1,833,673 | 1,832,452 | 2,672,391 | 1,832,452 | 2,672,391 | USD thousands | Reported; the increase to 2026-09-30 reflects the Cardinal acquisition | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Corporate: total assets (period end) | 119,078 | 139,410 | 150,282 | 118,088 | 150,282 | 118,088 | USD thousands | Reported; excludes intercompany receivables and investments in subsidiaries | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |
| Consolidated total assets (period end) | 10,850,109 | 11,710,569 | 11,646,708 | 14,693,313 | 11,646,708 | 14,693,313 | USD thousands | Reported; equals the balance sheet at FY2024, FY2025 and 2026-09-30 | 10-K_2025-12-31_mtdr-20251231.htm.jsonl, pages 272–274; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 30–33 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Net income plus income tax, interest and depletion, depreciation and amortization, with no other adjustment | Adjusted EBITDA adds back accretion, unrealized derivative results, share-based compensation, debt extinguishment, asset sale losses and other non-recurring items; the headline release figure is after non-controlling interests | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 59–60; EX-99.1_2026-11-03_a20260930mtdr8ker-ex991.htm.jsonl, page 16 | FY2024, FY2025, LTM to 2026-09-30 | LTM reported EBITDA USD 2,474.028m against consolidated adjusted USD 2,740.050m, a difference of USD 266.022m; attributable adjusted LTM is USD 2,586.023m | Fundamental credit; Liquidity | Leverage and cover are shown on reported EBITDA with adjusted ratios beside them; the consolidated adjusted figure is used because debt is consolidated |
| Total debt | Balance-sheet carrying value net of issuance costs and discounts | Principal amounts in the debt note | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 16 | 2026-09-30 | Carrying value 4,967.908m against principal 5,003.000m, a difference of 35.092m | Fundamental credit; Refinancing & LME | Carrying value is the leverage numerator; principal is on the maturity ladder |
| Perimeter | Consolidated group | Consolidated with San Mateo at 100%; release measures after non-controlling interests; San Mateo debt is non-recourse to Matador | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, pages 18–19; EX-99.1_2026-11-03_a20260930mtdr8ker-ex991.htm.jsonl, page 4 | All periods | San Mateo debt USD 1,649.266m is 33.20% of total debt at 2026-09-30 | Fundamental credit; Structural priority | Use consolidated figures and state the San Mateo share separately |
| Interest | Cash interest paid, net of amounts capitalized, as the cover denominator | Interest expense in the income statement | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 29 | LTM to 2026-09-30 | Interest expense USD 247.371m against cash interest USD 219.121m | Fundamental credit | Cover uses cash interest paid |
| Cash | Unrestricted cash and equivalents | Cash flow statement ends on cash and restricted cash | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 7 | 2026-09-30 | Restricted cash USD 58.357m, held mainly for San Mateo | Liquidity | Net debt deducts unrestricted cash only |
| Paloma consideration | Single closing figure | USD 1.275 billion agreed in July 2026; about USD 1.255 billion as-adjusted at closing; USD 63.750m paid as a deposit before September 30 | 10-Q_2026-06-30_mtdr-20260630.htm.jsonl, page 27; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 34; 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 58 | 2026-09-30 and later | The two stated prices differ by USD 20 million; the later closing figure controls | Refinancing & LME | Use the closing figure; show the deposit as already paid |
| Debt-like obligations | Debt lines as the issuer carries them | Sale-leaseback financing obligation of USD 24,000 thousand proceeds is in the cash flow but not in the debt note | 10-Q_2026-09-30_mtdr-20260930.htm.jsonl, page 7 | 9M 2026 | USD 23.316m net of payments, outside total debt | Liquidity; Fundamental credit | Not added to debt; flagged as a limitation |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1.38 | 1.37 | x | Carrying-value debt over reported EBITDA for the year; adjusted ratios are in the calculation register |
| FY2025 / 2025-12-31 | 1.40 | 1.39 | x | Carrying-value debt over reported EBITDA for the year; adjusted ratios are in the calculation register |
| 2026-09-30 | 2.01 | 2.00 | x | Carrying-value debt at 2026-09-30 over LTM reported EBITDA; excludes the Paloma purchase and borrowing after the balance sheet date; adjusted ratios are in the calculation register |

The 2026-09-30 ratios divide period-end debt by earnings that include only two months of Cardinal and none of Paloma.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 15.03 | x | Reported EBITDA over cash interest paid for the year |
| FY2025 / 2025-12-31 | 12.41 | x | Reported EBITDA over cash interest paid for the year |
| 2026-09-30 | 11.29 | x | LTM reported EBITDA over LTM cash interest paid net of amounts capitalized |

No qualification.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 23.033 | 1,777.600 | US$m | Unrestricted cash; undrawn is Credit Agreement commitments of 2,250.000 less borrowings 595.500 and letters of credit about 52.9, plus San Mateo commitments 800.000 less 615.000 and letters of credit about 9.0; calculated |
| FY2025 / 2025-12-31 | 15.314 | 1,999.800 | US$m | Unrestricted cash; undrawn is Credit Agreement commitments of 2,250.000 less borrowings 398.000 and letters of credit about 53.8, plus San Mateo commitments 1,100.000 less 883.000 and letters of credit about 15.4; calculated |
| 2026-09-30 | 11.756 | 1,821.073 | US$m | Unrestricted cash; undrawn is the Credit Agreement availability of 1,745.941 after letters of credit plus San Mateo revolver availability of 75.132, both as stated in the quarterly report; excludes cash of about 58.357 restricted for San Mateo |

The undrawn amount includes San Mateo capacity that cannot be used by Matador's other entities, and borrowing after the balance sheet date is not reflected.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| 2027 | 650.000 | US$m | San Mateo Term Loan principal due 2027-07-30, a current liability at 2026-09-30; refinancing not assured |
| 2029 | 1,953.000 | US$m | Credit Agreement 951.000 due 2029-03-22 plus San Mateo revolver 1002.000 due 2029-11-26; the Credit Agreement can mature earlier if availability is under 20% before a notes redemption date |
| 2032 | 900.000 | US$m | 6.500% senior notes due 2032-04-15 |
| 2033 | 750.000 | US$m | 6.250% senior notes due 2033-04-15 |
| 2034 | 750.000 | US$m | 6.000% senior notes due 2034-04-15; no other maturities are stated in the debt note and borrowing after 2026-09-30 is not included |

The ladder is contractual principal at 2026-09-30 and excludes the Paloma-related Credit Agreement borrowing of the following weeks.

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 3,325.408 | 23.033 | 3,302.375 | US$m | Reported: carrying value of Credit Agreement, San Mateo facility and senior notes net of issuance costs and discounts; principal is 3,360.500; lease liabilities are not in the debt lines |
| FY2025 / 2025-12-31 | 3,402.102 | 15.314 | 3,386.788 | US$m | Reported: carrying value as above; principal is 3,431.000; the sale-leaseback financing obligation is not in the debt lines |
| 2026-09-30 | 4,967.908 | 11.756 | 4,956.152 | US$m | Reported: carrying value including the current San Mateo Term Loan of 647.266 net of 2.734 costs and notes net of 32.358 costs; principal is 5,003.000; excludes the Paloma-related borrowing after the balance sheet date |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 5,003.000 | -35.092 | 4,967.908 | US$m | Principal is the sum of the maturity ladder (5,003.000); reconciling items are issuance costs of the San Mateo Term Loan of -2.734 and issuance costs and discounts of the senior notes of -32.358, and no debt is left out of the ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Paloma Acquisition closed | 2026-10-01 | 1,191.250 | 6,147.402 | 2.48 | US$m | Net debt effect is the as-adjusted closing price of about 1,255.000 less the deposit of 63.750 already paid before 2026-09-30 (assumes the deposit is credited to the price, which the filing does not state); pro forma net debt adds it to net debt at 2026-09-30 and leverage divides by the same LTM reported EBITDA, which holds no Paloma earnings; funded by cash and Credit Agreement borrowings |
| Credit Agreement borrowings to 2026-11-03 | Not supplied: the source states the period 2026-09-30 to 2026-11-03 only | Not supplied: the cash used is not stated, so the effect on net debt cannot be separated from the Paloma row | Not supplied: overlaps the Paloma row | Not supplied: overlaps the Paloma row | US$m | Net borrowings rose by $1.30 billion, from $951.0 million to $2.25 billion, of which $150 million was repaid after the closing; undrawn Credit Agreement capacity falls to about 446.9 on commitments of 2,750.000 and letters of credit of about 53.1 |
| Repayment of Credit Agreement borrowings | Not supplied: the release states October 2026 only | Not supplied: the source of the repayment cash is not stated | Not supplied: the effect on net debt is not stated | Not supplied: the effect on net debt is not stated | US$m | The release states USD 150 million repaid in October 2026 and an intention to repay 350 to 400 by year-end; it is funded by free cash flow, which would reduce net debt by an amount not stated |
| Ridge Runner acquisition closed | Not supplied: the release states October 2026 only | Not supplied: the price is not stated in the sources | Not supplied: the price is not stated in the sources | Not supplied: the price is not stated in the sources | US$m | The third-quarter release says the transaction closed in October 2026; the quarterly report does not name it as a subsequent event and no consideration or funding is stated |
| Annual dividend rate increased to USD 1.75 per share from USD 1.50 per share | Not supplied: the release says recently announced, with no day | Not supplied: dividends are declared quarterly and no net debt amount is stated | Not supplied: not stated | Not supplied: not stated | US$m | Announced in the third-quarter release; the quarterly rate in the quarterly report is 0.375 per share; no cash effect before payment |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 | 3,504.981 | 2,422.824 | US$m | Twelve months; total revenues including derivative results; Adjusted EBITDA is the issuer-adjusted consolidated measure |
| FY2025 | 3,696.277 | 2,438.662 | US$m | Twelve months; same definitions as FY2024 |
| LTM 2026-09-30 | 3,868.664 | 2,740.050 | US$m | Twelve months built as FY2025 plus nine months 2026 less nine months 2025; same definitions; includes only two months of Cardinal and no Paloma |

Revenue includes realized and unrealized derivative results, so the last twelve months understate the underlying growth in oil and gas sales.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Credit Agreement due 2029 | 1 | Yes | 951.000 | 0.38 | US$m | Borrower MRC Energy Company; guaranteed by Matador and subsidiary guarantors; San Mateo is not a guarantor; principal; cumulative debt is divided by LTM reported EBITDA of 2,474.028 |
| San Mateo Revolving Credit Facility due 2029 | 1 | Yes | 1,002.000 | 0.79 | US$m | Obligor San Mateo; guaranteed by San Mateo subsidiaries; non-recourse to Matador; equal rank number because each facility is first-ranking secured debt of its own obligor; principal; cumulative debt is divided by LTM reported EBITDA of 2,474.028 |
| San Mateo Term Loan due 2027 | 1 | Yes | 650.000 | 1.05 | US$m | Obligor San Mateo; same security as the San Mateo revolver; principal before 2.734 of issuance costs; cumulative debt is divided by LTM reported EBITDA of 2,474.028 |
| 6.500% senior notes due 2032 | 2 | No | 900.000 | 1.42 | US$m | Issuer Matador; guaranteed by certain subsidiaries; San Mateo is not a guarantor; principal; cumulative debt is divided by LTM reported EBITDA of 2,474.028 |
| 6.250% senior notes due 2033 | 2 | No | 750.000 | 1.72 | US$m | Issuer Matador; same guarantors as the 2032 notes; principal; cumulative debt is divided by LTM reported EBITDA of 2,474.028 |
| 6.000% senior notes due 2034 | 2 | No | 750.000 | 2.02 | US$m | Issuer Matador; same guarantors as the 2032 notes; principal; cumulative debt is divided by LTM reported EBITDA of 2,474.028 |

Equal ranking numbers do not mean equal claims on the same assets, because the San Mateo facilities are secured on San Mateo's assets only and are non-recourse to Matador.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), nine months 2026 | 1,923.769 | US$m | Calculated reported measure: net income 592.933 + income tax 187.701 + interest 192.326 + depletion, depreciation and amortization 950.809 |
| Accretion of asset retirement obligations | 8.615 | US$m | Issuer add-back, reported |
| Unrealized loss on derivatives | 237.744 | US$m | Issuer add-back, reported; non-cash |
| Non-cash stock-based compensation expense | 17.529 | US$m | Issuer add-back, reported |
| Loss on debt extinguishment | 15.587 | US$m | Issuer add-back, reported; tender premium and write-off on the 2028 notes |
| Loss on asset sales | 0.578 | US$m | Issuer add-back, reported |
| Other non-recurring expense | 10.339 | US$m | Issuer add-back, reported; realization status not stated |
| Consolidated Adjusted EBITDA, nine months 2026 | 2,214.161 | US$m | Issuer-stated consolidated measure before non-controlling interests; attributable to Matador shareholders it is 2,096.455 |

The bridge covers nine months, not twelve, and the unrealized derivative loss is the dominant add-back.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 or balance at 2026-09-30 | Unit | Basis |
|---|---|---|---|---|---|
| Total revenues | 3,504.981 | 3,696.277 | 3,868.664 | US$m | Calculated for LTM; includes derivative results |
| EBITDA (Reported) | 2,409.694 | 2,437.322 | 2,474.028 | US$m | Derived from components |
| EBITDA (Adjusted, consolidated) | 2,422.824 | 2,438.662 | 2,740.050 | US$m | Issuer-stated; before non-controlling interests |
| Cash interest paid | 160.273 | 196.368 | 219.121 | US$m | Net of amounts capitalized |
| Net cash from operating activities | 2,246.885 | 2,425.015 | 2,476.555 | US$m | Consolidated |
| Free cash flow after organic capital expenditures | 734.482 | 580.770 | 688.366 | US$m | Excludes acquisitions |
| Total debt (carrying value) | 3,325.408 | 3,402.102 | 4,967.908 | US$m | Period end |
| Cash | 23.033 | 15.314 | 11.756 | US$m | Unrestricted; period end |
| Net debt | 3,302.375 | 3,386.788 | 4,956.152 | US$m | Period end |
| Total debt / EBITDA | 1.38 | 1.40 | 2.01 | x | Reported EBITDA |
| Net debt / EBITDA | 1.37 | 1.39 | 2.00 | x | Reported EBITDA |
| Total debt / adjusted EBITDA | 1.37 | 1.40 | 1.81 | x | Consolidated adjusted EBITDA |
| EBITDA / cash interest | 15.03 | 12.41 | 11.29 | x | Reported EBITDA over cash interest |
| Liquidity (cash plus undrawn committed facilities) | 1,800.633 | 2,015.114 | 1,832.829 | US$m | Includes San Mateo capacity |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and coverage at 2026-09-30 | Ready with Limitations | Balance sheet predates the Paloma closing; LTM EBITDA holds no Paloma earnings and two months of Cardinal; no pro forma balance sheet is supplied | Use the post-balance-sheet row for the pro forma view and refresh when the next filing appears |
| Liquidity at 2026-09-30 and after | Ready with Limitations | Credit Agreement capacity after 2026-11-03 is computed from rounded stated figures; restricted cash and San Mateo capacity are not available to other entities | Treat the 446.9 undrawn figure as approximate |
| Debt maturity ladder | Ready | Contractual principal at 2026-09-30 reconciles to carrying value | None |
| Covenant compliance and headroom | Not Ready | No executed credit agreement or indenture was supplied; the filings state the tests and compliance but the covenant EBITDA is not computable | Obtain the governing documents before any headroom conclusion |
| Segment and perimeter analysis | Ready with Limitations | San Mateo is consolidated at 100% and its standalone EBITDA and debt service are not separately stated | Obtain San Mateo standalone figures if the structural view matters |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 46 |
| Calculated | 24 |
| Assumption-Based | 1 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 8 |
| Fields present | 19 |
| Fields total | 20 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 9 |

## Calculations

| ID | Calculation | Inputs | Result |
|---|---|---|---|
| C1 | EBITDA (Reported) FY2024 | net income 971,343 + income tax 292,364 + interest expense 171,687 + depletion, depreciation and amortization 974,300 | 2,409,694 (USD thousands) |
| C2 | EBITDA (Reported) FY2025 | 860,769 + 172,675 + 208,520 + 1,195,358 | 2,437,322 (USD thousands) |
| C3 | EBITDA (Reported) nine months 2025 | 645,230 + 198,511 + 153,475 + 889,847 | 1,887,063 (USD thousands) |
| C4 | EBITDA (Reported) nine months 2026 | 592,933 + 187,701 + 192,326 + 950,809 | 1,923,769 (USD thousands) |
| C5 | EBITDA (Reported) Q3 2025 | 200,624 + 59,128 + 50,641 + 305,354 | 615,747 (USD thousands) |
| C6 | EBITDA (Reported) Q3 2026 | 195,099 + 81,548 + 79,982 + 342,961 | 699,590 (USD thousands) |
| C7 | EBITDA (Reported) LTM to 2026-09-30 | FY2025 2,437,322 + nine months 2026 1,923,769 - nine months 2025 1,887,063 | 2,474,028 (USD thousands); LTM growth over FY2025 is 1.51% |
| C8 | EBITDA (Adjusted) LTM to 2026-09-30 | FY2025 2,438,662 + nine months 2026 2,214,161 - nine months 2025 1,912,773 | 2,740,050 (USD thousands) |
| C9 | Difference between consolidated adjusted and reported LTM EBITDA | 2,740,050 - 2,474,028; components: accretion 10,819 + unrealized derivative result 207,370 + share-based compensation 21,215 + asset sale losses 578 + debt extinguishment 15,587 + other non-recurring 10,453 | 266,022 (USD thousands); of which unrealized derivative result 207,370 |
| C10 | Cash interest paid LTM to 2026-09-30 | FY2025 196,368 + nine months 2026 133,485 - nine months 2025 110,732 | 219,121 (USD thousands); LTM interest expense 208,520 + 192,326 - 153,475 = 247,371 |
| C11 | Net cash from operating activities LTM to 2026-09-30 | 2,425,015 + 2,002,106 - 1,950,566 | 2,476,555 (USD thousands) |
| C12 | Free cash flow after organic capital expenditures | operating cash flow less drilling, completion and equipping, midstream and other property capital expenditures: FY2024 734,482; FY2025 580,770; nine months 2025 617,073; nine months 2026 724,669; LTM 580,770 + 724,669 - 617,073 | 688,366 (USD thousands) LTM; acquisitions 9M 2026: 1,277,510 + 760,958 + 63,750 = 2,102,218 |
| C13 | Net debt and the change in total debt | gross debt 4,967,908 - cash 11,756 at 2026-09-30; FY2025 3,402,102 - 15,314; FY2024 3,325,408 - 23,033; change in total debt 4,967,908 - 3,402,102 = 1,565,806 | 4,956,152; 3,386,788; 3,302,375 (USD thousands); debt rose 46.02% |
| C14 | Debt principal to carrying value at 2026-09-30 | principal 650,000 + 951,000 + 1,002,000 + 900,000 + 750,000 + 750,000 = 5,003,000; reconciling items -2,734 - 32,358 = -35,092 | carrying value 4,967,908 (USD thousands); principal exceeds carrying value by 35,092 |
| C15 | Leverage ratios | total debt / reported EBITDA: 3,325,408/2,409,694 = 1.38; 3,402,102/2,437,322 = 1.40; 4,967,908/2,474,028 = 2.01; net debt / reported EBITDA: 1.37; 1.39; 2.00 | 1.38x, 1.40x, 2.01x total; 1.37x, 1.39x, 2.00x net |
| C16 | Interest cover | reported EBITDA / cash interest: 2,409,694/160,273 = 15.03; 2,437,322/196,368 = 12.41; 2,474,028/219,121 = 11.29 | 15.03x, 12.41x, 11.29x |
| C17 | Liquidity at 2026-09-30 | cash 11,756 + Credit Agreement availability 1,745,941 + San Mateo revolver availability 75,132 | 1,832,829 (USD thousands) |
| C18 | Paloma net debt effect and pro forma net leverage | price 1,255,000 less deposit 63,750 = 1,191,250; pro forma net debt 4,956,152 + 1,191,250 = 6,147,402; divided by LTM reported EBITDA 2,474,028 | pro forma net leverage 2.48x; pro forma net debt USD 6,147.402 million; agreed price USD 1,275 million in July 2026 against USD 1,255 million as-adjusted at closing, a difference of USD 20 million |
| C19 | Credit Agreement borrowings and capacity after 2026-09-30 | 2.25 billion - 951.0 million = 1,299.0 million (stated increase 1.30 billion); commitments 2,750.0 - borrowings 2,250.0 - letters of credit 53.1 | undrawn about $446.9 million (rounded inputs) |
| C20 | San Mateo share of total debt at 2026-09-30 | revolver 1,002,000 + term loan carrying 647,266 = 1,649,266; divided by total debt 4,967,908 | 33.20% |
| C21 | Organic cash flow against acquisitions | free cash flow nine months 2026 724,669 against acquisitions 2,102,218 | shortfall of 1,377,549 (USD thousands) funded by debt |
| C22 | Net derivative liability at 2026-09-30 | current liability 198,376 + long-term liability 12,130 - current asset 6,815 | 203,691 (USD thousands); year-end 2025 net asset 34,052 |
| C23 | Attributable adjusted EBITDA LTM | FY2025 2,294,551 + nine months 2026 2,096,455 - nine months 2025 1,804,983 | 2,586,023 (USD thousands) against consolidated 2,740,050, a difference of 154,027 |
| C25 | Royalties payable and advances from joint interest owners | royalties payable 378,406 at 2026-09-30 less 351,062 at 2025-12-31; advances from joint interest owners 79,564 | 27,344 increase in nine months (USD thousands), or 7.79% of year-end 2025 royalties payable |
| C24 | Restricted cash at 2026-09-30 | cash and restricted cash 70,113 - unrestricted cash 11,756 | 58,357 (USD thousands) |

## Gaps

- High: no unadjusted EBITDA is printed, so EBITDA (Reported) for every period is derived from components and the issuer's adjusted measure is a separate row; covenant EBITDA cannot be reproduced, which restricts any headroom statement until the governing documents are supplied.
- High: no executed credit agreement or indenture was supplied, so covenant levels, guarantor lists and baskets rest on the debt notes; obtaining the documents would close this.
- High: the balance sheet is at September 30, 2026 while the Paloma acquisition closed on October 1, 2026; no pro forma balance sheet or pro forma EBITDA is stated, so the pro forma figures are the analyst's calculation on stated amounts and exclude Paloma earnings.
- Medium: the net debt effect of the post-quarter Credit Agreement borrowing, the $150 million repayment, the Ridge Runner closing and the dividend increase is not stated, so only the Paloma row is quantified; the next filing would close this.
- Medium: Ridge Runner's closing date, price and funding are not stated in any supplied document, and the quarterly report does not list it as a subsequent event.
- Medium: the sale-leaseback financing obligation of USD 24,000 thousand proceeds is not described in the debt note and is not in total debt; its balance and classification would close this.
- Medium: carrying values for each senior note are not stated (only the aggregate net of issuance costs and discounts), so each note is shown at principal with one financing cost adjustment.
- Low: lines printed as a dash in the filings (for example goodwill and intangible assets before 2026, the notes issuance lines in 2025 and the debt extinguishment line) are shown as not supplied, not as zero, per the method.
- Low: the undrawn amounts at year-end 2024 and 2025 are calculated from commitments, borrowings and the approximate letters of credit stated in the annual reports, because those reports print no availability table; a stated table would close this.
- Low: the San Mateo Term Loan reference rate, floor and amortisation, and the Credit Agreement and revolver floors, are not stated in the supplied notes.
- Low: standalone San Mateo EBITDA, debt service and distributions are not stated, which limits the structural view of the 33.20% of debt held there.
- Low: interim balance sheets for March 31, 2026 and June 30, 2026 are in the quarterly reports but are not tabulated here, so the quarterly path of debt between year-end and September is not charted.

## Next module

The orchestrator selects the next module.
