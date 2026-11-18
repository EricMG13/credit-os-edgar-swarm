---
issuer_id: www-110471
module_id: CP-2
module_name: FundamentalCredit
analysis_date: 2026-11-18
run_id: www-110471-2026-11-18-credit_snapshot-host
pathway: credit_snapshot
module_status: Complete
---

## Request

Wolverine World Wide Inc /De/ (issuer www-110471), as of 2026-11-18, credit snapshot pathway. The scope is the fundamental credit synthesis drawn from the five supplied SEC filings and from the supplied Source readiness, Financial foundation and Business & governance outputs, for the latest period ended 2026-10-03.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-28_www-20241228.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 28, 2024, audited | 2025-02-20 | 7239e33c4ae03b27f5635b1a953f7f93069ffa5bc28afa6ba494b2d8b1ccb420 | Original fiscal 2024 and 2023 amounts that the 2025 annual report supersedes; the 2021 notes and the facilities replaced in 2025 |
| 10-K_2026-01-03_www-20260103.htm.jsonl | Annual report on Form 10-K for the fiscal year ended January 3, 2026 (53 weeks), audited | 2026-02-27 | f58252240bbbfa7d9b61184a9217c945b56b2be2e0cc93102849cc1e20eab894 | Statements, segments, channels, competition, sourcing and customer disclosure, risk factors, contractual obligations, pension funded status, debt note and share repurchases |
| 10-Q_2026-04-04_www-20260404.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended April 4, 2026, unaudited | 2026-05-14 | 607918af6fedbad373330ee245ab98ff6facb9118bcfa5632ff51201c6fc6044 | First-quarter statements and revolver balance |
| 10-Q_2026-07-04_www-20260704.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended July 4, 2026, unaudited | 2026-08-13 | 5a09204c9fb474b4e2579452f2b10c4ffadd01196c6342344def825b064d76f3 | Second-quarter statements and revolver balance |
| 10-Q_2026-10-03_www-20261003.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended October 3, 2026, unaudited | 2026-11-12 | e7b2d4756d04f34834477b48b11b534f653fbd89b9d3fad410ef29da659129b1 | Latest statements, segments, debt and revolver terms and covenants, liquidity, tariff refunds, litigation, receivables facility, goodwill and the dividend declared on 2026-11-02 |

- Source readiness (CP-0), sha256 7e42c1e954da2a00dd71cdb5c6f58c69dafca0566196dafef254b6baf6b31450: used for the source set, the recast of fiscal 2024, the 53-week fiscal 2025 and the missing credit agreement, indenture and proxy statement.
- Financial foundation (CP-1), sha256 5b45891c1f6c8e31ed1e8a47420db1b1c3b6a80dec0c32ace6576ec765513a25: used for calculated EBITDA, leverage, interest cover, liquidity, free cash flow, the debt maturity profile and the post-balance-sheet dividend adjustment.
- Business & governance (CP-1A), sha256 7891fc957ac35c11792161028b949f07bd36f0b4fbbcc3c7092cac6aa733e621: used for the business, ownership, governance, concentration, claims outside debt and event facts.

## Findings

### Bottom line

Wolverine's credit profile is adequate and improving, so near-term repayment risk is low, but it leans on Active Group brand momentum and a single bullet maturity in 2029. Net leverage fell to 1.66x of LTM EBITDA at Q3 2026 from 4.01x at FY2024, or 1.69x pro forma for the dividend declared on 2026-11-02, but USD 32.6 million of one-off tariff refunds flatter it: without the refunds it would be 1.91x before the dividend.
Basis: Financial foundation (CP-1); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 29; calculation L1; calculation L2; calculation L3; calculation L4

Liquidity of USD 724.7 million against USD 550.0 million of senior notes due in 2029 gives a refinancing runway, and low capital spending keeps cash generation positive. The primary downside path is a fade in Active Group demand, or tariff costs without further refunds, eroding margin before the 2029 refinancing, with covenant headroom and the ranking of the notes not established because the credit agreement and indenture are not supplied.
Basis: Financial foundation (CP-1); 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 14–15; 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 37–38; calculation L6; calculation L7; calculation L18

### Key findings

Leverage has moved from stretched to moderate through both repayment and earnings. Net debt to EBITDA was 4.01x at FY2024, 2.36x at FY2025 and 1.66x at Q3 2026, which is 1.69x pro forma for the dividend declared on 2026-11-02, with net debt falling from USD 495.9 million to USD 399.3 million (USD 407.5 million pro forma) while EBITDA rose from USD 123.7 million in FY2024 to USD 241.2 million on an LTM basis. That lowers debt service pressure and the weight of the 2029 maturity, but the ratio is seasonal: it was 2.76x at Q1 2026 after the first-quarter working capital build.
Basis: Financial foundation (CP-1); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 14; 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 37–38; calculation L1; calculation L2; calculation L3

Part of the latest improvement is one-off, and the underlying margin is flat rather than rising. Tariff refunds of USD 32.6 million sit in cost of goods sold, so gross margin without them was 47.41% in the first nine months of 2026, level with 47.41% a year earlier, which means price increases and other gains only matched higher U.S. tariff costs and an unfavourable product and customer mix. EBITDA margin without the refund was 10.49% against 8.96% a year earlier because operating expenses grew 3.0% while revenue grew 8.3%, so operating leverage added 1.53 percentage points rather than the 3.75 percentage points reported.
Basis: Financial foundation (CP-1); 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 29–30; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 33; calculation L11; calculation L12; calculation L13

The 2029 senior notes are the single refinancing event, and liquidity covers them with room to spare. Liquidity of USD 724.7 million, which is cash plus USD 576.6 million of unborrowed revolver, is 1.32x the USD 550.0 million principal, no debt matures before 2029-08-15 (about 33 months from the as-of date), and the notes carry an annual cash coupon of USD 22.0 million. The revolver ends 405 days after the notes, so it does not by itself bridge a failed refinancing, and whether it carries an earlier springing maturity is not established.
Basis: 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 14–15; 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 37–38; Financial foundation (CP-1); calculation L6; calculation L7; calculation L8; calculation L16

Free cash flow is positive but seasonal and driven by working capital, not investment. Capital expenditure was only USD 14.5 million in fiscal 2025, so free cash flow was USD 125.5 million, USD 77.7 million after USD 33.3 million of dividends and USD 14.5 million of repurchases, and USD 211.5 million on an LTM basis; nine-month free cash flow was negative USD 20.1 million in 2025 and positive USD 65.9 million in 2026. Revolver borrowings rose to USD 92.0 million at Q1 2026 from USD 75.0 million at the year-end before being repaid, so intra-year leverage and liquidity should be read against the same quarter a year earlier.
Basis: Financial foundation (CP-1); 10-K_2026-01-03_www-20260103.htm.jsonl, page 52; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 40; calculation L9; calculation L10; calculation L24

Business concentration is the main operating risk. The Active Group supplied 75.1% of fiscal 2025 revenue and 71.4% of segment profit before corporate costs, led by Saucony and Merrell, while the Work Group's operating margin fell to 14.9% from 16.4% in the first nine months of 2026; brand revenue levels are not printed, so the size of the dependence is not established, and no customer exceeds 10% of revenue.
Basis: Business & governance (CP-1A); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 28; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 31; 10-K_2026-01-03_www-20260103.htm.jsonl, page 108; calculation L21

