---
issuer_id: alks
module_id: CP-2
analysis_date: 2026-11-05
run_id: alks-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
module_status: Ready with limitations
---

## Request

Fundamental credit assessment of Alkermes plc. (issuer id alks), as of 2026-11-05, on the credit snapshot pathway. Scope: business risk, financial profile, liquidity, the downside path and monitoring triggers, drawn from the supplied filings and the three earlier analyses of this run.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_alks-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-25 | e4cb39ef2746983905a66c4851e17231fe0e2b3eb3dd9d346653644971686601 | Business, competition, patents, policy risk, customer concentration, patent expiries |
| 10-Q_2026-03-31_alks-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-05 | 2f002a6c3ee21ba1a12ed08afd7616a7de0cb6e62154bfb1ecb118ba4eafd45f | Read for context; no figure is taken from it |
| 10-Q_2026-06-30_alks-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-28 | bc67cf08c7dfc8de310d0ecdd1030e2a1391c6b7ce68e53f0b348219bcf79e99 | Read for context; no figure is taken from it |
| 10-Q_2026-09-30_alks-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-03 | df6328c67d9ab03d30760e47eacac03760e7e83fb341e7073082128f2c7068d4 | Statements, debt, rate exposure, deductions, litigation, repurchases |
| EX-99.1_2026-05-05_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-05 | 3f53152d2ff381e382b1d7a092db23f6a1d1dce5883995e4eda0a38a2d5d57a8 | Read for context; no figure is taken from it |
| EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-28 | 4e5567773d88766be4958174400b81baacad01bd80fe607c8eb27ade6994b31f | 2026 expectations |
| EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of 2026 | 2026-11-03 | 041cf8e725b3d45a5b701a4d1acae145f94c2d37b75244f3f5fe173ac5392fc6 | Adjusted EBITDA reconciliation and product commentary |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 0e5b581d2f91b190b3dfd8805d4398aeed4711c3f5c9d4876162d9c95cb1b0ca | Source set, gaps and the absence of legal documents, ratings and prices |
| Financial foundation | CP-1 | ac3b9cb68c536d70c495e33a34e4d664e1648efd19c0f6069b8ee21f08b9ca1a | Statements, net debt, leverage, maturities and cash flow |
| Business & governance | CP-1A | 84daefcd7c3c90c301954d48bdf07a9a4145d58d8859fdcbeaff86c2a4910d98 | Business and revenue mix, ownership, operating model, governance and behaviour flags |

## Findings

### Bottom line

Alkermes' fundamental credit profile is average and weaker than at year-end 2025, because net debt of USD 866.42 million is 5.93x reported last-twelve-months EBITDA after a debt-funded acquisition. Cash of USD 631.31 million, USD 164.19 million of principal due before 2031 and the absence of distributions cushion the near term, but the largest product's 2029 patent expiry and the 2030 end of the Janssen royalties arrive before USD 1,347.56 million falls due in 2031.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 32; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 19; calculation G1; calculation G6

Cash interest cover is not established and covenant levels are not printed, so the view is bounded and rests on reported earnings that include acquisition costs.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28

### Key findings

- The leverage step-up is the main credit constraint. The company moved from net cash of USD 388.57 million at year-end 2025 to net debt of USD 866.42 million, and the 5.93x ratio uses reported EBITDA that carries acquisition costs and only part-year LUMRYZ. The issuer's adjusted EBITDA for nine months 2026 is USD 339.54 million, 15.63% above a year earlier, so reported leverage probably overstates run-rate leverage, but no adjusted last-twelve-months figure can be built.
Basis: Financial foundation (CP-1); EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; calculation G1; calculation G2
- Liquidity is comfortable in the near term but rests on cash alone. Cash and equivalents of USD 631.31 million cover the USD 164.19 million of principal due before 2031 by 3.85x, investments add USD 156.26 million, and no committed facility is described, so any shortfall would have to be met from cash.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 49; calculation G6
- The refinancing wall sits in 2031 and follows the expiries. Principal of USD 1,347.56 million, 89.14% of the total, is due in 2031, after VIVITROL's last listed patent expires in 2029 and the Janssen royalties end in 2030; these two exposures were 31.87% of nine-month 2026 revenue.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 32; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 19; calculation G5; calculation G6
- Margins are under pressure from deductions and cost growth. The adjusted EBITDA margin was 24.80% in nine months 2026 against 26.91% a year earlier, a fall of 2.11 percentage points, and 25.01% in Q3 against 30.83%, a fall of 5.83 percentage points, while sales deductions took 46.6% of gross product sales and R&D rose 46.10%.
Basis: EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43; Business & governance (CP-1A); calculation G2
- Cash conversion dipped in 2026 but remains positive. Operating cash flow was USD 72.92 million in nine months against USD 350.69 million a year earlier because working capital absorbed cash, yet last-twelve-months free cash flow of USD 227.37 million is 15.18% of gross debt and capital spending is small.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 51; calculation G4
- Floating-rate exposure is only half hedged. Collars with a 5.25% cap cover 49.61% of principal, the three-month Term SOFR rate was 4.07% at 2026-09-30, and cash interest paid is not stated, so coverage can be judged only from interest expense.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 55; calculation G3; calculation G8
- Financial policy is creditor-neutral so far. No dividend has been paid to date, repurchases were small and have stopped, and the acquisition was funded without a sponsor, but legal capacity under the credit agreement is not established.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30

