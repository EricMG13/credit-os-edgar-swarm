---
issuer_id: alks
module_id: CP-1A
analysis_date: 2026-11-05
run_id: alks-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
module_status: Ready with limitations
---

## Request

Business and governance review of Alkermes plc. (issuer id alks), as of 2026-11-05, on the credit snapshot pathway. Scope: the transaction, business and revenue model, ownership, operating model, governance and sponsor behaviour that matter to a creditor.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_alks-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-25 | e4cb39ef2746983905a66c4851e17231fe0e2b3eb3dd9d346653644971686601 | Business, products, collaborations, patents, customers, audit report, dividends and holders |
| 10-Q_2026-03-31_alks-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-05 | 2f002a6c3ee21ba1a12ed08afd7616a7de0cb6e62154bfb1ecb118ba4eafd45f | Read for the acquisition accounting; no figure is taken from it that a later report restates |
| 10-Q_2026-06-30_alks-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-28 | bc67cf08c7dfc8de310d0ecdd1030e2a1391c6b7ce68e53f0b348219bcf79e99 | Read for the collaborations and litigation notes; no figure is taken from it |
| 10-Q_2026-09-30_alks-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-03 | df6328c67d9ab03d30760e47eacac03760e7e83fb341e7073082128f2c7068d4 | Acquisition, debt, products, deductions, litigation, repurchases and subsequent events |
| EX-99.1_2026-05-05_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-05 | 3f53152d2ff381e382b1d7a092db23f6a1d1dce5883995e4eda0a38a2d5d57a8 | Read for context; no figure is taken from it |
| EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-28 | 4e5567773d88766be4958174400b81baacad01bd80fe607c8eb27ade6994b31f | Chief executive transition and the updated 2026 expectations |
| EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of 2026 | 2026-11-03 | 041cf8e725b3d45a5b701a4d1acae145f94c2d37b75244f3f5fe173ac5392fc6 | Product commentary, favourable items and reiterated expectations |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 0e5b581d2f91b190b3dfd8805d4398aeed4711c3f5c9d4876162d9c95cb1b0ca | Effective source set and the absence of legal documents, ratings and prices |

## Findings

### Bottom line

Alkermes is a listed specialty neuroscience company with no sponsor identified in the sources, and its creditors depend on four US-marketed products and royalty streams that face patent, royalty and exclusivity expiries in 2029 and 2030. The Avadel acquisition added LUMRYZ and secured floating-rate debt.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 32; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 19; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28

Business risk is moderate: four products supply 85.25% of nine-month 2026 revenue, VIVITROL alone 26.62%, and sales deductions absorb 46.6% of gross product sales, so payer policy moves earnings more than volume does. Governance shows no documented extraction, but legal capacity under the credit agreement is not established because that agreement was not supplied.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43; calculation D1; calculation D2

### Key findings

- Revenue durability is the central business risk because expiries cluster in 2029 and 2030 on the largest product and on the royalty stream. VIVITROL, 26.62% of nine-month 2026 revenue, has one unexpired listed patent, which expires in 2029, and faces a direct-purchaser antitrust class action over a VIVITROL patent; the Janssen royalty on INVEGA TRINZA runs to the second quarter of 2030 and on INVEGA HAFYERA to May 2030, and Janssen supplied about 9% of FY2025 revenue; LUMRYZ's adult orphan exclusivity ends on 2030-05-01 although its patents run to 2037. ARISTADA and LYBALVI patents run to 2039 and 2041, so the near-term cliff is VIVITROL and the royalties rather than the whole portfolio.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 32; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 19; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 20; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 36; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39; calculation D1
- Growth is acquisition-led and the legacy portfolio slowed in the third quarter. Product sales excluding LUMRYZ grew 3.13% in Q3 2026 against 8.28% over nine months, and the issuer says Q3 included about USD 17 million of inventory-timing and gross-to-net benefits and without them Q3 legacy sales would have been below Q3 2025 unless that quarter carried similar benefits, which the sources do not state.
Basis: EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 1; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 2; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21; calculation D4; calculation D7
- Royalty and manufacturing revenue is shrinking and will end for the INVEGA products in 2030. It fell 9.12% over nine months to USD 201.93 million, with VUMERITY royalties down 15.01% and the long-acting INVEGA royalties down 8.14%, and Biogen may end the VUMERITY licence on 180 days' notice.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 22; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 22; calculation D5
- The Avadel purchase was a strategic cash-and-debt-funded acquisition with no sponsor identified, and its residual risks are integration, the contingent value right and intangible-heavy assets. Preliminary consideration was USD 2,306.92 million, funded by USD 1,525.0 million of term loans and USD 731.2 million of cash escrowed at year-end 2025; the contingent value right is a cash claim of up to USD 165.7 million outside the debt, and intangible assets plus goodwill of USD 2,334.28 million exceed shareholders' equity by USD 469.56 million, so asset value rests on LUMRYZ continuing to earn.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 17; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 193; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; calculation D9; calculation D10
- Payer exposure and reserves are large and judgemental. Medicaid rebate accruals were USD 186.1 million at year-end 2025 and USD 214.93 million at 2026-09-30, the auditors named them a critical audit matter, and Medicare Part D deductions rose because of expanded LYBALVI rebate eligibility, while LUMRYZ is outside Medicaid, so product mix will shift the deduction rate.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 164; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43
- Governance and financial policy show no documented extraction. No dividend has been paid to date, repurchases were USD 27.70 million in Q1 2026 and none followed in Q2 or Q3 with USD 172.3 million of authorisation left, the Chairman stays on after the chief executive handover on 2026-08-01, and disclosure controls were assessed as effective at 2026-09-30; creditor rights cannot be tested because the credit agreement and proxy statement were not supplied.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 56; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 58; EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 1
- The cost base is stepping up ahead of pipeline revenue. Nine-month R&D rose 46.10% to USD 337.39 million with the alixorexton phase 3 programme, selling and marketing rose 27.13% on the LUMRYZ organisation and general and administrative expense rose 50.97%, so the debt service capacity of 2027 depends on operating leverage arriving before the orexin programmes read out.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 34; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 45; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 47; calculation D6; calculation D11

