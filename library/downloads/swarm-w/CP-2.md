---
module_id: CP-2
module_name: FundamentalCredit
issuer_id: w
issuer_name: Wayfair Inc.
analysis_date: 2026-11-05
pathway: credit_snapshot
run_id: w-2026-11-05-credit_snapshot-host
---

## Request

Wayfair Inc. (issuer id w), as of 2026-11-05, credit_snapshot pathway (the full credit assessment). Scope: the fundamental credit synthesis of the business, ownership, operating and cash-flow model, liquidity, refinancing position and downside path, built on the three earlier module answers and the supplied filings.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_w-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-19 (date signed; filing date not stated) | 8ef4121e11689a0c5565962f85cfafc125f39e54e08df2c3b6c79eaf68e84e4d | Competition, seasonality, risk factors, covenant description, secured and convertible note terms, lease and purchase commitments, control structure |
| 10-Q_2026-03-31_w-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-30 (date signed; filing date not stated) | 79f74f0ba7972d92f75742a90568a879936b4ecf939af4026c967768203f5019 | Not used for any figure in this module |
| 10-Q_2026-06-30_w-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-04 (date signed; filing date not stated) | e52476a4ad53b4396b19ba631702cd30b522eb54aecabc978fa654467e46935a | 2034 secured notes terms |
| 10-Q_2026-09-30_w-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-04 (date signed; filing date not stated) | 9224a05a14ec554aa7f19d7d2ae6869a07a996f1d60af972e32e1595aefdd8c3 | Latest operating results, working capital, liquidity, convertible note conversion status, trade-policy commentary, repurchase table |
| EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl | Exhibit 99.1 earnings release for the first quarter ended March 31, 2026 | 2026-04-30 | a3debc23ce5c3027daa8862793a0e092539f933475881f34dd98f47a74a5cd40 | Not used for any figure in this module |
| EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl | Exhibit 99.1 earnings release for the second quarter ended June 30, 2026 | 2026-08-04 | bd4c1a88b49b8e4441931ccafc159f4e1f6d02b8d8bf7918ce20a28d44352f87 | Not used for any figure in this module |
| EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl | Exhibit 99.1 earnings release for the third quarter ended September 30, 2026 | 2026-11-04 | 2907d0c055207f89b1a08967b4ff5b2fe5bb05c815f0f3ad4e1479f1b9a353cb | Third-quarter operating metrics and management commentary; absence of a quantified outlook |
| Source readiness (CP-0) | Source readiness module answer for this run | 2026-11-05 | 43399c8cef27a5fea1c5523c8802a00ed6679b3ea634675ab7f84523ab1a7ba4 | Source list, document dates and gaps |
| Financial foundation (CP-1) | Financial foundation module answer for this run | 2026-11-05 | 0c5422837fabafe76ecb1185b86004c1355f61493dee84c8b96fbd07321b0efa | Statements, net debt, leverage and coverage, liquidity, maturity ladder, definition conflicts |
| Business & governance (CP-1A) | Business and governance module answer for this run | 2026-11-05 | 12427f2628bd07d0b81b4b6a5fb40457247f958769955bd932bd281e27e4fdf4 | Business model, control, capital-allocation behaviour, operating model, events |

## Findings

### Bottom line

Wayfair's credit profile is adequate but earnings-thin: net debt of USD 1,761 million is 2.06x issuer-adjusted EBITDA but 3.21x reported EBITDA, so creditors rely on USD 1,456 million of liquidity while an order decline could reverse a working-capital float. A settlement of USD 64 million on 2026-10-28 is not reflected in net debt, and its pro forma effect is not established.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C1

Cash interest paid of USD 170 million over the last twelve months is covered 3.23x by reported EBITDA, and the secured notes of USD 2,572 million rank ahead of the 2027 convertible notes. Founder voting control and USD 1,028 million of unused repurchase authority are the policy risk.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-K_2025-12-31_w-20251231.htm.jsonl, page 130

### Key findings

- Leverage has fallen because earnings recovered, since net debt barely moved: it was USD 1,802 million at FY2024, USD 1,796 million at FY2025 and USD 1,761 million at 2026-09-30, because lower gross debt was paid largely from cash (pro forma for the USD 64 million settlement of 2026-10-28: not established). Net debt over issuer-adjusted EBITDA went from 3.98x in FY2024 to 2.42x in FY2025 and 2.06x over the last twelve months, while the same ratio on reported EBITDA is 5.58x and 3.21x, and add-backs are 35.64% of last-twelve-month Adjusted EBITDA. Creditors should treat the reported-basis ratios as the test of cash earning power and the adjusted ratios as the view closer to a covenant definition.
  Basis: Financial foundation (CP-1); calculation C7

