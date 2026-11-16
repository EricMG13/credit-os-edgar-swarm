/**
 * Answer key for the event calendar drawing. Written by hand, in the order a handoff might list the
 * rows (not date order). `year` and `category` are stated here, never computed by the drawing's code.
 * Do not regenerate this file from the component's output.
 */
export interface KeyEvent {
  date: string;
  precision: string;
  published: string;
  event: string;
  status: string;
  source: string;
  relevance: string;
  /** The year group the event belongs in. */
  year: string;
  category: "Historical" | "Scheduled" | "Scenario" | "User reminder";
}

export const KEY_EVENTS: KeyEvent[] = [
  {
    date: "2027-Q2",
    precision: "quarter",
    published: "2026-09-30",
    event: "Senior notes due",
    status: 'Scheduled — "the notes mature in the second quarter of 2027"',
    source: "indenture.pdf p. 14",
    relevance: "Largest single maturity before the revolver",
    year: "2027",
    category: "Scheduled",
  },
  {
    date: "1998",
    precision: "year",
    published: "2026-07-28",
    event: "Company founded in Reno",
    status: 'Historical — "founded in 1998"',
    source: "10-K p. 3",
    relevance: "Origin of the permitted holders",
    year: "1998",
    category: "Historical",
  },
  {
    date: "2026-11-03",
    precision: "day",
    published: "2026-10-02",
    event: "Third-quarter results",
    status: "Scheduled",
    source: "press-release.txt",
    relevance: "First covenant test after the amendment",
    year: "2026",
    category: "Scheduled",
  },
  {
    date: "2026-11-03",
    precision: "day",
    published: "2026-10-02",
    event: "Third-quarter results",
    status: "Scheduled",
    source: "press-release.txt",
    relevance: "Updates the liquidity runway",
    year: "2026",
    category: "Scheduled",
  },
  {
    date: "2024-02",
    precision: "month",
    published: "2024-03-01",
    event: "Term loan B repriced",
    status: 'Historical — "repriced in February 2024"',
    source: "8-K 2024-02-06",
    relevance: "Cut the margin by 50 basis points; interest cover improved",
    year: "2024",
    category: "Historical",
  },
  {
    date: "2026-07-01",
    precision: "day",
    published: "2026-02-17",
    event:
      "Higher state gaming tax rates on sports betting wagers and online casino play take effect",
    status:
      'Historical — "increased gaming tax rates on sports betting wagers and online casino play in certain states took effect on July 1, 2026"',
    source: "10-K p. 41",
    relevance:
      "Raises the cost base of the digital segment; treat digital margin gains as tax-exposed until two further quarters are reported",
    year: "2026",
    category: "Historical",
  },
  {
    date: "2027-04-15",
    precision: "day",
    published: "Not supplied: the 8-K states its date of report but not its filing date",
    event: "Lender consent outcome",
    status: "Scenario — Conditional",
    source: "approval.pdf",
    relevance: "A refusal would bring the springing maturity forward",
    year: "2027",
    category: "Scenario",
  },
  {
    date: "2026-12",
    precision: "month",
    published: "2026-10-02",
    event: "Check the rating agency review",
    status: "User reminder",
    source: "analyst note",
    relevance: "Outlook is negative",
    year: "2026",
    category: "User reminder",
  },
  {
    date: "2024-11-25",
    precision: "day",
    published: "2024-11-25",
    event: "Regional casino sold",
    status: 'Historical — "completed the sale on November 25, 2024"',
    source: "8-K 2024-11-25",
    relevance: "Proceeds repaid secured debt",
    year: "2024",
    category: "Historical",
  },
  {
    date: "2040",
    precision: "year",
    published: "2026-07-28",
    event: "Initial term of the master lease expires",
    status: 'Scheduled — "the initial term expires in 2040"',
    source: "lease.pdf p. 2",
    relevance: "Long-dated rent commitment of about USD 19 million a year",
    year: "2040",
    category: "Scheduled",
  },
  {
    date: "2026-Q1",
    precision: "quarter",
    published: "2026-05-28",
    event: "Revolver extended",
    status: "Historical — Completed",
    source: "credit-agreement.pdf",
    relevance: "Removes the nearest liquidity cliff",
    year: "2026",
    category: "Historical",
  },
  {
    date: "2024-06-30",
    precision: "day",
    published: "2024-08-23",
    event: "Covenant holiday ends",
    status: "Historical — Reported",
    source: "10-Q p. 22",
    relevance: "Maintenance covenant applies again",
    year: "2024",
    category: "Historical",
  },
  {
    date: "2031-01-15",
    precision: "day",
    published: "2026-07-29",
    event: "Secured notes due",
    status: 'Scheduled — "due January 15, 2031"',
    source: "indenture.pdf p. 9",
    relevance: "Second maturity wall",
    year: "2031",
    category: "Scheduled",
  },
  {
    date: "2027-10",
    precision: "month",
    published: "2026-09-30",
    event: "Springing maturity test",
    status: "Scenario — If more than USD 250 million of the 2027 notes remain",
    source: "credit-agreement.pdf s. 2.4",
    relevance: "Could pull the term loan forward by four years",
    year: "2027",
    category: "Scenario",
  },
];

/** Year groups in the order they must be drawn, each with the number of events in it. */
export const KEY_YEARS: [year: string, events: number][] = [
  ["1998", 1],
  ["2024", 3],
  ["2026", 5],
  ["2027", 3],
  ["2031", 1],
  ["2040", 1],
];

/** The stretches without events that the strip must name between year groups. */
export const KEY_GAPS = [
  "No events 1999 to 2023",
  "No events 2025",
  "No events 2028 to 2030",
  "No events 2032 to 2039",
];

/** Event titles in the date order the list must follow (ties keep the input order). */
export const KEY_ORDER = [
  "Company founded in Reno",
  "Term loan B repriced",
  "Covenant holiday ends",
  "Regional casino sold",
  "Revolver extended",
  "Higher state gaming tax rates on sports betting wagers and online casino play take effect",
  "Third-quarter results",
  "Third-quarter results",
  "Check the rating agency review",
  "Senior notes due",
  "Lender consent outcome",
  "Springing maturity test",
  "Secured notes due",
  "Initial term of the master lease expires",
];
