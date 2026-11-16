"""Attach verified original issuer sources to an admitted React publication."""

from __future__ import annotations

import copy
import hashlib
import json
import re
from collections.abc import Iterator
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any
from urllib.parse import SplitResult, parse_qs, quote, unquote
from zipfile import BadZipFile

from pypdf.errors import PyPdfError

from deploy_workflow import credit_os_chips as native
from deploy_workflow import http_base
from deploy_workflow.library_index import Refused, read_inside
from deploy_workflow.model.handoff import _pages

PREFIX = "/connected/sources/"
ADDRESS = re.compile(r"/connected/sources/([^/]+)/([0-9a-f]{64})/([^/]+)")
DIGEST = re.compile(r"[0-9a-f]{64}")
GROUPS = ("sources", "unused", "unrecorded")


@dataclass(frozen=True)
class Source:
    name: str
    digest: str
    raw: bytes
    pages: dict[int, str]
    problem: str | None

    def href(self, folder: str) -> str:
        return f"{PREFIX}{quote(folder, safe='')}/{self.digest}/{quote(self.name, safe='')}"


def _folder(value: str) -> bool:
    return value not in {".", ".."} and re.fullmatch(r"[\w. -]+", value) is not None


def _published(record: dict[str, Any]) -> Iterator[dict[str, Any]]:
    for group in GROUPS:
        yield from record.get("evidence", {}).get(group, [])


def _pins(root: Path, folder: str) -> dict[str, Any]:
    if not _folder(folder):
        raise Refused("invalid report folder")
    workflow = json.loads(read_inside(root, f"{folder}/workflow.json"))
    if not isinstance(workflow, dict) or not isinstance(workflow.get("sources"), dict):
        raise Refused("workflow source pins unavailable")
    return dict(workflow["sources"])


class SourceMismatch(Refused):
    def __init__(self, actual: str) -> None:
        super().__init__("source bytes do not match recorded sha256")
        self.actual = actual


PageCache = dict[str, tuple[dict[int, str], str | None, str | None]]


@dataclass
class Checked:
    authority: bool = False
    available: dict[str, Source] = field(default_factory=dict)
    inventory: native.Inventory = field(default_factory=native.Inventory)
    cache: PageCache = field(default_factory=dict)


def _identity(item: dict[str, Any], pins: dict[str, Any]) -> tuple[str, str]:
    name, digest = item.get("name"), item.get("sha256")
    if not isinstance(name, str) or not native.is_file_name(name):
        raise Refused("invalid source filename")
    if not isinstance(digest, str) or not DIGEST.fullmatch(digest):
        raise Refused("published source hash unavailable")
    pin = pins.get(name)
    if not isinstance(pin, dict) or pin.get("sha256") != digest:
        raise Refused("published source does not match workflow pin")
    return name, digest


def _source(root: Path, folder: str, name: str, digest: str) -> Source:
    raw = read_inside(root, f"{folder}/inputs/{digest}")
    actual = hashlib.sha256(raw).hexdigest()
    if actual != digest:
        raise SourceMismatch(actual)
    try:
        pages = dict(enumerate(_pages(name, raw), 1))
        problem = None
    except (ValueError, OSError, TypeError, KeyError, IndexError, BadZipFile, PyPdfError) as error:
        pages = {}
        problem = f"source pages unavailable: {type(error).__name__}"
    return Source(name, digest, raw, pages, problem)


def _load_source(root: Path, folder: str, identity: tuple[str, str], checked: Checked) -> None:
    name, digest = identity
    checked.inventory[name] = (name, digest)
    try:
        source = _source(root, folder, name, digest)
    except (OSError, ValueError) as error:
        actual = error.actual if isinstance(error, SourceMismatch) else None
        checked.cache[name] = ({}, actual, str(error))
        return
    checked.available[name] = source
    checked.cache[name] = (source.pages, source.digest, source.problem)


def verified(root: Path, record: dict[str, Any]) -> Checked:
    """Keep pinned identity even when the original cannot be read; link verified bytes only."""
    result = Checked()
    folder = record["folder"]
    try:
        pins = _pins(root, folder)
        result.authority = True
        pin_problem = None
    except (OSError, ValueError) as error:
        pins, pin_problem = {}, str(error)
    for item in _published(record):
        item.pop("href", None)
        item.pop("sourceWarning", None)
        try:
            if pin_problem:
                raise Refused(pin_problem)
            identity = _identity(item, pins)
        except ValueError as error:
            item["sourceWarning"] = str(error)
            continue
        name, _ = identity
        _load_source(root, folder, identity, result)
        if source := result.available.get(name):
            item["href"] = source.href(folder)
        if problem := result.cache[name][2]:
            item["sourceWarning"] = problem
    return result


def _inventory(sections: list[dict[str, Any]], canonical: native.Inventory) -> native.Inventory:
    result = native.Inventory(canonical)
    try:
        aliases = native.inventory(sections, set(canonical))
    except (IndexError, KeyError, TypeError):
        aliases = native.Inventory()
    for alias, (name, digest) in aliases.items():
        if canonical.get(name) == (name, digest) and alias not in result:
            result[alias] = (name, digest)
    result.alternates = frozenset(alias for alias in aliases.alternates if alias in result)
    return result