- Liquidity is adequate for the next twelve months and is the main support. Cash of USD 1,038 million and an undrawn revolver of USD 418 million give USD 1,456 million, 2.31x the USD 631 million of visible needs (the 2027 convertible notes, a year of cash interest and a year of capital expenditure), and no other principal falls due before 2029. The USD 418 million is already net of USD 82 million of letters of credit, but drawing it depends on covenant compliance that cannot be tested, and payables of USD 1,213 million exceed cash, so the cash is not surplus (pro forma for the USD 64 million settlement of 2026-10-28: not established).
  Basis: Financial foundation (CP-1); 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; calculation C1; calculation C2; calculation C3

- The business model funds itself from customers and suppliers, so the main route to stress is an order decline that reverses that float. About 97.8% of nine-month 2026 revenue was collected before recognition and payables were 13.63x inventories, and USD 140 million of the USD 174 million rise in operating cash flow came from working capital, equal to 9.62% of liquidity. A volume fall would turn that inflow into an outflow quickly, before reported earnings fall.
  Basis: Business & governance (CP-1A); Financial foundation (CP-1); calculation C6; calculation C4

- Debt service is covered but with limited margin on reported earnings. Cash interest paid rose by USD 107 million from FY2024 to the last twelve months as secured notes replaced convertible notes, and reported EBITDA covers it 3.23x against 5.02x for adjusted EBITDA, with senior secured debt at 4.68x reported EBITDA. If reported EBITDA fell back to the FY2025 level of USD 322 million, cover on the last-twelve-month cash interest would be 1.89x.
  Basis: Financial foundation (CP-1); calculation C8; calculation C5; calculation C9

- Refinancing capacity looks adequate: the maturity wall is laddered and market access was shown four times. Principal of USD 229 million falls due in 2027, USD 800 million in 2029, USD 700 million each in 2030 and 2032 and USD 400 million in 2034, and Wayfair LLC issued four secured series since 2024. The cost is a larger secured block that sits ahead of unsecured claims, so unsecured claims, including the 2027 convertible notes, rank behind it.
  Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-K_2025-12-31_w-20251231.htm.jsonl, page 130

- Financial policy is the main judgement call: founders control the votes and the repurchase room is as large as the cash balance. The co-founders and affiliates held 67.4% of voting power, no dividend has ever been paid and total debt fell USD 473 million in 2026, but USD 1,028 million of repurchase authority equals 99.04% of cash and the indentures that would limit it are not supplied. Creditors therefore depend on the observed debt-reduction record rather than on documented limits.
  Basis: Business & governance (CP-1A); calculation C10

- Profit is concentrated in the U.S. and the group has no diversification in category. The U.S. earned a 7.78% segment Adjusted EBITDA margin on 88.93% of nine-month 2026 revenue while International lost USD 54 million, and the category is largely unbranded and highly substitutable, so competition shows up in order value, which fell 1.89% in Q3 2026 even as orders rose 12.2%.
  Basis: Business & governance (CP-1A); 10-Q_2026-09-30_w-20260930.htm.jsonl, page 28; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 30

### Contrary evidence and what would change the view

The strongest case against the adequate view is that reported earnings are still thin: reported EBITDA was negative in FY2024 and USD 549 million over the last twelve months, the senior secured test of 4.0x in the revolver cannot be tested because its definition is not supplied, and senior secured debt is 4.68x reported EBITDA, which implies that the covenant definition adds back far more than reported EBITDA does. On the other side, adjusted EBITDA has risen from USD 453 million in FY2024 to USD 853 million over the last twelve months, cash interest is covered, debt has fallen and the maturities are laddered. The view would weaken if orders turned down while payables and customer advances unwound, if repurchases were funded from the revolver or new secured debt, if the 2027 convertible notes drew a large cash conversion call, or if International losses kept widening. It would strengthen with a second year of free cash flow near the last-twelve-month level without a working-capital inflow, and with a proxy statement and debt documents that show real limits on distributions.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-K_2025-12-31_w-20251231.htm.jsonl, page 120; calculation C5

### Limitations

