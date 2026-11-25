import type { FC } from "react";
import type { LeadProps } from "./types";

/**
 * What a lead draws of its own module's published parts: its charts ("figures"), its node maps
 * ("maps") and its dated lanes ("events"). The module page's frame keeps drawing every kind a lead
 * does not list.
 */
export type DrawnKind = "figures" | "maps" | "events";

/** A lead visual with the kinds of its module's parts it draws itself. */
export type DrawingLead = FC<LeadProps> & { readonly draws: readonly DrawnKind[] };

/** The lead with its static `draws`: exactly the kinds given, in that order, frozen. */
export function withDraws(component: FC<LeadProps>, kinds: readonly DrawnKind[]): DrawingLead {
  return Object.assign(component, { draws: Object.freeze([...kinds]) });
}
