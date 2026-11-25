# CP-2 Fundamental Credit Assessment

## Request

Issuer: DIEBOLD NIXDORF, Inc (dbd-28823); as of 2026-11-18. Pathway: credit_snapshot. Scope: synthesize the company’s fundamental credit profile, cash-flow durability, liquidity, refinancing capacity and principal downside through Q3 2026.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_dbd.htm.jsonl | Annual report on Form 10-K for the year ended 2024-12-31 | not stated | 82b5edab10f4f813e3b4d95a80c3c0627242d316b939ab218b16f3c218f9ccb2 | FY2024 baseline for revenue, cash flow and capital structure trend |
| 10-K_2025-12-31_dbd.htm.jsonl | Annual report on Form 10-K for the year ended 2025-12-31 | not stated | 7641f45f66e6bb590327958da55ee836901e6672d3c467b402d1e057797f6161 | Business model, geographic and customer mix, audited results, risk factors and secured debt terms |
| 10-Q_2026-03-31_dbd.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 | not stated | d14c4c75d7e7036511acdb3c6a1ea4f7aa72816ebd32ae181aeae1345a3423ed | Interim financial and operating trend cross-check |
| 10-Q_2026-06-30_dbd.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 | not stated | be3005fde030914c092675638e58083f5bd569aef809dd88176c99a5802b0b65 | Interim trend and balance-sheet cross-check |
| 10-Q_2026-09-30_dbd.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 | not stated | ab5fbb8597a516f00d41b9a42678d2893cbfb39f1cbb48bc07cfe58441998f87 | Latest financial statements, cash flow, debt and share purchases |
| EX99.1_2026-03-31_dbd_ex-991q12026erlive-htm.htm.jsonl | Q1 2026 earnings release | 2026-04-30 | 31eb72a7175324ebe8b5a1e57506fa026b597f82d76bb2705fcdbd13bda8c2b2 | Q1 performance and management commentary |
| EX99.1_2026-06-30_dbd_ex-991q22026erlive-htm.htm.jsonl | Q2 2026 earnings release | 2026-07-29 | f28d196c4cda0f5731b58f8f50ae61f75618bdc7f7a9578d744a2c5bdeb4869b | Q2 performance and management commentary |
| EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl | Q3 2026 earnings release | 2026-10-28 | 643961e5258f40afd65d75fdd4e39253686cdc5da0f39ecaf18145b33422072f | Q3 and nine-month segment performance, EBITDA, outlook and tax estimates |

### Upstream handoffs

| Module | sha256 | Use |
|---|---|---|
| CP-0 | 9dc4fbfc6e61f77f4a848de381e9d615a870d43d275b54db8df9d7dd2eb60fa7 | Source inventory, issuer perimeter and limitations |
| CP-1 | 099c13d20061a9ce5d7d73efa811221fcbf52e43a94d046ae21b37b02e8d4dd0 | Accepted financial statements, definitions, calculations and liquidity analysis |
| CP-1A | b66296737ee897f63eadbcf3ec4ef37da7aecf7f920b5d7b4855f7cd9b7dbc4c | Accepted business, ownership, governance and transaction facts |

## Findings

### Bottom line

Diebold Nixdorf’s service base and funded-debt maturities support creditor resilience, but weak cash conversion and continuing share repurchases are reducing liquidity flexibility. The key near-term test is whether working-capital cash use reverses before taxes and further discretionary capital returns consume the cash buffer.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–13, 17, 19, 25; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 1–3, 7; Financial foundation (CP-1)

### Key findings

- Revenue grew, but its mix shifted toward Retail: nine-month sales rose 4.3%, with Retail up 21.9% and Banking down 1.9% on the earnings-release presentation. Retail’s lower reported gross margin means growth can add scale while diluting margin if the gap persists.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 6–7, 16; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 8–9, 13; calculation C01; calculation C08

- Cash conversion weakened sharply: nine-month operating cash flow and free cash flow were negative USD 29.3 million and USD 68.5 million, respectively, after positive USD 83.2 million and USD 43.3 million in the prior-year period. Even excluding discrete taxes, the issuer’s free-cash-flow measure remained negative at USD 36.2 million.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–13; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 7; calculation C03

- Leverage increased mainly because cash fell, not because reported carrying debt surged: carrying-value net debt rose by USD 213.2 million from year-end 2025 to USD 764.4 million, and net leverage reached 2.33x. The company’s own USD 791.5 million net-debt figure uses gross debt before financing fees; the carrying-value measure is used here for leverage.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 11, 17; 10-K_2025-12-31_dbd.htm.jsonl, pages 54, 78; Financial foundation (CP-1); calculation C02

