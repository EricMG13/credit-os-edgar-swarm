---
module_id: CP-2
module_name: Fundamental credit
issuer_id: magn
analysis_date: 2026-11-05
run_id: magn-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
---

# CP-2 handoff: Magnera Corp (magn)

## Request
Fundamental credit assessment of Magnera Corp (magn), as of 2026-11-05, on the credit snapshot pathway. The scope is the business and financial profile, the main supports and weaknesses, the primary downside path and the signals to monitor, built from the supplied filings and the earlier modules' findings.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-09-27_form10k.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2025-09-27 | 2025-11-25 | 8a2d31e8517added759c44fb832ba0e833b0182f88931d77ac8b15219681b6e7 | Maturity note, customer concentration, price-cost spread history, controls opinion. |
| 10-Q_2025-12-27_form10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2025-12-27 | 2026-02-05 | fc18cf0b3124192f072f0a094fbc1605152c44349946b7208b65f0ac25d88f0f | First quarter controls conclusion and debt note. |
| 10-Q_2026-03-28_form10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-28 | 2026-05-07 | 00a31fc7f5573cbb41dba62ba9751e7ac35317c740673bba1de0ff348e567d96 | Second quarter price-cost spread and debt note. |
| 10-Q_2026-06-27_form10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-27 | 2026-08-06 | 9bf0a737948e12b9a435299f2c1d5be9f80cbb7bbc87ba8bb4baa3f7134d16c0 | Newest debt note, liquidity text, interest sensitivity, outlook and controls conclusion. |
| EX-99.1_2026-02-05_ef20064605_ex99-1.htm.jsonl | Earnings release for the first quarter of fiscal 2026 (Exhibit 99.1) | 2026-02-05 | 2c929f0530d2fad28d8d608f7ff32ddbeacac9282e05451c75240bd19f5fad90 | Original fiscal 2026 guidance and synergy add-back. |
| EX-99.1_2026-05-07_ef20072634_ex99-1.htm.jsonl | Earnings release for the second quarter of fiscal 2026 (Exhibit 99.1) | 2026-05-07 | 35c908fa7ed7e14681927f2c36fd3b1ad0328d835bdae7fd06641846130d5ea2 | Second quarter synergy add-back and free cash flow. |
| EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl | Earnings release for the third quarter of fiscal 2026 (Exhibit 99.1) | 2026-08-06 | 907fd63efeb9c514c2f2ef515ae237b76f56ae49850c45b010a3ceaedd06a508 | Third quarter synergy add-back, raw material comment and guidance language. |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 46328c881cda3b884534bb9d82387479cf67ab83525ba3706620ec778f418e03 | Source limits: no credit agreement, indenture, rating or market price, and the missing fiscal 2026 annual report. |
| Financial foundation | CP-1 | 2cfa5fc5a54060b4afeb3080f34399293f4877e7285cfabab0f86b9fc369e06c | Statements, debt, liquidity, leverage, cover, free cash flow and definition conflicts. |
| Business & governance | CP-1A | 44f9b313e384d539f187098425638194c973c8f373cf2a376a8df430ff47a21e | Business, ownership, operating drivers, governance and financial policy flags. |

## Findings

### Bottom line

Magnera's fundamental credit is weak to average: scale and stable consumer end markets support the business, but net leverage of 6.48x reported EBITDA and thin, uneven free cash flow leave creditors reliant on cost savings and an orderly refinancing before 2029.

Cash interest cover was only 1.70x in fiscal 2025 and nine-month free cash flow was USD 32 million against USD 1,901 million of debt, but nothing matures until October 2029 and net leverage is 4.36x on the issuer's adjusted EBITDA. That gives time to reduce debt, though a repeat of last year's price-cost squeeze would lift net leverage to 4.53x.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation X1; calculation X3; calculation X5; calculation X15

### Key findings