### Contrary evidence and what would change the view

The strongest evidence against a moderate business-risk view is operating momentum: LYBALVI units rose 20% over nine months with prescriptions up 18% in Q3, a 6% price rise took effect in January 2026, LUMRYZ's phase 3 idiopathic hypersomnia study was positive in May 2026 and two new LUMRYZ patents granted in September and October 2026 run to 2037, and the issuer reiterated its 2026 expectations of USD 370 million to USD 410 million of adjusted EBITDA on 2026-11-03. The view would improve if LUMRYZ patient numbers keep growing from the roughly four thousand now on therapy and legacy sales growth holds as the price rise annualises. It would worsen if the paragraph IV suits on LYBALVI or the new LUMRYZ generic filing lead to earlier entry, if VIVITROL meets generic competition after 2029, or if Janssen ends its royalty before 2030, which it may do on three months' notice. The Q3 sales included about USD 17 million of favourable items, so one clean quarter would not by itself change the view.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 2; EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 3; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 42; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 19; calculation D7

### Limitations

- No executed credit agreement was supplied, so legal capacity for dividends, additional debt, liens and asset transfers is not established; the governance conclusion rests on documented conduct only and would move toward higher risk if the documents allow extraction that the issuer has not yet used.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28
- The proxy statement was not supplied, so board composition, holder concentration and related-party arrangements are not established; the statement that no sponsor is identified is limited to what the annual report and quarterly reports disclose, and a concentrated holder would change the ownership conclusion.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 151–152; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 125
- Customer concentration is given only for FY2025 gross sales by wholesaler, so the share of the three largest wholesalers may differ for the combined business including LUMRYZ.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 27
- Only part of 2026 includes LUMRYZ and the issuer states no pro forma full-year EBITDA, so the revenue-mix shares understate LUMRYZ's run-rate weight and legacy growth rates are not a clean like-for-like.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21
- The purchase price allocation is preliminary for up to one year from the closing date, so goodwill and intangible values may change; this would alter the balance-sheet asset-value point but not cash flow.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 16

### Company and operating model

| Aspect | Finding | Credit relevance | Source |
|---|---|---|---|
| Revenue model | Net sales of four US-marketed products plus royalties and manufacturing revenue; four products are 85.25% of nine-month 2026 revenue and royalties and manufacturing 14.75% | Cash flow rests on a few products; royalty income is declining | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 22 |
| Pricing and deductions | Sales deductions are 46.6% of gross product sales; a 6% list price rise took effect on 2026-01-01 | Payer rebates, not volume, set net sales | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43 |
| Channel | Three wholesalers take 71% of VIVITROL, 94% of ARISTADA and 96% of LYBALVI gross sales (FY2025) | Receivable and channel concentration | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 27 |
| Cost structure | Nine-month 2026 R&D USD 337.385 million (up 46.10%), selling and marketing USD 457.346 million (up 27.13%), general and administrative USD 233.374 million (up 50.97%) | Costs have stepped up ahead of pipeline revenue | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 34; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 45 |
| Manufacturing | Own plant in Ohio makes VIVITROL, ARISTADA, LYBALVI and RISPERDAL CONSTA; LUMRYZ is made by third parties; capital spending USD 15.638 million in nine months 2026 | Supply is concentrated at one site for the legacy products | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 9; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 20; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7 |
| Pipeline | Alixorexton in phase 3 for narcolepsy types 1 and 2 and phase 2 for idiopathic hypersomnia; ALKS 7290 in phase 2 for ADHD and depression | Option value that needs further spending before revenue | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 42 |
| Acquisition effect | LUMRYZ added from 2026-02-12; 16.51% of nine-month 2026 revenue; Jazz receives a 3.85% royalty on LUMRYZ net sales | New growth leg with a royalty claim and a generic filing | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 35 |

### Company profile

| Item | Detail | Source |
|---|---|---|
| Legal name and listing | Alkermes public limited company, Nasdaq Global Select Market, symbol ALKS | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 1 |
| Domicile and headquarters | Incorporated in Ireland; principal executive offices in Dublin; corporate office and R&D centre in Massachusetts; manufacturing in Ohio | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 10 |
| Employees | About 2,050 full-time employees at 2026-02-20 before the LUMRYZ organisation joined | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 60 |
| Management | Blair Jackson became chief executive on 2026-08-01; Richard Pops continues as Chairman | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 1; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 58 |
| Auditor | PricewaterhouseCoopers LLP, auditor since 2007 | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 |
| Shares | 168,043,540 ordinary shares outstanding at 2026-10-30; 79 holders of record at 2026-02-20 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 1; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 125 |
| Reporting | One reportable segment; fiscal year ends 31 December; US GAAP; USD | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5 |
| Products | VIVITROL, ARISTADA and ARISTADA INITIO, LYBALVI and LUMRYZ; royalties on long-acting INVEGA products and VUMERITY | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 22 |

### Transaction summary and new debt issues

The only material transaction in the period is the acquisition of Avadel Pharmaceuticals plc, agreed on 2025-10-22 and completed on 2026-02-12 at USD 21.00 per share in cash plus a contingent value right of up to USD 1.50 per share. Preliminary consideration is USD 2,306.920 million, of which USD 2,199.207 million was paid in cash and USD 107.713 million is the value of the contingent value right; the issuer allocated USD 1,768.600 million to LUMRYZ, USD 26.300 million to an in-process project and USD 509.492 million to goodwill.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 57

The new debt is one senior secured credit agreement of 2026-02-12 with a term loan A of up to USD 750.0 million due 2031-02-12 and a term loan B of up to USD 775.0 million due 2031-08-12, both drawn in full for USD 1,525.0 million, with subsidiary guarantors and a lien on substantially all assets; a bridge facility of about USD 1.5 billion was terminated undrawn on the same day and USD 731.2 million of cash had been escrowed at year-end 2025. On 2026-08-12 an amendment cut the term loan A margin by 0.75 percentage points and the term loan B margin by 0.50 percentage points, and in October 2026 two zero-cost interest rate collars with a cap of 5.25% were added; no bonds were issued and no new debt followed after 2026-09-30.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 193; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 194; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30

