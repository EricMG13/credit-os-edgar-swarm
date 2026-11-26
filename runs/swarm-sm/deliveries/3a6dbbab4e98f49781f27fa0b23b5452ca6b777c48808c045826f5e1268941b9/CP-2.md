# Fundamental credit: SM Energy Co (sm), as of 2026-11-05

## Request

SM Energy Co (issuer id sm), as of 2026-11-05, credit snapshot pathway. This module synthesises the issuer's fundamental credit profile from the seven supplied filings and releases and the Source readiness, Financial foundation and Business & governance modules.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_sm-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-26 | e8932d9647a97ab4096dd543c01cda4006057a408b2bc3fa1755c23dc94ba27e | Business, reserves, customers, credit agreement terms |
| 10-Q_2026-03-31_sm-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | 45237f139ae59527446c46c29ce6b302442f1b1133c6a522f87376bfd87f4049 | First-quarter context |
| 10-Q_2026-06-30_sm-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-06 | 6404fb70a5450d38bf3b3c16da403bf19b4d2205562c84a2c87afdc694f9126d | Second-quarter context |
| 10-Q_2026-09-30_sm-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-04 | 354b7aaa1a83736b6232300aa038c2e407fc12a2943b257d38be5e15b857042f | Operations, costs, prices, hedges, liquidity, capital program |
| EX-99.1_2026-05-06_exhibit99105062026er.htm.jsonl | Earnings release for the first quarter of 2026 (Exhibit 99.1) | 2026-05-06 | 5913cf03f0dc7c1579e2da8f8a0720be2946682a7844315b0aa6198cf5e98607 | Cross-check |
| EX-99.1_2026-08-05_exhibit99108052026er.htm.jsonl | Earnings release for the second quarter of 2026 (Exhibit 99.1) | 2026-08-05 | c611381a32ea896857849afba30a25e0af8ac568cabbb54d05c3d2eded519c0a | Cross-check |
| EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl | Earnings release for the third quarter of 2026 (Exhibit 99.1) | 2026-11-03 | 4d33629074f8a450075efc018d0d5d57de50a9ccd6af427fe22e4ed725fe6f8a | Guidance, adjusted free cash flow, leverage target, synergy statements |

| Module | Handoff | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness (CP-0) | Source readiness handoff for SM Energy Co | b450d1108fa78476679986346bce4e700e48d4afa617227f2d4877af51c042b8 | Source gate, perimeter break and gaps |
| Financial foundation (CP-1) | Financial foundation handoff for SM Energy Co | 7da598ad0b99f8038cb5ff95b18f2fe4655abdb4b90301d034d27f66e6871d67 | Statements, net debt, liquidity, maturity ladder, ratios and gaps |
| Business & governance (CP-1A) | Business and governance handoff for SM Energy Co | 209036a2d88bd2718ceb859cfed13e9e04ae5b261c847cf4d33b96a7469944a7 | Business, transactions, ownership, governance and behaviour flags |

## Findings

### Bottom line

SM Energy's fundamental credit profile is adequate and improving: USD 2,940 million of liquidity and no bond maturity before mid-2028 give creditors time, but earnings power on the enlarged balance sheet is unmeasured, so leverage rests on oil prices and management's deleveraging. Net debt was USD 6,172 million at 30 September 2026 at carrying value, or USD 6,167 million after the final South Texas settlement received after that date (day not stated); pro forma net leverage is not established.
Basis: Financial foundation (CP-1); Business & governance (CP-1A)

The primary downside is a fall in oil prices while stockholder payments continue and net debt is still above the company's own low one-times target.
Basis: EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, page 2; Financial foundation (CP-1)

### Key findings

Liquidity and the maturity profile are the strongest support. Liquidity of USD 2,940 million, made up of USD 442 million of cash and USD 2,498 million of undrawn commitments, is 47.6% of net debt, and no senior note falls due before July 2028. Only 40.4% of principal falls in 2028 to 2030 and 59.6% falls in 2031 to 2034, so a price fall has time to work through cash flow before bonds must be refinanced.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 17–19; calculation C16; calculation C13; calculation C15

Cash generation covers investment and leaves room to reduce debt, which is why the profile is improving: net debt at carrying value fell from USD 7,527 million at 31 March 2026 to USD 6,416 million at 30 June 2026 and USD 6,172 million at 30 September 2026. In the nine months to 30 September 2026 operating cash flow of USD 2,865 million funded capital expenditure of USD 2,020 million and left free cash flow of USD 845 million, or USD 492 million after stockholder payments. Adjusted EBITDAX covered cash interest paid 9.18x in the third quarter and 11.23x over the nine months, and covered it 5.13x after capital expenditure.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C11; calculation C1; calculation C2; calculation C3

Leverage cannot be measured on a comparable basis, which is a gap in the evidence more than a proven weakness. Net debt to reported EBITDA was 1.06x at the end of FY2025 for SM Energy alone, a figure that excludes the 2026 merger and sale, for which pro forma net leverage is not established, and the company states a target of low one-times leverage at mid-cycle prices by year-end 2026. Two proxies bracket the position without measuring it: four times third-quarter Adjusted EBITDAX gives 1.12x on the company's net debt, and a mechanical twelve-month sum that mixes pre- and post-merger periods gives 1.42x.
Basis: Financial foundation (CP-1); EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, page 2; calculation C5; calculation C7; calculation C4