- Leverage is high, and whether it looks acceptable depends on the issuer's adjustments. Net debt of USD 1,621 million is 6.48x reported EBITDA of USD 250 million and 4.36x adjusted EBITDA of USD 372 million, so USD 122 million of add-backs, mostly restructuring and non-cash charges, decides the picture; creditors should lean on the reported figure until restructuring charges stop.
Basis: Financial foundation (CP-1); calculation X1; calculation X10
- Cash generation is the binding weakness. Free cash flow was USD 36 million in fiscal 2025 and USD 32 million in nine months of fiscal 2026, because cash interest, restructuring, taxes, capital spending and working capital absorb most of the EBITDA, so the issuer's outlook of USD 90 million to USD 110 million for the year needs USD 58 million to USD 78 million in the fourth quarter. Reported EBITDA covered cash interest only 1.70x in fiscal 2025, and 35.91% of principal is floating-rate, so a rate rise reaches that thin cover directly.
Basis: Financial foundation (CP-1); 10-K_2025-09-27_form10k.htm.jsonl, page 37; 10-K_2025-09-27_form10k.htm.jsonl, page 40; 10-Q_2026-06-27_form10q.htm.jsonl, page 13; 10-Q_2026-06-27_form10q.htm.jsonl, page 19; calculation X3; calculation X5; calculation X6; calculation X9; calculation X31
- The maturity profile is the main support. No debt matures until the 2029 notes of USD 500 million in October 2029, 74.57% of principal falls due in 2031, and cash of USD 280 million plus the USD 350 million revolver commitment gives USD 630 million on a commitment basis, so near-term liquidity is adequate while revolver availability itself is not stated.
Basis: 10-K_2025-09-27_form10k.htm.jsonl, page 34; 10-Q_2026-06-27_form10q.htm.jsonl, page 8; 10-Q_2026-06-27_form10q.htm.jsonl, page 19; calculation X7; calculation X8
- Business quality is average, not strong. Net sales of USD 3,204 million, over a thousand customers and consumer end markets give breadth, but adjusted EBITDA was only 11.05% of sales in fiscal 2025, selling prices follow raw material costs with a lag, and ten customers make up 42% of sales with many lacking long-term arrangements, so margin depends on pass-through timing rather than pricing power.
Basis: Business & governance (CP-1A); 10-K_2025-09-27_form10k.htm.jsonl, page 8; calculation X11; calculation X22
- Financial policy is mixed. There is no controlling sponsor, no dividend or repurchase in 2026 and USD 65 million of debt was repaid, which supports creditors; against that, internal controls over financial reporting were judged ineffective and management says it intends to pursue acquisitions, which could add debt.
Basis: Business & governance (CP-1A); calculation X20
- The primary downside path is a raw material pass-through squeeze, not a liquidity gap. A loss like the USD 14 million Americas price-cost shortfall of fiscal 2025 would cut adjusted EBITDA to USD 358 million, lift net leverage to 4.53x, cut cover of interest expense to 2.37x and take the free cash flow outlook to USD 76 million to USD 96 million, which slows deleveraging and tightens refinancing rather than exhausting cash.
Basis: 10-K_2025-09-27_form10k.htm.jsonl, page 17; EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 1; calculation X15; calculation X16

### Contrary evidence and what would change the view

The strongest evidence for a better view is momentum: last-twelve-months adjusted EBITDA rose from USD 354 million at fiscal year end to USD 372 million, the synergy and cost reduction add-back fell from USD 60 million to USD 35 million as savings reached results, net leverage on adjusted EBITDA fell from 4.65x to 4.36x, and management reaffirmed its free cash flow outlook. If adjusted EBITDA reached the guidance range of USD 380 million to USD 410 million, net debt would be 4.27x to 3.95x, which would move the credit to average. Management itself expects the lower end of that range, and USD 372 million is USD 8 million short of it.

The view would improve on free cash flow at or above USD 90 million for the year, continued repayment and remediation of the control weaknesses. It would weaken if adjusted EBITDA stays below the low end of guidance, if the price-cost spread turns negative again, or if an acquisition is funded with debt.
Basis: Financial foundation (CP-1); EX-99.1_2026-02-05_ef20064605_ex99-1.htm.jsonl, page 2; EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 1; EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 6; calculation X13; calculation X14; calculation X19

### Limitations

- No credit agreement or indenture was supplied, so covenant terms, collateral, guarantor scope and capacity to add debt are not assessed, and this view says nothing about recovery.
- Revolver availability after letters of credit is not stated, so liquidity is a commitment-basis figure that could be lower and would change the near-term liquidity assessment.
- Cash interest paid is printed for fiscal 2025 only, so 2026 cover rests on accrued interest expense, which includes non-cash interest and so understates cover on cash interest.
- The fiscal year ended 2026-09-26 is not reported, so leverage and liquidity are measured at June 27, 2026 and the fourth-quarter outlook is management's own.
- No ratings or market prices were supplied, so the view is not compared with agency opinions or with how the market prices the debt.

### Strengths and weaknesses

