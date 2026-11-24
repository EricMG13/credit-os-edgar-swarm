import { act, cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { StageNav, type NavModule } from "./ModuleNav";

const modules: NavModule[] = [
  { id: "CP-0", name: "Sources", state: "Delivered" },
  { id: "CP-1", name: "Financial statements", state: "Delivered" },
  { id: "CP-2", name: "Credit profile", state: "Delivered with gaps" },
  { id: "CP-4", name: "Market view", state: "Not assessable" },
  { id: "CP-6", name: "Decision", state: "Delivered" },
  { id: "X-9", name: "Odd module", state: "Not run" },
];
const hrefFor = (id: string) => `#/run/modules/${id}`;

afterEach(cleanup);

function renderNav(list: readonly NavModule[] = modules) {
  return render(<StageNav modules={list} current="CP-1" hrefFor={hrefFor} />);
}

it("groups modules under their stage headings in stage order", () => {
  renderNav();
  const headings = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
  expect(headings).toEqual([
    "Sources",
    "Financials",
    "Credit",
    "Structure and market",
    "Validation and decision",
    "Other",
  ]);
  const financials = screen.getByRole("heading", { level: 3, name: "Financials" });
  const group = financials.parentElement?.parentElement as HTMLElement;
  expect(within(group).getByRole("link", { name: /Financial statements/ })).toBeVisible();
  expect(within(group).getAllByRole("link")).toHaveLength(1);
  const other = screen.getByRole("heading", { level: 3, name: "Other" }).parentElement
    ?.parentElement as HTMLElement;
  expect(within(other).getByRole("link", { name: "Odd module, Not run" })).toBeVisible();
});

it("numbers each stage by its fixed place and leaves Other unnumbered", () => {
  render(
    <StageNav
      modules={[
        { id: "CP-1", name: "Financial statements", state: "Delivered" },
        { id: "CP-4", name: "Legal", state: "Not assessable" },
        { id: "CP-ZZ", name: "Odd module", state: "Not run" },
      ]}
      current="CP-1"
      hrefFor={(id) => `#modules/${id}`}
    />,
  );
  const label = (name: string) =>
    screen.getByRole("heading", { level: 3, name }).previousElementSibling?.textContent;
  expect(label("Financials")).toBe("02");
  expect(label("Structure and market")).toBe("04");
  expect(label("Other")).toBe("");
});

it("stays open on a wide screen and closed by default on a narrow one", () => {
  const listeners: (() => void)[] = [];
  let wide = false;
  window.matchMedia = ((query: string) => ({
    get matches() {
      return wide;
    },
    media: query,
    addEventListener: (_: string, fn: () => void) => listeners.push(fn),
    removeEventListener: () => undefined,
  })) as unknown as typeof window.matchMedia;
  try {
    const { container } = renderNav();
    const details = container.querySelector("details");
    expect(details).not.toHaveAttribute("open");
    wide = true;
    act(() => {
      for (const fn of listeners) fn();
    });
    expect(details).toHaveAttribute("open");
  } finally {
    // @ts-expect-error jsdom has no matchMedia; remove the stub
    delete window.matchMedia;
  }
});

it("marks only the current link and names each link by name and state", () => {
  renderNav();
  const current = screen.getByRole("link", { name: "Financial statements, Delivered" });
  expect(current).toHaveAttribute("aria-current", "page");
  for (const link of screen.getAllByRole("link")) {
    if (link !== current) expect(link).not.toHaveAttribute("aria-current");
  }
  expect(screen.getByRole("link", { name: "Credit profile, Delivered with gaps" })).toBeVisible();
});

it("takes each address from hrefFor and shows the module code", () => {
  renderNav();
  const link = screen.getByRole("link", { name: "Decision, Delivered" });
  expect(link).toHaveAttribute("href", "#/run/modules/CP-6");
  expect(link).toHaveTextContent("CP-6");
});

it("draws the state word for a module that is not Delivered", () => {
  renderNav();
  expect(screen.getByRole("link", { name: "Market view, Not assessable" })).toHaveTextContent(
    "Not assessable",
  );
  expect(screen.getByRole("link", { name: "Sources, Delivered" })).not.toHaveTextContent(
    "Delivered",
  );
});

it("counts delivered and not assessable modules", () => {
  renderNav();
  expect(screen.getByRole("heading", { level: 2, name: "Modules" })).toBeVisible();
  expect(screen.getByText("4 of 6 delivered")).toBeVisible();
  expect(screen.getByText("1 not assessable")).toBeVisible();
});

it("omits the not-assessable count when there is none", () => {
  renderNav(modules.filter((m) => m.state !== "Not assessable"));
  expect(screen.queryByText(/not assessable$/)).toBeNull();
});

it("draws nothing for an empty list", () => {
  const { container } = renderNav([]);
  expect(container).toBeEmptyDOMElement();
});
