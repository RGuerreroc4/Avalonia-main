import React from 'react';

/* ProgressBar — 4px min height (ProgressBarThemeMinHeight), zero border,
   accent indicator over a base-low track. */
export function ProgressBar({ value = 0, indeterminate, showText, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', fontFamily: 'var(--font-core)', ...style }} {...rest}>
      <div role="progressbar" aria-valuenow={indeterminate ? undefined : value} style={{
        position: 'relative', overflow: 'hidden', height: 'var(--progress-height)',
        borderRadius: 'var(--radius-pill)', background: 'var(--surface-control)'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          width: indeterminate ? '35%' : Math.max(0, Math.min(100, value)) + '%',
          background: 'var(--surface-accent)', borderRadius: 'var(--radius-pill)',
          animation: indeterminate ? 'av-indeterminate 1.6s var(--ease-standard) infinite' : 'none',
          transition: indeterminate ? 'none' : 'width var(--duration-normal) var(--ease-standard)'
        }} />
        <style>{'@keyframes av-indeterminate{0%{transform:translateX(-110%)}100%{transform:translateX(310%)}}'}</style>
      </div>
      {showText && !indeterminate && <span style={{ fontSize: 'var(--font-size-12)', color: 'var(--text-secondary)' }}>{Math.round(value)}%</span>}
    </div>
  );
}
