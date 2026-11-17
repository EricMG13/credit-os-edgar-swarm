import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import type { Limitations as LimitationsData } from "../slice";
import { Limitations } from "./Limitations";
import { RunContext } from "./RunContext";

const data: LimitationsData = {
  count: "2",
  gapsLink: { label: "See this module’s gaps in Evidence" },
  items: [
    { text: "Segment margins were not disclosed.", trace: null },
    { text: "The covenant schedule was not supplied.", trace: null },
  ],
};

function renderLimitations() {
  return render(
    <RunContext.Provider value={{ traces: {}, open: () => undefined }}>
      <Limitations limitations={data} gapsHref="#/evidence/gaps" level="h2" />
    </RunContext.Provider>,
  );
}

/** The element that holds the heading, the gaps link and the collapse button on one row. */
function headerRow(): HTMLElement {
  const row = screen.getByRole("button", { name: "Collapse limitations" }).parentElement
    ?.parentElement;
  if (!row) throw new Error("no header row");
  return row;
}

it("lets the header row wrap, so a 320 px card never runs past its edge (WCAG 1.4.10)", () => {
  renderLimitations();
  expect(headerRow()).toHaveClass("flex-wrap");
});

it("lets the link and button group shrink inside the card", () => {
  renderLimitations();
  const group = screen.getByRole("button", { name: "Collapse limitations" }).parentElement;
  expect(group).toHaveClass("min-w-0");
});

it("lets the gaps link text wrap instead of being cut at the card edge", () => {
  renderLimitations();
  expect(screen.getByRole("link", { name: /gaps in Evidence/ })).toHaveClass("whitespace-normal");
});

it("keeps the collapse button its full size when the link beside it wraps", () => {
  renderLimitations();
  expect(screen.getByRole("button", { name: "Collapse limitations" })).toHaveClass(
    "size-8",
    "shrink-0",
  );
});

it("keeps the heading, the gaps link and the collapse button in reading and tab order", () => {
  renderLimitations();
  const order = [
    screen.getByRole("heading", { level: 2, name: /Limitations/ }),
    screen.getByRole("link", { name: /gaps in Evidence/ }),
    screen.getByRole("button", { name: "Collapse limitations" }),
  ];
  for (const [index, element] of order.entries()) {
    const next = order[index + 1];
    if (next) {
      expect(element.compareDocumentPosition(next) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
  }
});
