import * as React from 'react';

/**
 * Filled, borderless search field for navigation panels (48px tall, 8px radius,
 * seam shadow, leading magnifier). Not a bordered form TextBox.
 */
export interface SearchBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}
export declare function SearchBox(props: SearchBoxProps): JSX.Element;