- The executed indentures and the credit agreement are not supplied, so the senior secured leverage test, restricted-payment room and lien capacity cannot be examined, and the view of financial policy rests on the observed debt-reduction record alone.
- No quantified management outlook is supplied, so the twelve-month cash needs used here are visible commitments and last-twelve-month actuals, not a forecast, and the downside path is qualitative.
- Business & governance records no liability management as described, while the annual report says Wayfair may use exchanges for equity or debt on its convertible notes; this is a stated possibility, not an executed action, and it is a watch item for the priority of the 2027 convertible notes.
- The pro forma effect of the USD 64 million settlement on 2026-10-28 on net debt and leverage is not established because its direction is not stated, so every net debt figure here is at 2026-09-30.

### Strengths and weaknesses

The first strength is liquidity against near-term needs: cash of USD 1,038 million and USD 418 million of undrawn revolver cover the 2027 convertible notes, a year of cash interest and capital spending 2.31x, so a short disruption would not force refinancing before 2029 (pro forma for the USD 64 million settlement of 2026-10-28: not established). The second is earnings recovery with improving leverage: adjusted EBITDA of USD 853 million over the last twelve months and net debt over adjusted EBITDA of 2.06x against 3.98x in FY2024 show deleveraging that was led by earnings and by USD 473 million of lower debt. The third is a laddered maturity profile and demonstrated market access, with USD 2,572 million of secured notes due 2029 to 2034 replacing earlier convertible debt and USD 229 million due in 2027, which lowers refinancing risk through 2028.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C3

The first weakness is dependence on a working-capital float: payables are 13.63x inventories and USD 140 million of the rise in operating cash flow was working capital, so an order decline would hit cash before earnings. The second is thin reported earnings and heavy reliance on add-backs: reported EBITDA of USD 549 million is below the USD 853 million adjusted figure by 35.64%, and net leverage on reported EBITDA is 3.21x. The third is financial-policy and priority risk: founders hold 67.4% of the votes, USD 1,028 million of repurchase authority remains, and the secured notes of USD 2,572 million rank ahead of the 2027 convertible notes while the debt documents are not supplied.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C7

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Order volume | Payables and customer advances move with orders | Analyst Interpretation | Operating cash flow | Payables 13.63x inventories; 97.8% paid in advance |
| Operating cash flow | Funds interest, maturities and buybacks | Analyst Interpretation | Liquidity | LTM operating cash flow USD 708 million |
| Reported EBITDA | Covers LTM cash interest 3.23x | Documentary Fact | Debt service | LTM EBITDA 549 over cash interest 170 |
| Secured note issuance | Raised cash interest from USD 63 million to 170 million | Documentary Fact | Debt service | Financial foundation: cash interest FY2024 to LTM |
| Secured note issuance | Ranks ahead of the 2027 convertible notes | Documentary Fact | Unsecured claims | Annual report: seniority of the notes |
| Founder voting control | Can direct buybacks and secured issuance | Analyst Interpretation | Cash left for creditors | Business and governance: 67.4% of votes |
| Buyback authority | USD 1,028 million remains against USD 1,038 million cash | Documentary Fact | Cash left for creditors | Quarterly report: repurchase table |
| 2027 convertible notes | Convertible in Q4 2026; a cash call is possible | Documentary Fact | Near-term liquidity | Quarterly report: conversion conditions met |
| Trade policy and duties | Management calls the environment fluid and uncertain | Management Language | Gross margin | Quarterly report: global considerations |
| International segment | Lost USD 54 million Adjusted EBITDA in 9M 2026 | Documentary Fact | Group earnings | Quarterly report segment note |
| Debt documents not supplied | Limits on distributions and liens unknown | Insufficient Information | Creditor protection | Annual report: exhibits listed, not supplied |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 18 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 9 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 2 |
| Fields present | 8 |
| Fields total | 8 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 5 |

### Credit figures used

