---
module_id: CP-1A
module_name: BusinessGovernance
issuer_id: w
issuer_name: Wayfair Inc.
analysis_date: 2026-11-05
pathway: credit_snapshot
run_id: w-2026-11-05-credit_snapshot-host
---

## Request

Wayfair Inc. (issuer id w), as of 2026-11-05, credit_snapshot pathway (the full credit assessment). Scope: the issuer's business, ownership and control, operating model, governance and capital-allocation behaviour and its dated history, from the supplied annual report, three quarterly reports and three earnings releases.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_w-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-19 (date signed; filing date not stated) | 8ef4121e11689a0c5565962f85cfafc125f39e54e08df2c3b6c79eaf68e84e4d | Business description, ownership and control, equity note, repurchase and dividend policy, auditors, segment note, debt history, exhibit list |
| 10-Q_2026-03-31_w-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-30 (date signed; filing date not stated) | 79f74f0ba7972d92f75742a90568a879936b4ecf939af4026c967768203f5019 | Not used for any figure in this module |
| 10-Q_2026-06-30_w-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-04 (date signed; filing date not stated) | e52476a4ad53b4396b19ba631702cd30b522eb54aecabc978fa654467e46935a | 2034 secured notes terms and the indenture exhibit |
| 10-Q_2026-09-30_w-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-04 (date signed; filing date not stated) | 9224a05a14ec554aa7f19d7d2ae6869a07a996f1d60af972e32e1595aefdd8c3 | Latest share counts, repurchases, debt actions, segment results, operating metrics, working-capital and contract-liability disclosures, legal proceedings |
| EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl | Exhibit 99.1 earnings release for the first quarter ended March 31, 2026 | 2026-04-30 | a3debc23ce5c3027daa8862793a0e092539f933475881f34dd98f47a74a5cd40 | Not used for any figure in this module |
| EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl | Exhibit 99.1 earnings release for the second quarter ended June 30, 2026 | 2026-08-04 | bd4c1a88b49b8e4441931ccafc159f4e1f6d02b8d8bf7918ce20a28d44352f87 | Not used for any figure in this module |
| EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl | Exhibit 99.1 earnings release for the third quarter ended September 30, 2026 | 2026-11-04 | 2907d0c055207f89b1a08967b4ff5b2fe5bb05c815f0f3ad4e1479f1b9a353cb | Third-quarter operating metrics: repeat-customer and mobile order shares, management commentary |
| Source readiness (CP-0) | Source readiness module answer for this run | 2026-11-05 | 43399c8cef27a5fea1c5523c8802a00ed6679b3ea634675ab7f84523ab1a7ba4 | Source list, document dates and gaps |

## Findings

### Bottom line

Wayfair is founder-controlled with no sponsor, so creditor risk lies in concentrated voting control and in how cash is split between buybacks and debt reduction, not in a sponsor's extraction record. The co-founders and their affiliates held 67.4% of the votes but 18.3% of the economic interest at 2025-12-31, the supplied documents describe no dividend and no creditor-adverse transaction, and total debt fell by USD 473 million to 2026-09-30 while USD 60 million went to buybacks in Q3 2026.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 62; 10-K_2025-12-31_w-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; calculation C17

The business is a drop-ship retailer whose customers pay before delivery, so supplier payables of USD 1,213 million fund inventory of USD 89 million and a fall in order volume would drain cash first. Profit comes from the U.S.: segment Adjusted EBITDA was USD 683 million in the nine months of 2026, against a USD 54 million loss in International.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 23; calculation C15

### Key findings

- Control sits with the co-founders, not with a sponsor or the public holders. Class B shares carry ten votes each, so the co-founders and their affiliates, with 18.3% of the economic interest, held 67.4% of the voting power at 2025-12-31 and can approve a merger, a sale of assets or a charter amendment without the other holders. The control is wearing down slowly: Class B was 15.33% of all shares at 2026-10-28 against 16.86% at 2025-12-31, and the charter ends the Class B structure when it falls below 10%, so creditors should expect the same people to direct strategy and capital returns for the foreseeable future.
  Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 62; 10-K_2025-12-31_w-20251231.htm.jsonl, page 134; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 1; calculation C1; calculation C2

- Capital allocation so far favours debt reduction with a modest buyback, but the buyback room is large against cash. Total debt carrying value fell USD 473 million to USD 2,799 million, while Wayfair bought back USD 60 million of shares in Q3 2026 and paid USD 60 million for an equity instrument to facilitate repurchases, leaving USD 1,028 million authorised against cash of USD 1,038 million. The company has never paid a dividend, so a repurchase pace that outran cash generation, not a distribution, is the way value could leave creditors.
  Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55; 10-K_2025-12-31_w-20251231.htm.jsonl, page 68; calculation C17; calculation C25

- The refinancing has moved debt up the capital structure. Wayfair LLC issued secured notes of USD 800 million due 2029, USD 700 million due 2030, USD 700 million due 2032 and USD 400 million due 2034 while unsecured convertible notes were repurchased or redeemed, so the secured series carried USD 2,572 million at 2026-09-30; the first three share first-priority liens with the revolver, the 2034 notes are described as senior secured, and the remaining USD 227 million of 2027 convertible notes are effectively subordinated to them. This extends maturities and cuts the convertible share overhang, at the price of more encumbered assets for any creditor outside the secured group.
  Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 121; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 12; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; calculation C18

- The operating model funds itself from customers and suppliers, which makes liquidity sensitive to volume. About 97.8% of net revenue in the nine months of 2026 was collected before it was recognised, payables were 13.63x inventories, and contract liabilities rose USD 19 million to USD 296 million, so a drop in orders could reverse payables and customer advances before it reduced reported earnings. Operating cash flow already carries this effect: the net change in operating assets and liabilities was an inflow of USD 64 million in the nine months of 2026 against an outflow of USD 76 million a year earlier.
  Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 7; 10-K_2025-12-31_w-20251231.htm.jsonl, page 14; calculation C15; calculation C16; calculation C19

- Profit depends on the U.S. segment, and International is loss-making and worsening in 2026. The U.S. was 88.93% of nine-month 2026 net revenue and earned a 7.78% segment Adjusted EBITDA margin, while International lost USD 54 million, a margin of -4.94%, compared with a loss of USD 9 million in the nine months of 2025 and revenue down 2.3% in Q3 2026. A creditor therefore underwrites U.S. execution, with International a drag that management has reshaped by leaving Germany.
  Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 23; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 31; 10-K_2025-12-31_w-20251231.htm.jsonl, page 10; calculation C9; calculation C11; calculation C12

- Operating momentum is volume-led and partly bought with price and mix. Net revenue grew 9.7% in Q3 2026 on 12.2% more orders and 4.7% more active customers, while average order value fell 1.89% to USD 311 and cost of goods sold rose to 70.4% of net revenue from 70.0%, so growth is coming with a thinner gross margin of 29.59% that advertising and overhead leverage has to cover.
  Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 30; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 31; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 1–2; calculation C20; calculation C24

- Disclosure supports monitoring, but governance detail is not established. Each quarterly report is signed the same day as its earnings release, the auditor changed to a new firm for 2025 and reported internal control as effective, yet board composition, related-party dealings and executive pay sit in a proxy statement that is not supplied, so related-party leakage and board independence cannot be assessed either way. Missing evidence is not read as adverse.
  Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 98; 10-K_2025-12-31_w-20251231.htm.jsonl, page 99; 10-K_2025-12-31_w-20251231.htm.jsonl, page 147; 10-K_2025-12-31_w-20251231.htm.jsonl, page 148; 10-Q_2026-03-31_w-20260331.htm.jsonl, page 45; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 57; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 56; EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl, page 1; EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl, page 1; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1