Scale and breadth are the first strength. Net sales of USD 3,204 million across 45 plants and over a thousand customers, weighted to personal care and consumer products, spread volume risk across end markets and regions, which supports cash flow stability, although the price-cost lag limits the benefit.
Basis: Business & governance (CP-1A); calculation X22

The second strength is the debt calendar. The term loan and notes carry no financial maintenance covenants, nothing matures before October 2029, and USD 630 million of cash and revolver commitment sits against no near-term obligation, so an earnings dip does not trigger a covenant default and the issuer has time to repair leverage.
Basis: 10-Q_2026-06-27_form10q.htm.jsonl, page 9; 10-Q_2026-06-27_form10q.htm.jsonl, page 19; calculation X7; calculation X8

The third strength is evidence that savings are arriving. The synergy and cost reduction add-back fell by USD 25 million over three releases and the third quarter price-cost spread was USD 11 million favourable, which raises EBITDA without volume, and the issuer has repaid USD 65 million of debt and paid no distribution since the merger.
Basis: EX-99.1_2026-02-05_ef20064605_ex99-1.htm.jsonl, page 6; EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 6; 10-Q_2026-06-27_form10q.htm.jsonl, page 15; calculation X19; calculation X20; calculation X23

The first weakness is leverage that relies on add-backs: net leverage of 6.48x reported and 4.36x adjusted, so an EBITDA miss of 5% would lift net leverage to 4.59x. The second is weak free cash flow, USD 32 million in nine months, which makes deleveraging depend on the fourth quarter and on working capital. The third is thin margin with a weak Rest of World segment, whose adjusted EBITDA margin was 8.70% against 13.82% in the Americas, so Europe's soft volumes pull group earnings down.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation X1; calculation X5; calculation X12; calculation X28

The fourth weakness is reporting quality: the auditor's adverse opinion on internal control and management's ineffective disclosure controls reduce reliance on every reported ratio. The fifth is the stated intent to pursue acquisitions while debt stands at USD 1,901 million, which could raise leverage before the current debt is reduced.
Basis: 10-K_2025-09-27_form10k.htm.jsonl, page 22; 10-Q_2026-06-27_form10q.htm.jsonl, page 13; 10-Q_2026-06-27_form10q.htm.jsonl, page 20; Business & governance (CP-1A)

### Business, ownership and operating model

Magnera supplies specialty nonwoven and related materials for hygiene, wipes, healthcare, filtration and food and beverage uses from 45 plants, with Americas 55.34% and Rest of World 44.66% of nine-month net sales. The customer base is broad by count but concentrated at the top, with the largest customer at 14% and ten customers at 42% of fiscal 2025 sales, so revenue is predictable in aggregate because the products are consumed in everyday goods, yet exposed to a single account moving volume. The merger of November 2024 created the current group and left no controlling holder, so support must come from the business itself.
Basis: Business & governance (CP-1A); calculation X12; calculation X22

Revenue moves with raw material cost more than with demand: selling prices fell by USD 117 million over nine months on pass-through of lower resin and pulp costs and mix, while organic volume was down 1% and Rest of World volume down 3%. Cost flexibility comes from Project CORE plant rationalisation and merger synergies, which the issuer credits for a third quarter price-cost gain of USD 11 million, while restructuring and other activities cost USD 61 million in cash payments in nine months, so margin improvement is real but is being paid for in cash that does not reach debt service.
Basis: 10-Q_2026-06-27_form10q.htm.jsonl, page 7; 10-Q_2026-06-27_form10q.htm.jsonl, page 15; 10-Q_2026-06-27_form10q.htm.jsonl, page 17; 10-Q_2026-06-27_form10q.htm.jsonl, page 18; EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 2; Business & governance (CP-1A); calculation X26; calculation X27

Cash conversion is poor: free cash flow was 11.35% of adjusted EBITDA in nine months of fiscal 2026. Capital additions were only 1.80% of net sales and the outlook for the year was cut to USD 60 million from USD 80 million, so the first call on cash after capital spending is restructuring and interest, and the room to cut capex further may be limited by the need to maintain 45 plants.
Basis: Financial foundation (CP-1); 10-Q_2026-06-27_form10q.htm.jsonl, page 13; calculation X17; calculation X18

### Market forces

