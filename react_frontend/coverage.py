"""Coverage: what each published run's module handoffs hold, across issuers.

Read from the admitted publication only (docs/rulings/2026-11-24-coverage-page.md). Every text is
the module's own; nothing is averaged, differenced or scored. ``at`` only sorts and screens."""

from __future__ import annotations

import re
from functools import cache
from typing import Any

from credit_os.handoff_fields import (  # type: ignore[import-untyped]
    PLAIN_AMOUNT,
    STATED_GAP,
)

from react_frontend.library_cards import _blocked, _designated_output

BASE_PATHWAY = "credit_snapshot"
NO_COLUMN = frozenset({"CP-MODEL"})  # The Model is a destination, not an analytical module.
SUMMARY_FIELDS = (
    ("bottomLine", "Bottom line", "text"),
    ("confidence", "Confidence", "choice"),
    ("limitation", "Main limitation", "text"),
)
_SLUG = re.compile(r"[^a-z0-9]+")


@cache
def _method() -> tuple[dict[str, tuple[str, ...]], dict[str, str], dict[str, str]]:
    """Each pathway's requested modules, each pathway's title and each module's title."""
    from deploy_vii.registry import modules
    from deploy_vii.report_view import pathways

    listed = list(pathways())
    return (
        {item.id: tuple(item.requested_modules) for item in listed},
        {item.id: item.title for item in listed},
        {module.module_id: module.title for module in modules()},
    )


def columns() -> list[dict[str, str]]:
    """The fixed columns: the Full credit assessment's analytical modules, in plan order."""
    requested, _, titles = _method()
    return [
        {"code": code, "title": titles.get(code, code)}
        for code in requested[BASE_PATHWAY]
        if code not in NO_COLUMN
    ]


def _cell(
    workspace: dict[str, Any], record: dict[str, Any], key: str, code: str
) -> tuple[dict[str, Any], dict[str, Any] | None]:
    """The module's state in this run and its designated output when one can be read."""
    output = _designated_output(workspace, record, key, code)
    if output is None:
        asked = _method()[0].get(record.get("pathway") or "")
        absent = "not-in-pathway" if asked is not None and code not in asked else "no-handoff"
        return {"state": absent}, None
    sections = workspace.get("handoffs", {}).get(output["sha256"], [])
    if output.get("parseError"):
        return {"state": "unreadable"}, None
    if _blocked(output, sections):
        return {"state": "not-assessable"}, output
    return {"state": "assessed", "gaps": len(output.get("chartGaps") or [])}, output


def _number(text: str) -> float | None:
    return float(text.replace(",", "")) if PLAIN_AMOUNT.fullmatch(text) else None


def _slug(*parts: str) -> str:
    return "/".join(_SLUG.sub("-", part.casefold()).strip("-") for part in parts)


def _table(sections: list[dict[str, Any]], line: object) -> dict[str, Any] | None:
    for section in sections:
        for block in section["blocks"]:
            if block["type"] == "table" and block["line"] == line:
                return block  # type: ignore[no-any-return]
    return None


def _row_label(chart: dict[str, Any], cells: list[str]) -> str | None:
    """The row's own name in a row chart; a period table has none."""
    label = chart.get("label")
    if label is None:
        return None
    return " · ".join(cells[at] for at in ([label] if isinstance(label, int) else label))


def _chart_facts(
    code: str, chart: dict[str, Any], table: dict[str, Any]
) -> list[tuple[dict[str, Any], dict[str, Any]]]:
    """One (field, fact) per stated cell of a typed chart table's numeric columns."""
    headers = table["headers"]
    periods = headers[0] == "Period"
    found = []
    for row in table["rows"]:
        cells = row["cells"]
        for at in chart["columns"]:
            text = cells[at]
            if not text:
                continue
            field = {
                "id": _slug(code, chart["title"], headers[at]),
                "module": code,
                "group": chart["title"],
                "label": headers[at],
                "kind": "number",
                # A row table's rows are each issuer's own names, so they are not ranked together.
                "series": "period" if periods else "row",
            }
            fact = {
                "period": cells[0] if periods else None,
                "row": _row_label(chart, cells),
                "text": text,
                "at": _number(text),
                "gap": bool(STATED_GAP.match(text)),
                "unit": cells[-2],
                "basis": cells[-1],
                "line": row["line"],
            }
            found.append((field, fact))
    return found


