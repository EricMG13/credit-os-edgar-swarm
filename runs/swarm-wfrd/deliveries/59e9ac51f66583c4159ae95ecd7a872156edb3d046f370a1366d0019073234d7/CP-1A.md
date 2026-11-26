---
module_id: CP-1A
issuer_id: wfrd
analysis_date: 2026-11-05
module_status: Complete with limitations
---

## Request

Weatherford International plc (issuer id wfrd), as of 2026-11-05, credit snapshot pathway. Scope: business, transaction, ownership, operating model and governance facts from the supplied filings and third-quarter release, with no legal documents or proxy statement available.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_wfrd-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 (audited by KPMG LLP) | 2026-02-04 (signature and audit report date) | dac00725a2c3d644200d2314099fff47d7f3eb762778ea3920935ae50ab28ce2 | Business description, segments, customers, risk factors, debt and credit agreement history, 2025 transactions, audit report, Part III references |
| 10-Q_2026-03-31_wfrd-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-22 (signature date) | 9947bc5d7e7ed46ec27eb5be20182fefc783d1bcf9e98ead61e47e75e87e1802 | First announcement of the redomestication proposal |
| 10-Q_2026-06-30_wfrd-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-22 (signature date) | 0659d6081747e0dbacebc77689bd519f07b2164e0adebad5354150ed075c3f19 | NCS merger agreement, revised redomestication proposal, entity name change |
| 10-Q_2026-09-30_wfrd-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-21 (signature date) | 678145577a1f518a8936739eae48408772c69c0e9c66ea7073ec677a8f4ec5f5 | Latest business, ownership, acquisition, redomestication, debt-obligor and subsequent-event facts |
| EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-20 | f95c1562ed4f41199ffe8f8d250788ec78ae6a54ea4c8df350ecd996b8e7fb5e | Management language on outlook, redomestication savings, redemption notice and ratings |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 855ac2f1f1d176f5a027e7f65aeb849da9fdfdffbb2289f0d9dcf592344eca1f | Source inventory and the gaps already recorded (no legal documents, no proxy statement, no market data) |

## Findings

### Bottom line

Weatherford is a listed, diversified oilfield services company with no sponsor or controlling shareholder named in the supplied sources, so creditors face cyclical and structural risk rather than owner-extraction risk.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 99; Source readiness (CP-0)

The changes that matter are the USD 128 million NCS Multistage acquisition completed on September 1, 2026, the planned move of the parent from Ireland to Delaware in the fourth quarter, and the redemption of the 2030 notes. Shareholder returns of USD 113 million in nine months were covered by free cash flow. Governance risk is assessed as low on documented behaviour only, because no indenture, credit agreement or proxy statement was supplied to test legal capacity or control rights.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; calculation C21; calculation C20; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4

### Key findings

No owner is shown to control the company, so owner-driven leverage or extraction risk is not evidenced. The company is listed on Nasdaq, and the only holder the filings name is the largest shareholder of the acquired business, which received 0.49% of the shares outstanding in the NCS transaction. The proxy statement that would list major holders, director independence and related-party dealings was not supplied, so control rights and related-party leakage are not established.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 38; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 99; calculation C19

The business is diversified by product line but concentrated by region. Over nine months of 2026, Drilling and Evaluation produced 27.74% of revenue, Well Construction and Completions 39.00%, Production and Intervention 27.24% and non-core integrated services 6.03%, and services were 61.35% of the total. The Middle East, North Africa and Asia region supplied 40.26% of revenue after falling by USD 191 million from the prior nine months, which the company attributes to the Iran conflict; the United States at 14% and Russia at 9% are the only other countries near a tenth of revenue.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 20; calculation C1; calculation C2; calculation C3; calculation C4; calculation C9; calculation C11; calculation C16

Customer concentration is moderate, but the largest Mexican customer matters for cash collection. No customer exceeded 10% of 2025 revenue, though the largest customer, in Mexico, was 10% of 2024 revenue and has a history of late payment; it was 14% of net receivables at September 30, 2026, down from 24% at the end of 2025. The company says those balances are not in dispute, so the exposure is collection timing rather than loss, but this customer has at times used third-party financial institutions to pay the company's receivables.
Basis: 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 53; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 54; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32

The NCS acquisition is small against the balance sheet, at 2.40% of total assets, and was paid mainly in shares. Total consideration of USD 128 million was settled with shares valued at USD 101 million, USD 13 million of cash net of cash acquired and USD 7 million of assumed equity awards, and it brought tangible assets of USD 150 million and USD 34 million of noncontrolling interests. The sources do not give NCS revenue or EBITDA and do not explain a USD 7 million gap between the stated components and the total, so the effect on earnings and leverage is not established.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; calculation C24; calculation C25; calculation C26; calculation C27

The move from Ireland to Delaware is the main structural change, and its creditor effect is not yet documented. Shareholders approved it on September 3, 2026 after an earlier Texas proposal failed to obtain the required approval despite more than 60% support; it still needs Irish High Court sanction and is expected in the fourth quarter. The company expects USD 20 million to USD 30 million of annual cash savings from 2027 and spent USD 30 million on it in nine months, but a planned intellectual property transition is still being evaluated for accounting and tax implications, and the sources do not say which group entities would hold the intellectual property afterwards.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 14; 10-Q_2026-03-31_wfrd-20260331.htm.jsonl, page 12; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 6; calculation C28

Changes to the note obligors look neutral on their face but cannot be confirmed without the indentures. Since 2022 the company has added subsidiaries as co-issuers of the notes three times and released their guarantees, most recently on September 25, 2026 for a Texas subsidiary on the 2033 notes. A co-issuer is directly liable, so the change need not weaken claims, but guarantor coverage, ranking and any release conditions cannot be checked.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 33; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84

Shareholder returns are material but covered by cash flow. Dividends of USD 59 million and buybacks of USD 54 million over nine months total USD 113 million, which is 31.22% of free cash flow of USD 362 million after capital expenditures; the quarterly dividend per share is 10.00% above 2025, and USD 246 million of the buyback authorisation remains. Returns are discretionary, and the notes and credit agreement restrict distributions in terms the sources do not give.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 38; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 4; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 26; calculation C21; calculation C20; calculation C22; calculation C23

Reporting quality supports monitoring, with two disclosure limits. The annual statements carry an unqualified KPMG opinion, disclosure controls were assessed effective at September 30, 2026 while NCS is integrated, and the third-quarter earnings release came a day before the quarterly report. Legal contingencies are described without amounts, and the 2025 comparatives were reclassified without stating the changes.
Basis: 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 64; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 66; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 37; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 1

