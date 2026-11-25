import { TEXT, inside, textWidth } from "./chartText";
import { PATH, pathGeometry } from "./stressData";

type Geometry = ReturnType<typeof pathGeometry>;

/**
 * The forward path drawn at its frame's own `width` (one user unit a pixel, so 12 px text stays
 * 12 px): the model's geometry stretched across the room the tick labels leave, each label moved
 * in from the edges so it stays inside the figure.
 */
export function pathLayout(geometry: Geometry, width: number) {
  const left =
    Math.max(...geometry.ticks.map((tick) => textWidth(`${tick.label}x`, "mono")), 0) + 8;
  const x = (value: number) =>
    left + ((value - PATH.left) / (PATH.width - PATH.left)) * (width - left - 4);
  return {
    left,
    ticks: geometry.ticks,
    periods: geometry.periods.map((period) => ({
      ...period,
      x: x(period.x),
      label: inside(x(period.x), period.period, width, "body"),
    })),
    lines: geometry.lines.map((line) =>
      line.map((point) => ({
        ...point,
        x: x(point.x),
        label: inside(x(point.x), point.display, width),
      })),
    ),
  };
}

export { TEXT };
