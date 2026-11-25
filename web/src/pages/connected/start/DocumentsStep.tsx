import type { RefObject } from "react";
import { File05, Folder } from "@untitledui/icons";
import { FileUpload } from "@/components/application/file-upload/file-upload-base";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { field, label } from "../layout";
import { StatusBadge } from "@/components/status/StatusBadge";
import { serviceText } from "../api";
import { GapNote } from "../report/overview/Tile";
import { ISSUE_CLASSES, ISSUE_CLASSIFICATION, ISSUER_ID, storedName } from "./plain";
import type { LimitGroup } from "./limits";
import { OUTCOME_STATE, moduleNames } from "./limitWords";
import {
  SOURCE_TYPE_HINT,
  type DocumentRow,
  type IntakeView,
  documentsRead,
  carriedIntro,
} from "./intake";
import { FieldMessage, problemAttrs, SelectField } from "./fields";

function documentBadge({
  repeat,
  reason,
  description,
  pendingCopy,
  copied,
}: {
  repeat?: string;
  reason?: string;
  description?: string;
  pendingCopy: DocumentRow["pendingCopy"];
  copied: DocumentRow["copied"];
}) {
  if (repeat) return { color: "error", text: "Repeated content" } as const;
  if (reason) return { color: "error", text: "Ignored" } as const;
  if (description) return { color: "success", text: "Inspected" } as const;
  if (pendingCopy) return { color: "gray", text: "Will be copied" } as const;
  return { color: "gray", text: copied ? "Copied" : "Selected" } as const;
}

/** The service's facts about a read file: its description without the kind the chip carries. */
function factsOf(description: string | undefined, kind: string | undefined) {
  if (!description || !kind) return description;
  const words = kind.replaceAll("_", " ");
  return description === words ? "" : description.replace(`${words} · `, "");
}

function IntakeDocumentRow({ row, view }: { row: DocumentRow; view: IntakeView }) {
  const { name, stored, file, pendingCopy, copied } = row;
  const repeat = file ? view.repeatedContent.get(file) : undefined;
  const reason = repeat ?? (stored ? view.ignored.get(stored) : undefined);
  const description = stored ? view.inspected.get(stored) : undefined;
  const record = stored ? view.shownDocs.find((doc) => storedName(doc) === stored) : undefined;
  const badge = documentBadge({ repeat, reason, description, pendingCopy, copied });
  const facts = reason || factsOf(description, record?.kind);
  return (
    <li className="flex min-w-0 items-start gap-3 py-3 text-small">
      <File05 aria-hidden="true" className="mt-1 size-5 shrink-0 text-text-tertiary" />
      <div className="grid min-w-0 flex-1 gap-1">
        <p className="font-medium wrap-anywhere text-text-primary">{name}</p>
        <div className="flex flex-wrap items-center gap-2">
          {record?.kind && (
            <span className="rounded-ds-xs border border-border-hairline px-1.5 py-0.5 text-caption text-text-secondary">
              {record.kind.replaceAll("_", " ")}
            </span>
          )}
          <Badge size="sm" color={badge.color}>
            {badge.text}
          </Badge>
        </div>
        {facts && <p className="wrap-anywhere text-text-secondary">{facts}</p>}
      </div>
      <Button
        size="sm"
        color="secondary"
        className="min-h-11 sm:min-h-8"
        aria-label={`Remove ${name}`}
        isDisabled={view.busy !== undefined}
        onPress={() => {
          view.discardDocument(name, file);
        }}
      >
        Remove
      </Button>
    </li>
  );
}

function MissingRow({ group }: { group: LimitGroup }) {
  const fixes = [
    ...new Set(group.causes.map((cause) => serviceText(cause.fix ?? "")).filter(Boolean)),
  ];
  const also = moduleNames(group.consequences);
  return (
    <li className="grid gap-1 py-3 text-small">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge set="Run limits" state={OUTCOME_STATE[group.outcome]} />
        <span className="font-medium text-text-primary">
          {moduleNames(group.causes).join(", ")}
        </span>
      </div>
      {group.causes.map((cause) => (
        <p key={cause.id} className="wrap-anywhere text-text-secondary">
          {serviceText(cause.reason)}
        </p>
      ))}
      {fixes.map((fix) => (
        <p key={fix} className="wrap-anywhere text-text-primary">
          {fix}
        </p>
      ))}
      {also.length > 0 && (
        <p className="wrap-anywhere text-text-tertiary">Also affects: {also.join(", ")}</p>
      )}
    </li>
  );
}

