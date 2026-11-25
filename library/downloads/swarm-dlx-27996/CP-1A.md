---
issuer_id: dlx-27996
module_id: CP-1A
analysis_date: 2026-11-18
run_id: dlx-27996-2026-11-18-credit_snapshot-host
module_status: Ready with Limitations
---

## Request

This is the business, transaction, ownership and governance assessment for Deluxe Corp as of 2026-11-18. It covers the issuer's operating model, Celero and other material recent capital allocation, ownership and control evidence, and the credit effects supported by the supplied issuer filings and releases. The prior analysis supplied for this work is CP-0.

## Sources

### Issuer sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_dlx.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-21 | 67b837bad3689eb57ce7992f50b42dfca6328fb57096d791edfb119f64350c9b | Historical capital allocation, debt terms, and annual ownership disclosures |
| 10-K_2025-12-31_dlx.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-13 | ef88882c6698cca61424cd4266ad2d1415faefa761efc11835cff37bacdc604f | Audited business, risk, revenue, ownership-reference, and capital-allocation context |
| 10-Q_2026-03-31_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | c6188e96c3e25ebda32357958a20d50628042058c0369e7bab137dca4608900b | First-quarter capital allocation and operating context |
| 10-Q_2026-06-30_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-06 | 6a449761454530caf50ba1d8051436ea4a62cc2fe61b463317de655ff7e9cacd | Celero closing, amended facility terms, and second-quarter context |
| 10-Q_2026-09-30_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-05 | 1a71979ca733787a8d7d440764f230a4c6087a6a46bd4d2a31266efdae557532 | Current business, acquisition accounting and funding, debt, covenant, cash flow, lease, and ownership-related evidence |
| EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl | First-quarter 2026 earnings release | 2026-05-06 | 3217064ddd0f8be66f70bf58b3cfa43fb7f3bab05ab19f8cba13be318ddb127f | First-quarter earnings and capital-allocation update |
| EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl | Second-quarter 2026 earnings release | 2026-08-05 | a7e482691fc66cd72f252a397273479f8d1cf0baae2887ed394bca26096905f8 | Second-quarter results and management outlook |
| EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl | Celero Commerce acquisition closing release | 2026-07-31 | 96c47ce241c8b97cc47962d6a8e9dc36a99d834425d3b9e5d0db820b9c76c8e7 | Acquisition announcement, management expectations, and closing date |
| EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl | Third-quarter 2026 earnings release | 2026-11-04 | e21b511b9fd3407ed636f1231d5c628d21b48ef3b99e88c5de6567c6c15ea9e2 | Third-quarter operating update, outlook, and dividend schedule |

### Supplied prior analysis

| Module | sha256 | Use |
|---|---|---|
| CP-0 | 4a718de4c955c9cbf43e7af15baefb05eb671f90a3313557e26784696c65ffc6 | Issuer-scope and source-readiness context |

## Findings

### Bottom line

Deluxe's operating model and Celero funding are assessable, but missing beneficial-owner and governance evidence prevents a decision-useful view of sponsor alignment and support for creditors.
The acquisition shifts more scale toward payments, while the issuer's filings do not establish final transaction economics, standalone acquisition earnings, or the owner's willingness to support debt.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, page 12; 10-K_2025-12-31_dlx.htm.jsonl, page 118

### Key findings

- The Celero acquisition materially increases secured borrowing while its all-in consideration remains only partly specified. The issuer reported approximately USD 625.0 million of cash consideration plus seller expenses and adjustments, USD 664.6 million of accounting consideration transferred, USD 21.7 million of acquired cash, and USD 642.9 million of net acquisition cash outflow. The net cash outflow reconciles to accounting consideration less acquired cash, but the issuer did not quantify the seller expenses and other adjustments separately.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13; calculation CELERO-CASH
- The amended first-lien facilities have meaningful remaining liquidity but increased the secured claim base. At September 30, 2026, the term loan facility was USD 800.0 million, the revolver commitment was USD 400.0 million with USD 200.5 million drawn, and USD 9.7 million of letters of credit left USD 189.8 million available. The filings say incremental term-loan and revolver borrowings funded the acquisition and its related costs, but do not allocate the acquisition funding between the facilities.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–21
- Payment and data revenue growth offsets part of the secular decline in Print, but the segments have different demand and cost drivers. For the nine months ended September 30, 2026, Merchant Services, B2B Payments, and Data Solutions revenue totaled USD 854.5 million versus USD 745.7 million in the comparable period; Print revenue was USD 736.7 million versus USD 852.3 million. The newly acquired Celero operation contributed USD 33.5 million of revenue and a USD 1.9 million net loss after its July closing.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13, 24, 26–27; calculation SEGMENT-MIX
- Nine-month free cash flow was USD 134.9 million, based on USD 215.9 million of operating cash flow less USD 81.0 million of capital expenditures. Cash dividends paid were USD 43.0 million, while net cash used for acquisitions was USD 642.9 million; therefore, acquisition activity and debt financing, rather than organic free cash flow alone, drove the period's increase in capital needs.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5; calculation FCF-9M26
- Sponsor and governance risk is Insufficient Information. The issuer is a publicly traded company with regular audited and interim reporting and reported debt-covenant compliance, but its annual report refers beneficial-owner details to a proxy statement not included in the supplied source set and does not establish a sponsor, ownership percentages, board control rights, or sponsor economics.
Basis: 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118; 10-Q_2026-09-30_dlx.htm.jsonl, page 20

### Contrary evidence and what would change the view

The strongest counterweight to the ownership and governance limitation is the issuer's regular SEC reporting, audited annual financial statements, quarterly debt and liquidity disclosure, and reported compliance with its financial covenants at September 30, 2026. The amended credit agreement also reports maintenance tests and restricted-payment limits, which gives creditors some disclosed contractual guardrails. These facts improve public financial visibility but do not establish beneficial ownership, actual covenant headroom, basket usage, or sponsor willingness. A current beneficial-ownership schedule, board and shareholder-control disclosures, lender compliance certificates, acquisition-level EBITDA and funding reconciliation, and related-party payment detail would materially improve the governance and transaction assessment.
Basis: 10-K_2025-12-31_dlx.htm.jsonl, pages 64, 116–118; 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–21

### Limitations

- The supplied filings do not identify beneficial holders, ownership percentages, sponsor fund terms, or board consent rights; this prevents a creditor-alignment or sponsor-support conclusion, while leaving the reported operating and debt facts usable.
Basis: 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118
- Acquisition disclosures report different measures for Celero consideration and do not isolate final seller adjustments or standalone adjusted EBITDA; this prevents a complete purchase-price and acquisition-return assessment.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13; EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1
- The issuer reports covenant limits and compliance but not a current compliance certificate, actual covenant ratios, headroom, or basket utilization; this leaves creditor capacity and monitoring detail incomplete.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 20–21

### Company and operating model

The segment disclosures show that Deluxe combines transaction and data services with a shrinking physical-product business; the mix and cost drivers create different paths for revenue durability and margin resilience.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 24, 26–27, 43

