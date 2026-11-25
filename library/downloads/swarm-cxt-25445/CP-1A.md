---
module_id: CP-1A
module_name: BusinessTransactionFactPack
run_id: cxt-25445-2026-11-18-credit_snapshot-host
issuer_name: Crane NXT, Co.
issuer_id: cxt-25445
reporting_period: Q3 2026
analysis_date: 2026-11-18
---

## Request
Prepare a source-traced business, transaction, ownership and operating-model fact pack for Crane NXT, Co. as of 2026-11-18 under the credit_snapshot pathway. Scope is the consolidated issuer and its controlled subsidiaries, using the pinned filings and supplied Source readiness assessment.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_cxt.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-26 | 01187d5c69747fdd7576e6df20b86f97ae44d4962226c99fc0083d69999c404b | Business description, audited FY2025 revenue mix and major customer, DLR terms, control and ownership disclosures |
| 10-Q_2026-09-30_cxt.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-04 | 55422b5e495513ada133cd913a2e17251021745f2ce0eee3fa1e4e8436a4d411 | Antares results, current segment structure, amendments, control and financing activity |
| EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl | Third-quarter 2026 earnings release | 2026-11-04 | 67f82d3885906de865063f3f40fbf1da0d9b57013fb7f261abf4484b67df59a9 | Q3 segment results, order backlog, management commentary and declared dividend |

### Supplied handoffs

| Module | sha256 | Use |
|---|---|---|
| Source readiness (CP-0) | 0f3e5e7f12d07ffbdbeddd8fae567facffd7996b6f24c425e64e6429fee44f2c | Pinned-source coverage, consolidated perimeter and evidence limitations |

## Findings

### Bottom line
Crane NXT’s secure-payment and authentication activities have identifiable customer uses and disclosed order backlog, but a significant SAT customer, recent acquisitions and a reorganized operating structure make revenue concentration, segment comparability and acquired-business returns material creditor questions.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 7–8, 89–91; 10-Q_2026-09-30_cxt.htm.jsonl, pages 8, 13–15; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 6

### Key findings
- The operating model spans payment-verification equipment and software, field services, banknotes, product security and authentication. FY2025 sales were nearly balanced between CPI and SAT, but the segment structure changed after Antares Vision was acquired and CPI was combined with Antares in DTT. Annual and current segment figures therefore do not form a like-for-like time series.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 7–8, 89–90; 10-Q_2026-09-30_cxt.htm.jsonl, pages 8, 14–15; calculation C1
- A persistent customer concentration is disclosed within SAT: one individually significant customer generated USD 210.7 million of FY2025 sales, after USD 209.2 million in FY2024 and USD 213.1 million in FY2023. The FY2025 amount equaled 26.0% of SAT and 12.7% of total company sales, exposing results to customer-specific order and renewal decisions even though the customer is not named.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, page 91; calculation C7
- Acquisition risk is material to current operating analysis: Antares Vision contributed sales while reporting an operating loss during 2026, and DTT’s reported quarterly operating profit and margin were below the prior-year quarter even as acquired sales lifted the segment’s total. The issuer attributes Antares’s operating loss to acquisition-related amortization and transaction costs, but standalone cash returns remain unestablished.
Basis: 10-Q_2026-09-30_cxt.htm.jsonl, pages 13–15; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, pages 1, 6
- Ownership evidence establishes public listing and acquired operating assets, but does not identify current beneficial shareholders, their economic stakes or shareholder-level control rights. The public-company evidence cannot support a sponsor-alignment conclusion; the detailed ownership view remains insufficiently established.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 7, 115
- Acquisition funding and ordinary dividends are disclosed, but the pinned documents do not provide purchase multiples, transaction-level pro forma leverage or enough legal detail to assess acquisition returns and capacity. The evidence supports monitoring cash retention and integration outcomes, not a conclusion that shareholder extraction occurred.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 54, 83–84; 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–10, 21; 10-Q_2026-09-30_cxt.htm.jsonl, page 4

### Contrary evidence and what would change the view
The strongest counterweight is that FY2025 sales were distributed across two substantial product segments and the year-end order book was expected to convert predominantly in the following fiscal year; the latest release also showed a larger total backlog, including acquired Antares orders. SAT reported stronger year-over-year quarterly profit, and management said it delivered synergy commitments and remained on track for its year-end deleveraging objective. These points support demand visibility and potential acquisition benefits, but management’s statements do not establish realized cash savings or acquisition returns. The view would improve with sustained organic growth, stable segment margins after the reorganization, reported Antares cash generation and debt paydown, and disclosure of the shareholder and legal-control structure; it would weaken if acquired-business losses persist, backlog conversion slips, or further borrowing funds acquisitions or distributions without commensurate cash generation.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 89–90; 10-Q_2026-09-30_cxt.htm.jsonl, pages 13–15; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, pages 1, 6

### Limitations
- The conclusion on shareholder influence and governance remains limited because the supplied filings do not identify current beneficial owners, ownership percentages or investor-specific voting arrangements; the current proxy and related governance documents are needed to establish whether ownership is concentrated.
  Basis: 10-K_2025-12-31_cxt.htm.jsonl, page 115
- The conclusion on Antares and DLR acquisition economics remains limited because transaction-level purchase multiples, acquired-business pro forma leverage and standalone cash-flow returns are not supplied; creditors cannot test whether acquisition consideration is supported by sustainable earnings and cash conversion.
  Basis: 10-K_2025-12-31_cxt.htm.jsonl, page 83; 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–13
- FY2025 control conclusions do not cover DLR’s internal-control systems, which were excluded from the company’s control assessment as a recently acquired business; this reduces assurance over the acquired operation’s processes until integration is completed.
  Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 112–113
- Annual CPI/SAT sales and the current DTT/SAT structure are not directly comparable because the current segment definition combines CPI with Antares; this limits trend conclusions for segment growth, margins and capital intensity.
  Basis: 10-K_2025-12-31_cxt.htm.jsonl, page 89; 10-Q_2026-09-30_cxt.htm.jsonl, pages 14–15
- This analysis establishes operating and transaction facts only; by itself it cannot support a final debt-capacity, recovery or investment view, so those decisions require their own analysis.