Price exposure is high and hedging has so far cost cash. Oil was 88.1% of production revenue in the nine months to 30 September 2026, hedge settlement losses of USD 457 million took 7.9% of revenue, and Adjusted EBITDAX margin was 64.2% against 72.1% before those losses and 67.7% on the same basis for FY2025. Operations improved before hedging because oil prices rose, and hedges gave much of the gain back; in a price fall the same contracts would pay.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C8; calculation C9; calculation C10

Cost and capex flexibility are adequate rather than strong. Capital expenditure is discretionary: management plans about USD 2,750 million for 2026 and runs six rigs in the Permian Basin and one each in the DJ Basin and South Texas. Lease operating expense was USD 7.02 per BOE in the third quarter as mix shifted to higher-cost acquired assets, and the split between maintenance and growth capital is not disclosed, so the spending that could be cut without lowering volumes is not established.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 54; Business & governance (CP-1A)

Financial policy is the main judgement. The Business & governance review rates sponsor and governance risk Medium: debt was reduced with asset-sale proceeds and cash flow, yet stockholder payments took 41.8% of free cash flow and the debt documents that cap such payments are not supplied. Integration looks largely complete on management's account, with about USD 400 million of run-rate synergies actioned, but oil guidance was trimmed and takeaway limits in the Uinta Basin persist.
Basis: Business & governance (CP-1A); EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, pages 1–3

### Contrary evidence and what would change the view

The strongest case for a weaker credit is that the improvement leans on high oil prices. Realized oil prices were USD 86.19 per barrel in the nine months against USD 65.28 a year earlier, the 12-month strip was USD 90.76 per barrel on 22 October 2026, and the company itself ties the rise to supply disruption. If prices revert, Adjusted EBITDAX falls while interest cost on the enlarged debt of USD 6,614 million at carrying value stays, and the hedge contracts for 2027 cover a part of volumes that is not stated.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 35; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 41; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 24; Financial foundation (CP-1)

Four reported quarters after the sale showing net debt to Adjusted EBITDAX near the company's target would confirm an adequate-and-improving view and could support a stronger one. A fall of the oil price toward the hedge floors, drawings on the revolver, stockholder payments rising before the target is met, or a covenant definition tighter than the company's measure would move the view to weak.
Basis: EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, page 2; Business & governance (CP-1A)

### Limitations

- No earnings history exists for the combined company on a comparable basis, so leverage and interest cover after the merger are bracketed by two proxies rather than measured; the adequate view of leverage is a judgement, not a calculation.
Basis: Financial foundation (CP-1)
- Results fall in a period of elevated oil prices and no through-the-cycle figure is available, so the conclusions on margin and free cash flow hold only while prices stay near current levels, and the company's mid-cycle target cannot be tested.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 35–36; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 41
- Hedge coverage against forecast volumes is not stated, so the downside scenario describes the transmission qualitatively and the cash cost of a price fall is not sized.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 24; Business & governance (CP-1A)
- Covenant headroom, restricted-payment capacity and recovery are outside this module and are not established in the sources, so the liquidity conclusion assumes the company's statement that it complies with its covenants and the revolver stays available.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 21; Financial foundation (CP-1)
- No peer set or market quotes are supplied, so the business profile cannot be compared with other leveraged oil and gas issuers; adequate is judged on the issuer's own evidence.
Basis: Source readiness (CP-0)

### Company description

SM Energy is an independent oil, gas and NGL producer in Texas, Colorado, New Mexico and Utah, with four operating areas after the Civitas merger of 30 January 2026. Third-quarter 2026 production was 433.1 MBOE per day, 222.7 MBOE per day of it in the Permian Basin, 119.4 MBOE per day in the DJ Basin, 46.3 MBOE per day in South Texas and 44.7 MBOE per day in the Uinta Basin, and oil was 84.1% of third-quarter production revenue. The business is a commodity price taker with no contracted revenue stream, so cash-flow visibility comes from hedges and capital discretion rather than customer contracts, and creditors depend on oil prices and operating execution across a larger but still oil-concentrated asset base.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 34–35; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43; Business & governance (CP-1A)

### Ownership and group structure

SM Energy is a listed Delaware corporation with no sponsor; former Civitas stockholders held 52 percent of its shares at the merger closing, and the sources name no controlling holder. The Credit Agreement and the notes are guaranteed by the subsidiaries, including those of Civitas, and the revolver is secured by mortgage liens on proved properties that also secure hedge obligations, so secured claims rank ahead of the unsecured notes against the same assets today. The proxy statement that would show holders and directors is not supplied, and the Business & governance review rates sponsor and governance risk Medium on conduct alone.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 26

### Revenue drivers and pricing power