Competition is a real constraint: the annual report names six competitors, some with greater resources, and says many customers can shift suppliers quickly because they hold no long-term arrangement, so price pressure can arrive when raw material costs fall as well as rise. Buyer power is the strongest force because ten customers account for 42% of sales. Supplier power is high because resin and pulp prices are set outside the company and are passed on only with a lag. The documents say nothing on the threat of new entrants or substitutes, so those forces are not established.
Basis: 10-K_2025-09-27_form10k.htm.jsonl, page 6; 10-K_2025-09-27_form10k.htm.jsonl, page 8; 10-K_2025-09-27_form10k.htm.jsonl, page 27; calculation X22

Foreign exchange and tariffs are the macro factors that matter: translation and transaction exposure to the euro, Brazilian real and Argentine peso moved net sales by USD 105 million in favour of the issuer over nine months, and tariffs are named as an outlook risk, so a stronger dollar would reduce reported earnings and the dollar cover of interest without changing the underlying business.
Basis: 10-Q_2026-06-27_form10q.htm.jsonl, page 13; 10-Q_2026-06-27_form10q.htm.jsonl, page 17

### Financial profile and credit quality

On the nine factors of the financial profile, scale and market position is a strength, competitive advantage is average because no moat beyond scale and customer relationships is evidenced, and business diversification is average given regional and end-market breadth but concentrated customers. Cost and capex flexibility is average, margin stability is weak because spread swings by USD 5 million to USD 14 million a quarter or year against EBITDA of USD 372 million, and free cash flow stability is weak. Ability to refinance is average, supported by the debt calendar and limited by leverage and thin cover, liquidity is average because availability is not stated, and financial policy and governance is average, with creditor-friendly behaviour offset by weak controls.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation X5; calculation X11; calculation X23

The trend is improving but slowly: net debt fell USD 26 million in nine months, leverage on adjusted EBITDA fell from 4.65x to 4.36x mostly through higher EBITDA, and the main missing datapoints are revolver availability, cash interest for 2026 and the debt documents.
Basis: Financial foundation (CP-1); calculation X14; calculation X21

### Outlook

Over the next twelve to twenty-four months the issuer's own outlook is for free cash flow of USD 90 million to USD 110 million this year and adjusted EBITDA at the lower end of USD 380 million to USD 410 million, which at current net debt would put net leverage at 4.27x to 3.95x; delivery supports a move toward average credit quality, while a miss leaves leverage near today's level with the 2029 maturities approaching. Tailwinds are the savings from the merger and Project CORE and lower capital spending; headwinds are raw material inflation that management calls a significant spike, soft European volume, higher cost of floating-rate debt and the cash cost of restructuring.
Basis: EX-99.1_2026-02-05_ef20064605_ex99-1.htm.jsonl, page 2; EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 1; 10-Q_2026-06-27_form10q.htm.jsonl, page 13; calculation X13

Over three to five years the 2029 notes of USD 500 million and the revolver fall due in 2029 and USD 1,466 million falls due in 2031, so creditors need leverage to be lower before the first maturity; management says it intends to refinance debt before maturity but market access cannot be assessed from the documents supplied.
Basis: 10-Q_2026-06-27_form10q.htm.jsonl, page 19; calculation X8

### Downside scenario

The realistic downside starts with raw material inflation, which management already describes as a significant spike. Because contracts pass cost through with a lag, the first operating break is a negative price-cost spread; the issuer's own history shows what that costs, with the Americas segment losing USD 14 million of spread in fiscal 2025 and USD 5 million in the second quarter of fiscal 2026. Repeating the larger loss against last-twelve-months adjusted EBITDA of USD 372 million gives USD 358 million, net leverage of 4.53x and cover of interest expense of 2.37x, and cuts the free cash flow outlook to USD 76 million to USD 96 million, so the year's low end of USD 90 million is missed.
Basis: EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 1; 10-K_2025-09-27_form10k.htm.jsonl, page 17; 10-Q_2026-03-28_form10q.htm.jsonl, page 14; calculation X15; calculation X16; calculation X23

Management levers are lower capital spending, which is already USD 60 million, a slower pace of restructuring and the USD 350 million revolver. Resilience looks sufficient to avoid a liquidity shortfall because cash of USD 280 million is large against a squeeze of this size and nothing matures until 2029, so the consequence is slower deleveraging and a tighter market when the 2029 debt must be refinanced; the observable triggers are a negative price-cost spread, free cash flow below the low end of the outlook and adjusted EBITDA below USD 380 million.
Basis: 10-Q_2026-06-27_form10q.htm.jsonl, page 13; 10-Q_2026-06-27_form10q.htm.jsonl, page 19; calculation X7; calculation X13; calculation X15