- Adjusted EBITDA is materially above reported EBITDA: the nine-month gap was USD 127.5 million, or 57.95% of reported EBITDA. Restructuring charges, the Turkey operation and an investment impairment account for major adjustments, so reported EBITDA is the more conservative base for leverage and cash-conversion analysis.
Basis: EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 8, 14–16; calculation C04

- The USD 454.8 million unrestricted cash and net committed availability buffer, alongside known revolver and note maturities in 2029 and 2030, reduces immediate refinancing pressure. It does not establish covenant headroom or the maturity of USD 26.4 million of unidentified other long-term debt.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18, 23; 10-K_2025-12-31_dbd.htm.jsonl, pages 78–80; calculation C05

### Contrary evidence and what would change the view

The negative cash flow is partly affected by inventory and tax timing, rather than a reported EBITDA collapse: cash flow before listed asset-and-liability movements was USD 145.3 million, and management still guides to positive FY2026 free cash flow. Service revenue, customer wins and the absence of a customer above 10% of FY2025 sales also support continuity. Evidence that inventory turns, collections and deferred revenue stabilize and that reported free cash flow recovers without continued large exclusions would improve the view; another period of cash use while repurchases continue would weaken it.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 5–10, 99; 10-Q_2026-09-30_dbd.htm.jsonl, pages 12, 15; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 2, 7; calculation C03; calculation C06

### Limitations

- The USD 26.4 million “Other” balance leaves this assessment’s maturity runway limited to the disclosed revolver and notes; an earlier due date could shorten the refinancing time described above.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18; 10-K_2025-12-31_dbd.htm.jsonl, pages 78–80
- The USD 454.8 million liquidity measure includes undrawn revolver capacity, but current covenant compliance and headroom are unavailable; the full calculated buffer therefore cannot be treated as contractually accessible under stress.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18, 23; calculation C05
- The service mix is not enough to establish a recurring cash floor without renewal and order-conversion evidence; this keeps the cash-flow durability conclusion weak despite the installed base.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 5–10, 99; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 2; calculation C07

### Credit view

Diebold Nixdorf has an adequate but weakening fundamental profile: global service operations and customer breadth support revenue visibility, while the latest cash conversion and shareholder returns weaken liquidity protection. Nine-month 2026 revenue rose 4.3%, but free cash flow was negative USD 68.5 million; carrying-value net leverage increased to 2.33x as cash declined. Unrestricted cash plus net revolver availability was USD 454.8 million, and the principal notes mature in 2030. This buffer and the absence of a near-term funded maturity mitigate immediate refinancing risk, but the unidentified other-debt maturity, unavailable covenant headroom and further capital returns constrain confidence. A recovery in working capital and positive full-year free cash flow are the main near-term credit tests.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–13, 17–18, 23; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 2, 7; calculation C01; calculation C02; calculation C03; calculation C05

The three changes below capture the main positive and negative signals; debt metrics use balance-sheet carrying value net of deferred financing fees, while EBITDA uses the issuer’s reported measure.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 11–13, 17; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 7–9, 13–15; calculation C02; calculation C03

| Driver | Latest / change | Credit implication | Source |
|---|---|---|---|
| Revenue and mix | 9M 2026 revenue USD 2,816.8 million, up 4.3%; Retail up 21.9%, Banking down 1.9% | Growth supports scale, but Retail’s 21.3% GAAP gross margin trails Banking’s 26.4% | 10-Q_2026-09-30_dbd.htm.jsonl, pages 6–7; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 8–9, 13 |
| Cash conversion and debt service | 9M 2026 free cash flow USD -68.5 million vs USD 43.3 million in 9M 2025; net debt increased USD 213.2 million; gross/net leverage 2.90x / 2.33x; cash-interest cover 4.27x | Working-capital recovery is central to preserving liquidity and preventing further leverage creep | 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–13, 17; calculation C02; calculation C03; calculation C12 |
| Liquidity and maturity | USD 454.8 million unrestricted liquidity; USD 950.0 million notes due March 2030; USD 310.0 million revolver due December 2029, undrawn | Current liquidity and maturity spacing reduce near-term pressure, subject to unknown covenant headroom and other-debt maturity | 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18, 23; 10-K_2025-12-31_dbd.htm.jsonl, pages 78–80; calculation C05 |

### Strengths and weaknesses

**Strength 1:** Services were 58.7% of nine-month sales; maintenance and integration activity supports the installed base, which can sustain revenue and cash receipts across equipment cycles, although contract duration and renewal rates are not supplied.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, page 12; calculation C07

**Strength 2:** No customer exceeded 10% of FY2025 sales and revenue spans Banking and Retail; this reduces single-customer dependence, though EMEA remains the majority region and segment demand is not equally profitable.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 5–10, 99