### Contrary evidence and what would change the view

The strongest evidence against a low governance reading is that capital returns continue while earnings are lower, and that the redomestication's intellectual property transition could change where value sits in the group; the note obligors have also changed three times since 2022. A debt-funded distribution or acquisition, documentation that moves intellectual property or assets outside the guarantor group, or a distribution restriction that is already close to binding would raise the risk level. Indentures and a proxy statement showing no related-party leakage and an unchanged guarantor structure would confirm the low reading.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 12

### Limitations

- No proxy statement was supplied, so the ownership register and board independence cannot be checked; the low governance reading rests on documented behaviour and would change if a controlling or activist holder or related-party payments appeared.
- No indenture or credit agreement text was supplied, so legal capacity for distributions, liens, asset transfers and guarantor releases is untested; this keeps the governance reading to willingness evidence and could change it.
- The intellectual property transition inside the redomestication is described only as under evaluation, so the conclusion that the structure change is neutral for creditors depends on documents that are not in the sources.
- NCS revenue, EBITDA and pro forma effects are not disclosed, so the conclusion that the acquisition is small rests on its price against the group and not on its earnings contribution.
- Backlog and contract duration are not disclosed, so the diversification conclusion describes revenue mix and not revenue durability.

### Company and operating model

| Item | What the sources state | Credit relevance | Source |
| --- | --- | --- | --- |
| Business | Global energy services: equipment and services for drilling, evaluation, well construction, completion, production, intervention and responsible abandonment, about 75 countries and 320 operating locations at 2026-09-30 | Broad well-lifecycle exposure gives diversification across spending types | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 17 |
| Segments | Drilling and Evaluation, Well Construction and Completions, Production and Intervention, with non-core All Other | Segment adjusted EBITDA is the profit measure creditors see; All Other is volatile project work | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 5; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 7 |
| Revenue model | Services 2,086 and products 1,314 in 9M 2026 (61.35% services); equipment rental 60 | Service share ties revenue to customer activity rather than to product sales | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7 |
| Customers | National oil companies, international and independent oil and gas companies and new energy companies; no customer above 10% of 2025 revenue; largest Mexican customer 10% of 2024 revenue | Spending decisions sit with a few large operators and state-owned companies | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 8; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 81 |
| Geography | Middle East, North Africa and Asia 40.26% of 9M 2026 revenue; Europe, Sub-Sahara Africa and Russia 21.32%; North America 19.44%; Latin America 18.97%; Russia 9% of revenue | Conflict-exposed regions drive earnings and cash trapped abroad | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 19 |
| Competition | Principal competitors SLB, Halliburton, Baker Hughes and Expro Group Holdings | Larger rivals set pricing and technology pressure | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 7 |
| Cost and capital intensity | Cost of products and services 67% and 69% of revenue in Q3 and 9M 2026; capital spend guided to 3% to 5% of revenue | Moderate fixed cost and capital needs support cash conversion in a downturn | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31 |
| Seasonality | Lower demand in Canada in spring, the Southern hemisphere in summer and the North Sea and Russia in winter; higher fourth-quarter customer budget use | Fourth-quarter strength supports year-end cash flow | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 8 |

### Company profile

| Field | Value | Source |
| --- | --- | --- |
| Issuer | Weatherford International plc | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1 |
| Listing and ticker | Nasdaq Global Select Market, WFRD | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1 |
| Country of incorporation | Ireland (Irish public limited company); redomestication to Delaware expected in Q4 2026 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 |
| Headquarters | Houston, Texas | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1 |
| Sector | Oilfield services: drilling, evaluation, completions, production and intervention | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 17 |
| Employees | About 16,700 at 2025-12-31; about 9% covered by union contracts | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 12 |
| Operating footprint | About 75 countries; 320 operating locations at 2026-09-30 (305 at 2025-12-31) | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 17; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 3 |
| Shares outstanding | 72,470,284 ordinary shares at 2026-10-15 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1 |
| Fiscal year end and auditor | 31 December; KPMG LLP, auditor since 2013 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 66 |
| Ratings (issuer statement) | Moody's Ba2 positive outlook; S&P BB positive outlook; Fitch BB positive outlook | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31 |
| Strategy language (management) | Five strategic priorities and a capital allocation framework of balance sheet strength, technology investment, disciplined acquisitions and shareholder returns [Management Language] | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 4 |

### Transaction summary and new debt issues

The NCS Multistage acquisition was agreed on May 31, 2026 and completed on September 1, 2026 for total consideration of USD 128 million, paid in shares, cash and assumed equity awards, and NCS is now a wholly owned subsidiary that adds completions technology and unconventional-market exposure. No new debt was issued in 2026 through the latest filing; the last issue was the USD 1,200 million of 2033 notes on October 6, 2025, which refinanced most of the 2030 notes, and on October 20, 2026 the company gave notice to redeem the remaining USD 236 million of the 2030 notes on October 30, 2026 from cash. The parent's redomestication from Ireland to Delaware, approved by shareholders on September 3, 2026, is expected in the fourth quarter and is not a financing transaction.
Basis: 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 14; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5; calculation C24; calculation C26

