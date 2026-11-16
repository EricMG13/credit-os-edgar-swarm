import { render, screen, within } from "@testing-library/react";
import { PageHeader } from "./PageHeader";
import { Shell, type Area } from "./Shell";

// The five areas and their hashes, as the supplement for this step names them.
const AREAS: [Area, string, string][] = [
  ["library", "Library", "#/"],
  ["model", "Model", "#/model"],
  ["run", "Run", "#/run"],
  ["signal", "Signal", "#/signal"],
  ["kit", "Kit", "#/kit"],
];

describe("Shell", () => {
  it("offers a skip link before any other link, targeting the main region", () => {
    render(<Shell current="library">content</Shell>);
    const [first] = screen.getAllByRole("link");
    expect(first).toHaveAccessibleName("Skip to content");
    expect(first).toHaveAttribute("href", "#main");
    const main = screen.getByRole("main");
    expect(main).toHaveAttribute("id", "main");
    expect(main).toHaveAttribute("tabindex", "-1");
  });

  it("names every area in the rail, in order, each linking to its hash", () => {
    render(<Shell current="library">content</Shell>);
    const rail = screen.getByRole("navigation", { name: "Areas" });
    const links = within(rail).getAllByRole("link");
    expect(links.map((a) => a.getAttribute("aria-label"))).toEqual(AREAS.map(([, name]) => name));
    expect(links.map((a) => a.getAttribute("href"))).toEqual(AREAS.map(([, , href]) => href));
  });

  it("keeps each rail link at least 44px tall on a phone", () => {
    render(<Shell current="library">content</Shell>);
    const rail = screen.getByRole("navigation", { name: "Areas" });
    for (const link of within(rail).getAllByRole("link"))
      expect(link).toHaveClass("max-[480px]:min-h-11");
  });

  it("draws the current item in the selected surface and no other item", () => {
    render(<Shell current="run">content</Shell>);
    const selected = screen
      .getAllByRole("link")
      .filter((a) => a.className.includes("bg-surface-selected"));
    expect(selected.map((a) => a.getAttribute("aria-label"))).toEqual(["Run"]);
  });

  it.each(AREAS)("marks only %s as the current page", (area, name) => {
    render(<Shell current={area}>content</Shell>);
    const marked = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("aria-current") === "page");
    expect(marked.map((a) => a.getAttribute("aria-label"))).toEqual([name]);
  });

  it("draws a decorative symbol with no text", () => {
    const { container } = render(<Shell current="library">content</Shell>);
    const img = container.querySelector("img");
    expect(img).not.toBeNull();
    expect(img?.getAttribute("alt")).toBe("");
    expect(img?.getAttribute("src")).toBe("./symbol.svg");
  });

  it("puts the page in one main region", () => {
    render(<Shell current="kit">page body</Shell>);
    expect(screen.getByRole("main")).toHaveTextContent("page body");
  });
});

describe("Shell bleed", () => {
  it("keeps one main region and drops its padding", () => {
    render(
      <Shell current="signal" bleed>
        edge to edge
      </Shell>,
    );
    expect(screen.getAllByRole("main")).toHaveLength(1);
    expect(screen.getByRole("main")).toHaveTextContent("edge to edge");
    expect(screen.getByRole("main").className).not.toMatch(/(^|\s)p-\d/);
  });

  it("pads main by default", () => {
    render(<Shell current="signal">x</Shell>);
    expect(screen.getByRole("main").className).toContain("p-4");
    expect(screen.getByRole("main").className).toContain("sm:p-8");
  });

  it("keeps the desktop rail while giving narrow screens a labelled horizontal navigation", () => {
    const { container } = render(<Shell current="library">x</Shell>);
    expect(container.firstElementChild?.className).toContain("min-[768px]:flex-row");
    expect(screen.getByRole("navigation", { name: "Areas" })).toBeInTheDocument();
    expect(screen.getByText("Library", { selector: "span" })).toHaveClass("min-[768px]:hidden");
  });
});

describe("PageHeader", () => {
  it("renders one h1 with the title, the badges and the actions", () => {
    render(
      <PageHeader title="Library" badges={<span>A badge</span>} actions={<button>Act</button>} />,
    );
    expect(screen.getAllByRole("heading")).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1, name: "Library" })).toBeInTheDocument();
    expect(screen.getByText("A badge")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Act" })).toBeInTheDocument();
  });
});

describe("Shell scroll container", () => {
  it("makes the scrolling main a positioning context", () => {
    render(<Shell current="library">content</Shell>);
    expect(screen.getByRole("main")).toHaveClass("relative");
  });

  it("sizes the rail list from the space left under its margin, not from the full rail height", () => {
    render(<Shell current="library">content</Shell>);
    const rail = screen.getByRole("navigation", { name: "Areas" });
    const list = within(rail).getByRole("list");
    // A full-height list plus its top margin overflowed the document by the margin.
    expect(list).not.toHaveClass("h-full");
    expect(rail).toHaveClass("flex", "flex-col");
    expect(list).toHaveClass("flex-1", "min-h-0");
  });
});
