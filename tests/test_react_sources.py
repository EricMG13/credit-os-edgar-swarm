"""Original issuer bytes and model page numbering behind admitted Evidence links."""

from __future__ import annotations

import errno
import hashlib
import json
import os
import shutil
import threading
from http.client import HTTPConnection
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import Any
from urllib.parse import quote, urlsplit

import pytest

from deploy_workflow import http_base
from deploy_workflow.inbox import runs
from deploy_workflow.inbox.layout import Layout
from deploy_workflow.model.handoff import _pages
from react_frontend import _visible_publication, make_server, sources
from tests.test_pdf_form_text import make as form_pdf

NAME = "Issuer report.txt"
RAW = b"A" * 12000 + b"Second page: exact 123\n<script>no execution</script>\n"
SHA = hashlib.sha256(RAW).hexdigest()
FOLDER = "retained-01"
OUTPUT = "retained-01/CP-1.md"
HANDOFF = "a" * 64


def _table(headers: list[str], cells: list[str]) -> dict[str, Any]:
    return {"type": "table", "line": 2, "headers": headers, "rows": [{"line": 3, "cells": cells}]}


@pytest.fixture
def published(tmp_path: Path) -> tuple[Layout, dict[str, Any]]:
    layout = Layout(tmp_path)
    layout.state.mkdir(parents=True)
    folder = layout.runs / FOLDER
    (folder / "inputs").mkdir(parents=True)
    (folder / "inputs" / SHA).write_bytes(RAW)
    (folder / "workflow.json").write_text(json.dumps({"sources": {NAME: {"sha256": SHA}}}))
    evidence = {"sources": [{"name": NAME, "sha256": SHA}], "unused": [], "unrecorded": []}
    record = {"folder": FOLDER, "modules": {"CP-1": {"outputs": [OUTPUT]}}, "evidence": evidence}
    snapshot = {
        "catalogue": {"real": [{"id": FOLDER}]},
        "workspace": {
            "runs": {"run-key": record},
            "outputs": {OUTPUT: {"module": "CP-1", "run": "run-key", "sha256": HANDOFF}},
            "handoffs": {
                HANDOFF: [
                    {
                        "heading": "Bottom line",
                        "level": 2,
                        "line": 1,
                        "blocks": [
                            {"type": "text", "line": 2, "text": f"Claim.\nBasis: {NAME}, page 2."}
                        ],
                    }
                ]
            },
        },
        "activity": {},
        "chips": {},
    }
    return layout, snapshot


def _link() -> str:
    return f"{sources.PREFIX}{FOLDER}/{SHA}/{quote(NAME, safe='')}"


def _write_publication(layout: Layout, snapshot: dict[str, Any]) -> None:
    library = layout.engine / "library"
    library.mkdir(exist_ok=True)
    (library / "data.js").write_text(f"window.CREDIT_OS_DATA={json.dumps(snapshot)};")


def test_exact_original_and_native_page_identity(published: tuple[Layout, dict[str, Any]]) -> None:
    layout, original = published
    enriched = sources.enrich(original, layout.runs)
    [chip] = enriched["chips"][f"{OUTPUT}:2"]
    assert chip["sha256"] == SHA and chip["hash_matches_inventory"] is True
    assert chip["excerpt"] == RAW[12000:].decode()
    assert chip["href"] == _link() and chip["pageHref"] == _link() + "?page=2"
    assert "href" not in original["workspace"]["runs"]["run-key"]["evidence"]["sources"][0]
    response = sources.reply(urlsplit(_link()), layout.runs, enriched)
    assert response.body == RAW and hashlib.sha256(response.body).hexdigest() == SHA
    assert response.headers["Content-Type"] == "text/plain; charset=utf-8"
    assert response.headers["X-Content-Type-Options"] == "nosniff"
    assert "sandbox" in response.headers["Content-Security-Policy"]
    page = sources.reply(urlsplit(chip["pageHref"]), layout.runs, enriched)
    assert page.body == _pages(NAME, RAW)[1].encode() == RAW[12000:]


