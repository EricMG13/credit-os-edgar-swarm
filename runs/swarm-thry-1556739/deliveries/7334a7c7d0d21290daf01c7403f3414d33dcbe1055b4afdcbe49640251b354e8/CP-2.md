---
module_id: CP-2
module_name: FundamentalCreditSynthesizer
issuer_id: thry-1556739
analysis_date: 2026-11-18
run_id: thry-1556739-2026-11-18-credit_snapshot-host
pathway: credit_snapshot
---

# Fundamental credit: Thryv Holdings, Inc. (thry-1556739)

## Request

Fundamental credit synthesis for Thryv Holdings, Inc. (issuer thry-1556739), as of 2026-11-18, pathway credit_snapshot (Full credit assessment). Scope: business quality, cash flow, liquidity, refinancing and the main downside path, built on the three earlier modules and five SEC filings. The module status is Ready with Limitations because the filings mix reporting perimeters and omit the loan agreements.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_thry.htm.jsonl | Visible-text extraction of the annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-27 | 282980666d3a5a06b5af2d5429137e362482dcfdc1b3bba5918f0727d2c53a53 | Cross-check of the earlier year; ABL size. Document date is the signature date. |
| 10-K_2025-12-31_thry.htm.jsonl | Visible-text extraction of the annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-26 | faf758b44ae5df8fec898bbc507989fec9683935c5c0a4d014cb5f042fa5ff17 | Competition, customer concentration, amortization after the 2025 prepayments, adjusted EBITDA for the year. Document date is the signature date. |
| 10-Q_2026-03-31_thry.htm.jsonl | Visible-text extraction of the quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-30 | 2920a22d6eeccdfffeae8ccc16ace65c14c7678a339d93c27519c6de59863a14 | Interest-rate and currency sensitivity. Document date is the signature date. |
| 10-Q_2026-06-30_thry.htm.jsonl | Visible-text extraction of the quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-04 | 8268f9e47f9d7b81e9e17f40ae4c224df8143d74fa7a0127a2505231f9437fea | Context only; not recast for the print sale. Document date is the signature date. |
| 10-Q_2026-09-30_thry.htm.jsonl | Visible-text extraction of the quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-09 | a894cef210c66630722da5f2cb4baeae3c58e9ed007152c412d67ede30ceed27 | Continuing-operations results, cash flow, liquidity, covenant forecast, sale terms, conversions and retention. Document date is the signature date. |

| Handoff module | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| CP-0 Source readiness | Source readiness register for the five filings | 2026-11-18 | ca1a9c4ec1bc3bb0ce505e781ca29a2ccd098b774b2ea5b6d7ed7bf7c658c4a6 | Perimeter break, missing documents and the cutoff of 2026-11-09 for the latest filing. |
| CP-1 Financial foundation | Financial statements, debt, liquidity and leverage registers for the five filings | 2026-11-18 | 6998e9ddbbf582cfec83d402baf22037b05c20b04126b50bd1247f9d35442e3f | Net debt, leverage on the earlier perimeter, the adjusted EBITDA bridge, debt maturities and liquidity. |
| CP-1A Business & governance | Business, transaction, ownership and governance registers for the five filings | 2026-11-18 | 8e328019fe4ec3c6d3573baa330add65e7ac4df0795af070be3873defb4c7338 | Revenue mix, ownership and lender structure, capital allocation and governance. |

## Findings

### Bottom line

Thryv's fundamental credit profile is weak, and its near-term outcome depends on a lender waiver and the closing of the Print Business sale, because the software business that remains has not yet shown it can pay interest and amortization from its own cash flow. In the first nine months of 2026 continuing operations earned adjusted EBITDA of USD 11,934 thousand against interest expense of USD 19,629 thousand and used USD 37,867 thousand of operating cash, while the print business that supplied USD 77,453 thousand of operating cash leaves with the sale.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 54; calculation C1; calculation C5

Cash and available ABL capacity of USD 19,752 thousand compare with USD 35,000 thousand of Term Loan amortization due within 12 months. The company forecasts a breach of its leverage covenant once the sale closes and has disclosed substantial doubt about continuing as a going concern.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 23; calculation C6

### Key findings

The continuing business does not cover its own fixed charges. Adjusted EBITDA of USD 11,934 thousand for the first nine months of 2026 was 0.61x interest expense of USD 19,629 thousand, and after deducting the USD 17,815 thousand of restructuring and integration expense that the adjusted measure adds back it was a loss of USD 5,881 thousand. The same add-back was USD 15,546 thousand a year earlier, so it recurs, and reported EBITDA was a loss of USD 111,282 thousand because of a USD 94,800 thousand goodwill impairment and other add-backs.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 54; 10-Q_2026-09-30_thry.htm.jsonl, page 55; calculation C1; calculation C3; calculation C4

Cash flow is weaker than earnings because the print business has been paying for the rest. Continuing operations used USD 37,867 thousand of operating cash in the first nine months of 2026 and, after USD 23,613 thousand of capital spending, free cash flow before debt service was a loss of USD 61,480 thousand, while the print business supplied USD 77,453 thousand of operating cash. The agreed price of USD 142.0 million is indicatively 1.38x that operating cash flow annualized, so the sale replaces the print cash flow with little more than a year of it.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 10; calculation C5; calculation C15

Liquidity is below the next 12 months of scheduled amortization before the sale. Cash of USD 8,752 thousand and ABL capacity of USD 11,000 thousand total USD 19,752 thousand against USD 35,000 thousand of Term Loan amortization due within 12 months, twice the USD 17,500 thousand that was due in the 12 months after the 2025 year-end. The ABL is lent against print assets only and ends when the sale closes, and a replacement revolver is being sought but is not in place; net debt was USD 230,417 thousand at September 30, 2026, and pro forma net debt after the sale, expected in the fourth quarter of 2026, is not established.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 14; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 25; 10-Q_2026-09-30_thry.htm.jsonl, page 58; 10-Q_2026-09-30_thry.htm.jsonl, page 63; 10-K_2025-12-31_thry.htm.jsonl, page 144; calculation C6; Financial foundation (CP-1)