Tariffs and Asian sourcing are the main external risk, and no contract protects the margin. All products come from third-party suppliers, mainly in Asia Pacific, without long-term contracts, so U.S. tariff costs flow into cost of goods sold and are recovered only through price; the February 2026 court ruling produced a one-off refund and no further asset is recognised. Footwear is a competitive and fragmented market and wholesale customers order on an order-to-order basis, so the evidence of pricing power is price increases offsetting tariffs rather than margin expansion.
Basis: 10-K_2026-01-03_www-20260103.htm.jsonl, page 13; 10-K_2026-01-03_www-20260103.htm.jsonl, page 16; 10-K_2026-01-03_www-20260103.htm.jsonl, page 18; 10-K_2026-01-03_www-20260103.htm.jsonl, page 108; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 29; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 31; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 35; calculation L11

Claims outside reported debt make obligations larger than the debt figure suggests. Total debt plus the USD 125.0 million of receivables sold is 2.79x LTM EBITDA, USD 137.3 million of lease liabilities and USD 53.0 million of accrued pension liabilities sit outside debt, and the USD 21.4 million environmental reserve will be paid over up to 25 years. Goodwill and intangibles of USD 633.8 million exceed equity of USD 533.9 million, so an impairment would hit equity but not cash.
Basis: Business & governance (CP-1A); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 5; 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 11–12; 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 24–25; calculation L17; calculation L22; calculation L23

Financial policy and governance are moderate, and they hold the main unknowns for creditors. There is no sponsor, payouts are 38.1% of free cash flow and no waiver, exchange or restructuring is described, but the covenant levels, the security and ranking of the notes and the proxy statement are not available, so headroom and priority are not established.
Basis: Business & governance (CP-1A); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15; calculation L10

### Contrary evidence and what would change the view

The strongest evidence against an adequate and improving view is that the improvement is recent, flattered by a one-off and exposed to a seasonal cycle. Net leverage was 2.76x at Q1 2026, only two quarters before it reached 1.66x (1.69x pro forma for the dividend declared on 2026-11-02), EBITDA was negative USD 31.7 million in FY2023 and only USD 123.7 million in FY2024, nine-month free cash flow was negative in 2025, and at the FY2024 EBITDA level total debt to EBITDA would be 4.43x with the notes coupon covered 5.62x. Active Group concentration, a weakening Work Group and tariff exposure mean one weak season could reverse much of the gain, and no covenant levels are available to show how much room there would be.
Basis: Financial foundation (CP-1); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15; calculation L3; calculation L18; calculation L27

Against that, debt is down USD 100.6 million since FY2024, no maturity falls before 2029, liquidity is 1.32x the notes, capital spending is light, and the income-statement interest burden is small at 9.07x LTM EBITDA to net interest expense. Evidence that would move the view weaker includes an Active Group revenue decline, EBITDA falling toward the FY2024 level, revolver borrowings above the USD 130.0 million seen in 2025, a buyback or dividend increase while it is drawn, or covenant terms that leave little room. Evidence that would move it stronger includes a refinancing of the 2029 notes at similar cost, covenant terms with wide headroom and a sustained Work Group margin recovery.
Basis: Business & governance (CP-1A); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 14; calculation L7; calculation L15; calculation L24; calculation L28

### Limitations

- Covenant levels and definitions are not supplied, so the margin between current net leverage and any maximum test cannot be stated and the liquidity conclusion assumes the revolver can be drawn in full.
- The ranking and security of the senior notes are not stated, so how noteholders would rank against a fully drawn secured revolver of USD 600.0 million is not established; this bounds the refinancing conclusion and any view of recovery.
- EBITDA is calculated from operating profit and depreciation because the issuer states none, so every leverage ratio moves with any definition or add-back that the credit agreement uses, and the tariff-refund normalisation is an analyst judgement, not an issuer figure.
- Cash interest is stated only for FY2024 and FY2025, so cover on cash interest for the latest period is not established; the 9.07x measure uses income-statement interest and includes interest income on the refunds.
- No management guidance, rating or market price is supplied, so the outlook rests on reported trends and refinancing access is judged on fundamentals alone.

### Strengths and weaknesses

Deleveraging to a moderate level is the first strength. Repayment and EBITDA growth took net leverage from 4.01x to 1.66x, or 1.69x pro forma for the dividend declared on 2026-11-02, which lowers debt service pressure and the weight of the 2029 maturity and so lowers the probability of distress.
Basis: Financial foundation (CP-1); calculation L1; calculation L2; calculation L3

Liquidity against a single maturity is the second strength. Liquidity of USD 724.7 million covers the USD 550.0 million of notes due on 2029-08-15 by 1.32x and no other debt matures first, so a refinancing can be run without a liquidity squeeze if the revolver stays drawable.
Basis: 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 14–15; 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 37–38; calculation L6; calculation L7; calculation L16

Asset-light cash generation is the third strength. Capital expenditure of 0.8% of revenue means most EBITDA converts to free cash flow, which was USD 125.5 million in fiscal 2025 and USD 211.5 million over the LTM, supporting repayment and the dividend.
Basis: Financial foundation (CP-1); 10-K_2026-01-03_www-20260103.htm.jsonl, page 52; calculation L9; calculation L10

Active Group brand momentum is the fourth strength. Active Group revenue rose USD 161.7 million in fiscal 2025 and USD 112.8 million in nine months of 2026, lifting EBITDA and the pace of repayment.
Basis: Business & governance (CP-1A); 10-K_2026-01-03_www-20260103.htm.jsonl, page 47; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 31; calculation L21

Concentration in the Active Group is the first weakness. The Active Group is 75.1% of revenue and 71.4% of segment profit, so a fade in Saucony or Merrell demand would reverse leverage gains quickly, and brand revenue levels are not printed to size the exposure.
Basis: Business & governance (CP-1A); calculation L21

Tariff exposure and a flattered margin are the second weakness. Third-party Asian sourcing exposes cost of goods sold to tariffs, and USD 32.6 million of one-off refunds lift the latest margin, so leverage is 1.91x before the dividend without them and the underlying gross margin is flat.
Basis: 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 29–30; Financial foundation (CP-1); calculation L4; calculation L11; calculation L12

A single bullet maturity with unseen terms is the third weakness. All refinancing falls on 2029-08-15, a one percentage point higher coupon would cost USD 5.5 million a year, and covenant levels and the ranking of the notes are not available, so headroom and priority are not established.
Basis: 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 14–15; calculation L16; calculation L19