**Strength 3:** The completed refinancing established senior secured notes due in 2030 and an undrawn revolver due in 2029; the maturity profile provides time to recover cash generation, but market access and covenants remain untested.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 78–80; 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18

**Weakness 1:** Nine-month FCF was negative USD 68.5 million and the cash-flow statement showed USD 174.6 million of use from listed asset-and-liability changes; collections, inventory turns and tax timing therefore drive near-term debt-service liquidity.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–13; calculation C03; calculation C06

**Weakness 2:** Retail growth is occurring at a lower gross margin than Banking, while reported product margins are under memory-cost and mix pressure; continuing this mix shift can lower earnings before fixed costs and cash interest.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, page 4; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 8–9; calculation C09

**Weakness 3:** Share repurchases of USD 148.6 million in nine months and an additional USD 19.3 million after quarter-end were made alongside negative free cash flow; further execution would reduce the cash retained for operations and deleveraging.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 19, 25; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 1; calculation C03

The evidence does not establish an owner-driven strategy or covenant breach; the weaknesses describe issuer-level financial policy and operating cash flow only.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 5–10, 79–80, 99; 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–13, 17–19, 25; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 1–2, 7–9; calculation C03; calculation C05; calculation C07

### Company and operating model

The company sells automation hardware, software and related services to banks and retailers, including ATMs, cash recyclers, point-of-sale systems and self-checkout equipment. Its service and maintenance activities support the installed base, but the filings do not provide renewal rates, contract duration or customer switching data. FY2025 revenue originated mainly in EMEA, with the Americas as the second-largest region; this geographic spread and the lack of any customer above 10% reduce account concentration, while EMEA remains the largest regional exposure.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 5–10, 99; Business & governance (CP-1A)

Services made up 58.7% of nine-month sales, but product sales remained 41.3%; the business is therefore not insulated from equipment demand and delivery cycles. Retail sales increased 21.9% while Banking sales declined 1.9% on the earnings-release GAAP presentation. Reported nine-month Retail gross margin was 21.3% versus Banking at 26.4%; further Retail mix growth can lower the consolidated margin if that differential persists. The Q3 filing shows higher memory costs and an unfavorable regional and product mix pressuring product margin, partly offset by tariff recoveries and pricing actions.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 4, 16; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 8–9, 13; calculation C07; calculation C08

Segment reporting uses two presentation bases. The earnings release reports GAAP Banking and Retail margins of 26.4% and 21.3%; its non-GAAP segment view reports 26.7% and 24.3%, which matches the Q3 10-Q segment note. The release also reconciles GAAP Banking sales of USD 1,960.6 million to USD 1,950.5 million by removing USD 10.1 million of “Non-Core Turkey and other.” The mix analysis uses the earnings release’s GAAP figures and keeps the adjusted segment presentation separate.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, page 16; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 9, 13; calculation C08; calculation C09

### Ownership and group structure

The issuer is a public Delaware corporation with common stock listed on the NYSE. A restructuring replaced the predecessor equity base and introduced fresh-start accounting; current beneficial-owner percentages, sponsor identity, board rights and support commitments are not established in the supplied filings. The issuer also holds minority equity-method interests in two strategic Chinese joint ventures, with disclosed ordinary-course affiliate balances at year-end 2025. For creditors, listed status and regular filings support monitoring, but the absent proxy detail and legal documents prevent an ownership-alignment or structural-subordination conclusion.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 1–2, 63–66, 105; Business & governance (CP-1A)

### Revenue, cost and cash-flow durability

Reported revenue growth and the service mix provide some cash-flow visibility, but the absence of contract backlog, renewal and price-pass-through data prevents treating services as fully recurring. Banking demand remains exposed to bank investment cycles and substitution away from cash; Retail growth depends on customer rollouts and store spending. No customer above 10% of annual sales limits single-name concentration, yet it does not establish switching costs or pricing power.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 4–10, 99; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 2

Margin protection is mixed. Nine-month product margin fell as memory costs and mix shifted against the company; customer pricing and tariff recoveries partially offset these pressures. Service margin improved with VAT credits and operating execution; the filings do not establish that VAT credits recur or contractually pass through input costs. The business has investment needs for software and service-fleet modernization, and the filings do not split maintenance from growth spending or fixed from variable costs. This limits the assumed cost cushion under a volume decline.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 4, 12, 16; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 8–9

Nine-month operating cash flow was negative USD 29.3 million, with free cash flow negative USD 68.5 million including discrete taxes; excluding discrete taxes, the issuer’s FCF measure was still negative USD 36.2 million. The cash-flow statement attributes use to inventory, tax and other working-capital movements. Deferred revenue also declined to USD 254.1 million from USD 325.8 million at year-end, reducing customer-funded operating float. Thus EBITDA does not currently translate into reliable debt-service cash without working-capital recovery. No factoring or supplier-finance program is identified in the reviewed filings.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–15; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 7; calculation C03