Revenue follows volume and realized price: realized price per BOE was USD 54.23 in the third quarter and rose 19% over nine months on oil prices, while gas realizations were held back by regional differentials in the Permian and DJ basins. There is no pass-through or contract floor, one purchaser took 28% of FY2025 production revenue, and delivery commitments carry deficiency payments of up to USD 205 million. Revenue is therefore cyclical, price-taking and moderately concentrated, which makes the credit sensitive to the oil price and to the loss of one purchaser's payment.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 35–36; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 22; 10-K_2025-12-31_sm-20251231.htm.jsonl, page 139; Financial foundation (CP-1)

### Cost structure and margin resilience

Production costs are largely variable with price and volume: production taxes were USD 3.47 per BOE and lease operating expense USD 7.02 per BOE in the third quarter, and transportation USD 3.53 per BOE. Fixed costs sit in depreciation and general and administrative expense, and integration costs inflated nine-month general and administrative expense. Margin is resilient to volume loss through the variable taxes, but not to price: the 7.9% of revenue paid out on hedges shows how a price rise passes to hedge counterparties, and the mix shift toward higher-cost assets adds unit cost that synergies of about USD 400 million are meant to offset.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 60–61; EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, page 1; calculation C8

### Capital intensity and FCF conversion

Free cash flow after capital expenditure was USD 845 million in the nine months, 22.7% of Adjusted EBITDAX, and USD 411 million in the third quarter, with capital expenditure at 53.0% of third-quarter Adjusted EBITDAX. The company's own adjusted free cash flow was USD 884 million, and it carries USD 227 million of one-time integration and divested-asset cash costs. Cash taxes of USD 100 million to USD 120 million are guided for 2026 and the split between maintenance and growth capital is not disclosed. Conversion is adequate and capital is discretionary, so capex flexibility over the 2028 to 2034 maturity wall is real but unsized.
Basis: Financial foundation (CP-1); EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, pages 2–3; EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, page 14; calculation C17

### Competitive forces

Rivalry is price rivalry among producers, so SM Energy cannot defend margin by price and relies on cost and basin quality. Buyer power is moderate: there are numerous purchasers in each area, but one took 28% of FY2025 production revenue. Supplier power is rising: management expects service-cost inflation, and capital guidance was held at about USD 2,750 million only through synergies and efficiency. New entrants and substitutes are not credit drivers over the 12 to 24 months that matter for the 2028 maturities.
Basis: 10-K_2025-12-31_sm-20251231.htm.jsonl, page 139; EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, pages 2–3; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 36

### Macro and policy factors

Macro and geopolitical factors do change the credit. Management links the higher oil prices of 2026 to Middle East conflict and Strait of Hormuz disruption, warns of tariff and inflation effects on oilfield costs, and says gas takeaway constraints in the Permian Basin and DJ Basin cut realized gas prices in the first half. A resolution of those conflicts would lower oil prices while service-cost inflation lingers, squeezing margin; this is the macro channel into the primary downside.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 35–36; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 41

### Credit-translated SWOT

Strengths: liquidity of USD 2,940 million, no bond maturity before mid-2028, free cash flow of USD 845 million after capital expenditure in nine months, and a four-area asset base. Weaknesses: unmeasured combined leverage, 88.1% oil dependence, hedge settlement losses of USD 457 million, and stockholder payments of USD 353 million before the debt target is met. Opportunities: further asset sales and synergy delivery that lower net debt faster. Threats: oil price reversal, service-cost inflation, takeaway limits in the Uinta Basin and a tighter amended covenant definition.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, pages 1–3

### Strengths and weaknesses

Liquidity and a late maturity wall are the first strength. Liquidity of USD 2,940 million against no bond until July 2028 means a price shock must persist for many quarters before refinancing pressure arises, which lowers near-term default risk.
Basis: Financial foundation (CP-1); calculation C16

Free cash flow after capital expenditure is the second strength. USD 845 million in nine months, with discretionary capital, lets the company reduce debt or return cash, and management has used it for both; the evidence supports lower loss severity only if returns do not outrun debt reduction.
Basis: Financial foundation (CP-1); calculation C11

Scale across four areas is the third strength. Production of 433.1 MBOE per day from the Permian, DJ, South Texas and Uinta areas spreads operating risk, though revenue stays tied to the oil price.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 38; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43

Unmeasured combined leverage is the first weakness. Net debt of USD 6,172 million has no comparable earnings denominator, so creditors cannot confirm the company's low one-times target and must rely on proxies of 1.12x and 1.42x that bracket but do not measure it.
Basis: Financial foundation (CP-1); calculation C5; calculation C6; calculation C7

Oil and hedge exposure is the second weakness. Oil is 88.1% of revenue and hedge settlements cost USD 457 million in nine months, so a price rise helps creditors less than shareholders and a fall exposes unhedged volumes.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 13–14; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 25; calculation C8

Stockholder-return policy with unseen limits is the third weakness. Stockholder payments of USD 353 million in nine months and USD 323 million of repurchase authority remain while net debt is above target, and the documents that cap them are not supplied.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 16–17

### Outlook, tailwinds and headwinds