### Overall credit view

Overall, Magnera presents an average business profile supported by scale, consumer end markets and a long debt calendar, but credit quality is constrained by net leverage of 6.48x reported EBITDA, thin cash interest cover and weak free cash flow. Cash-flow durability appears weak because cash interest, restructuring, taxes, capital spending and working capital absorb most of EBITDA. Refinancing capacity is likely to depend on adjusted EBITDA reaching the guidance range and free cash flow reaching USD 90 million for the year. The primary downside path is a raw material pass-through squeeze that cuts EBITDA and slows deleveraging before the 2029 maturities. Further analysis would require the credit agreement and indentures, revolver availability, 2026 cash interest and the fiscal 2026 annual report.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation X1; calculation X3; calculation X15

Fundamental credit completed. Top risk: a raw material pass-through squeeze that cuts EBITDA and slows deleveraging ahead of the 2029 maturities.

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| Raw material inflation | Hits spread before prices catch up | Documentary Fact | Price-cost spread | Q3 release: spike in raw material costs |
| Price-cost spread | Moves EBITDA by USD 5 million to USD 14 million | Documentary Fact | Adjusted EBITDA | Annual and quarterly reports on segments |
| Adjusted EBITDA | Sets the leverage ratio creditors read | Analyst Interpretation | Net leverage | Calculations X1 and X15 |
| Weak free cash flow | Leaves little cash to repay debt | Documentary Fact | Debt reduction | Quarterly cash flow statements |
| Floating-rate term loan | Passes rate rises into interest cost | Documentary Fact | Interest cover | Quarterly report on market risk |
| European volume softness | Cuts Rest of World volume by 3% | Documentary Fact | Segment earnings | Quarterly report, segment overview |
| Control weaknesses | Lower reliance on reported ratios | Analyst Interpretation | Credit monitoring | Annual report, auditor's opinion |
| Acquisition intent | May be funded with debt | Management Language | Net leverage | Quarterly report, acquisition strategy |
| 2029 and 2031 maturities | Create a refinancing need | Documentary Fact | Refinancing capacity | Annual and quarterly debt notes |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 14 |
| Calculated | 16 |
| Assumption-Based | 0 |
| Analyst Inference | 8 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 5 |
| Fields present | 5 |
| Fields total | 5 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 2 |

### T2.1 Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SRC-01 | 10-K_2025-09-27_form10k.htm.jsonl | High | Fiscal year ended 2025-09-27 | Magnera Corporation consolidated | Maturity note, customer concentration, price-cost spread history, controls opinion. | Audited with an adverse opinion on internal control | Fundamental credit synthesis |
| SRC-02 | 10-Q_2025-12-27_form10q.htm.jsonl | Medium | Quarter ended 2025-12-27 | Magnera Corporation consolidated | First quarter controls conclusion and debt note. | Unaudited | Fundamental credit synthesis |
| SRC-03 | 10-Q_2026-03-28_form10q.htm.jsonl | Medium | Quarter ended 2026-03-28 | Magnera Corporation consolidated | Second quarter price-cost spread and debt note. | Unaudited | Fundamental credit synthesis |
| SRC-04 | 10-Q_2026-06-27_form10q.htm.jsonl | Medium | Quarter ended 2026-06-27 | Magnera Corporation consolidated | Newest debt note, liquidity text, interest sensitivity, outlook and controls conclusion. | Unaudited | Fundamental credit synthesis |
| SRC-05 | EX-99.1_2026-02-05_ef20064605_ex99-1.htm.jsonl | Medium | Quarter ended 2025-12-27 | Magnera Corporation consolidated | Original fiscal 2026 guidance and synergy add-back. | Unaudited | Fundamental credit synthesis |
| SRC-06 | EX-99.1_2026-05-07_ef20072634_ex99-1.htm.jsonl | Medium | Quarter ended 2026-03-28 | Magnera Corporation consolidated | Second quarter synergy add-back and free cash flow. | Unaudited | Fundamental credit synthesis |
| SRC-07 | EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl | Medium | Quarter ended 2026-06-27 | Magnera Corporation consolidated | Third quarter synergy add-back, raw material comment and guidance language. | Unaudited | Fundamental credit synthesis |
| SRC-08 | Source readiness handoff | Medium | Run as of 2026-11-05 | Magnera Corporation consolidated | Source limits and conflicts | Module output; re-checked against the filings where cited | Fundamental credit synthesis |
| SRC-09 | Financial foundation handoff | Medium | FY2024 to the quarter ended 2026-06-27 | Magnera Corporation consolidated | Statements, leverage, cover, free cash flow | Module output; re-checked against the filings where cited | Fundamental credit synthesis |
| SRC-10 | Business & governance handoff | Medium | Run as of 2026-11-05 | Magnera Corporation consolidated | Business, ownership, governance flags | Module output; re-checked against the filings where cited | Fundamental credit synthesis |