### Business risk frameworks

Competitive rivalry is credit-relevant because the issuer identifies pricing pressure and new competitors as risks; weaker pricing combined with elevated component costs can compress product margins and reduce cash available for debt service. New entry is less assessable: the company’s product, software and field-service footprint indicates execution requirements, but the filings do not provide market shares or entry economics to measure barriers. Substitution away from cash is a direct threat to ATM usage and Banking hardware demand. Buyer concentration is moderated by the absence of a customer above 10% of sales, but contract terms and renewal rates are unavailable. Supplier power is visible in elevated memory costs; tariff recoveries and pricing actions offset part, not all, of the pressure.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 4, 14–17, 99; 10-Q_2026-09-30_dbd.htm.jsonl, page 4; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 8–9

Political and economic factors are material because the issuer identifies tariff changes, geopolitical disruption, currency movements, inflation, and cyclical bank and retailer spending as risks. Tariffs and memory costs can raise product cost, while cash displacement and weak customer capex can reduce Banking demand; both pathways pressure margins and FCF. Cybersecurity and privacy regulation can interrupt service delivery or increase compliance expense, although no event loss is quantified in the filings.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 4, 14–17

The credit-translated SWOT is concise: strengths are the service base, customer breadth and 2029–2030 funded-debt maturities; weaknesses are weak cash conversion, lower-margin Retail mix growth and material adjusted-EBITDA exclusions. Retail wins, service agreements and fleet modernization are possible improvements only if delivered and collected. Threats include cash substitution, component inflation, tariff changes, working-capital outflows and discretionary repurchases competing for liquidity.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 4–10, 99; 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–19, 25; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 1–3, 7–9

### Financial profile and outlook

Scale and product breadth provide a material operating base, and customer and regional disclosures indicate some diversification; no market-share or peer data supports a sector ranking. Competitive advantage is supported by the installed service base and breadth of equipment and software, but stickiness and price pass-through are not measured. Cost flexibility and margin stability are constrained by product cost inflation, lower-margin Retail growth and unavailable cost-behavior detail. Free-cash-flow stability is weak on the latest nine-month evidence. Liquidity is meaningful at the current date but is being consumed by cash-flow deficits, tax payments and repurchases. Refinancing capacity benefits from the completed refinancing and a 2030 note maturity, while the 2029 revolver, capital-market access and USD 26.4 million unidentified debt remain relevant. Financial policy is creditor-negative when repurchases exceed internally generated cash; current control and covenant capacity are not assessable.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 5–10, 78–80, 99, 105; 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–19, 23–25; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 1–3, 7–9, 14–16; calculation C02; calculation C03; calculation C05

Over the next 12-24 months, management’s reduced FY2026 guidance for revenue, adjusted EBITDA and free cash flow makes recovery dependent on Q4 delivery, collections and tax timing. Across 3-5 years, Retail rollouts, service work and product execution could support demand, but order conversion and margin returns remain unquantified. Credit performance therefore hinges on execution and cash recovery, not a confirmed long-term growth run-rate.
Basis: EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 2–3, 7

Near-term performance depends on converting the reduced FY2026 outlook into cash; the longer-term opportunity remains conditional on delivering and collecting service and product growth.
Basis: EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 2–3, 7; 10-K_2025-12-31_dbd.htm.jsonl, pages 5–10

| Outlook horizon | Assessment | Creditor consequence | Source |
|---|---|---|---|
| 12-24 months | FY2026 revenue USD 3.86–3.90 billion, adjusted EBITDA USD 490–510 million and FCF USD 190–210 million; positive full-year FCF requires Q4 delivery and cash collection after negative 9M FCF | Failure to recover would sustain cash use and keep liquidity and leverage under pressure | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.jsonl, pages 2–3, 7 |
| 3-5 years | Service activity and Retail rollouts may support demand, but order conversion, contract duration and margin returns are not quantified | Revenue visibility improves only if activity becomes durable, adequately margined cash receipts | 10-K_2025-12-31_dbd.htm.jsonl, pages 5–10; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.jsonl, page 2 |

### Downside scenario

If memory costs remain elevated and bank customers defer equipment spending while Retail growth shifts further toward lower-margin products, Banking revenue and product gross profit would weaken first. Lower volume and unfavorable mix would pressure segment margins; fixed operating costs and service-fleet investment would then limit EBITDA-to-cash conversion. If inventory and tax cash use persist while deferred revenue declines, free cash flow could remain negative and further reduce cash. Continued repurchases would add to that draw, increasing revolver usage and net leverage; a smaller liquidity buffer would make the 2029 revolver refinancing and 2030 notes more sensitive to market access. Management can slow repurchases, manage inventory and collections, defer discretionary investment, and complete the stated non-core exits, but the filings do not quantify available savings, exit proceeds or covenant capacity. Current liquidity and the known maturity profile mitigate immediate pressure; the other-debt maturity remains unidentified, and the evidence is not sufficient to conclude that the company could absorb a prolonged downside without liquidity stress.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 4, 14–17, 78–80; 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–19, 23, 25; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 1–3, 7–9, 14; calculation C03; calculation C05