Over 12 to 24 months the tailwinds are the company's guidance of fourth-quarter production of 435 to 445 MBOE per day and capital expenditure of about USD 610 million, a 12-month oil strip of USD 90.76 per barrel against USD 83.62 on 30 September 2026, and synergy delivery above target. The headwinds are hedge settlements at current prices, the Uinta Basin takeaway limit that management expects to clear in early 2027, and full-year oil guidance trimmed to 220 to 222 MBbl per day. Over three to five years the 8.9-year reserve life of the pre-merger company, the 2028 to 2034 maturities and the combined inventory decide whether debt can be reduced further without sacrificing volumes; no combined reserve figure is supplied.
Basis: EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, pages 2–3; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 41; 10-K_2025-12-31_sm-20251231.htm.jsonl, page 15; Business & governance (CP-1A)

### Downside scenario

The initiating condition is an oil price reversal as the supply disruption that management cites eases. Realized price per BOE falls first, and because production taxes fall with it while transportation, lease operating expense and general and administrative costs do not, Adjusted EBITDAX margin compresses beyond the price move; hedge contracts for 2027, including oil swaps of 12,542 MBbl at USD 68.70 per barrel and collars of 13,157 MBbl with a USD 63.93 floor, then pay out and cushion part of the loss, but their coverage against volumes is not stated. Free cash flow of USD 845 million over nine months would narrow and stockholder payments of USD 353 million would compete with debt reduction, so net debt stops falling. Management levers are capital expenditure, buybacks and the unused USD 2,498 million of commitments. Resilience appears sufficient to avoid liquidity distress through 2027 because no bond is due before July 2028, the first observable trigger is quarterly free cash flow below the third-quarter figure with net debt flat, and, if the springing maturity clause still applies after the January 2026 amendment, its 91-day test begins to matter from April 2028 when availability is thin.
Basis: 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 24; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 17; 10-K_2025-12-31_sm-20251231.htm.jsonl, page 158; Financial foundation (CP-1); Business & governance (CP-1A)

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 26 |
| Calculated | 16 |
| Assumption-Based | 0 |
| Analyst Inference | 5 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 15 |
| Fields total | 16 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 3 |

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| Oil price | Drives 88.1% of production revenue | Documentary Fact | Adjusted EBITDAX and free cash flow | Q3 report, revenue by product |
| Hedge settlements | Cost USD 457 million in nine months | Documentary Fact | Adjusted EBITDAX margin | Q3 report, derivatives note |
| Adjusted EBITDAX and free cash flow | Fund capex, stockholder payments and paydown | Documentary Fact | Net debt | Q3 report, cash flow statement |
| Net debt of USD 6,172 million | No comparable EBITDAX to measure leverage | Analyst Interpretation | Leverage at 2026-09-30 | Financial foundation |
| Stockholder payments | Compete with debt reduction | Analyst Interpretation | Pace of deleveraging | Q3 report, equity note |
| Liquidity of USD 2,940 million | Covers needs until the 2028 maturities | Analyst Interpretation | Refinancing risk | Q3 report, debt note |
| Revolver commitments | Set the availability limit, not the borrowing base | Documentary Fact | Liquidity | Q3 report, debt note |
| Springing maturity clause | Status after the January 2026 amendment unclear | Insufficient Information | Revolver maturity near 2028 | 10-K, credit agreement note |
| Synergy claims of about USD 400 million | Management says actioned; not audited | Management Language | Cost base and free cash flow | Third-quarter release |

### Overall credit view

Overall, SM Energy presents an adequate business profile supported by liquidity, a late maturity wall and positive free cash flow, but credit quality is constrained by unmeasured combined leverage, oil and hedge exposure and a stockholder-return policy whose limits are not visible. Cash-flow durability appears adequate while oil prices stay elevated and not fully assessable beyond that. Refinancing capacity is likely to depend on oil prices, net debt reaching the company's target and the amended covenant terms when the 2028 notes approach. The primary downside path is an oil price reversal with continued stockholder payments. Further analysis would require the executed credit agreement and indentures, a comparable twelve-month combined EBITDAX and hedge coverage ratios. Fundamental credit completed with limitations. Top risk: oil price reversal with leverage above target.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); Source readiness (CP-0)

### Analytical appendix — complete canonical registers

The registers below carry the detail behind the reader passages above.

### T2.1 Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2025-12-31_sm-20251231.htm.jsonl | High | Year ended 2025-12-31 | SM Energy before the merger | Reserves, customers, credit agreement, FY2025 statements | Excludes Civitas; Part III by reference | Business and credit-quality evidence |
| S2 | 10-Q_2026-03-31_sm-20260331.htm.jsonl | High | Three months ended 2026-03-31 | SM Energy including Civitas from 2026-01-30 | First-quarter statements and debt | Unaudited | Context |
| S3 | 10-Q_2026-06-30_sm-20260630.htm.jsonl | High | Three and six months ended 2026-06-30 | As above | Second-quarter statements and debt | Unaudited | Context |
| S4 | 10-Q_2026-09-30_sm-20260930.htm.jsonl | High | Three and nine months ended 2026-09-30 | As above | Operations, costs, prices, hedges, liquidity, capital program | Unaudited; purchase accounting preliminary | Business and credit-quality evidence |
| S5 | EX-99.1_2026-05-06_exhibit99105062026er.htm.jsonl | Medium | First quarter 2026 | As above | Company non-GAAP measures | Company definitions | Cross-check |
| S6 | EX-99.1_2026-08-05_exhibit99108052026er.htm.jsonl | Medium | Second quarter 2026 | As above | Company non-GAAP measures | Company definitions | Cross-check |
| S7 | EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl | Medium | Third quarter 2026 | As above | Guidance, adjusted free cash flow, leverage target, synergy statements | Management statements | Outlook evidence |
| S8 | Source readiness (CP-0) | High | As of 2026-11-05 | SM Energy | Source gate, perimeter break, gaps | Accepted module output | Gate and gaps |
| S9 | Financial foundation (CP-1) | High | FY2024 to 2026-09-30 | SM Energy | Statements, net debt, liquidity, ladder, ratios | No comparable twelve-month figure after the merger | Financial evidence |
| S10 | Business & governance (CP-1A) | High | To 2026-11-04 | SM Energy | Business, transactions, ownership, governance, behaviour flags | Debt documents and proxy statement not supplied | Business and governance evidence |

