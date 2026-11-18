## 2026-11-17 final audit presentation fidelity

On repair tree `bb94ddce`, rebuilt both surfaces and captured connected
synthetic Northbridge and the static fixture with native Chrome 157.0.8103.78
at 1440 by 900. Both captures exited 0. Checked 267 distinct screens
(29 connected, 238 static), 654 sourced drawers, 419 explicit missing-source
markers and zero coverage gaps, trace errors or outside application-context
attempts. The immutable comparator and baseline matched 126 stored hashes.
Its 28 self-test cases passed. The full comparison covered 7,761 entries.
The unmodified diff exited 1, reporting seven new differences, fourteen
omissions and 352 not-found items. Each is explained in
`docs/audit/2026-11-16-final/output/5-repair/fidelity/after-report.md`
and the item readbacks, including scoped event counts, retained drawer basis
and inputs, static sample notices and unchanged call totals. Static had no
difference flags. Browser background proxy denials are counted separately.
This evidence covers values, units, periods, source statements and
qualifications in the captured screens. Other browsers, CSS presentation,
remaining controls, work-PC and real-run behavior were outside this check.