- Trade, duty and platform dependencies are real but not quantified. Management calls the trade environment fluid and highly uncertain, Wayfair relies solely on one cloud provider for parts of its operations, and Canadian customs reviews cost about USD 14 million and USD 19 million of duties paid in 2025 against a USD 45 million benefit recorded, so the exposure is a margin risk to monitor rather than a measured loss.
  Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 35; 10-K_2025-12-31_w-20251231.htm.jsonl, pages 132–133; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 28

### Contrary evidence and what would change the view

The strongest evidence against a benign reading is that the same holders who control 67.4% of the votes have an authorisation of USD 1,028 million to repurchase shares, almost the whole of the USD 1,038 million cash balance, and that the indentures and the credit agreement are not supplied, so nothing in the documents limits how much of that room could be used. The company has so far repurchased USD 60 million of shares in 2026, paid USD 60 million for an equity instrument and reduced debt by USD 473 million, which supports the view that debt reduction comes first. The view would weaken if a proxy statement showed related-party payments to controlling holders, if repurchases were funded by drawing the revolver or by new secured debt, if the 2027 convertible notes drew a large cash conversion call while cash was falling, or if the working-capital inflow reversed as orders slowed. It would improve if the next quarterly reports show buybacks held at the current pace with cash steady and International losses narrowing.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 62; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2; calculation C25

### Limitations

- The proxy statement, where board composition, committees, executive pay and related-party transactions are reported, is not supplied, so the governance conclusion rests on the control structure and on disclosure habits only and cannot say whether a board independent of the founders constrains capital returns.
- The executed indentures and the credit agreement are not supplied, so the room for restricted payments, debt incurrence and liens under the secured notes and the revolver is not established, and willingness to return cash cannot be separated from legal capacity.
- Ownership percentages are stated for the co-founders and their affiliates at 2025-12-31 only, and the holders of 5% or more are not listed, so the voting share after 2025-12-31 is estimated from share counts and not stated.
- No quantified management outlook is supplied, so the view of operating momentum rests on reported periods through 2026-09-30 and not on a forecast.

### Company and operating model

| Item | Detail | Source |
|---|---|---|
| What it does | Online retailer of furniture, decor, housewares and home improvement products, selling through six sites (Wayfair, AllModern, Birch Lane, Joss & Main, Perigold, Wayfair Professional) and 12 physical stores in 4 states at 2025-12-31 | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 9–10 |
| How it earns | Product sales recognised on delivery; most orders ship directly from about 20 thousand suppliers (drop-ship), with a growing share through its own CastleGate warehouses and Wayfair Delivery Network | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 9–10; 10-K_2025-12-31_w-20251231.htm.jsonl, page 14; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 28 |
| Customers | 22.2 million active customers at 2026-09-30 (21.2 million a year earlier); repeat customers placed 80.0% of orders in Q3 2026; 64.4% of orders were placed on a mobile device | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 1–2; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 29 |
| Segments | U.S. 88.09% of FY2025 net revenue (88.93% in 9M 2026); International covers Canada, the United Kingdom and Ireland, and Germany through 2025-01-10 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 10; 10-K_2025-12-31_w-20251231.htm.jsonl, page 143; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 23; calculation C7; calculation C9 |
| Scale | Net revenue of USD 12,457 million in FY2025 and USD 9,870 million in 9M 2026; Adjusted EBITDA of USD 743 million in FY2025 and USD 629 million in 9M 2026 (issuer-adjusted) | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-K_2025-12-31_w-20251231.htm.jsonl, page 88; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 49 |
| Cost structure | Cost of goods sold was 70.4% of net revenue in Q3 2026, advertising 9.9% and selling, operations, technology, general and administrative 12.9%; capital expenditure was 1.65% of FY2025 net revenue | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 31; calculation C23 |
| Seasonality | Sales volume is historically highest in the fourth quarter, which includes the November and December holiday period | 10-K_2025-12-31_w-20251231.htm.jsonl, page 16 |
| Competition | Furniture stores, big box retailers, department stores, specialty retailers and online marketplaces; the market is described as fragmented and highly competitive | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 14–15 |

### Company profile

| Item | Detail | Source |
|---|---|---|
| Issuer | Wayfair Inc., a Delaware corporation headquartered in Boston, Massachusetts; Class A common stock listed on the New York Stock Exchange under W | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 1 |
| Sector and country | Retail-Catalog and Mail-Order Houses (classification in the run settings); United States | Run settings |
| Ownership | Dual-class common stock; no sponsor; Class B (ten votes per share) held primarily by the co-founders and their affiliates | 10-K_2025-12-31_w-20251231.htm.jsonl, page 62; 10-K_2025-12-31_w-20251231.htm.jsonl, page 134 |
| Debt issuers | Wayfair LLC (secured notes and revolver borrower) and Wayfair Inc. (convertible notes) | 10-K_2025-12-31_w-20251231.htm.jsonl, page 119; 10-K_2025-12-31_w-20251231.htm.jsonl, page 125; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130 |
| Management roles named | Co-founder, chief executive officer and president (co-chairman); chief financial officer and chief administrative officer | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 56; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1 |
| Auditor | PricewaterhouseCoopers LLP from 2025; Ernst & Young LLP served from 2012 to 2025 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 98; 10-K_2025-12-31_w-20251231.htm.jsonl, page 99 |
| People | About 12,800 employees, of whom about 11,800 full-time equivalents, at 2025-12-31; no union coverage | 10-K_2025-12-31_w-20251231.htm.jsonl, page 15 |
| Reporting | Large accelerated filer; annual report and quarterly reports on the calendar year, each followed by an earnings release the same day | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 56; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1 |

### Transaction summary and new debt issues

No acquisition, merger or sponsor transaction is described in the supplied documents, so the transaction record is the issuer's own financing and portfolio actions. Wayfair LLC issued USD 800 million of secured notes due 2029 on 2024-10-08, USD 700 million due 2030 on 2025-03-13, USD 700 million due 2032 on 2025-11-07 and USD 400 million due 2034 on 2026-05-18. The 2030 issue funded the repurchase of USD 578 million of 2026 convertible notes on 2025-03-14, and the 2034 issue, with cash, funded the settlement of the 2028 convertible notes, so secured debt has replaced unsecured convertible debt step by step.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 121; 10-K_2025-12-31_w-20251231.htm.jsonl, page 80; 10-K_2025-12-31_w-20251231.htm.jsonl, page 128; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 12

The 2026 actions were the redemption of USD 250 million of 2027 convertible notes on 2026-03-23, the redemption of the remaining USD 444 million of 2028 convertible notes on 2026-06-29 with the 2034 proceeds and cash, the maturity payment of USD 39 million on the 2026 convertible notes on 2026-08-15, and the USD 60 million of share repurchases in Q3 2026 together with an equity instrument, bought for USD 60 million, that settled on 2026-10-28 for a USD 64 million cash settlement. These actions lowered total debt by USD 473 million between 2025-12-31 and 2026-09-30 but left the secured series at USD 2,572 million.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; calculation C17; calculation C18

