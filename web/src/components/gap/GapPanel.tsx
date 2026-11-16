import { StatusShape } from "@/components/status/shapes";

const GAP_WORDS = "Not established for this run";

export function GapPanel({ reason, role }: { reason: string; role?: "note" }) {
  return (
    <div className="gap-hatch flex flex-col gap-2 rounded-ds-md border border-dashed border-border-gap p-4 text-gap-text">
      <p className="flex items-center gap-2 text-body font-semibold">
        <StatusShape shape="dashed ring" />
        {GAP_WORDS}
      </p>
      <p role={role} className="text-small first-letter:uppercase">
        {reason}
      </p>
    </div>
  );
}