### Events: Issuer history

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2021-10-27 | day | 2026-10-21 | 8.625% senior notes due 2030 issued, USD 1.6 billion principal | Historical — issued by Weatherford International Ltd (Bermuda) | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 | Created the 2030 maturity that is now being retired |
| 2022-12-01 | day | 2026-10-21 | Weatherford Delaware added as co-issuer of the 2030 notes and its guarantee released | Historical — indenture supplemented | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 | First change of note obligors; guarantor coverage not documented |
| 2024-07-23 | day | 2026-10-21 | Share repurchase programme announced, up to USD 500 million through June 2027 | Historical — announced | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 38 | Discretionary cash outflow that competes with debt reduction |
| 2025-04 | month | 2026-02-04 | Pressure pumping business in Argentina sold, gain of USD 70 million | Historical — completed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 81 | Disposal proceeds of USD 97 million in Q2 2025 helped cash flow; also lowered Production and Intervention revenue |
| 2025-09-18 | day | 2026-02-04 | Credit Agreement amended: commitment raised from USD 720 million to USD 1,000 million, maturity extended to 2030-09-18 | Historical — amended | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 85 | Larger secured facility with letters of credit; springing maturity tied to the 2030 notes |
| 2025-10-06 | day | 2026-02-04 | 6.75% senior notes due 2033 issued, USD 1.2 billion principal, to fund a tender offer and redemption of the 2030 notes | Historical — issued | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84 | Cut the coupon and pushed maturity to 2033 |
| 2025-10-24 | day | 2026-02-04 | Weatherford Delaware added as co-issuer of the 2033 notes and its guarantee released | Historical — indenture supplemented | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84 | Second change of note obligors |
| 2026-01-26 | day | 2026-02-04 | Dividend of USD 0.275 per share declared, payable 2026-03-05 | Historical — declared, a subsequent event in the annual report | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 97 | Dividend rate raised from USD 0.25 per share |
| 2026-02 | month | 2026-10-21 | Iran conflict began and disrupted Middle East activity and supply chains | Historical — as the company describes it | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 19 | Main cause of lower Middle East revenue and the earnings decline |
| 2026-03-19 | day | 2026-07-22 | Weatherford International, LLC renamed Weatherford US Holding, LLC | Historical — name change effective | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 9 | Identifies the co-issuer and borrower in debt documents |
| 2026-04-02 | day | 2026-04-22 | Proposal announced to redomesticate the parent from Ireland to Texas | Historical — announced, later replaced | 10-Q_2026-03-31_wfrd-20260331.htm.jsonl, page 12 | Start of the restructuring that led to the Delaware plan |
| 2026-05-31 | day | 2026-07-22 | Definitive merger agreement signed to acquire NCS Multistage Holdings | Historical — signed | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 14 | First acquisition in the period; stock-heavy consideration |
| 2026-09-01 | day | 2026-10-21 | NCS acquisition completed, total consideration USD 128 million | Historical — completed | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 | Adds assets and noncontrolling interests; earnings effect not disclosed |
| 2026-09-03 | day | 2026-10-21 | Shareholders approved the redomestication to Delaware | Historical — approved, subject to Irish High Court sanction | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 | Removes the shareholder hurdle; court step and IP transition remain |
| 2026-09-25 | day | 2026-10-21 | Weatherford International Holding LLC (Texas) added as co-issuer of the 2033 notes and its guarantee released | Historical — supplemental indenture | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 | Third change of note obligors; filed as an exhibit not supplied |
| 2026-10-15 | day | 2026-10-21 | Dividend of USD 0.275 per share declared, payable 2026-12-03 to holders of record on 2026-11-06 | Historical — declared, a subsequent event | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 | Cash outflow after the balance sheet date |
| 2026-10-20 | day | 2026-10-20 | Notice issued to redeem all USD 236 million of the 2030 notes | Historical — announced, a subsequent event | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5 | Removes the 2030 maturity and about USD 20 million of annual cash interest |
| 2026-10-30 | day | 2026-10-21 | Redemption of the 2030 notes at 100% of principal, funded from cash | Scheduled — expected to occur on this date | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 | Completion not confirmed by any source |
| 2026-12-03 | day | 2026-10-21 | Dividend payment date | Scheduled — payable | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 | Cash outflow after the 2026-11-05 cutoff |
| 2026-Q4 | quarter | 2026-10-21 | Redomestication to Delaware expected to complete | Scheduled — expected during the fourth quarter of 2026 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 | Court sanction and implementation steps could still slip |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 40 |
| Calculated | 12 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 8 |
| Fields present | 28 |
| Fields total | 32 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 4 |

### Map: ownership and control

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| Weatherford International plc | Consolidates wholly owned subsidiaries and JVs | Ownership | Weatherford subsidiaries | Consolidation policy; percentages not stated |
| Weatherford International plc | Guarantor of the 2030 and 2033 notes | Guarantee | Weatherford International Ltd | Notes issued by the Bermuda company and guaranteed |
| Weatherford US Holding, LLC | Co-issuer of the 2030 notes since 2022 | Other stated | Weatherford International Ltd | Indenture amended 2022-12-01; guarantee released |
| Weatherford US Holding, LLC | Co-issuer of the 2033 notes since 2025 | Other stated | Weatherford International Ltd | Indenture amended 2025-10-24; guarantee released |
| Weatherford International Holding LLC | Co-issuer of the 2033 notes since 2026-09-25 | Other stated | Weatherford International Ltd | Supplemental indenture; guarantee released |
| Weatherford International plc | Parent of the Credit Agreement borrowers and guarantor | Guarantee | Credit Agreement borrowers | Borrowers named; company and certain subsidiaries guarantee |
| Credit Agreement lenders | Secured on substantially all personal property | Legal control | Company and guarantor subsidiaries | Credit Agreement note; real property not stated |
| Weatherford International plc | Acquired NCS Multistage on 2026-09-01 | Ownership | NCS Multistage Holdings, Inc. | Now a wholly owned subsidiary |
| Advent-NCS Acquisition LP | Received 357,159 shares in the NCS transaction | Ownership | Weatherford International plc | 0.49% of shares at 2026-10-15; holding after not stated |

### Map: operating model to credit

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| Iran conflict disruption | Cut Middle East activity and revenue | Documentary Fact | Revenue and EBITDA | MENA revenue down 191 over nine months |
| Service-heavy revenue mix | Ties revenue to customer activity levels | Analyst Interpretation | Earnings cyclicality | Services 61.35% of 9M 2026 revenue |
| Largest Mexican customer | Pays late; balances not in dispute | Management Language | Cash conversion | 14% of net receivables; history of late payment |
| Capital spend of 3% to 5% of revenue | Limits cash needs through the cycle | Management Language | Free cash flow | Company guidance; 141 spent in nine months |
| Dividends and buybacks | Use 113 of cash in nine months | Documentary Fact | Cash balance | 31.22% of free cash flow of 362 |
| Redomestication | Expected to save 20 to 30 a year from 2027 | Management Language | Free cash flow | Company states it; costs 30 so far |
| Russia operations | Hold cash and assets under sanctions risk | Documentary Fact | Group liquidity | 128 of cash in Russia at 2026-09-30 |
| Contract backlog | Would show revenue visibility | Insufficient Information | Revenue durability | Backlog and contract length not disclosed |

### transaction_summary - Transaction summary