| Dimension | Source-supported fact | Credit transmission | Source |
|---|---|---|---|
| Revenue model | Nine-month 2026 service revenue was USD 852.9 million and product revenue was USD 738.3 million, within USD 1,591.2 million of consolidated revenue; nine-month 2025 service and product revenue were USD 747.5 million and USD 850.5 million. | Services scale with transaction, data, and customer activity; product sales depend on physical order volumes, pricing, and fulfillment costs. | 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Merchant Services | Electronic payment authorization and processing for small and medium-sized retailers and service businesses; nine-month revenue was USD 347.5 million versus USD 297.2 million. Celero contributed USD 33.5 million of post-close revenue. | Transaction volumes, merchant retention, fraud and chargeback costs, and distribution access drive recurring fee revenue; Celero broadens scale but integration and retention remain unproven. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13, 24, 27 |
| B2B Payments | Treasury, lockbox, remittance, cash application, payment acceptance, accounts-payable disbursement, and fraud services; nine-month revenue was USD 224.4 million versus USD 214.2 million. | Financial-institution and business-client activity supports service revenue; dependence on bank partners and transaction networks can transmit disruption or fee changes into cash flow. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 24, 27; 10-K_2025-12-31_dlx.htm.jsonl, pages 32–33 |
| Data Solutions | Marketing, data analytics, financial-institution profitability reporting, and business incorporation services; nine-month revenue was USD 282.6 million versus USD 234.3 million. | Demand for marketing activity and access to usable data support growth; privacy and data-access limits can reduce campaign effectiveness or raise compliance costs. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 24, 27; 10-K_2025-12-31_dlx.htm.jsonl, page 34 |
| Print | Checks, business forms, business accessories, promotional products, and digital storefronts; nine-month revenue was USD 736.7 million versus USD 852.3 million, and adjusted EBITDA was USD 256.0 million versus USD 274.7 million. | Secular declines in checks and forms and weaker promotional demand reduce volume; pricing, product mix, and cost management supported margin, but do not remove revenue contraction. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 24, 43 |
| Market and concentration | Operations are primarily in the United States with some Canadian activity; foreign operations were not material. No customer represented more than 10% of consolidated revenue in the first nine months of 2026 or 2025. | Geographic and single-customer concentration appear limited in disclosed periods; customer concentration below the 10% threshold and reliance on payment networks remain relevant. | 10-Q_2026-09-30_dlx.htm.jsonl, page 24 |
| Cost and delivery dependencies | Segment costs include payroll, technology, merchant residuals, paper, outsourced products, shipping, and delivery; some service and fulfillment functions depend on external providers. | Paper, postage, supplier, network, labor, and third-party disruption can compress margins or interrupt service; the filings do not quantify fixed versus variable cost exposure. | 10-Q_2026-09-30_dlx.htm.jsonl, page 26; 10-K_2025-12-31_dlx.htm.jsonl, pages 29, 31–34 |
| Cash conversion | Nine-month operating cash flow was USD 215.9 million, capital expenditures were USD 81.0 million, and issuer-defined free cash flow was USD 134.9 million; net settlement-processing obligations used USD 256.9 million of financing cash flow. | Free cash flow supports debt service and investment, but settlement timing, acquisition outflows, dividends, and mandatory amortization constrain discretionary cash. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 9 |

### Company profile

Deluxe is a Minnesota-incorporated public company headquartered in Minneapolis, with a U.S.-centred business and four operating segments; the supplied filings do not identify its beneficial owners.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, page 1; 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118; 10-Q_2026-09-30_dlx.htm.jsonl, page 24

| Attribute | Profile | Source |
|---|---|---|
| Reporting entity | Deluxe Corporation, a Minnesota corporation with principal offices in Minneapolis, Minnesota. | 10-Q_2026-09-30_dlx.htm.jsonl, page 1 |
| Country and market | United States issuer; operations primarily in the United States with some activities in Canada. | 10-Q_2026-09-30_dlx.htm.jsonl, page 24 |
| Sector | Payments processing, treasury and B2B services, data and marketing solutions, and print products. | 10-Q_2026-09-30_dlx.htm.jsonl, page 24 |
| Ownership class | Publicly traded common stock listed on the New York Stock Exchange; the supplied annual report points to a proxy statement for beneficial-owner details. | 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118 |
| Customer exposure | Serves small and medium-sized businesses, financial institutions, consumer brands, and individual consumers; no single customer exceeded 10% of revenue for the latest nine-month period. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 24, 29 |

### Transaction summary and new debt issues

Deluxe acquired all outstanding equity interests in Celero Commerce on July 31, 2026. The quarterly filing reports approximately USD 625.0 million cash consideration plus seller transaction expenses and other adjustments; the purchase-price allocation reports USD 664.6 million of consideration transferred. The acquired cash of USD 21.7 million reconciles that accounting measure to USD 642.9 million of net acquisition cash outflow. Seller expenses and adjustments are not separately quantified, so the difference between the approximate cash base and accounting consideration cannot be assigned more precisely.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13; calculation CELERO-CASH

The acquisition was funded through additional borrowing under the amended and restated credit agreement, using term-loan capacity and a revolver draw; the filing also identifies USD 15.4 million of related transaction costs for the first nine months of 2026. The amended agreement provides an USD 800.0 million first-lien term loan and a USD 400.0 million first-lien revolver, of which USD 200.5 million was drawn and USD 189.8 million remained available after USD 9.7 million of letters of credit. The reported maximum total-leverage test is 4.75x through June 30, 2027, 4.25x from September 30 through December 31, 2027, and 4.00x from March 31, 2028 onward; secured-leverage limits are 3.50x through December 31, 2027 and 3.25x from March 31, 2028 onward, while minimum interest coverage is 3.00x throughout. The issuer reported compliance at September 30, 2026, but did not publish actual ratios or headroom.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–21

The September 30, 2026 principal debt schedule comprises the term loan, revolver drawings, USD 475.0 million of 8.0% senior unsecured notes due June 2029, USD 450.0 million of senior secured notes due September 2029 or earlier if the 2021 notes remain outstanding on February 1, 2029, and USD 100.0 million of receivables securitization obligations due December 2028 unless extended. The maturity schedule includes USD 15.0 million of term-loan amortization for the remainder of 2026, then quarterly installments. Total principal was USD 2,025.5 million before USD 21.4 million of unamortized discount and debt issuance costs. The first-lien credit facilities mature July 31, 2031; the term loan amortizes quarterly, beginning December 31, 2026. The maturity schedule is USD 15.0 million for the remainder of 2026, USD 60.0 million in 2027, USD 160.0 million in 2028, USD 985.0 million in 2029, USD 65.0 million in 2030, and USD 740.5 million in 2031. The receivables facility is classified as secured financing, with receivables serving as collateral.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 18–22; calculation DEBT-PRINCIPAL

The acquisition release described expected scale and more than USD 15 million of expected cost synergies; the Q3 release said management was executing on integration synergy targets, while the accounting note says pro forma figures do not reflect integration or potential synergies. Celero contributed USD 33.5 million of revenue and a USD 1.9 million net loss in both the quarter and nine months ended September 30, 2026, including acquired-intangible amortization. This is initial contribution evidence, not proof of synergy realization or a full-year earnings run rate. Management also cited thousands of merchant relationships and more than a hundred bank partners, and expected annual gross transaction volume above USD 70 billion; these are management expectations, not measured post-close credit performance. The purchase-price allocation remained preliminary at September 30, 2026.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13; EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 1

Other recent capital allocation included the 2025 CheckMatch asset acquisition for total cash payments of USD 24.6 million, approximately half paid at closing and the balance in the first quarter of 2026; and the March 2026 Safeguard channel divestiture, with USD 22.8 million net proceeds, of which USD 10.8 million was received at closing and the rest scheduled in equal annual installments. The filing does not state that these proceeds were used to repay debt. A new finance-lease facility commenced in June 2026 with a USD 49.6 million recognized liability and USD 88.3 million of undiscounted payments over its 16-year term.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 13–14, 23–24

