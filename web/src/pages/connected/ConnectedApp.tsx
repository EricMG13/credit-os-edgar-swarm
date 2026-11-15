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

export function ConnectedApp({
  path,
  mode,
  navigate = assign,
}: {
  path: string;
  mode: Mode;
  navigate?: (path: string) => void;
}) {
  const match = /^\/(run|report)\/([a-zA-Z0-9][a-zA-Z0-9_.-]{0,79})\/?$/.exec(path);
  const current = path === "/start" || match?.[1] === "run" ? "run" : "library";
  const id = match?.[2];
  return (
    <Shell current={current} sections={SECTIONS} symbol="/symbol.svg">
      {path === "/" || path === "/index.html" ? (
        <ReportLibrary />
      ) : path === "/start" ? (
        <StartRun mode={mode} navigate={navigate} />
      ) : match && id ? (
        match[1] === "run" ? (
          <RunProgress key={id} id={id} />
        ) : (
          <ReportReader key={id} id={id} />
        )
      ) : (
        <PageHeader title="Page not found" actions={<Button href="/">Library</Button>} />
      )}
    </Shell>
  );
}
