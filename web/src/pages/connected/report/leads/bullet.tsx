import { withUnit } from "../../publishedReport";
import { BULLET, bulletGeometry, type HeadroomTest } from "../overview/stressData";
import { Figure } from "../overview/Tile";
import { Trace, type LeadTable } from "./parts";

/** A test's cell as written, with the row's unit when it is a number. */
const shown = (test: HeadroomTest, cell: HeadroomTest["current"]) =>
  cell.value === null ? cell.text : withUnit(cell.text, test.unit);

const capital = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/** A position on the bullet's scale as a share of its track. */
const share = (x: number) => ((x - BULLET.left) / (BULLET.right - BULLET.left)) * 100;

/** Why a test has no bar, in the module's words where it gave a reason. */
function gapWords(test: HeadroomTest) {
  const reason = test.current.reason ?? test.threshold.reason;
  if (reason) return capital(reason);
  return "The stated values cannot be placed on a scale from zero.";
}

function reading(test: HeadroomTest) {
  const headroom = test.headroom ? `, headroom ${test.headroom}` : "";
  const direction = test.direction ? ` ${test.direction}.` : "";
  return `${test.label}: ${shown(test, test.current)} against a threshold of ${shown(test, test.threshold)}${headroom}.${direction}`;
}

function BulletRow({ test, href }: { test: HeadroomTest; href?: string }) {
  const geometry = bulletGeometry(test);
  const ends = geometry ? [geometry.ticks[0], geometry.ticks.at(-1)] : [];
  // Both figures stated as numbers: shown as written even where they cannot be placed from zero.
  const stated = test.current.value !== null && test.threshold.value !== null;
  const headroom = stated ? test.headroom : null;
  return (
    <li className="flex min-w-0 flex-col gap-2 border-t border-border-hairline pt-3 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <span className="min-w-0 text-small font-medium wrap-anywhere text-text-primary">
          {test.label}
        </span>
        <span className="flex items-center gap-2">
          {stated ? (
            <Figure className="text-small">
              <span>{shown(test, test.current)}</span>{" "}
              <span className="text-text-tertiary">/ {shown(test, test.threshold)}</span>
            </Figure>
          ) : (
            <span className="rounded-ds-xs border border-dashed border-border-gap px-1.5 text-caption text-gap-text">
              Not supplied
            </span>
          )}
          {href && <Trace href={href} name={test.label} />}
        </span>
      </div>
      {geometry ? (
        <div role="img" aria-label={reading(test)} className="flex flex-col gap-1">
          <span aria-hidden="true" className="relative block h-3 rounded-ds-full bg-surface-subtle">
            <span
              data-current
              className="absolute inset-y-0 left-0 rounded-ds-full bg-chart-1"
              style={{ width: `${String(share(geometry.current))}%` }}
            />
            <span
              data-threshold
              className="absolute -inset-y-1 w-0.5 -translate-x-1/2 bg-text-primary"
              style={{ left: `${String(share(geometry.threshold))}%` }}
            />
          </span>
          <span
            aria-hidden="true"
            className="flex justify-between font-mono text-caption text-text-tertiary"
          >
            {ends.map((tick, at) => (
              <span key={at}>{tick ? withUnit(tick.label, test.unit) : ""}</span>
            ))}
          </span>
        </div>
      ) : (
        <span className="text-caption text-text-secondary">{gapWords(test)}</span>
      )}
      {(headroom !== null || test.direction !== "") && (
        <span className="flex flex-wrap gap-x-3 text-caption text-text-secondary">
          {headroom !== null && <span>Headroom {headroom}</span>}
          {test.direction && <span className="text-text-tertiary">{test.direction}</span>}
        </span>
      )}
    </li>
  );
}

/**
 * Value against limit, one row a test, each on its own scale from zero: the current bar, the
 * threshold tick, both figures as written, the stated headroom and the direction words. A test with
 * a gap shows Not supplied and the reason, no bar. `href(index)` is the trace of `tests[index]`.
 */
export function Bullets({
  label,
  tests,
  href,
}: {
  label: string;
  tests: readonly HeadroomTest[];
  href?: (index: number) => string;
}) {
  return (
    <ul aria-label={label} className="flex min-w-0 flex-col gap-3">
      {tests.map((test, at) => (
        <BulletRow key={`${String(at)}-${test.label}`} test={test} href={href?.(at)} />
      ))}
    </ul>
  );
}

/** The bullets' table view: each cell as written, a missing headroom or direction as missing. */
export function bulletTable(
  tests: readonly HeadroomTest[],
  href?: (index: number) => string,
): LeadTable {
  return {
    head: ["Test", "Current", "Threshold", "Headroom", "Direction"],
    rows: tests.map((test, at) => ({
      label: test.label,
      cells: [
        test.current.text || null,
        test.threshold.text || null,
        test.headroom,
        test.direction || null,
      ],
      end: href ? <Trace href={href(at)} name={test.label} /> : undefined,
    })),
    endHeading: href ? "Source" : undefined,
  };
}
