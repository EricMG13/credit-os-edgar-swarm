import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { webcrypto } from "node:crypto";
import { ConnectedApp } from "../ConnectedApp";
import { chooseControl } from "./testControls";

Element.prototype.scrollIntoView = vi.fn();
beforeEach(() => {
  vi.stubGlobal("crypto", webcrypto);
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

const caps = {
  credit_snapshot: "25",
  lite_credit_assessment: "15",
  deep_credit_assessment: "40",
  earnings_update: "20",
  relative_value: "20",
  covenant_refinancing: "20",
  distressed_restructuring: "20",
  portfolio_decision: "20",
  short_snapshot: "20",
};
const file = new File(["sample input"], "Credit & facts.html", { type: "text/html" });

function stubFetch() {
  const entries: Record<string, unknown> = {
    "/connected/context": {
      run: {
        as_of: "",
        pathway: "credit_snapshot",
        case_kind: "synthetic",
        reporting_currency: "USD",
      },
      identity: { issuer_name: "", issuer_id: "" },
      submission_caps_usd: caps,
    },
    "/api/submissions": { id: "sub-1" },
    "/api/submissions/sub-1/files?name=Credit%20%26%20facts.html": { name: file.name },
    "/api/submissions/sub-1/reading": {
      documents: [{ source: file.name, kind: "annual_report" }],
      ignored: [],
      error: "",
    },
  };
  vi.stubGlobal(
    "fetch",
    vi.fn((path: string) => {
      if (!Object.hasOwn(entries, path)) throw new Error(`Unexpected request ${path}`);
      return Promise.resolve(Response.json(entries[path]));
    }),
  );
}

async function toContext(pathway: string, level?: string) {
  stubFetch();
  render(<ConnectedApp path="/start" mode="synthetic" />);
  fireEvent.change(await screen.findByLabelText("Issuer name", {}, { timeout: 5000 }), {
    target: { value: "Synthetic Générale" },
  });
  fireEvent.change(screen.getByLabelText("As-of date"), { target: { value: "2026-10-31" } });
  fireEvent.change(screen.getByLabelText("Documents"), { target: { files: [file] } });
  fireEvent.change(screen.getByLabelText("Your name"), { target: { value: "Ana L" } });
  fireEvent.click(screen.getByRole("button", { name: "Continue to purpose" }));
  await screen.findByRole("heading", { name: "Purpose" });
  fireEvent.click(screen.getByRole("radio", { name: pathway }));
  if (level) chooseControl("Run form level", level);
  fireEvent.click(screen.getByRole("button", { name: "Continue to context" }));
  await screen.findByRole("heading", { name: "More context" });
}

const group = (name: string) => screen.getByRole("group", { name });

describe("the More context step groups", () => {
  it("draws the five groups in order, each titled by an h3 legend", async () => {
    await toContext("Deep credit assessment");
    const titles = [
      "For the research",
      "Dates and periods",
      "Legal documents",
      "Files with a role",
      "Ratings, quotes and facilities",
    ];
    const nodes = titles.map((title) => group(title));
    nodes.forEach((node, i) => {
      expect(within(node).getByRole("heading", { level: 3, name: titles[i] })).toBeInTheDocument();
      const next = nodes[i + 1];
      if (next)
        expect(node.compareDocumentPosition(next) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    });
    expect(screen.getByRole("heading", { level: 2, name: "More context" })).toBeInTheDocument();
  });

  it("puts each control in its group", async () => {
    await toContext("Deep credit assessment");
    const research = group("For the research");
    expect(within(research).getByLabelText("Anything the analysis should know")).toHaveAttribute(
      "aria-describedby",
      "run-analyst-questions",
    );
    expect(within(research).getByRole("region", { name: "Research questions" })).toBeVisible();
    const dates = group("Dates and periods");
    for (const name of [
      "Date of your newest file",
      "Research cutoff",
      /^Current period/,
      /^Prior period/,
    ])
      expect(within(dates).getByLabelText(name)).toBeInTheDocument();
    expect(within(group("Legal documents")).getByLabelText("Legal documents")).toHaveAttribute(
      "data-field",
      "legal_documents",
    );
    const deal = group("Ratings, quotes and facilities");
    for (const name of ["Ratings", "Observed quotes", "Facilities and deal terms"])
      expect(within(deal).getByRole("region", { name })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 4, name: "Ratings" })).toBeInTheDocument();
  });

  it("draws the agreement only when legal documents are named", async () => {
    await toContext("Deep credit assessment");
    const legal = group("Legal documents");
    expect(within(legal).queryByLabelText("The agreement")).toBeNull();
    fireEvent.change(within(legal).getByLabelText("Legal documents"), {
      target: { value: "executed" },
    });
    expect(within(legal).getByLabelText("The agreement")).toHaveAttribute(
      "data-field",
      "agreement",
    );
  });

  it("draws the workbook for Deep and no bridge or prior record on a standard form", async () => {
    await toContext("Deep credit assessment");
    const files = group("Files with a role");
    expect(within(files).getByLabelText("Portfolio workbook")).toBeInTheDocument();
    expect(within(files).queryByLabelText("Management EBITDA bridge")).toBeNull();
    expect(within(files).queryByLabelText("Prior decision record")).toBeNull();
    expect(screen.queryByText("Valuation and peers")).toBeNull();
    expect(screen.queryByLabelText("Turns per module")).toBeNull();
  });

  it("requires the periods and draws the bridge for an Earnings Update", async () => {
    await toContext("Earnings Update");
    expect(within(group("Dates and periods")).getByLabelText(/^Current period/)).toHaveAttribute(
      "aria-required",
      "true",
    );
    const files = group("Files with a role");
    expect(within(files).getByLabelText("Management EBITDA bridge")).toBeInTheDocument();
    expect(within(files).queryByLabelText("Portfolio workbook")).toBeNull();
  });

  it("omits the files group when no file control applies", async () => {
    await toContext("Relative Value");
    expect(screen.queryByRole("group", { name: "Files with a role" })).toBeNull();
  });

  it("draws every file control and the Advanced sections on an Advanced form", async () => {
    await toContext("Deep credit assessment", "advanced");
    const files = group("Files with a role");
    for (const name of ["Management EBITDA bridge", "Portfolio workbook", "Prior decision record"])
      expect(within(files).getByLabelText(name)).toBeInTheDocument();
    expect(screen.getByText("Scenario assumptions")).toBeInTheDocument();
    expect(screen.getByLabelText("Turns per module")).toBeInTheDocument();
    expect(screen.getByText("Requested modules")).toBeInTheDocument();
    expect(screen.getByText("Valuation and peers")).toBeInTheDocument();
  });
});
