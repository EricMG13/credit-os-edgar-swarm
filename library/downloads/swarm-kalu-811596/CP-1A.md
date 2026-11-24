## Request

Kaiser Aluminum Corp (issuer kalu-811596), as of 2026-11-18, pathway credit snapshot. Scope: business, ownership, governance, transaction and corporate-structure facts from the five supplied filings, covering 2024 to the quarter ended 2026-09-30. No acquisition or sponsor transaction is supplied; the transactions covered are the 2025 refinancing, the revolver amendment and one asset exit.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_kalu-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-20 | c9c8746678d05012bfc0667ab3553957e58e5c19fe3b9bff34ea902f130a1958 | Warrick acquisition date, the warning that certain subsidiaries are not guarantors, the 2024 end-market mix and share count |
| 10-K_2025-12-31_kalu-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-19 | b62b8e5845803734cb3a820beea90aae00900af2adf100f816d48ad030f83019 | Business description, end markets, customers, suppliers, facilities, labor, governance, share count, 2025 refinancing, revolver amendment, exhibits and signatures |
| 10-Q_2026-03-31_kalu-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-23 | e7d286164afff0508ca04c0cff08ac10ced9d7ad3a101045f60563c50628fc2b | Share count and the dividend declared on 2026-04-13 |
| 10-Q_2026-06-30_kalu-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-23 | bca45827b9fe8071fcc99ce881bdeaabdd29be0d8cce3ae913e98a205b3384d8 | Share count and the dividend declared on 2026-07-13 |
| 10-Q_2026-09-30_kalu-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-22 | 80e5590dd545414e0e71be9bd55408e34be7b5fada2836cc7f673cb0e10b658e | Latest end-market mix and conversion revenue, debt, revolver, liquidity, outlook, capital spending plan, dividend declared on 2026-10-13 and share count |

Upstream module outputs supplied to this module:

| Module | sha256 | Use |
|---|---|---|
| Source readiness (CP-0) | 6637bb26bcc1403d3cd5c5dd708e7d71971c23fa4f0755d6b3fb76449d6337f9 | Source set, version relationship between the two annual reports, and the gaps for the proxy statement, guarantors and covenant levels |

## Findings

### Bottom line

Kaiser is a listed, single-segment maker of specialty aluminum mill products with no controlling owner disclosed, so creditors rely on operating cash flow and board discipline, not on sponsor support. The only recent financing transactions were an amount-neutral refinancing of the 2028 notes into notes due 2034 and a revolver extension to October 2030, which pushed maturities out but raised the coupon on the refinanced amount by 1.25 percentage points.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 2, 53, 77; 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 102, 104; calculation CALC-15

Holder-level ownership, board independence and guarantor coverage are not established because the proxy statement and the indentures are not supplied, so the ranking of the notes against subsidiary creditors cannot be assessed here.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 119–120; Source readiness (CP-0)

### Key findings

Conversion revenue is a better gauge of the business than net sales: net sales rose 46.40% in the nine months of 2026 while conversion revenue, the part left after metal cost, rose 17.68%, so most of the growth is metal pass-through that enlarges receivables and inventory rather than margin.
Basis: 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 26, 30; calculation CALC-8

Packaging is the largest line by sales but contributes less to margin than its sales share suggests: it is 45.84% of nine-month 2026 net sales and 39.95% of conversion revenue, while aerospace plate is 24.71% of net sales and 31.00% of conversion revenue.
Basis: 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 26, 30; calculation CALC-3; calculation CALC-6

Customer concentration is the main business risk: the two largest customers took 31% of 2025 net sales and the five largest 56%, and the annual report says losing the largest could have a material adverse effect.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 11, 30, 116; calculation CALC-10

Metal-price neutrality is substantial but incomplete: firm-price sales exposed the company on 11.43% of 2025 shipments by weight, and alloy cost pass-through can lag, so earnings still swing with metal timing.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 16–17; calculation CALC-11

Customer supply chain financing makes cash conversion depend on customers: receivables transferred under customer programs equalled 32% of 2025 net sales and 31% of third-quarter 2026 net sales, and they sit outside reported debt.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 62; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 33; calculation CALC-22

No sponsor or controlling holder appears in the evidence supplied, which lowers event risk from a financial sponsor, though holder concentration is untested: the stock is listed on Nasdaq and a classified board is led by a combined chairman and chief executive.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 2, 47, 53, 122

Distributions are steady and moderate against earnings, but cash cover is not yet proven: operating cash flow covered capital spending plus dividends only 0.59x in 2025, and the 2.23x cover in the nine months of 2026 was helped by a USD 157.2 million build in accounts payable.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 5–6, 32; calculation CALC-17

Creditor access to subsidiary assets is not established: the company is a holding company over wholly owned operating subsidiaries, four of which are revolver borrowers, the notes carry guarantors named only in the indentures, and the warning in the 2024 annual report that certain subsidiaries are not guarantors is absent from later reports.
Basis: 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 42; 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 103, 120; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 14

Labor exposure is concentrated near the as-of date: about 65% of employees are unionized, the Richmond contracts expire in November 2026, and the 2026 quarterly reports are silent on the earlier 2026 renewals, while the Trentwood and Newark contracts run to September 2030.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 21, 39; calculation CALC-13

Warrick, the largest plant by floor area, is a single point of dependence: it is the dedicated packaging site and relies on Alcoa for essential resources such as potable water, under agreements whose terms are not supplied.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 9, 33, 52

### Contrary evidence and what would change the view

The strongest evidence against a benign ownership and event-risk reading is what the filings leave out: holder-level ownership, the party to a director designation agreement that appears in the exhibit lists with dates of 2021 and April 2025, and the guarantor list. A holder with board designation rights, or a large holder pressing for distributions, would raise event risk, and a debt-funded buyback or acquisition would change the view; the USD 93.1 million repurchase authorization has been unused since March 2020 but remains available.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 53, 65, 122; 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 130

The strongest operating counterpoint is that the 2026 recovery is real but partly metal-driven: shipments rose 7.94% and conversion revenue per pound rose, yet net sales grew far faster than conversion revenue, so a fall in metal prices would reverse part of the working capital build. Loss of one of the two largest customers, which hold 31% of net sales, or a stoppage at Richmond or another plant would also weaken the view. Confirmation would come from a proxy statement showing dispersed holders, indentures showing that all material operating subsidiaries guarantee the notes, and renewal of the Richmond contracts without disruption.
Basis: 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 26, 30; calculation CALC-8; calculation CALC-10

### Limitations

- The no-sponsor reading rests on cover-page share counts and the number of record holders; beneficial-owner percentages, director independence and related-party dealings sit in a proxy statement that is not supplied, so a single large holder would overturn it.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 2, 119

- The statement that creditors may rank behind subsidiary creditors rests on one risk-factor paragraph in the 2024 annual report, because the guarantor lists are named only in documents not supplied; full guarantee coverage would remove this concern.
Basis: 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 42; 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 120

- Customer shares are as printed for 2025 only; contract terms, expiry dates and customer names are not supplied, so the concentration conclusion cannot say how soon revenue is at risk.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 30, 116

- Labor conclusions stop at the contract expiry dates printed at 2025-12-31; renewal outcomes in 2026 are not stated, so the Richmond expiry in November 2026 is shown as unresolved.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21

- The dividend declared on 2026-10-13 is shown as scheduled for 2026-11-13 because no filing after 2026-10-22 is supplied, so distributions after the latest report are not confirmed.
Basis: 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 21

### Company and operating model

| Driver | What the filings state | Credit relevance | Source |
|---|---|---|---|
| Products and end markets | One operating segment selling flat-rolled, extruded and drawn aluminum mill products into four end markets: Aero/HS Products, Packaging, GE Products and Automotive Extrusions | Revenue spreads over aerospace, packaging, general engineering and automotive demand, with packaging the largest by sales | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 6, 77 |
| Pricing model | Prices intended to lock in a conversion margin and pass aluminum and certain alloy costs to customers through spot, index-based and firm-price mechanisms | Conversion revenue, not net sales, measures what the business earns; firm-price sales leave metal risk that is hedged with third parties | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 16–17 |
| Customers | About 70% of shipments go directly to manufacturers or tier one suppliers and about 30% to metal service centers; largest customer 16% of 2025 net sales; five largest customers 56% | Concentrated revenue: the loss of one large customer would be material | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 11, 30 |
| Raw materials | Primary aluminum and scrap bought from third parties; top five primary aluminum suppliers supplied 82% of 2025 primary aluminum pounds and the largest supplier 24% | Supply is concentrated in a few vendors, which raises availability and premium risk | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 15, 116 |
| Production base | 13 principal production facilities with 10,384,000 square feet; Warrick, a dedicated packaging site, is the largest at 3,943,000 square feet; 729,000 square feet are leased | Mostly owned plants, with output concentrated at Warrick, Trentwood and Newark, the three largest sites | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 52 |
| Workforce | 3,840 employees at 2025-12-31; about 65% under labor contracts; 26% of those covered by contracts expiring within one year | Contract renewals recur across plants; a stoppage would interrupt shipments | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 18, 116 |
| Seasonality | Packaging shipments weighted to the second half of the year; aerospace, general engineering and automotive shipments weighted slightly to the first half | Quarterly cash flow is smoothed across end markets, with planned major maintenance in low-demand periods | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 17 |
| Capacity programs | Trentwood Phase VII expansion and a fourth coating line at Warrick; capital spending USD 180.8 million in 2024 and USD 136.9 million in 2025; 2026 plan of approximately USD 130.0 million | Capacity has been added at Trentwood and Warrick and the Warrick coating line is still ramping, so capital spending is falling while volume rises | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 64; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 34 |
| Working-capital financing | Receivables transferred under customer-based supply chain financing programs equal about 32% of 2025 net sales and 31% of third-quarter 2026 net sales; costs are typically reimbursed by the customer | Cash conversion depends on customer programs that are outside reported debt | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 62; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 33 |
| Utilities at Warrick | Alcoa Corporation supplies resources such as potable water to Warrick; the agreements' terms are not in the supplied pages | A failure by the supplier could shut the largest plant | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 33 |

