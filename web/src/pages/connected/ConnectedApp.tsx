import { lazy, Suspense, useEffect, type ComponentType } from "react";
import { Button } from "@/components/base/buttons/button";
import { Skeleton } from "@/components/gap/Skeleton";
import { PageHeader } from "../../shell/PageHeader";
import { Shell, type Area } from "../../shell/Shell";
import { askAhead, LIBRARY_ADDRESS, snapshotAddress } from "./ahead";
import type { Mode } from "./api";

/**
 * A page kept in its own file. Loaded ahead of the first drawing, it is drawn at once. A page first
 * drawn while its file is still loading shows the loading blocks, and React keeps those on screen
 * for 300 ms however soon the file arrives.
 */
function page<P extends object>(load: () => Promise<ComponentType<P>>) {
  let Loaded: ComponentType<P> | undefined;
  const Loading: ComponentType<P> = lazy(async () => ({ default: await load() }));
  function Page(props: P) {
    const Drawn = Loaded ?? Loading;
    return <Drawn {...props} />;
  }
  const preload = async () => {
    Loaded = await load();
  };
  return Object.assign(Page, { preload });
}

const ReportLibrary = page(() => import("./LibraryIndex").then((file) => file.ReportLibrary));
const ReportReader = page(() => import("./ReportLibrary").then((file) => file.ReportReader));
const RunActivity = page(() => import("./RunActivity").then((file) => file.RunActivity));
const RunProgress = page(() => import("./RunProgress").then((file) => file.RunProgress));
const StartRun = page(() => import("./StartRun").then((file) => file.StartRun));

function LoadingPage() {
  return (
    <div
      role="status"
      aria-label="Loading this page"
      className="mx-auto mt-6 grid w-full max-w-[96rem] gap-6"
    >
      <Skeleton lines={2} />
      <div className="grid gap-4 lg:grid-cols-2">
        {[0, 1].map((key) => (
          <div key={key} className="rounded-ds-lg border border-border-subtle p-8">
            <Skeleton lines={5} />
          </div>
        ))}
      </div>
    </div>
  );
}

const SECTIONS: { area: Area; href: string; label?: string }[] = [
  { area: "library", href: "/" },
  { area: "run", href: "/runs", label: "Run activity" },
];

function assign(path: string) {
  window.location.assign(path);
}

function reportFolder(path: string) {
  const segment = /^\/report\/([^/]+)\/?$/.exec(path)?.[1];
  if (!segment) return null;
  try {
    const folder = decodeURIComponent(segment);
    return !/[^\p{Letter}\p{Number}_. -]/u.test(folder) && folder !== "." && folder !== ".."
      ? folder
      : null;
  } catch {
    return null;
  }
}

const RUN = /^\/run\/([a-zA-Z0-9][a-zA-Z0-9_.-]{0,79})\/?$/;

/**
 * Loads the page at `path` before the first drawing, and asks for what the library or a report
 * reads first while that page loads.
 */
export function preloadPage(path: string) {
  if (path === "/" || path === "/index.html") {
    askAhead(LIBRARY_ADDRESS);
    return ReportLibrary.preload();
  }
  if (path === "/start" || path === "/start/") return StartRun.preload();
  if (path === "/runs" || path === "/runs/") return RunActivity.preload();
  if (RUN.test(path)) return RunProgress.preload();
  const report = reportFolder(path);
  if (report === null) return Promise.resolve();
  askAhead(snapshotAddress(report));
  return ReportReader.preload();
}

export function ConnectedApp({
  path,
  search = window.location.search,
  mode,
  readOnly = false,
  navigate = assign,
}: {
  path: string;
  search?: string;
  mode: Mode;
  readOnly?: boolean;
  navigate?: (path: string) => void;
}) {
  const run = RUN.exec(path)?.[1];
  const report = reportFolder(path);
  const start = path === "/start" || path === "/start/";
  const prior = new URLSearchParams(search).get("from");
  const runs = path === "/runs" || path === "/runs/";
  useEffect(() => {
    const title = start
      ? "Start a run"
      : runs
        ? "Run activity"
        : run
          ? "Run progress"
          : report
            ? "Credit report"
            : "Library";
    document.title = `${title} — Credit OS`;
  }, [path, start, runs, run, report]);
  const current = start || run || runs ? "run" : "library";
  return (
    <Shell
      current={current}
      sections={readOnly ? SECTIONS.slice(0, 1) : SECTIONS}
      symbol="/symbol.svg"
    >
      <Suspense fallback={<LoadingPage />}>
        {path === "/" || path === "/index.html" ? (
          <ReportLibrary readOnly={readOnly} />
        ) : readOnly && current === "run" ? (
          <PageHeader
            title="Read-only preview"
            actions={<Button href="/">Back to Library</Button>}
          />
        ) : start ? (
          <StartRun key={prior} mode={mode} navigate={navigate} from={prior ?? undefined} />
        ) : runs ? (
          <RunActivity />
        ) : run ? (
          <RunProgress key={run} id={run} mode={mode} />
        ) : report ? (
          <ReportReader key={report} id={report} mode={mode} />
        ) : (
          <PageHeader title="Page not found" actions={<Button href="/">Library</Button>} />
        )}
      </Suspense>
    </Shell>
  );
}
