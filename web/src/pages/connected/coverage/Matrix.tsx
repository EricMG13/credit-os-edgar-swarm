import { cx } from "@/utils/cx";
import { moduleName } from "../api";
import { latestRun, type Coverage as Data, type CoverageRun, type Issuer } from "../coverageData";
import { stageColumns, RunStates } from "./RunStates";
import { named, reportPath, RunLine, tableBox, th } from "./shared";
import { hasHandoff, LEGEND, LegendItem, StateShape, stateWord } from "./StateMark";
import { useNarrow } from "./useNarrow";

const STICKY = "sticky left-0 z-10 bg-surface-card";

/** The scrolling box a wide table sits in: named, focusable, and padded so focus clears the sticky column. */
function Scroller({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      role="region"
      aria-label={label}
      // A scrolling region must take focus, or a keyboard reader cannot reach what it hides.
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className={cx(
        tableBox,
        "scroll-pl-56 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2",
      )}
    >
      {children}
    </div>
  );
}

function Legend() {
  return (
    <ul aria-label="What the shapes mean" className="flex flex-wrap gap-x-5 gap-y-1">
      {LEGEND.map((item) => (
        <LegendItem key={item.word} {...item} />
      ))}
    </ul>
  );
}

/** Two header rows: the stage groups over the module names, which stand on end to keep columns narrow. */
function StageHead({ data }: { data: Data }) {
  const groups = stageColumns(data);
  return (
    <thead>
      <tr className="border-b border-border-hairline">
        <th rowSpan={2} scope="col" className={cx(th, STICKY, "z-20 min-w-44 align-bottom")}>
          Issuer
        </th>
        {groups.map((group) => (
          <th
            key={group.name}
            colSpan={group.columns.length}
            scope="colgroup"
            className="border-l border-border-hairline px-1 pt-3 pb-1 text-left align-bottom text-caption font-medium text-text-tertiary"
          >
            {group.columns.length < 3 ? (
              <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                {group.name}
              </span>
            ) : (
              group.name
            )}
          </th>
        ))}
      </tr>
      <tr className="border-b border-border-hairline">
        {groups.flatMap((group) =>
          group.columns.map((column, index) => (
            <th
              key={column.code}
              scope="col"
              title={named(column)}
              className={cx(
                "h-36 w-9 px-0 pb-2 text-center align-bottom text-caption font-medium text-text-secondary",
                index === 0 && "border-l border-border-hairline",
              )}
            >
              <span className="mx-auto block [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                {named(column)}
              </span>
            </th>
          )),
        )}
      </tr>
    </thead>
  );
}

/** A run's states as shapes under each fixed column; the word is each cell's name and tooltip. */
function ShapeCells({ data, run, issuer }: { data: Data; run: CoverageRun; issuer: string }) {
  return (
    <>
      {stageColumns(data).flatMap((group) =>
        group.columns.map((column, index) => {
          const cell = run.cells[column.code];
          const label = `${moduleName(column.code) === column.code ? column.title : moduleName(column.code)} for ${issuer}: ${stateWord(cell)}`;
          const shape = <StateShape cell={cell} />;
          return (
            <td
              key={column.code}
              className={cx("p-0 text-center", index === 0 && "border-l border-border-hairline")}
            >
              {hasHandoff(cell) ? (
                <a
                  href={`${reportPath(run.folder)}#modules/${column.code}`}
                  aria-label={label}
                  title={stateWord(cell)}
                  className="mx-auto flex size-8 items-center justify-center rounded-ds-xs outline-focus-ring hover:bg-surface-subtle focus-visible:outline-2"
                >
                  {shape}
                </a>
              ) : (
                <span
                  role="img"
                  aria-label={label}
                  title={stateWord(cell)}
                  className="mx-auto flex size-8 items-center justify-center"
                >
                  {shape}
                </span>
              )}
            </td>
          );
        }),
      )}
    </>
  );
}

function IssuerName({
  issuer,
  chosen,
  toggle,
  open,
  setOpen,
}: {
  issuer: Issuer;
  chosen: ReadonlySet<string>;
  toggle: (key: string) => void;
  open: string | null;
  setOpen: (key: string | null) => void;
}) {
  return (
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
      <button
        type="button"
        className="min-h-8 w-fit cursor-pointer text-left font-semibold underline-offset-2 hover:underline max-[480px]:min-h-11"
        aria-expanded={open === issuer.key}
        onClick={() => {
          setOpen(open === issuer.key ? null : issuer.key);
        }}
      >
        {issuer.name}
      </button>
    </span>
  );
}

/**
 * Issuer × module. Wide screens draw one row per issuer and one column per module, each cell a
 * shape with its word as name and tooltip and a legend above; a phone draws one card per issuer
 * with the five stages as rows.
 */
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
  const narrow = useNarrow();
  const name = { chosen, toggle, open, setOpen };
  if (narrow)
    return (
      <ul aria-label="Issuers by module" className="grid gap-3">
        {issuers.map((issuer) => {
          const run = latestRun(issuer);
          if (!run) return null;
          return (
            <li
              key={issuer.key}
              className="grid gap-3 rounded-ds-lg border border-border-subtle bg-surface-card p-4"
            >
              <div className="grid gap-0.5">
                <IssuerName issuer={issuer} {...name} />
                <RunLine run={run} />
              </div>
              <RunStates data={data} run={run} />
            </li>
          );
        })}
      </ul>
    );
  return (
    <div className="grid gap-3">
      <Legend />
      <Scroller label="Issuers by module">
        <table className="w-full text-small">
          <caption className="sr-only">
            Each issuer’s newest run: what every module delivered, as shapes
          </caption>
          <StageHead data={data} />
          <tbody>
            {issuers.map((issuer) => {
              const run = latestRun(issuer);
              if (!run) return null;
              return (
                <tr key={issuer.key} className="border-b border-border-hairline last:border-0">
                  <th
                    scope="row"
                    className={cx(STICKY, "min-w-44 p-2 text-left align-top wrap-anywhere")}
                  >
                    <span className="grid gap-0.5">
                      <IssuerName issuer={issuer} {...name} />
                      <span className="pl-7">
                        <RunLine run={run} />
                      </span>
                    </span>
                  </th>
                  <ShapeCells data={data} run={run} issuer={issuer.name} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </Scroller>
    </div>
  );
}