The leverage covenant is the decisive near-term risk, and the sale itself triggers the forecast breach. The company expects to fail the Total Net Leverage Ratio test, capped at 3.0x, at the December 31, 2026 assessment because covenant EBITDA will exclude the Print Business and cap restructuring add-backs; a waiver needs a majority of lenders, of which a related party holds 40.0%. The company expects its cash, operating cash flow, sale proceeds and cost savings to fund operations for 12 months, but says it could not repay the Term Loan in full if it were accelerated.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 24; 10-Q_2026-09-30_thry.htm.jsonl, page 57; 10-Q_2026-09-30_thry.htm.jsonl, page 58; Business & governance (CP-1A)

The sale cannot repair the balance sheet on its own. Of the USD 142.0 million price, the ABL of USD 17.6 million and USD 34.3 million of accrued tax liabilities come first, leaving at most USD 90.1 million, before costs and price adjustments, for a Term Loan of USD 227.5 million principal, or 39.60% of it, and the price can fall for each month that closing is delayed. The Term Loan balance after the sale is therefore not established.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 63; calculation C8

SaaS growth is carried by conversions of Digital clients, not by demand. SaaS revenue rose 0.35% in the first nine months of 2026 and fell 3.35% in the third quarter, while the company says conversions in the last 12 months added about USD 16.4 million of SaaS revenue in nine months, so SaaS revenue before conversions fell about 4.44%. Seasoned net revenue retention fell to 89% from 94%, SaaS clients fell 5% and SaaS gross margin fell to 64.0% from 70.0% because converted clients pay nothing extra at conversion, although revenue per SaaS client rose 2% in the quarter.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 34; 10-Q_2026-09-30_thry.htm.jsonl, page 40; 10-Q_2026-09-30_thry.htm.jsonl, page 44; 10-Q_2026-09-30_thry.htm.jsonl, page 52; calculation C10; calculation C11; calculation C22

Reliance on cost savings is high, and the savings are targets. Management targets USD 50.0 million to USD 55.0 million of gross annualized savings, realised in full only from 2028, and expects a further USD 15.0 million to USD 20.0 million of restructuring cost, mostly in cash through 2027, against adjusted EBITDA of USD 11,934 thousand for nine months. The SaaS reporting unit's own forecasts were cut enough in 2026 to cause a USD 94.8 million goodwill impairment, which weakens the case for trusting forward targets.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 20; 10-Q_2026-09-30_thry.htm.jsonl, page 30; 10-Q_2026-09-30_thry.htm.jsonl, page 54

Financial policy is conservative in form, but creditors hold little control. No dividend has ever been paid, repurchases were USD 4,999 thousand in 2025 and none in the first nine months of 2026, and the Keap purchase was funded mainly with equity; the lender that holds 40.0% of the Term Loan is also a shareholder, so its incentives decide the waiver as much as any other lender's.
Basis: Business & governance (CP-1A); 10-K_2025-12-31_thry.htm.jsonl, page 119; 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 23; calculation C21

Market access is untested. All debt floats on SOFR, the Term Loan at SOFR plus 6.75%, and a rise of 100 bp adds about USD 2.7 million of annual interest on March 31, 2026 debt; the Term Loan's fair value of USD 215,476 thousand at September 30, 2026 was 94.71% of principal but was measured before the going-concern disclosure of November 9, 2026. On the maturity ladder in Financial foundation, which infers equal quarterly installments, USD 148,750 thousand of Term Loan principal falls due on May 1, 2029, so refinancing depends on the business proving itself before then.
Basis: 10-Q_2026-03-31_thry.htm.jsonl, page 44; 10-Q_2026-09-30_thry.htm.jsonl, page 19; 10-Q_2026-09-30_thry.htm.jsonl, page 23; calculation C9; calculation C14; Financial foundation (CP-1)

### Contrary evidence and what would change the view

The strongest case against a weak view is that the difficulty is a covenant definition and a timing problem, not a shortage of cash value. The company expects liquidity to suffice for 12 months if a waiver is given, the sale brings USD 142.0 million of cash against a Term Loan whose quarter-end fair value was 94.71% of principal, and the restructuring targets USD 50.0 million to USD 55.0 million of gross annualized savings against nine-month adjusted EBITDA of USD 11,934 thousand. SaaS adjusted EBITDA margin rose to 6.44% from 4.89%, the SaaS segment alone earned USD 22,098 thousand, 1.13x interest expense, because the shortfall sits in Marketing Services, which is being exited, and a lender that is also a shareholder has reason to waive rather than accelerate.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 19; 10-Q_2026-09-30_thry.htm.jsonl, page 30; 10-Q_2026-09-30_thry.htm.jsonl, page 35; 10-Q_2026-09-30_thry.htm.jsonl, page 58; calculation C9; calculation C12; calculation C13

That case would win if the lenders waived the covenant on terms that keep the Term Loan outstanding, the sale closed at the stated price with most net proceeds applied to the Term Loan, a replacement revolver were signed and continuing operating cash flow turned positive before interest. A refused waiver, a closing delayed beyond the fourth quarter of 2026, or a further fall in seasoned retention below 89% would confirm the weaker view.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 44; 10-Q_2026-09-30_thry.htm.jsonl, page 63

### Limitations

- The company's forecast is the only evidence of covenant headroom, so the conclusion that a waiver is needed would change if the loan agreement's definition of covenant EBITDA allowed larger add-backs than the company expects.
- Conversion revenue is stated by the company to the nearest USD 0.1 million and only for clients converted in the last 12 months, so the conclusion that SaaS revenue fell before conversions is approximate and would soften if earlier conversions were separated.
- Operating cash flow of the continuing business is available only for nine months, so the conclusion that it burns cash would change if working capital timing reversed in the fourth quarter.
- No peer set or rating is supplied, so the weak assessment rests on general leveraged-credit criteria for interest cover and liquidity, and could prove too harsh or too lenient against sector norms.

### Strengths and weaknesses

The strongest support is the cash value of the print sale. USD 142.0 million of cash is earmarked for the ABL, USD 34.3 million of accrued tax liabilities and part of the Term Loan, which would reduce debt and the interest burden if the sale closes, but no more than USD 90.1 million can reach the Term Loan before costs.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 10; calculation C8

