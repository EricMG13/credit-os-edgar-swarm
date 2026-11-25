---
issuer_id: crk-23194
module_id: CP-2
analysis_date: 2026-11-18
run_id: crk-23194-2026-11-18-credit_snapshot-host
---

## Request

Comstock Resources Inc, as of 2026-11-18, for the credit_snapshot pathway. Scope: issuer-level fundamental credit quality, operating outlook, downside path and monitoring priorities using the supplied filings and accepted same-run analyses.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_crk.htm.jsonl | Annual report on Form 10-K for the year ended 2024-12-31 | 2025-02-21, signature date | 573187cc759c1ddea7c19cbed85103f9de784b84068ad1f069616d53b3e50b5d | Historical earnings, cash flow and debt comparison |
| 10-K_2025-12-31_crk.htm.jsonl | Annual report on Form 10-K for the year ended 2025-12-31 | 2026-02-19, signature date | 12ac885c29363474639ac322947a020de6bb51304e642efc61d014faf9dc6c42 | Latest audited operating, business, debt and asset-sale information |
| 10-Q_2026-03-31_crk.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 | 2026-05-06, signature date | 0ab54d7a64d72e20c298d655c35f6bf913d9d4292578a3cf7c1d924042c6f0d1 | Supplied interim source inventory |
| 10-Q_2026-06-30_crk.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 | 2026-07-30, signature date | b32ec30d3a928a0c7e848a82cfe993544f549cf4d36b65127a3d8ded2384f633 | Supplied interim source inventory |
| 10-Q_2026-09-30_crk.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 | 2026-11-05, signature date | ac2df52d79abc76f06043e3b129bdcf68705d2e5a4044e8b86abd40d62a5351a | Latest interim operating, financial, liquidity, debt and transaction data |
| EX99.1_2026-03-31_crk_crk-ex99-1-htm.htm.jsonl | First-quarter 2026 financial and operating results release | 2026-05-05, release date stated | 07421ce1120c7d1aa01229881aa6226301661e78bad274f77f20b9315c629392 | Supplied issuer release inventory |
| EX99.1_2026-06-30_crk_crk-ex99-1-htm.htm.jsonl | Second-quarter 2026 financial and operating results release | 2026-07-29, release date stated | 6e7daf261ae302c5c1acf6af33c14648ece4908285b4f9b8d17c9eaf1b1b92d6 | Supplied issuer release inventory |
| EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl | Third-quarter 2026 financial and operating results release | 2026-11-04, release date stated | 713c0c09d0c85716b5e5e1f5fa9c725fe47ad70dbe28a00e48d93cc02a70032e | Production, realized-price and adjusted EBITDAX trends |

Supplied handoff: Source readiness (CP-0), sha256 b25fbdcf8aa44f26c4bdad6e5bfae003c479d5ee736aae25e44c693a7549ffb4.

Supplied handoff: Financial foundation (CP-1), sha256 fc243ffd47a4989fdd2efd8209d52c833e6b2ff0cbd1de3e940f5a4a5eafaedb.

Supplied handoff: Business & governance (CP-1A), sha256 4417440aa4cb1201ed2ed02da0ab25e347c8fcc22793405725e77c920fa17c56.

No external sources were used.

## Findings

### Bottom line

Comstock’s reported LTM leverage of 2.68x is moderate, but negative cash free cash flow after development spending leaves creditors exposed to commodity volatility and the 2028–2030 refinancing cycle.

The LTM EBITDA denominator includes the FY2025 asset-sale gain, and reported liquidity includes capacity restricted to PGS. The SOCAR sale and later facility extension may improve debt capacity, but both remain conditional and post-sale net debt and leverage are not established.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_crk.htm.jsonl, pages 19–21, 27–30

### Key findings

- The reported 2.68x LTM debt-to-EBITDA ratio understates uncertainty around recurring leverage because the house-calculated denominator includes the FY2025 asset-sale gain and has no matching full-year adjusted EBITDAX series. The pending sale has no stated pro forma debt amount.
Basis: Financial foundation (CP-1); 10-K_2025-12-31_crk.htm.jsonl, page 82; 10-Q_2026-09-30_crk.htm.jsonl, pages 21, 30