def test_pdf_form_text_reaches_source_page_without_changing_original(
    published: tuple[Layout, dict[str, Any]],
) -> None:
    layout, snapshot = published
    raw = form_pdf()
    digest = hashlib.sha256(raw).hexdigest()
    name = "Issuer form.pdf"
    folder = layout.runs / FOLDER
    (folder / "inputs" / digest).write_bytes(raw)
    (folder / "workflow.json").write_text(json.dumps({"sources": {name: {"sha256": digest}}}))
    record = snapshot["workspace"]["runs"]["run-key"]
    record["evidence"]["sources"] = [{"name": name, "sha256": digest}]
    url = f"{sources.PREFIX}{FOLDER}/{digest}/{quote(name, safe='')}"
    page = sources.reply(urlsplit(url + "?page=1"), layout.runs, snapshot)
    assert isinstance(page.body, bytes)
    assert b"Page heading 2026" in page.body
    assert b"Revenue 4,275.5" in page.body
    assert b"reading-order" in page.body.lower()
    original = sources.reply(urlsplit(url), layout.runs, snapshot)
    assert original.body == raw
    assert (folder / "inputs" / digest).read_bytes() == raw


def test_original_sha_inventory_headers_cannot_turn_hash_into_filename(
    published: tuple[Layout, dict[str, Any]],
) -> None:
    layout, snapshot = published
    record = snapshot["workspace"]["runs"]["run-key"]
    record["modules"]["CP-0"] = {"outputs": ["cp0"]}
    snapshot["workspace"]["outputs"]["cp0"] = {"module": "CP-0", "sha256": "b" * 64}
    snapshot["workspace"]["handoffs"]["b" * 64] = [
        {
            "heading": "Input inventory",
            "level": 2,
            "line": 1,
            "blocks": [_table(["Original", "sha256", "Role"], [NAME, SHA, "issuer"])],
        }
    ]
    enriched = sources.enrich(snapshot, layout.runs)
    [chip] = enriched["chips"][f"{OUTPUT}:2"]
    assert chip["file"] == NAME and chip["sha256"] == SHA
    assert chip["pageHref"] == _link() + "?page=2"


@pytest.mark.parametrize(
    "failure", ["missing", "hash", "pin", "workflow", "symlink", "parent-link"]
)
def test_unverified_sources_have_warning_and_no_links(
    published: tuple[Layout, dict[str, Any]],
    failure: str,
) -> None:
    layout, snapshot = published
    folder = layout.runs / FOLDER
    file = folder / "inputs" / SHA
    if failure == "missing":
        file.unlink()
    elif failure == "hash":
        file.write_bytes(b"changed")
    elif failure == "pin":
        (folder / "workflow.json").write_text(json.dumps({"sources": {NAME: {"sha256": "c" * 64}}}))
    elif failure == "workflow":
        (folder / "workflow.json").unlink()
    else:
        file.unlink()
        outside = layout.root / "outside"
        outside.mkdir()
        (outside / SHA).write_bytes(RAW)
        if failure == "symlink":
            file.symlink_to(outside / SHA)
        else:
            file.parent.rmdir()
            file.parent.symlink_to(outside, target_is_directory=True)
    enriched = sources.enrich(snapshot, layout.runs)
    [source] = enriched["workspace"]["runs"]["run-key"]["evidence"]["sources"]
    assert source["sourceWarning"] and "href" not in source
    assert all(
        "href" not in chip and "pageHref" not in chip
        for row in enriched["chips"].values()
        for chip in row
    )
    with pytest.raises(http_base.Reply) as error:
        sources.reply(urlsplit(_link()), layout.runs, enriched)
    assert error.value.status == 404


@pytest.mark.parametrize(
    "query",
    ["page=0", "page=-1", "page=1&page=2", "end=2", "page=", "page=1&extra=2", "page=10000000000"],
)
def test_bad_page_queries_are_rejected(
    published: tuple[Layout, dict[str, Any]], query: str
) -> None:
    layout, snapshot = published
    with pytest.raises(http_base.Reply) as error:
        sources.reply(urlsplit(_link() + "?" + query), layout.runs, snapshot)
    assert error.value.status == 400


