"""CP-2's credit scorecard: the two registers it writes and how they are read.

Owner ruling R9 (2026-11-25, `docs/superpowers/specs/2026-11-25-deliverables-credit-snapshot.md`):
CP-2 scores 17 factors from 1 (strongest) to 5 (weakest), each with a one-line basis, in `T2.13`,
and gives four assessment cells in `T2.14`. A factor with no evidence in the run is `Not scored`
and is never guessed. Nothing here computes an overall credit score.

Three outcomes are kept apart: a handoff with neither register (`parse_scorecard` returns None: it
was written before the registers existed), a register row left `Not scored` or `Not assessed` (a
level or view of None inside a `Scorecard`), and a malformed register (`ScorecardError`).
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from functools import cache

from deploy_workflow.method_scripts import ROOT, _register_start, _unfenced, register_table

SCORECARD_ID = "T2.13"
SCORECARD_TITLE = "Credit scorecard"
SCORECARD_COLUMNS = ("Factor", "Level", "Basis")
ASSESSMENT_ID = "T2.14"
ASSESSMENT_TITLE = "Credit assessment"
ASSESSMENT_COLUMNS = ("Assessment", "View", "Basis")
FACTORS = (
    "Scale",
    "Market position",
    "Regulatory exposure",
    "Technology",
    "Barriers to entry",
    "Leverage",
    "Free cash flow",
    "Liquidity",
    "Rating trend",
    "Geographic diversification",
    "Product diversification",
    "Market share",
    "Customer concentration",
    "Market access",
    "Maturity profile",
    "Interest cover",
    "Financial policy",
)
LEVEL_NAMES = {1: "Excellent", 2: "Strong", 3: "Satisfactory", 4: "Weak", 5: "Poor"}
NOT_SCORED = "Not scored"
_THREE_WAY = ("Positive", "Neutral", "Negative")
ASSESSMENTS: dict[str, tuple[str, ...]] = {
    "Management": _THREE_WAY,
    "Sector Outlook": _THREE_WAY,
    "Sponsor Quality": _THREE_WAY,
    "Credit Direction": ("Improving", "Stable", "Deteriorating"),
}
# Not in the owner's ruling, which gives each cell three views only: added so that a cell with no
# evidence in the run (an issuer with no sponsor) is not guessed. Remove this one name, and its
# use in `_ASSESSMENT`, to make all four views compulsory.
NOT_ASSESSED = "Not assessed"
# The one source of the house Risk Rubric's level text: this file and the `##` section of it that
# holds the table `Factor | 1 | 2 | 3 | 4 | 5`. Repoint both to `LEVEL_TEXT_DOCUMENT` once that
# document is merged (and the two packagers' file lists with them, which a test holds to this
# path). The text is read from there by `level_text` and is never typed, copied or reworded here.
LEVEL_TEXT_DOCUMENT = "docs/methodology/portfolio-recommendation.md"
LEVEL_TEXT_SOURCE = (
    "docs/superpowers/specs/2026-11-25-deliverables-credit-snapshot.md",
    "9. Risk Rubric level text (transcribed from the owner's rubric image, 2026-11-25)",
)
# A Basis cell that states no evidence.
_NO_BASIS = frozenset({"", "-", "—", "–", "n/a"})


@dataclass(frozen=True)
class FactorScore:
    """One factor's row; `level` None is a row written `Not scored`."""

    factor: str
    level: int | None
    basis: str


@dataclass(frozen=True)
class Assessment:
    """One assessment cell; `view` None is a row written `Not assessed`."""

    name: str
    view: str | None
    basis: str


@dataclass(frozen=True)
class Scorecard:
    """Both registers as written, the factors in the ruling's order."""

    factors: tuple[FactorScore, ...]
    assessments: tuple[Assessment, ...]


class ScorecardError(ValueError):
    """A handoff whose scorecard registers are malformed; `faults` says how, one sentence each."""

    def __init__(self, faults: tuple[str, ...]) -> None:
        super().__init__(" ".join(faults))
        self.faults = faults


@dataclass(frozen=True)
class _Register:
    """One register's shape: its id, columns, each row's allowed values and the null word."""

    ident: str
    title: str
    columns: tuple[str, str, str]
    rows: dict[str, tuple[str, ...]]
    unset: str

    @property
    def heading(self) -> str:
        return f"### {self.ident} - {self.title}"


_SCORECARD = _Register(
    SCORECARD_ID,
    SCORECARD_TITLE,
    SCORECARD_COLUMNS,
    dict.fromkeys(FACTORS, tuple(map(str, LEVEL_NAMES))),
    NOT_SCORED,
)
_ASSESSMENT = _Register(
    ASSESSMENT_ID, ASSESSMENT_TITLE, ASSESSMENT_COLUMNS, ASSESSMENTS, NOT_ASSESSED
)
# How the two registers are headed and where: one sentence for the instructions and the repair.
PLACEMENT = (
    f"Head them exactly `{_SCORECARD.heading}` (columns `{' | '.join(SCORECARD_COLUMNS)}`, one "
    f"row per factor) and `{_ASSESSMENT.heading}` (columns `{' | '.join(ASSESSMENT_COLUMNS)}`, "
    "one row per assessment), each a `###` section of `## Findings` after `### Limitations`, "
    "beside your other registers and not nested under another heading."
)
_Rows = dict[str, tuple[str | None, str]]


