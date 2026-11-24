import type { ReactNode } from "react";

import { Tile } from "./overview/Tile";

/**
 * Table parts that stack into labelled blocks on a phone. Explicit roles keep the table's
 * semantics when the parts are drawn as blocks; each cell carries `data-label` for its caption.
 */
export const STACK = {
  table: "w-full border-collapse text-left text-small max-md:block",
  head: "bg-surface-subtle text-text-secondary max-md:sr-only",
  body: "max-md:block",
  row: "border-t border-border-hairline align-top max-md:grid max-md:gap-1.5 max-md:p-4",
  cell: "px-4 py-3 max-md:p-0 max-md:before:mb-0.5 max-md:before:block max-md:before:text-caption max-md:before:text-text-tertiary max-md:before:content-[attr(data-label)]",
} as const;

/** A closed block inside a tile, for records a reviewer opens on purpose. */
export function Disclosure({
  label,
  title,
  hint,
  open = false,
  children,
}: {
  label: string;
  title: string;
  hint: string;
  open?: boolean;
  children: ReactNode;
}) {
  return (
    <Tile span={12} label={label}>
      <details open={open} className="group/disclosure min-w-0">
        <summary className="flex min-h-8 cursor-pointer flex-wrap items-baseline gap-x-3 text-h4 font-medium text-text-primary max-[480px]:min-h-11">
          {title}
          <span className="text-small font-normal text-text-secondary">{hint}</span>
        </summary>
        <div className="mt-4 grid min-w-0 grid-cols-1 gap-4">{children}</div>
      </details>
    </Tile>
  );
}