### Company profile

| Item | Detail | Source |
|---|---|---|
| Legal name and form | Kaiser Aluminum Corporation, a Delaware corporation; commission file number 1-09447 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 1, 6 |
| Headquarters | Franklin, Tennessee, United States | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 1 |
| Listing | Common stock, par value USD 0.01, trading as KALU on the Nasdaq Global Select Market | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 1, 53 |
| Business | Manufactures and sells semi-fabricated specialty aluminum mill products: flat-rolled (plate, sheet and coil), extruded (rod, bar, hollows and shapes), drawn and certain cast products | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 6 |
| Reporting structure | One operating segment; chief operating decision maker evaluates the business on net income | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 77, 114 |
| Fiscal year end | December 31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 1 |
| Employees | 3,840 at 2025-12-31, of which about 3,760 in manufacturing, sales and support offices and about 80 in a corporate capacity | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 18 |
| Shares outstanding | 16,349,886 at 2026-10-19 | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 1 |
| Holders of record | About 462 at 2026-02-16 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 53 |
| Market value held by non-affiliates | About USD 1.3 billion at 2025-06-30 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 2 |
| Chairman, President and Chief Executive Officer | Keith A. Harvey | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 |
| Executive Vice President and Chief Financial Officer | Neal E. West | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 122–123 |
| Independent auditor | Deloitte & Touche LLP, Nashville, Tennessee; auditor since 2002 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 73 |
| Subsidiaries named in the filings | Kaiser Aluminum Investments Company; Kaiser Aluminum Fabricated Products, LLC; Kaiser Aluminum Washington, LLC; Kaiser Aluminum Warrick, LLC (revolver borrowers); Imperial Machine & Tool Co. (IMT); the full list of significant subsidiaries is not in the supplied pages | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 13, 103, 122 |
| Credit ratings | Not supplied: no rating is stated in the supplied filings or the run settings; the filings mention ratings only as a repurchase trigger and for hedging counterparties | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 100, 102 |

### Transaction summary and new debt issues

Kaiser's only financing transactions in the period were completed in the fourth quarter of 2025. In November 2025 it issued USD 500.0 million of unsecured senior notes due 2034-03-01 at par and redeemed in full the USD 500.0 million of unsecured notes due March 2028 at 100% of principal, funded by the new notes, cash on hand and revolver borrowings; USD 2.1 million of unamortized issuance costs on the old notes was written off. The new notes carry a coupon 1.25 percentage points above the old notes, which adds USD 6.25 million of annual interest on the same amount, and the maturity moves out by 6 years. The company may be required to offer to repurchase the new notes on certain asset sales or on a change of control accompanied by a ratings decline.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 3, 102–103; calculation CALC-15

In October 2025 the asset-based revolver was amended to mature in October 2030 with a maximum commitment of USD 575.0 million, of which up to USD 50.0 million may be used for letters of credit, and an accordion of USD 200.0 million plus a first-in last-out tranche. The amount that can be borrowed is set by eligible receivables, inventory and certain other assets, which secure the revolver. In the nine months of 2026 the company borrowed USD 397.8 million and repaid USD 420.1 million, including the USD 22.3 million drawn at 2025-12-31, and no borrowings were outstanding at 2026-09-30 or 2026-10-19; total liquidity was USD 687.2 million at 2026-09-30. Senior notes principal is USD 1,050.0 million, made up of the 4.50% notes due June 2031 and the notes due 2034.
Basis: 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 14, 31–32; calculation CALC-16

No acquisition, sponsor transaction or business combination is described as occurring in 2024, 2025 or 2026 in the five filings; the filings refer to two earlier acquisitions, Warrick, which closed on 2021-03-31, and Imperial Machine & Tool Co., whose date is not stated. The Sherman, Texas extrusion facility, which was being exited from the second quarter of 2024, was sold in the fourth quarter of 2025 at a charge of USD 7.5 million; sale proceeds are not stated. Quarterly dividends of USD 0.77 per share, about USD 12.8 million each, were declared on 2026-04-13, 2026-07-13 and 2026-10-13, with the last expected to be paid on or about 2026-11-13; payment is not confirmed in any supplied filing.
Basis: 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 118; 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 88, 108; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 21

### Events: Issuer history

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2006-07-06 | day | 2026-02-19 | Reference date for legacy environmental contingencies | Historical — legacy contingencies relate to activities before this date | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 105 | Legacy environmental accruals of USD 17.9 million at 2025-12-31 remain with the issuer. |
| 2007-Q2 | quarter | 2026-10-22 | Quarterly cash dividend series began | Historical — consistently paid since the second quarter of 2007 | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 34 | A long dividend record sets shareholder expectations that compete with debt reduction. |
| 2018-09 | month | 2026-02-19 | Board authorized repurchases of up to USD 100.0 million of common stock | Historical — no expiration date; USD 93.1 million remained at 2025-12-31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 53 | An unused authorization could be drawn on if the board chose to return cash. |
| 2019-10 | month | 2026-02-19 | Revolving Credit Facility entered into (credit agreement dated 2019-10-30) | Historical — entered into in October 2019 and since amended | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 103, 120 | The asset-based revolver is the secured liquidity source. |
| 2019-11 | month | 2026-02-19 | USD 500.0 million 4.625% senior notes due March 2028 issued | Historical — redeemed in full on 2025-11-06 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 103 | Replaced in 2025 by notes due 2034. |
| 2020-03 | month | 2026-02-19 | Share repurchases suspended | Historical — suspended as of March 2020 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 65 | No buyback has competed with debt service since then. |
| 2021-03-31 | day | 2025-02-20 | Warrick rolling mill acquired from Alcoa Corporation | Historical — acquisition completed on 2021-03-31 | 10-K_2024-12-31_kalu-20241231.htm.jsonl, pages 118, 128 | Warrick is the dedicated packaging site and still relies on Alcoa for essential resources. |
| 2021-05 | month | 2026-02-19 | USD 550.0 million 4.50% senior notes due June 2031 issued | Historical — outstanding at 2026-09-30 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 103 | Earliest maturity of the senior notes. |
| 2021-09-03 | day | 2025-02-20 | Amended and Restated Director Designation Agreement dated 2021-09-03 listed in the exhibit index | Historical — listed as a management contract or compensatory arrangement; counterparty and terms not stated in the supplied pages | 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 130 | Shows the board designation arrangement predates 2025; the party is not identified. |
| 2024-Q2 | quarter | 2026-02-19 | Plan to exit the Sherman, Texas soft alloy extrusion facility started, with a charge of USD 7.5 million | Historical — initiated in the quarter ended 2024-06-30 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 108 | Exit cost included a USD 4.6 million multiemployer pension obligation due in 2027. |
| 2024-09-25 | day | 2026-02-19 | Amendment No. 4 to the revolver credit agreement | Historical — dated 2024-09-25 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 121 | Fourth of five amendments to the revolver. |
| 2025 | year | 2026-02-19 | All remaining assets from the Warrick acquisition conveyed and placed in service | Historical — conveyed during the year ended 2025-12-31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 88 | Ends the staged transfer of Warrick assets. |
| 2025-04-23 | day | 2026-02-19 | Amended and Restated Director Designation Agreement dated 2025-04-23 listed in the exhibit index | Historical — listed as a management contract or compensatory arrangement; counterparty and terms not stated in the supplied pages | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 | A board designation right could give one party influence over the board; the exhibit marking points to management rather than an outside holder, but the party is not identified. |
| 2025-10 | month | 2026-02-19 | Amendment No. 5 to the Revolving Credit Facility: maturity October 2030, commitment USD 575.0 million | Historical — entered into in October 2025 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 104 | Extends the secured liquidity source by about five years. |
| 2025-Q4 | quarter | 2026-02-19 | Sherman, Texas facility sold | Historical — sold in the fourth quarter of 2025 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 108 | Completes the exit; sale proceeds are not separately stated. |
| 2025-11 | month | 2026-02-19 | USD 500.0 million 5.875% senior notes due 2034-03-01 issued at par | Historical — issued in November 2025; indenture dated November 5, 2025 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 102, 120 | Raises the coupon on the refinanced amount by 1.25 percentage points and extends maturity to 2034. |
| 2025-11-06 | day | 2026-02-19 | 4.625% senior notes due 2028 redeemed in full at 100% of principal | Historical — redeemed in full on November 6, 2025, funded by the new notes, cash and revolver borrowings | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 3 | Removes the 2028 maturity; revolver borrowings of USD 22.3 million remained at 2025-12-31. |
| 2026-01-07 | day | 2026-02-19 | Transition letter between the company and Blain A. Tiffany filed with an 8-K | Historical — filed as an exhibit; his role and the reason are not stated in the supplied pages | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 | A management transition with unknown scope; no effect on credit terms is stated. |
| 2026-02 | month | 2026-02-19 | Labor contracts at Kalamazoo (USW) and London, Ontario (USW Canada) expire | Scheduled — expiry as printed at 2025-12-31; renewal not stated in the 2026 quarterly reports | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 | Two plants face renewal in the first quarter of 2026. |
| 2026-03 | month | 2026-02-19 | Labor contract at Florence, Alabama (USW) expires | Scheduled — expiry as printed at 2025-12-31; renewal not stated in the 2026 quarterly reports | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 | Renewal outcome is not stated. |
| 2026-04 | month | 2026-02-19 | Labor contract at Los Angeles, California (Teamsters) expires | Scheduled — expiry as printed at 2025-12-31; renewal not stated in the 2026 quarterly reports | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 | Renewal outcome is not stated. |
| 2026-04-13 | day | 2026-04-23 | Quarterly dividend of USD 0.77 per share declared, about USD 12.8 million | Historical — declared on 2026-04-13 | 10-Q_2026-03-31_kalu-20260331.htm.jsonl, page 18 | Recurring distribution of about USD 12.8 million a quarter. |
| 2026-Q3 | quarter | 2026-10-22 | Impairment of USD 0.5 million on the Imperial Machine & Tool Co. trade name | Historical — recorded in the quarter ended 2026-09-30 | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 28 | Small non-cash charge; the trade name is no longer used. |
| 2026-07-13 | day | 2026-07-23 | Quarterly dividend of USD 0.77 per share declared, about USD 12.8 million | Historical — declared on 2026-07-13 | 10-Q_2026-06-30_kalu-20260630.htm.jsonl, page 21 | Recurring distribution of about USD 12.8 million a quarter. |
| 2026-10-13 | day | 2026-10-22 | Quarterly dividend of USD 0.77 per share declared, about USD 12.8 million, record date 2026-10-23 | Historical — declared on 2026-10-13 | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 21 | Third declaration of 2026 at the same rate. |
| 2026-11 | month | 2026-02-19 | Labor contracts at Richmond, Virginia (USW and IAM) expire | Scheduled — expiry as printed at 2025-12-31; renewal not stated in the supplied filings | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 | Falls in the month of the as-of date; outcome not established. |
| 2026-11-13 | day | 2026-10-22 | Payment of the declared dividend of about USD 12.8 million | Scheduled — expected on or about November 13, 2026; payment not confirmed in any supplied filing | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 21 | Cash outflow of about USD 12.8 million. |
| 2027 | year | 2026-02-19 | Partial withdrawal liability of about USD 4.6 million expected to be paid for the Sherman exit | Scheduled — expected in 2027 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 63 | Small cash call tied to the Sherman exit. |
| 2027-05 | month | 2026-02-19 | Labor contract at Warrick (USW) expires | Scheduled — expiry as printed at 2025-12-31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 | Warrick is the dedicated packaging site. |
| 2028-04 | month | 2026-02-19 | Labor contract at Chandler, Arizona tube (USW) expires | Scheduled — expiry as printed at 2025-12-31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 | Small plant. |
| 2030-09 | month | 2026-02-19 | Labor contracts at Newark and Trentwood (USW) expire | Scheduled — expiry as printed at 2025-12-31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 | The two largest plants have contracts running to 2030. |
| 2030-10 | month | 2026-02-19 | Revolving Credit Facility matures | Scheduled — maturity October 2030 as amended | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 104 | Maturity of the secured liquidity source. |
| 2031-06 | month | 2026-02-19 | USD 550.0 million 4.50% senior notes mature | Scheduled — maturity June 2031 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 103 | First senior note maturity. |
| 2034-03-01 | day | 2026-02-19 | USD 500.0 million 5.875% senior notes mature | Scheduled — maturity March 1, 2034 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 102 | Second senior note maturity. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 52 |
| Calculated | 16 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 3 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 6 |
| Fields present | 19 |
| Fields total | 20 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 8 |

