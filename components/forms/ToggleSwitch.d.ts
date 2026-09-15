import * as React from 'react';

/**
 * On/off switch with On/Off content text (Avalonia ToggleSwitch).
 */
export interface ToggleSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Text shown when on. Default "On". */
  onContent?: React.ReactNode;
  /** Text shown when off. Default "Off". */
  offContent?: React.ReactNode;
  /** Hide the trailing text entirely. */
  showContent?: boolean;
  /** Pulse mobile-showcase variant: 46×26 track, #256af4 on, filled #1e293b off. */
  pulse?: boolean;
}
export declare function ToggleSwitch(props: ToggleSwitchProps): JSX.Element;
