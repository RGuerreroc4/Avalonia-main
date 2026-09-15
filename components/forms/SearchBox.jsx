import React from 'react';

/* SearchBox — filled, borderless search field used in navigation panels.
   48px tall, 8px radius, --surface-subtle fill with a 0 1px 0 seam shadow;
   leading magnifier glyph in --text-tertiary. No focus ring (it reads as a
   toolbar field, not a form control). */
export function SearchBox({ placeholder = 'Search', value, onChange, disabled, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px',
      height: 48, boxSizing: 'border-box', borderRadius: 'var(--radius-overlay)',
      background: 'var(--surface-subtle)', boxShadow: '0 1px 0 rgba(0,0,0,.35)',
      opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-core)', ...style
    }}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" style={{ display: 'block', flex: '0 0 auto' }}>
        <path d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" fill="var(--text-tertiary)" />
      </svg>
      <input type="text" value={value} placeholder={placeholder} disabled={disabled}
        onChange={e => onChange && onChange(e.target.value)}
        style={{
          flex: 1, minWidth: 0, border: 0, outline: 'none', background: 'transparent',
          fontFamily: 'inherit', fontSize: 'var(--font-size-15, 15px)', color: 'var(--text-body)'
        }} {...rest} />
    </div>
  );
}
