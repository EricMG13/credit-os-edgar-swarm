import json
import os
import threading
from collections.abc import Iterator, Mapping
from decimal import Decimal
from http.client import HTTPConnection
from pathlib import Path
from tempfile import TemporaryDirectory

import pytest

from deploy_workflow.inbox import activity, runs, startup
from deploy_workflow.inbox.scheduler import Scheduler
from deploy_workflow.model.budget import Budget
from deploy_workflow.run_events import EVENTS, append_event
from deploy_workflow.run_start.service import _Server
from deploy_vii.contracts import PATHWAY_CAP_USD
from react_frontend import make_server

PROJECT = Path(__file__).resolve().parents[1]


@pytest.fixture
def web(tmp_path: Path) -> Path:
    (tmp_path / "assets").mkdir()
    (tmp_path / "index.html").write_text(
        '<html><head><meta http-equiv="Content-Security-Policy" content="connect-src \'none\'">'
        '<script src="./assets/app.js"></script></head><body></body></html>',
        encoding="utf-8",
    )
    (tmp_path / "assets" / "app.js").write_text("void 0", encoding="utf-8")
    return tmp_path


@pytest.fixture
def root() -> Iterator[Path]:
    with TemporaryDirectory(dir=None if os.name == "nt" else "/tmp") as name:
        yield Path(name)


@pytest.fixture
def hosted(root: Path, web: Path, monkeypatch: pytest.MonkeyPatch) -> Iterator[_Server]:
    monkeypatch.setenv("OPENAI_API_KEY", "offline-test")
    with make_server(root, web=web, signal_url="http://localhost:8766") as server:
        thread = threading.Thread(target=server.serve_forever)
        thread.start()
        try:
            yield server
        finally:
            server.shutdown()
            thread.join()


def request(
    server: _Server,
    path: str,
    method: str = "GET",
    *,
    headers: Mapping[str, str] | None = None,
    body: str | None = None,
) -> tuple[int, bytes, dict[str, str]]:
    connection = HTTPConnection("127.0.0.1", server.server_address[1], timeout=5)
    try:
        connection.request(method, path, headers=headers or {}, body=body)
        reply = connection.getresponse()
        return reply.status, reply.read(), dict(reply.getheaders())
    finally:
        connection.close()


def test_react_page_routes_serve_the_build(hosted: _Server, web: Path) -> None:
    status, page, headers = request(hosted, "/")
    assert status == 200
    assert b'credit-os-backend" content="legacy"' in page
    assert b'credit-os-mode" content="live"' in page
    assert b'credit-os-signal-url" content="http://localhost:8766/"' in page
    assert b"connect-src 'self'" in page
    assert b"connect-src 'none'" in (web / "index.html").read_bytes()
    assert headers["X-Frame-Options"] == "DENY"
    assert headers["Cross-Origin-Resource-Policy"] == "same-origin"
    for path in ("/start", "/run/demo", "/report/demo/", "/report/Rapport%20%C3%89metteur"):
        assert request(hosted, path)[:2] == (200, page)
    assert b'src="/assets/app.js"' in page
    assert request(hosted, "/assets/app.js")[:2] == (200, b"void 0")
    assert request(hosted, "/run/demo/extra")[0] == 404
    for path in (
        "/report/%2e%2e",
        "/report/demo%2Fother",
        "/report/demo%5Cother",
        "/run/demo%20old",
    ):
        assert request(hosted, path)[0] == 404


def test_same_origin_service_and_submit_gate(hosted: _Server) -> None:
    context = json.loads((PROJECT / "cases/context/research-minimal.json").read_bytes())
    assert json.loads(request(hosted, "/connected/context")[1]) == {
        **context,
        "submission_caps_usd": {pathway: str(cap) for pathway, cap in PATHWAY_CAP_USD.items()},
    }
    assert request(hosted, "/connected/context", headers={"Origin": "http://other.test"})[0] == 403
    assert request(hosted, "/connected/snapshot", headers={"Host": "other.test"})[0] == 403
    assert request(hosted, "/api/submissions", "POST")[0] == 403
    origin = f"http://127.0.0.1:{hosted.server_address[1]}"
    headers = {"Origin": origin}
    status, body, _ = request(hosted, "/api/submissions", "POST", headers=headers)
    assert status == 200
    sid = json.loads(body)["id"]
    assert (
        request(hosted, f"/api/submissions/{sid}/submit", "POST", headers=headers, body="{}")[0]
        == 400
    )