### Events: Issuer history

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2020-08-21 | day | 2026-02-19 | Board authorises a USD 700 million repurchase programme | Historical — authorized the repurchase of up to $700 million of Class A common stock | 10-K_2025-12-31_w-20251231.htm.jsonl, page 134 | Authorises repurchases that now compete with debt reduction for the same cash |
| 2021-08-10 | day | 2026-02-19 | Board authorises a USD 1.0 billion repurchase programme | Historical — authorized a new $1.0 billion share repurchase program | 10-K_2025-12-31_w-20251231.htm.jsonl, page 134 | Raises total authority to USD 1,700 million, of which USD 1,028 million remained at 2026-09-30 (calculation C26) |
| 2024-10-08 | day | 2026-02-19 | Wayfair LLC issues USD 800 million of secured notes due 2029 | Historical — issued $800.0 million aggregate principal amount of 7.250% senior secured notes due 2029 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 121 | Starts the shift of debt into first-priority secured notes |
| 2025-01-10 | day | 2026-02-19 | Germany included in the International segment through this date | Historical — Germany (through January 10, 2025) | 10-K_2025-12-31_w-20251231.htm.jsonl, page 10 | Market exit that cost restructuring and impairment charges and narrowed the International footprint |
| 2025-03 | month | 2026-02-19 | March 2025 workforce reduction affecting the technology team | Historical — the March 2025 workforce reduction | 10-K_2025-12-31_w-20251231.htm.jsonl, page 144 | One-off cost event; no further material charges expected on this action |
| 2025-03-13 | day | 2026-02-19 | Credit agreement amended and restated; USD 700 million of secured notes due 2030 issued | Historical — entered into the Amended and Restated Credit Agreement; issued $700 million 2030 Secured Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 119; 10-K_2025-12-31_w-20251231.htm.jsonl, page 121 | Sets the USD 500 million revolver and its 2030 maturity and adds second secured series |
| 2025-03-14 | day | 2026-02-19 | Repurchase of USD 578 million of 2026 convertible notes with the 2030 notes proceeds | Historical — in connection with the issuance of the 2030 Secured Notes, Wayfair repurchased $578 million in aggregate principal amount of the 2026 Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 128 | Shows the 2030 secured issue funding the retirement of unsecured convertible debt |
| 2025-05-09 | day | 2026-02-19 | Further repurchases of USD 80 million of 2025 notes and USD 118 million of 2026 notes | Historical — used the remaining proceeds from the 2030 Secured Notes offering, together with cash on hand, to repurchase $80 million of the 2025 Notes and $118 million of the 2026 Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 128 | Retires convertible debt with cash on hand as well as note proceeds |
| 2025-08-20 | day | 2026-02-19 | Repurchase of USD 101 million of 2028 convertible notes | Historical — repurchased $101 million in aggregate principal amount of the 2028 Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 128 | Voluntary retirement of convertible debt at a loss on extinguishment |
| 2025-11-07 | day | 2026-02-19 | Wayfair LLC issues USD 700 million of secured notes due 2032 | Historical — issued $700 million aggregate principal amount of the 2032 Secured Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 121; 10-K_2025-12-31_w-20251231.htm.jsonl, page 80 | Third secured series; extends the maturity wall |
| 2025-11-12 | day | 2026-02-19 | Repurchase of USD 210 million of 2027 convertible notes | Historical — repurchased $210 million in aggregate principal amount of the 2027 Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 128 | Retires near-term convertible debt ahead of its 2027 maturity |
| 2025 | year | 2026-02-19 | PricewaterhouseCoopers LLP becomes the auditor; Ernst & Young LLP served from 2012 to 2025 | Historical — we have served as the Company's auditor since 2025 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 98; 10-K_2025-12-31_w-20251231.htm.jsonl, page 99 | Auditor change in the year of the most active refinancing; the new auditor reported internal control as effective |
| 2026-02-06 | day | 2026-11-04 | Redemption notice issued for USD 250 million of 2027 convertible notes | Historical — redemption notice issued on February 6, 2026 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 | Starts the early retirement of the 2027 convertible notes |
| 2026-03-23 | day | 2026-11-04 | Settlement in cash of USD 250 million of 2027 convertible notes | Historical — settled in cash $250 million principal amount of the outstanding 2027 Notes | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 | Cash use that retired part of the 2027 convertible notes ahead of maturity |
| 2026-05-18 | day | 2026-11-04 | Wayfair LLC issues USD 400 million of secured notes due 2034 | Historical — Wayfair LLC issued $400 million aggregate principal amount of 2034 Secured Notes | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 12 | Fourth secured series; funds the 2028 convertible redemption together with cash |
| 2026-06-29 | day | 2026-11-04 | Settlement of the remaining USD 444 million of 2028 convertible notes | Historical — settled the remaining $444 million in aggregate principal amount of the 2028 Notes | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 15 | Removes the 2028 convertible notes; conversions were settled with cash and 4.5 million shares |
| 2026-08-15 | day | 2026-11-04 | Maturity of the 2026 convertible notes; USD 39 million paid in cash | Historical — the 2026 Notes matured and Wayfair paid in cash the remaining outstanding principal of $39 million | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 | Scheduled maturity met from cash |
| 2026-Q3 | quarter | 2026-11-04 | Repurchase of 600,000 Class A shares for USD 60 million | Historical — repurchased $60 million under the 2020 Repurchase Program at an average price of $100.01 per share | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55 | First repurchases of the programme in 2026; USD 1,028 million remained authorised at 2026-09-30 |
| 2026-10-28 | day | 2026-11-04 | Equity instrument bought to facilitate repurchases settles for a cash settlement of USD 64 million | Historical — subsequent event: the equity instrument was settled on October 28, 2026, resulting in a cash settlement of $64 million | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42 | Falls after the balance-sheet date and is outside every period figure; the direction of the payment is not stated |
| 2026-Q4 | quarter | 2026-11-04 | The 2027 convertible notes are convertible during the quarter ending 2026-12-31 | Scheduled — the 2027 Notes are convertible during the calendar quarter ending December 31, 2026 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 | Conversion could require cash settlement of part or all of the obligation |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 26 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 6 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 21 |
| Fields total | 21 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 6 |

### Map: ownership and control

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Co-founders and their affiliates | Hold about 18.3% of the economic interest | Ownership | Wayfair Inc. | Annual report: 18.3% economic interest at 2025-12-31 |
| Co-founders and their affiliates | Hold about 67.4% of the voting power via Class B | Legal control | Wayfair Inc. | Annual report: Class B has ten votes per share |
| Other holders | Hold the rest: 81.7% economic, 32.6% of votes | Ownership | Wayfair Inc. | Calculated from the annual report percentages |
| Wayfair Inc. | Parent; share held by Wayfair Inc. not stated | Ownership | Wayfair LLC | Annual report: Wayfair LLC is a subsidiary of Wayfair |
| Wayfair Inc. | Guarantor of the secured notes and the revolver | Guarantee | Wayfair LLC | Annual report: indentures name Wayfair as guarantor |
| Wayfair LLC | Guarantor of the convertible notes of Wayfair Inc. | Guarantee | Wayfair Inc. | Annual report: convertible indentures include Wayfair LLC |
| Certain subsidiaries, not named | Guarantee the revolver and the secured notes | Guarantee | Wayfair LLC | Annual report: guarantors named in the credit agreement |

