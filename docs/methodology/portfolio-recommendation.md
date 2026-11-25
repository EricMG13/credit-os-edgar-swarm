# Portfolio recommendation methodology

How the app arrives at the recommendation it proposes for an issuer in each portfolio, written so
an analyst can check any proposal by hand.

Status: approved by the owner on 2026-11-25 with the design it belongs to
(`docs/rulings/2026-11-25-deliverables-and-recommendations.md`). Not built yet: no code computes
any of this today. Where this document and the ruling differ, the ruling governs.

## 1. Bottom line

- A recommendation is proposed from two scores: a Credit Score for the issuer and a Valuation
  score for the issuer's best eligible instrument in that portfolio.
- The credit analysis scores 17 rubric factors from 1 to 5, each with a one-line basis. Everything
  after that is fixed arithmetic and table lookup: no judgement is added downstream.
- Every recommendation is shown as proposed until the analyst confirms it in the Credit Snapshot
  workbook. The analyst can change any score or recommendation.

## 2. The three scales

Lower is better on all three.

| Level | Credit Score | Valuation | Recommendation |
| ---: | --- | --- | --- |
| 1 | Strong | Very attractive | Strong OW |
| 2 | Good | not named in the approved design | Modest OW |
| 3 | Fair | not named in the approved design | MW |
| 4 | Weak | not named in the approved design | Modest UW |
| 5 | Stressed | Very unattractive | Strong UW |

OW, MW and UW are overweight, market weight and underweight. The rubric factors use a fourth set
of level names (section 3); the Credit Score names above apply to the rolled-up score only.

## 3. The Risk Rubric: 17 factors

Level text transcribed from the owner's Risk Rubric (owner image, 2026-11-25) as recorded in
section 9 of `docs/superpowers/specs/2026-11-25-deliverables-credit-snapshot.md`. Levels:
1 Excellent, 2 Strong, 3 Satisfactory, 4 Weak, 5 Poor. The image has no row labels: the factor
names are the coordinating session's reading, confirmed by the owner. The rubric's Probability of
default row is dropped by ruling R9.

| # | Factor | 1 Excellent | 2 Strong | 3 Satisfactory | 4 Weak | 5 Poor |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | Scale | EBITDA > $1bn — large, diversified issuer with global reach | $500m–$1bn — strong mid-cap with solid market presence | $200m–$500m — medium-sized, regionally focused | $100m–$200m — small-scale, limited diversification | < $100m — niche or subscale, vulnerable to shocks |
| 2 | Market position | Market leader with strong pricing power and durable brand | Top-tier competitor with moderate pricing power | Mid-tier competitor in fragmented industry | Weak player in highly competitive or commoditized sector | Marginal operator with limited market relevance |
| 3 | Regulatory exposure | Minimal regulatory exposure; stable framework | Moderate oversight, but manageable compliance burden | Some exposure to evolving regulation; minor compliance risk | High regulatory sensitivity (e.g., pharma, healthcare, finance) | Significant compliance or litigation risk; ongoing investigations |
| 4 | Technology | Tech leader or innovator; disrupts peers | Competitive adopter; technology embedded in strategy | Average tech positioning; not at risk near-term | Lagging digital adoption; facing disruptive pressures | Obsolete tech; business model threatened by innovation |
| 5 | Barriers to entry | Very high barriers (capital intensity, IP, regulation) | High barriers (brand, relationships, economies of scale) | Moderate barriers (cost efficiencies, know-how) | Low barriers (few obstacles to entry) | None (high churn, perfect competition) |
| 6 | Leverage | Low leverage (<3x), conservative structure | Moderate leverage (3–4x), ample headroom | Elevated leverage (4–5x), stable but stretched | High leverage (>5x), limited covenant cushion | Very high leverage (>6x), fragile structure or covenant breach risk |
| 7 | Free cash flow | Strong, consistent FCF >10% of revenue | Solid FCF, positive through cycle | Modest FCF, positive in stable years only | Weak FCF, negative under mild stress | Persistent negative FCF, reliant on external financing |
| 8 | Liquidity | Cash & RCF comfortably cover 2+ years' obligations | Sufficient to cover 12–24 months | Adequate for 6–12 months | Tight liquidity; dependent on revolver draw | Insufficient liquidity; default risk within 12 months |
| 9 | Rating trend | Stable rating trend, strong outlook | Limited downgrade risk, stable fundamentals | Balanced risk of upgrade/downgrade | Negative outlook or on watch | Repeated downgrades or imminent distress |
| 10 | Geographic diversification | Operations in >3 continents; diversified customer base globally | 2–3 major regions, with one contributing 40–50% of revenue | Majority (>60%) of revenues from one region, limited operations elsewhere | >80% of revenue from one country; minimal cross-border sales | 100% single country operations |
| 11 | Product diversification | Multiple independent revenue streams across end-markets | 1–2 products/services contribute 30–50% of sales | 1 main product/service contributes 60–70% of sales | 1–2 products/services contribute >80% of sales | 100% of revenues derived from one product/service |
| 12 | Market share | Dominant market leader (>30%) | Top 3 competitor | Mid-tier, <10% share | Small player, <5% share | Marginal presence or niche operator |
| 13 | Customer concentration | Highly diversified; no customer >5% of sales | Some concentration; top 3 <20% total | Moderate; top 3 <35% total | High; top 3 >50% total | Extreme; one client >50% total |
| 14 | Market access | Frequent issuer; broad investor base | Regular market access; well-followed credit | Occasional issuer; depends on market conditions | Limited access; small or private placement only | No market access; dependent on sponsor or bank support |
| 15 | Maturity profile | No maturities <3 years | Small near-term maturities, easily manageable | Moderate maturities, likely refinanced | Large maturities requiring market access | Refinancing wall imminent or missed maturity |
| 16 | Interest cover | EBITDA/Interest >4.0x | 3.0–4.0x | 2.0–3.0x | 1.0–2.0x | <1.0x (interest not covered) |
| 17 | Financial policy | Conservative and creditor-friendly. Net leverage <2.5x; stable policy. | Moderately conservative. Leverage <3.5x; disciplined management. | Neutral or balanced policy. Leverage 3.5–4.5x; some shareholder bias. | Aggressive policy. Frequent debt-funded actions. | Highly aggressive / equity-focused. Covenant breaches; distressed history. |

