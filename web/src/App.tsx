import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import type { LoadResult, SliceKey } from "./data";
import { Kit } from "./pages/Kit";
import { areaOf, matchRoute, routeTable, type RouteTable } from "./pages/route-table";
import { SourceContext } from "./pages/source";
import { useHashRoute } from "./route";
import { DesignReferenceNote } from "./shell/DesignReferenceNote";
import { PageHeader } from "./shell/PageHeader";
import { Shell } from "./shell/Shell";

/** The note ahead of the page. A bleed page keeps its own padding, so the note takes the same. */
function DesignReference({ bleed = false }: { bleed?: boolean }) {
  return (
    <div className={bleed ? "px-8 pt-8" : "mb-6"}>
      <DesignReferenceNote />
    </div>
  );
}

function Library({ result }: { result: LoadResult }) {
  return (
    <>
      <PageHeader title="Library" />
      <div className="mt-6">
        <LibraryBody result={result} />
      </div>
    </>
  );
}

const NOTICE = {
  missing: "Library data is missing",
  newer: "This library was written by a newer version",
} as const;

function LibraryBody({ result }: { result: LoadResult }) {
  switch (result.kind) {
    case "missing":
    case "newer":
      return <p className="text-text-secondary">{NOTICE[result.kind]}</p>;
    case "ok":
      if (result.data.issuers.length === 0) {
        return <p className="text-text-secondary">No runs yet</p>;
      }
      return (
        <>
          {result.data.issuers.map((issuer) => (
            <section key={issuer.id}>
              <h2 className="font-display text-h3 text-text-primary">{issuer.name}</h2>
            </section>
          ))}
        </>
      );
  }
}

/** The bare addresses (one trailing slash ignored) and the group each one belongs to. */
const BARE_GROUP = new Map<string, SliceKey>([
  ["", "library"],
  ["/library", "library"],
  ["/model", "model"],
  ["/run", "run"],
  ["/signal", "signal"],
]);

/** A group's bare address is its first route with a `home`, drawn as if that address were typed. */
function bareHome(route: string, table: RouteTable): string | null {
  const group = BARE_GROUP.get(route.endsWith("/") ? route.slice(0, -1) : route);
  if (group === undefined) return null;
  return table.routes.find((r) => areaOf(r.path) === group && r.home !== undefined)?.home ?? null;
}

function Page({ result, table, route }: { result: LoadResult; table: RouteTable; route: string }) {
  const home = bareHome(route, table);
  const matched = matchRoute(home ?? route, table.routes);
  if (home !== null && matched !== null && result.kind !== "ok") {
    return (
      <Shell current={areaOf(matched.route.path)}>
        <PageHeader title={matched.route.title} />
        <p className="mt-6 text-text-secondary">{NOTICE[result.kind]}</p>
      </Shell>
    );
  }
  if (matched !== null && result.kind === "ok") {
    const area = areaOf(matched.route.path);
    const slice = table.readers[area](result.data[area]);
    if (slice.kind === "invalid") {
      return (
        <Shell current={area}>
          <PageHeader title={matched.route.title} />
          <p className="mt-6 text-text-secondary">This part of the library could not be read</p>
          <p className="mt-2 text-text-secondary">{slice.reason}</p>
        </Shell>
      );
    }
    // Signal keeps its own frame, and the model pages own the top of main, so they draw the note in
    // their own frame. A group with no slice has no sample to label.
    const sample = slice.kind === "ok" && (area === "library" || area === "run");
    if (matched.route.layout === "bleed") {
      return (
        <Shell current={area} bleed>
          <SourceContext.Provider value={result.data}>
            {sample ? <DesignReference bleed /> : null}
            {matched.route.render(matched.params)}
          </SourceContext.Provider>
        </Shell>
      );
    }
    return (
      <Shell current={area}>
        <SourceContext.Provider value={result.data}>
          {sample ? <DesignReference /> : null}
          <PageHeader title={matched.route.title} />
          <div className="mt-6">{matched.route.render(matched.params)}</div>
        </SourceContext.Provider>
      </Shell>
    );
  }
  if (route === "/kit") {
    return (
      <Shell current="kit">
        <DesignReference />
        <Kit />
      </Shell>
    );
  }
  if (matched !== null || route === "" || route === "/") {
    return (
      <Shell current="library">
        <Library result={result} />
      </Shell>
    );
  }
  return (
    <Shell current="library">
      <PageHeader title="Page not found" />
      <p className="mt-6 text-text-secondary">No page has this address</p>
    </Shell>
  );
}

const SITE = "Credit OS";

/**
 * The document title of what `Page` draws at `route`: the page's name, what it is about when the
 * route says (the issuer, the run's date), then the app. The branches follow `Page`'s.
 */
