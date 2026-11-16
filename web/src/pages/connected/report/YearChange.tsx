import { ArrowDown, ArrowUp } from "@untitledui/icons";
import { changeSign, changeText, tone } from "../signal";

const colour = {
  better: "text-success-text",
  worse: "text-error-text",
  flat: "text-text-secondary",
  none: "text-text-secondary",
} as const;
const word = { better: "better", worse: "worse", flat: "unchanged", none: "" } as const;

/** The change against the same metric a year earlier; the sign, arrow and word carry the colour. */
export function YearChange({
  metricKey,
  change,
  unit,
  prior,
}: {
  metricKey: string;
  change: string;
  unit?: string | null;
  prior: string;
}) {
  const sign = changeSign(change);
  const kind = tone(metricKey, change);
  return (
    <p className={`flex items-center gap-1 text-sm tabular-nums ${colour[kind]}`}>
      {sign === 1 && <ArrowUp aria-hidden className="size-4 shrink-0" />}
      {sign === -1 && <ArrowDown aria-hidden className="size-4 shrink-0" />}
      {`${changeText(change, unit)} vs ${prior}`}
      {word[kind] && <span className="sr-only">{word[kind]}</span>}
    </p>
  );
}