### Events: Issuer history

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2023-11 | month | 2026-02-25 | Separation of Mural Oncology plc completed | Historical — the Company completed the Separation | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 199 | Cash of USD 275.0 million left the group; the discontinued business explains the 2023 and 2024 comparatives. |
| 2024-05 | month | 2026-02-25 | Athlone facility sold to Novo | Historical — sale completed with subcontracting through 2025 | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 130 | Manufacturing became more concentrated at the Ohio site. |
| 2024-12 | month | 2026-02-25 | Former term loans prepaid in full for USD 289.5 million | Historical — prepayment without penalty | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 194 | The company entered 2025 with no debt, which sets the starting point for the acquisition leverage. |
| 2025-10-01 | day | 2026-11-03 | Jazz royalty of 3.85% on LUMRYZ net sales begins | Historical — royalty from October 1, 2025 under the Avadel settlement | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39 | A permanent royalty claim on the acquired product's net sales. |
| 2025-10-22 | day | 2026-11-03 | Transaction agreement with Avadel signed | Historical — agreement dated as of October 22, 2025 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 57 | Start of the acquisition that created the debt. |
| 2025-11-18 | day | 2026-02-25 | Bridge credit agreement amended and restated | Historical — bridge facility of about USD 1.5 billion, later terminated undrawn | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 171 | Committed funding that was never drawn. |
| 2025-11-18 | day | 2026-11-03 | Amendment No. 1 to the transaction agreement | Historical — amendment dated as of November 18, 2025 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 58 | Revised acquisition terms before closing. |
| 2026-02-12 | day | 2026-11-03 | Avadel acquisition completed; credit agreement entered; bridge terminated | Historical — the Company completed the acquisition | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 15 | Debt moved from nil to USD 1,525.0 million of term loans and LUMRYZ joined the portfolio. |
| 2026-02 | month | 2026-11-03 | Equity awards modified on the retirement of the former chief executive officer | Historical — modified in February 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 31 | A governance transition cost of USD 5.0 million in the nine months. |
| 2026-05 | month | 2026-11-03 | Positive topline result from the phase 3 REVITALYZ study of LUMRYZ in idiopathic hypersomnia | Historical — announced May 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 42 | Supports a label expansion and raised the contingent value right liability. |
| 2026-05-20 | day | 2026-11-03 | Shareholders approved an amended 2018 stock option and incentive plan adding 5,900,000 shares | Historical — approved May 20, 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 31 | Higher future dilution capacity and share-based compensation. |
| 2026-07-15 | day | 2026-11-03 | Second Circuit affirmed the decision in Alkermes' favour in the Acorda arbitration matter | Historical — decision July 15, 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 36 | Reduces the exposure to a claim of about USD 66.0 million of additional damages. |
| 2026-07-30 | day | 2026-11-03 | Patent suit filed against Granules over its generic LUMRYZ application | Historical — suit filed July 30, 2026; stay of FDA approval up to 30 months | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 35 | Sets the earliest generic timing for LUMRYZ; patents run to 2037. |
| 2026-08-01 | day | 2026-11-03 | Blair Jackson's employment agreement as chief executive takes effect | Historical — agreement dated as of August 1, 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 58 | Leadership handover while the integration of Avadel is in progress. |
| 2026-08-12 | day | 2026-11-03 | Amendment No. 1 to the credit agreement lowers margins | Historical — amendment entered August 12, 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28 | Lenders accepted lower margins six months after closing, which indicates market access. |
| 2026-09-21 | day | 2026-11-03 | Positive phase 1 proof-of-concept result for ALKS 7290 in ADHD | Historical — announced September 21, 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 42 | Adds pipeline breadth but also spending. |
| 2026-09-24 | day | 2026-11-03 | Court partly dismissed the VIVITROL antitrust class action complaint | Historical — granted in part and denied in part | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 36 | The direct-purchaser claim over the VIVITROL patent continues. |
| 2026-10 | month | 2026-11-03 | Two zero-cost interest rate collars of USD 375.0 million each entered | Historical — subsequent to the balance sheet date, entered October 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30 | Caps Term SOFR at 5.25% on part of the floating-rate debt; no net debt effect. |
| 2026-10-13 | day | 2026-11-03 | Acorda petitioned the Supreme Court for review | Historical — subsequent to the balance sheet date, filed October 13, 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 36 | The matter is not final. |
| 2027 | year | 2026-11-03 | Contingent value right milestone expected to be determined by the end of 2027 | Scheduled — the Company expects achievement to be determined by the end of 2027 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 53 | A cash payment of up to USD 165.7 million becomes due if met. |
| 2029 | year | 2026-02-25 | Last unexpired Orange Book patent for VIVITROL expires | Scheduled — expires in the U.S. in 2029 | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 32 | The largest product's remaining patent protection ends. |
| 2030-05 | month | 2026-02-25 | Janssen licence for INVEGA HAFYERA royalties expires; INVEGA TRINZA royalties run to the second quarter of 2030 | Scheduled — through May 2030 when the license agreement expires | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 19 | The royalty stream from the INVEGA products ends. |
| 2030-05-01 | day | 2026-11-03 | Orphan drug exclusivity for LUMRYZ in adults ends | Scheduled — through May 1, 2030 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39 | Exclusivity beyond 2030 rests on patents that run to 2037. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 38 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 5 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 6 |
| Fields present | 14 |
| Fields total | 16 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 1 |