### Map: ownership and control

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Public stockholders | hold the listed common stock | Ownership | Kaiser Aluminum Corporation | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 53 |
| Board of Directors | governs; three staggered classes | Legal control | Kaiser Aluminum Corporation | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 47 |
| Keith A. Harvey | chairs the board and leads management | Other stated | Kaiser Aluminum Corporation | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 |
| Kaiser Aluminum Corporation | owns, wholly | Ownership | Kaiser Aluminum Investments Company | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 103 |
| Kaiser Aluminum Corporation | owns, wholly | Ownership | Kaiser Aluminum Fabricated Products, LLC | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 103 |
| Kaiser Aluminum Corporation | owns, wholly | Ownership | Kaiser Aluminum Washington, LLC | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 103 |
| Kaiser Aluminum Corporation | owns, wholly | Ownership | Kaiser Aluminum Warrick, LLC | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 103 |
| Kaiser Aluminum Corporation | owns subsidiary; percentage not stated | Ownership | Imperial Machine & Tool Co. | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 13 |
| Kaiser Aluminum Corporation | is the borrower, with four subsidiaries | Other stated | Revolving Credit Facility | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 14 |
| Kaiser Aluminum Investments Company | joins as co-borrower | Other stated | Revolving Credit Facility | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 14 |
| Kaiser Aluminum Fabricated Products, LLC | joins as co-borrower | Other stated | Revolving Credit Facility | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 14 |
| Kaiser Aluminum Washington, LLC | joins as co-borrower | Other stated | Revolving Credit Facility | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 14 |
| Kaiser Aluminum Warrick, LLC | joins as co-borrower | Other stated | Revolving Credit Facility | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 14 |
| Kaiser Aluminum Corporation | issues the notes, unsecured | Other stated | Senior notes (4.50% and 5.875%) | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 14 |
| Subsidiary guarantors, names not supplied | guarantee the senior notes | Guarantee | Senior notes (4.50% and 5.875%) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 120 |
| Warrick Real Estate LLC | leases the Warrick mill land; term to 2081 | Other stated | Kaiser Aluminum Warrick, LLC | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 52, 122 |
| Party to the director designation agreement | designation terms not supplied | Other stated | Board of Directors | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 |

### Map: operating model to credit

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Metal pass-through pricing | limits exposure to aluminum price | Documentary Fact | Conversion margin stability | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 16 |
| Firm-price sales, 11.43% of 2025 volume | leave metal risk to hedge | Documentary Fact | Hedge cost and counterparty exposure | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 16 |
| Five largest customers, 56% of sales | concentrate revenue in few contracts | Documentary Fact | Earnings loss if one contract is lost | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 30 |
| Customer supply chain finance, 32% of sales | pulls receipts forward | Documentary Fact | Cash conversion tied to customer programs | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 62 |
| Net sales up 46.40%, conversion revenue 17.68% | show most growth is metal cost | Analyst Interpretation | Working capital build, not margin | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 26, 30 |
| Trentwood Phase VII, Warrick coating line | added capacity; 2025 outage costs | Documentary Fact | 2026 volume and mix recovery | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 56, 59 |
| Capital spending falling to USD 130.0 million | frees cash as programs end | Documentary Fact | Capacity to service debt and dividends | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 34 |
| Unionized workforce, about 65% | exposes plants to renewals | Documentary Fact | Stoppage or wage risk; Richmond in Nov 2026 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 |
| Alcoa-supplied water at Warrick | single-source dependency | Documentary Fact | Warrick output, the dedicated packaging site | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 33 |
| Management says it earns premium pricing | claims premium pricing and barriers | Management Language | Pricing power, not quantified | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 6 |
| Customer qualification requirements | may slow customer switching | Analyst Interpretation | Revenue durability support | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 12 |
| Guarantor list and covenant levels | are not in the supplied filings | Insufficient Information | Structural ranking of the senior notes | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 39, 120 |

### transaction_summary - Register

| Transaction | Status | Credit relevance | Source |
|---|---|---|---|
| Issued USD 500.0 million of 5.875% unsecured senior notes due 2034-03-01 at par, interest paid semi-annually on March 1 and September 1 | Completed in November 2025 | Refinances the 2028 notes; extends maturity and raises the coupon by 1.25 percentage points, which adds USD 6.25 million of annual interest on the amount | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 102; calculation CALC-15 |
| Redeemed in full USD 500.0 million of 4.625% unsecured senior notes due March 2028 at 100% of principal plus accrued interest; USD 2.1 million of unamortized issuance costs written off | Completed on 2025-11-06 | Removes the earliest senior maturity; funded by the new notes, cash on hand and revolver borrowings | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 3, 102 |
| Amendment No. 5 to the asset-based Revolving Credit Facility: maturity October 2030, maximum commitment USD 575.0 million of which up to USD 50.0 million may be used for letters of credit, accordion of USD 200.0 million plus a first-in last-out tranche | Completed in October 2025 | Secured liquidity runs five years; borrowing is limited by a base of eligible receivables, inventory and other assets | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 104 |
| Revolver activity: USD 397.8 million borrowed and USD 420.1 million repaid in nine months 2026, including the USD 22.3 million outstanding at 2025-12-31; no borrowings outstanding at 2026-09-30 or 2026-10-19 | Completed | Revolver was undrawn at the latest date; total liquidity USD 687.2 million at 2026-09-30 | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 31–32 |
| Exit and sale of the Sherman, Texas soft alloy extrusion facility; charge of USD 7.5 million including a USD 4.6 million multiemployer pension obligation expected to be paid in 2027 | Plan started in Q2 2024; facility sold in Q4 2025 | Small, completed disposal; sale proceeds are not separately stated | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 63, 108 |
| Quarterly cash dividend of USD 0.77 per share, about USD 12.8 million each, declared 2026-04-13, 2026-07-13 and 2026-10-13 | Declared; the October dividend is expected to be paid on or about 2026-11-13 and payment is not confirmed in the supplied filings | Recurring distribution; USD 39.2 million of dividends paid in nine months 2026 | 10-Q_2026-03-31_kalu-20260331.htm.jsonl, page 18; 10-Q_2026-06-30_kalu-20260630.htm.jsonl, page 21; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 21 |
| Impairment of USD 0.5 million on the Imperial Machine & Tool Co. trade name | Recorded in Q3 2026 | Non-cash and small | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 28 |
| Acquisition, sponsor transaction or business combination | Not supplied: none is described as occurring in 2024, 2025 or 2026; the filings refer to two earlier acquisitions, Warrick on 2021-03-31 and Imperial Machine & Tool Co. on a date that is not stated | No transaction-funded leverage to analyse | 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 118; 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 88 |

### company_description - Register

| Issuer | Business description | Country | Sector |
|---|---|---|---|
| Kaiser Aluminum Corporation | Manufactures and sells semi-fabricated specialty aluminum mill products (flat-rolled, extruded, drawn and certain cast products) for aerospace and high-strength, packaging, general engineering and automotive end markets, from 13 production facilities, through one operating segment | United States (Delaware corporation, headquarters in Franklin, Tennessee; one plant in London, Ontario, Canada) | Semi-fabricated aluminum mill products (metals manufacturing) |

### revenue_business_mix - Register

