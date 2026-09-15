import React from 'react';

/* ToggleButton — same geometry as Button; checked state swaps to the accent
   fill (ToggleButtonBackgroundChecked = SystemControlHighlightAccentBrush). */
export function ToggleButton({ checked, onChange, disabled, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const bg = disabled ? 'var(--surface-control-disabled)'
    : checked ? (hover ? 'var(--surface-accent-hover)' : 'var(--surface-accent)')
    : (hover ? 'var(--surface-control-hover)' : 'var(--surface-control)');
  return (
    <button type="button" aria-pressed={!!checked} disabled={disabled}
      onClick={() => onChange && onChange(!checked)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-8)',
        minWidth: 'var(--control-min-width)', height: 'var(--control-height)', boxSizing: 'border-box', padding: 'var(--padding-button)',
        fontFamily: 'var(--font-core)', fontSize: 'var(--font-size-12)',
        borderRadius: 'var(--radius-control)', border: 'var(--border-width) solid transparent',
        background: bg,
        color: disabled ? 'var(--text-disabled)' : checked ? 'var(--text-on-accent)' : 'var(--text-body)',
        transition: 'var(--transition-control)', ...style
      }} {...rest}>{children}</button>
  );
}
