import { items, record, word } from "../visuals/visualData";

const DRIVER_NAMES: Record<string, string> = {
  revenue_growth: "Revenue growth",
  ebitda_margin: "EBITDA margin",
  capex_pct_revenue: "Capital expenditure, share of revenue",
  tax_wc_pct_revenue: "Tax and working capital, share of revenue",
  interest_rate: "Interest rate",
  dividends: "Dividends",
  debt_repayment: "Debt repayment",
  ebitda_decline: "Downside EBITDA decline",
  rate_increase: "Downside cash-interest increase",
};
const FRACTIONS = new Set([
  "revenue_growth",
  "ebitda_margin",
  "capex_pct_revenue",
  "tax_wc_pct_revenue",
  "interest_rate",
  "ebitda_decline",
  "rate_increase",
]);
const DRIVER_GROUPS = [
  ["base_drivers", "Base case"],
  ["upside_drivers", "Upside case"],
  ["downside_drivers", "Downside drivers"],
] as const;
const SHOCK = "downside_shock";

/** The recorded values, each exactly as recorded; null when the case states nothing. */
function recordedValues(raw: unknown): string[] | null {
  if (raw === undefined || raw === null) return null;
  if (typeof raw === "string" || typeof raw === "number") return [String(raw)];
  const values = record(raw).values;
  return Array.isArray(values) ? values.map((item) => word(item) || String(item)) : null;
}

/** A recorded number in one canonical spelling (0.40 and 0.4 agree); anything else exactly. */
function canonical(text: string) {
  const parts = /^(-?)(\d+)(?:\.(\d+))?$/u.exec(text.trim());
  if (!parts) return `s:${text}`;
  const whole = (parts[2] ?? "0").replace(/^0+(?=\d)/u, "");
  const fraction = (parts[3] ?? "").replace(/0+$/u, "");
  const negative = parts[1] === "-" && (whole !== "0" || fraction !== "");
  return `n:${negative ? "-" : ""}${whole}${fraction ? `.${fraction}` : ""}`;
}

/** One recorded value is a scalar and stands for every year. */
function sameValues(a: string[], b: string[]) {
  const one = (list: string[], other: string[]) =>
    list.length === 1 && other.every((text) => canonical(text) === canonical(list[0] ?? ""));
  if (a.length === 1 && b.length >= 1) return one(a, b);
  if (b.length === 1) return one(b, a);
  return a.length === b.length && a.every((text, at) => canonical(text) === canonical(b[at] ?? ""));
}

function amountUnit(document: Record<string, unknown>) {
  const currency = word(document.currency);
  if (!currency) return "currency not recorded";
  const scale = document.scale;
  if (scale === 1 || scale === "1") return `${currency} millions`;
  if (scale === 1000 || scale === "1000") return `${currency} thousands`;
  const text = typeof scale === "number" || typeof scale === "string" ? String(scale) : "";
  return `${currency}; scale ${text || "not recorded"}`;
}

export type DriverCell = {
  text: string;
  stated: boolean;
  /** Both base and this case state the driver and the recorded numbers differ. */
  differs: boolean;
  /** This case states the driver and base does not. */
  only: boolean;
};

const NOT_STATED: DriverCell = { text: "Not stated", stated: false, differs: false, only: false };

/**
 * The forecast inputs' drivers as a table: one row per driver any case states and one column per
 * case that states something: base, upside and downside drivers when they state a driver, and the
 * downside shock as its own column, named `shockName`. Values are shown as recorded. A driver a
 * case does not state reads "Not stated": nothing is inherited from base. A cell differs only
 * when base and the case both state the driver and the recorded numbers differ.
 */
export function driverTable(document: Record<string, unknown>, shockName = "Downside case") {
  const years = items(document.years).map((entry) => {
    const year = record(entry).year;
    return typeof year === "number" ? String(year) : word(year);
  });
  const shock = record(document[SHOCK]);
  const states = (group: string) =>
    Object.values(record(document[group])).some((raw) => recordedValues(raw) !== null);
  const groups = DRIVER_GROUPS.filter(([key], at) => at === 0 || states(key)).map(
    ([key, name]) => ({ key, name, shock: false }),
  );
  const shockKeys = Object.keys(shock).filter((key) => recordedValues(shock[key]) !== null);
  const cases = shockKeys.length
    ? [...groups, { key: SHOCK, name: shockName, shock: true }]
    : groups;
  const unit = amountUnit(document);
  const driverKeys = [
    ...new Set(groups.flatMap(({ key }) => Object.keys(record(document[key])))),
  ].filter((key) => groups.some(({ key: group }) => recordedValues(record(document[group])[key])));
  const rows = [
    ...driverKeys.map((key) => ({ key, isShock: false })),
    ...shockKeys.map((key) => ({ key, isShock: true })),
  ].map(({ key, isShock }) => {
    const values = cases.map(({ key: group, shock: inShock }) =>
      inShock === isShock ? recordedValues(record(document[group])[key]) : null,
    );
    const base = isShock ? null : (values[0] ?? null);
    const cells = values.map((recorded, at): DriverCell => {
      if (!recorded) return NOT_STATED;
      const every =
        recorded.length > 1 &&
        recorded.every((text) => canonical(text) === canonical(recorded[0] ?? ""));
      const counted = at > 0 && !isShock;
      return {
        text: every ? `${recorded[0] ?? ""} each year` : recorded.join(" · "),
        stated: true,
        differs: counted && base !== null && !sameValues(base, recorded),
        only: counted && base === null,
      };
    });
    const firstStating = cases.find((_, at) => values[at] !== null)?.key ?? "";
    return {
      id: `${isShock ? SHOCK : firstStating}.${key}`,
      key,
      name: DRIVER_NAMES[key] ?? key.replaceAll("_", " "),
      shock: isShock,
      unit: FRACTIONS.has(key) ? "Fraction" : unit,
      cells,
    };
  });
  return { years, cases, rows };
}