### Map: ownership and control

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Public shareholders | hold ordinary shares; no controlling holder stated | Ownership | Alkermes plc | 79 holders of record; percentages not stated |
| Alkermes plc | wholly-owned subsidiary | Ownership | Alkermes, Inc. | Litigation note calls it wholly-owned |
| Alkermes plc | wholly-owned subsidiary | Ownership | Alkermes Pharma Ireland Limited | Litigation note calls it wholly-owned |
| Alkermes plc | wholly-owned subsidiary | Ownership | Alkermes US Holdings, Inc. | Tax note calls it wholly-owned |
| Alkermes plc | acquired entire share capital on 2026-02-12 | Ownership | Avadel Pharmaceuticals Limited | Business combination note |
| Alkermes plc | TopCo Borrower of the credit agreement | Other stated | Term lenders | Debt note names the borrowers |
| Alkermes, Inc. | U.S. Borrower of the credit agreement | Other stated | Term lenders | Debt note names the borrowers |
| Alkermes Finance LLC | U.S. Co-Borrower of the credit agreement | Other stated | Term lenders | Debt note names the borrowers |
| Subsidiary guarantors | guarantee the credit agreement; not named | Guarantee | Term lenders | Debt note |
| Borrowers and guarantors | lien on substantially all assets | Other stated | Term lenders | Debt note |
| Former Avadel shareholders | contingent value right to USD 165.7 million | Other stated | Alkermes plc | Business combination note |

### Map: operating model to credit

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| VIVITROL | one listed patent expires in 2029 | Documentary Fact | Revenue durability | Annual report patents section |
| Janssen royalties | licence ends May 2030; about 9% of FY2025 revenue | Documentary Fact | Royalty cash flow | Annual report collaborations |
| Sales deductions | 46.6% of gross product sales | Documentary Fact | Net sales sensitivity | Quarterly report sales adjustments |
| Three wholesalers | take 71% to 96% of gross sales by product | Documentary Fact | Channel concentration | Annual report sales section |
| LUMRYZ | 16.51% of revenue; Jazz royalty 3.85% | Documentary Fact | Acquired revenue base | Quarterly report |
| Term loans | floating rate; margins cut 2026-08-12 | Documentary Fact | Interest burden | Quarterly report debt note |
| R&D spending | up 46.10% in nine months | Documentary Fact | Cash before pipeline revenue | Quarterly report R&D table |
| Paragraph IV suits | LYBALVI and LUMRYZ generic filings | Documentary Fact | Timing of generic entry | Quarterly report litigation note |
| Chief executive statement | products positioned to generate cash flow | Management Language | Cash generation durability | Q2 release quote |
| Intangibles and goodwill | exceed shareholders' equity | Analyst Interpretation | Asset value rests on LUMRYZ | Balance sheet figures |

### transaction_summary

| Transaction | Status | Credit relevance | Source |
|---|---|---|---|
| Acquisition of Avadel Pharmaceuticals plc: USD 21.00 per share in cash plus a contingent value right of up to USD 1.50 per share; preliminary consideration USD 2,306.920 million (shares USD 2,064.310 million, equity awards USD 134.897 million, contingent value right USD 107.713 million) | Completed 2026-02-12; purchase price allocation preliminary | The main event for creditors in the period: it created the debt and the LUMRYZ revenue base | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 16 |
| Senior secured credit agreement: term loan A up to USD 750.0 million due 2031-02-12 and term loan B up to USD 775.0 million due 2031-08-12, USD 1,525.0 million drawn | Entered 2026-02-12; both loans drawn in full | The only debt; secured by substantially all assets and guaranteed by subsidiaries | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 193; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 194 |
| Bridge facility of about USD 1.5 billion plus USD 731.2 million of cash escrowed at year-end 2025 | Bridge terminated undrawn 2026-02-12 | Shows the funding was committed before signing; financing costs of USD 12.3 million in 2025 and USD 7.4 million in nine months 2026 were expensed | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 193; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29 |
| Amendment No. 1 to the credit agreement: term loan A margin down 0.75 percentage points, term loan B down 0.50 percentage points; arranger fees about USD 2.6 million and write-off about USD 0.5 million | Completed 2026-08-12 | Cheaper debt, accounted for as a modification except for three exiting lenders on term loan B | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29 |
| Contingent value right: up to USD 165.7 million; liability USD 136.922 million at 2026-09-30 | Outstanding; milestone determination expected by the end of 2027 | A cash claim outside the debt that rises with LUMRYZ clinical success | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 53 |
| Interest rate collars: two of USD 375.0 million each, cap 5.25%, floors 4.25% and 4.30%, maturing February 2029 and February 2030 | Entered October 2026 (subsequent event) | Limits the rate on part of the floating debt | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30 |
| Jazz settlement: 3.85% royalty on LUMRYZ net sales from 2025-10-01 | In force | A permanent deduction from LUMRYZ economics | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39 |
| Share repurchase programme of up to USD 400.0 million: USD 27.7 million bought in Q1 2026, USD 172.3 million left | Paused since Q1 2026 | The only shareholder distribution in 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30 |

### company_description

| Issuer | Business description | Country | Sector |
|---|---|---|---|
| Alkermes plc | Global biopharmaceutical company that develops and sells neuroscience medicines: VIVITROL (alcohol and opioid dependence), ARISTADA and ARISTADA INITIO and LYBALVI (schizophrenia and bipolar I disorder) and, since 2026-02-12, LUMRYZ (narcolepsy), all sold in the United States mainly to wholesalers and specialty distributors; it also earns royalties and manufacturing revenue on products of Janssen and Biogen and runs an orexin 2 receptor agonist pipeline; one reporting segment | Ireland (incorporated and headquartered in Dublin); sales and most employees in the United States | Pharmaceutical preparations (neuroscience biopharmaceuticals) |

### revenue_business_mix

