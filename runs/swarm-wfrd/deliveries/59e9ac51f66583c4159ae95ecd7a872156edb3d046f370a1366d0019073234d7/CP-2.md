---
module_id: CP-2
issuer_id: wfrd
analysis_date: 2026-11-05
module_status: Complete with limitations
---

## Request

Weatherford International plc (issuer id wfrd), as of 2026-11-05, credit snapshot pathway. Scope: the fundamental credit synthesis from the financial foundation, the business and governance facts and the supplied filings, without legal documents, peer data or market prices.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_wfrd-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 (audited by KPMG LLP) | 2026-02-04 (signature and audit report date) | dac00725a2c3d644200d2314099fff47d7f3eb762778ea3920935ae50ab28ce2 | Competition, customers, seasonality, risk factors, debt maturity table and covenants |
| 10-Q_2026-09-30_wfrd-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-21 (signature date) | 678145577a1f518a8936739eae48408772c69c0e9c66ea7073ec677a8f4ec5f5 | Latest statements, segment results, outlook, liquidity, ratings, receivables, acquisition and redomestication |
| EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-20 | f95c1562ed4f41199ffe8f8d250788ec78ae6a54ea4c8df350ecd996b8e7fb5e | Management outlook, adjusted free cash flow, redemption notice and ratings actions |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 855ac2f1f1d176f5a027e7f65aeb849da9fdfdffbb2289f0d9dcf592344eca1f | Source inventory and gaps |
| Financial foundation | CP-1 | 419daec13af95398eb1bcd2f2f178ccc359f028381f7da7d27d27a573247b5db | Statements, net debt, leverage, cover, liquidity, maturities and post-balance-sheet adjustments |
| Business & governance | CP-1A | 1eebedb75391434035af77251d32cff41bbe9b1e01dbdbac12e6e746e0f21245 | Business mix, ownership, governance, capital allocation, events and the sponsor and governance risk level |

## Findings

### Bottom line

Weatherford can service and refinance its debt from cash, with net debt of USD 319 million (USD 321 million pro forma for the October 30, 2026 redemption of the 2030 notes), but earnings, down about a third from FY2024, are the weak side.
Basis: Financial foundation (CP-1); calculation C1; calculation C2; calculation C12; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3

Cash of USD 1,161 million covers the USD 264 million of debt now classified as current 4.40 times, and no bond matures before 2033 once the 2030 notes are redeemed; Financial foundation states no pro forma cash after the redemption, so cash after it is not established. The primary downside path is a prolonged Middle East disruption that lowers EBITDA further while receivable collections reverse and shareholder returns continue, which would raise gross leverage from 1.71x but would take a long time to threaten liquidity.
Basis: Financial foundation (CP-1); calculation C26; calculation C27; calculation C28; calculation C7; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16

### Key findings

Leverage is low on a net basis, and the pro forma figures do not change that. Net debt at September 30, 2026 was USD 319 million, or 0.37x last-twelve-months EBITDA of USD 867 million; pro forma for the October 30, 2026 redemption of the 2030 notes it is USD 321 million and 0.37x, and pro forma for the December 3, 2026 dividend payment it is USD 338.93 million and 0.39x. Gross debt of USD 1,480 million is 1.71x, up from 1.28x at FY2024 because EBITDA fell by more than debt did; on the company's adjusted EBITDA of USD 1,001 million the net and gross figures are 0.32x and 1.48x.
Basis: Financial foundation (CP-1); calculation C1; calculation C2; calculation C3; calculation C4; calculation C5; calculation C6; calculation C7; calculation C8; calculation C9; calculation C10; calculation C11; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16

Earnings are the weakest dimension and carry the downside. Last-twelve-months reported EBITDA is 32.32% below FY2024 and adjusted EBITDA 27.57% below, on revenue 14.95% lower at USD 4,689 million. The Middle East, North Africa and Asia region, 40.26% of revenue, fell by USD 191 million over nine months because of the Iran conflict, and Well Construction and Completions margin fell to 23.91% from 27.18%, while Production and Intervention margin rose to 21.27%. No backlog or contract duration is disclosed, so revenue visibility beyond the company's expectation of an improving fourth quarter is not established.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C12; calculation C13; calculation C14; calculation C15; calculation C16; calculation C17; calculation C18; calculation C19; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 29

