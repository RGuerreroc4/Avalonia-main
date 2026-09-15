import React from 'react';

/* Slider — 2px track (SliderTrackThemeHeight), accent-filled left half, round
   accent thumb. Hover lightens the thumb (Light1), press darkens it (Dark1).
   pulse — mobile variant: 4px track over #1e293b, #256af4 fill, 18px thumb. */
export function Slider({ value = 0, min = 0, max = 100, step = 1, onChange, disabled, showValue, pulse, style, ...rest }) {
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;
  const cls = pulse ? 'pulse' : 'std';
  const fill = disabled ? 'var(--chrome-disabled-high)' : pulse ? 'var(--pulse-accent)' : 'var(--surface-accent)';
  const rail = pulse ? 'var(--pulse-surface-2)' : 'var(--text-tertiary)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', fontFamily: 'var(--font-core)', ...style }}>
      <input type="range" className={'ds-slider-' + cls} min={min} max={max} step={step} value={value} disabled={disabled}
        onChange={e => onChange && onChange(Number(e.target.value))}
        style={{
          flex: 1, appearance: 'none', WebkitAppearance: 'none', height: 20, background: 'transparent',
          backgroundImage: 'linear-gradient(to right, ' + fill + ' 0 ' + pct + '%, ' + rail + ' ' + pct + '% 100%)',
          backgroundSize: '100% ' + (pulse ? '4px' : 'var(--slider-track-height)'), backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center', borderRadius: 999, cursor: disabled ? 'default' : 'pointer'
        }} {...rest} />
      {showValue && <span style={{ fontSize: pulse ? 13 : 'var(--font-size-12)', color: pulse ? 'var(--pulse-text-2)' : 'var(--text-secondary)', minWidth: 28, textAlign: 'right' }}>{value}</span>}
      <style>{'.ds-slider-std::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--surface-accent);border:0}.ds-slider-std:hover::-webkit-slider-thumb{background:var(--surface-accent-hover)}.ds-slider-std:active::-webkit-slider-thumb{background:var(--surface-accent-pressed)}.ds-slider-std:disabled::-webkit-slider-thumb{background:var(--chrome-disabled-high)}.ds-slider-std::-moz-range-thumb{width:16px;height:16px;border:0;border-radius:50%;background:var(--surface-accent)}.ds-slider-pulse::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#fff;border:0;box-shadow:0 1px 3px rgba(0,0,0,.4)}.ds-slider-pulse:active::-webkit-slider-thumb{background:#fff}.ds-slider-pulse:disabled::-webkit-slider-thumb{background:var(--chrome-disabled-high)}.ds-slider-pulse::-moz-range-thumb{width:18px;height:18px;border:0;border-radius:50%;background:#fff}'}</style>
    </div>
  );
}