SaaS profitability is improving and is the second support. SaaS adjusted EBITDA rose to USD 22,098 thousand from USD 16,726 thousand in the first nine months of 2026, a margin of 6.44% against 4.89%, after sales and marketing expense fell 18.62%, which shows costs can be cut.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 35; 10-Q_2026-09-30_thry.htm.jsonl, page 52; calculation C12; calculation C18

Revenue per SaaS client is rising and supports recurring revenue. Monthly revenue per SaaS client rose 2% in the third quarter and 8% in the nine months as price increases and add-on sales outweighed free conversions, so each remaining client is worth more even though there are fewer of them.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 44

The Term Loan is priced near principal and no debt matures before 2028. The Term Loan's fair value was 94.71% of principal at September 30, 2026, and the ABL that ends with the sale is the only facility due before the Term Loan matures on May 1, 2029.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 19; 10-Q_2026-09-30_thry.htm.jsonl, page 23; calculation C9

The largest weakness is the forecast covenant breach with substantial doubt about continuing as a going concern. The company expects to exceed the 3.0x Total Net Leverage Ratio at the December 31, 2026 test once covenant EBITDA excludes the Print Business, a breach would let lenders accelerate USD 227.5 million of principal, and a waiver needs a majority of lenders including a related party that holds 40.0%.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 24

The continuing business does not cover its interest or fund itself. Adjusted EBITDA of USD 11,934 thousand was 0.61x interest expense in the first nine months of 2026, and continuing free cash flow before debt service was a loss of USD 61,480 thousand, so debt service depended on a print cash flow that leaves with the sale.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 9; calculation C1; calculation C5

Liquidity is thin against amortization. Cash and ABL capacity of USD 19,752 thousand compare with USD 35,000 thousand of Term Loan amortization due within 12 months, and the ABL ends when the sale closes.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 63; calculation C6

SaaS demand is weaker than revenue suggests. SaaS revenue rose 0.35% in nine months only because conversions of Digital clients added about USD 16.4 million, and seasoned net revenue retention fell to 89% from 94% while SaaS clients fell 5%.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 40; 10-Q_2026-09-30_thry.htm.jsonl, page 44; calculation C10; calculation C11

Earnings quality is low. FY2025 adjusted EBITDA was USD 60,586 thousand above reported EBITDA, restructuring and integration expense recurs, and a USD 94.8 million goodwill impairment followed lower forecasts for the SaaS unit.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 20; 10-Q_2026-09-30_thry.htm.jsonl, page 55; calculation C16; calculation C3

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 40 |
| Calculated | 17 |
| Assumption-Based | 0 |
| Analyst Inference | 14 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 5 |
| Fields present | 13 |
| Fields total | 15 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 4 |

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Print Business sale | ends the print cash flow of USD 77.5m in nine months | Analyst Interpretation | Continuing cash flow | 10-Q_2026-09-30_thry.htm.jsonl, page 9 |
| Print Business sale | ends the ABL, lent on print assets only | Documentary Fact | Liquidity | 10-Q_2026-09-30_thry.htm.jsonl, page 63 |
| Print Business sale | proceeds repay the ABL, taxes and part of Term Loan | Management Language | Debt reduction | 10-Q_2026-09-30_thry.htm.jsonl, page 10 |
| Print Business sale | recasts covenant EBITDA without the print business | Documentary Fact | Leverage covenant breach | 10-Q_2026-09-30_thry.htm.jsonl, page 11 |
| Leverage covenant breach | would let lenders accelerate the Term Loan | Documentary Fact | Term Loan acceleration right | 10-Q_2026-09-30_thry.htm.jsonl, page 11 |
| Lender waiver | needs a majority; a related party holds 40.0% | Documentary Fact | Term Loan acceleration right | 10-Q_2026-09-30_thry.htm.jsonl, page 11 |
| Term Loan acceleration right | could not be met from cash and capacity | Management Language | Going-concern doubt | 10-Q_2026-09-30_thry.htm.jsonl, page 57 |
| Digital client conversions | lift SaaS revenue but dilute SaaS gross margin | Documentary Fact | SaaS margin | 10-Q_2026-09-30_thry.htm.jsonl, page 52 |
| Seasoned retention fall | downgrades and cancellations outran upsell | Documentary Fact | SaaS revenue | 10-Q_2026-09-30_thry.htm.jsonl, page 44 |
| SaaS revenue | falls before conversions, so coverage stays thin | Analyst Interpretation | Continuing cash flow | 10-Q_2026-09-30_thry.htm.jsonl, page 40 |
| SaaS margin | lifts SaaS EBITDA; Marketing Services still loses | Analyst Interpretation | Continuing cash flow | 10-Q_2026-09-30_thry.htm.jsonl, page 35 |
| Restructuring programme | cash cost now, savings in full from 2028 | Management Language | Continuing cash flow | 10-Q_2026-09-30_thry.htm.jsonl, page 30 |
| Floating-rate debt | 100 bp adds about USD 2.7m of annual interest | Documentary Fact | Continuing cash flow | 10-Q_2026-03-31_thry.htm.jsonl, page 44 |
| Continuing cash flow | does not cover interest and amortization | Analyst Interpretation | Liquidity | 10-Q_2026-09-30_thry.htm.jsonl, page 9 |

### Company description in credit terms

Thryv is a holding company whose operating subsidiary borrows the Term Loan, and after the print sale about 91.22% of continuing revenue is SaaS subscriptions sold to small businesses. Substantially all contracts last one year or less, so revenue is recurring but visible for about a year and rests on retention rather than on a contracted backlog, which weakens cash flow visibility and refinancing confidence.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 18; 10-Q_2026-09-30_thry.htm.jsonl, page 56; Business & governance (CP-1A); calculation C19

### Ownership and group structure

No controlling stockholder is named, and one shareholder that holds 40.0% of the Term Loan is the party whose vote shapes any waiver; its identity and equity stake are not established. Cash reaches the holding company only through its operating subsidiary, which borrows the Term Loan secured by all the assets of the subsidiary, certain subsidiaries and the holding company and guaranteed by the holding company and certain subsidiaries, so the lenders hold the assets of the operating group and the holding company sits behind them.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 56; Business & governance (CP-1A)

### Revenue drivers and pricing power