@pytest.mark.parametrize("query", ["page=3", "page=2&end=1", "page=1&end=3"])
def test_missing_pages_are_not_invented(
    published: tuple[Layout, dict[str, Any]], query: str
) -> None:
    layout, snapshot = published
    with pytest.raises(http_base.Reply) as error:
        sources.reply(urlsplit(_link() + "?" + query), layout.runs, snapshot)
    assert error.value.status == 404


def test_admission_and_stale_links_are_rechecked(published: tuple[Layout, dict[str, Any]]) -> None:
    layout, snapshot = published
    _write_publication(layout, snapshot)
    runs.save(
        layout,
        runs.Record(
            id=FOLDER, folder=FOLDER, pathway="credit_snapshot", status="running", claimed_at=""
        ),
    )
    _, hidden = _visible_publication(layout)
    assert hidden is not None and hidden["workspace"]["runs"] == {}
    with pytest.raises(http_base.Reply):
        sources.reply(urlsplit(_link()), layout.runs, hidden)
    runs.save(
        layout,
        runs.Record(
            id=FOLDER, folder=FOLDER, pathway="credit_snapshot", status="finished", claimed_at=""
        ),
    )
    _, visible = _visible_publication(layout)
    assert sources.reply(urlsplit(_link()), layout.runs, visible).body == RAW
    (layout.runs / FOLDER / "inputs" / SHA).write_bytes(b"changed after snapshot")
    with pytest.raises(http_base.Reply):
        sources.reply(urlsplit(_link()), layout.runs, visible)


def test_unpublished_and_traversal_names_cannot_open_inputs(
    published: tuple[Layout, dict[str, Any]],
) -> None:
    layout, snapshot = published
    for link in [
        _link().replace(quote(NAME), "unpublished.txt"),
        _link().replace(FOLDER, "%2e%2e"),
        _link().replace(quote(NAME), "%2e%2e%2fsecret.txt"),
        _link().replace(quote(NAME), "C%3Asecret.txt"),
    ]:
        with pytest.raises(http_base.Reply) as error:
            sources.reply(urlsplit(link), layout.runs, snapshot)
        assert error.value.status == 404


def test_legacy_chips_survive_missing_workflow_authority(
    published: tuple[Layout, dict[str, Any]],
) -> None:
    layout, snapshot = published
    (layout.runs / FOLDER / "workflow.json").unlink()
    old = {
        "file": NAME,
        "sha256": SHA,
        "excerpt": "Retained legacy excerpt",
        "href": "/unverified",
        "pageHref": "/unverified?page=2",
    }
    snapshot["chips"][f"{OUTPUT}:2"] = [old]
    enriched = sources.enrich(snapshot, layout.runs)
    [chip] = enriched["chips"][f"{OUTPUT}:2"]
    assert chip == {"file": NAME, "sha256": SHA, "excerpt": "Retained legacy excerpt"}
    assert "sourceWarning" in enriched["workspace"]["runs"]["run-key"]["evidence"]["sources"][0]


@pytest.mark.parametrize("tampered", [False, True])
def test_failed_original_keeps_pinned_identity_and_specific_problem(
    published: tuple[Layout, dict[str, Any]],
    tampered: bool,
) -> None:
    layout, snapshot = published
    file = layout.runs / FOLDER / "inputs" / SHA
    if tampered:
        file.write_bytes(b"tampered")
    else:
        file.unlink()
    enriched = sources.enrich(snapshot, layout.runs)
    [chip] = enriched["chips"][f"{OUTPUT}:2"]
    assert chip["file"] == NAME and chip["sha256"] == SHA
    assert chip["hash_matches_inventory"] is (False if tampered else None)
    assert ("sha256" if tampered else "missing") in chip["reason"]
    assert "inventory" not in chip["reason"]
    assert chip["excerpt"] is None and "href" not in chip and "pageHref" not in chip


