import React from 'react';

/* HyperlinkButton — accent-coloured underlined text, near-invisible #09000000 hover
   plate, Dark1 accent on press, #681DA8 once visited. */
export function HyperlinkButton({ visited, disabled, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const color = disabled ? 'var(--text-disabled)'
    : visited ? 'var(--text-link-visited)'
    : active ? 'var(--text-link-pressed)' : 'var(--text-link)';
  return (
    <a role="button" tabIndex={disabled ? -1 : 0}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', padding: 'var(--padding-button)',
        fontFamily: 'var(--font-core)', fontSize: 'var(--font-size-12)',
        borderRadius: 'var(--radius-control)', textDecoration: 'underline', color,
        background: hover && !disabled ? (active ? '#06000000' : '#09000000') : 'transparent',
        transition: 'var(--transition-control)', ...style
      }} {...rest}>{children}</a>
  );
}
