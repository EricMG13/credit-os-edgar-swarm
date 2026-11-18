"""Prepare a CP-OS run with the embedded Windows Python.

Run workflow.cmd forwards the launcher's offline preparation options.
"""

import sys

from deploy_workflow.owners.cpos_launch import main

if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:], allow_live=False))