- Capital spending is the main constraint on debt reduction. LTM operating cash flow was materially below cash capital expenditures, leaving negative cash free cash flow before financing; management’s discretion to slow spending protects liquidity only at the cost of development pace and potential reserve replacement.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_crk.htm.jsonl, pages 27–28

- The operating base is concentrated in Haynesville and Bossier natural gas. Q3 production grew year over year, but nine-month production, realized price and adjusted EBITDAX were lower than the comparable 2025 period, so the stronger quarter has not yet reversed the full-period pressure.
Basis: 10-K_2025-12-31_crk.htm.jsonl, pages 7, 21; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, pages 1–2, 5–6

- Liquidity provides a near-term buffer, but not all of it is fungible for parent debt service. Most reported liquidity is undrawn facility capacity, while the PGS facility is restricted to midstream activity.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_crk.htm.jsonl, pages 2, 19–20, 27

- Refinancing depends on a concentrated maturity schedule and execution of the SOCAR transaction. The sale could fund repayment and enable a further facility extension, but it also transfers operating interests and its exact asset perimeter differs between issuer disclosures.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-Q_2026-09-30_crk.htm.jsonl, pages 21, 29–30; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 3

### Contrary evidence and what would change the view

The strongest counterweight is a large, developed gas position near Gulf Coast markets, together with the company’s reported Q3 production growth, access to gathering and transport infrastructure, and current unused bank capacity. These factors can sustain sales and support activity through a weak gas-price period. The pending SOCAR sale adds potential liquidity and refinancing relief if it closes and the proceeds are applied to debt. Continued production growth, stable realized prices, cash capex falling toward operating cash generation, a completed sale and a stated debt repayment would materially improve the view; another period of weaker adjusted EBITDAX or further facility draws would strengthen the downside case.
Basis: 10-K_2025-12-31_crk.htm.jsonl, pages 7, 10–12, 21; 10-Q_2026-09-30_crk.htm.jsonl, pages 27–30; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, pages 1, 5–7

### Limitations

- The accepted leverage measure uses house-calculated EBITDA that includes an asset-sale gain, and the filings do not provide a consistent full-year adjusted EBITDAX series. This limits the conclusion on recurring leverage and prevents a normalized debt ratio from being established.
Basis: Financial foundation (CP-1); 10-K_2025-12-31_crk.htm.jsonl, pages 82, 99; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 6

- No closing statement or repayment split is reported for SOCAR. This makes the refinancing view pre-transaction and leaves post-sale net debt, leverage and retained production unestablished.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_crk.htm.jsonl, pages 21, 30

- Actual covenant ratios, headroom, current lender reporting and full debt documents are not supplied. This prevents a conclusion on covenant capacity, legal ranking or creditor protections and keeps the downside assessment qualitative.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_crk.htm.jsonl, pages 19–21

- No forward natural-gas price deck or source-supported company forecast is provided. This prevents quantification of the price level at which drilling, liquidity or refinancing would become unsustainable.
Basis: Source readiness (CP-0); 10-K_2025-12-31_crk.htm.jsonl, pages 3, 21

- This report does not direct the sequencing of other analyses; its conclusions are limited to Comstock’s issuer-level fundamental credit profile.

### Strengths and weaknesses

Strengths. The company has a long-lived Haynesville and Bossier resource base, which supports a multi-year drilling inventory and reduces immediate replacement risk. Its East Texas and North Louisiana assets have access to Gulf Coast markets, and operated gathering and treating infrastructure supports the Western Haynesville position. Current unused bank availability and stated flexibility to adjust most capital spending provide tools to preserve liquidity.
Basis: 10-K_2025-12-31_crk.htm.jsonl, pages 7–12, 21; 10-Q_2026-09-30_crk.htm.jsonl, pages 27–29

Weaknesses. Nearly all proved reserves and most production are concentrated in one natural-gas basin, leaving cash flow exposed to gas prices, local basis and transport conditions. Growth requires substantial drilling and completion capital, which has kept cash free cash flow negative despite positive operating cash flow. The company also relies on a pending asset sale and a conditional maturity extension to mitigate its 2028–2030 debt wall.
Basis: 10-K_2025-12-31_crk.htm.jsonl, pages 7, 14, 21; Financial foundation (CP-1); 10-Q_2026-09-30_crk.htm.jsonl, pages 21, 27–30