Module status: ready with limitations, because the debt documents, revolver availability, ratings and the fiscal 2026 annual report were not available.

### T2.10 Materiality filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Leverage that relies on add-backs | Net debt USD 1,621 million is 6.48x reported and 4.36x adjusted EBITDA; add-backs of USD 122 million | An EBITDA miss of 5% lifts net leverage to 4.59x and refinancing terms depend on it | Higher refinancing risk and lower recovery cushion if EBITDA slips | Negative | High |
| 2 | Weak, uneven free cash flow and thin cover | Free cash flow USD 32 million in nine months; cash interest cover 1.70x in fiscal 2025 | Cash interest, restructuring, taxes, capital spending and working capital absorb EBITDA, leaving little for debt reduction | Slow deleveraging and little room for a rate or margin shock | Negative | High |
| 3 | Long debt calendar | No maturity until October 2029 (USD 500 million), USD 1,466 million in 2031; no financial maintenance covenants | Time and no earnings test before refinancing | Lower near-term default risk and time to repair leverage | Positive | High |
| 4 | Raw material pass-through lag | Price-cost spread of minus USD 14 million in the Americas in fiscal 2025 and plus USD 11 million in the third quarter | Spread swings drive EBITDA more than volume | Downside path to higher leverage and lower cover | Negative | Medium |
| 5 | Scale and consumer end markets | Net sales USD 3,204 million; 45 plants; over a thousand customers; Personal Care 45% and Consumer Solutions 55% | Broad volume base across regions and consumer uses | Supports earnings stability in aggregate | Positive | Medium |
| 6 | Floating-rate exposure | Term loan is 35.91% of principal; 0.25 percentage points adds about USD 2 million of annual interest | Rate rises feed straight into thin cover | Pressure on cover if rates rise | Negative | Medium |
| 7 | Savings and debt repayment | Synergy add-back down from USD 60 million to USD 35 million; USD 65 million of debt repaid; no distributions | Savings reach results and cash is retained | Supports gradual deleveraging | Positive | Medium |
| 8 | Liquidity on a commitment basis | Cash USD 280 million and a USD 350 million revolver, availability not stated | Cash covers a squeeze but the revolver may be partly unavailable | Adequate near term, unverified | Positive | Medium |
| 9 | Rest of World margin and volume | Adjusted EBITDA margin 8.70% against 13.82% in the Americas; organic volume down 3% | Weak segment earns less per dollar and is exposed to European demand | Drags group earnings and cover | Negative | Medium |
| 10 | Weak financial reporting controls and acquisition intent | Adverse opinion on internal control; disclosure controls not effective; stated intent to acquire | Lower reliance on ratios; acquisitions could add debt | Monitoring risk and possible leverage rise | Negative | Medium |

### T2.12 Monitoring triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
| --- | --- | --- | --- | --- |
| Revenue decline | Quarterly net sales below the prior-year quarter, as in the second quarter of 2026 when they fell by 3.40% | Volume and price both feed EBITDA | Lower EBITDA and slower deleveraging | Financial foundation; analyst reference point, not an issuer or covenant threshold |
| EBITDA margin pressure | Adjusted EBITDA margin below the fiscal 2025 level of 11.05%, or a negative price-cost spread | Spread drives earnings | Higher net leverage and lower cover | Financial foundation; analyst reference point |
| FCF deterioration | Fourth-quarter free cash flow below USD 58 million, which would put the year below the outlook low end of USD 90 million | The issuer's own outlook is the test of cash generation | Slower debt reduction | Third quarter report and calculation X6; issuer outlook |
| Liquidity reduction | Cash below USD 264 million, the lowest of the four reported dates, or any disclosed revolver availability below the USD 350 million commitment | Cash is the first buffer | Lower runway | Financial foundation; availability not stated, analyst reference point |
| Leverage increase | Net debt above 4.65x adjusted EBITDA, the fiscal 2025 year-end level | Leverage is the main constraint | Higher refinancing risk | Financial foundation; analyst reference point |
| Refinancing delay | No refinancing or extension of the October 2029 notes (USD 500 million) and the November 2029 revolver by the time they fall within the next twelve months | Both fall due together in 2029 | Higher refinancing and liquidity risk | Debt note maturity dates; the twelve-month point is an analyst reference |
| Sponsor/shareholder action | A debt-funded acquisition, any dividend or share repurchase, or a restatement | These are the stated and observable ways financial policy could turn adverse | Higher leverage or lower confidence in reported ratios | Business & governance; capacity under the debt documents not read |
| Sector deterioration | Rest of World organic volume decline deeper than the 3% of the nine months, or raw material cost spikes without pass-through | Europe is the weaker segment and resin cost drives spread | Lower segment earnings | Quarterly report segment overview; analyst reference point |

