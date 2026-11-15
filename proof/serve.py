"""Run the connected service with a synthetic, network-disabled engine child."""

import argparse
import os
import sys
from pathlib import Path

DUMMY_KEY = "synthetic-browser-proof"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--legacy", type=Path, required=True)
    parser.add_argument("--root", type=Path, required=True)
    parser.add_argument("--web", type=Path)
    parser.add_argument("--port", type=int, default=0)
    args = parser.parse_args()

    if args.root.exists() and (not args.root.is_dir() or any(args.root.iterdir())):
        parser.error("the synthetic proof requires an empty, separate run root")

    from connected import serve

    # The legacy readiness check still requires a key. Give it a sentinel and
    # remove other credentials known to its adapters from the child's environment.
    os.environ["OPENAI_API_KEY"] = DUMMY_KEY
    for key in (
        "ANTHROPIC_API_KEY",
        "OPENROUTER_API_KEY",
        "COPILOT_GITHUB_TOKEN",
        "COPILOT_CLI_PATH",
        "COPILOT_USE_GH_LOGIN",
    ):
        os.environ.pop(key, None)

    launcher = (
        sys.executable,
        "-B",
        str(Path(__file__).with_name("launcher.py").resolve()),
    )
    serve(
        args.legacy,
        args.root,
        web=args.web,
        port=args.port,
        launcher=launcher,
        synthetic=True,
    )


if __name__ == "__main__":
    main()