Cash flow quality improved in 2026 but is helped by receivable collections. Free cash flow after capital expenditures was USD 362 million over nine months against USD 233 million, which is 50.99% of adjusted EBITDA against 30.03%, and capital expenditures were 4.15% of revenue, inside the company's 3% to 5% range. USD 186 million of operating cash flow came from receivable collections, so the figure overstates the repeatable level; against that, factoring proceeds fell by USD 215 million, so the cash flow does not rest on selling receivables.
Basis: Financial foundation (CP-1); calculation C20; calculation C21; calculation C22; calculation C23; calculation C24; calculation C25; calculation C44; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32

Liquidity covers every scheduled obligation, with two qualifications. Cash of USD 1,161 million (pro forma cash after the redemption is not established), of which USD 164 million cannot be immediately repatriated, plus USD 599 million of the undrawn facility that can be borrowed, gives USD 1,760 million against gross debt of USD 1,480 million, or 1.19x; USD 167 million of the facility is for performance letters of credit only, and USD 531 million of letters of credit and USD 534 million of surety bonds could be called. Covenant levels are stated, but their definitions and the company's calculated ratios are not, so covenant headroom is not established here.
Basis: Financial foundation (CP-1); calculation C26; calculation C32; calculation C33; calculation C30; calculation C31; calculation C34; calculation C45; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 34

Refinancing risk is low because the maturity wall is distant and shrinking. The 2033 notes carry USD 1,200 million of principal, the credit agreement runs to September 18, 2030 once the 2030 notes are gone, and the annual report schedules only USD 29 million of maturities in 2026, USD 20 million in 2027, USD 9 million in 2028 and USD 4 million in 2029, all finance leases. Redeeming USD 236 million of 2030 notes from cash saves about USD 20 million of annual cash interest; no filing yet confirms completion.
Basis: Financial foundation (CP-1); calculation C35; calculation C36; calculation C37; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 86

Governance and financial policy add little risk on the evidence available. Business & governance names no sponsor or controlling holder and rates sponsor and governance risk low on documented behaviour; shareholder returns of USD 113 million are 31.22% of nine-month free cash flow, and the 2025 refinancing and the planned redemption reduce debt. The open questions are the intellectual property transition inside the move to Delaware and three changes of note obligors since 2022, which cannot be tested without the indentures.
Basis: Business & governance (CP-1A); calculation C38; calculation C47; calculation C20; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16

Customer and country concentration is the second-order risk. The largest Mexican customer is 14% of net receivables and has a record of late payment, and Russia is 9% of revenue and holds USD 128 million of cash. At these levels they are collection and trapped-cash risks and not solvency risks, but they sit in the same regions as the disruption that is lowering earnings.
Basis: Business & governance (CP-1A); calculation C41; calculation C42; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32

The outlook is for gradual recovery with the Middle East timing uncertain. The company expects activity to improve through the rest of 2026 in North America and Latin America and from the NCS acquisition, and a meaningful fourth-quarter ramp in adjusted EBITDA, and it calls the pace of Middle East recovery the main uncertainty. For scale, a fourth quarter at the fourth-quarter 2025 level of USD 291 million would be 14.57% above the third quarter's USD 254 million; WTI averaged USD 84.98 over nine months against USD 67.40 a year earlier, a price rise that has not lifted Middle East activity.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 29; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 3; Financial foundation (CP-1); calculation C39; calculation C40

### Contrary evidence and what would change the view

The strongest evidence against a cautious view is that net leverage has fallen to 0.37x (0.37x pro forma for the October 30, 2026 redemption), that nine-month free cash flow was USD 362 million, that each agency holds a positive outlook, and that management still expects a meaningful fourth-quarter recovery. A fourth quarter that fails to lift adjusted EBITDA above the third quarter's USD 254 million, a reversal of the USD 186 million of receivable collections, or a rise in the largest Mexican customer's 14% share of receivables would turn the view negative. Adjusted EBITDA holding near USD 1,001 million with free cash flow conversion near 50.99% would turn it positive.
Basis: Financial foundation (CP-1); calculation C6; calculation C20; calculation C48; calculation C24; calculation C41; calculation C11; calculation C21; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 3

### Limitations