### Contrary evidence and what would change the view

The strongest evidence against an average rating of the profile is cash generation: last-twelve-months free cash flow of USD 227.37 million is 15.18% of gross debt, capital spending is light, no distributions are paid, and the issuer's adjusted EBITDA grew 15.63% in nine months. The view would move toward strong if the fourth-quarter 2025 release shows adjusted EBITDA near the 2026 quarterly level, which would put adjusted net leverage well below the reported 5.93x, and if cash interest paid proves modest against that earnings base. It would move toward weak if the paragraph IV suits or the LUMRYZ generic filing bring earlier generic entry, if VIVITROL meets generic competition after 2029 while Janssen ends its royalty before 2030, if the deduction rate keeps rising from 47.7% in Q3, or if repurchases resume before debt falls.
Basis: Financial foundation (CP-1); EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 35; calculation G2; calculation G4

### Limitations

- Last-twelve-months reported EBITDA builds on a FY2025 figure that was derived rather than stated by the issuer, so the 5.93x ratio could move when the fourth-quarter 2025 release is read, and the average assessment depends on that ratio.
Basis: Financial foundation (CP-1)
- Cash interest paid is not stated for 2025 or 2026, so coverage is judged from interest expense, which includes bridge and amendment costs and may overstate or understate cash interest; this limits both the liquidity and the refinancing conclusions.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29
- Covenant levels and compliance ratios are not printed, so headroom is not established; if the maintenance levels sit close to the issuer's secured leverage, the near-term comfort in the liquidity conclusion would weaken.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30
- No rating, market price, peer set or scenario assumption was supplied, so the assessments are not benchmarked against peers and the downside scenario is qualitative, anchored on reported exposures rather than a modelled case.
Basis: Source readiness (CP-0)

### Strengths and weaknesses

Strengths, ranked. First, the maturity profile and cash leave no refinancing event before 2031: principal due before 2031 is USD 164.19 million against cash of USD 631.31 million, so debt service is met from cash and operations through the expiry window. Second, the product base is broader than a single asset, with four products at 16.51% to 26.62% of nine-month 2026 revenue and legacy product sales up 8.28% over nine months, so a problem in one product does not remove most of the cash flow. Third, ARISTADA and LYBALVI patents run to 2039 and 2041 and LUMRYZ patents to 2037, so the newer products outlast the 2029 and 2030 expiries. Fourth, financial policy has been creditor-neutral: no dividend to date, repurchases paused and USD 172.3 million of authorisation unused, which keeps cash for debt service. Fifth, capital intensity is low, with capital spending of USD 15.64 million in nine months against operating cash flow of USD 72.92 million, so free cash flow reaches debt service without large reinvestment.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7; calculation G6; Business & governance (CP-1A)