| Transaction | Status | Credit relevance | Source |
| --- | --- | --- | --- |
| Acquisition of NCS Multistage Holdings, Inc. | Agreed 2026-05-31; completed 2026-09-01; total consideration USD 128 million (shares USD 101 million, cash net of cash acquired USD 13 million, assumed equity awards USD 7 million) | Small and mostly paid in shares, so little leverage effect; earnings contribution not disclosed | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 14; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 |
| Redomestication of the parent from Ireland to Delaware | Shareholders approved 2026-09-03; Irish High Court sanction pending; completion expected in Q4 2026; costs USD 30 million in 9M 2026; expected annual cash savings USD 20 million to USD 30 million from 2027 | Changes the parent's jurisdiction and may move intellectual property; creditor effect not documented | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 6 |
| Redemption of the remaining 8.625% senior notes due 2030 | Notice issued 2026-10-20 for USD 236 million at 100% of principal; redemption expected 2026-10-30 from cash on hand | Retires the nearest bond maturity and cuts annual cash interest by about USD 20 million | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5 |
| Issue of 6.75% senior notes due 2033, USD 1,200 million, with tender offer and redemption of 2030 notes | Completed 2025-10-06; USD 61 million of 2030 notes repurchased and USD 1.3 billion more acquired through a tender offer and redemption, with USD 41 million of accrued interest and a USD 30 million premium paid | Lowered the coupon and extended the maturity; the premium and fees were a cash cost | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84 |
| Amendment of the Credit Agreement | Completed 2025-09-18; commitment raised from USD 720 million to USD 1,000 million; maturity extended to 2030-09-18, or earlier while more than USD 200 million of 2030 notes remain | Larger secured facility used mainly for letters of credit; maturity tied to the 2030 notes until redemption | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 85 |
| Co-issuer additions on the notes | 2022-12-01 and 2025-10-24 for Weatherford Delaware, 2026-09-25 for Weatherford International Holding LLC; guarantees of those entities released | Changes which entities are directly liable; documents not supplied | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84 |
| Sale of the pressure pumping business in Argentina | Completed April 2025; proceeds USD 104 million in total; gain USD 70 million | One-off cash and earnings in 2025; shrank the Production and Intervention segment | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 81 |

### company_description - Company description

| Issuer | Business description | Country | Sector |
| --- | --- | --- | --- |
| Weatherford International plc | Global energy services company providing equipment and services for drilling, evaluation, well construction, completion, production, intervention and responsible abandonment of oil and gas wells, plus new energy platforms; three reportable segments | Ireland (Irish public limited company), moving to Delaware in Q4 2026 | Energy services: oilfield services and equipment |

### revenue_business_mix - Revenue and business mix

| Business line | Revenue mix | Period | Status | Limitation |
| --- | --- | --- | --- | --- |
| Drilling and Evaluation | 943 (27.74%) | 9M 2026 | Documentary Fact and Calculated | Segment revenue as reported; share calculated |
| Well Construction and Completions | 1,326 (39.00%) | 9M 2026 | Documentary Fact and Calculated | Includes NCS only from 2026-09-01 |
| Production and Intervention | 926 (27.24%) | 9M 2026 | Documentary Fact and Calculated | Argentina pressure pumping sold in 2025 |
| All Other (integrated services and projects) | 205 (6.03%) | 9M 2026 | Documentary Fact and Calculated | Not a reportable segment; pass-through and project work |
| Drilling and Evaluation | 1,371 (27.88%) | FY2025 | Documentary Fact and Calculated | Segment revenue as reported; share calculated |
| Well Construction and Completions | 1,875 (38.12%) | FY2025 | Documentary Fact and Calculated | Share calculated |
| Production and Intervention | 1,340 (27.25%) | FY2025 | Documentary Fact and Calculated | Share calculated |
| All Other (integrated services and projects) | 332 (6.75%) | FY2025 | Documentary Fact and Calculated | Share calculated |
| Services | 2,086 (61.35%) | 9M 2026 | Documentary Fact and Calculated | Products 1,314; services 2,980 (60.59%) in FY2025 |
| Geography: Middle East, North Africa and Asia | 1,369 (40.26%) | 9M 2026 | Documentary Fact and Calculated | 1,560 (42.99%) in 9M 2025; down 191 |
| Geography: Europe, Sub-Sahara Africa and Russia | 725 (21.32%) | 9M 2026 | Documentary Fact and Calculated | Russia is 9% of group revenue |
| Geography: North America | 661 (19.44%) | 9M 2026 | Documentary Fact and Calculated | 734 in 9M 2025; down 73 |
| Geography: Latin America | 645 (18.97%) | 9M 2026 | Documentary Fact and Calculated | Includes the largest Mexican customer |
| Largest customer (Mexico) | 10% of revenue in 2024 and 2023; no customer above 10% in 2025 | FY2024 and FY2025 | Documentary Fact | Customer not named; 2026 share not stated |

### ownership_register - Ownership register

| Owner / class | Control | Economic interest | Credit relevance | Source |
| --- | --- | --- | --- | --- |
| Public shareholders (ordinary shares, Nasdaq: WFRD) | No controlling holder named in the supplied sources; board and veto rights are in the proxy statement, which was not supplied | 72,470,284 ordinary shares at 2026-10-15 | A listed company with no named controller gives no sign of sponsor extraction; control rights are not established | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 99 |
| Advent-NCS Acquisition Limited Partnership (largest NCS shareholder) | None stated | 357,159 shares issued 2026-09-01 (0.49% of shares at 2026-10-15); resale registered on Form S-3 | Minor holder; a registered resale could add share supply but does not touch creditor claims | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 38 |
| Noncontrolling interest holders in subsidiaries and joint ventures | Not stated; controlled joint ventures are consolidated | 36 of noncontrolling interests at 2026-09-30 including 34 from NCS; distributions of 9 in 9M 2026 | Distributions to minorities are a small cash leakage | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 |
| Directors, officers and employees (equity plan) | Not stated in the supplied sources | 2.4 million shares available for grants at 2025-12-31; share-based compensation 38 in 9M 2026 | Incentive pay rose with performance awards; alignment with creditors not assessable | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 89; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 28 |

### operating_model - Operating model

