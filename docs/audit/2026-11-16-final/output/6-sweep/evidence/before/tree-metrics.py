"""Measure the same tracked sources and exact built artifacts at each audit pin."""
from __future__ import annotations

import gzip
import hashlib
import io
import json
import re
import subprocess
import sys
import tokenize
from collections import Counter
from pathlib import Path


def repo_paths(repo: Path) -> list[str]:
    raw = subprocess.check_output(
        ["git", "ls-files", "-z", "--", "src", "react_frontend", "apps/issuer-library", "proof", "tools", "web"],
        cwd=repo,
    )
    return [entry for entry in raw.decode().split("\0") if entry and "signal" not in Path(entry).parts]


DIRECTIVES = {
    "ruff_noqa": re.compile(r"^#\s*(?:ruff:\s*)?noqa\b", re.I),
    "type_ignore": re.compile(r"^#\s*type:\s*ignore\b"),
    "ruff_format_skip": re.compile(r"^#\s*fmt:\s*(?:off|skip)\b"),
    "eslint_disable": re.compile(r"(?://|/\*)\s*eslint-disable\b"),
    "ts_ignore": re.compile(r"(?://|/\*)\s*@ts-ignore\b"),
    "ts_expect_error": re.compile(r"(?://|/\*)\s*@ts-expect-error\b"),
    "ts_nocheck": re.compile(r"(?://|/\*)\s*@ts-nocheck\b"),
    "prettier_ignore": re.compile(r"(?://|/\*)\s*prettier-ignore\b"),
}


def tracked_metrics(repo: Path) -> dict:
    scope = Counter()
    dispositions = Counter({key: 0 for key in DIRECTIVES})
    records = []
    for name in repo_paths(repo):
        file = repo / name
        ext = file.suffix
        if ext not in {".py", ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".css", ".html"}:
            continue
        material = file.read_bytes()
        scope[ext] += len(material.splitlines())
        if ext == ".py":
            tokens = tokenize.tokenize(io.BytesIO(material).readline)
            for token in tokens:
                if token.type == tokenize.COMMENT:
                    for key, directive in DIRECTIVES.items():
                        if directive.search(token.string):
                            dispositions[key] += 1
                            records.append((name, token.start[0], key))
        elif ext in {".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".css"}:
            for line_no, line in enumerate(material.decode().splitlines(), 1):
                for key, directive in DIRECTIVES.items():
                    if directive.search(line):
                        dispositions[key] += 1
                        records.append((name, line_no, key))
    return {
        "source_lines_by_extension": dict(scope),
        "source_lines_total": sum(scope.values()),
        "suppression_counts": dict(dispositions),
        "suppression_count_total": sum(dispositions.values()),
        "suppression_sites": records,
        "scope": "tracked code incl. tests under src,react_frontend,apps/issuer-library,proof,tools,web; excludes signal path segments",
        "suppression_scope": "Python comment tokens; JS/TS/CSS textual directive patterns; includes intentional test sites; excludes configs",
    }


def build_metrics(repo: Path) -> dict:
    dist = repo / "web" / "dist"
    files = {}
    totals = {}
    for file in sorted(dist.rglob("*")):
        if not file.is_file():
            continue
        name = file.relative_to(dist).as_posix()
        body = file.read_bytes()
        raw = len(body)
        compressed = len(gzip.compress(body, compresslevel=6, mtime=0))
        files[name] = {"raw": raw, "gzip": compressed, "sha256": hashlib.sha256(body).hexdigest()}
        groups = ["dist"]
        if name.startswith("assets/"):
            groups.append("static_assets")
        elif name.startswith("connected-assets/"):
            groups.append("connected_assets")
        if file.suffix in {".js", ".css"}:
            groups.append("js_css")
        for group in groups:
            bucket = totals.setdefault(group, {"files": 0, "raw": 0, "gzip": 0})
            bucket["files"] += 1
            bucket["raw"] += raw
            bucket["gzip"] += compressed
    if not {"connected.html", "index.html"}.issubset(files):
        raise ValueError("both build entry points are required")
    return {"build_files": files, "build_totals": totals, "gzip": "sum of per-file gzip level 6, mtime=0"}


def main():
    repo, out = map(Path, sys.argv[1:])
    head = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=repo, text=True).strip()
    result = {"commit": head, **tracked_metrics(repo), **build_metrics(repo)}
    out.write_text(json.dumps(result, indent=2, sort_keys=True) + "\n")
    print(json.dumps({key: result[key] for key in ("commit", "source_lines_total", "suppression_counts", "build_totals")}, indent=2))


if __name__ == "__main__":
    main()