Weaknesses, ranked. First, leverage rose from nil to USD 1,497.73 million of secured floating-rate debt, so reported net leverage of 5.93x leaves little room for an earnings shortfall. Second, the exposed share of revenue is 31.87%, the VIVITROL product and the INVEGA royalties, which face a 2029 patent expiry and a 2030 royalty end before the 2031 maturities. Third, the margin is compressing: the adjusted margin fell 2.11 percentage points over nine months and the deduction rate is 46.6%, so revenue growth is not reaching EBITDA. Fourth, there is no committed liquidity backstop and no covenant transparency, so liquidity is cash only and headroom cannot be tested. Fifth, intangible assets and goodwill exceed shareholders' equity by USD 469.56 million and pipeline spending is rising, so asset value and cash use both depend on LUMRYZ and the orexin programmes delivering.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 49; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28; calculation G1; calculation G2; calculation G5

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 30 |
| Calculated | 22 |
| Assumption-Based | 0 |
| Analyst Inference | 10 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 5 |
| Fields present | 14 |
| Fields total | 16 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 1 |

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Avadel acquisition | funded by USD 1,525.0 million of term loans | Documentary Fact | Net leverage of 5.93x | Debt note and Financial foundation |
| Reported EBITDA | after acquisition costs and part-year LUMRYZ | Documentary Fact | Leverage overstated vs run-rate | Release reconciliation |
| Adjusted EBITDA growth | up 15.63% in nine months; FY2025 figure missing | Documentary Fact | Adjusted leverage not calculable | Release reconciliation |
| Cash and low amortisation | USD 164.19 million due before 2031 | Documentary Fact | No refinancing event before 2031 | Debt note |
| VIVITROL patent | expires 2029; 26.62% of revenue | Documentary Fact | Revenue loss risk | Annual report patents section |
| Janssen royalties | end May 2030 | Documentary Fact | Royalty income loss | Annual report collaborations |
| Exposed revenue | 31.87% of nine-month revenue | Analyst Interpretation | Weaker 2031 refinancing | Calculation from revenue table |
| Sales deductions | 46.6% of gross product sales | Documentary Fact | Margin compression | Quarterly report sales table |
| Floating-rate loans | 49.61% of principal hedged by collars | Documentary Fact | Interest cost sensitivity | Quarterly report debt note |
| Cash interest paid | not stated for 2025 or 2026 | Insufficient Information | Coverage not established | Cash flow statements |
| Management statement | products positioned to generate cash flow | Management Language | Cash flow durability | Q2 release quote |

### Company description

Alkermes sells four US products and earns royalties on two collaboration partners' products: VIVITROL for alcohol and opioid dependence, ARISTADA and LYBALVI for schizophrenia and bipolar I disorder, and, since the Avadel acquisition of 2026-02-12, LUMRYZ for narcolepsy; Janssen pays royalties on the INVEGA family and royalties and manufacturing fees on RISPERDAL CONSTA, and Biogen pays royalties on VUMERITY. Sales go mainly to three wholesalers, so cash flow depends on a few products, a few channels and US payers, which lowers diversification but gives clear volume and price data; the pipeline of orexin 2 receptor agonists is a growth option that consumes cash first. Cash-generation durability is therefore reasonable to 2030 and uncertain after it.
Basis: Business & governance (CP-1A); 10-K_2025-12-31_alks-20251231.htm.jsonl, page 9; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 27; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21

### Ownership and group structure

Alkermes is a listed Irish public company with no sponsor or controlling holder identified, so financial policy is set by a board and management rather than a sponsor with an exit horizon; the only large corporate action in the period was the debt-funded Avadel purchase, and creditors rank as senior secured lenders to borrowers that are Alkermes plc, Alkermes, Inc. and Alkermes Finance LLC with subsidiary guarantors. Holder concentration, board composition and the guarantor list are not established because the proxy statement and credit agreement were not supplied, so governance risk is held at medium rather than low.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 125

### Revenue drivers and pricing power

Revenue durability is mixed. Evidence: legacy product sales rose 8.28% over nine months on a 6% list price rise and unit growth, but Q3 growth slowed to 3.13% and included about USD 17 million of timing and deduction benefits, while royalty and manufacturing revenue fell 9.12%. Mechanism: deductions absorb 46.6% of gross sales, wholesaler concentration is high and each product is a US single-market franchise, so revenue is recurring and prescription-driven rather than contractual, and exposed to regulation and substitution. Implication: revenue is predictable at the product level but structurally exposed to rebate policy and to patent-led generic entry, with VIVITROL the first test in 2029.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 22; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 2; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 27

### Cost structure and margin resilience

