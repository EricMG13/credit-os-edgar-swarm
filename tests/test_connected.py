import json
import os
import threading
import time
from http.client import HTTPConnection
from pathlib import Path
from tempfile import TemporaryDirectory

import pytest

from connected import make_server
from connected.reports import reader_sections

PROJECT = Path(__file__).resolve().parents[1]
LEGACY = PROJECT / ".legacy"


def test_reader_filters_handoff_transport_but_keeps_evidence():
    sections = [
        {
            "level": 2,
            "heading": "Request",
            "blocks": [{"type": "text", "text": "HIDDEN"}],
        },
        {
            "level": 3,
            "heading": "Indented",
            "blocks": [{"type": "text", "text": "HIDDEN"}],
        },
        {"level": 2, "heading": "Findings", "blocks": []},
        {
            "level": 3,
            "heading": "Key findings",
            "blocks": [
                {"type": "text", "text": "Recorded basis: communiqué"},
                {
                    "type": "table",
                    "headers": ["Module", "Source", "downstream_use", "Downstream Use"],
                    "rows": [
                        {"cells": ["CP-1", "source.pdf", "HIDDEN", "Eligibility"]}
                    ],
                },
            ],
        },
    ]
    assert reader_sections(sections) == [
        {
            "title": "Key findings",
            "paragraphs": ["Recorded basis: communiqué"],
            "tables": [
                {
                    "headers": ["Module", "Source", "Downstream Use"],
                    "rows": [["CP-1", "source.pdf", "Eligibility"]],
                }
            ],
        }
    ]


@pytest.fixture
def service(tmp_path):
    web = tmp_path / "web"
    (web / "assets").mkdir(parents=True)
    (web / "index.html").write_text(
        '<html><head><meta http-equiv="Content-Security-Policy" content="connect-src \'none\'">'
        '<script src="./assets/app.js"></script></head><body></body></html>'
    )
    (web / "assets" / "app.js").write_text("void 0")
    with (
        TemporaryDirectory(
            prefix="credit-os-test-", dir=None if os.name == "nt" else "/tmp"
        ) as name,
        make_server(LEGACY, Path(name), web=web) as server,
    ):
        thread = threading.Thread(target=server.serve_forever)
        thread.start()
        try:
            yield server, web, Path(name) / "_engine" / "library"
        finally:
            server.shutdown()
            thread.join()


def request(server, path, method="GET", *, headers=None, body=None):
    connection = HTTPConnection(*server.server_address, timeout=5)
    try:
        connection.request(method, path, body=body, headers=headers or {})
        reply = connection.getresponse()
        return reply.status, reply.read(), dict(reply.getheaders())
    finally:
        connection.close()


def test_service_keeps_legacy_validation_and_static_policy(service):
    server, web, _ = service
    status, page, headers = request(server, "/")
    assert status == 200
    assert b'credit-os-backend" content="legacy"' in page
    assert b'credit-os-mode" content="live"' in page
    assert b"connect-src 'self'" in page
    assert b"connect-src 'none'" in (web / "index.html").read_bytes()
    assert headers["X-Frame-Options"] == "DENY"
    for page_path in ("/start", "/run/example", "/report/example/"):
        assert request(server, page_path)[:2] == (200, page)
    assert b'src="/assets/app.js"' in page
    assert request(server, "/run/example/extra")[0] == 404
    assert request(server, "/assets/app.js")[:2] == (200, b"void 0")
    assert request(server, "/connected/context")[0] == 200
    assert (
        request(
            server, "/connected/context", headers={"Origin": "https://elsewhere.test"}
        )[0]
        == 403
    )
    assert (
        request(server, "/connected/context", headers={"Host": "elsewhere.test"})[0]
        == 403
    )
    origin = f"http://127.0.0.1:{server.server_address[1]}"
    status, body, _ = request(
        server, "/api/submissions", "POST", headers={"Origin": origin}
    )
    assert status == 200
    sid = json.loads(body)["id"]
    assert (
        request(
            server,
            f"/api/submissions/{sid}/submit",
            "POST",
            headers={"Origin": origin},
            body="{}",
        )[0]
        == 403
    )


