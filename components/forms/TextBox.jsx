import React from 'react';

/* TextBox — TextControlThemePadding 10,6,6,5 · min height 32 · 1px border that
   gains a 1px inset accent ring on focus (no layout shift).
   pulse — the mobile-showcase variant: 48px tall, 12px radius, filled
   #1e293b surface, borderless at rest, #256af4 accent border on focus. */
export function TextBox({ label, placeholder, value, onChange, disabled, error, innerLeft, innerRight, pulse, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const border = disabled ? 'var(--border-disabled)'
    : error ? 'var(--text-error)'
    : focus ? (pulse ? 'var(--pulse-accent)' : 'var(--border-focus)')
    : pulse ? 'var(--pulse-surface-2)' : 'var(--border-hairline)';
  const ring = error ? 'var(--text-error)' : 'var(--border-focus)';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: pulse ? 8 : 'var(--space-4)', fontFamily: 'var(--font-core)', ...style }}>
      {label && <span style={{ fontSize: pulse ? 12 : 'var(--font-size-12)', fontWeight: pulse ? 500 : 400, color: pulse ? 'var(--pulse-text-2)' : 'var(--text-secondary)' }}>{label}</span>}
      <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: pulse ? 10 : 'var(--space-6)',
          minHeight: pulse ? 48 : 'var(--control-height)', height: pulse ? 48 : 'var(--control-height)', boxSizing: 'border-box',
          minWidth: pulse ? 0 : 'var(--control-min-width)',
          padding: pulse ? '0 14px' : 'var(--padding-text-control)', borderRadius: pulse ? 12 : 'var(--radius-control)',
          border: '1px solid ' + border,
          boxShadow: !pulse && focus ? 'inset 0 0 0 1px ' + ring : 'none',
          background: pulse
            ? (disabled ? 'var(--surface-control-disabled)' : 'var(--pulse-surface-2)')
            : (disabled ? 'var(--surface-control-disabled)' : (focus || hover) ? 'var(--surface-control-hover)' : 'var(--alt-medium-high)'),
          transition: 'var(--transition-control)'
        }}>
        {innerLeft}
        <input type="text" value={value} placeholder={placeholder} disabled={disabled}
          onChange={e => onChange && onChange(e.target.value)}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, border: 0, outline: 'none', background: 'transparent',
            fontFamily: 'inherit', fontSize: pulse ? 13 : 'var(--font-size-14)',
            color: disabled ? 'var(--text-disabled)' : pulse ? '#fff' : 'var(--text-body)'
          }} {...rest} />
        {innerRight}
      </span>
      {error && <span style={{ fontSize: pulse ? 12 : 'var(--font-size-12)', color: 'var(--text-error)' }}>{error}</span>}
    </label>
  );
}