Margins can be defended only partly. Evidence: nine-month 2026 cost of goods was 18.55% of revenue including non-cash inventory step-up amortisation, R&D was 24.64% and selling, general and administrative expense 50.45%, with R&D up 46.10% and selling and marketing up 27.13% on the LUMRYZ organisation. Mechanism: most of the cost base is commercial and development spend that does not fall with volume, so a revenue decline would deleverage margins quickly; R&D is the main discretionary lever. Implication: operating leverage works against the issuer in a downturn and the cost step-up must be matched by LUMRYZ and legacy growth to hold EBITDA.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 34; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 45; Business & governance (CP-1A); calculation G7

### Capital intensity and cash conversion

Cash conversion is adequate but volatile. Evidence: operating cash flow fell 79.21% to USD 72.92 million in nine months of 2026 as payables and accrued expenses fell and acquisition and interest costs rose, capital additions were only USD 15.64 million, and the 2026 reports do not state cash interest paid. Mechanism: payer reserves and the working-capital swing make quarterly cash flow noisy, and interest on USD 1,497.73 million of floating-rate debt is now a recurring claim. Implication: EBITDA reaches free cash flow because capital intensity is low, but interest is a new leakage whose cash amount is not established, and capital spending flexibility adds little because the base is small.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 51; calculation G4

### Competitive forces

Rivalry is intense and product-specific: ARISTADA, the INVEGA products and RISPERDAL CONSTA compete with other long-acting injectables, LYBALVI with oral antipsychotics such as CAPLYTA, REXULTI, VRAYLAR and COBENFY, VIVITROL with buprenorphine products and generics, and LUMRYZ with twice-nightly oxybates and wake-promoting agents, so share and price pressure fall mostly on net price rather than on volume, which the 46.6% deduction rate already shows. Buyer power is high because three wholesalers take 71% to 96% of each product's gross sales and payers set rebates, which squeezes net price. Substitutes and new entrants are the generic filings against LYBALVI and LUMRYZ, which the patent estate and 30-month stays delay but do not remove. Supplier power is limited for the legacy products made at the Ohio plant, higher for LUMRYZ because third parties make it.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 29; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 30; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 27; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 35; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43

### Policy and macro factors

Policy is a material credit factor. Evidence: the annual report describes the 2025 executive order on most-favoured-nation pricing and three payment models, including a Medicare Part D rebate programme proposed from 2027-01-01 and a voluntary Medicaid model launched in January 2026, and the issuer's Part D deductions already rose because of expanded LYBALVI rebate eligibility. Mechanism: mandatory or supplemental rebates cut net price on a product whose gross sales are already 46.6% deducted. Implication: policy is a second-order downside to the 2029 and 2030 expiries, which is why deduction rate is a monitoring trigger. Macro, currency and technology factors do not appear to be primary credit drivers: the issuer reports no material change in its currency exposure, which arises from euro royalties offset by euro costs in Ireland.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 55

### Credit-translated SWOT

Strengths: cash of USD 631.31 million, light amortisation, a four-product base, patents to 2039 and 2041 on ARISTADA and LYBALVI, and no distributions. Weaknesses: acquisition leverage, a 2031 maturity wall, a declining royalty stream, a rising deduction rate and no covenant transparency. Opportunities that could improve credit quality: LUMRYZ patients and its idiopathic hypersomnia label expansion, orexin programme readouts, and further margin cuts at the next amendment. Threats that could weaken it: generic entry on VIVITROL after 2029, loss of the Janssen royalty by 2030, a paragraph IV outcome on LYBALVI or LUMRYZ, and mandatory rebate models.
Basis: Business & governance (CP-1A); Financial foundation (CP-1); 10-K_2025-12-31_alks-20251231.htm.jsonl, page 32; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 42

### Financial profile and credit quality