| Business line | Revenue mix | Period | Status | Limitation |
|---|---|---|---|---|
| VIVITROL | USD 364.448 million, 26.62% of total revenues | Nine months 2026 | Reported; share calculated | US only; one unexpired listed patent expiring in 2029 |
| ARISTADA and ARISTADA INITIO | USD 294.442 million, 21.51% of total revenues | Nine months 2026 | Reported; share calculated | US only; the latest listed patent expires in 2039 |
| LYBALVI | USD 282.242 million, 20.62% of total revenues | Nine months 2026 | Reported; share calculated | Paragraph IV litigation pending on patents expiring 2032 to 2041; the latest listed patent expires in 2041 |
| LUMRYZ | USD 225.986 million, 16.51% of total revenues | Nine months 2026, from 2026-02-12 | Reported; share calculated | Only part of the period; generic filing and 3.85% royalty to Jazz |
| Long-acting INVEGA royalties | USD 71.874 million, 5.25% of total revenues | Nine months 2026 | Reported; share calculated | Royalty entitlement ends in 2030 |
| VUMERITY royalties | USD 87.414 million, 6.39% of total revenues | Nine months 2026 | Reported; share calculated | Biogen may terminate on 180 days' notice |
| Other manufacturing and royalty revenues | USD 42.646 million, 3.12% of total revenues | Nine months 2026 | Reported; share calculated | Includes RISPERDAL CONSTA manufacturing and royalties; shares sum to 100.02% by rounding |
| Product sales net and manufacturing and royalty revenues | USD 1,184.643 million product sales and USD 291.256 million manufacturing and royalty revenues, 19.73% of total revenues | FY2025 | Reported; share calculated | Before LUMRYZ and the Avadel acquisition |

### ownership_register

| Owner / class | Control | Economic interest | Credit relevance | Source |
|---|---|---|---|---|
| Public holders of ordinary shares (79 holders of record at 2026-02-20; 168,043,540 shares outstanding at 2026-10-30) | Not supplied: no holder is stated to control the company; voting rights by holder are in a proxy statement that was not supplied | Not supplied: holder percentages are not stated | No sponsor or controlling holder is identified, so no sponsor-driven distribution behaviour can be assessed | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 1 |
| Alkermes plc as holder of treasury shares (17,173,165 shares at cost USD 503.194 million) | Not applicable: treasury shares carry no vote | Shares repurchased at cost over time | Past buybacks reduced cash, including USD 200.3 million in 2024 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 167 |
| Former Avadel shareholders as holders of contingent value rights | None over the company | Up to USD 165.7 million in cash if the milestone is met | A debt-like cash claim outside the credit agreement | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 17 |
| Directors with trading plans: three directors adopted plans in Q3 2026 to sell up to 16,142, 39,297 and 41,675 shares | Not applicable | Small holdings relative to 168,043,540 shares outstanding | Routine insider selling; no signal about creditor treatment | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 57 |
| Management: Blair Jackson, chief executive from 2026-08-01; Richard Pops, Chairman | Board and executive roles as stated; control rights not stated | Equity awards; amounts by person not supplied | Leadership continuity through the Chairman during the Avadel integration | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 1; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 58 |

### operating_model

| Operating driver | Measure | Period | Status | Credit relevance |
|---|---|---|---|---|
| Gross-to-net deductions | USD 1,019.4 million of deductions on USD 2,186.5 million gross product sales, 46.6% | Nine months 2026 | Reported | Net sales fall sharply if rebates or discounts widen |
| List price | 6% increase on 2026-01-01 for ARISTADA, LYBALVI and VIVITROL | 2026 | Reported | Price drove part of the 2026 growth and will not repeat in 2027 |
| Unit volumes | ARISTADA units up 9% in Q3 and 7% over nine months; LYBALVI units up 16% in Q3 and 20% over nine months; VIVITROL units up 2% over nine months | Q3 and nine months 2026 | Reported | Volume growth is mid to high single digit for the legacy products |
| LYBALVI prescriptions | Total prescriptions up 18% on Q3 2025 | Q3 2026 | Reported | Demand indicator behind the unit growth |
| LUMRYZ patients | About 4,100 patients on therapy | End of Q3 2026 | Reported, approximate | Sets the base for LUMRYZ revenue; revenue was USD 89.9 million in Q3 against USD 96.6 million in Q2 with USD 7 million of inventory benefit in Q2 |
| Quarter one-offs | About USD 17 million of Q3 benefits: VIVITROL USD 8 million of gross-to-net, ARISTADA USD 4 million inventory timing and USD 3 million gross-to-net, LYBALVI USD 2 million inventory timing | Q3 2026 | Reported, approximate; issuer wording | Q3 legacy sales are better than the underlying trend |
| Royalties and manufacturing revenue | USD 201.934 million against USD 222.201 million, down 9.12%; VUMERITY down 15.01%; long-acting INVEGA down 8.14% | Nine months 2026 against nine months 2025 | Reported; changes calculated | High-margin revenue that is shrinking |
| Cost of goods | USD 253.910 million including USD 72.4 million of LUMRYZ inventory step-up amortisation | Nine months 2026 | Reported | Step-up is non-cash and ends when the acquired inventory is sold |
| R&D | USD 337.385 million against USD 230.926 million, up 46.10%; alixorexton external spend USD 93.4 million against USD 67.5 million | Nine months 2026 | Reported; change calculated | Cash cost of the pipeline that has no revenue yet |
| Selling, general and administrative | Selling and marketing USD 457.346 million (up 27.13%); general and administrative USD 233.374 million (up 50.97%) | Nine months 2026 | Reported; changes calculated | Acquisition costs and a larger commercial organisation raise the cost base |
| Capital spending | USD 15.638 million against USD 40.440 million | Nine months 2026 and 2025 | Reported | Low capital intensity; frees cash for debt service |
| Working capital | Accrued sales discounts, allowances and reserves USD 323.406 million against USD 247.126 million at 2025-12-31; Medicaid rebates USD 214.927 million | At 2026-09-30 | Reported | Non-interest-bearing float owed to payers that must be paid in arrears |
| Company expectations for 2026 | Total revenues USD 1,730 million to USD 1,840 million; adjusted EBITDA USD 370 million to USD 410 million; reiterated on 2026-11-03 | FY2026 | Management Language | Management's view, not evidence of delivery |

### events_timeline