### Primary downside path

The primary downside path is persistent inventory, tax and collection cash use combined with continued buybacks, which would drain the cash buffer, increase revolver reliance and weaken refinancing flexibility before the 2029–2030 maturities.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–13, 17–19, 23, 25; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 1–3, 7

### Overall credit view

Overall, Diebold Nixdorf presents an adequate business profile supported by a global service base, customer breadth and a funded maturity profile extending to 2029–2030, but credit quality is constrained by weak cash conversion, working-capital volatility, lower-margin mix and discretionary repurchases. Cash-flow durability is weak on the latest nine-month evidence because operating cash flow and FCF were negative even after excluding discrete taxes from the issuer’s FCF measure. Refinancing capacity will depend on cash recovery, capital-market access and the company’s willingness to retain liquidity. The primary downside path is continued working-capital cash use alongside further capital returns. A more definitive view requires current covenant calculations, the terms and maturity of other debt, current beneficial ownership and evidence on contract renewals and order conversion. No peer data supports a sector-relative ranking.
Basis: 10-K_2025-12-31_dbd.htm.jsonl, pages 5–10, 78–80, 99, 105; 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–19, 23–25; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 1–3, 7–9; calculation C03; calculation C05

### Map: credit-risk transmission

The map traces how service activity and the funded maturity schedule support continuity, while margin pressure, working-capital use and repurchases can weaken liquidity and refinancing flexibility.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, pages 4, 9–13, 17–19, 23, 25; 10-K_2025-12-31_dbd.htm.jsonl, pages 78–80; calculation C03; calculation C05; calculation C07

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Services revenue | Supports installed-fleet work and customer continuity | Documentary Fact | Revenue visibility | 10-Q_2026-09-30_dbd.htm.jsonl, page 12 |
| Banking product demand | Cash substitution can reduce ATM investment | Management Language | Revenue and margin pressure | 10-K_2025-12-31_dbd.htm.jsonl, pages 4, 14–17 |
| Memory costs and mix | Increase product costs and reduce gross margin | Documentary Fact | Lower cash earnings | 10-Q_2026-09-30_dbd.htm.jsonl, page 4 |
| Inventory, tax and collection use | Consume operating cash and reduce liquidity | Documentary Fact | Higher revolver reliance | 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–13 |
| Share repurchases | Use cash while FCF is negative | Documentary Fact | Less liquidity for debt service | 10-Q_2026-09-30_dbd.htm.jsonl, pages 19, 25 |
| Cash recovery and no near-term maturities | Support current refinancing flexibility | Analyst Interpretation | Lower near-term refinancing pressure | 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18, 23 |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 31 |
| Calculated | 8 |
| Assumption-Based | 0 |
| Analyst Inference | 9 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 6 |
| Fields present | 30 |
| Fields total | 30 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 2 |

### Analytical appendix — complete canonical registers

<!-- table-id: T2.1 -->
### T2.1 Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| DBD-S01 | 10-K_2024-12-31_dbd.htm.jsonl | High | FY2024 | Diebold Nixdorf, Incorporated and consolidated subsidiaries | Audited financial baseline and historical restructuring/debt context | Successor reporting period; predecessor values are not directly comparable | Historical financial trend and leverage context |
| DBD-S02 | 10-K_2025-12-31_dbd.htm.jsonl | High | FY2025 and FY2024 | Diebold Nixdorf, Incorporated and consolidated subsidiaries | Business model, geography, customer concentration, audited financials, debt terms and risk disclosures | Current owner schedule and executed debt agreements are not reproduced | Credit profile, refinancing and risk assessment |
| DBD-S03 | 10-Q_2026-03-31_dbd.htm.jsonl | High | Q1 2026 | Diebold Nixdorf, Incorporated and consolidated subsidiaries | Q1 statements and interim developments | Interim period; no current beneficial-owner or covenant certificate detail | Period trend cross-check |
| DBD-S04 | 10-Q_2026-06-30_dbd.htm.jsonl | High | Q2 2026 | Diebold Nixdorf, Incorporated and consolidated subsidiaries | Q2 statements, cash flow and interim developments | Interim period; no covenant calculation or current ownership schedule | Period trend cross-check |
| DBD-S05 | 10-Q_2026-09-30_dbd.htm.jsonl | High | Q3 2026 and 9M 2026 | Diebold Nixdorf, Incorporated and consolidated subsidiaries | Latest financial position, cash flow, debt, share purchases and disclosure controls | USD 26.4 million other long-term debt has no stated instrument or maturity | Current financial and liquidity assessment |
| DBD-S06 | EX99.1_2026-03-31_dbd_ex-991q12026erlive-htm.htm.jsonl | Medium | Q1 2026 | Diebold Nixdorf and subsidiaries | Q1 performance and management commentary | Forward-looking statements are not realized outcomes | Operating trend context |
| DBD-S07 | EX99.1_2026-06-30_dbd_ex-991q22026erlive-htm.htm.jsonl | Medium | Q2 2026 | Diebold Nixdorf and subsidiaries | Q2 performance, outlook and tax commentary | Forward-looking statements are not realized outcomes | Operating trend context |
| DBD-S08 | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl | Medium | Q3 2026 and 9M 2026 | Diebold Nixdorf and subsidiaries | Segment trends, adjusted EBITDA, revised guidance and tax estimates | Management guidance and non-GAAP measures are not cash-flow guarantees | Current operating outlook and margin analysis |

