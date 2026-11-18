import { fireEvent, render, screen } from "@testing-library/react";
import { ModuleNav } from "./ModuleNav";

const sections = [
  { key: "bottom-line", label: "Bottom line", icon: "bottom-line" },
  { key: "limitations", label: "Limitations", icon: "limitations" },
] as const;
const modules = [
  { id: "business", name: "Business profile", state: "Delivered" },
  { id: "capital", name: "Capital structure", state: "Delivered with gaps" },
] as const;

it("offers compact module and section pickers for desktop windows below 1001px", () => {
  const onSection = vi.fn();
  render(
    <ModuleNav
      issuer="issuer"
      run="run"
      sections={sections}
      active="bottom-line"
      onSection={onSection}
      modules={modules}
      current="business"
    />,
  );
  expect(screen.getByRole("textbox", { name: "Search modules" })).toBeVisible();
  const modulePicker = screen.getByRole("button", { name: /Module/ });
  expect(modulePicker.closest("[data-compact-navigation]")).toHaveClass(
    "min-[481px]:flex",
    "min-[1001px]:hidden",
  );
  fireEvent.click(modulePicker);
  fireEvent.click(screen.getByRole("option", { name: /Capital structure/ }));
  expect(window.location.hash).toBe("#/library/issuer/run/modules/capital");
  fireEvent.click(screen.getByRole("button", { name: /Page section/ }));
  fireEvent.click(screen.getByRole("option", { name: "Limitations" }));
  expect(onSection).toHaveBeenCalledWith("limitations");
});

it("S3-037 shows the state word beside a module that is not Delivered", () => {
  render(
    <ModuleNav
      issuer="issuer"
      run="run"
      sections={sections}
      active="bottom-line"
      onSection={() => undefined}
      modules={modules}
      current="business"
    />,
  );
  const link = screen.getByRole("link", { name: "Capital structure, Delivered with gaps" });
  expect(link).toHaveTextContent("Delivered with gaps");
});

it("S3-028 scrolls the current mouse-selected module into its own navigator", () => {
  const bounds = vi
    .spyOn(HTMLElement.prototype, "getBoundingClientRect")
    .mockImplementation(function (this: HTMLElement) {
      return {
        top: this.tagName === "A" ? 710 : 0,
        bottom: this.tagName === "A" ? 750 : 700,
        left: 0,
        right: 200,
        width: 200,
        height: this.tagName === "A" ? 40 : 700,
        x: 0,
        y: 0,
        toJSON() {},
      };
    });
  try {
    render(
      <ModuleNav
        issuer="issuer"
        run="run"
        sections={sections}
        active="bottom-line"
        onSection={() => undefined}
        modules={modules}
        current="capital"
      />,
    );
    expect(screen.getByRole("list", { name: "Modules in this run" }).scrollTop).toBe(50);
    expect(screen.getByRole("list", { name: "On this page" }).scrollTop).toBe(0);
    expect(screen.getByRole("navigation", { name: "Modules and sections" }).scrollTop).toBe(0);
  } finally {
    bounds.mockRestore();
  }
});

it("S3-028 keeps the current entry inside the visible window when the reader header precedes the navigator", () => {
  const height = Object.getOwnPropertyDescriptor(window, "innerHeight");
  Object.defineProperty(window, "innerHeight", { configurable: true, value: 900 });
  const bounds = vi
    .spyOn(HTMLElement.prototype, "getBoundingClientRect")
    .mockImplementation(function (this: HTMLElement) {
      return {
        top: this.tagName === "A" ? 1112 : 364,
        bottom: this.tagName === "A" ? 1170 : 1216,
        left: 0,
        right: 200,
        width: 200,
        height: this.tagName === "A" ? 58 : 852,
        x: 0,
        y: 0,
        toJSON() {},
      };
    });
  try {
    render(
      <ModuleNav
        issuer="issuer"
        run="run"
        sections={sections}
        active="bottom-line"
        onSection={() => undefined}
        modules={modules}
        current="capital"
      />,
    );
    const list = screen.getByRole("list", { name: "Modules in this run" });
    expect(list.scrollTop).toBe(270);
    list.scrollTop = 0;
    fireEvent(window, new Event("resize"));
    expect(list.scrollTop).toBe(270);
  } finally {
    bounds.mockRestore();
    if (height !== undefined) Object.defineProperty(window, "innerHeight", height);
  }
});

it("S3-028 bounds a short page's navigator by its visible height without trapping manual navigation", () => {
  const height = Object.getOwnPropertyDescriptor(window, "innerHeight");
  const width = Object.getOwnPropertyDescriptor(window, "innerWidth");
  Object.defineProperty(window, "innerHeight", { configurable: true, value: 900 });
  Object.defineProperty(window, "innerWidth", { configurable: true, value: 1440 });
  let scrollTop = 0;
  const bounds = vi
    .spyOn(HTMLElement.prototype, "getBoundingClientRect")
    .mockImplementation(function (this: HTMLElement) {
      const nav = this.tagName === "NAV" ? this : this.closest("nav");
      const list = this.tagName === "UL" ? this : this.closest("ul");
      const navHeight = nav?.style.maxHeight ? Number.parseFloat(nav.style.maxHeight) : 852;
      if (list !== null) {
        Object.defineProperty(list, "scrollTop", {
          configurable: true,
          get: () => scrollTop,
          set: (value: number) => {
            scrollTop = Math.max(0, Math.min(value, 894 - navHeight));
          },
        });
      }
      const top = this.tagName === "A" ? 1220 - scrollTop : this.tagName === "UL" ? 460 : 364;
      const boxHeight =
        this.tagName === "A" ? 38 : this.tagName === "UL" ? navHeight - 96 : navHeight;
      return {
        top,
        bottom: top + boxHeight,
        left: 0,
        right: 200,
        width: 200,
        height: boxHeight,
        x: 0,
        y: 0,
        toJSON() {},
      };
    });
  try {
    render(
      <ModuleNav
        issuer="issuer"
        run="run"
        sections={sections}
        active="bottom-line"
        onSection={() => undefined}
        modules={modules}
        current="capital"
      />,
    );
    const nav = screen.getByRole("navigation", { name: "Modules and sections" });
    const list = screen.getByRole("list", { name: "Modules in this run" });
    expect(nav.style.maxHeight).toBe("512px");
    expect(list.scrollTop).toBe(382);
    list.scrollTop = 0;
    fireEvent.scroll(list);
    expect(list.scrollTop).toBe(0);
    fireEvent.scroll(window);
    expect(list.scrollTop).toBe(382);
    Object.defineProperty(window, "innerHeight", { configurable: true, value: 700 });
    fireEvent(window, new Event("resize"));
    expect(nav.style.maxHeight).toBe("312px");
    expect(list.scrollTop).toBe(582);
  } finally {
    bounds.mockRestore();
    if (height !== undefined) Object.defineProperty(window, "innerHeight", height);
    if (width !== undefined) Object.defineProperty(window, "innerWidth", width);
  }
});
