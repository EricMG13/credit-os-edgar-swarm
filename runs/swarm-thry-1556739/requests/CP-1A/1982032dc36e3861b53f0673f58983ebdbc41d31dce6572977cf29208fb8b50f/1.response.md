---
module_id: CP-1A
module_name: BusinessTransactionFactPack
issuer_id: thry-1556739
analysis_date: 2026-11-18
run_id: thry-1556739-2026-11-18-credit_snapshot-host
pathway: credit_snapshot
---

# Business and governance: Thryv Holdings, Inc. (thry-1556739)

## Request

Business, transaction, ownership and governance fact pack for Thryv Holdings, Inc. (issuer thry-1556739), as of 2026-11-18, pathway credit_snapshot (Full credit assessment). Scope: what the company does, who controls it, what it has done with its capital and what transaction is pending, from five SEC filings.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_thry.htm.jsonl | Visible-text extraction of the annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-27 | 282980666d3a5a06b5af2d5429137e362482dcfdc1b3bba5918f0727d2c53a53 | Keap funding, ABL size, 2024 history. Document date is the signature date. |
| 10-K_2025-12-31_thry.htm.jsonl | Visible-text extraction of the annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-26 | faf758b44ae5df8fec898bbc507989fec9683935c5c0a4d014cb5f042fa5ff17 | Business, competition, governance provisions, holders of record, dividends, acquisitions, revenue by type. Document date is the signature date. |
| 10-Q_2026-03-31_thry.htm.jsonl | Visible-text extraction of the quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-30 | 2920a22d6eeccdfffeae8ccc16ace65c14c7678a339d93c27519c6de59863a14 | Signature date and reporting cadence only; not recast for the print sale. Document date is the signature date. |
| 10-Q_2026-06-30_thry.htm.jsonl | Visible-text extraction of the quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-04 | 8268f9e47f9d7b81e9e17f40ae4c224df8143d74fa7a0127a2505231f9437fea | Signature date and reporting cadence only; not recast for the print sale. Document date is the signature date. |
| 10-Q_2026-09-30_thry.htm.jsonl | Visible-text extraction of the quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-09 | a894cef210c66630722da5f2cb4baeae3c58e9ed007152c412d67ede30ceed27 | Recast business and segment data, Print Business sale, restructuring, debt, covenants, going-concern disclosure. Document date is the signature date. |

| Handoff module | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| CP-0 Source readiness | Source readiness register for the five filings | 2026-11-18 | ca1a9c4ec1bc3bb0ce505e781ca29a2ccd098b774b2ea5b6d7ed7bf7c658c4a6 | Source hierarchy, perimeter break between the filings, missing documents (executed loan agreements, proxy statement, sale agreement) and the cutoff of 2026-11-09 for the latest filing. |

## Findings

### Bottom line

Thryv is turning into a smaller software-only business, and its creditors will depend on SaaS earnings that are not yet proven at that scale, because the print directories that carried its cash flow are being sold while client numbers and retention fall. SaaS is already 91.22% of continuing revenue but grew only 0.35% in the first nine months of 2026, total clients fell 19% in a year and seasoned retention slipped to 89% from 94%. A related party holds both equity and 40.0% of the Term Loan, so it carries weight in any covenant waiver.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 43; 10-Q_2026-09-30_thry.htm.jsonl, page 44; calculation C3; calculation C5

### Key findings

The sale turns Thryv into a software business, but the SaaS share of revenue rose mostly because print was removed, not because SaaS grew. SaaS was 58.73% of 2025 revenue as originally reported and is 91.22% of continuing revenue for the first nine months of 2026, yet SaaS revenue was USD 343,242 thousand against USD 342,037 thousand a year earlier, a rise of 0.35%. Creditors lose the print cash flow and gain a business whose growth has not yet replaced it.
Basis: 10-K_2025-12-31_thry.htm.jsonl, page 165; 10-Q_2026-09-30_thry.htm.jsonl, page 34; 10-Q_2026-09-30_thry.htm.jsonl, page 35; calculation C1; calculation C3; calculation C5

SaaS demand is weakening beneath flat revenue. Total clients fell 19% and SaaS clients 5% between September 30, 2025 and September 30, 2026, and seasoned net revenue retention fell to 89% from 94% in the third quarter because downgrades and cancellations outran upsell after the company refocused its product strategy; third-quarter SaaS revenue fell 3.35%. A shrinking client base lowers the recurring revenue that supports debt service even though monthly revenue per SaaS client rose 2%.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 42; 10-Q_2026-09-30_thry.htm.jsonl, page 43; 10-Q_2026-09-30_thry.htm.jsonl, page 44; calculation C5

Margins are being diluted by free conversions and are not yet recovering. SaaS gross margin fell to 64.0% in the first nine months from 70.0% because Digital clients were upgraded to SaaS at no charge, and the company expects USD 50.0 million to USD 55.0 million of gross annualized savings from restructuring to be realised in full only from 2028, with a further USD 15.0 million to USD 20.0 million of cost still to come. Until then creditors rely on the execution of cuts rather than on proven margin.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 52; 10-Q_2026-09-30_thry.htm.jsonl, page 40; 10-Q_2026-09-30_thry.htm.jsonl, page 30

Capital allocation has been creditor-supportive in form but has not protected the balance sheet. The 2024 Keap purchase was funded mainly with equity of USD 76.8 million plus USD 11.5 million and USD 5.5 million of ABL borrowing, USD 21.9 million of Term Loan prepayments were made in 2025 and no dividend has ever been paid; against that, USD 4,999 thousand of shares were repurchased in 2025 while debt was high, and the SaaS reporting unit later needed a USD 94.8 million goodwill impairment.
Basis: 10-K_2024-12-31_thry.htm.jsonl, page 91; 10-K_2025-12-31_thry.htm.jsonl, page 144; 10-K_2025-12-31_thry.htm.jsonl, page 85; 10-K_2025-12-31_thry.htm.jsonl, page 119; 10-Q_2026-09-30_thry.htm.jsonl, page 20; calculation C10

Governance gives creditors visibility but little control. The Company is a holding company whose Term Loan borrower is Thryv, Inc.; the board is classified with staggered three-year terms, the chief executive officer is also chairman, and the filings name no controlling shareholder, but they leave directors' ownership and the identity of the related-party lender to a proxy statement that is not supplied. A covenant waiver needs a majority of lenders and the related party holds 40.0% of the Term Loan, so its incentives decide the outcome as much as any other lender's.
Basis: 10-K_2025-12-31_thry.htm.jsonl, page 80; 10-K_2025-12-31_thry.htm.jsonl, page 169; 10-K_2025-12-31_thry.htm.jsonl, page 172; 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 56

Disclosure is timely and candid on the going-concern risk but silent on the numbers lenders test. The company disclosed substantial doubt about continuing as a going concern and a forecast covenant breach in its third-quarter report, yet it prints no reported leverage ratio, no covenant EBITDA and no minimum SaaS revenue thresholds, and its third-quarter report omits market-risk disclosure as a smaller reporting company.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 24; 10-Q_2026-09-30_thry.htm.jsonl, page 61

The sale is the central transaction and is only partly visible. The price is USD 142.0 million and can be reduced for each month that closing is delayed, and the proceeds are earmarked for the ABL, USD 34.3 million of accrued tax liabilities and part of the Term Loan; the purchase agreement itself is not supplied, so the adjustment formula, the closing conditions and any holdback are not established.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 63; 10-Q_2026-09-30_thry.htm.jsonl, page 66

### Contrary evidence and what would change the view

SaaS profitability is improving and SaaS now carries the group: SaaS Adjusted EBITDA rose to USD 22,098 thousand in the first nine months of 2026 from USD 16,726 thousand, a margin of 6.44% against 4.89%, monthly revenue per SaaS client rose 8% over the nine months and price increases took effect in the second quarter of 2026. A buyer paying USD 142.0 million in cash for a declining print business also shows the legacy assets still have value, and clients converted free of charge were leaving at about the same rate as other SaaS clients in the first nine months of 2026.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 35; 10-Q_2026-09-30_thry.htm.jsonl, page 40; 10-Q_2026-09-30_thry.htm.jsonl, page 44; calculation C6

