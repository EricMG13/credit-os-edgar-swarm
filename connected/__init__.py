"""Serve the React build alongside the pinned legacy workflow service."""

import json
import re
import sys
import threading
import time
from contextlib import contextmanager
from pathlib import Path
from types import SimpleNamespace

from .reports import RUN_ID, read_export, report_detail, report_entries

LEGACY_REVISION = "8e3954ae024e792a2f3ecdee0b7320041f9034a7"
PROJECT = Path(__file__).resolve().parent.parent
STATIC_FILES = {"/data.js", "/symbol.svg", "/THIRD-PARTY-NOTICES.md"}
STATIC_DIRS = ("/assets/", "/fonts/")
REPORT_PREFIX = "/connected/report/"
PAGE_PATHS = {"/", "/index.html", "/start"}
PAGE_RUN = re.compile(rf"/(?:run|report)/{RUN_ID.pattern}/?")


@contextmanager
def make_server(
    legacy: Path,
    root: Path,
    *,
    web: Path | None = None,
    port: int = 0,
    launcher: tuple[str, ...] | None = None,
    synthetic: bool = False,
):
    """Construct the loopback server and own the scheduler lock for its lifetime."""
    if synthetic != bool(launcher):
        raise ValueError("an explicit launcher is required in synthetic mode only")
    legacy, root = legacy.resolve(), root.resolve()
    if root.is_relative_to(legacy) or (root / "_engine").resolve().is_relative_to(
        legacy
    ):
        raise ValueError(
            "the writable run root must be separate from the pinned legacy tree"
        )
    if (legacy / ".credit-os-revision").read_text(
        encoding="ascii"
    ).strip() != LEGACY_REVISION:
        raise ValueError(f"the legacy archive must record revision {LEGACY_REVISION}")

    src = legacy / "src"
    sys.path.insert(0, str(src))
    # Python's import cache is process-wide. Keep a process bound to its selected legacy tree.
    sys.dont_write_bytecode = True
    from deploy_workflow.inbox import runs, startup
    from deploy_workflow.inbox.layout import ensure_layout
    from deploy_workflow.inbox.scheduler import Scheduler, Settings
    from deploy_workflow.library_index import module_titles
    from deploy_workflow.run_start import service, submissions

    if not Path(service.__file__).resolve().is_relative_to(src):
        raise ValueError("this process has already imported a different legacy tree")

    dist = (web or PROJECT / "web" / "dist").resolve()
    mode = "synthetic" if synthetic else "live"
    page = (dist / "index.html").read_bytes()
    if b"<head>" not in page or page.count(b"connect-src 'none'") != 1:
        raise ValueError("the React build must include its offline index policy")
    metadata = (
        f'<meta name="credit-os-backend" content="legacy">'
        f'<meta name="credit-os-mode" content="{mode}">'
    ).encode("ascii")
    page = page.replace(b"connect-src 'none'", b"connect-src 'self'", 1)
    page = page.replace(b"<head>", b"<head>" + metadata, 1)
    page = page.replace(b'src="./', b'src="/').replace(b'href="./', b'href="/')
    context = json.loads((legacy / "cases/context/research-minimal.json").read_bytes())
    if synthetic:
        context["run"]["case_kind"] = "synthetic"
    titles = module_titles()
    sweep_lock = threading.Lock()

    class Handler(service.Handler):
        def _get(self, url):
            path = url.path
            if path in PAGE_PATHS or PAGE_RUN.fullmatch(path):
                raise service._Reply(
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
                raise service._Reply(200, context)
            if path == "/connected/reports" or path.startswith(REPORT_PREFIX):
                self._reports(path)
            if path in STATIC_FILES:
                self._file(dist, path, direct=True)
            for prefix in STATIC_DIRS:
                if path.startswith(prefix):
                    self._file(
                        dist / prefix.strip("/"), path[len(prefix) :], direct=False
                    )
            super()._get(url)

        def _reports(self, path):
            listing = path == "/connected/reports"
            run_id = path.removeprefix(REPORT_PREFIX)
            if not listing and RUN_ID.fullmatch(run_id) is None:
                raise service._refuse(404, "unknown report")
            export = read_export(
                self._layout.engine / "library" / "data.js", service._read_regular
            )
            entries = {}
            if export is not None:
                unfinished = {
                    record.id
                    for record in runs.load_all(self._layout)
                    if record.status != "finished"
                }
                entries = report_entries(export, unfinished)
            if listing:
                raise service._Reply(
                    200, {"reports": [summary for summary, _ in entries.values()]}
                )
            if run_id not in entries:
                raise service._refuse(404, "unknown report")
            raise service._Reply(200, report_detail(export, entries[run_id], titles))

        def _post(self, url):
            if not synthetic and url.path == "/api/submissions":
                # The legacy sweep locks each draft against in-flight writes. Serialize
                # sweeps with one another as well, like the scheduler's single poll loop.
                with sweep_lock:
                    queued = {
                        record.submission
                        for record in runs.load_all(self._layout)
                        if record.status == "queued" and record.submission
                    }
                    submissions.sweep(self._layout, time.time(), queued)
            super()._post(url)

        def _submit(self, sid, body):
            if not synthetic:
                raise service._refuse(
                    403, "Live execution requires separate authorization."
                )
            super()._submit(sid, body)

    settings = (
        Settings(root, launcher=launcher, poll_seconds=0.2)
        if synthetic
        else Settings(root)
    )
    # The legacy handler's upload, forecast, and read APIs require only layout and settings.
    # A real scheduler may start old queued work on its first poll.
    if synthetic:
        scheduler = Scheduler(settings)
    else:
        layout = ensure_layout(root)
        lock = startup.take_lock(layout)
        scheduler = SimpleNamespace(layout=layout, settings=settings)
    try:
        with service.make_server(scheduler, "127.0.0.1", port) as server:
            server.RequestHandlerClass = Handler
            yield server
    finally:
        if synthetic:
            scheduler.close()
        else:
            startup.release_lock(lock)


def serve(
    legacy: Path,
    root: Path,
    *,
    web: Path | None = None,
    port: int = 0,
    launcher: tuple[str, ...] | None = None,
    synthetic: bool = False,
) -> None:
    with make_server(
        legacy, root, web=web, port=port, launcher=launcher, synthetic=synthetic
    ) as server:
        print(f"http://127.0.0.1:{server.server_address[1]}/", flush=True)
        if not synthetic:
            server.serve_forever()
            return

        from deploy_workflow.run_start.service import _loop

        worker = threading.Thread(target=server.serve_forever)
        worker.start()
        try:
            _loop(server.scheduler)
        finally:
            server.shutdown()
            worker.join()
