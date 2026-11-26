# CP-2 for Block, Inc. (xyz), as of 2026-11-05

## Request

Fundamental credit assessment of Block, Inc. (issuer id xyz), as of 2026-11-05, on the credit snapshot pathway. Scope: business quality, financial profile, liquidity, refinancing capacity, governance, downside path and monitoring triggers, drawing on the seven supplied files and the Source readiness, Financial foundation and Business & governance reviews.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_xyz-20251231.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2025 | 2026-02-26 | 6d2723637c4e4692665dfc17c25cdb747bc058fa0efdacc637270724a986bc79 | Business model, competition, regulation, seasonality, bank subsidiary terms and ownership structure |
| 10-Q_2026-03-31_xyz-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | fb16696ee2c760f5f516dd4d7d776ad2e1413e975d581b22e43bf743c804dffb | Read for the legal accrual path; no figure of this module comes from it |
| 10-Q_2026-06-30_xyz-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-05 | 298a453eb61f62c2eadccf751942418cba8c13261b222b26c193276f0204df4e | Read for the legal accrual path; no figure of this module comes from it |
| 10-Q_2026-09-30_xyz-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-03 | c3685fce2b8084b3b1277e2ff24d3b8912d57dba3d48bc4c00ef1cdf864ed3ba | Statements, cash flow, debt, liquidity, lending quality, contingencies, segments and ratings statement |
| EX-99.1_2026-05-07_d132441dex991.htm.jsonl | Exhibit 99.1, Q1 2026 shareholder letter | not stated | d34a2a9e1d7a5617f1c2e6fc60dfac8b09244c4670a9cb13c493e5c88cddf1a8 | Read for context; no figure of this module comes from it |
| EX-99.1_2026-08-05_d91486dex991.htm.jsonl | Exhibit 99.1, Q2 2026 shareholder letter | not stated | 804a5c312efc62e6ddd1ec8bbc4d12bb902bba131422b7373caf3f4ebbc3e21e | Read for context; no figure of this module comes from it |
| EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl | Exhibit 99.1, Q3 2026 shareholder letter | not stated | a2c931043c84d33fdc40710a24c2e84aa25d66394cc76e294f6f9e8221b76b85 | Guidance for 2026 and outlook for 2027 and activity counts, labelled as management language |

- Source readiness (CP-0), sha256 e2fef1f2e8cd622f6df897a62ac10760012c962b492b10cb3d5cd60b05a9546c: source gate, perimeter and gap list.
- Financial foundation (CP-1), sha256 b47a7cd902509115a36c58582c00de8a4ac740511c51c94babf37260fad597e2: debt, cash, EBITDA on reported and adjusted measures, leverage, cover, liquidity and maturities.
- Business & governance (CP-1A), sha256 9deb34fb090ff53e265083b2785117306eccbb65c85cec2437cb5adda5a906fb: ownership, control, transactions, operating model, behaviour flags and gaps.

## Findings

### Bottom line

Block presents an adequate fundamental credit profile that rests on liquidity and low near-term maturities rather than on clean earnings: cash exceeds all debt, but leverage depends on the earnings measure, lending exposure is growing quickly and a regulatory payment is unresolved.
Basis: calculation CASHCOV-20260930; Financial foundation (CP-1); Business & governance (CP-1A)

Total debt is 4.64x reported EBITDA but 1.68x the issuer's adjusted measure, net cash equals 0.38x reported EBITDA, issuer-stated liquidity is USD 10.1 billion and the next note maturity is the USD 575 million 2027 convertible. The primary downside path is a credit-loss and regulatory cash squeeze on a lending book that the parent carries on its own balance sheet.
Basis: Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27–28, 55

### Key findings

Liquidity is the strongest support and does most of the work: cash and cash equivalents cover the 2027 convertible notes 13.67x, issuer-stated total liquidity covers the notes principal 1.74x, the USD 900 million revolver is undrawn, no senior note falls due before 2030, and 90.04% of the notes principal falls due in four series from 2030 to 2033. Part of the cash is deposit-funded and customer-related float is large, so the cushion is real but not all of it is the issuer's own money.
Basis: calculation CASHCOV-20260930; calculation LIQCOV-20260930; calculation WALL-2030-2033; Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4, 27–28, 55–56

Leverage is measure-dependent, so no single ratio settles the credit: total debt is 4.64x reported EBITDA and 1.68x adjusted EBITDA, notes alone are 3.65x and 1.32x, and interest cover is 3.99x reported against 11.03x adjusted. The add-backs are 63.87% of adjusted EBITDA and include the contingency and restructuring charges that are partly cash, so the reported figures are the safer guide until the regulatory matter is settled.
Basis: calculation NOTESLEV-20260930; calculation ADDBACK-LTM; Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 53–54

Cash flow is strong but not clean: operating cash flow in nine months of 2026 was 53.24% higher than a year earlier and purchases of property and equipment were only 4.26% of it, leaving a proxy of USD 2,873,585 thousand, yet the figure includes movements in loans and customer balances and an unexplained inflow in other assets and liabilities. Light capital intensity gives flexibility, but conversion of earnings to free cash is not established.
Basis: calculation FCFPROXY-9M2026; Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8

Retained consumer lending is the main credit-quality exposure: loans held for investment grew 30.09%, the allowance rose from 10.17% to 12.71% of amortized cost, loan losses rose 167.78% and consumer loans 60 days to 89 days past due rose from 2.47% to 4.13%. Losses are provisioned at origination, so growth depresses reported operating income first, and nine-month operating income was 42.49% lower even as gross profit grew; the loan book is therefore both the growth engine and the first place stress would show.
Basis: calculation OPINC-9M2026; Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 19–20, 47–48

The unresolved Department of Justice matter is the largest quantified contingent claim on cash: the accrual of USD 764 million equals 48.76% of reported EBITDA and 9.72% of cash, with final terms, court approval and payment timing not stated and losses above the accrual reasonably possible. It is affordable from cash on hand, which is why it is a constraint on the profile and not a threat to liquidity, but it would be less comfortable if paid while repurchases resumed.
Basis: calculation DOJ-COVER-20260930; Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 34–35

