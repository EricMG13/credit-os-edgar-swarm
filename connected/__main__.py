import argparse
from pathlib import Path

from . import PROJECT, serve


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Serve React with the pinned legacy workflow."
    )
    parser.add_argument("--legacy", type=Path, default=PROJECT / ".legacy")
    parser.add_argument("--root", type=Path, required=True)
    parser.add_argument(
        "--web", type=Path, help="React build directory (default: web/dist)"
    )
    parser.add_argument("--port", type=int, default=0)
    args = parser.parse_args()
    if not 0 <= args.port <= 65535:
        parser.error("--port must be in the range 0 to 65535")
    try:
        serve(args.legacy, args.root, web=args.web, port=args.port)
    except (OSError, ValueError) as error:
        parser.exit(2, f"{error}\n")
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