Claims outside debt and intangibles above equity are the fourth weakness. Receivables sold, lease and pension liabilities and the remediation reserve sit outside the debt figure, and goodwill and intangibles of USD 633.8 million exceed equity of USD 533.9 million, so obligations are larger than debt and an impairment would weaken equity.
Basis: Business & governance (CP-1A); calculation L17; calculation L22; calculation L23

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 24 |
| Calculated | 13 |
| Assumption-Based | 0 |
| Analyst Inference | 7 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 4 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 4 |

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Active Group brand momentum | Raises EBITDA | Documentary Fact | LTM EBITDA of USD 241.2 million | Active Group revenue rose USD 112.8 million in nine months of 2026 and supplies 71.4% of segment profit |
| LTM EBITDA of USD 241.2 million | Lowers net leverage to 1.66x (1.69x pro forma) | Documentary Fact | Lower debt service and refinancing pressure | Net debt of USD 399.3 million, or USD 407.5 million pro forma for the dividend declared on 2026-11-02 |
| Tariff refunds of USD 32.6 million | Inflate the latest EBITDA once | Analyst Interpretation | Net leverage of 1.91x without them | The refund sits in cost of goods sold and no asset is recognised for further claims; the 1.91x is an analyst normalisation |
| U.S. tariffs on Asian-sourced goods | Offset price increases in gross margin | Analyst Interpretation | Underlying gross margin flat at 47.41% | Gross margin without refunds was 47.41% in both nine-month periods while price increases were made |
| Third-party sourcing without contracts | Leaves tariff costs to be priced through | Documentary Fact | Margin and cash flow volatility | All products come from third parties with no long-term contracts, mainly in Asia Pacific |
| Capital expenditure at 0.8% of revenue | Ties cash flow to margin and working capital | Analyst Interpretation | Seasonal free cash flow | Operating cash flow was USD 73.6 million in nine months of 2026 against −USD 6.2 million a year earlier |
| Seasonal working capital build | Draws the revolver in the first quarter | Documentary Fact | Intra-year leverage peak of 2.76x | Revolver borrowings were USD 92.0 million at 2026-04-04 against USD 75.0 million at the year-end |
| Revolver repaid to nil | Leaves the notes as the only debt | Documentary Fact | Single bullet maturity on 2029-08-15 | No borrowings were outstanding on the revolver at 2026-10-03 and there is no variable-rate debt |
| Liquidity of USD 724.7 million | Covers the notes 1.32x if fully drawable | Analyst Interpretation | Refinancing runway before 2029-08-15 | Cash plus USD 576.6 million of unborrowed revolver against USD 550.0 million of notes |
| Revolver ending 405 days after the notes | May not bridge a failed refinancing | Analyst Interpretation | Refinancing risk in the last year | Whether the revolver has an earlier springing maturity is not established |
| Receivables sold of USD 125.0 million | Fund working capital outside reported debt | Documentary Fact | Total debt plus receivables sold at 2.79x | The facility limit was fully used at 2026-10-03 and the seller's assets are pledged to the purchasers |
| Former tannery PFAS claims | Take cash for up to 25 years | Documentary Fact | Cash outflow against a USD 21.4 million reserve | USD 8.4 million is due within twelve months and loss above reserve cannot be estimated |
| Intangibles of USD 633.8 million | Exceed equity of USD 533.9 million | Documentary Fact | Impairment would cut equity, not cash | The Sweaty Betty reporting unit passed its annual test by 16% |
| Covenant levels not printed | Prevent measurement of headroom | Insufficient Information | Revolver access under stress | A maximum leverage ratio and a minimum interest cover ratio are named; levels are not stated |
| No sponsor or controlling holder | Removes owner extraction and an equity cure | Documentary Fact | Support in stress must come from the company | Public holders only; payouts were 38.1% of fiscal 2025 free cash flow |

### Company description and credit linkage

Wolverine designs, markets and licenses casual, outdoor, athletic, work and kids' footwear and apparel through two reportable segments: the Active Group, with Merrell, Saucony, Sweaty Betty and Chaco, and the Work Group, with Wolverine, Cat, Bates, Harley-Davidson and HYTEST. Fiscal 2025 revenue was USD 1,874.3 million, 74.6% wholesale and 25.4% direct-to-consumer, with 52.2% earned outside the United States, and no customer accounts for more than 10% of revenue. Disposals and licensing deals in 2023 and 2024, including Keds, Sperry, leather and Hush Puppies in China and North America, cut Other revenue by 86.3%, leaving a brand-focused business with no owned factories.
Basis: Business & governance (CP-1A); 10-K_2026-01-03_www-20260103.htm.jsonl, pages 5–6; 10-K_2026-01-03_www-20260103.htm.jsonl, page 85; 10-K_2026-01-03_www-20260103.htm.jsonl, page 108

Wholesale orders are placed order by order and can be cancelled, so cash-flow visibility is short and rests on brand demand each season. The model needs little capital, which supports debt service in a normal year, but the main levers in a weak year are marketing spend and shareholder payouts rather than capital expenditure, so refinancing confidence depends on demand holding up until 2029.
Basis: 10-K_2026-01-03_www-20260103.htm.jsonl, page 12; 10-K_2026-01-03_www-20260103.htm.jsonl, page 18; calculation L10

### Ownership and group structure

Wolverine World Wide, Inc. is a widely held listed company with no sponsor, parent or controlling holder named in any filing, so there is no owner to extract cash and none to cure a shortfall. The senior notes are guaranteed by substantially all domestic subsidiaries, and the USD 600.0 million revolver is guaranteed by material domestic subsidiaries and secured on substantially all personal and real property; the security and ranking of the notes are not stated, so the noteholders' position against a drawn secured revolver is not established. Receivables are sold through a bankruptcy-remote subsidiary whose assets are pledged to the purchasers, and noncontrolling interests of USD 20.2 million show that some subsidiaries are not wholly owned.
Basis: Business & governance (CP-1A); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 5; 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 11–12; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15

Financial policy is moderate: dividends and repurchases took 38.1% of fiscal 2025 free cash flow, debt fell by USD 100.6 million since FY2024, and no waiver, exchange or restructuring is described, but the credit agreement that limits payouts is not supplied. Business & governance puts governance and sponsor risk at medium, driven by recurring payouts made while revolver balances were outstanding and by missing covenant, ownership and board evidence, which leaves capacity for larger distributions untested.
Basis: Business & governance (CP-1A); calculation L10; calculation L28

### Revenue durability and pricing power

Revenue recovered after the disposals: USD 2,242.9 million in fiscal 2023, USD 1,755.0 million in fiscal 2024, USD 1,874.3 million in fiscal 2025 and USD 1,986.9 million on an LTM basis over 53 weeks. Growth is led by the Active Group, which added USD 161.7 million in fiscal 2025 and USD 112.8 million in nine months of 2026 on Saucony and Merrell, while the Work Group was flat and Hush Puppies royalty revenue declined. Nine-month 2026 growth of 8.3% includes a USD 17.7 million foreign exchange benefit and is 7.0% without it, and the filing cites price increases as a driver of gross margin, which shows some pricing power against tariffs.
Basis: Financial foundation (CP-1); 10-K_2026-01-03_www-20260103.htm.jsonl, page 47; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 31; calculation L14

Revenue is discretionary and brand-driven, wholesale customers order on an order-to-order basis, retail consolidation and private label are named as risks, and only USD 23.8 million of fixed licence consideration gives contracted visibility. Revenue is therefore cyclical and moderately concentrated in the Active Group, so durability depends on Saucony and Merrell demand holding up and on direct-to-consumer, which grew 1.7% in nine months of 2026 after falling 1.7% in fiscal 2025.
Basis: 10-K_2026-01-03_www-20260103.htm.jsonl, page 18; 10-K_2026-01-03_www-20260103.htm.jsonl, page 19; 10-K_2026-01-03_www-20260103.htm.jsonl, page 47; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 13; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 31