That would outweigh the weak client trend if seasoned retention returned toward 94%, if the sale closed on the stated terms and if the lenders waived the covenant on the current structure. A further fall in seasoned retention, a closing delayed by the monthly price reduction or a refused waiver would confirm the weaker view.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 44; 10-Q_2026-09-30_thry.htm.jsonl, page 63

### Limitations

- The proxy statement is not supplied, so the conclusion that no controlling shareholder exists rests on the filings' silence; a named large holder would move the governance view toward a controlled-company reading.
- The sale agreement is not supplied, so the conclusion that proceeds reduce debt rests on the quarterly report's summary; a different closing condition or a larger price reduction would weaken it.
- Seasoned retention is reported only for the third quarter and leaves out clients acquired with Keap, and client counts are recast only for the two September dates, so the conclusion that SaaS demand is weakening rests on a short run of data; a stable fourth quarter would soften it.
- No source states the related-party lender's identity or equity stake, so the conclusion that its vote carries weight in a waiver rests on its 40.0% loan share alone.

### Company and operating model

| Item | Detail | Source |
|---|---|---|
| Business | Software-led platform company that helps small and medium-sized businesses run and grow; the SaaS platform covers customer acquisition, engagement, operations and retention. Management calls SaaS the strategic growth engine | 10-K_2025-12-31_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 10 |
| Segments | SaaS (unified small business marketing platform, supporting software, extensions, payments, professional services) and Marketing Services (digital marketing solutions, which the company plans to exit by the end of 2028; print sold under the pending transaction) | 10-Q_2026-09-30_thry.htm.jsonl, page 12; 10-Q_2026-09-30_thry.htm.jsonl, page 37 |
| Clients | About 110,000 SMB clients on the recast perimeter at 2026-09-30, down 19% from a year earlier; SaaS clients down 5%; about 230,000 at 2025-12-31 before the print recast | 10-Q_2026-09-30_thry.htm.jsonl, page 36; 10-Q_2026-09-30_thry.htm.jsonl, page 42; 10-Q_2026-09-30_thry.htm.jsonl, page 43; 10-K_2025-12-31_thry.htm.jsonl, page 6 |
| Revenue mix, nine months 2026 | SaaS 91.22% and Marketing Services 8.78% of continuing revenue of USD 376,274 thousand | 10-Q_2026-09-30_thry.htm.jsonl, page 34 |
| Revenue model | Subscriptions, platform extensions, payment solutions and professional services; substantially all contracts last one year or less and revenue is recognised over time | 10-Q_2026-09-30_thry.htm.jsonl, page 17; 10-Q_2026-09-30_thry.htm.jsonl, page 18 |
| Operating drivers | Client count, monthly revenue per client (SaaS USD 373 in Q3 2026, up 2%), seasoned net revenue retention (89% against 94%), free conversion of Digital clients to SaaS (about 16,000 clients in the last twelve months) | 10-Q_2026-09-30_thry.htm.jsonl, page 40; 10-Q_2026-09-30_thry.htm.jsonl, page 43; 10-Q_2026-09-30_thry.htm.jsonl, page 44 |
| Margins | SaaS gross margin 64.0% in nine months 2026 against 70.0%; SaaS Adjusted EBITDA margin 6.44% against 4.89% | 10-Q_2026-09-30_thry.htm.jsonl, page 52; 10-Q_2026-09-30_thry.htm.jsonl, page 35 |
| Cost programme | Restructuring expected to deliver USD 50.0 million to USD 55.0 million of gross annualized savings, full benefit from 2028, with USD 15.0 million to USD 20.0 million of further cost | 10-Q_2026-09-30_thry.htm.jsonl, page 30 |
| Geography | United States 85.64% and International 14.36% of nine-month 2026 revenue; Australia about 11.3% | 10-Q_2026-09-30_thry.htm.jsonl, page 35 |
| Competition | Point solution providers, vertical solutions and all-in-one competitors in SaaS; national search and social marketing sellers in Marketing Services | 10-K_2025-12-31_thry.htm.jsonl, page 16 |

### Company profile

| Item | Detail | Source |
|---|---|---|
| Legal name and listing | Thryv Holdings, Inc., Delaware corporation; common stock on the Nasdaq Capital Market under THRY after a direct listing on 2020-10-01 | 10-Q_2026-09-30_thry.htm.jsonl, page 1; 10-K_2025-12-31_thry.htm.jsonl, page 85 |
| Headquarters | Grapevine, Texas, United States; operations also in Australia, New Zealand, Canada and Europe | 10-Q_2026-09-30_thry.htm.jsonl, page 1; 10-K_2025-12-31_thry.htm.jsonl, page 90 |
| Fiscal year end and filer status | December 31; accelerated filer and smaller reporting company | 10-Q_2026-09-30_thry.htm.jsonl, page 1 |
| Shares outstanding | 44,453,971 shares at 2026-11-06; 44,447,599 at 2026-09-30 | 10-Q_2026-09-30_thry.htm.jsonl, page 1; 10-Q_2026-09-30_thry.htm.jsonl, page 7 |
| Holders of record | 32 stockholders of record at 2026-02-24; the company believes beneficial owners are many more | 10-K_2025-12-31_thry.htm.jsonl, page 85 |
| Dividends | None ever declared or paid; none expected | 10-K_2025-12-31_thry.htm.jsonl, page 85 |
| Auditor | Grant Thornton LLP, auditor since 2022; its opinion states that the 2025 financial statements present fairly, in all material respects, and that internal control over financial reporting was effective | 10-K_2025-12-31_thry.htm.jsonl, page 114; 10-K_2025-12-31_thry.htm.jsonl, page 116; 10-K_2025-12-31_thry.htm.jsonl, page 167 |
| Senior management | Joseph A. Walsh, Chairman of the Board and Chief Executive Officer; Paul D. Rouse, Chief Financial Officer, Executive Vice President and Treasurer | 10-Q_2026-09-30_thry.htm.jsonl, page 67 |
| Employees | 2,729 at 2025-12-31 including the print business | 10-K_2025-12-31_thry.htm.jsonl, page 16 |
| Pending transaction | Sale of the Print Business for USD 142.0 million in cash, expected to close in Q4 2026 | 10-Q_2026-09-30_thry.htm.jsonl, page 10 |

### Transaction summary and new debt issues

The Print Business sale. On September 12, 2026 Thryv, Inc. agreed to sell its print yellow pages and white pages directories in the United States, Australia and New Zealand, their digital editions and the Australian online white pages to Coldwater YP, LLC, an affiliate of Carolwood, L.P., for a cash purchase price of USD 142.0 million, subject to customary adjustments that include a revenue-based reduction for each month closing is delayed. Closing is expected in the fourth quarter of 2026, the business is presented as discontinued operations, and a transition services arrangement of 12 months, extendable by 2 months, is expected.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 16; 10-Q_2026-09-30_thry.htm.jsonl, page 63

Use of proceeds. The company expects to use the net proceeds to repay and terminate the ABL, which stood at USD 17.6 million at September 30, 2026, to pay USD 34.3 million of accrued tax liabilities that include interest to the expected payment date, and to repay part of the Term Loan. Because it expects to pay the tax liability and the ABL in full at closing, both are shown as current liabilities. The amount of Term Loan to be repaid is not stated.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 23

Debt issued in 2024. On May 1, 2024 Thryv, Inc. entered into a USD 350.0 million senior secured Term Loan, 40.0% held by a related party, that matures on May 1, 2029, bears interest at SOFR plus 6.75% and amortizes by USD 52.5 million a year for the first two years and USD 35.0 million a year after that, and an asset-based revolving credit facility that matures on May 1, 2028 at SOFR plus 2.50% to 2.75% and was described as USD 85.0 million in the 2024 annual report. The Term Loan is secured by all the assets of Thryv, Inc., certain subsidiaries and the Company and guaranteed by the Company and certain subsidiaries; its tests are a maximum total net leverage ratio of 3.0x and a minimum SaaS revenue level, and the ABL requires fixed charge coverage of at least 1.0x and excess availability of at least USD 8.5 million.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 24; 10-Q_2026-09-30_thry.htm.jsonl, page 25; 10-K_2024-12-31_thry.htm.jsonl, page 111

