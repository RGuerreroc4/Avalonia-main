import React from 'react';

/* ToggleSwitch — pill track with a knob; on-state track fills with the accent,
   knob is ChromeWhite. Off track is a 1px base-medium stroke over transparent.
   pulse — mobile variant: 46×26 track, #256af4 on, filled #1e293b off. */
export function ToggleSwitch({ checked, onChange, disabled, onContent = 'On', offContent = 'Off', showContent = true, pulse, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const w = pulse ? 46 : 40, h = pulse ? 26 : 20, knob = pulse ? 20 : 14;
  const accent = pulse ? 'var(--pulse-accent)' : 'var(--surface-accent)';
  const accentHover = pulse ? 'var(--pulse-accent-hover)' : 'var(--surface-accent-hover)';
  const offTrack = pulse ? 'var(--pulse-surface-2)' : (hover ? 'var(--surface-control-hover)' : 'transparent');
  const offBorder = pulse ? 'var(--pulse-surface-2)' : 'var(--border-hairline)';
  return (
    <label onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-12)',
        fontFamily: 'var(--font-core)', fontSize: pulse ? 14 : 'var(--font-size-14)',
        color: disabled ? 'var(--text-disabled)' : pulse ? 'var(--pulse-text)' : 'var(--text-body)', ...style
      }}>
      <input type="checkbox" checked={!!checked} disabled={disabled}
        onChange={e => onChange && onChange(e.target.checked)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        width: w, height: h, flex: '0 0 auto', borderRadius: 'var(--radius-pill)',
        display: 'flex', alignItems: 'center', padding: '0 3px',
        justifyContent: checked ? 'flex-end' : 'flex-start',
        background: disabled ? 'var(--surface-control-disabled)'
          : checked ? (hover ? accentHover : accent) : offTrack,
        border: (pulse ? '1px' : 'var(--border-width)') + ' solid ' + (disabled ? 'var(--border-disabled)' : checked ? 'transparent' : offBorder),        transition: 'var(--transition-control)'
      }}>
        <span style={{
          width: knob, height: knob, borderRadius: '50%',
          background: disabled ? 'var(--text-disabled)' : checked ? 'var(--text-on-accent)' : (pulse ? 'var(--pulse-text-3)' : 'var(--text-body)'),
          transition: 'all var(--duration-fast) var(--ease-standard)'
        }} />
      </span>
      {showContent && <span>{checked ? onContent : offContent}</span>}
    </label>
  );
}