### Company and operating model
Crane NXT sells specialized equipment, associated software and authentication products and services. FY2025 filing revenue detail shows balanced segment totals but different product composition: CPI was predominantly products with a smaller service stream, while SAT was predominantly banknotes and security products with a substantial authentication business. The filing also identifies one individually significant SAT customer; it does not identify the customer or describe contract duration.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 8, 89–91; calculation C1; calculation C2; calculation C7

| Business or mix line | FY2025 sales (USD millions) | Share of line / total | Activity or composition | Credit relevance | Source |
|---|---:|---:|---|---|---|
| CPI segment | 846.6 | 51.1% of total sales | Payment-verification equipment, software, automation, processing, field services and remote diagnostics | Equipment sales and service offerings diversify the revenue stream; no recurring-revenue split is reported | 10-K_2025-12-31_cxt.htm.jsonl, pages 8, 89 |
| SAT segment | 810.1 | 48.9% of total sales | Banknotes, physical-product security, brand protection and authentication | One individually significant customer is disclosed; broader customer distribution is not supplied | 10-K_2025-12-31_cxt.htm.jsonl, pages 8, 89, 91 |
| CPI products | 709.4 | 83.8% of CPI sales | Electronic products and associated systems | Product-led sales expose margins to order timing and product demand | 10-K_2025-12-31_cxt.htm.jsonl, page 90 |
| CPI services | 137.2 | 16.2% of CPI sales | Services attached to CPI equipment and software | Service revenue can complement equipment demand, but contract duration and renewal rates are not supplied | 10-K_2025-12-31_cxt.htm.jsonl, page 90 |
| SAT banknotes and security products | 592.4 | 73.1% of SAT sales | Banknotes and physical security products | Orders may reflect public-sector currency demand and product-protection cycles; customer sales are not split by product line | 10-K_2025-12-31_cxt.htm.jsonl, page 90 |
| SAT authentication products and solutions | 217.7 | 26.9% of SAT sales | Authentication products and solutions | Adds consumer and industrial brand-protection exposure; retention and recurring software share are not supplied | 10-K_2025-12-31_cxt.htm.jsonl, page 90 |
| Individually significant SAT customer | 210.7 | 26.0% of SAT / 12.7% of total | Same customer sales were USD 209.2 million in FY2024 and USD 213.1 million in FY2023; the customer is not named | Persistent concentration creates order, renewal and receivable risk; contract terms are not disclosed | 10-K_2025-12-31_cxt.htm.jsonl, pages 89, 91 |

### Company profile
The issuer’s disclosed profile and source-supported perimeter are summarized below. Public listing establishes that the equity is publicly traded; it does not establish who holds the shares or whether ownership is dispersed.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 1, 7, 115; 10-Q_2026-09-30_cxt.htm.jsonl, page 1

| Profile item | Source-supported description | Credit relevance | Source |
|---|---|---|---|
| Issuer and perimeter | Crane NXT, Co. and subsidiaries, consolidated | This is the operating perimeter described by the filings; standalone borrower-only accounts are not supplied | 10-Q_2026-09-30_cxt.htm.jsonl, page 1 |
| Country | United States; Delaware corporation with principal executive offices in Waltham, Massachusetts | Legal domicile and operating location are disclosed; subsidiary-level debt and guarantor perimeter remain separate questions | 10-K_2025-12-31_cxt.htm.jsonl, page 1 |
| Sector | Industrial technology, focused on securing, detecting and authenticating products and transactions | Specialized technology and authentication demand drive product relevance; end-market cyclicality and concentration require separate evidence | 10-K_2025-12-31_cxt.htm.jsonl, page 7 |
| Listing | Common stock trades on the New York Stock Exchange under CXT | Public equity is established, but beneficial owners and voting percentages are not established from these sources | 10-K_2025-12-31_cxt.htm.jsonl, page 7 |
| Customer use cases | Payment verification and processing; banknotes and physical security; brand and digital authentication; government, financial-institution and commercial-brand customers | FY2025 included one individually significant SAT customer with USD 210.7 million of sales; the customer is not named | 10-K_2025-12-31_cxt.htm.jsonl, pages 8–9, 91 |

### Transaction summary and new debt issues
Crane NXT acquired OpSec Security in May 2024 for a base purchase price of USD 270.0 million on a cash-free, debt-free basis; net cash paid was USD 268.4 million, funded with USD 210.0 million from the revolving facility and cash on hand. De La Rue Authentication Solutions was acquired in May 2025 at a base price of GBP 300.0 million, cash-free and debt-free; the filing reports final net cash paid of USD 391.1 million and use of Term Loan A. The sources do not provide transaction-level pro forma leverage or a purchase multiple for either acquisition.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 83–84

Crane NXT began its multi-phase Antares Vision acquisition in December 2025, paying EUR 117.3 million, approximately USD 137.8 million, for an initial 32.3% interest. The remaining shares were acquired through the tender and squeeze-out completed in March 2026 for EUR 244.2 million, approximately USD 281.9 million; the filing reports total consideration of USD 416.9 million. Antares provides inspection, detection and track-and-trace systems for life-sciences and food-and-beverage customers. Its post-acquisition contribution included operating losses attributed by the issuer to acquisition-related amortization and transaction costs, so standalone cash returns are not established.
Basis: 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–10, 13

The Fifth Amendment in December 2025 established a EUR 430 million senior secured delayed-draw Term Loan B due in December 2032, extended the existing Term Loan A and revolving facility maturities to December 2030, and increased the revolving commitment to USD 800.0 million. A July 2026 repricing increased the Term Loan B to EUR 480 million; the incremental EUR 50 million and cash on hand were used primarily to repay Term Loan A. The Q3 filing also reports borrowings and repayments used to fund Antares, repay assumed Antares debt and support working capital. The executed amendment texts are not included in the pinned sources, limiting conclusions about covenant capacity and collateral terms.
Basis: 10-Q_2026-09-30_cxt.htm.jsonl, page 21; Source readiness (CP-0)

