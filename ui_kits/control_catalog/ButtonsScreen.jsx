const { Button, ToggleButton, HyperlinkButton, Card, PathIcon } = window.AvaloniaFluentDesignSystem_a08390;

function Group({ title, children }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
      <h2 style={{ margin: 0, fontSize: 'var(--font-size-16)', fontWeight: 'var(--font-weight-semibold)' }}>{title}</h2>
      <Card style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>{children}</Card>
    </section>
  );
}

function ButtonsScreen() {
  const I = window.CATALOG_ICONS;
  const [bold, setBold] = React.useState(true);
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ maxWidth: 760 }}>
      <p style={{ marginTop: 0, color: 'var(--text-secondary)', maxWidth: 400 }}>
        A button gives the user a way to trigger an immediate action.
      </p>
      <Group title="Button">
        <Button variant="accent" onClick={() => setCount(c => c + 1)}>Clicked {count} times</Button>
        <Button>Standard</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="transparent">Transparent</Button>
        <Button disabled>Disabled</Button>
        <Button icon={<PathIcon data={I.Refresh} size={16} />}>With icon</Button>
      </Group>
      <Group title="ToggleButton">
        <ToggleButton checked={bold} onChange={setBold}>Bold</ToggleButton>
        <ToggleButton>Italic</ToggleButton>
        <ToggleButton disabled>Disabled</ToggleButton>
      </Group>
      <Group title="HyperlinkButton">
        <HyperlinkButton href="#">avaloniaui.net</HyperlinkButton>
        <HyperlinkButton visited>Release notes</HyperlinkButton>
        <HyperlinkButton disabled>Disabled</HyperlinkButton>
      </Group>
    </div>
  );
}
Object.assign(window, { ButtonsScreen });