Control and financial policy are adequate but unproven: a Class B holder group casts 52.41% of the votes, no dividend has ever been declared, repurchases fell from 78.65% to 23.35% of operating cash flow and no notes were issued in the first nine months of 2026, yet the leverage covenant level is not printed and capacity to extract value is unknown without the executed documents. Governance is a medium risk rather than a strength.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 8, 28, 31, 138

Gross profit growth supports deleveraging if it persists: management guides 2026 gross profit to 21.87% above FY2025 and an Adjusted Operating Income margin on gross profit of 27.87%, and nine-month gross margin rose to 48.01% from 41.73% as low-margin bitcoin revenue fell. The guidance is not reconciled to GAAP, so it frames the outlook and does not prove it.
Basis: calculation GUIDANCE-2026-2027; calculation GROSSMARGIN-9M2026; EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl, pages 7–8; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5

### Contrary evidence and what would change the view

The strongest evidence for a stronger view is the balance sheet: cash exceeds every debt line, net cash equals 0.38x reported EBITDA, no note falls due before November 2027 and the issuer states an investment-grade rating from Fitch of BBB-. The strongest evidence for a weaker view is the pace of retained lending, where loan losses rose 167.78% in nine months while nine-month operating income fell 42.49%, and an unresolved payment equal to 48.76% of reported EBITDA. The adequate view holds because liquidity absorbs the payment and the lending growth is, on the issuer's account, matched by stable loss rates.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 28, 34–35, 47–48, 58

The view would move up if the final settlement matched the accrual and was paid from cash, the executed credit agreement showed ample headroom under the net leverage test, and delinquency stopped rising. It would move down if consumer loans 60 days to 89 days past due kept rising beyond 4.13%, if the final settlement exceeded the accrual or brought operating conditions, if repurchases resumed at the pace of 2025, or if bank funding or warehouse availability tightened while originations kept growing.
Basis: calculation DOJ-COVER-20260930; Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 20, 29–30, 34–35, 56

### Limitations

- The level and definition of the maximum total net leverage covenant are not printed, so headroom, and with it the reliability of the revolver as a backstop in a stress, cannot be assessed; the liquidity conclusion assumes the facility stays available.
- Reported EBITDA is built from operating income and depreciation because the issuer states only adjusted EBITDA, so every leverage and cover conclusion carries a range between the two measures and not a single reading.
- No peer figures, traded prices or agency reports are supplied, so the view that the profile is adequate is absolute and not relative, and market access is judged from a 2025 issue and the issuer's own ratings statement.
- No stand-alone parent or bank subsidiary statements are supplied, so the split of cash and funding between the corporate group, the bank and customer-related float rests on notes, and the net cash conclusion could be overstated by deposit-funded cash.
- Loss history by origination cohort is not supplied for consumer lending, so the conclusion on credit quality rests on reserve ratios and delinquency movements over two dates and cannot separate growth effects from deterioration.
- Management guidance is non-GAAP and carries no cash flow, capital spending or debt service guidance, so the outlook conclusions describe earnings direction only and give no forward view of free cash flow.

### Strengths and weaknesses

Liquidity and net cash are the first strength. Cash and cash equivalents exceed all debt including matched warehouse funding, cover the 2027 convertible notes 13.67x and sit beside an undrawn USD 900 million revolver, which means maturities and the regulatory payment can be met from cash without market access in the next 12 months to 24 months.
Basis: calculation CASHCOV-20260930; calculation LIQCOV-20260930; Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27–28, 55

A distant and ladder-like maturity profile is the second strength. The first note maturity is the USD 575 million convertible on November 1, 2027 and the senior notes mature from 2030 to 2033, so refinancing pressure arrives later, which gives time for the regulatory matter to be settled and for the lending cycle to show its credit performance.
Basis: calculation WALL-2030-2033; Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27

Scale and diversification across two ecosystems are the third strength. Two reportable segments, three revenue lines, no customer above 5% of Square payment volume and Square processing revenue that grew in line with payment volume give gross profit a broader base than a single product, which supports cash-flow visibility.
Basis: Business & governance (CP-1A); 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 8; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 39, 44

Cash-funded capital policy is the fourth strength. No dividend has ever been declared, the 2026 maturities of USD 1,575 million were repaid from cash and repurchases fell sharply as a share of operating cash flow, so leverage has not been raised to fund shareholder returns.
Basis: calculation FCFPROXY-9M2026; calculation REPAY-2026; Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 8, 27

Measure-dependent earnings are the first weakness. Reported EBITDA and adjusted EBITDA differ by add-backs equal to 63.87% of the adjusted figure, and reported operating income fell 42.49% in nine months, so lenders cannot rely on the adjusted measure for debt service capacity.
Basis: calculation ADDBACK-LTM; calculation OPINC-9M2026; Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 53–54

Retained consumer lending credit risk is the second weakness. Loans held for investment grew 30.09%, loan losses rose 167.78% and early delinquency rose, so a downturn in consumer credit would reduce operating cash flow and use balance sheet funding at the same time.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 19–20, 47–48

The regulatory payment is the third weakness. An accrual of USD 764 million, equal to 48.76% of reported EBITDA, has no stated payment date, and the deferred charge concerns anti-money-laundering controls that also matter to the bank subsidiary's standing.
Basis: calculation DOJ-COVER-20260930; Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 34–35

Concentrated control and discretionary repurchases are the fourth weakness. A Class B holder group casts 52.41% of the votes and the repurchase program has USD 4.6 billion of authorization left, so cash can be redirected to equity holders by a board elected under that control.
Basis: Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 31, 138

Opaque covenant and bank perimeter are the fifth weakness. The leverage covenant level is not printed and the parent must support a bank subsidiary that funds lending with deposits and brokered certificates, so headroom and the claims ranking ahead of note holders cannot be measured.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 91–92; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 28, 56

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 24 |
| Calculated | 15 |
| Assumption-Based | 0 |
| Analyst Inference | 9 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 6 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 3 |

