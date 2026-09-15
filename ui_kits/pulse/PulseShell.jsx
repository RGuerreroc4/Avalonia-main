const { PathIcon } = window.AvaloniaFluentDesignSystem_a08390;

const TABS = [
  { id: 'home', label: 'Home', icon: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z' },
  { id: 'workouts', label: 'Workouts', icon: 'M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z' },
  { id: 'profile', label: 'Profile', icon: 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z' }
];

/* Phone frame + bottom TabbedPage bar. The frame stands in for the 1px bordered,
   8px-radius Border that PulseAppPage.xaml wraps the NavigationPage in. */
function PulseShell({ tab, onTab, showTabs, title, onBack, children }) {
  return (
    <div style={{
      width: 390, height: 780, display: 'flex', flexDirection: 'column', overflow: 'hidden',
      borderRadius: 8, border: '1px solid var(--pulse-hairline)',
      background: 'var(--pulse-bg)', fontFamily: 'var(--font-core)', color: 'var(--pulse-text)'
    }}>
      {title && (
        <header style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
          borderBottom: '1px solid var(--pulse-hairline)'
        }}>
          {onBack && (
            <button onClick={onBack} style={{ border: 0, background: 'transparent', padding: 0, color: 'var(--pulse-text-3)' }}>
              <PathIcon data="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" size={20} color="var(--pulse-text-3)" />
            </button>
          )}
          <strong style={{ fontSize: 'var(--font-size-16)' }}>{title}</strong>
        </header>
      )}
      <div style={{ flex: 1, overflow: 'auto', minHeight: 0 }}>{children}</div>
      {showTabs && (
        <nav style={{
          display: 'flex', borderTop: '1px solid var(--pulse-hairline)', background: 'var(--pulse-surface)'
        }}>
          {TABS.map(t => {
            const on = t.id === tab;
            return (
              <button key={t.id} onClick={() => onTab(t.id)} style={{
                flex: 1, minHeight: 56, display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 4, border: 0, background: 'transparent',
                color: on ? 'var(--pulse-accent)' : 'var(--pulse-text-4)', fontFamily: 'inherit'
              }}>
                <PathIcon data={t.icon} size={20} color={on ? 'var(--pulse-accent)' : 'var(--pulse-text-4)'} />
                <span style={{ fontSize: 10, fontWeight: on ? 600 : 500, letterSpacing: '.4px' }}>{t.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
Object.assign(window, { PulseShell });
