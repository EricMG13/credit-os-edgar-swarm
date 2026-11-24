import { byStage } from "../report/stages";
import { latestRun, type Cell, type Coverage as Data, type Issuer } from "../coverageData";
import { named, RunLine, tableBox, th } from "./shared";
import { StateMark } from "./StateMark";
import { cx } from "@/utils/cx";

/** The fixed columns grouped under the five stages, in stage order. */
export function stageColumns(data: Data) {
  return byStage(data.columns.map((column) => ({ ...column, id: column.code }))).map((group) => ({
    name: group.name,
    columns: group.rows,
  }));
}

/** Two header rows: the stage groups over the module names. */
export function StageHead({
  data,
  lead,
}: {
  data: Data;
  /** The row-header cells to the left of the stage groups. */
  lead: { label: string; className?: string }[];
}) {
  const groups = stageColumns(data);
  return (
    <thead>
      <tr className="border-b border-border-hairline">
        {lead.map((cell) => (
          <th key={cell.label} rowSpan={2} className={cx(th, cell.className)}>
            {cell.label}
          </th>
        ))}
        {groups.map((group) => (
          <th
            key={group.name}
            colSpan={group.columns.length}
            scope="colgroup"
            className="border-l border-border-hairline px-3 pt-3 pb-1 text-left text-caption font-medium text-text-tertiary"
          >
            {group.name}
          </th>
        ))}
      </tr>
      <tr className="border-b border-border-hairline">
        {groups.flatMap((group) =>
          group.columns.map((column, index) => (
            <th
              key={column.code}
              scope="col"
              className={cx(
                "min-w-28 px-3 pt-1 pb-3 text-left align-bottom text-small font-medium text-text-secondary",
                index === 0 && "border-l border-border-hairline",
              )}
            >
              {named(column)}
            </th>
          )),
        )}
      </tr>
    </thead>
  );
}

export function StateCells({ data, cells }: { data: Data; cells: Record<string, Cell> }) {
  return (
    <>
      {stageColumns(data).flatMap((group) =>
        group.columns.map((column, index) => (
          <td
            key={column.code}
            className={cx("p-3 align-top", index === 0 && "border-l border-border-hairline")}
          >
            <StateMark cell={cells[column.code]} />
          </td>
        )),
      )}
    </>
  );
}

/** Issuer × module: each issuer's newest run against the fixed columns, grouped by stage. */
export function Matrix({
  data,
  issuers,
  chosen,
  toggle,
  open,
  setOpen,
}: {
  data: Data;
  issuers: Issuer[];
  chosen: ReadonlySet<string>;
  toggle: (key: string) => void;
  open: string | null;
  setOpen: (key: string | null) => void;
}) {
  return (
    <div className={tableBox}>
      <table className="w-full text-small">
        <caption className="sr-only">Each issuer’s newest run: what every module delivered</caption>
        <StageHead data={data} lead={[{ label: "Issuer", className: "min-w-56" }]} />
        <tbody>
          {issuers.map((issuer) => {
            const run = latestRun(issuer);
            if (!run) return null;
            return (
              <tr key={issuer.key} className="border-b border-border-hairline last:border-0">
                <th
                  scope="row"
                  className="sticky left-0 z-10 min-w-56 bg-surface-card p-3 text-left align-top font-semibold wrap-anywhere"
                >
                  <span className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1.5"
                      aria-label={`Compare ${issuer.name}`}
                      checked={chosen.has(issuer.key)}
                      onChange={() => {
                        toggle(issuer.key);
                      }}
                    />
                    <span className="grid gap-0.5">
                      <button
                        type="button"
                        className="w-fit cursor-pointer text-left underline-offset-2 hover:underline"
                        aria-expanded={open === issuer.key}
                        onClick={() => {
                          setOpen(open === issuer.key ? null : issuer.key);
                        }}
                      >
                        {issuer.name}
                      </button>
                      <RunLine run={run} />
                    </span>
                  </span>
                </th>
                <StateCells data={data} cells={run.cells} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