### Events: Issuer history
The dated events below mark ownership, acquisition, capital-structure and distribution changes relevant to business continuity and creditor exposure.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 7, 83–84; 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–9, 21; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 2

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2023-04-03 | day | 2026-02-26 | Separation created Crane NXT, Co. and Crane Company as independent public companies through a pro-rata distribution; Crane NXT retained Payment and Merchandising Technologies | Historical — completed separation | 10-K_2025-12-31_cxt.htm.jsonl, page 7 | Establishes standalone public-company history and retained business perimeter |
| 2024-05-03 | day | 2026-02-26 | OpSec Security acquired for a base purchase price of USD 270.0 million | Historical — completed acquisition | 10-K_2025-12-31_cxt.htm.jsonl, page 84 | Expanded authentication; revolving debt and cash funded the purchase |
| 2025-05-01 | day | 2026-02-26 | De La Rue Authentication Solutions acquired for a base price of GBP 300.0 million | Historical — completed acquisition | 10-K_2025-12-31_cxt.htm.jsonl, page 83 | Added authentication business and Ghana tax-stamp joint venture; Term Loan A funded the acquisition |
| 2025-09 | month | 2026-02-26 | Final working-capital adjustment received for the De La Rue acquisition | Historical — completed adjustment in September 2025 | 10-K_2025-12-31_cxt.htm.jsonl, page 83 | Reduced final net cash paid for the acquisition |
| 2025-12-15 | day | 2026-11-04 | Fifth Amendment established a senior secured EUR Term Loan B and extended existing facility maturities | Historical — executed amendment, terms summarized in filing | 10-Q_2026-09-30_cxt.htm.jsonl, page 21 | Changed maturity profile and added acquisition financing; full legal terms are not supplied |
| 2025-12-16 | day | 2026-11-04 | First phase of Antares Vision acquisition acquired a 32.3% interest | Historical — first phase completed | 10-Q_2026-09-30_cxt.htm.jsonl, page 8 | Began a multi-phase acquisition with subsequent control and funding needs |
| 2026-03-31 | day | 2026-11-04 | Tender and squeeze-out acquired Antares Vision’s remaining shares | Historical — second phase completed and acquisition date | 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–9 | Brought Antares into consolidation and DTT; acquired debt and integration costs affect results |
| 2026-07-02 | day | 2026-11-04 | Sixth Amendment repriced and increased Term Loan B to EUR 480 million | Historical — executed amendment, terms summarized in filing | 10-Q_2026-09-30_cxt.htm.jsonl, page 21 | Added incremental financing and primarily repaid Term Loan A |
| 2026-11-04 | day | 2026-11-04 | Fourth-quarter dividend of USD 0.18 per share announced, payable December 9, 2026 to holders of record November 30, 2026 | Scheduled — dividend declared for Q4 2026 | EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 2 | Cash distribution is a recurring capital-allocation item to monitor alongside debt reduction |
| 2028 | year | 2026-11-04 | Antares personnel Class B interests may convert based on ITT revenue and EBIT target achievement for the year ended December 31, 2028 | Scenario — conversion depends on target achievement | 10-Q_2026-09-30_cxt.htm.jsonl, page 9 | Target-based conversion may affect equity-linked claims and incentive alignment |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 23 |
| Calculated | 7 |
| Assumption-Based | 0 |
| Analyst Inference | 8 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 7 |
| Fields present | 94 |
| Fields total | 94 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 0 |

### Map: ownership and control
The disclosed ownership edges are limited to listed equity, acquired Antares Vision shares and De La Rue’s joint-venture interest; they do not establish beneficial shareholders of Crane NXT or broader control rights.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 7, 83, 115; 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–9

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Public common shareholders | Listed common equity; holder stakes are not disclosed | Ownership | Crane NXT, Co. | 10-K_2025-12-31_cxt.htm.jsonl, pages 7, 115 |
| Crane NXT, Co. | Acquired remaining shares; Antares became wholly owned | Ownership | Antares Vision S.p.A. | 10-Q_2026-09-30_cxt.htm.jsonl, page 8 |
| De La Rue Authentication Solutions | Owns 49% and controls through board rights | Ownership | Ghana tax-stamp joint venture | 10-K_2025-12-31_cxt.htm.jsonl, page 83 |
| De La Rue Authentication Solutions | Board rights maintain control of the joint venture | Legal control | Ghana tax-stamp joint venture | 10-K_2025-12-31_cxt.htm.jsonl, page 83 |

### Map: operating model to credit
The links below connect disclosed products, order visibility and acquisition performance to creditor-relevant cash-flow questions. They do not assign probabilities or forecast amounts.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, pages 8, 90; 10-Q_2026-09-30_cxt.htm.jsonl, pages 13–15, 21; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, pages 1, 6

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| CPI | Provides payment verification and processing systems | Documentary Fact | Payment transaction solutions | 10-K_2025-12-31_cxt.htm.jsonl, page 8 |
| SAT | Serves public, financial and brand security needs | Documentary Fact | Security and authentication solutions | 10-K_2025-12-31_cxt.htm.jsonl, pages 8–9 |
| CPI and Antares Vision | Current DTT combines CPI and Antares Vision | Documentary Fact | DTT | 10-Q_2026-09-30_cxt.htm.jsonl, page 14 |
| Firm orders and remaining performance obligations | Backlog may support near-term revenue visibility | Analyst Interpretation | Revenue conversion and cash generation | 10-K_2025-12-31_cxt.htm.jsonl, page 90; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 6 |
| Antares Vision | Acquisition costs contributed to operating loss | Documentary Fact | DTT margin and integration risk | 10-Q_2026-09-30_cxt.htm.jsonl, page 13 |
| Management | Reported synergies delivered and deleveraging on track | Management Language | Acquisition integration and debt reduction | EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 1 |
| Acquisition financing and incremental borrowing | Borrowings funded Antares and repaid assumed debt | Documentary Fact | Debt service and financial flexibility | 10-Q_2026-09-30_cxt.htm.jsonl, page 21 |

### Analytical appendix — complete canonical registers

### T2D.1 Source Register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_cxt.htm.jsonl | FY2025 annual report | High — audited primary issuer filing | FY2025 | Crane NXT, Co. and subsidiaries | Business model, segment and product-line sales, one significant customer, acquisitions, ownership and control disclosures | DLR internal controls excluded from assessment; current shareholder details incorporated by reference | Business profile, revenue mix, customer exposure and acquisition analysis |
| 10-Q_2026-09-30_cxt.htm.jsonl | Q3 2026 quarterly report | High — primary issuer filing | Q3 2026 and 9M 2026 | Crane NXT, Co. and subsidiaries | Antares results, DTT/SAT organization, amendments and financing activity | Unaudited; no transaction-level acquired-business cash flow | Current operating and acquisition analysis |
| EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl | Q3 2026 earnings release | Medium — issuer release | Q3 2026 and 9M 2026 | Crane NXT, Co. and segments | Segment results, backlog, guidance and dividend | Management statements and adjusted measures are not independent verification | Current segment and management context |

