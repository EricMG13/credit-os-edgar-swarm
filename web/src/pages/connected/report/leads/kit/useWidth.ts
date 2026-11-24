import { useLayoutEffect, useRef, useState, type RefObject } from "react";

/**
 * The measured pixel width of the element `ref` is put on, kept current with a ResizeObserver.
 * Where there is none (jsdom, very old browsers) or before the first measure, it is `fallback`.
 * A figure draws its SVG with `viewBox="0 0 {width} {height}"`, so one unit is one pixel and its
 * text is drawn at its real size at every width.
 */
export function useFigureWidth(fallback: number): [RefObject<HTMLDivElement | null>, number] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(fallback);
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || typeof ResizeObserver === "undefined") return;
    const take = (measured: number) => {
      const whole = Math.floor(measured);
      if (whole > 0) setWidth(whole);
    };
    take(element.getBoundingClientRect().width);
    const observer = new ResizeObserver(([found]) => {
      if (found) take(found.contentRect.width);
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);
  return [ref, width];
}
