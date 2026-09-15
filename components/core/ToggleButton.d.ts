import * as React from 'react';

/**
 * Button that latches on, filling with the accent colour when checked.
 */
export interface ToggleButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}
export declare function ToggleButton(props: ToggleButtonProps): JSX.Element;
