"""Verify chart receipts against frozen synthetic workbooks and export files."""

from __future__ import annotations

import hashlib
import json
from datetime import date
from pathlib import Path
from typing import Any

import pytest

from deploy_vii.inputs.portfolio_export import validate_export
from proof.launcher import PORTFOLIO
from react_frontend.portfolio import HEADERS, attested
from tools.synthetic_portfolio_exports import CONSTRAINTS, EXPOSURE, HOLDINGS, Spec, clean, files

FOLDER = "20250331-000000-01"
AS_OF = "2025-03-31"
OUTPUT = "selected-cp6"
HANDOFF = "a" * 64


def freeze(folder: Path, data: bytes) -> dict[str, str]:
    digest = hashlib.sha256(data).hexdigest()
    (folder / "inputs" / digest).write_bytes(data)
    return {"sha256": digest}


@pytest.fixture
def published(tmp_path: Path) -> tuple[Path, dict[str, Any]]:
    folder = tmp_path / FOLDER
    (folder / "inputs").mkdir(parents=True)
    context = json.loads(
        (Path(__file__).resolve().parents[1] / "cases/context/research-minimal.json").read_bytes()
    )
    context["attachments"]["portfolio_workbook"] = True
    context["run"].update(as_of=AS_OF, pathway="credit_snapshot", cutoff="")
    workbook = freeze(folder, PORTFOLIO.read_bytes())
    (folder / "workflow.json").write_text(
        json.dumps(
            {
                "run": context["run"],
                "sources": {
                    "context": freeze(folder, json.dumps(context).encode()),
                    PORTFOLIO.name: workbook,
                },
            }
        ),
        encoding="utf-8",
    )
    record = {
        "folder": FOLDER,
        "asOf": AS_OF,
        "pathway": "credit_snapshot",
        "modules": {"CP-6": {"default": OUTPUT, "outputs": [OUTPUT]}},
        "evidence": {"sources": [{"name": PORTFOLIO.name, **workbook, "readBy": ["CP-6"]}]},
    }
    return tmp_path, {
        "catalogue": {"real": [{"id": FOLDER}]},
        "workspace": {
            "runs": {FOLDER: record},
            "outputs": {
                OUTPUT: {
                    "sha256": HANDOFF,
                    "module": "CP-6",
                    "run": FOLDER,
                    "charts": [{"kind": "limits", "table": 30}],
                }
            },
            "handoffs": {
                HANDOFF: [
                    {
                        "blocks": [
                            {
                                "type": "table",
                                "line": 30,
                                "headers": HEADERS,
                                "rows": [
                                    {
                                        "cells": [
                                            "Max unrated exposure",
                                            "3.73",
                                            "20",
                                            "5.00",
                                            "% NAV",
                                            "As reported",
                                        ]
                                    }
                                ],
                            }
                        ]
                    }
                ]
            },
        },
    }


def test_receipt_only_corroborates_published_current_values_and_limits(
    published: tuple[Path, dict[str, Any]],
) -> None:
    root, snapshot = published
    assert attested(root, FOLDER, snapshot) == {
        "folder": FOLDER,
        "asOf": AS_OF,
        "output": OUTPUT,
        "sha256": HANDOFF,
        "tableLines": [30],
    }
    table = snapshot["workspace"]["handoffs"][HANDOFF][0]["blocks"][0]
    table["rows"][0]["cells"][1] = "3.72"
    assert attested(root, FOLDER, snapshot) is None


def test_authored_gap_mismatched_pin_and_unpublished_run_withhold_receipt(
    published: tuple[Path, dict[str, Any]],
) -> None:
    root, snapshot = published
    output = snapshot["workspace"]["outputs"][OUTPUT]
    output["chartGaps"] = [{"table": 30, "gap": "Eligibility not established"}]
    assert attested(root, FOLDER, snapshot) is None
    del output["chartGaps"]
    assert attested(root, "20250331-000000-02", snapshot) is None
    [source] = snapshot["workspace"]["runs"][FOLDER]["evidence"]["sources"]
    workbook = root / FOLDER / "inputs" / source["sha256"]
    workbook.write_bytes(b"Different workbook bytes")
    assert attested(root, FOLDER, snapshot) is None


