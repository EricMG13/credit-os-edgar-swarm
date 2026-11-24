/** A straight map from a data range onto a pixel range. */
export function linear(domain: readonly [number, number], range: readonly [number, number]) {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const span = d1 - d0 || 1;
  return (value: number) => r0 + ((value - d0) / span) * (r1 - r0);
}

/** `2 → "2"`, strings pass through; a number with no decimals shows none. */
export const plain = (value: number) =>
  new Intl.NumberFormat("en-US").format(value).replace("-", "−");