Module status: Ready with Limitations.

### T2.10 Materiality filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Liquidity and maturity profile | Liquidity USD 2,940 million; no bond maturity before July 2028; 59.6% of principal due 2031 to 2034 | Time to absorb a price shock before refinancing | Lowers near-term default and refinancing risk | Positive | High |
| 2 | Combined-company leverage unmeasured | Net debt USD 6,172 million with no comparable twelve-month EBITDAX; proxies 1.12x and 1.42x | Debt burden cannot be confirmed against earnings | Raises uncertainty on leverage and PD until measured | Negative | Medium |
| 3 | Oil price and hedge exposure | Oil 88.1% of production revenue; hedge settlement losses USD 457 million; net hedge liability USD 460 million | Price falls cut cash flow; rises are partly paid to hedge counterparties | Margin and free cash flow swing with oil price | Negative | High |
| 4 | Free cash flow and deleveraging conduct | Free cash flow USD 845 million in nine months; notes of USD 2,160 million retired | Cash and asset-sale proceeds applied to debt | Reduces net debt and refinancing need | Positive | High |
| 5 | Stockholder payments with unseen limits | USD 353 million paid in nine months; USD 323 million of repurchase authority left | Cash paid out competes with debt reduction | Slower deleveraging and restricted-payment capacity unknown | Negative | Medium |
| 6 | Scale across four areas | Production 433.1 MBOE per day across Permian, DJ, South Texas and Uinta areas | Spreads operating and basin-differential risk | Supports cash-flow durability | Positive | Medium |
| 7 | Unit cost and margin pressure | Lease operating expense USD 7.02 per BOE; Adjusted EBITDAX margin 62.1% in Q3 against 71.9% for FY2025 | Higher-cost acquired assets and hedge losses compress margin | Reduces free cash flow per barrel | Negative | Medium |
| 8 | Integration and perimeter change | About USD 400 million of run-rate synergies actioned; USD 227 million of one-time cash costs | Management-reported synergies not yet audited in results | Cash-flow improvement is unproven until reported | Negative | Low |

### T2.12 Monitoring triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
| --- | --- | --- | --- | --- |
| Revenue decline | Quarterly production below the guided 435 to 445 MBOE per day, or realized price per BOE below the third-quarter USD 54.23; no numerical threshold is stated in the sources | Revenue follows volume and price with no contract floor | Lower cash flow for debt service and capital | EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, pages 2–3; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43; guidance is management's |
| EBITDA margin pressure | Adjusted EBITDAX margin below the third-quarter 62.1%, or lease operating expense above USD 7.02 per BOE | Mix shift and hedge settlements compress margin | Weaker free cash flow per barrel | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 60; company-defined measure |
| FCF deterioration | Quarterly free cash flow below the third-quarter USD 411 million, or adjusted free cash flow below USD 397 million | Free cash flow funds debt reduction and returns | Slower deleveraging and more reliance on the revolver | Financial foundation (CP-1); EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, page 13 |
| Liquidity reduction | Liquidity below USD 2,940 million, any revolver drawing, or a lower commitment at the redetermination of 2027-04-01 | Commitments of USD 2,500 million set the availability limit | Less runway before 2028 maturities | 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 17–18; redetermination outcome unknown |
| Leverage increase | Company net debt above USD 6,014 million, or the first comparable twelve-month ratio above the low one-times target | Net debt reduction has stalled if it rises | Higher PD and refinancing risk | EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, page 14; EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, page 2; no covenant ratio is stated |
| Refinancing delay | Any liability-management move, exchange or extension affecting the 2028 notes (USD 856 million due), or revolver availability thin as the springing maturity test nears in 2028 | The first notes mature on 2028-07-01 and 2028-07-15 | Refinancing need and revolver maturity interact | 10-Q_2026-09-30_sm-20260930.htm.jsonl, pages 18–19; 10-K_2025-12-31_sm-20251231.htm.jsonl, page 158; clause status after the January 2026 amendment not established |
| Sponsor/shareholder action | Repurchases or dividends rising while net debt is above target, a debt-funded acquisition, or a concentrated holder emerging | Policy limits are not visible | Slower deleveraging and higher event risk | Business & governance (CP-1A); debt documents not supplied |
| Sector deterioration | The 12-month WTI strip falling from USD 90.76 per barrel toward the 2027 hedge swap price of USD 68.70 per barrel and its collar floor of USD 63.93 | Oil is 88.1% of revenue | Cash flow falls while hedges only partly offset | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 41; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 24; hedge coverage of volumes not stated |

