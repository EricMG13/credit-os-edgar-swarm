---
issuer_id: vsec
module_id: CP-2
analysis_date: 2026-11-05
---

## Request

VSE CORP (issuer vsec), as of 2026-11-05, credit snapshot pathway. This module synthesizes the fundamental credit profile of VSE Corporation and its subsidiaries from the seven supplied sources and the supplied Source readiness, Financial foundation and Business & governance outputs.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_vsec-20251231.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2025-12-31 (audited) | 2026-02-27 | 83b072172f28f55aebaf3a6972f9c86687a4b113bdf988f323774cea0cf36aed | Business description, competition, customer group, risk factors, licences, auditor's critical audit matters, market risk, swaps |
| 10-Q_2026-03-31_vsec-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 (unaudited) | 2026-05-08 (signature date) | f6b924ea5eba470e1f49667b84c48b593c43a380b95f687d6114875e8f37f39d | Maturity ladder for the new term loan B and covenant types |
| 10-Q_2026-06-30_vsec-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 (unaudited) | 2026-08-06 (signature date) | fa3609d44d226dc8671529fb2fbfc175fcb641b5ffc98070769608107bc75600 | Not relied on beyond the figures carried in the supplied module outputs |
| 10-Q_2026-09-30_vsec-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 (unaudited) | 2026-11-05 (signature date) | 68af0ce7093699c714a705843bb9cea05a028d2dd1bb6a0a12fdd362022c36f1 | Balance sheet, income statement, cash flow, debt note, swaps, acquisitions, liquidity, revenue mix |
| EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl | Earnings press release for the first quarter of 2026 (exhibit 99.1) | 2026-05-05 | 1a0b0741e0cb41d8d01fb77bba0765b0d91e0ee2d640c0871a3ef4c38f0e2f04 | Organic growth, first guidance update, pro forma leverage statement |
| EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl | Earnings press release for the second quarter of 2026 (exhibit 99.1) | 2026-08-05 | 047a25aea3f55f6b12255c44556aba2d1cd8074d64427d9b3bf8fc3f0328e7e4 | Organic growth, guidance raise, leverage ratios at 2026-06-30 |
| EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl | Earnings press release for the third quarter of 2026 (exhibit 99.1) | 2026-11-04 | 433c5d4af4ceef97f7133d6bf32c06676acee7a23adece5c52f374d8108500f0 | Organic growth, margins, guidance, EBITDA and net debt reconciliations, leverage ratios |

Supplied module outputs used:

| Module | Document | sha256 | Use |
|---|---|---|---|
| Source readiness (CP-0) | Source readiness output for VSE CORP as of 2026-11-05 | e8747ba23c9379b015b26cb84fddf7ec7fb975f4a8e2ff5cc5d87b7825587d8f | Source inventory, gaps and conflicts |
| Financial foundation (CP-1) | Financial foundation output for VSE CORP as of 2026-11-05 | e8cad13c0a6493cccaaabaacdb4b908f9c1a7c8bc2bf8888d4bdd38349753f94 | Net debt, leverage, EBITDA bases, liquidity, maturity ladder, cash flow |
| Business & governance (CP-1A) | Business & governance output for VSE CORP as of 2026-11-05 | 36e20aef1e3221f889f8e2d5cb2f54d3cc60b633754e9182476fe6d517393bc0 | Business model, ownership, acquisition history, governance evidence |

## Findings

### Bottom line

VSE is an adequate but newly levered credit: record earnings and USD 545.0 million of liquidity support creditors, while thin cash conversion and undisclosed covenant levels leave deleveraging dependent on a fourth quarter that management has only promised.
Basis: Financial foundation (CP-1); EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; calculation C12; calculation C14

Net debt was USD 894.2 million at 2026-09-30, before the Test Logic purchase on 2026-10-05, whose pro forma effect is not established. Net leverage is 3.38x on reported EBITDA and 2.98x on Adjusted EBITDA, against management's 2.3x, which relies on earnings no filing itemizes. Free cash flow was USD -3.4 million in nine months, and guidance implies fourth-quarter revenue below the third quarter. The primary downside path is weaker engine aftermarket demand stranding inventory of USD 893.0 million while debt stays fixed.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 27; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C1; calculation C3; calculation C15; calculation C8

### Key findings

Earnings momentum is the main support for creditors, and part of it is organic. Adjusted EBITDA margin was 19.81% in Q3 against 16.74% a year earlier, organic revenue growth was about 15%, 14% and 17% in the first three quarters of 2026, and management raised revenue and margin guidance in both August and November. PAG supplied 32.10% of Q3 revenue and only about five months of it are in trailing results, so much of the scale gain is bought rather than earned.
Basis: EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 1; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, pages 2–3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C6; calculation C20; calculation C23

Leverage has almost doubled, and the evidence supports a range of 2.98x to 3.38x rather than management's 2.3x. Net debt rose from USD 223.4 million at year-end 2025 to USD 894.2 million at 2026-09-30, before the Test Logic purchase on 2026-10-05, whose pro forma effect is not established, and net leverage went from 1.74x to 3.38x on reported EBITDA. The 2.3x depends on USD 88.8 million of pre-acquisition earnings that no filing itemizes. The fall in issuer-stated net leverage from 3.6x at 2026-06-30 to 3.0x came from trailing Adjusted EBITDA rising USD 59.8 million as PAG quarters replaced earlier ones, not from lower debt: net debt rose USD 22.6 million in Q3 while the USD 64.1 million Atech purchase absorbed the USD 46.6 million of free cash flow.
Basis: Financial foundation (CP-1); EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 8; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 9; calculation C1; calculation C3; calculation C4; calculation C28

Cash conversion is the weakest part of the profile. Free cash flow was USD -3.4 million in nine months 2026 and USD 27.5 million over the last twelve months, 9.14% of Adjusted EBITDA, because inventory took USD 148.4 million of cash, including stock for a new OEM auxiliary power unit programme. Q3 free cash flow of USD 46.6 million was 43.50% of Adjusted EBITDA and shows what better conversion looks like, but it is one quarter, and management gives no fourth-quarter figure.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 33; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C14; calculation C15; calculation C16

Liquidity and the maturity profile protect creditors for the next two years. Cash of USD 65.8 million and undrawn revolver commitments of USD 479.2 million give USD 545.0 million, which is 6.03x the USD 90.4 million of 2027 scheduled principal and estimated interest, and 85.97% of principal is not due until 2033; the revolver matures in 2030, so no facility expires within twelve months. The only covenant evidence is a statement of compliance with a maximum net leverage ratio and a minimum interest coverage ratio, so how much of the revolver is usable under stress is not established.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 13; calculation C12; calculation C13; calculation C18

Asset quality is the main concern for recovery. Goodwill and intangibles are 62.59% of assets and 94.01% of equity, tangible equity is USD 178.7 million, and inventory is 19.93% of assets after the auditor named slow-moving inventory write-downs a critical audit matter. Tangible assets of USD 1,676.0 million cover debt principal 1.71x on book value, but much of that cover is inventory and receivables whose value under stress is not established.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 39–40; calculation C17; calculation C16

Margins have widened in both revenue types, which supports durability, but the record is short and was made in an upturn. Revenue less cost of products was 19.00% in nine months against 15.84%, and revenue less cost of services 14.86% against 10.10%, as repair rose to 58.78% of Q3 revenue. Management credits higher-margin engine products and repair, OEM licensed sales and acquisition synergies, and the margin of PAG itself is not itemized, so how much of the gain lasts through a downturn is not established.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; calculation C5; calculation C6; calculation C27

Financial policy is acquisitive but equity-led, which is the best governance evidence available. About USD 1.3 billion of equity and tangible equity units funded most of the USD 1.75 billion PAG cash price, dividends were 3.20% of nine-month Adjusted EBITDA and the only share repurchases are shares withheld for employee taxes, but six businesses were bought in 17 months and the PAG earn-out of up to USD 125.0 million can be paid in cash or equity at the issuer's choice. The proxy statement that would show board and ownership terms is not supplied.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 29; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 33; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 36; calculation C21; calculation C30

Guidance is credible on margin but implies a softer fourth quarter than the third. Full-year revenue growth of 65% to 66.5% implies fourth-quarter revenue of USD 520.5 million to USD 537.2 million, which is 0.70% to 3.78% below Q3 even though purchases closed in August and October add a fuller quarter, and Adjusted EBITDA of USD 98.2 million to USD 105.1 million against USD 107.2 million in Q3. Either the guide is conservative or demand is easing, and the fourth quarter is the nearest test of the view.
Basis: EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C7; calculation C8; calculation C23