- Scale and market position: average. Last-twelve-months revenue of USD 1,753.60 million and four products each above 16% of nine-month revenue give scale, but all sales are US-only and market share is not stated.
- Competitive advantage: average. Patents to 2039 and 2041 and orphan exclusivity to 2030 support ARISTADA, LYBALVI and LUMRYZ, but VIVITROL's last listed patent expires in 2029 and generic filings are pending.
- Business diversification: average. Four products plus royalties spread revenue, but all are US-sold through three wholesalers and rebate-exposed payers.
- Cost and capex flexibility: average. Capital spending is small, but commercial and development spend is rising and only R&D is readily discretionary.
- Margin stability: weak. The adjusted EBITDA margin fell 2.11 percentage points over nine months and 5.83 percentage points in Q3 while deductions rose to 47.7% of gross sales in Q3.
- Free cash flow stability: average. Last-twelve-months free cash flow of USD 227.37 million is 15.18% of debt, but nine-month operating cash flow fell 79.21%.
- Ability to refinance and access capital markets: average. The company raised USD 1,525.0 million of term loans and cut margins within six months, but USD 1,347.56 million falls due in 2031 and no rating or market price is available.
- Liquidity position: average. Cash of USD 631.31 million covers principal due before 2031 by 3.85x, but there is no committed facility and covenant headroom is not established.
- Financial policy and governance: average. No dividend and paused repurchases are creditor-neutral, but legal capacity and holder information are not available.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 32; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39; calculation G2; calculation G4; calculation G6

The main credit supports are cash, light amortisation and the absence of distributions; the main constraints are acquisition leverage, the 2029 to 2031 sequence of expiries and maturities, and margin compression. The trend is weaker than at year-end 2025 because the company moved from net cash to net debt, although adjusted earnings grew. The key missing datapoints are cash interest paid, covenant levels, the fourth-quarter 2025 adjusted EBITDA and any rating.
Basis: Financial foundation (CP-1); Business & governance (CP-1A)

### Outlook, tailwinds and headwinds

Over 12 to 24 months the tailwinds are LUMRYZ patient growth from roughly four thousand now on therapy, the 6% price rise, LYBALVI prescriptions growing 18%, and lower interest cost after the margin cut; the headwinds are the Q3 one-offs that will not repeat, the deduction rate and higher R&D for the phase 3 programmes. The company expects 2026 revenue of USD 1,730 million to USD 1,840 million and adjusted EBITDA of USD 370 million to USD 410 million, which implies fourth-quarter revenue of USD 360.95 million to USD 470.95 million and fourth-quarter adjusted EBITDA of only USD 30.46 million to USD 70.46 million against USD 120.07 million in Q3, so either the expectations are cautious or a heavy fourth-quarter cost step-up is planned. Over three to five years the expiries of 2029 and 2030 dominate: roughly a third of revenue is exposed while the orexin pipeline would need to be approved and launched to replace it, and the 2031 maturities fall at the end of that window. Sector tailwinds are demand for long-acting psychiatric and sleep products; sector headwinds are US drug pricing policy and generic challenges.
Basis: EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 2; EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 3; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 42; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28; calculation G5; calculation G10

### Downside scenario

The issuer-specific downside begins in 2029 with generic competition for VIVITROL, the largest product at 26.62% of nine-month revenue, followed in 2030 by the end of the Janssen royalty on the INVEGA products and of LUMRYZ's adult orphan exclusivity. The first operational break is volume and price loss on VIVITROL, which also faces an antitrust class action over a patent, and the end of high-margin royalty income. Revenue falls by part of the 31.87% that is directly exposed; because commercial and R&D spending is largely fixed, EBITDA falls by more than revenue, and free cash flow, which was USD 227.37 million over the last twelve months, falls with it while interest on the floating-rate term loans continues. Liquidity is not the first casualty: cash of USD 631.31 million and principal of only USD 164.19 million due before 2031 mean the company can fund the expiry window, and management can cut R&D, stop repurchases and repay debt from cash. Leverage is the consequence: lower EBITDA over unchanged debt raises net leverage above 5.93x just as USD 1,347.56 million of term loans needs refinancing in 2031, so resilience is sufficient to avoid liquidity distress through 2030 but the refinancing is the pressure point. Observable triggers are generic filings or approvals for VIVITROL, rulings in the LYBALVI and LUMRYZ suits, any Janssen termination notice, the deduction rate and cash balance.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 32; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 19; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 36; Financial foundation (CP-1); Business & governance (CP-1A); calculation G4; calculation G5; calculation G6