### Map: operating model to credit

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Drop-ship supplier network | Suppliers ship most orders, so payables fund inventory | Documentary Fact | Working capital float | Annual report: drop-ship is the primary method |
| Customers pay before delivery | 97.8% of 9M 2026 revenue collected in advance | Documentary Fact | Working capital float | Quarterly report: collected in advance |
| Working capital float | A fall in orders reverses payables and advances first | Analyst Interpretation | Operating cash flow | Payables 13.63x inventories at 2026-09-30 |
| U.S. segment | Earns USD 683 million Adjusted EBITDA in 9M 2026 | Documentary Fact | Group Adjusted EBITDA | Quarterly report segment note |
| International segment | Lost USD 54 million Adjusted EBITDA in 9M 2026 | Documentary Fact | Group Adjusted EBITDA | Quarterly report segment note |
| Order volume growth | Orders up 12.2% while average order value fell | Documentary Fact | Gross margin | Q3 release and quarterly report |
| Trade policy and tariffs | Management calls the environment fluid and uncertain | Management Language | Cost of goods sold | Quarterly report: global considerations |
| Founder voting control | Can direct buybacks, acquisitions and secured issuance | Analyst Interpretation | Capital allocation | Annual report: 67.4% of voting power |
| Secured note issuance | Ranks ahead of unsecured convertible notes | Documentary Fact | Convertible note holders | Annual report: seniority of the notes |
| Buyback authorisation | USD 1,028 million remains against USD 1,038 million cash | Documentary Fact | Creditor cash buffer | Quarterly report: repurchase table |
| Proxy statement not supplied | Related-party and board facts not established | Insufficient Information | Governance conclusion | Annual report: Part III by reference |

### transaction_summary

| Transaction | Status | Credit relevance | Source |
|---|---|---|---|
| Acquisition, merger or sponsor transaction | None described in the supplied documents | No transaction leverage, sponsor equity or purchase price to underwrite; the transaction record is the issuer's own financing actions | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 9–16; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 27–29 |
| USD 800 million senior secured notes due 2029 (7.250%), issued by Wayfair LLC on 2024-10-08 | Completed; USD 791 million carrying value at 2026-09-30 | First-priority secured debt sharing collateral with the revolver | 10-K_2025-12-31_w-20251231.htm.jsonl, page 121; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 |
| USD 700 million senior secured notes due 2030 (7.750%), issued on 2025-03-13 with the amended revolver | Completed; USD 693 million carrying value at 2026-09-30 | Second secured series; funded the repurchase of USD 578 million of 2026 convertible notes on 2025-03-14 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 119; 10-K_2025-12-31_w-20251231.htm.jsonl, page 121; 10-K_2025-12-31_w-20251231.htm.jsonl, page 128; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 |
| USD 700 million senior secured notes due 2032 (6.750%), issued on 2025-11-07 | Completed; USD 693 million carrying value at 2026-09-30 | Third secured series; extends the maturity wall | 10-K_2025-12-31_w-20251231.htm.jsonl, page 121; 10-K_2025-12-31_w-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 |
| USD 400 million senior secured notes due 2034 (7.125%), issued on 2026-05-18 | Completed; USD 395 million carrying value at 2026-09-30 | Fourth secured series; funded the 2028 convertible redemption with cash on hand; lien priority against the revolver is not restated | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 12; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 |
| Redemption of USD 250 million of 2027 convertible notes on 2026-03-23 | Completed | Cash retirement ahead of the 2027 maturity | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 |
| Settlement of the remaining USD 444 million of 2028 convertible notes on 2026-06-29 | Completed; cash USD 444 million and 4.5 million shares | Removes unsecured convertible debt that ranked below the new secured notes | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 15 |
| Share repurchase of USD 60 million in Q3 2026 and an equity instrument that settled on 2026-10-28 | Completed; settlement is a subsequent event | Cash returned to shareholders while debt was being reduced | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55 |

### company_description

| Issuer | Business description | Country | Sector |
|---|---|---|---|
| Wayfair Inc. | Online retailer of furniture, decor, housewares and home improvement products through six sites and 12 physical stores, with most orders drop-shipped from about 20 thousand suppliers and a growing share handled through its own warehouses and delivery network; U.S. segment is 88% of net revenue | United States | Retail-Catalog and Mail-Order Houses (run settings classification) |

### revenue_business_mix

| Business line | Revenue mix | Period | Status | Limitation |
|---|---|---|---|---|
| U.S. segment | USD 10,973 million, 88.09% of net revenue (calculation C7) | FY2025 | Reported; share calculated | Segment is the only revenue split reported |
| International segment | USD 1,484 million, 11.91% of net revenue (calculation C8) | FY2025 | Reported; share calculated | Includes Germany through 2025-01-10 |
| U.S. segment | USD 8,777 million, 88.93% of net revenue (calculation C9) | 9M 2026 | Reported; share calculated | Interim figure |
| International segment | USD 1,093 million, 11.07% of net revenue (calculation C10) | 9M 2026 | Reported; share calculated | Interim figure |
| Wayfair brand versus specialty brands | Wayfair brand is a significant majority of net revenue; no percentage is stated | FY2025 | Management Language | Brand revenue is not reported in figures |
| Product categories | — | FY2025 | Not disclosed | Revenue by product group is not reported to the chief operating decision maker and is described as impractical to identify |
| Customer concentration | — | FY2025 | Not disclosed | The annual report states that no country outside the U.S. exceeded 10% of net revenue; no customer concentration disclosure is supplied |

### ownership_register

| Owner / class | Control | Economic interest | Credit relevance | Source |
|---|---|---|---|---|
| Co-founders and their affiliates (mostly Class B) | 67.4% of voting power at 2025-12-31 | About 18.3% at 2025-12-31 | Can direct elections, charter changes, mergers and asset sales; no sponsor exit or fund-life pressure applies | 10-K_2025-12-31_w-20251231.htm.jsonl, page 62 |
| Class B common stock (ten votes per share) | 66.98% of all votes at 2025-12-31 and 64.42% at 2026-10-28 (calculated) | 16.86% of shares at 2025-12-31 and 15.33% at 2026-10-28 (calculated) | Converts to Class A on transfer and entirely if below 10% of shares; the share fell from 21,978,295 to 20,977,815 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 134; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 1; calculation C2; calculation C1; calculation C4; calculation C3 |
| Class A common stock (one vote per share), publicly traded | Votes not held by the co-founders: 32.6% at 2025-12-31 | The remaining 81.7% at 2025-12-31 (calculated) | Public holders cannot block founder-approved transactions | 10-K_2025-12-31_w-20251231.htm.jsonl, page 62; calculation C5; calculation C6 |
| Holders of 5% or more | Not stated | Not stated | Beneficial ownership table is in the proxy statement, which is not supplied | 10-K_2025-12-31_w-20251231.htm.jsonl, page 148 |
| Management participation | Not stated | Not stated | Executive holdings beyond the co-founders are not supplied | 10-K_2025-12-31_w-20251231.htm.jsonl, page 148 |

### operating_model