### Contrary evidence and what would change the view

The strongest evidence for a more favourable view is that management's own measures show deleveraging: adjusted net leverage was 2.4x at 2026-06-30 and 2.3x at 2026-09-30, Q3 free cash flow was USD 46.6 million, margin guidance has been raised twice, and at the guided year-end Adjusted EBITDA a flat net debt would give 2.58x to 2.53x. If the fourth quarter delivers free cash flow that repays the revolver, if the pre-acquisition earnings are itemized and hold near USD 88.8 million, and if the covenant levels prove wide, the view would move toward a stronger business profile with adequate liquidity. It would turn weaker if fourth-quarter revenue falls below the guidance-implied USD 520.5 million, if inventory keeps building without cash conversion, or if the covenant levels sit close to current ratios; a 20% fall in Adjusted EBITDA alone, with net debt unchanged, would take net leverage to 3.72x.
Basis: EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 8; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C3; calculation C7; calculation C9; calculation C10

### Limitations

- The assessment of liquidity as Average assumes the revolver stays available, and the covenant definitions and levels that govern it are not disclosed, so tight headroom would reduce usable liquidity and lower the assessment to Weak.
  Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; calculation C12
- The margin and cash conversion judgements rest on about two quarters with PAG in the group and on an upturn in aviation demand, so a weak fourth quarter would lower both and a repeat of the Q3 record would raise them.
  Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 11; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; calculation C20; calculation C14
- The downside sensitivities apply percentage falls to trailing Adjusted EBITDA with net debt and interest held flat, and they leave out the Test Logic price, any earn-out cash and fourth-quarter cash flow, so they show the shape of the risk and not a forecast.
  Basis: calculation C10; calculation C9; calculation C11
- The competitive assessment relies on the issuer's own description of its industry because no market share, peer or industry data is supplied, so the judgement that pricing power is limited could be wrong in either direction.
  Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 8; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11
- Guidance covers revenue growth and Adjusted EBITDA margin only, with no capital expenditure, cash interest, tax or free cash flow figure, so the outlook for deleveraging is illustrative and the guided year-end ratios depend on cash flow that is not quantified.
  Basis: EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; calculation C9

### Company description and ownership

VSE Corporation is a Delaware company based in Miramar, Florida, listed on NASDAQ, that distributes aviation aftermarket parts and repairs engine, auxiliary power unit, avionics and airframe components as one reportable segment. Its customers are almost entirely commercial: commercial customers were 98.51% of nine-month revenue, and repair has overtaken distribution at 58.78% of Q3 revenue. Revenue was USD 1,615.9 million over the last twelve months, 2.06x the FY2024 level, so the business has been rebuilt by acquisition since the Fleet and Federal and Defense sales. The credit consequence is that cash flow follows aircraft utilization and maintenance demand, and the scale that supports debt service was bought rather than proven through a full cycle.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 16–17; Business & governance (CP-1A); calculation C27; calculation C19

VSE has no disclosed sponsor or controlling holder. The PAG seller holds exchangeable subsidiary shares that become about 4.80% of the share count after exchange, and tangible equity unit holders receive shares from 2029. Stress support would therefore have to come from public equity markets rather than an owner, and the February 2026 raise of about USD 1.3 billion shows those markets were open to it. The term loan B and revolver are senior secured under a credit agreement to which subsidiaries are guarantors, while the amortizing notes of USD 61.0 million are senior unsecured, so 93.76% of debt principal ranks as secured. The guarantor list and collateral perimeter are not supplied, so structural seniority is not assessed here, and the proxy statement that would show board composition and holdings is not supplied.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 9–10; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 29; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 63; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 81; Business & governance (CP-1A); calculation C30; calculation C32

### Revenue drivers and pricing power

Revenue is transactional aftermarket parts and repair work, and it is cyclical: the annual report states the aviation industry has been subject to downward cycles that lower demand for engine and component parts and repair and raise credit risk. Organic growth of about 15%, 14% and 17% in the first three quarters of 2026 was attributed to commercial engine aftermarket activity, newly awarded OEM distribution agreements and share gains, and the issuer holds exclusive manufacturing, distribution and repair rights over certain fuel control systems and PT6 fuel pumps. The risk is that distribution revenue rests on OEM agreements whose terms are not supplied, and one customer group was about 20% of FY2025 revenue, roughly USD 222.5 million, and the annual report warns that results would suffer if lost business could not be replaced in time on comparable terms while leases and inventory remain. Pricing power is not evidenced: the annual report lists inflation without contractual protection and tariffs as risks, and no price and volume split is disclosed. Creditors should treat revenue as demand-driven and moderately concentrated, with no contracted floor.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 9; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 12; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 53; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 57; EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 1; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 2; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 29–30; calculation C23; calculation C22

### Cost structure and margin resilience

The income statement does not separate fixed and variable cost, but the pattern points to meaningful operating leverage: revenue less cost of services rose from 10.10% to 14.86% in nine months as repair scale grew, and revenue less cost of products from 15.84% to 19.00%. Repair brings labour, certified facilities and capacity commitments, substantially all of the facilities are leased, and the annual report names skilled labour and inflation without contract protection as risks. The mechanism is that the same operating leverage works in reverse if volume falls, so margins are defensible in a moderate slowdown but not proven in a downturn. Reported EBITDA also moves with non-cash items: an earn-out fair value gain of USD 8.9 million sits in 2026 reported EBITDA against a charge of USD 29.2 million in nine months 2025, and management's add-backs lift nine-month Adjusted EBITDA USD 27.1 million over reported, so Adjusted EBITDA is the better trend measure but carries management's judgement.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 12; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 25; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C5; calculation C24; calculation C4

### Capital intensity and cash conversion

Capital intensity is low and is not what limits cash flow: capital expenditure was USD 31.5 million over the last twelve months, 1.95% of revenue, and the issuer does not split maintenance from growth spending, so capex flexibility cannot be separated from growth plans. Working capital is the drain: inventory rose USD 339.2 million since year-end to 55.26% of last-twelve-months revenue, with USD 148.4 million of cash purchases and USD 200.2 million acquired with PAG, and management ties the purchases to a new OEM auxiliary power unit programme and engine initiatives. Interest is the second claim: estimated contractual interest is USD 57.7 million a year before swaps and fees, and cash interest and cash taxes for 2026 are not stated, while FY2025 cash interest was USD 26.8 million and cash taxes USD 16.1 million. Two claims sit outside the debt figure: the earn-out liability of USD 27.4 million, which the issuer may settle in cash or equity, and long-term operating lease obligations of USD 75.8 million; the annual report says finance leases are not material, and the sources mention no pension, factoring or supply-chain finance obligation. Free cash flow was USD 46.6 million in Q3 and USD -50.0 million in the first half, so EBITDA is converting to cash unevenly, and deleveraging over the next four quarters will come mainly from EBITDA growth unless inventory growth stops.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 33; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 44; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 46; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C15; calculation C29; calculation C16; calculation C14; calculation C2; calculation C33; calculation C34

### Competitive forces

Competitive rivalry limits pricing power. The annual report describes a fragmented industry with intense competition, many competitors larger and better resourced than VSE, and OEMs and certified repair facilities that may bundle services. The consequence is that margin gains must come from mix and proprietary repair approvals rather than scale, which is how the third-quarter release frames the Atech purchase, with sole-source repairs on flight-critical parts.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 8; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 2

Entry barriers are clearest in repair. Certification and conformance are required before a part is installed, and repairs may be done only at certified facilities with certified technicians, which protects repair margins from new entrants, while the annual report names no comparable barrier for distribution beyond exclusive OEM rights whose duration is not supplied.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 8; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 57

The threat of substitutes is modest on the evidence supplied. The annual report names new aircraft components, advanced replacement parts and AI-optimized maintenance as ways competition could change, but shows no loss of volume, so this is a monitoring item and not a driver of the view.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 22

Buyer power centres on concentration. Commercial airlines, MRO integrators and operators buy on availability, turnaround time and price, and one customer group of about 20% of FY2025 revenue could reduce orders or seek relief from its agreements; the 2026 reports do not update that share, so the effect of the PAG purchase on concentration is not established.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 8; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; calculation C22; calculation C30

Supplier power is material. VSE depends on OEM licences and distribution agreements, on third-party package delivery companies and on suppliers who may be disrupted by tariffs and supply chain delays, and OEMs are also competitors. A non-renewed OEM agreement would hit distribution revenue and the value of the related inventory together, which is why the auditor weighed the effect of exclusive distribution agreements in the inventory assessment.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 10; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 12; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 40