def _rows(sections: list[dict[str, Any]]) -> Iterator[native.Row]:
    findings = False
    for section in sections:
        if section["level"] == 2:
            findings = section["heading"].strip().lower().startswith("findings")
        for block in section["blocks"]:
            if block["type"] == "table":
                head = block["headers"]
                claim = native.is_claim_table(findings, section["heading"], head)
                for row in block["rows"]:
                    yield native.Row(row["line"], row["cells"], head, claim)
            else:
                yield native.Row(block["line"], [block["text"]], [], False)


def _page_range(pages: dict[int, str], first: int, last: int) -> bool:
    return 1 <= first <= last <= len(pages) and all(n in pages for n in range(first, last + 1))


def _links(chip: dict[str, Any], sources: dict[str, Source], folder: str) -> None:
    source = sources.get(chip.get("file", ""))
    if source is None or chip.get("sha256") != source.digest:
        return
    chip["href"] = source.href(folder)
    first, last = chip.get("page"), chip.get("page_end")
    if isinstance(first, int) and _page_range(source.pages, first, last or first):
        chip["pageHref"] = f"{chip['href']}?page={first}" + (f"&end={last}" if last else "")


def _outputs(snapshot: dict[str, Any], key: str, record: dict[str, Any]) -> dict[str, Any]:
    workspace = snapshot["workspace"]
    ids = {oid for module in record.get("modules", {}).values() for oid in module["outputs"]}
    return {
        oid: output
        for oid, output in workspace.get("outputs", {}).items()
        if oid in ids and (not output.get("run") or output["run"] == key)
    }


def _refresh(snapshot: dict[str, Any], key: str, record: dict[str, Any], root: Path) -> None:
    checked = verified(root, record)
    if not checked.authority:
        return
    outputs = _outputs(snapshot, key, record)
    parsed = snapshot["workspace"].get("handoffs", {})
    cp0 = [
        s for o in outputs.values() if o["module"] == "CP-0" for s in parsed.get(o["sha256"], [])
    ]
    pages = native.Pages(root / record["folder"], _inventory(cp0, checked.inventory))
    pages.cache = checked.cache
    chips = snapshot.setdefault("chips", {})
    for old in list(chips):
        if old.rpartition(":")[0] in outputs:
            del chips[old]
    for oid, output in outputs.items():
        for row in _rows(parsed.get(output["sha256"], [])):
            if not row.cells:
                continue
            found = native.chips_for_cells(row, output["module"], pages)
            for chip in found:
                _links(chip, checked.available, record["folder"])
            if found:
                chips[f"{oid}:{row.line}"] = found


def enrich(snapshot: dict[str, Any], root: Path) -> dict[str, Any]:
    """Rebuild native citation chips against originals, without editing retained artifacts."""
    result = copy.deepcopy(snapshot)
    for chips in result.get("chips", {}).values():
        for chip in chips:
            chip.pop("href", None)
            chip.pop("pageHref", None)
    for key, record in result["workspace"]["runs"].items():
        _refresh(result, key, record, root)
    return result


def _requested_pages(query: str, source: Source) -> bytes:
    values = parse_qs(query, keep_blank_values=True)
    if set(values) - {"page", "end"} or "page" not in values:
        raise http_base.refuse(400, "invalid source page request")
    if any(len(v) != 1 or re.fullmatch(r"[1-9][0-9]{0,8}", v[0]) is None for v in values.values()):
        raise http_base.refuse(400, "invalid source page request")
    first = int(values["page"][0])
    last = int(values.get("end", values["page"])[0])
    if not _page_range(source.pages, first, last):
        raise http_base.refuse(404, "source page unavailable")
    return "\n\f\n".join(source.pages[n] for n in range(first, last + 1)).encode("utf-8")


def reply(url: SplitResult, root: Path, snapshot: dict[str, Any] | None) -> http_base.Reply:
    match = ADDRESS.fullmatch(url.path)
    if match is None or snapshot is None:
        raise http_base.refuse(404, "source unavailable")
    folder, digest, name = unquote(match[1]), match[2], unquote(match[3])
    records = [r for r in snapshot["workspace"]["runs"].values() if r["folder"] == folder]
    if len(records) != 1:
        raise http_base.refuse(404, "source unavailable")
    source = verified(root, copy.deepcopy(records[0])).available.get(name)
    if source is None or source.digest != digest:
        raise http_base.refuse(404, "source unavailable")
    raw = _requested_pages(url.query, source) if url.query else source.raw
    media = (
        "text/plain; charset=utf-8"
        if url.query or name.endswith(".txt")
        else "application/octet-stream"
    )
    return http_base.Reply(
        200,
        raw,
        {
            "Content-Type": media,
            "Content-Security-Policy": "default-src 'none'; sandbox; frame-ancestors 'none'",
            "X-Content-Type-Options": "nosniff",
            "Cache-Control": "no-store",
        },
    )