| Figure | Period | Value | Source |
|---|---|---|---|
| Net debt | FY2024 / FY2025 / 2026-09-30 | USD 1,802 million / 1,796 million / 1,761 million | Financial foundation (CP-1) |
| Net revenue | LTM | USD 13,207 million | Financial foundation (CP-1) |
| Active customers | 2026-09-30 | 22.2 million | Business & governance (CP-1A) |
| Total debt, carrying value | 2026-09-30 | USD 2,799 million | Financial foundation (CP-1) |
| Cash and cash equivalents | 2026-09-30 | USD 1,038 million | Financial foundation (CP-1) |
| Undrawn revolver after USD 82 million of letters of credit | 2026-09-30 | USD 418 million | Financial foundation (CP-1) |
| Net debt / EBITDA (Adjusted) | FY2024 / FY2025 / LTM | 3.98x / 2.42x / 2.06x | Financial foundation (CP-1) |
| Net debt / EBITDA (Reported) | FY2025 / LTM | 5.58x / 3.21x | Financial foundation (CP-1) |
| Total debt / EBITDA (Reported) | FY2025 / LTM | 10.16x / 5.10x | Financial foundation (CP-1) |
| Total debt / EBITDA (Adjusted) | FY2025 / LTM | 4.40x / 3.28x | Financial foundation (CP-1) |
| EBITDA (Reported) | FY2024 / FY2025 / LTM | USD -74 million / 322 million / 549 million | Financial foundation (CP-1) |
| EBITDA (Adjusted) | FY2024 / FY2025 / LTM | USD 453 million / 743 million / 853 million | Financial foundation (CP-1) |
| Add-backs, Adjusted less Reported EBITDA | LTM | USD 304 million | Financial foundation (CP-1) |
| Cash interest paid | FY2024 / FY2025 / LTM | USD 63 million / 139 million / 170 million | Financial foundation (CP-1) |
| EBITDA / cash interest, Reported and Adjusted | FY2025 / LTM | 2.32x and 5.35x / 3.23x and 5.02x | Financial foundation (CP-1) |
| Free cash flow, issuer definition | FY2024 / FY2025 / LTM | USD 83 million / 329 million / 476 million | Financial foundation (CP-1) |
| Net cash from operating activities | LTM | USD 708 million | Financial foundation (CP-1) |
| Capital expenditure | LTM | USD 232 million | Financial foundation (CP-1) |
| Net change in operating assets and liabilities | 9M 2025 / 9M 2026 | USD -76 million / 64 million; swing USD 140 million | Financial foundation (CP-1) |
| Rise in net cash from operating activities | 9M 2026 over 9M 2025 | USD 174 million | Financial foundation (CP-1) |
| Principal maturing | 2027 / 2029 / 2030 / 2032 / 2034 | USD 229 million / 800 million / 700 million / 700 million / 400 million | Financial foundation (CP-1) |
| Senior secured notes, carrying value | 2026-09-30 | USD 2,572 million | Business & governance (CP-1A) |
| Fall in total debt carrying value | 2025-12-31 to 2026-09-30 | USD 473 million | Business & governance (CP-1A) |
| Net revenue growth | Q3 2026 | 9.7% | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 30 |
| Accounts payable and inventories | 2026-09-30 | USD 1,213 million and 89 million | Business & governance (CP-1A) |
| Adjusted EBITDA margin, issuer-reported | FY2023 / FY2024 / FY2025 | 2.5% / 3.8% / 6.0% | Financial foundation (CP-1) |
| Co-founders and affiliates: voting power and economic interest | 2025-12-31 | 67.4% and 18.3% | Business & governance (CP-1A) |
| Remaining repurchase authority and Q3 2026 repurchases | 2026-09-30; Q3 2026 | USD 1,028 million; USD 60 million | Business & governance (CP-1A) |
| Settlement of an equity instrument | 2026-10-28 | USD 64 million; direction not stated | Financial foundation (CP-1) |
| Revenue collected before recognition | 9M 2026 | 97.8% | Business & governance (CP-1A) |
| Accounts payable over inventories | 2026-09-30 | 13.63x | Business & governance (CP-1A) |
| Contract liabilities | 2026-09-30 | USD 296 million | Business & governance (CP-1A) |
| U.S. share of net revenue and segment Adjusted EBITDA margin | 9M 2026 | 88.93% and 7.78% | Business & governance (CP-1A) |
| International segment Adjusted EBITDA | 9M 2026 / 9M 2025 | USD -54 million / -9 million; margin -4.94% | Business & governance (CP-1A) |
| Order growth, average order value change, active customer growth | Q3 2026 | 12.2%, -1.89%, 4.7% | Business & governance (CP-1A) |
| Operating lease liabilities, total | 2025-12-31 | USD 1,025 million | Financial foundation (CP-1) |
| Capital expenditure over net revenue | FY2025 | 1.65% | Business & governance (CP-1A) |
| Senior secured leverage test in the revolver | 2025-12-31 and 2026-09-30 | No more than 4.0 to 1.0, definition not supplied | Financial foundation (CP-1) |
| 2027 convertible notes: if-converted value above principal and free convertibility date | 2026-09-30; 2027-06-15 | USD 141 million; 2027-06-15 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 15 |

### Company description and credit linkage