### PEST factors

PEST factors do not appear to be a primary credit driver based on the provided materials. FAA certification rules matter as an entry barrier and are covered under the competitive forces, and the annual report lists tariffs, export controls and the Russia-Ukraine and Middle East conflicts as risks without quantifying any effect on VSE, so no exposure is estimated.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 8; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 10

### Credit-translated SWOT

Strengths that support creditors are the equity-funded PAG purchase, with about USD 1.3 billion of equity and tangible equity units covering most of the cash price; liquidity of USD 545.0 million with 85.97% of principal due in 2033; an Adjusted EBITDA margin of 19.81% in Q3; certified repair capability with exclusive OEM rights; and capital expenditure of only 1.95% of revenue.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 29; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 8; calculation C12; calculation C18; calculation C6; calculation C15

Weaknesses that constrain credit quality are net leverage of 2.98x to 3.38x on earnings that include unverified add-backs; free cash flow of only 9.14% of Adjusted EBITDA over the last twelve months; goodwill and intangibles at 62.59% of assets with tangible equity of USD 178.7 million; one customer group of about 20% of FY2025 revenue and a single segment; and USD 667.8 million of floating-rate debt after swaps.
Basis: Financial foundation (CP-1); 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; calculation C1; calculation C14; calculation C17; calculation C11; calculation C22

Opportunities that could improve credit quality are bringing more repair work in-house across VSE and PAG, which management says supports margin; a fourth quarter that turns inventory into cash and repays the revolver; disclosure that itemizes the pre-acquisition earnings; and settling the PAG earn-out in shares.
Basis: EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 1; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 2; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 29

Threats that could weaken credit quality are an aviation downturn or a fall in engine shop visits; non-renewal of an OEM agreement or reduced orders from the largest customer group; an inventory write-down; a rise in rates once the USD 150.0 million swap ends on 2027-10-31; and further acquisitions funded with debt before leverage has fallen.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 9; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 39–40; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; calculation C11

### Strengths and weaknesses

The credit's first strength is an equity-funded balance sheet. About USD 1.3 billion of equity and tangible equity units funded most of the USD 1.75 billion PAG cash price, so debt rose USD 667.1 million rather than by the full purchase price. That limits the leverage creditors carry for an acquisition that doubled revenue, and it shows equity markets will fund VSE's growth, which is a source of stress support.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 29; Financial foundation (CP-1); calculation C1

The second strength is near-term liquidity and a back-ended maturity profile. Liquidity of USD 545.0 million covers 2027 scheduled principal and estimated interest 6.03x, and 85.97% of principal falls due in 2033, so a refinancing event is not a risk for several years and the revolver is only 4.00% drawn.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; calculation C12; calculation C13; calculation C18

The third strength is earnings momentum with credible margin support. Adjusted EBITDA margin rose from 16.45% in FY2025 to 19.81% in Q3, and organic growth held at about 14% to 17% in each 2026 quarter, so earnings power per unit of revenue has improved while the business grew.
Basis: EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 1; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 2; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C6; calculation C23

The first weakness is leverage that depends on the EBITDA definition. Net leverage is 2.98x to 3.38x on defined earnings and 2.3x only with USD 88.8 million of pre-acquisition earnings that no filing itemizes, so an unverified add-back is doing much of the work in the headline ratio and a lender cannot test the covenant ratio that governs the facility.
Basis: Financial foundation (CP-1); EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C1; calculation C4

The second weakness is cash conversion. Free cash flow was USD -3.4 million in nine months and 9.14% of Adjusted EBITDA over the last twelve months because inventory took USD 148.4 million of cash, so earnings do not yet reduce debt and deleveraging depends on EBITDA growth and a fourth-quarter release of cash.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 33; calculation C14; calculation C15; calculation C16

The third weakness is an intangible-heavy asset base. Goodwill and intangibles are 62.59% of assets and tangible equity is USD 178.7 million, so a write-down after the preliminary purchase price allocations are finalized would cut equity without adding cash, and recovery value would rest on inventory and receivables whose value under stress is not established.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 10; calculation C17

The fourth weakness is exposure to one customer group and to OEM agreements. The group was about 20% of FY2025 revenue and the OEM agreements underpin distribution revenue and inventory value, so a single decision by a counterparty could remove revenue while leased facilities and inventory carrying costs stay.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 40; calculation C22

### Financial profile and credit quality

The nine dimensions below are rated Strong, Average or Weak; the profile is Average overall, with free cash flow the weak point.

Scale and market position is Average. Last-twelve-months revenue of USD 1,615.9 million is 2.06x the FY2024 level, but the annual report says many competitors are larger and better resourced and no market share is stated, so scale absorbs a shock only moderately.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 8; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; calculation C19

Competitive advantage is Average. Exclusive licences, certified repair capability and sole-source repair approvals protect margin, but the licence terms are not supplied and OEMs can bundle services against VSE.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 8; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 57; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 2

Business diversification is Average. Customers span airlines, integrators and operators and commercial customers are 98.51% of nine-month revenue, but there is one segment, an engine focus, 56.61% of FY2025 revenue in the United States and one customer group of about 20%.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 4; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; calculation C27; calculation C22

Cost and capex flexibility is Average. Capital expenditure is only 1.95% of revenue and inventory purchases are partly discretionary, but facilities are leased, labour is skilled and some inventory purchases are set by distributor agreements.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 12; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 25; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; calculation C15

Margin stability is Average. Margins widened to 19.81% in Q3, but the record spans a few quarters in an upturn, reported EBITDA swings with earn-out fair value changes, and PAG's own margin is not itemized.
Basis: EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; calculation C6; calculation C24; calculation C5

Free cash flow stability is Weak. Free cash flow was USD -51.7 million in FY2024, USD 5.7 million in FY2025 and USD -3.4 million in nine months 2026, with Q3 at USD 46.6 million the only strong quarter.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; calculation C29; calculation C15

Ability to refinance and access capital markets is Average. VSE raised about USD 1.3 billion of equity and tangible equity units in February 2026 and placed a USD 900.0 million term loan B with a revolver upsized to USD 500.0 million in May 2026, but no rating, market price or spread is supplied and 85.97% of principal is due in 2033.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 29; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; calculation C18; calculation C13

Liquidity position is Average. The quantity is strong at USD 545.0 million against USD 90.4 million of 2027 scheduled claims, but cash is only USD 65.8 million and the revolver depends on covenants whose levels are not disclosed, so access under stress is not established.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; calculation C12; calculation C13

Financial policy and governance is Average. Acquisitions were largely equity-funded and dividends are small at 3.20% of Adjusted EBITDA, but six businesses were bought in 17 months, leverage tolerance after the next deal is not established and the proxy statement is not supplied.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 33; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 29; calculation C21; calculation C30

Taken together, the main supports are equity funding, liquidity and margin expansion, and the main constraints are leverage on unverified earnings, weak cash conversion and an intangible-heavy asset base. The trend in earnings is improving and the trend in cash flow is unproven, and the missing datapoints are covenant levels, itemized pre-acquisition earnings, ratings and market pricing, and board and ownership detail.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation C1; calculation C14; calculation C17

### Outlook, tailwinds and headwinds

Over the next one to two years reported leverage should fall mechanically as full PAG quarters replace earlier quarters in trailing EBITDA: at the guided year-end Adjusted EBITDA of USD 346.9 million to USD 353.7 million, flat net debt would give 2.58x to 2.53x against 2.98x now. How far leverage falls beyond that depends on inventory and free cash flow, because scheduled amortization is only USD 32.7 million in 2027 and the PAG earn-out of up to USD 125.0 million could take cash if the issuer chooses not to pay in shares. Rates are a headwind: after swaps USD 667.8 million of debt floats, 100 bp higher rates would cost USD 6.68 million a year, and that exposure rises to USD 817.8 million and USD 8.18 million when the USD 150.0 million swap ends on 2027-10-31.
Basis: EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 10; calculation C7; calculation C9; calculation C11

Over three to five years the debt is back-ended: the amortizing notes of USD 61.0 million at 5.93% end on 2029-02-01, the revolver of USD 500.0 million matures on 2030-05-02, and USD 841.5 million of the term loan B falls due in 2033. The medium-term view therefore turns on whether engine aftermarket demand and OEM programme wins keep earnings growing while the intangible-heavy balance sheet is paid down, and a refinancing in 2032 or 2033 is far enough away to depend on conditions that cannot be forecast from these sources.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 13; calculation C18

