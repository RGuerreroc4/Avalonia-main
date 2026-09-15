const { Button, Card, ProgressBar, NotificationCard, TabItem, ListItem, Expander, PathIcon } = window.AvaloniaFluentDesignSystem_a08390;

function FeedbackScreen() {
  const I = window.CATALOG_ICONS;
  const [tab, setTab] = React.useState(0);
  const [toasts, setToasts] = React.useState([{ id: 1, type: 'success', title: 'Build succeeded', body: 'ControlCatalog.Desktop compiled in 4.2s.' }]);
  const [pct, setPct] = React.useState(38);
  const push = type => setToasts(t => [...t, {
    id: Date.now(), type,
    title: type === 'error' ? 'XAML compiler error' : type === 'warning' ? 'Deprecated API' : 'Attached to process',
    body: type === 'error' ? "Unknown property 'Foo' on Border." : type === 'warning' ? 'IStyleable is obsolete.' : 'Debugger attached to Avalonia.Desktop.'
  }]);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
      <div>
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-hairline)', marginBottom: 16 }}>
          {['Progress', 'Lists', 'Disclosure'].map((t, i) =>
            <TabItem key={t} selected={tab === i} onClick={() => setTab(i)}>{t}</TabItem>)}
        </div>
        {tab === 0 && (
          <Card style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ProgressBar value={pct} showText />
            <ProgressBar indeterminate />
            <div style={{ display: 'flex', gap: 8 }}>
              <Button onClick={() => setPct(p => Math.max(0, p - 10))}>−10</Button>
              <Button onClick={() => setPct(p => Math.min(100, p + 10))}>+10</Button>
            </div>
          </Card>
        )}
        {tab === 1 && (
          <Card style={{ padding: 6 }}>
            {['Layout', 'Transitions', 'Text rendering', 'Composition'].map((t, i) =>
              <ListItem key={t} selected={i === 0} icon={<PathIcon data={I.Layers} size={16} color="var(--text-secondary)" />}>{t}</ListItem>)}
          </Card>
        )}
        {tab === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Expander header="Rendering">Composition renderer with a dedicated render thread.</Expander>
            <Expander header="Input">Pointer, touch, pen and keyboard routed events.</Expander>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button onClick={() => push('information')}>Info</Button>
          <Button onClick={() => push('warning')}>Warning</Button>
          <Button onClick={() => push('error')}>Error</Button>
        </div>
        {toasts.map(t => (
          <NotificationCard key={t.id} type={t.type} title={t.title}
            onClose={() => setToasts(ts => ts.filter(x => x.id !== t.id))}>{t.body}</NotificationCard>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { FeedbackScreen });
