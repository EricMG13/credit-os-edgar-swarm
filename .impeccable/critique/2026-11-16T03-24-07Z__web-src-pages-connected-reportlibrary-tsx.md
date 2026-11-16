---
target: Updated Caesars report against Credit OS design, Astra critique
total_score: 28
max_score: 40
na_heuristics: ""
p0_count: 0
p1_count: 2
target_identity: "file:web/src/pages/connected/ReportLibrary.tsx"
target_fingerprint: "sha256:48d96f173470e72955b8f6cb46856222d729b5bfff286d7f3a82ca7bf9dc0344"
target_path: web/src/pages/connected/ReportLibrary.tsx
timestamp: 2026-11-16T03-24-07Z
slug: web-src-pages-connected-reportlibrary-tsx
---
Method: dual-agent (A: /root/astra_critique_a · B: /root/astra_critique_b), both Astra.

The report has a coherent Credit OS identity. Its next improvements should make financial qualifications inseparable from their figures and make narrow layouts easier to read. Design health: **28/40 — Good**, with two major interpretation risks.

Target: `web/src/pages/connected/ReportLibrary.tsx`, HEAD `fbcc5ac`; actual retained Caesars run `20261115-114658-01` at port 58339. Modes: Read/Operate. Rendered inspection covered Overview, Changes, Financial foundation, Forecast, Evidence and trace/Record interactions at 1728×996 and representative mobile views at 390×844. Exact Credit OS HTML exports and incumbent React components supplied visual authority.

| Heuristic | Score / 4 | Main observation |
|---|---:|---|
| System status | 3 | Clear selection; unavailable Record fields need context |
| Real-world meaning | 2 | Period and interest-basis labels can mislead |
| Control and freedom | 3 | Working drawer dismissal and report navigation |
| Consistency | 3 | Credit OS components are coherent; Forecast lacks local navigation |
| Error prevention | 2 | Important qualifications are remote from figures |
| Recognition over recall | 2 | Tables require remembering earlier caveats |
| Efficiency | 3 | Good module jumps; lengthy Forecast scrolling |
| Minimalist design | 3 | Disciplined palette; repeated notices and dense mobile content |
| Error recovery | 3 | Useful first-run Changes state; weaker telemetry explanations |
| Contextual help | 4 | Extensive scope, basis, limitations and trace access |
| Total | **28/40** | **Good** |

What's working: Overview leads with Watchlist and its rationale; the navy judgement banner, restrained blue controls and dated figures fit credit research. Trace drawers preserve context and expose missing evidence candidly. Case selection updates the figures, supports keyboard selection, and provides chart/table alternatives. The mobile module picker and near-full-width trace drawer are useful adaptations.

Five priorities:

1. **[P1] Put period and interest-basis conflicts beside the forecast cells.** The grid labels revenue 11,648 and adjusted EBITDA 3,255 as “YTD (H1 2026)”, while the scope says these are twelve-month figures to 30 June 2026. Historical interest 776 and forecast interest 2,141 share an Interest row despite debt-only versus all-in rent treatment. Attach the existing exact qualifications to the relevant header and row. If metadata cannot justify a corrected label, expose the conflict locally; preserve the amounts. Source: `web/src/pages/connected/visuals/LegacyForecast.tsx:126`. Suggested command: `$impeccable clarify`.

2. **[P1] Attach financial definitions to their charts.** Financial foundation's Interest cover chart reaches 4.19x; a later passage explains that it excludes rent and all-in cover is 1.52x. The leverage qualification is similarly remote. Place the exact module-written qualification immediately under its chart, including the same chart shown on Forecast. The frontend should associate retained passages, not invent analysis. Source: `web/src/pages/connected/visuals/index.tsx:102`. Suggested command: `$impeccable clarify`.

3. **[P2] Give the mobile report enough reading and plotting width.** At 390px, the permanent 68px rail and nested padding leave Overview's judgement prose about 130px wide. Its card grows to roughly 650px tall. Forecast's FY2027E–FY2029E cash-chart labels collide; source buttons measure 28×28px. Adapt the rail and nested spacing, give chart labels adequate space or a deliberate narrow-screen presentation, and enlarge touch hit areas without changing the Credit OS styling. Sources: `web/src/shell/Shell.tsx:38`, `web/src/pages/connected/visuals/LegacyForecast.tsx:448`. Suggested command: `$impeccable adapt`.

4. **[P2] Add a reading path through Forecast.** Scope, cases and several full-width charts precede an 11-period grid with eight consecutive unavailable/unmodelled profitability rows. Reuse the incumbent local-navigation pattern for Cases, Model, Assumptions and Run charts. A compact populated-row view could retain an explicit missing-row count and expansion control, including every recorded reason. Source: `web/src/pages/connected/report/Forecast.tsx:264`. Suggested command: `$impeccable layout`.

5. **[P2, preview only] Remove the duplicated Evidence notice.** The same retained-method disclosure appears below the report header and again beneath Evidence's tabs, pushing Record content downward. Keep the exact notice once in the shared header. Sources: `web/src/pages/connected/ReportLibrary.tsx:661`, `web/src/pages/connected/report/Evidence.tsx:426`. Suggested command: `$impeccable distill`.

Cognitive load is moderate overall and high within Forecast: working-memory demands, progressive disclosure and the number of visible choices are the main failures. Six report tabs and five Evidence tabs are tolerable because they are grouped and labelled. The larger burden is reconciling seven scope passages with a distant dense grid. Overview starts with confidence; Forecast is the difficult middle; Trace restores trust by being explicit about the evidence it has and lacks.

Persona risks: the portfolio manager may interpret a screenshot's period/coverage labels literally; Alex, the power user, must repeatedly scroll Forecast; Sam faces long grids and remote qualifications, while mobile readers face cramped prose and small source targets. This was not a full screen-reader or contrast audit.

Minor observations and limits: Changes appropriately shows no earlier run for this retained case, so populated comparison design was not inspected. Record's unavailable telemetry and the sampled trace's missing Basis are retained-data limitations, not broken navigation and not permission to invent evidence. Distinguish “not retained” from “could not load” when the data supports that distinction.

The bounded source detector returned **zero findings**. Rendered inspection found the mobile issues that the scan missed. No reliable overlay was available because browser evaluation is read-only; native screenshots, accessibility state and DOM measurements supplied browser evidence.

Questions to consider: Can each chart or model row be interpreted correctly in isolation? Should Forecast reuse Modules' local navigation and offer a clearly qualified compact table view?