Sector tailwinds named by the issuer are commercial engine aftermarket demand and OEM distribution awards, and sector headwinds are aviation cycles, supply chain disruption and tariffs. Company-specific tailwinds are integration synergies, more repair work done in-house and the proprietary repair approvals added with Atech, and the test capability added with Test Logic; company-specific headwinds are leverage, the inventory build and management's add-backs. Each tailwind supports revenue and margin, and only the integration and in-house repair benefits are within management's control, which makes the fourth quarter the first real check.
Basis: EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 2; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 29–30; 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 9–10

### Qualitative downside scenario

The initiating event is a slowdown in commercial engine aftermarket activity, or the loss or reduction of an OEM distribution agreement or of the largest customer group, that sit behind recent organic growth. The first operational break is inventory: USD 893.0 million is 55.26% of last-twelve-months revenue, and if distribution volume falls while purchases tied to distributor agreements continue, stock turns slowly and repair capacity added with PAG is under-used. Revenue and margin fall together because repair capacity and leased facilities are fixed in the short run, and free cash flow turns negative as inventory and receivables absorb cash.
Basis: 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 9; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; calculation C16; calculation C22

The financial transmission is arithmetic on the issuer's own measure: a 10% fall in trailing Adjusted EBITDA with net debt unchanged gives net leverage of 3.31x, a 20% fall gives 3.72x with interest cover of 4.16x on estimated interest, and a 30% fall gives 4.25x; a fall of 25.58% would give 4.00x. These are sensitivities and not forecasts, and no covenant level is supplied to compare them with.
Basis: calculation C10; calculation C2

The liquidity effect is limited within two years: USD 545.0 million is 6.03x 2027 scheduled claims, no principal beyond amortization is due before the amortizing notes end in 2029, and the revolver matures in 2030. The refinancing effect arrives through covenants and cost: if the maximum net leverage ratio or the minimum interest coverage ratio tightened, the revolver could be restricted when it is most needed, and a fall in EBITDA would also raise the interest margin on the floating-rate debt, which the credit agreement ties to the leverage ratio. Management's levers are real: it can slow inventory purchases, pay the earn-out in shares, keep the dividend at USD 0.10 per share a quarter, which cost USD 8.0 million over nine months, defer acquisitions and trim capital expenditure of USD 31.5 million. Resilience therefore appears sufficient to avoid liquidity distress through the maturity horizon, but not to hold leverage near 3x; the evidence supports no default path and supports a path of slower deleveraging and covenant pressure. Primary downside path: weaker engine aftermarket demand strands inventory and under-uses new repair capacity while debt and interest stay fixed.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 33; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18; calculation C12; calculation C10; calculation C21; calculation C15

### T2.1 - Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_vsec-20251231.htm.jsonl | Annual report FY2025 | High: filed and audited; describes PAG as pending | FY2025 with FY2024 comparatives | VSE Corporation, consolidated | Business, competition, risk factors, licences, customer group, market risk, swaps, audit matters | Predates the PAG closing and the May 2026 refinancing; Part III is not included | Business, margin, competition, asset quality and downside sections |
| 10-Q_2026-03-31_vsec-20260331.htm.jsonl | Quarterly report Q1 2026 | High: filed, unaudited | Three months to 2026-03-31 | VSE Corporation, consolidated | Maturity ladder of the new term loan B, covenant types | Predates the PAG closing; covenant levels are not stated | Maturity profile in the outlook |
| 10-Q_2026-06-30_vsec-20260630.htm.jsonl | Quarterly report Q2 2026 | High: filed, unaudited | Three and six months to 2026-06-30 | VSE Corporation, consolidated | First statements with PAG consolidated | Purchase price allocation preliminary | Corroboration only; figures come through the supplied module outputs |
| 10-Q_2026-09-30_vsec-20260930.htm.jsonl | Quarterly report Q3 2026 | High: filed, unaudited | Three and nine months to 2026-09-30 | VSE Corporation, consolidated | Balance sheet, income statement, cash flow, debt, swaps, acquisitions, liquidity, revenue mix | Allocations preliminary; no cash interest or cash tax figures; market risk says no material change | All sections |
| EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl | Earnings release Q1 2026 | Medium: issuer-prepared non-GAAP | Three months to 2026-03-31 | VSE Corporation, continuing operations | Organic growth, guidance, pro forma leverage statement | Non-GAAP measures defined by the issuer | Outlook and guidance history |
| EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl | Earnings release Q2 2026 | Medium: issuer-prepared non-GAAP | Three and six months to 2026-06-30 | VSE Corporation, continuing operations | Organic growth, guidance, leverage ratios at 2026-06-30 | Non-GAAP measures defined by the issuer | Leverage trend and guidance history |
| EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl | Earnings release Q3 2026 | Medium: issuer-prepared non-GAAP | Three and nine months to 2026-09-30 | VSE Corporation, continuing operations | Margins, guidance, EBITDA and net debt reconciliations, leverage ratios | Pre-acquisition EBITDA is not itemized; forward margin is not reconciled | Leverage, margin, guidance and monitoring sections |
| Source readiness (CP-0) | Source readiness output | Medium: supplied module output | As of 2026-11-05 | VSE CORP | Source inventory, gaps and conflicts | States the missing credit agreement, proxy, ratings and market data | Gap framing |
| Financial foundation (CP-1) | Financial foundation output | Medium: supplied module output | FY2024 to 2026-09-30 | VSE CORP | Net debt, leverage, EBITDA bases, liquidity, maturity ladder, cash flow | Leverage on three EBITDA bases; pro forma for Test Logic not established | Leverage and liquidity sections |
| Business & governance (CP-1A) | Business and governance output | Medium: supplied module output | FY2025 to 2026-11-05 | VSE CORP | Business model, ownership, acquisition history, governance | Proxy statement and credit agreement not supplied | Business, ownership and policy sections |

### T2.10 - Materiality Filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
|---|---|---|---|---|---|---|
| 1 | Acquisition-driven rise in net leverage | Net debt USD 223.446m to USD 894.153m; net leverage 1.74x to 3.38x on reported EBITDA and 2.98x on Adjusted EBITDA; Test Logic price not stated | Debt funded most of the PAG purchase while only about five months of PAG earnings are in trailing EBITDA, and net debt rose in Q3 even with positive free cash flow | Raises the probability of default against FY2025 until EBITDA growth or cash flow lowers net debt; it is the first ratio a downside would stress | Negative | High |
| 2 | Liquidity and back-ended maturities | Liquidity USD 544.986m against USD 90.408m of 2027 scheduled principal and estimated interest, cover 6.03x; 85.97% of principal due in 2033 | Cash and an almost undrawn revolver cover amortization and interest for years, and no maturity falls before 2029 other than small amortization | Keeps near-term liquidity-driven default risk low and moves refinancing risk to 2030 and 2033 | Positive | High |
| 3 | Earnings momentum and margin expansion | Adjusted EBITDA margin 19.81% in Q3 against 16.74%; organic growth about 15%, 14% and 17%; guidance raised twice | Mix toward engine products and repair, OEM licensed sales and synergies lift margin on higher revenue | Supports debt service and deleveraging through EBITDA growth if sustained | Positive | Medium |
| 4 | Weak cash conversion | Free cash flow USD -3.415m in nine months; USD 27.459m over twelve months, 9.14% of Adjusted EBITDA; inventory build USD 148.409m | Inventory purchases for new OEM programmes absorb the cash that earnings produce, so debt is not repaid from operations | Leaves deleveraging dependent on EBITDA growth and a fourth-quarter release of working capital, which weakens debt service capacity | Negative | High |
| 5 | Quality of the EBITDA basis | Adjusted over reported EBITDA USD 27.084m in nine months; USD 88.847m of pre-acquisition EBITDA behind 2.3x; earn-out gain of USD 8.880m in reported EBITDA | Management add-backs and unaudited pre-acquisition earnings lower the visible leverage and cannot be tested | Makes the headline ratios a ceiling on comfort and not a measure of covenant headroom | Negative | Medium |
| 6 | Intangible-heavy asset base and inventory value | Goodwill and intangibles USD 2,804.005m, 62.59% of assets; tangible equity USD 178.686m; inventory USD 893.006m; slow-moving inventory a critical audit matter | A write-down cuts equity and earnings without adding cash, and creditors rely on inventory and receivables whose stressed value is untested | Lowers expected recovery value relative to book cover of debt principal of 1.71x | Negative | Medium |
| 7 | Equity-led financial policy | About USD 1.3bn of equity and tangible equity units funded most of the USD 1.75bn PAG cash price; dividends 3.20% of Adjusted EBITDA | Equity funding limited debt and small payouts keep cash in the business | Supports creditor alignment while the acquisition pace stays moderate | Positive | Medium |
| 8 | Customer group and OEM agreement concentration | One customer group about 20% of FY2025 revenue, not updated for 2026; OEM distribution and licence agreements with terms not supplied | A single reduction in orders or a non-renewal removes revenue while leased facilities and inventory costs remain | Raises downside volatility of revenue and inventory value | Negative | Low |
| 9 | Floating-rate debt after swaps | USD 667.750m of debt floats after USD 250.000m of swaps; USD 6.678m a year per 100 bp; the USD 150.000m swap ends 2027-10-31 | Higher rates lift interest on most of the term loan while cash conversion is thin | Reduces interest cover in a rate rise and adds to the cost of slower deleveraging | Negative | Medium |

