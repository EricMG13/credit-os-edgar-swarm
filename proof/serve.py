"""Run the connected service with a synthetic, network-disabled engine child."""

import argparse
import os
from pathlib import Path

from proof import DUMMY_KEY, launcher_command


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, required=True)
    parser.add_argument("--web", type=Path)
    parser.add_argument("--port", type=int, default=0)
    args = parser.parse_args()

    if args.root.exists() and (not args.root.is_dir() or any(args.root.iterdir())):
        parser.error("the synthetic proof requires an empty, separate run root")

    from react_frontend import serve

    # The child validates the Copilot launch flags, then replaces complete with a canned reply.
    os.environ["COPILOT_GITHUB_TOKEN"] = DUMMY_KEY
    os.environ["COPILOT_CLI_PATH"] = str(Path(__file__).resolve())
    for key in (
        "OPENAI_API_KEY",
        "ANTHROPIC_API_KEY",
        "OPENROUTER_API_KEY",
        "COPILOT_USE_GH_LOGIN",
    ):
        os.environ.pop(key, None)

    serve(
        args.root,
        web=args.web,
        port=args.port,
        launcher=launcher_command(),
        synthetic=True,
    )


if __name__ == "__main__":
    main()
