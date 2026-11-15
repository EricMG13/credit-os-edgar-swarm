"""Corroborate published portfolio limits against a run's frozen selected sources."""

from __future__ import annotations

import json
import re
from datetime import date
from decimal import Decimal
from pathlib import Path
from typing import Any, TypedDict

from deploy_vii.inputs.portfolio import ComplianceRow, PortfolioFacts, read
from deploy_vii.inputs.rv_quotes import MEDIA_TYPE
from deploy_vii.preparation import SourceRequest, prepare_source
from deploy_workflow import portfolio_workbook
from deploy_workflow.context import load_context
from deploy_workflow.library_index import Refused, read_inside, read_pinned

PORTFOLIO = re.compile(r"/connected/portfolio/([0-9A-Za-z][0-9A-Za-z._-]{0,79})")
DIGEST = re.compile(r"[0-9a-f]{64}")
NUMBER = re.compile(r"\d+(?:\.\d+)?")
HEADERS = [
    "Limit",
    "Current exposure",
    "Proposed exposure",
    "Limit value",
    "Reporting unit",
    "Basis and limitation",
]


class Basis(TypedDict):
    folder: str
    asOf: str
    output: str
    sha256: str
    tableLines: list[int]


def _pin(folder: Path, spec: dict[str, Any]) -> bytes:
    digest = spec["sha256"]
    if not isinstance(digest, str) or not DIGEST.fullmatch(digest):
        raise ValueError("invalid source pin")
    return read_pinned(folder, f"inputs/{digest}", digest)


def _facts(folder: Path, run: dict[str, Any], workflow: dict[str, Any]) -> PortfolioFacts | None:
    sources = workflow["sources"]
    context = load_context(_pin(folder, sources["context"]))
    when = date.fromisoformat(run["asOf"])
    if (
        not context.attachments.portfolio_workbook
        or context.run.as_of != when.isoformat()
        or context.run.pathway != run["pathway"]
    ):
        return None
    files = {
        name: _pin(folder, spec)
        for name, spec in sources.items()
        if name.lower().endswith((".xlsx", ".csv"))
    }
    pool = portfolio_workbook.check(
        files, pathway=context.run.pathway, declared=True, run_date=when
    ).workbooks
    if len(pool) != 1 or pool[0].export or not pool[0].report.ok:
        return None
    name = pool[0].source
    if not any(
        item.get("name") == name
        and item.get("sha256") == sources[name]["sha256"]
        and "CP-6" in (item.get("readBy") or ())
        for item in run["evidence"]["sources"]
    ):
        return None
    prepared = prepare_source(
        SourceRequest(source_id="portfolio", path=name, media_type=MEDIA_TYPE), files[name]
    )
    _, facts = read(name, prepared, when)
    return facts if facts and facts.mandate.as_of == when else None


def _agrees(cells: list[str], rules: tuple[ComplianceRow, ...], when: date) -> bool:
    if len(cells) != len(HEADERS):
        return False
    label, current, _, limit, unit, basis = cells
    if (
        unit != "% NAV"
        or not basis.strip()
        or not all(NUMBER.fullmatch(text) for text in (current, limit))
    ):
        return False
    matching = [row for row in rules if row.parameter == label]
    return (
        len(matching) == 1
        and matching[0].last_checked == when
        and matching[0].limit_unit == unit
        and matching[0].current_value == Decimal(current)
        and matching[0].limit == Decimal(limit)
    )


def _table_lines(
    output: dict[str, Any],
    sections: list[dict[str, Any]],
    facts: PortfolioFacts,
) -> list[int]:
    gaps = {gap["table"] for gap in output.get("chartGaps", [])}
    candidates = {
        plot["table"]
        for plot in output.get("charts", [])
        if plot.get("kind") == "limits" and plot["table"] not in gaps
    }
    matches: dict[int, list[dict[str, Any]]] = {line: [] for line in candidates}
    for section in sections:
        for block in section.get("blocks", []):
            if block.get("type") == "table" and block["line"] in candidates:
                matches[block["line"]].append(block)
    approved: list[int] = []
    for line, tables in matches.items():
        if len(tables) != 1 or tables[0].get("headers") != HEADERS:
            continue
        rows = tables[0]["rows"]
        if rows and all(
            _agrees(row["cells"], facts.compliance, facts.mandate.as_of) for row in rows
        ):
            approved.append(line)
    return sorted(approved)


def _for_run(root: Path, folder: str, snapshot: dict[str, Any]) -> Basis | None:
    workspace = snapshot["workspace"]
    matches = [run for run in workspace["runs"].values() if run["folder"] == folder]
    if len(matches) != 1:
        return None
    run = matches[0]
    module = run["modules"].get("CP-6", {})
    selected = module.get("default")
    if not selected or selected not in module.get("outputs", []):
        return None
    output = workspace["outputs"][selected]
    if (
        output.get("module") != "CP-6"
        or output.get("run") != folder
        or output.get("parseError")
        or (output.get("state") or {}).get("established") is False
    ):
        return None
    directory = root / folder
    workflow = json.loads(read_inside(directory, "workflow.json"))
    if workflow["run"]["as_of"] != run["asOf"] or workflow["run"]["pathway"] != run["pathway"]:
        return None
    if (facts := _facts(directory, run, workflow)) is None:
        return None
    digest = output["sha256"]
    lines = _table_lines(output, workspace["handoffs"][digest], facts)
    return (
        {
            "folder": folder,
            "asOf": run["asOf"],
            "output": selected,
            "sha256": digest,
            "tableLines": lines,
        }
        if lines
        else None
    )


def attested(root: Path, folder: str, snapshot: dict[str, Any] | None) -> Basis | None:
    """Issue a run/output-specific plotting receipt. Missing evidence leaves the source table."""
    if not snapshot or not any(item["id"] == folder for item in snapshot["catalogue"]["real"]):
        return None
    if folder in {".", ".."} or (root / folder).resolve() != root.resolve() / folder:
        return None
    try:
        return _for_run(root, folder, snapshot)
    except (Refused, OSError, ValueError, TypeError, KeyError, AttributeError):
        return None
