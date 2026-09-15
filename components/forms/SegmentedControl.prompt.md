# SegmentedControl

Pill switcher for 2–4 mutually exclusive short options (e.g. Rooms / Categories).

- Fully-rounded track on `--surface-card`, 2px padding + 2px gap; active pill fills with `--accent`, rest transparent.
- Pills are 8px×16px, 11px text, borderless.
- Props: `items` (labels), `value` (label or index), `onChange(item, index)`.

```jsx
<SegmentedControl items={['Rooms','Categories']} value={seg} onChange={setSeg} />
```
