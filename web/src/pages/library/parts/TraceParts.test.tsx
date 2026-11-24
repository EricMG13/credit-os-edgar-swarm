import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { Trace } from "../slice";
import { basisOf, TraceBasis, TraceClaim, TraceSourcePassage } from "./TraceParts";

afterEach(cleanup);

const trace = (over: Partial<Trace> = {}): Trace => ({
  title: "Sources for Findings",
  heading: "Findings",
  subtitle: "Liquidity · Handoff line 5",
  statement: "Cover is thin.",
  derivation: {
    label: "Evidence retained with this item",
    value: "",
    note: null,
    children: [{ label: "Basis", value: "FY2024 reported, USD m", note: null, children: [] }],
  },
  excerpt: { quote: "“Cash was USD 162m.”", source: "annual-report.pdf · p. 84" },
  qualification: "Company-adjusted basis.",
  evidenceItem: "out-5",
  ...over,
});

it("draws the claim with its qualification as a captioned line", () => {
  render(<TraceClaim trace={trace()} />);
  expect(screen.getByText("The claim")).toBeVisible();
  expect(screen.getByText("Cover is thin.")).toBeVisible();
  expect(screen.getByText("Qualification")).toBeVisible();
  expect(screen.getByText("Company-adjusted basis.")).toBeVisible();
});

it("draws no qualification caption when the trace has none", () => {
  render(<TraceClaim trace={trace({ qualification: null })} />);
  expect(screen.queryByText("Qualification")).toBeNull();
});

it("draws the source passage with its location", () => {
  render(<TraceSourcePassage trace={trace()} />);
  expect(screen.getByText("Source excerpt")).toBeVisible();
  expect(screen.getByText("“Cash was USD 162m.”")).toBeVisible();
  expect(screen.getByText("annual-report.pdf · p. 84")).toBeVisible();
});

it("draws the gap state, not a blank, when no passage was recorded", () => {
  render(<TraceSourcePassage trace={trace({ excerpt: null })} />);
  expect(screen.queryByText("Source excerpt")).toBeNull();
  const gap = screen.getByText("No source passage was recorded for this item.");
  expect(gap).toBeVisible();
  expect(gap.closest(".gap-hatch")).not.toBeNull();
});

it("reads the basis line from the derivation's Basis node", () => {
  expect(basisOf(trace())).toEqual({ kind: "recorded", text: "FY2024 reported, USD m" });
  render(<TraceBasis trace={trace()} />);
  expect(screen.getByText("Basis")).toBeVisible();
  expect(screen.getByText("FY2024 reported, USD m")).toBeVisible();
});

it("draws a missing basis in the gap treatment with the recorded words", () => {
  const missing = trace({
    derivation: {
      label: "Evidence retained with this item",
      value: "",
      note: null,
      children: [
        { label: "Basis was not recorded for this item", value: null, note: null, children: [] },
      ],
    },
  });
  expect(basisOf(missing)).toEqual({ kind: "missing" });
  render(<TraceBasis trace={missing} />);
  const words = screen.getByText("Basis was not recorded for this item");
  expect(words.closest(".gap-hatch")).not.toBeNull();
});

it("draws nothing for a trace whose derivation has no basis node", () => {
  const none = trace({
    derivation: { label: "Evidence", value: "", note: null, children: [] },
  });
  expect(basisOf(none)).toBeNull();
  const { container } = render(<TraceBasis trace={none} />);
  expect(container).toBeEmptyDOMElement();
});

it("keeps a long unbroken basis inside its box without altering it", () => {
  const long = "0.060079470198675496688741721854304635762";
  const view = render(
    <TraceBasis
      trace={trace({
        derivation: {
          label: "Evidence",
          value: "",
          note: null,
          children: [{ label: "Basis", value: long, note: null, children: [] }],
        },
      })}
    />,
  );
  const text = within(view.container).getByText(long);
  expect(text.className).toContain("wrap-anywhere");
});