Revenue is recurring, short-dated and discretionary for small businesses, and structurally declining in Marketing Services, whose revenue fell 58.29% in nine months as it is wound down by 2028. Price increases in the second quarter of 2026 and add-on sales lifted revenue per SaaS client 8% in nine months, but seasoned net revenue retention fell to 89% and SaaS revenue before conversions fell, so pricing power is being used against shrinking volume; no client exceeds 5% of receivables, which limits concentration risk.
Basis: 10-K_2025-12-31_thry.htm.jsonl, page 125; 10-Q_2026-09-30_thry.htm.jsonl, page 44; calculation C10; calculation C11

### Cost structure and margin resilience

Margins cannot be assumed to hold under volume pressure. Sales and marketing expense fell 18.62% in nine months, which shows flexibility, but SaaS gross margin fell to 64.0% from 70.0% on free conversions, the company plans additional investment in its salesforce, and the restructuring program adds cash cost before savings that are realised in full only from 2028, so operating leverage works against creditors while revenue falls.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 20; 10-Q_2026-09-30_thry.htm.jsonl, page 30; 10-Q_2026-09-30_thry.htm.jsonl, page 52; calculation C18

### Capital intensity and cash conversion

Earnings do not turn into free cash flow for debt service. Capital spending of USD 23,613 thousand in nine months, 6.28% of continuing revenue, is the smaller drain; continuing operating cash flow was a loss of USD 37,867 thousand, cash interest paid was USD 20,274 thousand for the whole company, USD 33.9 million of accrued tax liabilities is due at the sale closing and pension contributions of about USD 7.6 million are expected for 2026, so cash conversion is negative until the savings arrive. Capital spending can be cut, with about USD 2.8 million expected for the rest of 2026, but that frees little cash.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 26; 10-Q_2026-09-30_thry.htm.jsonl, page 31; 10-Q_2026-09-30_thry.htm.jsonl, page 58; calculation C17; calculation C2; calculation C20

### Competitive forces

Rivalry is the force that matters most to credit: all-in-one competitors and point solution providers compete for the same small-business clients, and the fall in seasoned retention shows clients downgrading or leaving products that are no longer emphasised. Buyers sign contracts of one year or less, which limits pricing power; new technology and market entrants add to the pressure; supplier power, mainly traffic acquisition costs in the shrinking Marketing Services segment, is not a primary credit driver based on the provided materials.
Basis: 10-K_2025-12-31_thry.htm.jsonl, page 16; 10-Q_2026-09-30_thry.htm.jsonl, page 18; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 41; 10-Q_2026-09-30_thry.htm.jsonl, page 44

### Macro and external factors

Interest rates and currency are the external factors that change credit outcomes. Substantially all debt floats, so a rise of 100 bp adds about USD 2.7 million of annual interest on March 31, 2026 debt, which is large against adjusted EBITDA of USD 11,934 thousand for nine months, and the company reports exposure to the Australian and New Zealand dollars with Australia about 11.3% of revenue. Other political, social and technology factors do not appear to be a primary credit driver based on the provided materials.
Basis: 10-Q_2026-03-31_thry.htm.jsonl, page 44; 10-Q_2026-09-30_thry.htm.jsonl, page 35; Business & governance (CP-1A); calculation C1

### SWOT in credit terms

Strengths are SaaS margin improvement, a USD 142.0 million cash sale price, rising revenue per client and a Term Loan priced near principal. Weaknesses are the forecast covenant breach, negative continuing free cash flow, thin liquidity and falling retention. Opportunities are the USD 50.0 million to USD 55.0 million savings target, a replacement revolver and price increases; threats are a refused waiver, a delayed closing, further churn among converted clients and higher interest rates.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 30; 10-Q_2026-09-30_thry.htm.jsonl, page 44; calculation C5; calculation C12

### Financial profile and credit quality

Scale and market position is Weak: continuing revenue fell 10.67% in nine months and clients fell 19%. Competitive advantage is Weak: retention fell, although revenue per client rose. Business diversification is Average: a broad small-business client base and no client above 5% of receivables, but one platform and one country dominate. Cost and capex flexibility is Average: sales and marketing expense fell 18.62% but restructuring costs persist. Margin stability is Weak: SaaS gross margin fell to 64.0% from 70.0% and adjusted EBITDA margin was 3.17%. Free cash flow stability is Weak: continuing free cash flow before debt service was negative. Ability to refinance and access capital markets is Weak: going-concern doubt, an ABL that ends and no replacement revolver, though the Term Loan was priced near principal at quarter-end. Liquidity position is Weak against amortization. Financial policy and governance is Average: no dividend and candid disclosure, offset by a shareholder-lender and limited creditor control. The trend is weakening on cash flow and improving on SaaS profitability, and the main missing datapoints are covenant headroom, net proceeds and a recast twelve-month EBITDA.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 19; 10-Q_2026-09-30_thry.htm.jsonl, page 35; 10-Q_2026-09-30_thry.htm.jsonl, page 43; 10-Q_2026-09-30_thry.htm.jsonl, page 52; calculation C19; calculation C18; calculation C5; calculation C9; Business & governance (CP-1A)

### Outlook, tailwinds and headwinds

Over 12 to 24 months the outcome is set by three events: the waiver, the sale closing and the replacement revolver; the company's own forecast breach and the end of the ABL make these the main headwinds, and the restructuring savings of USD 50.0 million to USD 55.0 million, full from 2028, are the main tailwind. Over three to five years the question is whether SaaS revenue can grow without free conversions once Marketing Services ends in 2028; management says small-business demand for integrated technology continues to grow, but retention, client counts and revenue before conversions all fell in 2026, so the sector tailwind is not yet visible in the issuer's results.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 30; 10-Q_2026-09-30_thry.htm.jsonl, page 36; 10-Q_2026-09-30_thry.htm.jsonl, page 44; calculation C11

### Downside scenario

