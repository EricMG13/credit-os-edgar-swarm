"""Read stage 5 exact-selection pytest and Vitest evidence without changing test status."""
from datetime import datetime, timedelta
import json
from pathlib import Path
import sys
from xml.etree import ElementTree

py_root, js_root, output = map(Path, sys.argv[1:4])
py_shards = json.loads((py_root / "results.json").read_text())["checks"]
py_cases = []
for report in sorted(py_root.glob("*.xml")):
    if not report.stem.startswith(("ci-", "changed-")):
        continue
    for case in ElementTree.parse(report).iter("testcase"):
        py_cases.append({
            "file": case.get("classname"),
            "name": case.get("name"),
            "seconds": float(case.get("time") or 0.0),
            "scope": "CI" if report.stem.startswith("ci-") else "changed outside CI",
            "shard": report.stem,
        })
py = {
    "shard_seconds": {name: row["duration_seconds"] for name, row in py_shards.items() if name.startswith(("ci-", "changed-")) and "duration_seconds" in row},
    "slowest_nodes": sorted(py_cases, key=lambda row: row["seconds"], reverse=True)[:15],
    "node_count": len(py_cases),
    "scope": "pytest JUnit test case time, including setup, call and teardown",
}
py["scope_total_seconds"] = sum(py["shard_seconds"].values())

js_cases = []
js_files = []
for report in sorted(js_root.glob("shard-*.json")):
    for file in json.loads(report.read_text())["testResults"]:
        js_files.append({"file": file["name"], "ms": file["endTime"] - file["startTime"]})
        for case in file["assertionResults"]:
            js_cases.append({
                "file": file["name"],
                "name": case["fullName"],
                "ms": case.get("duration") or 0.0,
                "shard": report.stem,
            })
commands = json.loads((js_root / "commands.json").read_text())
starts = [datetime.fromisoformat(row["start"]) for row in commands]
ends = [start + timedelta(milliseconds=row["durationMs"]) for start, row in zip(starts, commands, strict=True)]
js = {
    "shard_ms": {row["shard"]: row["durationMs"] for row in commands},
    "shard_sum_ms": sum(row["durationMs"] for row in commands),
    "parallel_wall_ms": (max(ends) - min(starts)).total_seconds() * 1000,
    "slowest_nodes": sorted(js_cases, key=lambda row: row["ms"], reverse=True)[:15],
    "slowest_files": sorted(js_files, key=lambda row: row["ms"], reverse=True)[:15],
    "node_count": len(js_cases),
    "file_count": len(js_files),
    "scope": "native Vitest JSON assertion durations and file test start/end, all 8 coverage shards",
}
output.write_text(json.dumps({"python": py, "frontend": js}, indent=2)+"\n")
print(json.dumps({
    "py_slowest_ci": next(r for r in py["slowest_nodes"] if r["scope"] == "CI"),
    "py_slowest_supplemental": py["slowest_nodes"][0],
    "js_slowest": js["slowest_nodes"][0],
    "js_slowest_file": js["slowest_files"][0],
    "js_shards": js["shard_ms"],
    "js_parallel_ms": js["parallel_wall_ms"],
    "js_sum_ms": js["shard_sum_ms"],
}, indent=2))