### Events: Issuer history

The dated events below distinguish completed transactions from future payment and maturity dates; the publication date reflects the cited issuer document.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–24; EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1–2

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2024-12 | month | 2026-11-05 | Issued USD 450.0 million of senior secured notes to refinance prior facilities; notes mature September 2029 or February 1, 2029 under the stated condition. | Historical — issued in December 2024 | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 | Creates a secured maturity in 2029 and a conditional earlier date. |
| 2025-08 | month | 2026-11-05 | Acquired certain CheckMatch electronic check-conveyance assets for USD 24.6 million in total cash payments; about half was due at close and the remainder was paid in Q1 2026. | Historical — acquired in August 2025 | 10-Q_2026-09-30_dlx.htm.jsonl, page 13 | Small cash-funded acquisition; funding source is not stated. |
| 2026-03 | month | 2026-11-05 | Completed the Safeguard small-business distributor-channel divestiture for USD 22.8 million of net proceeds; USD 10.8 million was received at close, with the balance scheduled in installments. | Historical — finalized in March 2026 | 10-Q_2026-09-30_dlx.htm.jsonl, page 14 | Reduces Print revenue and delivers partly deferred proceeds; use of proceeds is not stated. |
| 2026-04 | month | 2026-11-05 | Entered a 16-year facility lease, later classified as a finance lease. | Historical — entered in April 2026 | 10-Q_2026-09-30_dlx.htm.jsonl, page 23 | Adds a long-dated lease liability and fixed payment obligation. |
| 2026-06 | month | 2026-11-05 | The new facility lease commenced, recognizing a USD 49.6 million lease liability. | Historical — commenced in June 2026 | 10-Q_2026-09-30_dlx.htm.jsonl, page 23 | Adds finance-lease obligations outside reported funded debt. |
| 2026-06-18 | day | 2026-07-31 | Deluxe announced its agreement to acquire Celero Commerce; the issuer said the transaction had originally been announced on this date. | Historical — originally announced June 18 | EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 | Begins the acquisition and debt-funding event sequence. |
| 2026-07-31 | day | 2026-07-31 | Closed the acquisition of Celero Commerce. | Historical — closed July 31, 2026 | EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 | Adds payment-processing scale; transaction returns and integration remain unproven. |
| 2026-07-31 | day | 2026-11-05 | Amended and restated the credit agreement, providing an USD 800.0 million term loan and USD 400.0 million revolving facility, with maturities extended to July 31, 2031. | Historical — amended and restated July 31, 2026 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–20 | Adds first-lien debt capacity and extends the bank maturity wall. |
| 2026-07 | month | 2026-11-05 | Entered amortizing interest-rate swaps with USD 600.0 million aggregate notional and a 4.13% weighted-average fixed rate; swaps mature in July 2030. | Historical — entered in July 2026 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 15, 19 | Hedges part of variable-rate debt while leaving unhedged floating-rate exposure. |
| 2026-08-05 | day | 2026-08-05 | Reported second-quarter results and increased full-year guidance to include Celero. | Historical — reported second-quarter results | EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl, pages 1–2 | Marks the first outlook update after closing. |
| 2026-09-30 | day | 2026-11-05 | Reported compliance with all debt covenants as of quarter-end. | Historical — compliance reported as of September 30, 2026 | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 | Supports current compliance, but actual ratios and headroom are not disclosed. |
| 2026-11-04 | day | 2026-11-04 | Reported third-quarter results, raised 2026 revenue and adjusted EBITDA outlook, and announced a USD 0.30 per-share dividend payable December 1, 2026. | Historical — reported third-quarter results | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1–2 | Updates operating expectations and schedules a cash distribution. |
| 2026-11-17 | day | 2026-11-04 | Record date for the announced quarterly dividend. | Historical — record date stated in the release | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 2 | Determines eligible holders for the announced dividend. |
| 2026-12-01 | day | 2026-11-04 | Quarterly dividend of USD 0.30 per share payable. | Scheduled — payable December 1, 2026 | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 2 | Uses cash within the issuer's permitted distribution framework. |
| 2026-12-31 | day | 2026-11-05 | First scheduled USD 15.0 million quarterly term-loan installment under the amended facility. | Scheduled — installment due December 31, 2026 | 10-Q_2026-09-30_dlx.htm.jsonl, page 19 | Creates near-term contractual amortization. |
| 2028-12 | month | 2026-11-05 | Receivables securitization facility matures unless extended under its terms. | Scheduled — maturity in December 2028 unless extended | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 | Refinancing or extension is needed for any remaining securitization balance. |
| 2029-02-01 | day | 2026-11-05 | Senior secured notes mature on this date if the 2021 unsecured notes remain outstanding. | Scheduled — conditional maturity on February 1, 2029 | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 | Can concentrate the secured-note refinancing wall ahead of the stated September 2029 maturity. |
| 2029-06 | month | 2026-11-05 | Senior unsecured notes mature. | Scheduled — maturity in June 2029 | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 | Creates a refinancing need in the same calendar year as the secured notes. |
| 2029-09 | month | 2026-11-05 | Senior secured notes mature if not accelerated under the February 2029 condition. | Scheduled — maturity in September 2029 | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 | Adds a second 2029 bond refinancing requirement. |
| 2030-07 | month | 2026-11-05 | Interest-rate swaps mature. | Scheduled — maturity in July 2030 | 10-Q_2026-09-30_dlx.htm.jsonl, page 19 | Removes the hedge on the swapped notional after expiry. |
| 2031-07-31 | day | 2026-11-05 | Term loan and revolving credit facilities mature. | Scheduled — final maturity July 31, 2031 | 10-Q_2026-09-30_dlx.htm.jsonl, page 19 | Requires refinancing or repayment of the remaining bank debt. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 31 |
| Calculated | 6 |
| Assumption-Based | 0 |
| Analyst Inference | 5 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 10 |
| Fields present | 94 |
| Fields total | 94 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 1 |

### Map: ownership and control

The records support public-equity and subsidiary relationships, but they do not identify a controlling shareholder or equity sponsor.
Basis: 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118; 10-Q_2026-09-30_dlx.htm.jsonl, pages 21–22

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Public common shareholders | Listed; individual holdings and percentages undisclosed. | Ownership | Deluxe Corporation | 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118 |
| Deluxe Corporation | Wholly owns its receivables financing subsidiary. | Ownership | Deluxe Receivables LLC | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 |
| Deluxe Corporation | Consolidates the subsidiary and its secured borrowings. | Legal control | Deluxe Receivables LLC | 10-Q_2026-09-30_dlx.htm.jsonl, page 22 |

### Map: operating model to credit