| Business line | Revenue mix | Period | Status | Limitation |
|---|---|---|---|---|
| Aero/HS Products | Net sales USD 837.8 million (24.84%); conversion revenue USD 456.6 million (31.42%) | FY2025 (year to 2025-12-31) | Directly Sourced amounts; shares Calculated (CALC-1, CALC-5) | Net sales are as printed in the 2025 annual report; GE Products includes Other Products from 2025 |
| Packaging | Net sales USD 1,489.6 million (44.16%); conversion revenue USD 543.6 million (37.41%) | FY2025 (year to 2025-12-31) | Directly Sourced amounts; shares Calculated (CALC-1, CALC-5) | Net sales are as printed in the 2025 annual report; GE Products includes Other Products from 2025 |
| GE Products | Net sales USD 759.2 million (22.51%); conversion revenue USD 330.8 million (22.76%) | FY2025 (year to 2025-12-31) | Directly Sourced amounts; shares Calculated (CALC-1, CALC-5) | Net sales are as printed in the 2025 annual report; GE Products includes Other Products from 2025 |
| Automotive Extrusions | Net sales USD 286.4 million (8.49%); conversion revenue USD 122.2 million (8.41%) | FY2025 (year to 2025-12-31) | Directly Sourced amounts; shares Calculated (CALC-1, CALC-5) | Net sales are as printed in the 2025 annual report; GE Products includes Other Products from 2025 |
| Total | Net sales USD 3,373.0 million; conversion revenue USD 1,453.2 million (43.08% of net sales, CALC-7); shipments 1,108.2 million pounds | FY2025 (year to 2025-12-31) | Directly Sourced amounts; shares Calculated (CALC-1, CALC-5) | Net sales are as printed in the 2025 annual report; GE Products includes Other Products from 2025 |
| Aero/HS Products | Net sales USD 883.0 million (29.20%); conversion revenue USD 529.5 million (36.36%) | FY2024 (year to 2024-12-31) | Directly Sourced amounts; shares Calculated (CALC-2, CALC-23) | Net sales as shown in the 2025 annual report; Other Products shown separately for 2024 |
| Packaging | Net sales USD 1,260.9 million (41.70%); conversion revenue USD 490.0 million (33.65%) | FY2024 (year to 2024-12-31) | Directly Sourced amounts; shares Calculated (CALC-2, CALC-23) | Net sales as shown in the 2025 annual report; Other Products shown separately for 2024 |
| GE Products | Net sales USD 618.1 million (20.44%); conversion revenue USD 312.8 million (21.48%) | FY2024 (year to 2024-12-31) | Directly Sourced amounts; shares Calculated (CALC-2, CALC-23) | Net sales as shown in the 2025 annual report; Other Products shown separately for 2024 |
| Automotive Extrusions | Net sales USD 251.9 million (8.33%); conversion revenue USD 119.7 million (8.22%) | FY2024 (year to 2024-12-31) | Directly Sourced amounts; shares Calculated (CALC-2, CALC-23) | Net sales as shown in the 2025 annual report; Other Products shown separately for 2024 |
| Other Products | Net sales USD 10.1 million (0.33%); conversion revenue USD 4.2 million (0.29%) | FY2024 (year to 2024-12-31) | Directly Sourced amounts; shares Calculated (CALC-2, CALC-23) | Net sales as shown in the 2025 annual report; Other Products shown separately for 2024 |
| Total | Net sales USD 3,024.0 million; conversion revenue USD 1,456.2 million (48.15% of net sales, CALC-7); shipments 1,172.3 million pounds | FY2024 (year to 2024-12-31) | Directly Sourced amounts; shares Calculated (CALC-2, CALC-23) | Net sales as shown in the 2025 annual report; Other Products shown separately for 2024 |
| Aero/HS Products | Net sales USD 884.0 million (24.71%); conversion revenue USD 397.0 million (31.00%) | 9M 2026 (nine months to 2026-09-30) | Directly Sourced amounts; shares Calculated (CALC-3, CALC-6) | Unaudited quarterly report; nine-month conversion revenue is as printed |
| Packaging | Net sales USD 1,640.2 million (45.84%); conversion revenue USD 511.5 million (39.95%) | 9M 2026 (nine months to 2026-09-30) | Directly Sourced amounts; shares Calculated (CALC-3, CALC-6) | Unaudited quarterly report; nine-month conversion revenue is as printed |
| GE Products | Net sales USD 799.3 million (22.34%); conversion revenue USD 281.9 million (22.01%) | 9M 2026 (nine months to 2026-09-30) | Directly Sourced amounts; shares Calculated (CALC-3, CALC-6) | Unaudited quarterly report; nine-month conversion revenue is as printed |
| Automotive Extrusions | Net sales USD 254.4 million (7.11%); conversion revenue USD 90.1 million (7.04%) | 9M 2026 (nine months to 2026-09-30) | Directly Sourced amounts; shares Calculated (CALC-3, CALC-6) | Unaudited quarterly report; nine-month conversion revenue is as printed |
| Total | Net sales USD 3,577.9 million; conversion revenue USD 1,280.5 million (35.79% of net sales, CALC-7); shipments 900.4 million pounds | 9M 2026 (nine months to 2026-09-30) | Directly Sourced amounts; shares Calculated (CALC-3, CALC-6) | Unaudited quarterly report; nine-month conversion revenue is as printed |
| Aero/HS Products | Net sales USD 624.8 million (25.56%); conversion revenue USD 347.2 million | 9M 2025 (nine months to 2025-09-30) | Directly Sourced amounts; shares Calculated (CALC-4) | Unaudited comparative as printed in the 2026 quarterly report; inventory basis not stated |
| Packaging | Net sales USD 1,049.0 million (42.92%); conversion revenue USD 394.9 million | 9M 2025 (nine months to 2025-09-30) | Directly Sourced amounts; shares Calculated (CALC-4) | Unaudited comparative as printed in the 2026 quarterly report; inventory basis not stated |
| GE Products | Net sales USD 559.2 million (22.88%); conversion revenue USD 251.1 million | 9M 2025 (nine months to 2025-09-30) | Directly Sourced amounts; shares Calculated (CALC-4) | Unaudited comparative as printed in the 2026 quarterly report; inventory basis not stated |
| Automotive Extrusions | Net sales USD 211.0 million (8.63%); conversion revenue USD 94.9 million | 9M 2025 (nine months to 2025-09-30) | Directly Sourced amounts; shares Calculated (CALC-4) | Unaudited comparative as printed in the 2026 quarterly report; inventory basis not stated |
| Total | Net sales USD 2,444.0 million; conversion revenue USD 1,088.1 million (44.52% of net sales, CALC-7); shipments 834.2 million pounds | 9M 2025 (nine months to 2025-09-30) | Directly Sourced amounts; shares Calculated (CALC-4) | Unaudited comparative as printed in the 2026 quarterly report; inventory basis not stated |

### ownership_register - Register

| Owner / class | Control | Economic interest | Credit relevance | Source |
|---|---|---|---|---|
| Public holders of common stock | Vote the common stock; no controlling holder is stated in the supplied pages | 16,349,886 shares outstanding at 2026-10-19; about 462 holders of record at 2026-02-16; individual holdings not supplied | No sponsor is named, so neither sponsor support nor sponsor extraction is stated; holder concentration cannot be tested without the proxy statement | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 2, 53; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 1 |
| Directors and executive officers | The signature page names the Chairman, President and Chief Executive Officer and nine other directors; beneficial ownership is in the proxy statement, which is not supplied | Not supplied: beneficial ownership is in a proxy statement that is not in the sources | Insider alignment cannot be assessed | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 119, 122–123 |
| Party to the Amended and Restated Director Designation Agreement dated 2025-04-23 (a version dated 2021-09-03 is listed in the 2024 annual report) | A board designation right is implied by the agreement title; its terms are not supplied | Not supplied: counterparty and holding not stated | Filed as a management contract or compensatory arrangement, which points to an executive rather than an outside holder (analyst inference); unresolved | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122; 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 130 |
| Holders of non-vested shares, restricted stock units and performance shares | Non-vested shares go to non-employee directors and restricted stock units to executive officers and key employees; each vested unit gives one new common share | 406,268 non-vested shares and restricted stock units outstanding at 2025-12-31 and 452,688 shares available for awards; dividend equivalents are paid on restricted stock units and performance shares receive a one-time payment on vesting | Equity awards add small dilution: shares outstanding rose 1.55% from 2025-02-17 to 2026-10-19 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 97; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 34; calculation CALC-14 |
| Wholly owned operating subsidiaries | Kaiser Aluminum Corporation owns them and is the borrower with four of them under the revolver | 100% ownership of the four named revolver borrowers as stated; ownership of other subsidiaries not stated | Creditor claims rest on a holding company over operating subsidiaries; guarantee coverage not established | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 77, 103 |

### operating_model - Register

| Operating driver | Measure | Period | Status | Credit relevance |
|---|---|---|---|---|
| Shipment volume | 1,108.2 million pounds in 2025 against 1,172.3 million in 2024; 900.4 million pounds in nine months 2026 against 834.2 million | FY2025 and nine months to 2026-09-30 | Directly Sourced | Volume fell 5% in 2025 on the Trentwood outage, aerospace plate destocking and a delayed coating line ramp, then rose 7.94% in nine months 2026 |
| Realized price per pound | USD 3.04 in 2025 against USD 2.58 in 2024; USD 3.97 in nine months 2026 against USD 2.93 | FY2025 and nine months to 2026-09-30 | Directly Sourced | Mostly metal pass-through; hedged cost of alloyed metal rose 69.44% in nine months 2026 |
| Conversion revenue per pound | USD 1.31 in 2025 against USD 1.24 in 2024; USD 1.42 in nine months 2026 against USD 1.30 | FY2025 and nine months to 2026-09-30 | Directly Sourced | The earned margin per pound rose far less than price per pound |
| Conversion revenue | USD 1,453.2 million in 2025 against USD 1,456.2 million in 2024; USD 1,280.5 million in nine months 2026 against USD 1,088.1 million (17.68% growth) | FY2025 and nine months to 2026-09-30 | Directly Sourced; growth Calculated (CALC-8) | Flat in 2025 despite 12% higher net sales; growth in 2026 comes from volume and a higher conversion revenue per pound |
| Firm-price shipments | 126.7 million pounds in 2025 (11.43% of shipments) against 154.9 million in 2024 (13.21%) | FY2025 and FY2024 | Directly Sourced; shares Calculated (CALC-11) | Falling share of volume that carries firm-price metal risk, which the company hedges with third parties |
| Packaging coated mix | Coated products are about 75% of Packaging shipments in 2025; a fourth coating line at Warrick raises capacity | FY2025 | Directly Sourced | Management describes coated packaging as higher margin; conversion revenue per pound is not split between coated and bare coil |
| Contract mix | Products transferred over time USD 768.9 million (21.49%) of net sales in nine months 2026 against USD 555.9 million (22.75%) | Nine months to 2026-09-30 and 2025-09-30 | Directly Sourced; shares Calculated (CALC-12) | Most revenue is recognised at a point in time, so receivables turn with shipments |
| Customer channel | About 70% of shipments to manufacturers or tier one suppliers; about 30% to metal service centers | At 2025-12-31 | Directly Sourced | GE Products sales to service centers are made order by order, so that channel is the more exposed to destocking and restocking |
| Capital spending | USD 180.8 million in 2024; USD 136.9 million in 2025; USD 72.2 million in nine months 2026; 2026 plan of approximately USD 130.0 million | FY2024, FY2025 and 2026 | Directly Sourced | Spending is falling as the Trentwood and Warrick programs finish |
| Export sales | 7% of 2025 net sales against 10% in 2024 and 10% in 2023 | FY2025 | Directly Sourced | Revenue is mostly North American |
| Seasonality | Packaging weighted to the second half; the other end markets slightly to the first half | Annual pattern | Directly Sourced | The filing says quarterly fluctuations in the overall portfolio are generally immaterial |