### Cost structure and margin resilience

Gross margin rose to 47.3% in fiscal 2025 from 44.3% on cost savings, full-price mix and price increases, partly offset by higher U.S. tariffs. In the first nine months of 2026 reported gross margin was 49.63%, but without the USD 32.6 million tariff refund it was 47.41%, level with the prior year, so price increases and other gains only matched tariff costs and an unfavourable product and customer mix. Operating expenses were 39.3% of fiscal 2025 revenue and grew 3.0% against revenue growth of 8.3% in nine months of 2026, so operating leverage added 1.53 percentage points to EBITDA margin without the refund.
Basis: 10-K_2026-01-03_www-20260103.htm.jsonl, page 46; 10-K_2026-01-03_www-20260103.htm.jsonl, page 47; 10-K_2026-01-03_www-20260103.htm.jsonl, page 48; 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 30–33; Business & governance (CP-1A); calculation L11; calculation L12; calculation L13

Margins can be defended against modest volume pressure through price and marketing spend, but a demand fall would meet operating expenses of USD 736.5 million that include store and lease costs the filing calls fixed, and there are no long-term supplier contracts to protect input costs. Margin resilience is therefore average: proven against tariffs only by price increases, and unproven through a downturn.
Basis: 10-K_2026-01-03_www-20260103.htm.jsonl, page 16; 10-K_2026-01-03_www-20260103.htm.jsonl, page 19; 10-K_2026-01-03_www-20260103.htm.jsonl, page 48

### Capital intensity and free cash flow conversion

Capital expenditure was USD 14.5 million in fiscal 2025, 0.8% of revenue and 56.0% of depreciation and amortization, because manufacturing is outsourced. Free cash flow was USD 125.5 million in fiscal 2025, 71.27% of EBITDA, and USD 211.5 million on an LTM basis, but working capital swings it: operating cash flow was USD 73.6 million in nine months of 2026 against negative USD 6.2 million a year earlier, after a working capital outflow of USD 73.0 million.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-K_2026-01-03_www-20260103.htm.jsonl, page 52; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 39; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 40; calculation L9; calculation L26

Cash interest of USD 33.5 million in fiscal 2025 is already inside operating cash flow; dividends of USD 33.3 million and repurchases of USD 14.5 million leave USD 77.7 million. Further calls include remediation payments of USD 5.7 million in nine months of 2026, purchase obligations of USD 315.4 million due within a year for inventory and capital items, and operating lease obligations of USD 168.9 million. EBITDA converts to free cash flow reliably over a year but not within it, and capital expenditure offers little flexibility because it is already low.
Basis: Financial foundation (CP-1); 10-K_2026-01-03_www-20260103.htm.jsonl, page 52; 10-K_2026-01-03_www-20260103.htm.jsonl, page 53; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 24; calculation L5; calculation L10; calculation L23

### Competitive forces

Rivalry is high: the filing describes a competitive and fragmented market in which some rivals are larger and better resourced, so brand strength must be refreshed each season and margin depends on price, product and marketing. Buyer power is moderate: wholesale customers order on an order-to-order basis and retail consolidation and private label can squeeze terms, but no customer exceeds 10% of revenue and direct-to-consumer is a quarter of sales. Supplier power is low to moderate: all products are made by third parties without long-term contracts, but the filing says other suppliers could supply similar products on comparable terms, so switching is possible at some cost and delay. The supplied filings give no evidence on new entrants or substitutes, so those two forces are not assessed. Together the forces point to margin durability that rests on brand demand rather than structural protection.
Basis: 10-K_2026-01-03_www-20260103.htm.jsonl, page 13; 10-K_2026-01-03_www-20260103.htm.jsonl, page 16; 10-K_2026-01-03_www-20260103.htm.jsonl, page 18; 10-K_2026-01-03_www-20260103.htm.jsonl, page 19; 10-K_2026-01-03_www-20260103.htm.jsonl, page 108

### External factors

Political and regulatory factors are material. U.S. tariffs on imported goods feed cost of goods sold, the court ruling of 2026-02-20 produced USD 35.3 million of refunds by 2026-10-03, and a new tariff basis would remove that benefit; environmental law drives the USD 21.4 million remediation reserve. Economic factors matter through consumer demand and foreign exchange: forward contracts of USD 335.9 million hedge dollar inventory purchases of non-U.S. wholesale operations, and exchange rates added USD 17.7 million to nine-month revenue. The Middle East is about 1% of revenue and managed by distributors, so it is a minor exposure, and social and technological factors do not appear to be a primary credit driver in the supplied filings.
Basis: 10-Q_2026-10-03_www-20261003.htm.jsonl, page 29; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 31; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 42; Business & governance (CP-1A); calculation L14; calculation L25

### SWOT

The credit-supportive strengths are deleveraging to a moderate level, liquidity that covers the only maturity, asset-light cash generation, Active Group brand momentum and the absence of a sponsor. The credit constraints are concentration in the Active Group, a Work Group whose margin is falling, tariff exposure with a flattered latest margin, claims outside debt with intangibles above equity, and covenant and ranking terms that are not visible. Opportunities that could improve credit quality are an early refinancing of the 2029 notes, further debt reduction from cash flow and a Work Group margin recovery. Threats that could weaken it are new tariffs, a fade in Saucony and Merrell demand, an impairment of the Sweaty Betty reporting unit and larger shareholder payouts while the revolver is drawn.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation L11; calculation L21; calculation L22

### Financial profile and credit quality

Scale and market position are average: LTM revenue of USD 1,986.9 million across recognised brands in a fragmented market. Competitive advantage is average: brand names and licences support pricing, but the Cat and Harley-Davidson licences end in 2028 and 2029 and price increases only offset tariffs. Business diversification is average: two segments, 52.2% foreign revenue and no customer above 10%, but 75.1% of revenue sits in the Active Group. Cost and capex flexibility is average: capital expenditure is low, but operating expenses are 39.3% of revenue. Margin stability is average and improving but unproven through a cycle. Free cash flow stability is average: positive in every full fiscal year from 2023 to 2025 but negative over nine months of 2025. Ability to refinance is average on the evidence available, because the bullet is about 33 months away and no rating or market price is supplied. Liquidity position is strong because USD 724.7 million of liquidity faces no maturity before 2029. Financial policy and governance are average: no sponsor and moderate payouts, with covenants not visible. The trend is improving.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-K_2026-01-03_www-20260103.htm.jsonl, page 12; calculation L6; calculation L9; calculation L16; calculation L21

### Outlook, tailwinds and headwinds

Over the next 12 to 24 months the supports are Active Group momentum, with Active Group revenue up 9.9% in the third quarter of 2026, lower interest cost as debt was repaid, price increases and operating cash flow that the company expects to be sufficient for working capital. The headwinds are U.S. tariff costs without the 2026 refund, a Work Group whose margin is 1.5 percentage points lower, rising advertising and selling costs, a 53-week base in the LTM measures and continuing remediation payments.
Basis: 10-Q_2026-10-03_www-20261003.htm.jsonl, page 31; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 33; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 38; Business & governance (CP-1A); calculation L11; calculation L21