def test_activity_uses_the_pinned_cap_and_curates_native_events(hosted: _Server) -> None:
    layout = hosted.scheduler.layout
    runs.save(
        layout,
        runs.Record(
            id="activity",
            pathway="credit_snapshot",
            folder="activity",
            status="interrupted",
            claimed_at="2026-10-31T12:00:00Z",
        ),
    )
    directory = layout.runs / "activity"
    directory.mkdir(parents=True, exist_ok=True)
    (directory / "workflow.json").write_text(
        '{"execution":"live-provider","provider_cap_usd":"50.00",'
        '"instructions":{"CP-0":{},"CP-1":{}}}',
        encoding="utf-8",
    )
    budget = Budget(Decimal(50), directory / "live")
    budget.reserve("call", Decimal(2), config_id="sol-medium")
    budget.settle("call", Decimal("1.25"))
    append_event(directory, "module_started", module="CP-0", reason="/local/file/path")
    append_event(directory, "module_accepted", module="CP-0")
    append_event(directory, "provider_call", body="private provider data")
    append_event(directory, "module_started", module="outside the prepared plan")
    status, raw, headers = request(hosted, "/connected/activity/activity")
    assert status == 200 and headers["Cache-Control"] == "no-store"
    record = json.loads(raw)
    assert record["cap"] == "50.00"
    assert record["execution"] == "live-provider"
    assert Decimal(record["spent"]) == Decimal("1.25")
    assert record["modules"] == [["CP-0", "done"], ["CP-1", "waiting"], ["Report", "waiting"]]
    assert [event["kind"] for event in record["events"]] == ["module_started", "module_accepted"]
    assert set(record["events"][0]) == {"kind", "at", "module"}
    (directory / EVENTS).write_text("invalid event\n{}\n", encoding="utf-8")
    assert json.loads(request(hosted, "/connected/activity/activity")[1])["events"] is None
    assert request(hosted, "/connected/activity/unknown")[0] == 404


def test_activity_list_shows_runs_in_progress_without_spend_or_file_names(hosted: _Server) -> None:
    scheduler = hosted.scheduler
    assert isinstance(scheduler, Scheduler)
    layout = scheduler.layout
    for record in (
        runs.Record(
            id="b-queued",
            pathway="credit_snapshot",
            folder="b-queued",
            status="queued",
            claimed_at="2026-10-31T12:00:00Z",
            issuer_name="Harbour Packaging",
            reason="3 runs are already running",
        ),
        runs.Record(
            id="a-running",
            pathway="credit_snapshot",
            folder="a-running",
            status="running",
            claimed_at="2026-10-31T12:00:00Z",
            issuer_name="Meridian Foods",
            started_at="2026-10-31T12:01:00Z",
            files=("annual-report.pdf", "notes.pdf"),
            submitted_by="Dana Reyes",
            name_differs=True,
        ),
        runs.Record(
            id="c-finished",
            pathway="credit_snapshot",
            folder="c-finished",
            status="finished",
            claimed_at="2026-10-31T11:00:00Z",
            ended_at="2026-10-31T11:30:00Z",
        ),
    ):
        runs.save(layout, record)
    directory = layout.runs / "a-running"
    directory.mkdir(parents=True, exist_ok=True)
    (directory / "workflow.json").write_text(
        '{"instructions":{"CP-0":{},"CP-1":{}}}', encoding="utf-8"
    )
    append_event(directory, "module_started", module="CP-0")
    append_event(directory, "module_accepted", module="CP-0")
    held = "daily limit of 30 runs reached; waiting until tomorrow"
    assert json.loads(request(hosted, "/connected/activity")[1])["held"] == ""
    activity.write(layout, {"updated": "", "cap": "20", "held": held, "runs": []})

    status, raw, headers = request(hosted, "/connected/activity")

    assert status == 200 and headers["Cache-Control"] == "no-store"
    listing = json.loads(raw)
    assert set(listing) == {"updated", "held", "runs", "ended"}
    assert listing["held"] == held
    running, queued = listing["runs"]
    assert running == {
        "id": "a-running",
        "issuer_name": "Meridian Foods",
        "pathway": "credit_snapshot",
        "status": "running",
        "reason": "",
        "submitted_by": "Dana Reyes",
        "started_at": "2026-10-31T12:01:00Z",
        "name_differs": True,
        "stalled": False,
        "files": 2,
        "modules": [["CP-0", "done"], ["CP-1", "waiting"], ["Report", "waiting"]],
    }
    assert (queued["id"], queued["status"], queued["reason"], queued["files"]) == (
        "b-queued",
        "queued",
        "3 runs are already running",
        0,
    )
    assert set(queued) == set(running)
    page_status, _, page_headers = request(hosted, "/runs")
    assert page_status == 200 and page_headers["Content-Type"].startswith("text/html")