Gaps in the rubric as written, open for the owner:

- Leverage: no level is written for 5–6x, between level 4 (">5x") and level 5 (">6x"). The approved
  design reads 5–6x as level 4.
- Market share: no level is written for a 10–30% share outside the top three.

How a factor is scored: the credit analysis picks the level whose text fits the issuer's evidence
and writes one line saying why. A factor with no evidence is left unscored and listed as a gap; it
is never given a middle score by default.

## 4. Credit Score roll-up

1. Take the factors that were scored. If fewer than 12 of the 17 are scored, there is no Credit
   Score, and so no proposed recommendation.
2. Take their equal-weight mean.
3. Round to a whole level; an exact half rounds toward the weaker score (2.5 becomes 3).
4. Floor: if Liquidity or Maturity profile is scored 5, the Credit Score is no better than 4.

Example: 15 factors scored, sum 39, mean 2.6, Credit Score 3 (Fair). If Liquidity were one of
them at 5, the Credit Score would be 4 (Weak).

## 5. Valuation score

Scored per instrument, against the instruments of the same rating bucket in that portfolio's
reference (section 8). Loans are compared by discount margin, bonds by spread. The measure is the
instrument's level less the bucket's median, in basis points; wider than the median is more
attractive.

| Instrument less bucket median | Valuation |
| --- | ---: |
| +100 bp or more | 1 |
| +40 to +100 bp | 2 |
| within ±40 bp | 3 |
| −40 to −100 bp | 4 |
| −100 bp or less | 5 |

- A portfolio's Valuation is that of its best eligible instrument (the lowest score).
- With no price, or a bucket of fewer than five names, Valuation is left blank for the analyst and
  no recommendation is proposed until it is filled.
- Open: the approved bands do not say whether a difference of exactly +40 bp or −40 bp is a 3 or
  the neighbouring band. This is to be settled before the calculation is built.

## 6. The 5×5 table

The proposed recommendation is read from this table: row by Credit Score, column by Valuation.

| Credit ↓ / Valuation → | 1 | 2 | 3 | 4 | 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| 1 Strong | 1 | 2 | 2 | 3 | 3 |
| 2 Good | 2 | 2 | 3 | 3 | 4 |
| 3 Fair | 2 | 3 | 3 | 4 | 4 |
| 4 Weak | 3 | 3 | 4 | 4 | 5 |
| 5 Stressed | 3 | 4 | 4 | 5 | 5 |

The rule behind it: the average of the two scores, an exact half rounded toward the weaker score;
a 5 on either axis can be no better than 3. The table is what was approved and is what applies.

## 7. Reading by portfolio, and limit caps

Each portfolio gets its own recommendation, because portfolios differ in the instruments they can
hold, the reference they are measured against and their limits.

- No eligible instrument for a portfolio: that portfolio shows "n/a".
- Limit cap: if adding the name would breach one of that portfolio's supplied limits (sector,
  rating bucket, CCC, price floor), the recommendation there is no better than 3 (MW), and the
  limit is named beside it. A 4 or 5 from the table is unchanged.
- The issuer's current weight in the portfolio or index is shown beside the recommendation.
- A custom portfolio supplied when the run is started gets its own column by the same rules.
- Each instrument in the capital structure also carries its own recommendation for the analyst to
  set.

## 8. Reference data and as-of dates

| Portfolio | Reference | Source |
| --- | --- | --- |
| CLO | The CLO book: holdings, constraints and mandate | Files the analyst supplies (`holdings.csv`, constraints, mandate) |
| Loan index | SSGA LVLN daily holdings | Fetched by the app, or a file the analyst supplies |
| High-yield index | SSGA JNK daily holdings | Fetched by the app, or a file the analyst supplies |
| Custom | Any portfolio the analyst supplies when starting the run | Analyst's file |

Each reference is stored with its as-of date, and that date is printed on the workbook beside the
figures that use it. A Valuation is only as current as its reference file and the prices supplied.

## 9. Proposed and confirmed

- The app proposes; the analyst confirms. Each recommendation carries a "proposed" tag until the
  analyst sets the confirm cell in the workbook. The analyst's name and the confirmation date are
  analyst cells and are blank when the file is downloaded.
- The workbook's Matrix sheet holds this rubric, the valuation bands and the 5×5 table. The
  Snapshot's recommendation cells look up into it, so an analyst's edit to a score re-derives the
  proposal in Excel.
- The app records no confirmation: a confirmed recommendation exists only in the analyst's copy of
  the workbook.

## 10. Limitations

- Not built and not tested: no proposal has been computed from a real run.
- The factors are equally weighted; apart from the Liquidity and Maturity profile floor, a single
  very weak factor can be averaged away.
- Valuation is relative to one rating bucket's median on one date. It says nothing about whether
  the bucket itself is cheap or dear.
- The layout of the SSGA holdings files has not been verified, nor that the app's host can reach
  ssga.com.
- The two rubric gaps (section 3) and the band edges (section 5) are open.
