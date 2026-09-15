import React from 'react';

/* SegmentedControl — pill switcher. A fully-rounded track (--surface-card) holds
   equal pills; the active pill fills with --accent, the rest are transparent.
   2px track padding + 2px gap so the active pill seats inside the track. */
export function SegmentedControl({ items = [], value, onChange, style, ...rest }) {
  const active = typeof value === 'number' ? items[value] : value;
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 2, padding: 2,
      borderRadius: 'var(--radius-pill)', background: 'var(--surface-card)',
      fontFamily: 'var(--font-core)', ...style
    }} {...rest}>
      {items.map((item, i) => {
        const on = item === active;
        return (
          <button key={item} type="button" onClick={() => onChange && onChange(item, i)}
            style={{
              border: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, lineHeight: 1,
              padding: '8px 16px', height: 'auto', borderRadius: 'var(--radius-pill)',
              background: on ? 'var(--accent)' : 'transparent',
              color: on ? 'var(--text-on-accent, #fff)' : 'var(--text-secondary)',
              transition: 'var(--transition-control)'
            }}>{item}</button>
        );
      })}
    </div>
  );
}
