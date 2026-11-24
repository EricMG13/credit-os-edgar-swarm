"""Pre-populate the app with the approved issuers and write the swarm plan ledger.

    uv run python tools/swarm/prepare.py --approved approved-list.md --packs packs/ \
        --contexts contexts/ --root <shared root>

Offline: no network, no provider. Per issuer matched by CIK across the approved table, the pack
folders (``<cik>-<slug>``) and the context files (``<cik>-<slug>.json``, one ``context/1`` each),
it registers the issuer ID in the app's issuer registry (``inbox.filing.issuer_folder``) and
writes ``<root>/swarm/plan.json``. Packs and contexts are recorded by path and read in place.

The issuer ID is the context's ``identity.issuer_id``, the ID a run on that context carries; it
must be at most ``MAX_ISSUER_ID`` characters, as the run start page requires. A row with no
pack, no usable pack folder content, no context, an invalid context, an over-long or duplicate
issuer ID is listed under ``skipped`` with the reason and registers nothing. A rerun keeps the
ledger state for each unchanged issuer ID and refreshes its paths.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections.abc import Sequence
from pathlib import Path
from typing import Any

from deploy_vii.context import ContextRefused, load_context
from deploy_workflow import platform_io
from deploy_workflow.inbox import filing
from deploy_workflow.inbox.layout import MAX_ISSUER_ID, ensure_layout

SCHEMA = "swarm-plan/1"
PLAN_RELATIVE = Path("swarm") / "plan.json"
RUN_PREFIX = "swarm-"  # Run folders sit in ``<root>/_engine/runs``, where the library lists them.
_CIK_PREFIX = re.compile(r"(\d+)-")


def parse_approved(text: str) -> list[dict[str, str]]:
    """The rows of the first markdown table that has Issuer and CIK columns, by header name."""
    header: list[str] | None = None
    rows: list[dict[str, str]] = []
    for line in text.splitlines():
        if not line.lstrip().startswith("|"):
            if header is not None and rows:
                break  # The table ended.
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if header is None:
            if "Issuer" in cells and "CIK" in cells:
                header = cells
            continue
        if all(set(c) <= set(":-") for c in cells):
            continue  # The separator row.
        if len(cells) != len(header):
            raise ValueError(
                f"approved list row has {len(cells)} cells, expected {len(header)}: {line}"
            )
        rows.append(dict(zip(header, cells, strict=True)))
    if header is None:
        raise ValueError("approved list has no table with Issuer and CIK columns")
    return rows


def _cik_key(text: str) -> str | None:
    """A CIK as a canonical digit string, or None when ``text`` is not one."""
    return str(int(text)) if text.isdigit() else None


def _by_cik(folder: Path, *, files: bool) -> dict[str, list[Path]]:
    """Entries of ``folder`` named ``<cik>-...``, by CIK; folders when ``files`` is false."""
    found: dict[str, list[Path]] = {}
    for entry in sorted(folder.iterdir()):
        match = _CIK_PREFIX.match(entry.name)
        if match is None or entry.is_dir() == files:
            continue
        if files and entry.suffix != ".json":
            continue
        found.setdefault(str(int(match.group(1))), []).append(entry)
    return found


def _has_filings(pack: Path) -> bool:
    """A pack holds at least one file the launcher reads (names starting ``_`` or ``.`` are not)."""
    return any(p.is_file() and not p.name.startswith(("_", ".")) for p in pack.rglob("*"))


def _single(found: dict[str, list[Path]], cik: str, what: str) -> tuple[Path | None, str]:
    paths = found.get(cik, [])
    if not paths:
        return None, f"no {what} for CIK {cik}"
    if len(paths) > 1:
        return None, f"{len(paths)} {what}s for CIK {cik}: {', '.join(p.name for p in paths)}"
    return paths[0], ""


def _sources(
    cik: str, pack_dirs: dict[str, list[Path]], context_files: dict[str, list[Path]]
) -> tuple[tuple[Path, Path] | None, str]:
    """The pack folder and context file of ``cik``, or why one of them cannot be used."""
    pack, reason = _single(pack_dirs, cik, "pack folder")
    if pack is not None and not _has_filings(pack):
        return None, f"pack folder {pack.name} holds no filing files"
    context_path, context_reason = _single(context_files, cik, "context file")
    if pack is None or context_path is None:
        return None, reason or context_reason
    return (pack, context_path), ""


def _check_context(path: Path) -> tuple[dict[str, str], str]:
    """The context's issuer ID and name, or the reason it cannot be used."""
    try:
        ctx = load_context(path.read_bytes())
    except ContextRefused as refused:
        return {}, f"invalid context {path.name}: {'; '.join(refused.problems)}"
    except OSError as error:
        return {}, f"unreadable context {path.name}: {error.strerror or type(error).__name__}"
    ident = ctx.identity
    if len(ident.issuer_id) > MAX_ISSUER_ID:
        return {}, (
            f"issuer_id {ident.issuer_id!r} is {len(ident.issuer_id)} characters; "
            f"the run start page allows at most {MAX_ISSUER_ID}"
        )
    return {"issuer_id": ident.issuer_id, "name": ident.issuer_name}, ""