def _ended_record(run_id: str, status: runs.Status, minute: int, reason: str = "") -> runs.Record:
    return runs.Record(
        id=run_id,
        pathway="credit_snapshot",
        folder=run_id,
        status=status,
        claimed_at="2026-10-31T11:00:00Z",
        ended_at=f"2026-10-31T12:{minute:02d}:00Z",
        issuer_name="Harbour Packaging",
        reason=reason,
        submitted_by="analyst",
        files=("annual-report.pdf",),
    )


def test_activity_list_shows_ended_runs_without_spend_or_file_names(hosted: _Server) -> None:
    scheduler = hosted.scheduler
    assert isinstance(scheduler, Scheduler)
    layout = scheduler.layout
    for record in (
        _ended_record("c-capped", "capped", 5, "Spending cap reached"),
        _ended_record("d-failed", "failed", 10, "Provider error"),
        _ended_record("e-finished", "finished", 20),
        runs.Record(
            id="a-running",
            pathway="credit_snapshot",
            folder="a-running",
            status="running",
            claimed_at="2026-10-31T12:00:00Z",
        ),
    ):
        runs.save(layout, record)

    status, raw, _ = request(hosted, "/connected/activity")

    assert status == 200
    listing = json.loads(raw)
    assert set(listing) == {"updated", "held", "runs", "ended"}
    assert [run["id"] for run in listing["ended"]] == ["d-failed", "c-capped"]
    assert set(listing["ended"][0]) == {
        "id",
        "issuer_name",
        "pathway",
        "status",
        "reason",
        "ended_at",
        "submitted_by",
    }
    assert listing["ended"][1]["reason"] == "Spending cap reached"
    assert [run["id"] for run in listing["runs"]] == ["a-running"]


def test_activity_list_keeps_the_twenty_latest_ended_runs(hosted: _Server) -> None:
    scheduler = hosted.scheduler
    assert isinstance(scheduler, Scheduler)
    for minute in range(25):
        runs.save(scheduler.layout, _ended_record(f"f-{minute:02d}", "failed", minute))

    listing = json.loads(request(hosted, "/connected/activity")[1])

    assert len(listing["ended"]) == 20
    assert listing["ended"][0]["ended_at"] == "2026-10-31T12:24:00Z"
    assert listing["ended"][-1]["ended_at"] == "2026-10-31T12:05:00Z"


def test_reports_admission_and_reader_snapshot(hosted: _Server, root: Path) -> None:
    scheduler = hosted.scheduler
    assert isinstance(scheduler, Scheduler)
    library = root / "_engine" / "library"
    publication = library / "data.js"
    publication.unlink(missing_ok=True)
    assert request(hosted, "/connected/snapshot")[:2] == (200, b"null")
    assert request(hosted, "/connected/report/demo")[0] == 404
    library.mkdir(exist_ok=True)
    export = {
        "catalogue": {"real": [{"id": "demo", "name": "Émetteur", "date": "2026-10-31"}]},
        "workspace": {"runs": {"run-key": {"folder": "demo", "pathway": "credit_snapshot"}}},
        "activity": {"excluded": [], "issues": []},
        "chips": {"output:1": [{"text": "<script>test</script>"}]},
    }
    publication.write_text(f"window.CREDIT_OS_DATA={json.dumps(export)};\n", encoding="utf-8")
    record = runs.Record(
        id="demo", pathway="credit_snapshot", folder="demo", status="running", claimed_at=""
    )
    runs.save(scheduler.layout, record)
    hidden = json.loads(request(hosted, "/connected/snapshot")[1])
    assert hidden["workspace"]["runs"] == {}
    assert hidden["catalogue"]["real"] == []
    assert hidden["chips"] == {}
    assert request(hosted, "/connected/artifacts/demo")[0] == 404
    assert request(hosted, "/connected/report/demo")[0] == 404
    assert json.loads(request(hosted, "/connected/reports")[1]) == {"reports": []}
    for state in ("failed", "capped", "interrupted", "rejected", "queued"):
        record.status = state
        runs.save(scheduler.layout, record)
        assert json.loads(request(hosted, "/connected/snapshot")[1])["workspace"]["runs"] == {}
        assert request(hosted, "/connected/report/demo")[0] == 404
    record.status = "finished"
    runs.save(scheduler.layout, record)
    assert json.loads(request(hosted, "/connected/snapshot")[1]) == export
    status, result, _ = request(hosted, "/connected/report/demo")
    assert status == 200
    assert json.loads(result) == {
        "id": "demo",
        "issuer": "Émetteur",
        "asOf": "2026-10-31",
        "pathway": "credit_snapshot",
    }
    assert json.loads(request(hosted, "/connected/reports")[1]) == {"reports": [json.loads(result)]}
    publication.write_text("window.CREDIT_OS_DATA={};console.log(0);", encoding="utf-8")
    assert request(hosted, "/connected/snapshot")[0] == 500