### Map: credit-risk transmission

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| Cash App Borrow growth | lifts loan losses booked at origination | Documentary Fact | Reported operating income | Q3 10-Q p47-48: loan losses up, rates stable |
| Retained consumer loans | tie up cash and bank funding | Documentary Fact | Operating cash flow | Q3 10-Q p8: loan originations USD 33.3bn |
| Consumer delinquency | raises the allowance and provisions | Documentary Fact | Loan losses and earnings | Q3 10-Q p19-20: allowance up, 60-89 days up |
| Anti-money-laundering charge | forces a USD 764 million accrual | Documentary Fact | Use of cash and licence risk | Q3 10-Q p34: accrued, timing not stated |
| Large cash balance | covers the 2027 convertible 13.67 times | Analyst Interpretation | Near-term refinancing risk | Calculation: cash 7,859,314 over 575,000 |
| Adjusted EBITDA add-backs | widen the gap between leverage measures | Documentary Fact | Reading of leverage and cover | Q3 10-Q p53-54: add-backs in reconciliation |
| Bitcoin price and volume | move revenue with almost no margin | Documentary Fact | Revenue scale, not cash flow | Q3 10-Q p44: 28% of revenue, 2% of profit |
| Class B voting control | lets the board direct cash to repurchases | Analyst Interpretation | Liquidity and debt capacity | Q3 10-Q p31, p138: program and votes |
| Bank deposits and certificates | fund lending but need well-capitalized status | Documentary Fact | Funding of loan growth | Q3 10-Q p56: certificates USD 381.4m |
| Warehouse special purpose entities | ring-fence matched funding of receivables | Documentary Fact | Claims of the parent notes | Q3 10-Q p29: assets not open to creditors |
| Undrawn revolver | gives a USD 900 million backstop to 2031 | Documentary Fact | Liquidity cushion | Q3 10-Q p28: no drawings at September 30 |
| Leverage covenant level | is not printed in any supplied document | Insufficient Information | Revolver availability in stress | Q3 10-Q p28: test stated, level not printed |

### Company description

Block runs two connected ecosystems, Square for sellers and Cash App for consumers, with TIDAL and bitcoin hardware projects outside the two reportable segments, and reports revenue as Commerce enablement, Financial solutions and Bitcoin ecosystem. Gross profit is the measure management steers by, because bitcoin revenue is the price of bitcoin sold to customers and carries almost no margin. Gross profit was USD 10,359,929 thousand in FY2025 and was 24.35% higher in nine months of 2026 than a year earlier, and the base is broad: no customer exceeded 5% of Square payment volume, the United States is 91.00% of revenue and the operating record runs from 2009.
The credit linkage is that processing and software income follows seller volume and gives visibility, lending income is repeat but short-dated and loss-bearing, and licences across payments, banking, lending, brokerage and bitcoin mean a regulatory action can restrict products that earn gross profit. Seasonality exists but is not quantified in the documents, with Square strongest in the fourth quarter and Cash App lifted by tax refunds in the first. Afterpay is the only acquisition the documents name, and its date and price are not stated.
Basis: Business & governance (CP-1A); 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 5–8, 21–24, 78; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 39

### Ownership and group structure

Block is a listed company with no financial sponsor and concentrated voting control: a Class B holder group casts 52.41% of the votes with 9.92% of the shares, and Jack Dorsey is named as controlling shareholder for the bank regulator's purposes. The issuer of the senior notes and the convertible notes is the parent, no guarantor is named, and the debt that ranks ahead structurally sits in two places, the matched warehouse entities whose assets are not available to the parent's creditors and the bank subsidiary whose deposits and certificates rank first on its assets.
Leverage tolerance is low on the evidence, with net cash, no dividends, maturities repaid from cash and no new notes in 2026, but capacity to take on debt or pay shareholders cannot be read without the executed documents. Governance is a medium risk because control is concentrated, the compliance record led to a deferred charge and the proxy statement that would show board independence is not supplied.
Basis: Business & governance (CP-1A); 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 91–92, 99; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 29, 138

### Revenue durability

Revenue is driven by volume and by lending volume, not by price. Square processing grew in line with payment volume, Commerce enablement revenue grew with Cash App Card and Afterpay Post-Purchase, and Financial solutions revenue grew 40.26% in nine months on Cash App Borrow, so growth is real but is increasingly lending-linked. Square sellers sign no mandatory long-term contracts, which keeps pricing transparent and lock-in low, and Cash App acquires customers through free peer-to-peer transfers, so retention rests on product use and not on contract.
The credit implication is that revenue is recurring in behaviour but transactional in form, sensitive to consumer spending and credit conditions and to regulation, and bitcoin revenue, 28.33% of revenue, swings with the bitcoin price without moving gross profit much. Customer concentration is low at Square and not stated for Cash App.
Basis: Business & governance (CP-1A); 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 19, 24; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 44, 50

### Margin resilience

Gross margin rose to 48.01% in nine months of 2026 from 41.73% because low-margin bitcoin revenue fell and higher-margin financial solutions grew, yet operating income was only 7.55% of gross profit against 16.33% a year earlier, because general and administrative expense included an increase of USD 969.2 million in litigation and regulatory accruals, a figure the Business & governance review states without saying it is the nine-month increase and not the level, and loan losses are booked at origination. Costs are part variable, with processing cost following volume and provisions following originations, and part fixed, with cloud purchase commitments of USD 2,201,264 thousand and a workforce that was cut by more than 40%.
Margins can be defended against volume pressure through the cost actions, but not against a rise in loss rates, which would hit operating income before gross profit; margin stability is therefore average and depends on credit performance.
Basis: calculation GROSSMARGIN-9M2026; calculation OPMARGIN-9M2026; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 37, 45–47

### Cash flow conversion

