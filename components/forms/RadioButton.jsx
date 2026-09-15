import React from 'react';

/* RadioButton — 20px ellipse, 1px stroke; checked draws an accent ring with a
   white 8px inner glyph (RadioButtonCheckGlyphFill = ChromeWhite).
   pulse — mobile variant: 24px ellipse, #256af4 fill. */
export function RadioButton({ checked, onChange, disabled, name, children, pulse, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const accent = pulse ? 'var(--pulse-accent)' : 'var(--surface-accent)';
  const accentHover = pulse ? 'var(--pulse-accent-hover)' : 'var(--surface-accent-hover)';
  const stroke = disabled ? 'var(--border-disabled)'
    : checked ? (hover ? accentHover : accent)
    : hover ? (pulse ? 'var(--pulse-text-3)' : 'var(--border-control-hover)') : (pulse ? 'var(--pulse-text-4)' : 'var(--border-hairline)');
  const box = pulse ? 24 : 20;
  return (
    <label onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)',
        fontFamily: 'var(--font-core)', fontSize: pulse ? 14 : 'var(--font-size-14)',
        color: disabled ? 'var(--text-disabled)' : pulse ? 'var(--pulse-text)' : 'var(--text-body)', ...style
      }}>
      <input type="radio" name={name} checked={!!checked} disabled={disabled}
        onChange={() => onChange && onChange(true)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        width: box, height: box, flex: '0 0 auto', display: 'grid', placeItems: 'center',
        borderRadius: '50%', border: (pulse ? '1.5px' : 'var(--border-width)') + ' solid ' + stroke,
        background: checked && !disabled ? accent : 'transparent',
        transition: 'var(--transition-control)'
      }}>
        {checked && <span style={{ width: pulse ? 9 : 8, height: pulse ? 9 : 8, borderRadius: '50%', background: 'var(--text-on-accent)' }} />}
      </span>
      {children}
    </label>
  );
}