These operating chains show how demand, costs, cash conversion, and acquisition funding can affect creditor cash flow.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 12–13, 24, 26–27; 10-K_2025-12-31_dlx.htm.jsonl, pages 29, 31–34

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Merchant Services | Volume, retention, fraud and network costs drive fees. | Documentary Fact | Operating cash flow | 10-Q_2026-09-30_dlx.htm.jsonl, pages 24, 27; 10-K_2025-12-31_dlx.htm.jsonl, pages 32–33 |
| Celero acquisition | Adds scale; earnings and synergy remain unproven. | Analyst Interpretation | Debt service capacity | 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13; EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 |
| B2B Payments and Data Solutions | Activity and data access drive service revenue. | Documentary Fact | Revenue durability | 10-Q_2026-09-30_dlx.htm.jsonl, page 24; 10-K_2025-12-31_dlx.htm.jsonl, pages 29, 32–34 |
| Print | Product decline and input costs pressure margins. | Documentary Fact | EBITDA and free cash flow | 10-Q_2026-09-30_dlx.htm.jsonl, pages 26, 43 |
| Safeguard divestiture | Cuts Print sales and provides partly deferred proceeds. | Documentary Fact | Leverage and liquidity | 10-Q_2026-09-30_dlx.htm.jsonl, pages 14, 43 |
| Settlement processing | Settlement timing distorts cash-flow movements. | Analyst Interpretation | Liquidity measurement | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5, 22 |
| Capital expenditures and dividends | Investment and distributions reduce cash for debt paydown. | Analyst Interpretation | Free cash flow available for debt service | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |

### Analytical appendix — complete canonical registers

### T2D.1 Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| S01 | 10-K_2024-12-31_dlx.htm.jsonl | High | FY2024 | Deluxe Corporation | Audited statements, business, debt, repurchase and governance disclosures. | Beneficial-holder detail is incorporated from a proxy not included here. | Historical business and capital-allocation context. |
| S02 | 10-K_2025-12-31_dlx.htm.jsonl | High | FY2025 | Deluxe Corporation | Audited statements, business and risk factors, revenue, public listing, ownership references, and capital allocation. | Beneficial-holder detail is incorporated from a proxy not included here. | Business, ownership limitation, and governance analysis. |
| S03 | 10-Q_2026-03-31_dlx.htm.jsonl | High | Q1 2026 | Deluxe Corporation | Interim financial statements and first-quarter business, divestiture, debt, and repurchase disclosures. | Unaudited and superseded for current-period amounts by later quarter reporting. | Historical operating and capital-allocation context. |
| S04 | 10-Q_2026-06-30_dlx.htm.jsonl | High | Q2 2026 | Deluxe Corporation | Interim financial statements, Celero closing, credit-agreement changes, and second-quarter debt and business disclosures. | Unaudited and superseded for current-period amounts by later quarter reporting. | Transaction chronology and amended-facility terms. |
| S05 | 10-Q_2026-09-30_dlx.htm.jsonl | High | Q3 and 9M 2026 | Deluxe Corporation and consolidated subsidiaries | Acquisition accounting, debt and maturities, covenant limits and compliance, liquidity, leases, cash flow, segments, and customer/geographic disclosures. | Unaudited; purchase accounting remains preliminary; actual covenant ratios and headroom are not shown. | Current transaction, operating, financing, and governance analysis. |
| S06 | EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl | Medium | Q1 2026 | Deluxe Corporation | Management's first-quarter results, outlook, and dividend announcement. | Management release; outlook is forward-looking. | Dated quarterly-performance context. |
| S07 | EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl | Medium | Q2 2026 | Deluxe Corporation | Management's second-quarter results, outlook update, and dividend announcement. | Management release; outlook is forward-looking. | Dated outlook and dividend context. |
| S08 | EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl | Medium | July 2026 | Deluxe Corporation and Celero Commerce | Acquisition closing date, management expectations, and stated integration objectives. | Management release; scale, accretion, and synergy statements are expectations, not achieved results. | Transaction chronology and expectations. |
| S09 | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl | Medium | Q3 and 9M 2026 | Deluxe Corporation | Management's third-quarter results, guidance, and dividend schedule. | Management release; outlook is forward-looking. | Current outlook and cash-distribution context. |

### transaction_summary - Transaction summary register

| Transaction | Status | Credit relevance | Source |
|---|---|---|---|
| Celero Commerce acquisition | Completed July 31, 2026; approx. USD 625.0 million cash consideration plus seller expenses and adjustments; USD 664.6 million consideration transferred; USD 15.4 million in 9M transaction costs; incremental term-loan and revolver borrowing. Management cited more than USD 15.0 million in expected synergies, more than 55,000 merchant relationships, 130 bank partners, and expected annual gross transaction volume above USD 70 billion; the Q3 release said it was executing on integration synergy targets. | Adds scale to Merchant Services but increases secured debt; contribution is USD 33.5 million revenue and USD 1.9 million net loss after close; expected synergies and scale are not proven credit performance. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13, 19; EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 1 |
| Amended and restated credit agreement | Effective July 31, 2026; USD 800.0 million first-lien term loan and USD 400.0 million first-lien revolver; maturity July 31, 2031. | Extends the bank maturity while supporting acquisition financing; current leverage and interest tests apply. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–21 |
| CheckMatch asset acquisition | Acquired in August 2025 for USD 24.6 million total cash payments, about half at closing and the rest paid in Q1 2026. | Adds electronic check-conveyance assets; source does not state funding mix or resulting EBITDA. | 10-Q_2026-09-30_dlx.htm.jsonl, page 13 |
| Safeguard channel divestiture | Finalized March 2026 for USD 22.8 million net proceeds; USD 10.8 million received at closing and the balance in installments. | Reduces Print scale; proceeds are partly deferred and application to debt is not stated. | 10-Q_2026-09-30_dlx.htm.jsonl, page 14 |
| Common-stock dividend | USD 43.0 million paid in 9M 2026; regular quarterly dividend of USD 0.30 per share scheduled for December 1, 2026. | Uses cash otherwise available for debt reduction within the agreement's disclosed annual restricted-payment allowance. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 20; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 2 |
| Finance lease | New 16-year facility lease commenced June 2026; USD 49.6 million liability recognized and USD 88.3 million of undiscounted payments. | Adds a long-dated fixed payment obligation outside funded principal debt. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 23–24 |

### Debt and maturity snapshot

| Instrument | Principal or commitment | Coupon / rate | Maturity | Rank, collateral, or structure | Source |
|---|---|---|---|---|---|
| Senior secured term loan | USD 800.0 million | Floating; credit-facility weighted-average rate including swaps was 6.05% at September 30, 2026 | July 31, 2031; USD 15.0 million quarterly installments through September 2030, then USD 20.0 million quarterly through June 2031 | First-lien secured by substantially all issuer and subsidiary-guarantor assets, subject to exceptions | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–20 |
| Senior secured revolving credit facility | USD 400.0 million commitment; USD 200.5 million drawn; USD 189.8 million net available | Floating; facility rate including swaps was 6.05% at September 30, 2026 | July 31, 2031 | First-lien; USD 9.7 million of letters of credit reduce availability | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–21 |
| Senior unsecured notes | USD 475.0 million | 8.0% | June 2029 | Senior unsecured notes; issuer says originally USD 500.0 million issued and USD 25.0 million repurchased in 2022 | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 |
| Senior secured notes | USD 450.0 million | 8.125% | September 2029, or February 1, 2029 if the 2021 notes remain outstanding on that date | Senior secured notes; proceeds and credit-facility borrowings refinanced prior facilities | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 |
| Receivables securitization obligations | USD 100.0 million | 5.21% at September 30, 2026 | December 2028 unless extended | Secured financing of receivables held in wholly owned Deluxe Receivables LLC | 10-Q_2026-09-30_dlx.htm.jsonl, pages 21–22 |
| Total funded debt principal | USD 2,025.5 million | Mixed | Maturity wall: USD 15.0 million remainder 2026; USD 60.0 million 2027; USD 160.0 million 2028; USD 985.0 million 2029; USD 65.0 million 2030; USD 740.5 million 2031 | Before USD 21.4 million of unamortized discount and debt issuance costs | 10-Q_2026-09-30_dlx.htm.jsonl, pages 18–19 |