Capital intensity is low: purchases of property and equipment were USD 127,996 thousand in nine months of 2026, 4.26% of operating cash flow, and cash paid for interest was USD 270,946 thousand against USD 124,220 thousand a year earlier as the 2025 notes began paying coupons. Operating cash flow of USD 3,001,581 thousand benefits from add-backs of loan losses and share-based compensation and from movements in loans and customers payable, and cash taxes of USD 194,555 thousand and the accrued regulatory payment are still to be absorbed.
Free cash flow after capital spending is a proxy only; the credit implication is that cash interest, at 9.03% of operating cash flow, is comfortably covered in the period but the quality of conversion is not established, and a cash cost of USD 764 million would absorb 26.59% of the nine-month proxy.
Basis: calculation FCFPROXY-9M2026; calculation INTEREST-OCF; Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 7–8, 34, 40

### Competitive forces

Rivalry is intense in both ecosystems, from business software providers, acquirers and banks for sellers and from money transfer apps, card issuers, brokerages and banks for consumers, and Block competes on brand, breadth and simplicity, which is not a contractual moat. The threat of new entrants is high in payments and lending because licences and data are available to well-funded fintechs, though Block's seller network and Cash App peer-to-peer network create switching effort. Substitutes include bank transfers, cards and cash, and bitcoin payment rails that Block itself promotes. Buyers have power because sellers sign no long-term contracts, and suppliers have moderate power through card networks, acquiring processors, bank partners and cloud providers whose terms set processing cost and a fixed commitment of USD 2,201,264 thousand.
For creditors the forces matter through margin: rivalry limits pricing power on processing, so earnings growth must come from volume and lending, which returns the credit to loss performance.
Basis: Business & governance (CP-1A); 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 10, 19–20; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 37, 45

### Macro and regulatory factors

Regulatory and economic factors are material and social and technological ones are secondary. The deferred anti-money-laundering charge, bank-regulator conditions on Square Financial Services and state and federal lending and money transmission licences make regulation a direct driver of cash and permitted products, and consumer credit conditions and the bitcoin price drive loan losses and revenue. Artificial intelligence is credited by management for lower cost and faster product release, but its effect on credit is only the cost savings already estimated.
Basis: Business & governance (CP-1A); 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 21–23, 91–92; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 34, 43

### Credit-translated SWOT

Strengths that support credit are liquidity that exceeds all debt, maturities that begin in November 2027 and then in 2030, a broad seller base without concentration, a workforce cut by more than 40% and no dividend. Weaknesses that constrain credit are the gap between reported and adjusted earnings, retained consumer loans growing faster than the rest of the business, an unresolved payment of USD 764 million and concentrated voting control. Opportunities that could improve credit are gross profit growth guided at 21.87% above FY2025 for 2026, distribution expansion in Square and a final settlement at or below the accrual. Threats that could weaken credit are a consumer credit downturn, bank funding or warehouse availability tightening, regulatory conditions that limit lending, and a bitcoin price fall that cuts revenue and the USD 771.9 million investment.
Basis: calculation GUIDANCE-2026-2027; Financial foundation (CP-1); Business & governance (CP-1A); EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl, pages 7–9; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 34, 56

### Financial profile

Ratings-style lens on the nine dimensions, with the metrics carried from the Financial foundation below.

| Metric | Value | Period | Source |
| --- | --- | --- | --- |
| Total debt / reported EBITDA | 4.64x | LTM to September 30, 2026 | Financial foundation (CP-1) |
| Total debt / adjusted EBITDA | 1.68x | LTM to September 30, 2026 | Financial foundation (CP-1) |
| Net debt / reported EBITDA | -0.38x | LTM to September 30, 2026 | Financial foundation (CP-1) |
| Reported EBITDA / cash interest | 3.99x | LTM to September 30, 2026 | Financial foundation (CP-1) |
| Adjusted EBITDA / cash interest | 11.03x | LTM to September 30, 2026 | Financial foundation (CP-1) |
| Total debt / reported EBITDA | 4.16x | FY2025 | Financial foundation (CP-1) |
| Reported EBITDA | USD 1,566,955 thousand | LTM to September 30, 2026 | Financial foundation (CP-1) |
| Adjusted EBITDA | USD 4,336,429 thousand | LTM to September 30, 2026 | Financial foundation (CP-1) |
| Gross debt at carrying value | USD 7,266,567 thousand | September 30, 2026 | Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4, 27, 30 |
| Cash and cash equivalents | USD 7,859,314 thousand | September 30, 2026 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 4 |
| Net debt | USD -592,747 thousand | September 30, 2026 | Financial foundation (CP-1) |
| Net debt | USD 2,089,809 thousand | FY2025 | Financial foundation (CP-1) |
| Notes principal | USD 5,775 million | September 30, 2026 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27 |
| 2027 convertible notes principal | USD 575 million, due November 1, 2027 | September 30, 2026 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27 |
| Revolving credit facility, undrawn | USD 900 million, maturing January 14, 2031 with a springing earlier date | September 30, 2026 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 28 |
| Issuer-stated total liquidity | USD 10.1 billion, as printed USD 10,064,035 thousand | September 30, 2026 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 43, 55 |
| Warehouse facilities | USD 2.4 billion revolving, USD 1.5 billion drawn, USD 809.3 million available | September 30, 2026 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 29–30 |
| Share repurchase authorization remaining | USD 4.6 billion of USD 9 billion | September 30, 2026 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 31 |
| Department of Justice accrual | USD 764 million; gross monetary component about USD 964 million | September 30, 2026 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 34–35 |
| Customers payable and customer funds | USD 7,700,091 thousand and USD 5,356,911 thousand | September 30, 2026 | Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4, 15 |
| Ratings stated by the issuer | Fitch BBB-, Moody's Ba1, S&P BB+ | 2025 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 58 |
| Class B share of votes and of shares | 52.41% of votes and 9.92% of shares | October 30, 2026 | Business & governance (CP-1A) |
| Gross profit share of Cash App and Square | 63.92% and 35.43% | Nine months 2026 | Business & governance (CP-1A) |
| Gross profit share of Financial solutions and bitcoin | 41.39% and 2.07%; bitcoin is 28.33% of revenue | Nine months 2026 | Business & governance (CP-1A) |
| Loans held for investment growth, allowance and loan losses | 30.09%; allowance 12.71% against 10.17% of amortized cost; loan losses up 167.78% | September 30, 2026 and nine months 2026 | Business & governance (CP-1A) |
| Consumer loans 60 to 89 days past due | 4.13% against 2.47% | September 30, 2026 against December 31, 2025 | Business & governance (CP-1A) |
| Repurchases against operating cash flow | 23.35% against 78.65% | Nine months 2026 against nine months 2025 | Business & governance (CP-1A) |
| United States share of revenue | 91.00% | Nine months 2026 | Business & governance (CP-1A) |

