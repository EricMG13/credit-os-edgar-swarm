# Coverage: a cross-issuer page read from the published module handoffs

by: user
date: 2026-11-24

This is a decision record. It does not lift the paid-run pause and carries no `lifts:` or `configs:`
line. No provider was called in making it; the page runs no module and starts no run.

Owner, 2026-11-24: a new feature called "Coverage", an analytics dashboard for the issuer data
collected from runs. Asked what it answers, where it lives and what it reads, the owner chose
"Both, with drill-down" (portfolio first, then one issuer), "Top-level app page" and "Module
handoffs only". Asked the follow-ups: "Parse existing handoff text; fixed 14 columns; PM and
research audience; needs to allow trend and comparison of issuers, based on data collected from
modules. A PM or reader should be able to filter easily across quantitative and qualitative data
from module handoffs to find information or create groups and ranks."

## What is allowed

A top-level page of the connected app, `/coverage`, with its own rail item, and one read-only
reply, `/connected/coverage` (`react_frontend/coverage.py`). The reply is built from the admitted
publication only, the same one the Library reads; it reads no run folder and adds no field to a
handoff. It is not a sixth page of the issuer library, and the completion condition in AGENTS.md
(Overview, Changes, Modules, Forecast, Evidence) is unchanged.

## Scope this build gives it

Each point below is the build's choice, not the owner's.

- The fixed 14 columns are the Full credit assessment's analytical modules (its requested modules
  without CP-MODEL), in plan order, named by their titles. A run's handoffs from any other module
  are listed under the issuer, not as columns.
- A cell says one of five things, by the rules the Library already applies
  (`react_frontend/library_cards.py`): assessed; not assessable (the module's own declaration);
  unreadable (the handoff did not parse); no handoff (the pathway asks for the module and the run
  published none); not in this pathway. An assessed cell also counts the chart tables the module
  itself wrote as `Not supplied:`. There is no "partial" state and no coverage score.
- Fields come from what the existing parser (`credit_os.handoff_fields`) already types: the Reader
  summary (bottom line, confidence, main limitation, findings with creditor impact) and the
  `Chart data:` tables. Coverage adds no parser and reads no free prose for numbers.
- Delivery adds no analysis, so the page only selects, filters, sorts and groups delivered text.
  It computes no average, difference, score or composite. A figure is drawn as written, with its
  period, reporting unit and the module's Basis and limitation. Missing is listed apart from
  ranked values and is never zero. A rank compares one reporting unit at a time.
- A rank reads one period, which the reader chooses from the periods the modules state. Periods
  are matched as written; an issuer whose newest run states no figure for that period is listed
  as not ranked, with the periods it does state, and is never ranked on another period.
- Trend is a figure down the module's own periods, one line per issuer from its newest run.
  How a figure moved between two runs of an issuer stays on the Changes page (CP-8).
- Portfolio views read each issuer's newest run; older runs are listed under the issuer. Each
  issuer, date and pathway stays separate.
- A figure read down a row table (covenant tests, rating triggers, limits) is not offered for
  ranking: its rows are each issuer's own names.
- Working-page rule: no file name, hash, run code or gap ledger is drawn. A fact opens its run's
  report, where the trace control and the Evidence page are.
- Filters, the chosen field and saved groups are page state; saved groups are kept in the
  viewer's browser only. Nothing is written to the service.

## Evidence scope

The repository holds no complete retained multi-issuer publication. The builder is tested on
synthetic publications with hand-written expected values and on three retained TransDigm CP-1
handoffs of the 2026-11-15 live runs (as of 2024-09-30), module level only: one issuer, one module,
not a complete pathway and not a cross-issuer case. No live run was made for this change.
