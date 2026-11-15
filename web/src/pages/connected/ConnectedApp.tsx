import { Button } from "@/components/base/buttons/button";
import { PageHeader } from "../../shell/PageHeader";
import { Shell, type Area } from "../../shell/Shell";
import type { Mode } from "./api";
import { ReportLibrary, ReportReader } from "./ReportLibrary";
import { RunProgress } from "./RunProgress";
import { StartRun } from "./StartRun";

const SECTIONS: { area: Area; href: string }[] = [
  { area: "library", href: "/" },
  { area: "run", href: "/start" },
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

export function ConnectedApp({
  path,
  search = window.location.search,
  mode,
  navigate = assign,
}: {
  path: string;
  search?: string;
  mode: Mode;
  navigate?: (path: string) => void;
}) {
  const run = /^\/run\/([a-zA-Z0-9][a-zA-Z0-9_.-]{0,79})\/?$/.exec(path)?.[1];
  const report = reportFolder(path);
  const start = path === "/start" || path === "/start/";
  const prior = new URLSearchParams(search).get("from");
  const current = start || run ? "run" : "library";
  return (
    <Shell current={current} sections={SECTIONS} symbol="/symbol.svg">
      {path === "/" || path === "/index.html" ? (
        <ReportLibrary />
      ) : start ? (
        <StartRun key={prior} mode={mode} navigate={navigate} from={prior ?? undefined} />
      ) : run ? (
        <RunProgress key={run} id={run} mode={mode} />
      ) : report ? (
        <ReportReader key={report} id={report} mode={mode} />
      ) : (
        <PageHeader title="Page not found" actions={<Button href="/">Library</Button>} />
      )}
    </Shell>
  );
}
