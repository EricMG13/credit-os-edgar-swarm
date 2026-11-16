import { useId, useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { moduleName } from "../api";
import { field, label } from "../layout";
import { emptyRow, ROW_SPECS, text, type Row, type RowField, type RowKind } from "./rows";

type Choices = readonly (readonly [string, string])[];

export function RowEditor({
  kind,
  rows,
  onChange,
  primary,
  required,
  focusChoices,
  openFirst,
}: {
  kind: RowKind;
  rows: readonly Row[];
  onChange: (rows: Row[]) => void;
  primary: boolean;
  required?: boolean;
  focusChoices?: Choices;
  /** Draw the first row open when the editor appears. */
  openFirst?: boolean;
}) {
  const spec = ROW_SPECS[kind];
  const base = useId();
  const [added, setAdded] = useState<number | undefined>(openFirst ? 0 : undefined);
  return (
    <div className="grid gap-2">
      {required && rows.length === 0 && (
        <p className="text-sm text-text-secondary">
          At least one {spec.title.toLowerCase()} is required for a new issue.
        </p>
      )}
      {rows.map((row, index) => (
        <div key={index} className="relative min-w-0 rounded-lg border border-border-hairline p-3">
          <RowItem
            id={`${base}-${String(index)}`}
            title={`${spec.title} ${String(index + 1)}`}
            summary={spec.summary(row)}
            fields={spec.fields.filter((item) => primary || !item.primaryOnly)}
            kind={kind}
            row={row}
            startOpen={index === added}
            focusChoices={focusChoices}
            onField={(key, value) => {
              onChange(rows.map((item, at) => (at === index ? { ...item, [key]: value } : item)));
            }}
          />
          <Button
            size="sm"
            color="secondary"
            className="absolute right-3 top-2"
            aria-label={`Remove ${spec.title} ${String(index + 1)}`}
            onPress={() => {
              onChange(rows.filter((_, at) => at !== index));
            }}
          >
            Remove
          </Button>
        </div>
      ))}
      <div>
        <Button
          size="sm"
          color="secondary"
          isDisabled={rows.length >= spec.max}
          onPress={() => {
            setAdded(rows.length);
            onChange([...rows, emptyRow(kind)]);
          }}
        >
          {spec.add}
        </Button>
      </div>
    </div>
  );
}

function RowItem({
  id,
  title,
  summary,
  fields,
  kind,
  row,
  startOpen,
  focusChoices,
  onField,
}: {
  id: string;
  title: string;
  summary: string;
  fields: readonly RowField[];
  kind: RowKind;
  row: Row;
  startOpen: boolean;
  focusChoices?: Choices;
  onField: (key: string, value: string) => void;
}) {
  // Open once, when the row appears; the analyst's own toggling is never overridden.
  const [open] = useState(startOpen);
  const groups = [...new Set(fields.map((item) => item.group ?? ""))];
  return (
    <details open={open || undefined} className="min-w-0">
      <summary className="cursor-pointer pr-24 text-sm">
        <span className="font-semibold">{title}</span>
        <span className="ml-2 text-text-secondary">{summary}</span>
      </summary>
      <div className="mt-3 grid gap-4">
        {groups.map((group) => (
          <div key={group} className="grid gap-2">
            {group && <h5 className="text-sm font-semibold text-text-secondary">{group}</h5>}
            <div className="grid gap-3 sm:grid-cols-2">
              {fields
                .filter((item) => (item.group ?? "") === group)
                .map((item) => {
                  const options =
                    item.options ?? (item.key === "focus_module" ? focusChoices : undefined);
                  return (
                    <RowInput
                      key={item.key}
                      id={`${id}-${item.key}`}
                      item={item}
                      blank={
                        !options?.some(([option]) => option === "") &&
                        emptyRow(kind)[item.key] === ""
                      }
                      value={text(row, item.key)}
                      options={options}
                      onChange={(value) => {
                        onField(item.key, value);
                      }}
                    />
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

export function RowInput({
  id,
  item,
  blank,
  value,
  options,
  onChange,
}: {
  id: string;
  item: RowField;
  blank: boolean;
  value: string;
  options?: readonly (readonly [string, string])[];
  onChange: (value: string) => void;
}) {
  const hint = item.hint ? `${id}-hint` : undefined;
  const offered = options ?? [];
  // A value the options do not list is still the value that is sent, so it is shown.
  const choices =
    value && item.kind === "select" && !offered.some(([option]) => option === value)
      ? [...offered, [value, item.key === "focus_module" ? moduleName(value) : value] as const]
      : offered;
  return (
    <div className="grid content-start gap-1">
      <label htmlFor={id} className={label}>
        {item.label}
      </label>
      {item.kind === "select" ? (
        <select
          id={id}
          className={field}
          aria-describedby={hint}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        >
          {blank && <option value="" />}
          {choices.map(([option, name]) => (
            <option key={option} value={option}>
              {name}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          className={field}
          type={item.kind === "date" ? "date" : "text"}
          inputMode={item.kind === "number" ? "decimal" : undefined}
          placeholder={item.placeholder}
          aria-describedby={hint}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      )}
      {item.hint && (
        <p id={hint} className="text-xs text-text-secondary">
          {item.hint}
        </p>
      )}
    </div>
  );
}
