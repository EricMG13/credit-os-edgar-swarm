from io import BytesIO
from zipfile import ZipFile

import pytest

from tools.package_windows import add_archive


def test_copies_pinned_archive_under_bundle_root():
    buffer = BytesIO()
    with ZipFile(buffer, "w") as archive:
        archive.writestr("src/example.py", b"exact source")
    with ZipFile(buffer) as source, ZipFile(BytesIO(), "w") as destination:
        add_archive(source, destination, "credit-os2/.legacy")
        assert destination.read("credit-os2/.legacy/src/example.py") == b"exact source"


def test_refuses_archive_entry_that_escapes_bundle_root():
    buffer = BytesIO()
    with ZipFile(buffer, "w") as archive:
        archive.writestr("../outside.txt", b"outside")
    with ZipFile(buffer) as source, ZipFile(BytesIO(), "w") as destination:
        with pytest.raises(ValueError, match="unsupported archive entry"):
            add_archive(source, destination, "credit-os2/.legacy")
        assert destination.namelist() == []