- No indenture or credit agreement was supplied, so the low refinancing-risk conclusion rests on maturities and covenant levels as the filings summarise them, and guarantor coverage, ranking and covenant headroom are untested.
- No peer, market price or rating agency report was supplied, so the credit view is absolute: it does not say how the profile compares with other oilfield services issuers or how the notes trade.
- The fourth-quarter recovery the company expects is not quantified and its Middle East timing is open, so the conclusion that earnings are the weakest dimension could move either way within a quarter.
- Receivable collections and factoring are reported only as cash flow lines, so the repeatable level of free cash flow is bounded, not measured.
- The 2030 notes redemption and the dividend payment are plans after the latest filing, and Financial foundation states no pro forma cash, so liquidity after October 30, 2026 is not established.

### Strengths and weaknesses

Strengths. Net debt is small against earnings: net debt of USD 319 million (USD 321 million pro forma) is 0.37x last-twelve-months EBITDA (0.37x pro forma), so a further decline in EBITDA would raise leverage but not threaten the debt service capacity of a group that holds USD 1,161 million of cash (pro forma cash not established). The company controls its largest discretionary uses of cash: capital expenditures are 4.15% of revenue against a guided range of 3% to 5%, and USD 246 million of buyback authorisation can be left unused, which gives a means to protect cash in a downturn. The business spans three segments and four regions, and Production and Intervention margin rose to 21.27% while Well Construction and Completions fell, so the weakness is not uniform. The debt profile has no bond maturity before 2033 once the 2030 notes are redeemed, and the company is retiring them from cash.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C6; calculation C26; calculation C23; calculation C19; calculation C18; calculation C36; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 38

Weaknesses. Earnings fell by about a third from FY2024 because a region that supplies 40.26% of revenue was disrupted, and the company gives no backlog to show when earnings recover. Part of the 2026 cash flow is receivable collections of USD 186 million that will not repeat, so reported free cash flow is not a run-rate. The largest Mexican customer, 14% of net receivables, pays late, and USD 164 million of cash cannot be immediately repatriated. Ownership and legal documents were not supplied, so control rights, guarantor coverage and covenant headroom are unknown, and the planned move to Delaware carries an intellectual property transition whose creditor effect is undisclosed.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C12; calculation C17; calculation C24; calculation C41; calculation C32; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32

Business risk in credit terms. The industry has four large competitors and customers that are mostly national and international oil companies, so pricing and technology pressure come from both sides, and spending follows oil prices and rig counts. Political and trade developments matter directly: the Iran conflict has cut Middle East activity, Russia carries sanctions and nationalisation risk, and tariffs are described as a possible cost. Technology and the energy transition are a long-run factor for the products and the credit, but the filings give no evidence that either is a primary driver over the debt's life.
Basis: 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 7; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 8; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 19; Business & governance (CP-1A)

### Business model, margin resilience and cash conversion

The business sells services and equipment across the well life cycle, with services at 61.35% of nine-month revenue, so revenue follows customer drilling and workover activity and not long-term contracts, and the filings give no backlog. Cost of products and services is 69% of revenue, headcount reductions lowered personnel costs and restructuring charges fell to USD 28 million from USD 51 million, which shows some cost flexibility, so margins can be defended under moderate volume pressure but, as an analyst judgement, not under a deep fall in activity. Capital intensity is moderate, working capital is the main swing factor in cash flow, and the receivable position of a Mexican customer with a history of late payment is the observed pressure point.
Basis: Business & governance (CP-1A); Financial foundation (CP-1); 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32

### Outlook, tailwinds and headwinds

Over the next twelve to twenty-four months the tailwinds are higher oil prices, higher worldwide rig counts, the NCS completions portfolio, the end of the 2030 notes' cash interest and, from 2027, the USD 20 million to USD 30 million of annual cash savings the company expects from the redomestication. The headwinds are the Middle East disruption, the new tariffs the company describes as a possible cost, the ongoing Russia exposure, and the cost of integrating NCS. Over three to five years the filings point to energy security and offshore and deepwater spending as structural supports, which is management language and is not evidenced by contract data in the sources.
Basis: 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 29; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 6; Business & governance (CP-1A)

### Qualitative downside scenario

