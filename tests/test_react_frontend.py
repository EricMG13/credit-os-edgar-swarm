import json
import os
import threading
from collections.abc import Iterator, Mapping
from http.client import HTTPConnection
from pathlib import Path
from tempfile import TemporaryDirectory

import pytest

from deploy_workflow.inbox import runs, startup
from deploy_workflow.inbox.scheduler import Scheduler
from deploy_workflow.run_start.service import _Server
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
    assert json.loads(request(hosted, "/connected/context")[1]) == context
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


def test_reports_admission_and_raw_snapshot(hosted: _Server, root: Path) -> None:
    scheduler = hosted.scheduler
    assert isinstance(scheduler, Scheduler)
    assert scheduler.settings.cap == 20
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
    assert json.loads(request(hosted, "/connected/snapshot")[1]) == export
    assert request(hosted, "/connected/report/demo")[0] == 404
    assert json.loads(request(hosted, "/connected/reports")[1]) == {"reports": []}
    record.status = "finished"
    runs.save(scheduler.layout, record)
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
        assert server.scheduler.settings.cap == 20
        thread = threading.Thread(target=server.serve_forever)
        thread.start()
        try:
            page = request(server, "/")[1]
            assert b'credit-os-mode" content="synthetic"' in page
            assert b'credit-os-signal-url"' not in page
            expected = json.loads((PROJECT / "cases/context/research-minimal.json").read_bytes())
            expected["run"]["case_kind"] = "synthetic"
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
