import React from 'react';

/* ListBoxItem — transparent by default, list-low hover, list-medium press,
   accent-tinted selection (SystemControlHighlightListAccentLowBrush). */
export function ListItem({ selected, icon, children, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div role="option" aria-selected={!!selected} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-12)',
        minHeight: 'var(--menu-item-min-height)', padding: 'var(--padding-combobox-item)',
        borderRadius: 'var(--radius-control)', fontFamily: 'var(--font-core)',
        fontSize: 'var(--font-size-14)', color: 'var(--text-body)',
        background: selected ? 'var(--surface-list-selected)' : hover ? 'var(--surface-list-hover)' : 'transparent',
        transition: 'var(--transition-control)', ...style
      }} {...rest}>
      {icon && <span style={{ display: 'grid', placeItems: 'center', width: 20, flex: '0 0 auto' }}>{icon}</span>}
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{children}</span>
    </div>
  );
}