The scenario starts with the Middle East disruption continuing through 2027 while oil prices fall back from their 2026 level. The first operational break would be further declines in drilling-related, wireline, liner hanger and cementation activity in a region that supplies 40.26% of revenue, which pushes down segment EBITDA, as it already has in Well Construction and Completions. Cost of products and services is 69% of revenue, so EBITDA would fall faster than revenue unless headcount and supply costs are cut as quickly as activity falls. The financial transmission is lower operating cash flow, aggravated by a reversal of the receivable collections that supported 2026 and by slower payment from the largest Mexican customer, while dividends and buybacks continue unless the company pauses them. Liquidity would hold: cash of USD 1,161 million (pro forma cash not established) is 78.45% of gross debt, the facility adds USD 599 million, and the company has levers in capital expenditures, the buyback and factoring. Gross leverage would rise above 1.71x and net leverage above 0.37x, and the observable triggers are a fourth-quarter adjusted EBITDA at or below USD 254 million, a growing share of receivables owed by the Mexican customer, cash that cannot be repatriated rising above USD 164 million, and any draw on the facility. Resilience appears sufficient to avoid liquidity distress, but the covenant tests cannot be checked without the credit agreement.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C17; calculation C26; calculation C29; calculation C30; calculation C7; calculation C6; calculation C39; calculation C41; calculation C32; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32

### Overall credit view

Overall, Weatherford presents a diversified business profile supported by a small net debt of USD 319 million (USD 321 million pro forma), cash of USD 1,161 million (pro forma cash not established) and a distant maturity wall, but credit quality is constrained by earnings that have fallen about a third from FY2024 and by concentration in a disrupted region. Cash-flow durability is adequate and not strong, because USD 186 million of 2026 operating cash flow was receivable collections. Refinancing capacity is likely to depend on an EBITDA recovery before the credit agreement matures in 2030 and on its legal terms, which were not supplied. The primary downside path is a prolonged Middle East disruption with collections reversing. Further analysis would require the indentures and credit agreement, the proxy statement, peer and market data, backlog, and the company's covenant calculations. Fundamental credit analysis is complete; top risk: earnings concentration in the Middle East.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C1; calculation C12; calculation C24; calculation C26

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 18 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 6 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 5 |
| Fields present | 20 |
| Fields total | 22 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 3 |

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| Iran conflict | Cuts Middle East oilfield activity | Documentary Fact | Revenue and EBITDA | MENA revenue down 191 over nine months |
| Revenue and EBITDA | Lower earnings raise leverage ratios | Analyst Interpretation | Gross leverage | 1.71x on LTM EBITDA, from 1.28x at FY2024 |
| Receivable collections | Lifted 2026 cash from operations | Documentary Fact | Free cash flow | 186 of 503 operating cash flow |
| Cash on hand | Pays off the 2030 notes without new debt | Management Language | Refinancing risk | Redemption funded from cash on hand |
| Largest Mexican customer | Late payment delays cash conversion | Documentary Fact | Liquidity | 14% of net receivables; late-payment history |
| Shareholder returns | Compete with debt reduction for cash | Documentary Fact | Liquidity | 113 paid in nine months |
| Redomestication | IP transition could move assets | Insufficient Information | Creditor ranking | Transfer terms not disclosed |
| Oil price and rig counts | Drive customer spending | Management Language | Revenue and EBITDA | Company ties results to oil price and rigs |
| Russia operations | Sanctions risk on cash and assets | Documentary Fact | Liquidity | 128 of cash in Russia |
| Liquidity buffer | Absorbs an earnings shortfall | Analyst Interpretation | Default risk | Cash 1,161 and borrowable facility 599 |

### T2.1 - Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation |
| --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl | High | FY2025 with FY2024 comparatives | Weatherford International plc and subsidiaries | Competition, customers, seasonality, debt maturity table, covenants | Audited; the 2026 position comes from later filings |
| S2 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl | High | Q3 and 9M 2026; balance sheet at 2026-09-30 | Weatherford International plc and subsidiaries | Statements, segments, outlook, liquidity, ratings, receivables | Unaudited |
| S3 | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl | Medium | Q3 2026 and last twelve months | Weatherford International plc and subsidiaries | Management outlook, adjusted measures, redemption notice | Management language and non-GAAP measures |
| H1 | Source readiness (CP-0) | Medium | As of 2026-11-05 | Weatherford International plc | Source inventory and gaps | No legal documents, proxy statement or market data |
| H2 | Financial foundation (CP-1) | High | FY2024 to 2026-09-30 | Weatherford International plc and subsidiaries | Statements, net debt, leverage, cover, liquidity, maturities, pro forma adjustments | EBITDA (Reported) is calculated; the 2030 notes redemption is a plan |
| H3 | Business & governance (CP-1A) | Medium | FY2025 to 2026-10-30 | Weatherford International plc | Business mix, ownership, governance, events, risk level | Proxy statement and indentures not supplied |