| Operating driver | Measure | Period | Status | Credit relevance |
| --- | --- | --- | --- | --- |
| Revenue | 3,400, down 6.31% from 3,629 | 9M 2026 | Documentary Fact and Calculated | Lower Middle East and North America activity reduces earnings capacity |
| Segment profitability | Adjusted EBITDA margins: Drilling and Evaluation 23.33%, Well Construction and Completions 23.91%, Production and Intervention 21.27% | 9M 2026 | Calculated | Well Construction and Completions fell from 27.18%; others rose |
| Cost structure | Cost of products and services 69% of revenue; selling, general and administrative 522; research and development 64 | 9M 2026 | Documentary Fact | Mostly variable cost base limits operating leverage in a downturn |
| Capital intensity | Capital expenditures 141 (4.15% of revenue); company guides to 3% to 5% over 12 to 18 months | 9M 2026 | Documentary Fact and Management Language | Moderate capital needs support free cash flow |
| Cash conversion | Operating cash flow 503 including 186 of receivable collections; free cash flow 362 | 9M 2026 | Documentary Fact and Calculated | A large part of the improvement comes from collections that will not repeat |
| Customer payment behaviour | Largest Mexican customer 14% of net receivables at 2026-09-30, 24% at 2025-12-31; Mexico 19% of net receivables | 2026-09-30 | Documentary Fact | Late payment history; third-party institutions used to collect |
| Receivable sales | Cash proceeds from factoring 16 against 231 | 9M 2026 against 9M 2025 | Documentary Fact | Lower reliance on selling receivables |
| Russia exposure | 9% of revenue; 128 of cash, 137 of other current assets and 69 of liabilities in Russia | 9M 2026 and 2026-09-30 | Documentary Fact | Cash and assets exposed to sanctions and nationalisation risk |
| Activity backdrop | Average worldwide rig count 1,831 against 1,825; Brent 93.27 against 70.93 dollars per barrel | 9M 2026 against 9M 2025 | Documentary Fact | Higher oil prices have not lifted Middle East spending because of the conflict |
| Restructuring | Restructuring charges 28 against 51; headcount reduction cited for lower costs | 9M 2026 against 9M 2025 | Documentary Fact | Cost actions support margins; severance cash outflow continues |

### events_timeline - Events timeline

| Date / window | Event | Credit relevance | Status | Source |
| --- | --- | --- | --- | --- |
| 2021-10-27 | 8.625% senior notes due 2030 issued, USD 1.6 billion principal | Created the 2030 maturity that is now being retired | Historical — issued by Weatherford International Ltd (Bermuda) | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 |
| 2022-12-01 | Weatherford Delaware added as co-issuer of the 2030 notes and its guarantee released | First change of note obligors; guarantor coverage not documented | Historical — indenture supplemented | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 |
| 2024-07-23 | Share repurchase programme announced, up to USD 500 million through June 2027 | Discretionary cash outflow that competes with debt reduction | Historical — announced | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 38 |
| 2025-04 | Pressure pumping business in Argentina sold, gain of USD 70 million | Disposal proceeds of USD 97 million in Q2 2025 helped cash flow; also lowered Production and Intervention revenue | Historical — completed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 81 |
| 2025-09-18 | Credit Agreement amended: commitment raised from USD 720 million to USD 1,000 million, maturity extended to 2030-09-18 | Larger secured facility with letters of credit; springing maturity tied to the 2030 notes | Historical — amended | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 85 |
| 2025-10-06 | 6.75% senior notes due 2033 issued, USD 1.2 billion principal, to fund a tender offer and redemption of the 2030 notes | Cut the coupon and pushed maturity to 2033 | Historical — issued | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84 |
| 2025-10-24 | Weatherford Delaware added as co-issuer of the 2033 notes and its guarantee released | Second change of note obligors | Historical — indenture supplemented | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84 |
| 2026-01-26 | Dividend of USD 0.275 per share declared, payable 2026-03-05 | Dividend rate raised from USD 0.25 per share | Historical — declared, a subsequent event in the annual report | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 97 |
| 2026-02 | Iran conflict began and disrupted Middle East activity and supply chains | Main cause of lower Middle East revenue and the earnings decline | Historical — as the company describes it | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 19 |
| 2026-03-19 | Weatherford International, LLC renamed Weatherford US Holding, LLC | Identifies the co-issuer and borrower in debt documents | Historical — name change effective | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 9 |
| 2026-04-02 | Proposal announced to redomesticate the parent from Ireland to Texas | Start of the restructuring that led to the Delaware plan | Historical — announced, later replaced | 10-Q_2026-03-31_wfrd-20260331.htm.jsonl, page 12 |
| 2026-05-31 | Definitive merger agreement signed to acquire NCS Multistage Holdings | First acquisition in the period; stock-heavy consideration | Historical — signed | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 14 |
| 2026-09-01 | NCS acquisition completed, total consideration USD 128 million | Adds assets and noncontrolling interests; earnings effect not disclosed | Historical — completed | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 |
| 2026-09-03 | Shareholders approved the redomestication to Delaware | Removes the shareholder hurdle; court step and IP transition remain | Historical — approved, subject to Irish High Court sanction | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 |
| 2026-09-25 | Weatherford International Holding LLC (Texas) added as co-issuer of the 2033 notes and its guarantee released | Third change of note obligors; filed as an exhibit not supplied | Historical — supplemental indenture | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 |
| 2026-10-15 | Dividend of USD 0.275 per share declared, payable 2026-12-03 to holders of record on 2026-11-06 | Cash outflow after the balance sheet date | Historical — declared, a subsequent event | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 |
| 2026-10-20 | Notice issued to redeem all USD 236 million of the 2030 notes | Removes the 2030 maturity and about USD 20 million of annual cash interest | Historical — announced, a subsequent event | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5 |
| 2026-10-30 | Redemption of the 2030 notes at 100% of principal, funded from cash | Completion not confirmed by any source | Scheduled — expected to occur on this date | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 |
| 2026-12-03 | Dividend payment date | Cash outflow after the 2026-11-05 cutoff | Scheduled — payable | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 |
| 2026-Q4 | Redomestication to Delaware expected to complete | Court sanction and implementation steps could still slip | Scheduled — expected during the fourth quarter of 2026 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 |

### gaps_ledger - Gaps ledger

| Gap | Affected analysis | Severity | Action | Status |
| --- | --- | --- | --- | --- |
| Proxy statement absent: major holders, board independence, related-party dealings, fees | Ownership register and governance register | Medium | Obtain the 2026 proxy statement | Open |
| Indentures and credit agreement absent: distribution limits, guarantor lists, release conditions | Legal-capacity link of every behaviour flag | Medium | Obtain the documents, including the 2026-09-25 supplemental indenture | Open |
| Intellectual property transition inside the redomestication not described | Structure change assessment | Medium | Read the redomestication proxy materials and Form S-4 when supplied | Open |
| NCS revenue, EBITDA and pro forma effects not stated; USD 7 million of consideration unexplained | Acquisition assessment | Low | Read the Form S-4 and the next quarterly report | Open |
| Backlog and contract duration not disclosed | Revenue durability | Low | Ask the company or read investor presentations | Open |
| Date of the failed Texas redomestication vote not stated | Timeline | Low | Read the current report on that vote | Open |
| Compliance certificates and covenant calculations absent | Covenant monitoring | Medium | Obtain from the company or lenders | Open |
| Completion of the 2030 notes redemption not confirmed | Debt timeline | Low | Check the next filing | Open |