def _summary_facts(
    code: str, summary: dict[str, Any]
) -> list[tuple[dict[str, Any], dict[str, Any]]]:
    """The Reader summary's call and findings, as the module wrote them."""

    def field(name: str, label: str, kind: str) -> dict[str, Any]:
        return {
            "id": _slug(code, "reader summary", name),
            "module": code,
            "group": "Reader summary",
            "label": label,
            "kind": kind,
        }

    def fact(text: str, line: int, **more: Any) -> dict[str, Any]:
        return {"period": None, "row": None, "text": text, "at": None, "line": line, **more}

    found = [
        (field(name, label, kind), fact(str(summary[name]), summary["line"]))
        for name, label, kind in SUMMARY_FIELDS
    ]
    finding = field("finding", "Finding", "text")
    found.extend(
        (
            finding,
            fact(
                str(item["finding"]),
                item["line"],
                impact=str(item["impact"]),
                confidence=str(item["confidence"]),
            ),
        )
        for item in summary["findings"]
    )
    return found


def _output_facts(
    code: str, output: dict[str, Any], sections: list[dict[str, Any]]
) -> list[tuple[dict[str, Any], dict[str, Any]]]:
    found = []
    if output.get("summary"):
        found.extend(_summary_facts(code, output["summary"]))
    for chart in output.get("charts") or []:
        table = _table(sections, chart.get("table"))
        # A bridge's steps are the module's own names, not a measure shared across issuers.
        if table is not None and chart.get("kind") != "waterfall":
            found.extend(_chart_facts(code, chart, table))
    # Where the fact is read, for the link to its run's Evidence page; the page draws neither.
    where = {"output": output["id"], "sha256": output["sha256"]}
    return [(field, {**fact, **where}) for field, fact in found]


def _run_entry(
    workspace: dict[str, Any], key: str, record: dict[str, Any], listed: dict[str, Any]
) -> tuple[dict[str, Any], list[tuple[dict[str, Any], dict[str, Any]]]]:
    _, pathway_titles, module_titles = _method()
    fixed = [column["code"] for column in columns()]
    cells, facts, other = {}, [], []
    for code in dict.fromkeys([*fixed, *record.get("modules", {})]):
        cell, output = _cell(workspace, record, key, code)
        if code in fixed:
            cells[code] = cell
        elif code not in NO_COLUMN and cell["state"] != "no-handoff":
            other.append({"code": code, "title": module_titles.get(code, code), **cell})
        if output is not None and cell["state"] == "assessed":
            sections = workspace.get("handoffs", {}).get(output["sha256"], [])
            facts.extend(_output_facts(code, output, sections))
    pathway = record.get("pathway") or None
    entry = {
        "key": key,
        "folder": record["folder"],
        "asOf": listed.get("date") or record.get("asOf") or None,
        "pathway": pathway,
        "pathwayTitle": pathway_titles.get(pathway or "", pathway),
        "cells": cells,
        "other": other,
    }
    return entry, facts


def _newest_first(run: dict[str, Any]) -> tuple[str, str]:
    return (run["asOf"] or "", run["folder"])


def coverage(snapshot: dict[str, Any] | None) -> dict[str, Any] | None:
    """The page's whole reply for an admitted publication; None when nothing is published."""
    if snapshot is None:
        return None
    workspace = snapshot["workspace"]
    listed = {run["id"]: run for run in snapshot["catalogue"].get("real", [])}
    issuers: dict[str, dict[str, Any]] = {}
    fields: dict[str, dict[str, Any]] = {}
    facts = []
    for key, record in workspace.get("runs", {}).items():
        catalogued = listed.get(record.get("folder"))
        if catalogued is None:
            continue
        entry, found = _run_entry(workspace, key, record, catalogued)
        issuer_key = str(record.get("issuerKey") or record["folder"])
        issuer = issuers.setdefault(
            issuer_key,
            {
                "key": issuer_key,
                "name": catalogued.get("name") or record.get("issuer") or issuer_key,
                "sector": record.get("sector") or None,
                "runs": [],
            },
        )
        issuer["runs"].append(entry)
        for field, fact in found:
            fields.setdefault(field["id"], field)
            facts.append({"field": field["id"], "issuer": issuer_key, "run": key, **fact})
    for issuer in issuers.values():
        issuer["runs"].sort(key=_newest_first, reverse=True)
    return {
        "columns": columns(),
        "issuers": sorted(issuers.values(), key=lambda item: str(item["name"]).casefold()),
        "fields": list(fields.values()),
        "facts": facts,
    }