Module Status: Ready with Limitations

### Covenant summary

| Covenant | Limit | Effective period | Source |
|---|---|---|---|
| Maximum consolidated total leverage | 4.75x | September 30, 2026 through June 30, 2027 | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 |
| Maximum consolidated total leverage | 4.25x | September 30 through December 31, 2027 | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 |
| Maximum consolidated total leverage | 4.00x | March 31, 2028 and each quarter thereafter | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 |
| Maximum consolidated secured leverage | 3.50x | September 30, 2026 through December 31, 2027 | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 |
| Maximum consolidated secured leverage | 3.25x | March 31, 2028 and each quarter thereafter | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 |
| Minimum interest coverage | 3.00x | Throughout the amended credit agreement term | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 |

### CP-MODEL snapshot fields

<!-- table-id: cp1a.cp_model_snapshot_fields -->

| field_id | value | status | source_id | source_locator | as_of |
|---|---|---|---|---|---|
| issuer_name | Deluxe Corporation | READY | S05 | 10-Q_2026-09-30_dlx.htm.jsonl, page 1 | 2026-11-18 |
| sector | Payments processing, B2B financial services, data and marketing, and print products | READY | S05 | 10-Q_2026-09-30_dlx.htm.jsonl, page 24 | 2026-11-18 |
| country | United States issuer; operations primarily in the United States with some Canadian activity | READY | S05 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 1, 24 | 2026-11-18 |
| shareholders | Publicly traded common stock; beneficial-owner percentages are not stated in supplied filings | READY | S02 | 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118 | 2026-11-18 |
| transaction_summary | Acquired Celero on July 31, 2026; approximately USD 625.0 million cash consideration plus expenses and adjustments; funded with term-loan and revolver borrowings | READY | S05 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 12, 19 | 2026-11-18 |
| business_description | Merchant payments, B2B treasury and payment solutions, data and marketing services, and checks, forms, and promotional products | READY | S05 | 10-Q_2026-09-30_dlx.htm.jsonl, page 24 | 2026-11-18 |

### company_description - Company description register

| Issuer | Business description | Country | Sector |
|---|---|---|---|
| Deluxe Corporation | Provides merchant payment processing; B2B treasury and payment solutions; data, analytics, and marketing services; and personal and business checks, forms, and promotional products. | United States; operations primarily domestic with some Canada activity. | Payments processing, B2B financial services, data and marketing, and print products. |

### revenue_business_mix - Revenue business mix register

| Business line | Revenue mix | Period | Status | Limitation |
|---|---|---|---|---|
| Merchant Services | USD 347.5 million in 2026 versus USD 297.2 million in 2025. | Nine months ended September 30 | Reported | Celero included after its July 31, 2026 closing. |
| B2B Payments | USD 224.4 million in 2026 versus USD 214.2 million in 2025. | Nine months ended September 30 | Reported | Revenue only; standalone margin and client concentration by business are not stated here. |
| Data Solutions | USD 282.6 million in 2026 versus USD 234.3 million in 2025. | Nine months ended September 30 | Reported | Revenue only; data-source concentration is not quantified. |
| Print | USD 736.7 million in 2026 versus USD 852.3 million in 2025. | Nine months ended September 30 | Reported | 2026 comparison reflects the March Safeguard divestiture and ongoing secular demand decline. |
| Consolidated | USD 1,591.2 million in 2026 versus USD 1,598.0 million in 2025. | Nine months ended September 30 | Reported | No segment-level customer top-ten table is provided in the reviewed filing. |

### ownership_register - Ownership register

| Owner / class | Control | Economic interest | Credit relevance | Source |
|---|---|---|---|---|
| Public common shareholders, not identified individually | Common stock is listed on the New York Stock Exchange; individual voting blocks or beneficial ownership percentages are not stated in the supplied filings. | Public common equity; exact ownership split is not established. The annual report refers to the proxy for beneficial-owner detail. | Ownership concentration, shareholder-control rights, and sponsor alignment cannot be assessed from this record. | 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118 |
| Sponsor or controlling fund | No sponsor, fund, or controlling owner is identified in the supplied issuer filings. | Not established. | Sponsor support, exit timing, and sponsor economic incentives cannot be assessed. | 10-K_2025-12-31_dlx.htm.jsonl, page 118 |
| Deluxe Receivables LLC | Wholly owned by Deluxe Corporation and consolidated. | Wholly owned subsidiary; holds receivables that secure the securitization facility. | Identifies a receivables-financing subsidiary and collateral perimeter; full legal entity and guarantee chart is not included. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 21–22 |

### operating_model - Operating model register

| Operating driver | Measure | Period | Status | Credit relevance |
|---|---|---|---|---|
| Merchant Services | Revenue USD 347.5 million versus USD 297.2 million; Celero contributed USD 33.5 million after closing. | Nine months ended September 30, 2026 and 2025 | Reported | Higher processing scale can support service revenue, but acquired retention, integration, and earnings conversion remain unproven. |
| B2B Payments | Revenue USD 224.4 million versus USD 214.2 million. | Nine months ended September 30, 2026 and 2025 | Reported | Bank and business activity supports fees; dependence on transaction partners and client activity creates operating exposure. |
| Data Solutions | Revenue USD 282.6 million versus USD 234.3 million. | Nine months ended September 30, 2026 and 2025 | Reported | Marketing demand and access to data drive volumes; privacy, legal, and data-supplier limits may affect recurring revenue. |
| Print volumes and margins | Revenue USD 736.7 million versus USD 852.3 million; adjusted EBITDA USD 256.0 million versus USD 274.7 million. | Nine months ended September 30, 2026 and 2025 | Reported | Secular product decline lowers revenue; price, mix, and cost control have mitigated but not reversed the EBITDA decline. |
| Customer and geographic exposure | No single customer exceeded 10% of consolidated revenue; foreign revenue and long-lived assets were not material. | Nine months ended September 30, 2026 and 2025 | Reported | Reduces disclosed single-name and foreign exposure but does not quantify top-customer concentration below the threshold. |
| Cost base | Payroll, IT, merchant residuals, paper, outsourced products, shipping, and delivery costs are identified; fixed and variable cost percentages are not stated. | FY2025 and 9M 2026 descriptions | Partly stated | Inflation or supplier disruption may pressure margins where cost increases cannot be passed through. |
| Cash conversion and capital allocation | Operating cash flow USD 215.9 million less capital expenditures USD 81.0 million equals free cash flow USD 134.9 million; dividends paid were USD 43.0 million. | Nine months ended September 30, 2026 | Reported and calculated | Shows recurring cash generation, with distributions, acquisition spending, settlement flows, and mandatory debt service competing for liquidity. |

### events_timeline - Events timeline register