No new debt since then. No term debt was issued in 2025 or the first nine months of 2026; borrowings were limited to the ABL, USD 21.9 million of Term Loan prepayments were made in 2025 and USD 8,750 thousand was paid in the first nine months of 2026, and the company says it is seeking a new revolving credit facility to follow the ABL when the sale closes.
Basis: 10-K_2025-12-31_thry.htm.jsonl, page 119; 10-K_2025-12-31_thry.htm.jsonl, page 144; 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 58; calculation C11

Acquisitions and equity funding. Thryv, Inc. bought Keap on October 31, 2024 for USD 77.0 million in cash net of USD 7.6 million of cash acquired, a figure the 2024 annual report gives as USD 76.9 million, and funded it with an underwritten offering that raised USD 76.8 million, USD 11.5 million more from the underwriter's option and USD 5.5 million of ABL borrowing; the 2023 purchase of Yellow in New Zealand cost USD 8.9 million in cash.
Basis: 10-K_2025-12-31_thry.htm.jsonl, page 134; 10-K_2024-12-31_thry.htm.jsonl, page 91; 10-K_2025-12-31_thry.htm.jsonl, page 88; calculation C10

### Events: Issuer history

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2020-10-01 | day | 2026-02-26 | Direct listing of the common stock on Nasdaq | Historical — the Company completed a direct listing on October 1, 2020 | 10-K_2025-12-31_thry.htm.jsonl, page 85 | Public equity market access dates from this listing; there was no public trading market before it. |
| 2021-03-01 | day | 2026-02-26 | Acquisition of Thryv Australia Pty Ltd | Historical — which we acquired on March 1, 2021 | 10-K_2025-12-31_thry.htm.jsonl, page 88 | Entry into Australia; customers located there now provide about 11.3% of continuing revenue. |
| 2023 | year | 2026-11-09 | Decision to exit Marketing Services by the end of 2028 | Historical — made the strategic decision to exit its Marketing Services business by the end of 2028 | 10-Q_2026-09-30_thry.htm.jsonl, page 10 | Sets the pace at which legacy cash flow disappears and SaaS must replace it. |
| 2023-04-03 | day | 2026-02-26 | Acquisition of Yellow Holdings Limited (New Zealand) for USD 8.9 million in cash | Historical — on April 3, 2023 we completed the acquisition of Yellow | 10-K_2025-12-31_thry.htm.jsonl, page 88 | A small cash-funded acquisition of a marketing services business. |
| 2024-04-30 | day | 2026-11-09 | Board authorized a share repurchase program of up to USD 40.0 million through 2029-04-30 | Historical — the Board authorized a share repurchase program | 10-Q_2026-09-30_thry.htm.jsonl, page 28 | A permitted distribution that competes with debt reduction; use is limited by covenants. |
| 2024-05-01 | day | 2026-11-09 | New USD 350.0 million Term Loan and new ABL Facility entered into | Historical — entered into a new Term Loan Credit Agreement and a new Credit Agreement | 10-Q_2026-09-30_thry.htm.jsonl, page 23 | Set the current debt structure, 40.0% of the Term Loan held by a related party. |
| 2024-10 | month | 2026-11-09 | SEC Division of Enforcement subpoena received | Historical — the Company received a subpoena from the Division of Enforcement of the SEC | 10-Q_2026-09-30_thry.htm.jsonl, page 32 | A regulatory investigation into the conversion of Digital clients to SaaS; later closed. |
| 2024-10-31 | day | 2026-02-26 | Acquisition of Keap for USD 77.0 million in cash, net of cash acquired | Historical — on October 31, 2024 Thryv, Inc. acquired all of the outstanding capital stock of Infusion Software, Inc. d/b/a/ Keap | 10-K_2025-12-31_thry.htm.jsonl, page 134 | Added a customer relationship management and marketing automation business to SaaS, funded largely with equity. |
| 2024-11-12 | day | 2025-02-27 | Underwriter exercised its option for 857,250 further shares, raising USD 11.5 million | Historical — on November 12, 2024 the underwriter of the offering exercised its option | 10-K_2024-12-31_thry.htm.jsonl, page 91 | Equity funding of the Keap purchase reduced the need for debt. |
| 2025 | year | 2026-02-26 | Term Loan prepayments of USD 21.9 million | Historical — prepayments made during the year ended December 31, 2025 | 10-K_2025-12-31_thry.htm.jsonl, page 144 | Cut the mandatory Term Loan amortization due in the following twelve months to USD 17.5 million. |
| 2025-Q4 | quarter | 2026-11-09 | YP Holdings LLC frozen pension plan terminated | Historical — a frozen qualified defined benefit pension plan that was terminated during the quarter ended December 31, 2025 | 10-Q_2026-09-30_thry.htm.jsonl, page 26 | Removes one frozen pension plan; one qualified and two non-qualified frozen plans remain. |
| 2026-03-01 | day | 2026-11-09 | Goodwill test of the SaaS reporting unit found no impairment | Historical — fair value exceeded its carrying amount by 25% | 10-Q_2026-09-30_thry.htm.jsonl, page 20 | Shows the cushion that disappeared by the September test. |
| 2026-Q1 | quarter | 2026-11-09 | IRS notices of tax due for tax years 2012 to 2015 received | Historical — received notices of tax due and/or notices of intent to levy | 10-Q_2026-09-30_thry.htm.jsonl, page 31 | USD 28.6 million held as an uncertain tax position was reclassified to income taxes payable; USD 33.9 million is accrued and is to be paid in full when the sale closes. |
| 2026-Q2 | quarter | 2026-11-09 | Operational restructuring program initiated | Historical — initiated an operational restructuring program | 10-Q_2026-09-30_thry.htm.jsonl, page 30 | Targets USD 50.0 million to USD 55.0 million of gross annualized savings, with cash costs through 2027. |
| 2026-09-01 | day | 2026-11-09 | Goodwill impairment test of the SaaS reporting unit: impairment of USD 94.8 million | Historical — carrying amount of the SaaS reporting unit exceeded its fair value by USD 94.8 million | 10-Q_2026-09-30_thry.htm.jsonl, page 20 | Management cut its SaaS revenue growth and EBITDA forecasts, a signal on earnings expectations. |
| 2026-09-12 | day | 2026-11-09 | Asset Purchase Agreement to sell the Print Business for USD 142.0 million | Historical — entered into an Asset Purchase Agreement with Coldwater YP, LLC | 10-Q_2026-09-30_thry.htm.jsonl, page 10 | Announced disposal; proceeds are meant to repay the ABL, pay taxes and reduce the Term Loan. |
| 2026-09-28 | day | 2026-11-09 | SEC Enforcement Staff concluded its investigation and does not intend to recommend an enforcement action | Historical — the SEC notified the Company that the SEC's Enforcement Staff have concluded their investigation and do not intend to recommend an enforcement action | 10-Q_2026-09-30_thry.htm.jsonl, page 32 | Removes a regulatory overhang on the SaaS conversion strategy. |
| 2026-Q4 | quarter | 2026-11-09 | Expected closing of the Print Business sale | Scheduled — expected to close in the fourth quarter of 2026, subject to certain closing conditions | 10-Q_2026-09-30_thry.htm.jsonl, page 10 | Subsequent to the balance-sheet date; not yet in the period figures; the price can fall for each month of delay. |
| 2028 | year | 2026-11-09 | End of the planned exit from Marketing Services | Scheduled — plans to exit by the end of 2028 | 10-Q_2026-09-30_thry.htm.jsonl, page 10 | Digital marketing revenue is to disappear or convert, leaving SaaS as the only segment. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 58 |
| Calculated | 10 |
| Assumption-Based | 0 |
| Analyst Inference | 8 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 8 |
| Fields present | 20 |
| Fields total | 22 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 5 |
| MINOR | 6 |

