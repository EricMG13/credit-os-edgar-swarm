import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { ChartPrintContext } from "@/components/chart/ChartPrintContext";
import { containsReference } from "../publishedReport";
import { asOfDate } from "../runFigures";
import {
  exportHref,
  exportRoute,
  containsRunIdentifier,
  type ExportId,
  type ExportOption,
  type ReportExport,
} from "./reportExport";
import "./reportExport.css";

function showHash(hash: string, from?: string) {
  const oldURL = window.location.href;
  if (from !== undefined) window.history.pushState({ reportExportFrom: from }, "", hash);
  else window.history.replaceState(null, "", hash);
  window.dispatchEvent(new HashChangeEvent("hashchange", { oldURL, newURL: window.location.href }));
}

function openPreview(id: ExportId) {
  showHash(exportHref(id), window.location.hash);
}

function closePreview() {
  const state: unknown = window.history.state;
  if (state && typeof state === "object" && "reportExportFrom" in state) window.history.back();
  else showHash("#overview");
}

export function ExportMenu({ options, reason }: { options: ExportOption[]; reason: string }) {
  if (options.length === 0)
    return (
      <details className="relative">
        <summary className="cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold">
          Export PDF
        </summary>
        <p className="absolute top-full right-0 z-10 w-64 rounded-ds-sm border border-border-hairline bg-surface-card p-3 text-sm shadow-2">
          {reason}
        </p>
      </details>
    );
  return (
    <MenuTrigger>
      <Button color="secondary" size="sm">
        Export PDF
      </Button>
      <Popover
        className="rounded-ds-sm border border-border-hairline bg-surface-card p-1 shadow-2"
        placement="bottom end"
      >
        <Menu aria-label="PDF formats">
          {options.map(({ id, name }) => (
            <MenuItem
              key={id}
              onAction={() => {
                openPreview(id);
              }}
              className="cursor-pointer rounded-ds-xs px-3 py-2 text-sm outline-hidden data-focused:bg-surface-subtle"
            >
              {name}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

function chartLayoutReady(root: HTMLElement) {
  return [...root.querySelectorAll(".recharts-responsive-container")].every((chart) => {
    const box = chart.querySelector(".recharts-surface")?.getBoundingClientRect();
    return box && box.width > 0 && box.height > 0;
  });
}

function cssText(text: string) {
  return `"${text.replace(/\s+/g, " ").replace(/["\\]/g, "\\$&")}"`;
}

function PrintPaper({ report }: { report: Extract<ReportExport, { state: "ready" }> }) {
  const { id, name, document: paper, qualifiers, previewNote, privateIds } = report;
  const root = useRef<HTMLElement>(null);
  const [layout, setLayout] = useState<"waiting" | "ready" | "failed">("waiting");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let active = true;
    let frame = 0;
    const deadline = window.setTimeout(() => {
      active = false;
      cancelAnimationFrame(frame);
      setLayout("failed");
    }, 5000);
    const advance = () => {
      if (!active) return;
      if (!chartLayoutReady(element) || element.querySelector("[role=status]")) {
        frame = requestAnimationFrame(advance);
        return;
      }
      window.clearTimeout(deadline);
      const text = element.innerText || element.textContent || "";
      const unsafe =
        element.querySelector("a[href], svg a") ||
        containsReference(text) ||
        containsRunIdentifier(text, privateIds);
      setLayout(unsafe ? "failed" : "ready");
    };
    const mark = element.querySelector(".report-export-brand img");
    void Promise.all([
      document.fonts.ready,
      mark instanceof HTMLImageElement ? mark.decode() : Promise.reject(new Error("Missing mark")),
    ]).then(
      () => {
        if (active)
          frame = requestAnimationFrame(() => {
            frame = requestAnimationFrame(advance);
          });
      },
      () => {
        if (!active) return;
        window.clearTimeout(deadline);
        setLayout("failed");
      },
    );
    return () => {
      active = false;
      window.clearTimeout(deadline);
      cancelAnimationFrame(frame);
    };
  }, [attempt, privateIds]);
  const scope = [paper.scope, ...qualifiers].join(" · ");
  const identity = [
    paper.ticker,
    paper.pathway,
    `As of ${asOfDate(paper.date)}`,
    paper.period && `Financial period ${paper.period}`,
  ]
    .filter(Boolean)
    .join(" · ");
  const footerIdentity = `${paper.issuer} · ${name} · ${identity}`;
  const footerScope = [scope, ...paper.restrictions].join(" · ");
  useEffect(() => {
    const style = document.documentElement.style;
    style.setProperty("--report-export-identity", cssText(footerIdentity));
    style.setProperty("--report-export-scope", cssText(footerScope));
    return () => {
      style.removeProperty("--report-export-identity");
      style.removeProperty("--report-export-scope");
    };
  }, [footerIdentity, footerScope]);
  return (
    <>
      <div className="report-export-controls">
        <Button color="secondary" size="sm" onPress={closePreview}>
          Close preview
        </Button>
        <div className="flex flex-wrap items-center gap-2">
          {layout === "waiting" && <p role="status">Preparing print layout…</p>}
          {layout === "failed" && (
            <>
              <p role="alert">The print layout could not be prepared.</p>
              <Button
                color="secondary"
                size="sm"
                onPress={() => {
                  setLayout("waiting");
                  setAttempt((count) => count + 1);
                }}
              >
                Try again
              </Button>
            </>
          )}
          <Button
            size="sm"
            isDisabled={layout !== "ready"}
            onPress={() => {
              if (
                layout === "ready" &&
                exportRoute(window.location.hash) === id &&
                root.current?.isConnected
              )
                window.print();
            }}
          >
            Print / Save PDF
          </Button>
        </div>
        <p>
          Turn off <strong>Headers and footers</strong> in the print dialog before saving a PDF for
          sharing. Browser headers can include the local report address.
        </p>
      </div>
      <article
        ref={root}
        className="report-export-paper"
        data-print-ready={layout === "ready" ? "" : undefined}
        aria-labelledby="report-export-title"
      >
        <header className="report-export-masthead">
          <p className="report-export-brand">
            <img alt="" src="/symbol.svg" width={22} height={22} />
            Credit OS <span>{name}</span>
          </p>
          <h1 id="report-export-title">{paper.issuer}</h1>
          <p>
            {identity} · {scope}
          </p>
          {previewNote && <p>{previewNote}</p>}
        </header>
        <ChartPrintContext value>{paper.content}</ChartPrintContext>
      </article>
    </>
  );
}

export function ReportExportPreview({
  report,
  children,
}: {
  report?: ReportExport;
  children?: ReactNode;
}) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
  }, []);
  return (
    <section className="report-export-preview" data-report-export>
      <h2 ref={heading} tabIndex={-1} className="sr-only">
        PDF preview
      </h2>
      {report?.state === "ready" ? (
        <PrintPaper report={report} />
      ) : (
        <>
          <Button color="secondary" size="sm" onPress={closePreview}>
            Close preview
          </Button>
          {report?.state === "unavailable" ? <p role="status">{report.reason}</p> : children}
        </>
      )}
    </section>
  );
}
