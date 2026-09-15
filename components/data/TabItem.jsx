import React from 'react';

/* TabItem — text tab; selected state is accent text with a 2px accent underline
   (TabStrip in the catalog uses a 20px header font size, 10px strip padding). */
export function TabItem({ selected, icon, children, onClick, orientation = 'horizontal', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const under = orientation === 'horizontal'
    ? { borderBottom: '2px solid ' + (selected ? 'var(--surface-accent)' : 'transparent') }
    : { borderLeft: '2px solid ' + (selected ? 'var(--surface-accent)' : 'transparent') };
  return (
    <button type="button" role="tab" aria-selected={!!selected} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)',
        padding: '8px var(--space-12)', border: 0, background: hover && !selected ? 'var(--surface-list-hover)' : 'transparent',
        fontFamily: 'var(--font-core)', fontSize: 'var(--font-size-14)',
        fontWeight: selected ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
        color: selected ? 'var(--text-body)' : 'var(--text-secondary)',
        transition: 'var(--transition-control)', ...under, ...style
      }} {...rest}>{icon}{children}</button>
  );
}