Wayfair is an online home-goods retailer whose customers pay at order and whose suppliers ship most orders directly, so the model supports cash-flow visibility through customer advances and low inventory but gives little contractual revenue visibility. Net revenue growth of 9.7% in Q3 2026 came from 12.2% more orders, with U.S. 88.93% of nine-month revenue and International losing USD 54 million, which means debt service capacity rests on U.S. order volume.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_w-20260930.htm.jsonl, page 30

### Ownership and group structure

Ownership is founder-controlled and sponsor-free: the co-founders and affiliates held 67.4% of voting power against 18.3% of economic interest, Wayfair LLC issues the secured notes and borrows under the revolver, and Wayfair Inc. issues the convertible notes with guarantees from subsidiaries that are not named. This structure leaves capital returns to the founders' discretion, and the structural position of the unsecured convertible notes is behind the secured notes and the subsidiaries' liabilities.
Basis: Business & governance (CP-1A); 10-K_2025-12-31_w-20251231.htm.jsonl, page 130

### Revenue drivers and pricing power

Revenue is volume-driven and discretionary: orders rose 12.2% while average order value fell 1.89% in Q3 2026, the repeat share of orders stayed near 80%, and the category is largely unbranded and highly substitutable. Pricing power is therefore weak, so revenue durability depends on traffic, supplier selection and promotions, and a downturn would show first in orders and then in thinner gross margin.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_w-20260930.htm.jsonl, page 28; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 31

### Cost structure and margin resilience

Costs are largely variable: cost of goods sold was 70.4% of revenue in Q3 2026 and advertising 9.9%, while selling, operations, technology, general and administrative was 12.9%, so margins can be defended in a mild slowdown by cutting advertising but not in a sharp one because logistics and lease commitments are fixed, with operating lease liabilities of USD 1,025 million at 2025-12-31. Adjusted EBITDA margin rose from 2.5% in FY2023 to 6.0% in FY2025, which shows operating leverage works in both directions.
Basis: Business & governance (CP-1A); Financial foundation (CP-1); 10-K_2025-12-31_w-20251231.htm.jsonl, page 118

### Capital intensity and cash conversion

Capital intensity is low at 1.65% of FY2025 revenue and capital expenditure was USD 232 million over the last twelve months, so EBITDA converts to free cash flow of USD 476 million, 0.56 of adjusted EBITDA, but that conversion includes the working-capital inflow. Cash interest of USD 170 million and the recurring tax payments on equity awards are the leakage, which means free cash flow available for deleveraging is smaller than the headline figure when the float stops growing.
Basis: Financial foundation (CP-1); Business & governance (CP-1A)

### Competitive forces

Rivalry is intense because the market is fragmented and includes furniture stores, big box retailers and online marketplaces, buyers can switch at low cost in an unbranded category, and the supplier base is wide, with about 20 thousand mostly small suppliers, so supplier power is low and the working-capital float is supplier-funded. New entrants and substitutes are not evidenced in the supplied documents beyond the named competitors, so they are not assessed.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, pages 14–15; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 28; Business & governance (CP-1A)

### Macro and policy factors

Trade policy and duties matter because product cost is most of revenue: management calls the trade environment fluid and highly uncertain, and Canadian customs reviews cost about USD 14 million in 2025 against a USD 45 million benefit, so exposure is real but not quantified. Interest rates matter less for the issuer's drawn debt, which is fixed rate, but consumer demand for big-ticket home goods follows consumer spending, which is the sector headwind to monitor.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 28; Business & governance (CP-1A)

### Financial profile and credit quality

- Scale and market position is average: last-twelve-month revenue of USD 13,207 million and 22.2 million active customers are large, but market share is not stated.
- Competitive advantage is average: the logistics network and technology platform differentiate the offer, but the category is substitutable and order value is falling.
- Business diversification is weak: one category, 88.93% of revenue in the U.S. and a single cloud provider.
- Cost and capex flexibility is average: capital intensity is low and advertising is flexible, while leases and logistics are fixed.
- Margin stability is weak: reported EBITDA was negative until FY2025 and adjusted margins of 2.5%, 3.8% and 6.0% show a recent recovery.
- Free cash flow stability is average: USD 83 million, USD 329 million and USD 476 million over three periods is improving but includes a working-capital inflow.
- Ability to refinance is average: four secured series were issued since 2024 and maturities are laddered, with no rating or market price supplied.
- Liquidity position is strong: USD 1,456 million against USD 631 million of visible needs.
- Financial policy and governance is average: no dividend and lower debt, offset by founder control and a large repurchase authority with documents not supplied.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C1; calculation C2; calculation C3

### Outlook, tailwinds and headwinds

