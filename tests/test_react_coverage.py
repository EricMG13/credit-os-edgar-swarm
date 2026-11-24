"""Coverage reads a synthetic admitted publication; every expected value is written by hand."""

from __future__ import annotations

import json
from typing import Any
from urllib.parse import urlsplit

from deploy_workflow import http_base
from deploy_workflow.inbox.layout import Layout
from react_frontend import _app_page, _connected_reply, coverage

LEVERAGE = {
    "type": "table",
    "line": 20,
    "headers": [
        "Period",
        "Total debt / EBITDA",
        "Net debt / EBITDA",
        "Reporting unit",
        "Basis and limitation",
    ],
    "rows": [
        {"line": 22, "cells": ["FY2023", "5.1", "4.6", "x", "Issuer-adjusted EBITDA."]},
        {
            "line": 23,
            "cells": [
                "FY2024",
                "4.8",
                "Not supplied: cash not stated",
                "x",
                "Issuer-adjusted EBITDA.",
            ],
        },
    ],
}
HEADROOM = {
    "type": "table",
    "line": 30,
    "headers": [
        "Test",
        "Threshold",
        "Current",
        "Headroom",
        "Direction",
        "Reporting unit",
        "Basis and limitation",
    ],
    "rows": [
        {
            "line": 32,
            "cells": [
                "Net leverage",
                "6.50",
                "4.80",
                "1.70x",
                "Passes below",
                "x",
                "Credit agreement basis.",
            ],
        },
    ],
}
SUMMARY = {
    "bottomLine": "Leverage is falling.",
    "confidence": "Medium",
    "limitation": "One year of data.",
    "line": 8,
    "findings": [
        {
            "finding": "Cash covers 2026.",
            "impact": "Lower refinancing risk",
            "confidence": "High",
            "line": 12,
        }
    ],
}


def _output(code: str, run: str, sha: str, **fields: Any) -> dict[str, Any]:
    return {"id": f"{run}/{code}.md", "module": code, "run": run, "sha256": sha, **fields}


def _snapshot() -> dict[str, Any]:
    outputs = [
        _output(
            "CP-1",
            "a1",
            "1" * 64,
            charts=[{"title": "Leverage", "table": 20, "unit": "x", "columns": [1, 2]}],
            chartGaps=[{"title": "Debt stack", "table": 40, "gap": ["no ranking"]}],
            state={"established": None},
        ),
        _output("CP-2", "a1", "2" * 64, summary=SUMMARY, state={"established": True}),
        _output(
            "CP-4",
            "a1",
            "3" * 64,
            charts=[
                {
                    "title": "Covenant headroom",
                    "table": 30,
                    "kind": "bullet",
                    "label": [0],
                    "unit": "x",
                    "columns": [1, 2],
                }
            ],
        ),
        _output("CP-6", "a1", "4" * 64, state={"established": False}),
        _output("CP-5", "a1", "5" * 64, parseError="Malformed table at line 3"),
        _output("CP-1B", "a1", "6" * 64),
        _output("CP-1", "b1", "7" * 64),
    ]
    handoffs = {
        "1" * 64: [
            {"heading": "Chart data: leverage", "level": 3, "line": 19, "blocks": [LEVERAGE]}
        ],
        "3" * 64: [
            {
                "heading": "Chart data: covenant headroom",
                "level": 3,
                "line": 29,
                "blocks": [HEADROOM],
            }
        ],
    }

    def run(key: str, issuer: str, pathway: str | None) -> dict[str, Any]:
        mine = [o for o in outputs if o["run"] == key]
        return {
            "folder": f"folder-{key}",
            "issuerKey": issuer,
            "pathway": pathway,
            "sector": "Aerospace" if issuer == "alpha" else None,
            "modules": {o["module"]: {"outputs": [o["id"]], "default": o["id"]} for o in mine},
        }

    return {
        "catalogue": {
            "real": [
                {"id": "folder-a1", "name": "Alpha plc", "date": "2026-03-31"},
                {"id": "folder-b1", "name": "beta SA", "date": "2025-12-31"},
            ]
        },
        "workspace": {
            "runs": {
                "a1": run("a1", "alpha", "credit_snapshot"),
                "b1": run("b1", "beta", "short_snapshot"),
                "hidden": {
                    "folder": "not-listed",
                    "issuerKey": "gamma",
                    "pathway": None,
                    "modules": {},
                },
            },
            "outputs": {o["id"]: o for o in outputs},
            "handoffs": handoffs,
        },
    }


def test_nothing_published_is_none() -> None:
    assert coverage.coverage(None) is None


def test_the_fixed_columns_are_the_full_assessments_fourteen_analytical_modules() -> None:
    assert [c["code"] for c in coverage.columns()] == [
        "CP-0", "CP-1", "CP-1A", "CP-DR", "CP-2", "CP-2A", "CP-2D",
        "CP-2E", "CP-2G", "CP-4", "CP-3C", "CP-3", "CP-5", "CP-6",
    ]  # fmt: skip
    assert coverage.columns()[1] == {"code": "CP-1", "title": "Canonical data foundation"}


