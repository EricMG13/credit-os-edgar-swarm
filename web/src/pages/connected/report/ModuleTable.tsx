import { MatrixBlock } from "@/pages/library/parts/MatrixBlock";
import { QuestionsBlock } from "@/pages/library/parts/QuestionsBlock";
import { StatementBlock } from "@/pages/library/parts/StatementBlock";
import { WatchBlock } from "@/pages/library/parts/WatchBlock";
import type { AnswerState, Cell } from "@/pages/library/slice";
import { containsReference, displayColumns, type Table } from "../publishedReport";

function visible(table: Table) {
  const indexes = displayColumns(table.headers, false, table.rows);
  const headers = indexes.map((index) => table.headers[index] ?? "");
  return {
    headers,
    rows: table.rows.map(({ cells, line }) => ({
      line,
      cells: indexes.map((index) => cells[index] ?? ""),
    })),
  };
}

function readingCell(text: string): Cell {
  if (!text) return null;
  if (/^withheld(?:[:\s]|$)/i.test(text)) return { kind: "withheld", reason: text };
  if (/^not (?:supplied|stated|calculable|modelled)(?:[:\s]|$)/i.test(text))
    return { kind: "gap", reason: text };
  return { kind: "value", text, at: null };
}

function statement(
  title: string,
  data: ReturnType<typeof visible>,
  traceAt: (line: number) => string,
) {
  const unit = data.headers.indexOf("Unit");
  if (data.headers[0] !== "Line item" || unit < 2) return null;
  const periods = data.headers.slice(1, unit);
  if (!periods.every((period) => /^(?:FY|H[12] |Q[1-4] |LTM |20\d\d-)/.test(period))) return null;
  if (data.headers.slice(unit + 1).some((name) => name !== "Basis")) return null;
  const rows = data.rows.map(({ cells, line }) => ({
    label: [cells[0], cells[unit], cells[unit + 1]].filter(Boolean).join(" · "),
    cells: cells.slice(1, unit).map(readingCell),
    emphasis: false,
    line,
  }));
  if (new Set(rows.map(({ label }) => label)).size !== rows.length) return null;
  return (
    <StatementBlock
      block={{
        kind: "statement",
        title,
        nav: null,
        trace: null,
        periods,
        basis: null,
        rows,
        stub: data.headers[0],
      }}
      traceForRow={(index) => {
        const row = rows[index];
        return row ? traceAt(row.line) : null;
      }}
    />
  );
}

function research(
  title: string,
  data: ReturnType<typeof visible>,
  traceAt: (line: number) => string,
) {
  if (
    data.headers.join("|") !== "Question|Status|Answer in brief|Evidence families|What stays open"
  )
    return null;
  const options = new Set(["Answered", "Partly answered", "Not answered"]);
  if (data.rows.some(({ cells }) => !options.has(cells[1] ?? ""))) return null;
  return (
    <QuestionsBlock
      block={{
        kind: "questions",
        title,
        items: data.rows.map(({ cells, line }) => ({
          question: cells[0] ?? "",
          state: cells[1] as AnswerState,
          answer:
            [cells[2], cells[4] && `Open question · ${cells[4]}`].filter(Boolean).join("\n") ||
            null,
          trace: traceAt(line),
        })),
      }}
    />
  );
}

export function typedModuleTable(title: string, table: Table, traceAt: (line: number) => string) {
  const data = visible(table);
  if (!data.rows.length) return null;
  const signature = data.headers.join("|");
  if (
    data.rows.some(({ cells }) =>
      cells.some((cell, i) => data.headers[i] !== "Evidence families" && containsReference(cell)),
    )
  )
    return null;
  if (signature === "Risk|Probability|Impact")
    return (
      <MatrixBlock
        block={{
          kind: "matrix",
          title,
          columns: data.headers,
          note: null,
          trace: null,
          rows: data.rows.map(({ cells, line }) => ({
            risk: cells[0] ?? "",
            probability: cells[1] || null,
            impact: cells[2] || null,
            trace: traceAt(line),
          })),
        }}
      />
    );
  if (
    signature === "Indicator|Timing|Threshold" &&
    data.rows.every(({ cells }) => /^(?:Leading|Lagging)$/i.test(cells[1] ?? ""))
  )
    return (
      <WatchBlock
        block={{
          kind: "watch",
          title,
          items: data.rows.map(({ cells, line }) => ({
            indicator: cells[0] ?? "",
            timing: cells[1]?.toLowerCase() === "leading" ? "leading" : "lagging",
            threshold: cells[2] ?? "",
            trace: traceAt(line),
          })),
        }}
      />
    );
  return research(title, data, traceAt) ?? statement(title, data, traceAt);
}