def test_reports_require_generated_library_export(service):
    server, _, library = service
    assert json.loads(request(server, "/connected/reports")[1]) == {"reports": []}
    assert request(server, "/connected/report/demo")[0] == 404
    library.mkdir()
    (library / "data.js").write_text(
        "window.CREDIT_OS_DATA="
        + json.dumps(
            {
                "catalogue": {
                    "real": [
                        {"id": "demo", "name": "Northbridge", "date": "2026-10-31"}
                    ]
                },
                "workspace": {
                    "runs": {
                        "run-key": {
                            "folder": "demo",
                            "pathway": "credit_snapshot",
                            "modules": {"CP-0": {"default": "demo/CP-0.md"}},
                            "evidence": {
                                "handoffs": [
                                    {"module": "CP-0", "href": "downloads/demo/CP-0.md"}
                                ]
                            },
                        }
                    },
                    "outputs": {"demo/CP-0.md": {"sha256": "digest"}},
                    "handoffs": {
                        "digest": [
                            {
                                "heading": "Key findings",
                                "level": 3,
                                "blocks": [
                                    {"type": "text", "text": "Published finding."}
                                ],
                            }
                        ]
                    },
                },
            }
        )
        + ";\n"
    )
    status, body, _ = request(server, "/connected/report/demo")
    assert status == 200
    report = json.loads(body)
    assert report["issuer"] == "Northbridge"
    assert report["modules"][0]["sections"][0]["paragraphs"] == ["Published finding."]
    assert report["modules"][0]["download"] == "/library/downloads/demo/CP-0.md"
    assert request(server, "/connected/report/absent")[0] == 404


def test_report_keeps_named_modules_in_recorded_order():
    from connected.reports import report_detail

    codes = ["CP-0", "CP-MODEL"]
    export = {
        "workspace": {
            "outputs": {code: {"sha256": code} for code in codes},
            "handoffs": {code: [] for code in codes},
        }
    }
    published = {
        "record": {"steps": [{"module": "CP-MODEL"}]},
        "modules": {code: {"default": code} for code in codes},
        "evidence": {"handoffs": []},
    }
    report = report_detail(export, ({"id": "demo"}, published), {})
    assert [module["id"] for module in report["modules"]] == ["CP-MODEL", "CP-0"]


def test_report_waits_for_scheduler_to_mark_published_run_finished(service):
    from deploy_workflow.inbox import runs

    server, _, library = service
    library.mkdir()
    (library / "data.js").write_text(
        'window.CREDIT_OS_DATA={"catalogue":{"real":[{"id":"demo","name":"Issuer","date":""}]},'
        '"workspace":{"runs":{"demo":{"folder":"demo","pathway":"credit_snapshot",'
        '"modules":{},"evidence":{"handoffs":[]}}}}};\n'
    )
    record = runs.Record(
        id="demo",
        pathway="credit_snapshot",
        folder="demo",
        status="running",
        claimed_at="",
    )
    runs.save(server.scheduler.layout, record)
    assert request(server, "/connected/report/demo")[0] == 404
    assert json.loads(request(server, "/connected/reports")[1]) == {"reports": []}
    record.status = "finished"
    runs.save(server.scheduler.layout, record)
    assert request(server, "/connected/report/demo")[0] == 200


def test_new_preview_draft_sweeps_stale_uploads_and_preserves_queued(
    service, monkeypatch
):
    from deploy_workflow.inbox import runs
    from deploy_workflow.run_start import submissions

    server, _, _ = service
    layout = server.scheduler.layout
    monkeypatch.setattr(submissions, "MAX_OPEN", 2)
    stale = time.time() - submissions.STALE_SECONDS - 60
    expired = "a" * 32
    queued = "b" * 32
    for draft in (expired, queued):
        entry = layout.uploads / draft
        (entry / "files").mkdir(parents=True)
        os.utime(entry, (stale, stale))
    runs.save(
        layout,
        runs.Record(
            id="held",
            pathway="credit_snapshot",
            folder="held",
            status="queued",
            claimed_at="",
            submission=queued,
        ),
    )
    origin = f"http://127.0.0.1:{server.server_address[1]}"
    status, body, _ = request(
        server, "/api/submissions", "POST", headers={"Origin": origin}
    )
    assert status == 200
    assert not (layout.uploads / expired).exists()
    assert (layout.uploads / queued).is_dir()
    assert (layout.uploads / json.loads(body)["id"]).is_dir()


def test_preview_holds_legacy_workspace_lock(service):
    from deploy_workflow.inbox.startup import StartupRefused

    server, web, _ = service
    with (
        pytest.raises(StartupRefused, match="another run page service"),
        make_server(LEGACY, server.scheduler.layout.root, web=web),
    ):
        pytest.fail("a second service took the same workspace lock")