The initiating condition is the sale closing while no waiver is in place, or a closing delayed past the fourth quarter of 2026 by the price adjustment. Covenant EBITDA then excludes the print business, the Total Net Leverage Ratio test at December 31, 2026 is breached, and the lenders may accelerate USD 227.5 million of Term Loan principal; the first operational break is the loss of the ABL, whose borrowing base is print assets only, which removes USD 11,000 thousand of capacity while a replacement revolver is not yet signed. Financial transmission follows: continuing operations used USD 37,867 thousand of operating cash in nine months, tax liabilities of USD 34.3 million take part of the proceeds, and cash of USD 8,752 thousand cannot repay the Term Loan, so the lenders, one of which is a shareholder holding 40.0% of the loan, would set the terms of any amendment. Management levers are the restructuring savings, capital spending of about USD 2.8 million for the rest of 2026 and working capital; they are too small and too slow to avoid a liquidity event if the Term Loan were accelerated, which the company itself says it could not repay. Observable triggers are the covenant waiver or amendment announcement, the sale closing, any replacement revolver and fourth-quarter operating cash flow.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 63; calculation C5; calculation C6; calculation C8

### Overall credit view

Overall, Thryv presents a weak business profile as a smaller software-only issuer supported by improving SaaS margins and the cash value of the print sale, but credit quality is constrained by negative continuing cash flow, thin liquidity and a forecast covenant breach. Cash-flow durability appears weak because adjusted EBITDA covers interest 0.61x and the print cash flow leaves with the sale. Refinancing capacity is likely to depend on the waiver, the net proceeds applied to the Term Loan and a replacement revolver; the primary downside path is a covenant default after the sale closes. Business profile against typical leveraged-credit issuers is not established because no peer set is supplied. Further analysis would require the loan agreement definitions, the sale agreement terms, net proceeds and a recast twelve-month earnings history.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 35; calculation C1; calculation C5; calculation C12

### Analytical appendix — complete canonical registers

### T2.1 - Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| SRC-1 | 10-K_2024-12-31_thry.htm.jsonl | High | FY2024 | Thryv Holdings, Inc. consolidated | Audited annual report | Older than the latest annual report; includes the print business | ABL size at inception |
| SRC-2 | 10-K_2025-12-31_thry.htm.jsonl | High | FY2025 | Thryv Holdings, Inc. consolidated | Audited annual report: competition, receivables concentration, amortization, adjusted EBITDA | Not recast for the print sale | Business quality and year-end comparison |
| SRC-3 | 10-Q_2026-03-31_thry.htm.jsonl | Medium | Q1 2026 | Thryv Holdings, Inc. consolidated | Unaudited quarterly report: interest-rate and currency sensitivity | Not recast for the print sale | External factors |
| SRC-4 | 10-Q_2026-06-30_thry.htm.jsonl | Medium | Q2 2026 | Thryv Holdings, Inc. consolidated | Unaudited quarterly report | Not recast for the print sale | Context only |
| SRC-5 | 10-Q_2026-09-30_thry.htm.jsonl | Medium | Q3 2026 | Thryv Holdings, Inc. continuing operations | Unaudited quarterly report: recast results, cash flow, liquidity, covenant forecast, sale terms, retention | No auditor review is stated; nothing after 2026-11-09 | Latest results, liquidity and covenant position |
| H-1 | Source readiness (CP-0) | High | 2026-11-18 | Five filings | Source hierarchy, perimeter break and gaps | Mixed perimeters across periods | Source gate |
| H-2 | Financial foundation (CP-1) | High | FY2024 to Q3 2026 | Thryv Holdings, Inc. | Net debt, leverage, adjusted EBITDA bridge, maturities, liquidity | No leverage ratio on one perimeter at 2026-09-30 | Cash flow, liquidity and leverage conclusions |
| H-3 | Business & governance (CP-1A) | High | FY2024 to Q3 2026 | Thryv Holdings, Inc. | Revenue mix, ownership, lender structure, governance, capital allocation | Proxy statement and sale agreement not supplied | Ownership and financial policy conclusions |

### T2.10 - Materiality filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
|---|---|---|---|---|---|---|
| 1 | Forecast breach of the Total Net Leverage Ratio after the sale | The company forecasts non-compliance at the 2026-12-31 test against a 3.0x cap; a waiver needs a majority of lenders and a related party holds 40.0%; substantial doubt about continuing as a going concern is disclosed | A breach is an event of default that lets requisite lenders accelerate USD 227,500 thousand of Term Loan principal, which the company says it could not repay in full | Default risk is high until a waiver or amendment is signed | Negative | High |
| 2 | Continuing business does not cover interest | Adjusted EBITDA of 11,934 against interest expense of 19,629 is 0.61x; after the restructuring add-back it is -5,881 (calculation C1, calculation C3) | Earnings cannot service interest, so debt service has relied on print cash flow | Coverage cannot be restored without savings or debt reduction | Negative | High |
| 3 | Continuing cash burn | Operating cash flow of -37,867 and free cash flow before debt service of -61,480 against print operating cash flow of 77,453 (calculation C5) | The print cash flow that funded the group leaves with the sale | Liquidity depends on sale proceeds, which are partly used for taxes and the ABL | Negative | High |
| 4 | Liquidity against amortization | Cash of 8,752 plus ABL capacity of 11,000 is 19,752 against 35,000 due in 12 months, twice 17,500 (calculation C6) | The ABL ends at closing and a replacement revolver is not signed | A liquidity gap opens before operating cash flow and sale proceeds | Negative | High |
| 5 | Print sale proceeds | Price of USD 142.0 million; USD 17.6 million for the ABL and USD 34.3 million for taxes leave at most USD 90.1 million for the Term Loan (calculation C8) | Cash reduces Term Loan principal and interest | Partial deleveraging if the sale closes; the Term Loan balance after the sale is not established | Positive | Medium |
| 6 | SaaS demand and conversions | Seasoned net revenue retention 89% against 94%; SaaS revenue before conversions -4.44% in nine months (calculation C11) | Downgrades and cancellations outrun upsell and conversions mask the fall | Recurring revenue supporting debt service is shrinking | Negative | Medium |
| 7 | SaaS profitability | SaaS adjusted EBITDA of 22,098 against 16,726, margin 6.44% against 4.89% (calculation C12) | Cost cuts and price increases lift segment margin | Supports coverage if sustained; the segment alone covers interest expense {x2(SEG_SAAS26, INT26)}x before Marketing Services losses (calculation {CID['saascover']}) | Positive | Medium |
| 8 | Restructuring savings | Gross annualized savings of USD 50.0 million to USD 55.0 million targeted, in full from 2028 | Lower operating cost raises EBITDA | Large against nine-month adjusted EBITDA of 11,934 but a management target | Positive | Low |
| 9 | Restructuring cost and add-backs | Further cost of USD 15.0 million to USD 20.0 million, mostly cash through 2027; add-back of 17,815 against 15,546 a year earlier (calculation C3) | Cash costs precede the savings and covenant add-backs are capped | Cash cost and a lower covenant EBITDA in 2026 and 2027 | Negative | Medium |
| 10 | Related-party shareholder and lender | A shareholder above 5% holds 40.0% of the Term Loan | Holding equity and debt gives an incentive to keep the company solvent and to waive | A waiver is more likely than with unrelated lenders, but this is not established | Positive | Low |
| 11 | Related-party shareholder and lender: conflict | The same holder owns 40.0% of the Term Loan and equity; its identity and stake are not stated | Lender and shareholder interests can diverge in an amendment | Terms may favour equity protection over other lenders | Negative | Low |
| 12 | Term Loan market valuation | Fair value of 215,476 against principal of 227,500, 94.71% (calculation C9) | Quoted prices at 2026-09-30 reflect lenders' view of recovery before the going-concern disclosure | Market access may exist at a discount; the quote is a quarter-end datum | Positive | Low |
| 13 | Floating-rate interest burden | Term Loan at SOFR plus 6.75%; a 100 bp rise adds about USD 2.7 million of annual interest at 2026-03-31 | Rates feed straight into cash interest | Thin coverage is sensitive to rate moves | Negative | Medium |

