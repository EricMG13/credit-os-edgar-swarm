import { Button } from "@/components/base/buttons/button";
import { PageHeader } from "../../shell/PageHeader";
import { GapNote } from "./report/overview/Tile";

/** A read-only preview holds no run records: the screen's own header and a gap that says why. */
export function RunReadOnly({ title }: { title: "Run activity" | "Run progress" }) {
  return (
    <>
      <PageHeader title={title} actions={<Button href="/">Back to Library</Button>} />
      <div className="mt-6">
        <GapNote>
          Runs are not available in a read-only preview. The library and reports are.
        </GapNote>
      </div>
    </>
  );
}
