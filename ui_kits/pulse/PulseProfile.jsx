const { PathIcon } = window.AvaloniaFluentDesignSystem_a08390;

/* PulseProfileView — avatar header, stat row, settings rows on #1a1a1a. */
function PulseProfile() {
  const rows = ['Account', 'Notifications', 'Units & Measures', 'Connected Devices', 'Privacy'];
  return (
    <div style={{ padding: '24px 16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <img src="../../assets/img/pulse/profile_avatar.jpg" alt=""
          style={{ width: 88, height: 88, borderRadius: 44, objectFit: 'cover', border: '2px solid var(--pulse-accent)' }} />
        <div style={{ fontSize: 18, fontWeight: 700 }}>Alex Johnson</div>
        <div style={{ fontSize: 12, color: 'var(--pulse-text-3)' }}>Member since 2024</div>
      </div>
      <div style={{ display: 'flex', gap: 12, margin: '20px 0' }}>
        {[['128', 'Workouts'], ['42h', 'Time'], ['18', 'Streak']].map(([v, l]) => (
          <div key={l} style={{ flex: 1, padding: 12, borderRadius: 16, background: 'var(--pulse-surface)', textAlign: 'center' }}>
            <div style={{ fontSize: 18, fontWeight: 700 }}>{v}</div>
            <div style={{ fontSize: 10, letterSpacing: 1, color: 'var(--pulse-text-4)', marginTop: 2 }}>{l.toUpperCase()}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rows.map(r => (
          <div key={r} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 16px', borderRadius: 16, background: 'var(--pulse-surface)', fontSize: 14
          }}>
            <span>{r}</span>
            <PathIcon data="M8.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L13.586 11 8.293 5.707a1 1 0 0 1 0-1.414Z" size={14} color="var(--pulse-text-4)" />
          </div>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { PulseProfile });
