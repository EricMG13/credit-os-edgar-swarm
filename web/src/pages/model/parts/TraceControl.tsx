import { ArrowUpRight } from "@untitledui/icons";
import { useState } from "react";
import { Focusable } from "react-aria-components";
import { Tooltip } from "@/components/base/tooltip/tooltip";
import { TraceDrawer } from "@/pages/library/parts/TraceDrawer";
import type { Trace } from "@/pages/library/slice";
import { cx } from "@/utils/cx";
import { useShowSources } from "./ShowSources";

const LEAD = "Show the sources for ";

/**
 * What the drawer can say about an item of the Model: the Model delivers an address into the run's
 * Evidence for it and no trace of its own, so the drawer names the item and sends on to that page.
 */
function traceFor(label: string): Trace {
  const name = label.startsWith(LEAD) ? label.slice(LEAD.length) : label;
  return {
    title: `Sources for ${name}`,
    heading: name,
    subtitle: "Financial model",
    statement: "The sources for this item are listed on the run's Evidence page.",
    derivation: { label: "Item", value: name, note: null, children: [] },
    excerpt: null,
    qualification: null,
    evidenceItem: "",
  };
}

/**
 * An icon-only link to the sources of one item. A plain press opens the library's trace drawer in
 * place, so the page, its case choice, its scroll position and its focus stay as they are; a press
 * with a modifier key is left to the browser, which opens the address. It sits inside a
 * `group/trace` row, tile or passage, and shows when that is hovered or focused, under "Show
 * sources" and on a touch device. It is hidden by opacity, never removed, so Tab always reaches it.
 */
export function TraceControl({
  href,
  label,
  onInverse = false,
}: {
  href: string;
  label: string;
  /** On a Navy surface: the ring takes the inverse focus colour. */
  onInverse?: boolean;
}) {
  const shown = useShowSources();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Show sources">
        <Focusable>
          <a
            href={href}
            aria-label={label}
            aria-haspopup="dialog"
            onClick={(event) => {
              if (event.button !== 0 || event.altKey || event.ctrlKey) return;
              if (event.metaKey || event.shiftKey) return;
              event.preventDefault();
              setOpen(true);
            }}
            className={cx(
              "inline-flex size-7 flex-none cursor-pointer items-center justify-center rounded-full border border-border-control bg-surface-card text-text-secondary focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-100 group-hover/trace:opacity-100 group-focus-within/trace:opacity-100 [@media(hover:none)]:opacity-100",
              onInverse ? "outline-focus-inverse" : "outline-focus",
              shown ? "opacity-100" : "opacity-0",
            )}
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Focusable>
      </Tooltip>
      <TraceDrawer
        trace={traceFor(label)}
        evidenceHref={href}
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