Ownership and governance. Concentrated majority ownership increases the relevance of related-party terms, but the last disclosed ownership figure is dated and the current holder and percentage are not established. The farmout shifts some well funding to an affiliate while granting it a return priority and contingent well interests; PGS investor rights also limit the cash available to Comstock.
Basis: Business & governance (CP-1A); 10-K_2025-12-31_crk.htm.jsonl, page 101; 10-Q_2026-09-30_crk.htm.jsonl, pages 5–6, 21

Opportunities. Successful Western Haynesville wells and longer-lateral drilling can add productive inventory, although cash returns depend on commodity prices and capital efficiency. Gulf Coast LNG, power-generation and petrochemical demand are identified by management as supportive market drivers, not independently verified forecasts. Closing the SOCAR sale and repaying debt could lengthen the refinancing runway, but would also reduce retained interests.
Basis: 10-K_2025-12-31_crk.htm.jsonl, pages 9–12; 10-Q_2026-09-30_crk.htm.jsonl, page 21; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 3

Threats. A drop in natural-gas prices or unfavorable basis can reduce realized revenue before the company can adjust its drilling program. Rig, completion, gathering and transportation costs can rise with activity, limiting the cash benefit of production growth. Environmental and operating regulation, permitting changes and plugging obligations can increase cost or constrain activity; their future cash effect is not quantified in the supplied materials.
Basis: 10-K_2025-12-31_crk.htm.jsonl, pages 21–23, 27–36, 45; 10-Q_2026-09-30_crk.htm.jsonl, page 24

Industry forces. Competition among gas producers and competing fuels limit price-setting power because Comstock sells natural gas at market prices. Buyer power is mitigated by reported alternative purchasers, although the three largest purchasers represented 39% of 2025 sales. Supplier power matters because the filing describes competition for drilling rigs, completion equipment, sand, personnel and transportation capacity; a cost shock would reduce margins or delay reserve development. Capital, acreage and drilling requirements constrain entry, but the filings do not quantify barriers or competitor economics.
Basis: 10-K_2025-12-31_crk.htm.jsonl, pages 21, 44–47

Material external drivers are economic, regulatory and technological. Gas prices, regional basis and demand determine realized revenue; federal and state environmental, safety and operating rules affect costs and permissions; longer laterals and completion designs can improve per-well economics but still require substantial upfront capital. The filings do not identify a separate social factor that changes the current credit view.
Basis: 10-K_2025-12-31_crk.htm.jsonl, pages 9–12, 21–23, 27–36

Over the next twelve to twenty-four months, cash conversion and closing of the SOCAR transaction should determine whether liquidity can fund the drilling plan without further material borrowing. Over the medium term, the Western Haynesville inventory and Gulf Coast access could sustain production, but the single-basin profile, high investment requirement and conditional 2031 facility extension leave refinancing sensitive to gas prices and asset-sale execution.
Basis: 10-K_2025-12-31_crk.htm.jsonl, pages 7–12, 21; 10-Q_2026-09-30_crk.htm.jsonl, pages 21, 27–30

