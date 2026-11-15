"""Build the work-PC ZIP from the project, the React build, and the pinned legacy tree."""

import argparse
import hashlib
import stat
import subprocess
from io import BytesIO
from pathlib import Path, PurePosixPath
from tempfile import TemporaryDirectory
from zipfile import ZIP_DEFLATED, ZipFile

from connected import LEGACY_REVISION

PROJECT = Path(__file__).resolve().parents[1]
LEGACY_URL = "https://github.com/EricMG13/RBOT-HTML.git"
BUNDLE = "credit-os2"


def git(repository: Path, *arguments: str) -> bytes:
    return subprocess.check_output(["git", "-C", str(repository), *arguments])


def add_archive(source: ZipFile, destination: ZipFile, prefix: str) -> None:
    for entry in source.infolist():
        if entry.is_dir():
            continue
        path = PurePosixPath(entry.filename)
        if (
            path.is_absolute()
            or ".." in path.parts
            or "\\" in entry.filename
            or ":" in entry.filename
            or stat.S_ISLNK(entry.external_attr >> 16)
        ):
            raise ValueError(f"unsupported archive entry: {entry.filename}")
        destination.writestr(f"{prefix}/{path}", source.read(entry))


def bundle_windows(
    project: Path, legacy: Path, output: Path, project_revision: str
) -> None:
    dist = project / "web/dist"
    if not (dist / "index.html").is_file():
        raise ValueError("Build the React app before packaging.")
    if (dist / "data.js").read_bytes() != (project / "web/public/data.js").read_bytes():
        raise ValueError("Rebuild React to restore the clean data.js before packaging.")

    source_bytes = git(project, "archive", "--format=zip", project_revision)
    legacy_bytes = git(legacy, "archive", "--format=zip", LEGACY_REVISION)
    output.parent.mkdir(parents=True, exist_ok=True)
    with TemporaryDirectory(dir=output.parent) as temporary:
        pending = Path(temporary) / output.name
        with (
            ZipFile(BytesIO(source_bytes)) as source,
            ZipFile(BytesIO(legacy_bytes)) as legacy_source,
            ZipFile(pending, "w", ZIP_DEFLATED) as archive,
        ):
            add_archive(source, archive, BUNDLE)
            add_archive(legacy_source, archive, f"{BUNDLE}/.legacy")
            archive.writestr(
                f"{BUNDLE}/.legacy/.credit-os-revision", LEGACY_REVISION + "\n"
            )
            for file in sorted(dist.rglob("*")):
                if file.is_symlink():
                    raise ValueError(f"unsupported build entry: {file}")
                if file.is_file():
                    relative = file.relative_to(dist).as_posix()
                    archive.write(file, f"{BUNDLE}/web/dist/{relative}")
        with pending.open("rb") as file:
            digest = hashlib.file_digest(file, "sha256").hexdigest()
        pending.replace(output)
    output.with_suffix(output.suffix + ".sha256").write_text(
        f"{digest}  {output.name}\n", encoding="ascii"
    )


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output", type=Path, default=PROJECT / "delivery/credit-os2-windows.zip"
    )
    parser.add_argument("--project-revision", default="HEAD")
    parser.add_argument("--legacy-repo", type=Path)
    args = parser.parse_args()
    if args.legacy_repo is not None:
        bundle_windows(PROJECT, args.legacy_repo, args.output, args.project_revision)
    else:
        with TemporaryDirectory(prefix="credit-os2-legacy-") as temporary:
            legacy = Path(temporary)
            git(legacy, "init", "--quiet")
            git(
                legacy,
                "fetch",
                "--quiet",
                "--depth=1",
                "--no-tags",
                LEGACY_URL,
                LEGACY_REVISION,
            )
            bundle_windows(PROJECT, legacy, args.output, args.project_revision)
    print(args.output.resolve())


if __name__ == "__main__":
    main()
