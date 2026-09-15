import React from 'react';

/* ComboBox — 32px closed control with a chevron; the dropdown is a transient
   surface (5px OverlayCornerRadius, 1px transient border, 4px vertical margin).
   ComboBoxItemThemePadding 11,5,11,7.
   pulse — mobile variant: 48px control, 12px radius, filled #1e293b. */
export function ComboBox({ items = [], value, onChange, placeholder = 'Select…', disabled, pulse, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const label = items.find(i => (i.value ?? i) === value);
  return (
    <div style={{ position: 'relative', fontFamily: 'var(--font-core)', minWidth: pulse ? 0 : 'var(--control-min-width)', ...style }} {...rest}>
      <button type="button" disabled={disabled}
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 'var(--space-8)', minHeight: pulse ? 48 : 'var(--control-height)', height: pulse ? 48 : 'var(--control-height)', boxSizing: 'border-box',
          padding: pulse ? '0 14px' : 'var(--padding-text-control)', borderRadius: pulse ? 12 : 'var(--radius-control)',
          border: (pulse ? '1px' : 'var(--border-width)') + ' solid ' + (disabled ? 'var(--border-disabled)' : pulse ? (open ? 'var(--pulse-accent)' : 'var(--pulse-surface-2)') : open ? 'var(--border-focus)' : 'var(--border-hairline)'),
          boxShadow: !pulse && open ? 'inset 0 0 0 1px var(--border-focus)' : 'none',
          background: pulse ? (disabled ? 'var(--surface-control-disabled)' : 'var(--pulse-surface-2)') : (disabled ? 'var(--surface-control-disabled)' : (open || hover) ? 'var(--surface-control-hover)' : 'var(--alt-medium-high)'),
          color: disabled ? 'var(--text-disabled)' : label ? (pulse ? '#fff' : 'var(--text-body)') : (pulse ? 'var(--pulse-text-4)' : 'var(--text-placeholder)'),
          fontFamily: 'inherit', fontSize: pulse ? 13 : 'var(--font-size-14)', textAlign: 'left',
          transition: 'var(--transition-control)'
        }}>
        <span>{label ? (label.label ?? label) : placeholder}</span>
        <svg viewBox="0 0 24 24" width="14" height="14"><path d="M7,10L12,15L17,10H7Z" fill="currentColor" /></svg>
      </button>
      {open && (
        <div role="listbox" style={{
          position: 'absolute', zIndex: 20, left: 0, right: 0, marginTop: pulse ? 6 : 2,
          padding: '4px 0', borderRadius: pulse ? 12 : 'var(--radius-overlay)',
          border: (pulse ? '1px' : 'var(--border-width)') + ' solid ' + (pulse ? 'var(--pulse-surface-2)' : 'var(--border-transient)'),
          background: pulse ? 'var(--pulse-surface)' : 'var(--surface-transient)', boxShadow: 'var(--shadow-flyout)'
        }}>
          {items.map((it, i) => {
            const val = it.value ?? it;
            const selected = val === value;
            return (
              <div key={i} role="option" aria-selected={selected}
                onClick={() => { onChange && onChange(val); setOpen(false); }}
                onMouseEnter={e => { if (!selected) e.currentTarget.style.background = pulse ? 'var(--pulse-surface-2)' : 'var(--surface-list-hover)'; }}
                onMouseLeave={e => { if (!selected) e.currentTarget.style.background = 'transparent'; }}
                style={{
                  padding: pulse ? '10px 14px' : 'var(--padding-combobox-item)', fontSize: pulse ? 13 : 'var(--font-size-14)',
                  color: pulse ? '#fff' : 'var(--text-body)',
                  background: selected ? (pulse ? 'var(--pulse-surface-2)' : 'var(--surface-list-selected)') : 'transparent'
                }}>{it.label ?? it}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}