### Map: ownership and control

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Common stockholders (32 of record) | hold the single class of common stock | Ownership | Thryv Holdings, Inc. | 10-K_2025-12-31_thry.htm.jsonl, page 85 |
| Thryv Holdings, Inc. | wholly owns the operating subsidiary | Ownership | Thryv, Inc. | 10-Q_2026-09-30_thry.htm.jsonl, page 10 |
| Thryv Holdings, Inc. | guarantees the Term Loan borrowed by | Guarantee | Thryv, Inc. | 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| Certain subsidiaries (not named) | guarantee the Term Loan borrowed by | Guarantee | Thryv, Inc. | 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| Thryv, Inc., Thryv Holdings and certain subsidiaries | grant security over all their assets to | Legal control | Term Loan lenders | 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| Related-party shareholder (unnamed) | equity holder above 5% by definition; stake not stated | Ownership | Thryv Holdings, Inc. | 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| Related-party shareholder (unnamed) | holds 40.0% of the Term Loan | Other stated | Term Loan lenders | 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| Term Loan lenders (majority) | must approve any covenant waiver | Legal control | Thryv, Inc. | 10-Q_2026-09-30_thry.htm.jsonl, page 11 |
| Thryv, Inc. | agreed to sell the Print Business to | Other stated | Coldwater YP, LLC (Carolwood affiliate) | 10-Q_2026-09-30_thry.htm.jsonl, page 10 |

### Map: operating model to credit

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Print sale price of USD 142.0 million | proceeds repay the ABL, taxes and part of the Term Loan | Documentary Fact | Debt reduction capacity | 10-Q_2026-09-30_thry.htm.jsonl, page 10 |
| ABL borrowing base is print assets only | the ABL ends when the sale closes | Documentary Fact | Revolver liquidity after the sale | 10-Q_2026-09-30_thry.htm.jsonl, page 63 |
| Marketing Services revenue | fell from USD 79.2 million to USD 33.0 million in nine months | Documentary Fact | Revenue base is shrinking | 10-Q_2026-09-30_thry.htm.jsonl, page 50 |
| SaaS seasoned retention | fell to 89% from 94% on downgrades and cancellations | Documentary Fact | Durability of recurring revenue | 10-Q_2026-09-30_thry.htm.jsonl, page 44 |
| Free conversion of Digital clients | cut SaaS gross margin to 64.0% from 70.0% | Documentary Fact | Margin and cash conversion | 10-Q_2026-09-30_thry.htm.jsonl, page 52 |
| Restructuring savings target | USD 50.0m to 55.0m gross, full effect from 2028 | Management Language | Cost base and EBITDA recovery | 10-Q_2026-09-30_thry.htm.jsonl, page 30 |
| Covenant EBITDA recast without print | breach forecast for 2026-12-31 after the sale closes | Documentary Fact | Term Loan default risk absent waiver | 10-Q_2026-09-30_thry.htm.jsonl, page 11 |
| Goodwill impairment of USD 94.8 million | followed lower SaaS growth forecasts | Documentary Fact | Earnings expectations were cut | 10-Q_2026-09-30_thry.htm.jsonl, page 20 |
| Total clients down 19% | fewer paying clients across both segments | Documentary Fact | Revenue scale | 10-Q_2026-09-30_thry.htm.jsonl, page 43 |
| IRS liability of USD 33.9 million | is to be paid when the sale closes | Documentary Fact | Part of the proceeds goes to taxes | 10-Q_2026-09-30_thry.htm.jsonl, page 31 |

### transaction_summary - Transaction summary

| Transaction | Status | Credit relevance | Source |
|---|---|---|---|
| Sale of the Print Business to Coldwater YP, LLC for USD 142.0 million cash, subject to adjustments | Announced 2026-09-12; expected to close in Q4 2026 | Proceeds repay the ABL, pay USD 34.3 million of accrued taxes and repay part of the Term Loan; price can fall for each month of delay | 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 63 |
| Term Loan of USD 350.0 million and ABL entered into 2024-05-01 | Completed | Current senior secured debt; 40.0% of the Term Loan held by a related party; maturities 2029-05-01 and 2028-05-01; amortization USD 52.5 million a year for two years, then USD 35.0 million; ABL of USD 85.0 million at inception, USD 17.6 million drawn at 2026-09-30 | 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 24; 10-K_2024-12-31_thry.htm.jsonl, page 111 |
| Keap acquisition for USD 77.0 million in cash, net of cash acquired | Completed 2024-10-31 | Equity-funded: USD 76.8 million offering plus USD 11.5 million option; USD 5.5 million of ABL borrowing | 10-K_2025-12-31_thry.htm.jsonl, page 134; 10-K_2024-12-31_thry.htm.jsonl, page 91 |
| Yellow (New Zealand) acquisition for USD 8.9 million in cash | Completed 2023-04-03 | Small cash-funded acquisition inside the Marketing Services segment | 10-K_2025-12-31_thry.htm.jsonl, page 88 |
| Share repurchase program of up to USD 40.0 million | Authorized 2024-04-30; USD 34.5 million unused at 2026-09-30 | A distribution that competes with debt reduction; limited by covenants | 10-Q_2026-09-30_thry.htm.jsonl, page 28; 10-Q_2026-09-30_thry.htm.jsonl, page 29 |
| Management services arrangement with the purchaser after the sale | Expected; 12 months, extendable by 2 months | Both parties provide transition services; fees are billed to the purchaser at set monthly amounts or on actual time and cost | 10-Q_2026-09-30_thry.htm.jsonl, page 16 |

### company_description - Company description

| Issuer | Business description | Country | Sector |
|---|---|---|---|
| Thryv Holdings, Inc. | Software-led platform company serving about 110,000 small and medium-sized business clients with a SaaS platform (CRM, marketing execution, automation, payments, reporting) and, until 2028, digital marketing services; the print directory business is being sold | United States (headquarters Grapevine, Texas, incorporated in Delaware); operations in Australia, New Zealand, Canada and Europe | Small and medium-sized business software and digital marketing services, as the company describes itself; no industry classification code is stated in the filings |

### revenue_business_mix - Revenue and business mix

| Business line | Revenue mix | Period | Status | Limitation |
|---|---|---|---|---|
| SaaS | 58.73% of revenue (USD 461,027 thousand) | FY2025 | Reported; share calculated | As originally reported, including the print business |
| Marketing Services: print | 28.48% of revenue (USD 223,572 thousand) | FY2025 | Reported; share calculated | Print sold under the pending transaction; the sold perimeter also holds digital editions |
| Marketing Services: digital | 12.79% of revenue (USD 100,416 thousand) | FY2025 | Reported; share calculated | Not recast; the filings do not say how much of digital revenue goes with the sale |
| SaaS | 41.68% of revenue (USD 343,476 thousand) | FY2024 | Reported; share calculated | As originally reported, including the print business |
| Marketing Services: print and digital | print 30.82% and digital 27.50% of revenue | FY2024 | Reported; shares calculated | As originally reported |
| SaaS | 91.22% of continuing revenue (USD 343,242 thousand) | 9M 2026 | Reported; share calculated | Continuing operations after the print recast |
| Marketing Services (digital only) | 8.78% of continuing revenue (USD 33,032 thousand) | 9M 2026 | Reported; share calculated | Continuing operations after the print recast |
| SaaS | 81.20% of continuing revenue (USD 342,037 thousand) | 9M 2025 | Reported; share calculated | Recast comparative |
| Marketing Services (digital only) | 18.80% of continuing revenue (USD 79,203 thousand) | 9M 2025 | Reported; share calculated | Recast comparative |
| SaaS and Marketing Services | SaaS 94.19% and Marketing Services 5.81% of continuing revenue | Q3 2026 | Reported; shares calculated | Third quarter of 2026 against SaaS 84.34% and Marketing Services 15.66% in Q3 2025 |

### ownership_register - Ownership register