| Operating driver | Measure | Period | Status | Credit relevance |
|---|---|---|---|---|
| Net revenue growth | 9.7% in Q3 2026; U.S. 11.4%, International -2.3% | Q3 2026 | Reported | Growth is U.S.-led; International shrinks |
| Orders delivered | 11.0 million in Q3 2026 against 9.8 million, up 12.2% | Q3 2026 | Reported | Volume drives revenue; cash flow follows order volume |
| Active customers | 22.2 million at 2026-09-30 against 21.2 million, up 4.7% | 2026-09-30 | Reported | Customer base is growing, which supports repeat revenue |
| Average order value | USD 311 against USD 317, -1.89% | Q3 2026 | Reported; change calculated | Falling order value thins gross margin per order |
| LTM net revenue per active customer | USD 596 against USD 578 | 2026-09-30 | Reported | Spending per customer is rising on a last-twelve-month basis |
| Repeat customers | 80.0% of orders against 80.1% | Q3 2026 | Reported | Stable repeat share supports revenue visibility |
| Cost of goods sold | 70.4% of net revenue against 70.0% | Q3 2026 | Reported | Gross margin is thin and sensitive to duties and shipping costs |
| Advertising | 9.9% of net revenue against 10.6% | Q3 2026 | Reported | Marketing efficiency improved; demand depends on paid channels |
| Selling, operations, technology, general and administrative | 12.9% of net revenue against 14.3% | Q3 2026 | Reported | Operating leverage has widened the margin |
| Revenue collected before recognition | 97.8% of net revenue | 9M 2026 | Reported | Customers fund the business; a volume fall reverses this float |
| Accounts payable against inventories | USD 1,213 million against USD 89 million, 13.63x | 2026-09-30 | Reported; ratio calculated | Suppliers fund inventory; payables are a large short-term obligation |
| Contract liabilities | USD 296 million against USD 277 million | 2026-09-30 | Reported | Customer advances rose and sit inside other current liabilities |
| U.S. segment Adjusted EBITDA margin | 7.78% (USD 683 million) | 9M 2026 | Calculated | Profit pool is the U.S. |
| International segment Adjusted EBITDA margin | -4.94% (USD -54 million) | 9M 2026 | Calculated | International is loss-making and worse than 9M 2025 (USD -9 million) |
| Capital expenditure | USD 205 million, 1.65% of net revenue | FY2025 | Calculated | Capital intensity is low; maintenance and growth capex are not split |
| Seasonality | — | FY2025 | Not quantified | Fourth quarter is the strongest, but no quarterly revenue split is stated in the supplied annual report |
| Canadian customs reviews | Cost of USD 14 million and duties paid of USD 19 million in 2025; benefit of USD 45 million recorded on duty examinations | FY2025 | Reported | Margin risk from duties; exposure beyond these amounts is not quantified |
| Physical stores | 12 stores in 4 states | 2025-12-31 | Reported | Small retail footprint; no store-level economics stated |
| Employees | About 12,800, of whom about 11,800 full-time equivalents | 2025-12-31 | Reported | No union coverage; contractors supplement logistics |

### events_timeline

| Date / window | Event | Credit relevance | Status | Source |
|---|---|---|---|---|
| 2020-08-21 | Board authorises a USD 700 million repurchase programme | Authorises repurchases that now compete with debt reduction for the same cash | Historical — authorized the repurchase of up to $700 million of Class A common stock | 10-K_2025-12-31_w-20251231.htm.jsonl, page 134 |
| 2021-08-10 | Board authorises a USD 1.0 billion repurchase programme | Raises total authority to USD 1,700 million, of which USD 1,028 million remained at 2026-09-30 (calculation C26) | Historical — authorized a new $1.0 billion share repurchase program | 10-K_2025-12-31_w-20251231.htm.jsonl, page 134 |
| 2024-10-08 | Wayfair LLC issues USD 800 million of secured notes due 2029 | Starts the shift of debt into first-priority secured notes | Historical — issued $800.0 million aggregate principal amount of 7.250% senior secured notes due 2029 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 121 |
| 2025-01-10 | Germany included in the International segment through this date | Market exit that cost restructuring and impairment charges and narrowed the International footprint | Historical — Germany (through January 10, 2025) | 10-K_2025-12-31_w-20251231.htm.jsonl, page 10 |
| 2025-03 | March 2025 workforce reduction affecting the technology team | One-off cost event; no further material charges expected on this action | Historical — the March 2025 workforce reduction | 10-K_2025-12-31_w-20251231.htm.jsonl, page 144 |
| 2025-03-13 | Credit agreement amended and restated; USD 700 million of secured notes due 2030 issued | Sets the USD 500 million revolver and its 2030 maturity and adds second secured series | Historical — entered into the Amended and Restated Credit Agreement; issued $700 million 2030 Secured Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 119; 10-K_2025-12-31_w-20251231.htm.jsonl, page 121 |
| 2025-03-14 | Repurchase of USD 578 million of 2026 convertible notes with the 2030 notes proceeds | Shows the 2030 secured issue funding the retirement of unsecured convertible debt | Historical — in connection with the issuance of the 2030 Secured Notes, Wayfair repurchased $578 million in aggregate principal amount of the 2026 Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 128 |
| 2025-05-09 | Further repurchases of USD 80 million of 2025 notes and USD 118 million of 2026 notes | Retires convertible debt with cash on hand as well as note proceeds | Historical — used the remaining proceeds from the 2030 Secured Notes offering, together with cash on hand, to repurchase $80 million of the 2025 Notes and $118 million of the 2026 Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 128 |
| 2025-08-20 | Repurchase of USD 101 million of 2028 convertible notes | Voluntary retirement of convertible debt at a loss on extinguishment | Historical — repurchased $101 million in aggregate principal amount of the 2028 Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 128 |
| 2025-11-07 | Wayfair LLC issues USD 700 million of secured notes due 2032 | Third secured series; extends the maturity wall | Historical — issued $700 million aggregate principal amount of the 2032 Secured Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 121; 10-K_2025-12-31_w-20251231.htm.jsonl, page 80 |
| 2025-11-12 | Repurchase of USD 210 million of 2027 convertible notes | Retires near-term convertible debt ahead of its 2027 maturity | Historical — repurchased $210 million in aggregate principal amount of the 2027 Notes | 10-K_2025-12-31_w-20251231.htm.jsonl, page 128 |
| 2025 | PricewaterhouseCoopers LLP becomes the auditor; Ernst & Young LLP served from 2012 to 2025 | Auditor change in the year of the most active refinancing; the new auditor reported internal control as effective | Historical — we have served as the Company's auditor since 2025 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 98; 10-K_2025-12-31_w-20251231.htm.jsonl, page 99 |
| 2026-02-06 | Redemption notice issued for USD 250 million of 2027 convertible notes | Starts the early retirement of the 2027 convertible notes | Historical — redemption notice issued on February 6, 2026 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 |
| 2026-03-23 | Settlement in cash of USD 250 million of 2027 convertible notes | Cash use that retired part of the 2027 convertible notes ahead of maturity | Historical — settled in cash $250 million principal amount of the outstanding 2027 Notes | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 |
| 2026-05-18 | Wayfair LLC issues USD 400 million of secured notes due 2034 | Fourth secured series; funds the 2028 convertible redemption together with cash | Historical — Wayfair LLC issued $400 million aggregate principal amount of 2034 Secured Notes | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 12 |
| 2026-06-29 | Settlement of the remaining USD 444 million of 2028 convertible notes | Removes the 2028 convertible notes; conversions were settled with cash and 4.5 million shares | Historical — settled the remaining $444 million in aggregate principal amount of the 2028 Notes | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 15 |
| 2026-08-15 | Maturity of the 2026 convertible notes; USD 39 million paid in cash | Scheduled maturity met from cash | Historical — the 2026 Notes matured and Wayfair paid in cash the remaining outstanding principal of $39 million | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 |
| 2026-Q3 | Repurchase of 600,000 Class A shares for USD 60 million | First repurchases of the programme in 2026; USD 1,028 million remained authorised at 2026-09-30 | Historical — repurchased $60 million under the 2020 Repurchase Program at an average price of $100.01 per share | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55 |
| 2026-10-28 | Equity instrument bought to facilitate repurchases settles for a cash settlement of USD 64 million | Falls after the balance-sheet date and is outside every period figure; the direction of the payment is not stated | Historical — subsequent event: the equity instrument was settled on October 28, 2026, resulting in a cash settlement of $64 million | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42 |
| 2026-Q4 | The 2027 convertible notes are convertible during the quarter ending 2026-12-31 | Conversion could require cash settlement of part or all of the obligation | Scheduled — the 2027 Notes are convertible during the calendar quarter ending December 31, 2026 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 |

