# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Credit analysts** start runs (owner, 2026-11-16). They know credit; they do not know JSON, module codes or launcher flags. They upload an issuer's documents, choose what the run is for, and commit a paid run.
- **Portfolio managers and credit committee members** read the result. They have not read the source documents (AGENTS.md).

## Product Purpose

Credit OS runs an analytical workflow over an issuer's source files. Analytical modules write Markdown handoffs; a separate delivery process builds the issuer library from them: Overview, Changes, Modules, Forecast and Evidence. A run is complete only when those pages are populated from its actual handoffs and checked against them.

## Positioning

Inferred from AGENTS.md, not separately confirmed by the owner:

- Every paragraph, row and figure in the library traces to its source; delivery adds no analysis.
- What a run could not do is stated, not hidden: limits, gaps and refusals are explicit, and missing is never shown as zero.

## Operating Context

- An analyst uploads annual and interim reports, the credit agreement and other material, picks one of eight pathways, reviews a summary and submits.
- Submit on an approved summary starts a paid run, capped per run by pathway: Lite USD 15, Full 25, Deep 40, the five purpose pathways 20 (`docs/rulings/2026-11-15-pathway-tiers-and-caps.md`, `docs/rulings/2026-11-11-run-start-submit.md`). A synthetic test mode spends nothing.
- A run executes up to 14 analytical modules and then delivery; the analyst watches it on Run activity and opens the report when it is published.
- The service runs locally; the issuer library also opens from disk. A Windows package exists for the work PC.

## Capabilities and Constraints

- Excel is an input format only; no workbook is a deliverable.
- Model and effort can differ from the defaults only at the Advanced form level (same ruling).
- Web search is offered for public and private cases, not synthetic ones. For a private case the page states before Submit that the issuer's name and research questions go to OpenAI's search.
- Source references, file names, hashes, ids, registers, gap ledgers and run codes are drawn only on the Evidence page and in the trace drawer. Working pages show findings and one trace control per paragraph, row or figure.
- The connected page ships a Content-Security-Policy of `script-src 'self'`; no inline or third-party script runs.
- No credential files; provider keys come only from the launching environment.

## Brand Commitments

- Name: Credit OS.
- Voice for report prose: judgement first — bottom line, key findings, contrary evidence and what would change the view, limitations (`docs/rulings/2026-11-11-reader-and-issuer-report.md`).
- Owner design rules (2026-11-13): design for the persona; match the component to the data type; a flat, repetitive page is a defect; nothing may look extracted from Markdown; live state is animated; components come only from the owner's eight listed libraries, read live before use.

## Evidence on Hand

- Synthetic proof case: `proof/northbridge-filing.txt`, `proof/northbridge-portfolio.xlsx`, driven by `web/scripts/connected-proof.mjs`.
- Page fixtures: `web/fixtures/*.json`.
- Design critiques: `.impeccable/critique/`.
- There are no testimonials, customers, benchmarks or pricing to cite; none may be invented.

## Product Principles

1. The analyst commits money once, knowing what the run will and will not do.
2. A limit is a decision the analyst makes, not a line the analyst scrolls past.
3. Findings on working pages; machinery on Evidence.
4. Exact values survive every boundary: amounts, periods, units, missing versus zero.

## Accessibility & Inclusion

Open: no standard has been confirmed by the owner. The web gates run `eslint-plugin-jsx-a11y`; WCAG 2.2 AA is the working assumption until the owner sets one.