| Owner / class | Control | Economic interest | Credit relevance | Source |
|---|---|---|---|---|
| Common stockholders | One class of common stock; no controlling stockholder is named in the filings; classified board with staggered three-year terms | 44,453,971 shares outstanding at 2026-11-06; 32 holders of record, beneficial owners many more | No controlling stockholder is named, so no sponsor is identified to inject equity; ownership detail sits in a proxy statement not supplied | 10-Q_2026-09-30_thry.htm.jsonl, page 1; 10-K_2025-12-31_thry.htm.jsonl, page 85; 10-K_2025-12-31_thry.htm.jsonl, page 80; 10-K_2025-12-31_thry.htm.jsonl, page 169 |
| Related-party shareholder and lender (unnamed) | Holds 40.0% of the Term Loan, so it carries weight in any waiver that needs a majority of lenders | Equity holder above 5% by the company's definition of a related party; stake not stated; related-party Term Loan carrying value USD 89,457 thousand | Its interests as shareholder and lender may differ; its identity and incentives are not established | 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 7 |
| Directors and officers | The 2025 annual report is signed by the chairman and chief executive officer and six other directors | Ownership and compensation incorporated by reference to a proxy statement not supplied | Alignment of management with creditors cannot be assessed from the filings | 10-K_2025-12-31_thry.htm.jsonl, page 172; 10-K_2025-12-31_thry.htm.jsonl, page 169 |
| Thryv, Inc. (wholly owned subsidiary) | Held 100% by the Company; borrower under the Term Loan | Wholly owned | Structural position of the borrower under the holding company | 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| Coldwater YP, LLC (Carolwood affiliate) | Purchaser of the Print Business once the sale closes; no stake in Thryv is stated | Buyer of the print assets for USD 142.0 million | Closing depends on closing conditions that the filing does not list | 10-Q_2026-09-30_thry.htm.jsonl, page 10 |

### operating_model - Operating model

| Operating driver | Measure | Period | Status | Credit relevance |
|---|---|---|---|---|
| SaaS revenue | USD 343,242 thousand against USD 342,037 thousand, 0.35%; Q3 -3.35% | 9M 2026 and Q3 2026 | Reported; growth calculated | Flat revenue leaves little room to replace the cash flow of the print business |
| Marketing Services revenue (digital) | USD 33,032 thousand against USD 79,203 thousand, -58.29% | 9M 2026 | Reported; growth calculated | Planned exit; a shrinking contributor with negative segment Adjusted EBITDA |
| Total clients | 110 thousand against 136 thousand, down 19% | 2026-09-30 against 2025-09-30 | Reported (recast) | Fewer paying clients reduce the recurring revenue base |
| SaaS clients | 98 thousand against 103 thousand, down 5% | 2026-09-30 against 2025-09-30 | Reported (recast) | SaaS client attrition despite conversions of Digital clients |
| Monthly revenue per SaaS client | USD 373 against USD 365, up 2%; nine months up 8% | Q3 2026 | Reported | Higher revenue per client has offset part of the fall in client numbers |
| Seasoned net revenue retention, SaaS | 89% against 94% | Q3 2026 | Reported | Downgrades and cancellations exceeded upsell among established clients; clients acquired with Keap are excluded |
| Conversions of Digital clients to SaaS | About 16,000 clients in the last twelve months, of which about 14,000 remain; added USD 11.7 million of SaaS revenue in nine months | 2025-10 to 2026-09 | Management Language and reported | Conversions support SaaS revenue but at no charge and lower margin |
| SaaS gross margin | 64.0% against 70.0% | 9M 2026 | Reported | Dilution from converted clients lowers cash conversion |
| SaaS Adjusted EBITDA margin | 6.44% against 4.89% | 9M 2026 | Calculated from reported segment figures | Improving but small relative to the debt that the SaaS business must support |
| Restructuring programme | USD 50.0 million to USD 55.0 million of gross annualized savings from 2028; USD 5,170 thousand of charges so far; USD 15.0 million to USD 20.0 million still to come | 2026 to 2028 | Management Language and reported | Savings are targets; the cash cost arrives first |
| Capital spending | USD 23,613 thousand in nine months 2026 and about USD 2.8 million expected for the rest of 2026, against about USD 30.0 million planned for the year in the 2025 annual report | 2026 | Reported and Management Language | Spending is expected to run slightly below the original plan, though that plan covered the print business |
| Contract liabilities | USD 24,789 thousand at 2026-09-30 against USD 21,065 thousand at 2025-12-31, both on the recast perimeter | 2026-09-30 | Reported | Client prepayments act as interest-free funding and are settled by delivering the service |
| Customer concentration | No single client above 5% of accounts receivable at 2025-12-31; Australia about 11.3% of nine-month revenue | 2025-12-31 and 9M 2026 | Reported | Diversified SMB base limits single-client loss; geographic exposure to Australia remains |
| Print publication cycle | Print revenue is recognised when each directory is delivered, with publication cycles of 12 to 24 months | FY2025 | Reported | Print revenue follows publication timing; the sale removes this revenue and its cash flow |

### events_timeline - Events timeline

| Date / window | Event | Credit relevance | Status | Source |
|---|---|---|---|---|
| 2023 | Decision to exit Marketing Services by the end of 2028 | Sets the pace at which legacy cash flow disappears | Announced | 10-Q_2026-09-30_thry.htm.jsonl, page 10 |
| 2024-05-01 | New Term Loan of USD 350.0 million and ABL entered into | Current debt structure | Completed | 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| 2024-10-31 | Keap acquired for USD 77.0 million in cash | Equity-funded SaaS acquisition | Completed | 10-K_2025-12-31_thry.htm.jsonl, page 134 |
| 2025 | Term Loan prepaid by USD 21.9 million | Reduced debt and next-year amortization | Completed | 10-K_2025-12-31_thry.htm.jsonl, page 144 |
| 2026-09-01 | SaaS goodwill impairment of USD 94.8 million | Earnings expectations were cut | Completed | 10-Q_2026-09-30_thry.htm.jsonl, page 20 |
| 2026-09-12 | Asset Purchase Agreement for the Print Business, USD 142.0 million | Disposal that funds debt reduction | Announced | 10-Q_2026-09-30_thry.htm.jsonl, page 10 |
| Q4 2026 | Expected closing of the Print Business sale | Subsequent event not in the period figures; price can fall for each month of delay | Scheduled | 10-Q_2026-09-30_thry.htm.jsonl, page 10 |
| 2028 | End of the Marketing Services business | SaaS becomes the only segment | Scheduled | 10-Q_2026-09-30_thry.htm.jsonl, page 10 |

### gaps_ledger - Gaps ledger

| Gap | Affected analysis | Severity | Action | Status |
|---|---|---|---|---|
| Proxy statement not supplied: directors' ownership, compensation, related-party transactions | Ownership and governance conclusions | Material | Obtain the 2026 proxy statement | Open |
| Identity and equity stake of the related-party lender not stated | Waiver dynamics and creditor alignment | Material | Identify through the proxy statement or research | Open |
| Print sale agreement and the 2026-09-14 Form 8-K not supplied | Transaction summary and use of proceeds | Material | Obtain the agreement and the 8-K | Open |
| Executed credit agreements not supplied | Legal capacity for distributions, waiver mechanics, baskets | Material | Obtain the 2024-05-01 agreements | Open |
| Nothing dated after 2026-11-09 is supplied | Sale closing, waiver outcome, new revolver | Material | Establish events after the cutoff | Open |
| No management, monitoring or advisory fees are stated in any source | Related-party leakage assessment | Minor | Confirm in the proxy statement | Open |
| Retention is stated only as a seasoned rate for three months | Durability of SaaS revenue | Minor | Obtain cohort retention and churn history | Open |
| Revenue mix for 2025 on the continuing perimeter not stated | Trend in SaaS share of revenue | Minor | Obtain the recast 2025 segment revenue | Open |

### conflict_log - Conflict log

