import React from 'react';

/* CheckBox — 20px box, 1px base-medium stroke unchecked, accent fill checked,
   white glyph. Indeterminate draws an accent-filled box with a dash.
   pulse — mobile variant: 24px box, 7px radius, #256af4 fill. */
export function CheckBox({ checked, indeterminate, onChange, disabled, children, pulse, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const on = checked || indeterminate;
  const accent = pulse ? 'var(--pulse-accent)' : 'var(--surface-accent)';
  const accentHover = pulse ? 'var(--pulse-accent-hover)' : 'var(--surface-accent-hover)';
  const fill = disabled ? (on ? 'var(--surface-control-disabled)' : 'transparent')
    : on ? (hover ? accentHover : accent) : 'transparent';
  const stroke = disabled ? 'var(--border-disabled)'
    : on ? 'transparent' : hover ? (pulse ? 'var(--pulse-text-3)' : 'var(--border-control-hover)') : (pulse ? 'var(--pulse-text-4)' : 'var(--border-hairline)');
  const box = pulse ? 24 : 20;
  return (
    <label onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)',
        fontFamily: 'var(--font-core)', fontSize: pulse ? 14 : 'var(--font-size-14)',
        color: disabled ? 'var(--text-disabled)' : pulse ? 'var(--pulse-text)' : 'var(--text-body)', ...style
      }}>
      <input type="checkbox" checked={!!checked} disabled={disabled}
        onChange={e => onChange && onChange(e.target.checked)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        width: box, height: box, flex: '0 0 auto', display: 'grid', placeItems: 'center',
        borderRadius: pulse ? 7 : 'var(--radius-control)', background: fill,
        border: (pulse ? '1.5px' : 'var(--border-width)') + ' solid ' + stroke, transition: 'var(--transition-control)'
      }}>
        {indeterminate
          ? <span style={{ width: pulse ? 12 : 10, height: 2, background: 'var(--text-on-accent)' }} />
          : checked
            ? <svg viewBox="0 0 24 24" width={pulse ? 16 : 14} height={pulse ? 16 : 14}><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--text-on-accent)" /></svg>
            : null}
      </span>
      {children}
    </label>
  );
}
