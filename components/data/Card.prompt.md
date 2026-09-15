Intentional addition: the samples build panels from raw `<Border>`, so this wraps that pattern. Flat and borderless by default — opt into the 1px hairline with `bordered`.

```jsx
<Card>…</Card>
<Card bordered surface="var(--pulse-surface)" radius="var(--radius-pulse-card)">…</Card>
```