| Date / window | Event | Credit relevance | Status | Source |
|---|---|---|---|---|
| 2025-10-22 | Transaction agreement with Avadel signed | Start of the acquisition that created the debt | Historical | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 57 |
| 2026-02-12 | Acquisition completed, credit agreement entered, bridge terminated | Debt moved from nil to USD 1,525.0 million | Historical | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 15 |
| 2026-08-12 | Amendment No. 1 lowers term loan margins | Lower interest cost and evidence of market access | Historical | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28 |
| 2026-10 | Interest rate collars entered | Subsequent event; caps Term SOFR at 5.25% on USD 750.0 million of notional | Subsequent event | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30 |
| 2029 | VIVITROL last listed patent expires | Largest product loses patent protection | Scheduled | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 32 |
| 2030-05 | Janssen royalty entitlement on INVEGA products ends | Royalty stream ends | Scheduled | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 19 |
| By the end of 2027 | Contingent value right milestone determination | Up to USD 165.7 million cash payment | Scheduled | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 53 |

### gaps_ledger

| Gap | Affected analysis | Severity | Action | Status |
|---|---|---|---|---|
| Executed credit agreement and amendment not supplied | Legal capacity, restricted payments, guarantors, security and covenant terms | Material | Supply the credit agreement of 2026-02-12 and Amendment No. 1 | Open |
| Proxy statement not supplied | Board, ownership concentration, compensation and related-party matters | Material | Supply the 2026 proxy statement | Open |
| No pro forma full-year EBITDA for Avadel | Comparable growth and run-rate revenue mix | Material | Obtain any pro forma statement from the issuer | Open |
| Customer concentration for 2026 and for LUMRYZ not stated | Channel concentration conclusion | Minor | Obtain wholesaler shares for the combined business | Open |
| Q3 2025 equivalents of inventory and gross-to-net benefits not stated | Underlying legacy growth | Minor | Obtain the Q3 2025 release commentary | Open |
| Purchase price allocation preliminary | Goodwill and intangible values | Minor | Await final allocation within one year of closing | Open |
| No market data, ratings or peers in the run settings | Relative value and market-implied views | Minor | Supply if those views are wanted | Open |

### conflict_log

| Conflict | Sources | Materiality | Resolution | Downstream impact |
|---|---|---|---|---|
| Country of the issuer: the run settings state United States; the filings state incorporation and headquarters in Ireland with sales and most staff in the United States | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 1; Run settings (not issuer evidence) | Minor | The filings control; the register states Ireland as domicile and the United States as the operating base | Perimeter and tax statements in later analysis |
| Acquisition amount: consideration of USD 2,306.920 million (including the contingent value right at USD 107.713 million), cash consideration paid USD 2,199.207 million, acquisition cash outflow net of cash acquired USD 2,085.073 million, Avadel's own one-time costs USD 77.7 million excluded from the pro forma, Alkermes' costs USD 37.4 million | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 19 | Minor | All figures kept with their roles: total consideration, cash paid, net cash outflow, seller costs and buyer costs | Uses of funds in later analysis |
| Debt quantum: principal USD 1,518.4 million at the August 2026 amendment, USD 1,511.750 million in the 2026-09-30 maturity table, carrying value USD 1,497.731 million, USD 1,525.0 million drawn at closing | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 193 | Minor | All figures kept with their roles; differences are instalments paid, discount and financing costs | Debt used in leverage and recovery work |

### T2D.1 Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation |
|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_alks-20251231.htm.jsonl | High | FY2025 | Alkermes plc and subsidiaries | Business, products, collaborations, patents, risk factors, audited statements, Part III by reference | Part III information incorporated by reference to a proxy statement not supplied |
| S2 | 10-Q_2026-03-31_alks-20260331.htm.jsonl | Medium | Q1 2026 | Alkermes plc and subsidiaries | Interim statements, acquisition accounting | Unaudited; preliminary allocation |
| S3 | 10-Q_2026-06-30_alks-20260630.htm.jsonl | Medium | Q2 2026 | Alkermes plc and subsidiaries | Interim statements, litigation, collaborations | Unaudited; preliminary allocation |
| S4 | 10-Q_2026-09-30_alks-20260930.htm.jsonl | Medium | Q3 2026 | Alkermes plc and subsidiaries | Statements, acquisition, debt, products, litigation, share repurchases | Unaudited; preliminary allocation |
| S5 | EX-99.1_2026-05-05_alks-ex99_1.htm.jsonl | Medium | Q1 2026 | Alkermes plc and subsidiaries | Release with adjusted EBITDA and expectations | Management Language and non-GAAP measures |
| S6 | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl | Medium | Q2 2026 | Alkermes plc and subsidiaries | Release with chief executive transition and updated expectations | Management Language and non-GAAP measures |
| S7 | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl | Medium | Q3 2026 | Alkermes plc and subsidiaries | Release with product commentary and reiterated expectations | Management Language and non-GAAP measures |
| CP0 | Source readiness handoff | Medium | As of 2026-11-05 | Run | Effective source set and the absence of legal documents, ratings and prices | Page reference for the third-quarter release totals is one page late |

### T2D.3 Governance register

| Governance Topic | Source-Supported Fact | Risk Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Board and control rights | Board composition, committee roles and holder control are in a proxy statement that was not supplied; no controlling holder is stated | Insufficient Information | Without board and holder data, control over distributions and amendments cannot be assessed | Governance risk is held at Medium rather than Low until the proxy statement is read | Low | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 151–152; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 125 | Proxy statement not supplied |
| Management succession | Blair Jackson became chief executive on 2026-08-01; Richard Pops stays as Chairman; former chief executive's equity awards were modified in February 2026 at a cost of USD 5.0 million in nine months | Neutral | A handover during the Avadel integration adds execution risk; the continuing Chairman limits discontinuity | No direct effect on debt service; monitor integration delivery | High | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 1; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 58 | Individuals are not evaluated |
| Audit and reporting quality | PricewaterhouseCoopers LLP has audited since 2007; the FY2025 opinion names Medicaid rebate accruals a critical audit matter (USD 186.1 million at 2025-12-31); disclosure controls were effective at 2026-09-30 | Mixed | Large estimate-driven reserves can move net sales and cash flow with little warning | Reserve revisions are a source of earnings volatility that creditors should monitor | High | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 164; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 56 | Reserve adequacy is not tested here |
| Related-party transactions and fees | Not supplied: related-party and sponsor fee disclosure is in the proxy statement; the annual report and quarterly reports state none | Insufficient Information | No sponsor fee leakage can be tested | No adverse conclusion is drawn from the absence | Low | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 151–152 | Proxy statement not supplied |
| Reporting cadence and covenant reporting | Quarterly reports within about five weeks of quarter end and earnings releases with itemised non-GAAP reconciliations; covenant levels and ratios are not printed | Mixed | Good operating disclosure but no covenant transparency | Lenders can monitor earnings but not covenant headroom from the filings | Medium | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 | Compliance certificates not supplied |
| Shareholder and creditor interests | No dividend ever paid; share repurchases USD 27.7 million in Q1 2026 at an average USD 27.82 per share and none since, USD 172.3 million of authorisation remaining; stock plan enlarged by 5,900,000 shares on 2026-05-20 | Mixed | A repurchase programme with debt outstanding is a possible claim on cash, but spending has been small and paused | Watch for resumption of repurchases before leverage falls | High | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 31 | Restricted payment capacity not supplied |

