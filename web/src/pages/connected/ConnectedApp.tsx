import { lazy, Suspense, useEffect, type ComponentType } from "react";
import { Button } from "@/components/base/buttons/button";
import { Skeleton } from "@/components/gap/Skeleton";
import { PageHeader } from "../../shell/PageHeader";
import { Shell, type Area } from "../../shell/Shell";
import { askAhead, LIBRARY_ADDRESS, snapshotAddress } from "./ahead";
import type { Mode } from "./api";

type PageFile<P> = { default: ComponentType<P> };

/**
 * A page kept in its own file, asked for once. Asked for ahead and already answered when first
 * drawn, it is drawn in that drawing, or fails in it, with no loading state between; React keeps a
 * loading state it has shown on screen for 300 ms however soon the file arrives. Drawn before the
 * answer, it waits on that same request as any lazy page does.
 */
function page<P extends object>(load: () => Promise<ComponentType<P>>) {
  type Answer = (file: (file: PageFile<P>) => void, failed: (failure: unknown) => void) => void;
  let asked: Promise<PageFile<P>> | undefined;
  let answered: Promise<PageFile<P>> | undefined;
  // React draws an answer already given only when `then` answers as it is called.
  const answer = (then: Answer) => {
    answered = { then } as unknown as Promise<PageFile<P>>;
  };
  const ask = () => {
    if (asked) return asked;
    asked = load().then((component) => ({ default: component }));
    asked.then(
      (file) => {
        answer((loaded) => {
          loaded(file);
        });
      },
      (failure: unknown) => {
        answer((_, failed) => {
          failed(failure);
        });
      },
    );
    return asked;
  };
  return Object.assign(
    lazy(() => answered ?? ask()),
    { ask },
  );
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
 * Asks, ahead of the first drawing, for the page file that drawing `path` will ask for, and for no
 * other. The promise settles when that file has loaded or failed. Once the library or a report has
 * loaded, what it reads first is asked for too, while the page is drawn.
 */
export function preloadPage(path: string, readOnly: boolean): Promise<unknown> {
  const reads = (address: string) => () => {
    askAhead(address);
  };
  const unloaded = () => undefined;
  if (path === "/" || path === "/index.html")
    return ReportLibrary.ask().then(reads(LIBRARY_ADDRESS), unloaded);
  const start = path === "/start" || path === "/start/";
  const runs = path === "/runs" || path === "/runs/";
  const run = RUN.test(path);
  if (readOnly && (start || runs || run)) return Promise.resolve();
  if (start) return StartRun.ask().catch(unloaded);
  if (runs) return RunActivity.ask().catch(unloaded);
  if (run) return RunProgress.ask().catch(unloaded);
  const report = reportFolder(path);
  if (report === null) return Promise.resolve();
  return ReportReader.ask().then(reads(snapshotAddress(report)), unloaded);
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
