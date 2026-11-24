import { cx } from "@/utils/cx";
import { moduleName } from "../api";
import { byStage } from "../report/stages";
import {
  latestRun,
  type Cell,
  type Coverage as Data,
  type CoverageRun,
  type Issuer,
} from "../coverageData";
import { named, reportPath, RunLine, tableBox, th } from "./shared";
import { hasHandoff, StateMark } from "./StateMark";

/** The fixed columns grouped under the five stages, in stage order. */
function stageColumns(data: Data) {
  return byStage(data.columns.map((column) => ({ ...column, id: column.code }))).map((group) => ({
    name: group.name,
    columns: group.rows,
  }));
}

const STICKY = "sticky left-0 z-10 bg-surface-card";

/** Two header rows: the stage groups over the module names. */
export function StageHead({ data, lead }: { data: Data; lead: string }) {
  const groups = stageColumns(data);
  return (
    <thead>
      <tr className="border-b border-border-hairline">
        <th
          rowSpan={2}
          scope="col"
          className={cx(th, STICKY, "z-20 min-w-36 sm:min-w-52")}
        >
          {lead}
        </th>
        {groups.map((group) => (
          <th
            key={group.name}
            colSpan={group.columns.length}
            scope="colgroup"
            className="border-l border-border-hairline px-2 pt-3 pb-1 text-left text-caption font-medium text-text-tertiary"
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
                "min-w-16 px-2 pt-1 pb-3 text-left align-bottom text-caption font-medium text-text-secondary",
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

/** A run's state under each fixed column; a module with a handoff opens its page in the report. */
export function StateCells({
  data,
  run,
  issuer,
}: {
  data: Data;
  run: CoverageRun;
  issuer: string;
}) {
  return (
    <>
      {stageColumns(data).flatMap((group) =>
        group.columns.map((column, index) => {
          const cell: Cell | undefined = run.cells[column.code];
          const mark = <StateMark cell={cell} />;
          return (
            <td
              key={column.code}
              className={cx("p-2 align-top", index === 0 && "border-l border-border-hairline")}
            >
              {hasHandoff(cell) ? (
                <a
                  href={`${reportPath(run.folder)}#modules/${column.code}`}
                  aria-label={`${moduleName(column.code) === column.code ? column.title : moduleName(column.code)} for ${issuer}`}
                  className="-m-1 flex min-h-8 w-fit rounded-ds-xs p-1 outline-focus-ring hover:bg-surface-subtle focus-visible:outline-2 max-[480px]:min-h-11"
                >
                  {mark}
                </a>
              ) : (
                mark
              )}
            </td>
          );
        }),
      )}
    </>
  );
}

/** The scrolling box a wide table sits in: named, and reachable by keyboard so no stage is hidden. */
export function Scroller({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      role="region"
      aria-label={label}
      // A scrolling region must take focus, or a keyboard reader cannot reach what it hides.
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className={cx(
        tableBox,
        "outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2",
      )}
    >
      {children}
    </div>
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
    <Scroller label="Issuers by module">
      <table className="w-full text-small">
        <caption className="sr-only">Each issuer’s newest run: what every module delivered</caption>
        <StageHead data={data} lead="Issuer" />
        <tbody>
          {issuers.map((issuer) => {
            const run = latestRun(issuer);
            if (!run) return null;
            return (
              <tr key={issuer.key} className="border-b border-border-hairline last:border-0">
                <th
                  scope="row"
                  className={cx(
                    STICKY,
                    "min-w-36 p-2 text-left align-top font-semibold wrap-anywhere sm:min-w-52 sm:p-3",
                  )}
                >
                  <span className="flex items-start gap-1">
                    <label className="-ml-1 flex size-8 flex-none items-center justify-center max-[480px]:size-11">
                      <input
                        type="checkbox"
                        className="size-5"
                        aria-label={`Compare ${issuer.name}`}
                        checked={chosen.has(issuer.key)}
                        onChange={() => {
                          toggle(issuer.key);
                        }}
                      />
                    </label>
                    <span className="grid min-w-0 gap-0.5">
                      <button
                        type="button"
                        className="min-h-8 w-fit cursor-pointer text-left underline-offset-2 hover:underline max-[480px]:min-h-11"
                        aria-expanded={open === issuer.key}
                        onClick={() => {
                          setOpen(open === issuer.key ? null : issuer.key);
                        }}
                      >
                        {issuer.name}
                      </button>
                      <span className="hidden sm:block">
                        <RunLine run={run} />
                      </span>
                    </span>
                  </span>
                </th>
                <StateCells data={data} run={run} issuer={issuer.name} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </Scroller>
  );
}
