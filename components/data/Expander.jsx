import React from 'react';

/* Expander — header plate + chevron, content on a chrome-medium-low surface with
   a base-low hairline. ExpandDirection="Up" is used for the settings drawer footer. */
export function Expander({ header, expanded, onToggle, direction = 'down', children, style, ...rest }) {
  const [internal, setInternal] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const open = expanded ?? internal;
  const toggle = () => (onToggle ? onToggle(!open) : setInternal(!open));
  const content = (
    <div style={{
      padding: 'var(--space-12)', background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)', borderTop: direction === 'down' ? 0 : undefined,
      borderBottom: direction === 'up' ? 0 : undefined, fontSize: 'var(--font-size-14)', color: 'var(--text-body)'
    }}>{children}</div>
  );
  return (
    <div style={{ fontFamily: 'var(--font-core)', ...style }} {...rest}>
      {open && direction === 'up' && content}
      <button type="button" onClick={toggle}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 'var(--space-12)', minHeight: 'var(--control-min-height)',
          padding: '10px var(--space-12)', textAlign: 'left', outline: 'none',
          borderRadius: 'var(--radius-control)',
          border: 'var(--border-width) solid ' + (focus ? 'var(--border-focus)' : 'var(--border-hairline)'),
          boxShadow: focus ? 'inset 0 0 0 1px var(--border-focus)' : 'none',
          background: (hover || focus) ? 'var(--surface-control-hover)' : 'var(--alt-medium-high)',
          color: 'var(--text-body)', fontFamily: 'inherit', fontSize: 'var(--font-size-14)',
          transition: 'var(--transition-control)'
        }}>
        <span>{header}</span>
        <svg viewBox="0 0 24 24" width="14" height="14" style={{
          transform: 'rotate(' + (open ? (direction === 'up' ? -90 : 90) : (direction === 'up' ? -90 : 90) * (open ? 1 : 0)) + 'deg)',
          transition: 'transform var(--duration-fast) var(--ease-standard)'
        }}>
          <path d="M8.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L13.586 11 8.293 5.707a1 1 0 0 1 0-1.414Z" fill="currentColor" />
        </svg>
      </button>
      {open && direction === 'down' && content}
    </div>
  );
}