### events_timeline - Register

| Date / window | Event | Credit relevance | Status | Source |
|---|---|---|---|---|
| 2006-07-06 | Reference date for legacy environmental contingencies | Legacy environmental accruals of USD 17.9 million at 2025-12-31 remain with the issuer. | Historical — legacy contingencies relate to activities before this date | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 105 |
| 2007-Q2 | Quarterly cash dividend series began | A long dividend record sets shareholder expectations that compete with debt reduction. | Historical — consistently paid since the second quarter of 2007 | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 34 |
| 2018-09 | Board authorized repurchases of up to USD 100.0 million of common stock | An unused authorization could be drawn on if the board chose to return cash. | Historical — no expiration date; USD 93.1 million remained at 2025-12-31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 53 |
| 2019-10 | Revolving Credit Facility entered into (credit agreement dated 2019-10-30) | The asset-based revolver is the secured liquidity source. | Historical — entered into in October 2019 and since amended | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 103, 120 |
| 2019-11 | USD 500.0 million 4.625% senior notes due March 2028 issued | Replaced in 2025 by notes due 2034. | Historical — redeemed in full on 2025-11-06 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 103 |
| 2020-03 | Share repurchases suspended | No buyback has competed with debt service since then. | Historical — suspended as of March 2020 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 65 |
| 2021-03-31 | Warrick rolling mill acquired from Alcoa Corporation | Warrick is the dedicated packaging site and still relies on Alcoa for essential resources. | Historical — acquisition completed on 2021-03-31 | 10-K_2024-12-31_kalu-20241231.htm.jsonl, pages 118, 128 |
| 2021-05 | USD 550.0 million 4.50% senior notes due June 2031 issued | Earliest maturity of the senior notes. | Historical — outstanding at 2026-09-30 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 103 |
| 2021-09-03 | Amended and Restated Director Designation Agreement dated 2021-09-03 listed in the exhibit index | Shows the board designation arrangement predates 2025; the party is not identified. | Historical — listed as a management contract or compensatory arrangement; counterparty and terms not stated in the supplied pages | 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 130 |
| 2024-Q2 | Plan to exit the Sherman, Texas soft alloy extrusion facility started, with a charge of USD 7.5 million | Exit cost included a USD 4.6 million multiemployer pension obligation due in 2027. | Historical — initiated in the quarter ended 2024-06-30 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 108 |
| 2024-09-25 | Amendment No. 4 to the revolver credit agreement | Fourth of five amendments to the revolver. | Historical — dated 2024-09-25 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 121 |
| 2025 | All remaining assets from the Warrick acquisition conveyed and placed in service | Ends the staged transfer of Warrick assets. | Historical — conveyed during the year ended 2025-12-31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 88 |
| 2025-04-23 | Amended and Restated Director Designation Agreement dated 2025-04-23 listed in the exhibit index | A board designation right could give one party influence over the board; the exhibit marking points to management rather than an outside holder, but the party is not identified. | Historical — listed as a management contract or compensatory arrangement; counterparty and terms not stated in the supplied pages | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 |
| 2025-10 | Amendment No. 5 to the Revolving Credit Facility: maturity October 2030, commitment USD 575.0 million | Extends the secured liquidity source by about five years. | Historical — entered into in October 2025 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 104 |
| 2025-Q4 | Sherman, Texas facility sold | Completes the exit; sale proceeds are not separately stated. | Historical — sold in the fourth quarter of 2025 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 108 |
| 2025-11 | USD 500.0 million 5.875% senior notes due 2034-03-01 issued at par | Raises the coupon on the refinanced amount by 1.25 percentage points and extends maturity to 2034. | Historical — issued in November 2025; indenture dated November 5, 2025 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 102, 120 |
| 2025-11-06 | 4.625% senior notes due 2028 redeemed in full at 100% of principal | Removes the 2028 maturity; revolver borrowings of USD 22.3 million remained at 2025-12-31. | Historical — redeemed in full on November 6, 2025, funded by the new notes, cash and revolver borrowings | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 3 |
| 2026-01-07 | Transition letter between the company and Blain A. Tiffany filed with an 8-K | A management transition with unknown scope; no effect on credit terms is stated. | Historical — filed as an exhibit; his role and the reason are not stated in the supplied pages | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 |
| 2026-02 | Labor contracts at Kalamazoo (USW) and London, Ontario (USW Canada) expire | Two plants face renewal in the first quarter of 2026. | Scheduled — expiry as printed at 2025-12-31; renewal not stated in the 2026 quarterly reports | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 |
| 2026-03 | Labor contract at Florence, Alabama (USW) expires | Renewal outcome is not stated. | Scheduled — expiry as printed at 2025-12-31; renewal not stated in the 2026 quarterly reports | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 |
| 2026-04 | Labor contract at Los Angeles, California (Teamsters) expires | Renewal outcome is not stated. | Scheduled — expiry as printed at 2025-12-31; renewal not stated in the 2026 quarterly reports | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 |
| 2026-04-13 | Quarterly dividend of USD 0.77 per share declared, about USD 12.8 million | Recurring distribution of about USD 12.8 million a quarter. | Historical — declared on 2026-04-13 | 10-Q_2026-03-31_kalu-20260331.htm.jsonl, page 18 |
| 2026-Q3 | Impairment of USD 0.5 million on the Imperial Machine & Tool Co. trade name | Small non-cash charge; the trade name is no longer used. | Historical — recorded in the quarter ended 2026-09-30 | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 28 |
| 2026-07-13 | Quarterly dividend of USD 0.77 per share declared, about USD 12.8 million | Recurring distribution of about USD 12.8 million a quarter. | Historical — declared on 2026-07-13 | 10-Q_2026-06-30_kalu-20260630.htm.jsonl, page 21 |
| 2026-10-13 | Quarterly dividend of USD 0.77 per share declared, about USD 12.8 million, record date 2026-10-23 | Third declaration of 2026 at the same rate. | Historical — declared on 2026-10-13 | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 21 |
| 2026-11 | Labor contracts at Richmond, Virginia (USW and IAM) expire | Falls in the month of the as-of date; outcome not established. | Scheduled — expiry as printed at 2025-12-31; renewal not stated in the supplied filings | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 |
| 2026-11-13 | Payment of the declared dividend of about USD 12.8 million | Cash outflow of about USD 12.8 million. | Scheduled — expected on or about November 13, 2026; payment not confirmed in any supplied filing | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 21 |
| 2027 | Partial withdrawal liability of about USD 4.6 million expected to be paid for the Sherman exit | Small cash call tied to the Sherman exit. | Scheduled — expected in 2027 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 63 |
| 2027-05 | Labor contract at Warrick (USW) expires | Warrick is the dedicated packaging site. | Scheduled — expiry as printed at 2025-12-31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 |
| 2028-04 | Labor contract at Chandler, Arizona tube (USW) expires | Small plant. | Scheduled — expiry as printed at 2025-12-31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 |
| 2030-09 | Labor contracts at Newark and Trentwood (USW) expire | The two largest plants have contracts running to 2030. | Scheduled — expiry as printed at 2025-12-31 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 21 |
| 2030-10 | Revolving Credit Facility matures | Maturity of the secured liquidity source. | Scheduled — maturity October 2030 as amended | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 104 |
| 2031-06 | USD 550.0 million 4.50% senior notes mature | First senior note maturity. | Scheduled — maturity June 2031 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 103 |
| 2034-03-01 | USD 500.0 million 5.875% senior notes mature | Second senior note maturity. | Scheduled — maturity March 1, 2034 | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 102 |

### gaps_ledger - Register

| Gap | Affected analysis | Severity | Action | Status |
|---|---|---|---|---|
| Proxy statement not supplied: holder-level ownership, director independence, committee composition, compensation and related-party dealings | Ownership, governance and creditor alignment | Material | Obtain the 2026 proxy statement | Open |
| Guarantor lists for the senior notes and the revolver, and the list of significant subsidiaries, are not in the supplied pages | Structural ranking and subsidiary access | Material | Obtain the two indentures, the credit agreement and Exhibit 21.1 | Open |
| Counterparty and terms of the Amended and Restated Director Designation Agreement dated 2025-04-23 (a version dated 2021-09-03 is also listed) | Ownership and control | Minor | Obtain the exhibit filed with the 2025-04-24 quarterly report and the 2021-09-07 8-K | Open |
| Outcome of the 2026 labor contract expiries at Kalamazoo, London, Florence and Los Angeles, and the November 2026 Richmond expiry | Operating continuity | Minor | Obtain management's labor disclosures or the next annual report | Open |
| Role of Blain A. Tiffany and the terms of the January 2026 transition letter | Management continuity | Minor | Obtain the 8-K of 2026-01-07 | Open |
| Terms of the Alcoa services and supply agreements at Warrick | Operating dependency | Minor | Obtain the Warrick agreements listed in the exhibit index | Open |
| Confirmation that the dividend declared 2026-10-13 was paid on 2026-11-13 | Distributions after the latest quarter | Minor | Obtain the next quarterly report | Open |
| Proceeds of the Sherman, Texas facility sale are not separately stated | Transaction summary | Minor | Obtain the 2025 fourth-quarter release or the 8-K | Open |
| Date and terms of the Imperial Machine & Tool Co. acquisition | Transaction history | Minor | Obtain the 8-K or annual report of the acquisition year | Open |
| Meaning of the Bellwood facility named in the 2026 quarterly outage discussion against the property table | Operating model | Minor | Obtain management's facility list | Open |

