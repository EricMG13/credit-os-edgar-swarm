import { Check } from "@untitledui/icons";
import { cx } from "@/utils/cx";

const STEPS = [
  { key: "documents", title: "Documents", note: "Add files" },
  { key: "purpose", title: "Purpose", note: "Choose one" },
  { key: "confirm", title: "Confirm", note: "Approve" },
  { key: "context", title: "More context", note: "Optional" },
  { key: "start", title: "Start", note: "Paid step" },
] as const;

/** The five steps of a run start. A step before `step` is complete; on any other step key (the
 *  started draft) all five are. Each state is said in words as well as drawn. */
type Step = { key: string; title: string; note: string };

export function Stepper({ step, steps = STEPS }: { step: string; steps?: readonly Step[] }) {
  const at = steps.findIndex((s) => s.key === step);
  const current = at === -1 ? steps.length : at;
  return (
    <div className="@container">
      <ol
        aria-label="Steps in this run"
        className="grid grid-cols-5 items-center gap-1 @[620px]:flex @[620px]:gap-3"
      >
        {steps.map((s, i) => {
          const done = i < current;
          return (
            <li
              key={s.key}
              aria-current={i === current ? "step" : undefined}
              className="flex min-w-0 flex-1 items-center justify-center gap-2 last:flex-none"
            >
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    "flex size-6 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium @[620px]:size-7",
                    i <= current
                      ? "border-action bg-action text-text-on-action"
                      : "border-border-hairline bg-surface-card text-text-tertiary",
                  )}
                >
                  {done ? <Check className="size-4" /> : i + 1}
                </span>
                <span className="sr-only @[620px]:not-sr-only @[620px]:flex @[620px]:flex-col @[620px]:whitespace-nowrap">
                  <span className="text-sm font-medium text-text-primary">{s.title}</span>
                  <span className="text-xs text-text-tertiary">{s.note}</span>
                  <span className="sr-only">
                    {done ? "Complete" : i === current ? "Current step" : "Not started"}
                  </span>
                </span>
              </span>
              {i < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className={cx(
                    "hidden h-px min-w-1 flex-1 @[620px]:block",
                    done ? "bg-action" : "bg-border-hairline",
                  )}
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
