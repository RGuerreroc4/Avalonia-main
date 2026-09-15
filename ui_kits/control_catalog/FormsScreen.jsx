const { TextBox, CheckBox, RadioButton, ToggleSwitch, ComboBox, Slider, Card, PathIcon } = window.AvaloniaFluentDesignSystem_a08390;

function FormsScreen() {
  const I = window.CATALOG_ICONS;
  const [name, setName] = React.useState('');
  const [terms, setTerms] = React.useState(false);
  const [theme, setTheme] = React.useState('fluent');
  const [live, setLive] = React.useState(true);
  const [density, setDensity] = React.useState('Normal');
  const [zoom, setZoom] = React.useState(100);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 760 }}>
      <Card style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <TextBox label="Project name" placeholder="ControlCatalog" value={name} onChange={setName} />
        <TextBox label="Search" placeholder="Search…"
          innerLeft={<PathIcon data={I.Search} size={14} color="var(--text-secondary)" />} />
        <TextBox label="Port" value="80x" error="Enter a whole number." />
        <ComboBox items={['Compact', 'Normal']} value={density} onChange={setDensity} />
      </Card>
      <Card style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <CheckBox checked={terms} onChange={setTerms}>Accept the licence</CheckBox>
          <CheckBox indeterminate>Some platforms selected</CheckBox>
          <CheckBox disabled>Unavailable</CheckBox>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <RadioButton name="theme" checked={theme === 'fluent'} onChange={() => setTheme('fluent')}>Fluent theme</RadioButton>
          <RadioButton name="theme" checked={theme === 'simple'} onChange={() => setTheme('simple')}>Simple theme</RadioButton>
        </div>
        <ToggleSwitch checked={live} onChange={setLive} onContent="Live preview on" offContent="Live preview off" />
        <div>
          <div style={{ fontSize: 'var(--font-size-12)', color: 'var(--text-secondary)', marginBottom: 4 }}>Zoom</div>
          <Slider value={zoom} min={50} max={200} onChange={setZoom} showValue />
        </div>
      </Card>
    </div>
  );
}
Object.assign(window, { FormsScreen });