No quantified outlook is supplied. Over the next twelve to twenty-four months the tailwinds are total order growth of 12.2% and U.S. revenue growth of 11.4% against a roughly flat U.S. category per management, operating leverage and lower debt, and the headwinds are tariffs and duties, falling order value, widening International losses and a possible cash call on the 2027 convertible notes, which are convertible in the quarter ending 2026-12-31 with an if-converted value USD 141 million above principal at 2026-09-30. Over three to five years the 2029 and 2030 maturities of USD 800 million and USD 700 million and the revolver maturity in 2030 define the refinancing window.
Basis: EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 2; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 30; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; Financial foundation (CP-1)

### Downside scenario

The credit-specific downside starts with a drop in order volume, for example from weaker consumer spending on big-ticket home goods or higher duties passed into prices. The first operating break is the working-capital float: payables of USD 1,213 million shrink with purchases and customer advances unwind, and the observed swing of USD 140 million between nine-month periods, equal to 9.62% of liquidity, shows the order of magnitude. Gross profit then falls on lower volume and promotions while cash interest of USD 170 million and lease and logistics commitments stay fixed, cash falls from USD 1,038 million (pro forma for the USD 64 million settlement of 2026-10-28: not established) and the revolver of USD 418 million is the second line of defence, with the 2027 convertible notes of USD 229 million the first principal due. Management levers are advertising, capital expenditure and buybacks, and resilience appears sufficient to avoid distress over twelve months, but not to hold cash interest cover at the current 3.23x if reported EBITDA falls sharply.
Basis: Business & governance (CP-1A); Financial foundation (CP-1); calculation C4

### T2.1 Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_w-20251231.htm.jsonl | High | FY2025 with FY2024 and FY2023 | Wayfair Inc. consolidated | Audited statements, debt notes, covenant description, competition, risk factors, control structure | Part III by reference; exhibits not supplied | Business risk, financial policy and refinancing assessment |
| S2 | 10-Q_2026-03-31_w-20260331.htm.jsonl | High | Q1 2026 | Wayfair Inc. consolidated | Not used for any figure | Not used | None |
| S3 | 10-Q_2026-06-30_w-20260630.htm.jsonl | High | Q2 2026 | Wayfair Inc. consolidated | 2034 secured notes terms | Terms only | Debt priority |
| S4 | 10-Q_2026-09-30_w-20260930.htm.jsonl | High | Q3 2026 and 9M 2026 | Wayfair Inc. consolidated | Latest results, working capital, liquidity, conversion status, trade-policy commentary | Unaudited; no separate subsequent-events note | Latest operating and liquidity evidence |
| S5 | EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl | Medium | Q1 2026 | Wayfair Inc. consolidated | Not used for any figure | Issuer release | None |
| S6 | EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl | Medium | Q2 2026 | Wayfair Inc. consolidated | Not used for any figure | Issuer release | None |
| S7 | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl | Medium | Q3 2026 | Wayfair Inc. consolidated | Operating metrics and commentary | Issuer release; no quantified outlook | Outlook and operating momentum |
| S8 | Source readiness module answer (sha256 43399c8cef27a5fea1c5523c8802a00ed6679b3ea634675ab7f84523ab1a7ba4) | Medium | 2026-11-05 | Wayfair Inc. | Source list and gaps | Module output citing the filings | Source basis |
| S9 | Financial foundation module answer (sha256 0c5422837fabafe76ecb1185b86004c1355f61493dee84c8b96fbd07321b0efa) | Medium | 2025-12-31 to 2026-09-30 | Wayfair Inc. consolidated | Statements, net debt, leverage, liquidity, maturities | Reported EBITDA is calculated; no pro forma figure for the 2026-10-28 settlement | Leverage, coverage and liquidity assessment |
| S10 | Business and governance module answer (sha256 12427f2628bd07d0b81b4b6a5fb40457247f958769955bd932bd281e27e4fdf4) | Medium | FY2025 to 2026-10-28 | Wayfair Inc. | Business, control, behaviour flags, operating model, events | Proxy statement and debt documents not supplied | Ownership, policy and operating assessment |

Module status: Ready with Limitations.