### T2.12 - Monitoring triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
|---|---|---|---|---|
| Revenue decline | SaaS revenue below the USD 112,024 thousand of Q3 2026, SaaS clients below 98 thousand, or seasoned net revenue retention below 89% | Recurring SaaS revenue must replace the print cash flow and growth is carried by conversions | Lower coverage and covenant EBITDA; supports the weaker view | 10-Q_2026-09-30_thry.htm.jsonl, page 34; 10-Q_2026-09-30_thry.htm.jsonl, page 43; 10-Q_2026-09-30_thry.htm.jsonl, page 44. Limitation: continuing history starts at Q3 2025 |
| EBITDA margin pressure | SaaS gross margin below 64.0% or SaaS adjusted EBITDA margin below 6.44% | Free conversions dilute gross margin and cost savings are targets | Weaker interest cover | 10-Q_2026-09-30_thry.htm.jsonl, page 35; 10-Q_2026-09-30_thry.htm.jsonl, page 52. Limitation: segment margins are the company's non-GAAP measure |
| FCF deterioration | Continuing operating cash flow worse than a loss of 37,867 thousand for nine months, or restructuring cash cost above the USD 15.0 million to USD 20.0 million expected | The print business no longer funds the group after closing | Faster liquidity burn | 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 30. Limitation: only nine months of continuing cash flow |
| Liquidity reduction | Cash plus ABL capacity below 19,752 thousand, excess availability approaching the USD 8.5 million minimum, or no replacement revolver at closing | The ABL ends with the sale and amortization is USD 35,000 thousand over 12 months | Funding gap and covenant default under the ABL | 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 25; 10-Q_2026-09-30_thry.htm.jsonl, page 58. Limitation: replacement terms not stated |
| Leverage increase | Total Net Leverage Ratio above 3.0x at the 2026-12-31 test, or net debt above USD 230,417 thousand without a matching fall in covenant EBITDA | The company forecasts a breach once covenant EBITDA excludes the print business | Event of default and acceleration right | 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 24. Limitation: the company's covenant EBITDA is not printed; pro forma net debt after the sale is not established |
| Refinancing delay | No waiver or amendment announced before the 2026-12-31 test, a sale closing beyond the fourth quarter of 2026, or a Term Loan still outstanding in 2029 | A majority of lenders must approve a waiver and the price falls for each month of delay | Acceleration, a lender-set amendment or a lower sale price | 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 63. Limitation: the sale agreement is not supplied |
| Sponsor/shareholder action | Use of the remaining USD 34.5 million share repurchase authorization, any dividend, or a stated position of the related-party lender | Distributions compete with debt reduction and one lender holds 40.0% of the Term Loan | Leakage or a changed waiver outcome | 10-Q_2026-09-30_thry.htm.jsonl, page 29; 10-Q_2026-09-30_thry.htm.jsonl, page 11. Limitation: the lender's identity is not stated |
| Sector deterioration | Monthly revenue per SaaS client below USD 373, or a further fall in total clients, or a further fall in Marketing Services revenue | Small-business demand and competition decide whether SaaS can grow without free conversions | Lower recurring revenue and slower deleveraging | 10-Q_2026-09-30_thry.htm.jsonl, page 43; 10-Q_2026-09-30_thry.htm.jsonl, page 44. Limitation: no external sector data supplied |

<!-- table-id: cp2.cp_model_strengths_weaknesses -->

| direction | rank | label | mechanism | evidence_ids | status | source_id | source_locator | as_of |
|---|---|---|---|---|---|---|---|---|
| STRENGTH | 1 | Cash value of the print sale | USD 142.0 million of cash repays the ABL, taxes and part of the Term Loan, reducing debt and interest | C8 | READY | 10-Q_2026-09-30_thry.htm.jsonl | page 10 | 2026-09-12 |
| STRENGTH | 2 | SaaS profitability improving | Cost cuts lifted SaaS adjusted EBITDA margin, which supports coverage if sustained | C12; C18 | READY | 10-Q_2026-09-30_thry.htm.jsonl | page 35 | 2026-09-30 |
| STRENGTH | 3 | Revenue per SaaS client rising | Price increases and add-on sales raise revenue per remaining client | C10 | READY | 10-Q_2026-09-30_thry.htm.jsonl | page 44 | 2026-09-30 |
| STRENGTH | 4 | Term Loan priced near principal | Quoted fair value close to principal suggests lenders expect substantial recovery | C9 | READY | 10-Q_2026-09-30_thry.htm.jsonl | page 19 | 2026-09-30 |
| WEAKNESS | 1 | Forecast covenant breach and going-concern doubt | A breach after the sale would let lenders accelerate the Term Loan | C7; C8 | READY | 10-Q_2026-09-30_thry.htm.jsonl | page 11 | 2026-09-30 |
| WEAKNESS | 2 | Continuing business does not cover interest | Adjusted EBITDA below interest expense and negative free cash flow | C1; C5 | READY | 10-Q_2026-09-30_thry.htm.jsonl | page 54 | 2026-09-30 |
| WEAKNESS | 3 | Liquidity thin against amortization | Cash and ABL capacity below 12 months of amortization and the ABL ends at closing | C6 | READY | 10-Q_2026-09-30_thry.htm.jsonl | page 23 | 2026-09-30 |
| WEAKNESS | 4 | SaaS demand weaker than revenue suggests | Conversions mask a fall in SaaS revenue and retention is declining | C11; C10 | READY | 10-Q_2026-09-30_thry.htm.jsonl | page 40 | 2026-09-30 |
| WEAKNESS | 5 | Low earnings quality | Recurring add-backs and an impairment after lower forecasts | C16; C3 | READY | 10-Q_2026-09-30_thry.htm.jsonl | page 55 | 2026-09-30 |

