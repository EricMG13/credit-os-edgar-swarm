import { createRef } from "react";
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { ReadinessItem } from "../api";
import type { DocumentRow, IntakeView } from "./intake";
import type { LimitGroup } from "./limits";
import { DocumentFields } from "./DocumentsStep";

afterEach(cleanup);

const AGREEMENT = {
  source: "credit-agreement.txt",
  kind: "credit_agreement",
  period_end: "2025-12-31",
  executed: true,
  signal: "found 'Credit Agreement' on page 1",
};
const OTHER = {
  source: "notes.md",
  kind: "unrecognised",
  period_end: undefined,
  executed: undefined,
  signal: "",
};

function row(name: string, extra: Partial<DocumentRow> = {}): DocumentRow {
  return { name, stored: name, pendingCopy: false, copied: false, ...extra };
}

function makeView(over: Partial<IntakeView> = {}): IntakeView {
  const docs = over.shownDocs ?? [];
  return {
    step: "documents",
    canRead: true,
    priorNote: "",
    issuerNotice: "",
    changeNotice: "",
    repeatedContent: new Map(),
    identity: { issuer_name: "", issuer_id: "" },
    issuerId: "",
    submittedBy: "",
    run: { as_of: "2025-12-31" },
    documentRows: [],
    inspected: new Map(
      docs.map((d) => [
        d.source,
        [
          d.kind.replaceAll("_", " "),
          d.period_end && `period ends ${d.period_end}`,
          d.executed === true ? "executed" : d.executed === false ? "draft" : "",
          d.signal,
        ]
          .filter(Boolean)
          .join(" · "),
      ]),
    ),
    ignored: new Map(),
    shownDocs: [],
    read: docs.length > 0,
    inspections: 1,
    addFiles: vi.fn(),
    discardDocument: vi.fn(),
    ...over,
  } as unknown as IntakeView;
}

function renderStep(view: IntakeView) {
  return render(<DocumentFields view={view} folderInput={createRef<HTMLInputElement>()} />);
}

function item(over: Partial<ReadinessItem>): ReadinessItem {
  return {
    id: "x",
    scope: "run",
    outcome: "gap",
    reason: "",
    fix: "",
    ...over,
  };
}

function group(over: Partial<LimitGroup>): LimitGroup {
  return {
    key: "x",
    outcome: "gap",
    kind: "limit",
    causes: [],
    consequences: [],
    ids: [],
    ...over,
  };
}

describe("Documents step: the upload list", () => {
  it("shows the service's kind as a chip and the facts without repeating it", () => {
    renderStep(
      makeView({
        documentRows: [row("credit-agreement.txt")],
        shownDocs: [AGREEMENT],
      }),
    );
    const li = screen.getByRole("listitem");
    expect(within(li).getByText("credit agreement")).toBeVisible();
    expect(li).toHaveTextContent("Inspected");
    expect(li).toHaveTextContent("period ends 2025-12-31 · executed · found 'Credit Agreement'");
    expect(li.textContent).not.toMatch(/credit agreement · period/);
  });

  it("draws an unrecognised kind as the chip and no empty facts line", () => {
    renderStep(makeView({ documentRows: [row("notes.md")], shownDocs: [OTHER] }));
    const li = screen.getByRole("listitem");
    expect(within(li).getByText("unrecognised")).toBeVisible();
    expect(li.querySelectorAll("p")).toHaveLength(1);
  });

  it("draws no chip before the service has read the file", () => {
    renderStep(makeView({ documentRows: [row("new.pdf", { stored: undefined })] }));
    const li = screen.getByRole("listitem");
    expect(li).toHaveTextContent("Selected");
    expect(li).not.toHaveTextContent("unrecognised");
    expect(li.querySelectorAll("span.rounded-ds-xs")).toHaveLength(0);
    expect(screen.getByRole("button", { name: "Remove new.pdf" })).toBeVisible();
  });

  it("gives an ignored file its reason and no chip", () => {
    renderStep(
      makeView({
        documentRows: [row("program.exe")],
        ignored: new Map([["program.exe", "Not a supported type."]]),
      }),
    );
    const li = screen.getByRole("listitem");
    expect(li).toHaveTextContent("Ignored");
    expect(li).toHaveTextContent("Not a supported type.");
  });

  it("says so when there are no documents, and names what each file unlocks as a gap", () => {
    renderStep(makeView());
    expect(screen.getByText("No documents yet.")).toBeVisible();
    expect(
      screen.getByText(/Which modules each file serves is not reported before review/),
    ).toBeVisible();
  });
});

describe("Documents step: missing for the modules", () => {
  it("waits for a review when none has been made", () => {
    renderStep(makeView({ missing: undefined }));
    expect(screen.getByRole("heading", { name: "Missing for the modules" })).toBeVisible();
    expect(screen.getByText("Checked when you review the run.")).toBeVisible();
  });

  it("says nothing was missing after a clean review", () => {
    renderStep(makeView({ missing: [] }));
    expect(screen.getByText("Nothing was missing at your last review.")).toBeVisible();
  });

  it("draws each group with module names, reason, fix and consequences", () => {
    const cause = item({
      id: "CP-4:no-agreement",
      scope: "CP-4",
      outcome: "will_refuse",
      reason: "No executed agreement is among the files.",
      fix: "Add the executed agreement.",
    });
    const other = item({
      id: "CP-2A:no-agreement",
      scope: "CP-2A",
      outcome: "will_refuse",
      reason: "CP-4 will refuse.",
      fix: "Add the executed agreement.",
    });
    const downstream = item({ id: "CP-6:blocked", scope: "CP-6", outcome: "limited" });
    renderStep(
      makeView({
        missing: [
          group({
            outcome: "will_refuse",
            causes: [cause, other],
            consequences: [downstream],
          }),
        ],
      }),
    );
    expect(
      screen.getByText("At your last review. Review the run again after adding files."),
    ).toBeVisible();
    const list = screen.getByRole("list", { name: "Missing for the modules" });
    const li = within(list).getByRole("listitem");
    expect(li).toHaveTextContent("Will refuse");
    expect(li).toHaveTextContent("No executed agreement is among the files.");
    expect(within(li).getAllByText("Add the executed agreement.")).toHaveLength(1);
    expect(li).toHaveTextContent("Also affects:");
    expect(li.textContent).not.toMatch(/CP-\d/);
    expect(li.querySelector("input")).toBeNull();
  });

  it("draws the whole run when the cause is run-wide", () => {
    renderStep(
      makeView({
        missing: [
          group({ causes: [item({ scope: "run", reason: "No filing.", fix: "Add the filing." })] }),
        ],
      }),
    );
    expect(screen.getByRole("listitem")).toHaveTextContent("Whole run");
  });
});