### T2.10 Materiality filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence | Source |
|---|---|---|---|---|---|---|---|
| 1 | Working-capital float reversal | Customers pay before delivery (97.8% of nine-month 2026 revenue) and payables are 13.63x inventories; USD 140 million of the rise in operating cash flow was working capital | An order decline unwinds payables and customer advances before earnings fall | A swing of the observed size equals 9.62% of liquidity and lowers free cash flow available for debt service | Negative | High | Business & governance (CP-1A); Financial foundation (CP-1) |
| 2 | Reliance on adjusted earnings | Reported EBITDA of USD 549 million against adjusted USD 853 million over the last twelve months; add-backs are 35.64% of adjusted | Equity-based compensation and restructuring add-backs lift the earnings used for leverage | Net leverage is 3.21x on reported and 2.06x on adjusted EBITDA; the covenant definition is not supplied | Negative | High | Financial foundation (CP-1) |
| 3 | Liquidity against near-term needs | Cash of USD 1,038 million and undrawn revolver of USD 418 million give USD 1,456 million against USD 631 million of visible needs | Cash and committed funding cover the 2027 convertible notes and a year of interest and capex | 2.31x cover supports the view that the 2027 maturity can be met from cash | Positive | High | Financial foundation (CP-1); calculation C3 |
| 4 | Deleveraging and earnings recovery | Net debt over adjusted EBITDA fell from 3.98x to 2.06x; revenue grew 9.7% in Q3 2026 | Earnings growth plus USD 473 million lower debt reduced leverage | Lower probability of liquidity stress if growth holds | Positive | Medium | Financial foundation (CP-1); Business & governance (CP-1A) |
| 5 | Higher interest cost and secured priority | Cash interest rose USD 107 million to USD 170 million; secured notes of USD 2,572 million rank ahead of the 2027 convertible notes | Refinancing into secured notes raised fixed cash cost and encumbered assets | Cover of 3.23x on reported EBITDA leaves limited margin; unsecured claims are subordinated | Negative | High | Financial foundation (CP-1); Business & governance (CP-1A) |
| 6 | Founder control and repurchase authority | 67.4% of votes held by co-founders and affiliates; USD 1,028 million of repurchase authority remains against USD 1,038 million of cash | Capital returns can be directed without shareholder checks and the debt documents are not supplied | A faster buyback pace would reduce the liquidity buffer | Negative | Medium | Business & governance (CP-1A); calculation C10 |
| 7 | Laddered maturities and market access | Principal of USD 229 million in 2027, then USD 800 million, 700 million, 700 million and 400 million in 2029 to 2034 | Four secured series issued since 2024 extended the maturity profile | Refinancing risk is concentrated in 2029 and 2030 | Positive | Medium | Financial foundation (CP-1) |
| 8 | International losses | International lost USD 54 million of Adjusted EBITDA in 9M 2026 against USD 9 million a year earlier, with revenue down 2.3% in Q3 2026 | A shrinking segment is loss-making and dilutes group margin | Group earnings depend on the U.S. segment | Negative | Medium | Business & governance (CP-1A) |

### T2.12 Monitoring triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
|---|---|---|---|---|
| Revenue decline | Year-over-year net revenue or orders delivered turn negative; Q3 2026 net revenue +9.7% and orders +12.2%; no quantitative threshold is stated in the supplied documents | Orders drive revenue and the working-capital float | Cash flow and liquidity weaken first through working capital | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 30; Business & governance (CP-1A) |
| EBITDA margin pressure | Adjusted EBITDA margin below the FY2025 level of 6.0% or average order value falling further than 1.89%; no quantitative threshold is stated in the supplied documents | Thin gross margin of about 30% leaves little room | Reported leverage and cover deteriorate | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 2; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 31; Financial foundation (CP-1) |
| FCF deterioration | Free cash flow of USD 476 million over the last twelve months turns down or a working-capital outflow replaces the inflow; no quantitative threshold is stated in the supplied documents | Free cash flow includes a working-capital inflow | Less cash for deleveraging and interest | Financial foundation (CP-1) |
| Liquidity reduction | Cash below USD 1,038 million without a matching debt reduction, or revolver availability below USD 418 million; no quantitative threshold is stated in the supplied documents | Liquidity is the main support | Weaker coverage of the 2027 maturity and interest | Financial foundation (CP-1) |
| Leverage increase | Senior secured debt to EBITDA approaching the 4.0 to 1.0 revolver test, measured on the credit agreement definition that is not supplied; net debt over reported EBITDA above 3.21x | The revolver test can restrict access to funding | Loss of revolver access would cut liquidity | 10-K_2025-12-31_w-20251231.htm.jsonl, page 120; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42; Financial foundation (CP-1) |
| Refinancing delay | No refinancing or settlement plan for the 2027 convertible notes of USD 229 million by their free convertibility date of 2027-06-15; no quantitative threshold is stated in the supplied documents | First principal falls due on 2027-09-15 | A cash call concentrated in 2027 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 |
| Sponsor/shareholder action | Repurchases funded from the revolver or new secured debt, a dividend, a related-party payment in the proxy statement, or an exchange of the convertible notes; no quantitative threshold is stated in the supplied documents | Founders control 67.4% of the votes and USD 1,028 million of authority remains | Cash and priority leakage to shareholders | Business & governance (CP-1A); 10-K_2025-12-31_w-20251231.htm.jsonl, page 54 |
| Sector deterioration | Tariff or duty increases, or weaker spending on home goods; no quantitative threshold is stated in the supplied documents | Product cost is about 70.4% of revenue | Margin and volume pressure together | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 28; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 31 |