def test_cells_say_the_five_states_and_never_guess() -> None:
    page = coverage.coverage(_snapshot())
    assert page is not None
    assert [(i["key"], i["name"], i["sector"]) for i in page["issuers"]] == [
        ("alpha", "Alpha plc", "Aerospace"),
        ("beta", "beta SA", None),
    ]
    alpha = page["issuers"][0]["runs"][0]
    assert (alpha["asOf"], alpha["pathway"], alpha["pathwayTitle"]) == (
        "2026-03-31",
        "credit_snapshot",
        "Full credit assessment",
    )
    assert alpha["cells"]["CP-1"] == {"state": "assessed", "gaps": 1}
    assert alpha["cells"]["CP-2"] == {"state": "assessed", "gaps": 0}
    assert alpha["cells"]["CP-6"] == {"state": "not-assessable"}
    assert alpha["cells"]["CP-5"] == {"state": "unreadable"}
    assert alpha["cells"]["CP-0"] == {"state": "no-handoff"}
    assert alpha["other"] == [
        {"code": "CP-1B", "title": "Earnings delta", "state": "assessed", "gaps": 0}
    ]
    beta = page["issuers"][1]["runs"][0]
    assert beta["cells"]["CP-1"] == {"state": "assessed", "gaps": 0}
    assert beta["cells"]["CP-0"] == {"state": "no-handoff"}  # the short snapshot asks for CP-0
    assert beta["cells"]["CP-2"] == {"state": "not-in-pathway"}
    assert len(alpha["cells"]) == len(beta["cells"]) == 14


def test_figures_keep_their_text_period_unit_and_basis_and_missing_is_not_zero() -> None:
    page = coverage.coverage(_snapshot())
    assert page is not None
    net = [f for f in page["facts"] if f["field"] == "cp-1/leverage/net-debt-ebitda"]
    assert net == [
        {
            "field": "cp-1/leverage/net-debt-ebitda", "issuer": "alpha", "run": "a1",
            "period": "FY2023", "row": None, "text": "4.6", "at": 4.6, "gap": False,
            "unit": "x", "basis": "Issuer-adjusted EBITDA.", "line": 22,
            "output": "a1/CP-1.md", "sha256": "1" * 64,
        },
        {
            "field": "cp-1/leverage/net-debt-ebitda", "issuer": "alpha", "run": "a1",
            "period": "FY2024", "row": None, "text": "Not supplied: cash not stated", "at": None,
            "gap": True, "unit": "x", "basis": "Issuer-adjusted EBITDA.", "line": 23,
            "output": "a1/CP-1.md", "sha256": "1" * 64,
        },
    ]  # fmt: skip
    current = [f for f in page["facts"] if f["field"] == "cp-4/covenant-headroom/current"]
    assert [(f["row"], f["period"], f["text"], f["at"]) for f in current] == [
        ("Net leverage", None, "4.80", 4.8)
    ]
    fields = {f["id"]: f for f in page["fields"]}
    assert fields["cp-1/leverage/total-debt-ebitda"] == {
        "id": "cp-1/leverage/total-debt-ebitda",
        "module": "CP-1",
        "group": "Leverage",
        "label": "Total debt / EBITDA",
        "kind": "number",
        "series": "period",
    }
    assert fields["cp-4/covenant-headroom/current"]["series"] == "row"


def test_the_reader_summary_is_carried_as_the_module_wrote_it() -> None:
    page = coverage.coverage(_snapshot())
    assert page is not None
    said = {f["field"]: f for f in page["facts"] if f["field"].startswith("cp-2/")}
    assert said["cp-2/reader-summary/bottomline"]["text"] == "Leverage is falling."
    assert said["cp-2/reader-summary/confidence"]["text"] == "Medium"
    assert said["cp-2/reader-summary/limitation"]["text"] == "One year of data."
    finding = said["cp-2/reader-summary/finding"]
    assert (finding["text"], finding["impact"], finding["confidence"], finding["line"]) == (
        "Cash covers 2026.", "Lower refinancing risk", "High", 12,
    )  # fmt: skip
    kinds = {f["id"]: f["kind"] for f in page["fields"]}
    assert kinds["cp-2/reader-summary/confidence"] == "choice"
    assert not [f for f in page["facts"] if f["run"] == "hidden" or f["field"].startswith("cp-6/")]


def test_the_service_answers_from_the_admitted_publication_only(tmp_path: Any) -> None:
    layout = Layout(tmp_path)
    url = urlsplit("/connected/coverage")
    empty = _connected_reply(layout, url, {}, {})
    assert isinstance(empty, http_base.Reply) and empty.body is None
    library = layout.engine / "library"
    library.mkdir(parents=True)
    snapshot = {**_snapshot(), "chips": {}, "activity": {}}
    (library / "data.js").write_text(f"window.CREDIT_OS_DATA={json.dumps(snapshot)};")
    reply = _connected_reply(layout, url, {}, {})
    assert reply is not None and reply.status == 200
    assert reply.headers == {"Cache-Control": "no-store"}
    assert [issuer["name"] for issuer in reply.body["issuers"]] == ["Alpha plc", "beta SA"]
    assert _app_page("/coverage")