### conflict_log - Conflict log

| Conflict | Sources | Materiality | Resolution | Effect on analysis |
| --- | --- | --- | --- | --- |
| NCS consideration: total USD 128 million; components stated are shares USD 101 million, cash net of cash acquired USD 13 million and assumed equity awards USD 7 million, which add to USD 121 million; net assets acquired of tangible assets USD 150 million plus intangibles and goodwill USD 46 million less liabilities USD 34 million less noncontrolling interest USD 34 million give USD 128 million; shares issued are 1,033,696 in the cash flow note and 1.0 million in the equity note | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 | Low: USD 7 million, 5.47% of the total | All figures kept with their roles; the USD 7 million is not explained and is carried as an open gap | Acquisition size is stated as USD 128 million with the gap flagged |
| Redomestication target and timing: Texas with completion in Q3 2026 (April report) against Delaware with completion in Q4 2026 (July and October reports) | 10-Q_2026-03-31_wfrd-20260331.htm.jsonl, page 12; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 14; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 | Medium: the earlier Texas proposal did not obtain the required approval despite more than 60% support | The later Delaware plan and Q4 2026 timing are used | Timing risk remains until High Court sanction |
| Headline net income: the third-quarter release says net income was USD 120 million while the statements show net income of USD 125 million, of which USD 120 million is attributable to Weatherford | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 1; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 12; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | Low: definitional | Net income attributable to Weatherford is the release's headline measure | None |
| Operating locations: about 305 at 2025-12-31 and 320 at 2026-09-30 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 17 | Low: different dates | Both kept with their dates | None |

### T2D.1 - Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation |
| --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl | High | FY2025 with FY2024 comparatives | Weatherford International plc and subsidiaries | Business, segments, customers, risk factors, debt, audit report | Part III governance items are incorporated by reference to a proxy statement not supplied |
| S2 | 10-Q_2026-03-31_wfrd-20260331.htm.jsonl | High | Q1 2026 | Weatherford International plc | First redomestication proposal | Unaudited |
| S3 | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl | High | Q2 and H1 2026 | Weatherford International plc | NCS merger agreement, revised redomestication plan | Unaudited |
| S4 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl | High | Q3 and 9M 2026 | Weatherford International plc | Acquisition, redomestication, obligor changes, subsequent events | Unaudited; exhibits such as the supplemental indenture are not supplied |
| S5 | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl | Medium | Q3 2026 | Weatherford International plc | Management outlook and savings statements | Management language; unaudited |

### T2D.3 - Governance register

| Governance Topic | Source-Supported Fact | Risk Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Board and control rights | Not described in the supplied sources; Part III is incorporated by reference to a proxy statement | Insufficient Information | Control and veto rights decide who can approve debt, distributions and structure changes | Cannot say whether any holder can act against creditors | Insufficient | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 99 | Proxy statement not supplied |
| Shareholder approval of structure changes | An earlier Texas proposal received more than 60% support but not the required approval; the Delaware plan was approved on 2026-09-03 | Neutral | Structure changes need broad shareholder consent, so no single holder can force them | Lowers the chance of a controller-driven restructuring | High | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 14; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 | Required approval threshold not stated |
| Related-party transactions and fees | Not described in the supplied sources | Insufficient Information | Related-party payments would be cash leakage ahead of creditors | Not assessable | Insufficient | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 99 | Proxy statement not supplied |
| Reporting cadence | Quarterly reports with an earnings release one day earlier, each with segment and non-GAAP reconciliations | Supportive | Frequent, reconciled disclosure lets creditors monitor leverage and liquidity | Supports monitoring and lowers information risk | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 39; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 1 | No lender-specific reporting package supplied |
| Audit status and reporting quality | KPMG LLP unqualified opinion on the 2025 statements and on internal control; critical audit matter on impairment triggering events for long-lived assets | Supportive | Independent assurance on the figures creditors rely on; the critical audit matter flags judgement on asset carrying values | Reliable base for leverage measures; impairment is a watch item if earnings keep falling | High | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 64; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 66 | Interim statements are unaudited |
| Internal control | Disclosure controls effective at 2026-09-30; NCS is being integrated into internal control | Neutral | Integration can introduce control gaps | No weakness reported | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 37 | Integration period not complete |
| Covenant reporting and certificates | Covenant levels are stated; compliance figures and certificates are not supplied | Insufficient Information | Creditors cannot see headroom without calculated ratios | Covenant capacity not established | Low | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11 | Credit agreement not supplied |
| Disclosure completeness | Legal contingencies have no amounts; 2025 comparatives were reclassified without stated amounts | Mixed | Unquantified liabilities and comparatives weaken trend analysis | Small uncertainty around liabilities outside debt | Medium | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 12 | Sources contain no litigation reserve figure |
| Shareholder and creditor interests | Dividends of 59 and buybacks of 54 in 9M 2026 against free cash flow of 362 while the 2030 notes are redeemed from cash | Mixed | Distributions compete with debt reduction for cash | Covered by cash flow today; sensitive to an earnings shortfall | Medium | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 | Distribution restrictions not supplied |

### T2D.4 - Sponsor and shareholder behavior flags