### Overall credit view

Overall, Wayfair presents an adequate business profile supported by large scale, liquidity of USD 1,456 million (pro forma for the USD 64 million settlement of 2026-10-28: not established) and a laddered maturity profile, but credit quality is constrained by thin reported earnings, a working-capital float that depends on order volume, a growing block of secured debt and founder control with a large repurchase authority. Cash-flow durability appears adequate but not yet proven because free cash flow includes a working-capital inflow. Refinancing capacity is likely to depend on holding earnings and on the 2027 convertible notes of USD 229 million being settled from cash. The primary downside path is an order decline that reverses the working-capital float while cash interest of USD 170 million stays fixed. Further analysis would require the debt documents, the proxy statement and a management outlook. Top Risk: working-capital reversal in an order decline.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C1

## Calculations

| Calculation ID | Calculation | Inputs | Result |
|---|---|---|---|
| C1 | Liquidity at 2026-09-30: cash and cash equivalents plus undrawn revolver | 1,038 + 418 | 1,456 |
| C2 | Cash needs visible in the next twelve months, as a scale only: 2027 convertible notes principal plus last-twelve-month cash interest plus last-twelve-month capital expenditure | 229 + 170 + 232 | 631 |
| C3 | Liquidity over the visible twelve-month cash needs | 1,456 / 631 | 2.31x |
| C4 | Working-capital swing between 9M 2025 and 9M 2026 as a share of liquidity | 140 / 1,456 x 100 | 9.62% |
| C5 | Senior secured debt carrying value over last-twelve-month reported EBITDA, 2026-09-30 (from Financial foundation) | 2,572 / 549 | 4.68x |
| C6 | Share of the 9M 2026 rise in operating cash flow explained by working capital | 140 / 174 x 100 | 80.46% |
| C7 | Share of last-twelve-month Adjusted EBITDA that is add-backs to reported EBITDA | 304 / 853 x 100 | 35.64% |
| C8 | Rise in cash interest paid, FY2024 to last twelve months to 2026-09-30 | 170 - 63 | 107 |
| C9 | Illustrative cover if reported EBITDA fell back to the FY2025 level of 322 with last-twelve-month cash interest of 170 | 322 / 170 | 1.89x |
| C10 | Remaining repurchase authority as a share of cash at 2026-09-30 | 1,028 / 1,038 x 100 | 99.04% |

## Gaps

| Gap | Affected conclusion | Severity | Action that would close it | Source |
|---|---|---|---|---|
| The executed indentures and the credit agreement are not supplied | Senior secured leverage test, restricted-payment room, lien capacity and financial-policy conclusion | Material | Supply the executed documents | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 149–151; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 56 |
| No quantified management outlook | Outlook, forward cash needs and the downside path | Minor | Supply guidance if the issuer gives it | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 4–5 |
| The direction of the USD 64 million settlement on 2026-10-28 is not stated | Pro forma net debt and cash after the balance-sheet date | Minor | Read the fourth-quarter report | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; Financial foundation (CP-1) |
| The proxy statement is not supplied | Board independence, related-party dealings and the governance conclusion | Minor | Supply the 2026 proxy statement | 10-K_2025-12-31_w-20251231.htm.jsonl, page 148; Business & governance (CP-1A) |
| No credit rating, bond price or peer set is supplied | Ratings, market-implied view and relative position are not assessed | Minor | Supply ratings, quotes and peers if those views are wanted | Source readiness (CP-0) |
| Business & governance records no liability management; the annual report says exchanges for equity or debt may be used on the convertible notes | Priority of the 2027 convertible notes | Minor | Watch the next quarterly reports for any exchange | 10-K_2025-12-31_w-20251231.htm.jsonl, page 54; 10-K_2025-12-31_w-20251231.htm.jsonl, page 79; Business & governance (CP-1A) |

## Next module

The orchestrator selects the next module.

