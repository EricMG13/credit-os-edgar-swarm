"""Project the pinned library's published handoffs into the React reader's data shape."""

import json
import re
from pathlib import Path
from urllib.parse import quote

EXPORT_PREFIX = "window.CREDIT_OS_DATA="
RUN_ID = re.compile(r"[0-9A-Za-z][0-9A-Za-z._-]{0,79}")
MODULE_ID = re.compile(r"CP-[0-9A-Z]+")
# Keep these classifiers aligned with credit_os/web/shapes.js at the pinned revision.
HIDDEN_HEADING = re.compile(
    r"^(Request|Next module|Front matter)$|downstream owners|Consumer readiness|command sheet"
    r"|Readiness for downstream use|Upstream re-anchor|method trace|Module status"
    r"|QA validation|machine-readable|research brief|Workstream plan|Cross-Module Handoff",
    re.IGNORECASE,
)
INTERMODULE = re.compile(
    r"(?:supplied handoff|use in this module|effect on this module|consumer|downstream module"
    r"|receiving module|responsible module|command|required consumer action|escalation consequence"
    r"|next commands?|next modules?|downstream consumers?|downstream modules? affected"
    r"|downstream handoff impact|downstream owners|affected consumers|affected modules)"
)


def read_export(path: Path, read_regular) -> dict | None:
    """Read the library's JSON assignment as data, using a single published file snapshot."""
    raw = read_regular(path)
    if raw is None:
        return None
    value = raw.decode("utf-8").rstrip()
    if not value.startswith(EXPORT_PREFIX) or not value.endswith(";"):
        raise ValueError("invalid legacy library export")
    return json.loads(value[len(EXPORT_PREFIX) : -1])


def report_entries(export: dict, unfinished: set[str]) -> dict:
    """Join the admission catalogue to the published reader by its run folder."""
    readers = {run["folder"]: run for run in export["workspace"]["runs"].values()}
    entries = {}
    for admitted in export["catalogue"]["real"]:
        run_id = admitted["id"]
        if RUN_ID.fullmatch(run_id) and run_id in readers and run_id not in unfinished:
            entries[run_id] = (
                {
                    "id": run_id,
                    "issuer": admitted["name"],
                    "asOf": admitted["date"] or "",
                    "pathway": readers[run_id]["pathway"] or "",
                },
                readers[run_id],
            )
    return entries


def intermodule_column(header: str) -> bool:
    name = header.strip().lower()
    if name in {"downstream_use", "consumer_module_id"}:
        return True
    normalized = " ".join(name.replace("_", " ").split())
    return normalized.startswith("consequence for cp-") or bool(
        INTERMODULE.fullmatch(normalized.replace("-", " "))
    )


def reader_table(block: dict) -> dict | None:
    headers = block["headers"]
    rows = [row["cells"] for row in block["rows"]]
    if not rows:
        return None
    width = max(len(headers), max(map(len, rows)))
    headers = [*headers, *([""] * (width - len(headers)))]
    keep = [
        index for index, header in enumerate(headers) if not intermodule_column(header)
    ]
    if not keep:
        return None
    return {
        "headers": [headers[index] for index in keep],
        "rows": [
            [row[index] if index < len(row) else "" for index in keep] for row in rows
        ],
    }


def reader_sections(sections: list[dict]) -> list[dict]:
    """Keep recorded passages in order and omit inter-module transport as in the pinned reader."""
    if (
        len(sections) == 1
        and sections[0]["heading"] == "Unstructured handoff"
        and sections[0]["level"] == 1
        and len(sections[0]["blocks"]) == 1
    ):
        return []
    result = []
    chain = []
    for section in sections:
        level, title = section["level"], section["heading"]
        while chain and chain[-1][0] >= level:
            chain.pop()
        chain.append((level, title))
        if any(
            HIDDEN_HEADING.search(heading) for depth, heading in chain if depth >= 2
        ):
            continue
        paragraphs = []
        tables = []
        for block in section["blocks"]:
            if block["type"] == "text":
                paragraphs.append(block["text"])
            if block["type"] == "table" and (table := reader_table(block)) is not None:
                tables.append(table)
        if paragraphs or tables:
            result.append({"title": title, "paragraphs": paragraphs, "tables": tables})
    return result


def report_detail(
    export: dict, entry: tuple[dict, dict], titles: dict[str, str]
) -> dict:
    summary, published = entry
    workspace = export["workspace"]
    downloads = {
        row["module"]: row["href"] for row in published["evidence"]["handoffs"]
    }
    modules = []
    choices = published["modules"]
    steps = (published.get("record") or {}).get("steps", [])
    ordered = dict.fromkeys([*(step["module"] for step in steps), *choices])
    for code in ordered:
        if not MODULE_ID.fullmatch(code):
            continue
        output = workspace["outputs"].get(choices.get(code, {}).get("default"))
        if output is None:
            continue
        href = f"downloads/{quote(summary['id'], safe='')}/{code}.md"
        modules.append(
            {
                "id": code,
                "title": titles.get(code, code),
                "sections": reader_sections(workspace["handoffs"][output["sha256"]]),
                "download": f"/library/{href}" if downloads.get(code) == href else None,
            }
        )
    return {**summary, "modules": modules}