| Flag ID | Behavior Type | Documented Action | Behavior Category | Amount / Funding Source | Legal-Capacity Link | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CP-2C-FLAG-001 | Refinancing | 2025 issue of 2033 notes to repurchase and redeem most of the 2030 notes | Supportive | USD 1,200 million new notes plus cash; USD 61 million repurchased and USD 1.3 billion more acquired; USD 30 million premium | Insufficient Information: indentures not supplied | Lower coupon and a later maturity reduce interest cost and refinancing pressure | Supports debt service and refinancing capacity | High | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84 | Premium and fees were a cash cost |
| CP-2C-FLAG-002 | Voluntary paydown | Notice to redeem the remaining 2030 notes | Supportive | USD 236 million from cash on hand | Insufficient Information: indentures not supplied | Retires debt and saves about USD 20 million of annual cash interest | Reduces gross debt and removes the springing facility maturity | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5 | Completion not confirmed |
| CP-2C-FLAG-003 | Distribution | Quarterly dividend of USD 0.275 per share and share repurchases | Neutral | Dividends 59 and buybacks 54 over 9M 2026, from operating cash flow | Insufficient Information: distribution limits not supplied | Cash leaves the group ahead of debt reduction | Affordable at current cash flow; a risk if earnings fall further | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 12 | Authorisation of USD 246 million remains |
| CP-2C-FLAG-004 | Acquisition | NCS Multistage acquired on 2026-09-01 | Neutral | Shares USD 101 million, cash USD 13 million, equity awards USD 7 million | Insufficient Information: baskets not supplied | Share funding avoids new debt; integration adds cost and noncontrolling interests | Small effect on leverage; earnings effect not established | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 | No NCS earnings disclosed |
| CP-2C-FLAG-005 | Disposal | Argentina pressure pumping business sold in April 2025 | Neutral | Proceeds USD 104 million; gain USD 70 million | Not applicable: a disposal of operating assets | One-off cash and a smaller Production and Intervention segment | Neutral to liquidity; reduced earnings base | High | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 81 | Use of proceeds not stated |
| CP-2C-FLAG-006 | Amendment | Added co-issuers and released their guarantees on the notes in 2022, 2025 and 2026 | Mixed | No amount; no funding | Insufficient Information: supplemental indentures not supplied | Changes which entities are directly liable; guarantor coverage may narrow or shift | Cannot confirm creditors' claims are unchanged | Medium | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 33; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84 | Documents not supplied |
| CP-2C-FLAG-007 | Reorganisation | Redomestication to Delaware with an intellectual property transition under evaluation | Insufficient Information | Cost USD 30 million in 9M 2026; expected savings USD 20 million to USD 30 million a year | Insufficient Information: transfer terms not supplied | Could move assets or income between entities, with tax and ranking effects | Creditor effect not established | Medium | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 | No description of which entities hold the intellectual property |
| CP-2C-FLAG-008 | Reporting | Timely quarterly reporting with reconciled non-GAAP measures | Supportive | No amount | Not applicable: disclosure practice | Supports monitoring | Lowers information risk | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 39; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16 | No lender package supplied |

### T2D.5 - Capital allocation risk table

| Capital Allocation Item | Source-Supported Fact | Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Organic investment (capital expenditures) | 141 in 9M 2026 against 175; guided to 3% to 5% of revenue | Supportive | Lower spend preserves cash but could defer growth | Supports free cash flow | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31 | Maintenance and growth split not given |
| Mergers and acquisitions | NCS for total consideration of USD 128 million, mostly shares | Neutral | Share funding limits debt; integration costs follow | Small effect on leverage | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 | Earnings contribution not disclosed |
| Integration and restructuring spend | Restructuring charges 28 and redomestication costs 30 in 9M 2026 | Neutral | Cash costs reduce free cash flow in the near term | Temporary drag on cash conversion | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 21 | Future restructuring not guided |
| Dividends | 59 paid in 9M 2026; quarterly rate USD 0.275 per share, up from USD 0.25 | Mixed | Recurring outflow rising with the rate | Covered by cash flow today | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 12; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 4 | Restrictions not supplied |
| Share repurchases | 54 in 9M 2026; USD 246 million of the USD 500 million authorisation remains | Mixed | Discretionary outflow that can be paused | Flexible, but competes with debt reduction | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 38 | Pace in a downturn untested |
| Debt paydown and refinancing | Repayments of 25 in 9M 2026; notice to redeem USD 236 million of 2030 notes; 2025 refinancing into 2033 notes | Supportive | Cuts gross debt and interest | Strengthens credit | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84 | Completion of the redemption not confirmed |
| Asset sales | Argentina pressure pumping business sold in 2025 for USD 104 million | Neutral | One-off cash, smaller earnings base | Neutral | High | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 81 | Use of proceeds not stated |
| Sponsor equity support | Not applicable: no sponsor identified | Insufficient Information | No sponsor support or cure available to creditors | Creditors rely on the company's own liquidity | Insufficient | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1 | Ownership detail not supplied |
| Liquidity preservation | Cash of 1,161; factoring proceeds fell to 16 from 231 | Supportive | Holding cash and less factoring improves resilience | Supports liquidity | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32 | 164 of cash cannot be immediately repatriated |

### T2D.9 - Risk-level drivers

| Risk-Level Driver | Evidence | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Countervailing Evidence | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| No sponsor or controlling holder identified | Nasdaq listing with no controlling holder named; only a small NCS-related holder named | Without a controller, extraction and dividend-recap risk is lower | Supports a low reading | Medium | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 38 | Proxy statement not supplied, so control rights are untested | Absence of evidence |
| Creditor-aligned debt management | 2025 refinancing to 2033 notes and the planned redemption of the 2030 notes from cash | Lower interest and a later maturity | Supports a low reading | High | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 84; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 | Obligor changes are undocumented | Indentures not supplied |
| Capital returns | 113 of dividends and buybacks in 9M 2026 against free cash flow of 362 | Discretionary outflow competes with debt reduction | Neutral to low-to-medium | High | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4 | Covered by cash flow and the authorisation is flexible | Restrictions not supplied |
| Redomestication and intellectual property transition | Shareholder approval on 2026-09-03; transition under evaluation | Could shift assets or income between entities | Upward pressure on the level if assets leave the guarantor group | Medium | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 | Company states it does not expect an effect on footprint or customer commitments | Terms not disclosed |
| Disclosure quality | Audited statements, effective controls, reconciled non-GAAP measures | Strong monitoring ability | Supports a low reading | High | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 64; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 66; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 37 | Legal contingencies carry no amounts | Sources are public filings only |

Sponsor / Governance Risk Level: Low

### T2D.11 - Gaps ledger

| Gap ID | Missing Data | Why It Matters | Affected Section / Flag | Consequence for Confidence | Required Follow-Up Source |
| --- | --- | --- | --- | --- | --- |
| CP-2C-GAP-001 | Major holders, board independence, director and officer dealings | Control rights decide who can approve debt, distributions and structure changes | Ownership register; governance register | Medium impact: low governance reading is behaviour-only | 2026 proxy statement |
| CP-2C-GAP-002 | Indenture and credit agreement text: distribution limits, guarantor lists, release conditions, baskets | Separates what the company may do from what it has done | Every behaviour flag's legal-capacity link | Medium impact | Indentures, supplemental indentures including 2026-09-25, Credit Agreement |
| CP-2C-GAP-003 | Related-party payments, management and advisory fees, sponsor economics | Leakage ahead of creditors | Governance register | Low impact: no sponsor identified | Proxy statement |
| CP-2C-GAP-004 | Intellectual property transition terms and which entities hold the assets | Asset location drives ranking and recovery | FLAG-007; structure assessment | Medium impact | Form S-4 and redomestication proxy materials |
| CP-2C-GAP-005 | NCS revenue, EBITDA and pro forma financials; the USD 7 million of unexplained consideration | Sizes the acquisition's earnings effect | FLAG-004; transaction summary | Low impact | Form S-4; next quarterly report |
| CP-2C-GAP-006 | Compliance certificates and calculated covenant ratios | Shows headroom against the liquidity, interest cover and leverage tests | Governance register | Medium impact | Company or lenders |
| CP-2C-GAP-007 | Backlog, contract duration and customer-level revenue | Revenue durability and concentration | Operating model | Low impact | Investor presentations; company |
| CP-2C-GAP-008 | Date of the failed Texas redomestication vote and the approval threshold | Completes the shareholder-approval history | Governance register; timeline | Low impact | Current report on the vote |
| CP-2C-GAP-009 | Confirmation that the 2030 notes were redeemed on 2026-10-30 | Debt and cash timeline after the latest filing | Events; FLAG-002 | Low impact | Next filing |

