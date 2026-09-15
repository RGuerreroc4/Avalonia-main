import React from 'react';

/* Card — Avalonia has no Card control; this is the Border pattern the samples
   use: a surface with ControlCornerRadius (or the Pulse radius). Default is a
   frosted glass panel: #fff at 15% over a 60px background blur, no border. */
export function Card({ padding = 'var(--space-16)', radius = 'var(--radius-card)', surface = 'rgba(255,255,255,0.15)', bordered = false, children, style, ...rest }) {
  return (
    <div style={{
      padding, borderRadius: radius, background: surface,
      backdropFilter: 'blur(60px)', WebkitBackdropFilter: 'blur(60px)',
      border: bordered ? 'var(--border-width) solid var(--border-hairline)' : 0,
      fontFamily: 'var(--font-core)', color: 'var(--text-body)', ...style
    }} {...rest}>{children}</div>
  );
}
