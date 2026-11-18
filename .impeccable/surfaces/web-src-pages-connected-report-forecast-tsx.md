---
version: 1
slug: "web-src-pages-connected-report-forecast-tsx"
primary_target: "web/src/pages/connected/report/Forecast.tsx"
related_targets: ["web/src/pages/connected/visuals/ForecastStatement.tsx"]
---

## Direction contract

**Thesis.** Show the scenario paths and the cash-flow statement together. Selecting a case focuses the statement, while comparison shows the same period across every recorded scenario.

**Own world.** Credit OS navy and cobalt, with a navy heading and white ruled statement on the report canvas. Use the Claude Design Model handoff's hierarchy and RBOT-HTML's banded table, sticky labels, case columns and separate data gaps.

**Story.** Read the scope, choose a scenario, compare its path, then check its accounts, ratios or growth rates. Use the trace beside each row. Open assumptions and run charts from the section index.

**First viewport.** Forecast heading and Evidence link, section navigation, conditional qualification, compact case strip, then statement and comparison side by side at desktop widths.

**Form.** Code-led statement and chart spread. The owner selected both views on entry and the existing Claude mocks and RBOT-HTML references. Source revision fc010a7. seed: none (unavailable).

**Finish.** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Recorded shipped surface

This is the desktop Forecast expression of the Claude Design Model hierarchy, using the cash-flow table structure in RBOT-HTML revision `fc010a7` as reference. The implementation keeps both the model and its scenario comparison in view: a conditional qualification and selectable case strip lead into a wider statement panel beside the chart/table comparison panel. Section links sit above the content; assumptions and line-item trend charts remain reachable as separate sections or disclosures. The statement scrolls internally when it grows beyond its bounded height, with period headers and line labels kept visible while reading.

The report canvas is pale lavender (`#f6f5ff`), with white data surfaces, deep navy (`#000533`) for the title band and structural rules, and cobalt (`#001aff`) for active links, focus, chart emphasis and selection. The selected case uses a light periwinkle fill (`#e5e8ff`) and a filled cobalt radio mark; unselected cases remain white with a quiet outline. Table bands use a light neutral gray and fine gray rules. The surface uses Schibsted Grotesk for headings and prominent case figures, Geist for labels, body text and table values, and tabular numerals for aligned figures.

Each case card selects the case used by the model and chart. The statement can show that case, historical periods, or a same-period comparison across scenarios; the comparison period is a separate control. Chart and table modes show the same scenario series in different forms. The small document/source marks beside case cards, statement rows and chart or comparison content are evidence trace controls, not saved bookmarks: they open the associated recorded source context, and a missing trace is represented as unavailable rather than opening a fabricated source.

Keep recorded period labels and cell displays intact in the statement, including distinctions such as actual and estimated periods. Statement cells display their recorded text and preserve missing values as `n.a.` / `n.m.` rather than converting them to zero; unavailable rows can be disclosed with their reasons. Case-card headline values are formatted to at most two decimal places, and comparison figures retain the source display with a note that chart cash-proxy values are rounded to two decimals. Show units alongside each view and preserve the stated period and currency/unit identity; do not imply that the displayed cash proxy is issuer free cash flow.