### cp2.cp_model_strengths_weaknesses Strengths and weaknesses for the model

| direction | rank | label | mechanism | evidence_ids | status | source_id | source_locator | as_of |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STRENGTH | 1 | Liquidity and late maturity wall | USD 2,940 million of liquidity and no bond before July 2028 give time to absorb a price shock before refinancing | C16; C15 | READY | 10-Q_2026-09-30_sm-20260930.htm.jsonl | pages 17-19 | 2026-09-30 |
| STRENGTH | 2 | Free cash flow after capital expenditure | USD 845 million of free cash flow in nine months funds debt reduction and returns | C11; C3 | READY | 10-Q_2026-09-30_sm-20260930.htm.jsonl | pages 7-8 | 2026-09-30 |
| STRENGTH | 3 | Scale across four areas | 433.1 MBOE per day across four areas spreads operating risk | C17 | READY | 10-Q_2026-09-30_sm-20260930.htm.jsonl | pages 38-43 | 2026-09-30 |
| STRENGTH | 4 | Deleveraging conduct | Notes of USD 2,160 million retired with sale proceeds and cash flow lower net debt | C18 | READY | 10-Q_2026-09-30_sm-20260930.htm.jsonl | pages 20-21 | 2026-09-30 |
| WEAKNESS | 1 | Combined leverage not measured | No comparable twelve-month EBITDAX, so leverage rests on proxies of 1.12x and 1.42x | C5; C7 | READY | 10-Q_2026-09-30_sm-20260930.htm.jsonl | page 60 | 2026-09-30 |
| WEAKNESS | 2 | Oil and hedge exposure | Oil is 88.1% of revenue and hedge settlements cost USD 457 million in nine months | C8; C9 | READY | 10-Q_2026-09-30_sm-20260930.htm.jsonl | pages 13-14, 25 | 2026-09-30 |
| WEAKNESS | 3 | Stockholder returns with unseen limits | USD 353 million paid out while net debt is above target and debt-document limits are not supplied | C11 | READY | 10-Q_2026-09-30_sm-20260930.htm.jsonl | pages 7-8, 16-17 | 2026-09-30 |

### Credit metrics used from earlier modules

