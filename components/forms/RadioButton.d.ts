import * as React from 'react';

/**
 * Exclusive choice control (Avalonia RadioButton).
 */
export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'children'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  /** Group name — shared by all siblings. */
  name?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  /** Pulse mobile-showcase variant: 24px ellipse, #256af4 fill. */
  pulse?: boolean;
}
export declare function RadioButton(props: RadioButtonProps): JSX.Element;