Over three to five years the Cat licence ends in 2028 and the Harley-Davidson licence in 2029, the notes mature in 2029 and the revolver in 2030, so licence renewals and refinancing fall in the same window. No management guidance is supplied, so this outlook rests on reported trends.
Basis: 10-K_2026-01-03_www-20260103.htm.jsonl, page 12; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15; calculation L16

### Downside scenario

The scenario starts with a fade in Active Group demand for Saucony and Merrell combined with U.S. tariffs on Asian-sourced goods continuing without further refunds. Wholesale customers that order on an order-to-order basis cut or cancel orders and markdowns rise, so revenue and gross margin fall while inventory of USD 278.2 million builds and the full-price mix that helped fiscal 2025 reverses. EBITDA then falls toward the USD 123.7 million of FY2024, 48.7% below the LTM level, which would put total debt to EBITDA at 4.43x while the USD 22.0 million notes coupon is still covered 5.62x. The seasonal working capital build is financed on the revolver, which reached USD 130.0 million in 2025 and still left USD 456.0 million unborrowed.
Basis: Financial foundation (CP-1); 10-K_2026-01-03_www-20260103.htm.jsonl, page 18; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 5; calculation L3; calculation L8; calculation L18; calculation L24

The 2029 notes would then be refinanced into a weaker market, and each percentage point on the coupon costs USD 5.5 million a year. The management levers are dividends and repurchases of USD 47.8 million, marketing spend, inventory and store closures, while capital expenditure is too small to cut and the 2023 and 2024 disposals show asset sales can raise cash. On these figures resilience appears sufficient to avoid liquidity distress before 2029, so default is not supported by the evidence; the exposure is refinancing cost and covenant room, which is not established. Observable triggers are Active Group revenue turning negative, gross margin without refunds below 47.41%, revolver borrowings above USD 130.0 million and any buyback while it is drawn.
Basis: Business & governance (CP-1A); 10-K_2026-01-03_www-20260103.htm.jsonl, page 108; 10-K_2026-01-03_www-20260103.htm.jsonl, page 110; calculation L10; calculation L19

### Overall credit view

Overall, Wolverine presents an adequate business profile supported by Active Group brand momentum, asset-light cash generation and a single bond with an undrawn revolver, but credit quality is constrained by concentration in the Active Group, tariff exposure with a flattered latest margin, claims outside debt and covenant and ranking terms that are not visible. Cash-flow durability appears adequate because free cash flow was positive in every full fiscal year and USD 211.5 million over the LTM, although it is seasonal and working-capital driven. Refinancing capacity is likely to depend on Active Group results through 2028, covenant terms, the ranking of the notes and the rate environment, with USD 724.7 million of liquidity against USD 550.0 million of notes as the cushion. The primary downside path is a fade in Active Group demand or tariff costs without refunds eroding margin before the 2029 refinancing. Further analysis would require the credit agreement, the indenture, brand-level revenue and management guidance. Top risk: refinancing the 2029 notes after a margin setback.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); calculation L6; calculation L7; calculation L9; calculation L18

### T2.1 - Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation |
|---|---|---|---|---|---|---|
| 10-K_2024-12-28_www-20241228.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2024-12-28, filed 2025-02-20 | High: primary SEC filing, audited | Fiscal 2024 with 2023 and 2022 comparatives | Wolverine World Wide, Inc. and subsidiaries, consolidated | Original fiscal 2024 and 2023 amounts, the 2021 notes and the facilities replaced in 2025 | Amounts predate the LIFO to FIFO recast; the 2025 annual report controls |
| 10-K_2026-01-03_www-20260103.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2026-01-03 (53 weeks), filed 2026-02-27 | High: primary SEC filing, audited | Fiscal 2025 with 2024 and 2023 comparatives | Wolverine World Wide, Inc. and subsidiaries, consolidated | Statements, segments, channels, debt note, contractual obligations, pension funded status, risk factors, divestitures, repurchases | 53-week year; Part III is incorporated by reference to a proxy statement that is not supplied |
| 10-Q_2026-04-04_www-20260404.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-04-04, filed 2026-05-14 | High: primary SEC filing, unaudited | Q1 2026 with Q1 2025 comparatives | Wolverine World Wide, Inc. and subsidiaries, consolidated | First-quarter statements, revolver balance and liquidity | Interim notes only |
| 10-Q_2026-07-04_www-20260704.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-07-04, filed 2026-08-13 | High: primary SEC filing, unaudited | Q2 2026 and first half with 2025 comparatives | Wolverine World Wide, Inc. and subsidiaries, consolidated | Second-quarter statements, revolver balance and liquidity | Interim notes only |
| 10-Q_2026-10-03_www-20261003.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-10-03, filed 2026-11-12 | High: primary SEC filing, unaudited | Q3 2026 and nine months with 2025 comparatives | Wolverine World Wide, Inc. and subsidiaries, consolidated | Latest statements, segments, debt and revolver terms, liquidity, tariff refunds, litigation, receivables facility, dividend declared 2026-11-02 | Latest source; nothing after 2026-11-12 is supplied |
| Source readiness (CP-0) output, sha256 7e42c1e954da2a00dd71cdb5c6f58c69dafca0566196dafef254b6baf6b31450 | Source readiness module output for this run | Medium: module output citing primary filings | Run as of 2026-11-18 | Wolverine World Wide, Inc. and subsidiaries, consolidated | Source set, recast of fiscal 2024, 53-week fiscal 2025 and the missing credit agreement, indenture and proxy statement | Restates the filings; adds no evidence |
| Financial foundation (CP-1) output, sha256 5b45891c1f6c8e31ed1e8a47420db1b1c3b6a80dec0c32ace6576ec765513a25 | Financial foundation module output for this run | Medium: module output citing primary filings | FY2023 to FY2025 and Q1 to Q3 2026, LTM at 2026-10-03 | Wolverine World Wide, Inc. and subsidiaries, consolidated | Statements, calculated EBITDA, leverage, interest cover, liquidity, free cash flow, debt maturities and the post-balance-sheet dividend | EBITDA is calculated; interest cover only for fiscal 2024 and 2025; covenant levels not printed |
| Business & governance (CP-1A) output, sha256 7891fc957ac35c11792161028b949f07bd36f0b4fbbcc3c7092cac6aa733e621 | Business & governance module output for this run | Medium: module output citing primary filings | Fiscal 2025 and 2026 to 2026-11-12 | Wolverine World Wide, Inc. and subsidiaries, consolidated | Segment, channel and geographic mix, ownership and control, governance risk level, events, claims outside debt, concentration | Proxy statement, credit agreement and indenture not supplied; brand revenue levels not printed |