def test_inherits_startup_checks_and_workspace_lock(
    hosted: _Server, root: Path, web: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    with (
        pytest.raises(startup.StartupRefused, match="another run page service"),
        make_server(root, web=web),
    ):
        pytest.fail("two schedulers held the same lock")
    monkeypatch.delenv("OPENAI_API_KEY")
    with (
        pytest.raises(startup.StartupRefused, match="OPENAI_API_KEY is not set"),
        make_server(root, web=web),
    ):
        pytest.fail("started without the required key")
    with (
        pytest.raises(ValueError, match="synthetic mode"),
        make_server(root, web=web, launcher=("unspecified",)),
    ):
        pytest.fail("accepted a launcher outside synthetic mode")


def test_synthetic_mode_uses_the_explicit_launcher(
    root: Path, web: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    monkeypatch.setenv("OPENAI_API_KEY", "offline-test")
    launcher = ("unused-by-test",)
    with make_server(root, web=web, launcher=launcher, synthetic=True) as server:
        assert server.scheduler.settings.launcher == launcher
        thread = threading.Thread(target=server.serve_forever)
        thread.start()
        try:
            page = request(server, "/")[1]
            assert b'credit-os-mode" content="synthetic"' in page
            assert b'credit-os-signal-url"' not in page
            expected = json.loads((PROJECT / "cases/context/research-minimal.json").read_bytes())
            expected["run"]["case_kind"] = "synthetic"
            expected["submission_caps_usd"] = {
                pathway: str(cap) for pathway, cap in PATHWAY_CAP_USD.items()
            }
            assert json.loads(request(server, "/connected/context")[1]) == expected
        finally:
            server.shutdown()
            thread.join()


def test_empty_launcher_refused_in_both_modes(root: Path, web: Path) -> None:
    for synthetic in (False, True):
        with (
            pytest.raises(ValueError, match="synthetic mode"),
            make_server(root, web=web, launcher=(), synthetic=synthetic),
        ):
            pytest.fail("accepted an empty launcher")


def test_only_same_run_published_forecast_artifacts_are_downloadable(
    hosted: _Server, root: Path
) -> None:
    engine = root / "_engine"
    digest = "b" * 64
    delivery = engine / "runs" / "one" / "deliveries" / digest
    delivery.mkdir(parents=True)
    (delivery / "calculation.json").write_bytes(b'{"exact":"1.25"}\r\n')
    (delivery / "forecast_exact.json").write_bytes(b"{}")
    published = {
        "catalogue": {"real": []},
        "workspace": {
            "runs": {
                "one": {
                    "folder": "one",
                    "evidence": {
                        "downloads": [
                            {"href": f"../runs/one/deliveries/{digest}/calculation.json"},
                            {"href": f"../runs/two/deliveries/{digest}/forecast_exact.json"},
                        ]
                    },
                }
            }
        },
        "activity": {},
        "chips": {},
    }
    library = engine / "library"
    library.mkdir(exist_ok=True)
    (library / "data.js").write_text(f"window.CREDIT_OS_DATA={json.dumps(published)};")
    endpoint = "/connected/artifacts/one"
    files = json.loads(request(hosted, endpoint)[1])["files"]
    path = f"{endpoint}/{digest}/calculation.json"
    assert files == [{"label": "Calculation JSON", "href": path}]
    assert request(hosted, path)[:2] == (200, b'{"exact":"1.25"}\r\n')
    assert request(hosted, f"{endpoint}/{digest}/forecast_exact.json")[0] == 404
    assert request(hosted, f"/connected/artifacts/two/{digest}/calculation.json")[0] == 404