### conflict_log - Register

| Conflict | Sources | Materiality | Resolution | Downstream impact |
|---|---|---|---|---|
| The 2024 annual report states that certain subsidiaries are not guarantors of the notes or the revolver; the 2025 annual report and the 2026 quarterly reports carry no such statement and do not list the guarantors | 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 42; 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 39, 120 | Material | Not resolved: the indentures are not supplied, so guarantor coverage is treated as unknown rather than full | Any structural ranking must not assume every subsidiary guarantees the debt |
| Operating income for 2024 is USD 87.7 million in the 2024 annual report and USD 112.2 million in the 2025 annual report because the inventory method changed from last-in, first-out to weighted average cost | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 116; 10-K_2024-12-31_kalu-20241231.htm.jsonl, pages 59, 78 | Minor for this module | The 2025 annual report controls for 2024; net sales of USD 3,024.0 million and the end-market mix are the same in both reports | None on the business mix; earnings comparisons must use adjusted amounts |
| The 2024 annual report shows Other Products of USD 10.1 million for 2024 as a separate line; from 2025 it is combined with GE Products | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 56 | Minor | 2024 mix shown with Other Products separately, as printed | Mix comparisons for GE Products between 2024 and 2025 are slightly understated for 2024 |
| The property table lists Richmond, Virginia, while the 2026 quarterly outage discussion names a Bellwood facility | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 27 | Minor | Not resolved: no filing says whether they are the same site | Plant concentration shown here may not reflect the named outage site |
| The 2026 capital spending plan is approximately USD 120.0 million to USD 130.0 million in the 2025 annual report and approximately USD 130.0 million in the third-quarter report | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 64; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 34 | Minor | The later statement controls; the plan moved to the top of the earlier range | Capital spending plan for the year is USD 130.0 million |

### T2D.1 - Register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| SRC-1 | 10-K_2024-12-31_kalu-20241231.htm.jsonl | Primary regulatory filing, audited annual report | FY2024 and prior years as first reported | Kaiser Aluminum Corporation and subsidiary companies, consolidated | Business description, end-market mix, risk factors including the non-guarantor warning, share count at 2025-02-17 | FY2024 amounts are on the former inventory method; superseded by the 2025 annual report where they differ | Used here for the Warrick acquisition date, the structure warning and the share count |
| SRC-2 | 10-K_2025-12-31_kalu-20251231.htm.jsonl | Primary regulatory filing, audited annual report | FY2025 with FY2024 and FY2023 as adjusted | Kaiser Aluminum Corporation and subsidiary companies, consolidated | Business, customers, suppliers, facilities, labor, governance, exhibits, debt and revolver terms, signatures | Part III items sit in a proxy statement that is not supplied | Main source for the business, ownership, governance and transaction facts |
| SRC-3 | 10-Q_2026-03-31_kalu-20260331.htm.jsonl | Primary regulatory filing, unaudited interim report | Quarter to 2026-03-31 | Kaiser Aluminum Corporation and subsidiary companies, consolidated | Share count at 2026-04-20 and the dividend declared on 2026-04-13 | Unaudited | Used for the dividend declaration and share count |
| SRC-4 | 10-Q_2026-06-30_kalu-20260630.htm.jsonl | Primary regulatory filing, unaudited interim report | Quarter and half year to 2026-06-30 | Kaiser Aluminum Corporation and subsidiary companies, consolidated | Share count at 2026-07-20 and the dividend declared on 2026-07-13 | Unaudited | Used for the dividend declaration and share count |
| SRC-5 | 10-Q_2026-09-30_kalu-20260930.htm.jsonl | Primary regulatory filing, unaudited interim report | Quarter and nine months to 2026-09-30 | Kaiser Aluminum Corporation and subsidiary companies, consolidated | End-market sales and conversion revenue, debt note, liquidity, outlook, capital plan, subsequent dividend, share count at 2026-10-19 | Latest filing; nothing dated after 2026-10-22 is supplied | Used for the latest operating mix, financing position and dividend |

### T2D.3 - Register

| Governance Topic | Source-Supported Fact | Risk Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Board structure | The certificate of incorporation divides the board into three classes with staggered terms; stockholders cannot call a special meeting; the board can issue preferred stock with set rights without a stockholder vote | Mitigating for creditors against hostile takeovers; adverse if entrenchment limits change | A classified board slows replacement of directors, so a leveraged takeover or an activist push for distributions needs more than one election cycle | Lowers the near-term event risk from an unsolicited bid and from a debt-funded recapitalisation | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 47 | Does not show how often directors have been challenged |
| Chair and chief executive roles | Keith A. Harvey signs the annual report as Chairman, President and Chief Executive Officer | Adverse | A combined role concentrates board agenda control with management | Weakens independent challenge on distributions and leverage unless a lead independent director is in place | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 | Lead independent director and committee composition are in the proxy statement, which is not supplied |
| Director independence and committees | Directors, executive officers, committee membership and director independence are incorporated by reference to the proxy statement for the 2026 annual meeting | Not established | Independence cannot be tested | No view on board oversight of credit policy | Weak Lineage: proxy statement not supplied | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 119 | Proxy statement not supplied |
| Director designation agreement | An Amended and Restated Director Designation Agreement dated 2025-04-23 is listed as a management contract or compensatory arrangement; a version dated 2021-09-03 is listed in the 2024 annual report | Not established | A designation right gives a party a defined seat or seats; the management-contract marking points to an executive rather than an outside holder | Unknown influence on the board; no sponsor is named | Directly Sourced for existence; the executive reading is Analyst Inference | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122; 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 130 | Counterparty and terms not stated |
| Management transition | A transition letter between the company and Blain A. Tiffany was filed with an 8-K on 2026-01-07 | Not established | A departure or role change could affect continuity | No credit effect is stated | Directly Sourced for existence; role not stated | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 | Role and reason not stated |
| Auditor and internal control | Deloitte & Touche LLP has audited the company since 2002 and the annual report states that internal control over financial reporting was effective at 2025-12-31 | Mitigating | Long auditor tenure and effective controls reduce reporting risk | Supports reliance on reported figures | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 73, 118 | Audit report and control conclusion are for 2025; quarterly figures are unaudited |
| Accounting change | The auditor issued a preferability letter dated 2025-04-24 for the change in inventory method from last-in, first-out to weighted average cost | Neutral | The change lifts reported earnings for 2024 and 2023 when applied retrospectively | Comparisons across the two annual reports need adjusted amounts | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 | Letter content is not supplied |
| Incentive design | Performance shares vest on goals that can include total shareholder return against a peer group and Adjusted EBITDA margin as a percentage of conversion revenue; short-term plans include safety modifiers; the pages name no leverage or cash flow measure | Adverse, mildly | Incentives rewarding returns and margin, without a leverage or cash flow measure, give management no direct reward for debt discipline | Limits alignment with creditors on distributions and spending | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 20, 97 | Plan terms and annual targets are in the proxy statement, which is not supplied |
| Pay and trading controls | A compensation clawback policy effective 2023-10-02 is filed; no director or officer adopted or ended a trading plan in the fourth quarter of 2025 | Mitigating | Clawback and trading controls limit incentive misalignment | Small positive for alignment | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 119, 122 | Compensation design is in the proxy statement |

### T2D.4 - Register

| Flag ID | Behavior Type | Documented Action | Behavior Category | Amount / Funding Source | Legal-Capacity Link | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|---|---|---|
| F-1 | Shareholder distribution | Quarterly cash dividend of USD 0.77 per share, paid each quarter since the second quarter of 2007 and declared again on 2026-10-13 | Recurring distribution | USD 51.3 million paid in 2025 and USD 39.2 million in nine months 2026; operating cash flow cover of capital spending plus dividends 0.59x in 2025 and 2.23x in nine months 2026 | Revolver and indenture limits on restricted payments exist but their levels are not supplied; the annual report calls them subject to significant qualifications and exceptions | A fixed distribution competes with debt reduction when cash flow is weak, as in 2025 | Moderate: about 45.60% of 2025 net income and 20.60% of nine-month 2026 net income | Directly Sourced; cover Calculated (CALC-17, CALC-18) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 56, 76; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 21, 34 | 2026 operating cash flow includes a USD 157.2 million payables build |
| F-2 | Share repurchase | Repurchases suspended since March 2020; USD 93.1 million of the 2018 authorization remains | Authorization unused | No cash spent; shares withheld for taxes only (USD 8.9 million in nine months 2026) | Revolver and indenture limits on restricted payments exist but their levels are not supplied; the annual report calls them subject to significant qualifications and exceptions | A buyback funded by revolver borrowings would raise leverage | Low today; watch for use of the authorization | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 53, 65; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 5–6, 35 | Depends on future board decisions |
| F-3 | Liability management | Redeemed USD 500.0 million of 2028 notes with USD 500.0 million of 2034 notes, cash and revolver borrowings | Refinancing | New notes at par plus cash and revolver borrowings; USD 22.3 million still drawn at 2025-12-31 and repaid in 2026 | The annual report calls the indenture covenants customary and does not name them; the company may be required to offer to repurchase the new notes on certain asset sales or on a change of control with a ratings decline | Extends maturity at a higher coupon, pushing out refinancing risk but adding interest cost of USD 6.25 million a year | Positive for liquidity; slightly negative for cash interest | Directly Sourced; interest Calculated (CALC-15) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 102, 104 | Guarantors of the new notes are not supplied |
| F-4 | Asset sale | Exit and sale of the Sherman, Texas soft alloy extrusion plant | Disposal of a small non-core plant | Sale in Q4 2025 with proceeds not separately stated; exit charge USD 7.5 million | No asset-sale covenant issue is stated | Small outflow of USD 4.6 million in 2027 for the pension withdrawal | Neutral | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 63, 108 | Proceeds not stated |
| F-5 | Working-capital financing | Receivables transferred under customer-based supply chain financing programs, about 32% of 2025 net sales and 31% of third-quarter 2026 net sales | Receivable sales outside reported debt | Customers' programs; costs typically reimbursed by the customer | Not a borrowing under the credit documents | Accelerated collections are not debt on the balance sheet but depend on customers keeping programs open | Withdrawal of a program would raise working capital need and revolver use | Directly Sourced; shares as printed (CALC-22) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 62; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 33 | Program sizes and counterparties are not stated |
| F-6 | Governance arrangement | Amended and Restated Director Designation Agreement dated 2025-04-23 filed as a management contract or compensatory arrangement | Board access right | Not applicable: no funding | Not stated | Possible influence of one party over board decisions on distributions | Unknown | Directly Sourced for existence; terms not supplied | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 122 | Counterparty and terms not supplied |

