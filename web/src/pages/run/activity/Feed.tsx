import { STATUS_SETS, type Tone } from "@/components/status/sets";
import { StatusShape } from "@/components/status/shapes";
import { cx } from "@/utils/cx";
import type { ActivityLine } from "../slice-activity";

const MARK: Record<Tone, string> = {
  success: "text-success-mark",
  warning: "text-warning-mark",
  error: "text-error-mark",
  info: "text-info-mark",
  neutral: "text-text-tertiary",
  action: "text-action",
  gap: "text-text-tertiary",
};

function stateOf(line: ActivityLine) {
  return line.state === "Not assessable"
    ? STATUS_SETS["Module state"]["Not assessable"]
    : STATUS_SETS["Run states"][line.state];
}

/** The activity feed, newest first. */
export function Feed({ lines }: { lines: ActivityLine[] }) {
  // Count identical records oldest first so a new entry does not remount older rows.
  const occurrences = new Map<string, number>();
  const entries = [...lines]
    .reverse()
    .map((line) => {
      const identity = JSON.stringify([line.time, line.who, line.state, line.text]);
      const occurrence = (occurrences.get(identity) ?? 0) + 1;
      occurrences.set(identity, occurrence);
      return { line, key: `${identity}:${String(occurrence)}` };
    })
    .reverse();
  return (
    <ul>
      {entries.map(({ line, key }, i) => {
        const { shape, tone } = stateOf(line);
        const last = i === lines.length - 1;
        return (
          <li key={key}>
            <article className="flex gap-3">
              <div className="flex flex-none flex-col items-center">
                <span
                  className={cx(
                    "flex size-7 shrink-0 items-center justify-center rounded-ds-full bg-surface-subtle",
                    MARK[tone],
                  )}
                >
                  <StatusShape shape={shape} />
                  <span className="sr-only">{line.state}</span>
                </span>
                {last ? null : (
                  <span
                    aria-hidden="true"
                    className="my-1 min-h-3 flex-1 border-s border-border-container"
                  />
                )}
              </div>
              <div className={cx("flex min-w-0 flex-1 flex-col", last ? "pb-0" : "pb-4")}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="min-w-0 text-sm font-medium wrap-anywhere text-text-secondary">
                    {line.who}
                  </span>
                  <time className="font-mono text-caption text-text-tertiary tabular-nums">
                    {line.time}
                  </time>
                </div>
                <p className="text-small text-pretty wrap-anywhere text-text-secondary">
                  {line.text}
                </p>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