### T2.10 - Materiality filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
|---|---|---|---|---|---|---|
| 1 | Net leverage fell from 4.01x to 1.66x | Net debt to EBITDA was 4.01x at fiscal 2024, 2.36x at fiscal 2025 and 1.66x at Q3 2026 (1.69x pro forma for the dividend declared on 2026-11-02); net debt fell from USD 495.9 million to USD 399.3 million (USD 407.5 million pro forma) as EBITDA rose from USD 123.7 million to USD 241.2 million LTM | Repayment and earnings growth both cut leverage, lowering debt service pressure and the weight of the 2029 maturity | Lower probability of default and better refinancing capacity; the ratio is seasonal and includes a one-off refund | Positive | High |
| 2 | Liquidity of USD 724.7 million against a single 2029 bullet | Cash plus USD 576.6 million of unborrowed revolver is 1.32x the USD 550.0 million notes; no debt matures before 2029-08-15 | Committed liquidity covers the only maturity and gives time to refinance | Low near-term liquidity risk; the coverage assumes the revolver is fully drawable under covenants that are not supplied | Positive | Medium |
| 3 | Concentration in the Active Group | Active Group is 75.1% of fiscal 2025 revenue and 71.4% of segment profit before corporate costs; Saucony and Merrell drove its growth; brand revenue levels are not printed | A fade in a few brands would hit most of the profit pool at once | Raises earnings volatility and the chance that leverage reverses; the size of the dependence is not established | Negative | Medium |
| 4 | Tariff exposure and a one-off refund | All products are made by third parties, mainly in Asia Pacific; USD 32.6 million of refunds lifted nine-month 2026 gross margin to 49.63% against 47.41% without them; no asset is recognised for further claims | Tariff costs enter cost of goods sold and are recovered only through price; the refund inflates the latest margin once | Underlying EBITDA is lower than reported (USD 208.6 million LTM and 1.91x without the refund) and exposed to tariff policy | Negative | High |
| 5 | A single bullet maturity in 2029 | The 4% senior notes of USD 550.0 million fall due on 2029-08-15 and the USD 600.0 million revolver ends 405 days later; the notes carry a cash coupon of USD 22.0 million a year | All refinancing risk sits on one date, and the committed facility outlasts the notes by about 13 months | Refinancing in a weaker market would cost more (USD 5.5 million a year per percentage point); early springing terms are not established | Negative | Medium |
| 6 | Covenant levels and note ranking are not available | A maximum leverage ratio and a minimum interest cover ratio are named with compliance stated and no levels; the security and ranking of the notes are not stated | Headroom and priority cannot be measured, so access to the revolver and recovery position in stress are unknown | Liquidity and refinancing conclusions rest on observed ratios only; no headroom is inferred | Negative | Not Assessable |
| 7 | Asset-light cash generation | Capital expenditure was USD 14.5 million, 0.8% of revenue, in fiscal 2025; free cash flow was USD 125.5 million and USD 211.5 million LTM | Little capital is needed, so most EBITDA converts to cash over a year | Supports debt service and deleveraging, though cash flow is seasonal and driven by working capital | Positive | High |
| 8 | Claims outside debt and legacy liabilities | Lease liabilities of USD 137.3 million, accrued pension liabilities of USD 53.0 million, USD 125.0 million of receivables sold and a USD 21.4 million remediation reserve sit outside the debt figure; goodwill and intangibles of USD 633.8 million exceed equity of USD 533.9 million | Receivables sold add 0.52x to total debt to EBITDA, and impairments would cut equity | Debt understates obligations; legacy payments run for up to 25 years | Negative | Medium |
| 9 | No sponsor and moderate shareholder payouts | No sponsor or controlling holder is named; dividends and repurchases were 38.1% of fiscal 2025 free cash flow; no waiver, exchange or restructuring is described | No owner extraction pathway and no leveraged recapitalisation in the record | Supports a moderate financial policy; capacity for larger payouts is not established | Positive | Medium |

### T2.12 - Monitoring triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
|---|---|---|---|---|
| Revenue decline | Active Group revenue growth turning negative year on year (it was +9.9% in Q3 2026), or a decline in Saucony or Merrell stated in the quarterly revenue bridge; an analyst-set signal | The Active Group supplies 71.4% of segment profit and drove the recovery | Lower EBITDA and higher leverage; weaker refinancing confidence | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 31; Limitation: no covenant-based threshold is available |
| EBITDA margin pressure | Gross margin without refunds below the 47.41% of the first nine months of both 2025 and 2026, or Work Group operating margin below 14.9%; analyst-set signals | Price increases are only offsetting tariff costs, so there is no cushion in the margin | Lower EBITDA conversion and higher leverage | calculation L11; calculation L21; Limitation: analyst-set reference levels, not covenant levels |
| FCF deterioration | Nine-month free cash flow negative again (it was −20.1 in 2025), or LTM free cash flow below the USD 125.5 million of fiscal 2025 | Free cash flow is seasonal and working-capital driven, so a repeat of 2025 would absorb the revolver | Less cash for deleveraging and a larger seasonal draw | calculation L9; Limitation: analyst-set reference levels |
| Liquidity reduction | Unborrowed revolver below USD 456.0 million, the lowest of the quarter-ends reviewed, or revolver borrowings above USD 130.0 million | The revolver is the main liquidity source and the only committed one | Lower ability to meet seasonal needs and to bridge a failed refinancing | calculation L24; Limitation: availability depends on covenants that are not supplied |
| Leverage increase | Net debt to LTM EBITDA above the 2.76x seasonal peak at Q1 2026, or total debt to EBITDA above the 3.53x at fiscal 2025 | Leverage has fallen with repayment and a one-off refund; a return above these levels would reverse the improvement | Higher probability of covenant pressure and refinancing difficulty | calculation L3; Limitation: covenant maximum is not supplied, so no headroom is stated |
| Refinancing delay | No refinancing, extension or exchange of the 2029 senior notes announced by the annual report for fiscal 2027, or the notes becoming a current liability after 2028-08-15; an analyst-set signal | All refinancing risk sits on 2029-08-15 and the revolver ends 405 days later | Refinancing in a weaker market at higher cost; each percentage point costs USD 5.5 million a year | calculation L16; calculation L19; Limitation: indenture and any early repayment or call terms are not supplied |
| Sponsor/shareholder action | A repurchase or a dividend above USD 0.10 per share a quarter while the revolver is drawn; a new large holder or activist; any waiver, amendment or exchange of the notes or revolver | Payouts were 38.1% of fiscal 2025 free cash flow and one buyback came between revolver balances of USD 130.0 million and USD 75.0 million | Cash leaves ahead of debt repayment; creditor-adverse if leverage is rising | Business & governance (CP-1A); calculation L10; Limitation: payout capacity under the credit agreement is not supplied |
| Sector deterioration | New or higher U.S. tariffs on Asian-sourced footwear and apparel, wholesale customer failures or order cancellations, or a reported decline in footwear demand; the 2026 tariff ruling is the reference event | Tariffs flow into cost of goods sold and wholesale orders are placed order by order | Lower margin and revenue visibility | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 29; 10-K_2026-01-03_www-20260103.htm.jsonl, page 18; Limitation: no sector data outside the filings |

### cp2.cp_model_strengths_weaknesses - Model strengths and weaknesses

