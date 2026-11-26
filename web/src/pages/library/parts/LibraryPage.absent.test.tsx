// S2-002 (with S3-008, S4-013, J6-013): the shipped build holds no library, and every library page
// said only "This data file holds no library pages". Each page now draws a designed empty state in
// the reader's words (this build is a design reference holding no reports) with a way forward.
// Rendered through App on the real route table, with the data the shipped build carries.
import { render, screen, within } from "@testing-library/react";
import { App } from "@/App";
import { libraryRoutes as routes } from "../routes";

const params: Record<string, string> = {
  issuer: "halden-aerostructures",
  run: "2026-09-30",
  module: "business-profile",
  item: "T-0014",
};
const address = (pattern: string) =>
  pattern.replace(/:(\w+)/g, (_, name: string) => params[name] ?? "");

/** The shipped build: a data file with no issuers and no library member. */
const SHIPPED = { schema: "credit-os-data/1", issuers: [] } as const;

const PAGES = routes.map((route) => ({ title: route.title, path: route.path }));

function visit(path: string) {
  window.location.hash = `#${address(path)}`;
  render(<App result={{ kind: "ok", data: SHIPPED }} />);
  return screen.getByRole("main");
}

afterEach(() => {
  window.location.hash = "";
});

describe("a library page on the shipped build, which holds no reports", () => {
  it("covers the home, the history, the Overview, Changes, Modules and every Evidence address", () => {
    expect(PAGES.length).toBeGreaterThanOrEqual(14);
  });

  it.each(PAGES.map((page) => [page.path, page.title, page.path === "/library/home"] as const))(
    "%s draws its h1, a designed empty state and a way forward",
    (path, title, isHome) => {
      const main = visit(path);
      expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
      expect(screen.getByRole("heading", { level: 1, name: title })).toBeVisible();
      // The state is the design system's: a featured icon, a title one level under the h1 and a sentence.
      expect(main.querySelector("svg")).not.toBeNull();
      const state = within(main).getByRole("heading", { level: 2 });
      expect(state).toBeVisible();
      expect(main).toHaveTextContent(/design reference/);
      // The offline sample cannot start a run. Other absent pages return to the library.
      if (isHome) {
        expect(main).toHaveTextContent(/contains no reports/);
        expect(main).toHaveTextContent(/Open the connected Credit OS app to start a run/);
        expect(within(main).queryByRole("link", { name: "Start a run" })).toBeNull();
        expect(within(main).queryByRole("link", { name: "Back to the library" })).toBeNull();
      } else {
        expect(main).toHaveTextContent(/holds no reports/);
        const link = within(main).getByRole("link", { name: "Back to the library" });
        expect(link).toHaveAttribute("href", "#/library/home");
        expect(within(main).getAllByRole("link")).toHaveLength(1);
      }
    },
  );

  it.each(PAGES.map((page) => [page.path] as const))(
    "%s uses no word of the file the data came from",
    (path) => {
      const main = visit(path);
      expect(main.textContent).not.toMatch(/data file|library pages/i);
    },
  );
});