### T2.10 Materiality filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
|---|---|---|---|---|---|---|
| 1 | Acquisition leverage and 2031 maturities | Net debt USD 866.417 million is 5.93x reported LTM EBITDA; USD 1,347.562 million of principal due in 2031 | Floating-rate secured debt raises fixed charges while earnings are volatile | Refinancing in 2031 depends on post-expiry earnings | Negative | High |
| 2 | Cash and light amortisation | Cash USD 631.314 million against USD 164.188 million of principal due before 2031 | Debt service to 2030 is met from cash | Near-term liquidity is not stressed | Positive | High |
| 3 | VIVITROL patent expiry in 2029 and Janssen royalty end in 2030 | VIVITROL and INVEGA royalties are 31.87% of nine-month 2026 revenue | Generic entry and royalty loss cut high-contribution revenue | Earnings and refinancing capacity fall together | Negative | Medium |
| 4 | Diversified product base with growth | Four products at 16.51% to 26.62% of revenue; legacy sales up 8.28% over nine months | No single product removes most of cash flow | Supports revenue durability to 2030 | Positive | Medium |
| 5 | LUMRYZ contribution and clinical progress | USD 225.986 million of revenue since 2026-02-12; positive phase 3 idiopathic hypersomnia study | New growth leg and label expansion | Offsets the exposed revenue if it keeps growing | Positive | Medium |
| 6 | LUMRYZ intangible concentration and generic filing | Intangibles plus goodwill exceed equity by USD 469.556 million; paragraph IV suit filed 2026-07-30 | Asset value and revenue rest on one product | A loss of LUMRYZ exclusivity would impair the acquisition thesis | Negative | Medium |
| 7 | Margin compression and payer deductions | Adjusted margin down 2.11 percentage points; deductions 46.6% of gross sales | Net price erodes through rebates; costs are fixed | EBITDA falls faster than revenue in a downturn | Negative | High |
| 8 | Creditor-neutral financial policy and low capital intensity | No dividend to date; repurchases paused; capital additions USD 15.638 million in nine months | Cash stays in the company | Supports deleveraging capacity | Positive | Medium |
| 9 | Interest cover and covenants not established | Cash interest paid not stated; covenant levels not printed; only 49.61% of principal hedged | Fixed charges cannot be tested against earnings | Coverage and headroom conclusions are bounded | Negative | Low |

### T2.12 Monitoring triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
|---|---|---|---|---|
| Revenue decline | Total revenues below the low end of the issuer's 2026 expectation of USD 1,730 million, or legacy product sales growth turning negative after 3.13% in Q3 | Revenue growth is acquisition-led and Q3 legacy growth slowed | Weaker earnings against fixed floating-rate charges | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 2; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21 |
| EBITDA margin pressure | Adjusted EBITDA margin falling further from 24.80% for nine months 2026 and 25.01% in Q3; deductions above 47.7% of gross sales | Margins already fell 2.11 percentage points | Lower coverage and higher leverage | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 43 |
| FCF deterioration | Free cash flow falling below the USD 57.279 million of nine months 2026 or last-twelve-months USD 227.368 million; cash interest paid, once stated, above a sustainable share of operating cash flow | Free cash flow funds debt service and the 2031 refinancing | Less deleveraging capacity | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7; Cash interest threshold: no quantitative threshold is stated in the sources |
| Liquidity reduction | Cash and equivalents falling below USD 631.314 million without debt repayment, or any drawing on the USD 156.260 million of investments to fund repurchases | Liquidity is cash only with no committed facility | Weaker cover of principal due before 2031 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 49 |
| Leverage increase | Reported net debt over last-twelve-months EBITDA rising above 5.93x, or a new debt-funded acquisition | Leverage is already high on reported earnings | Weaker refinancing capacity | Financial foundation calculations; covenant levels are not printed |
| Refinancing delay | No refinancing or extension of the USD 1,347.562 million due in 2031 as expiries in 2029 and 2030 approach; Term SOFR above the 4.07% of 2026-09-30 | The wall follows the expiries | Higher refinancing risk and cost | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 55 |
| Sponsor/shareholder action | Resumption of share repurchases (USD 172.3 million authorised) or any dividend before leverage falls | Distributions would drain the cash that covers debt service | Weaker liquidity and creditor alignment | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30 |
| Sector deterioration | Final or proposed mandatory rebate models taking effect, adverse rulings in the LYBALVI or LUMRYZ patent suits, Janssen termination notice | Policy and generic entry are the main external downside paths | Lower net price and earlier loss of exclusivity | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 35; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 19 |

