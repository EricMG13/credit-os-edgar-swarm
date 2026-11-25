"""The one period-ordering rule: oldest fiscal year, ..., latest, then YTD/PYTD, LTM, PF, forecasts.

docs/superpowers/specs/2026-11-25-chart-periods.md states the rule; `web/src/utils/periodOrder.ts`
is its TypeScript twin and both are tested against `tests/fixtures/period-order-cases.json`.
A label is read as a class and an optional period end; nothing here reads a financial value.
"""

from __future__ import annotations

import re
from collections.abc import Callable, Sequence
from dataclasses import dataclass
from datetime import date
from enum import IntEnum
from typing import Literal

type PeriodEnd = tuple[int, int, int]
type PeriodSpan = Literal["date", "month", "quarter", "half", "year"]


class PeriodClass(IntEnum):
    ACTUAL = 0
    YTD = 1
    LTM = 2
    PF = 3
    FORECAST = 4


@dataclass(frozen=True, slots=True)
class ParsedPeriod:
    """`end` is (year, month, day); only a label carrying its own date has a real day, the others
    are placed on day 31 of their last month. `prior_ytd` marks a PYTD label of the ytd class."""

    period_class: PeriodClass
    end: PeriodEnd | None
    span: PeriodSpan | None
    prior_ytd: bool = False


# The characters JavaScript's \s matches, spelled out so both implementations agree on them.
_SPACES = re.compile("[\t\n\v\f\r    -     　﻿]+")

_PRIOR_YTD = re.compile(r"(?<![A-Z])PYTD(?![A-Z])")
_COUNT = re.compile(r"(?<![0-9A-Z])([369])M(?![A-Z])")
_YEAR_TO_DATE = re.compile(rf"(?<![A-Z])(?:PYTD|YTD)(?![A-Z])|{_COUNT.pattern}")
_CLASS_MARKERS: tuple[tuple[PeriodClass, re.Pattern[str]], ...] = (
    (
        PeriodClass.FORECAST,
        re.compile(
            r"(?<![0-9])(?:[0-9]{4}|[0-9]{2})[EF](?![0-9A-Z])"
            r"|(?<![A-Z])(?:FORECAST|PROJECTED|BUDGET)(?![A-Z])"
        ),
    ),
    (PeriodClass.PF, re.compile(r"(?<![A-Z])(?:PF|PRO[ -]?FORMA)(?![A-Z])")),
    (PeriodClass.LTM, re.compile(r"(?<![A-Z])(?:LTM|TTM)(?![A-Z])")),
    (PeriodClass.YTD, _YEAR_TO_DATE),
)

_ISO_DATE = re.compile(r"(?<![0-9])([0-9]{4})-([0-9]{2})-([0-9]{2})(?![0-9])")
_SPLIT_YEAR = re.compile(r"(?<![0-9])([0-9]{4})/([0-9]{2})(?![0-9])")
_FOUR_DIGITS = re.compile(r"(?<![0-9])([0-9]{4})(?![0-9])")
_TWO_DIGITS = re.compile(r"(?<![0-9])([0-9]{2})(?![0-9])")
_FISCAL_PREFIX = re.compile(r"(?<![A-Z])FY")
_MONTH = re.compile(
    r"(?<![A-Z])(JAN(?:UARY)?|FEB(?:RUARY)?|MAR(?:CH)?|APR(?:IL)?|MAY|JUNE?|JULY?|AUG(?:UST)?"
    r"|SEP(?:T|TEMBER)?|OCT(?:OBER)?|NOV(?:EMBER)?|DEC(?:EMBER)?)(?![A-Z])"
)
_MONTH_NUMBER = {
    name: number
    for number, name in enumerate(
        ("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"), 1
    )
}
_QUARTER = re.compile(r"(?<![0-9A-Z])Q([1-4])(?![0-9])|(?<![0-9])([1-4])Q(?![A-Z])")
_HALF = re.compile(r"(?<![0-9A-Z])H([12])(?![0-9])|(?<![0-9])([12])H(?![A-Z])")

_SPAN_RANK: dict[PeriodSpan, int] = {"date": 0, "month": 0, "quarter": 1, "half": 2, "year": 3}
# An undated label sorts after every dated one of its class; an undated PYTD before them.
_UNDATED_YEAR = 10000
_STRUCTURED: dict[str, tuple[PeriodClass, PeriodSpan]] = {
    "QUARTER": (PeriodClass.ACTUAL, "quarter"),
    "FY": (PeriodClass.ACTUAL, "year"),
    "PERIOD_END": (PeriodClass.ACTUAL, "date"),
    "YTD": (PeriodClass.YTD, "date"),
    "LTM": (PeriodClass.LTM, "date"),
    "PF": (PeriodClass.PF, "date"),
}