Scale and market position is Strong: FY2025 gross profit was USD 10,359,929 thousand, Square processed USD 250 billion of volume and Cash App reached 60 million monthly transacting actives. Competitive advantage is Average: network effects and an integrated ecosystem are management claims without market share data. Business diversification is Average: two ecosystems and three revenue lines are offset by 63.92% of gross profit from Cash App and 41.39% from Financial solutions. Cost and capex flexibility is Strong: capital spending is 4.26% of operating cash flow and the workforce was cut by more than 40%. Margin stability is Average: gross margin rose to 48.01% while operating income fell 42.49%. Free cash flow stability is Average: strong in the period but not clean and facing a payment of USD 764 million. Ability to refinance and access capital markets is Average: USD 2.2 billion of notes were sold in August 2025 at coupons of 5.625% and 6.000% and ratings are BBB-, Ba1 and BB+, but the covenant level and market data are not supplied. Liquidity position is Strong: USD 10.1 billion of issuer-stated liquidity and net cash. Financial policy and governance is Average: no dividend and cash-funded repurchases against concentrated control and a compliance finding.
Main supports are liquidity and distant maturities; constraints are earnings quality, lending growth and the regulatory payment; the trend is mixed, with total debt to reported EBITDA moving from 4.16x at FY2025 to 4.64x because earnings were depressed by charges, while net debt moved from USD 2,089,809 thousand at FY2025 to net cash of USD 592,747 thousand; key missing data are the covenant level, loss history by cohort and the final regulatory terms.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 8; EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl, pages 1, 9; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 55–56, 58

### Outlook

Over the next 12 months to 24 months management guides 2026 gross profit to 21.87% above FY2025 and at least 15% growth in 2027 with Adjusted Operating Income margin on gross profit of 27.87% rising to 31.51%, tailwinds being Square distribution, Cash App actives and lending growth and cost savings of USD 800 million to USD 900 million a year; headwinds are the regulatory payment, higher loss provisions as lending grows, cash interest on the 2025 notes and the 2027 convertible maturity on November 1, 2027. In the medium term the senior notes, 90.04% of principal, mature in four series from 2030 to 2033, so refinancing depends on sustained earnings and on lender appetite for a business whose lending share is rising.
Sector tailwinds are digital payments adoption and consumer demand for instant credit; sector headwinds are consumer credit cycles, regulation of small-dollar lending and bitcoin price swings, none of which can be quantified from the documents.
Basis: calculation GUIDANCE-2026-2027; calculation WALL-2030-2033; EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl, page 7; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27, 34, 43

### Downside scenario

The issuer-specific downside begins with consumer credit weakening at Cash App, shown first as 60 days to 89 days past due rising beyond 4.13% and a rising allowance. The first operational break is provisioning: losses are booked at origination, so operating income falls before gross profit does, and Cash App Borrow originations may be curtailed if warehouse, deposit or brokered funding tightens or a regulator conditions the bank. The financial transmission is lower operating cash flow while the Department of Justice payment of about USD 764 million, taxes and any repurchases still draw cash, and reported leverage rises above 4.64x as reported EBITDA falls.
Liquidity consequences stay manageable in the period: cash covers the 2027 convertible 13.67x, the revolver is undrawn and no senior note is due before 2030, so resilience appears sufficient to avoid liquidity distress over the next 12 months to 24 months; the exposures are a covenant breach that cannot be tested without the level, and a loss of bank funding that would force the parent to support the bank. Management levers are suspending repurchases, which were already nil in the third quarter, slowing originations and drawing the revolver. Observable triggers are delinquency, the allowance ratio, the final settlement terms and bank capital ratios.
Basis: calculation CASHCOV-20260930; calculation DOJ-COVER-20260930; Financial foundation (CP-1); Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 19–20, 28, 34, 56

### Overall credit view

Overall, Block presents an adequate business profile supported by two diversified ecosystems, low customer concentration and a workforce that has been cut by more than 40%, but credit quality is constrained by retained consumer lending that is growing fast, a gap between reported and adjusted earnings and an unresolved regulatory payment. Cash-flow durability appears adequate because capital spending is light and operating cash flow is strong, though its quality is not established. Refinancing capacity is likely to depend on loss performance, the final settlement and the covenant level, since no note matures until November 2027 and the first senior notes mature in 2030. The primary downside path is credit losses and a regulatory cash call squeezing earnings while the parent carries the lending book and supports the bank. Further analysis would require the executed credit agreement and indentures, loss history by cohort, stand-alone bank statements and the final settlement.
Fundamental credit review completed with limitations. Top risk: retained consumer lending losses combined with the regulatory payment.
Basis: Financial foundation (CP-1); Business & governance (CP-1A); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 19–20, 28, 34

### Analytical appendix — complete canonical registers

