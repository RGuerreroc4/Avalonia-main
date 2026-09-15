const { PathIcon } = window.AvaloniaFluentDesignSystem_a08390;

/* PulseLoginView.xaml — 400px max width, 20px stack spacing, 48px controls at
   12px radius, #1e293b fields, #256af4 primary button. */
function PulseField({ label, trailing, placeholder, type }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--pulse-text-2)' }}>{label}</span>
        {trailing}
      </div>
      <input type={type} placeholder={placeholder}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          height: 48, padding: '0 14px', borderRadius: 12, fontSize: 13,
          fontFamily: 'inherit', color: '#fff', outline: 'none',
          background: 'var(--pulse-surface-2)',
          border: '1px solid ' + (focus ? 'var(--pulse-accent)' : 'var(--pulse-surface-2)')
        }} />
    </div>
  );
}

function PulseLogin({ onLogin }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return (
    <div style={{ padding: '48px 32px 32px', maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--pulse-accent)', display: 'grid', placeItems: 'center' }}>
          <PathIcon data="M7 2v11h3v9l7-12h-4l4-8z" size={16} color="#fff" />
        </div>
        <span style={{ fontSize: 20, fontWeight: 700 }}>PULSE.</span>
      </div>
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <div style={{ fontSize: 26, fontWeight: 700 }}>Welcome Back</div>
        <div style={{ fontSize: 13, color: 'var(--pulse-text-2)', marginTop: 4 }}>Train harder than yesterday.</div>
      </div>
      <PulseField label="Email Address" placeholder="name@example.com" />
      <PulseField label="Password" type="password" placeholder="Password"
        trailing={<span style={{ fontSize: 11, fontWeight: 600, color: 'var(--pulse-accent)' }}>Forgot?</span>} />
      <button onClick={onLogin}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
        onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
        style={{
          height: 48, borderRadius: 12, border: 0, color: '#fff', fontWeight: 700, fontSize: 14,
          fontFamily: 'inherit',
          background: press ? 'var(--pulse-accent-pressed)' : hover ? 'var(--pulse-accent-hover)' : 'var(--pulse-accent)',
          transition: 'var(--transition-control)'
        }}>Login</button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--pulse-hairline)' }} />
        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: 2, color: 'var(--pulse-text-3)' }}>OR CONTINUE WITH</span>
        <div style={{ flex: 1, height: 1, background: 'var(--pulse-hairline)' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {['G', '\uf8ff', 'f'].map(s => (
          <button key={s} style={{
            height: 48, borderRadius: 12, fontSize: 16, fontFamily: 'inherit',
            background: 'var(--pulse-surface-2)', border: '1px solid var(--pulse-surface-2)',
            color: 'var(--pulse-text-3)'
          }}>{s}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', fontSize: 12 }}>
        <span style={{ color: 'var(--pulse-text-2)' }}>New here?</span>
        <span style={{ fontWeight: 700, color: 'var(--pulse-accent)' }}>Create an account</span>
      </div>
    </div>
  );
}
Object.assign(window, { PulseLogin, PulseField });