@pytest.mark.parametrize(
    ("code", "kind"), [(errno.EACCES, "PermissionError"), (errno.EIO, "OSError")]
)
@pytest.mark.parametrize("unreadable", ["inputs", "workflow"])
def test_an_unreadable_file_is_named_by_kind_and_run_name_never_by_server_path(
    published: tuple[Layout, dict[str, Any]],
    monkeypatch: pytest.MonkeyPatch,
    unreadable: str,
    code: int,
    kind: str,
) -> None:
    """The operating system's text for a failed read names the file by its absolute path; the
    snapshot (sourceWarning and the chip's reason) says the kind and the name inside the run."""
    layout, snapshot = published
    name = f"{FOLDER}/inputs/{SHA}" if unreadable == "inputs" else f"{FOLDER}/workflow.json"
    read_bytes = Path.read_bytes

    def read(path: Path) -> bytes:
        if path.name == name.rpartition("/")[2]:
            raise OSError(code, os.strerror(code), str(path))
        return read_bytes(path)

    monkeypatch.setattr(Path, "read_bytes", read)
    warning = f"{name} could not be read ({kind})"
    enriched = sources.enrich(snapshot, layout.runs)
    [source] = enriched["workspace"]["runs"]["run-key"]["evidence"]["sources"]
    assert source["sourceWarning"] == warning and "href" not in source
    if unreadable == "inputs":
        [chip] = enriched["chips"][f"{OUTPUT}:2"]
        assert chip["reason"] == warning
    assert str(layout.root) not in json.dumps(enriched)


def test_only_correlated_native_aliases_are_retained(
    published: tuple[Layout, dict[str, Any]],
) -> None:
    layout, snapshot = published
    record = snapshot["workspace"]["runs"]["run-key"]
    checked = sources.verified(layout.runs, record)
    inventory = sources._inventory(
        [
            {
                "heading": "Inventory",
                "blocks": [
                    _table(["Key", "File", "sha256"], ["Valid", NAME, SHA]),
                    _table(["Key", "File", "sha256"], ["Stale", NAME, "b" * 64]),
                    _table(["Original", "sha256", "Role"], [NAME, SHA, "issuer"]),
                ],
            }
        ],
        checked.inventory,
    )
    assert inventory == {NAME: (NAME, SHA), "Valid": (NAME, SHA)}


def test_workflow_path_is_never_followed(published: tuple[Layout, dict[str, Any]]) -> None:
    layout, snapshot = published
    folder = layout.runs / FOLDER
    outside = layout.root / "outside.txt"
    outside.write_bytes(RAW)
    (folder / "workflow.json").write_text(
        json.dumps({"sources": {NAME: {"sha256": SHA, "path": str(outside)}}})
    )
    (folder / "inputs" / SHA).unlink()
    with pytest.raises(http_base.Reply) as error:
        sources.reply(urlsplit(_link()), layout.runs, snapshot)
    assert error.value.status == 404


def test_connected_source_route_and_read_only_writes(
    published: tuple[Layout, dict[str, Any]],
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    monkeypatch.setenv("OPENAI_API_KEY", "offline-test")
    layout, snapshot = published
    _write_publication(layout, snapshot)
    web = tmp_path / "web"
    web.mkdir()
    (web / "index.html").write_text(
        "<html><head><meta content=\"connect-src 'none'\"></head></html>"
    )
    with TemporaryDirectory(dir=None if os.name == "nt" else "/tmp") as directory:
        root = Path(directory)
        shutil.copytree(layout.engine, root / "_engine")
        with make_server(root, web=web, read_only=True) as server:
            _write_publication(Layout(root), snapshot)
            thread = threading.Thread(target=server.serve_forever)
            thread.start()
            try:
                port = server.server_address[1]
                connection = HTTPConnection("127.0.0.1", port, timeout=5)
                connection.request("GET", _link() + "?page=2")
                response = connection.getresponse()
                assert response.status == 200 and response.read() == RAW[12000:]
                connection.close()
                for method in ("POST", "DELETE"):
                    connection = HTTPConnection("127.0.0.1", port, timeout=5)
                    connection.request(
                        method, "/api/submissions", headers={"Origin": f"http://127.0.0.1:{port}"}
                    )
                    response = connection.getresponse()
                    assert response.status == 405
                    response.read()
                    connection.close()
            finally:
                server.shutdown()
                thread.join()