<!-- table-id: cp2.cp_model_strengths_weaknesses -->
| direction | rank | label | mechanism | evidence_ids | status | source_id | source_locator | as_of |
|---|---|---|---|---|---|---|---|---|
| STRENGTH | 1 | Deleveraging to a moderate level | Repayment and EBITDA growth cut net leverage from 4.01x to 1.66x (1.69x pro forma), lowering debt service and refinancing pressure | L1; L2; L3 | READY | 10-Q_2026-10-03_www-20261003.htm.jsonl | pages 14 and 37 to 38 | 2026-10-03 |
| STRENGTH | 2 | Liquidity against one maturity | USD 724.7 million of cash and unborrowed revolver covers the USD 550.0 million notes due 2029-08-15 by 1.32x | L6; L7; L16 | READY | 10-Q_2026-10-03_www-20261003.htm.jsonl | pages 15 and 37 to 38 | 2026-10-03 |
| STRENGTH | 3 | Asset-light cash generation | Capital expenditure of 0.8% of revenue leaves most EBITDA to convert to free cash flow of USD 125.5 million in fiscal 2025 | L9; L10 | READY | 10-K_2026-01-03_www-20260103.htm.jsonl | pages 52 and 107 | 2026-01-03 |
| STRENGTH | 4 | Active Group brand momentum | Active Group revenue rose USD 161.7 million in fiscal 2025 and USD 112.8 million in nine months of 2026, lifting EBITDA and supporting repayment | L21; L26 | READY | 10-Q_2026-10-03_www-20261003.htm.jsonl | pages 28 and 31 | 2026-10-03 |
| WEAKNESS | 1 | Concentration in the Active Group | Active Group is 75.1% of revenue and 71.4% of segment profit, so a fade in Saucony or Merrell would reverse leverage gains quickly | L21 | READY | 10-K_2026-01-03_www-20260103.htm.jsonl | pages 107 to 108 | 2026-01-03 |
| WEAKNESS | 2 | Tariff exposure and a flattered margin | Third-party Asian sourcing exposes cost of goods sold to tariffs and USD 32.6 million of one-off refunds lift the latest margin, so leverage is 1.91x without them | L4; L11; L12 | READY | 10-Q_2026-10-03_www-20261003.htm.jsonl | pages 29 to 30 | 2026-10-03 |
| WEAKNESS | 3 | Single bullet maturity with unseen terms | All refinancing falls on 2029-08-15 and covenant levels and note ranking are not available, so headroom and priority are not established | L7; L16; L19 | READY | 10-Q_2026-10-03_www-20261003.htm.jsonl | pages 14 and 15 | 2026-10-03 |
| WEAKNESS | 4 | Claims outside debt and intangibles above equity | USD 125.0 million of receivables sold, USD 137.3 million of lease liabilities, a USD 21.4 million remediation reserve and USD 633.8 million of intangibles against USD 533.9 million of equity | L17; L22; L23 | READY | 10-Q_2026-10-03_www-20261003.htm.jsonl | pages 5 and 11 to 12 | 2026-10-03 |

## Calculations