### T2.10 - Materiality filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Earnings decline concentrated in the Middle East | LTM EBITDA (Reported) 32.32% below FY2024; MENA is 40.26% of revenue and fell by 191 in nine months | Lower activity cuts EBITDA faster than costs can be cut | Raises leverage ratios and is the main path to weaker credit quality | Negative | High |
| 2 | Low net debt and net leverage | Net debt 319 (321 pro forma), 0.37x LTM EBITDA of 867 | Little debt to service from cash flow | Debt service needs are small against cash flow at the current earnings level | Positive | High |
| 3 | Liquidity and a distant maturity wall | Cash 1,161, borrowable facility 599, no bond maturity before 2033 after the 2030 notes are redeemed | Cash covers current debt 4.40 times, so there is no refinancing event to fund | Low refinancing risk through the cycle | Positive | High |
| 4 | Free cash flow generation | Free cash flow 362 in nine months against 233; 50.99% of adjusted EBITDA | Capital expenditures at 4.15% of revenue and little factoring | Supports debt reduction and shareholder returns | Positive | Medium |
| 5 | Receivable collections inside 2026 cash flow | 186 of the 503 operating cash flow came from receivable collections | Working capital release cannot repeat and can reverse | Free cash flow overstates the repeatable level | Negative | Medium |
| 6 | Largest Mexican customer and trapped cash | 14% of net receivables with late payment history; 164 of cash cannot be immediately repatriated; 128 of cash in Russia | Slow collection and cash controls hold cash in the wrong place | Reduces usable liquidity below the headline | Negative | Medium |
| 7 | Shareholder returns | 113 of dividends and buybacks, 31.22% of free cash flow; 246 of authorisation remains | Discretionary cash outflow competes with deleveraging | Affordable now; a risk if earnings fall further | Negative | Medium |
| 8 | Debt management | 2025 refinancing to 2033 notes; redemption of the remaining 236 of 2030 notes; about 20 of annual interest saved | Cuts gross debt and interest cost | Supports credit improvement and the positive outlooks | Positive | High |
| 9 | Redomestication and note obligor changes | Intellectual property transition under evaluation; three co-issuer changes since 2022 | Could move assets or alter guarantor coverage | Creditor effect not established | Negative | Low |

### T2.12 - Monitoring triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
| --- | --- | --- | --- | --- |
| Revenue decline | Fourth-quarter revenue below the third quarter's 1,143, against the company's expectation of improving activity | Shows whether the Middle East disruption is easing | Further decline would deepen the earnings fall | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 29; threshold is the company's own outlook, no numeric guidance |
| EBITDA margin pressure | Quarterly adjusted EBITDA at or below 254 or margin below the third quarter's 22.2% | A meaningful fourth-quarter ramp is the company's stated expectation | Missing it would raise leverage and weaken cash cover | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 1; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 3; company states no numeric target |
| FCF deterioration | Quarterly adjusted free cash flow below the third quarter's 155, or receivables rising again from 1,105 | Collections supported 2026 cash flow | Reversal removes the cushion that is funding the notes redemption | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 1; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Liquidity reduction | Cash falling from 1,161 or any draw on the facility; the covenant minimum liquidity is 250 | Cash and the borrowable facility are the main protection | A drawn facility or falling cash would signal stress | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11; definition of the covenant's liquidity measure not supplied |
| Leverage increase | Net debt over EBITDA (Reported) above 0.56x (FY2024) or gross above 1.71x; covenant maximum total net leverage 3.50x | Leverage is the most direct measure of debt capacity | Rising leverage with falling EBITDA is the primary downside path | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11; covenant definitions not supplied, so headroom is not inferred |
| Refinancing delay | Redemption of the 2030 notes not completed on 2026-10-30; credit agreement maturity of 2030-09-18 | The redemption removes the nearest maturity and the springing facility maturity | A delay or a draw to fund it would show tighter liquidity | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; completion not confirmed in the sources |
| Sponsor/shareholder action | Intellectual property transfer terms, buyback pace against the 246 of authorisation, or debt-funded distributions | Financial policy and structure changes can shift value away from creditors | Adverse change would end the low governance reading | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 38; no indenture or proxy statement supplied |
| Sector deterioration | WTI below the 9M 2026 average of 84.98 or a worldwide rig count below 1,831 | Customer spending follows oil prices and rigs | Weaker prices would pressure activity beyond the Middle East | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 19; no company-specific sensitivity given |