Module Status: Ready with Limitations

### transaction_summary

| Transaction | Status | Credit relevance | Source |
|---|---|---|---|
| OpSec Security acquisition | Completed 2024-05-03; base purchase price USD 270.0 million cash-free and debt-free; net cash paid USD 268.4 million, funded with USD 210.0 million from revolving facility and cash on hand | Added brand and digital authentication to SAT; purchase multiple and pro forma leverage not supplied | 10-K_2025-12-31_cxt.htm.jsonl, page 84 |
| De La Rue Authentication Solutions acquisition | Completed 2025-05-01; base purchase price GBP 300.0 million cash-free and debt-free; final net cash paid USD 391.1 million, funded using Term Loan A | Added authentication and Ghana tax-stamp venture; acquisition return and pro forma leverage not separately disclosed | 10-K_2025-12-31_cxt.htm.jsonl, page 83 |
| Antares Vision first phase | Completed 2025-12-16; 32.3% interest for EUR 117.3 million, approximately USD 137.8 million, at EUR 5.00 per share | Initial investment began a multi-phase process; acquisition financing created additional leverage and execution exposure | 10-Q_2026-09-30_cxt.htm.jsonl, page 8 |
| Antares Vision second phase | Completed 2026-03-31; remaining shares acquired for EUR 244.2 million, approximately USD 281.9 million; total consideration reported as USD 416.9 million | Brought Antares into consolidation; post-acquisition operating loss and transaction costs temper near-term earnings contribution | 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–13 |
| Fifth Amendment | Executed 2025-12-15; EUR 430 million senior secured delayed-draw Term Loan B due 2032; existing Term Loan A and revolving facility extended to 2030; revolving facility increased to USD 800.0 million | Financed acquisition activity and extended maturities; executed agreement and full covenant terms not supplied | 10-Q_2026-09-30_cxt.htm.jsonl, page 21 |
| Sixth Amendment | Executed 2026-07-02; Term Loan B increased from EUR 430 million to EUR 480 million; incremental EUR 50 million and cash on hand primarily repaid Term Loan A | Added debt proceeds while reducing another term loan; net leverage effect cannot be isolated from summarized disclosure | 10-Q_2026-09-30_cxt.htm.jsonl, page 21 |

### company_description

| Issuer | Business description | Country | Sector | Source |
|---|---|---|---|---|
| Crane NXT, Co. | Industrial technology company providing payment-verification and processing equipment, software and services, banknote and physical-product security, and brand, digital and product authentication solutions | United States | Industrial technology | 10-K_2025-12-31_cxt.htm.jsonl, pages 1, 7–8 |

### revenue_business_mix

| Business line | Revenue mix | Period | Status | Limitation | Source |
|---|---|---|---|---|---|
| CPI segment | USD 846.6 million; 51.1% of total | FY2025 | Reported sales and calculated share | CPI was combined with Antares in DTT following the acquisition; current segment comparison is not like-for-like | 10-K_2025-12-31_cxt.htm.jsonl, page 89 |
| SAT segment | USD 810.1 million; 48.9% of total | FY2025 | Reported sales and calculated share | One individually significant customer is disclosed; broader distribution is not supplied | 10-K_2025-12-31_cxt.htm.jsonl, pages 89, 91 |
| CPI products | USD 709.4 million; 83.8% of CPI segment | FY2025 | Reported sales and calculated share | Contract duration, renewal and product backlog split not supplied | 10-K_2025-12-31_cxt.htm.jsonl, page 90 |
| CPI services | USD 137.2 million; 16.2% of CPI segment | FY2025 | Reported sales and calculated share | Recurring versus project service revenue not supplied | 10-K_2025-12-31_cxt.htm.jsonl, page 90 |
| SAT banknotes and security products | USD 592.4 million; 73.1% of SAT segment | FY2025 | Reported sales and calculated share | Government and banknote demand concentration not quantified | 10-K_2025-12-31_cxt.htm.jsonl, page 90 |
| SAT authentication products and solutions | USD 217.7 million; 26.9% of SAT segment | FY2025 | Reported sales and calculated share | Software / recurring share and customer retention not disclosed | 10-K_2025-12-31_cxt.htm.jsonl, page 90 |
| One individually significant SAT customer | USD 210.7 million in FY2025; USD 209.2 million in FY2024; USD 213.1 million in FY2023; 26.0% of SAT and 12.7% of total sales in FY2025 | FY2025–FY2023 | Reported customer sales; FY2025 shares calculated | Customer identity, contract duration and renewal terms not disclosed | 10-K_2025-12-31_cxt.htm.jsonl, pages 89, 91 |
| North America | USD 829.3 million; 50.1% of total | FY2025 | Reported sales and calculated share by destination | Destination does not establish facility, customer or production concentration | 10-K_2025-12-31_cxt.htm.jsonl, page 89 |
| Western Europe | USD 190.2 million; 11.5% of total | FY2025 | Reported sales and calculated share by destination | Destination does not establish customer concentration | 10-K_2025-12-31_cxt.htm.jsonl, page 89 |
| Rest of the World | USD 637.2 million; 38.5% of total | FY2025 | Reported sales and calculated share by destination | Broad region aggregates multiple countries and end markets | 10-K_2025-12-31_cxt.htm.jsonl, page 89 |

### ownership_register