| Conflict | Sources | Materiality | Resolution | Downstream impact |
|---|---|---|---|---|
| Keap cash price: USD 76.9 million in the 2024 annual report; USD 77.0 million net of USD 7.6 million of cash acquired in the 2025 annual report; cash flow line of USD 76,887 thousand | 10-K_2024-12-31_thry.htm.jsonl, page 91; 10-K_2025-12-31_thry.htm.jsonl, page 134; 10-K_2025-12-31_thry.htm.jsonl, page 118 | Minor: difference of USD 0.1 million | All three kept; the cash flow figure is the amount paid net of cash acquired | No effect on the conclusions |
| Total clients: 231 thousand at 2025-12-31 as originally reported (about 230,000 in the business description) against 110 thousand at 2026-09-30 on the recast perimeter | 10-K_2025-12-31_thry.htm.jsonl, page 6; 10-K_2025-12-31_thry.htm.jsonl, page 91; 10-Q_2026-09-30_thry.htm.jsonl, page 42 | Material: different perimeters | Both kept as separate series; the recast series excludes clients that will convey to the purchaser | A trend across the two series would overstate the client decline |
| Revenue mix: print 28.48% of FY2025 revenue as reported against Marketing Services of 8.78% of continuing revenue for nine months 2026 | 10-K_2025-12-31_thry.htm.jsonl, page 165; 10-Q_2026-09-30_thry.htm.jsonl, page 34 | Material: perimeter change | Both kept; the 2026 mix excludes the Print Business | The jump in the SaaS share is partly a perimeter effect |
| Description of Marketing Services: print and digital in the 2025 annual report; digital only in the third-quarter 2026 report | 10-K_2025-12-31_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 12 | Material | Third-quarter definition used for 2026; earlier definition for earlier periods | Segment comparisons across the change need the perimeter label |
| Tax liability: USD 34.3 million to be paid at closing including interest to the payment date; USD 33.9 million accrued at 2026-09-30 | 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 31 | Minor: different dates | Both kept; the larger figure includes interest expected to accrue to the payment date and appears to be the same liability | No effect on the conclusions |

### T2D.1 - Source classification register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| SRC-1 | 10-K_2024-12-31_thry.htm.jsonl | High | FY2024 | Thryv Holdings, Inc. consolidated | Audited annual report: Keap funding, ABL size, SEC subpoena | Older than the latest annual report; includes the print business | Acquisition funding and history |
| SRC-2 | 10-K_2025-12-31_thry.htm.jsonl | High | FY2025 | Thryv Holdings, Inc. consolidated | Audited annual report: business, governance provisions, holders, dividends, acquisitions | Written before the sale agreement; Part III incorporated by reference | Business, governance and capital allocation facts |
| SRC-3 | 10-Q_2026-03-31_thry.htm.jsonl | Medium | Q1 2026 | Thryv Holdings, Inc. consolidated | Unaudited quarterly report | Not recast for the print sale | Context only |
| SRC-4 | 10-Q_2026-06-30_thry.htm.jsonl | Medium | Q2 2026 | Thryv Holdings, Inc. consolidated | Unaudited quarterly report | Not recast for the print sale | Context only |
| SRC-5 | 10-Q_2026-09-30_thry.htm.jsonl | Medium | Q3 2026 | Thryv Holdings, Inc. continuing operations | Unaudited quarterly report: recast business data, sale, restructuring, debt, going-concern language | No auditor review is stated; nothing after 2026-11-09 | Latest business, transaction and governance facts |

### T2D.3 - Governance register

| Governance Topic | Source-Supported Fact | Risk Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Board and control rights | Classified board with staggered three-year terms; no cumulative voting; stockholders are generally barred from calling special meetings or acting by written consent; the chairman is also chief executive officer and six other directors sign the annual report | Mixed | Entrenchment protects the board from hostile change but gives creditors no direct control and combines the roles of chairman and chief executive | Little creditor leverage through governance; any change in strategy comes from the board and the lenders' consent rights | High | 10-K_2025-12-31_thry.htm.jsonl, page 80; 10-K_2025-12-31_thry.htm.jsonl, page 172; 10-Q_2026-09-30_thry.htm.jsonl, page 67 | Directors' independence and committees are in the proxy statement, which is not supplied |
| Shareholder base and control | 32 stockholders of record; no controlling stockholder is named; beneficial ownership is incorporated by reference to a proxy statement | Insufficient Information | With no named controlling holder, no sponsor is identified who could inject equity or extract value | Equity cure support cannot be assumed or ruled out | Medium | 10-K_2025-12-31_thry.htm.jsonl, page 85; 10-K_2025-12-31_thry.htm.jsonl, page 169 | Ownership percentages are not stated |
| Related-party transactions | A shareholder above 5% holds 40.0% of the Term Loan; related-party interest expense was USD 7,408 thousand in nine months 2026; its vote counts toward any waiver | Mixed | A holder that is both shareholder and lender may weigh equity value against loan recovery in a waiver or amendment | Waiver outcome depends partly on one party's incentives; not established | High | 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 11 | The party is unnamed and its equity stake is not stated |
| Management, monitoring and advisory fees | None is stated in the supplied filings | Insufficient Information | Fees to shareholders would leak cash ahead of lenders | No leakage is evidenced; absence is not proof of none | Low | 10-K_2025-12-31_thry.htm.jsonl, page 169 | Item 13 on related transactions is incorporated by reference to a proxy statement not supplied |
| Reporting cadence and audit | Annual statements audited by Grant Thornton LLP, whose opinion is that they present fairly and that internal control was effective; quarterly reports signed 2026-04-30, 2026-08-04 and 2026-11-09 | Supportive | Regular audited and interim reporting lets creditors monitor | Supports monitoring posture | High | 10-K_2025-12-31_thry.htm.jsonl, page 114; 10-K_2025-12-31_thry.htm.jsonl, page 167; 10-Q_2026-03-31_thry.htm.jsonl, page 47; 10-Q_2026-06-30_thry.htm.jsonl, page 54; 10-Q_2026-09-30_thry.htm.jsonl, page 67 | The 2026 quarterly statements carry no stated auditor review |
| Covenant reporting | Compliance with the Term Loan and ABL covenants is stated each period; the leverage ratio, the covenant EBITDA and the SaaS revenue thresholds are not printed | Mixed | Lenders see pass or fail but not headroom, so deterioration is visible late | Headroom cannot be monitored from public disclosure | High | 10-Q_2026-09-30_thry.htm.jsonl, page 24; 10-Q_2026-09-30_thry.htm.jsonl, page 25 | Agreements are not supplied |
| Disclosure completeness | The third-quarter report states substantial doubt about continuing as a going concern and a forecast covenant breach at the 2026-12-31 test once the sale has closed, and omits market-risk disclosure as a smaller reporting company | Mixed | Early disclosure of the risk helps creditors, while omitted rate and currency sensitivity reduces visibility | Candid on the main risk, thin on the supporting data | High | 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 61 | The omission reflects the filer's status, not concealment |
| Shareholder and creditor conflicts | No dividend has ever been paid; USD 4,999 thousand of shares were repurchased in 2025; USD 34.5 million of the repurchase program remains, subject to covenants | Mixed | Buybacks use cash that could repay debt, but the amounts are small and no dividend is paid | Modest leakage so far; the unused authorization is a capacity risk | High | 10-K_2025-12-31_thry.htm.jsonl, page 85; 10-K_2025-12-31_thry.htm.jsonl, page 119; 10-Q_2026-09-30_thry.htm.jsonl, page 29 | The amounts that the distribution covenants permit are not supplied |

### T2D.4 - Behavior flag register