Module Status: Ready with Limitations. The filings support a fundamental credit view, but covenant headroom, other-debt terms, current ownership, peer positioning and contract-level revenue durability are not established.

<!-- table-id: T2.10 -->
### T2.10 Materiality filter

| Rank | Driver | Evidence | Risk Mechanic | Credit Implication | Direction | Confidence |
|---:|---|---|---|---|---|---|
| 4 | Service revenue and customer breadth | Services were 58.7% of 9M sales; no FY2025 customer exceeded 10% of sales; DBD-S02 pages 5–10, 99; DBD-S05 page 12 | Installed-fleet work and lower single-customer concentration support revenue continuity; renewals remain unquantified | Supports cash-flow visibility and reduces single-account demand risk | Positive | Medium |
| 5 | 2029–2030 funded maturity profile | USD 310.0 million revolver undrawn at Q3 and due 2029-12-18; USD 950.0 million notes mature 2030-03-31; USD 26.4 million other debt has no stated maturity; DBD-S02 pages 78–80; DBD-S05 pages 17–18 | The known facilities mature in 2029 and 2030, while other debt timing remains unknown | Reduces immediate refinancing pressure for known facilities, subject to market access and unidentified other debt | Positive | High |
| 6 | Nine-month consolidated sales growth and order activity | 9M 2026 revenue grew 4.3%; Retail grew 21.9%; Q3 release reports new Banking and Retail wins; DBD-S08 pages 2, 8–9, 13 | Growth supports scale, but lower Retail margin and unquantified order conversion can limit cash contribution | Supports revenue and earnings potential if deliveries convert at adequate margins | Positive | Medium |
| 1 | Negative cash conversion and working-capital use | 9M 2026 OCF USD -29.3 million and FCF USD -68.5 million; listed asset/liability changes used USD 174.6 million; DBD-S05 pages 9–13 | Continued inventory, tax and collection cash use reduces cash and increases debt reliance | Weakens liquidity, net leverage and debt-service resilience | Negative | High |
| 2 | Share repurchases during cash-flow deficit | USD 148.6 million program purchases in 9M 2026; USD 19.3 million after quarter-end; new USD 250 million authorization; DBD-S05 pages 19, 25; DBD-S08 page 1 | Cash returned to shareholders is unavailable for operating needs, capex or debt reduction | Further execution could dilute liquidity before cash conversion recovers | Negative | High |
| 3 | Product margin pressure and adjusted-earnings gap | 9M product margin fell 140 bp; Retail gross margin 21.3% vs Banking 26.4%; adjusted EBITDA exceeded reported EBITDA by USD 127.5 million; DBD-S05 page 4; DBD-S08 pages 8–9, 14–16 | Cost inflation, adverse mix and sizable exclusions can make cash earnings less durable than adjusted EBITDA implies | Limits confidence in leverage capacity and refinancing resilience | Negative | High |

<!-- table-id: T2.12 -->
### T2.12 Monitoring triggers

| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |
|---|---|---|---|---|
| Revenue decline | Quantitative threshold not available in provided materials. Track consolidated revenue and Banking/Retail trend against the 9M 2026 baseline | Banking weakness or reversal of Retail growth would reduce scale and asset utilization | Weaker EBITDA and debt-service capacity | 10-Q_2026-09-30_dbd.htm.jsonl, pages 6–7, 16; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 8–9, 13 |
| EBITDA margin pressure | Quantitative threshold not available in provided materials. Track reported EBITDA and gross margin by product and service | Product costs and mix can overwhelm pricing and service-margin gains | Lower cash earnings and leverage cushion | 10-Q_2026-09-30_dbd.htm.jsonl, page 4; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 8–9, 14 |
| FCF deterioration | Quantitative threshold not available in provided materials. Compare quarterly FCF with the company’s FY2026 guidance of USD 190–210 million and monitor working capital and taxes | Failure to recover after negative 9M FCF would sustain cash use | Less liquidity for debt service and refinancing preparation | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 2–3, 7; no interim threshold supplied |
| Liquidity reduction | Quantitative threshold not available in provided materials. Track unrestricted cash plus net revolver availability from USD 454.8 million | Cash draw or LC growth reduces capacity to absorb working-capital swings | Greater revolver dependence and market sensitivity | 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18, 23; no minimum liquidity covenant supplied |
| Leverage increase | Quantitative threshold not available in provided materials. Track carrying-value net leverage from 2.33x and reconcile debt, cash and reported EBITDA each quarter | Cash depletion can raise net leverage even if gross debt is stable | Reduces refinancing headroom and tolerance for earnings shocks | 10-Q_2026-09-30_dbd.htm.jsonl, pages 11, 17; Financial foundation (CP-1); no leverage threshold supplied |
| Refinancing delay | Quantitative threshold not available in provided materials. Monitor preparation for the revolver maturity on 2029-12-18 and note maturity on 2030-03-31 | Market access and execution can deteriorate before contractual maturity | Could increase refinancing cost or liquidity pressure | 10-K_2025-12-31_dbd.htm.jsonl, pages 78–80; 10-Q_2026-09-30_dbd.htm.jsonl, pages 17–18 |
| Sponsor/shareholder action | Quantitative threshold not available in provided materials. Track actual repurchase execution against cash flow and the USD 250 million authorization; current sponsor identity is not established | Discretionary returns can use cash without improving debt capacity | Reduces liquidity retained for creditors; do not attribute behavior to an unidentified sponsor | 10-Q_2026-09-30_dbd.htm.jsonl, page 25; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 1 |
| Sector deterioration | Quantitative threshold not available in provided materials. Monitor Banking capex, cash usage, memory cost, supplier availability and tariff recovery | Demand substitution and component inflation can pressure both volume and margin | Weaker FCF can accelerate leverage and refinancing risk | 10-K_2025-12-31_dbd.htm.jsonl, pages 4, 14–17; 10-Q_2026-09-30_dbd.htm.jsonl, page 4 |

<!-- table-id: cp2.cp_model_strengths_weaknesses -->
### cp2.cp_model_strengths_weaknesses

| direction | rank | label | mechanism | evidence_ids | status | source_id | source_locator | as_of |
|---|---:|---|---|---|---|---|---|---|
| STRENGTH | 1 | Service revenue base | Services support installed-fleet activity and revenue continuity, though renewal rates are not disclosed. | C07 | READY | DBD-S05 | page 12 | 2026-11-18 |
| STRENGTH | 2 | Customer breadth | No customer exceeded 10% of FY2025 sales, limiting single-account concentration. | DBD-S02 | READY | DBD-S02 | page 99 | 2026-11-18 |
| STRENGTH | 3 | Funded maturity runway | Notes due in 2030 and an undrawn revolver due in 2029 reduce immediate funded maturity pressure. | DBD-S02; DBD-S05 | READY | DBD-S05 | pages 17–18 | 2026-11-18 |
| WEAKNESS | 1 | Weak cash conversion | Negative 9M FCF and working-capital use consume liquidity and increase reliance on cash balances or the revolver. | C03; C06 | READY | DBD-S05 | pages 9–13 | 2026-11-18 |
| WEAKNESS | 2 | Discretionary capital returns | Repurchases during negative FCF reduce cash available for working capital, investment and debt reduction. | DBD-S05; DBD-S08 | READY | DBD-S05 | pages 19, 25 | 2026-11-18 |
| WEAKNESS | 3 | Earnings and margin quality | Lower-margin Retail growth, product-cost pressure and sizeable EBITDA adjustments constrain cash earnings and leverage confidence. | C04; C08 | READY | DBD-S08 | pages 8–9, 14–16 | 2026-11-18 |

## Calculations