| Owner / class | Control | Economic interest | Credit relevance | Source |
|---|---|---|---|---|
| Public common shareholders | Common stock is listed on NYSE; no individual beneficial owner, percentage or shareholder control right is established in supplied filing text | Public equity exists; holder-level interests and concentration are not supplied | Public listing alone does not evidence dispersed ownership, sponsor identity or willingness to support creditors | 10-K_2025-12-31_cxt.htm.jsonl, pages 7, 115 |
| Crane NXT, Co. / Antares Vision | Crane NXT acquired remaining Antares Vision shares through a tender and squeeze-out on the acquisition date | Initial 32.3% interest increased through acquisition of remaining shares; Antares is stated to be wholly owned after closing | Control enabled consolidation and created integration and funding exposure; employee incentive interests are described separately | 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–10 |
| De La Rue Authentication Solutions / Ghana tax-stamp joint venture | DLR maintains control through board governance rights | DLR owns 49% of joint-venture share capital | Consolidated results include the controlled venture while a noncontrolling interest remains; cash access and governance beyond stated rights are not detailed | 10-K_2025-12-31_cxt.htm.jsonl, page 83 |

### operating_model

| Operating driver | Measure | Period | Status | Credit relevance | Source |
|---|---|---|---|---|---|
| CPI activities | Payment verification, automation, processing systems, field service, remote diagnostics and productivity software | FY2025 description | Documentary Fact | Equipment and service mix provides multiple sales channels, but recurring revenue and renewal rates are not disclosed | 10-K_2025-12-31_cxt.htm.jsonl, page 8 |
| SAT activities | Banknotes, physical-product security, brand protection, authentication and digital content protection | FY2025 description | Documentary Fact | One individually significant customer is disclosed; broader customer and end-market concentration is not quantified | 10-K_2025-12-31_cxt.htm.jsonl, pages 8–9, 91 |
| Significant SAT customer | One individually significant customer generated USD 210.7 million in FY2025, USD 209.2 million in FY2024 and USD 213.1 million in FY2023 | FY2025–FY2023 | Reported | 26.0% of SAT and 12.7% of company sales in FY2025; customer identity and contract terms not disclosed | 10-K_2025-12-31_cxt.htm.jsonl, pages 89, 91 |
| DTT activities | CPI plus Antares inspection, detection and track-and-trace capabilities | Q3 2026 | Documentary Fact | Broadens portfolio but requires acquisition integration and segment comparability caution | 10-Q_2026-09-30_cxt.htm.jsonl, page 14 |
| Total order backlog | USD 715.5 million, including approximately USD 125 million of Antares backlog | September 30, 2026 | Reported | Provides order visibility, but conversion, cancellation and margin terms are not disclosed | EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 6 |
| Backlog conversion expectation | Approximately 98% of FY2025 year-end backlog expected to be recognized as revenue in 2026 and 2% in 2027 | December 31, 2025 backlog | Management estimate | Supports near-term visibility but is a prior-year expectation, not a guarantee of realized sales or cash | 10-K_2025-12-31_cxt.htm.jsonl, page 90 |
| DTT segment operating performance | Sales USD 253.6 million; operating profit USD 35.7 million; operating margin 14.1% | Q3 2026 | Reported | Lower reported segment profit versus prior-year comparator warrants post-acquisition margin and integration monitoring | 10-Q_2026-09-30_cxt.htm.jsonl, pages 14–15 |
| Antares Vision contribution | Sales USD 50.0 million and operating loss USD 18.8 million | Q3 2026 | Reported | Loss attributed to acquisition amortization and transaction costs; standalone normalized earnings and cash flow remain unestablished | 10-Q_2026-09-30_cxt.htm.jsonl, page 13 |

### events_timeline

| Date / window | Event | Credit relevance | Status | Source |
|---|---|---|---|---|
| 2023-04-03 | Crane NXT and Crane Company became independent public companies through a pro-rata distribution; Crane NXT retained Payment and Merchandising Technologies | Establishes standalone public-company perimeter | Historical — completed separation | 10-K_2025-12-31_cxt.htm.jsonl, page 7 |
| 2024-05-03 | OpSec Security acquisition | Added authentication and brand / digital protection activities; funded with revolver and cash | Historical — completed acquisition | 10-K_2025-12-31_cxt.htm.jsonl, page 84 |
| 2025-05-01 | De La Rue Authentication Solutions acquisition | Added authentication and a Ghana tax-stamp joint venture; Term Loan A used for funding | Historical — completed acquisition | 10-K_2025-12-31_cxt.htm.jsonl, page 83 |
| 2025-09 | DLR final working-capital adjustment received | Reduced final net cash paid | Historical — completed adjustment | 10-K_2025-12-31_cxt.htm.jsonl, page 83 |
| 2025-12-15 | Fifth Amendment to Credit Agreement | Established Term Loan B and extended existing maturities | Historical — executed amendment | 10-Q_2026-09-30_cxt.htm.jsonl, page 21 |
| 2025-12-16 | Initial Antares Vision acquisition phase | Started multi-phase acquisition and financing exposure | Historical — first phase completed | 10-Q_2026-09-30_cxt.htm.jsonl, page 8 |
| 2026-03-31 | Antares tender and squeeze-out completed | Antares entered the consolidated operating perimeter | Historical — second phase completed | 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–9 |
| 2026-07-02 | Sixth Amendment repriced and increased Term Loan B | Added incremental borrowing and primarily repaid Term Loan A | Historical — executed amendment | 10-Q_2026-09-30_cxt.htm.jsonl, page 21 |
| 2026-11-04 | Q4 2026 dividend declared | Scheduled cash distribution to common shareholders | Scheduled — declared for Q4 2026 | EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 2 |
| 2028 | Antares personnel Class B interests may convert based on revenue and EBIT target achievement | Target achievement determines potential incentive-linked equity conversion | Scenario — target-dependent conversion | 10-Q_2026-09-30_cxt.htm.jsonl, page 9 |

### gaps_ledger

| Gap | Affected analysis | Severity | Action | Status |
|---|---|---|---|---|
| Current beneficial shareholders, ownership percentages and voting arrangements | Ownership, control and governance | Material | Review 2026 proxy and current beneficial-ownership filings | Not supplied in pinned sources |
| Acquisition multiples, transaction-level pro forma leverage and acquired-business cash returns | Transaction economics and integration | Material | Obtain acquisition model or close materials with cash-flow and debt bridge | Not supplied in pinned sources |
| DLR control-system integration after acquisition | Assurance over acquired operation and reported financial controls | Material | Review subsequent annual control assessment and integration status | FY2025 filing says DLR was excluded from control assessment |
| Current segment results on a consistently recast pre-Antares basis | Trend analysis for CPI/DTT margins and growth | Material | Obtain recast history or management bridge for new segment structure | Only FY2025 CPI/SAT and post-acquisition DTT/SAT presentations supplied |
| Full customer concentration, named customer, contract duration and recurring-revenue share | Revenue resilience, renewal and working-capital exposure | Moderate | Review customer concentration, contract and renewal disclosures | One individually significant SAT customer is quantified, but identity and contract terms are not disclosed |
| Acquisition-related synergy realization and integration milestones | Antares and DLR return assessment | Moderate | Compare realized cost savings and acquired cash generation against transaction plan | Management statement is not independently verified |
| Full ownership and cash-flow rights in Ghana tax-stamp joint venture | Noncontrolling interests and subsidiary cash access | Moderate | Review joint-venture agreement and distribution / reserved-matter rights | Only share percentage and board-control statement supplied |