## Calculations

Each calculation shows its inputs. Amounts are in USD thousands unless a row says otherwise, and every input is copied from the cited pages or from the earlier Financial foundation.

| ID | Check | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Continuing adjusted EBITDA against interest expense, nine months | Adjusted EBITDA 2026: 11,934; 2025: -6,997. Interest expense including related party 2026: 12,221 + 7,408 = 19,629; 2025: 15,193 + 8,728 = 23,921 | 2026: 11,934 / 19,629 = 0.61x; 2025: -6,997 / 23,921 = -0.29x | 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 54 |
| C2 | Continuing adjusted EBITDA against cash interest paid, nine months 2026 | Adjusted EBITDA 11,934; cash interest paid 20,274 (stated for the whole company) | 11,934 / 20,274 = 0.59x | 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 54 |
| C3 | Adjusted EBITDA after the restructuring and integration expense it adds back, nine months | Adjusted EBITDA 2026 11,934; restructuring and integration expenses 2026 17,815; 2025 15,546 | 11,934 - 17,815 = -5,881; the add-back rose by 2,269 (14.60%) from 15,546 | 10-Q_2026-09-30_thry.htm.jsonl, page 54; 10-Q_2026-09-30_thry.htm.jsonl, page 55 |
| C4 | Reported EBITDA and the adjusted measure, nine months 2026 | Reported EBITDA -111,282; share-based compensation 11,292; impairment charges 94,800 (USD 94.8 million); restructuring and integration 17,815 | Reported EBITDA of -111,282 becomes adjusted EBITDA of 11,934 after add-backs (bridge in the earlier Financial foundation) | Financial foundation (CP-1); 10-Q_2026-09-30_thry.htm.jsonl, page 54 |
| C5 | Free cash flow before debt service on continuing operations and operating cash flow of the print business, nine months 2026 | Operating cash flow of continuing operations -37,867; additions to fixed assets and capitalized software 23,613; operating cash flow of discontinued operations 77,453 | -37,867 - 23,613 = -61,480; print business operating cash flow 77,453 | 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 58 |
| C6 | Cash and ABL capacity against Term Loan amortization, 2026-09-30 | Cash and cash equivalents 8,752; ABL capacity after the minimum excess availability 11,000; amortization due in the next 12 months 35,000; due in the 12 months after the 2025 year-end 17,500 | 8,752 + 11,000 = 19,752; 19,752 - 35,000 = -15,248; amortization step-up 35,000 / 17,500 = 2.00x | 10-Q_2026-09-30_thry.htm.jsonl, page 14; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 25; 10-K_2025-12-31_thry.htm.jsonl, page 144 |
| C7 | Net debt and net leverage on the earlier perimeter, which includes the print business | Net debt 2026-09-30 230,417; 2025-12-31 242,735; 2026-06-30 234,595. EBITDA (Reported) FY2025 91,260; LTM to 2026-06-30 64,904. EBITDA (Adjusted) FY2025 151,846; LTM to 2026-06-30 124,602 | 2025-12-31: 2.66x reported and 1.60x adjusted; 2026-06-30: 3.61x reported and 1.88x adjusted; net debt at 2026-09-30 of USD 230,417 thousand has no ratio on one perimeter. Pro forma net debt after the sale is not established | Financial foundation (CP-1); 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| C8 | Largest amount of the sale price left for the Term Loan, before costs and price adjustments | Cash purchase price USD 142.0 million; ABL balance USD 17.6 million at 2026-09-30; accrued tax liabilities USD 34.3 million; Term Loan principal USD 227.5 million | 142.0 - 17.6 - 34.3 = 90.1 (USD million); 90.1 / 227.5 = 39.60% of Term Loan principal. The Term Loan balance after any paydown is not established | 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| C9 | Term Loan fair value against principal, 2026-09-30 | Term Loan fair value 215,476; principal 227,500; carrying amount 221,569 | 215,476 / 227,500 = 94.71% | 10-Q_2026-09-30_thry.htm.jsonl, page 19; 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| C10 | SaaS and Marketing Services revenue growth, continuing operations | SaaS nine months 343,242 against 342,037; Q3 112,024 against 115,903; Marketing Services nine months 33,032 against 79,203 | SaaS nine months 1,205 (0.35%); SaaS Q3 -3,879 (-3.35%); Marketing Services nine months -58.29% | 10-Q_2026-09-30_thry.htm.jsonl, page 34; 10-Q_2026-09-30_thry.htm.jsonl, page 35; 10-Q_2026-09-30_thry.htm.jsonl, page 50 |
| C11 | SaaS revenue before the revenue added by Digital client conversions in the last 12 months | Conversion revenue stated in USD million to one decimal: nine months 11.7 from clients not already on SaaS and 4.7 from clients already on SaaS; Q3 5.5 and 1.9. SaaS revenue nine months 343,242 against 342,037; Q3 112,024 against 115,903 | Nine months: 343,242 - 11,700 - 4,700 = 326,842, -4.44% against 342,037. Conversion revenue nine months 11.7 + 4.7 = 16.4 (USD million). Q3: 112,024 - 5,500 - 1,900 = 104,624, -9.73% against 115,903. Approximate: the company states conversion revenue to the nearest USD 0.1 million | 10-Q_2026-09-30_thry.htm.jsonl, page 40 |
| C12 | SaaS segment adjusted EBITDA margin, nine months | Segment adjusted EBITDA 22,098 (2026) and 16,726 (2025); SaaS revenue 343,242 and 342,037; Marketing Services segment adjusted EBITDA -10,164 and -23,723 | 2026: 6.44%; 2025: 4.89%; SaaS adjusted EBITDA rose by 5,372 | 10-Q_2026-09-30_thry.htm.jsonl, page 34; 10-Q_2026-09-30_thry.htm.jsonl, page 35 |
| C13 | SaaS segment adjusted EBITDA against total interest expense, nine months 2026 | SaaS segment adjusted EBITDA 22,098; Marketing Services segment adjusted EBITDA -10,164 (2025: -23,723); interest expense including related party 19,629 | 22,098 / 19,629 = 1.13x; the Marketing Services loss narrowed by 13,559. The segment figures are the company's non-GAAP measure and exclude restructuring and integration expense | 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 35 |
| C14 | Term Loan balance due at maturity, from the debt maturity ladder at 2026-09-30 | Term Loan principal 227,500; stated annual amortization USD 35.0 million taken as four equal quarterly installments of 8,750 (inferred by Financial foundation); installments 8,750 + 35,000 + 35,000 before maturity | 227,500 - 8,750 - 35,000 - 35,000 = 148,750 due on 2029-05-01; the ABL of 17,600 matures on 2028-05-01 and ends at the sale closing | Financial foundation (CP-1); 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| C15 | Sale price against the print business's annualized operating cash flow | Print business operating cash flow, nine months 2026: 77,453; cash purchase price USD 142.0 million (142,000 thousand) | 77,453 x 12 / 9 = 103,270; 142,000 / 103,270 = 1.38x. Indicative: ignores seasonality and working capital timing | 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 10 |
| C16 | Adjusted less reported EBITDA, FY2025 | EBITDA (Adjusted) 151,846; EBITDA (Reported) 91,260 | 151,846 - 91,260 = 60,586; 39.90% of adjusted EBITDA | Financial foundation (CP-1); 10-K_2025-12-31_thry.htm.jsonl, page 101 |
| C17 | Capital spending, nine months 2026 and the rest of the year | Additions to fixed assets and capitalized software 23,613; expected for the rest of 2026 about USD 2.8 million (2,800); continuing revenue 376,274 | 23,613 + 2,800 = 26,413 for 2026; 23,613 / 376,274 = 6.28% of nine-month revenue | 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 58 |
| C18 | Sales and marketing expense, nine months | 2026: 136,874; 2025: 168,182 | 168,182 - 136,874 = 31,308, 18.62% lower | 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 52 |
| C19 | Continuing revenue, nine months | 2026: 376,274; 2025: 421,240 | -10.67%; adjusted EBITDA margin 3.17% in 2026; SaaS share of continuing revenue 343,242 / 376,274 = 91.22% in nine months 2026; customers in Australia about 11.3% of nine-month revenue as stated | 10-Q_2026-09-30_thry.htm.jsonl, page 34; 10-Q_2026-09-30_thry.htm.jsonl, page 35 |
| C20 | Pension contributions expected for 2026 and the tax cash claim due at the sale closing | Qualified plan about USD 7.1 million; non-qualified plans about USD 0.5 million; accrued liability for IRS notices USD 33.9 million (33,900), to be paid in full at the sale closing | 7.1 + 0.5 = 7.6 (USD million); the USD 33.9 million is stated and is part of the USD 34.3 million tax payment named in the use of proceeds | 10-Q_2026-09-30_thry.htm.jsonl, page 26; 10-Q_2026-09-30_thry.htm.jsonl, page 31 |
| C21 | Share repurchases | Repurchases of common stock 2025: 4,999; nine months 2026: none; remaining authorization USD 34.5 million | USD 4,999 thousand repurchased in 2025; none in nine months 2026 | 10-K_2025-12-31_thry.htm.jsonl, page 119; 10-Q_2026-09-30_thry.htm.jsonl, page 9; 10-Q_2026-09-30_thry.htm.jsonl, page 29 |
| C22 | SaaS operating metrics, as stated and as recomputed | Monthly revenue per SaaS client: Q3 USD 373 against USD 365; nine months USD 378 against USD 350. SaaS clients 98 thousand against 103 thousand; total clients 110 thousand against 136 thousand. SaaS gross margin nine months 64.0% against 70.0%. Seasoned net revenue retention 89% against 94% | Revenue per client Q3 up 2% as stated (2.19% computed); nine months up 8% as stated (8.00% computed); SaaS clients down 5% as stated (-4.85% computed); total clients down 19% as stated (-19.12% computed) | 10-Q_2026-09-30_thry.htm.jsonl, page 42; 10-Q_2026-09-30_thry.htm.jsonl, page 43; 10-Q_2026-09-30_thry.htm.jsonl, page 44; 10-Q_2026-09-30_thry.htm.jsonl, page 52 |

