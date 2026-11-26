const moneyUnit = /^(USD|US\$|[A-Z]{3})(?: millions|m)$/;
const moneySymbol = (code: string) => (code === "USD" || code === "US$" ? "US$" : `${code} `);

export function unitLabel(unit: string) {
  const code = moneyUnit.exec(unit)?.[1];
  return code ? `${code === "USD" || code === "US$" ? "US$" : code}m` : unit;
}

export function withUnit(value: string | number, unit?: string | null) {
  const code = unit ? moneyUnit.exec(unit)?.[1] : undefined;
  if (code) {
    const text = String(value);
    if (!/^-?(\d+|\d{1,3}(,\d{3})+)(\.\d+)?$/.test(text)) return text;
    const [plain = "", fraction] = text.replace(/^-/, "").split(".");
    const integer = plain.replace(/,/g, "");
    const grouped = integer.replace(/\B(?=(\d{3})+$)/g, ",");
    const sign = text.startsWith("-") ? "-" : "";
    return `${sign}${moneySymbol(code)}${grouped}${fraction === undefined ? "" : `.${fraction}`}m`;
  }
  return unit ? `${String(value)}${/^[x%]$/.test(unit) ? "" : " "}${unit}` : String(value);
}