### T2.1 - Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | Use in this module |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_xyz-20251231.htm.jsonl | Annual report on Form 10-K, audited by Ernst & Young LLP | High | Year ended December 31, 2025 | Block, Inc. and subsidiaries, consolidated | Business, regulation, debt, segments and subsequent event | Proxy statement and executed documents not supplied | Business model, ownership, bank subsidiary, seasonality and competition |
| 10-Q_2026-03-31_xyz-20260331.htm.jsonl | Quarterly report on Form 10-Q | High | Quarter ended March 31, 2026 | Block, Inc., consolidated | First-quarter legal accrual and warehouse balance | Unaudited | Read for the accrual path; no figure of this module comes from it |
| 10-Q_2026-06-30_xyz-20260630.htm.jsonl | Quarterly report on Form 10-Q | High | Quarter ended June 30, 2026 | Block, Inc., consolidated | Second-quarter legal accrual and warehouse balance | Unaudited | Read for the accrual path; no figure of this module comes from it |
| 10-Q_2026-09-30_xyz-20260930.htm.jsonl | Quarterly report on Form 10-Q | High | Quarter ended September 30, 2026 | Block, Inc., consolidated | Statements, debt, liquidity, contingencies, segments, ratings statement | Unaudited; condensed; no segment assets | Latest position, cash flow, lending quality, liquidity and legal exposure |
| EX-99.1_2026-05-07_d132441dex991.htm.jsonl | Exhibit 99.1, Q1 2026 shareholder letter | Medium | Quarter ended March 31, 2026 | Block, Inc. | Management framing | Issuer release with non-GAAP measures | Read for context; no figure of this module comes from it |
| EX-99.1_2026-08-05_d91486dex991.htm.jsonl | Exhibit 99.1, Q2 2026 shareholder letter | Medium | Quarter ended June 30, 2026 | Block, Inc. | Management framing | Issuer release with non-GAAP measures | Read for context; no figure of this module comes from it |
| EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl | Exhibit 99.1, Q3 2026 shareholder letter | Medium | Quarter ended September 30, 2026 | Block, Inc. | Guidance for 2026 and outlook for 2027, activity counts | Management Language; guidance not reconciled to GAAP | Outlook and activity statements, labelled as management language |
| Source readiness (CP-0) | Source readiness review | Medium | As of 2026-11-05 | Block, Inc. | Source gate, perimeter and gap list | Review of the same seven files | Readiness limits and the covenant and document gaps |
| Financial foundation (CP-1) | Financial foundation of the statements | Medium | FY2024, FY2025, nine months 2025 and 2026, LTM to September 30, 2026 | Block, Inc., consolidated | Debt, cash, EBITDA on two measures, leverage, cover, liquidity and maturity ladder | Reported EBITDA derived; consolidated perimeter only | Source of every leverage, cover and net debt figure |
| Business & governance (CP-1A) | Business, ownership and governance review | Medium | To September 30, 2026 | Block, Inc. | Ownership, control, transactions, operating model, behaviour and gaps | Proxy statement and executed documents not supplied | Ownership, governance, lending quality and legal exposure |

Module status: Ready with Limitations, because the covenant level, the executed financing documents, the proxy statement and the final regulatory terms are not supplied.

### T2.10 - Materiality filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Liquidity and net cash | Cash USD 7,859,314 thousand exceeds gross debt USD 7,266,567 thousand; cash covers the 2027 convertible 13.67x; issuer-stated liquidity USD 10.1 billion | Cash and an undrawn revolver meet maturities and the regulatory payment without market access | Lowers near-term default and refinancing probability; part of cash is deposit-funded | Positive | High |
| 2 | Maturity profile and revolver | Next note maturity USD 575 million on November 1, 2027; USD 5,200 million, 90.04% of principal, falls due 2030 to 2033; revolver USD 900 million to 2031 | No senior maturity for more than three years | Refinancing risk is back-ended and depends on 2030 market conditions | Positive | High |
| 3 | Gap between reported and adjusted earnings | Total debt 4.64x reported and 1.68x adjusted EBITDA; add-backs 63.87% of adjusted EBITDA; cover 3.99x against 11.03x | Add-backs include partly cash charges and recurring share-based compensation | Leverage and cover cannot be read from the adjusted measure alone | Negative | High |
| 4 | Retained consumer lending credit risk | Loans held for investment up 30.09%; allowance 12.71% against 10.17%; loan losses up 167.78%; 60 to 89 days past due 4.13% against 2.47% | Losses are provisioned at origination and the book is carried on the balance sheet | A consumer downturn lowers operating cash flow and ties up funding; first place stress would show | Negative | Medium |
| 5 | Department of Justice payment | Accrual USD 764 million, 48.76% of reported EBITDA and 9.72% of cash; timing and final terms not stated | Cash outflow, possible operating conditions and licence risk | Affordable from cash; terms above the accrual or conditions would raise risk | Negative | Medium |
| 6 | Gross profit growth and guidance | Gross profit up 24.35% in nine months; 2026 guidance 21.87% above FY2025; gross margin 48.01% | Growth and a reset cost base raise earnings capacity | Supports deleveraging if sustained; guidance is non-GAAP and not reconciled | Positive | Medium |
| 7 | Class B control and discretionary repurchases | Class B group 52.41% of votes; repurchases 23.35% of operating cash flow against 78.65%; USD 4.6 billion authorization remaining | Board elected under concentrated control can redirect cash to equity holders | Capacity to extract value is unknown without executed documents | Negative | Medium |
| 8 | Covenant headroom not visible | Maximum total net leverage covenant tested quarterly; level not printed | Revolver availability in stress cannot be tested | Backstop reliance is unproven | Negative | Not Assessable |
| 9 | Scale and diversification | FY2025 gross profit USD 10,359,929 thousand; two ecosystems; no customer above 5% of Square payment volume | Broad base lowers single-customer and single-product risk | Supports cash-flow visibility | Positive | Medium |
| 10 | Bank subsidiary support obligation | Parent must support Square Financial Services capital; brokered certificates USD 381.4 million due within twelve months | Parent resources stand behind the bank; deposits rank ahead of the notes at the bank | Possible call on parent cash if bank capital falls | Negative | Medium |

