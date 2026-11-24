import { FileSearch02 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

/**
 * A source link in the trace control's footprint and look (28 px chip, 16 px icon), for a source
 * the trace drawer cannot open, such as a calendar event outside the handoff text. It goes to
 * the item in Evidence. On a phone the target grows to 44 px.
 */
export function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      title="Show sources"
      className={cx(
        "relative flex size-7 flex-none items-center justify-center rounded-ds-sm border border-transparent text-text-tertiary outline-focus-ring transition-colors duration-150 motion-reduce:transition-none",
        "hover:border-border-control hover:bg-action-subtle hover:text-action focus-visible:border-border-control focus-visible:outline-2",
        "max-[480px]:after:absolute max-[480px]:after:-inset-[9px] in-data-[sources=on]:border-border-control",
      )}
    >
      <FileSearch02 aria-hidden="true" className="size-4" />
    </a>
  );
}