| Date / window | Event | Credit relevance | Status | Source |
|---|---|---|---|---|
| 2024-12 | Issued USD 450.0 million of senior secured notes to refinance prior facilities. | Establishes a secured note maturity in 2029, subject to an earlier conditional date. | Historical | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 |
| 2025-08 | Acquired CheckMatch assets for USD 24.6 million total cash payments. | Adds electronic check-conveyance assets; funding source and EBITDA are not provided. | Historical | 10-Q_2026-09-30_dlx.htm.jsonl, page 13 |
| 2026-03 | Completed Safeguard channel divestiture; USD 22.8 million net proceeds, partly deferred. | Reduces Print scale and produces cash receipts over time. | Historical | 10-Q_2026-09-30_dlx.htm.jsonl, page 14 |
| 2026-06-18 | Announced agreement to acquire Celero. | Begins the transaction and financing sequence. | Historical | EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 |
| 2026-07-31 | Closed Celero acquisition and amended/restated the credit agreement. | Adds payment scale and first-lien debt, while extending bank maturities. | Historical | EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1; 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–20 |
| 2026-07 | Entered interest-rate swaps with USD 600.0 million aggregate notional. | Hedges part of variable-rate debt through July 2030. | Historical | 10-Q_2026-09-30_dlx.htm.jsonl, pages 15, 19 |
| 2026-09-30 | Reported compliance with debt covenants at quarter-end. | Supports current compliance but actual ratios and headroom are absent. | Historical | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 |
| 2026-11-04 | Reported Q3 results and scheduled a USD 0.30 per-share dividend for December 1. | Updates operating outlook and schedules a cash distribution. | Historical | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1–2 |
| 2026-12-31 | First USD 15.0 million quarterly term-loan amortization due. | Creates near-term contractual debt service. | Scheduled | 10-Q_2026-09-30_dlx.htm.jsonl, page 19 |
| 2028-12 | Receivables facility maturity unless extended. | Creates a refinancing or extension requirement for any outstanding balance. | Scheduled | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 |
| 2029 | Senior unsecured and secured notes mature; secured notes may mature February 1 if 2021 notes remain outstanding. | Concentrates a material bond refinancing wall. | Scheduled | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 |
| 2031-07-31 | Term loan and revolver mature. | Requires repayment or refinancing of remaining bank debt. | Scheduled | 10-Q_2026-09-30_dlx.htm.jsonl, page 19 |

### T2D.3 Governance register

| Governance Topic | Source-Supported Fact | Risk Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Audit and financial reporting | The issuer files audited annual statements and quarterly reports; the independent auditor reports effective internal control over financial reporting. | Supportive | Regular reported statements improve visibility into operating performance and debt. | Supports baseline monitoring and refinancing analysis. | High | 10-K_2025-12-31_dlx.htm.jsonl, page 64 | Does not replace lender reporting or compliance certificates. |
| Public disclosure cadence | The issuer provides annual and quarterly segment, cash-flow, debt, and liquidity disclosures. | Supportive | Current public reporting allows creditors to observe cash generation, debt use, and operating mix. | Improves public monitoring visibility. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 3–5, 18–27 | No lender package or covenant calculation is included. |
| Covenant compliance and lender control | The company reported compliance at September 30, 2026; the amended agreement has total and secured leverage tests, an interest-coverage test, and restricted-payment limits. | Supportive | Maintenance tests and lender remedies create contractual constraints; no actual ratios or headroom are disclosed. | Offers documented controls but does not show distance to breach or current basket capacity. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–21 | No current certificate or basket-usage schedule. |
| Ownership and control rights | The common stock is publicly listed; the 2025 annual report directs readers to a proxy for beneficial-owner detail, which is not present in the supplied sources. | Insufficient Information | Without holder identities, ownership percentages, and control rights, creditor alignment and control concentration cannot be established. | Sponsor and governance risk level remains Insufficient Information. | Insufficient | 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118 | Proxy details and board/shareholder-control documents are not supplied. |
| Related-party payments and sponsor economics | The reviewed filings do not provide a sponsor fee schedule or a comprehensive shareholder-related payment register; ordinary dividends are disclosed separately. | Insufficient Information | Unreported related-party payments could reduce cash available to creditors or reveal owner incentives. | No conclusion on leakage or sponsor economics is supportable. | Insufficient | 10-K_2025-12-31_dlx.htm.jsonl, pages 117–118; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 20 | The referenced proxy and related-party materials are not included. |

### T2D.4 Sponsor and shareholder behavior flags

| Flag ID | Behavior Type | Documented Action | Behavior Category | Amount / Funding Source | Legal-Capacity Link | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|---|---|---|
| CP-2C-FLAG-001 | Acquisition | Deluxe acquired Celero and stated that incremental term-loan and revolver borrowings funded the acquisition and related costs. | B — Neutral/Mixed | Approximately USD 625.0 million cash consideration plus seller expenses and adjustments; funded through additional term and revolver borrowing. | Amended credit agreement; exact draw allocation and acquisition basket usage are not stated. | Debt-funded acquisition increases secured claims and interest burden; acquired earnings and synergies may not offset cost without integration. | Raises leverage and refinancing exposure while potentially improving scale; standalone return and pro forma leverage cannot be measured. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13, 19 | Purchase adjustments and facility-specific funding amounts are not separately shown. |
| CP-2C-FLAG-002 | Amendment | Amended and restated credit agreement on July 31, 2026 and extended both bank facilities to July 31, 2031. | B — Neutral/Mixed | USD 800.0 million term loan; USD 400.0 million revolver; acquisition funding plus fees and expenses. | Credit agreement terms reported in filing; full agreement and usage tracker not present here. | Extends maturities but adds first-lien borrowing capacity and reported secured debt. | Improves near-term maturity profile but increases secured leverage and collateral claims. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–20 | Actual leverage headroom and amendments/waivers beyond this transaction are not established. |
| CP-2C-FLAG-003 | Distribution | Paid ordinary cash dividends during 9M 2026 and announced a quarterly dividend payable December 1, 2026. | B — Neutral/Mixed | USD 43.0 million paid during 9M 2026; announced USD 0.30 per share; annual agreement allowance is USD 75.0 million in aggregate for dividends and repurchases. | Amended credit agreement's disclosed annual restricted-payment allowance. | Cash distributions reduce funds potentially available for debt repayment; no source indicates debt funding of the dividend. | Leaves less free cash flow for discretionary deleveraging, within reported contractual capacity. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 20; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 2 | No complete history of all restricted-payment basket use is supplied. |
| CP-2C-FLAG-004 | Acquisition | Acquired the CheckMatch electronic check-conveyance assets in August 2025; the remainder of the cash consideration was paid during Q1 2026. | B — Neutral/Mixed | USD 24.6 million total cash payments; about half at close and the rest in Q1 2026; funding source not stated. | No acquisition-specific capacity or funding disclosure. | Uses cash for an adjacent business asset without a reported acquisition-level EBITDA contribution. | Adds a modest cash use; earnings contribution and return are not quantified. | High | 10-Q_2026-09-30_dlx.htm.jsonl, page 13 | No standalone financial contribution or funding source is stated. |
| CP-2C-FLAG-005 | Disposal | Divested the Safeguard small-business distributor channel in March 2026. | B — Neutral/Mixed | USD 22.8 million net proceeds; USD 10.8 million received at closing and the remainder due in annual installments. | No use-of-proceeds disclosure. | Reduces Print scale and converts part of the business into staged cash receipts. | Supports liquidity over time but removes revenue and EBITDA; debt reduction cannot be assumed. | High | 10-Q_2026-09-30_dlx.htm.jsonl, page 14 | The use of proceeds and final cash collection schedule are not detailed by date. |

### T2D.5 Capital allocation risk

