import * as React from 'react';

/**
 * Tri-state checkbox with the Fluent accent fill.
 */
export interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'children'> {
  checked?: boolean;
  /** Third state — draws a dash instead of a tick. */
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  /** Pulse mobile-showcase variant: 24px box, 7px radius, #256af4 fill. */
  pulse?: boolean;
}
export declare function CheckBox(props: CheckBoxProps): JSX.Element;
