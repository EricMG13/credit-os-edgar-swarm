# Teams run cards

Four Adaptive Card payloads (schema 1.5, Teams) for run notifications, drawn from
`../mockups/teams-cards.html`. Values are the mock-up's synthetic sample data; nothing in the
app sends these yet.

| File | Fires |
| :--- | :--- |
| `run-started.json` | An analyst submits a run |
| `report-ready.json` | The report is published |
| `run-stopped.json` | A run stops before publishing |
| `run-summary.json` | 09:00, 13:00, 17:00 and 21:00 UK time on weekdays; skipped when nothing is running, queued or stopped and nothing finished since the last one; five most recent finished runs, then a count |

To post one, wrap it:
`{"type":"message","attachments":[{"contentType":"application/vnd.microsoft.card.adaptive","content": <card> }]}`

- The header is two inline PNGs (navy band, logo with app name), about 2.5 KB together, so no
  image host is needed. Icons and status shapes are Teams' built-in Fluent icons.
- Links use the placeholder `https://credit-os.example`; replace it with the address readers
  open Credit OS at.
- Checked: valid JSON, 5.5 to 13 KB when posted, and rendered with Microsoft's reference renderer
  (adaptivecards 3), where the header draws and `Badge` and `ProgressBar` fall back to text.
- Not checked: nothing has been posted to Teams. `Icon`, `Badge`, `ProgressBar`, the
  `icon:Library` button icon and the Fluent icon names are Teams extensions the reference
  renderer does not draw.