### T2D.4 Sponsor and shareholder behaviour flags

| Flag ID | Behavior Type | Documented Action | Behavior Category | Amount / Funding Source | Legal-Capacity Link | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|---|---|---|
| CP-2C-FLAG-001 | Debt-funded acquisition | Avadel acquired for preliminary consideration of USD 2,306.920 million on 2026-02-12 | Neutral | USD 1,525.0 million term loans plus escrowed cash of USD 731.2 million | Insufficient Information: credit agreement not supplied | Raises leverage and ties cash flow to LUMRYZ and integration | Higher refinancing exposure in 2031; creditors hold senior secured claims | High | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 193; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 16 | Pro forma EBITDA not stated |
| CP-2C-FLAG-002 | Voluntary debt repayment | Former term loans of USD 289.5 million prepaid without penalty in December 2024 | Supportive | Cash on hand | Not applicable | Left the company debt-free before the acquisition | Showed willingness to reduce debt when not acquiring | High | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 194 | Pre-dates the current debt |
| CP-2C-FLAG-003 | Share repurchase | USD 200.3 million repurchased in 2024; none in 2025; USD 27.7 million in Q1 2026; none in Q2 or Q3 2026 | Neutral | Cash on hand | Insufficient Information: restricted payment capacity not supplied | Cash returned to shareholders is cash not retained against the new debt | Small in 2026 and paused; a resumption before deleveraging would be an adverse signal | High | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 167; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30 | No dividend has been paid |
| CP-2C-FLAG-004 | Amendment | Amendment No. 1 on 2026-08-12 cut margins by 0.75 percentage points on term loan A and 0.50 on term loan B | Neutral | Not applicable: no new money; USD 45.5 million borrowed and repaid to exiting lenders | Insufficient Information: amendment text not supplied | Lower interest cost, with three lenders exiting term loan B | Supports interest cover; no priority change is stated | High | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29 | Terms beyond margins not stated |
| CP-2C-FLAG-005 | Disposal | Athlone facility sold to Novo in May 2024 with subcontracting that ended in 2025 | Neutral | Proceeds of USD 97.9 million in 2024 | Not applicable | Concentrated manufacturing at the Ohio site | Single-site dependence for legacy products | High | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 130; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 168 | Pre-dates the current debt |
| CP-2C-FLAG-006 | Separation | Mural Oncology separated in November 2023 with USD 275.0 million of cash transferred | Neutral | Cash transferred at separation | Not applicable | A past value transfer to shareholders' new entity | No effect on the current creditors; evidence of capital allocation history | High | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 199; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 168 | Pre-dates the current debt |

### T2D.5 Capital allocation risk table

| Capital Allocation Item | Source-Supported Fact | Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Organic investment (R&D) | R&D USD 337.385 million in nine months 2026, up 46.10% | Mixed | Spending rises before any orexin revenue | Cash flow after interest is exposed to development outcomes | High | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6 | Programme outcomes not forecast here |
| M&A | Avadel acquisition completed 2026-02-12; no other acquisition stated | Mixed | One large debt-funded purchase | Integration and LUMRYZ growth decide deleveraging | High | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 15 | Single acquisition does not show a pattern |
| Capex discipline | Capital additions USD 15.638 million against USD 40.440 million in nine months 2025 | Supportive | Low capital intensity | More cash for debt service | High | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7 | Plant needs are not stated |
| Dividends and distributions | No dividend has been paid to date | Supportive | No distribution leakage | Cash retained | High | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 125 | Future policy not stated |
| Share repurchases | USD 27.7 million in Q1 2026; none in Q2 and Q3; USD 172.3 million remaining | Neutral | Small and paused | Watch for resumption | High | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30 | Restricted payment capacity not supplied |
| Debt paydown | Contractual principal payments of USD 13.3 million in nine months 2026; USD 45.5 million borrowed and repaid in the amendment | Neutral | Scheduled amortisation only | No voluntary deleveraging yet | High | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 52; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7 | No sweep from cash flow stated |
| Refinancing | Margins reduced on 2026-08-12 | Supportive | Lower interest cost | Better interest cover | High | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28 | Terms beyond margins not stated |
| Asset sales | Athlone facility sold in May 2024 | Neutral | Past disposal | No present effect | High | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 130 | Pre-dates the current debt |
| Liquidity preservation | Cash and cash equivalents USD 631.314 million at 2026-09-30; no undrawn facility described | Supportive | Cash-based liquidity | Liquidity relies on cash rather than committed lines | High | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 49 | Facility terms not supplied |

### T2D.9 Sponsor risk assessment

