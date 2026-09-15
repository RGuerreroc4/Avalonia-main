# TreeView

Project-navigator menu. Arbitrarily nested; one 16px pill serves every row in every state.

- **Structural rows** (any node with `items`/`children` — site, location, floor, room) show a `+`/`−` toggle glyph as the leading element *inside* the pill and no icon; the child `count` parks in the right meta column. The hover/select bubble wraps the glyph — there is no separate outer toggle button.
- **Device / accessory leaves** carry a PathIcon (path string or node) and a status dot in that same right column — green (`--status-success`) when `on`, dim when `off`.
- The `+`/`−` glyph appears only on expandable rows. Rest / hover / selected all keep the 16px radius; selection uses `--surface-list-selected`.
- Props: `nodes` (`{name, count?, defaultExpanded?, items:[…]}` / `{name, icon?, status?}`), `selected` (slash-joined index path, e.g. `"0/1/2"`), `onSelect(key)`. `rooms` is a back-compat alias for `nodes`.

```jsx
<TreeView nodes={NODES} selected={sel} onSelect={setSel} />
```