### gaps_ledger

| Gap | Affected analysis | Severity | Action | Status |
|---|---|---|---|---|
| Proxy statement not supplied: board, committees, executive pay, related-party transactions and holders of 5% or more | Ownership and governance conclusions | Material | Supply the 2026 proxy statement | Open |
| Executed indentures and credit agreement not supplied | Capacity for restricted payments, debt and liens; legal-capacity link of every behaviour flag | Material | Supply the executed documents | Open |
| Founders' voting share after 2025-12-31 is not stated | Control analysis after the latest annual report | Minor | Read the next proxy statement; the share-count estimate is shown | Open |
| No quantified outlook | Operating trajectory beyond 2026-09-30 | Minor | Supply guidance if the issuer gives it | Open |
| Product-category and customer concentration are not reported | Revenue durability and concentration | Minor | None needed unless the issuer discloses it | Open |
| Direction of the USD 64 million settlement on 2026-10-28 is not stated | Cash and buyback effect after the balance-sheet date | Minor | Read the fourth-quarter report | Open |
| Quarterly revenue seasonality is not quantified in the supplied annual report | Seasonal working-capital swings | Minor | Read the quarterly comparatives | Open |

### conflict_log

| Conflict | Sources | Materiality | Resolution | Downstream impact |
|---|---|---|---|---|
| None found in the figures compared: U.S. share of revenue of 88% matches the segment table; Q3 2026 U.S. growth of 11.4%, active customers of 22.2 million and Adjusted EBITDA margin of 6.9% agree between the quarterly report and the release; Class B shares differ by 23 between the balance-sheet date and the cover date, a difference of dates | 10-K_2025-12-31_w-20251231.htm.jsonl, page 10; 10-K_2025-12-31_w-20251231.htm.jsonl, page 143; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 29–31; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 1–2; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 | None | No reconciliation needed | No effect |

### T2D.1 Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_w-20251231.htm.jsonl | High | FY2025 with FY2024 and FY2023 | Wayfair Inc. consolidated | Business, control, equity note, dividend and repurchase policy, auditors, segments, debt history | Part III by reference; exhibits not supplied | Governance, ownership and operating evidence |
| S2 | 10-Q_2026-03-31_w-20260331.htm.jsonl | High | Q1 2026 | Wayfair Inc. consolidated | Not used for any figure | Not used | None |
| S3 | 10-Q_2026-06-30_w-20260630.htm.jsonl | High | Q2 2026 | Wayfair Inc. consolidated | 2034 secured notes terms | Terms only | Debt history |
| S4 | 10-Q_2026-09-30_w-20260930.htm.jsonl | High | Q3 2026 and 9M 2026 | Wayfair Inc. consolidated | Share counts, repurchases, debt actions, segments, operating metrics, contract liabilities | Unaudited; no separate subsequent-events note | Latest capital-allocation and operating evidence |
| S5 | EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl | Medium | Q1 2026 | Wayfair Inc. consolidated | Not used for any figure | Issuer release | None |
| S6 | EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl | Medium | Q2 2026 | Wayfair Inc. consolidated | Not used for any figure | Issuer release | None |
| S7 | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl | Medium | Q3 2026 | Wayfair Inc. consolidated | Repeat-customer and mobile order shares, management commentary | Issuer release; management language | Operating momentum |
| S8 | Source readiness module answer for this run (sha256 43399c8cef27a5fea1c5523c8802a00ed6679b3ea634675ab7f84523ab1a7ba4) | Medium | 2026-11-05 | Wayfair Inc. | Source list, dates and gaps | Module output citing the filings | Source basis |

### T2D.3 Governance register

| Governance Topic | Source-Supported Fact | Risk Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Board and control rights | Class B has ten votes per share; co-founders and affiliates held 67.4% of voting power and 18.3% of economic interest at 2025-12-31; Class B converts on transfer and entirely below 10% of shares; the board is classified only when Class B falls below 10% | Mixed | Concentrated votes let a small economic holder direct strategy, acquisitions and capital returns | Creditors depend on the holders' own financial policy and on debt covenants, not on shareholder checks | High | 10-K_2025-12-31_w-20251231.htm.jsonl, page 62; 10-K_2025-12-31_w-20251231.htm.jsonl, page 65; 10-K_2025-12-31_w-20251231.htm.jsonl, page 134 | Board composition and independence are not supplied |
| Related-party transactions | No related-party transaction is described in the supplied documents; the relevant item is incorporated by reference from the proxy statement | Insufficient Information | Unknown payments to controlling holders would leak value | Cannot be assessed either way | Insufficient | 10-K_2025-12-31_w-20251231.htm.jsonl, page 148 | Proxy statement not supplied |
| Management, monitoring and advisory fees | No sponsor exists and no fee to a controlling holder is described in the supplied documents | Insufficient Information | Fees to holders would reduce cash available for debt service | No adverse inference; limited by the missing proxy statement | Low | 10-K_2025-12-31_w-20251231.htm.jsonl, page 148 | Proxy statement not supplied |
| Reporting cadence and audit | Annual report and three quarterly reports each followed by a same-day release; PricewaterhouseCoopers audited 2025 with a critical audit matter on revenue recognition and reported internal control as effective; Ernst & Young audited 2024 and 2023 | Supportive | Regular, audited reporting lets creditors monitor leverage and liquidity | Supports monitoring posture | High | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 96–99; 10-K_2025-12-31_w-20251231.htm.jsonl, page 147; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 56; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1 | Auditor changed in 2025 |
| Covenant reporting and compliance certificates | The filings state compliance with all covenants; no certificate or covenant ratio is supplied | Insufficient Information | Without the reported ratio, headroom cannot be monitored | Covenant headroom is not established | Medium | 10-K_2025-12-31_w-20251231.htm.jsonl, page 120; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42 | Credit agreement not supplied |
| Disclosure completeness | No quantified outlook; segment Adjusted EBITDA, debt and liquidity are disclosed | Neutral | Forward cash flow must be assumed | Moderate information risk | High | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 4–5; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 39–42 | No guidance supplied |
| Shareholder and creditor interests | Founders hold voting control; the authorisation of USD 1,028 million of repurchases remains at 2026-09-30; no dividend has ever been declared | Mixed | Buybacks funded from cash would reduce the buffer that protects creditors | Creditors rely on the observed debt-reduction pattern and covenants | High | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55; 10-K_2025-12-31_w-20251231.htm.jsonl, page 68 | Capacity under the debt documents not supplied |