The issuer-specific downside begins with lower gas realizations, unfavorable basis or a production interruption in the Haynesville/Bossier position. Revenue and production fall while gathering, transport and lease costs do not decline as quickly; reduced operating cash flow then widens the gap to drilling and completion spending. Comstock can defer discretionary capital expenditure, but that slows development and reserve replacement. If cash use continues, the company draws more of its parent facility and leverage rises; if SOCAR also fails to close, the expected debt repayment and conditional 2031 extension are unavailable, increasing pressure around the 2028–2030 maturities. The filings establish liquidity and spending flexibility but do not quantify the price threshold at which distress would occur.
Basis: 10-K_2025-12-31_crk.htm.jsonl, pages 21, 44–47; 10-Q_2026-09-30_crk.htm.jsonl, pages 21, 27–30; Financial foundation (CP-1)

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 22 |
| Calculated | 0 |
| Assumption-Based | 0 |
| Analyst Inference | 6 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 6 |
| Fields present | 30 |
| Fields total | 30 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 0 |

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Natural-gas prices and basis | Gas prices drive sales realizations | Documentary Fact | Operating cash flow | 10-K_2025-12-31_crk.htm.jsonl, page 21 |
| Haynesville and Bossier concentration | Local disruption can affect a large production base | Analyst Interpretation | Production and debt-service capacity | 10-K_2025-12-31_crk.htm.jsonl, pages 7, 14, 21 |
| Drilling and completion spending | Cash capex exceeds LTM operating cash generation | Documentary Fact | Free cash flow and facility use | Financial foundation (CP-1); 10-Q_2026-09-30_crk.htm.jsonl, pages 4, 27 |
| Gathering and transportation costs | Activity in higher-cost areas raised transport expense | Documentary Fact | Margin and cash-flow resilience | 10-Q_2026-09-30_crk.htm.jsonl, page 24 |
| PGS cash and investor rights | Restrictions and investor terms limit subsidiary cash | Documentary Fact | Parent liquidity available for debt service | 10-Q_2026-09-30_crk.htm.jsonl, pages 5–6, 20 |
| Majority-stockholder-owned farmout partner | Funding provides well capital but grants a return priority and interests | Documentary Fact | Retained well cash flows and asset economics | Business & governance (CP-1A); 10-Q_2026-09-30_crk.htm.jsonl, page 21 |
| SOCAR sale and debt repayment | Closing and repayment condition the further facility extension | Documentary Fact | Refinancing runway | 10-Q_2026-09-30_crk.htm.jsonl, pages 21, 29–30 |
| Gulf Coast demand | Management cites demand sources as regional gas sales support | Management Language | Future realized prices and drilling returns | 10-K_2025-12-31_crk.htm.jsonl, pages 9–10 |

### Overall credit view

Comstock presents an adequate but narrowly focused business profile supported by its developed Haynesville resource base, regional market access and operating infrastructure. Credit quality is constrained by commodity and basin concentration, high capital requirements, negative cash free cash flow and a debt maturity schedule concentrated in 2028–2030. Cash-flow durability is weak after current development spending despite positive reported operating cash flow. Refinancing capacity depends on continued production and facility availability, with material improvement contingent on SOCAR closing and actual debt repayment. The principal downside path is lower gas realizations or production weakening cash generation before capex can be reduced, leading to further draws and less flexibility against maturities. A firmer view requires recurring EBITDA, future price and capex assumptions, covenant headroom, final sale terms and post-sale debt.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-Q_2026-09-30_crk.htm.jsonl, pages 21, 27–30

### Analytical appendix — complete canonical registers

