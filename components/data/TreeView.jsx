import React from 'react';

/* TreeView — the project-navigator menu. One 16px pill serves every row across
   all states (rest / hover / selected). Structural rows (site, location, floor,
   room — any node with children) carry a +/- glyph as the leading element inside
   the pill and no icon; their child count parks in the right meta column. Device
   / accessory leaves carry a PathIcon and a status dot in that same right column.
   The +/- glyph appears only on expandable rows; the hover/select bubble wraps
   it because it lives inside the pill (no separate outer toggle). */

const ROW = {
  display: 'flex', alignItems: 'center', gap: 'var(--space-12)',
  position: 'relative', minHeight: 'var(--menu-item-min-height)',
  padding: '6px 34px 6px 10px', borderRadius: 16, cursor: 'pointer',
  fontFamily: 'var(--font-core)', fontSize: 'var(--font-size-14)',
  color: 'var(--text-body)', transition: 'var(--transition-control)',
  userSelect: 'none'
};

function surface(selected, hover) {
  return selected ? 'var(--surface-list-selected)' : hover ? 'var(--surface-list-hover)' : 'transparent';
}

function Glyph({ open }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"
      style={{ flex: '0 0 auto', display: 'block' }}>
      <path d="M5 12h14" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" />
      {!open && <path d="M12 5v14" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" />}
    </svg>
  );
}

function DeviceIcon({ icon }) {
  if (icon == null) return null;
  if (typeof icon === 'string') {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" style={{ flex: '0 0 auto', display: 'block' }}>
        <path d={icon} fill="var(--text-secondary)" />
      </svg>
    );
  }
  return <span style={{ display: 'grid', placeItems: 'center', width: 20, flex: '0 0 auto' }}>{icon}</span>;
}

function Node({ node, path, depth, open, setOpen, hover, setHover, sel, pick }) {
  const kids = node.items || node.children;
  const expandable = Array.isArray(kids) && kids.length > 0;
  const isOpen = expandable ? (open[path] ?? node.defaultExpanded !== false) : false;
  const on = sel === path;
  const onClick = expandable
    ? () => setOpen(o => ({ ...o, [path]: !(o[path] ?? node.defaultExpanded !== false) }))
    : () => pick(path);
  return (
    <>
      <div role="treeitem" aria-expanded={expandable ? isOpen : undefined} aria-selected={expandable ? undefined : on}
        onClick={onClick}
        onMouseEnter={() => setHover(path)} onMouseLeave={() => setHover(null)}
        style={{
          ...ROW, paddingLeft: 10 + depth * 20, fontWeight: expandable ? 600 : 400,
          background: surface(on, hover === path)
        }}>
        {expandable && <Glyph open={isOpen} />}
        <DeviceIcon icon={node.icon} />
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{node.name}</span>
        {expandable
          ? node.count != null && (
            <span style={{
              position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
              fontSize: 'var(--font-size-12)', color: 'var(--text-tertiary)'
            }}>{node.count}</span>
          )
          : node.status && (
            <span style={{
              position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
              width: 8, height: 8, borderRadius: '50%',
              background: node.status === 'on' ? 'var(--status-success)' : 'var(--base-medium-low)'
            }} />
          )}
      </div>
      {expandable && isOpen && kids.map((child, i) => (
        <Node key={path + '/' + i} node={child} path={path + '/' + i} depth={depth + 1}
          open={open} setOpen={setOpen} hover={hover} setHover={setHover} sel={sel} pick={pick} />
      ))}
    </>
  );
}

export function TreeView({ nodes, rooms, selected, onSelect, style, ...rest }) {
  const roots = nodes || rooms || [];
  const [open, setOpen] = React.useState({});
  const [hover, setHover] = React.useState(null);
  const [internalSel, setInternalSel] = React.useState(null);
  const sel = selected ?? internalSel;
  const pick = key => { onSelect ? onSelect(key) : setInternalSel(key); };
  return (
    <div role="tree" style={{ display: 'flex', flexDirection: 'column', gap: 2, ...style }} {...rest}>
      {roots.map((node, i) => (
        <Node key={i} node={node} path={String(i)} depth={0}
          open={open} setOpen={setOpen} hover={hover} setHover={setHover} sel={sel} pick={pick} />
      ))}
    </div>
  );
}