### T2D.5 - Register

| Capital Allocation Item | Source-Supported Fact | Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Capital expenditure | USD 180.8 million in 2024, USD 136.9 million in 2025 and USD 72.2 million in nine months 2026; 2026 plan of approximately USD 130.0 million, which implies about USD 57.8 million in the fourth quarter | Falling then stable | Trentwood Phase VII and the Warrick fourth coating line have added capacity, although the Warrick line is still ramping, so spending shifts toward sustaining and efficiency work | Lower spending raises free cash flow while volume rises; nine-month 2026 operating cash flow exceeded capital spending plus dividends by USD 136.7 million | Directly Sourced; Q4 implied is Calculated (CALC-20) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 64; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 34 | Plan can be changed by management at any time |
| Dividends | USD 51.3 million paid in 2025 and USD 39.2 million in nine months 2026; USD 0.77 per share a quarter, equal to USD 3.08 per share a year | Stable | A flat per-share dividend is covered by net income and by operating cash flow, but together with capital spending it was not covered in 2025 | Operating cash flow covered capital spending plus dividends only 0.59x in 2025 and 2.23x in nine months 2026 | Directly Sourced; ratios Calculated (CALC-17, CALC-18, CALC-21) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 56, 76; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 34 | Nine-month 2026 cover includes a USD 157.2 million payables build |
| Share repurchases | None since March 2020; USD 93.1 million authorization remains | None | No cash has gone to buybacks | Supports debt service capacity | Directly Sourced | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 35 | Authorization could be used |
| Debt | Senior notes principal unchanged at USD 1,050.0 million; revolver borrowings of USD 22.3 million at 2025-12-31 repaid and none at 2026-09-30 | Flat gross debt; revolver repaid | Refinancing replaced a 2028 maturity with a 2034 maturity | No scheduled senior note maturity before June 2031; the revolver matures in October 2030 | Directly Sourced | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 14, 31 | Covenant terms not supplied |
| Acquisitions | None described as occurring in 2024, 2025 or 2026; earlier acquisitions are Warrick (2021-03-31) and Imperial Machine & Tool Co. (date not stated) | None | No acquisition integration or acquisition funding risk is stated | No acquisition-funded leverage | Directly Sourced; absence from the supplied filings | 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 118; 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 88 | Absence is limited to the five filings supplied |
| Pension and retiree plans | Salaried VEBA variable cash contributions of USD 0.7 million in 2025 and USD 2.9 million in nine months 2026; partial multiemployer withdrawal liability of about USD 4.6 million expected in 2027; hourly VEBA administrative fees of USD 0.3 million a year to September 2030 | Small and rising | Retiree obligations are modest cash calls | Minor claim on cash; outside the debt figure | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 63, 76; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 5–6 | Funded status and OPEB size are not summarised here |
| Asset disposals | Proceeds from disposition of property, plant and equipment USD 53.1 million in 2025 against USD 6.0 million in 2024 | Higher in 2025 | Disposal proceeds helped fund 2025 spending | One-off support to 2025 cash | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 76 | The Sherman sale share of proceeds is not stated |

### T2D.9 - Register

| Risk-Level Driver | Evidence | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Countervailing Evidence | Limitation |
|---|---|---|---|---|---|---|---|
| Customer concentration | Two largest customers 31% of 2025 net sales; five largest 56% | Loss or repricing of a large contract removes volume from fixed-cost plants | Largest single business risk | Directly Sourced; shares Calculated (CALC-10) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 30, 116 | Long-term agreements and the customer qualification process; the issuer calls loss of the largest customer remote | Contract terms and expiry dates are not supplied |
| Metal price timing | Net sales grew 46.40% in nine months 2026 against conversion revenue growth of 17.68%; firm-price shipments 11.43% of 2025 volume | Rising metal prices inflate receivables, inventory and payables before they reach earnings; a fall reverses the build | Working capital swings can mask underlying cash generation | Directly Sourced; growth Calculated (CALC-8) | 10-Q_2026-09-30_kalu-20260930.htm.jsonl, pages 26, 30; 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 16 | Metal price neutral pricing passes most cost to customers | Metal price path after 2026-09-30 not supplied |
| Aerospace demand | Aero/HS Products shipments fell 16% in 2025, partly on commercial aerospace plate destocking and the Trentwood outage, and rose 15% in nine months 2026 | Build-rate changes and restocking swings move plate volume | Aerospace is 31.00% of nine-month 2026 conversion revenue, the second-largest line | Directly Sourced; shares Calculated (CALC-6) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 56; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 26 | Nine-month 2026 aerospace net sales up 41%; long-term aerospace agreements | Customer order books are not supplied |
| Packaging growth and Warrick dependence | Packaging is 45.84% of nine-month 2026 net sales and 39.95% of conversion revenue; Warrick relies on Alcoa for essential resources | A single dedicated site serves the largest line; utility failure would stop output | Concentrates output and cash flow at one plant | Directly Sourced; shares Calculated (CALC-3, CALC-6) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 9, 33; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 26 | Fourth coating line adds capacity; about 75% of Packaging shipments are coated products | Alcoa agreement terms not supplied |
| Labor | About 65% of employees are unionized; 26% of those are on contracts expiring within a year of 2025-12-31; Richmond contracts expire in November 2026 | Strikes or higher settlements raise cost or stop output | Raises cost and continuity risk around renewals | Directly Sourced; share Calculated (CALC-13) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, pages 21, 39 | The two largest plants have contracts to September 2030 | Outcomes of 2026 renewals not stated |
| Structural position | A holding company over operating subsidiaries; the 2024 annual report says certain subsidiaries are not guarantors; the guarantor list is not supplied | Debt holders may rank behind creditors of non-guarantor subsidiaries | Recovery and ranking are not established | Directly Sourced for the warning; coverage not supplied | 10-K_2024-12-31_kalu-20241231.htm.jsonl, page 42; 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 120 | The four named revolver borrowers are wholly owned domestic operating subsidiaries | Indentures and credit agreement not supplied |
| Legacy environmental and retiree claims | Environmental accruals of USD 17.9 million, mostly legacy contingencies from before 2006-07-06, with PCB remediation at Trentwood; asset retirement obligations of USD 12.4 million | Remediation scope can change; multiemployer pension withdrawal costs recur with plant exits | Small relative to cash flow but open-ended | Directly Sourced | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 105 | Full-scale ultraviolet treatment implemented in 2024 | Final remediation scope not stated |
| Customer supply chain finance | Receivables sold under customer programs about 32% of 2025 net sales and 31% of third-quarter 2026 net sales | Program withdrawal would raise working capital use | Liquidity sensitivity to customer decisions | Directly Sourced (CALC-22) | 10-K_2025-12-31_kalu-20251231.htm.jsonl, page 62; 10-Q_2026-09-30_kalu-20260930.htm.jsonl, page 33 | Costs are typically reimbursed by the customer | Program sizes and counterparties not stated |

### T2D.11 - Register

| Gap ID | Missing Data | Why It Matters | Affected Section / Flag / Export Record | Consequence for Confidence | Required Follow-Up Source |
|---|---|---|---|---|---|
| G-1 | Beneficial ownership, board independence and related-party dealings | A concentrated holder or an influential director would change the no-sponsor reading | Ownership register; governance register; map of ownership and control | Ownership conclusion rests on cover-page counts only | 2026 proxy statement |
| G-2 | Guarantors of the notes and the revolver; significant subsidiaries | Determines which subsidiaries stand behind the debt | Map of ownership and control; behaviour flags | Structural ranking not established | The two indentures, the credit agreement and Exhibit 21.1 |
| G-3 | Terms of the director designation agreement | Could reveal a holder with board rights | Ownership register; governance register | Ownership conclusion lower in confidence | Quarterly report of 2025-04-24 exhibits |
| G-4 | Labor contract outcomes for 2026 expiries | A stoppage would interrupt shipments | Operating model; events | Operating continuity conclusion carries open risk | Next annual report and management disclosures |
| G-5 | Sherman sale proceeds, the Tiffany transition terms and the Imperial Machine & Tool Co. acquisition date | Completes the transaction and management picture | Transaction summary; governance register | No conclusion changes; the transaction history is less complete | 8-K of 2026-01-07, fourth-quarter 2025 release and the acquisition-year filing |
| G-6 | Alcoa agreements at Warrick | Warrick is the largest plant and depends on Alcoa for essential resources | Operating model; risk drivers | Dependency conclusion lower in confidence | Warrick agreements in the exhibit index |
| G-7 | Confirmation of the 2026-11-13 dividend payment | Cash outflow after the latest filing | Events; capital allocation | No conclusion changes; payment is shown as scheduled | Next quarterly report |
| G-8 | Credit ratings | A rating would show an outside view of leverage and covenant headroom | Company profile | No rating view is possible | Rating agency reports |

### cp1a.cp_model_snapshot_fields - Register

