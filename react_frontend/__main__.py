"""Launch the same-origin React frontend and workflow service."""

import argparse
from pathlib import Path

from react_frontend import serve


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, required=True, help="the shared folder")
    parser.add_argument("--port", type=int, default=8765)
    parser.add_argument("--signal-url", default="", help="http://<host>:<port>/ of Signal")
    args = parser.parse_args()
    try:
        serve(args.root, port=args.port, signal_url=args.signal_url)
    except (OSError, ValueError) as error:
        parser.exit(2, f"{error}\n")
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
