"""Read stage 5 exact-selection pytest and Vitest evidence without changing test status."""

import json
import sys
from datetime import datetime, timedelta
from pathlib import Path
from typing import TypedDict
from xml.etree import ElementTree

PYTHON_SHARDS = ("ci-", "changed-")


class PythonCase(TypedDict):
    file: str | None
    name: str | None
    seconds: float
    scope: str
    shard: str


class PythonShard(TypedDict, total=False):
    duration_seconds: float


class VitestCase(TypedDict):
    file: str
    name: str
    ms: float
    shard: str


class VitestFile(TypedDict):
    file: str
    ms: float


class ShardTiming(TypedDict):
    shard: str
    start: str
    durationMs: int


def python_cases(root: Path) -> list[PythonCase]:
    cases: list[PythonCase] = []
    for report in sorted(root.glob("*.xml")):
        if not report.stem.startswith(PYTHON_SHARDS):
            continue
        for case in ElementTree.parse(report).iter("testcase"):
            cases.append(
                {
                    "file": case.get("classname"),
                    "name": case.get("name"),
                    "seconds": float(case.get("time") or 0.0),
                    "scope": "CI" if report.stem.startswith("ci-") else "changed outside CI",
                    "shard": report.stem,
                }
            )
    return cases


def vitest_results(root: Path) -> tuple[list[VitestCase], list[VitestFile]]:
    cases: list[VitestCase] = []
    files: list[VitestFile] = []
    for report in sorted(root.glob("shard-*.json")):
        for file in json.loads(report.read_text())["testResults"]:
            files.append({"file": file["name"], "ms": file["endTime"] - file["startTime"]})
            for case in file["assertionResults"]:
                cases.append(
                    {
                        "file": file["name"],
                        "name": case["fullName"],
                        "ms": case.get("duration") or 0.0,
                        "shard": report.stem,
                    }
                )
    return cases, files


def main() -> None:
    py_root, js_root, output = map(Path, sys.argv[1:4])
    py_shards: dict[str, PythonShard] = json.loads((py_root / "results.json").read_text())["checks"]
    py_cases = python_cases(py_root)
    py_times = {
        name: row["duration_seconds"]
        for name, row in py_shards.items()
        if name.startswith(PYTHON_SHARDS) and "duration_seconds" in row
    }
    py_slowest = sorted(py_cases, key=lambda row: row["seconds"], reverse=True)[:15]
    py = {
        "shard_seconds": py_times,
        "slowest_nodes": py_slowest,
        "node_count": len(py_cases),
        "scope": "pytest JUnit test case time, including setup, call and teardown",
        "scope_total_seconds": sum(py_times.values()),
    }

    js_cases, js_files = vitest_results(js_root)
    commands: list[ShardTiming] = json.loads((js_root / "commands.json").read_text())
    starts = [datetime.fromisoformat(row["start"]) for row in commands]
    ends = [
        start + timedelta(milliseconds=row["durationMs"])
        for start, row in zip(starts, commands, strict=True)
    ]
    js_times = {row["shard"]: row["durationMs"] for row in commands}
    js_total = sum(row["durationMs"] for row in commands)
    js_wall = (max(ends) - min(starts)).total_seconds() * 1000
    js_slowest = sorted(js_cases, key=lambda row: row["ms"], reverse=True)[:15]
    js_slowest_files = sorted(js_files, key=lambda row: row["ms"], reverse=True)[:15]
    js = {
        "shard_ms": js_times,
        "shard_sum_ms": js_total,
        "parallel_wall_ms": js_wall,
        "slowest_nodes": js_slowest,
        "slowest_files": js_slowest_files,
        "node_count": len(js_cases),
        "file_count": len(js_files),
        "scope": (
            "native Vitest JSON assertion durations and file test start/end, all 8 coverage shards"
        ),
    }
    output.write_text(json.dumps({"python": py, "frontend": js}, indent=2) + "\n")
    print(
        json.dumps(
            {
                "py_slowest_ci": next(r for r in py_slowest if r["scope"] == "CI"),
                "py_slowest_supplemental": py_slowest[0],
                "js_slowest": js_slowest[0],
                "js_slowest_file": js_slowest_files[0],
                "js_shards": js_times,
                "js_parallel_ms": js_wall,
                "js_sum_ms": js_total,
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