### T2D.4 Behavior flag register

| Flag ID | Behavior Type | Documented Action | Behavior Category | Amount / Funding Source | Legal-Capacity Link | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|---|---|---|
| FLAG-001 | Refinancing | Issued four series of senior secured notes through Wayfair LLC from 2024-10-08 to 2026-05-18 while repurchasing or redeeming unsecured convertible notes | Neutral / Mixed: maturity extension with increased encumbrance | USD 800 million, 700 million, 700 million and 400 million; proceeds and cash on hand | Insufficient Information (indentures not supplied) | More first-priority secured debt ranks ahead of unsecured claims | Lower refinancing risk for the maturities addressed, less priority for the 2027 convertible notes | High | 10-K_2025-12-31_w-20251231.htm.jsonl, page 121; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 | Lien priority of the 2034 notes is not restated |
| FLAG-002 | Voluntary debt reduction | Redeemed USD 250 million of 2027 convertible notes and settled USD 444 million of 2028 convertible notes in 2026, and repurchased others | Supportive / Creditor-Aligned | USD 395 million of net new debt proceeds plus cash; cash fell USD 438 million | Insufficient Information | Cash used to retire debt lowers leverage but also liquidity | Total debt fell USD 473 million between 2025-12-31 and 2026-09-30 | High | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; calculation C17 | Extinguishment losses of USD 102 million in 9M 2026 show premiums paid |
| FLAG-003 | Share repurchase | Repurchased USD 60 million of Class A shares in Q3 2026 and paid USD 60 million for an equity instrument that settled on 2026-10-28 for a USD 64 million cash settlement | Neutral / Mixed | Cash on hand; USD 1,028 million authorised and unused | Insufficient Information | Buybacks reduce cash and the buffer for creditors | Small against cash today; the authorisation is nearly equal to cash | High | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42 | Direction of the settlement is not stated |
| FLAG-004 | Disposal or exit | Exited Germany (International segment through 2025-01-10) and cut staff in March 2025 | Neutral | Restructuring charges of USD 53 million in FY2025, including USD 48 million for Germany | Not applicable | One-off cash costs, then a smaller loss-making footprint | Limited effect on leverage; International remains loss-making | High | 10-K_2025-12-31_w-20251231.htm.jsonl, page 10; 10-K_2025-12-31_w-20251231.htm.jsonl, page 144 | Effect on future International losses is not stated |
| FLAG-005 | Dividend or distribution | No cash dividend has ever been declared or paid | Supportive | Not applicable | Insufficient Information | No cash leaves through dividends | Supports creditor alignment; capacity under the documents is unknown | High | 10-K_2025-12-31_w-20251231.htm.jsonl, page 68 | No statement about future policy beyond not anticipating dividends |
| FLAG-006 | Liability management, priming, uptier or drop-down | None described in the supplied documents | Insufficient Information | Not applicable | Insufficient Information (indentures not supplied) | Cannot be tested without the documents | No adverse inference | Insufficient | 10-K_2025-12-31_w-20251231.htm.jsonl, page 122 | Indentures and credit agreement not supplied |

### T2D.5 Capital allocation risk table

| Capital Allocation Item | Source-Supported Fact | Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Organic investment and capex | Purchase of property and equipment plus site and software development costs was USD 205 million in FY2025, 1.65% of net revenue | Supportive | Low capital intensity leaves cash for debt service | Supports free cash flow durability | High | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; calculation C22; calculation C23 | Maintenance and growth split not disclosed |
| Mergers and acquisitions | None described; the strategy list includes opportunistic strategic acquisitions | Neutral | A future debt-funded acquisition under founder control would raise leverage | Watch item, no current effect | Medium | 10-K_2025-12-31_w-20251231.htm.jsonl, page 10 | No transaction to assess |
| Restructuring and integration spend | Restructuring and other charges were USD 53 million in FY2025 and USD 24 million in 9M 2026, the latter a lease termination loss | Mixed | Cash and non-cash charges reduce reported earnings | Modest against Adjusted EBITDA | High | 10-K_2025-12-31_w-20251231.htm.jsonl, page 100; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 | Cash portion not stated |
| Dividends and distributions | No cash dividend has ever been declared or paid | Supportive | No distribution drains cash | Supports creditor alignment | High | 10-K_2025-12-31_w-20251231.htm.jsonl, page 68 | Policy can change |
| Share repurchases | USD 60 million in Q3 2026 and cumulative USD 672 million under the programmes; USD 1,028 million remains authorised | Mixed | Repurchases use cash that supports liquidity | Not yet material against cash of USD 1,038 million, but capacity is large | High | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55; calculation C21; calculation C25 | Legal capacity under the debt documents not supplied |
| Debt paydown and refinancing | Total debt carrying value fell USD 473 million to USD 2,799 million; four secured series issued; 2027 convertible notes left at USD 229 million of principal and USD 227 million carrying value | Supportive | Lower leverage and longer maturities, with more secured debt | Improves refinancing position, reduces unsecured priority | High | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; calculation C17 | Lien priority of the 2034 notes not restated |
| Equity compensation and net share settlement | Taxes paid on net share settlement of equity awards were USD 77 million in 9M 2026 | Mixed | Cash used to settle employee tax withholding reduces liquidity | Recurring cash use of moderate size | High | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 4 | Future grants not quantified |
| Equity support and cure | None described; no sponsor exists | Neutral | No external support to rely on | Creditors rely on the company's own liquidity | Medium | 10-K_2025-12-31_w-20251231.htm.jsonl, page 62 | Not applicable to a sponsor-free issuer |
| Asset sales and disposals | None described other than the Germany exit | Neutral | No proceeds distributed | No effect | Medium | 10-K_2025-12-31_w-20251231.htm.jsonl, page 10 | Disposal proceeds not stated |
| Liquidity preservation | USD 500 million revolver amended to mature on 2030-03-13 and undrawn at 2026-09-30; cash of USD 1,038 million | Supportive | Committed funding backs the cash balance | Supports liquidity but is shared with the secured notes | High | 10-K_2025-12-31_w-20251231.htm.jsonl, page 119; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11 | Springing earlier maturity circumstances not described |

### T2D.9 Sponsor risk assessment

| Risk-Level Driver | Evidence | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Countervailing Evidence | Limitation |
|---|---|---|---|---|---|---|---|
| Concentrated founder control | Co-founders and affiliates held 67.4% of voting power against 18.3% of economic interest at 2025-12-31 | Few holders can direct acquisitions, buybacks and secured issuance | Creditor protection rests on debt documents and policy, not on shareholder checks | High | 10-K_2025-12-31_w-20251231.htm.jsonl, page 62 | No dividend and no related-party transaction described; control declines slowly as Class B converts | Proxy statement not supplied |
| Capital returns against cash | USD 1,028 million of repurchase authority remains against USD 1,038 million of cash; USD 60 million was repurchased in Q3 2026 | Faster buybacks would reduce the liquidity buffer | Medium-term liquidity risk if the pace rises | High | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 | Debt fell USD 473 million in the same period; no dividend ever | Capacity under indentures unknown |
| Priority shift to secured debt | Four secured series total USD 2,572 million carrying value; 2027 convertible notes unsecured | More assets encumbered for first-priority holders | Convertible holders sit behind secured claims | High | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130; calculation C18 | Maturities extended to 2029–2034 | Lien priority of the 2034 notes not restated |
| Disclosure and monitoring | Audited annual report with effective internal control; same-day releases; no quantified outlook | Adequate visibility for covenant and liquidity monitoring | Supports monitoring posture | High | 10-K_2025-12-31_w-20251231.htm.jsonl, page 147; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1 | Auditor changed in 2025 | Covenant ratio and compliance certificate not supplied |