### T2.12 - Monitoring Triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
|---|---|---|---|---|
| Revenue decline | Q4 2026 revenue below USD 520.531m, the low end implied by 65% growth guidance, or organic growth below 14%, the lowest 2026 quarter | Guidance implies Q4 revenue below Q3, so a miss would show demand easing in the quarter management says supports deleveraging | Lower revenue under-uses repair capacity and slows inventory turnover, which weakens cash flow and leverage | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; calculation C8; limitation: no backlog or contract terms are disclosed |
| EBITDA margin pressure | Quarterly Adjusted EBITDA margin below 18.9%, the low end of FY2026 guidance, against 19.81% in Q3 | The margin gain since FY2025 is recent, mix-driven and made in an upturn | Margin loss on a larger revenue base cuts EBITDA and raises net leverage on the same net debt | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C6; limitation: PAG margin is not itemized |
| FCF deterioration | Q4 free cash flow below the USD 46.619m of Q3, full-year 2026 free cash flow still negative after nine months of USD -3.415m, or inventory rising faster than revenue | Management expects strong fourth-quarter free cash flow to support deleveraging but gives no figure | Continued inventory build keeps debt flat while earnings grow, so deleveraging stalls | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; calculation C15; limitation: no free cash flow guidance |
| Liquidity reduction | Liquidity below USD 544.986m, revolver drawn above USD 20.000m, or cash below USD 65.786m without matching repayment | The revolver is the main source of liquidity and Atech was part-funded from it | Draws that fund working capital or acquisitions reduce the cushion against a downturn | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; calculation C12; limitation: covenant levels that govern the revolver are not disclosed |
| Leverage increase | Issuer-stated net leverage above 3.0x or adjusted net leverage above 3.0x, the pro forma ceiling stated in May 2026; any quarter with net debt above USD 894.153m and falling trailing EBITDA | The ratios fell only because trailing EBITDA rose, and net debt rose USD 22.556m in Q3 | Leverage above the stated ceiling would show deleveraging has reversed and could press covenants | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 2; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; calculation C28; limitation: covenant ratio definitions and levels are not supplied |
| Refinancing delay | Revolver due 2030-05-02 not extended when it falls within 12 months on 2029-05-02, or a new debt issue before the final amortizing note instalment on 2029-02-01 | The revolver and the term loan B due 2033 are the only sources of committed funding | A shorter revolver would raise refinancing risk and could force a smaller liquidity cushion | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 18–19; calculation C18; limitation: no rating or market price is supplied |
| Sponsor/shareholder action | A debt-funded acquisition, the Test Logic price when disclosed, a dividend above USD 0.10 per share a quarter, share repurchases, or the PAG earn-out of up to USD 125.000m paid in cash | Six businesses were bought in 17 months and the earn-out can be settled in cash at the issuer's choice | Cash-funded deals or payouts before leverage falls would reverse the equity-led policy that supports creditors | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 27; calculation C21; limitation: proxy statement not supplied |
| Sector deterioration | Release commentary showing weaker engine aftermarket activity, lower organic growth than 14%, or reduced orders from the largest customer group | Growth is attributed to engine aftermarket demand and new OEM agreements, which are cyclical | Weaker demand would strand inventory and lower EBITDA together | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 2; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 9; limitation: no industry or airline traffic data is supplied |

### cp2.cp_model_strengths_weaknesses - Strengths and weaknesses for the model

<!-- table-id: cp2.cp_model_strengths_weaknesses -->

| direction | rank | label | mechanism | evidence_ids | status | source_id | source_locator | as_of |
|---|---|---|---|---|---|---|---|---|
| STRENGTH | 1 | Equity-funded acquisition | About USD 1.3bn of net equity and tangible equity unit proceeds funded most of the USD 1.75bn PAG cash price, so debt rose USD 667.1m and equity markets proved open to VSE | C1; C30; R1; R2; R55 | READY | 10-Q_2026-09-30_vsec-20260930.htm.jsonl | page 29 | 2026-09-30 |
| STRENGTH | 2 | Liquidity and back-ended maturities | Cash and undrawn revolver of USD 545.0m cover 2027 principal and estimated interest 6.03x, and 85.97% of principal is due in 2033 | C12; C13; C18 | READY | 10-Q_2026-09-30_vsec-20260930.htm.jsonl | page 19; page 32 | 2026-09-30 |
| STRENGTH | 3 | Earnings momentum and margin expansion | Adjusted EBITDA margin of 19.81% in Q3 against 16.74% on organic growth of about 17%, lifting debt service capacity if it holds | C6; C23 | READY | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl | page 7 | 2026-09-30 |
| WEAKNESS | 1 | Leverage depends on the EBITDA definition | Net leverage of 2.98x to 3.38x on defined earnings and 2.3x only with USD 88.8m of pre-acquisition earnings that no filing itemizes | C1; C4 | READY | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl | page 7 | 2026-09-30 |
| WEAKNESS | 2 | Weak cash conversion | Inventory took USD 148.4m of cash, leaving free cash flow of USD -3.4m in nine months and 9.14% of Adjusted EBITDA over twelve months | C14; C15; C16 | READY | 10-Q_2026-09-30_vsec-20260930.htm.jsonl | page 6 | 2026-09-30 |
| WEAKNESS | 3 | Intangible-heavy asset base | Goodwill and intangibles are 62.59% of assets and tangible equity is USD 178.7m, so a write-down cuts equity without adding cash | C17 | READY | 10-Q_2026-09-30_vsec-20260930.htm.jsonl | page 4 | 2026-09-30 |
| WEAKNESS | 4 | Customer group and OEM concentration | One customer group was about 20% of FY2025 revenue and OEM agreements underpin distribution revenue and inventory value | C22 | READY | 10-K_2025-12-31_vsec-20251231.htm.jsonl | page 11 | 2025-12-31 |

### Overall credit view

