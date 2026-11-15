"""Synthetic browser proof for the connected workspace."""

import sys

DUMMY_KEY = "synthetic-browser-proof"


def launcher_command() -> tuple[str, ...]:
    return (sys.executable, "-B", "-m", "proof.launcher")