def freeze_export(
    published: tuple[Path, dict[str, Any]], spec: Spec
) -> tuple[Path, dict[str, Any]]:
    root, snapshot = published
    folder = root / FOLDER
    inputs = files(spec)
    assert validate_export(inputs, run_date=date.fromisoformat(AS_OF)).ok
    workflow_path = folder / "workflow.json"
    workflow = json.loads(workflow_path.read_bytes())
    pinned = {name: freeze(folder, raw) for name, raw in inputs.items()}
    workflow["sources"] = {"context": workflow["sources"]["context"], **pinned}
    workflow_path.write_text(json.dumps(workflow), encoding="utf-8")
    record = snapshot["workspace"]["runs"][FOLDER]
    record["evidence"]["sources"] = [
        {"name": name, **pin, "readBy": ["CP-6"]} for name, pin in pinned.items()
    ]
    return root, snapshot["workspace"]["handoffs"][HANDOFF][0]["blocks"][0]


@pytest.mark.parametrize(
    ("label", "current", "limit", "chart"),
    [
        ("Max single issuer exposure (largest: Aster)", "29.80", "30.0", True),
        ("Max unrated exposure", "0.00", "5.0", True),
        ("Excluded sectors (Tobacco, Weapons)", "0", "0", True),
        ("Min 1st Lien / Senior Secured", "89.90", "85.0", False),
        ("Max CCC+ and below (incl. Unrated & Other)", "10.10", "12.5", False),
        ("Max unrated exposure", "0.01", "5.0", False),
    ],
)
def test_export_attests_only_holdings_checked_nav_maxima(
    published: tuple[Path, dict[str, Any]], label: str, current: str, limit: str, chart: bool
) -> None:
    root, table = freeze_export(published, clean())
    table["rows"][0]["cells"] = [label, current, "Illustrative", limit, "% NAV", "Reported NAV"]
    receipt = attested(root, FOLDER, published[1])
    assert (receipt["tableLines"] if receipt else []) == ([30] if chart else [])


def test_export_requires_all_native_source_links_and_exact_dates(
    published: tuple[Path, dict[str, Any]],
) -> None:
    root, table = freeze_export(published, clean())
    table["rows"][0]["cells"][1] = "0.00"
    snapshot = published[1]
    assert attested(root, FOLDER, snapshot) is not None
    sources = snapshot["workspace"]["runs"][FOLDER]["evidence"]["sources"]
    for name in (CONSTRAINTS, EXPOSURE, HOLDINGS):
        source = next(source for source in sources if source["name"] == name)
        source["readBy"] = ["CP-3"]
        assert attested(root, FOLDER, snapshot) is None
        source["readBy"] = ["CP-6"]

    spec = clean()
    spec.exposure.insert(2, ["As of date", "31-Mar-2025", "Same day"])
    freeze_export(published, spec)
    assert attested(root, FOLDER, snapshot) is not None
    spec.exposure.pop(2)
    spec.exposure.insert(2, ["As of date", "30-Mar-2025", "Previous day"])
    freeze_export(published, spec)
    assert attested(root, FOLDER, snapshot) is None


def test_export_ambiguous_or_prior_day_constraints_stay_in_the_source_table(
    published: tuple[Path, dict[str, Any]],
) -> None:
    spec = clean()
    monitor_row = next(row for row in spec.constraints if row[2] == "Max unrated exposure")
    spec.constraints.append(["C-99", *monitor_row[1:]])
    root, table = freeze_export(published, spec)
    table["rows"][0]["cells"][1] = "0.00"
    assert attested(root, FOLDER, published[1]) is None

    spec.constraints.pop()
    monitor_row[9] = "30-Mar-2025"
    freeze_export(published, spec)
    assert attested(root, FOLDER, published[1]) is None


def test_export_without_reported_nav_stays_in_the_source_table(
    published: tuple[Path, dict[str, Any]],
) -> None:
    spec = clean()
    spec.exposure = [row for row in spec.exposure if not row or row[0] != "NAV"]
    root, table = freeze_export(published, spec)
    table["rows"][0]["cells"][1] = "0.00"
    assert attested(root, FOLDER, published[1]) is None
