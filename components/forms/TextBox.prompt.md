Standard text field. Focus adds a 1px inset accent ring inside the 1px border, so the field doesn't shift.

```jsx
<TextBox label="Email Address" placeholder="name@example.com" value={v} onChange={setV}
  innerLeft={<PathIcon data={ICONS.Search} size={14} color="var(--text-secondary)" />} />
```

Pass `error` for validation; `innerLeft`/`innerRight` mirror Avalonia's InnerLeftContent/InnerRightContent slots.