## Calculations

| ID | Calculation | Inputs | Result | Unit |
| --- | --- | --- | --- | --- |
| C1 | Drilling and Evaluation share of revenue, 9M 2026 | 943 divided by 3,400 | 27.74 | % |
| C2 | Well Construction and Completions share of revenue, 9M 2026 | 1,326 divided by 3,400 | 39.00 | % |
| C3 | Production and Intervention share of revenue, 9M 2026 | 926 divided by 3,400 | 27.24 | % |
| C4 | All Other share of revenue, 9M 2026 | 205 divided by 3,400 | 6.03 | % |
| C5 | Drilling and Evaluation share of revenue, FY2025 | 1,371 divided by 4,918 | 27.88 | % |
| C6 | Well Construction and Completions share of revenue, FY2025 | 1,875 divided by 4,918 | 38.13 | % |
| C7 | Production and Intervention share of revenue, FY2025 | 1,340 divided by 4,918 | 27.25 | % |
| C8 | All Other share of revenue, FY2025 | 332 divided by 4,918 | 6.75 | % |
| C9 | Services share of revenue, 9M 2026 | 2,086 divided by 3,400 | 61.35 | % |
| C10 | Services share of revenue, FY2025 | 2,980 divided by 4,918 | 60.59 | % |
| C11 | Middle East, North Africa and Asia share of revenue, 9M 2026 | 1,369 divided by 3,400 | 40.26 | % |
| C12 | North America share of revenue, 9M 2026 | 661 divided by 3,400 | 19.44 | % |
| C13 | Latin America share of revenue, 9M 2026 | 645 divided by 3,400 | 18.97 | % |
| C14 | Europe, Sub-Sahara Africa and Russia share of revenue, 9M 2026 | 725 divided by 3,400 | 21.32 | % |
| C15 | Middle East, North Africa and Asia share of revenue, 9M 2025 | 1,560 divided by 3,629 | 42.99 | % |
| C16 | Decline in Middle East, North Africa and Asia revenue, 9M 2026 against 9M 2025 | 1,560 less 1,369 | 191 | USD millions |
| C17 | Decline in North America revenue, 9M 2026 against 9M 2025 | 734 less 661 | 73 | USD millions |
| C18 | Change in revenue, 9M 2026 against 9M 2025 | 3,400 divided by 3,629 less 1 | -6.31 | % |
| C19 | Shares issued to the largest NCS shareholder as a share of shares outstanding | 357,159 divided by 72,470,284 at 2026-10-15 | 0.49 | % |
| C20 | Free cash flow, 9M 2026 | Operating cash flow 503 less capital expenditures 141 | 362 | USD millions |
| C21 | Shareholder returns, 9M 2026 | Dividends paid 59 plus share repurchases 54 | 113 | USD millions |
| C22 | Shareholder returns as a share of free cash flow, 9M 2026 | 113 divided by 362 | 31.22 | % |
| C23 | Quarterly dividend per share, 2026 against 2025 | 0.275 divided by 0.25 less 1 | 10.00 | % |
| C24 | NCS consideration components stated | Cash net of cash acquired 13 plus shares 101 plus assumed equity awards 7 | 121 | USD millions |
| C25 | NCS consideration less stated components | Total consideration 128 less 121; the difference is not explained in the sources | 7 | USD millions |
| C26 | NCS net assets acquired less noncontrolling interest | Tangible assets 150 plus intangibles and goodwill 46 less liabilities 34 less noncontrolling interest 34 | 128 | USD millions |
| C27 | NCS consideration as a share of total assets at 2026-09-30 | 128 divided by 5,336 | 2.40 | % |
| C28 | Figures used in the text that the filings state and this module does not derive | NCS: 1.0 million shares issued for 101; USD 20 million to USD 30 million annual cash savings from 2027 and USD 30 million of redomestication cost in 9M 2026; USD 246 million of buyback authorisation left; dividends USD 0.275 per share declared 2026-10-15 against USD 0.25 per share in 2025 | Stated | USD |
| C29 | Capital expenditures as a share of revenue, 9M 2026 | 141 divided by 3,400 | 4.15 | % |
| C30 | Segment adjusted EBITDA margin, Well Construction and Completions, 9M 2026 | 317 divided by 1,326 | 23.91 | % |
| C31 | Segment adjusted EBITDA margin, Drilling and Evaluation, 9M 2026 | 220 divided by 943 | 23.33 | % |
| C32 | Segment adjusted EBITDA margin, Production and Intervention, 9M 2026 | 197 divided by 926 | 21.27 | % |

## Gaps

The gaps below name what is missing, the conclusion it limits and the action that would close it.

| Gap | Effect | Severity | Action |
| --- | --- | --- | --- |
| The proxy statement was not supplied | Ownership, board independence and related-party dealings are not established | Medium | Obtain the 2026 proxy statement |
| No indenture or credit agreement text was supplied | Legal capacity for distributions, liens, transfers and guarantor releases is untested | Medium | Obtain the documents and the 2026-09-25 supplemental indenture |
| The intellectual property transition is not described | The creditor effect of the redomestication is not established | Medium | Read the redomestication proxy materials and Form S-4 |
| NCS earnings and the USD 7 million consideration difference are not disclosed | The acquisition's effect on earnings and leverage is not established | Low | Read the Form S-4 and next quarterly report |
| Backlog and contract duration are not disclosed | Revenue durability is not established | Low | Obtain investor presentations |
| Redemption of the 2030 notes is not confirmed as completed | Debt after 2026-10-30 is a plan, not a fact | Low | Check the next filing |

## Next module

The orchestrator selects the next module.