| Capital Allocation Item | Source-Supported Fact | Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Celero M&A | Acquired for cash consideration plus adjustments, funded through term-loan and revolving borrowings; the post-close 9M contribution included USD 33.5 million revenue and USD 1.9 million net loss. | Mixed | Secured funding increases fixed claims before standalone recurring earnings are demonstrated. | Raises leverage tolerance and refinancing risk; synergy realization needs evidence. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13, 19 | No full-year EBITDA or realized synergy schedule. |
| CheckMatch M&A | Paid USD 24.6 million in cash for certain assets, partly in Q1 2026. | Neutral | Cash is invested in adjacent electronic check services, but no revenue or earnings contribution is quantified. | Limited disclosed acquisition spend; return cannot be assessed. | High | 10-Q_2026-09-30_dlx.htm.jsonl, page 13 | Funding source and contribution are not reported. |
| Capital expenditures | Paid USD 81.0 million for capital assets in 9M 2026. | Neutral | Investment supports ongoing production and technology, while reducing cash available for debt paydown. | Leaves USD 134.9 million issuer-defined free cash flow for interest, amortization, distributions, and other uses. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 | Maintenance and growth capex are not separately shown. |
| Dividends | Paid USD 43.0 million in 9M 2026; the agreement permits up to USD 75.0 million annually in aggregate dividends and repurchases; no shares were repurchased during Q3 2026. | Mixed | Dividends reduce creditor-available cash; the agreement creates an annual distribution allowance. | Moderates deleveraging capacity while remaining within disclosed contractual limits. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 20, 51 | No current basket-use schedule or full special-distribution history. |
| Safeguard disposal | Sold the distributor channel for USD 22.8 million of net proceeds, with the remainder after the closing receipt payable over three years; comparison revenue and adjusted EBITDA fell by USD 79.3 million and USD 7.8 million respectively in 9M 2026. | Mixed | Converts a declining business to cash but reduces reported segment revenue and EBITDA. | Proceeds support liquidity; lower Print scale weakens offset to fixed costs unless savings persist. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 14, 29, 43 | Use of sale proceeds and margin after cost removals are not reported. |
| Debt maturity extension | Amended the credit agreement, extending bank maturities through July 2031 and setting quarterly term amortization. | Supportive | Pushes out bank refinancing while leaving scheduled amortization and secured leverage. | Reduces near-term maturity pressure, but does not remove the 2028–2029 bond and securitization refinancing wall. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–21 | Actual debt paydown and compliance headroom are not disclosed. |
| Common-stock repurchases | Issuer reported no repurchases in the first three quarters of 2026; USD 287.5 million remained under its 2018 authorization. | Neutral | No cash was reported spent on repurchases in the current period, but the authorization and credit-agreement allowance provide capacity subject to their terms. | Provides a counterweight to current dividend cash use but not assurance against future distributions. | High | 10-Q_2026-03-31_dlx.htm.jsonl, page 38; 10-Q_2026-06-30_dlx.htm.jsonl, page 47; 10-Q_2026-09-30_dlx.htm.jsonl, page 51 | No forward repurchase plan or current restricted-payment basket tracker. |
| Sponsor support | No equity cure, sponsor injection, or sponsor support event is identified in the supplied issuer sources. | Insufficient Information | Without an identified sponsor or support history, no contingent source of liquidity can be credited. | Do not include sponsor support in liquidity or downside capacity. | Insufficient | 10-K_2025-12-31_dlx.htm.jsonl, page 118; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 12 | Ownership and support documents are not present in this source set. |

### T2D.9 Sponsor and governance risk assessment

| Risk-Level Driver | Evidence | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Countervailing Evidence | Limitation |
|---|---|---|---|---|---|---|---|
| Ownership and sponsor visibility | Public common shares are listed, but the beneficial-owner schedule is referred to a proxy not in the supplied filings; no sponsor, ownership percentage, or fund terms are identified. | The absence of an ownership schedule prevents distinguishing owner willingness from legal capacity. | Sponsor alignment, support, and exit incentives cannot be assessed; level remains Insufficient Information. | Insufficient | 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118 | Public issuer filings identify the reporting entity and equity class. | Current beneficial ownership and board/control rights are not established. |
| Public reporting and lender oversight | Audited annual reporting, quarterly debt and liquidity disclosures, and reported compliance with all debt covenants at September 30, 2026. | Public reporting improves visibility, while missing certificates and actual ratios restrict measurement of lender headroom. | Supports baseline monitoring but not covenant-distance analysis. | High | 10-K_2025-12-31_dlx.htm.jsonl, page 64; 10-Q_2026-09-30_dlx.htm.jsonl, pages 20–21 | The agreement discloses maintenance tests and restricted-payment limits. | No current lender certificate or basket-use tracker. |
| Capital allocation and creditor treatment | Debt-funded Celero purchase, ordinary dividends, and an amended agreement extending bank maturity are documented; no issuer-source evidence of a priming transaction or liability-management exercise was found. | Acquisition debt increases secured claims; dividends use cash; maturity extension offsets some near-term refinancing pressure. | Mixed issuer capital allocation is visible, but it does not establish sponsor behavior or willingness. | High | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 12, 19–21; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 2 | Disclosed covenant limits and reported compliance constrain some actions. | Full amendment, waiver, legal-capacity, and basket history is not available. |

The risk level is driven by the absence of identified beneficial owners, sponsor terms, board control rights, and lender-level reporting, because those gaps prevent separation of owner willingness from issuer legal capacity, which leaves creditor-alignment and support unscored. Countervailing evidence is audited reporting, regular interim disclosure, and reported covenant compliance; current ownership and lender disclosure would be required for a more specific view.
Basis: 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 63, 118; 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–21

Overall, sponsor and governance risk is Insufficient Information. The issuer has transparent public financial reporting, but there is not enough evidence to assign sponsor alignment, support, or control risk.
Basis: 10-K_2025-12-31_dlx.htm.jsonl, pages 64, 118; 10-Q_2026-09-30_dlx.htm.jsonl, pages 20–21

Business and governance assessment is complete with limitations. The risk level is Insufficient Information because beneficial ownership, fund economics, and current covenant headroom are not disclosed.
Basis: 10-K_2025-12-31_dlx.htm.jsonl, page 118; 10-Q_2026-09-30_dlx.htm.jsonl, pages 20–21

### T2D.11 Gaps ledger

