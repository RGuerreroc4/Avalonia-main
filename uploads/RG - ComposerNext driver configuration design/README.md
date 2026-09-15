# DS handoff — apply to avalonia-fluent-design-system (a08390d5)

Drop-in replacements for three DS files. Source: RG - ComposerNext project, 2026-09-04.

## Files
- tokens/semantic.css  — adds --surface-footer, --text-on-success, --divider-row (dark + light scopes)
- patterns.css         — adds [data-dscard] last-child border de-dup, thin ::-webkit-scrollbar, [data-chip] pattern
- _ds_bundle.js        — Button cursor fix: disabled ? 'default' : 'pointer' (was always 'default')

## Apply
Copy each file to the same path in the DS project, overwriting. No other files changed.
