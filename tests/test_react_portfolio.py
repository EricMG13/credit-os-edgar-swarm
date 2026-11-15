"""Verify chart receipt scope with a frozen synthetic workbook and published table."""

from __future__ import annotations

import hashlib
import json
from pathlib import Path
from typing import Any

import pytest

from proof.launcher import PORTFOLIO
from react_frontend.portfolio import HEADERS, attested

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