| Gap ID | Missing Data | Why It Matters | Affected Section / Flag / Export Record | Consequence for Confidence | Required Follow-Up Source |
|---|---|---|---|---|---|
| CP-2C-GAP-001 | Current beneficial ownership schedule and ownership percentages. | Cannot assess control concentration or identify the parties whose incentives may affect creditor outcomes. | Ownership register; ownership map; T2D.9 ownership driver. | High | Current definitive proxy statement and transfer-agent ownership schedule. |
| CP-2C-GAP-002 | Sponsor identity, fund vehicle, vintage, remaining life, equity contribution, and sponsor economics. | Cannot assess sponsor capacity, exit timing, support willingness, fees, or equity alignment. | Ownership register; T2D.9 ownership driver. | High | Sponsor transaction and fund documents, plus issuer ownership disclosures. |
| CP-2C-GAP-003 | Board rights, shareholder vetoes, related-party agreements, and management or monitoring fees. | Could affect decision control, leakage, conflicts, and creditor protections. | Ownership register; T2D.3 governance. | High | Proxy statement, board and related-party disclosures, and lender information package. |
| CP-2C-GAP-004 | Celero final purchase-price bridge, seller expenses and adjustments, facility-specific funding split, and acquisition-level adjusted EBITDA. | Prevents a complete all-in consideration, debt-source, and return-on-investment assessment. | Transaction summary; Celero behavior flag; capital-allocation analysis. | High | Final purchase-price allocation, closing statement, and acquisition financial supplement. |
| CP-2C-GAP-005 | Realized Celero synergies, integration costs by period, and full-year earnings contribution. | Prevents testing whether the new secured debt is offset by durable earnings and cash flow. | Transaction summary; Merchant Services operating model; capital allocation. | Medium | Subsequent issuer integration and segment-performance disclosure. |
| CP-2C-GAP-006 | Current covenant certificate, actual leverage and interest-coverage ratios, headroom, and restricted-payment basket usage. | Prevents measurement of distance to default and residual distribution capacity. | Governance register; debt and covenant analysis. | High | Latest lender compliance certificate and basket-usage schedule. |
| CP-2C-GAP-007 | Complete amendment, waiver, exchange, liability-management, priming, and collateral-release history. | Needed to assess creditor treatment and legal capacity beyond the latest disclosed credit agreement terms. | T2D.3 governance; T2D.9 capital-allocation driver. | Medium | Executed debt documents and lender amendment/waiver history. |
| CP-2C-GAP-008 | Comprehensive historical special distributions, related-party payments, and sponsor-support history. | Current sources show ordinary dividends and repurchase authorization but do not provide a complete owner-transfer or sponsor-support register. | T2D.3 governance; T2D.5 capital allocation; T2D.9 risk assessment. | Medium | Issuer related-party, distribution, and sponsor-support disclosures. |
| CP-2C-GAP-009 | Fixed-versus-variable cost split, maintenance-versus-growth capital expenditure, and segment-level working-capital needs. | Limits the ability to estimate operating leverage, downside cash flow, and sustainable free cash flow. | Company and operating model; operating-model register. | Medium | Segment operating and capital-expenditure schedules. |
| CP-2C-GAP-010 | Full legal-entity, guarantor, and intercompany receivables structure. | Limits assessment of collateral coverage, structural priority, and value available to each creditor class. | Ownership map; debt and maturity snapshot. | Medium | Legal entity chart, guarantee schedule, and executed financing documents. |

### gaps_ledger - Gaps ledger

| Gap | Affected analysis | Severity | Action | Status |
|---|---|---|---|---|
| Beneficial ownership, sponsor, fund, and board-control details are not established. | Ownership and governance risk. | Material | Obtain the current proxy, ownership schedule, and board/control disclosures. | Open |
| Celero seller expenses, funding allocation, standalone EBITDA, and realized integration gains are not fully disclosed. | Transaction and capital-allocation analysis. | Material | Obtain the closing statement, purchase-price bridge, and acquisition financial supplement. | Open |
| Current covenant ratios, headroom, and distribution-basket usage are not published. | Covenant and lender-control view. | Material | Obtain the latest lender compliance certificate and basket-use schedule. | Open |
| Full legal-entity, guarantee, and amendment history is not included in the reviewed materials. | Ownership map and financing analysis. | Material | Obtain the legal-entity chart, guarantee schedule, and financing-document history. | Open |
| Fixed and variable costs, maintenance capex, and segment working capital are not quantified. | Operating model and cash-flow sensitivity. | Minor | Obtain segment operating and capital-expenditure schedules. | Open |

### conflict_log - Conflict log

| Conflict | Sources | Materiality | Resolution | Downstream impact |
|---|---|---|---|---|
| Celero cash consideration, accounting consideration, and net acquisition cash outflow are different reported measures. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13 | Material | USD 664.6 million accounting consideration less USD 21.7 million of acquired cash equals USD 642.9 million of net acquisition cash outflow. The approximately USD 625.0 million cash base is stated to have seller expenses and other adjustments, but those components are not separately quantified; the USD 39.6 million difference from accounting consideration is therefore not allocated further. | Do not treat cash base, accounting consideration, and net cash flow as interchangeable purchase-price or debt-funding figures. |

### Gaps

| Gap | Why it matters | Affected analysis | Consequence | Source |
|---|---|---|---|---|
| Beneficial ownership, sponsor, fund, and board-control details are not established. | Prevents assessment of owner incentives, control, and sponsor support. | Ownership and governance risk. | Sponsor and governance view remains Insufficient Information. | 10-K_2025-12-31_dlx.htm.jsonl, pages 1, 118 |
| Celero expenses, funding allocation, standalone EBITDA, and realized integration gains are not fully disclosed. | Prevents a complete purchase-price, leverage, and return assessment. | Transaction and capital-allocation analysis. | Do not credit unverified earnings or synergies. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13, 19 |
| Current covenant ratios, headroom, and distribution basket usage are not published. | Limits monitoring of default distance and residual creditor protections. | Covenant and lender-control view. | Reported compliance cannot be converted into headroom. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 20–21 |
| Full legal-entity, guarantee, and amendment history is not included in the reviewed materials. | Limits collateral, structural priority, and creditor-treatment analysis. | Ownership map and financing analysis. | Legal capacity and recovery implications remain incomplete. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 20–22 |
| Fixed and variable costs, maintenance capex, and segment working capital are not quantified. | Limits cash-flow downside sensitivity. | Operating model. | Operating leverage cannot be stress-tested from this module's evidence. | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 26; 10-K_2025-12-31_dlx.htm.jsonl, pages 29, 31 |

## Calculations

| ID | Calculation | Inputs and computation | Result | Source |
|---|---|---|---|---|
| CELERO-CASH | Net acquisition cash outflow | USD 664.6 million consideration transferred less USD 21.7 million cash and restricted cash acquired | USD 642.9 million, equal to reported acquisition cash outflow net of cash acquired | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 12 |
| CELERO-DELTA | Difference between accounting consideration and approximate cash consideration base | USD 664.6 million less approximately USD 625.0 million | Approximately USD 39.6 million; not separately allocated by the issuer to seller expenses or other adjustments | 10-Q_2026-09-30_dlx.htm.jsonl, page 12 |
| DEBT-PRINCIPAL | Total principal debt | USD 800.0 million term loan + USD 475.0 million unsecured notes + USD 450.0 million secured notes + USD 200.5 million revolver drawings + USD 100.0 million securitization obligations | USD 2,025.5 million, matching reported total principal before unamortized discount and issuance costs | 10-Q_2026-09-30_dlx.htm.jsonl, page 18 |
| SEGMENT-MIX | Payments and data revenue, nine-month period | USD 347.5 million Merchant Services + USD 224.4 million B2B Payments + USD 282.6 million Data Solutions; comparator USD 297.2 million + USD 214.2 million + USD 234.3 million | USD 854.5 million in 2026 versus USD 745.7 million in 2025; increase USD 108.8 million or 14.6% | 10-Q_2026-09-30_dlx.htm.jsonl, page 27 |
| PRINT-CHANGE | Print revenue change, nine-month period | (USD 736.7 million − USD 852.3 million) ÷ USD 852.3 million | −13.6%, matching issuer-reported change | 10-Q_2026-09-30_dlx.htm.jsonl, page 43 |
| FCF-9M26 | Free cash flow, nine-month period | USD 215.9 million operating cash flow − USD 81.0 million capital expenditures | USD 134.9 million, matching issuer-defined free cash flow | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 44 |
| FCF-9M25 | Free cash flow comparator | USD 168.5 million operating cash flow − USD 72.6 million capital expenditures | USD 95.9 million, matching issuer-defined free cash flow | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 44 |

## Gaps

The ownership and transaction-economics gaps change the governance and acquisition-return conclusions. The remaining operating and legal-document gaps limit sensitivity analysis, covenant monitoring, and collateral assessment.
Basis: 10-K_2025-12-31_dlx.htm.jsonl, page 118; 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13, 19–22

## Next module

The orchestrator selects the next module.