### T2.1 Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation |
|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_alks-20251231.htm.jsonl | High | FY2025 | Alkermes plc and subsidiaries | Audited statements, business, patents, competition, policy risk, customer concentration | Year-end statements predate the acquisition |
| S2 | 10-Q_2026-03-31_alks-20260331.htm.jsonl | Medium | Q1 2026 | Alkermes plc and subsidiaries | Interim statements; not relied on for a figure | Unaudited |
| S3 | 10-Q_2026-06-30_alks-20260630.htm.jsonl | Medium | Q2 2026 | Alkermes plc and subsidiaries | Interim statements; not relied on for a figure | Unaudited |
| S4 | 10-Q_2026-09-30_alks-20260930.htm.jsonl | Medium | Q3 2026 | Alkermes plc and subsidiaries | Latest statements, debt, deductions, litigation, rate exposure | Unaudited; cash interest paid not stated |
| S5 | EX-99.1_2026-05-05_alks-ex99_1.htm.jsonl | Medium | Q1 2026 | Alkermes plc and subsidiaries | Release; not relied on for a figure | Non-GAAP measures |
| S6 | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl | Medium | Q2 2026 | Alkermes plc and subsidiaries | Updated 2026 expectations | Management Language |
| S7 | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl | Medium | Q3 2026 | Alkermes plc and subsidiaries | Adjusted EBITDA reconciliation, product commentary | Non-GAAP measures |
| CP0 | Source readiness analysis | Medium | As of 2026-11-05 | Run | Source set and gaps | One page reference to the Q3 release is off by one page |
| CP1 | Financial foundation analysis | High | FY2024 to 2026-09-30 | Alkermes plc and subsidiaries | Statements, net debt, leverage, maturities | FY2024 and FY2025 EBITDA derived; cash interest not supplied |
| CP1A | Business and governance analysis | High | To 2026-11-05 | Alkermes plc and subsidiaries | Business, ownership, operating model, governance flags | Credit agreement and proxy statement not supplied |

### Overall credit view

Overall, Alkermes presents an average business profile supported by four products, patents to 2039 and 2041 on its two psychiatric franchises and low capital intensity, but credit quality is constrained by acquisition leverage, a declining royalty stream and a 2029 to 2031 sequence of expiries and maturities. Cash-flow durability appears adequate to 2030 and not fully assessable after it. Refinancing capacity is likely to depend on how much of the exposed revenue is replaced by LUMRYZ and the orexin programmes before USD 1,347.56 million of term loans falls due in 2031. The primary downside path is generic entry for VIVITROL and the end of the Janssen royalties meeting that refinancing. Further analysis would require cash interest paid, the covenant levels, the fourth-quarter 2025 adjusted EBITDA and any rating. Top risk: refinancing the 2031 term loans after the 2029 and 2030 expiries.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation G5; calculation G6

## Calculations

