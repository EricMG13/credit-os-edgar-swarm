import { Button } from "@/components/base/buttons/button";
import { SlideoutMenu } from "@/components/application/slideout-menus/slideout-menu";
import type { Trace } from "../slice";
import { DerivationTree } from "./DerivationTree";
import { CAPTION, CitedSources, TraceBasis, TraceClaim, TraceSourcePassage } from "./TraceParts";

/**
 * The sources of one figure, in the reviewer's order: the claim, the passage it rests on with its
 * location, the basis line, how it was derived, and one link into Evidence. The one place audit
 * material shows on a run page.
 */
export function TraceDrawer({
  trace,
  evidenceHref,
  isOpen,
  onClose,
}: {
  trace: Trace;
  evidenceHref: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <SlideoutMenu
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      isDismissable
      aria-label={trace.title}
    >
      <SlideoutMenu.Header>
        <p className="pr-10 text-caption text-text-tertiary">{trace.subtitle}</p>
        <h2 className="pr-10 text-h4 text-balance wrap-anywhere text-text-primary">
          {trace.heading}
        </h2>
      </SlideoutMenu.Header>
      <SlideoutMenu.Content>
        <TraceClaim trace={trace} />
        <TraceSourcePassage trace={trace} />
        <CitedSources links={trace.sourceLinks ?? []} />
        <TraceBasis trace={trace} />
        <div className="flex flex-col gap-1.5 border-t border-border-hairline pt-4">
          <span className={CAPTION}>How it was derived</span>
          <DerivationTree node={trace.derivation} />
        </div>
      </SlideoutMenu.Content>
      <SlideoutMenu.Footer className="flex justify-end gap-3">
        <Button color="secondary" slot="close">
          Close
        </Button>
        <Button href={evidenceHref} onPress={onClose}>
          Open in Evidence
        </Button>
      </SlideoutMenu.Footer>
    </SlideoutMenu>
  );
}
