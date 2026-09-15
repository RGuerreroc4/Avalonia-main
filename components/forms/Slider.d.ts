import * as React from 'react';

/**
 * Continuous value slider with a 2px track and accent thumb.
 */
export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  /** Show the numeric value to the right of the track. */
  showValue?: boolean;
  /** Pulse mobile-showcase variant: 4px track over #1e293b, #256af4 fill, 18px thumb. */
  pulse?: boolean;
}
export declare function Slider(props: SliderProps): JSX.Element;