def _load_plan(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {"schema": SCHEMA, "issuers": [], "skipped": []}
    plan = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(plan, dict) or plan.get("schema") != SCHEMA:
        raise ValueError(f"{path} is not a {SCHEMA} plan; move it aside or fix it")
    return plan


def prepare(approved: Path, packs: Path, contexts: Path, root: Path) -> dict[str, Any]:
    """Register the issuers and write the plan; return it."""
    layout = ensure_layout(root)
    rows = parse_approved(approved.read_text(encoding="utf-8"))
    pack_dirs = _by_cik(packs, files=False)
    context_files = _by_cik(contexts, files=True)
    plan_path = layout.root / PLAN_RELATIVE
    previous = {i["cik"]: i for i in _load_plan(plan_path)["issuers"]}
    issuers: list[dict[str, Any]] = []
    skipped: list[dict[str, str]] = []
    taken: dict[str, str] = {}

    for row in rows:
        cik = _cik_key(row.get("CIK", ""))
        label = {"cik": row.get("CIK", ""), "name": row.get("Issuer", "")}
        if cik is None:
            skipped.append({**label, "reason": f"CIK {row.get('CIK', '')!r} is not a number"})
            continue
        sources, reason = _sources(cik, pack_dirs, context_files)
        found: dict[str, str] = {}
        if sources is not None:
            found, reason = _check_context(sources[1])
        if found and found["issuer_id"] in taken:
            reason = (
                f"issuer_id {found['issuer_id']!r} is already CIK {taken[found['issuer_id']]}'s"
            )
        if reason or sources is None:
            skipped.append({**label, "cik": cik, "reason": reason})
            continue
        taken[found["issuer_id"]] = cik
        filing.issuer_folder(layout, found["issuer_id"], found["name"])  # Registers the ID.
        kept = previous.get(cik, {})
        if kept.get("issuer_id") != found["issuer_id"]:
            kept = {}  # A different ID points to a different run folder.
        entry: dict[str, Any] = {
            **kept,
            "issuer_id": found["issuer_id"],
            "name": found["name"],
            "cik": cik,
            "ticker": row.get("Ticker", ""),
            "pack": str(sources[0].resolve()),
            "context": str(sources[1].resolve()),
            "run_folder": str(layout.runs / f"{RUN_PREFIX}{found['issuer_id']}"),
            "status": kept.get("status", "pending"),
            "attempts": kept.get("attempts", 0),
        }
        issuers.append(entry)

    # Issuers in an earlier plan that this run no longer lists keep their record.
    listed = {i["cik"] for i in issuers}
    issuers.extend(i for k, i in previous.items() if k not in listed)
    issuers.sort(key=lambda i: int(i["cik"]))
    plan = {"schema": SCHEMA, "issuers": issuers, "skipped": skipped}
    text = json.dumps(plan, ensure_ascii=False, indent=2) + "\n"
    if not plan_path.exists() or plan_path.read_text(encoding="utf-8") != text:
        plan_path.parent.mkdir(parents=True, exist_ok=True)
        platform_io.write_atomic(plan_path, text, sync=True)
    return plan


def main(argv: Sequence[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--approved", type=Path, required=True)
    parser.add_argument("--packs", type=Path, required=True)
    parser.add_argument("--contexts", type=Path, required=True)
    parser.add_argument("--root", type=Path, required=True)
    args = parser.parse_args(argv)
    try:
        plan = prepare(args.approved, args.packs, args.contexts, args.root)
    except (ValueError, OSError) as error:
        print(f"prepare: {error}", file=sys.stderr)
        return 2
    pending = sum(1 for i in plan["issuers"] if i["status"] == "pending")
    print(f"registered {len(plan['issuers'])}, pending {pending}, skipped {len(plan['skipped'])}")
    for item in plan["skipped"]:
        print(f"  skipped CIK {item['cik']} {item['name']}: {item['reason']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