## Gaps

These items do not change a conclusion on their own and are carried here.

| Gap | Affected analysis | Severity | Action | Status |
|---|---|---|---|---|
| No recast twelve-month adjusted EBITDA or net debt on the continuing perimeter is supplied | Leverage after the sale | Material | Obtain the recast quarterly results after the sale closes | Open |
| The loan agreements and the sale agreement are not supplied | Covenant headroom, waiver mechanics and net proceeds | Material | Obtain the agreements and the Form 8-K of 2026-09-14 | Open |
| Nothing dated after 2026-11-09 is supplied | Sale closing, waiver outcome and replacement revolver | Material | Establish events after the cutoff | Open |
| No peer set, rating or market quote other than the Term Loan fair value is supplied | Business profile against sector peers | Material | Supply peer and market data if needed | Open |
| Interest-rate sensitivity is stated only to 2026-03-31 | Effect of rates on interest cover | Minor | Obtain a sensitivity at the latest date | Open |
| The company's net proceeds, costs and price adjustments are not stated | Term Loan balance after the sale | Minor | Obtain closing statement | Open |
| The related-party lender is not named | Waiver dynamics | Minor | Obtain the proxy statement | Open |
| Fourth-quarter 2026 results are not available | Continuing cash flow trend | Minor | Obtain the annual report for 2026 | Open |

## Next module

The orchestrator selects the next module.