function MissingForModules({ missing }: { missing: IntakeView["missing"] }) {
  return (
    <div className="grid gap-2 sm:col-span-2">
      <h3 className="font-semibold">Missing for the modules</h3>
      {missing === undefined ? (
        <p className="text-small text-text-secondary">Checked when you review the run.</p>
      ) : missing.length === 0 ? (
        <p className="text-small text-text-secondary">Nothing was missing at your last review.</p>
      ) : (
        <>
          <p className="text-small text-text-secondary">
            At your last review. Review the run again after adding files.
          </p>
          <ul aria-label="Missing for the modules" className="divide-y divide-border-hairline">
            {missing.map((group) => (
              <MissingRow key={group.key} group={group} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function DocumentFields({
  view,
  folderInput,
}: {
  view: IntakeView;
  folderInput: RefObject<HTMLInputElement | null>;
}) {
  return (
    <>
      <FileUpload.Root className="sm:col-span-2">
        <FileUpload.DropZone
          inputLabel="Documents"
          chooseFiles
          hint={`Add ${SOURCE_TYPE_HINT}. Up to 50 MB per file.`}
          isDisabled={view.busy !== undefined}
          onDropFiles={view.addFiles}
          className="py-10"
        />
        {view.selectionProblem && (
          <p role="alert" className="text-small text-error-text">
            {view.selectionProblem}
          </p>
        )}
        <input
          ref={folderInput}
          className="sr-only"
          aria-label="Document folder"
          tabIndex={-1}
          type="file"
          multiple
          {...{ webkitdirectory: "" }}
          onChange={(event) => {
            view.addFiles(event.target.files);
            event.target.value = "";
          }}
        />
        <div className="flex flex-wrap items-center gap-3">
          <Button
            color="secondary"
            iconLeading={Folder}
            onPress={() => folderInput.current?.click()}
          >
            Choose a folder
          </Button>
          <Button
            color="secondary"
            isDisabled={!view.canRead || view.busy !== undefined}
            onPress={view.inspectDocuments}
          >
            {view.busy === "documents" ? "Reading documents…" : "Inspect documents"}
          </Button>
        </div>
        <p role="status" className="text-sm text-text-secondary empty:hidden">
          {view.read && view.documentRows.length > 0 ? (
            <span key={view.inspections}>
              {documentsRead(view.shownDocs.length, view.ignored.size)}
            </span>
          ) : null}
        </p>
        {view.documentRows.length > 0 ? (
          <FileUpload.List
            aria-label="Documents added"
            className="gap-0 divide-y divide-border-hairline"
          >
            {view.documentRows.map((row, index) => (
              <IntakeDocumentRow key={`${row.name}-${String(index)}`} row={row} view={view} />
            ))}
          </FileUpload.List>
        ) : (
          <p className="text-sm text-text-secondary">No documents yet.</p>
        )}
        <GapNote>
          Which modules each file serves is not reported before review: the service checks the files
          against each module when you review the run.
        </GapNote>
      </FileUpload.Root>
      <MissingForModules missing={view.missing} />
      <div className="grid gap-2 sm:col-span-2">
        <h3 className="font-semibold">Issuer and case date</h3>
        {view.copy && (
          <>
            <p className="text-sm text-text-secondary">{carriedIntro(view.copy.prior)}</p>
            <Button
              href={`/run/${encodeURIComponent(view.copy.run)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Open source run (opens in a new tab)"
              color="link-gray"
              size="sm"
              className="w-fit"
            >
              Open source run
            </Button>
          </>
        )}
        {view.priorNote && (
          <p role="status" className="text-sm text-text-secondary">
            {view.priorNote}
          </p>
        )}
      </div>
      <div className="grid content-start gap-1">
        <label className={label}>
          Issuer name
          <input
            className={field}
            required
            placeholder="e.g. Northbridge Group plc"
            {...problemAttrs(view.problem, "issuer_name")}
            value={view.identity.issuer_name}
            onChange={(event) => {
              view.changeIdentity("issuer_name", event.target.value);
            }}
          />
        </label>
        <FieldMessage problem={view.problem} field="issuer_name" />
      </div>
      <div className="grid content-start gap-1">
        <label className={label}>
          {ISSUER_ID}
          <input
            className={field}
            required
            pattern="[a-z0-9][a-z0-9\-]{0,39}"
            maxLength={40}
            placeholder="e.g. northbridge-group-plc"
            {...problemAttrs(view.problem, "issuer_id")}
            value={view.issuerId}
            readOnly={!!view.copy}
            onChange={(event) => {
              view.changeIssuerId(event.target.value);
            }}
          />
        </label>
        <FieldMessage problem={view.problem} field="issuer_id" />
        {view.problem?.field === "issuer_id" && view.problem.offer && (
          <div>
            <Button
              color="secondary"
              size="sm"
              onPress={() => {
                view.useIssuerId(view.problem?.offer ?? "");
              }}
            >
              {`Use ${view.problem.offer}`}
            </Button>
          </div>
        )}
        <p className="text-sm text-text-secondary">
          Letters a–z, digits and hyphens, up to 40 characters.
        </p>
        {view.issuerNotice && <p className="text-sm text-text-secondary">{view.issuerNotice}</p>}
      </div>
      <div className="grid content-start gap-1">
        <label className={label}>
          As-of date
          <input
            className={field}
            type="date"
            required
            value={view.run.as_of}
            onChange={(event) => {
              view.changeRun("as_of", event.target.value);
            }}
          />
        </label>
      </div>
      <SelectField
        title={ISSUE_CLASSIFICATION}
        value={view.identity.issue_classification ?? ""}
        choices={{ "": "Choose classification", ...ISSUE_CLASSES }}
        onChange={(value) => {
          view.changeIdentity("issue_classification", value);
        }}
      />
      <div className="grid gap-2">
        <label className={label}>
          <span>
            Your name <span aria-hidden="true">*</span>
          </span>
          <input
            className={field}
            required
            aria-label="Your name"
            maxLength={80}
            autoComplete="off"
            placeholder="Eric G"
            {...problemAttrs(view.problem, "submitted_by")}
            aria-describedby={
              view.problem?.field === "submitted_by"
                ? "error-submitted_by run-analyst-name"
                : "run-analyst-name"
            }
            value={view.submittedBy}
            onChange={(event) => {
              view.changeSubmittedBy(event.target.value);
            }}
          />
        </label>
        <FieldMessage problem={view.problem} field="submitted_by" />
        <p id="run-analyst-name" className="text-sm text-text-tertiary">
          First name and initial, such as Eric G. Use two initials, such as Eric MG, if a colleague
          has a similar name. Shown on Run activity and in Teams.
        </p>
      </div>
      {view.copy ? (
        <Button color="secondary" onPress={view.resetIssuer}>
          This is a different issuer
        </Button>
      ) : (
        <Button color="secondary" onPress={view.carryLatest}>
          Use inputs from latest run
        </Button>
      )}
    </>
  );
}