| ID | Formula and inputs | Result | Source / locator |
|---|---|---:|---|
| C01 | 9M 2026 revenue growth = (USD 2,816.8 million / USD 2,701.5 million) - 1 | 4.3% | 10-Q_2026-09-30_dbd.htm.jsonl, pages 6–7 |
| C02 | Carrying net debt = carrying debt USD 949.3 million - reported cash USD 184.9 million; change vs 12/31/2025 = USD 764.4 million - USD 551.2 million; gross leverage = USD 949.3 million / reported LTM EBITDA USD 327.5 million; net leverage = USD 764.4 million / reported LTM EBITDA USD 327.5 million; issuer net debt = debt-instrument amount USD 976.4 million - cash USD 184.9 million | Carrying net debt USD 764.4 million; increase USD 213.2 million; gross/net leverage 2.90x / 2.33x; issuer net debt USD 791.5 million; gross-to-carrying difference USD 27.1 million | 10-Q_2026-09-30_dbd.htm.jsonl, pages 11, 17; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 16; 10-K_2025-12-31_dbd.htm.jsonl, pages 54, 78; Financial foundation (CP-1) |
| C03 | 9M 2026 FCF = OCF - physical capex - capitalized software = USD -29.3 million - USD 19.0 million - USD 20.2 million; 9M 2025 = USD 83.2 million - USD 22.6 million - USD 17.3 million; 9M 2026 issuer FCF excluding USD 32.3 million discrete taxes = USD -68.5 million + USD 32.3 million | USD -68.5 million vs USD 43.3 million; excluding discrete taxes USD -36.2 million | 10-Q_2026-09-30_dbd.htm.jsonl, pages 9–13; EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 7 |
| C04 | 9M adjusted EBITDA premium = USD 347.5 million - reported EBITDA USD 220.0 million; compare with prior-year reported EBITDA USD 218.4 million; premium / reported EBITDA = USD 127.5 million / USD 220.0 million | USD 127.5 million; 57.95%; reported EBITDA increased USD 1.6 million year over year | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 14–15 |
| C05 | Unrestricted cash plus net committed revolver = (USD 184.9 million cash - USD 15.9 million restricted cash) + (USD 310.0 million commitment - USD 24.2 million letters of credit) | USD 454.8 million | 10-Q_2026-09-30_dbd.htm.jsonl, pages 11, 17–18, 23 |
| C06 | 9M 2026 OCF before listed asset/liability changes = reported OCF USD -29.3 million - listed changes effect USD -174.6 million | USD 145.3 million | 10-Q_2026-09-30_dbd.htm.jsonl, page 12 |
| C07 | Service mix = services revenue USD 1,654.2 million / consolidated revenue USD 2,816.8 million; product mix = products USD 1,162.6 million / consolidated revenue USD 2,816.8 million | Services 58.7%; products 41.3% | 10-Q_2026-09-30_dbd.htm.jsonl, page 12 |
| C08 | Earnings-release Banking GAAP net sales USD 1,960.6 million - “Non-Core Turkey and other” adjustment USD 10.1 million = USD 1,950.5 million reportable segment sales in the Q3 10-Q | USD 10.1 million bridge; reportable Banking sales USD 1,950.5 million | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 13; 10-Q_2026-09-30_dbd.htm.jsonl, page 16 |
| C09 | Gross-margin basis reconciliation: Q3 release GAAP Banking/Retail margins are 26.4% / 21.3%; its non-GAAP margins are 26.7% / 24.3%, matching the Q3 10-Q reportable segment note | GAAP and adjusted segment margins retained as separate bases | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 9, 13; 10-Q_2026-09-30_dbd.htm.jsonl, page 16 |
| C10 | FY2026 outlook revisions: revenue USD 3.86–3.94 billion to USD 3.86–3.90 billion; adjusted EBITDA USD 510–535 million to USD 490–510 million; FCF USD 255–270 million to USD 190–210 million | Current guidance ranges are lower for the upper-end revenue case, adjusted EBITDA and FCF | EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, page 2 |
| C11 | Deferred revenue change = Q3 2026 balance USD 254.1 million - FY2025 balance USD 325.8 million | Decrease USD 71.7 million | 10-Q_2026-09-30_dbd.htm.jsonl, pages 11, 15 |
| C12 | LTM cash-interest cover = reported LTM EBITDA USD 327.5 million / cash interest paid USD 76.7 million | 4.27x | 10-K_2025-12-31_dbd.htm.jsonl, pages 55–56; 10-Q_2026-09-30_dbd.htm.jsonl, page 13; Financial foundation (CP-1) |

## Gaps

- The October repurchase disclosure is not accompanied by a refreshed cash balance, so the September liquidity calculation cannot be represented as a current post-event buffer.
Basis: 10-Q_2026-09-30_dbd.htm.jsonl, page 25
- The full-year free-cash-flow guidance is not phased by quarter; the amount of Q4 cash generation required to achieve it cannot be benchmarked from the supplied outlook.
Basis: EX99.1_2026-09-30_dbd_ex-991q32026erlive-htm.htm.jsonl, pages 2–3, 7
- No peer or market-share dataset is included, so the business-profile conclusion is absolute and cannot be ranked against typical leveraged-credit issuers in this sector.

## Next module

The orchestrator selects the next module.
