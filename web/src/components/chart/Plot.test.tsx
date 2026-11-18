import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Plot } from "./Plot";
import { TrendChart } from "./TrendChart";

type Watch = { seen: IntersectionObserverCallback; init?: IntersectionObserverInit; live: boolean };

/** A browser that reports what is near the view only when the test says so. */
function watchedBrowser() {
  const watches: Watch[] = [];
  class Near {
    private readonly watch: Watch;
    constructor(seen: IntersectionObserverCallback, init?: IntersectionObserverInit) {
      this.watch = { seen, init, live: false };
      watches.push(this.watch);
    }
    observe() {
      this.watch.live = true;
    }
    disconnect() {
      this.watch.live = false;
    }
  }
  const print = new EventTarget();
  vi.stubGlobal("IntersectionObserver", Near);
  vi.stubGlobal("matchMedia", () => print);
  const report = (isIntersecting: boolean) => {
    act(() => {
      for (const { seen, live } of watches)
        if (live)
          seen([{ isIntersecting } as IntersectionObserverEntry], {} as IntersectionObserver);
    });
  };
  return { watches, print, report };
}

const plots = () => document.querySelectorAll(".recharts-responsive-container").length;

function trend(title: string) {
  return (
    <TrendChart
      title={title}
      periods={["FY21", "FY22"]}
      series={[
        { name: "Revenue", values: [1, 2] },
        { name: "EBITDA", values: [3, 4] },
      ]}
      table={[
        { name: "Revenue", cells: ["1", "2"] },
        { name: "EBITDA", cells: ["3", "4"] },
      ]}
    />
  );
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("Plot", () => {
  it("draws every chart at once where the browser cannot report what is near the view", () => {
    expect(typeof IntersectionObserver).toBe("undefined");
    render(
      <>
        {trend("History")}
        {trend("Forecast")}
      </>,
    );
    expect(plots()).toBe(2);
  });

  it("holds the plot's exact height, and keeps the chart's name, legend and table toggle, until the plot is near the view", () => {
    const { watches, report } = watchedBrowser();
    const { container } = render(
      <Plot height={240}>
        <svg />
      </Plot>,
    );
    expect(container.querySelector("svg")).toBeNull();
    expect((container.firstElementChild as HTMLElement).style.height).toBe("240px");
    expect(watches[0]?.init).toMatchObject({ rootMargin: "600px", scrollMargin: "600px" });
    report(false);
    expect(plots()).toBe(0);
    cleanup();

    render(trend("History"));
    expect(plots()).toBe(0);
    expect(screen.getByRole("figure", { name: "History" })).toBeVisible();
    expect(screen.getByRole("list", { name: "Legend" })).toHaveTextContent("Revenue");
    expect(screen.getByRole("radiogroup", { name: "History: Chart or Table" })).toBeVisible();
    report(true);
    expect(plots()).toBe(1);
  });

  it("keeps a drawn chart drawn after it leaves the view, and stops watching it", () => {
    const { watches, report } = watchedBrowser();
    render(trend("History"));
    report(true);
    expect(plots()).toBe(1);
    expect(watches.every(({ live }) => !live)).toBe(true);
    for (const { seen } of watches)
      act(() => {
        seen([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver);
      });
    expect(plots()).toBe(1);
  });

  it("draws every chart before the page is printed", () => {
    const { print } = watchedBrowser();
    render(
      <>
        {trend("History")}
        {trend("Forecast")}
      </>,
    );
    expect(plots()).toBe(0);
    act(() => {
      window.dispatchEvent(new Event("beforeprint"));
    });
    expect(plots()).toBe(2);
    cleanup();

    render(trend("History"));
    expect(plots()).toBe(0);
    act(() => {
      print.dispatchEvent(new Event("change"));
    });
    expect(plots()).toBe(1);
  });
});