def _normalise(label: str) -> str:
    text = label.upper().replace("'", " ").replace("’", " ")
    return _SPACES.sub(" ", text).strip(" ")


def _period_class(text: str) -> PeriodClass:
    for period_class, marker in _CLASS_MARKERS:
        if marker.search(text):
            return period_class
    return PeriodClass.ACTUAL


def _calendar_date(year: int, month: int, day: int) -> PeriodEnd | None:
    try:
        date(year, month, day)
    except ValueError:
        return None
    return (year, month, day)


def _names_a_period(text: str) -> bool:
    return any(pattern.search(text) for pattern in (_FISCAL_PREFIX, _QUARTER, _HALF, _MONTH))


def _year(text: str, marked: bool) -> int | Literal["invalid"] | None:
    """The year a label names, None when it names none, "invalid" for a broken split year."""
    split = _SPLIT_YEAR.search(text)
    if split:
        first, second = int(split[1]), int(split[2])
        return first + 1 if second == (first + 1) % 100 else "invalid"
    four_digits = _FOUR_DIGITS.search(text)
    if four_digits:
        return int(four_digits[1])
    two_digits = _TWO_DIGITS.findall(text)
    if two_digits and (marked or _names_a_period(text)):
        return 2000 + int(two_digits[-1])
    return None


def _end_in_year(text: str, year: int) -> tuple[PeriodEnd, PeriodSpan]:
    month = _MONTH.search(text)
    if month:
        return (year, _MONTH_NUMBER[month[1][:3]], 31), "month"
    quarter = _QUARTER.search(text)
    if quarter:
        return (year, 3 * int(quarter[1] or quarter[2]), 31), "quarter"
    half = _HALF.search(text)
    if half:
        return (year, 6 * int(half[1] or half[2]), 31), "half"
    count = _COUNT.search(text)
    if count:
        return (year, int(count[1]), 31), "month"
    return (year, 12, 31), "year"


def parse_period(label: str) -> ParsedPeriod | None:
    """Read a period label as its class and end; None when the label is unparseable."""
    text = _normalise(label)
    period_class = _period_class(text)
    prior_ytd = period_class is PeriodClass.YTD and _PRIOR_YTD.search(text) is not None
    iso = _ISO_DATE.search(text)
    if iso:
        day = _calendar_date(int(iso[1]), int(iso[2]), int(iso[3]))
        return None if day is None else ParsedPeriod(period_class, day, "date", prior_ytd)
    year = _year(text, marked=period_class is not PeriodClass.ACTUAL)
    if year == "invalid" or (year is None and period_class is PeriodClass.ACTUAL):
        return None
    if year is None:
        return ParsedPeriod(period_class, None, None, prior_ytd)
    end, span = _end_in_year(text, year)
    return ParsedPeriod(period_class, end, span, prior_ytd)


def _key(
    period_class: PeriodClass, end: PeriodEnd | None, span: PeriodSpan | None, prior_ytd: bool
) -> tuple[int, ...]:
    after_prior = 0 if prior_ytd else 1
    if end is None or span is None:
        return (period_class, _UNDATED_YEAR * after_prior, 0, 0, 0, after_prior)
    return (period_class, *end, _SPAN_RANK[span], after_prior)


def period_key(label: str) -> tuple[int, ...] | None:
    """(class, year, month, day, span, PYTD-first) of a label; None when it is unparseable."""
    parsed = parse_period(label)
    if parsed is None:
        return None
    return _key(parsed.period_class, parsed.end, parsed.span, parsed.prior_ytd)


def structured_period_key(period_type: str, end: date | None) -> tuple[int, ...]:
    """The key of a structured (T4.14) period, comparable with `period_key`.

    A period without an end date sorts after the dated ones of its class.
    """
    if period_type not in _STRUCTURED:
        raise ValueError(f"unknown period type for ordering: {period_type!r}")
    period_class, span = _STRUCTURED[period_type]
    day = None if end is None else (end.year, end.month, end.day)
    return _key(period_class, day, span, prior_ytd=False)


def order_periods[T](
    items: Sequence[T], label: Callable[[T], str]
) -> tuple[tuple[T, ...], tuple[T, ...]]:
    """(ordered, gaps): items in rule order, then the unparseable ones as authored; gaps are those.

    Items with equal keys keep their authored order.
    """
    keyed = [(period_key(label(item)), item) for item in items]
    dated = sorted(
        ((key, item) for key, item in keyed if key is not None), key=lambda pair: pair[0]
    )
    gaps = tuple(item for key, item in keyed if key is None)
    return (*(item for _, item in dated), *gaps), gaps
