import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { Answers, Summary } from "../api";
import type { Review } from "./intake";
import { ReviewConfirmation } from "./ReviewStep";

afterEach(cleanup);

const answers: Answers = {
  context: {
    run: { as_of: "2025-03-31", pathway: "credit_snapshot", case_kind: "private" },
    identity: { issuer_name: "Northbridge", issuer_id: "northbridge" },
  },
  modules: [],
  max_turns: 32,
  level: "basic",
  model: "gpt",
  effort: "balanced",
  submitted_by: "Ana L",
};

const summary: Summary = {
  error: "",
  digest: "approved",
  cap: "25",
  documents: [{ source: "filing.txt", kind: "annual_report" }],
  ignored: [],
  modules: ["CP-0", "CP-DR", "CP-4"],
  items: [
    {
      id: "CP-4:agreement",
      scope: "CP-4",
      outcome: "will_refuse",
      reason: "No executed agreement is among the files.",
    },
  ],
  omitted: [],
  changes: "first run",
  web_search: true,
  model: "gpt",
  effort: "balanced",
};

const review: Review = { id: "sub-1", answers, summary, cap: "25", attachmentNames: {} };

function show({
  synthetic = false,
  accepted = new Set<string>(),
  approved = false,
}: { synthetic?: boolean; accepted?: Set<string>; approved?: boolean } = {}) {
  const onApprove = vi.fn();
  render(
    <ReviewConfirmation
      modelVerified
      idNote=""
      review={review}
      accepted={accepted}
      approved={approved}
      checksComplete={accepted.size > 0}
      error=""
      submitUncertain={false}
      capText="USD 25.00"
      capAvailable
      synthetic={synthetic}
      ready="2 of 4 ready · USD 0.00 of USD 25.00"
      onAccept={vi.fn()}
      onApprove={onApprove}
      onEdit={vi.fn()}
      onModules={vi.fn()}
      onSubmit={vi.fn()}
    />,
  );
  return onApprove;
}

const before = (first: Element, second: Element) =>
  Boolean(first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING);

describe("Review and start", () => {
  it("draws three blocks in order: what will run, what it will not do, what it will cost", () => {
    show();
    const [run, limits, cost] = [
      screen.getByRole("region", { name: "What will run" }),
      screen.getByRole("region", { name: "Limits to decide" }),
      screen.getByRole("region", { name: "What it will cost" }),
    ];
    expect(before(run, limits)).toBe(true);
    expect(before(limits, cost)).toBe(true);
    expect(run).toHaveTextContent("What the run will do");
    expect(limits).toHaveTextContent("What it will not do");
    expect(within(limits).getByRole("checkbox", { name: "I accept this limit" })).toBeEnabled();
  });

  it("states the cap in mono, what leaves the building, then the consent and Submit, last", () => {
    show();
    const cost = screen.getByRole("region", { name: "What it will cost" });
    const figure = within(cost).getByText("USD 25.00", { selector: "span" });
    expect(figure).toHaveClass("font-mono", "tabular-nums");
    expect(cost).toHaveTextContent("Spending cap · Full credit assessment");
    const leaves = within(cost).getByRole("heading", { name: "What leaves the building" });
    const search = within(cost).getByText(/The research module will search the web\./);
    const consent = within(cost).getByRole("checkbox", {
      name: "Approve: I have read this summary and want this run started",
    });
    const submit = within(cost).getByRole("button", { name: "Submit, spend up to USD 25.00" });
    expect(before(figure, leaves)).toBe(true);
    expect(before(search, consent)).toBe(true);
    expect(before(consent, submit)).toBe(true);
    const buttons = screen.getAllByRole("button");
    expect(buttons.at(-1)).toBe(submit);
    expect(submit).toHaveAttribute("aria-describedby", "run-submit-cost");
    expect(document.getElementById("run-submit-cost")).toHaveTextContent(
      "Once confirmed, this run can spend up to USD 25.00.",
    );
  });

  it("keeps the gating: consent waits for every decision, Submit for the consent", () => {
    show();
    const consent = screen.getByRole("checkbox", { name: /^Approve:/ });
    expect(consent).toBeDisabled();
    expect(screen.getByText("1 decision left before you can approve.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit, spend up to USD 25.00" })).toBeDisabled();
    cleanup();
    const onApprove = show({ accepted: new Set(["CP-4:agreement"]) });
    fireEvent.click(screen.getByRole("checkbox", { name: /^Approve:/ }));
    expect(onApprove).toHaveBeenCalledWith(true);
    expect(screen.getByRole("button", { name: "Submit, spend up to USD 25.00" })).toBeDisabled();
    cleanup();
    show({ accepted: new Set(["CP-4:agreement"]), approved: true });
    expect(screen.getByRole("button", { name: "Submit, spend up to USD 25.00" })).toBeEnabled();
  });

  it("says a synthetic test costs nothing and keeps its own Submit label", () => {
    show({ synthetic: true, accepted: new Set(["CP-4:agreement"]), approved: true });
    const cost = screen.getByRole("region", { name: "What it will cost" });
    expect(within(cost).getByText("USD 0.00", { selector: "span" })).toHaveClass("font-mono");
    expect(cost).toHaveTextContent("USD 0.00No-cost test");
    expect(within(cost).getByRole("button", { name: "Submit run" })).toBeEnabled();
  });
});