## Calculations

| ID | Calculation | Inputs | Result | Unit |
| --- | --- | --- | --- | --- |
| C1 | Net debt at 2026-09-30, carried from Financial foundation | Total debt 1,480 less Cash & Equivalents 1,161 | 319 | US$m |
| C2 | Net debt after the redemption of the 2030 notes on 2026-10-30, carried (pro forma) | Net debt 319 plus 2 (carrying value removed 234, cash paid 236) | 321 | US$m |
| C3 | Net leverage after the redemption, carried (pro forma) | 321 divided by LTM EBITDA (Reported) 867 | 0.37x | x |
| C4 | Net debt after the dividend payment on 2026-12-03, carried (pro forma) | Net debt 319 plus 19.93 | 338.93 | US$m |
| C5 | Net leverage after the dividend payment, carried (pro forma) | 338.93 divided by LTM EBITDA (Reported) 867 | 0.39x | x |
| C6 | Net leverage on reported EBITDA, 2026-09-30, carried | Net debt 319 divided by LTM EBITDA (Reported) 867 | 0.37x | x |
| C7 | Gross leverage on reported EBITDA, 2026-09-30, carried | Total debt 1,480 divided by LTM EBITDA (Reported) 867 | 1.71x | x |
| C8 | Gross leverage on reported EBITDA, FY2024, carried | Total debt 1,634 divided by EBITDA (Reported) 1,281 | 1.28x | x |
| C9 | Net leverage on adjusted EBITDA, 2026-09-30, carried | Net debt 319 divided by LTM EBITDA (Adjusted) 1,001 | 0.32x | x |
| C10 | Gross leverage on adjusted EBITDA, 2026-09-30, carried | Total debt 1,480 divided by LTM EBITDA (Adjusted) 1,001 | 1.48x | x |
| C11 | LTM EBITDA (Reported) and (Adjusted) at 2026-09-30, carried | Reported 867; adjusted 1,001 (the issuer states 1,001) | 867 and 1,001 | USD millions |
| C12 | Fall in LTM EBITDA (Reported) from FY2024, carried | 1 less 867 divided by 1,281 | 32.32% | % |
| C13 | Fall in LTM EBITDA (Adjusted) from FY2024, carried | 1 less 1,001 divided by 1,382 | 27.57% | % |
| C14 | Fall in LTM revenue from FY2024, carried | 1 less 4,689 divided by 5,513 | 14.95% | % |
| C15 | LTM revenue at 2026-09-30, carried | FY2025 4,918 plus 9M 2026 3,400 less 9M 2025 3,629 | 4,689 | USD millions |
| C16 | Fall in Middle East, North Africa and Asia revenue, 9M 2026, carried from Business & governance | 1,560 less 1,369 | 191 | USD millions |
| C17 | Middle East, North Africa and Asia share of revenue, 9M 2026, carried | 1,369 divided by 3,400 | 40.26% | % |
| C18 | Well Construction and Completions segment adjusted EBITDA margin, 9M 2026 and 9M 2025, carried | 317 divided by 1,326; 371 divided by 1,365 | 23.91% and 27.18% | % |
| C19 | Production and Intervention segment adjusted EBITDA margin, 9M 2026, carried | 197 divided by 926 | 21.27% | % |
| C20 | Free cash flow, 9M 2026 and 9M 2025, carried | 503 less 141; 408 less 175 | 362 and 233 | USD millions |
| C21 | Free cash flow conversion, 9M 2026 | 362 divided by adjusted EBITDA 710 | 50.99% | % |
| C22 | Free cash flow conversion, 9M 2025 | 233 divided by adjusted EBITDA 776 | 30.03% | % |
| C23 | Capital expenditures as a share of revenue, 9M 2026, carried | 141 divided by 3,400 | 4.15% | % |
| C24 | Receivable collections inside 9M 2026 operating cash flow, carried | Accounts receivable change 186 of operating cash flow 503 | 186 | USD millions |
| C25 | Fall in factoring proceeds, 9M 2026 against 9M 2025, carried | 16 less 231 | 215 | USD millions |
| C26 | Cash and cash equivalents at 2026-09-30, carried | Balance sheet | 1,161 | US$m |
| C27 | Debt classified as current at 2026-09-30, carried | Current portion of long-term debt: 2030 notes 234 plus finance leases 30 | 264 | US$m |
| C28 | Cash cover of current debt | Cash 1,161 divided by current debt 264 | 4.40 times | times |
| C29 | Cash as a share of gross debt | 1,161 divided by 1,480 | 78.45% | % |
| C30 | Cash plus facility available for borrowing, carried | Cash 1,161 plus revolving tranche headroom 599 | 1,760 | US$m |
| C31 | Cash plus borrowable facility over total debt | 1,760 divided by 1,480 | 1.19x | x |
| C32 | Cash that cannot be immediately repatriated, carried | Stated by the company | 164 | US$m |
| C33 | Undrawn facility after letters of credit and the borrowable part, carried | Commitment 1,000 less letters of credit gives 766; of it 599 can be borrowed and 167 is for performance letters of credit only | 766, 599 and 167 | US$m |
| C34 | Letters of credit and surety bonds that could be called, carried | Letters of credit 531 (1 plus 233 plus 297); surety bonds 534 | 531 and 534 | USD millions |
| C35 | Scheduled debt maturities at 2025-12-31 before 2030, carried | 2026 29; 2027 20; 2028 9; 2029 4; 2030 238; thereafter 1,206 | 29, 20, 9 and 4 | US$m |
| C36 | 2033 senior notes principal and 2030 notes principal, carried | 2033 notes 1,200; 2030 notes 236 | 1,200 and 236 | US$m |
| C37 | Annual cash interest saved by redeeming the 2030 notes, carried | Stated by the company as approximately 20 | 20 | USD millions |
| C38 | Shareholder returns and their share of free cash flow, 9M 2026, carried from Business & governance | Dividends 59 plus buybacks 54 = 113; 113 divided by 362 | 113 and 31.22% | USD millions |
| C39 | Fourth-quarter 2025 adjusted EBITDA (calculated) against Q3 2026 adjusted EBITDA | Q4 2025: FY2025 1,067 less 9M 2025 776 = 291; Q3 2026 254; 291 divided by 254 less 1 | 14.57% | % |
| C40 | Average WTI price, 9M 2026 and 9M 2025 | Stated by the company in dollars per barrel | 84.98 and 67.40 | USD |
| C41 | Largest Mexican customer share of net receivables at 2026-09-30, carried | Stated by the company | 14% | % |
| C42 | Russia share of revenue and cash held in Russia, 9M 2026, carried | Stated by the company | 9% and 128 | % and USD millions |
| C43 | NCS acquisition total consideration, carried | Stated by the company | 128 | USD millions |
| C44 | Capital spend guidance, stated | 3% to 5% of revenue over a 12 to 18 month rolling period | 3% to 5% | % |
| C45 | Credit agreement financial covenant levels, stated | Minimum liquidity 250; minimum interest coverage 2.50x; maximum total net leverage 3.50x; maximum secured net leverage 1.50x | Not calculated | - |
| C46 | Cash interest cover, carried | LTM EBITDA (Reported) 867 divided by LTM cash interest paid 111; adjusted 1,001 divided by 111 | 7.81x and 9.02x | x |
| C47 | Sponsor and governance risk level, carried from Business & governance | Low on documented behaviour | Low | - |
| C48 | Ratings stated by the company | Moody's Ba2, S&P BB, Fitch BB, each with a positive outlook | Stated | - |

## Gaps

The gaps below name what is missing, the conclusion it limits and the action that would close it.

| Gap | Effect | Severity | Action |
| --- | --- | --- | --- |
| No indenture or credit agreement was supplied | Covenant headroom, guarantor coverage and ranking are not established | Medium | Obtain the documents |
| No peer, market price or rating agency report was supplied | The credit view is absolute and gives no relative value | Medium | Supply dated market and peer data |
| Backlog and contract duration are not disclosed | Revenue durability beyond the company's outlook is not established | Low | Obtain investor presentations |
| No pro forma cash after the 2030 notes redemption is stated | Liquidity after 2026-10-30 is not established | Low | Check the next filing |
| Repeatable free cash flow cannot be separated from receivable collections | The free cash flow conclusion is bounded | Low | Obtain a working capital breakdown |
| Intellectual property transition and obligor changes are undocumented | The creditor effect of the redomestication is not established | Medium | Read the redomestication proxy materials and supplemental indentures |

## Next module

The orchestrator selects the next module.