### T2.12 - Monitoring triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
| --- | --- | --- | --- | --- |
| Revenue decline | Gross profit growth falling below the guided path of 21.87% above FY2025 for 2026; revenue is a weak signal because bitcoin revenue moves with price; quantitative threshold not available in provided materials as a rating or covenant trigger | Gross profit drives earnings and debt service capacity | Slower growth would stall deleveraging | EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl, page 7; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 5, 44 |
| EBITDA margin pressure | Adjusted Operating Income margin on gross profit below the guided 27.87% for 2026; reported operating income fell 42.49% in nine months; quantitative threshold not available in provided materials | Margin shows cost control and loss provisioning | Margin below guidance weakens cover on both EBITDA measures | EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl, page 7; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| FCF deterioration | Operating cash flow less purchases of property and equipment falling below USD 1,844,876 thousand, the nine-month 2025 comparative; quantitative threshold not available in provided materials | Free cash flow funds the regulatory payment and repurchases | Lower free cash flow raises reliance on cash balances | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 8; calculation FCFPROXY-9M2026 |
| Liquidity reduction | Total liquidity moving toward USD 250 million, the level in the revolver maturity test; issuer-stated liquidity is USD 10.1 billion today | A liquidity shortfall would shorten the revolver maturity | Loss of the backstop and a refinancing squeeze | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 28, 55 |
| Leverage increase | Total debt / EBITDA rising above 4.64x reported or 1.68x adjusted; the maximum total net leverage covenant level is not printed so no covenant threshold is stated | Leverage drives revolver pricing and covenant risk | Higher leverage reduces headroom | Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 28 |
| Refinancing delay | No plan to repay or refinance the USD 575 million 2027 convertible notes by the open conversion window from August 1, 2027; no market access issue shown today | The first maturity is November 1, 2027 | A delay would draw on cash or the revolver | 10-K_2025-12-31_xyz-20251231.htm.jsonl, pages 192–193; 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27 |
| Sponsor/shareholder action | Any debt-funded repurchase or distribution, repurchases above the first-quarter 2026 amount of USD 639,988 thousand including excise tax, or use of the Class B vote to change the capital structure; quantitative threshold not available in provided materials | Control is concentrated and the program is discretionary | Extraction would reduce cover while a regulatory payment is due | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 6, 31, 143 |
| Sector deterioration | Consumer loans 60 days to 89 days past due above 4.13% of consumer balances, allowance above 12.71%, or Square payment volume growth falling below 14%; quantitative threshold not available in provided materials as a trigger | Delinquency leads loss provisions and Square volume leads processing revenue | Deterioration reduces operating cash flow before it shows in leverage | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 20, 44 |

### cp2.cp_model_strengths_weaknesses - Model strengths and weaknesses

| direction | rank | label | mechanism | evidence_ids | status | source_id | source_locator | as_of |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STRENGTH | 1 | Liquidity and net cash | Cash exceeds all debt and covers the 2027 convertible 13.67 times, so maturities and the regulatory payment are met from cash | CASHCOV-20260930; LIQCOV-20260930; T2.10 rank 1 | READY | 10-Q_2026-09-30_xyz-20260930.htm.jsonl | pages 4, 27–28, 55 | 2026-11-03 |
| STRENGTH | 2 | Distant maturity profile | No senior note before 2030 and a USD 900 million undrawn revolver to 2031 defer refinancing pressure | WALL-2030-2033; T2.10 rank 2 | READY | 10-Q_2026-09-30_xyz-20260930.htm.jsonl | pages 27–28 | 2026-11-03 |
| STRENGTH | 3 | Scale and diversification | Two ecosystems and no customer above 5% of Square payment volume broaden gross profit and cash-flow visibility | SEGGP-9M2026 in Business & governance; T2.10 rank 9 | READY | 10-K_2025-12-31_xyz-20251231.htm.jsonl | page 8 | 2026-02-26 |
| STRENGTH | 4 | Cash-funded capital policy | No dividend, maturities repaid from cash and lower repurchases keep leverage from funding shareholder returns | REPAY-2026; FCFPROXY-9M2026 | READY | 10-Q_2026-09-30_xyz-20260930.htm.jsonl | pages 8, 27 | 2026-11-03 |
| WEAKNESS | 1 | Measure-dependent earnings | Add-backs equal 63.87% of adjusted EBITDA, so leverage and cover vary widely by measure | ADDBACK-LTM; OPINC-9M2026; T2.10 rank 3 | READY | 10-Q_2026-09-30_xyz-20260930.htm.jsonl | pages 5, 53–54 | 2026-11-03 |
| WEAKNESS | 2 | Retained consumer lending credit risk | Fast loan growth with losses booked at origination raises loss and funding sensitivity | T2.10 rank 4 | READY | 10-Q_2026-09-30_xyz-20260930.htm.jsonl | pages 19–20, 47–48 | 2026-11-03 |
| WEAKNESS | 3 | Regulatory payment | USD 764 million accrual, 48.76% of reported EBITDA, with timing and final terms not stated | DOJ-COVER-20260930; T2.10 rank 5 | READY | 10-Q_2026-09-30_xyz-20260930.htm.jsonl | pages 34–35 | 2026-11-03 |
| WEAKNESS | 4 | Concentrated control and discretionary repurchases | A Class B group with 52.41% of votes elects a board that can redirect cash to equity holders | T2.10 rank 7 | READY | 10-Q_2026-09-30_xyz-20260930.htm.jsonl | pages 31, 138 | 2026-11-03 |
| WEAKNESS | 5 | Opaque covenant and bank perimeter | Covenant level not printed and the parent supports a bank whose deposits rank ahead of the notes | T2.10 ranks 8 and 10 | READY | 10-Q_2026-09-30_xyz-20260930.htm.jsonl | pages 28, 56 | 2026-11-03 |

## Calculations