Sponsor and governance risk level: Medium. The level is driven by founder voting control and a large repurchase authorisation, because buybacks and secured issuance can be directed without shareholder checks, which implies that creditors depend on the company's own debt-reduction record and on covenants whose terms are not supplied. Countervailing evidence is that no dividend has ever been paid, no related-party payment is described, and total debt fell USD 473 million in 2026. Further analysis requires the proxy statement and the executed debt documents.
Basis: 10-K_2025-12-31_w-20251231.htm.jsonl, page 62; 10-K_2025-12-31_w-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55; calculation C17

### T2D.11 Gaps ledger

| Gap ID | Missing Data | Why It Matters | Affected Section / Flag / Export Record | Consequence for Confidence | Required Follow-Up Source |
|---|---|---|---|---|---|
| GAP-001 | Proxy statement: board, committees, executive pay, related-party transactions, holders of 5% or more | Related-party leakage and board independence cannot be assessed | Governance register; ownership register; risk level | Medium impact: governance conclusion limited to the control structure | 2026 proxy statement |
| GAP-002 | Executed indentures and credit agreement | Capacity for restricted payments, debt and liens decides whether buybacks or priming are possible | Behavior flags; capital allocation; risk level | Medium impact: willingness cannot be separated from capacity | Executed documents |
| GAP-003 | Founders' voting share after 2025-12-31 | Control may be changing as Class B converts | Ownership register | Low impact: share-count estimate shown | Next proxy statement |
| GAP-004 | Management outlook | Operating trajectory beyond the reported periods is unsupported | Operating model | Low impact | Management guidance if given |
| GAP-005 | Direction of the USD 64 million settlement | Affects cash after the balance-sheet date | Events; flag FLAG-003 | Low impact | Fourth-quarter report |
| GAP-006 | Revenue by product category and customer concentration | Revenue durability cannot be tested for concentration | Revenue mix | Low impact | Issuer disclosure |

## Calculations

| Calculation ID | Calculation | Inputs | Result |
|---|---|---|---|
| C1 | Class B share of Class A and Class B shares outstanding at 2026-10-28 | 20,977,815 / (115,862,125 + 20,977,815) x 100 | 15.33% |
| C2 | Class B share of Class A and Class B shares outstanding at 2025-12-31 | 21,978,295 / (108,365,428 + 21,978,295) x 100 | 16.86% |
| C3 | Share of all votes carried by Class B at 2026-10-28 (ten votes per Class B share, one per Class A share) | 209,778,150 / (115,862,125 + 209,778,150) x 100 | 64.42% |
| C4 | Share of all votes carried by Class B at 2025-12-31 | 219,782,950 / (108,365,428 + 219,782,950) x 100 | 66.98% |
| C5 | Economic interest not held by the co-founders and their affiliates at 2025-12-31 | 100 - 18.3 | 81.7% |
| C6 | Voting power not held by the co-founders and their affiliates at 2025-12-31 | 100 - 67.4 | 32.6% |
| C7 | U.S. share of net revenue, FY2025 | 10,973 / 12,457 x 100 | 88.09% |
| C8 | International share of net revenue, FY2025 | 1,484 / 12,457 x 100 | 11.91% |
| C9 | U.S. share of net revenue, 9M 2026 | 8,777 / 9,870 x 100 | 88.93% |
| C10 | International share of net revenue, 9M 2026 | 1,093 / 9,870 x 100 | 11.07% |
| C11 | U.S. segment Adjusted EBITDA margin, 9M 2026 | 683 / 8,777 x 100 | 7.78% |
| C12 | International segment Adjusted EBITDA margin, 9M 2026 | -54 / 1,093 x 100 | -4.94% |
| C13 | U.S. segment Adjusted EBITDA margin, FY2025 | 762 / 10,973 x 100 | 6.94% |
| C14 | International segment Adjusted EBITDA margin, FY2025 | -19 / 1,484 x 100 | -1.28% |
| C15 | Accounts payable over inventories at 2026-09-30 | 1,213 / 89 | 13.63x |
| C16 | Increase in contract liabilities, 2025-12-31 to 2026-09-30 | 296 - 277 | 19 |
| C17 | Fall in total debt carrying value, 2025-12-31 to 2026-09-30 | 3,272 - 2,799 | 473 |
| C18 | Carrying value of the four senior secured note series at 2026-09-30 | 791 + 693 + 693 + 395 | 2,572 |
| C19 | Net change in operating assets and liabilities: 9M 2026 and 9M 2025, and the swing between them | (-36 - 18 - 70 + 188) and (33 + 7 + 18 - 134); 64 - (-76) | 64; -76; 140 |
| C20 | Change in average order value, Q3 2026 over Q3 2025 | (311 / 317 - 1) x 100 | -1.89% |
| C21 | Shares and cost repurchased in 9M 2026: cumulative at 2026-09-30 less cumulative at 2025-12-31 | 2,954,491 - 2,354,491; 672 - 612 | 600,000 shares; 60 |
| C22 | Capital expenditure FY2025: purchase of property and equipment plus site and software development costs | 70 + 135 | 205 |
| C23 | Capital expenditure over net revenue, FY2025 | 205 / 12,457 x 100 | 1.65% |
| C24 | Gross margin, Q3 2026 | 1,012 / 3,420 x 100 | 29.59% |
| C25 | Authorised repurchase amount remaining less cash and cash equivalents at 2026-09-30 | 1,028 - 1,038 | -10 |
| C26 | Remaining repurchase authority at 2026-09-30: programmes authorised less cost repurchased | 700 + 1,000 - 672 | 1,028 |

## Gaps

| Gap | Affected conclusion | Severity | Action that would close it | Source |
|---|---|---|---|---|
| Board composition, committees, executive pay, related-party transactions and holders of 5% or more are not supplied | Governance risk level and related-party leakage | Material | Supply the 2026 proxy statement | 10-K_2025-12-31_w-20251231.htm.jsonl, page 148 |
| The executed indentures and the credit agreement are not supplied | Willingness against capacity for buybacks, debt and liens | Material | Supply the executed documents | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 149–151; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 56 |
| The founders' voting share after 2025-12-31 is not stated | Control after the latest annual report | Minor | Read the next proxy statement | 10-K_2025-12-31_w-20251231.htm.jsonl, page 62; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 1 |
| No quantified management outlook | Operating momentum beyond 2026-09-30 | Minor | Supply guidance if given | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 4–5 |
| The direction of the USD 64 million settlement on 2026-10-28 is not stated | Cash after the balance-sheet date | Minor | Read the fourth-quarter report | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18 |
| Revenue by product category and customer concentration are not reported | Revenue durability | Minor | None needed unless disclosed | 10-K_2025-12-31_w-20251231.htm.jsonl, page 143 |
| The 2034 secured notes' lien priority against the revolver is not restated | Debt priority statements | Minor | Supply the 2034 indenture | 10-Q_2026-06-30_w-20260630.htm.jsonl, page 12 |

## Next module

The orchestrator selects the next module.

