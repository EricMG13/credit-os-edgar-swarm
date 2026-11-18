import { useEffect, useRef, useState, type ReactElement } from "react";
import { flushSync } from "react-dom";
import { ResponsiveContainer } from "recharts";

// The distance outside the view, in the page and in a scrolling region that holds the plot, at
// which a plot is drawn ahead of being reached.
const NEAR: IntersectionObserverInit & { scrollMargin: string } = {
  rootMargin: "600px",
  scrollMargin: "600px",
};

/**
 * A full-width plot of a fixed height. Drawing a chart is the costly part of a page of charts, so
 * the chart is drawn once its plot is near the view and stays drawn; until then an empty block of
 * the same height holds its place, so nothing on the page moves. Every plot is drawn for print,
 * and at once where the browser cannot report what is near the view.
 */
export function Plot({
  height,
  onResize,
  children,
}: {
  height: number;
  onResize?: (width: number, height: number) => void;
  children: ReactElement;
}) {
  const [drawn, setDrawn] = useState(() => typeof IntersectionObserver === "undefined");
  const place = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (drawn || !place.current) return;
    const near = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) setDrawn(true);
    }, NEAR);
    near.observe(place.current);
    // The printed page is laid out as soon as this returns, so the chart is drawn before it does.
    const print = () => {
      flushSync(() => {
        setDrawn(true);
      });
    };
    const media = window.matchMedia("print");
    window.addEventListener("beforeprint", print);
    media.addEventListener("change", print);
    return () => {
      near.disconnect();
      window.removeEventListener("beforeprint", print);
      media.removeEventListener("change", print);
    };
  }, [drawn]);
  return drawn ? (
    <ResponsiveContainer width="100%" height={height} onResize={onResize}>
      {children}
    </ResponsiveContainer>
  ) : (
    <div ref={place} style={{ height }} />
  );
}
