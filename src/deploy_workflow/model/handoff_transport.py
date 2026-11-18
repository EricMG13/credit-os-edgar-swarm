"""Compact, read-through transport for upstream module handoffs."""

from __future__ import annotations

import hashlib
import re
from collections.abc import Mapping

MAX_CHUNK_BYTES = 10_240
MAX_EXCERPT_CHARS = 600
MAX_INDEXED_HEADINGS = 64
MAX_HEADING_CHARS = 120
_HEADINGS = re.compile(r"(?m)^(#{1,6})[ \t]+(.+?)[ \t]*#*[ \t]*$")
_READER_LABELS = {
    "bottom line": "bottom line",
    "key findings": "key findings",
    "contrary evidence": "contrary evidence",
    "contrary evidence and what would change the view": (
        "contrary evidence and what would change the view"
    ),
    "limitations": "limitations",
}


def _heading_manifest(raw: bytes) -> tuple[list[dict[str, int | str | bool]], int]:
    """Return a bounded heading sample and the total heading count."""
    text = raw.decode("utf-8")
    headings: list[dict[str, int | str | bool]] = []
    previous = byte_offset = count = 0
    for match in _HEADINGS.finditer(text):
        byte_offset += len(text[previous : match.start()].encode("utf-8"))
        title = match.group(2)
        heading: dict[str, int | str | bool] = {
            "heading": title[:MAX_HEADING_CHARS],
            "level": len(match.group(1)),
            "byte_offset": byte_offset,
        }
        if len(title) > MAX_HEADING_CHARS:
            heading["heading_truncated"] = True
        count += 1
        if count <= MAX_INDEXED_HEADINGS:
            headings.append(heading)
        else:
            headings[-1] = heading
        previous = match.start()
    return headings, count


def heading_index(raw: bytes) -> list[dict[str, int | str | bool]]:
    """Return bounded headings and exact UTF-8 byte offsets without exposing a file path."""
    return _heading_manifest(raw)[0]


def reader_excerpts(raw: bytes) -> dict[str, str]:
    """Return complete short reader sections, omitting missing or overlong sections."""
    text = raw.decode("utf-8")
    matches = list(_HEADINGS.finditer(text))
    section_ends = [len(text)] * len(matches)
    ancestors: list[int] = []
    for index, match in enumerate(matches):
        level = len(match.group(1))
        while ancestors and level <= len(matches[ancestors[-1]].group(1)):
            section_ends[ancestors.pop()] = match.start()
        ancestors.append(index)
    excerpts: dict[str, str] = {}
    for index, match in enumerate(matches):
        label = _READER_LABELS.get(match.group(2).strip().casefold().rstrip(":"))
        if label is None:
            continue
        section = text[match.start() : section_ends[index]].strip()
        if len(section) <= MAX_EXCERPT_CHARS:
            excerpts[label] = section
    return excerpts


def compact_index(handoffs: Mapping[str, bytes]) -> dict[str, dict[str, object]]:
    """Build the producer-scoped index sent in the initial prompt."""
    result = {}
    for producer, raw in handoffs.items():
        headings, heading_count = _heading_manifest(raw)
        result[producer] = {
            "sha256": hashlib.sha256(raw).hexdigest(),
            "headings": headings,
            "heading_count": heading_count,
            "headings_truncated": heading_count > MAX_INDEXED_HEADINGS,
            "reader_excerpts": reader_excerpts(raw),
        }
    return result


def read_handoff(handoffs: Mapping[str, bytes], producer: str, cursor: int) -> str:
    """Read one bounded UTF-8 aligned chunk from an allowed upstream producer."""
    if producer not in handoffs:
        return "ERROR: producer is not an upstream handoff for this module"
    if isinstance(cursor, bool) or not isinstance(cursor, int) or cursor < 0:
        return "ERROR: cursor must be a non-negative UTF-8 byte offset"
    raw = handoffs[producer]
    if cursor > len(raw):
        return "ERROR: cursor is past the end of this handoff"
    if cursor < len(raw) and cursor and raw[cursor] & 0xC0 == 0x80:
        return "ERROR: cursor must be at a UTF-8 character boundary"
    end = min(cursor + MAX_CHUNK_BYTES, len(raw))
    while end > cursor and end < len(raw) and raw[end] & 0xC0 == 0x80:
        end -= 1
    chunk = raw[cursor:end].decode("utf-8")
    next_cursor = end if end < len(raw) else None
    return f"producer: {producer}\ncursor: {cursor}\nnext_cursor: {next_cursor}\n\n{chunk}"
