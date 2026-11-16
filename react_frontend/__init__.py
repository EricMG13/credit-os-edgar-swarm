"""Serve the React build through this checkout's run-start HTTP service."""

from __future__ import annotations

import json
import re
import threading
from collections.abc import Iterator
from contextlib import contextmanager
from pathlib import Path
from typing import Any
from urllib.parse import SplitResult, unquote

from deploy_workflow import http_base
from deploy_workflow.inbox.layout import Layout
from deploy_workflow.inbox.scheduler import Scheduler, Settings
from deploy_workflow.run_start import service

from . import admission, artifacts, portfolio, run_activity, sources

PROJECT = Path(__file__).resolve().parent.parent
RUN_ID = re.compile(r"[0-9A-Za-z][0-9A-Za-z._-]{0,79}")
RUN_PAGE = re.compile(rf"/run/{RUN_ID.pattern}/?")
RUN_ACTIVITY = re.compile(rf"/connected/activity/({RUN_ID.pattern})")
REPORT_PAGE = re.compile(r"/report/([^/]+)/?")
REPORT_FOLDER = re.compile(r"[\w. -]+")
REPORT_PREFIX = "/connected/report/"
STATIC_FILES = {"/data.js", "/symbol.svg", "/THIRD-PARTY-NOTICES.md"}
STATIC_DIRS = ("/assets/", "/fonts/")
EXPORT_PREFIX = "window.CREDIT_OS_DATA="
EXPORT_KEYS = ("catalogue", "workspace", "activity", "chips")


def _valid_report_folder(folder: str) -> bool:
    return folder not in {".", ".."} and REPORT_FOLDER.fullmatch(folder) is not None


def _report_page(path: str) -> bool:
    """Match a retained library folder without extending the scheduler's run ID grammar."""
    found = REPORT_PAGE.fullmatch(path)
    folder = unquote(found[1]) if found else ""
    return _valid_report_folder(folder)


def _invalid_json(constant: str) -> None:
    raise ValueError(f"invalid JSON constant {constant}")


def _read_publication(path: Path) -> tuple[bytes, dict[str, Any] | None]:
    """Decode the published assignment as JSON and retain the original JSON bytes."""
    raw = http_base.read_regular(path)
    if raw is None:
        return b"null", None
    assignment = raw.decode("utf-8").rstrip()
    if not assignment.startswith(EXPORT_PREFIX) or not assignment.endswith(";"):
        raise ValueError("invalid issuer library export")
    encoded = assignment[len(EXPORT_PREFIX) : -1]
    snapshot = json.loads(encoded, parse_constant=_invalid_json)
    if not isinstance(snapshot, dict) or any(
        not isinstance(snapshot.get(key), dict) for key in EXPORT_KEYS
    ):
        raise ValueError("invalid issuer library snapshot")
    return encoded.encode("utf-8"), snapshot


def _visible_publication(layout: Layout) -> tuple[bytes, dict[str, Any] | None]:
    payload, snapshot = _read_publication(layout.engine / "library" / "data.js")
    if snapshot is None:
        return payload, None
    visible = sources.enrich(admission.admitted(snapshot, layout), layout.runs)
    return json.dumps(visible, ensure_ascii=False).encode("utf-8"), visible


def _report_entries(snapshot: dict[str, Any] | None) -> dict[str, dict[str, str]]:
    if snapshot is None:
        return {}
    workspace_runs = {run["folder"]: run for run in snapshot["workspace"]["runs"].values()}
    return {
        run_id: {
            "id": run_id,
            "issuer": run["name"],
            "asOf": run["date"] or "",
            "pathway": workspace_runs[run_id]["pathway"] or "",
        }
        for run in snapshot["catalogue"]["real"]
        if _valid_report_folder(run_id := run["id"]) and run_id in workspace_runs
    }


def _read_page(dist: Path, *, synthetic: bool, signal_url: str) -> bytes:
    page = (dist / "index.html").read_bytes()
    if b"<head>" not in page or page.count(b"connect-src 'none'") != 1:
        raise ValueError("the React build must include its offline index policy")
    mode = "synthetic" if synthetic else "live"
    metadata = (
        '<meta name="credit-os-backend" content="legacy">'
        f'<meta name="credit-os-mode" content="{mode}">'
    )
    if signal_url:
        metadata += f'<meta name="credit-os-signal-url" content="{signal_url}">'
    page = page.replace(b"connect-src 'none'", b"connect-src 'self'", 1)
    page = page.replace(b"<head>", b"<head>" + metadata.encode("ascii"), 1)
    return page.replace(b'src="./', b'src="/').replace(b'href="./', b'href="/')


def _asset_path(dist: Path, path: str) -> tuple[Path, str, bool] | None:
    if path in STATIC_FILES:
        return dist, path, True
    for prefix in STATIC_DIRS:
        if path.startswith(prefix):
            return dist / prefix.strip("/"), path.removeprefix(prefix), False
    return None


def _app_page(path: str) -> bool:
    return bool(
        path in {"/", "/index.html", "/start"} or RUN_PAGE.fullmatch(path) or _report_page(path)
    )