| Metric | Value | Period or date | Basis | Source |
| --- | --- | --- | --- | --- |
| Cash | 442 | 2026-09-30 | USD millions, reported | Financial foundation (CP-1) |
| Undrawn committed facilities | 2,498 | 2026-09-30 | USD millions, reported; commitments 2,500 less letters of credit 2 | Financial foundation (CP-1) |
| Liquidity | 2,940 | 2026-09-30 | USD millions, calculated by Financial foundation | Financial foundation (CP-1) |
| Total debt at carrying value | 6,614 | 2026-09-30 | USD millions; principal 6,456 | Financial foundation (CP-1) |
| Net debt at carrying value | 6,172 | 2026-09-30 | USD millions, calculated | Financial foundation (CP-1) |
| Net debt at carrying value | 7,527 and 6,416 | 2026-03-31 and 2026-06-30 | USD millions, calculated | Financial foundation (CP-1) |
| Net debt, company definition | 6,014 | 2026-09-30 | USD millions, principal basis | Financial foundation (CP-1) |
| Net debt after the final South Texas settlement | 6,167 | After 2026-09-30, day not stated | USD millions, pro forma stated by Financial foundation; pro forma net leverage not supplied | Financial foundation (CP-1) |
| Net debt to EBITDA (reported, calculated) | 1.06 | FY2025 | Times; SM Energy alone, excludes the 2026 merger and sale | Financial foundation (CP-1) |
| Total debt to EBITDA (reported, calculated) | 1.23 | FY2025 | Times; SM Energy alone | Financial foundation (CP-1) |
| Adjusted EBITDAX | 1,341 | Q3 2026 | USD millions, company non-GAAP | Financial foundation (CP-1) |
| Adjusted EBITDAX | 3,717 | Nine months 2026 | USD millions, company non-GAAP | Financial foundation (CP-1) |
| Adjusted EBITDAX margin on production revenue | 62.1% | Q3 2026 | Calculated by Financial foundation | Financial foundation (CP-1) |
| Adjusted EBITDAX margin on production revenue | 71.9% | FY2025 | Calculated by Financial foundation | Financial foundation (CP-1) |
| Adjusted EBITDAX margin on production revenue | 64.2% | Nine months 2026 | Calculated by Financial foundation | Financial foundation (CP-1) |
| Net cash from operating activities | 2,865 | Nine months 2026 | USD millions, reported | Financial foundation (CP-1) |
| Capital expenditures | 2,020 | Nine months 2026 | USD millions, reported as outflow | Financial foundation (CP-1) |
| Free cash flow after working capital | 845 | Nine months 2026 | USD millions, calculated | Financial foundation (CP-1) |
| Free cash flow after working capital | 411 | Q3 2026 | USD millions, calculated | Financial foundation (CP-1) |
| Free cash flow conversion of Adjusted EBITDAX | 22.7% | Nine months 2026 | Calculated by Financial foundation | Financial foundation (CP-1) |
| Capital expenditures to production revenue | 34.9% | Nine months 2026 | Calculated by Financial foundation | Financial foundation (CP-1) |
| Capital expenditures to production revenue | 45.8% | FY2025 | Calculated by Financial foundation | Financial foundation (CP-1) |
| Issuer adjusted free cash flow | 884 | Nine months 2026 | USD millions, company non-GAAP | Financial foundation (CP-1) |
| Issuer adjusted free cash flow | 397 | Q3 2026 | USD millions, company non-GAAP | Financial foundation (CP-1) |
| One-time integration and divested-asset cash costs | 227 | Nine months 2026 | USD millions, company estimate inside adjusted free cash flow | Financial foundation (CP-1) |
| Principal maturing in 2028 | 856 | 2026-09-30 | USD millions, contractual | Financial foundation (CP-1) |
| Largest principal maturing in one year | 1,350 | 2031 | USD millions, contractual | Financial foundation (CP-1) |
| Dividends paid | 187 | Nine months 2026 | USD millions | Financial foundation (CP-1) |
| Repurchase of common stock | 166 | Nine months 2026 | USD millions | Financial foundation (CP-1) |
| Stockholder payments | 353 | Nine months 2026 | USD millions, calculated by Business & governance | Business & governance (CP-1A) |
| Stockholder payments to free cash flow | 41.8% | Nine months 2026 | Calculated by Business & governance | Business & governance (CP-1A) |
| Notes retired for cash | 2,160 | Nine months 2026 | USD millions | Business & governance (CP-1A) |
| Run-rate synergies actioned (management) | about 400 | Q3 2026 | USD millions, original target 200 | Business & governance (CP-1A) |
| Repurchase authority remaining | 323 | 2026-09-30 | USD millions, to 2027-12-31 | Business & governance (CP-1A) |
| Net commodity hedge liability | 460 | 2026-09-30 | USD millions | Business & governance (CP-1A) |
| Hedge settlement loss | 457 | Nine months 2026 | USD millions | Business & governance (CP-1A) |
| Oil share of production revenue | 88.1% | Nine months 2026 | Calculated by Business & governance | Business & governance (CP-1A) |
| Oil share of production revenue | 84.1% | Q3 2026 | Calculated by Business & governance | Business & governance (CP-1A) |
| Production | 433.1 | Q3 2026 | MBOE per day, reported | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43 |
| Production by area | Permian 222.7; DJ Basin 119.4; South Texas 46.3; Uinta Basin 44.7 | Q3 2026 | MBOE per day, reported | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 38 |
| Realized price per BOE | 54.23 | Q3 2026 | USD, reported | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43 |
| Realized oil price | 86.19 against 65.28 | Nine months 2026 and 2025 | USD per barrel, reported | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43 |
| Realized price per BOE change | 19% | Nine months 2026 on 2025 | Reported | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43 |
| Lease operating expense per BOE | 7.02 | Q3 2026 | USD, reported | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43 |
| Production taxes per BOE | 3.47 | Q3 2026 | USD, reported | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43 |
| Transportation per BOE | 3.53 | Q3 2026 | USD, reported | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 43 |
| Weighted-average interest rate | 7.6% | Q3 2026 | Reported | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 53 |
| Delivery commitment deficiency payments | 205 | 2026-09-30 | USD millions, undiscounted maximum | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 22 |
| Customer concentration | 28% | FY2025 | One purchaser's share of production revenue, reported | 10-K_2025-12-31_sm-20251231.htm.jsonl, page 139 |
| 12-month WTI strip | 90.76 against 83.62 | 2026-10-22 and 2026-09-30 | USD per barrel | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 41 |
| Guidance, Q4 2026 | Production 435 to 445 MBOE per day; capital expenditures about 610 | Q4 2026 | MBOE per day; USD millions; management | EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, pages 2–3 |
| Guidance, 2026 | Oil 220 to 222 MBbl per day; capital expenditures about 2,750; cash taxes 100 to 120 | FY2026 | Management | EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, pages 2–3 |
| Reserve life index | 8.9 | 2025-12-31 | Years; SM Energy alone | 10-K_2025-12-31_sm-20251231.htm.jsonl, page 15 |
| Oil swaps 2027 | 12,542 MBbl at 68.70 | 2027 | USD per barrel | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 24 |
| Oil collars 2027 | 13,157 MBbl; floor 63.93; ceiling 72.37 | 2027 | USD per barrel | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 24 |
| Rigs running, Q3 2026 | Permian six; DJ Basin one; South Texas one; Uinta two | Q3 2026 | Count | 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 38 |
| Borrowing base and commitments | 5,000 and 2,500 | 2026-09-30 | USD millions, reaffirmed after the date | Financial foundation (CP-1) |
| Net debt on 2026-03-31 and 2026-09-30, company definition | 7,353 and 6,014 | Quarter ends | USD millions | Financial foundation (CP-1) |