<!-- table-id: cp1a.cp_model_snapshot_fields -->

| field_id | value | status | source_id | source_locator | as_of |
|---|---|---|---|---|---|
| issuer_name | Kaiser Aluminum Corporation | READY | 10-K_2025-12-31_kalu-20251231.htm.jsonl | page 1 | 2026-02-19 |
| sector | Semi-fabricated specialty aluminum mill products | READY | 10-K_2025-12-31_kalu-20251231.htm.jsonl | page 6 | 2026-02-19 |
| country | United States | READY | 10-K_2025-12-31_kalu-20251231.htm.jsonl | page 1 | 2026-02-19 |
| shareholders | Publicly held common stock listed on Nasdaq; about 462 holders of record at 2026-02-16; no controlling holder or sponsor is stated; holder-level percentages are not supplied | READY | 10-K_2025-12-31_kalu-20251231.htm.jsonl | pages 2, 53 | 2026-02-16 |
| transaction_summary | November 2025 refinancing of USD 500.0 million 4.625% notes due 2028 with USD 500.0 million 5.875% notes due 2034; revolver amended in October 2025 to October 2030 with a USD 575.0 million commitment; no acquisition or sponsor transaction in the supplied period | READY | 10-K_2025-12-31_kalu-20251231.htm.jsonl | pages 102, 104 | 2025-12-31 |
| business_description | Manufactures and sells semi-fabricated specialty aluminum mill products for aerospace and high-strength, packaging, general engineering and automotive end markets through one operating segment | READY | 10-K_2025-12-31_kalu-20251231.htm.jsonl | page 6 | 2026-02-19 |

## Calculations

| ID | Item | Inputs | Result | Period |
|---|---|---|---|---|
| CALC-1 | Share of net sales by end market | Each end market's net sales divided by total net sales of USD 3,373.0 million | Aero/HS Products 24.84%; Packaging 44.16%; GE Products 22.51%; Automotive Extrusions 8.49% | FY2025 |
| CALC-2 | Share of net sales by end market | Each end market's net sales divided by total net sales of USD 3,024.0 million (Other Products USD 10.1 million) | Aero/HS Products 29.20%; Packaging 41.70%; GE Products 20.44%; Automotive Extrusions 8.33%; Other Products 0.33% | FY2024 as shown in the 2025 annual report |
| CALC-3 | Share of net sales by end market | Each end market's net sales divided by total net sales of USD 3,577.9 million | Aero/HS Products 24.71%; Packaging 45.84%; GE Products 22.34%; Automotive Extrusions 7.11% | Nine months to 2026-09-30 |
| CALC-4 | Share of net sales by end market | Each end market's net sales divided by total net sales of USD 2,444.0 million | Aero/HS Products 25.56%; Packaging 42.92%; GE Products 22.88%; Automotive Extrusions 8.63% | Nine months to 2025-09-30 |
| CALC-5 | Share of conversion revenue by end market | Each end market's conversion revenue divided by total conversion revenue of USD 1,453.2 million | Aero/HS Products 31.42%; Packaging 37.41%; GE Products 22.76%; Automotive Extrusions 8.41% | FY2025 |
| CALC-6 | Share of conversion revenue by end market | Each end market's conversion revenue divided by total conversion revenue of USD 1,280.5 million | Aero/HS Products 31.00%; Packaging 39.95%; GE Products 22.01%; Automotive Extrusions 7.04% | Nine months to 2026-09-30 |
| CALC-7 | Conversion revenue as a share of net sales | Total conversion revenue divided by total net sales: USD 1,453.2 million / USD 3,373.0 million; USD 1,456.2 million / USD 3,024.0 million; USD 1,280.5 million / USD 3,577.9 million; USD 1,088.1 million / USD 2,444.0 million | FY2025 43.08%; FY2024 48.15%; 9M 2026 35.79%; 9M 2025 44.52% | As labelled |
| CALC-8 | Growth, nine months 2026 against nine months 2025 | Net sales USD 3,577.9 million / USD 2,444.0 million; conversion revenue USD 1,280.5 million / USD 1,088.1 million; shipments 900.4 million pounds / 834.2 million pounds; hedged cost of alloyed metal USD 2,297.4 million / USD 1,355.9 million, each less 1 | Net sales 46.40%; conversion revenue 17.68%; shipments 7.94%; hedged cost of alloyed metal 69.44% | Nine months to 2026-09-30 against nine months to 2025-09-30 |
| CALC-9 | Conversion revenue per pound by end market, as printed | Conversion revenue divided by shipments, each end market and the total, as printed in the filing tables | FY2025 Aero/HS Products USD 2.23, Packaging USD 0.97, GE Products USD 1.34, Automotive Extrusions USD 1.28, total USD 1.31; 9M 2026 Aero/HS Products USD 2.18, Packaging USD 1.12, GE Products USD 1.42, Automotive Extrusions USD 1.41, total USD 1.42; 9M 2025 total USD 1.30 | As labelled |
| CALC-10 | Customer concentration | Largest customer 16% plus second customer 15% of net sales; five largest customers 56% of net sales less the two largest at 31% | Two largest customers 31%; third to fifth customers together 25 percentage points; 2024 largest 16%, second 15%; 2023 largest 18%, second 16% | FY2025 (five largest customers: 2025 net sales) |
| CALC-11 | Firm-price shipments as a share of all shipments | Shipments subject to metal price risk 126.7 million pounds / total shipments 1,108.2 million pounds; 154.9 million pounds / 1,172.3 million pounds | FY2025 11.43%; FY2024 13.21% | FY2025 and FY2024 |
| CALC-12 | Net sales recognised over time as a share of net sales | Products transferred over time USD 768.9 million / USD 3,577.9 million; USD 555.9 million / USD 2,444.0 million | 9M 2026 21.49%; 9M 2025 22.75% | Nine months to 2026-09-30 and 2025-09-30 |
| CALC-13 | Employees on contracts expiring within a year | 65% of employees under labor contracts x 26% of those with contracts expiring within one year of 2025-12-31 | about 16.90% of all employees | At 2025-12-31 |
| CALC-14 | Change in common shares outstanding | 16,349,886 shares at 2026-10-19 less 16,100,473 shares at 2025-02-17; and less 16,210,443 shares at 2026-02-16 | 249,413 shares (1.55%) since 2025-02-17; 139,443 shares (0.86%) since 2026-02-16 | 2025-02-17 to 2026-10-19 |
| CALC-15 | Coupon on the refinanced amount | USD 500.0 million x 5.875% less USD 500.0 million x 4.625%; the two coupons differ by 5.875% less 4.625%; maturity March 2034 less March 2028 | Annual coupon USD 29.375 million against USD 23.125 million, an increase of USD 6.25 million a year; coupon difference 1.25 percentage points; maturity extended by 6 years | From November 2025 |
| CALC-16 | Senior notes principal and annual coupon | USD 550.0 million x 4.50% plus USD 500.0 million x 5.875%; USD 550.0 million plus USD 500.0 million | Principal USD 1,050.0 million; annual coupon USD 54.125 million | At 2026-09-30 |
| CALC-17 | Operating cash flow cover of capital expenditure plus dividends | FY2025: operating cash flow USD 111.4 million / (capital expenditure USD 136.9 million + dividends USD 51.3 million = USD 188.2 million). Nine months 2026: USD 248.1 million / (USD 72.2 million + USD 39.2 million = USD 111.4 million) | FY2025 0.59x (shortfall USD 76.8 million); 9M 2026 2.23x (surplus USD 136.7 million) | FY2025 and nine months to 2026-09-30 |
| CALC-18 | Dividends paid as a share of net income | Dividends and dividend equivalents paid USD 51.3 million / net income USD 112.5 million; USD 39.2 million / USD 190.3 million | FY2025 45.60%; 9M 2026 20.60% | FY2025 and nine months to 2026-09-30 |
| CALC-19 | Leased production floor area | Leased: Chandler extrusion 98,000 + Chandler tube 103,000 + Kalamazoo 465,000 + Richland 63,000 square feet = 729,000, of 10,384,000 in total; Warrick (3,943,000) is owned with leased land | 729,000 of 10,384,000 square feet, 7.02%, excluding Warrick | At 2025-12-31 |
| CALC-20 | Capital expenditure implied for the fourth quarter of 2026 | 2026 plan of approximately USD 130.0 million less nine-month capital expenditure of USD 72.2 million | USD 57.8 million | Q4 2026 (plan, not reported) |
| CALC-21 | Dividend per share, annualised | USD 0.77 per share x 4 quarters | USD 3.08 per share, equal to the USD 3.08 per share paid in 2025 | Annualised |
| CALC-22 | Share of customer receivables sold under supply chain finance programs | As printed: approximately 32% of 2025 net sales and approximately 31% of third-quarter 2026 net sales | FY2025 32%; Q3 2026 31% | FY2025 and Q3 2026 |
| CALC-23 | Share of conversion revenue by end market | Each end market's conversion revenue divided by total conversion revenue of USD 1,456.2 million (Other Products USD 4.2 million) | Aero/HS Products 36.36%; Packaging 33.65%; GE Products 21.48%; Automotive Extrusions 8.22%; Other Products 0.29% | FY2024 as shown in the 2025 annual report |

## Gaps

| Gap | Why it matters | Affected conclusion |
|---|---|---|
| Proxy statement not supplied | Holder concentration, director independence and related-party dealings cannot be tested | No-sponsor and governance reading |
| Guarantor lists, significant subsidiaries and covenant levels not supplied | Structural ranking and restricted-payment room cannot be measured | Creditor access to subsidiary assets |
| Counterparty and terms of the director designation agreement | A board designation right may carry influence | No-sponsor reading |
| Labor contract outcomes for 2026 expiries | Operating continuity around renewals | Labor exposure |
| Sherman sale proceeds, the transition letter terms, Alcoa agreement terms and the date of the Imperial Machine & Tool Co. acquisition | Completes the transaction and dependency picture | Transaction summary and Warrick dependency |
| Dividend payment on 2026-11-13 not confirmed | No filing after 2026-10-22 is supplied | Distribution timeline |

## Next module

The orchestrator selects the next module.