| Flag ID | Behavior Type | Documented Action | Behavior Category | Amount / Funding Source | Legal-Capacity Link | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|---|---|---|
| CP-2C-FLAG-001 | Other | Entered into a new USD 350.0 million Term Loan and ABL on 2024-05-01 with a related party taking 40.0% of the Term Loan | Neutral | USD 350.0 million Term Loan; proceeds repaid the prior term loan | Insufficient Information: agreements not supplied | Resets maturities to 2028 and 2029 but at SOFR plus 6.75% | Extended maturities at a high margin; refinancing risk moves to 2028 to 2029 | High | 10-Q_2026-09-30_thry.htm.jsonl, page 23 | Terms of the prior loan are not in the sources read |
| CP-2C-FLAG-002 | Acquisition | Funded the Keap purchase with an equity offering and the underwriter's option | Supportive | USD 76.8 million offering, USD 11.5 million option, USD 5.5 million ABL borrowing | Insufficient Information: baskets not supplied | Equity funding avoids adding term debt | Term debt did not rise to fund the purchase | High | 10-K_2024-12-31_thry.htm.jsonl, page 91; 10-K_2025-12-31_thry.htm.jsonl, page 134 | Pro forma leverage at the purchase is not stated |
| CP-2C-FLAG-003 | Other | Made USD 21.9 million of Term Loan prepayments in 2025 | Supportive | USD 21.9 million; funding source not stated | Insufficient Information: agreements not supplied | Reduces debt and the amortization due within twelve months | Lowered the mandatory amortization due in the following twelve months to USD 17.5 million | High | 10-K_2025-12-31_thry.htm.jsonl, page 107; 10-K_2025-12-31_thry.htm.jsonl, page 144 | The filing links Term Loan payments to Excess Cash Flow and does not say whether the prepayments were voluntary |
| CP-2C-FLAG-004 | Distribution | Repurchased 378,000 shares in 2025 and holds an authorization of USD 40.0 million | Mixed | USD 4,999 thousand in 2025; USD 5.5 million in total; USD 34.5 million unused | Insufficient Information: restricted payment baskets not supplied | Uses cash that could repay debt while leverage was high | Small so far; capacity remains if covenants allow | High | 10-K_2025-12-31_thry.htm.jsonl, page 108; 10-K_2025-12-31_thry.htm.jsonl, page 119; 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 28; 10-Q_2026-09-30_thry.htm.jsonl, page 29 | The cash flow statement shows no repurchase in the first nine months of 2026 |
| CP-2C-FLAG-005 | Disposal | Agreed to sell the Print Business for USD 142.0 million with proceeds directed to the ABL, taxes and the Term Loan | Supportive | USD 142.0 million cash from the purchaser | Insufficient Information: asset sale covenants not supplied | Converts a declining asset into cash that reduces debt | Deleveraging only if the sale closes and the Term Loan share is meaningful | High | 10-Q_2026-09-30_thry.htm.jsonl, page 10 | Closing, net proceeds and the Term Loan repayment are not established |
| CP-2C-FLAG-006 | Reporting | Disclosed substantial doubt about continuing as a going concern and engaged the lenders on a waiver | Supportive | No amount; waiver not obtained at 2026-11-09 | Insufficient Information: waiver terms not supplied | Early disclosure lets creditors price the risk | Supports monitoring; outcome of the waiver is open | High | 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 66 | The lenders' response is not stated |
| CP-2C-FLAG-007 | Other | Initiated a restructuring program to cut costs | Neutral | USD 5,170 thousand charged so far; USD 15.0 million to USD 20.0 million expected | Insufficient Information: add-back limits not supplied | Severance and contract termination costs precede the savings | Cash cost is near term; savings are targets | High | 10-Q_2026-09-30_thry.htm.jsonl, page 30 | Savings realisation is management language |
| CP-2C-FLAG-008 | Distribution | No dividend has ever been declared or paid | Supportive | None | Insufficient Information: agreements not supplied | Cash is retained | No dividend leakage to date | High | 10-K_2025-12-31_thry.htm.jsonl, page 85 | Future dividends are at the board's discretion |

### T2D.5 - Capital allocation risk table

| Capital Allocation Item | Source-Supported Fact | Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Organic investment | Research and development was USD 39,111 thousand in 2025 as originally reported; capital additions were USD 32,390 thousand | Supportive | Spending sustains the SaaS product | Supports SaaS competitiveness but consumes cash | High | 10-K_2025-12-31_thry.htm.jsonl, page 116; 10-K_2025-12-31_thry.htm.jsonl, page 118 | 2025 figures include the print business |
| Mergers and acquisitions | Keap bought for USD 77.0 million in 2024; Yellow for USD 8.9 million in 2023 | Mixed | Acquisitions added the SaaS engine but needed equity and brought a goodwill impairment later | Growth capital was effective only in part: the SaaS unit later wrote off USD 94.8 million | High | 10-K_2025-12-31_thry.htm.jsonl, page 134; 10-K_2025-12-31_thry.htm.jsonl, page 88; 10-Q_2026-09-30_thry.htm.jsonl, page 20 | Synergy delivery is not stated |
| Integration and restructuring spend | Restructuring program expected to cost USD 5,170 thousand so far and USD 15.0 million to USD 20.0 million more, mostly cash by 2027 | Mixed | Cash costs arrive before savings | Cash costs precede the savings targeted for 2028 | High | 10-Q_2026-09-30_thry.htm.jsonl, page 30 | Timing of savings is management language |
| Capital spending discipline | Capital additions of USD 23,613 thousand in nine months 2026 plus about USD 2.8 million expected for the rest of the year, about USD 26.4 million, against about USD 30.0 million planned for 2026 in the 2025 annual report | Neutral | Lower spending on the continuing perimeter preserves a little cash | A modest saving, not a major source of liquidity | Medium | 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 58; 10-K_2025-12-31_thry.htm.jsonl, page 105 | The earlier plan covered the print business, so the comparison is not like for like; calculation C9 |
| Dividends and distributions | None ever declared or paid | Supportive | No cash leaves to shareholders | No leakage | High | 10-K_2025-12-31_thry.htm.jsonl, page 85 | Future policy is discretionary |
| Debt paydown | Term Loan paid down by USD 35,000 thousand in 2025 and USD 8,750 thousand in nine months 2026 | Supportive | Amortization and prepayments reduce debt | Lower interest and refinancing need | High | 10-K_2025-12-31_thry.htm.jsonl, page 119; 10-Q_2026-09-30_thry.htm.jsonl, page 9 | The filing does not separate voluntary from required payments; calculation C11 |
| Refinancing | New Term Loan and ABL on 2024-05-01 with maturities in 2029 and 2028 | Neutral | Longer maturities at a high margin | Defers refinancing risk but not cost | High | 10-Q_2026-09-30_thry.htm.jsonl, page 23 | Prior terms are not in the sources read |
| Equity contribution and support | Equity offering raised USD 76.8 million plus USD 11.5 million in 2024 | Supportive | New equity funded the acquisition | Showed access to equity markets in 2024 | High | 10-K_2024-12-31_thry.htm.jsonl, page 91 | Market access today is not established; the share price has fallen |
| Asset sales | Print Business sale for USD 142.0 million, expected in Q4 2026 | Supportive | Cash from disposal reduces debt | Deleveraging if completed | High | 10-Q_2026-09-30_thry.htm.jsonl, page 10 | Net proceeds not stated |
| Share repurchases | USD 4,999 thousand in 2025; USD 34.5 million of the authorization unused | Mixed | Small buybacks competed with debt reduction | Capacity for more buybacks is a latent leakage risk | High | 10-K_2025-12-31_thry.htm.jsonl, page 119; 10-Q_2026-09-30_thry.htm.jsonl, page 29 | Restricted payment limits not supplied |
| Tax payments | USD 33.9 million accrued for IRS notices, to be paid at the sale closing | Adverse | A tax cash call absorbs sale proceeds | Less of the USD 142.0 million is available for debt | High | 10-Q_2026-09-30_thry.htm.jsonl, page 31; 10-Q_2026-09-30_thry.htm.jsonl, page 10 | The company has asked the IRS for a hearing and a payment plan; the outcome is not stated |
| Liquidity preservation actions | Capital spending expected to run slightly below plan and restructuring savings targeted | Supportive | Lowers cash burn | Helps liquidity if savings arrive | Medium | 10-Q_2026-09-30_thry.htm.jsonl, page 30; 10-Q_2026-09-30_thry.htm.jsonl, page 58 | Savings are targets |

### T2D.9 - Sponsor and governance risk drivers

| Risk-Level Driver | Evidence | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Countervailing Evidence | Limitation |
|---|---|---|---|---|---|---|---|
| Related-party lender and shareholder | A shareholder above 5% holds 40.0% of the Term Loan and its vote counts toward any waiver | Mixed incentives as shareholder and lender | Waiver outcome and terms are uncertain | High | 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 11 | A lender with equity may also support a rescue | Identity and stake not stated |
| Disclosed going-concern doubt | Substantial doubt is disclosed with the forecast covenant breach at the 2026-12-31 test once the sale has closed; no waiver obtained at 2026-11-09 | Default would let lenders accelerate the Term Loan | Liquidity and refinancing risk are high until waived | High | 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 66 | The company is in discussions with lenders and expects sale proceeds | Outcome not established |
| No named controlling holder and classified board | No controlling stockholder named; staggered board; chief executive officer also chairman | No identified sponsor to support the credit; entrenched board | Equity support cannot be assumed | Medium | 10-K_2025-12-31_thry.htm.jsonl, page 80; 10-K_2025-12-31_thry.htm.jsonl, page 172; 10-K_2025-12-31_thry.htm.jsonl, page 85 | No evidence of extraction by a controlling party | Ownership detail not supplied |
| Distributions and buybacks | No dividend; USD 4,999 thousand of buybacks in 2025 | Small cash leakage while leverage was high | Limited so far | High | 10-K_2025-12-31_thry.htm.jsonl, page 85; 10-K_2025-12-31_thry.htm.jsonl, page 119 | Equity funded the Keap purchase and the Term Loan was prepaid | Baskets not supplied |
| Earnings forecasting | A USD 94.8 million goodwill impairment followed cuts to SaaS revenue growth forecasts after a 25% cushion in March 2026 | Earlier valuation and forecast assumptions proved too high | Raises the risk that current targets are also optimistic | High | 10-Q_2026-09-30_thry.htm.jsonl, page 20 | The impairment is non-cash | Forecast detail not supplied |