Overall, VSE presents an adequate business profile supported by an equity-funded balance sheet, exclusive OEM rights and certified repair capability, and record margins, but credit quality is constrained by net leverage of 2.98x to 3.38x on earnings that include unverified add-backs, free cash flow close to zero and an intangible-heavy asset base. Cash-flow durability is not fully assessable yet because only one quarter has converted well, and the business profile cannot be ranked against typical leveraged-credit issuers in the sector because no peer data is supplied. Refinancing capacity is likely to depend on keeping liquidity of about USD 545.0 million intact, delivering a fourth quarter of strong cash flow and the covenant levels leaving room, with the large maturity in 2033 and the revolver in 2030. The primary downside path is weaker engine aftermarket demand that strands inventory while debt and interest stay fixed. Further analysis would require the credit agreement with covenant levels, the pre-acquisition earnings by acquired business, ratings and market pricing, and the proxy statement. Top risk: leverage that rests on unverified earnings and thin cash conversion.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); Source readiness (CP-0); calculation C1; calculation C14; calculation C10; calculation C17

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 30 |
| Calculated | 18 |
| Assumption-Based | 0 |
| Analyst Inference | 10 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 6 |
| Fields present | 17 |
| Fields total | 17 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 5 |

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| PAG acquisition | Debt-funded purchase raised debt | Documentary Fact | Net leverage | Net debt USD 223.4m to USD 894.2m |
| February 2026 equity raise | Funded most of the PAG cash price | Documentary Fact | Net leverage | About USD 1.3bn of net proceeds |
| Engine aftermarket demand | Drove organic growth of about 17% in Q3 | Management Language | Revenue growth | Release credits engine aftermarket strength |
| Repair and engine mix | Lifted Adjusted EBITDA margin | Management Language | Adjusted EBITDA | Margin 19.81% in Q3 against 16.74% |
| Management add-backs | Open a gap between reported and Adjusted EBITDA | Documentary Fact | EBITDA quality | USD 27.1m in nine months 2026 |
| Pre-acquisition EBITDA | Not itemized; lowers adjusted leverage to 2.3x | Insufficient Information | Net leverage | USD 88.8m with no itemization |
| Inventory build | Absorbed operating cash | Documentary Fact | Free cash flow | USD 148.4m used in nine months 2026 |
| Free cash flow | Too small to repay debt so far | Analyst Interpretation | Net leverage | USD -3.4m in nine months 2026 |
| Floating-rate term loan | Higher rates raise interest cost | Analyst Interpretation | Interest cover | USD 667.8m unhedged; USD 6.68m per 100 bp |
| Covenant levels | Not supplied; headroom not established | Insufficient Information | Revolver access | Compliance stated; levels not given |
| Cash and revolver | Cover 2027 principal and interest | Analyst Interpretation | Liquidity | USD 545.0m against USD 90.4m; 6.03x |
| Back-ended maturities | Defer refinancing need to 2030 and 2033 | Documentary Fact | Refinancing risk | 85.97% of principal due in 2033 |
| Goodwill and intangibles | A write-down cuts equity, not cash | Analyst Interpretation | Recovery value | 62.59% of total assets |
| Largest customer group | Reduced orders would remove revenue | Analyst Interpretation | Revenue growth | About 20% of FY2025 revenue; not updated |
| Serial acquisitions | Integration and earn-out claims on cash | Analyst Interpretation | Liquidity | Earn-out up to USD 125.0m in cash or equity |

## Calculations