def _name(cell: str) -> str:
    """A cell as compared: Markdown emphasis, case and spacing aside."""
    return " ".join(re.sub(r"[*_`]", "", cell).casefold().split())


def _present(text: str, ident: str) -> bool:
    start = _register_start(ident)
    return any(start.match(line) for line in _unfenced(text))


def _read(text: str, register: _Register) -> tuple[_Rows, list[str]]:
    """The register's rows by their ruled name (value None when left unset) and its faults."""
    ident, (_, value_name, _) = register.ident, register.columns
    table = register_table(text, ident)
    if isinstance(table, str):
        return {}, [f"{table[0].upper()}{table[1:]}."]
    header, rows = table
    if [_name(h) for h in header] != [_name(c) for c in register.columns]:
        columns = " | ".join(register.columns)
        return {}, [f"{ident}'s columns must be exactly `{columns}`, in that order."]
    names = {_name(name): name for name in register.rows}
    read: _Rows = {}
    seen: set[str] = set()
    faults: list[str] = []
    for written, cell, basis_cell in rows:
        name = names.get(_name(written))
        if name is None:
            faults.append(
                f"{ident} has a row `{written}` that is not one of its {len(names)} rows; "
                "remove it or use the exact name."
            )
            continue
        if name in seen:
            faults.append(f"{ident} has the row `{name}` more than once; write it once.")
            continue
        seen.add(name)
        allowed = {_name(v): v for v in register.rows[name]}
        if _name(cell) != _name(register.unset) and _name(cell) not in allowed:
            faults.append(
                f"{ident} row `{name}`: {value_name} `{cell}` is not allowed; write exactly one "
                f"of {', '.join(register.rows[name])} or `{register.unset}`."
            )
            continue
        value = allowed.get(_name(cell))
        basis = "" if _name(basis_cell) in _NO_BASIS else basis_cell.strip()
        if value is not None and not basis:
            faults.append(
                f"{ident} row `{name}`: Basis is empty; a row with a {value_name} states its "
                "evidence in one line."
            )
            continue
        read[name] = (value, basis)
    missing = [name for name in register.rows if name not in seen]
    if missing:
        faults.append(
            f"{ident} is missing the row{'s' if len(missing) > 1 else ''} {', '.join(missing)}; "
            f"write exactly one row for each (`{register.unset}` where this run has no evidence)."
        )
    return read, faults


def scorecard_faults(text: str) -> tuple[str, ...]:
    """Every fault of the two registers in a handoff that owes them, T2.13's first; a register
    the handoff lacks is a fault. Empty when both are well formed."""
    return (*_read(text, _SCORECARD)[1], *_read(text, _ASSESSMENT)[1])


def parse_scorecard(text: str) -> Scorecard | None:
    """The scorecard a CP-2 handoff carries; None for a handoff with neither register. Raises
    `ScorecardError` when one register is there without the other or either is malformed."""
    if not any(_present(text, r.ident) for r in (_SCORECARD, _ASSESSMENT)):
        return None
    (levels, level_faults), (views, view_faults) = _read(text, _SCORECARD), _read(text, _ASSESSMENT)
    if level_faults or view_faults:
        raise ScorecardError((*level_faults, *view_faults))
    return Scorecard(
        tuple(
            FactorScore(name, None if level is None else int(level), basis)
            for name in FACTORS
            for level, basis in (levels[name],)
        ),
        tuple(Assessment(name, *views[name]) for name in ASSESSMENTS),
    )


def rubric_table(document: str, heading: str = LEVEL_TEXT_SOURCE[1]) -> str:
    """The Risk Rubric table of ``document``: its header row and its 17 factor rows, each line
    exactly as written. Raises unless the `## heading` section is there once and its first table
    has the header `Factor | 1 | 2 | 3 | 4 | 5` and one row per factor, named and ordered as
    `FACTORS`, with five level cells that all say something."""
    parts = document.split(f"## {heading}\n")
    if len(parts) != 2:
        raise ValueError(
            f"Risk Rubric: expected one section `## {heading}`, found {len(parts) - 1}"
        )
    section = re.split(r"^## ", parts[1], maxsplit=1, flags=re.MULTILINE)[0]
    lines = [line for line in section.splitlines() if line.startswith("|")]
    header, rows = lines[:1], lines[2:]
    cells = [[cell.strip() for cell in line.strip("|").split("|")] for line in header + rows]
    levels = [str(level) for level in LEVEL_NAMES]
    if not cells or cells[0] != ["Factor", *levels]:
        raise ValueError(f"Risk Rubric: the table's header must be `Factor | {' | '.join(levels)}`")
    names = [row[0] for row in cells[1:]]
    if names != list(FACTORS):
        raise ValueError(
            f"Risk Rubric: the rows must be the {len(FACTORS)} factors in order "
            f"({', '.join(FACTORS)}); found {', '.join(names) or 'none'}"
        )
    for row in cells[1:]:
        if len(row) != len(levels) + 1 or not all(row):
            raise ValueError(
                f"Risk Rubric: `{row[0]}` must have {len(levels)} level cells, none empty"
            )
    return "\n".join(header + rows)


@cache
def level_text() -> str:
    """The Risk Rubric table as the instructions carry it, read from `LEVEL_TEXT_SOURCE`."""
    return rubric_table((ROOT / LEVEL_TEXT_SOURCE[0]).read_text(encoding="utf-8"))
