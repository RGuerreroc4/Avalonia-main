import React from 'react';

/* Avalonia renders all iconography as <PathIcon Data="..."/> — raw SVG path
   geometry (24x24 viewBox, Material-style) declared in C# consts. See
   assets/icons/paths.js for the catalog lifted from ControlCatalog/Icons.cs. */
export function PathIcon({ data, size = 20, color = 'var(--text-body)', style, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true"
      style={{ display: 'block', flex: '0 0 auto', ...style }} {...rest}>
      <path d={data} fill={color} />
    </svg>
  );
}