### T2.1 Source Register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_crk.htm.jsonl | Annual report on Form 10-K | High | FY2024 and comparative years | Comstock Resources Inc and subsidiaries | Historical income, cash flow, debt and business baseline | Annual periods are historical | Source evidence for financial trend and business description |
| 10-K_2025-12-31_crk.htm.jsonl | Annual report on Form 10-K | High | FY2025 and comparative years | Comstock Resources Inc and subsidiaries | Audited results, operating model, customer concentration, debt and asset sales | Includes nonrecurring asset-sale gain; current ownership not updated | Latest audited baseline |
| 10-Q_2026-03-31_crk.htm.jsonl | Quarterly report on Form 10-Q | High | Q1 2026 | Comstock Resources Inc and subsidiaries | Interim statements and notes | Unaudited | Source inventory |
| 10-Q_2026-06-30_crk.htm.jsonl | Quarterly report on Form 10-Q | High | Q2 2026 and H1 2026 | Comstock Resources Inc and subsidiaries | Interim statements and notes | Unaudited | Source inventory and period comparison |
| 10-Q_2026-09-30_crk.htm.jsonl | Quarterly report on Form 10-Q | High | Q3 2026, 9M 2026 and subsequent events through signing | Comstock Resources Inc and subsidiaries, including consolidated PGS | Latest balance sheet, cash flow, debt, liquidity, costs and transactions | Unaudited; sale is pending; no forward cash-flow case | Latest credit and refinancing evidence |
| EX99.1_2026-03-31_crk_crk-ex99-1-htm.htm.jsonl | First-quarter financial and operating results release | Medium | Q1 2026 | Comstock Resources Inc | Operating and issuer-defined measures | Issuer-defined measures | Source inventory |
| EX99.1_2026-06-30_crk_crk-ex99-1-htm.htm.jsonl | Second-quarter financial and operating results release | Medium | Q2 2026 and H1 2026 | Comstock Resources Inc | Operating and issuer-defined measures | Issuer-defined measures | Source inventory |
| EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl | Third-quarter financial and operating results release | Medium | Q3 2026 and 9M 2026 | Comstock Resources Inc | Production, realized prices and adjusted EBITDAX | Issuer-defined measures; transaction scope differs from quarterly filing | Operating trend and issuer-adjusted earnings |
| Source readiness (CP-0) | Accepted same-run source-readiness analysis | High | As of 2026-11-18 | Comstock Resources Inc | Confirms pinned source identity, periods and source coverage | Does not establish a financial conclusion | Source lineage |
| Financial foundation (CP-1) | Accepted same-run financial analysis | High | FY2024, FY2025 and LTM ended 2026-09-30 | Comstock Resources Inc and consolidated subsidiaries | Debt, leverage, cash flow, liquidity, maturities, covenants and post-balance-sheet adjustments | House EBITDA includes asset-sale gain; SOCAR pro forma debt is not stated | Financial measures and debt structure |
| Business & governance (CP-1A) | Accepted same-run business and governance analysis | High | Through 2026-11-18 | Comstock Resources Inc and PGS | Business concentration, ownership disclosures, PGS, related-party farmout and SOCAR details | Current owner identity, agreements and legal capacity are not established | Operating, shareholder and transaction context |

Module Status: Ready with Limitations.

### T2.10 Materiality Filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
|---|---|---|---|---|---|---|
| 1 | Cash flow after development spending | LTM operating cash flow USD 846.583 million versus cash capital expenditures USD 1,656.947 million; calculated cash free cash flow negative USD 810.364 million at 2026-09-30 | Sustained drilling and completion spend absorbs more cash than operations generate | Higher facility use or asset proceeds are needed unless spending or operating cash flow changes | Negative | High |
| 2 | Maturity concentration | Contractual principal: USD 800.000 million in 2028, USD 1,623.880 million in 2029 and USD 965.000 million in 2030; total USD 3,388.880 million | Large principal maturities require refinancing, repayment or asset proceeds over a short period | Failure to access cash or markets raises refinancing risk | Negative | High |
| 3 | Earnings quality and trend | LTM house EBITDA USD 1,252.549 million and debt/EBITDA 2.68x include FY2025 asset-sale gain; nine-month adjusted EBITDAX fell from USD 801.886 million to USD 762.558 million | One-off gain supports the leverage denominator while recent adjusted earnings declined | Headline leverage may not represent recurring debt capacity | Negative | High |
| 4 | Commodity and operating concentration | Substantially all proved reserves are in the Haynesville and Bossier plays; 2025 top three buyers were 39% of sales; 9M 2026 natural-gas production was below 9M 2025 and realized price including hedging fell from USD 3.20 to USD 3.09 per Mcfe | Lower basin realizations or production reduce revenue and cash generation before discretionary capex is reset | Debt service and refinancing depend on a single gas basin and its transport economics | Negative | High |
| 5 | Related-party well funding and PGS cash claims | Majority-stockholder partnership funds specified well costs subject to a 15% return and contingent 50% well interests; last disclosed beneficial ownership was 71% in Q3 2024, with current ownership not updated; PGS has outside investor return rights and restricted cash | Development funding supports the program but redirects later cash flow and does not create freely available parent liquidity | Related-party and subsidiary cash flows must not be treated as parent debt paydown capacity | Negative | High |
| 6 | Available liquidity and bank covenant compliance | Reported gross liquidity USD 868.633 million includes USD 700.000 million of unused Comstock commitment, USD 150.000 million restricted PGS commitment and USD 18.633 million cash; issuer reports covenant compliance | Undrawn parent capacity can bridge working-capital and capex timing, though facility availability is not cash | Provides near-term flexibility; actual covenant headroom is not stated | Positive | High |
| 7 | Reported leverage and cash interest coverage | 2.68x LTM carrying debt/house EBITDA and 5.96x EBITDA/cash interest on the accepted method; both use house EBITDA, which includes an asset-sale gain | Lower reported leverage and cash interest coverage provide a debt-service buffer, subject to earnings quality | Supports current debt service but does not resolve negative FCF or maturities | Positive | Medium |
| 8 | SOCAR sale and conditional facility extension | Announced USD 1.65 billion sale, with debt repayment contemplated; facility maturity may extend to 2031 after closing and repayment | Completed proceeds could reduce debt and refinance risk, but the transaction also disposes of operating interests | Potential material improvement, not credited before closing; no pro forma debt is established | Positive | Medium |
| 9 | Pending SOCAR execution and asset perimeter | The sale remains unclosed, no pro forma debt is established, and the filing and release describe the 20% upstream asset scope differently | A delay leaves the debt repayment and extension conditions unresolved; a broader transfer could reduce retained production | Deleveraging and the future operating base cannot be assessed until closing terms and debt repayment are reported | Negative | Medium |