| Risk-Level Driver | Evidence | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Countervailing Evidence | Limitation |
|---|---|---|---|---|---|---|---|
| Acquisition-driven leverage | Debt of USD 1,497.731 million after the Avadel purchase from no debt | Releveraging for a strategic purchase, not a distribution | Higher refinancing exposure in 2031 | High | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 27 | Margins cut within six months; debt-free before the deal | Pro forma EBITDA not stated |
| Distribution policy | No dividends; repurchases small and paused | Little cash leaving the group | Supports deleveraging capacity | High | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30 | USD 200.3 million repurchased in 2024 | Capacity under the credit agreement not supplied |
| Unknown legal capacity | Credit agreement not supplied | Capacity for restricted payments, debt and liens cannot be tested | Risk level cannot be set to Low | Low | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28 | Customary covenants are described in the notes | Document absent |
| Disclosure | Itemised non-GAAP reconciliations; critical audit matter on Medicaid rebates; covenant levels not printed | Good operating transparency, limited covenant transparency | Lenders can monitor earnings, not headroom | Medium | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 164 | Disclosure controls effective | Compliance certificate not supplied |
| Sponsor / Governance Risk Level | Medium: no documented extraction or creditor-adverse conduct, but legal capacity and holder information are not available | Missing documents prevent a Low classification | Monitor repurchases, any distribution and use of baskets | Medium | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 125 | No sponsor identified | Level rests on documented conduct only |

### T2D.11 Gaps ledger

| Gap ID | Missing Data | Why It Matters | Affected Section / Flag / Export Record | Consequence for Confidence | Required Follow-Up Source |
|---|---|---|---|---|---|
| CP-2C-GAP-001 | Executed credit agreement and Amendment No. 1 | Legal capacity for distributions, debt, liens and transfers | T2D.4 flags, T2D.9 level | Medium impact | Credit agreement of 2026-02-12 and Amendment No. 1 of 2026-08-12 |
| CP-2C-GAP-002 | Proxy statement: holders, board, compensation, related parties | Control and conflicts | T2D.3, ownership register | Medium impact | 2026 proxy statement |
| CP-2C-GAP-003 | Covenant levels and compliance certificate | Covenant headroom | T2D.3 reporting topic | Medium impact | Compliance certificate |
| CP-2C-GAP-004 | Pro forma full-year Avadel EBITDA and funding detail | Acquisition leverage effect | T2D.4 flag 001 | Medium impact | Issuer pro forma statement |
| CP-2C-GAP-005 | Sponsor fund details | Not applicable: no sponsor identified | T2D.9 | Low impact | Confirm no sponsor in the proxy statement |

## Calculations

| Calc ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| D1 | Revenue shares of total revenues, nine months 2026 | Total revenues USD 1,369.052 million; VIVITROL 364.448; ARISTADA 294.442; LYBALVI 282.242; LUMRYZ 225.986; long-acting INVEGA royalties 71.874; VUMERITY royalties 87.414; other 42.646 (USD million) | 26.62%, 21.51%, 20.62%, 16.51%, 5.25%, 6.39% and 3.12%; they sum to 100.02% by rounding | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 22 |
| D2 | Four-product share and manufacturing and royalty share | Product sales 1,167.118 / 1,369.052 and manufacturing and royalty 201.934 / 1,369.052 (USD million) | 85.25% and 14.75% | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21 |
| D3 | LUMRYZ share of Q3 2026 revenue | 89.922 / 480.132 (USD million) | 18.73% | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21 |
| D4 | Legacy product sales growth excluding LUMRYZ | Q3: (417.280 − 89.922) = 327.358 against 317.423; nine months: (1,167.118 − 225.986) = 941.132 against 869.151 (USD million) | 3.13% in Q3 and 8.28% in nine months | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21 |
| D5 | Change in manufacturing and royalty revenues | Total 201.934 against 222.201; long-acting INVEGA 71.874 against 78.240; VUMERITY 87.414 against 102.848 (USD million) | −9.12%, −8.14% and −15.01% | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 22 |
| D6 | R&D growth | 337.385 against 230.926 (USD million) | 46.10% | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6 |
| D7 | Q3 2026 favourable items stated by the issuer | VIVITROL 8 plus ARISTADA 4 plus 3 plus LYBALVI 2 (USD million, approximate) | About USD 17 million | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 1; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 2 |
| D8 | Share of gross sales taken by three wholesalers, FY2025 | VIVITROL 38 + 15 + 18; ARISTADA 48 + 22 + 24; LYBALVI 32 + 29 + 35 (%) | 71%, 94% and 96% | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 27 |
| D9 | Intangible assets and goodwill against equity, 2026-09-30 | Intangible assets 1,741.758 plus goodwill 592.519 = 2,334.277; shareholders' equity 1,864.721 (USD million) | Intangibles and goodwill exceed equity by 469.556 (USD million) | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6 |
| D10 | Preliminary acquisition consideration | Shares 2,064.310 plus equity awards 134.897 plus contingent value right 107.713 (USD million) | 2,306.920 (USD million); cash paid 2,199.207 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 16 |
| D11 | Selling, marketing and general expense growth | Selling and marketing 457.346 against 359.740; general and administrative 233.374 against 154.586 (USD million) | 27.13% and 50.97% | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 34 |
| D13 | Amounts rounded to two decimals for the narrative (half up) | Manufacturing and royalty revenues 201.934; consideration 2,306.920; intangibles plus goodwill 2,334.277; excess over equity 469.556; Medicaid rebate accrual 214.927; R&D 337.385 (USD million) | USD 201.93 million; USD 2,306.92 million; USD 2,334.28 million; USD 469.56 million; USD 214.93 million; USD 337.39 million | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 22; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 27 |
| D12 | Deductions as a share of gross product sales | 1,019.4 / 2,186.5 (USD million) | 46.62%, stated by the issuer as 46.6% | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43 |

## Gaps

- The proxy statement, which holds the board, holder and related-party information, was not supplied; severity High for ownership conclusions; supplying it would close the gap.
- The credit agreement and its amendment were not supplied, so legal capacity for distributions, further debt and asset transfers is not established; severity High for governance conclusions; supplying them would close the gap.
- No pro forma full-year EBITDA for the combined business is stated, so legacy and acquired revenue cannot be compared on a full-year basis; severity Medium.
- Wholesaler concentration is stated for FY2025 only and not for LUMRYZ or 2026; severity Low.
- The earlier Source readiness analysis cites the page after the one that carries the third-quarter release's cash and investments totals; this analysis does not rely on that reference; severity Low.

## Next module

The orchestrator selects the next module.