Amounts are US$ millions as printed in the sources, converted from thousands by exact division; ratios and percentages are shown to two decimals, and derived guidance figures are labelled as derived.

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Net debt and net leverage, restated from the financial foundation | 959.939 − 65.786 = 894.153; LTM reported EBITDA 128.755 + 221.535 − 86.103 = 264.187; 894.153 / 264.187; 894.153 / 300.387; 223.446 / 128.755 | Net debt USD 894.153m; 3.38x on reported EBITDA; 2.98x on Adjusted EBITDA; 1.74x at FY2025 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C2 | Estimated annual contractual interest, restated from the financial foundation (an estimate) | 897.750 × 5.90% + 20.000 × 5.65% + 61.043 × 5.93%; 264.187 / 57.717 | USD 57.717m a year before swaps and fees; reported EBITDA covers it 4.58x | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19 |
| C3 | Issuer-stated leverage ratios quoted in the findings (not calculated) | Net leverage 3.0x and adjusted net leverage 2.3x at 2026-09-30; 3.6x and 2.4x at 2026-06-30; adjusted net leverage expected below 3.0x pro forma in May 2026 | 3.0x; 2.3x; 3.6x; 2.4x; below 3.0x | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 8; EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 2 |
| C4 | Gap between the two issuer EBITDA bases and Adjusted over reported EBITDA, restated | 389.234 − 300.387; 248.619 − 221.535 | USD 88.847m of pre-acquisition EBITDA; USD 27.084m nine-month add-back net | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C5 | Revenue less cost of products and of services (before the separately shown SG&A, earn-out and amortization lines), as a share of revenue | Nine months 2026 products (628.739 − 509.306) / 628.739 and services (685.984 − 584.032) / 685.984; nine months 2025 (510.189 − 429.377) / 510.189 and (300.904 − 270.510) / 300.904; Q3 2026 (222.982 − 177.921) / 222.982 and (318.024 − 266.138) / 318.024; Q3 2025 (176.035 − 147.682) / 176.035 and (106.874 − 94.486) / 106.874 | Products 19.00% against 15.84% in nine months; services 14.86% against 10.10%; total 16.84% against 13.71%; Q3 products 20.21% against 16.11%; Q3 services 16.32% against 11.59% | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 |
| C6 | Adjusted EBITDA margin by period | FY2025 182.924 / 1112.275; Q1 2026 55.430 / 324.580; Q2 2026 86.024 / 449.137; Q3 2026 107.165 / 541.006; Q3 2025 47.351 / 282.909; nine months 2026 248.619 / 1314.723; nine months 2025 131.156 / 811.093 | FY2025 16.45%; Q1 17.08%; Q2 19.15%; Q3 19.81%; Q3 2025 16.74%; nine months 18.91% against 16.17% | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 4; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42 |
| C7 | FY2026 revenue and Adjusted EBITDA implied by guidance (derived from the issuer's ranges) | 1112.275 × 1.65 and × 1.665; 1835.254 × 18.9% and 1851.938 × 19.1% | Revenue USD 1,835.254m to USD 1,851.938m; Adjusted EBITDA USD 346.863m to USD 353.720m | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42 |
| C8 | Fourth-quarter revenue and Adjusted EBITDA implied by guidance, against Q3 2026 | Revenue: guided FY2026 less nine months 1314.723; Adjusted EBITDA: guided FY2026 less nine months 248.619; against Q3 541.006 and 107.165 | Q4 revenue USD 520.531m to USD 537.215m, which is 3.78% to 0.70% below Q3; Q4 Adjusted EBITDA USD 98.244m to USD 105.101m against USD 107.165m in Q3 | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 |
| C9 | Net debt at 2026-09-30 over guided FY2026 Adjusted EBITDA, holding net debt unchanged (illustrative) | 894.153 / 346.863; 894.153 / 353.720 | 2.58x to 2.53x against 2.98x now; excludes fourth-quarter cash flow, the Test Logic price and any earn-out cash | calculation C7; calculation C1 |
| C10 | Net leverage and cover if trailing Adjusted EBITDA falls, net debt and interest unchanged (arithmetic, not a forecast) | Adjusted EBITDA 300.387 × (1 − fall); net debt 894.153 / result; result / estimated interest 57.717; EBITDA that gives 4.00x: 894.153 / 4 | 10% fall: EBITDA USD 270.348m, 3.31x, cover 4.68x; 20% fall: EBITDA USD 240.310m, 3.72x, cover 4.16x; 30% fall: EBITDA USD 210.271m, 4.25x, cover 3.64x; a fall of 25.58% gives 4.00x and 14.95% gives 3.50x | calculation C1; calculation C2 |
| C11 | Floating-rate debt after swaps and the cost of 100 bp higher rates (an estimate) | 897.750 + 20.000 − 150.000 − 100.000 = 667.750; × 1%; after the USD 150.0m swap ends on 2027-10-31: 897.750 + 20.000 − 100.000 = 817.750 × 1%; 300.387 / (57.717 + 6.678) | USD 667.750m unhedged; USD 6.678m a year per 100 bp; USD 817.750m and USD 8.178m after 2027-10-31; cover 4.66x after a 100 bp rise | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 |
| C12 | Liquidity against 2027 scheduled principal plus estimated annual interest | 65.786 + 479.2 = 544.986; 32.691 + 57.717 = 90.408; 544.986 / 90.408 | Liquidity USD 544.986m; scheduled claims USD 90.408m; cover 6.03x | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32 |
| C13 | Revolver commitment, drawn amount and unused commitment | 500.0 − 20.0 − 0.8 letters of credit = 479.2; 20.0 / 500.0 | Unused USD 479.2m; 4.00% of the revolver drawn | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32 |
| C14 | Cash conversion of Adjusted EBITDA | LTM operating cash flow 21.284 + 26.990 − (−10.652) = 58.926; LTM free cash flow 58.926 − 31.467 = 27.459; LTM free cash flow 27.459 / 300.387; nine months (21.284 − 24.699) / 248.619; Q3 46.619 / 107.165; nine-month operating cash flow 21.284 / 248.619 | LTM 9.14%; nine months -1.37%; Q3 43.50%; operating cash flow 8.56% of Adjusted EBITDA in nine months | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C15 | Free cash flow path in 2026 and capital expenditure intensity | Nine months (21.284 − 24.699) = −3.415; Q3 55.991 − 9.372 = 46.619; first half −3.415 − 46.619; LTM capital expenditure 24.699 + 21.281 − 14.513 = 31.467; LTM revenue 1314.723 + 1112.275 − 811.093 = 1615.905; 31.467 / 1615.905 | Nine months USD -3.415m; Q3 USD 46.619m; first half USD -50.034m; LTM capital expenditure 1.95% of revenue | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C16 | Inventory against revenue and against assets | 893.006 / 1615.905; 893.006 − 553.834; 893.006 / 4479.958; cash build 148.409; PAG inventory acquired 200.179 | 55.26% of last-twelve-months revenue; balance up USD 339.172m since year-end; the cash flow statement shows a USD 148.409m build and the PAG allocation shows USD 200.179m acquired; 19.93% of total assets | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 10 |
| C17 | Goodwill and intangibles, tangible equity and tangible asset cover of debt principal (book values, not recoveries) | 1853.509 + 950.496 = 2804.005; 2804.005 / 4479.958; 2804.005 / 2982.691; 2982.691 − 2804.005; 4479.958 − 2804.005; 1675.953 / 978.793; 894.153 / 178.686 | Goodwill and intangibles USD 2,804.005m, 62.59% of assets and 94.01% of equity; tangible equity USD 178.686m; tangible assets USD 1,675.953m, 1.71x of debt principal; net debt 5.00x of tangible equity | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 |
| C18 | Principal due at the 2033 term loan maturity and principal due by 2029 | 841.500 / 978.793; 7.958 + 32.691 + 34.128 + 15.516 = 90.293 | 85.97% of principal due in 2033; USD 90.293m of scheduled principal through 2029 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 13 |
| C19 | Revenue growth in FY2025 and scale against FY2024 | 1112.275 / 786.256 − 1; LTM revenue 1314.723 + 1112.275 − 811.093 = 1615.905; 1615.905 / 786.256 | 41.46% growth in FY2025; last-twelve-months revenue 2.06x FY2024 revenue | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 |
| C20 | PAG share of Q3 2026 revenue | 173.666 / 541.006 | 32.10% | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 |
| C21 | Dividends against Adjusted EBITDA and earn-out exposure | 7.952 / 248.619; earn-out obligation 27.367 current; maximum earn-out 125.000 | Dividends 3.20% of nine-month Adjusted EBITDA; earn-out liability USD 27.367m; up to USD 125.000m payable in cash or equity at the issuer's choice | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 10; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C22 | One customer group at about 20% of FY2025 revenue (approximate, issuer-stated share) | 1112.275 × 20% | About USD 222.5m of FY2025 revenue | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42 |
| C23 | Issuer-stated figures quoted in the findings (not calculated) | Organic revenue growth about 15% in Q1, about 14% in Q2 and about 17% in Q3 2026; guidance raised from 57% to 61% in May to 61% to 64% in August and 65% to 66.5% in November; margin guidance 18.1% to 18.5%, then 18.7% to 19.0%, then 18.9% to 19.1%; equity and tangible equity unit proceeds of about USD 1.3bn; repair approvals covering more than 300 part numbers at Atech | 15%; 14%; 17%; 57% to 61%; 61% to 64%; 65% to 66.5%; 18.1% to 18.5%; 18.7% to 19.0%; 18.9% to 19.1%; USD 1.3bn; 300 part numbers | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 1; EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 2; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 29 |
| C24 | Earn-out fair value adjustment inside reported EBITDA | Q3 2026 and nine months 2026 gain 8.880 deducted in Adjusted EBITDA; nine months 2025 charge 29.200; Q3 2025 charge 23.300 | USD 8.880m gain in 2026 reported EBITDA; USD 29.200m charge in nine months 2025 | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 |
| C25 | Q4 2025 revenue and Adjusted EBITDA, derived as the year less nine months | 1112.275 − 811.093; 182.924 − 131.156; 51.768 / 301.182 | Revenue USD 301.182m; Adjusted EBITDA USD 51.768m; margin 17.19% | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 42; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C26 | Fourth-quarter revenue growth implied by guidance over Q4 2025 | 520.531 / 301.182 − 1; 537.215 / 301.182 − 1 | 72.83% to 78.37% | calculation C8; calculation C25 |
| C27 | Revenue mix by type, customer and country | Q3 2026 repair 318.024 / 541.006; nine months 2026 repair 685.984 / 1314.723; commercial 1295.143 / 1314.723; Q3 government 5.926 / 541.006; FY2025 United States 629.665 / 1112.275 | Repair 58.78% of Q3 revenue and 52.18% of nine-month revenue; commercial customers 98.51% of nine-month revenue; government 1.10% of Q3 revenue; United States 56.61% of FY2025 revenue | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 70 |
| C28 | Net debt change in Q3 2026 and trailing Adjusted EBITDA at the two quarter-ends | 894.153 − 871.597; trailing Adjusted EBITDA 240.573 at 2026-06-30 and 300.387 at 2026-09-30; Atech cash consideration 64.1 net of cash acquired | Net debt up USD 22.556m in Q3; trailing Adjusted EBITDA up USD 59.814m; Atech cost USD 64.1m | EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 8; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 9 |
| C29 | Free cash flow in FY2024 and FY2025 (operating cash flow less capital expenditure, including discontinued operations) | FY2024 −31.037 − 20.704; FY2025 26.990 − 21.281 | USD -51.741m in FY2024; USD 5.709m in FY2025 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 43 |
| C30 | Ownership and acquisition-history figures restated from Business & governance (not recalculated) | PAG seller 1,415,752 / (28,071,358 + 1,415,752); six businesses acquired from 2025-05-01 to 2026-10-05; one customer group about 20% of FY2025 revenue | 4.80%; six businesses; 20% | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 10; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11 |
| C31 | Annual report market-risk sensitivity against year-end debt, and growth in debt principal (conflict check) | 1% of year-end term loan 296.250 = 2.963; annual report sensitivity 3.8 for 1%; principal 978.793 / 296.250 | 1% of the whole year-end term loan, before swaps, is USD 2.963m against the stated USD 3.8m, and the annual report does not say which balances it used; principal is 3.30x the year-end level | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 38; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 63; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 34 |
| C32 | Secured share of debt principal | 897.750 + 20.000 = 917.750; 917.750 / 978.793; amortizing notes 61.043 | Secured term loan B and revolver USD 917.750m, 93.76% of principal; senior unsecured amortizing notes USD 61.043m | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19 |
| C33 | Claims outside the debt figure at 2026-09-30 (balance sheet amounts, not added to debt) | Earn-out obligations 27.367 (current); long-term operating lease obligations 75.817; deferred compensation 4.624 | Earn-out USD 27.367m; long-term operating leases USD 75.817m; deferred compensation USD 4.624m; none is in net debt of USD 894.153m | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 46 |
| C34 | Cash paid for interest and income taxes in FY2025 (stated; 2026 not stated) | Cash paid for interest 26.849; cash paid for income taxes 16.114 | Interest USD 26.849m and income taxes USD 16.114m in FY2025 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 44 |

Rounded figures quoted in the findings:

| ID | Figure | Value in the tables | Rounded value | Basis |
|---|---|---|---|---|
| R1 | PAG cash paid net of cash acquired | 1,748.155 | 1.75 billion | Rounded from the unrounded value in the tables and calculations |
| R2 | Net proceeds of the February 2026 offerings | 829.0 + 444.9 = 1,273.9 | 1.3 billion | Rounded from the unrounded value in the tables and calculations |
| R3 | Net debt at 2026-09-30 | 894.153 | 894.2 | Rounded from the unrounded value in the tables and calculations |
| R4 | Net debt at 2025-12-31 | 223.446 | 223.4 | Rounded from the unrounded value in the tables and calculations |
| R5 | Liquidity: cash plus undrawn revolver | 544.986 | 545.0 | Rounded from the unrounded value in the tables and calculations |
| R6 | Cash at 2026-09-30 | 65.786 | 65.8 | Rounded from the unrounded value in the tables and calculations |
| R7 | Undrawn revolver commitments | 479.200 | 479.2 | Rounded from the unrounded value in the tables and calculations |
| R8 | Free cash flow, nine months 2026 | -3.415 | -3.4 | Rounded from the unrounded value in the tables and calculations |
| R9 | Free cash flow, Q3 2026 | 46.619 | 46.6 | Rounded from the unrounded value in the tables and calculations |
| R10 | Free cash flow, last twelve months | 27.459 | 27.5 | Rounded from the unrounded value in the tables and calculations |
| R11 | Operating cash flow, nine months 2026 | 21.284 | 21.3 | Rounded from the unrounded value in the tables and calculations |
| R12 | Inventory at 2026-09-30 | 893.006 | 893.0 | Rounded from the unrounded value in the tables and calculations |
| R13 | Inventory build in the cash flow statement | 148.409 | 148.4 | Rounded from the unrounded value in the tables and calculations |
| R14 | Inventory increase since year-end 2025 | 339.172 | 339.2 | Rounded from the unrounded value in the tables and calculations |
| R15 | Inventory acquired with PAG | 200.179 | 200.2 | Rounded from the unrounded value in the tables and calculations |
| R16 | Gap between the two issuer EBITDA bases | 88.847 | 88.8 | Rounded from the unrounded value in the tables and calculations |
| R17 | Adjusted over reported EBITDA, nine months 2026 | 27.084 | 27.1 | Rounded from the unrounded value in the tables and calculations |
| R18 | Revenue, last twelve months | 1,615.905 | 1,615.9 | Rounded from the unrounded value in the tables and calculations |
| R19 | Capital expenditure, last twelve months | 31.467 | 31.5 | Rounded from the unrounded value in the tables and calculations |
| R20 | Adjusted EBITDA, Q3 2026 | 107.165 | 107.2 | Rounded from the unrounded value in the tables and calculations |
| R21 | Q4 revenue implied by the low end of guidance | 520.531 | 520.5 | Rounded from the unrounded value in the tables and calculations |
| R22 | Q4 revenue implied by the high end of guidance | 537.215 | 537.2 | Rounded from the unrounded value in the tables and calculations |
| R23 | Q4 Adjusted EBITDA implied by the low end of guidance | 98.244 | 98.2 | Rounded from the unrounded value in the tables and calculations |
| R24 | Q4 Adjusted EBITDA implied by the high end of guidance | 105.101 | 105.1 | Rounded from the unrounded value in the tables and calculations |
| R25 | 2027 scheduled principal plus estimated interest | 90.408 | 90.4 | Rounded from the unrounded value in the tables and calculations |
| R26 | Scheduled principal due in 2027 | 32.691 | 32.7 | Rounded from the unrounded value in the tables and calculations |
| R27 | Estimated annual contractual interest | 57.717 | 57.7 | Rounded from the unrounded value in the tables and calculations |
| R28 | Principal due in 2033 | 841.500 | 841.5 | Rounded from the unrounded value in the tables and calculations |
| R29 | Floating-rate debt after swaps | 667.750 | 667.8 | Rounded from the unrounded value in the tables and calculations |
| R30 | Floating-rate debt after the 2027 swap ends | 817.750 | 817.8 | Rounded from the unrounded value in the tables and calculations |
| R31 | Cost of 100 bp higher rates | 6.678 | 6.68 | Rounded from the unrounded value in the tables and calculations |
| R32 | Cost of 100 bp higher rates after the 2027 swap ends | 8.178 | 8.18 | Rounded from the unrounded value in the tables and calculations |
| R33 | Goodwill and intangibles | 2,804.005 | 2,804.0 | Rounded from the unrounded value in the tables and calculations |
| R34 | Tangible equity | 178.686 | 178.7 | Rounded from the unrounded value in the tables and calculations |
| R35 | Tangible assets | 1,675.953 | 1,676.0 | Rounded from the unrounded value in the tables and calculations |
| R36 | Earn-out obligation at 2026-09-30 | 27.367 | 27.4 | Rounded from the unrounded value in the tables and calculations |
| R37 | Maximum PAG earn-out | 125.000 | 125.0 | Rounded from the unrounded value in the tables and calculations |
| R38 | Dividends paid, nine months 2026 | 7.952 | 8.0 | Rounded from the unrounded value in the tables and calculations |
| R39 | Revenue of the customer group at about 20% | 222.455 | 222.5 | Rounded from the unrounded value in the tables and calculations |
| R40 | Net debt increase in Q3 2026 | 22.556 | 22.6 | Rounded from the unrounded value in the tables and calculations |
| R41 | Trailing Adjusted EBITDA increase in Q3 2026 | 59.814 | 59.8 | Rounded from the unrounded value in the tables and calculations |
| R42 | Atech cash consideration | 64.100 | 64.1 | Rounded from the unrounded value in the tables and calculations |
| R43 | Trailing Adjusted EBITDA | 300.387 | 300.4 | Rounded from the unrounded value in the tables and calculations |
| R44 | Revolver drawn | 20.000 | 20.0 | Rounded from the unrounded value in the tables and calculations |
| R45 | Revolver commitment | 500.000 | 500.0 | Rounded from the unrounded value in the tables and calculations |
| R46 | Amortizing notes outstanding | 61.043 | 61.0 | Rounded from the unrounded value in the tables and calculations |
| R47 | Adjusted EBITDA after a 20% fall | 240.310 | 240.3 | Rounded from the unrounded value in the tables and calculations |
| R48 | Free cash flow, first half 2026 | -50.034 | -50.0 | Rounded from the unrounded value in the tables and calculations |
| R49 | Notional of interest rate swaps | 250.000 | 250.0 | Rounded from the unrounded value in the tables and calculations |
| R50 | Notional of the swap running to 2029 | 100.000 | 100.0 | Rounded from the unrounded value in the tables and calculations |
| R51 | Notional of the swap ending in 2027 | 150.000 | 150.0 | Rounded from the unrounded value in the tables and calculations |
| R52 | Term loan B at drawdown | 900.000 | 900.0 | Rounded from the unrounded value in the tables and calculations |
| R53 | Earn-out fair value gain in 2026 EBITDA | 8.880 | 8.9 | Rounded from the unrounded value in the tables and calculations |
| R54 | Earn-out fair value charge, nine months 2025 | 29.200 | 29.2 | Rounded from the unrounded value in the tables and calculations |
| R55 | Increase in debt carrying value | 667.135 | 667.1 | Rounded from the unrounded value in the tables and calculations |
| R56 | Free cash flow, FY2024 | -51.741 | -51.7 | Rounded from the unrounded value in the tables and calculations |
| R57 | Free cash flow, FY2025 | 5.709 | 5.7 | Rounded from the unrounded value in the tables and calculations |
| R58 | Guided FY2026 Adjusted EBITDA, low end | 346.863 | 346.9 | Rounded from the unrounded value in the tables and calculations |
| R59 | Guided FY2026 Adjusted EBITDA, high end | 353.720 | 353.7 | Rounded from the unrounded value in the tables and calculations |
| R60 | Long-term operating lease obligations | 75.817 | 75.8 | Rounded from the unrounded value in the tables and calculations |
| R61 | Cash paid for interest, FY2025 | 26.849 | 26.8 | Rounded from the unrounded value in the tables and calculations |
| R62 | Cash paid for income taxes, FY2025 | 16.114 | 16.1 | Rounded from the unrounded value in the tables and calculations |

## Gaps

- High: the executed credit agreement, its first amendment and the note indenture are not supplied, so covenant levels, definitions and headroom are not calculable and the liquidity and leverage judgements stay bounded; the documents would close it.
- High: pre-acquisition EBITDA behind the 2.3x adjusted ratio is not itemized by acquired business, so the gap of USD 88.8 million cannot be tested and the leverage range rests on defined earnings; the acquired businesses' trailing earnings would close it.
- Medium: no rating, market price, spread, peer set or industry data is supplied, so market access cost, relative standing against typical leveraged issuers and sector conditions are not established.
- Medium: the proxy statement is not supplied, so board composition, independence, ownership and pay are not established and the governance rating rests on documented actions.
- Medium: guidance covers revenue growth and Adjusted EBITDA margin only, so capital expenditure, cash interest, cash taxes and free cash flow for FY2026 are not quantified and the guided leverage figures here are illustrative.
- Medium: the annual report's market risk section says a 1% rise in rates would have raised interest expense by about USD 3.8 million without stating the balances used, and 1% of the whole year-end term loan of USD 296.25 million is USD 2.96 million, so the figure cannot be matched to year-end debt; the third-quarter report says market risk has not changed materially although debt principal more than tripled. This module uses its own estimate of USD 6.68 million and keeps the two figures apart (see the market-risk check in the calculations).
- Medium: contract duration, renewal terms, backlog, seasonality and the split between price and volume are not disclosed, so revenue durability is judged on demand commentary and not on contracted visibility.
- Low: the Test Logic price is not stated, so the pro forma net debt and leverage for that purchase are not established.
- Low: the form and timing of the PAG earn-out payment, the update of customer concentration after FY2025 and the split of capital expenditure between maintenance and growth are not stated.
- Low: cash interest and cash taxes for 2026 are not stated in the quarterly reports, so interest cover is estimated from stated rates and balances and not reported.

## Next module

The orchestrator selects the next module.
