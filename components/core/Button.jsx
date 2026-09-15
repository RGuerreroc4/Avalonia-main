import React from 'react';

/* Fluent Button. ButtonPadding 8,5,8,6 · ControlCornerRadius 4 ·
   ButtonBorderThemeThickness 1 · standard fill = SystemControlBackgroundBaseLowBrush,
   accent fill = SystemAccentColor with Light1 hover / Dark1 pressed. */
const variants = {
  standard: {
    background: 'var(--surface-control)', color: 'var(--text-body)', borderColor: 'transparent',
    hover: { background: 'var(--surface-control-hover)' },
    active: { background: 'var(--surface-control-pressed)' }
  },
  accent: {
    background: 'var(--surface-accent)', color: 'var(--text-on-accent)', borderColor: 'transparent',
    hover: { background: 'var(--surface-accent-hover)' },
    active: { background: 'var(--surface-accent-pressed)' }
  },
  outline: {
    background: 'transparent', color: 'var(--text-body)', borderColor: 'var(--border-control)',
    hover: { background: 'var(--surface-control-hover)', borderColorHover: 'var(--border-control-hover)' },
    active: { background: 'var(--surface-control-pressed)' }
  },
  transparent: {
    background: 'transparent', color: 'var(--text-body)', borderColor: 'transparent',
    hover: { background: 'var(--surface-control-hover)' },
    active: { background: 'var(--surface-control-pressed)' }
  }
};

export function Button({ variant = 'standard', disabled, icon, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.standard;
  const state = disabled ? {} : active ? v.active : hover ? v.hover : {};
  const { borderColorHover, ...stateStyle } = state;
  const borderColor = disabled ? 'transparent' : (borderColorHover || v.borderColor);
  return (
    <button type="button" disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-8)',
        minWidth: 'var(--control-min-width)', height: 'var(--control-height)', boxSizing: 'border-box', padding: 'var(--padding-button)',
        fontFamily: 'var(--font-core)', fontSize: 'var(--font-size-12)', lineHeight: 1.4,
        borderRadius: 'var(--radius-control)',
        border: 'var(--border-width) solid ' + borderColor,
        background: disabled ? 'var(--surface-control-disabled)' : v.background,
        color: disabled ? 'var(--text-disabled)' : v.color,
        cursor: disabled ? 'default' : 'pointer',
        transition: 'var(--transition-control)',
        ...stateStyle, ...style
      }} {...rest}>
      {icon}{children}
    </button>
  );
}