### T2.12 Monitoring Triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
|---|---|---|---|---|
| Revenue decline | Quantitative threshold not available in provided materials. Track quarterly natural-gas and oil sales, gas-services revenue and realized pricing against comparable periods | Lower sales or realized prices reduce cash available for capex and debt service | Sustained decline increases facility reliance and weakens refinancing | 10-Q_2026-09-30_crk.htm.jsonl, page 3; EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, page 5 |
| EBITDA margin pressure | Quantitative threshold not available in provided materials. Compare adjusted EBITDAX and realized prices with the same-period 2025 base; 9M adjusted EBITDAX was USD 762.558 million versus USD 801.886 million | Lower realized prices or higher costs reduce operating cushion | Continued weakness worsens coverage and cash conversion | EX99.1_2026-09-30_crk_crk-ex99-1-htm.htm.jsonl, pages 5–6; no issuer margin floor supplied |
| FCF deterioration | Quantitative threshold not available in provided materials. Monitor cash capital expenditures versus operating cash flow; LTM cash free cash flow was negative USD 810.364 million | Negative cash FCF requires new debt, asset proceeds or lower spending | Persistent deficit raises leverage and consumes undrawn capacity | Financial foundation (CP-1); 10-Q_2026-09-30_crk.htm.jsonl, pages 4, 27 |
| Liquidity reduction | Quantitative threshold not available in provided materials. Monitor cash and unused Comstock facility capacity against 2026-09-30 reported balances; exclude PGS capacity from parent availability | Draws reduce liquidity headroom; subsidiary availability is restricted to midstream activity | Reduced parent liquidity shortens the runway to the maturity wall | Financial foundation (CP-1); 10-Q_2026-09-30_crk.htm.jsonl, pages 2, 19–20, 27 |
| Leverage increase | Quantitative threshold not available in provided materials. Monitor same-method debt/house EBITDA versus the 2.68x LTM baseline; this is a comparator, not a covenant threshold | Additional borrowings or lower EBITDA increase leverage | Higher leverage reduces refinancing flexibility | Financial foundation (CP-1); actual covenant ratio and headroom are not supplied |
| Refinancing delay | Quantitative threshold not available in provided materials. Monitor closing by the expected year-end 2026 date, repayment and effectiveness of the further 2031 facility extension | The sale and debt repayment are conditions to the later extension | Refinancing pressure remains concentrated in 2028–2030 | 10-Q_2026-09-30_crk.htm.jsonl, pages 21, 29–30; closing status not supplied |
| Sponsor/shareholder action | Quantitative threshold not available in provided materials. Monitor new affiliate funding, asset transfers, distributions, ownership changes and settlement of partnership receivables | Related-party terms can alter cash priority and retained well economics | Changes may affect cash leakage, governance and creditor visibility | Business & governance (CP-1A); 10-Q_2026-09-30_crk.htm.jsonl, pages 20–21; legal capacity not supplied |
| Sector deterioration | Quantitative threshold not available in provided materials. Watch lower gas realizations, adverse basis, transport constraints or service costs rising faster than production | Price and operating-cost pressure can weaken both earnings and cash flow | Increases draw risk and reduces capacity to fund development and maturities | 10-K_2025-12-31_crk.htm.jsonl, pages 21–23, 44–47; 10-Q_2026-09-30_crk.htm.jsonl, page 24 |