function pageTitle(result: LoadResult, table: RouteTable, route: string): string {
  const home = bareHome(route, table);
  const matched = matchRoute(home ?? route, table.routes);
  const words = (...parts: (string | undefined)[]) =>
    [...parts, SITE].filter((part) => part !== undefined).join(" — ");
  if (matched !== null && result.kind === "ok") {
    return words(matched.route.title, matched.route.subject?.(matched.params, result.data));
  }
  if (matched !== null && home !== null) return words(matched.route.title);
  if (route === "/kit") return words("Component kit");
  if (matched !== null || route === "" || route === "/") return words("Library");
  return words("Page not found");
}

/** The history entry now shown, named by a key in its history state so that Back finds it again. */
function entryOf(created: { current: number }): string {
  const state = window.history.state as { entry?: unknown } | null;
  if (typeof state?.entry === "string") return state.entry;
  created.current += 1;
  const entry = `${String(Date.now())}.${String(created.current)}`;
  window.history.replaceState({ ...state, entry }, "");
  return entry;
}

/**
 * The link in the new page that leads where the one the reader used did, drawn again as the current
 * page: the tab or module that was chosen. `used` is gone with the old page, but still has its href.
 */
function usedAgain(main: HTMLElement, used: Element | null): HTMLElement | null {
  const href = used?.getAttribute("href");
  if (href === undefined || href === null) return null;
  const current = main.querySelectorAll<HTMLElement>("a[aria-current=page]");
  return [...current].find((link) => link.getAttribute("href") === href) ?? null;
}

/**
 * What a page load would give the reader that a hash route does not: the page's name in the tab
 * and the history list, the top of the page (or, on Back and Forward, the place that entry was left
 * at), somewhere for keyboard focus to start, and the page's name said by a screen reader.
 *
 * `main` is the one scroller and is never remounted, so it keeps the previous page's offset and a
 * link that disappears with the page leaves focus on the body. After a route change (never on the
 * first load) focus stays where the new page has put it (the item pages focus their row); else it
 * goes to the link the reader used if the new page draws it again (the next Tab is then the next
 * tab); else to `main`. The new title goes to the returned polite live region.
 */
function useRouteChange(route: string, title: string) {
  const announcer = useRef<HTMLParagraphElement>(null);
  const shown = useRef<{ route: string; entry: string } | null>(null);
  const arrival = useRef<{ used: Element | null } | null>(null);
  const focused = useRef<Element | null>(null);
  const offsets = useRef(new Map<string, number>());
  const created = useRef(0);

  useLayoutEffect(() => {
    document.title = title;
  }, [title]);

  // Layout effects run before any page's own effect, so a page that scrolls itself into place
  // (the item pages) does so after the reset, not before it.
  useLayoutEffect(() => {
    const main = document.getElementById("main");
    if (main === null || shown.current?.route === route) return;
    const entry = entryOf(created);
    // The old page, and the link that held focus, are already out of the document: focus is on the
    // body, so the link is the last element that took focus.
    const active = document.activeElement;
    const used = active === document.body ? focused.current : active;
    arrival.current = shown.current === null ? null : { used };
    focused.current = null;
    shown.current = { route, entry };
    main.scrollTop = offsets.current.get(entry) ?? 0;
  }, [route]);

  useEffect(() => {
    const main = document.getElementById("main");
    if (main === null) return;
    const remember = () => {
      if (shown.current !== null) offsets.current.set(shown.current.entry, main.scrollTop);
    };
    const noteFocus = (event: FocusEvent) => {
      focused.current = event.target instanceof Element ? event.target : null;
    };
    main.addEventListener("scroll", remember);
    document.addEventListener("focusin", noteFocus);
    return () => {
      main.removeEventListener("scroll", remember);
      document.removeEventListener("focusin", noteFocus);
    };
  }, []);

  useEffect(() => {
    const main = document.getElementById("main");
    if (arrival.current === null || main === null) return;
    const { used } = arrival.current;
    arrival.current = null;
    const now = document.activeElement;
    if (now === used || !main.contains(now)) {
      const link = usedAgain(main, used);
      (link ?? main).focus({ preventScroll: true });
    }
    if (announcer.current !== null) announcer.current.textContent = title;
  }, [route, title]);

  return announcer;
}

export function App({ result, table = routeTable }: { result: LoadResult; table?: RouteTable }) {
  const route = useHashRoute();
  const title = useMemo(() => pageTitle(result, table, route), [result, table, route]);
  const announcer = useRouteChange(route, title);
  return (
    <>
      <Page result={result} table={table} route={route} />
      <p ref={announcer} aria-live="polite" aria-atomic="true" className="sr-only" />
    </>
  );
}