### cp2.cp_model_strengths_weaknesses Strengths and weaknesses fields

| direction | rank | label | mechanism | evidence_ids | status | source_id | source_locator | as_of |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STRENGTH | 1 | Long debt calendar | No maturity before October 2029 and no maintenance covenants give time to repair leverage | X7; X8 | READY | 10-K_2025-09-27_form10k.htm.jsonl | page 34 | 2026-06-27 |
| STRENGTH | 2 | Scale and consumer end markets | Broad volume base supports aggregate earnings | X22 | READY | 10-K_2025-09-27_form10k.htm.jsonl | page 5 | 2026-06-27 |
| STRENGTH | 3 | Savings and debt repayment | Synergy add-back shrinking and debt repaid raise EBITDA and cut debt | X19; X20 | READY | EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl | page 6 | 2026-06-27 |
| WEAKNESS | 1 | Leverage relies on add-backs | A 5% EBITDA miss lifts net leverage to 4.59x | X1; X10; X28 | READY | EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl | page 6 | 2026-06-27 |
| WEAKNESS | 2 | Weak free cash flow and thin cover | Cash interest, restructuring, taxes, capital spending and working capital absorb EBITDA | X3; X5; X31 | READY | 10-Q_2026-06-27_form10q.htm.jsonl | page 4 | 2026-06-27 |
| WEAKNESS | 3 | Pass-through lag and weak Rest of World | Spread swings and Europe drive earnings below the group level | X12; X15 | READY | 10-Q_2026-06-27_form10q.htm.jsonl | page 18 | 2026-06-27 |
| WEAKNESS | 4 | Weak reporting controls | Lower reliance on reported ratios | X1 | READY | 10-K_2025-09-27_form10k.htm.jsonl | page 22 | 2025-09-27 |

## Calculations

