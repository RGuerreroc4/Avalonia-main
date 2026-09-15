import React from 'react';

/* NotificationCard — white card with a coloured status bar. Colours are verbatim
   from FluentControlResources.xaml: Information #0078D4, Success #7ED321,
   Warning #F57D1B, Error #F03916. */
const STATUS = {
  information: 'var(--status-info)',
  success: 'var(--status-success)',
  warning: 'var(--status-warning)',
  error: 'var(--status-error)'
};

export function NotificationCard({ type = 'information', title, children, onClose, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', minWidth: 280, maxWidth: 420, overflow: 'hidden',
      borderRadius: 'var(--radius-overlay)', background: 'var(--surface-page)',
      border: 'var(--border-width) solid var(--border-transient)',
      boxShadow: 'var(--shadow-flyout)', fontFamily: 'var(--font-core)', ...style
    }} {...rest}>
      <div style={{ width: 4, flex: '0 0 auto', background: STATUS[type] }} />
      <div style={{ flex: 1, padding: 'var(--padding-flyout-content)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {title && <strong style={{ fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-body)' }}>{title}</strong>}
        <span style={{ fontSize: 'var(--font-size-12)', lineHeight: 'var(--line-height-normal)', color: 'var(--text-secondary)' }}>{children}</span>
      </div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Close" style={{
          alignSelf: 'flex-start', margin: 'var(--space-8)', padding: 'var(--space-4)',
          border: 0, background: 'transparent', color: 'var(--text-secondary)', lineHeight: 1
        }}>
          <svg viewBox="0 0 24 24" width="12" height="12"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" /></svg>
        </button>
      )}
    </div>
  );
}