def _report_request(path: str) -> tuple[bool, str]:
    listing = path == "/connected/reports"
    run_id = unquote(path.removeprefix(REPORT_PREFIX))
    if not listing and not _valid_report_folder(run_id):
        raise http_base.refuse(404, "unknown report")
    return listing, run_id


def _report_response(
    entries: dict[str, dict[str, str]], listing: bool, run_id: str
) -> http_base.Reply:
    if listing:
        return http_base.Reply(200, {"reports": list(entries.values())})
    if run_id not in entries:
        return http_base.refuse(404, "unknown report")
    return http_base.Reply(200, entries[run_id])


def _require_writable(read_only: bool) -> None:
    if read_only:
        raise http_base.refuse(405, "read-only retained preview")


def _handler(
    dist: Path, page: bytes, context: dict[str, Any], *, read_only: bool = False
) -> type[service.Handler]:
    class Handler(service.Handler):
        def _post(self, url: SplitResult) -> None:
            _require_writable(read_only)
            super()._post(url)

        def _delete(self, url: SplitResult) -> None:
            _require_writable(read_only)
            super()._delete(url)

        def _get(self, url: SplitResult) -> None:
            path = url.path
            if _app_page(path):
                raise http_base.Reply(
                    200,
                    page,
                    {
                        "Content-Type": "text/html; charset=utf-8",
                        "Content-Security-Policy": "frame-ancestors 'none'",
                        "X-Frame-Options": "DENY",
                        "Cache-Control": "no-store",
                    },
                )
            if path == "/connected/context":
                cap = self._service.scheduler.settings.cap
                raise http_base.Reply(200, {**context, "submission_cap_usd": str(cap)})
            if match := RUN_ACTIVITY.fullmatch(path):
                raise run_activity.reply(
                    self._layout, match[1], self._service.scheduler.settings.cap
                )
            if path == "/connected/snapshot":
                payload, _ = self._publication()
                raise http_base.Reply(
                    200, payload, {"Content-Type": http_base.JSON, "Cache-Control": "no-store"}
                )
            if path.startswith(sources.PREFIX):
                _, snapshot = self._publication()
                raise sources.reply(url, self._layout.runs, snapshot)
            if match := artifacts.GRAPH.fullmatch(path):
                _, snapshot = self._publication()
                raise artifacts.reply(match, self._layout.engine / "runs", REPORT_FOLDER, snapshot)
            if match := portfolio.PORTFOLIO.fullmatch(path):
                _, snapshot = self._publication()
                basis = portfolio.attested(self._layout.runs, match[1], snapshot)
                raise http_base.Reply(200, {"basis": basis}, {"Cache-Control": "no-store"})
            if path == "/connected/reports" or path.startswith(REPORT_PREFIX):
                self._reports(path)
            if asset := _asset_path(dist, path):
                base, relative, direct = asset
                raise self._file(base, relative, direct=direct)
            super()._get(url)

        def _publication(self) -> tuple[bytes, dict[str, Any] | None]:
            return _visible_publication(self._layout)

        def _reports(self, path: str) -> None:
            listing, run_id = _report_request(path)
            _, snapshot = self._publication()
            entries = _report_entries(snapshot)
            raise _report_response(entries, listing, run_id)

    return Handler


@contextmanager
def make_server(  # noqa: PLR0913 - explicit launcher, mode and server options
    root: Path,
    *,
    web: Path | None = None,
    port: int = 0,
    launcher: tuple[str, ...] | None = None,
    synthetic: bool = False,
    signal_url: str = "",
    read_only: bool = False,
) -> Iterator[service._Server]:
    """Hold the upstream scheduler for the lifetime of the React HTTP server."""
    if (synthetic and not launcher) or (not synthetic and launcher is not None):
        raise ValueError("an explicit launcher is required in synthetic mode only")
    if not 0 <= port <= 65535:
        raise ValueError("--port must be from 0 to 65535")
    dist = (web or PROJECT / "web" / "dist").resolve()
    signal_link = service.signal_link(signal_url) if signal_url else ""
    page = _read_page(dist, synthetic=synthetic, signal_url=signal_link)
    context = json.loads((PROJECT / "cases/context/research-minimal.json").read_bytes())
    if synthetic:
        context["run"]["case_kind"] = "synthetic"
    settings = (
        Settings(root) if launcher is None else Settings(root, launcher=launcher, poll_seconds=0.2)
    )
    scheduler = Scheduler(settings)
    try:
        with service.make_server(scheduler, "127.0.0.1", port, signal_link) as server:
            server.RequestHandlerClass = _handler(dist, page, context, read_only=read_only)
            assert isinstance(server, service._Server)
            yield server
    finally:
        scheduler.close()


def serve(  # noqa: PLR0913 - match the server options
    root: Path,
    *,
    web: Path | None = None,
    port: int = 0,
    launcher: tuple[str, ...] | None = None,
    synthetic: bool = False,
    signal_url: str = "",
) -> None:
    with make_server(
        root, web=web, port=port, launcher=launcher, synthetic=synthetic, signal_url=signal_url
    ) as server:
        worker = threading.Thread(target=server.serve_forever)
        worker.start()
        try:
            print(f"http://127.0.0.1:{server.server_address[1]}/", flush=True)
            service._loop(server.scheduler)
        finally:
            server.shutdown()
            worker.join()