| Calculation ID | Test | Inputs | Result | Stated figure | Source |
|---|---|---|---|---|---|
| L1 | Leverage at 2026-10-03, carried | Total debt 547.4; cash 148.1; net debt 399.3; LTM EBITDA 241.2 (operating profit 219.8 plus depreciation and amortization 21.4), in USD million | Total debt / EBITDA 2.27x; net debt / EBITDA 1.66x | Carried unchanged from Financial foundation | Financial foundation (CP-1) |
| L2 | Pro forma for the dividend declared on 2026-11-02, carried | Dividend 8.2; pro forma net debt 407.5; pro forma net leverage 1.69x; the filing states no total and no payment date, only a record date of 2027-01-04 | Pro forma net debt 407.5; pro forma net leverage 1.69x | Carried unchanged from Financial foundation | Financial foundation (CP-1) |
| L3 | Leverage history, carried | Fiscal 2024: net debt 495.9 on EBITDA 123.7; fiscal 2025: net debt 415.4 on EBITDA 176.1; Q1 2026 and Q2 2026 on LTM EBITDA, in USD million | Net debt / EBITDA 4.01x at fiscal 2024; 2.36x at fiscal 2025; 2.76x at Q1 2026; 2.29x at Q2 2026; total debt / EBITDA 3.53x at fiscal 2025 | Carried unchanged from Financial foundation | Financial foundation (CP-1) |
| L4 | Leverage without the tariff refund, carried (Analyst Judgement in Financial foundation) | LTM EBITDA 241.2 less refunds of 32.6 recognized in cost of goods sold, in USD million | EBITDA 208.6; net debt / EBITDA 1.91x; total debt / EBITDA 2.62x | The issuer states the 32.6 benefit; the normalised ratios are not issuer figures | Financial foundation (CP-1); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 29 |
| L5 | Interest cover on cash interest, carried | Fiscal 2024 EBITDA 123.7 on cash interest paid 44.1; fiscal 2025 EBITDA 176.1 on cash interest paid 33.5, in USD million | EBITDA / cash interest 2.80x at fiscal 2024; 5.26x at fiscal 2025 | No cash interest paid is stated in the quarterly reports, so no later cover is stated | Financial foundation (CP-1) |
| L6 | Liquidity at 2026-10-03, carried | Cash 148.1 plus unborrowed revolver 576.6, which is commitment 600.0 less borrowings 0.0 less letters of credit 23.4, in USD million | 724.7 | Unborrowed revolving credit facility 576.6 | Financial foundation (CP-1); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 37; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 38 |
| L7 | Liquidity against the 2029 senior notes | Liquidity 724.7 over notes principal 550.0, in USD million; assumes the revolver can be drawn in full, which covenants not supplied may limit | 1.32x | Not stated | calculation L6; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 14 |
| L8 | Annual cash coupon on the 2029 senior notes | Principal 550.0 times the stated rate of 4.000%, in USD million | 22.0 | Not stated | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 14; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15 |
| L9 | Free cash flow, carried | Operating cash flow less additions to property, plant and equipment, in USD million | Fiscal 2023 107.2; fiscal 2024 159.9; fiscal 2025 125.5, which is 71.27% of EBITDA; nine months 2025 −20.1; nine months 2026 65.9; LTM at 2026-10-03 211.5 | The issuer states no free cash flow | Financial foundation (CP-1) |
| L10 | Free cash flow after fiscal 2025 shareholder payouts | Free cash flow 125.5 less dividends paid 33.3 is 92.2; less repurchases 14.5 is 77.7; payouts 47.8 over free cash flow 125.5, in USD million | After dividends 92.2; after dividends and repurchases 77.7; payouts are 38.1% of free cash flow | Not stated | calculation L9; 10-K_2026-01-03_www-20260103.htm.jsonl, page 52 |
| L11 | Gross margin without the tariff refund, nine months of 2026 | Gross profit 729.2 less refunds in cost of goods sold 32.6 over revenue 1,469.4; nine months 2025 gross profit 643.3 over revenue 1,356.8, in USD million | Without the refund 47.41%; nine months 2025 47.41%; reported 2026 49.63% | Gross margin 49.6% in 2026 and 47.4% in 2025 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 29; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 30 |
| L12 | EBITDA margin without the tariff refund, nine months of 2026 | EBITDA 186.7 less refunds 32.6 over revenue 1,469.4; nine months 2025 EBITDA 121.6 over revenue 1,356.8, in USD million | Without the refund 10.49%; reported 12.71%; nine months 2025 8.96%; the margin gain is 3.75 percentage points reported and 1.53 without the refund | Not stated | Financial foundation (CP-1); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 30 |
| L13 | Operating expenses against revenue, nine months of 2026 | Operating expenses 558.3 against 542.0 is an increase of 16.3; revenue 1,469.4 against 1,356.8 is an increase of 112.6, in USD million | Operating expenses +3.0%; revenue +8.3% | Revenue +8.3% | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 30; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 33 |
| L14 | Revenue growth without foreign exchange, nine months of 2026 | Revenue increase 112.6 less foreign exchange benefit 17.7 over nine months 2025 revenue 1,356.8, in USD million | 7.0% against reported 8.3% | Foreign exchange increased revenue by 17.7 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 31 |
| L15 | Net interest expense and EBITDA over it, LTM at 2026-10-03 | Fiscal 2025 interest expense, net 32.8 plus nine months 2026 18.4 less nine months 2025 24.6 is 26.6; LTM EBITDA 241.2; without 1.3 of interest income on tariff refunds the expense is 27.9, in USD million | EBITDA / net interest expense 9.07x, or 8.65x without the interest income; an income-statement measure, not cover on cash interest | Not stated | 10-K_2026-01-03_www-20260103.htm.jsonl, page 46; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 30; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 29 |
| L16 | Time to maturity from the as-of date | 2026-11-18 to the notes due 2029-08-15; to the revolver commitment ending 2030-09-24 | Notes 1,001 days (about 33 months); revolver 1,406 days; the revolver ends 405 days after the notes | Not stated | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15 |
| L17 | Total debt plus receivables sold over LTM EBITDA | Total debt 547.4 plus receivables sold and derecognized 125.0 is 672.4; LTM EBITDA 241.2, in USD million | 2.79x; receivables sold add 0.52x (Analyst Judgement) | Not stated | calculation L1; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 11; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 12 |
| L18 | Earnings stress at the fiscal 2024 level (Analyst Judgement; an illustration, not a forecast) | EBITDA of 123.7 against LTM EBITDA of 241.2; total debt 547.4; annual coupon on the notes 22.0, in USD million | EBITDA 48.7% lower; total debt / EBITDA 4.43x; EBITDA over the notes coupon 5.62x | Not stated | calculation L1; calculation L3; calculation L8 |
| L19 | Refinancing cost sensitivity on the 2029 senior notes | One percentage point on principal 550.0, in USD million per year | 5.5 | Not stated | calculation L8 |
| L20 | Consent decree funding still to be paid at 2026-01-03 | Aggregate cap 69.5 less paid 61.3, in USD million | 8.2 | Municipal water improvements due in less than one year 8.2 | 10-K_2026-01-03_www-20260103.htm.jsonl, page 53 |
| L21 | Concentration and segment margin, carried | Active Group revenue 1,407.8 and segment operating profit 253.2 of 354.5 before corporate costs; Work Group nine-month operating profit 42.9 on revenue 288.5, in USD million | Active Group 75.1% of fiscal 2025 revenue and 71.4% of segment profit; Work Group margin 14.9% in nine months of 2026 against 16.4%, which is 1.5 percentage points lower | Active Group revenue +9.9% in the third quarter of 2026 | Business & governance (CP-1A); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 31 |
| L22 | Goodwill and intangibles against equity at 2026-10-03, carried | Goodwill 429.0 plus indefinite-lived intangibles 178.0 plus amortizable intangibles 26.8 is 633.8; total stockholders' equity 533.9, in USD million | Equity less goodwill and intangibles is −99.9 | Not stated | Business & governance (CP-1A) |
| L23 | Claims outside reported debt, carried and read at stated dates | Lease liabilities 36.6 plus 100.7 is 137.3 and accrued pension liabilities 53.0 at 2026-10-03; receivables sold 125.0 at 2026-10-03; remediation reserve 21.4 at 2026-10-03; at 2026-01-03 purchase obligations 315.4, operating lease obligations 168.9 and supplemental executive retirement plan 45.6, in USD million | Listed, not added together, because they differ in date and kind | Not stated | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 5; 10-K_2026-01-03_www-20260103.htm.jsonl, page 53; Financial foundation (CP-1) |
| L24 | Revolver balances and availability through the seasonal cycle, carried | Borrowings 130.0 at 2025-09-27, 75.0 at 2026-01-03, 92.0 at 2026-04-04, 54.0 at 2026-07-04 and 0.0 at 2026-10-03; unborrowed capacity 456.0, 510.5, 492.9, 522.8 and 576.6, in USD million | Lowest availability 456.0 at 2025-09-27; first quarter of 2026 borrowings rose by 17.0 from the year-end | Not stated | Financial foundation (CP-1); 10-Q_2026-10-03_www-20261003.htm.jsonl, page 14 |
| L25 | Tariff refund reconciliation, carried | Reduction of cost of goods sold 32.6 plus interest income 1.3 plus reduction of inventory 1.4, in USD million | 35.3 received by 2026-10-03 | Refunds received 35.3 including 1.3 of interest | Business & governance (CP-1A) |
| L26 | LTM revenue and EBITDA margin, carried and computed | LTM revenue 1,986.9 over a 53-week window; LTM EBITDA 241.2, in USD million | EBITDA margin 12.14% (calculation) against 9.40% in fiscal 2025 | Not stated | Financial foundation (CP-1) |
| L27 | EBITDA history, carried | Operating profit plus depreciation and amortization, in USD million | Fiscal 2023 −31.7; fiscal 2024 123.7; fiscal 2025 176.1 | The issuer states no EBITDA | Financial foundation (CP-1) |
| L28 | Fall in total debt since fiscal 2024, carried | Total debt 648.0 at 2024-12-28 less 547.4 at 2026-10-03, in USD million | Decrease of 100.6 | Not stated | Business & governance (CP-1A) |

## Gaps

| Gap ID | Gap or conflict | Type | Severity | Affected work | Effect on readiness | Remediation | Status |
|---|---|---|---|---|---|---|---|
| G1 | The 2025 credit agreement and the 2021 indenture are not supplied, and the filings print no covenant levels, definitions, step-downs or reported ratios, only the statement of compliance | Source gap | MATERIAL | Liquidity and refinancing conclusions; Legal & covenants; Covenant capacity | Headroom, revolver access in stress and any springing maturity are not established | Supply the credit agreement with amendments, the indenture and a compliance certificate | Open |
| G2 | The security and ranking of the senior notes against the secured revolver, and the notes call terms, are not stated | Source gap | MINOR | Structural priority; Recovery & fulcrum | Noteholder position against a drawn revolver is not established | Supply the indenture | Open |
| G3 | Cash interest paid is stated for fiscal 2024 and 2025 only, so cover on cash interest is not stated for the LTM window | Coverage gap | MINOR | Debt service view | Only an income-statement measure of interest burden is available for the latest period | Obtain interest paid for the year-to-date periods | Open |
| G4 | EBITDA is calculated because the issuer states no EBITDA or adjusted EBITDA | Definition gap | MINOR | All leverage ratios | Ratios may differ from any covenant or issuer definition | Obtain an issuer EBITDA definition and reconciliation | Open |
| G5 | No management guidance, rating or market price is supplied | Source gap | MINOR | Outlook; market access | The outlook rests on reported trends and refinancing access on fundamentals alone | Supply the latest earnings release, any guidance and rating or market data | Open |

## Next module

The orchestrator selects the next module.
