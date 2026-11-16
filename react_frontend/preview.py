"""Open a retained test preview from an isolated copy, without scheduling or provider access."""

from __future__ import annotations

import argparse
import json
import os
import shutil
from pathlib import Path
from tempfile import TemporaryDirectory

from proof import DUMMY_KEY
from react_frontend import RUN_ID, make_server


def _write_snapshot(library: Path, snapshot: str) -> None:
    # Replace the copied directory entry; never follow a link back into the original library.
    target = library / "data.js"
    target.unlink(missing_ok=True)
    with target.open("x", encoding="utf-8") as stream:
        stream.write("window.CREDIT_OS_DATA=" + snapshot + ";\n")


def stage(engine: Path, snapshot_file: Path, run: str, root: Path) -> None:
    """Copy the original publication, source pins and retained input bytes; never edit the run."""
    if RUN_ID.fullmatch(run) is None or run in {".", ".."}:
        raise ValueError("invalid run folder")
    snapshot = json.loads(snapshot_file.read_bytes())
    if not snapshot.get("preview", {}).get("reason"):
        raise ValueError("a retained preview must keep its explicit preview qualification")
    if run not in snapshot["workspace"]["runs"]:
        raise ValueError("the selected run is absent from the retained snapshot")
    if root.exists() and any(root.iterdir()):
        raise ValueError("preview destination must be empty")
    original = engine / "runs" / run
    copied = root / "_engine" / "runs" / run
    copied.mkdir(parents=True)
    shutil.copy2(original / "workflow.json", copied / "workflow.json", follow_symlinks=False)
    for name in ("inputs", "deliveries"):
        shutil.copytree(original / name, copied / name, symlinks=True)
    library = root / "_engine" / "library"
    shutil.copytree(engine / "library", library, symlinks=True)
    # The supplied snapshot preserves the retained preview's admission notice and exact handoffs.
    _write_snapshot(library, json.dumps(snapshot, ensure_ascii=False))


def serve_preview(root: Path, web: Path, port: int, snapshot: Path) -> None:
    """Use the existing connected HTTP service with every write endpoint refused."""
    with make_server(root, web=web, port=port, read_only=True) as server:
        # Server startup may refresh library data; restore the qualified retained snapshot only.
        _write_snapshot(root / "_engine/library", snapshot.read_text(encoding="utf-8"))

        print(f"http://127.0.0.1:{server.server_address[1]}/", flush=True)
        server.serve_forever()


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--engine", type=Path, required=True)
    parser.add_argument("--snapshot", type=Path, required=True)
    parser.add_argument("--run", required=True)
    parser.add_argument("--web", type=Path, required=True)
    parser.add_argument("--port", type=int, default=0)
    args = parser.parse_args()
    # No worker is started; the sentinel satisfies native startup without using a provider key.
    os.environ["OPENAI_API_KEY"] = DUMMY_KEY
    for key in (
        "ANTHROPIC_API_KEY",
        "OPENROUTER_API_KEY",
        "COPILOT_GITHUB_TOKEN",
        "COPILOT_CLI_PATH",
        "COPILOT_USE_GH_LOGIN",
    ):
        os.environ.pop(key, None)
    with TemporaryDirectory(prefix="cr-") as temporary:
        root = Path(temporary)
        stage(args.engine, args.snapshot, args.run, root)
        serve_preview(root, args.web, args.port, args.snapshot)


if __name__ == "__main__":
    main()