### cp2.cp_model_strengths_weaknesses

<!-- table-id: cp2.cp_model_strengths_weaknesses -->

| direction | rank | label | mechanism | evidence_ids | status | source_id | source_locator | as_of |
|---|---:|---|---|---|---|---|---|---|
| STRENGTH | 1 | Core gas resource and Gulf Coast access | Established Haynesville/Bossier resource and regional market access support production and sales continuity | business_description; T2.10-8 | READY | 10-K_2025-12-31_crk.htm.jsonl | pages 7, 10 | 2026-11-18 |
| STRENGTH | 2 | Current liquidity and covenant compliance | Undrawn parent capacity and reported compliance provide a near-term bridge, while PGS capacity remains restricted | C7; T2.10-6 | READY | 10-Q_2026-09-30_crk.htm.jsonl | pages 19–20, 27 | 2026-11-18 |
| STRENGTH | 3 | Conditional asset-sale deleveraging | SOCAR proceeds could fund debt repayment and lengthen the bank maturity if closing conditions are met | T2.10-8; C8 | READY | 10-Q_2026-09-30_crk.htm.jsonl | pages 21, 29–30 | 2026-11-18 |
| WEAKNESS | 1 | Negative cash FCF after development spend | Capex exceeds operating cash flow, increasing facility reliance or requiring spending reductions | C4; T2.10-1 | READY | 10-Q_2026-09-30_crk.htm.jsonl | pages 4, 27 | 2026-11-18 |
| WEAKNESS | 2 | Single-basin commodity exposure | Gas-price, basis and production changes flow through a concentrated resource base to cash generation | business_description; T2.10-4 | READY | 10-K_2025-12-31_crk.htm.jsonl | pages 7, 14, 21 | 2026-11-18 |
| WEAKNESS | 3 | Maturity and execution dependence | The 2028–2030 maturities precede the conditional 2031 extension, while SOCAR proceeds and debt repayment remain pending | C8; T2.10-2; T2.10-8 | READY | 10-Q_2026-09-30_crk.htm.jsonl | pages 19–21, 29–30 | 2026-11-18 |

## Calculations

No additional arithmetic is introduced; leverage, cash flow, liquidity and maturity figures are taken from the accepted financial foundation with its stated definitions.
Basis: Financial foundation (CP-1)

## Gaps

| Gap | Why it matters | Affected conclusion | Severity | Required follow-up |
|---|---|---|---|---|
| No normalized LTM EBITDA or issuer-adjusted full-year series | The leverage ratio includes the FY2025 asset-sale gain and cannot be converted to recurring leverage from the supplied records | Headline leverage is not a complete measure of recurring debt capacity | Material | Complete audited adjusted EBITDAX reconciliation and updated operating results |
| No forward gas-price, basis or operating forecast | The earnings and liquidity effects of a price downturn cannot be quantified | Downside remains causal but qualitative | Material | Issuer forecast and source-supported commodity-price cases |
| No actual maintenance covenant ratios or headroom | Reported compliance does not show the distance to a covenant breach | Covenant-driven borrowing or default risk cannot be assessed | Material | Current compliance certificates and executed credit agreements |
| SOCAR closing and debt repayment are not reported | The future debt and maturity profile cannot be set from the announced price | No post-transaction deleveraging benefit is included | Material | Closing statement, final asset schedule and debt repayment notices |
| PGS and parent cash-flow detail is not fully separated | Consolidated cash generation does not establish cash available for parent debt service | Parent liquidity assessment excludes assumed PGS fungibility | Medium | Standalone PGS financial and distribution information |
| Customer, affiliate and operating data are stale or incomplete for a full forward case | 2025 customer concentration and current affiliate arrangements may not describe future volumes or cash needs | Medium-term revenue durability and governance sensitivity remain bounded | Medium | Current operating, customer and related-party schedules |

## Next module

The orchestrator selects the next module.
