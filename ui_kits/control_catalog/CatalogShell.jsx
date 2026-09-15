const { Button, TextBox, ComboBox, Expander, ListItem, PathIcon } = window.AvaloniaFluentDesignSystem_a08390;
const I = window.CATALOG_ICONS;

function DrawerHeader({ compact }) {
  return (
    <div style={{ padding: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ padding: 10, display: 'grid', placeItems: 'center' }}>
        <img src="../../assets/logo/avalonia-icon.png" alt="Avalonia"
          style={{ maxHeight: compact ? 32 : 120, width: 'auto' }} />
      </div>
      {!compact && <div style={{ margin: '0 8px 4px 4px' }}>
        <TextBox placeholder="Search…" innerLeft={<PathIcon data={I.Search} size={14} color="var(--text-secondary)" />} />
      </div>}
    </div>
  );
}

function DrawerFooter() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderTop: '1px solid var(--border-hairline)' }}>
      <Expander header="Settings" direction="up" expanded={open} onToggle={setOpen} style={{ padding: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 152 }}>
          <ComboBox items={['Full', 'BorderOnly', 'None']} value="Full" />
          <ComboBox items={['Default', 'Light', 'Dark']} value="Default" />
          <ComboBox items={['Fluent', 'Simple']} value="Fluent" />
          <ComboBox items={['None', 'Transparent', 'Blur', 'AcrylicBlur', 'Mica']} value="None" />
        </div>
      </Expander>
    </div>
  );
}

function CatalogShell({ pages, active, onSelect, children }) {
  const [compact, setCompact] = React.useState(false);
  return (
    <div style={{
      display: 'flex', height: '100%', background: 'var(--surface-page)',
      fontFamily: 'var(--font-core)', fontSize: 'var(--font-size-14)', color: 'var(--text-body)'
    }}>
      <aside style={{
        width: compact ? 'var(--drawer-width-compact)' : 'var(--drawer-width)',
        flex: '0 0 auto', display: 'flex', flexDirection: 'column',
        borderRight: '1px solid var(--border-hairline)', background: 'var(--surface-subtle)',
        transition: 'width var(--duration-normal) var(--ease-standard)'
      }}>
        <DrawerHeader compact={compact} />
        <div style={{ flex: 1, overflow: 'auto', padding: '10px 6px' }}>
          {pages.map(p => (
            <ListItem key={p.id} selected={p.id === active} onClick={() => onSelect(p.id)}
              icon={<PathIcon data={p.icon} size={16} color={p.id === active ? 'var(--text-body)' : 'var(--text-secondary)'} />}>
              {compact ? '' : p.title}
            </ListItem>
          ))}
        </div>
        <DrawerFooter />
      </aside>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
          borderBottom: '1px solid var(--border-hairline)'
        }}>
          <Button variant="transparent" onClick={() => setCompact(c => !c)}
            style={{ minWidth: 0, padding: 6 }}>
            <PathIcon data={I.Menu} size={16} color="var(--text-secondary)" />
          </Button>
          <strong style={{ fontWeight: 'var(--font-weight-semibold)' }}>
            {(pages.find(p => p.id === active) || {}).title}
          </strong>
        </header>
        <div style={{ flex: 1, overflow: 'auto', padding: 20 }}>{children}</div>
      </main>
    </div>
  );
}
Object.assign(window, { CatalogShell });