### conflict_log

| Conflict | Sources | Materiality | Resolution | Downstream impact |
|---|---|---|---|---|
| FY2025 segment names and composition differ from current segment reporting | 10-K_2025-12-31_cxt.htm.jsonl, page 89; 10-Q_2026-09-30_cxt.htm.jsonl, pages 14–15 | Material comparability issue; not a source contradiction | FY2025 reports CPI and SAT; after Antares, CPI and Antares are combined in DTT and SAT remains separate; use each presentation on its own basis | Do not interpret apparent segment sales or margins as like-for-like growth without a recast bridge |
| Antares translated phase amounts do not sum to the separately stated total consideration | 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–9 | Low; rounded currency translations and timing can produce differences | Retain the filing’s phase amounts and its separately reported total; do not replace the reported total with a sum of rounded translated amounts | Preserve issuer-reported figures; acquisition economics remain unavailable without transaction documents |

### T2D.3 Governance Register

| Governance Topic | Source-Supported Fact | Risk Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Public-company oversight | Common stock listed on NYSE; beneficial ownership and some governance information incorporated by reference to 2026 proxy | Mixed / ownership detail insufficient | Listing creates public reporting duties but does not identify controlling holders or shareholder rights | Periodic reporting is established; holder-level influence and alignment cannot be assessed | High — primary filing | 10-K_2025-12-31_cxt.htm.jsonl, pages 7, 115 | 2026 proxy is not in pinned sources |
| DLR control integration | DLR internal controls were not fully incorporated and were excluded from FY2025 management assessment and audit | Negative assurance limitation | Acquired process controls were outside the stated assessment perimeter | Reduces assurance over DLR reporting controls until integration is completed | High — annual and audit report | 10-K_2025-12-31_cxt.htm.jsonl, pages 112–113 | Subsequent integration status not supplied |
| Antares incentive interests | ITT issued ordinary and Class B interests to certain Antares personnel; Class B conversion depends on 2028 revenue and EBIT targets and a multiplier ranging from zero to three | Mixed | Incentive interests may align acquired personnel with revenue and EBIT targets but can add equity-linked claims | Potential incentive alignment is disclosed; dilution and payout depend on performance and terms | High — primary filing | 10-Q_2026-09-30_cxt.htm.jsonl, pages 9–10 | Full instrument terms and payout outcomes are not yet known |
| Capital deployment policy | Issuer describes reinvestment, acquisitions, divestitures, dividends, share repurchases and debt repayment as uses of operating cash | Mixed | Multiple uses compete for cash available for debt reduction | Monitor acquisition pace and distributions against realized cash generation | High — primary filing | 10-Q_2026-09-30_cxt.htm.jsonl, page 33 | Policy language does not state a priority ranking |

### T2D.4 Sponsor / Shareholder Behavior Flags

| Flag ID | Behavior Type | Documented Action | Behavior Category | Amount / Funding Source | Legal-Capacity Link | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|---|---|---|
| CXT-BEH-01 | Acquisition funding | OpSec acquisition funded using revolver borrowings and cash on hand | B. Neutral / Mixed — strategic acquisition; leverage impact not fully presented | USD 268.4 million net cash paid; USD 210.0 million revolver plus cash | Revolving facility identified; detailed basket capacity and executed terms not supplied | Cash and revolving capacity used for growth; returns need to exceed financing and integration costs | Increased portfolio breadth but used liquidity or debt capacity at closing; no pro forma leverage is disclosed here | High — primary annual report | 10-K_2025-12-31_cxt.htm.jsonl, page 84 | No transaction multiple or return bridge |
| CXT-BEH-02 | Acquisition funding | DLR acquired using Term Loan A | B. Neutral / Mixed — strategic acquisition; return and debt impact not fully disclosed | GBP 300.0 million base purchase price; final net cash paid USD 391.1 million; Term Loan A | Term Loan A funding identified; executed legal capacity is not supplied | Term debt funded acquisition, transferring integration and return risk to creditors | Debt-funded acquisition increases importance of cash generation and deleveraging | High — primary annual report | 10-K_2025-12-31_cxt.htm.jsonl, page 83 | Pro forma leverage and acquired cash generation not supplied |
| CXT-BEH-03 | Acquisition and financing | Antares acquired in two phases and financed through Term Loan B and revolving borrowings; assumed Antares debt was repaid | B. Neutral / Mixed — strategic acquisition and borrowing, without documented creditor-adverse exchange | First phase EUR 117.3 million; second phase EUR 244.2 million; 9M 2026 Term Loan B proceeds USD 424.5 million; revolver proceeds USD 316.3 million and repayments USD 209.0 million; assumed debt USD 123.5 million repaid | Fifth and Sixth Amendment summaries identify facilities; exact baskets, liens and guarantees not supplied | Incremental acquisition funding and refinancing can increase debt service and encumbrance while acquired earnings integrate | Transaction increased reliance on Antares cash generation; reported operating loss and integration require monitoring | High — primary quarterly filing | 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–10, 21 | Financing flows are period totals, not a complete source-and-use bridge |
| CXT-BEH-04 | Ordinary shareholder distribution | Cash dividends paid and Q4 2026 dividend declared | B. Neutral / Mixed — ordinary dividend; no evidence of a dividend recap | FY2025 cash dividends USD 39.0 million; 9M 2026 USD 31.1 million; Q4 declared USD 0.18 per share | Dividend authority and restrictions are not established from summarized filings | Dividends reduce cash available for debt repayment, but the sources do not indicate debt-funded distributions | Monitor against acquisition funding and debt reduction; do not characterize as extraction on evidence supplied | High — primary filings and issuer release | 10-K_2025-12-31_cxt.htm.jsonl, page 54; 10-Q_2026-09-30_cxt.htm.jsonl, page 4; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 2 | Legal capacity and full historical distribution policy are not established |

