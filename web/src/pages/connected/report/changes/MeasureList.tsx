import { ArrowRight } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { PublishedSource } from "../PublishedTrace";
import { ToneMark } from "../ToneMark";
import { Figure, GapNote } from "../overview/Tile";
import { Dumbbell } from "./Dumbbell";
import type { MeasureChange } from "./model";

const TONE = {
  better: "text-success-text",
  worse: "text-warning-text",
  flat: "text-text-secondary",
} as const;

/** The stated cause in words. "Unresolved" is drawn as written, in the signal edge, never hidden. */
function Cause({ cause }: { cause: string | null }) {
  if (cause === null) return <span className="text-caption text-gap-text">Cause not stated</span>;
  const open = cause === "Unresolved";
  return (
    <span
      className={
        open
          ? "rounded-ds-xs border border-warning-edge bg-warning-fill px-1.5 py-0.5 text-caption font-medium text-warning-text"
          : "rounded-ds-xs border border-border-hairline bg-surface-subtle px-1.5 py-0.5 text-caption text-text-secondary"
      }
    >
      Cause: {cause}
    </span>
  );
}

/** One measure: name, earlier → current as figures and as a dumbbell, the stated cause and effect. */
export function MeasureRow({ item, ranked }: { item: MeasureChange; ranked: boolean }) {
  const {
    label,
    before,
    after,
    beforeValue,
    afterValue,
    delta,
    tone,
    reason,
    cause,
    effect,
    href,
  } = item;
  return (
    <li className="grid gap-2 border-t border-border-hairline py-4 first:border-t-0 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-3">
        <h4 className="min-w-0 text-body font-medium text-text-primary">{label}</h4>
        <div className="flex flex-none items-center gap-2">
          {delta !== null && (
            <span
              data-change
              className={cx(
                "flex items-center gap-1.5 rounded-ds-xs bg-surface-subtle px-1.5 py-1 text-caption font-medium",
                tone && TONE[tone],
              )}
            >
              <Figure className="text-small">{delta}</Figure>
              {tone && <ToneMark tone={tone} />}
            </span>
          )}
          {href && (
            <PublishedSource href={href} name={label}>
              Comparison row
            </PublishedSource>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Figure className="flex flex-wrap items-center gap-2 text-small">
          <span className="text-text-secondary">{before}</span>
          <ArrowRight aria-hidden="true" className="size-4 text-text-tertiary" />
          <span className="font-medium">{after}</span>
        </Figure>
        {ranked && beforeValue !== null && afterValue !== null && (
          <Dumbbell before={beforeValue} after={afterValue} tone={tone} />
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Cause cause={cause} />
        {reason && <span className="text-caption text-text-secondary">{reason}</span>}
      </div>
      {effect && <p className="reading-copy text-small text-text-secondary">{effect}</p>}
    </li>
  );
}

export function MeasureList({
  items,
  ranked = true,
  label,
}: {
  items: readonly MeasureChange[];
  ranked?: boolean;
  label: string;
}) {
  if (items.length === 0) return <GapNote>None recorded</GapNote>;
  return (
    <ul aria-label={label} className="grid">
      {items.map((item) => (
        <MeasureRow key={item.key} item={item} ranked={ranked} />
      ))}
    </ul>
  );
}