## Calculations

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Adjusted EBITDAX to cash interest paid, Q3 2026, times | Adjusted EBITDAX 1,341 / cash interest 146 (146 = 331 - 185) | 9.18 | Financial foundation (CP-1); 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 60 |
| C2 | Adjusted EBITDAX to cash interest paid, nine months 2026, times | 3,717 / 331 | 11.23 | Financial foundation (CP-1); 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 60; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 8 |
| C3 | Adjusted EBITDAX less capital expenditures to cash interest paid, nine months 2026, times | (3,717 - 2,020) / 331 = 1,697 / 331 | 5.13 | Financial foundation (CP-1); 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 60; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 8 |
| C4 | Run-rate Adjusted EBITDAX, USD millions (Analyst Judgement: four times the third quarter, not a twelve-month figure) | 4 x 1,341 | 5,364 | Financial foundation (CP-1); 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 60 |
| C5 | Run-rate net leverage on the company's net debt, times (Analyst Judgement proxy, not a measurement) | Net debt 6,014 / run-rate 5,364 | 1.12 | Financial foundation (CP-1); EX-99.1_2026-11-03_exhibit99111032026er.htm.jsonl, page 14 |
| C6 | Run-rate net leverage on carrying-value net debt, times (Analyst Judgement proxy, not a measurement) | Net debt 6,172 / run-rate 5,364 | 1.15 | Financial foundation (CP-1) |
| C7 | Mechanical net leverage on the company's net debt, times (mixed perimeter, not a measurement) | 6,014 / 4,225 (FY2025 2,255 + nine months 2026 3,717 - nine months 2025 1,747) | 1.42 | Financial foundation (CP-1) |
| C8 | Hedge settlement loss as a share of production revenue, nine months 2026 | 457 / 5,793 | 7.9% | Financial foundation (CP-1); 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 25 |
| C9 | Adjusted EBITDAX margin before hedge settlement losses, nine months 2026 (Normalized) | (3,717 + 457) / 5,793 | 72.1% | Financial foundation (CP-1); 10-Q_2026-09-30_sm-20260930.htm.jsonl, page 25 |
| C10 | Adjusted EBITDAX margin before hedge settlement gains, FY2025 (Normalized) | (2,255 - 132) / 3,138 | 67.7% | Financial foundation (CP-1); 10-K_2025-12-31_sm-20251231.htm.jsonl, page 136 |
| C11 | Free cash flow after stockholder payments, nine months 2026, USD millions | 845 - 353 | 492 | Financial foundation (CP-1); Business & governance (CP-1A) |
| C12 | Principal due 2028 to 2030, USD millions | 856 + 750 + 1,000 | 2,606 | Financial foundation (CP-1) |
| C13 | Share of principal due 2028 to 2030 | 2,606 / 6,456 | 40.4% | Financial foundation (CP-1) |
| C14 | Principal due 2031 to 2034, USD millions | 1,350 + 750 + 750 + 1,000 | 3,850 | Financial foundation (CP-1) |
| C15 | Share of principal due 2031 to 2034 | 3,850 / 6,456 | 59.6% | Financial foundation (CP-1) |
| C16 | Liquidity to carrying-value net debt, 2026-09-30 | 2,940 / 6,172 | 47.6% | Financial foundation (CP-1) |
| C17 | Capital expenditures to Adjusted EBITDAX, Q3 2026 | 711 / 1,341 | 53.0% | Financial foundation (CP-1) |
| C18 | Net debt after the final South Texas settlement, USD millions (stated by Financial foundation) | 6,172 - 5 | 6,167 | Financial foundation (CP-1) |

## Gaps

| ID | Type | Severity | What is missing or conflicting | Modules affected | Effect | Remediation | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| G1 | Period gap | MATERIAL | No comparable twelve-month EBITDA, cash interest or leverage after the merger and the South Texas sale | Fundamental credit; Downside; Forward credit model | Leverage is bracketed by a run-rate proxy and a mechanical sum, neither a measurement; the adequate view of leverage is a judgement | Supply combined-company pro forma EBITDAX or wait for four post-sale quarters | Open |
| G2 | Source gap | MATERIAL | Executed credit agreement as amended and indentures; covenant ratio and headroom | Legal & covenants; Covenant capacity | Liquidity and refinancing conclusions assume compliance and revolver availability as the company states them | Supply the executed documents and compliance certificate | Open |
| G3 | Source gap | MINOR | Hedge coverage against forecast volumes | Downside; Rates, FX & hedging | Downside cushion cannot be sized | Supply the hedge ratio | Open |
| G4 | Source gap | MINOR | Maintenance and growth capital split | Forward credit model | Capex flexibility cannot be sized | Supply management's split | Open |
| G5 | Source gap | MINOR | Combined reserve report and post-merger customer concentration | Recovery & fulcrum; Fundamental credit | Asset coverage and counterparty concentration not updated | Supply combined reserve report | Open |
| G6 | Source gap | MINOR | Peer set, market quotes and ratings detail | Peer benchmark; Market-implied risk; Ratings & triggers | No comparison with other leveraged oil and gas issuers | Supply peer set and ratings | Open |

## Next module

The orchestrator selects the next module.