### T2D.5 Capital Allocation Risk Table

| Capital Allocation Item | Source-Supported Fact | Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Acquisitions | OpSec, DLR and Antares expanded authentication, security, inspection and traceability activities; funding varied by transaction | Mixed | Portfolio expansion can add technology and customer adjacency but consumes liquidity and adds integration and financing claims | Credit benefit depends on acquired businesses generating cash and realizing synergies; purchase multiples and pro forma leverage are not disclosed | High — primary filings | 10-K_2025-12-31_cxt.htm.jsonl, pages 83–84; 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–13, 21 | Standalone returns and transaction cash bridge not supplied |
| Dividends | Cash dividends were paid in FY2025 and 9M 2026; a Q4 2026 dividend was declared | Negative to cash retention; not evidence of recap | Distribution competes with debt reduction and acquisition funding for internal cash | Track ordinary distributions alongside leverage and free cash flow; do not infer debt-funded leakage | High — primary filings and release | 10-K_2025-12-31_cxt.htm.jsonl, page 54; 10-Q_2026-09-30_cxt.htm.jsonl, page 4; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 2 | Covenant restrictions and full dividend history are not supplied |
| Debt repayment and refinancing | Term Loan B proceeds and revolving borrowings funded Antares and repayments; Term Loan A was repaid in part | Mixed | Refinancing extends maturities and funds acquisition, while gross borrowing activity can offset cash deleveraging | Evaluate net debt reduction and covenant terms using full financial and legal analysis | High — primary quarterly filing | 10-Q_2026-09-30_cxt.htm.jsonl, page 21 | Transaction-level debt bridge and executed agreements not supplied |

### T2D.9 Sponsor / Governance Risk Assessment

| Risk-Level Driver | Evidence | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Countervailing Evidence | Limitation |
|---|---|---|---|---|---|---|---|
| Ownership and control | Public listing is documented, but holder-level beneficial ownership, percentages and voting agreements are not in the supplied filing text | Unidentified concentration or rights could affect capital allocation and control; identity cannot be inferred from listing alone | Shareholder alignment and control risk cannot be rated as low or adverse | High for listing; insufficient for holder detail | 10-K_2025-12-31_cxt.htm.jsonl, pages 7, 115 | Public reporting and listed common stock | Current proxy and beneficial-ownership details not supplied |
| Acquisition and leverage tolerance | Acquisitions funded with revolver, Term Loan A and Term Loan B; Antares reported operating losses after acquisition | Debt-funded expansion increases need for acquired cash flows to support debt service and reduce leverage | Mixed financial policy; acquisition discipline is unproven on return evidence | High — primary filings | 10-K_2025-12-31_cxt.htm.jsonl, pages 83–84; 10-Q_2026-09-30_cxt.htm.jsonl, pages 8–13, 21 | Acquisitions add adjacent products; assumed Antares debt was repaid and management states synergies were delivered | No purchase multiple, pro forma leverage or cash-return analysis |
| Shareholder distributions | Regular dividends reported; reviewed documents do not describe a debt-funded dividend recap | Distributions reduce retained cash but are not by themselves evidence of extraction | Monitor cash allocation; no creditor-adverse conclusion is supported | High — primary filings | 10-K_2025-12-31_cxt.htm.jsonl, page 54; 10-Q_2026-09-30_cxt.htm.jsonl, page 4 | Management states deleveraging remains an objective | Dividend restrictions and broader historical record not established |
| Customer concentration | One individually significant SAT customer generated USD 210.7 million in FY2025, USD 209.2 million in FY2024 and USD 213.1 million in FY2023 | A material customer relationship can transmit order, renewal or payment disruption into sales and cash flow | Concentration is a relevant operating risk; customer identity and contractual protection are unknown | High — primary annual report | 10-K_2025-12-31_cxt.htm.jsonl, page 91 | Other government, bank and commercial-brand use cases are disclosed | Customer identity, contract terms and receivable performance are not supplied |
| Control environment | FY2025 management and auditor excluded DLR controls from evaluation following its acquisition | Acquired business processes were outside the assessment | Assurance is reduced for DLR control coverage until integration is completed | High — annual report and audit report | 10-K_2025-12-31_cxt.htm.jsonl, pages 112–113 | Company concluded overall internal control was effective in all material respects | Later DLR control integration status not supplied |
| Overall sponsor / governance risk | Crane NXT is publicly listed but no sponsor or controlling shareholder is identified in the supplied sources; transaction behavior and legal capacity remain incomplete | Missing ownership, sponsor economics and legal capacity prevent assessment of support, extraction or amendment behavior | Insufficient Information; do not infer willingness or adversity from public-company or acquisition activity alone | Insufficient Information | 10-K_2025-12-31_cxt.htm.jsonl, pages 7, 115; 10-Q_2026-09-30_cxt.htm.jsonl, page 21 | No creditor-adverse exchange or recapitalization is documented in reviewed materials | Shareholder data, governance documents and executed credit terms are needed |

Sponsor / Governance Risk Level: Insufficient Information

### T2D.11 Gaps Ledger

