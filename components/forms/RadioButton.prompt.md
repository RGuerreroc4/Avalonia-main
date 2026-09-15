Use for 2–5 mutually exclusive options; give every member of a group the same `name`.

```jsx
<RadioButton name="theme" checked={v==='fluent'} onChange={() => setV('fluent')}>Fluent</RadioButton>
<RadioButton name="theme" checked={v==='simple'} onChange={() => setV('simple')}>Simple</RadioButton>
```
