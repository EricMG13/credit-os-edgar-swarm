"""Derived publication data kept between publications of one process, by verified content.

The issuer library is published whole at every run end. Reading and hashing a run's files is
cheap; parsing them is not. A derivation that is a pure function of bytes whose sha256 was taken
from the bytes read in this publication is therefore computed once per content and kept here:

- the key names the derivation and every input it reads (the digests, and any flag or name);
- the value is held pickled, so every reader gets its own copy and nothing a later stage does
  to it reaches the next publication;
- the store is memory only and bounded: at most ``LIMIT_BYTES`` of pickled values, the least
  recently used dropped first. A dropped or missing entry is computed again, never guessed.

Nothing is kept unless a caller opens ``reuse()``; outside it ``derived`` only computes. A hash
comparison is never a derivation: every file is read and checked at every publication.
"""

from __future__ import annotations

import pickle
import threading
from collections import OrderedDict
from collections.abc import Callable, Hashable, Iterator
from contextlib import contextmanager
from contextvars import ContextVar

LIMIT_BYTES = 256 << 20  # pickled values held by one store; keys (digests and names) are small


class Derived:
    """Pickled derivations by key, least recently used first, within ``limit`` bytes."""

    def __init__(self, limit: int = LIMIT_BYTES) -> None:
        self.limit = limit
        self.size = 0
        self.hits = 0
        self.misses = 0
        self._held: OrderedDict[Hashable, bytes] = OrderedDict()
        self._lock = threading.Lock()

    def __len__(self) -> int:
        return len(self._held)

    def clear(self) -> None:
        with self._lock:
            self._held.clear()
            self.size = self.hits = self.misses = 0

    def _take(self, key: Hashable) -> bytes | None:
        with self._lock:
            held = self._held.get(key)
            if held is None:
                self.misses += 1
            else:
                self.hits += 1
                self._held.move_to_end(key)
            return held

    def _keep(self, key: Hashable, held: bytes) -> None:
        with self._lock:
            self.size -= len(self._held.pop(key, b""))
            if len(held) > self.limit:
                return  # larger than the whole store: computed each time
            self._held[key] = held
            self.size += len(held)
            while self.size > self.limit:
                _, dropped = self._held.popitem(last=False)
                self.size -= len(dropped)

    def get[T](
        self, key: Hashable, compute: Callable[[], T], current: Callable[[T], bool] | None = None
    ) -> T:
        """The value kept for ``key``, else ``compute()``, which is then kept. ``current`` is asked
        of a kept value whose key cannot name every input; when it says no, the value is computed
        again. An exception from ``compute`` is raised and nothing is kept; a value that cannot be
        pickled is returned and not kept."""
        held = self._take(key)
        if held is not None:
            value: T = pickle.loads(held)  # bytes this process pickled itself
            if current is None or current(value):
                return value
        value = compute()
        try:
            held = pickle.dumps(value, pickle.HIGHEST_PROTOCOL)
        except Exception:  # noqa: BLE001 - whatever stops the copy, the value stands
            # A value that cannot be copied (nested too deep, not picklable, no memory for the
            # copy) is the value computed all the same; it is computed again next time.
            return value
        self._keep(key, held)
        return value


STORE = Derived()  # the process's one store: the scheduler publishes many times in one process
_ACTIVE: ContextVar[Derived | None] = ContextVar("derived", default=None)


@contextmanager
def reuse(store: Derived = STORE) -> Iterator[Derived]:
    """Within this block ``derived`` keeps and reuses its results in ``store``."""
    token = _ACTIVE.set(store)
    try:
        yield store
    finally:
        _ACTIVE.reset(token)


def derived[T](
    key: Hashable, compute: Callable[[], T], current: Callable[[T], bool] | None = None
) -> T:
    """``compute()``, or its kept result for ``key`` inside ``reuse()`` (see ``Derived.get``)."""
    store = _ACTIVE.get()
    return compute() if store is None else store.get(key, compute, current)