| ID | Calculation | Inputs | Result |
| --- | --- | --- | --- |
| X1 | Net leverage at 2026-06-27 | Net debt 1,621 over reported EBITDA 250 and adjusted EBITDA 372 | 6.48x; 4.36x |
| X2 | Total leverage at 2026-06-27 | Total debt 1,901 over reported EBITDA 250 and adjusted EBITDA 372 | 7.60x; 5.11x |
| X3 | Cash interest cover, fiscal 2025 | Reported EBITDA 211 and adjusted EBITDA 354 over cash interest paid 124 | 1.70x; 2.85x |
| X4 | Cover of interest expense, net, twelve months to 2026-06-27 | Reported EBITDA 250 and adjusted EBITDA 372 over interest expense, net 151 | 1.66x; 2.46x |
| X5 | Free cash flow | Operating cash flow less capital additions: fiscal 2025 103 less 67; nine months 76 less 44; first quarter 2 less 15; second quarter 87 less 14; third quarter minus 13 less 15 | 36; 32; outflow of 13; 73; outflow of 28 |
| X6 | Fourth quarter free cash flow needed for the outlook | Outlook 90 to 110 less nine-month free cash flow 32 | 58 to 78 |
| X7 | Cash plus revolver commitment | Cash 280 plus revolving credit facility commitment 350; availability net of letters of credit is not stated | 630 |
| X8 | Maturity profile at 2026-06-27 | 2029 notes 500; 2031 term loan 706 plus 2031 notes 760 is 1,466; principal 1,966 | 74.57% of principal due in 2031 |
| X9 | Floating-rate share of principal | Term loan 706 over principal 1,966; issuer states a 0.25% move changes annual interest by about 2 | 35.91%; about 2 per 0.25 percentage points |
| X10 | Gap between adjusted and reported EBITDA | Adjusted 372 less reported 250 | 122 |
| X11 | Adjusted EBITDA margin | Fiscal 2025 354 over 3,204; third quarter 99 over 857 | 11.05%; 11.55% |
| X12 | Segment adjusted EBITDA margin, nine months | Americas 187 over 1,353; Rest of World 95 over 1,092 | 13.82%; 8.70% |
| X13 | Net leverage at the guidance range for adjusted EBITDA | Net debt 1,621 over 380 and over 410; last-twelve-months adjusted EBITDA 372 is 8 below 380 | 4.27x; 3.95x |
| X14 | Net leverage at fiscal year end 2025 on adjusted EBITDA, and at June 2026 on fiscal 2025 EBITDA | Net debt 1,647 over 354; net debt 1,621 over 354 | 4.65x; 4.58x |
| X15 | Price-cost squeeze scenario | Fiscal 2025 Americas price-cost spread loss of 14 deducted from adjusted EBITDA 372; net debt 1,621 held; interest expense, net 151 | Adjusted EBITDA 358; net leverage 4.53x; cover of interest expense, net 2.37x |
| X16 | Free cash flow outlook after the same squeeze | Outlook 90 and 110 each less 14 | 76 to 96 |
| X17 | Capital additions over net sales, nine months | Additions 44 over net sales 2,445; outlook 60 against 80 earlier | 1.80% |
| X18 | Free cash flow over adjusted EBITDA | Nine months 32 over 282 | 11.35% |
| X19 | Synergy and cost reduction add-back | 60 at the first quarter release, 48 at the second, 35 at the third | Fell by 25 |
| X20 | Debt repaid from 2025-09-27 to 2026-06-27 | Term loan 25 plus 7.25% notes 40 | 65 |
| X21 | Net debt change | Net debt 1,647 at 2025-09-27 less 1,621 at 2026-06-27 | 26 |
| X22 | Customer concentration and scale | Top ten customers 42% and largest customer 14% of fiscal 2025 net sales of 3,204; product mix Personal Care 45% and Consumer Solutions 55% in the third quarter | 42%; 14%; 45%; 55% |
| X23 | Price-cost spread | Third quarter favourable 11; Americas second quarter unfavourable 5; Americas fiscal 2025 unfavourable 14 | 11; 5; 14 |
| X25 | Segment share of net sales, nine months | Americas 1,353 and Rest of World 1,092 over net sales 2,445 | 55.34%; 44.66% |
| X26 | Price, volume and currency effects on nine-month net sales | Selling prices down 117 on pass-through of lower raw material costs and mix; organic volume down 1%, Rest of World down 3%; foreign currency favourable 105 | 117; 1%; 3%; 105 |
| X27 | Restructuring cash payments, nine months | Cash payments under Project CORE and integration, as reported in the restructuring accrual | 61 |
| X28 | Net leverage if adjusted EBITDA is 5% lower | Adjusted EBITDA 372 times 0.95 is 353.4; net debt 1,621 over 353.4 | 4.59x against 4.36x |
| X29 | Net sales change in the second quarter of 2026 | Net sales 796 over prior-year 824 less one | -3.40% |
| X30 | Cash at the four reported dates | 2025-09-27 305; 2025-12-27 264; 2026-03-28 303; 2026-06-27 280 | Lowest 264 |
| X31 | Fiscal 2025 cash left from adjusted EBITDA | Adjusted EBITDA 354 less cash interest 124, capital additions 67, restructuring cash payments 77 and cash taxes 22; free cash flow reported 36 | 64 before working capital and other items |
| X24 | Non-debt claims noted by Financial foundation | Operating lease liabilities 60, pension 27, environmental 17, tax claim 66, swap liabilities 78 | 248 |

## Gaps

| Gap | Effect |
| --- | --- |
| Credit agreements and indentures were not supplied | Covenant terms, collateral, guarantor scope, priming and recovery are not assessed |
| Revolver availability after letters of credit is not stated | Liquidity is a commitment-basis figure and could be lower |
| Cash interest paid is printed for fiscal 2025 only | 2026 cover rests on accrued interest expense |
| The fiscal year ended 2026-09-26 is not reported | Leverage and liquidity are at 2026-06-27 and the fourth-quarter outlook is management's own |
| No ratings or market prices were supplied | No comparison with agency views or market pricing |
| Threats of new entrants and substitutes are not described in the documents | Those two competitive forces are not established |
| Pass-through share of sales, energy cost exposure and customer contract terms are not stated | Margin protection and revenue durability are read from outcomes only |

## Next module
The orchestrator selects the next module.
