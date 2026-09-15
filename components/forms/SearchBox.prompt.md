# SearchBox

Filled, borderless search field for navigation panels — not a bordered form control.

- 48px tall, 8px radius (`--radius-overlay`), `--surface-subtle` fill, `0 1px 0 rgba(0,0,0,.35)` seam shadow.
- Leading magnifier glyph in `--text-tertiary`. No focus ring.
- Props: `placeholder`, `value`, `onChange(value)`, `disabled`.

```jsx
<SearchBox placeholder="Search Project" value={q} onChange={setQ} />
```
