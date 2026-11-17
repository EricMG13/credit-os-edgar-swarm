import { useEffect, useRef } from "react";
import { Alert } from "@/components/alert/Alert";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { TextLink } from "../TextLink";
import type { StartDraft } from "../slice";

type Step = Extract<StartDraft, { step: "started" }>;

/** The Run started panel: the info alert holds the saved-example line, the cap bar and the two
 *  links (the kit Alert's action slot takes any node), and a line on closing the page in a live
 *  run. Nothing animates. Confirming Submit unmounts the Submit button, which had focus, so the
 *  panel takes it on mount: the alert's title (the kit Alert's one `strong`), made focusable by
 *  script only, so a screen reader says what happened and Tab goes on to the first link. */
export function Started({ issuer, draft }: { issuer: string; draft: Step }) {
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const title = panel.current?.querySelector("strong");
    if (title == null) return;
    title.tabIndex = -1;
    title.focus();
  }, []);
  return (
    <div ref={panel} className="flex flex-col gap-4">
      <Alert
        tone="info"
        title={draft.title}
        action={
          <div className="flex flex-col gap-3">
            <ProgressBar value={draft.cap.value} max={draft.cap.max} label={draft.cap.label} />
            <div className="flex flex-wrap gap-3">
              <TextLink href={`#/run/activity/${draft.activity}`}>Watch run activity</TextLink>
              <TextLink href="#/" grey>
                Back to the library
              </TextLink>
            </div>
          </div>
        }
      >
        {draft.text}
        <span className="mt-1 block">
          This page shows a saved example, so no run was started and nothing was spent.
        </span>
      </Alert>
      <p className="text-sm text-text-tertiary">
        In a live run you can close this page: the run carries on, and its library appears under{" "}
        {issuer} when it finishes.
      </p>
    </div>
  );
}
