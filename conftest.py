"""Shared test setup."""

import pytest

from deploy_workflow.derived import STORE


@pytest.fixture(autouse=True)
def no_derivations_from_another_test():
    """The publisher keeps what it parsed for the process's later publications, by the sha256 of
    the bytes. A test may replace the parsing code, which no key can name, so each starts empty."""
    STORE.clear()