Sponsor and governance risk level: Medium. The level is driven by the disclosed going-concern doubt and the related-party lender, because a covenant waiver and the sale closing are both open, which implies elevated liquidity and refinancing risk; countervailing evidence is the equity-funded acquisition, the 2025 prepayment and the absence of any dividend.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-K_2024-12-31_thry.htm.jsonl, page 91; 10-K_2025-12-31_thry.htm.jsonl, page 144

### T2D.11 - Gaps ledger

| Gap ID | Missing Data | Why It Matters | Affected Section / Flag / Export Record | Consequence for Confidence | Required Follow-Up Source |
|---|---|---|---|---|---|
| GAP-1 | Proxy statement: directors' ownership, compensation, related transactions | Control and alignment cannot be assessed | Ownership register; governance register | Lowers confidence in the control conclusion | 2026 proxy statement |
| GAP-2 | Identity and equity stake of the related-party lender | Its incentives shape any waiver | Governance register; risk drivers | Lowers confidence in waiver dynamics | Proxy statement or research |
| GAP-3 | Print sale agreement and the 2026-09-14 Form 8-K | Closing conditions, adjustment formula and holdbacks drive net proceeds | Transaction summary; flag 005 | Lowers confidence in debt reduction | Asset Purchase Agreement and Form 8-K |
| GAP-4 | Executed Term Loan and ABL agreements | Legal capacity for distributions and waiver mechanics | All behavior flags | Capacity cannot be separated from willingness | Credit agreements listed in the 2025 annual report exhibit index, filed with the Form 8-K of 2024-05-02 |
| GAP-5 | Events after 2026-11-09 | Closing, waiver and new revolver are open | Events timeline; risk drivers | Conclusions are as at the filing date | Company announcements after the filing |
| GAP-6 | Management, monitoring or advisory fees | Possible leakage to shareholders | Governance register | Absence of evidence only | Proxy statement |
| GAP-7 | Cohort retention and churn history | Retention is stated only as a seasoned rate | Operating model | Lowers confidence in SaaS durability | Company investor materials |
| GAP-8 | Revenue mix for 2025 on the continuing perimeter | The SaaS share trend is partly a perimeter effect | Revenue mix | Lowers confidence in trend statements | Recast 2025 segment revenue |

## Calculations

Each calculation shows its inputs. Amounts are in USD thousands unless a row says otherwise, and every input is copied from the cited pages.

| ID | Check | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Revenue mix, FY2025 as originally reported | SaaS 461,027; print 223,572; digital 100,416; revenue 785,015 | SaaS 58.73%; print 28.48%; digital 12.79% | 10-K_2025-12-31_thry.htm.jsonl, page 165 |
| C2 | Revenue mix, FY2024 as originally reported | SaaS 343,476; print 253,998; digital 226,682; revenue 824,156 | SaaS 41.68%; print 30.82%; digital 27.50% | 10-K_2025-12-31_thry.htm.jsonl, page 165 |
| C3 | Revenue mix, nine months 2026 and 2025, continuing operations | 2026: SaaS 343,242; Marketing Services 33,032; revenue 376,274. 2025: SaaS 342,037; Marketing Services 79,203; revenue 421,240 | 2026: SaaS 91.22%; Marketing Services 8.78%. 2025: SaaS 81.20%; Marketing Services 18.80% | 10-Q_2026-09-30_thry.htm.jsonl, page 34; 10-Q_2026-09-30_thry.htm.jsonl, page 35 |
| C4 | Revenue mix, third quarter 2026 and 2025, continuing operations | 2026: SaaS 112,024; Marketing Services 6,913; revenue 118,937. 2025: SaaS 115,903; Marketing Services 21,524; revenue 137,427 | 2026: SaaS 94.19%; Marketing Services 5.81%. 2025: SaaS 84.34%; Marketing Services 15.66% | 10-Q_2026-09-30_thry.htm.jsonl, page 34 |
| C5 | Revenue growth by segment, continuing operations | SaaS 9M 343,242 against 342,037; Q3 112,024 against 115,903; Marketing Services 9M 33,032 against 79,203; Q3 6,913 against 21,524; total 9M 376,274 against 421,240 | SaaS 9M 0.35%; SaaS Q3 -3.35%; Marketing Services 9M -58.29%; Marketing Services Q3 -67.88%; total 9M -10.67% | 10-Q_2026-09-30_thry.htm.jsonl, page 34; 10-Q_2026-09-30_thry.htm.jsonl, page 35; 10-Q_2026-09-30_thry.htm.jsonl, page 50 |
| C6 | SaaS segment Adjusted EBITDA margin, nine months | Segment Adjusted EBITDA 22,098 (2026) and 16,726 (2025); SaaS segment revenue 343,242 and 342,037 | 2026: 6.44%; 2025: 4.89% | 10-Q_2026-09-30_thry.htm.jsonl, page 34; 10-Q_2026-09-30_thry.htm.jsonl, page 35 |
| C7 | Revenue by customer location, nine months 2026 | United States 322,256; International 54,018; revenue 376,274; Australia about 11.3% of revenue as stated | United States 85.64%; International 14.36% | 10-Q_2026-09-30_thry.htm.jsonl, page 35 |
| C8 | Related-party Term Loan carrying value, 2026-09-30 | Current portion, related party 14,000; non-current, related party 75,457 | 14,000 + 75,457 = 89,457 | 10-Q_2026-09-30_thry.htm.jsonl, page 7 |
| C9 | Capital spending in 2026 against the earlier plan | Additions to fixed assets and capitalized software 9M 2026 23,613; further capital expenditure expected for the rest of 2026 about 2,800; 2026 plan in the 2025 annual report about USD 30.0 million | 23,613 + 2,800 = 26,413 against 30,000 | 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 58; 10-K_2025-12-31_thry.htm.jsonl, page 105 |
| C10 | Keap funding sources | Underwritten offering proceeds USD 76.8 million; underwriter's option proceeds USD 11.5 million; ABL borrowing USD 5.5 million; cash price net of cash acquired USD 76.9 million in the 2024 report and USD 77.0 million in the 2025 report | 76.8 + 11.5 + 5.5 = 93.8, against a cash price of about 77.0 | 10-K_2024-12-31_thry.htm.jsonl, page 91; 10-K_2025-12-31_thry.htm.jsonl, page 134 |
| C11 | Term Loan cash payments including the related-party portion | 2025: 21,000 and 14,000. Nine months 2026: 5,250 and 3,500 | 2025: 21,000 + 14,000 = 35,000; nine months 2026: 5,250 + 3,500 = 8,750 | 10-K_2025-12-31_thry.htm.jsonl, page 119; 10-Q_2026-09-30_thry.htm.jsonl, page 9 |

## Gaps

These items do not change a conclusion on their own and are carried here; the gaps that bear on conclusions are in the gaps register above.

| Gap | Affected analysis | Severity | Action | Status |
|---|---|---|---|---|
| The sources give no founding or ownership history beyond the 2020 direct listing | Issuer history | Minor | Not needed for the credit view | Open |
| Employee numbers are stated at 2025-12-31 including the print business | Operating model | Minor | Obtain the post-sale headcount | Open |
| The quarterly reports for the first and second quarters of 2026 are context only and are not recast | Business trend | Minor | Use the third-quarter recast figures | Open |

## Next module

The orchestrator selects the next module.