| Gap ID | Missing Data | Why It Matters | Affected Section / Flag / Export Record | Consequence for Confidence | Required Follow-Up Source |
|---|---|---|---|---|---|
| CXT-GAP-01 | Current beneficial owners, voting percentages and shareholder agreements | Determines ownership concentration, control and shareholder-creditor alignment | ownership_register; T2D.3; T2D.9 | High — governance and support conclusions remain insufficiently established | 2026 definitive proxy statement and current beneficial-ownership filings |
| CXT-GAP-02 | Purchase multiples, pro forma leverage, acquired EBITDA and transaction-level cash returns | Tests whether acquisition debt is supported by sustainable incremental cash generation | transaction_summary; T2D.4; T2D.5; T2D.9 | High — acquisition discipline and debt capacity cannot be established | Acquisition underwriting and closing model, lender presentation and acquired-business results |
| CXT-GAP-03 | Current full credit agreement and amendment text, including covenant, basket, guarantee, collateral and distribution capacity | Establishes legal capacity for debt, liens, investments, distributions and asset transfers | T2D.4; T2D.5; T2D.9 | High — legal capacity and creditor protections cannot be assessed from summaries | Executed credit agreement, Fifth Amendment and Sixth Amendment |
| CXT-GAP-04 | Post-acquisition DLR internal-control integration status | Determines whether acquired operating and reporting systems are covered by current controls | T2D.3; T2D.9 | Medium — DLR reporting assurance remains limited | Subsequent annual report, management control assessment and auditor report |
| CXT-GAP-05 | Recast segment history under DTT/SAT, remaining customer distribution and recurring-revenue detail | Supports consistent segment margins, growth, customer risk and cash-flow visibility analysis | revenue_business_mix; operating_model; conflict_log | Medium — segment trend and revenue-resilience conclusions remain limited | Recast historical segment reporting and customer / contract disclosures |

### CP-MODEL interface

<!-- table-id: cp1a.cp_model_snapshot_fields -->
| field_id | value | status | source_id | source_locator | as_of |
|---|---|---|---|---|---|
| issuer_name | Crane NXT, Co. | READY | 10-K_2025-12-31_cxt.htm.jsonl | page:1 | 2026-11-18 |
| sector | Industrial technology | READY | 10-K_2025-12-31_cxt.htm.jsonl | page:7 | 2026-11-18 |
| country | United States | READY | 10-K_2025-12-31_cxt.htm.jsonl | page:1 | 2026-11-18 |
| shareholders | Public common equity is listed on the NYSE; current beneficial holders and percentages are not established in the supplied filing text | READY | 10-K_2025-12-31_cxt.htm.jsonl | pages:7,115 | 2026-11-18 |
| transaction_summary | Antares Vision was acquired in phases and funded in part with Term Loan B and revolving borrowings | READY | 10-Q_2026-09-30_cxt.htm.jsonl | pages:8-13,21 | 2026-11-18 |
| business_description | Payment-verification equipment, software and services; banknote, physical-product, brand and digital authentication; inspection and track-and-trace technology | READY | 10-K_2025-12-31_cxt.htm.jsonl | pages:7-8 | 2026-11-18 |

## Calculations

| ID | Description | Inputs and formula | Result | Source trace | Limitation |
|---|---|---|---|---|---|
| C1 | FY2025 segment shares of total sales | CPI: USD 846.6 million ÷ USD 1,656.7 million; SAT: USD 810.1 million ÷ USD 1,656.7 million | CPI 51.1%; SAT 48.9% | 10-K_2025-12-31_cxt.htm.jsonl, page 89 | Rounded to one decimal |
| C2 | FY2025 product-line shares within segments | CPI products USD 709.4 million ÷ CPI USD 846.6 million; CPI services USD 137.2 million ÷ CPI USD 846.6 million; SAT banknotes/security USD 592.4 million ÷ SAT USD 810.1 million; SAT authentication USD 217.7 million ÷ SAT USD 810.1 million | CPI products 83.8%; CPI services 16.2%; SAT banknotes/security 73.1%; SAT authentication 26.9% | 10-K_2025-12-31_cxt.htm.jsonl, page 90 | Rounded to one decimal |
| C3 | FY2025 sales by destination | North America USD 829.3 million; Western Europe USD 190.2 million; Rest of the World USD 637.2 million; each divided by total USD 1,656.7 million | North America 50.1%; Western Europe 11.5%; Rest of the World 38.5% | 10-K_2025-12-31_cxt.htm.jsonl, page 89 | Rounded shares sum to 100.1% |
| C4 | FY2025 reported-sales reconciliation | CPI USD 846.6 million + SAT USD 810.1 million | USD 1,656.7 million | 10-K_2025-12-31_cxt.htm.jsonl, page 89 | None |
| C5 | Antares acquisition translated phase amounts versus reported total | First phase USD 137.8 million + second phase USD 281.9 million; compare with reported total consideration USD 416.9 million | Translated phase amounts total USD 419.7 million, USD 2.8 million above the separately reported total | 10-Q_2026-09-30_cxt.htm.jsonl, page 8 | Approximate currency translations and transaction accounting are retained as stated; no adjustment inferred |
| C6 | FY2025 geographic-sales reconciliation | North America USD 829.3 million + Western Europe USD 190.2 million + Rest of the World USD 637.2 million | USD 1,656.7 million | 10-K_2025-12-31_cxt.htm.jsonl, page 89 | Revenue is based on sale destination |
| C7 | FY2025 significant-customer shares | Customer sales USD 210.7 million ÷ SAT sales USD 810.1 million; customer sales USD 210.7 million ÷ company sales USD 1,656.7 million | 26.0% of SAT sales; 12.7% of total sales | 10-K_2025-12-31_cxt.htm.jsonl, pages 89, 91 | Customer is not named; shares rounded to one decimal |

## Gaps

| Gap | Missing evidence | What it limits | Affected analysis |
|---|---|---|---|
| Beneficial ownership and voting rights | Holder names, ownership percentages, shareholder agreements and current proxy details | Ownership concentration and holder influence cannot be established | Ownership register, control map and governance risk |
| Acquisition economics | Purchase multiples, acquired EBITDA, pro forma leverage and transaction-level cash generation | Return on invested capital and acquisition debt capacity cannot be tested | Transaction summary and behavior assessment |
| Current legal capacity | Executed credit agreement and amendment texts, including baskets and guarantees | Restrictions and capacity for distributions, investments, liens and debt cannot be determined | Capital allocation and legal-capacity assessment |
| DLR control integration | Subsequent control assessment after FY2025 exclusion | Assurance over DLR financial reporting after acquisition remains limited | Governance register |
| Segment and customer disclosure | Historical recast under the new DTT structure, remaining customer distribution and recurring-revenue share | Trend comparability and revenue visibility remain incomplete | Revenue mix and operating model |
| Joint-venture rights | Full Ghana tax-stamp venture agreement, distribution and reserved-matter rights | Cash access and rights beyond disclosed board control are not established | Ownership register and structural analysis |

No external sources were used. Source-based conclusions are limited to the pinned filings, earnings releases and supplied Source readiness assessment.

## Next module
The orchestrator selects the next module.