| Calc ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| G1 | Leverage figures carried from Financial foundation (no new calculation) | Gross debt 1,497.731; cash 631.314; net debt 866.417; last-twelve-months reported EBITDA 146.169; FY2025 net cash 388.570 (USD million) | Total debt over EBITDA 10.25x; net debt over EBITDA 5.93x; net debt USD 866.417 million; net cash USD 388.570 million at 2025-12-31 | Financial foundation (CP-1) |
| G2 | Growth and margins | Revenue 1,369.052 against 1,091.352; Q3 480.132 against 394.185; adjusted EBITDA 339.544 against 293.658; Q3 120.065 against 121.546; reported EBITDA 81.798 against 221.217 (USD million) | Revenue up 25.45% (nine months) and 21.80% (Q3); adjusted EBITDA up 15.63%; adjusted margin 24.80% against 26.91%, change −2.11 percentage points; Q3 adjusted margin 25.01% against 30.83%, change −5.83 percentage points; reported margin 5.97% against 20.27% | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 |
| G3 | Coverage proxies on interest expense (not cash interest) | Q3 interest expense 27.551; nine-month 74.368; Q3 EBITDA 62.960 and adjusted 120.065; nine-month 81.798 and 339.544 (USD million) | Q3: 2.29x reported and 4.36x adjusted; nine months: 1.10x reported and 4.57x adjusted | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 |
| G4 | Cash conversion | Last-twelve-months free cash flow 227.368 and operating cash flow 242.986 over gross debt 1,497.731; nine-month operating cash flow 72.917 against 350.685 (USD million) | Free cash flow 15.18% of gross debt; operating cash flow 16.22% of gross debt; nine-month operating cash flow down 79.21% | Financial foundation (CP-1) |
| G5 | Revenue exposed to the 2029 and 2030 expiries | VIVITROL 364.448 plus long-acting INVEGA royalties 71.874 over total revenues 1,369.052 (USD million) | 31.87% | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 22 |
| G6 | Maturity wall and cash cover | Principal due before 2031: 6.625 + 26.500 + 40.563 + 45.250 + 45.250 = 164.188; due 2031: 1,347.562; total 1,511.750; cash 631.314; cash and investments 787.574 (USD million) | USD 164.188 million before 2031, 10.86% of principal, and USD 1,347.562 million in 2031, 89.14% of principal; cash covers the earlier principal 3.85x and cash with investments 4.80x | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29 |
| G7 | Cost ratios, nine months 2026 | Cost of goods 253.910; R&D 337.385; SG&A 690.720 over revenue 1,369.052 (USD million) | 18.55%, 24.64% and 50.45%; R&D up 46.10% and selling and marketing up 27.13% | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 34 |
| G8 | Hedge cover | Collars of 375.0 + 375.0 = 750.0 notional with a Term SOFR cap of 5.25%, over principal 1,511.750 (USD million) | 49.61% hedged; USD 761.750 million unhedged | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30 |
| G10 | Fourth-quarter amounts implied by the 2026 expectations | Revenue expectation 1,730 to 1,840 less nine-month revenue 1,369.052; adjusted EBITDA expectation 370 to 410 less nine-month adjusted EBITDA 339.544; Q3 adjusted EBITDA 120.065 (USD million) | Fourth-quarter revenue USD 360.948 million to USD 470.948 million (rounded USD 360.95 million to USD 470.95 million); fourth-quarter adjusted EBITDA USD 30.456 million to USD 70.456 million (rounded USD 30.46 million to USD 70.46 million); Q3 adjusted EBITDA USD 120.07 million | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 2; EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 3; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 |
| G11 | Product shares and legacy growth carried from Business & governance (no new calculation) | Nine-month 2026 shares of revenue: VIVITROL 26.62%, ARISTADA 21.51%, LYBALVI 20.62%, LUMRYZ 16.51%; legacy product sales excluding LUMRYZ up 8.28% in nine months and 3.13% in Q3; 6% list price rise on 2026-01-01; deductions 46.6% of gross product sales and 47.7% in Q3 | Four products 16.51% to 26.62% of revenue; legacy growth 8.28% and 3.13% | Business & governance (CP-1A) |
| G9 | Amounts rounded to two decimals for the narrative (half up) | Net debt 866.417; net cash 388.570; cash 631.314; principal due before 2031 164.188; due 2031 1,347.562; adjusted EBITDA nine months 339.544; investments 156.260; operating cash flow 72.917 and 350.685; free cash flow 227.368; capital additions 15.638; intangibles excess 469.556; revenue LTM 1,753.599; capital spending 15.638 (USD million) | USD 866.42 million; USD 388.57 million; USD 631.31 million; USD 164.19 million; USD 1,347.56 million; USD 339.54 million; USD 156.26 million; USD 72.92 million; USD 350.69 million; USD 227.37 million; USD 15.64 million; USD 469.56 million; USD 1,753.60 million; USD 1,497.73 million gross debt | Calculations G1 to G8 and Financial foundation |

## Gaps

- Cash interest paid is not stated for 2025 or 2026, so interest cover and cash debt service capacity cannot be assessed; severity High; the nine-month and fourth-quarter 2025 cash flow disclosures would close it.
- Covenant levels and compliance ratios are not printed, so liquidity headroom and any covenant-driven downside are not established; severity Medium; the credit agreement and a compliance certificate would close it.
- The fourth-quarter 2025 release is not among the sources, so FY2025 adjusted EBITDA and a clean last-twelve-months adjusted figure are missing; severity High.
- No rating, market price, peer set or portfolio limit was supplied, so the assessments are not benchmarked and no relative-value view is possible; severity Low for this analysis.
- The holder register, board and related-party disclosures are in a proxy statement that was not supplied; severity Medium.
- The earlier Source readiness analysis cites the page after the one that carries the third-quarter release's cash and investments totals; this analysis does not rely on that reference; severity Low.

## Next module

The orchestrator selects the next module.