Each row works one figure from the inputs shown, in USD thousand unless stated; the upstream figures it uses are stated in the Financial foundation and no printed amount is adjusted.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| CASHCOV-20260930 | Cash cover of the 2027 convertible notes | Cash and cash equivalents 7,859,314 / 2027 convertible notes principal 575,000 (USD thousand) | 13.67x | Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4, 27 |
| LIQCOV-20260930 | Total liquidity cover of notes principal | Total liquidity as printed 10,064,035 / notes principal 5,775,000 (USD thousand) | 1.74x | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 27, 55 |
| NOTESLEV-20260930 | Notes-only leverage, LTM to September 30, 2026 | Notes carrying value 5,723,027 / reported EBITDA 1,566,955; / adjusted EBITDA 4,336,429 (USD thousand; EBITDA from Financial foundation) | 3.65x on reported EBITDA; 1.32x on adjusted EBITDA | Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27 |
| ADDBACK-LTM | Add-backs as a share of adjusted EBITDA, LTM to September 30, 2026 | Add-backs 2,769,474 (= 4,336,429 - 1,566,955) / adjusted EBITDA 4,336,429 (USD thousand) | 63.87% | Financial foundation (CP-1) |
| FCFPROXY-9M2026 | Operating cash flow less purchases of property and equipment, nine months 2026 and 2025 | 2026: 3,001,581 - 127,996 = 2,873,585; 2025: 1,958,714 - 113,838 = 1,844,876 (USD thousand) | USD 2,873,585 thousand against USD 1,844,876 thousand; purchases are 4.26% of operating cash flow against 5.81%; operating cash flow is 53.24% higher | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 8 |
| DOJ-COVER-20260930 | Department of Justice accrual against LTM EBITDA and cash | Accrual 764,000 / reported EBITDA 1,566,955; / adjusted EBITDA 4,336,429; / cash and cash equivalents 7,859,314 (USD thousand) | 48.76% of reported EBITDA; 17.62% of adjusted EBITDA; 9.72% of cash | Financial foundation (CP-1); 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 4, 34 |
| GROSSMARGIN-9M2026 | Gross profit over revenue | Nine months 2026: 9,310,593 / 19,393,893; nine months 2025: 7,487,703 / 17,941,205; FY2025: 10,359,929 / 24,193,683 (USD thousand) | 48.01% in nine months 2026; 41.73% in nine months 2025; 42.82% in FY2025 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5; 10-K_2025-12-31_xyz-20251231.htm.jsonl, page 141 |
| OPINC-9M2026 | Operating income, nine months 2026 against nine months 2025 | 703,371 against 1,223,035 (USD thousand); decline 1,223,035 - 703,371 = 519,664 | -42.49% change, a fall of 42.49% | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| REPAY-2026 | Maturities repaid in cash, 2026 | 2026 senior notes 1,000,000 + 2026 convertible notes 575,000 (USD thousand) | USD 1,575 million repaid; principal outstanding fell from 7,350,000 to 5,775,000 thousand | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27 |
| WALL-2030-2033 | Senior notes principal maturing 2030 to 2033 | 2030 1,200,000 + 2031 1,000,000 + 2032 2,000,000 + 2033 1,000,000 (USD thousand) | USD 5,200 million, 90.04% of notes principal of USD 5,775 million | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 27 |
| WAREHOUSE-DRAWN | Warehouse facilities drawn against drawn plus available | Drawn 1,543,540 / (drawn 1,543,540 + available 809,300) (USD thousand) | 65.60% | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 29–30 |
| GUIDANCE-2026-2027 | Management guidance arithmetic | 2026 gross profit 12,626 against FY2025 10,359.929; 2027 gross profit 14,519 against 12,626; Adjusted Operating Income 3,519 / 12,626 for 2026 and 4,575 / 14,519 for 2027 (USD million) | 2026 gross profit 21.87% above FY2025; 2027 14.99% above 2026; Adjusted Operating Income margin on gross profit 27.87% in 2026 and 31.51% in 2027 | EX-99.1_2026-11-03_q32026shareholderletter.htm.jsonl, page 7 |
| OPMARGIN-9M2026 | Operating income over gross profit | Nine months 2026: 703,371 / 9,310,593; nine months 2025: 1,223,035 / 7,487,703 (USD thousand) | 7.55% in nine months 2026 against 16.33% in nine months 2025 | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| GROWTH-9M2026 | Gross profit and Financial solutions revenue growth, nine months 2026 against nine months 2025 | Gross profit 9,310,593 against 7,487,703; Financial solutions revenue 4,143,982 against 2,954,489 (USD thousand) | Gross profit 24.35% higher; Financial solutions revenue 40.26% higher | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, page 5 |
| INTEREST-OCF | Cash interest and the regulatory accrual against operating cash flow and the cash flow proxy, nine months 2026 | Cash paid for interest 270,946 / operating cash flow 3,001,581; accrual 764,000 / cash flow proxy 2,873,585 (USD thousand) | Cash interest is 9.03% of operating cash flow; the accrual is 26.59% of the proxy | 10-Q_2026-09-30_xyz-20260930.htm.jsonl, pages 8, 34, 40 |

## Gaps

| Gap | What is missing | Why it matters | Effect on this run | Remediation |
| --- | --- | --- | --- | --- |
| Covenant level (material) | The maximum total net leverage level, its definition and the headroom | The revolver is the stated backstop and its availability in a stress cannot be tested | Liquidity and refinancing conclusions assume the facility stays available | Supply the restated credit agreement |
| Department of Justice final terms (material) | Final agreement, court approval, payment schedule and funding source | Sizes and times a cash call of 48.76% of reported EBITDA and any operating conditions | The USD 764 million accrual is used and terms above it are not modelled | Update when the agreement is signed |
| Loss history by cohort (minor) | Origination cohort losses and delinquency roll rates for Cash App Borrow and Afterpay products | Separates growth from deterioration in the retained book | Credit quality is read from reserve ratios and two delinquency dates | Request cohort data from the issuer |
| Peers, prices and agency reports (minor) | Peer figures, traded prices and rating agency reports | Relative strength and market access cannot be judged | The profile is assessed on an absolute basis only | Supply peer and market data |
| Stand-alone parent and bank statements (minor) | Parent-only and Square Financial Services statements and capital ratios | Separates corporate cash from bank and customer-related float and sizes the support obligation | Net cash is read on the consolidated balance sheet | Request bank filings |

## Next module

The orchestrator selects the next module.
